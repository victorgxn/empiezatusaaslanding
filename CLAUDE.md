# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EmpiezaTuSaaS is a Next.js 16 SaaS boilerplate/starter kit for launching SaaS products quickly. It includes a complete landing page with RPG/dungeon theme, built-in documentation system, and pre-configured integrations for auth, payments, and email.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Radix UI, Framer Motion, Fumadocs (MDX documentation)

**Language:** Spanish (es_ES locale)

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Directory Structure

- `app/` - Next.js App Router pages and API routes
  - `docs/[[...slug]]/` - Dynamic documentation pages (Fumadocs MDX)
  - `api/search/` - Documentation search endpoint
- `components/landing/` - Landing page sections (hero, pricing, features, etc.)
- `components/ui/` - shadcn/ui components (button, card, accordion, etc.)
- `content/docs/` - MDX documentation files organized by topic
- `lib/` - Utilities (`utils.ts` with `cn()` function, `source.ts` for Fumadocs)
- `types/` - TypeScript interfaces (PricingTier, Feature, etc.)
- `.source/` - Auto-generated Fumadocs source files (do not edit)

### Key Configuration Files

- `source.config.ts` - Fumadocs MDX configuration pointing to `content/docs`
- `components.json` - shadcn/ui config (new-york style, lucide icons)
- `.mcp.json` - MCP server for shadcn component integration

### Path Aliases

`@/*` resolves to the project root (configured in tsconfig.json)

## Patterns and Conventions

### Client Components

Landing components use `"use client"` directive and Framer Motion for animations. Performance optimizations include:
- Predefined positions for animated elements (avoid hydration mismatches)
- CSS animations for sparkles instead of JS
- RequestAnimationFrame throttling for scroll listeners
- Static array memoization with `useMemo`

### Styling

Dark RPG/dungeon theme using OkLCH colors:
- Primary: Orange (torch fire)
- Accent: Cyan (windows)
- Gold (treasure)

Glass-morphism effects with backdrop blur throughout the UI.

### Documentation

Documentation uses Fumadocs with MDX files in `content/docs/`. Add new docs by creating `.mdx` files following the existing structure. The search API at `/api/search` is auto-generated.

### Adding UI Components

Use shadcn CLI to add new components:
```bash
npx shadcn@latest add [component-name]
```

## Performance Notes

See `PERFORMANCE.md` for image optimization tasks. Key completed optimizations:
- Throttled scroll listeners
- CSS animations for sparkles
- Lazy loading on section images
- TypeScript interfaces for type safety
