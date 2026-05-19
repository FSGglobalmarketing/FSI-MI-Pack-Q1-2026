import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Carousel for highlight sections (right column creative slot).
 * - Auto-advances every 5s (pauses on hover).
 * - Prev/next chevrons, dot indicators.
 * - Images sourced relative to BASE_URL (eg "highlights/taiwan/taiwan-1.jpg").
 */
export default function HighlightCarousel({
  images,
  alt,
  aspect = "aspect-[4/5]",
  fit = "cover",
}: {
  images: string[];
  alt: string;
  aspect?: string;
  fit?: "cover" | "contain";
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;
  const base = import.meta.env.BASE_URL;

  const next = useCallback(() => setI((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setI((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next, total]);

  if (total === 0) return null;

  return (
    <div
      className={`relative w-full ${aspect} rounded-md overflow-hidden bg-black/30 border border-white/10`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, idx) => (
        <img
          key={src}
          src={`${base}${src}`}
          alt={`${alt} — ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-${fit} transition-opacity duration-700`}
          style={{ opacity: idx === i ? 1 : 0 }}
        />
      ))}

      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/90 hover:bg-black/60 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/90 hover:bg-black/60 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
