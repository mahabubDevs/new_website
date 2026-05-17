import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Coffee,
  Globe,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

type Role = string | null;

const perks = [
  { icon: Globe, t: "Remote-first", d: "Work from anywhere." },
  { icon: Coffee, t: "Async by default", d: "Deep work over meetings." },
  { icon: GraduationCap, t: "Learning budget", d: "$2k yearly growth." },
  { icon: Heart, t: "Wellness", d: "Health & support included." },
];

const roles = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    loc: "Remote",
    type: "Full-time",
  },
  {
    title: "Frontend Engineer (React)",
    team: "Engineering",
    loc: "Remote / Onsite (Dhaka)",
    type: "Full-time",
  },
  {
    title: "Backend Engineer (Node.js)",
    team: "Engineering",
    loc: "Remote",
    type: "Full-time",
  },
  {
    title: "AI Engineer",
    team: "AI",
    loc: "Remote",
    type: "Full-time",
  },
  {
    title: "Machine Learning Engineer",
    team: "AI",
    loc: "Remote / Hybrid",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    team: "Platform",
    loc: "Remote",
    type: "Full-time",
  },
  {
    title: "Cloud Engineer (AWS)",
    team: "Cloud",
    loc: "Remote / Onsite",
    type: "Full-time",
  },
  {
    title: "Mobile App Developer (React Native)",
    team: "Mobile",
    loc: "Remote",
    type: "Full-time",
  },
  {
    title: "iOS Engineer (Swift)",
    team: "Mobile",
    loc: "Remote / EU Onsite",
    type: "Full-time",
  },
  {
    title: "Android Engineer (Kotlin)",
    team: "Mobile",
    loc: "Remote",
    type: "Full-time",
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    loc: "Remote / Onsite (Dhaka)",
    type: "Full-time",
  },
  {
    title: "Product Designer (Senior)",
    team: "Design",
    loc: "Remote",
    type: "Full-time",
  },
  {
    title: "QA / Automation Engineer",
    team: "Quality",
    loc: "Remote",
    type: "Full-time",
  },
  {
    title: "Security Engineer",
    team: "Security",
    loc: "Remote / Hybrid",
    type: "Full-time",
  },
  {
    title: "Technical Project Manager",
    team: "Management",
    loc: "Remote",
    type: "Full-time",
  },
];

function CareersPage() {
  const [openRole, setOpenRole] = useState<Role>(null);
  const [submittedRole, setSubmittedRole] = useState<Role>(null);

  const handleSubmit = (role: string) => {
    setSubmittedRole(role);
    setOpenRole(null);

    // auto-hide success message after 3s
    setTimeout(() => {
      setSubmittedRole(null);
    }, 3000);
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 text-center">
          <Reveal>
            <h1 className="text-5xl font-bold">
              Build the <span className="text-gradient">future</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Join a remote-first engineering team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SUCCESS MESSAGE */}
      {submittedRole && (
        <div className="container mx-auto px-6 mt-6">
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
            ✅ Application submitted successfully for <b>{submittedRole}</b>
          </div>
        </div>
      )}

      {/* ROLES */}
      <section className="container mx-auto px-6 py-20 space-y-5">
        {roles.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg">{r.title}</h3>

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3 w-3" /> {r.team}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {r.loc}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {r.type}
                  </span>
                </div>
              </div>

              <Button
                variant="glass"
                size="sm"
                onClick={() =>
                  setOpenRole(openRole === r.title ? null : r.title)
                }
              >
                Apply <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* INLINE APPLY FORM */}
            {openRole === r.title && (
              <div className="mt-6 border-t border-border pt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-border rounded-lg bg-transparent"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-border rounded-lg bg-transparent"
                />

                <input
                  type="text"
                  placeholder="Portfolio / GitHub"
                  className="w-full p-3 border border-border rounded-lg bg-transparent"
                />

                <div>
                  <label className="text-sm text-muted-foreground">
                    Upload Resume (PDF only)
                  </label>

                  <input
                    type="file"
                    accept=".pdf"
                    className="w-full mt-2 p-3 border border-border rounded-lg bg-transparent"
                  />
                </div>

                <textarea
                  placeholder="Why do you want to join?"
                  className="w-full p-3 border border-border rounded-lg bg-transparent h-24"
                />

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setOpenRole(null)}
                    className="flex-1 border border-border rounded-lg p-3"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSubmit(r.title)}
                    className="flex-1 bg-primary text-white rounded-lg p-3"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* PERKS */}
      <section className="container mx-auto px-6 py-20">
        <Reveal className="text-center">
          <h2 className="text-4xl font-bold">Perks & Culture</h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => (
            <div
              key={p.t}
              className="rounded-2xl border border-border p-6 bg-card"
            >
              <p.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">{p.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}