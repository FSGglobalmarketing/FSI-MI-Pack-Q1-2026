import type { HighlightSectionData } from "@/data/igneo-report";

interface Props {
  highlight: HighlightSectionData;
}

export default function HighlightSection({ highlight: h }: Props) {
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
        {h.description && (
          <p className={`mt-4 text-sm leading-relaxed max-w-3xl ${dark ? "text-foreground/70" : "text-secondary-foreground/70"}`}>
            {h.description}
          </p>
        )}

        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {/* Goals */}
          <div className={`${dark ? "glass-card-dark" : "glass-card-cream"} flow-corner-tl`}>
            <h3 className={`text-sm font-medium mb-4 ${dark ? "text-foreground" : "text-secondary-foreground"}`}>
              Goals
            </h3>
            {h.goals.length === 0 ? (
              <p className={`text-sm ${dark ? "text-foreground/55" : "text-secondary-foreground/55"} italic`}>
                Goals not yet captured.
              </p>
            ) : (
              <ul className="space-y-2">
                {h.goals.map((g, i) => (
                  <li
                    key={g}
                    className={`text-sm flex items-start gap-2 ${dark ? "text-foreground/80" : "text-secondary-foreground/80"}`}
                  >
                    <span className={`shrink-0 ${dark ? "text-accent" : "text-secondary-foreground"} mt-0.5`}>{i + 1}.</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Marketing activities */}
          <div className={`${dark ? "glass-card-dark" : "glass-card-cream"}`}>
            <h3 className={`text-sm font-medium mb-4 ${dark ? "text-foreground" : "text-secondary-foreground"}`}>
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

          {/* Audience + data sources */}
          <div className={`${dark ? "glass-card-dark" : "glass-card-cream"} flow-corner-br space-y-5`}>
            <div>
              <h3 className={`text-sm font-medium mb-3 ${dark ? "text-foreground" : "text-secondary-foreground"}`}>
                Target audience
              </h3>
              <div className="flex flex-wrap gap-2">
                {h.targetAudience.map((t) => (
                  <span
                    key={t}
                    className={`text-xs px-3 py-1 rounded ${
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
                <h3 className={`text-sm font-medium mb-3 ${dark ? "text-foreground" : "text-secondary-foreground"}`}>
                  Data sources
                </h3>
                <ul className="space-y-1.5">
                  {h.dataSources.map((d) => (
                    <li
                      key={d}
                      className={`text-xs ${dark ? "text-foreground/70" : "text-secondary-foreground/70"}`}
                    >
                      • {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
