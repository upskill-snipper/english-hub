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
    title: 'Silas Marner — Study Guide | The English Hub',
    description:
      'In-depth study guide for Silas Marner by George Eliot: plot, characters, themes, context and key quotations.',
  },
  title: 'Silas Marner — Study Guide',
  description:
    'In-depth study guide for Silas Marner by George Eliot: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/silas-marner',
  },
}

const data: TextGuideData = {
  title: 'Silas Marner',
  author: 'George Eliot',
  year: '1861',
  category: 'Novel',
  badge: 'AQA / Edexcel / Eduqas',
  intro:
    'George Eliot\u2019s shortest novel is often described as a moral fable: a tightly constructed story in which a wronged, isolated weaver is slowly restored to community and human feeling through the unexpected arrival of a small child. Published in 1861, between Adam Bede and the major work of Middlemarch, Silas Marner bridges Eliot\u2019s realist ambitions and her interest in older, almost folk-tale patterns of redemption and reconciliation. The novel follows Silas from his betrayal in the Dissenting community of Lantern Yard, through fifteen years of miserly exile in the rural village of Raveloe, to the loss of his hoarded gold and the unexpected appearance of a golden-haired orphan on his hearth one New Year\u2019s Eve. Beneath its apparently simple surface, Eliot examines faith, chance, class, money, parenthood and the slow work by which human bonds re-knit a broken life. It remains one of the most widely studied nineteenth-century novels at GCSE and iGCSE level.',
  quickInfo: {
    genre: 'Realist fable / moral fiction',
    setting: 'Raveloe (rural English village), early 19th century',
    length: '~55,000 words / 21 chapters',
    published: '1861',
  },
  plotSummary: [
    'The novel opens with Silas Marner, a young linen-weaver living in the Dissenting chapel community of Lantern Yard in a northern industrial town. Silas is devout, trusting and engaged to a servant girl named Sarah. His closest friend, William Dane, conspires to frame him for the theft of the dying senior deacon\u2019s money. The congregation draws lots to determine guilt and the lots declare Silas guilty. His faith in both God and humankind shatters. Sarah breaks off the engagement and later marries William. Silas leaves Lantern Yard and walks south until he settles on the outskirts of Raveloe, a sleepy agricultural village cut off from the currents of modern life.',
    'For fifteen years Silas lives as a half-human creature in the eyes of Raveloe\u2019s villagers. He weaves at his loom day and night and hoards the gold coins he earns, counting them in secret beneath the floorboards of his stone cottage. The narrative then turns to the Cass family at the Red House, the first family of Raveloe. Squire Cass has two grown sons. The elder, Godfrey, is weak, well-meaning and trapped by a secret marriage to Molly Farren, a drug-addicted woman who has borne him a daughter. The younger, Dunstan (Dunsey), is a cruel wastrel who blackmails Godfrey over the secret. Sent to sell Godfrey\u2019s horse Wildfire, Dunstan kills the animal, and on his walk back through the dark stumbles across Silas\u2019s cottage while Silas is briefly out. He steals the gold and vanishes into the night.',
    'Silas is devastated by the loss of his treasure. For the first time he is forced to seek help from his neighbours, and a tentative contact with the life of the village begins. On New Year\u2019s Eve, while a dance is being held at the Red House, Molly Farren sets out through the snow to expose Godfrey as her husband, carrying their child. She collapses in the snow and dies from cold and opium. The toddler, drawn by the firelight of Silas\u2019s open door, wanders inside and falls asleep at his hearth. Silas, still grieving for his gold, mistakes her golden curls for his returned coins. When Godfrey arrives with a search party, he recognises the dead woman as his wife but does not claim the child. Silas insists on keeping her and names her Eppie.',
    'Part Two opens sixteen years later. Silas has been transformed by the task of raising Eppie. He is now an accepted, even loved member of Raveloe, integrated through the child into the life of the church and the village. Godfrey has married Nancy Lammeter but remains childless. When the old stone-pit behind Silas\u2019s cottage is drained, Dunstan\u2019s skeleton is found with the stolen gold, forcing the past into the open. Godfrey confesses to Nancy that Eppie is his daughter, and together they go to Silas\u2019s cottage to claim her, offering Eppie a life as a gentleman\u2019s daughter. Eppie refuses and chooses Silas, saying she cannot think of any father but him. The novel ends with Eppie\u2019s marriage in the village, and Silas, once a broken outcast, fully restored to human community.',
  ],
  characters: [
    {
      name: 'Silas Marner',
      role: 'A linen-weaver; the protagonist',
      body: 'Silas enters the novel as a sincere young Dissenter whose faith is destroyed by the false accusation at Lantern Yard. Exiled in Raveloe, he shrinks into a miserly, near-mechanical life at the loom, his humanity narrowed to the nightly ritual of counting his gold. Eliot uses him to dramatise a theological and psychological argument: a man cut off from trust and community becomes less than human, and only the slow, practical love demanded by a dependent child can remake him. His cataleptic fits, his pale eyes and his foreign presence in Raveloe mark him as an outsider whose restoration is the novel\u2019s moral centre.',
    },
    {
      name: 'Godfrey Cass',
      role: 'Elder son of Squire Cass; heir to the Red House',
      body: 'Godfrey is weak rather than wicked. Trapped by a reckless secret marriage to Molly Farren, he drifts through the first half of the novel hoping that chance will release him from his mistake. When Molly dies in the snow he seizes his freedom silently, refusing to claim his own daughter. Eliot treats him with moral seriousness: he is not punished with disgrace but with the quieter retribution of a childless marriage to Nancy. His late attempt to reclaim Eppie exposes the gentleman\u2019s assumption that money and class can undo years of neglect, and his defeat in that scene is one of the novel\u2019s sharpest moral judgements.',
    },
    {
      name: 'Dunstan (Dunsey) Cass',
      role: 'Younger son of Squire Cass; Godfrey\u2019s tormentor',
      body: 'Dunstan is the novel\u2019s clearest villain: cynical, drunken, violent and without conscience. He blackmails Godfrey over the secret marriage, kills the horse Wildfire through reckless riding and steals Silas\u2019s gold on impulse when he sees the empty cottage. His disappearance into the night is explained only in Part Two, when his skeleton is found in the drained stone-pit with the coins still on him. Eliot uses Dunstan both as a plot engine and as a figure of casual aristocratic cruelty, the rotten extreme of the Cass family\u2019s indulgence.',
    },
    {
      name: 'Eppie',
      role: 'A foundling raised by Silas; Godfrey\u2019s biological daughter',
      body: 'Eppie arrives on Silas\u2019s hearth on New Year\u2019s Eve as a golden-haired toddler, her mother dead in the snow outside. She grows up as Silas\u2019s adopted daughter and becomes the instrument of his restoration to village life. In Part Two she is a warm, open, practical young woman engaged to the gardener Aaron Winthrop. When Godfrey and Nancy offer to raise her as a lady, her quiet refusal is the novel\u2019s moral climax: she insists that Silas is her real father and that she belongs to the class and life in which she was loved. Eliot presents her as the living proof that nurture, not blood, makes a parent.',
    },
    {
      name: 'Nancy Lammeter',
      role: 'Godfrey\u2019s wife; daughter of a respected Raveloe family',
      body: 'Nancy is pious, upright and governed by a strict personal code. She believes it is wrong to adopt a child because Providence has withheld children from her marriage for a reason. When Godfrey finally confesses that Eppie is his daughter, Nancy is wounded less by the child\u2019s existence than by the years of silence. In the scene where they try to reclaim Eppie, she behaves with dignity and accepts the refusal without resentment. Eliot uses her to explore the limits of conventional moral virtue: Nancy is genuinely good, but her rigid principles sometimes narrow her sympathy.',
    },
    {
      name: 'Squire Cass',
      role: 'Father of Godfrey and Dunstan; the leading landowner of Raveloe',
      body: 'The Squire is the local embodiment of lazy, indulgent rural gentry. He presides over a motherless household, lets his sons run wild, and hosts the annual New Year\u2019s Eve dance at which Molly intends to expose Godfrey. He is neither cruel nor thoughtful, but simply careless: his authority rests on custom rather than merit. Eliot uses him to sketch a whole social class whose time, she suggests, is passing, and whose failings are transmitted through weak fathering to the next generation.',
    },
    {
      name: 'Molly Farren',
      role: 'Godfrey\u2019s secret wife; Eppie\u2019s biological mother',
      body: 'Molly appears only briefly but her death drives the central turning-point of the plot. Addicted to opium and abandoned by Godfrey, she sets out through the snow on New Year\u2019s Eve with her child, intending to expose her marriage at the Red House. She collapses from cold and laudanum and dies within sight of Silas\u2019s cottage. Eliot handles her with unusual compassion for a Victorian novelist, presenting her addiction as misery rather than vice and making clear that Godfrey\u2019s concealment is the real moral failure.',
    },
  ],
  themes: [
    {
      title: 'Community and isolation',
      body: 'Silas Marner is structured around a single movement: from isolation to community. Silas begins the novel inside the tight Dissenting fellowship of Lantern Yard, is cast out by it through the false drawing of lots, and then lives for fifteen years as a near-hermit at the edge of Raveloe. Eliot uses his solitude to argue that a human being deprived of trust shrinks to something less than human, and that community is not a luxury but a moral necessity. Raveloe itself is presented as a slow, gossipy, imperfect organism that nevertheless has the power to receive Silas back once a child gives him a reason to enter it. The gradual thawing of his relations with his neighbours after the theft of his gold, and the warmth of the Rainbow Inn scene, both trace this reopening of his life. The novel\u2019s final image of the wedding procession is a deliberate celebration of the shared life that Eliot believes is the proper condition of being human.',
    },
    {
      title: 'Faith and chance',
      body: 'Silas\u2019s religious faith is destroyed when the drawing of lots, supposedly an instrument of divine justice, falsely declares him guilty. From that moment the novel treats organised religion with careful distance and asks what humans are to do when Providence appears silent or wrong. Eliot does not replace Silas\u2019s lost faith with atheism but with something gentler: the idea that human relationships, small kindnesses and the work of raising a child can carry the moral weight that religion once did. Dolly Winthrop\u2019s simple village Christianity is presented sympathetically throughout, and Eppie\u2019s arrival is described in language that hovers between coincidence and providence. Against this generous reading the narrator sets Godfrey, who worships "Favourable Chance" because he will not take responsibility for his own life, and whose passivity the novel treats as a quiet form of idolatry.',
    },
    {
      title: 'Parenthood: nature versus nurture',
      body: 'The novel\u2019s central moral argument is that fatherhood is something earned, not inherited. Godfrey is Eppie\u2019s biological father, but he conceals her for sixteen years while Silas feeds her, dresses her, teaches her to speak and loves her. When Godfrey finally tries to reclaim her in the confrontation of Chapter 19, Eliot gives Eppie the decisive words: she cannot think of any father but Silas, and she will not leave him. The scene is one of the most openly argumentative in the novel, pushing against the Victorian assumption that blood and class determine family. Eliot\u2019s case is that the daily labour of care is what creates a parent, and that a child\u2019s loyalty rightly follows that labour rather than the biological tie. Aaron Winthrop\u2019s willingness to join the household, rather than take Eppie out of it, extends the argument into the next generation.',
    },
    {
      title: 'Money and human bonds',
      body: 'The gold coins that Silas hoards are the novel\u2019s most important symbol. In his years of isolation they substitute for human contact: he talks to them, counts them, spreads them on his table and loves them as "companions." Their theft is a catastrophe precisely because they are the only relationship he has. When Eppie arrives, Eliot draws a deliberate visual parallel between her golden hair and the lost coins, so that Silas literally mistakes one for the other, but the substitution transforms their meaning. The coins bought nothing and demanded nothing; the child demands everything and gives everything. When the gold is eventually recovered in Part Two, Silas is strikingly indifferent to it. The novel\u2019s economic logic is explicit: money accumulated without human use deforms the hoarder, and no amount of it can buy back the years of love Silas has given Eppie.',
    },
    {
      title: 'Justice and retribution',
      body: 'Eliot is a careful moralist who distrusts melodrama. Dunstan\u2019s death in the stone-pit is not a thunderbolt but a quiet accident whose truth waits sixteen years to be uncovered when the pit is drained. Godfrey is not publicly disgraced but quietly punished with a childless marriage and a daughter who rejects him when he finally tries to claim her. William Dane, the original villain at Lantern Yard, is never brought to account on the page and disappears along with the chapel itself. The novel\u2019s version of justice is slow, organic and often incomplete: wrongs surface in their own time, if at all, and the real work of the moral life is not retribution but the gradual reknitting of human bonds that wrongdoing has torn. This patience with consequence is a key difference between Eliot and the more melodramatic Dickens.',
    },
    {
      title: 'Class and social hierarchy',
      body: 'Raveloe is a village in which the Cass family occupies the Red House at the top and figures like Silas sit at the margins. Eliot is alert to the smallness of this world and to its class assumptions, and her narrator repeatedly steps back to describe Raveloe\u2019s social structure with gentle irony. The New Year\u2019s Eve dance at the Red House is a careful social portrait that brings every layer of the village into the same room, and the final scene in which Godfrey and Nancy try to reclaim Eppie as a gentleman\u2019s daughter is written explicitly as a confrontation between classes. Eppie\u2019s refusal is not only personal but social: she identifies with the working people who raised her and will not be lifted out of her class even for the greater comfort that Godfrey\u2019s money could offer. Eliot treats this loyalty as morally serious rather than sentimental, and as a quiet rebuke to Victorian assumptions about rising in the world.',
    },
  ],
  historicalContext: [
    'George Eliot was the pen name of Mary Ann Evans (1819\u20131880), one of the most intellectually ambitious novelists of the Victorian period. A translator of German theology and a former assistant editor of the Westminster Review, she began writing fiction in her late thirties and quickly became the leading voice of English realism. Silas Marner was her fourth work of fiction, published in 1861 between Adam Bede (1859) and The Mill on the Floss (1860) and the much larger Middlemarch (1871\u201372). Eliot described the idea of Silas Marner as arriving suddenly as a vision of a linen-weaver with a bag on his back, and she wrote the short novel quickly while setting aside the longer Romola. It sits at the intersection of her realist project and her love of older, fable-like narrative shapes.',
    'The novel is set in the opening years of the nineteenth century, roughly a generation before its 1861 publication, and its world is consciously pre-industrial. Raveloe is described as lying in a rich agricultural pocket untouched by the railways, the factories and the religious and political upheavals that were transforming England during Eliot\u2019s own lifetime. Lantern Yard, by contrast, belongs to the new industrial north, and when Silas returns to look for it late in the novel he finds it has been demolished and a factory stands in its place. Eliot uses this contrast deliberately: the displacement of rural life by industrial expansion is part of what the novel mourns, even as it refuses to idealise the village.',
    'Religion is central to the novel\u2019s moral landscape. Lantern Yard represents Dissenting Christianity, the strict chapel-based tradition of Nonconformist sects outside the Church of England, and Eliot treats it with a mixture of respect and unease: it offers community but is capable of catastrophic error, as in the drawing of lots that condemns Silas. Raveloe\u2019s Church of England piety is quieter and more practical, expressed in figures like Dolly Winthrop rather than in doctrine. Eliot herself had broken with evangelical Christianity in her twenties and was by 1861 a religious humanist who nonetheless took religious experience seriously. Silas Marner can be read as her attempt to imagine what it might look like for a man of lost faith to recover a meaningful moral life without returning to the beliefs that had failed him.',
  ],
  quotations: [
    {
      quote:
        '"In the days when the spinning-wheels hummed busily in the farmhouses\u2014and even great ladies, clothed in silk and thread-lace, had their toy spinning-wheels of polished oak\u2014there might be seen, in districts far away among the lanes, or deep in the bosom of the hills, certain pallid undersized men, who, by the side of the brawny country-folk, looked like the remnants of a disinherited race."',
      who: 'Narrator \u2014 Chapter 1, opening',
      analysis:
        'The famous opening places the novel in a vanished pre-industrial world of spinning-wheels and handloom weaving, and it introduces the weavers as marginal, alien, almost ghostly figures. Eliot\u2019s long, flowing sentence and the phrase "remnants of a disinherited race" prepare the reader for a story about exile and outsider status, and locate Silas within a wider social change that the Victorian reader was already living through.',
    },
    {
      quote:
        '"Minds that have been unhinged from their old faith and love, have perhaps sought this Lethean influence of exile, in which the past becomes dreamy because its symbols have all vanished, and the present too is dreamy because it is linked with no memories."',
      who: 'Narrator \u2014 Chapter 2',
      analysis:
        'Eliot\u2019s narrator explains what exile does to the mind: without familiar people, places and rituals, past and present both lose reality. The reference to Lethe, the classical river of forgetting, lifts Silas\u2019s case to a mythic plane, while the repeated adjective "dreamy" enacts the drifting, unanchored quality of his existence. The sentence sets up the fifteen years of numb, mechanical life that follow his arrival in Raveloe.',
    },
    {
      quote:
        '"The livelong day he sat in his loom, his ear filled with its monotony, his eyes bent close down on the slow growth of sameness in the brownish web, his muscles moving with such even repetition that their pause seemed almost as much a constraint as the holding of his breath."',
      who: 'Narrator \u2014 Chapter 2',
      analysis:
        'The dense, rhythmic prose enacts the deadening repetition of Silas\u2019s weaving. Eliot reduces him almost to the machine he works, with "sameness" and "even repetition" suggesting a life drained of variety or meaning, and the final comparison of his body\u2019s rest to a held breath makes even stillness feel unnatural. The passage makes clear that mechanical labour without human contact is itself a form of spiritual damage.',
    },
    {
      quote:
        '"He had seemed to love it little in the years when every penny bore a distinct recognisable face to him; he loved it more since it had become his companion."',
      who: 'Narrator \u2014 Chapter 2',
      analysis:
        'Eliot tracks the psychological shift by which Silas\u2019s gold moves from ordinary earnings to beloved hoard. The phrase "his companion" is the key: in the absence of human relationships the coins have taken a relational role and fill a space that should be occupied by a person. The quiet horror of the sentence is that Silas himself no longer seems to recognise the difference, which tells us how far his isolation has damaged him.',
    },
    {
      quote:
        '"The gold had asked that he should sit weaving longer and longer, deafened and blinded more and more to all things except the monotony of his loom and the repetition of his web; but Eppie called him away from his weaving, and made him think all its pauses a holiday, reawakening his senses with her fresh life."',
      who: 'Narrator \u2014 Chapter 14',
      analysis:
        'The sentence sets gold and child against each other as opposed moral principles. The coins demanded isolation and narrowing; Eppie demands attention to the world outside the loom. The repeated verbs "deafened and blinded" give way to "reawakening his senses," and the structural parallel makes the novel\u2019s argument explicit without abandoning its realist restraint. Eliot\u2019s syntax, with its long accumulating clauses before the turn at "but Eppie," enacts the slow transformation in prose rhythm.',
    },
    {
      quote:
        '"In old days there were angels who came and took men by the hand and led them away from the city of destruction. We see no white-winged angels now. But yet men are led away from threatening destruction: a hand is put into theirs, which leads them forth gently towards a calm and bright land, so that they look no more backward; and the hand may be a little child\u2019s."',
      who: 'Narrator \u2014 Chapter 14',
      analysis:
        'One of the most widely quoted passages in the novel. Eliot rewrites the religious image of the guiding angel in secular, domestic terms: a small child can do the work that theology once assigned to the supernatural. The allusion to the "city of destruction" in Bunyan\u2019s Pilgrim\u2019s Progress deepens the religious echo while quietly replacing it. The quiet substitution is characteristic of Eliot\u2019s humanism and states the novel\u2019s moral argument in a single, memorable sentence.',
    },
    {
      quote:
        '"She\u2019s a lone thing\u2014and I\u2019m a lone thing. My money\u2019s gone, I don\u2019t know where\u2014and this is come from I don\u2019t know where."',
      who: 'Silas Marner \u2014 Chapter 13',
      analysis:
        'Silas\u2019s plain-speaking claim to the child on the night of her arrival at the Red House. The parallel of "lone thing" and the deliberate echo between the lost gold and the found child crystallise the novel\u2019s central substitution, while the repeated "I don\u2019t know where" gives his grief and wonder equal weight. Eliot writes Silas\u2019s speech in a restrained dialect register that gives moral weight to his simplicity and contrasts with Godfrey\u2019s polished evasiveness in the same scene.',
    },
    {
      quote:
        '"Eh, my precious child, the blessing was mine. If you hadn\u2019t been sent to save me, I should ha\u2019 gone to the grave in my misery."',
      who: 'Silas Marner \u2014 Chapter 19',
      analysis:
        'In the climactic confrontation with Godfrey and Nancy, Silas states openly what the narrative has been arguing throughout: Eppie has saved him, not the other way around. The reversal of the Victorian expectation that the adult rescues the child is a key part of Eliot\u2019s revaluation of parenthood. The passive phrase "been sent" leaves the source of Eppie\u2019s arrival ambiguous between chance and providence, which is exactly the space Eliot wants the novel to inhabit.',
    },
    {
      quote: '"I can\u2019t feel as I\u2019ve got any father but one."',
      who: 'Eppie \u2014 Chapter 19',
      analysis:
        'Eppie\u2019s quiet, decisive rejection of Godfrey\u2019s claim is the moral climax of the novel. The grammar is deliberately simple because the argument is absolute: her sense of fatherhood is not about biology but about who has cared for her. Eliot makes the case through the voice of an uneducated young woman, implicitly contrasting Eppie\u2019s clarity with Godfrey\u2019s years of concealment and his unspoken assumption that blood and class outweigh years of daily care.',
    },
    {
      quote:
        '"I\u2019m promised to marry a working-man, as\u2019ll live with father, and help me take care of him."',
      who: 'Eppie \u2014 Chapter 19',
      analysis:
        'Eppie follows her refusal with a social as well as personal commitment: she will marry inside her class, and her future husband Aaron will join the household rather than take her out of it. Eliot is careful to make the decision economic and social as well as emotional, so that it cannot be reduced to sentimental loyalty. The working life with Aaron is shown as a positive choice rather than a sacrifice, which is a significant departure from Victorian narratives of rising in society.',
    },
    {
      quote:
        '"There\u2019s good i\u2019 this world\u2014I\u2019ve a feeling o\u2019 that now; and it makes a man feel as there\u2019s a good more than he can see, i\u2019 spite o\u2019 the trouble and the wickedness."',
      who: 'Silas Marner \u2014 Chapter 16',
      analysis:
        'Silas\u2019s recovered faith is expressed in carefully modest terms. He does not reclaim the theology of Lantern Yard or any particular creed; he describes a feeling, rooted in experience, that there is good beyond what he can see, even "in spite of the trouble and the wickedness" he has suffered. Eliot uses the weaver\u2019s dialect to give the claim weight without overstating it, and the sentence is a key statement of the novel\u2019s humanist theology.',
    },
    {
      quote:
        '"The sense of security more frequently springs from habit than from conviction, and for this reason it often subsists after such a change in the conditions as might have been expected to suggest alarm."',
      who: 'Narrator \u2014 Chapter 9',
      analysis:
        'One of Eliot\u2019s sharpest aphorisms about moral self-deception. The sentence explains how Godfrey can go on living as if his secret will somehow resolve itself, and it reaches beyond him to a general claim about human psychology: people keep feeling safe long after the reasons for safety have disappeared. Eliot\u2019s narrator regularly lifts a local situation into a universal observation in this way, which is characteristic of the essayistic voice of her mature fiction.',
    },
    {
      quote:
        '"Favourable Chance, I fancy, is the god of all men who follow their own devices instead of obeying a law they believe in."',
      who: 'Narrator \u2014 Chapter 9',
      analysis:
        'Eliot names Godfrey\u2019s moral failing with unusual directness. By calling Chance a "god" worshipped by the weak, she exposes the drift by which Godfrey has allowed his situation to rot, hoping that something accidental will save him from the consequences of his concealment. The formulation also stands behind the whole novel\u2019s treatment of chance events, which are never presented as neutral but always as moral tests the characters can pass or fail.',
    },
    {
      quote: '"Raveloe was not a place where moral censure was severe."',
      who: 'Narrator \u2014 Chapter 3',
      analysis:
        'A deceptively mild sentence that does important work. Eliot sketches Raveloe as a place of easy-going tolerance, which is partly a virtue because Silas is eventually received back without hostility, and partly a failing because the Cass brothers grow up unchecked. The line captures Eliot\u2019s realist refusal to present any community as simply good or bad, and quietly contrasts the village\u2019s lax mood with the unforgiving chapel world that falsely condemned Silas at Lantern Yard.',
    },
    {
      quote:
        '"It\u2019s the will o\u2019 Them above as many things should be dark to us; but there\u2019s some things as I\u2019ve never felt i\u2019 the dark about, and they\u2019re mostly what comes i\u2019 the day\u2019s work."',
      who: 'Dolly Winthrop \u2014 Chapter 16',
      analysis:
        'Dolly\u2019s rough village theology condenses the novel\u2019s moral position. Big metaphysical questions may be dark, but the daily work of care and kindness is clear enough, and that is where moral life is actually lived. Eliot gives this central statement to an uneducated woman, not a clergyman or the narrator, and the reader is meant to take Dolly\u2019s practical authority entirely seriously. The line also prepares for Silas\u2019s own recovered faith in Chapter 16.',
    },
    {
      quote: '"The past becomes dreamy because its symbols have all vanished."',
      who: 'Narrator \u2014 Chapter 2',
      analysis:
        'A short extract from the longer passage about exile, often cited on its own. The line explains why Silas\u2019s Lantern Yard life fades from him during his years in Raveloe: without the chapel, the familiar faces, the streets and the hymns, memory itself loses hold. It also anticipates his final visit to the demolished Lantern Yard in Part Two, where the "symbols" have literally vanished beneath a new factory and he is forced to accept that there is nothing left to return to.',
    },
    {
      quote: '"O father, what a pretty home ours is! I think nobody could be happier than we are."',
      who: 'Eppie \u2014 Chapter 21, closing lines',
      analysis:
        'Eliot ends the novel on an exchange of simple domestic happiness rather than a grand moral pronouncement. Eppie\u2019s line values the modest cottage above the Red House and closes the theme of class choice begun in the confrontation of Chapter 19. The deliberate understatement of the final scene is characteristic of Eliot\u2019s restrained realism: the transformed world of the novel is summed up not in rhetoric but in a quiet domestic sentence spoken by a young woman to the father who has raised her.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'sm-1',
    question: 'Where does Silas live before moving to Raveloe?',
    type: 'multiple-choice',
    options: ['Lantern Yard', 'Pemberley', 'Coketown', 'Highbury'],
    correctIndex: 0,
    explanation:
      'Silas belongs to the Dissenting chapel community of Lantern Yard, a northern industrial town, before he is falsely accused and exiles himself to the rural village of Raveloe.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sm-2',
    question: 'Who frames Silas for theft at Lantern Yard?',
    type: 'multiple-choice',
    options: ['Godfrey Cass', 'Dunstan Cass', 'William Dane', 'Aaron Winthrop'],
    correctIndex: 2,
    explanation:
      'William Dane, Silas\u2019s closest friend at Lantern Yard, conspires to frame him for the theft of the dying deacon\u2019s money. William later marries Silas\u2019s fiancee Sarah.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'sm-3',
    question: 'How does the Lantern Yard congregation decide that Silas is guilty?',
    type: 'multiple-choice',
    options: ['A trial', 'Drawing of lots', 'A vote', 'Confession under torture'],
    correctIndex: 1,
    explanation:
      'The congregation draws lots to determine guilt, believing Providence will indicate the truth. The lots falsely declare Silas guilty, and the episode destroys his faith.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sm-4',
    question: 'What does Silas do in Raveloe for fifteen years?',
    type: 'multiple-choice',
    options: [
      'Farms the land',
      'Weaves and hoards gold coins',
      'Works as a curate',
      'Trains as a blacksmith',
    ],
    correctIndex: 1,
    explanation:
      'Silas weaves linen at his loom day and night and hoards the gold coins he earns beneath his floorboards, living in almost total isolation from the village.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sm-5',
    question: 'Who steals Silas\u2019s gold?',
    type: 'multiple-choice',
    options: ['Godfrey Cass', 'Dunstan Cass', 'Aaron Winthrop', 'William Dane'],
    correctIndex: 1,
    explanation:
      'Dunstan (Dunsey) Cass steals the gold on his walk back after killing Godfrey\u2019s horse Wildfire. He then disappears into the night and is not found again until Part Two.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sm-6',
    question: 'Who is Eppie\u2019s biological father?',
    type: 'multiple-choice',
    options: ['Silas Marner', 'Godfrey Cass', 'Dunstan Cass', 'Squire Cass'],
    correctIndex: 1,
    explanation:
      'Godfrey Cass is Eppie\u2019s biological father through his secret marriage to Molly Farren. He conceals the relationship for sixteen years before confessing to Nancy.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'sm-7',
    question: 'Where is Dunstan\u2019s body eventually found?',
    type: 'multiple-choice',
    options: [
      'In the Red House cellar',
      'In the drained stone-pit',
      'In the River Floss',
      'In Lantern Yard',
    ],
    correctIndex: 1,
    explanation:
      'Dunstan\u2019s skeleton is discovered in the drained stone-pit behind Silas\u2019s cottage, with the stolen gold still on him. The discovery forces the hidden past into the open.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sm-8',
    question: 'What happens when Godfrey offers to raise Eppie as his daughter?',
    type: 'multiple-choice',
    options: [
      'Eppie immediately accepts',
      'Eppie refuses and chooses to stay with Silas',
      'Silas hands her over',
      'Nancy refuses to allow it',
    ],
    correctIndex: 1,
    explanation:
      'Eppie quietly refuses Godfrey\u2019s offer, saying she cannot think of any father but Silas. She also insists on remaining in the working-class world in which she was raised.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'sm-9',
    question: 'What is the real name of the author who wrote as George Eliot?',
    type: 'multiple-choice',
    options: ['Charlotte Bronte', 'Mary Ann Evans', 'Elizabeth Gaskell', 'Mary Shelley'],
    correctIndex: 1,
    explanation:
      'George Eliot was the pen name of Mary Ann Evans (1819\u20131880), a translator and editor who became one of the leading realist novelists of the Victorian period.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'sm-10',
    question: 'Why does Eliot contrast Silas\u2019s gold with Eppie\u2019s hair?',
    type: 'multiple-choice',
    options: [
      'To show Silas\u2019s failing eyesight',
      'To make the symbolic substitution of child for coins explicit',
      'To comment on Victorian fashion',
      'To echo a biblical passage about gold',
    ],
    correctIndex: 1,
    explanation:
      'Eliot draws the visual parallel so the reader sees Silas literally mistake Eppie\u2019s golden curls for his returned coins. The substitution states the novel\u2019s central argument about the poverty of money compared with human love.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'sm-11',
    question:
      'What does the narrator mean by "Favourable Chance... is the god of all men who follow their own devices instead of obeying a law they believe in"?',
    type: 'multiple-choice',
    options: [
      'Luck is a divine force',
      'People who avoid moral responsibility end up worshipping luck as an excuse',
      'Gambling is a form of religion',
      'God favours the brave',
    ],
    correctIndex: 1,
    explanation:
      'The line is a direct moral judgement on Godfrey: he lets his situation drift, hoping chance will release him from his secret marriage. Eliot names this evasion as a kind of idolatry of luck.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'sm-12',
    question: 'How does Eliot present the drawing of lots at Lantern Yard?',
    type: 'multiple-choice',
    options: [
      'As divine justice',
      'As proof that God is silent or absent',
      'As a religious practice that can catastrophically fail',
      'As a joke',
    ],
    correctIndex: 2,
    explanation:
      'The lots claim to reveal God\u2019s judgement but falsely condemn Silas. Eliot uses the scene to show that religious certainty can be used to enact terrible injustice, which is why Silas\u2019s faith breaks.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'sm-13',
    question: 'What is the significance of Raveloe\u2019s pre-industrial setting?',
    type: 'multiple-choice',
    options: [
      'It is purely decorative',
      'It allows Eliot to explore a way of life her Victorian readers had already partly lost',
      'It shows that the past was better',
      'It is accidental',
    ],
    correctIndex: 1,
    explanation:
      'By setting the novel in the early 1800s, Eliot contrasts Raveloe\u2019s slow rural life with the industrial upheaval of her readers\u2019 own time. Lantern Yard\u2019s demolition and replacement by a factory makes the point explicit.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'sm-14',
    question: 'Why does Nancy initially resist adopting a child?',
    type: 'multiple-choice',
    options: [
      'She dislikes children',
      'She believes Providence has withheld children for a reason',
      'Godfrey forbids it',
      'The village disapproves of adoption',
    ],
    correctIndex: 1,
    explanation:
      'Nancy\u2019s strict personal theology tells her that a childless marriage is Providence\u2019s will, and adopting would be going against it. Eliot presents her belief sympathetically but also shows its limits.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'sm-15',
    question: 'What does Dolly Winthrop represent in the novel?',
    type: 'multiple-choice',
    options: [
      'Religious fanaticism',
      'A practical, kindly village Christianity',
      'Old superstitions',
      'A satirical figure',
    ],
    correctIndex: 1,
    explanation:
      'Dolly offers a rough, warm, non-doctrinal Christianity rooted in the work of daily care. Eliot gives her the novel\u2019s central statement about the limits of what can be known and the clarity of kind action.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'sm-16',
    question: 'Why is Eppie\u2019s decision to marry Aaron Winthrop significant in class terms?',
    type: 'multiple-choice',
    options: [
      'It has no class meaning',
      'It affirms her loyalty to the working-class life in which she was raised',
      'It is a step up socially',
      'Aaron is secretly wealthy',
    ],
    correctIndex: 1,
    explanation:
      'Eppie chooses to marry a working-man and stay in the class of the people who raised her. Eliot makes the decision an economic and social statement as well as an emotional one.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'sm-17',
    question:
      'How does Eliot\u2019s treatment of Molly Farren differ from the typical Victorian fallen woman?',
    type: 'multiple-choice',
    options: [
      'Eliot condemns her harshly',
      'Eliot treats her with compassion and locates the moral failure in Godfrey\u2019s concealment',
      'Eliot ignores her',
      'Eliot makes her a comic figure',
    ],
    correctIndex: 1,
    explanation:
      'Molly\u2019s opium addiction is presented as misery rather than vice, and her brief appearance carries dignity. Eliot makes clear that Godfrey\u2019s refusal to acknowledge her is the real moral failure of the story.',
    topic: 'Characters',
    difficulty: 'grade-9',
  },
  {
    id: 'sm-18',
    question: 'How does the structure of Silas Marner reinforce its moral argument?',
    type: 'multiple-choice',
    options: [
      'It has no clear structure',
      'The two-part structure separates the years of isolation from the years of restoration, enacting the movement from loneliness to community',
      'It is chronologically muddled',
      'Each chapter contradicts the next',
    ],
    correctIndex: 1,
    explanation:
      'Part One covers Silas\u2019s isolation and the arrival of Eppie; Part Two jumps sixteen years to show the life she has made possible. The deliberate gap lets the transformation speak for itself.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'sm-19',
    question:
      'What does the narrator mean by calling the weavers "the remnants of a disinherited race"?',
    type: 'multiple-choice',
    options: [
      'They are literally foreigners',
      'They are a marginal, dying way of life within rural England',
      'They are descended from royalty',
      'They are a religious sect',
    ],
    correctIndex: 1,
    explanation:
      'Eliot places the handloom weavers outside the mainstream of Victorian life: economically doomed by industrialisation, visually strange, spiritually isolated. The phrase frames Silas as an outsider from his first appearance.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'sm-20',
    question:
      'Why does Silas\u2019s visit to the site of Lantern Yard in the final chapters matter?',
    type: 'multiple-choice',
    options: [
      'He is looking for revenge',
      'The chapel has been demolished and replaced by a factory, showing that he cannot recover his old world',
      'He finds his old friends still there',
      'It has no symbolic meaning',
    ],
    correctIndex: 1,
    explanation:
      'When Silas returns to look for Lantern Yard he finds a factory where the chapel once stood. The episode shows that the old religious world is gone and that Silas\u2019s new life in Raveloe, with Eppie, is now his only real home.',
    topic: 'Themes',
    difficulty: 'higher',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Community and Isolation',
    summary:
      'The novel traces Silas\u2019s movement from the tight Dissenting fellowship of Lantern Yard, through fifteen years of Raveloe exile, to full integration in the village.',
    keyPoints: [
      'Lantern Yard = fellowship that becomes catastrophe through the drawing of lots',
      'Raveloe = imperfect but receptive rural community',
      'Isolation is presented as spiritually deforming',
      'Eppie is the instrument that re-connects Silas to neighbours and church',
      'The final wedding scene celebrates shared life',
    ],
  },
  {
    topic: 'Faith and Chance',
    summary:
      'Silas\u2019s lost faith is not replaced with atheism but with a humanist trust in small kindnesses and daily care.',
    keyPoints: [
      'The drawing of lots shatters Silas\u2019s faith',
      '"In old days there were angels..." secularises providence',
      'Dolly Winthrop represents practical village Christianity',
      'Godfrey\u2019s worship of "Favourable Chance" is a moral failing',
      'Eliot was herself a religious humanist by 1861',
    ],
  },
  {
    topic: 'Parenthood: Nature vs Nurture',
    summary: 'Eliot argues that fatherhood is earned through daily care, not through biology.',
    keyPoints: [
      'Godfrey is the biological father; Silas is the real one',
      '"I can\u2019t feel as I\u2019ve got any father but one" \u2014 Eppie\u2019s decisive line',
      'Eppie refuses class promotion to stay with Silas',
      'The reclamation scene stages the nature/nurture argument',
      'Aaron Winthrop will join the household rather than take Eppie away',
    ],
  },
  {
    topic: 'Money and Human Bonds',
    summary:
      'The gold coins are the central symbol: a substitute for human connection that deforms the hoarder.',
    keyPoints: [
      'Silas talks to and counts his coins as if they were companions',
      'Eppie\u2019s golden hair is deliberately paralleled with the lost gold',
      'When the gold is recovered, Silas is indifferent',
      'Money is consistently shown as inferior to love',
      'The novel is an economic critique as well as a personal one',
    ],
  },
  {
    topic: 'Class and Social Hierarchy',
    summary:
      'Raveloe is a world in which the Cass family dominates, and Eliot is alert to the costs and assumptions of that hierarchy.',
    keyPoints: [
      'The Red House represents lazy, indulgent gentry',
      'Squire Cass has failed as a father of his two sons',
      'The New Year\u2019s Eve dance is a carefully observed class set-piece',
      'Godfrey\u2019s attempt to reclaim Eppie is framed as a class confrontation',
      'Eppie\u2019s refusal is a statement of class loyalty as well as love',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Eliot present the theme of isolation in Silas Marner?',
  'How does Eliot use the character of Godfrey Cass to explore moral weakness?',
  'How does Eliot present the relationship between money and human bonds in Silas Marner?',
  'How does Eliot explore ideas about parenthood in the novel?',
  'How does Eliot use setting and historical context to shape meaning in Silas Marner?',
]

export default async function SilasMarnerPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="Silas Marner — Complete GCSE Study Guide"
        description="In-depth study guide for Silas Marner covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Silas Marner', url: 'https://theenglishhub.app/revision/texts/silas-marner' },
        ]}
      />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>
          This AI-assisted guide is under expert review. Cross-check with your teacher&rsquo;s notes
          before relying on it for exam preparation.
        </span>
      </div>
      <TextStudyHub
        textName="Silas Marner"
        textType="novel"
        examBoard="AQA"
        basePath="/revision/texts/silas-marner"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/silas-marner/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'chapters',
            href: '/revision/texts/silas-marner/chapters',
            icon: 'acts' as const,
            title: 'Chapter-by-Chapter Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/silas-marner/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/silas-marner/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/silas-marner/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/silas-marner/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/silas-marner/essay-plans',
            icon: 'essays' as const,
            title: 'Essay Plans',
            description: 'GCSE essay plans',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Eliot present the theme of isolation in Silas Marner?',
          'How does Eliot use the character of Godfrey Cass to explore moral weakness?',
          'How does Eliot present the relationship between money and human bonds in Silas Marner?',
          'How does Eliot explore ideas about parenthood in the novel?',
          'How does Eliot use setting and historical context to shape meaning in Silas Marner?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Silas Marner"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
    </>
  )
}
