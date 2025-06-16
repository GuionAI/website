import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
  keywords?: string[];
  noindex?: boolean;
  structuredData?: Record<string, any>;
}

const DEFAULT_TITLE = "Guion - AI for Indies, Founders & Professionals";
const DEFAULT_DESCRIPTION = "Exploring AI possibilities to help indies, founders, and professionals. Discover our innovative products like FlickNote.";
const DEFAULT_IMAGE = "https://guion.io/guion-og.png";
const BASE_URL = "https://guion.io";

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = "",
  type = "website",
  author,
  publishedTime,
  keywords = [],
  noindex = false,
  structuredData,
}: SEOProps) {
  const fullUrl = `${BASE_URL}${url}`;
  const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  
  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Guion",
    url: BASE_URL,
    logo: `${BASE_URL}/guion-logo-light.png`,
    description: "Exploring AI possibilities to help indies, founders, and professionals",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Sven",
        jobTitle: "Co-Founder & Designer",
        email: "sven@guion.io",
      },
      {
        "@type": "Person",
        name: "Neil",
        jobTitle: "Co-Founder & Developer",
        email: "neil@guion.io",
      },
    ],
    sameAs: ["https://github.com/GuionAI"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "feedback@guion.io",
      contactType: "customer support",
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Guion" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Author */}
      {author && <meta name="author" content={author} />}
      
      {/* Keywords */}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      
      {/* Article specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Structured Data - Organization (on every page) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Additional Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}