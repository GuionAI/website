import { useState, useMemo } from "react";
import type { Route } from "./+types/blog._index";
import { BlogCard } from "~/components/blog/blog-card";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Search } from "lucide-react";
import { blogPosts } from "~/data/blog-posts";

export async function loader() {
  // In a real app, this would fetch from a database or CMS
  // For now, we'll use our static data
  return { posts: blogPosts };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - Guion" },
    { name: "description", content: "Insights and thoughts on AI, development, and building products for indies and professionals." },
  ];
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag: string) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  // Filter posts based on search and selected tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Insights and thoughts on AI, development, and building products for
          indies and professionals.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mx-auto max-w-5xl mb-12">
        <div className="flex flex-col gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tags */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedTag === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Badge>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-5xl">
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchQuery || selectedTag
                ? "No posts found matching your criteria."
                : "No blog posts yet. Check back soon!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}