import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Build Your App with Nexora Labs" },
      { name: "description", content: "Tell us about your project. We respond within 24 hours with a tailored plan, timeline and team." },
      { property: "og:title", content: "Contact Nexora Labs" },
      { property: "og:description", content: "Start a project. We respond within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const services = ["Web App", "Mobile App", "SaaS Platform", "AI / ML", "Game Development", "DevOps / Cloud", "UI/UX Design", "Other"];
const budgets = ["< $10k", "$10k – $50k", "$50k – $150k", "$150k+"];
const timelines = ["ASAP", "1-3 months", "3-6 months", "Flexible"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [timeline, setTimeline] = useState(timelines[1]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container mx-auto px-6 py-20 lg:py-28 relative grid lg:grid-cols-2 gap-12">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</span>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-tight">
              Let's build your <span className="text-gradient">app or website</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Tell us about your project and we'll respond within 24 hours
              with a tailored plan, timeline and team.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Mail, l: "Email us", v: "hello@nexoralabs.com" },
                { icon: Phone, l: "Call us", v: "+1 (555) 010-2024" },
                { icon: MapPin, l: "HQ", v: "Berlin · Remote-first, global" },
              ].map((c) => (
                <div key={c.l} className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{c.l}</p>
                    <p className="font-medium">{c.v}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              <a
                href="https://wa.me/15550102024?text=Hi%20Nexora%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-4 py-3 text-sm font-semibold hover:scale-[1.02] transition-transform shadow-elevated"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
              <a
                href="https://calendly.com/nexoralabs/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl glass px-4 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <Calendar className="h-4 w-4" /> Book on Calendly
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl bg-gradient-card border border-border p-8 shadow-elevated">
              {sent ? (
                <div className="py-16 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-primary shadow-glow animate-scale-in">
                    <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-semibold">Thanks — we got it!</h2>
                  <p className="mt-2 text-muted-foreground">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required maxLength={100} placeholder="Your name" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required maxLength={255} placeholder="you@company.com" className="mt-1.5" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" maxLength={100} placeholder="Company name" className="mt-1.5" />
                  </div>

                  <div>
                    <Label>Project type</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setService(s)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                            service === s
                              ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                              : "border-border text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Budget</Label>
                    <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                            budget === b
                              ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                              : "border-border text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Timeline</Label>
                    <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelines.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setTimeline(t)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                            timeline === t
                              ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                              : "border-border text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="msg">Tell us about your project</Label>
                    <Textarea id="msg" required maxLength={1000} rows={5} placeholder="Goals, timeline, anything we should know…" className="mt-1.5" />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send message <Send className="h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We typically reply within 24 hours · GDPR compliant
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
