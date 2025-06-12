import type { Route } from "./+types/about";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Palette, Code, Lightbulb, Target } from "lucide-react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About Us - Guion" },
    { name: "description", content: "Meet the team behind Guion - exploring AI possibilities for indies, founders, and professionals." },
  ];
}

export default function About() {
  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          About Guion
        </h1>
        <p className="text-lg text-muted-foreground">
          We're a two-person startup on a mission to explore how AI can empower
          individuals to achieve more, think better, and work smarter.
        </p>
      </div>

      {/* Our Story */}
      <section className="mb-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              Guion started with a simple observation: while AI technology is advancing
              rapidly, most tools are designed for large enterprises or tech-savvy
              developers. We saw an opportunity to create AI-powered products that are
              accessible, practical, and genuinely helpful for indies, founders, and
              professionals.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              As a designer and developer duo, we bring complementary perspectives to
              every product we build. This diversity helps us create tools that are not
              only technically robust but also delightful to use.
            </p>
            <p className="text-lg text-muted-foreground">
              Our first product, FlickNote, embodies our philosophy: use AI to augment
              human capabilities, not replace them. By making it easy to capture and
              organize thoughts through audio, we're helping people focus on what matters
              most - their ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Founders</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/sven.jpg"
                  alt="Sven"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <CardTitle>Sven</CardTitle>
                  <Badge variant="secondary">Co-Founder & Designer</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                With a strong background in design, Sven brings a user-centered approach
                to everything we build. Responsible for UI design and iOS development,
                he ensures our products are not just functional but delightful to use.
                His design philosophy centers on simplicity and clarity, making complex
                AI capabilities accessible to everyone.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/neil_400x400.jpg"
                  alt="Neil"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <CardTitle>Neil</CardTitle>
                  <Badge variant="secondary">Co-Founder & Developer</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                A fullstack developer with a focus on web and AI technologies.
                Responsible for server infrastructure, website development, architecture
                design, and interface implementation. Passionate about leveraging AI to
                solve real problems and create tools that enhance human productivity
                and creativity.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Innovation with Purpose</h3>
              <p className="text-muted-foreground">
                We don't chase trends. Every feature we build serves a real purpose
                and solves a genuine problem.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">User-First Design</h3>
              <p className="text-muted-foreground">
                Our users are indies, founders, and professionals. We design with
                their workflows and needs in mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
