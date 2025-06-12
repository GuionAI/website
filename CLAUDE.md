# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This is the official website of guion.io company, showcasing our projects, founders, contacts, design principles, and vision. We are a small startup with only 2 people:

- **Sven**: Designer background, responsible for UI design and iOS development
- **Neil**: Fullstack developer focused on web+AI, responsible for server/website/architecture design/interface design

Our mission is to explore the possibilities of AI in various areas to help indies/founders/professionals. Our first product, FlickNote, uses audio transcription to help users record their ideas and collect/recall them easily.

This project (guion-official) is deployed as a server-side rendered (SSR) application on Cloudflare Workers.

## Commands

### Development

```bash
# Start development server with HMR
bun run dev

# Build for production
bun run build

# Run production server
bun run start

# Type checking (generates types and runs tsc)
bun run typecheck

# Preview production build locally
bun run preview

# Deploy to Cloudflare Workers
./deploy.sh
```

### Package Management

This project uses Bun as the package manager. Use `bun install` to install dependencies.

## Architecture

This is a React Router v7 application with server-side rendering (SSR) enabled.

### Key Technologies

- **React Router v7**: Modern full-stack React framework with SSR
- **React 19.1.0**: Latest React version with new features
- **TailwindCSS v4**: Utility-first CSS with @tailwindcss/vite
- **shadcn/ui**: Component library (New York style, stone base color)
- **TypeScript**: Strict mode enabled for type safety
- **Vite**: Build tool and dev server
- **Cloudflare Workers**: Edge runtime for SSR deployment
- **MDX**: Markdown with JSX support for blog content
- **react-helmet-async**: SEO and meta tag management
- **vite-plugin-sitemap**: Automatic sitemap generation
- **marked**: Markdown parser for blog content

### Project Structure

- `/app/routes/`: Route components following React Router's file-based routing
- `/app/components/`: Reusable React components (header, footer, SEO, blog, etc.)
- `/app/lib/`: Shared utilities and helper functions
- `/app/data/`: Static data (blog posts, etc.)
- `/app/root.tsx`: Root component and document structure
- `/app/entry.server.tsx`: Custom server entry for Cloudflare Workers
- `/workers/app.ts`: Cloudflare Workers entry point
- `/public/`: Static assets (images, robots.txt, etc.)
- Path alias `~/*` maps to `./app/*` for clean imports

### Important Configurations

- SSR is enabled in `react-router.config.ts`
- TypeScript paths configured in `tsconfig.json`
- TailwindCSS v4 integrated via Vite plugin
- Cloudflare Workers configuration in `wrangler.jsonc`
- Blog support with MDX and markdown processing
- SEO optimized with meta tags, structured data, and sitemap generation
- Custom domain routing for guion.io and www.guion.io

### Development Notes

- The dev server runs on <http://localhost:5173>
- Use the `~/` prefix for imports from the app directory
- shadcn/ui components should be added using the components.json configuration
- CSS variables are enabled for theming support

## Deployment

### Cloudflare Workers (SSR)

This project is configured for SSR deployment on Cloudflare Workers:

1. SSR is enabled in `react-router.config.ts`
2. Uses `@cloudflare/vite-plugin` for Workers integration
3. Entry point is `workers/app.ts`
4. Configuration in `wrangler.jsonc` with:
   - Account ID: 4a7d2cc3b61181986870b57848eff910
   - Custom domain routing for guion.io
   - Environment variables support

To deploy:
```bash
# Local deployment
./deploy.sh

# Or manually
bun run build
wrangler deploy
```

See `CLOUDFLARE_DEPLOYMENT.md` for detailed deployment instructions.

### GitHub Actions

Automatic deployment on push to main:
- `.github/workflows/deploy-workers.yml` - Deploy to Cloudflare Workers
- Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets

## Features

### Blog System

The website includes a blog with the following features:
- Static blog data stored in `/app/data/blog-posts.ts`
- Markdown parsing with `marked` library
- MDX support for rich content
- Blog listing page at `/blog`
- Individual blog post pages at `/blog/[slug]`
- Tags, featured posts, and reading time
- Author profiles with avatars

#### React Router v7 File-Based Routing Structure

The blog uses React Router v7's file-based routing with dot notation:
- `blog.tsx` - Parent layout route that renders `<Outlet />`
- `blog._index.tsx` - Blog listing page rendered at `/blog`
- `blog.$slug.tsx` - Dynamic blog post pages rendered at `/blog/:slug`

**Important**: The parent route (`blog.tsx`) MUST render `<Outlet />` for child routes to display. Without this, child routes will not be visible.

### SEO Optimization

Comprehensive SEO implementation using:
- **react-helmet-async**: Dynamic meta tags management
- **Structured Data**: Organization and BlogPosting schemas
- **Open Graph & Twitter Cards**: Social media sharing optimization
- **Sitemap**: Automatically generated during build
- **robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Prevent duplicate content issues

To add SEO to a page:
```tsx
import { SEO } from "~/components/seo";

<SEO 
  title="Page Title"
  description="Page description"
  url="/page-url"
  keywords={["keyword1", "keyword2"]}
/>
```

### Assets

- Company logo: `/public/guion-logo.svg`
- Founder avatars: `/public/sven.jpg`, `/public/neil_400x400.jpg`
- Open Graph image: `/public/guion-og.png` (should be 1200x630px)

## Contact Information

- Main email: feedback@guion.io
- Sven: sven@guion.io
- Neil: neil@guion.io
- GitHub: https://github.com/GuionAI

## Common Issues and Solutions

### Hydration Errors

1. **Nested `<a>` tags**: When using navigation components like `NavigationMenuLink` with React Router's `Link`, use the `asChild` prop to prevent nested anchor tags:
   ```tsx
   <NavigationMenuLink asChild>
     <Link to="/path">Text</Link>
   </NavigationMenuLink>
   ```

2. **Date formatting mismatches**: Use UTC dates to prevent timezone differences between server and client:
   ```tsx
   // In formatDate function
   const utcDate = new Date(Date.UTC(year, month - 1, day));
   return utcDate.toLocaleDateString("en-US", { timeZone: "UTC", ... });
   ```

### Routing Issues

1. **File-based routing structure**: 
   - Use automatic routing with `@react-router/fs-routes` in `routes.ts`
   - Follow dot notation for nested routes (e.g., `blog.tsx`, `blog._index.tsx`, `blog.$slug.tsx`)
   - Parent routes must render `<Outlet />` for child routes to work

2. **Dynamic route parameters**:
   - Use `$` prefix for dynamic segments (e.g., `blog.$slug.tsx`)
   - Access params via `useLoaderData()` hook, not component props

3. **Special characters in routes**:
   - Use brackets for dots in filenames: `robots[.]txt.ts` → `/robots.txt`
   - Use brackets for other special characters as needed

