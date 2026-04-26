import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2, Smartphone, Cloud, Palette, Brain, ShieldCheck,
  ShoppingCart, BarChart3, ArrowRight, CheckCircle2, Gamepad2, GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import webDev from "@/assets/web-dev.jpg";
import appDev from "@/assets/app-dev.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web, Mobile, AI, Game & Cloud | Nexora Labs" },
      { name: "description", content: "Web, mobile, SaaS, AI, blockchain, game development, DevOps and more — every layer of your product, covered." },
      { property: "og:title", content: "Services — Nexora Labs" },
      { property: "og:description", content: "End-to-end software development for web, mobile, AI, game and cloud." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "Marketing sites, dashboards, SaaS platforms and complex web apps built with modern frameworks.", points: ["React, Next.js, TanStack Start", "Headless CMS & e-commerce", "Real-time, edge & SSR"], img: webDev, link: null as string | null },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native iOS & Android plus cross-platform builds that feel and perform native.", points: ["Swift, Kotlin, React Native, Flutter", "Offline-first architectures", "App Store & Play submission"], img: appDev, link: null },
  { icon: Gamepad2, title: "Game Development", desc: "Unity & Unreal-powered 2D / 3D games with multiplayer netcode and monetization built in.", points: ["Unity, Unreal Engine 5", "Authoritative multiplayer", "Mobile, PC, WebGL, console"], img: null, link: "/game-development" },
  { icon: Brain, title: "AI & Automation", desc: "Add LLMs, RAG, agents and intelligent automation to your product workflows.", points: ["OpenAI / Anthropic / OSS models", "Vector DB & RAG pipelines", "Agentic workflows"], img: null, link: null },
  { icon: GitBranch, title: "DevOps & Cloud", desc: "CI/CD, IaC, observability and auto-scaling on AWS, GCP and Azure.", points: ["Terraform, Pulumi, ArgoCD", "Kubernetes & service mesh", "99.99% uptime SLOs"], img: null, link: "/devops" },
  { icon: Palette, title: "UI / UX Design", desc: "Research-driven product design with a high-fidelity design system you can scale.", points: ["Discovery & user research", "Wireframes → polished UI", "Design systems in Figma"], img: null, link: null },
  { icon: Cloud, title: "Cloud Engineering", desc: "Reliable infrastructure that auto-scales globally — without surprise bills.", points: ["AWS, GCP, Cloudflare", "Cost optimization", "Multi-region failover"], img: null, link: null },
  { icon: ShieldCheck, title: "Security & QA", desc: "Hardened from day one. Audits, automated tests and compliance ready.", points: ["SOC 2 / GDPR readiness", "Pen-testing & code audits", "E2E & load testing"], img: null, link: null },
  { icon: ShoppingCart, title: "E-commerce", desc: "Headless commerce that converts: lightning-fast PDPs, smart checkout, A/B-ready.", points: ["Shopify, Stripe, custom stacks", "Headless storefronts", "Subscriptions & marketplaces"], img: null, link: null },
  { icon: BarChart3, title: "Product Analytics", desc: "Know what users do. Ship the right thing next.", points: ["PostHog, Amplitude, GA4", "Funnels, retention, A/B", "Data warehouses & ETL"], img: null, link: null },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container mx-auto px-6 py-24 lg:py-32 relative text-center max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Services</span>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">
              Everything you need to <span className="text-gradient">ship great software</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              From the first sketch to the millionth user — one team covers every layer of your product.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 space-y-24">
        {services.map((s, i) => (
          <Reveal key={s.title}>
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div>
                {s.img ? (
                  <div className="rounded-3xl overflow-hidden border border-border shadow-elevated">
                    <img src={s.img} alt={s.title} width={1200} height={900} loading="lazy" className="w-full h-auto" />
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-3xl bg-gradient-card border border-border grid place-items-center shadow-elevated">
                    <s.icon className="h-32 w-32 text-primary-glow opacity-70" />
                  </div>
                )}
              </div>
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold">{s.title}</h2>
                <p className="mt-4 text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="hero">
                    <Link to="/contact">Discuss your project <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                  {s.link && (
                    <Button asChild variant="glass">
                      <Link to={s.link as "/game-development" | "/devops"}>Deep dive <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container mx-auto px-6 py-20">
        <Reveal>
          <div className="rounded-3xl bg-gradient-primary p-12 text-center shadow-elevated">
            <h2 className="font-display text-4xl font-bold text-primary-foreground">Not sure where to start?</h2>
            <p className="mt-3 text-primary-foreground/90">Book a free 30-min product strategy call.</p>
            <Button asChild variant="glass" size="lg" className="mt-6">
              <Link to="/contact">Book a call <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
