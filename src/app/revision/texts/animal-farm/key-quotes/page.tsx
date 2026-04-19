'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Filter,
  Lightbulb,
  Quote,
  Sparkles,
} from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

type QuoteEntry = {
  id: number
  quote: string
  speaker: string
  chapter: string
  context: string
  analysis: string
  thematicLinks: string
  themes: string[]
  examTip: string
}

const QUOTES: QuoteEntry[] = [
  {
    id: 1,
    quote: 'All animals are equal.',
    speaker: 'The Seven Commandments',
    chapter: 'Chapter 2',
    context: 'The Seventh Commandment, painted on the barn wall after the Rebellion as the foundational principle of Animalism.',
    analysis:
      'The simplicity of the declarative sentence gives it the force of an axiom. "Equal" carries the weight of the entire revolution\u2019s promise. Orwell places this commandment last \u2014 structurally the most important position \u2014 to establish it as the principle against which every subsequent betrayal will be measured.',
    thematicLinks:
      'Links directly to its corrupted version in Chapter 10. The distance between the original and the alteration is the distance between revolution and tyranny.',
    themes: ['Revolution & Betrayal', 'Class & Inequality'],
    examTip: 'Always quote the original alongside its altered version. The comparison is Orwell\u2019s most powerful structural device.',
  },
  {
    id: 2,
    quote: 'All animals are equal but some animals are more equal than others.',
    speaker: 'The Commandments (altered by the pigs)',
    chapter: 'Chapter 10',
    context: 'The sole remaining commandment on the barn wall, replacing all seven originals.',
    analysis:
      'The oxymoron "more equal" is logically impossible, which is Orwell\u2019s point: totalitarian language does not need to make sense, it only needs to go unchallenged. The sentence structurally mirrors the corruption of the revolution \u2014 the original principle still appears, but its meaning has been inverted by the qualifier. Orwell shows that tyranny does not abolish ideals; it redefines them.',
    thematicLinks:
      'The definitive statement of the novel\u2019s thesis. Connects to every theme: power corrupts language, language enables inequality, inequality betrays the revolution.',
    themes: ['Power & Corruption', 'Language & Propaganda', 'Class & Inequality'],
    examTip: 'This is the novel\u2019s most quotable line. Analyse the oxymoron "more equal" and explain how it encapsulates the entire arc of the allegory.',
  },
  {
    id: 3,
    quote: 'Four legs good, two legs bad.',
    speaker: 'The Sheep (taught by Snowball)',
    chapter: 'Chapter 3',
    context: 'Snowball reduces the Seven Commandments to a single slogan for the less intelligent animals.',
    analysis:
      'The binary slogan replaces complex principles with mindless repetition. Orwell shows that simplification of ideology is the first step toward its corruption. The sheep\u2019s inability to think beyond the slogan makes them perfect instruments of propaganda \u2014 they will drown out any dissent by bleating it endlessly.',
    thematicLinks:
      'Directly parallels Soviet use of simple slogans to replace critical thought. The later alteration to "Four legs good, two legs better" proves how easily slogans can be reversed.',
    themes: ['Language & Propaganda', 'Power & Corruption'],
    examTip: 'Track the evolution of this slogan across the novel. Its change from "bad" to "better" mirrors the pigs\u2019 transformation from revolutionaries to oppressors.',
  },
  {
    id: 4,
    quote: 'Four legs good, two legs better!',
    speaker: 'The Sheep (retrained by Squealer)',
    chapter: 'Chapter 10',
    context: 'The sheep chant the new version as the pigs emerge from the farmhouse walking on their hind legs.',
    analysis:
      'The ease with which the slogan is reversed reveals how hollow the original was. "Better" replaces "bad" with no resistance because the sheep never understood either version. Orwell demonstrates that propaganda creates obedience, not understanding, and that obedient subjects can be redirected at will.',
    thematicLinks:
      'The reversal completes the cycle: the pigs have literally become what the revolution opposed. The sheep\u2019s compliance shows that the masses enable tyranny when they surrender critical thought.',
    themes: ['Language & Propaganda', 'Revolution & Betrayal'],
    examTip: 'Pair this with the original version for a devastating paragraph on how propaganda works. The two slogans together tell the entire story of the novel.',
  },
  {
    id: 5,
    quote: 'Napoleon is always right.',
    speaker: 'Boxer',
    chapter: 'Chapter 5',
    context: 'Boxer adopts this as his second personal maxim after Snowball\u2019s expulsion, alongside "I will work harder."',
    analysis:
      'This is the most disturbing line in the novel because it comes from the most sympathetic character. The absolute "always" eliminates the possibility of critical thought. Boxer\u2019s blind loyalty is not presented as stupidity but as misplaced trust \u2014 the devotion of a good person given to those who do not deserve it. Orwell shows that totalitarian power depends on the voluntary submission of decent people.',
    thematicLinks:
      'Connects Boxer\u2019s personal tragedy to the broader political argument: loyalty without scrutiny is the fuel that powers dictatorship.',
    themes: ['Power & Corruption', 'Loyalty & Exploitation'],
    examTip: 'Analyse the word "always." It makes Napoleon\u2019s authority absolute, beyond question or evidence. This is how personality cults function.',
  },
  {
    id: 6,
    quote: 'I will work harder.',
    speaker: 'Boxer',
    chapter: 'Chapter 3 (repeated throughout)',
    context: 'Boxer\u2019s personal motto, his response to every difficulty and setback on the farm.',
    analysis:
      'The repetition throughout the novel creates increasingly painful dramatic irony. Each time Boxer says it, the reader sees his selfless labour being exploited by pigs who give nothing in return. Orwell presents hard work without political awareness as a form of self-destruction. The motto is admirable in isolation but tragic in context \u2014 Boxer\u2019s devotion accelerates his own death.',
    thematicLinks:
      'Represents the Soviet working class (proletariat) whose labour built the state that ultimately destroyed them. Connects to the theme of education: Boxer\u2019s illiteracy prevents him from seeing what the reader can.',
    themes: ['Loyalty & Exploitation', 'Class & Inequality'],
    examTip: 'Track every repetition of this maxim. Its meaning shifts from inspiring to heartbreaking as the novel progresses. This is strong evidence of Orwell\u2019s structural craft.',
  },
  {
    id: 7,
    quote: 'The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.',
    speaker: 'Narrator',
    chapter: 'Chapter 10',
    context: 'The novel\u2019s final image: animals watch through the farmhouse window as pigs and humans play cards and quarrel.',
    analysis:
      'The circular structure is Orwell\u2019s most powerful device. The repetitive syntax ("from pig to man, and from man to pig") mirrors the interchangeability of oppressors. "Already" suggests the transformation is complete and irreversible. The pigs have not merely become like the humans \u2014 they have become indistinguishable from them, completing the revolution\u2019s total failure.',
    thematicLinks:
      'The definitive image of the circular narrative. Manor Farm returns to its original name; the revolution has returned to exactly where it started. Connects to Orwell\u2019s argument that revolution without democratic safeguards replicates tyranny.',
    themes: ['Power & Corruption', 'Revolution & Betrayal'],
    examTip: 'This should appear in almost every Animal Farm essay. Analyse the circular structure and explain how the final image makes Orwell\u2019s argument visual and undeniable.',
  },
  {
    id: 8,
    quote: 'No animal shall sleep in a bed \u2014 with sheets.',
    speaker: 'The Commandments (altered)',
    chapter: 'Chapter 6',
    context: 'The Fourth Commandment has been altered. Squealer claims the original always included "with sheets" and that no animal could object to sleeping in a bed without sheets.',
    analysis:
      'The addition of two words transforms a prohibition into a permission. The dash emphasises the addition, making it visible to the reader even as it is invisible to the illiterate animals. Orwell makes propaganda concrete: this is the deliberate, manual rewriting of truth, later confirmed when Squealer is found at the barn wall with paint and a ladder.',
    thematicLinks:
      'Each altered commandment is a structural marker of the revolution\u2019s corruption. The commandments function as a constitution that only the powerful can read and amend.',
    themes: ['Language & Propaganda', 'Power & Corruption'],
    examTip: 'Analyse the specific addition ("with sheets") and explain how it works rhetorically. The qualification appears reasonable, which is precisely how propaganda operates \u2014 by making the unacceptable seem logical.',
  },
  {
    id: 9,
    quote: 'Man is the only creature that consumes without producing.',
    speaker: 'Old Major',
    chapter: 'Chapter 1',
    context: 'Old Major\u2019s speech to the assembled animals, outlining the Marxist case for revolution.',
    analysis:
      'Old Major\u2019s critique identifies exploitation as the defining feature of human rule. The irony is devastating: the pigs will replicate this exact behaviour, consuming the milk, apples, whisky and produce while the other animals labour. Orwell uses Old Major\u2019s speech to establish the ideals against which Napoleon\u2019s corruption will be measured.',
    thematicLinks:
      'Directly parallels Marx\u2019s labour theory of value. The gap between Old Major\u2019s vision and Napoleon\u2019s reality is the novel\u2019s central tragic irony.',
    themes: ['Revolution & Betrayal', 'Class & Inequality'],
    examTip: 'Quote this alongside evidence of the pigs\u2019 later consumption (milk, apples, whisky, sleeping in beds) to show how the revolution betrayed its own principles.',
  },
  {
    id: 10,
    quote: 'Windmill or no windmill, he said, life would go on as it had always gone on \u2014 that is, badly.',
    speaker: 'Narrator (reporting Benjamin\u2019s view)',
    chapter: 'Chapter 5',
    context: 'Benjamin\u2019s response when asked his opinion on the windmill debate between Napoleon and Snowball.',
    analysis:
      'Benjamin\u2019s cynicism is Orwell\u2019s sharpest critique of the educated class. He sees through the propaganda but refuses to act on his understanding. The parenthetical "that is, badly" reduces all political change to futility. Orwell presents Benjamin not as wise but as complicit: his refusal to engage enables the tyranny he privately deplores.',
    thematicLinks:
      'Benjamin represents the intellectuals who see injustice clearly but do nothing. His insight without action is as dangerous as Boxer\u2019s action without insight.',
    themes: ['Education & Awareness', 'Power & Corruption'],
    examTip: 'Compare Benjamin with Boxer: one has understanding without courage, the other has courage without understanding. Neither saves the farm. This comparison makes a strong analytical paragraph.',
  },
  {
    id: 11,
    quote: 'All that year the animals worked like slaves.',
    speaker: 'Narrator',
    chapter: 'Chapter 6',
    context: 'Description of the animals\u2019 labour during the first construction of the windmill.',
    analysis:
      'The simile is devastating in its irony. The revolution was fought to end slavery, yet the animals are now compared to the very thing they sought to escape. Orwell\u2019s narrator is not ironic by accident \u2014 the word "slaves" forces the reader to confront the revolution\u2019s failure at its most basic level.',
    thematicLinks:
      'Connects to the Five Year Plans of the Soviet Union, where workers were driven to exhaustion for projects that primarily served the state\u2019s prestige.',
    themes: ['Revolution & Betrayal', 'Class & Inequality'],
    examTip: 'The single word "slaves" carries enormous analytical weight. In one simile, Orwell collapses the distance between liberation and oppression.',
  },
  {
    id: 12,
    quote: 'Surely, comrades, you do not want Jones back?',
    speaker: 'Squealer',
    chapter: 'Chapter 5 (repeated throughout)',
    context: 'Squealer\u2019s standard response whenever the animals question the pigs\u2019 growing privileges.',
    analysis:
      'This rhetorical question is the pigs\u2019 most effective propaganda tool. It replaces reasoned argument with fear, deflecting every criticism by invoking the spectre of the old regime. Orwell shows that propaganda does not need to be convincing \u2014 it only needs to make the alternative seem worse. The repetition throughout the novel demonstrates how a single fear-based technique can sustain tyranny indefinitely.',
    thematicLinks:
      'Parallels how totalitarian regimes invoke external threats to justify internal repression. "Jones" functions as the permanent emergency that prevents any questioning of authority.',
    themes: ['Language & Propaganda', 'Power & Corruption'],
    examTip: 'Note that Squealer never answers the actual complaint. He changes the subject to fear. This is a classic propaganda technique worth naming in your essay.',
  },
  {
    id: 13,
    quote: 'Comrade Napoleon, Father of All Animals, Terror of Mankind, Protector of the Sheepfold, Ducklings\u2019 Friend.',
    speaker: 'Narrator (listing Napoleon\u2019s titles)',
    chapter: 'Chapter 8',
    context: 'Napoleon acquires an ever-growing list of honorific titles as his cult of personality develops.',
    analysis:
      'The accumulation of absurd titles parodies Stalin\u2019s personality cult. "Father of All Animals" echoes "Father of the Peoples," Stalin\u2019s official title. The contradiction between "Terror of Mankind" and "Ducklings\u2019 Friend" reveals the incoherence that personality cults require the public to accept without question. Orwell uses comic excess to expose the absurdity of totalitarian self-glorification.',
    thematicLinks:
      'Connects to the broader theme of language as power. The titles do not describe reality \u2014 they construct it. Napoleon\u2019s authority is partly built through the language used to describe him.',
    themes: ['Power & Corruption', 'Language & Propaganda'],
    examTip: 'Analyse the contradictions within the titles. "Terror" and "Friend" in the same list reveals the absurdity that propaganda normalises. This is strong AO2 material.',
  },
  {
    id: 14,
    quote: 'Fools! Fools! Do you not see what is written on the side of that van?',
    speaker: 'Benjamin',
    chapter: 'Chapter 9',
    context: 'Benjamin reads the lettering on the van taking Boxer to the knacker\u2019s: "Alfred Simmonds, Horse Slaughterer."',
    analysis:
      'Benjamin\u2019s outburst is the novel\u2019s most agonising moment. He has always been able to read but has chosen silence and disengagement. His cry comes too late to save Boxer. The repetition of "Fools" \u2014 directed at the other animals \u2014 is also directed at himself. Orwell\u2019s sharpest critique falls not on the powerful but on the educated who refuse to act until it is too late.',
    thematicLinks:
      'The climax of both the Boxer and Benjamin arcs. Education without moral courage is worthless. Benjamin\u2019s literacy could have saved lives; his silence made him complicit.',
    themes: ['Loyalty & Exploitation', 'Education & Awareness'],
    examTip: 'This is the emotional peak of the novel. Use it in essays about Boxer\u2019s exploitation, Benjamin\u2019s complicity, or the role of education. It serves all three arguments.',
  },
  {
    id: 15,
    quote: 'If she herself had had any picture of the future, it had been of a society of animals set free from hunger and the whip, all equal, each working according to his capacity.',
    speaker: 'Narrator (about Clover)',
    chapter: 'Chapter 7',
    context: 'Clover reflects on the revolution\u2019s failure after witnessing Napoleon\u2019s public executions.',
    analysis:
      'This passage is the emotional heart of the novel. Clover\u2019s vision is modest, humane and reasonable, which makes its betrayal more painful. Orwell gives the most moving articulation of revolutionary hope to an inarticulate cart-horse, not to the intellectual pigs. The pathos lies in the distance between Clover\u2019s simple dream and the brutal reality.',
    thematicLinks:
      'Echoes Marx\u2019s principle "from each according to his ability." Clover\u2019s vision is the revolution\u2019s purest expression, placed at the moment of its deepest violation.',
    themes: ['Revolution & Betrayal', 'Class & Inequality'],
    examTip: 'This quote works beautifully as a contrast paragraph. Pair Clover\u2019s dream with the reality of Napoleon\u2019s farm to show the full scale of the revolution\u2019s betrayal.',
  },
  {
    id: 16,
    quote: 'The milk and the windfall apples should be reserved for the pigs alone.',
    speaker: 'Squealer',
    chapter: 'Chapter 3',
    context: 'Squealer justifies the pigs\u2019 first material privilege, claiming they need the nutrition for "brainwork."',
    analysis:
      'The milk and apples are the first visible sign of inequality on Animal Farm. Orwell places this incident early to show that corruption begins with small, apparently reasonable privileges, not grand betrayals. The pseudo-scientific justification ("brainwork") parodies Soviet rhetoric about the intellectual superiority of the ruling class. Once this privilege is accepted, every subsequent one becomes easier.',
    thematicLinks:
      'The thin end of the wedge. Every later privilege \u2014 beds, clothes, whisky, walking on two legs \u2014 follows the pattern established here: take the privilege, then justify it with propaganda.',
    themes: ['Power & Corruption', 'Language & Propaganda', 'Class & Inequality'],
    examTip: 'Use this as your example of how corruption begins. Orwell\u2019s structural choice to place it in Chapter 3 shows that the revolution was compromised almost immediately.',
  },
  {
    id: 17,
    quote: 'They had come to a time when no one dared speak his mind, when fierce, growling dogs roamed everywhere.',
    speaker: 'Narrator',
    chapter: 'Chapter 7',
    context: 'Description of the farm\u2019s atmosphere after Napoleon\u2019s purges and show trials.',
    analysis:
      'The dogs are Orwell\u2019s equivalent of the NKVD \u2014 Stalin\u2019s secret police. "No one dared speak his mind" describes the defining condition of totalitarianism: the elimination of free thought through fear. The passive construction ("had come to a time") suggests the change was gradual and thus harder to resist \u2014 no single moment could have been identified as the point of no return.',
    thematicLinks:
      'Connects violence and silence: the dogs enforce the silence, and the silence enables further violence. This is the cycle that sustains totalitarian power.',
    themes: ['Power & Corruption', 'Language & Propaganda'],
    examTip: 'Analyse the passive voice ("had come to a time"). Orwell\u2019s grammar mirrors the way totalitarianism arrives \u2014 not in one dramatic moment but through a gradual, almost imperceptible erosion of freedom.',
  },
  {
    id: 18,
    quote: 'Beasts of England, beasts of Ireland, / Beasts of every land and clime.',
    speaker: 'Old Major (teaching the revolutionary anthem)',
    chapter: 'Chapter 1',
    context: 'Old Major teaches the animals the anthem that will inspire the Rebellion and sustain their hope.',
    analysis:
      '"Beasts of England" functions as the Internationale of Animal Farm \u2014 the revolutionary anthem that gives the movement its emotional power. Its later banning by Napoleon in Chapter 7 signals the moment when the regime officially repudiates its own origins. Orwell shows that totalitarian regimes must suppress their own founding ideals once those ideals become an embarrassment.',
    thematicLinks:
      'The song\u2019s banning is the cultural equivalent of rewriting the commandments. Both involve the destruction of the revolution\u2019s own history to protect the current regime.',
    themes: ['Revolution & Betrayal', 'Language & Propaganda'],
    examTip: 'The banning of "Beasts of England" is often overlooked. Use it to show how totalitarian regimes suppress their own revolutionary origins when those origins become inconvenient.',
  },
  {
    id: 19,
    quote: 'He had seemed to oppose the windmill, simply as a manoeuvre to get rid of Snowball.',
    speaker: 'Narrator',
    chapter: 'Chapter 5',
    context: 'Napoleon announces the windmill will be built after all, despite having opposed it when Snowball proposed it.',
    analysis:
      'This is one of Orwell\u2019s clearest Stalin parallels: Stalin adopted Trotsky\u2019s industrialisation programme after exiling him. The sentence reveals that Napoleon\u2019s opposition was never ideological but purely strategic \u2014 he opposed the windmill not because it was wrong but because Snowball supported it. Power, not policy, is what matters.',
    thematicLinks:
      'Exposes the gap between political rhetoric and political reality. Napoleon\u2019s reversal proves that his ideology is infinitely flexible \u2014 it serves power, not principle.',
    themes: ['Power & Corruption', 'Revolution & Betrayal'],
    examTip: 'Name the historical parallel: Stalin adopted Trotsky\u2019s Five Year Plan after exiling him. This earns AO3 marks for contextual knowledge.',
  },
  {
    id: 20,
    quote: 'Twelve voices were shouting in anger, and they were all alike.',
    speaker: 'Narrator',
    chapter: 'Chapter 10',
    context: 'The pigs and human farmers quarrel over a card game in the final scene, observed by the other animals through the window.',
    analysis:
      'The final confrontation is between two groups of oppressors, not between oppressor and oppressed. The animals are reduced to silent spectators of a dispute between their new masters and their old ones. "All alike" is Orwell\u2019s final condemnation: the revolution has not failed because of one bad leader but because the structure of power itself produces identical outcomes regardless of who holds it.',
    thematicLinks:
      'The culmination of the circular narrative. The "twelve voices" \u2014 six pigs, six humans \u2014 are mirror images, proving that the revolution has changed nothing.',
    themes: ['Power & Corruption', 'Revolution & Betrayal'],
    examTip: 'Use this alongside the "pig to man" quote for a devastating final paragraph. Together they provide Orwell\u2019s complete thesis: unchecked power produces identical tyranny regardless of the ideology that justifies it.',
  },
]

const THEME_LIST = [
  'Power & Corruption',
  'Language & Propaganda',
  'Revolution & Betrayal',
  'Class & Inequality',
  'Loyalty & Exploitation',
  'Education & Awareness',
] as const

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function AnimalFarmKeyQuotesPage() {
  const [filterTheme, setFilterTheme] = useState<string | null>(null)

  const filtered = QUOTES.filter((q) => {
    if (filterTheme && !q.themes.includes(filterTheme)) return false
    return true
  })

  return (
    <div className="min-h-screen bg-cream-50 font-serif">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Animal Farm", url: "https://theenglishhub.app/revision/texts/animal-farm" },
          { name: "Key Quotations", url: "https://theenglishhub.app/revision/texts/animal-farm/key-quotes" },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="Animal Farm" textType="novella" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-teal-400/20 bg-gradient-to-br from-cream-100 via-cream-50 to-clay-200/[0.06] p-6 sm:p-8 lg:p-10">
          <a
            href="/revision/texts/animal-farm"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="size-3.5" />
            Back to Animal Farm
          </a>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-clay-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-clay-600">
              <Quote className="size-3" />
              Key Quotes
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-teal-400/20 px-3 py-1 text-xs text-teal-600">
              <Sparkles className="size-3" />
              AO1 / AO2
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Animal Farm &mdash; Key Quotes
          </h1>
          <p className="mt-2 text-lg text-ink-500">
            by George Orwell &mdash; 1945
          </p>
          <p className="mt-4 max-w-2xl text-ink-500">
            Twenty essential quotations organised by chapter and theme, each with
            speaker, context, detailed analysis, thematic links and exam tips for
            GCSE English Literature.
          </p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-300/20 bg-clay-200/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-500" />
            <div className="text-sm text-ink-600">
              <p className="mb-1 font-bold text-ink-800">How to use these quotes</p>
              <p>
                You do not need to memorise all twenty. Aim for{' '}
                <strong>10&ndash;12 versatile quotes</strong> that you can
                analyse in depth and that cover multiple themes. For each quote,
                practise identifying the technique, explaining its effect, and
                linking it to Orwell&rsquo;s allegorical purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="size-4 text-teal-600" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">
              Filter by Theme
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterTheme(null)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                !filterTheme
                  ? 'bg-teal-600 text-white'
                  : 'bg-cream-100 text-ink-500 hover:bg-cream-200'
              }`}
            >
              All ({QUOTES.length})
            </button>
            {THEME_LIST.map((theme) => (
              <button
                key={theme}
                onClick={() => setFilterTheme(filterTheme === theme ? null : theme)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  filterTheme === theme
                    ? 'bg-clay-500 text-white'
                    : 'bg-cream-100 text-ink-500 hover:bg-cream-200'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </section>

        {/* Quote cards */}
        <div className="mt-8 space-y-4">
          {filtered.map((q) => (
            <section
              key={q.id}
              className="rounded-xl border border-teal-400/15 bg-cream-100/50 p-5"
            >
              {/* Quote */}
              <div className="flex items-start gap-3 mb-3">
                <Quote className="mt-1 size-5 shrink-0 text-clay-400" />
                <p className="font-serif text-lg font-semibold leading-snug text-ink-900">
                  &ldquo;{q.quote}&rdquo;
                </p>
              </div>

              {/* Speaker & chapter */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-700">
                  {q.speaker}
                </span>
                <span className="text-xs text-ink-300">&bull;</span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-clay-500">
                  {q.chapter}
                </span>
              </div>

              {/* Context */}
              <div className="mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-400">
                  Context
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">
                  {q.context}
                </p>
              </div>

              {/* Analysis */}
              <div className="mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  Analysis
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">
                  {q.analysis}
                </p>
              </div>

              {/* Thematic links */}
              <div className="mb-3 rounded-lg border border-teal-400/10 bg-teal-500/5 p-3">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-teal-700">
                  Thematic Links
                </p>
                <p className="text-sm leading-relaxed text-ink-600">
                  {q.thematicLinks}
                </p>
              </div>

              {/* Themes */}
              <div className="mb-3 flex flex-wrap gap-1.5">
                {q.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-clay-300/30 bg-clay-200/10 px-2.5 py-0.5 text-xs font-medium text-clay-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Exam tip */}
              <div className="rounded-lg bg-clay-200/10 p-3">
                <div className="flex items-start gap-2">
                  <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-clay-500" />
                  <p className="text-xs leading-relaxed text-ink-500">
                    <span className="font-bold text-clay-600">Exam tip: </span>
                    {q.examTip}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-xl border border-ink-100 bg-cream-100/60 p-8 text-center">
            <p className="text-sm text-ink-400">
              No quotes match your current filter. Try a different theme.
            </p>
          </div>
        )}

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-teal-400/20 bg-teal-500/5 p-6">
          <h3 className="font-serif text-xl font-bold text-ink-900">
            Continue studying
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            Explore characters, themes, context and essay plans for Animal Farm.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/revision/texts/animal-farm/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Characters
            </a>
            <a
              href="/revision/texts/animal-farm/themes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Themes
            </a>
            <a
              href="/revision/texts/animal-farm/context"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Context
            </a>
            <a
              href="/revision/texts/animal-farm/essay-plans"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Essay Plans
            </a>
          </div>
        </section>

        {/* Fair-dealing notice */}
        <p className="mt-10 border-t border-ink-100 pt-4 text-xs text-ink-400">
          Short quotations (&le;15 words each) reproduced under the fair dealing
          provision of the Copyright, Designs and Patents Act 1988 for the purpose
          of criticism, review and educational study.{' '}
          <em>Animal Farm</em> by George Orwell is published by Penguin Books.
          Full text available from your school or local library.
        </p>
      </div>
    </div>
  )
}
