'use client'

import Link from 'next/link'
import { useState } from 'react'

/* ─── Expandable section component ──────────────────────────── */

function Section({
  id,
  title,
  children,
  defaultOpen = false,
}: {
  id: string
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <section id={id} className="border border-border rounded-lg bg-card shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <svg
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 pb-5 pt-4">{children}</div>}
    </section>
  )
}

/* ─── Data ───────────────────────────────────────────────────── */

const parts = [
  {
    part: 'Part One: Hailsham (Chapters 1-9)',
    chapters: [
      {
        chapter: 'Chapter 1',
        summary:
          "Kathy H., now thirty-one, introduces herself as a carer and reflects on her role looking after donors. She begins to recall her childhood at Hailsham, a seemingly idyllic English boarding school. Her narration is characterised by digressions and half-remembered details, establishing the novel's fragmented, memory-driven structure. She mentions Tommy, whose childhood rages set him apart from the other students.",
      },
      {
        chapter: 'Chapter 2',
        summary:
          "Kathy recalls Tommy's outbursts and how the other children bullied him for his lack of creative ability. At Hailsham, creativity is prized above all else: the students produce artwork and writing for the regular Exchanges and for Madame's mysterious Gallery. Tommy confides in Kathy that Miss Lucy told him it was perfectly acceptable not to be creative, contradicting Hailsham's culture. This conversation deepens their bond.",
      },
      {
        chapter: 'Chapter 3',
        summary:
          'Kathy describes the Exchanges, where students trade their creative work with one another, and the Sales, where they buy small personal items brought in from outside. She reflects on the significance of these possessions to students who own almost nothing. Ruth begins to emerge as a dominant social presence, and her relationship with Kathy is established as close but marked by subtle power dynamics and competitiveness.',
      },
      {
        chapter: 'Chapter 4',
        summary:
          "Ruth and Tommy begin a relationship, and Kathy observes from the periphery. Ruth's behaviour becomes increasingly performative: she cultivates a public image of her relationship with Tommy and uses it to assert her social status. Kathy's feelings of exclusion deepen, though she does not fully acknowledge her own feelings for Tommy. The chapter introduces the complex love triangle that drives much of the novel's emotional tension.",
      },
      {
        chapter: 'Chapter 5',
        summary:
          "Kathy recalls the guardians' oblique references to the students' futures and the growing sense that something is being concealed. She describes how information about donations and their purpose seeped into the students' awareness gradually, so that they simultaneously knew and did not know the truth. This captures the novel's central paradox: the students are told their fate, but in a way designed to prevent full comprehension.",
      },
      {
        chapter: 'Chapter 6',
        summary:
          "Miss Lucy becomes increasingly agitated about the way the students are being prepared (or not prepared) for their futures. The guardians debate how much the children should be told. Kathy observes Miss Lucy's distress and senses a conflict between the guardians' protective instincts and the institution's requirements. This chapter builds towards Miss Lucy's later outburst about the students' true purpose.",
      },
      {
        chapter: 'Chapter 7',
        summary:
          "Miss Lucy directly addresses the students, telling them that their lives have been 'decided' for them and that they will become donors. She explains that none of them will have the futures they might imagine: they will not be actors, work in supermarkets, or live ordinary lives. Although the students listen, the full impact of her words does not register immediately. Miss Lucy is later dismissed from Hailsham, presumably for breaking the unspoken rules about disclosure.",
      },
      {
        chapter: 'Chapter 8',
        summary:
          "Kathy discovers that she has strong sexual urges, which disturb her. She finds pornographic magazines and searches through them, not for arousal, but looking for a face that resembles her own. She fears that her sexual feelings may be connected to the 'possible' she was modelled on, perhaps someone from the fringes of society. This chapter explores identity, origin, and the students' desperate need to understand where they come from.",
      },
      {
        chapter: 'Chapter 9',
        summary:
          "Kathy recalls the moment Madame saw her dancing to the song 'Never Let Me Go' by Judy Bridgewater, holding a pillow as though cradling a baby. Madame watched from the doorway and was moved to tears. Kathy did not understand Madame's reaction at the time. The scene becomes one of the novel's most symbolic moments: Kathy unknowingly mourning a motherhood and a future she will never have. The cassette tape later goes missing, a loss that resonates throughout the novel.",
      },
    ],
  },
  {
    part: 'Part Two: The Cottages (Chapters 10-17)',
    chapters: [
      {
        chapter: 'Chapter 10',
        summary:
          'Kathy, Tommy, and Ruth leave Hailsham and move to the Cottages, a transitional living arrangement where older students live semi-independently before becoming carers and then donors. They encounter veterans who have been there longer and begin to imitate adult behaviours they have seen on television, adopting gestures and phrases that feel artificial. Ruth is particularly eager to fit in and distances herself from Hailsham.',
      },
      {
        chapter: 'Chapter 11',
        summary:
          "Ruth becomes increasingly controlling and performative, mimicking the veterans' behaviour and criticising Kathy for not doing the same. The gap between Ruth's public persona and her private self widens. Kathy feels increasingly isolated, caught between loyalty to Ruth and her own growing independence. The dynamics of the friendship group shift as the Cottages' more open environment reveals tensions that Hailsham's structure had contained.",
      },
      {
        chapter: 'Chapter 12',
        summary:
          "The students discuss 'possibles': the original people from whom they were cloned. Ruth becomes obsessed with finding her possible, convinced she was modelled on someone successful. This hope represents the students' desire for identity and significance beyond their prescribed role as organ donors. The concept of possibles raises questions about nature versus nurture and whether the clones share any fundamental connection with their originals.",
      },
      {
        chapter: 'Chapter 13',
        summary:
          "A group including Kathy, Tommy, Ruth, and two veterans travel to Norfolk to find Ruth's possible. They spot a woman in an office who resembles Ruth, but when they see her up close, the resemblance fades. Ruth is devastated and lashes out, telling Tommy and Kathy that they are foolish to believe their originals could be anyone respectable: 'We're modelled from trash. Junkies, prostitutes, winos, tramps.' This cruel outburst reflects Ruth's own pain and self-loathing.",
      },
      {
        chapter: 'Chapter 14',
        summary:
          "While in Norfolk, Tommy and Kathy separate from the group and visit second-hand shops. Tommy finds a replacement copy of the Judy Bridgewater cassette tape for Kathy, a deeply tender gesture that reveals the depth of his feelings for her. Norfolk, which they had been told as children was England's 'lost corner' where all lost things ended up, takes on a metaphorical significance: it becomes a place where lost connections might be recovered.",
      },
      {
        chapter: 'Chapter 15',
        summary:
          'Tommy shares his theory with Kathy about the Gallery: he believes Madame collected their art to assess whether students who were truly in love had souls. He thinks that if two students could prove they were genuinely in love, they might be granted a deferral, a postponement of their donations. Tommy has started making small, intricate animal drawings, hoping these might serve as evidence if he and Kathy ever apply for a deferral. Kathy is moved but uncertain.',
      },
      {
        chapter: 'Chapter 16',
        summary:
          "The relationship between Kathy and Ruth becomes increasingly strained. Ruth deliberately undermines Kathy's connection with Tommy, telling him that Kathy would not be a suitable partner. She manipulates the situation to keep Tommy for herself, despite knowing that Kathy and Tommy share a deeper bond. Kathy, hurt and unable to fight Ruth's social dominance, decides to begin her training as a carer and leaves the Cottages.",
      },
      {
        chapter: 'Chapter 17',
        summary:
          "Kathy separates from both Ruth and Tommy and begins her career as a carer. She drives around England visiting donors in recovery centres, developing a reputation as one of the best carers. Years pass. Kathy reflects on how distance and time have changed her relationships. The chapter marks the transition from the students' extended childhood to the reality of their adult lives as participants in the donation programme.",
      },
    ],
  },
  {
    part: 'Part Three: Completions (Chapters 18-23)',
    chapters: [
      {
        chapter: 'Chapter 18',
        summary:
          "After years apart, Kathy encounters Ruth again and becomes her carer. Ruth has already made two donations and is physically diminished. Their reunion is cautious but genuine. Ruth is more honest and vulnerable than she was at the Cottages. She begins to acknowledge the ways she manipulated Kathy and Tommy's relationship. The chapter establishes the novel's final movement towards reconciliation and loss.",
      },
      {
        chapter: 'Chapter 19',
        summary:
          "Kathy also reconnects with Tommy, who has made two donations and lives in a recovery centre. The three of them take a trip together to see a beached boat that Ruth has heard about. During this excursion, Ruth makes a confession: she deliberately kept Kathy and Tommy apart because she was jealous of their connection. She gives them Madame's address and urges them to apply for a deferral together, attempting to make amends before it is too late.",
      },
      {
        chapter: 'Chapter 20',
        summary:
          "Ruth completes after her second donation. Kathy becomes Tommy's carer, and they finally begin a romantic relationship. Their time together is tender but shadowed by the knowledge that Tommy has already made three donations and may not survive a fourth. They begin to discuss applying to Madame for a deferral, clinging to the hope that their love might buy them more time.",
      },
      {
        chapter: 'Chapter 21',
        summary:
          'Kathy and Tommy visit Madame to request a deferral. Madame takes them inside, where they also encounter Miss Emily, now elderly and in a wheelchair. Miss Emily reveals the truth: deferrals never existed. The Gallery was never about proving that students had souls in order to grant them more time. Instead, it was about proving to the outside world that clones had souls at all, that they were fully human. Hailsham was part of a liberal reform movement that tried to improve conditions for clones, but it was ultimately shut down as public opinion turned against reform.',
      },
      {
        chapter: 'Chapter 22',
        summary:
          "Miss Emily explains the broader context: society created clones for organ harvesting because the medical advances were too valuable to refuse. Hailsham and similar institutions tried to demonstrate that clones deserved humane treatment, but the movement failed. The public preferred not to think about the clones as human. She describes how Hailsham was closed and the students' art was dispersed. Tommy is devastated by the revelation. On the drive home, he asks Kathy to stop the car and screams into the darkness, finally releasing the rage he has suppressed since childhood.",
      },
      {
        chapter: 'Chapter 23',
        summary:
          'Tommy tells Kathy he does not want her to be his carer for his fourth donation, wanting to spare her the pain of watching him complete. They part. Tommy completes shortly after. Kathy, now alone, drives to Norfolk and stands in a flat, empty field. She imagines that everything she has lost, Tommy, Ruth, Hailsham itself, might come drifting towards her from across the horizon. She then gets back in her car and drives away. The novel ends with Kathy accepting her fate, her own donations approaching, sustained only by memory.',
      },
    ],
  },
]

const characters = [
  {
    name: 'Kathy H.',
    role: 'Narrator, carer, later donor',
    analysis:
      "Kathy is the novel's narrator and moral centre. Her measured, reflective voice shapes the reader's understanding of the entire world Ishiguro creates. She is observant, empathetic, and patient, qualities that make her an excellent carer but also leave her vulnerable to manipulation, particularly by Ruth. Her narration is characterised by qualifications and digressions ('I'm not sure if I'm remembering this right'), which mirror the unreliability of memory and the difficulty of making sense of a life whose meaning has been determined by others. Kathy's acceptance of her fate is both her greatest strength and the novel's most troubling quality: she rarely rebels, instead finding meaning in human connection and in the act of remembering itself. Her final image, standing alone in a Norfolk field imagining her losses drifting towards her, captures the novel's blend of profound sadness and quiet dignity.",
  },
  {
    name: 'Tommy D.',
    role: "Kathy's love interest, donor",
    analysis:
      "Tommy is defined by his emotional intensity and vulnerability. His childhood rages, triggered by bullying over his lack of artistic ability, set him apart from the controlled, compliant culture of Hailsham. He is the character who comes closest to resistance: his scream into the darkness in Chapter 22 is the novel's most powerful expression of grief and anger at the injustice of their fate. Tommy's intricate animal drawings, created in the hope that they might prove his soul to Madame, represent a desperate attempt to assert his humanity within a system designed to deny it. His relationship with Kathy is the novel's emotional core, built on genuine understanding rather than Ruth's performative intimacy. Tommy's decision to spare Kathy from witnessing his final donation reveals his deep love and his awareness that some losses cannot be softened by companionship.",
  },
  {
    name: 'Ruth',
    role: "Kathy's friend, Tommy's girlfriend, donor",
    analysis:
      "Ruth is the novel's most complex and morally ambiguous character. She is socially ambitious, manipulative, and deeply insecure. At Hailsham and the Cottages, she carefully constructs a public persona, imitating behaviours she has seen on television and asserting dominance over her friendship group. Her most consequential act is deliberately keeping Kathy and Tommy apart, recognising their deeper connection and sabotaging it out of jealousy. However, Ruth is not simply a villain. Her manipulations stem from the same existential anxiety that affects all the students: the need to feel significant in a world that treats them as disposable. Her late-life confession and attempt to reunite Kathy and Tommy represent genuine remorse and a desire for redemption. Ruth's trajectory illustrates how the donation system distorts relationships: competition for love and status becomes more intense when life is short and predetermined.",
  },
  {
    name: 'Miss Lucy',
    role: 'Guardian at Hailsham',
    analysis:
      "Miss Lucy represents the moral conscience of Hailsham. She is the only guardian who believes the students should be told the full truth about their futures. Her outburst in Chapter 7, where she tells the students that their lives have been 'decided' and that they will never have normal careers or futures, is the novel's most direct confrontation with the ethical horror of the donation system. She is dismissed from Hailsham for this breach, suggesting that the institution's survival depends on maintaining a careful balance between knowledge and ignorance. Miss Lucy embodies the tension between protecting children from painful truths and respecting their right to understand their own lives. Her removal illustrates how systems of exploitation silence those who challenge them.",
  },
  {
    name: 'Miss Emily',
    role: 'Head guardian at Hailsham',
    analysis:
      "Miss Emily represents the liberal establishment's compromised response to injustice. She genuinely cares about the students and founded Hailsham as a humane alternative to the 'battery farm' conditions in which most clones are raised. However, she never challenges the donation system itself, only its implementation. Her revelation in Chapter 21 that the Gallery was designed to prove clones had souls to the outside world, not to grant deferrals, exposes the limits of reformism: she sought to improve conditions within an unjust system rather than dismantling it. Miss Emily's pragmatism contrasts with Miss Lucy's idealism. She represents the uncomfortable truth that even well-intentioned people can become complicit in systemic cruelty when they accept its fundamental premises.",
  },
  {
    name: 'Madame (Marie-Claude)',
    role: 'Collector of student artwork',
    analysis:
      "Madame is a distant, enigmatic figure who visits Hailsham periodically to select the best student artwork for her Gallery. The students sense that she is afraid of them, recoiling from physical proximity as though they are repulsive. Her tears when she watches Kathy dancing to 'Never Let Me Go' reveal a more complex response: she recognises the students' humanity and grieves for what they will lose, but she cannot fully overcome her discomfort. Madame represents the broader society's relationship with the clones: capable of recognising their humanity in individual moments but unwilling to act on that recognition in any way that would challenge the system. Her Gallery, intended as evidence of clone humanity, ultimately serves as a salve for liberal guilt rather than a catalyst for change.",
  },
]

const themes = [
  {
    name: 'Identity and the Search for Origins',
    detail:
      "The students' search for their 'possibles', the original humans from whom they were cloned, represents a universal need to understand where we come from and who we are. Ruth's obsession with finding a respectable possible reflects her desire to believe that she is more than her prescribed role. When she discovers that clones are probably modelled from society's margins ('trash, junkies, prostitutes'), her devastation reveals how deeply identity is tied to origin stories. Ishiguro uses the clones' situation to explore broader questions: how much of our identity is determined by biology, upbringing, or social expectation? The students' artwork, collected for the Gallery, becomes another site of identity: Miss Emily reveals it was meant to prove that clones have souls. The question of whether a clone is fully human parallels real-world debates about what constitutes personhood.",
  },
  {
    name: 'Memory and Nostalgia',
    detail:
      "Kathy's narration is structured entirely around memory, and the novel interrogates both the comfort and the unreliability of remembering. She frequently qualifies her recollections ('I'm not sure if I'm remembering this right'), acknowledging that memory is a reconstruction rather than a record. Hailsham becomes a symbol of lost innocence: the students romanticise it even though it was, in reality, a place designed to prepare them for organ harvesting. Nostalgia functions as both a coping mechanism and a form of self-deception. The students cling to their Hailsham memories because these are the only experiences that felt fully their own. Ishiguro suggests that memory is what makes us human, yet it is also what makes loss unbearable: to remember fully is to understand exactly what has been taken from you.",
  },
  {
    name: 'Mortality and the Human Condition',
    detail:
      "The clones' shortened, predetermined lives serve as an intensified version of the universal human condition: we all face death, and we all must find meaning in lives that are finite. The donation system simply makes the timeline explicit and the ending non-negotiable. Ishiguro has stated that the novel is not primarily about cloning but about how human beings cope with the knowledge that they will die. The students' responses, Kathy's quiet acceptance, Tommy's suppressed rage, Ruth's social ambition, mirror the strategies real people use to manage mortality. The euphemistic language of the donation system ('completing' rather than dying, 'donations' rather than organ removal) parallels how society uses language to soften the reality of death.",
  },
  {
    name: 'Love and Human Connection',
    detail:
      "Love in the novel takes multiple forms: the deep, unspoken bond between Kathy and Tommy; Ruth's possessive, competitive attachment; the guardians' conflicted care for their students. The deferral rumour, the belief that couples who can prove they are truly in love will be granted more time, is the novel's most poignant expression of love's power and its limits. Tommy and Kathy's love is genuine and profound, but it cannot save them. Ishiguro suggests that love does not conquer death or injustice, but it gives life meaning within those constraints. The novel's most devastating moments are moments of connection: Tommy finding the cassette tape, Ruth's confession, Kathy and Tommy's brief time together as a couple before his final donation.",
  },
  {
    name: 'Acceptance vs. Resistance',
    detail:
      "Perhaps the novel's most unsettling quality is how passively the students accept their fate. They never attempt to escape, organise resistance, or refuse to donate. This passivity has troubled many readers, but Ishiguro presents it as a deliberate and realistic choice. The students are raised within a system that normalises their exploitation: Hailsham teaches them to accept their role through gradual, partial disclosure rather than explicit instruction. By the time they fully understand their situation, acceptance is so deeply ingrained that resistance feels inconceivable. Tommy's scream is the closest the novel comes to rebellion, and it changes nothing. Ishiguro asks the reader to consider how much of their own life is shaped by similar passive acceptance of unjust systems.",
  },
  {
    name: 'Ethics of Science and Technology',
    detail:
      "The novel raises profound ethical questions about the limits of scientific progress. Miss Emily explains that society embraced cloning because the medical benefits, curing cancer, motor neurone disease, heart disease, were too great to refuse. Once people saw these cures as available, there was no going back: 'How can you ask a world that has come to regard cancer as curable, how can you ask such a world to put away that cure?' Ishiguro explores how utilitarian reasoning can justify profound cruelty, and how societies choose not to see the human cost of their comfort. The novel's world is not a distant dystopia but a version of contemporary Britain, suggesting that the ethical failures it depicts are not hypothetical but already present in different forms: in attitudes towards marginalised groups, in the exploitation of unseen labour, and in the moral compromises that sustain modern medicine.",
  },
]

const keyQuotes = [
  {
    quote:
      "We all know it. We're modelled from trash. Junkies, prostitutes, winos, tramps. Convicts, maybe, just so long as they aren't psychos.",
    chapter: 'Chapter 13',
    speaker: 'Ruth',
    analysis:
      "Ruth's outburst after the failed search for her possible reveals the students' deepest fear about their origins. The word 'modelled' reduces human identity to a manufacturing process. The list of marginalised figures ('junkies, prostitutes, winos, tramps') exposes the class system underlying the donation programme: clones are created from those society already considers disposable. Ruth's pain is not just about her own origin but about the entire system's contempt for their humanity.",
  },
  {
    quote: "What I'm not sure about, is if our memories are the same as everyone else's.",
    chapter: 'Chapter 6',
    speaker: 'Kathy',
    analysis:
      "This early reflection establishes the novel's central concern with whether the clones' inner lives are equivalent to those of 'normal' humans. Kathy's uncertainty about the quality of her own memories mirrors the broader question the novel poses: what makes a person fully human? The tentative phrasing ('what I'm not sure about') is characteristic of Kathy's narration, which proceeds through doubt and qualification rather than certainty.",
  },
  {
    quote:
      "Your lives are set out for you. You'll become adults, then before you're old, before you're even middle-aged, you'll start to donate your vital organs.",
    chapter: 'Chapter 7',
    speaker: 'Miss Lucy',
    analysis:
      "Miss Lucy's direct statement is the novel's most explicit articulation of the students' fate. The phrase 'set out for you' removes all agency: their lives are not lived but administered. The clinical precision of 'vital organs' strips away euphemism. The structure of the sentence, moving from ordinary milestones ('become adults') to the extraordinary ('donate your vital organs'), mirrors how the novel itself gradually reveals the horror beneath the familiar.",
  },
  {
    quote:
      "She was weeping... and what I saw was a new kind of sadness, a sadness I hadn't come across before. It was a sadness about something she'd lost or was losing. Something she was afraid of losing.",
    chapter: 'Chapter 9',
    speaker: 'Kathy, describing Madame',
    analysis:
      "Madame's tears when she watches Kathy dance to 'Never Let Me Go' represent the novel's emotional climax of Part One. Kathy interprets the sadness as personal loss, but the reader understands that Madame weeps for all the clones: children who will never grow old, never become mothers, never have the futures they innocently imagine. The repetition of 'sadness' and 'losing' creates a rhythmic intensity that undercuts the typically restrained narration.",
  },
  {
    quote:
      "I keep thinking about this river somewhere, with the water moving really fast. And these two people in the water, trying to hold onto each other, holding on as hard as they can, but in the end it's just too much. The current's too strong. They've got to let go, drift apart.",
    chapter: 'Chapter 20',
    speaker: 'Kathy',
    analysis:
      "This extended metaphor captures the novel's central tragedy: love cannot overcome the forces that separate people. The river represents time, mortality, and the donation system. 'Holding on as hard as they can' conveys the desperation of Kathy and Tommy's relationship, while 'the current's too strong' acknowledges that individual resistance is futile against systemic power. The imagery of drifting apart resonates with the novel's ending, where Kathy stands alone imagining her losses.",
  },
  {
    quote:
      'We took away your art because we thought it would reveal your souls. Or to put it more finely, we did it to prove you had souls at all.',
    chapter: 'Chapter 21',
    speaker: 'Miss Emily',
    analysis:
      "This revelation reframes the entire novel. The Gallery, which the students believed might grant them deferrals, was actually designed to convince the outside world that clones are human. The phrase 'prove you had souls at all' is devastating: it reveals that the students' humanity was never taken for granted but was something that required evidence. The word 'finely' suggests Miss Emily's awareness of the cruelty embedded in her own project.",
  },
  {
    quote:
      'How can you ask a world that has come to regard cancer as curable, how can you ask such a world to put away that cure, to go back to the dark days?',
    chapter: 'Chapter 22',
    speaker: 'Miss Emily',
    analysis:
      "Miss Emily's rhetorical question exposes the utilitarian logic that sustains the donation system. The phrase 'dark days' reframes a world without organ harvesting as primitive, making the exploitation of clones seem like progress. The repetition of 'how can you ask' conveys the impossibility of reversing a system once its benefits have been normalised. Ishiguro implicates the reader: we, too, benefit from systems whose human costs we choose not to examine.",
  },
  {
    quote: 'Poor creatures. What did we do to you? With all our schemes and plans?',
    chapter: 'Chapter 21',
    speaker: 'Madame',
    analysis:
      "Madame's lament is one of the novel's few moments of explicit moral reckoning. 'Poor creatures' is both compassionate and dehumanising, reflecting the ambivalence that characterises society's relationship with the clones. 'What did we do to you?' acknowledges guilt, while 'our schemes and plans' implicates the entire reform movement, not just the donation system. Madame recognises that even Hailsham, designed to be humane, was a form of control.",
  },
  {
    quote:
      "It was like when you make a move in chess and just as you take your finger off the piece, you see the mistake you've made, and there's this panic because you don't know yet the scale of disaster you've left yourself open to.",
    chapter: 'Chapter 19',
    speaker: 'Kathy',
    analysis:
      "This simile describes the moment of irreversible recognition, the feeling of understanding something too late to change it. The chess metaphor suggests a game with rules and consequences, mirroring the students' lives, which follow a predetermined sequence of moves. 'The scale of disaster' remains unknown, which is worse than certainty: it captures the clones' experience of gradually comprehending a fate they cannot alter.",
  },
  {
    quote: "The problem, as I see it, is that you've been told and not told.",
    chapter: 'Chapter 7',
    speaker: 'Miss Lucy',
    analysis:
      "This paradox encapsulates how Hailsham operates. The students receive information about their futures in fragments, delivered in ways designed to prevent full comprehension. 'Told and not told' describes a state of partial knowledge that is worse than ignorance because it prevents the students from either accepting or resisting their fate. The phrase also describes the novel's own narrative technique: Kathy reveals the truth gradually, keeping the reader in the same state of incomplete understanding.",
  },
  {
    quote:
      "I half closed my eyes and imagined this was the spot where everything I'd ever lost since my childhood had washed up, and I was now standing here in front of it.",
    chapter: 'Chapter 23',
    speaker: 'Kathy',
    analysis:
      "The novel's final image. Kathy stands in a Norfolk field imagining that all her losses, Tommy, Ruth, Hailsham, have gathered in one place. Norfolk, described earlier as England's 'lost corner' where lost things wash up, becomes a metaphor for memory itself: the place where we keep what we have lost. The phrase 'half closed my eyes' suggests a deliberate act of imagination, an acknowledgement that consolation requires self-deception. The image is beautiful and devastating in equal measure.",
  },
  {
    quote: 'Driving around the country now, I still see things that will remind me of Hailsham.',
    chapter: 'Chapter 1',
    speaker: 'Kathy',
    analysis:
      "The novel's opening establishes memory as Kathy's primary mode of engagement with the world. 'Driving around the country' conveys her rootless existence as a carer, always in transit and never at home. 'Still see things' suggests that the past is inescapable: every landscape triggers a recollection. Ishiguro uses this opening to signal that the novel will be structured by association and memory rather than chronological plot.",
  },
  {
    quote:
      "She'd have been told about the donations and all that. But she wouldn't have understood. Not really.",
    chapter: 'Chapter 5',
    speaker: 'Kathy',
    analysis:
      "This distinction between being told and understanding recurs throughout the novel. The phrase 'and all that' is characteristically casual, minimising the horror of organ harvesting through understatement. 'Not really' acknowledges that comprehension requires emotional as well as intellectual processing. Ishiguro shows how language can simultaneously communicate and conceal: the information is available, but its meaning is withheld.",
  },
  {
    quote:
      "If I were a student at Hailsham, I'd want to know the truth about my future. But you see, the students aren't like that. They don't want to know.",
    chapter: 'Chapter 7',
    speaker: 'Miss Lucy (paraphrased by Kathy)',
    analysis:
      "This observation complicates the ethics of disclosure. Miss Lucy initially believes truth is always preferable, but she comes to recognise that the students' capacity for denial is a survival mechanism. 'They don't want to know' raises the question of whether complicity in one's own oppression can be a form of self-protection. Ishiguro challenges the assumption that knowledge is always liberating: sometimes understanding one's fate only deepens the suffering.",
  },
  {
    quote:
      "Tommy's face was right up against the mesh, and he was sort of shaking the wire. And he let out this bellowing sound.",
    chapter: 'Chapter 2',
    speaker: 'Kathy',
    analysis:
      "Tommy's childhood rage is one of the novel's recurring motifs. The mesh represents confinement: Tommy is literally caged by Hailsham's structures. 'Bellowing' is an animalistic word that connects to the broader question of how society dehumanises the clones. His rages are the instinctive response of someone who senses injustice but cannot articulate it. This early image foreshadows his scream into the darkness in Chapter 22, the adult version of the same primal protest.",
  },
  {
    quote:
      'None of you will go to America, none of you will be film stars. And none of you will be working in supermarkets as I heard some of you planning the other day.',
    chapter: 'Chapter 7',
    speaker: 'Miss Lucy',
    analysis:
      "The juxtaposition of extraordinary and mundane ambitions ('film stars' and 'working in supermarkets') makes this passage particularly devastating. The students are denied not only glamorous futures but ordinary ones. 'None of you' is repeated three times, hammering home the totality of their exclusion. Miss Lucy's directness contrasts with the guardians' usual evasiveness, and her dismissal from Hailsham shows how the system punishes honesty.",
  },
  {
    // VERIFY: direct quotation withheld - the previous text contained an unverifiable corruption. The passage referenced is Kathy's closing reflection in Chapter 23 (Norfolk shoreline imagery: rubbish, flapping plastic). Restore the exact wording only from a verified Faber edition.
    quote:
      '[Closing imagery from Chapter 23 - Kathy at the Norfolk shoreline reflecting on the wind-blown rubbish caught in the branches and on the fence. Quotation withheld pending source verification.]',
    chapter: 'Chapter 23',
    speaker: 'Kathy',
    analysis:
      "The image of rubbish caught in trees along the Norfolk coast becomes a metaphor for the students themselves: discarded by society, caught in structures they did not choose, unable to free themselves. The 'flapping plastic' is mundane and ugly, deliberately unromantic, which makes the moment more honest than a conventionally beautiful ending. Ishiguro refuses to sentimentalise loss, instead grounding it in the ordinary detritus of the physical world.",
  },
  {
    quote:
      'What he wanted was not just to hear about Hailsham, but to remember Hailsham, just like it was his own memory.',
    chapter: 'Chapter 1',
    speaker: 'Kathy, describing a donor',
    analysis:
      "This passage reveals that Hailsham has become a myth for clones who were raised in less humane conditions. The desire to 'remember' something one never experienced highlights how memory and identity are constructed rather than fixed. Hailsham represents hope, humanity, and childhood innocence, qualities that the donation system systematically destroys. The donor's longing for borrowed memories mirrors the clones' broader search for an identity that feels authentically their own.",
  },
  {
    quote:
      "She gave me the same look as she'd given me at the roundabout, a look that was sort of querying and kind at the same time.",
    chapter: 'Chapter 19',
    speaker: 'Kathy, describing Ruth',
    analysis:
      "This moment captures Ruth's transformation in the novel's final section. The 'querying' element reflects her uncertainty about whether she can repair the damage she has done, while 'kind' reveals the genuine affection beneath her years of manipulation. Ruth's late-life tenderness towards Kathy and Tommy represents Ishiguro's belief in the possibility of moral growth, even within a system designed to prevent it.",
  },
  {
    quote:
      "It's something for me to go with, even though I know now it won't bring Tommy back or anything like that. But it does give me a lot of strength.",
    chapter: 'Chapter 23',
    speaker: 'Kathy',
    analysis:
      "Kathy's final reflection acknowledges that memory cannot undo loss ('it won't bring Tommy back') but insists that it provides 'strength'. This is the novel's qualified consolation: meaning does not come from defeating death or injustice but from the act of remembering, of refusing to let the people we loved disappear entirely. Kathy's strength is the strength of witness: she carries the stories of those who have completed.",
  },
  {
    quote:
      "I didn't want to be friends with anyone. I just wanted to be left alone, to go on doing my work.",
    chapter: 'Chapter 17',
    speaker: 'Kathy',
    analysis:
      "Kathy's withdrawal after leaving the Cottages reveals the emotional cost of living within the donation system. Isolation becomes a form of self-protection: if she does not form attachments, she cannot be hurt by loss. The phrase 'doing my work' is grimly ironic: her 'work' is caring for people as their organs are removed. Kathy's retreat into professionalism mirrors how many people cope with unbearable circumstances by focusing on routine and duty.",
  },
  {
    quote:
      'He opened his arms and shouted into the wind... and I could see his whole body was shaking.',
    chapter: 'Chapter 22',
    speaker: 'Kathy, describing Tommy',
    analysis:
      "Tommy's scream after learning that deferrals do not exist is the novel's most cathartic and devastating moment. It echoes his childhood rages but carries the weight of adult comprehension: he now fully understands what he has lost. 'Into the wind' suggests his protest is absorbed by the indifferent natural world. His shaking body conveys a grief that is physical, not merely emotional. This is the closest the novel comes to an act of rebellion, and its futility makes it all the more powerful.",
  },
]

const contextSections = [
  {
    title: 'Kazuo Ishiguro',
    content:
      "Kazuo Ishiguro was born in Nagasaki, Japan, in 1954 and moved to England at the age of five. He is one of the most acclaimed novelists of his generation, winning the Nobel Prize in Literature in 2017. His work is characterised by restrained, first-person narration, unreliable narrators, and an exploration of memory, self-deception, and the passage of time. Never Let Me Go (2005) draws on themes present in his earlier novels, particularly The Remains of the Day (1989), which similarly features a narrator who has sacrificed personal fulfilment in service to an institution. Ishiguro has stated that the novel is not primarily about cloning or science fiction but about 'how all of us have to find a way to live with the knowledge that we will age and die'.",
  },
  {
    title: 'Dystopian Fiction',
    content:
      "Never Let Me Go belongs to the tradition of dystopian fiction, alongside works such as George Orwell's Nineteen Eighty-Four, Aldous Huxley's Brave New World, and Margaret Atwood's The Handmaid's Tale. However, Ishiguro subverts the conventions of the genre. There is no totalitarian government, no dramatic rebellion, no hero who challenges the system. The dystopia of Never Let Me Go is quiet, English, and familiar: the countryside, boarding schools, and recovery centres could belong to contemporary Britain. This ordinariness is deliberate. Ishiguro suggests that the most dangerous dystopias are not the ones that look dramatically different from our world but the ones that look exactly like it. The novel's lack of resistance is its most radical feature: it refuses to offer the comforting narrative of rebellion that most dystopian fiction provides.",
  },
  {
    title: 'Ethics of Science and Cloning',
    content:
      "The novel was published in 2005, a period of intense public debate about the ethics of cloning, stem cell research, and genetic engineering. Dolly the Sheep, the first mammal cloned from an adult somatic cell, was created in 1996 and died in 2003. The Human Fertilisation and Embryology Act (2008) later regulated cloning research in the UK. Ishiguro's novel does not engage directly with the science of cloning but uses it as a thought experiment: if clones could provide a limitless supply of organs, would society be willing to treat them as less than human in order to benefit? The novel suggests that the answer is yes, and that this willingness is not a hypothetical future scenario but a reflection of existing attitudes towards marginalised groups whose suffering is rendered invisible by the systems that benefit from it.",
  },
  {
    title: 'The English Boarding School Tradition',
    content:
      'Hailsham draws on the tradition of the English boarding school, a setting associated with privilege, formation, and social control. Schools in this tradition (Eton, Harrow, and their fictional counterparts in novels by Dickens, Orwell, and Hilary Mantel) are places where young people are shaped by institutional values, often at the cost of individual identity. Ishiguro inverts the boarding school narrative: Hailsham looks idyllic but exists to prepare students for organ harvesting. The emphasis on creativity, the pastoral grounds, and the caring guardians are not signs of genuine nurture but sophisticated mechanisms of control. By placing his clones in this quintessentially English setting, Ishiguro suggests that the exploitation is not alien or futuristic but deeply embedded in familiar social structures.',
  },
  {
    title: 'Memory and Narrative in Post-War British Fiction',
    content:
      "Ishiguro's use of an unreliable, memory-driven narrator places the novel within a broader tradition of post-war British fiction concerned with the relationship between personal memory and historical truth. Like Stevens in The Remains of the Day, Kathy constructs a narrative that is simultaneously honest and evasive: she tells the reader everything but arranges the information in a way that delays full comprehension. This narrative strategy mirrors the novel's thematic concern with 'being told and not told'. Ishiguro's prose style, characterised by understatement, qualification, and emotional restraint, reflects a particularly English mode of expression in which the most important things are left unsaid.",
  },
]

const essayQuestions = [
  {
    question: 'How does Ishiguro use the character of Kathy H. to explore the theme of memory?',
    points: [
      "Analyse Kathy's narrative voice: qualifications, digressions, and the phrase 'I'm not sure if I'm remembering this right'",
      "Examine how Kathy's memories of Hailsham function as both comfort and self-deception",
      'Discuss the relationship between memory and identity: Kathy defines herself through what she remembers',
      "Consider the novel's structure as a series of remembered episodes rather than a linear plot",
      'Explore the final image in Norfolk: memory as a form of recovery and consolation',
      "Link to context: Ishiguro's broader interest in unreliable narrators and the construction of personal history",
    ],
  },
  {
    question: 'To what extent are the students in Never Let Me Go responsible for their own fate?',
    points: [
      "Examine the students' passivity: they never attempt escape or organised resistance",
      "Consider Hailsham's role in conditioning acceptance through 'telling and not telling'",
      "Analyse Tommy's scream as the closest moment to rebellion and its ultimate futility",
      "Discuss Ruth's manipulation as a form of agency within a constrained system",
      "Assess Miss Emily's claim that the students were given the best possible childhood within the system's constraints",
      'Counter-argument: can we blame individuals for failing to resist a system they have been raised to accept?',
    ],
  },
  {
    question: 'How does Ishiguro present the theme of love in Never Let Me Go?',
    points: [
      'The deferral rumour: love as a potential escape from mortality, ultimately revealed as false hope',
      "Kathy and Tommy's relationship: genuine connection versus Ruth's performative attachment",
      "Ruth's manipulation and her late confession: love distorted by jealousy and insecurity",
      "The guardians' love for the students: genuine but compromised by their institutional role",
      'The cassette tape as a symbol of love and loss: Tommy finding it for Kathy in Norfolk',
      "Ishiguro's suggestion that love gives meaning to life but cannot extend or save it",
    ],
  },
  {
    question:
      "'Never Let Me Go is not really about cloning. It is about what it means to be human.' How far do you agree?",
    points: [
      "The clones' experiences (love, friendship, jealousy, grief) are indistinguishable from those of 'normal' humans",
      "Ishiguro's stated intention: the novel is about how we all cope with mortality",
      'The donation system as a metaphor for the human condition: all lives are finite and shaped by forces beyond individual control',
      "The Gallery as an attempt to prove the clones have 'souls': what does it mean to be recognised as fully human?",
      "Counter-argument: the novel's power depends on the specific horror of cloning and organ harvesting; removing this element would diminish its impact",
      "Link to context: Ishiguro's interest in how institutions shape and constrain human lives (compare The Remains of the Day)",
    ],
  },
  {
    question:
      'How does Ishiguro use the setting of Hailsham to explore ideas about control and freedom?',
    points: [
      'Hailsham as an idyllic prison: beautiful grounds, caring guardians, but a system designed to produce compliant donors',
      'The Exchanges and Sales: creating a sense of ownership and individuality within total institutional control',
      'The emphasis on creativity: genuine nurture or sophisticated mechanism for making the students feel valued?',
      "Miss Lucy versus Miss Emily: two approaches to managing the students' knowledge of their fate",
      'The Cottages as a transitional space: more freedom but also more isolation and disorientation',
      'The broader English boarding school tradition: Hailsham as an inversion of the privileged school narrative',
    ],
  },
]

/* ─── Page Component ─────────────────────────────────────────── */

export default function NeverLetMeGoStudyGuide() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-xl border bg-gradient-to-b from-primary/[0.06] to-transparent px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          GCSE English Literature &mdash; Revision Notes
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Never Let Me Go &mdash; Complete Study Guide
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Kazuo Ishiguro&rsquo;s 2005 dystopian novel. Part-by-part summaries, character analysis,
          themes, {keyQuotes.length} key quotations with analysis, historical and literary context,
          and essay planning.
        </p>
      </div>

      {/* Quick nav */}
      <nav className="flex flex-wrap gap-2 text-sm" aria-label="Page sections">
        {['Part Summaries', 'Characters', 'Themes', 'Key Quotes', 'Context', 'Essay Planning'].map(
          (s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-full border border-primary/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          ),
        )}
      </nav>

      {/* Part Summaries */}
      <Section id="part-summaries" title="Part-by-Part Summary" defaultOpen>
        <div className="space-y-6">
          {parts.map((part) => (
            <div key={part.part}>
              <h3 className="mb-3 text-lg font-semibold text-primary">{part.part}</h3>
              <div className="space-y-3">
                {part.chapters.map((ch) => (
                  <div key={ch.chapter} className="rounded-lg border border-border bg-muted p-4">
                    <h4 className="font-semibold text-foreground">{ch.chapter}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {ch.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Characters */}
      <Section id="characters" title="Character Analysis">
        <div className="space-y-5">
          {characters.map((c) => (
            <div key={c.name} className="rounded-lg border border-border bg-muted p-4">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {c.role}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.analysis}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Themes */}
      <Section id="themes" title="Key Themes">
        <div className="grid gap-4 sm:grid-cols-2">
          {themes.map((t) => (
            <div key={t.name} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Quotes */}
      <Section id="key-quotes" title={`Key Quotations (${keyQuotes.length})`}>
        <p className="mb-4 text-sm text-muted-foreground">
          Each quotation includes detailed analysis suitable for GCSE-level essay responses.
        </p>
        <div className="space-y-4">
          {keyQuotes.map((q, i) => (
            <div key={i} className="rounded-lg border-l-4 border-primary bg-muted p-4">
              <blockquote className="text-base font-medium italic text-foreground">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <p className="mt-1 text-xs font-semibold text-primary">
                {q.speaker ? `${q.speaker} - ` : ''}
                {q.chapter}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Context */}
      <Section id="context" title="Historical & Literary Context">
        <div className="space-y-4">
          {contextSections.map((c) => (
            <div key={c.title} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.content}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Essay Planning */}
      <Section id="essay-planning" title="Essay Planning for Common Questions">
        <div className="space-y-5">
          {essayQuestions.map((eq, i) => (
            <div key={i} className="rounded-lg border border-border bg-muted p-4">
              <p className="font-medium text-foreground">{eq.question}</p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">Key points to cover:</p>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {eq.points.map((p, j) => (
                    <li key={j}>&bull; {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Back link */}
      <div className="pt-4 text-sm">
        <Link
          href="/resources/revision-notes"
          className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
        >
          &larr; Back to Revision Notes
        </Link>
      </div>

      {/* Copyright notice */}
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <p>
          <em>Never Let Me Go</em> &copy; Kazuo Ishiguro. Short quotations are used for criticism
          and review under fair dealing (CDPA&nbsp;1988, s.30).
        </p>
      </footer>
    </div>
  )
}
