import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/animal-farm' },
  title: "Animal Farm Study Guide — Edexcel GCSE English Literature",
  description:
    "Complete Animal Farm revision guide for Edexcel GCSE English Literature. Plot, characters, themes, 15+ key quotes, Russian Revolution context, allegory analysis, and Edexcel exam technique.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const PLOT_SUMMARY = [
  {
    chapter: "Chapters 1–2",
    title: "Old Major's Speech and the Rebellion",
    summary:
      "Old Major, the prize boar, delivers a speech calling on the animals to overthrow Mr Jones and establish an equal society. He teaches them the song 'Beasts of England.' Old Major dies three days later. The pigs — especially Napoleon, Snowball, and Squealer — develop his ideas into a philosophy called Animalism. When Jones forgets to feed the animals, they rebel spontaneously, driving Jones and his men off the farm. The animals rename Manor Farm as 'Animal Farm' and the pigs paint the Seven Commandments on the barn wall.",
  },
  {
    chapter: "Chapters 3–4",
    title: "Early Success and the Battle of the Cowshed",
    summary:
      "The animals work together and the harvest is the best the farm has ever seen. The pigs take on a supervisory role, claiming they need the milk and apples for themselves because they are 'brain workers.' Snowball organises committees and teaches the animals to read. Napoleon takes no interest in committees but quietly takes nine puppies to educate privately. When Jones and neighbouring farmers attempt to recapture the farm, the animals fight them off at the Battle of the Cowshed. Snowball is hailed as a hero.",
  },
  {
    chapter: "Chapters 5–6",
    title: "Napoleon's Coup and the Windmill",
    summary:
      "Snowball proposes building a windmill to modernise the farm. Napoleon opposes it. At the crucial debate, Napoleon unleashes his privately trained dogs, who chase Snowball off the farm. Napoleon abolishes meetings and declares that all decisions will be made by a committee of pigs. He then claims the windmill was his idea all along. Squealer rewrites history to portray Snowball as a traitor. The animals begin trading with humans through a solicitor, Mr Whymper. The pigs move into the farmhouse and sleep in beds. The windmill collapses in a storm, but Napoleon blames Snowball for its destruction.",
  },
  {
    chapter: "Chapters 7–8",
    title: "The Purges and the Battle of the Windmill",
    summary:
      "Napoleon intensifies his reign of terror. Animals who confess to collaborating with Snowball are executed by the dogs. 'Beasts of England' is abolished. The commandments are altered — 'No animal shall kill any other animal' becomes 'No animal shall kill any other animal without cause.' Napoleon begins dealing with Frederick, a neighbouring farmer, who pays for timber with forged banknotes. Frederick then attacks the farm and destroys the windmill. The pigs discover a case of whisky and the commandment about alcohol is changed to 'No animal shall drink alcohol to excess.'",
  },
  {
    chapter: "Chapters 9–10",
    title: "Boxer's Fate and the Pigs Become Human",
    summary:
      "Boxer, the loyal workhorse, collapses from overwork. Napoleon claims to send him to a veterinary hospital, but the van that takes Boxer away is actually from the horse slaughterer — the pigs sell Boxer for whisky money. Squealer tells the animals Boxer died peacefully in hospital. Years pass. The pigs walk on two legs, wear clothes, and carry whips. Only one commandment remains: 'All animals are equal, but some animals are more equal than others.' The pigs host a dinner party with neighbouring farmers. The other animals peer through the window and can no longer tell which are pigs and which are men.",
  },
];

const CHARACTERS = [
  {
    name: "Napoleon",
    allegory: "Joseph Stalin",
    description:
      "A Berkshire boar who becomes the dictator of Animal Farm. He is not a great speaker or thinker but is ruthless, cunning, and power-hungry. He uses the dogs as his secret police, Squealer as his propagandist, and fear as his primary tool of control. He gradually takes on all the habits of the humans the animals originally rebelled against — living in the farmhouse, drinking whisky, walking on two legs. He represents the corruption of revolutionary ideals into totalitarian dictatorship.",
    key_quotes: [
      '"Napoleon is always right"',
      '"All animals are equal, but some animals are more equal than others"',
      '"He carried a whip in his trotter"',
      '"The creatures outside looked from pig to man, and from man to pig... but already it was impossible to say which was which"',
    ],
  },
  {
    name: "Snowball",
    allegory: "Leon Trotsky",
    description:
      "An intelligent, eloquent pig who genuinely wants to improve the animals\u0027 lives. He organises committees, teaches literacy, and designs the windmill. He is brave at the Battle of the Cowshed. After Napoleon expels him using the dogs, Snowball becomes a scapegoat — blamed for everything that goes wrong on the farm. Squealer rewrites history to make Snowball a villain and traitor. He represents the idealistic revolutionary who is betrayed and erased by the dictator.",
    key_quotes: [
      '"Snowball had studied an old book of Julius Caesar\'s campaigns"',
      '"Snowball was a more vivacious pig than Napoleon, quicker in speech and more inventive"',
      '"He fought bravely at the Battle of the Cowshed"',
    ],
  },
  {
    name: "Squealer",
    allegory: "Pravda / Soviet propaganda",
    description:
      "A small, fat pig who serves as Napoleon\u0027s propagandist. He has a remarkable ability to twist language and manipulate truth. He convinces the animals that the pigs deserve special privileges, that Snowball was always a traitor, and that conditions are improving when they are clearly worsening. He represents the power of propaganda to control a population — when facts are distorted, the people cannot resist tyranny.",
    key_quotes: [
      '"Surely, comrades, you do not want Jones back?"',
      '"He could turn black into white"',
      '"The others said of Squealer that he could turn black into white"',
      '"Squealer spoke so persuasively... that they accepted his explanation without further questions"',
    ],
  },
  {
    name: "Boxer",
    allegory: "The loyal working class",
    description:
      "An enormous, powerful cart-horse who is the most dedicated worker on the farm. His two mottos — 'I will work harder' and 'Napoleon is always right' — represent blind loyalty and unquestioning obedience. Despite his strength and devotion, he is ultimately betrayed when Napoleon sells him to the knacker for whisky money once he can no longer work. Boxer\u0027s fate is the novella\u0027s most devastating moment — it shows how totalitarian regimes exploit and discard the working class.",
    key_quotes: [
      '"I will work harder"',
      '"Napoleon is always right"',
      '"His two slogans, \'I will work harder\' and \'Napoleon is always right,\' seemed to him a sufficient answer to all problems"',
      '"The van was taking Boxer to the horse slaughterer\'s!"',
    ],
  },
  {
    name: "Old Major",
    allegory: "Karl Marx / Vladimir Lenin",
    description:
      "The prize-winning boar whose speech in Chapter 1 inspires the Rebellion. He articulates the vision of an equal society where animals are free from human exploitation. His philosophy is later codified as 'Animalism' (representing Marxism/Communism). Old Major dies before the revolution, so his ideas are corrupted by those who come after him. He represents the original revolutionary thinkers whose ideals are perverted by the leaders who seize power.",
    key_quotes: [
      '"All men are enemies. All animals are comrades"',
      '"Whatever goes upon two legs is an enemy. Whatever goes upon four legs, or has wings, is a friend"',
      '"Is it not crystal clear, comrades, that all the evils of this life of ours spring from the tyranny of human beings?"',
    ],
  },
  {
    name: "Benjamin",
    allegory: "Cynical intellectuals / the sceptical public",
    description:
      "An old donkey who is the wisest animal on the farm but refuses to act. He can read as well as the pigs but never shares his knowledge. He sees through the pigs\u0027 lies but says nothing — 'Donkeys live a long time. None of you has ever seen a dead donkey.' He only speaks out when Boxer is taken to the knacker, but by then it is too late. Benjamin represents those who see injustice but remain passive, showing that intelligence without action is useless.",
    key_quotes: [
      '"Donkeys live a long time. None of you has ever seen a dead donkey"',
      '"Life would go on as it had always gone on — that is, badly"',
      '"Benjamin... noticed that there was no change"',
    ],
  },
  {
    name: "Mr Jones",
    allegory: "Tsar Nicholas II",
    description:
      "The original owner of Manor Farm. He is a neglectful, drunken farmer who mistreats his animals. His failure to feed the animals triggers the Rebellion. He represents the incompetent and corrupt ruler whose mismanagement provokes revolution. After the Rebellion he tries to recapture the farm at the Battle of the Cowshed but fails. He eventually dies in an inebriates\u0027 home.",
    key_quotes: [
      '"Mr Jones, of the Manor Farm, had locked the hen-houses for the night, but was too drunk to remember to shut the pop-holes"',
    ],
  },
  {
    name: "The Sheep",
    allegory: "The easily manipulated masses",
    description:
      "The sheep blindly repeat whatever slogans they are taught — first 'Four legs good, two legs bad,' then 'Four legs good, two legs better.' They drown out any dissent or debate with their chanting. They represent citizens who unthinkingly repeat propaganda and make it impossible for others to question authority.",
    key_quotes: [
      '"Four legs good, two legs bad"',
      '"Four legs good, two legs better"',
    ],
  },
];

const THEMES = [
  {
    theme: "Power and Corruption",
    description:
      "The central theme of the novella. Orwell shows how power corrupts absolutely. The pigs begin as liberators fighting for equality but gradually become indistinguishable from the humans they replaced. Napoleon accumulates power through violence (the dogs), propaganda (Squealer), and the rewriting of history. The Seven Commandments are steadily altered to justify the pigs\u0027 privileges. The final image — pigs and men becoming indistinguishable — is Orwell\u0027s devastating conclusion: revolutions that concentrate power in a ruling elite inevitably reproduce the tyranny they overthrew.",
    quotes: [
      '"All animals are equal, but some animals are more equal than others"',
      '"The creatures outside looked from pig to man, and from man to pig... but already it was impossible to say which was which"',
      '"He carried a whip in his trotter"',
    ],
  },
  {
    theme: "Propaganda and the Control of Language",
    description:
      "Orwell demonstrates how language can be weaponised to control a population. Squealer manipulates statistics, rewrites history, and uses rhetorical questions ('Surely, comrades, you do not want Jones back?') to silence opposition. The Seven Commandments are quietly altered. 'Beasts of England' is abolished. Slogans ('Four legs good, two legs bad') replace thought. The animals\u0027 inability to read well enough to detect the changes leaves them powerless. Orwell warns that when a regime controls language and information, it controls reality itself.",
    quotes: [
      '"He could turn black into white"',
      '"Surely, comrades, you do not want Jones back?"',
      '"The Seven Commandments... had been altered. There was nothing there now except a single Commandment"',
      '"Four legs good, two legs better"',
    ],
  },
  {
    theme: "Class and Inequality",
    description:
      "The Rebellion is fought for equality, but a new class system quickly emerges. The pigs claim special privileges — first the milk and apples, then the farmhouse, beds, alcohol, and eventually human clothing. They justify their superiority by calling themselves 'brain workers.' The other animals work harder for less food while the pigs grow fat. Orwell shows that revolutions often replace one ruling class with another, especially when the working class (Boxer, the sheep) are too loyal, too exhausted, or too uneducated to challenge the new elite.",
    quotes: [
      '"The milk and the windfall apples should be reserved for the pigs alone"',
      '"The pigs did not actually work, but directed and supervised the others"',
      '"All animals are equal, but some animals are more equal than others"',
    ],
  },
  {
    theme: "Education and Ignorance",
    description:
      "The pigs maintain power partly because the other animals lack education. The pigs can read and write fluently; most other animals cannot read beyond a few letters. This means they cannot detect changes to the Commandments or challenge Squealer\u0027s lies. Boxer responds to every problem with 'I will work harder' and 'Napoleon is always right' — hard work and blind faith replace critical thinking. Orwell argues that an uneducated population is vulnerable to exploitation and that education is essential to freedom.",
    quotes: [
      '"The pigs could already read and write perfectly"',
      '"Benjamin could read as well as any pig, but never exercised his faculty"',
      '"I will work harder"',
      '"Napoleon is always right"',
    ],
  },
  {
    theme: "Revolution and Betrayal",
    description:
      "Old Major\u0027s dream of an equal, free society is systematically betrayed by the pigs. Every principle of Animalism is broken: the pigs trade with humans, sleep in beds, drink alcohol, walk on two legs, and kill other animals. The dream of revolution — noble in its conception — is corrupted by the very leaders it empowers. Orwell is not arguing against revolution itself, but warning that without safeguards, accountability, and an educated populace, revolutions inevitably betray their original ideals.",
    quotes: [
      '"Whatever goes upon two legs is an enemy" — later broken as pigs walk upright',
      '"No animal shall sleep in a bed — with sheets"',
      '"No animal shall kill any other animal — without cause"',
      '"No animal shall drink alcohol — to excess"',
    ],
  },
  {
    theme: "The Abuse of History",
    description:
      "Napoleon and Squealer repeatedly rewrite the past to serve the present. Snowball\u0027s heroism at the Battle of the Cowshed is erased and replaced with a narrative of treachery. The windmill — Snowball\u0027s idea — is attributed to Napoleon. The animals\u0027 memories are gaslit: 'Surely, comrades, you do not want Jones back?' Orwell, who witnessed Soviet propaganda firsthand, warns that those who control the past control the present — a theme he would explore further in Nineteen Eighty-Four.",
    quotes: [
      '"Squealer spoke so persuasively... that they accepted his explanation without further questions"',
      '"Do you not remember how, just at the moment when Jones and his men had got inside the yard, Snowball suddenly turned and fled?"',
      '"Snowball was in league with Jones from the very start"',
    ],
  },
];

const KEY_QUOTES = [
  { quote: '"All animals are equal, but some animals are more equal than others"', speaker: "Narrator (Chapter 10)", significance: "The final, corrupted commandment. Orwell's most famous line — it captures the entire betrayal of the revolution in a single paradox. Equality has been twisted to justify totalitarian hierarchy." },
  { quote: '"The creatures outside looked from pig to man, and from man to pig... but already it was impossible to say which was which"', speaker: "Narrator (Chapter 10)", significance: "The novella's closing image. The pigs have become identical to the humans they overthrew. Orwell's devastating conclusion: the revolution has come full circle." },
  { quote: '"Four legs good, two legs bad"', speaker: "The Sheep (Chapter 3)", significance: "Animalism reduced to a mindless slogan. The sheep repeat it to drown out debate. Orwell shows how propaganda simplifies complex ideas into tools of control." },
  { quote: '"Four legs good, two legs better"', speaker: "The Sheep (Chapter 10)", significance: "The reversal of the original slogan when the pigs walk upright. The sheep adapt instantly, showing how propaganda can make people accept the exact opposite of what they once believed." },
  { quote: '"I will work harder"', speaker: "Boxer (throughout)", significance: "Boxer's first motto. His response to every problem is more labour, never questioning the system. Orwell shows the tragedy of the loyal worker who is exploited precisely because of his devotion." },
  { quote: '"Napoleon is always right"', speaker: "Boxer (throughout)", significance: "Boxer's second motto — blind faith in the leader replaces independent thought. This unquestioning loyalty ultimately leads to Boxer's death when Napoleon betrays him." },
  { quote: '"Surely, comrades, you do not want Jones back?"', speaker: "Squealer (Chapter 3)", significance: "Squealer's most powerful propaganda technique — the appeal to fear. By invoking the threat of Jones's return, he silences all criticism of the pigs' privileges." },
  { quote: '"He could turn black into white"', speaker: "Narrator about Squealer (Chapter 2)", significance: "Orwell's description of Squealer's persuasive power. Foreshadows how Squealer will rewrite history and make the animals accept obvious lies." },
  { quote: '"All men are enemies. All animals are comrades"', speaker: "Old Major (Chapter 1)", significance: "Old Major's revolutionary principle. The simplicity of this binary worldview makes it easy to adopt but also easy to exploit — the pigs later become the 'men' they opposed." },
  { quote: '"He carried a whip in his trotter"', speaker: "Narrator about Napoleon (Chapter 10)", significance: "Napoleon adopts Jones's instrument of oppression. The whip symbolises the complete reversal of the revolution — the liberator has become the oppressor." },
  { quote: '"The milk and the windfall apples should be reserved for the pigs alone"', speaker: "Squealer (Chapter 3)", significance: "The first act of inequality after the Rebellion. Justified by Squealer as necessary for 'brain workers,' it sets the precedent for every future privilege the pigs take." },
  { quote: '"Donkeys live a long time. None of you has ever seen a dead donkey"', speaker: "Benjamin (Chapter 3)", significance: "Benjamin's cynical refusal to engage. He has seen enough to know that revolutions fail, but his passivity makes him complicit in the pigs' tyranny." },
  { quote: '"The van was taking Boxer to the horse slaughterer\'s!"', speaker: "Benjamin (Chapter 9)", significance: "Benjamin finally speaks out — but too late. The most emotionally devastating moment in the novella. Boxer's loyalty is repaid with betrayal and death." },
  { quote: '"Is it not crystal clear, comrades, that all the evils of this life of ours spring from the tyranny of human beings?"', speaker: "Old Major (Chapter 1)", significance: "The ideological foundation of the Rebellion. Orwell shows how a legitimate grievance can be exploited by those who replace one tyranny with another." },
  { quote: '"No animal shall sleep in a bed — with sheets"', speaker: "Altered Commandment (Chapter 6)", significance: "The first obvious alteration. The words 'with sheets' are added so the pigs can justify sleeping in the farmhouse beds. Demonstrates how the ruling class bends the rules to suit itself." },
  { quote: '"Life would go on as it had always gone on — that is, badly"', speaker: "Benjamin (Chapter 5)", significance: "Benjamin's fatalism. He recognises that revolutions do not change the fundamental nature of power. Orwell uses him to voice scepticism about utopian promises." },
  { quote: '"The pigs did not actually work, but directed and supervised the others"', speaker: "Narrator (Chapter 3)", significance: "The immediate emergence of a new ruling class. The pigs exploit their intelligence to avoid labour and claim superiority, mirroring the behaviour of the Communist Party elite." },
  { quote: '"Man is the only creature that consumes without producing"', speaker: "Old Major (Chapter 1)", significance: "Old Major's critique of exploitation. Ironic because the pigs eventually consume without producing — becoming the very parasites Old Major warned against." },
];

const ALLEGORY_POINTS = [
  {
    element: "Manor Farm / Animal Farm",
    represents: "Russia — from Tsarist Russia to the Soviet Union",
    detail:
      "The farm begins under Jones (the Tsar), is liberated through revolution, renamed (as Russia became the USSR), and ultimately returns to oppression under new masters. The renaming back to 'Manor Farm' at the end symbolises the revolution's complete failure.",
  },
  {
    element: "Old Major",
    represents: "Karl Marx and Vladimir Lenin",
    detail:
      "Like Marx, Old Major provides the philosophical basis for revolution but dies before it happens. Like Lenin, he inspires the overthrow of the old regime. His ideas (Animalism) parallel Marxism/Communism.",
  },
  {
    element: "Napoleon",
    represents: "Joseph Stalin",
    detail:
      "Napoleon seizes power through force (the dogs/secret police), eliminates his rival Snowball (Trotsky), conducts purges (the executions in Chapter 7), uses propaganda (Squealer/Pravda), and builds a cult of personality.",
  },
  {
    element: "Snowball",
    represents: "Leon Trotsky",
    detail:
      "Snowball is the intellectual idealist expelled by Napoleon, just as Trotsky was exiled by Stalin. Both are then demonised and blamed for all problems. The windmill debate mirrors the industrialisation debate between Stalin and Trotsky.",
  },
  {
    element: "Squealer",
    represents: "Pravda and Soviet propaganda",
    detail:
      "Squealer is the propaganda machine that makes the animals accept lies. He parallels the Soviet state newspaper Pravda and the broader apparatus of censorship and disinformation in the USSR.",
  },
  {
    element: "The Dogs",
    represents: "The NKVD / Secret Police",
    detail:
      "Napoleon raises the dogs from puppies, training them for loyalty. They enforce his rule through violence and intimidation, just as Stalin used the secret police to crush dissent.",
  },
  {
    element: "Boxer",
    represents: "The exploited working class (proletariat)",
    detail:
      "Boxer's immense labour and unquestioning loyalty represent the Soviet workers who built the nation but received nothing in return. His death at the knacker's mirrors how the regime discarded workers once they were no longer useful.",
  },
  {
    element: "The Battle of the Cowshed",
    represents: "The Russian Civil War (1918–1921)",
    detail:
      "Jones's attempt to retake the farm parallels the White Army and Western intervention against the Bolsheviks after the 1917 Revolution.",
  },
  {
    element: "Frederick and Pilkington",
    represents: "Hitler's Germany and the Western Allies",
    detail:
      "Frederick (Pinchfield Farm) represents Hitler — the forged banknotes parallel the Nazi-Soviet Pact's betrayal. Pilkington (Foxwood Farm) represents Britain and the West. The final card game between Napoleon and Pilkington represents Cold War tensions.",
  },
  {
    element: "The Seven Commandments",
    represents: "The principles of Communism / the Soviet constitution",
    detail:
      "The gradual alteration of the Commandments mirrors how Soviet leaders twisted Marxist principles to justify their own power and privilege.",
  },
];

const CONTEXT_POINTS = [
  {
    topic: "The Russian Revolution (1917)",
    detail:
      "Animal Farm is a direct allegory of the Russian Revolution and its aftermath. In 1917, the Russian people overthrew Tsar Nicholas II. The Bolsheviks, led by Lenin and later Stalin, promised equality and workers' rights but instead created a totalitarian state. Orwell maps the novella's events precisely onto this history: Jones is the Tsar, Old Major is Marx/Lenin, Napoleon is Stalin, Snowball is Trotsky.",
  },
  {
    topic: "Stalin's Soviet Union",
    detail:
      "By the 1930s, Stalin had consolidated absolute power. He conducted purges (1936–38) in which millions were executed or sent to labour camps. He used propaganda, censorship, and a cult of personality to maintain control. He rewrote Soviet history to erase rivals like Trotsky. These events are directly mirrored in Chapters 7–10 of Animal Farm.",
  },
  {
    topic: "Orwell's Political Position",
    detail:
      "Orwell was a democratic socialist — he believed in equality and workers' rights but was fiercely opposed to totalitarianism. He fought in the Spanish Civil War (1936–39) and witnessed first-hand how the Soviet-backed communists betrayed their own allies. This experience convinced him that Stalinism was a betrayal of true socialist ideals, which became the central argument of Animal Farm.",
  },
  {
    topic: "Publication Difficulties (1945)",
    detail:
      "Orwell struggled to publish Animal Farm because the USSR was Britain's ally during WWII. Publishers feared offending Stalin. The novella was rejected by multiple publishers, including by T.S. Eliot at Faber and Faber. It was finally published in August 1945, just as the war ended. The difficulty of publication itself illustrates Orwell's theme — that inconvenient truths about powerful allies are suppressed.",
  },
  {
    topic: "The Cold War Context",
    detail:
      "Although written during WWII, Animal Farm became hugely influential during the Cold War. It was used as anti-Soviet propaganda by Western governments. Orwell's warning, however, was broader than anti-communism — he was warning against all forms of totalitarianism, including the potential for Western democracies to suppress truth and manipulate their populations.",
  },
  {
    topic: "Orwell and Language",
    detail:
      "Orwell believed that political language was designed 'to make lies sound truthful and murder respectable.' In his essay 'Politics and the English Language' (1946), he argued that corrupted language leads to corrupted thought. Animal Farm dramatises this idea — the pigs control the animals by controlling language itself: slogans, commandments, and Squealer's rhetoric.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function AnimalFarmPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/edexcel"
            className="text-sm text-white/70 hover:text-white"
          >
            &larr; Edexcel English Literature
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Animal Farm — Full Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Edexcel GCSE English Literature &middot; Paper 1, Section B &middot;
            Post-1914 British Play or Novel (40 marks)
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Quick nav ─────────────────────────────────────────── */}
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["#exam-overview", "Exam Overview"],
              ["#plot", "Plot Summary"],
              ["#characters", "Character & Allegory Analysis"],
              ["#themes", "Key Themes"],
              ["#quotes", "Key Quotes (15+)"],
              ["#allegory", "Russian Revolution Allegory"],
              ["#context", "Historical Context"],
              ["#exam", "Edexcel Exam Technique"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-primary hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Exam overview ──────────────────────────────────────── */}
        <section id="exam-overview" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Edexcel Paper 1, Section B — What You Need to Know
          </h2>
          <div className="mt-6 rounded-xl border-2 border-primary bg-blue-500/10 p-6">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span><strong>Paper 1, Section B:</strong> Post-1914 British Play or Novel — Animal Farm is examined here.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span><strong>Format:</strong> You are given an <strong>extract</strong> from the novella, followed by an essay question. You must analyse the extract and then explore the theme/character across the whole text.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span><strong>Marks:</strong> 40 marks total (AO1: response and quotation; AO2: language, form, structure; AO3: context).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span><strong>Timing:</strong> Approximately 50–55 minutes. Spend 5 minutes planning, 40–45 minutes writing, and 5 minutes checking.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span><strong>Key requirement:</strong> You must write about the extract AND the wider novella. Answers that only discuss the extract cannot achieve top marks.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Plot summary ──────────────────────────────────────── */}
        <section id="plot" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Plot Summary</h2>
          <p className="mt-2 text-muted-foreground">
            Animal Farm is a novella — short, tightly structured, and allegorical.
            Every event maps onto the history of the Russian Revolution and
            Stalin&apos;s Soviet Union.
          </p>
          <div className="mt-6 space-y-6">
            {PLOT_SUMMARY.map((ch) => (
              <div
                key={ch.chapter}
                className="rounded-xl border border-border p-6 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    {ch.chapter}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {ch.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {ch.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Characters ────────────────────────────────────────── */}
        <section id="characters" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Character &amp; Allegory Analysis</h2>
          <div className="mt-6 space-y-6">
            {CHARACTERS.map((char) => (
              <div
                key={char.name}
                className="rounded-xl border border-border p-6 shadow-md"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {char.name}
                  </h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Represents: {char.allegory}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {char.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Quotes
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {char.key_quotes.map((q) => (
                      <li key={q} className="text-sm italic text-muted-foreground">
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
          <h2 className="text-2xl font-bold text-foreground">Key Themes</h2>
          <div className="mt-6 space-y-6">
            {THEMES.map((t) => (
              <div
                key={t.theme}
                className="rounded-xl border-l-4 border-primary bg-muted p-6"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {t.theme}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
                <div className="mt-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Supporting Quotes
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {t.quotes.map((q) => (
                      <li key={q} className="text-sm italic text-muted-foreground">
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
          <h2 className="text-2xl font-bold text-foreground">Key Quotes (15+)</h2>
          <p className="mt-2 text-muted-foreground">
            The Edexcel exam provides an extract, but you must also recall
            quotations from across the novella. Learn these quotes and practise
            embedding them into analytical paragraphs.
          </p>
          <div className="mt-6 space-y-4">
            {KEY_QUOTES.map((q, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-4 shadow-md"
              >
                <p className="text-sm font-semibold italic text-foreground">
                  {q.quote}
                </p>
                <p className="mt-1 text-xs font-medium text-primary">
                  — {q.speaker}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{q.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Russian Revolution Allegory ─────────────────────── */}
        <section id="allegory" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Russian Revolution Allegory — Complete Guide
          </h2>
          <p className="mt-2 text-muted-foreground">
            Animal Farm is an allegorical novella — every character, event, and
            setting represents a real historical counterpart. Understanding the
            allegory is essential for AO3 (context) marks.
          </p>
          <div className="mt-6 space-y-4">
            {ALLEGORY_POINTS.map((a) => (
              <div
                key={a.element}
                className="rounded-xl border border-border p-5 shadow-md"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-bold text-foreground">{a.element}</h3>
                  <span className="text-sm font-medium text-primary">
                    &rarr; {a.represents}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Context ───────────────────────────────────────────── */}
        <section id="context" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Historical Context</h2>
          <div className="mt-6 space-y-4">
            {CONTEXT_POINTS.map((c) => (
              <div
                key={c.topic}
                className="rounded-xl border border-border p-5 shadow-md"
              >
                <h3 className="font-bold text-foreground">{c.topic}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Exam technique ────────────────────────────────────── */}
        <section id="exam" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Edexcel Exam Technique for Animal Farm
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                What Does an Edexcel Question Look Like?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You will be given an <strong>extract</strong> from Animal Farm,
                followed by a question that asks you to analyse the extract and
                then explore the theme or character across the whole novella.
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border-2 border-dashed border-primary bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Example Question 1
                  </p>
                  <p className="mt-1 text-xs italic text-muted-foreground">
                    [Extract from Chapter 7 — the executions scene]
                  </p>
                  <p className="mt-2 text-sm text-foreground font-medium">
                    How does Orwell present the abuse of power in this extract
                    and in the novella as a whole?
                  </p>
                </div>
                <div className="rounded-lg border-2 border-dashed border-primary bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Example Question 2
                  </p>
                  <p className="mt-1 text-xs italic text-muted-foreground">
                    [Extract from Chapter 3 — Squealer justifying the milk and apples]
                  </p>
                  <p className="mt-2 text-sm text-foreground font-medium">
                    How does Orwell present the role of propaganda in this
                    extract and in the novella as a whole?
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                How to Structure Your Answer (Extract + Essay)
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                  <span>
                    <strong>Introduction (2–3 minutes)</strong> — state Orwell&apos;s purpose and how the theme/character connects to his wider political message. Briefly mention the Russian Revolution context.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                  <span>
                    <strong>Analyse the extract (2–3 paragraphs)</strong> — work through the extract closely. Identify key language, literary techniques, and what Orwell is conveying. Use short, embedded quotations from the extract.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
                  <span>
                    <strong>Explore the wider novella (2–3 paragraphs)</strong> — move beyond the extract. Discuss how the theme/character is presented elsewhere, tracking development across the text. Recall your own quotations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">4</span>
                  <span>
                    <strong>Integrate context throughout</strong> — link to the Russian Revolution, Stalin, Orwell&apos;s own experiences, and the political message. Context should be woven into analysis, not added as a separate paragraph.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">5</span>
                  <span>
                    <strong>Conclusion</strong> — briefly summarise Orwell&apos;s overall message. Connect to the novella&apos;s genre as a political allegory and its enduring relevance.
                  </span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl border-2 border-primary bg-blue-500/10 p-6">
              <h3 className="text-lg font-bold text-foreground">
                Top Tips for Top Marks
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Always use &quot;Orwell&quot; as the subject — &quot;Orwell presents/uses/suggests/criticises...&quot; This demonstrates awareness of the writer&apos;s craft (AO2).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Discuss the novella as an <strong>allegory</strong> — show you understand that the characters and events represent real historical figures and events. This is essential for AO3.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Analyse <strong>language closely</strong> — pick out individual words and explain their connotations. E.g., &quot;The noun &apos;comrades&apos; initially unites the animals, but is later weaponised by Squealer to manipulate them.&quot;
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Discuss <strong>structure</strong> — the novella&apos;s cyclical structure (farm returns to its original state), the gradual alteration of the Commandments, and the escalating corruption across chapters.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Discuss <strong>form</strong> — Animal Farm is a fable/allegory/satirical novella. The use of animals makes the political message accessible and universal. The simple narrative voice contrasts with the dark subject matter.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <strong>Balance extract and wider text</strong> — top-band answers give roughly equal weight to both. Do not neglect the wider novella.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Note: No separate SPaG marks on this question, but clear, accurate writing still matters for AO1.
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
