import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import { DeepDiveSection } from '../_components/deep-dive-section'

export const metadata: Metadata = {
  title: 'Strange Case of Dr Jekyll and Mr Hyde — Study Guide | The English Hub',
  description:
    'Comprehensive GCSE study guide for Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson: plot summary, characters, themes, context and 20+ key quotations with analysis.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde',
  },
}

const data: TextGuideData = {
  title: 'Strange Case of Dr Jekyll and Mr Hyde',
  author: 'Robert Louis Stevenson',
  year: '1886',
  category: 'Novella',
  badge: 'AQA / Edexcel / OCR / Eduqas',
  intro:
    'Robert Louis Stevenson\'s Gothic novella explores the duality of human nature through the respectable Dr Henry Jekyll and his violent alter ego Mr Edward Hyde. Written in just three days during a fever dream, the story unfolds as a mystery narrated largely through the perspective of the lawyer Gabriel Utterson, who gradually uncovers the terrifying truth behind Jekyll\'s relationship with the sinister Hyde.',
  quickInfo: {
    genre: 'Gothic novella / horror',
    setting: 'London, late Victorian era',
    length: '10 chapters (~25,000 words)',
    published: '1886',
  },

  // ── Plot Summary (all 10 chapters) ─────────────────────────────────────────
  plotSummary: [
    'The novella opens with the lawyer Mr Utterson and his cousin Richard Enfield walking past a mysterious door. Enfield recounts how he once saw a small, deformed man trample a young girl in the street and then disappear through that very door, returning with a cheque signed by the respectable Dr Henry Jekyll. Utterson, troubled, reads Jekyll\'s will and discovers that everything is left to a man called Edward Hyde. He visits Dr Lanyon, an old friend of Jekyll\'s, who dismisses Jekyll\'s recent scientific work as "unscientific balderdash." Utterson stakes out the door and finally meets Hyde, finding him inexplicably repulsive. Jekyll reassures Utterson that Hyde is under control and asks him to honour the will.',

    'Nearly a year later, a maidservant witnesses Hyde brutally murder Sir Danvers Carew, a respected MP, beating him to death with a heavy cane. Utterson leads police to Hyde\'s Soho lodgings, which are ransacked but abandoned. Jekyll swears he is done with Hyde, produces a letter from Hyde, and seems to return to his old sociable self. However, Utterson\'s clerk Guest notices that Hyde\'s handwriting is almost identical to Jekyll\'s. Months of normality follow until Jekyll suddenly shuts himself away again, refusing all visitors.',

    'Dr Lanyon falls gravely ill and dies, leaving Utterson a sealed letter not to be opened until Jekyll\'s death or disappearance. Jekyll\'s butler Poole arrives at Utterson\'s home in a panic: the voice behind the locked laboratory door no longer sounds like his master. They break down the door together and find Hyde\'s body on the floor, dead by suicide, dressed in Jekyll\'s oversized clothes. Jekyll is nowhere to be found.',

    'The final two chapters reveal the full truth. Lanyon\'s letter describes how he witnessed Hyde drink a potion and transform into Jekyll before his eyes \u2014 a shock so profound it killed him. Jekyll\'s own "Full Statement of the Case" explains everything: he created a potion to separate his good and evil natures, relishing the freedom of living as Hyde without moral consequence. Over time the transformations became involuntary, Hyde grew stronger, and Jekyll could no longer control the change. Trapped and running out of the crucial salt needed for the potion, Jekyll writes his confession knowing that by the time it is read, Hyde will have taken over permanently.',
  ],

  // ── Characters ─────────────────────────────────────────────────────────────
  characters: [
    {
      name: 'Dr Henry Jekyll',
      role: 'Respected physician and scientist',
      body: 'Jekyll is a wealthy, well-regarded doctor who has long felt burdened by the need to maintain a respectable public image while suppressing his darker desires. He creates the transformative potion not out of pure evil but from a sincere, if dangerously arrogant, belief that the two sides of human nature can be separated. His tragedy lies in his inability to control the monster he has unleashed. Stevenson uses Jekyll to explore how Victorian society\'s demand for respectability can itself become a destructive force, driving people towards secret transgression rather than honest self-knowledge.',
    },
    {
      name: 'Mr Edward Hyde',
      role: 'Jekyll\'s dark alter ego',
      body: 'Hyde is younger, smaller, and filled with pure malice. Every character who meets him feels an instinctive revulsion they cannot quite explain \u2014 Enfield calls it "something downright detestable," and Utterson describes "Satan\'s signature" on his face. Hyde represents the primal, id-driven self freed from conscience and social restraint. Significantly, he grows larger and stronger as the novella progresses, suggesting that evil, once indulged, becomes increasingly dominant. His violence escalates from trampling a child to the frenzied murder of Sir Danvers Carew.',
    },
    {
      name: 'Mr Gabriel John Utterson',
      role: 'Lawyer and narrator figure',
      body: 'Utterson is the lens through which the reader experiences the mystery. He is rational, loyal, and deeply committed to propriety, yet he is also genuinely compassionate. His determination to protect Jekyll\'s reputation \u2014 even when the evidence points towards something terrible \u2014 mirrors the wider Victorian tendency to prioritise outward respectability over uncomfortable truths. Stevenson makes Utterson deliberately ordinary so that the Gothic horror strikes harder against a background of measured, lawyerly calm.',
    },
    {
      name: 'Dr Hastie Lanyon',
      role: 'Jekyll\'s former friend and fellow physician',
      body: 'Lanyon is a conventional man of science who dismissed Jekyll\'s experiments as "too fanciful." When he witnesses Hyde\'s transformation into Jekyll, the shock is so total that it kills him within weeks. Lanyon represents the limits of rational Victorian science: he can accept no framework for what he has seen. His death dramatises the idea that some knowledge is genuinely dangerous and that confronting the truth of human duality can be fatal.',
    },
    {
      name: 'Richard Enfield',
      role: 'Utterson\'s cousin and walking companion',
      body: 'Enfield is a man-about-town who witnesses Hyde trampling the young girl in the opening chapter. His role is primarily structural: he introduces the mystery and models the Victorian gentleman\'s instinct to suppress scandalous knowledge. His agreement with Utterson to "never refer to this again" after their first conversation reflects the culture of silence and repression that pervades the novella.',
    },
  ],

  // ── Themes ─────────────────────────────────────────────────────────────────
  themes: [
    {
      title: 'Duality of human nature',
      body: 'The central theme of the novella is that every human being contains both good and evil impulses. Jekyll describes man as "not truly one, but truly two," and his experiment is an attempt to separate these warring elements. Stevenson suggests that duality is not a flaw to be cured but a fundamental condition of being human. The horror arises not from Hyde\'s existence but from Jekyll\'s belief that he can neatly divide the self, when in reality the two sides are inseparable. The novella warns that denying one half of our nature only makes it more dangerous.',
    },
    {
      title: 'Good versus evil',
      body: 'Hyde embodies pure, undiluted evil \u2014 he tramples a child, murders an old man, and feels no remorse. Yet Stevenson complicates a simple moral reading: Jekyll is not purely good. He admits to "a certain impatient gaiety of disposition" and acknowledges that he enjoyed the freedom Hyde gave him. The novella asks whether goodness maintained only by repression is genuine goodness at all, and whether evil is something external or something that lives within every apparently respectable person.',
    },
    {
      title: 'Repression and Victorian hypocrisy',
      body: 'Almost every character in the novella is engaged in suppressing knowledge, desire, or scandal. Utterson refuses to investigate too deeply; Enfield agrees never to speak of what he saw; Jekyll hides his pleasures behind a mask of philanthropy. Stevenson portrays a society in which reputation matters more than truth, and in which the pressure to appear morally spotless actually creates the conditions for secret vice. Jekyll\'s potion is, in one reading, simply a chemical version of the double life many Victorian gentlemen already led.',
    },
    {
      title: 'Science and religion',
      body: 'Jekyll\'s experiment represents a transgressive form of science that trespasses into territory traditionally belonging to God. Lanyon condemns it as "unscientific balderdash," but the real danger is not bad method \u2014 it is moral overreach. Written in the wake of Darwin\'s Origin of Species (1859), the novella taps into anxieties about what science might reveal about human nature. Hyde\'s ape-like appearance and animal ferocity invoke fears of evolutionary regression, suggesting that beneath the civilised surface lurks something primitive and bestial.',
    },
    {
      title: 'Secrecy and reputation',
      body: 'The novella is structured around secrets: locked doors, sealed letters, wills that must not be questioned, and confessions read only after death. The fog-shrouded London setting mirrors this culture of concealment. Every gentleman in the story prioritises discretion over truth, and the narrative itself withholds its central revelation until the final pages. Stevenson uses this structure to argue that a society obsessed with reputation inevitably produces monsters, because the things people refuse to acknowledge do not disappear \u2014 they grow stronger in the dark.',
    },
  ],

  // ── Historical Context ─────────────────────────────────────────────────────
  historicalContext: [
    'Stevenson wrote the novella in 1885 during a period of intense anxiety about respectability in Victorian Britain. The upper and middle classes placed enormous value on moral propriety, self-discipline, and outward appearances. Gentlemen were expected to be paragons of virtue, yet the period was also marked by widespread hypocrisy: prostitution, opium dens, and underground vice flourished behind the respectable facades of London. Jekyll\'s double life directly mirrors this social reality, and Stevenson uses the Gothic genre to dramatise the psychological cost of living under such rigid moral expectations.',

    'The Victorian era was shaped by rapid scientific progress and the profound cultural shock of Charles Darwin\'s theory of evolution by natural selection, published in On the Origin of Species in 1859. Darwin\'s work suggested that humans were not divinely created but had evolved from animals, a notion that terrified many Victorians. Hyde\'s frequent association with animalistic imagery \u2014 he is described as "ape-like," moving with "extraordinary quickness," and snarling like a creature \u2014 reflects fears that the beast within could resurface at any time. Stevenson taps into the anxiety that civilisation is only a thin veneer over humanity\'s primitive nature.',

    'The novella also engages with contemporary debates about the nature of the mind. Sigmund Freud\'s theories of the id, ego, and superego would not be published until later, but Stevenson anticipates them remarkably. Jekyll\'s experiment can be read as an attempt to liberate the id (instinctual desire) from the superego (social conscience). The idea that the human psyche contains warring elements was gaining traction in the 1880s, and Stevenson\'s novella gave it its most memorable literary form.',

    'As a work of Gothic fiction, the novella draws on a tradition stretching back to Horace Walpole, Mary Shelley, and Edgar Allan Poe. It uses classic Gothic conventions \u2014 transformation, doubling, darkness, fog, locked rooms, and the grotesque \u2014 but relocates them from remote castles to the heart of respectable London. This urban Gothic setting makes the horror more unsettling because it is closer to the reader\'s own world. The fog-choked streets, the sinister back door, and the potion that alters the body all contribute to a sense that horror is not exotic or distant but domestic and inescapable.',
  ],

  // ── Key Quotations (20+) ───────────────────────────────────────────────────
  quotations: [
    {
      quote: '"If he be Mr Hyde, I shall be Mr Seek."',
      who: 'Utterson',
      analysis:
        'A pun that establishes Utterson as the detective figure driving the narrative. It also foreshadows the idea that seeking hidden truths is dangerous in a society built on concealment.',
    },
    {
      quote: '"I learned to recognise the thorough and primitive duality of man."',
      who: 'Jekyll (Full Statement)',
      analysis:
        'Jekyll\'s key philosophical insight and the thesis of the novella. The word "primitive" links duality to something primal and unavoidable, not a modern corruption.',
    },
    {
      quote: '"Man is not truly one, but truly two."',
      who: 'Jekyll (Full Statement)',
      analysis:
        'The most concise expression of the novella\'s central theme. Jekyll goes further to speculate that man may eventually be known as "a mere polity of multifarious, incongruous and independent denizens," suggesting identity is even more fragmented than a simple binary.',
    },
    {
      quote: '"I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse."',
      who: 'Jekyll (Full Statement)',
      analysis:
        'Demonstrates the gradual loss of control. The passive construction ("losing hold," "becoming incorporated") suggests Hyde is not something Jekyll does but something that happens to him, reflecting addiction and moral decline.',
    },
    {
      quote: '"He is not easy to describe. There is something wrong with his appearance; something displeasing, something downright detestable."',
      who: 'Enfield',
      analysis:
        'The difficulty of describing Hyde is a recurring motif. Evil in the novella resists rational categorisation, reflecting Victorian anxiety about threats that cannot be named or classified.',
    },
    {
      quote: '"I never saw a man I so disliked, and yet I scarce know why."',
      who: 'Enfield',
      analysis:
        'Hyde provokes instinctive, visceral revulsion that rational language cannot capture. Stevenson suggests that people recognise evil intuitively even when they cannot articulate it.',
    },
    {
      quote: '"Satan\'s signature upon a face."',
      who: 'Utterson',
      analysis:
        'Religious imagery frames Hyde as diabolical. The metaphor of a "signature" implies that evil is inscribed on the body, making the physical a map of the moral \u2014 a common Victorian belief in physiognomy.',
    },
    {
      quote: '"The large handsome face of Dr Jekyll grew pale to the very lips, and there came a blackness about his eyes."',
      who: 'Narrator',
      analysis:
        'Physical description signals inner turmoil. The shift from "handsome" to "pale" and "blackness" mirrors the duality theme, suggesting Hyde lurks just beneath Jekyll\'s composed exterior.',
    },
    {
      quote: '"All human beings, as we meet them, are commingled out of good and evil."',
      who: 'Utterson',
      analysis:
        'Utterson\'s rational version of the duality theme. The word "commingled" (mixed together) is crucial: unlike Jekyll, Utterson understands that good and evil cannot be neatly separated.',
    },
    {
      quote: '"I bring the life of that unhappy Henry Jekyll to an end."',
      who: 'Jekyll (Full Statement)',
      analysis:
        'Jekyll refers to himself in the third person, showing that by the end he sees himself and Hyde as truly separate beings. The word "unhappy" carries enormous pathos.',
    },
    {
      quote: '"With ape-like fury, he was trampling his victim under foot and hailing down a storm of blows."',
      who: 'Narrator (the Carew murder)',
      analysis:
        'The simile "ape-like" connects Hyde to Darwinian fears of evolutionary regression. The extreme violence \u2014 "trampling" and "storm of blows" \u2014 shows Hyde\'s savagery escalating beyond control.',
    },
    {
      quote: '"The door, which was equipped with neither bell nor knocker, was blistered and distained."',
      who: 'Narrator (opening chapter)',
      analysis:
        'The back door to Jekyll\'s laboratory symbolises the hidden, disreputable side of a respectable life. Its physical neglect mirrors the moral decay that Hyde represents.',
    },
    {
      quote: '"If I am the chief of sinners, I am the chief of sufferers also."',
      who: 'Jekyll',
      analysis:
        'Jekyll casts himself as both villain and victim, seeking sympathy. The biblical echo of "chief of sinners" (from St Paul) elevates the confession to a spiritual crisis while also revealing Jekyll\'s self-pity.',
    },
    {
      quote: '"O God!" I screamed, and "O God!" again and again.',
      who: 'Lanyon (narrative letter)',
      analysis:
        'Lanyon\'s repetition and exclamation marks convey the total collapse of his rational worldview. Witnessing the transformation destroys his faith in the ordered, scientific universe he believed in.',
    },
    {
      quote: '"I felt younger, lighter, happier in body."',
      who: 'Jekyll (Full Statement, describing becoming Hyde)',
      analysis:
        'The initial pleasure of transformation mirrors the seductive appeal of transgression. The positivity of "younger, lighter, happier" makes Hyde\'s liberation feel genuinely attractive, which is precisely why it is so dangerous.',
    },
    {
      quote: '"This was the shocking thing; that the slime of the pit seemed to utter cries and voices."',
      who: 'Jekyll (Full Statement)',
      analysis:
        'Biblical imagery of Hell ("the slime of the pit") describes Hyde\'s nature. The verb "utter" gives the evil agency and voice, suggesting it is alive and demanding expression.',
    },
    {
      quote: '"He had always been known for charities; he was now no less distinguished for religion."',
      who: 'Narrator',
      analysis:
        'Describes Jekyll\'s attempts to compensate for Hyde\'s crimes through exaggerated virtue. The irony highlights Victorian hypocrisy: public goodness is used to conceal private sin.',
    },
    {
      quote: '"I had voluntarily stripped myself of all those balancing instincts by which even the worst of us continues to walk with some degree of steadiness among temptations."',
      who: 'Jekyll (Full Statement)',
      analysis:
        'Jekyll acknowledges that the potion removed his conscience entirely, not just his inhibitions. The metaphor of "balancing instincts" frames morality as equilibrium rather than simple goodness, reinforcing the duality theme.',
    },
    {
      quote: '"The fog still slept on the wing above the drowned city."',
      who: 'Narrator',
      analysis:
        'Pathetic fallacy creates a suffocating Gothic atmosphere. The personified fog "sleeping" over a "drowned" city suggests a London submerged in secrecy, unable to see clearly \u2014 mirroring the characters\' moral blindness.',
    },
    {
      quote: '"It was Hyde, after all, and Hyde alone, that was guilty."',
      who: 'Jekyll (Full Statement)',
      analysis:
        'Jekyll tries to absolve himself by externalising blame onto Hyde, but Stevenson makes clear this is self-deception. The novella\'s moral force depends on the reader understanding that Jekyll and Hyde are the same person.',
    },
    {
      quote: '"The moment I choose, I can be rid of Mr Hyde."',
      who: 'Jekyll',
      analysis:
        'Dramatic irony: Jekyll believes he is in control, but the reader eventually learns that Hyde cannot be dismissed at will. This overconfidence is Jekyll\'s tragic flaw and echoes the hubris of classical tragedy.',
    },
    {
      quote: '"He put the glass to his lips and drank at one gulp... and there before my eyes \u2014 pale and shaken, and half fainting \u2014 there stood Henry Jekyll!"',
      who: 'Lanyon (narrative letter)',
      analysis:
        'The climactic transformation scene. The dashes and breathless syntax convey Lanyon\'s horror. The visual shock of watching Hyde become Jekyll destroys Lanyon\'s entire understanding of reality.',
    },
    {
      quote: '"Think of it \u2014 I did not even exist!"',
      who: 'Jekyll (Full Statement, on Hyde\'s legal non-existence)',
      analysis:
        'Hyde has no social identity, birth certificate, or history. He exists outside the legal and social frameworks that govern Victorian life, making him literally unaccountable \u2014 a walking embodiment of the freedom from consequence that Jekyll craves.',
    },
  ],
}

export default async function JekyllAndHydePage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <DeepDiveSection
        links={[
          {
            href: '/revision/texts/jekyll-and-hyde/chapters',
            icon: 'acts',
            title: 'Chapter-by-Chapter Analysis',
            description: 'Detailed breakdown of each chapter with key moments, quotes and analysis.',
          },
          {
            href: '/revision/texts/jekyll-and-hyde/essay-plans',
            icon: 'essays',
            title: 'Essay Plans',
            description: 'Ready-made GCSE essay plans with thesis statements, paragraphs and evidence.',
          },
          {
            href: '/revision/texts/jekyll-and-hyde/key-quotes',
            icon: 'quotes',
            title: 'Key Quotes Bank',
            description: 'Essential quotations organised by theme and character with analysis.',
          },
        ]}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Strange Case of Dr Jekyll and Mr Hyde</em> (1886) by Robert Louis
        Stevenson is in the public domain. Quotations are reproduced freely.
      </p>
    </>
  )
}
