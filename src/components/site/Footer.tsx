import { Link } from "@tanstack/react-router";
import { Code2, Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface mt-24">
      {/* Newsletter */}
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="rounded-3xl bg-gradient-card border border-border p-8 lg:p-10 grid lg:grid-cols-[1.2fr_1fr] gap-6 items-center">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Engineering essays, in your inbox
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              One short, useful read every two weeks. No spam, ever.
            </p>
          </div>
          <form className="flex gap-2">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-lg bg-background/60 px-4 py-3 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <Button variant="hero" size="lg" type="submit">
              Subscribe <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary shadow-glow">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-semibold">
              Nexora<span className="text-gradient">Labs</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            A premium product engineering studio building scalable web, mobile, AI and cloud products for ambitious teams worldwide.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
            <li><Link to="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Mobile Apps</Link></li>
            <li><Link to="/devops" className="hover:text-foreground">DevOps & Cloud</Link></li>
            <li><Link to="/game-development" className="hover:text-foreground">Game Development</Link></li>
            <li><Link to="/services" className="hover:text-foreground">AI / ML</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Get in touch</h4>
          <p className="text-sm text-muted-foreground">hello@nexoralabs.com</p>
          <p className="text-sm text-muted-foreground mt-1">+1 (555) 010-2024</p>
          <p className="text-sm text-muted-foreground mt-4">
            Berlin · Remote-first, global
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nexora Labs. All rights reserved.</p>
          <p>Crafted with precision · Built to scale</p>
        </div>
      </div>
    </footer>
  );
}
