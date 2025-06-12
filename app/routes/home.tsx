import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ArrowRight, Mic, Brain, Sparkles, Users } from "lucide-react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Guion - AI for Indies, Founders & Professionals" },
    { name: "description", content: "Exploring AI possibilities to help indies, founders, and professionals. Discover our innovative products like FlickNote." },
  ];
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              AI for Indies, Founders & Professionals
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're a two-person startup exploring the possibilities of AI to empower
              individuals and small teams to achieve more.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/projects">
                  Explore Our Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/vision">Our Vision</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why We Build
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe AI should augment human capabilities, not replace them.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Brain className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Thoughtful AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We design AI tools that enhance human thinking and creativity,
                  not automate it away.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Built for Individuals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our products are crafted for indies, founders, and professionals
                  who value independence and efficiency.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Simple Yet Powerful</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe the best tools are those that are easy to use but
                  unlock powerful capabilities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 sm:py-32 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <Badge className="mb-4">Featured Product</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  FlickNote
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Capture your ideas instantly with audio transcription. Record your
                  thoughts and let AI help you organize and recall them effortlessly.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Mic className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Audio-first note taking
                  </span>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/projects#flick-note">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Mic className="h-32 w-32 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet the Founders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Two passionate individuals with complementary skills, united by a
              vision to make AI accessible and useful.
            </p>
            <div className="mt-10">
              <Button asChild variant="outline">
                <Link to="/about">
                  Learn Our Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
