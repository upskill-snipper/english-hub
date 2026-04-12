"use client";

import { useState } from "react";
import { AITextArea } from "@/components/AITextArea";

/* ─── Expandable Section Component ──────────────────────────── */

function Section({
  id,
  title,
  badge,
  colour = "bg-primary",
  children,
  defaultOpen = false,
}: {
  id: string;
  title: string;
  badge?: string;
  colour?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted"
        aria-expanded={open}
        aria-controls={`section-${id}`}
      >
        <div className="flex items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${colour}`} />
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          {badge && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {badge}
            </span>
          )}
        </div>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div id={`section-${id}`} className="border-t border-border px-5 py-5">
          {children}
        </div>
      )}
    </div>
  );
}

function Quote({ text, speaker, act, analysis }: { text: string; speaker: string; act: string; analysis: string }) {
  return (
    <div className="rounded-lg border-l-4 border-accent bg-primary/10 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">{speaker} &mdash; {act}</p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function ChristmasCarolRevisionPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-300 uppercase tracking-wider">Victorian Novella</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">AQA</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Edexcel</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">CAIE</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">OCR</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">WJEC</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A Christmas Carol &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Everything you need for your GCSE English Literature exam on Dickens&apos;s classic novella.
          Stave-by-stave plot, character profiles, themes with evidence, 25+ key quotations with analysis,
          Victorian context, symbolism, and exam technique.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {["Plot Summary", "Characters", "Themes", "Key Quotations", "Context", "Symbolism", "Essay Planning", "Writer's Methods", "Grade 9 Points"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4" id="plot-summary">
        {/* ────────────────────────────────────────── PLOT SUMMARY */}
        <Section id="plot" title="Stave-by-Stave Plot Summary" badge="5 Staves" colour="bg-green-600" defaultOpen>
          <div className="space-y-6">
            <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-3 mb-4">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Why &ldquo;Staves&rdquo;?</strong> Dickens deliberately called his chapters &ldquo;staves&rdquo; (the lines of a musical staff) to reinforce the musical, carol-like structure of the novella. This reminds the reader that the story is, at heart, a song of Christmas and redemption.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15 text-xs font-bold text-green-700 dark:text-green-300">1</span>
                Stave One &mdash; Marley&apos;s Ghost
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The novella opens on Christmas Eve with the famous declaration: &ldquo;Marley was dead: to begin with.&rdquo; We meet Ebenezer Scrooge, a cold, miserly, solitary old moneylender in London. He refuses his nephew Fred&apos;s invitation to Christmas dinner, rejects charity collectors with the callous suggestion that the poor should go to prisons and workhouses, and grudgingly allows his underpaid clerk Bob Cratchit a day off for Christmas. That night, Scrooge is visited by the ghost of his former business partner Jacob Marley, who is bound in heavy chains forged from his own greed and indifference in life. Marley warns Scrooge that he will suffer the same fate unless he changes, and announces that three spirits will visit him.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; The opening line establishing Marley&apos;s death as fact</li>
                  <li>&bull; Scrooge&apos;s famous response to the charity collectors: &ldquo;Are there no prisons?&rdquo;</li>
                  <li>&bull; The description of Scrooge&apos;s cold, dark chambers</li>
                  <li>&bull; Marley&apos;s ghost in chains, warning of consequences</li>
                  <li>&bull; The tormented spirits outside Scrooge&apos;s window, unable to help the suffering</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15 text-xs font-bold text-green-700 dark:text-green-300">2</span>
                Stave Two &mdash; The First of the Three Spirits
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                At one o&apos;clock, the Ghost of Christmas Past appears &mdash; a strange, ethereal figure that is both old and young, with a bright light emanating from its head. It takes Scrooge on a journey through his own memories. First, they visit Scrooge as a lonely boy left at boarding school during the holidays, evoking Scrooge&apos;s first tears. They see his beloved sister Fan, who comes to bring him home. Next, they visit Fezziwig&apos;s warehouse, where the young Scrooge was an apprentice; Fezziwig&apos;s generous, joyful Christmas party shows Scrooge how a small amount of money and kindness can create enormous happiness. Finally, they witness the painful scene where Belle, Scrooge&apos;s former fiance, releases him from their engagement because his love of money has replaced his love for her. Scrooge sees a later vision of Belle happily married with children, and the pain overwhelms him. He begs the spirit to take him home and extinguishes its light.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Young Scrooge alone at school &mdash; the root of his isolation</li>
                  <li>&bull; Fan&apos;s arrival: &ldquo;Father is so much kinder than he used to be&rdquo;</li>
                  <li>&bull; Fezziwig&apos;s party &mdash; the power of generosity</li>
                  <li>&bull; Belle breaking off their engagement</li>
                  <li>&bull; Scrooge extinguishing the spirit&apos;s light (suppressing memory and truth)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15 text-xs font-bold text-green-700 dark:text-green-300">3</span>
                Stave Three &mdash; The Second of the Three Spirits
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The Ghost of Christmas Present is a giant, jolly spirit seated upon a throne of Christmas food, wearing a green robe bordered with white fur and a holly wreath. It first shows Scrooge the streets of London on Christmas morning, full of warmth and good cheer despite poverty. They visit the Cratchit family&apos;s humble Christmas dinner, where Bob Cratchit&apos;s disabled son Tiny Tim says, &ldquo;God bless us, every one!&rdquo; The Ghost reveals that Tiny Tim will die if the future remains unchanged. They visit Fred&apos;s Christmas party, where the guests mock Scrooge but Fred defends him with genuine warmth. The spirit also shows scenes of Christmas being celebrated everywhere &mdash; by miners, lighthouse keepers, and sailors. Before departing, the Ghost reveals two emaciated children hiding beneath its robe: Ignorance and Want, representing society&apos;s neglect of the poor. Scrooge&apos;s own words (&ldquo;Are there no prisons?&rdquo;) are thrown back at him.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; The Cratchit family dinner &mdash; joy in poverty</li>
                  <li>&bull; Tiny Tim&apos;s &ldquo;God bless us, every one!&rdquo;</li>
                  <li>&bull; The Ghost&apos;s warning about Tiny Tim&apos;s death</li>
                  <li>&bull; Fred&apos;s party and his defence of Scrooge</li>
                  <li>&bull; Ignorance and Want &mdash; &ldquo;beware them both&rdquo;</li>
                  <li>&bull; Scrooge&apos;s own words used against him</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15 text-xs font-bold text-green-700 dark:text-green-300">4</span>
                Stave Four &mdash; The Last of the Spirits
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The Ghost of Christmas Yet to Come is the most terrifying spirit: a dark, hooded phantom that never speaks, only points. It shows Scrooge a series of scenes connected to a man who has recently died. Businessmen discuss the death with callous indifference. A charwoman, a laundress, and an undertaker&apos;s man steal the dead man&apos;s possessions &mdash; even the shirt off his body and the curtains from his bed &mdash; and sell them to a fence called Old Joe. A young couple feel relief at the death because it gives them more time to pay their debt. The only emotion the death has caused is pleasure or indifference. Then, in devastating contrast, the Ghost shows the Cratchit household mourning Tiny Tim, who has died. Finally, Scrooge is taken to a neglected, overgrown grave and sees his own name on the headstone. He begs the spirit for a chance to change, promising to honour Christmas and live a better life.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; The silent, hooded phantom &mdash; the most frightening spirit</li>
                  <li>&bull; Businessmen discussing the death with no sorrow</li>
                  <li>&bull; The thieves stripping the dead man&apos;s belongings</li>
                  <li>&bull; Tiny Tim&apos;s death and the Cratchits&apos; grief</li>
                  <li>&bull; Scrooge&apos;s own gravestone &mdash; the climactic revelation</li>
                  <li>&bull; Scrooge&apos;s desperate promise to change</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15 text-xs font-bold text-green-700 dark:text-green-300">5</span>
                Stave Five &mdash; The End of It
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Scrooge wakes on Christmas morning, alive and overjoyed. His transformation is immediate and total. He laughs for the first time, buys the biggest turkey from the poulterer&apos;s shop and sends it anonymously to the Cratchit family, donates a large sum to the charity collectors he previously rejected, and goes to Fred&apos;s Christmas dinner, where he is warmly welcomed. The next day, he raises Bob Cratchit&apos;s salary and becomes a second father to Tiny Tim, who does not die. The narrator tells us Scrooge becomes as good a friend, master, and man as the city ever knew. The novella ends with Tiny Tim&apos;s words: &ldquo;God bless Us, Every One!&rdquo;
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Scrooge&apos;s joy at waking up alive: &ldquo;I don&apos;t know anything. I&apos;m quite a baby&rdquo;</li>
                  <li>&bull; Sending the prize turkey to the Cratchits anonymously</li>
                  <li>&bull; Meeting the charity collector and whispering a generous donation</li>
                  <li>&bull; Arriving at Fred&apos;s party &mdash; reconciliation with family</li>
                  <li>&bull; Raising Bob&apos;s salary and becoming Tiny Tim&apos;s benefactor</li>
                  <li>&bull; The narrator&apos;s final confirmation that Scrooge kept Christmas well</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section id="characters" title="Character Profiles" badge="9 Characters" colour="bg-purple-600">
            <div className="space-y-8">
              {/* Scrooge */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Ebenezer Scrooge</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Protagonist</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Transformation Arc</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Allegorical Figure</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Scrooge is the central character and his transformation is the entire purpose of the novella. At the start, he is cold, miserly, and utterly isolated. Dickens uses a barrage of similes and metaphors to establish his character: he is &ldquo;hard and sharp as flint,&rdquo; &ldquo;solitary as an oyster,&rdquo; and the cold within him freezes his features. He values money above all human connection and views the poor as a burden. His past reveals the roots of this: a neglected childhood, a cold father, the loss of his sister Fan, and the departure of Belle. Fezziwig showed him a model of generous, joyful employment, but Scrooge chose greed instead. Through the three spirits, Scrooge is forced to confront what he has become, what he is missing, and what awaits him. His transformation in Stave Five is joyous, almost childlike &mdash; he becomes generous, warm, sociable, and deeply connected to his community. Dickens uses Scrooge to argue that change is always possible and that no one is beyond redemption. He represents the Victorian wealthy class whom Dickens wanted to awaken to their social responsibilities.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!"
                    speaker="Narrator"
                    act="Stave One"
                    analysis="The list of aggressive adjectives creates a sense of relentless greed. Each word intensifies the last, building a portrait of someone who takes everything and gives nothing. 'Sinner' carries religious weight -- Scrooge's greed is not just antisocial but morally damning."
                  />
                  <Quote
                    text="solitary as an oyster"
                    speaker="Narrator"
                    act="Stave One"
                    analysis="This simile captures Scrooge's self-imposed isolation. An oyster is hard-shelled, closed off, and difficult to open -- but it can contain a pearl. This subtly foreshadows that something valuable (goodness, generosity) is hidden within Scrooge, waiting to be revealed."
                  />
                  <Quote
                    text="I will honour Christmas in my heart, and try to keep it all the year. I will live in the Past, the Present, and the Future."
                    speaker="Scrooge"
                    act="Stave Four"
                    analysis="Scrooge's pledge of transformation. 'All the year' shows the change is not temporary but a permanent shift in values. 'Past, Present, and Future' references the three spirits and shows Scrooge has learned from each. The tricolon structure gives his promise weight and completeness."
                  />
                  <Quote
                    text="He became as good a friend, as good a master, and as good a man, as the good old city knew"
                    speaker="Narrator"
                    act="Stave Five"
                    analysis="The anaphoric repetition of 'as good a' emphasises the completeness of Scrooge's transformation across all social roles -- personal ('friend'), professional ('master'), and moral ('man'). His redemption is total."
                  />
                </div>
              </div>

              {/* Ghost of Christmas Past */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">The Ghost of Christmas Past</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Supernatural</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Memory &amp; Truth</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The first spirit is an androgynous, contradictory figure &mdash; simultaneously old and young, strong and gentle, with a bright jet of light shining from its crown. It represents memory, truth, and the light of self-knowledge. Its shifting appearance suggests the fluid, unstable nature of memory itself. The light symbolises the truth that Scrooge has tried to suppress. Significantly, Scrooge can extinguish the light (suppress his memories) but not destroy the spirit &mdash; the past cannot be erased. This ghost speaks gently and does not judge; it simply shows. The visions it presents establish the origins of Scrooge&apos;s character: his neglected childhood explains his emotional isolation, Fezziwig provides a counter-example to his miserly employment of Bob Cratchit, and Belle shows the personal cost of his greed.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="a strange figure -- like a child: yet not so like a child as like an old man"
                    speaker="Narrator"
                    act="Stave Two"
                    analysis="The paradoxical description suggests the ghost exists outside normal time. Being both child and old man connects to its role showing scenes from across Scrooge's life. It may also reflect how memory itself feels both immediate and ancient."
                  />
                  <Quote
                    text="These are but shadows of the things that have been... They have no consciousness of us"
                    speaker="Ghost of Christmas Past"
                    act="Stave Two"
                    analysis="The ghost emphasises that the past cannot be changed -- Scrooge can only observe and learn from it. 'Shadows' suggests the past is insubstantial yet still present, haunting Scrooge. This forces Scrooge into the role of helpless witness to his own choices."
                  />
                  <Quote
                    text="I told you these were shadows of the things that have been... That they are what they are, do not blame me!"
                    speaker="Ghost of Christmas Past"
                    act="Stave Two"
                    analysis="When Scrooge becomes distressed, the ghost refuses to accept blame. The truth of the past is undeniable. This challenges Scrooge (and the reader) to take responsibility rather than deflect."
                  />
                </div>
              </div>

              {/* Ghost of Christmas Present */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">The Ghost of Christmas Present</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Supernatural</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Abundance &amp; Warning</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  A giant, jolly spirit dressed in a green robe bordered with white fur, wearing a holly wreath and carrying a torch shaped like a cornucopia. It sits on a throne of Christmas food &mdash; turkeys, geese, game, fruit, and punch. It represents abundance, generosity, and the spirit of Christmas celebration. However, it also delivers the novella&apos;s harshest social criticism. It ages visibly during the stave (it has over 1,800 brothers, one for each year of Christianity), and before it dies, it reveals Ignorance and Want &mdash; two wretched children &mdash; beneath its robe. The spirit&apos;s warmth contrasts with its devastating warning about society&apos;s neglect. Its torch sprinkles goodwill on food, particularly the food of the poor, showing that generosity of spirit matters more than material wealth.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="a jolly Giant, glorious to see; who bore a glowing torch, in shape not unlike Plenty's horn"
                    speaker="Narrator"
                    act="Stave Three"
                    analysis="The cornucopia ('Plenty's horn') symbolises abundance and generosity -- the opposite of Scrooge's miserliness. 'Glorious' and 'jolly' present Christmas as a celebration of life and sharing, in contrast to Scrooge's cold isolation."
                  />
                  <Quote
                    text="This boy is Ignorance. This girl is Want. Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom"
                    speaker="Ghost of Christmas Present"
                    act="Stave Three"
                    analysis="The most directly political moment in the novella. Dickens personifies the social problems he saw in Victorian England. 'Ignorance' is the greater threat because an uneducated population leads to crime, revolution, and social collapse. 'Doom' is capitalised, giving it biblical weight. This is Dickens speaking directly to his wealthy readers."
                  />
                  <Quote
                    text="Are there no prisons?... Are there no workhouses?"
                    speaker="Ghost of Christmas Present (quoting Scrooge)"
                    act="Stave Three"
                    analysis="The ghost throws Scrooge's own callous words from Stave One back at him. This is a devastating moment of dramatic irony -- Scrooge's dismissive attitude towards the poor is revealed as monstrous when he is confronted with the reality of suffering. It forces both Scrooge and the reader to feel the cruelty of such indifference."
                  />
                </div>
              </div>

              {/* Ghost of Christmas Yet to Come */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">The Ghost of Christmas Yet to Come</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Supernatural</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Death &amp; Consequence</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The final spirit is the most terrifying. It is a dark, hooded phantom, shrouded in black, that never speaks &mdash; it only points. Its silence makes it more menacing and gives Scrooge (and the reader) no comfort or explanation. It resembles the Grim Reaper and represents death, judgement, and the inevitable consequences of one&apos;s choices. Unlike the other ghosts, it shows not certainties but possibilities &mdash; what <em>will</em> happen if Scrooge does not change. Its visions are the novella&apos;s darkest: a death that causes no grief, the stripping of a corpse&apos;s possessions, and a neglected grave. The contrast between the unmourned rich man and the deeply mourned Tiny Tim provides the final catalyst for Scrooge&apos;s transformation.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="a solemn Phantom, draped and hooded, coming, like a mist along the ground, towards him"
                    speaker="Narrator"
                    act="Stave Four"
                    analysis="The simile 'like a mist' makes the ghost seem insubstantial yet all-encompassing, like death itself. 'Solemn' creates a funereal tone. The ghost 'comes towards him' -- Scrooge cannot escape his future. Its silence throughout is more terrifying than any words."
                  />
                  <Quote
                    text="Spirit!... hear me! I am not the man I was. I will not be the man I must have been but for this intercourse"
                    speaker="Scrooge"
                    act="Stave Four"
                    analysis="Scrooge's climactic plea. The contrast between 'was' and 'will not be' shows he accepts responsibility for his past while committing to change. 'Must have been' acknowledges the deterministic path he was on. This is the turning point of the entire novella."
                  />
                </div>
              </div>

              {/* Bob Cratchit */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Bob Cratchit</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Working Poor</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Foil to Scrooge</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Scrooge&apos;s clerk and a key figure representing the deserving poor in Victorian society. Despite earning only fifteen shillings a week (barely enough to survive), Bob is cheerful, loving, and devoted to his family. He wears a &ldquo;comforter&rdquo; (scarf) because Scrooge will not allow a sufficient fire. He tries to toast Scrooge at Christmas dinner, even though Mrs. Cratchit refuses. He is patient, long-suffering, and morally superior to his employer. Bob represents the exploited working class &mdash; hardworking people trapped in poverty by the greed of their employers. His love for Tiny Tim is deeply emotional, and his grief in Stave Four over Tim&apos;s death is one of the novella&apos;s most moving passages. He acts as a foil to Scrooge: where Scrooge is rich but emotionally impoverished, Bob is poor but rich in love and family.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Bob Cratchit told them how he had a situation in his eye for Master Peter, which would bring in, if obtained, full five-and-sixpence weekly"
                    speaker="Narrator"
                    act="Stave Three"
                    analysis="This small detail reveals the family's poverty -- they would celebrate a child earning five shillings and sixpence. It shows the reality of working-class life and how little separates the Cratchits from destitution. Dickens uses such details to build sympathy for the poor."
                  />
                  <Quote
                    text="He sat very close to his father's side, upon his little stool. Bob held his withered little hand in his, as if he loved the child, and wished to keep him by his side, and dreaded that he might be taken from him"
                    speaker="Narrator"
                    act="Stave Three"
                    analysis="The physical closeness reflects emotional devotion. 'Withered little hand' reminds us of Tim's fragility. The verbs 'loved,' 'wished,' and 'dreaded' create a powerful tricolon of paternal emotion. Dickens makes the threat to Tim feel immediate and personal."
                  />
                </div>
              </div>

              {/* Tiny Tim */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Tiny Tim</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Sympathetic Figure</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Moral Catalyst</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Bob Cratchit&apos;s youngest son, a disabled child who walks with a crutch and has an unspecified illness. Despite his suffering, he is cheerful, kind, and deeply spiritual. He is Dickens&apos;s most potent tool for evoking the reader&apos;s sympathy and is used to represent all the innocent poor who suffer and die because of society&apos;s neglect. His potential death is directly linked to Scrooge&apos;s choices &mdash; if Scrooge changes, Tiny Tim lives; if not, he dies. This makes the consequences of greed and social indifference tangible and personal rather than abstract. Tim is not a fully developed character but a symbolic figure designed to move both Scrooge and the reader to compassion and action.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="God bless us, every one!"
                    speaker="Tiny Tim"
                    act="Stave Three"
                    analysis="The novella's most famous line. 'Every one' is inclusive and generous -- Tim wishes blessings on all people, not just himself or his family. Despite his suffering, he shows no bitterness. His words embody the Christian charity and goodwill that Scrooge has rejected. The phrase bookends the novella, appearing again at the very end."
                  />
                  <Quote
                    text="If these shadows remain unaltered by the Future, the child will die"
                    speaker="Ghost of Christmas Present"
                    act="Stave Three"
                    analysis="'Shadows' echoes the language of the Ghost of Christmas Past, linking past, present, and future. 'Unaltered' places responsibility on Scrooge and society -- Tim's death is not inevitable but a consequence of inaction. This is Dickens's call to his readers: change the conditions, and save the Tiny Tims."
                  />
                  <Quote
                    text="he hoped the people saw him in the church, because he was a cripple, and it might be pleasant to them to remember upon Christmas Day, who made lame beggars walk"
                    speaker="Narrator (reporting Tiny Tim)"
                    act="Stave Three"
                    analysis="Tim connects his disability to Christ's healing miracles. This positions Tim as a Christ-like figure -- innocent, suffering, and redemptive. His presence in church is meant to remind others of their Christian duty to help the sick and poor."
                  />
                </div>
              </div>

              {/* Fred */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Fred (Scrooge&apos;s Nephew)</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Foil to Scrooge</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Christmas Spirit</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Scrooge&apos;s nephew, the son of Scrooge&apos;s beloved sister Fan (who died giving birth to him). Fred is warm, cheerful, persistent, and embodies the true spirit of Christmas. Despite Scrooge&apos;s repeated rejections, Fred returns every year to invite his uncle to dinner, showing unconditional love and patience. He refuses to be angry at Scrooge, instead pitying him. At his party, he defends Scrooge and insists on toasting him. Fred represents what Scrooge could be &mdash; he has little money but is rich in love and happiness. He is the living connection to Fan, and his warmth contrasts sharply with Scrooge&apos;s coldness. His persistence is ultimately rewarded when the transformed Scrooge arrives at his door on Christmas Day.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I have always thought of Christmas time... as a good time; a kind, forgiving, charitable, pleasant time"
                    speaker="Fred"
                    act="Stave One"
                    analysis="Fred's speech defines Christmas as Dickens sees it -- not religious ritual but moral practice. The list of adjectives ('kind, forgiving, charitable, pleasant') forms a manifesto for the Christmas spirit. Fred directly opposes Scrooge's 'Bah! Humbug!' philosophy."
                  />
                  <Quote
                    text="His wealth is of no use to him. He don't do any good with it. He don't make himself comfortable with it"
                    speaker="Fred"
                    act="Stave Three"
                    analysis="Fred identifies the paradox of Scrooge's life: he is rich but lives as if poor. The repetition of 'he don't' emphasises the waste. Fred sees through to the tragedy of Scrooge's existence -- money without purpose or connection is meaningless."
                  />
                </div>
              </div>

              {/* Fan */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Fan (Scrooge&apos;s Sister)</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Memory</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Lost Love</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Scrooge&apos;s younger sister, who comes to collect him from boarding school with the joyful news that &ldquo;Father is so much kinder than he used to be.&rdquo; She is described as having a &ldquo;large heart&rdquo; and clearly adores her brother. Fan died young (giving birth to Fred), and her death is one of the losses that hardened Scrooge. She represents warmth, familial love, and innocence. Her brief appearance is crucial because it shows that Scrooge was once capable of deep love and was once loved in return. Fan also connects Scrooge to Fred &mdash; by rejecting his nephew, Scrooge is rejecting the living legacy of the sister he cherished.
                </p>
                <Quote
                  text="I have come to bring you home, dear brother!... Father is so much kinder than he used to be, that home's like Heaven!"
                  speaker="Fan"
                  act="Stave Two"
                  analysis="Fan's words reveal that Scrooge's father was cruel, explaining why young Scrooge was left alone at school. 'Home's like Heaven' is bitterly ironic -- this warmth was temporary, and Fan's death destroyed it. The exclamation marks convey childish excitement and pure, unguarded love."
                />
              </div>

              {/* Belle */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Belle</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Lost Love</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Turning Point</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Scrooge&apos;s former fiancee, a beautiful young woman who releases Scrooge from their engagement because he has replaced her with the love of money. She is perceptive, dignified, and honest. She does not leave him in anger but in sadness, recognising that the man she loved has changed. The later vision of Belle as a happy wife and mother, surrounded by laughing children in a warm, bright home, is deliberately contrasted with Scrooge&apos;s cold, empty chambers. Belle represents the life and love that Scrooge sacrificed for wealth. Her departure marks the moment when Scrooge&apos;s isolation became a choice rather than a circumstance.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Another idol has displaced me... a golden one"
                    speaker="Belle"
                    act="Stave Two"
                    analysis="'Idol' carries religious connotations -- Scrooge has committed idolatry by worshipping money ('a golden one') instead of love. The biblical allusion to the Golden Calf suggests Scrooge has turned away from true values. 'Displaced' is painfully precise -- she has been pushed out, not abandoned."
                  />
                  <Quote
                    text="You fear the world too much... All your other hopes have merged into the hope of being beyond the chance of its sordid reproach"
                    speaker="Belle"
                    act="Stave Two"
                    analysis="Belle diagnoses Scrooge's core problem: his pursuit of wealth is driven by fear, not ambition. 'Sordid reproach' -- he fears poverty's shame. His childhood neglect created this fear. Belle understands him better than he understands himself, which makes her departure all the more tragic."
                  />
                </div>
              </div>

              {/* Fezziwig */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Fezziwig</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Foil to Scrooge</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Ideal Employer</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Scrooge&apos;s former employer, a fat, jovial businessman who throws a generous Christmas party for his workers. Fezziwig represents the ideal employer &mdash; someone who understands that he has power over his employees&apos; happiness and uses it benevolently. His party costs relatively little money but creates enormous joy. He is a direct foil to Scrooge&apos;s treatment of Bob Cratchit: Fezziwig gives warmth, celebration, and community; Scrooge gives cold offices and fifteen shillings a week. The Ghost of Christmas Past forces Scrooge to see the contrast, and Scrooge begins to understand that an employer has moral obligations beyond paying wages. Fezziwig demonstrates Dickens&apos;s belief that the wealthy can choose to use their position for good.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="He has the power to render us happy or unhappy; to make our service light or burdensome; a pleasure or a toil"
                    speaker="Scrooge (about Fezziwig)"
                    act="Stave Two"
                    analysis="Scrooge himself articulates the responsibility of employers. The antithetical pairs ('happy/unhappy,' 'light/burdensome,' 'pleasure/toil') make the choice stark. Scrooge recognises this truth but hasn't applied it to his own treatment of Bob Cratchit -- yet. This is a key step in his transformation."
                  />
                  <Quote
                    text="the happiness he gives, is quite as great as if it cost a fortune"
                    speaker="Scrooge"
                    act="Stave Two"
                    analysis="Scrooge acknowledges that happiness doesn't require vast wealth. This directly contradicts his own philosophy. The Ghost's gentle prompting makes Scrooge think of Bob Cratchit, planting the seed of change."
                  />
                </div>
              </div>

              {/* Jacob Marley */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Jacob Marley</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Supernatural</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Warning &amp; Catalyst</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Scrooge&apos;s deceased business partner, dead for seven years when the novella begins. His ghost appears in Stave One, bound in heavy chains made of &ldquo;cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel.&rdquo; These chains represent the greed and materialism that defined his life. Marley is tormented not by what he did but by what he failed to do &mdash; he did not help others when he had the chance. He serves as a mirror and a warning: Scrooge was his equal in life, and unless Scrooge changes, he will share Marley&apos;s fate. Marley&apos;s appearance sets the supernatural plot in motion and establishes the novella&apos;s moral framework: we are judged not by our wealth but by our impact on others.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I wear the chain I forged in life... I made it link by link, and yard by yard"
                    speaker="Marley's Ghost"
                    act="Stave One"
                    analysis="The chain is a powerful metaphor for accumulated sin. 'Forged' suggests both creation and falsity. 'Link by link, and yard by yard' emphasises that damnation is not a single act but the accumulation of daily choices to ignore others' suffering. Scrooge's chain, Marley warns, is even longer."
                  />
                  <Quote
                    text="Mankind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence, were, all, my business"
                    speaker="Marley's Ghost"
                    act="Stave One"
                    analysis="Marley redefines 'business' -- not commerce but humanity. The anaphoric repetition of 'my business' is bitterly ironic, since in life Marley's only business was money. The list of virtues ('charity, mercy, forbearance, benevolence') is the moral programme of the entire novella. This is Dickens's thesis statement."
                  />
                  <Quote
                    text="No rest, no peace. Incessant torture of remorse"
                    speaker="Marley's Ghost"
                    act="Stave One"
                    analysis="Short, fragmented sentences convey Marley's anguish. The negative constructions ('no rest, no peace') mirror the emptiness of a life lived without compassion. 'Incessant' -- there is no escape. This terrifies Scrooge into openness to the three spirits' lessons."
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title="Major Themes" badge="8 Themes" colour="bg-emerald-600">
            <div className="space-y-8">
              {/* Redemption */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  Redemption
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Redemption is the novella&apos;s central theme. Scrooge&apos;s transformation from miser to benefactor demonstrates Dickens&apos;s belief that anyone can change, no matter how far they have fallen. The structure of the novella mirrors a redemption arc: confrontation with the past (guilt), recognition of the present (awareness), fear of the future (motivation), and transformation (action). Importantly, Scrooge&apos;s redemption is not passive &mdash; he must actively choose to change and then demonstrate it through action (buying the turkey, donating to charity, raising Bob&apos;s wages). Dickens suggests redemption requires both internal transformation and external, practical generosity. The Christian context is significant: Christmas celebrates Christ&apos;s birth, and the novella echoes the Christian message that salvation is available to all who repent.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I will live in the Past, the Present, and the Future. The Spirits of all Three shall strive within me"
                    speaker="Scrooge"
                    act="Stave Four"
                    analysis="Scrooge commits to learning from all three temporal perspectives. 'Strive within me' suggests an ongoing internal struggle -- redemption is not a single moment but a continuous effort. The capitalisation of 'Past,' 'Present,' and 'Future' gives them almost spiritual significance."
                  />
                  <Quote
                    text="He became as good a friend, as good a master, and as good a man, as the good old city knew"
                    speaker="Narrator"
                    act="Stave Five"
                    analysis="The narrator confirms Scrooge's redemption is complete and permanent. The tricolon ('friend,' 'master,' 'man') shows transformation across all social roles. The repetition of 'good' four times in one sentence is deliberately emphatic -- Dickens wants no ambiguity."
                  />
                </div>
              </div>

              {/* Social Responsibility */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  Social Responsibility
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Dickens wrote <em>A Christmas Carol</em> partly as a response to the 1843 government report on child labour and the harsh conditions in workhouses under the Poor Law Amendment Act of 1834. The novella argues passionately that the wealthy have a duty to help the poor. Scrooge&apos;s early attitude &mdash; &ldquo;Are there no prisons? Are there no workhouses?&rdquo; &mdash; reflects the prevailing view among many wealthy Victorians that poverty was the poor&apos;s own fault and that institutions (however brutal) were sufficient. Dickens uses Marley&apos;s ghost, the Ghost of Christmas Present, and the figure of Tiny Tim to demolish this view. Marley&apos;s regret, the children Ignorance and Want, and Tim&apos;s potential death all demonstrate that society&apos;s neglect of the poor has devastating consequences. The novella targets the reader&apos;s conscience just as the spirits target Scrooge&apos;s.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Are there no prisons?... And the Union Workhouses?... The Treadmill and the Poor Law are in full vigour, then?"
                    speaker="Scrooge"
                    act="Stave One"
                    analysis="Scrooge's response to the charity collectors exposes the callousness of Victorian attitudes to poverty. He sees prisons and workhouses as adequate solutions. Dickens's contemporary readers would recognise this attitude in their own society. The rhetorical questions show Scrooge's complete indifference to human suffering."
                  />
                  <Quote
                    text="Mankind was my business"
                    speaker="Marley's Ghost"
                    act="Stave One"
                    analysis="The defining statement of the novella's social message. Dickens redefines 'business' from commerce to compassion. Every person's true business is the welfare of others. This directly challenges the Victorian ideology of laissez-faire economics and individualism."
                  />
                </div>
              </div>

              {/* Christmas Spirit */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  The Christmas Spirit
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Christmas functions in the novella as more than a holiday &mdash; it is a moral and social principle. Dickens presents Christmas as a time when people are at their most generous, forgiving, and communal. Fred&apos;s speech in Stave One defines it as &ldquo;a kind, forgiving, charitable, pleasant time&rdquo; &mdash; not primarily a religious festival but a moral practice. The Cratchits celebrate Christmas with warmth and love despite their poverty, showing that the spirit of Christmas transcends material wealth. The Ghost of Christmas Present embodies abundance and generosity. Dickens helped shape the modern understanding of Christmas as a time for family, charity, and goodwill. Scrooge&apos;s transformation is measured by his ability to embrace Christmas &mdash; and his pledge to &ldquo;honour Christmas in my heart, and try to keep it all the year&rdquo; extends the spirit of Christmas into a year-round moral commitment.
                </p>
                <Quote
                  text="I have always thought of Christmas time... as a good time; a kind, forgiving, charitable, pleasant time; the only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely"
                  speaker="Fred"
                  act="Stave One"
                  analysis="Fred articulates Dickens's vision of Christmas. The list of adjectives forms a moral manifesto. 'Shut-up hearts' is a powerful image -- people are emotionally closed for most of the year, but Christmas opens them. 'By one consent' suggests communal agreement. This speech is the philosophical heart of the novella."
                />
              </div>

              {/* Poverty & Inequality */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  Poverty &amp; Inequality
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novella presents a stark contrast between wealth and poverty. Scrooge has more money than he could ever spend but lives in cold, dark misery. The Cratchits have almost nothing but overflow with warmth and love. Dickens does not romanticise poverty &mdash; Tiny Tim will die without help, and the children Ignorance and Want are &ldquo;wretched, abject, frightful, hideous, miserable.&rdquo; Instead, he exposes the moral obscenity of a society in which some have far more than they need while others die for want of basic necessities. The thieves in Stave Four, who steal from a dead man without remorse, represent the moral degradation that poverty can cause. Dickens argues that poverty is not a moral failing of the poor but a failure of the wealthy to share.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="If they would rather die... they had better do it, and decrease the surplus population"
                    speaker="Scrooge"
                    act="Stave One"
                    analysis="Scrooge echoes Thomas Malthus's theory that population growth among the poor was the cause of poverty. 'Surplus population' dehumanises the poor, reducing them to an economic problem. When these words are used against Scrooge later (referring to Tiny Tim), their cruelty becomes devastating."
                  />
                  <Quote
                    text="yellow, meagre, ragged, scowling, wolfish"
                    speaker="Narrator (describing Ignorance and Want)"
                    act="Stave Three"
                    analysis="The rapid-fire adjectives create a disturbing portrait of neglected children. 'Wolfish' is especially powerful -- society's neglect turns children into predators. These are not individual children but allegorical representations of social failure, making Dickens's criticism systematic rather than personal."
                  />
                </div>
              </div>

              {/* Isolation */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-muted0" />
                  Isolation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Scrooge&apos;s isolation is both a cause and a consequence of his miserly nature. He is &ldquo;solitary as an oyster,&rdquo; lives alone in dark chambers, and has driven away everyone who ever cared for him. The novella traces the origins of this isolation: his father&apos;s neglect, being left alone at school, the loss of Fan, the departure of Belle. Dickens suggests that isolation breeds selfishness &mdash; cut off from human connection, Scrooge loses the ability to empathise. His redemption is fundamentally a return to community: he reconnects with Fred, becomes a benefactor to the Cratchits, and engages warmly with people on the street. The contrast between Scrooge&apos;s lonely Christmas Eve and his joyful Christmas Day makes the case that human beings need connection to be truly alive.
                </p>
                <Quote
                  text="No warmth could warm, no wintry weather chill him. No wind that blew was bitterer than he"
                  speaker="Narrator"
                  act="Stave One"
                  analysis="The double negative construction ('no warmth could warm') suggests Scrooge is beyond reach. The pathetic fallacy ('wintry weather,' 'bitter wind') externalises his inner coldness. He is presented as colder than the weather itself -- more element than human, completely disconnected from normal feeling."
                />
              </div>

              {/* Family */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-pink-500" />
                  Family
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Family is presented as the greatest source of happiness and the deepest loss when it is absent. The Cratchit family, despite their poverty, have love, togetherness, and mutual support. Fred&apos;s warm household contrasts with Scrooge&apos;s solitary existence. Belle&apos;s happy family in the later vision shows Scrooge the life he could have had. Scrooge&apos;s loss of family &mdash; his neglectful father, Fan&apos;s death, his broken engagement &mdash; explains his emotional withdrawal. Dickens suggests that family bonds are more valuable than any amount of money, and that rejecting family (as Scrooge rejects Fred) is a form of self-destruction. Scrooge&apos;s redemption includes reconnecting with Fred and becoming a &ldquo;second father&rdquo; to Tiny Tim &mdash; he rebuilds the family he lost.
                </p>
                <Quote
                  text="A remarkable boy!... I wish, but it's too late now... I should like to have given him something: that's all"
                  speaker="Scrooge (about the carol singer)"
                  act="Stave Two"
                  analysis="One of Scrooge's first emotional responses during the spirit visits. The unfinished sentence and self-correction show his feelings struggling against his habitual coldness. 'It's too late now' expresses regret -- but the entire novella argues that it is never too late. This small moment begins Scrooge's thaw."
                />
              </div>

              {/* Generosity vs Greed */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  Generosity vs Greed
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novella is structured as a moral argument between generosity and greed. Scrooge begins as the embodiment of greed; Fezziwig, Fred, and the Cratchits embody generosity. Crucially, Dickens shows that generosity is not about the amount spent &mdash; Fezziwig&apos;s party costs &ldquo;but a few pounds&rdquo; yet creates immense happiness, while Scrooge&apos;s vast wealth brings him no joy. Marley&apos;s chains are forged from the tools of commerce, showing that greed literally enslaves. The Ghost of Christmas Present&apos;s cornucopia represents natural abundance that is meant to be shared. Scrooge&apos;s redemption is expressed through practical acts of generosity: the turkey, the donation, the salary increase. Dickens argues that generosity liberates both giver and receiver.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="the happiness he gives, is quite as great as if it cost a fortune"
                    speaker="Scrooge (about Fezziwig)"
                    act="Stave Two"
                    analysis="This insight is central to the novella's message. Fezziwig's small expenditure creates great happiness, proving that generosity is about spirit, not amount. Scrooge recognises this but has not yet applied it to himself -- the Ghost prompts him to think of Bob Cratchit."
                  />
                  <Quote
                    text="Not a farthing less. A great many back-payments are included in it, I assure you"
                    speaker="Scrooge (to the charity collector)"
                    act="Stave Five"
                    analysis="The transformed Scrooge makes 'back-payments' -- acknowledging his years of failure to contribute. His whispered donation is large enough to shock the collector. 'Back-payments' implies a debt owed to society, reinforcing the theme of social responsibility."
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-indigo-500" />
                  Time
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The three ghosts represent past, present, and future, giving the novella a temporal structure that reinforces its message. The past explains how Scrooge became who he is; the present shows the consequences of his current behaviour; the future reveals where his path leads. Dickens suggests that the past cannot be changed but can be learned from, the present is where choices are made, and the future is not fixed &mdash; it can be altered by action in the present. The entire story takes place in a single night, creating urgency. Scrooge&apos;s pledge to &ldquo;live in the Past, the Present, and the Future&rdquo; suggests that wisdom requires integrating all three perspectives. Time is also linked to mortality &mdash; the Ghost of Christmas Present ages and dies within the stave, reminding us that life is finite and must not be wasted.
                </p>
                <Quote
                  text="I will live in the Past, the Present, and the Future. The Spirits of all Three shall strive within me. I will not shut out the lessons that they teach"
                  speaker="Scrooge"
                  act="Stave Four"
                  analysis="Scrooge's resolution integrates all three temporal perspectives. 'Strive within me' acknowledges that maintaining change requires effort. 'Shut out' echoes his earlier attempts to suppress the past (extinguishing the first spirit's light). He commits to remaining open to truth and self-reflection."
                />
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section id="quotes" title="Key Quotations with Analysis" badge="25+ Quotes" colour="bg-accent">
            <p className="text-sm text-muted-foreground mb-4">
              Below are essential quotations organised by stave. Each includes the technique used, its meaning in context, and how it connects to broader themes.
            </p>
            <div className="space-y-6">
              {/* Stave One Quotes */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3 border-b border-border pb-2">Stave One</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Old Marley was as dead as a door-nail"
                    speaker="Narrator"
                    act="Stave One"
                    analysis="The colloquial simile and conversational opening establish the narrator's direct, engaging voice. It also establishes the factual reality of Marley's death, which makes his supernatural return more shocking. The cliche is deliberately humorous, putting the reader at ease before the horror to come."
                  />
                  <Quote
                    text="a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!"
                    speaker="Narrator"
                    act="Stave One"
                    analysis="Seven adjectives in asyndetic listing. Each suggests a different form of taking. The cumulative effect is overwhelming -- Scrooge is defined entirely by acquisition. 'Sinner' places greed in a moral and religious framework. The exclamation mark conveys the narrator's exasperation."
                  />
                  <Quote
                    text="The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait"
                    speaker="Narrator"
                    act="Stave One"
                    analysis="The internal 'cold' is made physical -- his emotional coldness literally shapes his appearance. The verbs ('froze,' 'nipped,' 'shrivelled,' 'stiffened') are violent and destructive, showing how isolation and greed have damaged him. Pathetic fallacy works in reverse: rather than the weather reflecting the character, the character has become the weather."
                  />
                  <Quote
                    text="If they would rather die... they had better do it, and decrease the surplus population"
                    speaker="Scrooge"
                    act="Stave One"
                    analysis="Echoing Malthusian economics. 'Surplus population' reduces human beings to statistics. Dickens exposes this ideology as monstrous by later applying it to Tiny Tim. The conditional 'if they would rather die' is absurd -- no one chooses death over help. Scrooge's logic is revealed as wilfully blind."
                  />
                  <Quote
                    text="I wear the chain I forged in life... I made it link by link, and yard by yard"
                    speaker="Marley's Ghost"
                    act="Stave One"
                    analysis="Extended metaphor: the chain represents accumulated selfishness. 'Forged' suggests both creation and imprisonment. The repetition ('link by link, yard by yard') emphasises gradual accumulation -- each selfish act adds to the burden. The chain is self-made, making the punishment a direct consequence of choices."
                  />
                </div>
              </div>

              {/* Stave Two Quotes */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3 border-b border-border pb-2">Stave Two</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="A solitary child, neglected by his friends, is left there still"
                    speaker="Narrator"
                    act="Stave Two"
                    analysis="Describing young Scrooge alone at school. 'Solitary' and 'neglected' establish the roots of his adult isolation. 'Left there still' -- he is both physically abandoned and emotionally frozen in that moment. The present-tense 'is left' suggests the wound remains active in Scrooge's psyche."
                  />
                  <Quote
                    text="Another idol has displaced me... a golden one"
                    speaker="Belle"
                    act="Stave Two"
                    analysis="Religious metaphor: money as a false god. The Golden Calf allusion (Exodus) positions Scrooge as a sinner who has turned from true worship (love) to idolatry (wealth). 'Displaced' is precise -- Belle has been actively pushed aside, not merely neglected."
                  />
                  <Quote
                    text="He has the power to render us happy or unhappy; to make our service light or burdensome; a pleasure or a toil"
                    speaker="Scrooge"
                    act="Stave Two"
                    analysis="About Fezziwig, but applicable to Scrooge himself. Three antithetical pairs show the binary choice facing employers. This is Dickens's argument to Victorian industrialists: you have the power to improve lives at little cost. Scrooge's own words condemn his treatment of Bob."
                  />
                  <Quote
                    text="There was a boy singing a Christmas Carol at my door last night. I should like to have given him something: that's all"
                    speaker="Scrooge"
                    act="Stave Two"
                    analysis="Scrooge's first sign of softening. The understated 'that's all' tries to minimise the emotion, but regret is clearly present. This connects to his earlier rejection of the carol singer in Stave One. The past tense ('should like to have given') emphasises missed opportunity."
                  />
                  <Quote
                    text="Your lip is trembling... And what is that upon your cheek?"
                    speaker="Ghost of Christmas Past"
                    act="Stave Two"
                    analysis="The ghost gently points out Scrooge's tears -- emotions he tries to suppress. The questions force Scrooge to acknowledge his feelings. The physical signs of emotion (trembling lip, tears) show that his hard exterior is cracking. This moment begins his emotional thaw."
                  />
                </div>
              </div>

              {/* Stave Three Quotes */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3 border-b border-border pb-2">Stave Three</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="God bless us, every one!"
                    speaker="Tiny Tim"
                    act="Stave Three"
                    analysis="Simple, inclusive, and selfless. Tim blesses 'every one' -- even those who have caused his suffering. The phrase embodies Christian charity without bitterness. It becomes the novella's refrain, repeated at the end to confirm Scrooge's transformation. Its simplicity makes it universally memorable."
                  />
                  <Quote
                    text="If these shadows remain unaltered by the Future, the child will die"
                    speaker="Ghost of Christmas Present"
                    act="Stave Three"
                    analysis="The conditional 'if' is crucial -- the future is not fixed. This places responsibility squarely on Scrooge (and by extension, on the reader). Tim's death is presented as a consequence of social indifference, not fate. 'Shadows' connects to the Ghost of Christmas Past's language, creating thematic continuity."
                  />
                  <Quote
                    text="This boy is Ignorance. This girl is Want. Beware them both... but most of all beware this boy, for on his brow I see that written which is Doom"
                    speaker="Ghost of Christmas Present"
                    act="Stave Three"
                    analysis="Allegorical children representing social neglect. 'Ignorance' (lack of education) is more dangerous than 'Want' (poverty) because it leads to 'Doom' -- crime, revolution, social collapse. Dickens directly argues for education reform. The capitalised 'Doom' gives biblical finality."
                  />
                  <Quote
                    text="Have they no refuge or resource?"
                    speaker="Scrooge"
                    act="Stave Three"
                    analysis="Scrooge asks about Ignorance and Want with genuine concern -- a marked change from Stave One. The ghost's devastating reply ('Are there no prisons? Are there no workhouses?') forces Scrooge to hear his own words and recognise their cruelty."
                  />
                  <Quote
                    text="There was nothing of high mark in this. They were not a handsome family... But, they were happy"
                    speaker="Narrator (about the Cratchits)"
                    act="Stave Three"
                    analysis="Dickens directly challenges the reader's potential snobbery. The Cratchits are ordinary and poor, but their happiness is genuine and valuable. The adversative 'But' makes the key point: happiness does not depend on wealth or status. This undermines Scrooge's materialistic worldview."
                  />
                </div>
              </div>

              {/* Stave Four Quotes */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3 border-b border-border pb-2">Stave Four</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="The Phantom slowly, gravely, silently, approached"
                    speaker="Narrator"
                    act="Stave Four"
                    analysis="Three adverbs create a menacing, funereal pace. The ghost's silence is its most terrifying quality -- it offers no explanation, comfort, or negotiation. Each adverb intensifies the dread. This is death personified: inevitable, solemn, and speechless."
                  />
                  <Quote
                    text="Oh cold, cold, rigid, dreadful Death, set up thine altar here, and dress it with such terrors as thou hast at thy command"
                    speaker="Narrator"
                    act="Stave Four"
                    analysis="The narrator addresses Death directly in apostrophe. 'Altar' creates a religious image -- death as a dark worship. The exclamatory tone and archaic 'thine' and 'thou' give the passage solemnity. This is the novella's darkest moment, over the corpse that the reader suspects is Scrooge."
                  />
                  <Quote
                    text="The case of this unhappy man might be my own. My life tends that way, now"
                    speaker="Scrooge"
                    act="Stave Four"
                    analysis="Scrooge begins to connect the dead man's fate with his own. 'Tends that way' shows he recognises the direction of his life but hasn't yet confirmed the dead man's identity. The understatement is chilling -- he is looking at his own death."
                  />
                  <Quote
                    text="I am not the man I was. I will not be the man I must have been but for this intercourse"
                    speaker="Scrooge"
                    act="Stave Four"
                    analysis="The climactic pledge. The tense shifts are significant: 'was' (past, acknowledged), 'will not be' (future, rejected), 'must have been' (the path avoided). 'Intercourse' means 'interaction' -- the spirits' visits have changed his course. This sentence captures the entire transformation arc."
                  />
                </div>
              </div>

              {/* Stave Five Quotes */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3 border-b border-border pb-2">Stave Five</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy. I am as giddy as a drunken man"
                    speaker="Scrooge"
                    act="Stave Five"
                    analysis="Four similes in rapid succession convey Scrooge's overwhelming joy. 'Feather' (weightless -- his burden of guilt is lifted), 'angel' (spiritually redeemed), 'schoolboy' (return to childhood innocence), 'drunken man' (intoxicated with happiness). The anaphoric 'I am' repeats joyfully, as if Scrooge is rediscovering himself."
                  />
                  <Quote
                    text="I don't know anything. I'm quite a baby. Never mind. I don't care. I'd rather be a baby"
                    speaker="Scrooge"
                    act="Stave Five"
                    analysis="Scrooge embraces ignorance and vulnerability -- the opposite of his former controlling, cynical self. 'Baby' suggests rebirth: he is starting life afresh. The short, excited sentences mirror childlike excitement. 'I don't care' is liberating -- he has shed the self-consciousness that trapped him."
                  />
                  <Quote
                    text="He went to church, and walked about the streets, and watched the people hurrying to and fro... and found that everything could yield him pleasure. He had never dreamed that any walk -- that anything -- could give him so much happiness"
                    speaker="Narrator"
                    act="Stave Five"
                    analysis="Simple, everyday activities bring Scrooge joy because he is finally connected to the world around him. 'Everything' and 'anything' emphasise the totality of his transformation. The em-dashes show the narrator's own wonder at the change. Walking the streets he once haunted in isolation is now a source of delight."
                  />
                  <Quote
                    text="Some people laughed to see the alteration in him, but he let them laugh... His own heart laughed: and that was quite enough for him"
                    speaker="Narrator"
                    act="Stave Five"
                    analysis="Scrooge no longer cares about others' opinions (recall Belle's observation that he 'feared the world too much'). 'His own heart laughed' is a beautiful image of internal joy. He has moved from external validation (money, status) to internal fulfilment (genuine happiness and connection)."
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section id="context" title="Victorian Context" badge="Essential Background" colour="bg-amber-600">
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">The Poor Laws &amp; Workhouses</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Poor Law Amendment Act of 1834 replaced outdoor relief (giving money to the poor in their homes) with the workhouse system. Workhouses were deliberately designed to be unpleasant &mdash; families were separated, food was minimal, and inmates performed hard labour &mdash; to deter all but the truly desperate from seeking help. The philosophy behind this was that poverty was caused by laziness and that making relief unpleasant would motivate the poor to find work. Scrooge&apos;s reference to &ldquo;prisons&rdquo; and &ldquo;workhouses&rdquo; reflects this attitude. Dickens was horrified by these conditions and used the novella to challenge the idea that institutional cruelty was an acceptable response to poverty.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Thomas Malthus &amp; &ldquo;Surplus Population&rdquo;</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thomas Malthus (1766&ndash;1834) argued in his <em>Essay on the Principle of Population</em> that population growth would always outstrip food supply, leading to famine and poverty. He believed that helping the poor only encouraged them to have more children, worsening the problem. Many wealthy Victorians used Malthusian theory to justify their indifference to poverty. Scrooge&apos;s phrase &ldquo;decrease the surplus population&rdquo; is a direct echo of Malthus. When the Ghost of Christmas Present uses this phrase about Tiny Tim, Dickens exposes the inhumanity of applying abstract economic theory to real, suffering people.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">The Industrial Revolution</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By the 1840s, the Industrial Revolution had transformed Britain. Factories drew rural populations into rapidly growing cities, creating slums, overcrowding, pollution, and exploitative working conditions. Child labour was widespread. The gap between rich and poor widened enormously. A new class of wealthy industrialists and financiers (like Scrooge) amassed fortunes while their workers lived in squalor. Dickens saw this inequality first-hand in London and used his writing to campaign for reform. <em>A Christmas Carol</em> was published in the same year as a government report on child labour that shocked the nation.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Dickens&apos;s Own Childhood</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Charles Dickens (1812&ndash;1870) experienced poverty and hardship personally. When he was twelve, his father was imprisoned in the Marshalsea debtors&apos; prison, and young Charles was sent to work in a blacking (shoe polish) factory, pasting labels on bottles. This traumatic experience shaped his lifelong empathy for the poor and his anger at social injustice. Scrooge&apos;s lonely childhood at boarding school may reflect Dickens&apos;s own feelings of abandonment. The figure of the neglected child recurs throughout Dickens&apos;s work. He understood from personal experience that poverty was not a moral failing but a circumstance that could happen to anyone.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Social Reform &amp; the Purpose of the Novella</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dickens originally planned to write a political pamphlet about poverty after visiting a &ldquo;ragged school&rdquo; (a free school for destitute children) and reading the Parliamentary report on child labour. Instead, he decided that fiction would be more effective at changing hearts and minds. He wrote <em>A Christmas Carol</em> in just six weeks in October&ndash;November 1843, personally overseeing its production and keeping the price low (five shillings) so more people could afford it. The novella was an immediate bestseller and had a measurable impact: factory owners reportedly gave workers extra time off after reading it, and charitable donations increased. Dickens used the story form to make social criticism accessible, emotional, and persuasive.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Christmas in Victorian England</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In the early Victorian period, Christmas was not the major celebration it is today. Many of the traditions we associate with Christmas &mdash; cards, crackers, decorated trees (popularised by Prince Albert in 1848), and large family gatherings &mdash; were either new or emerging. Dickens is often credited with &ldquo;inventing&rdquo; the modern Christmas through this novella and his other Christmas writings. He promoted the idea of Christmas as a time of family, charity, forgiveness, and feasting. The novella helped establish Christmas as a secular moral holiday focused on generosity and community, not just a religious observance.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── SYMBOLISM */}
        <div id="symbolism">
          <Section id="symbolism" title="Symbolism" badge="6 Key Symbols" colour="bg-teal-600">
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Chains</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Marley&apos;s chain, made of &ldquo;cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses,&rdquo; symbolises the burden of greed and selfishness accumulated over a lifetime. Each link represents an act of avarice or a failure of compassion. The chain is self-forged &mdash; Marley created his own punishment. Scrooge&apos;s chain is even longer, suggesting his sins are greater. The chains represent the idea that materialism enslaves rather than frees, trapping people in a prison of their own making. In Stave Five, Scrooge&apos;s redemption implicitly breaks his chain, freeing him from the fate Marley endures.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Darkness &amp; Light</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Darkness is associated with Scrooge, ignorance, and moral blindness. His offices are dark; his chambers are dark; his personality is described in terms of cold and shadow. Light represents truth, warmth, and redemption. The Ghost of Christmas Past has a bright light shining from its head (the light of memory and self-knowledge), which Scrooge tries to extinguish &mdash; he wants to suppress the truth about himself. The Ghost of Christmas Present carries a glowing torch that spreads goodwill. Scrooge&apos;s transformed Christmas morning is bright and clear. The progression from darkness to light mirrors his moral journey.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Weather &amp; Cold</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The cold, foggy weather of Stave One reflects Scrooge&apos;s emotional state (pathetic fallacy). &ldquo;No warmth could warm&rdquo; him &mdash; Scrooge is colder than the weather itself. The fog represents moral confusion and obscured vision. As Scrooge transforms, the weather on Christmas morning is bright and cold but invigorating &mdash; the same cold, but experienced joyfully because Scrooge is now emotionally warm. Weather also differentiates settings: the Cratchit home is warm despite the cold outside; Scrooge&apos;s chambers are cold despite being indoors. Warmth becomes a metaphor for love and human connection.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Food</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Food symbolises generosity, abundance, and community throughout the novella. The Ghost of Christmas Present sits on a throne of food. The Cratchits&apos; modest Christmas dinner &mdash; described in loving detail (the goose, the pudding, the chestnuts) &mdash; represents love and family rather than material wealth. Fezziwig&apos;s party features food and drink shared freely. Scrooge&apos;s first act of generosity is buying the &ldquo;prize Turkey&rdquo; for the Cratchits. In contrast, Scrooge eats alone (&ldquo;he took his melancholy dinner in his usual melancholy tavern&rdquo;). Food shared is love expressed; food hoarded or eaten alone is isolation made visible.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Fire</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fire represents warmth, comfort, and human connection. Bob Cratchit tries to warm himself at a candle because Scrooge will not allow a proper fire &mdash; a literal symbol of Scrooge&apos;s refusal to share warmth. The Cratchit home has a small but cheerful fire. Fred&apos;s home is bright with firelight. Fezziwig&apos;s party is lit by a roaring fire. Scrooge&apos;s own fire is &ldquo;very small&rdquo; &mdash; he denies warmth even to himself. The Ghost of Christmas Present&apos;s torch functions like a portable fire, spreading warmth wherever it goes. By Stave Five, one can infer that Scrooge&apos;s fire will burn brightly.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">The Ghosts Themselves</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each ghost&apos;s appearance symbolises its message. The Ghost of Christmas Past is ethereal, shifting, and luminous &mdash; like memory itself, which is vivid yet intangible. The Ghost of Christmas Present is large, warm, and abundant &mdash; embodying the generosity of the season but aging and dying within the stave, reminding us that the present is fleeting. The Ghost of Christmas Yet to Come is dark, silent, and hooded &mdash; like death itself, unknown and terrifying. Together, they form a complete symbolic framework: memory teaches, the present demands action, and the future warns.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section id="essays" title="Essay Planning for Common Questions" badge="6 Questions" colour="bg-primary">
            <div className="space-y-8">
              <div className="rounded-lg bg-blue-500/10 border border-blue-500/30 p-4 mb-4">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Exam tip:</strong> For <em>A Christmas Carol</em>, you will typically get an extract and a question asking you to discuss a theme or character with reference to both the extract and the wider novella. Always analyse language in the extract closely, then broaden to the rest of the text. Use the PEEL structure: Point, Evidence, Explanation, Link.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">1. How does Dickens present Scrooge&apos;s transformation?</h3>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Plan</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Para 1:</strong> Scrooge at the start &mdash; the barrage of negative adjectives (&ldquo;squeezing, wrenching, grasping&rdquo;), pathetic fallacy (cold), isolation (&ldquo;solitary as an oyster&rdquo;). He represents the indifferent wealthy class.</li>
                    <li><strong>Para 2:</strong> The Ghost of Christmas Past reveals the roots of his character &mdash; neglected childhood, loss of Fan and Belle. This creates sympathy and shows Scrooge was not always cold. Key quote: &ldquo;A solitary child, neglected by his friends.&rdquo;</li>
                    <li><strong>Para 3:</strong> The Ghost of Christmas Present forces confrontation with consequences &mdash; the Cratchits, Tiny Tim, Ignorance and Want. Scrooge begins to show empathy. His own words thrown back at him.</li>
                    <li><strong>Para 4:</strong> The Ghost of Christmas Yet to Come &mdash; terror of the unmourned death, the gravestone revelation. Scrooge&apos;s climactic plea: &ldquo;I am not the man I was.&rdquo;</li>
                    <li><strong>Para 5:</strong> Stave Five &mdash; joyful transformation, similes of happiness (&ldquo;light as a feather, happy as an angel&rdquo;), practical acts of generosity (turkey, donation, salary). &ldquo;As good a man as the good old city knew.&rdquo;</li>
                    <li><strong>Conclusion:</strong> Dickens uses Scrooge&apos;s transformation as a call to action for his Victorian readers. If Scrooge can change, anyone can. The transformation is both personal (emotional) and social (practical generosity).</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">2. How does Dickens present the theme of social responsibility?</h3>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Plan</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Para 1:</strong> Scrooge&apos;s rejection of responsibility &mdash; &ldquo;Are there no prisons?&rdquo;, &ldquo;decrease the surplus population.&rdquo; Link to Malthus and Poor Laws. Scrooge represents the callous wealthy class.</li>
                    <li><strong>Para 2:</strong> Marley&apos;s chain and his realisation that &ldquo;Mankind was my business.&rdquo; The chain symbolises the consequences of ignoring social duty. Marley&apos;s regret is a warning.</li>
                    <li><strong>Para 3:</strong> The Cratchits as the deserving poor &mdash; hardworking, loving, but vulnerable. Tiny Tim&apos;s potential death shows the human cost of indifference. Dickens builds sympathy to motivate action.</li>
                    <li><strong>Para 4:</strong> Ignorance and Want &mdash; Dickens&apos;s most direct social criticism. &ldquo;Beware this boy, for on his brow I see that written which is Doom.&rdquo; An argument for education and welfare reform.</li>
                    <li><strong>Para 5:</strong> Scrooge&apos;s practical redemption &mdash; the turkey, the donation (&ldquo;back-payments&rdquo;), the salary increase. These are not just emotional changes but concrete social actions.</li>
                    <li><strong>Conclusion:</strong> Dickens uses the novella as a vehicle for social reform, arguing that the wealthy have a moral obligation to help the poor. The story&apos;s emotional power was designed to change real behaviour.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">3. How does Dickens use the supernatural to convey his message?</h3>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Plan</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Para 1:</strong> Marley&apos;s ghost as catalyst &mdash; the chains, the warning, the tormented spirits outside the window. The supernatural creates urgency and makes consequences visible.</li>
                    <li><strong>Para 2:</strong> Ghost of Christmas Past &mdash; ethereal, luminous, gentle. Its light represents truth and memory. It forces Scrooge to confront his past without judgement.</li>
                    <li><strong>Para 3:</strong> Ghost of Christmas Present &mdash; abundance and warmth, but also warning. The cornucopia vs Ignorance and Want. The spirit ages and dies, showing the present is fleeting.</li>
                    <li><strong>Para 4:</strong> Ghost of Christmas Yet to Come &mdash; silent, terrifying, death-like. The most effective because it shows consequences without explanation, forcing Scrooge to interpret and act.</li>
                    <li><strong>Para 5:</strong> The progression of the ghosts mirrors Scrooge&apos;s emotional journey: regret (Past), empathy (Present), fear (Future), leading to transformation.</li>
                    <li><strong>Conclusion:</strong> Dickens uses the supernatural as a literary device to compress a moral education into a single night. The ghosts allow him to show past, present, and future simultaneously, making abstract moral arguments concrete and emotionally powerful.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">4. How does Dickens present poverty in the novella?</h3>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Plan</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Para 1:</strong> The Cratchits &mdash; dignified poverty. Their small goose and pudding described with loving detail. They are happy despite having little, but their happiness is fragile (Tiny Tim).</li>
                    <li><strong>Para 2:</strong> Tiny Tim as the face of poverty&apos;s victims &mdash; innocent, disabled, dying. Dickens makes poverty personal rather than statistical. &ldquo;Decrease the surplus population&rdquo; becomes monstrous when applied to Tim.</li>
                    <li><strong>Para 3:</strong> Ignorance and Want &mdash; the systemic view. &ldquo;Yellow, meagre, ragged, scowling, wolfish.&rdquo; Poverty as social failure, not individual moral weakness. The warning about &ldquo;Doom.&rdquo;</li>
                    <li><strong>Para 4:</strong> The thieves in Stave Four &mdash; poverty&apos;s moral degradation. Old Joe&apos;s shop. These characters show what happens when society abandons people to destitution.</li>
                    <li><strong>Para 5:</strong> Victorian context &mdash; workhouses, Malthus, child labour. Dickens writing from personal experience of poverty. The novella as a deliberate intervention.</li>
                    <li><strong>Conclusion:</strong> Dickens presents poverty as both a personal tragedy and a social crime, arguing that it is caused not by the failings of the poor but by the greed and indifference of the wealthy.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">5. How does Dickens present the importance of family?</h3>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Plan</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Para 1:</strong> The Cratchits &mdash; the ideal family despite poverty. Bob&apos;s love for Tiny Tim, the warmth of their Christmas dinner, their mutual support. Family as the greatest wealth.</li>
                    <li><strong>Para 2:</strong> Scrooge&apos;s lost family &mdash; neglectful father, lonely school years, Fan&apos;s death. These losses created his emotional isolation. Family breakdown as the origin of his miserliness.</li>
                    <li><strong>Para 3:</strong> Fred&apos;s persistence &mdash; unconditional family love. He keeps inviting Scrooge despite rejection. He is Fan&apos;s legacy. Scrooge&apos;s rejection of Fred is a rejection of his last family connection.</li>
                    <li><strong>Para 4:</strong> Belle&apos;s happy family &mdash; the life Scrooge could have had. The vision of domestic warmth and laughing children contrasts with his cold, empty chambers.</li>
                    <li><strong>Para 5:</strong> Scrooge&apos;s redemption through family &mdash; joining Fred&apos;s dinner, becoming a &ldquo;second father&rdquo; to Tiny Tim. He rebuilds the family he lost through generosity and connection.</li>
                    <li><strong>Conclusion:</strong> Dickens presents family as essential to human happiness and moral health. Scrooge&apos;s isolation caused his corruption, and his return to family signals his redemption.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">6. How does Dickens use the character of Tiny Tim?</h3>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Plan</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Para 1:</strong> Tim as a sympathetic figure &mdash; disabled, small, brave, cheerful. His crutch and Bob&apos;s devotion create immediate emotional impact. Dickens designs Tim to evoke maximum sympathy.</li>
                    <li><strong>Para 2:</strong> Tim as a moral catalyst &mdash; his potential death is the consequence of Scrooge&apos;s and society&apos;s indifference. &ldquo;If these shadows remain unaltered...&rdquo; Tim makes abstract poverty personal.</li>
                    <li><strong>Para 3:</strong> Tim as a Christ-like figure &mdash; &ldquo;God bless us, every one!&rdquo;, his hope that people see him in church. He is innocent, suffering, and redemptive. His forgiveness contrasts with society&apos;s cruelty.</li>
                    <li><strong>Para 4:</strong> Tim&apos;s death in Stave Four &mdash; the emotional climax. The empty chair, the crutch without an owner. Contrasted with the unmourned rich man (Scrooge). Tim is deeply loved; Scrooge is not.</li>
                    <li><strong>Para 5:</strong> Tim&apos;s survival in Stave Five &mdash; proof that change works. Scrooge becomes his &ldquo;second father.&rdquo; Tim&apos;s life is saved by generosity, proving Dickens&apos;s thesis.</li>
                    <li><strong>Conclusion:</strong> Tiny Tim is Dickens&apos;s most powerful rhetorical tool: a figure designed to make the reader feel the human cost of social indifference and the life-saving power of generosity.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── WRITER'S METHODS */}
        <div id="writers-methods">
          <Section id="methods" title="Writer's Methods and Techniques" badge="9 Techniques" colour="bg-teal-600">
            <div className="space-y-6">
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">The Omniscient Narrator</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Dickens uses a third-person omniscient narrator who speaks directly to the reader in a chatty, engaging tone. The narrator jokes (&ldquo;Old Marley was as dead as a door-nail&rdquo;), moralises, and guides the reader&apos;s response. This narrative voice creates intimacy and persuasion &mdash; the reader is drawn into the narrator&apos;s worldview. The narrator is essentially Dickens himself, using the story as a vehicle for his social argument. The direct address (&ldquo;Oh!&rdquo;, &ldquo;Mind!&rdquo;) makes the novella feel like a fireside story, reinforcing its oral, carol-like quality.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">Allegory and Parable</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novella functions as a moral allegory. Scrooge represents the wealthy Victorian class; the Cratchits represent the deserving poor; Marley&apos;s chains represent the consequences of greed; Ignorance and Want represent society&apos;s neglected children. Each character and event carries symbolic weight beyond its literal meaning. This allegorical structure gives the story universal significance &mdash; it is not about one man but about all of society.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">The Five-Stave Structure</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Dickens deliberately structures the novella as five &ldquo;staves&rdquo; (musical sections) rather than chapters, reinforcing its identity as a Christmas carol. This musical metaphor suggests harmony and resolution. Stave One establishes the problem; Staves Two to Four provide the education; Stave Five provides the resolution. The structure mirrors a musical composition moving from dissonance to harmony, from Scrooge&apos;s cold isolation to his joyful integration into community.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">Listing and Accumulation</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Dickens is famous for his lists. Scrooge is described as &ldquo;a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner&rdquo; &mdash; seven relentless adjectives that overwhelm the reader. The Christmas feast scenes use lists of food to create abundance and warmth. This technique of accumulation creates sensory richness and emotional intensity. When describing misery, the lists are oppressive; when describing joy, they are generous and celebratory.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">Pathetic Fallacy and Symbolism</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Cold, fog, and darkness are associated with Scrooge and his miserliness. Warmth, light, and fire are associated with generosity and community. Scrooge&apos;s chambers are cold and dark; the Cratchits&apos; home, though poor, is warm and bright. After his transformation, Scrooge notices &ldquo;Golden sunlight; Heavenly sky; sweet fresh air; merry bells.&rdquo; The weather literally changes to reflect his emotional state. The chain Marley wears is a physical symbol of his greed in life &mdash; each link forged by selfishness.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">Contrast and Juxtaposition</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Dickens constantly contrasts the rich and poor, warmth and cold, generosity and miserliness. The Cratchits&apos; humble but loving Christmas is juxtaposed with Scrooge&apos;s lonely chamber. Fezziwig&apos;s generous party contrasts with Scrooge&apos;s treatment of Bob Cratchit. In Stave Four, the unmourned rich man is contrasted with the deeply mourned Tiny Tim. These juxtapositions drive Dickens&apos;s moral argument: money does not bring happiness; connection and generosity do.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">Circular Structure</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novella begins and ends on Christmas Day but with a completely transformed protagonist. Stave One&apos;s cold, dark, isolated Scrooge is replaced by Stave Five&apos;s warm, joyful, connected Scrooge. The same situations recur but with different outcomes: the charity collectors return and receive generosity; Christmas dinner happens with Scrooge present. This circular structure reinforces the theme of redemption &mdash; the same circumstances can produce different results if a person chooses to change.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">Exclamatory and Imperative Tone</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Dickens uses exclamation marks abundantly, creating a tone of urgency, indignation, and joy depending on the context. The narrator exclaims with horror at Scrooge&apos;s behaviour and with delight at his transformation. This rhetorical energy makes the novella feel passionate and persuasive &mdash; it is not a detached narrative but an impassioned argument. The narrator&apos;s emotional involvement models the response Dickens wants from his readers.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">The Supernatural as Moral Device</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The three ghosts are not merely plot devices but structural tools that allow Dickens to compress an entire moral education into a single night. Past shows consequences of choices; Present shows current suffering Scrooge ignores; Future shows the ultimate consequence of unchanged behaviour. Each ghost grows more frightening, culminating in the silent, hooded phantom. The supernatural framework allows Dickens to move freely through time and space, showing private scenes the protagonist could not otherwise witness.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── GRADE 9 POINTS */}
        <div id="grade-9">
          <Section id="grade-9" title="Grade 9 Exemplar Points and Interpretations" badge="8 Points" colour="bg-amber-600">
            <p className="text-sm text-muted-foreground mb-4">
              These higher-level interpretations demonstrate the sophisticated analysis needed for top grades. Each goes beyond surface reading to consider authorial intent, alternative readings, and structural significance.
            </p>
            <div className="space-y-6">

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">1. The Novella as Political Intervention</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <em>A Christmas Carol</em> was not just a story but a deliberate political act. In 1843, Dickens visited a ragged school (a free school for destitute children) and was so horrified that he planned to write a pamphlet called &ldquo;An Appeal to the People of England on Behalf of the Poor Man&apos;s Child.&rdquo; Instead, he wrote <em>A Christmas Carol</em>, realising that fiction would be more persuasive than polemic. The novella was priced cheaply (five shillings) to reach the widest possible audience. A Grade 9 response should recognise that the text is a calculated intervention &mdash; Dickens chose the form (fiction), the timing (Christmas), and the price (affordable) to maximise its social impact.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">2. Scrooge&apos;s Transformation: Genuine or Performed?</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Most readings take Scrooge&apos;s transformation at face value. A more sophisticated response might question its completeness. Scrooge changes from fear of death, not from genuine empathy. His good deeds in Stave Five are performative and public &mdash; buying the turkey, tipping boys, joining parties. Some critics argue this is &ldquo;Christmas capitalism&rdquo; rather than genuine social change: individual charity replacing systemic reform. A Grade 9 answer could argue that Dickens presents individual transformation as necessary but perhaps insufficient &mdash; the underlying system of workhouses, child labour, and poverty requires structural change that Scrooge&apos;s generosity alone cannot provide.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">3. Ignorance and Want as the Novella&apos;s True Climax</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  While Stave Four&apos;s gravestone revelation is the plot climax, the allegorical climax occurs when the Ghost of Christmas Present reveals the children Ignorance and Want. They are &ldquo;yellow, meagre, ragged, scowling, wolfish&rdquo; &mdash; more animal than human, deformed by neglect. The Ghost warns: &ldquo;Beware them both... but most of all beware this boy, for on his brow I see that written which is Doom.&rdquo; This is Dickens&apos;s most direct political statement: society&apos;s wilful ignorance of poverty will lead to its own destruction. The children are not Scrooge&apos;s victims specifically but <em>society&apos;s</em> &mdash; making this a critique that extends far beyond one man&apos;s greed.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">4. The Ghost of Christmas Past&apos;s Light as Truth</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The first ghost has a &ldquo;bright clear jet of light&rdquo; springing from its head. When Scrooge cannot bear the painful memories, he presses the extinguisher cap down and suppresses the light &mdash; but the light still gleams underneath. This is a metaphor for truth and self-knowledge: Scrooge can try to suppress the past, but he cannot destroy it. The act of extinguishing light = the act of wilful ignorance. The fact that the light persists suggests that truth is indestructible, even when we refuse to look at it. Scrooge&apos;s entire miserliness is built on suppression of painful truths about his own past.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">5. Fezziwig vs. Scrooge as Contrasting Models of Capitalism</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Fezziwig is not anti-capitalist &mdash; he is a successful businessman. But he uses his wealth to create joy. Scrooge uses his to accumulate power. The contrast is not between wealth and poverty but between generous and selfish uses of wealth. Dickens is not arguing that capitalism is wrong but that capitalism without conscience is destructive. A Grade 9 response might note that Dickens&apos;s message is reformist rather than revolutionary: he wants to change how the wealthy behave, not overthrow the system. The young Scrooge admires Fezziwig but later chooses the path of cold accumulation &mdash; showing that moral choices, not economic systems, are what Dickens holds responsible.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">6. Tiny Tim as Sentimental Propaganda</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Tiny Tim is deliberately designed to evoke maximum sympathy: he is young, disabled, brave, pious, and dying. Some critics argue he is a sentimental stereotype rather than a realistic character. A sophisticated response acknowledges this but argues that the sentimentality is <em>intentional</em> and <em>strategic</em>. Dickens knew that statistics about child mortality did not move the wealthy to action; emotional appeal did. Tim is not meant to be a realistic portrayal of a disabled child but a rhetorical tool &mdash; a figure designed to make Scrooge (and the reader) <em>feel</em> the human cost of poverty so intensely that they are moved to act. The sentimentality is the point, not a flaw.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">7. The Narrator as Dickens&apos;s Rhetorical Weapon</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The omniscient narrator is not neutral. He exclaims, judges, and guides the reader&apos;s response at every turn. When describing Scrooge, the narrator uses aggressive, relentless language. When describing the Cratchits, the language becomes tender and warm. This is deliberate emotional manipulation &mdash; Dickens uses his narrator to ensure the reader responds in the &ldquo;right&rdquo; way. A top-level answer might argue that the narrator functions as a preacher, with the novella as his sermon. The reader is not invited to form their own judgement but is guided firmly toward Dickens&apos;s conclusion.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">8. Dickens&apos;s Autobiographical Connection</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Dickens experienced poverty firsthand as a child when his father was imprisoned in the Marshalsea debtors&apos; prison and he was sent to work in a blacking factory aged twelve. Young Scrooge&apos;s lonely abandonment at boarding school likely draws on Dickens&apos;s own feelings of childhood neglect. Fan&apos;s rescue mirrors the eventual restoration of family. This autobiographical dimension gives the novella its emotional authenticity. A Grade 9 response might argue that Dickens&apos;s personal experience gives him unique authority to write about both poverty and the possibility of redemption &mdash; he knew both intimately.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section id="practice" title="Practice Questions" badge="4 Questions" colour="bg-primary">
            <p className="text-sm text-muted-foreground mb-6">
              Write your answer below each question and receive AI-powered feedback tailored to GCSE English Literature mark schemes.
              Aim for at least 150 words per response to get meaningful feedback.
            </p>
            <div className="space-y-8">
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 1</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Dickens present Scrooge&apos;s transformation in <em>A Christmas Carol</em>? Refer to the whole novella in your answer.
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="A Christmas Carol - How Dickens presents Scrooge's transformation across the novella"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 2</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Dickens use the character of the Ghost of Christmas Present to criticise Victorian society?
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="A Christmas Carol - How Dickens uses the Ghost of Christmas Present to criticise Victorian society"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 3</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Dickens present the theme of poverty and social responsibility in <em>A Christmas Carol</em>?
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="A Christmas Carol - How Dickens presents the theme of poverty and social responsibility"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 4</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Dickens use the Cratchit family to highlight the effects of inequality in Victorian England?
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="A Christmas Carol - How Dickens uses the Cratchit family to highlight Victorian inequality"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Public-domain notice */}
      <footer className="mx-auto max-w-5xl px-4 pb-12 text-center text-xs text-muted-foreground">
        <p>
          All quotations from <em>A Christmas Carol</em> by Charles Dickens
          (first published 1843) are in the public domain.
        </p>
      </footer>
    </>
  );
}
