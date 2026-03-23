"use client";

import { useState } from "react";
import { PracticeQuestion } from "@/components/PracticeQuestion";

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
            <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold text-accent-600">
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

function Quote({ text, speaker, chapter, analysis }: { text: string; speaker: string; chapter: string; analysis: string }) {
  return (
    <div className="rounded-lg border-l-4 border-accent bg-accent-50/40 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">{speaker} &mdash; {chapter}</p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function WomanInBlackRevisionPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">Gothic Fiction</span>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">AQA</span>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">Edexcel</span>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">CAIE</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Woman in Black &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Everything you need for your GCSE/IGCSE English Literature exam on Susan Hill&apos;s gothic novella.
          Chapter-by-chapter plot, character analysis, themes with evidence, key quotations, context, and exam technique.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {["Plot Summary", "Characters", "Themes", "Key Quotations", "Context", "Exam Tips", "Practice Questions"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent-50 hover:text-accent-600 transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4" id="plot-summary">
        {/* ────────────────────────────────────────── PLOT SUMMARY */}
        <Section id="plot" title="Chapter-by-Chapter Plot Summary" badge="9 Sections" colour="bg-gray-800" defaultOpen>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-muted-foreground">1</span>
                Christmas Eve (Frame Narrative)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Arthur Kipps, now an elderly man, sits with his family at Christmas. His stepchildren are telling ghost stories, but Arthur cannot participate and leaves the room, visibly disturbed. This framing device establishes that Arthur has experienced something genuinely traumatic. He decides to write down his story as a form of exorcism &mdash; to confront and release the terror that has haunted him for decades.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Points</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Frame narrative creates dramatic irony &mdash; we know something terrible happened</li>
                  <li>&bull; Arthur&apos;s refusal to tell ghost stories signals the reality of his experience</li>
                  <li>&bull; First-person retrospective narration gives the story credibility</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-muted-foreground">2</span>
                A London Particular
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Young Arthur Kipps, a junior solicitor, is sent by his employer Mr Bentley to attend the funeral of Mrs Alice Drablow at her remote house, Eel Marsh House, in the fictional town of Crythin Gifford. He must also sort through her papers. Arthur is confident and rational, dismissing any notion of the supernatural. The London fog (&ldquo;a London particular&rdquo;) foreshadows the mist and obscured vision that will dominate the story.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-muted-foreground">3</span>
                The Journey North
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Arthur travels by train to Crythin Gifford. The landscape changes from urban to rural, becoming increasingly bleak and isolated. He meets Mr Samuel Daily on the train, a local landowner who is friendly but evasive when Arthur mentions Eel Marsh House. The journey north symbolises Arthur&apos;s movement away from safety and rationality into the unknown.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-muted-foreground">4</span>
                The Funeral of Mrs Drablow
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Arthur attends Mrs Drablow&apos;s funeral at the local church. Very few people attend. During the service, Arthur notices a young woman with a wasted face standing at the back of the churchyard. She has a terrifyingly gaunt appearance with skin stretched tightly over her bones. When Arthur asks Mr Daily and the landlord about her, they react with visible fear and refuse to discuss her. This is Arthur&apos;s first sighting of the Woman in Black.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; First appearance of the Woman in Black at the funeral</li>
                  <li>&bull; The locals&apos; terrified silence when she is mentioned</li>
                  <li>&bull; Arthur&apos;s rational dismissal of their fears &mdash; dramatic irony</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-muted-foreground">5</span>
                Across the Causeway / Eel Marsh House
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Arthur travels across the Nine Lives Causeway to Eel Marsh House, which is cut off from the mainland at high tide. The house is isolated, surrounded by marshes and sea fret. He begins sorting through Mrs Drablow&apos;s papers and hears the terrifying sound of a pony and trap sinking into the marshes, followed by the desperate screams of a child. He sees the Woman in Black again in the graveyard. Arthur is deeply shaken but cannot find any rational explanation. He is trapped by the rising tide and must spend the night.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-muted-foreground">6</span>
                The Sound of the Pony and Trap / The Letters
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Arthur spends a terrifying night at Eel Marsh House. He hears the ghostly sounds of the pony and trap again &mdash; a child&apos;s screams and the sucking of the marsh. He meets Mr Jerome, Mrs Drablow&apos;s land agent, who is terrified and unhelpful. Arthur discovers letters and documents revealing that Mrs Drablow had a sister, Jennet Humfrye, who had an illegitimate child. The child, Nathaniel, was taken from Jennet and given to Mrs Drablow to raise. Nathaniel died when the pony and trap carrying him sank into the marshes.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-muted-foreground">7</span>
                The Nursery / Spider
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Arthur discovers a locked room &mdash; a nursery, preserved exactly as it was when Nathaniel was alive. He finds toys, clothes, and a child&apos;s rocking chair that rocks by itself. The atmosphere of grief and rage is palpable. Mr Daily lends Arthur his dog, Spider, for companionship. Spider becomes a crucial companion but also senses the supernatural presence, whimpering and cowering when the Woman in Black appears.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-muted-foreground">8</span>
                Spider&apos;s Rescue / The Full Truth
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                During another stay at Eel Marsh House, Spider is lured into the marshes. Arthur desperately rescues her, nearly dying himself in the sucking mud. He sees the Woman in Black watching from the house with an expression of malevolent triumph. Mr Daily finally reveals the full story: Jennet Humfrye died of a wasting disease, consumed by hatred for her sister and grief for her son. Her ghost appears whenever a child is about to die &mdash; or causes a child&apos;s death. Every sighting of her has been followed by the death of a child in Crythin Gifford.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-muted-foreground">9</span>
                The Ending
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Arthur returns to London, marries his fianc&eacute;e Stella, and they have a baby son. He believes the nightmare is over. At a fair, Arthur sees the Woman in Black standing nearby. Moments later, the pony and trap his wife and child are riding in crashes. His son is killed instantly, and Stella dies from her injuries shortly after. The Woman in Black has taken her final revenge. Arthur is left alone, haunted forever. The ending is devastating because there is no escape, no resolution, and no justice &mdash; the supernatural wins completely.
              </p>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Points</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; The cyclical structure &mdash; the story ends where it begins, with Arthur haunted</li>
                  <li>&bull; The death of an innocent child mirrors Nathaniel&apos;s death</li>
                  <li>&bull; No resolution or redemption &mdash; subverts the traditional ghost story ending</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section id="characters" title="Character Profiles" badge="6 Characters" colour="bg-purple-600">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Arthur Kipps (Narrator)</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Arthur is both the young protagonist and the older narrator looking back on events. As a young man, he is rational, confident, and dismissive of superstition &mdash; a product of Victorian rationalism. He represents the educated, logical mindset that the gothic genre seeks to undermine. His arrogance in ignoring the locals&apos; warnings makes him a classic gothic protagonist: someone who ventures where they should not. As the older narrator, he is broken, traumatised, and deeply changed. His character arc traces the destruction of rational certainty by supernatural terror.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I was not superstitious, I was not even then a believer in ghosts"
                    speaker="Arthur Kipps"
                    chapter="Chapter 2"
                    analysis="Establishes Arthur's rationalism, which makes him a reliable narrator but also creates dramatic irony -- the reader knows his confidence will be shattered. His denial of the supernatural makes his eventual terror more powerful."
                  />
                  <Quote
                    text="I had been driven nearly mad, by the ghostly sounds... I was in a state of the most dreadful anticipation"
                    speaker="Arthur Kipps"
                    chapter="Chapter 6"
                    analysis="Shows Arthur's psychological deterioration. The phrase 'driven nearly mad' reveals the supernatural's power to destroy rational minds. 'Dreadful anticipation' captures the gothic technique of suspense -- fear of what might happen is worse than what does."
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">The Woman in Black (Jennet Humfrye)</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Jennet Humfrye is the ghost who haunts Eel Marsh House and Crythin Gifford. In life, she was an unmarried mother whose illegitimate son Nathaniel was forcibly taken from her and given to her sister, Alice Drablow. When Nathaniel died in the pony and trap accident on the marshes, Jennet was consumed by grief and rage. She died of a wasting disease but her spirit remained, driven by a desire for vengeance. She is both a victim and a villain: a woman wronged by Victorian social conventions who becomes a force of pure malevolence.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="a woman with a wasted face... she was suffering from some terrible wasting disease"
                    speaker="Arthur Kipps"
                    chapter="Chapter 4"
                    analysis="The 'wasting' reflects both her physical illness and her emotional consumption by grief and hatred. The word 'terrible' positions her as both pitiable and frightening. Her appearance externalises her inner torment."
                  />
                  <Quote
                    text="She wanted the boy... Whenever she has been seen, in some terrible way, a child has died"
                    speaker="Mr Daily"
                    chapter="Chapter 11"
                    analysis="Reveals the terrible pattern of the haunting. The connection between seeing the ghost and a child's death creates unbearable dramatic tension -- Arthur has already seen her multiple times. 'She wanted the boy' reduces her motivation to its primal essence: maternal grief twisted into murderous rage."
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Mr Samuel Daily</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  A prosperous local farmer and landowner who befriends Arthur. He is practical, kind, and honest, but deeply reluctant to discuss the Woman in Black. He represents the local knowledge that Arthur arrogantly dismisses. His reluctance to speak is not cowardice but a deep understanding of the danger. He eventually reveals the full truth to Arthur and tries to protect him. He lends Arthur his dog Spider and offers hospitality, making him the closest thing Arthur has to an ally.
                </p>
                <Quote
                  text="You are not the first to come to Crythin Gifford on business connected with that place, and others have suffered for it"
                  speaker="Mr Daily"
                  chapter="Chapter 9"
                  analysis="A warning that Arthur ignores. 'Others have suffered' hints at a long pattern of tragedy. Mr Daily's restraint in revealing information mirrors the gothic tradition of knowledge withheld -- the truth emerges gradually, increasing tension."
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Mrs Alice Drablow</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The deceased owner of Eel Marsh House whose death brings Arthur to Crythin Gifford. She raised Jennet&apos;s son Nathaniel as her own, effectively complicit in the Victorian system that punished unmarried mothers. She lived alone in the isolated house, feared and avoided by the townspeople. Her papers reveal the family&apos;s dark history.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Keckwick</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The local man who drives Arthur across the causeway to Eel Marsh House in his pony and trap. He is silent and uncommunicative, refusing to discuss the house or its history. The pony and trap he drives is deeply symbolic &mdash; it echoes the pony and trap that carried Nathaniel to his death. Keckwick&apos;s silence contributes to the atmosphere of fear and secrets.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Spider (the Dog)</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Mr Daily&apos;s dog, lent to Arthur as a companion at Eel Marsh House. Spider serves multiple functions: she provides comfort and normality; her animal instincts detect the supernatural presence (she whimpers, cowers, and refuses to enter certain rooms); and her near-death in the marshes parallels Nathaniel&apos;s drowning. Animals in gothic fiction often serve as barometers of supernatural activity.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title="Major Themes" badge="7 Themes" colour="bg-emerald-600">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-gray-700" />
                  Isolation and Vulnerability
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Isolation is central to the novel&apos;s horror. Eel Marsh House is physically isolated &mdash; cut off by the tide, surrounded by marshes, accessible only via the Nine Lives Causeway. This geographical isolation mirrors Arthur&apos;s psychological isolation: he is alone with the ghost, unable to communicate his terror to others. The locals isolate themselves from him by refusing to discuss the haunting. Hill uses isolation to create vulnerability &mdash; Arthur cannot escape and has no one to help him. This connects to the gothic tradition of isolated settings where characters are at the mercy of supernatural forces.
                </p>
                <Quote
                  text="I was quite alone out here... and I became aware of how exposed and vulnerable I was"
                  speaker="Arthur Kipps"
                  chapter="Chapter 5"
                  analysis="'Exposed and vulnerable' captures the essence of gothic horror -- the removal of all safety and comfort. The marshes offer no shelter, no hiding place. Arthur's self-awareness makes his fear more acute: he knows he is in danger but cannot leave."
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-violet-500" />
                  The Supernatural and Fear
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Unlike many ghost stories, Hill presents the supernatural as genuinely real and genuinely dangerous. There is no rational explanation for the events &mdash; the ghost is not a hallucination or a hoax. Arthur&apos;s Victorian rationalism is useless against Jennet&apos;s ghost. Hill builds fear through atmosphere, sound, and suggestion rather than graphic horror: the sounds of the pony and trap, the child&apos;s cry, the rocking chair, the figure in the graveyard. The technique of withholding information &mdash; delaying the full revelation &mdash; creates sustained tension throughout.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="I heard the noise of the pony and trap... the cry of a child, a sobbing child, coming from the marshes"
                    speaker="Arthur Kipps"
                    chapter="Chapter 6"
                    analysis="The ghostly sounds are a replay of Nathaniel's death -- a haunting loop that cannot be stopped. The auditory horror is more effective than visual because it forces the reader to imagine the scene. Sound carries across the empty marshes, making escape impossible."
                  />
                  <Quote
                    text="I did not believe in ghosts. But... the sounds I had heard... I could not account for"
                    speaker="Arthur Kipps"
                    chapter="Chapter 7"
                    analysis="Arthur's rational framework crumbles. The ellipsis mirrors his hesitation -- his certainty fragmenting. Hill shows that the supernatural doesn't need to be believed in to be real and dangerous."
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  Grief and Loss
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Grief drives the entire narrative. Jennet&apos;s grief at losing her son is so intense that it transcends death, becoming a malevolent supernatural force. Her grief has curdled into a desire to inflict the same suffering on others. Arthur&apos;s grief at losing his wife and child at the novel&apos;s end mirrors Jennet&apos;s &mdash; the difference is that Arthur does not become vengeful. The novel suggests that grief, when combined with injustice, can become destructive and all-consuming. The preserved nursery is a physical manifestation of grief frozen in time.
                </p>
                <Quote
                  text="They could have let her keep the child... She had the right to him"
                  speaker="Mr Daily"
                  chapter="Chapter 11"
                  analysis="Reveals the injustice at the heart of the haunting. The simplicity of 'They could have' emphasises how preventable the tragedy was. The word 'right' raises questions about motherhood, social convention, and whose claim to a child is legitimate."
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  The Power of the Past
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The past in this novel is inescapable. Jennet&apos;s tragedy happened decades before Arthur arrives, but it continues to affect the present. The nursery is preserved, the sounds replay endlessly, and the ghost remains. The frame narrative reinforces this: even decades later, Arthur cannot escape his experience. Hill suggests that suppressing or ignoring the past does not make it go away &mdash; it festers and grows more dangerous.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  Innocence and Injustice
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novel is deeply concerned with the suffering of innocents. Nathaniel was an innocent child who died through no fault of his own. The children of Crythin Gifford who die because of Jennet&apos;s curse are entirely innocent. Arthur&apos;s son, killed at the end, is the most devastating example. Hill presents a world where justice does not operate: the innocent suffer and the supernatural curse cannot be lifted.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-teal-500" />
                  Secrecy and Silence
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The townspeople of Crythin Gifford maintain a conspiracy of silence about the Woman in Black. This silence is both self-protective and destructive: by refusing to speak, they leave Arthur unprepared. The original secret &mdash; Jennet&apos;s illegitimate child &mdash; was a product of Victorian shame about unmarried motherhood. The novel suggests that secrets and silence do not protect but rather perpetuate suffering.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-pink-500" />
                  The Gothic Setting
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Hill&apos;s setting is a masterclass in gothic atmosphere. The marshes, sea fret, isolation, decaying house, locked nursery, and graveyard are all traditional gothic elements used with precision. The landscape is not merely a backdrop but an active force: the tide traps Arthur, the mist disorients him, the marshes threaten to swallow him. Pathetic fallacy is used throughout &mdash; weather reflects emotional states and supernatural activity.
                </p>
                <Quote
                  text="the mist came rolling over the marshes... I could see nothing save yard upon yard of grey"
                  speaker="Arthur Kipps"
                  chapter="Chapter 5"
                  analysis="The mist symbolises obscured truth, danger, and the unknowable. 'Rolling' personifies it as an active, encroaching force. 'Nothing save grey' removes all colour and clarity -- Arthur is blind in a hostile landscape. The setting becomes a trap."
                />
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section id="quotations" title="Key Quotations" badge="20+ Quotes" colour="bg-amber-600">
            <p className="text-sm text-muted-foreground mb-4">
              Essential quotations organised by theme. Learn these for your exam &mdash; each can be applied to multiple themes and characters.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-3">Isolation and Setting</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="the most astonishingly bleak and featureless landscape" speaker="Arthur Kipps" chapter="Chapter 3"
                    analysis="The superlative 'most astonishingly' conveys Arthur's shock at the landscape's emptiness. 'Featureless' suggests a world stripped of comfort and familiarity -- a blank canvas onto which horror can be projected." />
                  <Quote text="all I could see was the flat, grey estuary and the grey sky, leaching one into the other" speaker="Arthur Kipps" chapter="Chapter 5"
                    analysis="The merging of sky and estuary ('leaching one into the other') blurs boundaries -- a key gothic technique. 'Grey' dominates, creating an oppressive, colourless world. 'Leaching' suggests something being drained away." />
                  <Quote text="cut off by the tide... I was marooned" speaker="Arthur Kipps" chapter="Chapter 5"
                    analysis="'Marooned' positions Arthur as a castaway, completely isolated and powerless. The tide is an indifferent natural force that traps him with the supernatural." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Fear and the Supernatural</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="I do not think I was afraid of anything 'supernatural'... I was in a state of... nervous dread" speaker="Arthur Kipps" chapter="Chapter 5"
                    analysis="The inverted commas around 'supernatural' show Arthur's scepticism even as he experiences it. 'Nervous dread' -- not outright terror but a sustained, corrosive anxiety. Hill specialises in this slow-burn fear rather than shock." />
                  <Quote text="the sounds were... the crying of a child, a sobbing child, coming from the marshes" speaker="Arthur Kipps" chapter="Chapter 6"
                    analysis="The repetition of 'child' and the specificity of 'sobbing' makes this viscerally disturbing. A child's cry triggers a primal protective instinct." />
                  <Quote text="I saw her... her face was in shadow but her expression... was one of extreme malevolence and hatred and loathing" speaker="Arthur Kipps" chapter="Chapter 8"
                    analysis="The triple noun phrase 'malevolence and hatred and loathing' builds intensity through accumulation. Each word is stronger than the last. The 'shadow' on her face is both literal and metaphorical." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Grief and Revenge</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="she had gone mad with grief and hatred... she vowed that she would be revenged" speaker="Mr Daily" chapter="Chapter 11"
                    analysis="'Mad with grief' shows grief as a force that destroys sanity. 'Vowed' gives her revenge a deliberate, oath-like quality -- it is not spontaneous but calculated and eternal." />
                  <Quote text="a child had died... Whenever she has been seen... a child has died" speaker="Mr Daily" chapter="Chapter 11"
                    analysis="The repetition of 'a child has died' creates a drumbeat of horror. The causal link between sighting and death is absolute and unavoidable. The present perfect tense shows this is an ongoing pattern." />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3">Arthur&apos;s Transformation</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="I was in a mood of defiant, almost exhilarated determination" speaker="Arthur Kipps" chapter="Chapter 5"
                    analysis="Early Arthur: confident, even excited by the challenge. 'Defiant' shows he is deliberately dismissing the danger. 'Exhilarated' is almost reckless -- his youthful arrogance will be brutally punished." />
                  <Quote text="I had never been in a place that had such an effect upon me... a place of utter desolation" speaker="Arthur Kipps" chapter="Chapter 5"
                    analysis="His confidence begins to crack. 'Never' and 'utter' are absolutes -- this place exceeds all his previous experience. 'Desolation' means both emptiness and despair." />
                  <Quote text="They asked for a ghost story at Christmas. I have one. A true one. But it is not one I can tell aloud" speaker="Arthur Kipps" chapter="Chapter 1"
                    analysis="The frame narrative's opening. 'True' separates his experience from mere entertainment. 'Cannot tell aloud' -- the trauma is too great for speech, requiring the distance of writing." />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section id="context" title="Context" colour="bg-cyan-600">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground">The Gothic Tradition</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <em>The Woman in Black</em> (1983) is a deliberate homage to the Victorian and Edwardian ghost story tradition. Hill draws on writers like M.R. James, Henry James (<em>The Turn of the Screw</em>), and Charles Dickens. Key gothic conventions she uses include: an isolated, decaying setting; a rational protagonist whose worldview is challenged; atmospheric tension built through suggestion; a supernatural threat linked to past injustice; and a frame narrative.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Victorian Attitudes to Unmarried Mothers</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novel is set in the late Victorian / Edwardian period, when having a child outside marriage brought intense social shame. Unmarried mothers were ostracised, and their children were often taken away. Jennet Humfrye&apos;s story reflects this cruelty: her son was removed and given to her sister because society deemed an unmarried mother unfit. This injustice is the root cause of the haunting. Hill uses the ghost story to critique a society that punished women for sexual transgression while ignoring the emotional bonds between mother and child.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Role of Women</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Jennet&apos;s powerlessness reflects the limited agency of women in Victorian society. She could not keep her own child, could not challenge the family&apos;s decision, and was effectively silenced. Her ghost can be read as a feminist symbol &mdash; a woman who refuses to be silenced even in death. However, her vengeance targets innocent children, complicating any straightforward feminist reading.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Rationalism vs the Supernatural</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Victorian era was characterised by a tension between scientific rationalism and belief in the supernatural. Spiritualism (seances, mediums) was hugely popular alongside scientific progress. Arthur Kipps represents the rational, scientific worldview; the ghost represents everything that rationalism cannot explain. Hill&apos;s novel suggests that dismissing the irrational does not make it less dangerous.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Susan Hill and the Modern Ghost Story</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Susan Hill wrote <em>The Woman in Black</em> in 1983, consciously reviving the traditional ghost story in a literary era dominated by realism and postmodernism. The novel&apos;s success (and its famous stage adaptation, running in London&apos;s West End since 1989) proves the enduring power of the ghost story form. Hill strips the ghost story to its essentials: atmosphere, isolation, a wronged spirit, and devastating consequences.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── EXAM TIPS */}
        <div id="exam-tips">
          <Section id="exam-tips" title="Exam Tips" colour="bg-primary">
            <div className="space-y-6">
              <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4">
                <h3 className="font-bold text-foreground">Structure Your Essay</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Introduction:</strong> Briefly address the question, mention the text&apos;s genre (gothic ghost story), and outline your argument.</li>
                  <li>&bull; <strong>Each paragraph:</strong> Point &rarr; Evidence (quotation) &rarr; Analysis (language/structure) &rarr; Context &rarr; Link back to question.</li>
                  <li>&bull; <strong>Conclusion:</strong> Summarise your argument and offer a final insight or alternative reading.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
                <h3 className="font-bold text-foreground">Key Techniques to Discuss</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>First-person narration:</strong> Creates intimacy and reliability but limits perspective &mdash; we only see what Arthur sees.</li>
                  <li>&bull; <strong>Frame narrative:</strong> Creates dramatic irony (we know something terrible happened) and bookends the story.</li>
                  <li>&bull; <strong>Pathetic fallacy:</strong> Weather mirrors emotional states &mdash; fog, mist, darkness reflect danger and the unknown.</li>
                  <li>&bull; <strong>Foreshadowing:</strong> The London fog, the locals&apos; silence, the isolated setting all prepare us for horror.</li>
                  <li>&bull; <strong>Sound imagery:</strong> Hill relies heavily on sound (the pony and trap, child&apos;s cry, rocking chair) rather than visual horror.</li>
                  <li>&bull; <strong>Withholding information:</strong> The truth about the Woman in Black is revealed gradually, building suspense.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4">
                <h3 className="font-bold text-foreground">Common Mistakes to Avoid</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>&bull; Do not simply retell the story &mdash; analyse <em>how</em> Hill creates effects.</li>
                  <li>&bull; Do not call the ghost &ldquo;evil&rdquo; without nuance &mdash; she is also a victim of injustice.</li>
                  <li>&bull; Do not ignore context &mdash; the Victorian setting is essential to understanding Jennet&apos;s story.</li>
                  <li>&bull; Do not confuse the novel with the film or stage play &mdash; they have significant differences.</li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section id="practice" title="Practice Questions" badge="4 Questions" colour="bg-orange-600">
            <div className="space-y-6">
              <PracticeQuestion
                question="How does Susan Hill create a sense of fear and tension in The Woman in Black?"
                marks={30}
                examBoard="AQA"
                subject="English Literature"
                topic="The Woman in Black - Fear and Tension"
                minWords={200}
                timed
                timeLimitMinutes={25}
                modelAnswer="Hill creates fear through atmosphere, sound, and the withholding of information. The isolated setting of Eel Marsh House, cut off by the tide, traps Arthur with the ghost, removing any possibility of escape. The ghostly sounds of the pony and trap -- 'the crying of a child, a sobbing child' -- are more terrifying than visual horror because they force the reader to imagine Nathaniel's death. Hill uses the first-person narrator to limit our knowledge to Arthur's perspective, so we share his confusion and fear. The gradual revelation of the Woman in Black's identity and purpose builds sustained tension across the novel. The frame narrative tells us from the outset that something terrible happened, creating dramatic irony that makes every chapter an exercise in dread."
              />
              <PracticeQuestion
                question="How does Hill present the character of the Woman in Black as both a victim and a villain?"
                marks={25}
                examBoard="CAIE"
                subject="English Literature"
                topic="The Woman in Black - Character of Jennet Humfrye"
                minWords={200}
                timed
                timeLimitMinutes={20}
              />
              <PracticeQuestion
                question="Explore the significance of the setting in The Woman in Black."
                marks={40}
                examBoard="Edexcel"
                subject="English Literature"
                topic="The Woman in Black - Setting"
                minWords={250}
                timed
                timeLimitMinutes={30}
              />
              <PracticeQuestion
                question="How does Hill use the theme of grief to drive the narrative of The Woman in Black?"
                marks={30}
                examBoard="AQA"
                subject="English Literature"
                topic="The Woman in Black - Grief"
                minWords={200}
                timed
                timeLimitMinutes={25}
              />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
