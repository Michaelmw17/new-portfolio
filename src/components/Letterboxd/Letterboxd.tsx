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

const STATIC_FAVORITE_FILMS: Film[] = [
  {
    slug: "project-hail-mary",
    title: "Project Hail Mary",
    year: "2026",
    link: "https://letterboxd.com/film/project-hail-mary/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/6/1/1/2/8/8/611288-project-hail-mary-0-230-0-345-crop.jpg?v=ac31b6ec03",
  },
  {
    slug: "rental-family-2025",
    title: "Rental Family",
    year: "2025",
    link: "https://letterboxd.com/film/rental-family-2025/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/1/0/9/2/7/7/8/1092778-rental-family-2025-0-230-0-345-crop.jpg?v=36ab9fb4e8",
  },
  {
    slug: "happyend",
    title: "Happyend",
    year: "2024",
    link: "https://letterboxd.com/film/happyend/",
    rating: 5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/6/5/2/6/7/5/652675-happyend-0-230-0-345-crop.jpg?v=e8ef4989bb",
  },
  {
    slug: "dune-part-two",
    title: "Dune: Part Two",
    year: "2024",
    link: "https://letterboxd.com/film/dune-part-two/",
    rating: 5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/6/1/7/4/4/3/617443-dune-part-two-0-230-0-345-crop.jpg?v=cc533700f8",
  },
  {
    slug: "oppenheimer-2023",
    title: "Oppenheimer",
    year: "2023",
    link: "https://letterboxd.com/film/oppenheimer-2023/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/7/8/4/3/2/8/784328-oppenheimer-0-230-0-345-crop.jpg?v=e3c6e7a32c",
  },
  {
    slug: "parasite-2019",
    title: "Parasite",
    year: "2019",
    link: "https://letterboxd.com/film/parasite-2019/",
    rating: 5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/4/2/6/4/0/6/426406-parasite-0-230-0-345-crop.jpg?v=8f5653f710",
  },
  {
    slug: "thunder-road-2018",
    title: "Thunder Road",
    year: "2018",
    link: "https://letterboxd.com/film/thunder-road-2018/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/4/3/2/3/3/5/432335-thunder-road-0-230-0-345-crop.jpg?v=8b8f05feb8",
  },
  {
    slug: "interstellar",
    title: "Interstellar",
    year: "2014",
    link: "https://letterboxd.com/film/interstellar/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/1/1/7/6/2/1/117621-interstellar-0-230-0-345-crop.jpg?v=7ad89e6666",
  },
  {
    slug: "django-unchained",
    title: "Django Unchained",
    year: "2012",
    link: "https://letterboxd.com/film/django-unchained/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/5/2/5/1/6/52516-django-unchained-0-230-0-345-crop.jpg?v=f02aed63a3",
  },
  {
    slug: "inglourious-basterds",
    title: "Inglourious Basterds",
    year: "2009",
    link: "https://letterboxd.com/film/inglourious-basterds/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/4/1/3/5/2/41352-inglourious-basterds-0-230-0-345-crop.jpg?v=0c74c673e0",
  },
  {
    slug: "tropic-thunder",
    title: "Tropic Thunder",
    year: "2008",
    link: "https://letterboxd.com/film/tropic-thunder/",
    rating: 5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/4/8/0/3/0/48030-tropic-thunder-0-230-0-345-crop.jpg?v=f75fe170e6",
  },
  {
    slug: "superbad",
    title: "Superbad",
    year: "2007",
    link: "https://letterboxd.com/film/superbad/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/4/7/7/7/6/47776-superbad-0-230-0-345-crop.jpg?v=b43686efcb",
  },
  {
    slug: "anchorman-the-legend-of-ron-burgundy",
    title: "Anchorman: The Legend of Ron Burgundy",
    year: "2004",
    link: "https://letterboxd.com/film/anchorman-the-legend-of-ron-burgundy/",
    rating: 5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/4/7/6/3/7/47637-anchorman-the-legend-of-ron-burgundy-0-230-0-345-crop.jpg?v=afdb4fa667",
  },
  {
    slug: "oldboy",
    title: "Oldboy",
    year: "2003",
    link: "https://letterboxd.com/film/oldboy/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/5/1/4/5/4/51454-oldboy-0-230-0-345-crop.jpg?v=294dbcadef",
  },
  {
    slug: "oceans-eleven-2001",
    title: "Ocean's Eleven",
    year: "2001",
    link: "https://letterboxd.com/film/oceans-eleven-2001/",
    rating: 5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/5/1/8/9/0/51890-oceans-eleven-2001-0-230-0-345-crop.jpg?v=9986b9227a",
  },
  {
    slug: "zoolander",
    title: "Zoolander",
    year: "2001",
    link: "https://letterboxd.com/film/zoolander/",
    rating: 5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/4/7/1/9/8/47198-zoolander-0-230-0-345-crop.jpg?v=b30902c672",
  },
  {
    slug: "spirited-away",
    title: "Spirited Away",
    year: "2001",
    link: "https://letterboxd.com/film/spirited-away/",
    rating: 5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/5/1/9/2/1/51921-spirited-away-0-230-0-345-crop.jpg?v=a3ad463c55",
  },
  {
    slug: "the-matrix",
    title: "The Matrix",
    year: "1999",
    link: "https://letterboxd.com/film/the-matrix/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/5/1/5/1/8/51518-the-matrix-0-230-0-345-crop.jpg?v=fc7c366afe",
  },
  {
    slug: "good-will-hunting",
    title: "Good Will Hunting",
    year: "1997",
    link: "https://letterboxd.com/film/good-will-hunting/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/5/1/6/2/1/51621-good-will-hunting-0-230-0-345-crop.jpg?v=acb4766abd",
  },
  {
    slug: "happy-gilmore",
    title: "Happy Gilmore",
    year: "1996",
    link: "https://letterboxd.com/film/happy-gilmore/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/4/6/9/8/7/46987-happy-gilmore-0-230-0-345-crop.jpg?v=09dc9d06bd",
  },
  {
    slug: "se7en",
    title: "Se7en",
    year: "1995",
    link: "https://letterboxd.com/film/se7en/",
    rating: 4.5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/5/1/3/4/5/51345-se7en-0-230-0-345-crop.jpg?v=76a14ef6b4",
  },
  {
    slug: "pulp-fiction",
    title: "Pulp Fiction",
    year: "1994",
    link: "https://letterboxd.com/film/pulp-fiction/",
    rating: 5,
    poster:
      "https://a.ltrbxd.com/resized/film-poster/5/1/4/4/4/51444-pulp-fiction-0-230-0-345-crop.jpg?v=dee19a8077",
  },
];

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
    throw new Error("LETTERBOXD_USERNAME is not set");
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
    throw new Error(`Letterboxd list fetch failed (${res.status} ${res.statusText})`);
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
    if (list.length === 0) return STATIC_FAVORITE_FILMS;

    const withPosters = await Promise.all(
      list.map(async (film) => ({ ...film, poster: await fetchPoster(film.slug) })),
    );

    const visibleFilms = withPosters
      .filter((f) => f.poster)
      .sort((a, b) => b.rating - a.rating || a.title.localeCompare(b.title));

    return visibleFilms.length > 0 ? visibleFilms : STATIC_FAVORITE_FILMS;
  } catch (error) {
    console.warn(
      "[letterboxd] Falling back to static film list due to fetch error:",
      error instanceof Error ? error.message : error,
    );
    return STATIC_FAVORITE_FILMS;
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
