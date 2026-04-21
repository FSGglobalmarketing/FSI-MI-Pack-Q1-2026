import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoCarouselProps {
  photos: string[];
  alt: string;
  autoRotateMs?: number;
}

export default function PhotoCarousel({ photos, alt, autoRotateMs = 5000 }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = photos.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(next, autoRotateMs);
    return () => clearInterval(id);
  }, [paused, next, autoRotateMs, total]);

  if (total === 0) return null;

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {photos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
