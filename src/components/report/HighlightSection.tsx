import type { HighlightSectionData } from "@/data/igneo-report";

interface Props {
  highlight: HighlightSectionData;
  /** Optional creative — image, video, mockup. Renders in the right column. */
  creative?: React.ReactNode;
}

export default function HighlightSection({ highlight: h, creative }: Props) {
  const dark = h.variant === "dark";
  return (
    <section
      id={h.id}
      className={`${dark ? "section-dark" : "section-cream"} py-20 sm:py-24 ${dark ? "" : "flow-section-cream"} relative`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-[1]">
        {/* Stage label sits ABOVE the heading on the left */}
        <div className="mb-3">
          <span className="stage-badge">{h.stage}</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-medium leading-tight ${dark ? "text-foreground" : "text-secondary-foreground"}`}>
          {h.title}
        </h2>
        {h.subtitle && (
          <p className={`mt-3 text-lg ${dark ? "text-foreground/75" : "text-secondary-foreground/75"} max-w-3xl`}>
            {h.subtitle}
          </p>
        )}

        {/* 50:50 layout — content left, creative right */}
        <div className="grid lg:grid-cols-2 gap-10 mt-10 items-start">
          {/* Left column — content */}
          <div className="space-y-6">
            {h.description && (
              <p className={`text-sm leading-relaxed ${dark ? "text-foreground/75" : "text-secondary-foreground/75"}`}>
                {h.description}
              </p>
            )}

            {/* Goals */}
            <div>
              <h3 className={`text-sm font-medium mb-3 ${dark ? "text-foreground" : "text-secondary-foreground"}`}>
                Goals
              </h3>
              {h.goals.length === 0 ? (
                <p className={`text-sm ${dark ? "text-foreground/55" : "text-secondary-foreground/55"} italic`}>
                  Goals not yet captured.
                </p>
              ) : (
                <ol className="space-y-2">
                  {h.goals.map((g, i) => (
                    <li
                      key={g}
                      className={`text-sm flex items-start gap-3 ${dark ? "text-foreground/80" : "text-secondary-foreground/80"}`}
                    >
                      <span className={`shrink-0 ${dark ? "text-accent" : "text-secondary-foreground"} font-medium tabular-nums`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {/* Marketing activities */}
            <div>
              <h3 className={`text-sm font-medium mb-3 ${dark ? "text-foreground" : "text-secondary-foreground"}`}>
                Marketing activities
              </h3>
              {h.marketingActivities.length === 0 ? (
                <p className={`text-sm ${dark ? "text-foreground/55" : "text-secondary-foreground/55"} italic`}>
                  Activities not yet captured.
                </p>
              ) : (
                <ul className="space-y-2">
                  {h.marketingActivities.map((a) => (
                    <li
                      key={a}
                      className={`text-sm flex items-start gap-2 ${dark ? "text-foreground/80" : "text-secondary-foreground/80"}`}
                    >
                      <span className={`shrink-0 ${dark ? "text-accent" : "text-secondary-foreground"} mt-0.5`}>+</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Audience + data sources side-by-side */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div>
                <h3 className={`text-xs font-medium mb-2 tracking-wide ${dark ? "text-foreground/60" : "text-secondary-foreground/60"}`}>
                  Target audience
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {h.targetAudience.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-1 rounded ${
                        dark
                          ? "bg-white/8 text-foreground/85 border border-white/10"
                          : "bg-secondary-foreground/8 text-secondary-foreground/80 border border-secondary-foreground/10"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {h.dataSources && h.dataSources.length > 0 && (
                <div>
                  <h3 className={`text-xs font-medium mb-2 tracking-wide ${dark ? "text-foreground/60" : "text-secondary-foreground/60"}`}>
                    Data sources
                  </h3>
                  <ul className="space-y-1">
                    {h.dataSources.map((d) => (
                      <li
                        key={d}
                        className={`text-xs ${dark ? "text-foreground/70" : "text-secondary-foreground/70"}`}
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right column — reserved for creative (image / video / mockup) */}
          <div className="lg:sticky lg:top-24">
            {creative ?? (
              <div
                className={`relative w-full aspect-[4/5] rounded-md overflow-hidden flex items-center justify-center ${
                  dark
                    ? "bg-white/5 border border-white/10"
                    : "bg-secondary-foreground/5 border border-secondary-foreground/10"
                }`}
              >
                <div className="text-center px-6">
                  <span
                    className={`block text-xs tracking-wide mb-2 ${
                      dark ? "text-foreground/40" : "text-secondary-foreground/40"
                    }`}
                  >
                    Creative reserved
                  </span>
                  <span
                    className={`block text-sm ${
                      dark ? "text-foreground/60" : "text-secondary-foreground/60"
                    }`}
                  >
                    Image / video / mockup to be added
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
