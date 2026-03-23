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
    <div className="rounded-lg border-l-4 border-rose-400 bg-rose-50/50 p-4 mb-3">
      <p className="text-sm font-semibold text-rose-900 italic">&ldquo;{quote}&rdquo;</p>
      {speaker && <p className="mt-1 text-xs font-medium text-rose-600">&mdash; {speaker}</p>}
      <p className="mt-2 text-sm text-gray-700">{analysis}</p>
    </div>
  );
}

function CharacterCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 mb-3">
      <h4 className="font-bold text-primary">{name}</h4>
      <p className="mt-1 text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

function ThemeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-rose-200 bg-rose-50/30 p-4 mb-3">
      <h4 className="font-bold text-rose-800">{title}</h4>
      <p className="mt-1 text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function PrideAndPrejudicePage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700 uppercase tracking-wider">
            19th-Century Prose
          </span>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-accent-600 uppercase tracking-wider">
            AQA
          </span>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-accent-600 uppercase tracking-wider">
            Edexcel
          </span>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-accent-600 uppercase tracking-wider">
            OCR
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pride and Prejudice
        </h1>
        <p className="mt-1 text-lg text-gray-500">Jane Austen, 1813</p>
        <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
          A witty and incisive novel of manners exploring love, marriage, and social class in
          Regency England. Through the spirited Elizabeth Bennet and the proud Mr Darcy, Austen
          examines how first impressions can be dangerously misleading, and how self-knowledge
          is the foundation of genuine happiness. Beneath its sparkling surface, the novel offers
          a sharp critique of a society where women&apos;s futures depend entirely on marriage.
        </p>
      </div>

      {/* Chapter Summary */}
      <Section title="Plot Summary by Key Events" icon="📖" defaultOpen>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">The Arrival of Bingley (Chapters 1&ndash;12)</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Mr Bingley, a wealthy young bachelor, rents Netherfield Park near the Bennet family
              home of Longbourn. Mrs Bennet is desperate to marry one of her five daughters to him.
              At a public ball, Bingley dances with Jane Bennet and they are clearly attracted to
              each other. His friend Mr Darcy refuses to dance with Elizabeth, calling her
              &ldquo;tolerable, but not handsome enough to tempt me.&rdquo; Elizabeth is amused rather
              than offended. Jane falls ill at Netherfield and Elizabeth walks three miles through
              mud to nurse her, earning Darcy&apos;s grudging admiration and Miss Bingley&apos;s contempt.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Wickham and Collins (Chapters 13&ndash;23)</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Mr Collins, a pompous clergyman who will inherit the Bennet estate through entailment,
              arrives to find a wife. He proposes to Elizabeth, who firmly refuses despite her mother&apos;s
              fury and the practical sense of accepting. Meanwhile, the charming officer George Wickham
              tells Elizabeth that Darcy cheated him out of a promised inheritance. Elizabeth readily
              believes Wickham because it confirms her prejudice against Darcy. Charlotte Lucas
              pragmatically accepts Collins&apos;s proposal, shocking Elizabeth. Bingley abruptly leaves
              Netherfield, devastating Jane.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Darcy&apos;s First Proposal (Chapters 24&ndash;36)</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Elizabeth visits Charlotte at Hunsford parsonage, near Rosings Park, the estate of
              Lady Catherine de Bourgh (Darcy&apos;s aunt). Darcy arrives and, to Elizabeth&apos;s
              astonishment, proposes. His proposal is insulting &mdash; he emphasises her inferior
              connections and says he has struggled against his feelings. Elizabeth rejects him
              furiously, accusing him of ruining Jane&apos;s happiness (by separating her from Bingley)
              and Wickham&apos;s prospects. Darcy writes her a letter explaining that he separated Bingley
              from Jane because he thought Jane did not return Bingley&apos;s feelings, and that Wickham
              is a liar who attempted to elope with Darcy&apos;s fifteen-year-old sister Georgiana for
              her fortune.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Elizabeth&apos;s Transformation (Chapters 37&ndash;42)</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Elizabeth reads Darcy&apos;s letter and is forced to acknowledge her own prejudice. She
              realises she judged Darcy harshly and Wickham favourably based on charm rather than
              evidence. &ldquo;Till this moment I never knew myself,&rdquo; she admits. This is the
              novel&apos;s turning point. She visits Pemberley, Darcy&apos;s estate, with the Gardiners
              (her sensible uncle and aunt). The house and grounds impress her, and Darcy appears
              unexpectedly, behaving with warmth and courtesy.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Lydia&apos;s Elopement (Chapters 43&ndash;50)</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Lydia, the youngest Bennet sister, elopes with Wickham &mdash; a scandal that threatens
              to ruin the entire family&apos;s reputation. If they are not married, all the Bennet
              sisters will be socially disgraced. Darcy secretly finds the couple, pays Wickham&apos;s
              debts, and ensures the marriage takes place. Elizabeth learns of Darcy&apos;s intervention
              through Mrs Gardiner and is deeply moved by his generosity.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Resolution (Chapters 51&ndash;61)</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Bingley returns to Netherfield and proposes to Jane. Lady Catherine visits Elizabeth
              to demand she refuse Darcy; Elizabeth defiantly declines. Darcy proposes again, this
              time humbly, and Elizabeth accepts. Both acknowledge their faults: Darcy&apos;s pride
              and Elizabeth&apos;s prejudice. The novel ends with a double wedding and the prospect
              of happiness based on mutual respect and self-knowledge.
            </p>
          </div>
        </div>
      </Section>

      {/* Character Analysis */}
      <Section title="Character Analysis" icon="👤">
        <div className="grid gap-4 sm:grid-cols-2">
          <CharacterCard
            name="Elizabeth Bennet"
            description="The novel's protagonist, Elizabeth is intelligent, witty, and independent-minded. She prides herself on her ability to judge character, which makes her prejudice against Darcy all the more humbling. Her central flaw is that she forms quick judgements based on first impressions and resists revising them. Her journey is one of self-knowledge: she must recognise that her 'fine eyes' can be blinded by vanity. Elizabeth is Austen's most beloved heroine because she is flawed but grows. She refuses Collins despite economic pressure, rejects Darcy's first insulting proposal, and ultimately chooses love based on mutual respect. She represents the possibility of female intelligence and agency within a deeply restrictive society."
          />
          <CharacterCard
            name="Mr Fitzwilliam Darcy"
            description="Initially appears proud, cold, and socially contemptuous. His first proposal to Elizabeth is a masterpiece of tactlessness -- he emphasises his condescension in loving someone beneath him. However, Elizabeth's rejection genuinely shocks him into self-examination. His letter reveals a principled, generous man whose 'pride' is partly justified (he maintains high standards) and partly a defence against a society obsessed with fortune-hunting. His transformation is subtler than Elizabeth's -- he was always good; he simply needed to learn better manners. His actions (saving Lydia, paying Wickham) are performed without expectation of reward, revealing true generosity."
          />
          <CharacterCard
            name="Jane Bennet"
            description="Elizabeth's older sister, Jane is beautiful, gentle, and determined to see the best in everyone. Her refusal to think ill of others is both her greatest virtue and her weakness -- she cannot see Wickham's dishonesty or Miss Bingley's jealousy. Her reserved manner leads Darcy to believe she does not truly love Bingley, creating the central complication. Jane represents the novel's ideal of goodness without judgement, but Austen also suggests that her inability to recognise malice leaves her vulnerable."
          />
          <CharacterCard
            name="Mr Bingley"
            description="Amiable, open, and easily influenced. Bingley falls genuinely in love with Jane but allows Darcy and his sisters to persuade him to leave Netherfield. His willingness to be guided by others' opinions is a weakness that contrasts with Elizabeth's independence. However, his return to Jane and his steadfast affection prove that his character, though pliant, is fundamentally good. Bingley and Jane's relationship, based on mutual sweetness, serves as a foil to the more combative but deeper connection between Elizabeth and Darcy."
          />
          <CharacterCard
            name="Mr Bennet"
            description="Elizabeth's father, an intelligent, sardonic man who has retreated into irony as a defence against his foolish wife and the disappointments of his marriage. He is witty and perceptive -- Elizabeth inherits her intelligence from him -- but fundamentally irresponsible. He refuses to discipline Lydia, control household spending, or save for his daughters' futures. When Lydia's scandal erupts, he is forced to confront the consequences of his passivity. Austen uses Mr Bennet to show that intelligence without moral responsibility is insufficient."
          />
          <CharacterCard
            name="Mrs Bennet"
            description="Loud, vulgar, and obsessed with marrying her daughters to wealthy men. Mrs Bennet is the novel's great comic creation, but Austen gives her anxiety a real basis: without sons, the Bennet estate will pass to Collins through entailment, leaving her daughters destitute. Her desperation, while expressed ridiculously, reflects a genuine systemic injustice. She embodies the marriage market at its most shameless but also its most honest -- she openly states what society demands women pursue covertly."
          />
          <CharacterCard
            name="Lydia Bennet"
            description="The youngest Bennet sister, Lydia is loud, flirtatious, and reckless. Her elopement with Wickham nearly destroys her family's reputation. She is shameless about her behaviour, showing no awareness of the damage she has caused. Austen uses Lydia to illustrate the dangers of poor parenting (Mr Bennet's neglect, Mrs Bennet's indulgence) and the vulnerability of young women in a society that offers them excitement through flirtation but punishes them severely for crossing boundaries."
          />
          <CharacterCard
            name="George Wickham"
            description="Charming, handsome, and thoroughly dishonest. Wickham manipulates Elizabeth's prejudice against Darcy by presenting himself as Darcy's victim. In reality, he squandered the inheritance Darcy's father left him, attempted to elope with Georgiana Darcy for her fortune, and ultimately seduces Lydia Bennet. Austen uses Wickham to demonstrate the danger of judging by appearances -- his attractive surface conceals a mercenary, unprincipled character. He is the anti-Darcy: all charm, no substance."
          />
          <CharacterCard
            name="Lady Catherine de Bourgh"
            description="Darcy's wealthy, domineering aunt who believes her rank entitles her to control others' lives. She is rude, condescending, and assumes her opinions are commands. Her confrontation with Elizabeth -- demanding she refuse Darcy -- backfires spectacularly, as it confirms to Darcy that Elizabeth has not refused him permanently. Lady Catherine represents the worst aspects of aristocratic pride: the assumption that wealth and title confer moral authority."
          />
          <CharacterCard
            name="Mr Collins"
            description="A pompous, self-important clergyman who will inherit the Bennet estate. His proposal to Elizabeth is hilariously tone-deaf -- he lists his 'reasons' for marrying as though presenting a business case, including Lady Catherine's recommendation. His marriage to Charlotte Lucas is purely practical. Collins's servile worship of Lady Catherine satirises the deference expected by the aristocracy. He is comic but also sinister: he represents the kind of marriage Elizabeth would endure if she prioritised security over love."
          />
          <CharacterCard
            name="Charlotte Lucas"
            description="Elizabeth's closest friend, Charlotte is intelligent but pragmatic. At twenty-seven, she accepts Collins's proposal not out of love but necessity -- 'I am not romantic, you know; I never was. I ask only a comfortable home.' Her choice horrifies Elizabeth but is entirely rational within the constraints of Regency society. Charlotte represents the uncomfortable reality that most women cannot afford to marry for love. Austen neither condemns nor celebrates Charlotte's choice but presents it as a logical response to an unjust system."
          />
        </div>
      </Section>

      {/* Themes */}
      <Section title="Key Themes" icon="💡">
        <div className="grid gap-4 sm:grid-cols-2">
          <ThemeCard
            title="Pride"
            description="Both Elizabeth and Darcy suffer from pride, though of different kinds. Darcy's pride is social -- he believes his wealth and family name elevate him above others. Elizabeth's pride is intellectual -- she prides herself on her perceptiveness and judgement. Austen distinguishes between justified self-respect (which Darcy learns to temper) and vanity (which Elizabeth must recognise in herself). Mary Bennet's pedantic definition -- 'pride relates more to our opinion of ourselves, vanity to what we would have others think of us' -- is comic but thematically precise."
          />
          <ThemeCard
            title="Prejudice"
            description="Elizabeth prejudges Darcy based on his behaviour at the ball and Wickham's lies. Her prejudice is reinforced by her pride in her own judgement -- she cannot admit she was wrong. Darcy prejudges Elizabeth's family as beneath him. Both must overcome their prejudices to find happiness. Austen shows that prejudice is not simply ignorance but a failure of self-knowledge: we judge others harshly when we refuse to examine our own biases. Elizabeth's moment of recognition -- 'Till this moment I never knew myself' -- is the novel's emotional and thematic climax."
          />
          <ThemeCard
            title="Love and Marriage"
            description="The novel presents a spectrum of marriages: the Bennets' (failed, based on youthful attraction), Collins and Charlotte (practical, loveless), Lydia and Wickham (impulsive, unsustainable), Jane and Bingley (sweet but untested), and Elizabeth and Darcy (hard-won, based on mutual respect and growth). Austen argues that the best marriages combine genuine affection with mutual respect, self-knowledge, and compatible values. She is not anti-romantic but insists that romance without substance is dangerous."
          />
          <ThemeCard
            title="Class and Social Status"
            description="The novel operates within a rigid class hierarchy. Darcy's initial rejection of Elizabeth is partly based on class ('her family's want of connection'). Lady Catherine explicitly states that Elizabeth is not good enough for Darcy. Yet Austen subtly undermines these distinctions: the Gardiners (Elizabeth's uncle is in trade) are more refined than the Bingleys' sisters; Darcy's good breeding is demonstrated not by birth but by behaviour. Austen critiques the assumption that class equals merit while acknowledging that class determines women's futures."
          />
          <ThemeCard
            title="Reputation"
            description="In Regency society, reputation -- especially for women -- is everything. Lydia's elopement threatens to destroy not just her own prospects but those of all her sisters. Even a rumour of impropriety could make a woman unmarriageable. Austen shows how reputation functions as social control: women must regulate their behaviour not because it is morally necessary but because society will punish any deviation. Elizabeth's willingness to challenge social expectations (walking through mud, refusing Collins) is daring precisely because reputation is so fragile."
          />
          <ThemeCard
            title="Gender and Women's Roles"
            description="Women in Regency England had limited options: marriage was the only respectable path to financial security. The Bennet sisters cannot inherit their father's estate. Charlotte marries Collins because the alternative is poverty. Mrs Bennet's obsessive matchmaking, while comic, reflects a real economic desperation. Austen does not explicitly campaign for women's rights but her novels expose the injustice of a system that reduces intelligent women to dependants. Elizabeth's refusal of two proposals is an act of extraordinary courage in this context."
          />
          <ThemeCard
            title="Family"
            description="The Bennet family is both lovable and dysfunctional. Mr Bennet's detachment, Mrs Bennet's embarrassing behaviour, and Lydia's recklessness all have consequences. Austen shows that family shapes individual character: Elizabeth's intelligence comes from her father, her social courage from navigating her mother's foolishness. Yet family can also be an obstacle -- Darcy's initial objection to Elizabeth is her family's impropriety, not Elizabeth herself. The novel argues that good family relationships require active engagement, not passive tolerance."
          />
        </div>
      </Section>

      {/* Key Quotations */}
      <Section title="Key Quotations with Analysis" icon="📝">
        <div className="space-y-1">
          <QuoteCard
            quote="It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
            speaker="Narrator"
            analysis="The novel's famous opening line operates on multiple levels. On the surface, it states a 'truth,' but Austen's irony immediately undercuts it -- it is not the single man who 'wants' a wife but the surrounding families who want him for their daughters. 'Universally acknowledged' satirises the way society presents self-interest as universal principle. The sentence announces the novel's central concern: the marriage market and the economic realities behind romantic love."
          />
          <QuoteCard
            quote="She is tolerable, but not handsome enough to tempt me."
            speaker="Darcy"
            analysis="Darcy's dismissal of Elizabeth at the Meryton ball. 'Tolerable' is devastatingly faint praise -- it acknowledges competence while denying attraction. 'Tempt me' implies that Darcy sees himself as above temptation, revealing his social pride. This line establishes the 'prejudice' that both characters must overcome. Austen gives Darcy the most insulting possible introduction, making his later transformation all the more dramatic."
          />
          <QuoteCard
            quote="Till this moment I never knew myself."
            speaker="Elizabeth"
            analysis="Elizabeth's moment of anagnorisis (self-recognition) after reading Darcy's letter. She realises her pride in her own judgement was a form of vanity, and her prejudice against Darcy was based on wounded ego and Wickham's charm. This single sentence encapsulates the novel's moral argument: self-knowledge is the prerequisite for good judgement, genuine love, and moral growth. It is the pivot on which the entire plot turns."
          />
          <QuoteCard
            quote="In vain I have struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you."
            speaker="Darcy (first proposal)"
            analysis="Darcy's first proposal is a masterclass in saying the wrong thing. 'In vain I have struggled' implies that loving Elizabeth is a battle he has lost. 'My feelings will not be repressed' presents his love as involuntary -- something that happens to him despite his better judgement. 'You must allow me' is imperious, not romantic. He 'admires' her but has spent the proposal explaining why he should not. Austen perfectly captures how pride destroys the romantic gesture."
          />
          <QuoteCard
            quote="I could easily forgive his pride, if he had not mortified mine."
            speaker="Elizabeth"
            analysis="Elizabeth's early assessment reveals more about herself than about Darcy. She objects not to pride in principle but to being its victim. 'Mortified' -- meaning humiliated -- shows that Elizabeth's prejudice against Darcy is partly wounded vanity. Austen slyly reveals that Elizabeth's pride and Darcy's are mirror images: both are affronted when they feel undervalued. The symmetry of the sentence enacts the novel's central pairing."
          />
          <QuoteCard
            quote="I am not romantic, you know; I never was. I ask only a comfortable home."
            speaker="Charlotte Lucas"
            analysis="Charlotte's justification for marrying Collins. 'Comfortable' -- not happy, not loving, merely comfortable -- reveals the limited aspirations available to women without fortune or exceptional beauty. 'I never was' romantic is partly self-defence and partly honest acknowledgement of her situation. Austen does not mock Charlotte but presents her pragmatism as a rational response to a system that offers women few alternatives."
          />
          <QuoteCard
            quote="Happiness in marriage is entirely a matter of chance."
            speaker="Charlotte Lucas"
            analysis="Charlotte's philosophy of marriage, stated before she accepts Collins. It is the opposite of Elizabeth's romantic idealism -- and arguably closer to the novel's reality. Many marriages in the book are unhappy (the Bennets, Lydia and Wickham). Charlotte's 'chance' removes agency and responsibility from marriage, which Austen resists -- Elizabeth and Darcy's happiness is not chance but the result of self-examination and moral growth."
          />
          <QuoteCard
            quote="There are few people whom I really love, and still fewer of whom I think well."
            speaker="Elizabeth"
            analysis="A characteristically witty self-assessment. Elizabeth distinguishes between love (emotional attachment) and respect (intellectual esteem), implying that the two rarely coincide. This is both attractive (she has high standards) and revealing (she may be too quick to judge). Austen makes Elizabeth's intelligence a double-edged sword -- it gives her insight but also feeds her prejudice."
          />
          <QuoteCard
            quote="You are too generous to trifle with me. If your feelings are still what they were last April, tell me so at once. My affections and wishes are unchanged, but one word from you will silence me on this subject for ever."
            speaker="Darcy (second proposal)"
            analysis="Compare this to the first proposal. Darcy is humble ('too generous to trifle'), conditional ('if'), and respectful ('one word from you will silence me'). He acknowledges Elizabeth's power over him without resentment. 'My affections and wishes are unchanged' -- he still loves her but has learned to express it without condescension. The transformation in his language mirrors his moral growth."
          />
          <QuoteCard
            quote="You must learn some of my philosophy. Think only of the past as its remembrance gives you pleasure."
            speaker="Elizabeth"
            analysis="Elizabeth advises Darcy to let go of his regrets. This echoes the novel's optimistic conclusion: the past (pride, prejudice, mistakes) can be acknowledged and moved beyond. However, there is also irony -- Elizabeth herself spent much of the novel clinging to past impressions rather than revising them. The advice reflects her growth: she now understands that dwelling on errors is less valuable than learning from them."
          />
          <QuoteCard
            quote="A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony, in a moment."
            speaker="Darcy"
            analysis="Darcy's ironic observation about the speed with which society assumes romantic interest equals marital intention. Austen uses this line both to satirise Mrs Bennet's matchmaking and to comment on the pressure women face to convert any male attention into a marriage proposal. The irony cuts both ways -- Darcy's own feelings eventually follow a similar trajectory."
          />
          <QuoteCard
            quote="What are men to rocks and mountains?"
            speaker="Elizabeth"
            analysis="Elizabeth's witty dismissal of romantic concerns when anticipating her trip to the Lake District. On the surface, she prefers landscape to love. But Austen is being ironic -- Elizabeth will soon visit Pemberley (Darcy's estate), where the landscape quite literally leads her to reconsider the man. The quip reveals Elizabeth's habit of using wit to deflect genuine feeling."
          />
          <QuoteCard
            quote="I have been a selfish being all my life, in practice, though not in principle."
            speaker="Darcy"
            analysis="Darcy's crucial self-assessment near the novel's end. He distinguishes between his moral principles (which were sound) and his behaviour (which was not). 'In practice, though not in principle' is a devastatingly honest distinction -- he was taught 'right principles' but 'left to follow them in pride and conceit.' Austen argues that good principles without good behaviour are worthless."
          />
          <QuoteCard
            quote="My courage always rises at every attempt to intimidate me."
            speaker="Elizabeth"
            analysis="Elizabeth's response to Darcy's friend Colonel Fitzwilliam. This defines her character: she is defiant in the face of social pressure. It is both admirable (she will not be bullied) and slightly reckless (she sometimes fights battles she does not need to fight). The line foreshadows her rejection of Darcy's first proposal and her confrontation with Lady Catherine."
          />
          <QuoteCard
            quote="We all love to instruct, though we can teach only what is not worth knowing."
            speaker="Elizabeth"
            analysis="A self-deprecating observation about the limits of advice-giving. Elizabeth recognises that the most important lessons -- self-knowledge, humility, genuine love -- cannot be taught by others but must be learned through experience. This is the novel's educational philosophy: Elizabeth and Darcy do not change because they are lectured but because they are confronted with the consequences of their own failings."
          />
          <QuoteCard
            quote="For what do we live, but to make sport for our neighbours, and laugh at them in our turn?"
            speaker="Mr Bennet"
            analysis="Mr Bennet's philosophy of life as entertainment. While comic, this reveals his fundamental irresponsibility -- he treats his family's crises as amusing spectacles rather than problems requiring action. His detachment, while producing excellent wit, fails his daughters when they need him most. Austen implies that humour without engagement is a form of neglect."
          />
          <QuoteCard
            quote="You showed me how insufficient were all my pretensions to please a woman worthy of being pleased."
            speaker="Darcy"
            analysis="Darcy credits Elizabeth with his transformation. 'Pretensions' -- claims without justification -- is precisely the right word. His wealth, status, and connections, which he thought entitled him to any woman's acceptance, were 'insufficient' when confronted by Elizabeth's standards. 'A woman worthy of being pleased' elevates Elizabeth's judgement as the true measure of value, inverting the social hierarchy."
          />
          <QuoteCard
            quote="How little of permanent happiness could belong to a couple who were only brought together because their passions were stronger than their virtue."
            speaker="Narrator, on Lydia and Wickham"
            analysis="Austen's devastating verdict on Lydia's marriage. 'Permanent happiness' -- the novel's standard for a good marriage -- requires more than passion. The opposition of 'passions' and 'virtue' reflects Austen's moral framework: desire without self-control leads to misery. This directly contrasts with Elizabeth and Darcy, whose relationship is built on the hard work of self-improvement."
          />
          <QuoteCard
            quote="I was in the middle before I knew that I had begun."
            speaker="Darcy"
            analysis="Darcy explains when he fell in love with Elizabeth. The sentence captures the unconscious nature of genuine love -- it is not a decision but a gradual process that becomes apparent only in retrospect. This contrasts with his first proposal, where he tried to rationalise and control his feelings. By the second proposal, he accepts love as something that happened to him naturally."
          />
          <QuoteCard
            quote="Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us."
            speaker="Mary Bennet"
            analysis="Mary's pedantic distinction is comic in context (she is the least socially aware Bennet sister), but it is thematically essential. Darcy is proud but not vain -- he cares about his own standards, not others' opinions. Elizabeth is vain but calls it pride -- her 'fine eyes' and wit give her a sense of superiority that she mistakes for principled judgement. Austen uses the least perceptive character to state the novel's most important thematic distinction."
          />
        </div>
      </Section>

      {/* Context */}
      <Section title="Historical and Social Context" icon="🏛️">
        <div className="space-y-4">
          <div className="rounded-lg bg-primary-50 p-4">
            <h4 className="font-bold text-primary-700">Regency Era (1811&ndash;1820)</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              The Regency period, when the Prince of Wales ruled as regent for the incapacitated
              George III, was a time of social elegance, rigid etiquette, and sharp class distinctions.
              Austen&apos;s novels capture the world of the landed gentry &mdash; a class dependent on
              inherited wealth, property, and social connections. Balls, visits, and letter-writing
              were the main forms of social interaction. The Napoleonic Wars (1803&ndash;1815) form
              the background to the novel &mdash; the militia officers stationed near Meryton
              (including Wickham) are a direct consequence of the war effort.
            </p>
          </div>
          <div className="rounded-lg bg-primary-50 p-4">
            <h4 className="font-bold text-primary-700">Women&apos;s Rights and Legal Status</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Women in Regency England had virtually no legal rights. They could not own property
              after marriage (everything transferred to the husband), could not vote, had limited
              access to education, and could not enter the professions. Marriage was the only
              respectable means of financial security for genteel women. This makes Charlotte&apos;s
              pragmatic marriage to Collins entirely rational, and Elizabeth&apos;s refusals genuinely
              courageous.
            </p>
          </div>
          <div className="rounded-lg bg-primary-50 p-4">
            <h4 className="font-bold text-primary-700">Entailment</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              The Bennet estate is &ldquo;entailed&rdquo; &mdash; legally restricted to pass only to
              male heirs. Since the Bennets have no sons, the estate will go to Mr Collins on Mr
              Bennet&apos;s death, leaving Mrs Bennet and her daughters homeless. This legal mechanism
              drives the entire plot: Mrs Bennet&apos;s desperation to marry her daughters is not
              merely comic but a survival strategy. Entailment was a real and common practice
              designed to keep estates intact across generations, but it systematically disadvantaged women.
            </p>
          </div>
          <div className="rounded-lg bg-primary-50 p-4">
            <h4 className="font-bold text-primary-700">Class and Social Mobility</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Regency society had a clearly defined hierarchy: aristocracy, landed gentry, clergy,
              military, professional classes, tradespeople, and servants. Social mobility was possible
              but viewed with suspicion. Darcy&apos;s contempt for Elizabeth&apos;s &ldquo;connections&rdquo;
              (her uncle is in trade) reflects real social prejudice. Bingley&apos;s wealth is &ldquo;new
              money&rdquo; from trade, which his sisters try to disguise. Austen shows that class
              distinctions are often arbitrary and that moral worth bears no relation to social rank.
            </p>
          </div>
          <div className="rounded-lg bg-primary-50 p-4">
            <h4 className="font-bold text-primary-700">The Marriage Market</h4>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Balls, assemblies, and social calls functioned as a marriage market where young women
              were displayed and assessed. A woman&apos;s value was measured by her beauty, accomplishments
              (music, drawing, languages), family connections, and dowry. Austen satirises this system
              while acknowledging its power: characters who ignore it (Lydia) are ruined; those who
              navigate it skillfully (Elizabeth, by being herself) triumph. The novel exposes the
              economic transaction beneath the romantic surface of courtship.
            </p>
          </div>
        </div>
      </Section>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-accent-100 bg-accent-50/50 p-6">
        <h3 className="text-lg font-bold text-gray-900">Exam Tips for Pride and Prejudice</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Focus on Austen&apos;s irony.</strong> Almost every sentence operates on more than one level. Identify where Austen says one thing and means another.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Compare the two proposals.</strong> Darcy&apos;s first and second proposals reveal his transformation. Use specific language analysis to show this.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Discuss the marriage spectrum.</strong> Use Charlotte/Collins, Lydia/Wickham, and Jane/Bingley as foils for Elizabeth/Darcy.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Link to context carefully.</strong> Discuss entailment, women&apos;s limited options, and class hierarchy to show why characters behave as they do.</span>
          </li>
        </ul>
      </div>
    </>
  );
}
