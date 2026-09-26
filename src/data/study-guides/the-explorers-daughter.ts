import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * From The Explorer's Daughter, Kari Herbert. A SUPPLEMENT, mounted below the
 * existing page at /igcse/edexcel-lang/anthology/the-explorers-daughter, which
 * keeps its structure notes and glossary (see `native`).
 *
 * Every quotation was copied from the prescribed text itself: the Pearson
 * Edexcel International GCSE English Anthology, Issue 8 (February 2026), pages
 * 6 and 7, read from Pearson's own PDF on 25 September 2026 and extracted twice,
 * with pdftotext and with PyMuPDF, which agreed on every quoted phrase. Line
 * references follow the anthology's own marginal numbering (lines 1 to 64).
 * No second published copy of the extract could be consulted, because the web
 * search budget for the session was spent; the anthology is the exam board's
 * own text of the extract, so it is the wording that matters for the exam.
 *
 * The extract is short (976 words by the validator's count, which splits
 * hyphenated words), so the page may quote only a tenth of it, 97 words, in
 * total. Every quoted phrase in the prose below repeats, or sits inside, a key
 * quotation or an annotated phrase, except three single words ("Eskimos", "us",
 * "we"), so that the budget is spent on phrases that are analysed rather than
 * scattered. Counted with whole-word matching the page quotes 96 words; the
 * validator reports fewer because its substring match hides "us" and "we".
 * There is no room to add a quotation without removing one.
 *
 * Fact-checked on 25 September 2026 against a fresh download of the same
 * Pearson PDF: every quotation and line reference confirmed. Changed then:
 * "clubbed" paraphrases became "beaten" (the text says battering); the 1953
 * relocation lost its disputed "winter" and head count; Inuktun is no longer
 * called a dialect of Greenlandic (sources disagree); the tusk paragraph now
 * notes that Herbert's claim that narwhal never use it on prey was challenged
 * by drone footage in 2016.
 *
 * Checked again on 26 September 2026, against another fresh download of the
 * Pearson PDF and a second published copy of the extract: every quotation, line
 * and paragraph reference confirmed, and the 976-word count reproduced. Changed
 * then: the overview no longer says Herbert wills the hunter to survive (she urges
 * him on, and wills the whales to survive); the Trans-Arctic crossing lost its
 * "sixteen months", because accounts of its length differ (the review cited
 * says sixteen, Wikipedia's account suggests nearer fifteen); the
 * Thule entry now says that the anthology's Thule is the community around
 * Qaanaaq, since the old settlement of that name was emptied in 1953 and a reader
 * could otherwise place Herbert beside the air base; and the note on how the text
 * is examined now says that the June 2026 anthology text was 127 Hours, not this.
 *
 * WHERE THIS DISAGREES WITH THE PAGE ABOVE IT, and the extract bears this out:
 * the hunt is told in the past tense, not the present; the extract contains no
 * reflections on Herbert's childhood (only the anthology's introduction mentions
 * it); its first sentence already names the hunters; and its shortest paragraphs
 * are informational, not reflective.
 */
export const guide: StudyGuide = {
  slug: 'the-explorers-daughter',
  title: "From The Explorer's Daughter",
  author: 'Kari Herbert',
  form: 'non-fiction',
  scope:
    "The extract printed on pages 6 and 7 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 1: 64 numbered lines in seven paragraphs, with an introductory note and six glossed words. It is not the whole of Herbert's memoir, which is book-length; this guide covers only what the anthology prints, and every line reference follows the anthology's own numbering.",
  rights: {
    status: 'copyright',
    acknowledgement:
      "© Kari Herbert 2004. From The Explorer's Daughter, published by Penguin, as printed in the Pearson Edexcel International GCSE English Anthology. Short quotations are used for criticism and review.",
  },
  workLength: {
    words: 976,
    lines: 64,
    basis:
      'Counted from the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), pages 6 and 7: the body of the extract only, 64 numbered lines, excluding the introductory note above it, the six glossary footnotes and the line numbers. Ellipses and dashes are not counted as words.',
  },

  overview: {
    summary: [
      "From The Explorer's Daughter is a 64-line extract, printed on pages 6 and 7 of the anthology, from Kari Herbert's 2004 memoir of returning to the Arctic where she spent her earliest years. The anthology's introduction explains that she lived among the Inughuit as a small child and went back in 2002, staying near Thule in North Greenland. The extract covers a single summer evening on the Inglefield Fjord, when the narwhal return and the hunters go out in their kayaks while Herbert watches from a lookout on the shore.",
      'It moves through four kinds of writing. It opens with description: the fjord in golden evening light, where distances are so deceptive that she wonders whether the whales are real. It pauses for information, explaining where narwhal live and how their mattak (the fatty skin), meat and tusk have kept the hunters alive. It returns to the scene as the women watch their husbands, and one hunter, far from land in a kayak, raises his harpoon beside two huge narwhal, the moment at which Herbert finds herself urging the man on and, at the same time, willing the whales to escape. It ends with argument: she names her dilemma, repeats the question she is so often asked about eating seal, and answers it with facts about how the Inughuit hunt and why they must.',
      "The extract never says whether the hunter's harpoon strikes. That silence is the key to reading it. Herbert's reason reaches a firm conclusion, that hunting is still a necessity, but her feeling is left exactly where the action stopped, split between hunter and hunted. The strongest answers show how her language and structure hold both, and argue about which has the last word. This guide argues that the argument wins the ending but the dilemma wins the extract: the final sentence closes the case, yet the paragraph before it is the one a reader remembers.",
    ],
  },

  context: [
    {
      heading: "Kari Herbert, the explorer's daughter",
      body: 'Kari Herbert was born in 1970, the elder daughter of the polar explorer Sir Wally Herbert and his wife Marie. At ten months old she was taken by her parents to northwest Greenland, where the family lived on Herbert Island (the name is a coincidence) among the Polar Inuit, the people the anthology calls the Inughuit. Her first language was Inuktun, the language of the Polar Inuit. That childhood explains her unusual position in the extract: she is neither a tourist nor a member of the community, but someone returning to a place that shaped her. She has since worked as a travel writer and photographer, and has written and co-written books on exploration, including one on the women behind the great polar explorers.',
    },
    {
      heading: "Her father's expedition",
      body: "The book's title points to Wally Herbert (1934 to 2007). In 1968 and 1969 he led the British Trans-Arctic Expedition, a crossing of the frozen Arctic Ocean from Alaska to Spitsbergen that took well over a year, with three other men and teams of dogs, and in April 1969 his party became the first generally recognised as having reached the North Pole on foot. He was knighted in 2000. The extract itself never mentions him, which is worth noticing: the explorer's daughter is here not to conquer the Arctic but to watch, and to understand the people who live in it.",
    },
    {
      heading: 'The book and the extract',
      body: "The Explorer's Daughter was published by Viking in 2004 and later in paperback by Penguin, and was chosen as Book of the Week by BBC Radio 4. It describes Herbert's return, alone, to the Arctic of her childhood in 2002. The anthology prints only a short section of it. The ellipses at lines 12, 17, 21, 35, 41 and 43 appear to mark places where words have been cut, so the prescribed text is this edited extract rather than the book. The anthology glosses six words at the foot of page 6: pods, fjord, mattak or blubber, scurvy, tupilaks and predilection.",
    },
    {
      heading: 'The Inughuit, Thule and Qaanaaq',
      body: "The Inughuit are the northernmost Inuit people, living in the far northwest of Greenland; in 2010 they numbered about 800, and their language is Inuktun. Thule was the European name for Uummannaq, where Knud Rasmussen set up a trading post in 1910, beside what is now the American air base called Pituffik Space Base. In 1953, because of that base, the Danish government forcibly moved the settlement's inhabitants, more than a hundred people, north to Qaanaaq within four days, a relocation that badly damaged the community's cultural and social life; Qaanaaq was at first known as New Thule. It stands at the northern entrance to the Inglefield Fjord, where the extract takes place, and it is the town Herbert names when she explains that only one supply ship a year gets through the ice. So when the anthology's introduction calls Thule a remote settlement, and when Herbert writes of the hunters of Thule and the food in Thule, the name seems to mean this community around Qaanaaq and the Inglefield Fjord, not the old site beside the air base, which was emptied in 1953.",
    },
    {
      heading: 'How the narwhal is hunted',
      body: 'Around Qaanaaq, narwhal are still hunted in the traditional way. When whales are spotted from the shore, hunters set off very quietly in kayaks and throw a hand harpoon whose head is tied to an inflated sealskin float, so that the wounded whale cannot escape; only then is it shot. They harpoon first because a narwhal that is shot sinks quickly and is lost, and some old local bylaws in the Qaanaaq area call for a hand harpoon before shooting. Hunters also restrict motorboats in the fjord so that the whales are not harassed. This helps to explain three details in the extract: why the hunters keep so still (lines 43 to 44), why Herbert stresses that the nearest hunter has no rifle, since a harpooned whale is normally finished with a shot, and what the bladder that goes with his harpoon is most likely for (lines 49 to 50).',
    },
    {
      heading: 'The narwhal',
      body: 'The narwhal is a toothed whale of Arctic waters. Its tusk is in fact a long canine tooth growing from the left side of the upper jaw, found mostly in males. Scientists still disagree about what it is for: suggestions include feeding, fighting, attracting mates and sensing the water. At lines 27 to 31 Herbert hedges with the verb seems when she says its main use is stirring the sea bed to catch halibut, but she states flatly that narwhal do not use it to catch or attack prey, and drone footage filmed in 2016, after the book, showed narwhal using their tusks to tap and stun Arctic cod. Her science reflects what was known and said when she wrote; in the exam you are analysing how she presents the narwhal, not checking her biology. Her point about vitamin C is supported: narwhal skin is an important source of it in a place where fresh fruit and vegetables are hard to come by.',
    },
    {
      heading: 'Seals, fur and the outside world',
      body: 'When Herbert refers to images of seals being beaten for their fur (lines 56 to 58), she does not say which images she means. The best known came from the protests against the commercial hunting of seal pups off Canada, which grew from the late 1960s. In 1983 the European Economic Community banned imports of the skins of certain seal pups, including the white-coated pups of the harp seal. In 2009, after the book was published, the European Union banned trade in seal products but made an exception for products of hunts by Inuit and other indigenous communities. In effect the law drew a line much like the one Herbert draws in her final paragraph, between killing for fur or sport and hunting to live.',
    },
    {
      heading: 'A word to handle with care',
      body: "Herbert uses the word “Eskimos” once, at line 20, and the anthology's introduction notes that the Inughuit are sometimes called by that name. In Greenland and Canada the word is now widely regarded as offensive, and it has largely been replaced by Inuit or by the names of particular peoples, such as the Inughuit; the Inuit Circumpolar Conference (now Council) adopted Inuit as its term in 1977. In your own writing use Inughuit or Inuit, and quote the older word only if you are commenting on it.",
    },
    {
      heading: 'How the extract is examined',
      body: 'The extract is one of the ten Part 1 texts for Pearson Edexcel International GCSE English Language A, and it is examined in Paper 1, Section A, alongside an unseen passage. In the June 2026 paper, for example, the anthology text set was a different one, the extract from 127 Hours, printed in the Source Booklet as Text Two; one question asked how its writer uses language and structure, and the final question in the section asked candidates to compare how the writers of both texts present their ideas and perspectives. That paper printed its anthology text as an adapted version, and candidates may not bring the anthology into the exam, so knowing the extract well matters more than memorising it word for word.',
    },
  ],

  themes: [
    {
      title: 'The beauty of the Arctic',
      body: 'Herbert opens not with hardship but with wonder. The fjord at evening becomes a “glittering kingdom”, the light turns “butter-gold”, and the plumes of spray make a “spectral play of colour”. This is the language of fairy tale and painting, and it makes the reader see the hunt first as a spectacle. Yet the beauty is unstable: distances deceive, and the narwhal might be “mischievous tricks of the shifting light”. One reading is that Herbert wants the reader to fall for the place before being asked to judge its people; another is that the beauty is there to make the killing harder to accept. The first is more convincing, because the extract ends by defending the hunters, and a reader who has shared the view is readier to share her understanding. Notice, too, that the admiring gaze belongs to the watchers on the shore: the text never tells us what the hunters see.',
    },
    {
      title: 'Survival and necessity',
      body: 'Beneath the description runs a steady argument that the hunt is about staying alive. The long central paragraph (lines 17 to 32) turns the narwhal into a list of needs met: vitamins where no fruit or vegetables grow, protection from scurvy, light and heat for centuries, meat for people and dogs, ivory for tools and charms. The women watching from the knoll (lines 33 to 40) add money: a catch means food for the family and meat to sell. By the last paragraph the argument is explicit, and the final sentence, “Hunting is still an absolute necessity in Thule”, is flat, factual and hard to answer. The word “still” matters. Herbert seems to be answering readers who assume modern supplies have made hunting a choice, and her details of a single supply ship each year and a small plane twice a week are there to show that imports can meet only part of the need.',
    },
    {
      title: 'A divided heart',
      body: "The emotional centre of the extract is a sympathy that will not take sides. As the hunter aims, Herbert's “heart leapt for both hunter and narwhal”: she urges the man on and admires his courage, and in the next breath wants the whale “to dive, to leave, to survive”. The following paragraph names this a “dilemma” and says it lasted her whole stay in Greenland. Some readers argue that the final paragraph resolves the dilemma in the hunters' favour. A more careful reading is that it resolves the argument but not the feeling: her reason accepts that hunting is necessary, but she never says she stopped hoping the narwhal would escape, and the extract never shows the kill. The divided heart is what makes her a trustworthy guide, because she admits the reaction many readers share before asking them to think past it.",
    },
    {
      title: 'Insiders and outsiders',
      body: "Herbert writes from an unusual position. The anthology's introduction explains that she lived among the Inughuit as a small child, so she is not a tourist; but she watches from the lookout with the women, not from a kayak, and she writes for readers far from the Arctic. Her pronouns show her moving between the two sides. On the shore she is one of “us”, the watchers; in the final paragraph she includes herself in the “we” who demand that beautiful sea mammals be protected, and then answers that outside voice, the one asking “How can you possibly eat seal?”, with facts about how the Inughuit actually hunt and live. The strongest reading is that she acts as a translator between cultures: she feels as an outsider feels, then explains as an insider knows.",
    },
    {
      title: 'Courage and respect',
      body: "Herbert's respect is for the hunters' skill and nerve rather than for hunting in the abstract. She stresses the odds: the nearest hunter is far from land in a fragile kayak with no rifle, only a harpoon, and could be overturned and drowned; the narwhal can hear a paddle from far away, so the hunters must keep perfectly still. Her verdict, that it was a “foolhardy exercise and one that could only inspire respect”, holds criticism and admiration in one sentence. She extends that respect to the narwhal as well, describing an intelligent animal with keen senses that talks to others of its kind under the water. Respect for both sides is what separates her writing from a hunting story or a campaign leaflet: neither the hunter nor the whale is reduced to a villain or a victim.",
    },
  ],

  characters: [
    {
      name: 'Kari Herbert',
      role: 'The writer and first-person narrator, watching from the lookout on the shore',
      body: "Herbert narrates in the first person, but for most of the extract she is a watcher rather than a doer: she scrambles back up to the lookout, watches from the same knoll as the women, and describes what she sees. She is also an explainer, stepping back from the scene to set out the narwhal's range, uses and senses in a confident, factual voice. At the climax she becomes the most emotional presence in the text, torn between hunter and whale, and in the last paragraph she becomes an advocate, answering the critics of polar hunting. A strong answer tracks these four roles, watcher, explainer, feeler and arguer, because the shifts between them are the structure of the extract.",
    },
    {
      name: 'The hunters',
      role: 'The men of Thule, spread across the fjord in kayaks',
      body: 'The hunters are never named and never speak. Herbert sees them from a distance, dotted around the fjord, motionless and lit by the evening sun; one is smoking a pipe. Their stillness is explained later: the narwhal hear so well that even the sound of a paddle would warn them. Presenting them as a group, like a net across the water, emphasises co-operation and shared purpose rather than individual glory. One criticism worth weighing is that the extract gives them no voice, so the case for hunting is made by Herbert on their behalf. A counter-argument is that she is honest about watching from the shore, and does not pretend to know their thoughts.',
    },
    {
      name: 'The nearest hunter',
      role: 'The one hunter who gets close to a pair of narwhal (lines 45 to 51)',
      body: "He is the only person the extract shows in action; everyone else is waiting or watching. He gently lifts his harpoon and aims at two huge narwhal, and Herbert freezes the moment there. She lists what he lacks: no rifle, only a single harpoon with two heads and one bladder, most likely the inflated float that stops a harpooned whale escaping. That makes him brave rather than merely lucky. The gentleness matters too: after the explanation of the narwhal's hearing, the reader understands that care, not force, is his skill. The extract never tells us whether he succeeds.",
    },
    {
      name: 'The women on the lookout',
      role: 'Wives and family members watching from the knoll',
      body: "The women turn the hunt from a spectacle into a family matter. Each follows her own husband or relative through binoculars, now and then spinning round when another woman gasps at the sight of a hunter near a narwhal, and Herbert explains why it matters so much: a catch means food and, if there is meat and mattak to spare, money the family badly needs. Herbert watches from the same lookout, which places her with the people who have most at stake but least control. Their tension is the reader's cue for how to feel as the nearest hunter takes aim.",
    },
    {
      name: 'The narwhal',
      role: 'The hunted whale, and the other figure Herbert sympathises with',
      body: "The narwhal is presented in three ways that do not fit neatly together. At first it is almost unreal, a flicker in the light that might not exist. In the information paragraphs it is an animal studied with care: its migrations, its single tusk, its liking for Arctic halibut, its sharp hearing, and the way the whales talk to one another under the water. And for the hunters it is life itself, the source of food, vitamins, light, heat and tools. Herbert's refusal to settle on one view is exactly her dilemma: it is a creature with its own life and a resource a community cannot do without.",
    },
    {
      name: 'The outside critics',
      role: 'The unnamed people who ask Herbert how anyone can eat seal',
      body: 'They appear only as a question Herbert has been asked repeatedly, but they matter because the last paragraph is written to answer them, and many readers will recognise themselves in them. Herbert treats them fairly. She concedes that images of seals being beaten for their fur did the case for polar hunting no good, then draws the distinction the critics miss: the Inughuit do not kill that way, do not kill for sport, and waste nothing of what they kill.',
    },
  ],

  keyQuotes: [
    {
      text: 'glittering kingdom',
      where: 'Paragraph 1, line 6 (page 6)',
      analysis:
        'A metaphor that turns a cold fjord into a royal realm. “Glittering” suggests jewels and light, and “kingdom” implies a place with its own order and rulers, which may be the narwhal and the hunters rather than the watching visitor. It sets a tone of wonder, so the later arguments about survival are heard by a reader who already values the place. It shares a sentence with her “sharp intake of breath”: the landscape literally takes her breath away.',
    },
    {
      text: 'butter-gold, glinting off man and whale',
      where: 'Paragraph 1, line 8 (page 6)',
      analysis:
        'The compound adjective “butter-gold” is warm, soft and homely, an unexpected image in the Arctic, and it makes the evening light feel rich and comforting. The light falls equally on “man and whale”: before any conflict begins, Herbert places hunter and hunted in the same frame and the same glow. That even-handedness foreshadows lines 45 to 51, where she cannot wish success for one without wishing failure for the other.',
    },
    {
      text: 'mischievous tricks of the shifting light',
      where: 'Paragraph 1, line 12 (page 6)',
      analysis:
        'Personification: the light is “mischievous”, a playful trickster, and Herbert wonders whether the narwhal exist at all. The effect is dreamlike and slightly unsettling. It may also plant an idea that matters later: in the Arctic, appearances deceive, and people who judge from a distance, as the critics in the last paragraph do, may not see what is really there. The first paragraph ends on uncertainty rather than on action.',
    },
    {
      text: 'essential contributor to the survival',
      where: 'Paragraph 3, line 17 (page 6)',
      analysis:
        'The report-like register that began at line 13 is at its most formal here. After the lyrical opening, Herbert writes like a textbook: abstract, formal vocabulary, then minerals, vitamins and scurvy. The shift is deliberate. Having made the reader feel the beauty, she now makes them understand the need, and the Latin-derived, almost scientific wording gives her claims authority. The noun “survival” anticipates her final paragraph: this is not sport but life.',
    },
    {
      text: 'spread like a net',
      where: 'Paragraph 4, line 40 (page 7)',
      analysis:
        'A simile that presents the hunters as one co-ordinated body closing around the whales. A net is patient and collective; no single strand catches anything alone. Coming in the same sentence as her comparison of the scene to a vast game played on water, it raises the tension and hints at how little escape the narwhal have. It also quietly corrects any idea of the hunt as a reckless free-for-all: this is organised, skilled work.',
    },
    {
      text: 'my heart leapt for both hunter and narwhal',
      where: 'Paragraph 6, lines 46 to 47 (page 7)',
      analysis:
        'The turning point of the extract. The metaphor of the leaping heart shows an instinctive reaction, faster than thought, arriving at the very instant the hunter aims. The key word is “both”: Herbert refuses to choose, and placing “hunter” and “narwhal” side by side gives them equal weight. Many answers call this sympathy for the whale; it is more accurate to call it sympathy for two lives at risk, since the hunter could drown.',
    },
    {
      text: 'foolhardy exercise and one that could only inspire respect',
      where: 'Paragraph 6, line 50 (page 7)',
      analysis:
        'A balanced sentence that holds two judgements at once. “Foolhardy” means recklessly bold, a criticism; “inspire respect” is admiration. Herbert does not cancel one with the other: the danger is exactly why the courage deserves respect. The word “only” leaves no room for disagreement. Use this quotation to show that her attitude to the hunters is complex rather than simply approving.',
    },
    {
      text: 'to dive, to leave, to survive',
      where: 'Paragraph 6, line 51 (page 7)',
      analysis:
        'A tricolon of infinitives that builds to the verb that matters most, “survive”. The rhythm quickens like a heartbeat, and the list reads as a silent plea. It follows the pivot “And yet” in line 50, so the sentence performs the reversal it describes, swinging her loyalty from the man to the whale. The final verb names the same need she will defend for the hunters in the next paragraph.',
    },
    {
      text: 'one cannot afford to be sentimental',
      where: 'Paragraph 7, line 55 (page 7)',
      analysis:
        'The impersonal pronoun “one” turns a private feeling into a general rule, and the verb “afford” presents sentiment as a luxury the Arctic cannot pay for. It is a sharp change from the emotional paragraph before it, as if she were correcting herself. One reading is that she is rejecting her own reaction; a better one is that she is saying feeling cannot decide how people live in a place this harsh, while admitting she still feels it.',
    },
    {
      text: 'How can you possibly eat seal?',
      where: 'Paragraph 7, lines 55 to 56 (page 7)',
      analysis:
        "A question other people have put to Herbert many times, rhetorical in spirit because it expresses disbelief rather than asking for information. The adverb “possibly” carries the questioner's incredulity. By voicing the objection herself, in its strongest form, she shows she understands it, and then earns the right to answer it. The answer follows at once: a concession about the images of seals being beaten for their fur, then the facts about how the Inughuit hunt.",
    },
    {
      text: 'Hunting is still an absolute necessity in Thule',
      where: 'Paragraph 7, lines 63 to 64 (page 7), the last sentence',
      analysis:
        'A short declarative sentence that ends the extract on a flat statement of fact. The adjective “absolute” allows no exception, and “still” answers readers who assume modern supplies have made hunting unnecessary, an assumption her details of one supply ship and a twice-weekly plane have just been used to challenge. Ending on the place name reminds the reader that the argument concerns one community, not hunting everywhere. It closes the argument, though arguably not the dilemma.',
    },
  ],

  extracts: [
    {
      title: 'The view from the lookout',
      where: 'Paragraph 1, lines 1 to 12 (page 6)',
      pointer:
        'Lines 1 to 12, the whole first paragraph: from the opening sentence, when the narwhal are spotted again, to the ellipsis at the end of line 12, at the top of page 6.',
      summary:
        "Two hours after the last hunters have come back and eaten, narwhal are sighted again, much closer this time. Herbert climbs back to the lookout and describes the fjord in the evening light: two pods of whales circling, hunters dotted around the water, smoke drifting from one man's pipe. From a distance the hunters seem close enough to touch the whales, yet they do not move, and Herbert begins to wonder whether the narwhal are real or a trick of the light.",
      annotations: [
        {
          phrase: 'spectral play of colour',
          note: '“Spectral” suggests both the colours of a spectrum and a ghost, so the spray is beautiful and faintly unreal, preparing the doubt at the end of the paragraph.',
        },
        {
          phrase: 'glittering kingdom',
          note: 'The fjord becomes a realm of jewels and light. The fairy-tale metaphor makes the reader see a spectacle before seeing a hunt.',
        },
        {
          phrase: 'sharp intake of breath',
          note: 'A physical reaction rather than a named emotion. Showing her awe through the body makes it feel involuntary, and therefore genuine.',
        },
        {
          phrase: 'Distances are always deceptive',
          note: 'A general statement in the present tense, the voice of someone who knows the Arctic, and a hint that first impressions of this place and its people can mislead.',
        },
      ],
      question:
        'How does Herbert use language in lines 1 to 12 to present the Arctic landscape and the start of the hunt?',
    },
    {
      title: 'The hunter takes aim',
      where: 'Paragraph 6, lines 45 to 51 (page 7)',
      pointer:
        'Lines 45 to 51, the sixth paragraph: from one hunter almost on top of a pair of narwhal to Herbert willing the whales to escape, in the middle of page 7.',
      summary:
        "One hunter is almost on top of two very large narwhal. He gently picks up his harpoon and aims, and at that instant Herbert's sympathy goes out to both man and whale. She silently urges him on, stressing how exposed he is with no rifle and only one harpoon, and admires his nerve; then she finds herself also willing the narwhal to get away. The extract never tells us what happens next.",
      annotations: [
        {
          phrase: 'they were huge',
          note: "A blunt, plain clause straight after the informational passage on the narwhal's hearing. Simple words make the size of the whales, and the danger to the hunter, immediate.",
        },
        {
          phrase: 'my heart leapt for both hunter and narwhal',
          note: 'The emotional climax. The word “both” balances her sympathy exactly and stops the reader from settling on one side.',
        },
        {
          phrase: 'in a flimsy kayak',
          note: 'The adjective “flimsy” stresses how thin the line is between hunting and drowning, turning the hunt into a test of courage rather than an easy kill.',
        },
        {
          phrase: 'And yet',
          note: 'The hinge of the paragraph. Two short words swing her loyalty from the hunter to the narwhal, so the reader feels the reversal happen.',
        },
        {
          phrase: 'to dive, to leave, to survive',
          note: 'Three infinitives build like a silent prayer for the whale, and the last, “survive”, echoes the argument of the whole extract.',
        },
      ],
      question:
        'How does Herbert use language and structure in lines 45 to 51 to create tension and to show her conflicting feelings?',
    },
    {
      title: 'Answering the critics',
      where: 'Paragraph 7, lines 52 to 64 (page 7)',
      pointer:
        'Lines 52 to 64, the final paragraph: from Herbert naming her dilemma to the last sentence of the extract, at the foot of page 7.',
      summary:
        "Herbert says her dilemma lasted her whole stay in Greenland. She sets out what she understands about Arctic life and the hunters' needs, then repeats the question she is often asked about eating seal. She concedes that images of seals being beaten for their fur have not helped the case for polar hunting, but insists that the Inughuit neither kill that way nor for sport, and that they use all of each animal. Most of Thule's food still comes from its own hunters and fishermen, she explains, and imports can supply only part of it, because only one supply ship a year reaches Qaanaaq and a small plane comes twice a week.",
      annotations: [
        {
          phrase: 'This dilemma stayed with me',
          note: 'Naming the feeling as a dilemma admits there is no painless answer, and the sentence shows that it lasted far beyond this one evening.',
        },
        {
          phrase: 'How can you possibly eat seal?',
          note: "She voices the critics' rhetorical question herself, with its incredulous “possibly”, so that she can answer it rather than ignore it. That is both fair and persuasive.",
        },
        {
          phrase: 'one cannot afford to be sentimental',
          note: 'An impersonal general truth that frames feeling as a luxury. It marks her turn from emotion to argument.',
        },
        {
          phrase: 'Hunting is still an absolute necessity in Thule',
          note: 'A short declarative closing sentence. After the facts about supplies, it lands as a conclusion the reader has been led towards rather than an opinion.',
        },
      ],
      question:
        'How does Herbert use language and structure in the final paragraph to persuade the reader that hunting in Thule is necessary?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Metaphor',
      example: '“glittering kingdom” (line 6), for the fjord at evening',
      effect:
        'Transforms a cold, remote inlet into a place of splendour and order. It makes the reader value the landscape, and by implication the life lived in it, before any argument begins.',
    },
    {
      technique: 'Colour imagery and a compound adjective',
      example: '“butter-gold” (line 8), for the evening light falling on hunters and whales',
      effect:
        'An unexpectedly warm, homely image in a frozen setting. It softens the scene and lights hunter and whale equally, which quietly prepares her even-handed sympathy.',
    },
    {
      technique: 'Personification',
      example: '“mischievous tricks of the shifting light” (line 12)',
      effect:
        'Gives the light a playful will of its own and makes the narwhal seem illusory. It creates a dreamlike mood, and an idea of deceptive appearances that matters when she later answers critics who judge from far away.',
    },
    {
      technique: 'A shift into formal, factual register',
      example:
        'Lines 17 to 32, from “essential contributor to the survival” through minerals, vitamins, scurvy, blubber and the uses of the tusk',
      effect:
        'The move from lyrical description to a report-like voice gives Herbert authority and slows the action, delaying the climax. It also changes what the reader thinks the narwhal is: not only a beautiful animal but a larder, a lamp and a toolbox.',
    },
    {
      technique: 'Parenthesis',
      example:
        'The brackets in lines 22 to 26: a single narwhal feeding a team of dogs for a month, and the admission that the ivory was brittle and not much use as a weapon',
      effect:
        'The brackets add precise, almost offhand detail of the sort an insider knows. Including a drawback, the brittle ivory, makes her account seem balanced and honest rather than a sales pitch.',
    },
    {
      technique: 'Simile',
      example:
        '“spread like a net” (line 40), straight after she compares the scene to a vast game played on water',
      effect:
        'Presents the hunters as one skilled, co-operative body and tightens the sense of the narwhal being surrounded, building tension just before the climax.',
    },
    {
      technique: 'Metaphor of the heart, in the first person',
      example: '“my heart leapt for both hunter and narwhal” (lines 46 to 47)',
      effect:
        'Shows an instinctive, divided feeling. The balanced phrase refuses to take sides and invites the reader to hold both hopes at once.',
    },
    {
      technique: 'Antithesis and a pivoting conjunction',
      example:
        '“foolhardy exercise and one that could only inspire respect” (line 50), followed immediately by “And yet”',
      effect:
        'Places criticism and admiration in the same sentence, then swings to the opposite loyalty. The reader experiences the dilemma as a back-and-forth instead of being told about it.',
    },
    {
      technique: 'Tricolon',
      example: '“to dive, to leave, to survive” (line 51)',
      effect:
        "Three infinitives build to the strongest verb. The rhythm reads as a plea and makes the whale's escape feel as urgent as the hunter's success.",
    },
    {
      technique: 'Rhetorical question and counter-argument',
      example:
        '“How can you possibly eat seal?” (lines 55 to 56), followed by a concession that begins with the word True, then a rebuttal built on negatives',
      effect:
        "By voicing the critics' objection herself, Herbert appears fair, and then she has the last word. The concession about the images of seals being beaten for their fur builds trust before she draws the distinction the critics miss.",
    },
    {
      technique: 'Shifts in tense',
      example:
        'The evening is narrated in the past tense; the facts about the narwhal (lines 13 to 32 and 41 to 43) and her closing argument (lines 52 to 64) are mostly in the present',
      effect:
        "The past tense tells the story of one evening; the present tense states what is always true. Moving her argument into the present makes it sound like permanent fact rather than one visitor's impression.",
    },
    {
      technique: 'A short declarative ending',
      example: '“Hunting is still an absolute necessity in Thule” (lines 63 to 64)',
      effect:
        'A plain statement after long, fact-heavy sentences. Its brevity and the word “absolute” make it sound like the conclusion of the evidence rather than an opinion.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Kari Herbert use language and structure to present her experience of watching the narwhal hunt? You should support your answer with close reference to the extract, including brief quotations.',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          'Open with an overview of the journey: description (lines 1 to 12), information (lines 13 to 32), the watchers and the listening whales (lines 33 to 44), the moment of action (lines 45 to 51) and argument (lines 52 to 64). Say in a sentence what that journey does to the reader.',
          'Analyse the opening: the light imagery of the “glittering kingdom” and “butter-gold” evening, and the doubt in “mischievous tricks of the shifting light”.',
          'Explain the shift into facts at line 13: the formal register, the lists of uses, the brackets. Argue why she stops the action here: it sets out what a catch is worth before the climax.',
          "Show the tension rising through the watchers: the women spinning round at one another's gasps, and the hunters “spread like a net”.",
          'Analyse the climax closely: the heart metaphor, the balanced judgement of the hunter, the pivot “And yet” and the tricolon.',
          'Discuss the ending: the rhetorical question, the concession and rebuttal, and the short final sentence. Judge whether it settles the dilemma, and point out that the outcome of the hunt is never shown.',
          'Throughout, quote briefly, give line numbers, and link every point back to her experience as a watcher.',
        ],
      },
      {
        question:
          'How does the writer use language and structure to present the narwhal? You should support your answer with close reference to the extract, including brief quotations.',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          'Start with the argument that the narwhal is presented in three ways at once: as a vision, as a studied animal and as a means of life.',
          'The vision: the spray catching the light in a “spectral play of colour”, and the suggestion that the whales might not exist at all.',
          "The studied animal: the confident, factual register of lines 13 to 32 and 41 to 43, the whales' range, their hearing and the way they talk under the water, and the careful hedging about the tusk.",
          'The means of life: the listing of what the narwhal provides, food, vitamins, light, heat, tools and income, and the parenthesis about feeding a team of dogs for a month.',
          'The climax: the plain clause “they were huge” and the tricolon “to dive, to leave, to survive”, which give the whale its own will to live.',
          "Conclude that the narwhal is both a creature with its own life and a resource a community needs, and that this double view is the source of Herbert's dilemma.",
        ],
      },
      {
        question:
          "Compare how the writers of From The Explorer's Daughter and From A Passage to Africa present their ideas and perspectives about the people they watch. Support your answer with detailed examples from both texts, including brief quotations.",
        skill:
          'Comparison of ideas and perspectives across two texts (in the exam, the second text is unseen; practising with another anthology text builds the same skill)',
        guidance: [
          "Set out each perspective in a sentence. Herbert is torn between sympathy for the narwhal and understanding of the hunters' need. Alagiah, a BBC television reporter in Somalia in 1991 and 1992, is shaken out of professional detachment by the apologetic smile of one man weakened by hunger.",
          "Compare their positions as observers: Herbert watches from the lookout among the hunters' families; Alagiah tours the huts with his cameraman. Both are watching other people struggle to survive, but Alagiah openly questions what his watching means, while Herbert questions her own feelings.",
          "Compare their descriptive choices: Herbert's beauty and light against Alagiah's deliberately unflinching detail of famine. Explain what each choice does to the reader.",
          "Compare the turning points: the instant the hunter raises his harpoon, and the moment of the smile. Both are brief, and both bring the writer's feelings into the open.",
          "Compare the endings: Herbert argues outwards, answering critics with facts; Alagiah turns inwards, resolving to tell the story well and regretting that he never learned the man's name.",
          'Keep the comparison running through every paragraph with connectives such as whereas, similarly and by contrast, and support both sides with brief quotations.',
        ],
      },
      {
        question:
          'How does Herbert use language and structure to persuade the reader that hunting in Thule is necessary? You should support your answer with close reference to the extract, including brief quotations.',
        skill: 'Language and structure analysis: how a writer builds an argument',
        guidance: [
          'Argue that the persuasion begins long before the last paragraph: the information in lines 13 to 32 prepares the ground by showing everything the narwhal provides.',
          'Analyse the facts and lists: vitamin C where no fruit or vegetables grow, light and heat for centuries, food for people and dogs, tools and charms from the tusk.',
          "Show how the women's watching adds human stakes: food for the family and income from selling mattak and meat.",
          'In the final paragraph, analyse the rhetorical question “How can you possibly eat seal?”, the concession that begins with the word True, and the rebuttal built on negatives: not that method, not for sport.',
          'Comment on the practical evidence of one supply ship a year and a twice-weekly plane, and on the pronouns, which move her from the “we” of the outsiders to explaining what the Inughuit do.',
          'Finish with the short declarative final sentence, and evaluate: is the reader persuaded, and does the paragraph before it, where she wills the whales to escape, make the argument more convincing or less?',
        ],
      },
    ],
    tips: [
      'Get the tenses right. The evening is told in the past tense; the facts about the narwhal (lines 13 to 32 and 41 to 43) and the closing argument (lines 52 to 64) are mostly in the present. The switch is a structural point in itself: the present tense makes her claims sound permanently true.',
      "Do not treat the ellipses as Herbert's pauses or trailing thoughts. At lines 12, 17, 21, 35, 41 and 43 they appear to mark words cut for the anthology, so analysing them as her stylistic choice is likely to be a misreading.",
      'Write about what is missing. The outcome of the hunt is never shown: the extract cuts from the raised harpoon to her dilemma. Explaining why a writer withholds something is a strong structural point.',
      "Keep the focus on methods. The question asks how Herbert presents her experience or feelings, not whether hunting is right. Your own view of hunting earns credit only when it becomes a comment on how she shapes the reader's.",
      'Show the balance. A weak answer says Herbert is against the hunt, or for it. She is both, and the best answers track the swing from one to the other, especially at “And yet” in line 50.',
      'Use the line numbers in the margin to find evidence quickly, and quote short phrases of two to six words. The text is printed for you, so the skill lies in choosing the right words, not in remembering them.',
      'Answer on the version printed in the Source Booklet. The June 2026 paper printed its anthology text as an adapted version, so check that any phrase you quote is on the page in front of you.',
      "In the comparison question, Herbert's perspective is divided and then argued. Decide whether the other writer is certain, divided or changes their mind, and build the comparison around that.",
      'Use Inughuit or Inuit in your own voice. Quote the older word at line 20 only if you are commenting on it.',
    ],
  },

  modelAnswer: {
    question:
      'How does Kari Herbert use language and structure to present her feelings about the narwhal hunt?',
    paragraph:
      'Herbert presents her feelings as divided equally between the hunter and the hunted, and she builds that division into the grammar of lines 45 to 51. At the moment the hunter aims, she writes that “my heart leapt for both hunter and narwhal”: the metaphor of the leaping heart shows sympathy that is instinctive rather than reasoned, and the word “both” refuses to choose a side. She first justifies her support for the man, calling his attempt a “foolhardy exercise and one that could only inspire respect”, a balanced judgement that admits the danger yet turns it into admiration. Then the conjunction “And yet” swings her loyalty back to the animal, and the tricolon “to dive, to leave, to survive” gives the narwhal a quickening sequence of escapes that ends on the one verb that matters most. Structurally, the extract cuts away at this instant: the next paragraph opens on her “dilemma” rather than on the outcome, so the reader, like Herbert, is left suspended between two hopes. This suggests that, however firmly her final sentence argues for the hunt, the feeling itself is never resolved.',
    commentary: [
      'It opens with an argument that answers the question, that her feelings are divided equally, rather than with a technique label or a summary of the extract.',
      'Its quotations are short and embedded, and it analyses single words (“both”, “survive”) rather than paraphrasing whole sentences.',
      'Each technique it names, metaphor, balanced judgement, conjunction and tricolon, is followed straight away by its effect on the reader.',
      'It deals with structure as well as language, as the question requires: the withheld outcome and the move to the next paragraph are treated as choices the writer made.',
      'It ends with a hedged interpretation, introduced by the words This suggests, that links the moment to the whole extract, including the final sentence, which shows a view of the text as a whole.',
    ],
  },

  timeline: [
    {
      where: 'Lines 1 to 12 (paragraph 1)',
      title: 'Narwhal in the fjord',
      summary:
        'Narwhal are spotted again in the evening, much closer this time. Herbert climbs back to the lookout and describes the glittering fjord, the motionless hunters and the light, and wonders whether the whales are real.',
      setting: 'A lookout above the Inglefield Fjord near Thule, North Greenland, in evening light',
      who: ['Kari Herbert', 'The hunters', 'The narwhal'],
      quote: 'glittering kingdom',
      themes: ['The beauty of the Arctic'],
      tension: 2,
      significance:
        'Herbert makes the reader fall for the place before asking them to think about the hunt.',
    },
    {
      where: 'Lines 13 to 32 (paragraphs 2 and 3)',
      title: 'What the narwhal gives',
      summary:
        'The narrative pauses for facts: where narwhal live, their yearly return to the fjord, and how their mattak (the fatty skin), meat and tusk have kept the hunters alive for centuries.',
      setting: 'The fjord, seen through a pause for explanation',
      who: ['The narwhal', 'The hunters'],
      quote: 'essential contributor to the survival',
      themes: ['Survival and necessity'],
      tension: 1,
      significance:
        'The stakes of the hunt are set out before the climax, so the reader knows what a catch means.',
    },
    {
      where: 'Lines 33 to 40 (paragraph 4)',
      title: 'The watchers on the knoll',
      summary:
        'The women follow their husbands through binoculars, gasping when one of them sees a hunter near a whale, because a catch means food and income. Every hunter is now on the water, spread around the sound.',
      setting: 'The knoll of the lookout, crowded with women holding binoculars',
      who: ['The women on the lookout', 'The hunters', 'Kari Herbert'],
      quote: 'spread like a net',
      themes: ['Survival and necessity', 'Courage and respect'],
      tension: 3,
      significance:
        "The hunt becomes a family and community matter, and the tension rises through the watchers' anxiety.",
    },
    {
      where: 'Lines 41 to 44 (paragraph 5)',
      title: 'Keeping still',
      summary:
        'Herbert explains that the narwhal are intelligent, talk to one another under the water and can hear a paddle from far away, which is why the hunters must keep perfectly still.',
      setting: 'The open water of the fjord, where the hunters wait in silence',
      who: ['The narwhal', 'The hunters'],
      themes: ['Courage and respect'],
      tension: 3,
      significance:
        "The explanation turns the hunters' stillness into skill and makes the narwhal an intelligent, worthy opponent.",
    },
    {
      where: 'Lines 45 to 51 (paragraph 6)',
      title: 'The hunter takes aim',
      summary:
        'One hunter is almost on top of two huge narwhal. As he raises his harpoon, Herbert feels for both of them, admiring his courage while silently willing the whales to escape.',
      setting: 'Open water far from land: a single kayak beside two narwhal',
      who: ['The nearest hunter', 'The narwhal', 'Kari Herbert'],
      quote: 'my heart leapt for both hunter and narwhal',
      themes: ['A divided heart', 'Courage and respect'],
      tension: 5,
      significance:
        'The climax of the extract, and it is left unresolved: the reader never learns whether the harpoon strikes.',
    },
    {
      where: 'Lines 52 to 64 (paragraph 7)',
      title: 'The dilemma and the answer',
      summary:
        'Herbert names her dilemma, repeats the question critics ask about eating seal, and answers it: the Inughuit do not hunt for sport, waste nothing, and cannot live on imports alone.',
      setting: 'Reflection after the event, looking back on her whole stay in Greenland',
      who: ['Kari Herbert', 'The outside critics', 'The hunters'],
      quote: 'Hunting is still an absolute necessity in Thule',
      themes: ['A divided heart', 'Insiders and outsiders', 'Survival and necessity'],
      tension: 3,
      significance:
        'The extract ends with argument rather than action, settling the case for hunting while leaving the feeling unresolved.',
    },
  ],

  relationships: [
    {
      from: 'Kari Herbert',
      to: 'The narwhal',
      kind: 'sympathy and wonder',
      note: 'She first sees the whales as almost magical, then studies them with respect, and at the climax wills them to escape. Her sympathy never disappears, even as she defends the hunt.',
    },
    {
      from: 'Kari Herbert',
      to: 'The hunters',
      kind: 'admiring observer',
      note: 'She watches from the shore, admires their stillness and nerve, and in the final paragraph speaks up for their way of life to readers who may not understand it.',
    },
    {
      from: 'The hunters',
      to: 'The narwhal',
      kind: 'hunters and hunted, bound by need',
      note: "The narwhal is the hunters' prey and also their means of life: food, vitamins, light, heat, tools and income. The relationship is one of need, not sport.",
    },
    {
      from: 'The women on the lookout',
      to: 'The hunters',
      kind: 'wives and families',
      note: 'Their anxious watching shows what each catch means to a household, and turns the hunt into a shared effort of the whole community.',
    },
    {
      from: 'Kari Herbert',
      to: 'The women on the lookout',
      kind: 'fellow watchers',
      note: 'She watches from the same knoll, sharing their suspense but not their stake. The contrast shows that she is close to the community without being part of it.',
    },
    {
      from: 'Kari Herbert',
      to: 'The outside critics',
      kind: 'answering an argument',
      note: 'She partly shares their feelings, including herself in the “we” who want sea mammals protected, but answers their question with facts about how the Inughuit hunt and live.',
    },
    {
      from: 'The nearest hunter',
      to: 'The narwhal',
      kind: 'a contest both could lose',
      note: 'One man in a fragile kayak beside two huge whales. Because the danger runs both ways, Herbert can feel for both, and the reader is never told who wins.',
    },
  ],

  compareWith: [
    {
      title: 'From A Passage to Africa',
      href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
      reason:
        "Another writer watching people struggle to survive, a reporter whose professional detachment is shaken by a single brief moment, much as Herbert's feelings are thrown into conflict in the instant the hunter takes aim.",
    },
    {
      title: 'Explorers or boys messing about? Either way, taxpayer gets rescue bill',
      href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
      reason:
        'A newspaper report on a polar rescue that asks whether taking risks in polar regions is heroic or foolish, the same judgement Herbert weighs when she watches the nearest hunter.',
    },
    {
      title: 'From A Game of Polo with a Headless Goat',
      href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
      reason:
        "Another woman writer watching a local contest involving animals, a donkey race in Karachi that she follows from the boot of a car; Levine's lively, comic account sharpens the contrast with Herbert's reflective, divided tone.",
    },
  ],

  contentGuidance: ['violence', 'mortality', 'colonialism'],

  native: {
    structureForm: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
    vocabulary: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
  },

  sources: [
    {
      label:
        "Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026 (ISBN 978 1 446 93108 0), pages 6 and 7: the prescribed text. Every quotation was copied from it and every line reference follows its marginal numbering; the text was extracted twice, with pdftotext and PyMuPDF, and the two agreed on every quoted phrase. Also the source of the introductory note (Herbert's childhood among the Inughuit, the 2002 return, Thule) and the six glossed words",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        "The same anthology, Acknowledgements (page 71): text from The Explorer's Daughter by Kari Herbert, Penguin, 2006, copyright Kari Herbert 2004, reproduced by permission of Aitken Alexander Associates. Also used for the texts in compareWith, whose extracts (A Passage to Africa, the Steven Morris article, A Game of Polo with a Headless Goat) were read in the same document",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        "Wikipedia, Kari Herbert: born 17 September 1970; elder daughter of Sir Wally Herbert and Marie Herbert; early years with the Polar Inuit of northwest Greenland; first language Inuktun; The Explorer's Daughter (Viking, 2004; Penguin, 2005), BBC Radio 4 Book of the Week; later books",
      url: 'https://en.wikipedia.org/wiki/Kari_Herbert',
    },
    {
      label:
        "AbeBooks listing of the Viking first edition (ISBN 9780670913749), subtitle A Young Englishwoman Rediscovers Her Arctic Childhood: the publisher's description says she lived among the Inuit of the High Arctic for the first two years of her life and returned alone in 2002",
      url: 'https://www.abebooks.com/9780670913749/Explorers-Daughter-Young-Englishwoman-Rediscovers-067091374X/plp',
    },
    {
      label:
        "Literary Review, Sara Wheeler's review of The Explorer's Daughter: taken to northwest Greenland at ten months old; the family's years on Herbert Island; Wally Herbert's sixteen-month crossing of the Arctic Ocean with three other men and forty dogs",
      url: 'https://literaryreview.co.uk/child-of-the-pole',
    },
    {
      label: 'Saraband, contributor page for Kari Herbert: the memoir and her later work',
      url: 'https://saraband.net/contributor/kari-herbert/',
    },
    {
      label:
        'Wikipedia, Wally Herbert: 1934 to 2007; the British Trans-Arctic Expedition of 1968 to 1969 from Alaska to Spitsbergen; knighted in 2000. Sources give 5 April or 6 April 1969 for reaching the Pole, so the guide says April 1969',
      url: 'https://en.wikipedia.org/wiki/Wally_Herbert',
    },
    {
      label:
        "Wikipedia, Inughuit: the northernmost Inuit; about 800 people in 2010; Inuktun; Knud Rasmussen's trading post at Uummannaq in 1910; the relocation to Qaanaaq because of the air base, and its effect on the community",
      url: 'https://en.wikipedia.org/wiki/Inughuit',
    },
    {
      label:
        'Wikipedia, Qaanaaq: founded 1953 when the Danish government forcibly moved the inhabitants of Old Thule north within four days, beside the air base now called Pituffik Space Base; Qaanaaq, or New Thule, stands at the northern entrance to the Inglefield Fjord. Accounts of the number moved, the distance and the season differ, so the guide gives none of them precisely',
      url: 'https://en.wikipedia.org/wiki/Qaanaaq',
    },
    {
      label:
        'National Geographic, What Inughuit hunters can teach us about the revered narwhal: kayaks and hand harpoons near Qaanaaq; the harpoon tied to an inflated sealskin float; harpooning before shooting because a shot narwhal sinks; hunters restricting motorboats',
      url: 'https://www.nationalgeographic.com/environment/article/greenland-inughuit-hunters-narwhals',
    },
    {
      label:
        'NAMMCO, hunting methods in member countries: hunters embarking quietly when a whale is seen from shore; floats to secure the whale before it is shot; old municipal bylaws in the Qaanaaq area calling for a hand harpoon before shooting',
      url: 'https://nammco.no/overview-of-marine-mammal-hunting-methods-inc-regulations-monitoring-observation-in-nammco-member-countries/',
    },
    {
      label:
        'Wikipedia, Narwhal: the tusk as a canine tooth from the left upper jaw, mostly in males; its function debated; drone footage from August 2016 of narwhal using their tusks to stun Arctic cod; the skin as a source of vitamin C; kayak and harpoon hunting at Qaanaaq',
      url: 'https://en.wikipedia.org/wiki/Narwhal',
    },
    {
      label:
        'Wikipedia, Canadian seal hunt: the first major protests in 1967; the 1983 ban on imports of whitecoat pup pelts; the 2009 ban on trade in seal products with its exemption for Inuit and other indigenous hunts',
      url: 'https://en.wikipedia.org/wiki/Canadian_seal_hunt',
    },
    {
      label:
        'ECOLEX, Council Directive 83/129/EEC (1983) concerning the importation into member states of skins of certain seal pups and products derived from them',
      url: 'https://www.ecolex.org/details/legislation/council-directive-83129eec-concerning-the-importation-into-member-states-of-skins-of-certain-seal-pups-and-products-derived-therefrom-lex-faoc036895/',
    },
    {
      label: 'legislation.gov.uk, Regulation (EC) No 1007/2009 on trade in seal products',
      url: 'https://www.legislation.gov.uk/eur/2009/1007',
    },
    {
      label:
        'Wikipedia, Eskimo: regarded as offensive in Greenland and Canada and largely replaced by Inuit; adopted as the term by the Inuit Circumpolar Conference in 1977',
      url: 'https://en.wikipedia.org/wiki/Eskimo',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Language A, Paper 1, June 2026 (P79647A), question paper and source booklet, from the copy held by The English Hub: the anthology text printed as Text Two, adapted; the wording of the language-and-structure and comparison questions; the rule that the anthology may not be taken into the exam',
    },
  ],
}
