---
title: Colophon
layout: page.njk
permalink: /colophon/
---

This colophon documents the design choices and technical specifications of this website. The layout, visual styling, and typography strategy are inspired by [carteakey.dev](https://carteakey.dev/), and the heavy lifting for this site was done by vibe coding in Google Antigravity.

## Design Philosophy

This site is designed to feel like a **personal notebook, archive, and workbench**. It favors a dense, editorial layout over corporate templates or startup-landing-page aesthetics:
- **Square corners** (`border-radius: 0.12rem`) and flat borders replace soft, rounded dashboard bubble designs.
- **Selective accent color** (`#14b8a6` teal) guides reader focus to links and headers rather than saturating the screen.
- **Strict typography hierarchy** maps distinct font families to specific reader roles.

## Typography

- **Display & UI Controls:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) &mdash; A modern, high-contrast, confident sans-serif.
- **Body Copy:** [Inter](https://fonts.google.com/specimen/Inter) &mdash; A highly legible geometric sans-serif designed for reading comfort on screens, similar to the typeface used in Google Gemini Chat.
- **Metadata & Snippets:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) &mdash; A crisp monospace font used for dates, tags, and code blocks.

## Technical Stack

- **Static Site Generator:** [Eleventy (11ty) v3](https://www.11ty.dev/) compiling Markdown files using Nunjucks templating.
- **Styling:** Custom Vanilla CSS (`src/assets/css/main.css`) with CSS variables to ensure fast load times and clean, direct styling control.
- **Dark Mode:** Local storage check inside the HTML `<head>` tag to prevent page flashing, paired with a custom header toggle button.
- **Integrations & Feeds:** Dynamic data synced on build from the Steam XML profile feed and Goodreads RSS feed using custom Node.js parser scripts with a custom-built HTML entity decoder (handling decimal, hex, and named entities).
- **Deployment:** Managed using Git version control on GitHub.
