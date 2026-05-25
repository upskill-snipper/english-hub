// ─── IELTS Academic Reading — practice item bank (Set 32) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the history of the
// English language / acoustics in architecture / the biology of ageing.
//
// This test is MATCHING-RICH. It contains three matching questions across three
// different variants: Matching Headings (Passage 1), Matching Information /
// which-paragraph (Passage 2) and Matching Features — statements to materials
// (Passage 3), alongside the usual mix of True/False/Not Given, multiple choice
// and sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation. Marks: P1 = 6 (matching) + 7 = 13; P2 = 5
// (matching) + 8 = 13; P3 = 5 (matching) + 9 = 14. Total = 40.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_32: ReadingTest[] = [
  {
    id: 'rd-academic-032',
    title: 'Academic Reading — Practice Test 32',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-032-p1',
        title: 'The Making of English',
        body: `English is spoken today by more people, in more places, than any language in history, yet it began as the obscure dialect of a few thousand settlers on a damp island at the edge of Europe. Its journey from that narrow beginning to its present reach was not the product of any deliberate plan. It was shaped, again and again, by invasion, conquest, trade and accident, each of which left its mark on the words English speakers now use without a second thought. The language that results is a curious mongrel, and the very features that students of English find most maddening — its irregular spelling, its enormous vocabulary, its habit of keeping several words where one would do — are scars left by this turbulent history.

The story begins in the fifth century, when bands of Germanic peoples, among them the Angles and the Saxons, crossed the sea from the European mainland and settled in the territory the Romans had recently abandoned. The speech they brought with them, which scholars call Old English, is the true root of the language, and it supplies most of its commonest words to this day. The everyday vocabulary of home and body and field — words such as house, child, eat, drink, earth and water — descends almost unbroken from this Germanic core. To a modern reader Old English looks utterly foreign, bristling with unfamiliar endings, but it is the foundation on which everything else was built, and its grammar still governs the small words that hold English sentences together.

The first great disturbance came from the north. From the late eighth century onwards, raiders and then settlers from Scandinavia, the people we loosely call the Vikings, poured into the north and east of England, and for a time much of the country lay under Norse control. The two languages, Old English and Old Norse, were close enough that speakers could half understand one another, and the result was not so much replacement as blending. Norse gave English a generous fistful of plain, useful words — sky, skin, leg, egg, knife, window and the pronoun they among them — and, more remarkably, it seems to have helped strip away many of the complicated word-endings that Old English had carried, leaving a simpler grammar behind.

A far more visible upheaval arrived in 1066, when William of Normandy crossed the Channel and seized the English throne. For some three centuries after the Norman Conquest, the rulers of England spoke French, and the language of the court, the law and high culture was French while English remained the despised tongue of the conquered. This long cohabitation poured a vast quantity of French vocabulary into English, especially words to do with government, law, warfare and refined living — parliament, justice, army, beef, mutton and countless others. Because the humble English word often survived alongside its grand French replacement, English ended up with pairs of near-synonyms at different levels of formality: a speaker may begin, start or commence the same action, choosing the word that fits the occasion.

While the vocabulary was swelling, the sound of the language was quietly transforming as well. Between roughly the fourteenth and the eighteenth centuries, the way English speakers pronounced their long vowels shifted in a sweeping and still imperfectly understood change that linguists call the Great Vowel Shift. Vowels that had once been sounded much as they still are in many continental languages migrated to new positions in the mouth, so that a word once pronounced something like 'naym' came to be said as 'name', and 'see' moved away from a sound nearer 'say'. Crucially, the change to pronunciation came after spelling had begun to settle into fixed forms, with the result that English spelling preserves, like a fly in amber, the pronunciation of an earlier age. This is a chief reason why the written language so often seems to defy its own sounds.

The last chapter is one of expansion. From the seventeenth century onwards, English travelled the globe in the holds of ships, carried by traders, settlers, soldiers and administrators to the Americas, to Africa, to South Asia and to Australasia. Everywhere it went it borrowed as freely as it always had, taking words from the languages it met — bungalow and shampoo from India, canoe from the Caribbean, boomerang from Australia — and carrying them back to enrich the parent tongue. The same restless appetite for foreign words that had absorbed Norse and French now drew on the whole world, and the vocabulary of English swelled to a size unmatched by any rival. A language born of one small migration had become, through many more, the nearest thing the modern world has to a common tongue.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-032-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i–viii) for each paragraph.',
            options: [
              { key: 'i', label: 'The Germanic foundation of everyday words' },
              { key: 'ii', label: 'A mongrel tongue shaped by accident' },
              { key: 'iii', label: 'How French enriched and complicated the vocabulary' },
              { key: 'iv', label: 'The deliberate reform of English spelling' },
              { key: 'v', label: 'Norse settlers and a simpler grammar' },
              { key: 'vi', label: 'A shift in sound that spelling never followed' },
              { key: 'vii', label: 'The decline of English as a world language' },
              { key: 'viii', label: 'Carrying the language, and borrowing, around the globe' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'ii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'i' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'v' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'iii' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vi' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'viii' },
            ],
            explanation:
              'A calls English "a curious mongrel" shaped "by invasion, conquest, trade and accident" (ii). B describes the Germanic Old English core supplying everyday words like house and water (i). C covers Norse settlers and how they helped "strip away" word-endings, leaving "a simpler grammar" (v). D explains how French "poured a vast quantity of French vocabulary into English" and created near-synonyms (iii). E describes the Great Vowel Shift, a change in sound that spelling did not follow (vi). F traces English travelling "around the globe" and borrowing words worldwide (viii). Heading iv (deliberate spelling reform) is a distractor — the passage says spelling fossilised old pronunciation, not that it was reformed; heading vii (decline as a world language) is a distractor that contradicts the passage.',
          },
          {
            id: 'rd-032-p1-q2',
            type: 'tfng',
            prompt:
              'The spread of English to its present global position was the outcome of a deliberate plan.',
            answer: 'false',
            explanation:
              'Paragraph A states that the journey "was not the product of any deliberate plan" and was instead shaped "by invasion, conquest, trade and accident." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-032-p1-q3',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Scholars call the Germanic speech brought by the Angles and Saxons _______, and it remains the true root of the language.',
            acceptableAnswers: ['Old English', 'old english'],
            explanation:
              'Paragraph B says "The speech they brought with them, which scholars call Old English, is the true root of the language." The required words are "Old English".',
          },
          {
            id: 'rd-032-p1-q4',
            type: 'mcq',
            prompt:
              'According to paragraph C, what was the effect of contact between Old English and Old Norse?',
            options: [
              'Old Norse completely replaced Old English in the north and east.',
              'The two languages blended, and Norse helped simplify English grammar.',
              'English speakers were unable to understand Norse speakers at all.',
              'Old English borrowed only words connected with government and law.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says the result "was not so much replacement as blending," that Norse gave English plain words, and that it "seems to have helped strip away many of the complicated word-endings." Option B matches; option A is explicitly ruled out by "not so much replacement".',
          },
          {
            id: 'rd-032-p1-q5',
            type: 'tfng',
            prompt:
              'For about three hundred years after 1066, French was the language of the English court and law.',
            answer: 'true',
            explanation:
              'Paragraph D states that "For some three centuries after the Norman Conquest, the rulers of England spoke French, and the language of the court, the law and high culture was French." This matches the statement, so it is True.',
          },
          {
            id: 'rd-032-p1-q6',
            type: 'tfng',
            prompt: 'Linguists now fully understand the causes of the Great Vowel Shift.',
            answer: 'false',
            explanation:
              'Paragraph E describes the Great Vowel Shift as "a sweeping and still imperfectly understood change." Saying it is fully understood contradicts the passage, so it is False.',
          },
          {
            id: 'rd-032-p1-q7',
            type: 'mcq',
            prompt:
              'Why, according to paragraph E, does English spelling often appear to contradict the way words are pronounced?',
            options: [
              'Because spelling was reformed long before the vowels changed',
              'Because the change in pronunciation came after spelling had become fixed',
              'Because foreign words were spelled in their original languages',
              'Because English has more vowel sounds than any other language',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E states that "the change to pronunciation came after spelling had begun to settle into fixed forms," so spelling "preserves... the pronunciation of an earlier age." Option B matches this directly.',
          },
          {
            id: 'rd-032-p1-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: As English spread around the world it kept borrowing, taking the word _______ from India along with bungalow.',
            acceptableAnswers: ['shampoo'],
            explanation:
              'Paragraph F lists words English took on its travels, including "bungalow and shampoo from India." The required word is "shampoo".',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-032-p2',
        title: 'The Shape of Sound',
        body: `When an orchestra falls silent at the end of a phrase, the music does not stop at once. For a fraction of a second the sound seems to hang in the air, fading rather than vanishing, and it is in that brief afterlife that much of the character of a concert hall is decided. The phenomenon is called reverberation, and it arises because sound, once produced, does not travel only in a straight line to the listener's ear. It also strikes the walls, floor and ceiling and bounces back, again and again, each reflection a little weaker than the last, until the energy is finally absorbed and the room grows quiet. A hall that holds onto sound for too long turns music into mush; one that lets it die too quickly leaves the playing thin and lifeless. Between those extremes lies the art of architectural acoustics.

The single most important measure of a room's acoustic behaviour is its reverberation time, defined as the number of seconds it takes for a sound to fade to a millionth of its original intensity. The figure was first put on a scientific footing at the close of the nineteenth century by a young American physicist, Wallace Sabine, who was asked to cure a hopelessly echoing lecture theatre. Working at night with an organ pipe and a stopwatch, he discovered that the time depended in a simple way on two things: the volume of the room and the amount of sound-absorbing material it contained. The larger the space, the longer sound lingers; the more soft, absorbent surface it holds, the faster the sound dies. With that relationship Sabine turned acoustics from guesswork into a calculation, and the unit of sound absorption still bears his name.

What counts as the right reverberation time depends entirely on the purpose of the room. Speech demands clarity above all: a syllable must die away before the next arrives, or words pile up on one another and become unintelligible, so lecture halls and theatres are designed to be acoustically 'dry', with short reverberation times. Music, by contrast, is generally flattered by a longer reverberation, which blends successive notes into a rich and enveloping whole, and the grand romantic symphonies in particular were written for resonant spaces and can sound impoverished in a dry one. The conflict is real: a hall tuned perfectly for a string quartet may swallow the words of an opera, which is one reason a single multipurpose auditorium so often disappoints every audience it tries to please.

Reverberation time is far from the whole story, however, for it describes only how long sound lasts, not where it comes from or how evenly it is spread. The shape of a hall matters quite as much as its size. Curved or domed surfaces, which architects often find beautiful, are an acoustic hazard, because a concave wall can focus reflected sound into a few favoured seats while starving others, and a smooth dome may gather echoes and hurl them back at the stage. The interior must also scatter sound so that it reaches every listener from many directions at once, which is why the ornate mouldings, statues and coffered ceilings of older halls, far from being mere decoration, perform the useful task of breaking up and diffusing the sound. The narrow, high-walled 'shoebox' shape of certain nineteenth-century halls, long dismissed as old-fashioned, turned out by happy accident to scatter sound superbly, and several remain among the most admired rooms in the world.

The annals of concert-hall building are consequently full of expensive failures as well as triumphs. More than one celebrated modern auditorium opened to dismay, its sound muddy or harsh or unevenly distributed, and had to be altered at great cost — its surfaces broken up, hanging panels suspended from the ceiling, or absorbent material added or stripped away. Such adjustable elements are now often built in from the start: movable reflectors, retractable curtains and chambers that can be opened or closed allow a modern hall to lengthen or shorten its reverberation to suit a symphony one night and a lecture the next. In this way designers try to escape the old dilemma, tuning a single room to more than one purpose rather than committing it forever to one.

For all the sophistication of modern measurement, acoustics remains a discipline in which the ear has the final word. Computer models can now predict with fair accuracy how sound will behave in a room that exists only as a drawing, and scale models, sometimes filled with a substitute for air so that ultrasonic waves can stand in for ordinary sound, allow designers to listen to a building before it is built. Yet the most reliable judgement is still the impossible-to-quantify response of a trained listener, who can tell within a few notes whether a hall sings or sulks. The finest halls are admired not because they score perfectly on any single number, but because of an elusive blend of warmth, clarity and envelopment that no formula has yet fully captured.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-032-p2-q1',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has six paragraphs, A–F. Which paragraph contains the following information? Write the correct letter, A–F. (You may use any letter more than once, but each statement here is found in only one paragraph.)',
            options: [
              { key: 'A', label: 'Paragraph A' },
              { key: 'B', label: 'Paragraph B' },
              { key: 'C', label: 'Paragraph C' },
              { key: 'D', label: 'Paragraph D' },
              { key: 'E', label: 'Paragraph E' },
              { key: 'F', label: 'Paragraph F' },
            ],
            items: [
              {
                id: 'p2-i-a',
                text: 'a description of the experiments that first measured reverberation scientifically',
                answer: 'B',
              },
              {
                id: 'p2-i-b',
                text: 'the claim that the response of a trained listener is the most trustworthy judgement',
                answer: 'F',
              },
              {
                id: 'p2-i-c',
                text: 'an explanation of why curved or domed surfaces can cause acoustic problems',
                answer: 'D',
              },
              {
                id: 'p2-i-d',
                text: 'a definition of reverberation in terms of sound bouncing off surfaces',
                answer: 'A',
              },
              {
                id: 'p2-i-e',
                text: 'the point that speech and music need different reverberation times',
                answer: 'C',
              },
            ],
            explanation:
              'Item a → B, describing Sabine "working at night with an organ pipe and a stopwatch." Item b → F: "the most reliable judgement is still the impossible-to-quantify response of a trained listener." Item c → D: "a concave wall can focus reflected sound... and a smooth dome may gather echoes." Item d → A, which defines reverberation as sound that "strikes the walls, floor and ceiling and bounces back." Item e → C, on the conflict between the short reverberation speech needs and the longer one that flatters music.',
          },
          {
            id: 'rd-032-p2-q2',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: The effect by which sound seems to hang in the air and fade after the music stops is called _______.',
            acceptableAnswers: ['reverberation'],
            explanation:
              'Paragraph A says "The phenomenon is called reverberation, and it arises because sound, once produced, does not travel only in a straight line." The required word is "reverberation".',
          },
          {
            id: 'rd-032-p2-q3',
            type: 'mcq',
            prompt:
              'According to paragraph B, on which two factors did Sabine find reverberation time to depend?',
            options: [
              'The age of the building and the number of listeners present',
              'The volume of the room and the amount of sound-absorbing material',
              'The loudness of the source and the temperature of the air',
              'The shape of the ceiling and the position of the stage',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B says the time "depended in a simple way on two things: the volume of the room and the amount of sound-absorbing material it contained." Option B matches exactly.',
          },
          {
            id: 'rd-032-p2-q4',
            type: 'tfng',
            prompt:
              'Spaces designed for speech are given longer reverberation times than spaces designed for music.',
            answer: 'false',
            explanation:
              'Paragraph C says speech needs short reverberation (lecture halls are "acoustically dry"), while music "is generally flattered by a longer reverberation." The statement reverses this, so it is False.',
          },
          {
            id: 'rd-032-p2-q5',
            type: 'tfng',
            prompt:
              'The ornate mouldings and statues of older concert halls serve a useful acoustic purpose.',
            answer: 'true',
            explanation:
              'Paragraph D says these features, "far from being mere decoration, perform the useful task of breaking up and diffusing the sound." This matches the statement, so it is True.',
          },
          {
            id: 'rd-032-p2-q6',
            type: 'tfng',
            prompt:
              'The narrow "shoebox" halls of the nineteenth century were deliberately designed to scatter sound well.',
            answer: 'false',
            explanation:
              'Paragraph D says the shoebox shape "turned out by happy accident to scatter sound superbly." Because it was accidental rather than deliberate, the statement is False.',
          },
          {
            id: 'rd-032-p2-q7',
            type: 'mcq',
            prompt:
              'Why are adjustable elements such as movable reflectors and retractable curtains built into modern halls?',
            options: [
              'To reduce the cost of constructing the building',
              'To allow the reverberation time to be changed to suit different events',
              'To replace the need for any sound-absorbing material',
              'To make the hall look more decorative to audiences',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph E explains that such elements "allow a modern hall to lengthen or shorten its reverberation to suit a symphony one night and a lecture the next." Option B matches.',
          },
          {
            id: 'rd-032-p2-q8',
            type: 'tfng',
            prompt:
              'Computer models have completely removed the need for human judgement in assessing a hall.',
            answer: 'false',
            explanation:
              'Paragraph F says that despite computer models, "the most reliable judgement is still the impossible-to-quantify response of a trained listener." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-032-p2-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: To listen to a building before it exists, designers sometimes use _______ filled with a substitute for air so that ultrasonic waves can stand in for ordinary sound.',
            acceptableAnswers: ['scale models', 'scale model'],
            explanation:
              'Paragraph F describes "scale models, sometimes filled with a substitute for air so that ultrasonic waves can stand in for ordinary sound." The required words are "scale models".',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-032-p3',
        title: 'Why Living Things Grow Old',
        body: `Ageing seems so ordinary that we rarely stop to ask why it should happen at all. Living bodies are, after all, magnificent at repair: a cut heals, a broken bone knits, worn tissues are replaced day after day for decades. Why, then, does this machinery of renewal eventually falter, allowing the slow accumulation of damage we call old age? The question has occupied biologists for more than a century, and although no single answer accounts for everything, research has steadily replaced the old notion of ageing as a simple wearing-out with a richer and stranger picture, in which the seeds of decline are sown by the very processes that keep us alive.

Part of the answer lies deep inside the cell, in the way it copies itself. Most of the cells of the body renew themselves by dividing, each one splitting to produce two, and at every division the long molecules of DNA that carry the cell's instructions must be copied in full. The copying machinery, however, cannot quite reach the very tips of each strand, so a little is lost at every division. To protect the precious genes from this nibbling, the ends of each chromosome are capped with a length of repetitive, meaningless DNA called a telomere, which acts rather like the plastic tip of a shoelace. The telomere, not the genes, takes the damage, shortening a little each time the cell divides. But the buffer is not endless. When the telomeres grow critically short, the cell can divide no more and falls into a kind of retirement, ceasing to multiply. This built-in limit on the number of times an ordinary cell will divide was first observed in the laboratory and is named, after its discoverer, the Hayflick limit.

If shortening telomeres impose a countdown, an obvious question follows: why does the body not simply rebuild them? In fact it can. A specialised enzyme called telomerase is able to extend telomeres, restoring the lost length, and it is active in the cells of the early embryo and in the rare cells that must keep dividing throughout life. Yet in most ordinary body cells telomerase is switched off, and the reason appears to be a grim bargain. A cell that can divide without limit is a cell that can become a tumour, and the silencing of telomerase in most tissues looks like a defence against cancer: the same countdown that contributes to ageing may protect the body from runaway growth in youth. Ageing, on this view, is the price paid for a safeguard that serves us well while we are young.

Telomeres are only one thread of the story, for damage accumulates in many forms. The chemical reactions that release energy inside cells throw off reactive by-products, sometimes loosely called free radicals, which can injure proteins, membranes and DNA alike. Cells carry an array of repair systems to mop up and reverse this harm, but the repair is never quite perfect, and over a lifetime the unmended remainder builds up. Why evolution should tolerate such imperfection is itself illuminating. Natural selection acts most powerfully on the young, who have yet to reproduce; a gene that is harmful only in old age, long after its bearer has had offspring, is barely opposed by selection at all. Some genes may even be actively favoured because they boost vigour or fertility early in life while exacting a price much later, a grim trade-off that helps explain why ageing is so nearly universal.

That near-universality, however, conceals an astonishing range. Lifespan varies across the living world by a factor of thousands, and not always in the ways one might guess. A mouse and a bat are similar in size, yet some bats live thirty years or more while a mouse is old at three, a difference linked to the bat's ability to escape danger by flying and so to the slower pace at which evolution lets it age. Among the truly long-lived are creatures of striking calm: certain whales are thought to pass two centuries, some deep-sea clams still more, and a few cold-water sharks may be older still. A handful of species seem barely to age at all in the ordinary sense, showing no rise in their risk of death as the years pass, a condition known as negligible senescence that has made them objects of intense study.

What all this means for human beings is the most actively contested question of all. No serious researcher claims that ageing will soon be abolished, but the field has moved from describing decline to probing whether it can be slowed. Experiments have shown that in laboratory animals a substantially reduced diet can lengthen life, and that certain genes, when altered, can do the same, hinting that lifespan is more adjustable than once believed. Other work focuses on clearing out the worn-out, non-dividing cells that accumulate in ageing tissue and appear to poison their neighbours. None of this amounts to a cure, and much that succeeds in a worm or a mouse fails in a human. Yet the direction of the work marks a profound shift: ageing is no longer regarded as an immovable fact of life, but as a biological process that, like any other, might one day be understood well enough to be influenced.`,
        questions: [
          // ── Matching Features — statements to terms (5 items) = 5 marks ──
          {
            id: 'rd-032-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of terms below. Match each statement to the term it relates to in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Telomeres' },
              { key: 'B', label: 'Telomerase' },
              { key: 'C', label: 'Free radicals' },
            ],
            items: [
              {
                id: 'p3-f-a',
                text: 'protective caps compared to the plastic tip of a shoelace.',
                answer: 'A',
              },
              {
                id: 'p3-f-b',
                text: 'an enzyme that is switched off in most ordinary body cells.',
                answer: 'B',
              },
              {
                id: 'p3-f-c',
                text: 'reactive by-products that can injure proteins, membranes and DNA.',
                answer: 'C',
              },
              {
                id: 'p3-f-d',
                text: 'structures that grow a little shorter each time a cell divides.',
                answer: 'A',
              },
              {
                id: 'p3-f-e',
                text: 'something whose activity, if unchecked, could let a cell become a tumour.',
                answer: 'B',
              },
            ],
            explanation:
              'Item a → A (telomeres), "capped with a length of repetitive, meaningless DNA called a telomere, which acts rather like the plastic tip of a shoelace." Item b → B (telomerase), which "in most ordinary body cells... is switched off." Item c → C (free radicals), "reactive by-products... which can injure proteins, membranes and DNA." Item d → A (telomeres), which take the damage, "shortening a little each time the cell divides." Item e → B (telomerase): "A cell that can divide without limit is a cell that can become a tumour," and silencing telomerase guards against this.',
          },
          {
            id: 'rd-032-p3-q2',
            type: 'tfng',
            prompt:
              'Biologists have settled on a single explanation that accounts for every aspect of ageing.',
            answer: 'false',
            explanation:
              'Paragraph A says "no single answer accounts for everything." Claiming a single explanation accounts for every aspect contradicts the passage, so it is False.',
          },
          {
            id: 'rd-032-p3-q3',
            type: 'mcq',
            prompt: 'Why, according to paragraph B, do telomeres shorten each time a cell divides?',
            options: [
              'Because free radicals attack the ends of the chromosomes directly',
              'Because the copying machinery cannot quite reach the very tips of each DNA strand',
              'Because the genes themselves are deliberately trimmed at each division',
              'Because telomerase removes a small length at every division',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B explains that "The copying machinery... cannot quite reach the very tips of each strand, so a little is lost at every division," and the telomere takes that loss. Option B matches.',
          },
          {
            id: 'rd-032-p3-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: The built-in limit on the number of times an ordinary cell will divide is named, after its discoverer, the _______.',
            acceptableAnswers: ['Hayflick limit', 'hayflick limit'],
            explanation:
              'Paragraph B states the limit "is named, after its discoverer, the Hayflick limit." The required words are "Hayflick limit".',
          },
          {
            id: 'rd-032-p3-q5',
            type: 'mcq',
            prompt: 'According to paragraph C, why is telomerase switched off in most body cells?',
            options: [
              'Because the body has no way to produce enough of the enzyme',
              'Because it appears to act as a defence against cancer',
              'Because it speeds up the production of free radicals',
              'Because it is only useful in creatures with negligible senescence',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says "the silencing of telomerase in most tissues looks like a defence against cancer," since a cell dividing without limit can become a tumour. Option B matches.',
          },
          {
            id: 'rd-032-p3-q6',
            type: 'tfng',
            prompt:
              'Natural selection acts more strongly on the young than on those who have already reproduced.',
            answer: 'true',
            explanation:
              'Paragraph D states "Natural selection acts most powerfully on the young," and that a gene harmful only in old age "is barely opposed by selection at all." This matches the statement, so it is True.',
          },
          {
            id: 'rd-032-p3-q7',
            type: 'tfng',
            prompt:
              'A mouse and a bat of similar size tend to live for about the same length of time.',
            answer: 'false',
            explanation:
              'Paragraph E says that although a mouse and a bat are similar in size, "some bats live thirty years or more while a mouse is old at three." This contradicts the statement, so it is False.',
          },
          {
            id: 'rd-032-p3-q8',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO words from the passage: Species that show no rise in their risk of death as the years pass are said to display _______.',
            acceptableAnswers: ['negligible senescence'],
            explanation:
              'Paragraph E describes species "showing no rise in their risk of death as the years pass, a condition known as negligible senescence." The required words are "negligible senescence".',
          },
          {
            id: 'rd-032-p3-q9',
            type: 'mcq',
            prompt: 'What does paragraph F suggest about current research into slowing ageing?',
            options: [
              'Researchers expect ageing to be abolished within a few years.',
              'Results that succeed in animals always work in humans too.',
              'Findings hint that lifespan is more adjustable than once believed, though no cure exists.',
              'Reducing the diet of laboratory animals shortens their lives.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph F says a reduced diet and certain altered genes can lengthen life in animals, "hinting that lifespan is more adjustable than once believed," while stressing that "None of this amounts to a cure." Option C matches; option A is explicitly denied ("No serious researcher claims that ageing will soon be abolished").',
          },
          {
            id: 'rd-032-p3-q10',
            type: 'tfng',
            prompt: 'A reduced diet has been shown to extend the lifespan of laboratory animals.',
            answer: 'true',
            explanation:
              'Paragraph F states that "in laboratory animals a substantially reduced diet can lengthen life." This matches the statement, so it is True.',
          },
        ],
      },
    ],
  },
]
