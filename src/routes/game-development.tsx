import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Gamepad2,
  Users,
  DollarSign,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Layers3,
  Joystick,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { TechMarquee } from "@/components/site/TechMarquee";

export const Route = createFileRoute("/game-development")({
  head: () => ({
    meta: [
      { title: "Game Development — Unity & Unreal Studios | MrbitX" },
      {
        name: "description",
        content:
          "2D / 3D game development, multiplayer systems, monetization.",
      },
    ],
  }),
  component: GameDevPage,
});

const pillars = [
  {
    icon: Layers3,
    t: "2D & 3D Game Development",
    d: "Unity, Unreal Engine 5 and custom pipelines.",
  },
  {
    icon: Users,
    t: "Multiplayer Systems",
    d: "Scalable matchmaking, netcode and live servers.",
  },
  {
    icon: DollarSign,
    t: "Monetization Systems",
    d: "Ads, IAP, battle passes and LiveOps.",
  },
  {
    icon: Monitor,
    t: "Cross-Platform",
    d: "Mobile, PC, console and WebGL.",
  },
];

const benefits = [
  "Senior Unity / Unreal engineers",
  "Tech-art & shader specialists",
  "LiveOps from day one",
  "Console support",
];

function GameDevPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* TEXT */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Game Development
            </span>

            <h1 className="mt-3 font-display font-bold leading-[1.05]
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl">

              Worlds that{" "}
              <span className="text-gradient">play, scale & monetize</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl">
              We build production-ready games for mobile, PC and WebGL.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Build your game <ArrowRight />
                </Link>
              </Button>

              <Button asChild variant="glass" size="lg">
                <Link to="/case-studies">See work</Link>
              </Button>
            </div>
          </Reveal>

          {/* HERO ICON */}
          <Reveal delay={150}>
            <div className="relative aspect-square rounded-2xl sm:rounded-3xl bg-gradient-card border border-border shadow-elevated grid place-items-center overflow-hidden">

              <div className="absolute inset-0 grid-pattern opacity-30" />

              <Joystick className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 text-primary-glow opacity-70 animate-float" />

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 glass rounded-xl px-3 py-2 text-xs">
                <span className="text-accent font-semibold">60 FPS</span>{" "}
                <span className="text-muted-foreground">netcode</span>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* TECH MARQUEE */}
      <TechMarquee
        items={[
          "Unity",
          "Unreal Engine 5",
          "C#",
          "C++",
          "Photon",
          "PlayFab",
          "Steam",
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

      {/* BENEFITS */}
      <section className="bg-surface border-y border-border py-12 sm:py-16 lg:py-20">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* TEXT */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Why our games ship
            </span>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              A studio inside your studio
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
                Pitch your game <ArrowRight />
              </Link>
            </Button>
          </Reveal>

          {/* STATS */}
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">

              {[
                { v: "20+", l: "Games shipped" },
                { v: "8M+", l: "Players" },
                { v: "4.7★", l: "Rating" },
                { v: "60 FPS", l: "Performance" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl glass p-4 sm:p-6 text-center hover:shadow-glow transition-shadow"
                >
                  <p className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                    {s.v}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground uppercase tracking-wide">
                    {s.l}
                  </p>
                </div>
              ))}

            </div>
          </Reveal>

        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        <Reveal>
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-primary p-6 sm:p-10 lg:p-12 text-center shadow-elevated">

            <Gamepad2 className="h-10 w-10 sm:h-12 sm:w-12 text-primary-foreground mx-auto" />

            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground">
              Got a concept? Let's prototype it.
            </h2>

            <Button asChild variant="glass" size="lg" className="mt-6">
              <Link to="/contact">
                Start a call <ArrowRight />
              </Link>
            </Button>

          </div>
        </Reveal>

      </section>
    </>
  );
}