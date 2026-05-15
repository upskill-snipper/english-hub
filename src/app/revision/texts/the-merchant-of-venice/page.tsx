// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'The Merchant of Venice — Study Guide | The English Hub',
    description:
      'In-depth study guide for The Merchant of Venice by William Shakespeare: plot, characters, themes, context and key quotations.',
  },
  title: 'The Merchant of Venice — Study Guide | The English Hub',
  description:
    'In-depth study guide for The Merchant of Venice by William Shakespeare: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/the-merchant-of-venice',
  },
}

const data: TextGuideData = {
  title: 'The Merchant of Venice',
  author: 'William Shakespeare',
  year: 'c. 1596\u201397',
  category: 'Play',
  badge: 'AQA / Edexcel / OCR / Eduqas',
  intro:
    'Written in the late 1590s, The Merchant of Venice is one of Shakespeare\u2019s most disputed plays. Labelled a comedy in the First Folio yet often studied as a \u201Cproblem play,\u201D it yokes a romantic courtship plot to a much darker legal drama in which a Jewish moneylender, Shylock, demands a pound of flesh from the Christian merchant Antonio. The play\u2019s central trial scene, its eloquent speeches on mercy and justice, and its uneasy treatment of prejudice have made it both enduringly popular and persistently controversial. Shakespeare interweaves three story lines \u2014 Antonio\u2019s bond with Shylock, Bassanio\u2019s wooing of the heiress Portia through her father\u2019s casket test, and the elopement of Shylock\u2019s daughter Jessica with the Christian Lorenzo \u2014 before binding them together in a comic fifth act about marriage rings. It is studied at GCSE and beyond for its layered language, its interrogation of identity and otherness, and the ethical questions it refuses to resolve.',
  quickInfo: {
    genre: 'Comedy (often labelled problem play)',
    setting: 'Venice and Belmont, Italy',
    length: 'Five-act play (~2,650 lines)',
    published: 'First quarto 1600',
  },
  plotSummary: [
    'The play opens in Venice, where the merchant Antonio confesses an unexplained sadness to his friends. His young kinsman Bassanio arrives to ask for a loan: he wishes to travel to Belmont to court the wealthy heiress Portia, whom he loves. Antonio\u2019s capital is tied up in merchant ships at sea, so he agrees to stand surety while Bassanio seeks a loan from the Jewish moneylender Shylock. Shylock, who has long been abused and spat upon by Antonio in the Rialto, proposes an apparently \u201Cmerry bond\u201D: three thousand ducats for three months, forfeit to be a pound of Antonio\u2019s flesh if the loan is not repaid. Antonio agrees, confident his ships will return in time.',
    'At Belmont, Portia is bound by her dead father\u2019s will to marry whichever suitor correctly chooses between three caskets of gold, silver and lead. The Prince of Morocco picks the gold casket, which contains a skull and the scroll \u201CAll that glisters is not gold.\u201D The Prince of Arragon chooses the silver casket and finds the portrait of a blinking idiot. When Bassanio arrives he reasons past outward show, selects the humble lead casket and wins Portia\u2019s hand. Portia gives him a ring as a token of her love, making him swear never to part with it. At the same time, Shylock\u2019s daughter Jessica elopes with the Christian Lorenzo, taking a casket of her father\u2019s ducats and jewels. Shylock\u2019s fury at losing both daughter and money is sharpened by the news that Antonio\u2019s ships are reported lost at sea, so that the bond is now forfeit.',
    'The action returns to Venice for the trial in Act 4. Shylock, refusing all offers of repayment, demands the pound of flesh before the Duke\u2019s court. Portia arrives in disguise as a young lawyer, Balthazar, accompanied by her waiting-woman Nerissa disguised as a clerk. Portia first appeals to Shylock in the famous speech beginning \u201CThe quality of mercy is not strained,\u201D urging him to temper justice with mercy. When he refuses, she allows that he may take the flesh \u2014 but she then traps him on the letter of the bond: he may shed no drop of Christian blood, and must cut exactly one pound, no more and no less. Shylock is defeated. The court strips him of half his wealth, forces him to leave the rest to Jessica and Lorenzo, and compels him to convert to Christianity.',
    'In Act 5 the play returns to the comic mode of Belmont. Portia and Nerissa, still disguised, persuade Bassanio and Gratiano to give up the rings their wives gave them, as payment for saving Antonio\u2019s life. Bassanio parts with his ring only reluctantly, after Antonio urges him to let his wife\u2019s commandment stand second to the debt owed to the lawyer. Back at Belmont, the women accuse their husbands of disloyalty and threaten to be as free with their own affections as the men have been with their rings, before revealing that they themselves were the lawyer and the clerk all along. The couples are reconciled, news arrives that Antonio\u2019s ships have safely returned to harbour after all, and Nerissa hands Jessica and Lorenzo the signed deed of gift making them heirs to Shylock\u2019s remaining estate. The play ends in music, moonlight and apparent comic harmony at Belmont \u2014 though Shylock\u2019s forced absence and the terms of that final deed of gift continue to trouble audiences long after the curtain falls.',
  ],
  characters: [
    {
      name: 'Shylock',
      role: 'A Jewish moneylender in Venice; father of Jessica',
      body: 'Shylock is the play\u2019s most complex and contested figure. A moneylender in a society that despises usury, he is routinely insulted and spat upon by the Christians, including Antonio. His bond for a pound of flesh is part revenge, part grim joke, and part assertion of legal rights denied to him elsewhere. Shakespeare gives him moments of shattering humanity \u2014 \u201CHath not a Jew eyes?\u201D \u2014 alongside darker demands for the letter of the law. His forced conversion at the end is often read today as cruelty rather than mercy, and he has become a test case for how to stage prejudice.',
    },
    {
      name: 'Antonio',
      role: 'A Venetian merchant; the \u201Cmerchant of Venice\u201D of the title',
      body: 'Antonio is the melancholy merchant whose love for Bassanio drives him to sign Shylock\u2019s bond. Generous to his friends and openly contemptuous of Shylock, he embodies the privileged Christian mercantile world of the Rialto. Many critics read a homoerotic undercurrent to his devotion to Bassanio, which he describes as being willing to die for. His readiness for death at the trial, and his later role in pressing for Shylock\u2019s conversion, make him an uneasy hero: sympathetic victim in one frame, complicit persecutor in another.',
    },
    {
      name: 'Portia',
      role: 'A wealthy heiress of Belmont; Bassanio\u2019s beloved',
      body: 'Portia is witty, resourceful and constrained by her father\u2019s will, which forces her to marry whoever solves the casket test. Once married, she takes command of the play: disguised as the young lawyer Balthazar, she rescues Antonio with the argument that mercy \u201Cis not strained\u201D and then outmanoeuvres Shylock on the letter of the bond. Her control of the ring plot in Act 5 lets her reassert authority over Bassanio. Portia embodies both the play\u2019s idealism about mercy and its hard-edged legalism.',
    },
    {
      name: 'Bassanio',
      role: 'A young Venetian gentleman; Antonio\u2019s friend and Portia\u2019s suitor',
      body: 'Bassanio is a charming but financially reckless nobleman who asks Antonio for yet another loan to fund his courtship of Portia. He is the suitor who correctly reads the caskets, choosing lead over gold and silver and arguing that \u201Cthe world is still deceived with ornament.\u201D His giving away of Portia\u2019s ring at the trial sets up the comic test in Act 5. Bassanio is sincere and affectionate but also dependent on richer, stronger figures \u2014 first Antonio, then Portia \u2014 which complicates any simple reading of him as a romantic hero.',
    },
    {
      name: 'Jessica',
      role: 'Shylock\u2019s daughter; in love with Lorenzo',
      body: 'Jessica elopes from her father\u2019s house disguised as a boy, taking with her a casket of ducats and jewels, and converts to Christianity to marry Lorenzo. She describes her father\u2019s house as \u201Chell\u201D and is welcomed into the Christian community at Belmont. Her character raises difficult questions about identity, loyalty and assimilation: she gains entry to the dominant society only by rejecting her father and her faith, and the final act leaves her quietly on the margins of the celebrating couples.',
    },
    {
      name: 'Gratiano',
      role: 'A friend of Bassanio and Antonio; later Nerissa\u2019s husband',
      body: 'Gratiano is loud, jocular and quick to anger. He provides much of the play\u2019s comic energy in the Venetian scenes but also delivers some of its ugliest speech, cheering Shylock\u2019s downfall at the trial with cries of \u201CA second Daniel!\u201D and openly urging his hanging. He marries Nerissa in a parallel wedding to Bassanio and Portia, and his role in the ring plot echoes Bassanio\u2019s. Shakespeare uses Gratiano to expose the casual aggression that runs beneath the Christian group\u2019s courtesies and to complicate any easy sense of comic resolution at the end.',
    },
    {
      name: 'Nerissa',
      role: 'Portia\u2019s waiting-gentlewoman; later Gratiano\u2019s wife',
      body: 'Nerissa is Portia\u2019s confidante and companion, sharp-witted, loyal and alert to social performance. She accompanies Portia to Venice disguised as the young lawyer\u2019s clerk, helps engineer the rescue of Antonio from Shylock\u2019s bond, and joins the ring trick to test Gratiano in the final act. Her relationship with Portia is one of the play\u2019s warmest bonds, mirroring and balancing the intense male friendship between Antonio and Bassanio. Shakespeare uses Nerissa as a practical, level-headed intelligence that underwrites Portia\u2019s more spectacular interventions in the courtroom.',
    },
  ],
  themes: [
    {
      title: 'Mercy and justice',
      body: 'The play\u2019s most quoted speech, Portia\u2019s \u201CThe quality of mercy is not strained,\u201D sets up mercy as an almost divine attribute that \u201Cblesseth him that gives and him that takes.\u201D Yet the trial scene complicates the theme: Shylock refuses mercy, Portia defeats him on the strictest letter of the law, and the \u201Cmerciful\u201D outcome imposed on Shylock includes forced conversion and the loss of his estate. Shakespeare tests whether Christian mercy in practice is truly different from legal vengeance, or whether it can shade into another form of coercion. Mercy is preached eloquently and applied unevenly, and the audience is invited to weigh rhetoric against action.',
    },
    {
      title: 'Prejudice and otherness',
      body: 'Shylock is constantly defined by what he is not: not Christian, not Venetian in the fullest sense, not trusted. He is called \u201Cdog,\u201D \u201Cdevil\u201D and \u201Cthe Jew\u201D far more often than by his name. Shakespeare stages this prejudice unflinchingly, but he also gives Shylock the play\u2019s most famous plea for shared humanity: \u201CIf you prick us, do we not bleed?\u201D The play both draws on and exposes the antisemitic stereotypes of its time, and modern productions usually foreground this tension. The Prince of Morocco\u2019s arrival at Belmont \u2014 \u201CMislike me not for my complexion\u201D \u2014 shows that racial prejudice is not confined to Venice or to Jewish characters, making otherness a structural concern of the whole play.',
    },
    {
      title: 'Money, bonds and usury',
      body: 'Venice is a city of trade, and the play is saturated with the language of credit, ducats, argosies and interest. Antonio lends freely and without interest, positioning himself against Shylock, for whom moneylending at interest (usury) is a legitimate trade forbidden to Christians. The bond of flesh literalises the logic of debt: a human body becomes collateral. Shakespeare explores how relationships \u2014 friendship, marriage, religious identity \u2014 become entangled with financial obligation. The rings Portia and Nerissa give to their husbands are another kind of bond, and the play asks what kinds of promises ought to be binding and which can be bent.',
    },
    {
      title: 'Love and friendship',
      body: 'The play sets several kinds of love against one another. Romantic love is represented by the Belmont couples \u2014 Portia and Bassanio, Nerissa and Gratiano, Jessica and Lorenzo. Friendship, especially Antonio\u2019s devotion to Bassanio, is given equal or greater weight, and some critics read it as homoerotic. Antonio\u2019s willingness to die for Bassanio is matched by Portia\u2019s willingness to pay any price to save Antonio, and the two loves collide in the ring plot, which tests whether Bassanio will honour his debt to his friend or to his wife. The play does not cleanly prioritise one kind of love, but suggests that they must learn to coexist.',
    },
    {
      title: 'Appearance and the caskets',
      body: 'The casket test in Belmont dramatises a central preoccupation of the play: the gap between appearance and reality. Gold and silver tempt with outward splendour but conceal death and folly, while the plain lead casket holds Portia\u2019s portrait. The scroll inside the gold casket, \u201CAll that glisters is not gold,\u201D has become proverbial. Shakespeare extends the idea across the play: Portia and Nerissa disguise themselves as men; Jessica disguises herself as a boy; Shylock\u2019s \u201Cmerry bond\u201D turns out to be deadly serious; Bassanio\u2019s prosperous manner conceals debt. Reading surfaces wrongly is dangerous, and the play trains its audience to look twice at every performance.',
    },
    {
      title: 'Outsiders and belonging',
      body: 'Shylock, Jessica and the Prince of Morocco are all, in different ways, outsiders to the Christian Venetian world that the play ostensibly celebrates. Jessica attempts to cross the line by converting and marrying in; Morocco is turned away; Shylock is broken and forcibly converted. Antonio, the titular merchant, is arguably also an outsider within his own society \u2014 melancholy, unmarried, financially ruined at a key moment, and emotionally dependent on a younger friend who leaves him. The play asks who is allowed to belong to a community, and on what terms, and whether the harmonious final scene at Belmont is an inclusive vision or a carefully policed one.',
    },
  ],
  historicalContext: [
    'Shakespeare wrote The Merchant of Venice in the late 1590s, during a period of intense English interest in Italy, trade and the figure of the Jew. There had been no legal Jewish community in England since the expulsion of 1290, and most Elizabethan audiences would never knowingly have met a Jewish person. Jewish characters on the English stage were largely shaped by anti-Jewish stereotypes inherited from medieval religious drama and sharpened by recent events, including the 1594 execution of the Queen\u2019s physician Rodrigo Lopez, a converted Portuguese Jew accused of plotting against Elizabeth I. Christopher Marlowe\u2019s The Jew of Malta, with its villainous Barabas, was a popular influence. Shakespeare\u2019s Shylock draws on these stereotypes but also complicates them, giving him a reasoned grievance and famously human language.',
    'Venice fascinated Elizabethans as a cosmopolitan, mercantile republic where trade crossed religious and national lines. Its real Jewish community lived under strict restrictions: from 1516 they were required to live in a gated area called the Ghetto Nuovo, from which the modern word \u201Cghetto\u201D derives. Jews in Venice were permitted to lend money at interest because the Christian prohibition on usury left a gap in the financial system, but they were heavily taxed, socially segregated and often scapegoated. Shakespeare\u2019s Venice is an imaginative, partly romanticised version of the city rather than a documentary portrait, but the pressures on Shylock \u2014 legal, economic and religious \u2014 reflect real structures familiar to his sources.',
    'The three-caskets story is a very old folk motif that Shakespeare almost certainly encountered in the Gesta Romanorum, a medieval Latin collection of moral tales popular in Elizabethan England. The plot of a bond for a pound of flesh comes chiefly from Giovanni Fiorentino\u2019s Italian tale Il Pecorone (printed 1558), which Shakespeare adapted freely. Modern readers and audiences must also sit with the play\u2019s legacy: it has at various points been used to reinforce antisemitic stereotypes, notoriously in Nazi Germany, and it continues to generate debate about how it should be taught and staged. Most contemporary productions and critics treat the play as an interrogation of prejudice rather than an endorsement of it, but the question is a live one.',
  ],
  quotations: [
    {
      quote: '"In sooth, I know not why I am so sad."',
      who: 'Antonio \u2014 Act 1, Scene 1',
      analysis:
        'The play\u2019s opening line establishes Antonio\u2019s unexplained melancholy and sets a muted, uneasy tone beneath the comic surface. Critics have read the sadness as premonition, as grief over losing Bassanio to Portia, or as the existential cost of mercantile life. Shakespeare withholds the cause, so the line invites the audience to watch Antonio closely and to sense from the outset that this \u201Ccomedy\u201D will be shadowed by something harder to name.',
    },
    {
      quote:
        '"I hate him for he is a Christian; / But more for that in low simplicity / He lends out money gratis, and brings down / The rate of usance here with us in Venice."',
      who: 'Shylock \u2014 Act 1, Scene 3',
      analysis:
        'Shylock\u2019s aside when he first meets Antonio reveals motives that are both religious and commercial. Shakespeare makes Shylock\u2019s grievance rational as well as vindictive: Antonio undercuts him economically by lending without interest. The blunt \u201CI hate him\u201D is shocking, but placed inside a reasoned economic analysis it complicates a purely villainous reading and sets up the play\u2019s entanglement of faith and money.',
    },
    {
      quote: '"Let him look to his bond."',
      who: 'Shylock \u2014 Act 3, Scene 1',
      analysis:
        'Repeated three times, the line becomes Shylock\u2019s grim mantra once Antonio\u2019s ships are reported lost. The formal, legal word \u201Cbond\u201D stands in starkly for the messy, human reality of a pound of flesh, and its repetition signals Shylock\u2019s resolve to hold the Christian world to the letter of its own contracts. Shakespeare uses the incantatory structure to show grief and fury hardening into a fixed purpose.',
    },
    {
      quote:
        '"Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions?"',
      who: 'Shylock \u2014 Act 3, Scene 1',
      analysis:
        'Shylock\u2019s great plea for shared humanity is built on accumulating rhetorical questions that force the audience to answer yes. By grounding identity in shared bodily experience, he exposes the hypocrisy of a society that denies him equal feeling. The speech is often quoted in isolation as a humanist defence, but in context it builds towards a threat of revenge, making Shakespeare\u2019s portrait painfully double-edged.',
    },
    {
      quote:
        '"If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge?"',
      who: 'Shylock \u2014 Act 3, Scene 1',
      analysis:
        'The climax of Shylock\u2019s speech turns the logic of shared humanity into a justification for revenge. Shakespeare arranges the clauses so that the first three invite sympathy and the fourth implicates the audience: if you accept his likeness in suffering, you must accept his likeness in anger. The line sharpens the play\u2019s central ethical problem, refusing to let Christian viewers stand outside Shylock\u2019s reasoning.',
    },
    {
      quote: '"I am a Jew."',
      who: 'Shylock \u2014 Act 3, Scene 1',
      analysis:
        'Spoken during the \u201CHath not a Jew eyes?\u201D sequence, the bare declaration refuses the euphemisms and insults that surround him. Shakespeare strips the line of ornament so that it lands as simple fact, reclaiming the identity that the Christians use as an insult. Coming from a character constantly addressed as \u201Cthe Jew\u201D rather than by name, the first-person assertion is itself an act of resistance.',
    },
    {
      quote: '"All that glisters is not gold; / Often have you heard that told."',
      who: 'Scroll in Morocco\u2019s gold casket \u2014 Act 2, Scene 7',
      analysis:
        'The proverb inside the gold casket rebukes Morocco for choosing by outward splendour and states the play\u2019s central warning in miniature. Shakespeare uses the scroll\u2019s bouncy rhyme to give a moral truism the feel of ancient wisdom. The line has passed into everyday English and anchors the play\u2019s repeated motif of ornament concealing emptiness \u2014 a pattern that reaches beyond the caskets into disguise, rhetoric and the trial itself.',
    },
    {
      quote:
        '"So may the outward shows be least themselves. / The world is still deceived with ornament."',
      who: 'Bassanio \u2014 Act 3, Scene 2',
      analysis:
        'Bassanio\u2019s reasoning before he chooses the lead casket makes the play\u2019s theme of appearance explicit. The pithy sentence \u201CThe world is still deceived with ornament\u201D applies well beyond the casket trial \u2014 to legal rhetoric, to Christian courtesy, to the disguises worn in Act 4. Shakespeare gives Bassanio, often dismissed as a fortune-hunter, a moment of genuine ethical insight and uses it to justify his winning Portia.',
    },
    {
      quote:
        '"The quality of mercy is not strained. / It droppeth as the gentle rain from heaven / Upon the place beneath."',
      who: 'Portia \u2014 Act 4, Scene 1',
      analysis:
        'Portia\u2019s speech as \u201CBalthazar\u201D is the most quoted passage in the play. \u201CStrained\u201D means forced: mercy must be freely given. The image of rain falling on everything beneath gives mercy a cosmic, almost sacramental generosity, and the speech argues that mercy \u201Cblesseth him that gives and him that takes.\u201D Yet it is aimed at a man who has been denied mercy all his life, and the gap between the speech and the sentence that follows troubles the scene\u2019s apparent moral clarity.',
    },
    {
      quote: '"And earthly power doth then show likest God\u2019s / When mercy seasons justice."',
      who: 'Portia \u2014 Act 4, Scene 1',
      analysis:
        'Portia argues that law and mercy must work together, not in opposition. The culinary metaphor of \u201Cseasoning\u201D keeps the theological argument concrete: justice without mercy is unpalatable. The lines articulate a Christian ideal that the play then tests by action. Because Shylock refuses this vision and Portia then uses strict law to defeat him, the speech becomes both the play\u2019s moral peak and the marker of its most difficult irony.',
    },
    {
      quote: '"I stand for judgment. Answer: shall I have it?"',
      who: 'Shylock \u2014 Act 4, Scene 1',
      analysis:
        'Shylock\u2019s blunt demand cuts through Portia\u2019s extended rhetoric with the force of law. The short, largely monosyllabic line, with its courtroom formality, shows him refusing the emotional register of mercy and insisting on procedural fact. Shakespeare uses the contrast in rhythm and diction between Portia\u2019s fluent, image-rich verse and Shylock\u2019s stripped, legalistic speech to dramatise two incompatible ideas of what justice is, and the direct question \u201CAnswer: shall I have it?\u201D forces the court to commit.',
    },
    {
      quote:
        '"This bond doth give thee here no jot of blood; / The words expressly are \u2018a pound of flesh\u2019."',
      who: 'Portia \u2014 Act 4, Scene 1',
      analysis:
        'Portia\u2019s turning point in the trial uses the letter of the law against Shylock. Having invoked mercy and been refused, she now out-legalises the legalist: the bond specifies flesh, not blood, and demands exactly one pound. Shakespeare shows mercy and literalism collapsing into one another, and the audience is left to decide whether Portia has delivered justice or trapped Shylock in a technicality.',
    },
    {
      quote:
        '"A Daniel come to judgment! Yea, a Daniel! / O wise young judge, how I do honour thee!"',
      who: 'Shylock \u2014 Act 4, Scene 1',
      analysis:
        'Shylock hails the disguised Portia as a biblical prophet-judge, expecting her to uphold the bond. The dramatic irony is savage: he will soon be crushed by the same \u201CDaniel.\u201D Shakespeare also loads the reference with class and age assumptions \u2014 the \u201Cwise young judge\u201D is, in fact, a woman in disguise \u2014 so that the moment of praise is already the beginning of a reversal.',
    },
    {
      quote: '"A second Daniel, a Daniel, Jew! / Now, infidel, I have you on the hip."',
      who: 'Gratiano \u2014 Act 4, Scene 1',
      analysis:
        'Gratiano\u2019s taunt weaponises Shylock\u2019s own praise of Portia as the judgement turns. The mocking repetition \u201Ca Daniel, Jew!\u201D and the slur \u201Cinfidel\u201D expose the raw anti-Jewish hostility that has been simmering throughout the play. Shakespeare places the ugliest line in the mouth of a minor character, which both protects Portia\u2019s dignity and shows that Shylock\u2019s defeat is celebrated with cruelty by the Christian group as a whole.',
    },
    {
      quote:
        '"You take my house when you do take the prop / That doth sustain my house; you take my life / When you do take the means whereby I live."',
      who: 'Shylock \u2014 Act 4, Scene 1',
      analysis:
        'Stripped of his wealth and his religion, Shylock speaks with unusual plainness. The triple repetition of \u201Cyou take\u201D turns the court\u2019s judgement into a catalogue of violations, and the parallel between \u201Chouse\u201D and \u201Clife\u201D insists that livelihood and identity are inseparable. Shakespeare gives his defeated figure a last moment of dignified argument that most modern productions treat as the emotional centre of the scene.',
    },
    {
      quote:
        '"The man that hath no music in himself, / Nor is not moved with concord of sweet sounds, / Is fit for treasons, stratagems, and spoils."',
      who: 'Lorenzo \u2014 Act 5, Scene 1',
      analysis:
        'Back at Belmont, Lorenzo\u2019s meditation on music sets the comic mode of Act 5 against the harsh legalism of Act 4. Shakespeare uses music as a sign of moral harmony, and the lines quietly exclude those who lack it \u2014 a pointed phrase so soon after Shylock\u2019s humiliation. The speech is beautiful and, read closely, unsettling: the restored harmony of Belmont depends on an absence.',
    },
    {
      quote:
        '"How far that little candle throws his beams! / So shines a good deed in a naughty world."',
      who: 'Portia \u2014 Act 5, Scene 1',
      analysis:
        'Portia\u2019s image as she returns to Belmont uses a single candle in darkness to represent the power of a good action in a corrupt society. Shakespeare invests the small visual detail with ethical weight: goodness, like the candle, is modest but essential. Placed after the trial, the line invites the audience to measure how \u201Cgood\u201D the deeds of Act 4 have really been, keeping the play\u2019s moral questions alive into the comic ending.',
    },
  ],
}

export default async function TheMerchantOfVenicePage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="The Merchant of Venice \u2014 Complete GCSE Study Guide"
        description="In-depth study guide for The Merchant of Venice covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'The Merchant of Venice',
            url: 'https://theenglishhub.app/revision/texts/the-merchant-of-venice',
          },
        ]}
      />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>
          This AI-assisted guide is under expert review. Cross-check with your teacher&rsquo;s notes
          before relying on it for exam preparation.
        </span>
      </div>
      <TextGuide data={data} />
    </>
  )
}
