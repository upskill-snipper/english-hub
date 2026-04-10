"use client";

import { useState } from "react";
import { AITextArea } from "@/components/AITextArea";

/* ─── Expandable Section Component ──────────────────────────── */

function Section({
  id,
  title,
  badge,
  colour = "bg-primary",
  children,
  defaultOpen = false,
}: {
  id: string;
  title: string;
  badge?: string;
  colour?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted"
        aria-expanded={open}
        aria-controls={`section-${id}`}
      >
        <div className="flex items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${colour}`} />
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          {badge && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {badge}
            </span>
          )}
        </div>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div id={`section-${id}`} className="border-t border-border px-5 py-5">
          {children}
        </div>
      )}
    </div>
  );
}

function SubSection({
  id,
  title,
  children,
  defaultOpen = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg border border-border bg-muted/50 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-muted/60"
        aria-expanded={open}
        aria-controls={`sub-${id}`}
      >
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <svg
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div id={`sub-${id}`} className="border-t border-border px-4 py-4">
          {children}
        </div>
      )}
    </div>
  );
}

function Quote({ text, speaker, act, analysis }: { text: string; speaker: string; act: string; analysis: string }) {
  return (
    <div className="rounded-lg border-l-4 border-accent bg-primary/10 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">{speaker} &mdash; {act}</p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  );
}

function QuoteCompact({ text, speaker, act, themes, analysis }: { text: string; speaker: string; act: string; themes: string[]; analysis: string }) {
  return (
    <div className="rounded-lg border-l-4 border-accent bg-primary/10 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">{speaker} &mdash; {act}</p>
      <div className="mt-1.5 flex flex-wrap gap-1">
        {themes.map((t) => (
          <span key={t} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-foreground">{t}</span>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function MacbethRevisionPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-700 dark:text-red-300 uppercase tracking-wider">Shakespeare</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">AQA</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Edexcel</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">CAIE</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">OCR</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Macbeth &mdash; The Definitive GCSE Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          The most comprehensive Macbeth resource you will find. Act-by-act plot summaries, 10 character profiles with key quotes,
          8 themes with detailed analysis, 30+ quotations with full breakdowns, historical context, 5 essay planning templates,
          and exam board comparison. Everything you need for your GCSE English Literature exam.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Plot Summary", href: "plot-summary" },
            { label: "Characters", href: "characters" },
            { label: "Themes", href: "themes" },
            { label: "Key Quotations", href: "key-quotations" },
            { label: "Context", href: "context" },
            { label: "Essay Planning", href: "essay-planning" },
            { label: "Writer's Methods", href: "writers-methods" },
            { label: "Grade 9 Points", href: "grade-9" },
            { label: "Exam Board Tips", href: "exam-board-tips" },
          ].map((s) => (
            <a
              key={s.href}
              href={`#${s.href}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4" id="plot-summary">
        {/* ────────────────────────────────────────── PLOT SUMMARY */}
        <Section id="plot" title="Act-by-Act Plot Summary" badge="5 Acts" colour="bg-red-600" defaultOpen>
          <div className="space-y-6">
            {/* Act 1 */}
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">1</span>
                Act 1 &mdash; The Prophecy
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The play opens amid thunder and lightning with three witches planning to meet Macbeth after a battle (&ldquo;When the hurlyburly&apos;s done, / When the battle&apos;s lost and won&rdquo;). Their chant &ldquo;Fair is foul, and foul is fair&rdquo; establishes the theme of moral inversion that pervades the entire play. Meanwhile, a wounded Captain reports to King Duncan that Macbeth has fought with extraordinary bravery against the rebels and the Norwegian invaders, earning the titles &ldquo;brave Macbeth&rdquo; and &ldquo;Bellona&apos;s bridegroom.&rdquo; Duncan orders the execution of the traitorous Thane of Cawdor and awards Cawdor&apos;s title to Macbeth.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                On a &ldquo;blasted heath,&rdquo; Macbeth and Banquo encounter the Weird Sisters, who prophesy that Macbeth will become Thane of Cawdor and then King, while Banquo will be &ldquo;lesser than Macbeth, and greater&rdquo; and father to a line of kings. Almost immediately, Ross arrives to confirm Macbeth has indeed been made Thane of Cawdor. This partial fulfilment ignites Macbeth&apos;s ambition; in an aside, he imagines the murder (&ldquo;whose horrid image doth unfix my hair&rdquo;) but also considers that &ldquo;chance may crown me / Without my stir.&rdquo; Duncan names his eldest son Malcolm as Prince of Cumberland (heir), prompting Macbeth&apos;s aside: &ldquo;Stars, hide your fires; / Let not light see my black and deep desires.&rdquo;
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Macbeth writes to Lady Macbeth, who reads the letter and immediately resolves that Duncan must die. In her &ldquo;unsex me here&rdquo; soliloquy, she invokes evil spirits to strip her of feminine compassion. When Duncan arrives at their castle as an honoured guest, Lady Macbeth counsels Macbeth to &ldquo;look like the innocent flower, / But be the serpent under&apos;t.&rdquo; In his &ldquo;If it were done&rdquo; soliloquy (1.7), Macbeth lists every reason not to kill Duncan but acknowledges he has only &ldquo;vaulting ambition&rdquo; to drive him. He decides not to proceed &mdash; but Lady Macbeth attacks his manhood and outlines a practical plan (drug the guards, use their daggers), persuading him to commit the murder.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Scenes</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; 1.1 &mdash; The witches&apos; opening scene: &ldquo;Fair is foul, and foul is fair&rdquo;</li>
                  <li>&bull; 1.2 &mdash; The Captain&apos;s report: Macbeth&apos;s battlefield heroism established</li>
                  <li>&bull; 1.3 &mdash; The witches&apos; three prophecies on the heath; Macbeth&apos;s first aside about murder</li>
                  <li>&bull; 1.4 &mdash; Duncan names Malcolm heir; Macbeth&apos;s &ldquo;Stars, hide your fires&rdquo; aside</li>
                  <li>&bull; 1.5 &mdash; Lady Macbeth reads the letter; &ldquo;unsex me here&rdquo; soliloquy</li>
                  <li>&bull; 1.7 &mdash; Macbeth&apos;s &ldquo;If it were done&rdquo; soliloquy; Lady Macbeth&apos;s persuasion</li>
                </ul>
              </div>
            </div>

            {/* Act 2 */}
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">2</span>
                Act 2 &mdash; The Murder of Duncan
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Banquo, unable to sleep, tells Macbeth he has dreamed of the Weird Sisters. Macbeth lies, claiming he does not think of them. Left alone, Macbeth hallucinates a dagger leading him towards Duncan&apos;s chamber (&ldquo;Is this a dagger which I see before me, / The handle toward my hand?&rdquo;). He murders Duncan offstage while his guards sleep, drugged by Lady Macbeth. Immediately wracked with guilt, he returns carrying the bloody daggers. He is horrified: he could not say &ldquo;Amen&rdquo; when the guards mumbled a prayer, and he believes he heard a voice cry &ldquo;Sleep no more! / Macbeth does murder sleep.&rdquo; He declares that &ldquo;all great Neptune&apos;s ocean&rdquo; cannot wash the blood from his hands.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Lady Macbeth, composed and practical, takes the daggers back and smears the sleeping guards with Duncan&apos;s blood to frame them, dismissing Macbeth&apos;s terror with &ldquo;A little water clears us of this deed.&rdquo; The porter provides brief comic relief, stumbling drunkenly to answer the gate and joking about being the porter of hell-gate &mdash; a scene loaded with dramatic irony, as the castle has indeed become a kind of hell. Macduff and Lennox arrive. Macduff discovers Duncan&apos;s body and raises the alarm (&ldquo;O horror, horror, horror! / Tongue nor heart cannot conceive nor name thee!&rdquo;). Macbeth kills the guards, claiming it was done in fury at their apparent crime. Malcolm and Donalbain, fearing for their own lives, flee to England and Ireland respectively, inadvertently casting suspicion on themselves. Macbeth travels to Scone to be crowned King of Scotland. An Old Man and Ross discuss the unnatural events that accompanied the murder: an owl killed a falcon, Duncan&apos;s horses turned wild and ate each other, and darkness has blotted out the day.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Scenes</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; 2.1 &mdash; The dagger soliloquy: &ldquo;Is this a dagger which I see before me?&rdquo;</li>
                  <li>&bull; 2.2 &mdash; The murder; &ldquo;Will all great Neptune&apos;s ocean wash this blood?&rdquo;; Lady Macbeth&apos;s composure</li>
                  <li>&bull; 2.3 &mdash; The porter scene (dramatic irony); discovery of Duncan&apos;s body by Macduff</li>
                  <li>&bull; 2.4 &mdash; Unnatural events in nature &mdash; pathetic fallacy reflecting the cosmic consequences of regicide</li>
                </ul>
              </div>
            </div>

            {/* Act 3 */}
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">3</span>
                Act 3 &mdash; Banquo&apos;s Murder and the Banquet
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Now king, Macbeth is consumed by insecurity. In a soliloquy, he reveals that &ldquo;To be thus is nothing, / But to be safely thus&rdquo; &mdash; being king is worthless without security. He fears the witches&apos; prophecy that Banquo&apos;s descendants will be kings, meaning he has &ldquo;filed [defiled] my mind&rdquo; and &ldquo;mine eternal jewel / Given to the common enemy of man&rdquo; (sold his soul) for Banquo&apos;s children&apos;s benefit. Crucially, he no longer consults Lady Macbeth but hires murderers independently, manipulating them by questioning their manhood &mdash; mirroring Lady Macbeth&apos;s earlier tactic.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Lady Macbeth, excluded from his plans, reveals her own growing despair: &ldquo;Nought&apos;s had, all&apos;s spent, / Where our desire is got without content.&rdquo; Macbeth tells her his mind is &ldquo;full of scorpions&rdquo; but hints at a coming deed without sharing details (&ldquo;Be innocent of the knowledge, dearest chuck&rdquo;). The murderers kill Banquo but Fleance escapes &mdash; a critical failure, as the prophecy about Banquo&apos;s royal line remains unfulfilled. At a grand state banquet, Macbeth sees Banquo&apos;s ghost sitting in his chair. He reacts with visible terror, nearly revealing his guilt to the assembled lords. Lady Macbeth desperately tries to control the situation, telling the thanes it is a familiar affliction and privately accusing Macbeth of cowardice. The ghost returns a second time before vanishing. Macbeth resolves to visit the witches again. Lennox and a lord discuss the state of Scotland, revealing that Macduff has gone to the English court to seek Malcolm&apos;s help in raising an army against Macbeth&apos;s tyranny.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Scenes</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; 3.1 &mdash; Macbeth&apos;s soliloquy on Banquo; hiring the murderers</li>
                  <li>&bull; 3.2 &mdash; &ldquo;O, full of scorpions is my mind, dear wife!&rdquo; &mdash; growing estrangement</li>
                  <li>&bull; 3.3 &mdash; Banquo&apos;s murder; Fleance&apos;s escape</li>
                  <li>&bull; 3.4 &mdash; The banquet scene &mdash; Banquo&apos;s ghost; &ldquo;I am in blood / Stepp&apos;d in so far&rdquo;</li>
                  <li>&bull; 3.6 &mdash; Lennox&apos;s ironic commentary on Macbeth&apos;s tyranny; news of Macduff&apos;s flight to England</li>
                </ul>
              </div>
            </div>

            {/* Act 4 */}
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">4</span>
                Act 4 &mdash; The Apparitions and Macduff&apos;s Family
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Macbeth visits the witches and demands answers. They conjure three apparitions: an armed head warns &ldquo;Beware Macduff&rdquo;; a bloody child proclaims &ldquo;none of woman born / Shall harm Macbeth&rdquo;; and a crowned child holding a tree declares he will not be vanquished &ldquo;until / Great Birnam Wood to high Dunsinane Hill / Shall come against him.&rdquo; Macbeth feels invincible, dismissing the seemingly impossible conditions. But when he asks about Banquo&apos;s line, the witches show a procession of eight kings followed by Banquo&apos;s ghost &mdash; confirming that Banquo&apos;s descendants will rule. Significantly, the second witch remarks &ldquo;By the pricking of my thumbs, / Something wicked this way comes&rdquo; when Macbeth arrives &mdash; even the witches now consider him wicked.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When Macbeth learns Macduff has fled to England, he orders the murder of Lady Macduff and her children &mdash; an act of pure, purposeless cruelty with no strategic value. Scene 4.2 shows Lady Macduff&apos;s distress at her husband&apos;s departure, her witty and tender conversation with her son, and then the brutal murder of both. This is the play&apos;s most shocking moment and marks Macbeth&apos;s complete moral descent from reluctant murderer to conscienceless tyrant.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                In England (4.3), Malcolm tests Macduff&apos;s loyalty by pretending to be unfit to rule, claiming he is lustful, greedy, and possesses none of the &ldquo;king-becoming graces.&rdquo; When Macduff despairs for Scotland (&ldquo;Bleed, bleed, poor country!&rdquo;), Malcolm reveals it was a test and confirms his virtue. Ross arrives with the devastating news of the Macduff family&apos;s slaughter. Macduff&apos;s raw grief (&ldquo;All my pretty ones? / Did you say all?&rdquo;) is one of the play&apos;s most emotionally powerful moments. When Malcolm tells him to &ldquo;dispute it like a man,&rdquo; Macduff replies, &ldquo;I shall do so; / But I must also feel it as a man&rdquo; &mdash; redefining masculinity as encompassing emotional depth. His grief is channelled into resolve: &ldquo;Front to front / Bring thou this fiend of Scotland and myself.&rdquo;
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Scenes</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; 4.1 &mdash; The three apparitions; the show of eight kings; &ldquo;Something wicked this way comes&rdquo;</li>
                  <li>&bull; 4.2 &mdash; The murder of Lady Macduff and her son &mdash; Macbeth&apos;s most monstrous act</li>
                  <li>&bull; 4.3 &mdash; Malcolm&apos;s testing of Macduff; Macduff&apos;s grief: &ldquo;He has no children&rdquo;; &ldquo;I must also feel it as a man&rdquo;</li>
                </ul>
              </div>
            </div>

            {/* Act 5 */}
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-700 dark:text-red-300">5</span>
                Act 5 &mdash; Downfall and Death
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Lady Macbeth, consumed by guilt, sleepwalks through the castle, watched by a gentlewoman and a doctor. She obsessively tries to wash imaginary blood from her hands: &ldquo;Out, damned spot! out, I say!&rdquo; She speaks in fragmented prose (a stark shift from her earlier controlled verse), reliving the murders: &ldquo;Yet who would have thought the old man to have had so much blood in him?&rdquo; and &ldquo;All the perfumes of Arabia will not sweeten this little hand.&rdquo; The doctor declares &ldquo;More needs she the divine than the physician&rdquo; &mdash; her sickness is spiritual, not physical.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Meanwhile, the Scottish lords Angus, Lennox, Menteith, and Caithness join Malcolm&apos;s forces. They describe Macbeth&apos;s rule as diseased: &ldquo;He cannot buckle his distemper&apos;d cause / Within the belt of rule.&rdquo; Macbeth, fortified at Dunsinane, oscillates between defiance and despair. Malcolm orders his soldiers to cut branches from Birnam Wood as camouflage, unwittingly fulfilling the third apparition&apos;s prophecy.
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Macbeth receives news of Lady Macbeth&apos;s death (almost certainly suicide) and delivers his most famous nihilistic soliloquy: &ldquo;Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day, / To the last syllable of recorded time.&rdquo; Life is now &ldquo;a tale / Told by an idiot, full of sound and fury, / Signifying nothing.&rdquo; When a messenger reports that Birnam Wood appears to be moving, Macbeth&apos;s confidence cracks. In the final battle, Macbeth kills Young Siward but encounters Macduff. He boasts that no man born of woman can harm him, but Macduff reveals he was &ldquo;from his mother&apos;s womb / Untimely ripp&apos;d&rdquo; &mdash; born by Caesarean section, not naturally &ldquo;of woman born.&rdquo; Macbeth, realising the equivocating prophecies have betrayed him, briefly considers surrender but chooses to fight and die. Macduff kills him and presents his head to Malcolm, who is hailed as the new King of Scotland. Malcolm&apos;s final speech restores order: he promotes the thanes to earls and invites all to his coronation at Scone.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Scenes</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; 5.1 &mdash; Lady Macbeth&apos;s sleepwalking scene: &ldquo;Out, damned spot!&rdquo;</li>
                  <li>&bull; 5.3 &mdash; Macbeth&apos;s defiance; &ldquo;I have liv&apos;d long enough&rdquo;</li>
                  <li>&bull; 5.5 &mdash; Lady Macbeth&apos;s death; &ldquo;Tomorrow, and tomorrow, and tomorrow&rdquo; soliloquy; Birnam Wood moves</li>
                  <li>&bull; 5.7 &mdash; Macbeth kills Young Siward</li>
                  <li>&bull; 5.8 &mdash; Macduff reveals his birth; Macbeth&apos;s death; Malcolm crowned king</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section id="characters" title="Character Profiles" badge="10 Characters" colour="bg-purple-600">
            <div className="space-y-6">
              {/* Macbeth */}
              <SubSection id="char-macbeth" title="Macbeth" defaultOpen>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Tragic Hero</span>
                    <span className="rounded-full bg-purple-500/15 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:text-purple-300">Protagonist</span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Thane &rarr; King &rarr; Tyrant</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <p><strong>Role:</strong> Thane of Glamis, then Thane of Cawdor, then King of Scotland. The play&apos;s tragic hero whose downfall is driven by ambition and moral weakness.</p>
                    <p><strong>Key traits:</strong> Brave, ambitious, imaginative, guilt-ridden, impressionable, increasingly ruthless, ultimately nihilistic.</p>
                    <p><strong>Character arc:</strong> Macbeth begins as a valiant, honoured warrior &mdash; &ldquo;brave Macbeth,&rdquo; &ldquo;Bellona&apos;s bridegroom&rdquo; &mdash; who is rewarded by a grateful king. The witches&apos; prophecy awakens a latent ambition that Lady Macbeth fans into action. He murders Duncan reluctantly, tormented by guilt (hallucinated dagger, inability to say &ldquo;Amen,&rdquo; voices crying &ldquo;Sleep no more&rdquo;). As king, he grows paranoid and orders Banquo&apos;s murder without consulting Lady Macbeth, marking his independence in evil. The ghost at the banquet shows his guilt is still active. By Act 4, he orders the pointless massacre of the Macduff family, demonstrating moral collapse. In Act 5, having lost his wife, his allies, and his will to live, he delivers the nihilistic &ldquo;Tomorrow&rdquo; soliloquy &mdash; ambition has led to utter meaninglessness. Yet he retains a tragic, residual courage, choosing to fight rather than surrender. He is not a simple villain: Shakespeare ensures we see his inner torment at every stage, making him a figure of both horror and pity.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Quote
                      text="Stars, hide your fires; / Let not light see my black and deep desires"
                      speaker="Macbeth"
                      act="Act 1, Scene 4"
                      analysis="An aside revealing Macbeth harbours murderous thoughts even before Lady Macbeth's influence. The imperative 'hide' shows he knows his desires are wrong. The metaphor of stars/light vs black desires establishes the light/dark motif. Crucially, this shows ambition was already in him -- the witches did not create it."
                    />
                    <Quote
                      text="Is this a dagger which I see before me, / The handle toward my hand?"
                      speaker="Macbeth"
                      act="Act 2, Scene 1"
                      analysis="The hallucinated dagger embodies the play's supernatural/psychological ambiguity. Is it a supernatural sign or a projection of his guilty desire? The handle pointing toward him suggests invitation. His inability to determine if it is real mirrors his inability to distinguish right from wrong."
                    />
                    <Quote
                      text="Will all great Neptune's ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine, / Making the green one red"
                      speaker="Macbeth"
                      act="Act 2, Scene 2"
                      analysis="Macbeth's guilt is so vast it would stain the entire ocean red. The Latinate 'multitudinous seas incarnadine' followed by the blunt monosyllables 'making the green one red' shows his mind swinging between educated rhetoric and raw horror. His guilt is presented as infinite and permanent."
                    />
                    <Quote
                      text="O, full of scorpions is my mind, dear wife!"
                      speaker="Macbeth"
                      act="Act 3, Scene 2"
                      analysis="The scorpion metaphor shows his mind is poisoned, tormenting him from within. 'Dear wife' is poignant -- even as he descends into tyranny, he reaches for intimacy. But he is now planning Banquo's murder without her, showing their growing estrangement."
                    />
                    <Quote
                      text="Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day, / To the last syllable of recorded time"
                      speaker="Macbeth"
                      act="Act 5, Scene 5"
                      analysis="Spoken on learning of Lady Macbeth's death. Life has become meaningless repetition. The plodding monosyllables and sibilance create a tone of exhausted nihilism. 'Told by an idiot, full of sound and fury, signifying nothing' -- total existential despair. Ambition has brought him to the opposite of what he sought."
                    />
                  </div>
                </div>
              </SubSection>

              {/* Lady Macbeth */}
              <SubSection id="char-ladymacbeth" title="Lady Macbeth">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Tragic Figure</span>
                    <span className="rounded-full bg-purple-500/15 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:text-purple-300">Catalyst</span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Powerful &rarr; Broken</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <p><strong>Role:</strong> Macbeth&apos;s wife and the driving force behind Duncan&apos;s murder. One of Shakespeare&apos;s most complex female characters.</p>
                    <p><strong>Key traits:</strong> Ambitious, manipulative, determined, intelligent, ultimately vulnerable, guilt-ridden.</p>
                    <p><strong>Character arc:</strong> When we first meet her, Lady Macbeth is ambitious, ruthless, and apparently stronger-willed than her husband. She calls on evil spirits to &ldquo;unsex&rdquo; her, rejecting femininity and compassion to pursue power. She manipulates Macbeth by questioning his manhood, plans Duncan&apos;s murder in practical detail, and remains calm when Macbeth panics afterwards (&ldquo;A little water clears us of this deed&rdquo;). However, her control cracks: she is notably absent from the planning of Banquo&apos;s murder (Macbeth acts alone, telling her &ldquo;Be innocent of the knowledge&rdquo;), and she admits &ldquo;Nought&apos;s had, all&apos;s spent, / Where our desire is got without content.&rdquo; By Act 5, she has been destroyed by guilt. Her sleepwalking scene &mdash; obsessively trying to wash imagined blood from her hands, speaking in fragmented prose rather than controlled verse &mdash; mirrors and devastatingly inverts her earlier dismissal of guilt. She almost certainly dies by suicide. The Macbeths&apos; guilt trajectories are inverse: he begins guilt-ridden and becomes hardened; she begins controlled and is ultimately overwhelmed.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Quote
                      text="Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty"
                      speaker="Lady Macbeth"
                      act="Act 1, Scene 5"
                      analysis="She invokes supernatural evil to strip away her femininity. 'Unsex me' directly challenges Jacobean gender roles. 'Crown to the toe' -- ironic use of 'crown' foreshadowing her pursuit of the actual crown. The imperative verbs show her forceful will. She recognises that cruelty requires her to abandon her nature."
                    />
                    <Quote
                      text="Look like the innocent flower, / But be the serpent under't"
                      speaker="Lady Macbeth"
                      act="Act 1, Scene 5"
                      analysis="Biblical imagery -- the serpent is Satan in the Garden of Eden. She explicitly instructs Macbeth to practise deception. The contrast between 'flower' and 'serpent' encapsulates the play's appearance vs reality theme. It also reveals Lady Macbeth as the strategist behind the deception."
                    />
                    <Quote
                      text="Had he not resembled / My father as he slept, I had done't"
                      speaker="Lady Macbeth"
                      act="Act 2, Scene 2"
                      analysis="A rare moment of vulnerability revealing she is not entirely ruthless. She could not kill Duncan herself because he looked like her father. This cracks her facade of total coldness and foreshadows her eventual breakdown. Her humanity survives despite her attempts to suppress it."
                    />
                    <Quote
                      text="Nought's had, all's spent, / Where our desire is got without content"
                      speaker="Lady Macbeth"
                      act="Act 3, Scene 2"
                      analysis="They have everything they wanted but no satisfaction. 'Nought's had, all's spent' -- they have gained nothing and lost everything. The rhyming couplet gives it a proverbial, bitter wisdom. This soliloquy shows Lady Macbeth's growing despair, spoken when she is alone."
                    />
                    <Quote
                      text="Out, damned spot! out, I say! [...] who would have thought the old man to have had so much blood in him?"
                      speaker="Lady Macbeth"
                      act="Act 5, Scene 1"
                      analysis="The irony is devastating: she who said 'a little water clears us of this deed' now cannot wash the imaginary blood away. 'Damned' carries both its curse meaning and the religious sense -- she knows she is damned. Her fragmented prose (she previously spoke in controlled verse) shows her mental collapse."
                    />
                  </div>
                </div>
              </SubSection>

              {/* Banquo */}
              <SubSection id="char-banquo" title="Banquo">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">Moral Foil</span>
                    <span className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">Victim</span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Loyal &rarr; Murdered</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <p><strong>Role:</strong> Macbeth&apos;s fellow general and friend. Father of Fleance. Ancestor of King James I&apos;s Stuart dynasty (a deliberate compliment to the king).</p>
                    <p><strong>Key traits:</strong> Brave, wise, morally cautious, loyal, perceptive &mdash; but arguably complicit through silence.</p>
                    <p><strong>Character arc:</strong> Banquo acts as a moral foil to Macbeth. He hears the same prophecies but does not act on them. He warns Macbeth that &ldquo;instruments of darkness tell us truths&rdquo; to betray us &mdash; showing moral wisdom Macbeth ignores. However, Banquo is not entirely innocent: he suspects Macbeth of foul play (&ldquo;Thou play&apos;dst most foully for&apos;t&rdquo;) but does not act, perhaps because the prophecy also benefits his own descendants. His murder in Act 3 removes the last moral check on Macbeth. As a ghost at the banquet, he represents Macbeth&apos;s guilt made visible and the impossibility of escaping consequences. Historically, Shakespeare presents Banquo as virtuous to flatter James I, whose claim to the English throne traced through Banquo&apos;s line.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Quote
                      text="The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence"
                      speaker="Banquo"
                      act="Act 1, Scene 3"
                      analysis="Banquo warns that the witches use small truths (the Cawdor prophecy) to lure victims into larger traps. He is exactly right, but Macbeth ignores this wisdom. Shows Banquo's moral clarity and his role as a voice of reason."
                    />
                    <Quote
                      text="Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou play'dst most foully for't"
                      speaker="Banquo"
                      act="Act 3, Scene 1"
                      analysis="Banquo suspects Macbeth but does not act -- possibly because the prophecy promises his own line will be kings. The tricolon 'King, Cawdor, Glamis' shows he has been keeping careful track. 'Most foully' is a direct (private) accusation of murder."
                    />
                    <Quote
                      text="Merciful powers, / Restrain in me the cursed thoughts that nature / Gives way to in repose"
                      speaker="Banquo"
                      act="Act 2, Scene 1"
                      analysis="Banquo prays to resist the temptation of the witches' prophecy, admitting he has 'cursed thoughts' about it. This shows he is tempted like Macbeth but chooses to resist, making him a moral contrast rather than a simply virtuous figure."
                    />
                  </div>
                </div>
              </SubSection>

              {/* Macduff */}
              <SubSection id="char-macduff" title="Macduff">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">Hero</span>
                    <span className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">Agent of Justice</span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Suspicious &rarr; Avenging</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <p><strong>Role:</strong> Thane of Fife. Discovers Duncan&apos;s body. Ultimately kills Macbeth and restores the legitimate monarchy.</p>
                    <p><strong>Key traits:</strong> Principled, courageous, patriotic, emotionally honest, grief-stricken, morally upright.</p>
                    <p><strong>Character arc:</strong> Macduff is the play&apos;s agent of justice. He is the first to discover Duncan&apos;s murder and is immediately suspicious of Macbeth. Unlike the other thanes, he refuses to attend Macbeth&apos;s coronation at Scone and later flees to England to raise an army. His family pays the terrible price for his principled stance. When he learns of their murder, his raw grief (&ldquo;All my pretty ones? / Did you say all?&rdquo;) is devastating. His response to Malcolm&apos;s instruction to &ldquo;dispute it like a man&rdquo; &mdash; &ldquo;I shall do so; / But I must also feel it as a man&rdquo; &mdash; offers the play&apos;s most powerful redefinition of masculinity. His Caesarean birth fulfils the apparition&apos;s prophecy, allowing him to defeat Macbeth. He represents righteous vengeance, emotional honesty, and the restoration of legitimate order.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Quote
                      text="O horror, horror, horror! / Tongue nor heart cannot conceive nor name thee!"
                      speaker="Macduff"
                      act="Act 2, Scene 3"
                      analysis="Macduff's reaction to discovering Duncan's body. The triple repetition of 'horror' shows overwhelming shock. 'Tongue nor heart' -- the crime is beyond both speech and comprehension. His genuine emotion contrasts with Macbeth's performed grief."
                    />
                    <Quote
                      text="I shall do so; / But I must also feel it as a man"
                      speaker="Macduff"
                      act="Act 4, Scene 3"
                      analysis="In response to Malcolm telling him to 'dispute it like a man,' Macduff redefines masculinity. Unlike Macbeth, who equates manhood with violence, Macduff sees feeling grief as manly. This directly challenges the toxic masculinity that drives the play's tragedy."
                    />
                    <Quote
                      text="Bleed, bleed, poor country!"
                      speaker="Macduff"
                      act="Act 4, Scene 3"
                      analysis="Scotland personified as a wounded body bleeding under Macbeth's tyranny. Connects to the blood imagery throughout but reframes it: now it is the country bleeding, not just individuals. Shows Macduff's patriotism and distress."
                    />
                  </div>
                </div>
              </SubSection>

              {/* Duncan */}
              <SubSection id="char-duncan" title="King Duncan">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">Ideal King</span>
                    <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Victim</span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Trusting &rarr; Murdered</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <p><strong>Role:</strong> King of Scotland. His murder is the play&apos;s inciting crime, and his goodness makes the act more horrific.</p>
                    <p><strong>Key traits:</strong> Gracious, trusting, generous, dignified, naive, the embodiment of legitimate authority.</p>
                    <p><strong>Character arc:</strong> Duncan is presented as the ideal king: gracious, trusting, generous, and loved by his subjects. He rewards loyalty, speaks gently, and praises Macbeth&apos;s castle as having a &ldquo;pleasant seat.&rdquo; His very goodness makes his murder more horrific &mdash; he is a guest in Macbeth&apos;s home, making the crime a violation of hospitality (a sacred bond in medieval Scotland) as well as regicide and a sin against God&apos;s anointed ruler. However, he is somewhat naive &mdash; he trusted the original Thane of Cawdor too, admitting &ldquo;There&apos;s no art to find the mind&apos;s construction in the face&rdquo; just as Macbeth, the new Cawdor, enters plotting his murder. He embodies the divine right of kings and legitimate authority; his death disrupts the Great Chain of Being and throws nature into chaos.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Quote
                      text="There's no art / To find the mind's construction in the face"
                      speaker="Duncan"
                      act="Act 1, Scene 4"
                      analysis="Deeply ironic: Duncan says you can't read treachery in someone's face -- said just as Macbeth enters, already plotting his murder. Reinforces appearance vs reality and Duncan's fatal naivety. He has learned nothing from the first Cawdor's betrayal."
                    />
                    <Quote
                      text="This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself / Unto our gentle senses"
                      speaker="Duncan"
                      act="Act 1, Scene 6"
                      analysis="Duncan praises the castle where he will be murdered. The irony is excruciating -- the 'pleasant' air and 'gentle senses' contrast with the violent murder being planned inside. The imagery of sweetness and nature contrasts with the 'fog and filthy air' of the witches."
                    />
                    <Quote
                      text="He was a gentleman on whom I built / An absolute trust"
                      speaker="Duncan"
                      act="Act 1, Scene 4"
                      analysis="Said about the traitorous first Thane of Cawdor, but Shakespeare ensures Macbeth (the new Cawdor) enters immediately after. Duncan's fatal flaw is repeated: he places 'absolute trust' in those who will betray him. The dramatic irony is devastating."
                    />
                  </div>
                </div>
              </SubSection>

              {/* Malcolm */}
              <SubSection id="char-malcolm" title="Malcolm">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">Legitimate Heir</span>
                    <span className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">Restorer of Order</span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Fugitive &rarr; King</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <p><strong>Role:</strong> Duncan&apos;s eldest son and rightful heir. Flees to England, then returns to defeat Macbeth and restore legitimate rule.</p>
                    <p><strong>Key traits:</strong> Cautious, shrewd, politically astute, virtuous, patient &mdash; the opposite of his trusting father.</p>
                    <p><strong>Character arc:</strong> Malcolm flees to England after his father&apos;s murder &mdash; a wise survival strategy, though it makes him look guilty. In Act 4, he tests Macduff&apos;s loyalty by falsely claiming to be worse than Macbeth (lustful, greedy, without any &ldquo;king-becoming graces&rdquo;). When Macduff reacts with genuine despair, Malcolm reveals the truth. This scene shows Malcolm as shrewd and cautious &mdash; the opposite of his trusting father. He has learned from Duncan&apos;s mistakes. He represents legitimate kingship and order. His final speech, promoting the thanes to earls (a reference to James I&apos;s historical Anglicisation of Scotland) and inviting all to his coronation, signals Scotland&apos;s restoration.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Quote
                      text="This tyrant, whose sole name blisters our tongues, / Was once thought honest"
                      speaker="Malcolm"
                      act="Act 4, Scene 3"
                      analysis="Malcolm reflects on how Macbeth was once trusted. 'Sole name blisters our tongues' -- even saying Macbeth's name is painful, suggesting his tyranny has corrupted language itself. Links to appearance vs reality: even evil can appear honest."
                    />
                    <Quote
                      text="Dispute it like a man"
                      speaker="Malcolm"
                      act="Act 4, Scene 3"
                      analysis="Malcolm tells Macduff to channel his grief into action. This represents the conventional view of masculinity -- suppress emotion, take revenge. Macduff's response ('I must also feel it as a man') corrects this, offering a richer definition."
                    />
                    <Quote
                      text="We shall not spend a large expense of time / Before we reckon with your several loves"
                      speaker="Malcolm"
                      act="Act 5, Scene 8"
                      analysis="Malcolm's measured, controlled final speech contrasts with Macbeth's passionate, chaotic language. He promises to reward loyalty -- the opposite of Macbeth's reign of fear. The transition from tyranny to legitimate rule is complete."
                    />
                  </div>
                </div>
              </SubSection>

              {/* The Witches */}
              <SubSection id="char-witches" title="The Witches (Weird Sisters)">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="rounded-full bg-violet-500/15 px-2.5 py-0.5 text-xs font-semibold text-violet-700 dark:text-violet-300">Supernatural</span>
                    <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Catalysts</span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Ambiguous</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <p><strong>Role:</strong> Three supernatural beings who prophesy Macbeth&apos;s rise and manipulate events through equivocation. They open and shape the play but never directly command Macbeth to act.</p>
                    <p><strong>Key traits:</strong> Ambiguous, sinister, equivocating, non-human, chaotic, morally subversive.</p>
                    <p><strong>Character arc:</strong> The witches are deliberately ambiguous. Shakespeare never confirms whether they create Macbeth&apos;s ambition or merely reveal what is already there. They speak in trochaic tetrameter (the reverse of normal iambic pentameter), rhyming couplets, and paradoxes (&ldquo;Fair is foul, and foul is fair&rdquo;), setting them apart from the human characters linguistically. They represent the supernatural, moral disorder, and the disruption of the natural world. For a Jacobean audience, witchcraft was a genuine fear &mdash; James I himself wrote <em>Daemonologie</em> and personally oversaw witch trials. In Act 4, their prophecies are technically true but deliberately misleading (equivocation), reflecting contemporary anxieties about the Gunpowder Plot conspirators. The witches raise the play&apos;s central question: fate versus free will. Banquo describes them as androgynous: &ldquo;You should be women, / And yet your beards forbid me to interpret / That you are so&rdquo; &mdash; they blur every boundary, including gender.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Quote
                      text="Fair is foul, and foul is fair: / Hover through the fog and filthy air"
                      speaker="The Witches"
                      act="Act 1, Scene 1"
                      analysis="The play's opening line establishes the theme of appearance vs reality -- nothing is what it seems. The paradox 'fair is foul' collapses moral boundaries. The alliteration of 'fog,' 'foul,' and 'filthy' creates a sinister, suffocating atmosphere. Macbeth later echoes this with 'So foul and fair a day,' linking him to the witches before they even meet."
                    />
                    <Quote
                      text="All hail, Macbeth, that shalt be king hereafter!"
                      speaker="Third Witch"
                      act="Act 1, Scene 3"
                      analysis="The prophecy that ignites the entire plot. Note: they say he SHALL be king -- not that he must kill Duncan. The prophecy is a catalyst, not an instruction, which is key to the fate vs free will debate."
                    />
                    <Quote
                      text="Double, double toil and trouble; / Fire burn and cauldron bubble"
                      speaker="The Witches"
                      act="Act 4, Scene 1"
                      analysis="The incantation's trochaic rhythm (stressed-unstressed, opposite of normal speech) marks the witches as Other. 'Double' suggests duplication and deception. The scene's grotesque ingredients emphasise the unnatural."
                    />
                    <Quote
                      text="By the pricking of my thumbs, / Something wicked this way comes"
                      speaker="Second Witch"
                      act="Act 4, Scene 1"
                      analysis="Even the witches now call Macbeth 'wicked' -- he has descended below even their moral level. He comes to them voluntarily this time, seeking evil rather than being sought by it. This marks a crucial shift in his moral agency."
                    />
                  </div>
                </div>
              </SubSection>

              {/* Lady Macduff */}
              <SubSection id="char-ladymacduff" title="Lady Macduff">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">Foil to Lady Macbeth</span>
                    <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Innocent Victim</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <p><strong>Role:</strong> Macduff&apos;s wife. Her brief appearance and murder in Act 4 marks the moral nadir of Macbeth&apos;s tyranny.</p>
                    <p><strong>Key traits:</strong> Maternal, witty, loving, angry, vulnerable, natural &mdash; everything Lady Macbeth has suppressed.</p>
                    <p><strong>Character arc:</strong> Though her scene is brief (4.2), Lady Macduff is dramatically significant. She represents the domestic, maternal sphere that Lady Macbeth rejects when she calls on spirits to &ldquo;unsex&rdquo; her. Her anger at Macduff for leaving is natural and human. Her witty, tender conversation with her son contrasts sharply with the Macbeths&apos; childless, guilt-ridden marriage. Her murder, along with her children&apos;s, is the play&apos;s most shocking act of violence because it targets innocents for no military or strategic gain &mdash; it is pure tyranny. It marks Macbeth&apos;s complete moral descent and galvanises Macduff into action. She serves as a dramatic foil to Lady Macbeth: where Lady Macbeth invokes darkness and rejects motherhood, Lady Macduff embodies maternal love and domestic normality.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Quote
                      text="He loves us not; / He wants the natural touch"
                      speaker="Lady Macduff"
                      act="Act 4, Scene 2"
                      analysis="She accuses Macduff of lacking 'natural' feeling by abandoning his family. 'Natural touch' connects to the play's wider theme of the natural vs unnatural. Ironically, Macduff's absence is motivated by patriotism -- he is fighting for Scotland's future."
                    />
                    <Quote
                      text="Whither should I fly? / I have done no harm"
                      speaker="Lady Macduff"
                      act="Act 4, Scene 2"
                      analysis="Her innocence makes her murder more horrifying. In Macbeth's Scotland, innocence is no protection. The rhetorical question emphasises her helplessness. She recognises that 'to do harm / Is often laudable' in this corrupted world."
                    />
                    <Quote
                      text="He has kill'd me, mother"
                      speaker="Young Macduff (her son)"
                      act="Act 4, Scene 2"
                      analysis="The son's dying words to his mother are devastatingly simple. The murder of a child onstage would have shocked Shakespeare's audience profoundly. This moment ensures the audience's complete condemnation of Macbeth."
                    />
                  </div>
                </div>
              </SubSection>

              {/* Ross */}
              <SubSection id="char-ross" title="Ross">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">Messenger</span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Diplomat &amp; Survivor</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <p><strong>Role:</strong> A Scottish nobleman and kinsman of Macduff. Acts as a messenger and go-between, delivering crucial news throughout the play. He is the play&apos;s most politically adaptable figure.</p>
                    <p><strong>Key traits:</strong> Diplomatic, cautious, politically shrewd, evasive, ultimately loyal to Scotland.</p>
                    <p><strong>Character arc:</strong> Ross appears more frequently than any minor character, functioning as the play&apos;s news-bearer and political barometer. In Act 1, he brings the good news of Macbeth&apos;s new title. In Act 2, he discusses the unnatural portents following Duncan&apos;s murder. In Act 4, he initially equivocates when speaking to Lady Macduff, then travels to England to deliver the devastating news of her family&apos;s slaughter to Macduff &mdash; one of the play&apos;s most emotionally charged moments. His hesitation before breaking the news (&ldquo;Your castle is surprised; your wife and babes / Savagely slaughter&apos;d&rdquo;) shows the weight of what he carries. Ross represents the ordinary nobility caught between tyranny and conscience: he survives by being careful with his words, but ultimately sides with the forces of justice. His journey mirrors Scotland&apos;s: from loyalty to Duncan, through the horror of Macbeth&apos;s reign, to the restoration under Malcolm.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Quote
                      text="Your castle is surprised; your wife and babes / Savagely slaughter'd"
                      speaker="Ross"
                      act="Act 4, Scene 3"
                      analysis="The bluntness of 'savagely slaughter'd' is devastating after Ross's earlier hesitation. He tried to soften the blow but ultimately must deliver the raw truth. This moment triggers Macduff's grief and the audience's final condemnation of Macbeth."
                    />
                    <Quote
                      text="Alas, poor country! / Almost afraid to know itself"
                      speaker="Ross"
                      act="Act 4, Scene 3"
                      analysis="Scotland personified as too frightened to examine its own state. 'Afraid to know itself' suggests collective trauma and denial under Macbeth's tyranny. The country has lost its identity under illegitimate rule."
                    />
                    <Quote
                      text="Things at the worst will cease, or else climb upward / To what they were before"
                      speaker="Ross"
                      act="Act 4, Scene 2"
                      analysis="Ross tries to comfort Lady Macduff with the idea that things cannot get worse -- they will either stop or improve. The dramatic irony is terrible: things are about to get much worse for her. Shows Ross's diplomatic instinct to soften harsh realities."
                    />
                  </div>
                </div>
              </SubSection>

              {/* Lennox */}
              <SubSection id="char-lennox" title="Lennox">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">Voice of Scotland</span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Cautious Dissenter</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <p><strong>Role:</strong> A Scottish nobleman who gradually sees through Macbeth&apos;s pretence. His ironic speeches in Act 3, Scene 6 voice the growing opposition to Macbeth&apos;s rule.</p>
                    <p><strong>Key traits:</strong> Observant, politically careful, increasingly sceptical, ironic, courageous in dissent.</p>
                    <p><strong>Character arc:</strong> Lennox begins as a loyal thane attending Duncan. He accompanies Macduff to discover Duncan&apos;s body and describes the &ldquo;unruly night&rdquo; of terrible storms &mdash; connecting the regicide to cosmic disorder. His most important scene is 3.6, where he speaks with biting irony about Macbeth&apos;s convenient explanations: how &ldquo;noble&rdquo; it was for Macbeth to kill the guards in &ldquo;pious rage,&rdquo; how &ldquo;monstrous&rdquo; it would have been for Malcolm and Donalbain to kill their father. His sarcasm makes clear that Scotland&apos;s nobility sees through Macbeth but must speak in coded language to survive. By Act 5, he has openly joined Malcolm&apos;s forces. Lennox represents how tyranny forces even the honourable to use equivocation &mdash; ironically, the very practice the porter scene mocks. Shakespeare uses him to show the audience that Scotland is not deceived by Macbeth, only silenced by fear.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Quote
                      text="The night has been unruly [...] Some say, the earth / Was feverous and did shake"
                      speaker="Lennox"
                      act="Act 2, Scene 3"
                      analysis="Lennox describes the night of Duncan's murder. Pathetic fallacy: the earth itself responds to the crime with storms and earthquakes. 'Feverous' personifies the earth as diseased by the regicide. Links to the Great Chain of Being -- killing the king disorders nature."
                    />
                    <Quote
                      text="Men must not walk too late"
                      speaker="Lennox"
                      act="Act 3, Scene 6"
                      analysis="Lennox's ironic commentary on Macbeth's Scotland: people who question Macbeth end up dead. The understatement ('walk too late') masks a damning accusation. He must speak in code because open criticism would be fatal -- this IS the tyranny."
                    />
                    <Quote
                      text="His message ere he come, that a swift blessing / May soon return to this our suffering country"
                      speaker="Lennox"
                      act="Act 3, Scene 6"
                      analysis="Lennox prays for Malcolm's return and Scotland's liberation. 'Suffering country' personifies Scotland as a patient in pain. He hopes for 'blessing' -- a word that connects legitimate kingship with divine approval, contrasting with Macbeth's cursed rule."
                    />
                  </div>
                </div>
              </SubSection>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title="Major Themes" badge="8 Themes" colour="bg-emerald-600">
            <div className="space-y-8">
              {/* Ambition */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  Ambition
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Ambition is the play&apos;s driving force and its central warning. Shakespeare presents ambition itself as neither good nor bad &mdash; Macbeth&apos;s bravery in battle is driven by ambition, and ambition for Scotland motivates Malcolm. It is <em>unchecked</em> ambition, &ldquo;vaulting ambition, which o&apos;erleaps itself,&rdquo; that is destructive. Macbeth knows murder is wrong (his soliloquies are full of moral reasoning) but chooses ambition over conscience. Lady Macbeth&apos;s ambition is arguably even fiercer &mdash; she drives the initial plan and recognises that Macbeth has ambition but lacks &ldquo;the illness should attend it.&rdquo; The play shows ambition destroying everything: Macbeth&apos;s honour, his marriage, his sanity, and ultimately his life. It functions as a cautionary tale for the Jacobean audience about the dangers of overreaching one&apos;s ordained place in the Great Chain of Being. Macbeth&apos;s trajectory &mdash; from honoured warrior to nihilistic tyrant whose life &ldquo;signif[ies] nothing&rdquo; &mdash; demonstrates that ambition without moral constraint leads not to fulfilment but to existential emptiness.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself / And falls on the other"
                    speaker="Macbeth"
                    act="Act 1, Scene 7"
                    analysis="Macbeth acknowledges he has no justification for murder except ambition. The horse-riding metaphor ('spur,' 'vaulting') suggests ambition as an uncontrollable force. 'O'erleaps itself and falls' foreshadows his downfall -- ambition will carry him too far."
                  />
                  <Quote
                    text="Thou wouldst be great; / Art not without ambition, but without / The illness should attend it"
                    speaker="Lady Macbeth"
                    act="Act 1, Scene 5"
                    analysis="Lady Macbeth identifies the problem: Macbeth has ambition but lacks the ruthlessness ('illness') to act on it. The word 'illness' is revealing -- she sees cruelty as a necessary sickness, suggesting even she recognises its moral cost."
                  />
                </div>
              </div>

              {/* Power */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  Power and Kingship
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Shakespeare contrasts legitimate power (Duncan, Malcolm) with tyrannical power (Macbeth). Duncan&apos;s power is characterised by generosity, trust, and love &mdash; his subjects fight willingly for him. He embodies the &ldquo;king-becoming graces&rdquo; that Malcolm later lists: &ldquo;justice, verity, temperance, stableness, / Bounty, perseverance, mercy, lowliness.&rdquo; Macbeth&apos;s power, by contrast, is maintained through fear, secrecy, and violence. As king, he is suspicious, isolated, and unable to enjoy his position: &ldquo;To be thus is nothing, but to be safely thus.&rdquo; The play reflects Jacobean beliefs about the divine right of kings: a king appointed by God rules justly, while a usurper brings chaos to the entire natural order. The unnatural events (storms, horses eating each other, an owl killing a falcon) reflect the cosmic consequences of illegitimate power. Macbeth&apos;s reign is described as a disease: Caithness says Scotland &ldquo;bleeds&rdquo; under him, and Malcolm is the &ldquo;medicine&rdquo; to cure it. Power gained through violence must be maintained through violence, creating a cycle that ultimately consumes the tyrant.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="To be thus is nothing, / But to be safely thus"
                    speaker="Macbeth"
                    act="Act 3, Scene 1"
                    analysis="Being king means nothing if you aren't secure. This reveals the fundamental emptiness of power gained through crime. Macbeth can never feel safe because his power has no legitimate basis -- he can only protect it through more violence, creating a vicious cycle."
                  />
                  <Quote
                    text="I think our country sinks beneath the yoke; / It weeps, it bleeds, and each new day a gash / Is added to her wounds"
                    speaker="Malcolm"
                    act="Act 4, Scene 3"
                    analysis="Scotland personified as a body oppressed ('yoke'), weeping, and bleeding under Macbeth's tyranny. Each day brings new wounds. This extended metaphor connects Macbeth's illegitimate power to national suffering and contrasts with Duncan's nurturing rule."
                  />
                </div>
              </div>

              {/* Guilt */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-indigo-500" />
                  Guilt and Conscience
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Guilt in <em>Macbeth</em> is presented as an inescapable, corrosive force that manifests physically and psychologically. It appears before, during, and after the act of murder. Before Duncan&apos;s death, Macbeth hallucinates a dagger; immediately after, he hears voices saying he has &ldquo;murder&apos;d sleep,&rdquo; cannot say &ldquo;Amen,&rdquo; and sees his hands as so bloody they would turn the ocean red. Later, Banquo&apos;s ghost appears only to him, guilt made visible at the worst possible moment. Lady Macbeth, who initially seems immune to guilt (&ldquo;A little water clears us of this deed&rdquo;), is eventually destroyed by it &mdash; her sleepwalking scene shows her subconscious torment, obsessively washing imagined blood from her hands in prose that has replaced her earlier controlled verse. Blood is the play&apos;s central symbol of guilt: permanent, spreading, impossible to wash away. Shakespeare suggests that guilt is the natural moral response to sin and that it cannot be suppressed, only displaced. The Macbeths&apos; guilt trajectories are inverse: he begins guilt-ridden and becomes hardened (&ldquo;I am in blood / Stepp&apos;d in so far&rdquo;); she begins controlled and is ultimately overwhelmed. The doctor&apos;s verdict that Lady Macbeth needs &ldquo;the divine&rdquo; rather than &ldquo;the physician&rdquo; frames guilt as a spiritual condition &mdash; it cannot be cured by medicine, only by confession and repentance, which is impossible given the magnitude of their crimes.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Will all great Neptune's ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine, / Making the green one red"
                    speaker="Macbeth"
                    act="Act 2, Scene 2"
                    analysis="Macbeth's guilt is so vast it would stain the entire ocean red. The Latinate 'multitudinous seas incarnadine' followed by the blunt monosyllables 'making the green one red' shows his mind swinging between educated rhetoric and raw horror. His guilt is presented as infinite and permanent."
                  />
                  <Quote
                    text="Here's the smell of the blood still. All the / perfumes of Arabia will not sweeten this little hand"
                    speaker="Lady Macbeth"
                    act="Act 5, Scene 1"
                    analysis="Mirrors Macbeth's Neptune speech but is even more personal -- 'this little hand' is intimate and vulnerable. The shift from sight (Macbeth sees blood) to smell (she smells it) suggests guilt has penetrated deeper into her psyche. She is experiencing it through her unconscious."
                  />
                </div>
              </div>

              {/* Supernatural */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-violet-500" />
                  The Supernatural
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The supernatural pervades the play from its opening scene. The witches, the prophecies, the apparitions, Banquo&apos;s ghost, the floating dagger, Lady Macbeth&apos;s invocation of spirits, and the unnatural darkness all contribute to an atmosphere of evil and moral disorder. For a Jacobean audience, the supernatural was not fictional &mdash; witchcraft was punishable by death, and James I was personally fascinated by demonology. Shakespeare uses the supernatural to explore whether evil comes from external forces or from within. The witches never tell Macbeth to kill anyone &mdash; they present possibilities, and he chooses to act. Lady Macbeth&apos;s invocation (&ldquo;Come, you spirits / That tend on mortal thoughts&rdquo;) is a deliberate, voluntary act of summoning evil. The dagger and Banquo&apos;s ghost are left ambiguous: are they genuine supernatural manifestations, or psychological projections of guilt? This ambiguity is central to the play&apos;s exploration of moral responsibility. The witches speak in trochaic tetrameter (stressed-unstressed, reversing the normal iambic pattern), which aurally marks them as agents of inversion &mdash; everything they touch is backwards, reversed, subverted.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Is this a dagger which I see before me, / The handle toward my hand?"
                    speaker="Macbeth"
                    act="Act 2, Scene 1"
                    analysis="The hallucinated dagger embodies the supernatural/psychological ambiguity. Is it a supernatural sign pushing him toward murder, or a projection of his own desire? The handle pointing toward him suggests invitation. Macbeth himself cannot tell if it is real."
                  />
                  <Quote
                    text="Come, you spirits / That tend on mortal thoughts, unsex me here"
                    speaker="Lady Macbeth"
                    act="Act 1, Scene 5"
                    analysis="She deliberately summons supernatural evil. This is an act of will, not victimhood. She allies herself with dark forces voluntarily. The imperative 'Come' shows agency -- she commands the spirits rather than being commanded by them."
                  />
                </div>
              </div>

              {/* Masculinity */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  Masculinity and Gender
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play interrogates what it means to be a man. Lady Macbeth manipulates Macbeth by equating manhood with violence and fearlessness: &ldquo;When you durst do it, then you were a man.&rdquo; She herself seeks to reject femininity (&ldquo;unsex me here&rdquo;) to be capable of cruelty, viewing compassion and nurturing as female weaknesses incompatible with power. Macbeth internalises this toxic definition, using the same tactic on the murderers: &ldquo;Are you so gospell&apos;d / To pray for this good man?&rdquo; The witches blur gender boundaries entirely &mdash; Banquo notes they &ldquo;should be women, / And yet your beards forbid me to interpret / That you are so.&rdquo; However, Shakespeare offers an alternative model through Macduff, who insists he &ldquo;must also feel it as a man&rdquo; &mdash; genuine masculinity includes emotional sensitivity, grief, and moral courage. The play suggests that the equation of manhood with violence is destructive and ultimately self-defeating: Lady Macbeth&apos;s attempt to suppress her femininity leads to her mental collapse; Macbeth&apos;s pursuit of &ldquo;manly&rdquo; violence leads to tyranny and death. Lady Macduff&apos;s maternal love and her son&apos;s innocence offer a contrasting domestic sphere that Macbeth&apos;s violence destroys but cannot erase.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="When you durst do it, then you were a man; / And to be more than what you were, you would / Be so much more the man"
                    speaker="Lady Macbeth"
                    act="Act 1, Scene 7"
                    analysis="Lady Macbeth defines manhood as the willingness to commit murder. This toxic definition drives Macbeth to kill Duncan. The circular logic ('more than what you were... more the man') traps Macbeth -- to prove his masculinity, he must always escalate violence."
                  />
                  <Quote
                    text="I dare do all that may become a man; / Who dares do more is none"
                    speaker="Macbeth"
                    act="Act 1, Scene 7"
                    analysis="Macbeth briefly offers a better definition of masculinity -- doing what is appropriate, not what is extreme. 'Who dares do more is none' -- exceeding proper bounds makes you less than a man, not more. Lady Macbeth immediately overrides this healthier view."
                  />
                </div>
              </div>

              {/* Loyalty / Betrayal */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-teal-500" />
                  Loyalty and Betrayal
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play is structured around acts of betrayal that escalate in severity. The original Thane of Cawdor betrays Duncan; Macbeth then repeats this pattern on a grander scale. Macbeth betrays his king (regicide), his guest (violating the sacred bond of hospitality), his friend (Banquo&apos;s murder), and his country (tyranny). In Act 1, Scene 7, Macbeth himself catalogues the bonds he would violate: he is Duncan&apos;s &ldquo;kinsman,&rdquo; &ldquo;subject,&rdquo; and &ldquo;host&rdquo; &mdash; all relationships that should protect Duncan, not endanger him. In contrast, characters like Macduff and Malcolm demonstrate loyalty to Scotland even at enormous personal cost &mdash; Macduff loses his entire family. Banquo is loyal to his conscience but arguably disloyal to Duncan by keeping silent about his suspicions. The play shows that betrayal of natural bonds &mdash; between king and subject, host and guest, friend and friend &mdash; unleashes chaos throughout the natural and political order. Loyalty, when restored through Malcolm&apos;s accession, brings peace and order back to Scotland. Duncan&apos;s own reflection &mdash; &ldquo;He was a gentleman on whom I built / An absolute trust&rdquo; &mdash; is repeated ironically as Macbeth, the new Cawdor, enters plotting a greater betrayal.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="He's here in double trust: / First, as I am his kinsman and his subject, / Strong both against the deed; then, as his host, / Who should against his murderer shut the door, / Not bear the knife myself"
                    speaker="Macbeth"
                    act="Act 1, Scene 7"
                    analysis="Macbeth lists the multiple bonds he would violate: kinship, feudal loyalty, and hospitality. 'Double trust' understates it -- it is triple. He knows exactly how wrong the murder is. The fact that he proceeds despite this clear moral reasoning makes his choice more damning."
                  />
                  <Quote
                    text="The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence"
                    speaker="Banquo"
                    act="Act 1, Scene 3"
                    analysis="Banquo warns that the witches use small truths to lure victims into larger traps. He is exactly right -- the Cawdor prophecy's fulfilment is the 'honest trifle' that leads Macbeth to 'deepest consequence.' The word 'betray' connects the witches to the play's wider theme of betrayal."
                  />
                </div>
              </div>

              {/* Fate vs Free Will */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-pink-500" />
                  Fate vs Free Will
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  This is perhaps the play&apos;s most debated theme. The witches prophesy that Macbeth will be king, but they never say he must murder Duncan to achieve it. Banquo receives similar prophecies but does not commit murder &mdash; proving that the prophecy alone is not sufficient cause. This suggests free will: Macbeth <em>chooses</em> his path. He even acknowledges this initially: &ldquo;If chance will have me king, why, chance may crown me / Without my stir.&rdquo; Yet he abandons this rational position almost immediately. The prophecies all come true, and Macbeth echoes the witches&apos; language (&ldquo;So foul and fair a day&rdquo;) before even meeting them, suggesting a predestined connection. The Act 4 apparitions are technically truthful but deliberately misleading &mdash; this equivocation gives Macbeth false confidence while fulfilling the letter of prophecy. Shakespeare deliberately leaves the question unresolved, creating dramatic tension. The play can be read as an argument for free will (Macbeth makes choices at every stage and could have chosen differently) or as a tragedy of fate (the witches seem to know the future with certainty). Most productively, it explores the space between: Macbeth may be predisposed to ambition, but he still makes conscious decisions that he knows to be wrong.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="If chance will have me king, why, chance may crown me / Without my stir"
                    speaker="Macbeth"
                    act="Act 1, Scene 3"
                    analysis="Initially, Macbeth considers letting fate take its course. This rational response is quickly abandoned. The fact that he has this thought and rejects it strengthens the case for free will: he knows he has a choice and chooses violence."
                  />
                  <Quote
                    text="Come what come may, / Time and the hour runs through the roughest day"
                    speaker="Macbeth"
                    act="Act 1, Scene 3"
                    analysis="Macbeth resolves to wait and see what happens. The proverbial tone suggests resignation to fate. But this passivity is temporary -- by Scene 4, he is already wishing 'Stars, hide your fires.' The shift from patience to action shows free will overriding the option to let fate decide."
                  />
                </div>
              </div>

              {/* Appearance vs Reality */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-muted0" />
                  Appearance vs Reality
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  &ldquo;Fair is foul, and foul is fair&rdquo; &mdash; the play&apos;s opening line announces that nothing is what it seems. This theme operates at every level. Macbeth appears to be a loyal thane while planning murder; Lady Macbeth advises him to &ldquo;look like the innocent flower, / But be the serpent under&apos;t.&rdquo; Duncan cannot read the Thane of Cawdor&apos;s treachery in his face &mdash; nor can he read Macbeth&apos;s, despite the ironic repetition. The witches&apos; prophecies are technically true but deliberately misleading: Birnam Wood does &ldquo;come&rdquo; to Dunsinane as camouflage, and Macbeth is killed by a man &ldquo;not of woman born&rdquo; through Caesarean section. Lady Macbeth plays the gracious hostess while plotting regicide. Macbeth performs grief at Duncan&apos;s death while being the murderer. The porter&apos;s reference to &ldquo;equivocators&rdquo; links this theme to the Gunpowder Plot, where Catholic conspirators used equivocation (technically true but misleading statements). The play is full of dramatic irony, where the audience sees truths that characters cannot. Even self-knowledge is unreliable: Lady Macbeth believes she can handle guilt (&ldquo;a little water&rdquo;); Macbeth believes the prophecies make him invincible. The theme reinforces the idea that evil distorts reality and that surfaces cannot be trusted in a world where moral order has been disrupted.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Look like the innocent flower, / But be the serpent under't"
                    speaker="Lady Macbeth"
                    act="Act 1, Scene 5"
                    analysis="Biblical imagery -- the serpent is Satan in the Garden of Eden. Lady Macbeth explicitly instructs deception. The contrast between 'flower' and 'serpent' encapsulates the play's core theme. It also reveals Lady Macbeth as the strategist behind the false appearances."
                  />
                  <Quote
                    text="There's no art / To find the mind's construction in the face"
                    speaker="Duncan"
                    act="Act 1, Scene 4"
                    analysis="Deeply ironic: Duncan says you can't read treachery in someone's face -- said just as Macbeth enters plotting his murder. He said this about the FIRST Cawdor's betrayal, yet he is about to be betrayed by the SECOND Cawdor. He has learned nothing."
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section id="quotations" title="Key Quotations Bank" badge="34 Quotes" colour="bg-amber-600">
            <p className="text-sm text-muted-foreground mb-4">
              Every quotation below is tagged by character and theme. Each one can be used in multiple essay types.
              These are the most important quotations to memorise for a closed-book exam.
            </p>

            {/* By Character */}
            <div className="space-y-6">
              <h3 className="font-bold text-foreground text-base border-b border-border pb-2">Organised by Character</h3>

              <SubSection id="quotes-macbeth" title="Macbeth (10 quotes)" defaultOpen>
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact text="So foul and fair a day I have not seen" speaker="Macbeth" act="Act 1, Scene 3"
                    themes={["Appearance vs Reality", "Supernatural"]}
                    analysis="Echoes the witches' 'fair is foul' before he meets them -- suggests a supernatural connection or that the seeds of evil are already in him. Establishes the appearance vs reality theme from his very first words." />
                  <QuoteCompact text="Stars, hide your fires; / Let not light see my black and deep desires" speaker="Macbeth" act="Act 1, Scene 4"
                    themes={["Ambition", "Appearance vs Reality"]}
                    analysis="An aside revealing murderous thoughts before Lady Macbeth's influence. The imperative 'hide' shows he knows his desires are wrong. Light/dark motif: he wants darkness to conceal his ambition." />
                  <QuoteCompact text="If it were done when 'tis done, then 'twere well / It were done quickly" speaker="Macbeth" act="Act 1, Scene 7"
                    themes={["Guilt", "Ambition"]}
                    analysis="The tortured syntax mirrors his tortured mind. He wants the murder to have no consequences ('if it were done when 'tis done'). The conditional 'if' reveals he knows it won't end there." />
                  <QuoteCompact text="I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself" speaker="Macbeth" act="Act 1, Scene 7"
                    themes={["Ambition"]}
                    analysis="He acknowledges he has no justification except ambition. The horse-riding metaphor ('spur,' 'vaulting') suggests ambition as uncontrollable. 'O'erleaps itself and falls' foreshadows his downfall." />
                  <QuoteCompact text="Is this a dagger which I see before me, / The handle toward my hand?" speaker="Macbeth" act="Act 2, Scene 1"
                    themes={["Supernatural", "Guilt"]}
                    analysis="The hallucinated dagger embodies the play's supernatural/psychological ambiguity. Is it a sign or a projection of guilt? The handle pointing toward him suggests invitation to murder." />
                  <QuoteCompact text="Will all great Neptune's ocean wash this blood / Clean from my hand?" speaker="Macbeth" act="Act 2, Scene 2"
                    themes={["Guilt"]}
                    analysis="Guilt so vast it would stain the ocean red. The Latinate 'multitudinous seas incarnadine' contrasts with the blunt 'making the green one red' -- his mind swings between rhetoric and raw horror." />
                  <QuoteCompact text="Methought I heard a voice cry 'Sleep no more! / Macbeth does murder sleep'" speaker="Macbeth" act="Act 2, Scene 2"
                    themes={["Guilt", "Supernatural"]}
                    analysis="Sleep represents innocence and natural order. By murdering Duncan, Macbeth has murdered his own ability to rest. The personification suggests he has killed something fundamental in himself." />
                  <QuoteCompact text="O, full of scorpions is my mind, dear wife!" speaker="Macbeth" act="Act 3, Scene 2"
                    themes={["Guilt", "Power"]}
                    analysis="His mind is poisoned, tormenting him from within. 'Dear wife' is poignant -- he reaches for intimacy while planning murder without her. The scorpion metaphor shows internal torment." />
                  <QuoteCompact text="I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er" speaker="Macbeth" act="Act 3, Scene 4"
                    themes={["Guilt", "Power", "Fate vs Free Will"]}
                    analysis="The river of blood metaphor shows he feels he cannot turn back. 'Tedious' is chillingly casual -- murder has become routine. He is now trapped in a cycle of violence, choosing continuation over repentance." />
                  <QuoteCompact text="Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day" speaker="Macbeth" act="Act 5, Scene 5"
                    themes={["Ambition", "Power"]}
                    analysis="Life has become meaningless repetition. The plodding monosyllables create exhausted nihilism. 'Told by an idiot, full of sound and fury, signifying nothing' -- total despair. Ambition has led to the opposite of what he sought." />
                </div>
              </SubSection>

              <SubSection id="quotes-ladymacbeth" title="Lady Macbeth (7 quotes)">
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact text="Come, you spirits / That tend on mortal thoughts, unsex me here" speaker="Lady Macbeth" act="Act 1, Scene 5"
                    themes={["Supernatural", "Gender", "Ambition"]}
                    analysis="She invokes supernatural evil to strip away femininity. 'Unsex me' challenges Jacobean gender roles. 'Crown to the toe top-full of direst cruelty' -- ironic use of 'crown'. The imperative verbs show her forceful will." />
                  <QuoteCompact text="Look like the innocent flower, / But be the serpent under't" speaker="Lady Macbeth" act="Act 1, Scene 5"
                    themes={["Appearance vs Reality"]}
                    analysis="Biblical imagery -- the serpent is Satan. She instructs deception explicitly. The flower/serpent contrast encapsulates the play's core theme. Reveals her as the strategist behind the false appearances." />
                  <QuoteCompact text="Come to my woman's breasts, / And take my milk for gall" speaker="Lady Macbeth" act="Act 1, Scene 5"
                    themes={["Gender", "Supernatural"]}
                    analysis="Asks spirits to replace nurturing breast milk with bitter poison. Rejects motherhood and femininity. Disturbing inversion of the natural maternal role. Links to the play's broader disruption of natural order." />
                  <QuoteCompact text="When you durst do it, then you were a man" speaker="Lady Macbeth" act="Act 1, Scene 7"
                    themes={["Gender", "Ambition"]}
                    analysis="She defines manhood as willingness to commit murder. This toxic definition drives Macbeth to kill Duncan. The circular logic traps him -- to prove masculinity, he must escalate violence." />
                  <QuoteCompact text="Had he not resembled / My father as he slept, I had done't" speaker="Lady Macbeth" act="Act 2, Scene 2"
                    themes={["Guilt", "Gender"]}
                    analysis="A rare moment of vulnerability: she could not kill Duncan because he looked like her father. This cracks her facade and foreshadows her breakdown. Her humanity survives despite her attempts to suppress it." />
                  <QuoteCompact text="A little water clears us of this deed" speaker="Lady Macbeth" act="Act 2, Scene 2"
                    themes={["Guilt", "Appearance vs Reality"]}
                    analysis="Dismisses guilt as easily washed away -- deeply ironic given her later obsessive handwashing. 'A little water' vs 'all great Neptune's ocean' shows how differently she and Macbeth process guilt at this stage." />
                  <QuoteCompact text="Out, damned spot! out, I say!" speaker="Lady Macbeth" act="Act 5, Scene 1"
                    themes={["Guilt", "Supernatural"]}
                    analysis="The devastating irony: she who dismissed guilt now cannot escape it. 'Damned' carries religious weight -- she knows she is spiritually condemned. Fragmented prose replaces controlled verse, showing mental collapse." />
                </div>
              </SubSection>

              <SubSection id="quotes-witches" title="The Witches (5 quotes)">
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact text="Fair is foul, and foul is fair" speaker="The Witches" act="Act 1, Scene 1"
                    themes={["Appearance vs Reality", "Supernatural"]}
                    analysis="The play's opening line collapses moral boundaries. The paradox announces that nothing is what it seems. The alliteration of 'f' sounds creates sinister atmosphere. Macbeth later echoes this unconsciously." />
                  <QuoteCompact text="When the battle's lost and won" speaker="Second Witch" act="Act 1, Scene 1"
                    themes={["Fate vs Free Will", "Appearance vs Reality"]}
                    analysis="A paradox: every battle is simultaneously lost and won depending on perspective. Establishes moral ambiguity and the witches' role in blurring boundaries between opposites." />
                  <QuoteCompact text="All hail, Macbeth, that shalt be king hereafter!" speaker="Third Witch" act="Act 1, Scene 3"
                    themes={["Fate vs Free Will", "Ambition"]}
                    analysis="The prophecy that ignites the plot. They say he SHALL be king -- not that he must kill. The prophecy is a catalyst, not an instruction, which is key to the fate vs free will debate." />
                  <QuoteCompact text="Double, double toil and trouble; / Fire burn and cauldron bubble" speaker="The Witches" act="Act 4, Scene 1"
                    themes={["Supernatural"]}
                    analysis="Trochaic rhythm (opposite of normal speech) marks the witches as Other. 'Double' suggests duplication and deception. The grotesque ingredients emphasise the unnatural." />
                  <QuoteCompact text="By the pricking of my thumbs, / Something wicked this way comes" speaker="Second Witch" act="Act 4, Scene 1"
                    themes={["Supernatural", "Power"]}
                    analysis="Even the witches call Macbeth 'wicked' -- he has descended below their moral level. He comes voluntarily now, seeking evil rather than being sought. A crucial shift in his agency and moral status." />
                </div>
              </SubSection>

              <SubSection id="quotes-banquo" title="Banquo (3 quotes)">
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact text="The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence" speaker="Banquo" act="Act 1, Scene 3"
                    themes={["Loyalty & Betrayal", "Supernatural"]}
                    analysis="Banquo warns the witches use small truths to lure victims into larger traps. He is exactly right, but Macbeth ignores this wisdom. Shows Banquo's moral clarity as a foil." />
                  <QuoteCompact text="Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou play'dst most foully for't" speaker="Banquo" act="Act 3, Scene 1"
                    themes={["Loyalty & Betrayal", "Ambition"]}
                    analysis="Banquo suspects Macbeth but does not act -- possibly because the prophecy benefits his own line. The tricolon shows careful tracking. 'Most foully' is a direct private accusation." />
                  <QuoteCompact text="Merciful powers, / Restrain in me the cursed thoughts that nature / Gives way to in repose" speaker="Banquo" act="Act 2, Scene 1"
                    themes={["Fate vs Free Will", "Supernatural"]}
                    analysis="Banquo prays to resist the witches' temptation. He admits to 'cursed thoughts' but chooses to fight them -- making him a moral contrast to Macbeth, who yields to temptation." />
                </div>
              </SubSection>

              <SubSection id="quotes-macduff" title="Macduff (3 quotes)">
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact text="O horror, horror, horror! / Tongue nor heart cannot conceive nor name thee!" speaker="Macduff" act="Act 2, Scene 3"
                    themes={["Loyalty & Betrayal"]}
                    analysis="Triple repetition of 'horror' shows overwhelming shock at discovering Duncan's body. The crime is beyond speech and comprehension. His genuine emotion contrasts with Macbeth's performed grief." />
                  <QuoteCompact text="I shall do so; / But I must also feel it as a man" speaker="Macduff" act="Act 4, Scene 3"
                    themes={["Gender"]}
                    analysis="Macduff redefines masculinity to include emotional depth. Unlike Macbeth, who equates manhood with violence, Macduff sees feeling grief as manly. The play's most important statement on gender." />
                  <QuoteCompact text="Bleed, bleed, poor country!" speaker="Macduff" act="Act 4, Scene 3"
                    themes={["Power", "Loyalty & Betrayal"]}
                    analysis="Scotland personified as a bleeding body under tyranny. Connects to blood imagery but reframes it: now the country bleeds, not just individuals. Shows patriotic distress." />
                </div>
              </SubSection>

              <SubSection id="quotes-duncan" title="Duncan (3 quotes)">
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact text="There's no art / To find the mind's construction in the face" speaker="Duncan" act="Act 1, Scene 4"
                    themes={["Appearance vs Reality"]}
                    analysis="Deeply ironic: he says this about the first Cawdor's betrayal just as the second Cawdor (Macbeth) enters plotting his murder. Duncan's fatal naivety repeated." />
                  <QuoteCompact text="This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself" speaker="Duncan" act="Act 1, Scene 6"
                    themes={["Appearance vs Reality"]}
                    analysis="Duncan praises the castle where he will be murdered. Excruciating irony: 'pleasant' air contrasts with the 'fog and filthy air' of the witches. The appearance of safety masks deadly reality." />
                  <QuoteCompact text="He was a gentleman on whom I built / An absolute trust" speaker="Duncan" act="Act 1, Scene 4"
                    themes={["Loyalty & Betrayal", "Appearance vs Reality"]}
                    analysis="Said about the traitorous first Cawdor, but Macbeth (the new Cawdor) enters immediately after. Duncan's 'absolute trust' is his fatal flaw. Dramatic irony at its most devastating." />
                </div>
              </SubSection>

              <SubSection id="quotes-other" title="Other Characters (3 quotes)">
                <div className="grid gap-3 sm:grid-cols-2">
                  <QuoteCompact text="A falcon, towering in her pride of place, / Was by a mousing owl hawk'd at and kill'd" speaker="Old Man" act="Act 2, Scene 4"
                    themes={["Power", "Supernatural"]}
                    analysis="An unnatural event reflecting the murder: a lowly owl killing a noble falcon mirrors the thane killing his king. Disruption of natural hierarchy reflects the Great Chain of Being -- regicide throws nature into chaos." />
                  <QuoteCompact text="Alas, poor country! / Almost afraid to know itself" speaker="Ross" act="Act 4, Scene 3"
                    themes={["Power"]}
                    analysis="Scotland personified as too frightened to examine its own state under Macbeth's tyranny. 'Afraid to know itself' suggests collective trauma and national identity crisis." />
                  <QuoteCompact text="Men must not walk too late" speaker="Lennox" act="Act 3, Scene 6"
                    themes={["Power", "Appearance vs Reality"]}
                    analysis="Lennox's ironic commentary: people who question Macbeth end up dead. The understatement masks a damning accusation. He must speak in code because open criticism would be fatal." />
                </div>
              </SubSection>

              {/* By Theme cross-reference */}
              <h3 className="font-bold text-foreground text-base border-b border-border pb-2 mt-8">Quick Theme Cross-Reference</h3>
              <div className="rounded-lg border border-border bg-muted p-4 overflow-x-auto">
                <p className="text-sm text-muted-foreground mb-3">Use this table to find quotations by theme for your essay planning.</p>
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 font-bold text-foreground">Theme</th>
                      <th className="py-2 font-bold text-foreground">Key Quotations</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-red-700 dark:text-red-300 whitespace-nowrap">Ambition</td>
                      <td className="py-2">&ldquo;Vaulting ambition, which o&apos;erleaps itself&rdquo; &bull; &ldquo;Stars, hide your fires&rdquo; &bull; &ldquo;Art not without ambition, but without the illness&rdquo; &bull; &ldquo;All hail, Macbeth, that shalt be king&rdquo; &bull; &ldquo;Tomorrow, and tomorrow&rdquo;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-amber-700 dark:text-amber-300 whitespace-nowrap">Power</td>
                      <td className="py-2">&ldquo;To be thus is nothing, but to be safely thus&rdquo; &bull; &ldquo;Full of scorpions is my mind&rdquo; &bull; &ldquo;I am in blood stepp&apos;d in so far&rdquo; &bull; &ldquo;Bleed, bleed, poor country&rdquo; &bull; &ldquo;Something wicked this way comes&rdquo;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-indigo-700 whitespace-nowrap">Guilt</td>
                      <td className="py-2">&ldquo;Will all great Neptune&apos;s ocean wash this blood?&rdquo; &bull; &ldquo;Macbeth does murder sleep&rdquo; &bull; &ldquo;Out, damned spot!&rdquo; &bull; &ldquo;All the perfumes of Arabia&rdquo; &bull; &ldquo;A little water clears us&rdquo; &bull; &ldquo;Had he not resembled my father&rdquo;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-violet-700 dark:text-violet-300 whitespace-nowrap">Supernatural</td>
                      <td className="py-2">&ldquo;Fair is foul, and foul is fair&rdquo; &bull; &ldquo;Is this a dagger?&rdquo; &bull; &ldquo;Come, you spirits, unsex me here&rdquo; &bull; &ldquo;Double, double toil and trouble&rdquo; &bull; &ldquo;So foul and fair a day&rdquo;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-blue-700 dark:text-blue-300 whitespace-nowrap">Gender</td>
                      <td className="py-2">&ldquo;When you durst do it, then you were a man&rdquo; &bull; &ldquo;Unsex me here&rdquo; &bull; &ldquo;Take my milk for gall&rdquo; &bull; &ldquo;I must also feel it as a man&rdquo; &bull; &ldquo;I dare do all that may become a man&rdquo;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-teal-700 whitespace-nowrap">Loyalty</td>
                      <td className="py-2">&ldquo;He&apos;s here in double trust&rdquo; &bull; &ldquo;Instruments of darkness tell us truths&rdquo; &bull; &ldquo;Thou play&apos;dst most foully&rdquo; &bull; &ldquo;An absolute trust&rdquo; &bull; &ldquo;O horror, horror, horror!&rdquo;</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold text-pink-700 dark:text-pink-300 whitespace-nowrap">Fate vs Free Will</td>
                      <td className="py-2">&ldquo;If chance will have me king&rdquo; &bull; &ldquo;Come what come may&rdquo; &bull; &ldquo;All hail, Macbeth, that shalt be king&rdquo; &bull; &ldquo;When the battle&apos;s lost and won&rdquo; &bull; &ldquo;Restrain in me the cursed thoughts&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-muted-foreground whitespace-nowrap">Appearance vs Reality</td>
                      <td className="py-2">&ldquo;Fair is foul&rdquo; &bull; &ldquo;Look like the innocent flower&rdquo; &bull; &ldquo;No art to find the mind&apos;s construction&rdquo; &bull; &ldquo;So foul and fair a day&rdquo; &bull; &ldquo;A little water clears us&rdquo; &bull; &ldquo;Stars, hide your fires&rdquo;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section id="context" title="Historical Context" colour="bg-cyan-600">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground">King James I and the Union of Crowns</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <em>Macbeth</em> was written c.1606, shortly after James VI of Scotland became James I of England in 1603 (the Union of the Crowns). Shakespeare&apos;s company, the Lord Chamberlain&apos;s Men, was renamed the King&apos;s Men under James&apos;s patronage. The play is carefully designed to flatter the new king: Banquo, the ancestor of the Stuart line, is presented as noble and virtuous (unlike in Shakespeare&apos;s historical source, Holinshed&apos;s <em>Chronicles</em>, where Banquo was Macbeth&apos;s accomplice). The show of eight kings in Act 4 represents James&apos;s royal lineage stretching into the future. Setting the play in Scotland was itself a compliment to James&apos;s heritage. The play may have been first performed before James at Hampton Court in 1606.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Gunpowder Plot (1605)</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Just a year before <em>Macbeth</em> was written, Guy Fawkes and Catholic conspirators attempted to blow up Parliament and kill James I on 5 November 1605. The plot&apos;s discovery led to national anxiety about treason and regicide. <em>Macbeth</em> dramatises these fears: the murder of a righteous king by a trusted subject, the equivocation (double-meaning language) used by the conspirators (the porter scene explicitly references &ldquo;equivocators&rdquo;, a direct allusion to Father Henry Garnet, who was tried for his role in the plot and who defended the practice of equivocation), and the ultimate punishment of traitors. The play reinforced the message that regicide is the ultimate sin, punished by God and nature.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Divine Right of Kings</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  James I strongly promoted the belief that kings were appointed by God and answerable only to God. He wrote <em>The True Law of Free Monarchies</em> (1598) to articulate this doctrine. Killing a king was therefore not just murder but a sin against God&apos;s will &mdash; an act of sacrilege. This is why Duncan&apos;s murder is presented as so catastrophic: it is an act against the divine order. Macbeth recognises this himself in 1.7: Duncan&apos;s virtues &ldquo;will plead like angels, trumpet-tongued, against / The deep damnation of his taking-off.&rdquo; The natural disturbances that follow (darkness, storms, animals behaving unnaturally) reflect the belief that regicide disrupts the entire cosmos. Macbeth&apos;s torment and downfall serve as proof that God will punish those who violate the divine right. Malcolm&apos;s restoration at the end represents God&apos;s order being re-established.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Great Chain of Being</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Elizabethan and Jacobean society believed in a strict hierarchy ordained by God: God &rarr; Angels &rarr; King &rarr; Nobles &rarr; Commoners &rarr; Animals &rarr; Plants &rarr; Minerals. Every being had its fixed place, and disrupting this chain at any level caused chaos throughout. Macbeth&apos;s regicide breaks the chain at a fundamental level, which is why nature responds with chaos: horses eating each other (animals above acting like animals below), an owl killing a falcon (a lower bird killing a higher one &mdash; mirroring the thane killing the king), and unnatural darkness during the day. Lady Macbeth&apos;s attempt to &ldquo;unsex&rdquo; herself is also a violation of the chain &mdash; she tries to transcend her ordained gender role, which a Jacobean audience would see as an act of rebellion against divine order. The restoration of order under Malcolm represents the chain being repaired and the natural hierarchy re-established.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Witchcraft and James I</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  James I wrote <em>Daemonologie</em> (1597), a treatise on witchcraft, and personally attended witch trials &mdash; most notably the North Berwick witch trials of 1590, where supposed witches were accused of attempting to murder James by raising storms at sea. The Witchcraft Act of 1604 made practising witchcraft punishable by death. Shakespeare&apos;s witches would have been genuinely terrifying to the original audience &mdash; not the Halloween figures we think of today, but real agents of Satan. The play validates James&apos;s beliefs by presenting witchcraft as real and dangerous, while also flattering the king&apos;s expertise on the subject. The ambiguity of the witches&apos; power (do they cause events or merely predict them?) reflects contemporary debates about the nature and extent of demonic influence. Their use of equivocation &mdash; technically true statements that mislead &mdash; connects them to the Catholic conspirators of the Gunpowder Plot.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Attitudes to Gender in Jacobean England</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Women in Jacobean society were expected to be obedient, nurturing, and subordinate to men. The dominant view, rooted in both classical philosophy and Christian theology, held that women were naturally weaker in reason and more susceptible to temptation (a legacy of the Eve narrative). Lady Macbeth&apos;s rejection of these roles (&ldquo;unsex me here&rdquo;) would have been deeply shocking to the original audience. Her invocation of spirits aligns her with the witches and suggests that transgressing &ldquo;natural&rdquo; femininity requires supernatural assistance &mdash; it is, by implication, unnatural and diabolical. Her eventual mental collapse can be read as Shakespeare suggesting that such transgression leads to destruction &mdash; though modern audiences may read it more sympathetically, as the consequence of being forced into an impossible position in a patriarchal world. The witches, too, blur gender boundaries: Banquo notes they &ldquo;should be women, / And yet your beards forbid me to interpret / That you are so.&rdquo; Lady Macduff, by contrast, represents the maternal ideal; her murder therefore represents Macbeth&apos;s attack on natural womanhood itself.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section id="essay-planning" title="Essay Planning Templates" badge="5 Questions" colour="bg-orange-600">
            <p className="text-sm text-muted-foreground mb-4">
              These templates show you how to structure responses to the most common exam questions. Adapt them to fit the specific question wording.
              Each template uses the structure: <strong>Point &rarr; Evidence (quotation) &rarr; Analysis (technique + effect) &rarr; Context (link to Jacobean period)</strong>.
            </p>
            <div className="space-y-6">
              {/* Q1 Ambition */}
              <SubSection id="essay-ambition" title="&ldquo;How does Shakespeare present ambition in Macbeth?&rdquo;">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 1: Ambition as latent desire</p>
                    <p>Macbeth&apos;s ambition exists before the witches &mdash; his aside &ldquo;Stars, hide your fires&rdquo; (1.4) reveals dark desires before Lady Macbeth&apos;s influence. The imperative verb &ldquo;hide&rdquo; shows concealment of something that already exists. Link to the witches as catalysts, not creators of ambition. Context: the witches represent a Jacobean fear that temptation lurks everywhere.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 2: Lady Macbeth as the driver</p>
                    <p>Lady Macbeth&apos;s ambition is arguably stronger &mdash; &ldquo;unsex me here&rdquo; (1.5) shows her willing to sacrifice her very nature for power. Her manipulation of Macbeth&apos;s masculinity (1.7) is the tactic that overcomes his moral objections. She identifies that he has ambition but lacks &ldquo;the illness should attend it&rdquo; &mdash; &ldquo;illness&rdquo; admits the moral cost.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 3: Ambition as self-destructive</p>
                    <p>&ldquo;Vaulting ambition, which o&apos;erleaps itself&rdquo; (1.7) &mdash; the horse-riding metaphor foreshadows the fall. By Act 3, ambition has trapped him: &ldquo;I am in blood / Stepp&apos;d in so far&rdquo; &mdash; the river of blood image suggests he is drowning in the consequences. Context: link to the Great Chain of Being and the dangers of overreaching one&apos;s ordained position.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 4: The consequences &mdash; nihilism</p>
                    <p>&ldquo;Tomorrow, and tomorrow, and tomorrow&rdquo; (5.5) &mdash; ambition has led to meaninglessness, not fulfilment. Life &ldquo;signif[ies] nothing.&rdquo; The plodding monosyllables enact the tedium. Context: cautionary tale for a Jacobean audience about the self-defeating nature of unchecked ambition. Contrast with Malcolm, whose ambition for Scotland is legitimate and restorative.</p>
                  </div>
                </div>
              </SubSection>

              {/* Q2 Guilt */}
              <SubSection id="essay-guilt" title="&ldquo;How does Shakespeare present guilt in Macbeth?&rdquo;">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 1: Guilt before the act</p>
                    <p>Even before the murder, Macbeth&apos;s guilt manifests in the hallucinated dagger (2.1): &ldquo;Is this a dagger which I see before me?&rdquo; His conscience warns him. Analyse: is the dagger supernatural or psychological? Either way, it shows his mind rejecting what his hand is about to do. Link to the supernatural theme and Jacobean beliefs about guilty visions.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 2: Immediate guilt &mdash; the blood imagery</p>
                    <p>&ldquo;Will all great Neptune&apos;s ocean wash this blood / Clean from my hand?&rdquo; (2.2). Guilt as permanent, oceanic, contaminating. The shift from Latinate diction (&ldquo;multitudinous seas incarnadine&rdquo;) to blunt monosyllables (&ldquo;making the green one red&rdquo;) mirrors his mind oscillating between intellectual distance and visceral horror. Contrast with Lady Macbeth&apos;s dismissive &ldquo;a little water.&rdquo;</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 3: Guilt made visible &mdash; the ghost</p>
                    <p>Banquo&apos;s ghost (3.4) externalises Macbeth&apos;s guilt at the worst possible moment &mdash; during a public banquet. Only he can see it, suggesting it is psychological. The ghost disrupts the performance of kingship, threatening to expose his crimes. Lady Macbeth tries to control the situation but her power over him is fading.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 4: Lady Macbeth&apos;s delayed guilt</p>
                    <p>The sleepwalking scene (5.1): &ldquo;Out, damned spot!&rdquo; Her guilt surfaces in her unconscious. Prose replaces verse &mdash; her controlled language has collapsed with her controlled mind. She relives multiple murders in fragments. The doctor says she needs &ldquo;the divine&rdquo; (a priest), not &ldquo;the physician&rdquo; &mdash; guilt is framed as spiritual sickness. Context: link to religious belief in damnation and the impossibility of forgiveness without repentance.</p>
                  </div>
                </div>
              </SubSection>

              {/* Q3 Supernatural */}
              <SubSection id="essay-supernatural" title="&ldquo;How does Shakespeare present the supernatural in Macbeth?&rdquo;">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 1: The witches as agents of chaos</p>
                    <p>&ldquo;Fair is foul&rdquo; (1.1) &mdash; they invert moral order from the opening line. Their trochaic tetrameter reverses the normal iambic rhythm, linguistically marking them as agents of inversion. The paradoxes and pathetic fallacy (&ldquo;thunder and lightning&rdquo;) create atmosphere. Context: James I&apos;s <em>Daemonologie</em>, genuine contemporary fear of witchcraft, and the Witchcraft Act of 1604.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 2: Lady Macbeth&apos;s invocation</p>
                    <p>&ldquo;Come, you spirits / That tend on mortal thoughts&rdquo; (1.5) &mdash; she deliberately summons supernatural evil. This is an act of will, not victimhood. The imperative &ldquo;Come&rdquo; shows agency. She allies herself with dark forces voluntarily, aligning herself with the witches. Context: link to Jacobean fears that humans could invite demonic possession through their own moral weakness.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 3: Hallucinations &mdash; supernatural or psychological?</p>
                    <p>The dagger (2.1) and Banquo&apos;s ghost (3.4) &mdash; Shakespeare deliberately leaves it ambiguous. Macbeth asks the dagger &ldquo;Art thou not, fatal vision, sensible to feeling as to sight?&rdquo; &mdash; he cannot determine its reality. Are these genuine supernatural events or projections of guilt? This ambiguity is the play&apos;s richest interpretive question and allows multiple readings.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 4: The apparitions and equivocation</p>
                    <p>Act 4&apos;s apparitions give literally true but misleading prophecies (&ldquo;none of woman born&rdquo; = Caesarean; Birnam Wood &ldquo;moves&rdquo; as camouflage). The supernatural does not lie but does not tell the whole truth &mdash; equivocation. Context: link this directly to the Gunpowder Plot, where Catholic conspirators used equivocation, and to the porter&apos;s reference to equivocators in 2.3.</p>
                  </div>
                </div>
              </SubSection>

              {/* Q4 Masculinity */}
              <SubSection id="essay-masculinity" title="&ldquo;How does Shakespeare present masculinity in Macbeth?&rdquo;">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 1: Masculinity as violence (Lady Macbeth&apos;s view)</p>
                    <p>&ldquo;When you durst do it, then you were a man&rdquo; (1.7). Lady Macbeth equates manhood with the courage to kill. Her &ldquo;unsex me here&rdquo; (1.5) implies femininity = weakness, masculinity = capacity for cruelty. She even claims she would &ldquo;dash&apos;d the brains out&rdquo; of her own nursing baby if she had sworn to do so. This toxic definition is the play&apos;s most destructive idea.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 2: Macbeth&apos;s rejected definition</p>
                    <p>&ldquo;I dare do all that may become a man; / Who dares do more is none&rdquo; (1.7) &mdash; Macbeth briefly offers a healthier view: manhood means propriety, not excess. He is also echoing Lady Macbeth&apos;s tactic with the murderers in 3.1, showing how the toxic definition propagates. Context: link to Jacobean expectations of warrior masculinity and the martial culture that valued violence.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 3: Macduff&apos;s alternative masculinity</p>
                    <p>&ldquo;I must also feel it as a man&rdquo; (4.3) &mdash; Macduff offers a masculinity that includes emotional depth, vulnerability, and grief. He corrects Malcolm&apos;s &ldquo;Dispute it like a man&rdquo; by adding that feeling is part of being a man. He is still a warrior &mdash; he ultimately kills Macbeth &mdash; but he defines manhood through humanity, not just action. This is Shakespeare&apos;s positive model.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 4: The consequences of toxic masculinity</p>
                    <p>Lady Macbeth&apos;s rejection of femininity leads to her destruction (the sleepwalking scene). Macbeth&apos;s pursuit of &ldquo;manly&rdquo; violence leads to tyranny, isolation, and death. Lady Macduff&apos;s murder represents the destruction of the maternal, domestic sphere by toxic masculine violence. Shakespeare&apos;s message: equating masculinity exclusively with violence is self-destructive for individuals and society.</p>
                  </div>
                </div>
              </SubSection>

              {/* Q5 Lady Macbeth character */}
              <SubSection id="essay-ladymacbeth" title="&ldquo;How does Shakespeare present Lady Macbeth as a powerful character?&rdquo;">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 1: Power through language and will</p>
                    <p>Lady Macbeth commands spirits (&ldquo;Come, you spirits&rdquo;, 1.5), commands her husband (&ldquo;look like the innocent flower&rdquo;), and commands the situation after the murder. Her language is full of imperatives. She is the planner: Macbeth hesitates, she drives the action. Context: this would have been deeply transgressive for a Jacobean audience &mdash; a wife commanding and manipulating her husband inverts the expected gender hierarchy.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 2: Power through manipulation of masculinity</p>
                    <p>&ldquo;When you durst do it, then you were a man&rdquo; (1.7) &mdash; she understands that masculinity is Macbeth&apos;s psychological weak point and exploits it. She also uses shock tactics: claiming she would murder her own baby. She controls the situation after the murder when Macbeth panics, taking the daggers back and framing the guards. &ldquo;A little water clears us&rdquo; &mdash; she reduces murder to a practical problem.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 3: The loss of power</p>
                    <p>By Act 3, Macbeth acts without consulting her (&ldquo;Be innocent of the knowledge, dearest chuck&rdquo;). She is sidelined, left in the dark. At the banquet, she tries to control Macbeth&apos;s reaction to the ghost but fails &mdash; her influence is waning. &ldquo;Nought&apos;s had, all&apos;s spent&rdquo; (3.2) &mdash; she recognises their power has brought no fulfilment. Her power was always dependent on Macbeth&apos;s compliance, and as he becomes more autonomous in evil, she becomes less relevant.</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-semibold text-foreground">Paragraph 4: Power destroyed by guilt</p>
                    <p>The sleepwalking scene (5.1) shows complete reversal: the woman who commanded spirits now cannot command her own mind. Prose replaces verse. &ldquo;Out, damned spot!&rdquo; &mdash; she cannot wash away what she once dismissed with &ldquo;a little water.&rdquo; She probably dies by suicide &mdash; the ultimate loss of control. Context: a Jacobean audience might see her destruction as divine punishment for transgressing her natural role; modern readers might see it as the inevitable cost of suppressing her humanity.</p>
                  </div>
                </div>
              </SubSection>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── WRITER'S METHODS */}
        <div id="writers-methods">
          <Section id="methods" title="Writer's Methods and Techniques" badge="10 Techniques" colour="bg-teal-600">
            <div className="space-y-6">
              <SubSection id="method-soliloquy" title="Soliloquy and Aside">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Shakespeare uses soliloquies to reveal the characters&apos; inner turmoil. Macbeth&apos;s &ldquo;Is this a dagger which I see before me?&rdquo; soliloquy (2.1) and &ldquo;Tomorrow, and tomorrow, and tomorrow&rdquo; (5.5) chart his psychological journey from anxious hesitation to nihilistic despair. Lady Macbeth&apos;s sleepwalking scene (5.1) functions as an involuntary soliloquy &mdash; her unconscious mind reveals what her conscious will suppressed. Soliloquies create dramatic irony: the audience knows the characters&apos; true feelings while other characters do not.
                </p>
              </SubSection>
              <SubSection id="method-imagery" title="Blood Imagery">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Blood runs through the play as its dominant image. After Duncan&apos;s murder, Macbeth stares at his hands: &ldquo;Will all great Neptune&apos;s ocean wash this blood / Clean from my hand?&rdquo; Lady Macbeth dismisses this: &ldquo;A little water clears us of this deed.&rdquo; By Act 5, it is she who cannot remove the blood: &ldquo;Out, damned spot!&rdquo; The reversal is structurally deliberate &mdash; blood becomes a symbol of inescapable guilt that transfers from one character to the other. Blood also symbolises the natural order: Duncan&apos;s blood, shed unnaturally, stains everything it touches.
                </p>
              </SubSection>
              <SubSection id="method-dramatic-irony" title="Dramatic Irony">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Duncan calls Macbeth&apos;s castle a place where &ldquo;the air nimbly and sweetly recommends itself&rdquo; (1.6) moments before being murdered there. He calls Macbeth &ldquo;a gentleman on whom I built an absolute trust&rdquo; (1.4) just as Macbeth is plotting his death. These ironies heighten the horror and create complicity between audience and murderer: we know what Duncan does not, placing us in the uncomfortable position of silent witnesses.
                </p>
              </SubSection>
              <SubSection id="method-pathetic-fallacy" title="Pathetic Fallacy and the Natural Order">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Nature mirrors the moral disorder caused by regicide. On the night of Duncan&apos;s murder, there are &ldquo;lamentings heard i&apos; the air, strange screams of death&rdquo; (2.3). An owl kills a falcon (a lesser bird killing a greater one, mirroring Macbeth killing Duncan). Duncan&apos;s horses &ldquo;eat each other&rdquo; (2.4). Shakespeare uses the Jacobean Great Chain of Being: when the rightful king is murdered, the entire natural order is disrupted. Order is only restored when Malcolm, the legitimate heir, takes the throne.
                </p>
              </SubSection>
              <SubSection id="method-equivocation" title="Equivocation and Paradox">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The witches speak in paradoxes: &ldquo;Fair is foul, and foul is fair&rdquo; (1.1). The prophecies are equivocal &mdash; they mean something different from what Macbeth assumes. &ldquo;None of woman born shall harm Macbeth&rdquo; proves true only because Macduff was delivered by Caesarean section. This language of deception connects to the historical context: the Gunpowder Plot (1605) involved equivocation by Catholic conspirators. Shakespeare&apos;s audience would have been deeply suspicious of language that appears truthful but conceals its true meaning.
                </p>
              </SubSection>
              <SubSection id="method-five-act" title="Five-Act Tragic Structure">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <em>Macbeth</em> follows the classical five-act tragic structure. Act 1 is exposition (setting, prophecy, temptation). Act 2 is rising action (the murder). Act 3 is the climax/turning point (Banquo&apos;s murder and ghost). Act 4 is falling action (Macbeth&apos;s tyranny deepens). Act 5 is catastrophe (Macbeth&apos;s defeat and death). The play compresses time dramatically &mdash; Macbeth&apos;s rise and fall feels breathlessly fast, reinforcing the sense that ambition consumes its possessor.
                </p>
              </SubSection>
              <SubSection id="method-antithesis" title="Antithesis and Binary Opposites">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The play is structured around binary opposites: light/dark, good/evil, order/chaos, loyalty/treachery, appearance/reality. Lady Macbeth instructs Macbeth to &ldquo;look like the innocent flower, / But be the serpent under&apos;t&rdquo; (1.5). The witches invert natural categories: &ldquo;Fair is foul, and foul is fair.&rdquo; These antitheses create a world where nothing is what it seems, and moral certainty is constantly undermined.
                </p>
              </SubSection>
              <SubSection id="method-supernatural" title="The Supernatural as Dramatic Device">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The witches, Banquo&apos;s ghost, the floating dagger, and the apparitions serve multiple dramatic functions. They create spectacle and entertainment for the audience. They externalise Macbeth&apos;s inner desires (the dagger leads him to Duncan). They raise the question of agency: do the witches cause Macbeth&apos;s actions, or do they merely reveal what he already wants? For James I&apos;s court, the supernatural had real political significance &mdash; James himself had written <em>Daemonologie</em> (1597) and believed in witchcraft.
                </p>
              </SubSection>
              <SubSection id="method-iambic" title="Iambic Pentameter and Prose">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Noble characters speak in iambic pentameter (the rhythm of natural English speech elevated to verse). The witches speak in trochaic tetrameter (&ldquo;Double, double, toil and trouble&rdquo;) &mdash; a shorter, chanting rhythm that sounds unnatural and spelllike. When Lady Macbeth sleepwalks (5.1), she speaks in <em>prose</em>, not verse &mdash; signalling her mental disintegration. The shift from verse to prose marks the collapse of order, reason, and nobility. Shakespeare uses metre as a character tool.
                </p>
              </SubSection>
              <SubSection id="method-stagecraft" title="Stagecraft and Stage Directions">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Shakespeare uses visual theatre powerfully. The dagger scene requires the actor to reach for something invisible &mdash; the audience sees Macbeth&apos;s madness but not its cause. Banquo&apos;s ghost appears at the banquet, visible to Macbeth but not to the guests &mdash; creating a split between what different characters perceive. The &ldquo;show of eight kings&rdquo; in Act 4 was designed to flatter James I (who traced his lineage from Banquo). The final scene, where Macduff enters with Macbeth&apos;s head, provides a visual symbol of tyranny defeated.
                </p>
              </SubSection>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── GRADE 9 POINTS */}
        <div id="grade-9">
          <Section id="grade-9" title="Grade 9 Exemplar Points and Interpretations" badge="8 Points" colour="bg-amber-600">
            <p className="text-sm text-muted-foreground mb-4">
              These higher-level interpretations demonstrate the sophisticated analysis needed for top grades. Each goes beyond surface reading to consider authorial intent, alternative readings, and structural significance.
            </p>
            <div className="space-y-6">

              <SubSection id="g9-witches-agency" title="1. The Witches Do Not Cause Anything" defaultOpen>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Lower-grade answers say the witches &ldquo;make&rdquo; Macbeth kill Duncan. A Grade 9 response recognises that the witches only predict &mdash; they never command. They say Macbeth &ldquo;shalt be king hereafter,&rdquo; not &ldquo;you must kill Duncan.&rdquo; Macbeth makes the interpretive leap from prophecy to murder himself. Banquo hears the same prophecies but does not act on them. This distinction is crucial: Shakespeare presents the witches as a catalyst, not a cause. The real source of evil is Macbeth&apos;s pre-existing ambition, which the witches merely surface. The play explores how external temptation activates internal desire &mdash; but the choice always remains human.
                </p>
              </SubSection>

              <SubSection id="g9-lady-macbeth-feminism" title="2. Lady Macbeth and the Performance of Masculinity">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Lady Macbeth does not simply reject femininity &mdash; she performs masculinity, exposing it as a social construct rather than a natural state. When she says &ldquo;unsex me here,&rdquo; she is not asking to become a man but to remove the <em>social constraints</em> that prevent women from acting decisively. Her later collapse in Act 5 has been read as the psychological cost of this performance: maintaining a masculine facade while being denied the emotional outlet that her society allows only to women. Shakespeare thus uses Lady Macbeth to question whether gendered behaviour is natural or performed &mdash; a remarkably modern interrogation.
                </p>
              </SubSection>

              <SubSection id="g9-macbeth-tragic-hero" title="3. Macbeth as Anti-Tragic Hero">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Aristotle&apos;s tragic hero should be fundamentally noble, brought low by a single flaw (hamartia). A sophisticated reading might argue that Macbeth does not fit this model. His ambition is not a flaw in an otherwise noble character &mdash; it is his defining quality. He is described as &ldquo;brave Macbeth&rdquo; in battle, but his bravery is violence, not virtue. His soliloquies show self-awareness (he knows the murder is wrong) but not moral growth &mdash; he acts despite knowing better. Shakespeare may be subverting the tragic hero model: Macbeth is not a good man corrupted but a man whose violence finds a new outlet. This reading makes the play more disturbing: it suggests that the capacity for evil is not an aberration but an integral part of human nature.
                </p>
              </SubSection>

              <SubSection id="g9-duncan-ideal" title="4. Duncan as Idealised King &mdash; or Weak One?">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Duncan is presented as a gracious, trusting king &mdash; but a top-level response might question whether his naivety is a flaw. He has already been betrayed by one Thane of Cawdor and admits he cannot &ldquo;find the mind&apos;s construction in the face&rdquo; &mdash; he immediately trusts Macbeth with the same title. In the harsh political world of medieval Scotland, Duncan&apos;s trusting nature could be read as political incompetence. Shakespeare may be suggesting that being a good man and being a good king are not the same thing &mdash; a politically astute observation for a playwright writing under James I.
                </p>
              </SubSection>

              <SubSection id="g9-tomorrow" title="5. 'Tomorrow and Tomorrow' as Nihilism or Self-Knowledge">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Macbeth&apos;s final great soliloquy (&ldquo;Tomorrow, and tomorrow, and tomorrow...&rdquo;) is usually read as nihilistic despair. But a Grade 9 response might argue it represents Macbeth&apos;s most honest moment of self-knowledge. For the first time, he sees life clearly, without the distorting lens of ambition. &ldquo;Life&apos;s but a walking shadow, a poor player / That struts and frets his hour upon the stage&rdquo; &mdash; the theatrical metaphor is self-referential: Macbeth recognises that he has been playing a role (king, tyrant) and that the role has consumed the man. This is not just despair but a form of tragic insight that brings him closer to the audience&apos;s understanding than at any other point in the play.
                </p>
              </SubSection>

              <SubSection id="g9-regicide" title="6. Regicide as Cosmic Crime">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For a Jacobean audience, killing a king was not merely murder but an assault on the divine order. The Great Chain of Being placed the king directly below God; regicide was therefore a crime against God. This is why nature itself responds to Duncan&apos;s murder with storms, unnatural darkness, and animals behaving abnormally. Shakespeare is not being superstitious &mdash; he is using the belief system of his audience to magnify the horror. A Grade 9 response should connect the pathetic fallacy to the specific Jacobean belief in the Divine Right of Kings, showing how Shakespeare uses contemporary theology to intensify his drama.
                </p>
              </SubSection>

              <SubSection id="g9-macduff-counterpart" title="7. Macduff as Macbeth's True Counterpart">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Macduff and Macbeth are structurally parallel: both are Scottish nobles, both are warriors, both lose their families (Macbeth loses his relationship with Lady Macbeth; Macduff loses his wife and children literally). But their responses to grief diverge utterly. Macbeth spirals into violence; Macduff channels grief into just action. When Malcolm tells Macduff to &ldquo;dispute it like a man,&rdquo; Macduff replies: &ldquo;I shall do so; / But I must also feel it as a man.&rdquo; This is the play&apos;s alternative model of masculinity: strength that includes emotional vulnerability rather than suppressing it. Macduff represents what Macbeth could have been.
                </p>
              </SubSection>

              <SubSection id="g9-play-james" title="8. The Play as Political Propaganda">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <em>Macbeth</em> was almost certainly written for James I, who became king of England in 1603. James traced his ancestry from Banquo (the &ldquo;show of eight kings&rdquo; in Act 4 flatters James&apos;s lineage). The play validates James&apos;s rule by showing the chaos that results from illegitimate succession. The witches reflect James&apos;s personal interest in demonology. A Grade 9 response might argue that <em>Macbeth</em> functions partly as political propaganda: it tells the story James wanted told &mdash; that legitimate succession brings order, usurpation brings chaos, and the Stuart line is blessed. Understanding this political context enriches every reading of the play.
                </p>
              </SubSection>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── EXAM BOARD TIPS */}
        <div id="exam-board-tips">
          <Section id="exam-boards" title="Exam Board Comparison" colour="bg-primary">
            <p className="text-sm text-muted-foreground mb-4">
              Different exam boards examine <em>Macbeth</em> in slightly different ways. Understanding your specific board&apos;s requirements can gain you marks.
            </p>
            <div className="space-y-6">
              <div className="rounded-lg border border-purple-500/30 bg-purple-500/5 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#40197F] px-2 py-0.5 text-xs font-bold text-white">AQA</span>
                  AQA GCSE English Literature (8702) &mdash; Paper 1, Section A
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> You receive a printed extract (roughly 20-30 lines) and a question asking how Shakespeare presents a given theme or character. You must write about the extract <em>and then</em> the wider play.</li>
                  <li>&bull; <strong>Marks:</strong> 30 marks + 4 for SPaG = 34 total. Recommended time: ~50-55 minutes.</li>
                  <li>&bull; <strong>AOs tested:</strong> AO1 (response and quotation), AO2 (language/structure/form analysis), AO3 (context).</li>
                  <li>&bull; <strong>Structure advice:</strong> Spend roughly 50% on the extract and 50% on the wider play. Start with the extract (close analysis of specific words), then move outward to other scenes. Always zoom in on individual words and their effects &mdash; this is where top-band AO2 marks come from.</li>
                  <li>&bull; <strong>Context tip:</strong> Context should be woven into your analysis, not added as a separate paragraph. Instead of &ldquo;In the Jacobean era...&rdquo; as a bolt-on, integrate it: &ldquo;Shakespeare&apos;s Jacobean audience, who lived under a king who personally wrote about witchcraft, would have found the witches genuinely terrifying, which intensifies...&rdquo;</li>
                  <li>&bull; <strong>Closed book:</strong> Yes. You need memorised quotations from across the entire play. The extract is printed but everything else must come from memory.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#E5231B] px-2 py-0.5 text-xs font-bold text-white">Edexcel</span>
                  Edexcel GCSE English Literature (1ET0) &mdash; Paper 1, Section A
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> Extract-based question asking how Shakespeare presents a theme or character. You must refer to the extract and the play as a whole.</li>
                  <li>&bull; <strong>Marks:</strong> 40 marks total. Recommended time: ~55 minutes.</li>
                  <li>&bull; <strong>AOs tested:</strong> AO1 (ideas and quotation), AO2 (writer&apos;s methods), AO3 (context), AO4 (SPaG &mdash; integrated into the mark, not separate).</li>
                  <li>&bull; <strong>Key difference from AQA:</strong> Edexcel places slightly more weight on writer&apos;s methods (AO2). Make sure you analyse <em>HOW</em> Shakespeare achieves effects, not just <em>WHAT</em> he says. Use precise terminology: don&apos;t just say &ldquo;metaphor&rdquo; &mdash; say what the metaphor does and why Shakespeare chose it.</li>
                  <li>&bull; <strong>Structure advice:</strong> Use the extract as your launchpad but move fluidly to the rest of the play. Edexcel rewards essays that track how a theme or character <em>develops</em> across the play, not just isolated moments.</li>
                  <li>&bull; <strong>Closed book:</strong> Yes.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#00A651] px-2 py-0.5 text-xs font-bold text-white">CAIE</span>
                  Cambridge IGCSE Literature (0475 / 0992) &mdash; Paper 1 (Drama)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> Two question options per text: (a) a passage-based question with a printed extract, OR (b) an essay question on the whole text. You choose <strong>one</strong>.</li>
                  <li>&bull; <strong>Marks:</strong> 25 marks per question. Total paper time: 1hr 30min for two texts.</li>
                  <li>&bull; <strong>Key difference:</strong> CAIE rewards <em>personal response</em> and close reading above all. There is no separate AO for context &mdash; you are assessed on your ability to respond to the text itself. Use context only where it genuinely enhances your reading.</li>
                  <li>&bull; <strong>Passage-based questions:</strong> Work through the extract systematically. CAIE expects you to analyse specific details closely. You can refer to the wider text to show understanding, but the extract is the focus.</li>
                  <li>&bull; <strong>Essay questions:</strong> Plan carefully and use precise textual references. CAIE essays should demonstrate a coherent personal reading, not a list of pre-prepared points.</li>
                  <li>&bull; <strong>Open/Closed book:</strong> Varies by component. Paper 1 is typically <strong>closed book</strong> (0475) or <strong>open book with clean copies</strong> (0992). Check your specific syllabus.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="rounded bg-[#2A7DE1] px-2 py-0.5 text-xs font-bold text-white">OCR</span>
                  OCR GCSE English Literature (J352) &mdash; Shakespeare Component
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Format:</strong> Extract-based question on a theme, character, or dramatic moment. You explore the extract and connect it to the wider play.</li>
                  <li>&bull; <strong>Marks:</strong> 40 marks. Part of a larger paper.</li>
                  <li>&bull; <strong>AOs tested:</strong> AO1 (response), AO2 (analysis of methods), AO3 (context), AO4 (SPaG &mdash; integrated).</li>
                  <li>&bull; <strong>Key difference:</strong> OCR values <em>analytical depth</em> over breadth. It is far better to analyse three quotations thoroughly than to mention ten superficially. Show how meaning is created through specific word choices, structural decisions, and dramatic techniques.</li>
                  <li>&bull; <strong>Structure advice:</strong> OCR examiners reward essays that build an <em>argument</em> rather than a list. Your paragraphs should connect and develop a central thesis about the theme or character, not just present isolated observations.</li>
                  <li>&bull; <strong>Closed book:</strong> Yes.</li>
                </ul>
              </div>

              {/* Comparison summary */}
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="font-bold text-foreground mb-3">At a Glance: Key Differences</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="py-2 pr-3 font-bold text-foreground"></th>
                        <th className="py-2 px-3 font-bold text-[#40197F]">AQA</th>
                        <th className="py-2 px-3 font-bold text-[#E5231B]">Edexcel</th>
                        <th className="py-2 px-3 font-bold text-[#00A651]">CAIE</th>
                        <th className="py-2 px-3 font-bold text-[#2A7DE1]">OCR</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="py-2 pr-3 font-semibold">Marks</td>
                        <td className="py-2 px-3">34 (30+4)</td>
                        <td className="py-2 px-3">40</td>
                        <td className="py-2 px-3">25</td>
                        <td className="py-2 px-3">40</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-3 font-semibold">Format</td>
                        <td className="py-2 px-3">Extract + wider play</td>
                        <td className="py-2 px-3">Extract + wider play</td>
                        <td className="py-2 px-3">Extract OR essay</td>
                        <td className="py-2 px-3">Extract + wider play</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-3 font-semibold">Open/Closed</td>
                        <td className="py-2 px-3">Closed</td>
                        <td className="py-2 px-3">Closed</td>
                        <td className="py-2 px-3">Varies</td>
                        <td className="py-2 px-3">Closed</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-3 font-semibold">SPaG</td>
                        <td className="py-2 px-3">Separate (4)</td>
                        <td className="py-2 px-3">Integrated</td>
                        <td className="py-2 px-3">N/A</td>
                        <td className="py-2 px-3">Integrated</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-3 font-semibold">Priority</td>
                        <td className="py-2 px-3">Close word analysis</td>
                        <td className="py-2 px-3">Writer&apos;s methods</td>
                        <td className="py-2 px-3">Personal response</td>
                        <td className="py-2 px-3">Depth over breadth</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section id="practice" title="Practice Questions" badge="4 Questions" colour="bg-primary">
            <p className="text-sm text-muted-foreground mb-6">
              Write your answer below each question and receive AI-powered feedback tailored to GCSE English Literature mark schemes.
              Aim for at least 150 words per response to get meaningful feedback.
            </p>
            <div className="space-y-8">
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 1</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Shakespeare present the theme of ambition in <em>Macbeth</em>? Refer to the whole play in your answer.
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="Macbeth - How Shakespeare presents the theme of ambition across the play"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 2</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Shakespeare use the character of Lady Macbeth to explore the theme of guilt?
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="Macbeth - How Shakespeare uses Lady Macbeth to explore the theme of guilt"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 3</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Shakespeare present the supernatural in <em>Macbeth</em>? Refer to the role of the witches and other supernatural elements in your answer.
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="Macbeth - How Shakespeare presents the supernatural including the witches and other elements"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 4</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Shakespeare present the relationship between Macbeth and Lady Macbeth throughout the play?
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="Macbeth - How Shakespeare presents the changing relationship between Macbeth and Lady Macbeth"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
