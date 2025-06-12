import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    sitemap({
      hostname: "https://guion.io",
      exclude: ["/404"],
      // Dynamic routes for blog posts
      dynamicRoutes: [
        "/",
        "/about",
        "/projects",
        "/vision", 
        "/contact",
        "/blog",
        // Blog posts would be added dynamically in production
        "/blog/introducing-flick-note",
        "/blog/ai-for-personal-productivity",
        "/blog/building-tools-for-indies",
      ],
    }),
  ],
});
