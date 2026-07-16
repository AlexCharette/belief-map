---
name: Belief Map
description: A local-first canvas for mapping your worldview as a constellation of belief-donuts.
colors:
  accent-iris: "#C4A7E7"
  accent-strong: "#CBB0EE"
  accent-contrast: "#232136"
  bg-base: "#232136"
  surface: "#2A273F"
  surface-raised: "#393552"
  border: "#44415A"
  ink: "#E0DEF4"
  ink-muted: "#908CAA"
  link-line: "#6E6A86"
  danger: "#EB6F92"
  source-empirical: "#9CCFD8"
  source-observation: "#3E8FB0"
  source-scientific: "#95B1AC"
  source-logical: "#C4A7E7"
  source-authority: "#EA9A97"
  source-tradition: "#F6C177"
  source-faith: "#EB6F92"
  source-intuition: "#EDA884"
typography:
  title:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  node-label:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.25rem"
components:
  button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.9rem"
  button-primary:
    backgroundColor: "{colors.accent-iris}"
    textColor: "{colors.accent-contrast}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.9rem"
  button-danger:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.danger}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.9rem"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.55rem 0.7rem"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.6rem"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "1rem 1.1rem"
---

# Design System: Belief Map

## 1. Overview

**Creative North Star: "The Constellation"**

Belief Map is a single, full-bleed field you pan and zoom across, scattered with small
glowing charts — each belief a donut whose arcs show what its supporting premises are
made of. The interface is not a document and not a dashboard; it is a literal **night
sky** of your own reasoning that you drift through. The theme is **Rose Pine (Moon)**: a
deep, cozy muted-violet base *is* the field, and the white belief-donuts glow on top of it
like moons, ringed in Rose Pine's soft accent hues. Everything that isn't the
constellation — the top bar, the detail panel, the forms — is quiet dark chrome that
floats above the field and gets out of the way. A few faint decorative rings behind the
field (echoing the donut motif at ~7% opacity) are the only ornament.

The system is **compact and calm**. Type is small and functional (nothing larger than
~1.15rem) and surfaces are dark, lifting by lightness rather than heavy shadow. The base
`#232136` reads as a night sky through a subtle violet moon-glow (lighter at the top,
darker at the edges); the white donut discs are the brightest thing on screen. Belief data
is encoded on **two axes**: **source category** (where the warrant comes from) paints the
arc *hue*, and **confidence** (how strongly held) sets the arc *opacity*. Both axes are a
**per-map editable taxonomy** — the categories and confidence levels travel inside the map
JSON and can be swapped wholesale via a preset (*Source of justification*, *Epistemic
ladder*, *DIKW tiers*) or edited one at a time; the default preset uses Rose Pine's accent
set. Density is low — one primary object of attention at a time. The feel is *cozy,
unhurried, low-stakes to tinker with*, in the spirit of a canvas-native tool like tldraw —
a personal night-sky you sketch into, not an instrument that judges you.

This system explicitly rejects **cold enterprise SaaS** (no dashboard grids, no
hero-metric tiles, no corporate-blue chrome), anything **preachy or persuasive** (all
sources are visual equals; nothing ranks evidence above faith), the **cluttered
power-tool** (no dense toolbars — actions appear on the object you selected), and the
**childish or gimmicky** (playfulness lives in soft motion and glowing nodes, never in
mascots or novelty).

**Key Characteristics:**
- Full-bleed dark pannable field is the primary surface; all chrome floats above it.
- Rose Pine Moon palette; a single iris accent in the chrome, its accent set for the data.
- White donut discs glow against the dark base — the constellation reads as luminous.
- Compact, functional type on a system-UI stack — legibility over display drama.
- Dark surfaces lift by *lightness* (base → surface → overlay), not by heavy shadow.
- Two data axes: source category = arc hue, confidence = arc opacity. Always icon + label.
- Per-map editable taxonomy (categories + confidence levels), preset-seeded, autosaved.
- Semantic z-index scale: field 0 · node badge 2 · detail panel 40 · app bar 50 · dropdown
  60 · modal backdrop/modal 100 · toast 200.

## 2. Colors

**Rose Pine (Moon).** A cozy dark palette: a muted-violet base and surfaces, soft
lilac-white text, and a set of desaturated accents (iris, foam, pine, rose, gold, love,
leaf) that glow rather than shout. The chrome recedes into the dark so the donuts carry
the color.

### Primary
- **Iris** (`#C4A7E7`): the single chrome accent — brand mark, primary-button fill, focus
  rings, active/selected states, the selected belief's label. It doubles as the source hue
  for *Logical reasoning*, keeping accent and data in one family.
- **Iris Strong** (`#CBB0EE`): a slightly brighter iris for link / accent *text* on dark
  surfaces. Text-only.
- **Accent Contrast** (`#232136`, the base): text/icons sitting *on* an iris fill — the
  accent is light, so its foreground is dark.

### Secondary (data palette — the default taxonomy)
Rose Pine's accent set, assigned across the eight categories of the default *Source of
justification* preset so they read as one cozy family on the dark field. This is the
**default** taxonomy — a map's categories are editable and preset-swappable, and the color
picker offers these same Rose Pine swatches. Category order drives donut-segment order.
**Category differentiation is intentionally lightweight** — hues are cohesive rather than
maximally distinct — and each is always backed by its icon and label, so color is never
the only signal.
- **Foam** (`#9CCFD8`): Empirical data.
- **Pine** (`#3E8FB0`): Direct observation.
- **Leaf** (`#95B1AC`): Scientific evidence.
- **Iris** (`#C4A7E7`): Logical reasoning (shares the chrome accent).
- **Rose** (`#EA9A97`): Expert authority.
- **Gold** (`#F6C177`): Tradition & culture.
- **Love** (`#EB6F92`): Faith & revelation (same hue as Danger — context disambiguates).
- **Coral** (`#EDA884`): Intuition (a warm Rose-Pine-family tone rounding out the set).

### Neutral
- **Ink** (`#E0DEF4`, Rose Pine *text*): primary text — soft lilac-white on the dark base.
- **Ink Muted** (`#908CAA`, *subtle*): secondary text — labels, hints, icon-button rest.
- **Base** (`#232136`): the app background — the night-sky field, carrying a faint violet
  moon-glow (see Elevation).
- **Surface** (`#2A273F`): panels, inputs, buttons, the app bar. Lighter than the base so
  it lifts.
- **Surface Raised** (`#393552`, *overlay*): higher elevation — dropdowns, the node ± badge,
  toasts. The top of the tonal elevation ladder.
- **Border** (`#44415A`, *highlight-med*): hairline dividers and control strokes.
- **Link Line** (`#6E6A86`, *muted*): the connector strokes and the faint star-dot grid.
- **Danger** (`#EB6F92`, *love*): destructive actions only (delete), never decorative.

### Named Rules
**The Equal-Categories Rule.** All source categories are peers. Never size, order, or style
one to imply its warrant is more valid than another. The donut reports the mix; it never
grades it.

**The Two-Axis Rule.** Hue = source, opacity = confidence. A tentative belief's arc is
paler (~0.4), an established one is full (1.0). Never overload hue with confidence or
vice-versa, and never let a low-confidence (low-opacity) arc fade so far it reads as
absent — 0.4 is the floor.

**The Icon-and-Label Rule.** A source is *always* backed by its icon and label, never
color alone — chips (colored icon + tinted pill + **ink** label), forms, and the node's
own name below the donut. Meaning-bearing text stays in ink so it clears contrast on any
hue.

**The Lift-by-Light Rule.** On this dark theme depth comes from surface *lightness*
(base → surface → overlay), not shadow. Shadows only soften the edge of things that truly
float; they never carry elevation on their own.

## 3. Typography

**Display / Body / Label Font:** the native system-UI stack (`system-ui`, `-apple-system`,
`Segoe UI`, `Roboto`, `Helvetica`, `Arial`, sans-serif). One family throughout, weighted
for hierarchy.

**Character:** deliberately unfussy and native — the type should feel like the operating
system the user already trusts, not a branded voice competing with their beliefs.
Hierarchy comes from **weight (400 → 600 → 700) and size**, never from a second family.

### Hierarchy
- **Title** (600, 1.15rem, line-height 1.2): the selected belief's name in the detail
  panel — the largest text in the app.
- **Headline** (600, 1.05–1.1rem): app-bar brand ("Belief Map") and modal headers.
- **Body** (400, 0.9–0.95rem, line-height 1.5): belief notes, references, menu items,
  button labels. Cap prose at 65–75ch inside panels.
- **Label** (600, 0.8rem): form field labels and section headers — often in Ink Muted.
- **Node Label** (500, 12px): the belief name under each donut on the field; turns
  Constellation Indigo at weight 700 when its node is selected. Names over 20 chars are
  truncated with an ellipsis.
- **Micro** (400, 0.72–0.75rem): hints and inline validation errors only.

### Named Rules
**The One-Family Rule.** No second typeface. If something needs to stand out, change
weight or size — never introduce a display or mono font. The system UI stack is the voice.

**The Compact-Ceiling Rule.** Nothing exceeds ~1.15rem. This is a working canvas, not a
landing page; large display type would break the "tool disappears" principle.

## 4. Elevation

On this dark theme, **depth comes from surface lightness, not shadow**. The elevation
ladder is tonal: base (`#232136`) → surface (`#2A273F`) → overlay (`#393552`). A panel
lifts because it is lighter than the field it sits on; a dropdown lifts again because it
is lighter still. Shadow is only a soft edge-softener on things that genuinely float —
never the primary depth cue.

### Elevation Vocabulary
- **Tonal lift**: base → surface → surface-raised. The detail panel and modal are
  `surface`; dropdowns, the node ± badge, and toasts are `surface-raised`. This ordering
  is the real depth signal.
- **Floating shadow** (`box-shadow: 0 14px 32px rgba(11, 10, 20, 0.55)`): a soft, near-black
  shadow shared by the modal, detail panel, dropdown, and Flow control / minimap clusters —
  grounds them against the dark field without glowing.
- **Node lift** (`drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45))`): a soft dark shadow under
  each white donut glyph, seating the glowing disc on the field.
- **Backdrop scrim** (`rgba(13, 12, 22, 0.66)`): dims the field behind an open modal.

### The Constellation Glow
- **Moon glow** (`radial-gradient(135% 105% at 50% -12%, #2A2740, base, #1C1A2C)`): a
  fixed, non-interactive violet wash behind the field — a touch lighter at the top,
  darker at the edges. Single hue family, never a two-hue diagonal gradient. It gives the
  night sky depth so the white donuts read as glowing against it.

### Named Rules
**The Lift-by-Light Rule.** Depth is tonal first. If a surface needs to feel higher, make
it lighter — don't reach for a bigger shadow. Shadows stay soft and only appear on things
that truly float (modal, panel, dropdown, node-on-hover); never on static chrome or the
field itself.

## 5. Components

### Buttons
- **Shape:** gently rounded (8px, `{rounded.md}`); pill (999px) only for chips and toasts.
- **Default:** dark Surface, 1px border, Ink text; hover shifts the border to Iris (fill
  stays dark). A restrained, quiet control.
- **Primary:** Iris fill with **dark** (`accent-contrast`) text; hover brightens the fill
  ~8%. Reserved for the single main action in a context (Add premise / Save changes).
- **Danger:** Ink text turns to Danger (love) with a love-tinted border; hover adds an 8%
  love wash. Delete only.
- **Press feedback:** a 1px downward nudge (`translateY(1px)`) — soft, tactile, never bouncy.
- **Icon button:** transparent, no border, Ink-Muted glyph; hover paints a 10% iris wash
  and turns the glyph iris. Used for close, add/remove-reference, rename, zoom.

### Chips (source tag)
- **Style:** pill (999px) with a 14% tint of the source's hue as background and a 32% tint
  as a hairline border; the icon is the full hue, the **label is ink** (legible on the dark
  surface regardless of hue). Compact (0.3rem × 0.6rem), weight 600, 0.8rem.
- **Content:** always colored icon + ink label together — the canonical icon-and-label
  expression, with the meaning-bearing text kept legible.

### Confidence Gauge (signature component)
A row of three pips beside the source chip encoding the belief's confidence. Filled pips
(`level.order <= confidence`) take the source hue; empty pips are a 22% wash of Ink-Muted.
It restates on the panel what the donut opacity encodes on the field — the confidence axis,
made explicit where there's room for it.

### Cards / Containers (panels)
- **Corner Style:** 12px (`{rounded.xl}`) for the detail panel and modal; 10px for the
  dropdown.
- **Background:** `surface` for the panel/modal, `surface-raised` for dropdowns — lighter
  than the field so they lift by tone. Sticky headers share the panel surface.
- **Shadow Strategy:** the shared floating shadow (see Elevation) softens the edge; the
  tonal lift does the real work.
- **Border:** 1px Border hairline; internal section dividers are the same hairline.
- **Internal Padding:** ~1rem–1.25rem. Generous but not loose.

### Inputs / Fields
- **Style:** dark Surface, 1px Border, 8px radius; label above in Ink-Muted 0.8rem/600.
  Native `<select>` for the source-category and confidence pickers (the belief form pairs
  them side by side); `<input>`/`<textarea>` for name, notes, and reference rows.
- **Focus:** a 2px iris outline at 40% (`color-mix`) plus a solid iris border — a soft
  focus glow, clearly visible, never a hard system ring.
- **Error:** inline Danger micro text below the field; validation is deferred until an
  attempted submit (no nagging while typing).

### Navigation (app bar)
- **Style:** fixed 60px bar, translucent Surface (88%) with an 8px backdrop blur, hairline
  bottom border — the constellation is faintly visible drifting beneath it.
- **Contents:** brand mark + title (title hides below 560px), the map-manager dropdown
  trigger, and Import/Export default buttons. Left-brand, right-tools, flexible spacer.

### The Canvas (Svelte Flow field)
The tree renders through Svelte Flow (`@xyflow/svelte`), themed to the palette so its
chrome never looks like a third-party default:
- **Background:** a dot grid (`BackgroundVariant.Dots`, gap 26, size 1.4) in Link-Line over
  a transparent canvas — the faint star field beneath the nodes.
- **Edges:** default bezier links stroked in Link-Line at 2px; the branch geometry, kept
  quiet so the nodes lead.
- **Controls & MiniMap:** bottom-corner clusters on `surface`, hairline border, 10px radius,
  the shared floating shadow; MiniMap dots use each node's category hue over a dark mask.

### The Reroute Modal (move a belief)
A focused modal for re-parenting: a hint line naming the current parent, an optional search
box (shown only past 8 candidates), and a scrollable, depth-indented list of eligible target
beliefs — each a full-width row with the target's category **dot**, its name, and a trailing
chevron. Hover paints a 9% iris wash. It exists so structural edits stay light and reversible.

### The Belief Node (signature component)
The core object. A donut chart drawn in SVG on a **white fill** so it glows against the
dark field: an outer ring whose arc segments (one per *source* present among the children,
arc *width* scaled by count, arc *opacity* by average child confidence) show the premise
mix, and an inner ring stroked in the node's own source hue at its own confidence opacity.
Radius is 25px at rest and inflates to 37px on hover with a 0.18s ease — soft and springy,
inviting a poke. A small collapse/expand badge (± in a bordered `surface-raised` circle)
sits at the node's shoulder when it has children. The name label sits below; selection
turns it iris and bold. This is where "inviting to tinker" and "legible structure over
decoration" both live — protect it.

## 6. Do's and Don'ts

### Do:
- **Do** keep the eight source colors as visual equals, each always paired with its icon
  and label (the Icon-and-Label Rule).
- **Do** hold the two axes separate: hue = source, opacity = confidence (0.4 floor, 1.0
  full). Restate confidence explicitly (the gauge) where there's room.
- **Do** convey depth by surface *lightness* first (base → surface → overlay); keep the
  soft `0 14px 32px rgba(11,10,20,0.55)` shadow only on things that truly float.
- **Do** keep the donut fills white so they glow against the dark base — the constellation
  is the brightest thing on screen.
- **Do** drive hierarchy with weight and size on the single system-UI family — 400 / 600 /
  700, nothing over ~1.15rem.
- **Do** put actions on the object the user selected (detail panel), not a persistent toolbar.
- **Do** give every animation a `prefers-reduced-motion` fallback — the node inflate, the
  modal `pop`, and the toast `fly` must degrade to instant or crossfade.
- **Do** keep motion soft — the 1px press nudge, the 0.18s node inflate — springy, never
  bouncy or elastic.

### Don't:
- **Don't** build **cold enterprise SaaS**: no dashboard grids, no hero-metric tiles, no
  corporate-blue chrome, no identical card grids.
- **Don't** be **preachy or persuasive**: never rank, score, or visually privilege one
  source over another. No debate-scoreboard, no "gotcha" framing.
- **Don't** become a **cluttered power-tool**: no dense always-on toolbars, no tiny
  controls crammed edge to edge, no IDE overwhelm.
- **Don't** go **childish or gimmicky**: no cartoon mascots, no novelty animation, no
  bounce/elastic easing. Playfulness lives in soft motion, not stunts.
- **Don't** rely on color alone for any source — icon and label are mandatory — and don't
  let a low-confidence arc fade below 0.4 opacity into looking absent.
- **Don't** invert the palette into a fake "light mode" or chase depth with heavier
  shadows instead of lighter surfaces — this is a committed dark (Rose Pine Moon) theme.
- **Don't** add a second font family, or any display/hero type over ~1.15rem.
- **Don't** use a colored `border-left`/`border-right` stripe as an accent, and don't let
  the field-background rings exceed their faint role (~7% opacity, `pointer-events: none`).
