# Product

## Register

product

## Users

Individuals mapping their own worldview for self-reflection. The context is
private and unhurried — a single person sitting with their own thinking, alone,
with no audience and no deadline. The job to be done is to externalize *why* they
believe what they believe: lay out a belief, break it into the premises that
support it, and see honestly what those premises rest on (evidence, observation,
assumption, authority, faith). Success is a moment of clarity — "oh, *that's*
what this belief is actually built on."

## Product Purpose

Belief Map is a local-first tool for building your worldview as a tree of beliefs.
Each node is a belief; its children are the premises supporting it. Every node is
drawn as a donut chart whose arcs show the mix of belief *types* among its children
(scientific evidence, observation, personal conclusion, personal assumption,
religious thinking, stated by authority, unable to disprove). It runs entirely in
the browser — maps live as JSON in localStorage, nothing is sent anywhere — and
you can keep several named maps and import/export them as files.

It exists because most people never see the structure of their own reasoning. The
product makes that structure visible and editable without ever telling the user
what to think. Success is that the tool disappears and the thinking stays.

## Brand Personality

Warm, inviting, playful. The voice is that of a curious, non-judgmental companion —
it lowers the barrier to introspection rather than dressing it up as a rigorous
audit. It should feel hand-made and low-stakes to tinker with (in the spirit of a
canvas-native tool like tldraw/Excalidraw), not sterile or clinical. Playful in
texture and motion, but never gimmicky: the subject is someone's genuine worldview,
so warmth must read as respect, not whimsy. Emotional goals: safe, unhurried,
quietly delighted, never judged.

## Anti-references

- **Cold enterprise SaaS.** No dashboard-grid, corporate-blue, hero-metric-template
  energy. Nothing sterile or impersonal.
- **Preachy / persuasive.** The design takes no stance on any belief. No
  debate-scoreboard, no "gotcha" framing, no ranking beliefs as better or worse. All
  seven belief types are presented as equals.
- **Cluttered power-tool.** No dense toolbars, tiny controls, or everything-on-screen
  IDE overwhelm. Surfaces stay calm; complexity is revealed on demand.
- **Childish / gimmicky.** Playfulness lives in craft and motion, not in cartoon
  mascots or novelty that undercuts thoughtful reflection.

Feel reference (borrow, don't copy): tldraw / Excalidraw — playful, hand-made,
canvas-native, inviting to tinker, low-stakes.

## Design Principles

1. **The tool disappears, the thinking stays.** Every visual decision should keep
   attention on the user's beliefs, not on the interface. When in doubt, recede.
2. **No stance, ever.** Present all seven belief types as visual equals. The design
   never signals that evidence is "better" than assumption or faith — it only makes
   the mix legible.
3. **Inviting to tinker.** Adding, editing, and rearranging beliefs should feel
   light and reversible, like sketching on a canvas. Lower the stakes of every action.
4. **Warmth is respect.** Playfulness serves comfort, not cuteness. The person is
   examining something real about themselves; the design honors that.
5. **Legible structure over decoration.** The donut mix and the tree shape are the
   core information. Color, motion, and space exist to clarify that structure — never
   to compete with it.

## Accessibility & Inclusion

Target **WCAG AAA** effort throughout:

- Body-text contrast to AAA (≥7:1) where achievable; large text ≥4.5:1. Never rely
  on the muted-gray-on-tint pattern.
- The seven belief-type colors must never be the *only* signal — each already pairs
  with a distinct icon and label; preserve that redundancy everywhere the palette
  appears (donut segments, legends, forms). This keeps the data viz color-blind-safe.
- Full keyboard navigability for the tree, forms, modals, and toasts; visible focus
  states; correct focus management in dialogs.
- Honor `prefers-reduced-motion` on every animation with a crossfade or instant
  fallback — motion is enhancement, never a gate on content or comprehension.
