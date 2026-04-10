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
    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs text-muted-foreground">{speaker} &mdash; {act}</p>
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function InspectorCallsRevisionPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-foreground uppercase tracking-wider">J.B. Priestley</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">AQA</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Edexcel</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">WJEC</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">OCR</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          An Inspector Calls &mdash; Complete Revision Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Everything you need to know for your GCSE English Literature exam. Act-by-act summary, character profiles,
          themes with evidence, 25+ key quotations with analysis, historical context, dramatic devices, and exam technique.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {["Plot Summary", "Characters", "Themes", "Key Quotations", "Context", "Dramatic Devices", "Essay Planning", "Grade 9 Points"].map((s) => (
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

      <div className="space-y-4">

        {/* ────────────────────────────────────────── PLOT SUMMARY */}
        <div id="plot-summary">
          <Section id="plot" title="Act-by-Act Plot Summary" badge="3 Acts" colour="bg-primary" defaultOpen>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-foreground">1</span>
                  Act 1 &mdash; The Inspector Arrives
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play opens in the Birling family&apos;s dining room in the fictional industrial city of Brumley in spring 1912. The family are celebrating the engagement of Sheila Birling to Gerald Croft, a union that will merge two rival businesses. Arthur Birling delivers a series of confident speeches, dismissing the possibility of war, praising the unsinkable Titanic, and insisting that &ldquo;a man has to mind his own business and look after himself and his own.&rdquo; The lighting is described as &ldquo;pink and intimate&rdquo; &mdash; a warm, complacent glow that reflects the family&apos;s self-satisfaction.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Inspector Goole arrives and announces that a young woman named Eva Smith has died in the infirmary after swallowing disinfectant. He shows Mr Birling a photograph (only letting one person see it at a time) and reveals that Birling sacked Eva from his factory in September 1910 after she led a strike demanding higher wages (from twenty-two and six to twenty-five shillings a week). Birling is unapologetic, calling it a matter of &ldquo;duty&rdquo; and insisting he cannot be held responsible. The lighting changes to &ldquo;brighter and harder&rdquo; when the Inspector arrives, symbolising scrutiny and exposure.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Sheila learns that she too was involved: she had Eva dismissed from Milwards, a dress shop, because Eva smiled when Sheila tried on a hat that did not suit her. Sheila is immediately remorseful and begins to accept responsibility. Gerald&apos;s reaction when the name &ldquo;Daisy Renton&rdquo; is mentioned reveals that he also knew the girl. The act ends with Sheila warning Gerald that the Inspector already knows everything.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments &amp; Stage Directions</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Lighting shifts from &ldquo;pink and intimate&rdquo; to &ldquo;brighter and harder&rdquo; when the Inspector enters</li>
                    <li>&bull; Birling&apos;s dramatic irony speeches about the Titanic and no war</li>
                    <li>&bull; The Inspector shows the photograph to one person at a time</li>
                    <li>&bull; Sheila&apos;s immediate guilt and acceptance of responsibility</li>
                    <li>&bull; Gerald&apos;s involuntary reaction to the name &ldquo;Daisy Renton&rdquo;</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-foreground">2</span>
                  Act 2 &mdash; Gerald and Mrs Birling
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Gerald confesses that he met Daisy Renton at the Palace Bar in March 1911. She was being pestered by Alderman Meggarty, and Gerald rescued her. He installed her as his mistress in a friend&apos;s flat, gave her money, and made her happy for a time. He ended the affair in September 1911, and Daisy went away to the seaside for two months to recover. Sheila, though hurt by the revelation, respects Gerald&apos;s honesty and recognises that he genuinely cared for Daisy. Gerald leaves the house, shaken.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The focus turns to Sybil Birling, who chairs the Brumley Women&apos;s Charity Organisation. Mrs Birling used her influence to have the pregnant Eva/Daisy&apos;s appeal for help rejected, because the girl had used the name &ldquo;Mrs Birling&rdquo; (which Sybil found impertinent) and because she felt the girl was giving herself airs. Despite Sheila&apos;s frantic warnings, Mrs Birling insists that the blame lies entirely with the father of the child, who should be made an example of and forced to accept public responsibility. She does not realise she is condemning her own son Eric, whose involvement is revealed at the act&apos;s cliff-hanger ending when Eric re-enters the room and everyone stares at him, having just understood the truth.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments &amp; Stage Directions</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Gerald&apos;s confession about his affair with Daisy Renton</li>
                    <li>&bull; Mrs Birling&apos;s prejudiced refusal to help Eva at the charity</li>
                    <li>&bull; Mrs Birling unknowingly condemning her own son Eric</li>
                    <li>&bull; Sheila&apos;s repeated warnings: &ldquo;Mother &mdash; stop &mdash; stop!&rdquo;</li>
                    <li>&bull; The cliff-hanger: Eric enters and the family stare at him &ldquo;guiltily&rdquo;</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-foreground">3</span>
                  Act 3 &mdash; Eric, the Aftermath, and the Final Call
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Eric confesses his part: he met Eva/Daisy at the Palace Bar, forced himself on her when drunk, and got her pregnant. He gave her money &mdash; about fifty pounds &mdash; which he had stolen from his father&apos;s office. When Eva discovered the money was stolen, she refused to accept any more and went to the Brumley Women&apos;s Charity Organisation for help, where Mrs Birling turned her away. Eric is distraught and turns on his mother: &ldquo;you killed her &mdash; and the child she&apos;d have had too.&rdquo;
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Inspector delivers his final speech about &ldquo;fire and blood and anguish&rdquo; and leaves. Immediately, Birling and Mrs Birling begin trying to discredit him. Gerald returns and reveals that he has confirmed there is no Inspector Goole on the police force. They phone the infirmary and learn that no girl has died that evening. Birling, Mrs Birling, and Gerald are hugely relieved, convinced it was all a hoax. Sheila and Eric, however, insist that their actions were still wrong regardless of whether the Inspector was real. The generational divide is stark: the older generation have learned nothing; the younger generation have been genuinely changed.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play ends with a devastating final twist: the phone rings. Birling answers and announces, his voice shaking, that a police inspector is on his way to ask questions about a girl who has just died on her way to the infirmary after swallowing disinfectant. The play ends here, with the cycle about to begin again.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Moments &amp; Stage Directions</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Eric&apos;s confession about the forced encounter and theft</li>
                    <li>&bull; The Inspector&apos;s final speech: &ldquo;fire and blood and anguish&rdquo;</li>
                    <li>&bull; Gerald&apos;s revelation that the Inspector was not real</li>
                    <li>&bull; The generational split: Sheila and Eric vs. the older Birlings</li>
                    <li>&bull; The final phone call &mdash; a real inspector is coming</li>
                    <li>&bull; Stage direction: Birling &ldquo;panic-stricken&rdquo; as the curtain falls</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section id="characters" title="Character Profiles" badge="8 Characters" colour="bg-purple-600">
            <div className="space-y-8">

              {/* Inspector Goole */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Inspector Goole</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-500/15 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:text-purple-300">Mouthpiece for Priestley</span>
                  <span className="rounded-full bg-purple-500/15 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:text-purple-300">Omniscient</span>
                  <span className="rounded-full bg-purple-500/15 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:text-purple-300">Moral Authority</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The Inspector is Priestley&apos;s mouthpiece and the play&apos;s moral centre. He is described as creating &ldquo;an impression of massiveness, solidity and purposefulness&rdquo; and speaks &ldquo;carefully, weightily.&rdquo; His name &mdash; &ldquo;Goole&rdquo; &mdash; is a homophone of &ldquo;ghoul,&rdquo; suggesting he may be a supernatural figure: a ghost, an angel, or the embodiment of collective conscience. He does not behave like a real police inspector: he shows the photograph to only one person at a time, he already seems to know all the answers, and he has an extraordinary power to make each character confess. His function is not to solve a crime but to force the Birlings (and the audience) to recognise their social responsibility. He is classless, unintimidated by wealth, and immovable. His final speech is essentially a socialist sermon, warning that if people do not learn to share responsibility for one another, they will be taught in &ldquo;fire and blood and anguish.&rdquo;
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="We don't live alone. We are members of one body. We are responsible for each other."
                    speaker="Inspector Goole"
                    act="Act 3"
                    analysis="The play's central message, delivered as a direct address. 'Members of one body' is a Biblical allusion (1 Corinthians 12:27), giving his words religious and moral authority. The repetition of 'we' is inclusive -- he speaks for all humanity, not just the Birlings."
                  />
                  <Quote
                    text="And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish."
                    speaker="Inspector Goole"
                    act="Act 3"
                    analysis="A prophetic warning that, for the 1945 audience, had already come true through two world wars. 'Fire and blood and anguish' evokes the trenches of WWI and the Blitz. The tricolon builds to a climax. For a 1912 setting, this is dramatic irony of devastating power."
                  />
                  <Quote
                    text="Public men, Mr Birling, have responsibilities as well as privileges."
                    speaker="Inspector Goole"
                    act="Act 1"
                    analysis="A direct challenge to Birling's capitalist philosophy. The Inspector redefines 'public men' -- not as men of status, but as men with obligations to the public. This echoes socialist arguments about the duties of the wealthy."
                  />
                  <Quote
                    text="It's better to ask for the earth than to take it."
                    speaker="Inspector Goole"
                    act="Act 1"
                    analysis="Defends Eva's right to strike for better wages. 'Ask for the earth' inverts the idiom -- what Birling dismisses as unreasonable demands, the Inspector frames as legitimate. Workers asking for fair pay is better than capitalists taking profit from exploitation."
                  />
                </div>
              </div>

              {/* Arthur Birling */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Arthur Birling</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Capitalist</span>
                  <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Self-Important</span>
                  <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Unchanging</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Arthur Birling is a &ldquo;heavy-looking, rather portentous man&rdquo; and a prosperous factory owner. He is Priestley&apos;s representative of Edwardian capitalist values: self-made, socially ambitious (he married above his class, and his daughter&apos;s engagement to Gerald Croft will strengthen business ties), and utterly convinced that a man&apos;s only responsibility is to himself and his family. He is presented as foolish through dramatic irony: his confident predictions about the Titanic being &ldquo;unsinkable&rdquo; and there being no chance of war would have been laughable to the 1945 audience. He sacked Eva Smith for leading a strike and feels no guilt whatsoever. Throughout the play, his primary concern is avoiding a &ldquo;public scandal.&rdquo; He represents the older generation who refuse to learn or change. After the Inspector is revealed as possibly fake, Birling is hugely relieved, having learned nothing about his moral responsibilities.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="a man has to mind his own business and look after himself and his own"
                    speaker="Mr Birling"
                    act="Act 1"
                    analysis="Birling's capitalist philosophy distilled into a single sentence. The repetition of 'his own' emphasises selfishness. Priestley places this speech immediately before the Inspector's arrival so that it is dramatically undercut -- the Inspector's very existence disproves it."
                  />
                  <Quote
                    text="the Titanic -- she sails next week... unsinkable, absolutely unsinkable"
                    speaker="Mr Birling"
                    act="Act 1"
                    analysis="The most famous example of dramatic irony in the play. The 1945 audience knows the Titanic sank on its maiden voyage. This immediately destroys Birling's credibility and, by extension, his entire worldview. If he is wrong about the Titanic, he is wrong about everything."
                  />
                  <Quote
                    text="I can't accept any responsibility. If we were all responsible for everything that happened to everybody we'd had anything to do with, it would be very awkward"
                    speaker="Mr Birling"
                    act="Act 1"
                    analysis="'Awkward' is bathetically inadequate for a girl's death. Birling cannot even conceive of genuine moral responsibility -- he can only see it as social inconvenience. The conditional 'if we were all responsible' is exactly the Inspector's argument, but Birling dismisses it as absurd."
                  />
                </div>
              </div>

              {/* Sybil Birling */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Sybil Birling</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Cold</span>
                  <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Prejudiced</span>
                  <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Unchanging</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Sybil Birling is described as &ldquo;about fifty, a rather cold woman and her husband&apos;s social superior.&rdquo; She is the most class-conscious character in the play. As chair of the Brumley Women&apos;s Charity Organisation, she had the power to help Eva/Daisy but chose not to, finding the girl&apos;s use of the name &ldquo;Mrs Birling&rdquo; offensive and believing that a working-class girl claiming to have been wronged by a man of higher class was simply lying. She is completely lacking in empathy, judging Eva entirely by class rather than need. Her cruelest moment is when she insists the father of the child should accept &ldquo;public responsibility&rdquo; &mdash; not realising she is condemning her own son Eric. Even when the truth is revealed, she refuses to accept blame. Like her husband, she represents the entrenched, unrepentant upper-middle class.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="Girls of that class"
                    speaker="Mrs Birling"
                    act="Act 2"
                    analysis="A dismissive phrase that reveals everything about Mrs Birling's worldview. 'That class' dehumanises Eva, reducing her to a social category. Mrs Birling cannot even conceive that a working-class girl might have genuine feelings or moral standards."
                  />
                  <Quote
                    text="I did nothing wrong myself and I'm not going to be bullied into admitting it"
                    speaker="Mrs Birling"
                    act="Act 3"
                    analysis="Her stubborn refusal to accept any guilt, even after learning her son's involvement. 'Bullied' positions herself as the victim -- a privileged woman reframing moral accountability as persecution. She remains unchanged, representing Priestley's warning about the intransigence of the upper classes."
                  />
                  <Quote
                    text="She was claiming elaborate fine feelings and scruples that were simply absurd in a girl in her position"
                    speaker="Mrs Birling"
                    act="Act 2"
                    analysis="Mrs Birling finds it 'absurd' that a working-class girl could have moral principles. 'Fine feelings' and 'scruples' are qualities she reserves for her own class. Eva's refusal of stolen money showed greater integrity than any Birling demonstrates -- an irony Mrs Birling cannot see."
                  />
                </div>
              </div>

              {/* Sheila Birling */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Sheila Birling</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">Transforms</span>
                  <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">Empathetic</span>
                  <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">Moral Growth</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Sheila begins the play as a &ldquo;pretty girl in her early twenties, very pleased with life and rather excited&rdquo; about her engagement. She is initially frivolous and sheltered, a product of her privileged upbringing. Her involvement with Eva &mdash; having her sacked from Milwards out of jealousy &mdash; reveals her potential for cruelty. However, Sheila is the character who undergoes the greatest transformation. She is the first to recognise the Inspector&apos;s power and to accept genuine responsibility, saying she will &ldquo;never, never do it again to anybody.&rdquo; As the play progresses, she takes on an almost Inspector-like role, warning her parents and Gerald that the Inspector already knows everything and that they should not try to hide the truth. By the end, she has fundamentally changed: she sees through her parents&apos; hypocrisy, challenges their values, and insists that the lessons learned matter regardless of whether the Inspector was real. She represents Priestley&apos;s hope for the younger generation.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="But these girls aren't cheap labour -- they're people"
                    speaker="Sheila"
                    act="Act 1"
                    analysis="Sheila challenges her father's dehumanising view of workers. The dash creates a corrective pause -- she is actively redefining how the working class should be seen. This directly opposes Birling's capitalist view and aligns Sheila with the Inspector's socialist message."
                  />
                  <Quote
                    text="I know I'm to blame -- and I'm desperately sorry"
                    speaker="Sheila"
                    act="Act 1"
                    analysis="Sheila's immediate acceptance of guilt contrasts with her parents' refusal. 'Desperately' shows genuine emotional engagement, not performative regret. The dash shows her train of thought -- blame and remorse are connected, not separated as they are for the older Birlings."
                  />
                  <Quote
                    text="You're pretending everything's just as it was before"
                    speaker="Sheila"
                    act="Act 3"
                    analysis="Sheila challenges her parents' attempt to return to comfortable ignorance after the Inspector leaves. She has understood the Inspector's lesson: knowledge creates permanent moral responsibility. Her frustration marks the generational divide at the play's heart."
                  />
                  <Quote
                    text="I tell you -- whoever that Inspector was, it was anything but a joke. You knew it then. You began to learn something. And now you've stopped."
                    speaker="Sheila"
                    act="Act 3"
                    analysis="Sheila directly accuses her parents of moral regression. 'Began to learn' implies a process they have abandoned. Her maturity here is striking -- she sounds more like the Inspector than the 'excited' girl of Act 1. Priestley shows that genuine moral change is possible."
                  />
                </div>
              </div>

              {/* Eric Birling */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Eric Birling</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">Transforms</span>
                  <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Troubled</span>
                  <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Drinks Heavily</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Eric is described as &ldquo;in his early twenties, not quite at ease, half shy, half assertive.&rdquo; The stage directions hint early on that something is wrong: he is &ldquo;squiffy&rdquo; (drunk) at dinner, and his parents are oblivious. Eric is the character with the most serious involvement in Eva&apos;s story: he forced himself upon her while drunk (an assault), got her pregnant, and stole money from his father&apos;s firm. His behaviour reveals the darker side of upper-class privilege &mdash; young men like Eric can exploit working-class women with impunity. However, like Sheila, Eric undergoes genuine moral change. He is horrified by what he has done and accepts responsibility. He turns on his mother with real anger when he learns she rejected Eva&apos;s plea for help. By the end, he stands with Sheila against his parents, insisting that their guilt is real regardless of whether the Inspector was genuine. He represents both the failings and the potential for redemption in the younger generation.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="you killed her -- and the child she'd have had too -- my child -- your own grandchild"
                    speaker="Eric"
                    act="Act 3"
                    analysis="Eric's accusation against his mother is devastating because each dash adds another layer of horror. The progression from 'her' to 'the child' to 'my child' to 'your own grandchild' personalises the tragedy, making Mrs Birling's refusal to help impossible to defend."
                  />
                  <Quote
                    text="I was in that state when a chap easily turns nasty"
                    speaker="Eric"
                    act="Act 3"
                    analysis="Eric's euphemistic confession of assault. 'That state' refers to drunkenness, 'turns nasty' to violence. The passive language ('turns') avoids direct agency, but the confession itself shows growing honesty. Priestley exposes how upper-class men were rarely held accountable for such actions."
                  />
                  <Quote
                    text="We did her in all right"
                    speaker="Eric"
                    act="Act 3"
                    analysis="Blunt, colloquial, and accepting of collective guilt. 'We' is crucial -- Eric understands that responsibility is shared. 'Did her in' is deliberately unvarnished, refusing the euphemisms his parents prefer. His directness contrasts with his father's attempts at evasion."
                  />
                </div>
              </div>

              {/* Gerald Croft */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Gerald Croft</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Aristocratic</span>
                  <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Complex</span>
                  <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">Ultimately Unchanged</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Gerald is &ldquo;an attractive chap about thirty&rdquo; and the son of Sir George Croft, whose company is a rival to Birling&apos;s. He is socially superior to the Birlings (landed aristocracy vs. new money). His involvement with Daisy Renton is the most ambiguous: he genuinely rescued her from Alderman Meggarty, gave her a home, and seems to have cared for her &mdash; but he also kept her as his mistress while engaged to Sheila, and discarded her when it suited him. He is the only character who made Eva &ldquo;happy for a time,&rdquo; but his kindness was ultimately self-serving. Gerald is the one who discovers the Inspector is not a real police officer and leads the effort to discredit the evening&apos;s events. He aligns with the older Birlings in his relief and desire to return to normal. He represents the ruling class who can acknowledge individual kindness but refuse systemic responsibility.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="She was young and pretty and warm-hearted -- and intensely grateful"
                    speaker="Gerald"
                    act="Act 2"
                    analysis="Gerald's description of Daisy reveals genuine feeling but also a troubling power dynamic. 'Intensely grateful' highlights the inequality -- she was grateful because she was desperate. His affection was real but conditional on her dependence."
                  />
                  <Quote
                    text="Everything's all right now, Sheila. What about this ring?"
                    speaker="Gerald"
                    act="Act 3"
                    analysis="Gerald's attempt to restore the engagement after the Inspector is discredited shows he has learned nothing. He wants to rewind to before the Inspector arrived. The ring symbolises the comfortable, unexamined life the older characters want to resume."
                  />
                </div>
              </div>

              {/* Eva Smith / Daisy Renton */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Eva Smith / Daisy Renton</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">Symbolic</span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">Everyman Figure</span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">Absent Presence</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Eva Smith never appears on stage, but she is the play&apos;s most important character. She represents every working-class person exploited by the wealthy. Her name is symbolic: &ldquo;Eva&rdquo; suggests Eve (the first woman, representing all women) and &ldquo;Smith&rdquo; is the most common English surname. She changes her name to &ldquo;Daisy Renton&rdquo; &mdash; &ldquo;Daisy&rdquo; suggests innocence and freshness, while &ldquo;Renton&rdquo; may echo &ldquo;rent,&rdquo; connecting her to the commodification of people. Her absence from the stage is deliberate: she has no voice, no power, no ability to speak for herself. Each Birling tells their own version of events, and Eva is constructed through their perspectives. Whether she is one girl or several is ambiguous and ultimately irrelevant &mdash; the point is that there are countless Eva Smiths being failed by society. She is shown to have dignity and moral courage: she refused stolen money, she led a strike for fair wages, and she tried to protect Eric from himself.
                </p>
                <div className="mt-3">
                  <Quote
                    text="She was a pretty, lively sort of girl who never did anybody any harm. But she died in misery and agony -- hating life"
                    speaker="Inspector Goole (about Eva)"
                    act="Act 3"
                    analysis="The contrast between 'pretty, lively' and 'misery and agony' encapsulates the play's tragedy. The dash separates who she was from what she became. 'Never did anybody any harm' makes the Birlings' treatment of her inexcusable. 'Hating life' inverts her former vitality."
                  />
                </div>
              </div>

              {/* Edna */}
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Edna</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">Minor Role</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">Symbolic</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Edna is the Birlings&apos; parlour maid and has very few lines, but her presence is significant. She represents the working class who are invisible to the Birlings &mdash; present in the house, serving their needs, but never acknowledged as a person. She is the one who announces the Inspector&apos;s arrival, inadvertently introducing the force that will expose her employers. Her silence and servitude are a reminder that there is a real Eva Smith in every wealthy household: someone whose labour is taken for granted, whose feelings are never considered, and who could easily be discarded. She provides a quiet contrast to the Birlings&apos; noisy self-justifications.
                </p>
              </div>

            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── THEMES */}
        <div id="themes">
          <Section id="themes" title="Major Themes" badge="7 Themes" colour="bg-emerald-600">
            <div className="space-y-8">

              {/* Social Responsibility */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-primary" />
                  Social Responsibility
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play&apos;s central theme. Priestley argues that we are all responsible for one another and that society cannot function if individuals pursue only self-interest. Birling represents the capitalist view that &ldquo;a man has to mind his own business,&rdquo; while the Inspector embodies the socialist conviction that &ldquo;we are members of one body.&rdquo; Each Birling&apos;s treatment of Eva demonstrates a failure of social responsibility: sacking her for requesting fair wages, having her dismissed out of jealousy, using her as a mistress, assaulting her, and denying her charity. The play asks the audience directly: are you a Birling, or will you accept responsibility? Writing in 1945, Priestley wanted to influence the post-war settlement toward a welfare state &mdash; a society built on collective responsibility rather than individual profit.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="We are members of one body. We are responsible for each other."
                    speaker="Inspector"
                    act="Act 3"
                    analysis="The play's thesis statement. 'One body' uses the metaphor of a single organism -- harming one part harms all. This is both a socialist and a Christian idea, making it resonate across political and religious lines."
                  />
                  <Quote
                    text="If men will not learn that lesson, then they will be taught it in fire and blood and anguish"
                    speaker="Inspector"
                    act="Act 3"
                    analysis="For the 1945 audience, this prophecy had already been fulfilled by two world wars. Priestley argues that the wars were a consequence of social irresponsibility -- the ruling class's failure to care for the working class led to national catastrophe."
                  />
                </div>
              </div>

              {/* Class */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  Class
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Priestley exposes the rigid Edwardian class system and the casual cruelty it enables. The Birlings see class as natural and fixed: Mrs Birling dismisses Eva as a &ldquo;girl of that class,&rdquo; assuming she cannot have genuine feelings or morals. Birling sacks Eva partly because workers demanding better pay threatens the class hierarchy. Gerald&apos;s relationship with Daisy is shaped by class: he has the power and she has none, making genuine equality impossible. Even within the Birling family, class dynamics operate &mdash; Sybil married beneath her, and Birling is anxious about his social status (hoping for a knighthood, emphasising his connections). The Inspector ignores class entirely, treating each character the same regardless of wealth or position. Eva&apos;s name (&ldquo;Smith&rdquo;) represents everyman, suggesting her story is the story of an entire class.
                </p>
                <div className="mt-3">
                  <Quote
                    text="Girls of that class"
                    speaker="Mrs Birling"
                    act="Act 2"
                    analysis="Three words that encapsulate the entire class system. 'That class' is deliberately vague and dismissive -- Mrs Birling does not even need to specify which class. The contempt is so ingrained it barely needs articulating. Priestley uses this phrase to show how class prejudice dehumanises."
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-pink-500" />
                  Gender
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play exposes how women in 1912 were powerless, dependent on men, and vulnerable to exploitation. Eva&apos;s trajectory maps a woman&apos;s limited options: factory worker, shop assistant, kept mistress, pregnant and destitute, suicide. Each stage is determined by men&apos;s decisions. Birling sacks her; she is dismissed from Milwards because of Sheila&apos;s jealousy; Gerald keeps her as a mistress; Eric assaults her. Even Mrs Birling, who has social power, uses it to uphold patriarchal values, blaming Eva for being &ldquo;impertinent&rdquo; and insisting the man should take responsibility for the pregnancy. Sheila&apos;s transformation can be read as a feminist awakening &mdash; she moves from being a compliant daughter and fianc&eacute;e to an independent moral voice who challenges male authority. Gerald&apos;s offer of the ring at the end suggests he expects Sheila to return to her pre-Inspector role; her refusal shows she has outgrown it.
                </p>
                <div className="mt-3">
                  <Quote
                    text="She was young and pretty and warm-hearted -- and intensely grateful"
                    speaker="Gerald"
                    act="Act 2"
                    analysis="Gerald's description reduces Daisy to qualities that benefit him: youth, beauty, warmth, gratitude. Her 'intense gratitude' reveals the power imbalance -- she had to be grateful because she had no other options. The adjectives catalogue her as an object of male pleasure."
                  />
                </div>
              </div>

              {/* Age / Generational Divide */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500" />
                  Age and Generational Divide
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  One of the play&apos;s clearest structural contrasts. The older generation (Arthur, Sybil, and to an extent Gerald) refuse to accept responsibility and try to return to normal when the Inspector is discredited. The younger generation (Sheila and Eric) are genuinely changed by the experience and insist that their guilt remains real. Priestley uses this divide to make a political argument: in 1945, he was urging young voters not to return to the pre-war status quo but to build a new, more just society (the welfare state). The older Birlings represent the complacent pre-war establishment; Sheila and Eric represent the hope that the next generation will do better. Birling&apos;s dismissal of Eric&apos;s views (&ldquo;you&apos;re the one I blame for this&rdquo;) shows how the older generation silences youthful idealism.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Quote
                    text="You're pretending everything's just as it was before"
                    speaker="Sheila"
                    act="Act 3"
                    analysis="Sheila identifies her parents' strategy: denial and regression. 'Pretending' accuses them of wilful self-deception. The generational conflict is at its sharpest here -- Sheila can see what her parents refuse to acknowledge."
                  />
                  <Quote
                    text="The famous younger generation who know it all. And they can't even take a joke"
                    speaker="Mr Birling"
                    act="Act 3"
                    analysis="Birling's dismissal of his children's moral seriousness. Calling the evening a 'joke' reveals his inability to treat moral questions seriously. 'The famous younger generation' is sarcastic, patronising, and ultimately self-defeating -- the audience sides with the young."
                  />
                </div>
              </div>

              {/* Morality */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-violet-500" />
                  Morality
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Priestley distinguishes between performative morality (the Birlings&apos; respectable facade) and genuine morality (accepting responsibility and changing behaviour). The Birlings see themselves as moral people: they attend church, run charities, and observe social conventions. But their treatment of Eva reveals the hollowness of this morality. Mrs Birling chairs a charity yet refuses help to those she deems undeserving. Birling lectures on civic duty while exploiting his workers. The Inspector exposes what Priestley sees as the only true morality: treating every human being with dignity and accepting that our actions affect others. Eva herself demonstrates greater moral integrity than any Birling &mdash; she refuses stolen money and tries to protect Eric. The play argues that morality cannot be separated from social justice.
                </p>
              </div>

              {/* Power */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  Power
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play examines how power is used and abused. Each Birling uses their power &mdash; economic, social, or personal &mdash; against Eva, who has none. Birling wields economic power (sacking workers), Sheila wields consumer power (threatening to withdraw custom from Milwards), Mrs Birling wields institutional power (the charity committee), Gerald wields sexual and economic power over his mistress, and Eric wields physical and sexual power through assault. The Inspector disrupts the Birlings&apos; power: he is unintimidated by Birling&apos;s threats of connections and cuts through their evasions. His power is moral rather than social or economic, and this makes it more formidable. The final phone call restores the Inspector&apos;s authority and strips the Birlings of their recovered complacency.
                </p>
              </div>

              {/* Capitalism vs Socialism */}
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-orange-500" />
                  Capitalism vs Socialism
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play is a direct political argument. Birling represents laissez-faire capitalism: he believes in low wages, high profits, individual responsibility, and minimal interference. The Inspector represents Priestley&apos;s democratic socialism: collective responsibility, workers&apos; rights, and the welfare of all. Birling dismisses socialism as &ldquo;cranks&rdquo; talk and mocks &ldquo;community and all that nonsense.&rdquo; The Inspector&apos;s final speech is a passionate case for socialism. Priestley wrote the play in 1945, when Britain was choosing between continuing the pre-war capitalist system or building a welfare state. The play argues that capitalism led to exploitation, inequality, and ultimately to war. The 1945 audience voted Labour in a landslide, implementing the NHS and the welfare state &mdash; exactly the kind of collective responsibility Priestley advocated.
                </p>
                <div className="mt-3">
                  <Quote
                    text="community and all that nonsense"
                    speaker="Mr Birling"
                    act="Act 1"
                    analysis="Birling's contemptuous dismissal of socialist ideas. 'Nonsense' shows he cannot take collective responsibility seriously. Priestley places this line strategically so the Inspector's arrival immediately disproves it. The 1945 audience, having survived the war through collective effort, would find Birling's words absurd."
                  />
                </div>
              </div>

            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section id="quotations" title="Key Quotations with Analysis" badge="27 Quotes" colour="bg-primary">
            <p className="text-sm text-muted-foreground mb-4">Essential quotations organised by character. Learn these for your exam &mdash; short quotations embedded in analytical sentences score highest.</p>

            <div className="space-y-6">
              {/* Inspector */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3">Inspector Goole</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="We don't live alone. We are members of one body. We are responsible for each other." speaker="Inspector" act="Act 3" analysis="The play's thesis. 'One body' is a Biblical allusion (1 Corinthians 12) suggesting a Christian duty of care alongside the socialist argument. Short, declarative sentences give it the force of a commandment." />
                  <Quote text="if men will not learn that lesson, then they will be taught it in fire and blood and anguish" speaker="Inspector" act="Act 3" analysis="Prophetic warning fulfilled by WWI and WWII. The tricolon 'fire and blood and anguish' escalates in intensity. 'Will be taught' -- the passive voice implies a force greater than human agency will enforce the lesson." />
                  <Quote text="Public men, Mr Birling, have responsibilities as well as privileges" speaker="Inspector" act="Act 1" analysis="Directly challenges Birling's capitalist philosophy. The balance of 'responsibilities' against 'privileges' implies they are inseparable -- you cannot enjoy one without accepting the other." />
                  <Quote text="It's better to ask for the earth than to take it" speaker="Inspector" act="Act 1" analysis="Defends the workers' strike. 'Ask for the earth' -- what Birling sees as unreasonable, the Inspector reframes as legitimate. 'Take it' -- the real crime is capitalist exploitation, not workers' demands." />
                </div>
              </div>

              {/* Mr Birling */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3">Arthur Birling</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="a man has to mind his own business and look after himself and his own" speaker="Mr Birling" act="Act 1" analysis="Birling's capitalist creed. Repetition of 'his own' emphasises selfishness. Placed before the Inspector's entrance so it is immediately undercut. The audience is invited to reject this worldview." />
                  <Quote text="unsinkable, absolutely unsinkable" speaker="Mr Birling" act="Act 1" analysis="The Titanic prediction that destroys Birling's credibility. 'Absolutely' intensifies his certainty, making his wrongness more devastating. If he is wrong about a ship, his entire philosophy is unreliable." />
                  <Quote text="the Germans don't want war" speaker="Mr Birling" act="Act 1" analysis="Another catastrophically wrong prediction. For the 1945 audience, two world wars prove him wrong. Priestley systematically demolishes Birling's authority as a thinker and leader." />
                  <Quote text="I can't accept any responsibility" speaker="Mr Birling" act="Act 1" analysis="His refrain throughout the play. 'Can't' is telling -- he presents it as impossibility rather than choice. He literally cannot conceive of being responsible for a worker's welfare." />
                  <Quote text="a man has to make his own way" speaker="Mr Birling" act="Act 1" analysis="Echoes Social Darwinism -- only the strong should survive. This 'self-made man' rhetoric ignores the labour of those who made his wealth possible. The Inspector's arrival challenges this individualism." />
                </div>
              </div>

              {/* Mrs Birling */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3">Sybil Birling</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="Girls of that class" speaker="Mrs Birling" act="Act 2" analysis="Casual, devastating class prejudice in three words. 'That class' refuses to even name the working class -- they are beneath specification. Dehumanises Eva and everyone like her." />
                  <Quote text="She was claiming elaborate fine feelings and scruples that were simply absurd in a girl in her position" speaker="Mrs Birling" act="Act 2" analysis="Mrs Birling cannot believe a working-class girl could have morals. 'Absurd' -- she finds Eva's integrity laughable. Eva's refusal of stolen money showed greater ethics than any Birling." />
                  <Quote text="I did nothing wrong" speaker="Mrs Birling" act="Act 3" analysis="Total refusal of guilt. Her certainty is unshakeable -- class position equals moral correctness in her mind. She is the character who changes least, representing the immovable upper class." />
                </div>
              </div>

              {/* Sheila */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3">Sheila Birling</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="But these girls aren't cheap labour -- they're people" speaker="Sheila" act="Act 1" analysis="Sheila redefines workers as human beings, not commodities. The corrective dash shows her actively challenging her father's language and values. Aligns her with the Inspector's worldview." />
                  <Quote text="I know I'm to blame -- and I'm desperately sorry" speaker="Sheila" act="Act 1" analysis="Immediate acceptance of guilt. 'Desperately' shows genuine emotional engagement. Contrasts sharply with her parents' refusal. 'I know' -- she does not need convincing." />
                  <Quote text="You're pretending everything's just as it was before" speaker="Sheila" act="Act 3" analysis="Sheila sees through her parents' denial. 'Pretending' accuses them of wilful self-deception. She understands that knowledge creates permanent responsibility." />
                  <Quote text="whoever that Inspector was, it was anything but a joke" speaker="Sheila" act="Act 3" analysis="Sheila insists on the moral reality regardless of the Inspector's identity. 'Anything but a joke' rejects her father's attempt to laugh it off. Maturity and moral seriousness define the new Sheila." />
                </div>
              </div>

              {/* Eric */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3">Eric Birling</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="you killed her -- and the child she'd have had too -- my child -- your own grandchild" speaker="Eric" act="Act 3" analysis="Each dash adds a new layer of accusation. The progression from abstract ('her') to personal ('my child') to familial ('your own grandchild') makes Mrs Birling's guilt inescapable." />
                  <Quote text="We did her in all right" speaker="Eric" act="Act 3" analysis="Blunt acceptance of collective guilt. 'We' is inclusive -- the whole family is complicit. 'All right' is grimly emphatic. Eric's directness opposes his parents' euphemisms and evasions." />
                  <Quote text="you're not the kind of father a chap could go to when he's in trouble" speaker="Eric" act="Act 3" analysis="Exposes the Birling family's dysfunction. Despite Birling's paternalistic authority, Eric felt unable to ask for help. The family unit Birling claims to protect has failed from within." />
                </div>
              </div>

              {/* Gerald */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3">Gerald Croft</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="She was young and pretty and warm-hearted -- and intensely grateful" speaker="Gerald" act="Act 2" analysis="Gerald catalogues Daisy's qualities as they benefited him. 'Intensely grateful' exposes the power dynamic -- her gratitude came from desperation, not choice." />
                  <Quote text="Everything's all right now, Sheila" speaker="Gerald" act="Act 3" analysis="Gerald wants to erase the evening and restore the status quo. 'All right' means socially comfortable, not morally resolved. His offer of the ring shows he has not understood Sheila's transformation." />
                </div>
              </div>

              {/* Eva / Stage Directions */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-3">About Eva / Key Stage Directions</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Quote text="She was a pretty, lively sort of girl who never did anybody any harm" speaker="Inspector (about Eva)" act="Act 3" analysis="Summarises Eva's character: vital, innocent, blameless. The past tense ('was') emphasises her destruction. 'Never did anybody any harm' makes the Birlings' treatment of her all the more damning." />
                  <Quote text="The lighting should be pink and intimate until the Inspector arrives, and then it should be brighter and harder" speaker="Stage direction" act="Opening" analysis="The most important stage direction in the play. 'Pink and intimate' = comfortable self-deception; 'brighter and harder' = scrutiny and exposure. The lighting literally embodies the play's moral arc." />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section id="context" title="Historical &amp; Social Context" badge="Essential" colour="bg-teal-600">
            <div className="space-y-6">

              <div className="rounded-lg bg-primary/5 p-4">
                <h3 className="font-bold text-foreground">When was it written vs when is it set?</h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-card p-4 shadow-md">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Set: 1912</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>&bull; Rigid class system; vast inequality between rich and poor</li>
                      <li>&bull; Women could not vote (suffrage not until 1918/1928)</li>
                      <li>&bull; No welfare state, NHS, or social safety net</li>
                      <li>&bull; Pre-World War I: British Empire at its height, widespread optimism among the upper classes</li>
                      <li>&bull; The Titanic sailed and sank in April 1912</li>
                      <li>&bull; Industrial unrest: strikes were common as workers demanded better conditions</li>
                      <li>&bull; The Liberal reforms (1906-1914) were beginning to introduce old-age pensions and national insurance</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-card p-4 shadow-md">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Written/Performed: 1945</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>&bull; End of World War II: Britain exhausted, but united by collective effort</li>
                      <li>&bull; 1945 general election: Labour landslide victory under Clement Attlee</li>
                      <li>&bull; Creation of the welfare state, NHS (1948), and nationalisation of key industries</li>
                      <li>&bull; Audience had lived through two world wars &mdash; Birling&apos;s predictions were proven catastrophically wrong</li>
                      <li>&bull; Mood of social reform: desire to build a fairer, more equal society</li>
                      <li>&bull; Class barriers had been weakened by the shared experience of wartime</li>
                      <li>&bull; Priestley himself was a prominent broadcaster and socialist campaigner</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground">J.B. Priestley&apos;s Socialism</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  John Boynton Priestley (1894-1984) was born in Bradford, a northern industrial city, and grew up witnessing poverty and inequality. He served in WWI and was horrified by the waste of working-class lives. During WWII, his BBC radio broadcasts (the &ldquo;Postscripts&rdquo;) reached millions and argued for social justice with such power that Churchill had them taken off air, seeing Priestley as a political threat. Priestley was instrumental in founding the Common Wealth Party and campaigning for the welfare state. <em>An Inspector Calls</em> is not a subtle play &mdash; it is a deliberate, passionate argument for socialism and collective responsibility, aimed at a 1945 audience who had the power to vote for a new kind of society.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Titanic</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Birling&apos;s prediction that the Titanic is &ldquo;unsinkable, absolutely unsinkable&rdquo; is the play&apos;s most devastating piece of dramatic irony. The Titanic sank on 15 April 1912, killing over 1,500 people. The disaster became a metaphor for the arrogance of the Edwardian age: a belief that technology, wealth, and progress made them invincible. The ship also exposed class inequality &mdash; first-class passengers were far more likely to survive than third-class. Priestley uses the Titanic to symbolise the entire worldview he is attacking: the complacent certainty of men like Birling that nothing can go wrong.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">World War I (1914-1918) and World War II (1939-1945)</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Birling confidently states that &ldquo;the Germans don&apos;t want war&rdquo; and that the world is progressing toward peace. The 1945 audience knew that two world wars had killed tens of millions. WWI (1914-18) shattered the Edwardian world Birling represents, killing a generation of young men &mdash; disproportionately from the working class. WWII (1939-45) further proved that selfish nationalism and unchecked capitalism lead to catastrophe. The Inspector&apos;s warning about &ldquo;fire and blood and anguish&rdquo; resonated powerfully with audiences who had survived the Blitz and lost family members. Priestley argues that the wars were partly caused by the selfishness and class division that characters like Birling embody.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Edwardian Class System</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  In 1912, British society was sharply divided by class. The upper and upper-middle classes (like the Birlings) enjoyed enormous wealth and privilege while the working class (like Eva) endured poverty, long hours, low wages, and no social protection. There was no NHS, no unemployment benefit, and no state pension beyond a very basic one introduced in 1909. If you lost your job, you relied on charity &mdash; charity controlled by people like Mrs Birling, who could refuse help on a whim. Women were doubly disadvantaged by class and gender. The play exposes how this system allowed the comfortable to ignore or exploit the vulnerable without consequence.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── DRAMATIC DEVICES */}
        <div id="dramatic-devices">
          <Section id="dramatic-devices" title="Dramatic Devices" badge="6 Devices" colour="bg-indigo-600">
            <div className="space-y-6">

              <div>
                <h3 className="font-bold text-foreground">Dramatic Irony</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The most important dramatic device in the play. Because the play is set in 1912 but was performed in 1945, the audience knows things the characters do not. Birling&apos;s predictions about the Titanic, the impossibility of war, and the unstoppable progress of capitalism were all proven wrong within a few years. This dramatic irony serves a crucial purpose: it destroys Birling&apos;s credibility from the start. If the audience cannot trust his factual predictions, they cannot trust his moral philosophy either. Every time Birling speaks with authority, the audience knows he is wrong, which makes the Inspector&apos;s opposing message all the more persuasive. The dramatic irony extends to the final phone call: the audience may suspect from the start that the Inspector is not what he seems, creating tension between what the characters know and what the audience suspects.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Three Unities</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Priestley observes the classical three unities of drama, derived from Aristotle: unity of time (the play takes place in a single evening in real time), unity of place (the entire play is set in the Birling dining room), and unity of action (there is a single plot with no subplots). This creates an intense, claustrophobic atmosphere &mdash; there is no escape for the characters or the audience. The single room becomes a pressure cooker in which each character is exposed in turn. The real-time structure means the audience experiences the revelations as they happen, without the release of scene changes or time jumps. This formal discipline also mirrors the Inspector&apos;s method: he is systematic, methodical, dealing with &ldquo;one person and one line of enquiry at a time.&rdquo;
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Well-Made Play</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <em>An Inspector Calls</em> follows the conventions of the &ldquo;well-made play&rdquo; (a term from 19th-century French drama): a tightly constructed plot with exposition, rising action, complications, climax, and d&eacute;nouement. Each revelation builds on the last; each character&apos;s involvement with Eva is progressively more serious (dismissal, sacking from a shop, mistress, assault, refusal of charity). The plot is structured like a chain of responsibility, with each link leading inevitably to the next. However, Priestley subverts the well-made play form with his ambiguous ending: instead of a neat resolution, the final phone call reopens all the questions the characters thought they had settled. The play does not end &mdash; it cycles.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Cliff-Hanger Ending</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play&apos;s ending is one of the most discussed in English Literature. The phone call announcing that a real inspector is on his way &mdash; and that a girl has just died &mdash; has several possible interpretations. It may suggest that the events are about to replay (a cyclical structure), giving the Birlings a second chance to respond differently. It may imply that the Inspector was a supernatural figure who foresaw the future. It may mean that there are many Eva Smiths, and the suffering continues. Whatever the interpretation, the effect is devastating: the Birlings&apos; relief is shattered, Birling is &ldquo;panic-stricken,&rdquo; and the audience is left with the Inspector&apos;s warning ringing in their ears. There is no comfortable resolution &mdash; the audience must leave the theatre and decide for themselves what kind of society they want.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">Lighting Changes</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Priestley&apos;s lighting direction is symbolic: &ldquo;pink and intimate&rdquo; before the Inspector arrives, changing to &ldquo;brighter and harder&rdquo; when he enters. &ldquo;Pink and intimate&rdquo; suggests warmth, comfort, and rose-tinted self-deception &mdash; the Birlings see themselves and the world through a flattering lens. &ldquo;Brighter and harder&rdquo; suggests interrogation, exposure, and truth. The lighting literally strips away their pretensions. This single stage direction encapsulates the entire play: the movement from comfortable illusion to uncomfortable truth. It also suggests the Inspector brings enlightenment &mdash; he forces the Birlings (and the audience) to see clearly.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">The Photograph Technique</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Inspector shows Eva&apos;s photograph to only one person at a time, preventing others from seeing it. This has been interpreted as both a dramatic technique (building suspense, maintaining his control of the investigation) and as evidence that the Birlings may be talking about different girls. The ambiguity is deliberate: it does not matter whether they are talking about one girl or many. The point is that each Birling contributed to the exploitation of vulnerable people. The photograph also functions as a mirror &mdash; each character sees in it a reflection of their own guilt.
                </p>
              </div>

            </div>
          </Section>
        </div>

        {/* ────────────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section id="essay-planning" title="Essay Planning for Common Questions" badge="6 Questions" colour="bg-rose-600">
            <p className="text-sm text-muted-foreground mb-4">
              Use the <strong>PEEL</strong> or <strong>PEEAL</strong> paragraph structure: Point, Evidence (quotation), Explanation, Analysis (of language/structure), Link (to question/context). Always embed short quotations within your sentences rather than copying out long passages.
            </p>

            <div className="space-y-6">

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">1. How does Priestley present the theme of responsibility?</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p><strong>Paragraph 1:</strong> Birling&apos;s rejection of responsibility (&ldquo;a man has to mind his own business&rdquo;). Analyse the repetition of &ldquo;his own.&rdquo; Context: capitalist individualism in Edwardian England. Dramatic irony undermines his position.</p>
                  <p><strong>Paragraph 2:</strong> The Inspector as Priestley&apos;s mouthpiece for collective responsibility (&ldquo;we are members of one body&rdquo;). Analyse the Biblical allusion and imperative tone. Link to Priestley&apos;s socialism and 1945 welfare state.</p>
                  <p><strong>Paragraph 3:</strong> Sheila&apos;s acceptance of responsibility vs. her parents&apos; refusal. &ldquo;I know I&apos;m to blame&rdquo; vs. &ldquo;I did nothing wrong.&rdquo; Generational divide as a structural device. Context: Priestley appeals to the younger 1945 audience.</p>
                  <p><strong>Paragraph 4:</strong> The ending &mdash; the phone call forces responsibility back onto the Birlings. Cyclical structure suggests that responsibility cannot be evaded. &ldquo;Fire and blood and anguish&rdquo; as prophecy fulfilled by two world wars.</p>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">2. How does Priestley present the character of Inspector Goole?</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p><strong>Paragraph 1:</strong> First impression &mdash; &ldquo;massiveness, solidity and purposefulness.&rdquo; Analyse the tricolon: he is immovable. Stage direction &ldquo;brighter and harder&rdquo; lighting = he brings truth. He is not intimidated by Birling&apos;s social status.</p>
                  <p><strong>Paragraph 2:</strong> His method &mdash; &ldquo;one person and one line of enquiry at a time.&rdquo; Systematic, controlled, inescapable. Shows the photograph one at a time. Contrast with Birling&apos;s bluster.</p>
                  <p><strong>Paragraph 3:</strong> His role as Priestley&apos;s mouthpiece. &ldquo;Public men have responsibilities as well as privileges.&rdquo; Analyse the balance of the sentence. Context: Priestley&apos;s socialist views, post-war desire for welfare state.</p>
                  <p><strong>Paragraph 4:</strong> His ambiguity &mdash; is he a ghost, time traveller, angel, or conscience? &ldquo;Goole&rdquo; = ghoul. He knows things before they are told. The final phone call validates his moral authority even if his identity is uncertain.</p>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">3. How does Priestley present the character of Sheila Birling?</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p><strong>Paragraph 1:</strong> Sheila at the start &mdash; &ldquo;very pleased with life and rather excited.&rdquo; Sheltered, privileged, materialistic (delighted by the ring). A product of her class and gender.</p>
                  <p><strong>Paragraph 2:</strong> Her involvement with Eva &mdash; having her sacked from Milwards out of jealousy. But her immediate guilt shows moral potential: &ldquo;I know I&apos;m to blame.&rdquo; Contrast with her mother&apos;s refusal.</p>
                  <p><strong>Paragraph 3:</strong> Her transformation &mdash; she takes on the Inspector&apos;s role, warning her parents: &ldquo;You&apos;re pretending everything&apos;s just as it was before.&rdquo; She sees through pretence. Analyse her language becoming more direct, assertive.</p>
                  <p><strong>Paragraph 4:</strong> Sheila at the end &mdash; she rejects Gerald&apos;s ring and her parents&apos; denial. She represents Priestley&apos;s hope for the younger generation. Context: 1945 audience choosing between old values and new.</p>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">4. How does Priestley explore ideas about class?</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p><strong>Paragraph 1:</strong> Mrs Birling &mdash; &ldquo;girls of that class.&rdquo; Three words that encapsulate class prejudice. She cannot believe a working-class girl could have morals. Context: rigid Edwardian class hierarchy.</p>
                  <p><strong>Paragraph 2:</strong> Eva as a symbol of the exploited working class. Her name: &ldquo;Eva&rdquo; = all women, &ldquo;Smith&rdquo; = everyman. She has no voice on stage, reflecting how the working class were silenced in 1912.</p>
                  <p><strong>Paragraph 3:</strong> Birling&apos;s economic power &mdash; sacking workers who asked for fair wages. &ldquo;It&apos;s my duty to keep labour costs down.&rdquo; Analyse &ldquo;duty&rdquo; &mdash; he reframes exploitation as moral obligation.</p>
                  <p><strong>Paragraph 4:</strong> The Inspector ignores class. He is unimpressed by Birling&apos;s connections and treats everyone equally. Context: 1945 &mdash; wartime had weakened class barriers. Priestley argues for a classless society.</p>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">5. How does Priestley use the character of Mr Birling to present ideas about capitalism?</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p><strong>Paragraph 1:</strong> Birling as spokesman for capitalism &mdash; &ldquo;a man has to mind his own business.&rdquo; Context: laissez-faire economics. Priestley makes Birling the voice of everything he opposes.</p>
                  <p><strong>Paragraph 2:</strong> Dramatic irony &mdash; Titanic, no war. Priestley destroys Birling&apos;s credibility to discredit his capitalist philosophy. The audience is positioned to reject everything Birling says.</p>
                  <p><strong>Paragraph 3:</strong> His treatment of Eva &mdash; sacking her for requesting fair wages. &ldquo;If you don&apos;t come down sharply on some of these people, they&apos;d soon be asking for the earth.&rdquo; Analyse &ldquo;these people&rdquo; (dehumanising), &ldquo;sharply&rdquo; (violent language for economic decisions).</p>
                  <p><strong>Paragraph 4:</strong> His refusal to change. After the Inspector leaves, Birling is relieved. He has learned nothing. Priestley uses him as a warning: this is what capitalism without conscience looks like.</p>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground">6. How does Priestley use the ending to convey his message?</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p><strong>Paragraph 1:</strong> The Inspector&apos;s exit and final speech &mdash; &ldquo;fire and blood and anguish.&rdquo; Analyse the prophetic tone, tricolon, and link to the world wars. He leaves his message as a challenge.</p>
                  <p><strong>Paragraph 2:</strong> The older Birlings&apos; relief vs. Sheila and Eric&apos;s refusal to forget. &ldquo;You&apos;re pretending everything&apos;s just as it was before.&rdquo; The generational divide crystallises the play&apos;s central argument.</p>
                  <p><strong>Paragraph 3:</strong> The phone call &mdash; cyclical structure. The events are about to repeat. This denies the older Birlings their escape and forces the audience to confront the question: have <em>you</em> learned the lesson?</p>
                  <p><strong>Paragraph 4:</strong> Birling &ldquo;panic-stricken&rdquo; &mdash; the final image. The man who was so confident at the start is now terrified. Priestley&apos;s structural arc: from complacent certainty to fear. Context: the audience must choose a better path.</p>
                </div>
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
                <h3 className="font-bold text-amber-700 dark:text-amber-300">1. Eva Smith as Priestley&apos;s Absent Protagonist</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Eva never appears on stage, never speaks, and may not even be a single person. Yet the entire play revolves around her. A sophisticated reading recognises that her absence is deliberate: she represents the voiceless working class who are discussed, judged, and exploited by the powerful but never given the opportunity to tell their own story. Her silence is the silence of an entire class. By making the audience <em>feel</em> for someone they never see, Priestley achieves something remarkable: he forces empathy through imagination rather than identification. Eva is more powerful as an idea than she could be as a character.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">2. The Inspector as Time Traveller, Ghost, or Conscience</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Inspector&apos;s identity is deliberately ambiguous, and a Grade 9 response should explore multiple interpretations rather than fixing on one. If he is a ghost (&ldquo;Goole&rdquo; = ghoul), the play becomes a supernatural morality tale. If he is a time traveller from 1945, he brings the knowledge of what Birling&apos;s worldview will cause (two world wars). If he is a collective conscience, the play becomes psychological. Priestley deliberately leaves this unresolved because the Inspector&apos;s <em>message</em> matters more than his identity. The ambiguity also forces the audience to engage actively: you must decide for yourself what the Inspector represents, just as you must decide what kind of society you want.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">3. The Cyclical Ending as Structural Argument</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The phone call at the end creates a cyclical structure: the events are about to begin again. This is not merely a dramatic twist but a structural embodiment of Priestley&apos;s argument. If the Birlings have not learned from the first visit, they will be forced to learn again &mdash; and, by extension, if the 1945 audience does not learn from the world wars, history will repeat itself. The cyclical structure turns the play into a warning that has no endpoint: every generation must choose whether to accept social responsibility or face the consequences of refusing. The form <em>is</em> the argument.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">4. Sheila as Priestley&apos;s Model Audience</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Sheila&apos;s journey mirrors the journey Priestley wants his audience to take. She begins comfortable and complacent. She is confronted with her own complicity. She feels genuine guilt. She changes. She refuses to go back to ignorance. When she says, &ldquo;You&apos;re pretending everything&apos;s just as it was before,&rdquo; she is speaking not just to her parents but to any audience member who wants to dismiss the play&apos;s message. Priestley positions Sheila as the model of moral awakening: a privileged person who chooses to <em>see</em> rather than look away. Her refection of Gerald&apos;s ring symbolises her rejection of the entire system.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">5. Dramatic Irony as Political Weapon</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Birling&apos;s wrong predictions (Titanic, no war) are not just comedic moments but a calculated political strategy. By making the spokesperson for capitalism demonstrably, laughably wrong, Priestley destroys his credibility before the Inspector even arrives. The audience cannot trust Birling&apos;s moral philosophy because they know his factual predictions are nonsensical. This is a logical fallacy (being wrong about facts does not mean being wrong about values), but dramatically it is devastatingly effective. Priestley weaponises dramatic irony: it becomes not just a literary device but a tool for ideological persuasion.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">6. The Photograph as Epistemological Problem</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The Inspector shows the photograph to one person at a time. Gerald later suggests they may have been shown different photographs &mdash; different girls. A top-level response might argue that this does not matter, and that Priestley intends it not to matter. Whether Eva is one person or many, the Birlings&apos; actions were still wrong. But the ambiguity also raises a philosophical question: does moral responsibility depend on provable cause and effect, or on the nature of the action itself? Priestley argues the latter. The older Birlings cling to the idea that if they cannot be <em>proven</em> guilty of killing <em>this specific girl</em>, they are innocent. The Inspector (and Priestley) insists that moral responsibility transcends legal proof.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">7. Eric as Priestley&apos;s Most Complex Character</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Eric is often overlooked, but a sophisticated reading recognises his complexity. He has committed the most serious individual crime (sexual assault, implied by &ldquo;I was in that state when a chap easily turns nasty&rdquo;). Yet he also shows the most violent guilt and the most direct challenge to his parents (&ldquo;you killed her&rdquo;). Eric exposes the hypocrisy of the class system from within: the son of respectable parents turns out to be a drunk and an assailant. Priestley uses Eric to argue that the upper class is not morally superior &mdash; it merely has the privilege of hiding its sins. Eric&apos;s shame is genuine, unlike his parents&apos; self-justification, but his crimes are real too. He represents the painful, messy reality of confronting one&apos;s own guilt.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300">8. The Play as Direct Address to 1945</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play was written in 1945, performed in 1945, but set in 1912. This temporal structure is itself an argument. By showing the audience a world that existed before two world wars and asking &ldquo;do you want to go back to this?&rdquo;, Priestley makes the play a political intervention in the 1945 general election. The audience had a real choice: return to the pre-war class system (Conservative) or build a new society based on collective responsibility (Labour). Priestley&apos;s play is, in this reading, not just a drama but a piece of political persuasion. The Inspector&apos;s &ldquo;fire and blood and anguish&rdquo; speech is not a prediction but a statement of historical fact for the 1945 audience &mdash; the fires of the Blitz, the blood of the trenches, the anguish of millions. Priestley asks: will you learn, or must you be taught again?
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
                  How does Priestley use the character of Mr Birling to criticise capitalism and social irresponsibility?
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="An Inspector Calls - How Priestley uses Mr Birling to criticise capitalism and social irresponsibility"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 2</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Priestley present the theme of responsibility in <em>An Inspector Calls</em>? Refer to the whole play in your answer.
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="An Inspector Calls - How Priestley presents the theme of responsibility across the play"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 3</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Priestley use the character of Sheila to represent hope for change in society?
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="An Inspector Calls - How Priestley uses Sheila Birling to represent hope for societal change"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>

              <div className="rounded-lg border border-border p-4">
                <h3 className="font-bold text-foreground mb-1">Question 4</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How does Priestley use the Inspector as a dramatic device to challenge the Birling family and the audience?
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
                </p>
                <AITextArea
                  placeholder="Write your essay response here..."
                  label="Your answer"
                  subject="English Literature"
                  topic="An Inspector Calls - How Priestley uses the Inspector as a dramatic device to challenge characters and the audience"
                  minWords={150}
                  maxWords={800}
                  rows={10}
                />
              </div>
            </div>
          </Section>
        </div>

      </div>
    </>
  );
}
