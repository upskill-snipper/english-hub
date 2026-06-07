'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Lightbulb, Globe } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ─── Types ──────────────────────────────────────────────────── */

type ContextSection = {
  title: string
  overview: string
  detailed: string
  examRelevance: string
}

/* ─── Data ───────────────────────────────────────────────────── */

const CONTEXT_SECTIONS: ContextSection[] = [
  {
    title: 'Elizabethan England',
    overview:
      'Shakespeare wrote Romeo and Juliet in the mid-1590s, during the reign of Queen Elizabeth I -- a period of cultural confidence, religious tension, and rapid social change.',
    detailed:
      "Elizabethan England was a hierarchical society governed by the Great Chain of Being, which placed God at the top, followed by the monarch, nobility, and commons. Disruption of this order -- whether through rebellion, disobedience or social transgression -- was seen as a threat to cosmic stability. When Romeo and Juliet defy their parents and marry in secret, an Elizabethan audience would have recognised this as a serious breach of social order, not merely a romantic gesture. The period was also marked by religious instability: England had recently broken from the Catholic Church under Henry VIII, and the conflict between Protestant and Catholic factions shaped daily life. Shakespeare sets the play in Catholic Italy but embeds tensions that his Protestant audience would have recognised. The Friar's role as a scheming cleric, for example, may reflect Protestant suspicion of Catholic priests. London in the 1590s was a rapidly growing city plagued by overcrowding, crime and periodic outbreaks of the plague. The theatres were closed during plague outbreaks, and Romeo and Juliet may have been written during or shortly after one such closure. References to plague (\"A plague o' both your houses\") would have carried literal as well as metaphorical weight for Shakespeare's audience.",
    examRelevance:
      "Use Elizabethan social hierarchy to explain why Juliet's disobedience is so shocking. An audience that believed in the Great Chain of Being would see the lovers' rebellion as a cosmic disruption, not just a family argument. This deepens your analysis of the theme of family and honour.",
  },
  {
    title: "Patriarchal Society and Women's Roles",
    overview:
      "Women in Elizabethan England had limited legal rights. Fathers controlled daughters' marriages, and wives were legally subordinate to husbands.",
    detailed:
      'In Elizabethan law, women were essentially property: first of their fathers, then of their husbands. A father had the legal right to choose his daughter\'s husband, and refusal could result in disinheritance. Marriage among the upper classes was primarily an economic and political arrangement designed to consolidate wealth and forge alliances. Love was considered a pleasant bonus, not a prerequisite. Shakespeare dramatises this system through Lord Capulet\'s treatment of Juliet. His initial claim to value her consent ("My will to her consent is but a part") gives way to violent coercion when she refuses Paris. Lady Capulet\'s inability to support her daughter reflects how women within the patriarchal system had little power even over other women. The Nurse\'s pragmatic advice ("I think it best you married with the County") shows how women learned to survive within the system by accepting its terms. Only Juliet rebels, and her rebellion costs her life. Shakespeare presents patriarchal authority not as benign order but as a form of control that, when challenged, reveals itself as tyranny. The play asks whether a social system that produces the tragedy of Romeo and Juliet can be considered just.',
    examRelevance:
      "Patriarchal context is essential for analysing Juliet's character arc and Lord Capulet's behaviour. Show how the legal reality of women's status makes Juliet's defiance radical and her isolation inevitable. This is key to AO3 (context) marks.",
  },
  {
    title: 'Arranged Marriages',
    overview:
      'Marriages among the Elizabethan upper classes were arranged by parents for economic and social advantage. Love matches were unusual and often disapproved of.',
    detailed:
      "For wealthy Elizabethan families, marriage was a business transaction. Dowries were negotiated, alliances were forged, and daughters were expected to accept their fathers' choices. The idea of marrying for love -- particularly against a father's wishes -- was considered dangerously radical. Juliet's refusal of Paris is not merely a teenage tantrum; it is a direct challenge to the economic and social order that sustained upper-class Elizabethan life. Shakespeare complicates this by making Paris a genuinely \"worthy\" match. He is noble, wealthy, and kind -- everything a father could want for his daughter. The tragedy is that Juliet's heart has already been given, and the patriarchal system cannot accommodate a prior emotional commitment. The \"haste\" of the Paris match after Tybalt's death is also significant: Capulet accelerates the marriage partly to distract Juliet from grief and partly to assert control at a moment when his family's honour has been wounded. The arranged marriage becomes a weapon of patriarchal authority, not an act of care.",
    examRelevance:
      "When analysing the Paris subplot, explain that an Elizabethan audience would have seen Paris as a perfectly acceptable match. Juliet's refusal is shocking not because Paris is unworthy but because she is asserting emotional autonomy in a society that does not recognise it.",
  },
  {
    title: 'The Italian Setting',
    overview:
      'Shakespeare sets the play in Verona and Mantua, drawing on English stereotypes about Italy as a land of passion, violence, feuding and Catholic intrigue.',
    detailed:
      "Italy was a source of fascination for Elizabethan audiences. It was seen as simultaneously sophisticated and dangerous: a place of art, poetry and culture, but also of vendetta, poison, treachery and sexual licence. By setting the play in Verona, Shakespeare could explore extremes of passion and violence that might have seemed implausible in an English setting. The Italian feud between the Montagues and Capulets (based on the historical Montecchi and Cappelletti families) gave him a ready-made framework for the cycle of honour and revenge. Italy was also associated with Catholicism, and the prominence of Friar Lawrence reflects English Protestant anxieties about the Catholic clergy's interference in personal and political life. The dual setting of Verona (civilisation, society, the feud) and Mantua (exile, isolation, desperation) mirrors Romeo's emotional journey. Shakespeare uses the Italian setting as a kind of emotional geography: the further from Verona, the further from the social structures that both sustain and destroy the characters.",
    examRelevance:
      'Reference the Italian setting when discussing how Shakespeare creates a world where extreme passion and violence coexist. The exotic location gives Shakespeare licence to heighten emotional intensity beyond what a realistic English setting would permit.',
  },
  {
    title: 'The Petrarchan Love Tradition',
    overview:
      'Petrarchan love poetry, originating with the Italian poet Petrarch, dominated Elizabethan literary culture. Shakespeare both uses and subverts its conventions.',
    detailed:
      "Francesco Petrarch (1304-1374) established the conventions of European love poetry: the male lover worships an unattainable, idealised woman; he suffers exquisitely; he uses elaborate metaphors (blazons) to praise her beauty; and the love is typically unrequited. By the 1590s, English poets like Sir Philip Sidney, Edmund Spenser and Shakespeare himself (in his Sonnets) had adopted and adapted these conventions. In Romeo and Juliet, Shakespeare uses Petrarchan convention to characterise Romeo's immature love for Rosaline. Romeo's oxymorons (\"O brawling love, O loving hate\"), his sighing, his withdrawal from his friends -- all are textbook Petrarchan behaviour. Shakespeare then breaks the convention when Romeo meets Juliet: their love is mutual (not unrequited), expressed through dialogue (not soliloquy), and sanctified by religious imagery (not courtly metaphor). The shared sonnet at the Capulet feast is Shakespeare's most sophisticated engagement with the tradition: he uses the Petrarchan form but fills it with reciprocal, active love. Juliet's philosophical questioning (\"What's in a name?\") also challenges the Petrarchan tendency to worship the beloved from afar -- she demands real engagement, not poetic posturing.",
    examRelevance:
      "Understanding the Petrarchan tradition helps you explain why Romeo's language changes. His love for Rosaline is a literary exercise; his love for Juliet is genuine. This contrast is one of Shakespeare's most important techniques for showing the difference between performed and authentic emotion.",
  },
  {
    title: "Shakespeare's Sources",
    overview:
      "Shakespeare adapted the story from Arthur Brooke's narrative poem The Tragicall Historye of Romeus and Juliet (1562), making significant changes that shape the play's meaning.",
    detailed:
      "The story of Romeo and Juliet was not Shakespeare's invention. It originated in Italian prose (Masuccio Salernitano, 1476; Luigi da Porto, 1530) and reached England through Arthur Brooke's poem (1562) and William Painter's prose retelling in Palace of Pleasure (1567). Shakespeare's most significant changes include: compressing the timeline from nine months to four days (creating the sense of breathless, fatal speed); making Juliet younger (Brooke's Juliet is sixteen; Shakespeare's is thirteen, emphasising her vulnerability and the cruelty of her father's demands); elevating Mercutio from a minor figure to a major character whose death is the play's turning point; and adding the scene where Romeo kills Paris at the tomb. Shakespeare also transformed the moral framework: Brooke's poem presents the lovers' deaths as punishment for disobedience, while Shakespeare's play presents them as a sacrifice that redeems the community. These changes reveal Shakespeare's artistic priorities: speed, intensity, youth, and moral complexity.",
    examRelevance:
      'You rarely need to reference sources directly in a GCSE essay, but knowing that Shakespeare compressed the timeline explains why the play feels so urgent. The four-day structure is a deliberate choice that intensifies every emotion and makes the tragedy feel inevitable.',
  },
  {
    title: 'The Globe Theatre Audience',
    overview:
      "Shakespeare wrote for a diverse, interactive audience at the Globe Theatre, and the play's design reflects this relationship.",
    detailed:
      "The Globe Theatre (built 1599, though Romeo and Juliet was first performed slightly earlier, probably at The Theatre in Shoreditch) was an open-air amphitheatre seating around 3,000 people. The audience ranged from groundlings (who paid a penny to stand in the yard) to wealthy patrons in the galleries. Performances took place in daylight with minimal sets, meaning that atmosphere, location and time of day had to be created entirely through language. This explains why Shakespeare's imagery is so vivid and explicit: \"But soft, what light through yonder window breaks?\" tells the audience it is night-time and directs their eyes to the upper gallery where Juliet appears. The audience was vocal, interactive, and accustomed to switching between comedy and tragedy. Shakespeare designs the play to work on multiple levels: the bawdy jokes and wordplay entertained the groundlings, while the poetic sophistication and philosophical questioning engaged educated spectators. The Nurse's comic rambling and Mercutio's puns exist alongside Juliet's philosophical soliloquies and Romeo's lyrical declarations. This tonal range is not accidental but a calculated response to the demands of a diverse audience.",
    examRelevance:
      "Reference the Globe Theatre when discussing Shakespeare's use of language and stagecraft. The fact that the play was performed in daylight makes every reference to light and dark an active choice by the playwright, not a reflection of stage conditions. This strengthens your analysis of the light-dark motif.",
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default function RomeoAndJulietContextPage() {
  const t = useT()
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Romeo and Juliet',
            url: 'https://theenglishhub.app/revision/texts/romeo-and-juliet',
          },
          {
            name: 'Context',
            url: 'https://theenglishhub.app/revision/texts/romeo-and-juliet/context',
          },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Romeo and Juliet" textType="play" />

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision/texts/romeo-and-juliet" />}
            >
              <ArrowLeft className="size-3.5" />
              {t('rev.texts.common.back_to_text').replace('{text}', 'Romeo and Juliet')}
            </Button>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Globe className="mr-1 size-3 text-emerald-400" />
                {t('rev.texts.common.historical_context')}
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                AQA / Edexcel / OCR / Eduqas
              </Badge>
            </div>

            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              {t('rev.texts.rj.context.h1')}
            </h1>
            <p className="mt-2 text-body-lg text-muted-foreground">
              {t('rev.texts.rj.context.byline')}
            </p>
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
              {t('rev.texts.rj.context.intro')}
            </p>
          </div>
        </section>

        {/* Context sections */}
        <div className="mt-10 space-y-10">
          {CONTEXT_SECTIONS.map((s) => (
            <section key={s.title}>
              <div className="mb-5 flex items-center gap-3">
                <BookOpen className="size-5 text-emerald-400" />
                <div>
                  <h2 className="text-heading-lg font-heading text-foreground">{s.title}</h2>
                  <p className="text-body-sm text-muted-foreground">{s.overview}</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Detailed content */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">
                      {t('rev.texts.common.in_detail')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    <p>{s.detailed}</p>
                  </CardContent>
                </Card>

                {/* Exam relevance */}
                <Card className="bg-primary/5">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="size-4 text-clay-600" />
                      <p className="text-sm font-semibold text-foreground">
                        {t('rev.texts.common.exam_relevance_ao3')}
                      </p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{s.examRelevance}</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          {t('rev.texts.rj.context.public_domain_note')}
        </p>
      </div>
    </div>
  )
}
