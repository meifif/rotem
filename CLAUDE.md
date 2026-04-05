# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React SPA portfolio website for a makeup artist (רותם יפרח). Hebrew language, RTL layout, deployed to GitHub Pages.

**Live site**: https://rotem-ifrach.co

## Commands

```bash
npm start          # Development server
npm run build      # Production build (includes 404.html and CNAME copy)
npm test           # Run Jest tests
npm run deploy     # Deploy to GitHub Pages
```

**Note**: Pre-push hook automatically runs build and deploy via Husky.

## Architecture

```
src/
├── sections/          # Full-width page sections (Navbar, Home, Services, etc.)
│   └── services/      # Individual service pages with shared ServiceLayout
├── pages/             # Route-level components (Home, Portfolio, NotFound)
├── components/        # Reusable UI elements (ContactForm, Button, ScrollToTop)
├── config/            # Image source configuration (Cloudinary/JSON/local fallback)
└── assets/            # Fonts; main-slide images (local fallback for homepage slider only)
```

## Key Technical Patterns

**Styling**: Tailwind CSS with custom theme in `tailwind.config.js`. Colors use CSS variables (`--color-primary`, etc.) defined in `index.css`.

**Image Management** (`src/config/imageSource.js`):
- **Portfolio page**: Cloudinary (tag from `REACT_APP_PORTFOLIO_DIR`) or `REACT_APP_PORTFOLIO_IMAGES_URL` only — no local bundle.
- **Main slider**: Cloudinary → JSON URL → local files in `src/assets/main-slide`.
- **Service / About galleries**: Cloudinary tags matching former `src/img` folder names (no local fallback).

**Routing**: React Router v6 with BrowserRouter. Custom 404 handling via build script.

**Analytics**: Google Analytics 4 and Meta Pixel configured in `public/index.html`.

**WhatsApp Integration**: Direct link `https://wa.link/u26l5v` used across CTAs.

## Environment Variables

Copy `.env.example` to `.env`:
- `REACT_APP_CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `REACT_APP_PORTFOLIO_DIR` - Tag name for portfolio images (default: `portfolio`)
- `REACT_APP_MAINSLIDE_DIR` - Tag name for slider images (default: `main-slide`)

## UI/UX Guidelines

- Follow WCAG 2.1 AA accessibility standards
- Mobile-first responsive design with `md:` breakpoint for desktop
- Use semantic HTML for screen reader compatibility
- Optimize Core Web Vitals (LCP, FID, CLS)
- Touch targets minimum 44x44 pixels
