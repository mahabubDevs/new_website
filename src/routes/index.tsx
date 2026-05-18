import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Code2, Smartphone, Cloud, Palette, Brain, ShieldCheck,
  Sparkles, CheckCircle2, Star, Quote, Rocket, Users, Globe, Zap,
  Database, Layers, Box, Gamepad2, Link2, GitBranch, Server, Activity,
  TrendingUp, Search, Target, Cpu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { TechMarquee } from "@/components/site/TechMarquee";

import hero from "@/assets/hero.jpg";
import team from "@/assets/team.jpg";

import user1 from "@/assets/rating/6.png";
import user2 from "@/assets/rating/2.jpg";
import user3 from "@/assets/rating/3.jpg";
import user4 from "@/assets/rating/4.jpg";
import user5 from "@/assets/rating/5.jpg";

import product1 from "@/assets/product/fitness.png";
import product2 from "@/assets/product/ecommerce.png";
import product3 from "@/assets/product/saas.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MrbitX — Scalable Web, Mobile & Emerging Tech Studio" },
      {
        name: "description",
        content:
          "MrbitX builds scalable digital products — web, mobile, AI, blockchain, game and cloud.",
      },
      { property: "og:title", content: "MrbitX — Scalable Software for Modern Businesses" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

const users = [user1, user2, user3, user4, user5];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-36 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Limited onboarding slots
            </span>

            <h1 className="mt-6 font-display font-bold leading-[1.05]
              text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
              We Build <span className="text-gradient">Scalable Digital Products</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl">
              MrbitX builds scalable web, mobile, AI and cloud products end-to-end.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Start Project <ArrowRight /></Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link to="/case-studies">Case Studies</Link>
              </Button>
            </div>

            {/* USERS */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">

              <div className="flex -space-x-2">
                {users.map((u, i) => (
                  <img
                    key={i}
                    src={u}
                    className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 border-background"
                  />
                ))}
              </div>

              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-muted-foreground">4.9/5 reviews</span>
              </div>

            </div>
          </div>

          {/* IMAGE */}
          <Reveal>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border">
              <img src={hero} className="w-full h-auto object-cover" />
            </div>
          </Reveal>

        </div>
      </section>

      {/* STATS */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[150, 50, 10, 98].map((v, i) => (
            <div key={i} className="glass rounded-2xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient">
                <Counter to={v} suffix={i === 3 ? "%" : "+"} />
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Stat {i + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
            Full Stack Services
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {[Code2, Smartphone, Cloud, Brain, Database, Palette].map((Icon, i) => (
            <div key={i} className="glass p-6 rounded-2xl">
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-3 font-semibold">Service {i + 1}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Scalable modern solution.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {[product1, product2, product3].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-border">
              <img src={img} className="w-full h-auto object-cover" />
              <div className="p-5">
                <h3 className="font-semibold">Case Study {i + 1}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Performance improvement & scalability upgrade.
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* TEAM */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <img src={team} className="rounded-2xl w-full" />

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why MrbitX
            </h2>
            <p className="mt-4 text-muted-foreground">
              Senior engineers building scalable products fast.
            </p>

            <ul className="mt-6 space-y-3">
              {["Fast delivery", "Scalable architecture", "Clean code"].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="text-primary" />
                  {t}
                </li>
              ))}
            </ul>

            <Button asChild className="mt-6">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Build Something Scalable
          </h2>
          <p className="mt-3 text-white/80">
            Get your product built by senior engineers.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="secondary">
              <Link to="/contact">Start Now</Link>
            </Button>
            <Button asChild variant="glass">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}