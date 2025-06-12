import type { Route } from "./+types/blog.$slug";
import { Link, useLoaderData } from "react-router";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { formatDate } from "~/lib/blog-types";
import { blogPosts } from "~/data/blog-posts";
import { marked } from "marked";
import { SEO } from "~/components/seo";

export async function loader({ params }: Route.LoaderArgs) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  
  // Parse markdown content on the server
  const htmlContent = await marked(post.content);
  
  return { post, htmlContent };
}


export default function BlogPost() {
  const { post, htmlContent } = useLoaderData<typeof loader>();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image ? `https://guion.io${post.image}` : "https://guion.io/guion-og.png",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      email: post.author === "Sven" ? "sven@guion.io" : "neil@guion.io",
    },
    publisher: {
      "@type": "Organization",
      name: "Guion",
      logo: {
        "@type": "ImageObject",
        url: "https://guion.io/guion-logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://guion.io/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SEO
        title={`${post.title} - Guion Blog`}
        description={post.description}
        url={`/blog/${post.slug}`}
        type="article"
        author={post.author}
        publishedTime={post.date}
        image={post.image}
        keywords={post.tags}
        structuredData={blogPostingSchema}
      />
      <article className="container py-16">
      <div className="mx-auto max-w-3xl">
        {/* Navigation */}
        <Button asChild variant="ghost" size="sm" className="mb-8">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <header className="mb-8">
          {post.featured && (
            <Badge className="mb-4">Featured</Badge>
          )}
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {post.description}
          </p>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <img
                src={post.author === "Sven" ? "/sven.jpg" : "/neil_400x400.jpg"}
                alt={post.author}
                className="h-8 w-8 rounded-full"
              />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="ml-auto"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <Separator className="mb-8" />

        {/* Featured Image */}
        {post.image && (
          <div className="mb-8 -mx-4 sm:mx-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <div 
          className="prose prose-gray dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <Separator className="my-12" />

        {/* Author Bio */}
        <div className="bg-muted/50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <img
              src={post.author === "Sven" ? "/sven.jpg" : "/neil_400x400.jpg"}
              alt={post.author}
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold mb-1">{post.author}</h3>
              <p className="text-sm text-muted-foreground">
                {post.author === "Sven"
                  ? "Co-Founder & Designer at Guion. Passionate about creating intuitive user experiences and exploring the intersection of design and AI."
                  : "Co-Founder & Developer at Guion. Focused on building AI-powered tools that enhance human capabilities and productivity."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}