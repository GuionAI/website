export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  readingTime: string;
  content: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  readingTime: string;
}

export function formatDate(date: string): string {
  // Parse the date in UTC to avoid timezone issues
  const [year, month, day] = date.split('-').map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  
  return utcDate.toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}