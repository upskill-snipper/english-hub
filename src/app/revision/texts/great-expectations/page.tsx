// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Great Expectations — Study Guide | The English Hub',
  description:
    'In-depth study guide for Great Expectations by Charles Dickens: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/great-expectations',
  },
}

const data: TextGuideData = {
  title: 'Great Expectations',
  author: 'Charles Dickens',
  year: '1860\u201361',
  category: 'Novel',
  badge: 'AQA',
  intro:
    'Charles Dickens\u2019s thirteenth novel is a first-person bildungsroman narrated by Philip Pirrip \u2014 universally known as Pip \u2014 who looks back on his own journey from an impoverished orphan in the Kent marshes to a young gentleman in London. Published in weekly instalments in All the Year Round between 1860 and 1861, Great Expectations traces the moral cost of social mobility in Victorian England. Pip\u2019s life is transformed by a mysterious benefactor whose fortune allows him to be educated as a gentleman, but the true identity of that benefactor \u2014 and the psychology of the people who shape his ambitions \u2014 lies at the heart of the novel\u2019s moral questioning. Through the frozen household of Miss Havisham, the steady decency of Joe Gargery, the convict Abel Magwitch returning from transportation, and the cold beauty of Estella, Dickens anatomises the Victorian myths of self-improvement, inheritance and respectability. The novel is preoccupied with guilt, hidden origins and what a person owes to those who loved them before they became ambitious, and its retrospective voice allows Pip to judge his younger self with painful honesty.',
  quickInfo: {
    genre: 'Bildungsroman',
    setting: 'Kent marshes and London, early 19th century',
    length: '~185,000 words / 59 chapters',
    published: 'All the Year Round 1860\u201361; book 1861',
  },
  plotSummary: [
    'The novel opens on the bleak Kent marshes on Christmas Eve, where the seven-year-old orphan Pip is visiting his parents\u2019 graves. He is ambushed by an escaped convict, Abel Magwitch, who terrifies the boy into stealing food and a file from the forge of his brother-in-law Joe Gargery, the gentle blacksmith who has raised him alongside his sharp-tempered sister, Mrs Joe. Pip obeys, helping the starving man on the marshes, but the soldiers soon recapture Magwitch, who tells them he stole the food himself, shielding Pip. Some time later, Pip is summoned to Satis House, the decaying mansion of the eccentric Miss Havisham, to "play" for her entertainment. There he meets the beautiful, cold-hearted Estella, who mocks his coarse hands and thick boots. Humiliated, Pip leaves Satis House ashamed of the forge and of Joe, and begins to long to become a gentleman so that he might one day be worthy of Estella.',
    'Pip is apprenticed to Joe at the forge, a prospect that once pleased him but now feels like a prison. The household is shaken when Mrs Joe is savagely attacked and left speechless and dependent; she is cared for by Biddy, a kind, intelligent girl whom Pip treats with casual condescension. Years pass and Pip\u2019s discontent grows. Suddenly the London lawyer Mr Jaggers arrives with astonishing news: Pip has "great expectations" from an anonymous benefactor, who wishes him to be brought up as a gentleman. Pip assumes, against all evidence, that the benefactor must be Miss Havisham and that she is preparing him to marry Estella. He leaves for London full of snobbish embarrassment about Joe, a guilt that the older narrator recalls with shame.',
    'In London, Pip lodges with Herbert Pocket, Miss Havisham\u2019s distant relative, who becomes his closest friend and nicknames him "Handel." Under Jaggers\u2019s stern supervision Pip runs up debts, joins the absurd Finches of the Grove club, and ignores Joe\u2019s rare visits. He loves Estella against all reason \u2014 she is being trained to break men\u2019s hearts \u2014 and watches helplessly as she agrees to marry the brutish Bentley Drummle. One stormy night, a weather-beaten stranger climbs the stairs to Pip\u2019s rooms. It is Magwitch, returned illegally from transportation in Australia, where a lifetime of hard work has made him rich. The convict reveals that he, not Miss Havisham, is Pip\u2019s benefactor: every penny of Pip\u2019s gentlemanly income has been earned by a hunted criminal who wanted the boy who once showed him kindness to become everything he himself could not. Pip\u2019s expectations collapse in an instant.',
    'Hiding Magwitch in Herbert\u2019s rooms, Pip plans to smuggle him out of England by river. He confronts Miss Havisham, who breaks down in remorse for the way she has used him and Estella; her wedding dress catches fire and she dies soon after from her burns. Pip discovers through Jaggers that Estella is Magwitch\u2019s daughter by Jaggers\u2019s housekeeper Molly, a revelation withheld from Estella herself. On the evening of the planned escape, Magwitch is intercepted by his old enemy Compeyson. In the struggle Compeyson drowns, Magwitch is fatally injured, and Pip sits with him in prison until he dies \u2014 telling the old man at last that his daughter lives and that Pip loves her. Pip falls dangerously ill, ruined financially, and is nursed back to health by Joe, who quietly pays off his debts and slips away when Pip is well. Pip returns to the forge intending to propose to Biddy, only to find that she has already married Joe. He goes abroad to work for Herbert\u2019s firm, and years later returns to the ruins of Satis House at twilight, where he meets a chastened Estella, widowed and changed. In the revised ending Dickens published, Pip takes her hand and sees "no shadow of another parting."',
  ],
  characters: [
    {
      name: 'Pip (Philip Pirrip)',
      role: 'Protagonist and first-person narrator',
      body: 'Pip is the orphaned blacksmith\u2019s boy whose chance meeting with a convict and a visit to Satis House transform his sense of himself. The novel is narrated retrospectively by his older self, who judges the younger Pip with rueful honesty: his snobbery towards Joe, his infatuation with Estella, his idle debts in London. Dickens uses Pip to dramatise how ambition corrodes affection, and how the Victorian dream of becoming a gentleman can hollow out the very qualities \u2014 loyalty, gratitude, humility \u2014 that already made Pip admirable.',
    },
    {
      name: 'Estella',
      role: 'Adopted daughter of Miss Havisham; Pip\u2019s love',
      body: 'Estella is the cold, beautiful girl whom Miss Havisham has raised as an instrument of revenge against men, trained from childhood to be heartless. She treats Pip with mockery and warns him repeatedly that she has no heart, yet she is one of the novel\u2019s most tragic figures, shaped by an abuse she did not choose. The late revelation that she is the daughter of Magwitch and Molly connects the novel\u2019s criminal underworld to its gentry, and her suffering in marriage to Drummle finally softens her into someone who can meet Pip as an equal.',
    },
    {
      name: 'Miss Havisham',
      role: 'Jilted bride of Satis House',
      body: 'Abandoned at the altar decades earlier by the fraudster Compeyson, Miss Havisham has stopped every clock in Satis House at twenty to nine, left her wedding breakfast rotting on the table, and still wears her yellowing bridal dress. She adopts Estella explicitly to break the hearts of men, and encourages Pip\u2019s infatuation as part of that revenge. Dickens uses her as a Gothic emblem of suspended time and poisoned grief; her eventual remorse \u2014 and her fiery, accidental death in the rotting wedding dress \u2014 stage a long-delayed reckoning with what her hatred has cost two children.',
    },
    {
      name: 'Abel Magwitch',
      role: 'Escaped convict and Pip\u2019s true benefactor',
      body: 'Magwitch is the starving convict Pip feeds on the marshes in the opening chapter, and the hidden hand behind Pip\u2019s great expectations. Transported to Australia for life, he works doggedly as a sheep-farmer to make a fortune with which to raise "his gentleman," returning illegally to England to see the result. Dickens uses him to expose the Victorian class system\u2019s moral hypocrisy: the hunted criminal is a more generous, more loving parent than any respectable character in the novel, and his quiet death in prison reframes everything Pip has been taught to value.',
    },
    {
      name: 'Joe Gargery',
      role: 'Village blacksmith; Pip\u2019s brother-in-law and surrogate father',
      body: 'Joe is the forge\u2019s gentle giant, a barely literate blacksmith married to Pip\u2019s violent sister. His refrain "Ever the best of friends, Pip, old chap" runs through the novel as a moral baseline that Pip strays from and eventually returns to. Joe is the book\u2019s true gentleman \u2014 honest, patient, incapable of cruelty \u2014 and Dickens places him at the moral centre as a living rebuke to the snobbery of London. His quiet nursing of Pip through illness, and his marriage to Biddy, complete the book\u2019s redemptive arc.',
    },
    {
      name: 'Mrs Joe Gargery',
      role: 'Pip\u2019s sister and Joe\u2019s wife',
      body: 'Mrs Joe has raised Pip "by hand" \u2014 a grim pun the novel leans on, since her hands deliver regular beatings to both her brother and her husband. She is resentful, loud and status-obsessed, proud of keeping a clean kitchen and furious at any disruption. The brutal attack that leaves her speechless, eventually traced to Orlick, exposes the violence that flowed from and through her, and her silenced last months offer one of Dickens\u2019s most uncomfortable pictures of domestic abuse within a \u201crespectable\u201d working family.',
    },
    {
      name: 'Herbert Pocket',
      role: 'Pip\u2019s London friend and roommate',
      body: 'The cheerful, well-meaning Herbert is Miss Havisham\u2019s distant relative whom Pip first meets as "the pale young gentleman" at Satis House. In London he becomes Pip\u2019s closest friend, nicknaming him Handel and patiently correcting his table manners. Herbert\u2019s optimism, his devotion to his fiancee Clara, and his eventual commercial success (secretly funded by Pip) provide the warmer counter-current to Pip\u2019s guilt-ridden story, and it is Herbert\u2019s firm that gives Pip useful work at the end.',
    },
    {
      name: 'Mr Jaggers',
      role: 'London criminal lawyer; guardian of Pip\u2019s fortune',
      body: 'Jaggers is the formidable Little Britain lawyer whose clients fill both the Old Bailey dock and the drawing rooms of Mayfair. He speaks in rehearsed evidentiary formulas, washes his hands obsessively between cases, and never admits to a fact he has not been compelled to hear. He administers Pip\u2019s allowance, employs Estella\u2019s mother Molly as a tamed housekeeper, and holds the secret of Estella\u2019s parentage. Dickens uses him to show how the legal system silently manages the fears of respectable society, and how power depends on the careful hoarding of unspeakable knowledge.',
    },
  ],
  themes: [
    {
      title: 'Social class and mobility',
      body: 'Great Expectations is Dickens\u2019s most sustained interrogation of the Victorian dream of rising above one\u2019s birth. Pip\u2019s journey from forge to gentleman\u2019s chambers in London maps the promises and disappointments of a society newly obsessed with self-improvement. Dickens sets the apparent refinement of Miss Havisham and Drummle against the quiet dignity of Joe and the convict-made wealth of Magwitch, and shows that class markers \u2014 accent, manners, hands, clothes \u2014 are performances that can be bought, learned and lost. The novel does not simply reject mobility; it asks what is destroyed on the way up. Pip becomes ashamed of the people who loved him first, and only when his expectations collapse can he begin to see that gentility was never the same thing as goodness.',
    },
    {
      title: 'Identity and self-knowledge',
      body: 'The retrospective first-person voice is the novel\u2019s great technical instrument: older Pip narrates younger Pip\u2019s choices with patient, unsparing self-judgement. This double perspective lets Dickens dramatise how a self is made out of shame, longing and half-told stories. Pip misreads his benefactor, misreads Estella, misreads Joe and misreads his own motives, and each revelation is also a moment of self-recognition. The bildungsroman form traditionally traces a young person\u2019s education into an authentic adult self; Dickens both honours and complicates that tradition by insisting that Pip\u2019s real education is the slow, painful process of learning who he actually is beneath his expectations.',
    },
    {
      title: 'Guilt and atonement',
      body: 'Guilt saturates the novel from its first pages, when a terrified Pip steals food from his sister\u2019s larder. That stolen pie, the hidden file, the lie to Joe \u2014 these childhood transgressions plant a moral unease that grows as Pip becomes a London gentleman funded by a hunted criminal. Dickens links Pip\u2019s private guilt to the wider machinery of Victorian criminal justice (Newgate, the hulks, transportation) and keeps returning Pip to the scene of his first crime. The novel\u2019s redemptive movement \u2014 nursing Magwitch in prison, accepting Joe\u2019s care, funding Herbert in secret, seeking out Biddy \u2014 is essentially an extended act of atonement. Pip cannot undo what he has done, but he can repay some of what he owes.',
    },
    {
      title: 'Appearance vs true worth',
      body: 'Dickens sets up a series of deliberate inversions: the brute gentleman (Drummle), the polite criminal (Magwitch), the poisonous lady (Miss Havisham), the uneducated moral hero (Joe). Every character who looks like the Victorian ideal of respectability is shown to be damaged or dangerous, while those the novel\u2019s society dismisses \u2014 a blacksmith, an orphan, a convict \u2014 carry its real moral weight. Pip is trained from the Satis House scene onwards to read people by their hands and their boots, and most of his suffering flows from that trained misreading. The novel\u2019s ethical work is to teach both Pip and the reader to look again.',
    },
    {
      title: 'Parenthood and family (Joe as moral centre)',
      body: 'Great Expectations is full of broken and improvised families: Pip and Mrs Joe, Miss Havisham and Estella, Jaggers and Molly, Magwitch and his absent daughter, Joe and Pip. Biological parenthood in the novel is almost always damaging; the relationships that save people are the chosen ones. Joe, who is not Pip\u2019s father and only his sister\u2019s husband, is the novel\u2019s clearest vision of parental love \u2014 patient, forgiving, refusing to judge. Magwitch\u2019s devotion to Pip, however distorted, belongs in the same moral family. By contrast, Miss Havisham\u2019s parenting of Estella is a deliberate cruelty, and the novel\u2019s closing chapters are partly a slow return to the one parent figure Pip has always had.',
    },
    {
      title: 'Ambition and disappointment',
      body: 'The title is ironic and mournful at once. Pip\u2019s "expectations" begin as a literal inheritance and come to stand for every hope Victorian readers had invested in education, capital and refinement. Dickens traces, in careful instalments, how those expectations corrupt Pip\u2019s relationships with Joe, Biddy and himself; he then breaks them open. The novel is unusual in its insistence that the collapse of expectations is also a kind of liberation. Only when Pip is penniless, ill and mourning Magwitch can he begin to live an actual life \u2014 working for a living, paying off debts, writing the book we are reading. Dickens\u2019s verdict on ambition is not simple condemnation but a warning that hopes pinned to other people\u2019s money and approval will always, in the end, disappoint.',
    },
  ],
  historicalContext: [
    'Dickens wrote Great Expectations between 1860 and 1861, at the height of Victorian debates about class, education and the making of a gentleman. The British class system of the mid-nineteenth century was stratified and publicly performed \u2014 through accent, clothing, handwriting, table manners and hands \u2014 but also newly permeable. Industrial wealth, colonial fortunes and railway capital were creating a cohort of men who had acquired money without inheriting status, and who wanted their sons educated out of the trades that produced them. Pip\u2019s story speaks directly to that anxiety: a boy of the forge being shaped into a chamber-suited gentleman on the income of a transported convict.',
    'The novel is also saturated with the realities of Victorian criminal justice. From the 1780s until 1868, convicted felons could be sentenced to transportation to the Australian colonies, and returning to Britain before the end of one\u2019s sentence was itself a capital offence. Magwitch\u2019s backstory \u2014 the prison hulks in the Thames estuary, the years of sheep-farming in New South Wales, the secret voyage home \u2014 reflects exactly the system Dickens knew from his journalism. Readers in 1861 would have understood that Magwitch risks hanging every day he spends in Pip\u2019s rooms, and that Pip\u2019s gentlemanly life is funded, quite literally, by colonial labour forced on a criminal underclass.',
    'Dickens\u2019s own trajectory shadows the novel. His father\u2019s imprisonment for debt in 1824 forced the twelve-year-old Dickens into a blacking factory, an experience of class humiliation he never wrote about directly but which informs Pip\u2019s shame on his first visit to Satis House. Dickens rose, through journalism and fiction, into a wealthy and nationally celebrated writer, and Great Expectations can be read as a very personal essay on what that rise costs. The novel is also part of the bildungsroman tradition \u2014 the "novel of education" popularised by Goethe, Austen and the Brontes \u2014 and is in close conversation with Dickens\u2019s own David Copperfield (1849\u201350), whose more affirmative treatment of self-making Great Expectations revises in a darker key.',
    'Finally, the novel set old rural England against new urban capital. The Kent marshes of Pip\u2019s childhood are semi-pre-industrial: forge, churchyard, tides, soldiers on the heath. London, when Pip arrives, is Newgate Prison, Little Britain, the Temple, the Thames busy with shipping \u2014 a city of lawyers, clerks, speculators and convicts. Dickens holds the two worlds in deliberate tension, and the book\u2019s final image of Pip back at the ruined Satis House gathers both into a single mournful landscape of what the century has cost.',
  ],
  quotations: [
    {
      quote: '"My father\'s family name being Pirrip, and my christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip."',
      who: 'Pip \u2014 Chapter 1',
      analysis:
        'The opening sentence establishes the first-person retrospective voice and dramatises self-making at the level of the name itself: Pip has, in a small way, already invented himself.',
    },
    {
      quote: '"Keep still, you little devil, or I\'ll cut your throat!"',
      who: 'Magwitch \u2014 Chapter 1',
      analysis:
        'Magwitch\u2019s terrifying first words cast him as the Gothic threat of the marshes, but the novel will later reframe this moment as the beginning of a long, hidden act of gratitude.',
    },
    {
      quote: '"Break their hearts, my pride and hope, break their hearts and have no mercy!"',
      who: 'Miss Havisham \u2014 Chapter 12',
      analysis:
        'The triple imperative exposes Miss Havisham\u2019s use of Estella as an instrument of revenge, and the word "pride" admits that she is investing her own wounded self in her adopted daughter.',
    },
    {
      quote: '"I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be."',
      who: 'Pip on Estella',
      analysis:
        'The insistent anaphora of "against" makes clear that Pip\u2019s love is self-destructive and chosen in defiance of his own judgement \u2014 a portrait of romantic obsession as a form of willed suffering.',
    },
    {
      quote: '"Ever the best of friends, ain\'t us, Pip?"',
      who: 'Joe Gargery',
      analysis:
        'Joe\u2019s repeated refrain is the novel\u2019s moral keynote: a constant, unconditional loyalty that Pip betrays in London and has to earn the right to hear again.',
    },
    {
      quote: '"I have been bent and broken, but \u2014 I hope \u2014 into a better shape."',
      who: 'Estella \u2014 closing chapter (revised ending)',
      analysis:
        'The metalworking image links Estella to the forge she has always despised and acknowledges that suffering has, at last, made her capable of feeling. The tentative "I hope" refuses full certainty.',
    },
    {
      quote: '"What larks, Pip!"',
      who: 'Joe Gargery',
      analysis:
        'Joe\u2019s cheerful catchphrase stands for a pre-ambition innocence Pip keeps trying to recover. Its return in the final chapters signals the possibility of restored simplicity and friendship.',
    },
    {
      quote: '"I am what you have made me."',
      who: 'Estella \u2014 Chapter 38',
      analysis:
        'Estella\u2019s cold verdict on her upbringing turns Miss Havisham\u2019s revenge back on her: the heartless girl is not a monster but a product, and responsibility lies with the parent, not the child.',
    },
    {
      quote: '"I saw no shadow of another parting from her."',
      who: 'Pip \u2014 closing line (revised ending)',
      analysis:
        'The famous ambiguous ending refuses a clean romantic resolution. The absence of a "shadow" is a negative image rather than a promise, leaving the future open between hope and doubt.',
    },
    {
      quote: '"I think it was the first time I had ever seen her with a look such as she gave me; the look of one who is recalling something she has been accustomed to despise."',
      who: 'Pip on Estella',
      analysis:
        'The layered perception \u2014 Pip observing Estella remembering \u2014 captures the retrospective narrator\u2019s technique and foreshadows Estella\u2019s eventual change.',
    },
    {
      quote: '"Pause you who read this, and think for a moment of the long chain of iron or gold, of thorns or flowers, that would never have bound you, but for the formation of the first link on one memorable day."',
      who: 'Pip \u2014 Chapter 9',
      analysis:
        'The older narrator addresses the reader directly. The four-part "chain" image (iron/gold, thorns/flowers) captures how a single meeting at Satis House determines the whole shape of Pip\u2019s life.',
    },
    {
      quote: '"Yes, dear Biddy, I have a very particular reason for wishing to be a gentleman."',
      who: 'Pip \u2014 Chapter 17',
      analysis:
        'The embarrassed euphemism "a very particular reason" is Pip confessing, without quite saying so, that his social ambition is driven by love of Estella \u2014 a confession Biddy immediately understands.',
    },
    {
      quote: '"Heaven knows we need never be ashamed of our tears, for they are rain upon the blinding dust of earth, overlying our hard hearts."',
      who: 'Pip \u2014 Chapter 19',
      analysis:
        'The older narrator\u2019s aphoristic reflection on leaving home for London blends natural imagery with moral insight and signals the mature perspective that judges the younger Pip\u2019s shame.',
    },
    {
      quote: '"So throughout life, our worst weaknesses and meannesses are usually committed for the sake of the people whom we most despise."',
      who: 'Pip',
      analysis:
        'A generalising maxim from the older narrator. Pip has learned that the meanness he showed Joe was driven by Estella\u2019s scorn \u2014 by caring for the judgement of people he should not have valued.',
    },
    {
      quote: '"He was a Tartar, and he had a court-yard in him, and a flag-staff, and his name was Drummle."',
      who: 'Herbert Pocket on Bentley Drummle',
      analysis:
        'Herbert\u2019s comic architectural metaphor makes Drummle a pompous fortress of a man. The joke conceals a real warning, since Drummle will later marry and brutalise Estella.',
    },
    {
      quote: '"You are in every line I have ever read."',
      who: 'Pip to Estella \u2014 Chapter 44',
      analysis:
        'A declaration of love as literary haunting: Estella has become part of how Pip reads the world. The quotation captures the novel\u2019s linking of love, reading and self-knowledge.',
    },
    {
      quote: '"Take another glass of wine, and excuse my mentioning that society as a body does not expect one to be so strictly conscientious in emptying one\'s glass, as to turn it bottom upwards with the rim on one\'s nose."',
      who: 'Herbert Pocket',
      analysis:
        'Herbert\u2019s gentle correction of Pip\u2019s table manners shows class being taught as etiquette, and shows friendship at its best: a correction offered with such tact it barely registers as one.',
    },
    {
      quote: '"O dear good Joe, whom I was so ready to leave and so unthankful to, I see you again, with your muscular blacksmith\'s arm before your eyes, and your broad chest heaving, and your voice dying away."',
      who: 'Pip \u2014 later reflection',
      analysis:
        'The older narrator\u2019s apostrophe to Joe \u2014 "O dear good Joe" \u2014 performs the very gratitude the younger Pip withheld, turning the prose itself into an act of late restitution.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'ge-1', question: 'What is the narrator\'s full name?', type: 'multiple-choice', options: ['Pip Gargery', 'Philip Pirrip', 'Philip Havisham', 'Philip Magwitch'], correctIndex: 1, explanation: 'The novel opens by telling us his family name is Pirrip and his Christian name Philip; his infant tongue could make only "Pip" of both.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'ge-2', question: 'Where does Pip first meet Magwitch?', type: 'multiple-choice', options: ['In London', 'On the Kent marshes', 'At Satis House', 'In Australia'], correctIndex: 1, explanation: 'Pip meets the escaped convict on the marshes near the churchyard on Christmas Eve, in the opening chapter.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'ge-3', question: 'Who raises Pip after his parents\' deaths?', type: 'multiple-choice', options: ['Miss Havisham', 'Joe and Mrs Joe Gargery', 'Mr Jaggers', 'Herbert Pocket'], correctIndex: 1, explanation: 'Pip is raised "by hand" by his sister Mrs Joe and her husband Joe Gargery, the village blacksmith.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'ge-4', question: 'What is the name of Miss Havisham\'s decaying house?', type: 'multiple-choice', options: ['Gad\'s Hill', 'Satis House', 'Chesney Wold', 'Bleak House'], correctIndex: 1, explanation: 'Miss Havisham lives at Satis House, where every clock is stopped at twenty to nine and her wedding breakfast is left rotting on the table.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'ge-5', question: 'Who is revealed to be Pip\'s real benefactor?', type: 'multiple-choice', options: ['Miss Havisham', 'Mr Jaggers', 'Abel Magwitch', 'Joe Gargery'], correctIndex: 2, explanation: 'The convict Magwitch, who made a fortune as a sheep-farmer in Australia, has secretly funded Pip\'s education as a gentleman in gratitude for the food Pip brought him on the marshes.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'ge-6', question: 'What is Joe Gargery\'s trade?', type: 'multiple-choice', options: ['Lawyer', 'Blacksmith', 'Clerk', 'Sailor'], correctIndex: 1, explanation: 'Joe is the village blacksmith, and Pip is apprenticed to him before leaving for London.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'ge-7', question: 'Who is Pip\'s closest friend in London?', type: 'multiple-choice', options: ['Bentley Drummle', 'Herbert Pocket', 'Mr Jaggers', 'Wemmick'], correctIndex: 1, explanation: 'Herbert Pocket, Miss Havisham\'s distant relative, lodges with Pip in London and nicknames him Handel.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'ge-8', question: 'What is the relationship between Estella and Magwitch?', type: 'multiple-choice', options: ['No relation', 'She is his daughter', 'She is his sister', 'She is his lawyer'], correctIndex: 1, explanation: 'The novel gradually reveals that Estella is the daughter of Magwitch and Molly, Jaggers\'s housekeeper. Estella herself is not told.', topic: 'Plot', difficulty: 'higher' },
  { id: 'ge-9', question: 'What genre does Great Expectations belong to?', type: 'multiple-choice', options: ['Epistolary novel', 'Bildungsroman', 'Detective novel', 'Gothic romance'], correctIndex: 1, explanation: 'It is a bildungsroman \u2014 a novel tracing a young protagonist\'s moral and social education from childhood to adulthood.', topic: 'Writer\'s Methods', difficulty: 'higher' },
  { id: 'ge-10', question: 'What happens to Miss Havisham near the end of the novel?', type: 'multiple-choice', options: ['She marries Pip', 'Her wedding dress catches fire and she later dies from her injuries', 'She moves to London', 'She leaves her fortune to Drummle'], correctIndex: 1, explanation: 'During Pip\'s confrontation with her, Miss Havisham\'s rotting wedding dress catches fire at the hearth. She is badly burned and dies soon after, having begged Pip\'s forgiveness.', topic: 'Plot', difficulty: 'higher' },
  { id: 'ge-11', question: 'How does Magwitch die?', type: 'multiple-choice', options: ['He is hanged', 'He escapes to America', 'He is fatally injured in the struggle with Compeyson and dies awaiting trial', 'He is poisoned by Jaggers'], correctIndex: 2, explanation: 'During the attempt to smuggle Magwitch out of England, he struggles with his old enemy Compeyson, who drowns. Magwitch is mortally injured, condemned to death, and dies in prison with Pip at his side.', topic: 'Plot', difficulty: 'higher' },
  { id: 'ge-12', question: 'What does Joe repeatedly call Pip throughout the novel?', type: 'multiple-choice', options: ['"Young master"', '"Old chap"', '"My boy"', '"Sir"'], correctIndex: 1, explanation: 'Joe\'s refrain is "Ever the best of friends, Pip, old chap," a phrase that marks the unchanging loyalty Pip strays from and returns to.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'ge-13', question: 'What does Miss Havisham mean by "Break their hearts, my pride and hope"?', type: 'multiple-choice', options: ['She is encouraging Estella to be kind', 'She is training Estella as an instrument of revenge against men', 'She is joking', 'She is quoting a poem'], correctIndex: 1, explanation: 'Miss Havisham has raised Estella explicitly to wound the hearts of men, in revenge for her own abandonment at the altar. The imperative is openly vengeful.', topic: 'Themes', difficulty: 'higher' },
  { id: 'ge-14', question: 'What is the significance of the marshes in the opening chapter?', type: 'multiple-choice', options: ['They are a pleasant holiday setting', 'They establish a bleak, liminal landscape where Pip\'s life is disrupted by a criminal encounter that will shape everything that follows', 'They are where Pip lives', 'They are entirely decorative'], correctIndex: 1, explanation: 'The marshes are Dickens\'s Gothic threshold: a bleak, open landscape between land and sea where law breaks down, convicts escape, and the encounter with Magwitch begins Pip\'s moral story.', topic: 'Writer\'s Methods', difficulty: 'higher' },
  { id: 'ge-15', question: 'How does Dickens use the retrospective first-person narration?', type: 'multiple-choice', options: ['It is purely for variety', 'The older Pip narrates with a judgemental self-awareness the younger Pip lacked, creating a double perspective that is one of the novel\'s central techniques', 'It is inconsistent and accidental', 'It is told by an anonymous narrator'], correctIndex: 1, explanation: 'Dickens splits the voice between older narrator and younger self, so that every episode carries both the experience and the mature judgement of it. This is how the novel achieves its characteristic moral depth.', topic: 'Writer\'s Methods', difficulty: 'grade-9' },
  { id: 'ge-16', question: 'What is the significance of Pip\'s London debts and membership of the Finches of the Grove?', type: 'multiple-choice', options: ['They are unimportant', 'They show the emptiness of Pip\'s gentlemanly life and the way social aspiration consumes money and friendship without producing any real work or purpose', 'They show his generosity', 'They are purely comic'], correctIndex: 1, explanation: 'Dickens uses the club and the debts to show that Pip\'s "expectations" deliver a hollow life of performance and consumption. He produces nothing, owes everyone, and only when he is ruined can he begin to work.', topic: 'Themes', difficulty: 'grade-9' },
  { id: 'ge-17', question: 'Why does Dickens make Magwitch the true benefactor rather than Miss Havisham?', type: 'multiple-choice', options: ['For shock value only', 'To expose the Victorian class system: the hunted criminal is a more loving parent than the respectable gentry, and Pip\'s gentlemanly status has been funded by colonial labour forced on a convict', 'Because he hated Miss Havisham', 'Because readers demanded it'], correctIndex: 1, explanation: 'The revelation inverts Victorian class assumptions. The respectable world Pip has learned to value turns out to have no claim on him, and the generosity that has paid for his gentility has come from a man the same world has cast out.', topic: 'Themes', difficulty: 'grade-9' },
  { id: 'ge-18', question: 'What are the two endings of Great Expectations?', type: 'multiple-choice', options: ['There is only one ending', 'An original bleaker ending in which Pip and Estella part for good, and a revised published ending in which Pip sees "no shadow of another parting" as he leaves Satis House with Estella', 'Two identical endings', 'A happy ending and a tragic ending with Pip\'s death'], correctIndex: 1, explanation: 'Dickens originally wrote a bleaker ending in which Pip meets Estella briefly in London and they part. On the advice of Bulwer-Lytton he revised it into the more ambiguous published ending at Satis House, which leaves a cautious, qualified hope.', topic: 'Context', difficulty: 'grade-9' },
  { id: 'ge-19', question: 'Why is the novel called "Great Expectations"?', type: 'multiple-choice', options: ['It is purely decorative', 'The title names both the legal term for inherited prospects and the broader Victorian idea of ambition. The novel treats "expectations" with deep irony, tracing how they corrupt Pip\'s relationships and finally collapse', 'It refers to Christmas', 'It is the name of a London school'], correctIndex: 1, explanation: '"Expectations" is Jaggers\'s legal term for Pip\'s anticipated inheritance, but Dickens enlarges it into a moral critique: the novel is about what hopes of status and money do to the people who hold them.', topic: 'Themes', difficulty: 'grade-9' },
  { id: 'ge-20', question: 'What is transportation and why is it central to the plot?', type: 'multiple-choice', options: ['It is a London transport system', 'It is the Victorian practice of shipping convicts to Australian penal colonies for long sentences; Magwitch has been transported for life, and returning to England is itself a capital offence, which is why his presence in London puts him in mortal danger', 'It is unimportant background', 'It is a legal system Dickens invented'], correctIndex: 1, explanation: 'Magwitch has been transported to Australia for life and has returned to see "his gentleman." Because unlicensed return from transportation was punishable by death, every day he spends in Pip\'s rooms risks the gallows. This historical fact drives the novel\'s final act.', topic: 'Context', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Social Class and Mobility', summary: 'The novel interrogates the Victorian dream of rising above one\'s birth and asks what is destroyed on the way up.', keyPoints: ['Pip\'s journey from forge to London gentleman', 'Class signalled by accent, hands, boots, manners', 'Joe\'s dignity vs Drummle\'s brutality exposes respectability as performance', 'Magwitch\'s convict-made wealth funds Pip\'s gentility', 'Pip\'s shame of Joe is the novel\'s moral wound'] },
  { topic: 'Identity and Self-Knowledge', summary: 'The retrospective first-person narration dramatises how a self is made out of shame, longing and half-told stories.', keyPoints: ['Double perspective of older narrator and younger self', 'Pip misreads benefactor, Estella, Joe and himself', 'Name "Pip" as early self-invention', 'The bildungsroman tradition revised in a darker key', 'Real education = learning who he truly is beneath his expectations'] },
  { topic: 'Guilt and Atonement', summary: 'Guilt saturates the novel from the stolen pie onwards, and its redemptive movement is essentially an extended act of atonement.', keyPoints: ['Childhood theft of food and file from Mrs Joe', 'Pip\'s London gentility funded by a hunted criminal', 'Nursing Magwitch in prison', 'Secretly funding Herbert\'s career', 'Returning to Joe and Biddy at the forge'] },
  { topic: 'Appearance vs True Worth', summary: 'Dickens sets up deliberate inversions: the brute gentleman, the polite criminal, the poisonous lady, the uneducated moral hero.', keyPoints: ['Drummle (gentleman, brute)', 'Magwitch (convict, loving father-figure)', 'Miss Havisham (respectable, destructive)', 'Joe (illiterate, truly gentlemanly)', 'Pip is trained to misread, and must learn to look again'] },
  { topic: 'Parenthood and Family', summary: 'Biological parenthood is almost always damaging; the relationships that save people are chosen ones, with Joe as the moral centre.', keyPoints: ['Mrs Joe\'s violent mothering of Pip', 'Miss Havisham\'s deliberate cruelty to Estella', 'Magwitch\'s hidden parental love for Pip', 'Joe as true father-figure', 'Jaggers\'s cold guardianship of Molly'] },
]

const ESSAY_PROMPTS = [
  'How does Dickens present the theme of social class in Great Expectations?',
  'How does Dickens use the character of Magwitch to challenge Victorian ideas of respectability?',
  'How does Dickens present guilt and atonement in Great Expectations?',
  'How does Dickens explore the relationship between Pip and Joe?',
  'How does Dickens use the character of Miss Havisham to explore the theme of the past?',
]

export default async function GreatExpectationsPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="Great Expectations \u2014 Complete GCSE Study Guide"
        description="In-depth study guide for Great Expectations covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Great Expectations", url: "https://theenglishhub.app/revision/texts/great-expectations" },
        ]}
      />
      <TextStudyHub
        textName="Great Expectations"
        textType="novel"
        examBoard="AQA"
        basePath="/revision/texts/great-expectations"
        subPages={[
          { id: 'chapters', href: '/revision/texts/great-expectations/chapters', icon: 'acts' as const, title: 'Chapter-by-Chapter', description: 'Key moments & quotes' },
          { id: 'characters', href: '/revision/texts/great-expectations/characters', icon: 'characters' as const, title: 'Characters', description: 'Full character guide' },
          { id: 'themes', href: '/revision/texts/great-expectations/themes', icon: 'themes' as const, title: 'Themes', description: 'Theme analysis' },
          { id: 'quotes', href: '/revision/texts/great-expectations/key-quotes', icon: 'quotes' as const, title: 'Key Quotes', description: 'Quotes with analysis' },
          { id: 'essays', href: '/revision/texts/great-expectations/essay-plans', icon: 'essays' as const, title: 'Essay Plans', description: 'GCSE essay plans' },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map(q => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Dickens present the theme of social class in Great Expectations?',
          'How does Dickens use the character of Magwitch to challenge Victorian ideas of respectability?',
          'How does Dickens present guilt and atonement in Great Expectations?',
          'How does Dickens explore the relationship between Pip and Joe?',
          'How does Dickens use the character of Miss Havisham to explore the theme of the past?',
        ]}
        flashcards={data.quotations.slice(0, 8).map(q => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Great Expectations"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>AI-assisted draft under expert review. Cross-check with your teacher&rsquo;s notes.</span>
      </div>
      <TextGuide data={data} />
    </>
  )
}
