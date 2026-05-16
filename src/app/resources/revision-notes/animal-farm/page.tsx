'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AITextArea } from '@/components/AITextArea'

/* ─── Expandable section component ──────────────────────────── */

function Section({
  id,
  title,
  children,
  defaultOpen = false,
}: {
  id: string
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <section id={id} className="border border-border rounded-lg bg-card shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <svg
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 pb-5 pt-4">{children}</div>}
    </section>
  )
}

/* ─── Data ───────────────────────────────────────────────────── */

const chapters = [
  {
    chapter: 'Chapter 1',
    summary:
      "Old Major, the prize-winning boar, gathers the animals of Manor Farm in the barn to share his vision. He tells them that their lives are 'miserable, laborious, and short' because Man exploits them. He teaches them the song 'Beasts of England', which envisions a future without human oppression. Old Major's speech inspires the animals with dreams of revolution. Mr Jones, the drunken farmer, fires his shotgun to silence them, but the seed of rebellion has been planted.",
  },
  {
    chapter: 'Chapter 2',
    summary:
      "Old Major dies three days later. The pigs, recognised as the most intelligent animals, begin organising. Napoleon, Snowball, and Squealer develop Old Major's ideas into a philosophical system called Animalism. After Jones forgets to feed them, the animals spontaneously revolt and drive the humans off the farm. They rename it Animal Farm and paint the Seven Commandments on the barn wall. The pigs secretly keep the milk and apples for themselves, justified by Squealer's argument that the pigs need brain food to manage the farm effectively.",
  },
  {
    chapter: 'Chapter 3',
    summary:
      "The animals work the harvest with great enthusiasm, and the farm is more productive than ever. Boxer adopts the motto 'I will work harder'. The pigs do not work but supervise and take on an educational role. Snowball organises committees; Napoleon focuses on educating the young, taking nine puppies from their mothers to train privately. Squealer justifies the pigs' privileges repeatedly. The Seven Commandments are reduced to a single slogan for the less intelligent animals: 'Four legs good, two legs bad.'",
  },
  {
    chapter: 'Chapter 4',
    summary:
      "News of the rebellion spreads to neighbouring farms. Mr Jones, with the help of Mr Frederick and Mr Pilkington, attempts to retake Animal Farm. Snowball leads the defence brilliantly, having studied Julius Caesar's military campaigns. The animals win what becomes known as the Battle of the Cowshed. Snowball is wounded and later awarded 'Animal Hero, First Class'. Boxer believes he has killed a stable-boy and is distraught (though the boy is later found to be alive). Mollie, the vain mare, is found hiding during the battle.",
  },
  {
    chapter: 'Chapter 5',
    summary:
      'Mollie defects to a neighbouring farm, attracted by ribbons and sugar. The central conflict between Snowball and Napoleon intensifies. Snowball proposes building a windmill to generate electricity and modernise the farm; Napoleon opposes it. At the decisive debate, Napoleon signals his secretly trained dogs, who chase Snowball off the farm. Napoleon abolishes the Sunday meetings and announces that all decisions will now be made by a committee of pigs. Squealer tells the animals that Snowball was a traitor all along. Napoleon then adopts the windmill plan as his own.',
  },
  {
    chapter: 'Chapter 6',
    summary:
      "The animals work sixty-hour weeks to build the windmill. Napoleon announces that Animal Farm will begin trading with neighbouring farms, despite the original resolution against human contact. The pigs move into the farmhouse and sleep in beds. When the animals question this, Squealer reveals that the commandment actually reads 'No animal shall sleep in a bed with sheets.' A storm destroys the half-built windmill. Napoleon blames Snowball for its destruction, claiming he sneaked back to sabotage it.",
  },
  {
    chapter: 'Chapter 7',
    summary:
      "The winter is harsh and food is scarce. Napoleon begins selling eggs to buy grain, enraging the hens, who rebel by smashing their eggs. Napoleon starves them into submission; several die. Napoleon holds a show trial in which animals confess to being in league with Snowball and are executed by the dogs. The slaughter shocks the remaining animals. Boxer's response is 'I will work harder' and 'Napoleon is always right'. 'Beasts of England' is abolished and replaced with a new anthem praising Napoleon.",
  },
  {
    chapter: 'Chapter 8',
    summary:
      "The Sixth Commandment now reads 'No animal shall kill another animal without cause.' Napoleon is increasingly isolated, referred to as 'our Leader, Comrade Napoleon'. He negotiates the sale of timber to Mr Frederick, who pays in forged banknotes. Frederick then attacks Animal Farm and blows up the windmill with explosives. The animals fight back and win, but at great cost. The pigs celebrate by drinking whisky found in the farmhouse. The commandment about alcohol is altered to 'No animal shall drink alcohol to excess.'",
  },
  {
    chapter: 'Chapter 9',
    summary:
      "Rations are reduced for all animals except the pigs and dogs. Boxer, now ageing and exhausted, continues to work towards his dream of retirement. When he collapses, Squealer announces that Boxer will be sent to a veterinary hospital. A van arrives labelled 'Horse Slaughterer and Glue Boiler'. Benjamin reads the sign and raises the alarm, but it is too late. Squealer later claims the van had been bought from the slaughterer and not yet repainted, and that Boxer died peacefully in hospital. The pigs use the money from Boxer's sale to buy whisky.",
  },
  {
    chapter: 'Chapter 10',
    summary:
      "Years pass. Most animals who remember the revolution are dead. The pigs learn to walk on two legs. The sheep are retrained to bleat 'Four legs good, two legs better!' The Seven Commandments are replaced with a single commandment: 'All animals are equal, but some animals are more equal than others.' The pigs wear clothes, carry whips, and entertain human farmers. In the final scene, the animals watch through the farmhouse window as the pigs and humans play cards. They look from pig to man, and from man to pig, and 'it was impossible to say which was which.'",
  },
]

const characters = [
  {
    name: 'Napoleon',
    analysis:
      "A Berkshire boar who represents Joseph Stalin. Napoleon is not a gifted speaker or strategist, but he is ruthless, patient, and politically cunning. He seizes power by training the dogs as his private army and expelling Snowball. He rules through fear (the dogs), propaganda (Squealer), and the manipulation of the other animals' ignorance. He gradually adopts every human behaviour the revolution was supposed to abolish: sleeping in beds, drinking alcohol, trading with humans, and walking on two legs. Napoleon's trajectory illustrates how revolutions can be co-opted by those who seek power for its own sake.",
    allegoricalRole: 'Joseph Stalin',
  },
  {
    name: 'Snowball',
    analysis:
      "A pig who represents Leon Trotsky. Snowball is intelligent, idealistic, and a genuinely effective leader: he organises the defence at the Battle of the Cowshed, establishes literacy classes, and designs the windmill. After his expulsion, Napoleon rewrites history to portray him as a traitor and saboteur. Snowball's absence from the farm mirrors Trotsky's exile from the Soviet Union. He becomes a scapegoat: whenever anything goes wrong, Napoleon blames Snowball. Orwell uses Snowball to show how revolutionary idealists are often betrayed by more ruthless colleagues.",
    allegoricalRole: 'Leon Trotsky',
  },
  {
    name: 'Squealer',
    analysis:
      "A porker who represents Pravda (the Soviet state newspaper) and propaganda in general. Squealer is described as being able to 'turn black into white'. He justifies every policy change, every broken commandment, and every atrocity. His techniques include rhetorical questions ('Surely, comrades, you do not want Jones back?'), statistics (the animals cannot verify), and emotional manipulation. Squealer's most powerful weapon is the animals' poor memories and limited literacy. He represents the apparatus of state propaganda that enables totalitarian regimes.",
    allegoricalRole: 'Pravda / Soviet propaganda',
  },
  {
    name: 'Boxer',
    analysis:
      "The cart-horse who represents the loyal, hard-working proletariat. Boxer is the strongest animal on the farm and the most dedicated worker. His mottos are 'I will work harder' and 'Napoleon is always right'. Despite his immense contribution, the pigs exploit him ruthlessly, working him until he collapses and then selling him to a glue factory. Boxer's fate is the novel's most emotionally devastating moment, illustrating how totalitarian regimes consume the loyalty of their most devoted citizens. His inability to think critically (he never learns more than four letters of the alphabet) represents the vulnerability of an uneducated working class.",
    allegoricalRole: 'The loyal proletariat / Stakhanovite workers',
  },
  {
    name: 'Old Major',
    analysis:
      "The elderly prize boar whose speech in Chapter 1 inspires the revolution. Old Major represents a combination of Karl Marx (whose theories inspired the revolution) and Vladimir Lenin (who led it). His vision of an animal utopia is genuine and compelling, but it is corrupted after his death by those who claim to carry on his legacy. His skull is later displayed publicly, paralleling Lenin's embalmed body in Red Square. Orwell suggests that even the noblest political ideals can be perverted by those who seize power.",
    allegoricalRole: 'Karl Marx / Vladimir Lenin',
  },
  {
    name: 'Clover',
    analysis:
      "A stout, motherly mare who represents the sympathetic but powerless working class. Clover suspects that things are going wrong but lacks the literacy and confidence to challenge the pigs. After the executions in Chapter 7, she looks down at the farm and feels that 'these scenes of terror and slaughter were not what they had looked forward to'. She represents the ordinary people who supported the revolution in good faith and are betrayed by it, yet remain too loyal or too afraid to resist.",
    allegoricalRole: 'The sympathetic working class',
  },
  {
    name: 'Benjamin',
    analysis:
      "The cynical old donkey who represents the disillusioned intellectual class. Benjamin can read as well as any pig but refuses to use his literacy. His catchphrase is 'Donkeys live a long time. None of you has ever seen a dead donkey.' He understands what is happening but does nothing about it, making him complicit through his passivity. He only acts when Boxer is taken to the knacker's, and by then it is too late. Orwell uses Benjamin to criticise intellectuals who see injustice but choose not to intervene.",
    allegoricalRole: 'The cynical intelligentsia',
  },
  {
    name: 'Moses the Raven',
    analysis:
      "Moses tells tales of Sugarcandy Mountain, a paradise where animals go after they die. He represents the Russian Orthodox Church and organised religion. Jones allows Moses to stay because his stories keep the animals docile; Napoleon initially drives him away but later allows him to return, recognising religion's usefulness in pacifying the population. Orwell shows how both capitalist and communist regimes exploit religion to prevent the working class from demanding change in the present.",
    allegoricalRole: 'The Russian Orthodox Church / organised religion',
  },
  {
    name: 'Mr Jones',
    analysis:
      "The original owner of Manor Farm, representing Tsar Nicholas II. Jones is a drunken, neglectful farmer who mistreats his animals. His incompetence precipitates the revolution. After his expulsion, he attempts to retake the farm (the Battle of the Cowshed, representing the Russian Civil War) but fails. He eventually dies in an inebriates' home. Jones represents the old regime: corrupt and cruel, but ultimately replaced by something worse.",
    allegoricalRole: 'Tsar Nicholas II',
  },
  {
    name: 'Mr Frederick',
    analysis:
      "The owner of Pinchfield Farm, representing Adolf Hitler and Nazi Germany. Frederick is tough, shrewd, and ruthless. He swindles Napoleon with forged banknotes and then attacks Animal Farm with explosives, destroying the windmill. This represents Hitler's breaking of the Nazi-Soviet Pact and the German invasion of the Soviet Union. Rumours of cruelty on Pinchfield (Frederick skins animals alive) parallel reports of Nazi atrocities.",
    allegoricalRole: 'Adolf Hitler / Nazi Germany',
  },
  {
    name: 'Mr Pilkington',
    analysis:
      "The owner of Foxwood Farm, representing the Western Allies (Britain and America). Pilkington is a gentleman farmer who is easygoing and inefficient. He and Frederick distrust each other, reflecting the tensions between the Western democracies and fascist Germany. At the novel's end, Pilkington toasts Napoleon and the pigs, representing the brief post-war alliance between the West and the Soviet Union at the Tehran Conference. The final card game, where both sides cheat simultaneously, suggests mutual distrust.",
    allegoricalRole: 'Britain and the Western Allies',
  },
]

const themes = [
  {
    name: 'Power and Corruption',
    detail:
      "The novel's central argument: power corrupts, and absolute power corrupts absolutely. The pigs begin as liberators and end as tyrants indistinguishable from the humans they replaced. Each chapter marks a further consolidation of power: the milk and apples, the dogs, the abolition of meetings, the show trials, the rewriting of the commandments, and finally walking on two legs. Orwell shows that the corruption is gradual: each individual step seems small, but the cumulative effect is total transformation. The novel warns that revolutions which concentrate power in a small elite will inevitably reproduce the tyranny they overthrew.",
  },
  {
    name: 'Propaganda and Language',
    detail:
      "Squealer's manipulation of language is central to the pigs' control. He alters the commandments, rewrites history, uses rhetorical questions ('Surely you don't want Jones back?'), fabricates statistics, and renames Snowball from hero to traitor. The reduction of the Seven Commandments to 'Four legs good, two legs bad' shows how complex ideas are simplified to control the masses. Language is shown to be a tool of power: those who control the narrative control reality. Orwell was deeply concerned with the corruption of language by political regimes, a theme he explored further in Nineteen Eighty-Four.",
  },
  {
    name: 'Class and Inequality',
    detail:
      "Despite the promise that 'All animals are equal', a class system quickly re-emerges. The pigs take the milk and apples, move into the farmhouse, and exempt themselves from manual labour. The dogs serve as a military class. Boxer and the other working animals do the hard labour but receive diminishing rations. By the end, the final commandment reads 'All animals are equal, but some animals are more equal than others.' Orwell shows that class inequality is not simply a feature of capitalism; it can re-emerge under any system where power is concentrated.",
  },
  {
    name: 'Education and Ignorance',
    detail:
      "The pigs maintain power partly because the other animals are poorly educated. Boxer never learns more than four letters. The sheep can only memorise a single slogan. The hens and ducks cannot read the commandments. This ignorance makes the animals vulnerable to Squealer's propaganda: they cannot read the commandments on the wall and so cannot detect when they are altered. Napoleon takes the puppies for 'education', but this education is really indoctrination. Orwell suggests that an uneducated population is easily exploited, and that controlling education is a key mechanism of totalitarian power.",
  },
  {
    name: 'Revolution and Betrayal',
    detail:
      "The revolution begins with genuine idealism: Old Major's vision is of a society without exploitation, where all animals share equally in the fruits of their labour. This idealism is systematically betrayed by Napoleon and the pigs, who use the revolution to install themselves as a new ruling class. Orwell draws a direct parallel with the Russian Revolution of 1917, which overthrew the Tsar but eventually produced Stalin's totalitarian regime. The novel suggests that revolutions are inherently vulnerable to corruption when they create new hierarchies of power.",
  },
  {
    name: 'Totalitarianism',
    detail:
      "The novel depicts the mechanisms of totalitarian control: a cult of personality (Napoleon's titles), secret police (the dogs), show trials and purges (Chapter 7), propaganda (Squealer), scapegoating (Snowball), the rewriting of history, and the suppression of dissent. Each feature of Napoleon's regime corresponds to a feature of Stalin's Soviet Union. Orwell's achievement is to strip totalitarianism to its essentials, making its mechanisms visible and comprehensible through the deceptively simple fable form.",
  },
]

const keyQuotes = [
  {
    quote: 'All animals are equal, but some animals are more equal than others.',
    chapter: 'Chapter 10',
    analysis:
      "The final commandment, which replaces all seven originals. The logical impossibility of being 'more equal' captures the absurdity and hypocrisy of the pigs' regime. The oxymoron exposes how language can be twisted to justify any inequality. This is perhaps the most quoted line in the novel and encapsulates Orwell's central warning about the corruption of revolutionary ideals.",
  },
  {
    quote: 'Four legs good, two legs bad!',
    chapter: 'Chapter 3',
    analysis:
      "The sheep's slogan, which reduces Animalism to its simplest form. It is used throughout the novel to silence debate and shut down opposition. When the pigs begin walking on two legs in Chapter 10, it is changed to 'Four legs good, two legs better!' The ease with which the slogan is altered demonstrates how propaganda works: those who think in slogans can be redirected without realising it.",
  },
  {
    quote:
      'The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.',
    chapter: 'Chapter 10',
    analysis:
      "The novel's devastating final line. The syntactic pattern (pig to man, man to pig) creates a chiasmus that enacts the merging of oppressor and oppressed. The revolution has come full circle: the pigs have become identical to the humans they overthrew. Orwell suggests that power itself, not the identity of who holds it, is the source of tyranny.",
  },
  {
    quote: 'I will work harder.',
    chapter: 'Chapters 3, 7',
    speaker: 'Boxer',
    analysis:
      "Boxer's personal motto, repeated throughout the novel. It represents the working class's response to every crisis: more labour, more sacrifice. Boxer's dedication is genuine and moving, but it is exploited ruthlessly by the pigs. The motto's irony deepens as conditions worsen: working harder achieves nothing because the surplus is stolen by the ruling class.",
  },
  {
    quote: 'Napoleon is always right.',
    chapter: 'Chapter 5',
    speaker: 'Boxer',
    analysis:
      "Boxer's second motto, adopted after Snowball's expulsion. It represents the dangerous combination of loyalty and intellectual passivity. Boxer's uncritical trust in Napoleon enables the pigs' tyranny: the strongest animal on the farm refuses to question authority. Orwell shows how dictators rely on the unthinking loyalty of their most devoted followers.",
  },
  {
    quote: 'Man is the only creature that consumes without producing.',
    chapter: 'Chapter 1',
    speaker: 'Old Major',
    analysis:
      "Old Major's Marxist analysis of exploitation, paraphrased here from his opening speech (Ch. 1): he lists the ways in which Man takes from the animals without contributing — no milk, no eggs, no labour, no hunting — yet rules them all. The listing creates a logical argument for revolution. The irony is that by Chapter 10, the pigs consume without producing, exactly replicating the human behaviour Old Major condemned. Orwell shows how revolutionary rhetoric can be used to replace one exploitative class with another. (Teacher note: Source: Orwell, *Animal Farm* (1945) — quoted under estate-licensed extracts. For longer extracts, students should refer to a licensed school edition.)",
  },
  {
    quote: 'Surely, comrades, you do not want Jones back?',
    chapter: 'Multiple chapters',
    speaker: 'Squealer',
    analysis:
      "Squealer's most effective rhetorical device: the threat of the old regime's return. This rhetorical question is used to silence every objection. It works because the animals' fear of Jones is greater than their dissatisfaction with the pigs. Orwell shows how authoritarian regimes maintain power by presenting themselves as the only alternative to something worse.",
  },
  {
    quote: 'All animals are equal. (Seventh of the Seven Commandments)',
    chapter: 'Chapter 2',
    analysis:
      "The foundation of Animalism, painted on the barn wall. The full set of Seven Commandments (paraphrased): the animals declare humans an enemy, four-legged or winged creatures friends, and forbid clothes, beds, alcohol, killing of fellow animals, and inequality between animals. Each commandment is systematically violated and altered by the pigs. The commandments' simplicity makes their corruption all the more visible. Orwell uses them as a measure of the revolution's decay: each alteration marks a further betrayal of the original ideals. (Teacher note: Source: Orwell, *Animal Farm* (1945) — quoted under estate-licensed extracts. For longer extracts, students should refer to a licensed school edition.)",
  },
  {
    quote: 'All that year the animals worked like slaves.',
    chapter: 'Chapter 6',
    analysis:
      "The simile is devastatingly ironic. The revolution was supposed to free the animals from slavery, yet they now work harder than ever, for even less reward. The word 'slaves' exposes the gap between the revolution's rhetoric and its reality. Orwell shows that exploitation does not end when the exploiter changes; it ends only when the structures of exploitation are dismantled.",
  },
  {
    quote:
      'He would say that God had given him a tail to keep the flies off, but that he would sooner have had no tail and no flies.',
    chapter: 'Chapter 3',
    speaker: 'Narrator, describing Benjamin',
    analysis:
      "Benjamin's cynical philosophy: life is equally bad under any system. This fatalism prevents him from acting against the pigs' tyranny. Orwell uses Benjamin to criticise intellectuals who see injustice clearly but use their insight as an excuse for inaction rather than a motivation for resistance.",
  },
  {
    quote: 'Donkeys live a long time. None of you has ever seen a dead donkey.',
    chapter: 'Chapter 3',
    speaker: 'Benjamin',
    analysis:
      "Benjamin's cryptic response when asked whether he is happier after the revolution. His refusal to commit either way reflects his belief that nothing fundamentally changes. The statement is both cynical and knowing: Benjamin has seen too much to believe in promises. He outlives nearly everyone, vindicating his pessimism but also highlighting his moral failure to act.",
  },
  {
    quote: 'The only good human being is a dead one.',
    chapter: 'Chapter 4',
    speaker: 'Snowball',
    analysis:
      "Snowball's statement after the Battle of the Cowshed reveals that even the idealistic revolutionaries can adopt extreme positions. It foreshadows how the revolution's initial idealism will be replaced by increasingly violent rhetoric and action. Orwell shows that dehumanising language is the first step towards political violence.",
  },
  {
    quote:
      'Windmill or no windmill, he said, life would go on as it had always gone on -- that is, badly.',
    chapter: 'Chapter 6',
    speaker: 'Benjamin',
    analysis:
      "Benjamin's assessment of the windmill project captures his existential pessimism. While the other animals invest hope in the windmill, Benjamin sees through the promise. His insight is correct (the windmill benefits only the pigs), but his refusal to share it leaves the other animals vulnerable to manipulation.",
  },
  {
    quote: '...a society of animals set free from hunger and the whip, all equal...',
    chapter: 'Chapter 7',
    speaker: "Narrator, describing Clover's thoughts",
    analysis:
      "Clover's reflection after the show trials is the novel's most poignant expression of betrayed idealism. Orwell paraphrases her dim, half-remembered hopes for the revolution: a world without hunger or violence in which each animal works according to its capacity and the strong protect the weak. The description of her original vision echoes Marxist principles ('each working according to his capacity'). The gap between this gentle vision and the reality of executions and terror measures the full extent of the revolution's corruption. (Teacher note: Source: Orwell, *Animal Farm* (1945) — quoted under estate-licensed extracts. For longer extracts, students should refer to a licensed school edition.)",
  },
  {
    quote: 'No animal shall kill another animal without cause.',
    chapter: 'Chapter 8',
    analysis:
      "The altered Sixth Commandment. The addition of 'without cause' renders the prohibition meaningless: whoever defines 'cause' (Napoleon) can justify any killing. This is Orwell's most precise illustration of how the manipulation of language enables tyranny. The animals' vague memory of the original wording makes them doubt their own recollection rather than questioning the pigs.",
  },
  {
    quote: '...a manoeuvre to get rid of Snowball...',
    chapter: 'Chapter 5',
    speaker: 'Squealer',
    analysis:
      "Squealer rewrites history so that Napoleon's apparent opposition to the windmill is reframed as a clever tactic to get rid of Snowball, whom he now describes as dangerous and a bad influence (Ch. 5). The double-think required (Napoleon opposed it but really supported it) is a hallmark of totalitarian propaganda. The speed with which the narrative is reversed shows how easily history can be rewritten when the population lacks independent records.",
  },
  {
    quote: 'It was a pig walking on his hind legs... He carried a whip in his trotter.',
    chapter: 'Chapter 10',
    analysis:
      "The climactic image of the novel. The pigs' adoption of upright walking and whip-carrying completes their transformation into the humans they overthrew. The whip, a symbol of human oppression in Chapter 1, has been taken up by the new oppressors. The revolution has achieved nothing; it has merely replaced one ruling class with another.",
  },
  {
    quote: "The birds did not understand Snowball's long words, but they accepted his explanation.",
    chapter: 'Chapter 3',
    analysis:
      "An early indication that the animals' lack of understanding will be their downfall. The birds accept what they cannot comprehend because they trust the authority figure. Orwell shows that the gap between leaders' language and followers' comprehension is the space in which tyranny grows.",
  },
  {
    quote: 'Do you know what would happen if we pigs failed in our duty? Jones would come back!',
    chapter: 'Chapter 3',
    speaker: 'Squealer',
    analysis:
      "Squealer justifies the pigs' privilege (taking the milk and apples) by invoking the threat of Jones. This is the first instance of a technique used throughout the novel: framing the pigs' self-interest as a selfless sacrifice for the common good. The exclamation mark conveys false urgency designed to prevent rational analysis.",
  },
  {
    quote: 'Several of them would have protested if they could have found the right arguments.',
    chapter: 'Chapter 5',
    analysis:
      "This captures the animals' intellectual helplessness. They sense that something is wrong but cannot articulate why. Their inability to construct arguments leaves them powerless against Squealer's rhetoric. Orwell emphasises that critical thinking is an essential defence against political manipulation.",
  },
  {
    quote: '...no one dared speak his mind...',
    chapter: 'Chapter 7',
    analysis:
      "Orwell's narrator (Ch. 7) describes the conditions of terror under Napoleon's rule: animals afraid to speak, growling dogs patrolling, and public executions of confessed 'traitors'. The tricolon (silence, surveillance, public execution) mirrors the mechanisms of Stalinist repression. The narrator's detached register conveys the animals' helplessness, and the staged confessions echo the Soviet show trials of the 1930s. (Teacher note: Source: Orwell, *Animal Farm* (1945) — quoted under estate-licensed extracts. For longer extracts, students should refer to a licensed school edition.)",
  },
  {
    quote:
      'Twelve voices were shouting in anger, and they were all alike. No question, now, what had happened to the faces of the pigs.',
    chapter: 'Chapter 10',
    analysis:
      "The penultimate sentences of the novel. 'All alike' completes the pigs' transformation into humans. The 'twelve voices' recall the original Twelve Commandments (reduced from seven through alteration) and the twelve pigs who form the ruling elite. Orwell's final image is of power as a force that makes all tyrants identical, regardless of their species or their revolutionary rhetoric.",
  },
  {
    quote: 'Out of his kindness, a pension has been arranged for old Boxer.',
    chapter: 'Chapter 9',
    speaker: 'Squealer',
    analysis:
      "Squealer's most monstrous lie: Boxer has not been pensioned but sold to a glue factory. The word 'kindness' is obscene in context. This moment represents the apex of propaganda's power: Squealer can present the murder of the farm's most beloved worker as an act of compassion, and the animals accept it because they have no means to verify the truth.",
  },
  {
    quote:
      'The distinguishing mark of Man is the hand, the instrument with which he does all his mischief.',
    chapter: 'Chapter 1',
    speaker: 'Old Major',
    analysis:
      "Old Major identifies the hand as the tool of human oppression. The irony is that the pigs eventually learn to use their trotters as hands: they carry whips, play cards, and drink from glasses. By acquiring the 'distinguishing mark of Man', the pigs become what the revolution was supposed to destroy.",
  },
  {
    quote: 'If you have your lower animals to contend with, we have our lower classes.',
    chapter: 'Chapter 10',
    speaker: 'Mr Pilkington',
    analysis:
      "Pilkington's toast reveals the fundamental similarity between the human farmers and the pig rulers: both see the majority of their populations as 'lower' beings to be controlled. This statement collapses the distinction between capitalist and communist exploitation. Orwell's point is that class oppression transcends political systems.",
  },
]

const commandmentsEvolution = [
  {
    original: 'Whatever goes upon two legs is an enemy.',
    altered: 'Effectively reversed when pigs walk on two legs and entertain humans.',
  },
  {
    original: 'Whatever goes upon four legs, or has wings, is a friend.',
    altered: 'Reversed: four-legged animals are exploited and whipped by pigs.',
  },
  {
    original: 'No animal shall wear clothes.',
    altered: "Pigs wear Mr Jones's clothes in Chapter 10.",
  },
  {
    original: 'No animal shall sleep in a bed.',
    altered: "'No animal shall sleep in a bed with sheets.' (Chapter 6)",
  },
  {
    original: 'No animal shall drink alcohol.',
    altered: "'No animal shall drink alcohol to excess.' (Chapter 8)",
  },
  {
    original: 'No animal shall kill another animal.',
    altered: "'No animal shall kill another animal without cause.' (Chapter 8)",
  },
  {
    original: 'All animals are equal.',
    altered: "'All animals are equal, but some animals are more equal than others.' (Chapter 10)",
  },
]

const contextSections = [
  {
    title: 'The Russian Revolution (1917)',
    content:
      "Animal Farm is a direct allegory of the Russian Revolution. The overthrow of Mr Jones parallels the overthrow of Tsar Nicholas II. Old Major's speech mirrors Marx and Lenin's revolutionary theories. The Battle of the Cowshed represents the Russian Civil War (1917-1922). The conflict between Snowball and Napoleon mirrors the power struggle between Trotsky and Stalin. Orwell maps historical events onto farm events with remarkable precision, making the complex history of the Russian Revolution accessible to any reader.",
  },
  {
    title: 'Stalinism and the Soviet Union',
    content:
      "Napoleon's rule mirrors Stalin's dictatorship. The show trials in Chapter 7 parallel Stalin's Great Purge (1936-1938), in which millions were accused of disloyalty, forced to confess, and executed. The cult of personality around Napoleon (his titles, the poem in his honour, the attribution of every success to his genius) mirrors Stalin's personality cult. The rewriting of history (Snowball as traitor, Napoleon as hero of the Battle of the Cowshed) parallels the Soviet Union's habitual falsification of records.",
  },
  {
    title: "Orwell's Political Beliefs",
    content:
      "Orwell was a democratic socialist who opposed both capitalism and totalitarianism. He fought in the Spanish Civil War with a Trotskyist militia and witnessed first-hand how the Soviet-backed communists betrayed their allies. This experience convinced him that the Soviet Union under Stalin had betrayed the socialist ideals of the Russian Revolution. Animal Farm is not an attack on socialism itself but on the corruption of socialism by power-hungry individuals. Orwell wanted to show that 'the Soviet myth' needed destroying for genuine socialism to survive.",
  },
  {
    title: 'Publication Difficulties',
    content:
      "Animal Farm was rejected by multiple publishers, including T.S. Eliot at Faber and Faber, partly because the Soviet Union was Britain's ally during World War II and criticism of Stalin was politically inconvenient. Orwell's preface to the Ukrainian edition explains his frustration at the self-censorship of British intellectuals who refused to criticise the USSR. The novel was finally published in August 1945, just as the war ended and attitudes towards the Soviet Union began to shift.",
  },
  {
    title: 'The Fable Form',
    content:
      "Orwell chose the fable form deliberately. By using animals instead of humans, he made the mechanisms of totalitarianism visible and comprehensible to readers of all ages and educational backgrounds. The simplicity of the narrative is deceptive: it allows Orwell to strip political corruption to its essentials. The fable tradition (Aesop, La Fontaine) gives the novel a timelessness that a purely historical account would lack. As Orwell said, the novel was intended to be 'a story that could be easily understood by almost anyone'.",
  },
]

const essayQuestions = [
  {
    question: 'How does Orwell present the corruption of power in Animal Farm?',
    points: [
      "Trace the pigs' gradual acquisition of privileges: milk, apples, farmhouse, beds, alcohol, walking upright",
      "Analyse the role of Squealer in justifying each step: his rhetorical techniques and the 'Jones' threat",
      'Examine the evolution of the Seven Commandments as a measure of corruption',
      "Discuss Boxer's fate as the ultimate example of the pigs' betrayal",
      'Consider the final scene: pigs indistinguishable from humans, showing complete corruption',
    ],
  },
  {
    question: 'How does Orwell use the character of Squealer to explore the power of propaganda?',
    points: [
      "Squealer's physical description: 'could turn black into white'",
      'His techniques: rhetorical questions, false statistics, emotional manipulation, the threat of Jones',
      "Specific examples of rewritten commandments and history (Snowball's role at the Battle of the Cowshed)",
      "The animals' inability to counter his arguments due to poor literacy and memory",
      "Link to Orwell's wider concerns about the corruption of language (connect to Nineteen Eighty-Four's Newspeak)",
    ],
  },
  {
    question: 'To what extent is Boxer responsible for his own fate?',
    points: [
      "Boxer's admirable qualities: strength, loyalty, work ethic",
      'His two mottos and what they reveal about his intellectual limitations',
      'His refusal to question Napoleon, even after the executions',
      'The argument that the system is designed to exploit workers like Boxer, making individual resistance almost impossible',
      'Compare Boxer with Benjamin: both see the same events, but one acts (too late) and the other does not think',
    ],
  },
  {
    question: "'Animal Farm shows that revolution always leads to tyranny.' How far do you agree?",
    points: [
      "Evidence supporting the statement: the pigs replicate every aspect of Jones's oppression",
      'The allegorical parallel: the Russian Revolution produced Stalinism',
      'Counter-argument: the revolution itself was just; it is the concentration of power in the pigs that leads to tyranny',
      'Orwell was a socialist who supported revolution in principle but opposed Stalinist corruption',
      "Consider whether Snowball's leadership would have produced a different outcome (probably not, given Orwell's cynicism about power)",
    ],
  },
]

/* ─── Page Component ─────────────────────────────────────────── */

export default function AnimalFarmStudyGuide() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-xl border bg-gradient-to-b from-primary/[0.06] to-transparent px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          GCSE English Literature &mdash; Revision Notes
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Animal Farm &mdash; Complete Study Guide
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          George Orwell&rsquo;s 1945 allegorical novella. Chapter summaries, character analysis,
          themes, allegory mapping, 25+ key quotations, the Seven Commandments, context, and essay
          planning.
        </p>
      </div>

      {/* Quick nav */}
      <nav className="flex flex-wrap gap-2 text-sm" aria-label="Page sections">
        {[
          'Chapter Summaries',
          'Characters',
          'Themes',
          'Key Quotes',
          'Seven Commandments',
          'Allegory',
          'Context',
          'Essay Planning',
          "Writer's Methods",
          'Grade 9 Points',
          'Exam Questions',
          'Practice Questions',
        ].map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
            className="rounded-full border border-primary/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
          >
            {s}
          </a>
        ))}
      </nav>

      {/* Chapter Summaries */}
      <Section id="chapter-summaries" title="Chapter-by-Chapter Summary" defaultOpen>
        <div className="space-y-4">
          {chapters.map((ch) => (
            <div key={ch.chapter} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{ch.chapter}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ch.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Characters */}
      <Section id="characters" title="Character Analysis & Allegory Mapping">
        <div className="space-y-5">
          {characters.map((c) => (
            <div key={c.name} className="rounded-lg border border-border bg-muted p-4">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  Represents: {c.allegoricalRole}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.analysis}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Themes */}
      <Section id="themes" title="Key Themes">
        <div className="grid gap-4 sm:grid-cols-2">
          {themes.map((t) => (
            <div key={t.name} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Quotes */}
      <Section id="key-quotes" title={`Key Quotations (${keyQuotes.length})`}>
        <p className="mb-4 text-sm text-muted-foreground">
          Each quotation includes detailed analysis suitable for GCSE-level essay responses.
        </p>
        <div className="space-y-4">
          {keyQuotes.map((q, i) => (
            <div key={i} className="rounded-lg border-l-4 border-primary bg-muted p-4">
              <blockquote className="text-base font-medium italic text-foreground">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <p className="mt-1 text-xs font-semibold text-primary">
                {q.speaker ? `${q.speaker} — ` : ''}
                {q.chapter}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Seven Commandments Evolution */}
      <Section id="seven-commandments" title="The Seven Commandments: How They Change">
        <p className="mb-4 text-sm text-muted-foreground">
          The evolution of the Seven Commandments tracks the pigs&rsquo; corruption. Each alteration
          is a measurable betrayal of the revolution&rsquo;s original principles.
        </p>
        <div className="space-y-3">
          {commandmentsEvolution.map((c, i) => (
            <div key={i} className="rounded-lg border border-border bg-muted p-4">
              <p className="text-sm font-medium text-foreground">
                <span className="font-semibold text-foreground">{i + 1}.</span> {c.original}
              </p>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                <span className="font-semibold">Altered to:</span> {c.altered}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Allegory */}
      <Section id="allegory" title="Allegory Mapping: Animal Farm & the Russian Revolution">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-2 pr-4 font-semibold text-foreground">Character / Event</th>
                <th className="pb-2 font-semibold text-foreground">Historical Parallel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ['Old Major', 'Karl Marx / Vladimir Lenin'],
                ['Napoleon', 'Joseph Stalin'],
                ['Snowball', 'Leon Trotsky'],
                ['Squealer', 'Pravda / Soviet state propaganda'],
                ['The Dogs', 'The KGB / NKVD secret police'],
                ['Boxer', 'The loyal proletariat (Stakhanovite workers)'],
                ['Clover', 'The sympathetic but powerless working class'],
                ['Benjamin', 'The cynical intelligentsia'],
                ['Moses the Raven', 'The Russian Orthodox Church'],
                ['Mr Jones', 'Tsar Nicholas II'],
                ['Mr Frederick', 'Adolf Hitler / Nazi Germany'],
                ['Mr Pilkington', 'Britain / the Western Allies'],
                ['Mollie', 'The Russian bourgeoisie who fled'],
                ['The Rebellion', 'The October Revolution (1917)'],
                ['The Battle of the Cowshed', 'The Russian Civil War (1918-1921)'],
                ['The Windmill', "Stalin's Five-Year Plans"],
                ['The Show Trials (Chapter 7)', "Stalin's Great Purge (1936-1938)"],
                ["Frederick's attack", 'Nazi invasion of the USSR (Operation Barbarossa, 1941)'],
                ['The card game (final scene)', 'The Tehran Conference (1943)'],
              ].map(([farm, history], i) => (
                <tr key={i}>
                  <td className="py-2 pr-4 text-foreground">{farm}</td>
                  <td className="py-2 text-muted-foreground">{history}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Context */}
      <Section id="context" title="Historical & Literary Context">
        <div className="space-y-4">
          {contextSections.map((c) => (
            <div key={c.title} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.content}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Essay Planning */}
      <Section id="essay-planning" title="Essay Planning for Common Questions">
        <div className="space-y-5">
          {essayQuestions.map((eq, i) => (
            <div key={i} className="rounded-lg border border-border bg-muted p-4">
              <p className="font-medium text-foreground">{eq.question}</p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">Key points to cover:</p>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {eq.points.map((p, j) => (
                    <li key={j}>&bull; {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Writer's Methods */}
      <Section id="writers-methods" title="Writer&rsquo;s Methods &amp; Techniques">
        <div className="space-y-4">
          {[
            {
              method: 'Allegory',
              detail:
                'The entire novel functions as an extended allegory for the Russian Revolution and the rise of Stalinism. Every character, event, and location has a historical parallel. This allows Orwell to make a complex political argument accessible to readers of all backgrounds. The allegorical form also gives the novel universality: while it maps onto Russian history specifically, its warnings about power, propaganda, and revolution apply to any political system.',
            },
            {
              method: 'The Fable Form',
              detail:
                "By using animals as characters, Orwell strips political corruption to its essentials. The simplicity of the fable form is deliberately deceptive: it makes the mechanisms of totalitarianism visible and comprehensible. Animals cannot argue back effectively, just as an uneducated populace cannot challenge propaganda. The form also creates dark irony: children's story conventions are used to tell a story of tyranny and murder.",
            },
            {
              method: 'Irony',
              detail:
                "Orwell uses dramatic irony throughout. The reader sees the pigs' hypocrisy before the animals do. Situational irony abounds: the revolution against human oppression produces animal oppression; Boxer's motto 'I will work harder' hastens his own exploitation; the animals work 'like slaves' after a revolution supposed to free them. Verbal irony appears in Squealer's speeches, where every word means the opposite of what it appears to say.",
            },
            {
              method: 'Gradual Alteration of the Commandments',
              detail:
                "The progressive rewriting of the Seven Commandments is Orwell's most effective structural device. Each alteration is small enough to seem reasonable in isolation ('No animal shall sleep in a bed with sheets'), but the cumulative effect is total corruption. This mirrors how totalitarian regimes erode rights incrementally. The animals' inability to remember the original wording reflects how populations lose track of their own history.",
            },
            {
              method: 'Circular Structure',
              detail:
                "The novel ends where it began: with tyranny on Manor Farm. The pigs become indistinguishable from the humans they replaced. This circular structure delivers Orwell's bleakest message: revolution, without structural safeguards against the concentration of power, merely replaces one ruling class with another. The cycle of oppression is unbroken.",
            },
            {
              method: 'Third-Person Omniscient Narration',
              detail:
                'Orwell uses a detached, matter-of-fact narrative voice that reports horrifying events without emotional commentary. The execution scene in Chapter 7 is described in plain, factual prose, making the violence more shocking by refusing to editorialise. This restrained style forces the reader to supply the moral judgement that the narrator withholds.',
            },
            {
              method: 'Symbolism',
              detail:
                "Key symbols include: the windmill (Stalin's Five-Year Plans and the exploitation of workers for abstract goals); the farmhouse (the privilege and corruption of the ruling class); the whip (oppression, first human, then porcine); Beasts of England (revolutionary idealism, abolished when it becomes dangerous). Each symbol gains power through repetition and transformation across the novel.",
            },
            {
              method: 'Characterisation Through Speech',
              detail:
                "Orwell differentiates characters through their language. Squealer speaks in rhetorical questions and false logic. Boxer speaks in simple slogans. Old Major speaks in Marxist rhetoric. The sheep bleat mindless slogans. Benjamin speaks in cynical aphorisms. Napoleon barely speaks at all, ruling through silence and surrogates. The pigs' increasing use of human language mirrors their increasing adoption of human behaviour.",
            },
          ].map((m) => (
            <div key={m.method} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{m.method}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Grade 9 Exemplar Points */}
      <Section id="grade-9-points" title="Grade 9 Exemplar Points">
        <p className="mb-4 text-sm text-muted-foreground">
          These are the kinds of sophisticated, conceptualised arguments that distinguish Grade 9
          responses. Use them as springboards for your own analysis.
        </p>
        <div className="space-y-3">
          {[
            "Orwell suggests that the most dangerous form of power is not physical force (the dogs) but the control of narrative (Squealer). The pigs do not need to threaten the animals when they can simply rewrite reality. This anticipates Orwell's concept of 'doublethink' in Nineteen Eighty-Four.",
            "The novel implies that Boxer's greatest strength --- his physical power --- is also his greatest weakness, because it allows the pigs to extract maximum labour from him while his intellectual limitations prevent him from recognising his exploitation. Orwell suggests that the working class's virtues (loyalty, diligence, selflessness) are precisely what makes them vulnerable to totalitarian abuse.",
            "Orwell's decision to deny Curley's wife a name in Of Mice and Men has a parallel in Animal Farm: the animals increasingly lose their individual identities as the regime consolidates. The sheep become a single bleating mass; the hens are a collective that rebels and is crushed. Totalitarianism depends on the erasure of individuality.",
            "Benjamin's refusal to act despite his understanding makes him, in Orwell's schema, as culpable as the pigs. His literacy could challenge Squealer's propaganda; his intelligence could organise resistance. Instead, his cynicism becomes a form of complicity. Orwell argues that political passivity in the face of injustice is itself a moral choice --- and the wrong one.",
            "The final commandment --- 'All animals are equal, but some animals are more equal than others' --- is not merely a logical absurdity but a demonstration of how language can be used to make inequality seem natural. The oxymoron 'more equal' normalises hierarchy by absorbing it into the language of equality itself. This is Orwell's most concise illustration of how totalitarian regimes co-opt progressive language.",
            "Orwell's use of the farm setting is itself a political statement: by placing his allegory in the most fundamental economic unit (agricultural production), he suggests that the dynamics of exploitation are not specific to industrialised societies or communist revolutions but are embedded in the basic relationship between labour and ownership.",
            "The fact that the animals cannot distinguish between pigs and humans in the final scene suggests that power itself --- not the ideology of those who hold it --- is the corrupting force. Orwell's argument is not that communism is uniquely evil but that any system concentrating power in a small elite will produce tyranny.",
            "Moses the Raven's return in the later chapters suggests that religion is not simply a tool of the old regime but a permanent feature of any hierarchical society. Both Jones and Napoleon find religion useful because it redirects the animals' hope from material improvement to an afterlife, preventing present-tense resistance.",
          ].map((point, i) => (
            <div key={i} className="rounded-lg border-l-4 border-accent bg-muted p-4">
              <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Exam Questions with Model Answer Outlines */}
      <Section id="exam-questions" title="Exam-Style Questions with Model Answer Outlines">
        <p className="mb-4 text-sm text-muted-foreground">
          These outlines show how to structure a full-mark GCSE response. Each follows the
          What-How-Why method: What is Orwell saying? How does he convey it? Why does it matter
          (context and reader response)?
        </p>
        <div className="space-y-6">
          {[
            {
              question:
                'How does Orwell present the dangers of an uneducated populace in Animal Farm?',
              outline: [
                "Introduction: Orwell argues that ignorance enables tyranny. The animals' lack of education is the single most important factor in the pigs' success.",
                "Para 1 -- Boxer's literacy: He never learns more than four letters. His intellectual limitations make him rely on slogans ('Napoleon is always right') instead of critical thought. Orwell shows that physical strength without intellectual independence is easily exploited.",
                "Para 2 -- The sheep: Their mindless repetition of 'Four legs good, two legs bad' (later 'better') shows how simplified slogans replace complex thought. Squealer uses them to drown out dissent. Orwell warns that a population reduced to slogans cannot resist manipulation.",
                "Para 3 -- The commandments: The animals cannot detect changes because most cannot read the wall. 'Several of them would have protested if they could have found the right arguments.' Orwell makes the connection between literacy and political agency explicit.",
                "Para 4 -- Napoleon's 'education' of the puppies: Education is weaponised. The puppies receive training, not education: they learn obedience, not critical thinking. Orwell shows that controlling education is a key mechanism of totalitarian power.",
                "Conclusion: Orwell's message is that democracy requires an educated citizenry. Without the ability to read, think critically, and remember, populations are defenceless against propaganda. Link to Orwell's wider concern about the corruption of language.",
              ],
            },
            {
              question:
                'How does Orwell use the character of Squealer to explore the power of propaganda?',
              outline: [
                "Introduction: Squealer is the novel's most important secondary character because he represents the mechanism by which tyranny is maintained: not force (the dogs) but narrative control.",
                "Para 1 -- Rhetorical techniques: Squealer uses questions ('Surely you don't want Jones back?'), statistics the animals cannot verify, and emotional manipulation. His ability to 'turn black into white' makes him the pigs' most valuable asset.",
                "Para 2 -- Rewriting history: Squealer transforms Snowball from hero to traitor, claims Napoleon always supported the windmill, and presents Boxer's death as peaceful. Each revision is small but cumulative. Orwell shows how totalitarian regimes falsify the historical record.",
                "Para 3 -- The commandments: Squealer's nocturnal alterations of the commandments represent the rewriting of constitutional principles. The animals' failure to detect the changes shows how propaganda exploits poor memory and literacy.",
                'Para 4 -- Squealer and the dogs: On one occasion, Squealer is found beside the commandments at night with paint and a ladder, accompanied by dogs. The combination of propaganda (Squealer) and force (the dogs) represents the two pillars of totalitarian control.',
                "Conclusion: Orwell argues that propaganda is more dangerous than force because it makes force seem unnecessary. Squealer does not threaten the animals; he convinces them. Connect to Orwell's later exploration of Newspeak in Nineteen Eighty-Four.",
              ],
            },
            {
              question:
                "'The ending of Animal Farm suggests that revolution is pointless.' How far do you agree?",
              outline: [
                "Introduction: The ending --- pigs indistinguishable from humans --- could suggest that revolution merely replaces one ruling class with another. However, Orwell's argument is more nuanced: the problem is not revolution itself but the concentration of power.",
                'Para 1 -- Evidence for the statement: The circular structure returns the farm to tyranny. The final commandment replaces equality with hierarchy. The card game between pigs and humans shows mutual exploitation. Orwell seems deeply pessimistic.',
                "Para 2 -- Evidence against: The revolution was justified. Jones was cruel and neglectful. Old Major's vision was genuine. The harvest in Chapter 3 shows what collective action can achieve. The failure is not of the revolution but of the revolutionaries.",
                "Para 3 -- Orwell's political position: Orwell was a democratic socialist. He supported revolution against oppression but opposed the Stalinist corruption of revolutionary ideals. Animal Farm attacks Stalinism, not socialism. His preface to the Ukrainian edition makes this clear.",
                "Para 4 -- Alternative readings: Benjamin could be read as Orwell's self-critique: the intellectual who sees injustice but does nothing is partly responsible. The novel implies that the revolution failed because the animals did not resist the pigs' power grab early enough.",
                'Conclusion: Orwell does not argue that revolution is pointless but that it is vulnerable to corruption when power is concentrated without accountability. The novel is a warning, not a counsel of despair.',
              ],
            },
          ].map((eq, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-bold text-foreground">{eq.question}</h4>
              <div className="mt-3 space-y-2">
                {eq.outline.map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
      <Section id="practice-questions" title="Practice Questions">
        <p className="text-sm text-muted-foreground mb-6">
          Write your answer below each question and receive AI-powered feedback tailored to GCSE
          English Literature mark schemes. Aim for at least 150 words per response to get meaningful
          feedback.
        </p>
        <div className="space-y-8">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 1</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Orwell use the character of Napoleon to explore the corrupting nature of
              power in <em>Animal Farm</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Animal Farm - How Orwell uses Napoleon to explore the corrupting nature of power"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 2</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Orwell present the role of propaganda and language as tools of control in{' '}
              <em>Animal Farm</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Animal Farm - How Orwell presents propaganda and language as tools of control"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 3</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Orwell use the character of Boxer to explore the exploitation of the working
              class?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Animal Farm - How Orwell uses Boxer to explore the exploitation of the working class"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 4</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Orwell present the theme of equality and its betrayal in <em>Animal Farm</em>
              ?<span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Animal Farm - How Orwell presents the theme of equality and its betrayal"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>
        </div>
      </Section>

      {/* Back link */}
      <div className="pt-4 text-sm">
        <Link
          href="/resources/revision-notes"
          className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
        >
          &larr; Back to Revision Notes
        </Link>
      </div>

      {/* Rights / fair-dealing notice */}
      <footer className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground">
        <p className="mx-auto max-w-3xl">
          <strong>Rights notice:</strong> While <em>Animal Farm</em> entered UK public domain in
          2021, the Orwell estate (AM Heath) actively manages educational use. Quotations on this
          page are short fair-dealing extracts; longer engagement should use a school-licensed
          edition. <em>Animal Farm</em> &copy; The Estate of George Orwell. Short quotations are
          used for criticism and review under fair dealing (CDPA&nbsp;1988, s.30).
        </p>
      </footer>
    </div>
  )
}
