import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * An Unknown Girl, Moniza Alvi. A SUPPLEMENT: the existing page at
 * /igcse/edexcel/poetry/an-unknown-girl keeps its overview, context and form
 * sections, and this file adds what that page lacked, mounted below it.
 *
 * THE TEXT. Every quotation was copied from the poem as printed on page 27 of
 * the Pearson Edexcel International GCSE English Anthology, Issue 8 (February
 * 2026), read from Pearson's own PDF on 25 September 2026, and its line number
 * checked against the anthology's margin numbering. The poem is 48 lines in one
 * unbroken stanza, 190 words.
 *
 * THE LIMIT. A 190-word poem in copyright may give up 15 per cent of itself on
 * one page: 28 words. The whole page quotes exactly these eleven items and
 * nothing else in quotation marks: studded with neon (l.2), icing my hand
 * (l.7), is hennaing my hand (ll.4, 13, 31), Western perms (l.22), canopy
 * (l.26), I have new brown veins (l.27), deftly (l.29), clinging (l.32), amber
 * bird beneath (l.42), fade in a week (l.43), longing (l.47). Every other
 * quoted word on the page is a part of one of these, so it adds nothing to the
 * total. Adding a new quotation means removing words elsewhere: run the test.
 *
 * WHAT THE PAGE ABOVE GETS WRONG, found while writing this (not fixed here,
 * because this file may not edit it): its section summaries describe an amber
 * coin paid to the girl, a line drawn across the palm, jeans on a stall, and a
 * dream in which the girl peels back the speaker's skin. None of these is in
 * the poem. It also labels the poem as English Literature (4ET1), whereas the
 * anthology prints it in Part 2, which only English Language A (4EA1) examines,
 * and two of its three comparison poems are Part 3 texts a Language student
 * does not study. Its form notes say some lines are a single word; none is.
 */
export const guide: StudyGuide = {
  slug: 'an-unknown-girl',
  title: 'An Unknown Girl',
  author: 'Moniza Alvi',
  form: 'poem',
  scope:
    'The whole poem as printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 2, page 27: 48 lines in a single unbroken stanza. Line numbers on this page follow the anthology’s own margin numbering, so you can find every moment in your copy.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Moniza Alvi 1996. As printed in the Pearson Edexcel International GCSE English Anthology, which reproduces it by permission of Bloodaxe Books on behalf of the author from Split World: Poems 1990-2005. Short quotations for criticism and review.',
  },
  workLength: {
    words: 190,
    lines: 48,
    basis:
      'Counted from the poem as printed on page 27 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), read from Pearson’s PDF on 25 September 2026. Title and footnotes excluded. 190 words counting satin-peach, shadow-stitched and shop-fronts as one word each, 193 if they are split as the site’s validator splits them; either count allows 28 quoted words.',
  },

  native: {
    overview: '/igcse/edexcel/poetry/an-unknown-girl',
    context: '/igcse/edexcel/poetry/an-unknown-girl',
    structureForm: '/igcse/edexcel/poetry/an-unknown-girl',
  },

  themes: [
    {
      title: 'Cultural identity and belonging',
      body: 'The poem is about wanting to belong to a culture you know only partly. The speaker is in the bazaar as a customer, paying the girl in rupees, yet she is wearing a kameez and wants the pattern to become part of her. One reading is that the poem records a real moment of connection: by line 27, when she says “I have new brown veins”, she feels her heritage in her blood, not only on her skin. A more cautious reading, and the more convincing one, notices how often the poem admits its limits. The girl stays unknown, the pattern is bought, and the speaker’s own metaphor of “icing my hand” comes from cake decoration rather than from the bazaar. On this reading belonging is something she reaches for rather than something she has, which is why the last lines turn on “longing”.',
    },
    {
      title: 'Heritage written on the body',
      body: 'Alvi makes identity physical. Almost everything in the poem happens to the speaker’s hand: the girl steadies it on her own knee, pipes the paste onto it and draws a peacock design over the palm, and the speaker looks ahead to removing the dried pattern at bedtime. The metaphor of “new brown veins” takes the pattern inside the body, as if heritage were carried in the blood like ancestry. Brown is the colour of the paste, and it may also suggest skin and ethnicity, a reading the poem leaves open rather than insists on. Mehndi is traditionally worn by brides and at festivals in South Asia, so the decoration carries a sense of ritual even in a market. The body becomes the page a culture is written on, and that is both the poem’s hope and its sadness, because what is written on skin wears off.',
    },
    {
      title: 'Tradition and modernity',
      body: 'The India of this poem is not a timeless picture-postcard India. The bazaar is “studded with neon”, the dummies in the shop windows wear “Western perms”, and banners advertising a beauty contest and furnishing fabrics hang overhead. Miss India, the national pageant that chooses India’s entrants for contests such as Miss World, and the date 1993 place the scene in a country that had begun opening its economy to world markets in 1991. There is an irony here. The speaker seems to have come from the West looking for something traditional, and finds the bazaar looking back towards the West. One reading is that Alvi gently mocks the visitor’s wish for an unchanging homeland. Another is that she shows tradition and modernity side by side, the old art of henna carried on under electric light. The second is more convincing, because the poem looks at both with the same wonder.',
    },
    {
      title: 'Transience and memory',
      body: 'From the moment the paste goes on, the poem knows the pattern will not last. After the turn at line 36, when the streets fall quiet, the verbs move into the future: she will remove the dried paste that night, uncover the “amber bird beneath”, and admit that it will “fade in a week”. Henna really does behave like this. The dried paste is removed to leave an orange stain that darkens over one to three days and then fades within one to three weeks. Alvi turns that fact into a figure for the whole experience. The visit, the girl and the feeling of belonging are vivid and brief, and afterwards they survive only as memories that come back now and then. The plain statement about fading is one of the saddest lines in the poem precisely because it is so matter-of-fact.',
    },
    {
      title: 'Longing and distance',
      body: 'The poem ends not in the bazaar but in an imagined future far away, with the speaker imagining herself stretching out both hands, over the width of a whole country, towards a girl she never knew. The last echo of the refrain has changed its verb: the present action of hennaing has become “longing”, and the evening bazaar has become a neon one, reduced in memory to its brightest light. The distance is geographical, but it is also a distance inside the speaker, between the life she lives and a heritage she feels cut off from. Alvi was born in Pakistan and grew up in England, and she has described her work as circling a split that she tries to mend. This poem does not mend it, but it makes the reader feel it.',
    },
    {
      title: 'Connection between strangers',
      body: 'The relationship at the centre of the poem is brief, paid for and wordless, and yet it is intimate. The girl holds the speaker’s hand against her own knee and works on her skin with great care; the third refrain praises how “deftly” she does it. Nothing is said between them, and the girl is never named. One reading is that her anonymity is the point: she stands for all of India that the speaker cannot know from the inside. A sharper reading notices the imbalance, since the speaker’s search for identity is served by a girl working for a small fee, whose own life the poem never enters. The poem seems aware of this, which is why its title and refrain keep insisting that the girl is unknown.',
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The first-person voice: a visitor having her hand decorated with henna in the bazaar',
      body: 'She is never named or described, and everything we learn about her comes from what she feels. She wears a kameez, so she has dressed in local clothes, and she pays for the henna, so she is also a customer. Her metaphors may give her away: comparing the girl’s work to “icing my hand” reaches for a homely image of cake decoration, which suggests she is translating the bazaar into the terms of another life. It is tempting to treat her as Moniza Alvi, who was born in Lahore in 1954 to a Pakistani father and a British mother, grew up in Hatfield in Hertfordshire, and did not go back to Pakistan until after her first full collection, The Country at My Shoulder, came out in 1993. The biography helps, but the poem is set in India, not Pakistan, so a careful answer writes about the speaker. Across the poem she moves from delight, to desperate holding on, to a quiet acceptance that the pattern will fade, and finally to longing.',
    },
    {
      name: 'The unknown girl',
      role: 'The henna artist in the bazaar; never named and never heard',
      body: 'She gives the poem its title, and she is defined by her skill rather than by anything she says. She squeezes the paste out through a narrow tip, steadies the speaker’s hand on her own knee, and works “deftly”, so the poem’s respect for her craft is clear. We learn nothing about her name, her life or her thoughts. The title phrase, repeated at lines 3, 12 and 30 and echoed at line 47, is both a plain fact and the poem’s central idea: she stands for the part of the speaker’s heritage that stays out of reach. Notice that the indefinite article of the refrain becomes a definite one in the final echo, as if she has become a particular person in the speaker’s memory while remaining unknown. Some readers see her as the self the speaker might have been had she grown up in South Asia. That reading is suggestive rather than provable, and it is strongest at the end, where the speaker longs not for India in general but for this girl.',
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The unknown girl',
      kind: 'customer and henna artist; strangers',
      note: 'It begins as a transaction, a small payment for a pattern, grows into admiration for the girl’s skill and a physical closeness as she holds the speaker’s hand, and ends as one-sided longing. The girl never speaks, so the reader sees the relationship only through the speaker’s feelings, which is part of what the poem is about.',
    },
  ],

  quoteNote:
    'The poem is in copyright and only 190 words long, so this page quotes no more than 28 of its words in all, and every quotation is short. Every moment is given a line number from the anthology, page 27, so you can read the surrounding lines in your own copy.',

  keyQuotes: [
    {
      text: 'studded with neon',
      where: 'The bazaar, line 2',
      analysis:
        '“Studded” is a word from jewellery, so the lights are set into the bazaar like gems in a ring. The image is dazzling and modern at once: this bazaar is lit by electric signs, not lamps or candles. From the second line Alvi refuses a timeless, picture-book India, and the same word returns in the last line, where the evening bazaar has become a “neon” one in the speaker’s memory.',
    },
    {
      text: 'icing my hand',
      where: 'The speaker, line 7',
      analysis:
        'The metaphor compares the henna artist to someone piping icing onto a cake. It captures how the process looks and feels: a thick, damp ribbon of paste pressed out through a narrow tip, decorative and delicate. It also tells us about the speaker. She reaches for a homely, familiar image to describe an unfamiliar art, which suggests she sees the bazaar partly as an outsider, translating it into the terms of the life she knows. Cakes belong to celebrations, and so, traditionally, does mehndi.',
    },
    {
      text: 'is hennaing my hand',
      where: 'The refrain, lines 4, 13 and 31',
      analysis:
        'The refrain uses the present continuous tense, so the action is always in progress, stretched out and never finished, and each return pulls the reader back into the slow work of the girl’s hands. “Hennaing” uses henna, far more familiar as a noun, in its rarer form as a verb, and the anthology explains it in a footnote. The possessive matters too: whatever the henna means, it is happening to her body. When the refrain is echoed for the last time at line 47, this verb has gone, replaced by “longing”.',
    },
    {
      text: 'Western perms',
      where: 'The shop-front dummies, line 22',
      analysis:
        'The mannequins in the shop windows wear Western hairstyles, and Alvi has them lean and gaze out, as if they were watching. The detail is quietly ironic. The speaker seems to have come looking for something traditional, and the bazaar is looking back towards the West, which suggests that identity everywhere is mixed and changing, not only hers. The staring dummies may also make her self-conscious, a visitor being watched, and their fixed, artificial looks hint that an identity can be a costume put on for display.',
    },
    {
      text: 'I have new brown veins',
      where: 'The speaker, line 27',
      analysis:
        'This short, confident sentence is the climax of the first part of the poem. The henna lines have become veins, as if the pattern has entered her bloodstream and her heritage now runs inside her like ancestry. “New” is the telling word: this belonging has just been acquired, not inherited, and what is new can be lost. Brown is the colour of the paste and may suggest skin and heritage. The sentence sounds certain, but it is also the moment she is most carried away.',
    },
    {
      text: 'clinging',
      where: 'The speaker, lines 32-35',
      analysis:
        'The speaker holds on to the bold outlines of the peacock design, and Alvi extends the image into a simile of people hanging on to the outside of a train. Wonder has become something closer to desperation. Holding on to the side of a train is dangerous: once it moves it carries you away, and you may fall. The simile suggests she knows the experience is moving on without her and is trying, against the odds, to keep hold of it. The repetition of the verb across the simile makes the grip feel tighter.',
    },
    {
      text: 'amber bird beneath',
      where: 'The speaker, line 42',
      analysis:
        'The speaker looks ahead to scraping away the dried paste that night, which will reveal the orange stain underneath, and she calls that stain a bird. Amber is a warm, glowing colour, and it is also a fossil resin from ancient trees, a substance that lasts, which makes the word poignant, because this stain will not. “Beneath” suggests something real lying under the surface. One reading is that true heritage appears only when the outer decoration is removed; another is that what is left is only a trace of it.',
    },
    {
      text: 'fade in a week',
      where: 'The speaker, line 43',
      analysis:
        'The line is a short, end-stopped sentence of six plain, single-syllable words, and its flatness is what makes it sad. After the colour and bustle of the bazaar, the speaker states the loss as a simple fact, in the future tense that has now replaced the present of the refrain. Henna does fade within weeks, so the line is accurate, but it applies to more than the stain: to the visit, to the girl, and perhaps to the feeling of belonging the pattern gave her.',
    },
    {
      text: 'longing',
      where: 'The speaker, line 47',
      analysis:
        'The final lines keep the girl and the bazaar from the refrain but change everything else. In place of the present action of hennaing comes longing, a word for wanting what is absent. The speaker imagines stretching out her hands over the width of a country, one of them the hand the girl decorated, reaching for someone who is no longer there. The poem ends not with belonging but with the desire for it, and with the girl still unknown. A strong answer argues that the feeling is deeper at the end than at the start: the experience has sharpened her sense of what she lacks.',
    },
  ],

  extracts: [
    {
      title: 'The girl at work',
      where: 'Lines 1-13',
      pointer:
        'From the first line of the poem to the end of the second refrain at line 13, anthology page 27.',
      summary:
        'In an evening market lit by electric signs, a girl the speaker does not know decorates her hand with henna. Alvi describes the paste being piped on and the girl holding the hand steady against her own knee, then repeats the opening four-line refrain with one change: the small price of the work.',
      annotations: [
        {
          phrase: 'studded with neon',
          note: 'A jewellery word used for electric light: the bazaar glitters, and it is modern, which sets up the tension between tradition and modernity at once.',
        },
        {
          phrase: 'icing my hand',
          note: 'A homely metaphor from cake decoration makes the henna thick, sweet and celebratory, and shows the speaker translating an unfamiliar art into her own terms.',
        },
        {
          phrase: 'is hennaing my hand',
          note: 'The present continuous slows time, so the reader waits through the work with the speaker; its return at line 13 gives the scene the rhythm of a chant.',
        },
        {
          phrase: 'hennaing',
          note: 'Henna used as a verb, a rare enough form that the anthology glosses it in a footnote: it keeps the act of decorating, not only its result, in front of the reader.',
        },
      ],
      question:
        'How does Alvi use language and structure in lines 1-13 to present the speaker’s first experience of the bazaar?',
    },
    {
      title: 'The peacock and the watching street',
      where: 'Lines 14-27',
      pointer:
        'From line 14, where a breeze stirs the speaker’s kameez, to the short sentence that ends at line 27.',
      summary:
        'As a peacock design takes shape on the speaker’s palm, the street around her seems to come alive: colours drift upwards, mannequins in the shop windows lean and stare, and banners advertising a beauty contest and furnishing fabrics hang over her head. The section ends with her feeling that the henna has entered her body.',
      annotations: [
        {
          phrase: 'Western perms',
          note: 'The staring mannequins bring the West into the bazaar, an irony for a visitor who seems to have come looking for something traditional and unchanged.',
        },
        {
          phrase: 'canopy',
          note: 'A word usually met as a noun, used here as a verb: the adverts overhead become a shelter around her, which can feel protective or smothering, and it is made of modern, commercial India.',
        },
        {
          phrase: 'I have new brown veins',
          note: 'The short sentence is the peak of belonging: the pattern seems to enter her blood, though the word new admits it has only just been acquired.',
        },
      ],
      question:
        'How does Alvi present the bazaar as a place that is both exciting and unsettling in lines 14-27?',
    },
    {
      title: 'Holding on and letting go',
      where: 'Lines 28-48',
      pointer: 'From the third refrain at line 28 to the last line of the poem, line 48.',
      summary:
        'The third refrain praises the girl’s skill, and the speaker holds on to the pattern like a passenger hanging from a train. Then the bustle dies away and the verbs turn to the future: she will remove the dried paste, see the stain it leaves, know it will soon go, and one day reach from far away for the girl.',
      annotations: [
        {
          phrase: 'deftly',
          note: 'The third refrain swaps the price in line 11 for praise of the girl’s skill, so the transaction has become admiration for her as an artist.',
        },
        {
          phrase: 'clinging',
          note: 'The verb, repeated in the train simile that follows, turns wonder into desperation: she is holding on to something that is already carrying her away.',
        },
        {
          phrase: 'amber bird beneath',
          note: 'Scraping away the dry surface reveals the glowing stain, so something beautiful is found beneath, but it is a trace, not the thing itself.',
        },
        {
          phrase: 'fade in a week',
          note: 'A flat, end-stopped statement in the future tense: the loss is stated as a plain fact, which makes it harder to bear than a lament would be.',
        },
        {
          phrase: 'longing',
          note: 'The final echo of the refrain replaces the verb of action with a word of desire, so the poem closes on absence rather than on belonging.',
        },
      ],
      question:
        'How does Alvi use form and structure in lines 28-48 to show how the speaker’s feelings change by the end of the poem?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Metaphor',
      example: 'The girl is “icing my hand” (line 7).',
      effect:
        'The image of piping icing onto a cake makes the henna thick, sweet and decorative, and ties it to celebration. Because it is a homely, familiar comparison, it also shows the speaker describing the bazaar from outside, in the language of her own life.',
    },
    {
      technique: 'Refrain with variation',
      example:
        'The four-line refrain at lines 1-4 returns at lines 10-13 and 28-31, with its second line changed each time (first a price in rupees, then “deftly”), and is echoed at lines 47-48, where “is hennaing my hand” gives way to “longing”.',
      effect:
        'The repetition gives the poem the rhythm of a chant and keeps pulling the reader back to the girl at work. Because the line that changes moves from price to skill to desire, the refrain traces the speaker’s journey from customer, to admirer, to someone who has lost what she found.',
    },
    {
      technique: 'Shift from present to future tense',
      example:
        'The present tense, anchored by the refrain’s “is hennaing my hand”, holds through the train simile and the hush of lines 36-37; from line 38 the verbs are in the future, down to the admission that the pattern will “fade in a week”.',
      effect:
        'The present tense makes the experience feel endless while it lasts. The switch at the turn makes the speaker look ahead to its loss before it is even over, so the second half of the poem mourns what the first half celebrated.',
    },
    {
      technique: 'Metaphor of the body',
      example: '“I have new brown veins” (line 27).',
      effect:
        'The henna lines become veins, so a decoration on the skin seems to enter the bloodstream. Heritage is imagined as something carried in the blood, and the short, certain sentence marks the height of her sense of belonging, while “new” admits it has only just been acquired.',
    },
    {
      technique: 'Personification',
      example:
        'In lines 18-22 colours drift upwards away from the street and the shop dummies lean and gaze out, wearing their “Western perms”; at lines 36-37 the noisy, angry streets are said to fall silent.',
      effect:
        'The bazaar becomes a living presence that watches and surrounds the speaker, which makes the scene dreamlike, even a little surreal, and suggests how heightened and dizzy her perception is. When the streets fall quiet the mood changes with them.',
    },
    {
      technique: 'Simile',
      example:
        'At lines 32-35 the speaker, “clinging” to the lines of the peacock design, compares herself to passengers hanging on to the outside of a train.',
      effect:
        'The simile is urgent and physical. A train moves on whatever its passengers do, and hanging from it is precarious, so the image suggests she knows the moment is passing and fears losing her grip on it.',
    },
    {
      technique: 'Colour and light imagery',
      example:
        'The bazaar “studded with neon” (line 2), the peach tones at line 9, the brown of the paste (lines 5, 27 and 39), and the “amber bird beneath” (line 42).',
      effect:
        'The poem moves from artificial, glittering light to the warm natural colours of skin and henna. Amber, the last new colour, glows but belongs to something that will fade, so the colour scheme follows the poem from dazzle to tenderness to loss. When neon returns in the final line, it is as the light of a remembered place.',
    },
    {
      technique: 'Word-class shift',
      example:
        'The banners “canopy” the speaker (line 26), a word usually met as a noun, used here as a verb.',
      effect:
        'Using the noun as a verb turns the adverts into something that acts on her, sheltering or smothering her. It is a compressed, surprising use of language typical of the poem, which also uses henna, more familiar as a noun, as the verb of its refrain.',
    },
    {
      technique: 'Simile and sound',
      example:
        'Line 41 uses a simile of a snail’s trail, built on softness, for the moment the stain is uncovered by the scraping.',
      effect:
        'The soft s sounds slow the line down and make the moment gentle and careful. A snail’s trail is also a mark left by something that has already moved on, which fits a poem about a trace of an experience that is ending.',
    },
    {
      technique: 'Enjambment across short lines',
      example:
        'The sentence about holding on runs across four short lines, 32 to 35, with no punctuation at the ends of the first three and a full stop only at the end of line 35.',
      effect:
        'The reader has to keep going through three line breaks without a pause, holding on as the speaker holds on, until the full stop at line 35 lets go, just before the streets fall silent.',
    },
  ],

  vocabulary: [
    {
      term: 'bazaar',
      definition:
        'A market of stalls and small shops, especially in the Middle East and South Asia. The word came into English from Persian, by way of Ottoman Turkish and then French or Italian.',
    },
    {
      term: 'neon',
      definition:
        'A gas that glows brightly when electricity passes through it, used in advertising signs. Here it makes the market modern and dazzling.',
    },
    {
      term: 'hennaing',
      definition:
        'Decorating the skin with henna, a dye made from a plant. The anthology explains the word in a footnote. Henna is far more often a noun; here it is used in its rarer form as a verb.',
    },
    {
      term: 'mehndi',
      definition:
        'The South Asian name for henna decoration of the hands and feet, traditionally worn by brides and at festivals such as Eid and Diwali. The paste dries, is removed, and leaves an orange stain that darkens and then fades over one to three weeks.',
    },
    {
      term: 'nozzle',
      definition:
        'The narrow tip through which the henna paste is squeezed. It links to the icing metaphor, since icing is piped onto a cake in the same way.',
    },
    {
      term: 'rupee',
      definition:
        'The currency of India, and also of Pakistan. The small payment at line 11 reminds us that this intimate moment is also a purchase.',
    },
    {
      term: 'kameez',
      definition:
        'A loose-fitting tunic, as the anthology’s footnote explains. By wearing one in the bazaar the speaker has, in a sense, dressed the part.',
    },
    {
      term: 'shadow-stitched',
      definition:
        'Probably embroidered with shadow work, a stitch sewn on the back of fine fabric so that it shows through as a shadow on the front; it is one of the stitches of chikan, the embroidery of Lucknow in northern India. The poem does not name the stitch, so this is the likeliest sense rather than a certainty; the word shadow also hints at something only half present.',
    },
    {
      term: 'satin-peach',
      definition:
        'Smooth and glossy like satin, and the pale orange-pink of a peach. It most likely describes the girl’s clothes over her knee, though it could describe her skin; either way it is soft and luxurious.',
    },
    {
      term: 'dummies',
      definition:
        'Shop mannequins: life-size model figures used to display clothes in shop windows.',
    },
    {
      term: 'perm',
      definition:
        'Short for permanent wave: hair set in lasting curls by a chemical treatment. In the poem the style is marked as Western.',
    },
    {
      term: 'Miss India',
      definition:
        'India’s national beauty contest, run by Femina magazine, which chooses India’s contestants for international pageants such as Miss World. The banner at line 23 places the scene around 1993.',
    },
    {
      term: 'canopy',
      definition:
        'A cloth covering hung or held above something. Alvi uses it as a verb, meaning to cover overhead.',
    },
    {
      term: 'deftly',
      definition: 'Quickly, neatly and skilfully.',
    },
    {
      term: 'amber',
      definition:
        'A warm yellow-orange colour; also a hard fossil resin from ancient trees, used in jewellery.',
    },
    {
      term: 'dual heritage',
      definition:
        'Having family roots in two cultures or countries. Alvi’s father was Pakistani and her mother British.',
    },
    {
      term: 'diaspora',
      definition:
        'People living outside the country their family comes from, and the communities they form. A useful word for writing about a speaker who visits a heritage country as an outsider.',
    },
    {
      term: 'refrain',
      definition: 'A line or group of lines repeated at intervals through a poem.',
    },
    {
      term: 'present continuous',
      definition:
        'A verb form for an action in progress, such as is painting. The refrain uses it, so the henna seems always to be happening.',
    },
    {
      term: 'enjambment',
      definition: 'Running a sentence on from one line of verse into the next without a pause.',
    },
    {
      term: 'free verse',
      definition: 'Poetry without a regular pattern of rhyme or metre, as here.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Alvi present the speaker’s feelings about her cultural identity in An Unknown Girl? In your answer, comment on the writer’s use of language, form and structure, and refer closely to the poem.',
        skill: 'Language, form and structure analysis across the whole poem',
        guidance: [
          'Open with an argument, not a summary: for example, that the speaker’s sense of belonging grows while the henna is applied and then slips away, leaving longing rather than certainty.',
          'Analyse the opening: the neon setting and the metaphor of “icing my hand” show wonder, and also an outsider translating what she sees into familiar terms.',
          'Track the refrain: explain the present continuous, the second line that changes each time, and the final echo in which the verb is replaced by “longing”.',
          'Take the climax at line 27: explore “new brown veins” as heritage entering the body, and weigh what the word “new” admits.',
          'Analyse the turn at lines 36-43: the silence, the future tense, the scraping, the “amber bird beneath” and the flat statement that it will “fade in a week”.',
          'End on the last five lines: the reaching gesture and the girl who is still unknown. Say what the poem finally suggests about a heritage that is inherited but not lived.',
        ],
      },
      {
        question:
          'Explore how Alvi uses the setting of the bazaar to convey the speaker’s experience.',
        skill: 'Language analysis: setting and imagery',
        guidance: [
          'Start with light: the evening setting, the bazaar “studded with neon”, and the way the word neon returns in the last line.',
          'Look at the personified street in lines 18-26: colours drifting up into the air, watching dummies with “Western perms”, banners that “canopy” her. Decide whether the effect is joyful, overwhelming or both.',
          'Consider what these details say about India in the early 1990s: modern, commercial and looking West, not the timeless place a visitor might expect.',
          'Show how the setting changes at lines 36-37, when the bustle falls silent, and what that silence does to the mood.',
          'Conclude that the setting mirrors the speaker: a place where cultures mix, as they do in her.',
        ],
      },
      {
        question:
          'How does Alvi present the unknown girl, and why do you think she remains unknown?',
        skill: 'Language analysis and interpretation of a figure in the poem',
        guidance: [
          'Gather what the poem gives us: her skill (“deftly”), her closeness as she holds the speaker’s hand on her knee, the payment, and her silence.',
          'Analyse the title phrase and its repetition at lines 3, 12 and 30, and the change from an indefinite to a definite article in the final echo at line 47.',
          'Offer at least two readings: a real young woman at work; a symbol of the heritage the speaker cannot know from the inside; perhaps the self the speaker might have been.',
          'Weigh them, and consider the imbalance between a customer searching for identity and a worker whose life the poem never enters.',
          'End with the final lines: explain why the speaker longs for the girl rather than for India itself.',
        ],
      },
      {
        question:
          'How does the ending of An Unknown Girl change the way the reader understands what has come before? Refer to lines 36-48 and to the poem as a whole.',
        skill: 'Structure and whole-text argument',
        guidance: [
          'Identify the turn at line 36 and the move from the present tense of the refrain into the future.',
          'Analyse the scraping of the dried lines and the “amber bird beneath”: what is revealed, and what is lost.',
          'Explain how “fade in a week” reframes the earlier certainty of “I have new brown veins”.',
          'Compare the final echo with the first refrain: the verb, the adjective for the bazaar, the article before girl.',
          'Argue what the poem is finally about: not only a moment of belonging, but the memory and the desire that it leaves behind.',
        ],
      },
    ],
    tips: [
      'Use line numbers. The poem is one unbroken stanza of 48 lines, so refer to lines, not stanzas.',
      'Write about the speaker, not Alvi. The biography is useful context, but the poem is set in India while Alvi was born in Pakistan, and the speaker is never named.',
      'Follow the refrain and its changes. A repeated line that is not quite the same each time is one of the most rewarding things to analyse in this poem.',
      'Do not treat the bazaar as exotic background. The neon, the Western hairstyles and the 1993 banner are deliberate, and they complicate the idea of a traditional homeland.',
      'Offer alternatives, then choose: the girl as a real person and as a symbol; the henna as belonging and as a bought, temporary decoration. Say which reading you find more convincing, and why.',
      'Link every technique to feeling. Tense, line length and repetition all show a speaker trying to hold on to a moment that is passing.',
      'Check every detail against your anthology. Some notes describe things the poem does not contain, such as an amber coin paid to the girl, a line drawn across the palm, or a dream in which skin is peeled back.',
    ],
  },

  modelAnswer: {
    question:
      'How does Alvi present the speaker’s feelings about her cultural identity in An Unknown Girl?',
    paragraph:
      'Alvi presents the speaker’s sense of belonging as something that grows while the henna is applied and then begins to slip away. At first she describes the girl’s work from a slight distance: the metaphor “icing my hand” turns the traditional art of henna into a homely image of cake decoration, which suggests that she is translating the bazaar into the terms of the life she knows. By line 27, however, the distance has closed. The short declarative sentence “I have new brown veins” imagines the pattern entering her bloodstream, as if her heritage were now carried inside her like ancestry. Yet the adjective “new” quietly undercuts this certainty, because what is new has been acquired rather than inherited, and can be lost. Alvi’s structure confirms the doubt. Within a few lines the speaker is “clinging” to the pattern like a passenger on the outside of a train, and after the turn at line 36 the verbs move into the future, where she admits the stain will “fade in a week”. The refrain that once held her in the present, “is hennaing my hand”, is finally replaced by “longing”, so the poem ends not in belonging but in the desire for it.',
    commentary: [
      'It opens with an argument about change across the poem, so every quotation that follows is evidence for a line of thought rather than an item on a list.',
      'It analyses single words closely, the icing metaphor and the adjective “new”, and says what each suggests about the speaker instead of only naming the technique.',
      'It moves from language to structure: the tense shift, the turn at line 36 and the changing refrain show how the form carries the meaning.',
      'It holds two readings in tension, belonging and its limits, and ends on the poem’s final movement, which shows a grasp of the whole text.',
      'Every quotation is brief and embedded in the sentence, which leaves room for analysis, and every claim is anchored to a line number.',
    ],
  },

  timeline: [
    {
      where: 'Lines 1-13',
      title: 'The girl at work',
      summary:
        'In an evening market lit by electric signs, a girl the speaker does not know pipes henna onto her hand, holding it steady on her own knee. The four-line refrain is heard twice.',
      setting: 'An evening bazaar in India, lit by neon',
      who: ['The speaker', 'The unknown girl'],
      quote: 'studded with neon',
      themes: ['Tradition and modernity', 'Connection between strangers'],
      tension: 2,
      significance:
        'Sets up the glittering modern setting, the closeness of the two figures and the refrain that shapes the whole poem.',
    },
    {
      where: 'Lines 14-27',
      title: 'The peacock spreads',
      summary:
        'A peacock design takes shape on her palm while the street seems to rise and watch around her: colours drift up, shop dummies lean, banners hang overhead. She feels the pattern has entered her blood.',
      setting: 'The crowded street around the stall, under advertising banners',
      who: ['The speaker', 'The unknown girl'],
      quote: 'I have new brown veins',
      themes: [
        'Heritage written on the body',
        'Tradition and modernity',
        'Cultural identity and belonging',
      ],
      tension: 3,
      significance:
        'The high point of belonging, set against a bazaar that is itself modern and looking towards the West.',
    },
    {
      where: 'Lines 28-35',
      title: 'Holding on',
      summary:
        'The refrain returns a third time, now praising the girl’s skill, and the speaker holds on to the lines of the peacock design as desperately as people hanging on to the outside of a train.',
      setting: 'The henna stall in the bazaar',
      who: ['The speaker', 'The unknown girl'],
      quote: 'clinging',
      themes: ['Cultural identity and belonging', 'Transience and memory'],
      tension: 4,
      significance: 'Wonder turns into the fear of losing the moment even as it happens.',
    },
    {
      where: 'Lines 36-43',
      title: 'The stain beneath',
      summary:
        'The noisy streets fall silent. Looking ahead to the night, the speaker imagines scraping off the dried paste to reveal the orange stain, and admits that it will soon fade.',
      setting: 'The bazaar as its streets fall quiet, then the speaker’s imagined bedtime',
      who: ['The speaker'],
      quote: 'amber bird beneath',
      themes: ['Transience and memory', 'Heritage written on the body'],
      tension: 3,
      significance:
        'The turn: the verbs move into the future and the poem begins to mourn what it has only just been given.',
    },
    {
      where: 'Lines 44-48',
      title: 'Reaching across a country',
      summary:
        'In an imagined future far away, whenever India comes back to her, the speaker pictures herself stretching out both hands over the width of a country, yearning for the girl and the brightly lit market where they met.',
      setting: 'An imagined future, far from India',
      who: ['The speaker', 'The unknown girl'],
      quote: 'longing',
      themes: ['Longing and distance', 'Cultural identity and belonging'],
      tension: 4,
      significance:
        'The last echo of the refrain replaces action with desire, so the poem ends in longing rather than in belonging.',
    },
  ],

  compareWith: [
    {
      title: 'Still I Rise',
      href: '/igcse/edexcel/poetry/still-i-rise',
      reason:
        'Also in Part 2 of the anthology: both poems build identity through a refrain and draw on a heritage, but Angelou’s speaker claims hers with defiant confidence while Alvi’s reaches for one she cannot quite hold.',
    },
    {
      title: 'The Bright Lights of Sarajevo',
      href: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
      reason:
        'Also in Part 2: both are set in a city street after dark, play light against darkness, and find a moment of closeness between two people in a public place.',
    },
    {
      title: 'The Story of an Hour',
      href: '/revision/texts/the-story-of-an-hour',
      reason:
        'A Part 2 prose text: both centre on a woman’s private sense of self, stirred by the sights and sounds of the street around her, and both show her reaching out towards something she will not have: Louise spreads her arms in welcome to years she does not live to see, and Alvi’s speaker holds out her hands to a girl she will never know.',
    },
    {
      title: 'The Danger of a Single Story',
      href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
      reason:
        'From Part 1 of the same anthology: Adichie warns against seeing a people or a place as only one thing, and describes her own surprise, as a visitor to Guadalajara, at ordinary Mexican life in its streets and marketplace; Alvi’s neon, commercial bazaar likewise refuses the single exotic story of India a visitor might expect.',
    },
  ],

  contentGuidance: [],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, ISBN 978 1 446 93108 0, page 27: the text of the poem, its line numbering, its two footnotes, and the acknowledgement (reproduced by permission of Bloodaxe Books on behalf of the author, from Split World: Poems 1990-2005). Every quotation, line reference and word count on this page was checked against it. Also pages 2, 28, 29 and 30 onwards for the comparison texts.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Ben Wilkinson, review of Split World: places the poem in Alvi’s second collection, A Bowl of Warm Air (1996), and gives her birth in Lahore and move to England at a few months old',
      url: 'https://benwilko.substack.com/p/moniza-alvis-split-world',
    },
    {
      label:
        'Bloodaxe Books author page: born in Pakistan, grew up in Hertfordshire, many years a secondary school teacher in London; Split World includes poems from her five earlier collections (Bloodaxe gives its publication date as 22 May 2008; the anthology acknowledgement gives 2007, so this page states no year for it)',
      url: 'https://www.bloodaxebooks.com/ecs/category/moniza-alvi',
    },
    {
      label:
        'Poetry Archive, Moniza Alvi: born in Lahore, came to England at a few months old, grew up in Hatfield',
      url: 'https://poetryarchive.org/poet/moniza-alvi/',
    },
    {
      label:
        'South Asian Britain: Connecting Histories, Moniza Alvi: Pakistani father and British mother, born 1954, did not return to Pakistan until after The Country at My Shoulder (1993)',
      url: 'https://southasianbritain.org/people/moniza-alvi/',
    },
    {
      label:
        'Wikipedia, Moniza Alvi: birth, parents, move to Hatfield, collections (cross-check only)',
      url: 'https://en.wikipedia.org/wiki/Moniza_Alvi',
    },
    {
      label:
        'Writers Make Worlds, Moniza Alvi: Alvi on the theme of a split in her work that she tries to mend (paraphrased on this page, not quoted); also discusses the poem as part of A Bowl of Warm Air, written after travel in the Indian subcontinent',
      url: 'https://writersmakeworlds.com/moniza-alvi/',
    },
    {
      label:
        'Wikipedia, Mehndi: paste applied with a cone, dries and is removed, orange stain darkening over 24 to 72 hours and lasting one to three weeks; worn at weddings and at festivals including Eid and Diwali',
      url: 'https://en.wikipedia.org/wiki/Mehndi',
    },
    {
      label: 'Wikipedia, Indian peafowl: the national bird of India',
      url: 'https://en.wikipedia.org/wiki/Indian_peafowl',
    },
    {
      label:
        'Wikipedia, Femina Miss India: national pageant run by Femina, selecting India’s Miss World entrants',
      url: 'https://en.wikipedia.org/wiki/Femina_Miss_India',
    },
    {
      label: 'Wikipedia, Economic liberalisation in India: reforms began in 1991',
      url: 'https://en.wikipedia.org/wiki/Economic_liberalisation_in_India',
    },
    {
      label:
        'Wikipedia, Chikan (embroidery): shadow work, a stitch sewn on the reverse of fine fabric',
      url: 'https://en.wikipedia.org/wiki/Chikan_(embroidery)',
    },
    {
      label: 'Wiktionary: bazaar (sense and etymology), perm, deftly, amber',
      url: 'https://en.wiktionary.org/wiki/bazaar',
    },
  ],
}
