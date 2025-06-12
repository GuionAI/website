import { Link } from "react-router";
import { Separator } from "~/components/ui/separator";
import { Mail, MapPin, Github, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img 
                src="/guion-logo-light.png" 
                alt="Guion" 
                className="h-8 w-auto dark:hidden"
              />
              <img 
                src="/guion-logo-dark.png" 
                alt="Guion" 
                className="h-8 w-auto hidden dark:block"
              />
              <span className="text-lg font-semibold">Guion</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Exploring AI possibilities for indies, founders, and professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/vision" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projects#flick-note" className="text-muted-foreground hover:text-foreground transition-colors">
                  FlickNote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:feedback@guion.io" className="hover:text-foreground transition-colors">
                  feedback@guion.io
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Remote-first startup</span>
              </li>
            </ul>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/GuionAI" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com/guion" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Guion. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion by a team of two
          </p>
        </div>
      </div>
    </footer>
  );
}
