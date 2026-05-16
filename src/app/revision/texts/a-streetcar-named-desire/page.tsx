// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'A Streetcar Named Desire — Study Guide | The English Hub',
    description:
      'In-depth study guide for A Streetcar Named Desire by Tennessee Williams: plot, characters, themes, context and key quotations.',
  },
  title: 'A Streetcar Named Desire — Study Guide',
  description:
    'In-depth study guide for A Streetcar Named Desire by Tennessee Williams: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/a-streetcar-named-desire',
  },
}

const data: TextGuideData = {
  title: 'A Streetcar Named Desire',
  author: 'Tennessee Williams',
  year: '1947',
  category: 'Play',
  badge: 'AQA A-Level / Edexcel A-Level',
  intro:
    'Tennessee Williams\u2019s post-war American tragedy charts the collision between the fading gentility of the Old South and the raw, industrial modernity of working-class New Orleans. Blanche DuBois, a faded Southern belle haunted by loss and desire, arrives at the cramped French Quarter apartment of her sister Stella and her brutal brother-in-law Stanley Kowalski. What begins as an awkward family visit curdles into a contest of realities: Blanche\u2019s world of illusion, magic and paper lanterns against Stanley\u2019s unsparing demand for truth. Across eleven scenes, Williams stages the slow public dismantling of a woman who cannot survive the world she finds herself in. A breakthrough of American poetic realism, immortalised by Elia Kazan\u2019s 1947 Broadway production and Marlon Brando\u2019s Stanley, the play endures as a study of desire, cruelty, sexuality and the tragic cost of pretending.',
  quickInfo: {
    genre: 'Southern gothic / domestic tragedy',
    setting: 'Elysian Fields, New Orleans, post-WWII (late 1940s)',
    length: '11 scenes (no acts)',
    published: 'December 1947 premiere; published 1947',
  },
  plotSummary: [
    'Blanche DuBois arrives in the shabby French Quarter of New Orleans on the streetcar Desire, transferring to one named Cemeteries before reaching her sister Stella\u2019s cramped two-room apartment at Elysian Fields. From the first moment, Blanche is out of place: delicately dressed in white, carrying the manners and vocabulary of a Mississippi plantation into a noisy immigrant neighbourhood of poker nights and blues music. When Stella\u2019s husband Stanley Kowalski returns, Blanche is immediately unsettled by his physical, unpolished presence. She confesses that Belle Reve, the DuBois family estate, has been lost to the \u201cepic fornications\u201d of their ancestors. Stanley, suspicious that Blanche has swindled Stella out of her share, paws through her trunk of papers and costume jewellery, setting up the central conflict between his demand for hard evidence and her insistence on illusion.',
    'The tensions inside the apartment escalate over the early scenes. Stanley, drunk after his poker night, hits the pregnant Stella; she flees upstairs to the Hubbels\u2019, and Stanley\u2019s anguished cries of \u201cStella! Stella!\u201d bring her back down into his arms. Blanche is horrified that her sister would return to such a man, but Stella speaks of the \u201ccoloured lights\u201d of their sexual life together. Blanche, meanwhile, begins a tentative romance with Stanley\u2019s poker friend Harold \u201cMitch\u201d Mitchell, a sensitive, mother-dominated bachelor who seems to offer her a last chance of safety. To him she reveals the trauma at the centre of her life: her young husband, Allan Grey, whom she once discovered with an older male lover and whose death by suicide she caused when she told him on the dance floor, \u201cYou disgust me.\u201d The Varsouviana polka that was playing in that moment returns in her mind whenever her past closes in.',
    'Stanley, digging into Blanche\u2019s history, uncovers the truth she has tried to bury: after Allan\u2019s death she drifted through a series of sexual encounters in the Flamingo Hotel in Laurel, and was finally dismissed from her teaching post for an involvement with a seventeen-year-old student. He reports what he has learned to Mitch and, as a gift for her birthday, gives Blanche a one-way bus ticket back to Laurel. Mitch, wounded and humiliated, arrives later to confront her and, stripping the paper lantern from the naked bulb, forces her into the light she has spent the play avoiding. He will no longer marry her because, as he tells her, she is \u201cnot clean enough\u201d to bring home to his mother. Stella, meanwhile, is taken to the hospital to give birth. Left alone with Blanche in Scene 10, a drunk and triumphant Stanley closes in on her as she dresses in a rhinestone tiara. With the line \u201cWe\u2019ve had this date with each other from the beginning,\u201d he rapes her.',
    'In Scene 11, weeks later, Stella has returned home with her new baby. Stanley and his friends play another poker game in the kitchen while Blanche, bathing and dressing in the next room, prepares for what she believes is a journey with a wealthy admirer, Shep Huntleigh. The reality is that Stella, unable to live with Blanche\u2019s accusation against Stanley and unwilling to lose her marriage, has arranged for her sister to be committed to a state asylum. A doctor and matron arrive; Blanche first recoils, then, offered gentleness by the doctor, accepts his arm with the line \u201cWhoever you are \u2014 I have always depended on the kindness of strangers.\u201d Stella weeps on the steps as her sister is led away. Stanley comforts her, and the poker game resumes. Williams leaves the audience with a closing image of cruelty and survival, domesticity rebuilt over a wound that will not be spoken of.',
  ],
  characters: [
    {
      name: 'Blanche DuBois',
      role: 'Stella\u2019s older sister; a former English teacher from Laurel, Mississippi',
      body: 'Blanche is a faded Southern belle in her thirties who arrives at Elysian Fields already broken by grief, loss and exposure. Williams presents her as a figure of paradox: refined and coarse, self-deluding and searingly honest, a seducer and a victim. Behind her white dresses, pearls and little songs lies the suicide of her young husband Allan Grey, the slow loss of Belle Reve, the deaths she nursed there, and her sexual drift through Laurel. Her insistence on magic rather than realism is both her defining moral stance and the fragile veneer that Stanley systematically destroys.',
    },
    {
      name: 'Stella Kowalski',
      role: 'Blanche\u2019s younger sister; Stanley\u2019s pregnant wife',
      body: 'Stella left the plantation world of Belle Reve for a new life in working-class New Orleans, and has bound herself to Stanley through physical passion and domestic loyalty. Pregnant throughout the play and giving birth in the penultimate scene, she is caught between sisterly duty and marital survival. Williams uses her to stage the central moral compromise of the play: to believe Blanche\u2019s account of the rape would make her marriage impossible, and so she chooses not to believe.',
    },
    {
      name: 'Stanley Kowalski',
      role: 'Stella\u2019s husband; a Polish-American factory worker and war veteran',
      body: 'Stanley is the embodiment of the new post-war America: masculine, immigrant, working-class, contemptuous of old social hierarchies and fiercely territorial. Williams writes him as physically magnetic and dangerous in equal measure, with an animalistic vocabulary of drinking, poker, bowling and sex. His demand for the \u201cstraight dope\u201d about Belle Reve, his willingness to strike Stella, and the rape in Scene 10 expose how thinly civility covers violence in the play\u2019s world.',
    },
    {
      name: 'Harold \u201cMitch\u201d Mitchell',
      role: 'Stanley\u2019s poker friend; a bachelor living with his dying mother',
      body: 'Mitch is gentler, clumsier and lonelier than the other men around Stanley\u2019s table, and for a time he seems to Blanche a genuine route out of her crisis. Williams gives their courtship a tender, halting rhythm, culminating in the cigarette-case inscription scene. When Stanley tells him about Blanche\u2019s past, Mitch\u2019s bruised pride turns into the humiliation of Scene 9, in which he rips the paper lantern off the bulb and judges her. He is a decent man who cannot see past the sexual double standard of his world.',
    },
    {
      name: 'Eunice Hubbel',
      role: 'Stella\u2019s upstairs neighbour and landlady',
      body: 'Eunice lives in the flat above the Kowalskis with her husband Steve, and offers Stella a model of how to survive a marriage that combines fights, infidelity and reconciliation. She pronounces the play\u2019s quiet moral compromise in Scene 11: \u201cDon\u2019t ever believe it. Life has got to go on. No matter what happens, you\u2019ve got to keep on going.\u201d Williams uses her to show how the working-class community of Elysian Fields absorbs and normalises the violence within its walls.',
    },
    {
      name: 'Steve Hubbel',
      role: 'Eunice\u2019s husband; one of Stanley\u2019s poker circle',
      body: 'Steve is part of the boisterous male chorus around Stanley, joining the poker nights, the drinking and the fights. His own marriage to Eunice, loud and openly combustible, mirrors the Kowalskis\u2019 and sets Stanley\u2019s behaviour within a wider culture of masculine volatility. Williams keeps him as a background figure, but his presence establishes Stanley\u2019s world as communal rather than exceptional.',
    },
    {
      name: 'The Doctor and Matron',
      role: 'Asylum staff who arrive in the final scene (symbolic figures)',
      body: 'The unnamed Doctor and Matron arrive in Scene 11 to take Blanche to the state institution. Williams writes them first as distorted, nightmarish figures \u2014 the Matron\u2019s voice echoing in Blanche\u2019s head \u201clike a bell\u201d \u2014 and then, in the Doctor\u2019s final gentleness, as unexpectedly human. They function as symbolic agents of a psychiatric system that formally ends Blanche\u2019s story, and their arrival carries the autobiographical weight of Williams\u2019s own sister Rose, who was lobotomised in 1943.',
    },
  ],
  themes: [
    {
      title: 'Desire and destruction',
      body: 'The streetcar named Desire that carries Blanche into the play is also the force that has already destroyed her life: desire for Allan Grey, the anonymous desires of the Flamingo Hotel, the pupil at Laurel, and finally Stanley\u2019s desire in Scene 10. Williams links sexual longing to violence and death throughout \u2014 Desire transfers to Cemeteries \u2014 and presents it as both a life-giving \u201ccoloured light\u201d between Stella and Stanley and a destructive current that carries Blanche to the asylum. The play refuses a simple moral verdict on desire; instead it shows how a society that denies and punishes desire makes it lethal.',
    },
    {
      title: 'Reality vs illusion (the paper lantern)',
      body: 'Blanche\u2019s central act in the play is to cover the naked bulb of Stella\u2019s apartment with a Chinese paper lantern, so that she does not have to be seen clearly. Her famous declaration, \u201cI don\u2019t want realism. I want magic!\u201d, sets her against Stanley\u2019s demand for documents, dates and facts. Williams makes the play\u2019s turning points into literal acts of illumination: Mitch tearing the lantern off the bulb in Scene 9, the searching glare of the streetlamp, the final harsh electric light. The paper lantern becomes an image for every fragile lie that allows survival, and for the cruelty of stripping it away.',
    },
    {
      title: 'Fading Southern aristocracy vs industrial modernity',
      body: 'Blanche comes from the world of Belle Reve, a Mississippi plantation whose name means \u201cbeautiful dream\u201d and which has been lost through the \u201cepic fornications\u201d and slow decay of the DuBois line. Stanley is a Polish-American factory worker, a child of the urban, immigrant, industrial America that has displaced the Old South. Williams sets the two orders against each other with careful economic precision \u2014 the Napoleonic Code, the unpaid mortgages, the scent of cheap perfume \u2014 and stages the defeat of one by the other. Blanche\u2019s snobbery (\u201cape-like,\u201d \u201cPolack\u201d) and Stanley\u2019s class resentment are two sides of the same historical shift.',
    },
    {
      title: 'Gender and power',
      body: 'The play takes place in a world in which women\u2019s survival depends on men. Stella needs Stanley\u2019s wages and body; Blanche needs Mitch, or Shep Huntleigh, or any man who will take her in. Williams exposes the violence of this economy: Stanley\u2019s slap, his casual ownership of the apartment (\u201cevery man is a king\u201d), the sexual double standard that destroys Blanche once her history is told. The rape in Scene 10 is the play\u2019s most direct statement of male power, but it is prepared by every earlier moment in which men decide the women\u2019s fates around the poker table.',
    },
    {
      title: 'Madness and institutionalisation',
      body: 'Blanche\u2019s breakdown is not a sudden collapse but a long disintegration audible throughout the play in the Varsouviana polka that replays in her mind, the bells she hears, the hallucinated voices in Scene 10. Williams presents \u201cmadness\u201d as the cumulative effect of grief, sexual trauma, poverty and disbelief, and the asylum as a social mechanism for disposing of inconvenient women. The figure of the Matron, the strange gentleness of the Doctor, and the family\u2019s quiet complicity draw on Williams\u2019s own horror at his sister Rose\u2019s lobotomy in 1943 and remain some of the play\u2019s most uncomfortable scenes.',
    },
    {
      title: 'Violence and gentility',
      body: 'Williams repeatedly places acts of violence inside rituals of politeness. Stanley throws the radio out of the window in the middle of a poker night; Blanche is raped in an apartment hung with her own paper lantern; the final scene is a committal in the middle of another poker game. The play insists that the forms of civility \u2014 the birthday cake, the magnolia-scented manners, the southern courtesies \u2014 do not prevent brutality but often mask it. When Blanche tells Stella that \u201cdeliberate cruelty is not forgivable,\u201d she names a moral standard that the Kowalskis\u2019 world cannot meet.',
    },
  ],
  historicalContext: [
    'Williams wrote A Streetcar Named Desire in the immediate aftermath of the Second World War, and the play is steeped in the uneasy mood of late-1940s America. Stanley is a returning veteran; the cramped, hot Elysian Fields apartment reflects the post-war housing crisis in American cities; the long Depression had broken many of the old rural economies, including those of the Mississippi Delta plantations that the DuBois family represents. Blanche\u2019s arrival from Laurel to New Orleans dramatises a historical migration from an impoverished agrarian South to a rapidly industrialising urban America that no longer has room for her.',
    'New Orleans itself is central to the play\u2019s texture. The French Quarter was a working-class, ethnically mixed neighbourhood in which Polish, Italian and African-American residents lived alongside one another; the \u201cblue piano\u201d and \u201cblues music\u201d that Williams specifies in his stage directions place the action inside a living Black and Creole musical culture. Stanley\u2019s Polish heritage \u2014 and Blanche\u2019s slurs against it (\u201cPolack,\u201d \u201cape-like\u201d) \u2014 reflect the complicated status of Eastern European immigrant communities in mid-century America, neither fully accepted nor excluded. The streetcar line called Desire really did run through the Quarter until 1948, the year after the play\u2019s premiere, before being replaced by a bus.',
    'The play is also unmistakably autobiographical. Williams\u2019s older sister Rose suffered a severe mental breakdown in her twenties and was subjected to a prefrontal lobotomy in 1943, a decision her family consented to; Williams carried the guilt of that event for the rest of his life. Blanche\u2019s institutionalisation in Scene 11, and the symbolic figures of the Doctor and Matron, draw directly on this history. Williams himself was a gay man writing in a period of intense censorship, and the figure of Allan Grey \u2014 the young husband whose homosexuality Blanche discovers and whose death she precipitates \u2014 had to be encoded rather than stated. The Broadway production could not name his sexuality directly; later film and revival productions gradually made it explicit.',
    'Elia Kazan\u2019s original Broadway production opened in December 1947 and ran for two years, making stars of Marlon Brando (Stanley), Jessica Tandy (Blanche), Kim Hunter (Stella) and Karl Malden (Mitch). Kazan\u2019s direction, influenced by the Actors Studio and the \u201cMethod,\u201d gave the play its charged, psychologically realistic performance style and established a new model for American theatre. Brando\u2019s torn-T-shirt Stanley became an iconic image of post-war masculinity, and the 1951 film version, also directed by Kazan, carried the play to a global audience despite heavy censorship under the Hollywood Production Code, which demanded cuts to references to homosexuality and to Stanley\u2019s punishment for the rape.',
  ],
  quotations: [
    {
      quote:
        '"They told me to take a streetcar named Desire, and transfer to one called Cemeteries, and ride six blocks and get off at \u2014 Elysian Fields!"',
      who: 'Blanche \u2014 Scene 1',
      analysis:
        'Blanche\u2019s arrival line makes her journey a symbolic one: from Desire, via Cemeteries, to the afterlife of Elysian Fields. Williams loads the whole trajectory of the play \u2014 desire leading to death leading to institutional exile \u2014 into a single set of street names.',
    },
    {
      quote: '"I have always depended on the kindness of strangers."',
      who: 'Blanche \u2014 Scene 11 (closing)',
      analysis:
        'Blanche\u2019s final line is spoken as she takes the Doctor\u2019s arm. It summarises her lifelong dependence on men\u2019s pity or desire, and its acceptance of the stranger who is about to institutionalise her carries a terrible, dignified irony.',
    },
    {
      quote: '"Whoever you are \u2014 I have always depended on the kindness of strangers."',
      who: 'Blanche \u2014 Scene 11 (full line)',
      analysis:
        'Williams prefaces the famous closing phrase with \u201cWhoever you are,\u201d deepening its pathos: Blanche no longer distinguishes between doctors, lovers or captors, and her courtesy survives even as her identity dissolves.',
    },
    {
      quote: '"Stella! Stella!"',
      who: 'Stanley \u2014 Scene 3',
      analysis:
        'Stanley\u2019s anguished cry from the foot of the outside staircase, after he has struck the pregnant Stella, is one of the play\u2019s defining images. The moment fuses violence and dependence, and Stella\u2019s return into his arms states the terms of the marriage that Blanche cannot accept.',
    },
    {
      quote:
        '"Deliberate cruelty is not forgivable. It is the one unforgivable thing in my opinion and it is the one thing of which I have never, never been guilty."',
      who: 'Blanche \u2014 Scene 11',
      analysis:
        'Blanche\u2019s moral statement \u2014 delivered to Mitch \u2014 sets out the single standard against which Stanley\u2019s behaviour is judged. The play tests whether the working-class, post-war world it depicts can meet any such ethical benchmark.',
    },
    {
      quote: '"We\u2019ve had this date with each other from the beginning."',
      who: 'Stanley \u2014 Scene 10',
      analysis:
        'Stanley\u2019s line just before the rape frames the act as fated and mutual rather than criminal. Williams places this self-serving narrative in the mouth of the perpetrator, so that the audience hears the lie as it is being told.',
    },
    {
      quote: '"I don\u2019t want realism. I want magic!"',
      who: 'Blanche \u2014 Scene 9',
      analysis:
        'Blanche\u2019s cry to Mitch as he strips the paper lantern from the lightbulb is the clearest statement of her defining principle. The play invites the audience to measure the cost of \u201cmagic\u201d against the cruelty of Stanley\u2019s \u201crealism.\u201d',
    },
    {
      quote: '"A woman\u2019s charm is fifty per cent illusion."',
      who: 'Blanche \u2014 Scene 2',
      analysis:
        'Blanche\u2019s aphorism to Stanley about her wardrobe doubles as an account of how she survives: by constructing herself. Williams lets the line sit beside Stanley\u2019s demand for documents, dramatising two opposed theories of truth.',
    },
    {
      quote: '"The Kowalskis and the DuBois have different notions."',
      who: 'Stella \u2014 Scene 4',
      analysis:
        'Stella\u2019s understatement to Blanche names the class and cultural gulf that drives the play. Williams gives her the language of diplomatic compromise \u2014 the register of a woman who has chosen Stanley\u2019s world and will not be argued out of it.',
    },
    {
      quote:
        '"There are thousands of papers, stretching back over hundreds of years, affecting Belle Reve as, piece by piece, our improvident grandfathers and father and uncles and brothers exchanged the land for their epic fornications."',
      who: 'Blanche \u2014 Scene 2',
      analysis:
        'Blanche\u2019s account of the loss of Belle Reve is both an indictment of the DuBois men and an economic explanation of her ruin. The rhetorical grandeur (\u201cepic fornications\u201d) is itself a kind of illusion, turning decline into mythology.',
    },
    {
      quote:
        '"He acts like an animal, has an animal\u2019s habits! Eats like one, moves like one, talks like one! \u2026 Thousands and thousands of years have passed him right by, and there he is \u2014 Stanley Kowalski."',
      who: 'Blanche \u2014 Scene 4',
      analysis:
        'Blanche\u2019s attack on Stanley, overheard by him, fuses class snobbery with a Darwinian vocabulary. Williams lets Stanley listen from the doorway, so that the audience watches the precise moment her destruction begins.',
    },
    {
      quote:
        '"I pulled you down off them columns and how you loved it, having them coloured lights going!"',
      who: 'Stanley \u2014 Scene 8',
      analysis:
        'Stanley\u2019s account of his sexual life with Stella \u2014 the \u201ccoloured lights\u201d \u2014 offers a rival theory of desire to Blanche\u2019s paper-lantern version. Williams makes the body\u2019s pleasure a political force capable of pulling a woman down from the plantation.',
    },
    {
      quote: '"You are not clean enough to bring in the house with my mother."',
      who: 'Mitch \u2014 Scene 9',
      analysis:
        'Mitch\u2019s rejection of Blanche restates the sexual double standard of his world. Williams places his judgement inside the discourse of respectability \u2014 \u201cclean,\u201d \u201cmother\u201d \u2014 so that conventional morality becomes part of the machinery that destroys her.',
    },
    {
      quote: '"You\u2019re not clean enough \u2014 I don\u2019t want to marry you any more."',
      who: 'Mitch \u2014 Scene 9',
      analysis:
        'The blunt restatement of the rejection strips away any residual tenderness in their courtship. Mitch\u2019s withdrawal leaves Blanche in the apartment alone with Stanley\u2019s imminent return and is a structural hinge into the rape.',
    },
    {
      quote: '"Every man is a king! And I am the king around here, so don\u2019t you forget it!"',
      who: 'Stanley \u2014 Scene 8',
      analysis:
        'Stanley\u2019s boast, shouted after he has thrown the plates, collapses democratic vocabulary into domestic tyranny. Williams uses the line to show how post-war American ideology of the self-made man can become a licence for male rule.',
    },
    {
      quote: '"I\u2019ve got to keep hold of myself!"',
      who: 'Blanche \u2014 Scene 1',
      analysis:
        'One of Blanche\u2019s earliest and most repeated self-instructions. The line, delivered to an empty apartment, establishes from the start that the play will be the story of someone trying, and failing, to hold a self together.',
    },
    {
      quote:
        '"What you are talking about is brutal desire \u2014 just \u2014 Desire! \u2014 the name of that rattle-trap street-car that bangs through the Quarter, up one old narrow street and down another."',
      who: 'Blanche \u2014 Scene 4',
      analysis:
        'Blanche\u2019s attempt to dismiss Stella\u2019s sexual bond as \u201cbrutal desire\u201d turns the streetcar into a symbol of rattling, indiscriminate sexual energy. Williams lets the geography of New Orleans and the geography of the body become the same map.',
    },
    {
      quote:
        '"It\u2019s only a paper moon, sailing over a cardboard sea \u2014 but it wouldn\u2019t be make-believe if you believed in me!"',
      who: 'Blanche \u2014 Scene 7 (singing in the bath)',
      analysis:
        'Blanche sings the Harold Arlen song from the bath as Stanley, in the next room, reveals her history to Stella. Williams sets her fragile fiction of belief against Stanley\u2019s hard narrative, so that the two scenes interrupt and indict each other.',
    },
    {
      quote:
        '"Don\u2019t ever believe it. Life has got to go on. No matter what happens, you\u2019ve got to keep on going."',
      who: 'Eunice \u2014 Scene 11',
      analysis:
        'Eunice\u2019s advice to Stella, as Blanche is being led out, names the moral compromise of the play. Williams gives it to a minor character, as if to show that it belongs to the community rather than to any one person.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'sc-1',
    question: "Which streetcar does Blanche take to reach Stella's apartment?",
    type: 'multiple-choice',
    options: [
      'A streetcar named Elysian Fields',
      'A streetcar named Desire, transferring to Cemeteries',
      'A streetcar named Laurel',
      'A streetcar named New Orleans',
    ],
    correctIndex: 1,
    explanation:
      'Blanche travels on the streetcar Desire, transferring to one called Cemeteries, before arriving at Elysian Fields. Williams makes the journey itself a symbol: Desire leads through Cemeteries to the "afterlife" of Elysian Fields.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sc-2',
    question: 'Where is the play set?',
    type: 'multiple-choice',
    options: [
      'Laurel, Mississippi',
      'Belle Reve plantation',
      'The French Quarter of New Orleans',
      'New York City',
    ],
    correctIndex: 2,
    explanation:
      'The play is set at Elysian Fields in the French Quarter of New Orleans in the late 1940s. The neighbourhood is working-class, ethnically mixed, and saturated with blues and "blue piano" music.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sc-3',
    question: 'How many scenes does A Streetcar Named Desire have?',
    type: 'multiple-choice',
    options: ['Three acts', 'Five acts', 'Eleven scenes (no acts)', 'Seven scenes'],
    correctIndex: 2,
    explanation:
      'The play is structured in eleven scenes, not acts. This unusual choice gives the tragedy a cinematic, continuous feel rather than the traditional five-act shape of classical drama.',
    topic: "Writer's Methods",
    difficulty: 'foundation',
  },
  {
    id: 'sc-4',
    question: 'What is the name of the lost DuBois family plantation?',
    type: 'multiple-choice',
    options: ['Laurel', 'Belle Reve', 'Elysian Fields', 'Magnolia'],
    correctIndex: 1,
    explanation:
      'Belle Reve means "beautiful dream" in French. Its loss to the "epic fornications" of the DuBois men is both economic and symbolic, marking the decline of the Old South that Blanche represents.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sc-5',
    question: 'Who is Allan Grey?',
    type: 'multiple-choice',
    options: [
      "Blanche's father",
      "Mitch's brother",
      "Blanche's young husband, who shot himself after she confronted him about his male lover",
      "Stella's first boyfriend",
    ],
    correctIndex: 2,
    explanation:
      'Allan Grey was Blanche\'s young husband. She discovered him with an older male lover and, on the dance floor later that night, told him "You disgust me." He then shot himself \u2014 a trauma that haunts her throughout the play, signalled by the Varsouviana polka.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'sc-6',
    question: 'Who says "Stella! Stella!" in Scene 3?',
    type: 'multiple-choice',
    options: ['Blanche', 'Mitch', 'Stanley', 'Steve'],
    correctIndex: 2,
    explanation:
      'Stanley cries "Stella! Stella!" from the foot of the outdoor staircase after striking her during the poker night. She returns into his arms, defining the violent, physically bound marriage that Blanche cannot accept.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sc-7',
    question: "What does Blanche hang over the naked lightbulb in Stella's apartment?",
    type: 'multiple-choice',
    options: ['A lace shawl', 'A Chinese paper lantern', 'A silk scarf', 'A curtain'],
    correctIndex: 1,
    explanation:
      "Blanche covers the naked lightbulb with a Chinese paper lantern so she does not have to be seen clearly. Mitch tearing it off in Scene 9 is the play's defining image of forced illumination.",
    topic: "Writer's Methods",
    difficulty: 'foundation',
  },
  {
    id: 'sc-8',
    question: 'In which scene is Blanche raped by Stanley?',
    type: 'multiple-choice',
    options: ['Scene 7', 'Scene 8', 'Scene 10', 'Scene 11'],
    correctIndex: 2,
    explanation:
      'Stanley rapes Blanche in Scene 10, while Stella is in hospital giving birth. His line "We\'ve had this date with each other from the beginning" frames the act as inevitable from the perpetrator\'s point of view.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sc-9',
    question: "What famously haunts Blanche's mind whenever her past closes in?",
    type: 'multiple-choice',
    options: ['A church bell', 'The Varsouviana polka', 'A jazz trumpet', 'A nursery rhyme'],
    correctIndex: 1,
    explanation:
      'The Varsouviana polka is the tune that was playing when Allan Grey shot himself. Williams uses it as a non-naturalistic sound cue, audible to Blanche and the audience but not to the other characters, to stage her psychological disintegration.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'sc-10',
    question: 'What does Blanche mean by "I don\'t want realism. I want magic!"?',
    type: 'multiple-choice',
    options: [
      'She enjoys stage tricks',
      'She prefers comforting illusion to harsh truth, and treats deception as a moral choice',
      'She wants Mitch to perform for her',
      'She is rejecting modern theatre',
    ],
    correctIndex: 1,
    explanation:
      'Blanche\'s declaration to Mitch in Scene 9 defends her whole way of surviving \u2014 the paper lantern, the soft voice, the invented admirers \u2014 as a necessary kindness rather than a lie. The play tests this claim against Stanley\'s "realism."',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'sc-11',
    question: "What is Stanley's ethnic background, and why does Williams make this significant?",
    type: 'multiple-choice',
    options: [
      'English; it marks him as upper class',
      'Polish-American; it links him to immigrant, working-class, post-war America that has displaced the Old South',
      'French Creole; it ties him to New Orleans tradition',
      'Irish-American; it connects him to the labour movement',
    ],
    correctIndex: 1,
    explanation:
      'Stanley is of Polish descent. Blanche\'s slurs ("Polack," "ape-like") expose her snobbery and situate the conflict inside a historical shift in which immigrant, industrial America is replacing the plantation South.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'sc-12',
    question: 'How does Williams use the paper lantern as a symbol?',
    type: 'multiple-choice',
    options: [
      'It represents wealth',
      'It symbolises the fragile illusions that allow Blanche to survive, with Mitch tearing it off the bulb in Scene 9 marking her forced exposure',
      "It represents Stella's child",
      'It symbolises the feud between North and South',
    ],
    correctIndex: 1,
    explanation:
      "The Chinese paper lantern over the naked bulb is Blanche's chosen defence against being seen. When Mitch rips it off in Scene 9, the physical act dramatises the destruction of her illusion and prefigures Stanley's final exposure of her in Scene 10.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'sc-13',
    question: 'What does Stella choose at the end of the play, and why?',
    type: 'multiple-choice',
    options: [
      'She leaves Stanley and takes Blanche home',
      "She refuses to believe Blanche's account of the rape and stays with Stanley, allowing Blanche to be committed",
      'She confronts Stanley publicly and divorces him',
      'She moves back to Belle Reve with the baby',
    ],
    correctIndex: 1,
    explanation:
      'Stella makes the central moral compromise of the play: to believe Blanche would make her marriage impossible, so she chooses not to believe. Eunice pronounces this survival logic in Scene 11: "Life has got to go on."',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'sc-14',
    question: 'Why does Mitch reject Blanche in Scene 9?',
    type: 'multiple-choice',
    options: [
      'She refuses to marry him',
      'He has learned from Stanley about her sexual past and tells her she is "not clean enough" to bring home to his mother',
      'She tells him she is ill',
      'He meets another woman',
    ],
    correctIndex: 1,
    explanation:
      'Stanley has told Mitch about the Flamingo Hotel and the seventeen-year-old pupil. Mitch\'s rejection \u2014 "not clean enough" \u2014 enforces the sexual double standard of his world and leaves Blanche alone in the apartment just before Stanley\'s return.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'sc-15',
    question: 'What does Blanche mean by "Deliberate cruelty is not forgivable"?',
    type: 'multiple-choice',
    options: [
      'She forgives all forms of unkindness',
      "She sets out a single moral standard \u2014 that intentional cruelty is uniquely unforgivable \u2014 against which Stanley's behaviour is implicitly judged",
      'She is talking about animals',
      'She is threatening Mitch',
    ],
    correctIndex: 1,
    explanation:
      "Blanche's statement to Mitch names the ethical line the play is interested in. Williams measures the post-war, working-class world of Elysian Fields against this standard, and finds it wanting.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'sc-16',
    question: 'How is the figure of the Doctor in the final scene significant?',
    type: 'multiple-choice',
    options: [
      "He is an old friend of Blanche's",
      'He is the last "stranger" whose kindness she accepts, and symbolically enacts the institutional system that will dispose of her',
      "He is Stanley's brother",
      'He refuses to take Blanche away',
    ],
    correctIndex: 1,
    explanation:
      "The unnamed Doctor offers Blanche a gentle arm where the Matron offered force. His kindness lets her leave with dignity, but the play is clear that he represents a psychiatric system that now formally ends her story \u2014 a scene shadowed by Williams's own sister Rose's lobotomy in 1943.",
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'sc-17',
    question: "How does Williams's own biography shape the play?",
    type: 'multiple-choice',
    options: [
      "It doesn't",
      "His sister Rose was institutionalised and lobotomised in 1943, and as a gay man writing under censorship he could not directly name Allan Grey's homosexuality",
      'He grew up in New Orleans himself',
      'He had been a soldier like Stanley',
    ],
    correctIndex: 1,
    explanation:
      "Williams's sister Rose underwent a prefrontal lobotomy in 1943, a trauma that shadows Blanche's institutionalisation. As a gay writer in the censored American theatre of the 1940s, Williams could only imply Allan Grey's homosexuality, which is central to Blanche's backstory but never explicitly spoken.",
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'sc-18',
    question:
      "How does the play's 11-scene structure, rather than acts, affect its dramatic impact?",
    type: 'multiple-choice',
    options: [
      'It is purely traditional',
      'It creates a cinematic, continuous feel and allows a slow, inexorable disintegration rather than a classical rise and fall',
      'It confuses the audience',
      'It copies Shakespearean structure',
    ],
    correctIndex: 1,
    explanation:
      "Williams's choice of eleven scenes with no act breaks gives the play an unbroken, cumulative rhythm. Blanche's collapse is staged as a series of short, interlocking episodes \u2014 closer to film than to the conventional three- or five-act theatre of the period.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'sc-19',
    question: 'How does Williams use music in the play?',
    type: 'multiple-choice',
    options: [
      'Only as background',
      'The "blue piano" of the Quarter places the play in a living Black and Creole culture, while the Varsouviana polka functions as a non-naturalistic sound cue tied to Blanche\'s traumatic memory',
      'He avoids music entirely',
      'Only to mark scene changes',
    ],
    correctIndex: 1,
    explanation:
      'The "blue piano" and blues music in Williams\'s stage directions root the action in a specific ethnic and musical culture. The Varsouviana polka, by contrast, is heard only by Blanche and the audience, staging her inner world directly.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'sc-20',
    question:
      'What does the play suggest about the collision between the Old South and post-war industrial America?',
    type: 'multiple-choice',
    options: [
      'The Old South wins',
      'It is evenly matched',
      'The Old South, represented by Blanche and Belle Reve, is economically and culturally defeated by the immigrant, working-class America embodied in Stanley',
      'The conflict is resolved happily',
    ],
    correctIndex: 2,
    explanation:
      "Blanche's plantation world has already lost Belle Reve before the play begins; Stanley's demand for documents, his veteran's confidence and his physical ownership of the apartment stage the victory of a new order. Williams sets their class and cultural conflict at the centre of the tragedy.",
    topic: 'Context',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Desire and Destruction',
    summary:
      'Desire in the play is both life-giving and lethal; the streetcar Desire transfers to Cemeteries before reaching Elysian Fields.',
    keyPoints: [
      'The streetcar journey is a symbolic map of desire leading to death',
      "Allan Grey's suicide, the Flamingo Hotel and the pupil in Laurel all trace Blanche's destructive desire",
      'Stanley and Stella\'s "coloured lights" present desire as communal and binding',
      "The rape in Scene 10 is the play's most violent statement of desire as power",
      "Williams refuses to moralise: society's denial of desire is part of what makes it lethal",
    ],
  },
  {
    topic: 'Reality vs Illusion',
    summary:
      "Blanche's paper lantern over the naked bulb is the play's central image of protective illusion.",
    keyPoints: [
      '"I don\'t want realism. I want magic!" defines Blanche\'s stance',
      "Stanley's demand for documents and the Napoleonic Code represents the opposite pole",
      'Mitch tearing the lantern off the bulb in Scene 9 is the turning point',
      'Light \u2014 the streetlamp, the bare bulb \u2014 is repeatedly used as a weapon',
      'The play tests whether "magic" is survival or delusion',
    ],
  },
  {
    topic: 'Old South vs Industrial Modernity',
    summary:
      "Blanche's plantation world has already lost Belle Reve; Stanley's urban, immigrant America has replaced it.",
    keyPoints: [
      'Belle Reve ("beautiful dream") is lost to "epic fornications"',
      "Stanley's Polish heritage and factory job place him inside post-war industrial America",
      'Blanche\'s slurs ("Polack," "ape-like") expose her class snobbery',
      'The Napoleonic Code dramatises ownership inside the marriage',
      'The French Quarter, with its blues music and mixed community, embodies the new order',
    ],
  },
  {
    topic: 'Gender and Power',
    summary:
      'Women in the play survive through men; the play exposes the violence of that economy.',
    keyPoints: [
      "Stella needs Stanley's wages and body; Blanche needs Mitch or Shep Huntleigh",
      "Stanley's slap, the poker table and the Napoleonic Code enforce male ownership",
      'The sexual double standard destroys Blanche when her history is told',
      "The rape in Scene 10 is the play's most direct statement of male power",
      'Eunice\'s advice "life has got to go on" normalises the system',
    ],
  },
  {
    topic: 'Madness and Institutionalisation',
    summary:
      "Blanche's collapse is presented as the cumulative effect of grief, sexual trauma and disbelief, with the asylum as social disposal.",
    keyPoints: [
      'The Varsouviana polka and bells stage her inner world non-naturalistically',
      "Allan Grey's suicide, Belle Reve's deaths, and the rape are the layers of her trauma",
      'The Doctor and Matron are symbolic figures of psychiatric authority',
      "Stella's refusal to believe is the family's complicity in her committal",
      "Williams's sister Rose's 1943 lobotomy gives the scene autobiographical weight",
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Williams present the theme of desire in A Streetcar Named Desire?',
  'How does Williams use the character of Stanley Kowalski to explore class and masculinity?',
  'How does Williams present the conflict between reality and illusion in the play?',
  'How far can Blanche DuBois be considered a tragic heroine?',
  'How does Williams present the Old South and its decline in A Streetcar Named Desire?',
]

export default async function AStreetcarNamedDesirePage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="A Streetcar Named Desire — Complete A-Level Study Guide"
        description="In-depth study guide for A Streetcar Named Desire covering plot, characters, themes, key quotations, historical context and exam essay plans for A-Level English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'A Streetcar Named Desire',
            url: 'https://theenglishhub.app/revision/texts/a-streetcar-named-desire',
          },
        ]}
      />
      <TextStudyHub
        textName="A Streetcar Named Desire"
        textType="play"
        examBoard="AQA"
        basePath="/revision/texts/a-streetcar-named-desire"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/a-streetcar-named-desire/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'acts',
            href: '/revision/texts/a-streetcar-named-desire/acts',
            icon: 'acts' as const,
            title: 'Scene-by-Scene Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/a-streetcar-named-desire/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/a-streetcar-named-desire/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/a-streetcar-named-desire/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/a-streetcar-named-desire/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/a-streetcar-named-desire/essay-plans',
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
          'How does Williams present the theme of desire in A Streetcar Named Desire?',
          'How does Williams use the character of Stanley Kowalski to explore class and masculinity?',
          'How does Williams present the conflict between reality and illusion in the play?',
          'How far can Blanche DuBois be considered a tragic heroine?',
          'How does Williams present the Old South and its decline in A Streetcar Named Desire?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="A Streetcar Named Desire"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>
          AI-assisted draft under expert review. Cross-check with your teacher&rsquo;s notes.
        </span>
      </div>
      <TextGuide data={data} />
    </>
  )
}
