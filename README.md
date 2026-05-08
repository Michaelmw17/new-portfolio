This is a Next.js portfolio site.

## Getting started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Letterboxd favourites

Production no longer scrapes Letterboxd during the Vercel build. Favourite movies are stored in [src/data/favorite-films.json](src/data/favorite-films.json) and rendered directly by the site.

Automatic refreshes are handled by [update-letterboxd.yml](.github/workflows/update-letterboxd.yml), which runs every 6 hours and can also be triggered manually from GitHub Actions.

Set the repository variable `LETTERBOXD_USERNAME` in GitHub before enabling the workflow.

Refresh that file locally with:

```bash
npm run update:letterboxd
```

The script reads `LETTERBOXD_USERNAME` from `.env.local` if present, or you can pass a username explicitly:

```bash
npm run update:letterboxd -- M1motorway
```

After running the script, commit the updated JSON file so production gets the new list.

## Build

```bash
npm run build
```
