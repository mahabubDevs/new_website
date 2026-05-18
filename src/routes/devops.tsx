import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GitBranch,
  Server,
  Activity,
  Maximize2,
  ArrowRight,
  CheckCircle2,
  Cloud,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { TechMarquee } from "@/components/site/TechMarquee";

export const Route = createFileRoute("/devops")({
  head: () => ({
    meta: [
      { title: "DevOps & Cloud Engineering | MrbitX" },
      {
        name: "description",
        content:
          "CI/CD, IaC, observability and auto-scaling on AWS, GCP and Azure.",
      },
    ],
  }),
  component: DevOpsPage,
});

const pillars = [
  {
    icon: GitBranch,
    t: "CI/CD Pipelines",
    d: "PR → production in minutes with automation.",
  },
  {
    icon: Server,
    t: "Infrastructure as Code",
    d: "Terraform, Pulumi, CDK for reproducible infra.",
  },
  {
    icon: Activity,
    t: "Monitoring & Logging",
    d: "Datadog, Grafana, OpenTelemetry.",
  },
  {
    icon: Maximize2,
    t: "Auto-scaling Systems",
    d: "Kubernetes, serverless, edge scaling.",
  },
];

const benefits = [
  "AWS / GCP / Azure architects",
  "Cost optimization up to 38%",
  "99.99% uptime SLOs",
  "SOC 2 / HIPAA experience",
];

function DevOpsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* TEXT */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              DevOps & Cloud
            </span>

            <h1 className="mt-3 font-display font-bold leading-[1.05]
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl">

              Infrastructure that{" "}
              <span className="text-gradient">never wakes you up</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl">
              Cloud platforms that auto-scale, auto-heal and auto-deploy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get audit <ArrowRight />
                </Link>
              </Button>

              <Button asChild variant="glass" size="lg">
                <Link to="/case-studies">Case studies</Link>
              </Button>
            </div>
          </Reveal>

          {/* HERO CARD */}
          <Reveal delay={150}>
            <div className="relative aspect-square rounded-2xl sm:rounded-3xl bg-gradient-card border border-border shadow-elevated grid place-items-center overflow-hidden">

              <div className="absolute inset-0 grid-pattern opacity-30" />

              <Cloud className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 text-primary-glow opacity-70 animate-float" />

              {/* BADGES */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 glass rounded-xl px-3 py-2 text-xs">
                <span className="text-accent font-semibold">99.99%</span>{" "}
                uptime
              </div>

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 glass rounded-xl px-3 py-2 text-xs">
                <span className="text-accent font-semibold">90s</span> deploy
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* TECH */}
      <TechMarquee
        items={[
          "AWS",
          "GCP",
          "Azure",
          "Kubernetes",
          "Terraform",
          "ArgoCD",
          "Grafana",
          "Datadog",
        ]}
        label="Stack"
      />

      {/* PILLARS */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>

              <div className="h-full rounded-2xl bg-gradient-card border border-border p-6 sm:p-7 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1 transition-all">

                <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <p.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>

                <h2 className="mt-4 sm:mt-5 font-display text-xl sm:text-2xl font-semibold">
                  {p.t}
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  {p.d}
                </p>

              </div>

            </Reveal>
          ))}

        </div>
      </section>

      {/* BENEFITS + PROCESS */}
      <section className="bg-surface border-y border-border py-12 sm:py-16 lg:py-20">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Why teams choose us
            </span>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Resilient by default
            </h2>

            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="hero" size="lg" className="mt-6 sm:mt-8">
              <Link to="/contact">
                Talk to architect <ArrowRight />
              </Link>
            </Button>
          </Reveal>

          {/* RIGHT PROCESS */}
          <Reveal delay={100}>
            <div className="rounded-2xl sm:rounded-3xl glass p-6 sm:p-8">

              <h3 className="font-display text-lg sm:text-xl font-semibold">
                Our process
              </h3>

              <ol className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">

                {[
                  ["01", "Audit", "Review infra & risks."],
                  ["02", "Blueprint", "Design target architecture."],
                  ["03", "Migrate", "Zero downtime cutover."],
                  ["04", "Operate", "24/7 monitoring."],
                ].map(([n, t, d]) => (
                  <li key={n} className="flex gap-3 sm:gap-4">

                    <span className="font-display text-lg sm:text-xl font-bold text-gradient w-8 sm:w-10">
                      {n}
                    </span>

                    <div>
                      <p className="font-semibold text-sm sm:text-base">{t}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {d}
                      </p>
                    </div>

                  </li>
                ))}

              </ol>

            </div>
          </Reveal>

        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        <Reveal>
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-primary p-6 sm:p-10 lg:p-12 text-center shadow-elevated">

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground">
              Free 30-min cloud audit
            </h2>

            <p className="mt-3 text-sm sm:text-base text-primary-foreground/90">
              We find cost, speed & reliability improvements.
            </p>

            <Button asChild variant="glass" size="lg" className="mt-6">
              <Link to="/contact">
                Claim audit <ArrowRight />
              </Link>
            </Button>

          </div>
        </Reveal>

      </section>
    </>
  );
}