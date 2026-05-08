import { FilmCarousel } from "./FilmCarousel";

const USERNAME = process.env.LETTERBOXD_USERNAME?.trim() ?? "";
const RATING_THRESHOLD = 4.5;
const REVALIDATE_SECONDS = 3600;
const LETTERBOXD_HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
  accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "accept-language": "en-AU,en;q=0.9,en-US;q=0.8",
  "cache-control": "no-cache",
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
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function parseTitleAndYear(itemName: string): { title: string; year: string } {
  const decoded = decodeHtmlEntities(itemName);
  const match = /^(.+?) \((\d{4})\)$/.exec(decoded);
  return match ? { title: match[1], year: match[2] } : { title: decoded, year: "" };
}

async function fetchFilmList(): Promise<Omit<Film, "poster">[]> {
  if (!USERNAME) {
    console.warn("[letterboxd] LETTERBOXD_USERNAME is not set");
    return [];
  }

  const url = `https://letterboxd.com/${USERNAME}/films/rated/${RATING_THRESHOLD}-5/by/your-rating/`;
  const res = await fetch(url, {
    headers: LETTERBOXD_HEADERS,
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    console.warn("[letterboxd] list fetch failed", {
      status: res.status,
      statusText: res.statusText,
      url: res.url,
    });
    return [];
  }
  const html = await res.text();

  const liBlocks = [...html.matchAll(/<li class="griditem">([\s\S]*?)<\/li>/g)].map((m) => m[1]);
  console.info("[letterboxd] list fetch result", {
    status: res.status,
    url: res.url,
    hasGridItems: html.includes('class="griditem"'),
    hasSigninPrompt: html.toLowerCase().includes("sign in"),
    hasRobotsMeta: html.toLowerCase().includes("noindex"),
    filmCount: liBlocks.length,
  });
  const films: Omit<Film, "poster">[] = [];

  for (const block of liBlocks) {
    const nameMatch = /data-item-name="([^"]+)"/.exec(block);
    const slugMatch = /data-item-slug="([^"]+)"/.exec(block);
    const linkMatch = /data-item-link="([^"]+)"/.exec(block);
    const ratingMatch = /<span class="rating[^"]*\brated-(\d+)\b[^"]*"/.exec(block);

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

  return films;
}

async function fetchPoster(slug: string): Promise<string> {
  try {
    const res = await fetch(`https://letterboxd.com/film/${slug}/`, {
      headers: LETTERBOXD_HEADERS,
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return "";
    const html = await res.text();
    const match = /"image":"(https:\/\/a\.ltrbxd\.com\/resized\/film-poster\/[^"]+)"/.exec(html);
    return match ? match[1] : "";
  } catch {
    return "";
  }
}

async function fetchFavoriteFilms(): Promise<Film[]> {
  try {
    const list = await fetchFilmList();
    const withPosters = await Promise.all(
      list.map(async (film) => ({ ...film, poster: await fetchPoster(film.slug) })),
    );

    return withPosters
      .filter((f) => f.poster)
      .sort((a, b) => b.rating - a.rating || a.title.localeCompare(b.title));
  } catch {
    return [];
  }
}

export default async function Letterboxd() {
  const films = await fetchFavoriteFilms();

  return (
    <section
      className="anchor-section section-shell bg-[var(--ink)] px-6 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <div id="favourites" className="anchor-target mb-12">
          <div className="label-mono mb-3">{"// favourites"}</div>
          <h2 className="serif-display text-3xl md:text-5xl">Favourite Movies</h2>
          <div className="h-px w-full bg-[var(--border)] mt-6" />
        </div>

        <p className="text-[var(--cream)] text-base mb-10 max-w-xl leading-relaxed">
          Every film I&rsquo;ve rated 4.5&#9733; or higher. Pulled live from Letterboxd.
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
