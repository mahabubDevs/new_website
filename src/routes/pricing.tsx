import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Engagement Models | Nexora Labs" },
      { name: "description", content: "Flexible engagement models — fixed-price projects, dedicated teams and monthly retainers — built around your goals." },
      { property: "og:title", content: "Pricing — Nexora Labs" },
      { property: "og:description", content: "Fixed Project, Dedicated Team or Monthly Retainer — choose how we work together." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Fixed Project",
    price: "From $15k",
    tag: "Best for MVPs",
    desc: "A clear scope, fixed price and timeline. Perfect for launching version 1.",
    features: [
      "Discovery & scoping workshop",
      "Design + engineering sprint",
      "Fixed milestones & payments",
      "30 days post-launch support",
    ],
    cta: "Scope my project",
    highlight: false,
  },
  {
    name: "Dedicated Team",
    price: "From $18k / mo",
    tag: "Most popular",
    desc: "An embedded squad that ships continuously alongside your team.",
    features: [
      "Senior engineers + designer + PM",
      "Sprint planning & weekly demos",
      "Full source ownership",
      "Scale up or down monthly",
      "Dedicated Slack channel",
    ],
    cta: "Build my team",
    highlight: true,
  },
  {
    name: "Monthly Retainer",
    price: "From $6k / mo",
    tag: "Maintenance & growth",
    desc: "On-tap engineering for evolving products — features, fixes, optimizations.",
    features: [
      "Reserved hours each month",
      "Priority response (24h SLA)",
      "Roadmap reviews",
      "Performance & security audits",
    ],
    cta: "Start a retainer",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container mx-auto px-6 py-24 lg:py-32 relative text-center max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Limited onboarding slots this month
            </span>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl font-bold">
              Engagement models built for <span className="text-gradient">how you grow</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Fixed price, dedicated team, or monthly retainer — every plan is senior-only and outcome-driven.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className={`relative h-full rounded-3xl border p-8 transition-all hover:-translate-y-1 ${
                p.highlight
                  ? "bg-gradient-primary border-transparent shadow-elevated"
                  : "bg-gradient-card border-border hover:border-primary/50 hover:shadow-glow"
              }`}>
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background text-xs font-semibold text-accent border border-border">
                    {p.tag}
                  </span>
                )}
                <p className={`text-xs font-semibold uppercase tracking-widest ${p.highlight ? "text-primary-foreground/80" : "text-accent"}`}>
                  {p.highlight ? "Recommended" : p.tag}
                </p>
                <h3 className={`mt-3 font-display text-2xl font-bold ${p.highlight ? "text-primary-foreground" : ""}`}>{p.name}</h3>
                <p className={`mt-2 font-display text-4xl font-bold ${p.highlight ? "text-primary-foreground" : "text-gradient"}`}>{p.price}</p>
                <p className={`mt-3 text-sm ${p.highlight ? "text-primary-foreground/85" : "text-muted-foreground"}`}>{p.desc}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${p.highlight ? "text-primary-foreground" : "text-primary-glow"}`} />
                      <span className={`text-sm ${p.highlight ? "text-primary-foreground/95" : ""}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={p.highlight ? "glass" : "hero"} size="lg" className="mt-8 w-full">
                  <Link to="/contact">{p.cta} <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <Reveal>
          <div className="rounded-3xl glass p-10 text-center">
            <h2 className="font-display text-3xl font-bold">Need something custom?</h2>
            <p className="mt-2 text-muted-foreground">Enterprise programs, fixed-bid RFPs, or staff augmentation — we tailor every engagement.</p>
            <Button asChild variant="hero" size="lg" className="mt-6">
              <Link to="/contact">Get a custom quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
