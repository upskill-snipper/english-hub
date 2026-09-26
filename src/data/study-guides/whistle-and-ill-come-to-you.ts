import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Whistle and I'll Come to You (from The Woman in Black), Susan Hill (1983). A
 * complete guide: the text had only a placeholder page.
 *
 * THE TEXT. Every quotation was copied from the extract as the student studies
 * it: pages 42-43 of the Pearson Edexcel International GCSE English Anthology,
 * Issue 8 (February 2026), Part 2, read from Pearson's own PDF on 25 September
 * 2026 (PDF pages 48-49) and checked against page images. The extract runs to 65
 * numbered lines; every line reference here was checked against the anthology's
 * margin numbering, and all thirteen margin numbers matched a sequential count.
 * The page break falls after line 48.
 *
 * THE WRONG STORY. The set-text registry once described M.R. James's 1904 ghost
 * story Oh, Whistle, and I'll Come to You, My Lad, which is public domain and
 * has nothing to do with this text. The anthology prints part of the chapter of
 * that title from Hill's novel (Chapter 10), and this guide analyses only that.
 *
 * The extract is in copyright and is 985 words long, so the whole page may quote
 * 98 of them (fair-dealing.ts). The guide works from a fixed bank of nineteen
 * short phrases, about ninety words in all, and reuses them; everything else is
 * paraphrase and line reference. Add a new quotation only after removing one.
 *
 * Plot facts from outside the extract (earlier chapters, the ghost's history)
 * were checked against at least one published summary each and are kept to what
 * the sources agree on; see `sources`. The anthology's acknowledgements give no
 * page range in the novel, so none is claimed.
 *
 * FACT-CHECK, 26 September 2026. Every quotation was re-checked against a fresh
 * download of Pearson's PDF, and all nineteen stand. Corrected: the Serrailler
 * series began in 2004, not 2008 (Wikipedia's body text is wrong against its
 * own works list); James's Parkins finds the whistle in a ruin rather than
 * digging it up; the banshee simile describes the wind, not the cry; the
 * narrator imagines someone hiding in the nursery, not a lodger; Spider
 * scratches his arm, not his hand; the comparison notes no longer call Eel
 * Marsh House familiar or Lev's journey a night. Four runs of the extract's
 * own wording, the longest about twenty words, sat in the prose without
 * quotation marks, where the quotation counter cannot see them; they are now
 * paraphrase. Keep it that way, or the budget above is meaningless.
 */
export const guide: StudyGuide = {
  slug: 'whistle-and-ill-come-to-you',
  title: "Whistle and I'll Come to You (from The Woman in Black)",
  author: 'Susan Hill',
  form: 'short-story',
  scope:
    'The extract printed under the title Whistle and I’ll Come to You (from The Woman in Black) on pages 42-43 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 2, for English Language A. It runs to 65 numbered lines and comes from Chapter 10 of Susan Hill’s novel The Woman in Black (1983), which has the same title; the chapter carries on after the point where the anthology stops. Line and page references in this guide follow the anthology printing, and the student is examined on the extract, not on the rest of the novel.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Susan Hill 1983. From The Woman in Black, first published by Hamish Hamilton in 1983; the anthology credits the Vintage Books edition. As printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), where it is reproduced by permission of Sheil Land Associates Ltd. Quoted here in short extracts for criticism and review.',
  },
  workLength: {
    words: 985,
    basis:
      'Counted from the extract as printed in the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pp. 42-43, extracted from Pearson’s PDF with the title, running heads, page footers, margin line numbers and the footnote gloss on conjecture removed: 65 lines, 987 tokens split on spaces, of which two are the spaced dashes at lines 41-42, leaving 985 words. Counting each part of a hyphenated word separately (trance-like, ill-fitting, long-dead), as the quotation counter does, gives 988; the lower figure is recorded so the limit errs tight.',
  },

  overview: {
    summary: [
      'Whistle and I’ll Come to You is a 65-line extract, printed on pages 42-43 of the anthology, from Susan Hill’s ghost story The Woman in Black (1983). The narrator, who is Arthur Kipps in the novel although the extract never names him, is spending the night alone at Eel Marsh House, a remote house on the marshes, with only Spider, a borrowed dog, for company. He wakes suddenly in the early hours to find that the wind has risen to a gale. He steadies himself by reasoning that the house has survived many winters and by remembering nights when he lay safe in his childhood nursery in Sussex, until a child’s cry from the marsh breaks into the memory.',
      'He knows there is no living child out there, but he cannot ignore the sound. As he goes out onto the landing, meaning to go down to the kitchen, he senses someone pass him and go towards the nursery, the room whose locked door has mysteriously opened, and at that moment the lights go out. He tries to find a rational explanation, imagining someone living secretly in the nursery or even the woman in black, abandons each idea and begins to doubt what is real. Groping for his torch, he trips over the dog, drops the torch and finds it broken. Close to tears, he beats his fists on the floor in rage until they hurt, and it is Spider, scratching at his arm and licking his hand, who calms him. The extract ends with the two of them on the floor while the storm roars and the child’s cry keeps coming.',
      'Almost nothing is seen. The fear is built from sound, darkness and the narrator’s own mind. Hill uses the storm as pathetic fallacy, sets a comforting past against a terrifying present, and lets the narrator’s reasoning collapse one explanation at a time. The narrator is also looking back on these events from much later in his life, so the account is shaped by an older man who knows how the story ends and still does not claim to understand what happened that night.',
      'The question most good answers argue about is where the horror lies. One reading is that the extract is about a threat: something is in the house. The more convincing reading, on the evidence of these 65 lines, is that it is about helplessness: a grown man reduced to a frightened child, unable to help a child who cannot rest, and unable even to make a light. The ending brings comfort but no solution, because the cry is still coming when the extract stops.',
    ],
  },

  context: [
    {
      heading: 'Susan Hill',
      body: 'Susan Hill was born on 5 February 1942 in Scarborough, North Yorkshire, and took an English degree at King’s College London; her first novel was published in her first year there. I’m the King of the Castle won the Somerset Maugham Award in 1971, and The Bird of Night won the Whitbread Novel Award in 1972 and was shortlisted for the Booker Prize. She was made a CBE in 2012 and a Dame in 2020, both for services to literature. Besides The Woman in Black she has written further ghost stories, among them The Mist in the Mirror (1992), The Man in the Picture (2007) and The Small Hand (2010), and a series of crime novels about the detective Simon Serrailler that began with The Various Haunts of Men in 2004. Her fondness for the traditional English ghost story, which relies on suspense and atmosphere, is exactly what this extract shows.',
    },
    {
      heading: 'The Woman in Black (1983)',
      body: 'The novel was first published by Hamish Hamilton on 10 October 1983; the anthology credits a Vintage Books edition. It opens at Christmas, many years after the events it describes. The older Arthur Kipps, a solicitor with stepchildren from his second marriage, is asked for a ghost story, and instead of telling one he writes down what happened to him as a young man, hoping that doing so will free him of the memory. That frame matters for this extract: everything is told in the past tense by a narrator who survived, and who still cannot say for certain what he heard and felt. As a junior solicitor he was sent to Crythin Gifford, a small market town on the north-east coast of England, to attend the funeral of Mrs Alice Drablow and settle her estate. Her home, Eel Marsh House, stands on a tidal island joined to the mainland by the Nine Lives Causeway and is cut off when the tide is high, so the isolation in this extract is literal.',
    },
    {
      heading: 'What has happened before this chapter',
      body: 'The extract refers back to events the anthology does not print. Crossing the causeway in a thick fog, Arthur heard a pony and trap and then the sounds of a child in terrible distress somewhere in the marsh (Chapter 6, The Sound of a Pony and Trap). He has already glimpsed a woman dressed in black, and most people in the town are reluctant to talk about her or about Mrs Drablow. Samuel Daily, a wealthy landowner he met on the train, disapproved of his plan to stay at the house to work through Mrs Drablow’s papers but lent him the little dog Spider for company (Chapter 8, Spider). A door in the house that was locked is now open, and behind it he found a child’s nursery with a rocking chair moving on its own (Chapter 9, In the Nursery). That is why the narrator speaks of a cry he recognises and of hearing rocking. You do not need any of this in the exam, where the extract is in front of you, but it explains the references.',
    },
    {
      heading: 'The story behind the ghost',
      body: 'The novel explains its haunting later, and the explanation sharpens one moment in this extract. Mrs Drablow’s sister, Jennet Humfrye, had a son, Nathaniel, who was brought up by the Drablows because Jennet was unmarried. The boy died when the pony and trap carrying him across the causeway lost its way and sank into the marsh, while Jennet watched helplessly from a window. After her own death Jennet returned as the woman in black, and a sighting of her comes before the death of a child. So when the narrator wonders at lines 44-45 whether Mrs Drablow hid some reclusive old sister in the house, he is closer to the truth than he knows: a dramatic irony only a reader of the whole novel can see. Many readers connect the cry from the marsh with the drowned boy, although the extract never says so. The novel ends in tragedy for Arthur’s own family, when he sees the woman in black again and his child is killed in an accident.',
    },
    {
      heading: 'The English ghost story',
      body: 'Hill has said that she wrote The Woman in Black with the two Jameses, M. R. James and Henry James, as her guides, regarding them as the masters of the ghost story. The novel is also said to have been inspired by Henry James’s novella The Turn of the Screw, first published in 1898, in which a governess sees figures that may be ghosts or may be her own imagination; since the 1930s critics have argued about which. The same uncertainty runs through this extract, where the narrator senses someone without seeing, hearing or touching anyone. Accounts of Hill’s interest in the traditional English ghost story also compare her with Daphne du Maurier. The familiar ingredients are all here: an isolated old house, a storm at night, a locked room, failing light, and a narrator who is educated, sensible and alone. Knowing the tradition helps you name what Hill is doing, but the best answers show how she uses these conventions, not just that she does.',
    },
    {
      heading: 'The title, and the other story with a similar name',
      body: 'The chapter title echoes M. R. James’s ghost story Oh, Whistle, and I’ll Come to You, My Lad, first published in Ghost Stories of an Antiquary (1904). In it a young Cambridge professor on holiday on the east coast of England finds an old bronze whistle in the ruins of a Templar preceptory, blows it, and summons a ghostly figure. James took his title from a poem and song by Robert Burns, first written in 1787 and expanded in 1793. Hill’s chapter title is a shortened form of the same line, and keeps the idea of a call that brings something to you. Do not confuse the two works: James’s story is a separate work, and your set text is Hill’s. Notice that in the extract itself the only whistling is the wind’s, at line 5, while the call that actually summons the narrator out of bed is the child’s cry.',
    },
    {
      heading: 'A story that has lasted',
      body: 'Stephen Mallatratt adapted the novel for the stage, and his play was first performed in 1987 at the Stephen Joseph Theatre in Scarborough, Hill’s birthplace. It opened in London’s West End in 1989 and played at the Fortune Theatre until 4 March 2023, which made it the second longest-running non-musical play in West End history after The Mousetrap. A film starring Daniel Radcliffe as Arthur Kipps followed in 2012. One reading of that long success is that Hill’s kind of fear travels well because it depends on what an audience imagines rather than on what it is shown, which is exactly how this extract works on the page.',
    },
  ],

  themes: [
    {
      title: 'Fear and the supernatural',
      body: 'Hill builds fear from what the narrator cannot perceive. The presence on the landing registers on none of his senses: he sees no one, feels no touch, hears no footstep, and is still certain that someone has passed him. The cry reaches him only as a sound out of the howling dark, and the wind itself he compares to a banshee, the spirit of Irish folklore whose wailing announces a death. One reading is that the supernatural is real and purposeful: the nursery door was “so firmly locked and then, inexplicably, opened”, and something goes towards it. Another is that fear itself is the subject, and that exhaustion, solitude and a storm are enough to produce everything he experiences. The extract refuses to settle the question, and that refusal is the source of its power, because a ghost that is explained stops being frightening. The strongest answers treat the uncertainty as a deliberate technique rather than a puzzle to be solved.',
    },
    {
      title: 'Reason and doubt',
      body: 'The narrator is a rational man and tries to reason his way to safety. At first it works: the house has stood “steady as a lighthouse” through winter after winter, so it will not blow away tonight. When the cry comes he tells himself flatly, “There was no child. I knew that.” After the presence passes he builds explanations, someone living secretly in the nursery, the woman in black, a secret relative, old servant or mad friend of Mrs Drablow, which he calls “wild, incoherent fantasies” before they stop. The collapse comes at line 51: “I began to doubt my own reality”. The extract is shaped as the defeat of reason in stages. One reading is that Hill mocks his confidence; the more convincing one is that she respects it, because his reasoning is sound, and makes the reader feel how frightening it is when sound reasoning is not enough.',
    },
    {
      title: 'Childhood and safety',
      body: 'Childhood is both the extract’s refuge and its threat. The narrator soothes himself with memories of his own nursery in Sussex, where the wind raged like a lion but was “powerless to reach me”, until he feels he is “a small boy again”. Then a child’s cry throws him back into the present. The pairing is pointed: the child he once was lay safe indoors, while this child is out on the marsh crying for help that no one gives. The extract contains two nurseries, his own and the mysterious one down the corridor, and they stand for opposite childhoods. Later he comes as close to tears as he has been since he was a child, and behaves like one, drumming his fists on the floor. One reading is that the house reduces him to a child; another is that his memories leave him open to the dead child’s distress. Both suggest that in this story the deepest fears begin in childhood.',
    },
    {
      title: 'Isolation and companionship',
      body: 'Eel Marsh House stands alone and exposed on the marsh, and the narrator insists that no one lives in it but himself and Samuel Daily’s dog. The storm cuts him off further, and the failure first of the lights and then of the torch shuts him inside his own senses. Isolation is what makes every sound and impression so unsettling, because there is no one to confirm or deny it. Against this Hill sets Spider. The dog follows him at once, trips him in the dark, and then, by scratching his arm and licking his hand, “brought me to my senses”. The phrase is literal as well as figurative: touch and warmth return him to the physical world after an experience that no sense could confirm. One reading is that Spider is simply comfort; another is that she stands for the ordinary living world the house seems to be taking from him. Her comfort is real but limited, since the cry goes on.',
    },
    {
      title: 'The suffering child',
      body: 'The cry is described not as a threat but as a plea: “a cry for help from a child”, full of desperation and anguish. The narrator’s response is pity as much as fear. He silently offers the words spoken over the dead, and then admits that “this poor one did not, could not” rest. He wants to shut the voice out because he can do nothing for it, and neither, for years, has anyone else. One reading is that the real horror is helplessness: the adult who ought to protect a child is powerless, just as the wind in his memory was powerless to reach him. The extract ends on “that child’s terrible cry” still carried towards him on the gusts, so the child’s suffering outlasts the narrator’s recovery. For readers of the whole novel, in which a small boy drowned in the marsh and the ghost’s appearances come before the death of a child, the cry is also an omen.',
    },
    {
      title: 'Losing control',
      body: 'Across 65 lines the narrator loses one kind of control after another: sleep, then calm, then light, then his reasoning, then his temper. The torch episode is almost clumsy enough to be comic, as he stumbles over the dog and hears glass break, and the flat sentence “The torch had broken.” ends his last practical hope. His reaction is violent: instead of weeping he drums his fists on the floorboards “in a burst of violent rage” until they throb. Afterwards he is “thoroughly ashamed of myself”. One reading is that Hill exposes how fragile a composed, professional man’s self-control can be; another is that the older narrator’s honesty about his shame is itself a kind of courage. Either way the outburst matters structurally, because it is the extract’s climax, and it is set off not by a ghost but by a broken torch.',
    },
  ],

  characters: [
    {
      name: 'Arthur Kipps',
      role: 'The narrator: a young solicitor alone at Eel Marsh House',
      body: 'The extract never names him, but in the novel the narrator is Arthur Kipps, a junior solicitor sent to settle the late Mrs Drablow’s estate, writing about these events many years later. In the extract he is educated, imaginative and determined to be rational. He calms himself with argument and memory, refuses to believe in a living child on the marsh, and works through possible explanations for the presence before rejecting them. He is also compassionate: his first response to the ghost child is pity, and part of his distress is that he can do nothing to help. Under pressure his composure breaks completely, first into near tears and then into rage, and he records his shame frankly. The reader sees everything through his senses and his thoughts, so his reliability is part of the question: is he perceiving something real, or is fear shaping what he perceives?',
    },
    {
      name: 'Spider',
      role: 'Samuel Daily’s dog, lent to the narrator for company',
      body: 'Spider is a small dog belonging to Samuel Daily, who lent her to Arthur so that he would not be alone at the house. She follows him onto the landing at once, stays at his heels in the dark, and is the reason he stumbles and drops the torch. Then she becomes his rescuer: she scratches his arm and licks his outstretched hand, and he hugs her warm body, glad of her. She is the only other living creature in the house, and her physical warmth is the extract’s one reliable comfort. Notice that Hill gives her no reaction to the presence on the landing, which leaves the reader unable to use the dog as evidence either way.',
    },
    {
      name: 'The crying child',
      role: 'The unseen child whose cry comes from the marsh',
      body: 'The child is heard, never seen. The cry first breaks through at line 17, returns at lines 20-21, now recognisable as a desperate child calling for help, becomes the calling voice he tries to shut out at line 26, and is still coming at the end. The narrator recognises it, because he has heard it before, and he knows it cannot be a living child. His reaction is pity: he thinks of the words said over the dead and admits that this one has found no rest. In the novel a boy, Nathaniel, drowned in the marsh when a pony and trap sank, and many readers take the cry to be his, although the extract does not say so.',
    },
    {
      name: 'The unseen presence',
      role: 'Whoever passes the narrator on the landing',
      body: 'The presence is the extract’s most frightening figure because it is registered by no sense at all. The narrator senses that someone has just gone by him, heading away from the stairhead and, he is sure, down the corridor to the nursery, but he saw no one, felt no touch or movement of air and heard no footstep. He links it with whoever he has seen, the rocking he has heard and the opening of the locked nursery door, and concludes that it is not real, then doubts what real means. Hill never describes it, and that absence is the point.',
    },
    {
      name: 'The woman in black',
      role: 'The figure the narrator has already seen, named once as a guess',
      body: 'The woman in black appears in the extract only as a question at line 44, one of the narrator’s attempts to explain the presence as a living person hiding in the nursery. That he names her at all shows she is already on his mind. In the novel she is the ghost of Jennet Humfrye, Mrs Drablow’s sister, whose appearances come before the death of a child. The extract’s reader need not know this, but it gives the narrator’s next guess, that Mrs Drablow hid a reclusive old sister in the house, a chilling dramatic irony.',
    },
    {
      name: 'Mrs Drablow',
      role: 'The dead owner of Eel Marsh House',
      body: 'Mrs Alice Drablow was an elderly, reclusive widow who lived alone at Eel Marsh House, and it is to settle her estate that the narrator is there. She is dead before the novel’s events begin, and in the extract she appears only in his speculation: had she kept a reclusive old sister, a servant or a mad friend hidden in the house? The idea that a dead woman might have left a secret behind her is itself unsettling, and in the novel it is truer than he suspects.',
    },
    {
      name: 'Samuel Daily',
      role: 'A local landowner and the owner of Spider',
      body: 'Samuel Daily is a wealthy landowner whom Arthur met on the train to Crythin Gifford. He disapproved of Arthur staying at the house alone and lent him Spider instead. In the extract he is mentioned once, at line 48, when the narrator insists that the only living occupants of the house are himself and Samuel Daily’s dog. His absence is a reminder of the ordinary, sensible world on the far side of the causeway.',
    },
  ],

  keyQuotes: [
    {
      text: 'like a ship at sea',
      where: 'Narrator, line 3 (page 42)',
      analysis:
        'The opening simile makes the solid house feel as fragile as a boat in a gale, and it turns the marsh into an ocean, a place without landmarks where things can be lost. It also establishes the pathetic fallacy that runs through the extract: the storm outside matches the turmoil that is about to begin inside the narrator. A ship at sea is at the mercy of forces it cannot control, which is exactly what the narrator will become.',
    },
    {
      text: 'steady as a lighthouse',
      where: 'Narrator, line 8',
      analysis:
        'Within a few lines Hill replaces the first simile with its opposite. A lighthouse endures storms and guides others to safety, so the narrator is reasoning his way back to calm. The image is also ironic: a lighthouse is a light in the darkness, and in this extract every light fails, first the house lights and then his torch. The comfort he builds here is exactly what the rest of the extract takes away.',
    },
    {
      text: 'catapulting me back into the present',
      where: 'Narrator, lines 17-18',
      analysis:
        'The verb is violent and sudden. After the slow, drifting sentences of memory, in which he felt like a small boy again, the cry hurls him out of the past as a catapult hurls a stone. Hill uses it to mark the extract’s first turning point: the comfort of childhood memory is shattered in a single word, and the quiet, trance-like state he describes gives way to fear.',
    },
    {
      text: 'like a banshee',
      where: 'Narrator, line 19',
      analysis:
        'A banshee is a female spirit of Irish folklore whose wailing warns a family that one of them is about to die. By comparing the wind to one, Hill gives the storm a voice of mourning and quietly foreshadows death. The simile also blurs the line between natural and supernatural: the sound he is describing is the wind, but the image he reaches for is a ghost.',
    },
    {
      text: 'There was no child. I knew that.',
      where: 'Narrator, line 22',
      analysis:
        'Two short, flat declaratives assert certainty, but their very bluntness sounds like a man talking himself into it. The rhetorical question that follows at once undoes them. One reading is that this is the young man’s thought in the moment; another is that it is the older narrator’s verdict, still insisting on reason years later. Either way, knowing there is no living child does not stop the cry, which is what makes it frightening.',
    },
    {
      text: 'this poor one did not, could not',
      where: 'Narrator, line 24 (a paragraph of a single line)',
      analysis:
        'The narrator thinks the words traditionally said over the dead, then corrects them: this spirit is not at rest. The correction from did not to could not shifts from fact to impossibility, as if the child is trapped. The adjective poor shows pity rather than terror. Setting this line alone as a paragraph slows the reader down and gives the child’s suffering weight at the centre of the extract.',
    },
    {
      text: 'so firmly locked and then, inexplicably, opened',
      where: 'Narrator, lines 39-40',
      analysis:
        'The sentence moves from certainty to mystery. The adverb firmly insists that the door really was locked, and the commas around inexplicably force a pause before the final word, which lands like the door itself swinging open. The narrator, a solicitor used to evidence, admits he has no explanation. The nursery becomes the extract’s centre of dread without the reader ever entering it.',
    },
    {
      text: 'I began to doubt my own reality',
      where: 'Narrator, line 51',
      analysis:
        'This is the climax of the narrator’s reasoning and the moment it fails. He has just decided that whatever passed him was not real, set in inverted commas, and then asks what real means at all, with the word was italicised in the anthology. The threat has moved from the house into his mind. One reading is that this is the most frightening line in the extract, because a man who doubts his own reality has nothing left to hold on to.',
    },
    {
      text: 'in a burst of violent rage',
      where: 'Narrator, line 60',
      analysis:
        'Instead of weeping, the narrator drums his fists on the floorboards until they throb. The noun burst suggests an explosion of feeling he cannot contain, and violent rage is an adult’s version of a child’s tantrum, which links back to his memories of the nursery. The outburst is set off by a broken torch rather than a ghost, showing that fear has worn his self-control down until a small accident breaks it.',
    },
    {
      text: 'thoroughly ashamed of myself',
      where: 'Narrator, line 63',
      analysis:
        'The adverb thoroughly shows how complete his embarrassment is once Spider has calmed him. The line reveals a man who expects himself to stay composed and sees losing control as a failure. It sits in a list with calmer and relieved, so shame and comfort arrive together. The older narrator could have left the outburst out; admitting it makes him more believable, and makes the reader trust the rest of his account.',
    },
    {
      text: 'that child’s terrible cry',
      where: 'Narrator, line 64, in the final sentence (page 43)',
      analysis:
        'The extract ends with the sound that first broke the narrator’s calm, the cry, now repeated again and again and carried on the gusts towards him. The demonstrative that makes it specific and familiar, one particular child, and the adjective terrible confirms that nothing has been resolved. Spider has calmed the narrator, but the child is still suffering, so the ending offers comfort to the living and none to the dead.',
    },
  ],

  extracts: [
    {
      title: 'The storm, the memory and the cry',
      where: 'Lines 1-18, page 42',
      pointer:
        'The first three paragraphs: from the opening sentence, in which the wind rises during the night, to the end of line 18, where the cry breaks the narrator’s calm.',
      summary:
        'A gale wakes the narrator in the early hours and the house seems to be battered on all sides. He reassures himself that the house has survived many winters, then drifts into memories of lying safe in his childhood nursery in Sussex while the wind raged outside, until he feels like a boy again. Out of the darkness a cry comes and throws him back into the present.',
      annotations: [
        {
          phrase: 'like a ship at sea',
          note: 'The first simile makes the house vulnerable and the marsh an ocean; the pathetic fallacy of the storm begins here and runs through the whole extract.',
        },
        {
          phrase: 'steady as a lighthouse',
          note: 'A second simile answers the first. Reason restores calm, but a lighthouse is a light, and every light in the extract will fail.',
        },
        {
          phrase: 'powerless to reach me',
          note: 'In memory the wind is a lion that cannot get in. The safety of the past is exactly what the present will deny him.',
        },
        {
          phrase: 'a small boy again',
          note: 'The long, drifting sentence of memory ends with the narrator returned to childhood, which makes the child’s cry that follows feel like an answer.',
        },
        {
          phrase: 'catapulting me back into the present',
          note: 'A violent verb ends the calm in a single stroke; the paragraph is only two lines long, so the interruption is felt in the layout too.',
        },
      ],
      question:
        'How does the writer use language and structure in lines 1-18 to move the narrator from alarm, to comfort, and back to fear?',
    },
    {
      title: 'The presence on the landing',
      where: 'Lines 29-51, pages 42-43',
      pointer:
        'From line 29, where the narrator steps out onto the landing with Spider behind him, to the end of line 51, where he admits that he has begun to doubt his own reality.',
      summary:
        'On the landing the narrator senses that someone has just passed him on the way towards the nursery, and at the same moment a blast of wind hits the house and the lights go out. He saw, heard and felt nothing, yet he is certain. He tries to explain the presence as a living person hiding in the house, even the woman in black or a secret relative of Mrs Drablow, rejects every idea, and ends unsure what is real.',
      annotations: [
        {
          phrase: 'so firmly locked and then, inexplicably, opened',
          note: 'The commas slow the sentence so that the last word lands like the door itself opening, and the adverb admits that reason has no answer.',
        },
        {
          phrase: 'wild, incoherent fantasies',
          note: 'The narrator judges his own explanations as he makes them; the adjectives show a rational mind watching itself lose its grip.',
        },
        {
          phrase: 'I began to doubt my own reality',
          note: 'The paragraph ends not with a ghost but with a crisis of the mind; the threat has moved from the house into the narrator himself.',
        },
      ],
      question:
        'How does the writer create tension in lines 29-51? You should consider the narrator’s thoughts and feelings and the writer’s use of language and structure.',
    },
    {
      title: 'The broken torch and Spider',
      where: 'Lines 52-65, page 43',
      pointer:
        'The last three paragraphs: from line 52, where the narrator gropes his way back across the room for his torch, to the end of the extract.',
      summary:
        'Reaching the torch at last, the narrator trips over the dog, drops it, hears glass break, and finds when he presses the switch that it no longer works. Nearer to tears than at any time since his childhood, he beats his fists on the floor in rage. Spider calms him by scratching at his arm and licking his hand, and they sit together on the floor while the storm roars and the child’s cry returns again and again.',
      annotations: [
        {
          phrase: 'The torch had broken.',
          note: 'Two short sentences close a long, stumbling paragraph, and this flat one is the last; the only light he had left is gone and the tone shows his hope draining away.',
        },
        {
          phrase: 'in a burst of violent rage',
          note: 'The climax of the extract is emotional, not supernatural: fear has worn down his self-control until a small accident breaks it.',
        },
        {
          phrase: 'brought me to my senses',
          note: 'A familiar idiom made literal: after an experience no sense could confirm, the dog’s touch and warmth return him to the physical world.',
        },
        {
          phrase: 'that child’s terrible cry',
          note: 'The ending returns to the cry, so the structure is circular; the narrator is calmer but nothing has been solved for the child.',
        },
      ],
      question:
        'How does the writer use the ending of the extract, lines 52-65, to present the narrator’s feelings?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Pathetic fallacy and personification',
      example:
        'The storm has a voice from the first paragraph: moaning down the chimneys and “whistling” through every gap (lines 5-6), and at the end booming and roaring outside (line 64).',
      effect:
        'The wind behaves like a living creature trying to get in, so the house is under siege before anything supernatural happens. The weather mirrors the narrator’s mind, rising as his fear rises, and it never calms: the storm is as loud at line 64 as at line 4, which denies the reader any release. It is also the only whistling in the extract, which gives the chapter title an ironic twist.',
    },
    {
      technique: 'Contrasting similes',
      example:
        'The house feels “like a ship at sea” (line 3) and a few lines later stands “steady as a lighthouse” (line 8).',
      effect:
        'Both images belong to the sea, turning the marsh into an ocean, but they pull in opposite directions: first danger and helplessness, then endurance and safety. Hill shows the narrator’s mind at work, deliberately replacing a frightening picture with a reassuring one. The lighthouse also begins the extract’s pattern of light, which is steadily taken away.',
    },
    {
      technique: 'Simile drawn from folklore',
      example: 'The tumult of the wind is “like a banshee” (line 19).',
      effect:
        'The banshee’s wail foretells a death, so the simile foreshadows death and gives the storm a mourning voice. It also lets the supernatural into the extract through the back door: the narrator is describing weather, but the comparison his mind reaches for is a spirit. The reader begins to wonder whether the cry is wind or something else.',
    },
    {
      technique: 'Short and minor sentences',
      example:
        'The one-word sentence at line 19, after he listens hard; “There was no child. I knew that.” (line 22); the single word No at line 50; and the two short sentences ending the torch episode at line 57.',
      effect:
        'Short sentences slow the reader to the pace of someone holding his breath and listening. They also carry the narrator’s attempts at certainty, which sound more desperate the shorter they are. Set against the long, flowing sentences of memory and speculation, they mark the moments when reality intrudes.',
    },
    {
      technique: 'Rhetorical questions',
      example:
        'A run of questions at lines 22-23, 27-28, 35, 44-45 and 50-51, ending with the question of what real is.',
      effect:
        'The questions dramatise an argument inside the narrator’s head, reason against fear, and invite the reader into it. Because none of them is answered, they build uncertainty rather than resolving it, and the last one, about reality itself, is the hardest of all to answer.',
    },
    {
      technique: 'Listing through negation',
      example:
        'Lines 35-39: a run of negatives across two sentences rules out sight, touch, any stirring of the air and even the sound of a footstep, and then the next sentence turns to his complete certainty that someone went past him.',
      effect:
        'The list piles up absences, each ruling out a sense, and then ends in certainty. The paradox is the heart of the extract’s horror: the presence is proved by nothing and doubted by no part of him. The reader is made to feel something that cannot be seen, heard or touched.',
    },
    {
      technique: 'Repetition',
      example:
        'The doubled “trying, trying” (line 26); the cry repeated at lines 17, 20-21 and 65; the word real set in inverted commas twice at lines 50-51.',
      effect:
        'The doubled verb sounds like effort failing even as it is described. The returning cry gives the extract a heartbeat of dread and makes the ending feel like the beginning. Repeating real in inverted commas shows the word itself becoming unreliable.',
    },
    {
      technique: 'Violent verbs and sound',
      example:
        '“catapulting me back into the present” (lines 17-18); the torch spinning across the floor and landing by the window, where he hears it crash and glass break (lines 54-56); fists drummed on the floorboards (lines 59-60).',
      effect:
        'The verbs of sudden, forceful movement contrast with the passive, dreamy verbs of memory, and they cluster at turning points. Sound carries the drama in an extract where almost nothing can be seen, so the reader hears the torch break before being told it has.',
    },
    {
      technique: 'Juxtaposition of past and present',
      example:
        'The memory of the Sussex nursery, where the wind was “powerless to reach me” (line 14), placed directly before the cry at line 17.',
      effect:
        'The safest moment in the extract is placed immediately before the most frightening one, so the shock is sharper. The two nurseries, his own and the one down the corridor, set a protected childhood against an unprotected one.',
    },
  ],

  structureForm: [
    {
      heading: 'A narrator looking back',
      body: 'The extract is a first-person account in the past tense. In the novel the older Arthur Kipps is writing these events down years later, and the extract carries traces of that distance: he compares his despair with anything he had felt since childhood, and judges his own outburst with the calm of hindsight. This makes him credible, since a survivor is telling us what happened, but it also makes his refusal to explain the presence more unsettling. Even with years to think about it, he offers no answer. Some lines, such as the flat statement that there was no child, can be read either as the young man’s thought at the time or as the older man’s verdict.',
    },
    {
      heading: 'Calm, interrupted',
      body: 'The thirteen paragraphs follow a pattern: each time the narrator reaches for calm, something breaks it. Reasoning and memory settle him (lines 7-16), and the cry interrupts (lines 17-21). He plans a drink by the fire (lines 25-28), and the presence and the blackout interrupt (lines 29-34). He reasons his way through explanations (lines 41-51), and doubt interrupts. He finds the torch (lines 52-57), and it is broken. Each attempt ends lower than the one before, which is how Hill builds tension towards the outburst at line 60. Tracking this pattern with line references is one of the clearest ways to write about structure.',
    },
    {
      heading: 'Paragraph length and pace',
      body: 'Long paragraphs hold reflection: the memory of the nursery (lines 7-16) and the search for an explanation (lines 41-51) are the longest in the extract, full of flowing, clause-heavy sentences. The interruptions are short: the cry arrives in a paragraph of two lines (lines 17-18), and the narrator’s thought about the dead child who cannot rest stands alone as a single-line paragraph (line 24). The contrast lets the reader feel the difference between a mind at ease and a mind under attack.',
    },
    {
      heading: 'Light taken away',
      body: 'Light runs through the extract as a thread that is cut piece by piece. He had been reading before sleep (line 1); the house is compared to a lighthouse (line 8); the lights go out on the landing (line 33) and he is left in pitch blackness because he did not bring his torch; the torch breaks (line 57). The narrator’s reason works like his light, and they fail together: the loss of the torch comes straight after he has begun to doubt his own reality.',
    },
    {
      heading: 'An ending without resolution',
      body: 'The extract begins with the wind and ends with it, and the child’s cry that broke his calm at line 17 is still sounding in the last line, so its structure is circular. Spider brings a kind of resolution for the narrator, who is calmer and relieved, but none for the mystery or for the child. The anthology stops here, although the chapter goes on in the novel, which leaves the reader suspended in the same uncertainty as the narrator. A strong answer on structure comments on what the ending withholds, not only on what it shows.',
    },
    {
      heading: 'Reading an extract as a whole',
      body: 'The extract refers to things it never explains: a cry the narrator recognises, rocking he has heard, a door that was locked and is now open, the woman in black. For a reader who meets only these 65 lines, those references work as mystery, hinting at a history of disturbances without spelling it out. In the exam, treat them that way. You can mention in a sentence what the novel later reveals, but your analysis should be of the extract, which is what you will have in front of you.',
    },
  ],

  vocabulary: [
    {
      term: 'casements',
      definition: 'Windows that open on hinges at the side, like a door (line 2).',
    },
    {
      term: 'nook and cranny',
      definition:
        'Every small corner and gap. The phrase suggests that nowhere in the house is sheltered from the wind (line 6).',
    },
    {
      term: 'brunt',
      definition:
        'The main force or worst part of something unpleasant, here the winter weather (line 9).',
    },
    {
      term: 'nostalgically',
      definition: 'With a fond, slightly sad longing for the past (line 11).',
    },
    {
      term: 'trance-like',
      definition: 'Dreamy and only half conscious, as if hypnotised (line 14).',
    },
    {
      term: 'tranquillity',
      definition: 'Calm and peace. Note the British spelling with a double l (line 18).',
    },
    {
      term: 'tumult',
      definition: 'A loud, confused noise or disturbance (line 19).',
    },
    {
      term: 'banshee',
      definition:
        'In Irish folklore, a female spirit whose wailing warns a family that one of them is going to die (line 19).',
    },
    {
      term: 'conjecture',
      definition:
        'To form an idea without enough evidence to be sure of it; the anthology explains the word in a footnote (line 41).',
    },
    {
      term: 'harboured',
      definition: 'Kept or sheltered someone, often in secret (line 44).',
    },
    {
      term: 'reclusive',
      definition: 'Living alone and avoiding other people (line 44).',
    },
    {
      term: 'retainer',
      definition: 'A servant who has worked for one family for a long time (line 45).',
    },
    {
      term: 'incoherent',
      definition: 'Confused and not making sense (line 46).',
    },
    {
      term: 'without',
      definition:
        'Here an old-fashioned word for outside, the opposite of within: the wind roars outside the house (line 64).',
    },
    {
      term: 'borne',
      definition: 'Carried; the past participle of the verb to bear (line 65).',
    },
    {
      term: 'pathetic fallacy',
      definition:
        'Giving the weather or natural world human feelings, or making it reflect a character’s mood, as the storm does throughout this extract.',
    },
    {
      term: 'retrospective narrator',
      definition:
        'A narrator who tells the story looking back from a later time, and so can comment on events with hindsight.',
    },
    {
      term: 'dramatic irony',
      definition:
        'When the reader knows something a character does not, as when the narrator guesses about a hidden sister without knowing the novel’s secret.',
    },
    {
      term: 'foreshadowing',
      definition:
        'A hint of something that will happen later, such as the banshee simile hinting at death.',
    },
    {
      term: 'Gothic',
      definition:
        'A style of fiction built on fear, mystery and the supernatural, often set in isolated old buildings in darkness and storm.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does the writer present the narrator’s fear in Whistle and I’ll Come to You? In your answer you should consider the writer’s use of language, form and structure, and support your points with examples from the text.',
        skill: 'Language, form and structure across the whole extract',
        guidance: [
          'Open with an argument, not a summary: for example, that Hill makes the narrator’s fear frightening because it grows from what he cannot see, explain or control.',
          'Begin with the storm (lines 1-6): the ship simile and the personified wind create fear before anything supernatural happens.',
          'Show how he fights fear with reason and memory (lines 7-16), so the cry at line 17 is a violent interruption; analyse the verb catapulting.',
          'Analyse the presence on the landing (lines 29-40): the list of senses that detect nothing, and the certainty that follows, is the extract’s central paradox.',
          'Track his reasoning to its collapse at line 51, and link it to the loss of light at lines 33 and 57.',
          'Explore the climax (lines 58-63): fear turns to rage and then shame, triggered by a broken torch rather than a ghost.',
          'End with the structure of the ending: Spider comforts him but the cry continues, so the fear is contained, not resolved.',
        ],
      },
      {
        question:
          'Explore how the writer uses setting to create tension in Whistle and I’ll Come to You. In your answer you should consider the writer’s use of language, form and structure, and support your points with examples from the text.',
        skill: 'Setting, language and structure',
        guidance: [
          'Define setting broadly: the storm and marsh outside, the house and its rooms, and the darkness, as well as the remembered nursery in Sussex.',
          'Analyse the storm as pathetic fallacy, and notice that it frames the extract, loud at the start and still roaring at the end.',
          'Compare the two nurseries: his own safe childhood room and the mysterious nursery down the corridor with its locked and opened door.',
          'Explore darkness: the lights failing at line 33, the pitch blackness, and the broken torch at line 57, and what each does to tension.',
          'Show how isolation, the house alone on the marsh with no one to confirm what he senses, makes every sound more threatening.',
          'Conclude on how setting and mind merge: by the end the storm, the dark and the cry are hard to separate from the narrator’s fear.',
        ],
      },
      {
        question:
          'How does the writer present the struggle between reason and the supernatural in Whistle and I’ll Come to You? In your answer you should consider the writer’s use of language, form and structure, and support your points with examples from the text.',
        skill: 'Argument about meaning, supported by language and structure',
        guidance: [
          'State a view: for example, that Hill lets reason lose, not because the narrator is foolish, but because his sound reasoning cannot explain what he experiences.',
          'Show reason winning early: the lighthouse simile and the logic that the house will not blow away tonight.',
          'Analyse the short declaratives at line 22 and the rhetorical question that undermines them.',
          'Explore the run of explanations at lines 41-47, how he judges them as he makes them, and why each fails.',
          'Analyse the turn at lines 50-51, the inverted commas around real, the italicised was, and the doubt of his own reality.',
          'Weigh two readings: that the supernatural is real, or that fear and isolation produce everything; argue which the extract leaves more convincing, and why its refusal to decide matters.',
        ],
      },
      {
        question:
          'Coursework-style task: explore how writers present vulnerability in Whistle and I’ll Come to You and two other texts from Part 2 of the anthology, at least one of which is a poem.',
        skill: 'Extended essay across three anthology texts',
        guidance: [
          'Choose partners that make a real argument possible, for example Night by Alice Munro and Out, Out- by Robert Frost.',
          'Define vulnerability for each text: in Hill, a grown man reduced to a frightened child, and a dead child whom no one can help.',
          'Organise by idea, not by text: for example, vulnerability at night, the vulnerability of children, and how adults respond to it.',
          'For each idea, analyse a short quotation or precise moment from each text, and compare the methods the writers use: first-person narration, setting, sound, structure.',
          'Make sure the poem gets equal analytical weight, including its form, not just its content.',
          'Conclude with a judgement: which text makes vulnerability most disturbing, and through which technique.',
        ],
      },
    ],
    tips: [
      'Stay inside the 65 lines. You will have the extract in front of you, and credit comes from analysing it. A sentence of context from the rest of the novel can support a point, but retelling the plot of The Woman in Black earns nothing.',
      'Do not confuse this text with M. R. James’s ghost story of a similar title. Your text is Susan Hill’s, and its narrator is Arthur Kipps, even though the extract never names him.',
      'Say something precise about the uncertainty. The best answers argue that Hill never confirms the ghost and explain why that makes the extract more frightening, rather than deciding what the presence was.',
      'Pathetic fallacy is the obvious technique here, so go further than naming it: show that the storm does different jobs at different points, threatening, then something to be survived, then the carrier of the cry.',
      'Use the calm-and-interruption pattern with line numbers to write about structure. Saying where a shift happens, and what it shifts from and to, is structural analysis; saying the extract builds tension is not.',
      'Quote briefly and analyse closely. A single word such as catapulting or inexplicably, examined for its effect, is worth more than a long quotation copied out.',
      'Notice pity as well as fear. The narrator feels sorry for the child and is distressed that he cannot help, and answers that see this read the extract more fully than those that treat it only as a scary story.',
    ],
  },

  modelAnswer: {
    question:
      'How does the writer create fear and tension in Whistle and I’ll Come to You? In your answer you should consider the writer’s use of language, form and structure.',
    paragraph:
      'Hill creates fear by letting the narrator’s reasoning fail in stages, so that the reader watches his defences fall one by one. At first reason holds: the house has stood “steady as a lighthouse”, a simile of endurance and guidance that makes the storm seem survivable. The child’s cry breaks that calm, and his response is a pair of short, flat sentences, “There was no child. I knew that.”, whose certainty sounds like a man talking himself into it rather than a man who believes it. The rhetorical question that follows immediately exposes the doubt the full stops were trying to hold back. By line 51 the confidence has gone completely: “I began to doubt my own reality”. The noun reality is the most frightening word in the extract, because it shows that the threat is no longer only outside in the storm but inside his own mind. Structurally, Hill places this admission straight after a list of explanations he has already called “wild, incoherent fantasies”, so the reader feels reason exhausted just before the torch breaks and the last light goes. The tension comes less from what is in the house than from the narrator losing every way to explain it.',
    commentary: [
      'It opens with an argument about how the fear is created, reason failing in stages, rather than a summary of what happens, and every later sentence serves that argument.',
      'The quotations are short and each one is analysed for a specific effect: the simile, the sentence length and tone, the single word reality, and the adjectives the narrator uses about his own ideas.',
      'It tracks structure with a line reference and explains why the placement matters, putting the admission of doubt directly before the broken torch.',
      'It notices the tension between what a sentence says and how it sounds, reading the flat certainty of line 22 as a sign of doubt, which is the kind of interpretation that separates a strong answer from a competent one.',
      'It ends with a clear judgement that answers the question directly: the fear lies in the narrator’s loss of explanation more than in the house itself.',
    ],
  },

  timeline: [
    {
      where: 'Lines 1-6',
      title: 'The storm wakes him',
      summary:
        'The narrator wakes in the early hours to find the wind has risen to a gale. Windows rattle, the chimneys moan, and the whole house feels battered by the storm coming across the open marsh.',
      setting: 'A bedroom at Eel Marsh House, at night in a gale',
      who: ['Arthur Kipps'],
      quote: 'like a ship at sea',
      themes: ['Fear and the supernatural', 'Isolation and companionship'],
      tension: 2,
      significance:
        'The pathetic fallacy of the storm sets the mood for the whole extract and frames it, since the wind is still roaring at the end.',
    },
    {
      where: 'Lines 7-16',
      title: 'Safe in the memory of childhood',
      summary:
        'He calms himself by reasoning that the house has stood through countless winters, then drifts into memories of lying warm in his nursery in Sussex while the wind raged outside, until he feels like a small boy again.',
      setting: 'The same bedroom, and in memory a childhood nursery in Sussex',
      who: ['Arthur Kipps'],
      quote: 'powerless to reach me',
      themes: ['Childhood and safety', 'Reason and doubt'],
      tension: 1,
      significance:
        'The calmest moment in the extract is placed directly before the most frightening, so the interruption lands harder.',
    },
    {
      where: 'Lines 17-24',
      title: 'The child’s cry',
      summary:
        'A cry comes out of the darkness, and then again: a child crying for help somewhere on the marsh. He knows there is no living child out there, but he cannot ignore it, and he pities the dead child who cannot rest.',
      setting: 'The bedroom, with the marsh outside in the storm',
      who: ['Arthur Kipps', 'The crying child'],
      quote: 'a cry for help from a child',
      themes: ['The suffering child', 'Fear and the supernatural', 'Reason and doubt'],
      tension: 3,
      significance:
        'The supernatural enters through sound alone, and the narrator responds with pity as well as fear, which shapes the rest of the extract.',
    },
    {
      where: 'Lines 25-34',
      title: 'The landing and the lights',
      summary:
        'He gets up, meaning to make a drink by the kitchen fire and shut out the voice. On the landing, with Spider behind him, he senses someone pass him towards the nursery, and at that instant a blast of wind hits the house and the lights go out.',
      setting: 'The landing and the top of the stairs, suddenly in total darkness',
      who: ['Arthur Kipps', 'Spider', 'The unseen presence'],
      themes: ['Fear and the supernatural', 'Isolation and companionship'],
      tension: 4,
      significance:
        'Two shocks arrive together, so the reader cannot separate the natural cause of the blackout from the supernatural presence.',
    },
    {
      where: 'Lines 35-51',
      title: 'Searching for an explanation',
      summary:
        'He saw, felt and heard nothing, yet he is sure someone passed him and went down the corridor to the nursery whose locked door opened. He tries explanations, even the woman in black or a secret relative of Mrs Drablow, and rejects each one.',
      setting: 'The dark landing, beside the corridor to the nursery',
      who: [
        'Arthur Kipps',
        'The unseen presence',
        'The woman in black',
        'Mrs Drablow',
        'Samuel Daily',
      ],
      quote: 'I began to doubt my own reality',
      themes: ['Reason and doubt', 'Fear and the supernatural'],
      tension: 4,
      significance:
        'The narrator’s reason, his main defence, fails, and the threat moves from the house into his mind.',
    },
    {
      where: 'Lines 52-60',
      title: 'The broken torch',
      summary:
        'Groping back to the bed, he finds his torch, trips over the dog and drops it, and hears glass break. The torch will not work. Nearer to tears than he has been since childhood, he beats his fists on the floor in rage.',
      setting: 'The bedroom floor, in pitch darkness',
      who: ['Arthur Kipps', 'Spider'],
      quote: 'in a burst of violent rage',
      themes: ['Losing control', 'Childhood and safety'],
      tension: 5,
      significance:
        'The climax is emotional rather than supernatural: the last light is gone and his self-control breaks.',
    },
    {
      where: 'Lines 61-65',
      title: 'Spider’s comfort',
      summary:
        'Spider scratches his arm and licks his hand until he comes back to himself. He hugs her, ashamed but calmer, while the storm roars outside and the child’s terrible cry comes again and again on the wind.',
      setting: 'The bedroom floor, the storm still raging outside',
      who: ['Arthur Kipps', 'Spider', 'The crying child'],
      quote: 'brought me to my senses',
      themes: ['Isolation and companionship', 'The suffering child', 'Losing control'],
      tension: 3,
      significance:
        'The ending comforts the living but resolves nothing, and returns to the cry that first broke his calm at line 17.',
    },
  ],

  relationships: [
    {
      from: 'Arthur Kipps',
      to: 'Spider',
      kind: 'man and borrowed dog',
      note: 'Spider follows him everywhere, is the cause of the dropped torch, and then the only thing that can calm him. Her warmth and touch return him to the physical world after an experience no sense could confirm.',
    },
    {
      from: 'Arthur Kipps',
      to: 'The crying child',
      kind: 'the living listener and the dead child',
      note: 'He cannot help the child and cannot stop hearing it. His feelings move between fear and pity, and his helplessness is part of the horror.',
    },
    {
      from: 'Arthur Kipps',
      to: 'The unseen presence',
      kind: 'a man and something he cannot perceive',
      note: 'He is certain it passed him and has no evidence at all. His attempts to explain it lead him to doubt his own reality.',
    },
    {
      from: 'Mrs Drablow',
      to: 'The woman in black',
      kind: 'sisters, as the novel later reveals',
      note: 'The narrator wonders whether Mrs Drablow hid a reclusive old sister in the house. In the novel the woman in black is the ghost of her sister Jennet, so his guess is a dramatic irony.',
    },
    {
      from: 'Samuel Daily',
      to: 'Spider',
      kind: 'owner and dog',
      note: 'Samuel Daily lent Spider to Arthur so that he would not be alone at the house. For Arthur, the dog is a living link to the sensible world beyond the causeway.',
    },
    {
      from: 'The woman in black',
      to: 'The crying child',
      kind: 'mother and drowned son, in one reading',
      note: 'In the novel Jennet’s son Nathaniel drowned in the marsh. Many readers hear his cry in this extract, although the extract itself never connects the two.',
    },
  ],

  compareWith: [
    {
      title: 'Night, Alice Munro',
      href: '/revision/texts/night',
      reason:
        'Both are told by an adult looking back on fear that came at night, Munro’s narrator in a familiar house turned strange and Hill’s in a remote house he barely knows, and both locate the real threat partly inside the narrator’s own mind.',
    },
    {
      title: 'Out, Out-, Robert Frost',
      href: '/igcse/edexcel/poetry/out-out',
      reason:
        'Both turn on the death of a child and on adults powerless to save him, a poem to set beside Hill’s prose for a coursework essay on vulnerability.',
    },
    {
      title: 'Significant Cigarettes (from The Road Home), Rose Tremain',
      href: '/revision/texts/significant-cigarettes',
      reason:
        'Both follow a man who cannot rest, Lev on a long coach journey that runs from dawn into the night and Hill’s narrator through a night of storm, while memories of the past break into the present and comfort proves hard to find.',
    },
  ],

  contentGuidance: ['supernatural', 'mortality'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, pp. 42-43 (PDF pages 48-49): the extract as prescribed, 65 numbered lines. Every quotation and line number was checked against this printing and against page images; the contents lists it at p. 42; the Part 2 acknowledgements (p. 72) give Text from The Woman in Black by Susan Hill, Vintage Books, copyright Susan Hill 1983, reproduced by permission of Sheil Land Associates Ltd; the Issue 8 change list records no changes to this text',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Language A specification (Issue 7): Component 2 Section A, one essay question on a Part 2 anthology text, which is made available in the examination; Component 3 Assignment A, an essay on any three Part 2 texts including at least one poem and one prose text',
    },
    {
      label:
        'Wikipedia, The Woman in Black (Hill novel): published 10 October 1983 by Hamish Hamilton; the Christmas frame with Arthur’s stepchildren from his second marriage; Crythin Gifford on the north-east coast; Mrs Alice Drablow; Eel Marsh House on a tidal island joined by Nine Lives Causeway; Samuel Daily met on the train; most townspeople reluctant to talk about Mrs Drablow and the woman in black; Jennet Humfrye, Nathaniel and the pony and trap that sank in the marsh; the ghost’s sightings presaging a child’s death; the ending; Hill acknowledging The Turn of the Screw as the inspiration',
      url: 'https://en.wikipedia.org/wiki/The_Woman_in_Black_(Hill_novel)',
    },
    {
      label:
        'Wikipedia, Susan Hill: born 5 February 1942, Scarborough; English degree at King’s College London, first novel published in her first year; Somerset Maugham Award 1971; Whitbread Novel Award 1972 and Booker shortlist for The Bird of Night; CBE 2012, DBE 2020; the traditional English ghost story and the influence of M. R. James and Daphne du Maurier; later ghost stories. Its body text dates the Serrailler series to 2008, which its own works list and the sources below contradict, so that date is not used',
      url: 'https://en.wikipedia.org/wiki/Susan_Hill',
    },
    {
      label:
        'The Various Haunts of Men, the first Simon Serrailler novel: published by Chatto & Windus in June 2004 (Wikipedia), and reviewed in the Literary Review crime round-up of June 2004',
      url: 'https://literaryreview.co.uk/crime-round-up-june-2004',
    },
    {
      label:
        'Alun Severn, The Woman in Black, The Letterpress Project (January 2024): Hill has said she wrote the novel with three guides, the two Jameses (M. R. James and Henry James) and the critic Julia Briggs',
      url: 'https://letterpressproject.co.uk/inspiring-older-readers/2024-01-01/the-woman-in-black',
    },
    {
      label:
        'Wikipedia, The Woman in Black (play): Stephen Mallatratt, Stephen Joseph Theatre, Scarborough, 1987; West End 1989; Fortune Theatre until 4 March 2023; second longest-running non-musical play in West End history after The Mousetrap. The novel article gives a different month for the Fortune opening, so only the year is used',
      url: 'https://en.wikipedia.org/wiki/The_Woman_in_Black_(play)',
    },
    {
      label:
        'Wikipedia, Oh, Whistle, and I’ll Come to You, My Lad: M. R. James, Ghost Stories of an Antiquary (1904); Parkins, a young Cambridge professor, on holiday at Burnstow on the east coast; the bronze whistle he finds in a hole in the masonry of a ruined Templar preceptory, which summons a figure; title from a poem by Robert Burns. The Burns article dates the poem and song to 1787, expanded in 1793',
      url: 'https://en.wikipedia.org/wiki/Oh,_Whistle,_and_I%27ll_Come_to_You,_My_Lad',
    },
    {
      label:
        'Wikipedia, the Burns poem: records that the phrase is invoked as a chapter title in Susan Hill’s The Woman in Black',
      url: 'https://en.wikipedia.org/wiki/Oh,_whistle_and_I%27ll_come_to_you,_my_lad',
    },
    {
      label:
        'Wikipedia, The Turn of the Screw: serialised in Collier’s Weekly in 1898; critics since the 1930s have suggested the ghosts may be the governess’s imagination',
      url: 'https://en.wikipedia.org/wiki/The_Turn_of_the_Screw',
    },
    {
      label:
        'Wikipedia, Banshee: a female spirit in Irish folklore whose wailing heralds the death of a family member',
      url: 'https://en.wikipedia.org/wiki/Banshee',
    },
    {
      label:
        'Shmoop, The Woman in Black chapter summaries: Chapter 6, The Sound of a Pony and Trap (the fog on the causeway and the sounds of a child in distress); Chapter 8, Spider (Mr Daily lends the dog despite disapproving of Arthur staying alone); Chapter 9, In the Nursery (the locked door open, a nursery with a rocking chair moving by itself); Chapter 10, Whistle and I’ll Come to You (Spider trapped in the marsh and the woman in black at the nursery window, later in the chapter than the anthology extract)',
      url: 'https://shmoop.com/woman-in-black/chapter-10-summary.html',
    },
    {
      label:
        'LitCharts, The Woman in Black plot summary: the twelve chapter titles, including 6 The Sound of a Pony and Trap, 8 Spider, 9 In the Nursery and 10 Whistle and I’ll Come to You; the rocking chair swaying in the nursery; in Chapter 10, Spider running onto the marsh at a whistle and the woman in black at the nursery window',
      url: 'https://www.litcharts.com/lit/the-woman-in-black/summary',
    },
    {
      label:
        'GradeSaver, The Woman in Black summary: the Christmas Eve frame; the woman in black visible only to Kipps; the locked door that becomes unlocked and the nursery with a rocking chair; Kipps’s wife and child killed in an accident',
      url: 'https://www.gradesaver.com/the-woman-in-black/study-guide/summary',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, Part 2: Night by Alice Munro (pp. 44-49) and Out, Out- by Robert Frost (p. 26), read to check the comparison notes',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
  ],
}
