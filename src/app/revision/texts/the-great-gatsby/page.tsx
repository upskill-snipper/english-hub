// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'The Great Gatsby — Study Guide | The English Hub',
  description:
    'In-depth study guide for The Great Gatsby by F. Scott Fitzgerald: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/the-great-gatsby',
  },
}

const data: TextGuideData = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: '1925',
  category: 'Novel',
  badge: 'Edexcel A-Level / OCR A-Level / Eduqas A-Level / AQA A-Level',
  intro:
    'F. Scott Fitzgerald\u2019s The Great Gatsby is the defining novel of the American Jazz Age and one of the most studied texts at A-Level. Published in 1925, it follows the mysterious millionaire Jay Gatsby and his obsessive pursuit of Daisy Buchanan, a love he lost five years earlier. Narrated by Nick Carraway in retrospective first person, the novel moves through lavish Long Island parties, sweltering afternoons in New York hotels, and a catastrophic car accident in the ash-choked valley between West Egg and the city. Fitzgerald dissects the American Dream at the moment of its greatest economic expansion, revealing the moral emptiness beneath the glitter of new wealth. The novel is a compact, lyrical tragedy about time, longing and self-invention: about a man who tries to buy his way back into the past and is destroyed by the people he tried to join.',
  quickInfo: {
    genre: 'Modernist novel',
    setting: 'Long Island (West and East Egg) and New York City, summer 1922',
    length: '~50,000 words / 9 chapters',
    published: 'April 1925, Scribners',
  },
  plotSummary: [
    'Nick Carraway, a young Midwesterner recently returned from the First World War, moves east to learn the bond business and rents a modest cottage in West Egg, Long Island, next door to the enormous mansion of the mysterious Jay Gatsby. Across the bay in East Egg live Nick\u2019s cousin Daisy Buchanan and her wealthy, arrogant husband Tom, a former Yale football star with a mistress in the city. Over dinner Nick meets Jordan Baker, a professional golfer and Daisy\u2019s friend, who first hints that Tom is unfaithful. Returning home that night, Nick sees Gatsby for the first time, stretching his arms towards a single green light at the end of Daisy\u2019s dock. Soon afterwards Tom takes Nick to meet his mistress Myrtle Wilson, who lives above a garage in the Valley of Ashes, a desolate industrial wasteland overlooked by the giant fading eyes of Doctor T. J. Eckleburg on a weathered billboard.',
    'Nick begins to attend Gatsby\u2019s famous parties, where hundreds of strangers pour through the gardens every weekend drinking champagne and speculating about their host\u2019s fortune. Jordan tells Nick the truth: Gatsby and Daisy had a romance in Louisville in 1917 before he was shipped to France, and he has bought the mansion across the bay specifically to win her back. At Gatsby\u2019s request Nick arranges a reunion over tea, and the two are awkwardly, then ecstatically, reunited. Gatsby shows Daisy around his house, throwing his monogrammed shirts onto the bed until she weeps into them. He has invented himself \u2014 his real name is James Gatz, a poor farm boy from North Dakota \u2014 and has made his money through bootlegging and other shadowy enterprises connected to the gambler Meyer Wolfshiem, who is said to have fixed the 1919 World Series.',
    'On the hottest day of the summer the Buchanans, Gatsby, Nick and Jordan drive into New York and take a suite at the Plaza Hotel, where the tension finally breaks. Tom confronts Gatsby, exposes his criminal business dealings, and forces Daisy to admit that she cannot say she never loved her husband. The party drives home in two cars. Daisy is at the wheel of Gatsby\u2019s yellow car when it strikes and kills Myrtle Wilson, who has run out into the road believing it to be Tom. Gatsby takes the blame to protect Daisy and keeps vigil outside her house that night, while inside Tom and Daisy reconcile over cold chicken. The next afternoon Myrtle\u2019s grief-stricken husband George, convinced by Tom that Gatsby was the driver, walks to West Egg, shoots Gatsby dead in his swimming pool, and then kills himself.',
    'Gatsby\u2019s funeral is attended by almost no one. Daisy and Tom have left town without forwarding address; Gatsby\u2019s business associates vanish; only Nick, Gatsby\u2019s elderly father Henry Gatz, a handful of servants and a man Nick calls Owl Eyes stand at the graveside in the rain. Disillusioned with the East, Nick moves back to the Midwest. In the novel\u2019s closing pages he reflects on Gatsby\u2019s extraordinary capacity for hope, on the green light he reached for, and on the impossibility of recapturing the past. Tom and Daisy, he concludes, were careless people who smashed up things and creatures and retreated into their money, leaving other people to clean up the mess they had made.',
  ],
  characters: [
    {
      name: 'Jay Gatsby',
      role: 'A self-made millionaire; the novel\u2019s enigmatic title character',
      body: 'Born James Gatz to poor farmers in North Dakota, Gatsby reinvents himself in pursuit of Daisy Buchanan, whom he loved before the war. He accumulates a vast, questionably sourced fortune through bootlegging and organised crime and builds a mansion across the bay from her, throwing extravagant parties in the hope that she will one day drift in. Fitzgerald presents him as both a romantic idealist whose faith in possibility is almost religious, and a deluded criminal who believes he can repeat the past. His death, alone in his swimming pool, is the novel\u2019s final verdict on the American Dream.',
    },
    {
      name: 'Nick Carraway',
      role: 'The narrator; Daisy\u2019s cousin and Gatsby\u2019s neighbour',
      body: 'A Yale-educated Midwesterner who moves east to enter the bond business, Nick narrates the novel in retrospective first person from somewhere in the Middle West after the events have concluded. He describes himself as one of the few honest people he has ever known, and Fitzgerald uses his position as both insider and outsider \u2014 connected to Daisy but poor enough to live next door to Gatsby \u2014 to give the reader an ambivalent, morally attentive view. His disillusionment frames the novel\u2019s critique of the East.',
    },
    {
      name: 'Daisy Buchanan',
      role: 'Nick\u2019s cousin; Gatsby\u2019s former lover and the object of his obsession',
      body: 'Beautiful, charming and born into old money in Louisville, Daisy married Tom Buchanan while Gatsby was overseas. Her famous voice, Gatsby tells Nick, is "full of money" \u2014 Fitzgerald\u2019s single sharpest image of the inseparability of love and wealth in the novel. She is capable of genuine feeling but ultimately chooses security over passion, letting Gatsby take the blame for killing Myrtle and vanishing with Tom before the funeral. Her cynical wish that her daughter grow up to be "a beautiful little fool" captures her understanding of the world that traps her.',
    },
    {
      name: 'Tom Buchanan',
      role: 'Daisy\u2019s husband; a wealthy former Yale football star',
      body: 'Tom embodies the arrogance and racism of the old-money American elite. Physically powerful and emotionally crude, he keeps a mistress in the city while demanding fidelity from his wife, and he reads pseudo-scientific books about white supremacy at dinner. His confrontation with Gatsby at the Plaza exposes Gatsby\u2019s criminal origins and shatters Daisy\u2019s nerve. Fitzgerald uses him to show how the established rich wield their wealth as a weapon, smashing up things and retreating back into their money when the damage is done.',
    },
    {
      name: 'Jordan Baker',
      role: 'Professional golfer; Daisy\u2019s friend and Nick\u2019s summer romance',
      body: 'Cool, cynical and "incurably dishonest," Jordan represents the new generation of independent, sporting women of the 1920s. She is rumoured to have cheated to win a golf tournament, and Nick finds her attractive but untrustworthy. Through Jordan, Fitzgerald explores the moral carelessness of the Jazz Age elite and the limits of the so-called liberation offered to women by new wealth. Nick ends the relationship after Gatsby\u2019s death when he realises he cannot stomach the East any longer.',
    },
    {
      name: 'Myrtle Wilson',
      role: 'Tom\u2019s mistress; wife of the garage-owner George Wilson',
      body: 'Myrtle lives above her husband\u2019s failing garage in the Valley of Ashes and throws herself into her affair with Tom as an escape from her grey life. In the New York apartment Tom keeps for her she plays at being a wealthy hostess, but his violence \u2014 he breaks her nose at a drunken party \u2014 reveals the brutal limits of the fantasy. Her death under the wheels of Gatsby\u2019s car triggers the novel\u2019s catastrophe and exposes the human cost of the Buchanans\u2019 carelessness.',
    },
    {
      name: 'George Wilson',
      role: 'Myrtle\u2019s husband; a struggling garage owner',
      body: 'George is pale, defeated and bound to the Valley of Ashes. Unaware of his wife\u2019s affair until shortly before her death, he collapses into grief after she is killed and becomes convinced that the driver of the yellow car must have been her lover. Misled by Tom Buchanan, he walks across Long Island to Gatsby\u2019s house, shoots Gatsby in the swimming pool and then kills himself. Fitzgerald uses George to show how the poor are sacrificed to the selfishness of the rich.',
    },
    {
      name: 'Meyer Wolfshiem',
      role: 'Gatsby\u2019s business associate; a New York gangster',
      body: 'Based loosely on the real gambler Arnold Rothstein, Wolfshiem is the man Fitzgerald credits with having fixed the 1919 World Series. He wears cufflinks made of human molars and represents the world of organised crime that funds Gatsby\u2019s mansion and parties. His refusal to attend Gatsby\u2019s funeral \u2014 "let us learn to show our friendship for a man when he is alive and not after he is dead" \u2014 completes the picture of a milieu in which loyalty evaporates the moment the money stops.',
    },
  ],
  themes: [
    {
      title: 'The American Dream and its corruption',
      body: 'The novel is the definitive fictional account of the American Dream in its Jazz Age form. Gatsby\u2019s rise from poor farm boy to Long Island millionaire embodies the promise that anyone can reinvent themselves through effort and will. But Fitzgerald shows that the dream has curdled: Gatsby\u2019s wealth is bootleg money, his love object is already married, and the world he wants to join treats him as an outsider to the end. The novel closes with Nick meditating on the "fresh, green breast of the new world" that greeted the first Dutch sailors \u2014 an original promise that has been hollowed out into careless consumption.',
    },
    {
      title: 'Wealth: old money versus new money',
      body: 'Fitzgerald structures the geography of the novel around the division between East Egg (old, inherited money) and West Egg (new, self-made money). Tom and Daisy\u2019s East Egg mansion is "white palaces" gleaming on the water; Gatsby\u2019s West Egg house is a gaudy imitation of a French chateau. No matter how vast his fortune, Gatsby can never cross the bay, and the Buchanans\u2019 final retreat into their money after the disaster reveals how class insulates the already privileged. Wealth in the novel is never just money: it is manners, accent, history, and access.',
    },
    {
      title: 'Love and idealisation',
      body: 'Gatsby\u2019s love for Daisy is not so much love of a person as love of an idea. He has spent five years constructing the perfect vision of her, and when they are finally reunited the real Daisy inevitably falls short of what he has imagined. Fitzgerald presents idealised love as both noble and destructive: it powers Gatsby\u2019s "extraordinary gift for hope" but also blinds him to who Daisy has actually become. When she cannot promise she never loved Tom, Gatsby\u2019s entire project collapses, showing the cost of mistaking a fantasy for a human being.',
    },
    {
      title: 'Class and social mobility',
      body: 'The novel is obsessed with the barriers between social classes and the pain of attempting to cross them. Gatsby speaks in a carefully cultivated accent, imitates the manners of the rich, and rehearses an Oxford story to explain his background, but Tom immediately identifies him as a fraud. Myrtle\u2019s pretension to wealth in Tom\u2019s New York apartment is equally brittle; her death in the Valley of Ashes underlines how the poor are disposable in this world. Fitzgerald exposes social mobility as a myth sold to outsiders who will ultimately be rejected by the class they try to join.',
    },
    {
      title: 'Illusion versus reality',
      body: 'Gatsby\u2019s world is built on illusions: his invented name, his romanticised war record, the silk shirts he imports from England to impress a woman. His parties are attended by guests who do not know their host, and rumours swirl around him that he is a German spy, a murderer, a nephew of Kaiser Wilhelm. Fitzgerald uses symbols \u2014 the green light at the end of Daisy\u2019s dock, the vast unseeing eyes of Doctor T. J. Eckleburg, the ash-grey Valley \u2014 to show the gap between glittering appearances and the bleak truths beneath. Nick\u2019s role as narrator is to peel away the illusions and expose what lies underneath.',
    },
    {
      title: 'The past and longing',
      body: 'When Nick warns that you cannot repeat the past, Gatsby replies in astonishment: "Can\u2019t repeat the past? \u2026 Why of course you can!" The novel\u2019s great subject is the impossibility of returning to a former self or a former moment. Gatsby has organised his entire adult life around recovering a five-year-old love affair, and his tragedy is that time moves in one direction only. The closing image of boats borne back ceaselessly into the past converts Gatsby\u2019s personal longing into a universal condition: Americans, like everyone, keep rowing towards a shore that has already vanished behind them.',
    },
  ],
  historicalContext: [
    'Fitzgerald wrote The Great Gatsby during the mid-1920s, at the height of the Jazz Age boom he himself had named. The First World War had ended in 1918, leaving a generation disillusioned with the ideals that had sent them to the trenches, and America emerged from the conflict as the dominant economic power of the Atlantic world. Stock-market prices climbed year on year, mass-produced cars and radios transformed everyday life, and a new culture of conspicuous consumption spread from New York to the rest of the country. The novel\u2019s extravagant parties and bright young things belong to this moment of speculative exuberance, only four years before the Wall Street Crash of 1929 would end it.',
    'Prohibition, in force from 1920 to 1933, is the unspoken engine of Gatsby\u2019s wealth. The national ban on the manufacture and sale of alcohol created a vast illegal market, and the men who supplied that market \u2014 bootleggers, speakeasy owners, gamblers \u2014 became some of the richest in America. Gatsby\u2019s partner Meyer Wolfshiem is a fictionalised version of Arnold Rothstein, the real New York gangster widely believed to have fixed the 1919 World Series. Fitzgerald uses this criminal economy to show how the supposedly meritocratic dream of wealth in the 1920s was inseparable from organised lawbreaking.',
    'The novel is also shaped by the racial and cultural tensions of the decade. The Harlem Renaissance was transforming American literature and music a few miles north of Gatsby\u2019s parties, and jazz \u2014 a predominantly Black art form \u2014 provided the soundtrack to white affluence at West Egg. At the same time, the Ku Klux Klan was experiencing a resurgence, and Tom Buchanan\u2019s enthusiasm for pseudo-scientific books about the decline of the white race reflects a real current of Anglo-Saxon supremacism among the established rich. The Valley of Ashes, meanwhile, registers the industrial poverty that underpinned the decade\u2019s prosperity, as immigrant and working-class labour generated the wealth that the Buchanans carelessly enjoyed.',
    'Fitzgerald drew heavily on his own life. His tumultuous marriage to Zelda Sayre, a Southern debutante who had initially rejected him because he was not rich enough, clearly informs Gatsby\u2019s pursuit of Daisy, and Fitzgerald\u2019s sense of himself as an outsider watching the rich from the edges gives the novel its ambivalent tone. Although Gatsby received respectful reviews on publication in April 1925, it sold modestly in Fitzgerald\u2019s lifetime; only after his death in 1940, and especially after its distribution to American servicemen in the Second World War, did it come to be regarded as the great American novel of the twentieth century.',
  ],
  quotations: [
    {
      quote:
        '"In my younger and more vulnerable years my father gave me some advice that I\u2019ve been turning over in my mind ever since."',
      who: 'Nick Carraway \u2014 Chapter 1',
      analysis:
        'The opening line establishes Nick as a retrospective, morally reflective narrator, and sets up the novel\u2019s interest in judgement, memory and the attempt to understand the past.',
    },
    {
      quote:
        '"I hope she\u2019ll be a fool \u2014 that\u2019s the best thing a girl can be in this world, a beautiful little fool."',
      who: 'Daisy Buchanan \u2014 Chapter 1',
      analysis:
        'Daisy\u2019s wish for her infant daughter is a startlingly clear-eyed indictment of the world she lives in, and hints at her own knowing complicity in the system that traps her.',
    },
    {
      quote:
        '"He stretched out his arms toward the dark water \u2026 I could have sworn he was trembling \u2026 a single green light, minute and far away."',
      who: 'Nick describing Gatsby \u2014 Chapter 1',
      analysis:
        'The first appearance of the green light at the end of Daisy\u2019s dock introduces the novel\u2019s central symbol of longing and unreachable hope.',
    },
    {
      quote:
        '"This is a valley of ashes \u2014 a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens."',
      who: 'Nick \u2014 Chapter 2',
      analysis:
        'The Valley of Ashes is the novel\u2019s emblem of the industrial waste that underpins the glittering life of the rich, and is watched over by the blank eyes of Doctor T. J. Eckleburg.',
    },
    {
      quote:
        '"The eyes of Doctor T. J. Eckleburg are blue and gigantic \u2026 they look out of no face, but, instead, from a pair of enormous yellow spectacles."',
      who: 'Nick \u2014 Chapter 2',
      analysis:
        'Fitzgerald\u2019s billboard eyes become a secular stand-in for a watching God, presiding unseeing over a moral landscape that has abandoned traditional value.',
    },
    {
      quote:
        '"I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life."',
      who: 'Nick \u2014 Chapter 2',
      analysis:
        'Nick captures his double position as participant and observer, a tension that structures his narration and frames the novel\u2019s ambivalent attitude towards wealth and glamour.',
    },
    {
      quote:
        '"I believe that on the first night I went to Gatsby\u2019s house I was one of the few guests who had actually been invited."',
      who: 'Nick \u2014 Chapter 3',
      analysis:
        'The detail exposes the impersonal spectacle of Gatsby\u2019s parties: hundreds of strangers arriving uninvited to consume a host they barely acknowledge.',
    },
    {
      quote:
        '"I\u2019m inclined to reserve all judgments \u2026 Reserving judgments is a matter of infinite hope."',
      who: 'Nick \u2014 Chapter 1',
      analysis:
        'Nick\u2019s claim to impartiality is both a moral stance and a narrative strategy, and the novel repeatedly tests whether he can sustain it.',
    },
    {
      quote:
        '"You can\u2019t repeat the past."\u2003"Can\u2019t repeat the past?" he cried incredulously. "Why of course you can!"',
      who: 'Nick and Gatsby \u2014 Chapter 6',
      analysis:
        'The exchange crystallises Gatsby\u2019s defining delusion: that time can be reversed by willpower and wealth, and that a five-year-old love affair can be restarted where it left off.',
    },
    {
      quote: '"Her voice is full of money."',
      who: 'Gatsby \u2014 Chapter 7',
      analysis:
        'Gatsby\u2019s sharpest insight \u2014 that the charm of Daisy\u2019s voice is inseparable from the wealth that shaped it \u2014 exposes the inseparability of love and class in the novel.',
    },
    {
      quote:
        '"Her voice is full of money \u2026 That was it. I\u2019d never understood before. It was full of money \u2014 that was the inexhaustible charm that rose and fell in it, the jingle of it, the cymbals\u2019 song of it."',
      who: 'Nick reflecting on Gatsby\u2019s phrase \u2014 Chapter 7',
      analysis:
        'Nick\u2019s expansion of Gatsby\u2019s line turns a three-word diagnosis into a sustained meditation on the sound of privilege itself.',
    },
    {
      quote:
        '"Her face was smeared with a mixture of blood and dust \u2026 her left breast was swinging loose like a flap."',
      who: 'Nick describing Myrtle\u2019s death \u2014 Chapter 7',
      analysis:
        'The violence of the passage \u2014 shocking in its graphic bodily detail \u2014 makes unavoidable the human cost of the Buchanans\u2019 carelessness and Gatsby\u2019s silk-shirt fantasies.',
    },
    {
      quote:
        '"They were careless people, Tom and Daisy \u2014 they smashed up things and creatures and then retreated back into their money \u2026 and let other people clean up the mess they had made."',
      who: 'Nick \u2014 Chapter 9',
      analysis:
        'Nick\u2019s retrospective verdict on the Buchanans is the novel\u2019s most damning moral statement, and the phrase "retreated back into their money" captures how old wealth functions as both shield and weapon.',
    },
    {
      quote:
        '"Gatsby believed in the green light, the orgastic future that year by year recedes before us."',
      who: 'Nick \u2014 Chapter 9',
      analysis:
        'In the closing pages, Nick transforms Gatsby\u2019s personal longing into a national and universal condition, binding him to the American Dream itself.',
    },
    {
      quote: '"So we beat on, boats against the current, borne back ceaselessly into the past."',
      who: 'Nick \u2014 Chapter 9 (closing line)',
      analysis:
        'The famous final sentence turns the novel\u2019s central image of striving into a resigned, elegiac truth: forward motion is an illusion, and the past always catches us.',
    },
    {
      quote:
        '"He had come a long way to this blue lawn, and his dream must have seemed so close that he could hardly fail to grasp it."',
      who: 'Nick \u2014 Chapter 9',
      analysis:
        'Nick\u2019s final evocation of Gatsby frames his whole life as a near-miss, making the novel\u2019s tragedy one of narrowly unrealised hope rather than foolish fantasy.',
    },
    {
      quote:
        '"The truth was that Jay Gatsby of West Egg, Long Island, sprang from his Platonic conception of himself."',
      who: 'Nick \u2014 Chapter 6',
      analysis:
        'The phrase "Platonic conception of himself" gives philosophical weight to Gatsby\u2019s self-invention, presenting him as both fraud and visionary.',
    },
    {
      quote:
        '"Let us learn to show our friendship for a man when he is alive and not after he is dead."',
      who: 'Meyer Wolfshiem \u2014 Chapter 9',
      analysis:
        'Wolfshiem\u2019s excuse for missing the funeral completes the picture of a world in which loyalty evaporates as soon as the money stops flowing.',
    },
    {
      quote:
        '"If personality is an unbroken series of successful gestures, then there was something gorgeous about him."',
      who: 'Nick \u2014 Chapter 1',
      analysis:
        'Nick\u2019s early verdict on Gatsby captures the double quality of his persona: a construction of deliberate gestures that nevertheless amounts to something "gorgeous" and genuinely remarkable.',
    },
    {
      quote:
        '"They\u2019re a rotten crowd \u2026 You\u2019re worth the whole damn bunch put together."',
      who: 'Nick to Gatsby \u2014 Chapter 8',
      analysis:
        'Nick\u2019s last words to Gatsby, shouted across a lawn on the morning of his death, mark the point at which his claim to reserve all judgements finally breaks down.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'gg-1',
    question: 'Who narrates The Great Gatsby?',
    type: 'multiple-choice',
    options: ['Jay Gatsby', 'Nick Carraway', 'Daisy Buchanan', 'Tom Buchanan'],
    correctIndex: 1,
    explanation:
      "The novel is narrated in retrospective first person by Nick Carraway, Daisy's cousin and Gatsby's West Egg neighbour.",
    topic: "Writer's Methods",
    difficulty: 'foundation',
  },
  {
    id: 'gg-2',
    question: "What is Gatsby's real name and where is he from?",
    type: 'multiple-choice',
    options: [
      'Jay Gatsby from New York',
      'James Gatz from North Dakota',
      'Jay Gatz from Minnesota',
      'James Gatsby from Louisville',
    ],
    correctIndex: 1,
    explanation:
      "Gatsby was born James Gatz to poor farmers in North Dakota. He reinvented himself as Jay Gatsby, a crucial fact about the novel's theme of self-invention.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'gg-3',
    question: "What does the green light at the end of Daisy's dock symbolise?",
    type: 'multiple-choice',
    options: [
      'Jealousy',
      "Gatsby's unreachable longing for Daisy and the wider American Dream",
      'Wealth',
      'Luck',
    ],
    correctIndex: 1,
    explanation:
      "The green light represents Gatsby's hope of reuniting with Daisy, and by extension the American Dream — always just out of reach across the water.",
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'gg-4',
    question: 'Where do the Buchanans live in relation to Gatsby?',
    type: 'multiple-choice',
    options: [
      'Next door in West Egg',
      'Across the bay in East Egg (old money)',
      'In Manhattan',
      'In the Valley of Ashes',
    ],
    correctIndex: 1,
    explanation:
      'The Buchanans live in East Egg, the "old money" side of the bay. Gatsby lives in West Egg, the "new money" side. This geography dramatises the class barrier Gatsby cannot cross.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'gg-5',
    question: 'Who is driving the car that kills Myrtle Wilson?',
    type: 'multiple-choice',
    options: ['Gatsby', 'Daisy', 'Tom', 'Nick'],
    correctIndex: 1,
    explanation:
      "Daisy is at the wheel of Gatsby's yellow car when it strikes Myrtle. Gatsby takes the blame to protect her, a decision that ultimately costs him his life.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'gg-6',
    question: 'Who kills Gatsby?',
    type: 'multiple-choice',
    options: ['Tom Buchanan', 'Meyer Wolfshiem', 'George Wilson', 'The police'],
    correctIndex: 2,
    explanation:
      'George Wilson, believing Gatsby killed his wife and was her lover, shoots Gatsby in his swimming pool and then kills himself. He has been misled by Tom Buchanan.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'gg-7',
    question: "What is Jordan Baker's profession?",
    type: 'multiple-choice',
    options: ['Actress', 'Professional golfer', 'Journalist', 'Socialite only'],
    correctIndex: 1,
    explanation:
      'Jordan is a professional golfer, rumoured to have cheated to win a tournament. She represents the new, sporting, independent woman of the 1920s.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'gg-8',
    question: 'Where does Myrtle Wilson live?',
    type: 'multiple-choice',
    options: [
      'East Egg',
      'West Egg',
      "The Valley of Ashes, above her husband's garage",
      'Manhattan',
    ],
    correctIndex: 2,
    explanation:
      "Myrtle lives in the Valley of Ashes, the grey industrial wasteland between West Egg and New York City, above George Wilson's failing garage.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'gg-9',
    question: 'What does Gatsby mean when he says Daisy\'s "voice is full of money"?',
    type: 'multiple-choice',
    options: [
      'She is greedy',
      'Her charm is inseparable from the wealth and class that shaped her',
      'She is literally paid to speak',
      'She talks about money constantly',
    ],
    correctIndex: 1,
    explanation:
      "Gatsby's insight captures the novel's central point that love and wealth cannot be separated in this world. Daisy's voice sounds the way it does because of the privilege that produced her.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'gg-10',
    question: 'What is the significance of the billboard in the Valley of Ashes?',
    type: 'multiple-choice',
    options: [
      "It is an advertisement for Gatsby's parties",
      'The giant fading eyes of Doctor T. J. Eckleburg function as a secular stand-in for a watching God',
      'It is a memorial',
      'It is for bootleg liquor',
    ],
    correctIndex: 1,
    explanation:
      'The disused billboard with the eyes of Doctor T. J. Eckleburg watches unseeing over the Valley of Ashes and its moral wreckage, suggesting a world that has lost its traditional sense of divine judgement.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'gg-11',
    question: 'How does Fitzgerald present the difference between East Egg and West Egg?',
    type: 'multiple-choice',
    options: [
      'They are identical',
      'East Egg = old inherited money; West Egg = new self-made money, a geography that dramatises class division',
      'West Egg is richer',
      'They are both poor neighbourhoods',
    ],
    correctIndex: 1,
    explanation:
      'Fitzgerald uses the two Eggs to externalise the divide between old money (Tom and Daisy) and new money (Gatsby). No matter how vast his fortune, Gatsby cannot cross the bay.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'gg-12',
    question: 'What does Gatsby mean by "Can\'t repeat the past? Why of course you can!"?',
    type: 'multiple-choice',
    options: [
      'He is joking',
      "He genuinely believes he can restart his 1917 romance with Daisy exactly where it left off — the novel's defining delusion",
      'He is talking about history books',
      'He is quoting someone else',
    ],
    correctIndex: 1,
    explanation:
      "Gatsby's outburst crystallises his central delusion: that five years can be erased and the past restored through willpower and wealth. His tragedy is the discovery that they cannot.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'gg-13',
    question: 'How does Fitzgerald present Tom and Daisy at the end of the novel?',
    type: 'multiple-choice',
    options: [
      'As repentant',
      'As "careless people" who smash things up and retreat back into their money, letting others clean up the mess',
      'As heroic',
      'As tragic victims',
    ],
    correctIndex: 1,
    explanation:
      'Nick\'s retrospective verdict — "They were careless people, Tom and Daisy" — is the novel\'s most damning moral statement and frames the Buchanans as the true villains of the story.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'gg-14',
    question: "Who attends Gatsby's funeral?",
    type: 'multiple-choice',
    options: [
      'Hundreds of party guests',
      "Almost no one — Nick, Gatsby's father Henry Gatz, Owl Eyes and a few servants",
      'Daisy and Tom',
      'Meyer Wolfshiem',
    ],
    correctIndex: 1,
    explanation:
      "Gatsby's funeral is almost empty. Daisy and Tom have left town, Wolfshiem refuses to come, and only Nick, Henry Gatz, Owl Eyes and a handful of servants stand at the graveside. The absence exposes the hollowness of his social world.",
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'gg-15',
    question: "How is the source of Gatsby's wealth presented?",
    type: 'multiple-choice',
    options: [
      'He inherited it',
      'Bootlegging and organised crime, connected through Meyer Wolfshiem — the supposedly meritocratic dream is built on lawbreaking',
      'He earned it honestly',
      'It is never addressed',
    ],
    correctIndex: 1,
    explanation:
      "Gatsby's fortune comes from Prohibition bootlegging and shadowy dealings with gangster Meyer Wolfshiem (a fictionalised Arnold Rothstein). Fitzgerald uses this to expose the criminal underside of 1920s wealth.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'gg-16',
    question: "What is the effect of Nick's retrospective first-person narration?",
    type: 'multiple-choice',
    options: [
      'It is unreliable in an obvious way',
      'It creates a morally reflective, elegiac frame that lets Fitzgerald explore memory, judgement and disillusionment simultaneously',
      'It is omniscient',
      'It is purely objective',
    ],
    correctIndex: 1,
    explanation:
      'Nick narrates from somewhere in the Middle West after the events, giving the novel its characteristic mix of participation and judgement. His retrospective stance makes the whole story an act of remembered loss.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'gg-17',
    question:
      'How does the novel\'s final sentence ("So we beat on, boats against the current...") function?',
    type: 'multiple-choice',
    options: [
      'As a happy ending',
      "It universalises Gatsby's longing, turning individual tragedy into a meditation on human effort against time",
      'As a literal description of sailing',
      'As a joke',
    ],
    correctIndex: 1,
    explanation:
      "The closing line converts Gatsby's personal defeat into a universal image of striving against time, binding the American Dream to the impossibility of ever truly moving forward.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'gg-18',
    question: 'How does Fitzgerald use the Valley of Ashes?',
    type: 'multiple-choice',
    options: [
      'As comic relief',
      "As a grey industrial symbol of the poverty that underpins the wealth of East and West Egg, watched over by Eckleburg's eyes",
      "As Gatsby's home",
      'As the setting for the parties',
    ],
    correctIndex: 1,
    explanation:
      "The Valley of Ashes is the literal and symbolic waste that makes the wealth of Long Island possible, and the site of Myrtle's death. It exposes the human cost of the Jazz Age boom.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'gg-19',
    question: 'How does Fitzgerald treat the American Dream in the novel?',
    type: 'multiple-choice',
    options: [
      'He celebrates it',
      "He presents it as corrupted: Gatsby's rise is powered by crime, his love object is already taken, and the old rich reject him to the end",
      'He ignores it',
      'He says it is uniquely European',
    ],
    correctIndex: 1,
    explanation:
      'The novel dissects the American Dream at the height of its Jazz Age form and finds it hollow. Even Gatsby\'s "extraordinary gift for hope" cannot survive the carelessness of the class he tried to join.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'gg-20',
    question: "What is the significance of Fitzgerald's own biography for the novel?",
    type: 'multiple-choice',
    options: [
      'It is irrelevant',
      "His marriage to Zelda Sayre, a Southern debutante who initially rejected him as not rich enough, shapes Gatsby's pursuit of Daisy and the novel's outsider perspective on the rich",
      'He was actually wealthy old money',
      'He never married',
    ],
    correctIndex: 1,
    explanation:
      "Fitzgerald's own experience of being an outsider pursuing a wealthy woman informs Gatsby's story, and his ambivalent position — enchanted by the rich but clear-eyed about them — gives the novel its characteristic tone.",
    topic: 'Context',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'The American Dream',
    summary:
      'Fitzgerald dissects the Jazz Age form of the American Dream and finds it corrupted by money, crime and class.',
    keyPoints: [
      'Gatsby rises from poor North Dakota farm boy to Long Island millionaire',
      'His fortune is built on bootlegging and ties to Meyer Wolfshiem',
      'The old rich (Tom and Daisy) reject him to the end',
      'The green light symbolises the receding "orgastic future"',
      "The closing line binds Gatsby's longing to America itself",
    ],
  },
  {
    topic: 'Old Money vs New Money',
    summary: "The geography of East Egg and West Egg dramatises the novel's central class divide.",
    keyPoints: [
      'East Egg = old inherited money (Tom and Daisy)',
      'West Egg = new self-made money (Gatsby)',
      'No amount of wealth lets Gatsby cross the bay',
      "Tom exposes Gatsby's criminal origins at the Plaza",
      'The Buchanans "retreat back into their money" at the end',
    ],
  },
  {
    topic: 'Love and Idealisation',
    summary:
      'Gatsby loves an idea of Daisy he has cultivated for five years, and the real woman cannot match the fantasy.',
    keyPoints: [
      'The reunion scene: Gatsby throws shirts onto the bed',
      '"Her voice is full of money" — love and wealth are inseparable',
      'Daisy cannot say she never loved Tom',
      "Gatsby takes the blame for Myrtle's death",
      'His dream "must have seemed so close he could hardly fail to grasp it"',
    ],
  },
  {
    topic: 'The Past and Longing',
    summary: "The novel's great subject is the impossibility of recovering time.",
    keyPoints: [
      '"Can\'t repeat the past? Why of course you can!"',
      'Gatsby has organised his life around a 1917 affair',
      'The green light is always just across the water',
      'Nick narrates retrospectively from the Midwest',
      'Final line: "borne back ceaselessly into the past"',
    ],
  },
  {
    topic: 'Illusion vs Reality and Symbols',
    summary: 'Fitzgerald uses recurring symbols to expose the gap between appearance and truth.',
    keyPoints: [
      'The green light — unreachable hope',
      'The eyes of Doctor T. J. Eckleburg — absent moral witness',
      'The Valley of Ashes — industrial poverty behind the glamour',
      "Gatsby's invented name, accent and Oxford story",
      'Nick\'s dual position "within and without"',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Fitzgerald present the American Dream in The Great Gatsby?',
  'How does Fitzgerald use the figure of Jay Gatsby to explore self-invention and illusion?',
  'How does Fitzgerald present the relationship between love and wealth in the novel?',
  'How does Fitzgerald use setting (East Egg, West Egg, the Valley of Ashes) to explore class?',
  'How does Fitzgerald present the impossibility of repeating the past?',
]

export default async function TheGreatGatsbyPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }
  const userBoardLabel = board ? (getBoardConfig(board)?.shortName ?? 'AQA') : 'AQA'

  return (
    <>
      <CourseJsonLd
        name="The Great Gatsby — Complete A-Level Study Guide"
        description="In-depth study guide for The Great Gatsby covering plot, characters, themes, key quotations, historical context and exam essay plans for A-Level English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'The Great Gatsby',
            url: 'https://theenglishhub.app/revision/texts/the-great-gatsby',
          },
        ]}
      />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>
          AI-assisted draft under expert review. Cross-check with your teacher&rsquo;s notes.
        </span>
      </div>
      <TextStudyHub
        textName="The Great Gatsby"
        textType="novel"
        examBoard={userBoardLabel}
        basePath="/revision/texts/the-great-gatsby"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/the-great-gatsby/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'acts',
            href: '/revision/texts/the-great-gatsby/chapters',
            icon: 'acts' as const,
            title: 'Chapter-by-Chapter Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/the-great-gatsby/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/the-great-gatsby/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/the-great-gatsby/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/the-great-gatsby/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/the-great-gatsby/essay-plans',
            icon: 'essays' as const,
            title: 'Essay Plans',
            description: 'A-Level essay plans',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Fitzgerald present the American Dream in The Great Gatsby?',
          'How does Fitzgerald use the figure of Jay Gatsby to explore self-invention and illusion?',
          'How does Fitzgerald present the relationship between love and wealth in the novel?',
          'How does Fitzgerald use setting to explore class in The Great Gatsby?',
          'How does Fitzgerald present the impossibility of repeating the past?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="The Great Gatsby"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
    </>
  )
}
