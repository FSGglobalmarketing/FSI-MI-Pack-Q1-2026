import { Fragment, ReactNode } from "react";

/**
 * Inline **bold** renderer for list items / single-line strings.
 * Splits on **text** pairs and wraps the odd chunks in <strong>.
 */
export function renderInline(text: string, strongClass: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((chunk, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={strongClass}>{chunk}</strong>
    ) : (
      <Fragment key={i}>{chunk}</Fragment>
    )
  );
}
