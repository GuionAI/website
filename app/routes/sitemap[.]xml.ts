import type { LoaderFunctionArgs } from "react-router";
import { blogPosts } from "~/data/blog-posts";

export async function loader({ request }: LoaderFunctionArgs) {
  const host = new URL(request.url).host;
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;
  
  const staticPages = [
    "",
    "/about",
    "/projects", 
    "/vision",
    "/contact",
    "/blog",
  ];
  
  const blogUrls = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    lastmod: post.date,
    priority: post.featured ? "0.8" : "0.6",
  }));
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`).join("")}
  ${blogUrls.map(({ url, lastmod, priority }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`).join("")}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}