import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import StudyTools from '@/components/study/StudyTools'

export const metadata: Metadata = {
  title: 'Never Let Me Go — Study Guide | The English Hub',
  description:
    'In-depth study guide for Never Let Me Go by Kazuo Ishiguro: plot, characters, themes, context and key quotations for AQA GCSE.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/never-let-me-go',
  },
}

const data: TextGuideData = {
  title: 'Never Let Me Go',
  author: 'Kazuo Ishiguro',
  year: 'published 2005',
  category: 'Novel',
  badge: 'AQA GCSE',
  intro:
    "Kazuo Ishiguro's quietly devastating novel is narrated by Kathy H., a young woman raised at a mysterious English boarding school called Hailsham. As she looks back on her childhood and her friendships with Ruth and Tommy, she slowly reveals the terrible truth about what she and her classmates were created to do.",
  quickInfo: {
    genre: 'Literary dystopia / Bildungsroman',
    setting: 'Alternative-history England, late 1990s',
    length: '~85,000 words, 23 chapters',
    published: '2005',
  },
  plotSummary: [
    "Kathy H. is a thirty-one-year-old 'carer' who will soon become a 'donor'. In flashback she tells the story of Hailsham, the rural boarding school where she grew up, and of her complicated friendships with the fiery Ruth and the gentle, explosive Tommy. The students are gifted, creative and closely watched; they are also repeatedly told they are 'special', without ever quite understanding why.",
    "Over three sections the novel moves through Hailsham, the Cottages (a transitional group home for older teenagers), and Kathy's adult life as a carer. Ishiguro slowly reveals that Kathy and her peers are clones, raised to provide vital organ donations to non-clones when they are adults. The horror of their purpose is folded into the ordinary rhythms of childhood crushes, art projects and petty jealousies.",
    "At the Cottages, the tangled love between Kathy, Ruth and Tommy sharpens. Ruth and Tommy become a couple; Kathy watches. Years later, as a carer, Kathy reconnects with both of them. Ruth, nearing her final donation, confesses that she always knew Kathy and Tommy belonged together and begs them to seek a rumoured 'deferral' that might give them a few more years.",
    "Kathy and Tommy find their old Hailsham guardians and learn that the deferral is a myth. Their art was only ever evidence of their souls, collected to argue against those who doubted the clones had any. Tommy completes shortly afterwards and Kathy, now alone, prepares to become a donor herself, narrating the novel as a last act of memory and love.",
  ],
  characters: [
    {
      name: 'Kathy H.',
      role: 'Narrator and carer',
      body: "Thoughtful, careful and almost unbearably reasonable, Kathy speaks in a voice that keeps the horror at arm's length. Her refusal to rage is both the novel's beauty and its most disturbing feature.",
    },
    {
      name: 'Ruth',
      role: "Kathy's friend and rival",
      body: "Charismatic, insecure and desperate to belong, Ruth lies and performs her way through childhood. Ishiguro treats her tenderly, showing how the students' stolen futures warp every ordinary teenage emotion.",
    },
    {
      name: 'Tommy D.',
      role: 'Gentle, artistic, prone to rage',
      body: 'Tommy cannot draw at Hailsham and is teased for it. His late-blooming artwork becomes the pair\u2019s fragile evidence of a soul, and his final raging outburst in a field is the book\u2019s most exposed moment.',
    },
    {
      name: 'Miss Emily',
      role: 'Head Guardian of Hailsham',
      body: 'A complicated authority figure who treated her students kindly while participating in the system that would consume them. Her final explanation in the novel is the closest anyone comes to a justification.',
    },
    {
      name: 'Miss Lucy',
      role: 'Briefly, the truth-teller',
      body: "The only guardian who tries to tell the students plainly what their lives will be. She is quietly removed from Hailsham and her honesty lingers as a reminder that the students were taught to not-know.",
    },
    {
      name: 'Madame (Marie-Claude)',
      role: 'Collector of the students\u2019 art',
      body: 'Madame takes away the best pieces from Hailsham for a mysterious Gallery. The students fear her without understanding why. She turns out to be an unwilling ally — moved by them but unable to save them.',
    },
  ],
  themes: [
    {
      title: 'Mortality and acceptance',
      body: 'The novel asks why its clones do not run, riot or rage. Ishiguro suggests that we are all conditioned into our own acceptance of death, and he holds up the clones as an uncomfortable mirror to the reader\u2019s own quiet compliance.',
    },
    {
      title: 'Memory and narrative',
      body: "Kathy's looping, self-correcting voice is itself the novel's main event. Memory is how she resists disappearing, even as she knows the resistance is hopeless.",
    },
    {
      title: 'Friendship, love and jealousy',
      body: "The triangle between Kathy, Ruth and Tommy is drawn with painful ordinariness. Ishiguro's point is that love between clones is still love, and that its denial is the cruelty the book is really about.",
    },
    {
      title: 'Ethics of science and humanity',
      body: 'Hailsham exists because some people argued the clones had souls; most did not care. The novel quietly dismantles the idea that scientific progress is neutral and suggests that defining who counts as human is the oldest horror.',
    },
    {
      title: 'Art as evidence',
      body: "The students' paintings and poems were collected to prove to the wider world that clones had inner lives. Ishiguro turns art into both weapon and fig leaf, and invites the reader to consider what their own art is for.",
    },
  ],
  historicalContext: [
    "Kazuo Ishiguro, born in Nagasaki in 1954 and raised in England from the age of five, wrote Never Let Me Go in 2005 after more than a decade of drafts. His fiction consistently explores memory, regret and the quiet complicity of ordinary people in larger systems, a theme also central to The Remains of the Day.",
    'The novel is set in an alternative version of England in the late 1990s, where cloning for organ donation has been developed since the post-war period. Ishiguro is not interested in the science itself; he keeps the technology vague to focus on the social and emotional reality of living under it.',
    'The novel arrived during a period of intense public debate about stem-cell research and human cloning. Ishiguro\u2019s contribution is not to take sides on the science but to ask what we owe to the lives we would prefer not to see, and how easily any society can organise itself around looking away.',
    "Never Let Me Go draws on the English boarding-school tradition and on the postwar welfare state's mix of comfort and quiet control. Hailsham feels like both a utopia and a factory, and this doubleness is the point.",
  ],
  quotations: [
    {
      quote: '"My name is Kathy H. I\'m thirty-one years old, and I\'ve been a carer now for over eleven years."',
      who: 'Kathy — Chapter 1',
      analysis: 'The controlled, resume-like voice that Ishiguro uses throughout. It keeps horror hidden in plain sight.',
    },
    {
      quote: '"You have been told and not told."',
      who: 'Miss Lucy — Chapter 7',
      analysis: 'The novel\u2019s key formulation of complicity. You cannot claim surprise at what you have half-known all along.',
    },
    {
      quote: '"We took away your art because we thought it would reveal your souls."',
      who: 'Miss Emily — Chapter 22',
      analysis: 'Art had to be offered as evidence of humanity, not assumed. Ishiguro\u2019s chilling moral diagnosis.',
    },
    {
      quote: '"Never let me go. Oh baby, baby, never let me go."',
      who: 'Song lyric — Chapter 6',
      analysis: 'The imagined song around which Kathy builds a childhood fantasy, and the book\u2019s title. An emblem of longing for connection under conditions that forbid it.',
    },
    {
      quote: '"I kept thinking about all the things that could have happened and didn\'t."',
      who: 'Kathy — Chapter 23',
      analysis: 'Kathy\u2019s grief is for the futures she and Tommy were never going to have.',
    },
    {
      quote: '"I saw a new world coming rapidly."',
      who: 'Miss Emily — Chapter 22',
      analysis: 'The banal language of progress used to justify a horror. Ishiguro\u2019s quiet indictment of scientific optimism.',
    },
    {
      quote: '"I just waited, and after a while I turned back to the car."',
      who: 'Kathy — final lines',
      analysis: 'Kathy\u2019s refusal of melodrama at the end is what makes the end so unbearable.',
    },
  ],
}

export default async function NeverLetMeGoPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <StudyTools textName="Never Let Me Go" textType="novel" examBoard="AQA" />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </>
  )
}
