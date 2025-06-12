import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const host = new URL(request.url).host;
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;
  
  const robotsTxt = `# Guion Robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Crawl-delay for bots that respect it
Crawl-delay: 1

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Specific bot rules
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
`;

  return new Response(robotsTxt.trim(), {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600",
    },
  });
}