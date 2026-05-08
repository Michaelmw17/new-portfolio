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

Refresh that file locally with:

```bash
npm run update:letterboxd
```

Or use the Windows helper to refresh it, stage the JSON, and print the exact diff:

```bash
npm run sync:letterboxd
```

The script reads `LETTERBOXD_USERNAME` from `.env.local` if present, or you can pass a username explicitly:

```bash
npm run update:letterboxd -- M1motorway
```

For the helper script:

```bash
powershell -ExecutionPolicy Bypass -File .\scripts\sync-letterboxd.ps1 M1motorway
```

After running the script, commit the updated JSON file so production gets the new list.

## Build

```bash
npm run build
```
