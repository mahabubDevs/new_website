import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Briefcase, Heart, Coffee, Globe, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join Nexora Labs" },
      {
        name: "description",
        content:
          "Join 120+ engineers, designers and product thinkers shipping software people love. Open roles across web, mobile, AI and design.",
      },
      { property: "og:title", content: "Careers at Nexora Labs" },
      { property: "og:description", content: "Build remarkable software with a global team. Remote-first, senior-only." },
    ],
  }),
  component: CareersPage,
});

const perks = [
  { icon: Globe, t: "Remote-first", d: "Work from anywhere. We coordinate, not surveil." },
  { icon: Coffee, t: "Async by default", d: "Deep work over endless meetings." },
  { icon: GraduationCap, t: "$2k learning budget", d: "Books, courses, conferences — yearly." },
  { icon: Heart, t: "Health & wellness", d: "Top-tier insurance and wellness stipend." },
];

const roles = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", loc: "Remote", type: "Full-time" },
  { title: "iOS Engineer (Swift)", team: "Mobile", loc: "Remote / EU", type: "Full-time" },
  { title: "Android Engineer (Kotlin)", team: "Mobile", loc: "Remote", type: "Full-time" },
  { title: "Senior Product Designer", team: "Design", loc: "Remote", type: "Full-time" },
  { title: "AI / ML Engineer", team: "AI", loc: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", team: "Platform", loc: "Remote", type: "Full-time" },
  { title: "Engineering Manager", team: "Leadership", loc: "Remote / Berlin", type: "Full-time" },
  { title: "QA Automation Engineer", team: "Quality", loc: "Remote", type: "Full-time" },
];

function CareersPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container mx-auto px-6 py-24 lg:py-32 text-center max-w-3xl relative">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Careers</span>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">
              Build the <span className="text-gradient">future</span> with us.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Senior talent, remote-first, async-friendly. Join a team that ships and respects your time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Why Nexora</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Perks & culture</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="h-full rounded-2xl bg-gradient-card border border-border p-7 hover:shadow-glow hover:-translate-y-1 transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <p.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border py-20">
        <div className="container mx-auto px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Open roles</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Join the team</h2>
          </Reveal>
          <div className="mt-14 max-w-4xl mx-auto space-y-3">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 50}>
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl glass p-5 hover:shadow-glow hover:border-primary/50 transition-all">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{r.team}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{r.loc}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{r.type}</span>
                    </div>
                  </div>
                  <Button asChild variant="glass" size="sm">
                    <Link to="/contact">Apply <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="container mx-auto px-6 py-20">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our process</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Hiring, the human way</h2>
          <p className="mt-4 text-muted-foreground">No coding gauntlets. No surprise panels. We respect your time.</p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Intro call", d: "30 min with our head of talent — story, goals, fit." },
            { n: "02", t: "Craft chat", d: "60 min with a senior peer — your past work, deep dive." },
            { n: "03", t: "Take-home", d: "A small, paid scoped task you do on your time." },
            { n: "04", t: "Offer", d: "Within 5 working days. References checked alongside." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="h-full rounded-2xl glass p-6 hover:shadow-glow transition-shadow">
                <p className="font-display text-2xl font-bold text-gradient">{s.n}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <Reveal>
          <div className="rounded-3xl bg-gradient-primary p-12 text-center shadow-elevated">
            <h2 className="font-display text-4xl font-bold text-primary-foreground">Don't see your role?</h2>
            <p className="mt-3 text-primary-foreground/90">We're always meeting great people. Send us a note.</p>
            <Button asChild variant="glass" size="lg" className="mt-6">
              <Link to="/contact">Get in touch <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
