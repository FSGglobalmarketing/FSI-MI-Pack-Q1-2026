import { Fragment, ReactNode } from "react";

/**
 * Shared summary block — uniform typography across SEO, Website,
 * LinkedIn, Client engagement and any other report sections.
 *
 * Inputs:
 *   text   — paragraph break = blank line ("\n\n"); inline bold = **text**
 *   variant— "dark" (section-dark) or "cream" (section-cream)
 *
 * Tone class:
 *   base   text · leading-relaxed · space-y-3 · max-w-3xl
 *   color  dark   -> text-foreground/70 (bold lifts to text-foreground)
 *          cream  -> text-secondary-foreground/75 (bold lifts to text-secondary-foreground)
 */
export default function Summary({
  text,
  variant = "dark",
  className = "",
}: {
  text: string;
  variant?: "dark" | "cream";
  className?: string;
}) {
  const isDark = variant === "dark";
  const body   = isDark ? "text-foreground/70"           : "text-secondary-foreground/75";
  const strong = isDark ? "text-foreground font-medium"  : "text-secondary-foreground font-medium";
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className={`leading-relaxed space-y-3 max-w-3xl ${body} ${className}`}>
      {paragraphs.map((para, i) => (
        <p key={i}>{renderInline(para, strong)}</p>
      ))}
    </div>
  );
}

function renderInline(text: string, strongClass: string): ReactNode {
  // Split on **bold** markers — every odd chunk is bold.
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((chunk, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={strongClass}>{chunk}</strong>
    ) : (
      <Fragment key={i}>{chunk}</Fragment>
    )
  );
}
