import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputPath = path.join(projectRoot, "src", "data", "favorite-films.json");

const RATING_THRESHOLD = 4.5;
const LETTERBOXD_HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
  accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "accept-language": "en-AU,en;q=0.9,en-US;q=0.8",
  "cache-control": "no-cache",
};

function decodeHtmlEntities(str) {
  return str
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function parseTitleAndYear(itemName) {
  const decoded = decodeHtmlEntities(itemName);
  const match = /^(.+?) \((\d{4})\)$/.exec(decoded);
  return match ? { title: match[1], year: match[2] } : { title: decoded, year: "" };
}

async function loadEnvFile(fileName) {
  const envPath = path.join(projectRoot, fileName);

  try {
    const content = await readFile(envPath, "utf8");

    for (const rawLine of content.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#") || !line.includes("=")) continue;

      const separatorIndex = line.indexOf("=");
      const key = line.slice(0, separatorIndex).trim();
      let value = line.slice(separatorIndex + 1).trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (!(key in process.env)) {
        process.env[key] = value;
      }
    }
  } catch {
    // Ignore missing env files.
  }
}

async function getUsername() {
  await loadEnvFile(".env.local");
  await loadEnvFile(".env");

  const username = process.argv[2] ?? process.env.LETTERBOXD_USERNAME;
  if (!username) {
    throw new Error("Provide a Letterboxd username as an argument or set LETTERBOXD_USERNAME in .env.local.");
  }

  return username.trim();
}

async function fetchFilmList(username) {
  const url = `https://letterboxd.com/${username}/films/rated/${RATING_THRESHOLD}-5/by/your-rating/`;
  const response = await fetch(url, { headers: LETTERBOXD_HEADERS });

  if (!response.ok) {
    throw new Error(`Letterboxd list fetch failed (${response.status} ${response.statusText})`);
  }

  const html = await response.text();
  const liBlocks = [...html.matchAll(/<li class="griditem">([\s\S]*?)<\/li>/g)].map((match) => match[1]);
  const films = [];

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

async function fetchPoster(slug) {
  const response = await fetch(`https://letterboxd.com/film/${slug}/`, {
    headers: LETTERBOXD_HEADERS,
  });

  if (!response.ok) {
    return "";
  }

  const html = await response.text();
  const match = /"image":"(https:\/\/a\.ltrbxd\.com\/resized\/film-poster\/[^"]+)"/.exec(html);
  return match ? match[1] : "";
}

async function main() {
  const username = await getUsername();
  const list = await fetchFilmList(username);

  const withPosters = await Promise.all(
    list.map(async (film) => ({
      ...film,
      poster: await fetchPoster(film.slug),
    })),
  );

  const visibleFilms = withPosters
    .filter((film) => film.poster)
    .sort((a, b) => b.rating - a.rating || a.title.localeCompare(b.title));

  if (visibleFilms.length === 0) {
    throw new Error("No favorite films with posters were found.");
  }

  await writeFile(outputPath, `${JSON.stringify(visibleFilms, null, 2)}\n`, "utf8");
  console.log(`Saved ${visibleFilms.length} films to ${path.relative(projectRoot, outputPath)}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});