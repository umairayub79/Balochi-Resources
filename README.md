# BalochiResources

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

**BalochiResources** is a free, open-source resource platform for Baloch, Balochi, and Balochistan — dictionaries, grammars, literature, academic papers, audio, tools & more. It is built with [Astro](https://astro.build) and the [Starlight](https://starlight.astro.build) documentation theme, deployed for free on GitHub Pages.

The goal: a single place where learners, linguists, researchers, and community members can find Balochi dictionaries, grammar books, academic papers, audio/video resources, tools, and more.

## Tech stack

| Layer       | Tool                                                               |
| ----------- | ------------------------------------------------------------------ |
| Framework   | [Astro](https://astro.build)                                       |
| Theme       | [Starlight](https://starlight.astro.build)                         |
| Content     | Markdown / MDX files in `src/content/docs/`                        |
| Search      | [Pagefind](https://pagefind.app) (built in to Starlight)           |
| Hosting     | GitHub Pages (free, static)                                        |

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/                     ← Static assets (favicons, etc.)
├── src/
│   ├── assets/                 ← Images embedded in Markdown
│   ├── content/
│   │   └── docs/               ← Generated markdown pages live here
│   └── content.config.ts
├── CLAUDE.md                   ← Project instructions for Claude/AI
├── astro.config.mjs            ← Astro + Starlight configuration
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## How to add or update a resource

1. Add or edit a Markdown/MDX file in the `src/content/docs/` directory.
2. Commit and push — GitHub Pages will rebuild automatically.

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
