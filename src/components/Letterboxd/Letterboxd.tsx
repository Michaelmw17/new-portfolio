import { FilmCarousel } from './FilmCarousel';

export const dynamic = 'force-dynamic';

const USERNAME = process.env.LETTERBOXD_USERNAME?.trim() ?? '';
const RATING_THRESHOLD = 4.5;
const REVALIDATE_SECONDS = 3600;
const LETTERBOXD_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
  Accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-AU,en;q=0.9,en-US;q=0.8',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Referer: 'https://letterboxd.com/',
  'Upgrade-Insecure-Requests': '1',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-User': '?1',
  'Sec-CH-UA': '"Chromium";v="136", "Not=A?Brand";v="24"',
  'Sec-CH-UA-Mobile': '?0',
  'Sec-CH-UA-Platform': '"macOS"',
} as const;

export type Film = {
  slug: string;
  title: string;
  year: string;
  link: string;
  rating: number;
  poster: string;
};

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function parseTitleAndYear(itemName: string): { title: string; year: string } {
  const decoded = decodeHtmlEntities(itemName);
  const match = /^(.+?) \((\d{4})\)$/.exec(decoded);
  return match
    ? { title: match[1], year: match[2] }
    : { title: decoded, year: '' };
}

type FetchResult<T> = {
  data: T;
  error?: string;
};

const STATIC_FALLBACK_FILMS: Film[] = [
  {
    slug: 'parasite-2019',
    title: 'Parasite',
    year: '2019',
    link: 'https://letterboxd.com/film/parasite-2019/',
    rating: 5,
    poster:
      'https://a.ltrbxd.com/resized/film-poster/1/1/6/6/7/7/116677-parasite-0-1000-0-1500-crop.jpg?v=8d48dbb93d',
  },
  {
    slug: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    year: '1994',
    link: 'https://letterboxd.com/film/the-shawshank-redemption/',
    rating: 5,
    poster:
      'https://a.ltrbxd.com/resized/film-poster/5/1/3/9/5139-the-shawshank-redemption-0-1000-0-1500-crop.jpg?v=8d48dbb93d',
  },
  {
    slug: 'the-dark-knight',
    title: 'The Dark Knight',
    year: '2008',
    link: 'https://letterboxd.com/film/the-dark-knight/',
    rating: 5,
    poster:
      'https://a.ltrbxd.com/resized/film-poster/5/2/0/7/5207-the-dark-knight-0-1000-0-1500-crop.jpg?v=8d48dbb93d',
  },
  {
    slug: 'pulp-fiction',
    title: 'Pulp Fiction',
    year: '1994',
    link: 'https://letterboxd.com/film/pulp-fiction/',
    rating: 5,
    poster:
      'https://a.ltrbxd.com/resized/film-poster/5/1/4/5/5145-pulp-fiction-0-1000-0-1500-crop.jpg?v=8d48dbb93d',
  },
  {
    slug: 'inception',
    title: 'Inception',
    year: '2010',
    link: 'https://letterboxd.com/film/inception/',
    rating: 5,
    poster:
      'https://a.ltrbxd.com/resized/film-poster/5/2/4/6/5246-inception-0-1000-0-1500-crop.jpg?v=8d48dbb93d',
  },
  {
    slug: 'the-godfather',
    title: 'The Godfather',
    year: '1972',
    link: 'https://letterboxd.com/film/the-godfather/',
    rating: 5,
    poster:
      'https://a.ltrbxd.com/resized/film-poster/5/0/5/9/5059-the-godfather-0-1000-0-1500-crop.jpg?v=8d48dbb93d',
  },
];

async function fetchFilmList(): Promise<FetchResult<Omit<Film, 'poster'>[]>> {
  if (!USERNAME) {
    const error = 'LETTERBOXD_USERNAME is not configured.';
    console.warn('[letterboxd] LETTERBOXD_USERNAME is not set');
    return { data: [], error };
  }

  const url = `https://letterboxd.com/${USERNAME}/films/rated/${RATING_THRESHOLD}-5/by/your-rating/`;
  const res = await fetch(url, {
    headers: LETTERBOXD_HEADERS,
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    const error = `Letterboxd list fetch failed (${res.status} ${res.statusText})`;
    console.warn('[letterboxd] list fetch failed', {
      status: res.status,
      statusText: res.statusText,
      url: res.url,
    });
    return { data: [], error };
  }

  const html = await res.text();
  const liBlocks = [
    ...html.matchAll(/<li class="griditem">([\s\S]*?)<\/li>/g),
  ].map((m) => m[1]);
  console.info('[letterboxd] list fetch result', {
    status: res.status,
    url: res.url,
    hasGridItems: html.includes('class="griditem"'),
    hasSigninPrompt: html.toLowerCase().includes('sign in'),
    hasRobotsMeta: html.toLowerCase().includes('noindex'),
    filmCount: liBlocks.length,
  });

  const films: Omit<Film, 'poster'>[] = [];

  for (const block of liBlocks) {
    const nameMatch = /data-item-name="([^"]+)"/.exec(block);
    const slugMatch = /data-item-slug="([^"]+)"/.exec(block);
    const linkMatch = /data-item-link="([^"]+)"/.exec(block);
    const ratingMatch = /<span class="rating[^\"]*\brated-(\d+)\b[^\"]*"/.exec(
      block,
    );

    if (!nameMatch || !slugMatch || !linkMatch || !ratingMatch) continue;

    const { title, year } = parseTitleAndYear(nameMatch[1]);
    const rating = parseInt(ratingMatch[1], 10) / 2;

    films.push({
      slug: slugMatch[1],
      title,
      year,
      link: `https://letterboxd.com${linkMatch[1]}`,
      rating,
    });
  }

  const error =
    films.length === 0 && liBlocks.length === 0
      ? 'No rated films could be parsed from Letterboxd. The page may be blocked or the markup has changed.'
      : undefined;

  return { data: films, error };
}

async function fetchPoster(slug: string): Promise<string> {
  try {
    const res = await fetch(`https://letterboxd.com/film/${slug}/`, {
      headers: LETTERBOXD_HEADERS,
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return '';
    const html = await res.text();
    const match =
      /"image":"(https:\/\/a\.ltrbxd\.com\/resized\/film-poster\/[^"]+)"/.exec(
        html,
      );
    return match ? match[1] : '';
  } catch {
    return '';
  }
}

async function fetchFavoriteFilms(): Promise<FetchResult<Film[]>> {
  const listResult = await fetchFilmList();

  if (listResult.error) {
    console.warn(
      '[letterboxd] Falling back to static film list due to fetch error:',
      listResult.error,
    );
    return { data: STATIC_FALLBACK_FILMS };
  }

  const withPosters = await Promise.all(
    listResult.data.map(async (film) => ({
      ...film,
      poster: await fetchPoster(film.slug),
    })),
  );

  const films = withPosters
    .filter((f) => f.poster)
    .sort((a, b) => b.rating - a.rating || a.title.localeCompare(b.title));

  if (films.length === 0 && listResult.data.length > 0) {
    console.warn(
      '[letterboxd] No posters loaded, falling back to static film list',
    );
    return { data: STATIC_FALLBACK_FILMS };
  }

  return { data: films };
}

export default async function Letterboxd() {
  const { data: films } = await fetchFavoriteFilms();

  return (
    <section className="anchor-section section-shell bg-[var(--ink)] px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div id="favourites" className="anchor-target mb-12">
          <div className="label-mono mb-3">{'// favourites'}</div>
          <h2 className="serif-display text-3xl md:text-5xl">
            Favourite Movies
          </h2>
          <div className="h-px w-full bg-[var(--border)] mt-6" />
        </div>

        <p className="text-[var(--cream)] text-base mb-10 max-w-xl leading-relaxed">
          Every film I&rsquo;ve rated 4.5&#9733; or higher. Pulled live from
          Letterboxd.
        </p>

        {films.length > 0 ? (
          <FilmCarousel films={films} />
        ) : (
          <p className="font-mono text-sm text-[var(--cream)] opacity-60">
            No favourites yet — check back later.
          </p>
        )}
      </div>
    </section>
  );
}
