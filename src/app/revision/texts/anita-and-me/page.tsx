// DRAFT - AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import StudyTools from '@/components/study/StudyTools'
import { LearningResourceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'
export const metadata: Metadata = {
  openGraph: {
    title: 'Anita and Me revision guide - themes, characters, key quotes - The English Hub',
    description: 'Anita and Me GCSE revision - Meera Syal',
  },
  title: 'Anita and Me revision guide - themes, characters, key quotes',
  description:
    "Anita and Me GCSE revision - Meera Syal's 1996 bildungsroman with plot, characters, themes, context and key quotes. AQA, Edexcel, OCR and Eduqas-aligned.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/anita-and-me',
  },
}

const data: TextGuideData = {
  title: 'Anita and Me',
  author: 'Meera Syal',
  year: 'published 1996',
  category: 'Novel',
  badge: 'AQA / Edexcel / Eduqas',
  intro:
    "Meera Syal's semi-autobiographical first novel, published in 1996 and shortlisted for the Guardian Fiction Prize, is a funny, painful and fiercely honest coming-of-age story. Narrated by the adult Meena looking back at her nine-year-old self, it follows a British-Punjabi girl growing up as the only Indian child in the fictional ex-mining village of Tollington in the West Midlands during 1972. Meena's intoxicating friendship with the older, white, working-class Anita Rutter forces her to confront questions of identity, belonging, class, language and racism on the cusp of adolescence. Syal writes with warmth and comic precision about immigrant family life, but she refuses to soften the moment when casual prejudice hardens into organised violence. The novel is set on every major GCSE English Literature specification where a modern prose text is offered.",
  quickInfo: {
    genre: 'Bildungsroman / British-Asian coming-of-age novel',
    setting: 'Tollington, West Midlands, 1972',
    length: '~110,000 words (335 pages)',
    published: '1996 (Flamingo / HarperCollins)',
  },
  plotSummary: [
    "The novel opens in the tiny fictional village of Tollington, a run-down ex-mining community in the West Midlands, where nine-year-old Meena Kumar lives with her Punjabi parents Shyam and Daljit, who she calls Papa and Mama. The Kumars are the only Indian family in the village and have created a warm substitute family from other Punjabi migrants - Auntie Shaila, Uncle Amman and a wide circle of 'aunties' and 'uncles' who gather every weekend for food, gossip, songs and mehfils. Meena narrates from the retrospective voice of her adult self, capturing both the textures of 1970s working-class England - the fish and chip shop, the sweet shop run by Mr Ormerod, the coal yard, the outside toilets - and the rich parallel world of her parents' memories of Partition and the Punjab. Meena is bright, mischievous and a compulsive storyteller, a habit she frames as the inheritance of those 'deprived of history'. She longs to be accepted as an ordinary Tollington child and is embarrassed by anything that marks her out: her mother's sari, the smell of spices, the visits of relatives who speak no English.",
    "Meena's imagination is captured by Anita Rutter, a tougher, older girl from a chaotic white working-class home at the bottom of the village. Anita's mother Deirdre is glamorous, unhappy and eventually abandons the family; her father is distant; her younger sister Tracey is fragile and neglected. For Meena, Anita represents freedom, danger and a wider social world. She becomes Anita's chosen sidekick, joining her gang and graduating to shoplifting, minor cruelty and playground hierarchies. Meena lies constantly - to her parents about Anita, to Anita about her home - and the double life slowly fractures her sense of self. A series of small betrayals accumulates: Anita is casually racist when it suits her, she manipulates Tracey, and she bullies weaker children while demanding Meena's loyalty. Meanwhile, the building of a new motorway threatens to cut Tollington in half, the mine closures of the previous decade continue to bite, and a National Front-style politics starts to surface in the pub and in the talk of older boys.",
    "The political temperature rises sharply around a village fete at which a local dignitary speaks. Anita's older boyfriend Sam Lowbridge, a charismatic and disaffected teenager on a moped, interrupts the speech with a racist outburst and soon leads a small gang in an attack on an elderly Indian man who is knocked down and robbed. Meena, standing in the crowd, recognises Sam and realises with horror that the racism she has treated as background noise has been aimed at people like her family all along. Her parents' quiet dignity in the aftermath - their refusal to make a scene, their protectiveness of Meena - changes how she sees them. The arrival of her maternal grandmother, Nanima, from India reorients her further: Nanima speaks almost no English but tells Meena Punjabi stories, teaches her songs and offers a model of rooted, unembarrassed identity. Meena's baby brother Sunil is born, and she has to share her parents' attention for the first time. When Tracey almost drowns in the pit pond after following Anita, Meena is the one who runs for help, and the experience cracks open her remaining illusions about her friend.",
    'A serious accident - Meena is thrown from a horse and breaks her leg - forces her into a long convalescence, during which Nanima nurses her and she reads voraciously for the eleven-plus. Separated from Anita by distance and by her own hardening judgement, Meena passes the eleven-plus and wins a place at the local grammar school. The closing chapters are elegiac: the Kumars prepare to move to a nearby town, the motorway will soon erase half the village, and Sam Lowbridge stands trial for the assault. Meena confronts Anita one last time and refuses to forgive her; the friendship ends not with a fight but with a cold, adult clarity. The novel closes with Meena saying goodbye to Tollington, to Nanima who is returning to India, and to the child she has been. Syal leaves her poised on the edge of a new school, a new identity and a Britain that is, haltingly, learning to see her.',
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
      body: "Arriving from the Punjab partway through the novel to help with the new baby, Nanima speaks almost no English but reshapes the book. She tells Meena stories, teaches her Punjabi songs, and gives her a living link to a culture Meena has until now half-rejected. Her presence rebalances the domestic world, supports Mama through Sunil's difficult infancy and allows Meena to see her heritage as a source of pride rather than embarrassment. Her eventual return to India is part of the novel's bittersweet ending.",
    },
    {
      name: 'Sunil',
      role: "Meena's younger brother",
      body: "Born during the novel, Sunil is a demanding, often sickly baby who absorbs much of Mama's attention and forces Meena to step out of the spotlight. His arrival triggers some of her worst behaviour with Anita, but also helps her grow up: she learns to love him, to help care for him and to see her parents as people with burdens of their own.",
    },
    {
      name: 'Sam Lowbridge',
      role: "Anita's older boyfriend; village racist",
      body: "A charismatic, moped-riding teenager from Tollington who seems romantic and rebellious until his politics emerge. Sam crystallises a local drift toward National Front-style racism: the grievance of a white working-class community whose mines have closed and whose futures feel stolen. His interruption of the fete speech and his attack on the elderly Indian man are the novel's moral turning point. Crucially, Syal shows that Sam has been smiling at Meena and drinking in her mother's kitchen - the racism is not coming from somewhere else, it is coming from the village.",
    },
    {
      name: 'Tracey Rutter',
      role: "Anita's younger sister",
      body: "Small, quiet, fragile and largely ignored by her family, Tracey is the novel's most vulnerable child. Anita is cruel to her, drags her into danger and finally leaves her alone at the pit pond where she nearly drowns. Meena's decision to run for help when Anita runs away is a moment of moral reckoning that separates her from Anita for good. Tracey represents the collateral damage of a broken family and of Anita's self-centred hunger for freedom.",
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
      body: "Syal carefully distinguishes casual ignorance, knowing cruelty and organised political racism, and shows how each can feed into the others. For most of the novel racism is background - a nickname, a refused service, a joke Meena pretends not to hear - and Meena's strategy is to ignore it. The attack by Sam Lowbridge's gang collapses that strategy. Syal places the novel squarely in the wake of Enoch Powell's 1968 Rivers of Blood speech and the rise of the National Front, and she insists that racism in 1972 Britain was not an aberration but a political project with popular reach. At the same time she refuses to reduce the village to villains: the same neighbours who laugh at Powell jokes bring casseroles when Nanima arrives.",
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
      body: "The friendship with Anita is the emotional spine of the novel and one of the most unsparing portraits of girlhood in contemporary British fiction. Syal captures the intoxication of being chosen by a charismatic older girl, the craving for her approval, the compromises that craving produces, and the slow accumulation of evidence that the friend is not who she seemed. The betrayal is mutual: Meena lies to Anita about her family, Anita lies to Meena about almost everything. The final refusal - 'I knew I could not forgive Anita' - is not a teenage tantrum but a considered moral act, and it is gendered: Meena has to learn to choose herself over a girl who mirrors a version of Englishness she can never fully inhabit.",
    },
  ],
  historicalContext: [
    "Anita and Me is set in 1972, a politically charged year for British-Asian families. Enoch Powell's 1968 'Rivers of Blood' speech had legitimised the language of racial grievance in mainstream politics, and the National Front grew rapidly in the Midlands and North in the early 1970s. The Commonwealth Immigrants Acts of 1962 and 1968 had tightened entry from former colonies, and in 1972 Idi Amin's expulsion of Ugandan Asians brought tens of thousands of East African Asians to Britain, many to the West Midlands. Syal writes Tollington inside that climate: Sam Lowbridge's rhetoric is recognisably the language of the street-level far right of the period.",
    "The novel is rooted in the Black Country, the post-industrial region west of Birmingham historically shaped by coal mining, iron, chain-making and heavy engineering. By the early 1970s most of the deep mines had closed and the area was in visible economic decline. Tollington is fictional but composite: a village whose pit has gone, whose young people have few prospects, and whose streets will soon be cut by a new motorway. The economic anxiety Syal depicts - the closing mine, the motorway, the sense of a world slipping away - is crucial to the politics of the novel, because it is the soil in which Sam Lowbridge's racism grows.",
    "South Asian migration to the Midlands accelerated after the Second World War, driven by labour shortages in foundries, textile mills and public transport. Punjabi Sikh communities in particular settled in Wolverhampton, Smethwick, Southall and surrounding towns, building gurdwaras, businesses and chain-migration networks. The Kumars are part of this wave, and their household - with its constant weekend mehfils and chosen 'aunties' and 'uncles' - reflects the real social fabric of the Midlands Punjabi diaspora. The 1964 Smethwick by-election, fought on an openly racist slogan a few miles from Syal's real childhood village, is a reminder of how visible this politics had become.",
    'Meera Syal was born Meera Syal Chopra in 1961 to Punjabi Sikh parents and grew up in Essington, a small mining village in Staffordshire very like Tollington. Anita and Me is openly semi-autobiographical and was her first novel, published in 1996 when she was already well known as an actor and writer on Goodness Gracious Me. The novel arrived in a decade that saw an unprecedented flowering of British-Asian voices in fiction, comedy and music, and its retrospective warmth is shaped by the confidence of that later moment. Syal adapted the book into a feature film in 2002, and it has since become one of the most widely taught modern texts in the GCSE English Literature canon, appearing on AQA, Edexcel and Eduqas specifications.',
  ],
  quotations: [
    {
      quote:
        '"I\'m really not a liar, I just learnt very early on that those of us deprived of history sometimes need to turn to mythology."',
      who: 'Meena - opening chapter',
      analysis:
        "The novel's thesis statement. Syal links Meena's compulsive storytelling directly to migration and diaspora: without an inherited place in English history, Meena must invent one. Sets up the retrospective, self-aware adult narrator and the book's defence of creative self-making.",
    },
    {
      quote:
        '"I knew I was a freak of some kind, too mouthy, clumsy and scabby to be a real Indian girl, too Indian to be a real Tollington wench."',
      who: 'Meena - early chapters',
      analysis:
        "A textbook expression of Meena's bicultural double-bind. The paired insults - 'real Indian girl' and 'real Tollington wench' - show how both sides of her identity demand a purity she cannot perform. 'Freak' turns cultural in-betweenness into pathology, anticipating the novel's work to revalue it.",
    },
    {
      quote: '"Anita was the undisputed cock of our yard."',
      who: 'Meena - on first meeting Anita',
      analysis:
        "Establishes Anita's dominance and the power imbalance in their friendship. The deliberately masculine local idiom ('cock of the yard') signals Anita's transgression of gender norms and Meena's admiration for her swagger. The phrase places the reader inside Meena's vocabulary while the adult narrator smiles at it.",
    },
    {
      quote: '"I wanted to be everything she was."',
      who: 'Meena on Anita',
      analysis:
        "The purest statement of Meena's longing to assimilate. Anita functions as a surrogate for a white Englishness Meena cannot possess; wanting to be 'everything she was' is also wanting not to be Indian, which is the fantasy the novel will dismantle.",
    },
    {
      quote: '"The Tollington I knew was slowly being dismantled."',
      who: 'Meena - later chapters',
      analysis:
        "The motorway, the pit closures and the changing population all literalise Meena's interior loss. Syal uses the vanishing village as an image of the instability of any 'pure' Englishness Sam Lowbridge claims to be defending.",
    },
    {
      quote: '"I\'m not talking about those, I\'m talking about them. The darkies."',
      who: 'Sam Lowbridge - at the village fete',
      analysis:
        "Sam's public outburst at the fete is the novel's political turning point. The word 'them' does the work of racism - it separates a group from the village's 'us' - and Meena hears herself named. The scene crystallises how Powellite rhetoric turns into street violence in a single speech act.",
    },
    {
      quote:
        '"I realised that Sam Lowbridge had meant me, he had meant my Papa, he had meant my mama."',
      who: 'Meena - after the attack',
      analysis:
        "The collapse of Meena's strategy of ignoring racism. The repetition of 'he had meant' enacts her dawning recognition. Syal marks this as a loss of childhood innocence that is specifically racialised: Meena has lost the ability to imagine that racism is about other people.",
    },
    {
      quote: '"Being an Indian in England was not the same as being Indian in India."',
      who: "Meena - reflecting on Nanima's arrival",
      analysis:
        "Captures the diaspora experience and the impossibility of a single, unbroken cultural identity. Syal gently refuses nostalgic notions of an authentic homeland: Meena's Indianness is its own thing, formed in Tollington, and Nanima's presence enriches rather than corrects it.",
    },
  ],
}

export default async function AnitaAndMePage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

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
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Anita and Me',
            url: 'https://theenglishhub.app/revision/texts/anita-and-me',
          },
        ]}
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
