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
  chapter: string
  analysis: string
}

type CharacterData = {
  name: string
  role: string
  description: string
  arc: string[]
  keyQuotes: CharacterQuote[]
  themeLinks: string[]
  examTip: string
}

const characters: CharacterData[] = [
  {
    name: 'Okonkwo',
    role: 'Tragic hero; proud warrior whose fear of weakness destroys him',
    description:
      'Okonkwo is the emotional and thematic centre of the novel. A man of enormous physical strength and fierce ambition, he has risen from nothing to become one of the most respected men in Umuofia. Every choice he makes is governed by a single terror: the fear of resembling his father, Unoka. This fear drives him to equate manhood with violence and emotional suppression. Achebe constructs him as a tragic hero in the classical sense -- a great man brought down by a flaw he cannot see. His rigidity is not strength but brittleness: when the world changes, he shatters rather than bends. He embodies the cost of defining masculinity as dominance and the tragedy of a man who fights on two fronts -- against colonial invasion and against his own nature -- and loses on both.',
    arc: [
      'Part 1: Rises from poverty to become a titled elder with three wives and a large farm. Takes in Ikemefuna as a ward. His participation in Ikemefuna\'s killing -- against Obierika\'s advice -- marks the beginning of his decline and alienates Nwoye.',
      'Part 2: Accidentally kills a clansman\'s son and is exiled to Mbanta for seven years. In exile, he broods while missionaries arrive and his son converts to Christianity. He plans a triumphant return but the world he returns to has changed beyond recognition.',
      'Part 3: Returns to Umuofia to find colonial institutions entrenched. Kills a court messenger in a desperate act of resistance, realises the clan will not fight, and hangs himself -- a final act of defiance that is simultaneously an admission of defeat.',
    ],
    keyQuotes: [
      {
        text: '"He was afraid of being thought weak."',
        chapter: 'Chapter 2 -- Narrator',
        analysis:
          'Achebe identifies fear, not strength, as the engine of Okonkwo\'s character. His entire personality is overcompensation. This single sentence is the key to understanding everything he does -- from the beating of his wives to the killing of Ikemefuna.',
      },
      {
        text: '"When did you become a shivering old woman?"',
        chapter: 'Chapter 7 -- Okonkwo to himself',
        analysis:
          'After Ikemefuna\'s death, Okonkwo suppresses grief by gendering it as weakness. Achebe shows how toxic masculinity turns legitimate emotion into shame. The self-addressed question reveals an internal dialogue Okonkwo can never win.',
      },
      {
        text: '"He has put a knife on the things that held us together and we have fallen apart."',
        chapter: 'Chapter 20 -- Okonkwo',
        analysis:
          'Okonkwo names the cultural destruction, echoing the novel\'s title. The "knife" metaphor suggests deliberate cutting rather than accidental collapse. Achebe gives him the diagnosis but not the cure -- Okonkwo can see the problem but has no tools except violence.',
      },
      {
        text: '"Okonkwo was clearly cut out for great things."',
        chapter: 'Chapter 1 -- Narrator',
        analysis:
          'The early promise that the rest of the novel systematically dismantles. Achebe sets up the tragic trajectory from the first chapter: greatness followed by destruction.',
      },
    ],
    themeLinks: [
      'Masculinity & Fear -- Okonkwo IS the theme. His fear of weakness produces the very destruction he tries to prevent.',
      'Tradition vs Change -- He is the last defender of a world that cannot survive unchanged.',
      'Fate & Chi -- His personal god seems set against him: every act of strength produces a consequence he cannot control.',
      'Colonialism -- His suicide is the ultimate indictment of colonial power: a great man reduced to a paragraph in a commissioner\'s book.',
    ],
    examTip:
      'Avoid reducing Okonkwo to a simple victim of colonialism. Achebe makes clear that his rigidity is a flaw that predates the missionaries. Examiners reward candidates who discuss him as a man destroyed by two forces simultaneously: his own inflexibility and the colonial invasion.',
  },
  {
    name: 'Nwoye',
    role: 'Okonkwo\'s eldest son; rejects his father\'s values and converts to Christianity',
    description:
      'Nwoye is everything Okonkwo fears: sensitive, questioning and drawn to stories rather than wrestling. His gentleness reminds Okonkwo of Unoka, and the father\'s contempt pushes the son further from Igbo tradition. Achebe uses Nwoye to show that colonialism succeeds partly by offering refuge to those whom their own culture has failed. Nwoye is not weak -- he is a person whose strengths are not recognised by a culture that values only martial prowess. His conversion is simultaneously an act of liberation and an act of cultural loss.',
    arc: [
      'Part 1: A quiet, sensitive boy who thrives under Ikemefuna\'s companionship. The killing of Ikemefuna -- his closest friend, murdered with Okonkwo\'s participation -- breaks something fundamental in him.',
      'Part 2: When the missionaries arrive in Mbanta, their hymns speak to the part of Nwoye that Igbo culture could not accommodate. He converts, takes the Christian name Isaac, and is violently disowned by Okonkwo.',
      'Part 3: Attends the missionary school in Umuofia. His separation from his father is complete. Achebe presents this as both liberation and tragedy -- Nwoye is free but rootless.',
    ],
    keyQuotes: [
      {
        text: '"He felt a relief within as the hymn poured into his parched soul."',
        chapter: 'Chapter 16 -- Narrator',
        analysis:
          'Achebe uses the metaphor of thirst and relief to show that Nwoye\'s conversion is emotional, not intellectual. "Parched" implies long deprivation. Christianity fills a void that his father\'s world created.',
      },
      {
        text: '"Living fire begets cold, impotent ash."',
        chapter: 'Chapter 17 -- Narrator on Okonkwo\'s view of Nwoye',
        analysis:
          'Okonkwo\'s bitter judgement of his son. The irony is that Okonkwo\'s own "fire" -- his violence and contempt -- is what created the "ash." Achebe shows how a father\'s rigidity produces the very outcome he most fears.',
      },
      {
        text: '"He remembered this period very vaguely. There was a constant point of sorrow and bitterness in his heart."',
        chapter: 'Chapter 7 -- Narrator on Nwoye after Ikemefuna\'s death',
        analysis:
          'The vagueness suggests trauma too deep to process clearly. The "constant point" is a wound that never heals. Achebe links Ikemefuna\'s death directly to Nwoye\'s eventual rejection of his father and his culture.',
      },
    ],
    themeLinks: [
      'Tradition vs Change -- Nwoye represents the generation that colonialism claims, but his defection is also a judgement on the tradition that rejected him.',
      'Masculinity & Fear -- His conversion is a direct response to Okonkwo\'s toxic masculinity.',
      'Religion -- He moves from Igbo spirituality to Christianity not from conviction but from emotional need.',
    ],
    examTip:
      'Discuss Nwoye as Achebe\'s answer to the question of why colonialism succeeds. Examiners value candidates who show that his conversion is not simple weakness but a rational response to a father and a culture that rejected his nature.',
  },
  {
    name: 'Ikemefuna',
    role: 'Surrogate son; sacrificed to tradition',
    description:
      'Ikemefuna is given to Umuofia as reparation for a killing and lives with Okonkwo\'s family for three years. He becomes the son Okonkwo wishes Nwoye were: brave, cheerful and eager to learn. His presence improves Nwoye, who blossoms under his friendship. Achebe makes the reader love Ikemefuna specifically to make his death unbearable. He is a character whose purpose is structural: his killing is the moral hinge of the novel, the event that fractures Okonkwo\'s family and exposes the human cost of both tradition and toxic masculinity.',
    arc: [
      'Part 1: Arrives frightened and homesick. Gradually adapts, calls Okonkwo "father," and becomes inseparable from Nwoye. Led into the forest and killed on the Oracle\'s orders. Okonkwo delivers the final blow to avoid appearing weak.',
    ],
    keyQuotes: [
      {
        text: '"My father, they have killed me!"',
        chapter: 'Chapter 7 -- Ikemefuna',
        analysis:
          'Ikemefuna\'s last words concentrate the novel\'s moral horror in five words. He calls Okonkwo "father" as the blow falls. The child trusts the man who kills him. Achebe uses the simplicity to devastating effect.',
      },
      {
        text: '"He could hardly imagine that Okonkwo was not his real father."',
        chapter: 'Chapter 4 -- Narrator',
        analysis:
          'Achebe establishes the depth of the bond to make its destruction more devastating. The adoption is genuine on both sides, which transforms the killing from an act of obedience into an act of self-mutilation.',
      },
      {
        text: '"He was afraid of being thought weak."',
        chapter: 'Chapter 7 -- Narrator, explaining why Okonkwo kills Ikemefuna',
        analysis:
          'The same sentence that defines Okonkwo\'s character also explains the worst thing he does. Achebe creates a devastating structural echo: fear of weakness is both the engine of his rise and the cause of his moral collapse.',
      },
    ],
    themeLinks: [
      'Masculinity & Fear -- Okonkwo kills Ikemefuna specifically to avoid appearing weak. The cost of toxic masculinity is a child\'s life.',
      'Tradition vs Change -- The Oracle demands the killing; tradition requires it. Achebe forces the reader to confront the cruelty that tradition can demand.',
      'Justice & Power -- Ikemefuna has no agency. He is a pawn in a system of clan justice he does not understand.',
    ],
    examTip:
      'Ikemefuna is a minor character with major structural importance. Examiners reward candidates who discuss his death as the event that fractures Okonkwo\'s family -- it alienates Nwoye, haunts Okonkwo, and demonstrates that tradition can demand cruelty.',
  },
  {
    name: 'Obierika',
    role: 'Okonkwo\'s closest friend; voice of reason and internal critic',
    description:
      'Obierika is everything Okonkwo is not: reflective, gentle and willing to question tradition without rejecting it. He refuses to participate in Ikemefuna\'s killing not out of cowardice but out of moral conviction. Achebe uses him as the novel\'s internal critic, showing that Igbo culture contains its own dissenters and reformers. Obierika\'s existence disproves the colonial claim that the Igbo were incapable of self-examination. He is also Okonkwo\'s foil: where Okonkwo is rigid and violent, Obierika is thoughtful and flexible. He represents the path not taken -- the kind of leadership that might have guided Umuofia through change without destruction.',
    arc: [
      'Part 1: Questions the customs he finds unjust -- why must twins be abandoned? Why must a man be exiled for an accident? He refuses to participate in Ikemefuna\'s killing.',
      'Part 2: Visits Okonkwo in exile, sells his yams, and brings him news of the missionaries\' arrival and the destruction of Abame.',
      'Part 3: Witnesses Okonkwo\'s suicide and delivers the novel\'s moral verdict to the District Commissioner: "That man was one of the greatest men in Umuofia. You drove him to kill himself."',
    ],
    keyQuotes: [
      {
        text: '"That man was one of the greatest men in Umuofia. You drove him to kill himself."',
        chapter: 'Chapter 25 -- Obierika to the District Commissioner',
        analysis:
          'Obierika delivers the novel\'s final moral judgement. He reclaims Okonkwo\'s death from the colonial record and places blame where it belongs. Achebe uses him to insist that Okonkwo\'s life matters on its own terms.',
      },
      {
        text: '"The white man is very clever... Now he has won our brothers, and our clan can no longer act like one."',
        chapter: 'Chapter 20 -- Obierika',
        analysis:
          'Obierika analyses the colonial strategy with surgical precision: divide, convert, rule. Achebe shows that understanding the threat is not the same as being able to stop it.',
      },
      {
        text: '"If the Oracle said that my son should be killed, I would neither dispute it nor be the one to do it."',
        chapter: 'Chapter 8 -- Obierika',
        analysis:
          'Obierika finds a moral middle ground that Okonkwo cannot imagine. He respects tradition without abandoning his conscience. This is Achebe\'s subtle argument that Igbo culture had space for ethical nuance.',
      },
    ],
    themeLinks: [
      'Tradition vs Change -- Obierika represents the possibility of internal reform that colonialism forecloses.',
      'Justice & Power -- He questions clan customs without rejecting the system as a whole.',
      'Colonialism -- His final speech is the novel\'s most direct accusation against the colonial project.',
    ],
    examTip:
      'Use Obierika to counter the argument that Igbo culture was monolithic or unquestioning. Examiners reward candidates who show that Achebe includes internal critics to demonstrate that the culture was capable of change from within -- change that colonialism foreclosed.',
  },
  {
    name: 'Ezinma',
    role: 'Okonkwo\'s favourite daughter; bold, intelligent, constrained by gender',
    description:
      'Ezinma is the only surviving child of Okonkwo\'s second wife Ekwefi, the sole survivor of ten pregnancies. She is bold, perceptive and the only person who can challenge Okonkwo without being crushed. As a suspected ogbanje (spirit child who dies and returns to torment its mother), she carries a supernatural weight that reinforces her singularity. Achebe uses her to expose the rigidity of gender roles in Igbo culture: Okonkwo repeatedly wishes she had been born a boy, revealing both his love for her and his inability to value femininity on its own terms.',
    arc: [
      'Part 1: Grows from a sickly child feared to be an ogbanje into a confident young woman. Her iyi-uwa (the stone linking her to the spirit world) is dug up and destroyed, symbolising her commitment to life.',
      'Part 2: Accompanies the family into exile in Mbanta. Refuses to marry there, insisting on waiting until the family returns to Umuofia -- an act of loyalty and independence.',
      'Part 3: Returns to Umuofia as a beautiful young woman. Her strength parallels the resilience of Igbo culture itself.',
    ],
    keyQuotes: [
      {
        text: '"She should have been a boy."',
        chapter: 'Chapter 8 -- Okonkwo',
        analysis:
          'Okonkwo\'s highest compliment reveals his deepest limitation. He can only value strength when it looks masculine. Achebe exposes the patriarchal structure that limits how love can be expressed.',
      },
      {
        text: '"She understood things."',
        chapter: 'Chapter 11 -- Narrator',
        analysis:
          'Achebe presents Ezinma\'s intelligence as intuitive and perceptive. She sees what Okonkwo refuses to see, but her gender denies her the authority to act on her understanding.',
      },
      {
        text: '"Ezinma was the only child who could have been bold enough to walk into his hut."',
        chapter: 'Chapter 5 -- Narrator',
        analysis:
          'Ezinma\'s boldness mirrors Okonkwo\'s own forceful personality, underlining the irony of his wish that she were male. She already possesses the qualities he values; he simply cannot recognise them in a girl.',
      },
    ],
    themeLinks: [
      'Masculinity & Fear -- Okonkwo\'s wish that Ezinma were a boy exposes the patriarchal framework that governs his thinking.',
      'Tradition vs Change -- The ogbanje subplot shows Igbo spirituality as a living, complex system, not a primitive superstition.',
      'Fate & Chi -- Ezinma\'s survival against the odds suggests a powerful chi at work.',
    ],
    examTip:
      'Discuss Ezinma in relation to Achebe\'s presentation of gender. Examiners value candidates who show how Okonkwo\'s wish that she were a boy exposes both his love and the patriarchal structure that limits how he can express it.',
  },
  {
    name: 'Ekwefi',
    role: 'Okonkwo\'s second wife; embodies resilience and the pain of motherhood',
    description:
      'Ekwefi was once the village beauty who fell in love with Okonkwo after watching him wrestle Amalinze the Cat. She left her first husband to marry him. Having lost nine children in infancy, she pours all her love into Ezinma, the tenth. Achebe uses Ekwefi to explore the emotional landscape of women in Igbo society -- their joys, their suffering, and the spiritual frameworks (the ogbanje belief) they use to make sense of unbearable loss. She is not merely a victim; she is a woman of extraordinary resilience who chose Okonkwo when he had nothing and endured the worst suffering the culture could inflict on a mother.',
    arc: [
      'Part 1: Follows the priestess Chielo through the night when Ezinma is carried to the Oracle\'s cave, defying fear and custom out of maternal love. Her nine dead children are a background of grief that shapes every action.',
      'Part 2: Accompanies the family into exile. Her quiet endurance contrasts with Okonkwo\'s rage.',
    ],
    keyQuotes: [
      {
        text: '"Ekwefi had suffered a great deal in her life."',
        chapter: 'Chapter 9 -- Narrator',
        analysis:
          'Achebe states the fact with the plainness of someone who has run out of words for grief. The understatement is deliberate: nine dead children cannot be adequately described.',
      },
      {
        text: '"She could bear the silence no longer."',
        chapter: 'Chapter 11 -- Narrator, as Ekwefi follows Chielo',
        analysis:
          'Ekwefi defies the authority of the priestess and the Oracle out of love for Ezinma. Achebe shows that maternal love overrides even the most powerful spiritual prohibitions.',
      },
      {
        text: '"She determined that if she lived with Okonkwo she would not allow her to go."',
        chapter: 'Chapter 9 -- Narrator',
        analysis:
          'Ekwefi treats Ezinma\'s survival as an act of will. Her fierce protectiveness is the response of a woman who has been given one final chance at motherhood.',
      },
    ],
    themeLinks: [
      'Tradition vs Change -- Ekwefi operates within tradition but bends it when her child is at stake.',
      'Fate & Chi -- The ogbanje cycle represents the spiritual dimension of infant mortality in Igbo culture.',
      'Religion -- Her night-long pursuit of Chielo shows the intersection of faith and maternal love.',
    ],
    examTip:
      'Use Ekwefi to discuss the emotional lives of women in the novel. Achebe gives her a rich inner world that exists largely outside Okonkwo\'s awareness, showing that the novel\'s women are not marginal but have their own complete stories.',
  },
  {
    name: 'Unoka',
    role: 'Okonkwo\'s father; artistic, gentle, "unsuccessful" by clan standards',
    description:
      'Unoka is a flute player, a lover of music and conversation, and a man who died in debt and was denied proper burial. He is the ghost that haunts every decision Okonkwo makes. Achebe presents him with more sympathy than Okonkwo does: Unoka is lazy by the clan\'s standards, but he is also creative, gentle and capable of genuine emotional depth. His "failure" raises a quiet question that runs through the novel: is the culture\'s definition of masculinity too narrow? Unoka could not thrive in a society that measured men by yams and titles, but Achebe suggests that his values -- art, gentleness, emotional openness -- had their own worth.',
    arc: [
      'Appears only in the novel\'s opening chapters through Okonkwo\'s memories and the narrator\'s account. Died of a swelling stomach disease (probably dropsy or oedema) and was left to die in the Evil Forest because his illness was considered an abomination.',
    ],
    keyQuotes: [
      {
        text: '"In his day he was lazy and improvident and was quite incapable of thinking about tomorrow."',
        chapter: 'Chapter 1 -- Narrator',
        analysis:
          'Achebe presents the clan\'s verdict on Unoka with apparent objectivity. But the narrator\'s tone carries a gentleness absent from Okonkwo\'s furious dismissals. The word "improvident" is the culture\'s judgement; the novel quietly asks whether that judgement is the whole story.',
      },
      {
        text: '"When Unoka died he had taken no title at all and he was heavily in debt."',
        chapter: 'Chapter 1 -- Narrator',
        analysis:
          'By the clan\'s metric, Unoka is a complete failure. But Achebe establishes early that this metric is not the only one available. Unoka\'s failure is also the failure of a culture to accommodate artistic temperament.',
      },
      {
        text: '"Unoka loved the good fellowship of the dry season, the coming and going of neighbours, the drinking of palm wine."',
        chapter: 'Chapter 1 -- Narrator',
        analysis:
          'Achebe lists the things Unoka values: community, warmth, pleasure. These are not contemptible. Achebe subtly suggests that Okonkwo\'s rejection of everything his father stood for involves rejecting things that are genuinely good.',
      },
    ],
    themeLinks: [
      'Masculinity & Fear -- Unoka is the source of Okonkwo\'s terror. His existence defines everything Okonkwo refuses to be.',
      'Language & Communication -- Unoka\'s love of music and conversation represents the artistic dimension of Igbo culture.',
      'Fate & Chi -- The clan says Unoka had a bad chi. Achebe leaves open whether this is truth or excuse.',
    ],
    examTip:
      'Do not simply accept Okonkwo\'s view of Unoka. Examiners reward candidates who notice that Achebe\'s narrator is gentler toward Unoka than Okonkwo is, and that the novel quietly questions whether the culture\'s definition of masculinity has room for men like him.',
  },
  {
    name: 'Mr Brown',
    role: 'First missionary; moderate coloniser who uses patience as strategy',
    description:
      'Mr Brown is the first Christian missionary in Umuofia. He is patient, learns about Igbo culture, and builds relationships with the elders. He establishes a school and a hospital, winning converts through practical benefits rather than confrontation. Achebe presents him as genuinely well-intentioned but also as the opening wedge of a system that will become far less benign. Brown\'s moderation is strategic as much as it is principled: he explicitly avoids "a frontal attack" because he knows it would fail. The question Achebe raises is whether a gentle coloniser is still a coloniser.',
    arc: [
      'Part 2-3: Arrives, builds relationships, establishes institutions. Engages in theological debate with Akunna, showing genuine intellectual curiosity. His departure, forced by illness, removes the restraining influence and opens the door for the more aggressive Reverend Smith.',
    ],
    keyQuotes: [
      {
        text: '"A frontal attack on it would not succeed."',
        chapter: 'Chapter 21 -- Narrator on Mr Brown',
        analysis:
          'Mr Brown\'s patience is both admirable and calculating. Achebe shows that the moderate colonial approach -- schools, hospitals, dialogue -- is more effective and therefore more dangerous than outright aggression.',
      },
      {
        text: '"Mr Brown preached against such excess of zeal."',
        chapter: 'Chapter 21 -- Narrator',
        analysis:
          'Brown restrains his followers from extremism. But Achebe makes clear that his restraint is tactical, not just moral. He knows that too much too fast will provoke resistance.',
      },
      {
        text: '"Mr Brown learned a good deal about the religion of the clan."',
        chapter: 'Chapter 21 -- Narrator',
        analysis:
          'Brown\'s curiosity is genuine, but it also serves the colonial project. Knowledge of the indigenous religion makes conversion more effective. Achebe refuses to let the reader rest comfortably with Mr Brown.',
      },
    ],
    themeLinks: [
      'Colonialism & Cultural Destruction -- Brown is the moderate face of colonialism. His schools and hospitals are also instruments of cultural replacement.',
      'Religion -- His debates with Akunna show two belief systems engaging as intellectual equals, a parity that colonialism will soon destroy.',
      'Language & Communication -- His willingness to listen is both his strength and his tool.',
    ],
    examTip:
      'Do not present Mr Brown as simply "good." Examiners reward candidates who discuss how Achebe uses the contrast between Brown and Smith to show that colonialism operates through a spectrum of approaches, all of which serve the same end: the replacement of Igbo culture.',
  },
  {
    name: 'Reverend James Smith',
    role: 'Second missionary; aggressive coloniser who provokes the final conflict',
    description:
      'Reverend Smith replaces Mr Brown and brings a fundamentalist approach that destroys the fragile coexistence Brown had built. He sees the world in absolute terms, condemns Igbo religion without understanding it, and encourages the most extreme converts. Achebe uses him to show how colonialism escalates: the patient opening is followed by aggressive consolidation. Smith\'s zealotry directly provokes the conflict that gives the District Commissioner a pretext for violent intervention.',
    arc: [
      'Part 3: Arrives, encourages extremism among converts, and indirectly provokes Enoch to unmask an egwugwu -- a profound sacrilege that forces the clan to respond. The clan burns his church; the District Commissioner uses this as justification to arrest and humiliate the elders.',
    ],
    keyQuotes: [
      {
        text: '"He saw things as black and white. And black was evil."',
        chapter: 'Chapter 22 -- Narrator',
        analysis:
          'Achebe uses the colour metaphor to expose the racism embedded in Smith\'s theology. "Black" operates on both literal and figurative levels. Smith cannot see Igbo culture as anything other than darkness to be dispelled.',
      },
      {
        text: '"He condemned openly Mr Brown\'s policy of compromise and accommodation."',
        chapter: 'Chapter 22 -- Narrator',
        analysis:
          'Smith dismantles the coexistence Brown had built. Achebe shows that colonialism\'s moderate phase is always temporary -- the system ultimately demands total submission.',
      },
      {
        text: '"He was filled with wrath against the sons of the clan."',
        chapter: 'Chapter 22 -- Narrator',
        analysis:
          'Smith\'s "wrath" is presented as righteous from his perspective but as destructive from the novel\'s. Achebe shows how religious certainty can become indistinguishable from cultural violence.',
      },
    ],
    themeLinks: [
      'Colonialism & Cultural Destruction -- Smith represents the aggressive phase that follows the moderate opening.',
      'Religion -- His fundamentalism contrasts with both Brown\'s patience and the nuanced Igbo spiritual system.',
      'Justice & Power -- His actions create the pretext for the District Commissioner\'s violent intervention.',
    ],
    examTip:
      'Compare Mr Brown and Reverend Smith explicitly. Examiners reward candidates who show how Achebe uses the two missionaries to present colonialism as a process with stages: initial patience followed by aggressive imposition.',
  },
  {
    name: 'The District Commissioner',
    role: 'Colonial administrator; the novel\'s final irony',
    description:
      'The District Commissioner appears only in the final chapters but delivers the novel\'s sharpest blow. He is not a villain in any dramatic sense -- he is calm, bureaucratic and entirely convinced of his own civilising mission. His reduction of Okonkwo\'s entire life to a single paragraph in a book titled "The Pacification of the Primitive Tribes of the Lower Niger" is Achebe\'s devastating final statement about the violence of colonial narrative. The Commissioner represents not physical brutality but something worse: the power to define, to narrate, to erase.',
    arc: [
      'Part 3: Summons the clan elders, has them beaten and humiliated. After Okonkwo\'s suicide, he reflects that the event might make "interesting reading" and would merit "a reasonable paragraph" in his planned book. The novel ends with his perspective -- and the reader realises they have just read the book the Commissioner could never write.',
    ],
    keyQuotes: [
      {
        text: '"The Pacification of the Primitive Tribes of the Lower Niger."',
        chapter: 'Chapter 25 -- Narrator, the Commissioner\'s book title',
        analysis:
          'The novel\'s final line. Every word is loaded: "Pacification" disguises violence as peace; "Primitive" denies the culture\'s complexity; "Lower Niger" reduces a living people to a geographic category. Achebe\'s entire novel exists as a refutation of this title.',
      },
      {
        text: '"One could almost write a whole chapter on him. Perhaps not a whole chapter but a reasonable paragraph."',
        chapter: 'Chapter 25 -- District Commissioner',
        analysis:
          'The Commissioner reduces Okonkwo\'s tragedy to a matter of editorial length. Achebe uses this casual calculation to show that colonialism\'s deepest violence is narrative: the power to decide whose story matters and how much space it deserves.',
      },
      {
        text: '"Does the white man understand our custom about land?"',
        chapter: 'Chapter 20 -- Obierika (about the Commissioner\'s court)',
        analysis:
          'The question exposes the absurdity of colonial law: foreigners who do not understand local customs are adjudicating disputes rooted in generations of tradition. The answer, of course, is no -- and the Commissioner has no interest in learning.',
      },
    ],
    themeLinks: [
      'Colonialism & Cultural Destruction -- The Commissioner IS colonialism: calm, certain, and utterly indifferent to what he destroys.',
      'Language & Communication -- His book title is the ultimate act of linguistic violence -- renaming a people\'s reality in the coloniser\'s language.',
      'Justice & Power -- He represents a legal system imposed without understanding or consent.',
    ],
    examTip:
      'The District Commissioner\'s book title is arguably the most important single line in the novel. Examiners reward candidates who discuss it as Achebe\'s meta-textual statement: Things Fall Apart is the book the Commissioner could never write -- the story told from the inside rather than the outside.',
  },
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function CharactersPage() {
  return (
    <div className="space-y-10 bg-cream-50 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Things Fall Apart", url: "https://theenglishhub.app/revision/texts/things-fall-apart" },
          { name: "Characters", url: "https://theenglishhub.app/revision/texts/things-fall-apart/characters" },
        ]}
      />
      {/* Study Tools */}
      <StudyTools textName="Things Fall Apart" textType="novel" examBoard="IGCSE Edexcel" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-clay-400/[0.06] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-clay-400/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-ochre-400/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/things-fall-apart" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Things Fall Apart
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Users className="mr-1 size-3 text-clay-500" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              IGCSE Edexcel
            </Badge>
          </div>

          <h1 className="font-serif text-display-sm text-foreground sm:text-display">
            Character Analysis
          </h1>
          <p className="mt-2 text-body-lg italic text-clay-600">
            Things Fall Apart by Chinua Achebe
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Ten key characters analysed in depth: role in the novel, character
            development across all three parts, key quotations with detailed
            analysis, links to themes, and exam technique tips.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 font-serif text-heading-md text-foreground">Jump to a Character</h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {characters.map((ch) => (
                <a
                  key={ch.name}
                  href={`#${ch.name.toLowerCase().replace(/[\s.']+/g, '-')}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-foreground/20 hover:bg-muted/40"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-clay-400/10 text-sm font-bold text-clay-600">
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
          id={ch.name.toLowerCase().replace(/[\s.']+/g, '-')}
          className="scroll-mt-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <Users className="size-5 text-clay-500" />
            <h2 className="font-serif text-heading-lg text-foreground">
              {ch.name}
            </h2>
          </div>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="font-serif text-heading-md">
                {ch.name}
              </CardTitle>
              <CardDescription className="italic text-clay-600">{ch.role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-body-sm text-muted-foreground">
              {/* Description */}
              <div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  Role in the Novel
                </h3>
                <p>{ch.description}</p>
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
                  <Quote className="size-4 text-clay-500" />
                  Key Quotes
                </h3>
                <div className="space-y-3">
                  {ch.keyQuotes.map((q, i) => (
                    <div
                      key={i}
                      className="rounded-lg border-l-4 border-l-clay-500 bg-cream-100 p-4"
                    >
                      <p className="font-serif font-medium italic text-foreground">
                        {q.text}
                      </p>
                      <p className="mt-1 text-xs font-mono text-clay-600">
                        {q.chapter}
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

              {/* Exam Tip */}
              <div className="rounded-lg bg-primary/[0.03] border border-primary/10 p-4">
                <h3 className="mb-2 text-sm font-semibold text-foreground flex items-center gap-2">
                  <Lightbulb className="size-4 text-clay-600" />
                  Exam Tip
                </h3>
                <p>{ch.examTip}</p>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}

      {/* Fair dealing notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the
        Copyright, Designs and Patents Act 1988 for criticism and review. Full
        text available from your school or local library.
      </p>
    </div>
  )
}
