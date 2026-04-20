// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Othello — Study Guide | The English Hub',
  description:
    'In-depth study guide for Othello by William Shakespeare: plot, characters, themes, context and key quotations for A-Level English Literature.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/othello',
  },
}

const data: TextGuideData = {
  title: 'Othello',
  author: 'William Shakespeare',
  year: 'c. 1603',
  category: 'Play',
  badge: 'Eduqas / AQA A-Level / Edexcel A-Level',
  intro:
    'Shakespeare\u2019s Othello is a domestic tragedy of jealousy, race and manipulation. Written around 1603 at the beginning of the Jacobean era, the play follows a distinguished Moorish general in the service of Venice who is destroyed from within by his trusted ensign, Iago. Iago\u2019s motiveless malignity, Othello\u2019s susceptibility to doubt and the destructive power of a patriarchal honour culture combine to produce one of Shakespeare\u2019s most intimate and devastating tragedies. Studied widely at A-Level, the play raises urgent questions about race and outsider identity in early modern Europe, the vulnerability of marriage to external poison, and the gap between appearance and reality. Its structure \u2014 a rapid public rise followed by a claustrophobic descent \u2014 gives Othello a psychological intensity that continues to generate powerful critical and performance readings today.',
  quickInfo: {
    genre: 'Tragedy',
    setting: 'Venice, then Cyprus',
    length: 'Five-act play (~3,550 lines)',
    published: 'First quarto 1622; folio 1623',
  },
  plotSummary: [
    'The play opens in Venice at night, where Iago, ensign to the Moorish general Othello, wakes the senator Brabantio with the news that his daughter Desdemona has eloped with Othello. Iago is already burning with resentment because Othello has promoted the younger Cassio to lieutenant over him. Roderigo, a foolish suitor still hoping to win Desdemona, is funding Iago\u2019s schemes. Brabantio hauls Othello before the Duke and the senate to answer the charge that he has seduced Desdemona by witchcraft. Othello defends himself with a calm, eloquent account of how Desdemona came to love him through his stories of travel and danger, and Desdemona herself declares her choice in public. The Duke sides with Othello and dispatches him to Cyprus to defend the island against a Turkish invasion. Desdemona insists on sailing with him.',
    'In Act 2, a storm scatters the Turkish fleet before the battle can begin, and the focus of the play narrows to the confined military garrison on Cyprus. Iago engineers his first trap: he gets Cassio drunk on the night of Othello\u2019s wedding celebrations, provokes a fight with Roderigo, and draws Montano, the former governor, into the brawl. Othello strips Cassio of his lieutenancy. Iago then persuades the distraught Cassio to plead for reinstatement through Desdemona, knowing that her kindness will look like something darker when seen through suspicious eyes.',
    'Act 3 is the hinge of the tragedy. In the long central temptation scene, Iago gradually poisons Othello\u2019s mind with hints, hesitations and pretended reluctance, suggesting that Desdemona is in a liaison with Cassio. A handkerchief that Othello gave Desdemona as his first gift \u2014 embroidered with strawberries \u2014 falls from her hand and is picked up by Iago\u2019s wife Emilia, who gives it to Iago without knowing his purpose. Iago plants it in Cassio\u2019s lodgings. By the end of the act Othello has sworn revenge and promoted Iago to lieutenant, while Desdemona, bewildered by her husband\u2019s change, keeps trying to advocate for Cassio, unintentionally confirming the suspicion.',
    'In Act 4 Othello\u2019s collapse becomes visible. He eavesdrops on a conversation with Cassio that Iago has stage-managed to refer to the courtesan Bianca, interpreting the laughter as proof of adultery. Iago shows him the handkerchief in Cassio\u2019s hand. Othello strikes Desdemona in public before the Venetian ambassador Lodovico and decides she must die. In Act 5 Iago engineers Roderigo\u2019s attack on Cassio; Cassio is wounded, Roderigo is killed by Iago to silence him. Othello smothers Desdemona in their bed. Emilia breaks in, discovers what has happened, and exposes the handkerchief plot, revealing Iago as the architect of everything. Iago stabs Emilia and is arrested. Othello, recognising what he has done, delivers a final speech about how he should be remembered and kills himself beside Desdemona\u2019s body. Cassio is left to govern Cyprus and Iago is led away to be tortured.',
  ],
  characters: [
    {
      name: 'Othello',
      role: 'A Moorish general in the Venetian army; the tragic protagonist',
      body: 'Othello is a distinguished military commander whose eloquence, dignity and record of service have earned him a command that a foreigner would not normally hold. Shakespeare presents him as an outsider defined by his blackness in a white Christian society, admired for his usefulness but never fully accepted. His language in Act 1 is expansive and self-assured; by Act 4 it has fractured into disordered prose, exclamation and violent imagery. His tragic flaw is his willingness to believe Iago over Desdemona, rooted partly in racial insecurity (\u201cHaply, for I am black\u201d) and partly in the absolute nature of his emotional investments. His final speech reclaims his dignity just long enough for him to execute justice on himself.',
    },
    {
      name: 'Desdemona',
      role: 'A Venetian noblewoman; Brabantio\u2019s daughter and Othello\u2019s wife',
      body: 'Desdemona is intelligent, articulate and morally courageous. She defies her father in open court to declare her choice of husband, insists on accompanying Othello to Cyprus, and continues to advocate for Cassio out of loyalty even as her husband\u2019s behaviour darkens. Shakespeare refuses the passive-victim stereotype: Desdemona argues her case, questions Othello\u2019s accusations and, in the willow scene with Emilia, shows a quiet premonition of her death. Her final moments, in which she briefly revives to shield Othello by claiming she killed herself, make her one of the most morally radiant figures in Shakespearean tragedy.',
    },
    {
      name: 'Iago',
      role: 'Othello\u2019s ensign; the antagonist',
      body: 'Iago is the most verbally productive character in Shakespeare and one of the most disturbing. He offers multiple motives for his hatred of Othello \u2014 being passed over for promotion, unsubstantiated rumour that Othello has slept with Emilia, racial contempt, sheer resentment of virtue \u2014 without any of them fully explaining his conduct. Coleridge famously called this \u201cmotiveless malignity.\u201d Iago manipulates every other character through tailored language, exploiting their specific vulnerabilities: Roderigo\u2019s lust, Cassio\u2019s anxiety about reputation, Othello\u2019s racial self-doubt, Emilia\u2019s desire to please. His refusal to explain himself at the end (\u201cDemand me nothing\u201d) denies the audience closure.',
    },
    {
      name: 'Cassio',
      role: 'Othello\u2019s lieutenant',
      body: 'Cassio is a Florentine gentleman-soldier: educated, courteous, socially polished and, as Iago notes with contempt, theoretically trained rather than battle-tested. His excessive politeness to Desdemona provides Iago with raw material for suspicion. His disgrace in Act 2 reveals how much he values reputation: the lament \u201cReputation, reputation, reputation\u201d is both touching and revealing of the honour-based masculinity that surrounds him. He survives the play and is promoted to govern Cyprus, but only after being seriously wounded.',
    },
    {
      name: 'Emilia',
      role: 'Iago\u2019s wife and Desdemona\u2019s attendant',
      body: 'Emilia grows in importance across the play. Initially she seems loyal to Iago, handing him the handkerchief without understanding what he will do with it. But her great speech in Act 4 scene 3 on the mutual duties of husbands and wives is one of Shakespeare\u2019s most striking proto-feminist statements, and in Act 5 she becomes the play\u2019s truth-teller. She exposes Iago in front of everyone, defies his command to be silent \u2014 \u201cI will not charm my tongue\u201d \u2014 and is murdered for it. Her courage redeems the network of female silence that Iago has exploited.',
    },
    {
      name: 'Roderigo',
      role: 'A Venetian gentleman in love with Desdemona',
      body: 'Roderigo is Iago\u2019s dupe and his ATM. He has been pursuing Desdemona with gifts that Iago has mostly pocketed, and he is gullible enough to believe each new plan will finally win her. Shakespeare uses Roderigo to show Iago\u2019s technique in miniature: the manipulator spots appetite, flatters it and empties it. Roderigo\u2019s attempted murder of Cassio in Act 5 goes wrong, and Iago kills him to silence him \u2014 a fate that exposes the disposable nature of Iago\u2019s alliances.',
    },
    {
      name: 'Brabantio',
      role: 'A Venetian senator and Desdemona\u2019s father',
      body: 'Brabantio appears chiefly in Act 1. His response to Desdemona\u2019s elopement combines racist outrage \u2014 he cannot believe she would choose Othello without enchantment \u2014 with wounded patriarchal authority. His parting warning to Othello (\u201cShe has deceived her father, and may thee\u201d) plants the first seed of doubt that Iago will later cultivate. Off-stage his death of grief at Desdemona\u2019s marriage is reported in Act 5, adding another layer of collateral damage to the tragedy.',
    },
  ],
  themes: [
    {
      title: 'Jealousy',
      body: 'Jealousy is the engine of the tragedy, named directly by Iago as the \u201cgreen-eyed monster which doth mock / The meat it feeds on.\u201d Shakespeare is careful to show that Othello is not innately jealous \u2014 his initial response to Iago\u2019s hints is resistance \u2014 but that jealousy, once planted, consumes its host. The play distinguishes between different kinds of jealousy: Iago\u2019s professional resentment of Cassio, his vague sexual jealousy of Othello with Emilia, Roderigo\u2019s frustrated desire for Desdemona, and finally Othello\u2019s overwhelming sexual jealousy. Each feeds on imagination rather than evidence. Shakespeare dramatises how jealousy generates its own proof: Othello increasingly sees what he expects to see, and the handkerchief becomes \u201cocular proof\u201d only because he has already decided.',
    },
    {
      title: 'Race and otherness',
      body: 'Othello is the only non-white tragic protagonist in Shakespeare, and his race is inseparable from the play\u2019s action. From the opening scene Iago and Roderigo use animal and sexual imagery to describe him \u2014 \u201can old black ram / Is tupping your white ewe\u201d \u2014 establishing a racist Venetian discourse that Othello has had to live inside. Shakespeare complicates this by giving Othello the most eloquent language in the early acts, inviting the audience to see his dignity before seeing his skin. But Othello has also internalised some of the surrounding prejudice: his line \u201cHaply, for I am black\u201d shows how racial self-doubt makes him vulnerable to Iago\u2019s insinuations. The play asks whether the tragedy happens to Othello because he is an outsider, or because the society around him is ready to read every action through a racial lens.',
    },
    {
      title: 'Appearance vs reality',
      body: 'Every major disaster in the play arises from a gap between how things look and what they are. Iago\u2019s famous line \u201cI am not what I am\u201d defines him as pure dissimulation. Desdemona\u2019s kindness to Cassio looks like flirtation when reframed by Iago; a handkerchief dropped by accident looks like incriminating evidence; laughter about Bianca looks like laughter about Desdemona. Shakespeare builds the whole architecture of the tragedy on misinterpreted signs, and he reinforces the theme with the repeated use of the word \u201chonest\u201d to describe Iago \u2014 a word that, over the course of the play, is drained of meaning. The audience\u2019s privileged position, hearing Iago\u2019s soliloquies, intensifies the dramatic irony.',
    },
    {
      title: 'Honour and reputation',
      body: 'The world of Othello is structured around masculine honour and female reputation, two codes that the play shows to be both powerful and destructive. Cassio\u2019s lament after his drunken brawl \u2014 \u201cReputation, reputation, reputation! O, I have lost my reputation\u201d \u2014 captures how a soldier\u2019s identity rests on public standing. Iago exploits this by attacking reputations from the outside: he destroys Cassio\u2019s by getting him drunk, Desdemona\u2019s by insinuating adultery, Othello\u2019s by pushing him to behaviour that confirms Venetian stereotypes. Female reputation is even more fragile, being tied to sexual fidelity; a rumour is enough to condemn Desdemona in Othello\u2019s mind. Emilia\u2019s defiance in Act 5 is partly a rejection of the reputation-based silence that has been required of her.',
    },
    {
      title: 'Gender and marriage',
      body: 'Othello dramatises an early modern patriarchy in which women move from the authority of fathers to the authority of husbands. Desdemona\u2019s elopement is radical because it sidesteps her father\u2019s consent, and Brabantio\u2019s sense of personal violation (\u201cShe has deceived her father\u201d) is consistent with his social world. Once married, Desdemona is subject to Othello in a way that leaves her defenceless against his suspicion. Shakespeare sets up a spectrum of female positions: Desdemona\u2019s idealising love, Emilia\u2019s pragmatic marriage to Iago, and Bianca\u2019s socially stigmatised status as a courtesan. Emilia\u2019s Act 4 speech on the mutual obligations of husbands and wives, and her willingness to die telling the truth, push back against the system that the play anatomises.',
    },
    {
      title: 'Manipulation and trust',
      body: 'Iago\u2019s method is not force but manipulation \u2014 the careful placement of language, images and objects into minds already primed to receive them. He rarely tells a direct lie; instead he pauses, hesitates, asks questions, and lets the listener draw the ruinous conclusion. Shakespeare examines the particular vulnerabilities trust creates: Othello\u2019s faith in Iago as his ensign, Cassio\u2019s friendship with the man who gets him drunk, Emilia\u2019s wifely habit of handing over the handkerchief. Every destruction in the play is made possible by a relationship of trust that Iago inverts. The tragedy is in some sense a tragedy of misplaced faith, and the play asks whether faith itself \u2014 in a spouse, in a soldier, in a god \u2014 is ever safe in a world where signs can be forged.',
    },
  ],
  historicalContext: [
    'Shakespeare wrote Othello around 1603, at the start of the reign of King James I. The play was performed at court in November 1604 and published in quarto in 1622, then in the First Folio in 1623. The early Jacobean period was a moment of heightened anxiety about outsiders and about the stability of marriage: James\u2019s succession had only just resolved the question of who would rule, plague had closed the theatres, and there was intense public interest in honour, duelling and reputation. Othello sits at the beginning of Shakespeare\u2019s major tragic sequence, close to Hamlet and written just before King Lear and Macbeth.',
    'Venice in the early seventeenth century was, in the English imagination, both a respected commercial republic and a morally ambiguous city of intrigue, sexual sophistication and military professionalism. Its practice of hiring foreign generals \u2014 because Venetian patricians feared a citizen commander \u2014 makes Othello\u2019s position plausible rather than fantastical. Cyprus, the play\u2019s second location, was a Venetian colony on the front line against the Ottoman empire until it fell to the Turks in 1571. By setting the military crisis on Cyprus, Shakespeare places his tragedy on a specific historical frontier between Christian Europe and the Islamic Mediterranean.',
    'Moorish characters had appeared on the English stage before Othello \u2014 notably Aaron in Titus Andronicus and the Prince of Morocco in The Merchant of Venice \u2014 usually as either exoticised figures or villains. Shakespeare breaks with that tradition by making his Moor the tragic hero. \u201cMoor\u201d in early modern English was a flexible term covering North Africans, sub-Saharan Africans and, sometimes, Muslims generally; Othello\u2019s exact background is deliberately ambiguous. Contemporary accounts of the visit of a Moroccan ambassador to Elizabeth\u2019s court in 1600 and public anxiety about the status of \u201cblackamoors\u201d in England provide a specific context for the racial language of the play.',
    'The honour culture in which Othello operates was familiar to Jacobean audiences: male status depended on public reputation, female status on sexual fidelity, and offences to either were felt to demand violent redress. Duelling was a live social problem. Shakespeare\u2019s immediate source was an Italian novella by Cinthio, \u201cUn Capitano Moro\u201d, published in Hecatommithi (1565). In Cinthio\u2019s version the Moor has no name, the ensign has clearer motives and survives, and the murder of the Desdemona figure is more prolonged and more brutal. Shakespeare compresses and elevates the story, gives his Moor eloquence, names, and interior life, and invents the handkerchief as the central prop of the deception.',
  ],
  quotations: [
    {
      quote: '"I am not what I am."',
      who: 'Iago \u2014 Act 1, Scene 1',
      analysis:
        'Iago\u2019s perverse inversion of the biblical \u201cI am that I am\u201d announces his nature as pure dissimulation and frames the whole play as a tragedy of misread signs.',
    },
    {
      quote: '"An old black ram / Is tupping your white ewe."',
      who: 'Iago \u2014 Act 1, Scene 1',
      analysis:
        'Iago rouses Brabantio with animal, racist and sexual imagery, establishing the Venetian racial vocabulary that shadows Othello from the opening scene.',
    },
    {
      quote: '"She loved me for the dangers I had passed, / And I loved her that she did pity them."',
      who: 'Othello \u2014 Act 1, Scene 3',
      analysis:
        'Othello\u2019s account of his courtship to the Senate defines the marriage as one founded on narrative and sympathy \u2014 a bond that Iago will later reframe as seduction.',
    },
    {
      quote: '"Put money in thy purse."',
      who: 'Iago \u2014 Act 1, Scene 3',
      analysis:
        'Iago\u2019s refrain to Roderigo, repeated insistently, shows how he manipulates through rhythm and repetition as much as content, and reduces his dupe to a wallet.',
    },
    {
      quote: '"Reputation, reputation, reputation! O, I have lost my reputation!"',
      who: 'Cassio \u2014 Act 2, Scene 3',
      analysis:
        'Cassio\u2019s triple cry after his drunken disgrace dramatises the weight of honour culture on male identity and gives Iago the opening he needs to manipulate him.',
    },
    {
      quote: '"O, beware, my lord, of jealousy; / It is the green-eyed monster which doth mock / The meat it feeds on."',
      who: 'Iago \u2014 Act 3, Scene 3',
      analysis:
        'Iago names the emotion he is deliberately planting, the hypocrisy sharpened by the vivid metaphor of jealousy as a predator that mocks what it consumes.',
    },
    {
      quote: '"Haply, for I am black."',
      who: 'Othello \u2014 Act 3, Scene 3',
      analysis:
        'Othello\u2019s first explanation for why Desdemona might betray him is racial self-doubt, exposing how thoroughly he has internalised the society\u2019s prejudice.',
    },
    {
      quote: '"She did deceive her father, marrying you."',
      who: 'Iago \u2014 Act 3, Scene 3',
      analysis:
        'Iago reactivates Brabantio\u2019s parting warning, turning Desdemona\u2019s original act of love into evidence of a general capacity for deception.',
    },
    {
      quote: '"O, now for ever / Farewell the tranquil mind! Farewell content!"',
      who: 'Othello \u2014 Act 3, Scene 3',
      analysis:
        'Othello\u2019s farewell-to-occupation speech shows how the poisoning of his personal life annihilates his public identity as a soldier and commander.',
    },
    {
      quote: '"I\u2019ll tear her all to pieces."',
      who: 'Othello \u2014 Act 3, Scene 3',
      analysis:
        'The sudden, violent image signals the collapse of Othello\u2019s measured early-act eloquence into the fragmented, savage language of jealous rage.',
    },
    {
      quote: '"Think on thy sins."',
      who: 'Othello \u2014 Act 5, Scene 2',
      analysis:
        'Othello enters the bedroom casting himself as a priest of justice rather than a murderer, a self-deception that the scene will dismantle line by line.',
    },
    {
      quote: '"Put out the light, and then put out the light."',
      who: 'Othello \u2014 Act 5, Scene 2',
      analysis:
        'The repeated phrase equates extinguishing the candle with extinguishing Desdemona\u2019s life, and hesitates with appalling clarity on the irreversibility of the second act.',
    },
    {
      quote: '"I kissed thee ere I killed thee."',
      who: 'Othello \u2014 Act 5, Scene 2',
      analysis:
        'The chiasmus of kiss and kill compresses love and murder into a single line and shows Othello\u2019s attempt to aestheticise what he has done.',
    },
    {
      quote: '"I will not charm my tongue; I am bound to speak."',
      who: 'Emilia \u2014 Act 5, Scene 2',
      analysis:
        'Emilia\u2019s refusal to be silenced by her husband makes her the play\u2019s truth-teller and breaks the network of female silence that Iago has exploited.',
    },
    {
      quote: '"Demand me nothing: what you know, you know. / From this time forth I never will speak word."',
      who: 'Iago \u2014 Act 5, Scene 2',
      analysis:
        'Iago\u2019s final refusal to explain himself denies the audience closure and leaves his malignity permanently unresolved.',
    },
    {
      quote: '"Then must you speak / Of one that loved not wisely but too well."',
      who: 'Othello \u2014 Act 5, Scene 2',
      analysis:
        'Othello shapes his own epitaph, trying to reclaim dignity and narrative control over how Venice will remember him after his suicide.',
    },
    {
      quote: '"I took by the throat the circumcised dog / And smote him, thus."',
      who: 'Othello \u2014 Act 5, Scene 2',
      analysis:
        'Othello re-enacts a past military execution of a Turk and completes it on himself, splitting his identity into Venetian judge and foreign enemy in a single gesture.',
    },
    {
      quote: '"O Spartan dog, / More fell than anguish, hunger, or the sea!"',
      who: 'Lodovico \u2014 Act 5, Scene 2',
      analysis:
        'Lodovico\u2019s final denunciation of Iago uses an image of ruthless animal violence, returning to the animal imagery with which Iago opened the play.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'oth-1', question: 'Who is Othello\u2019s ensign and the antagonist of the play?', type: 'multiple-choice', options: ['Cassio', 'Iago', 'Roderigo', 'Brabantio'], correctIndex: 1, explanation: 'Iago is Othello\u2019s ensign. He is passed over for promotion in favour of Cassio and engineers the entire tragedy through manipulation rather than direct confrontation.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'oth-2', question: 'Where does the action of the play move to after Act 1?', type: 'multiple-choice', options: ['Rome', 'Cyprus', 'Sicily', 'Malta'], correctIndex: 1, explanation: 'After the Venetian senate scene, Othello is sent to Cyprus to defend the Venetian colony against a Turkish fleet. The storm destroys the fleet before he arrives, and the remainder of the play unfolds in the claustrophobic garrison.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'oth-3', question: 'What object becomes the \u201cocular proof\u201d of Desdemona\u2019s supposed infidelity?', type: 'multiple-choice', options: ['A letter', 'A ring', 'A handkerchief embroidered with strawberries', 'A locket'], correctIndex: 2, explanation: 'The handkerchief \u2014 Othello\u2019s first gift to Desdemona \u2014 is dropped, picked up by Emilia, passed to Iago, and planted in Cassio\u2019s lodgings. It becomes the material evidence that convinces Othello.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'oth-4', question: 'Who is promoted to lieutenant over Iago at the start of the play?', type: 'multiple-choice', options: ['Roderigo', 'Cassio', 'Montano', 'Lodovico'], correctIndex: 1, explanation: 'Cassio, a Florentine, is promoted to lieutenant. Iago resents this and cites it as one of his motives, though the play refuses to give his malice a single sufficient cause.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'oth-5', question: 'Who says \u201cI am not what I am\u201d?', type: 'multiple-choice', options: ['Othello', 'Iago', 'Cassio', 'Desdemona'], correctIndex: 1, explanation: 'Iago declares himself in the first scene as pure dissimulation, inverting the biblical \u201cI am that I am\u201d. The line frames the whole play as a tragedy of misread signs.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'oth-6', question: 'How does Desdemona die?', type: 'multiple-choice', options: ['She is poisoned', 'She is stabbed by Iago', 'Othello smothers her in their bed', 'She kills herself'], correctIndex: 2, explanation: 'Othello smothers Desdemona in the bed in Act 5 Scene 2. In her final moments she briefly revives and tries to protect him by saying she is guiltless but killed herself.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'oth-7', question: 'Who exposes Iago\u2019s plot at the end of the play?', type: 'multiple-choice', options: ['Cassio', 'Emilia', 'Roderigo', 'Lodovico'], correctIndex: 1, explanation: 'Emilia reveals that she gave the handkerchief to Iago. She defies his order to be silent \u2014 \u201cI will not charm my tongue\u201d \u2014 and he stabs her for it.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'oth-8', question: 'What does Iago famously call jealousy?', type: 'multiple-choice', options: ['The red-eyed demon', 'The green-eyed monster', 'The black serpent', 'The silent killer'], correctIndex: 1, explanation: 'Iago warns Othello: \u201cO, beware, my lord, of jealousy; / It is the green-eyed monster which doth mock / The meat it feeds on.\u201d The hypocrisy is that he is deliberately planting the emotion he claims to warn against.', topic: 'Themes', difficulty: 'foundation' },
  { id: 'oth-9', question: 'What does Cassio lose that makes him say \u201cReputation, reputation, reputation\u201d?', type: 'multiple-choice', options: ['His sword', 'His lieutenancy after being manipulated into a drunken brawl', 'His inheritance', 'His horse'], correctIndex: 1, explanation: 'Iago gets Cassio drunk, provokes a brawl, and Othello strips him of his lieutenancy. Cassio\u2019s triple cry of \u201cReputation\u201d shows how completely a soldier\u2019s identity depends on public standing.', topic: 'Themes', difficulty: 'higher' },
  { id: 'oth-10', question: 'What does Othello\u2019s line \u201cHaply, for I am black\u201d reveal?', type: 'multiple-choice', options: ['Pride in his identity', 'That he has internalised Venetian racial prejudice and is vulnerable because of it', 'A rejection of Desdemona', 'A military boast'], correctIndex: 1, explanation: 'Othello\u2019s first explanation for why Desdemona might betray him is racial self-doubt. Shakespeare shows how the surrounding prejudice has been absorbed by the hero himself, making him susceptible to Iago\u2019s insinuations.', topic: 'Themes', difficulty: 'higher' },
  { id: 'oth-11', question: 'What is Coleridge\u2019s famous description of Iago\u2019s character?', type: 'multiple-choice', options: ['Noble villain', 'Motiveless malignity', 'Frustrated soldier', 'Tragic servant'], correctIndex: 1, explanation: 'Coleridge described Iago\u2019s malice as \u201cmotiveless malignity\u201d: he offers several possible reasons for his hatred \u2014 missed promotion, sexual suspicion, sheer resentment of virtue \u2014 but none of them fully accounts for his conduct.', topic: 'Characters', difficulty: 'higher' },
  { id: 'oth-12', question: 'How does Shakespeare use the word \u201chonest\u201d in the play?', type: 'multiple-choice', options: ['Only for Desdemona', 'As a recurring adjective for Iago, whose repeated application progressively empties the word of meaning', 'As Othello\u2019s self-description', 'It is never used'], correctIndex: 1, explanation: 'Characters repeatedly call Iago \u201chonest.\u201d The word\u2019s relentless attachment to the play\u2019s arch-liar hollows it out, and the audience experiences the gap between the label and the reality as a central source of dramatic irony.', topic: 'Writer\'s Methods', difficulty: 'higher' },
  { id: 'oth-13', question: 'Why is the handkerchief especially powerful as a symbol?', type: 'multiple-choice', options: ['It is a state document', 'It is Othello\u2019s first gift to Desdemona, carries family history, and is small enough to pass invisibly between characters', 'It was a gift from Iago', 'It has magical properties the audience sees'], correctIndex: 1, explanation: 'The handkerchief is personal, intimate and highly portable. Its small, transferable nature allows it to move between hands unobserved, turning a token of love into \u201cocular proof\u201d of betrayal.', topic: 'Writer\'s Methods', difficulty: 'higher' },
  { id: 'oth-14', question: 'How does Emilia\u2019s role change across the play?', type: 'multiple-choice', options: ['She remains peripheral throughout', 'She moves from compliant wife to moral truth-teller who dies exposing Iago', 'She is killed in Act 2', 'She becomes a villain'], correctIndex: 1, explanation: 'Emilia initially hands over the handkerchief to please Iago. Her Act 4 speech on husbands and wives and her Act 5 refusal to be silenced make her the play\u2019s moral truth-teller. Her defiance breaks the network of female silence Iago has exploited.', topic: 'Characters', difficulty: 'higher' },
  { id: 'oth-15', question: 'What is the source text that Shakespeare adapted for Othello?', type: 'multiple-choice', options: ['Plutarch\u2019s Lives', 'Cinthio\u2019s Hecatommithi (1565), the novella \u201cUn Capitano Moro\u201d', 'Holinshed\u2019s Chronicles', 'Ovid\u2019s Metamorphoses'], correctIndex: 1, explanation: 'Shakespeare\u2019s main source was Cinthio\u2019s Italian novella. In the original the Moor has no name, the ensign survives, and the murder is more prolonged. Shakespeare\u2019s major inventions include Othello\u2019s eloquence, the handkerchief, and Iago\u2019s final silence.', topic: 'Context', difficulty: 'higher' },
  { id: 'oth-16', question: 'How does Othello\u2019s language change across the play?', type: 'multiple-choice', options: ['It becomes more measured and formal', 'It fractures from the expansive verse of Act 1 into disordered prose, exclamation and violent imagery', 'It does not change', 'He speaks less but in the same style'], correctIndex: 1, explanation: 'Othello\u2019s Act 1 speeches before the senate are expansive and self-assured. By Act 4 his language has broken into fragmented prose, repetition (\u201cHandkerchief! Confessions! Handkerchief!\u201d) and exclamation, dramatising his mental collapse.', topic: 'Writer\'s Methods', difficulty: 'grade-9' },
  { id: 'oth-17', question: 'What is the significance of Iago\u2019s final line, \u201cDemand me nothing\u201d?', type: 'multiple-choice', options: ['He is confessing everything', 'His refusal to explain denies the audience closure and leaves his malignity permanently unresolved', 'He is pleading for mercy', 'He is accusing Emilia'], correctIndex: 1, explanation: 'Iago\u2019s refusal to explain himself is structurally crucial. A tragic villain who announces his reasons allows moral closure; Iago withholds that, and the unresolved malignity has disturbed audiences for four centuries.', topic: 'Writer\'s Methods', difficulty: 'grade-9' },
  { id: 'oth-18', question: 'How does Shakespeare use the setting of Cyprus to intensify the tragedy?', type: 'multiple-choice', options: ['It offers safety away from Venice', 'It narrows the action to a confined military garrison where the characters cannot escape one another, heightening psychological pressure', 'It provides comic relief', 'It is irrelevant to the plot'], correctIndex: 1, explanation: 'The shift from cosmopolitan Venice to the isolated garrison on Cyprus concentrates the characters in a closed environment. Iago can orchestrate encounters, no one can simply leave, and the marriage is tested in a space cut off from Venetian legal and social checks.', topic: 'Context', difficulty: 'grade-9' },
  { id: 'oth-19', question: 'How does Desdemona resist being read as a passive victim?', type: 'multiple-choice', options: ['She ignores everyone around her', 'She defies her father in open court, insists on sailing to Cyprus, argues her case with Othello and briefly revives to protect him at her death', 'She fights Othello physically', 'She flees to Venice'], correctIndex: 1, explanation: 'Shakespeare gives Desdemona multiple acts of agency: choosing Othello publicly, refusing to stay in Venice, advocating for Cassio, questioning her husband\u2019s accusations and, finally, the morally dazzling lie that attempts to shield Othello after he has killed her.', topic: 'Characters', difficulty: 'grade-9' },
  { id: 'oth-20', question: 'How does the ending treat Othello\u2019s final speech?', type: 'multiple-choice', options: ['It presents it as simple heroic redemption', 'It presents it ambiguously: Othello reclaims dignity and narrative control, but also re-enacts a Venetian execution of a Turk on himself, splitting his identity', 'It dismisses it as empty rhetoric', 'It has no final speech'], correctIndex: 1, explanation: 'Othello\u2019s \u201cloved not wisely but too well\u201d speech is both an attempt at self-memorialisation and a disturbing gesture in which he casts himself as the \u201ccircumcised dog\u201d a Venetian once killed. Modern critics read the ending as showing a hero split by the very society that used him.', topic: 'Themes', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Jealousy', summary: 'Jealousy is the engine of the tragedy, planted by Iago and fed by Othello\u2019s insecurities rather than any real evidence.', keyPoints: ['Iago names it as the \u201cgreen-eyed monster\u201d while deliberately planting it', 'Othello is not innately jealous \u2014 his early response is resistance', 'Jealousy generates its own proof: the handkerchief becomes \u201cocular proof\u201d because Othello has already decided', 'Shakespeare distinguishes professional, sexual and racial jealousies', 'Jealousy is shown to destroy both its subject and its object'] },
  { topic: 'Race and Otherness', summary: 'Othello\u2019s race is inseparable from the action: he is admired for his usefulness but never fully accepted, and he has internalised Venetian prejudice.', keyPoints: ['Opening scene uses racist animal imagery (\u201cold black ram\u201d, \u201cwhite ewe\u201d)', 'Shakespeare grants Othello the most eloquent language in the early acts', '\u201cHaply, for I am black\u201d reveals internalised racial self-doubt', 'The play asks whether the tragedy happens to Othello because he is an outsider', 'The final speech splits his identity into Venetian judge and foreign enemy'] },
  { topic: 'Appearance vs Reality', summary: 'Every disaster arises from the gap between how things look and what they are; Iago is pure dissimulation.', keyPoints: ['\u201cI am not what I am\u201d defines Iago\u2019s nature', 'Desdemona\u2019s kindness to Cassio is reframed as flirtation', 'The handkerchief is accidentally dropped but read as proof', 'Laughter about Bianca is misheard as laughter about Desdemona', 'The word \u201chonest\u201d attached to Iago hollows itself out across the play'] },
  { topic: 'Honour and Reputation', summary: 'Male honour and female reputation structure the world of the play; both are shown to be powerful and destructive.', keyPoints: ['Cassio\u2019s \u201cReputation, reputation, reputation\u201d captures male honour culture', 'Iago attacks reputations from the outside through rumour and arrangement', 'Female reputation is tied to sexual fidelity and is especially fragile', 'A handkerchief is enough to condemn Desdemona because reputation is that brittle', 'Emilia\u2019s defiance rejects the silence reputation culture demands of women'] },
  { topic: 'Manipulation and Trust', summary: 'Iago\u2019s method is the careful placement of language and objects into minds already primed to receive them.', keyPoints: ['He rarely tells a direct lie \u2014 he pauses, questions, hesitates', 'Each destruction uses a trust relationship (ensign, friend, wife)', 'He tailors his manipulation to each target\u2019s specific vulnerability', '\u201cPut money in thy purse\u201d shows rhythm and repetition as manipulation tools', 'His refusal to explain at the end denies moral closure'] },
]

const ESSAY_PROMPTS = [
  'Explore the significance of jealousy in Othello.',
  'How far do you agree that Iago is the most disturbing villain in Shakespeare because his malice has no sufficient cause?',
  'Discuss the presentation of race and outsider identity in Othello.',
  'How does Shakespeare use the handkerchief as a dramatic device in Othello?',
  'Examine the role of Emilia in Othello, with particular focus on Acts 4 and 5.',
]

export default async function OthelloPage() {
  const board = await getServerBoard()
  const allowedBoards = ['eduqas', 'aqa-a-level', 'edexcel-a-level']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="Othello — A-Level Study Guide"
        description="In-depth study guide for Othello covering plot, characters, themes, key quotations, historical context and exam essay plans for A-Level English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Othello", url: "https://theenglishhub.app/revision/texts/othello" },
        ]}
      />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>AI-assisted draft under expert review. Cross-check with your teacher&rsquo;s notes.</span>
      </div>
      <TextStudyHub
        textName="Othello"
        textType="play"
        examBoard="Eduqas"
        basePath="/revision/texts/othello"
        subPages={[
          { id: 'read', href: '/revision/texts/othello/read', icon: 'read' as const, title: 'Read Full Text', description: 'With annotations' },
          { id: 'acts', href: '/revision/texts/othello/acts', icon: 'acts' as const, title: 'Act-by-Act Analysis', description: 'Key moments & quotes' },
          { id: 'characters', href: '/revision/texts/othello/characters', icon: 'characters' as const, title: 'Characters', description: 'Full character guide' },
          { id: 'themes', href: '/revision/texts/othello/themes', icon: 'themes' as const, title: 'Themes', description: 'Theme analysis' },
          { id: 'quotes', href: '/revision/texts/othello/key-quotes', icon: 'quotes' as const, title: 'Key Quotes', description: 'Quotes with analysis' },
          { id: 'context', href: '/revision/texts/othello/context', icon: 'context' as const, title: 'Context', description: 'Historical context' },
          { id: 'essays', href: '/revision/texts/othello/essay-plans', icon: 'essays' as const, title: 'Essay Plans', description: 'A-Level essay plans' },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map(q => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'Explore the significance of jealousy in Othello.',
          'How far do you agree that Iago is the most disturbing villain in Shakespeare because his malice has no sufficient cause?',
          'Discuss the presentation of race and outsider identity in Othello.',
          'How does Shakespeare use the handkerchief as a dramatic device in Othello?',
          'Examine the role of Emilia in Othello, with particular focus on Acts 4 and 5.',
        ]}
        flashcards={data.quotations.slice(0, 8).map(q => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Othello"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
    </>
  )
}
