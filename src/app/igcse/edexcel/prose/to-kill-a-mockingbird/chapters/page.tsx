import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Sparkles, Info, Quote, Feather } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'To Kill a Mockingbird Chapter Analysis - Edexcel IGCSE Literature',
    description:
      'Chapter-by-chapter analysis of To Kill a Mockingbird for Edexcel IGCSE Literature: summaries, key events, character development, key quotes and language techniques.',
  },
  title: 'To Kill a Mockingbird Chapter Analysis - Edexcel IGCSE Literature',
  description:
    'Chapter-by-chapter analysis of To Kill a Mockingbird for Edexcel IGCSE Literature: summaries, key events, character development, key quotes and language techniques.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird/chapters',
  },
}

const chapters = [
  {
    number: 1,
    part: 1,
    title: 'The Finches, Maycomb and Boo Radley',
    summary:
      'Scout introduces the Finch family, Maycomb\u2019s sleepy Depression-era atmosphere, and the neighbourhood legend of Arthur "Boo" Radley. Dill arrives for the summer and dares Jem to touch the Radley house.',
    keyEvents: [
      'Scout establishes the dual-voice narration',
      'Dill arrives and the Boo Radley obsession begins',
      'Jem touches the Radley porch on a dare',
    ],
    characterDevelopment:
      'Scout is established as literate, observant and tomboyish. Jem is brave but cautious. Dill sparks the children\u2019s imaginative life.',
    quotes: [
      {
        text: 'Maycomb was a tired old town.',
        technique: 'Personification establishes the sleepy, stagnant setting',
      },
      {
        text: 'Inside the house lived a malevolent phantom.',
        technique: 'Gothic diction creates childhood fear and mystery',
      },
      {
        text: 'Jem ran back, his face white.',
        technique: 'Physical detail conveys fear without internal narration',
      },
    ],
  },
  {
    number: 2,
    part: 1,
    title: 'Scout\u2019s first day at school',
    summary:
      'Scout clashes with Miss Caroline Fisher, a young teacher from north Alabama who punishes Scout for already knowing how to read. Lee contrasts the Finch household\u2019s literacy with the school\u2019s rigid methods.',
    keyEvents: [
      'Miss Caroline tells Scout to stop reading at home',
      'Walter Cunningham cannot accept Miss Caroline\u2019s quarter',
      'Scout explains the Cunningham code to Miss Caroline',
    ],
    characterDevelopment:
      'Scout\u2019s intelligence and independence conflict with institutional authority. Walter Cunningham introduces class as a theme.',
    quotes: [
      {
        text: 'Until I feared I would lose it, I never loved to read.',
        technique: 'Paradox highlights how restriction creates appreciation',
      },
      {
        text: 'The Cunninghams never took anything they can\u2019t pay back.',
        technique: 'Simple declarative sentence establishes honour code',
      },
      {
        text: 'Miss Caroline began the day by reading us a story.',
        technique: 'Ironic understatement before the conflict erupts',
      },
    ],
  },
  {
    number: 3,
    part: 1,
    title: 'Walter Cunningham at lunch',
    summary:
      'Atticus invites Walter Cunningham home for lunch, where Scout mocks his eating habits. Calpurnia disciplines Scout, and Atticus introduces the core lesson of empathy.',
    keyEvents: [
      'Scout fights Walter in the schoolyard',
      'Calpurnia rebukes Scout for mocking Walter at the table',
      'Atticus teaches Scout about perspective and empathy',
    ],
    characterDevelopment:
      'Atticus\u2019s moral authority is established. Calpurnia emerges as a disciplinarian with her own authority in the house.',
    quotes: [
      {
        text: 'You never really understand a person until you consider things from his point of view.',
        technique: 'The novel\u2019s central moral instruction, expressed in plain register',
      },
      {
        text: 'Don\u2019t matter who they are, anybody sets foot in this house\u2019s yo\u2019 comp\u2019ny.',
        technique: 'Dialect voice gives Calpurnia independent moral weight',
      },
      {
        text: 'He ain\u2019t company, Cal, he\u2019s just a Cunningham.',
        technique: 'Scout\u2019s class prejudice exposed through naive narration',
      },
    ],
  },
  {
    number: 4,
    part: 1,
    title: 'Gifts in the oak tree',
    summary:
      'Scout finds gifts in the knothole of the Radley oak: chewing gum, Indian-head pennies and carved soap figures. The children begin acting out the "Boo Radley game" and Scout hears laughter from inside the house.',
    keyEvents: [
      'Scout discovers chewing gum and pennies in the tree',
      'The children dramatise the Radley legend',
      'Scout hears someone laughing inside the Radley house',
    ],
    characterDevelopment:
      'Boo begins to emerge as a silent, benevolent figure rather than a Gothic monster. Scout\u2019s curiosity deepens.',
    quotes: [
      {
        text: 'Two Indian-head pennies, one dated nineteen-six.',
        technique: 'Concrete detail makes the gifts personal and deliberate',
      },
      {
        text: 'Someone inside the house was laughing.',
        technique: 'Short sentence disrupts the Gothic atmosphere',
      },
      {
        text: 'Jem stayed moody and silent for a week.',
        technique: 'Understated narration signals Jem\u2019s growing maturity',
      },
    ],
  },
  {
    number: 5,
    part: 1,
    title: 'Miss Maudie and the note',
    summary:
      'Scout grows closer to Miss Maudie, who defends Atticus and explains Boo\u2019s history. The children attempt to send Boo a note via a fishing pole; Atticus catches them and tells them to stop tormenting Boo.',
    keyEvents: [
      'Miss Maudie explains the Radley household\u2019s harsh Baptism',
      'Children try to deliver a note to Boo',
      'Atticus forbids them from bothering Boo',
    ],
    characterDevelopment:
      'Miss Maudie becomes a trusted adult voice. Atticus models respect for privacy and human dignity.',
    quotes: [
      {
        text: 'Mockingbirds don\u2019t do one thing but make music for us to enjoy.',
        technique: 'Symbolic definition foreshadows the novel\u2019s central motif',
      },
      {
        text: 'You stop that, that\u2019s enough.',
        technique: 'Atticus\u2019s rare stern tone signals moral boundary',
      },
      {
        text: 'Miss Maudie\u2019s face implied she had reasons of her own.',
        technique: 'Indirect narration withholds information effectively',
      },
    ],
  },
  {
    number: 6,
    part: 1,
    title: 'The Radley raid',
    summary:
      'On Dill\u2019s last night, the children sneak into the Radley yard. A shadow appears and a shotgun fires. Jem loses his trousers on the fence and later retrieves them, finding them mended and folded.',
    keyEvents: [
      'Nathan Radley fires a shotgun at the intruders',
      'Jem loses his trousers escaping through the fence',
      'Jem retrieves his trousers and finds them mended',
    ],
    characterDevelopment:
      'Jem begins to understand Boo as a real person. The mended trousers represent Boo\u2019s care and gentle nature.',
    quotes: [
      {
        text: 'Shadow of a man with a hat on.',
        technique: 'Fragmentary image heightens suspense and Gothic tone',
      },
      {
        text: 'They\u2019d been sewed up. Not like a lady sewed \u2019em.',
        technique: 'Detail of clumsy stitching humanises Boo',
      },
      {
        text: 'Jem stayed moody and silent for a week.',
        technique: 'Repetition marks another step in Jem\u2019s moral growth',
      },
    ],
  },
  {
    number: 7,
    part: 1,
    title: 'The knothole sealed',
    summary:
      'More gifts appear in the knothole: a ball of twine, carved soap dolls of the children, a medal, a broken watch. Nathan Radley cements the knothole shut, claiming the tree is dying. Atticus says it looks healthy.',
    keyEvents: [
      'Soap-figure carvings of Scout and Jem appear',
      'Nathan Radley cements the knothole',
      'Jem cries silently on the porch',
    ],
    characterDevelopment:
      'Jem now recognises Boo\u2019s kindness and Nathan\u2019s cruelty. His tears mark a significant emotional threshold.',
    quotes: [
      {
        text: 'They were almost perfect miniatures of two children.',
        technique: 'The carvings show Boo\u2019s close observation and affection',
      },
      {
        text: 'Tree\u2019s dying. You plug \u2019em with cement.',
        technique: 'Nathan\u2019s lie cuts off Boo\u2019s only communication channel',
      },
      {
        text: 'He stood there until nightfall, and I waited for him.',
        technique: 'Scout\u2019s quiet empathy for Jem foreshadows the novel\u2019s close',
      },
    ],
  },
  {
    number: 8,
    part: 1,
    title: 'Snow, fire and the blanket',
    summary:
      'A rare snowfall hits Maycomb. Miss Maudie\u2019s house catches fire, and while the children watch from outside, someone drapes a blanket over Scout\u2019s shoulders. It was Boo Radley.',
    keyEvents: [
      'Scout and Jem build a snowman resembling Mr Avery',
      'Miss Maudie\u2019s house burns down',
      'Boo places a blanket on Scout without her noticing',
    ],
    characterDevelopment:
      'Boo\u2019s silent protection of Scout is confirmed. Miss Maudie\u2019s cheerful resilience after losing her home offers a model of grace.',
    quotes: [
      {
        text: 'Boo Radley. You were so busy looking at the fire you didn\u2019t know it.',
        technique: 'Atticus\u2019s matter-of-fact revelation contrasts with the Gothic tension',
      },
      {
        text: 'Always wanted a smaller house, Jem Finch.',
        technique: 'Miss Maudie\u2019s humour after disaster models resilience',
      },
      {
        text: 'The snowman looked remarkably like Mr Avery.',
        technique: 'Comic interlude balances the chapter\u2019s tension',
      },
    ],
  },
  {
    number: 9,
    part: 1,
    title: 'Cecil Jacobs and Christmas at Finch\u2019s Landing',
    summary:
      'Scout fights Cecil Jacobs for calling Atticus a "nigger-lover". At Christmas, Scout fights Cousin Francis for repeating Alexandra\u2019s views. Atticus explains why he must defend Tom Robinson.',
    keyEvents: [
      'Scout is taunted at school about Atticus defending Tom',
      'Atticus explains his moral duty to take the case',
      'Scout fights Cousin Francis at Finch\u2019s Landing',
    ],
    characterDevelopment:
      'Scout\u2019s instinct is to fight; Atticus tries to redirect her towards self-control. The hostility of white Maycomb intensifies.',
    quotes: [
      {
        text: 'Simply because we were licked a hundred years before we started.',
        technique: 'Atticus redefines courage as principled action despite certain failure',
      },
      {
        text: 'I wanted you to see what real courage is.',
        technique: 'Direct address to the children embeds the moral lesson',
      },
      {
        text: 'This time we aren\u2019t fighting the Yankees, we\u2019re fighting our friends.',
        technique: 'Civil War allusion frames the trial as internal conflict',
      },
    ],
  },
  {
    number: 10,
    part: 1,
    title: 'The mad dog',
    summary:
      'A rabid dog, Tim Johnson, appears on the street. Atticus, revealed as the best shot in the county ("One-Shot Finch"), kills it with a single rifle shot. Scout and Jem reassess their "feeble" father.',
    keyEvents: [
      'Tim Johnson staggers through Maycomb with rabies',
      'Atticus kills the dog with one shot',
      'Miss Maudie explains Atticus chose not to shoot',
    ],
    characterDevelopment:
      'Atticus is revealed as physically capable but choosing restraint. The mad dog prefigures the "madness" of racism Atticus must face.',
    quotes: [
      {
        text: 'It\u2019s a sin to kill a mockingbird.',
        technique: 'The title symbol is introduced through direct dialogue',
      },
      {
        text: 'I saw his gun halfway to his shoulder.',
        technique: 'Slow-motion narration builds tension in a single action',
      },
      {
        text: 'People in their right minds never take pride in their talents.',
        technique: 'Miss Maudie connects humility to moral superiority',
      },
    ],
  },
  {
    number: 11,
    part: 1,
    title: 'Mrs Dubose',
    summary:
      'Jem destroys Mrs Dubose\u2019s camellia bushes after she insults Atticus. As punishment, he reads to her daily. After she dies, Atticus reveals she was fighting morphine addiction and calls her the bravest person he knew.',
    keyEvents: [
      'Mrs Dubose insults Atticus; Jem destroys her camellias',
      'Jem reads to Mrs Dubose as she battles withdrawal',
      'Atticus reveals Mrs Dubose\u2019s morphine fight after her death',
    ],
    characterDevelopment:
      'Jem learns Atticus\u2019s definition of courage in practice. This chapter closes Part One by redefining bravery before the trial.',
    quotes: [
      {
        text: 'Real courage is when you\u2019re licked before you begin but you begin anyway.',
        technique: 'Atticus\u2019s definition of courage frames the entire novel\u2019s moral arc',
      },
      {
        text: 'She was the bravest person I ever knew.',
        technique: 'Superlative praise for an unlikely candidate challenges assumptions',
      },
      {
        text: 'A camellia. Jem\u2019s eyes nearly popped out of his head.',
        technique: 'Symbolic gift represents forgiveness and endurance',
      },
    ],
  },
  {
    number: 12,
    part: 2,
    title: 'Calpurnia\u2019s church',
    summary:
      'With Atticus away, Calpurnia takes Scout and Jem to First Purchase African M.E. Church. The children witness the Black community\u2019s poverty, warmth and collection for Tom Robinson\u2019s wife Helen.',
    keyEvents: [
      'Calpurnia takes the children to First Purchase Church',
      'Lula objects to white children in the Black church',
      'The congregation collects money for Helen Robinson',
    ],
    characterDevelopment:
      'Calpurnia is revealed as bilingual in dialect, navigating two worlds. Scout begins to see Maycomb\u2019s racial divide from the other side.',
    quotes: [
      {
        text: 'Cal talked in a coloured way when she was with coloured people.',
        technique: 'Code-switching illustrates the double consciousness of Black life',
      },
      {
        text: 'You ain\u2019t got no business bringin\u2019 white chillun here.',
        technique: 'Lula\u2019s protest reveals tension within the Black community',
      },
      {
        text: 'It\u2019s the same God, ain\u2019t it?',
        technique: 'Scout\u2019s naive question exposes the absurdity of segregation',
      },
    ],
  },
  {
    number: 13,
    part: 2,
    title: 'Aunt Alexandra arrives',
    summary:
      'Aunt Alexandra moves into the Finch household to give Scout a "feminine influence". She lectures the children on Finch family heritage and tries to instil class consciousness.',
    keyEvents: [
      'Alexandra moves in to provide "proper" upbringing',
      'Alexandra pressures Atticus to teach family pride',
      'Atticus awkwardly relays Alexandra\u2019s message, then drops it',
    ],
    characterDevelopment:
      'Alexandra represents the Southern social code Atticus has partly rejected. Scout resists the gendered expectations imposed on her.',
    quotes: [
      {
        text: 'Aunt Alexandra was one of the last of her kind.',
        technique: 'Retrospective narration signals a dying social order',
      },
      {
        text: 'She asked me to tell you that you must try to behave like the little lady you are.',
        technique: 'Atticus\u2019s discomfort shows his disagreement with Alexandra',
      },
      {
        text: 'I know now what he was trying to do, but Atticus was only a man.',
        technique: 'Scout\u2019s adult narrator voice reflects with gentle irony',
      },
    ],
  },
  {
    number: 14,
    part: 2,
    title: 'Dill runs away',
    summary:
      'Dill runs away from home and hides under Scout\u2019s bed. His loneliness contrasts with the Finch family\u2019s relative stability. Atticus allows him to stay.',
    keyEvents: [
      'Alexandra and Atticus argue about Calpurnia',
      'Dill is discovered hiding under Scout\u2019s bed',
      'Dill explains his loneliness and neglect at home',
    ],
    characterDevelopment:
      'Dill\u2019s vulnerability deepens. Alexandra\u2019s conflict with Atticus over Calpurnia reveals the household\u2019s class and race tensions.',
    quotes: [
      {
        text: 'The thing is, what I\u2019m tryin\u2019 to say is \u2014 they do get on a lot better without me.',
        technique: 'Dill\u2019s broken syntax conveys genuine emotional pain',
      },
      {
        text: 'Why do you reckon Boo Radley\u2019s never run off?',
        technique: 'Dill\u2019s question links his situation to Boo\u2019s isolation',
      },
      {
        text: 'Jem broke the remaining code of our childhood.',
        technique: 'Narrative commentary marks a key loss-of-innocence moment',
      },
    ],
  },
  {
    number: 15,
    part: 2,
    title: 'The jail and the lynch mob',
    summary:
      'A group of men confronts Atticus outside the jail where Tom Robinson is held. Scout, Jem and Dill arrive; Scout recognises Mr Cunningham and shames the mob into dispersing through polite conversation.',
    keyEvents: [
      'Atticus sits outside the jail to protect Tom',
      'A lynch mob gathers',
      'Scout\u2019s innocent conversation with Mr Cunningham disperses the mob',
    ],
    characterDevelopment:
      'Scout\u2019s innocence becomes a moral weapon. Mr Cunningham\u2019s shame shows that individual conscience can override mob mentality.',
    quotes: [
      {
        text: 'Hey, Mr Cunningham. I go to school with your boy.',
        technique: 'Childish register disrupts the adult violence of the mob',
      },
      {
        text: 'A mob\u2019s always made up of people.',
        technique: 'Atticus humanises the mob, refusing demonisation',
      },
      {
        text: 'It took an eight-year-old child to bring \u2019em to their senses.',
        technique: 'Mr Underwood\u2019s commentary highlights innocence as moral force',
      },
    ],
  },
  {
    number: 16,
    part: 2,
    title: 'The trial begins',
    summary:
      'Maycomb turns out for the trial. The children sneak into the courtroom and sit in the "coloured balcony" with Reverend Sykes. Atticus begins his cross-examination.',
    keyEvents: [
      'The whole county arrives for the trial',
      'Scout, Jem and Dill sit in the Black balcony',
      'The Ewells take the stand',
    ],
    characterDevelopment:
      'The children\u2019s placement in the Black balcony symbolises their moral alignment. The town\u2019s appetite for spectacle is exposed.',
    quotes: [
      {
        text: 'A Roman carnival.',
        technique: 'Metaphor reveals the town\u2019s treatment of justice as entertainment',
      },
      {
        text: 'Reverend Sykes made room for us.',
        technique: 'Simple action conveys cross-racial solidarity',
      },
      {
        text: 'There was no room at the public hitching rail.',
        technique: 'Physical detail signals the trial\u2019s scale',
      },
    ],
  },
  {
    number: 17,
    part: 2,
    title: 'Bob Ewell testifies',
    summary:
      'Heck Tate and Bob Ewell testify. Atticus establishes that Mayella\u2019s injuries were on her right side, suggesting a left-handed attacker. Bob Ewell is left-handed; Tom Robinson\u2019s left arm is disabled.',
    keyEvents: [
      'Heck Tate admits no doctor was called',
      'Bob Ewell writes his name with his left hand',
      'Atticus establishes the case\u2019s key physical evidence',
    ],
    characterDevelopment:
      'Atticus\u2019s methodical approach contrasts with Ewell\u2019s arrogance. The courtroom exposes Bob\u2019s contempt for the legal process.',
    quotes: [
      {
        text: 'Are you ambidextrous, Mr Ewell?',
        technique: 'Atticus uses formal register to unsettle and expose',
      },
      {
        text: 'I seen that black nigger yonder ruttin\u2019 on my Mayella!',
        technique: 'Ewell\u2019s dehumanising language reveals his racism\u2019s sexual anxiety',
      },
      {
        text: 'The witness realised his mistake.',
        technique: 'Narrator\u2019s understatement increases dramatic irony',
      },
    ],
  },
  {
    number: 18,
    part: 2,
    title: 'Mayella testifies',
    summary:
      'Mayella\u2019s testimony is inconsistent and emotional. Atticus treats her gently but exposes contradictions. She accuses Tom of assault but cannot explain his disabled arm.',
    keyEvents: [
      'Mayella tells her version of events',
      'Atticus reveals her loneliness and isolation',
      'Mayella refuses to answer further and breaks down',
    ],
    characterDevelopment:
      'Mayella is revealed as both victim and perpetrator. Her loneliness and abuse by Bob Ewell complicate simple judgements.',
    quotes: [
      {
        text: 'She was as sad as what Jem called a mixed child.',
        technique: 'Simile links racial and class marginalisation',
      },
      {
        text: 'Long\u2019s he keeps on callin\u2019 me ma\u2019am an\u2019 sayin\u2019 Miss Mayella.',
        technique: 'Mayella reads Atticus\u2019s politeness as mockery, revealing class tension',
      },
      {
        text: 'I got somethin\u2019 to say an\u2019 then I ain\u2019t gonna say no more.',
        technique: 'Defiant register hides vulnerability and desperation',
      },
    ],
  },
  {
    number: 19,
    part: 2,
    title: 'Tom Robinson testifies',
    summary:
      'Tom gives his account: Mayella invited him inside and kissed him; Bob saw and attacked her. Tom says he felt sorry for Mayella, which shocks the white courtroom. Mr Gilmer\u2019s cross-examination upsets Dill.',
    keyEvents: [
      'Tom testifies that Mayella kissed him',
      'Tom says he "felt right sorry for her"',
      'Dill cries at Mr Gilmer\u2019s contemptuous questioning',
    ],
    characterDevelopment:
      'Tom\u2019s sympathy for Mayella exposes the racial power structure: a Black man pitying a white woman is unacceptable in Maycomb.',
    quotes: [
      {
        text: 'I felt right sorry for her.',
        technique: 'A Black man pitying a white woman inverts the racial hierarchy',
      },
      {
        text: 'It was just him I couldn\u2019t stand.',
        technique: 'Dill\u2019s emotional reaction voices the reader\u2019s moral outrage',
      },
      {
        text: 'Tom Robinson was a dead man the minute Mayella Ewell opened her mouth.',
        technique: 'Narrator\u2019s retrospective voice confirms the pre-written verdict',
      },
    ],
  },
  {
    number: 20,
    part: 2,
    title: 'Dolphus Raymond and Atticus\u2019s closing speech',
    summary:
      'Mr Dolphus Raymond reveals he only pretends to be a drunk so Maycomb can explain his preference for Black company. Atticus delivers his closing argument, appealing to the jurors\u2019 sense of duty.',
    keyEvents: [
      'Dolphus Raymond explains his act to the children',
      'Atticus delivers his closing speech to the jury',
      'Atticus appeals to American equality before the law',
    ],
    characterDevelopment:
      'Dolphus Raymond reveals how Maycomb forces performative identities. Atticus\u2019s speech is the novel\u2019s rhetorical climax.',
    quotes: [
      {
        text: 'The evil assumption that all Negroes lie, all Negroes are immoral.',
        technique: 'Atticus names systemic racism directly in legal register',
      },
      {
        text: 'In the name of God, do your duty.',
        technique: 'Religious imperative appeals above the social order',
      },
      {
        text: 'Cry about the hell white people give coloured folks.',
        technique: 'Dolphus Raymond reframes racial injustice as grief',
      },
    ],
  },
  {
    number: 21,
    part: 2,
    title: 'The verdict',
    summary:
      'After hours of deliberation the jury returns a guilty verdict. The Black community stands as Atticus leaves the courtroom. Jem cries. Atticus tells Jem they will appeal.',
    keyEvents: [
      'The jury deliberates for hours (unusually long)',
      'Tom Robinson is found guilty',
      'The Black balcony stands for Atticus as he exits',
    ],
    characterDevelopment:
      'Jem\u2019s innocence shatters. The standing ovation shows the Black community\u2019s recognition of Atticus\u2019s moral stand despite the unjust result.',
    quotes: [
      {
        text: 'Miss Jean Louise, stand up. Your father\u2019s passin\u2019.',
        technique: 'Reverend Sykes\u2019s instruction conveys communal respect in formal register',
      },
      {
        text: 'It\u2019s not right, Atticus.',
        technique: 'Jem\u2019s simple protest marks his loss of innocence',
      },
      {
        text: 'They\u2019ve done it before and they\u2019ll do it again.',
        technique: 'Atticus acknowledges the cyclical nature of racial injustice',
      },
    ],
  },
  {
    number: 22,
    part: 2,
    title: 'After the verdict',
    summary:
      'The Black community sends food to the Finch household. Miss Maudie tells the children that Maycomb took "a baby step" by making the jury deliberate so long. Bob Ewell spits at Atticus and threatens him.',
    keyEvents: [
      'Jem is devastated by the verdict',
      'Miss Maudie explains the significance of the long deliberation',
      'Bob Ewell confronts and threatens Atticus',
    ],
    characterDevelopment:
      'Miss Maudie offers cautious hope. Bob Ewell\u2019s threat foreshadows the climax. Jem\u2019s disillusionment deepens.',
    quotes: [
      {
        text: 'It\u2019s like bein\u2019 a caterpillar in a cocoon.',
        technique: 'Jem\u2019s metaphor expresses his painful transformation',
      },
      {
        text: 'We\u2019re making a step \u2014 it\u2019s just a baby step, but it\u2019s a step.',
        technique: 'Miss Maudie\u2019s incremental optimism tempers despair',
      },
      {
        text: 'Too proud to fight, you nigger-lovin\u2019 bastard?',
        technique: 'Ewell\u2019s language connects racism to violent masculinity',
      },
    ],
  },
  {
    number: 23,
    part: 2,
    title: 'Atticus on the jury system',
    summary:
      'Atticus explains why the jury convicted: the Ewells relied on white solidarity. Jem develops his theory of Maycomb\u2019s social strata. Scout suggests there is only one kind of folks: folks.',
    keyEvents: [
      'Atticus discusses how racism corrupts the legal system',
      'Jem identifies four social classes in Maycomb',
      'Scout counters Jem\u2019s taxonomy with radical simplicity',
    ],
    characterDevelopment:
      'Jem attempts to systematise injustice; Scout\u2019s simpler view is morally cleaner. Atticus bridges the two.',
    quotes: [
      {
        text: 'When it\u2019s a white man\u2019s word against a black man\u2019s, the white man always wins.',
        technique: 'Plain statement of structural racism with no rhetorical flourish',
      },
      {
        text: 'There\u2019s four kinds of folks in the world.',
        technique: 'Jem\u2019s class taxonomy reveals emerging social awareness',
      },
      {
        text: 'Naw, Jem, I think there\u2019s just one kind of folks. Folks.',
        technique: 'Scout\u2019s reductive simplicity carries the novel\u2019s moral ideal',
      },
    ],
  },
  {
    number: 24,
    part: 2,
    title: 'The missionary tea and Tom\u2019s death',
    summary:
      'Alexandra hosts a missionary tea where the ladies discuss "saving" African people while ignoring local racism. Atticus interrupts to report that Tom Robinson has been shot dead trying to escape prison.',
    keyEvents: [
      'The missionary circle\u2019s hypocrisy is exposed',
      'Atticus reports Tom\u2019s death \u2014 shot seventeen times',
      'Alexandra and Miss Maudie compose themselves and return to the tea',
    ],
    characterDevelopment:
      'Lee uses dramatic irony to expose polite racism. Alexandra shows unexpected grace under pressure. Tom\u2019s death seals the novel\u2019s tragedy.',
    quotes: [
      {
        text: 'They shot him seventeen times.',
        technique: 'Blunt factual statement conveys the horror of disproportionate force',
      },
      {
        text: 'The handful of people who say a fair trial is not marked "White Only".',
        technique: 'Miss Maudie links courtroom justice to segregation signage',
      },
      {
        text: 'If I was a lady, I\u2019d be one like her.',
        technique: 'Scout\u2019s rare praise of Alexandra revises her earlier judgement',
      },
    ],
  },
  {
    number: 25,
    part: 2,
    title: 'Maycomb\u2019s reaction to Tom\u2019s death',
    summary:
      'Maycomb absorbs Tom\u2019s death with a few days\u2019 talk, then forgets. Mr Underwood\u2019s editorial compares killing Tom to "the senseless slaughter of songbirds". Jem now understands the mockingbird symbol fully.',
    keyEvents: [
      'Maycomb treats Tom\u2019s death as expected',
      'Mr Underwood publishes a scathing editorial',
      'Jem connects Tom\u2019s death to the mockingbird motif',
    ],
    characterDevelopment:
      'Jem\u2019s political awareness matures. Mr Underwood, previously a background figure, emerges as a moral voice.',
    quotes: [
      {
        text: 'He likened Tom\u2019s death to the senseless slaughter of songbirds.',
        technique: 'The editorial explicitly connects Tom to the mockingbird symbol',
      },
      {
        text: 'Tom was a dead man the minute Mayella opened her mouth.',
        technique: 'Retrospective narration reveals predetermined injustice',
      },
      {
        text: 'Maycomb was interested for two days.',
        technique: 'Understated sentence condemns the town\u2019s indifference',
      },
    ],
  },
  {
    number: 26,
    part: 2,
    title: 'Scout\u2019s lesson on Hitler and hypocrisy',
    summary:
      'At school, Miss Gates teaches about Hitler\u2019s persecution of Jews while herself endorsing racial prejudice at home. Scout notices the contradiction but cannot articulate it.',
    keyEvents: [
      'Miss Gates condemns Hitler\u2019s persecution of Jews',
      'Scout recalls Miss Gates\u2019s racist comments after the trial',
      'Jem refuses to discuss the trial',
    ],
    characterDevelopment:
      'Scout begins to recognise adult hypocrisy. Jem\u2019s refusal to discuss the trial signals deep emotional scarring.',
    quotes: [
      {
        text: 'How can you hate Hitler so bad an\u2019 then turn around and be ugly about folks right at home?',
        technique: 'Scout\u2019s question exposes the moral inconsistency of selective empathy',
      },
      {
        text: 'Over here we don\u2019t believe in persecuting anybody.',
        technique: 'Dramatic irony: the reader recognises the lie the speaker cannot',
      },
      {
        text: 'Jem got furious. He said he didn\u2019t want to ever hear about that courthouse again.',
        technique: 'Emotional shutdown signals trauma in Jem\u2019s coming-of-age',
      },
    ],
  },
  {
    number: 27,
    part: 2,
    title: 'Small acts of menace',
    summary:
      'Bob Ewell loses a job, stalks Judge Taylor\u2019s house and harasses Helen Robinson. The Halloween pageant at the school is announced. Tension builds towards the climax.',
    keyEvents: [
      'Bob Ewell stalks Judge Taylor and Helen Robinson',
      'The town plans a Halloween pageant',
      'Scout prepares her ham costume',
    ],
    characterDevelopment:
      'Bob Ewell\u2019s escalating behaviour creates suspense. The community\u2019s failure to take him seriously proves fatal.',
    quotes: [
      {
        text: 'Bob Ewell had a way of making his threats seem like casual conversation.',
        technique: 'Narrator\u2019s observation heightens the menace through understatement',
      },
      {
        text: 'Too old for trick-or-treating, too young for anything else.',
        technique: 'Scout\u2019s in-between status mirrors her moral position throughout',
      },
      {
        text: 'Ruth Jones, the welfare lady, said Mr Ewell openly accused Atticus of getting his job.',
        technique: 'Indirect reporting builds a pattern of Ewell\u2019s vindictiveness',
      },
    ],
  },
  {
    number: 28,
    part: 2,
    title: 'The attack',
    summary:
      'Walking home from the pageant, Scout and Jem are attacked by Bob Ewell. Someone intervenes, kills Ewell and carries the injured Jem home. Scout realises it is Boo Radley.',
    keyEvents: [
      'Bob Ewell attacks Scout and Jem in the dark',
      'A stranger rescues them and kills Ewell',
      'Scout sees Boo Radley for the first time',
    ],
    characterDevelopment:
      'The Gothic and legal plots converge. Boo\u2019s emergence completes the novel\u2019s central moral arc: the "phantom" becomes the protector.',
    quotes: [
      {
        text: 'Somebody was staggerin\u2019 around and pantin\u2019 and \u2014 coughing fit to die.',
        technique: 'Scout\u2019s fragmented sensory narration conveys the confusion of the attack',
      },
      {
        text: 'The man was walking with the staccato steps of someone carrying a load too heavy.',
        technique: 'Precise physical detail before the reveal of Boo\u2019s identity',
      },
      {
        text: 'Hey, Boo.',
        technique: 'Two-word greeting collapses the entire Gothic subplot into quiet recognition',
      },
    ],
  },
  {
    number: 29,
    part: 2,
    title: 'Scout tells the story',
    summary:
      'Scout recounts the attack to Sheriff Tate and Atticus. She identifies Bob Ewell as the attacker. She formally meets Boo Radley, standing silently in the corner of Jem\u2019s room.',
    keyEvents: [
      'Scout narrates the attack to Heck Tate',
      'Bob Ewell is confirmed dead',
      'Scout recognises Boo in the corner',
    ],
    characterDevelopment:
      'Scout\u2019s composure in retelling the attack shows how far she has matured. Her gentle recognition of Boo is the novel\u2019s emotional climax.',
    quotes: [
      {
        text: 'His face was as white as his hands.',
        technique: 'Boo\u2019s pallor from years indoors is described without judgement',
      },
      {
        text: 'When I pointed to him his palms slipped slightly.',
        technique: 'Subtle physical detail conveys Boo\u2019s nervousness',
      },
      {
        text: 'Why there he is, Mr Tate, he can tell you his name.',
        technique: 'Scout normalises Boo\u2019s presence, refusing to treat him as spectacle',
      },
    ],
  },
  {
    number: 30,
    part: 2,
    title: 'Sheriff Tate\u2019s decision',
    summary:
      'Heck Tate insists Bob Ewell fell on his own knife, protecting Boo from public attention and a trial. Atticus initially resists, thinking Jem killed Ewell, but accepts the sheriff\u2019s reasoning. Scout agrees: exposing Boo would be like killing a mockingbird.',
    keyEvents: [
      'Tate argues Boo must be protected from publicity',
      'Atticus realises Boo, not Jem, killed Ewell',
      'Scout agrees that exposing Boo would be "sort of like shootin\u2019 a mockingbird"',
    ],
    characterDevelopment:
      'Tate\u2019s decision applies Atticus\u2019s own moral logic back to him. Scout\u2019s understanding of the mockingbird principle is now complete.',
    quotes: [
      {
        text: 'Let the dead bury the dead this time, Mr Finch.',
        technique: 'Biblical allusion elevates Tate\u2019s pragmatic decision',
      },
      {
        text: 'It\u2019d be sort of like shootin\u2019 a mockingbird, wouldn\u2019t it?',
        technique: 'Scout applies the symbol she learned in chapter 10',
      },
      {
        text: 'Atticus looked like he needed cheering up.',
        technique: 'Role reversal: Scout now comforts the adult moral centre',
      },
    ],
  },
  {
    number: 31,
    part: 2,
    title: 'The Radley porch',
    summary:
      'Scout walks Boo home and stands on his porch, seeing Maycomb from his perspective. She returns home to find Atticus reading by Jem\u2019s bed. The novel closes with Scout having fully learned the lesson of empathy.',
    keyEvents: [
      'Scout walks Boo home to the Radley house',
      'Scout stands on the Radley porch and sees Maycomb from Boo\u2019s viewpoint',
      'Atticus reads to the sleeping Jem',
    ],
    characterDevelopment:
      'Scout completes the moral education Atticus began in chapter 3: she finally "climbs into another person\u2019s skin". The novel\u2019s two plots (Boo and the trial) converge.',
    quotes: [
      {
        text: 'Atticus, he was real nice. Most people are, Scout, when you finally see them.',
        technique:
          'The novel\u2019s closing exchange echoes the empathy lesson in its simplest form',
      },
      {
        text: 'I had never seen our neighbourhood from this angle.',
        technique: 'Physical perspective shift embodies the novel\u2019s moral argument',
      },
      {
        text: 'He gently released my hand, opened the door, went inside, and shut the door behind him.',
        technique: 'Simple sequential verbs close the Boo narrative with quiet finality',
      },
    ],
  },
]

export default async function TkamChaptersPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Prose', url: 'https://theenglishhub.app/igcse/edexcel/prose' },
          {
            name: 'To Kill a Mockingbird',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird',
          },
          {
            name: 'Chapter-by-Chapter Analysis',
            url: 'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird/chapters',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/prose/to-kill-a-mockingbird" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to To Kill a Mockingbird
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Chapter analysis</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            To Kill a Mockingbird: Chapters
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Chapter-by-chapter analysis covering Part One (Chapters 1-11) and Part Two (Chapters
            12-31). Each chapter includes a summary, key events, character development and three key
            quotations with language analysis.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only - read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing (CDPA 1988) for study and criticism.
              Read the complete novel alongside these notes.
            </p>
          </div>
        </div>
      </section>

      {/* Part One */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Part One - Chapters 1-11</h2>
        </div>
        <div className="space-y-6">
          {chapters
            .filter((c) => c.part === 1)
            .map((ch) => (
              <article key={ch.number} className="rounded-xl border border-border/60 bg-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-body-sm font-semibold text-primary">
                    {ch.number}
                  </span>
                  <div>
                    <h3 className="text-heading-md font-heading text-foreground">
                      Chapter {ch.number}: {ch.title}
                    </h3>
                  </div>
                </div>

                <p className="text-body-sm leading-relaxed text-muted-foreground">{ch.summary}</p>

                <div className="mt-4">
                  <h4 className="text-body-xs font-semibold uppercase tracking-wide text-foreground">
                    Key events
                  </h4>
                  <ul className="mt-1.5 space-y-1">
                    {ch.keyEvents.map((evt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-body-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/40" />
                        {evt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="text-body-xs font-semibold uppercase tracking-wide text-foreground">
                    Character development
                  </h4>
                  <p className="mt-1.5 text-body-sm leading-relaxed text-muted-foreground">
                    {ch.characterDevelopment}
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-body-xs font-semibold uppercase tracking-wide text-foreground flex items-center gap-1.5">
                    <Quote className="size-3.5" />
                    Key quotes
                  </h4>
                  <div className="mt-2 space-y-3">
                    {ch.quotes.map((q, i) => (
                      <div key={i}>
                        <blockquote className="border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
                          &ldquo;{q.text}&rdquo;
                        </blockquote>
                        <p className="mt-1 pl-3 text-body-xs text-muted-foreground">
                          <Feather className="mr-1 inline size-3 text-primary/60" />
                          {q.technique}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>

      {/* Part Two */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Part Two - Chapters 12-31
          </h2>
        </div>
        <div className="space-y-6">
          {chapters
            .filter((c) => c.part === 2)
            .map((ch) => (
              <article key={ch.number} className="rounded-xl border border-border/60 bg-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-body-sm font-semibold text-primary">
                    {ch.number}
                  </span>
                  <div>
                    <h3 className="text-heading-md font-heading text-foreground">
                      Chapter {ch.number}: {ch.title}
                    </h3>
                  </div>
                </div>

                <p className="text-body-sm leading-relaxed text-muted-foreground">{ch.summary}</p>

                <div className="mt-4">
                  <h4 className="text-body-xs font-semibold uppercase tracking-wide text-foreground">
                    Key events
                  </h4>
                  <ul className="mt-1.5 space-y-1">
                    {ch.keyEvents.map((evt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-body-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/40" />
                        {evt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="text-body-xs font-semibold uppercase tracking-wide text-foreground">
                    Character development
                  </h4>
                  <p className="mt-1.5 text-body-sm leading-relaxed text-muted-foreground">
                    {ch.characterDevelopment}
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-body-xs font-semibold uppercase tracking-wide text-foreground flex items-center gap-1.5">
                    <Quote className="size-3.5" />
                    Key quotes
                  </h4>
                  <div className="mt-2 space-y-3">
                    {ch.quotes.map((q, i) => (
                      <div key={i}>
                        <blockquote className="border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
                          &ldquo;{q.text}&rdquo;
                        </blockquote>
                        <p className="mt-1 pl-3 text-body-xs text-muted-foreground">
                          <Feather className="mr-1 inline size-3 text-primary/60" />
                          {q.technique}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the CDPA 1988 for criticism
        and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
