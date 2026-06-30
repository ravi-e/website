# Agent Instructions for Ravi's Personal Website

## Project Overview
This is an **Eleventy (11ty) static site generator** powering a personal portfolio and developer ledger. Built with **Nunjucks templates**, **vanilla CSS**, and **dynamic data feeds** from external APIs (Steam, Goodreads).

## Essential Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies (Eleventy 3.x, Luxon) |
| `npm run start` | Dev server on `http://localhost:8080` with live reload |
| `npm run build` | Production build to `_site/` folder |

## Project Structure

```
src/
├── _data/           # Global data & external feeds
│   ├── site.json   # Site metadata (title, URL, author)
│   ├── games.js    # Steam API integration (snowfire88 profile)
│   ├── reading.js  # Goodreads RSS feed sync
│   └── quotes.json # Static quotes data
├── _includes/       # Nunjucks template components
│   ├── base.njk    # Root layout wrapper
│   ├── page.njk    # Generic page layout
│   ├── post.njk    # Article/post layout
│   └── note.njk    # Microblog note layout
├── assets/          # CSS and static assets (passthrough copied)
│   ├── main.css
│   └── css/main.css
├── writing/         # Blog posts (index.md + dated articles)
├── notes/           # Microblog entries (index.md + dated notes)
├── projects/        # Project showcases (index.md + individual projects)
└── [pages]/         # Root-level pages: about, portfolio, reading, games, colophon, etc.
```

## Collections & Content Patterns

**Three main collections** defined in `eleventy.config.js`:
1. **`writing`**: Blog articles in `src/writing/*.md` (sorted by date, excludes index.md)
2. **`notes`**: Timeline micro-posts in `src/notes/*.md` (sorted by date, excludes index.md)
3. **`projects`**: Project showcases in `src/projects/*.md` (sorted by date, excludes index.md)

Each collection filters out `index.md` and sorts **newest first** (descending date order).

## Design & Styling Conventions

- **Typography**: Plus Jakarta Sans (headings), Inter (body), JetBrains Mono (meta/code)
- **Color Palette**: Warm paper (`#fbfaf6`) / charcoal dark mode (`#141414`), accent teal (`#14b8a6`)
- **Layout**: Dense, editorial print-journal aesthetic; minimal border-radius (`0.12rem`)
- **CSS**: Vanilla, no frameworks; variables stored in `src/assets/css/main.css`
- **Theme Toggle**: Client-side localStorage toggle with no color flash on load

## Common Development Tasks

### Adding a New Article
1. Create `src/writing/YYYY-MM-DD-slug-title.md` with front matter (title, date, layout)
2. Use `post.njk` layout template
3. Build with `npm run build` (collection auto-discovered)

### Adding a Note/Timeline Entry
1. Create `src/notes/YYYY-MM-DD-slug.md`
2. Use `note.njk` layout template
3. Dates determine feed order (newest first)

### Adding a Project
1. Create `src/projects/project-name.md`
2. Include project metadata, links, stack tags
3. Grid display on `/projects/` auto-populated from collection

### Integrating External Data
- **Games**: `src/_data/games.js` fetches Steam XML feed; runs on build
- **Reading**: `src/_data/reading.js` fetches Goodreads RSS; runs on build
- Both use custom XML/HTML parsers; check for API failures gracefully

## Key Filters & Utilities

- **`readableDate`**: Format date objects to "MMM DD, YYYY"
- **`limit`**: Slice array items (e.g., show only 5 latest articles)
- **`stripHtml`**: Remove HTML tags for excerpts
- **`date`**: Eleventy built-in; front matter dates auto-parsed

## Important Conventions & Pitfalls

1. **Date Format**: Front matter dates use ISO format (YYYY-MM-DD); Luxon handles parsing
2. **Collection Sorting**: All collections sort **newest first** (`b.date - a.date`)
3. **passthrough Copy**: Only `src/assets/` is copied; CSS in nested `css/` folder auto-included
4. **API Feeds on Build**: Steam & Goodreads data fetches during `npm run build`—network timeout handling is critical
5. **Template Engine**: Markdown files use Nunjucks (`markdownTemplateEngine: "njk"`); supports template syntax within markdown
6. **No CSS Framework**: All styling is vanilla—maintain consistency with existing variable system
7. **output Directory**: Build artifacts go to `_site/`; never edit directly; regenerate with `npm run build`

## When Adding Features

- Extend data feeds in `src/_data/` (keep API calls with error handling)
- Add new layouts in `src/_includes/` (use Nunjucks)
- Use CSS custom properties for theming; avoid inline styles
- Test dark mode compatibility (localStorage theme toggle in place)
- Validate collection filtering doesn't break build order

## See Also

- [README.md](README.md) — Design philosophy, features, and setup guide
- [eleventy.config.js](eleventy.config.js) — Collection definitions and filters
