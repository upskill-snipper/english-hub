'use client'

import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
const themeGroups = [
  {
    theme: 'Colonialism and cultural disruption',
    quotes: [
      {
        text: 'He has put a knife on the things that held us together and we have fallen apart.',
        speaker: 'Obierika',
        analysis:
          'The novel\u2019s title in miniature. Obierika identifies colonialism as a blade inserted into existing bonds, not a force arriving from outside.',
      },
      {
        text: 'The white man is very clever. He came quietly and peaceably with his religion.',
        speaker: 'Obierika',
        analysis:
          'Achebe shows colonialism as a slow, multi-stage process. By the time the clan perceives the threat clearly, the damage is done.',
      },
      {
        text: 'Does the white man understand our custom about land? How can he when he does not even speak our tongue?',
        speaker: 'Obierika',
        analysis:
          'Language is power. The colonisers\u2019 inability to speak Igbo is not a minor inconvenience but a fundamental disqualification.',
      },
      {
        text: 'One could almost write a whole chapter on him. Perhaps not a whole chapter but a reasonable paragraph.',
        speaker: 'The District Commissioner',
        analysis:
          'The novel\u2019s most devastating irony. Achebe\u2019s entire book is the answer to the Commissioner\u2019s dismissive footnote.',
      },
    ],
  },
  {
    theme: 'Masculinity and fear of weakness',
    quotes: [
      {
        text: 'His whole life was dominated by fear, the fear of failure and of weakness.',
        speaker: 'Narrator',
        analysis:
          'Achebe names the engine of Okonkwo\u2019s tragedy: not ambition but terror. Every violent act flows from this fear.',
      },
      {
        text: 'He was not the man to stop beating somebody half-way through.',
        speaker: 'Narrator',
        analysis:
          'Okonkwo\u2019s rigidity is literal: he cannot moderate, compromise, or stop. The line captures both his strength and its cost.',
      },
      {
        text: 'Okonkwo never showed any emotion openly, unless it be the emotion of anger.',
        speaker: 'Narrator',
        analysis:
          'Emotional range is collapsed into a single acceptable register. Achebe makes clear that Okonkwo feels deeply but has only one outlet.',
      },
      {
        text: 'She should have been a boy.',
        speaker: 'Okonkwo (about Ezinma)',
        analysis:
          'Okonkwo\u2019s highest praise for his daughter is to wish she were not female. The remark reveals both genuine respect and total inability to value femininity.',
      },
    ],
  },
  {
    theme: 'Tradition versus change',
    quotes: [
      {
        text: 'The clan was like a lizard; if it lost its tail it soon grew another.',
        speaker: 'Narrator',
        analysis:
          'Achebe presents Igbo society as resilient and adaptive before colonialism. Change is not inherently destructive \u2014 it is the kind of change that matters.',
      },
      {
        text: 'It was the poetry of the new religion, something felt in the marrow.',
        speaker: 'Narrator (about Nwoye)',
        analysis:
          'Nwoye\u2019s conversion is presented as an emotional response, not an intellectual capitulation. The hymn speaks to his unprocessed grief.',
      },
      {
        text: 'He mourned for the clan, which he saw breaking up and falling apart.',
        speaker: 'Narrator',
        analysis:
          'Okonkwo\u2019s grief is real but his proposed solution \u2014 violence \u2014 cannot reverse the process. The mourning is the novel\u2019s tragic register.',
      },
    ],
  },
  {
    theme: 'Fate, chi and personal agency',
    quotes: [
      {
        text: 'When a man says yes his chi also affirms.',
        speaker: 'Proverb',
        analysis:
          'Igbo theology ties personal agency to spiritual destiny. Okonkwo\u2019s success seems to confirm this \u2014 until events overtake him.',
      },
      {
        text: 'Clearly his personal god or chi was not made for great things.',
        speaker: 'Narrator',
        analysis:
          'The narrative voice passes a judgment Okonkwo would reject. Achebe leaves it ambiguous whether this is fate or character.',
      },
      {
        text: 'A man could not rise beyond the destiny of his chi.',
        speaker: 'Narrator',
        analysis:
          'The ceiling of Okonkwo\u2019s ambition. The proverb introduces a determinism the novel takes seriously without fully endorsing.',
      },
    ],
  },
  {
    theme: 'Gender and the feminine principle',
    quotes: [
      {
        text: 'When there is sorrow and bitterness he finds refuge in his motherland.',
        speaker: 'Uchendu',
        analysis:
          'Uchendu\u2019s "Mother is Supreme" speech is the novel\u2019s most explicit argument for the feminine principle. Okonkwo\u2019s exile forces him into the space he has always dismissed.',
      },
      {
        text: 'Proverbs are the palm-oil with which words are eaten.',
        speaker: 'Narrator',
        analysis:
          'Language itself is presented through an image of nourishment \u2014 food, communal eating, maternal provision. Form and theme merge.',
      },
      {
        text: 'She walked through Okonkwo\u2019s hut into the barn and had not even looked at her dangerously.',
        speaker: 'Narrator (about Chielo)',
        analysis:
          'Chielo the priestess commands Okonkwo\u2019s obedience when she comes for Ezinma. Even Okonkwo\u2019s masculine authority cannot override the spiritual power of the feminine divine.',
      },
    ],
  },
  {
    theme: 'Language, proverbs and narrative form',
    quotes: [
      {
        text: 'Among the Ibo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten.',
        speaker: 'Narrator',
        analysis:
          'The novel\u2019s most famous sentence. Achebe announces his method: English prose saturated with Igbo rhetorical form.',
      },
      {
        text: 'The sun will shine on those who stand before it shines on those who kneel under them.',
        speaker: 'Proverb',
        analysis:
          'Igbo proverbs carry political philosophy. This one asserts the value of independence and self-reliance, the qualities Okonkwo takes to an extreme.',
      },
      {
        text: 'The Pacification of the Primitive Tribes of the Lower Niger.',
        speaker: 'District Commissioner\u2019s book title',
        analysis:
          'The final sentence of the novel. Every word \u2014 "pacification", "primitive", "tribes" \u2014 is a colonial distortion. Achebe\u2019s novel is the counter-text.',
      },
    ],
  },
]

export default function ThingsFallApartKeyQuotesPage() {
  const tr = useT()
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Prose', url: 'https://theenglishhub.app/igcse/edexcel/prose' },
          {
            name: 'Things Fall Apart',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/things-fall-apart',
          },
          {
            name: 'Key Quotations',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/things-fall-apart/key-quotes',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/prose/things-fall-apart" />}
        >
          <ArrowLeft className="size-3.5" />
          {tr('igcse.page.back_to')} Things Fall Apart
        </Button>
      </div>

      <StudyTools textName="Things Fall Apart" textType="novel" examBoard="IGCSE Edexcel" />

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              {tr('igcse.page.badge_edexcel_lit')}
            </Badge>
            <Badge variant="secondary">{tr('igcse.page.section.key_quotes')}</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Things Fall Apart: Key Quotes
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Twenty essential quotations organised by theme &mdash; with speaker, context and
            analysis for exam revision.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">Fair dealing notice</h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              All quotations are short extracts included under the fair dealing provision of the
              Copyright, Designs and Patents Act 1988 for the purpose of criticism, review and
              study. This page is not a substitute for reading the full novel.
            </p>
          </div>
        </div>
      </section>

      {themeGroups.map((group) => (
        <section key={group.theme}>
          <div className="mb-5 flex items-center gap-3">
            <Quote className="size-5 text-primary" />
            <h2 className="text-heading-lg font-heading text-foreground">{group.theme}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {group.quotes.map((q, i) => (
              <div key={i} className="rounded-xl border border-border/60 bg-card p-5">
                <blockquote className="border-l-2 border-primary/40 pl-3 text-body-md italic text-foreground">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <p className="mt-2 text-body-xs font-medium text-primary">&mdash; {q.speaker}</p>
                <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                  {q.analysis}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Things Fall Apart &copy; The Estate of Chinua Achebe. Short quotations reproduced under the
        fair dealing provision of the CDPA 1988 for criticism and review.
      </p>
    </div>
  )
}
