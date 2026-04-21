# FSI MI Pack — Style & UI Guide

Visual system for the FSI MI Pack, aligned to the **First Sentier Investors Brand Toolkit v4 (July 2020)**.

> **Authority** — everything in **Part A** is verbatim from the official brand toolkit PDF and the master logo SVGs held in `Brand files/`. **Part B** is digital adaptation for the MI Pack web app, derived from brand principles but not prescribed in the print-focused toolkit. Where Part B makes a choice, the rationale is stated.
>
> Source files: `Brand files/fsi-brandguidelines.pdf`, `Brand files/SVG/First Sentier Logo Green-Blue RGB-01.svg`, `Brand files/SVG/First Sentier Logo Green-White RGB-01.svg`.

---

# Part A — Brand canon

## 1. Logo

Two-colour logo: **navy wordmark + green symbol** on light backgrounds, or **white wordmark + green symbol** on dark / imagery. The preferred treatment is white reversed out of a coloured background with the green symbol.

The symbol (diagonal stripes + dot) and wordmark are **always locked up together**. Never use the symbol or wordmark on its own. Never recolour the symbol. Never add shadows or effects. Never place on busy backgrounds.

Committed copies in the repo: `public/brand/fsi-logo-navy-green.svg`, `public/brand/fsi-logo-white-green.svg`.

- **Minimum size:** 80 px on screen / 15 mm in print.
- **Clear space:** at least the height of the "F" in "First" on all sides.

---

## 2. Colours

Four primary colours lead all communication. Four secondary colours are reserved for accents and data visualisation.

### Primary palette

| Swatch name | HEX | RGB | Pantone coated | Pantone uncoated | CMYK coated |
| --- | --- | --- | --- | --- | --- |
| **Dark Blue** | `#022856` | `2, 40, 86` | PMS 2767 C | PMS 282 U | C98 M70 Y0 K60 |
| **Green** | `#60BEB3` | `96, 190, 179` | PMS 3258 C | PMS 3258 U | C68 M0 Y43 K0 |
| **White** | `#FFFFFF` | `255, 255, 255` | — | — | C0 M0 Y0 K0 |
| **Tan** | `#CCB296` | `204, 178, 150` | PMS 2310 C | PMS 2310 U | C17 M26 Y42 K0 |

### Secondary palette

| Swatch name | HEX | RGB | Pantone coated | Pantone uncoated | CMYK coated |
| --- | --- | --- | --- | --- | --- |
| **Orange** | `#EF785B` | `239, 120, 91` | PMS 2023 C | PMS 2023 U | C0 M56 Y57 K0 |
| **Teal** | `#00727D` | `0, 114, 125` | PMS 2223 C | PMS 2231 U | C89 M11 Y29 K38 |
| **Mustard** | `#D5B700` | `213, 183, 0` | PMS 606 C | PMS 606 U | C18 M22 Y100 K4 |
| **Light Blue** | `#3FBAD5` | `63, 186, 213` | PMS 2985 C | PMS 305 U | C60 M0 Y8 K0 |

### Usage rules (from the toolkit)

- **Dark Blue, Green, White, Tan take the lead.** White space is essential — communications should feel clean and optimistic.
- **Secondary palette is an accent**, used primarily in **charts, graphs and supporting data** — not as surface colours.
- Never use colours outside this palette.
- For tints: use the colours at 100% first. If additional colours are needed, use them at **50% tint** — never introduce new hues.

### Data visualisation colour order

When secondary colours are needed in charts, apply them consistently in this sequence:

**Dark Blue → Green → Orange → Tan → Mustard → Light Blue**

(100% first for all seven brand colours; if more needed, repeat at 50% tint.)

---

## 3. Typography

### Primary typeface — Suisse Int'l

Two families in use:
- **Suisse Int'l Regular** — headings, subheadings, body copy (print + online)
- **Suisse Int'l Condensed** — tables, pull quotes

Weights: **Light**, **Regular**, **Medium**. Source: swisstypefaces.com. Committed in `Repo/public/fonts/` (currently: Regular family at Light, Regular, Medium). Condensed and Mono OTF files live in `Brand files/Suisse Int'l (official)/` and can be added to `public/fonts/` when first used.

### Fallbacks

- **System / Microsoft / on-screen where Suisse Int'l isn't available:** **Arial** Regular and Bold.
- **Chinese (Simplified and Traditional):** Noto Sans.
- **Japanese:** Noto Sans CJK JP.

### Font stack (CSS)

```css
font-family: "Suisse Int'l", "Suisse International", Arial, "Noto Sans", "Noto Sans CJK JP", sans-serif;
```

### Typographic hierarchy (from brand toolkit, print spec)

| # | Use | Family | Weight | Size / Leading | Letter-spacing |
| --- | --- | --- | --- | --- | --- |
| 1 | Heading | Suisse Int'l Regular | Regular | 24pt / 26pt | -5pt (−0.04em) |
| 2 | Body copy | Suisse Int'l Regular | Light | 9pt / 11pt | -5pt |
| 3 | Tables | Suisse Int'l Condensed | Regular | 9pt / 15pt | -5pt |
| 4 | Signposting | Suisse Int'l Regular | Regular | 7pt / 7pt | -5pt |
| 5 | T1 bullet point | Suisse Int'l Regular | Light | Copy indent 5mm | — |
| 6 | T2 bullet point | Suisse Int'l Regular | Light | Indent 10mm, copy indent 15mm | — |

Grid: A4 portrait 297 × 210mm, **6 column grid**, **4mm gutter**, **5 row grid**.

---

## 4. Iconography

Icons come in three colour treatments — use the right one for the background:

| Background | Icon colour |
| --- | --- |
| White | Dark Blue icon |
| Dark Blue (or imagery) | White icon, reversed out |
| Dark Blue | Green icon (alternative accent) |

Icons are visual shorthand. They enhance, they don't decorate. Keep usage consistent across a piece.

---

## 5. Photography

**Guiding principles:** authenticity, progression, optimism. Curiosity; creating our own way forward; paving new ways; seeing things differently.

- **Angles:** unusual angles of people, objects, infrastructure, environment.
- **Composition:** subject looking at or following a path.
- **Environment:** natural textures; avoid sterile settings.
- **Tone:** warm throughout; avoid shallow depth of field; sun flares can soften.
- **Staff portraits:** studio, white/light-grey cyclorama, half or ¾ body crop, soft directional lighting, untreated full-colour, no deep-etching, approachable and candid.

---

## 6. Patterns

Four pattern styles — **circle, triangle, square, line** — available in three usage modes:

1. **Background pattern** — single-artwork files, crops applied across formats.
2. **Interacting pattern** — pattern threading through imagery and typography.
3. **Holding device** — pattern shape becomes a container for headings / body copy (12 mm margin inside the device for A4).

Standard colour combinations:
- Green pattern on Dark Blue background
- Dark Blue pattern on White background
- White pattern on photography background

The app's existing `topo-pattern-*`, `hex-pattern-*`, and `pumice-pattern-*` utility classes in `src/index.css` are FSSA legacy and need to be either reskinned (swap to FSI circle/triangle/square/line) or removed.

---

## 7. Data visualisation

### Colour order

Dark Blue → Green → Orange → Tan → Mustard → Light Blue (repeat at 50% tint if needed).

### Pie charts

- Doughnut style only.
- Centre hole = 33% of outside circumference, white fill.
- Max 12 segments. Smallest segment ≥ 5% — aggregate into "Other" below that.
- Wide-column pie: pointer labels. Narrow-column pie: colour key.
- Pointers 0.25pt, 50% black.
- Key labels: 7pt Suisse Int'l Condensed.

### Line charts

- Minimum line thickness 0.5pt for reproduction clarity.
- Solid lines first (100% tint of brand colours). Dotted lines for extension of information.

### Bar charts

- Cluster width 90%, column width 60% (Illustrator settings).

### Tables

- **Green** is the linking element — used for horizontal and vertical rules.
- Decimal numbers align right on the decimal point.
- Positive and negative numbers align on the last character.
- All columns except the first title row are right-aligned. First / title row is left-aligned.

---

# Part B — Digital adaptation (MI Pack web)

The brand toolkit is print-first. This section translates brand canon into the choices the MI Pack web app must make for interactive UI that the toolkit doesn't cover.

## 8. Screen colour roles

Mapping the four primary brand colours onto the two surface modes used across the MI Pack:

| Surface | Background | Headings | Body | Accent / CTA | Dividers | Pills / tags |
| --- | --- | --- | --- | --- | --- | --- |
| **Dark** | Dark Blue `#022856` | White | White @ 85% | Green `#60BEB3` | White @ 12% | Green on Dark Blue, or Tan @ 20% |
| **Light** | White | Dark Blue | Dark Blue | Dark Blue (large) or Teal `#00727D` (small text — see note) | Tan @ 35% or `#E6E6E6` | Dark Blue text on Green @ 20%, or white on Dark Blue |
| **Tan spot** | Tan `#CCB296` | Dark Blue | Dark Blue | Dark Blue | Dark Blue @ 15% | Dark Blue on White |

**Accessibility note — small text on white:**
- Green `#60BEB3` on White has a contrast ratio of ~2.4:1 → **fails WCAG AA** for body text.
- Use the secondary **Teal `#00727D`** for any coloured text on white at < 18 px. Green can still be used for icons, pattern and decorative emphasis.
- Green on Dark Blue is ~6.2:1 → passes AA for normal text, AAA for large.

**Contrast reference**

| Foreground | Background | Ratio | Verdict |
| --- | --- | --- | --- |
| White | Dark Blue | 14.7:1 | AAA |
| Green | Dark Blue | 6.2:1 | AA |
| Green | White | 2.4:1 | **fail** for text — decorative only |
| Teal `#00727D` | White | 5.1:1 | AA |
| Dark Blue | Tan | 7.9:1 | AAA |

## 9. Buttons

The toolkit doesn't define digital buttons. These are adaptations that preserve brand restraint — minimal ornament, high legibility, one primary action per section.

### Primary

```
bg:      Dark Blue #022856
text:    White, Suisse Int'l Medium 15px
padding: 14px 24px
radius:  4px              (aligns with existing flow-corner utilities)
icon:    right arrow "→", 1em, 8px margin-left (optional)
hover:   bg lifts to Dark Blue @ 92% + underline icon (2px offset)
focus:   3px ring Green @ 40% alpha
```

### Secondary (outline)

```
bg:      transparent
text:    Dark Blue, Medium
border:  1px Dark Blue
hover:   bg Dark Blue, text White
focus:   same Green ring
```

### Ghost (on Dark Blue surfaces)

```
bg:      White @ 10%
text:    White
border:  1px White @ 25%
hover:   bg White @ 20%, border White @ 50%
```

### Tertiary (inline text action)

```
text:    Dark Blue (or Teal #00727D on body copy for WCAG)
weight:  Medium
icon:    right arrow
hover:   underline, 2px thickness, 3px offset
```

**Rules**
- One primary per section. Two competing primaries = one should become secondary.
- Min touch target 44 px.
- Never gradient-fill. Never pill-shaped.

## 10. Cards, pills, badges

Stay with the existing `index.css` primitives — re-skin, don't rebuild.

| Class | Surface | Background | Border | Radius |
| --- | --- | --- | --- | --- |
| `.glass-card-cream` | Light | `#FFFFFF` | 1px Tan @ 35% | 6px |
| `.glass-card-dark` | Dark | Dark Blue @ 88% (slightly lifted) | 1px White @ 8% | 6px |
| `.hero-glass-card` | Dark | Dark Blue (card tone) | 1px White @ 15% | 6px |
| `.stage-badge` | Both | Stone-on-dark or Dark-Blue-on-light | — | 4px |
| `.glass-pill-dark` | on Dark | Green @ 15% | 1px Green @ 30% | 4px |
| `.glass-pill-cream` | on Light | Dark Blue | — (solid) | 4px |

Pill text on Dark Blue: White. Pill text on White: White reversed on Dark Blue background.

## 11. Links

| State | On light | On dark |
| --- | --- | --- |
| Default | Dark Blue, weight 500, no underline | White, weight 500, no underline |
| Hover | Teal `#00727D`, underline 2px, offset 3px | Green `#60BEB3`, underline 2px |
| Visited | same as default | same as default |
| In body copy | underlined always, Teal hover | underlined always, Green hover |

## 12. Spacing, radius, motion

| Token | Value | Use |
| --- | --- | --- |
| Base unit | 4 px | All spacing multiples of 4. |
| Section padding (y) | 96 px desktop / 64 px mobile | |
| Component gap | 24 px | Between cards in a row. |
| Content inset | 24 px / 48 px / max 1400px container | mobile / tablet / desktop |
| Radius — control | 4 px | Buttons, pills, tags, badges. |
| Radius — surface | 6 px | Cards, modals. |
| Radius — hero block | 8–12 px | Rare — device frames, hero-scale blocks. |
| Motion — state change | 200 ms ease-out | Hover, focus. |
| Motion — section reveal | 300 ms ease-out | Scroll-in animations. |

No bouncy easing. No parallax. The brand reads composed and quiet.

## 13. CSS variable map — for `src/index.css`

Drop-in replacement for the FSSA-era tokens currently at `src/index.css:31-130`:

```css
:root {
  /* Primary surface - FSI Dark Blue #022856 */
  --background:          214 96% 17%;
  --foreground:          0 0% 100%;

  /* Card surfaces on dark - slightly lifted dark blue */
  --card:                214 84% 22%;
  --card-foreground:     0 0% 100%;

  --popover:             214 84% 22%;
  --popover-foreground:  0 0% 100%;

  /* Primary CTA / accent - Dark Blue for solid CTAs on light */
  --primary:             214 96% 17%;
  --primary-foreground:  0 0% 100%;

  /* Secondary surface - White */
  --secondary:           0 0% 100%;
  --secondary-foreground: 214 96% 17%;

  /* Muted - tinted dark blue (dark) / Tan @ 35% (light) */
  --muted:               214 70% 28%;
  --muted-foreground:    214 20% 78%;

  /* Accent - FSI Green #60BEB3 */
  --accent:              172 41% 56%;
  --accent-foreground:   214 96% 17%;

  --destructive:         9 82% 65%;                  /* Orange #EF785B as destructive/alert */
  --destructive-foreground: 0 0% 100%;

  --border:              214 40% 30%;
  --input:               214 40% 30%;
  --ring:                172 41% 56%;                /* Green focus rings */

  --radius: 0.25rem;                                 /* 4px — brand-aligned */

  --success:             172 41% 56%;                /* Green */
  --success-foreground:  214 96% 17%;
  --warning:             51 100% 42%;                /* Mustard #D5B700 */
  --warning-foreground:  214 96% 17%;

  /* White sections */
  --cream:               0 0% 100%;
  --cream-foreground:    214 96% 17%;

  /* Brand swatch tokens (keep semantic names where already in use) */
  --brand-teal:          172 41% 56%;                /* Green (primary accent) */
  --moss:                214 96% 17%;                /* Dark Blue */
  --mint:                172 41% 56%;                /* Green */
  --pollen:              31 73% 66%;                 /* Tan #CCB296 */
  --grass:               172 41% 56%;                /* Green (alias) */
  --ash:                 214 13% 43%;                /* secondary text on white */
  --mandarin:            9 82% 65%;                  /* Orange #EF785B */
  --airforce:            189 57% 53%;                /* Light Blue #3FBAD5 */

  /* Secondary brand swatches (new) */
  --fsi-teal:            186 100% 25%;               /* Teal #00727D — for small text on white */
  --fsi-mustard:         51 100% 42%;                /* Mustard #D5B700 */
  --fsi-tan:             31 33% 69%;                 /* Tan #CCB296 */

  /* Chart palette — brand data-viz order */
  --chart-1: 214 96% 17%;   /* Dark Blue */
  --chart-2: 172 41% 56%;   /* Green */
  --chart-3: 9 82% 65%;     /* Orange */
  --chart-4: 31 33% 69%;    /* Tan */
  --chart-5: 51 100% 42%;   /* Mustard */
  --chart-6: 189 57% 53%;   /* Light Blue */
  --chart-7: 186 100% 25%;  /* Teal */

  /* Sidebar */
  --sidebar-background:         214 96% 14%;
  --sidebar-foreground:         0 0% 100%;
  --sidebar-primary:            172 41% 56%;
  --sidebar-primary-foreground: 214 96% 17%;
  --sidebar-accent:             214 70% 28%;
  --sidebar-accent-foreground:  0 0% 100%;
  --sidebar-border:             214 40% 30%;
  --sidebar-ring:               172 41% 56%;

  /* Pill light - tan-tinted, works on dark */
  --pill-light:                 31 33% 85%;
}
```

Same block repeats inside `.dark` for consistency. Existing semantic classes (`.section-cream`, `.section-dark`, `.glass-card-*`, `.stage-badge`, `.kpi-pill-*`) do **not** need structural changes — only the token values above.

---

## 14. Pre-merge checklist

- [x] Logo SVGs (navy + white variants) committed to `public/brand/`.
- [x] Suisse Int'l Regular family in `public/fonts/` (Light / Regular / Medium).
- [ ] Suisse Int'l Condensed family copied to `public/fonts/` when tables need it.
- [ ] Tokens in `src/index.css` swapped per §13.
- [ ] FSSA pattern classes (topo / hex / pumice) replaced with FSI circle / triangle / square / line or removed.
- [ ] Chart palettes (Recharts / custom) aligned to §3 data-viz order.
- [ ] `PasswordGate`, `Header` and any FSSA branded components re-skinned to FSI Navy + Green + White.
- [ ] Optional: `/styleguide` route rendering this document as live components for design QA.

---

_Version: 1.0 — 2026-04-21. Authority: FSI Brand Toolkit v4 (July 2020) + master logo SVGs. Update this doc if the brand team issues a newer toolkit._
