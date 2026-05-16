// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import StudyTools from '@/components/study/StudyTools'
import { LearningResourceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Pigeon English revision guide — themes, characters, key quotes — The English Hub',
    description: 'Pigeon English GCSE revision — Stephen Kelman',
  },
  title: 'Pigeon English revision guide — themes, characters, key quotes',
  description:
    "Pigeon English GCSE revision — Stephen Kelman's 2011 novel with plot, characters, themes, context and key quotes. Aligned to the AQA GCSE Literature spec.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/pigeon-english',
  },
}

const data: TextGuideData = {
  title: 'Pigeon English',
  author: 'Stephen Kelman',
  year: 'published 2011',
  category: 'Novel',
  badge: 'AQA GCSE',
  intro:
    'Stephen Kelman\u2019s debut novel, shortlisted for the 2011 Man Booker Prize, is narrated by Harrison \u2018Harri\u2019 Opoku, an eleven-year-old Ghanaian boy newly arrived on the fictional Dell Farm estate in London. The novel opens in the aftermath of the stabbing of a local schoolboy \u2014 referred to throughout only as \u2018the dead boy\u2019 \u2014 and follows Harri as he turns amateur detective, determined to find the killer with his friend Dean. Kelman interweaves Harri\u2019s exuberant, slang-rich, Ghanaian English voice with the silent interludes of a pigeon that watches the estate from above. What begins as the comic story of a curious child trying to make sense of a strange new country darkens steadily into a study of gang violence, migration, faith and the vulnerability of childhood. The novel is set on AQA\u2019s GCSE specification and is widely admired for its formal inventiveness and the moral tenderness of its narration.',
  quickInfo: {
    genre: 'Contemporary literary fiction',
    setting: 'Dell Farm estate, London; present day',
    length: '~70,000 words',
    published: '2011 (Bloomsbury)',
  },
  plotSummary: [
    'Harrison \u2018Harri\u2019 Opoku, aged eleven, has recently arrived in London from Ghana with his older sister Lydia and their mother (\u2018Mamma\u2019). Their father, baby sister Agnes and grandmother remain in Accra, and the family hopes to be reunited once there is money for the flights. They live in a high-rise flat on the Dell Farm estate, a fictional composite of the tower-block estates Kelman grew up near in Luton. The novel opens with the stabbing of a boy from Harri\u2019s school outside a chicken shop; the victim is never named, referred to only as \u2018the dead boy\u2019. Inspired by police tape, television detectives and his own eager conscience, Harri teams up with his classmate Dean to investigate. They dust for fingerprints with sellotape, follow suspects and keep a notebook of \u2018clues\u2019. For Harri the case is at first another of the bright, baffling games of his new life, not so different from running races, collecting Haribo or trying to talk to the girl he likes, Poppy.',
    'Alongside the murder plot, Kelman builds a dense picture of Harri\u2019s daily world. He narrates school in the voice of a child who notices everything and explains it to himself as he goes: the hierarchies of the playground, the terror of the older boys, the rituals of lunchtime, the boredom and violence of the Dell Farm Crew, a gang of teenagers led by the frightening X-Fire and his lieutenant Killa. Harri is pressured to \u2018prove himself\u2019 to the Crew, to run errands, to keep quiet. At home his mother works long shifts as a midwife and Auntie Sonia, glamorous and secretive, moves in and out of the flat with men whom Mamma distrusts. Lydia is fifteen, tired, often furious, and trying to fit in with a group of girls whose values frighten her mother. Through it all Harri keeps up a running conversation with a pigeon that visits his balcony; short italicised passages from the pigeon\u2019s point of view punctuate the novel, offering a cool, adult counter-voice to Harri\u2019s breathless narration.',
    'As the investigation continues, Harri\u2019s discoveries begin to matter. He notices a bloodstain, a discarded knife, a suspicious movement; he sees that members of the Dell Farm Crew know more about the murder than they are saying. At the same time his own life becomes more dangerous. He is forced into a confrontation with Killa; a chewing-gum trial, a \u2018blood brothers\u2019 ritual with Dean, and a long sequence at a local fair all tighten the novel\u2019s emotional grip. Auntie Sonia is revealed to be involved with a man called Julius, whose violence hangs over the second half of the novel. Mamma\u2019s faith, Lydia\u2019s protective anger and Harri\u2019s loyalty to his friends are all tested. Kelman paces the book so that the reader, like Harri, half-forgets the threat of the opening chapter until it returns.',
    'In the closing pages Harri\u2019s amateur investigation attracts the Crew\u2019s direct attention. Warnings turn into threats and then, with devastating speed, into violence. The novel ends with a sudden stabbing \u2014 deliberately echoing the killing that opened the book \u2014 and with the pigeon rising above the estate in a final italicised flight. Kelman offers no neat resolution: no arrest, no redemptive epiphany, no lesson drawn. The reader is left instead with the freshness of what has been lost and with the shock of how quickly a child\u2019s hopeful voice can be silenced. The ending is widely discussed in classrooms because of its ambiguity and its refusal to sentimentalise either Harri or the estate that has shaped him.',
  ],
  characters: [
    {
      name: 'Harrison \u2018Harri\u2019 Opoku',
      role: 'Eleven-year-old narrator and protagonist',
      body: 'Harri is curious, gentle, fast on his feet and almost painfully hopeful. His voice \u2014 a mixture of Ghanaian English, playground London slang and his own invented vocabulary \u2014 is Kelman\u2019s greatest technical achievement and the engine of the novel\u2019s emotional force. \u2018Asweh\u2019 (meaning \u2018I swear\u2019) is his verbal tic; \u2018hutious\u2019 is his word for scary; he sorts the world into what is \u2018brutal\u2019, \u2018advantage\u2019 or \u2018bo-styles\u2019. Harri\u2019s moral instincts \u2014 to help, to pray, to believe the best of people \u2014 run directly against the logic of the estate around him, and Kelman makes the reader feel the cost of that mismatch without ever breaking the child\u2019s perspective.',
    },
    {
      name: 'Lydia Opoku',
      role: 'Harri\u2019s older sister',
      body: 'Fifteen, tougher and angrier than Harri, Lydia is trying to fit in with an older, sharper world than her brother\u2019s. She rolls her eyes at him, confides in him, protects him and snaps at him by turns. Her friendships with Miquita and Chanelle frighten Mamma, and her exhaustion hints at how much adolescent migrant girls are expected to carry. Lydia\u2019s tenderness towards Harri is one of the novel\u2019s quietest gifts.',
    },
    {
      name: 'Mamma (Grace)',
      role: 'Harri\u2019s mother',
      body: 'Mamma works long night shifts as a midwife and holds the family together through prayer, discipline and a love that is sometimes expressed through scolding. She has left her own mother, her husband and her baby daughter behind in Ghana and is saving for the flights that will reunite them. Her absences from the flat mean that Harri is often unsupervised on a dangerous estate, and her faith \u2014 evangelical, practical, loud \u2014 shapes the family\u2019s moral vocabulary.',
    },
    {
      name: 'Papa',
      role: 'Harri\u2019s father, still in Ghana',
      body: 'Papa remains in Accra with Harri\u2019s baby sister Agnes and the family\u2019s grandmother. He is present in the novel mainly through phone calls, remembered jokes and Harri\u2019s longing. Kelman uses the offstage father to keep Ghana emotionally alive in the text and to sharpen the reader\u2019s sense of the family\u2019s split geography.',
    },
    {
      name: 'Auntie Sonia',
      role: 'Mamma\u2019s younger sister',
      body: 'Glamorous, charming and secretive, Auntie Sonia lives a riskier life than Mamma. She is tangled up with a man called Julius, whose money and menace eventually catch up with her. Sonia\u2019s story shows what happens when migration is not underwritten by the stability Mamma has fought to build, and her fingerprint-burning ritual \u2014 she files off her fingerprints for fear of deportation \u2014 is one of the novel\u2019s most haunting images.',
    },
    {
      name: 'Jordan (Dean)',
      role: 'Harri\u2019s best friend at school',
      body: 'Harri\u2019s white classmate, obsessed with CSI and convinced he can solve the murder, drives the investigation forward. He teaches Harri playground rules and slang; Harri teaches him loyalty. Their friendship offers Harri a way into British childhood and, by the end of the novel, a glimpse of its limits.',
    },
    {
      name: 'X-Fire',
      role: 'Leader of the Dell Farm Crew',
      body: 'X-Fire is the charismatic, dangerous older boy at the head of the local gang. He offers the younger children belonging, protection and a sense of importance in exchange for loyalty and silence. Kelman refuses to reduce him to a cartoon villain; the novel shows the poverty of options that make X-Fire\u2019s world attractive to boys like Harri even as it makes clear the cost of entering it.',
    },
    {
      name: 'The pigeon',
      role: 'Italicised second narrator',
      body: 'A pigeon that lands on Harri\u2019s balcony becomes, in short italicised interludes, the novel\u2019s second voice. Its register is calm, elevated and slightly enigmatic; it watches the estate from above and comments on human affairs with a gentle detachment. Readers are invited to interpret it variously as guardian, soul, witness or simply a bird, and Kelman keeps the ambiguity deliberately open.',
    },
  ],
  themes: [
    {
      title: 'Innocence and violence',
      body: 'Kelman places a child\u2019s voice against an adult world of knives and gangs. Harri\u2019s innocence is not ignorance \u2014 he notices the blood, the tape, the fear \u2014 but a way of processing threat through play, naming and hope. The gap between his cheerful narration and the reality closing in around him is the book\u2019s central technique, and the ending forces the reader to confront how fragile that innocence always was. Kelman refuses either to sentimentalise childhood or to blame Harri for misreading his world.',
    },
    {
      title: 'Identity and belonging',
      body: 'Harri is learning to be many things at once: Ghanaian, Londoner, son, brother, schoolboy, suspect, detective. He code-switches between Twi, Ghanaian English and playground slang, and his vocabulary is a running negotiation with a new country. Kelman shows belonging as something improvised rather than granted, and he takes seriously the cost of the child\u2019s labour of translation. Lydia and Auntie Sonia offer alternative models of how to be a migrant girl or woman in London, each with its own risks.',
    },
    {
      title: 'Family and diaspora',
      body: 'The Opoku family is split between Accra and London, and the flat is haunted by the absent father, baby sister and grandmother. Mamma holds the household together through work and prayer; Auntie Sonia complicates it; Lydia and Harri look after each other. Kelman treats migration as an act of love and improvisation rather than a problem to be solved, and the emotional geography of the novel always keeps Ghana in view even when the action is wholly in London.',
    },
    {
      title: 'Class and estate life',
      body: 'Dell Farm is a fictional composite but a recognisably real kind of place: underfunded, high-rise, policed but not protected. Kelman writes the estate from the inside \u2014 its smells, rituals, nicknames and hierarchies \u2014 rather than as an abstraction or a warning. The novel asks what it means to grow up in a place the rest of the country has largely written off, and it refuses the tabloid shorthand that would flatten its children into statistics.',
    },
    {
      title: 'Religion, luck and superstition',
      body: 'Harri prays, counts his lucky objects, crosses his fingers and trusts that goodness will be rewarded. Mamma\u2019s Christianity is loud and practical; Harri\u2019s is softer and more magical, mixed with Ghanaian folk belief and his own private rituals. The gap between what the characters ask of heaven and what actually happens to them gives the novel its moral weight, and Kelman respects the seriousness of Harri\u2019s faith even when the plot appears to mock it.',
    },
    {
      title: 'Friendship and loyalty',
      body: 'Friendships in the novel are both ordinary and load-bearing: Harri and Dean swear \u2018blood brothers\u2019; Harri protects Lydia; Lydia protects Harri; the Dell Farm Crew offer a dark mirror of loyalty in which belonging is paid for in silence and violence. Kelman is interested in how children work out who is worth trusting, and in the moments when loyalty tips from protection into danger.',
    },
  ],
  historicalContext: [
    'Pigeon English was directly inspired by the 2000 killing of Damilola Taylor, a ten-year-old Nigerian boy who bled to death in a stairwell on the North Peckham estate after being attacked on his way home from a library. Stephen Kelman has said in interviews that he wanted to imagine the inner life of a child like Damilola \u2014 not as a victim but as a narrator \u2014 and the final chapters echo the real case deliberately. The novel is not a reconstruction of the Taylor case but a fictional response to it, and readers and critics have discussed at length the ethics of using such a recent killing as material for a children\u2019s-voice novel.',
    'The novel\u2019s London setting belongs to a specific urban history. The tower-block estates built in the post-war decades had, by the early twenty-first century, become shorthand in the British press for poverty, crime and social failure. Kelman grew up near estates of this kind in Luton and draws on the textures of that childhood \u2014 the lifts that do not work, the stairwells, the fried-chicken shops, the nicknames, the local geography of safety and threat \u2014 rather than treating the estate as an abstraction. Dell Farm is invented but grounded in observed detail.',
    'Ghanaian migration to the UK has a long history, and the Opokus are part of an established diaspora. The family speaks Twi at home while Harri and Lydia learn to code-switch into playground English at school. Kelman researched Ghanaian speech, custom and food carefully and consulted Ghanaian readers during drafting; the novel\u2019s cultural detail is carried lightly but deliberately. The voice is the result of months of listening rather than invention.',
    'Published in 2011 by Bloomsbury, Pigeon English appeared during a decade of heightened public anxiety about knife crime in London. It was shortlisted for the Man Booker Prize, longlisted for the Guardian First Book Award and widely reviewed as an unusually formally ambitious debut. Kelman \u2014 who had worked as a warehouseman and care worker before publication \u2014 became one of the most discussed new British voices of the year. The novel\u2019s place on the AQA GCSE specification has introduced it to a generation of students, and it is now taught alongside the Damilola Taylor case in many classrooms.',
  ],
  quotations: [
    {
      quote: '"You could see the blood. It was darker than you thought."',
      who: 'Harri \u2014 opening line',
      analysis:
        'The novel\u2019s unsettling first line. Harri\u2019s flat, almost clinical tone is both childlike and already traumatised, and the short declarative sentences set the register for the whole book.',
    },
    {
      quote: '"Asweh, it was brutal."',
      who: 'Harri \u2014 recurring',
      analysis:
        '\u2018Asweh\u2019 (I swear) is Harri\u2019s signature Ghanaian interjection and anchors his voice throughout the novel. Paired with the street-English \u2018brutal\u2019 it shows how his vocabulary is constantly code-switching between home and London.',
    },
    {
      quote: '"Hutious means scary, in case you didn\'t know."',
      who: 'Harri \u2014 passim',
      analysis:
        'Kelman lets Harri define his own slang on the page, turning the reader into a pupil. Vocabulary becomes an act of identity and a small assertion of power over a world that keeps trying to define him.',
    },
    {
      quote: '"The dead boy\'s mother wouldn\'t stop crying."',
      who: 'Harri \u2014 early chapters',
      analysis:
        'The victim is never named, only \u2018the dead boy\u2019. Calling his mother into the sentence gives the murder its adult weight while keeping the child narrator\u2019s perspective intact.',
    },
    {
      quote: '"I just wanted to help."',
      who: 'Harri \u2014 throughout',
      analysis:
        'Harri\u2019s motivation, stated simply and repeatedly. Kelman insists on honouring it rather than mocking it, and the line acquires a tragic weight by the final chapters.',
    },
    {
      quote: '"I\'m not even scared, I promise."',
      who: 'Harri \u2014 late in the novel',
      analysis:
        'A reassurance Harri offers himself more than the reader. The repetition has the opposite of its intended effect, intensifying the reader\u2019s sense of his vulnerability.',
    },
    {
      quote: '"Advantage!"',
      who: 'Harri \u2014 recurring exclamation',
      analysis:
        'Harri\u2019s word for anything good or lucky. It functions almost as a charm: saying it is a small ritual of hope in a world that keeps offering him its opposite.',
    },
  ],
}

export default async function PigeonEnglishPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <LearningResourceJsonLd
        name="Pigeon English revision guide"
        description="GCSE-aligned study guide for Pigeon English covering plot, characters, themes, key quotations, historical context and exam essay plans."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/revision/texts/pigeon-english"
        about="Pigeon English"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Pigeon English',
            url: 'https://theenglishhub.app/revision/texts/pigeon-english',
          },
        ]}
      />
      <StudyTools textName="Pigeon English" textType="novel" examBoard="AQA" />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>
          AI-assisted draft under expert review. Cross-check with your teacher&rsquo;s notes.
        </span>
      </div>
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and
        Patents Act 1988 for criticism and review. Full text available from your school or local
        library.
      </p>
    </>
  )
}
