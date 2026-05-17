import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const services = [
  "Web App",
  "Mobile App",
  "SaaS Platform",
  "AI / ML",
  "Game Development",
  "DevOps / Cloud",
  "UI/UX Design",
  "Other",
];

const budgets = ["< $10k", "$10k – $50k", "$50k – $150k", "$150k+"];
const timelines = ["ASAP", "1-3 months", "3-6 months", "Flexible"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [timeline, setTimeline] = useState(timelines[1]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      company: (document.getElementById("company") as HTMLInputElement).value,
      message: (document.getElementById("msg") as HTMLTextAreaElement).value,
      service,
      budget,
      timeline,
    };

    try {
      const res = await fetch(
        // "https://mrbitx-contact.onrender.com/api/contact",
        "http://50.6.200.33:5009/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        setSent(true);
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="container mx-auto px-6 py-20 lg:py-28 relative grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Contact
          </span>

          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-tight">
            Let's build your{" "}
            <span className="text-gradient">app or website</span>.
          </h1>

          <p className="mt-5 text-lg text-muted-foreground max-w-lg">
            Tell us about your project and we'll respond within 24 hours.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, l: "Email", v: "info@mrbitx.com" },
              { icon: Phone, l: "Phone", v: "+880 1346-810082" },
              { icon: MapPin, l: "HQ", v: "Berlin · Remote-first" },
            ].map((c) => (
              <div key={c.l} className="flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">
                    {c.l}
                  </p>
                  <p className="font-medium">{c.v}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            <a
              href="https://wa.me/+8801346810082"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-500 text-white px-4 py-3"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>

            <a
              href="https://calendly.com/MrbitXlabs/intro"
              className="flex items-center justify-center gap-2 rounded-xl border px-4 py-3"
            >
              <Calendar className="h-4 w-4" /> Book Call
            </a>
          </div>
        </Reveal>

        {/* RIGHT SIDE FORM */}
        <Reveal delay={150}>
          <div className="rounded-3xl border p-8 shadow-elevated bg-white/5">
            {sent ? (
              <div className="text-center py-16">
                <CheckCircle2 className="mx-auto h-14 w-14 text-green-500" />
                <h2 className="mt-4 text-2xl font-semibold">
                  Message Sent!
                </h2>
                <p className="text-muted-foreground mt-2">
                  We will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input id="name" required placeholder="Your name" />
                  </div>

                  <div>
                    <Label>Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label>Company</Label>
                  <Input id="company" placeholder="Company" />
                </div>

                <div>
                  <Label>Project Type</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setService(s)}
                        className={`px-3 py-1 rounded-full border text-xs ${
                          service === s ? "bg-black text-white" : ""
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Budget</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`px-3 py-2 border rounded ${
                          budget === b ? "bg-black text-white" : ""
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Timeline</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {timelines.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`px-3 py-2 border rounded ${
                          timeline === t ? "bg-black text-white" : ""
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Message</Label>
                  <Textarea id="msg" required rows={5} />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}{" "}
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}