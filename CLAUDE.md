# CLAUDE.md — BalochiResources

This file tells Claude (and any AI assistant) everything about this project so it can help you build, maintain, and extend the site correctly.

---

## What this project is

**BalochiResources** is a A free, open-source resource platform for Baloch, Balochi, and Balochistan — dictionaries, grammars, literature, academic papers, audio, tools & more. It is built with [Astro](https://astro.build) and the [Starlight](https://starlight.astro.build) documentation theme, deployed for free on GitHub Pages.

The goal: a single place where learners, linguists, researchers, and community members can find Balochi dictionaries, grammar books, academic papers, audio/video resources, tools, and more.

---

## Tech stack

| Layer       | Tool                                                        |
| ----------- | ----------------------------------------------------------- |
| Framework   | [Astro](https://astro.build)                                |
| Theme       | [Starlight](https://starlight.astro.build)                  |
| Content     | Markdown / MDX files in `src/content/docs/`                 |
| Search      | [Pagefind](https://pagefind.app) (built in to Starlight)    |
| Hosting     | GitHub Pages (free, static)                                 |
| Data source | `resources.csv` → converted to `.md` via `generate-docs.js` |

---

## Project structure

```
balochi-hub/
├── CLAUDE.md                  ← you are here
├── generate-docs.js           ← Node script: CSV → Markdown files
├── resources.csv       ← source of truth for all resources
├── astro.config.mjs           ← Astro + Starlight config
├── package.json
└── src/
    └── content/
        └── docs/              ← all site pages live here
            ├── index.mdx      ← homepage (splash template)
            ├── about.md
            ├── dictionaries.md
            ├── learning.md
            ├── literature.md
            ├── academic.md
            ├── media.md
            ├── libraries.md
            ├── tools.md
            ├── religion.md
            └── community.md
```

---

## Content categories

Each category has a slug, a label, and maps to a `.md` file under `src/content/docs/`.

| category_id | slug           | label                        |
| ----------- | -------------- | ---------------------------- |
| 1           | `dictionaries` | Dictionaries & Lexicons      |
| 2           | `learning`     | Language Learning & Grammar  |
| 3           | `literature`   | Literature & Culture         |
| 4           | `academic`     | Academic & Linguistics       |
| 5           | `media`        | Culture & Media              |
| 6           | `libraries`    | Digital Libraries & Archives |
| 7           | `tools`        | Tools & Technology           |
| 8           | `religion`     | Religion & Manuscripts       |
| 9           | `community`    | Community & Organizations    |

---

## Resource data model

All resources come from `resources.csv`. Each row has these fields:

| Field              | Type           | Notes                                                                                                    |
| ------------------ | -------------- | -------------------------------------------------------------------------------------------------------- |
| `id`               | int            | Unique resource ID                                                                                       |
| `category_id`      | int            | Maps to category table above                                                                             |
| `category_name`    | string         | Human-readable category label                                                                            |
| `title`            | string         | Resource name                                                                                            |
| `url`              | string or null | Primary URL (often null — use `additional_links`)                                                        |
| `description`      | string or null | Short description                                                                                        |
| `type`             | string         | One of: `dictionary`, `book`, `app`, `web`, `audio`, `video`, `paper`, `keyboard`, `organization`        |
| `format`           | string or null | Legacy field — use `formats` instead                                                                     |
| `author`           | string or null | Author(s)                                                                                                |
| `tags`             | JSON string    | Currently `{}` for most rows — reserved for future use                                                   |
| `additional_links` | JSON string    | Array of `{ url, title }` objects — this is the real link data                                           |
| `formats`          | JSON string    | Array of format tags: `web`, `pdf`, `android`, `desktop`, `audio`, `video`, `print`, `archive`, `social` |
| `created_at`       | datetime       | When the record was added                                                                                |

---

## How to add or update a resource

### Option A — Edit the CSV (recommended for bulk changes)

1. Add or edit a row in `resources.csv`
2. Run `node generate-docs.js` to regenerate the Markdown files
3. Commit and push — GitHub Pages will rebuild automatically

### Option B — Edit Markdown directly (for small fixes)

Edit the relevant `.md` file in `src/content/docs/` directly. Follow the existing format:

```markdown
### Resource Title

🌐 Web &nbsp; 📄 PDF

Short description here.
**Author:** Name here
**Links:** [Web App](https://...) · [PDF](https://...)
```

### Format badges reference

| Tag       | Badge      |
| --------- | ---------- |
| `web`     | 🌐 Web     |
| `pdf`     | 📄 PDF     |
| `android` | 📱 Android |
| `desktop` | 🖥️ Desktop |
| `audio`   | 🔊 Audio   |
| `video`   | 🎬 Video   |
| `print`   | 📚 Print   |
| `archive` | 🗄️ Archive |
| `social`  | 👥 Social  |

---

## Setup instructions

### 1. Create the Astro + Starlight project

```bash
npm create astro@latest balochi-hub -- --template starlight
cd balochi-hub
```

### 2. Install the CSV parser (for the generate script)

```bash
npm install csv-parse
```

### 3. Copy in your files

```bash
cp resources.csv balochi-hub/
cp generate-docs.js balochi-hub/
cp CLAUDE.md balochi-hub/
```

### 4. Generate the Markdown files

```bash
node generate-docs.js
```

This writes all category pages + index + about into `src/content/docs/`.

### 5. Configure Astro

Edit `astro.config.mjs` to match this structure:

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://YOUR_GITHUB_USERNAME.github.io",
  base: "/balochi-hub",
  integrations: [
    starlight({
      title: "BalochiResources",
      description: "A one-stop resource platform for the Balochi language.",
      social: {
        github: "https://github.com/YOUR_GITHUB_USERNAME/balochi-hub",
      },
      sidebar: [
        { label: "Home", link: "/" },
        { label: "About", link: "/about/" },
        {
          label: "Resources",
          items: [
            { label: "Dictionaries & Lexicons", link: "/dictionaries/" },
            { label: "Language Learning & Grammar", link: "/learning/" },
            { label: "Literature & Culture", link: "/literature/" },
            { label: "Academic & Linguistics", link: "/academic/" },
            { label: "Culture & Media", link: "/media/" },
            { label: "Digital Libraries & Archives", link: "/libraries/" },
            { label: "Tools & Technology", link: "/tools/" },
            { label: "Religion & Manuscripts", link: "/religion/" },
            { label: "Community & Organizations", link: "/community/" },
          ],
        },
      ],
    }),
  ],
});
```

### 6. Run locally

```bash
npm run dev
```

### 7. Deploy to GitHub Pages

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/
      - uses: actions/deploy-pages@v4
```

Then in your GitHub repo: **Settings → Pages → Source → GitHub Actions**.

---

## Things Claude should know when helping

- **Never use a database.** All data is flat files. The CSV is the source of truth.
- **Never suggest paid hosting.** Everything must run on GitHub Pages.
- **The generate script is the build step for content.** Run it after any CSV change.
- **Starlight uses Markdown/MDX in `src/content/docs/`.** Do not create pages outside this folder.
- **Links in resources come from `additional_links` JSON field**, not the `url` field (which is often null).
- **`formats` is a JSON array of strings** — always parse it before using it in templates.
- **Right-to-left text** (Balochi script) may appear in titles. Do not strip or escape it.
- **The site is multilingual by nature** — Balochi content may be in Latin, Arabic, or Nastaliq script. Be careful with string operations on titles.
- When adding new resources, always update the CSV first, then re-run `generate-docs.js`.
- When asked to add a new category, update both `generate-docs.js` (the `CATEGORIES` object) and `astro.config.mjs` (the sidebar) and this `CLAUDE.md` table.
