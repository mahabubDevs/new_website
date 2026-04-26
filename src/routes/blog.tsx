import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Engineering Blog | Nexora Labs" },
      { name: "description", content: "Engineering essays, product playbooks and case-study breakdowns from the Nexora Labs team." },
      { property: "og:title", content: "Insights — Nexora Labs" },
      { property: "og:description", content: "Engineering essays, product playbooks and case-study breakdowns." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { tag: "Engineering", title: "Shipping a real-time dashboard at 60fps with TanStack", excerpt: "How we cut render times by 6× using virtualization, signals and selective hydration.", date: "Apr 18, 2026", read: "8 min" },
  { tag: "AI", title: "RAG in production: lessons from 12 LLM rollouts", excerpt: "Eval pipelines, hybrid retrieval, and the prompts that survived contact with users.", date: "Apr 02, 2026", read: "11 min" },
  { tag: "Mobile", title: "React Native vs Flutter in 2026: a pragmatic verdict", excerpt: "Six teams. Three apps each. The real numbers behind native parity.", date: "Mar 24, 2026", read: "9 min" },
  { tag: "DevOps", title: "From PR to production in 90 seconds", excerpt: "Our CI pipeline that ships hundreds of deploys a week — without flakes.", date: "Mar 11, 2026", read: "7 min" },
  { tag: "Design", title: "Design systems that engineers actually use", excerpt: "Tokens, contracts and Figma → code workflows that don't drift.", date: "Feb 26, 2026", read: "6 min" },
  { tag: "Web3", title: "Auditing a dApp before launch: a checklist", excerpt: "Reentrancy, oracle manipulation, MEV — with real-world fixes.", date: "Feb 12, 2026", read: "10 min" },
];

function BlogPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container mx-auto px-6 py-24 lg:py-32 text-center max-w-3xl relative">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Insights</span>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">
              Field notes from <span className="text-gradient">production</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Essays, playbooks and post-mortems from the engineers actually shipping the work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="container mx-auto px-6 py-12">
        <Reveal>
          <div className="rounded-3xl border border-border bg-gradient-card p-8 lg:p-10 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Free download</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold">50 SaaS Ideas Engineers Can Ship in 2026</h2>
              <p className="mt-2 text-muted-foreground text-sm">A curated PDF with market sizing, tech stack notes and starter wireframes.</p>
            </div>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact"><Download className="h-4 w-4" /> Get the PDF</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="group h-full rounded-2xl bg-gradient-card border border-border p-7 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1 transition-all">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">{p.tag}</span>
                <h3 className="mt-3 font-display text-xl font-semibold group-hover:text-gradient transition-colors">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <Reveal>
          <div className="rounded-3xl bg-gradient-primary p-12 text-center shadow-elevated">
            <h2 className="font-display text-4xl font-bold text-primary-foreground">Get the next essay in your inbox</h2>
            <p className="mt-3 text-primary-foreground/90">One short, useful read every two weeks. No fluff.</p>
            <form className="mt-6 mx-auto flex max-w-md gap-2">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-lg bg-background/40 backdrop-blur px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <Button variant="glass" size="lg" type="submit">Subscribe <ArrowRight className="h-4 w-4" /></Button>
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}
