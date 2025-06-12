import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("projects", "routes/projects.tsx"),
  route("vision", "routes/vision.tsx"),
  route("contact", "routes/contact.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route("robots.txt", "routes/robots[.]txt.ts"),
  route("sitemap.xml", "routes/sitemap[.]xml.ts"),
] satisfies RouteConfig;
