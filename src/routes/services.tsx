import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Brain,
  ShieldCheck,
  ShoppingCart,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  GitBranch,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

import web from "@/assets/service/web development (2).png";
import app from "@/assets/service/app development.png";
import ui from "@/assets/service/uiux.png";
import game from "@/assets/service/game.png";
import ai from "@/assets/service/ai and automation.png";
import devops from "@/assets/service/devops.png";
import cloud from "@/assets/service/cyber.png";
import security from "@/assets/service/secure.png";
import ecommerce from "@/assets/service/ecommerce.png";
import analytics from "@/assets/service/analysis.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MrbitX" },
      {
        name: "description",
        content:
          "Web, mobile, AI, cloud, DevOps, game development and more.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "...", points: ["React", "Next.js", "SSR"], img: web },
  { icon: Smartphone, title: "Mobile App Development", desc: "...", points: ["iOS", "Android", "Flutter"], img: app },
  { icon: Gamepad2, title: "Game Development", desc: "...", points: ["Unity", "Unreal", "Multiplayer"], img: game, link: "/game-development" },
  { icon: Brain, title: "AI & Automation", desc: "...", points: ["LLMs", "RAG", "Agents"], img: ai },
  { icon: GitBranch, title: "DevOps & Cloud", desc: "...", points: ["CI/CD", "K8s", "AWS"], img: devops, link: "/devops" },
  { icon: Palette, title: "UI / UX Design", desc: "...", points: ["Research", "Wireframes", "Design system"], img: ui },
  { icon: Cloud, title: "Cloud Engineering", desc: "...", points: ["AWS", "GCP", "Scaling"], img: cloud },
  { icon: ShieldCheck, title: "Security & QA", desc: "...", points: ["SOC2", "Testing", "Audits"], img: security },
  { icon: ShoppingCart, title: "E-commerce", desc: "...", points: ["Shopify", "Stripe", "Headless"], img: ecommerce },
  { icon: BarChart3, title: "Analytics", desc: "...", points: ["Funnels", "A/B", "PostHog"], img: analytics },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 text-center max-w-3xl">

          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Services
            </span>

            <h1 className="mt-3 font-display font-bold leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl">

              Everything you need to{" "}
              <span className="text-gradient">ship great software</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground">
              From idea to scale — one team covers everything.
            </p>
          </Reveal>

        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20 lg:space-y-24">

        {services.map((s, i) => (
          <Reveal key={s.title}>

            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center
              ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >

              {/* IMAGE */}
              <div>

                {s.img ? (
                  <div className="aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl border border-border shadow-elevated bg-card">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-contain p-2 sm:p-4"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl bg-gradient-card border border-border grid place-items-center shadow-elevated">
                    <s.icon className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 text-primary-glow opacity-70" />
                  </div>
                )}

              </div>

              {/* CONTENT */}
              <div>

                <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>

                <h2 className="mt-4 sm:mt-5 font-display font-bold
                  text-2xl sm:text-3xl lg:text-4xl">

                  {s.title}
                </h2>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>

                <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{p}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTONS */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">

                  <Button asChild variant="hero" className="w-full sm:w-auto">
                    <Link to="/contact">
                      Discuss project <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  {s.link && (
                    <Button asChild variant="glass" className="w-full sm:w-auto">
                      <Link to={s.link as any}>
                        Deep dive <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}

                </div>

              </div>

            </div>

          </Reveal>
        ))}

      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        <Reveal>
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-primary p-6 sm:p-10 lg:p-12 text-center shadow-elevated">

            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-primary-foreground">
              Not sure where to start?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-primary-foreground/90">
              Book a free 30-min strategy call.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

              <Button asChild variant="glass" size="lg">
                <Link to="/contact">
                  Book a call <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

            </div>

          </div>
        </Reveal>

      </section>

    </>
  );
}