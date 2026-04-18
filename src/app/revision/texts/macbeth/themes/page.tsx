'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Lightbulb, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

// ── Theme data ────────────────────────────────────────────────────────────────

type ThemeStudy = {
  title: string
  overview: string
  detailed: string
  keyQuotes: { quote: string; speaker: string; actScene: string; analysis: string }[]
  evidenceByAct: string[]
  contextLink: string
  essayTip: string
}

const THEMES: ThemeStudy[] = [
  {
    title: 'Ambition',
    overview: 'The driving force of the entire tragedy -- unchecked ambition detached from moral restraint.',
    detailed:
      'Ambition is the engine of the entire tragedy. Macbeth himself identifies it as his only motive for murder: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition." Shakespeare does not present ambition as inherently evil; Macbeth\'s military ambition is praised at the start. It is unchecked, morally unmoored ambition that proves destructive. The witches provide the spark, Lady Macbeth fans the flame, but the ambition itself belongs to Macbeth. Banquo hears the same prophecy but does not act on it, proving that ambition requires a willing agent. The play traces a clear arc: ambition leads to action, action to guilt, guilt to paranoia, and paranoia to further violence. Each murder becomes easier for Macbeth than the last, suggesting that once ambition overrides conscience, it becomes self-perpetuating. Lady Macbeth\'s ambition is arguably even more striking because, as a woman in a patriarchal society, the throne is not hers to claim directly. She must channel her ambition through her husband, which makes her manipulation both more calculated and more psychologically costly.',
    keyQuotes: [
      {
        quote: 'I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o\'erleaps itself / And falls on the other.',
        speaker: 'Macbeth',
        actScene: 'Act 1, Scene 7',
        analysis:
          'The horse-riding metaphor imagines ambition as a rider who overreaches and falls. Macbeth knows his ambition will destroy him but cannot resist it.',
      },
      {
        quote: 'Stars, hide your fires; / Let not light see my black and deep desires.',
        speaker: 'Macbeth',
        actScene: 'Act 1, Scene 4',
        analysis:
          'Macbeth asks heaven to look away while he pursues murderous ambition. The light/dark opposition externalises his moral conflict.',
      },
      {
        quote: 'Thou wouldst be great; / Art not without ambition, but without / The illness should attend it.',
        speaker: 'Lady Macbeth',
        actScene: 'Act 1, Scene 5',
        analysis:
          'Lady Macbeth diagnoses her husband: he has ambition but lacks the ruthlessness ("illness") to act on it. She sees moral conscience as a weakness to be overcome.',
      },
    ],
    evidenceByAct: [
      'Act 1: Macbeth\'s ambition is awakened by the witches\' prophecy and fanned by Lady Macbeth. His "vaulting ambition" soliloquy shows he knows it is his only motive.',
      'Act 2: Ambition drives Macbeth to commit regicide despite his hallucinations and terror, showing its power to override conscience.',
      'Act 3: Macbeth\'s ambition becomes paranoid -- he orders Banquo\'s murder to secure the throne for himself rather than Banquo\'s descendants.',
      'Act 4: Ambition has become indiscriminate violence. The slaughter of Lady Macduff and her children serves no strategic purpose.',
      'Act 5: Ambition has burned away all meaning. Macbeth\'s "Tomorrow" soliloquy reveals a man whose ambition has consumed everything, leaving only emptiness.',
    ],
    contextLink:
      'Shakespeare wrote Macbeth shortly after the Gunpowder Plot of 1605, when ambitious Catholic nobles tried to blow up Parliament. The play\'s condemnation of ambition that defies divinely ordained order would have resonated powerfully with Jacobean audiences and pleased James I.',
    essayTip:
      'Argue that ambition in Macbeth is presented as a process of moral degradation rather than a single decision. Track how each act shows Macbeth becoming less hesitant and more ruthless. Use Banquo as the control experiment -- same prophecy, different choice.',
  },
  {
    title: 'Guilt & Conscience',
    overview: 'Guilt pervades the play from the moment of Duncan\'s murder, manifesting through hallucinations, insomnia, and madness.',
    detailed:
      'Guilt pervades the play from the moment Macbeth kills Duncan. His hallucination of a floating dagger before the murder and his inability to say "Amen" afterwards reveal a conscience that resists what his ambition demands. The voice that cries "Sleep no more! Macbeth does murder sleep" introduces the symbolic link between guilt and insomnia. Sleep represents innocence and peace of mind, and by murdering the sleeping Duncan, Macbeth destroys his own capacity for rest. Lady Macbeth\'s guilt follows a different trajectory. She appears invulnerable at first, dismissing her husband\'s terror with "A little water clears us of this deed." But guilt works on her unconsciously, erupting in her sleepwalking scene where she compulsively washes her hands. The doctor\'s observation that "unnatural deeds / Do breed unnatural troubles" connects guilt to the play\'s wider theme of nature disrupted by crime. Shakespeare uses guilt as evidence of a moral order that exists regardless of whether characters acknowledge it.',
    keyQuotes: [
      {
        quote: 'Will all great Neptune\'s ocean wash this blood / Clean from my hand?',
        speaker: 'Macbeth',
        actScene: 'Act 2, Scene 2',
        analysis:
          'The hyperbole of an entire ocean being insufficient conveys the permanence of guilt after regicide. This contrasts with Lady Macbeth\'s dismissive "A little water" -- a confidence devastatingly reversed in Act 5.',
      },
      {
        quote: 'Out, damned spot! Out, I say!',
        speaker: 'Lady Macbeth',
        actScene: 'Act 5, Scene 1',
        analysis:
          'Imaginary blood that she once dismissed as easily washed has become a permanent psychological stain. The word "damned" carries religious weight, suggesting she recognises damnation.',
      },
      {
        quote: 'Macbeth does murder sleep -- the innocent sleep, / Sleep that knits up the ravell\'d sleave of care.',
        speaker: 'Macbeth (reporting a voice)',
        actScene: 'Act 2, Scene 2',
        analysis:
          'Sleep represents innocence and natural order. By murdering the sleeping Duncan, Macbeth has destroyed his own peace. The personification of sleep as a healer makes its loss all the more devastating.',
      },
    ],
    evidenceByAct: [
      'Act 1: Macbeth\'s conscience speaks through soliloquy. His awareness that Duncan is a good king and that murder is wrong shows a functioning moral sense.',
      'Act 2: Guilt manifests immediately -- the dagger hallucination, the inability to say "Amen," the voice crying "Sleep no more." Lady Macbeth dismisses guilt but will be consumed by it later.',
      'Act 3: Banquo\'s ghost appears at the feast, visible only to Macbeth. This public eruption of private guilt threatens to expose the murder.',
      'Act 4: Macbeth\'s guilt seems to diminish as he becomes numbed to violence. He orders the Macduff murders without the agonised hesitation he showed before Duncan\'s death.',
      'Act 5: Lady Macbeth\'s guilt erupts through sleepwalking and madness. Macbeth\'s nihilistic despair can be read as the final expression of a conscience that has burned through every other emotion.',
    ],
    contextLink:
      'The belief in divine justice was central to Jacobean theology. Audiences would have expected that guilt would pursue the sinner regardless of earthly punishment. The play affirms this view: even before Macbeth is killed by Macduff, he has been destroyed internally by his own conscience.',
    essayTip:
      'Compare how guilt manifests differently in Macbeth and Lady Macbeth. His guilt is immediate and conscious (soliloquies, hallucinations); hers is delayed and unconscious (sleepwalking, fragmented prose). Both trajectories prove that guilt cannot be permanently suppressed.',
  },
  {
    title: 'Supernatural & Fate',
    overview: 'Witchcraft, prophecy, and the question of whether Macbeth\'s downfall is fated or freely chosen.',
    detailed:
      'The supernatural suffuses every level of the play, from the witches\' prophecies to Banquo\'s ghost to Lady Macbeth\'s invocation of evil spirits. Shakespeare uses it to create atmosphere, drive the plot, and raise profound questions about fate and free will. The witches\' opening line, "Fair is foul, and foul is fair," establishes a world where moral boundaries are unstable. The play deliberately refuses to resolve whether the supernatural forces control events or merely reflect the characters\' inner desires. The witches prophesy what Macbeth already wants; the dagger may be a supernatural omen or a projection of guilt; Banquo\'s ghost may be real or a hallucination. This ambiguity is central to the play\'s power. For Shakespeare\'s original audience, the supernatural carried real weight. James I had written Daemonologie (1597) and personally overseen witch trials. The play links the supernatural firmly to moral transgression.',
    keyQuotes: [
      {
        quote: 'Fair is foul, and foul is fair.',
        speaker: 'The Witches',
        actScene: 'Act 1, Scene 1',
        analysis:
          'The chiasmus establishes moral inversion as the play\'s governing principle. Everything in Macbeth will be the opposite of what it appears.',
      },
      {
        quote: 'Is this a dagger which I see before me, / The handle toward my hand?',
        speaker: 'Macbeth',
        actScene: 'Act 2, Scene 1',
        analysis:
          'The ambiguity of the dagger -- real or imagined? -- encapsulates the play\'s refusal to resolve the question of supernatural agency versus psychological projection.',
      },
      {
        quote: 'By the pricking of my thumbs, / Something wicked this way comes.',
        speaker: 'Second Witch',
        actScene: 'Act 4, Scene 1',
        analysis:
          'Even the witches recognise Macbeth as evil by this point. "Something" rather than "someone" strips him of humanity, marking his total moral degradation.',
      },
    ],
    evidenceByAct: [
      'Act 1: The witches prophesy Macbeth\'s rise; Lady Macbeth invokes "murdering ministers." Both scenes establish the supernatural as a force that tempts rather than compels.',
      'Act 2: The dagger hallucination, the voice crying "Sleep no more," and the cosmic disturbances after Duncan\'s murder blur the line between supernatural event and guilty imagination.',
      'Act 3: Banquo\'s ghost appears at the feast -- is it real or is it Macbeth\'s guilt? The ambiguity is maintained throughout.',
      'Act 4: The witches deliver three new apparitions. Their prophecies are technically true but deliberately misleading, exploiting equivocation.',
      'Act 5: The supernatural prophecies are fulfilled through natural means: Birnam Wood "moves" as camouflage, and Macduff was born by caesarean. Nature and fate converge to destroy Macbeth.',
    ],
    contextLink:
      'James I published Daemonologie in 1597, a treatise arguing for the reality of witchcraft. He had personally interrogated accused witches during the North Berwick trials in 1590. Shakespeare\'s portrayal of the witches as malevolent, deceiving beings validated the king\'s beliefs and flattered his intellectual interests.',
    essayTip:
      'The strongest essays explore the ambiguity. Do not argue that the witches "make" Macbeth kill Duncan -- Banquo proves that the prophecy alone does not compel action. Instead, argue that Shakespeare presents the supernatural as a catalyst that accelerates choices the characters have already begun to make.',
  },
  {
    title: 'Masculinity & Power',
    overview: 'Competing definitions of manhood drive the play\'s violence and shape its most destructive relationships.',
    detailed:
      'Shakespeare interrogates ideas of masculinity throughout the play. Lady Macbeth equates manhood with violence and ambition, taunting Macbeth by questioning his courage. She herself asks evil spirits to "unsex me here," suggesting that femininity and ruthlessness are incompatible in her worldview. However, the play ultimately challenges her reductive definition. Macduff provides an alternative model when, grieving for his murdered family, he insists, "I shall do so; / But I must also feel it as a man." Here, true masculinity encompasses emotional depth rather than suppressing it. Macbeth himself is trapped by toxic masculinity. He murders Duncan partly to prove his manhood to his wife, and he sends murderers after Banquo by questioning their masculinity in exactly the way Lady Macbeth questioned his. The cycle of violence is perpetuated through a corrupted ideal of what it means to be a man.',
    keyQuotes: [
      {
        quote: 'When you durst do it, then you were a man; / And to be more than what you were, you would / Be so much more the man.',
        speaker: 'Lady Macbeth',
        actScene: 'Act 1, Scene 7',
        analysis:
          'Lady Macbeth redefines masculinity as the capacity for violence. This weaponisation of gender expectations drives Macbeth to act against his conscience.',
      },
      {
        quote: 'I dare do all that may become a man; / Who dares do more is none.',
        speaker: 'Macbeth',
        actScene: 'Act 1, Scene 7',
        analysis:
          'Macbeth briefly offers a nobler definition: manhood has moral limits. Exceeding them makes one less than human. He abandons this position within minutes under Lady Macbeth\'s pressure.',
      },
      {
        quote: 'I shall do so; / But I must also feel it as a man.',
        speaker: 'Macduff',
        actScene: 'Act 4, Scene 3',
        analysis:
          'Macduff insists that true masculinity includes grief and emotional depth. This directly challenges Lady Macbeth\'s violent definition and provides the play\'s most positive model of manhood.',
      },
    ],
    evidenceByAct: [
      'Act 1: Lady Macbeth questions Macbeth\'s manhood to push him toward murder. She calls on spirits to "unsex" her, framing femininity as weakness.',
      'Act 2: Macbeth proves his "manhood" through Duncan\'s murder but is immediately tormented, suggesting the violent definition of masculinity is self-destructive.',
      'Act 3: Macbeth questions the murderers\' manhood to motivate them, replicating Lady Macbeth\'s manipulation technique.',
      'Act 4: Macduff offers the counter-definition: "I must also feel it as a man." Malcolm tells him to "dispute it like a man," but Macduff redefines what that means.',
      'Act 5: Lady Macbeth\'s breakdown suggests the rejection of femininity ("unsex me") carries devastating psychological costs. The play argues that suppressing natural feeling is destructive for both sexes.',
    ],
    contextLink:
      'Jacobean England had rigid gender hierarchies. James I, despite promoting the Divine Right of Kings, was known for his male favourites, creating tensions around concepts of masculine authority. The play\'s exploration of what constitutes "real" manhood spoke to genuine cultural anxieties about gender, power, and legitimate authority.',
    essayTip:
      'Structure a gender essay around three definitions of manhood: Lady Macbeth\'s (violence and action), Macbeth\'s initial definition (courage within moral limits), and Macduff\'s (strength combined with emotional depth). Show how the play tests and evaluates each model.',
  },
  {
    title: 'Appearance vs Reality',
    overview: 'Nothing in Macbeth is what it seems -- from the witches\' equivocation to the characters\' masks of loyalty.',
    detailed:
      'The gap between appearance and reality is announced in the play\'s first scene: "Fair is foul, and foul is fair." Nothing in Macbeth is what it seems. The witches\' prophecies appear to promise glory but deliver destruction. Macbeth appears to be a loyal subject while plotting regicide. Lady Macbeth instructs her husband to "look like the innocent flower, / But be the serpent under\'t." Shakespeare explores this through the motif of equivocation, which had particular resonance for Jacobean audiences. The Gunpowder Plot trials exposed the Jesuit doctrine of equivocation -- misleading without technically lying. The witches are the play\'s great equivocators: every prophecy is literally true but deliberately misleading. The Porter\'s comic scene explicitly references equivocation, calling his gate "the other devil\'s name" for an equivocator. The theme extends to self-deception: Macbeth convinces himself each murder will be the last, and Lady Macbeth believes she can commit murder and simply wash her hands of it.',
    keyQuotes: [
      {
        quote: 'Look like th\' innocent flower, / But be the serpent under\'t.',
        speaker: 'Lady Macbeth',
        actScene: 'Act 1, Scene 5',
        analysis:
          'The biblical serpent allusion casts the Macbeths as agents of the devil. This compact instruction encapsulates the play\'s central theme of deception.',
      },
      {
        quote: 'There\'s no art / To find the mind\'s construction in the face.',
        speaker: 'King Duncan',
        actScene: 'Act 1, Scene 4',
        analysis:
          'Duncan observes that appearances are deceptive at the very moment he places trust in Macbeth. The dramatic irony is devastating.',
      },
      {
        quote: 'False face must hide what the false heart doth know.',
        speaker: 'Macbeth',
        actScene: 'Act 1, Scene 7',
        analysis:
          'The repeated "false" emphasises total deception. Macbeth has accepted hypocrisy as necessary, completing his moral surrender to appearances.',
      },
    ],
    evidenceByAct: [
      'Act 1: "Fair is foul" establishes moral inversion. Duncan is deceived by the previous Cawdor and immediately repeats the mistake with Macbeth.',
      'Act 2: The Macbeths perform grief while concealing guilt. Macbeth\'s "performed" horror at Duncan\'s death contrasts with Macduff\'s genuine shock.',
      'Act 3: The banquet scene strips away Macbeth\'s public mask as he sees Banquo\'s ghost. His private guilt erupts into public view.',
      'Act 4: The witches\' new prophecies are the ultimate equivocation -- literally true but deliberately misleading, giving Macbeth false confidence.',
      'Act 5: The illusions collapse. Lady Macbeth\'s sleepwalking reveals the truth beneath her composed exterior. Birnam Wood\'s "movement" exposes the witches\' tricks.',
    ],
    contextLink:
      'The 1606 trial of Jesuit Henry Garnet for involvement in the Gunpowder Plot made equivocation a hot topic. Garnet argued that misleading answers were not lies if mentally qualified. Shakespeare dramatises this dangerous doctrine through the witches and through the Porter\'s direct reference to "an equivocator, that could swear in both the scales."',
    essayTip:
      'Link appearance vs reality to equivocation specifically. The witches\' prophecies, the characters\' performances of loyalty, and the Porter\'s comic commentary all explore how language can be used to deceive. Connect this to the Jacobean context of the Gunpowder Plot for strong contextual marks.',
  },
  {
    title: 'Loyalty & Betrayal',
    overview: 'The play opens with a traitor\'s execution and closes with a tyrant\'s overthrow -- loyalty defines the moral order.',
    detailed:
      'Macbeth is framed by two acts of betrayal: the original Thane of Cawdor\'s treason at the start and Macbeth\'s overthrow at the end. Duncan\'s Scotland is built on feudal loyalty, where subjects owe obedience to a divinely appointed king and the king owes protection and reward in return. Macbeth violates every aspect of this bond: he murders a king who is also his kinsman, his guest, and his benefactor. The play presents this as not merely a political crime but a sin against the natural and divine order. The destruction that follows -- cosmic disturbances, civil war, the murder of innocents -- is a direct consequence of this foundational betrayal. Other characters demonstrate loyalty under pressure: Banquo remains loyal to the truth despite suspecting Macbeth; Macduff risks everything to oppose tyranny; Malcolm tests loyalty before trusting it. The play argues that legitimate authority depends on mutual bonds of trust that, once broken, can only be restored through blood.',
    keyQuotes: [
      {
        quote: 'He\'s here in double trust: / First, as I am his kinsman and his subject, / Strong both against the deed; then, as his host.',
        speaker: 'Macbeth',
        actScene: 'Act 1, Scene 7',
        analysis:
          'Macbeth lists three bonds he will violate: kinship, political duty, and hospitality. Shakespeare layers the betrayal to maximise its moral weight.',
      },
      {
        quote: 'Had I but died an hour before this chance, / I had lived a blessed time.',
        speaker: 'Macbeth',
        actScene: 'Act 2, Scene 3',
        analysis:
          'Macbeth performs shock at Duncan\'s death. The dramatic irony is that the statement is literally true: his life after Duncan\'s murder is cursed.',
      },
      {
        quote: 'Nought\'s had, all\'s spent, / Where our desire is got without content.',
        speaker: 'Lady Macbeth',
        actScene: 'Act 3, Scene 2',
        analysis:
          'The rhyming couplet captures the tragic irony: they have achieved everything through betrayal but gained nothing of value. Treachery yields only emptiness.',
      },
    ],
    evidenceByAct: [
      'Act 1: The original Cawdor is executed for treason, foreshadowing the new Cawdor\'s treachery. Duncan lavishes praise and reward on Macbeth, making the betrayal more horrifying.',
      'Act 2: Macbeth murders Duncan, violating the bonds of kinship, political allegiance, and sacred hospitality simultaneously.',
      'Act 3: Macbeth betrays his friend Banquo. The feast -- a symbol of communal loyalty -- is destroyed by the ghost of the man Macbeth has murdered.',
      'Act 4: Macbeth\'s attack on Lady Macduff represents betrayal of the king\'s duty to protect his subjects. Macduff and Malcolm build a coalition of loyalty against Macbeth.',
      'Act 5: The Scottish forces abandon Macbeth, showing that tyranny eventually exhausts even coerced loyalty. Malcolm\'s restoration rewards those who remained loyal.',
    ],
    contextLink:
      'Feudal loyalty was the foundation of the political order James I sought to reinforce. The Gunpowder Plot represented the ultimate betrayal of the sovereign. By dramatising the catastrophic consequences of regicide, Shakespeare affirmed the sanctity of the bond between subject and king.',
    essayTip:
      'Count the specific bonds Macbeth breaks when he kills Duncan: kinsman, subject, host. Each adds a layer of moral culpability. Then track how Macbeth\'s subsequent betrayals become easier, showing how the first great betrayal opens the floodgates for all others.',
  },
  {
    title: 'Kingship & Tyranny',
    overview: 'Three models of rule -- Duncan\'s trusting virtue, Macbeth\'s paranoid tyranny, and Malcolm\'s shrewd justice.',
    detailed:
      'Macbeth explores what makes a good or bad ruler by contrasting Duncan, Macbeth, and Malcolm. Duncan embodies the medieval ideal of the gracious, divinely appointed monarch. He rewards loyalty, dispenses justice, and is mourned as saintly. However, his excessive trust makes him vulnerable. Macbeth\'s reign is the inverse: he rules through fear, suspicion, and violence. He has no legitimate claim, and the natural world rebels against his authority. His subjects serve out of obligation rather than love. Malcolm represents a synthesis: he has Duncan\'s virtue but adds political shrewdness. His list of "king-becoming graces" provides a direct checklist against which Macbeth\'s rule fails on every count. The play\'s endorsement of rightful monarchy would have pleased James I, who promoted the Divine Right of Kings.',
    keyQuotes: [
      {
        quote: 'The king-becoming graces: / As justice, verity, temperance, stableness.',
        speaker: 'Malcolm',
        actScene: 'Act 4, Scene 3',
        analysis:
          'Malcolm provides a direct list of royal virtues. Each one is a quality Macbeth conspicuously lacks, creating a systematic indictment of his rule.',
      },
      {
        quote: 'I have honour, love, obedience, troops of friends, / I must not look to have.',
        speaker: 'Macbeth',
        actScene: 'Act 5, Scene 3',
        analysis:
          'Macbeth\'s self-assessment acknowledges that his kingship has yielded none of the rewards of good rule. He has power without legitimacy, a throne without loyalty.',
      },
      {
        quote: 'Alas, poor country, / Almost afraid to know itself!',
        speaker: 'Ross',
        actScene: 'Act 4, Scene 3',
        analysis:
          'Scotland is personified as fearful and self-alienated under Macbeth. Tyranny damages not just individuals but the entire national identity.',
      },
    ],
    evidenceByAct: [
      'Act 1: Duncan models generous kingship, rewarding service and expressing gratitude. However, his inability to read character reveals the vulnerability of unguarded virtue.',
      'Act 2: The murder of a divinely appointed king provokes cosmic disorder: horses eat each other, darkness covers the land, an owl kills a falcon.',
      'Act 3: Macbeth rules through suspicion, ordering Banquo\'s murder. The disrupted feast symbolises a kingdom where communal bonds have broken down.',
      'Act 4: Scotland under Macbeth is a place of terror. Ross describes a country where "sighs and groans and shrieks" go unnoticed. Malcolm\'s testing of Macduff demonstrates the shrewd leadership Scotland needs.',
      'Act 5: Macbeth is abandoned by his thanes, proving that tyranny cannot sustain itself. Malcolm\'s coronation at Scone restores legitimate order.',
    ],
    contextLink:
      'James I promoted the Divine Right of Kings and saw himself as God\'s representative on earth. The play affirms this doctrine: Macbeth\'s usurpation violates divine order, and only the restoration of the legitimate line (Malcolm, and by implication James himself through Banquo\'s descendants) can heal the nation.',
    essayTip:
      'Structure a kingship essay around Duncan, Macbeth, and Malcolm as three models. Duncan is good but naive; Macbeth is strong but illegitimate; Malcolm is both virtuous and politically astute. Argue that Shakespeare presents the ideal king as one who combines moral authority with practical wisdom.',
  },
  {
    title: 'Violence & Blood',
    overview: 'Blood saturates the play as both literal reality and symbolic marker of guilt, violence, and moral contamination.',
    detailed:
      'Blood is Macbeth\'s most pervasive image. It begins as a marker of heroic violence when the bleeding captain describes Macbeth\'s battlefield exploits. After Duncan\'s murder, blood transforms into a symbol of guilt: Macbeth imagines that "all great Neptune\'s ocean" cannot wash his hands clean. The image tracks the Macbeths\' psychological decline. Lady Macbeth\'s initial dismissal ("A little water clears us of this deed") is devastatingly reversed in Act 5 when she obsessively scrubs imaginary blood from her hands. Macbeth\'s metaphor of being "in blood / Stepp\'d in so far" imagines guilt as a literal river one can wade through, suggesting a point of no return. The play connects violence to Scotland\'s corruption: Macbeth\'s tyranny bleeds into the land itself. Shakespeare argues that violence begets violence -- each murder necessitates the next in an escalating cycle that can only be broken by Macbeth\'s own death.',
    keyQuotes: [
      {
        quote: 'Will all great Neptune\'s ocean wash this blood / Clean from my hand?',
        speaker: 'Macbeth',
        actScene: 'Act 2, Scene 2',
        analysis:
          'The ocean is insufficient to cleanse the guilt of regicide. The hyperbole conveys the permanence of moral contamination.',
      },
      {
        quote: 'A little water clears us of this deed.',
        speaker: 'Lady Macbeth',
        actScene: 'Act 2, Scene 2',
        analysis:
          'Her casual dismissal will be reversed in the sleepwalking scene. The contrast between this confidence and her later despair is one of the play\'s most powerful ironies.',
      },
      {
        quote: 'It will have blood, they say: blood will have blood.',
        speaker: 'Macbeth',
        actScene: 'Act 3, Scene 4',
        analysis:
          'The proverbial phrasing suggests an immutable law: violence creates a cycle that demands further violence. Macbeth recognises this but cannot escape it.',
      },
    ],
    evidenceByAct: [
      'Act 1: Blood is heroic -- the bleeding captain praises Macbeth\'s violence in battle. Macbeth "unseams" his enemy from nave to chops.',
      'Act 2: Blood becomes guilt. Macbeth\'s bloodied hands after Duncan\'s murder represent ineradicable moral stain.',
      'Act 3: Blood is both literal (Banquo\'s murder) and spectral (Banquo\'s "gory locks" at the feast). Macbeth imagines himself wading through a river of blood.',
      'Act 4: Violence becomes gratuitous with the slaughter of the Macduff family. Blood is now shed for no strategic purpose, only cruelty.',
      'Act 5: Lady Macbeth\'s imaginary blood completes the image\'s arc from battlefield heroism to psychological destruction. Macbeth\'s death restores the cycle.',
    ],
    contextLink:
      'Public executions were common in Jacobean London, and audiences were familiar with graphic violence. However, Shakespeare keeps Duncan\'s murder offstage, forcing the audience to imagine the horror rather than witness it. This technique makes the blood imagery more psychologically powerful.',
    essayTip:
      'Track how blood changes meaning across the play: from heroic to guilty to inescapable. This symbolic evolution mirrors Macbeth\'s moral trajectory and provides a structural framework for essays on imagery or guilt.',
  },
  {
    title: 'Nature & the Unnatural',
    overview: 'The natural world reacts to Macbeth\'s crimes -- when the moral order is violated, nature itself rebels.',
    detailed:
      'Shakespeare uses the natural world as a barometer of moral order. When Duncan is murdered, the cosmos responds: darkness covers the day, an owl kills a falcon, Duncan\'s horses turn wild and eat each other. These "unnatural" events signal that Macbeth\'s regicide has violated the Great Chain of Being -- the Elizabethan and Jacobean belief in a divinely ordered hierarchy linking God, king, humanity, animals, and nature. When the king (God\'s representative on earth) is murdered, every level of this chain is disrupted. Lady Macbeth\'s invocation to "unsex me here" is itself an act against nature -- she asks to be made unnatural so she can perform an unnatural deed. The witches exist outside the natural order, speaking in different metre, appearing amid storms, and cooking unnatural potions. Macbeth\'s tyranny transforms Scotland from a healthy nation into a diseased one, as expressed by the extended illness metaphor in Act 5.',
    keyQuotes: [
      {
        quote: 'Tis unnatural, / Even like the deed that\'s done.',
        speaker: 'Old Man',
        actScene: 'Act 2, Scene 4',
        analysis:
          'The cosmic disturbances after Duncan\'s murder are directly linked to the "unnatural" crime. The Old Man\'s observation connects human violence to natural disorder.',
      },
      {
        quote: 'Unnatural deeds / Do breed unnatural troubles.',
        speaker: 'Doctor',
        actScene: 'Act 5, Scene 1',
        analysis:
          'The doctor connects Lady Macbeth\'s sleepwalking to her "unnatural" crimes. The proverbial phrasing presents it as a universal law: evil breeds consequences.',
      },
      {
        quote: 'Come, thick night, / And pall thee in the dunnest smoke of hell.',
        speaker: 'Lady Macbeth',
        actScene: 'Act 1, Scene 5',
        analysis:
          'Lady Macbeth asks darkness to conceal her crime from heaven. The invocation of "hell" explicitly aligns the murder with the disruption of natural and divine order.',
      },
    ],
    evidenceByAct: [
      'Act 1: The witches appear amid storms and Lady Macbeth calls on dark spirits to "unsex" her -- both challenge the natural order before Duncan is even killed.',
      'Act 2: After Duncan\'s murder, darkness covers the day, an owl kills a falcon, and horses eat each other. Nature itself rebels against regicide.',
      'Act 3: Banquo\'s ghost disrupts a feast -- the communal meal, a symbol of natural social order, is poisoned by Macbeth\'s crime.',
      'Act 4: The witches\' cauldron ingredients are all unnatural and revolting -- fragments of animals and humans that should not be combined. Macbeth\'s tyranny makes Scotland itself sick.',
      'Act 5: Malcolm describes Scotland as needing medicine. The play ends with the restoration of natural order through legitimate succession.',
    ],
    contextLink:
      'The Great Chain of Being was a fundamental concept in Jacobean cosmology. It held that every creature had a divinely appointed place, and that disrupting one level (e.g., killing a king) would cause disorder at every other level. This belief explains why Shakespeare includes cosmic disturbances after Duncan\'s murder.',
    essayTip:
      'The nature imagery provides a structural thread through the entire play. Use it to argue that Shakespeare presents Macbeth\'s crimes as offences against the entire natural order, not just political acts. The cosmic disturbances are evidence that the play operates within a moral universe where evil cannot exist without consequences.',
  },
]

// ── Page component ────────────────────────────────────────────────────────────

export default function MacbethThemesPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Macbeth" textType="play" examBoard="AQA" />

        {/* Header */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="relative">
            <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/macbeth" />}>
              <ArrowLeft className="size-3.5" />
              Back to Macbeth overview
            </Button>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary"><BookOpen className="mr-1 size-3 text-emerald-400" />Theme Analysis</Badge>
              <Badge variant="outline">9 themes</Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Macbeth — Themes</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              In-depth analysis of every major theme in Macbeth with key quotes, evidence by act, historical context, and essay tips for GCSE and IGCSE English Literature.
            </p>
          </div>
        </section>

        {/* Theme cards */}
        {THEMES.map((t) => (
          <Card key={t.title} id={t.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="size-5 text-emerald-400" />
                {t.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{t.overview}</p>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Detailed analysis */}
              <div>
                <h4 className="mb-1 font-semibold">Analysis</h4>
                <p className="text-muted-foreground leading-relaxed">{t.detailed}</p>
              </div>

              {/* Key quotes */}
              <div>
                <h4 className="mb-2 flex items-center gap-1.5 font-semibold">
                  <Quote className="size-4 text-amber-500" /> Key Quotes
                </h4>
                <div className="space-y-3">
                  {t.keyQuotes.map((q, i) => (
                    <div key={i} className="rounded-lg border border-border/60 p-3">
                      <p className="font-medium">&ldquo;{q.quote}&rdquo;</p>
                      <p className="mt-0.5 text-xs text-muted-foreground/70">{q.speaker} &mdash; {q.actScene}</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Analysis: </span>
                        {q.analysis}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evidence by act */}
              <div>
                <h4 className="mb-2 font-semibold">Evidence by Act</h4>
                <div className="space-y-2">
                  {t.evidenceByAct.map((e, i) => (
                    <div key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline" className="mt-0.5 shrink-0 text-xs">{`Act ${i + 1}`}</Badge>
                      <span>{e.replace(/^Act \d: /, '')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Context */}
              <div className="rounded-lg border border-blue-500/20 bg-blue-500/[0.04] p-4">
                <h4 className="mb-1 font-semibold text-blue-600 dark:text-blue-400">Historical Context</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.contextLink}</p>
              </div>

              {/* Essay tip */}
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-4">
                <h4 className="mb-1 flex items-center gap-1.5 font-semibold text-amber-600 dark:text-clay-600">
                  <Lightbulb className="size-4" /> Essay Tip
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.essayTip}</p>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 pb-8">
          <Button variant="outline" render={<Link href="/revision/texts/macbeth" />}>
            <ArrowLeft className="size-4 mr-1" /> Overview
          </Button>
          <Button variant="outline" render={<Link href="/revision/texts/macbeth/key-quotes" />}>
            Key Quotes <Quote className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
