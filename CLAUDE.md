# CLAUDE.md — maiqo Website

## Project Overview
Static marketing website for **maiqo** (AI-powered compliance platform). The market segment is **Continuous Compliance**. Pure HTML/CSS/JS — no build step, no frameworks.

## Tech Stack
- HTML5, CSS3, Vanilla JavaScript (no frameworks or bundlers)
- Fonts & icons hosted locally (Inter variable font, FontAwesome)
- Netlify for hosting, forms (honeypot spam protection), and deployment

## Local Development
```bash
netlify dev       # Starts local dev server at http://localhost:8888
```
Requires the [Netlify CLI](https://docs.netlify.com/cli/get-started/). The site is deployed automatically on push via Netlify.

## Project Structure
```
├── index.html                          # Main landing page
├── impressum.html                      # Legal / Impressum
├── datenschutz.html                    # Privacy policy
├── job-senior-fullstack-developer.html # Job detail page
├── script.js                           # All JS: i18n translations + interactive features
├── style.css                           # All CSS: custom design system, responsive
├── netlify.toml                        # Netlify config (publish = ".")
├── fontawesome/                        # Locally hosted FontAwesome
├── *.svg, *.ttf, favicon.*             # Assets (logos, fonts, favicons)
└── netlify/                            # Netlify Functions (currently empty)
```

## Internationalization (DE/EN) — CRITICAL
The site supports German and English. **Every text change must be made in both languages.**

- All translations live in `script.js` inside the `i18n` object (top of file, ~600 lines)
- Structure: `i18n.de['key']` and `i18n.en['key']`
- HTML elements use `data-i18n="key"` attributes for text content
- Form placeholders use `data-i18n-placeholder="key"`
- Language preference is stored in `localStorage` as `preferred-language`
- Default language is German (`de`)

When adding or editing content:
1. Add/update the translation key in **both** `i18n.de` and `i18n.en` in `script.js`
2. Reference the key via `data-i18n="your-key"` in the HTML

## CSS Conventions
- CSS variables defined at `:root` level (primary: `#8b5cf6`, accent: `#33b7bc`)
- Responsive breakpoints: 1024px, 968px, 768px, 640px, 480px
- Component classes: `.feature-card`, `.enterprise-card`, `.ai-feature-card`
- Layout: `.container` wrapper, Flexbox & CSS Grid

## JavaScript Patterns
- `TypewriterEffect` class for animated text
- Intersection Observer for scroll-triggered animations
- AI Features slider with dot pagination
- Compliance standards rotation display
- Smooth scrolling for anchor links
- Contact form submits via Netlify Forms
