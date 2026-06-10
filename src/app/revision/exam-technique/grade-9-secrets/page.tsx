import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  PenLine,
  Brain,
  Layers,
  Quote,
  Zap,
  Eye,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { t } from '@/lib/i18n/t'

/* ── Data ───────────────────────────────────────────────────────── */

const TECHNIQUES: {
  number: number
  title: string
  summary: string
  detail: string
  example?: string
}[] = [
  {
    number: 1,
    title: 'Track the writer, not the character',
    summary:
      'Grade 7 students describe what the character does. Grade 9 students explain why the writer made that choice.',
    detail:
      'Every detail in a text is a deliberate authorial decision. Instead of writing "Macbeth feels guilty," write "Shakespeare constructs Macbeth\'s guilt through the hallucination of the dagger, externalising an internal psychological state to dramatise the moral cost of ambition for a Jacobean audience."',
    example:
      'Grade 7: "The ghost shows that Macbeth feels guilty." Grade 9: "Shakespeare deploys the supernatural as a dramatic device to physicalise Macbeth\'s psychological disintegration, suggesting that unchecked ambition corrupts not just morality but perception itself."',
  },
  {
    number: 2,
    title: 'Zoom into single words',
    summary:
      'Top-band analysis picks apart individual word choices rather than quoting full sentences.',
    detail:
      'Choose a single verb, adjective, or noun and explore every layer of meaning. What are its connotations? Does it belong to a semantic field? Does it contrast with a word elsewhere in the text? Grade 9 students treat a single word like a prism -- they break it into multiple meanings.',
    example:
      "Grade 7: \"Dickens describes Scrooge as a 'squeezing' man.\" Grade 9: \"The verb 'squeezing' carries connotations of physical compression and suffocation, suggesting Scrooge's avarice does not merely hoard wealth but actively constricts the lives of those around him. The tactile, bodily quality of the word also dehumanises Scrooge, reducing him to a mechanical action.\"",
  },
  {
    number: 3,
    title: 'Offer alternative interpretations',
    summary: 'A single quotation should generate at least two possible readings.',
    detail:
      'Use phrases like "Alternatively, this could suggest..." or "A contemporary reader might instead interpret this as..." to show the examiner you understand that literature is not fixed-meaning. This is the hallmark of a "critical" response.',
    example:
      "Grade 7: \"The red room symbolises danger.\" Grade 9: \"The 'red room' may symbolise the latent violence of Bronte's patriarchal setting; alternatively, red's associations with passion could foreshadow Jane's eventual refusal to suppress her emotional life, making the room a site of both oppression and nascent rebellion.\"",
  },
  {
    number: 4,
    title: 'Use conceptualised topic sentences',
    summary:
      'Start paragraphs with an argument about a concept, not a description of what happens.',
    detail:
      'A conceptualised topic sentence names the big idea your paragraph will prove. It turns your paragraph from a "point" into a thesis. Compare "Jekyll changes into Hyde" (narrative) with "Stevenson presents duality as an inescapable condition of Victorian respectability" (conceptualised). The second version tells the marker you are operating at the top band before they even read your evidence.',
  },
  {
    number: 5,
    title: 'Embed context as a lens, not a bolt-on',
    summary:
      'Context should shape your interpretation, not appear as a separate sentence at the end.',
    detail:
      'Grade 7 students write a sentence of analysis and then add "This was written in the Victorian era when..." as an afterthought. Grade 9 students weave context into the analysis itself, using it to explain why a word or image carries the meaning it does.',
    example:
      'Grade 7: "Shelley shows the monster is lonely. At the time, people were interested in science." Grade 9: "Shelley channels Enlightenment anxieties about the limits of rational enquiry through the Creature\'s abandonment, suggesting that scientific progress without moral responsibility produces not knowledge but suffering."',
  },
  {
    number: 6,
    title: 'Analyse structure, not just language',
    summary:
      'Discussing how a text is organised -- its shifts, openings, endings, and pacing -- is where many students miss easy marks.',
    detail:
      'Consider: How does the extract begin and end? Where does the tone shift? Why does the writer place this scene here in the narrative? Does sentence length change? Is there a volta, a climactic moment, or a cyclical structure? Structural analysis is often the difference between Grade 7 and Grade 9 because so few students attempt it well.',
    example:
      'Grade 9 structural point: "Stevenson delays Hyde\'s physical description until the third chapter, structurally mirroring the novella\'s theme of concealment -- the reader, like Victorian society, is forced to confront what has been hidden."',
  },
  {
    number: 7,
    title: 'Use subject terminology precisely, not decoratively',
    summary:
      'Naming a technique is worth nothing without explaining its effect. Grade 9 students use terminology as a tool for analysis.',
    detail:
      'Do not write "The writer uses a metaphor" as though identifying the technique earns marks on its own. Instead, use the terminology to unlock meaning: "The extended metaphor of imprisonment suggests that..." The technique name should sit inside your analysis, not stand as a label above it.',
    example:
      "Grade 7: \"Shelley uses pathetic fallacy when it rains.\" Grade 9: \"Shelley's pathetic fallacy -- the 'dreary night of November' coinciding with the Creature's animation -- externalises Frankenstein's immediate revulsion, as though nature itself recoils from the transgression of creating life.\"",
  },
  {
    number: 8,
    title: "Write about the reader's experience",
    summary: 'Top-band responses discuss the effect on the reader with specificity.',
    detail:
      'Avoid vague phrases like "This makes the reader feel sad." Instead, name the specific emotional or intellectual response: unease, complicity, sympathy, moral discomfort, suspense, dramatic irony. Explain how the writer\'s craft produces that response. Even better, distinguish between different readers: "A Victorian reader might feel..." vs "A modern reader might instead..."',
  },
  {
    number: 9,
    title: 'Build an argument across paragraphs',
    summary:
      'Grade 9 essays have a through-line. Each paragraph advances a thesis rather than making isolated points.',
    detail:
      'Your paragraphs should connect. Use discourse markers that show progression: "Furthermore," "This is complicated by," "However, this interpretation is destabilised when..." A Grade 9 essay reads like a developing argument, not a list of unrelated observations. Plan your three or four key points so they build towards a conclusion.',
  },
  {
    number: 10,
    title: 'End with a wider resonance, not a summary',
    summary: 'Your conclusion should leave the examiner thinking, not recap what you already said.',
    detail:
      'Instead of "In conclusion, Shakespeare uses many techniques to show Macbeth\'s guilt," end with a conceptual insight: "Ultimately, Shakespeare suggests that guilt is not a consequence of crime but its own form of punishment -- Macbeth is destroyed not by his enemies but by his own conscience, a warning that resonates beyond the Jacobean stage." A strong conclusion elevates the entire essay.',
  },
]

const BEFORE_AFTER: {
  label: string
  before: string
  after: string
  why: string
}[] = [
  {
    label: 'Opening a paragraph',
    before: 'In the novel, Mr Hyde is described as being very scary and unpleasant.',
    after:
      "Stevenson constructs Hyde as the embodiment of repressed Victorian desire, presenting him not as a separate entity but as the unacknowledged truth of Jekyll's respectable facade.",
    why: 'The "after" version is conceptualised -- it names a big idea (repression, facade) and frames the character as a construct of the writer, not a real person.',
  },
  {
    label: 'Analysing a quotation',
    before:
      'The quote "fiend" shows that Hyde is evil. This is because fiend means devil and so it tells us he is a bad person.',
    after:
      'The epithet "fiend" draws on demonic imagery, positioning Hyde within a theological framework of damnation. This lexical choice externalises Victorian fears that immorality is not merely human weakness but a Satanic corruption lurking beneath civilised surfaces.',
    why: 'The "after" version names the technique (epithet), explores connotations (demonic, damnation), and connects to context (Victorian fears) -- all in one fluid movement.',
  },
  {
    label: 'Adding context',
    before:
      'Scrooge is mean with money. In Victorian times, there were lots of poor people and no welfare state.',
    after:
      'Dickens weaponises Scrooge\'s parsimony as a direct indictment of Malthusian economics, which justified inaction towards the poor by framing poverty as a natural check on population. Scrooge\'s dismissal of the destitute as candidates for "prisons" and "workhouses" ventriloquises a political philosophy Dickens sought to dismantle.',
    why: 'Context is not bolted on -- it is the engine of the analysis. The historical idea (Malthusianism) explains why Dickens created the character this way.',
  },
  {
    label: 'Discussing structure',
    before: 'At the start of the chapter, the mood is happy, but then it changes to sad.',
    after:
      'Shelley engineers a tonal inversion at the centre of the extract: the initial register of scientific triumph -- "beautiful," "selected" -- collapses into revulsion as Frankenstein perceives the Creature\'s animation. This structural pivot dramatises the Romantic critique that the pursuit of knowledge, unchecked by empathy, inevitably curdles into horror.',
    why: 'The "after" version identifies a specific structural technique (tonal inversion), quotes precisely, and connects structure to a thematic argument.',
  },
]

const GRADE_9_VOCAB: { term: string; usage: string }[] = [
  { term: 'Constructs', usage: '"Shakespeare constructs Lady Macbeth as..."' },
  { term: 'Subverts', usage: '"Shelley subverts the Enlightenment ideal of..."' },
  { term: 'Dramatises', usage: '"Dickens dramatises the moral failure of..."' },
  { term: 'Emblematic', usage: '"Hyde is emblematic of repressed Victorian desire..."' },
  { term: 'Pervasive', usage: '"The pervasive imagery of decay suggests..."' },
  { term: 'Destabilises', usage: '"This moment destabilises the reader\'s sympathy for..."' },
  { term: 'Foregrounds', usage: '"Bronte foregrounds class tension through..."' },
  { term: 'Underpins', usage: '"A patriarchal ideology underpins the narrative..."' },
  { term: 'Catalyses', usage: '"The encounter catalyses Scrooge\'s moral transformation..."' },
  { term: 'Interrogates', usage: '"The novella interrogates the boundary between..."' },
  { term: 'Microcosm', usage: '"The red room functions as a microcosm of..."' },
  { term: 'Juxtaposition', usage: '"The juxtaposition of wealth and poverty..."' },
  { term: 'Lexical field', usage: '"The lexical field of entrapment pervades..."' },
  { term: 'Complicit', usage: '"The reader is made complicit in..."' },
  { term: 'Transgression', usage: '"Frankenstein\'s transgression against natural law..."' },
  { term: 'Reductive', usage: '"A purely moral reading would be reductive because..."' },
]

/* ── Page ────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Grade 9 Secrets: Top-Band GCSE English Technique',
  description:
    'Ten top-band techniques for Grade 9 GCSE English: conceptualised topic sentences, alternative interpretations, structural analysis and embedded context.',
  alternates: { canonical: 'https://theenglishhub.app/revision/exam-technique/grade-9-secrets' },
}

export default async function Grade9SecretsPage() {
  // Constant labels reused inside synchronous .map() callbacks below.
  const exampleLabel = await t('rev.misc2.example')
  const grade7Label = await t('rev.misc2.g9.grade7')
  const grade9Label = await t('rev.misc2.g9.grade9')
  const whyItWorksLabel = await t('rev.misc2.g9.why_it_works')

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumb
        items={[
          { label: await t('rev.misc2.crumb.revision'), href: '/revision' },
          { label: await t('rev.misc2.crumb.exam_technique'), href: '/revision/exam-technique' },
          { label: await t('rev.misc2.g9.crumb') },
        ]}
      />

      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/exam-technique" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('rev.misc2.back.exam_technique')}
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <Star className="size-5 text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              {await t('rev.misc2.g9.title')}
            </h1>
            <p className="text-body-sm text-muted-foreground">{await t('rev.misc2.g9.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* ── Overview banner ─────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          {await t('rev.misc2.g9.badge.mindset')}
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          {await t('rev.misc2.g9.overview.heading')}
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          {await t('rev.misc2.g9.overview.body')}
        </p>
      </section>

      {/* ── 10 Techniques ───────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Zap className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {await t('rev.misc2.g9.techniques.heading')}
          </h2>
        </div>

        <div className="space-y-4">
          {TECHNIQUES.map((tech) => (
            <div
              key={tech.number}
              className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6 space-y-4"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-sm font-bold text-clay-600">
                  {tech.number}
                </span>
                <div>
                  <h3 className="text-heading-md font-heading text-foreground">{tech.title}</h3>
                  <p className="text-body-sm text-muted-foreground mt-1 leading-relaxed font-medium">
                    {tech.summary}
                  </p>
                </div>
              </div>

              <p className="text-body-sm text-muted-foreground leading-relaxed">{tech.detail}</p>

              {tech.example && (
                <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {exampleLabel}
                  </p>
                  <p className="text-body-sm text-muted-foreground leading-relaxed italic">
                    {tech.example}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Before / After Comparisons ──────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {await t('rev.misc2.g9.beforeafter.heading')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl leading-relaxed">
          {await t('rev.misc2.g9.beforeafter.intro')}
        </p>

        <div className="space-y-4">
          {BEFORE_AFTER.map((ba) => (
            <div
              key={ba.label}
              className="rounded-2xl border border-border/60 bg-card overflow-hidden"
            >
              <div className="border-b border-border/40 px-5 py-3 sm:px-6">
                <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                  {ba.label}
                </Badge>
              </div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
                {/* Before */}
                <div className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="size-4 text-clay-600" />
                    <p className="text-xs font-semibold text-clay-600 uppercase tracking-wider">
                      {grade7Label}
                    </p>
                  </div>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{ba.before}</p>
                </div>
                {/* After */}
                <div className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="size-4 text-emerald-400" />
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      {grade9Label}
                    </p>
                  </div>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{ba.after}</p>
                </div>
              </div>
              {/* Why */}
              <div className="border-t border-border/40 px-5 py-4 sm:px-6">
                <div className="flex gap-3">
                  <Lightbulb className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">{whyItWorksLabel}</span>
                    {ba.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Grade 9 Vocabulary ──────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {await t('rev.misc2.g9.vocab.heading')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl leading-relaxed">
          These words and phrases signal to the examiner that you are operating at the conceptual
          level. They are not fancy synonyms -- each one does a specific analytical job. Use them
          when they genuinely fit your point.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GRADE_9_VOCAB.map((v) => (
            <div
              key={v.term}
              className="rounded-xl border border-border/40 bg-card p-4 space-y-1.5"
            >
              <p className="text-sm font-bold text-foreground">{v.term}</p>
              <p className="text-xs text-muted-foreground leading-relaxed italic">{v.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Being Conceptualised and Critical ───────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-3">
          <Brain className="size-5 text-rose-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            {await t('rev.misc2.g9.concept.heading')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Examiners use these two words in the top-band descriptors. They sound vague, but they mean
          something specific.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-5 space-y-3">
            <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
              {await t('rev.misc2.g9.badge.conceptualised')}
            </Badge>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              A <span className="font-semibold text-foreground">conceptualised</span> response
              treats the text as being about big ideas -- power, guilt, social class, gender,
              morality, identity -- rather than just a story about characters. Your topic sentences
              should name these concepts. Your analysis should show how the writer uses craft to
              explore them.
            </p>
            <div className="flex gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] p-3">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">
                  {await t('rev.misc2.g9.test_label')}
                </span>
                Could your topic sentence apply to a university-level essay on the same text? If
                yes, it is conceptualised. If it reads like a plot summary, it is not.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-5 space-y-3">
            <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
              {await t('rev.misc2.g9.badge.critical')}
            </Badge>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              A <span className="font-semibold text-foreground">critical</span> response does not
              accept a single reading. It weighs alternatives, considers how different audiences
              might respond, and acknowledges that meaning is not fixed. It evaluates the
              writer&apos;s success rather than simply describing what they do.
            </p>
            <div className="flex gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] p-3">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">
                  {await t('rev.misc2.g9.test_label')}
                </span>
                Does your essay contain the word &ldquo;alternatively&rdquo; or
                &ldquo;however&rdquo; at least twice? If not, you are probably not being critical
                enough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alternative Interpretations ─────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-3">
          <Eye className="size-5 text-cyan-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            {await t('rev.misc2.g9.altinterp.heading')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Offering an alternative interpretation is one of the fastest ways to push a paragraph from
          Grade 7 to Grade 9. Here is the structure.
        </p>

        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
              1
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Make your primary interpretation
              </p>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Analyse the quotation and explain what it suggests. This is your main argument.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
              2
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Pivot with a critical connective
              </p>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Use one of these: &ldquo;Alternatively,&rdquo; &ldquo;However, a
                [feminist/Marxist/post-colonial] reading might suggest...&rdquo; &ldquo;Conversely,
                a modern reader could interpret this as...&rdquo; &ldquo;Yet this interpretation is
                complicated by...&rdquo;
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
              3
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Explore the second reading</p>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Briefly but specifically explain how the same evidence supports a different
                conclusion. You do not need to write a full paragraph -- two or three sentences are
                enough.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
              4
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Evaluate which reading is stronger (optional but powerful)
              </p>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                If you can say why one interpretation is more convincing than the other -- perhaps
                because of other evidence in the text -- you are demonstrating evaluation as well as
                critical thinking. This is the pinnacle of GCSE analysis.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {await t('rev.misc2.g9.example_in_action')}
          </p>
          <p className="text-body-sm text-muted-foreground leading-relaxed italic">
            &ldquo;The Creature&apos;s request for a companion can be read as a genuine plea for
            empathy, positioning him as the novel&apos;s true moral centre.
            <span className="font-semibold text-foreground not-italic"> Alternatively, </span>
            his threat -- &apos;I shall be with you on your wedding night&apos; -- reframes the
            request as coercion, suggesting Shelley questions whether beings born of unnatural means
            can ever escape the violence of their origins. The ambiguity itself may be
            Shelley&apos;s point: moral judgement in
            <span className="not-italic"> Frankenstein </span>
            is never straightforward, reflecting Romantic scepticism about absolute truths.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Quick Checklist ─────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-amber-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <CheckCircle2 className="size-5 text-emerald-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            {await t('rev.misc2.g9.checklist.heading')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          Before you move on to your next paragraph, check it against these criteria.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            'Does my topic sentence name a concept, not just describe the plot?',
            "Am I writing about the writer's choices, not the character's actions?",
            'Have I zoomed into a specific word or phrase, not just quoted a long sentence?',
            'Is my subject terminology embedded in analysis, not just labelled?',
            'Have I explained the effect on the reader with specificity?',
            'Is my context woven into the analysis, not bolted on at the end?',
            'Have I offered at least one alternative interpretation?',
            'Does this paragraph connect to my overall argument / thesis?',
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 items-start rounded-xl border border-border/40 bg-background/50 p-3"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Navigation ──────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button
          variant="outline"
          className="flex-1"
          render={<Link href="/revision/exam-technique/common-mistakes" />}
        >
          <ArrowLeft className="size-4" />
          {await t('rev.misc2.g9.nav.common_mistakes')}
        </Button>
        <Button
          variant="default"
          className="flex-1"
          disabled
          aria-disabled="true"
          title={await t('rev.misc2.cta.practice_extracts_title')}
        >
          {await t('rev.misc2.cta.practice_extracts')}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
