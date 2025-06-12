import type { Route } from "./+types/projects";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Mic, Brain, Clock, Search, Sparkles, Zap, ExternalLink } from "lucide-react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Projects - Guion" },
    { name: "description", content: "Explore our innovative AI-powered products designed to help indies, founders, and professionals." },
  ];
}

export default function Projects() {
  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Our Projects
        </h1>
        <p className="text-lg text-muted-foreground">
          We build AI-powered tools that enhance human capabilities and make
          technology work for you, not against you.
        </p>
      </div>

      {/* FlickNote Section */}
      <section id="flick-note" className="mb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border bg-card overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <Badge className="mb-4">Now Available</Badge>
                  <h2 className="text-3xl font-bold mb-4">FlickNote</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    The audio-first note-taking app that lets you capture ideas at the
                    speed of thought. Simply speak, and let AI help you organize and
                    recall your notes effortlessly.
                  </p>
                </div>
                <Mic className="h-16 w-16 text-primary/50" />
              </div>
            </div>

            {/* Features */}
            <CardContent className="p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-6">Key Features</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex gap-4">
                  <Mic className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Instant Audio Capture</h4>
                    <p className="text-sm text-muted-foreground">
                      Record your thoughts instantly with one tap. No typing required.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Brain className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">AI-Powered Transcription</h4>
                    <p className="text-sm text-muted-foreground">
                      Accurate transcription that understands context and formatting.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Search className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Smart Search & Recall</h4>
                    <p className="text-sm text-muted-foreground">
                      Find any note instantly with intelligent search capabilities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Time-Aware Organization</h4>
                    <p className="text-sm text-muted-foreground">
                      Notes are automatically organized by when and where you took them.
                    </p>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-6">Perfect For</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Meeting Notes</Badge>
                  <Badge variant="secondary">Voice Memos</Badge>
                  <Badge variant="secondary">Idea Capture</Badge>
                  <Badge variant="secondary">Daily Journaling</Badge>
                  <Badge variant="secondary">Research Notes</Badge>
                  <Badge variant="secondary">Task Reminders</Badge>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex gap-4">
                <Button disabled>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What's Next</h2>
          <p className="text-lg text-muted-foreground">
            We're always exploring new ways AI can help individuals work smarter.
            Here's a glimpse of what we're working on.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="outline">In Development</Badge>
            </div>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Project Lightning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                An AI-powered workflow automation tool designed for solo entrepreneurs.
                Streamline repetitive tasks and focus on what matters most.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="outline">Exploring</Badge>
            </div>
            <CardHeader>
              <Sparkles className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Project Spark</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A creative companion for content creators and writers. Use AI to
                overcome creative blocks and enhance your unique voice.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
