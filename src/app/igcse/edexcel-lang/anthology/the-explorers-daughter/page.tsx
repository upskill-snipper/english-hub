import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Layers, Pen, Target, BookMarked, GitCompare, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: "The Explorer's Daughter — Kari Herbert — IGCSE Language A Anthology — The English Hub",
  description:
    "Full study guide for The Explorer's Daughter by Kari Herbert. Language analysis, structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.",
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/the-explorers-daughter' },
}

const keyExtracts = [
  {
    id: 1,
    label: 'Opening — the Arctic landscape',
    text: '"The Arctic landscape stretched before us, vast and pitiless... a place of incomparable beauty and terrible danger."',
    context: 'Herbert opens with a sweeping description of the Arctic, immediately establishing the dual nature of the landscape as both beautiful and hostile.',
  },
  {
    id: 2,
    label: 'The narwhal hunt',
    text: '"The hunters were dotted along the ice... their harpoons poised, waiting for the narwhal to surface."',
    context: 'Herbert describes the Inuit hunters with admiration, presenting the hunt as a carefully practised tradition requiring patience and skill.',
  },
  {
    id: 3,
    label: 'Moral conflict',
    text: '"Part of me urged the narwhal to dive, to ## away... another part understood the necessity of the hunt."',
    context: 'Herbert reveals her internal conflict — torn between her Western instinct to protect the animal and her understanding of why the Inuit need to hunt.',
  },
  {
    id: 4,
    label: 'Cultural understanding',
    text: '"Without the hunt, the people would starve... the narwhal provided everything: food, fuel, tools."',
    context: 'Herbert explains the practical necessity of the hunt, showing the narwhal as central to Inuit survival and culture.',
  },
  {
    id: 5,
    label: 'Closing — acceptance',
    text: '"I understood then that this was not cruelty but survival... a way of life that had sustained them for thousands of years."',
    context: 'Herbert reaches acceptance, resolving her moral conflict by recognising the hunt as part of a sustainable, ancient tradition.',
  },
]

const languageFeatures = [
  {
    technique: 'Imagery (visual)',
    quote: '"vast and pitiless"',
    explanation: 'The visual imagery of the Arctic combines beauty with threat. "Vast" suggests overwhelming scale; "pitiless" personifies the landscape as cruel and indifferent to human life.',
  },
  {
    technique: 'Personification',
    quote: '"the sea shrugged off its icy crust"',
    explanation: 'The sea is personified as a living creature, casually discarding its ice. This gives the natural world agency and power, reinforcing the idea that humans are at nature\'s mercy in the Arctic.',
  },
  {
    technique: 'Contrast',
    quote: '"incomparable beauty and terrible danger"',
    explanation: 'Herbert repeatedly juxtaposes beauty and danger, reflecting her own conflicted response to the Arctic. This duality runs through the entire text.',
  },
  {
    technique: 'Emotive language',
    quote: '"urged the narwhal to dive"',
    explanation: 'The verb "urged" reveals Herbert\'s emotional investment in the narwhal\'s survival. It shows her instinctive, empathetic response before her rational understanding takes over.',
  },
  {
    technique: 'Sensory language',
    quote: '"the bitter Arctic wind"',
    explanation: 'Sensory details like temperature and wind immerse the reader in the harsh physical reality of the Arctic, making the text feel immediate and experiential.',
  },
  {
    technique: 'Simile',
    quote: '"like a vast white desert"',
    explanation: 'Comparing the Arctic to a desert emphasises its emptiness and hostility while also suggesting a kind of barren grandeur. Both landscapes are extreme and unforgiving.',
  },
  {
    technique: 'Semantic field of battle',
    quote: '"harpoons poised... waiting"',
    explanation: 'Military and battle language presents the hunt as a contest between equals — humans and narwhal — rather than a one-sided slaughter. This elevates the hunt and dignifies both parties.',
  },
  {
    technique: 'Tone shift',
    quote: '"Part of me... another part"',
    explanation: 'The text shifts between admiring, conflicted and reflective tones. Herbert tracks her emotional journey honestly, allowing the reader to experience her changing perspective in real time.',
  },
  {
    technique: 'Short sentence for emphasis',
    quote: '"I understood."',
    explanation: 'Short declarative sentences mark moments of realisation. They stand out against the longer descriptive passages and signal that Herbert\'s thinking has shifted.',
  },
  {
    technique: 'Listing',
    quote: '"food, fuel, tools"',
    explanation: 'The list of what the narwhal provides is deliberately practical and unromantic. It grounds the argument in survival, not sentiment, making the case for the hunt unanswerable.',
  },
]

const structuralAnalysis = {
  opening: 'Herbert opens with a panoramic description of the Arctic landscape, establishing setting and atmosphere before introducing any human characters. This positions nature as the dominant force in the text.',
  development: 'The text develops by introducing the narwhal hunt, building tension as the hunters wait. Herbert gradually reveals her own emotional response, moving from observation to personal reflection.',
  climax: 'The climax is the moment of internal conflict — "Part of me urged the narwhal to dive" — where Herbert\'s Western values clash with her understanding of Inuit tradition. This is the moral centre of the text.',
  resolution: 'Herbert resolves her conflict by accepting the hunt as a necessary and ancient tradition. The resolution is earned through the argument she builds about the narwhal\'s importance to Inuit survival.',
  perspective: 'First person, with Herbert positioned as both insider (she grew up in the Arctic) and outsider (she has Western sensibilities about animal welfare). This dual perspective creates the text\'s central tension.',
  paragraphing: 'Descriptive paragraphs are long and immersive, creating the sensation of being in the Arctic. Reflective paragraphs are shorter, marking shifts in Herbert\'s thinking.',
  time: 'The text uses present-tense description for the hunt, creating immediacy, interspersed with past-tense reflections on Herbert\'s childhood in the Arctic. This blending of timeframes enriches the perspective.',
  openingClosing: 'The opening presents the Arctic as "pitiless"; the closing presents the hunt as "survival". Both words connote harshness, but the closing adds purpose and meaning to what initially seemed merely hostile.',
}

const writersPurpose = {
  achieve: 'Herbert wants to present the narwhal hunt as a complex moral issue rather than a simple case of right and wrong. She respects both the animal and the hunters, refusing to take a simplistic position.',
  readerFeel: 'She wants the reader to share her conflicted feelings — to feel the pull of both compassion for the narwhal and respect for the Inuit way of life. She does not want the reader to judge too quickly.',
  message: 'Her central argument is that cultural practices must be understood in context. The narwhal hunt, which might seem cruel to Western eyes, is a vital, sustainable tradition that has sustained a people for millennia.',
}

const keyVocabulary = [
  { word: 'pitiless', definition: 'Showing no pity; merciless. Here describing the harsh Arctic environment.' },
  { word: 'harpoon', definition: 'A barbed spear-like weapon used for hunting large sea creatures.' },
  { word: 'narwhal', definition: 'An Arctic whale with a long spiral tusk, hunted by Inuit peoples for food and materials.' },
  { word: 'incomparable', definition: 'Without an equal; matchless. Beyond comparison.' },
  { word: 'poised', definition: 'Ready and prepared for action; balanced and composed.' },
  { word: 'sustain', definition: 'To provide what is needed for survival or to continue over time.' },
  { word: 'tradition', definition: 'A custom or belief passed from generation to generation.' },
  { word: 'necessity', definition: 'The state of being required or unavoidable; something essential.' },
  { word: 'barren', definition: 'Too poor to produce vegetation; unproductive and desolate.' },
  { word: 'intimate', definition: 'Close and personal; here describing a deep knowledge of the land and its creatures.' },
  { word: 'subsistence', definition: 'The action of maintaining oneself at a minimum level; living off what you can hunt or grow.' },
]

const examPractice = {
  q1: {
    question: 'List four things you learn about the narwhal hunt from the text.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Herbert use language to present her conflicted feelings about the narwhal hunt?',
    type: 'Language analysis — 12 marks',
    modelOutline: [
      'Herbert uses the verb "urged" to reveal her instinctive emotional response — she wants the narwhal to escape — which places the reader inside her internal conflict and creates sympathy for the animal.',
      'The contrasting phrase "incomparable beauty and terrible danger" establishes the dual nature of the Arctic and mirrors Herbert\'s own dual response: admiration and unease, wonder and fear.',
      'Personification of the landscape ("the sea shrugged off its icy crust") gives nature agency and power, positioning both hunters and narwhal as participants in a larger natural drama beyond human control.',
      'The practical listing of "food, fuel, tools" shifts the tone from emotional to rational, grounding the argument for the hunt in survival rather than sentiment and making it harder for the reader to condemn.',
    ],
  },
  q3: {
    question: 'How does Herbert structure the text to move from observation to personal reflection?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: 'A Game of Polo with a Headless Goat',
    author: 'Emma Levine',
    href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
    reason: 'Both writers observe unfamiliar cultural traditions as outsiders. Compare how each writer balances observation with personal response, and how their attitudes to the events they witness shape their language.',
    themes: ['Cultural observation', 'Outsider perspective', 'Tradition'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason: 'Both texts describe remote, beautiful landscapes and the writers\' emotional responses to unfamiliar environments. Compare the use of sensory language and imagery in each text.',
    themes: ['Landscape', 'Culture shock', 'Beauty in harshness'],
  },
  {
    title: 'H is for Hawk',
    author: 'Helen Macdonald',
    href: '/igcse/edexcel-lang/anthology/h-is-for-hawk',
    reason: 'Both texts explore the relationship between humans and wild animals. Compare Herbert\'s conflicted view of hunting with Macdonald\'s intimate bond with her goshawk, and how each writer uses nature writing.',
    themes: ['Nature', 'Animals', 'Human-animal relationships'],
  },
]

export default async function TheExplorersDaughterPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button variant="ghost" size="sm" className="mb-3 -ml-2 text-muted-foreground" render={<Link href="/igcse/edexcel-lang/anthology" />}>
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground font-serif">The Explorer&apos;s Daughter</h1>
            <p className="text-body-sm text-muted-foreground">Kari Herbert &middot; Travel memoir</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">Edexcel IGCSE Language A</Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400 text-[0.65rem]">Paper 1 Section A</Badge>
            </div>
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-amber-400" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Key Extracts</h2>
          <span className="font-mono text-body-xs text-muted-foreground ml-auto">Fair-dealing extracts for study</span>
        </div>
        <div className="space-y-4">
          {keyExtracts.map((extract) => (
            <div key={extract.id} className="rounded-xl border border-border/40 bg-card p-4">
              <span className="font-mono text-body-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider">Extract {extract.id} — {extract.label}</span>
              <blockquote className="mt-2 border-l-2 border-amber-500/40 pl-4 font-serif text-body text-foreground italic leading-relaxed">{extract.text}</blockquote>
              <p className="mt-2 text-body-sm text-muted-foreground">{extract.context}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Language Analysis</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">Key language features used by Herbert and their effects on the reader.</p>
        <div className="space-y-4">
          {languageFeatures.map((f) => (
            <div key={f.technique} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{f.technique}</span>
              <p className="mt-2 text-body-sm text-foreground"><span className="font-serif italic text-amber-700 dark:text-amber-400">&ldquo;{f.quote}&rdquo;</span></p>
              <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">{f.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Structural Analysis</h2>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Opening', content: structuralAnalysis.opening },
            { label: 'Development', content: structuralAnalysis.development },
            { label: 'Climax', content: structuralAnalysis.climax },
            { label: 'Resolution', content: structuralAnalysis.resolution },
            { label: 'Narrative perspective', content: structuralAnalysis.perspective },
            { label: 'Paragraph structure', content: structuralAnalysis.paragraphing },
            { label: 'Use of time', content: structuralAnalysis.time },
            { label: 'Opening & closing techniques', content: structuralAnalysis.openingClosing },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{item.label}</span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Writer&apos;s Purpose</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">What is the writer trying to achieve?</span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.achieve}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">How does the writer want the reader to feel?</span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.readerFeel}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">Central message or argument</span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.message}</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookMarked className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Key Vocabulary</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {keyVocabulary.map((v) => (
            <div key={v.word} className="rounded-lg border border-border/40 bg-muted/20 p-3">
              <span className="font-mono text-body-sm font-semibold text-foreground">{v.word}</span>
              <p className="mt-1 text-body-xs text-muted-foreground">{v.definition}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Exam Practice</h2>
        </div>
        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{examPractice.q1.type}</span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q1.question}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{examPractice.q2.type}</span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q2.question}</p>
            <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-50/50 p-4 dark:bg-amber-950/20">
              <span className="font-mono text-body-xs text-amber-700 dark:text-amber-400 uppercase tracking-wider font-semibold">Model answer outline</span>
              <ul className="mt-2 space-y-2 text-body-sm text-muted-foreground">
                {examPractice.q2.modelOutline.map((point, i) => (
                  <li key={i} className="flex gap-2"><span className="shrink-0 text-amber-600 dark:text-amber-400">&bull;</span><span>{point}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{examPractice.q3.type}</span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q3.question}</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Compare With</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">Strong pairings for comparison questions in the exam.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonLinks.map((c) => (
            <Link key={c.title} href={c.href} className="group rounded-lg border border-border/40 bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90 font-serif">{c.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{c.author}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (<span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg bg-muted/50 p-4 text-center text-body-xs text-muted-foreground">
        <p>Extracts used under fair dealing for the purposes of criticism, review and education. <em>The Explorer&apos;s Daughter</em> &copy; Kari Herbert. All rights reserved. Students should refer to the full text in their Pearson Edexcel anthology.</p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
