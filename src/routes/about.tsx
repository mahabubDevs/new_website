import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Heart, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

import team from "@/assets/team.jpg";

import cto from "@/assets/about/1.jpg";
import cdo from "@/assets/about/2.jpg";
import coo from "@/assets/about/3.jpg";
import maneger from "@/assets/about/4.jpg";
import ceo from "@/assets/about/5.jpg";
import vp from "@/assets/about/Ishaan Gupta.jpg";
import vps from "@/assets/about/Rehan Khan.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MrbitX | Software Development Company" },
      {
        name: "description",
        content:
          "Meet MrbitX — a global team of 120+ engineers, designers and strategists building remarkable web and mobile products since 2016.",
      },
      { property: "og:title", content: "About MrbitX" },
      {
        property: "og:description",
        content:
          "A global product engineering studio building software that moves the world forward.",
      },
      { property: "og:image", content: team },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    t: "Outcomes over output",
    d: "We measure success by your metrics, not by hours billed.",
  },
  {
    icon: Heart,
    t: "Craft & care",
    d: "Every pixel, every commit. We sweat the details — always.",
  },
  {
    icon: Zap,
    t: "Velocity with integrity",
    d: "We move fast without breaking trust, security or quality.",
  },
  {
    icon: Globe,
    t: "Global by design",
    d: "120+ teammates across 40+ countries. Follow-the-sun delivery.",
  },
];

const milestones = [
  { y: "2016", t: "Founded in Berlin", d: "Three engineers, one mission: ship beautiful software." },
  { y: "2018", t: "First $1M ARR client", d: "Helped a fintech scale to 1M users in 14 months." },
  { y: "2020", t: "Remote-first", d: "Distributed team across 4 continents." },
  { y: "2022", t: "SOC 2 Type II", d: "Enterprise-grade compliance and security." },
  { y: "2024", t: "500+ projects", d: "Trusted by founders, scale-ups and Fortune 500s." },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our story
            </span>

            <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We build software{" "}
              <span className="text-gradient">teams trust</span>.
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground">
              MrbitX is a 120-person product engineering studio. Since 2016
              we've helped 500+ teams launch web and mobile apps that users
              love and businesses depend on.
            </p>

            <Button asChild variant="hero" size="lg" className="mt-6 sm:mt-8">
              <Link to="/contact">
                Work with us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl overflow-hidden border border-border shadow-elevated">
              <img
                src={team}
                alt="MrbitX team"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            What we believe
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-5xl font-bold">
            Our values
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 90}>
              <div className="h-full rounded-2xl bg-gradient-card border border-border p-5 sm:p-6 lg:p-7 hover:shadow-glow hover:-translate-y-1 transition-all">
                <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <v.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-4 sm:mt-5 font-display text-base sm:text-lg font-semibold">
                  {v.t}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  {v.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-surface border-y border-border py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our journey
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-5xl font-bold">
              Milestones
            </h2>
          </Reveal>

          <div className="mt-10 sm:mt-14 max-w-3xl mx-auto space-y-5 sm:space-y-6">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i * 80}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-2xl glass p-5 sm:p-6 hover:shadow-glow transition-shadow">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-gradient w-auto sm:w-20 shrink-0">
                    {m.y}
                  </p>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-semibold">
                      {m.t}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                      {m.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our people
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-5xl font-bold">
            Meet the leadership
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {[
            { n: "Anya Köhler", r: "CEO & Co-founder", img: ceo },
            { n: "Diego Fuentes", r: "CTO & Co-founder", img: cto },
            { n: "Mei Nakamura", r: "VP Design", img: cdo },
            { n: "Olu Adeyemi", r: "VP Engineering", img: vp },
            { n: "Ishaan Gupta", r: "Product Manager", img: maneger },
            { n: "Rehan Khan", r: "Operations Head", img: vps },
            { n: "Alex Morgan", r: "Marketing Director", img: coo },
          ].map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="group rounded-2xl bg-gradient-card border border-border p-5 sm:p-6 text-center hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
                <div className="relative mx-auto h-36 sm:h-40 lg:h-44 w-36 sm:w-40 lg:w-44 rounded-2xl overflow-hidden border border-border shadow-elevated">
                  <img
                    src={p.img}
                    alt={p.n}
                    className="h-full w-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
                </div>

                <h3 className="mt-4 sm:mt-5 font-display text-base sm:text-lg font-semibold">
                  {p.n}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {p.r}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-surface border-y border-border py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Culture
            </span>

            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-5xl font-bold">
              Remote-first. Innovation-driven.
            </h2>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground">
              We've been async-by-default since 2020. Deep work over status meetings.
              Outcomes over hours. Curiosity over ego.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "Async-first", d: "Deep work, no meeting marathons." },
                { t: "Open by default", d: "RFCs, postmortems, salary bands." },
                { t: "Ship weekly", d: "Real demos to real users." },
                { t: "Invest in craft", d: "$2k learning budget per person." },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-2xl glass p-5 hover:shadow-glow transition-shadow"
                >
                  <p className="font-display font-semibold text-sm sm:text-base">
                    {c.t}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    {c.d}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <Reveal>
          <div className="rounded-3xl bg-gradient-primary p-6 sm:p-10 lg:p-12 text-center shadow-elevated">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground">
              Let's build something great together
            </h2>

            <Button asChild variant="glass" size="lg" className="mt-6">
              <Link to="/contact">
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}