# Siddharth P — Portfolio

New to React? Read [LEARNING.md](LEARNING.md) for a small-step rebuild plan and the role of each source file.

A responsive React + TypeScript portfolio for Siddharth P, Senior Software Engineer at Odessa Technologies. Designed and developed with AI assistance.

Professional experience is presented in JavaScript, jQuery, Syncfusion, HTML/CSS and Playwright. React and TypeScript are explicitly identified as learning/project skills. The professional case studies are high-level descriptions only; they contain no company code, screenshots or customer data.

## Run

Node.js 24+ and npm:

```sh
npm ci
npm run dev
npm run build
```

## Customize

- `src/profile.ts`: name, business contact, profile links, project descriptions and demo URL.
- `src/App.tsx`: sections, timeline, case-study dialog and navigation.
- `src/styles.css`: responsive layout, green/ivory colors and typography.
- `public/resume.html`: printable résumé. Keep this synchronized with verified experience. The browser's print dialog can save a PDF.
- `.env.example`: optional Flowdesk demo and repository links. Copy to `.env.local`, enter verified URLs and rebuild. `VITE_` values become public frontend text; never put a secret in them.

The résumé and case studies are drafts for personal review. No Naukri profile or uploaded résumé is changed by this site. Before sharing with employers, understand the learning project and verify all dates, skills and descriptions.

## GitHub Pages

In the `siddharth-portfolio` repository, enable Settings → Pages → GitHub Actions. Push to `main`; the included workflow builds with `/siddharth-portfolio/` as its base path and deploys the site. Change `vite.config.ts` if your repository name differs.

The project initially links to your verified GitHub profile. A Flowdesk repository link appears only when `VITE_FLOWDESK_SOURCE_URL` is set. Do not add a repository or live URL before it exists.

After publishing Flowdesk publicly, update the default demo URL in `src/profile.ts` or set `VITE_FLOWDESK_URL` in the Pages workflow's build environment. A private Sites demo requires your account sign-in and is unsuitable as a recruiter-facing demo until made public or replaced by a public deployment.
