import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/ocr/christmas-carol' },
  title: "A Christmas Carol Study Guide for OCR | The English Hub",
  description:
    "Comprehensive A Christmas Carol study guide for OCR GCSE English Literature. Characters, themes, key quotations, context, and essay planning.",
};

/* ─── Quotation data ─────────────────────────────────────────── */

const keyQuotations = [
  {
    quote: "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!",
    speaker: "Narrator (Stave 1)",
    analysis:
      "Dickens uses a list of aggressive, monosyllabic adjectives to establish Scrooge's miserly nature. The exclamatory 'Oh!' creates an intimate, storytelling tone, as if the narrator is sharing gossip. Each adjective intensifies the previous one, building a picture of relentless greed. The word 'sinner' introduces a moral and religious dimension — Scrooge's avarice is not just a personality flaw but a spiritual failing.",
  },
  {
    quote: "Are there no prisons? Are there no workhouses?",
    speaker: "Scrooge (Stave 1)",
    analysis:
      "Scrooge's rhetorical questions reveal his callous attitude to poverty. He believes the poor are the responsibility of institutions, not individuals. The repetition of 'Are there no' is dismissive and contemptuous. Dickens uses these lines to criticise the Victorian attitude that the Poor Law and workhouses were adequate responses to poverty — institutions that Dickens himself had experienced and despised.",
  },
  {
    quote: "If they would rather die, they had better do it, and decrease the surplus population",
    speaker: "Scrooge (Stave 1)",
    analysis:
      "This shocking statement echoes Thomas Malthus's population theory, which argued that the poor were a drain on resources. The phrase 'surplus population' dehumanises the poor, reducing them to an economic statistic. Dickens deliberately puts Malthusian language in Scrooge's mouth to discredit it. The Ghost of Christmas Present later throws these words back at Scrooge when he reveals Ignorance and Want.",
  },
  {
    quote: "I wear the chain I forged in life. I made it link by link, and yard by yard",
    speaker: "Marley's Ghost (Stave 1)",
    analysis:
      "Marley's chain is a powerful symbol of the consequences of selfishness. The metaphor of forging a chain 'link by link' suggests that sin is cumulative — each selfish act adds to the burden. The repetition creates a sense of relentless accumulation. Marley serves as a warning to Scrooge (and the reader): failure to help others in life leads to punishment after death.",
  },
  {
    quote: "a solitary child, neglected by his friends",
    speaker: "Narrator (Stave 2)",
    analysis:
      "The Ghost of Christmas Past shows Scrooge his lonely childhood. The adjective 'solitary' and the past participle 'neglected' evoke sympathy for the young Scrooge and begin to explain his defensive, isolated adult personality. Dickens suggests that Scrooge's miserliness is partly a response to childhood trauma — a wall built to prevent further emotional pain. This humanises Scrooge and makes his redemption believable.",
  },
  {
    quote: "Another idol has displaced me... a golden one",
    speaker: "Belle (Stave 2)",
    analysis:
      "Belle's metaphor compares money to an idol — a false god that Scrooge worships instead of love. The word 'displaced' suggests that Scrooge has actively replaced human connection with the pursuit of wealth. The 'golden idol' alludes to the Biblical golden calf, associating Scrooge's greed with idolatry and sin. This moment represents the turning point where Scrooge chose money over love.",
  },
  {
    quote: "God bless us, every one!",
    speaker: "Tiny Tim (Stave 3)",
    analysis:
      "Tiny Tim's blessing is inclusive ('every one') and unconditional, contrasting with Scrooge's exclusive, conditional worldview. Despite his poverty and illness, Tim is generous and grateful. The religious language ('God bless') reinforces Dickens's message that true Christianity is about compassion and generosity, not the cold institutional religion of Victorian society. Tim's words become the novella's moral motto.",
  },
  {
    quote: "If these shadows remain unaltered by the Future, the child will die",
    speaker: "The Ghost of Christmas Present (Stave 3)",
    analysis:
      "This conditional statement about Tiny Tim's fate creates urgency and emotional pressure. The word 'shadows' suggests that the future is not fixed — it can be changed. Dickens uses Tiny Tim's potential death to give Scrooge (and the reader) a personal, emotional stake in social reform. The Ghost also throws Scrooge's earlier words about 'surplus population' back at him, forcing him to confront his own cruelty.",
  },
  {
    quote: "This boy is Ignorance. This girl is Want. Beware them both... but most of all beware this boy",
    speaker: "The Ghost of Christmas Present (Stave 3)",
    analysis:
      "The allegorical children represent society's greatest failings. 'Ignorance' and 'Want' are capitalised as abstract nouns, giving them the weight of universal truths. The Ghost's warning to 'most of all beware this boy' suggests that ignorance is more dangerous than poverty — it is ignorance of suffering that allows it to continue. This is Dickens's direct address to his middle-class readers.",
  },
  {
    quote: "I will honour Christmas in my heart, and try to keep it all the year",
    speaker: "Scrooge (Stave 4)",
    analysis:
      "Scrooge's pledge marks his transformation. The verb 'honour' elevates Christmas from a mere holiday to a moral principle. The phrase 'all the year' shows that Scrooge understands the lesson: generosity and compassion must not be seasonal but permanent. The word 'try' adds humility — Scrooge does not claim perfection but commits to effort. This encapsulates Dickens's message that redemption is always possible.",
  },
  {
    quote: "He had been Tim's blood horse all the way from church, and had come home rampant",
    speaker: "Narrator (Stave 3)",
    analysis:
      "Bob Cratchit carrying Tiny Tim on his shoulders reveals the warmth and physical closeness of the Cratchit family, which stands in sharp contrast to Scrooge's isolation. The word 'rampant' suggests joyful energy despite their poverty. Dickens shows that the Cratchits are rich in love and generosity — the qualities Scrooge lacks despite his financial wealth.",
  },
  {
    quote: "Hard and sharp as flint, from which no steel had ever struck out generous fire",
    speaker: "Narrator (Stave 1)",
    analysis:
      "The simile compares Scrooge to flint — cold, hard, and ungenerous. The extended metaphor of fire is significant: fire represents warmth, generosity, and human connection, all of which Scrooge lacks. The word 'generous' personifies the fire, contrasting it with Scrooge's miserliness. The negative construction ('no steel had ever') suggests Scrooge's coldness is absolute and longstanding.",
  },
  {
    quote: "Darkness is cheap, and Scrooge liked it",
    speaker: "Narrator (Stave 1)",
    analysis:
      "This short, blunt sentence reveals Scrooge's priorities. He prefers darkness because it costs nothing. The darkness also symbolises his moral and spiritual state — he is blind to the suffering around him. Dickens uses light and dark imagery throughout the novella: the ghosts bring light (literally and figuratively), while Scrooge inhabits darkness until his transformation.",
  },
  {
    quote: "I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy",
    speaker: "Scrooge (Stave 5)",
    analysis:
      "Scrooge's joyful similes after his transformation contrast dramatically with his earlier characterisation. The tricolon builds in emotional intensity, moving from physical lightness to spiritual joy. The reference to 'angel' replaces his earlier association with sin, while 'schoolboy' recalls his lost childhood innocence. Dickens shows that redemption brings not just moral improvement but genuine happiness.",
  },
  {
    quote: "Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts, sir",
    speaker: "Charity collector (Stave 1)",
    analysis:
      "The charity collector's statistics present the scale of Victorian poverty. The escalation from 'thousands' to 'hundreds of thousands' emphasises the enormity of the problem. The distinction between 'necessaries' and 'comforts' shows that many lack even the basics for survival. Dickens uses this to establish the social context and to highlight Scrooge's cruelty in refusing to help.",
  },
  {
    quote: "Scrooge was better than his word. He did it all, and infinitely more",
    speaker: "Narrator (Stave 5)",
    analysis:
      "The narrator's summary of Scrooge's transformation emphasises that his change is genuine, permanent, and exceeds expectations. The phrase 'infinitely more' suggests boundless generosity — the opposite of his earlier miserliness. Dickens's message is optimistic: people can change completely if they choose to. The narrator directly tells us Scrooge kept his promise, ensuring the reader leaves with hope.",
  },
  {
    quote: "No fog, no mist; clear, bright, jovial, stirring, cold; cold, piping for the blood to dance to",
    speaker: "Narrator (Stave 5)",
    analysis:
      "The weather on Christmas morning mirrors Scrooge's transformation. The negatives ('no fog, no mist') clear away the earlier darkness. The list of positive adjectives creates energy and optimism. The cold is now invigorating rather than threatening — even the physical world has been transformed by Scrooge's moral renewal. Dickens uses pathetic fallacy to reinforce the message of redemption.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRChristmasCarolPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/ocr"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            &larr; OCR English Literature
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A Christmas Carol: Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Everything you need to know about A Christmas Carol for OCR GCSE
            English Literature Paper 2, Section B &mdash; 19th Century Prose.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* OCR Exam Format */}
        <section aria-labelledby="exam-format-heading">
          <h2
            id="exam-format-heading"
            className="text-2xl font-bold text-foreground"
          >
            OCR Exam Format
          </h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
              <p className="font-semibold text-primary">Paper 2: Exploring Effects and Impact</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Section B &mdash; 19th Century and Modern Prose/Drama. You will
                answer one question on A Christmas Carol. The question is an
                essay question <strong>without an extract</strong> &mdash; you
                must write from memory. You have approximately 45 minutes.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <p className="font-semibold text-foreground">Assessment Objectives</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li><strong>Reading and response:</strong> Read, understand and respond to texts. Use textual references, including quotations, to support and illustrate interpretations.</li>
                <li><strong>Language, form and structure:</strong> Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.</li>
                <li><strong>Contextual understanding:</strong> Show understanding of the relationships between texts and the contexts in which they were written.</li>
                <li><strong>Written accuracy:</strong> Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Plot summary */}
        <section aria-labelledby="plot-heading">
          <h2
            id="plot-heading"
            className="text-2xl font-bold text-foreground"
          >
            Plot Summary
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Stave 1: Marley&rsquo;s Ghost</p>
                <p className="mt-2 text-sm">
                  On Christmas Eve, the miserly Ebenezer Scrooge refuses charity,
                  dismisses his nephew Fred&rsquo;s Christmas invitation, and
                  grudgingly allows his clerk Bob Cratchit a day off. That night,
                  he is visited by the ghost of his dead business partner Jacob
                  Marley, who is condemned to wander the earth in heavy chains
                  forged by his own selfishness. Marley warns Scrooge that three
                  spirits will visit him to give him a chance to change.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Stave 2: The Ghost of Christmas Past</p>
                <p className="mt-2 text-sm">
                  The first spirit takes Scrooge back through his memories: his
                  lonely childhood at boarding school, his kind employer
                  Fezziwig&rsquo;s generous Christmas party, and the moment his
                  fianc&eacute;e Belle left him because he had become consumed by
                  greed. Scrooge is deeply affected by seeing his past and begs
                  the spirit to take him home.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Stave 3: The Ghost of Christmas Present</p>
                <p className="mt-2 text-sm">
                  The second spirit shows Scrooge how others celebrate Christmas.
                  He visits the Cratchit family, where he sees the disabled Tiny
                  Tim and learns the boy will die unless things change. He also
                  sees his nephew Fred&rsquo;s party, where guests mock Scrooge
                  but Fred defends him. The spirit reveals two allegorical
                  children &mdash; Ignorance and Want &mdash; hidden beneath
                  his robe as a warning to society.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Stave 4: The Ghost of Christmas Yet to Come</p>
                <p className="mt-2 text-sm">
                  The terrifying final spirit shows Scrooge a future in which he
                  has died alone and unmourned. His possessions are stolen and
                  sold by thieves. The Cratchit family mourn Tiny Tim, who has
                  died. Scrooge sees his own neglected gravestone and begs for a
                  chance to change, pledging to &ldquo;honour Christmas in my
                  heart.&rdquo;
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Stave 5: The End of It</p>
                <p className="mt-2 text-sm">
                  Scrooge wakes on Christmas morning a transformed man. He buys
                  the biggest turkey for the Cratchits, donates generously to
                  charity, joins Fred&rsquo;s party, and raises Bob Cratchit&rsquo;s
                  salary. He becomes a second father to Tiny Tim, who does not die.
                  Scrooge keeps Christmas &ldquo;all the year&rdquo; and becomes
                  a model of generosity and compassion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Characters */}
        <section aria-labelledby="characters-heading">
          <h2
            id="characters-heading"
            className="text-2xl font-bold text-foreground"
          >
            Character Analysis
          </h2>

          <div className="mt-6 space-y-6">
            {/* Scrooge */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Ebenezer Scrooge</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Scrooge is Dickens&rsquo;s most famous creation &mdash; a miser
                whose name has become synonymous with greed. At the start of the
                novella, he is cold, isolated, and contemptuous of the poor. He
                refuses charity, dismisses Christmas as &ldquo;humbug,&rdquo; and
                treats his clerk Bob Cratchit with disdain.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                However, Dickens is careful to show that Scrooge was not always
                this way. His lonely childhood and the loss of Belle reveal that
                his miserliness is a defence mechanism &mdash; a response to
                emotional pain. This makes his eventual transformation believable
                and deeply moving. By the end of the novella, Scrooge embodies
                the generosity and compassion that Dickens believed were the
                essence of true Christianity. His transformation is Dickens&rsquo;s
                argument that anyone can change.
              </p>
              <div className="mt-4 rounded border border-accent/20 bg-primary/10 p-3">
                <p className="text-sm font-medium text-primary">Key character arc</p>
                <p className="mt-1 text-sm text-primary">
                  Cold and miserly &rarr; Confronted by Marley &rarr; Emotionally
                  stirred by the past &rarr; Moved by the Cratchits &rarr;
                  Terrified by his future &rarr; Joyful transformation
                </p>
              </div>
            </div>

            {/* Bob Cratchit */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Bob Cratchit</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Bob Cratchit represents the honest, hardworking poor who are
                exploited by the wealthy. Despite earning a pitiful wage from
                Scrooge, he remains cheerful, devoted to his family, and generous
                in spirit. He even toasts Scrooge at Christmas dinner, showing
                remarkable forgiveness.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Dickens uses Bob to show that poverty does not destroy goodness.
                The Cratchit family&rsquo;s warmth and love stand in deliberate
                contrast to Scrooge&rsquo;s wealth and loneliness. Bob is also a
                figure of pathos &mdash; his devotion to Tiny Tim and his
                inability to afford medical care make the case for social reform
                deeply personal and emotional.
              </p>
            </div>

            {/* Tiny Tim */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Tiny Tim</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Tiny Tim is the emotional heart of the novella. His disability,
                his cheerful resilience, and his potential death create powerful
                emotional pressure on both Scrooge and the reader. He represents
                the innocent victims of social inequality &mdash; children who
                suffer because of their parents&rsquo; poverty.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                His catchphrase &ldquo;God bless us, every one!&rdquo; embodies
                the inclusive, generous spirit that Dickens advocates. His
                potential death is the most powerful tool in Dickens&rsquo;s
                armoury &mdash; by making the consequences of inequality
                personal, he forces his audience to care.
              </p>
            </div>

            {/* Jacob Marley */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Jacob Marley</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Marley is Scrooge&rsquo;s dead business partner who returns as a
                ghost, dragging the chains he &ldquo;forged in life&rdquo;
                through selfishness. He is a warning of what awaits Scrooge if he
                does not change. His chains symbolise the burden of guilt and the
                consequences of failing to help others.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Marley&rsquo;s regret is genuine and agonising. His lament that
                &ldquo;mankind was my business&rdquo; shows he has learned too
                late what truly matters. Dickens uses Marley to establish the
                novella&rsquo;s supernatural framework and its moral stakes:
                selfishness leads to eternal punishment.
              </p>
            </div>

            {/* The Ghosts */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">The Three Ghosts</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The Ghost of Christmas Past is a flickering, ethereal figure who
                shows Scrooge the emotional roots of his miserliness. The Ghost
                of Christmas Present is a generous, jolly giant surrounded by
                abundance &mdash; he embodies the spirit of Christmas generosity
                but also reveals the suffering hidden beneath society&rsquo;s
                surface (Ignorance and Want). The Ghost of Christmas Yet to Come
                is the most terrifying: a silent, shrouded figure who shows
                Scrooge his death and Tiny Tim&rsquo;s.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Together, the three ghosts represent a journey of moral education.
                The past provides understanding, the present provides awareness,
                and the future provides motivation to change. Dickens structures
                the novella around this progression to make Scrooge&rsquo;s
                transformation feel earned and convincing.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Themes */}
        <section aria-labelledby="themes-heading">
          <h2
            id="themes-heading"
            className="text-2xl font-bold text-foreground"
          >
            Key Themes
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Social Responsibility and Poverty
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Dickens wrote A Christmas Carol to draw attention to the plight of
                the poor in Victorian England. The novella argues that the wealthy
                have a moral obligation to help those less fortunate. Scrooge&rsquo;s
                transformation from miser to philanthropist embodies the change
                Dickens wanted to see in society. The Cratchit family put a human
                face on poverty statistics, making the case for reform emotional
                rather than purely intellectual.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Redemption and Transformation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The novella&rsquo;s central message is that people can change.
                Scrooge&rsquo;s redemption arc &mdash; from cold miser to joyful
                philanthropist &mdash; is the story&rsquo;s emotional core.
                Dickens presents redemption as a process: understanding the past,
                seeing the present clearly, and taking responsibility for the
                future. The Christian framework of sin, repentance, and salvation
                reinforces the idea that no one is beyond redemption.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Christmas and Generosity
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Christmas functions as a symbol of everything Scrooge lacks:
                warmth, generosity, family, and community. Dickens uses the
                Cratchits&rsquo; modest but loving celebration and Fred&rsquo;s
                inclusive party to show that the true spirit of Christmas is about
                human connection, not wealth. Scrooge&rsquo;s pledge to &ldquo;honour
                Christmas in my heart, and try to keep it all the year&rdquo;
                extends the meaning of Christmas beyond a single day to a way
                of living.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Isolation vs Community
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Scrooge&rsquo;s misery is inseparable from his isolation. He
                lives alone, eats alone, and has no meaningful relationships.
                The Cratchits, by contrast, are poor but rich in love and
                community. Fred&rsquo;s Christmas party is another image of
                joyful togetherness. Dickens argues that human connection is
                essential to happiness and that wealth without community is
                meaningless. Scrooge&rsquo;s redemption is marked by his
                re-entry into society.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Greed and Money
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Dickens presents the love of money as spiritually and emotionally
                destructive. Scrooge&rsquo;s wealth has made him cold, isolated,
                and morally blind. Belle&rsquo;s metaphor of the &ldquo;golden
                idol&rdquo; suggests that money has become Scrooge&rsquo;s false
                religion. The contrast between Scrooge&rsquo;s material wealth
                and the Cratchits&rsquo; emotional richness makes Dickens&rsquo;s
                point: money cannot buy what matters most.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Family
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Family is presented as a source of joy, resilience, and moral
                strength. The Cratchits&rsquo; love for each other sustains them
                through poverty. Fred&rsquo;s persistent affection for Scrooge
                offers redemption through family connection. Scrooge&rsquo;s
                lonely childhood and lost relationship with Belle show the
                emotional damage caused by the absence of family bonds. His
                transformation culminates in becoming &ldquo;a second father&rdquo;
                to Tiny Tim.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                The Supernatural
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The supernatural elements serve a moral purpose. Marley&rsquo;s
                ghost, the three spirits, and the time-travelling structure allow
                Dickens to show Scrooge (and the reader) the consequences of
                selfishness in a compressed, dramatic way. The supernatural also
                connects to the Christian context of Christmas &mdash; the
                possibility of miracles, forgiveness, and spiritual
                transformation.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Key quotations */}
        <section aria-labelledby="quotations-heading">
          <h2
            id="quotations-heading"
            className="text-2xl font-bold text-foreground"
          >
            Key Quotations with Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            Learn these quotations for the closed-book exam. Each one can be
            applied to multiple themes and characters.
          </p>

          <div className="mt-6 space-y-6">
            {keyQuotations.map((q) => (
              <div
                key={q.quote}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <blockquote className="border-l-4 border-accent pl-4 text-lg font-medium italic text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <p className="mt-2 text-sm font-medium text-primary">
                  {q.speaker}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {q.analysis}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Context */}
        <section aria-labelledby="context-heading">
          <h2
            id="context-heading"
            className="text-2xl font-bold text-foreground"
          >
            Historical and Social Context
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Understanding context is essential. Here are the key
              contextual areas to know for A Christmas Carol:
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Victorian Poverty</h3>
                <p className="mt-2 text-sm">
                  In 1843 when Dickens wrote the novella, poverty in Britain was
                  extreme. The Industrial Revolution had created vast wealth for
                  factory owners but left workers in appalling conditions. Child
                  labour was common, workhouses were brutal, and there was no
                  welfare state. Dickens had personal experience of poverty
                  &mdash; as a child, he worked in a blacking factory when his
                  father was imprisoned for debt.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">The Poor Law Amendment Act (1834)</h3>
                <p className="mt-2 text-sm">
                  This act established workhouses where the poor were forced to
                  live in terrible conditions as the &ldquo;price&rdquo; of
                  receiving help. Conditions were deliberately harsh to
                  discourage people from seeking aid. Scrooge&rsquo;s reference
                  to &ldquo;prisons&rdquo; and &ldquo;workhouses&rdquo; reflects
                  the prevailing attitude that poverty was the fault of the poor
                  and that harsh institutions were sufficient response.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Thomas Malthus and &ldquo;Surplus Population&rdquo;</h3>
                <p className="mt-2 text-sm">
                  Thomas Malthus argued that population growth would outstrip
                  food supply and that helping the poor only encouraged them to
                  have more children. Scrooge&rsquo;s phrase &ldquo;decrease the
                  surplus population&rdquo; directly echoes Malthusian ideas.
                  Dickens passionately opposed this philosophy, and the Ghost of
                  Christmas Present&rsquo;s rebuke forces Scrooge (and the
                  reader) to see its cruelty.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Christianity and Christmas</h3>
                <p className="mt-2 text-sm">
                  Dickens saw true Christianity as being about compassion,
                  generosity, and love for one&rsquo;s neighbour &mdash; not
                  rigid church attendance or moral judgement. The novella uses
                  Christmas as a symbol of Christian charity. Scrooge&rsquo;s
                  redemption is a spiritual awakening as well as a moral one. The
                  novella was so influential that it is credited with shaping
                  modern Christmas traditions and values.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Dickens as Social Reformer</h3>
                <p className="mt-2 text-sm">
                  Dickens used his writing as a tool for social change. He
                  visited a &ldquo;Ragged School&rdquo; (free school for
                  destitute children) in 1843, shortly before writing A Christmas
                  Carol. The experience deeply affected him. He chose the novella
                  form deliberately &mdash; it was short, affordable, and
                  accessible to a wide audience. He wanted to reach hearts, not
                  just minds: &ldquo;I have a great faith in the poor,&rdquo; he
                  wrote.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">The Novella Form</h3>
                <p className="mt-2 text-sm">
                  Dickens chose to write a novella rather than a full novel
                  because he wanted maximum impact in minimum time. The five-stave
                  structure mirrors a musical composition (a &ldquo;carol&rdquo;),
                  giving the narrative a sense of harmony and resolution. The
                  compressed time frame &mdash; a single night &mdash; creates
                  urgency and dramatic intensity. The allegorical, parable-like
                  quality makes the moral message clear and memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Essay planning */}
        <section aria-labelledby="essay-heading">
          <h2
            id="essay-heading"
            className="text-2xl font-bold text-foreground"
          >
            Essay Planning for OCR
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The OCR A Christmas Carol question does <strong>not</strong> give
              you an extract. You must write entirely from memory. Here is a
              recommended structure:
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Introduction (3&ndash;4 sentences)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Address the question directly. State Dickens&rsquo;s overall
                  purpose and how the theme/character relates to his message
                  about social responsibility. Briefly reference the Victorian
                  context.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Paragraph 1: Beginning of the novella (Stave 1)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  How is the theme/character established? Use a memorised
                  quotation and analyse language closely. Link to Victorian
                  attitudes and context.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Paragraph 2: Middle of the novella (Staves 2&ndash;3)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  How does the theme/character develop through the ghostly
                  visitations? Consider the structural significance of the
                  stave in which key moments occur.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Paragraph 3: Climax (Stave 4)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  How does the Ghost of Christmas Yet to Come bring the theme to
                  a climax? Consider the emotional impact and the turning point
                  of Scrooge&rsquo;s transformation.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Paragraph 4: Resolution (Stave 5)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  How is the theme resolved? Consider Scrooge&rsquo;s
                  transformation and what Dickens wants his reader to learn.
                  Link to Dickens&rsquo;s purpose as a social reformer.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Conclusion</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Final evaluative judgement. What is Dickens&rsquo;s overall
                  message? Why did the novella have such a powerful impact on
                  Victorian society? Consider its relevance today.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-accent/20 bg-primary/10 p-5">
              <h3 className="font-semibold text-primary">OCR Exam Technique Tips</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>&bull; <strong>No extract:</strong> You must memorise quotations. Aim to use 4&ndash;6 short quotations in your essay.</li>
                <li>&bull; <strong>Reading and response:</strong> Make clear, sustained arguments that directly answer the question. Track change across the novella.</li>
                <li>&bull; <strong>Language, form and structure:</strong> Analyse specific words, imagery, narrative voice, and structural techniques. Discuss Dickens&rsquo;s use of the novella form, the five-stave structure, allegory, and the omniscient narrator.</li>
                <li>&bull; <strong>Contextual understanding:</strong> Integrate context naturally. Link to Victorian poverty, the Poor Law, Malthus, and Dickens&rsquo;s own experiences. Do not write separate context paragraphs.</li>
                <li>&bull; <strong>Written accuracy:</strong> Write clearly and accurately. Use a formal academic register with precise vocabulary.</li>
                <li>&bull; <strong>Time management:</strong> Spend approximately 45 minutes. Plan for 5 minutes before writing.</li>
              </ul>
            </div>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />

        {/* Public-domain notice */}
        <footer className="mt-8 text-center text-xs text-muted-foreground">
          <p>
            All quotations from <em>A Christmas Carol</em> by Charles Dickens
            (first published 1843) are in the public domain.
          </p>
        </footer>
      </div>

    </>
  );
}
