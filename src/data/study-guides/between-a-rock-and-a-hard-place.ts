import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * From 127 Hours: Between a Rock and a Hard Place, Aron Ralston. The anthology
 * extract (Pearson Edexcel International GCSE English Anthology, Issue 8,
 * February 2026, Part 1, pages 10-11), not the whole book.
 *
 * WHY EVERY SECTION IS WRITTEN HERE, AND NOTHING IS CLAIMED AS NATIVE. The
 * workflow sent this text as a supplement to /igcse/edexcel-lang/anthology/127-hours.
 * That page was graded section by section against the rubric on 25 September
 * 2026 and none of its sections cleared it. Worse, most of it describes a
 * different text: the anthology prints pages 22-24 of the 2010 Simon & Schuster
 * edition, 56 lines that end with the boulder unmoved, and the page's "extract
 * focuses", structure notes and much of its language analysis are about the
 * hallucination, the decision and the amputation, which happen days later in the
 * book. It also says the extract opens "in medias res, with the boulder already
 * shifting"; the boulder does not move until line 29. Pointing sections at that
 * page would have told students to revise events the examiner is not reading,
 * so this file is a complete guide. Mounting it below that page would also
 * contradict the page's own footer, which says it contains no quotations.
 *
 * Every quotation, line number and page number was checked against a text copy
 * made from the Issue 8 anthology PDF. The whole page quotes at most a tenth of
 * the extract, per fair-dealing.ts.
 */
export const guide: StudyGuide = {
  slug: 'between-a-rock-and-a-hard-place',
  title: 'From 127 Hours: Between a Rock and a Hard Place',
  author: 'Aron Ralston',
  form: 'non-fiction',
  scope:
    'The extract printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 1, pages 10-11: 56 numbered lines in eight paragraphs, from Ralston reaching a drop-off in the canyon to his first failed attempts to shift the boulder that has trapped his right hand. It comes from early in the book, pages 22-24 of the 2010 Simon & Schuster edition, and stops days before his escape. Not the whole book.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Aron Ralston 2004. First published by Atria Books, a division of Simon & Schuster, in 2004; the extract is taken from the Simon & Schuster 2010 edition and is studied as printed in the Pearson Edexcel International GCSE English Anthology. Short quotations are used for criticism and review.',
  },
  workLength: {
    words: 840,
    lines: 56,
    basis:
      "Counted from the anthology PDF (Issue 8, pages 10-11): the 56 lines of Ralston's text, by a plain space-separated word count, not counting the two free-standing ellipses in lines 45 and 49 as words (with them, 842). The italic introduction above the extract and the six footnotes are Pearson's, not Ralston's, and are excluded. Splitting hyphenated words such as drop-off, as the validator does for quotations, gives about 850; the lowest figure is recorded because it gives the tightest limit.",
  },

  overview: {
    summary: [
      'In April 2003 Aron Ralston, a 27-year-old former engineer and experienced climber, was making his way alone down a remote slot canyon in Utah. The anthology extract covers a few minutes of that day. He reaches a drop-off, explains to the reader how he climbs down narrow gaps by pressing his back and feet against opposite walls, and picks out a boulder wedged between the walls to use as a step. He tests it, stands on it and hangs from it. It moves. He lets go and drops to the canyon floor, and in a moment he describes in slow motion the falling boulder strikes his left hand, which he snatches back, then crushes his right hand and pins his arm at the wrist against the wall.',
      'The second half is the aftermath. Disbelief gives way to pain and panic. He tries to pull his arm out, then, remembering a story he suspects is untrue, about a mother who found the strength to lift a car off her trapped baby, gambles that the surge of adrenaline in his body will let him heave the boulder away. The extract ends with a single word telling us that the rock has not moved. Nothing is resolved: in the book he is not free until the following Thursday.',
      "The extract is best read as a story about control. For its first 28 lines Ralston is in command of everything: measuring, explaining, testing, choosing. From line 29 the rock is in command, and his writing changes with it, from calm technical explanation to short, broken sentences, body parts that seem to act on their own, and cries of pain. It is also worth noticing, and arguing about, that it is Ralston's own weight on the stone that sets it moving. His skill brought him to this point and, in these 56 lines, cannot get him out. The strongest answers follow that change across the whole extract rather than listing features.",
    ],
  },

  context: [
    {
      heading: 'Aron Ralston',
      body: 'Aron Ralston was born on 27 October 1975 in Marion, Ohio, and moved to Denver, Colorado, at the age of 12. He studied mechanical engineering at Carnegie Mellon University and worked as an engineer for Intel before leaving in 2002 to spend his time climbing. He was 27 at the time of the accident. His training shows on the page: the extract measures heights and widths, explains how friction holds a climber in place, names the “torque” that moves the stone, and even estimates the odds that a story he has heard is true. That precision is part of what makes the moment the rock moves so frightening. A mind used to solving problems meets one that, for now, it cannot solve.',
    },
    {
      heading: 'Bluejohn Canyon, April 2003',
      body: "On Saturday 26 April 2003 Ralston was descending Bluejohn Canyon, a narrow slot canyon in eastern Wayne County, Utah, just south of the Horseshoe Canyon unit of Canyonlands National Park. He was alone and, as the anthology's introduction points out, he had told no one his plans. The boulder, which the book's publisher puts at 800 pounds (about 360 kilograms), pinned his right hand and wrist against the canyon wall. He was trapped from that Saturday afternoon until the following Thursday, when he freed himself by amputating his own trapped forearm, abseiled down a drop of about 65 feet, walked out of the canyon, met a family of Dutch tourists and was rescued by helicopter. None of that is in the extract, which ends minutes after the accident. It is context, and it tells you what the reader of this passage does not yet know.",
    },
    {
      heading: "The book, and the extract's place in it",
      body: "Ralston's account was published in 2004 by Atria Books, a division of Simon & Schuster, as Between a Rock and a Hard Place. After the film it was reissued as 127 Hours: Between a Rock and a Hard Place, and that is the edition the anthology uses: its acknowledgements give Simon & Schuster, 2010, pages 22-24. So the extract comes from near the start of a long book (the first edition runs to 354 pages), which moves back and forth, in alternating chapters, between the days in the canyon, Ralston's earlier life and adventures, and his mother's efforts to find him. In the book this passage is a hook. The accident happens early, and everything after it is the long question of whether he will get out.",
    },
    {
      heading: '127 Hours, the film',
      body: 'The title the anthology uses comes from the film 127 Hours (2010), directed by Danny Boyle, with James Franco as Ralston, after which the book was reissued under that name. The film was nominated for six Academy Awards, including Best Picture and Best Actor, and was released in the United Kingdom in January 2011. The title counts the ordeal in hours. It is worth knowing about, because many students have seen the film, but it is not what you are examined on. The film shows the accident in its own way; the examiner is reading the words printed in the anthology, so every point you make should come from those 56 lines.',
    },
    {
      heading: 'Canyoneering and slot canyons',
      body: "Canyoneering means travelling down a canyon by walking, scrambling, climbing and abseiling. A slot canyon is a very narrow one, cut deep into the rock by water, and in places only a body's width across: this one is three feet wide for fifty feet (lines 6-7). The obstacles are drop-offs, where the floor falls away, and chockstones, boulders that have fallen into the gap and wedged there. The technique Ralston explains in lines 8-14, pressing his back and feet against opposite walls, is how climbers move down such gaps. Knowing that a chockstone is itself a rock that once fell and stuck helps you picture the accident: the one he chooses is jammed, but not for ever.",
    },
    {
      heading: 'An American voice in a British exam',
      body: "The anthology keeps Ralston's American English, in spelling, vocabulary and measurements in feet and inches, and one of its footnotes points out an American spelling. Quote the text exactly as printed and do not correct it. The italic introduction above the extract, which tells you that he had not told anyone his plans, is Pearson's framing rather than Ralston's writing. It shapes how you read, since you know from the first line that no one is coming, but your analysis should be of Ralston's words.",
    },
  ],

  themes: [
    {
      title: 'Control and helplessness',
      body: 'The extract is built on a reversal. In lines 1-28 Ralston controls everything: he measures the drop, explains his technique, tests the chockstone with a kick and chooses how to descend, and almost every sentence that describes an action has him as its subject, crossing, bracing, kicking, lowering. From line 29 the grammar begins to turn round. Ralston is still the subject of his own desperate efforts, but more and more often something else is: the rock “smashes”, “crushes” and “ensnares”, and fear, disbelief, agony, anxiety and his own brain become the subjects of sentences, acting on him. The last paragraph is a furious return to action, and it ends on “Nothing.” One reading is that the extract is simply about the loss of control. A more convincing one is that it shows control surviving without power: even trapped, Ralston is still planning, calculating and giving orders, which is exactly what the rest of the book will need from him.',
    },
    {
      title: 'The indifference of nature',
      body: 'Ralston does not present the canyon as evil. He describes it in the language of geometry and physics: heights, widths, friction and “torque”. Even the cause of the accident is physical and precise, since it is his own weight on the stone that applies enough turning force to move it (lines 29-30). The rock is not hunting him; it is obeying the same laws he has just been using. The one moment that breaks this pattern is the image of the falling chockstone that “consumes the sky”, when for an instant the rock becomes something huge and devouring. That moment is seen from below, through fear, and it passes. The effect is arguably more frightening than a hostile landscape would be. Nature here does not care, so it cannot be pleaded with, bargained with or outwitted.',
    },
    {
      title: 'Mind against body',
      body: 'The second half of the extract splits Ralston in two. His mind issues orders, and he says so: “My mind commands my body”, with the command set out in direct speech, as if spoken to someone else. His body answers with pain, panic and noises that seem to escape him, from “grimace and growl” to crying out. Even his thinking is described as something happening to his brain. Yet the mind never quite gives up. In the middle of agony he weighs the story of the mother and the car, gives it “even odds” of being made up, and acts on it anyway because his adrenaline is at its peak. The extract suggests that survival depends on the mind using the body as a tool, even as the body fails.',
    },
    {
      title: 'Time under pressure',
      body: "Ralston slows time down exactly where a reader expects it to rush. The fall of the boulder takes seconds, but he gives it seven lines (35-41), announcing the change of speed himself: “Time dilates, as if I'm dreaming, and my reactions decelerate.” The long sentence that follows, held together by semicolons, makes the reader register each blow separately and in order, as he did. By contrast the approach in lines 1-28 is unhurried, and the ending races through effort to a one-word sentence. The pacing reproduces the experience of shock, in which a few seconds can feel endless. It also looks ahead: the book's later title counts hours, and time, which here stretches for three seconds, is about to stretch for days.",
    },
    {
      title: 'Risk and responsibility',
      body: "The extract raises a question that the anthology's introduction sharpens by telling you he had told no one his plans: is Ralston careful or reckless? The text itself mostly shows care. He judges the height, tests the chockstone with a kick before trusting it, notices that it “teeters”, and considers another way down before choosing this one. That care is what makes the accident disturbing, because a skilled, cautious climber can still set a boulder moving with his own weight. A harsher reading, useful when comparing the extract with a text such as Explorers or boys messing about?, is that the breezy, instructional voice of lines 8-14 belongs to someone used to risks paying off. Ralston judges himself only rarely, calling his first effort to pull free “a naive attempt”, and he makes that judgement about the struggle, not about the climb.",
    },
  ],

  characters: [
    {
      name: 'Aron Ralston',
      role: 'Writer and narrator: an experienced 27-year-old climber, alone in the canyon',
      body: 'There are two Ralstons in the extract. One is the man in the canyon, living each moment in the present tense, who is calm, then shocked, then frantic. The other is the writer, composing the account afterwards, who can explain climbing technique to a reader, time the impact at three seconds and judge his first effort to pull free as “a naive attempt”. The writer never tells us how things end; he chooses to keep us inside the moment. What the two share is precision. Even in panic Ralston thinks like an engineer, weighing odds and looking for leverage. He is also honest about the unheroic side of the experience: he growls, cries out and yanks his arm three times to no effect. The extract presents neither a hero nor a victim, but a skilled person discovering the limits of skill.',
    },
    {
      name: 'The chockstone',
      role: 'The boulder: not a person, but the force the extract is organised around',
      body: "The boulder changes role as the extract goes on, and following those changes is a good way to structure an answer. First it is part of the landscape, measured against a large bus tyre. Then it is a tool, something to test with a kick, to stand on and to hang from. Its one warning, that it “teeters”, is noticed and set aside. From line 29 it acts: it shifts with “a scraping quake”, falls, and “consumes the sky”. After the impact it becomes simply a large boulder, an immovable weight that Ralston shoves and heaves against, and the extract ends with its silence. It never intends anything, and that is the point. Ralston's opponent is weight and gravity.",
    },
    {
      name: 'The mother in the story',
      role: 'A figure Ralston remembers from a story he half-believes',
      body: 'The only other person in the extract is not really there. In lines 49-50 Ralston recalls a story, which he suspects is untrue, about a mother who finds the strength to lift a car off her trapped baby. She matters because of what he does with her. He doubts her, giving the story “even odds” of being made up, and then follows her example anyway, because the idea behind it, that a body flooded with adrenaline can do the impossible, is the only hope he has. She shows how alone he is: in a crisis his only company is a figure from a story, and he has to test her against a real rock.',
    },
  ],

  keyQuotes: [
    {
      text: 'the claustrophobic feel of a short tunnel',
      where: 'Paragraph 1, lines 4-5 (page 10)',
      analysis:
        '“Claustrophobic” names a fear of enclosed spaces, so the setting is introduced through an emotion rather than a measurement, and “tunnel” suggests a space with one way in and one way out. Before anything goes wrong, the canyon is already closing in. Read with hindsight, it foreshadows the trap, and it stands out as one of the few feeling words in a paragraph of heights and distances.',
    },
    {
      text: 'This technique is known as stemming or chimneying',
      where: 'Paragraph 2, lines 12-13 (page 10)',
      analysis:
        'The register is instructional, almost a textbook: he names the technique, explains how it works and, in the same sentence, invites the reader to imagine using it. The effect is to establish Ralston as an expert in control of his surroundings. That confidence matters structurally, because the rest of the extract takes it away from him.',
    },
    {
      text: 'It supports me but teeters slightly.',
      where: 'Paragraph 4, lines 24-25 (page 10)',
      analysis:
        'The whole accident is foreshadowed in this short sentence. The first clause reassures; the conjunction “but” lets doubt in; “teeters” suggests something balanced on the edge of falling; and “slightly” shows him deciding the risk is small. It is foreshadowing, and it shows a careful climber noticing a warning and judging it acceptable, which is the more unsettling reading.',
    },
    {
      text: 'a scraping quake',
      where: 'Paragraph 5, line 29 (page 10)',
      analysis:
        'The first sign of disaster comes as sound and vibration. “Scraping” is harsh and onomatopoeic, and “quake” suggests an earthquake, something far larger than a man adjusting his grip. The mismatch between his small movement and the huge response is the point: a tiny cause has an enormous effect.',
    },
    {
      text: 'the backlit chockstone falling toward my head consumes the sky',
      where: 'Paragraph 5, lines 32-33 (page 10)',
      analysis:
        "The extract's most powerful image. “Backlit” means the light is behind the rock, so he sees it as a dark shape against the bright sky, and the verb “consumes” turns it into something that devours his whole view. The rock is the grammatical subject and Ralston is reduced to “my head”, the thing it falls towards. For a moment the landscape is monstrous rather than indifferent.",
    },
    {
      text: "Time dilates, as if I'm dreaming, and my reactions decelerate.",
      where: 'Paragraph 6, lines 35-36 (page 10)',
      analysis:
        "Ralston slows the narrative at the moment of greatest speed. The scientific verbs “dilates” and “decelerate” keep his engineer's precision even now, while the simile “as if I'm dreaming” admits that the experience feels unreal. The reader lives through the impact frame by frame, which is more disturbing than a quick summary because there is time to register every detail.",
    },
    {
      text: 'Then silence.',
      where: 'Paragraph 6, lines 40-41 (page 11)',
      analysis:
        'A two-word minor sentence follows the long, crowded sentence of the impact and closes the paragraph. After the smashing, ricocheting and tearing, the sudden silence is a structural full stop: the movement is over and his situation is fixed. It also marks the gap between the accident and his understanding of it, the moment before the pain arrives.',
    },
    {
      text: 'Good God, my hand.',
      where: 'Paragraph 7, line 44 (page 11)',
      analysis:
        'A minor sentence with no verb, set down as thought rather than speech, and the first moment the controlled, explaining voice breaks. The exclamation is instinctive and the focus narrows to one body part. Coming straight after a clinical description of his nervous system, it shows scientific language giving way to raw feeling.',
    },
    {
      text: 'My mind commands my body',
      where: 'Paragraph 7, lines 45-46 (page 11)',
      analysis:
        'Ralston describes himself as two separate beings, a commander and a body under orders, and the order that follows is set out in direct speech, as if spoken to someone else. It shows shock splitting his sense of self. It also shows the mind trying to take charge, which becomes the central struggle of the second half.',
    },
    {
      text: 'a naive attempt',
      where: 'Paragraph 7, line 46 (page 11)',
      analysis:
        'The writer looking back judges the man in the canyon. In the moment, yanking his arm felt necessary; afterwards he calls it “naive”, meaning innocent and unrealistic. The word tells the reader, without revealing the ending, that pulling will never work, and its self-criticism makes Ralston seem honest rather than heroic.',
    },
    {
      text: "But I'm stuck.",
      where: 'Paragraph 7, line 47 (page 11)',
      analysis:
        'Three words close the paragraph, beginning with “But”, which cancels everything he has just tried. The short declarative sentence is flat and final, the first time he states his situation plainly. The simple word “stuck”, after so much technical vocabulary, sounds almost childlike, as if the crisis has stripped his language down.',
    },
    {
      text: 'raging at full flood',
      where: 'Paragraph 8, line 52 (page 11)',
      analysis:
        'A water metaphor for the adrenaline in his blood: a river in flood is at its most powerful, and also out of control. Ralston reasons that this peak is his best chance of freeing himself by “brute force”. There is irony in the image, since a flood is a force of nature, and he is hoping to use one natural force to overcome another.',
    },
    {
      text: 'Come on...move!',
      where: 'Paragraph 8, line 56 (page 11)',
      analysis:
        'The only words printed as his speech in the final paragraph are addressed to the rock, as though it could hear him. The ellipsis inside his speech stretches the words the way his muscles are straining, and the imperative “move” is a command the rock simply ignores. The next word in the text is its answer.',
    },
    {
      text: 'Nothing.',
      where: 'Paragraph 8, line 56 (page 11)',
      analysis:
        'The extract ends on a one-word sentence. After a paragraph of shoving, heaving and thrusting, the answer is a single negative, and the rock does not even get a verb. The anticlimax is deliberate: the reader has been set up to expect the adrenaline to work, as in the story of the mother and the car, and it does not.',
    },
  ],

  extracts: [
    {
      title: "The expert's approach",
      where: 'Paragraphs 2-4, lines 8-28 (page 10)',
      pointer:
        'Lines 8-28 on page 10 of the anthology: from the paragraph explaining how he moves down narrow gaps to the moment he is hanging from the chockstone at full stretch, just before line 29.',
      summary:
        "Ralston explains to the reader how he climbs down narrow gaps by pushing his back and feet against opposite walls. He spots a chockstone wedged just beyond the edge and plans to use it as a step. He edges across, kicks it to test it, stands on it and notices that it rocks a little. Deciding against another way down, he slides over the stone until he is hanging from it at arm's length, which he likens to lowering himself off a house roof.",
      annotations: [
        {
          phrase: 'This technique is known as stemming or chimneying',
          note: 'The textbook register makes Ralston the expert and the reader the learner. Establishing his competence here is what makes its failure so shocking later.',
        },
        {
          phrase: 'It supports me but teeters slightly.',
          note: 'Reassurance and threat in one sentence, joined by “but”. The warning is registered and dismissed within six words, which is how the accident becomes possible.',
        },
        {
          phrase: 'teeters',
          note: 'A verb of unstable balance, used of something about to topple. It is the word in this passage that a reader who knows what follows will fix on.',
        },
      ],
      question:
        'How does Ralston use language and structure in lines 8-28 to present himself as skilled and in control?',
    },
    {
      title: 'The fall',
      where: 'Paragraphs 5-6, lines 29-41 (pages 10-11)',
      pointer:
        'Lines 29-41: from the moment the stone shifts under his hands to the two-word sentence that ends the impact, at the top of page 11.',
      summary:
        'As Ralston hangs, his grip and weight make the chockstone shift. He lets go, drops to the rocks below and looks up to see the boulder falling towards his head, unable to step back without falling over a small ledge. He describes the next three seconds in slow motion in one long sentence: the rock strikes his left hand, which he pulls away, then crushes his right hand, traps his arm at the wrist and slides down the wall, tearing the skin of his forearm. Then everything stops.',
      annotations: [
        {
          phrase: 'a scraping quake',
          note: 'Sound and movement arrive before understanding. The harsh onomatopoeia and the earthquake image make a small shift feel enormous.',
        },
        {
          phrase: 'consumes the sky',
          note: 'Personification that turns the falling rock into something devouring his whole field of vision, the one moment the landscape seems monstrous rather than indifferent.',
        },
        {
          phrase: 'Time dilates',
          note: 'He names the slow-motion effect himself, in scientific vocabulary, before using it, so the reader knows that what follows will be shown frame by frame.',
        },
        {
          phrase: 'Then silence.',
          note: 'The minor sentence stops the crowded, semicolon-linked sentence of the impact dead, and fixes his arm in place along with it.',
        },
      ],
      question:
        'How does Ralston use language and structure to make the moment of the accident dramatic for the reader?',
    },
    {
      title: 'Pain, panic and one last push',
      where: 'Paragraphs 7-8, lines 42-56 (page 11)',
      pointer:
        'Lines 42-56 on page 11: from his disbelief at seeing his arm disappear into the gap to the last word of the extract.',
      summary:
        'Ralston stares in disbelief at his arm vanishing into a tiny gap, and then the pain arrives. He panics, growls with pain and tries three times to pull his arm free, then cries out. Remembering a story about a mother who lifted a car off her trapped baby, he decides that this moment, while his adrenaline is at its height, is his best chance, and throws all his strength at the boulder, bracing on a small shelf of rock and pushing upwards again and again. It does not move.',
      annotations: [
        {
          phrase: 'Good God, my hand.',
          note: 'The first break in his controlled voice: a verbless exclamation of thought that narrows everything down to the injured hand.',
        },
        {
          phrase: 'My mind commands my body',
          note: 'Ralston splits into commander and body, and his order is given in direct speech, as though to another person, showing shock dividing his sense of self.',
        },
        {
          phrase: 'a naive attempt',
          note: 'The writer looking back judges the man in the canyon, signalling that pulling cannot work without revealing how the story ends.',
        },
        {
          phrase: 'raging at full flood',
          note: 'A metaphor of a river in flood for adrenaline: powerful but out of control, and a natural force he hopes can beat another.',
        },
        {
          phrase: 'Nothing.',
          note: 'The one-word final sentence answers all the effort of the paragraph with a flat negative, and leaves the extract with no resolution at all.',
        },
      ],
      question:
        'How does Ralston use language and structure in lines 42-56 to show his thoughts and feelings after he becomes trapped?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Present-tense first-person narration',
      example:
        'Throughout: from the opening sentence, in which he comes to the drop-off, to the final grunt at the boulder, events are told as they happen, although the book was written after he survived.',
      effect:
        "The present tense removes the reassurance of hindsight. A past-tense survivor's account implies that the teller lived; this one keeps the reader in the moment with no promise of an outcome, so the tension is felt rather than remembered. It is a deliberate choice by a writer who knows the ending and withholds it.",
    },
    {
      technique: 'Technical and scientific vocabulary',
      example:
        'The language of engineering and climbing: “torque” (line 30), friction and counterpressure in lines 10-12, the verbs “dilates” and “decelerate” (lines 35-36), and the heights and widths measured in paragraph 1.',
      effect:
        "It establishes Ralston's expertise and his habit of explaining the world in terms of forces he understands. The contrast with the plain language after the accident, such as the word “stuck”, shows that expertise being stripped away.",
    },
    {
      technique: 'Everyday comparisons and direct address',
      example:
        'The chockstones are sized against a refrigerator and a large bus tyre (lines 3 and 15), stemming is likened to climbing a chimney from the inside (lines 13-14), and hanging from the rock to lowering yourself off a house roof (line 28). In line 13 he addresses the reader directly, in the second person.',
      effect:
        'Homely comparisons make an unfamiliar landscape easy to picture for readers who have never been in a slot canyon, and the direct address puts the reader beside him. They also make the danger feel deceptively ordinary: climbing off a roof sounds manageable, which is exactly how Ralston treats it.',
    },
    {
      technique: 'Personification and metaphor',
      example:
        'The stone answers his grip with “a scraping quake” (line 29), and the falling chockstone “consumes the sky” (lines 32-33).',
      effect:
        'For a moment the boulder has the power of a living thing, devouring the light above him. The image matches his perspective, looking up from below in terror. It is striking because it is rare: elsewhere Ralston treats the rock as an object governed by physics, so this image marks the peak of his fear.',
    },
    {
      technique: 'A sequence of violent verbs',
      example:
        'In the sentence of the impact the rock “smashes” his left hand, then “crushes” his right hand and “ensnares” his arm (lines 36-38).',
      effect:
        'The verbs escalate in force and then in permanence: to smash is a blow, to crush is sustained pressure, and to ensnare is to trap, as a snare traps an animal. The verbs tell the story of the accident on their own, and the last one turns Ralston from climber into captive.',
    },
    {
      technique: 'Minor and short sentences',
      example:
        "“Then silence.” (lines 40-41), “Good God, my hand.” (line 44), “But I'm stuck.” (line 47) and “Nothing.” (line 56).",
      effect:
        'Each short sentence arrives after long ones and stops them dead. Three of them close paragraphs 6, 7 and 8, where they work like verdicts: after every burst of action, a flat statement that it has failed. The pattern builds a sense of futility, and the last one leaves the reader with nowhere to go.',
    },
    {
      technique: 'A long sentence built on a colon and semicolons',
      example:
        'Lines 36-40: after a colon, a single sentence lists each event of the impact, separated by semicolons, from his left hand being struck to the skin torn from his forearm.',
      effect:
        'The punctuation enacts the slow motion. Each semicolon is a frame, so the reader cannot skip ahead and must take each injury in the order Ralston felt it. The build-up of clauses makes three seconds feel long and crowded, and the two-word sentence that follows feels like a sudden stop.',
    },
    {
      technique: 'Body and emotions as agents',
      example:
        'Fear moves his hands (line 33), his eyes register the collision (line 37), disbelief freezes him (line 42), his pain response overcomes the shock (line 44), “My mind commands my body” (lines 45-46), and anxiety and his desperate brain act on him (lines 48-49).',
      effect:
        'Ralston describes himself as a set of systems acting on their own rather than as one person choosing. This captures the detachment of shock, the sense of watching your own body react. It also sets up the struggle of the second half, in which his mind tries to take command again.',
    },
    {
      technique: 'Sound and alliteration',
      example:
        '“a scraping quake” (line 29), “grimace and growl” (line 45), and the grunting that accompanies his final effort (line 56).',
      effect:
        'The accident is heard as well as seen. The harsh sounds of the rock are matched by the animal noises Ralston makes, and the hard g sounds of the alliteration reduce him to something primitive, a long way from the articulate voice that explained climbing technique at the start.',
    },
    {
      technique: 'Irony and anticlimax',
      example:
        'The story of a mother who lifts an overturned car (lines 49-50) and his belief that adrenaline gives him his best chance of “brute force” (lines 52-53) are answered by the last word of the extract, “Nothing.”',
      effect:
        'The reader is set up to expect a burst of superhuman strength, the kind of moment such stories promise, and is denied it. The anticlimax tells us that there will be no quick escape, and that the ordeal has only just begun.',
    },
  ],

  structureForm: [
    {
      heading: 'Half calm, half crisis',
      body: 'The extract divides almost exactly in two. Lines 1-28, four paragraphs, are the approach: description of the canyon, explanation of technique, a plan and its careful execution. Lines 29-56, four more, are the accident and its aftermath. The first half is not padding. By spending so long on routine, Ralston lets the reader relax into his competence, so the moment the stone moves at line 29 comes as a real shock. An answer that treats the first half as background misses the main structural effect of the extract.',
    },
    {
      heading: 'Eight paragraphs, eight stages',
      body: 'Each paragraph is a distinct stage: the drop-off and the narrowing slot (lines 1-7); how stemming works (8-14); the chockstone and the plan (15-19); testing it and hanging from it (20-28); the stone moves and falls (29-34); the three seconds of impact (35-41); disbelief, pain and the first attempts to pull free (42-47); the adrenaline gamble and its failure (48-56). Using these stages lets you write about the extract as a sequence and follow the changes in his thoughts and feelings, which is what the best answers do.',
    },
    {
      heading: 'Pace: slow where it should be fast',
      body: 'Ralston reverses the usual relationship between time and text. The routine approach, which takes minutes, is told at length; the few seconds of the fall are stretched across seven lines, and he announces the slowing down himself. After the impact the pace changes again. Sentences shorten and break into exclamations, and the final paragraph speeds up into a run of physical effort before the one-word ending. Pace becomes a way of showing how shock distorts time.',
    },
    {
      heading: 'How the paragraphs end',
      body: "Look at the last sentences of paragraphs 6, 7 and 8: “Then silence.”, “But I'm stuck.” and “Nothing.” Each is a short sentence after a long run of action, and each is a verdict on what has gone before. The repetition creates a rhythm of effort followed by failure that builds hopelessness. It is a pattern worth naming in an exam, because it shows control of structure across the whole extract rather than in a single sentence.",
    },
    {
      heading: 'Where it begins and where it stops',
      body: 'The extract opens on a routine moment: another drop-off, ten minutes after the last overhang he climbed down, which tells the reader he has done this before. It does not begin in the middle of the action, since the boulder does not move until line 29. And it stops on failure, not escape. There is no reflection, no rescue and no hint of how he gets out, because the book has barely begun. Its shape is a cliffhanger, and that is how to describe the ending in an exam. The amputation happens days later in the book and is not part of this text.',
    },
    {
      heading: 'A memoir told as if it were live',
      body: 'The form is autobiography: a true account, in the first person, by the person it happened to, published the year after the event. That makes the present tense a choice rather than a habit. Traces of the later writer remain: he can say exactly how long the impact lasted, describe his own reactions as if from outside, and judge his first attempt to pull free as naive. The tension between the man in the moment and the writer looking back is one of the most rewarding things to write about in this extract.',
    },
    {
      heading: "The anthology's framing",
      body: "The anthology prints a short italic introduction by Pearson before the extract. It tells you that a boulder crushed his hand and that he had not told anyone his plans. This creates a kind of dramatic irony: you know from the first line that the climb will go wrong and that no one knows where he is, while the Ralston of the present tense, calmly describing the canyon, does not know what is about to happen. The six footnotes, also Pearson's, explain five harder words and one American spelling. You can mention the introduction's effect on a reader, but keep your analysis on Ralston's writing.",
    },
  ],

  vocabulary: [
    {
      term: 'chockstone',
      definition:
        'A boulder that has fallen into a narrow canyon and wedged between its walls. The anthology explains it in a footnote, and the whole extract turns on one.',
    },
    {
      term: 'drop-off',
      definition:
        'A place where the floor of the canyon falls away sharply, like a step or a small cliff.',
    },
    {
      term: 'slot',
      definition:
        "Short for slot canyon: a very deep, very narrow canyon, in places only a body's width across.",
    },
    {
      term: 'stemming, or chimneying',
      definition:
        'Climbing a narrow gap by pushing outwards against both walls at once, back on one side and feet on the other, as you might inside a chimney.',
    },
    {
      term: 'counterpressure',
      definition:
        'Pushing in opposite directions at once so that friction holds you in place: the principle that makes stemming work.',
    },
    { term: 'crevice', definition: 'A narrow crack or gap in rock.' },
    {
      term: 'traverse',
      definition: 'To move sideways across something. The anthology explains it in a footnote.',
    },
    {
      term: 'teeters',
      definition: 'Rocks unsteadily, as if about to fall. A key word for foreshadowing.',
    },
    { term: 'upcanyon', definition: 'Back up the canyon, in the direction he has come from.' },
    { term: 'akin to', definition: 'Similar to; like.' },
    {
      term: 'torque',
      definition:
        'A turning or twisting force. Here it is his own weight that applies it to the chockstone.',
    },
    { term: 'ricochets', definition: 'Bounces off a surface at an angle.' },
    {
      term: 'dilates',
      definition: 'Widens or expands. Used here of time, which seems to stretch.',
    },
    { term: 'decelerate', definition: 'Slow down.' },
    {
      term: 'ensnares',
      definition: 'Traps, as a snare traps an animal. It carries a sense of being caught for good.',
    },
    {
      term: 'lateral',
      definition:
        'At or towards the side. In anatomy, the lateral side of the forearm is the thumb side.',
    },
    {
      term: 'implausibly',
      definition:
        'In a way that is hard to believe. The gap looks far too small to have swallowed his arm.',
    },
    {
      term: 'apocryphal',
      definition:
        'Widely told but probably untrue. The anthology explains it in a footnote; Ralston uses it of the story of the mother and the car.',
    },
    {
      term: 'brute force',
      definition:
        'Raw physical strength used without skill or technique. Ironic in an extract that began with so much technique.',
    },
    {
      term: 'leverage',
      definition:
        'The advantage a lever gives. Here, the extra push he gets from a firm footing: the shelf of rock he stands on to brace his thighs under the boulder.',
    },
    {
      term: 'minor sentence (analysis term)',
      definition:
        'A sentence without a main verb, such as the two-word sentence that ends paragraph 6. Worth naming when you analyse the extract.',
    },
    {
      term: 'anticlimax (analysis term)',
      definition:
        'An ending that deliberately falls short of what the reader has been led to expect, as the final word of this extract does.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does the writer use language and structure to show his thoughts and feelings as he becomes trapped?',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          'Open with a one-sentence overview: the extract moves from calm expertise to shock, pain and desperate effort, so his feelings change as control passes from him to the rock.',
          'Work through the extract in order, using its stages: the confident, instructional voice of lines 1-28; the fear of lines 29-34; the stretched-out shock of lines 35-41; the pain and panic of lines 42-47; the desperate reasoning and effort of lines 48-56.',
          'For each stage choose one or two short quotations and analyse individual words, for example “teeters”, “consumes the sky”, “dilates” and “naive”.',
          'Bring structure into every stage rather than saving it for the end: the long approach, the slow-motion sentence, and the short sentences that close paragraphs 6, 7 and 8.',
          'Say what each choice makes the reader feel or understand about Ralston, and keep returning to the focus of the question, his thoughts and feelings.',
          'Finish with the last word of the extract and what it leaves him, and the reader, facing.',
        ],
      },
      {
        question: 'How does the writer use language and structure to create tension?',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          'Show that tension builds before anything happens: the enclosed setting, the introduction telling you he had told no one his plans, and the warning that the chockstone “teeters”.',
          'Explain how the moment the stone moves at line 29 changes the pace, and analyse the sound of “a scraping quake” and the image of the rock that “consumes the sky”.',
          'Analyse the slow-motion sentence in lines 36-40 and how its colon and semicolons force the reader through each blow in turn.',
          'Show that the tension is never released: each attempt to escape ends in a short sentence of failure, and the extract ends without resolution.',
          'Keep evaluating as you go: which moment is the most tense, and why?',
        ],
      },
      {
        question:
          'Compare how the writers of 127 Hours: Between a Rock and a Hard Place and Explorers or boys messing about? present people who take risks in wild places. (Practice pairing: in the exam, the anthology text is compared with an unseen text printed on the paper.)',
        skill: 'Comparison of two texts: ideas, perspectives and methods',
        guidance: [
          'Open with the key difference in perspective: Ralston writes from inside the danger, in the first person and the present tense, while the newspaper article reports on other people in danger from outside.',
          'Compare purposes: Ralston makes the reader live through the moment, while the article invites its readers to judge adventurers and the cost of rescuing them.',
          'Compare how each presents the risk-takers: Ralston shows himself as skilled and careful but fallible; look closely at how the article describes its adventurers and whether the writer seems to mock or respect them.',
          "Compare methods, with a short quotation from each text for every point: for example Ralston's technical vocabulary against the article's tone and its headline, or Ralston's slow-motion structure against the order in which a news report gives its facts.",
          'Keep the balance: the strongest comparisons use references from both texts throughout, so do not spend most of the answer on one of them.',
          'End with a judgement: which text makes you think harder about whether the risk was worth it, and why?',
        ],
      },
      {
        question:
          "Explain how Ralston's description of the canyon and his technique in lines 1-19 prepares the reader for what happens next.",
        skill: 'Close reading and structure',
        guidance: [
          'Find the details that make the canyon enclosed: the narrowing slot, three feet wide for fifty feet, and “the claustrophobic feel of a short tunnel”.',
          'Show how the chockstones are introduced as useful, something to step onto and hang from, before one of them becomes the trap.',
          'Explain the effect of the instructional paragraph (lines 8-14) on how the reader sees Ralston, and why that confidence matters later.',
          'Link each detail forward to the accident, using verbs such as foreshadows, suggests and prepares.',
        ],
      },
    ],
    tips: [
      'The extract ends with the boulder unmoved. Do not write about the days of waiting, the amputation or the rescue: they are in the book, not in the lines the examiner is reading, and writing about them wastes time and can look like a misreading.',
      "Treat the first half as deliberate. Examiners reward answers that follow Ralston's changing thoughts and feelings through the whole extract, and the change only means something once you have shown how controlled he is in lines 1-28.",
      'Use line numbers. The anthology numbers every fifth line, so you can refer to line 29 or lines 35-41 and show the examiner that you understand how the extract is built.',
      'Quote as printed, keeping the American spelling and vocabulary, and keep quotations short: a word or phrase you then analyse is worth more than a whole sentence copied out.',
      'Be careful with the ellipses in lines 45 and 49. They are printed with a space on either side, unlike the one inside his speech in line 56, and the anthology does not say whether they are pauses Ralston wrote or mark words it has left out. You can comment on their effect, but do not build an argument on them.',
      'Name the grammatical shift, and state it carefully: before line 29 Ralston is the subject of nearly every action; afterwards he is still the subject of his own frantic efforts, but the rock, his body and his emotions increasingly take that place. It is a precise point, and it only convinces with examples.',
      'In a comparison, perspective is the key: Ralston is inside the experience, and many texts you might compare him with look at danger from outside. Make that difference the spine of your answer.',
    ],
  },

  modelAnswer: {
    question:
      'How does the writer use language and structure to show his thoughts and feelings as he becomes trapped?',
    paragraph:
      "Ralston presents becoming trapped as a sudden reversal of control, and he achieves it through structure as much as language. For the first half of the extract he is the expert, explaining that “This technique is known as stemming or chimneying” in a textbook register that makes the canyon sound like a problem already solved. Even the warning sign is absorbed into his calm syntax: the chockstone “supports me but teeters slightly”, where the conjunction “but” lets danger in only as a qualification, and “slightly” shows him judging it acceptable. From line 29 the relationship reverses. In the image of “the backlit chockstone falling toward my head” that “consumes the sky”, the rock becomes the subject of the sentence and Ralston is reduced to a head in its path, while “consumes” suggests something devouring his whole field of vision. He then slows time, “Time dilates, as if I'm dreaming”, so that three seconds fill seven lines and the reader, like him, registers every blow but can stop none of them. His thoughts move from confidence to disbelief to desperate calculation, and the extract closes that movement with a single word, “Nothing.”, a flat verdict that shows a mind still planning and a body whose effort can no longer change anything.",
    commentary: [
      'It opens with an argument about the whole extract, a reversal of control, rather than a list of features, so every quotation serves one idea.',
      'It analyses individual words, “but”, “slightly” and “consumes”, and says what each one does, rather than only naming techniques.',
      'It weaves structure into the argument: the calm first half, the turn at line 29 and the stretched time of lines 35-41 are part of the point, not a separate paragraph at the end.',
      "It follows Ralston's changing thoughts and feelings across the whole extract, from confidence to disbelief to calculation, which is what examiners look for in the strongest answers.",
      'Its quotations are short and embedded in its own sentences, and every one is followed by analysis.',
    ],
  },

  timeline: [
    {
      where: 'Paragraph 1, lines 1-7',
      title: 'Another drop-off',
      summary:
        'Ralston reaches a drop-off of about eleven or twelve feet, with a fridge-sized chockstone jammed across the slot ten feet further on. At the drop-off the slot narrows to three feet across and stays that narrow for fifty feet.',
      setting: 'The lip of a drop-off in a narrow slot canyon',
      who: ['Aron Ralston'],
      quote: 'the claustrophobic feel of a short tunnel',
      themes: ['Control and helplessness', 'The indifference of nature'],
      tension: 1,
      significance:
        'The calm, measured opening establishes routine and plants the idea of enclosure.',
    },
    {
      where: 'Paragraph 2, lines 8-14',
      title: 'The expert explains',
      summary:
        'He explains to the reader how he moves through narrow gaps by pressing his back and feet against opposite walls, a technique climbers call stemming or chimneying.',
      setting: 'The same narrow slot',
      who: ['Aron Ralston'],
      quote: 'This technique is known as stemming or chimneying',
      themes: ['Control and helplessness', 'Risk and responsibility'],
      tension: 1,
      significance:
        "Establishes Ralston's skill and confidence, which the rest of the extract takes away.",
    },
    {
      where: 'Paragraph 3, lines 15-19',
      title: 'A plan',
      summary:
        'Just below his ledge he spots another chockstone, about as big as a large bus tyre, wedged just beyond the edge, and plans to step onto it, hang from it and drop the last short distance to the rocks below.',
      setting: 'The ledge above the drop-off',
      who: ['Aron Ralston', 'The chockstone'],
      themes: ['Risk and responsibility'],
      tension: 2,
      significance:
        'The chockstone enters as a tool, and the plan in the future tense tells the reader exactly what should happen.',
    },
    {
      where: 'Paragraph 4, lines 20-28',
      title: 'Testing the stone',
      summary:
        'He edges across, kicks the chockstone to test it and steps onto it. It holds but rocks slightly. Deciding against another way down, he lowers himself over its edge and hangs from it at full stretch.',
      setting: 'On the chockstone, then hanging from it above the canyon floor',
      who: ['Aron Ralston', 'The chockstone'],
      quote: 'It supports me but teeters slightly.',
      themes: ['Risk and responsibility', 'Control and helplessness'],
      tension: 3,
      significance:
        "The warning is noticed and accepted: a careful climber's judgement is the hinge of the accident.",
    },
    {
      where: 'Paragraph 5, lines 29-34',
      title: 'The stone moves',
      summary:
        'His grip and weight make the chockstone shift. He lets go and lands on the rocks below, then looks up to see the boulder falling at his head. He cannot step back without falling over a small ledge.',
      setting: 'The canyon floor below the drop-off',
      who: ['Aron Ralston', 'The chockstone'],
      quote: 'the backlit chockstone falling toward my head consumes the sky',
      themes: ['The indifference of nature', 'Control and helplessness'],
      tension: 5,
      significance: 'Control passes from Ralston to the rock in the space of a few sentences.',
    },
    {
      where: 'Paragraph 6, lines 35-41',
      title: 'Three seconds in slow motion',
      summary:
        'Time seems to slow. The rock strikes his left hand, which he pulls away, then crushes his right hand and traps his arm at the wrist against the canyon wall, before everything falls silent.',
      setting: 'Beside the canyon wall, under the falling boulder',
      who: ['Aron Ralston', 'The chockstone'],
      quote: "Time dilates, as if I'm dreaming, and my reactions decelerate.",
      themes: ['Time under pressure', 'Control and helplessness'],
      tension: 5,
      significance:
        'The accident itself, stretched out so that the reader lives through every second.',
    },
    {
      where: 'Paragraph 7, lines 42-47',
      title: 'Disbelief and pain',
      summary:
        'He stares at his arm disappearing into a tiny gap. Pain overwhelms the shock, he panics, and his mind orders his body to pull free. Three hard yanks achieve nothing.',
      setting: 'Pinned beside the canyon wall',
      who: ['Aron Ralston', 'The chockstone'],
      quote: 'My mind commands my body',
      themes: ['Mind against body', 'Control and helplessness'],
      tension: 4,
      significance: 'The controlled voice breaks, and the struggle between mind and body begins.',
    },
    {
      where: 'Paragraph 8, lines 48-56',
      title: 'The adrenaline gamble',
      summary:
        'Frantic with pain, he remembers a story about a mother who lifted a car off her trapped baby and gambles on his own adrenaline. He shoves, lifts and braces against the boulder again and again. It does not move.',
      setting: 'Pinned beside the canyon wall, standing on a small shelf of rock',
      who: ['Aron Ralston', 'The chockstone', 'The mother in the story'],
      quote: 'Nothing.',
      themes: ['Mind against body', 'Control and helplessness', 'Time under pressure'],
      tension: 4,
      significance:
        'The extract ends on failure, not escape, with the whole ordeal still ahead of him.',
    },
  ],

  relationships: [
    {
      from: 'Aron Ralston',
      to: 'The chockstone',
      kind: 'climber and foothold, then captive and captor',
      note: 'In lines 15-28 Ralston uses the chockstone: he tests it, trusts it and hangs from it. From line 29 it holds him. His own weight reverses the relationship, and in the final paragraph he tries, and fails, to reverse it back.',
    },
    {
      from: 'Aron Ralston',
      to: 'The mother in the story',
      kind: 'doubter and example',
      note: 'He gives her story “even odds” of being made up and follows her example anyway. The link shows a reasoning mind making the best bet it can in a panic, and how alone he is.',
    },
    {
      from: 'The mother in the story',
      to: 'The chockstone',
      kind: 'a story tested against a real rock',
      note: 'The story promises that adrenaline can lift a car; the chockstone answers with “Nothing.” The gap between the two is the gap between hope and physics that the rest of the book has to cross.',
    },
  ],

  compareWith: [
    {
      title: 'Explorers or boys messing about? Either way, taxpayer gets rescue bill',
      href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
      reason:
        "Published in The Guardian in January 2003, three months before Ralston's accident, it looks at adventurers in trouble from the outside and asks what their rescue costs, where Ralston writes from inside the danger.",
    },
    {
      title: "The Explorer's Daughter",
      href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
      reason:
        'Kari Herbert also writes in the first person about people in a harsh natural environment, near Thule in North Greenland, but she watches a narwhal hunt and reflects on it, where Ralston is the one in danger.',
    },
    {
      title: 'A Passage to Africa',
      href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
      reason:
        "George Alagiah writes as a television reporter witnessing other people's suffering in Somalia in the 1990s, a sharp contrast in perspective with Ralston's account of his own pain.",
    },
  ],

  contentGuidance: ['violence', 'mortality'],

  sources: [
    {
      label:
        "Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026 (ISBN 978 1 446 93108 0), Part 1, pages 10-11: the prescribed text. Every quotation, line number and page reference was checked against a text copy made from this PDF. Its acknowledgements credit the extract to Simon & Schuster Ltd, 2010, pages 22-24, copyright Aron Ralston 2004. The introduction and six footnotes are Pearson's.",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Wikipedia, Aron Ralston: date and place of birth, Denver from age 12, Carnegie Mellon and Intel (which he left in 2002), 26 April 2003, Bluejohn Canyon in eastern Wayne County, just south of the Horseshoe Canyon unit of Canyonlands, the 800-pound boulder, the 65-foot abseil, the Dutch family and helicopter rescue, that he had told no one his plans.',
      url: 'https://en.wikipedia.org/wiki/Aron_Ralston',
    },
    {
      label:
        "Wikipedia, Between a Rock and a Hard Place (book): Atria Books, September 2004, 354 pages; the later title 127 Hours: Between a Rock and a Hard Place; alternating chapters between the entrapment, his earlier life and his mother's search. It gives 7 September and the publisher's listing gives 15 September, so the guide says only 2004.",
      url: 'https://en.wikipedia.org/wiki/Between_a_Rock_and_a_Hard_Place_(book)',
    },
    {
      label:
        "Publisher's description (Atria Books), via Apple Books: 800-pound boulder, right hand and wrist, a Saturday afternoon, told no one where he was headed, escape on the Thursday morning. Agrees with Wikipedia on the boulder and on his telling no one. It says he was trapped six days where Wikipedia says five, so the guide gives the days, Saturday to Thursday, rather than a count.",
      url: 'https://books.apple.com/us/book/between-a-rock-and-a-hard-place/id381694062',
    },
    {
      label: 'Open Library record of the first Atria Books hardcover (2004, xiii + 354 pages).',
      url: 'https://openlibrary.org/books/OL24877955M/Between_a_rock_and_a_hard_place',
    },
    {
      label:
        'Jeffrey M. McCarthy, review of Between a Rock and a Hard Place, American Alpine Journal, 2005: the book reaches back into his earlier climbing life after the accident. Used for structure only; not quoted.',
      url: 'http://publications.americanalpineclub.org/articles/12200546300/Between-a-Rock-and-a-Hard-Place',
    },
    {
      label:
        'The Learning Leader Show, episode 537, with Aron Ralston: mechanical engineer; 26 April 2003, Bluejohn Canyon; had told no one his plans; helicopter rescue. Second source for his profession and the date.',
      url: 'https://learningleader.com/episode/537-aron-ralston-the-incredible-story-of-the-hiker-who-cut-off-his-own-arm-after-being-trapped-under-a-boulder-for-5-days-127-hours/',
    },
    {
      label:
        'Wikipedia, 127 Hours: 2010, Danny Boyle, James Franco, six Academy Award nominations including Best Picture and Best Actor, UK release 7 January 2011.',
      url: 'https://en.wikipedia.org/wiki/127_Hours',
    },
    {
      label:
        'Question style: the examiner pack at src/lib/marking/examiner/packs/pearson-igcse-english-a-paper1.ts, drawn from the published 4EA1 Paper 1 mark scheme (November 2023) and Pearson exemplar commentaries. Used for the kinds of question and what top answers do, not for tariffs.',
    },
  ],
}
