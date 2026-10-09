# Portfolio

Static Astro site with Melissa's CV, built for GitHub Pages. No backend and no API keys.

## Setup

```sh
npm install
astro dev --background
```

## Where things live

- `src/content/`: CV content (profile, experience, selected work, skills, education). See `scripts/extract-cv.md`.
- `src/data/qa.ts`: questions and answers for the "Ask about my experience" section.
- `src/components/ask/AskWidget.tsx`: React island that shows the selected answer.
- `src/lib/paths.ts`: `withBase()` for internal links, so they work under a GitHub Pages project path.

## Updating the Q&A

Edit `src/data/qa.ts` and `src/data/qa.es.ts`. Keep answers factual, in the first person (questions in the second person), and 40 to 80 words (`npm test` checks the length).
Update them whenever the CV changes.

## Commands

| Command         | Action                                |
| :-------------- | :------------------------------------ |
| `npm test`      | Unit tests (Q&A data, date formatting) |
| `npm run check` | Type check                            |
| `npm run build` | Build the static site to `dist/`      |

## Deploy to GitHub Pages

1. Push to `main` on GitHub.
2. In the repo, go to Settings > Pages and set Source to "GitHub Actions".
3. `.github/workflows/deploy.yml` builds and publishes on every push to `main`, setting the base path from the repo name.
