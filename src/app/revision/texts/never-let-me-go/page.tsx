// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import StudyTools from '@/components/study/StudyTools'
import { LearningResourceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Never Let Me Go revision guide — themes, characters, key quotes — The English Hub',
    description: 'Never Let Me Go GCSE revision — Kazuo Ishiguro',
  },
  title: 'Never Let Me Go revision guide — themes, characters, key quotes — The English Hub',
  description:
    "Never Let Me Go GCSE revision — Kazuo Ishiguro's 2005 dystopian novel with plot, characters, themes, context and key quotes. Aligned to the AQA GCSE spec.",
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
    'Kazuo Ishiguro\u2019s quietly devastating novel is narrated by Kathy H., a thirty-one-year-old \u2018carer\u2019 looking back on her childhood at Hailsham, a mysterious English boarding school, and on her tangled friendships with Ruth and Tommy. Published in 2005 and shortlisted for the Booker Prize, the novel is written as a first-person retrospective monologue whose calm, almost clerical voice slowly reveals a horrifying truth: Kathy and her classmates are clones, raised to provide organ donations to the wider population and to \u2018complete\u2019 after three or four procedures. Ishiguro never explains the science and never shows an escape attempt; instead he folds the horror into the ordinary textures of school crushes, art lessons, petty jealousies and lost objects. The result is a novel that looks like a gentle memoir and works like a quiet indictment \u2014 of cloning, of institutional cruelty, and of how easily any society organises itself around the lives it would rather not see. It is an unusual text for GCSE study, but its spare prose, unreliable-sounding narrator and ethical weight make it richly rewarding.',
  quickInfo: {
    genre: 'Literary dystopia / Bildungsroman',
    setting: 'Alternative-history England, late 1990s',
    length: '~85,000 words, 23 chapters',
    published: '2005',
  },
  plotSummary: [
    'The novel opens in the late 1990s with Kathy H., now thirty-one, introducing herself as a \u2018carer\u2019 who has looked after donors for over eleven years. Her work is coming to an end: she will soon become a donor herself. From this point she begins a long, looping retrospective narration, returning to her childhood at Hailsham, a rural English boarding school. Hailsham is comfortable, creative and almost idyllic \u2014 the students paint, write poetry, play sport and are repeatedly told they are \u2018special\u2019 \u2014 but it is also strangely watched over by \u2018guardians\u2019 and visited by a mysterious woman the students call Madame, who takes away their best artwork for a rumoured \u2018Gallery\u2019. Kathy\u2019s childhood is dominated by her two closest friends: Ruth, a charismatic, manipulative girl who invents elaborate fantasies and arranges the social hierarchies of their dorm, and Tommy D., a gentle, clumsy boy mocked for being unable to draw and prone to eruptions of temper in the field behind the sports pavilion.',
    'The students absorb their situation in fragments. Miss Lucy, a sympathetic guardian, tries to tell them plainly that they have been created to donate their vital organs as adults and will never lead ordinary lives; she is quietly dismissed soon afterwards. Miss Emily, the headmistress, and the other guardians prefer the formulation that the students have been \u2018told and not told\u2019: the truth is given in pieces too small to absorb but too present to claim ignorance. In adolescence Ruth and Tommy become a couple, though Kathy has loved Tommy for years, and the emotional triangle between the three drives the novel. Kathy\u2019s own early sexual feelings, her secret playing of a cassette called \u2018Songs After Dark\u2019 with the track \u2018Never Let Me Go\u2019 on it, and her loss of that tape all become the recurring fixed points of a childhood she cannot stop turning over.',
    'In the middle section the students leave Hailsham for the Cottages, a transitional group home for older teenagers run by a vague figure called Keffers. Here the ex-Hailsham students meet \u2018veterans\u2019 from other institutions and try, awkwardly, to imitate adult life through television and second-hand novels. Ruth and Tommy\u2019s relationship turns cruel; Ruth humiliates Tommy in front of the veterans and tries, briefly, to attach herself to the idea of a \u2018possible\u2019 \u2014 the original person a clone might have been modelled from \u2014 after a sighting in a nearby town. The trip to Norfolk to find Ruth\u2019s possible is a disaster, and afterwards Kathy and Tommy begin to drift closer, though not close enough. Kathy leaves the Cottages early to begin training as a carer. Years pass. She becomes known as an unusually good carer, travelling alone between donation centres along flat English motorways, and loses touch with both Ruth and Tommy.',
    'The final section draws the three together again. Kathy becomes Ruth\u2019s carer after Ruth\u2019s second donation has gone badly. On a trip to see a beached fishing boat in a Norfolk field, Ruth apologises for keeping Kathy and Tommy apart and urges them to seek a rumoured \u2018deferral\u2019 \u2014 a belief among Hailsham students that couples who can prove they are truly in love will be granted extra years before donating. Ruth gives Kathy Madame\u2019s address. After Ruth \u2018completes\u2019 during her third donation, Kathy becomes Tommy\u2019s carer and they become lovers. Together they visit Madame, only to be confronted by Miss Emily, now elderly, who tells them that there are no deferrals and never were. Hailsham, she explains, was an experiment to prove that clones had souls; the artwork collected for the \u2018Gallery\u2019 was evidence offered to a doubting public. Most of society preferred not to look, and Hailsham has now closed. Tommy rages one last time in a dark field by the roadside, then goes quiet. He completes on his fourth donation. The novel ends with Kathy, alone, standing in a Norfolk field among the debris caught in a fence, imagining Tommy appearing on the horizon, before turning back to her car and driving to wherever she is supposed to be.',
  ],
  characters: [
    {
      name: 'Kathy H.',
      role: 'Narrator; carer nearing her own donations',
      body: 'Thoughtful, careful and almost unbearably reasonable, Kathy narrates the novel as a thirty-one-year-old looking back. Her voice is the book\u2019s central device: measured, self-correcting, scrupulously fair to Ruth and Tommy, and oddly incurious about the system that will kill her. She describes her own observational talent with quiet pride, and her identity as a \u2018good carer\u2019 is the only adult achievement the novel allows her. Ishiguro uses her restraint to generate the reader\u2019s horror: the fact that Kathy does not rage, does not run and does not question is the moral centre of the book, and asks the reader what they themselves have been taught to accept. Her love for Tommy, finally consummated but too late, is the small human fact she holds against the machinery of donation.',
    },
    {
      name: 'Tommy D.',
      role: 'Kathy\u2019s love; the boy who cannot draw',
      body: 'Gentle, literal-minded, easily bewildered and prone to violent tantrums as a child, Tommy is the novel\u2019s most transparent character. His inability to produce the creative art Hailsham prizes makes him the target of bullying, and his rages in the field are treated by the guardians as both a problem and a mystery. In adolescence Miss Lucy tells him his anger is not his fault and briefly frees him from the expectation of art, a kindness she later retracts. As an adult donor he produces intricate drawings of imaginary animals, which he and Kathy take to Madame as evidence of their love, only to discover the deferrals are a myth. His final rage in the field after leaving Madame\u2019s house is the novel\u2019s most exposed moment \u2014 the one instant in which the system\u2019s injustice is felt rather than absorbed \u2014 before he, too, goes quiet and completes.',
    },
    {
      name: 'Ruth',
      role: 'Kathy\u2019s best friend and rival',
      body: 'Charismatic, insecure, manipulative and acutely aware of how to command attention, Ruth is the novel\u2019s most painful character because Ishiguro understands her so well. At Hailsham she invents elaborate fictions \u2014 a secret guard around Miss Geraldine, a pencil case supposedly from a guardian \u2014 and at the Cottages she tries to reinvent herself by copying the mannerisms of the veterans and of American television. Her cruelty to Tommy, and her quiet work to keep Kathy and Tommy apart, is the wound the novel carries to the end. But her final apology on the Norfolk trip, and her gift of Madame\u2019s address, is one of the most moving gestures in contemporary English fiction: an ordinary friend trying, too late, to do the one right thing.',
    },
    {
      name: 'Miss Emily',
      role: 'Head Guardian of Hailsham',
      body: 'The head of Hailsham is austere, fair and deeply complicated. She believed in giving her students a protected childhood and genuinely fought to maintain Hailsham against a hostile public mood, but she also participated knowingly in the system that would consume them. Her long explanation in the penultimate chapter \u2014 that Hailsham existed to prove clones had souls, that the experiment failed, and that a \u2018new world came rapidly\u2019 \u2014 is the closest anyone comes to justifying what has been done. Ishiguro lets her be neither villain nor ally; she is the face of a liberal institution that tried to behave decently within an indecent structure.',
    },
    {
      name: 'Miss Lucy',
      role: 'Guardian who tried to tell the truth',
      body: 'The only guardian who seems unable to stomach the Hailsham policy of telling and not telling, Miss Lucy confronts the students with plain statements: their lives have already been decided, they will donate their organs, they will not become actors or work in supermarkets. Her most important intervention is with Tommy, whose rages she reinterprets as a reasonable response to being denied the truth. She is quietly dismissed for her honesty. Her brief presence in the novel functions as the road not taken \u2014 a reminder that clarity was possible and was refused.',
    },
    {
      name: 'Madame (Marie-Claude)',
      role: 'Collector of the students\u2019 art',
      body: 'A tense, elegant French woman who visits Hailsham to take away the students\u2019 best artwork for a \u2018Gallery\u2019, Madame is feared by the children because she plainly cannot bear to touch them. Much later Kathy and Tommy learn the truth: Madame and Miss Emily ran Hailsham together as an ethical experiment, and the Gallery existed to argue for the clones\u2019 humanity to sceptical officials and donors. Madame\u2019s horror at the children was not disgust but grief \u2014 she saw what was going to happen to them. Her tears when she watches young Kathy dance to the song \u2018Never Let Me Go\u2019, misreading the embrace as a mourning for a lost kinder world, is the novel\u2019s emotional hinge.',
    },
    {
      name: 'Miss Geraldine',
      role: 'Kathy and Ruth\u2019s favourite guardian',
      body: 'A warm, popular guardian at Hailsham whom the younger girls adore. Ruth leads an elaborate secret plot to \u2018protect\u2019 her from an imagined kidnapping threat, a game that reveals both Ruth\u2019s need for status among the other girls and the children\u2019s deep attachment to their guardians as substitute parents. Miss Geraldine barely speaks in the novel, but her mythologised presence shows how intensely the students invested in the adults who were raising them for slaughter.',
    },
    {
      name: 'Chrissie and Rodney',
      role: 'Veterans at the Cottages',
      body: 'An older clone couple already at the Cottages when the Hailsham students arrive, Chrissie and Rodney model a slightly pathetic adult life of cigarettes, magazines and rumours. They bring the deferral story to the group and coax Ruth, Kathy and Tommy on the Norfolk trip to find Ruth\u2019s \u2018possible\u2019. They are Ishiguro\u2019s portrait of what the students\u2019 futures actually look like: not tragic, not rebellious, but slightly dimmed \u2014 people going along, hoping for a reprieve that is never coming.',
    },
  ],
  themes: [
    {
      title: 'Mortality and acceptance',
      body: 'The novel\u2019s most disturbing question is why its clones do not run, fight or refuse. Ishiguro never lets his characters attempt escape, and the guardians\u2019 conditioning is so gentle that rebellion seems unavailable rather than forbidden. Kathy\u2019s voice absorbs the fact of her own coming death without protest, and this acceptance is the real horror. The novel uses the clones as an uncomfortable mirror: all readers, Ishiguro suggests, have been conditioned into some quiet compliance with their own mortality, and the difference between Kathy\u2019s situation and the reader\u2019s is smaller than it first appears.',
    },
    {
      title: 'Memory, time and narrative',
      body: 'Kathy\u2019s narration loops, corrects itself, digresses and returns. Her memories are offered as the main defence she has against the erasure coming for her: to remember Hailsham, Ruth and Tommy in detail is to refuse, briefly, the completion waiting for her. Ishiguro treats memory as both comfort and trap; Kathy cannot move forward because there is no forward to move to, and her novel-length act of recollection is also a form of not-living. The ordinary shape of a Bildungsroman \u2014 childhood, coming of age, adult self \u2014 is hollowed out by the fact that no adulthood is permitted.',
    },
    {
      title: 'Identity, soul and personhood',
      body: 'The central argument of the novel is whether the clones are fully human, and Ishiguro\u2019s answer is insistent: of course they are. But the novel is interested in who gets to decide. Hailsham was built on an experiment to prove that clones had souls \u2014 an experiment that, as Miss Emily admits, a largely uninterested public declined to care about. The question of what makes a life countable \u2014 art, love, memory, fear, jealousy \u2014 is precisely the question the novel answers by showing those qualities everywhere in its characters, while the society around them refuses to see them.',
    },
    {
      title: 'Love, friendship and loss',
      body: 'The triangle between Kathy, Ruth and Tommy is drawn with agonising ordinariness. It contains the usual jealousies of any teenage friendship group, and Ishiguro\u2019s point is that those ordinary feelings are exactly what prove the clones\u2019 humanity. Love in the novel is also an instrument of cruelty: the rumour of a deferral for true couples turns the most intimate feeling into an administrative claim, and the discovery that there is no deferral confirms that love cannot save them. Kathy\u2019s final reflection that she kept thinking of \u2018all the things that could have happened and didn\u2019t\u2019 is the novel\u2019s definition of grief.',
    },
    {
      title: 'Education, institutions and indoctrination',
      body: 'Hailsham is modelled on the English boarding-school tradition and on the post-war welfare state\u2019s mix of comfort and quiet control. It is genuinely kind: the students are fed, taught, praised, and protected from the worst knowledge of themselves. That kindness is the point of Ishiguro\u2019s critique. The students have been \u2018told and not told\u2019 \u2014 taught just enough to dimly know their futures but never enough to revolt \u2014 and the novel shows how an institution can perform care and destruction simultaneously. Hailsham\u2019s closure at the end of the book, and the implication that other clones are now raised in far worse conditions, refuses the reader the comfort of thinking the kinder version was enough.',
    },
    {
      title: 'Ethics of biotechnology',
      body: 'The novel was written during the early-2000s debate over stem-cell research and therapeutic cloning, but Ishiguro is not interested in taking sides on the science. He keeps the technology vague and offscreen to force the ethical question into the social and emotional foreground: who pays for progress, and who gets to look away? Miss Emily\u2019s phrase, \u2018a new world came rapidly\u2019, is the banal language of progress being used to cover a horror, and the novel\u2019s quiet indictment is of a society that accepts life-saving medicine without asking whose life has been converted into whose medicine.',
    },
  ],
  historicalContext: [
    'Kazuo Ishiguro was born in Nagasaki in 1954 and moved to England at the age of five when his oceanographer father took a post in Surrey. He grew up bilingual and culturally double, and his fiction has consistently explored memory, regret and the quiet complicity of ordinary people inside larger systems \u2014 the theme at the heart of The Remains of the Day (1989), for which he won the Booker Prize, and of An Artist of the Floating World (1986). Never Let Me Go was published in 2005 after more than a decade of false starts, shortlisted for the Booker, and Time named it the best novel of that year. Ishiguro was awarded the Nobel Prize in Literature in 2017 for what the citation called novels of \u2018great emotional force\u2019 that \u2018uncovered the abyss beneath our illusory sense of connection with the world.\u2019',
    'The novel is set in an alternative version of England stretching loosely from the 1950s to the late 1990s, in which a medical breakthrough made organ cloning possible shortly after the Second World War. Ishiguro keeps this history deliberately vague: there are no scenes of laboratories, no explanations of the science, and no government memos. What readers are given instead is the texture of a slightly shabby, recognisably English late twentieth century \u2014 cassette tapes, motorway service stations, flat Norfolk fields, boarding schools \u2014 into which an entire parallel underclass has been folded. The choice of a near-past setting rather than a futuristic one makes the novel feel not speculative but accusatory: this is not what might happen, but what could already have happened if the moral argument had gone the other way.',
    'Hailsham draws on the long English tradition of the boarding school, from Thomas Arnold\u2019s Rugby to the protected childhoods of mid-century public schools, and on the post-war welfare state\u2019s institutional mix of genuine care and quiet control. Readers familiar with boarding-school fiction will recognise the tropes \u2014 the games field, the sports pavilion, the favourite teacher, the Exchanges and art lessons \u2014 and Ishiguro uses that familiarity to make the revelation of what Hailsham actually is more devastating. The setting also draws on the British experience of the NHS: a system whose daily ordinariness, and whose ability to make medical need feel like ordinary life, becomes harder to read innocently once the novel\u2019s premise is understood.',
    'Never Let Me Go arrived in the middle of an intense public debate. In the late 1990s and early 2000s, the cloning of Dolly the sheep (1996), the Human Fertilisation and Embryology (Research Purposes) Regulations (2001), and controversies over stem-cell research placed questions of biotechnology, consent and personhood at the centre of British public life. Ishiguro\u2019s novel does not argue with that debate on its own terms; instead it asks what kind of society would be required to make such technologies routine, and how ordinary people \u2014 teachers, carers, patients, readers \u2014 would end up complicit. The book has been widely taught alongside Mary Shelley\u2019s Frankenstein and Aldous Huxley\u2019s Brave New World, but Ishiguro\u2019s subtle realism, his refusal of heroics, and his first-person retrospective voice mark it as a distinctively twenty-first-century dystopia: one without an escape plot, because in Ishiguro\u2019s moral vision the absence of escape is the whole point.',
  ],
  quotations: [
    {
      quote:
        '"My name is Kathy H. I\'m thirty-one years old, and I\'ve been a carer now for over eleven years."',
      who: 'Kathy \u2014 Chapter 1',
      analysis:
        'The opening sentence introduces the flat, CV-like voice Ishiguro uses throughout the novel. The single-letter surname and the bureaucratic job title \u2018carer\u2019 already hint that Kathy belongs to a category rather than a family, and the horror of the book will hide in plain sight inside this matter-of-fact tone.',
    },
    {
      quote:
        '"You\'ve been told and not told. You\'ve been told, but none of you really understand."',
      who: 'Miss Lucy \u2014 Chapter 7',
      analysis:
        'Miss Lucy\u2019s diagnosis of the students\u2019 condition is also the novel\u2019s diagnosis of complicity. Hailsham\u2019s central cruelty is informational: the truth is given in pieces too small to absorb but too present to allow later claims of ignorance. The phrase becomes a moral test the reader, too, has to apply to their own knowledge of suffering.',
    },
    {
      quote:
        "\"Your lives are set out for you. You'll become adults, then before you're old, before you're even middle-aged, you'll start to donate your vital organs.\"",
      who: 'Miss Lucy \u2014 Chapter 7',
      analysis:
        'The only moment in the novel when the truth is spoken plainly. Ishiguro\u2019s chilling choice is to have this speech change almost nothing: the students absorb it, Miss Lucy is dismissed, and life continues. The sentence shows how little information alone can do against institutional conditioning.',
    },
    {
      quote:
        '"We took away your art because we thought it would reveal your souls. Or to put it more finely, we did it to prove you had souls at all."',
      who: 'Miss Emily \u2014 Chapter 22',
      analysis:
        'Miss Emily\u2019s revelation that Hailsham was an experiment to argue for the clones\u2019 humanity turns every art lesson in the novel retrospectively into evidence in a legal case. The fact that the soul of a child had to be proven to exist \u2014 and that most of society declined to be convinced \u2014 is Ishiguro\u2019s quiet moral verdict.',
    },
    {
      quote: '"Never let me go. Oh baby, baby, never let me go."',
      who: 'Song lyric, quoted by Kathy \u2014 Chapter 6',
      analysis:
        'The line Kathy cradles against her chest as a child, pretending to hold a baby she cannot have, provides the novel\u2019s title and its emotional centre. The fact that it is a misheard lyric from a pop song about romantic longing, reinterpreted by a child as maternal loss, captures the book\u2019s method: ordinary cultural fragments carrying an enormous, displaced grief.',
    },
    {
      quote: '"I kept thinking about all the things that could have happened and didn\'t."',
      who: 'Kathy \u2014 Chapter 23',
      analysis:
        'Kathy\u2019s definition of grief: not the loss of what she had but of what she was never going to have. The sentence translates the dystopian premise into the most ordinary human emotion and is the reason the novel reaches readers who do not usually respond to science-fiction plots.',
    },
    {
      quote:
        '"I saw a new world coming rapidly. More scientific, efficient, yes. More cures for the old sicknesses. Very good. But a harsh, cruel world."',
      who: 'Miss Emily \u2014 Chapter 22',
      analysis:
        'The banal language of progress \u2014 \u2018scientific\u2019, \u2018efficient\u2019, \u2018cures\u2019 \u2014 is being used here to justify an atrocity. Ishiguro lets the defender of Hailsham condemn the wider society without ever defending her own participation in it, and the reader is left to weigh how much kinder her experiment really was.',
    },
    {
      quote:
        '"I just waited a bit, then turned back to the car, to drive off to wherever it was I was supposed to be."',
      who: 'Kathy \u2014 final lines',
      analysis:
        'The novel\u2019s closing refusal of melodrama. Kathy imagines Tommy appearing on the horizon, does not see him, and returns to the schedule. The flatness of the final clause \u2014 \u2018wherever it was I was supposed to be\u2019 \u2014 is the whole book compressed: a life entirely scheduled by someone else, accepted without protest.',
    },
    {
      quote:
        '"I can\'t remember whether we were punished or not. It probably didn\'t feel important."',
      who: 'Kathy \u2014 Chapter 3',
      analysis:
        'A small characteristic example of Kathy\u2019s narration: correcting herself in real time, dismissing her own confusion, trusting the reader to assemble the scene from incomplete fragments. Ishiguro uses this hesitancy to suggest that the reliability of Kathy\u2019s memory is less important than the shape of her attention.',
    },
    {
      quote: '"Poor creatures. What did we do to you? With all our schemes and plans?"',
      who: 'Madame \u2014 Chapter 22',
      analysis:
        'Madame\u2019s lament is the only moment a figure of authority addresses the clones as victims to their face. The phrase \u2018poor creatures\u2019 is loaded: it expresses real sympathy but also, perhaps involuntarily, reproduces the language that placed them outside full humanity in the first place.',
    },
    {
      quote:
        '"I don\'t know how it was where you were, but at Hailsham we had to have some form of medical almost every week."',
      who: 'Kathy \u2014 Chapter 2',
      analysis:
        'The throwaway mention of constant medicals is planted early and only acquires its full meaning later, when the reader understands that the bodies being monitored are being grown for harvest. Ishiguro\u2019s technique is to let such details sit in plain view for chapters before their weight is revealed.',
    },
    {
      quote: '"The problem, as I see it, is that you\'ve been told and not told."',
      who: 'Miss Lucy \u2014 Chapter 7',
      analysis:
        'A second occurrence of the formulation that becomes the moral axis of the novel. Ishiguro returns to the phrase because he wants the reader to return to it: it is a test applied as much to society outside the book as to Hailsham inside it.',
    },
    {
      quote:
        '"It had never occurred to me that our lives, which had been so closely interwoven, could unravel with such speed."',
      who: 'Kathy \u2014 Chapter 17',
      analysis:
        'Kathy\u2019s reflection as the three friends disperse from the Cottages registers the first adult loss of her life. The verb \u2018unravel\u2019 gestures at the novel\u2019s larger pattern \u2014 lives that were always going to come apart on schedule \u2014 but Kathy herself feels the parting as ordinary friendship loss, which is precisely Ishiguro\u2019s point.',
    },
    {
      quote: '"Tommy, in his rage, seemed not to see me at all."',
      who: 'Kathy \u2014 Chapter 23',
      analysis:
        'After the visit to Madame, Tommy\u2019s final tantrum in the dark field is the one place in the novel where the injustice of the characters\u2019 situation becomes physical. Ishiguro deliberately contains the outburst \u2014 it passes, Tommy quietens, Kathy drives him home \u2014 and the containment is exactly the horror of what the system does to rage.',
    },
    {
      quote:
        '"We didn\'t have the Gallery to prove you had souls. We had the Gallery to see if you had souls at all."',
      who: 'Miss Emily \u2014 Chapter 22',
      analysis:
        'Miss Emily\u2019s half-correction is crucial: she moves from the kinder framing (proving what was assumed) to the harsher one (testing for what was doubted). The line exposes how conditional the whole Hailsham project was, and how little the students could have relied on the adults\u2019 good opinion for their lives.',
    },
    {
      quote:
        '"Hailsham shut down a couple of years ago. They\'re selling off the property in separate lots now."',
      who: 'Miss Emily \u2014 Chapter 22',
      analysis:
        'The revelation that Hailsham itself is gone, and that the less-kind institutions continue, denies the reader even the comfort of thinking the experiment is still running somewhere. Progress in the novel moves in only one direction: towards harsher conditions, not softer ones.',
    },
    {
      quote: '"The memories I value most, I don\'t ever see them fading."',
      who: 'Kathy \u2014 Chapter 23',
      analysis:
        'Kathy\u2019s claim about memory, placed close to the end of the novel, is both defiance and delusion. Her memories cannot last because she cannot last, but the claim is offered anyway, and the reader is left holding it for her. The sentence is a small statement of what the novel itself has been doing for twenty-three chapters.',
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
      <LearningResourceJsonLd
        name="Never Let Me Go revision guide"
        description="GCSE-aligned study guide for Never Let Me Go covering plot, characters, themes, key quotations, historical context and exam essay plans."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/revision/texts/never-let-me-go"
        about="Never Let Me Go"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Never Let Me Go',
            url: 'https://theenglishhub.app/revision/texts/never-let-me-go',
          },
        ]}
      />
      <StudyTools textName="Never Let Me Go" textType="novel" examBoard="AQA" />
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
