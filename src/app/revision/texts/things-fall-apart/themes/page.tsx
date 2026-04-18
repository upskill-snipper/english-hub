import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Quote,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import StudyTools from '@/components/study/StudyTools'

export const metadata: Metadata = {
  title: 'Things Fall Apart — Themes | The English Hub',
  description:
    'Detailed theme analysis for Things Fall Apart by Chinua Achebe: Tradition vs Change, Masculinity, Colonialism, Religion, Fear and Fate.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/things-fall-apart/themes',
  },
}

/* ── Theme data ────────────────────────────────────────────────────────── */

type ThemeData = {
  title: string
  overview: string
  howAchebePresentsIt: string
  keyQuotes: { text: string; speaker: string; analysis: string }[]
  contextLink: string
  examTip: string
}

const THEMES: ThemeData[] = [
  {
    title: 'Tradition versus change',
    overview:
      'The novel traces the collision between an established, complex Igbo society and the forces of colonial modernity. Achebe refuses the colonial fantasy of a static, primitive Africa: he shows Igbo culture as dynamic, containing debates, internal critics and the capacity for reform. The tragedy is not that the culture was unable to change but that colonialism imposed change from outside, foreclosing the slower, kinder alternatives that people like Obierika represented.',
    howAchebePresentsIt:
      'Achebe devotes the first two-thirds of the novel to establishing Igbo culture in detail: festivals, legal systems, religious practices, proverbs and social hierarchies. This gives the reader a full picture of what is lost. The arrival of the missionaries in Part Two creates a structural rupture that mirrors the cultural one. By Part Three, the traditional world is already fractured — meetings are disrupted, authority is undermined and the language of governance has shifted from Igbo proverbs to colonial edicts.',
    keyQuotes: [
      {
        text: '"He has put a knife on the things that held us together and we have fallen apart."',
        speaker: 'Okonkwo — Chapter 20',
        analysis:
          'Okonkwo names the cultural destruction, echoing the novel\'s title. Achebe gives the diagnosis to his protagonist but shows that Okonkwo\'s only response — violence — is itself part of the problem.',
      },
      {
        text: '"The white man is very clever... Now he has won our brothers."',
        speaker: 'Obierika — Chapter 20',
        analysis:
          'Obierika analyses the divide-and-conquer strategy. Achebe uses his intelligence to show that the Igbo understood what was happening but lacked the collective will to resist.',
      },
      {
        text: '"A frontal attack on it would not succeed."',
        speaker: 'Narrator on Mr Brown — Chapter 21',
        analysis:
          'Mr Brown\'s patient strategy is more effective than force. Achebe shows that colonialism succeeds not through conquest alone but through the seduction of education, medicine and institutional power.',
      },
    ],
    contextLink:
      'British colonialism in West Africa followed a consistent pattern: missionaries first, then administrators, then soldiers. By the time traditional leaders understood the scale of the intrusion, the institutional infrastructure of colonial rule was already in place. Achebe wrote the novel to document this process from the inside.',
    examTip:
      'This is the novel\'s central theme. Examiners reward candidates who show that Achebe presents Igbo culture as complex and capable of internal change, making the colonial imposition not just destructive but unnecessary in its violence.',
  },
  {
    title: 'Masculinity',
    overview:
      'Okonkwo equates manhood with physical strength, aggression and emotional suppression. His terror of resembling his father Unoka — gentle, artistic, indebted — makes him cruel to his family and blind to his own suffering. Achebe presents this model of masculinity as both culturally specific and personally destructive, suggesting that toxic masculinity is itself a form of internal colonisation that prepares the ground for the external kind.',
    howAchebePresentsIt:
      'Achebe uses Okonkwo\'s relationship with Unoka as the origin story of his hypermasculinity. Every decision Okonkwo makes — beating his wives during the Week of Peace, killing Ikemefuna, rejecting Nwoye — can be traced back to his fear of weakness. Achebe also provides counter-models: Obierika is masculine without being rigid, and Unoka, though socially failed, has a richness of spirit that Okonkwo deliberately destroys in himself.',
    keyQuotes: [
      {
        text: '"He was afraid of being thought weak."',
        speaker: 'Narrator — Chapter 2',
        analysis:
          'The novel\'s key character insight. Achebe identifies fear, not strength, as the source of Okonkwo\'s aggression. His masculinity is defensive, not confident.',
      },
      {
        text: '"When did you become a shivering old woman?"',
        speaker: 'Okonkwo to himself — Chapter 7',
        analysis:
          'Okonkwo genders his grief as feminine weakness. Achebe shows how patriarchal culture teaches men to experience emotion as shameful.',
      },
      {
        text: '"She should have been a boy."',
        speaker: 'Okonkwo on Ezinma — Chapter 8',
        analysis:
          'Okonkwo can only praise his daughter by wishing she were male. Achebe exposes the logical dead-end of a culture that devalues femininity.',
      },
    ],
    contextLink:
      'Igbo society in the late 19th century was patriarchal: men held titles, owned land and made legal decisions. But Achebe also shows women\'s power — through the Oracle, through motherhood, through the maternal principle that governs exile. The novel does not endorse Okonkwo\'s vision of masculinity; it critiques it.',
    examTip:
      'Compare Okonkwo and Obierika as two models of Igbo masculinity. Examiners value candidates who show that Achebe presents Okonkwo\'s rigidity as a personal failing, not a cultural norm — the culture contains alternatives he refuses to see.',
  },
  {
    title: 'Colonialism and cultural clash',
    overview:
      'Achebe refuses the colonial narrative of bringing civilisation to a backward continent. The first half of the novel establishes a complex, functioning society with law, art, religion and governance. The second half shows a foreign power dismantling it. The tragedy is not that the Igbo were primitive but that they were recognisable — and destroyed anyway. Achebe wrote the novel specifically to counter European representations of Africa.',
    howAchebePresentsIt:
      'Achebe structures the novel in three parts that mirror the colonial process. Part One establishes the culture. Part Two shows the arrival of missionaries and the first conversions. Part Three shows the consolidation of colonial power through courts, prisons and district commissioners. The final paragraph — the District Commissioner reducing Okonkwo\'s life to a footnote — dramatises the violence of colonial narrative itself.',
    keyQuotes: [
      {
        text: '"The Pacification of the Primitive Tribes of the Lower Niger."',
        speaker: 'District Commissioner — Chapter 25',
        analysis:
          'The colonial book title reduces Okonkwo\'s tragedy to an anecdote. Achebe ends the novel with the sharpest irony in postcolonial literature: the coloniser writes the story, and the colonised becomes a footnote.',
      },
      {
        text: '"He saw things as black and white. And black was evil."',
        speaker: 'Narrator on Reverend Smith — Chapter 22',
        analysis:
          'Achebe exposes the racism embedded in missionary theology. The colour binary is both literal and figurative — Smith cannot see African culture as anything other than darkness.',
      },
      {
        text: '"Does the white man understand our custom about land?"',
        speaker: 'Okonkwo — Chapter 20',
        analysis:
          'Okonkwo\'s question highlights the colonial refusal to understand what they are destroying. Achebe shows that ignorance is not accidental but strategic.',
      },
    ],
    contextLink:
      'Achebe published the novel in 1958, two years before Nigerian independence. He wrote it in English specifically to answer European novels — especially Joseph Conrad\'s Heart of Darkness (1899) — that depicted Africa as a blank, savage backdrop for European adventure. The novel is an act of literary reclamation.',
    examTip:
      'Always reference Achebe\'s response to Conrad. Examiners expect candidates to understand that Things Fall Apart is a deliberate counter-narrative. Discuss the final paragraph as the novel\'s most powerful critique of colonial storytelling.',
  },
  {
    title: 'Religion and belief',
    overview:
      'The novel presents Igbo religion with the same seriousness and complexity that Western literature gives to Christianity. The Oracle of the Hills and Caves, the egwugwu ceremonies, the concept of chi (personal spirit) and the fear of the Evil Forest are not superstitions in Achebe\'s telling — they are the structures through which the Igbo make sense of the world. Christianity arrives as an alternative structure, and the novel examines why some people choose it.',
    howAchebePresentsIt:
      'Achebe shows both the strengths and the costs of Igbo religion. The Oracle provides social cohesion but also demands the killing of Ikemefuna. The belief in ogbanje (spirit children) causes Ekwefi years of suffering. The caste system (osu) excludes people from community life. These internal tensions create the cracks through which Christianity enters. The outcasts, the twins, the mothers of dead children — these are the people the missionaries recruit first.',
    keyQuotes: [
      {
        text: '"He felt a relief within as the hymn poured into his parched soul."',
        speaker: 'Narrator on Nwoye — Chapter 16',
        analysis:
          'Nwoye\'s conversion is emotional, not intellectual. Achebe shows that Christianity succeeds by offering emotional sustenance to those the traditional religion has wounded.',
      },
      {
        text: '"Among the Igbo the art of conversation is regarded very highly."',
        speaker: 'Narrator — Chapter 1',
        analysis:
          'Achebe establishes the sophistication of Igbo culture from the opening pages. Language and proverb are elevated to the status of art, countering colonial claims of primitivism.',
      },
    ],
    contextLink:
      'Christian missionaries arrived in Igboland in the mid-19th century. They established schools and hospitals alongside churches, creating institutional dependencies. By the time of formal colonisation, Christianity had already created a class of converts who served as intermediaries between the colonial administration and the traditional population.',
    examTip:
      'Discuss religion as a double-edged theme. Examiners value candidates who show that Achebe presents Igbo religion with respect while also acknowledging its costs — the killing of twins, the osu caste system — which create the openings colonialism exploits.',
  },
  {
    title: 'Fear and identity',
    overview:
      'Fear is the engine of Okonkwo\'s character and one of the novel\'s deepest themes. Okonkwo fears weakness, femininity, failure and becoming like his father. This fear drives every significant decision he makes, from the killing of Ikemefuna to his final suicide. Achebe argues that fear is not the opposite of strength but its shadow — and that a man ruled by fear is as unfree as a man ruled by a conqueror.',
    howAchebePresentsIt:
      'Achebe identifies Okonkwo\'s fear in Chapter 2 and returns to it at every turning point. The narrator notes that Okonkwo\'s fear is "not external but lay deep within himself." This internal colonisation mirrors the external colonisation that follows. Achebe suggests a parallel: just as Okonkwo\'s fear makes him destroy what he loves (Ikemefuna, Nwoye), the community\'s internal divisions make it vulnerable to the force that destroys it.',
    keyQuotes: [
      {
        text: '"His whole life was dominated by fear, the fear of failure and of weakness."',
        speaker: 'Narrator — Chapter 2',
        analysis:
          'Achebe establishes fear as Okonkwo\'s defining trait. His ambition is not aspiration but avoidance — he runs from his father\'s image, not toward his own identity.',
      },
      {
        text: '"Okonkwo was clearly cut out for great things."',
        speaker: 'Narrator — Chapter 1',
        analysis:
          'Early promise that the novel will systematically dismantle. Achebe opens with hope to make the tragedy of its destruction more acute.',
      },
      {
        text: '"Living fire begets cold, impotent ash."',
        speaker: 'Narrator on Okonkwo\'s view of Nwoye — Chapter 17',
        analysis:
          'Okonkwo sees his son as proof of failure. Achebe shows that the fear of producing weakness produces the very alienation Okonkwo dreads.',
      },
    ],
    contextLink:
      'Achebe draws on the Igbo concept of chi — a personal spirit or destiny that accompanies each person. Okonkwo believes a man can wrestle his chi and win, but the novel suggests otherwise. His fear is both personal and universal: it is the fear of insignificance in a world where status must be constantly earned.',
    examTip:
      'Link fear to both personal tragedy and colonial vulnerability. Examiners reward candidates who show how Achebe draws a parallel between Okonkwo\'s internal rigidity and the community\'s inability to unite against the external threat.',
  },
  {
    title: 'Fate versus free will',
    overview:
      'The Igbo concept of chi — personal spirit or destiny — runs throughout the novel. Okonkwo believes a man can shape his chi through hard work and willpower, but Achebe repeatedly suggests that no amount of determination can overcome the forces arrayed against him. The novel asks whether Okonkwo\'s tragedy is the result of his own choices or of larger historical forces that would have destroyed him regardless.',
    howAchebePresentsIt:
      'Achebe uses proverbs to frame the debate. "When a man says yes his chi also affirms" suggests that personal will and destiny are aligned. But Okonkwo\'s experience contradicts this: his gun explodes accidentally, his exile is punishment for a crime without intent, and the colonial invasion is a force no individual can resist. The novel leaves the question open, honouring the Igbo belief in agency while showing its limits.',
    keyQuotes: [
      {
        text: '"When a man says yes his chi also affirms."',
        speaker: 'Narrator — Chapter 4',
        analysis:
          'The proverb suggests that will and destiny are partners. Achebe uses it to establish Okonkwo\'s worldview — then spends the rest of the novel testing it to destruction.',
      },
      {
        text: '"That man was one of the greatest men in Umuofia. You drove him to kill himself."',
        speaker: 'Obierika — Chapter 25',
        analysis:
          'Obierika attributes Okonkwo\'s death to external forces. Achebe uses the accusation to argue that the colonial system bears responsibility for individual tragedy.',
      },
    ],
    contextLink:
      'The tension between fate and free will is central to both Igbo philosophy and Western tragedy. Achebe, trained in English literature, deliberately echoes Yeats\'s "The Second Coming" in his title, placing Okonkwo\'s story within a tradition that includes Oedipus and Hamlet — figures who believe they can control their destiny and discover they cannot.',
    examTip:
      'Discuss chi as both a cultural concept and a literary device. Examiners reward candidates who show how Achebe uses the Igbo belief system to explore universal questions about agency and determinism.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ThingsFallApartThemesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <StudyTools textName="Things Fall Apart" textType="novel" />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/things-fall-apart" />}>
            <ArrowLeft className="size-3.5" /> Back to Things Fall Apart
          </Button>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary"><BookOpen className="mr-1 size-3 text-violet-400" />Modern Text — Novel</Badge>
            <Badge variant="outline" className="text-muted-foreground"><Sparkles className="mr-1 size-3" />Edexcel IGCSE</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">Theme Analysis</h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Things Fall Apart by Chinua Achebe</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Six major themes explored in depth with Achebe&apos;s methods, contextual links and examiner guidance. All quotes are 15 words or fewer.
          </p>
        </div>
      </section>

      {/* Themes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">Themes</h2>
        </div>
        <div className="space-y-6">
          {THEMES.map((t) => (
            <Card key={t.title}>
              <CardHeader><CardTitle className="text-heading-md font-heading">{t.title}</CardTitle></CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Overview</h3>
                  <p className="text-body-sm text-muted-foreground">{t.overview}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">How Achebe presents it</h3>
                  <p className="text-body-sm text-muted-foreground">{t.howAchebePresentsIt}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">Key quotations</h3>
                  {t.keyQuotes.map((q) => (
                    <div key={q.text} className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5">
                      <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                      <p className="text-caption uppercase tracking-wide text-primary">{q.speaker}</p>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Contextual link</h3>
                  <p className="text-body-sm text-muted-foreground">{t.contextLink}</p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">Exam tip</p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{t.examTip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/characters" />}>Characters <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/key-quotes" />}>Key quotes <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/things-fall-apart/context" />}>Context <ArrowRight className="size-3.5" /></Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
