# Personal Site & Developer Ledger

A minimal, dense, editorial personal portfolio and activity ledger. The design language is inspired by the structured, print-journal and archive aesthetics of `carteakey.dev`. 

Built completely with **Eleventy (11ty)**, **Nunjucks** templates, and **Vanilla CSS** (zero CSS frameworks).

---

## Design Philosophy & Aesthetics

- **Dense & Editorial**: Structured like a structured print journal with clean, square borders (`border-radius: 0.12rem`), flat variables, and high information density.
- **Strict Typography**:
  - *Display / UI*: **Plus Jakarta Sans** (sans-serif, mapped to `--font-sans` variable) for headings, site headers, and main interactive buttons.
  - *Body / Reading*: **Inter** (sans-serif, mapped to `--font-serif` variable) for highly legible, modern reading body copy.
  - *Meta / Code*: **JetBrains Mono** (monospace, mapped to `--font-mono` variable) for dates, timeline elements, kickers, and terminal blocks.
- **Selective Colors**: Warm paper background (`#fbfaf6`) in light mode and rich charcoal (`#141414`) in dark mode, accented by selective emerald/teal (`#14b8a6`).
- **No Color Flash**: Persistent, script-inlined theme toggle saved in `localStorage` to check user system preferences immediately upon load.

---

## Key Features & Pages

- **About Me (/about/)**: A dashboard status card layout detailing role, relocation preferences, and direct download links to the technical resume PDF. Includes a framed profile picture floated next to the summary text.
- **Portfolio Showcase (/portfolio/)**: Interactive showcase utilizing client-side sidebar tabs for technical writing samples (Overview, Onboarding, CLI, API, and Troubleshooting) with structured context callouts.
- **Projects (/projects/)**: Chronological grid of codebases, mobile apps, and tools tagged by stack.
- **Notes & Timelines (/notes/)**: Stream of timeline micro-posts and short-form thoughts.
- **Goodreads Bookshelf (/reading/)**: Synchronized bookshelf reading tracker pulling dynamically from a public Goodreads RSS feed (ID: `8863121`) during builds. Integrates custom HTML entity decoding to cleanly parse special characters, separates currently reading from finished books, and paginates the archives.
- **Steam Gaming Ledger (/games/)**: Synced recent gaming bookshelf logging playtime hours and titles directly from a public Steam profile feed (`snowfire88`). Features a large showcase card for the last-played game.
- **Uses Page (/uses/)**: Fully responsive Catppuccin-styled **Neofetch terminal block** displaying computer hardware specs, software suites, audio setups, VR gear, and Ather EV scooter.
- **Colophon (/colophon/)**: Design details, stack metrics, and build philosophy.
- **RSS Feed (/feed.xml)**: Dynamic RSS feed of latest articles.

---

## Tech Stack & Setup

- **Static Site Generator**: Eleventy (11ty)
- **Templating**: Nunjucks
- **Styling**: Pure Vanilla CSS
- **Date Formatting**: Luxon

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local dev server**:
   ```bash
   npm run start
   ```
   *The site will be hosted locally at `http://localhost:8080`.*

3. **Build the production package**:
   ```bash
   npm run build
   ```
   *Outputs static assets into the `./_site` folder.*
