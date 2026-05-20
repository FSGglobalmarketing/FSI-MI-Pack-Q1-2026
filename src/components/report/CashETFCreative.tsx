import { useState } from "react";
import HighlightCarousel from "./HighlightCarousel";

const BANNERS = [
  "highlights/cash/banner-1.png",
  "highlights/cash/banner-2.png",
  "highlights/cash/banner-3.png",
  "highlights/cash/banner-4.png",
];

const DISPLAYS = [
  "highlights/cash/display-1.png",
  "highlights/cash/display-2.png",
  "highlights/cash/display-3.png",
  "highlights/cash/display-4.png",
];

const TABS = ["Banners", "Display Ads"] as const;
type Tab = (typeof TABS)[number];

export default function CashETFCreative({ variant = "dark" }: { variant?: "dark" | "cream" }) {
  const [tab, setTab] = useState<Tab>("Banners");
  const images = tab === "Banners" ? BANNERS : DISPLAYS;
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
        alt={`Cash ETF ${tab}`}
        aspect="aspect-[4/5]"
        fit="contain"
      />
    </div>
  );
}
