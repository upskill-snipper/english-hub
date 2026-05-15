import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, PenLine } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'To Kill a Mockingbird Essay Plans — Edexcel IGCSE Literature',
    description:
      'Five IGCSE essay plans for To Kill a Mockingbird with PEEL paragraphs: racism and justice, moral courage, Scout\u2019s growth, the mockingbird symbol and Atticus as a moral figure.',
  },
  title: 'To Kill a Mockingbird Essay Plans — Edexcel IGCSE Literature',
  description:
    'Five IGCSE essay plans for To Kill a Mockingbird with PEEL paragraphs: racism and justice, moral courage, Scout\u2019s growth, the mockingbird symbol and Atticus as a moral figure.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird/essay-plans',
  },
}

const essayPlans = [
  {
    title: 'How does Lee present racism and injustice in the novel?',
    introduction:
      'Define racism as both personal prejudice and systemic legal failure. Thesis: Lee uses Tom Robinson\u2019s trial, the lynch mob, and the missionary tea to expose racism as a structural feature of Maycomb, not just individual cruelty.',
    paragraphs: [
      {
        point:
          'The trial reveals how the legal system performs fairness while delivering a pre-written verdict.',
        evidence:
          '"When it\u2019s a white man\u2019s word against a black man\u2019s, the white man always wins."',
        explanation:
          'Atticus names the structural inequality plainly, without rhetorical flourish, which makes the diagnosis feel clinical and irrefutable.',
        link: 'This connects to the 1930s Jim Crow context, where Edexcel expects students to relate the text to its historical moment.',
      },
      {
        point:
          'The lynch mob scene shows how racism operates through collective action, erasing individual conscience.',
        evidence: '"A mob\u2019s always made up of people."',
        explanation:
          'Atticus rehumanises the mob after Scout\u2019s intervention. The paradox \u2014 people who are decent individually become violent collectively \u2014 is Lee\u2019s sharpest insight into how racism functions.',
        link: 'Link to the Scottsboro Boys context and the history of extrajudicial violence against Black men in the American South.',
      },
      {
        point:
          'The missionary tea exposes the "polite" racism of Maycomb\u2019s respectable white women.',
        evidence: '"The handful of people who say a fair trial is not marked White Only."',
        explanation:
          'Miss Maudie\u2019s remark connects the courtroom to broader segregation. The ladies\u2019 concern for African tribes while ignoring local injustice creates dramatic irony.',
        link: 'Lee\u2019s critique extends beyond overt violence to show how everyday social rituals sustain racism.',
      },
    ],
    conclusion:
      'Lee presents racism as systemic rather than individual, embedded in Maycomb\u2019s legal system, mob mentality and social rituals. The novel\u2019s power lies in showing that good people can sustain an unjust system.',
  },
  {
    title: 'Explore how Lee presents the theme of moral courage.',
    introduction:
      'Define moral courage as principled action despite certain failure. Thesis: Lee uses Atticus\u2019s definition through Mrs Dubose, his own defence of Tom, and Scout\u2019s confrontation with the mob to present courage as an ethical choice, not a physical trait.',
    paragraphs: [
      {
        point: 'Atticus redefines courage through Mrs Dubose\u2019s morphine fight.',
        evidence:
          '"Real courage is when you\u2019re licked before you begin but you begin anyway."',
        explanation:
          'By attaching the novel\u2019s key definition to an unlikely figure \u2014 a dying, racist old woman \u2014 Lee separates moral courage from moral perfection. Courage is the act, not the person.',
        link: 'This definition retroactively frames Atticus\u2019s defence of Tom as courageous precisely because he expects to lose.',
      },
      {
        point:
          'Atticus\u2019s defence of Tom is presented as a moral obligation, not a heroic choice.',
        evidence: '"Simply because we were licked a hundred years before we started."',
        explanation:
          'The phrase "a hundred years" places the trial in a longer history of racial injustice. Atticus does not expect victory; his courage lies in acting on principle regardless.',
        link: 'Connect to AO4 context: the Civil Rights Movement had not yet achieved legislative change when Lee wrote the novel.',
      },
      {
        point:
          'Scout\u2019s intervention at the jail demonstrates that innocence can be a form of moral courage.',
        evidence: '"Hey, Mr Cunningham. I go to school with your boy."',
        explanation:
          'Scout does not intend to be brave \u2014 she uses social convention instinctively. Lee suggests that empathy, even naive empathy, can disrupt collective violence.',
        link: 'This links back to Atticus\u2019s empathy lesson in Chapter 3 and shows Scout beginning to apply it.',
      },
    ],
    conclusion:
      'Lee presents moral courage as doing right when you know you will fail. It is available to all \u2014 the dying Mrs Dubose, the principled Atticus and the innocent Scout \u2014 and is defined by commitment to conscience over outcome.',
  },
  {
    title: 'How does Scout change and develop throughout the novel?',
    introduction:
      'Frame Scout\u2019s bildungsroman arc. Thesis: Scout moves from a literal, combative child to someone capable of genuine empathy, completing the moral education Atticus began in Chapter 3 when she stands on the Radley porch in Chapter 31.',
    paragraphs: [
      {
        point:
          'In the early chapters Scout responds to conflict with her fists, reflecting a child\u2019s literal sense of justice.',
        evidence: '"He ain\u2019t company, Cal, he\u2019s just a Cunningham."',
        explanation:
          'Scout\u2019s class prejudice mirrors Maycomb\u2019s wider social hierarchy. Her blunt language shows she has absorbed assumptions she does not yet understand.',
        link: 'This establishes the starting point of her moral arc, which Atticus begins to reshape with his empathy lesson.',
      },
      {
        point: 'The trial forces Scout to witness injustice she cannot yet fully process.',
        evidence:
          '"It\u2019s not right, Atticus." (Jem\u2019s line, echoing Scout\u2019s confusion)',
        explanation:
          'While Jem articulates his disillusionment, Scout absorbs the trial more quietly. Her naivety actually protects her: she does not yet grasp the sexual dimensions of the case.',
        link: 'Lee\u2019s dual narration \u2014 child perspective, adult retrospection \u2014 allows the reader to see what Scout cannot.',
      },
      {
        point:
          'On the Radley porch Scout completes Atticus\u2019s empathy lesson by seeing Maycomb from Boo\u2019s perspective.',
        evidence: '"Atticus, he was real nice. Most people are, Scout, when you finally see them."',
        explanation:
          'The word "see" carries both literal and moral weight. Scout has moved from Gothic fantasy (Boo as phantom) to genuine human recognition.',
        link: 'The ending mirrors and answers Chapter 3: Scout can now "climb into another person\u2019s skin and walk around in it".',
      },
    ],
    conclusion:
      'Scout\u2019s development is the novel\u2019s structural spine. She begins as a fighter, is educated through crisis, and ends standing on the Radley porch \u2014 the physical embodiment of empathy Atticus taught her.',
  },
  {
    title: 'How does Lee use the mockingbird as a symbol?',
    introduction:
      'Introduce the mockingbird as a symbol of innocent vulnerability. Thesis: Lee attaches the symbol first to the idea of harmlessness, then to Tom Robinson and Boo Radley, using it to argue that destroying innocence is the novel\u2019s defining sin.',
    paragraphs: [
      {
        point:
          'Miss Maudie establishes the mockingbird as a symbol of harmless creatures that give only beauty.',
        evidence: '"Mockingbirds don\u2019t do one thing but make music for us to enjoy."',
        explanation:
          'The definition is deliberately simple \u2014 pitched at a child\u2019s understanding \u2014 so that when it is later applied to human beings, the moral is already felt.',
        link: 'Link to the title: "to kill" a mockingbird is presented as the ultimate transgression against innocence.',
      },
      {
        point:
          'Tom Robinson is the novel\u2019s primary mockingbird: innocent, helpful, destroyed by racism.',
        evidence: '"He likened Tom\u2019s death to the senseless slaughter of songbirds."',
        explanation:
          'Mr Underwood\u2019s editorial makes the symbolism explicit. "Senseless" implies that Tom\u2019s death serves no purpose \u2014 the system kills him not out of necessity but out of reflex.',
        link: 'Connect to context: Lee wrote against the backdrop of ongoing racial violence in the American South.',
      },
      {
        point:
          'Boo Radley is the second mockingbird, and Scout\u2019s recognition of this completes the motif.',
        evidence: '"It\u2019d be sort of like shootin\u2019 a mockingbird, wouldn\u2019t it?"',
        explanation:
          'Scout applies the symbol independently, showing she has internalised the lesson. Protecting Boo from publicity becomes an act of moral principle, not just pragmatism.',
        link: 'Sheriff Tate\u2019s decision parallels Atticus\u2019s moral framework: protecting the vulnerable overrides strict legality.',
      },
    ],
    conclusion:
      'The mockingbird symbol unifies the novel\u2019s two main plots \u2014 the trial and the Boo Radley story \u2014 under a single moral principle: it is wrong to destroy what is innocent and harmless.',
  },
  {
    title: 'How does Lee present Atticus Finch as a moral figure?',
    introduction:
      'Acknowledge Atticus\u2019s role as the novel\u2019s moral centre while noting critical debate about his limitations. Thesis: Lee presents Atticus through his actions, his language and his children\u2019s perspective as a figure whose moral authority comes from consistency between private belief and public action.',
    paragraphs: [
      {
        point: 'Atticus\u2019s language models respect, reason and equality in every interaction.',
        evidence:
          '"The one thing that doesn\u2019t abide by majority rule is a person\u2019s conscience."',
        explanation:
          'Atticus locates moral authority in individual conscience rather than democratic or social consensus. His register is always measured, treating children and adults with the same seriousness.',
        link: 'This connects to AO2: Lee uses Atticus\u2019s language choices to characterise him as rational and principled.',
      },
      {
        point:
          'Atticus practises what he preaches: his actions in the trial match his private morality.',
        evidence: '"You\u2019ll see white men cheat black men every day of your life."',
        explanation:
          'Atticus does not romanticise the situation. He acknowledges systemic injustice bluntly while still choosing to fight it, which prevents the novel from turning him into a naive optimist.',
        link: 'Critics have debated whether Atticus is too perfect; this line complicates that reading by showing his awareness of failure.',
      },
      {
        point:
          'Lee filters Atticus through Scout\u2019s dual perspective, allowing both admiration and irony.',
        evidence: '"I know now what he was trying to do, but Atticus was only a man."',
        explanation:
          'The adult narrator gently undermines the child\u2019s hero-worship. Lee\u2019s technique prevents Atticus from becoming a flat symbol: he is presented as morally serious but humanly limited.',
        link: 'Link to structure: the dual narration is essential to how the reader receives Atticus \u2014 through the filter of a child who is growing up.',
      },
    ],
    conclusion:
      'Lee presents Atticus as the novel\u2019s moral touchstone through consistent language, principled action and the dual lens of Scout\u2019s narration. He is neither perfect nor naive, but his consistency between word and deed is what gives him authority.',
  },
]

export default async function TkamEssayPlansPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Prose', url: 'https://theenglishhub.app/igcse/edexcel/prose' },
          {
            name: 'To Kill a Mockingbird',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird',
          },
          {
            name: 'Essay Plans',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird/essay-plans',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/prose/to-kill-a-mockingbird" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to To Kill a Mockingbird
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Essay plans</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            To Kill a Mockingbird: Essay Plans
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Five common IGCSE essay questions with full PEEL paragraph plans. Each plan includes an
            introduction, three developed paragraphs (Point, Evidence, Explanation, Link) and a
            conclusion.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing (CDPA 1988) for study and criticism.
              These plans are revision aids, not model answers.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        {essayPlans.map((plan, idx) => (
          <article key={idx} className="rounded-xl border border-border/60 bg-card overflow-hidden">
            <div className="border-b border-border/60 bg-muted/30 p-5">
              <div className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-body-sm font-semibold text-primary">
                  {idx + 1}
                </span>
                <h2 className="text-heading-md font-heading text-foreground">{plan.title}</h2>
              </div>
            </div>

            <div className="p-5 space-y-5">
              {/* Introduction */}
              <div>
                <h3 className="text-body-xs font-semibold uppercase tracking-wide text-primary flex items-center gap-1.5">
                  <PenLine className="size-3.5" />
                  Introduction
                </h3>
                <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                  {plan.introduction}
                </p>
              </div>

              {/* PEEL paragraphs */}
              {plan.paragraphs.map((para, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-lg border border-border/40 bg-muted/10 p-4 space-y-2"
                >
                  <h4 className="text-body-sm font-semibold text-foreground">
                    Paragraph {pIdx + 1}
                  </h4>
                  <div className="grid gap-2">
                    <p className="text-body-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Point: </span>
                      {para.point}
                    </p>
                    <blockquote className="border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
                      {para.evidence}
                    </blockquote>
                    <p className="text-body-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Explanation: </span>
                      {para.explanation}
                    </p>
                    <p className="text-body-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Link: </span>
                      {para.link}
                    </p>
                  </div>
                </div>
              ))}

              {/* Conclusion */}
              <div>
                <h3 className="text-body-xs font-semibold uppercase tracking-wide text-primary flex items-center gap-1.5">
                  <PenLine className="size-3.5" />
                  Conclusion
                </h3>
                <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                  {plan.conclusion}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism
        and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
