import type { Route } from "./+types/vision";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Compass, Heart, Shield, Rocket, Users, Lightbulb } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Vision - Guion" },
    { name: "description", content: "Discover Guion's vision for the future of AI and how we're empowering indies, founders, and professionals." },
  ];
}

export default function Vision() {
  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Our Vision
        </h1>
        <p className="text-lg text-muted-foreground">
          We believe AI should amplify human potential, not replace it. Our mission
          is to build tools that empower individuals to think better, work smarter,
          and achieve more.
        </p>
      </div>

      {/* Mission Statement */}
      <section className="mb-20">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <Compass className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-4">
                To explore and harness the possibilities of AI in ways that genuinely
                help indies, founders, and professionals in their daily work and
                creative pursuits.
              </p>
              <p className="text-lg text-muted-foreground">
                We're not here to automate jobs or replace human creativity. We're here
                to build tools that enhance what makes us uniquely human: our ability
                to think, create, and solve problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Design Principles */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Design Principles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-primary mb-3" />
              <CardTitle>Human-Centered</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every feature we build starts with understanding real human needs.
                Technology should adapt to people, not the other way around.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-3" />
              <CardTitle>Privacy First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Your data is yours. We build with privacy by design, ensuring you
                maintain control over your information and how it's used.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-primary mb-3" />
              <CardTitle>Simplicity Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Powerful doesn't mean complicated. We obsess over making complex
                AI capabilities accessible through simple, intuitive interfaces.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-3" />
              <CardTitle>Built for Individuals</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We design for solo entrepreneurs, independent creators, and small
                teams who value autonomy and efficiency in their work.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Rocket className="h-8 w-8 text-primary mb-3" />
              <CardTitle>Practical Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We focus on solving real problems, not chasing hype. Every innovation
                must have a clear, practical benefit for our users.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Compass className="h-8 w-8 text-primary mb-3" />
              <CardTitle>Ethical AI</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We're committed to developing AI responsibly, with transparency
                about capabilities and limitations, always keeping human agency at
                the forefront.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Future Vision */}
      <section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Looking Ahead</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We envision a future where AI serves as a thoughtful companion in your
            work and creative endeavors. Where technology enhances your natural
            abilities without getting in the way.
          </p>
          <p className="text-lg text-muted-foreground">
            Join us on this journey to explore what's possible when we put humans
            first and use AI as a tool for empowerment, not replacement.
          </p>
        </div>
      </section>
    </div>
  );
}