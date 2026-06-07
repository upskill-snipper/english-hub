'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, FileText, Lightbulb, Sparkles } from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

type Paragraph = {
  point: string
  evidence: string
  analysis: string
}

type EssayPlan = {
  number: number
  question: string
  thesisStatement: string
  introduction: string
  paragraphs: Paragraph[]
  conclusion: string
  examTip: string
}

const ESSAY_PLANS: EssayPlan[] = [
  {
    number: 1,
    question: 'How does Golding present Simon as a Christ-like figure in Lord of the Flies?',
    thesisStatement:
      'Golding presents Simon as a prophetic, sacrificial figure whose murder by the other boys re-enacts humanity\u2019s oldest crime: the destruction of innocence and truth by ignorance and fear.',
    introduction:
      'Open by noting that Simon is the only character who understands the true nature of the beast. Establish his role as the novel\u2019s moral and spiritual centre. Note that Golding, a Christian, deliberately structures Simon\u2019s arc to parallel Christ\u2019s: withdrawal into solitude, revelation of truth, and murder by the community he tried to save. State your thesis: Simon\u2019s death is both the climax of the novel and Golding\u2019s most devastating comment on human nature.',
    paragraphs: [
      {
        point: 'Simon\u2019s solitary retreat and spiritual perception',
        evidence:
          'Simon retreats to his hidden clearing in the forest \u2014 a "place where flowers grew on bushes" \u2014 to be alone and think.',
        analysis:
          'The clearing functions as Gethsemane: a place of spiritual preparation before confrontation with evil. Simon\u2019s sensitivity to the natural world and his instinctive withdrawal from the group\u2019s violence mark him as fundamentally different from the other boys. Golding presents him not as weak but as perceptive \u2014 the only character capable of seeing beyond appearances.',
      },
      {
        point: 'The confrontation with the Lord of the Flies',
        evidence:
          '"Fancy thinking the Beast was something you could hunt and kill!" \u2014 the pig\u2019s head speaks to Simon.',
        analysis:
          'This hallucinatory encounter is Simon\u2019s temptation in the wilderness. The Lord of the Flies tells Simon the truth he has already intuited: the beast is not external but internal. The scene parallels Christ\u2019s confrontation with Satan. Simon faints but is not defeated \u2014 he climbs the mountain to discover the truth about the dead parachutist and bring it back to the others.',
      },
      {
        point: 'Simon\u2019s murder as a sacrificial killing',
        evidence:
          '"The water rose farther and dressed Simon\u2019s coarse hair with brightness" \u2014 the sea carries his body away.',
        analysis:
          'Simon\u2019s death is described in luminous, almost liturgical language. The phosphorescent sea creatures that surround his body create a halo effect. Golding transforms a brutal murder into a scene of transfiguration. The contrast between the beauty of the description and the savagery of the killing is the novel\u2019s most powerful moment. Simon dies bringing truth to people who do not want to hear it \u2014 the essence of the Christ parallel.',
      },
    ],
    conclusion:
      'Conclude by arguing that Simon\u2019s death is the novel\u2019s turning point and its moral centre. After his murder, the possibility of redemption through understanding is lost. The boys have killed the only person who could have saved them from their own nature. Golding\u2019s Christian framework insists that this is not an accident but a pattern: humanity destroys its prophets because truth is more threatening than lies.',
    examTip:
      'For top marks, analyse the specific language of Simon\u2019s death scene. The imagery of light, water and beauty elevates his death above the other acts of violence in the novel. Examiners reward candidates who can explain how Golding\u2019s language creates meaning, not just what happens in the plot.',
  },
  {
    number: 2,
    question:
      'How does Golding use the conflict between Ralph and Jack to explore ideas about leadership?',
    thesisStatement:
      'Golding presents Ralph and Jack as embodiments of democratic and authoritarian leadership, arguing that democracy requires constant effort while tyranny appeals to humanity\u2019s baser instincts and is therefore easier to sustain.',
    introduction:
      'Open by establishing that Ralph and Jack represent two models of leadership that compete throughout the novel. Ralph governs through consent, assembly and reasoned debate; Jack governs through fear, ritual and the promise of immediate gratification. Note that the Cold War context makes this conflict politically resonant: Golding is exploring why authoritarian leaders so often triumph over democratic ones. State your thesis.',
    paragraphs: [
      {
        point: 'Ralph\u2019s democratic leadership and its limitations',
        evidence:
          '"The world, that understandable and lawful world, was slipping away." \u2014 Ralph senses the loss of order.',
        analysis:
          'Ralph\u2019s leadership depends on the conch, the fire and the shelters \u2014 all structures that require collective agreement and sustained effort. Golding shows that democratic leadership is inherently demanding: it asks people to sacrifice immediate pleasure for long-term benefit (rescue). Ralph\u2019s growing despair reveals the fragility of democracy \u2014 it works only as long as people choose to participate.',
      },
      {
        point: 'Jack\u2019s authoritarian appeal: fear, ritual and immediate reward',
        evidence:
          '"Kill the pig. Cut her throat. Spill her blood." \u2014 Jack\u2019s tribal chant unites the hunters.',
        analysis:
          'Jack offers what Ralph cannot: excitement, identity and belonging. The face paint, the chant and the hunt create a powerful group psychology that satisfies emotional needs democracy ignores. Golding argues that authoritarianism is not just imposed from above \u2014 it is demanded from below. The boys choose Jack because his leadership speaks to their instincts.',
      },
      {
        point: 'The destruction of democracy: Piggy\u2019s death and the conch\u2019s shattering',
        evidence:
          '"The conch exploded into a thousand white fragments and ceased to exist." \u2014 democracy dies with Piggy.',
        analysis:
          'Golding makes the death of democracy physical and absolute. The conch does not fade; it explodes. Piggy does not drift away; he is murdered. The violence of the destruction argues that authoritarianism does not merely outcompete democracy \u2014 it destroys it. The simultaneous loss of the conch and Piggy shows that reason and democratic process are inseparable.',
      },
    ],
    conclusion:
      'Conclude by arguing that the Ralph\u2013Jack conflict is not a simple good-versus-evil binary. Golding shows that Ralph himself is tempted by violence (the mock hunt of Robert) and that Jack\u2019s leadership meets real psychological needs. The novel\u2019s argument is that democracy is better but harder, and that without constant vigilance it will always be vulnerable to the authoritarian alternative.',
    examTip:
      'Avoid presenting Ralph as purely good and Jack as purely evil. Examiners reward nuanced analysis. Show that Ralph is tempted by violence and that Jack provides things the boys genuinely need. This complexity is what makes the novel a serious political argument.',
  },
  {
    number: 3,
    question: 'How does Golding use the beast to explore ideas about fear and human nature?',
    thesisStatement:
      'Golding uses the beast as a symbol that evolves from external fear to internal truth, arguing that the real source of evil is not outside humanity but within it.',
    introduction:
      'Open by tracing the beast\u2019s evolution: from the littluns\u2019 nightmares (Chapter 2), through the "beast from water" and "beast from air" (the dead parachutist), to the Lord of the Flies\u2019 revelation that the beast is "part of you." Note that Golding structures the novel so that each manifestation of the beast brings the boys \u2014 and the reader \u2014 closer to the truth. State your thesis: the beast is not a monster but a mirror.',
    paragraphs: [
      {
        point: 'The beast as external fear: the littluns\u2019 nightmares',
        evidence:
          '"He says the beastie came in the dark." \u2014 A littlun reports seeing a snake-like creature.',
        analysis:
          'The earliest manifestation of the beast is formless and nocturnal \u2014 the shapeless fears of small children. Golding uses the littluns to show how fear begins: as something vague, irrational and easily dismissed. The older boys\u2019 failure to address these fears constructively allows them to grow. The beast is born from inattention.',
      },
      {
        point: 'The dead parachutist: the beast as projection',
        evidence:
          'Sam and Eric discover the dead parachutist on the mountain and flee in terror, reporting "the beast."',
        analysis:
          'The dead parachutist is a real object misidentified as the beast. Golding uses this to show how fear distorts perception: the boys project their terror onto something that is actually a casualty of the adult war above. The parachutist is also Golding\u2019s most pointed irony \u2014 the "beast from air" is a dead human, proving that the real threat comes from humanity, not from nature.',
      },
      {
        point: 'The Lord of the Flies: the beast as inner darkness',
        evidence:
          '"I\u2019m part of you. Close, close, close!" \u2014 The pig\u2019s head speaks to Simon.',
        analysis:
          'The Lord of the Flies is Golding\u2019s definitive statement on human nature. The beast is not a creature to be hunted but a condition to be acknowledged. "Part of you" eliminates the possibility of external blame. Simon understands this, but the others murder him rather than accept the truth. Golding argues that humanity would rather kill its prophets than confront its own darkness.',
      },
    ],
    conclusion:
      'Conclude by arguing that the beast\u2019s evolution mirrors the novel\u2019s argument. It begins as childish fear, becomes political tool (Jack exploits it to seize power), and ends as philosophical truth (the darkness of man\u2019s heart). The beast cannot be killed because it is not a thing but a tendency \u2014 the permanent possibility of evil within every human being.',
    examTip:
      'Track the beast\u2019s evolution chronologically through the novel. Examiners reward essays that show how a symbol develops and deepens rather than treating it as a static image. Use terms like "Golding develops the symbol" and "the beast is progressively redefined."',
  },
  {
    number: 4,
    question:
      'How does Golding present the theme of civilisation versus savagery in Lord of the Flies?',
    thesisStatement:
      'Golding presents civilisation as a learned, fragile set of behaviours that is no match for the instinctive pull of savagery, arguing that without external enforcement, social order will inevitably collapse.',
    introduction:
      'Open by establishing the novel\u2019s premise: a group of British schoolboys, products of civilisation, are stranded without adult authority. Note that the island functions as a controlled experiment \u2014 Golding removes the variable of civilisation and observes what remains. The result is savagery. State your thesis: civilisation in the novel is a surface, not a substance.',
    paragraphs: [
      {
        point: 'The initial attempt to recreate civilisation: the conch, the fire, the shelters',
        evidence:
          '"We\u2019ve got to have rules and obey them. After all, we\u2019re not savages." \u2014 Jack, ironically, in Chapter 2.',
        analysis:
          'The dramatic irony of Jack\u2019s statement is devastating: he will become the novel\u2019s primary savage. Golding shows that the boys\u2019 initial attempts at civilisation are imitative \u2014 they reproduce the forms (assemblies, rules, elected leaders) without understanding the substance. The conch gives the holder the right to speak, but it cannot compel others to listen. Civilisation requires not just rules but the willingness to follow them.',
      },
      {
        point: 'The gradual erosion of civilised behaviour',
        evidence:
          '"Roger gathered a handful of stones and began to throw them at Henry, throwing to miss." \u2014 Chapter 4.',
        analysis:
          'Roger\u2019s stone-throwing is Golding\u2019s most precise image of civilisation\u2019s fragility. Roger wants to hurt Henry but is restrained by "the taboo of the old life." This taboo is not innate \u2014 it is a memory of adult authority that weakens over time. By Chapter 11, Roger drops the boulder on Piggy without hesitation. Golding charts the distance between throwing to miss and killing to show that civilisation is a habit, not an instinct.',
      },
      {
        point: 'The triumph of savagery: the hunt for Ralph',
        evidence:
          '"They looked at each other, baffled, in love and hate." \u2014 Ralph and Jack during the final hunt.',
        analysis:
          'By the final chapter, the entire island has been set on fire and every boy except Ralph has joined Jack\u2019s tribe. Civilisation has not merely weakened \u2014 it has been actively destroyed. The fire, originally a signal for rescue (civilisation), has become a weapon of destruction (savagery). Golding\u2019s structural reversal of the fire\u2019s purpose encapsulates his argument in a single symbol.',
      },
    ],
    conclusion:
      'Conclude by arguing that the naval officer\u2019s arrival does not represent rescue. He is part of a warship engaged in the same violence the boys have enacted. Golding\u2019s final irony is that the adult world to which the boys return is fighting its own war \u2014 proving that civilisation is always under threat from the savagery it pretends to have conquered.',
    examTip:
      'Use the fire\u2019s transformation from signal to weapon as a structural argument. Tracking how a single symbol changes meaning throughout the novel demonstrates sophisticated understanding of authorial craft.',
  },
  {
    number: 5,
    question: 'How does Golding use Piggy\u2019s glasses as a symbol in Lord of the Flies?',
    thesisStatement:
      'Golding uses Piggy\u2019s glasses as a symbol of reason, science and civilisation whose progressive damage and theft charts the decline of rational thought and democratic order on the island.',
    introduction:
      'Open by noting that Piggy\u2019s glasses are the most versatile symbol in the novel. They represent intellectual clarity, scientific knowledge and the power to create fire (civilisation\u2019s most fundamental technology). Their progressive damage \u2014 one lens broken, then stolen entirely \u2014 mirrors the progressive destruction of everything they represent. State your thesis: the glasses\u2019 fate is the fate of civilisation.',
    paragraphs: [
      {
        point: 'The glasses as the source of fire: technology and civilisation',
        evidence:
          '"His specs \u2014 use them as burning glasses!" \u2014 the boys discover that Piggy\u2019s lenses can start fire.',
        analysis:
          'Fire is the fundamental technology of civilisation: it provides warmth, cooked food and, crucially, a signal for rescue. The glasses are the only means of creating fire on the island, which makes them the most valuable object in the novel. Golding connects intellectual capacity (Piggy\u2019s sight) to technological power (fire) to argue that civilisation depends on reason.',
      },
      {
        point: 'The breaking of one lens: the weakening of reason',
        evidence: 'Jack punches Piggy and breaks one lens of his glasses in Chapter 4.',
        analysis:
          'The breaking of one lens is Jack\u2019s first direct assault on reason and order. Piggy\u2019s diminished sight symbolises the diminishing influence of rational thought on the island. Golding makes the damage physical to make the abstract concrete: you can see reason being destroyed. The fact that Jack faces no consequences for this act shows that the democratic system has already lost its authority.',
      },
      {
        point: 'The theft of the glasses: the seizure of power',
        evidence:
          'Jack\u2019s tribe raids Ralph\u2019s camp at night to steal Piggy\u2019s glasses in Chapter 10.',
        analysis:
          'The theft is not about sight but about power. Jack does not want Piggy to see; he wants to control fire. The glasses pass from the rational (Piggy) to the authoritarian (Jack), symbolising the transfer of technological power from democratic to tyrannical hands. Golding shows that knowledge and technology are not inherently civilising \u2014 they serve whoever controls them.',
      },
    ],
    conclusion:
      'Conclude by arguing that the glasses\u2019 journey \u2014 from Piggy\u2019s face to Jack\u2019s possession \u2014 encapsulates the novel\u2019s entire narrative arc. They begin as instruments of sight and end as instruments of power. Golding\u2019s message is that technology and knowledge are neutral tools: they can sustain civilisation or serve tyranny, depending on who wields them. The theft of the glasses is, in symbolic terms, a coup.',
    examTip:
      'Track the glasses through three stages: intact (civilisation functioning), one lens broken (civilisation weakening), stolen (civilisation destroyed). This three-stage structure gives your essay a clear and persuasive shape.',
  },
  {
    number: 6,
    question:
      'How does Golding use the ending of Lord of the Flies to convey his message about human nature?',
    thesisStatement:
      'Golding crafts an ending that refuses to provide genuine rescue, using the naval officer\u2019s arrival to expose the adult world as a larger version of the boys\u2019 savagery and to deny the reader any consolation.',
    introduction:
      'Open by describing the ending: Ralph, hunted by every other boy on the island, stumbles onto the beach and collapses at the feet of a naval officer who has been attracted by the fire. The officer is embarrassed by the boys\u2019 behaviour and makes a Coral Island reference. Ralph weeps. Note that this ending has been read as rescue, as irony and as tragedy. State your thesis: the ending is Golding\u2019s most deliberate and devastating structural choice.',
    paragraphs: [
      {
        point: 'The naval officer as false rescuer',
        evidence:
          '"A naval officer stood on the sand, looking down at Ralph in wary ceremonial surprise."',
        analysis:
          '"Ceremonial" reveals the officer as a representative of the same civilised order the boys have destroyed. But he is part of a warship \u2014 an instrument of war. Golding\u2019s irony is precise: the "rescuer" is engaged in the same violence, only with better technology. The officer represents not the triumph of civilisation but its hypocrisy.',
      },
      {
        point: 'The Coral Island reference and the failure of Victorian optimism',
        evidence:
          '"I should have thought that a pack of British boys would have been able to put up a better show than that."',
        analysis:
          'The officer\u2019s expectation that British boys should behave better is a direct quotation of Victorian colonial confidence \u2014 the same confidence Ballantyne\u2019s Coral Island embodies. Golding has spent twelve chapters demolishing this assumption. The officer\u2019s inability to finish his sentence shows that reality has outstripped his framework. He does not understand what has happened because his worldview cannot accommodate it.',
      },
      {
        point: 'Ralph\u2019s weeping: the recognition of universal darkness',
        evidence: '"Ralph wept for the end of innocence, the darkness of man\u2019s heart."',
        analysis:
          'Ralph\u2019s tears are not for himself but for a lost belief. "The darkness of man\u2019s heart" is Golding\u2019s thesis stated in Ralph\u2019s voice. The tricolon \u2014 innocence, darkness, Piggy \u2014 moves from the abstract to the personal, grounding the philosophical argument in grief. Golding gives the novel\u2019s conclusion to Ralph rather than the narrator because recognition of truth must be earned through experience, not stated from outside.',
      },
    ],
    conclusion:
      'Conclude by arguing that the ending is structured to deny comfort. The officer does not understand; Ralph understands but too late; the reader understands but can do nothing. Golding forces the reader into Simon\u2019s position: seeing the truth about human nature but unable to change it. The ending is not a rescue but a transfer, and the final image \u2014 the officer turning back to his warship \u2014 confirms that the violence of the island is the violence of the world.',
    examTip:
      'The ending is one of the most commonly examined passages. Practise analysing Ralph\u2019s final weeping in detail: the tricolon structure, the move from abstract to personal, the word "darkness." This passage alone can carry a strong AO2 paragraph.',
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function LOTFEssayPlansPage() {
  const t = useT()
  const tEssayTpl = t('rev.texts.common.essay_n')
  const tParagraphTpl = t('rev.texts.common.paragraph_n_dash')
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Lord of the Flies',
            url: 'https://theenglishhub.app/revision/texts/lord-of-the-flies',
          },
          {
            name: 'Essay Plans',
            url: 'https://theenglishhub.app/revision/texts/lord-of-the-flies/essay-plans',
          },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="Lord of the Flies" textType="novel" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
          <Link
            href="/revision/texts/lord-of-the-flies"
            className="mb-4 inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
          >
            <ArrowLeft className="size-3.5" />
            {t('rev.texts.lotf.back')}
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-clay-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-clay-700 dark:text-clay-300">
              <FileText className="size-3" />
              {t('rev.texts.common.essay_plans')}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border/60 px-3 py-1 text-xs text-primary">
              <Sparkles className="size-3" />
              AO1 / AO2 / AO3
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('rev.texts.lotf.essays.title')}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{t('rev.texts.lotf.essays.byline')}</p>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t('rev.texts.lotf.essays.intro')}</p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-500/20 bg-clay-500/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-700 dark:text-clay-300" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-1 font-bold text-foreground">
                {t('rev.texts.common.how_to_use_essay_plans')}
              </p>
              <p>
                Each plan provides a structure you can adapt to your own argument. Do not memorise
                them word-for-word &mdash; examiners reward original thinking. Use the thesis
                statements as models for constructing your own, and practise writing individual
                paragraphs using the Point&ndash;Evidence&ndash;Analysis structure provided.
              </p>
            </div>
          </div>
        </section>

        {/* Essay Plans */}
        {ESSAY_PLANS.map((plan) => (
          <section key={plan.number} className="mt-12">
            {/* Essay header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex size-10 items-center justify-center rounded-xl bg-clay-500/10">
                <FileText className="size-5 text-clay-700 dark:text-clay-300" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {tEssayTpl.replace('{n}', String(plan.number))}
              </h2>
            </div>

            {/* Question */}
            <div className="rounded-xl border border-border/60 bg-card p-5 mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                {t('rev.texts.common.question')}
              </p>
              <p className="font-heading text-lg font-semibold text-foreground italic">
                {plan.question}
              </p>
            </div>

            {/* Thesis */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                {t('rev.texts.common.thesis_statement')}
              </p>
              <p className="text-sm leading-relaxed text-foreground font-medium">
                {plan.thesisStatement}
              </p>
            </div>

            {/* Introduction */}
            <div className="rounded-xl border border-border/60 bg-card p-4 mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                {t('rev.texts.common.introduction')}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{plan.introduction}</p>
            </div>

            {/* Body paragraphs */}
            {plan.paragraphs.map((para, i) => (
              <div key={i} className="rounded-xl border border-border/60 bg-card p-5 mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  {tParagraphTpl.replace('{n}', String(i + 1))}
                  {para.point}
                </p>

                <div className="mb-3 rounded-lg border border-clay-500/20 bg-clay-500/[0.08] p-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-clay-700 dark:text-clay-300 mb-1">
                    {t('rev.texts.common.evidence')}
                  </p>
                  <p className="text-sm leading-relaxed text-foreground italic">{para.evidence}</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    {t('rev.texts.common.analysis')}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{para.analysis}</p>
                </div>
              </div>
            ))}

            {/* Conclusion */}
            <div className="rounded-xl border border-border/60 bg-card p-4 mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                {t('rev.texts.common.conclusion')}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{plan.conclusion}</p>
            </div>

            {/* Exam tip */}
            <div className="rounded-xl border border-clay-500/20 bg-clay-500/10 p-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="mt-0.5 size-4 shrink-0 text-clay-700 dark:text-clay-300" />
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-clay-700 dark:text-clay-300">
                    {t('rev.texts.common.exam_tip')}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{plan.examTip}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            {plan.number < ESSAY_PLANS.length && (
              <div className="mt-10 border-t border-border/60" />
            )}
          </section>
        ))}

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-border/60 bg-primary/5 p-6">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {t('rev.texts.common.continue_studying')}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('rev.texts.lotf.essays.continue_sub')}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/revision/texts/lord-of-the-flies/characters"
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {t('rev.texts.common.characters')}
            </Link>
            <Link
              href="/revision/texts/lord-of-the-flies/themes"
              className="inline-flex items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
            >
              {t('rev.texts.common.themes')}
            </Link>
            <Link
              href="/revision/texts/lord-of-the-flies/key-quotes"
              className="inline-flex items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
            >
              {t('rev.texts.common.key_quotes')}
            </Link>
          </div>
        </section>

        {/* Fair-dealing notice */}
        <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
          {t('rev.texts.lotf.faber_fair_dealing')}
        </p>
      </div>
    </div>
  )
}
