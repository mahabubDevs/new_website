import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Users, Clock, Database, Server, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import product1 from "@/assets/product/fitness.png";
import product2 from "@/assets/product/ecommerce.png";
import product3 from "@/assets/product/saas.png";
import product4 from "@/assets/product/health.png";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Software We've Built | MrbitX " },
      { name: "description", content: "Real results from real clients. Explore MrbitX  case studies in fintech, health, logistics, e-commerce and more." },
      { property: "og:title", content: "Case Studies — MrbitX " },
      { property: "og:description", content: "Real results from real clients across fintech, health, logistics and more." },
    ],
  }),
  component: CaseStudiesPage,
});

const cases = [
  {
    tag: "Health",
    title: "Lumen Health — Figma to App Store in 11 weeks",
    image: product4,
    challenge: "Lumen needed a HIPAA-grade telehealth iOS + Android app — and a launch tied to a Series B announcement.",
    solution: "Two parallel native squads (Swift, Kotlin) shared a TypeScript spec for the API, with weekly TestFlight + Play Beta drops. Encrypted video on WebRTC + Twilio fallback.",
    architecture: ["Swift / SwiftUI", "Kotlin / Jetpack Compose", "Node.js + Postgres (HIPAA)", "WebRTC + Twilio video", "AWS GovCloud"],
    metrics: [
      { icon: TrendingUp, v: "4.9★", l: "App Store" },
      { icon: Users, v: "320k", l: "patients" },
      { icon: Clock, v: "11 weeks", l: "to launch" },
      { icon: Server, v: "HIPAA", l: "compliant" },
    ],
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    tag: "Fintech",
    title: "Finovate — rebuilding a trading platform in 90 days",
    image: product1,
    challenge: "A legacy Java monolith struggled past 100k concurrent traders. Latency spikes were costing trades, and shipping a new feature took quarters.",
    solution: "We rebuilt the platform on a real-time React + Node stack with event sourcing, Redis streams, and a Cloudflare Workers edge tier. A traffic-shadowing migration enabled a zero-downtime cutover.",
    architecture: ["React + TanStack Query", "Node.js + NestJS microservices", "Postgres + Redis Streams", "Cloudflare Workers edge", "Datadog observability"],
    metrics: [
      { icon: TrendingUp, v: "4×", l: "faster load" },
      { icon: Users, v: "1.2M", l: "active traders" },
      { icon: Clock, v: "90 days", l: "to launch" },
      { icon: Globe, v: "99.99%", l: "uptime" },
    ],
    color: "from-violet-500/20 to-blue-500/20",
  },
  {
    tag: "E-commerce",
    title: "Maven & Co — headless commerce relaunch",
    image: product2,
    challenge: "A 2M-visit/month Shopify store had slow PDPs and an inflexible checkout — both bottlenecking conversion.",
    solution: "Headless storefront with edge SSR, image AI optimization, and a custom one-page checkout. Continuous A/B-testing pipeline integrated with PostHog.",
    architecture: ["Next.js + React Server Components", "Shopify Storefront API", "Stripe + custom checkout", "Cloudflare Images + Workers", "PostHog feature flags"],
    metrics: [
      { icon: TrendingUp, v: "+28%", l: "conversion" },
      { icon: Clock, v: "0.6s", l: "TTFB" },
      { icon: Users, v: "2.1M", l: "monthly visits" },
      { icon: Database, v: "12 wks", l: "delivery" },
    ],
    color: "from-fuchsia-500/20 to-rose-500/20",
  },
  {
    tag: "SaaS",
    title: "Stackline — analytics platform with AI insights",
    image: product3,
    challenge: "Customers had warehouses of data but no obvious next action. Stackline needed an AI layer that worked with any schema.",
    solution: "An LLM-powered insights engine on top of a multi-tenant warehouse, with self-serve onboarding and usage-based billing wired into Stripe.",
    architecture: ["Next.js + tRPC", "Postgres + DuckDB analytics", "OpenAI + open models via vLLM", "Stripe metered billing", "Vercel + Fly.io"],
    metrics: [
      { icon: TrendingUp, v: "5×", l: "trial → paid" },
      { icon: Users, v: "12k", l: "workspaces" },
      { icon: Cpu, v: "40ms", l: "p50 query" },
      { icon: Clock, v: "5 mo", l: "to MVP" },
    ],
    color: "from-indigo-500/20 to-violet-500/20",
  },
];

function CaseStudiesPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container mx-auto px-6 py-24 lg:py-32 text-center max-w-3xl relative">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Case studies</span>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">
              Outcomes, not just <span className="text-gradient">output</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Real products. Real metrics. The full story behind a few of our recent engagements.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 space-y-12">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <article className="rounded-3xl border border-border bg-gradient-card p-8 lg:p-10 hover:border-primary/40 hover:shadow-glow transition-all">

              {/* HERO IMAGE SECTION */}
              <div className="aspect-[16/4] rounded-2xl mb-8 relative overflow-hidden border border-border">

                {/* IMAGE */}
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-40`} />

                {/* Grid pattern */}
                <div className="absolute inset-0 grid-pattern opacity-25" />

                {/* TAG CENTER TEXT */}
                {/* <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-6xl font-bold text-white/20">
                    {c.tag}
                  </span>
                </div> */}
              </div>

              {/* CONTENT GRID */}
              <div className="grid lg:grid-cols-3 gap-8">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-2">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                    {c.tag}
                  </span>

                  <h2 className="mt-3 font-display text-3xl font-bold">
                    {c.title}
                  </h2>

                  <div className="mt-6 grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Challenge
                      </p>
                      <p className="mt-2 text-sm">{c.challenge}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Solution
                      </p>
                      <p className="mt-2 text-sm">{c.solution}</p>
                    </div>
                  </div>

                  {/* ARCHITECTURE */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Architecture
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.architecture.map((a) => (
                        <span
                          key={a}
                          className="px-3 py-1.5 rounded-full glass text-xs font-medium"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* METRICS */}
                <div className="grid grid-cols-2 gap-3 content-start">
                  {c.metrics.map((m) => (
                    <div
                      key={m.l}
                      className="rounded-2xl glass p-4 text-center hover:shadow-glow transition-shadow"
                    >
                      <m.icon className="h-5 w-5 text-primary-glow mx-auto" />

                      <p className="mt-2 font-display text-2xl font-bold text-gradient">
                        {m.v}
                      </p>

                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                        {m.l}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container mx-auto px-6 py-20">
        <Reveal>
          <div className="rounded-3xl bg-gradient-primary p-12 text-center shadow-elevated">
            <h2 className="font-display text-4xl font-bold text-primary-foreground">Your story is next.</h2>
            <p className="mt-3 text-primary-foreground/90">Tell us your goal — we'll show you how to get there.</p>
            <Button asChild variant="glass" size="lg" className="mt-6">
              <Link to="/contact">Start your project <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
