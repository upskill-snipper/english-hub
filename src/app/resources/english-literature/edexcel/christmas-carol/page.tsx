import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "A Christmas Carol Study Guide — Edexcel GCSE English Literature",
  description:
    "Complete A Christmas Carol revision guide for Edexcel GCSE English Literature. Plot, characters, themes, 20+ key quotes, Victorian context, and Edexcel exam technique.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const PLOT_SUMMARY = [
  {
    stave: "Stave 1",
    title: "Marley's Ghost",
    summary:
      "We are introduced to Ebenezer Scrooge — a cold, miserly old man who despises Christmas. He rejects his nephew Fred's dinner invitation and refuses to donate to charity for the poor, asking 'Are there no prisons? Are there no workhouses?' That night, the ghost of his dead business partner Jacob Marley visits, dragging heavy chains forged by his own selfishness. Marley warns Scrooge that he will be visited by three spirits.",
  },
  {
    stave: "Stave 2",
    title: "The Ghost of Christmas Past",
    summary:
      "The first spirit takes Scrooge back to scenes from his past: his lonely childhood at boarding school, his happy apprenticeship under the generous Fezziwig, and the loss of his fiancee Belle, who left him because he loved money more than her. Scrooge is moved to tears by these memories, showing that emotion still exists beneath his hard exterior.",
  },
  {
    stave: "Stave 3",
    title: "The Ghost of Christmas Present",
    summary:
      "The second spirit shows Scrooge how others celebrate Christmas despite poverty. He sees the Cratchit family's modest but joyful dinner and learns that Tiny Tim will die without better care. He sees his nephew Fred's warm Christmas gathering. The spirit reveals two starving children hidden beneath his robes — Ignorance and Want — warning Scrooge (and the reader) of their danger to society.",
  },
  {
    stave: "Stave 4",
    title: "The Ghost of Christmas Yet to Come",
    summary:
      "A dark, silent phantom shows Scrooge a possible future: businessmen joke about a dead man's funeral, thieves steal his belongings, and his death is unmourned. The Cratchit family grieve Tiny Tim's death. Finally, Scrooge sees his own neglected gravestone. Terrified, he begs the spirit for a chance to change.",
  },
  {
    stave: "Stave 5",
    title: "The End of It",
    summary:
      "Scrooge wakes on Christmas morning a transformed man. He buys the largest turkey for the Cratchits, donates generously to charity, joins Fred's dinner, and raises Bob Cratchit's salary. Dickens tells us Scrooge becomes 'as good a friend, as good a master, and as good a man, as the good old city knew.' Tiny Tim does not die. Scrooge's redemption is complete.",
  },
];

const CHARACTERS = [
  {
    name: "Ebenezer Scrooge",
    description:
      "The protagonist. Initially a cold, miserly, isolated man who values money above all else. Through the three spirits' visits, he undergoes a complete moral transformation — from selfishness to generosity, isolation to community. He is Dickens' vehicle for showing that even the hardest heart can change. His redemption arc drives the novella's message: it is never too late to become a better person.",
    key_quotes: [
      '"Are there no prisons? And the Union workhouses?"',
      '"Every idiot who goes about with \'Merry Christmas\' on his lips, should be boiled with his own pudding"',
      '"I will honour Christmas in my heart, and try to keep it all the year"',
      '"He became as good a friend, as good a master, and as good a man, as the good old city knew"',
      '"I am not the man I was"',
      '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"',
    ],
  },
  {
    name: "Bob Cratchit",
    description:
      "Scrooge's underpaid, overworked clerk. Despite earning only 15 shillings a week, he is warm, loving, and devoted to his family. He represents the honest, hard-working poor who are exploited by employers like Scrooge. His loyalty and good humour in the face of hardship make him a sympathetic figure and a moral contrast to Scrooge.",
    key_quotes: [
      '"Mr Scrooge, the Founder of the Feast!" (toasting Scrooge at Christmas dinner)',
      '"He told me, coming home, that he hoped the people saw him in the church, because he was a cripple"',
    ],
  },
  {
    name: "Tiny Tim",
    description:
      "Bob's youngest son, disabled and fragile. He is pure-hearted, religious, and uncomplaining despite his suffering. His potential death serves as a moral catalyst for Scrooge's transformation. He symbolises the innocent victims of Victorian poverty — children who suffer because society fails to care for them. His famous line, 'God bless Us, Every One!' encapsulates the novella's message of universal compassion.",
    key_quotes: [
      '"God bless Us, Every One!"',
    ],
  },
  {
    name: "Jacob Marley",
    description:
      "Scrooge's deceased business partner who appears as a ghost dragging heavy chains. His chains represent the burden of selfishness — he is condemned to wander the earth because he never helped others in life. He serves as a warning to Scrooge: change now or share his fate. His regret ('Mankind was my business!') is one of Dickens' most powerful moral statements.",
    key_quotes: [
      '"I wear the chain I forged in life... I made it link by link, and yard by yard"',
      '"Mankind was my business. The common welfare was my business"',
      '"I am here to-night to warn you, that you have yet a chance and hope of escaping my fate"',
    ],
  },
  {
    name: "Fred (Scrooge's Nephew)",
    description:
      "Scrooge's cheerful, warm-hearted nephew. He persistently invites Scrooge to Christmas dinner despite repeated rejection. He believes Christmas is 'a kind, forgiving, charitable, pleasant time' and represents the Christmas spirit of goodwill. He is a foil to Scrooge — proof that happiness comes from love and generosity, not wealth.",
    key_quotes: [
      '"I have always thought of Christmas time... as a good time; a kind, forgiving, charitable, pleasant time"',
      '"His wealth is of no use to him. He don\'t do any good with it"',
    ],
  },
  {
    name: "Fezziwig",
    description:
      "Scrooge's former employer, shown by the Ghost of Christmas Past. He is generous, jovial, and kind to his employees — the opposite of what Scrooge has become. He represents the ideal employer and shows that money can be used for good. The contrast between Fezziwig and Scrooge-as-employer shames Scrooge into recognising how badly he treats Bob Cratchit.",
    key_quotes: [
      '"He has the power to render us happy or unhappy... The happiness he gives, is quite as great as if it cost a fortune"',
    ],
  },
  {
    name: "The Three Spirits",
    description:
      "The Ghost of Christmas Past (a strange, flickering figure representing memory), the Ghost of Christmas Present (a jolly giant in a green robe representing abundance and compassion), and the Ghost of Christmas Yet to Come (a dark, silent phantom representing death and consequence). Together they serve as Dickens' moral teachers, guiding Scrooge — and the reader — toward redemption.",
    key_quotes: [
      '"These are the shadows of the things that have been" (Past)',
      '"They are Man\'s... This boy is Ignorance. This girl is Want" (Present)',
    ],
  },
];

const THEMES = [
  {
    theme: "Redemption and Transformation",
    description:
      "The novella's central theme. Scrooge transforms from a miserly misanthrope into a generous, loving man. Dickens argues that change is always possible — people are not fixed in their ways. The Christian framework (forgiveness, salvation) underpins this message. Scrooge's redemption suggests that society itself can be reformed if individuals choose to change.",
    quotes: [
      '"I will honour Christmas in my heart, and try to keep it all the year"',
      '"I am not the man I was"',
      '"He became as good a friend, as good a master, and as good a man, as the good old city knew"',
    ],
  },
  {
    theme: "Social Injustice and Poverty",
    description:
      "Dickens wrote A Christmas Carol to draw attention to the suffering of the Victorian poor, especially children. The Cratchit family, Ignorance and Want, and the charity collectors all highlight the vast inequality between rich and poor. Scrooge's early attitude ('Are there no prisons?') reflects the callousness of the wealthy classes. Dickens challenges the Malthusian view that the poor are disposable.",
    quotes: [
      '"Are there no prisons? And the Union workhouses?"',
      '"If they would rather die, they had better do it, and decrease the surplus population"',
      '"This boy is Ignorance. This girl is Want. Beware them both"',
      '"Mankind was my business"',
    ],
  },
  {
    theme: "Christmas Spirit and Generosity",
    description:
      "Christmas represents more than a holiday — it symbolises compassion, family, forgiveness, and community. Fred defends Christmas as 'a good time; a kind, forgiving, charitable, pleasant time.' The Cratchits celebrate joyfully despite having very little. Dickens uses Christmas as a lens through which to examine moral values and social responsibility.",
    quotes: [
      '"A Merry Christmas, uncle! God save you!"',
      '"I have always thought of Christmas time... as a good time"',
      '"God bless Us, Every One!"',
    ],
  },
  {
    theme: "Isolation vs Community",
    description:
      "Scrooge begins isolated — he lives alone, works alone, and rejects human connection. His isolation is both physical (his cold, dark chambers) and emotional (he refuses love and friendship). Through the spirits' visions, he sees that happiness comes from human connection — the Cratchits' warmth, Fred's parties, Fezziwig's generosity. His transformation is marked by re-entering community.",
    quotes: [
      '"Solitary as an oyster"',
      '"secret, and self-contained, and solitary as an oyster"',
      '"His wealth is of no use to him. He don\'t do any good with it"',
    ],
  },
  {
    theme: "Greed and the Misuse of Wealth",
    description:
      "Scrooge hoards wealth while others starve. Dickens argues that wealth carries responsibility — the rich have a moral duty to help the poor. Fezziwig uses his wealth to bring happiness; Scrooge uses his to increase his own comfort. Marley's chains represent the spiritual cost of greed. The novella insists that money is only valuable when it serves others.",
    quotes: [
      '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"',
      '"I wear the chain I forged in life"',
      '"He has the power to render us happy or unhappy"',
    ],
  },
  {
    theme: "Family",
    description:
      "Family represents love, warmth, and moral goodness. The Cratchit family, despite poverty, are rich in love. Fred values family over money, persistently inviting Scrooge to dinner. Scrooge's lonely childhood shows how lack of family love can damage a person. His redemption involves returning to the family he had rejected.",
    quotes: [
      '"God bless Us, Every One!"',
      '"A Merry Christmas, uncle! God save you!"',
      '"He told me, coming home, that he hoped the people saw him in the church"',
    ],
  },
];

const KEY_QUOTES = [
  { quote: '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"', speaker: "Narrator (Stave 1)", significance: "Introduces Scrooge's miserly character. 'Tight-fisted' and 'grindstone' suggest relentless, mechanical greed." },
  { quote: '"Solitary as an oyster"', speaker: "Narrator (Stave 1)", significance: "Simile establishing Scrooge's isolation. An oyster is hard-shelled and closed — but contains a pearl, hinting at hidden goodness." },
  { quote: '"Are there no prisons? And the Union workhouses?"', speaker: "Scrooge (Stave 1)", significance: "Scrooge echoes the Malthusian view that the poor should be institutionalised. Dickens exposes this as cruel and inhumane." },
  { quote: '"If they would rather die, they had better do it, and decrease the surplus population"', speaker: "Scrooge (Stave 1)", significance: "Scrooge parrots Malthus's theory that overpopulation causes poverty. These words are later used against him by the Ghost of Christmas Present." },
  { quote: '"Every idiot who goes about with \'Merry Christmas\' on his lips, should be boiled with his own pudding"', speaker: "Scrooge (Stave 1)", significance: "Comic hyperbole showing Scrooge's hostility to joy and generosity. Darkly humorous but also shocking." },
  { quote: '"I wear the chain I forged in life... I made it link by link, and yard by yard"', speaker: "Marley (Stave 1)", significance: "The chain is a metaphor for the consequences of selfishness. Each act of greed added another link. Scrooge's chain is even longer." },
  { quote: '"Mankind was my business. The common welfare was my business"', speaker: "Marley (Stave 1)", significance: "Marley's central regret — he should have cared for others, not just made money. Dickens' moral message in a single line." },
  { quote: '"A solitary child, neglected by his friends"', speaker: "Narrator (Stave 2)", significance: "Young Scrooge at boarding school. His isolation explains (but does not excuse) his adult coldness. Dickens shows how cruelty begets cruelty." },
  { quote: '"He has the power to render us happy or unhappy... The happiness he gives, is quite as great as if it cost a fortune"', speaker: "Scrooge about Fezziwig (Stave 2)", significance: "Scrooge recognises that a good employer creates happiness. This moment makes him reflect on how he treats Bob Cratchit." },
  { quote: '"Another idol has displaced me... a golden one"', speaker: "Belle (Stave 2)", significance: "Belle leaves Scrooge because money ('a golden idol') has replaced love. Biblical allusion to idolatry — Scrooge worships wealth instead of God." },
  { quote: '"I have always thought of Christmas time... as a good time; a kind, forgiving, charitable, pleasant time"', speaker: "Fred (Stave 1)", significance: "Fred embodies the Christmas spirit. The listing of positive adjectives contrasts with Scrooge's negativity." },
  { quote: '"God bless Us, Every One!"', speaker: "Tiny Tim (Stave 3)", significance: "The novella's most famous line. 'Every One' includes even Scrooge — Tim's generosity of spirit shames the reader into compassion." },
  { quote: '"If these shadows remain unaltered by the Future, the child will die"', speaker: "Ghost of Christmas Present (Stave 3)", significance: "Tiny Tim's death is preventable — but only if society (represented by Scrooge) acts. Dickens makes the reader complicit." },
  { quote: '"This boy is Ignorance. This girl is Want. Beware them both"', speaker: "Ghost of Christmas Present (Stave 3)", significance: "Allegorical children representing society's failures. Ignorance is especially dangerous — it leads to injustice. Dickens' warning to Victorian society." },
  { quote: '"Decrease the surplus population"', speaker: "Ghost of Christmas Present quoting Scrooge (Stave 3)", significance: "Scrooge's own words thrown back at him. The spirit forces him to confront the human cost of his philosophy." },
  { quote: '"I am not the man I was"', speaker: "Scrooge (Stave 4)", significance: "Scrooge's declaration of change. He acknowledges his past self and commits to transformation." },
  { quote: '"I will honour Christmas in my heart, and try to keep it all the year"', speaker: "Scrooge (Stave 4)", significance: "Christmas becomes a permanent moral attitude, not just a seasonal event. 'Honour' and 'heart' suggest deep, genuine commitment." },
  { quote: '"He became as good a friend, as good a master, and as good a man, as the good old city knew"', speaker: "Narrator (Stave 5)", significance: "Triple structure emphasises the completeness of Scrooge's transformation. 'Friend,' 'master,' 'man' — personal, professional, and moral redemption." },
  { quote: '"He knew how to keep Christmas well, if any man alive possessed the knowledge"', speaker: "Narrator (Stave 5)", significance: "'Keep Christmas' means living by its values permanently. Scrooge has learned the lesson Dickens wants society to learn." },
  { quote: '"His wealth is of no use to him. He don\'t do any good with it"', speaker: "Fred (Stave 1)", significance: "Fred identifies Scrooge's fundamental problem — wealth hoarded is wealth wasted. Money has value only when it helps others." },
  { quote: '"hard and sharp as flint, from which no steel had ever struck out generous fire"', speaker: "Narrator (Stave 1)", significance: "Extended simile. Flint is cold and unyielding, but it can produce fire (warmth) — foreshadowing Scrooge's capacity for change." },
];

const CONTEXT_POINTS = [
  {
    topic: "Victorian Poverty and Inequality",
    detail:
      "In 1843, the gap between rich and poor in Britain was enormous. Industrialisation had created vast wealth for factory owners while workers — including children — laboured in horrific conditions for subsistence wages. Dickens, who experienced poverty as a child (working in a blacking factory aged 12), was deeply moved by the plight of the poor.",
  },
  {
    topic: "The Poor Law of 1834",
    detail:
      "The New Poor Law established workhouses for the destitute. Conditions were deliberately harsh to discourage people from seeking help — families were separated, food was minimal, and inmates performed backbreaking work. When Scrooge says 'Are there no prisons? And the Union workhouses?' he is endorsing this cruel system.",
  },
  {
    topic: "Thomas Malthus and 'Surplus Population'",
    detail:
      "The economist Thomas Malthus argued that population growth among the poor would lead to famine and that poverty was a natural check on overpopulation. Scrooge's phrase 'decrease the surplus population' directly echoes Malthusian thinking. Dickens uses the novella to reject this heartless philosophy.",
  },
  {
    topic: "Child Labour",
    detail:
      "Children as young as five worked in mines, factories, and as chimney sweeps. Dickens was a fierce campaigner against child labour. Tiny Tim and the allegorical figures of Ignorance and Want represent children failed by society. Dickens had visited a 'Ragged School' shortly before writing the novella and was horrified by what he saw.",
  },
  {
    topic: "Christianity and Redemption",
    detail:
      "Victorian society was deeply Christian. Dickens uses Christian values — charity, forgiveness, love — to frame Scrooge's redemption. Marley's chains are a spiritual punishment. The three spirits echo the Holy Trinity. The story is fundamentally about salvation — Scrooge is 'saved' by choosing compassion over greed.",
  },
  {
    topic: "Dickens' Purpose",
    detail:
      "Dickens wrote A Christmas Carol partly to campaign for social reform and partly because he needed money. He wanted to reach a wide audience (the novella was priced cheaply) and provoke emotional responses that would inspire charitable action. It worked — the book was hugely popular and is credited with helping to revive Christmas traditions in Britain.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function ChristmasCarolPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/edexcel"
            className="text-sm text-white/70 hover:text-white"
          >
            &larr; Edexcel English Literature
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A Christmas Carol — Full Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Edexcel GCSE English Literature &middot; Paper 2, Section A
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Quick nav ─────────────────────────────────────────── */}
        <nav className="rounded-xl bg-gray-50 p-6">
          <h2 className="text-lg font-bold text-gray-900">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["#plot", "Plot Summary"],
              ["#characters", "Character Analysis"],
              ["#themes", "Key Themes"],
              ["#quotes", "Key Quotes (20+)"],
              ["#context", "Historical Context"],
              ["#exam", "Edexcel Exam Technique"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-[#2E86C1] hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Plot summary ──────────────────────────────────────── */}
        <section id="plot" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900">Plot Summary</h2>
          <p className="mt-2 text-gray-600">
            A Christmas Carol is structured as five &quot;staves&quot; (a
            musical term meaning sections of a song — appropriate for a
            &quot;carol&quot;). This structure reinforces the idea that the
            novella is meant to be shared and enjoyed, like a Christmas song.
          </p>
          <div className="mt-6 space-y-6">
            {PLOT_SUMMARY.map((s) => (
              <div
                key={s.stave}
                className="rounded-xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#1A5276] px-3 py-1 text-xs font-bold text-white">
                    {s.stave}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  {s.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Characters ────────────────────────────────────────── */}
        <section id="characters" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900">Character Analysis</h2>
          <div className="mt-6 space-y-6">
            {CHARACTERS.map((char) => (
              <div
                key={char.name}
                className="rounded-xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#1A5276]">
                  {char.name}
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  {char.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-[#2E86C1]">
                    Key Quotes
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {char.key_quotes.map((q) => (
                      <li key={q} className="text-sm italic text-gray-600">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Themes ────────────────────────────────────────────── */}
        <section id="themes" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900">Key Themes</h2>
          <div className="mt-6 space-y-6">
            {THEMES.map((t) => (
              <div
                key={t.theme}
                className="rounded-xl border-l-4 border-[#1A5276] bg-gray-50 p-6"
              >
                <h3 className="text-lg font-bold text-[#1A5276]">
                  {t.theme}
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {t.description}
                </p>
                <div className="mt-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-[#2E86C1]">
                    Supporting Quotes
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {t.quotes.map((q) => (
                      <li key={q} className="text-sm italic text-gray-600">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key quotes ────────────────────────────────────────── */}
        <section id="quotes" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900">Key Quotes (20+)</h2>
          <p className="mt-2 text-gray-600">
            The Edexcel exam is closed-book. Learn these quotes and practise
            using them in timed paragraphs.
          </p>
          <div className="mt-6 space-y-4">
            {KEY_QUOTES.map((q, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold italic text-[#1A5276]">
                  {q.quote}
                </p>
                <p className="mt-1 text-xs font-medium text-[#2E86C1]">
                  — {q.speaker}
                </p>
                <p className="mt-2 text-sm text-gray-700">{q.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Context ───────────────────────────────────────────── */}
        <section id="context" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900">Historical Context</h2>
          <div className="mt-6 space-y-4">
            {CONTEXT_POINTS.map((c) => (
              <div
                key={c.topic}
                className="rounded-xl border border-gray-200 p-5 shadow-sm"
              >
                <h3 className="font-bold text-[#1A5276]">{c.topic}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Exam technique ────────────────────────────────────── */}
        <section id="exam" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900">
            Edexcel Exam Technique for A Christmas Carol
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-[#1A5276]">
                What Does an Edexcel Question Look Like?
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                You will typically have a choice of two essay questions. There
                is no extract — you must recall your own evidence.
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border-2 border-dashed border-[#2E86C1] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2E86C1]">
                    Example Question 1
                  </p>
                  <p className="mt-2 text-sm text-gray-900 font-medium">
                    Explore how Dickens presents the theme of redemption in
                    <em> A Christmas Carol</em>.
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    You must consider the context of the novella in your answer.
                    (40 marks, including 4 marks for SPaG)
                  </p>
                </div>
                <div className="rounded-lg border-2 border-dashed border-[#2E86C1] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2E86C1]">
                    Example Question 2
                  </p>
                  <p className="mt-2 text-sm text-gray-900 font-medium">
                    How does Dickens use the character of Scrooge to present
                    ideas about social responsibility?
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-[#1A5276]">
                How to Structure Your Answer
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">1</span>
                  <span>
                    <strong>Introduction</strong> — state Dickens&apos; purpose and how the theme/character connects to his social message. Reference the Victorian context.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">2</span>
                  <span>
                    <strong>4-5 analytical paragraphs</strong> covering different staves. Track how the theme/character develops across the novella.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">3</span>
                  <span>
                    <strong>Analyse Dickens&apos; methods</strong> — language (imagery, simile, listing, hyperbole), structure (the five-stave form, the transformation arc), and narrative voice (the intrusive narrator who addresses the reader directly).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">4</span>
                  <span>
                    <strong>Integrate context</strong> — link to Victorian poverty, the Poor Law, Malthus, child labour, and Dickens&apos; own experiences. Make context serve your argument.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">5</span>
                  <span>
                    <strong>Conclude</strong> — summarise Dickens&apos; overall message and what he wanted his Victorian readers to do differently.
                  </span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl border-2 border-[#2E86C1] bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-[#1A5276]">
                Top Tips for Top Marks
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2E86C1]" />
                  Use &quot;Dickens presents/suggests/conveys/uses...&quot; to show awareness of the writer&apos;s craft (AO2).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2E86C1]" />
                  Discuss the novella&apos;s form — why did Dickens choose the novella format? (Accessible, affordable, designed to reach a wide audience and inspire change.)
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2E86C1]" />
                  Analyse the narrative voice — Dickens&apos; narrator is intrusive and opinionated, guiding the reader&apos;s moral responses.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2E86C1]" />
                  Use the &quot;stave&quot; terminology rather than &quot;chapter&quot; — it shows you understand the text&apos;s structure.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2E86C1]" />
                  SPaG is worth 4 marks on this section — write clearly and use paragraphs.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  );
}
