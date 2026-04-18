'use client'

import Link from 'next/link'
import { ArrowLeft, FileText, Lightbulb, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

// ── Essay plan data ───────────────────────────────────────────────────────────

type Paragraph = {
  label: string
  point: string
  quote: string
  quoteSource: string
  analysis: string
  contextLink: string
}

type EssayPlan = {
  question: string
  type: string
  introduction: string
  paragraphs: Paragraph[]
  conclusion: string
}

const ESSAY_PLANS: EssayPlan[] = [
  {
    question: 'How does Shakespeare present the character of Macbeth as a tragic hero?',
    type: 'Character',
    introduction:
      'Shakespeare presents Macbeth as a tragic hero in the Aristotelian sense: a man of noble status and genuine virtue who is destroyed by a single fatal flaw -- "vaulting ambition." Through Macbeth\'s soliloquies, Shakespeare gives the audience access to a mind that is acutely aware of the moral horror of its actions yet unable to resist them. This self-knowledge is what elevates Macbeth above a simple villain and makes his downfall genuinely tragic. The play traces a clear arc from honoured warrior to reluctant murderer to paranoid tyrant to nihilistic ruin, demonstrating that unchecked ambition does not merely destroy the ambitious person\'s victims but hollows out the ambitious person themselves.',
    paragraphs: [
      {
        label: 'Paragraph 1 -- Noble beginnings',
        point: 'Macbeth is established as a courageous and honoured warrior, creating the height from which he will fall.',
        quote: 'For brave Macbeth -- well he deserves that name -- / Disdaining fortune, with his brandish\'d steel, / Which smoked with bloody execution.',
        quoteSource: 'Captain -- Act 1, Scene 2',
        analysis:
          'The Captain\'s report establishes Macbeth as the epitome of martial virtue. "Brave" and "bloody execution" frame violence as heroic in the context of war. The phrase "disdaining fortune" positions Macbeth as a man who masters fate rather than submitting to it -- an ironic quality given that he will later become enslaved by the witches\' prophecy. Shakespeare creates the maximum dramatic distance between Macbeth\'s reputation and his later crimes, which is essential for the tragic structure.',
        contextLink:
          'Jacobean audiences valued martial prowess as a key masculine virtue. Macbeth\'s battlefield heroism would have established him as an ideal subject, making his subsequent betrayal of Duncan all the more shocking.',
      },
      {
        label: 'Paragraph 2 -- The fatal flaw',
        point: 'Macbeth\'s self-awareness of his own ambition makes him a tragic rather than simply a villainous figure.',
        quote: 'I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o\'erleaps itself / And falls on the other.',
        quoteSource: 'Macbeth -- Act 1, Scene 7',
        analysis:
          'Macbeth identifies ambition as his sole motive and predicts his own destruction in the horse-riding metaphor of overreaching and falling. The word "only" is devastating: he has examined every possible justification and found nothing but naked ambition. This self-awareness is what makes him tragic -- he sees the abyss and walks into it anyway. A mere villain would not question his own motives; a tragic hero must understand what he is losing.',
        contextLink:
          'The concept of the tragic hero derives from Aristotle\'s Poetics, which argues that tragedy requires a protagonist of noble character who falls through a hamartia (fatal flaw). Shakespeare\'s educated audience would have recognised this classical pattern.',
      },
      {
        label: 'Paragraph 3 -- Moral deterioration',
        point: 'Macbeth\'s increasing ease with violence shows how ambition progressively destroys moral feeling.',
        quote: 'I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er.',
        quoteSource: 'Macbeth -- Act 3, Scene 4',
        analysis:
          'The river-of-blood metaphor captures the tragic paradox: Macbeth has reached a point where moral recovery seems as costly as further evil. The word "tedious" is chillingly understated -- repentance has become merely inconvenient rather than morally imperative. Shakespeare shows that the tragic hero\'s fall is not a single moment but a process in which each step makes the next easier, until the capacity for goodness is completely eroded.',
        contextLink:
          'The doctrine of progressive sin was well established in Jacobean theology. Once a person committed mortal sin, each subsequent sin was believed to harden the conscience further, making repentance progressively more difficult.',
      },
    ],
    conclusion:
      'Shakespeare presents Macbeth as a tragic hero whose fall is made devastating by his persistent self-awareness. Unlike a simple villain, Macbeth knows what he is doing is wrong at every stage, yet ambition overrides conscience so completely that by Act 5, he is left with nothing but nihilistic despair. The play argues that the true tragedy of unchecked ambition is not merely the destruction it causes to others, but the complete emptying out of the self that is left behind. Macbeth\'s "Tomorrow, and tomorrow, and tomorrow" speech is not a philosophical position but a clinical description of what remains after ambition has consumed everything else.',
  },
  {
    question: 'How does Shakespeare present Lady Macbeth as a powerful but ultimately tragic figure?',
    type: 'Character',
    introduction:
      'Shakespeare presents Lady Macbeth as one of the most complex female characters in English literature: a woman of formidable intelligence and willpower who deliberately suppresses her femininity to pursue power, only to be destroyed by the guilt she believed she had eliminated. Her arc is an inversion of Macbeth\'s -- she begins as the stronger, more decisive partner and ends as the weaker, more tormented one. Shakespeare uses her trajectory to argue that the human conscience cannot be permanently overridden by force of will, and that the attempt to become something unnatural carries devastating psychological consequences.',
    paragraphs: [
      {
        label: 'Paragraph 1 -- Commanding power',
        point: 'Lady Macbeth dominates the murder plot, demonstrating intellectual power and force of will that exceed her husband\'s.',
        quote: 'Unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty.',
        quoteSource: 'Lady Macbeth -- Act 1, Scene 5',
        analysis:
          'Lady Macbeth\'s invocation demands the removal of femininity itself. "Unsex" is a violent neologism that treats gender as something that can be surgically removed. The request to be filled "from the crown to the toe" with cruelty suggests a total bodily possession, paralleling demonic possession. Crucially, her need to call on spirits proves that cruelty does not come naturally to her -- she must actively override her nature. This is the seed of her eventual destruction: what is suppressed will eventually erupt.',
        contextLink:
          'In Jacobean England, women were expected to be nurturing and submissive. Lady Macbeth\'s rejection of femininity would have seemed deeply transgressive, aligning her with the witches and with unnatural evil.',
      },
      {
        label: 'Paragraph 2 -- Weaponising gender',
        point: 'Lady Macbeth manipulates Macbeth by attacking his masculinity, revealing both her intelligence and the toxicity of rigid gender expectations.',
        quote: 'When you durst do it, then you were a man; / And to be more than what you were, you would / Be so much more the man.',
        quoteSource: 'Lady Macbeth -- Act 1, Scene 7',
        analysis:
          'Lady Macbeth redefines masculinity as the capacity for violence, shaming Macbeth into action by questioning his manhood. She exploits the patriarchal value system she is excluded from: she cannot seize the crown herself, so she weaponises gender to control the man who can. Shakespeare reveals the circular trap of toxic masculinity -- violence is demanded to prove manhood, and manhood is defined by willingness to commit violence.',
        contextLink:
          'The play challenges Jacobean gender norms by showing how destructive they can be when weaponised. Lady Macbeth\'s manipulation would have been both shocking and recognisable to an audience accustomed to debates about women\'s nature and influence.',
      },
      {
        label: 'Paragraph 3 -- Psychological destruction',
        point: 'Lady Macbeth\'s sleepwalking scene reveals that suppressed guilt eventually destroys the mind that tried to contain it.',
        quote: 'Here\'s the smell of the blood still. All the perfumes of Arabia will not sweeten this little hand.',
        quoteSource: 'Lady Macbeth -- Act 5, Scene 1',
        analysis:
          'This line directly inverts Macbeth\'s "Neptune\'s ocean" image and her own earlier "A little water clears us of this deed." The sensory shift from sight to smell makes guilt more pervasive and inescapable. The word "little" is profoundly poignant: she is no longer the towering figure who summoned spirits but a small, fragile woman destroyed by what she tried to suppress. Her fragmented prose (replacing her earlier commanding verse) mirrors her psychological disintegration.',
        contextLink:
          'The sleepwalking scene reflects contemporary medical understandings of melancholy and madness. Shakespeare\'s audience would have read Lady Macbeth\'s breakdown as divine punishment for unnatural ambition.',
      },
    ],
    conclusion:
      'Shakespeare presents Lady Macbeth as a figure whose tragedy lies in the gap between what she tries to become and what she actually is. She attempts to transform herself into an instrument of pure ambition, free from conscience and compassion, but the human mind cannot sustain such violence against its own nature. Her sleepwalking scene is the play\'s most devastating proof that guilt cannot be washed away, suppressed, or willed into non-existence. Shakespeare argues that the attempt to become unnatural -- to be "unsexed" -- is not a display of strength but a path to psychological annihilation.',
  },
  {
    question: 'How does Shakespeare present the theme of guilt in Macbeth?',
    type: 'Theme',
    introduction:
      'Shakespeare presents guilt in Macbeth not as an emotion that can be managed or overcome but as an inescapable force that manifests through hallucination, insomnia, madness, and despair. Both Macbeth and Lady Macbeth attempt to contain their guilt through different strategies -- he through further violence, she through wilful denial -- but both are ultimately destroyed by it. Shakespeare uses guilt to affirm the existence of a moral order that operates independently of human will: even when characters refuse to acknowledge their crimes, their minds and bodies betray them.',
    paragraphs: [
      {
        label: 'Paragraph 1 -- Immediate guilt',
        point: 'Macbeth\'s guilt manifests instantly through hallucination and sensory disturbance, showing that conscience cannot be overridden by willpower.',
        quote: 'Will all great Neptune\'s ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine.',
        quoteSource: 'Macbeth -- Act 2, Scene 2',
        analysis:
          'The hyperbole of an entire ocean being insufficient conveys guilt\'s permanence. "Incarnadine" (to turn blood-red) is a Latinate word that slows the verse, forcing the audience to absorb the image. Macbeth imagines his guilt contaminating the whole natural world, transforming seas from blue to red. Shakespeare presents guilt not as a private feeling but as a force that radiates outward, poisoning everything it touches.',
        contextLink:
          'The blood imagery connects to the theological concept of blood-guilt, which in Christian tradition requires divine forgiveness, not human effort, to cleanse. Macbeth\'s inability to wash his hands symbolises his severance from God\'s grace.',
      },
      {
        label: 'Paragraph 2 -- Suppressed guilt erupting',
        point: 'Lady Macbeth\'s sleepwalking proves that suppressed guilt erupts more destructively than acknowledged guilt.',
        quote: 'Out, damned spot! Out, I say! One, two -- why then, \'tis time to do\'t.',
        quoteSource: 'Lady Macbeth -- Act 5, Scene 1',
        analysis:
          'Lady Macbeth\'s fragmented prose contrasts sharply with her earlier commanding blank verse, signalling psychological disintegration. The word "damned" carries religious weight, suggesting unconscious recognition of spiritual condemnation. Her reliving of the murder sequence ("One, two") shows that guilt has not been suppressed but has been replaying internally, waiting for the conscious defences to weaken.',
        contextLink:
          'Shakespeare draws on contemporary medical theories of melancholy and the relationship between conscience and dreams. The doctor\'s observation that "unnatural deeds / Do breed unnatural troubles" frames guilt as a natural consequence rather than a punishment imposed from outside.',
      },
      {
        label: 'Paragraph 3 -- Guilt as nihilism',
        point: 'Macbeth\'s final soliloquy can be read as the last stage of guilt: the complete destruction of meaning and feeling.',
        quote: 'Life\'s but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more.',
        quoteSource: 'Macbeth -- Act 5, Scene 5',
        analysis:
          'Macbeth\'s nihilism is not a philosophical position but the emotional endpoint of sustained guilt. He has lost the capacity to feel anything -- even remorse. The theatrical metaphor ("poor player") is deeply self-aware: Macbeth recognises that his life has become a meaningless performance. Shakespeare suggests that the ultimate consequence of guilt is not madness (Lady Macbeth\'s fate) but a total emptying of meaning.',
        contextLink:
          'The "Tomorrow" soliloquy resonates with the medieval concept of memento mori (remember you must die) but goes further: Macbeth does not simply face death but finds that life itself has become meaningless. This represents the theological concept of spiritual death preceding physical death.',
      },
    ],
    conclusion:
      'Shakespeare presents guilt as the most powerful force in the play -- more powerful than ambition, more powerful than the supernatural, and more powerful than the will of either Macbeth or Lady Macbeth. Both characters attempt to master their guilt and both fail, though in different ways: Lady Macbeth through madness and Macbeth through nihilistic despair. The play argues that guilt is not merely a psychological response but evidence of a moral order built into human nature -- an order that cannot be violated without devastating consequences.',
  },
  {
    question: 'How does Shakespeare use the supernatural to drive the plot and explore moral ideas in Macbeth?',
    type: 'Theme',
    introduction:
      'Shakespeare uses the supernatural in Macbeth not as a simple plot device but as a complex exploration of temptation, moral ambiguity, and the relationship between fate and free will. The witches\' prophecies, Lady Macbeth\'s invocation of spirits, the dagger hallucination, and Banquo\'s ghost all serve to blur the boundary between external supernatural forces and internal psychological states, creating a deliberate ambiguity that forces the audience to question whether Macbeth is a victim of fate or the architect of his own destruction.',
    paragraphs: [
      {
        label: 'Paragraph 1 -- The witches as tempters',
        point: 'The witches provide the initial temptation but do not compel action, preserving Macbeth\'s moral agency.',
        quote: 'Fair is foul, and foul is fair.',
        quoteSource: 'The Witches -- Act 1, Scene 1',
        analysis:
          'The chiasmus establishes moral inversion as the play\'s governing principle. The witches do not command Macbeth to kill Duncan; they predict what he will do. The fact that Banquo hears the same prophecy and does not act on it proves that the supernatural provides temptation, not compulsion. Shakespeare preserves Macbeth\'s moral agency, making his choices genuinely tragic rather than merely fated.',
        contextLink:
          'James I\'s Daemonologie argued that the devil could tempt but not compel. This theological position is reflected in the play: the witches awaken Macbeth\'s ambition but do not create it. This preserves the doctrine of free will while acknowledging the reality of supernatural evil.',
      },
      {
        label: 'Paragraph 2 -- Equivocation and deception',
        point: 'The witches\' prophecies exploit equivocation, making the supernatural a source of deception rather than truth.',
        quote: 'None of woman born / Shall harm Macbeth.',
        quoteSource: 'Apparition -- Act 4, Scene 1',
        analysis:
          'The prophecy is literally true but deliberately misleading. Macduff\'s caesarean birth is a loophole the witches exploit. Shakespeare aligns the supernatural with the Jesuit doctrine of equivocation: telling truths that deceive. The witches are not oracles dispensing wisdom but tricksters who use the appearance of truth to promote destruction.',
        contextLink:
          'The Gunpowder Plot trial of Jesuit Henry Garnet in 1606 made equivocation a hot topic. The Porter\'s "equivocator" speech in Act 2, Scene 3 directly references the trial. Shakespeare links the witches\' method to a real and dangerous form of deception in Jacobean politics.',
      },
      {
        label: 'Paragraph 3 -- Internal and external forces',
        point: 'Shakespeare deliberately blurs the line between supernatural events and psychological projections, creating productive ambiguity.',
        quote: 'Is this a dagger which I see before me, / The handle toward my hand?',
        quoteSource: 'Macbeth -- Act 2, Scene 1',
        analysis:
          'The dagger may be a supernatural omen or a projection of Macbeth\'s guilty imagination -- the play refuses to resolve the ambiguity. "The handle toward my hand" suggests temptation offering itself willingly. By leaving the audience uncertain whether the dagger is real, Shakespeare dramatises the central question: does the supernatural control Macbeth, or does it merely reflect what is already inside him? This ambiguity is the play\'s deepest intellectual challenge.',
        contextLink:
          'The debate between supernatural causation and natural psychology was live in Jacobean England. Reginald Scot\'s The Discoverie of Witchcraft (1584) had argued that witchcraft was delusion. Shakespeare\'s ambiguity engages both positions without resolving them.',
      },
    ],
    conclusion:
      'Shakespeare uses the supernatural to create a play that operates on two levels simultaneously: as a story of external temptation by genuine supernatural forces, and as a psychological study of a man whose ambition generates its own visions and justifications. The witches\' equivocation, the ambiguous hallucinations, and the cosmic disturbances following Duncan\'s murder all contribute to a moral universe in which evil is real but human choice remains paramount. The play\'s greatest achievement is refusing to resolve this tension, leaving the audience to grapple with the same questions about fate, free will, and moral responsibility that torment Macbeth himself.',
  },
  {
    question: 'How does Shakespeare present different ideas about masculinity in Macbeth?',
    type: 'Character/Theme',
    introduction:
      'Shakespeare presents masculinity in Macbeth as a contested and dangerous concept. The play stages a conflict between competing definitions of manhood: Lady Macbeth\'s definition (violence and action), Macbeth\'s initial definition (courage within moral limits), and Macduff\'s definition (strength combined with emotional depth). By tracking how these definitions drive the plot, Shakespeare argues that toxic masculinity -- the equation of manhood with violence -- is the engine of the play\'s destruction, while genuine masculinity requires the integration of strength and compassion.',
    paragraphs: [
      {
        label: 'Paragraph 1 -- Lady Macbeth\'s weaponised masculinity',
        point: 'Lady Macbeth uses a reductive definition of manhood as a weapon to drive Macbeth to murder.',
        quote: 'When you durst do it, then you were a man; / And to be more than what you were, you would / Be so much more the man.',
        quoteSource: 'Lady Macbeth -- Act 1, Scene 7',
        analysis:
          'Lady Macbeth defines manhood as the willingness to commit violence, shaming Macbeth by implying that hesitation is cowardice and therefore unmanliness. The circular logic -- you were a man when you dared, and daring more would make you more of a man -- creates an escalating trap where masculinity can only be proved through increasingly extreme action. Shakespeare exposes how weaponised gender expectations can override individual moral judgement.',
        contextLink:
          'Jacobean patriarchal society placed enormous pressure on men to demonstrate courage. Lady Macbeth exploits this cultural expectation, turning a social norm into a tool of manipulation. Her ability to control Macbeth through gender-shaming reveals the fragility of masculine identity.',
      },
      {
        label: 'Paragraph 2 -- Macbeth replicates the pattern',
        point: 'Macbeth perpetuates the toxic definition by questioning the murderers\' manhood, showing how corrupted masculinity reproduces itself.',
        quote: 'Are you so gospell\'d / To pray for this good man and for his issue, / Whose heavy hand hath bow\'d you to the grave?',
        quoteSource: 'Macbeth -- Act 3, Scene 1',
        analysis:
          'Macbeth uses the same technique Lady Macbeth used on him: equating moral restraint with weakness. "Gospell\'d" dismisses Christian virtue as effeminate. He has internalised the toxic definition of masculinity and now reproduces it, creating a cycle of violence driven by shame. Shakespeare shows that corrupted ideas about manhood do not remain with the individual but spread outward, infecting others.',
        contextLink:
          'The association of Christian mercy with femininity reflects a genuine tension in Jacobean culture between the martial ideal of the warrior-aristocrat and the Christian ideal of compassion and forgiveness.',
      },
      {
        label: 'Paragraph 3 -- Macduff\'s counter-definition',
        point: 'Macduff provides the play\'s most positive model of masculinity by insisting that genuine manhood includes emotional depth.',
        quote: 'I shall do so; / But I must also feel it as a man.',
        quoteSource: 'Macduff -- Act 4, Scene 3',
        analysis:
          'When Malcolm tells Macduff to "dispute it like a man," Macduff redefines what that means. He does not reject action (he will fight), but he insists that grief and strength can coexist. "Feel it as a man" directly challenges Lady Macbeth\'s definition by arguing that emotional sensitivity is not a weakness but a component of full humanity. Shakespeare uses Macduff to present an alternative masculinity that is both emotionally honest and physically courageous.',
        contextLink:
          'Macduff\'s integration of feeling and action anticipates later cultural shifts toward emotional intelligence. In the play\'s moral framework, his model of masculinity is endorsed by the plot itself: he is the one who defeats Macbeth, suggesting Shakespeare judges his definition as superior.',
      },
    ],
    conclusion:
      'Shakespeare presents masculinity in Macbeth as a spectrum ranging from destructive to redemptive. Lady Macbeth\'s definition -- manhood as violence -- drives the play\'s catastrophe. Macbeth\'s initial, more nuanced definition ("who dares do more is none") is overwhelmed by shame and ambition. Macduff\'s definition -- strength that encompasses grief, compassion, and emotional honesty -- provides the moral resolution. The play argues that toxic masculinity is not merely a personal failing but a social contagion: once weaponised, it reproduces itself through shame and violence until an alternative model breaks the cycle.',
  },
  {
    question: 'How does Shakespeare present the relationship between ambition and moral decline in Macbeth?',
    type: 'Theme',
    introduction:
      'Shakespeare presents ambition in Macbeth not as a static character trait but as a dynamic force that progressively erodes the moral sense of everyone it touches. The play traces a clear trajectory: ambition leads to the first murder, which produces guilt, which creates paranoia, which necessitates further violence, which deadens conscience, which produces nihilistic despair. Shakespeare argues that ambition unchecked by moral restraint is self-consuming: it does not deliver the glory it promises but instead destroys the capacity for meaning, connection, and feeling.',
    paragraphs: [
      {
        label: 'Paragraph 1 -- Ambition before the crime',
        point: 'Macbeth\'s ambition initially coexists with a functioning conscience, creating agonised internal conflict.',
        quote: 'Stars, hide your fires; / Let not light see my black and deep desires.',
        quoteSource: 'Macbeth -- Act 1, Scene 4',
        analysis:
          'Macbeth\'s aside reveals ambition emerging alongside shame. He asks heaven to look away, acknowledging that his desires are "black" and require concealment. The light/dark opposition externalises an internal conflict between ambition and conscience. At this stage, Macbeth still recognises the moral weight of what he contemplates. Shakespeare establishes that ambition does not simply override conscience -- it must actively suppress it, and the suppression itself becomes a source of psychological damage.',
        contextLink:
          'Light and dark imagery carries theological weight: light represents divine goodness and truth, darkness represents sin and concealment. Macbeth\'s request for darkness is symbolically a request to be separated from God\'s oversight.',
      },
      {
        label: 'Paragraph 2 -- Ambition after the crime',
        point: 'After Duncan\'s murder, ambition transforms from a desire for the crown to a paranoid need to secure it, producing escalating violence.',
        quote: 'To be thus is nothing, but to be safely thus.',
        quoteSource: 'Macbeth -- Act 3, Scene 1',
        analysis:
          'Macbeth has achieved his ambition -- he is king -- but finds it unsatisfying because he cannot feel safe. The word "nothing" is devastating: the crown he murdered for has failed to provide meaning or security. Ambition has become indistinguishable from paranoia. Shakespeare shows that ambition does not end when its goal is achieved; instead, it mutates into fear of losing what was gained, generating further violence that is increasingly disconnected from any rational purpose.',
        contextLink:
          'The concept of the tyrant who can never rest was well established in classical and medieval political theory. Shakespeare draws on this tradition to argue that illegitimate power carries its own punishment.',
      },
      {
        label: 'Paragraph 3 -- Ambition\'s endpoint',
        point: 'Macbeth\'s nihilistic despair in Act 5 represents the final stage of ambition: the complete destruction of meaning.',
        quote: 'It is a tale / Told by an idiot, full of sound and fury, / Signifying nothing.',
        quoteSource: 'Macbeth -- Act 5, Scene 5',
        analysis:
          'The conclusion of the "Tomorrow" soliloquy dismisses life itself as meaningless. "Sound and fury" is a direct reference to Macbeth\'s own violent career, which he now sees as having accomplished nothing. Shakespeare argues that the ultimate consequence of unchecked ambition is not punishment from an external force but the internal realisation that ambition has consumed everything -- love, honour, meaning, even the capacity to feel -- leaving only emptiness.',
        contextLink:
          'The speech resonates with the medieval memento mori tradition but goes beyond it: Macbeth does not merely face death but finds that life has already become empty. This represents a distinctly modern form of despair.',
      },
    ],
    conclusion:
      'Shakespeare presents ambition and moral decline as inseparable: each step of ambition requires a corresponding step of moral compromise, until the person who began with heroic potential is left with nothing. The play\'s structure mirrors this trajectory: Act 1 shows ambition alongside conscience, Acts 2-3 show conscience being progressively overridden, and Act 5 shows a man whose ambition has burned through every other human capacity. Shakespeare\'s warning is clear: ambition that serves only the self ultimately destroys the self.',
  },
  {
    question: 'How does Shakespeare use imagery of blood and darkness to convey meaning in Macbeth?',
    type: "Writer's Methods",
    introduction:
      'Shakespeare uses the interconnected imagery of blood and darkness to chart Macbeth\'s moral trajectory from honourable warrior to guilty murderer to nihilistic tyrant. Blood transforms from a symbol of heroic sacrifice in Act 1 to a mark of ineradicable guilt in Act 2 to a metaphor for moral entrapment in Act 3 and finally a hallucinated stain in Act 5. Darkness functions as Macbeth\'s ally in the early acts (concealing his crimes) and his prison in the later acts (representing the spiritual darkness he can no longer escape). Together, these image patterns create a visual and thematic language that unifies the play and reinforces its moral argument.',
    paragraphs: [
      {
        label: 'Paragraph 1 -- Blood as heroism becoming guilt',
        point: 'Blood shifts from heroic to guilty across Acts 1-2, marking Macbeth\'s transformation.',
        quote: 'Will all great Neptune\'s ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine.',
        quoteSource: 'Macbeth -- Act 2, Scene 2',
        analysis:
          'In Act 1, blood is heroic: Macbeth\'s sword "smoked with bloody execution" in honourable battle. By Act 2, blood has become guilt. The hyperbole of Neptune\'s ocean being insufficient conveys permanence, and "incarnadine" (to turn red) imagines guilt contaminating the entire natural world. The shift from "bloody execution" (praised) to blood that cannot be washed (condemned) mirrors Macbeth\'s transformation from warrior to murderer.',
        contextLink:
          'Blood-guilt was a theological concept: the blood of the innocent cried out to God for justice. Macbeth\'s unwashable blood symbolises not merely psychological guilt but spiritual separation from divine grace.',
      },
      {
        label: 'Paragraph 2 -- Darkness as concealment',
        point: 'Both Macbeths invoke darkness to conceal their crimes, linking evil to the absence of divine light.',
        quote: 'Come, thick night, / And pall thee in the dunnest smoke of hell, / That my keen knife see not the wound it makes.',
        quoteSource: 'Lady Macbeth -- Act 1, Scene 5',
        analysis:
          'Lady Macbeth asks darkness to cover her actions from heaven and from herself. "Pall" evokes a funeral shroud, foreshadowing death. "Dunnest smoke of hell" explicitly locates the murder in the infernal realm. The desire for the knife not to "see" its own wound personifies the weapon and suggests that even the instrument of murder should be shielded from the horror. Shakespeare uses darkness as a spiritual concept: evil requires the absence of God\'s light.',
        contextLink:
          'Performances at the Globe Theatre took place in daylight, making darkness imagery entirely verbal. Shakespeare relies on language to create the oppressive atmosphere that modern productions achieve with lighting.',
      },
      {
        label: 'Paragraph 3 -- Blood and darkness converge',
        point: 'In Act 5, blood and darkness converge in Lady Macbeth\'s sleepwalking scene, where imaginary blood becomes the final mark of guilt.',
        quote: 'Here\'s the smell of the blood still. All the perfumes of Arabia will not sweeten this little hand.',
        quoteSource: 'Lady Macbeth -- Act 5, Scene 1',
        analysis:
          'Lady Macbeth\'s hallucinated blood inverts her earlier dismissal ("A little water clears us of this deed"). The sensory shift from sight to smell suggests guilt has become even more pervasive. "Little hand" reduces her from commanding figure to fragile human. The scene takes place at night, with a candle that Lady Macbeth insists on having -- the light she once asked to be extinguished is now her only comfort. Shakespeare brings the blood and darkness imagery to its devastating conclusion: the darkness Lady Macbeth summoned has become her prison, and the blood she dismissed has become her torment.',
        contextLink:
          'The doctor\'s observation that "unnatural deeds / Do breed unnatural troubles" connects Lady Macbeth\'s breakdown to the play\'s wider disruption of the natural order, linking individual guilt to cosmic disorder.',
      },
    ],
    conclusion:
      'Shakespeare\'s imagery of blood and darkness forms the play\'s visual and moral spine. Blood tracks the transformation of violence from heroic to criminal to hallucinatory; darkness tracks the progression from chosen concealment to inescapable prison. Together, they argue that evil cannot be contained: the blood spreads, the darkness deepens, and what begins as a deliberate choice becomes an uncontrollable condition. Shakespeare\'s method is to make abstract moral concepts viscerally physical, ensuring that the audience feels the weight of Macbeth\'s crimes through their senses as well as their intellect.',
  },
  {
    question: 'Starting with this extract, explore how Shakespeare presents the theme of kingship in Macbeth.',
    type: 'Extract/Theme',
    introduction:
      'Shakespeare presents kingship in Macbeth as a divinely ordained institution that carries absolute moral authority. The play constructs three models of rule -- Duncan\'s trusting generosity, Macbeth\'s paranoid tyranny, and Malcolm\'s shrewd virtue -- and judges each against the standard of the "king-becoming graces." Through the cosmic disturbances that follow Duncan\'s murder and the healing imagery associated with Malcolm\'s restoration, Shakespeare argues that legitimate monarchy is not merely a political arrangement but a natural and divine necessity, and that its violation produces consequences that ripple through every level of reality.',
    paragraphs: [
      {
        label: 'Paragraph 1 -- Duncan as ideal king',
        point: 'Duncan represents divinely sanctioned kingship, and his murder is presented as a crime against the natural order.',
        quote: 'He\'s here in double trust: / First, as I am his kinsman and his subject, / Strong both against the deed; then, as his host.',
        quoteSource: 'Macbeth -- Act 1, Scene 7',
        analysis:
          'Macbeth lists three bonds Duncan\'s murder would violate: kinship, political duty, and sacred hospitality. Shakespeare layers the crime to maximise its moral weight. Duncan\'s goodness is not incidental but structural: his virtue makes the crime worse and the consequences more severe. The "double trust" becomes a triple betrayal, and each broken bond contributes to the cosmic disorder that follows.',
        contextLink:
          'The feudal bond between king and subject was understood as sacred. The law of hospitality (the host\'s duty to protect guests) was equally inviolable. By making Duncan both king and guest, Shakespeare creates the most morally weighted murder possible.',
      },
      {
        label: 'Paragraph 2 -- Macbeth as tyrant',
        point: 'Macbeth\'s rule demonstrates what happens when kingship is seized without divine sanction.',
        quote: 'I have honour, love, obedience, troops of friends, / I must not look to have.',
        quoteSource: 'Macbeth -- Act 5, Scene 3',
        analysis:
          'Macbeth\'s self-assessment is a devastating admission that his kingship has yielded none of the rewards of legitimate rule. He has power without honour, a throne without love. The list of things he "must not look to have" directly mirrors Malcolm\'s "king-becoming graces": Macbeth knows exactly what a good king should possess and knows he has none of it. Shakespeare presents tyranny as inherently self-defeating -- it cannot produce the loyalty and respect that make kingship sustainable.',
        contextLink:
          'James I promoted the doctrine of the Divine Right of Kings but also emphasised that the king had reciprocal duties to his subjects. Macbeth fulfils none of these duties, and his kingdom suffers accordingly.',
      },
      {
        label: 'Paragraph 3 -- Malcolm as restoration',
        point: 'Malcolm\'s cautious virtue represents Shakespeare\'s ideal king, combining moral authority with political wisdom.',
        quote: 'The king-becoming graces: / As justice, verity, temperance, stableness.',
        quoteSource: 'Malcolm -- Act 4, Scene 3',
        analysis:
          'Malcolm\'s list functions as a direct checklist for good kingship. Each virtue -- justice, truth, moderation, steadfastness -- is one that Macbeth conspicuously lacks. However, Malcolm adds something Duncan lacked: political shrewdness. His elaborate test of Macduff demonstrates that he will not trust blindly as his father did. Shakespeare argues that the ideal king must be both virtuous and politically astute.',
        contextLink:
          'Malcolm\'s restoration affirms the legitimist position that James I championed: only the rightful heir can rule effectively. The play implies that the Stuart line descending from Banquo through Malcolm will produce the ideal combination of virtue and political wisdom.',
      },
    ],
    conclusion:
      'Shakespeare presents kingship as the linchpin of the moral universe. When the rightful king rules, nature is orderly and the nation prospers; when a tyrant seizes the throne, nature rebels and the nation suffers. The play\'s three models of kingship -- Duncan\'s flawed goodness, Macbeth\'s destructive tyranny, and Malcolm\'s balanced virtue -- construct an argument that legitimate monarchy requires both moral authority and practical wisdom, and that any deviation from this ideal produces catastrophic consequences.',
  },
]

// ── Page component ────────────────────────────────────────────────────────────

export default function MacbethEssayPlansPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Macbeth" textType="play" examBoard="AQA" />

        {/* Header */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/5 blur-3xl" />
          <div className="relative">
            <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/macbeth" />}>
              <ArrowLeft className="size-3.5" />
              Back to Macbeth overview
            </Button>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary"><FileText className="mr-1 size-3 text-rose-400" />Essay Plans</Badge>
              <Badge variant="outline">8 plans</Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Macbeth — Essay Plans</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Eight exam-style essay plans covering character, theme, and writer&apos;s methods questions. Each plan includes an introduction, three PEAL paragraphs with quotes and analysis, and a conclusion.
            </p>
          </div>
        </section>

        {/* Exam tip */}
        <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-4">
          <h4 className="mb-1 flex items-center gap-1.5 font-semibold text-amber-600 dark:text-amber-400">
            <Lightbulb className="size-4" /> How to Use These Plans
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            These plans follow the PEAL structure (Point, Evidence, Analysis, Link to context). In the exam, adapt the plan to the specific extract and question rather than reproducing it from memory. Practise writing one paragraph from each plan under timed conditions (12 minutes per paragraph) to build speed and confidence.
          </p>
        </div>

        {/* Essay plan cards */}
        {ESSAY_PLANS.map((plan, index) => (
          <Card key={index} id={`plan-${index + 1}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="flex items-start gap-2 text-lg leading-snug">
                  <FileText className="mt-0.5 size-5 shrink-0 text-rose-400" />
                  <span>{plan.question}</span>
                </CardTitle>
                <Badge variant="outline" className="shrink-0 text-xs">{plan.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Introduction */}
              <div>
                <h4 className="mb-1 font-semibold text-sm uppercase tracking-wide text-muted-foreground/70">Introduction</h4>
                <p className="text-muted-foreground leading-relaxed">{plan.introduction}</p>
              </div>

              {/* Paragraphs */}
              {plan.paragraphs.map((p, i) => (
                <div key={i} className="rounded-lg border border-border/60 p-4 space-y-3">
                  <h4 className="font-semibold">{p.label}</h4>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-rose-500">Point</span>
                    <p className="mt-0.5 text-sm text-muted-foreground">{p.point}</p>
                  </div>
                  <div className="rounded border border-border/40 bg-muted/30 p-3">
                    <span className="text-xs font-medium uppercase tracking-wide text-amber-500">Evidence</span>
                    <p className="mt-1 font-medium">&ldquo;{p.quote}&rdquo;</p>
                    <p className="mt-0.5 text-xs text-muted-foreground/70">{p.quoteSource}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-blue-500">Analysis</span>
                    <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">{p.analysis}</p>
                  </div>
                  <div className="rounded border border-emerald-500/20 bg-emerald-500/[0.04] p-3">
                    <span className="text-xs font-medium uppercase tracking-wide text-emerald-500">Context Link</span>
                    <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">{p.contextLink}</p>
                  </div>
                </div>
              ))}

              {/* Conclusion */}
              <div>
                <h4 className="mb-1 font-semibold text-sm uppercase tracking-wide text-muted-foreground/70">Conclusion</h4>
                <p className="text-muted-foreground leading-relaxed">{plan.conclusion}</p>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 pb-8">
          <Button variant="outline" render={<Link href="/revision/texts/macbeth" />}>
            <ArrowLeft className="size-4 mr-1" /> Overview
          </Button>
          <Button variant="outline" render={<Link href="/revision/texts/macbeth/characters" />}>
            Characters <Quote className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
