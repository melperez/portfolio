# Plan: Astro portfolio with "Ask about my experience"

## Context
Melissa wants an online CV/portfolio built with Astro, populated from a PDF CV (not yet shared). It should include a small interactive section where a recruiter can ask questions such as "Does Melissa have experience with GCP and GenAI?" and get answers grounded only in the CV and project data.

Greenfield project, so no existing code to reuse. No exploration agents needed.

## Key design decisions
1. **Static site, one server endpoint.** Pages are prerendered. Only `/api/ask` runs on the server, because the LLM API key cannot live in the browser.
2. **No vector DB or RAG.** A CV plus projects is a few thousand tokens. Put all of it in the system prompt on every request. Simpler, cheaper, more accurate.
3. **Single source of truth.** The PDF is converted once into structured content files. Both the pages and the chatbot read the same files, so they never disagree.
4. **React island only for the Q&A widget.** Everything else is plain Astro.
5. **Model:** `claude-haiku-4-5-20251001` (fast and cheap for short grounded answers).
6. **Hosting:** Vercel (Astro adapter `@astrojs/vercel`). Cloudflare or Netlify work equally.

## Folder architecture
```
portfolio/
├── astro.config.mjs          # output: 'static', Vercel adapter, React integration
├── package.json
├── tsconfig.json
├── tailwind.config.mjs
├── .env                      # ANTHROPIC_API_KEY (never committed)
├── .env.example
├── .gitignore
│
├── public/
│   ├── Melissa-CV.pdf        # downloadable CV
│   ├── favicon.svg
│   └── og-image.png          # link preview image
│
├── src/
│   ├── content/              # SOURCE OF TRUTH, extracted from the PDF
│   │   ├── config.ts         # content collection schemas (zod)
│   │   ├── profile.md        # name, headline, summary, links, contact
│   │   ├── experience/       # one .md per job (role, company, dates, bullets, tech)
│   │   ├── projects/         # one .md per project (description, stack, links)
│   │   ├── skills.json       # grouped skills (Cloud/GCP, GenAI, Data, etc.)
│   │   └── education.md      # education and certifications
│   │
│   ├── pages/
│   │   ├── index.astro       # hero, about, experience, projects, skills, ask, contact
│   │   ├── projects/[slug].astro   # optional project detail pages
│   │   └── api/
│   │       └── ask.ts        # POST endpoint (prerender = false)
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>, SEO/OG tags, header, footer
│   │
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── ExperienceItem.astro
│   │   ├── ProjectCard.astro
│   │   ├── SkillGroup.astro
│   │   ├── ContactBlock.astro
│   │   └── ask/
│   │       ├── AskWidget.tsx # React island (client:visible): input, suggested chips, answer
│   │       └── SuggestedQuestions.ts
│   │
│   ├── lib/
│   │   ├── buildContext.ts   # reads content collections -> one text block for the prompt
│   │   ├── prompt.ts         # system prompt: answer only from context, say "not in CV" otherwise
│   │   ├── anthropic.ts      # SDK client wrapper
│   │   └── rateLimit.ts      # simple per-IP limit + max input length
│   │
│   └── styles/
│       └── global.css
│
├── scripts/
│   └── extract-cv.md         # notes/steps for turning the PDF into src/content files
│
└── tests/
    └── ask.test.ts           # grounding tests (see Verification)
```

## Q&A flow
1. Recruiter types a question or clicks a suggested chip ("Does she have GCP experience?").
2. `AskWidget.tsx` POSTs `{ question }` to `/api/ask`.
3. `ask.ts` validates length, applies rate limit, calls `buildContext()` to load all content, then calls Claude with:
   - system prompt: use only the supplied context, cite the role or project, answer in third person ("Melissa has..."), say it is not in the CV if absent, never invent
   - the context block
   - the question
4. Response is returned (streaming optional, plain JSON is fine for v1) and shown in the widget.

## Guardrails
- Max question length (about 300 chars) and per-IP rate limit.
- Anthropic spend limit set in the console.
- Prompt instructs refusal of off-topic requests and prompt-injection attempts.
- A "Answers are generated from Melissa's CV" disclaimer under the widget.
- Fallback: if the API fails, show a link to the CV PDF and contact email.

## Build steps
1. Scaffold Astro + Tailwind + React integration + Vercel adapter.
2. User shares the PDF. Extract it into `src/content/*` and have the user review the structured data for accuracy.
3. Build layout and static sections from the content collections.
4. Implement `lib/*` and `/api/ask`.
5. Build `AskWidget.tsx` and mount it in `index.astro` with `client:visible`.
6. SEO (meta, OG, sitemap), accessibility pass, deploy, add custom domain.

## Verification
- `npm run dev`: all sections render from the content files; editing a content file updates the page.
- `npm run build`: succeeds; only `/api/ask` is non-static.
- Ask tests against `/api/ask`:
  - "Does Melissa have experience with GCP and GenAI?" returns an answer citing the correct roles/projects.
  - A skill not in the CV (for example "Does she know COBOL?") returns a "not in the CV" style answer, not an invention.
  - Off-topic or injection prompt is refused.
  - Over-long input and rapid repeated calls are rejected.
- Lighthouse run for performance, SEO, accessibility; check mobile layout.
- Confirm `ANTHROPIC_API_KEY` is absent from the built client bundle.

## Open items
- PDF CV (needed for step 2).
- Hosting choice confirmation (default Vercel) and whether to add a custom domain.
- Single language or English plus Spanish.
