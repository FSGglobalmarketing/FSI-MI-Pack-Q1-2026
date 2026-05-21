import { useState } from "react";

/**
 * Tabbed LinkedIn-embed creative for the Always-on GLIS highlight.
 * Two posts side by side via tab pills. Iframes render at their
 * native dimensions so interactions stay on LinkedIn.
 */
const EMBEDS = [
  { label: "Xcel Energy CFO", src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7444584008362909696", height: 917 },
  { label: "Duke Energy CFO", src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7452547973454016512?collapsed=1", height: 602 },
] as const;

export default function GLISLinkedInCreative({ variant = "dark" }: { variant?: "dark" | "cream" }) {
  const [i, setI] = useState(0);
  const active = EMBEDS[i];
  const isDark = variant === "dark";

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-4 flex-wrap justify-center">
        {EMBEDS.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setI(idx)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              idx === i
                ? "bg-accent text-accent-foreground"
                : isDark
                ? "bg-foreground/10 text-foreground/75 hover:bg-foreground/20"
                : "bg-secondary-foreground/10 text-secondary-foreground/75 hover:bg-secondary-foreground/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mx-auto" style={{ width: 504, maxWidth: "100%" }}>
        <iframe
          key={active.src}
          src={active.src}
          title={`LinkedIn — ${active.label}`}
          width="504"
          height={active.height}
          frameBorder={0}
          allowFullScreen
          className={`block w-full rounded-md border ${
            isDark ? "bg-white/5 border-white/10" : "bg-secondary-foreground/5 border-secondary-foreground/10"
          }`}
          style={{ height: active.height }}
        />
      </div>
    </div>
  );
}
