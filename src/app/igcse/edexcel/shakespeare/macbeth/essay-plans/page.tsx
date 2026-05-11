import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth/essay-plans',
  },
  title: 'Macbeth Essay Plans — Edexcel IGCSE Literature',
  description:
    'Five model essay plans for Macbeth with paragraph-by-paragraph structure, key quotations and context for Edexcel IGCSE English Literature.',
}

const ESSAY_PLANS = [
  {
    id: 'ambition',
    question: 'How does Shakespeare present ambition in Macbeth?',
    introduction:
      "Define ambition as the play's driving force. Thesis: Shakespeare presents ambition as a destructive power that corrupts even the noblest characters, working through the supernatural, through gender manipulation, and through Macbeth's own moral collapse.",
    paragraphs: [
      {
        topic: 'The witches plant ambition as a seed',
        argument:
          "The witches' prophecy in Act 1 Scene 3 does not command Macbeth to act -- it merely names a possibility. Yet Macbeth's immediate aside, 'Stars, hide your fires; let not light see my black and deep desires' (1.4), reveals that ambition already existed within him. Shakespeare suggests the supernatural activates ambition rather than creating it.",
        key_quote: '"Stars, hide your fires; let not light see my black and deep desires" (1.4)',
        context:
          "A Jacobean audience steeped in James I's Daemonologie would have seen the witches as genuine agents of Satan, making Macbeth's willingness to listen a moral failing, not just a political one.",
      },
      {
        topic: 'Lady Macbeth weaponises ambition through masculinity',
        argument:
          "Lady Macbeth converts ambition into action by attacking Macbeth's manhood: 'When you durst do it, then you were a man' (1.7). She redefines masculinity as the willingness to kill. Her own ambition is expressed through the chilling invocation 'unsex me here' (1.5), where she asks to be stripped of femininity so she can act without conscience.",
        key_quote: '"When you durst do it, then you were a man" (1.7)',
        context:
          "In Jacobean society, women were expected to be pious and obedient. Lady Macbeth's demand to be 'unsexed' would have been deeply transgressive -- almost demonic.",
      },
      {
        topic: 'Ambition escalates into tyranny',
        argument:
          "After Duncan's murder, Macbeth's ambition does not satisfy itself -- it multiplies. He orders Banquo's assassination ('O, full of scorpions is my mind, dear wife!' 3.2) and the slaughter of Macduff's family without consulting Lady Macbeth. Shakespeare shows ambition becoming self-sustaining: each crime demands another to cover it.",
        key_quote: '"O, full of scorpions is my mind, dear wife!" (3.2)',
        context:
          'The escalation mirrors the Gunpowder Plot mentality: one act of treason forces conspirators deeper into violence to protect themselves.',
      },
      {
        topic: 'Ambition hollows Macbeth from the inside',
        argument:
          "By Act 5, ambition has consumed everything Macbeth valued. The 'Tomorrow, and tomorrow, and tomorrow' soliloquy (5.5) reveals a man for whom life itself has become 'a tale told by an idiot, full of sound and fury, signifying nothing'. Shakespeare's tragic point is that ambition achieved is ambition emptied -- the crown is worthless once it costs everything else.",
        key_quote:
          '"Life\'s but a walking shadow, a poor player that struts and frets his hour upon the stage" (5.5)',
        context:
          "Shakespeare draws on the Aristotelian tragic structure: Macbeth's anagnorisis (recognition) comes too late to save him, delivering catharsis to the audience.",
      },
      {
        topic: 'Banquo as the moral counter to unchecked ambition',
        argument:
          "Banquo hears the same prophecy but resists it, warning that 'instruments of darkness tell us truths' only 'to win us to our harm' (1.3). His restraint makes Macbeth's surrender to ambition a choice rather than an inevitability. Shakespeare uses Banquo to prove that ambition need not destroy -- it is Macbeth's response to it that matters.",
        key_quote:
          '"Oftentimes to win us to our harm, the instruments of darkness tell us truths" (1.3)',
        context:
          'Banquo was widely believed to be an ancestor of James I. Shakespeare flatters the king by making his forebear the character who resists temptation.',
      },
    ],
    conclusion:
      "Shakespeare presents ambition not as inherently evil but as dangerously potent when unchecked by conscience, loyalty or moral restraint. Through the contrast between Macbeth and Banquo, he argues that the tragedy lies in the individual's choice to surrender to ambition rather than in ambition itself.",
  },
  {
    id: 'guilt',
    question: 'How does Shakespeare present guilt in Macbeth?',
    introduction:
      "Define guilt as the play's psychological engine. Thesis: Shakespeare presents guilt as an inescapable, physical force that manifests in hallucinations, sleeplessness and madness, and that ultimately destroys both Macbeths in contrasting ways.",
    paragraphs: [
      {
        topic: 'Guilt as hallucination -- the floating dagger',
        argument:
          "Before Duncan's murder, Macbeth sees 'a dagger of the mind, a false creation, proceeding from the heat-oppressed brain' (2.1). The dagger is guilt arriving before the crime has even been committed. Shakespeare externalises Macbeth's conscience as a physical apparition, making guilt visible to the audience even when Macbeth tries to dismiss it.",
        key_quote: '"Is this a dagger which I see before me, the handle toward my hand?" (2.1)',
        context:
          "The dagger could be read as a demonic temptation -- a Jacobean audience familiar with the devil's tricks would have seen it as a test Macbeth fails.",
      },
      {
        topic: 'Immediate guilt -- blood that will not wash',
        argument:
          "Immediately after killing Duncan, Macbeth stares at his hands and asks, 'Will all great Neptune's ocean wash this blood clean from my hand?' (2.2). The blood is real, but the question is metaphysical -- can the act ever be undone? Lady Macbeth dismisses it: 'a little water clears us of this deed'. Shakespeare plants dramatic irony that will detonate in Act 5.",
        key_quote: '"Will all great Neptune\'s ocean wash this blood clean from my hand?" (2.2)',
        context:
          'Regicide was a sin against the Divine Right of Kings -- no earthly cleansing could atone for it in Jacobean theology.',
      },
      {
        topic: "Guilt as spectral return -- Banquo's ghost",
        argument:
          "In the banquet scene (3.4), Banquo's ghost appears only to Macbeth. His terror -- 'Never shake thy gory locks at me' -- exposes his guilt to his guests and begins his political unravelling. Shakespeare shows guilt as a force that cannot be hidden: it erupts publicly at the worst possible moment.",
        key_quote: '"Never shake thy gory locks at me" (3.4)',
        context:
          'The banquet was a symbol of order and hospitality. Its disruption by a ghost mirrors the disruption of the natural order caused by regicide.',
      },
      {
        topic: "Lady Macbeth's delayed guilt -- the sleepwalking scene",
        argument:
          "In Act 5 Scene 1, Lady Macbeth sleepwalks, compulsively rubbing her hands and crying 'Out, damned spot! Out, I say!' The woman who mocked her husband's guilt now enacts the very ritual she dismissed. Shakespeare reverses the couple's trajectories: as Macbeth hardens, she breaks. Her earlier 'a little water' is answered by 'all the perfumes of Arabia will not sweeten this little hand'.",
        key_quote: '"Out, damned spot! Out, I say!" (5.1)',
        context:
          "The scene's prose (not verse) suggests Lady Macbeth has dropped below rational control -- Shakespeare uses the shift in form to signal psychological collapse.",
      },
      {
        topic: "Guilt's final form -- emotional numbness",
        argument:
          "When told of Lady Macbeth's death, Macbeth responds not with grief but with exhaustion: 'She should have died hereafter; there would have been a time for such a word' (5.5). Guilt has not just tormented him -- it has burned out his capacity to feel. Shakespeare's bleakest insight is that sustained guilt does not redeem; it anaesthetises.",
        key_quote: '"She should have died hereafter" (5.5)',
        context:
          'This nihilism reflects the Aristotelian idea of the tragic hero reaching recognition (anagnorisis) at the moment when it is too late to change anything.',
      },
    ],
    conclusion:
      'Shakespeare presents guilt as an overwhelming, shape-shifting force. It arrives as hallucination, erupts as spectacle, and finally calcifies into numbness. The contrasting arcs of Macbeth (immediate guilt that dulls) and Lady Macbeth (suppressed guilt that explodes) together argue that guilt cannot be managed, delayed or rationalised -- only suffered.',
  },
  {
    id: 'supernatural',
    question: 'How does Shakespeare use the supernatural in Macbeth?',
    introduction:
      "Define the supernatural as a structural and thematic device. Thesis: Shakespeare uses the supernatural to frame the play's central moral question -- whether Macbeth is controlled by external forces or destroyed by his own choices -- while simultaneously exploiting a Jacobean audience's genuine fear of witchcraft.",
    paragraphs: [
      {
        topic: 'The witches establish moral chaos from the opening line',
        argument:
          "The play opens with 'Fair is foul, and foul is fair' (1.1) -- a paradox that collapses moral distinctions before any character has appeared. Shakespeare uses the witches to set the play's entire moral register: in their world, good and evil are indistinguishable. Their trochaic tetrameter separates them linguistically from every other character.",
        key_quote: '"Fair is foul, and foul is fair" (1.1)',
        context:
          "James I's Daemonologie (1597) argued that witches were real agents of Satan. The opening scene would have been genuinely terrifying for a Jacobean audience, not theatrical decoration.",
      },
      {
        topic: 'Prophecy as temptation, not command',
        argument:
          "The witches tell Macbeth he 'shalt be king hereafter' (1.3), but they never tell him to kill Duncan. The prophecy is a mirror: it reflects what Macbeth already desires. Shakespeare is careful to preserve Macbeth's agency -- he chooses to act. Banquo, hearing the same prophecy, resists. The supernatural reveals character rather than controlling it.",
        key_quote: '"All hail, Macbeth, that shalt be king hereafter!" (1.3)',
        context:
          'The question of whether witches could compel human action or only tempt it was a live theological debate in Jacobean England.',
      },
      {
        topic: 'The dagger and the ghost -- guilt externalised',
        argument:
          "The floating dagger (2.1) and Banquo's ghost (3.4) are supernatural events visible only to Macbeth. Whether they are real or psychological, Shakespeare uses them to make Macbeth's inner guilt visible to the audience. The supernatural becomes a dramatic device for staging conscience -- the private made spectacularly public.",
        key_quote: '"Is this a dagger which I see before me?" (2.1)',
        context:
          "Ghosts and apparitions were common on the Jacobean stage, but Shakespeare's innovation is to make them psychologically ambiguous -- leaving the audience unsure whether the devil or Macbeth's own mind is the author.",
      },
      {
        topic: 'The apparitions and equivocation',
        argument:
          "In Act 4 Scene 1, the witches' apparitions offer prophecies that are literally true but functionally deceptive: 'none of woman born shall harm Macbeth' and 'Macbeth shall never vanquished be until Great Birnam Wood to high Dunsinane Hill shall come'. Shakespeare uses the supernatural to explore equivocation -- truth deployed to deceive -- which was a Jacobean anxiety after the Gunpowder Plot trials.",
        key_quote: '"None of woman born shall harm Macbeth" (4.1)',
        context:
          "The Jesuit Henry Garnet was executed in 1606 for 'equivocation' -- lying under oath by using ambiguous language. The Porter's speech directly references this. Shakespeare links the witches' method to a real political scandal.",
      },
      {
        topic: "Nature's supernatural response to regicide",
        argument:
          "On the night of Duncan's murder, 'the earth was feverous and did shake' (2.3), horses ate each other, and day turned to night. Shakespeare uses pathetic fallacy on a cosmic scale: the natural world reacts supernaturally to the unnatural act of regicide. This is not decoration -- it is the Great Chain of Being visibly rupturing.",
        key_quote:
          '"By the clock \'tis day, and yet dark night strangles the travelling lamp" (2.4)',
        context:
          "The Great Chain of Being held that the king was God's representative on earth. Killing him disturbed not just politics but the entire cosmic order.",
      },
    ],
    conclusion:
      'Shakespeare uses the supernatural on multiple levels: as a catalyst for the plot, as an externalisation of guilt, as a mechanism for equivocation, and as a cosmic register of moral violation. The witches do not force Macbeth to act -- they reveal what he already desires, making his tragedy one of choice, not fate.',
  },
  {
    id: 'lady-macbeth',
    question: 'How does Shakespeare present Lady Macbeth as a powerful character?',
    introduction:
      "Define power in multiple senses -- psychological, rhetorical, political, supernatural. Thesis: Shakespeare initially presents Lady Macbeth as the play's most powerful figure, then systematically strips that power away, arguing that transgressive power carries the seeds of its own destruction.",
    paragraphs: [
      {
        topic: 'Power through the supernatural invocation',
        argument:
          "Lady Macbeth's first major speech calls on 'spirits that tend on mortal thoughts' to 'unsex me here' and fill her 'from the crown to the toe top-full of direst cruelty' (1.5). She seeks power by rejecting femininity entirely -- asking to be made inhuman so she can act without conscience. Shakespeare frames her power as something that can only be achieved by dismantling her own nature.",
        key_quote: '"Come, you spirits that tend on mortal thoughts, unsex me here" (1.5)',
        context:
          "In Jacobean society, women were expected to be nurturing and pious. Lady Macbeth's invocation mirrors the language of actual witchcraft -- she is essentially summoning demons, which a Jacobean audience would have found genuinely shocking.",
      },
      {
        topic: 'Power through rhetorical manipulation',
        argument:
          "Lady Macbeth's persuasion in Act 1 Scene 7 is a masterclass in manipulation. She attacks Macbeth's manhood ('When you durst do it, then you were a man'), invokes the horrifying image of dashing her own baby's brains out, and reframes murder as courage. Shakespeare gives her the scene's most forceful language -- she dominates it rhetorically while Macbeth can only ask questions.",
        key_quote:
          '"I have given suck, and know how tender \'tis to love the babe that milks me; I would, while it was smiling in my face, have plucked my nipple from his boneless gums and dashed the brains out" (1.7)',
        context:
          "The infanticide image inverts the ultimate symbol of female nurturing. Shakespeare pushes the 'unsexing' to its most extreme expression.",
      },
      {
        topic: 'Power through practical control of the murder',
        argument:
          "Lady Macbeth plans the murder in detail: she drugs the guards, lays out the daggers, and returns them when Macbeth panics ('Give me the daggers', 2.2). In the immediate aftermath, she is calm while he is paralysed. Shakespeare stages a complete inversion of expected gender roles -- she acts while he spirals.",
        key_quote: '"Infirm of purpose! Give me the daggers" (2.2)',
        context:
          'The reversal of masculine and feminine roles would have struck a Jacobean audience as profoundly unnatural -- evidence of the cosmic disorder the murder produces.',
      },
      {
        topic: 'Power eroded by exclusion',
        argument:
          "After the coronation, Macbeth increasingly acts alone. He orders Banquo's murder without consulting her -- 'Be innocent of the knowledge, dearest chuck' (3.2). The word 'chuck' is tenderly dismissive. Shakespeare shows Lady Macbeth's power was never institutional (she has no army, no allies) -- it was personal, and once Macbeth no longer needs her persuasion, she is sidelined.",
        key_quote:
          '"Be innocent of the knowledge, dearest chuck, till thou applaud the deed" (3.2)',
        context:
          "This reflects the reality that women's power in Jacobean England operated entirely through influence over men -- it was borrowed, not owned.",
      },
      {
        topic: "Power's collapse -- the sleepwalking scene",
        argument:
          "In Act 5 Scene 1, Lady Macbeth's power has entirely disintegrated. She sleepwalks, obsessively washing invisible blood from her hands: 'All the perfumes of Arabia will not sweeten this little hand' (5.1). The woman who dismissed guilt as removable with 'a little water' is now destroyed by it. Shakespeare's argument is symmetrical: the power she seized by suppressing her humanity returns as madness when that humanity reasserts itself.",
        key_quote: '"All the perfumes of Arabia will not sweeten this little hand" (5.1)',
        context:
          'Her shift from verse to prose in this scene signals the loss of rhetorical control -- the very tool that defined her power has been taken from her.',
      },
    ],
    conclusion:
      "Shakespeare presents Lady Macbeth's power as extraordinary but inherently unstable. It depends on suppressing her own nature ('unsex me'), on rhetorical dominance over one man, and on a willingness to deny guilt. When any of these fail, the power collapses. Her arc -- from fearless plotter to sleepwalking wreck to implied suicide -- is Shakespeare's darkest case study in what transgressive power costs.",
  },
  {
    id: 'kingship',
    question: 'How does Shakespeare explore ideas about kingship in Macbeth?',
    introduction:
      "Define kingship as both a political institution and a theological concept. Thesis: Shakespeare uses three contrasting models of kingship -- Duncan's piety, Macbeth's tyranny, and Malcolm's tested legitimacy -- to argue that true kingship is divinely sanctioned and that usurpation destroys not just individuals but the natural order itself.",
    paragraphs: [
      {
        topic: 'Duncan as the ideal Christian king',
        argument:
          "Duncan is trusting, generous and gracious. He rewards Macbeth lavishly ('More is thy due than more than all can pay', 1.4) and praises Inverness as a place where 'the air nimbly and sweetly recommends itself' (1.6). Shakespeare deliberately makes him gentle so that his murder feels monstrous -- there is no political justification for killing a good king. Duncan embodies the Jacobean ideal of a divinely appointed monarch.",
        key_quote:
          '"This castle hath a pleasant seat; the air nimbly and sweetly recommends itself to our gentle senses" (1.6)',
        context:
          "James I championed the Divine Right of Kings -- the doctrine that monarchs were God's representatives on earth. Duncan represents this ideal, making his murder not just treason but sacrilege.",
      },
      {
        topic: "Macbeth's kingship as tyranny",
        argument:
          "As king, Macbeth rules through paranoia and violence. He orders the murder of Banquo and Fleance (Act 3), then the slaughter of Macduff's entire household, including women and children (Act 4). Shakespeare never shows Macbeth governing -- he is never seen holding court, dispensing justice or rewarding loyalty. His kingship is defined entirely by what he destroys.",
        key_quote:
          '"I am in blood stepped in so far that, should I wade no more, returning were as tedious as go o\'er" (3.4)',
        context:
          "The tyrannical king was a familiar figure from classical sources. Shakespeare draws on the Roman historians' portraits of Nero and Caligula to model Macbeth's descent.",
      },
      {
        topic: "Nature's revolt against illegitimate kingship",
        argument:
          "Duncan's murder triggers cosmic disorder: 'the earth was feverous and did shake' (2.3), horses ate each other, an owl killed a falcon, and day turned to night. Shakespeare uses pathetic fallacy on a supernatural scale to argue that the king's body is linked to the body of the state and to nature itself. Illegitimate kingship makes the whole world sick.",
        key_quote:
          '"A falcon, towering in her pride of place, was by a mousing owl hawked at and killed" (2.4)',
        context:
          'The Great Chain of Being held that every creature had a fixed place. An owl killing a falcon -- a lower creature defeating a higher one -- symbolises the inversion caused by a subject killing his king.',
      },
      {
        topic: 'Malcolm as the tested, legitimate heir',
        argument:
          "In the England scene (4.3), Malcolm tests Macduff by pretending to be a worse tyrant than Macbeth -- claiming he is lustful, greedy and would 'pour the sweet milk of concord into hell'. When Macduff despairs, Malcolm reveals the test and declares himself 'yet unknown to woman' and free of vice. Shakespeare stages a ritual of testing that a legitimate king must pass before ruling.",
        key_quote:
          '"I am yet unknown to woman, never was forsworn, scarcely have coveted what was mine own" (4.3)',
        context:
          "Malcolm's testing of Macduff mirrors the idea that legitimate kingship must be earned through virtue, not seized through violence -- a pointed compliment to James I's claim to the English throne.",
      },
      {
        topic: "Restoration -- Macbeth named 'butcher', order returns",
        argument:
          "In the play's final speech, Malcolm calls Macbeth 'this dead butcher and his fiend-like queen' (5.9) and invites everyone to his coronation at Scone. Shakespeare closes the play with a return to legitimate succession: the rightful king takes the throne, order is restored, and the unnatural events cease. The structure argues that tyranny is always temporary.",
        key_quote: '"We will perform in measure, time, and place" (5.9)',
        context:
          "The word 'measure' carries weight: it means both 'appropriate degree' and 'order'. Malcolm's first act is to reimpose the measured hierarchy that Macbeth's usurpation shattered.",
      },
    ],
    conclusion:
      "Shakespeare presents kingship as a sacred trust. Duncan embodies its ideal, Macbeth its perversion, and Malcolm its restoration. The play's structure -- order, disruption, return to order -- argues that legitimate rule is both divinely endorsed and politically necessary, while tyranny carries the mechanism of its own destruction. For a Jacobean audience watching under the patronage of James I, this was both a warning and a reassurance.",
  },
]

export default async function MacbethEssayPlansPage() {
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
            name: 'Essay Plans',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth/essay-plans',
          },
        ]}
      />
      {/* -- Hero ------------------------------------------------- */}
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
            Macbeth &mdash; Essay Plans
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Five model essay plans with paragraph structure, key quotations and context &mdash;
            ready to adapt for the IGCSE Shakespeare question.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* -- How to use ----------------------------------------- */}
        <div className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">How to use these plans</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Each plan gives you a thesis, five analytical paragraphs and a conclusion. Every
            paragraph has a topic sentence, an argument, a key quote and a context point. In the
            exam, adapt the structure to the specific question &mdash; don&rsquo;t reproduce plans
            from memory, but use the paragraph logic and quotation pairings as building blocks.
          </p>
        </div>

        {/* -- Quick nav ------------------------------------------ */}
        <nav className="mt-8 rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {ESSAY_PLANS.map((p) => (
              <li key={p.id}>
                <a href={`#${p.id}`} className="text-primary hover:underline">
                  {p.question}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mt-14 space-y-16">
          {ESSAY_PLANS.map((plan) => (
            <article key={plan.id} id={plan.id} className="scroll-mt-20">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
                <h2 className="text-2xl font-bold text-foreground">{plan.question}</h2>

                {/* Introduction */}
                <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Introduction
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {plan.introduction}
                  </p>
                </div>

                {/* Paragraphs */}
                <div className="mt-6 space-y-6">
                  {plan.paragraphs.map((para, i) => (
                    <div key={i} className="rounded-lg border border-border bg-muted p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <h3 className="text-base font-bold text-foreground">{para.topic}</h3>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {para.argument}
                      </p>
                      <div className="mt-3 rounded border border-primary/20 bg-card p-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                          Key quote
                        </p>
                        <p className="mt-1 text-sm italic text-muted-foreground">
                          {para.key_quote}
                        </p>
                      </div>
                      <div className="mt-3 rounded border border-border bg-card p-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                          Context
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {para.context}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Conclusion
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {plan.conclusion}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4 mx-auto max-w-5xl px-4 pb-8">
        Macbeth by William Shakespeare is in the public domain. Quotations are reproduced freely.
      </p>
    </main>
  )
}
