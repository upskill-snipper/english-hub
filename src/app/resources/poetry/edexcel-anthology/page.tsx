'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Quote {
  text: string
  technique: string
  analysis: string
}

interface Poem {
  id: string
  title: string
  poet: string
  date: string
  context: string
  summary: string
  formAndStructure: string
  quotes: Quote[]
  themes: string[]
  comparisons: string[]
}

/* ------------------------------------------------------------------ */
/*  Data: Edexcel Relationships cluster                                */
/* ------------------------------------------------------------------ */

// The fifteen poems of Collection A: Relationships in the Pearson Edexcel GCSE (9-1)
// English Literature Poetry Anthology (Issue 4), in the anthology's order. Until
// 2 October 2026 ten of the fifteen entries here were AQA Love and Relationships poems
// (Letters from Yorkshire, The Farmer's Bride, Walking Away, Eden Rock, Follower,
// Mother, any distance, Before You Were Mine, Winter Swans, Singh Song! and Climbing My
// Grandfather), none of which Edexcel sets, while ten of Edexcel's own poems were
// missing; the comparisons and comparison pairs sent students to the same AQA poems.
// The new entries quote the anthology's printing, and quotations from poems in
// copyright are kept within no-poem-quoted-beyond-fair-dealing.test.ts.
const POEMS: Poem[] = [
  {
    id: 'la-belle-dame',
    title: 'La Belle Dame Sans Merci',
    poet: 'John Keats',
    date: '1819',
    // Until 26 September 2026 the version note below had the two texts the
    // wrong way round: it said the anthology prints the 1820 Indicator text
    // and that 'knight-at-arms' belongs to it. Pearson's anthology prints the
    // poem as 'La Belle Dame Sans Merci (1819)', opening 'knight-at-arms';
    // the 1820 revision is the one that opens 'wretched wight'. The fourth
    // quotation had also dropped the comma the anthology prints after 'kings'.
    context:
      "Written during the Romantic period, when poets valued emotion, nature, and the supernatural. Keats was influenced by medieval ballads and chivalric romance. The title is borrowed from a 15th-century French poem meaning 'The Beautiful Lady Without Mercy'. Keats was also grappling with his own mortality due to tuberculosis. VERSION NOTE: The Edexcel UK GCSE 1ET0 anthology prints the original 1819 version of the poem (with 'knight-at-arms'), NOT the revised version printed in The Indicator in 1820 (which uses 'wretched wight'). The quotations below are taken from the 1819 anthology text - always quote from the anthology version when answering Edexcel questions.",
    summary:
      'A knight is found alone on a cold hillside, pale and haggard. He recounts meeting a beautiful, supernatural woman who enchanted him with food, song, and declarations of love. She lulled him to sleep, and he dreamed of previous victims warning him of enthrallment. He woke alone on the cold hill, trapped in a cycle of longing.',
    formAndStructure:
      "Literary ballad with twelve quatrains in ABCB rhyme scheme. The shortened fourth line in each stanza creates a halting, unresolved rhythm that mirrors the knight's entrapment. The circular structure (ending where it began on the cold hillside) reinforces the sense of inescapable suffering. The frame narrative (questioner and knight) creates dramatic distance.",
    quotes: [
      {
        text: 'O what can ail thee, knight-at-arms, / Alone and palely loitering?',
        technique: 'Archaic diction / pathetic fallacy',
        analysis:
          "The medieval register ('thee', 'knight-at-arms') establishes the ballad form and distances the poem from reality. 'Palely loitering' combines physical weakness with aimlessness, suggesting the knight is drained of vitality and purpose by his encounter.",
      },
      {
        text: "I met a lady in the meads, / Full beautiful – a faery's child",
        technique: 'Supernatural imagery / caesura',
        analysis:
          "The dash creates a pause that emphasises the revelation of her otherworldly nature. 'Faery's child' marks her as dangerously beyond the human realm, foreshadowing that the relationship is doomed because it crosses the boundary between mortal and immortal.",
      },
      {
        text: 'She looked at me as she did love, / And made sweet moan',
        technique: 'Ambiguity / sensory language',
        analysis:
          "The crucial word 'as' introduces ambiguity: does she love him, or merely appear to? This uncertainty is central to the poem's meaning. The 'sweet moan' blends pleasure with pain, hinting at the suffering her seduction will ultimately cause.",
      },
      {
        text: 'I saw pale kings, and princes too, / Pale warriors, death-pale were they all',
        technique: 'Repetition / listing',
        analysis:
          "The triple repetition of 'pale' intensifies the horror of the dream vision. The list of powerful figures (kings, princes, warriors) reduced to ghostly shells shows that no status can protect against destructive love. Their warning is futile, as the knight has already been ensnared.",
      },
    ],
    themes: ['Destructive love', 'Power and enthrallment', 'Mortality', 'The supernatural', 'Loss'],
    comparisons: [
      'Sonnet 43 (contrasts: destructive vs. life-giving love)',
      'My Last Duchess (links: male powerlessness vs. male control in love)',
      'She Walks in Beauty (contrasts: beauty that destroys vs. beauty that reflects goodness)',
    ],
  },
  {
    id: 'a-child-to-his-sick-grandfather',
    title: 'A Child to his Sick Grandfather',
    poet: 'Joanna Baillie',
    date: '1790',
    context:
      "Joanna Baillie (1762-1851) was a Scottish poet and dramatist, later famous for her Plays on the Passions. This poem appeared in her first book, Poems (1790), published anonymously, which set out to describe rural life and ordinary feeling in plain language, eight years before Wordsworth and Coleridge's Lyrical Ballads made a similar case. The old man is cared for at home by his family and neighbours, as the sick and elderly usually were.",
    summary:
      "A young child speaks to his grandfather, who is old and ill. He notices how frail the old man has become, remembers how the grandfather once played with him and praised him, and promises to look after him in return. Neighbours call and pray for him. In the last stanza the child begins a story, but the grandfather's head sinks and he no longer hears: he may be falling asleep, or dying.",
    formAndStructure:
      "Eight six-line stanzas in rhyming couplets, mostly in iambic tetrameter, each closing on a shorter line. Six of the eight stanzas end on the word 'dad', a refrain that keeps the child's affection at the centre of the poem. The poem moves from the grandfather's past strength to his present weakness, and from the child's chatter to silence.",
    quotes: [
      {
        text: "Grand-dad, they say you're old and frail, / Your stocked legs begin to fail",
        technique: "Direct address / child's voice",
        analysis:
          "The child begins by repeating what adults say ('they say'), so his first words are borrowed ones: he is only starting to understand what frailty means. The familiar 'Grand-dad' and the simple, mostly one-syllable words make the voice young and affectionate, while 'begin to fail' quietly announces decline.",
      },
      {
        text: 'Your knobbed stick (that was my horse)',
        technique: 'Parenthesis / past and present',
        analysis:
          "The brackets hold a memory of play inside a description of illness: the walking stick the old man now needs was once the child's hobby-horse. Baillie shows the same object changing its meaning as the grandfather changes, and the child's mind running back to happier times.",
      },
      {
        text: 'You will not die and leave us then? / Rouse up and be our dad again.',
        technique: 'Rhetorical question / imperative',
        analysis:
          "The child names death directly, then hurries past it with a command. The question mark makes his fear audible, and 'Rouse up' shows a child's belief that illness can be overcome by effort. Calling his grandfather 'our dad' stresses how central he has been to the whole family.",
      },
      {
        text: 'Down on your bosom sinks your head – / You do not hear me, dad.',
        technique: 'Ambiguous ending / dash',
        analysis:
          'The last lines leave the outcome open: the grandfather may be falling asleep, or dying. The dash marks the moment the child notices, and the short final line is the first time he speaks without being heard. The reader understands more than the child does.',
      },
    ],
    themes: [
      'Family love',
      'Old age and illness',
      'Childhood and innocence',
      'Care and duty',
      'Mortality',
    ],
    comparisons: [
      'My Father Would Not Show Us (links: a child at the deathbed of an older relative; contrasts: closeness vs. exclusion)',
      'Nettles (links: love between generations; contrasts: a father protecting a child vs. a child wanting to care for an old man)',
      'One Flesh (links: a child observing an older relative; contrasts: tender closeness vs. cool distance)',
    ],
  },
  {
    id: 'she-walks-in-beauty',
    title: 'She Walks in Beauty',
    poet: 'Lord Byron',
    date: '1814',
    context:
      'Byron (1788-1824) was one of the most famous Romantic poets, and was notorious for his love affairs. He wrote this poem in June 1814 after seeing his cousin by marriage, Anne Wilmot, at a party, wearing a black mourning dress decorated with spangles. It was published in Hebrew Melodies (1815), a collection of lyrics written to be set to music by the composer Isaac Nathan. Unusually for Byron, the poem admires a woman without any hint of seduction.',
    summary:
      'The speaker describes a woman whose beauty combines darkness and light in perfect balance, like a clear, starry night. He moves from her appearance, her eyes, her dark hair and her face, to what it reveals about her: a calm mind, a life spent in goodness and an innocent heart. Her beauty is presented as the outward sign of inner goodness.',
    formAndStructure:
      'Three six-line stanzas rhyming ABABAB, in regular iambic tetrameter. The repeated rhymes and steady metre create the balance and harmony the poem praises. Each stanza moves further inward: from her appearance in the first, to her face and thoughts in the second, to her character in the third, which ends on an exclamation.',
    quotes: [
      {
        text: 'She walks in beauty, like the night / Of cloudless climes and starry skies',
        technique: 'Simile / enjambment',
        analysis:
          "Comparing a woman to night rather than day is unexpected: this beauty is dark, mysterious and calm, not dazzling. The enjambment carries the simile over the line break, so the reader, like the speaker, is drawn on by the image. The soft sibilance of 'cloudless climes and starry skies' sounds admiring and hushed.",
      },
      {
        text: "And all that's best of dark and bright / Meet in her aspect and her eyes",
        technique: 'Antithesis / balance',
        analysis:
          "The pairing of opposites, 'dark and bright', is the poem's central idea: perfect beauty is a balance, not an extreme. The verb 'Meet' suggests harmony, as if opposites are reconciled in her, and the focus on her 'eyes' prepares for the poem's turn inward.",
      },
      {
        text: "One shade the more, one ray the less, / Had half impair'd the nameless grace",
        technique: 'Balanced syntax / light imagery',
        analysis:
          "The parallel phrases measure her beauty precisely: a single shade or ray more or less would spoil it. 'Nameless grace' admits that her quality cannot be put into words, a paradox in a poem made of words, and 'grace' carries a spiritual as well as a physical sense.",
      },
      {
        text: 'A heart whose love is innocent!',
        technique: 'Exclamation / moral conclusion',
        analysis:
          "The poem ends not on her looks but on her goodness. The exclamation is the speaker's only burst of feeling, and 'innocent' makes clear that his admiration is respectful rather than desiring, which is unusual for a poet with Byron's reputation.",
      },
    ],
    themes: ['Beauty', 'Admiration', 'Harmony and balance', 'Inner goodness', 'Light and dark'],
    comparisons: [
      'La Belle Dame Sans Merci (contrasts: beauty that reflects goodness vs. beauty that destroys)',
      'Sonnet 43 (links: adoration of a loved one; contrasts: admiration from outside vs. love declared from within)',
      'Valentine (contrasts: idealised, conventional praise vs. a deliberately unromantic gift)',
    ],
  },
  {
    id: 'a-complaint',
    title: 'A Complaint',
    poet: 'William Wordsworth',
    date: '1807',
    context:
      "Wordsworth (1770-1850), a leading Romantic poet, wrote this poem in 1806 and published it in Poems, in Two Volumes (1807). It is usually read as being about the cooling of his close friendship with Samuel Taylor Coleridge, with whom he had published Lyrical Ballads in 1798. A complaint was a traditional kind of poem lamenting lost love or misfortune; here the lost love is a friend's.",
    summary:
      "The speaker says that a change has made him poor. His friend's love was once like a fountain at the door of his heart, flowing freely without thought of its own generosity or of his need. Now he has only a hidden, comfortless well: the love may still be deep and never dry, but it is silent and out of sight, and he can no longer reach it.",
    formAndStructure:
      'Three six-line stanzas rhyming ABABCC, in iambic tetrameter, so each stanza ends on a couplet that works like a conclusion. The poem is built on one extended metaphor that changes as it goes, from a flowing fountain to a still, hidden well. Its circular structure returns at the end to the change and the poverty of the first line, so the speaker finishes where he began.',
    quotes: [
      {
        text: 'There is a change',
        technique: 'Blunt opening / monosyllables',
        analysis:
          "The poem begins with a plain statement and no explanation. The vague 'change' is never named, which suggests that it is too painful to describe, or that the speaker does not fully understand it himself. The one-syllable words give the opening a flat, numbed tone, and the line goes on to say that it has left him 'poor'.",
      },
      {
        text: "A fountain at my fond heart's door, / Whose only business was to flow",
        technique: 'Extended metaphor',
        analysis:
          "The friend's love was once a fountain: constant, generous and unforced, its 'only business' to flow. The alliteration of 'fountain' and 'fond' is warm, and placing the fountain at the door of the heart makes love something close at hand, freely given and easy to reach.",
      },
      {
        text: 'A comfortless and hidden well',
        technique: 'Contrast / metaphor',
        analysis:
          "The fountain has become a well: still, enclosed and out of sight. 'Comfortless' and 'hidden' mark the loss of warmth and openness. The speaker does not say that the love has gone, only that he can no longer see or reach it, which is perhaps more painful.",
      },
      {
        text: 'if the waters sleep / In silence and obscurity',
        technique: 'Personification / sibilance',
        analysis:
          "Even if the love is deep, 'the waters sleep'. The sibilance hushes the line, and 'obscurity' suggests something not only hidden but neglected. The speaker's question just before it, 'What matter?', shows that a love which is never expressed is, to him, as good as lost.",
      },
    ],
    themes: ['Loss of love', 'Friendship', 'Change', 'Emotional poverty', 'Nature as metaphor'],
    comparisons: [
      'Neutral Tones (links: love that has changed and gone cold; contrasts: quiet regret vs. bitterness)',
      'One Flesh (links: love that persists but is no longer expressed)',
      'My Father Would Not Show Us (links: a loved one who withdraws and hides their feelings)',
    ],
  },
  {
    id: 'neutral-tones',
    title: 'Neutral Tones',
    poet: 'Thomas Hardy',
    date: '1867',
    context:
      "Written early in Hardy's career, reflecting his pessimistic worldview. Hardy lost his Christian faith and was influenced by Darwin's theory of evolution, leading to a bleak vision of human relationships as governed by indifferent natural forces. The poem may draw on his troubled first marriage to Emma Gifford.",
    summary:
      "The speaker recalls a winter scene by a pond where a relationship reached its emotional end. The bleached, colourless landscape mirrors the death of feeling between the lovers. A bitter final stanza returns to the present, showing the memory still haunts the speaker as a lesson about love's deceptions.",
    formAndStructure:
      'Four quatrains with an ABBA rhyme scheme creating a closed, circular feel that mirrors entrapment in the memory. The poem begins and ends at the pond, forming a structural loop. The regular form contrasts with the emotional desolation it describes, as though the speaker is trying to impose order on painful experience. Past tense throughout suggests reflection rather than raw emotion.',
    // Checked on 26 September 2026 against Pearson's anthology, which spells
    // it 'grayish' (AQA's prints 'greyish'). The second analysis quoted a
    // singular the poem does not use.
    quotes: [
      {
        text: 'We stood by a pond that winter day, / And the sun was white, as though chidden of God',
        technique: 'Pathetic fallacy / simile',
        analysis:
          "The drained, 'white' sun strips warmth and colour from the scene, mirroring emotional emptiness. 'Chidden of God' personifies the sun as punished or rebuked, suggesting a universe where even divine forces have withdrawn their blessing from love.",
      },
      {
        text: 'Your eyes on me were as eyes that rove / Over tedious riddles of years ago',
        technique: 'Simile / enjambment',
        analysis:
          "The lover's wandering gaze passes over the speaker as it would over 'tedious riddles' of long ago: something once engaging but now merely tiresome. The enjambment across the lines mirrors the restless, unfocused quality of the look, reinforcing emotional disconnection.",
      },
      {
        text: 'The smile on your mouth was the deadest thing / Alive enough to have strength to die',
        technique: 'Oxymoron / paradox',
        analysis:
          "The paradox of something simultaneously 'deadest' and 'alive' captures the agonising in-between state of a dying relationship. The smile is a hollow performance, alive only in its capacity to wound.",
      },
      {
        text: 'And a pond edged with grayish leaves',
        technique: 'Pathetic fallacy / colour imagery',
        analysis:
          "The 'grayish' leaves lack even the commitment to be fully grey, embodying the 'neutral tones' of the title. This half-colour reflects the liminal state between love and indifference, where emotion has drained away but memory persists.",
      },
    ],
    themes: ['Loss of love', 'Memory and pain', "Nature's indifference", 'Deception', 'Pessimism'],
    comparisons: [
      "Sonnet 43 (contrasts: love's death vs. eternal devotion)",
      'A Complaint (links: love that has changed and gone cold; contrasts: bitterness vs. quiet regret)',
      'One Flesh (links: love that has lost its vitality)',
    ],
  },
  {
    id: 'sonnet-43',
    title: 'Sonnet 43',
    poet: 'Elizabeth Barrett Browning',
    date: '1850',
    context:
      "Written during Barrett Browning's secret courtship with Robert Browning. She was a semi-invalid controlled by her domineering father, making her declaration of love both radical and deeply personal. Part of the Sonnets from the Portuguese sequence.",
    summary:
      'The speaker attempts to quantify and catalogue the ways she loves her partner. She moves from abstract, spiritual love to the everyday and physical, before concluding that her love will only grow stronger after death. The poem is an unrestrained, sincere celebration of romantic devotion.',
    formAndStructure:
      "Petrarchan sonnet with 14 lines of iambic pentameter. The ABBA ABBA rhyme scheme in the octave creates a sense of completeness and certainty. The anaphoric repetition of 'I love thee' structures each new dimension of love. The sestet shifts to encompass past griefs and childhood faith, suggesting love redeems suffering. No volta disrupts the argument, reflecting unwavering devotion.",
    quotes: [
      {
        text: 'How do I love thee? Let me count the ways',
        technique: 'Rhetorical question / anaphora',
        analysis:
          "The opening rhetorical question suggests love is so vast it must be systematically catalogued. The verb 'count' implies an attempt to rationalise an irrational emotion, establishing the poem's central tension between measurement and boundlessness.",
      },
      {
        text: 'I love thee to the depth and breadth and height / My soul can reach',
        technique: 'Spatial metaphor / tricolon',
        analysis:
          "The tricolon of abstract dimensions creates a three-dimensional space for love, suggesting it fills every possible direction. The enjambment into 'My soul can reach' elevates the love from physical to spiritual, implying it extends beyond the material world.",
      },
      {
        text: 'I love thee freely, as men strive for Right',
        technique: 'Simile / abstract noun',
        analysis:
          "Comparing love to the pursuit of moral justice ('Right') elevates it from personal emotion to a universal, noble cause. The capitalised 'Right' suggests a quasi-religious devotion, free from obligation or coercion.",
      },
      {
        text: 'I shall but love thee better after death',
        technique: 'Declarative / hyperbole',
        analysis:
          'The final line transcends mortality, asserting that love will intensify beyond the grave. This echoes the Victorian Christian belief in the afterlife while also functioning as a bold, almost defiant, closing statement of eternal commitment.',
      },
    ],
    themes: ['Romantic love', 'Devotion', 'Spirituality', 'Intensity of emotion'],
    comparisons: [
      'La Belle Dame Sans Merci (contrasts: destructive vs. life-affirming love)',
      "Neutral Tones (contrasts: love's death vs. love's transcendence)",
      'One Flesh (contrasts: passionate declaration vs. love fading with time)',
    ],
  },
  {
    id: 'my-last-duchess',
    title: 'My Last Duchess',
    poet: 'Robert Browning',
    date: '1842',
    context:
      "Based on the historical Duke Alfonso II of Ferrara, whose first wife Lucrezia de' Medici died in suspicious circumstances in 1561, aged 16. Browning pioneered the dramatic monologue, in which a speaker inadvertently reveals their true character. The poem is set during negotiations for the Duke's next marriage, adding chilling dramatic irony as he discusses how he dealt with his previous wife.",
    summary:
      "The Duke shows a visitor (an envoy negotiating his next marriage) a portrait of his late wife, hidden behind a curtain that only he controls. He complains that the Duchess smiled too easily and equally at everyone, treating his 'nine-hundred-years-old name' as no more special than a sunset or a gift of cherries. He implies he had her killed ('I gave commands; then all smiles stopped together') before smoothly returning to the marriage negotiation.",
    formAndStructure:
      "Dramatic monologue in rhyming couplets (heroic couplets) of iambic pentameter. The couplets create a sense of the Duke's controlled, authoritative speech, yet the heavy enjambment fights against the rhyme, suggesting emotions (jealousy, rage) that strain against his polished surface. The single, unbroken stanza mirrors the Duke's desire for total control -- he will not allow even a stanza break to interrupt his narrative.",
    // Checked on 26 September 2026 against Pearson's anthology, which prints
    // 'duchess' in the first line in lower case. Two analyses put words in
    // quotation marks that the poem does not use ('crime', 'tames').
    quotes: [
      {
        text: "That's my last duchess painted on the wall, / Looking as if she were alive",
        technique: 'Possessive pronoun / dramatic irony',
        analysis:
          "The possessive 'my' immediately establishes ownership. 'Last' is chillingly casual, implying a series. 'Looking as if she were alive' is deeply ironic, as the reader gradually understands that she is dead, likely at his command. The portrait is the only form in which he can fully control her.",
      },
      {
        text: 'She had / A heart–how shall I say?–too soon made glad',
        technique: 'Caesura / feigned hesitation',
        analysis:
          'The dashes create a false pause, as though the Duke is searching for the right words, but his speech is actually carefully calculated. Her only offence, being too easily pleased, reveals his pathological jealousy. He wants her joy to be exclusively his, and her inability to comply was, in his view, punishable by death.',
      },
      {
        text: 'I gave commands; / Then all smiles stopped together',
        technique: 'Euphemism / caesura',
        analysis:
          "This is the poem's most chilling moment. The vague 'commands' and the abrupt 'stopped' strongly imply murder, but the Duke's refusal to say it directly shows his ability to commit violence while maintaining social decorum. The semicolon creates a cold, efficient pause between order and outcome.",
      },
      {
        text: 'Notice Neptune, though, / Taming a sea-horse, thought a rarity',
        technique: 'Classical allusion / symbolism',
        analysis:
          "The Duke identifies with Neptune, god of the sea, shown in bronze taming a sea-horse. This reveals his self-image: a powerful figure who masters those beneath him. The seahorse (the next Duchess?) is something to be controlled and displayed, like the portrait. 'Rarity' shows his view of people as collectible objects.",
      },
    ],
    themes: [
      'Power and control',
      'Jealousy and possession',
      'Art and objectification',
      'Status and pride',
      'Gender and patriarchy',
    ],
    comparisons: [
      'The Manhunt (contrasts: a husband who destroys his wife vs. a wife who patiently heals her husband)',
      'La Belle Dame Sans Merci (contrasts: male powerlessness vs. male tyranny)',
      'Sonnet 43 (contrasts: controlling love vs. generous, selfless love)',
    ],
  },
  {
    id: '1st-date',
    title: '1st Date - She and 1st Date - He',
    poet: 'Wendy Cope',
    date: '2011',
    context:
      "Wendy Cope (born 1945) is known for witty, accessible poems about love and everyday life, often in strict traditional forms. These two companion poems, from Family Values (2011), present the same first date at a classical concert from each person's point of view. The humour depends on dramatic irony: the reader can see what neither character can.",
    summary:
      'In the first poem the woman admits that she exaggerated her love of classical music to impress the man. She worries about how she looks, and tries hard to listen so she will have something clever to say, while he seems absorbed in the music. In the second, the man admits that he exaggerated his interest too, arrived late and feels nervous; he believes she is lost in the music and worries that she is too good for him. Each thinks the other is enjoying the concert, and both are pretending.',
    formAndStructure:
      'Two poems of five quatrains each, rhyming on the second and fourth lines, with a light, regular rhythm that suits the comedy. The structures mirror each other, and both contain an almost identical line in which each sees the other as absorbed in the music and indifferent to them. Reading the two private monologues side by side creates the dramatic irony.',
    quotes: [
      {
        text: "It wasn't exactly a lie",
        technique: 'Understatement / confession',
        analysis:
          "The woman's first admission uses understatement to excuse herself: the claim was not 'exactly' a lie. The colloquial, self-mocking tone draws the reader into her confidence, and shows how both characters begin the relationship by performing a version of themselves.",
      },
      {
        text: 'That my brow was acceptably high',
        technique: 'Humour / idiom',
        analysis:
          "She hopes to seem highbrow, and turns the idiom into a joke about her own forehead. 'Acceptably' reveals her anxiety: she wants to be cultured enough to pass, rather than to be herself.",
      },
      {
        text: 'And quite undistracted by me',
        technique: 'Parallelism / dramatic irony',
        analysis:
          "Both poems contain this line. Each character is so busy appearing interested in the music that each misreads the other's concentration as indifference. The repetition across the two poems is the joke and also the pathos: they are closer than either realises.",
      },
      {
        text: 'Perhaps she is out of my league',
        technique: 'Insecurity / colloquial language',
        analysis:
          "The man's anxiety mirrors the woman's. The sporting idiom is casual, but 'out of my league' exposes his fear of not being good enough, the same fear that made her pretend to love classical music.",
      },
    ],
    themes: ['New love', 'Insecurity', 'Pretence and performance', 'Communication', 'Humour'],
    comparisons: [
      'i wanna be yours (links: modern, humorous love poems; contrasts: hesitant new love vs. open devotion)',
      "Love's Dog (links: the mixed feelings and anxieties of love)",
      'Valentine (links: honesty in love; contrasts: pretending vs. insisting on the truth)',
    ],
  },
  {
    id: 'valentine',
    title: 'Valentine',
    poet: 'Carol Ann Duffy',
    date: '1993',
    context:
      "Carol Ann Duffy (born 1955) was the UK's Poet Laureate from 2009 to 2019, the first woman to hold the role. Valentine comes from her collection Mean Time (1993). It rejects the clichés of Valentine's Day, the red rose and the card, and offers instead an ordinary onion as a more honest image of what love is like.",
    summary:
      "The speaker gives a lover an onion instead of a traditional Valentine's gift, and explains why. Like love, it offers light and beauty but also brings tears; its taste lasts; its rings could make a wedding ring; and it can be dangerous. The poem insists on truthfulness rather than romance, and ends on a disturbing hint of possessiveness and violence.",
    formAndStructure:
      "Free verse in stanzas of uneven length, several of them a single line or a single word. The short, abrupt lines read like the speaker's statements and commands as the gift is handed over. One extended metaphor, the onion, runs through the whole poem, and the poem's rejection of regular form matches its rejection of conventional romance.",
    quotes: [
      {
        text: 'I give you an onion.',
        technique: 'Bathos / direct address',
        analysis:
          'After rejecting the usual romantic gifts, the speaker offers something deliberately unromantic. The plain sentence is almost comic, but it challenges the reader to look at love differently: the onion is ordinary, layered and real.',
      },
      {
        text: 'a moon wrapped in brown paper',
        technique: 'Metaphor',
        analysis:
          "The onion becomes something beautiful and mysterious, a 'moon', while 'brown paper' keeps it humble. The image suggests that love's beauty is hidden beneath a plain surface and has to be uncovered, like a present.",
      },
      {
        text: 'Lethal.',
        technique: 'One-word line / ambiguity',
        analysis:
          'A single word stands alone as a stanza, and its meaning is unsettling: love, like the strength of the onion, can overwhelm and harm. The abrupt line breaks the romantic mood that the wedding-ring image has just built.',
      },
      {
        text: 'cling to your knife',
        technique: 'Final image / violent imagery',
        analysis:
          "The poem ends with a smell that will not wash off and a 'knife' in the lover's hand. The knife belongs to the kitchen, but as the last word it leaves a hint of danger and possessiveness, suggesting that love can be painful and hard to escape.",
      },
    ],
    themes: [
      'Honesty in love',
      'Rejecting cliché',
      'Love as painful',
      'Commitment and possession',
      'Unconventional love',
    ],
    comparisons: [
      'Sonnet 43 (contrasts: a traditional declaration vs. a deliberately unromantic gift)',
      'i wanna be yours (links: love expressed through everyday objects)',
      'She Walks in Beauty (contrasts: idealised beauty vs. honesty about love)',
    ],
  },
  {
    id: 'one-flesh',
    title: 'One Flesh',
    poet: 'Elizabeth Jennings',
    date: '1966',
    context:
      "Jennings was part of The Movement, a group of 1950s poets who valued clarity and restraint. A devout Catholic, Jennings was deeply influenced by religious ideas of marriage. 'One flesh' is a Biblical phrase (Genesis 2:24) describing how marriage unites two people into one body. The poem observes her elderly parents' marriage with a mixture of tenderness and sadness.",
    summary:
      "The speaker watches her elderly parents lying apart in separate beds, each absorbed in their own solitary activity -- reading, dreaming. Despite their physical and emotional distance, they remain 'one flesh' through decades of shared history. The poem explores the paradox of intimacy that has faded into habit but endures through the bond of time.",
    formAndStructure:
      'Three six-line stanzas, 18 lines in all. Each stanza opens on alternating rhymes (ABAB); the first two then close on a couplet that returns to the A rhyme, and the last keeps alternating to the end, so the poem does not settle on a final couplet. The regular, controlled form mirrors the quiet, measured existence of the elderly couple. Each stanza focuses on a different aspect: physical separation (1), emotional distance (2), and the paradox of enduring connection (3).',
    // Quotations checked on 26 September 2026 against the poem as Pearson
    // printed it in the June 2022 GCSE English Literature Paper 2 (1ET0/02P).
    // This entry once quoted four whole lines, 35 distinct words of an
    // 18-line poem, and one "quotation" (the paradox in line 13) that the poem
    // does not contain in that form. Keep each to the phrase the analysis
    // discusses.
    quotes: [
      {
        text: 'Lying apart now',
        technique: 'Declarative / spatial imagery',
        analysis:
          "The plain, unadorned opening statement (line 1) presents the physical separation without judgement. 'Now' implies this was not always the case, gesturing towards a past of greater intimacy. The separate beds the same line describes are a concrete symbol of emotional distance within a marriage that technically endures.",
      },
      {
        text: 'flotsam from a former passion',
        technique: 'Simile / maritime imagery',
        analysis:
          "The couple are compared (line 7) to wreckage from a shipwreck -- debris left behind after a storm of passion has passed. 'Former passion' explicitly states that desire has ended, while 'flotsam' suggests they are adrift, carried by currents beyond their control rather than actively navigating their relationship.",
      },
      {
        text: 'Strangely apart, yet strangely close together',
        technique: 'Paradox / repetition',
        analysis:
          "The repeated 'strangely' (line 13) captures the speaker's bewilderment at the paradox she observes. Being apart and yet close at once is the poem's central tension: the couple are disconnected in every visible way, yet bound by invisible ties of shared history, habit, and the sacrament of marriage.",
      },
      {
        text: 'has now grown cold',
        technique: 'Fire metaphor / personal revelation',
        analysis:
          "The final line names the 'fire' of passion from which the speaker came, and says it is spent: a deeply personal acknowledgement that she is the product of a desire that no longer exists. This is both poignant and unsettling -- the speaker's existence is proof of a passion her parents can no longer feel.",
      },
    ],
    themes: ['Long-term love', 'Ageing and time', 'Intimacy and distance', 'Marriage', 'Memory'],
    comparisons: [
      'Sonnet 43 (contrasts: passionate young love vs. love that has faded with age)',
      'Neutral Tones (links: love that has lost its vitality and warmth)',
      'The Manhunt (contrasts: a couple drifting apart vs. a couple slowly coming close)',
    ],
  },
  {
    id: 'i-wanna-be-yours',
    title: 'i wanna be yours',
    poet: 'John Cooper Clarke',
    date: '1983',
    context:
      'John Cooper Clarke (born 1949), from Salford, is known as the punk poet: he performed his fast, comic poems at punk gigs in the late 1970s and early 1980s. This poem was written to be performed, which explains its repetition and rhythm. In 2013 the band Arctic Monkeys set it to music on their album AM, bringing it to a new audience.',
    summary:
      'The speaker offers to be a series of everyday objects for the person he loves, from a vacuum cleaner and a car to a raincoat, a teddy bear and an electric heater. Each offer promises usefulness, comfort or reliability. The repeated plea of the title makes the poem a declaration of complete devotion, which ends by rejecting anyone else.',
    formAndStructure:
      "Written in lower case and with almost no punctuation, the poem reads like speech or song. Its short lines, simple rhymes and the repeated opening 'let me be your' give it a chant-like rhythm suited to performance, and the title returns as a refrain at the end of each section. The offers become more intimate as the poem goes on, building to the exaggeration of its final section.",
    quotes: [
      {
        text: 'let me be your vacuum cleaner',
        technique: 'Extended metaphor / bathos',
        analysis:
          "The first offer is comically unromantic: a household appliance. Yet it suggests a lover willing to take on the dull, dirty parts of someone else's life. The humour masks a sincere promise to be useful.",
      },
      {
        text: 'i will never rust',
        technique: 'Rhyme / reliability',
        analysis:
          'The speaker offers to be a family car of the time and promises that he will never rust. The simple rhyme makes the promise sound like an advertising slogan, but its point is constancy: his love will not wear out.',
      },
      {
        text: 'you call the shots',
        technique: 'Colloquial idiom / power',
        analysis:
          'The idiom hands control to the beloved. The speaker is willing to serve, and the casual phrase keeps the tone light while revealing how completely he wants to belong to her.',
      },
      {
        text: "i don't wanna be hers",
        technique: 'Contrast / refrain',
        analysis:
          'Just before the final refrain, the speaker rejects anyone else. Changing a single word turns the repeated plea into a statement of exclusive commitment.',
      },
    ],
    themes: ['Devotion', 'Desire', 'Everyday love', 'Humour', 'Commitment'],
    comparisons: [
      'Valentine (links: love expressed through everyday objects; contrasts: eager devotion vs. guarded honesty)',
      'Sonnet 43 (links: declarations of total devotion; contrasts: a performed list of objects vs. a sonnet of spiritual love)',
      '1st Date - She and 1st Date - He (contrasts: wholehearted devotion vs. the hesitation of a first date)',
    ],
  },
  {
    id: 'loves-dog',
    title: "Love's Dog",
    poet: 'Jen Hadfield',
    date: '2008',
    context:
      "Jen Hadfield (born 1978) lives in Shetland. Love's Dog appears in Nigh-No-Place (2008), the collection that won the T. S. Eliot Prize. The poem catalogues the contradictions of being in love, through surprising, playful and sometimes unsettling images.",
    summary:
      'Each line states something the speaker loves, hates or loathes about love, and completes the sentence with an image: a diagnosis and a prognosis, a petting zoo and its zookeeper, a truth serum and a shrinking potion, a pirate and a sick parrot. The list swings between delight and dislike, presenting love as exciting, absurd and painful all at once.',
    formAndStructure:
      "Sixteen lines, each built on the same frame, so the only things that change are the verb (love, hate or loathe) and the final image, and the reader's attention falls on the surprising last words. Many lines are paired by rhyme or half-rhyme, and the lack of punctuation lets the contrasts run into each other.",
    quotes: [
      {
        text: 'What I love about love',
        technique: 'Anaphora / list structure',
        analysis:
          'Every line begins with this frame or its opposite, so the poem becomes a list of the pleasures and pains of love. The repetition imitates obsessive thought, returning to the same subject again and again.',
      },
      {
        text: 'its diagnosis ... its prognosis',
        technique: 'Medical imagery / rhyme',
        analysis:
          'The opening pair treats love as an illness: the speaker loves being told what is wrong, but hates hearing how it will end. The rhyme binds the two words together, suggesting that the excitement of love cannot be separated from fear of its outcome.',
      },
      {
        text: 'its zookeeper – you',
        technique: 'Direct address / climax',
        analysis:
          'This is the only line that addresses the beloved. After the chaos of the petting zoo, the lover is the keeper who controls it, and the dash creates a pause before the reveal.',
      },
      {
        text: 'its sick parrot',
        technique: 'Ending / bathos',
        analysis:
          "Set against the pirate in the line before, the final image is absurd and sad: love's swagger ends in something ailing. The poem closes on what the speaker hates, so the list ends on pain rather than pleasure.",
      },
    ],
    themes: [
      'Contradictions of love',
      'Desire and fear',
      'Playfulness',
      'Vulnerability',
      'Obsession',
    ],
    comparisons: [
      "Valentine (links: honesty about love's pain as well as its pleasure)",
      '1st Date - She and 1st Date - He (links: the mixed feelings and anxieties of love)',
      'La Belle Dame Sans Merci (links: love as an enchantment that harms)',
    ],
  },
  {
    id: 'nettles',
    title: 'Nettles',
    poet: 'Vernon Scannell',
    date: '1980',
    context:
      'Vernon Scannell (1922-2007) served as an infantry soldier in the Second World War and was wounded in Normandy in 1944; war is a recurring subject in his poetry. Nettles describes a moment from family life, when his young son fell into a bed of nettles, but its language is full of military imagery.',
    summary:
      "The speaker's three-year-old son falls into a nettle bed and comes to him crying, his skin blistered. The father comforts him, then takes his billhook, cuts down every nettle and burns them. But within two weeks new nettles have grown, and the speaker realises that his son will be hurt again: he cannot protect him from pain for ever.",
    formAndStructure:
      "A single stanza of sixteen lines in iambic pentameter, rhyming in alternate lines. The unbroken block suggests a single memory, or a father's protective wall around his child. Military language runs throughout, turning the nettles into an enemy army and the father into a soldier, and the final line turns from the battle to the future.",
    quotes: [
      {
        text: 'That regiment of spite',
        technique: 'Metaphor / military imagery',
        analysis:
          "The nettles are imagined as a regiment of soldiers, a disciplined force that exists to cause pain. The abstract noun 'spite' gives them deliberate malice, showing how the father sees anything that harms his son as an enemy.",
      },
      {
        text: 'White blisters beaded on his tender skin',
        technique: 'Visual imagery / sibilance',
        analysis:
          "The precise image of the blisters shows the father's close attention to his son's pain. 'Tender' stresses the child's vulnerability, and the soft sounds slow the line, as if lingering over the injury.",
      },
      {
        text: 'the fallen dead',
        technique: 'Hyperbole / military imagery',
        analysis:
          "The father's revenge on the nettles is described as a battle followed by a funeral for the enemy dead. The exaggeration is partly comic, but it also shows the strength of his protective love.",
      },
      {
        text: 'sharp wounds again',
        technique: 'Ending / inevitability',
        analysis:
          "The last line accepts that the father cannot win this war: the nettles grow back, and his son will be hurt again. 'Wounds' belongs to the poem's military language, and suggests the wider pains that will come with growing up.",
      },
    ],
    themes: ['Parental love', 'Protection', 'Pain and growing up', 'Conflict', 'Inevitability'],
    comparisons: [
      'A Child to his Sick Grandfather (links: love between generations; contrasts: protecting a child vs. a child wanting to care for an old man)',
      'The Manhunt (links: wounds, and the love that tries to heal them)',
      'My Father Would Not Show Us (links: a father and his child; contrasts: a father who protects vs. a father who withdraws)',
    ],
  },
  {
    id: 'the-manhunt',
    title: 'The Manhunt',
    poet: 'Simon Armitage',
    date: '2008',
    context:
      "Simon Armitage (born 1963) has been the UK's Poet Laureate since 2019. The Manhunt comes from The Not Dead (2008), poems written for a Channel 4 documentary about former soldiers living with the effects of war. It is spoken by Laura Beddoes, whose husband Eddie served as a peacekeeper in Bosnia and came home with physical and psychological injuries.",
    summary:
      "A wife describes slowly getting to know her husband's injuries after he comes home from war. Only gradually is she allowed to touch and explore each damaged part of his body, from his face and jaw to his collar-bone, shoulder, lung and ribs, and the bullet still lodged in his chest. Finally she traces his suffering to its source, a trauma buried in his mind, and only then does she come close to him.",
    formAndStructure:
      "The poem is written in couplets, a form that suggests a pair, husband and wife, trying to come together. Many of the couplets rhyme or half-rhyme, as if the relationship is close to harmony but not quite there. The poem moves from the surface of the body inwards, to the heart and then the mind, like a search, and the repetition of 'only then' shows how slowly and patiently she has to proceed.",
    quotes: [
      {
        text: 'the frozen river which ran through his face',
        technique: 'Metaphor / landscape imagery',
        analysis:
          "A scar becomes a 'frozen river', a cold, fixed feature of a landscape she must explore. The image suggests that his feelings, like the water, have frozen, and that his face, once familiar, has become strange territory.",
      },
      {
        text: 'the blown hinge of his lower jaw',
        technique: 'Metaphor / damaged mechanism',
        analysis:
          'The jaw is a broken hinge, part of a machine that no longer works. The image suggests that his ability to speak, to open up, has also been damaged, so she has to learn about him through touch rather than words.',
      },
      {
        text: 'a sweating, unexploded mine',
        technique: 'Metaphor / psychological trauma',
        analysis:
          'The search ends in his mind, where the trauma lies like an unexploded mine: dangerous, unstable and liable to go off. The metaphor suggests post-traumatic stress, and that the hardest wound to reach is the one nobody can see.',
      },
      {
        text: 'only then',
        technique: 'Repetition / patience',
        analysis:
          'The phrase recurs through the poem, marking each stage at which she is allowed closer. Its repetition stresses her patience and his slow trust, and the last line holds back the moment of closeness until the very end.',
      },
    ],
    themes: [
      'Love and recovery',
      'The effects of war',
      'Physical and psychological wounds',
      'Patience',
      'Intimacy',
    ],
    comparisons: [
      'Nettles (links: wounds, and the love that tries to heal them)',
      'One Flesh (links: closeness and distance within a marriage)',
      'Sonnet 43 (contrasts: love that has to be earned slowly vs. love declared all at once)',
    ],
  },
  {
    id: 'my-father-would-not-show-us',
    title: 'My Father Would Not Show Us',
    poet: 'Ingrid de Kok',
    date: '1988',
    context:
      'Ingrid de Kok (born 1951) is a South African poet who grew up in a small mining town. This elegy for her father comes from her first collection, Familiar Ground (1988). It opens with an epigraph from the poet Rainer Maria Rilke asking which way we should face to talk to the dead, a question the poem goes on to explore.',
    summary:
      "The speaker sees her father's body, five days after his death. She notices how strange his face looks, and how the collar of his pyjamas seems oddly ordinary and alive. Seeing him for the last time, she remembers her childhood and allows herself to imagine a fuller, braver version of it. She reflects that her father did not show his family how to die: he turned away from them, faced the wall and died without a word.",
    formAndStructure:
      "Free verse in stanzas of uneven length. The poem moves from the present, the body laid out for viewing, to memory and back again. Two refrains, which change from 'would not' to 'could not', mark a shift from blaming her father for hiding his dying to recognising that he was unable to share it. The final image, of a man facing the wall, answers the epigraph's question about which way to face the dead.",
    quotes: [
      {
        text: 'My father would not show us how to die.',
        technique: 'Refrain / title line',
        analysis:
          "The line gives the poem its title and returns later in a changed form. 'Would not' suggests a choice: her father refused to share his dying with his family, keeping it private as he perhaps kept his feelings private in life.",
      },
      {
        text: 'five days dead',
        technique: 'Blunt detail / monosyllables',
        analysis:
          'The plain phrase records a fact without comment, as if the speaker is holding her feelings at a distance. The one-syllable words are flat and final.',
      },
      {
        text: 'unfrozen collar of his striped pyjamas',
        technique: 'Contrasting detail',
        analysis:
          'Among the cold, arranged details of the room, the soft collar is the one thing that seems alive and ordinary. The small domestic detail catches the speaker off guard, reminding her of the real man rather than the body.',
      },
      {
        text: 'face to the wall',
        technique: 'Final image / symbolism',
        analysis:
          "By the end the refrain has changed to 'could not', and the father is seen turning away, alone, to face the wall. The image suggests both his isolation in death and the family's exclusion from it.",
      },
    ],
    themes: ['Grief', 'Fathers and children', 'Memory', 'Death and silence', 'Emotional distance'],
    comparisons: [
      'A Child to his Sick Grandfather (links: a child at the deathbed of an older relative; contrasts: closeness vs. exclusion)',
      'One Flesh (links: a daughter observing a parent from a distance)',
      'A Complaint (links: a loved one who withdraws and hides their feelings)',
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Comparison table data                                              */
/* ------------------------------------------------------------------ */

interface ComparisonPair {
  poemA: string
  poemB: string
  link: string
  contrast: string
}

const COMPARISON_PAIRS: ComparisonPair[] = [
  {
    poemA: 'Sonnet 43',
    poemB: 'Neutral Tones',
    link: 'Both explore romantic love',
    contrast:
      "Barrett Browning celebrates love's transcendence; Hardy presents love's bitter end. Light vs. colourlessness, faith vs. cynicism.",
  },
  {
    poemA: 'Sonnet 43',
    poemB: 'One Flesh',
    link: 'Both present long-term love',
    contrast:
      "Barrett Browning's love is passionate and present; Jennings observes love that has faded with age. Declaration vs. silent observation.",
  },
  {
    poemA: 'My Last Duchess',
    poemB: 'La Belle Dame Sans Merci',
    link: 'Both explore power dynamics in relationships',
    contrast:
      'The Duke holds all power and destroys his wife; the knight is powerless, destroyed by the lady. Male control vs. male vulnerability.',
  },
  {
    poemA: 'My Last Duchess',
    poemB: 'The Manhunt',
    link: 'Both are spoken by one partner about the other',
    contrast:
      "The Duke controls and silences his wife; the wife in The Manhunt patiently learns her husband's wounds. Possession vs. care.",
  },
  {
    poemA: 'Sonnet 43',
    poemB: 'Valentine',
    link: 'Both are declarations of love',
    contrast:
      "Barrett Browning's love is spiritual and limitless; Duffy distrusts romantic cliché and offers a gift that brings tears. Idealism vs. honesty.",
  },
  {
    poemA: 'She Walks in Beauty',
    poemB: 'La Belle Dame Sans Merci',
    link: "Both portray a beautiful woman through a man's eyes",
    contrast:
      "Byron's woman is calm, good and innocent; Keats's lady enchants and destroys. Admiration vs. enthralment.",
  },
  {
    poemA: 'A Child to his Sick Grandfather',
    poemB: 'My Father Would Not Show Us',
    link: "Both show a child facing an older relative's death",
    contrast:
      "Baillie's child stays close and talks to the end; de Kok's speaker is shut out as her father turns away. Closeness vs. exclusion.",
  },
  {
    poemA: 'A Child to his Sick Grandfather',
    poemB: 'Nettles',
    link: 'Both explore love between generations',
    contrast:
      'A child wants to look after an old man; a father fails to shield his son from pain. Caring for vs. protecting.',
  },
  {
    poemA: 'A Complaint',
    poemB: 'Neutral Tones',
    link: 'Both look back on a love that has changed',
    contrast:
      "Wordsworth's love may still exist, hidden; Hardy's has died, leaving bitterness. Regret vs. disillusion.",
  },
  {
    poemA: 'A Complaint',
    poemB: 'One Flesh',
    link: 'Both describe love that lasts but is no longer expressed',
    contrast:
      "Wordsworth speaks of his own loss; Jennings observes her parents' marriage from outside. Personal grief vs. detached observation.",
  },
  {
    poemA: '1st Date - She and 1st Date - He',
    poemB: 'i wanna be yours',
    link: 'Both are modern, humorous love poems',
    contrast:
      "Cope's couple hide their feelings and pretend; Cooper Clarke's speaker declares his devotion openly. Concealment vs. exaggerated openness.",
  },
  {
    poemA: 'Valentine',
    poemB: 'i wanna be yours',
    link: 'Both use everyday objects to express love',
    contrast:
      "Duffy's onion is honest about love's pain; Cooper Clarke's objects promise comfort and usefulness. Truthfulness vs. devotion.",
  },
  {
    poemA: "Love's Dog",
    poemB: 'Valentine',
    link: 'Both are honest about the pain as well as the pleasure of love',
    contrast:
      'Hadfield lists the contradictions of love line by line; Duffy builds one extended metaphor. Fragmented list vs. sustained image.',
  },
  {
    poemA: 'Nettles',
    poemB: 'The Manhunt',
    link: 'Both present wounds and the love that tries to heal them',
    contrast:
      "Scannell's father fights a war he cannot win; Armitage's wife patiently explores the damage war has done. Protection vs. healing.",
  },
  {
    poemA: 'My Father Would Not Show Us',
    poemB: 'One Flesh',
    link: 'Both are written by a daughter about a parent',
    contrast:
      'De Kok mourns a father who shut his family out of his dying; Jennings watches the fading intimacy of her parents. Grief vs. quiet sadness.',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function EdexcelAnthologyPage() {
  const t = useT()
  const [expandAll, setExpandAll] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t('study.poetry.edex.hero.eyebrow')}
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('study.poetry.edex.hero.title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('study.poetry.edex.hero.subtitle')}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-card/20 px-4 py-1.5 text-sm font-medium">
              15 Poems
            </span>
            <span className="rounded-full bg-card/20 px-4 py-1.5 text-sm font-medium">
              60+ Key Quotes
            </span>
            <span className="rounded-full bg-card/20 px-4 py-1.5 text-sm font-medium">
              15 Comparison Pairs
            </span>
          </div>
        </div>
      </section>

      {/* Poem analyses */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {t('study.poetry.edex.analysis.title')}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {t('study.poetry.edex.analysis.subtitle')}
            </p>
          </div>
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-foreground"
          >
            {expandAll ? t('study.shared.btn.collapse_all') : t('study.shared.btn.expand_all')}
          </button>
        </div>

        <div className="space-y-4">
          {POEMS.map((poem) => (
            <PoemSectionControlled key={poem.id} poem={poem} forceOpen={expandAll} />
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">Comparison Pairs at a Glance</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Use this table to plan comparison essays. Each pair identifies a shared link and the key
            contrast between the two poems.
          </p>

          {/* Mobile cards */}
          <div className="mt-6 space-y-4 lg:hidden">
            {COMPARISON_PAIRS.map((pair, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4 shadow-md">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span>{pair.poemA}</span>
                  <svg
                    className="h-4 w-4 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  <span>{pair.poemB}</span>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  Link
                </p>
                <p className="text-sm text-muted-foreground">{pair.link}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  Contrast
                </p>
                <p className="text-sm text-muted-foreground">{pair.contrast}</p>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="mt-6 hidden overflow-hidden rounded-xl border border-border bg-card shadow-md lg:block">
            <table className="w-full text-start text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-5 py-3 font-semibold">Poem A</th>
                  <th className="px-5 py-3 font-semibold">Poem B</th>
                  <th className="px-5 py-3 font-semibold">Link</th>
                  <th className="px-5 py-3 font-semibold">Key Contrast</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARISON_PAIRS.map((pair, i) => (
                  <tr key={i} className="transition-colors hover:bg-muted">
                    <td className="px-5 py-3 font-medium text-foreground">{pair.poemA}</td>
                    <td className="px-5 py-3 font-medium text-foreground">{pair.poemB}</td>
                    <td className="px-5 py-3 text-muted-foreground">{pair.link}</td>
                    <td className="px-5 py-3 text-muted-foreground">{pair.contrast}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Exam tips */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Exam Tips for Poetry Comparison</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: 'Structure Your Essay',
              text: 'Use a thematic approach: pick 3 points of comparison, and for each, analyse both poems. Avoid writing about one poem completely, then the other.',
            },
            {
              title: 'Embed Short Quotations',
              text: 'Single words or short phrases are more effective than long quotations. They show you can select precisely and weave evidence into your argument.',
            },
            {
              title: "Compare, Don't Describe",
              text: "Use comparative connectives: 'similarly', 'in contrast', 'whereas', 'however'. Every paragraph should reference both poems.",
            },
            {
              title: 'Link Context to Meaning',
              text: "Do not narrate the poet's biography. Instead, explain how historical or social context shapes the poem's meaning and the reader's interpretation.",
            },
            {
              title: 'Comment on Form and Structure',
              text: 'Discuss sonnet form, dramatic monologue, free verse, stanza shape, enjambment, caesura, and volta. Examiners reward structural analysis.',
            },
            {
              title: 'Revise Comparison Pairs',
              text: 'Learn 2-3 comparison pairs for each poem. Practise writing comparative paragraphs under timed conditions so you can respond flexibly in the exam.',
            },
          ].map((tip) => (
            <div key={tip.title} className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <Link
          href="/resources/poetry"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to Poetry Hub
        </Link>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Controlled expandable section (responds to Expand All)             */
/* ------------------------------------------------------------------ */

function PoemSectionControlled({ poem, forceOpen }: { poem: Poem; forceOpen: boolean }) {
  const [manualOpen, setManualOpen] = useState(false)
  const isOpen = forceOpen || manualOpen

  return (
    <div className="rounded-xl border border-border bg-card shadow-md transition-shadow hover:shadow-md">
      <button
        onClick={() => setManualOpen(!manualOpen)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start sm:px-6 sm:py-5"
        aria-expanded={isOpen}
      >
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-foreground sm:text-xl">{poem.title}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {poem.poet} ({poem.date})
          </p>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="border-t border-border px-5 pb-6 pt-4 sm:px-6">
          {/* Context */}
          <div className="mb-5">
            <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              Context
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{poem.context}</p>
          </div>

          {/* Summary */}
          <div className="mb-5">
            <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              Summary
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{poem.summary}</p>
          </div>

          {/* Form and Structure */}
          <div className="mb-5">
            <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              Form &amp; Structure
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{poem.formAndStructure}</p>
          </div>

          {/* Key Quotes */}
          <div className="mb-5">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Key Quotes &amp; Analysis
            </h4>
            <div className="space-y-4">
              {poem.quotes.map((q, i) => (
                <div key={i} className="rounded-lg border-s-4 border-primary bg-muted p-4">
                  <p className="font-medium italic text-foreground">&ldquo;{q.text}&rdquo;</p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    {q.technique}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {q.analysis}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Themes */}
          <div className="mb-5">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Themes
            </h4>
            <div className="flex flex-wrap gap-2">
              {poem.themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Comparison Pairs */}
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Comparison Pairs
            </h4>
            <ul className="space-y-1.5">
              {poem.comparisons.map((comp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
