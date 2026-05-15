import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'A Christmas Carol Study Guide - Cambridge IGCSE English Literature',
    description:
      'Complete A Christmas Carol study guide for Cambridge IGCSE English Literature. Stave summaries, character analysis, themes, 18 key quotes with analysis, Victorian context, Scrooge',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/caie/christmas-carol',
  },
  title: 'A Christmas Carol Study Guide - Cambridge IGCSE English Literature',
  description:
    "Complete A Christmas Carol study guide for Cambridge IGCSE English Literature. Stave summaries, character analysis, themes, 18 key quotes with analysis, Victorian context, Scrooge's transformation, and Cambridge-specific exam technique.",
}

/* ─── Data ───────────────────────────────────────────────────── */

const keyQuotes = [
  {
    quote: 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!',
    speaker: 'Narrator',
    location: 'Stave One',
    analysis:
      "The exclamatory 'Oh!' draws the reader in conversationally, establishing the oral storytelling tone of the novella. 'Tight-fisted' and 'grindstone' create an image of relentless, crushing miserliness. The narrator's direct address breaks the fourth wall, positioning the reader as an audience being told a moral tale.",
  },
  {
    quote: 'a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!',
    speaker: 'Narrator',
    location: 'Stave One',
    analysis:
      "The list of present participles creates a cumulative, breathless effect, each verb intensifying Scrooge's avarice. The six verbs suggest his greed is all-consuming. 'Covetous' carries biblical weight (the Tenth Commandment), while 'sinner' frames his miserliness as a moral and spiritual failing, not just a personality flaw.",
  },
  {
    quote: 'Hard and sharp as flint, from which no steel had ever struck out generous fire',
    speaker: 'Narrator',
    location: 'Stave One',
    analysis:
      "The simile compares Scrooge to flint: cold, unyielding, and incapable of warmth. The negation 'no steel had ever' suggests his coldness is absolute and long-standing. Fire symbolises generosity and human warmth throughout the novella; Scrooge's inability to produce it marks him as emotionally and spiritually dead.",
  },
  {
    quote:
      'Are there no prisons? ... And the Union Workhouses? ... The Treadmill and the Poor Law are in full vigour, then?',
    speaker: 'Scrooge',
    location: 'Stave One',
    analysis:
      "Scrooge parrots the utilitarian philosophy of Thomas Malthus. His rhetorical questions dismiss charitable responsibility by pointing to institutional 'solutions' that Dickens knew to be cruel and dehumanising. This is a direct attack on the 1834 Poor Law Amendment Act, which Dickens despised.",
  },
  {
    quote: 'If they would rather die, they had better do it, and decrease the surplus population',
    speaker: 'Scrooge',
    location: 'Stave One',
    analysis:
      "Dickens places Malthusian economics in Scrooge's mouth to expose its inhumanity. 'Surplus population' reduces human beings to a statistical inconvenience. This phrase returns in Stave Three when the Ghost of Christmas Present throws it back at Scrooge, forcing him to confront his own callousness.",
  },
  {
    quote: 'Mankind was my business',
    speaker: "Marley's Ghost",
    location: 'Stave One',
    analysis:
      "Marley redefines 'business' from commerce to compassion. The simple, declarative sentence carries enormous moral weight. Dickens uses Marley as a warning figure: his chains, forged in life through neglect of others, literalise the spiritual consequences of selfishness. This is the novella's central moral thesis.",
  },
  {
    quote: 'I wear the chain I forged in life. I made it link by link, and yard by yard',
    speaker: "Marley's Ghost",
    location: 'Stave One',
    analysis:
      "The chain is an allegory for accumulated sin. The repetition of 'link by link, and yard by yard' emphasises that moral corruption is gradual, built through daily choices. The first-person pronouns insist on personal responsibility. Marley's suffering is self-inflicted, reinforcing Dickens's message that individuals must choose to change.",
  },
  {
    quote: 'A solitary child, neglected by his friends, is left there still',
    speaker: 'Narrator',
    location: 'Stave Two',
    analysis:
      "The Ghost of Christmas Past reveals the origin of Scrooge's emotional isolation. 'Solitary' and 'neglected' generate sympathy for young Scrooge, complicating the reader's judgement. Dickens suggests that cruelty is often rooted in suffering; Scrooge's misanthropy is a defence mechanism forged in childhood loneliness.",
  },
  {
    quote: 'Another idol has displaced me ... a golden one',
    speaker: 'Belle',
    location: 'Stave Two',
    analysis:
      "Belle's metaphor equates Scrooge's love of money with idolatry, a grave biblical sin. 'Displaced' suggests money has physically pushed her out of Scrooge's heart. The 'golden idol' alludes to the Golden Calf in Exodus, reinforcing the religious framework of the novella's moral argument.",
  },
  {
    quote:
      'They were not a handsome family ... But they were happy, grateful, pleased with one another',
    speaker: 'Narrator',
    location: 'Stave Three',
    analysis:
      "The Cratchit family embodies Dickens's argument that happiness is found in love and togetherness, not wealth. The concessive 'not handsome' followed by the tricolon 'happy, grateful, pleased' prioritises emotional richness over material wealth. They are the moral counterpoint to Scrooge's affluent misery.",
  },
  {
    quote: 'God bless us, every one!',
    speaker: 'Tiny Tim',
    location: 'Stave Three',
    analysis:
      "Tiny Tim's blessing is inclusive ('every one') and selfless, contrasting with Scrooge's exclusionary worldview. His Christian piety and innocence make him a symbol of the poor whom society neglects. The phrase becomes the novella's refrain, appearing again at the very end to signal Scrooge's completed transformation.",
  },
  {
    quote: 'Tell me if Tiny Tim will live',
    speaker: 'Scrooge',
    location: 'Stave Three',
    analysis:
      "A turning point in Scrooge's transformation. His concern for Tiny Tim shows the awakening of empathy. The imperative 'Tell me' reveals urgency and emotional investment in another person's fate for the first time. The Ghost's response, echoing Scrooge's own 'surplus population' remark, forces him to feel the human cost of his philosophy.",
  },
  {
    quote:
      'This boy is Ignorance. This girl is Want. Beware them both ... but most of all beware this boy',
    speaker: 'Ghost of Christmas Present',
    location: 'Stave Three',
    analysis:
      "The allegorical children represent society's neglected poor. Dickens capitalises 'Ignorance' and 'Want' to personify them as systemic dangers. The Ghost's warning that Ignorance is the greater threat reflects Dickens's belief that lack of education perpetuates poverty. This is the novella's most overtly political passage.",
  },
  {
    quote: 'The Phantom slowly, gravely, silently approached',
    speaker: 'Narrator',
    location: 'Stave Four',
    analysis:
      "The tricolon of adverbs creates a menacing, funeral rhythm. The Ghost of Christmas Yet to Come is the only spirit who does not speak, making it the most terrifying. Its silence forces Scrooge (and the reader) to interpret meaning without comfort. The lack of dialogue mirrors death's finality and unanswerable nature.",
  },
  {
    quote: 'I am not the man I was',
    speaker: 'Scrooge',
    location: 'Stave Four',
    analysis:
      "Scrooge's declaration of change is simple and direct, contrasting with the elaborate, defensive language of Stave One. The past tense 'was' signals a break from his former self. This is the climactic moment of his redemption arc; he acknowledges personal responsibility and commits to transformation.",
  },
  {
    quote: 'I will honour Christmas in my heart, and try to keep it all the year',
    speaker: 'Scrooge',
    location: 'Stave Four',
    analysis:
      "Scrooge's vow extends generosity beyond a single day, making 'Christmas' a metonym for compassion, charity, and community. The verb 'try' is important: Dickens acknowledges that moral improvement is an ongoing effort, not a one-time event. This pledge answers Marley's challenge to make 'mankind' his business.",
  },
  {
    quote:
      'He became as good a friend, as good a master, and as good a man, as the good old city knew',
    speaker: 'Narrator',
    location: 'Stave Five',
    analysis:
      "The anaphoric repetition of 'as good' across three social roles (friend, master, man) shows Scrooge's transformation is total. His goodness radiates outward from personal relationships to his professional conduct to his fundamental character. The superlative construction confirms that his redemption is complete and recognised by the community.",
  },
  {
    quote:
      'He had no further intercourse with Spirits, but lived upon the Total Abstinence Principle',
    speaker: 'Narrator',
    location: 'Stave Five',
    analysis:
      "A moment of Dickensian humour: 'Total Abstinence' puns on the temperance movement. The comedy signals that the dark, Gothic atmosphere of the ghost visitations has lifted. Dickens ensures the novella ends on warmth and lightness, reinforcing the joy that generosity brings.",
  },
]

const characters = [
  {
    name: 'Ebenezer Scrooge',
    description:
      "The protagonist and the vehicle for Dickens's moral argument. In Stave One, Scrooge is defined by his miserliness, emotional isolation, and contempt for the poor. His surname has entered the English language as a synonym for a miser. Through the intervention of three spirits, he undergoes a complete moral transformation: from a man who sees other people as 'surplus population' to one who 'knew how to keep Christmas well'. His arc embodies Dickens's belief that it is never too late to change and that individual moral choices have social consequences.",
  },
  {
    name: 'Bob Cratchit',
    description:
      "Scrooge's underpaid clerk, who works in freezing conditions with only one coal for his fire. Cratchit represents the exploited working class: hard-working, loyal, and uncomplaining despite his poverty. His warmth and devotion to his family contrast sharply with Scrooge's solitary wealth. Dickens uses him to show that the poor possess moral qualities that the rich lack, and to argue for better treatment of workers.",
  },
  {
    name: 'Tiny Tim',
    description:
      "Bob Cratchit's youngest son, disabled and gravely ill. He is a sentimental but powerful symbol of the innocent victims of social injustice; his potential death is directly linked to Scrooge's (and society's) refusal to help the poor. His catchphrase 'God bless us, every one!' encapsulates the Christian charity that Dickens advocates. His survival in the reformed timeline shows that individual generosity can save lives.",
  },
  {
    name: 'Jacob Marley',
    description:
      "Scrooge's deceased business partner, who appears as a ghost weighed down by chains forged from his own greed. Marley functions as a cautionary figure and catalyst for the plot. His suffering in death represents the spiritual consequences of a life devoted solely to profit. His warning that 'mankind was my business' articulates the novella's central message.",
  },
  {
    name: "Fred (Scrooge's Nephew)",
    description:
      "Scrooge's cheerful, generous nephew who persistently invites his uncle to Christmas dinner despite repeated rejection. Fred embodies the Christmas spirit of inclusivity and forgiveness. He argues that Christmas is 'a kind, forgiving, charitable, pleasant time', providing a philosophical counterpoint to Scrooge's 'humbug'. His patience is rewarded when Scrooge finally attends his party in Stave Five.",
  },
  {
    name: 'The Ghost of Christmas Past',
    description:
      'The first of the three spirits, described with contradictory imagery: both old and young, bright yet flickering. It represents memory and self-reflection. By showing Scrooge his childhood loneliness, his apprenticeship under Fezziwig, and his lost love Belle, the spirit reveals how Scrooge became the man he is, generating sympathy and motivating change.',
  },
  {
    name: 'The Ghost of Christmas Present',
    description:
      "A jovial giant robed in green, surrounded by a feast. It represents generosity, abundance, and social awareness. It shows Scrooge the Cratchit family, Fred's party, and the allegorical children Ignorance and Want. Its ageing during the stave (it grows old within hours) symbolises the fleeting nature of the present and the urgency of reform.",
  },
  {
    name: 'The Ghost of Christmas Yet to Come',
    description:
      'A silent, shrouded phantom resembling the Grim Reaper. The most terrifying of the three spirits, it shows Scrooge a future in which Tiny Tim has died and Scrooge himself dies unmourned, his possessions stolen and sold. Its silence forces Scrooge to draw his own conclusions. It represents the inevitable consequences of an unchanged life.',
  },
]

const themes = [
  {
    name: 'Redemption and Moral Transformation',
    detail:
      "The novella's central argument is that people can change. Scrooge's journey from miser to philanthropist demonstrates that moral transformation is possible at any age. Dickens structures the narrative as a secular redemption story: sin (Stave One), confession through self-knowledge (Staves Two-Four), and rebirth (Stave Five). The Christian framework of repentance and forgiveness underpins the entire text.",
  },
  {
    name: 'Social Responsibility and Poverty',
    detail:
      "Dickens wrote A Christmas Carol as a direct response to the exploitation of the poor in Victorian England. Through Scrooge's callous references to prisons and workhouses, the Cratchit family's poverty, and the allegorical children Ignorance and Want, Dickens argues that the wealthy have a moral obligation to help the less fortunate. The novella is both a story and a piece of social campaigning.",
  },
  {
    name: 'Christmas and Generosity',
    detail:
      "Christmas functions as a symbol of everything Scrooge lacks: warmth, community, generosity, and joy. Dickens presents it not merely as a religious festival but as a state of mind, 'a kind, forgiving, charitable, pleasant time' (Fred). Scrooge's vow to 'honour Christmas in my heart, and try to keep it all the year' extends this symbolism beyond December, making Christmas a metonym for year-round compassion.",
  },
  {
    name: 'Isolation versus Community',
    detail:
      "Scrooge's solitude is presented as both self-imposed and spiritually destructive. He rejects Fred's invitation, dismisses the charity collectors, and lives alone. In contrast, the Cratchits, Fred's party guests, and even the miners and lighthouse keepers celebrate together. Dickens suggests that human connection is essential to happiness and that isolation is a form of self-punishment.",
  },
  {
    name: 'The Supernatural and Gothic',
    detail:
      "The ghost story framework allows Dickens to dramatise abstract moral arguments. Marley's ghost, with its clanking chains and transparent body, draws on Gothic conventions to create terror. Each spirit escalates the supernatural tension, culminating in the silent, death-like phantom of Stave Four. The supernatural is not an end in itself but a vehicle for moral instruction.",
  },
  {
    name: 'Time and Memory',
    detail:
      "The three ghosts represent past, present, and future, structuring the novella around time itself. The Ghost of Christmas Past shows that the present self is shaped by earlier experiences; the Ghost of Christmas Present reveals what is happening now beyond Scrooge's awareness; the Ghost of Christmas Yet to Come warns that the future is determined by present choices. This temporal structure gives Scrooge (and the reader) the urgency to act now.",
  },
  {
    name: 'Wealth and Greed',
    detail:
      "Dickens critiques the Victorian worship of wealth through Scrooge's character. Money has replaced human connection in Scrooge's life: Belle accuses him of worshipping a 'golden idol'. Yet wealth brings him no happiness. The Cratchits, though poor, are rich in love. Dickens does not condemn wealth itself (Fezziwig is wealthy and generous) but the hoarding of it at others' expense.",
  },
]

const staveSummary = [
  {
    stave: "Stave One: Marley's Ghost",
    summary:
      "On Christmas Eve, Scrooge refuses his nephew Fred's dinner invitation and dismisses two charity collectors. That night, the ghost of his dead partner Jacob Marley appears, bound in chains forged by his own greed. Marley warns Scrooge that he will share the same fate unless he changes, and announces the arrival of three spirits. The stave establishes Scrooge's character and the novella's moral framework.",
  },
  {
    stave: 'Stave Two: The First of the Three Spirits',
    summary:
      'The Ghost of Christmas Past takes Scrooge on a journey through his memories: his lonely childhood at boarding school, the kindness of his sister Fan, his happy apprenticeship under the generous Mr Fezziwig, and his broken engagement to Belle, who leaves him because he loves money more than her. Scrooge is visibly moved, showing that emotion still exists beneath his hardened exterior.',
  },
  {
    stave: 'Stave Three: The Second of the Three Spirits',
    summary:
      "The Ghost of Christmas Present shows Scrooge how others celebrate Christmas: the joyful Cratchit family (including the ailing Tiny Tim), Fred's warm dinner party where guests laugh at Scrooge, and scenes of celebration among the poor. The spirit reveals two emaciated children beneath its robes: Ignorance and Want, representing society's neglected poor. It warns Scrooge especially to beware Ignorance.",
  },
  {
    stave: 'Stave Four: The Last of the Spirits',
    summary:
      "The Ghost of Christmas Yet to Come, a silent, robed phantom, shows Scrooge a bleak future: businessmen discuss a dead man with indifference, thieves pawn a dead man's belongings, and the Cratchit family mourns Tiny Tim's death. Scrooge is finally shown his own neglected grave. Horrified, he pledges to change, clutching at the spirit's robes and begging for a chance to alter his fate.",
  },
  {
    stave: 'Stave Five: The End of It',
    summary:
      "Scrooge wakes on Christmas morning, transformed. He buys the largest turkey for the Cratchits, donates generously to charity, attends Fred's dinner party, and raises Bob Cratchit's salary. He becomes a second father to Tiny Tim, who does not die. The narrator confirms that Scrooge keeps Christmas 'well' for the rest of his life. The novella ends with Tiny Tim's words: 'God bless us, every one!'",
  },
]

const scroogeTransformation = [
  {
    stage: 'Stave One: The Miser',
    detail:
      "Scrooge is presented as cold, solitary, and contemptuous of the poor. He dismisses Christmas as 'humbug', refuses charity, and suggests the poor should die to 'decrease the surplus population'. Dickens uses animal and weather imagery ('hard and sharp as flint', 'the cold within him froze his old features') to dehumanise him. He is spiritually dead.",
  },
  {
    stage: 'Stave Two: The Roots of Isolation',
    detail:
      "The Ghost of Christmas Past reveals that Scrooge was once capable of emotion. His childhood loneliness explains (though does not excuse) his later coldness. His joy at seeing Fezziwig and his tears at Belle's departure show that his former self still exists. Scrooge begins to feel regret, the first step toward change.",
  },
  {
    stage: 'Stave Three: Awakening Empathy',
    detail:
      "Scrooge's growing concern for Tiny Tim marks a crucial shift. When the Ghost echoes his 'surplus population' remark, Scrooge is 'overcome with penitence and grief'. He begins to see the human consequences of his philosophy. His interest in the Cratchit family and discomfort at Fred's party (where guests mock him) show his emotional defences crumbling.",
  },
  {
    stage: 'Stave Four: Fear and Repentance',
    detail:
      "The vision of his own unmourned death terrifies Scrooge into action. His declaration 'I am not the man I was' is a moment of genuine self-knowledge. He does not simply fear death; he fears dying without having lived meaningfully. His frantic promises to change are motivated by both fear and a newly awakened moral conscience.",
  },
  {
    stage: 'Stave Five: The Transformed Man',
    detail:
      "Scrooge's joy on Christmas morning is childlike and infectious. He laughs for the first time in the novella, buys the prize turkey anonymously, and gives generously to charity. Crucially, his transformation is sustained: he raises Bob's salary, becomes a second father to Tiny Tim, and keeps Christmas 'all the year'. Dickens shows that genuine redemption requires lasting action, not a single gesture.",
  },
]

const assessmentObjectives = [
  {
    code: 'Textual Knowledge',
    title: 'Show detailed knowledge of the text',
    detail:
      "Demonstrate close knowledge of the novella's content through well-chosen references and quotations. Do not simply retell the plot; use specific details to support analytical points. Markers reward precise, embedded quotations over lengthy copied passages.",
  },
  {
    code: "Writer's Methods",
    title: "Understand the writer's methods and effects",
    detail:
      'Analyse how Dickens uses language, form, and structure to create meaning. This includes imagery, symbolism, narrative voice, the five-stave structure (paralleling a musical composition or a carol), the role of the three spirits, and the contrast between characters. Use literary terminology accurately.',
  },
  {
    code: 'Interpretation',
    title: 'Understand the significance of context',
    detail:
      "Connect the text to its Victorian context: the Industrial Revolution, the 1834 Poor Law, Malthusian economics, the conditions of the urban poor, and Dickens's own experiences (his father's imprisonment for debt, his childhood work in a blacking factory). Context should illuminate the text, not replace analysis of it.",
  },
  {
    code: 'Personal Response',
    title: 'Develop a personal response',
    detail:
      "Offer your own interpretation of the text rather than rehearsing generic points. Markers reward responses that engage thoughtfully with the question and consider alternative readings. For example: is Scrooge's transformation convincing, or is it too sudden? Is Tiny Tim a powerful symbol or a sentimental device?",
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default function ChristmasCarolStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature &mdash; Paper 1 (Prose)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A Christmas Carol &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Stave summaries, characters, themes, Scrooge&rsquo;s transformation,
            {keyQuotes.length} key quotes with analysis, Victorian context, assessment objectives,
            and Cambridge-specific exam technique.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Navigation ──────────────────────────────────────────── */}
        <nav className="mb-10 flex flex-wrap gap-2 text-sm" aria-label="Page sections">
          {[
            'Stave Summary',
            'Characters',
            'Themes',
            "Scrooge's Transformation",
            'Key Quotes',
            'Context',
            'What Markers Look For',
            'Exam Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
              className="rounded-full border border-primary/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          ))}
        </nav>

        {/* ── Stave Summary ─────────────────────────────────────────── */}
        <section id="stave-summary" aria-labelledby="stave-heading">
          <h2 id="stave-heading" className="text-2xl font-bold text-foreground">
            Stave Summary
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Dickens deliberately called the chapters &lsquo;staves&rsquo; (the sections of a song or
            carol), reinforcing the musical title and the idea that the novella is a harmonious,
            uplifting composition.
          </p>
          <div className="mt-6 space-y-4">
            {staveSummary.map((s) => (
              <div key={s.stave} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <h3 className="font-semibold text-foreground">{s.stave}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Characters ──────────────────────────────────────────── */}
        <section id="characters" aria-labelledby="characters-heading">
          <h2 id="characters-heading" className="text-2xl font-bold text-foreground">
            Character Analysis
          </h2>
          <div className="mt-6 space-y-6">
            {characters.map((c) => (
              <div key={c.name} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Themes ──────────────────────────────────────────────── */}
        <section id="themes" aria-labelledby="themes-heading">
          <h2 id="themes-heading" className="text-2xl font-bold text-foreground">
            Key Themes
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {themes.map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Scrooge's Transformation ──────────────────────────── */}
        <section id="scrooges-transformation" aria-labelledby="transformation-heading">
          <h2 id="transformation-heading" className="text-2xl font-bold text-foreground">
            Scrooge&rsquo;s Transformation
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Scrooge&rsquo;s moral arc is the backbone of the novella and the most frequently
            examined topic. Track how Dickens presents his change across the five staves.
          </p>
          <div className="mt-6 space-y-4">
            {scroogeTransformation.map((s, i) => (
              <div key={i} className="rounded-lg border-l-4 border-primary bg-card p-5 shadow-md">
                <h3 className="font-semibold text-foreground">{s.stage}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Key Quotes ──────────────────────────────────────────── */}
        <section id="key-quotes" aria-labelledby="quotes-heading">
          <h2 id="quotes-heading" className="text-2xl font-bold text-foreground">
            Key Quotes ({keyQuotes.length})
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Each quote includes the speaker, location, and detailed analysis suitable for Cambridge
            IGCSE responses.
          </p>
          <div className="mt-6 space-y-5">
            {keyQuotes.map((q, i) => (
              <div key={i} className="rounded-lg border-l-4 border-primary bg-card p-5 shadow-md">
                <blockquote className="text-base font-medium italic text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <p className="mt-1 text-xs font-semibold text-primary">
                  {q.speaker} &mdash; {q.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Context ─────────────────────────────────────────────── */}
        <section id="context" aria-labelledby="context-heading">
          <h2 id="context-heading" className="text-2xl font-bold text-foreground">
            Victorian &amp; Literary Context
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">
                The Industrial Revolution &amp; Urban Poverty
              </h3>
              <p className="mt-2">
                A Christmas Carol was published in 1843, at the height of the Industrial Revolution.
                Rapid industrialisation had created vast wealth for factory owners but appalling
                conditions for workers: overcrowded slums, child labour, and dangerous workplaces.
                Dickens witnessed this inequality first-hand in London and used the novella to argue
                that the wealthy bore a moral responsibility toward the poor.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Poor Law Amendment Act (1834)</h3>
              <p className="mt-2">
                The New Poor Law established workhouses as the primary form of relief for the
                destitute. Conditions were deliberately harsh to discourage applications: families
                were separated, diets were minimal, and inmates performed monotonous labour.
                Scrooge&rsquo;s reference to &lsquo;prisons&rsquo; and &lsquo;workhouses&rsquo; in
                Stave One directly echoes the language of the Poor Law. Dickens had already attacked
                workhouses in Oliver Twist (1837&ndash;39).
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">
                Thomas Malthus and &lsquo;Surplus Population&rsquo;
              </h3>
              <p className="mt-2">
                The economist Thomas Malthus argued that population growth would always outstrip
                food supply, and that poverty was a natural corrective. Scrooge&rsquo;s phrase
                &lsquo;decrease the surplus population&rsquo; directly echoes Malthusian thinking.
                Dickens found this philosophy morally repugnant and used Scrooge to expose its
                inhumanity, particularly when the Ghost of Christmas Present throws the phrase back
                at him.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Dickens&rsquo;s Personal Experience</h3>
              <p className="mt-2">
                When Dickens was twelve, his father was imprisoned in the Marshalsea debtors&rsquo;
                prison, and the young Charles was sent to work in Warren&rsquo;s Blacking Factory.
                This traumatic experience gave him a lifelong empathy with the poor and a horror of
                destitution. The novella&rsquo;s emotional intensity comes partly from personal
                conviction: Dickens understood poverty not as an abstraction but as a lived reality.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Christmas Tradition</h3>
              <p className="mt-2">
                By the 1840s, many older Christmas traditions (communal feasting, charity to the
                poor) were fading. A Christmas Carol is widely credited with reviving the cultural
                importance of Christmas and redefining it as a time for family, generosity, and
                social conscience. The novella was an immediate bestseller and has never been out of
                print.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Novella Form &amp; Structure</h3>
              <p className="mt-2">
                Dickens chose the novella form deliberately: it is short enough to be read in one
                sitting (reinforcing its parable-like quality) and was priced at five shillings,
                affordable for the middle class. The five-stave structure mirrors a musical
                composition, with the title &lsquo;A Christmas Carol&rsquo; framing the text as a
                song of celebration. The compressed timeframe (Christmas Eve to Christmas Day)
                creates urgency and dramatic intensity.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Assessment Objectives ───────────────────────────────── */}
        <section id="what-markers-look-for" aria-labelledby="ao-heading">
          <h2 id="ao-heading" className="text-2xl font-bold text-foreground">
            Cambridge Assessment Objectives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge IGCSE English Literature (0475/0992) assesses four objectives. Understanding
            what the marker is looking for will help you structure stronger responses.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {assessmentObjectives.map((ao) => (
              <div key={ao.code} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-foreground">
                  {ao.code}
                </span>
                <h3 className="mt-2 font-semibold text-foreground">{ao.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ao.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Exam Questions ──────────────────────────────────────── */}
        <section id="exam-questions" aria-labelledby="exam-heading">
          <h2 id="exam-heading" className="text-2xl font-bold text-foreground">
            Cambridge-Style Exam Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A Christmas Carol appears in <strong>Paper 1 (Prose)</strong> for Cambridge IGCSE
            English Literature. You will choose between a <strong>passage-based question</strong>{' '}
            and an <strong>essay question</strong>. Both carry equal marks (25). Below are examples
            of each type with guidance on how to approach them.
          </p>

          <div className="mt-6 space-y-6">
            {/* Passage-based 1 */}
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Passage-Based
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Re-read the passage in Stave One from &ldquo;Oh! But he was a tight-fisted hand at
                the grindstone&rdquo; to &ldquo;No wind that blew was bitterer than he.&rdquo; How
                does Dickens present Scrooge&rsquo;s character in this passage?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>
                    &bull; Work through the passage systematically, selecting key language features
                    (similes, listing, pathetic fallacy)
                  </li>
                  <li>
                    &bull; Analyse the cumulative effect of the participle list: &lsquo;squeezing,
                    wrenching, grasping, scraping, clutching&rsquo;
                  </li>
                  <li>
                    &bull; Discuss the narrator&rsquo;s tone: exclamatory, conversational, almost
                    theatrical &mdash; link to the oral storytelling tradition
                  </li>
                  <li>
                    &bull; Explore Dickens&rsquo;s use of weather and temperature imagery to
                    externalise Scrooge&rsquo;s inner coldness
                  </li>
                  <li>
                    &bull; Connect outward: how does this opening characterisation make his
                    transformation in Stave Five more powerful?
                  </li>
                </ul>
              </div>
            </div>

            {/* Essay 1 */}
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                How does Dickens use the character of Scrooge to present ideas about social
                responsibility?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>
                    &bull; Plan 3&ndash;4 key points: Scrooge&rsquo;s dismissal of the poor (Stave
                    One), Marley&rsquo;s warning, the Cratchit family, Ignorance and Want,
                    Scrooge&rsquo;s reformed actions
                  </li>
                  <li>
                    &bull; Analyse Dickens&rsquo;s methods: contrast between Scrooge and the
                    Cratchits, the allegorical children, the transformation structure
                  </li>
                  <li>
                    &bull; Link to context: the 1834 Poor Law, Malthusian economics, Dickens&rsquo;s
                    personal experience of poverty
                  </li>
                  <li>
                    &bull; Consider Dickens&rsquo;s purpose: the novella as social campaigning,
                    aimed at a middle-class readership
                  </li>
                  <li>
                    &bull; Evaluate: does Dickens suggest that social change comes from individual
                    moral transformation or systemic reform?
                  </li>
                </ul>
              </div>
            </div>

            {/* Passage-based 2 */}
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Passage-Based
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Re-read the passage in Stave Three from &ldquo;There was nothing of high mark in
                this&rdquo; to &ldquo;God bless us, every one!&rdquo; How does Dickens make this
                such a moving and significant moment in the novella?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>
                    &bull; Analyse the contrast between the Cratchits&rsquo; poverty and their
                    emotional richness
                  </li>
                  <li>
                    &bull; Discuss Tiny Tim as a symbol: his disability, innocence, and Christian
                    piety
                  </li>
                  <li>
                    &bull; Note the narrator&rsquo;s tone: warm, admiring, and subtly didactic
                  </li>
                  <li>
                    &bull; Examine how Scrooge&rsquo;s reaction to the scene shows his developing
                    empathy
                  </li>
                  <li>
                    &bull; Connect outward: link to Stave Four (Tiny Tim&rsquo;s death in the
                    unchanged future) and Stave Five (his survival in the reformed timeline)
                  </li>
                </ul>
              </div>
            </div>

            {/* Essay 2 */}
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Explore how Dickens uses the three spirits to bring about Scrooge&rsquo;s
                transformation.
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>
                    &bull; Structure around the three spirits, showing how each contributes a
                    different stage of transformation
                  </li>
                  <li>
                    &bull; Ghost of Christmas Past: self-knowledge through memory (regret, sympathy
                    for his younger self)
                  </li>
                  <li>
                    &bull; Ghost of Christmas Present: social awareness through observation (the
                    Cratchits, Ignorance and Want)
                  </li>
                  <li>
                    &bull; Ghost of Christmas Yet to Come: moral urgency through fear (his own
                    death, Tiny Tim&rsquo;s death)
                  </li>
                  <li>
                    &bull; Analyse Dickens&rsquo;s methods: the escalating supernatural atmosphere,
                    the contrast between the spirits&rsquo; appearances, the use of silence (the
                    third spirit)
                  </li>
                </ul>
              </div>
            </div>

            {/* Exam technique box */}
            <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-5">
              <h3 className="font-semibold text-foreground">
                Cambridge IGCSE Exam Technique: A Christmas Carol
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Passage-based questions:</strong> Stay anchored in the given extract. Work
                  through it closely, analysing specific words and phrases. Then connect outward to
                  the rest of the novella. Do not spend more than a paragraph on material outside
                  the extract.
                </li>
                <li>
                  <strong>Essay questions:</strong> Plan before you write. Choose 3&ndash;4 key
                  moments from across the novella and analyse them in detail. Avoid retelling the
                  plot; instead, focus on how Dickens presents ideas through language, form, and
                  structure.
                </li>
                <li>
                  <strong>Embed quotations:</strong> Weave short quotations into your sentences
                  rather than copying long passages. For example: &lsquo;Dickens describes Scrooge
                  as &ldquo;hard and sharp as flint&rdquo;, using a simile to suggest...&rsquo;
                </li>
                <li>
                  <strong>Use context purposefully:</strong> Do not write a paragraph of context at
                  the start. Instead, integrate contextual knowledge into your analysis:
                  &lsquo;Scrooge&rsquo;s reference to the &ldquo;surplus population&rdquo; echoes
                  Malthusian economics, which Dickens found morally repugnant...&rsquo;
                </li>
                <li>
                  <strong>Address &lsquo;how&rsquo; not just &lsquo;what&rsquo;:</strong> Cambridge
                  questions almost always ask how Dickens presents, creates, or explores something.
                  This means you must discuss methods (imagery, contrast, narrative voice,
                  structure) rather than simply describing what happens.
                </li>
                <li>
                  <strong>Time management:</strong> You have approximately 45 minutes per question.
                  Spend 5 minutes planning, 35 minutes writing, and 5 minutes checking.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Back link & disclaimer ──────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-8" />

        {/* Public-domain notice */}
        <footer className="mt-8 text-center text-xs text-muted-foreground">
          <p>
            All quotations from <em>A Christmas Carol</em> by Charles Dickens (first published 1843)
            are in the public domain.
          </p>
        </footer>
      </div>
    </>
  )
}
