/**
 * THE LINOCUT STYLE GUIDE
 *
 * Every set text gets comic art of its key moments and portraits of its
 * people as the text describes them, for students who learn by seeing. The
 * founder chose one style for all of it on 26 September 2026: a linocut
 * print, hand-built in SVG. No image generator, no bitmap, no traced photo.
 * This file is the standard the artists draw to. The approved reference was
 * the Stave One prototype; the pieces in src/data/comics/a-christmas-carol/
 * are its first two pieces in this system, and set the bar.
 *
 * ── WHAT A LINOCUT IS, AND SO WHAT THE DRAWING DOES ─────────────────────────
 * A block is inked black and the artist cuts away what should be white. So
 * the ground of every plate is INK, and light is made by cutting: white gouge
 * lines, hatching and cleared shapes. Think "where does the light fall?", not
 * "where are the outlines?". Large shapes are solid black or solid paper;
 * texture lives in the cuts between them. A second block prints the one spot
 * colour, so it sits in flat shapes and never shades.
 *
 * ── PALETTE (palette.ts) ─────────────────────────────────────────────────────
 * INK #1c1915, PAPER #ece3cd, RED #a5402b, and nothing else in the art.
 * INK_SOFT is for small print on the sheet, never inside a plate.
 * RED is used sparingly, for what the scene is about: a fire and one coal, a
 * red-rimmed eye, a ruddy face, far candles. It may stand for blood as a
 * symbol (on hands, on a blade) but never as a wound. If the text names a
 * colour the print cannot show, say so in the portrait's `artNote` rather
 * than cheat with a tint ("his blue lips are left to the words").
 *
 * ── LINE WEIGHTS (LINE in palette.ts, in drawing units) ──────────────────────
 * Panels are drawn about 860 wide (860 by 340 for a wide panel, 422 by 356 for
 * a half), portraits about 332 by 318. At those sizes: hairline 0.8 (hair,
 * rime, the grain of skin), fine 1.2 (eyelids, lips, folds), carve 1.6 (the
 * paper outline cut round a black figure on a black ground), bold 2.4 (brows,
 * floor joints, anything that must survive a phone), frame 5 (the block's
 * edge, drawn by the Plate). Nothing finer than a hairline: it vanishes at
 * phone width, where a panel is shown about 300 pixels wide.
 *
 * ── THE CARVING TOOLS (carve.ts) ─────────────────────────────────────────────
 * gouge (a lens-shaped cut), wedge (a tapering cut), ribbon (a tapered stroke
 * along points: hair, smoke, scarves), gougeField (rows of cuts that follow a
 * light function: walls, skies, grounds), rays (light from a source), arcDashes
 * (halos, the hollow of a cheek), fogBank and wisps. Build shapes from these
 * and plain paths; keep coordinates to one decimal place (the n() helper).
 *
 * ── TEXTURE SEEDS (TEXTURE_SEEDS in palette.ts) ─────────────────────────────
 * Three filters give every plate the same print: `rough` (seed 4) wobbles every
 * edge by a couple of units; `voids` (seed 11) scatters the white specks where
 * ink failed to take; the paper grain (seeds 3 and 8) is multiplied over the
 * whole sheet in screen pixels. The frames apply all three; a drawing never
 * adds its own. A drawing's scattered marks come from `rng(seed)`, never
 * Math.random(): one seed per drawing, recorded in its file, so it prints the
 * same every time and the version that was reviewed is the version students
 * see. Cache computed paths at module level; a drawing never changes.
 *
 * ── COMPOSITION ──────────────────────────────────────────────────────────────
 * - One clear focal silhouette per panel, black against the lightest area
 *   (Scrooge against the fogged window). Read left to right, like the text.
 * - Three values only: solid black, solid paper, and cut texture between.
 *   If a figure disappears into its ground, knock it out: a paper halo (carve
 *   weight) round a black figure, or a thick ink halo round a lit one.
 * - Keep the bottom right clear, or the corner the quotation box is set to:
 *   above 560 pixels wide the box is pasted over the art, taking up to 40 per
 *   cent of the width; below, it moves under the picture.
 * - The Plate draws the border; keep essential detail 12 units in from the
 *   edge. The push-in (below) crops about 2 per cent more at each side.
 * - Faces in profile or three-quarter, features cut as a few decisive lines.
 *   A face that needs more than a dozen cuts to read is too small in the panel.
 *
 * ── AS DESCRIBED: THE TEXT, AND ONLY THE TEXT ────────────────────────────────
 * - Draw from the text's own words. Never from a film, television or stage
 *   production: not its design, costumes, sets or casting.
 * - A character looks as the text describes them, where it does. Where it does
 *   not, draw them plainly, in the dress of the text's period and place.
 * - Every panel's docblock quotes the sentences each detail comes from, so a
 *   reviewer can check the picture against the book.
 * - Quotations on art are verbatim, copied from the held edition
 *   (src/data/full-texts/<slug>.ts) or, where none is held, from the guide's
 *   own verified quotations. Never from another edition you find online:
 *   Macbeth's quotations were first taken from the Folger Shakespeare
 *   Library's text, which is licensed for non-commercial use only, and were
 *   moved to the held Gutenberg edition on 26 September 2026. 15 words at
 *   most on a panel. The comics test checks every one.
 *
 * ── SAFEGUARDING: MANY READERS ARE CHILDREN ─────────────────────────────────
 * - Suggest violence; never show it. No wounds, no gore, no bodies. Show the
 *   moment before, the aftermath, a shadow, a raised blade, faces reacting.
 * - RED may stand for blood symbolically (on hands, on a dagger), never as a
 *   wound, a pool or a spatter.
 * - Some things are never drawn. Macbeth: the killing of Macduff's son, and
 *   Macbeth's severed head (show the victors, or the crown passing, instead).
 *   A Christmas Carol: Tiny Tim dead (Dickens shows his empty stool and
 *   crutch; so do we).
 * - The same care for self-harm, suicide, abuse and racism in any text: the
 *   picture carries the weight of the moment, not its injury. If in doubt,
 *   leave it out and ask.
 *
 * ── ACCESSIBILITY ───────────────────────────────────────────────────────────
 * Every piece is one role="img" with its `alt` as aria-label (the Plate sets
 * both; a drawing cannot opt out). Write the alt for someone who will never
 * see it: who is there, what they are doing, where, and what the red marks. A
 * portrait's alt names what each numbered marker points to.
 *
 * ── MOTION (styles.tsx) ─────────────────────────────────────────────────────
 * CSS only, and only these classes, so every piece moves the same way:
 *   lc-reveal     the plate wipes in from the left (the frame applies it)
 *   lc-push       a slow push-in on the whole scene; set its origin and scale
 *                 with timing({ origin, push }) on a <g> with no transform
 *   lc-drift      fog or smoke drifting in from the left (lc-drift-r: right)
 *   lc-flicker    a flame; lc-glow, an ember breathing
 *   lc-rise       a puff of breath or smoke rising
 *   lc-fade-in, lc-fade-out    one thing becoming another (a face in a knocker)
 *   lc-pop        a caption or quotation box arriving
 *   lc-marker     a portrait's numbered markers, staggered
 * Delays and durations through timing({ delay, dur }). Everything must finish
 * within about four seconds of the piece arriving on screen. The finished
 * print is the base style; motion only animates towards it, so with reduced
 * motion, in print, or with scripts off, the reader gets the whole picture at
 * once. Motion starts when a piece scrolls into view (PlayOnView), once.
 *
 * ── RULES FOR THE CODE ──────────────────────────────────────────────────────
 * - A drawing is a LinocutArt ({ width, height, Draw }) whose Draw returns SVG
 *   content, never the <svg> root. Pure, server-rendered: no hooks, no state,
 *   no 'use client', no Math.random(), no Date.
 * - Nothing external: no web fonts, no image elements, no URLs, no data: URIs. The
 *   only url reference is to a fragment, one of the piece's own ids, prefixed with
 *   the `uid` prop.
 * - Weight: the whole of a piece reaches the page as markup, and the player
 *   sends every panel of a text with the page. Keep a panel under about 90 KB
 *   of markup (the preview prints the figure; the test enforces a ceiling).
 *
 * ── HOW TO PREVIEW ──────────────────────────────────────────────────────────
 *   node scripts/preview-comics.mjs <slug> [--only <name>] [--at 400,1500]
 * renders the registered pieces into a standalone page and screenshots them
 * with Playwright in Chrome: desktop, phone, reduced motion and any frames
 * mid-motion. Details at the top of src/data/comics/a-christmas-carol/index.ts.
 * Look at every PNG before calling a piece done.
 */

export { INK, PAPER, RED, INK_SOFT, PALETTE, SERIF, LINE, TEXTURE_SEEDS } from './palette'
export * from './carve'
export { PlateFilters, PaperGrain, textureIds } from './textures'
export { LINOCUT_CSS, LinocutStyles, timing } from './styles'
export { Plate } from './plate'
export { PanelFrame, PortraitFrame, CaptionBox, QuoteBox } from './frames'
export { PortraitCard, type PortraitCardLabels } from './portrait-card'
export { RegisteredPanel, RegisteredPortrait } from './pieces'
