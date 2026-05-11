import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth/plot',
  },
  title: 'Macbeth Plot Summary — Edexcel IGCSE Literature',
  description:
    "Scene-by-scene Macbeth plot summary for Edexcel IGCSE English Literature. Follow the whole play from the witches' prophecy to Macbeth's downfall.",
}

const ACTS = [
  {
    act: 'Act 1',
    title: 'Prophecy and temptation',
    overview:
      "The play opens on a blasted heath with three witches. Macbeth and Banquo return from victory in battle, and meet the witches, who prophesy that Macbeth will become Thane of Cawdor and then king, and that Banquo's descendants will be kings. When the first prophecy comes true almost immediately, Macbeth writes to his wife. Lady Macbeth resolves to push him to murder King Duncan, who is visiting their castle. Macbeth wavers — but she questions his manhood until he commits.",
    scenes: [
      {
        scene: '1.1',
        summary:
          "Three witches meet on a heath and agree to meet Macbeth 'when the battle's lost and won'. Their paradox — 'Fair is foul, and foul is fair' — establishes a world of moral inversion.",
      },
      {
        scene: '1.2',
        summary:
          "A wounded Captain reports Macbeth's heroism to King Duncan. Macbeth has cut the rebel Macdonwald 'from the nave to the chops'. Duncan rewards him with the title Thane of Cawdor.",
      },
      {
        scene: '1.3',
        summary:
          "The witches hail Macbeth as Glamis, Cawdor and 'king hereafter'. They promise Banquo that his descendants will be kings. When Ross arrives and confirms Macbeth is now Thane of Cawdor, Macbeth is stunned — and begins to imagine murder.",
      },
      {
        scene: '1.4',
        summary:
          "Duncan names his son Malcolm as his heir (Prince of Cumberland). Macbeth, in an aside, realises this is an obstacle: 'Stars, hide your fires; let not light see my black and deep desires.'",
      },
      {
        scene: '1.5',
        summary:
          "Lady Macbeth reads her husband's letter and immediately starts plotting. She prays to be 'unsexed' so she can commit regicide without guilt. She instructs Macbeth to 'look like the innocent flower, but be the serpent under't'.",
      },
      {
        scene: '1.6',
        summary:
          "Duncan arrives at Macbeth's castle, praising its 'pleasant seat'. The dramatic irony is brutal — the audience knows what awaits him.",
      },
      {
        scene: '1.7',
        summary:
          "Macbeth soliloquises, listing reasons not to kill Duncan — hospitality, loyalty, the king's goodness. He concludes that only 'vaulting ambition' drives him. Lady Macbeth bullies him back into the plan by questioning his courage and manhood.",
      },
    ],
  },
  {
    act: 'Act 2',
    title: 'The murder of Duncan',
    overview:
      "Macbeth hallucinates a dagger leading him to Duncan's chamber. He kills the king offstage but is immediately unhinged with guilt. Lady Macbeth takes charge, returning the daggers and framing the grooms. Duncan's murder is discovered; Malcolm and Donalbain flee; Macbeth is crowned.",
    scenes: [
      {
        scene: '2.1',
        summary:
          "Banquo confesses he too has dreamed of the witches. Alone, Macbeth imagines a floating dagger pointing him toward Duncan: 'Is this a dagger which I see before me?' A bell rings — his cue.",
      },
      {
        scene: '2.2',
        summary:
          "Macbeth returns with bloody hands. He is in pieces: 'Will all great Neptune's ocean wash this blood clean from my hand?' Lady Macbeth dismisses him — 'A little water clears us of this deed' — and returns the daggers herself.",
      },
      {
        scene: '2.3',
        summary:
          "The drunken Porter's comic speech delays the discovery. Macduff finds the king's body. Macbeth, feigning horror, kills the grooms. Malcolm and Donalbain flee to England and Ireland, casting suspicion on themselves.",
      },
      {
        scene: '2.4',
        summary:
          "An old man and Ross describe the unnatural omens: darkness at noon, horses eating each other. Macduff refuses to attend Macbeth's coronation at Scone, hinting at suspicion.",
      },
    ],
  },
  {
    act: 'Act 3',
    title: "Banquo's murder and the banquet",
    overview:
      "Fearing Banquo's prophecy, Macbeth hires murderers to kill Banquo and his son Fleance. Banquo dies; Fleance escapes. At a royal banquet, Macbeth sees Banquo's ghost and publicly loses control. Lady Macbeth struggles to cover for him. Macduff has left Scotland for England.",
    scenes: [
      {
        scene: '3.1',
        summary:
          "Banquo suspects Macbeth 'playedst most foully'. Macbeth arranges his murder, insisting Fleance must die too to halt the line of kings.",
      },
      {
        scene: '3.2',
        summary:
          "The Macbeths' intimacy has curdled. Macbeth tells Lady Macbeth nothing of the new plot — 'Be innocent of the knowledge, dearest chuck' — and admits: 'O, full of scorpions is my mind, dear wife!'",
      },
      {
        scene: '3.3',
        summary: 'The murderers kill Banquo in an ambush. Fleance escapes into the dark.',
      },
      {
        scene: '3.4',
        summary:
          "At his coronation banquet, Macbeth sees Banquo's ghost in his seat and raves in terror. Lady Macbeth tries to excuse him to the nobles, but the feast collapses. Macbeth resolves to see the witches again.",
      },
      {
        scene: '3.5',
        summary:
          'Hecate, goddess of witchcraft, rebukes the weird sisters and promises to help draw Macbeth deeper into evil. (Often considered a later interpolation.)',
      },
      {
        scene: '3.6',
        summary:
          'Lennox and another lord speak openly of their suspicions. Macduff has fled to England to join Malcolm and rally an army.',
      },
    ],
  },
  {
    act: 'Act 4',
    title: "Second prophecies and the slaughter of Macduff's family",
    overview:
      "Macbeth revisits the witches, who conjure three apparitions: beware Macduff; no man born of woman can harm Macbeth; he is safe until Birnam Wood comes to Dunsinane. Emboldened but enraged by Macduff's flight, Macbeth orders the murder of Macduff's wife and children. In England, Malcolm tests Macduff's loyalty before revealing his plan to invade Scotland.",
    scenes: [
      {
        scene: '4.1',
        summary:
          "'Double, double, toil and trouble.' The witches show Macbeth the three apparitions and a procession of eight kings descended from Banquo. Macbeth leaves determined to murder Macduff's entire family.",
      },
      {
        scene: '4.2',
        summary:
          "Lady Macduff, bewildered by her husband's flight, talks with her clever young son. Murderers arrive and kill them both on stage — one of Shakespeare's cruellest scenes.",
      },
      {
        scene: '4.3',
        summary:
          "In England, Malcolm falsely describes himself as vicious to test Macduff's loyalty. Satisfied, he reveals his real plans. Ross arrives with news of the family's slaughter. Macduff vows: 'He has no children... Turn, hell-hound, turn!'",
      },
    ],
  },
  {
    act: 'Act 5',
    title: 'Downfall and death',
    overview:
      "Lady Macbeth sleepwalks, tormented by guilt, and dies offstage (implied suicide). Malcolm's army camouflages itself with branches from Birnam Wood and advances on Dunsinane. Macbeth, hearing of his wife's death, delivers his nihilistic 'Tomorrow' soliloquy. Macduff — 'from his mother's womb untimely ripped' — kills Macbeth in single combat. Malcolm is crowned rightful king.",
    scenes: [
      {
        scene: '5.1',
        summary:
          "A Doctor and Gentlewoman watch Lady Macbeth sleepwalk, rubbing her hands: 'Out, damned spot! Out, I say!' She relives the murders. The Doctor concludes she needs 'the divine' more than a physician.",
      },
      {
        scene: '5.2',
        summary:
          "Scottish lords mobilise to join Malcolm's army. Angus describes Macbeth's tyranny: he feels his 'title hang loose about him, like a giant's robe upon a dwarfish thief'.",
      },
      {
        scene: '5.3',
        summary:
          "Macbeth clings to the witches' prophecies. He mourns his loss of comfort and honour: 'my way of life is fallen into the sere, the yellow leaf'.",
      },
      {
        scene: '5.4',
        summary:
          'Malcolm orders his soldiers to hew branches from Birnam Wood as camouflage — unknowingly fulfilling the prophecy.',
      },
      {
        scene: '5.5',
        summary:
          "A cry within reveals Lady Macbeth is dead. Macbeth responds with the 'Tomorrow, and tomorrow, and tomorrow' soliloquy — life is 'a tale told by an idiot, full of sound and fury, signifying nothing'. A messenger reports that Birnam Wood is moving.",
      },
      {
        scene: '5.6',
        summary: "Malcolm's army reveals itself at Dunsinane and prepares to attack.",
      },
      {
        scene: '5.7',
        summary:
          'Macbeth kills young Siward and continues to trust the prophecy that no man born of woman can harm him.',
      },
      {
        scene: '5.8',
        summary:
          "Macduff finds Macbeth. He reveals he was 'from his mother's womb untimely ripped' — born by Caesarean, and so 'not of woman born'. They fight. Macbeth dies.",
      },
      {
        scene: '5.9',
        summary:
          "Macduff enters with Macbeth's head. Malcolm is hailed as king of Scotland and promises to restore order. He calls Macbeth 'this dead butcher and his fiend-like queen'.",
      },
    ],
  },
]

export default async function MacbethPlotPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Shakespeare', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare' },
          { name: 'Macbeth', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth' },
          {
            name: 'Plot Summary',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth/plot',
          },
        ]}
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare/macbeth"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Macbeth hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE Literature
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Macbeth &mdash; Plot summary
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            A detailed act-by-act and scene-by-scene walkthrough of Shakespeare&rsquo;s shortest
            tragedy.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Quick nav ───────────────────────────────────────── */}
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-5">
            {ACTS.map((a) => (
              <li key={a.act}>
                <a
                  href={`#${a.act.toLowerCase().replace(' ', '-')}`}
                  className="text-primary hover:underline"
                >
                  {a.act}: {a.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Acts ────────────────────────────────────────────── */}
        {ACTS.map((a) => (
          <section
            key={a.act}
            id={a.act.toLowerCase().replace(' ', '-')}
            className="mt-14 scroll-mt-20"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                {a.act}
              </span>
              <h2 className="text-2xl font-bold text-foreground">{a.title}</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{a.overview}</p>
            <div className="mt-6 space-y-4">
              {a.scenes.map((s) => (
                <div
                  key={s.scene}
                  className="rounded-xl border border-border bg-card p-5 shadow-md"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Scene {s.scene}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4 mx-auto max-w-5xl px-4 pb-8">
        Macbeth by William Shakespeare is in the public domain. Quotations are reproduced freely.
      </p>
    </main>
  )
}
