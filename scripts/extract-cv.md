# Turning the CV PDF into content files

The PDF is converted once into structured files. Pages and the "Ask" assistant both read
these files, so they never disagree. When the CV changes, update these files (and replace
the PDF) rather than editing pages.

1. Put the public, sanitized PDF at `public/Melissa-CV-Web.pdf` (the filename must match `cvPdf` in `profile.md`).
2. Fill in, replacing every `PLACEHOLDER`:
   - `src/content/profile.md`: name, headline, location, email, links in frontmatter; summary as the body.
   - `src/content/experience/*.md`: one file per role. Name files so they read well (e.g. `2023-acme.md`).
     `start`/`end` use `YYYY-MM`; omit `end` for the current role. Bullets go in the body.
     List every technology used in `tech`, since the assistant relies on it for "does she know X" questions.
   - `src/content/projects/*.md`: one file per project. The filename becomes the URL slug.
   - `src/content/skills.json`: grouped skills (e.g. Cloud/GCP, GenAI, Data, Frontend).
   - `src/content/education.json`: degrees and certifications.
3. Update the answers in `src/data/qa.ts` so they match the new CV.
4. Run `npm run build` (schema errors point at the exact file and field) and review the page
   side by side with the PDF for accuracy.
5. Search for leftovers: `grep -r PLACEHOLDER src`.
