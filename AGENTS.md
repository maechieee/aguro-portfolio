<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project overview — Jeremae Aguro portfolio

Student portfolio (BSIT). Next.js 16 (App Router), React 19, TypeScript,
Tailwind v4, Framer Motion. Single page (`app/page.tsx`): Navbar, HeroSection,
SkillsStrip (skills matrix), ExperienceSection (About), ProjectsSection,
DocumentationSection, ContactSection, Footer.

## Single sources of truth

- `data/profile.ts` — name, title, summary, location, `email`/`github`/`linkedin`/`photo`
  (empty string = not provided; components render a marked "not set" state, never a
  fake link), `resumeUrl`, `siteConfig` (metadata).
- `data/skills.ts` — four categories with conservative tiers (applied / working / familiar).
  No percentage bars.
- `data/projects.ts` — the two case studies (FacilityHub, Peer Tutoring Matching System).
  `null`/empty fields render "to be provided" placeholders. Never invent stack, results,
  or contributions; fill from real repos/docs. `services/projectService.ts` wraps it.
- `data/documents.ts` + `public/documents/` — PDFs. `lib/documents.ts#publicFileExists`
  (server) tells `app/page.tsx` which files exist, so cards show placeholders until the PDF is added.
- `data/experience.ts` — education + PDRRMO work immersion only. Don't add roles.

## Design system

Unchanged "systems status" look: tokens `paper`, `paper-raised`, `ink`, `slate`, `line`,
`signal`, `live` in `app/globals.css`; never raw grays or `dark:` pairs. Fonts: Space
Grotesk (`font-display`), Geist, Geist Mono for mono-label motif. Theme defaults to light.

## Notes

- `_archive-original-owner/` holds removed template assets (old CV, photo, projects,
  blog posts, GitHub API, chat widget). Excluded from tsconfig; not served.
  Do not restore any of it into the live site.
- Blog code (`app/blog`, `lib/blog.ts`) remains but is unlinked and has no published posts.
- Verify with `npm run lint` and `npm run build`.
