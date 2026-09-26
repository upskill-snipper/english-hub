// DRAFT - AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import StudyTools from '@/components/study/StudyTools'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'
export const metadata: Metadata = {
  openGraph: {
    title: 'Anita and Me revision guide - themes, characters, key quotes',
    description: 'Anita and Me GCSE revision - Meera Syal',
    images: [
      {
        url: '/api/og?title=Anita+and+Me+revision+guide+-+themes%2C+characters%2C+key+quotes',
        width: 1200,
        height: 630,
        alt: 'Anita and Me revision guide - themes, characters, key quotes',
      },
    ],
  },
  title: 'Anita and Me revision guide - themes, characters, key quotes',
  description:
    "Anita and Me GCSE revision - Meera Syal's 1996 bildungsroman with plot, characters, themes, context and key quotes. AQA, Edexcel, OCR and Eduqas-aligned.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/anita-and-me',
  },
}

/**
 * Corrected 26 September 2026 against the verified study guide for this novel
 * (src/data/study-guides/anita-and-me.ts, which this page does not itself
 * mount) and two archive.org copies of the novel. Do not reintroduce:
 * - a 1972 setting: the novel names no year, and its pre-decimal money and
 *   Powell reference put it in the late 1960s (1972 is the 2002 film's setting);
 * - the Black Country "in visible economic decline" at that date: its last
 *   deep pit, Baggeridge Colliery, closed in 1968, but its factories prospered
 *   and unemployment stayed low into the late 1970s (Wikipedia, Black Country);
 * - the order of events: Sunil is born in Ch 6, before the fete (Ch 7),
 *   Nanima arrives after it (Ch 8), the Bhatra attack is reported in Ch 11,
 *   Nanima goes home while Meena is in hospital (Ch 12) and Tracey's fall is
 *   the Ch 13 climax;
 * - a trial for Sam, or a last confrontation with Anita: Meena writes a note
 *   that is never answered;
 * - the Bhatra attack as the end of Meena ignoring racism: the racism theme
 *   said so, but the fete (Ch 7) is that moment, in the guide and in this
 *   page's own plot summary; the attack is only reported, in Ch 11;
 * - five "key quotations" that are not in the novel, and one in the
 *   friendship theme. Only the three below were found in the text.
 * The Guardian Fiction Prize shortlisting IS right: the publisher's own page
 * for the book (harpercollins.co.nz) says so, though the guide's header
 * comment doubts it.
 */
const data: TextGuideData = {
  slug: 'anita-and-me',
  title: 'Anita and Me',
  author: 'Meera Syal',
  year: 'published 1996',
  category: 'Novel',
  badge: 'AQA / Edexcel / OCR / Eduqas',
  intro:
    "Meera Syal's semi-autobiographical first novel, published in 1996 and shortlisted for the Guardian Fiction Prize, is a funny, painful and fiercely honest coming-of-age story. Narrated by the adult Meena looking back at her nine-year-old self, it follows a British-Punjabi girl growing up as the only Indian child in the fictional ex-mining village of Tollington in the West Midlands during the late 1960s. Meena's intoxicating friendship with the older, white, working-class Anita Rutter forces her to confront questions of identity, belonging, class, language and racism on the cusp of adolescence. Syal writes with warmth and comic precision about immigrant family life, but she refuses to soften the moment when casual prejudice hardens into organised violence. The novel is set on every major GCSE English Literature specification where a modern prose text is offered.",
  quickInfo: {
    genre: 'Bildungsroman / British-Asian coming-of-age novel',
    setting: 'Tollington, West Midlands, late 1960s',
    length: '~110,000 words (328 pages in the Flamingo paperback)',
    published: '1996 (Flamingo / HarperCollins)',
  },
  plotSummary: [
    "The novel opens in the tiny fictional village of Tollington, a run-down ex-mining community in the West Midlands, where nine-year-old Meena Kumar lives with her Punjabi parents Shyam and Daljit, who she calls Papa and Mama. The Kumars are the only Indian family in the village and have created a warm substitute family from other Punjabi migrants - Auntie Shaila, Uncle Amman and a wide circle of 'aunties' and 'uncles' who gather every weekend for food, gossip, songs and mehfils. Meena narrates from the retrospective voice of her adult self, capturing both the textures of 1960s working-class England - the fish and chip shop, the sweet shop run by Mr Ormerod, the coal yard, the outside toilets - and the rich parallel world of her parents' memories of Partition and the Punjab. Meena is bright, mischievous and a compulsive storyteller, a habit she frames as the inheritance of those 'deprived of history'. She longs to be accepted as an ordinary Tollington child and is embarrassed by anything that marks her out: her mother's sari, the smell of spices, the visits of relatives who speak no English.",
    "Meena's imagination is captured by Anita Rutter, a tougher, older girl from a chaotic white working-class home at the bottom of the village. Anita's mother Deirdre is glamorous, unhappy and eventually abandons the family; her father is distant; her younger sister Tracey is fragile and neglected. For Meena, Anita represents freedom, danger and a wider social world. She becomes Anita's chosen sidekick, joining her gang and graduating to shoplifting, minor cruelty and playground hierarchies. Meena lies constantly - to her parents about Anita, to Anita about her home - and the double life slowly fractures her sense of self. A series of small betrayals accumulates: Anita is casually racist when it suits her, she manipulates Tracey, and she bullies weaker children while demanding Meena's loyalty. Meanwhile, the building of a new motorway threatens to cut Tollington in half, the mine closures of the previous decade continue to bite, and a National Front-style politics starts to surface in the pub and in the talk of older boys. Meena's baby brother Sunil is born, and she has to share her parents' attention for the first time.",
    "The political temperature rises sharply around a village fete at which a local dignitary speaks. Anita's older boyfriend Sam Lowbridge, a charismatic and disaffected teenager on a moped, interrupts the speech with a racist outburst. Meena, standing in the crowd, recognises Sam and realises with horror that the racism she has treated as background noise has been aimed at people like her family all along. Her parents' quiet dignity in the aftermath - their refusal to make a scene, their protectiveness of Meena - changes how she sees them. The arrival of her maternal grandmother, Nanima, from India reorients her further: Nanima speaks almost no English but tells Meena Punjabi stories, teaches her songs and offers a model of rooted, unembarrassed identity.",
    "Later, a newspaper reports that an Indian man, Mr Rajesh Bhatra, has been attacked and robbed in Tollington, and Anita boasts that she was with Sam's gang when they attacked a man at a bus stop. A serious accident (Meena is thrown from a horse and breaks her leg) forces her into a long convalescence, during which she reads voraciously for the eleven-plus; while she is in hospital, Nanima returns to India. On the night before the exam, Tracey nearly drowns at Hollow Pond when she goes for Sam, misses and falls in, and Meena is the one who runs for help. Questioned by the police, Meena refuses to invent a story that would get Sam and Anita into trouble and tells the truth: Tracey's fall was an accident. She passes the eleven-plus and wins a grammar-school place. The closing chapters are elegiac: the Kumars prepare to leave Tollington, and the motorway will soon erase half the village. Meena writes Anita a goodbye note, which Anita never answers; the friendship ends not with a fight but in silence. The novel closes with Meena saying goodbye to Tollington and to the child she has been. Syal leaves her poised on the edge of a new school, a new identity and a Britain that is, haltingly, learning to see her.",
  ],
  characters: [
    {
      name: 'Meena Kumar',
      role: 'Narrator and protagonist',
      body: "Nine (turning ten) at the centre of the action, Meena is clever, imaginative, lonely and a compulsive liar. She narrates in the retrospective voice of her adult self, which lets Syal layer innocent perception with ironic hindsight. Meena swings between wanting to dissolve into white Tollington and moments of fierce pride in her Punjabi identity, especially after Nanima arrives. She is the novel's consciousness and its conscience: her gradual recognition that racism is not an abstract problem but a threat to her own family is the book's moral arc. Her final decision to refuse Anita is painful and grown-up, signalling the end of childhood.",
    },
    {
      name: 'Anita Rutter',
      role: "Meena's older friend; the village's 'cock of the yard'",
      body: "Thirteen, tough, glamorous to Meena's eyes, and from a chaotic home at the poorer end of the village. Anita fascinates Meena with her freedom and terrifies her with her cruelty. Syal refuses caricature: she shows the neglect, the missing mother, the hunger for attention that shapes Anita's behaviour, and she lets the reader feel the genuine warmth of the friendship before dismantling it. Anita's casual racism, her willingness to parrot Sam Lowbridge's politics and her betrayal of her sister Tracey finally make her unforgivable to Meena.",
    },
    {
      name: 'Papa (Shyam Kumar)',
      role: "Meena's father",
      body: "A clerical worker who sings ghazals at weekend parties and carries the displacement of Partition quietly inside him. Papa is gentle, aspirational and deeply loving. He chose Tollington partly because he believed its working-class warmth would welcome his family, and the slow erosion of that belief is one of the novel's saddest undercurrents. His refusal to be humiliated after the racist attack, and his insistence that Meena study for the eleven-plus, reveal a steely dignity beneath the warmth.",
    },
    {
      name: 'Mama (Daljit Kumar)',
      role: "Meena's mother",
      body: "A primary school teacher, Mama is practical, warm, socially gifted and the anchor of the Kumar household. She is a brilliant cook, a fierce defender of her family and the keeper of the Punjabi community that fills the house at weekends. Syal uses her to show the cost of migration on women in particular: the loneliness of raising children far from her mother, the work of translating her family for a village that is sometimes hostile. Her relief and transformation when Nanima arrives is one of the novel's most tender moments.",
    },
    {
      name: 'Nanima',
      role: "Meena's maternal grandmother",
      body: "Arriving from the Punjab partway through the novel to help with the new baby, Nanima speaks almost no English but reshapes the book. She tells Meena stories, teaches her Punjabi songs, and gives her a living link to a culture Meena has until now half-rejected. Her presence rebalances the domestic world, supports Mama through Sunil's difficult infancy and allows Meena to see her heritage as a source of pride rather than embarrassment. Her return to India, while Meena is in hospital, is one of the losses of the novel's closing chapters.",
    },
    {
      name: 'Sunil',
      role: "Meena's younger brother",
      body: "Born during the novel, Sunil is a demanding, often sickly baby who absorbs much of Mama's attention and forces Meena to step out of the spotlight. His arrival triggers some of her worst behaviour with Anita, but also helps her grow up: she learns to love him, to help care for him and to see her parents as people with burdens of their own.",
    },
    {
      name: 'Sam Lowbridge',
      role: "Anita's older boyfriend; village racist",
      body: "A charismatic, moped-riding teenager from Tollington who seems romantic and rebellious until his politics emerge. Sam crystallises a local drift toward National Front-style racism: the grievance of a white working-class community whose mines have closed and whose futures feel stolen. His interruption of the fete speech and his gang's attack on an Indian man at a bus stop are the novel's moral turning point. Crucially, Syal shows that Sam had always been friendly to Meena: the racism is not coming from somewhere else, it is coming from the village.",
    },
    {
      name: 'Tracey Rutter',
      role: "Anita's younger sister",
      body: "Small, quiet, fragile and largely ignored by her family, Tracey is the novel's most vulnerable child. Anita is cruel to her and drags her into danger, and at Hollow Pond Tracey nearly drowns when she goes for Sam to protect her sister, misses and falls in. Meena's decision to run for help, and then to tell the police the truth, is a moment of moral reckoning that separates her from Anita for good. Tracey represents the collateral damage of a broken family and of Anita's self-centred hunger for freedom.",
    },
  ],
  themes: [
    {
      title: 'Identity and biculturalism',
      body: "Meena lives between two languages, two cuisines, two histories and two versions of herself. She is embarrassed by her parents' sari and spices at the start of the novel and supremely proud of a Punjabi suit at the end. Syal refuses to resolve this tension into a neat hybrid identity: instead she shows identity as something negotiated daily, under pressure, and sometimes chosen differently for different rooms. Nanima's arrival is decisive because it gives Meena access to a rooted Punjabi self that does not depend on being explained to white neighbours. By the close of the novel, Meena can hold both Tollington and the Punjab inside herself without the panic that characterises her early chapters.",
    },
    {
      title: 'Belonging and exclusion',
      body: "Syal is acutely interested in who gets to belong to a place. The Kumars have lived in Tollington for years, speak its idiom, send their daughter to its school and feed its neighbours, and yet their belonging is always conditional. The novel tracks the small daily acts of inclusion and exclusion - who is invited into the pub, who is mimicked behind their back, who is stopped on the street - and shows how quickly the scales can tip. The motorway threatening to bisect the village is a literal image of how communities are made and unmade by forces their inhabitants do not control. Meena's final departure is both exile and liberation.",
    },
    {
      title: 'Racism and prejudice',
      body: "Syal carefully distinguishes casual ignorance, knowing cruelty and organised political racism, and shows how each can feed into the others. For most of the novel racism is background - a nickname, a refused service, a joke Meena pretends not to hear - and Meena's strategy is to ignore it. Sam Lowbridge's outburst at the fete collapses that strategy. Syal places the novel squarely in the wake of Enoch Powell's 1968 Rivers of Blood speech and the rise of the National Front, and she insists that racism in late-1960s Britain was not an aberration but a political project with popular reach. At the same time she refuses to reduce the village to villains: many neighbours are friendly to the Kumars, and Nanima talks in Punjabi to the silent Mr Worrall.",
    },
    {
      title: 'Family and generational conflict',
      body: "Meena's parents carry a history - Partition, migration, racial hostility, long hours - that she only half-understands, and much of the novel is about her catching up with them. Her embarrassment at their difference gives way to respect when she sees how they respond to the racist attack and to Sunil's illness. Nanima introduces a third generation and a direct link to the Punjab that shifts the whole household's centre of gravity. Syal is unsentimental about immigrant families - there are arguments, gossip, class snobberies inside the Punjabi community itself - but she presents family, in its extended and chosen forms, as Meena's deepest resource.",
    },
    {
      title: 'Growing up and loss of innocence',
      body: "Anita and Me is a classic bildungsroman structured around the year in which a child becomes something other than a child. Meena's progress is marked less by a single event than by a series of moral recognitions: that her parents can be hurt, that her friend is cruel, that racism is personal, that lies have consequences, that choosing a self involves refusing other selves. The horse accident and long convalescence give her the stillness she needs to read, to think and to prepare for the eleven-plus. By the end she has the grammar-school place, the refusal of Anita and the goodbye to Tollington; she is not yet adult, but she is no longer the liar of the opening chapter.",
    },
    {
      title: 'Female friendship and betrayal',
      body: 'The friendship with Anita is the emotional spine of the novel and one of the most unsparing portraits of girlhood in contemporary British fiction. Syal captures the intoxication of being chosen by a charismatic older girl, the craving for her approval, the compromises that craving produces, and the slow accumulation of evidence that the friend is not who she seemed. The betrayal is mutual: Meena lies to Anita about her family, Anita lies to Meena about almost everything. The end of the friendship is not a teenage tantrum but a considered moral act, and it is gendered: Meena has to learn to choose herself over a girl who mirrors a version of Englishness she can never fully inhabit.',
    },
  ],
  historicalContext: [
    "Anita and Me names no year, but its pre-decimal money and its reference to Enoch Powell's 1968 'Rivers of Blood' speech place it in the late 1960s, a politically charged time for British-Asian families. Powell's speech had legitimised the language of racial grievance in mainstream politics, and the National Front, founded in 1967, was beginning to organise. The Commonwealth Immigrants Acts of 1962 and 1968 had tightened entry from former colonies. Syal writes Tollington inside that climate: Sam Lowbridge's rhetoric is recognisably the language of the street-level far right of the period.",
    "The novel is rooted in the Black Country, the post-industrial region west of Birmingham historically shaped by coal mining, iron, chain-making and heavy engineering. Its last deep pit, Baggeridge Colliery, closed in 1968, although its factories were still prospering. Tollington is fictional but composite: a village whose pit has gone, whose young people have few prospects, and whose streets will soon be cut by a new motorway. The economic anxiety Syal depicts - the closing mine, the motorway, the sense of a world slipping away - is crucial to the politics of the novel, because it is the soil in which Sam Lowbridge's racism grows.",
    "South Asian migration to the Midlands accelerated after the Second World War, driven by labour shortages in foundries, textile mills and public transport. Punjabi Sikh communities in particular settled in Wolverhampton, Smethwick, Southall and surrounding towns, building gurdwaras, businesses and chain-migration networks. The Kumars are part of this wave, and their household - with its constant weekend mehfils and chosen 'aunties' and 'uncles' - reflects the real social fabric of the Midlands Punjabi diaspora. The Smethwick contest at the 1964 general election, fought on an openly racist slogan about ten miles from Syal's real childhood village, is a reminder of how visible this politics had become.",
    'Meera Syal was born Feroza Syal in 1961 to Punjabi parents and grew up in Essington, a small mining village in Staffordshire very like Tollington. Anita and Me is openly semi-autobiographical and was her first novel, published in 1996, when she was already known as an actor and as the screenwriter of Bhaji on the Beach (1993). The novel arrived in a decade that saw an unprecedented flowering of British-Asian voices in fiction, comedy and music, and its retrospective warmth is shaped by the confidence of that later moment. Syal adapted the book into a feature film in 2002, and it has since become one of the most widely taught modern texts in the GCSE English Literature canon, appearing on AQA, Edexcel, OCR and Eduqas specifications.',
  ],
  quotations: [
    {
      quote:
        '"I\'m really not a liar, ... deprived of history sometimes need to turn to mythology."',
      who: 'Meena - Preface',
      analysis:
        "The novel's thesis statement. Syal links Meena's compulsive storytelling directly to migration and diaspora: without an inherited place in English history, Meena must invent one. Sets up the retrospective, self-aware adult narrator and the book's defence of creative self-making.",
    },
    {
      quote: '"I knew I was a freak ... too Indian to be a real Tollington wench."',
      who: 'Meena - Chapter 6',
      analysis:
        "A textbook expression of Meena's bicultural double-bind. In the full sentence, the paired insults - 'real Indian girl' and 'real Tollington wench' - show how both sides of her identity demand a purity she cannot perform. 'Freak' turns cultural in-betweenness into pathology, anticipating the novel's work to revalue it.",
    },
    {
      quote: '"Anita was the undisputed cock of our yard."',
      who: 'Meena - on first meeting Anita',
      analysis:
        "Establishes Anita's dominance and the power imbalance in their friendship. The deliberately masculine local idiom ('cock of the yard') signals Anita's transgression of gender norms and Meena's admiration for her swagger. The phrase places the reader inside Meena's vocabulary while the adult narrator smiles at it.",
    },
  ],
}

export default async function AnitaAndMePage() {
  const board = await getServerBoard()

  return (
    <>
      <LearningResourceJsonLd
        name="Anita and Me revision guide"
        description="GCSE-aligned study guide for Anita and Me covering plot, characters, themes, key quotations, historical context and exam essay plans."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/revision/texts/anita-and-me"
        about="Anita and Me"
        audienceRole="student"
        isAccessibleForFree={true}
      />

      <StudyTools textName="Anita and Me" textType="novel" examBoard="AQA" />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">{await t('rev.texts.common.draft_badge')}</strong>
        <span>{await t('rev.texts.common.draft_note')}</span>
      </div>
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {await t('rev.texts.common.fair_dealing_review')}
      </p>
    </>
  )
}
