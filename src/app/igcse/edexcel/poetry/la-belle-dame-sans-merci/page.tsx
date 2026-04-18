'use client'
// [P2:auth] board guard deferred — client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

/* ── Poem data ────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'La Belle Dame sans Merci',
  poet: 'John Keats',
  lines: [
    {
      text: 'O what can ail thee, knight-at-arms,',
      annotations: [
        {
          type: 'Opening question',
          note: 'The poem begins with an unnamed speaker addressing the knight. "Ail" means to trouble or make ill — the knight is clearly suffering. The question frames the whole poem: what has happened to you?',
          color: '#3b82f6',
        },
        {
          type: 'Archaic diction',
          note: '"O what can ail thee" and "knight-at-arms" are deliberately medieval. Keats is writing a ballad in the style of the old oral tradition — evoking a folkloric world.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Alone and palely loitering?',
      annotations: [
        {
          type: 'Key quote',
          note: '"Alone and palely loitering" — three key words: isolation, sickness ("palely"), and aimless lingering ("loitering"). The knight is drained of life and purpose.',
          color: '#f59e0b',
        },
        {
          type: 'Alliteration',
          note: 'The soft "l" and "p" sounds in "palely loitering" create a tired, limp quality — mirroring the knight\'s exhaustion.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The sedge has withered from the lake,',
      annotations: [
        {
          type: 'Imagery (setting)',
          note: '"Sedge" is marsh grass. The landscape itself is dead and withered — the natural world reflects the knight\'s inner state. This is a Romantic technique called "pathetic fallacy".',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And no birds sing.',
      annotations: [
        {
          type: 'Key quote',
          note: 'The short refrain line is devastating. No birds means no life, no song, no joy. The abruptness of the short line emphasises the emptiness.',
          color: '#f59e0b',
        },
        {
          type: 'Structure',
          note: 'Every stanza ends with a short fourth line. The contrast between the three long lines and the short one creates a dying-away effect, like the landscape itself is running out of breath.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'O what can ail thee, knight-at-arms,',
      annotations: [
        {
          type: 'Repetition',
          note: 'The opening question is repeated — insisting on an answer. The speaker will not let the knight escape the question.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'So haggard and so woe-begone?',
      annotations: [
        {
          type: 'Characterisation',
          note: '"Haggard" means gaunt, exhausted. "Woe-begone" means overwhelmed by sorrow. Both are archaic, folkloric words — drawn from the ballad tradition.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The squirrel\'s granary is full,',
      annotations: [
        {
          type: 'Irony of setting',
          note: 'It is autumn — the squirrel has gathered its winter store. Nature is preparing for survival, but the knight is dying. The fullness of nature throws his emptiness into relief.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And the harvest\'s done.',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Harvest\'s done" — the productive season is over. For the knight, the "harvest" of his encounter with the fairy lady is also over: he has been used up and discarded.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'I see a lily on thy brow,',
      annotations: [
        {
          type: 'Symbolism',
          note: 'The lily is traditionally associated with death and funerals in Western culture. Seeing a lily on his brow is a premonition of death — the knight is already marked for it.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'With anguish moist and fever-dew,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Moist" and "fever-dew" — the knight is feverish and sweaty. Keats, himself suffering from tuberculosis, knew fever well. There is biographical weight here.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And on thy cheeks a fading rose',
      annotations: [
        {
          type: 'Symbolism',
          note: 'The "rose" is traditionally love and beauty, but it is "fading" — love is leaving him, youth is leaving him. The flower imagery of lily and rose is drained of its usual power.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Fast withereth too.',
      annotations: [
        {
          type: 'Volta',
          note: 'The first three stanzas have been the speaker describing what they see. Here the description ends — the knight is about to speak. The word "too" links him to the withered sedge of stanza 1.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'I met a lady in the meads,',
      annotations: [
        {
          type: 'Frame shift',
          note: 'The knight now tells his story. "I met a lady" begins the central narrative — a classic ballad opening.',
          color: '#3b82f6',
        },
        {
          type: 'Setting',
          note: '"Meads" are meadows — open fields in full summer. The earlier autumn landscape has been replaced by a warmer memory.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Full beautiful—a faery\'s child,',
      annotations: [
        {
          type: 'Supernatural',
          note: '"Faery\'s child" — she is not mortal. In Celtic folklore, fairies were dangerous, enchanting creatures who could steal humans away. Keats uses this tradition.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: 'The word "beautiful" is so strong it earns an em-dash. But her beauty is immediately qualified by her fairy origin — already dangerous.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Her hair was long, her foot was light,',
      annotations: [
        {
          type: 'Traditional beauty',
          note: 'Long hair and light feet — medieval ideals of feminine grace. Keats is drawing on stock ballad imagery. She is generic and specific at once.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And her eyes were wild.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Her eyes were wild" — the one detail that breaks the pattern of traditional beauty. "Wild" suggests uncontrolled, untamed, possibly mad. It is the first warning sign.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'I made a garland for her head,',
      annotations: [
        {
          type: 'Action',
          note: 'The knight makes her flower crowns and jewellery. He is already under her spell — serving her, decorating her. He is behaving like a lover.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And bracelets too, and fragrant zone;',
      annotations: [
        {
          type: 'Diction',
          note: '"Zone" is an archaic word for a belt or girdle. "Fragrant zone" suggests a flower belt for her waist — tender, intimate detail.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'She looked at me as she did love,',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"As she did love" — the grammar is crucial. She LOOKED as if she loved him. This is already not certain love; it is the appearance of love.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And made sweet moan.',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"Sweet moan" is strange. Moaning can be pleasure or pain, love or distress. Keats\'s original audience would have heard the erotic note, but also the hint of something off.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'I set her on my pacing steed,',
      annotations: [
        {
          type: 'Role reversal',
          note: 'Traditionally in ballads, the knight puts the lady on his horse to carry her. Here it happens, but the control is slipping: she takes over the whole day, and he ends up seeing nothing else.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And nothing else saw all day long,',
      annotations: [
        {
          type: 'Obsession',
          note: 'He saw "nothing else" — he is entirely captured by her. His world has narrowed to one object of desire. This is the beginning of obsession.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'For sidelong would she bend, and sing',
      annotations: [
        {
          type: 'Enchantment',
          note: '"Sidelong" — she leans towards him from the side. Her singing is an enchantment, like a siren\'s song. Ballads are full of such enchanting songs.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'A faery\'s song.',
      annotations: [
        {
          type: 'Supernatural',
          note: 'Her song is not human music — it is a "faery\'s song", which in folklore carries magical, often destructive power. The refrain-line confirms her supernatural nature.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'She found me roots of relish sweet,',
      annotations: [
        {
          type: 'Inversion',
          note: 'Notice the reversal: she now feeds him. The lover has become the cared-for. He is passive, receiving her gifts — like a child, or a prisoner.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And honey wild, and manna-dew,',
      annotations: [
        {
          type: 'Biblical allusion',
          note: '"Manna" is the food God sent from heaven in Exodus. Calling her food "manna-dew" gives it a sacred, miraculous quality — but also a warning. Real manna was given by God, not by fairies.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And sure in language strange she said—',
      annotations: [
        {
          type: 'Key quote',
          note: '"Language strange" — she speaks a language the knight cannot understand. But he "sure"-ly interprets it as love. This is crucial: he is projecting meaning onto sounds he cannot translate.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '\'I love thee true\'.',
      annotations: [
        {
          type: 'Ambiguity',
          note: 'The knight believes she said this. But we never hear her in her own voice — it is his translation of her "language strange". The declaration may be entirely imagined.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '' },
    {
      text: 'She took me to her elfin grot,',
      annotations: [
        {
          type: 'Setting',
          note: '"Elfin grot" — an elf\'s cave. The knight is taken deeper into the fairy world, away from human realm. In folklore, entering fairy dwellings is often a point of no return.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And there she wept and sighed full sore,',
      annotations: [
        {
          type: 'Mystery',
          note: 'She weeps — but we never learn why. Is she sorry for what she is about to do? Or is it part of the enchantment? Keats leaves the reason deliberately unclear.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And there I shut her wild wild eyes',
      annotations: [
        {
          type: 'Key quote',
          note: '"Wild wild" — the repetition is eerie. He closes her eyes with kisses, trying to calm the wildness. But the wildness is the truth of her, and he is hiding from it.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'With kisses four.',
      annotations: [
        {
          type: 'Odd specificity',
          note: '"Kisses four" — why four? The specific number is strange and fairytale-like. It gives the scene a ritual quality, as if the number matters in some spell.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'And there she lullèd me asleep,',
      annotations: [
        {
          type: 'Turning point',
          note: 'She puts him to sleep — the moment of surrender. In ballads, magical sleep is almost always dangerous. He has lost consciousness in a fairy grotto.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And there I dreamed—Ah! woe betide!—',
      annotations: [
        {
          type: 'Dramatic interruption',
          note: 'The em-dashes and the exclamation "Ah! woe betide!" break the calm of the narrative. The knight cannot tell his dream without distress. Something terrible is about to come.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'The latest dream I ever dreamt',
      annotations: [
        {
          type: 'Ominous',
          note: '"The latest dream I ever dreamt" — this was his last dream. Either because he has not slept since, or because his life has effectively ended. Both readings are dark.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'On the cold hill side.',
      annotations: [
        {
          type: 'Key quote',
          note: 'The "cold hill side" is where he woke up — alone, in the autumn landscape. The shift from warm elfin grotto to cold hillside is the moment the spell breaks.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'I saw pale kings and princes too,',
      annotations: [
        {
          type: 'Vision',
          note: 'The dream-vision shows him previous victims — "pale kings and princes". He is not the first. The lady has destroyed powerful men before him, and he is simply the latest.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Pale warriors, death-pale were they all;',
      annotations: [
        {
          type: 'Repetition',
          note: '"Pale… pale… death-pale" — the word "pale" repeats three times in two lines, hammering in their spectral, bloodless quality. They are not quite dead but not quite alive.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'They cried—\'La Belle Dame sans Merci',
      annotations: [
        {
          type: 'Key quote',
          note: 'The title is revealed in direct speech. "La Belle Dame sans Merci" = "The Beautiful Lady Without Mercy". The previous victims name her for what she is — a merciless enchantress.',
          color: '#f59e0b',
        },
        {
          type: 'Allusion',
          note: 'The title comes from a 15th-century French poem by Alain Chartier. Keats knew the medieval tradition of the cruel lady who refuses or destroys her lover.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Thee hath in thrall!\'',
      annotations: [
        {
          type: 'Key quote',
          note: '"In thrall" means enslaved, bewitched. The dream-kings warn the knight that she has him in her power — but the warning comes too late.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'I saw their starved lips in the gloam,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Starved lips" — literally hungry, but also metaphorical. They have been drained of vitality. "Gloam" (twilight) adds to the ghostly, half-lit atmosphere of the vision.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'With horrid warning gapèd wide,',
      annotations: [
        {
          type: 'Horror image',
          note: '"Gapèd wide" — their mouths are open in warning, but no sound reaches the knight in the vision. The silent scream is a classic image of nightmare.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And I awoke and found me here,',
      annotations: [
        {
          type: 'Return',
          note: 'He wakes from the dream — and finds himself alone in the cold landscape of the opening stanza. The poem has come full circle.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'On the cold hill\'s side.',
      annotations: [
        {
          type: 'Echo',
          note: 'The phrase "cold hill\'s side" echoes "cold hill side" from an earlier stanza. The repetition emphasises that he is trapped here — he cannot leave this cold place.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'And this is why I sojourn here,',
      annotations: [
        {
          type: 'Explanation',
          note: '"This is why" — the knight is finally answering the speaker\'s opening question. This is why I am alone and palely loitering. The poem\'s structure is complete: question, story, answer.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Alone and palely loitering,',
      annotations: [
        {
          type: 'Refrain',
          note: 'The poem returns to its opening phrase. The knight is now revealed as the speaker of the first stanza\'s description of himself. The circular structure is complete.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Though the sedge is withered from the lake,',
      annotations: [
        {
          type: 'Key quote',
          note: 'He repeats the description of the dead landscape. He is doomed to linger forever in this autumn world, the seasons having stopped for him.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And no birds sing.',
      annotations: [
        {
          type: 'Final echo',
          note: 'The same devastating last line as stanza 1. The silence and the absence of birds are permanent. The knight will never hear birdsong again — and neither will he ever leave this hill.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>John Keats (1795–1821)</h3>
    <p>Keats was one of the great English Romantic poets, alongside Shelley, Byron, Wordsworth and Coleridge. He trained as a surgeon before dedicating himself to poetry. He wrote a series of masterpieces — including this poem, "Ode to a Nightingale", "To Autumn" and "Ode on a Grecian Urn" — in a single astonishing year (1819), before dying of tuberculosis in Rome at the age of 25.</p>

    <h3>Composition and date</h3>
    <p>"La Belle Dame sans Merci" was written on 21 April 1819 — part of the "Great Year" of Keats\'s creativity. The poem went through two versions; the one most commonly anthologised is the earlier 1819 version. Keats\'s brother Tom had died of tuberculosis the previous December, and Keats himself was already unwell. <strong>Illness and the fear of death</strong> shadow the poem.</p>

    <h3>Fanny Brawne</h3>
    <p>In 1819 Keats fell passionately in love with his neighbour <strong>Fanny Brawne</strong>, but their engagement was impossible — he had no money and knew his health was failing. Many critics read the poem as an expression of Keats\'s own sense that love itself was dangerous for him: a beautiful woman would only lead him, like the knight, to wasted isolation. Keats called himself "half in love with easeful Death".</p>

    <h3>Medieval and ballad traditions</h3>
    <p>The poem is a <strong>literary ballad</strong> — Keats is imitating the old English and Scottish folk ballads (like "Sir Patrick Spens"), with their simple four-line stanzas, abrupt transitions and supernatural characters. The title is borrowed from a 1424 poem by the French writer Alain Chartier, about a knight rejected by a cold-hearted lady. Keats also draws on Celtic folklore about fairy women who lure humans into eternal enchantment.</p>

    <h3>The femme fatale</h3>
    <p>"La Belle Dame sans Merci" is one of the most influential examples of the <strong>femme fatale</strong> — the beautiful woman whose love destroys. The figure runs through Romantic and Victorian culture (Coleridge\'s "Geraldine", the Pre-Raphaelites\' paintings, Swinburne\'s poetry). The Pre-Raphaelite painters were particularly obsessed with this poem — Waterhouse and Dicksee both painted it.</p>

    <h3>Ambiguity</h3>
    <p>Scholars disagree about who the real victim is. Is the lady a cruel seducer? Or is she a supernatural being trapped in a cycle she cannot control? We never hear her own side — everything comes through the knight\'s account. Keats leaves her motives deliberately unexplained.</p>
  `,

  summary: `Stanza 1 (lines 1–4): An unnamed speaker sees a knight "alone and palely loitering" in an autumn landscape where the marsh grass has withered and no birds sing. The speaker asks what is wrong with him.

Stanzas 2–3 (lines 5–12): The speaker describes the knight\'s appearance — he is haggard, woe-begone, with a "lily" (death symbol) on his brow, feverish sweat, and a "fading rose" on his cheeks. The squirrels have already stored their winter food; nature has moved on, but the knight has not.

Stanzas 4–5 (lines 13–20): The knight begins his story. He met a beautiful lady, a "faery\'s child", with long hair and wild eyes, in the meadows. He made her garlands, bracelets and a flower belt. She looked at him as if she loved him and made "sweet moan".

Stanzas 6–7 (lines 21–28): He set her on his horse and saw nothing else all day, while she sang fairy songs. She fed him "roots of relish sweet", wild honey and "manna-dew", and said something in a "language strange" that he interpreted as "I love thee true".

Stanzas 8–9 (lines 29–36): She took him to her "elfin grot" (fairy cave). There she wept and sighed, and he shut her "wild wild eyes" with four kisses. She lulled him asleep — and there he had the most terrible dream of his life, on the cold hill side.

Stanzas 10–11 (lines 37–44): In the dream he saw "pale kings and princes" and "pale warriors" — previous victims of the lady. They warned him, crying "La Belle Dame sans Merci / Thee hath in thrall!" ("The beautiful lady without mercy has you in her power"). Their starved lips gaped open in silent warning.

Stanza 12 (lines 45–48): He awoke and found himself alone on the cold hill side. This is why he now lingers there, "alone and palely loitering", in a landscape where the sedge is withered and no birds sing. He cannot leave.

Overall meaning: The poem is a chilling ballad about destructive love. A knight is seduced by a beautiful, supernatural woman and left drained and alone, unable to return to normal life. Keats leaves many questions unanswered: was she deliberately cruel or simply fairy-natured? Was the knight a fool, a victim, or both? The poem is partly about love as enchantment — and the danger of being taken over by desire.`,

  formAndStructure: `Form: A literary ballad — 12 stanzas of four lines each (48 lines total). Keats imitates the medieval English and Scottish ballad tradition.

Stanza structure: Each stanza has three long lines in iambic tetrameter (four beats) followed by a much shorter fourth line — often just two or three feet. The short final line creates a dying-away effect, like a breath running out. This is unusual for the ballad form: Keats has borrowed the tradition and added his own dying-fall signature.

Rhyme scheme: ABCB — only lines 2 and 4 rhyme. This is the classic English ballad stanza ("ballad measure"). It gives the poem a loose, storytelling quality without feeling too tightly managed.

Metre: Iambic tetrameter mostly, with the final short line. The steady four-beat rhythm is hypnotic, almost incantatory — fitting for a poem about enchantment.

Three-part structure: The poem falls into three sections.
• Stanzas 1–3: the speaker describes the knight he finds.
• Stanzas 4–11: the knight tells his story.
• Stanza 12: the knight returns to the present and explains why he is still here.

Circular structure: The poem begins and ends with the knight alone on the cold hill, where "the sedge has withered from the lake / And no birds sing". This circularity is crucial — it shows that he is trapped in a cycle he cannot break. He is doomed to repeat this state forever.

Refrain: "Alone and palely loitering" and "And no birds sing" are quietly repeated across the poem, functioning like a ballad refrain — something the poem cannot escape.

Frame narrative: Like many ballads, the poem uses a frame — an outer speaker questioning the knight, who then tells his story. We never hear the lady\'s voice directly: everything comes through the knight\'s testimony, which creates built-in unreliability.

Archaic diction: Keats uses words like "ail", "thee", "haggard", "woe-begone", "elfin grot", "thrall", "gaped" — all deliberately old-fashioned. He is recreating the feel of a medieval ballad, giving the story a timeless, folk-tale quality.`,

  keyQuotes: [
    {
      quote: 'Alone and palely loitering',
      analysis:
        'The phrase captures the knight\'s entire state in four words. "Alone" — no companion. "Palely" — sickly, bloodless. "Loitering" — aimless, purposeless, with nowhere to go. The phrase is repeated at the end of the poem, framing the whole work. The soft consonants and long vowels make the phrase sound tired and wilting.',
      themes: ['Isolation', 'Enchantment', 'Wasted life'],
    },
    {
      quote: 'The sedge has withered from the lake, / And no birds sing',
      analysis:
        'The setting does the emotional work. The landscape is dying — the marsh grass has gone, and there is no birdsong. This is pathetic fallacy: nature mirrors the knight\'s inner state. The abrupt short line ("And no birds sing") is one of the most famous closing lines in English poetry; its terseness hits harder than a long image. The repetition of this description in the final stanza traps the knight in an eternal autumn.',
      themes: ['Pathetic fallacy', 'Desolation', 'Silence'],
    },
    {
      quote: 'Full beautiful—a faery\'s child',
      analysis:
        'Her beauty is so striking the line needs an em-dash to contain it. But the very next phrase, "a faery\'s child", immediately qualifies that beauty with danger. Fairies in folklore are not safe creatures — they enchant, they steal, they destroy. The combination of "beautiful" and "faery\'s child" sets up the poem\'s central tension: desire and danger are the same thing.',
      themes: ['Beauty', 'Danger', 'Supernatural'],
    },
    {
      quote: 'And her eyes were wild',
      analysis:
        'The one detail that breaks the conventional beauty of the lady. "Wild" eyes suggest she is untamed, perhaps mad, certainly uncontrollable. It is the first hint that she is not a normal woman. The knight does not heed this warning. In folklore, wild eyes often mark a supernatural being — the knight has enough information to flee but chooses not to.',
      themes: ['Warning signs', 'Wildness', 'Missed danger'],
    },
    {
      quote: 'And sure in language strange she said— / \'I love thee true\'',
      analysis:
        'Crucial moment. She spoke in "language strange" — a language the knight could not understand. And yet he "sure"-ly interprets her words as "I love thee true". We never hear her own voice. The declaration of love is his translation, possibly his invention. This raises the unsettling possibility that the whole love affair was a projection. He heard what he wanted to hear.',
      themes: ['Misunderstanding', 'Projection', 'Unreliable narrator'],
    },
    {
      quote: 'La Belle Dame sans Merci / Thee hath in thrall!',
      analysis:
        'The title appears in direct speech — cried out by the ghostly kings in the knight\'s dream. "Sans merci" means "without mercy"; "in thrall" means enslaved or bewitched. The fact that the warning comes from previous victims, in a dream, and in French, gives it the weight of inherited folklore. They know what has happened because they lived it. The dream-warning is the closest the poem comes to revealing the lady\'s true nature.',
      themes: ['Warning', 'Enslavement', 'Femme fatale'],
    },
    {
      quote: 'I saw pale kings and princes too, / Pale warriors, death-pale were they all',
      analysis:
        'The triple repetition of "pale" — ending in "death-pale" — drains the line of colour and life. The fact that the previous victims are kings, princes and warriors (powerful men) emphasises that power offers no protection against this kind of love. The knight is simply the latest in a long line. He is not special; he is interchangeable. The vision universalises his plight.',
      themes: ['Universal danger', 'Power defeated', 'Pallor'],
    },
    {
      quote: 'And this is why I sojourn here, / Alone and palely loitering',
      analysis:
        'The closing answer to the opening question. "Sojourn" means to stay temporarily, but the knight has been here permanently — he has turned a sojourn into an eternity. Repeating "alone and palely loitering" confirms that his state has not changed and will not change. The story has been told, but nothing has been resolved. The knight is trapped in his own narrative.',
      themes: ['Entrapment', 'Eternal loss', 'Circular fate'],
    },
  ],

  languageDevices: [
    {
      device: 'Ballad form',
      example: 'Four-line stanzas with a short final line',
      effect:
        'Keats borrows the medieval ballad form and adds his own signature: a short last line in every stanza. The short line creates a dying-away effect, as if each stanza runs out of breath. The simple folkloric form gives the poem a timeless, oral quality, as if we are hearing a story passed down through generations.',
      lineRef: 0,
    },
    {
      device: 'Pathetic fallacy',
      example: 'The sedge has withered from the lake, / And no birds sing',
      effect:
        'The dead, silent landscape reflects the knight\'s inner state. Nature itself has stopped — it is as if the knight\'s emotional condition has drained the world of sound and colour. The pathetic fallacy turns setting into a mirror of feeling.',
      lineRef: 2,
    },
    {
      device: 'Symbolism',
      example: 'lily on thy brow… fading rose… starved lips',
      effect:
        'Keats uses flower and body symbols that traditional readers would recognise instantly. The lily is death, the rose is love and youth, the starved lips are the wasting of vitality. These symbols load the poem with associations without Keats having to explain them — they work like folklore shorthand.',
      lineRef: 8,
    },
    {
      device: 'Frame narrative',
      example: 'Speaker asks → Knight answers → Dream-kings warn',
      effect:
        'The poem has layers of voice. An outer speaker questions the knight; the knight tells his story; in his story, dream-kings cry the title aloud. Each layer adds distance and uncertainty. Crucially, the lady herself never speaks in her own voice — everything we know about her is second-hand, making her unknowable.',
      lineRef: 12,
    },
    {
      device: 'Repetition',
      example: 'Alone and palely loitering / And no birds sing',
      effect:
        'Key phrases repeat across the poem, functioning like ballad refrains. The repetition traps the knight in his own story — he ends where he began, in a landscape that has not changed. The circular structure makes his fate feel permanent.',
      lineRef: 1,
    },
    {
      device: 'Ambiguity',
      example: 'as she did love… language strange… sweet moan… wild wild eyes',
      effect:
        'Keats fills the central love encounter with words that could mean love or danger. "As she did love" — did she love him or only appear to? "Language strange" — can the knight really translate her meaning? "Sweet moan" — pleasure or distress? "Wild wild eyes" — fearful or ferocious? The ambiguity refuses to let the reader decide whether the lady is victim or villain.',
      lineRef: 18,
    },
  ],
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'My Last Duchess',
    poet: 'Robert Browning',
    href: '/revision/poetry/power-and-conflict/my-last-duchess',
    reason:
      'Both poems are about men whose relationships with women end in silence and loss. The Duke silences his Duchess through murder; the knight is silenced by enchantment. Compare how each poem uses a male speaker to reveal — often unintentionally — the damage done in the name of love.',
    themes: ['Love and power', 'Dangerous desire', 'Male voice'],
  },
  {
    title: 'Sonnet 116',
    poet: 'William Shakespeare',
    href: '/igcse/edexcel/poetry/sonnet-116',
    reason:
      'Shakespeare presents love as constant, steady, a "fixed mark". Keats presents love as enchantment that leaves you ruined. Compare two utterly opposite visions of what love is and does — ideal versus destructive.',
    themes: ['Nature of love', 'Constancy vs. destruction'],
  },
  {
    title: 'Prayer Before Birth',
    poet: 'Louis MacNeice',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems feature speakers who cannot escape their fate — the knight trapped on the hillside, the unborn child dreading the adult world. Compare the ballad\'s circular entrapment with MacNeice\'s modernist pleading.',
    themes: ['Trapped speakers', 'Fate', 'Helplessness'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function LaBelleDamePage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              La Belle Dame sans Merci
            </h1>
            <p className="text-body-sm text-muted-foreground">
              John Keats &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE Literature
            </Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={poem} />

      <StudyTools textName="La Belle Dame sans Merci" textType="poem" examBoard="Edexcel" variant="compact" />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Compare with
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another
          from the anthology. These are strong pairings for La Belle Dame
          sans Merci.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {c.reason}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
