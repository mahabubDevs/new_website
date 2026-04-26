import { Link, useLocation } from "@tanstack/react-router";
import { Rocket, MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/15550102024?text=Hi%20Nexora%2C%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <Link
        to="/contact"
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-elevated hover:scale-105 transition-all"
      >
        <Rocket className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
        Start Your Project
      </Link>
    </div>
  );
}
