import Link from "next/link";

export const metadata = { title: "Creative Writing Masterclass — Teacher Resources" };

/* ─── Example 4: Creative Writing Teaching Resource ──────────────── */

const MODEL_TEXTS = [
  {
    title: "Descriptive Writing: The Abandoned Fairground",
    level: "Level 5-6 Model",
    text: `The Ferris wheel stood frozen against the bruised sky, its rusted carriages swaying like hollow teeth in a dead man's smile. Below, the cracked tarmac sprouted tufts of ragwort — nature reclaiming what had once pulsed with neon light and the sugar-sweet screams of children.

I picked my way through the debris. A ticket booth, its glass shattered into a mosaic of neglect. A carousel horse, paint peeling in leprous strips, one glass eye still gleaming with an unsettling intelligence. The air tasted of iron and forgetting.

Somewhere ahead, a chain-link fence sang in the wind — a thin, metallic hymn that raised the hairs on my forearms. It was the sound of a place that remembered what it used to be.`,
    annotations: [
      { technique: "Extended metaphor", example: '"hollow teeth in a dead man\'s smile"', effect: "Personifies the Ferris wheel as something dead/decaying — creates Gothic atmosphere" },
      { technique: "Semantic field of decay", example: '"rusted", "cracked", "shattered", "peeling"', effect: "Consistent imagery reinforces the theme of neglect and the passage of time" },
      { technique: "Synaesthesia", example: '"The air tasted of iron and forgetting"', effect: "Blends taste and abstract concept — makes the atmosphere tangible and memorable" },
      { technique: "Personification", example: '"nature reclaiming", "a place that remembered"', effect: "Gives agency to non-human elements, suggesting the fairground has its own consciousness" },
      { technique: "Varied sentence length", example: '"A ticket booth, its glass shattered..." (fragment) vs complex opening sentence', effect: "Fragments create pace and impact; longer sentences build atmosphere" },
      { technique: "Sensory detail", example: "sight (bruised sky), taste (iron), touch (hairs on forearms), sound (metallic hymn)", effect: "Engages multiple senses to immerse the reader in the setting" },
    ],
  },
];

const WRITING_TASKS = [
  {
    title: "Task 1: Sensory Expansion",
    time: "15 minutes",
    instruction: "Take the opening sentence of the model text. Rewrite the scene using ONLY sound and touch — no visual descriptions allowed. How does removing sight change the atmosphere?",
    success: ["At least 5 different sound/touch details", "Varied sentence structures", "At least one simile or metaphor using non-visual imagery"],
  },
  {
    title: "Task 2: Narrative Voice Shift",
    time: "20 minutes",
    instruction: "Rewrite the model text from the perspective of the carousel horse. Use first-person narration. How does the horse experience time passing? What does it remember?",
    success: ["Consistent first-person voice", "Evidence of time passing (then vs now)", "At least one flashback to when the fairground was active", "Personification that feels natural, not forced"],
  },
  {
    title: "Task 3: Exam-Style Response",
    time: "45 minutes (timed)",
    instruction: "'Write a description suggested by this picture.' [Image: an empty playground at dusk]. You should write between 350-500 words. Use the techniques from the model text to create atmosphere.",
    success: ["Clear sense of atmosphere from the opening line", "Varied sentence structures (including at least 2 fragments)", "Extended metaphor or motif running through the piece", "Sensory details beyond just visual", "Effective ending that echoes or develops the opening image"],
  },
];

const TECHNIQUE_TOOLKIT = [
  { name: "Pathetic fallacy", description: "Weather/setting reflecting mood", example: '"The sky bruised purple as the argument escalated"', when: "Opening paragraphs, transitions between moods" },
  { name: "In medias res", description: "Starting in the middle of action", example: '"I ran. Behind me, the sirens wailed."', when: "Narrative openings to create instant tension" },
  { name: "Cyclical structure", description: "Ending echoes the beginning", example: "Open with rain on a window → end with rain clearing", when: "To create a satisfying, literary structure" },
  { name: "One-sentence paragraph", description: "Isolated sentence for dramatic effect", example: '"She didn\'t come back."', when: "After a build-up, to deliver impact or a turning point" },
  { name: "Zooming in", description: "Moving from wide shot to close-up detail", example: "City skyline → street → doorway → cracked paint on the door handle", when: "Descriptive writing to guide the reader's eye" },
  { name: "Semantic field", description: "Related words creating a pattern of meaning", example: 'Words of confinement: "cage", "trapped", "bars", "locked"', when: "To reinforce a theme or mood throughout" },
];

export default function CreativeWritingPage() {
  const model = MODEL_TEXTS[0];

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href="/dashboard/teacher/resources"
          className="text-sm text-accent hover:text-primary mb-2 inline-block"
        >
          &larr; Back to Resources
        </Link>
        <h1 className="text-2xl font-bold text-primary">Creative Writing Masterclass</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Model texts, annotated examples, and structured tasks for teaching descriptive
          and narrative writing at GCSE level. Suitable for AQA Paper 1 Q5 / Edexcel Paper 1 Section B.
        </p>
      </div>

      {/* Model Text */}
      <section className="card">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-foreground">{model.title}</h2>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
            {model.level}
          </span>
        </div>
        <div className="rounded-lg bg-background p-5 border-l-4 border-primary/30">
          {model.text.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm text-foreground leading-relaxed mb-3 last:mb-0 italic">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Annotations */}
      <section className="card">
        <h2 className="text-lg font-semibold text-foreground mb-4">Technique Annotations</h2>
        <div className="space-y-3">
          {model.annotations.map((ann, i) => (
            <div key={i} className="flex gap-3 rounded-lg border p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-accent text-xs font-bold">
                {i + 1}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground text-sm">{ann.technique}</p>
                <p className="text-xs text-primary mt-0.5">
                  Example: <span className="italic">{ann.example}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">Effect: {ann.effect}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technique Toolkit */}
      <section className="card">
        <h2 className="text-lg font-semibold text-foreground mb-4">Technique Toolkit for Students</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {TECHNIQUE_TOOLKIT.map((tech, i) => (
            <div key={i} className="rounded-lg border p-3">
              <p className="font-semibold text-primary text-sm">{tech.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{tech.description}</p>
              <p className="text-xs text-muted-foreground mt-1.5 italic bg-background rounded p-1.5">{tech.example}</p>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="font-medium">Use when:</span> {tech.when}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Writing Tasks */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Structured Writing Tasks</h2>
        <div className="space-y-4">
          {WRITING_TASKS.map((task, i) => (
            <div key={i} className="card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground text-sm">{task.title}</h3>
                <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  {task.time}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{task.instruction}</p>
              <div className="rounded bg-emerald-500/10 p-3">
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1.5">Success Criteria</p>
                <ul className="space-y-1">
                  {task.success.map((s, j) => (
                    <li key={j} className="flex items-start gap-1.5 text-xs text-emerald-700 dark:text-emerald-300">
                      <svg className="h-3.5 w-3.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
