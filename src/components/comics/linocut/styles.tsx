import type { CSSProperties } from 'react'

import { INK, INK_SOFT, PAPER, RED, SERIF } from './palette'

/**
 * Every rule a linocut piece needs: the sheet, the caption and quotation
 * boxes, the portrait card, and the shared motion. Plain CSS in one string,
 * rendered as a React 19 hoistable <style> (see LinocutStyles), so that:
 *
 * - the art stays server-rendered SVG with no client code at all;
 * - the page carries the rules once however many pieces it shows, because
 *   React deduplicates hoisted styles by `href`;
 * - the preview script can inline exactly the same rules into a standalone
 *   page, so what an artist previews is what a student sees.
 *
 * Layout uses container queries on the sheet, not the viewport: a panel is
 * laid out by the width it is given, whether that is a phone or half a desktop
 * column. Below 560px the boxes sit under the picture, above it they are
 * pasted onto it, as in a comic.
 *
 * MOTION. The base styles are the finished print. Animations only run inside
 * `.lc-play`, and are held at their first frame inside `.lc-armed` (set by
 * PlayOnView while the piece is still off screen, so it has something to play
 * when it arrives). Neither class is in the server HTML, so with scripts off a
 * reader gets the finished print. Every animation ends within about four
 * seconds of the piece arriving. prefers-reduced-motion and print both switch
 * every animation off, which leaves the finished print.
 */
export const LINOCUT_CSS = `
.lc-sheet{position:relative;isolation:isolate;margin:0;background:${PAPER};color:${INK};font-family:${SERIF};text-align:left}
.lc-panel{container:lc-panel/inline-size;padding:8px}
.lc-print{position:relative;line-height:0}
.lc-plate{display:block;width:100%;height:auto}
.lc-grain{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;mix-blend-mode:multiply;z-index:3}
.lc-box{position:relative;z-index:2;margin:10px 0 0;background:${PAPER};border:2px solid ${INK};box-shadow:3px 3px 0 ${INK};padding:6px 10px 7px;font-size:14px;line-height:1.35}
.lc-box p{margin:0}
.lc-quote{font-style:italic;font-size:15px;border-left:7px solid ${RED}}
.lc-qm{color:${RED};font-style:normal;font-weight:700}
@container lc-panel (min-width: 560px){
  .lc-panel{padding:10px}
  .lc-panel .lc-box{position:absolute;margin:0;max-width:min(40%,330px);font-size:clamp(12px,1.5cqi,14px)}
  .lc-panel .lc-quote{font-size:clamp(12.5px,1.62cqi,15px)}
  .lc-at-top-left{left:calc(10px + 2.5%);top:calc(10px + 4%)}
  .lc-at-top-right{right:calc(10px + 2.5%);top:calc(10px + 4%)}
  .lc-at-bottom-left{left:calc(10px + 2.5%);bottom:calc(10px + 3%)}
  .lc-at-bottom-right{right:calc(10px + 2.5%);bottom:calc(10px + 3%)}
}
.lc-card{container:lc-card/inline-size;border:5px solid ${INK};padding:12px}
.lc-card-name{margin:0 0 10px;font-size:22px;line-height:1.15;font-weight:700}
.lc-card-text{margin-top:12px}
.lc-passage{margin:0;font-size:15px;line-height:1.5;font-style:italic;border-left:6px solid ${RED};padding:0 0 0 10px}
.lc-source{display:block;margin-top:4px;font-style:normal;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:${INK_SOFT}}
.lc-nowrap{white-space:nowrap}
.lc-num{display:inline-block;min-width:16px;height:16px;border-radius:8px;background:${RED};color:${PAPER};font-style:normal;font-weight:700;font-size:10.5px;line-height:16px;text-align:center;vertical-align:2px;margin:0 2px}
.lc-label{margin:14px 0 6px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${RED}}
.lc-phrases{margin:0;padding:0;list-style:none;font-size:15px;line-height:1.45}
.lc-phrases li{margin:0 0 4px}
.lc-phrases q{font-style:italic}
.lc-note{margin:12px 0 0;font-size:15px;line-height:1.45}
.lc-small{margin:8px 0 0;font-size:13px;line-height:1.45;color:${INK_SOFT}}
@container lc-card (min-width: 620px){
  .lc-card-body{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:22px;align-items:start}
  .lc-card-text{margin-top:0}
}

:is(.lc-armed,.lc-play) .lc-reveal{animation:lc-wipe .8s cubic-bezier(.3,.1,.2,1) var(--lc-delay,0s) both}
@keyframes lc-wipe{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
.lc-push{transform-box:view-box;transform:scale(var(--lc-push,1.035))}
:is(.lc-armed,.lc-play) .lc-push{animation:lc-push 3.8s ease-out var(--lc-delay,0s) both}
@keyframes lc-push{from{transform:scale(1)}to{transform:scale(var(--lc-push,1.035))}}
.lc-drift,.lc-drift-r{transform-box:view-box}
:is(.lc-armed,.lc-play) .lc-drift{animation:lc-drift 3.6s ease-out var(--lc-delay,0s) both}
:is(.lc-armed,.lc-play) .lc-drift-r{animation:lc-drift-r 3.6s ease-out var(--lc-delay,0s) both}
@keyframes lc-drift{from{transform:translateX(-26px)}to{transform:none}}
@keyframes lc-drift-r{from{transform:translateX(30px)}to{transform:none}}
.lc-flicker{transform-box:fill-box;transform-origin:50% 100%}
:is(.lc-armed,.lc-play) .lc-flicker{animation:lc-flicker var(--lc-dur,.9s) ease-in-out var(--lc-delay,.2s) 4 both}
@keyframes lc-flicker{0%,100%{transform:none}30%{transform:scale(.86,1.12) skewX(3deg)}60%{transform:scale(1.06,.9) skewX(-2deg)}}
:is(.lc-armed,.lc-play) .lc-glow{animation:lc-glow 1.2s ease-in-out var(--lc-delay,.3s) 3 both}
@keyframes lc-glow{0%,100%{opacity:1}50%{opacity:.25}}
:is(.lc-armed,.lc-play) .lc-fade-in{animation:lc-fade-in var(--lc-dur,1s) ease-out var(--lc-delay,0s) both}
@keyframes lc-fade-in{from{opacity:0}to{opacity:1}}
.lc-fade-out{opacity:0}
:is(.lc-armed,.lc-play) .lc-fade-out{animation:lc-fade-out var(--lc-dur,1.2s) ease-in var(--lc-delay,0s) both}
@keyframes lc-fade-out{from{opacity:1}to{opacity:0}}
.lc-rise{transform-box:fill-box;transform-origin:0 100%}
:is(.lc-armed,.lc-play) .lc-rise{animation:lc-rise var(--lc-dur,1.4s) ease-out var(--lc-delay,0s) both}
@keyframes lc-rise{from{opacity:0;transform:translate(8px,6px) scale(.7)}to{opacity:1;transform:none}}
:is(.lc-armed,.lc-play) .lc-pop{animation:lc-pop .5s ease-out var(--lc-delay,1s) both}
@keyframes lc-pop{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.lc-marker{transform-box:fill-box;transform-origin:center}
:is(.lc-armed,.lc-play) .lc-marker{animation:lc-marker .35s ease-out calc(.9s + var(--lc-i,0) * .15s) both}
@keyframes lc-marker{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}
.lc-armed *,.lc-armed *::before,.lc-armed *::after{animation-play-state:paused !important}
@media (prefers-reduced-motion: reduce){
  :is(.lc-armed,.lc-play) *,:is(.lc-armed,.lc-play) *::before,:is(.lc-armed,.lc-play) *::after{animation:none !important}
}
@media print{
  :is(.lc-armed,.lc-play) *,:is(.lc-armed,.lc-play) *::before,:is(.lc-armed,.lc-play) *::after{animation:none !important}
  .lc-grain{display:none}
}
`

/**
 * The rules above as a hoisted, deduplicated stylesheet. Rendered by every
 * frame, so a piece can never appear without its styles, and a page with ten
 * pieces still carries one copy.
 */
export function LinocutStyles() {
  return (
    <style href="lc-linocut" precedence="medium">
      {LINOCUT_CSS}
    </style>
  )
}

/**
 * Timing for one element, as CSS custom properties the motion rules read:
 * `delay` and `dur` in seconds, `push` for the push-in scale, `i` for a
 * marker's place in the stagger.
 */
export function timing(t: {
  delay?: number
  dur?: number
  push?: number
  i?: number
  origin?: [number, number]
}): CSSProperties {
  const s: Record<string, string | number> = {}
  if (t.delay !== undefined) s['--lc-delay'] = `${t.delay}s`
  if (t.dur !== undefined) s['--lc-dur'] = `${t.dur}s`
  if (t.push !== undefined) s['--lc-push'] = t.push
  if (t.i !== undefined) s['--lc-i'] = t.i
  if (t.origin) s.transformOrigin = `${t.origin[0]}px ${t.origin[1]}px`
  return s as CSSProperties
}
