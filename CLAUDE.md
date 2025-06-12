# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This is the official website of guion.io company, showcasing our projects, founders, contacts, design principles, and vision. We are a small startup with only 2 people:

- **Sven**: Designer background, responsible for UI design and iOS development
- **You**: Fullstack developer focused on web+AI, responsible for server/website/architecture design/interface design

Our mission is to explore the possibilities of AI in various areas to help indies/founders/professionals. Our first product, FlickNote, uses audio transcription to help users record their ideas and collect/recall them easily.

This project (guion-official) will be deployed as a static website.

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

### Project Structure

- `/app/routes/`: Route components following React Router's file-based routing
- `/app/lib/`: Shared utilities and helper functions
- `/app/root.tsx`: Root component and document structure
- `/app/routes.ts`: Route definitions
- Path alias `~/*` maps to `./app/*` for clean imports

### Important Configurations

- SSR is enabled in `react-router.config.ts`
- TypeScript paths configured in `tsconfig.json`
- TailwindCSS v4 integrated via Vite plugin
- Deployment ready for Cloudflare Pages and Docker

### Development Notes

- The dev server runs on <http://localhost:5173>
- Use the `~/` prefix for imports from the app directory
- shadcn/ui components should be added using the components.json configuration
- CSS variables are enabled for theming support

## Deployment

### Cloudflare Workers (SSR)

This project is configured for SSR deployment on Cloudflare Workers:

1. SSR is enabled in `react-router.config.ts`
2. Uses `@react-router/cloudflare` adapter
3. Entry point is `server.ts`
4. Configuration in `wrangler.toml`

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

