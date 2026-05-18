import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Engagement Models | MrbitX" },
      {
        name: "description",
        content:
          "Flexible engagement models — fixed-price, dedicated team, monthly retainer.",
      },
      { property: "og:title", content: "Pricing — MrbitX" },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Fixed Project",
    price: "From $15k",
    tag: "Best for MVPs",
    desc: "A clear scope, fixed price and timeline.",
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
    desc: "An embedded squad that ships continuously.",
    features: [
      "Senior engineers + designer + PM",
      "Sprint planning & weekly demos",
      "Full source ownership",
      "Dedicated Slack channel",
    ],
    cta: "Build my team",
    highlight: true,
  },
  {
    name: "Monthly Retainer",
    price: "From $6k / mo",
    tag: "Maintenance",
    desc: "On-tap engineering for evolving products.",
    features: [
      "Reserved hours each month",
      "Priority response",
      "Roadmap reviews",
      "Performance audits",
    ],
    cta: "Start a retainer",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 text-center max-w-3xl">

          <Reveal>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Limited onboarding slots
            </span>

            <h1 className="mt-5 font-display font-bold leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl">

              Engagement models built for{" "}
              <span className="text-gradient">how you grow</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground">
              Fixed price, dedicated team, or monthly retainer.
            </p>
          </Reveal>

        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>

              <div
                className={`relative h-full rounded-3xl border p-6 sm:p-8 transition-all hover:-translate-y-1 ${
                  p.highlight
                    ? "bg-gradient-primary border-transparent shadow-elevated"
                    : "bg-gradient-card border-border hover:border-primary/50 hover:shadow-glow"
                }`}
              >

                {/* TAG */}
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background text-xs font-semibold">
                    {p.tag}
                  </span>
                )}

                <p className={`text-xs uppercase tracking-widest font-semibold ${
                  p.highlight ? "text-white/80" : "text-accent"
                }`}>
                  {p.highlight ? "Recommended" : p.tag}
                </p>

                <h3 className={`mt-3 font-display font-bold
                  text-xl sm:text-2xl ${p.highlight ? "text-white" : ""}`}>
                  {p.name}
                </h3>

                <p className={`mt-2 font-display font-bold
                  text-3xl sm:text-4xl ${
                    p.highlight ? "text-white" : "text-gradient"
                  }`}>
                  {p.price}
                </p>

                <p className={`mt-3 text-sm ${
                  p.highlight ? "text-white/90" : "text-muted-foreground"
                }`}>
                  {p.desc}
                </p>

                {/* FEATURES */}
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 items-start">
                      <CheckCircle2
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          p.highlight ? "text-white" : "text-primary-glow"
                        }`}
                      />
                      <span className={`text-sm ${
                        p.highlight ? "text-white/95" : ""
                      }`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <Button
                  asChild
                  variant={p.highlight ? "glass" : "hero"}
                  size="lg"
                  className="mt-8 w-full"
                >
                  <Link to="/contact">
                    {p.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

              </div>
            </Reveal>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">

        <Reveal>
          <div className="rounded-3xl glass p-6 sm:p-10 text-center">

            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Need something custom?
            </h2>

            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Enterprise programs, RFPs, or custom builds.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">

              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get Custom Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="glass" size="lg">
                <Link to="/contact">Talk to Team</Link>
              </Button>

            </div>

          </div>
        </Reveal>

      </section>
    </>
  );
}