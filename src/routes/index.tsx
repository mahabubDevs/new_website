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
          "MrbitX builds scalable digital products — web, mobile, AI, blockchain, game and cloud. Premium engineering for startups and enterprises.",
      },
      { property: "og:title", content: "MrbitX — Scalable Software for Modern Businesses" },
      { property: "og:description", content: "We build scalable digital products that power modern businesses." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

const serviceGroups = [
  {
    label: "Core Development",
    items: [
      { icon: Code2, title: "Web Development", desc: "React, Next.js & TanStack — performant, SEO-rich, edge-ready." },
      { icon: Smartphone, title: "Mobile Apps", desc: "Native iOS, Android & cross-platform with React Native + Flutter." },
      { icon: Layers, title: "SaaS Development", desc: "Multi-tenant, billing-ready, auth & analytics from day one." },
      { icon: Link2, title: "API Development", desc: "REST, GraphQL & gRPC. Versioned, documented, rate-limited." },
    ],
  },
  {
    label: "Advanced & High Demand",
    items: [
      { icon: Gamepad2, title: "Game Development", desc: "Unity & Unreal — 2D, 3D, multiplayer & monetization." },
      { icon: Brain, title: "AI & Machine Learning", desc: "LLM agents, RAG, vision and predictive systems in production." },
      { icon: Database, title: "Blockchain", desc: "Smart contracts, audits, custodial & non-custodial wallets." },
      { icon: Box, title: "Web3 / dApps", desc: "End-to-end dApps with EVM, Solana & rollup-native UX." },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { icon: GitBranch, title: "DevOps & CI/CD", desc: "Pipelines that ship hundreds of deploys a week, reliably." },
      { icon: Cloud, title: "Cloud Engineering", desc: "AWS, Azure, GCP — architected for scale and cost." },
      { icon: Server, title: "Microservices", desc: "Event-driven systems with bounded contexts, done right." },
      { icon: Cpu, title: "Kubernetes & Docker", desc: "Service mesh, GitOps and zero-downtime rollouts." },
    ],
  },
  {
    label: "Experience",
    items: [
      { icon: Palette, title: "UI / UX Design", desc: "Research-driven product design that converts and delights." },
      { icon: Sparkles, title: "Product Design", desc: "From discovery to launch — high-fidelity, fast iteration." },
      { icon: ShieldCheck, title: "Branding & Design Systems", desc: "Cohesive identity & token-driven systems that scale." },
    ],
  },
  {
    label: "Growth",
    items: [
      { icon: Search, title: "SEO Optimization", desc: "Technical SEO, content strategy & semantic markup." },
      { icon: Activity, title: "Performance Optimization", desc: "Core Web Vitals to 99+. Render fast, render less." },
      { icon: Target, title: "Conversion Rate Optimization", desc: "A/B-tested funnels backed by qualitative research." },
    ],
  },
];

const stats = [
  { v: 150, suffix: "+", l: "Projects Delivered" },
  { v: 50, suffix: "+", l: "Global Clients" },
  { v: 10, suffix: "+", l: "Countries Served" },
  { v: 98, suffix: "%", l: "Client Satisfaction" },
];

const process = [
  { n: "01", t: "Discovery", d: "Workshops to align on goals, users and metrics." },
  { n: "02", t: "Strategy", d: "Roadmap, scope, architecture & success criteria." },
  { n: "03", t: "Design", d: "Wireframes, prototypes & a polished design system." },
  { n: "04", t: "Development", d: "Agile sprints with weekly demos and full source ownership." },
  { n: "05", t: "QA Testing", d: "Automated, manual & load testing — built into every sprint." },
  { n: "06", t: "Deployment", d: "Performance, security audits and a confident go-live." },
  { n: "07", t: "Scaling", d: "Continuous delivery, monitoring and growth iteration." },
];

const cases = [
  {
    industry: "Fitness",
    title: "Fitness — real-time trading platform",
    image: product1,
    problem: "Legacy Java monolith couldn't scale past 100k traders.",
    solution: "Rebuilt on React + Node with event sourcing and edge caching.",
    metrics: [{ v: "+300%", l: "user growth" }, { v: "50%", l: "faster load" }],
    color: "from-violet-500/20 to-blue-500/20",
  },
  {
    industry: "E-commerce",
    title: "Maven & Co — headless commerce relaunch",
    image: product2,
    problem: "Slow PDPs were tanking conversion on a 2M-visit/mo store.",
    solution: "Headless storefront with edge SSR and a custom checkout.",
    metrics: [{ v: "+28%", l: "conversion" }, { v: "0.6s", l: "TTFB" }],
    color: "from-fuchsia-500/20 to-rose-500/20",
  },
  {
    industry: "SaaS",
    title: "Stackline — AI analytics platform",
    image: product3,
    problem: "Customers couldn't extract insight from raw warehouse data.",
    solution: "LLM-powered insights engine with self-serve onboarding.",
    metrics: [{ v: "5×", l: "trial → paid" }, { v: "12k", l: "workspaces" }],
    color: "from-indigo-500/20 to-cyan-500/20",
  },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, Finovate", text: "MrbitX rebuilt our trading platform in 90 days. Zero downtime, 4× faster. Their team feels like an extension of ours.", company: "FINOVATE" },
  { name: "Marcus Hale", role: "Founder, Lumen Health", text: "From Figma to App Store in 11 weeks. The craft and pace are unmatched.", company: "LUMEN" },
  { name: "Priya Raman", role: "VP Product, Cargolane", text: "They challenge our thinking and ship like a startup. Easily our best engineering partner.", company: "CARGOLANE" },
];

const tech = ["React", "Next.js", "TanStack", "TypeScript", "Node.js", "NestJS", "Python", "Go", "Swift", "Kotlin", "Flutter", "React Native", "AWS", "GCP", "Kubernetes", "Docker", "Postgres", "Stripe", "OpenAI"];

const pricing = [
  { name: "Fixed Project", from: "$15k", desc: "A clear scope and timeline. Best for MVPs." },
  { name: "Dedicated Team", from: "$18k/mo", desc: "An embedded squad shipping continuously." },
  { name: "Monthly Retainer", from: "$6k/mo", desc: "On-tap engineering for evolving products." },
];


const users = [user1, user2, user3, user4, user5];


function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

        <div className="container mx-auto px-6 pt-24 pb-28 lg:pt-32 lg:pb-36 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-foreground/90">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Limited onboarding slots this month
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              We Build <span className="text-gradient">Scalable Digital Products</span> That Power Modern Businesses
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              MrbitX  is a global product engineering studio. We design,
              build and scale web, mobile, AI and cloud products end-to-end —
              for founders, scale-ups and enterprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Start Your Project <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">

            <div className="flex -space-x-2">
              {users.map((user, i) => (
                <div
                  key={i}
                  className="h-9 w-9 overflow-hidden rounded-full border-2 border-background"
                >
                  <img
                    src={user}
                    alt={`User ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
              <div>
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span>4.9/5 from 280+ reviews</span>
              </div>
            </div>
          </div>

          <Reveal delay={150} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border">
              <img src={hero} alt="MrbitX software engineering" width={1600} height={1200} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating code snippet */}
            <div className="absolute -left-4 top-8 hidden md:block glass rounded-xl px-4 py-3 shadow-glow animate-float w-64 font-mono text-[11px]">
              <span className="text-accent">const</span> <span className="text-primary-glow">app</span> = <span className="text-accent">await</span> MrbitX.<br />
              &nbsp;&nbsp;build({"{ "}<span className="text-muted-foreground">scale: </span><span className="text-accent">'planet'</span>{" }"}).<br />
              &nbsp;&nbsp;deploy();
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-glow animate-float w-56" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary">
                  <Rocket className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Avg. delivery</p>
                  <p className="font-display font-semibold">8 weeks</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-glow animate-float w-56" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent">
                  <Zap className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Performance</p>
                  <p className="font-display font-semibold">99 Lighthouse</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <TechMarquee items={tech} label="Trusted by" />
      </section>

      {/* LIVE STATS */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-shadow">
                <p className="font-display text-4xl sm:text-5xl font-bold text-gradient">
                  <Counter to={s.v} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES — EXPANDED GRID */}
      <section className="container mx-auto px-6 py-20">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">What we do</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Every layer of your product, covered
          </h2>
          <p className="mt-4 text-muted-foreground">
            Five disciplines. One accountable team. Sixty senior engineers and designers on call.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {serviceGroups.map((g, gi) => (
            <div key={g.label}>
              <Reveal>
                <h3 className="font-display text-sm uppercase tracking-widest text-accent mb-5">{g.label}</h3>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {g.items.map((s, i) => (
                  <Reveal key={s.title} delay={(gi * 30) + (i * 60)}>
                    <div className="group relative h-full rounded-2xl bg-gradient-card border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform">
                        <s.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h4 className="mt-4 font-display text-lg font-semibold">{s.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/services">Explore all services <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* PROCESS — 7 STEPS */}
      <section className="bg-surface border-y border-border py-20">
        <div className="container mx-auto px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">How we work</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">A 7-step delivery process</h2>
          </Reveal>
          <div className="mt-14 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden lg:block" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-7">
              {process.map((p, i) => (
                <Reveal key={p.n} delay={i * 70}>
                  <div className="relative h-full rounded-2xl glass p-5 hover:shadow-glow transition-shadow">
                    <p className="font-display text-2xl font-bold text-gradient">{p.n}</p>
                    <h3 className="mt-2 font-display text-base font-semibold">{p.t}</h3>
                    <p className="mt-1.5 text-xs text-muted-foreground">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="container mx-auto px-6 py-20">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Featured work
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Outcomes, not just output
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-border bg-gradient-card p-7 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1 transition-all">

                {/* IMAGE SECTION */}
                <div className="aspect-[16/10] rounded-2xl relative overflow-hidden border border-border mb-5">

                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-30`} />

                  {/* Industry text overlay */}
                  {/* <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-3xl font-bold text-white/30 group-hover:scale-110 transition-transform">
                      {c.industry}
                    </span>
                  </div> */}

                  {/* subtle pattern overlay */}
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                </div>

                {/* CONTENT */}
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                  {c.industry}
                </span>

                <h3 className="mt-2 font-display text-xl font-semibold">
                  {c.title}
                </h3>

                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                  Problem
                </p>
                <p className="text-sm">{c.problem}</p>

                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                  Solution
                </p>
                <p className="text-sm">{c.solution}</p>

                {/* METRICS */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {c.metrics.map((m) => (
                    <div
                      key={m.l}
                      className="rounded-xl glass p-3 text-center"
                    >
                      <p className="font-display text-xl font-bold text-gradient">
                        {m.v}
                      </p>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                        {m.l}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button asChild variant="glass" size="lg">
            <Link to="/case-studies">
              All case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* WHY US */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-elevated">
              <img src={team} alt="Our team" width={1400} height={1000} loading="lazy" className="w-full h-auto" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Why MrbitX</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              Senior talent. Startup velocity. Enterprise rigor.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Cross-functional squads — product, design, engineering, QA, DevOps — that ship in days, not quarters.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Dedicated product squad from week one",
                "Weekly demos & full source ownership",
                "Fixed-scope or pay-as-you-grow models",
                "SOC 2 ready security from day zero",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/about">About MrbitX <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface border-y border-border py-20">
        <div className="container mx-auto px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Client stories</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Loved by founders & CTOs</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="h-full rounded-2xl bg-gradient-card border border-border p-7 hover:border-primary/50 hover:shadow-glow transition-all">
                  <Quote className="h-7 w-7 text-primary-glow" />
                  <p className="mt-4 text-foreground/90">{t.text}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-primary" />
                    <div>
                      <p className="font-medium text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Logos strip */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
            {["FINOVATE", "LUMEN", "CARGOLANE", "MAVEN & CO", "STACKLINE", "KLASSLY"].map((c) => (
              <span key={c} className="font-display text-lg tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="container mx-auto px-6 py-20">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Engagement models</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Built for how you grow</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pricing.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className="h-full rounded-2xl bg-gradient-card border border-border p-7 hover:shadow-glow hover:border-primary/50 transition-all">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.name}</p>
                <p className="mt-2 font-display text-3xl font-bold text-gradient">{p.from}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <Link to="/pricing" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Users, t: "120+ experts", d: "Senior product engineers worldwide." },
            { icon: Globe, t: "10+ countries", d: "Distributed talent, follow-the-sun delivery." },
            { icon: TrendingUp, t: "98% retention", d: "Clients stay, projects compound." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 80}>
              <div className="flex items-center gap-4 rounded-2xl glass p-5">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-primary">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-semibold">{f.t}</p>
                  <p className="text-sm text-muted-foreground">{f.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto px-6 py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-spectrum p-12 lg:p-16 text-center shadow-elevated">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-6xl font-bold text-primary-foreground">
                Let's Build Something That Scales
              </h2>
              <p className="mt-5 text-primary-foreground/90 max-w-2xl mx-auto text-lg">
                Tell us about your product. We'll come back within 24 hours with a tailored plan, timeline and team.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Button asChild variant="glass" size="xl">
                  <Link to="/contact">Build Your App <ArrowRight className="h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
