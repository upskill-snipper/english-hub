"use client";

import { useState } from "react";

/* ─── Expandable Section Component ─────────────────────────── */

function Section({
  title,
  icon,
  defaultOpen = false,
  children,
}: {
  title: string;
  icon: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-4 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="text-lg font-bold text-gray-900">{title}</span>
        </span>
        <svg
          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && <div className="border-t border-gray-100 px-5 py-5">{children}</div>}
    </div>
  );
}

function QuoteCard({ quote, speaker, analysis }: { quote: string; speaker?: string; analysis: string }) {
  return (
    <div className="rounded-lg border-l-4 border-[#2E86C1] bg-[#2E86C1]/5 p-4 mb-3">
      <p className="text-sm font-semibold text-[#1A5276] italic">&ldquo;{quote}&rdquo;</p>
      {speaker && <p className="mt-1 text-xs font-medium text-[#2E86C1]">&mdash; {speaker}</p>}
      <p className="mt-2 text-sm text-gray-700">{analysis}</p>
    </div>
  );
}

function CharacterCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 mb-3">
      <h4 className="font-bold text-[#1A5276]">{name}</h4>
      <p className="mt-1 text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

function ThemeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-[#2E86C1]/20 bg-[#2E86C1]/5 p-4 mb-3">
      <h4 className="font-bold text-[#1A5276]">{title}</h4>
      <p className="mt-1 text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function SignOfFourPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-[#2E86C1]/10 px-3 py-1 text-xs font-bold text-[#2E86C1] uppercase tracking-wider">
            19th-Century Prose
          </span>
          <span className="rounded-full bg-[#2E86C1]/10 px-3 py-1 text-xs font-bold text-[#2E86C1] uppercase tracking-wider">
            Edexcel
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          The Sign of the Four
        </h1>
        <p className="mt-1 text-lg text-gray-500">Arthur Conan Doyle, 1890</p>
        <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
          Conan Doyle&apos;s second Sherlock Holmes novel follows the detective and Dr Watson as they
          investigate a case brought to them by the mysterious Mary Morstan. A tale of stolen treasure,
          betrayal, and colonial violence, the novel explores themes of justice, empire, greed, and the
          tension between reason and emotion &mdash; all set against the backdrop of Victorian London
          and the legacy of the British Raj.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-gray-700 mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {["Chapter Summary", "Characters", "Themes", "Key Quotations", "Holmes\u2019s Methods", "Context", "Essay Planning"].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/[\u2019\s]+/g, "-")}`}
              className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-[#2E86C1]/10 hover:text-[#2E86C1] transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* ─── Chapter-by-Chapter Summary ──────────────────────── */}
      <div className="space-y-4" id="chapter-summary">
      <Section title="Chapter-by-Chapter Summary" icon="📖" defaultOpen>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">Chapter 1: The Science of Deduction</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Watson finds Holmes injecting himself with a seven-per-cent solution of cocaine, a habit
              Watson disapproves of but cannot prevent. Holmes is bored without a case and demonstrates
              his deductive method by analysing Watson&apos;s pocket watch, correctly deducing details about
              Watson&apos;s late brother&apos;s life &mdash; his inheritance, alcoholism, and death. Watson is
              both amazed and distressed. This chapter establishes Holmes&apos;s brilliance, his drug
              dependency, and the central tension between reason and emotion that runs through the novel.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 2: The Statement of the Case</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Mary Morstan arrives at Baker Street with a mysterious problem. Her father, Captain Arthur
              Morstan, disappeared ten years ago after returning from India. For the last six years she has
              received an anonymous gift of a large, lustrous pearl each year. Now she has received a letter
              inviting her to meet an unknown person, with permission to bring two companions. Holmes agrees
              to take the case and Watson is immediately struck by Mary&apos;s beauty and composure.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 3: In Quest of a Solution</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Holmes, Watson, and Mary travel by cab through the fog-bound streets of London to the
              mysterious rendezvous. They are taken to the home of Thaddeus Sholto, the son of Major
              John Sholto, who was a friend of Captain Morstan in India. The journey through London&apos;s
              labyrinthine streets creates an atmosphere of suspense and danger. Watson&apos;s protective
              feelings for Mary continue to grow.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 4: The Story of the Bald-Headed Man</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Thaddeus Sholto reveals the truth. His father, Major Sholto, and Captain Morstan had
              discovered the Agra treasure in India. Major Sholto brought the treasure to England but
              betrayed Morstan, keeping it all. When Morstan came to confront him, the two argued and
              Morstan suffered a fatal heart attack. Major Sholto hid the body and kept the treasure,
              living in fear of a one-legged man (Jonathan Small) who also claimed the jewels. On his
              deathbed, Major Sholto tried to reveal the treasure&apos;s location to his sons but died
              before completing the message. Thaddeus, feeling guilt, sent Mary the pearls.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 5: The Tragedy of Pondicherry Lodge</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              The group travels to Pondicherry Lodge, the Sholto family home, to find Bartholomew Sholto
              (Thaddeus&apos;s twin brother) dead in his locked room. His face is frozen in a terrible smile,
              and a poisoned thorn is embedded in his skin. The Agra treasure chest is empty &mdash; the
              treasure has been stolen. On a piece of paper beside the body is written &ldquo;The sign of
              the four.&rdquo; Holmes discovers footprints: a wooden-legged man and a small, bare-footed
              companion who climbed through the roof.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 6: Sherlock Holmes Gives a Demonstration</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Holmes demonstrates his deductive powers to the police detectives Athelney Jones, who has
              arrested the wrong man (Thaddeus). Holmes examines the crime scene methodically, identifies
              creosote on the rope used by the murderer&apos;s companion, and measures the small footprints.
              He deduces that the accomplice is a small man from the Andaman Islands. Holmes sends his
              dog Toby to track the creosote scent. This chapter showcases Holmes&apos;s scientific method
              in contrast to the police&apos;s incompetent, assumption-based approach.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 7: The Episode of the Barrel</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Holmes and Watson follow the dog Toby through the streets of South London, tracking the
              creosote trail. Toby leads them on a winding chase through working-class neighbourhoods,
              timber yards, and along the Thames. The trail ends at a barrel of creosote at a wharf, a
              false lead &mdash; but Holmes is not discouraged. The chapter provides vivid descriptions of
              the poverty and industrial landscape of South London, highlighting the class divisions of
              Victorian society.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 8: The Baker Street Irregulars</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Holmes enlists his network of street urchins, the Baker Street Irregulars, to search the
              river for a steam launch called the <em>Aurora</em>. While they wait, Watson reads Holmes&apos;s
              monograph and Holmes discusses the case. Watson returns to Mary to update her on events, and
              his feelings for her deepen. The chapter develops the Watson&ndash;Mary romance and shows Holmes&apos;s
              resourceful use of London&apos;s underclass as an intelligence network.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 9: A Break in the Chain</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Athelney Jones&apos;s investigation falters &mdash; he has arrested the wrong suspect and has no
              real leads. Holmes disguises himself as an old sailor and personally searches the docks for
              the <em>Aurora</em>, eventually locating it at Jacobson&apos;s Yard. He arranges for a police
              steam launch to pursue Small that evening. Holmes&apos;s willingness to go undercover and
              physically pursue leads contrasts with the official police approach. His disguise also
              highlights the theme of identity and appearance versus reality.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 10: The End of the Islander</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              A dramatic chase along the Thames. Holmes, Watson, and the police pursue the <em>Aurora</em>
              carrying Jonathan Small and his companion Tonga. Tonga fires a poisoned dart at the pursuers
              but Holmes and Watson shoot him dead. Small is captured but the treasure chest, when opened,
              is empty &mdash; Small has thrown the jewels overboard into the Thames, ensuring that if he
              cannot have them, no one will. The death of Tonga is presented in strikingly dehumanising
              language that reflects Victorian racial attitudes.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 11: The Great Agra Treasure</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              The empty treasure chest is opened at Baker Street. Watson realises that the disappearance
              of the treasure means Mary will not become wealthy &mdash; removing the class barrier between
              them. He proposes to her and she accepts. Holmes, rather than celebrating, returns to his
              cocaine bottle, remarking that the case is solved and boredom has returned. The contrast
              between Watson&apos;s emotional fulfilment and Holmes&apos;s retreat into drugs powerfully
              illustrates the reason-versus-emotion duality.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Chapter 12: The Strange Story of Jonathan Small</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Jonathan Small narrates his backstory. A former soldier, he lost his leg to a crocodile in
              India. During the Indian Rebellion of 1857, he was drawn into a plot by three Sikh men (the
              &ldquo;Four&rdquo; of the title) to murder a merchant, Achmet, and steal the Agra treasure. The four
              were imprisoned in the Andaman Islands, where Small befriended the islander Tonga. Small made
              a deal with Major Sholto and Captain Morstan to share the treasure in return for his freedom,
              but Sholto betrayed them all. Small&apos;s narrative reveals the violence and exploitation
              at the heart of the British Empire, while complicating the reader&apos;s view of justice &mdash;
              Small is both criminal and victim.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── Character Analysis ──────────────────────────────── */}
      <Section title="Character Analysis" icon="👤">
        <div className="grid gap-4 sm:grid-cols-2">
          <CharacterCard
            name="Sherlock Holmes"
            description="The novel's protagonist, Holmes is a consulting detective whose extraordinary powers of observation and logical deduction set him apart from ordinary people. He is a complex figure: intellectually brilliant but emotionally detached, dismissive of sentiment and romantic feeling. His cocaine use reveals that his great mind is both a gift and a burden — without intellectual stimulation, he turns to drugs. Holmes embodies the Victorian ideal of rational, scientific progress, yet Conan Doyle also critiques this by showing the cost of suppressing emotion. Holmes views crime-solving as an intellectual puzzle rather than a moral crusade, and his treatment of people as data points raises questions about the limits of pure reason."
          />
          <CharacterCard
            name="Dr John Watson"
            description="Watson serves as narrator and Holmes's loyal companion. A former army doctor wounded in Afghanistan, Watson represents the Victorian everyman — brave, honourable, and emotionally engaged with the world. His growing love for Mary Morstan provides the novel's emotional centre and stands in deliberate contrast to Holmes's cold rationality. Watson admires Holmes but also challenges him, particularly over his drug use. As narrator, Watson mediates between Holmes's genius and the reader, making the detective's methods accessible. His military background connects him to the imperial theme, while his capacity for love demonstrates what Holmes lacks."
          />
          <CharacterCard
            name="Mary Morstan"
            description="Mary is presented as an intelligent, composed, and courageous young woman — she attends the mysterious meeting despite not knowing what she will face. Conan Doyle gives her more agency than many Victorian heroines: she brings the case to Holmes, provides key evidence (the pearls, the letter), and maintains her composure throughout dangerous events. However, she also functions within the Victorian marriage plot — her value is partly defined by her relationship to Watson. The loss of the treasure removes the wealth barrier, allowing Watson to propose as her social equal. She represents emotional warmth and human connection in contrast to Holmes's detachment."
          />
          <CharacterCard
            name="Thaddeus Sholto"
            description="The nervous, eccentric son of Major Sholto, Thaddeus acts as a conscience figure. Horrified by his father's betrayal of Captain Morstan, he sends Mary the annual pearls as partial restitution. He is physically weak, hypochondriac, and surrounded by Eastern luxuries — hookah, rich fabrics — that reflect the spoils of empire brought into an English domestic setting. Thaddeus represents a guilty colonial inheritor: he benefits from stolen wealth but is consumed by anxiety about its moral cost. His arrest by Athelney Jones highlights the theme of flawed justice."
          />
          <CharacterCard
            name="Jonathan Small"
            description="The novel's antagonist is also its most complex character. A former soldier who lost his leg to a crocodile in India, Small is a product of empire — a working-class man drawn into colonial violence and exploitation. His involvement in the murder of Achmet and theft of the treasure makes him a criminal, yet his narrative in Chapter 12 generates sympathy. He was betrayed by Major Sholto, imprisoned for decades, and lost everything. His decision to throw the treasure into the Thames rather than let others benefit from it reflects a warped sense of justice. Conan Doyle uses Small to show how the colonial system creates criminals and victims simultaneously."
          />
          <CharacterCard
            name="Tonga"
            description="An Andaman Islander whom Small befriended during his imprisonment, Tonga is the most problematic character in the novel. Conan Doyle describes him using deeply racist Victorian language — 'savage,' 'unhallowed dwarf,' with 'venomous' qualities. He is dehumanised, compared to animals, and his death is treated with little moral weight. Tonga functions as a weapon rather than a person — he kills Bartholomew Sholto with a poisoned dart and is shot dead during the Thames chase. Modern readers must recognise how Conan Doyle reflects and reinforces Victorian racial prejudice and colonial attitudes toward indigenous peoples."
          />
          <CharacterCard
            name="Captain Arthur Morstan"
            description="Mary's father, Captain Morstan, never appears alive in the novel but his disappearance drives the entire plot. He served in the 34th Bombay Infantry in India and was one of the two officers to whom Jonathan Small offered the Agra treasure in exchange for freedom. Unlike Major Sholto, Morstan appears to have intended to share the treasure fairly. His death from a heart attack during a confrontation with Sholto makes him a victim of betrayal and greed. He represents the honourable soldier destroyed by the corrupting influence of colonial wealth."
          />
          <CharacterCard
            name="Major John Sholto"
            description="Major Sholto is the novel's great betrayer. He and Captain Morstan were entrusted with Jonathan Small's secret but Sholto stole the treasure for himself, abandoned his agreement with Small, and concealed Morstan's accidental death. He lived the rest of his life in fear, surrounded by guards and hiding behind the walls of Pondicherry Lodge (itself named after a colonial territory). His deathbed guilt and inability to reveal the treasure's location represent the unresolved moral debt of empire. Sholto embodies how imperial greed corrupts personal honour."
          />
        </div>
      </Section>

      {/* ─── Themes ──────────────────────────────────────────── */}
      <Section title="Key Themes" icon="💡">
        <div className="grid gap-4 sm:grid-cols-2" id="themes">
          <ThemeCard
            title="Justice and Injustice"
            description="The novel presents justice as deeply flawed. The official justice system is represented by the incompetent Athelney Jones, who arrests the innocent Thaddeus Sholto while the real criminals escape. Jonathan Small's story reveals layers of injustice: he was cheated by Major Sholto, imprisoned for decades, and sees the British legal system as serving the powerful rather than the wronged. Small's decision to throw the treasure into the Thames is his own act of 'justice' — if he cannot have what is rightfully his (by his reckoning), no one will. Conan Doyle invites readers to question whether legal justice and moral justice are the same thing."
          />
          <ThemeCard
            title="Empire and Colonialism"
            description="The Agra treasure symbolises the wealth extracted from India by the British Empire. Every major event in the novel stems from colonial exploitation: the treasure was originally stolen during the Indian Rebellion of 1857, British officers (Sholto and Morstan) profited from Indian violence, and Tonga — an indigenous islander — is used as a weapon and then killed without moral consequence. Pondicherry Lodge, named after an Indian colonial territory, brings the Empire into suburban London. Conan Doyle does not explicitly critique empire, but the trail of death and betrayal connected to the treasure implicitly questions the morality of colonial wealth."
          />
          <ThemeCard
            title="Wealth and Greed"
            description="The Agra treasure corrupts everyone it touches. Major Sholto betrays his friend and fellow officer for it; Jonathan Small commits murder for it; Bartholomew Sholto is killed because of it. The treasure's disappearance into the Thames is symbolically significant — ill-gotten wealth ultimately benefits no one. Watson's proposal to Mary is only possible because the treasure is lost, suggesting that wealth is an obstacle to genuine human connection. Conan Doyle presents a moral framework in which greed destroys relationships, honour, and life itself."
          />
          <ThemeCard
            title="Reason vs Emotion"
            description="The central duality of the novel is embodied in Holmes and Watson. Holmes prizes pure logic and dismisses emotion as a weakness: 'the emotional qualities are antagonistic to clear reasoning.' Watson, by contrast, falls in love with Mary and acts from compassion and empathy. The novel does not simply favour one over the other — Holmes's reason solves the case, but Watson's emotion gives the story its meaning and humanity. Holmes's return to cocaine at the end, while Watson finds happiness in love, suggests that reason without emotion leads to emptiness."
          />
          <ThemeCard
            title="Duality and the Double Life"
            description="Duality pervades the novel. Holmes is both genius and addict. Watson is both soldier and romantic. Thaddeus and Bartholomew Sholto are twins with opposite moral characters. Jonathan Small is both criminal and victim. Victorian London itself is dual — respectable streets conceal poverty and crime. Even the treasure has a double nature: it represents both fabulous wealth and the violence required to obtain it. Conan Doyle uses these doublings to suggest that Victorian society's neat moral categories cannot contain the complexity of human experience."
          />
          <ThemeCard
            title="Friendship and Loyalty"
            description="The novel explores different forms of loyalty. Holmes and Watson's friendship is the novel's emotional anchor — Watson tolerates Holmes's eccentricities and Holmes trusts Watson with his life. Jonathan Small's loyalty to the 'sign of the four' pact endures decades of imprisonment. Small's bond with Tonga, though described in patronising terms, is one of genuine mutual dependence. Thaddeus Sholto's loyalty to the memory of Captain Morstan drives him to send Mary the pearls. Set against these bonds of loyalty are acts of betrayal — Major Sholto's treachery being the most destructive."
          />
        </div>
      </Section>

      {/* ─── Key Quotations ──────────────────────────────────── */}
      <Section title="Key Quotations with Analysis" icon="📝">
        <div className="space-y-1" id="key-quotations">
          <QuoteCard
            quote="I abhor the dull routine of existence. I crave for mental exaltation."
            speaker="Holmes"
            analysis="Establishes Holmes's central conflict — his extraordinary intellect makes ordinary life unbearable. 'Abhor' and 'crave' are extreme verbs that reveal the intensity of his need. This drives his cocaine use and frames the entire novel as Holmes's search for stimulation. Conan Doyle suggests that genius comes at a psychological cost."
          />
          <QuoteCard
            quote="My mind rebels at stagnation. Give me problems, give me work."
            speaker="Holmes"
            analysis="The imperative 'give me' and the repetition create urgency and desperation. 'Rebels at stagnation' personifies Holmes's mind as a force that cannot be controlled. This connects to the theme of reason — Holmes's rationality is not a calm trait but a compulsive, almost destructive drive."
          />
          <QuoteCard
            quote="You really are an automaton — a calculating machine. There is something positively inhuman in you at times."
            speaker="Watson"
            analysis="Watson's criticism of Holmes uses mechanistic language: 'automaton' and 'calculating machine' reduce him to a device without feeling. 'Inhuman' is the key word — Watson recognises that Holmes's rejection of emotion diminishes his humanity. This establishes the novel's central debate about whether reason without emotion is admirable or monstrous."
          />
          <QuoteCard
            quote="Detection is, or ought to be, an exact science."
            speaker="Holmes"
            analysis="Holmes's manifesto for scientific rationalism. The qualifying 'or ought to be' acknowledges that it is not yet fully scientific, revealing both ambition and frustration. This connects to Victorian faith in science and progress, while the novel itself subtly undermines Holmes's claim by showing that human cases involve messy emotions that resist scientific categorisation."
          />
          <QuoteCard
            quote="The emotional qualities are antagonistic to clear reasoning."
            speaker="Holmes"
            analysis="Holmes states his philosophy bluntly — emotion is the enemy of logic. 'Antagonistic' frames the relationship as a war between two incompatible forces. However, the novel complicates this: Watson's emotional engagement with Mary leads to happiness, while Holmes's suppression of emotion leads him back to cocaine. Conan Doyle suggests Holmes is wrong."
          />
          <QuoteCard
            quote="How small we feel with our petty ambitions and strivings in the presence of the great elemental forces of Nature!"
            speaker="Watson"
            analysis="Watson's reflection during the Thames chase reveals his capacity for wonder and emotional depth — qualities Holmes entirely lacks. The contrast between 'petty ambitions' (the treasure hunt) and 'elemental forces' (nature, love) suggests that Watson grasps a deeper truth about human insignificance that Holmes's rational framework cannot access."
          />
          <QuoteCard
            quote="It is of the first importance not to allow your judgement to be biased by personal qualities."
            speaker="Holmes"
            analysis="Holmes warns against letting personal feelings influence deduction. This is ironic because his own personality — his arrogance, his need for stimulation — constantly shapes his approach to cases. Conan Doyle uses Holmes's failure to live up to his own principles to show that complete objectivity is impossible, even for the most rational mind."
          />
          <QuoteCard
            quote="Eliminate all other factors, and the one which remains must be the truth."
            speaker="Holmes"
            analysis="One of Holmes's most famous deductive principles. The logic is elegant but deceptively simple — it assumes one can identify and eliminate all other factors, which in complex human situations is rarely possible. This maxim reflects Victorian confidence in scientific method while the novel's messy human realities quietly undermine it."
          />
          <QuoteCard
            quote="I would not tell them too much. Women are never to be entirely trusted — not the best of them."
            speaker="Holmes"
            analysis="A deeply sexist remark that reveals Holmes's misogyny and fear of emotional entanglement. The absolute 'never' and 'not the best of them' extend distrust to all women without exception. Conan Doyle uses this to characterise Holmes rather than to endorse the view — Watson's trust in Mary and their successful relationship implicitly rebuts Holmes's prejudice."
          />
          <QuoteCard
            quote="What a very attractive woman!"
            speaker="Watson (on first seeing Mary Morstan)"
            analysis="Watson's immediate emotional response to Mary contrasts with Holmes's purely analytical assessment of her. Where Holmes catalogues physical details as data, Watson responds with feeling. This simple exclamation establishes the Watson-Mary romance and the reason-emotion duality that structures the entire novel."
          />
          <QuoteCard
            quote="Miss Morstan had entered the room with a firm step and an outward composure of manner."
            speaker="Watson (narrating)"
            analysis="Mary is introduced through language of strength and self-control: 'firm step' and 'composure.' She is not the helpless damsel of typical Victorian fiction but a woman who faces danger with courage. 'Outward composure' subtly suggests inner anxiety she controls — strength through self-discipline rather than absence of fear."
          />
          <QuoteCard
            quote="It was a September evening and not yet seven o'clock, but the day had been a dreary one, and a dense drizzly fog lay low upon the great city."
            speaker="Watson (narrating)"
            analysis="Classic Victorian atmosphere-building. The fog operates as pathetic fallacy, reflecting the confusion and concealment central to the plot. 'Dense' and 'drizzly' create heaviness and discomfort. The fog literally and metaphorically obscures the truth. London becomes a Gothic landscape where danger hides in every shadow."
          />
          <QuoteCard
            quote="An agony of greed and expectation."
            speaker="Small (describing Major Sholto's reaction to the treasure)"
            analysis="The noun 'agony' transforms greed from a vice into a physical suffering, suggesting that the desire for wealth is itself a form of torture. 'Expectation' connects to Great Expectations and the Victorian preoccupation with wealth as a pathway to status. Major Sholto's greed literally destroys him — it causes fear, paranoia, and ultimately death."
          />
          <QuoteCard
            quote="A model of propriety."
            speaker="Watson (describing Thaddeus Sholto's home)"
            analysis="Used ironically — Sholto's home is filled with Eastern luxuries (hookahs, rich tapestries) that represent the spoils of empire, yet he presents himself as 'proper.' The irony highlights the gap between Victorian respectability and the colonial exploitation that funds it. 'Propriety' becomes a mask for ill-gotten wealth."
          />
          <QuoteCard
            quote="It is my treasure; and if I can't have the loot I'll take darned good care that no one else does."
            speaker="Jonathan Small"
            analysis="Small's declaration as he throws the treasure into the Thames. The possessive 'my treasure' reveals his sense of entitlement — though the treasure was itself stolen. The colloquial 'loot' and 'darned' contrast with the formal language of other characters, marking Small's working-class status. His act is simultaneously petty revenge and a kind of rough justice."
          />
          <QuoteCard
            quote="Whoever had lost a treasure, I knew that night that I had gained one."
            speaker="Watson"
            analysis="Watson's declaration when he proposes to Mary. The wordplay on 'treasure' contrasts material wealth (the Agra jewels) with emotional wealth (love). Conan Doyle explicitly argues that human connection is more valuable than gold. The parallel structure ('lost a treasure... gained one') makes this a thesis statement for the novel's moral framework."
          />
          <QuoteCard
            quote="The sign of four."
            speaker="Written on the paper found beside Bartholomew Sholto's body"
            analysis="The novel's title and central motif. The 'four' refers to Jonathan Small and the three Sikh conspirators who swore a pact over the Agra treasure. The sign represents a bond of loyalty forged through crime — a dark parody of friendship. It recurs throughout the novel as a mark of colonial violence that cannot be erased, linking past crimes in India to present murders in London."
          />
          <QuoteCard
            quote="I never saw a more savage, distorted face."
            speaker="Watson (describing Bartholomew Sholto's death)"
            analysis="The word 'savage' is loaded — throughout the novel it is applied to Tonga and colonial subjects, yet here it describes a white Englishman's death mask. The reversal unsettles the racial hierarchy the novel elsewhere maintains. 'Distorted' suggests the treasure's corrupting influence extends even beyond death, twisting the body as greed twisted the soul."
          />
          <QuoteCard
            quote="He is an ugly devil."
            speaker="Small (describing Tonga)"
            analysis="Even Small, Tonga's only friend, uses dehumanising language. 'Devil' strips Tonga of humanity and places him in a moral category below human. That even Tonga's ally describes him this way reveals how deeply Victorian racial prejudice is embedded — not as individual cruelty but as a shared cultural assumption. Modern readers should recognise this as reflecting the racism of the period."
          />
          <QuoteCard
            quote="You have done all the work in this business. I get a wife out of it, Jones gets the credit, pray what remains for you?"
            speaker="Watson"
            analysis="Watson's question to Holmes at the novel's end. Holmes's answer — reaching for the cocaine bottle — is devastating. The three outcomes neatly summarise the characters: Watson gains love (emotion), Jones gains reputation (social status), and Holmes gains nothing that matters to a human being, only the satisfaction of a solved puzzle. The implication is that Holmes's dedication to reason has cost him the ability to find meaning in life."
          />
          <QuoteCard
            quote="For me there still remains the cocaine-bottle."
            speaker="Holmes"
            analysis="The novel's final line. Holmes returns to drugs because the case is over and intellectual stimulation has ceased. The cocaine bottle replaces the treasure chest as the novel's closing image — both represent false solutions to deeper needs. Conan Doyle ends on a note of melancholy rather than triumph, suggesting that Holmes's genius is inseparable from his self-destruction."
          />
          <QuoteCard
            quote="I then put the sign of the four upon the paper and put it upon the table."
            speaker="Small"
            analysis="Small describes leaving his calling card at the murder scene. The deliberate, ritualistic quality — 'put... upon... put... upon' — transforms murder into a statement. The sign is both a confession and a claim of ownership: Small marks the scene as his, connecting Bartholomew's death directly to the original colonial theft. Crime becomes a chain that links India to England across decades."
          />
        </div>
      </Section>

      {/* ─── Holmes's Methods ────────────────────────────────── */}
      <Section title="Holmes&rsquo;s Methods and Deduction" icon="🔍">
        <div className="space-y-4" id="holmes-s-methods">
          <div className="rounded-lg bg-gray-50 p-4">
            <h4 className="font-bold text-gray-900">Observation and Deduction</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Holmes&apos;s method rests on close observation of physical details that others overlook.
              His analysis of Watson&apos;s pocket watch in Chapter 1 is a masterclass: from scratches
              around the keyhole he deduces the owner&apos;s alcoholism; from the pawnbroker&apos;s marks
              he infers financial difficulty. Holmes insists that observation must be systematic and
              detached from emotion. His famous principle &mdash; &ldquo;Eliminate all other factors, and
              the one which remains must be the truth&rdquo; &mdash; encapsulates his logical approach.
              However, Conan Doyle shows that this method has limits when applied to complex human situations.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <h4 className="font-bold text-gray-900">Forensic Science</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Holmes employs cutting-edge (for 1890) forensic techniques: measuring footprints, analysing
              chemical residues (creosote), identifying poison types (the thorn), and studying handwriting.
              He treats the crime scene as a laboratory, using a magnifying glass and tape measure rather
              than witness testimony. This reflects the Victorian era&apos;s growing faith in empirical
              science. Holmes&apos;s methods anticipate modern forensic investigation and would have seemed
              thrillingly modern to contemporary readers.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <h4 className="font-bold text-gray-900">Disguise and Undercover Work</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              In Chapter 9, Holmes disguises himself as an old sailor to search the docks for the
              <em> Aurora</em>. This shows that Holmes&apos;s method is not purely cerebral &mdash; he is
              willing to take physical risks and immerse himself in London&apos;s underworld. His ability
              to transform his appearance connects to the novel&apos;s broader theme of identity and
              duality: the detective, like the criminal, can become someone else. Disguise also allows
              Holmes to cross class boundaries, moving through social strata that a gentleman could not
              normally access.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <h4 className="font-bold text-gray-900">Use of Informants: The Baker Street Irregulars</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Holmes employs a network of street children to gather intelligence across London. The
              Irregulars can go where adults cannot, blending into the urban landscape. This practical
              resourcefulness complements Holmes&apos;s intellectual powers. It also reveals the class
              structure of Victorian London &mdash; Holmes exploits the labour of impoverished children,
              paying them a shilling each. Conan Doyle presents this uncritically, but modern readers
              may note the parallel with colonial exploitation: the powerful using the vulnerable as tools.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <h4 className="font-bold text-gray-900">Holmes vs the Official Police</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Athelney Jones represents the official police &mdash; confident but incompetent. He arrests
              Thaddeus Sholto based on circumstantial evidence and personal prejudice, while Holmes patiently
              builds a case from physical evidence. The contrast highlights a key theme: institutional
              authority is no guarantee of justice. Jones eventually has to rely on Holmes to solve the case,
              suggesting that the Victorian establishment&apos;s methods are inadequate and that individual
              brilliance must supplement (or replace) the system.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <h4 className="font-bold text-gray-900">Limitations of Holmes&apos;s Method</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Despite his brilliance, Holmes&apos;s purely rational approach has blind spots. He cannot
              understand Watson&apos;s love for Mary; he dismisses women as untrustworthy; he is unable to
              find meaning in life beyond intellectual puzzles. His return to cocaine at the novel&apos;s
              end suggests that his method, while effective for solving crimes, cannot solve the problem
              of human existence. Conan Doyle implies that reason alone is insufficient &mdash; emotional
              intelligence, empathy, and human connection are equally important.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── Context ─────────────────────────────────────────── */}
      <Section title="Historical and Social Context" icon="🏛️">
        <div className="space-y-4" id="context">
          <div className="rounded-lg bg-[#1A5276]/5 p-4">
            <h4 className="font-bold text-[#1A5276]">Victorian Detective Fiction</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              <em>The Sign of the Four</em> was published in 1890, during the golden age of detective fiction.
              Conan Doyle drew on Edgar Allan Poe&apos;s C. Auguste Dupin stories and Wilkie Collins&apos;s
              <em> The Moonstone</em> (1868), which also involves a stolen Indian jewel and colonial guilt.
              The detective figure appealed to Victorian readers because he represented the power of rational
              thought to impose order on a chaotic, rapidly changing world. Holmes became the archetype of
              the fictional detective &mdash; brilliant, eccentric, and operating outside official institutions.
            </p>
          </div>
          <div className="rounded-lg bg-[#1A5276]/5 p-4">
            <h4 className="font-bold text-[#1A5276]">The British Empire and India</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              By 1890, the British Empire controlled approximately a quarter of the world&apos;s land surface.
              India was the &ldquo;jewel in the crown&rdquo; &mdash; a phrase that resonates with the Agra
              treasure. The Indian Rebellion of 1857 (referred to in the novel as the &ldquo;Mutiny&rdquo;)
              was a traumatic event for the British, leading to direct Crown rule. Conan Doyle sets Small&apos;s
              backstory during this period, linking the treasure to imperial violence. The novel reflects
              both pride in empire and anxiety about its moral cost &mdash; the treasure brings only death
              and betrayal to everyone who touches it.
            </p>
          </div>
          <div className="rounded-lg bg-[#1A5276]/5 p-4">
            <h4 className="font-bold text-[#1A5276]">The Agra Treasure and Colonial Wealth</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              The Agra treasure represents the vast wealth extracted from India by the British. Agra is a
              real city, home to the Taj Mahal, and was a centre of Mughal power. By setting the treasure&apos;s
              origin in a real place, Conan Doyle grounds the fiction in historical reality. The treasure&apos;s
              journey &mdash; from India to England, through theft and murder, ultimately lost in the Thames &mdash;
              can be read as an allegory for the moral bankruptcy of colonial extraction. The wealth enriches
              no one and destroys many.
            </p>
          </div>
          <div className="rounded-lg bg-[#1A5276]/5 p-4">
            <h4 className="font-bold text-[#1A5276]">Opium and Drug Use</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Holmes&apos;s cocaine use reflects a real Victorian phenomenon. Cocaine and opium were legal
              and widely available in the 1890s &mdash; cocaine was even an ingredient in some medicines and
              drinks. However, growing awareness of addiction was beginning to shift attitudes. Watson&apos;s
              disapproval of Holmes&apos;s habit represents this emerging medical view. The drug theme also
              connects to empire: opium was a major commodity of imperial trade (the Opium Wars with China),
              and the novel links drug use, colonial wealth, and moral corruption.
            </p>
          </div>
          <div className="rounded-lg bg-[#1A5276]/5 p-4">
            <h4 className="font-bold text-[#1A5276]">The Victorian Class System</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Class shapes every relationship in the novel. Watson cannot propose to Mary while she stands to
              inherit a fortune because the class gap would make the proposal appear mercenary. Holmes employs
              working-class children (the Irregulars) as disposable labour. Jonathan Small is a working-class
              soldier exploited by officers above him. The detective genre itself reflects class anxiety &mdash;
              crime threatens the property and safety of the middle and upper classes, and the detective
              restores social order. Conan Doyle both reflects and quietly critiques this system.
            </p>
          </div>
          <div className="rounded-lg bg-[#1A5276]/5 p-4">
            <h4 className="font-bold text-[#1A5276]">Race and Victorian Attitudes</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              The novel&apos;s treatment of race, particularly through Tonga and the Sikh characters, reflects
              deeply problematic Victorian attitudes. Indigenous peoples are described in animalistic,
              dehumanising language. Tonga is presented as barely human &mdash; a &ldquo;savage&rdquo; whose
              death provokes no moral concern. The three Sikh men in &ldquo;the Four&rdquo; are given little
              individuality. Holmes himself refers to a &ldquo;gazetteer&rdquo; description of Andaman Islanders
              that is essentially racist pseudo-science. These elements must be acknowledged as products of
              their time and critiqued in any modern analysis.
            </p>
          </div>
          <div className="rounded-lg bg-[#1A5276]/5 p-4">
            <h4 className="font-bold text-[#1A5276]">Science and Rationalism</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              The late Victorian period saw enormous faith in scientific progress. Darwin&apos;s theory of
              evolution, advances in chemistry and medicine, and the rise of forensic science all shaped the
              cultural landscape. Holmes embodies this faith &mdash; he applies the scientific method to
              criminal investigation. However, the novel also shows the limits of pure rationalism: Holmes
              cannot understand love, cannot find happiness, and cannot stop using drugs. Conan Doyle suggests
              that science, while powerful, is not sufficient for a fully human life.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── Essay Planning ──────────────────────────────────── */}
      <Section title="Essay Planning" icon="✍️">
        <div className="space-y-6" id="essay-planning">
          <div className="rounded-lg border border-[#2E86C1]/20 bg-[#2E86C1]/5 p-5">
            <h4 className="font-bold text-[#1A5276]">Sample Question 1: How does Conan Doyle present the theme of justice?</h4>
            <div className="mt-3 space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Paragraph 1 &mdash; The failure of official justice</p>
                <p>Athelney Jones arrests the innocent Thaddeus Sholto. Conan Doyle presents the police as incompetent and assumption-driven, contrasting them with Holmes&apos;s evidence-based approach. Link to context: Victorian policing was still developing; the Metropolitan Police was only established in 1829.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Paragraph 2 &mdash; Jonathan Small&apos;s sense of justice</p>
                <p>Small believes the treasure is rightfully his. His decision to throw it into the Thames is an act of rough justice &mdash; &ldquo;if I can&apos;t have the loot I&apos;ll take darned good care that no one else does.&rdquo; Conan Doyle complicates the reader&apos;s moral response: Small is a murderer but also a victim of betrayal.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Paragraph 3 &mdash; Colonial justice and moral debt</p>
                <p>The treasure was originally stolen from Achmet through murder. Major Sholto then stole it from Small. Each &ldquo;transfer&rdquo; involves violence and betrayal. Conan Doyle implies that the treasure is cursed because it was born of injustice &mdash; colonial wealth cannot be legitimised.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Paragraph 4 &mdash; Poetic justice and the resolution</p>
                <p>The treasure is lost, Small is captured, and Watson finds love. Conan Doyle creates a morally satisfying ending: greed is punished and love is rewarded. However, Holmes&apos;s return to cocaine complicates this &mdash; not everyone finds resolution.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[#2E86C1]/20 bg-[#2E86C1]/5 p-5">
            <h4 className="font-bold text-[#1A5276]">Sample Question 2: How does Conan Doyle present the relationship between Holmes and Watson?</h4>
            <div className="mt-3 space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Paragraph 1 &mdash; Complementary opposites</p>
                <p>Holmes represents reason; Watson represents emotion. &ldquo;You really are an automaton &mdash; a calculating machine.&rdquo; Watson&apos;s criticism shows both frustration and intimacy &mdash; only a close friend could speak so bluntly. Their differences make them effective together.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Paragraph 2 &mdash; Watson as narrator and mediator</p>
                <p>Watson translates Holmes&apos;s genius for the reader. His admiration (&ldquo;brilliant&rdquo;) and his criticisms (&ldquo;inhuman&rdquo;) create a nuanced portrait. Conan Doyle uses the first-person narration to position the reader alongside Watson, sharing his wonder and his concern.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Paragraph 3 &mdash; The Mary Morstan disruption</p>
                <p>Watson&apos;s love for Mary introduces a tension. Holmes fears losing Watson and dismisses romance. The friendship is tested by Watson&apos;s emotional life, suggesting that pure intellectual partnership cannot fulfil all human needs.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Paragraph 4 &mdash; The ending: divergent paths</p>
                <p>Watson gains a wife; Holmes gains the cocaine bottle. The contrast at the novel&apos;s end is poignant &mdash; Watson has found happiness through connection, while Holmes retreats into isolation and self-destruction. Conan Doyle implies that friendship alone cannot save Holmes from himself.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[#2E86C1]/20 bg-[#2E86C1]/5 p-5">
            <h4 className="font-bold text-[#1A5276]">Sample Question 3: How does Conan Doyle explore the theme of empire and colonialism?</h4>
            <div className="mt-3 space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Paragraph 1 &mdash; The Agra treasure as symbol</p>
                <p>The treasure originates in India and brings death to everyone who possesses it. Conan Doyle uses it as a symbol for colonial wealth &mdash; extracted through violence, it corrupts all who touch it. Link to context: India was the economic engine of the British Empire.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Paragraph 2 &mdash; Jonathan Small&apos;s backstory</p>
                <p>Small&apos;s narrative in Chapter 12 immerses the reader in colonial India &mdash; military service, the 1857 Rebellion, imprisonment in the Andaman Islands. Conan Doyle shows how the Empire creates men like Small: ordinary soldiers drawn into extraordinary violence by imperial circumstances.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Paragraph 3 &mdash; The treatment of Tonga</p>
                <p>Tonga is the most visible victim of colonial attitudes. Described in dehumanising, racist language, he is used as a weapon and killed without moral consequence. Conan Doyle reflects (and reinforces) the racial hierarchies that justified empire. Modern readers must critique this representation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Paragraph 4 &mdash; Empire in England</p>
                <p>Colonial influence permeates London: Pondicherry Lodge (named after an Indian territory), Thaddeus&apos;s Eastern luxuries, Watson&apos;s Afghan war wound. Conan Doyle shows that empire is not distant &mdash; it shapes domestic English life. The treasure&apos;s loss in the Thames symbolises the ultimate futility of imperial extraction.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Exam Tips ───────────────────────────────────────── */}
      <div className="mt-6 rounded-xl border border-[#2E86C1]/20 bg-[#2E86C1]/5 p-6">
        <h3 className="text-lg font-bold text-gray-900">Exam Tips for The Sign of the Four</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E86C1]" />
            <span><strong>Always link to context.</strong> Connect events to the British Empire, Victorian attitudes to race and class, and the development of detective fiction. Examiners reward candidates who embed context naturally rather than bolting it on.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E86C1]" />
            <span><strong>Use Conan Doyle&apos;s methods.</strong> Discuss narrative structure (Watson as first-person narrator), symbolism (the treasure, the fog, the Thames), language techniques (pathetic fallacy, juxtaposition), and the significance of the detective genre.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E86C1]" />
            <span><strong>Refer to the writer&apos;s intentions.</strong> Use phrases like &ldquo;Conan Doyle perhaps suggests...&rdquo; or &ldquo;Conan Doyle uses Small to critique...&rdquo; to demonstrate awareness of authorial purpose.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E86C1]" />
            <span><strong>Compare characters deliberately.</strong> Holmes vs Watson (reason vs emotion), Thaddeus vs Bartholomew (guilt vs greed), Small vs Sholto (loyalty vs betrayal). Examiners reward structured comparison.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E86C1]" />
            <span><strong>Address problematic elements.</strong> The novel&apos;s treatment of race (Tonga, the Sikh characters) and gender (Holmes&apos;s misogyny) must be acknowledged critically. Show awareness that the text reflects Victorian prejudices that modern readers should interrogate.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E86C1]" />
            <span><strong>Link multiple themes.</strong> Every quote should connect to at least two themes. For example, Holmes&apos;s cocaine use connects to reason vs emotion, Victorian science, empire (opium trade), and the limits of genius.</span>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}
