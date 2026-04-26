type Props = { items: string[]; label?: string };

export function TechMarquee({ items, label = "Powered by" }: Props) {
  return (
    <div className="border-y border-border bg-surface/50 backdrop-blur">
      <div className="container mx-auto px-6 py-6 flex items-center gap-8 overflow-hidden">
        <p className="text-xs uppercase tracking-widest text-muted-foreground shrink-0">{label}</p>
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="font-display text-lg text-muted-foreground/70 hover:text-foreground transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
