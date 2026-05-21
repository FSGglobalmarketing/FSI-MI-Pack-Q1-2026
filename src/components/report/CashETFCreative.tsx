import { useState } from "react";
import HighlightCarousel from "./HighlightCarousel";

// Gav's finalised creatives (2026-05-21). Three formats per concept:
//   720x210 leaderboard banner (aspect 24/7)
//   1200x1200 square display ad (aspect 1/1)
//   300x600 skyscraper / half-page (aspect 1/2)
const FORMATS: Record<string, { images: string[]; aspect: string }> = {
  "Banners":     { images: ["highlights/cash/banner-cash-is-king.jpg",     "highlights/cash/banner-unlock.jpg"],     aspect: "720/210"  },
  "Display Ads": { images: ["highlights/cash/display-cash-is-king.jpg",    "highlights/cash/display-unlock.jpg"],    aspect: "1/1"      },
  "Skyscraper":  { images: ["highlights/cash/skyscraper-cash-is-king.jpg", "highlights/cash/skyscraper-unlock.jpg"], aspect: "1/2"      },
};

const TABS = ["Banners", "Display Ads", "Skyscraper"] as const;
type Tab = (typeof TABS)[number];

export default function CashETFCreative({ variant = "dark" }: { variant?: "dark" | "cream" }) {
  const [tab, setTab] = useState<Tab>("Banners");
  const { images, aspect } = FORMATS[tab];
  const isDark = variant === "dark";

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex gap-2 mb-4">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              t === tab
                ? "bg-accent text-accent-foreground"
                : isDark
                ? "bg-foreground/10 text-foreground/75 hover:bg-foreground/20"
                : "bg-secondary-foreground/10 text-secondary-foreground/75 hover:bg-secondary-foreground/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <HighlightCarousel
        key={tab}
        images={images}
        alt={`Cash ETF — ${tab}`}
        aspectRatio={aspect}
        fit="cover"
      />
    </div>
  );
}
