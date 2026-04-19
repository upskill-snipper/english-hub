'use client'

import Link from 'next/link'
import { ArrowLeft, Users, Quote, Lightbulb, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Character data ──────────────────────────────────────────────────── */

type CharacterQuote = {
  text: string
  stave: string
  analysis: string
}

type CharacterData = {
  name: string
  role: string
  description: string
  represents: string
  arc: string[]
  keyQuotes: CharacterQuote[]
  themeLinks: string[]
  examTips: string[]
}

const characters: CharacterData[] = [
  {
    name: 'Ebenezer Scrooge',
    role: 'Protagonist; miserly moneylender who undergoes a complete moral transformation',
    description:
      'Scrooge is the emotional and moral centre of the entire novella. Dickens introduces him with a barrage of violent adjectives -- "a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!" -- each suggesting a different type of physical cruelty. He is defined entirely by what he takes from the world. His coldness is both literal and metaphorical: he refuses to pay for heating and has frozen out all human warmth from his life. Yet Dickens is careful to show that Scrooge was not born this way. Through the visions of Christmas Past, we learn he was a lonely, neglected child whose fear of poverty drove him to worship money at the expense of love. His transformation -- from a man who sees other people only as obstacles to one who recognises his connection to humanity -- is the entire arc of the novella.',
    represents:
      'Scrooge represents the Victorian capitalist class who prioritised profit over people. His line about the poor dying to "decrease the surplus population" directly echoes the Malthusian economics Dickens despised. His transformation is Dickens\'s argument that even the hardest hearts can change, and that empathy is a choice available at any point in life.',
    arc: [
      'Stave 1: Introduced as the archetypal miser. Rejects Fred\'s dinner invitation, dismisses charity collectors with Malthusian cruelty, grudgingly allows Bob one day off. Visited by Marley\'s ghost.',
      'Stave 2: Confronts painful memories. Weeps at his lonely childhood self. Sees Fezziwig\'s generosity and recognises his own failure as an employer. Watches Belle leave him because "another idol has displaced me."',
      'Stave 3: Witnesses the Cratchit family\'s loving poverty. Feels genuine concern for Tiny Tim. Is horrified when the Ghost throws his own words -- "decrease the surplus population" -- back at him. Sees Ignorance and Want.',
      'Stave 4: Sees his own death -- unmourned, his possessions stolen, his grave untended. Contrasts this with the deeply mourned Tiny Tim. Makes his desperate vow to change.',
      'Stave 5: Transformed entirely. Sends the turkey, donates to charity, attends Fred\'s dinner, raises Bob\'s salary. Becomes "as good a friend, as good a master, and as good a man, as the good old city knew."',
    ],
    keyQuotes: [
      {
        text: '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!"',
        stave: 'Stave 1 (Narrator)',
        analysis:
          'Dickens uses a listing technique with seven consecutive adjectives, each an act of physical violence or theft. The progressive participles ("-ing" endings) create a relentless, grinding rhythm. Scrooge is defined entirely by what he extracts from the world.',
      },
      {
        text: '"If they would rather die, they had better do it, and decrease the surplus population."',
        stave: 'Stave 1 (Scrooge)',
        analysis:
          'A direct allusion to Malthus\'s theory of population. Dickens makes the reader hear how cruel utilitarian philosophy sounds when applied to real people. The Ghost of Christmas Present throws this line back in Stave 3, transforming it from dismissal to accusation.',
      },
      {
        text: '"I should like to be able to say a word or two to my clerk just now."',
        stave: 'Stave 2 (Scrooge)',
        analysis:
          'Scrooge\'s first moment of moral awakening. He connects Fezziwig\'s kindness as an employer to his own cruelty toward Bob Cratchit. The understated phrasing shows Scrooge is not yet transformed but is beginning to feel discomfort.',
      },
      {
        text: '"I will honour Christmas in my heart, and try to keep it all the year."',
        stave: 'Stave 4 (Scrooge)',
        analysis:
          'Scrooge\'s vow at the gravestone. "Try" adds humility and realism -- he commits to effort, not perfection. "All the year" extends Christmas from a single day to a permanent moral principle.',
      },
      {
        text: '"I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy."',
        stave: 'Stave 5 (Scrooge)',
        analysis:
          'The triple simile mirrors the triple visitation. Each comparison undoes one quality of the old Scrooge: lightness replaces heaviness, happiness replaces misery, merriment replaces hostility. The anaphoric "I am" asserts a new identity.',
      },
    ],
    themeLinks: [
      'Redemption and Change -- Scrooge IS the theme. His arc proves that transformation is possible at any age.',
      'Social Responsibility -- His dismissal of the poor represents Victorian utilitarian cruelty; his transformation represents Dickens\'s hope for reform.',
      'Isolation vs Family -- Scrooge\'s loneliness is both cause and consequence of his greed.',
      'Greed and Capitalism -- He embodies the Victorian capitalist who values profit over people.',
    ],
    examTips: [
      'Track Scrooge\'s language across the staves: cold, transactional vocabulary in Stave 1 gives way to warm, emotional language by Stave 5.',
      'Always link Scrooge\'s transformation to Dickens\'s PURPOSE -- he is arguing that the wealthy can and must change their attitudes toward the poor.',
      'The three ghosts represent three stages of moral education: regret (Past), empathy (Present), fear (Future). Discuss which is most effective and why.',
      'Compare the lonely child of Stave 2 with the joyful reborn man of Stave 5 -- Dickens suggests Scrooge reclaims the openness he lost.',
    ],
  },
  {
    name: 'Bob Cratchit',
    role: 'Scrooge\'s underpaid clerk; devoted father',
    description:
      'Bob Cratchit earns fifteen shillings a week and works in a freezing office with a "very small fire." He represents the honest, hard-working poor who are exploited by employers like Scrooge. Despite his poverty, Bob is generous, loving and loyal. He even proposes a toast to Scrooge at Christmas dinner, much to Mrs Cratchit\'s annoyance. Dickens uses Bob to demonstrate that wealth has nothing to do with moral worth -- Bob is richer in spirit than Scrooge is in money. His devotion to Tiny Tim makes the reader feel the human cost of economic cruelty at its most personal and painful.',
    represents:
      'Bob represents the Victorian working class -- decent, hard-working people trapped in poverty not through any moral failing but through an unjust economic system. His loyalty to Scrooge despite mistreatment shows the power imbalance between employer and employee. His eventual reward (a raised salary) embodies Dickens\'s argument that employers bear moral responsibility for their workers\' wellbeing.',
    arc: [
      'Stave 1: Works in a freezing office. Grudgingly allowed one day off for Christmas. Slides down Cornhill on the ice -- his childlike joy contrasts with Scrooge\'s misery.',
      'Stave 3: Centre of the Cratchit Christmas dinner. Carries Tiny Tim on his shoulder. Proposes a toast to Scrooge despite Mrs Cratchit\'s objections.',
      'Stave 4: Mourns Tiny Tim with devastating simplicity: "My little, little child!" Holds the family together through grief.',
      'Stave 5: Receives the huge turkey anonymously. Scrooge raises his salary and promises to help his family.',
    ],
    keyQuotes: [
      {
        text: '"Bob had but fifteen bob a week himself; he pocketed on Saturdays but fifteen copies of his Christian name."',
        stave: 'Stave 1 (Narrator)',
        analysis:
          'Dickens puns on "bob" (a slang term for a shilling) to connect Bob\'s name to his poverty. The wordplay adds warmth and humour but also underlines how little he earns. The casual tone makes the poverty seem normalised -- which is Dickens\'s point.',
      },
      {
        text: '"My little, little child! My little child!"',
        stave: 'Stave 4 (Bob Cratchit)',
        analysis:
          'The heartbreaking simplicity of this line is its power. The repetition of "little" conveys overwhelming grief. There are no elaborate words -- Bob\'s pain is too raw for eloquence. The diminutive reminds us of Tiny Tim\'s vulnerability.',
      },
      {
        text: '"Mr Scrooge! the Founder of the Feast!"',
        stave: 'Stave 3 (Bob Cratchit)',
        analysis:
          'Bob toasts Scrooge despite his employer\'s cruelty, demonstrating his generous spirit and forgiving nature. The title "Founder of the Feast" is deeply ironic -- Scrooge has contributed nothing to the Cratchits\' happiness.',
      },
    ],
    themeLinks: [
      'Poverty and Social Injustice -- Bob\'s fifteen shillings a week illustrate Victorian economic exploitation.',
      'Family and Togetherness -- Bob is the emotional centre of the Cratchit family, defined by his love for his children.',
      'Christmas Spirit -- His willingness to toast Scrooge shows the generosity Dickens celebrates.',
    ],
    examTips: [
      'Bob is not just a victim -- he has agency and moral strength. His toast to Scrooge shows nobility of character.',
      'Compare Bob as employee with Fezziwig as employer to highlight Dickens\'s argument about the moral duty of employers.',
      'Bob\'s grief in Stave 4 is one of the most powerful moments in the novella. Analyse how simple language creates devastating pathos.',
    ],
  },
  {
    name: 'Tiny Tim',
    role: 'Bob Cratchit\'s youngest son; disabled child whose life depends on Scrooge\'s transformation',
    description:
      'Tiny Tim is a disabled child who walks with a crutch and whose life hangs in the balance throughout the novella. He is not a fully developed character in the realistic sense -- Dickens uses him as a symbolic figure, a moral lever designed to crack Scrooge\'s selfishness. His famous line, "God bless Us, Every One!", makes him an embodiment of Christian charity and innocence. His potential death is the emotional climax of the story, and his survival in Stave 5 is the ultimate sign that Scrooge\'s transformation has real consequences.',
    represents:
      'Tiny Tim represents the thousands of poor Victorian children who died because society refused to care for them. His disability makes him dependent on others -- he cannot save himself, and his survival depends entirely on whether Scrooge (representing the wealthy) will act. Dickens uses him to argue that social indifference has a body count.',
    arc: [
      'Stave 3: Sits beside his father at Christmas dinner. Says "God bless Us, Every One!" The Ghost warns that without change, he will die.',
      'Stave 4: His death is shown in the alternative future. The family mourns him. Bob visits his grave and promises to walk there every Sunday.',
      'Stave 5: Survives because of Scrooge\'s transformation. Scrooge becomes "a second father" to him.',
    ],
    keyQuotes: [
      {
        text: '"God bless Us, Every One!"',
        stave: 'Stave 3 (Tiny Tim)',
        analysis:
          'The novella\'s most famous line is a prayer for universal blessing. "Every One" includes Scrooge, the rich, the poor, the cruel and the kind. The fact that this prayer comes from the poorest, most vulnerable character is Dickens\'s sharpest moral point: those with the least give the most.',
      },
      {
        text: '"If these shadows remain unaltered by the Future, the child will die."',
        stave: 'Stave 3 (Ghost of Christmas Present)',
        analysis:
          'The conditional "if" places moral responsibility on Scrooge and the reader. Tiny Tim\'s death is not a prophecy but a warning. The future can be changed -- but only if society chooses to act.',
      },
      {
        text: '"He bore a little crutch, and had his limbs supported by an iron frame."',
        stave: 'Stave 3 (Narrator)',
        analysis:
          'Dickens describes Tim\'s disability with matter-of-fact compassion. The "iron frame" is both literal (a medical support) and symbolic -- Tim is constrained by a society that will not help him. The word "little" emphasises his vulnerability.',
      },
    ],
    themeLinks: [
      'Social Responsibility -- Tim\'s survival depends on whether the wealthy will act. He is Dickens\'s direct appeal to his readers.',
      'Death and Mortality -- Tim\'s potential death is the threat that motivates Scrooge\'s change.',
      'Christmas Spirit -- Tim embodies selfless generosity, blessing everyone despite his own suffering.',
    ],
    examTips: [
      'Discuss whether Tiny Tim is a character or a symbol -- the best answers explore both dimensions.',
      'His death in Stave 4 is conditional, not certain. Focus on how Dickens uses the conditional to place responsibility on the reader.',
      'Link Tiny Tim to Dickens\'s real-world campaign against child poverty and the workhouse system.',
    ],
  },
  {
    name: 'Ghost of Christmas Past',
    role: 'The first of the three spirits; represents memory and truth',
    description:
      'The Ghost of Christmas Past is an extraordinary, contradictory figure: both old and young, both strong and gentle, with a bright light shining from its head. It carries a cap shaped like an extinguisher that can dim its light. This light symbolises truth and memory -- things Scrooge has tried to suppress. The ghost\'s physical ambiguity reflects the nature of memory itself: it belongs to every age simultaneously. The spirit\'s function is to make Scrooge confront his past honestly, to understand how he became the man he is.',
    represents:
      'The Ghost represents memory and self-knowledge. Its light symbolises the uncomfortable truth that Scrooge has spent years trying to extinguish. Memory is presented as the first stage of moral education: before you can change, you must understand how you got here.',
    arc: [
      'Stave 2: Takes Scrooge back to his childhood -- the lonely schoolboy, the arrival of sister Fan, the joy of Fezziwig\'s party, and the painful departure of Belle.',
      'Scrooge weeps at his younger self and eventually begs the spirit to show him no more.',
      'Scrooge forces the extinguisher cap over the ghost\'s head, but the light cannot be fully suppressed.',
    ],
    keyQuotes: [
      {
        text: '"It was a strange figure -- like a child: yet not so like a child as like an old man."',
        stave: 'Stave 2 (Narrator)',
        analysis:
          'The contradictory description reflects the nature of memory: it is both ancient (from the past) and perpetually fresh (memories feel immediate). The Ghost defies categorisation, just as the past defies neat interpretation.',
      },
      {
        text: '"What the Ghost pointed out... were shadows of the things that have been. They are what they are, do not blame me!"',
        stave: 'Stave 2 (Ghost of Christmas Past)',
        analysis:
          'The Ghost insists it shows only truth, not judgement. The past cannot be altered or argued with. Scrooge\'s discomfort comes from his own guilt, not from the spirit\'s cruelty. Dickens establishes that honesty is painful but necessary.',
      },
      {
        text: '"He could not hide the light: which streamed from under it, in an unbroken flood upon the ground."',
        stave: 'Stave 2 (Narrator)',
        analysis:
          'When Scrooge forces the cap over the Ghost\'s head, the light still escapes. Truth and memory cannot be fully extinguished. This symbolism is central: Scrooge has spent years suppressing uncomfortable truths, but the light always finds a way through.',
      },
    ],
    themeLinks: [
      'Time and Memory -- The Ghost embodies the idea that the past shapes the present.',
      'Redemption -- Understanding the past is the first step toward change.',
      'Isolation -- The lonely schoolboy reveals the origins of Scrooge\'s emotional withdrawal.',
    ],
    examTips: [
      'The light symbolism is crucial -- discuss how truth and memory are presented as forces that cannot be suppressed.',
      'Analyse the Ghost\'s ambiguous appearance as a metaphor for the nature of memory itself.',
      'Compare its approach (gentle revelation) with the Ghost of Christmas Yet to Come (silent terror). Which is more effective at changing Scrooge?',
    ],
  },
  {
    name: 'Ghost of Christmas Present',
    role: 'The second spirit; represents abundance, generosity and present-day reality',
    description:
      'The Ghost of Christmas Present is a "jolly Giant" dressed in a green robe bordered with white fur, seated on a throne made of food -- turkeys, geese, sausages, puddings, and fruits. Its torch, shaped like a cornucopia (Plenty\'s horn), sprinkles a special incense on food, improving the meals of the poor. This spirit embodies the warmth and generosity of the Christmas season. But it is not merely cheerful: it reveals the suffering hidden beneath society\'s surface, most devastatingly in the children Ignorance and Want concealed beneath its robe.',
    represents:
      'The Ghost represents the potential for generosity and compassion in the present moment. Its abundance symbolises what could be shared if the wealthy chose to give. It also represents reality -- the present truth that Scrooge has been ignoring. Its dual nature (joy and suffering) reflects Dickens\'s message: Christmas cheer is real, but so is the poverty that exists alongside it.',
    arc: [
      'Stave 3: Shows Scrooge the streets of London on Christmas morning, the Cratchit family dinner, Fred\'s party, and celebrations across Britain.',
      'Warns Scrooge about Tiny Tim\'s death. Throws Scrooge\'s own words back at him.',
      'Reveals Ignorance and Want beneath its robe. Ages visibly and disappears at midnight.',
    ],
    keyQuotes: [
      {
        text: '"This boy is Ignorance. This girl is Want. Beware them both... but most of all beware this boy, for on his brow I see that written which is Doom."',
        stave: 'Stave 3 (Ghost of Christmas Present)',
        analysis:
          'Dickens\'s most explicitly political passage. The allegorical children represent the consequences of society\'s neglect. The warning that ignorance leads to "Doom" is aimed at the Victorian ruling class: deny education and welfare, and civilisation will fall.',
      },
      {
        text: '"If he be like to die, he had better do it, and decrease the surplus population."',
        stave: 'Stave 3 (Ghost of Christmas Present, quoting Scrooge)',
        analysis:
          'The Ghost throws Scrooge\'s own Stave 1 words back at him. Applied to the specific, loveable Tiny Tim, the abstract utilitarian language becomes monstrous. Dickens\'s technique: making comfortable political language confront its human consequences.',
      },
      {
        text: '"Come in! and know me better, man!"',
        stave: 'Stave 3 (Ghost of Christmas Present)',
        analysis:
          'The Ghost\'s greeting is warm and imperative -- an invitation to engage with the world rather than withdraw from it. "Know me better" suggests Scrooge must understand the present before he can change the future.',
      },
    ],
    themeLinks: [
      'Social Responsibility -- The Ghost directly challenges Scrooge\'s indifference to poverty.',
      'Christmas Spirit -- It embodies generosity and communal celebration.',
      'Poverty -- Ignorance and Want are Dickens\'s most powerful political statement.',
    ],
    examTips: [
      'This Ghost is both joyful and political. The best essays explore BOTH dimensions -- do not present it as simply cheerful.',
      'Ignorance and Want are the political heart of the novella. Link them to Dickens\'s 1843 context -- the ragged schools and child labour report.',
      'The Ghost ages and dies within a single stave. Discuss what this symbolises -- the present is always fleeting.',
    ],
  },
  {
    name: 'Ghost of Christmas Yet to Come',
    role: 'The third and final spirit; represents death and the consequences of an unchanged life',
    description:
      'The Ghost of Christmas Yet to Come is the most terrifying of the three spirits. It is described as a "solemn Phantom, draped and hooded" in a deep black garment that conceals everything except one outstretched hand. It does not speak a single word throughout the entire stave. Its silence makes it more frightening than either previous ghost -- it offers no comfort, no explanation, and no reassurance. The phantom represents death itself, and its silence reflects death\'s absolute finality.',
    represents:
      'The Ghost represents the future consequences of present choices. Its silence forces Scrooge to draw his own conclusions. It also personifies death -- the ultimate consequence of a selfish life. Its dark, featureless appearance contrasts with the brightness of the Ghost of Christmas Past and the warmth of the Ghost of Christmas Present.',
    arc: [
      'Stave 4: Shows Scrooge businessmen discussing a death with callous indifference.',
      'Takes him to Old Joe\'s shop where thieves sell a dead man\'s possessions.',
      'Shows the Cratchit family mourning Tiny Tim.',
      'Leads Scrooge to a gravestone bearing his own name.',
    ],
    keyQuotes: [
      {
        text: '"Ghost of the Future! I fear you more than any spectre I have seen."',
        stave: 'Stave 4 (Scrooge)',
        analysis:
          'Scrooge names his own fear. The future is more terrifying than the past or present because it is still undecided. Fear is the final and most powerful motivator in Scrooge\'s moral education.',
      },
      {
        text: '"Are these the shadows of the things that Will be, or are they shadows of the things that May be, only?"',
        stave: 'Stave 4 (Scrooge)',
        analysis:
          'The philosophical pivot of the novella. The distinction between "Will be" and "May be" is crucial. The moral of the story depends on the answer being "may be" -- free will exists, and redemption is always possible.',
      },
      {
        text: '"Spirit! hear me! I am not the man I was!"',
        stave: 'Stave 4 (Scrooge)',
        analysis:
          'Scrooge\'s desperate plea claims transformation in the present tense. He has separated the person he was from the person he chooses to be. The exclamatory urgency shows his desperation; the silent spirit creates a powerful one-sided dialogue.',
      },
    ],
    themeLinks: [
      'Death and Mortality -- The Ghost IS death personified. Its silence is the silence of the grave.',
      'Redemption -- Fear of death is the final push that completes Scrooge\'s transformation.',
      'Time -- The future is conditional, not fixed. Scrooge can still change his fate.',
    ],
    examTips: [
      'Compare this Ghost\'s silence with the previous ghosts\' speech. Analyse WHY silence is more effective here.',
      'The gravestone scene is the climax of the novella. Discuss how Dickens builds to this revelation through the unmourned dead man.',
      'Link the Ghost to the "memento mori" tradition -- reminders of death as motivation for a better life.',
    ],
  },
  {
    name: 'Jacob Marley',
    role: 'Scrooge\'s dead business partner; appears as a ghost to deliver the first warning',
    description:
      'Marley\'s ghost appears in Stave 1 as a terrifying supernatural warning. He wears a heavy chain "made of cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel" -- each link representing a selfish act committed during life. His jawbone is bound shut with a bandage (as was customary for the Victorian dead), and when he unties it, his jaw drops, creating a horrifying image. Marley is crucial because he establishes the supernatural rules of the novella: selfishness in life leads to eternal punishment, but Scrooge still has a chance to escape that fate.',
    represents:
      'Marley represents the consequences of a life without compassion. His chain is Dickens\'s central metaphor: every selfish act adds physical weight. He also represents the possibility of too-late realisation -- Marley sees the truth only after death, when he can no longer change. His warning to Scrooge is an act of posthumous generosity, the one selfless thing he does.',
    arc: [
      'Stave 1: Appears to Scrooge in his chambers. Reveals his chain and explains its meaning.',
      'Delivers the novella\'s thesis: "Mankind was my business." Warns that three spirits will visit.',
      'Shows Scrooge other chained ghosts outside the window, all wailing with regret.',
    ],
    keyQuotes: [
      {
        text: '"I wear the chain I forged in life. I made it link by link, and yard by yard."',
        stave: 'Stave 1 (Marley)',
        analysis:
          'The chain is Dickens\'s most powerful metaphor. The craftsmanship language -- "forged," "link by link" -- makes greed feel deliberate and cumulative. Each selfish act adds weight. The first-person ownership emphasises personal responsibility.',
      },
      {
        text: '"Mankind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence were, all, my business."',
        stave: 'Stave 1 (Marley)',
        analysis:
          'Marley redefines "business" from commerce to compassion. This is Dickens\'s thesis statement for the novella. The listing of virtues -- charity, mercy, forbearance, benevolence -- contrasts with the listing of Scrooge\'s vices in the opening paragraph.',
      },
      {
        text: '"I am here to-night to warn you, that you have yet a chance and hope of escaping my fate."',
        stave: 'Stave 1 (Marley)',
        analysis:
          'Marley offers "a chance and hope" -- the language of possibility, not certainty. Scrooge must earn his redemption; it is not guaranteed. This establishes the novella\'s moral framework: free will and personal responsibility.',
      },
    ],
    themeLinks: [
      'Greed and Capitalism -- His chain is made of the instruments of commerce turned to instruments of punishment.',
      'Redemption -- Marley cannot be saved, but he can save Scrooge. His warning is his one selfless act.',
      'Death and Mortality -- Marley proves that death without redemption means eternal suffering.',
    ],
    examTips: [
      'The chain metaphor is the single most important symbol in the novella. Always analyse its component parts -- cash-boxes, ledgers, etc.',
      'Marley\'s redefinition of "business" is the thesis statement. Use it in any essay about social responsibility.',
      'Compare Marley\'s fate (eternal chains) with Scrooge\'s fate (joyful transformation) to show the power of timely change.',
    ],
  },
  {
    name: 'Fred',
    role: 'Scrooge\'s nephew; represents warmth, forgiveness and the Christmas spirit',
    description:
      'Fred is everything Scrooge is not: warm, cheerful, and forgiving. He insists on inviting Scrooge to Christmas dinner every year despite being rudely rebuffed. He argues passionately that Christmas is "a good time: a kind, forgiving, charitable, pleasant time" and refuses to be angered by his uncle\'s hostility. Fred provides a living example that generosity and happiness are available to Scrooge if he will only accept them. His party in Stave 3 is one of the novella\'s warmest scenes, full of laughter and games.',
    represents:
      'Fred represents the true spirit of Christmas -- unconditional generosity and the refusal to give up on others. He is the son of Scrooge\'s beloved sister Fan, which makes his rejection by Scrooge even more painful. His warmth is Dickens\'s counterargument to Scrooge\'s "Bah! Humbug!" Fred proves that you can choose joy regardless of circumstance.',
    arc: [
      'Stave 1: Visits Scrooge at the counting-house. Defends Christmas with a passionate speech. Is rejected but leaves cheerfully.',
      'Stave 3: Hosts a lively Christmas dinner party. Plays games and speaks kindly of Scrooge, pitying rather than condemning him.',
      'Stave 5: Welcomes Scrooge to his dinner with warmth and instant forgiveness.',
    ],
    keyQuotes: [
      {
        text: '"The only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely."',
        stave: 'Stave 1 (Fred)',
        analysis:
          'Fred defines Christmas as a moral principle, not just a festival. The metaphor of "shut-up hearts" echoes the imagery of Scrooge\'s locked counting-house. "By one consent" suggests collective action -- Christmas is a shared choice to be generous.',
      },
      {
        text: '"I mean to give him the same chance every year, whether he likes it or not, for I pity him."',
        stave: 'Stave 3 (Fred)',
        analysis:
          'Fred refuses to give up on Scrooge. "Pity" is crucial -- he sees his uncle not as an enemy but as someone who is suffering. This mirrors Dickens\'s approach to reform: understanding, not punishment, is the path to change.',
      },
      {
        text: '"A merry Christmas and a happy new year to the old man, whatever he is!"',
        stave: 'Stave 3 (Fred, at his party)',
        analysis:
          'Fred toasts Scrooge despite everything. "Whatever he is" acknowledges Scrooge\'s failings but refuses to let them prevent goodwill. Fred embodies the unconditional nature of Christmas generosity.',
      },
    ],
    themeLinks: [
      'Christmas Spirit -- Fred IS the spirit of Christmas in human form.',
      'Family -- He represents the family connection Scrooge has rejected.',
      'Redemption -- Fred\'s patience and forgiveness provide Scrooge with a path back to human connection.',
    ],
    examTips: [
      'Fred is Scrooge\'s foil -- use him in contrast to show what Scrooge could be.',
      'His speech in Stave 1 is a miniature thesis statement for the novella. Learn it and use it in any essay about Christmas spirit.',
      'Fred does not change -- he is constant. Discuss why Dickens makes him unchanging while Scrooge transforms.',
    ],
  },
  {
    name: 'Fan',
    role: 'Scrooge\'s younger sister; appears only in the Ghost of Christmas Past\'s visions',
    description:
      'Fan appears briefly in Stave 2, arriving at Scrooge\'s school to bring him home for Christmas. She declares that "Father is so much kinder than he used to be" -- a brief but significant reference to Scrooge\'s harsh upbringing. Fan is warm, loving, and the only person from Scrooge\'s past who shows him genuine affection. She died young and is Fred\'s mother, which makes Scrooge\'s rejection of Fred even more painful -- he is pushing away the only living link to the person who loved him most.',
    represents:
      'Fan represents lost love and the warmth that once existed in Scrooge\'s life. Her early death is part of the pattern of loss that drove Scrooge to seek security in money rather than in human relationships. She also explains Fred -- his warmth is inherited from Fan.',
    arc: [
      'Stave 2: Arrives at school to collect young Scrooge. Mentions their father\'s improved temperament. Her joy contrasts with Scrooge\'s loneliness.',
      'The Ghost reminds Scrooge that Fan "had a large heart" and died after giving birth to Fred.',
    ],
    keyQuotes: [
      {
        text: '"Father is so much kinder than he used to be, that home\'s like Heaven!"',
        stave: 'Stave 2 (Fan)',
        analysis:
          'This brief line reveals a history of domestic cruelty. "Than he used to be" implies Scrooge\'s father was once harsh -- explaining, though not excusing, Scrooge\'s own coldness. The simile "like Heaven" is poignant given Fan\'s early death.',
      },
      {
        text: '"She had a large heart... she died a woman, and had, as I think, children."',
        stave: 'Stave 2 (Ghost of Christmas Past)',
        analysis:
          'The Ghost links Fan\'s generosity ("large heart") to her motherhood. Her child is Fred, whose warmth is inherited. The phrase reminds Scrooge that by rejecting Fred, he is rejecting Fan\'s memory.',
      },
    ],
    themeLinks: [
      'Family -- Fan is the family warmth that Scrooge has lost and must reclaim through Fred.',
      'Time and Memory -- She exists only in the past, a reminder of what might have been.',
      'Isolation -- Her death is one of the losses that drove Scrooge into emotional withdrawal.',
    ],
    examTips: [
      'Fan appears only briefly but is crucial for understanding Scrooge\'s backstory. The mention of a harsh father hints at a cycle of emotional coldness.',
      'Always connect Fan to Fred -- Scrooge\'s rejection of Fred is a rejection of Fan\'s legacy.',
      'Her early death is part of Dickens\'s explanation (not excuse) for Scrooge\'s withdrawal from love.',
    ],
  },
  {
    name: 'Fezziwig',
    role: 'Scrooge\'s former employer; a generous master who creates joy through small acts of kindness',
    description:
      'Old Fezziwig appears in Stave 2 as a vision of Christmas Past. He is Scrooge\'s former employer who throws a lavish Christmas party for his workers and family. Crucially, Fezziwig spends only "three or four pounds" on the party but creates enormous joy. He is the anti-Scrooge: an employer who understands that his power extends beyond the economic to the moral and emotional. Scrooge himself recognises the lesson: "He has the power to render us happy or unhappy; to make our service light or burdensome."',
    represents:
      'Fezziwig represents the ideal employer -- generous, kind, and aware of his moral responsibility toward those who work for him. He is Dickens\'s model of ethical capitalism: profit is acceptable, but employers must also invest in their workers\' wellbeing. Fezziwig proves that generosity does not require great wealth.',
    arc: [
      'Stave 2: Appears in the vision of Scrooge\'s apprenticeship. Hosts a joyful Christmas party for all his workers.',
      'His generosity prompts Scrooge\'s first moment of self-awareness about his treatment of Bob Cratchit.',
    ],
    keyQuotes: [
      {
        text: '"He has the power to render us happy or unhappy; to make our service light or burdensome; a pleasure or a toil."',
        stave: 'Stave 2 (Scrooge, reflecting on Fezziwig)',
        analysis:
          'Scrooge articulates the novella\'s social message -- employers have moral power over their workers\' wellbeing. The balanced antithetical pairings present the choice as binary. This is a direct rebuke to Scrooge\'s own treatment of Bob Cratchit.',
      },
      {
        text: '"A small matter... to make these silly folks so full of gratitude."',
        stave: 'Stave 2 (Ghost of Christmas Past)',
        analysis:
          'The Ghost provokes Scrooge by dismissing Fezziwig\'s generosity. When Scrooge defends Fezziwig, he reveals that he already understands, deep down, that kindness matters more than money. His instinctive defence proves his empathy is buried, not destroyed.',
      },
    ],
    themeLinks: [
      'Social Responsibility -- Fezziwig proves that employers can create happiness with small investments.',
      'Christmas Spirit -- His party is a model of generous celebration.',
      'Greed vs Generosity -- He spent little money but gave generously of his spirit.',
    ],
    examTips: [
      'Use Fezziwig as a direct contrast with Scrooge. Three or four pounds vs Scrooge\'s miserable office -- the moral is clear.',
      'Scrooge\'s defence of Fezziwig is his first moral awakening. It proves transformation was always possible.',
      'Fezziwig is Dickens\'s answer to the question "What should employers be?" Compare with Scrooge in Stave 1 and Stave 5.',
    ],
  },
  {
    name: 'Belle',
    role: 'Scrooge\'s former fiancee; appears in the Ghost of Christmas Past\'s visions',
    description:
      'Belle appears in Stave 2 as the woman Scrooge once loved and lost. She releases Scrooge from their engagement because "another idol has displaced me... a golden one." The word "idol" carries deliberate biblical weight -- Scrooge has committed spiritual idolatry by worshipping money. Belle is then shown years later, happily married with children in a warm, loving home -- the domestic joy that Scrooge sacrificed for wealth. Her departure marks the precise moment when Scrooge chose money over love, and seeing her happiness reveals the cost of that choice.',
    represents:
      'Belle represents the love and domestic happiness that Scrooge sacrificed for wealth. She is proof that Scrooge\'s isolation is self-inflicted -- he was not denied love but actively chose money over it. Her happy alternative life shows Scrooge exactly what he has lost.',
    arc: [
      'Stave 2: Releases Scrooge from their engagement, identifying money as his new "idol."',
      'Seen later, happily married with children. Her husband reports that Scrooge is now "quite alone in the world."',
      'Scrooge begs the Ghost to show him no more after seeing her happiness.',
    ],
    keyQuotes: [
      {
        text: '"Another idol has displaced me... a golden one."',
        stave: 'Stave 2 (Belle)',
        analysis:
          'Belle identifies money as Scrooge\'s false god. The word "idol" carries biblical weight -- the worship of a golden idol is one of the most condemned sins in the Old Testament. "Displaced" is precise: love has not disappeared but has been physically pushed aside by gold.',
      },
      {
        text: '"You fear the world too much. All your other hopes have merged into the hope of being beyond the chance of its sordid reproach."',
        stave: 'Stave 2 (Belle)',
        analysis:
          'Belle diagnoses Scrooge\'s psychology with devastating accuracy. His greed is rooted in fear -- fear of poverty, of vulnerability, of the world\'s judgement. She sees that his pursuit of money is defensive, not ambitious. This insight makes Scrooge\'s character psychologically complex.',
      },
    ],
    themeLinks: [
      'Isolation vs Family -- Belle\'s departure marks Scrooge\'s choice of loneliness over love.',
      'Greed -- Money literally replaces love in Scrooge\'s heart.',
      'Time and Memory -- Belle exists only in the past, a permanent reminder of what might have been.',
    ],
    examTips: [
      'Belle\'s "golden idol" line is one of the most quotable in the novella. Use it in any essay about greed or isolation.',
      'Her diagnosis of Scrooge\'s fear is crucial -- it gives psychological depth to his greed. He hoards money as a defence against the world.',
      'The vision of Belle\'s happy family is the emotional climax of Stave 2. Scrooge sees in concrete detail the life he sacrificed.',
    ],
  },
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function CharactersPage() {
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "A Christmas Carol", url: "https://theenglishhub.app/revision/texts/a-christmas-carol" },
          { name: "Characters", url: "https://theenglishhub.app/revision/texts/a-christmas-carol/characters" },
        ]}
      />
      {/* Study Tools */}
      <StudyTools textName="A Christmas Carol" textType="novella" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/a-christmas-carol" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to A Christmas Carol
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Users className="mr-1 size-3 text-blue-400" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Character Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            A Christmas Carol by Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Eleven key characters analysed in depth: role in the novella, what
            they represent, character development across the staves, key
            quotations with detailed analysis, links to themes, and exam
            technique tips.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 text-heading-md font-heading text-foreground">Jump to a Character</h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {characters.map((ch) => (
                <a
                  key={ch.name}
                  href={`#${ch.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-foreground/20 hover:bg-muted/40"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {ch.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground group-hover:text-foreground/90 truncate">
                      {ch.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {ch.role.split(';')[0]}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Characters */}
      {characters.map((ch) => (
        <section
          key={ch.name}
          id={ch.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}
          className="scroll-mt-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <Users className="size-5 text-blue-400" />
            <h2 className="text-heading-lg font-heading text-foreground">
              {ch.name}
            </h2>
          </div>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-heading-md font-heading">
                {ch.name}
              </CardTitle>
              <CardDescription>{ch.role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-body-sm text-muted-foreground">
              {/* Description */}
              <div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  Role in the Novella
                </h3>
                <p>{ch.description}</p>
              </div>

              {/* What they represent */}
              <div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  What They Represent
                </h3>
                <p>{ch.represents}</p>
              </div>

              {/* Character Arc */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  Character Development
                </h3>
                <ul className="list-disc space-y-2 pl-4">
                  {ch.arc.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              {/* Key Quotes */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground flex items-center gap-2">
                  <Quote className="size-4 text-violet-400" />
                  Key Quotes
                </h3>
                <div className="space-y-3">
                  {ch.keyQuotes.map((q, i) => (
                    <div
                      key={i}
                      className="rounded-lg border-l-4 border-l-primary/40 bg-muted/30 p-4"
                    >
                      <p className="font-medium italic text-foreground">
                        {q.text}
                      </p>
                      <p className="mt-1 text-xs font-mono text-primary">
                        {q.stave}
                      </p>
                      <p className="mt-2 text-body-sm text-muted-foreground">
                        {q.analysis}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Theme Links */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  Links to Themes
                </h3>
                <ul className="list-disc space-y-2 pl-4">
                  {ch.themeLinks.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>

              {/* Exam Tips */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground flex items-center gap-2">
                  <Lightbulb className="size-4 text-clay-600" />
                  Exam Tips
                </h3>
                <ul className="list-disc space-y-2 pl-4">
                  {ch.examTips.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        A Christmas Carol by Charles Dickens (1843) is in the public domain.
        Quotations are reproduced freely as the text is no longer subject to
        copyright.
      </p>
    </div>
  )
}
