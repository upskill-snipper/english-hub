import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Explorers or boys messing about? Either way, taxpayer gets rescue bill,
 * Steven Morris. A supplement: the anthology page at
 * /igcse/edexcel-lang/anthology/explorers-or-boys-messing-about keeps its
 * context and structure sections, and this file adds everything else.
 *
 * Every quotation and every line reference was checked on 25 September 2026
 * against the prescribed text itself: the Pearson Edexcel International GCSE
 * English Anthology, Issue 8 (February 2026), pages 8-9, fetched from Pearson
 * that day and byte-identical to the copy read on 19 September for
 * src/lib/board/edexcel-igcse-anthology.ts. Line numbers were mapped from the
 * numbers printed in the margin (5, 10 ... 65), so they match the copy a
 * candidate is given in the exam.
 *
 * The anthology prints an ADAPTED version of the Guardian article, dated
 * 28 January 2003 in its own note. Nothing here is taken from the online
 * original, whose wording differs. The anthology's acknowledgements name
 * Guardian News & Media Ltd as the copyright holder, so the rights line names
 * them rather than the author.
 *
 * The text is 862 words (headline plus 69 numbered lines), so the page may
 * quote 86 words of it in total. The quotations are chosen to fit: most
 * phrases quoted in prose repeat a key quotation or part of one, and the
 * validator counts a repeat once. The rest (the extract annotations, "a
 * wedding present", "taxpayer gets rescue bill" and a few single words) are
 * short, and quotedTotals counts them in the total.
 *
 * Fact-checked again on 25 September 2026, independently, against a fresh
 * download of the same anthology PDF: every quotation, speaker and line
 * number held. Corrected then: "pushing it to the maximum" is five words, not
 * four; farce and tragedy are in consecutive sentences, not two apart; the
 * Ministry of Defence's "normal" is in the sentence before "highly unlikely",
 * not the same one; the text never says whose wedding present the watch was;
 * the coastguard is not a service the Ministry of Defence pays for; and
 * several readings that were stated as facts are now offered as readings.
 *
 * Fact-checked a third time on 26 September 2026, against another fresh
 * download (md5 b127611040c7e1442fa9065c6b51ef34, the same file): every
 * quotation, speaker and line number held again, and the word count of 862
 * was re-counted. What was wrong was prose that copied the article without
 * quotation marks, which the quotation counter cannot see: whole runs such as
 * the rescue sequence of lines 26-32, the Bering Strait sentences of lines
 * 48-53 and the cost clause of lines 10-11 had been lightly rearranged rather
 * than put into new words. Those are now paraphrased. Also corrected: the text
 * never says Jo Vestey was the first person Brooks called, only that the
 * rescue began with his call to her; the Zephaniah piece was adapted from a
 * book contribution, not "for the anthology"; and the rescue narrative is
 * lines 19-32, not 19-35.
 */
export const guide: StudyGuide = {
  slug: 'explorers-or-boys-messing-about',
  title: 'Explorers or boys messing about? Either way, taxpayer gets rescue bill',
  author: 'Steven Morris',
  form: 'non-fiction',
  scope:
    "The adapted newspaper article printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 1, pages 8-9: the headline and 69 numbered lines, adapted from an article in The Guardian of 28 January 2003. Line numbers in this guide are the anthology's printed line numbers.",
  rights: {
    status: 'copyright',
    acknowledgement:
      "© Guardian News & Media Ltd, the copyright holder named in the anthology's acknowledgements. Article by Steven Morris, first published in The Guardian on 28 January 2003, as printed in adapted form in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), pages 8-9.",
  },
  workLength: {
    words: 862,
    basis:
      'Counted on 25 September 2026 from the anthology text (Issue 8, pages 8-9), the way the guide validator counts words: 851 words in the 69 numbered lines plus 11 in the headline. The editorial note above the article, its bold summary line and the footnote glossing Falmouth are not included.',
  },

  overview: {
    summary: [
      'Steven Morris, a Guardian news reporter, wrote this report of a helicopter crash off Antarctica. The anthology prints an adapted version of the article, which first appeared in The Guardian on 28 January 2003. The day before, two British adventurers, Steve Brooks, 42, and Quentin Smith, 40, had ditched their small single-engined Robinson R44 helicopter in the sea about 100 miles off Antarctica and climbed into a liferaft. The rescue started with a satellite-phone call from Brooks to his wife in London, involved the Royal Navy, the RAF and the British coastguard, and ended about nine hours later, when a Chilean naval vessel collected the men.',
      "But this is not simply a rescue story. The headline asks a question and then shrugs it off: whatever the men are, “Either way” the public pays. Morris opens not with the crash but with the failure of their previous expedition, which “ended in farce”, and he surrounds the drama of the rescue with doubt: resentment at the cost, experts questioning the choice of helicopter, confusion about what the men were trying to do, and Brooks's wife's description of the pair as “boys messing about with a helicopter”. He then sets out their impressive experience, only to follow it with an earlier embarrassment in the Bering Strait, an expert's criticism, the Ministry of Defence's confirmation that the taxpayer will pay, and a closing joke about the punishment waiting for them.",
      'What makes the article worth studying is how a report that looks factual steers its reader. Morris almost never states an opinion in his own voice. He lets other people judge, and he chooses which voices to include and where to put them. One reading is that the article fairly records the criticism the men attracted. The more convincing reading is that its structure and word choices build a case against them, while its moments of balance make that case harder to dismiss. The strongest answers show both: how the criticism is built, and why the balance makes it more persuasive rather than less.',
      "Revise from the anthology version: it is an adaptation, so wording found online may differ. Pearson's specification says candidates are given the anthology text in the examination, so the skill being tested is analysis, not memory. Use the line numbers in this guide to find each moment quickly, and spend your revision time on what the words do.",
    ],
  },

  themes: [
    {
      title: 'Heroism or recklessness',
      body: "The headline states the question directly, and the article can be read as evidence for each answer. On the heroic side, Morris gives a long paragraph to Brooks's record (lines 36-40), adds Smith's round-the-world flights and championship (lines 43-45), and concedes that the pair had survival suits on (line 33). On the reckless side sit the single-engined helicopter taken into a hostile environment (lines 12-13), the expert's view that they were “pushing it to the maximum” (line 59) and the history of the Bering Strait (lines 48-55). The article steers towards recklessness mainly through placing: the praise is sandwiched between the “miracle” of their survival and the reminder that they have “hit the headlines for the wrong reasons”. An alternative reading is that Morris is simply being fair, since he reports their experience at length. But balance that is immediately undercut works as a set-up, so the first reading is the stronger one.",
    },
    {
      title: 'Cost and public responsibility',
      body: "The second half of the headline, “taxpayer gets rescue bill”, names the article's real grievance, and the fourth paragraph repeats it: the adventure has left British and Chilean taxpayers with a five-figure bill (lines 10-11). The rescue narrative makes that cost visible. Every service named, from Falmouth coastguard and RAF Kinloss to HMS Endurance, its two Lynx helicopters and a Chilean naval vessel, is part of the bill. Near the end the Ministry of Defence confirms that the taxpayer will pay and calls recovering the money “highly unlikely” (lines 62-64), closing the loop the headline opened. Yet the sentence that confirms the bill also calls this the usual practice for rescues at home and overseas. A careful reader can take that as undermining the outrage: rescuing people is what these services exist to do. Morris includes the point, so the article contains its own counter-argument, but he places it quietly and late, while the resentment comes early and loudly.",
    },
    {
      title: 'Reporting as judgement',
      body: "A news report is supposed to inform; this one also entertains and persuades. Morris rarely comments in his own voice. The judgements come from others: “resentment in some quarters”, unnamed experts, a website promoting the Bering Strait expedition, Jo Vestey, an unnamed Antarctic explorer, Günter Endres and the Ministry of Defence. Meanwhile neither Brooks nor Smith is quoted directly. Brooks's words reach the reader only through his wife, and a spokesman speaks for the pair. So the argument lies in selection and order, which is exactly what a question on language and structure rewards. The few words where Morris's own voice does show, such as “farce”, “claims” and “Ironically”, are the most revealing in the text. One reading treats this as objective journalism; the more convincing one sees the objectivity as a technique, because criticism that seems to come from everyone except the writer is hard for a reader to resist.",
    },
    {
      title: 'Boys, not men',
      body: "The article's central image comes from Brooks's wife, who calls the pair “boys messing about with a helicopter” (line 18). From her, on the day of a frightening rescue, it probably sounds like affectionate exasperation. Morris turns it into the headline, and so into a verdict. “Messing about” suggests aimless play, and “boys” takes away adult judgement. The image is reinforced by Smith, who “claims to have been flying since the age of five” (line 43), by a list of exploits that can read like a boy's adventure story, and by the final sentence, where the men may have their “bottoms kicked” like schoolchildren in trouble. Some readers find the tone gently comic and the men rather endearing, and that reading is fair. But the comedy is the argument's weapon: laughing at the men is a way of refusing to take their claim to be explorers seriously.",
    },
    {
      title: 'Experience and expertise',
      body: "The article asks whose knowledge counts. The men's experience is enormous: expeditions to seventy countries, two helicopter flights around the globe, a world freestyle championship. Morris sets expert voices against it. Unnamed experts question the choice of helicopter early on (line 12), and Günter Endres, editor of a specialist publication, Jane's Helicopter Markets and Systems, questions it again near the end (lines 56-59). The hinge is the phrase “Despite their experience” (line 46), which concedes the men's record in order to dismiss it. There is a subtler bias in the reporting verbs. The adventurers' side “claims” and Vestey “claimed”, while the experts simply say or question. The article's implied lesson is that experience of dangerous adventure is not the same as good judgement. Whether that is fair to two highly experienced pilots is exactly the kind of question a strong answer can raise.",
    },
  ],

  characters: [
    {
      name: 'Steven Morris',
      role: "The reporter: a Guardian news journalist and the article's narrating voice",
      body: "Morris never uses the first person and seldom states a view, yet he is present everywhere: in the order of the paragraphs, in the voices he chooses to quote, and in a handful of loaded words such as “farce”, “claims” and “Ironically”. Treat him as a constructed voice, a reporter who appears neutral while arranging the evidence. Because the anthology prints an adaptation, some cuts and changes may be the editors' rather than his, and newspaper headlines are often written by sub-editors rather than by the reporter. But the exam asks how the writer uses language and structure, so write about every choice in the printed text as Morris's.",
    },
    {
      name: 'Steve Brooks',
      role: 'Explorer, 42; a London property developer, also qualified as a mechanical engineer and as a pilot',
      body: "Brooks is the article's main subject. From the liferaft he rang his wife on his satellite phone, and his emergency watch, “a wedding present” (line 25), was one source of the distress signals. Lines 36-42 list his record: expeditions to seventy countries in fifteen years, a solo trek to Everest base camp, three days barefoot in the Himalayas, the Zambezi rapids by kayak, a gorilla's charge in the Congo, and a three-month, 16,000-mile honeymoon by helicopter from Alaska to Chile. In April he and Graham Stratford had tried to cross the frozen Bering Strait. He is never quoted directly. He is described, catalogued and judged by others, and some readers hear in the property developer, the honeymoon by helicopter and the watch a hint of the comfortable life behind these adventures, which sharpens the complaint about who pays.",
    },
    {
      name: 'Quentin Smith',
      role: 'Explorer and helicopter pilot, 40, also from London; the article says he is known as Q',
      body: "Smith gets less space than Brooks, and it is framed with doubt: he “claims to have been flying since the age of five” (line 43). The article credits him with twice flying a helicopter around the globe and winning the world freestyle helicopter flying championship, and says he provided air back-up on the Bering Strait attempt. A later magazine profile of Smith says the pair were on their way to attempt a landing at the South Pole, having already landed at the North Pole. That matches the website claim Morris himself reports (lines 14-16), so a reader might ask how much real mystery there was about the men's aim, although the one example of the confusion the article gives is Vestey's own claim not to know. Accounts of the rescue also differ in small details, such as whose emergency watch sent the signal. In the exam, the article's version is the one that counts.",
    },
    {
      name: 'Jo Vestey',
      role: "Steve Brooks's wife, whom he rang from the liferaft; the article says the rescue began with that call",
      body: "Vestey is quoted more than anyone else. She reports Brooks's call from the liferaft (lines 22-23), supplies the description of the pair that becomes the headline (line 18), and has the last word (lines 66-69), saying the men appear well before joking about their punishment. Her tone reads as relief mixed with teasing. That is what makes her so useful to Morris: the most sympathetic witness in the article delivers its most damaging judgements, and they cannot be dismissed as an outsider's prejudice. Notice that even she is reported with a doubting verb: she “claimed” not to know what the two men were doing (line 17).",
    },
    {
      name: 'Günter Endres',
      role: "Editor of Jane's Helicopter Markets and Systems; the article's one named expert",
      body: "Endres says the choice of the R44 surprises him and that he would not risk that kind of helicopter on such a long sea crossing, ending with the view that they were “pushing it to the maximum” (lines 56-59). His job title signals specialist authority: Jane's is a long-established publisher of defence and aviation reference works. Morris places him late, after the paragraphs on the men's experience and the Bering Strait story, so expertise in the machine answers experience of adventure. His verdict is hedged, though, framed as how the flight sounds to him, and a careful answer can point out that even the expert is judging from a distance.",
    },
    {
      name: 'The rescuers',
      role: 'The British and Chilean services who found and collected the men',
      body: "Falmouth coastguard decoded the signals and relayed them to RAF Kinloss in Scotland, where search and rescue was coordinated. HMS Endurance, the Royal Navy's ice patrol ship, was doing survey work 180 miles off; it headed for the scene and launched both its Lynx helicopters, though bad visibility turned one back. The men were collected at about 10.20am British time by a Chilean naval vessel, while the second Lynx was still on its way. The rescuers are presented collectively and competently. HMS Endurance is given the most energetic verbs of the rescue, heading for the scene and sending out its helicopters, while the adventurers are the ones “plucked from the icy water”. They are also the cost: every service named is part of the bill in the headline.",
    },
    {
      name: 'The Ministry of Defence',
      role: 'The government department that speaks for the cost',
      body: "The ministry says the public will pay, as is usual for rescues at home and overseas, and its spokesperson calls getting any of the money back “highly unlikely” (lines 62-64). The flat official statement brings the article back to its headline. Read closely, though, the ministry also says the charge is routine, which a reader sympathetic to the men could use against the article's sense of grievance.",
    },
    {
      name: 'Graham Stratford',
      role: "Brooks's fellow explorer on the Bering Strait attempt",
      body: 'Stratford appears only in the backstory (lines 48-53). In April he and Brooks had been close to making the first complete crossing of the frozen Bering Strait, the stretch of sea on the US-Russian border, in Snowbird VI, an amphibious vehicle built both to break through the ice and to float in the open water between the floes. They gave up when the Russian authorities warned that military helicopters would be sent to remove them if they entered Russian territory. His role in the article is to show a pattern: this is not the first expedition of theirs to end badly.',
    },
  ],

  keyQuotes: [
    {
      text: 'Explorers or boys messing about? Either way, taxpayer gets rescue bill',
      where: 'Headline, anthology page 8',
      analysis:
        "The headline sets up a binary choice between two labels, one dignified and one dismissive, and then refuses to wait for the answer. “Either way” makes the question irrelevant, because the cost falls on the public whichever label fits. It is a rhetorical question, not a real one, and it is loaded: nobody would describe a serious expedition as “messing about”, so simply asking lowers the men's status. The second half turns from the men to the reader, the taxpayer, giving the audience a personal stake in the story before a single fact has been reported.",
    },
    {
      text: 'ended in farce',
      where: "Line 1, Morris's narrative voice",
      analysis:
        'The first thing the reader learns about the men is not the crash but a previous failure. Farce is a theatrical word for comedy built on absurd mishaps, so choosing it rather than a neutral word such as setback invites laughter. Because this is the first impression, the later account of real danger is filtered through it: the men enter the article already cast as comic figures.',
    },
    {
      text: 'almost led to tragedy',
      where: "Line 5, Morris's narrative voice",
      analysis:
        "In the very next sentence after farce comes its dramatic opposite. The juxtaposition of the two genre words captures the article's uncertainty about how to treat the men, as clowns or as people who nearly died. The word “almost” matters: nobody died, so the tragedy is only potential. That lets Morris keep the drama of the rescue while keeping the tone light enough for the mockery that follows.",
    },
    {
      text: 'plucked from the icy water',
      where: "Line 6, Morris's narrative voice",
      analysis:
        'The verb “plucked” suggests something small and helpless being lifted out easily, and the passive construction makes the men the ones acted upon while the Chilean naval ship does the acting. The pattern recurs when they are picked up by a Chilean vessel (line 32), whereas the most energetic verbs in the rescue belong to HMS Endurance, which began steaming towards the scene. That quietly reverses the heroic roles an explorer story would normally give them. The adjective “icy” keeps the real danger in view.',
    },
    {
      text: 'resentment in some quarters',
      where: "Line 10, Morris's narrative voice",
      analysis:
        'A classic journalistic hedge. Resentment is a strong, bitter feeling, but who feels it is never said: “some quarters” could mean many people or very few. The vague attribution lets Morris introduce criticism without owning it, and he places the complaint about cost in the fourth paragraph, long before the detailed account of the rescue. A strong answer comments on both the loaded noun and the unnamed source.',
    },
    {
      text: 'trusty helicopter',
      where:
        'Line 16, the words of a website promoting the Bering Strait expedition, quoted by Morris',
      analysis:
        "Morris quotes the website's cheerful phrase at the very moment the reader knows the helicopter has just crashed into the sea. Trusty means reliable, and in this position the quotation marks can work as scare quotes, inviting the reader to doubt it. The phrase also sounds boyish and fond, as if the machine were a pet or a toy, which prepares for the image of “boys messing about” two lines later.",
    },
    {
      text: 'boys messing about with a helicopter',
      where: "Line 18, Jo Vestey (Brooks's wife), as reported by Morris",
      analysis:
        "The phrase that gives the article its headline comes from the person closest to Brooks. “Messing about” suggests aimless play rather than purposeful exploration, and “boys” denies the men adult judgement. From a wife on the day of a frightening rescue, it probably sounds like affectionate exasperation. By lifting it into the headline, Morris turns a private, teasing remark into a public verdict, and it carries extra weight because it cannot be dismissed as an outsider's prejudice. It is arguably the most important choice in the article.",
    },
    {
      text: 'nothing short of a miracle',
      where: 'Line 34, an unnamed Antarctic explorer, speaking to Jo Vestey',
      analysis:
        'Hyperbole from an unnamed authority. Calling survival a miracle credits it to luck, not skill, and it arrives straight after a clause conceding that the men had survival suits on and clear weather. The concession and the hyperbole pull against each other: the men prepared sensibly, yet survived only by a miracle. The placing suggests their preparation was not enough, and it hangs a question mark over the paragraphs on their experience that follow.',
    },
    {
      text: 'claims to have been flying since the age of five',
      where: 'Line 43, Morris on Quentin Smith',
      analysis:
        "The reporting verb “claims” casts doubt on what follows, although Morris offers nothing to contradict it. The same verb has already been used for the website (line 15) and, as “claimed”, for Jo Vestey (line 17), so the adventurers' side is presented as assertion rather than fact, while the experts merely say or question. The detail itself, a five-year-old at the controls, fits the article's picture of men who never stopped playing.",
    },
    {
      text: 'Ironically',
      where: "Line 54, Morris's narrative voice",
      analysis:
        "The most open comment Morris makes in his own voice. An expedition that was partly meant to show how far relations between east and west had improved was stopped by the Russian authorities' threat to send in military helicopters. The adverb tells the reader how to take the fact instead of leaving them to notice it, and it confirms the pattern set up in the first line: this pair's plans have a habit of turning into their opposite.",
    },
    {
      text: 'pushing it to the maximum',
      where: "Line 59, Günter Endres, editor of Jane's Helicopter Markets and Systems",
      analysis:
        "The article's one named expert, with a title that signals specialist authority, delivers its clearest criticism of the men's judgement. The colloquial phrase suggests deliberately testing limits, which is the charge of recklessness in five words. Notice the placing: it follows the paragraphs on the men's experience and their earlier embarrassment, so expertise in the machine answers experience of adventure. The verdict is hedged, framed as how the flight sounds to Endres, so even the expert is judging from a distance.",
    },
    {
      text: 'bottoms kicked and be sent home the long way',
      where: "Lines 68-69, Jo Vestey; the article's final words",
      analysis:
        'The article ends on a joke that returns to the image of the headline. Having their bottoms kicked is what happens to naughty children, and being sent home the long way suggests both punishment and delay. Giving the last word to Vestey, the source of the phrase about boys, creates a circular structure. The ending is affectionate on the surface, but it leaves the reader with a final picture of two men in trouble, not two survivors.',
    },
  ],

  extracts: [
    {
      title: 'The opening: from farce to the case against',
      where: 'Lines 1-18 (paragraphs 1-7), anthology page 8',
      pointer:
        "From the first line, about the pair's last expedition, to line 18, where Jo Vestey's description of the men ends the seventh paragraph.",
      summary:
        "The article opens with the men's previous expedition, stopped when Russia threatened to send military planes, before reporting the news: their helicopter has come down in the sea off Antarctica and a Chilean naval ship has rescued them after a nine-hour operation involving British services. Morris then reports resentment at the cost to British and Chilean taxpayers, experts doubting the use of a small single-engined helicopter, confusion about the men's aim, a website's claim that they planned a pole-to-pole flight, and Brooks's wife's own dismissive description of them.",
      annotations: [
        {
          phrase: 'ended in farce',
          note: 'Background placed before the news: the reader meets the men as figures of comedy before learning they nearly died.',
        },
        {
          phrase: 'almost led to tragedy',
          note: 'The genre opposite of farce, in the very next sentence. The juxtaposition sets up the double tone of danger reported with mockery.',
        },
        {
          phrase: 'plucked from the icy water',
          note: 'Passive voice: the men are acted upon, the Chilean ship acts. The heroic role passes from the explorers to the rescuers.',
        },
        {
          phrase: 'resentment in some quarters',
          note: 'An unnamed source for a strong feeling. Criticism about cost arrives before the detailed account of the rescue.',
        },
        {
          phrase: 'trusty helicopter',
          note: "The website's own phrase, quoted just after the crash. As scare quotes, it makes the men's side sound naive.",
        },
        {
          phrase: 'boys messing about with a helicopter',
          note: "The headline's phrase, and it comes from Brooks's wife. Her teasing becomes the article's verdict once Morris promotes it.",
        },
      ],
      question:
        "How does Morris use language and structure in lines 1-18 to shape the reader's first impression of Steve Brooks and Quentin Smith?",
    },
    {
      title: 'Experience on trial',
      where: 'Lines 33-55 (paragraphs 14-21), anthology pages 8-9',
      pointer:
        'From line 33, where the survival suits and clear weather are mentioned, to line 55, the end of the paragraph about east-west relations.',
      summary:
        "Morris concedes that the men wore survival suits in clear weather, then reports an explorer calling their survival a miracle. He lists Brooks's adventures across seventy countries, his helicopter honeymoon, and Smith's flying record and championship. Then he turns: the men have made headlines for the wrong reasons before, when Brooks and Graham Stratford's amphibious crossing of the frozen Bering Strait was halted by a Russian threat, although the expedition was meant to show good east-west relations.",
      annotations: [
        {
          phrase: 'nothing short of a miracle',
          note: 'Hyperbole that credits survival to luck, placed straight after the concession that the men had prepared sensibly.',
        },
        {
          phrase: 'claims to have been flying since the age of five',
          note: "The doubting reporting verb again, attached to a childhood detail that feeds the article's image of boys at play.",
        },
        {
          phrase: 'Despite their experience',
          note: 'The structural hinge of the article: a concession that turns the preceding praise into a set-up for criticism.',
        },
        {
          phrase: 'hit the headlines for the wrong reasons',
          note: 'A journalistic idiom that signals embarrassment and prepares the reader to see the Bering Strait story as a pattern.',
        },
        {
          phrase: 'Ironically',
          note: "Morris's most open comment in his own voice, telling the reader how to judge the failed expedition rather than letting them decide.",
        },
      ],
      question:
        "How does Morris present the men's experience in lines 33-55, and how does the order of the paragraphs affect the reader's view of it?",
    },
    {
      title: 'The verdicts and the last word',
      where: 'Lines 56-69 (paragraphs 22-25), anthology page 9',
      pointer:
        'From line 56, where Günter Endres is introduced, to the final words of the article at line 69.',
      summary:
        "An expert from a specialist aviation publication questions taking the R44 on such a long sea crossing. The pair's spokesman says nobody knows what went wrong and that flying conditions were good. The Ministry of Defence says the taxpayer will pay, as normal, and is unlikely to get the money back. The men head for a Chilean base to be collected by HMS Endurance, and Brooks's wife jokes about their punishment.",
      annotations: [
        {
          phrase: 'pushing it to the maximum',
          note: "The named expert's colloquial charge of recklessness, placed to answer the long account of the men's experience.",
        },
        {
          phrase: 'excellent',
          note: "The spokesman's word, printed in quotation marks. Good conditions remove the weather as an excuse, which can make the crash seem the men's own doing, although the same spokesman says nobody knows what went wrong.",
        },
        {
          phrase: 'highly unlikely',
          note: 'The official voice returns the article to its headline: the public pays and will not be repaid, although the sentence before calls the arrangement normal.',
        },
        {
          phrase: 'bottoms kicked and be sent home the long way',
          note: 'A childish, colloquial image that echoes the boys of the headline and gives the article a circular ending.',
        },
      ],
      question:
        'How effective is the ending of the article? Refer closely to lines 56-69 and to the headline in your answer.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Rhetorical question and antithesis in the headline',
      example:
        'The headline sets “Explorers” against “boys messing about” and then dismisses its own question with “Either way”.',
      effect:
        'The antithesis offers two labels, one heroic and one mocking, so the reader is made to judge before reading any facts. By shrugging off the answer, the headline says what the article thinks matters: not what the men are, but that the public pays. The question frames the whole report as a debate that is already half settled.',
    },
    {
      technique: 'Juxtaposition of genre words',
      example:
        'The opening says the last expedition “ended in farce” (line 1); in the very next sentence the new one “almost led to tragedy” (line 5).',
      effect:
        "Farce invites laughter and tragedy fear and pity. Placing them side by side unsettles the reader's response and establishes the article's double tone, a real danger reported with the people in it treated as comic. Because farce comes first, it colours everything after it.",
    },
    {
      technique: 'Hedged and unnamed sources',
      example:
        'There is “resentment in some quarters” (line 10); unnamed experts question the choice of helicopter (line 12); an unnamed Antarctic explorer calls survival a miracle (line 34).',
      effect:
        'Vague attribution lets criticism enter the article without anyone standing behind it. The reader hears a chorus of disapproval but cannot tell how large it is. It allows Morris to build a case while keeping the appearance of neutral news reporting.',
    },
    {
      technique: 'Selective quotation',
      example:
        "Jo Vestey supplies “boys messing about with a helicopter” (line 18) and Günter Endres “pushing it to the maximum” (line 59), but neither Brooks nor Smith is quoted directly: Brooks's words reach us through his wife, and a spokesman speaks for the pair.",
      effect:
        'The voices Morris chooses, and the order he puts them in, make the argument. The two men are never heard in their own words (the article does not say whether Morris could reach them), while critics, and the most damaging remark of a loving wife, are given prominence. A strong answer points out the silence as well as the quotations.',
    },
    {
      technique: 'Reporting verbs that cast doubt',
      example:
        'The website “claims” (line 15), Vestey “claimed” not to know what the two men were doing (line 17), and Smith “claims to have been flying since the age of five” (line 43).',
      effect:
        "To claim something suggests it may not be true. Used three times for the adventurers and their circle, the verb turns their account into assertion, while the experts are reported with neutral verbs such as said and questioned. The pair's spokesman is given a plain said too, so this is a tendency rather than a rule, but the bias is in the reporting verbs rather than in any open statement.",
    },
    {
      technique: 'Scare quotes',
      example:
        "The website's “trusty helicopter” (line 16), and the spokesman's “excellent” flying conditions (line 61, printed in single quotation marks).",
      effect:
        "Putting someone's own words in quotation marks can distance the writer from them and invite doubt. A trusty helicopter that has just crashed, and excellent conditions in which it came down, both sound hollow, so the men's own side seems to undermine itself without Morris having to say so.",
    },
    {
      technique: 'Listing and accumulation',
      example:
        "Lines 36-40 pile up Brooks's exploits: seventy countries in fifteen years, a solo trek to Everest base camp, three days barefoot in the Himalayas, the Zambezi rapids by kayak, and surviving a gorilla's charge in the Congo.",
      effect:
        "On the surface this is balance, proof that these are serious adventurers. But a pile of exotic stunts, several more daring than useful, can read like a boy's adventure story, and the whole passage on their experience is followed at once by the reminder that the men have “hit the headlines for the wrong reasons”. The list works both ways, and the best answers say so.",
    },
    {
      technique: 'Precise facts and figures',
      example:
        'The ditching at around 1am British time, 100 miles off Antarctica and about 36 miles north of Smith Island; HMS Endurance 180 miles away; the pick-up at about 10.20am (lines 19-32).',
      effect:
        "Exact times, distances and the names of ships and bases are the conventions of hard news, and they give the report authority. They also build tension in the article's one chronological section, and the roll-call of services, from Falmouth coastguard to RAF Kinloss to two Lynx helicopters, shows the scale of the operation the headline says the taxpayer funded.",
    },
    {
      technique: 'Passive and active voice',
      example:
        'At the moment of rescue the men are passive: “plucked from the icy water” (line 6), and passive again at line 32, where the Chilean vessel is the agent that collects them. HMS Endurance, by contrast, is the subject of energetic active verbs as it heads for the scene and sends out its two Lynx helicopters (lines 28-30).',
      effect:
        'When they are saved, the explorers are the ones things are done to, and the ship is the subject that acts. The men do get active verbs elsewhere, but they are verbs of coming down in the sea, scrambling into a liferaft and phoning for help, not of heroism. The heroic energy an adventure story would give the explorers passes to the public services, which strengthens the sense that the real effort, and the cost, fell on others.',
    },
    {
      technique: 'Explicit irony',
      example:
        '“Ironically” (line 54) introduces the fact that an expedition partly intended to demonstrate friendly east-west relations was halted by a Russian threat.',
      effect:
        "Most of the article's judgement is implied, so this single adverb stands out as the writer's own voice. It tells the reader that the men's plans turn into their opposite, confirming the pattern of the opening farce. It is strong evidence that the article is not neutral.",
    },
    {
      technique: 'Bathos',
      example:
        "In the middle of the rescue, Morris adds that Brooks's emergency watch was “a wedding present” (line 25).",
      effect:
        'Read as bathos, a domestic detail deflates the drama at its height. It humanises Brooks, and some readers also hear in it, alongside the property developer and the helicopter honeymoon, a hint of the comfortable life behind these adventures, which sharpens the resentment about who pays. Whether it reads as sympathy or as a dig is worth discussing.',
    },
    {
      technique: 'Colloquial register and a circular ending',
      example:
        "Vestey's closing words, that the men will probably have their “bottoms kicked and be sent home the long way” (lines 68-69).",
      effect:
        "The informal, childish idiom ends the article on laughter and returns to the headline's image of boys, giving the piece a circular structure. Ending on a joke rather than on the facts of the rescue means the reader's final impression is of two men in trouble: the article's judgement, delivered in someone else's words.",
    },
  ],

  vocabulary: [
    {
      term: 'farce',
      definition:
        'A comedy built on absurd, unlikely situations; more loosely, an event handled so badly that it is laughable.',
    },
    {
      term: 'tragedy',
      definition:
        'A disaster involving death or great suffering; also the serious dramatic form that is the opposite of farce.',
    },
    {
      term: 'ditch (of an aircraft)',
      definition:
        'To make an emergency landing on water. The article uses it for the helicopter coming down in the sea.',
    },
    {
      term: 'liferaft',
      definition: 'A small inflatable boat carried on an aircraft or ship for use in an emergency.',
    },
    {
      term: 'satellite phone',
      definition:
        'A telephone that connects through satellites rather than a mobile network, so it works in remote places such as the open sea.',
    },
    {
      term: 'distress signal',
      definition:
        'An emergency call for help, often sent automatically by a beacon, that rescue services can detect and trace.',
    },
    {
      term: 'rescue coordination centre',
      definition:
        'An operations centre that organises search and rescue. In the article, the one at RAF Kinloss in Scotland receives the signals.',
    },
    {
      term: 'ice patrol ship',
      definition:
        "A naval ship built to work in polar waters. HMS Endurance was the Royal Navy's, and it carried helicopters.",
    },
    {
      term: 'uncharted waters',
      definition:
        'Sea that has not been accurately mapped. As an idiom it also means an unfamiliar situation, which suits a story about private adventurers in danger.',
    },
    {
      term: 'survival suit',
      definition: 'A waterproof, insulated suit that protects the wearer from the cold of the sea.',
    },
    {
      term: 'amphibious vehicle',
      definition:
        'A vehicle that can travel both on land or ice and in water, like Snowbird VI in the Bering Strait attempt.',
    },
    {
      term: 'ice floes',
      definition: 'Large, flat sheets of floating ice.',
    },
    {
      term: 'scramble (military)',
      definition:
        'To order aircraft into the air at short notice. The Russian authorities threatened to scramble military helicopters.',
    },
    {
      term: 'air back-up',
      definition:
        'Support from an aircraft flying alongside an expedition; Smith provided it on the Bering Strait attempt.',
    },
    {
      term: 'hostile environment',
      definition:
        'A place whose conditions, such as cold, sea and distance from help, are dangerous to human life.',
    },
    {
      term: 'taxpayer',
      definition:
        'Someone who pays tax; used collectively for the public whose money funds state services such as the armed forces and coastguard.',
    },
    {
      term: 'in some quarters',
      definition:
        'Among some people, who are not named. A useful phrase for a writer who wants to report criticism without saying whose it is.',
    },
    {
      term: 'hit the headlines',
      definition:
        'To become major news. For the wrong reasons means for something embarrassing rather than an achievement.',
    },
    {
      term: 'irony (situational)',
      definition:
        'When an outcome is the opposite of what was intended, as when an expedition meant to show friendly relations is stopped by a threat.',
    },
    {
      term: "Jane's",
      definition:
        'A publisher of reference works on defence and aviation, founded in 1898. Quoting the editor of one of its publications gives Endres authority.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Steven Morris use language and structure to present Steve Brooks and Quentin Smith? Support your answer with examples from the text.',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          'Open with an overview: the article presents the men less as explorers than as overgrown boys whose adventure cost the public, while appearing to report neutrally.',
          'Analyse the headline: the binary question, and how “Either way” dismisses it and turns attention to the taxpayer.',
          'Show how the opening frames the men: the farce of the last expedition comes before the news of the crash, and farce is set against tragedy.',
          "Analyse the voices Morris selects: Jo Vestey's remark, the unnamed critics, Günter Endres, and the fact that neither man is ever quoted directly.",
          'Discuss the balance in lines 36-45 and how its placing, between the miracle and the “wrong reasons”, turns praise into a set-up.',
          'Track the reporting verbs, especially the repeated “claims”, and the passive verbs used of the men at the moment of rescue.',
          "Finish with the ending: Vestey's joke returns to the headline's image and gives the article a circular shape.",
        ],
      },
      {
        question:
          "How does Morris use the words of other people to influence the reader's view of the rescue and of the two men?",
        skill: "Language analysis: how quotation and attribution shape a reader's view",
        guidance: [
          "Map the voices in the order they appear: the unnamed resentful (line 10), the unnamed experts (line 12), the website (line 15), Vestey (lines 17-18 and 22-23), an Antarctic explorer (line 34), Endres (lines 56-59), the pair's spokesman (lines 60-61), the Ministry of Defence (lines 62-64), and Vestey again at the end.",
          'For each, ask three questions: named or unnamed, supporter or critic, early or late in the article?',
          "Analyse Vestey's phrase closely, and explain how its meaning changes when Morris makes it the headline.",
          "Analyse how the men's own side is reported: the website's and the spokesman's words in quotation marks, and the doubting verb claims.",
          'Evaluate: Morris gives almost no direct opinion, yet the selection of voices builds a judgement. Say whether that makes the article more persuasive, and why.',
        ],
      },
      {
        question:
          'Compare how the writers present people who take risks in remote and dangerous places in Explorers or boys messing about? and From 127 Hours: Between a Rock and a Hard Place. (In the exam this kind of question pairs the anthology text with an unseen extract; practise the skill here with another anthology text.)',
        skill: "Comparison of writers' ideas and perspectives, and of how they are conveyed",
        guidance: [
          'Establish the key difference in perspective: Morris writes as an outside reporter judging two men; Ralston tells his own story from inside the danger, in the first person.',
          "Compare attitudes to risk and responsibility: Morris foregrounds the cost to others, and the anthology's introduction to Ralston notes that he had told no one of his plans, which you can connect to the question of who bears the consequences of risk.",
          "Compare language: Morris's loaded words and borrowed voices against Ralston's detailed, present-tense description of his own situation.",
          "Compare structure: Morris's news structure, with background first, the rescue in the middle and the verdicts at the end, against a narrative that follows events as they happen.",
          'Use comparative connectives throughout, give both texts roughly equal weight, and support every point with a short reference to each text.',
        ],
      },
      {
        question:
          'How does Morris use language to present the rescue and the people who carried it out?',
        skill: 'Language analysis',
        guidance: [
          'Locate the rescue narrative: it is the one chronological section of the article, lines 19-32, followed by the comment on their survival in lines 33-35, and most of the rest is reaction and background.',
          'Analyse the precise times, distances and names (1am, 100 miles, 36 miles north of Smith Island, 180 miles, 10.20am) and the authority and tension they create.',
          "Analyse the roll-call of services, from Falmouth coastguard and RAF Kinloss to HMS Endurance, its two Lynx helicopters and the Chilean vessel, and link it to the headline's bill.",
          'Contrast the passive verbs used of the men at the moment of rescue, starting with “plucked”, with the energetic active verbs given to HMS Endurance.',
          'Consider the moments that heighten danger (one Lynx driven back by poor visibility, the “miracle”) and the bathos of “a wedding present”.',
          "Conclude on purpose: the rescuers appear competent and busy, and their effort becomes part of the case that the men's adventure cost other people.",
        ],
      },
    ],
    tips: [
      'You are given the anthology text in the exam, so you do not need to memorise long quotations. Learn where things are, using the line numbers in this guide, and spend revision time on what the words do.',
      'Revise from the anthology version, not an online copy: the anthology prints an adapted article, and questions are set on its wording.',
      "Keep separating Morris's voice from the voices he quotes. Most of the judgement comes from other people, so write about his choices: which voices he includes, and where he places them.",
      'Notice who is never quoted. Neither Brooks nor Smith speaks directly in the article, and pointing out a silence is the kind of observation that lifts an answer.',
      "Treat the balance as a technique. The paragraphs on the men's experience make the criticism look fair-minded, and fair-minded criticism is more persuasive.",
      'Offer an alternative reading and then judge it. The tone can be read as gentle comedy, but the comedy is how the argument works.',
      'Link language to structure by tracing an idea across the text: the boys of the headline, line 18 and the ending, or the bill of the headline, line 10 and lines 62-64.',
      'Get the facts right. The helicopter came down in the sea about 100 miles off Antarctica, not on the ice, and the men were picked up from a liferaft by a Chilean naval vessel.',
      'Be careful with the term inverted pyramid: this article opens with background, the earlier farce, rather than with the news, and that departure from news convention is itself worth analysing.',
      'Keep quotations short and embedded, a word or a phrase, and analyse single words such as “farce”, “claims” and “plucked”.',
    ],
  },

  modelAnswer: {
    question:
      'How does Steven Morris use language and structure to present Steve Brooks and Quentin Smith?',
    paragraph:
      "Morris presents Brooks and Smith less as explorers than as overgrown boys, and he does it largely through other people's words. The headline offers a choice, “Explorers or boys messing about?”, but “Either way” makes the choice irrelevant, so from the first line the reader is invited to judge the men rather than admire them. The phrase that settles the judgement belongs to Brooks's own wife, Jo Vestey, who calls the pair “boys messing about with a helicopter” (line 18). From her, on the day of a frightening rescue, the remark sounds like affectionate exasperation, but by lifting it into the headline Morris turns private teasing into a public verdict: “messing about” implies aimless play, and “boys” strips the men of adult judgement. The idea is reinforced by the reporting verb “claims” (line 43), which makes Smith's flying since the age of five sound like a child's boast rather than a qualification, and it returns at the very end, when Vestey imagines the men having their “bottoms kicked” (line 68) like schoolboys caught misbehaving. Because this image frames the article at its start, recurs in its middle and closes it, the reader's lasting impression is of the men's boyishness rather than of the danger they survived, which is how an apparently neutral news report quietly takes a side.",
    commentary: [
      'It opens with a clear argument about how the men are presented, not a list of techniques, and every later sentence serves that argument.',
      'Quotations are short and embedded, and single words are analysed (“Either way”, “messing about”, “boys”, “claims”) rather than simply identified.',
      "It asks who says the key phrase and how its meaning changes when Morris moves it into the headline: analysis of the writer's choices, not just of the words.",
      "It weighs an alternative reading, affectionate exasperation, before explaining why the article's use of the remark matters more.",
      "It combines language and structure by tracing one image across the start, middle and end of the text, then links the effect to the writer's purpose.",
    ],
  },

  timeline: [
    {
      where: 'Headline and lines 1-3 (paragraph 1)',
      title: 'A question, and a farce',
      summary:
        'The headline asks whether the men are explorers or boys messing about, then says the taxpayer pays either way. The article begins not with the crash but with their last expedition, halted when Russia threatened to send military planes.',
      setting: 'The Bering Strait, remembered',
      who: ['Steven Morris', 'Steve Brooks', 'Quentin Smith'],
      quote: 'ended in farce',
      themes: ['Heroism or recklessness', 'Reporting as judgement'],
      tension: 2,
      significance:
        'The reader meets the men as figures of fun before learning they nearly died, which frames everything that follows.',
    },
    {
      where: 'Lines 4-9 (paragraphs 2-3)',
      title: 'Near-tragedy and rescue',
      summary:
        "The news itself: the day before, the men's helicopter came down in the sea off Antarctica. A Chilean naval ship rescued them nine hours later, after an operation that started with Brooks phoning his wife and involved the Royal Navy, the RAF and the British coastguard.",
      setting: 'The sea off Antarctica',
      who: ['Steve Brooks', 'Quentin Smith', 'Jo Vestey', 'The rescuers'],
      quote: 'almost led to tragedy',
      themes: ['Heroism or recklessness', 'Cost and public responsibility'],
      tension: 4,
      significance:
        'Farce and tragedy sit in consecutive sentences, so the reader is unsure whether to laugh or fear, and the services named hint at the bill.',
    },
    {
      where: 'Lines 10-18 (paragraphs 4-7)',
      title: 'Resentment, doubt and confusion',
      summary:
        "Morris reports resentment at the cost to British and Chilean taxpayers, experts doubting the use of a small single-engined helicopter, confusion about the men's aim, a website's claim of a pole-to-pole flight, and Brooks's wife's teasing description of the pair.",
      setting: 'Reaction on the evening of the rescue',
      who: ['Steven Morris', 'Jo Vestey', 'Steve Brooks', 'Quentin Smith'],
      quote: 'boys messing about with a helicopter',
      themes: ['Cost and public responsibility', 'Boys, not men', 'Reporting as judgement'],
      tension: 3,
      significance:
        "Four paragraphs of doubt come before the detailed account of the rescue, and they supply the headline's key phrase.",
    },
    {
      where: 'Lines 19-32 (paragraphs 8-13)',
      title: 'The rescue, hour by hour',
      summary:
        'At around 1am British time the men ditched 100 miles off Antarctica and took to their liferaft. Brooks rang his wife; signals reached Falmouth coastguard and RAF Kinloss; HMS Endurance sent two Lynx helicopters; a Chilean vessel collected the men at about 10.20am.',
      setting: 'A liferaft in the sea about 36 miles north of Smith Island',
      who: ['Steve Brooks', 'Quentin Smith', 'Jo Vestey', 'The rescuers'],
      quote: 'a wedding present',
      themes: ['Cost and public responsibility', 'Heroism or recklessness'],
      tension: 5,
      significance:
        'The most dangerous moments are told as plain chronology, and the roll-call of rescuers shows the effort the headline says the public funds.',
    },
    {
      where: 'Lines 33-35 (paragraph 14)',
      title: 'A miracle',
      summary:
        "The men had survival suits on and the sky was clear where they came down, yet an unnamed Antarctic explorer told Brooks's wife that surviving at all was a miracle.",
      setting: 'The ditching site, looked back on',
      who: ['Jo Vestey', 'Steve Brooks', 'Quentin Smith'],
      quote: 'nothing short of a miracle',
      themes: ['Heroism or recklessness', 'Experience and expertise'],
      tension: 4,
      significance:
        "Survival is credited to luck rather than skill, just before Morris turns to the men's experience.",
    },
    {
      where: 'Lines 36-45 (paragraphs 15-17)',
      title: "The adventurers' record",
      summary:
        "Morris lists Brooks's adventures in seventy countries, from Everest base camp to the Zambezi and a gorilla's charge in the Congo, his helicopter honeymoon from Alaska to Chile, and Smith's two round-the-world flights and freestyle championship.",
      setting: "The men's past exploits around the world",
      who: ['Steve Brooks', 'Quentin Smith', 'Jo Vestey'],
      quote: 'claims to have been flying since the age of five',
      themes: ['Experience and expertise', 'Boys, not men'],
      tension: 2,
      significance:
        "The article's most admiring passage, which can be read as genuine balance or as a catalogue of stunts.",
    },
    {
      where: 'Lines 46-55 (paragraphs 18-21)',
      title: 'Wrong reasons, again',
      summary:
        "Despite their experience, Morris says, the men have made headlines for the wrong reasons before: in April, Brooks and Graham Stratford's amphibious crossing of the frozen Bering Strait was halted by a Russian threat, though it was meant to show good east-west relations.",
      setting: 'The frozen Bering Strait, on the US-Russian border',
      who: ['Steve Brooks', 'Graham Stratford', 'Quentin Smith'],
      quote: 'hit the headlines for the wrong reasons',
      themes: ['Experience and expertise', 'Heroism or recklessness'],
      tension: 2,
      significance:
        "The story circles back to the farce of the opening, and Morris's “Ironically” shows his own view most openly.",
    },
    {
      where: 'Lines 56-64 (paragraphs 22-24)',
      title: 'The verdicts',
      summary:
        "Günter Endres of Jane's Helicopter Markets and Systems questions taking the R44 on such a long flight over water; the pair's spokesman says nobody knows what went wrong; the Ministry of Defence says the taxpayer will pay and is unlikely to be repaid.",
      setting: 'Expert and official comment',
      who: ['Günter Endres', 'The Ministry of Defence', 'Steve Brooks', 'Quentin Smith'],
      quote: 'pushing it to the maximum',
      themes: [
        'Experience and expertise',
        'Cost and public responsibility',
        'Reporting as judgement',
      ],
      tension: 3,
      significance:
        "The named expert and the official voice answer the men's record and return the article to the bill in its headline.",
    },
    {
      where: 'Lines 65-69 (paragraph 25)',
      title: 'Home the long way',
      summary:
        "The men are on their way to the Chilean base Eduardo Frei to be collected by HMS Endurance. Brooks's wife says they seem well, then jokes about the punishment waiting for them.",
      setting: 'On the way to the Chilean base Eduardo Frei',
      who: ['Jo Vestey', 'Steve Brooks', 'Quentin Smith', 'The rescuers'],
      quote: 'bottoms kicked and be sent home the long way',
      themes: ['Boys, not men', 'Reporting as judgement'],
      tension: 1,
      significance:
        'The last word goes to the wife who supplied the headline, closing the article on an image of naughty schoolboys.',
    },
  ],

  relationships: [
    {
      from: 'Steve Brooks',
      to: 'Quentin Smith',
      kind: 'expedition partners',
      note: 'They share the helicopter and the headlines, and Smith flew air back-up on the Bering Strait attempt, so the article presents them as a double act whose plans go wrong together.',
    },
    {
      from: 'Steve Brooks',
      to: 'Jo Vestey',
      kind: 'husband and wife',
      note: "He rings her from the liferaft, the call the article says began the rescue; his emergency watch was a wedding present, and they honeymooned by helicopter. Her relieved, teasing words frame the article, making her his closest ally and, in Morris's hands, his most damaging critic.",
    },
    {
      from: 'Steven Morris',
      to: 'Jo Vestey',
      kind: 'reporter and source',
      note: "Morris quotes her three times and gives her the headline's phrase and the last word, using her humour to carry a judgement he never states himself.",
    },
    {
      from: 'Steven Morris',
      to: 'Steve Brooks',
      kind: 'reporter and subject',
      note: "Morris sets out Brooks's record in full but never quotes him directly: Brooks is described, listed and judged, never allowed to explain himself.",
    },
    {
      from: 'Günter Endres',
      to: 'Quentin Smith',
      kind: 'expert critic and experienced pilot',
      note: "The specialist's doubt about the R44 comes after Smith's flying record and the Bering Strait story, so expertise in the machine is set above years of experience in the air.",
    },
    {
      from: 'The rescuers',
      to: 'Steve Brooks',
      kind: 'rescuers and rescued',
      note: 'At the moment of rescue the men are acted upon, plucked from the sea and picked up, while HMS Endurance steams to the scene: the heroic role an adventure story would give the explorers passes to the coastguard, the navies and the RAF.',
    },
    {
      from: 'The Ministry of Defence',
      to: 'The rescuers',
      kind: 'official voice and the rescue services',
      note: "The ministry confirms that the public pays for the rescue, as is normal, turning the rescuers' work into the bill of the headline. It speaks about the bill as a whole, although not every service named is a British military one: the coastguard is a civilian service, and the ship that picked the men up was Chilean.",
    },
    {
      from: 'Steve Brooks',
      to: 'Graham Stratford',
      kind: 'fellow explorers',
      note: 'Their halted Bering Strait crossing is the farce of the opening line, recalled later to show that the new crash fits a pattern.',
    },
  ],

  compareWith: [
    {
      title: 'From 127 Hours: Between a Rock and a Hard Place (Aron Ralston)',
      href: '/igcse/edexcel-lang/anthology/127-hours',
      reason:
        "Ralston tells his own story of a boulder crushing his hand in a canyon after telling no one where he was going, so it pairs well for comparing a first-person account of risk with Morris's outsider's judgement of it.",
    },
    {
      title: "From The Explorer's Daughter (Kari Herbert)",
      href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
      reason:
        'Herbert is also in a polar landscape, but she writes from inside it, weighing her own feelings about a narwhal hunt, which gives a sharp contrast of perspective on people in an extreme environment.',
    },
    {
      title: "Young and dyslexic? You've got it going on (Benjamin Zephaniah)",
      href: '/igcse/edexcel-lang/anthology/young-and-dyslexic',
      reason:
        "It is also a Guardian piece, one the anthology says was adapted from Zephaniah's contribution to a book, but he writes in the first person about his own life and argues a case, so it shows a different way newspaper writing shapes a reader's view.",
    },
    {
      title: 'From A Game of Polo with a Headless Goat (Emma Levine)',
      href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
      reason:
        "Levine also watches people take risks for excitement, at a donkey race in Karachi, but she joins the chase herself, so her involved stance contrasts with Morris's detached scepticism.",
    },
  ],

  // Nothing in the text calls for an advisory: it reports a rescue in which
  // nobody is hurt, with no violence, death or other listed theme.
  contentGuidance: [],

  native: {
    context: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
    structureForm: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
  },

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, pages 8-9: the prescribed adapted text. Fetched 25 September 2026, byte-identical to the copy read on 19 September for src/lib/board/edexcel-igcse-anthology.ts. Every quotation, speaker and line number in this guide was checked against it, and line numbers were mapped from the printed margin numbers. Its note dates the original article 28 January 2003.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'The same anthology, Acknowledgements page: names the source as The Guardian, 28/01/2003, and the copyright holder as Guardian News & Media Ltd.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE in English Language A (4EA1) specification, Issue 7 (August 2025), Paper 1 assessment overview: Section A pairs a Part 1 anthology text with one previously unseen extract, and candidates are given the anthology text in the examination. Re-read 26 September 2026 at this address, whose filename still says Issue 6 although the document body says Issue 7.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Specification%20and%20sample%20assessments/9781446954379-int-gcse-englang-a-iss6-02-02-2023.pdf',
    },
    {
      label:
        "Avaunt Magazine, profile of Quentin Smith: the January 2003 flight was on its way to a South Pole landing attempt after an earlier North Pole landing; more than nine hours in the liferaft; rescue by a Chilean naval ship; says Smith activated his own emergency watch, where the article credits Brooks's. Its date for the North Pole landing (October 2002, three months earlier) disagrees with the Aviation Safety Network record (late June 2002), so the guide gives no date.",
      url: 'https://avauntmagazine.com/quentin-smith/',
    },
    {
      label:
        'Europa Star, February 2003: the two pilots were located by their Breitling Emergency watches, which transmit on the aviation distress frequency of 121.5 MHz.',
      url: 'https://www.europastar.com/news/2037835-helicopter-crash-in-the-antarctic-pilots-located.html',
    },
    {
      label:
        'Aviation Safety Network record, Accident Robinson R44 G-NUDE, Monday 27 January 2003. The live page refuses automated access; it was read on 25 September 2026 in the Wayback Machine copy of 4 January 2024. It says the helicopter ditched 36 nautical miles north-west of Smith Island in the South Shetlands, quotes the AAIB report, and dates the North Pole landing to late June 2002. Consistent with the article, dated the 28th, saying the crash was yesterday. The guide states no cause for the ditching, because the article says none was known.',
      url: 'https://aviation-safety.net/wikibase/174032',
    },
    {
      label: 'Wikipedia, Robinson R44: a four-seat, single-engined piston helicopter.',
      url: 'https://en.wikipedia.org/wiki/Robinson_R44',
    },
    {
      label:
        'Wikipedia, HMS Endurance (A171): Royal Navy ice patrol ship in service 1991-2008, carrying two Lynx helicopters.',
      url: 'https://en.wikipedia.org/wiki/HMS_Endurance_(A171)',
    },
    {
      label:
        'Wikipedia, Janes Information Services: founded in 1898 by Fred T. Jane; publisher of reference works on defence and aviation.',
      url: 'https://en.wikipedia.org/wiki/Jane%27s_Information_Group',
    },
    {
      label: 'Muck Rack, profile of Steven Morris: a Guardian news reporter.',
      url: 'https://muckrack.com/stevenmorris20',
    },
  ],
}
