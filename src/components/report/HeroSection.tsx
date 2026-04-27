import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reportData } from "@/data/igneo-report";

const base = import.meta.env.BASE_URL;
const slide1BuyHoldSell = `${base}hero/hero-slider-1-buy-hold-sell.jpg`;
const slide2ReportingPodcast = `${base}hero/hero-slider-2-reporting-podcast.jpg`;
const slide3XcelEnergy = `${base}hero/hero-slider-3-CEO-xcel-energy.jpg`;

export interface HeroSlide {
  image: string;
  label: string;
  heading: string;
  description: string;
  sectionId: string;
}

const slides: HeroSlide[] = [
  {
    image: slide1BuyHoldSell,
    label: "Hero slide 1",
    heading: "Livewire Markets — Buy Hold Sell",
    description:
      "Dushko joined a special reporting season episode of Livewire Markets' Buy Hold Sell, unpacking the big themes — from the winners to the losers, and everything in between.",
    sectionId: "performance",
  },
  {
    image: slide2ReportingPodcast,
    label: "Hero slide 2",
    heading: "Reporting season",
    description:
      "David Wilson and Christian Guerra break down the sector-by-sector reactions and highlight where solid fundamentals and exaggerated price moves are creating opportunities for active investors.",
    sectionId: "performance",
  },
  {
    image: slide3XcelEnergy,
    label: "Hero slide 3",
    heading: "Xcel Energy CFO on AI and data centres with Rebecca Sherlock",
    description:
      "AI and data centres are reshaping electricity demand — but how can utilities deliver growth alongside affordability and decarbonisation?",
    sectionId: "linkedin",
  },
];

export default function HeroSection() {
  const d = reportData;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  const handleJump = () => {
    const el = document.getElementById(slides[current].sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="overview"
      className="relative w-full h-[80vh] min-h-[520px] max-h-[800px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {slide.image ? (
            <img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-background" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20" />
        </div>
      ))}

      {/* Title + date on bottom left */}
      <div className="absolute inset-0 z-10 flex items-end pb-16 sm:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="stage-badge inline-block">{d.quarter}</span>
              <span className="text-sm font-medium text-foreground/60">{d.dataPeriod}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              Global Marketing<br />Impact Report
            </h1>
          </div>

          {/* Card on bottom right */}
          <div className="relative max-w-sm rounded-xl border border-border bg-card/60 backdrop-blur-md p-5 sm:p-6 transition-all duration-500">
            <span className="inline-block text-[10px] font-medium tracking-wide text-accent mb-1.5">
              {slides[current].label}
            </span>
            <h2 className="text-base font-medium text-foreground leading-snug mb-1.5" style={{ marginBottom: 6 }}>
              {slides[current].heading}
            </h2>
            <p className="text-xs text-foreground/70 leading-relaxed mb-4">
              {slides[current].description}
            </p>

            <div className="flex items-center justify-between">
              {/* Slide indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-primary" : "w-3 bg-foreground/30 hover:bg-foreground/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleJump}
                className="px-4 py-1.5 rounded-full text-xs font-medium bg-accent text-accent-foreground hover:bg-primary/90 transition-colors"
              >
                Jump to section
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-card/40 backdrop-blur-sm border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card/60 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-card/40 backdrop-blur-sm border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card/60 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
