import { FilmCarousel } from "./FilmCarousel";
import favoriteFilmsData from "@/data/favorite-films.json";

export type Film = {
  slug: string;
  title: string;
  year: string;
  link: string;
  rating: number;
  poster: string;
};

const favoriteFilms = favoriteFilmsData as Film[];

export default function Letterboxd() {
  const films = favoriteFilms;

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
          Every film I&rsquo;ve rated 4.5&#9733; or higher. Synced from Letterboxd and shipped with the site.
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
