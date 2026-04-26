import { createFileRoute, Link } from "@tanstack/react-router";
import { Gamepad2, Users, DollarSign, Monitor, ArrowRight, CheckCircle2, Layers3, Joystick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { TechMarquee } from "@/components/site/TechMarquee";

export const Route = createFileRoute("/game-development")({
  head: () => ({
    meta: [
      { title: "Game Development — Unity & Unreal Studios | Nexora Labs" },
      { name: "description", content: "2D / 3D game development, multiplayer systems, monetization. Built in Unity and Unreal for mobile, PC and WebGL." },
      { property: "og:title", content: "Game Development — Nexora Labs" },
      { property: "og:description", content: "2D & 3D games, multiplayer, monetization — Unity, Unreal, WebGL." },
    ],
  }),
  component: GameDevPage,
});

const pillars = [
  { icon: Layers3, t: "2D & 3D Game Development", d: "From hyper-casual mobile to console-grade 3D — Unity, Unreal Engine 5, custom pipelines." },
  { icon: Users, t: "Multiplayer Systems", d: "Authoritative servers, rollback netcode, matchmaking and lobbies that scale to millions." },
  { icon: DollarSign, t: "Monetization Systems", d: "Battle-passes, IAP economies, ads SDKs, LiveOps dashboards and A/B-tested storefronts." },
  { icon: Monitor, t: "Cross-Platform", d: "Ship to iOS, Android, Steam, consoles and WebGL — one codebase, native performance." },
];

const benefits = [
  "Senior Unity / Unreal engineers (8+ yrs avg)",
  "Dedicated tech-art and shader specialists",
  "LiveOps & telemetry from day one",
  "Console certification support (Switch, PS, Xbox)",
];

function GameDevPage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl animate-blob"
        />
        <div className="container mx-auto px-6 py-24 lg:py-32 relative grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Game Development</span>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-[1.05]">
              Worlds that <span className="text-gradient">play, scale & monetize</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              We build games that ship — from prototype to live operations. Mobile, PC and WebGL with Unity and Unreal.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Build your game <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/case-studies">See our work</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-square rounded-3xl bg-gradient-card border border-border shadow-elevated grid place-items-center overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <Joystick className="h-40 w-40 text-primary-glow opacity-60 animate-float" />
              <div className="absolute bottom-6 left-6 glass rounded-xl px-4 py-2 text-xs">
                <span className="text-accent font-semibold">60 FPS</span> · <span className="text-muted-foreground">authoritative netcode</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TechMarquee items={["Unity", "Unreal Engine 5", "C#", "C++", "Blender", "Houdini", "Photon", "PlayFab", "GameLift", "Mirror", "WebGL", "Steam", "Epic Online", "PSN", "Xbox Live"]} label="Stack" />

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
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Why our games ship</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">A studio inside your studio</h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/contact">Pitch your game <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "20+", l: "Games shipped" },
                { v: "8M+", l: "Players reached" },
                { v: "4.7★", l: "Avg store rating" },
                { v: "60 FPS", l: "Locked perf" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl glass p-6 text-center hover:shadow-glow transition-shadow">
                  <p className="font-display text-3xl font-bold text-gradient">{s.v}</p>
                  <p className="mt-2 text-xs text-muted-foreground uppercase tracking-wide">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <Reveal>
          <div className="rounded-3xl bg-gradient-primary p-12 text-center shadow-elevated">
            <Gamepad2 className="h-12 w-12 text-primary-foreground mx-auto" />
            <h2 className="mt-4 font-display text-4xl font-bold text-primary-foreground">Got a concept? Let's prototype it.</h2>
            <Button asChild variant="glass" size="lg" className="mt-6">
              <Link to="/contact">Start a discovery call <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
