/**
 * The quest player's motion: the pop of a right answer, the shake of a wrong
 * one, XP floating up, stars landing one after another, a panel inked in from
 * the left, and the pulse on the level to play next.
 *
 * In one stylesheet, rendered once by the quest map, so every piece of motion
 * sits behind one prefers-reduced-motion rule: a reader who asked for less
 * motion gets every state change, instantly, and nothing that moves on its
 * own.
 */
const CSS = `
@keyframes q-pop { 0% { transform: scale(1) } 40% { transform: scale(1.06) } 100% { transform: scale(1) } }
@keyframes q-shake { 0%,100% { transform: translateX(0) } 20% { transform: translateX(-7px) } 40% { transform: translateX(7px) } 60% { transform: translateX(-4px) } 80% { transform: translateX(4px) } }
@keyframes q-rise { 0% { opacity: 0; transform: translateY(6px) scale(.9) } 25% { opacity: 1; transform: translateY(0) scale(1.05) } 100% { opacity: 0; transform: translateY(-28px) scale(1) } }
@keyframes q-sheet { 0% { transform: translateY(100%) } 100% { transform: translateY(0) } }
@keyframes q-in { 0% { opacity: 0; transform: translateY(10px) } 100% { opacity: 1; transform: translateY(0) } }
@keyframes q-star { 0% { opacity: 0; transform: scale(.2) rotate(-25deg) } 60% { opacity: 1; transform: scale(1.25) rotate(8deg) } 100% { opacity: 1; transform: scale(1) rotate(0) } }
@keyframes q-ink { 0% { clip-path: inset(0 100% 0 0); filter: grayscale(1) contrast(1.4) } 70% { filter: grayscale(.4) } 100% { clip-path: inset(0 0 0 0); filter: none } }
@keyframes q-pulse { 0%,100% { box-shadow: 0 0 0 0 hsl(var(--primary) / .45) } 50% { box-shadow: 0 0 0 10px hsl(var(--primary) / 0) } }
@keyframes q-burst { 0% { opacity: 1; transform: translate(0,0) scale(1) } 100% { opacity: 0; transform: translate(var(--q-dx), var(--q-dy)) scale(.4) } }
@keyframes q-fill { from { width: var(--q-from) } to { width: var(--q-to) } }

.q-pop { animation: q-pop .32s cubic-bezier(.2,.9,.3,1.4) }
.q-shake { animation: q-shake .42s ease-in-out }
.q-rise { animation: q-rise 1.1s ease-out forwards }
.q-sheet { animation: q-sheet .28s cubic-bezier(.16,1,.3,1) }
.q-in { animation: q-in .35s cubic-bezier(.16,1,.3,1) both }
.q-star { opacity: 0; animation: q-star .55s cubic-bezier(.2,.9,.3,1.3) forwards; animation-delay: var(--q-delay, 0s) }
.q-ink { animation: q-ink 1.2s cubic-bezier(.65,0,.35,1) both; animation-delay: var(--q-delay, 0s) }
.q-pulse { animation: q-pulse 2.2s ease-in-out infinite }
.q-burst { animation: q-burst .9s cubic-bezier(.16,1,.3,1) forwards; animation-delay: var(--q-delay, 0s) }

/* A pressable button with depth: it sinks when pressed. */
.q-key { box-shadow: 0 3px 0 0 hsl(var(--border)); transition: transform .08s ease, box-shadow .08s ease, background-color .15s ease, border-color .15s ease }
.q-key:active:not([aria-disabled="true"]):not(:disabled) { transform: translateY(2px); box-shadow: 0 1px 0 0 hsl(var(--border)) }
.q-key-primary { box-shadow: 0 4px 0 0 hsl(var(--primary) / .55) }
.q-key-primary:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 1px 0 0 hsl(var(--primary) / .55) }

@media (prefers-reduced-motion: reduce) {
  .q-pop, .q-shake, .q-rise, .q-sheet, .q-in, .q-pulse, .q-burst { animation: none }
  .q-star, .q-ink { animation: none; opacity: 1; clip-path: none; filter: none }
  .q-key, .q-key:active { transition: none; transform: none }
}
`

export function QuestStyles() {
  return (
    <style href="quest-player" precedence="default">
      {CSS}
    </style>
  )
}
