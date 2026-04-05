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
└── assets/            # Local images (fallback when Cloudinary not configured)
```

## Key Technical Patterns

**Styling**: Tailwind CSS with custom theme in `tailwind.config.js`. Colors use CSS variables (`--color-primary`, etc.) defined in `index.css`.

**Image Management** (3-tier fallback in `src/config/imageSource.js`):
1. Cloudinary (primary) - images tagged with folder names
2. JSON URLs (secondary) - custom endpoints
3. Local assets (tertiary) - `src/assets/` directories

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
