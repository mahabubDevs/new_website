import { createFileRoute, Link } from "@tanstack/react-router";
import { GitBranch, Server, Activity, Maximize2, ArrowRight, CheckCircle2, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { TechMarquee } from "@/components/site/TechMarquee";

export const Route = createFileRoute("/devops")({
  head: () => ({
    meta: [
      { title: "DevOps & Cloud Engineering | Nexora Labs" },
      { name: "description", content: "CI/CD pipelines, infrastructure as code, observability and auto-scaling on AWS, GCP and Azure." },
      { property: "og:title", content: "DevOps — Nexora Labs" },
      { property: "og:description", content: "CI/CD, IaC, observability, auto-scaling — built right the first time." },
    ],
  }),
  component: DevOpsPage,
});

const pillars = [
  { icon: GitBranch, t: "CI/CD Pipelines", d: "From PR → production in minutes. Preview environments, automated tests, zero-downtime deploys." },
  { icon: Server, t: "Infrastructure as Code", d: "Terraform, Pulumi and CDK. Reproducible environments and audit-friendly change history." },
  { icon: Activity, t: "Monitoring & Logging", d: "Datadog, Grafana, OpenTelemetry. Real SLOs, alert fatigue eliminated." },
  { icon: Maximize2, t: "Auto-scaling Systems", d: "Kubernetes, serverless and edge runtimes that scale from 0 to 1M without paging anyone." },
];

const benefits = [
  "AWS / GCP / Azure certified architects",
  "Cost reduction averaging 38%",
  "99.99% uptime SLOs as standard",
  "FedRAMP / SOC 2 / HIPAA experience",
];

function DevOpsPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container mx-auto px-6 py-24 lg:py-32 relative grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">DevOps & Cloud</span>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-[1.05]">
              Infrastructure that <span className="text-gradient">never wakes you up</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              We design, build and operate cloud platforms that auto-heal, auto-scale and auto-deploy — so your team can ship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Get a free audit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/case-studies">Read case studies</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-square rounded-3xl bg-gradient-card border border-border shadow-elevated grid place-items-center overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <Cloud className="h-40 w-40 text-primary-glow opacity-60 animate-float" />
              <div className="absolute top-6 right-6 glass rounded-xl px-4 py-2 text-xs">
                <span className="text-accent font-semibold">99.99%</span> uptime
              </div>
              <div className="absolute bottom-6 left-6 glass rounded-xl px-4 py-2 text-xs">
                <span className="text-accent font-semibold">90s</span> PR → prod
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TechMarquee items={["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "Pulumi", "ArgoCD", "GitHub Actions", "Datadog", "Grafana", "Prometheus", "Cloudflare", "Vault", "Istio"]} label="Stack" />

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 90}>
              <div className="h-full rounded-2xl bg-gradient-card border border-border p-7 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1 transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <p.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold">{p.t}</h2>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Why teams choose us</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Resilient by default</h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/contact">Talk to a cloud architect <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-3xl glass p-8">
              <h3 className="font-display text-xl font-semibold">Our process</h3>
              <ol className="mt-6 space-y-5">
                {[
                  ["01", "Audit", "Architecture review, cost model, risk map."],
                  ["02", "Blueprint", "Target state, IaC modules, runbooks."],
                  ["03", "Migrate", "Zero-downtime cutover with traffic shadowing."],
                  ["04", "Operate", "24/7 monitoring, SLO dashboards, on-call rotation."],
                ].map(([n, t, d]) => (
                  <li key={n} className="flex gap-4">
                    <span className="font-display text-xl font-bold text-gradient w-10">{n}</span>
                    <div>
                      <p className="font-semibold">{t}</p>
                      <p className="text-sm text-muted-foreground">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <Reveal>
          <div className="rounded-3xl bg-gradient-primary p-12 text-center shadow-elevated">
            <h2 className="font-display text-4xl font-bold text-primary-foreground">Free 30-min cloud audit</h2>
            <p className="mt-3 text-primary-foreground/90">We'll find the top 3 wins in your infra — no strings.</p>
            <Button asChild variant="glass" size="lg" className="mt-6">
              <Link to="/contact">Claim your audit <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
