"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Types ──────────────────────────────────────────────────── */

type Technique = {
  name: string;
  aka?: string;
  category: string;
  definition: string;
  example: string;
  exampleSource?: string;
  effect: string;
  howToIdentify: string;
  sentenceStarter: string;
  relevantQuestions: string[];
};

/* ─── Technique data ─────────────────────────────────────────── */

const TECHNIQUES: Technique[] = [
  /* ══════════════════════════════════════════════════════════════
     SENTENCE TYPES
     ══════════════════════════════════════════════════════════════ */
  {
    name: "Simple Sentence",
    category: "Sentence Types",
    definition:
      "A sentence containing one independent clause with a single subject and verb. It expresses one complete idea.",
    example: '"He ran."',
    exampleSource: "Crafted example",
    effect:
      "Creates impact, clarity, and directness. Short simple sentences after longer ones can create a sudden punch, shock, or moment of tension.",
    howToIdentify:
      "Count the clauses. If there is only one clause (one subject-verb pairing) and no subordinate clauses, it is a simple sentence.",
    sentenceStarter:
      'The short, simple sentence "[quote]" creates a blunt, direct effect, which emphasises...',
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Language analysis (all boards)",
      "Creative writing assessment",
    ],
  },
  {
    name: "Compound Sentence",
    category: "Sentence Types",
    definition:
      "Two or more independent clauses joined by a coordinating conjunction (and, but, or, so, yet, for, nor) or a semicolon.",
    example:
      '"The rain fell heavily, and the streets emptied within minutes."',
    exampleSource: "Crafted example",
    effect:
      "Connects ideas of equal weight, creating balance or accumulation. Can build a sense of events unfolding or ideas building upon each other.",
    howToIdentify:
      "Look for two complete clauses joined by 'and', 'but', 'or', 'so', 'yet', 'for', 'nor', or a semicolon.",
    sentenceStarter:
      "The compound sentence links [idea A] and [idea B], which creates a sense of...",
    relevantQuestions: [
      "Structure questions",
      "Language analysis (all boards)",
      "Creative writing assessment",
    ],
  },
  {
    name: "Complex Sentence",
    category: "Sentence Types",
    definition:
      "A sentence containing one independent clause and at least one subordinate (dependent) clause, often introduced by 'because', 'although', 'when', 'if', 'which'.",
    example:
      '"Although the sun was shining, she felt a deep unease that she could not explain."',
    exampleSource: "Crafted example",
    effect:
      "Allows the writer to add detail, nuance, and qualification. Creates sophisticated, layered prose that can build atmosphere and develop ideas.",
    howToIdentify:
      "Look for subordinating conjunctions (because, although, when, while, if, since, which, that) linking a dependent clause to a main clause.",
    sentenceStarter:
      'The complex sentence structure adds layers of detail, with the subordinate clause "[clause]" revealing...',
    relevantQuestions: [
      "Structure questions",
      "Language analysis (all boards)",
      "Creative writing assessment",
    ],
  },
  {
    name: "Minor Sentence / Fragment",
    aka: "Sentence fragment",
    category: "Sentence Types",
    definition:
      "An incomplete sentence -- a phrase or single word used as a sentence for deliberate effect. It lacks a main verb or subject.",
    example: '"Darkness. Nothing but darkness."',
    exampleSource: "Crafted example",
    effect:
      "Creates drama, tension, or emphasis. The brevity makes the reader stop short. Often used for cliffhangers, revelations, or to isolate a key moment.",
    howToIdentify:
      "Look for a 'sentence' that would be grammatically incomplete -- it may be just a word, a noun phrase, or a phrase without a main verb.",
    sentenceStarter:
      'The minor sentence "[quote]" isolates [word/idea], creating a dramatic pause that emphasises...',
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Language analysis (all boards)",
      "Creative writing assessment",
    ],
  },
  {
    name: "Exclamatory Sentence",
    category: "Sentence Types",
    definition:
      "A sentence that expresses strong emotion, surprise, or emphasis, ending with an exclamation mark. It conveys feeling rather than simply stating a fact.",
    example: '"What a piece of work is a man!"',
    exampleSource: "Shakespeare, Hamlet",
    effect:
      "Conveys intensity of emotion -- shock, anger, joy, or disbelief. In persuasive writing, it can express outrage or passion to engage the reader emotionally.",
    howToIdentify:
      "Look for sentences ending with an exclamation mark that express strong feeling. They often begin with 'what' or 'how' or are simply emphatic statements.",
    sentenceStarter:
      'The exclamatory sentence "[quote]" conveys a sense of [emotion], which emphasises the intensity of...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Persuasive writing analysis",
      "Creative writing assessment",
    ],
  },
  {
    name: "Interrogative Sentence",
    aka: "Rhetorical question (when no answer is expected)",
    category: "Sentence Types",
    definition:
      "A sentence that asks a question, ending with a question mark. When used rhetorically, no answer is expected -- the question is used for persuasive or dramatic effect.",
    example: '"If you prick us, do we not bleed?"',
    exampleSource: "Shakespeare, The Merchant of Venice",
    effect:
      "Directly engages the reader by prompting them to think. Rhetorical questions can challenge, persuade, or create a sense of shared understanding between writer and reader.",
    howToIdentify:
      "Look for sentences ending with a question mark. Consider whether the writer genuinely wants an answer or is using the question to make a point.",
    sentenceStarter:
      'The interrogative "[quote]" directly engages the reader, forcing them to consider...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Persuasive writing analysis",
      "Non-fiction analysis",
    ],
  },
  {
    name: "Imperative Sentence",
    category: "Sentence Types",
    definition:
      "A sentence that gives a command, instruction, or demand. The subject ('you') is usually implied rather than stated.",
    example: '"Look at him. Look at his eyes."',
    exampleSource: "Crafted example",
    effect:
      "Creates a sense of authority, urgency, or directness. The reader feels commanded or guided. In persuasive texts, imperatives create a call to action.",
    howToIdentify:
      "Look for sentences that begin with a verb and give an instruction or command. The word 'you' is usually implied. Tone is direct and authoritative.",
    sentenceStarter:
      'The imperative "[quote]" commands the reader to [action], creating a sense of [urgency/authority/directness]...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Persuasive writing analysis",
      "Non-fiction analysis",
    ],
  },
  {
    name: "Declarative Sentence",
    category: "Sentence Types",
    definition:
      "A sentence that makes a statement or declares a fact. It is the most common sentence type and ends with a full stop.",
    example: '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
    exampleSource: "Jane Austen, Pride and Prejudice",
    effect:
      "Establishes facts, opinions, or observations with authority. A bold declarative can sound certain and authoritative; an understated one can create irony or dry humour.",
    howToIdentify:
      "Look for sentences that make a statement and end with a full stop. They do not ask a question or give a command.",
    sentenceStarter:
      'The declarative statement "[quote]" asserts [idea] with certainty, which creates a tone of...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Writer's viewpoint questions",
      "Non-fiction analysis",
    ],
  },
  {
    name: "Listing / Tricolon",
    aka: "Rule of three",
    category: "Sentence Types",
    definition:
      "A series of three words, phrases, or clauses used together for emphasis, rhythm, and completeness. Listing can extend beyond three for accumulation.",
    example: '"Government of the people, by the people, for the people."',
    exampleSource: "Abraham Lincoln, Gettysburg Address",
    effect:
      "Creates rhythm, emphasis, and a sense of completeness. Three items feel satisfying and memorable. Longer lists can create a sense of overwhelming accumulation.",
    howToIdentify:
      "Count items in a list. Three items suggest tricolon; longer lists suggest accumulation. Look for parallel grammatical structure.",
    sentenceStarter:
      'The tricolon "[quote]" creates a powerful sense of [rhythm/completeness/accumulation], emphasising...',
    relevantQuestions: [
      "Language analysis (all boards)",
      "Persuasive writing analysis",
      "Speech analysis",
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     PARAGRAPH TECHNIQUES
     ══════════════════════════════════════════════════════════════ */
  {
    name: "Topic Sentence",
    category: "Paragraph Techniques",
    definition:
      "The opening sentence of a paragraph that introduces the main idea or argument that the rest of the paragraph will develop.",
    example:
      '"The most significant change, however, was in Sheila." -- followed by evidence and analysis of Sheila\'s transformation.',
    exampleSource: "Essay technique example",
    effect:
      "Provides clarity and direction for the reader. A strong topic sentence signals what the paragraph is about and controls the flow of argument or information.",
    howToIdentify:
      "Read the first sentence of each paragraph. If it introduces the key idea that the rest of the paragraph develops, it is a topic sentence.",
    sentenceStarter:
      "The writer uses the topic sentence to signal a shift to [new idea], which structures the argument by...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Non-fiction structure analysis",
      "Your own writing assessment",
    ],
  },
  {
    name: "Short Paragraph for Effect",
    category: "Paragraph Techniques",
    definition:
      "A deliberately brief paragraph -- sometimes just one sentence or even one word -- used to create emphasis, shock, or a change of pace.",
    example: '"She turned around.\n\nHe was gone."',
    exampleSource: "Crafted example",
    effect:
      "Creates a dramatic pause, forces the reader to stop and absorb the moment. The white space around a short paragraph gives it visual and emotional weight.",
    howToIdentify:
      "Look at the visual layout of the text. Identify paragraphs that are noticeably shorter than surrounding ones and consider why the writer chose to isolate that idea.",
    sentenceStarter:
      'The writer isolates "[quote]" in a short paragraph, creating a moment of [tension/revelation/emphasis] that forces the reader to...',
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Prose analysis",
      "Creative writing assessment",
    ],
  },
  {
    name: "One-Word Paragraph",
    category: "Paragraph Techniques",
    definition:
      "A single word given its own paragraph, used for maximum dramatic impact. It is the most extreme form of a short paragraph.",
    example: '"She listened for a response.\n\nSilence."',
    exampleSource: "Crafted example",
    effect:
      "Creates the sharpest possible emphasis. The word stands alone, surrounded by white space, forcing the reader to dwell on it. Often used at turning points or for revelations.",
    howToIdentify:
      "Look for a single word standing alone as its own paragraph. Consider why the writer chose to give this word such prominence.",
    sentenceStarter:
      'The one-word paragraph "[word]" creates a stark, isolated moment that emphasises [idea], forcing the reader to pause and reflect on...',
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Creative writing assessment",
      "Prose analysis",
    ],
  },
  {
    name: "Discourse Markers",
    aka: "Connectives / cohesive devices",
    category: "Paragraph Techniques",
    definition:
      "Words or phrases that signal the relationship between ideas, guiding the reader through the argument or narrative. Examples: 'however', 'furthermore', 'in contrast', 'meanwhile'.",
    example:
      '"Furthermore, the evidence suggests... However, critics argue that... Consequently, we must consider..."',
    exampleSource: "Non-fiction structure example",
    effect:
      "Creates a clear, logical flow between ideas. They signal contrast, addition, cause, time, or summary, helping the reader follow the writer's argument.",
    howToIdentify:
      "Look for words that connect paragraphs or sentences: 'however', 'therefore', 'in addition', 'on the other hand', 'finally', 'as a result'.",
    sentenceStarter:
      'The discourse marker "[word]" signals a [contrast/addition/consequence], guiding the reader from [idea A] to [idea B]...',
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Non-fiction analysis (all boards)",
      "Your own writing assessment",
    ],
  },
  {
    name: "Paragraph Length Variation",
    category: "Paragraph Techniques",
    definition:
      "The deliberate alternation between long and short paragraphs to control pacing, emphasis, and rhythm across a text.",
    example:
      "A long descriptive paragraph building atmosphere, followed by a one-sentence paragraph delivering a shocking revelation.",
    exampleSource: "General technique",
    effect:
      "Long paragraphs slow the pace and build detail or atmosphere. Short paragraphs accelerate the pace and create tension. The shift between them controls the reader's experience.",
    howToIdentify:
      "Step back and look at the visual shape of the text. Note patterns: where paragraphs are long and where they suddenly become short. Consider the effect of each shift.",
    sentenceStarter:
      "The writer shifts from [long/short] paragraphs to [short/long] paragraphs at this point, which changes the pace from [slow/detailed] to [urgent/punchy], creating...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Prose analysis",
      "Non-fiction structure analysis",
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     NARRATIVE STRUCTURES
     ══════════════════════════════════════════════════════════════ */
  {
    name: "Linear Narrative",
    aka: "Chronological structure",
    category: "Narrative Structures",
    definition:
      "A story told in chronological order -- events happen in the sequence they occur in time, from beginning to middle to end.",
    example:
      "A Christmas Carol follows Scrooge through one night, from the visit of Marley's Ghost through the three Spirits to his transformation on Christmas morning.",
    exampleSource: "Charles Dickens, A Christmas Carol",
    effect:
      "Creates a clear, easy-to-follow progression. The reader understands cause and effect naturally. Can build tension steadily towards a climax.",
    howToIdentify:
      "Ask: 'Does the story move forward in time without jumping? Do events happen in the order they occur?' If yes, it is linear.",
    sentenceStarter:
      "The linear structure allows the reader to follow [character]'s journey from [beginning] to [end], creating a clear sense of progression that...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Whole-text structure",
    ],
  },
  {
    name: "Non-Linear Narrative",
    category: "Narrative Structures",
    definition:
      "A narrative that does not follow a straightforward chronological order -- it may jump forwards, backwards, or between different timelines.",
    example:
      "Wuthering Heights uses nested narratives and moves between past and present, with Nelly Dean recounting events to Lockwood.",
    exampleSource: "Emily Bronte, Wuthering Heights",
    effect:
      "Creates mystery, suspense, and complexity. The reader must piece together the timeline, which can mirror a character's fragmented memory or reveal information strategically.",
    howToIdentify:
      "Ask: 'Does this story follow a straight timeline? Are there jumps to the past or future, or multiple timeframes?'",
    sentenceStarter:
      "The non-linear structure [mirrors / disrupts / fragments] the narrative, which creates...",
    relevantQuestions: [
      "Structure questions",
      "Literature essay analysis",
      "Narrative voice and form",
    ],
  },
  {
    name: "Circular Narrative",
    aka: "Cyclical structure",
    category: "Narrative Structures",
    definition:
      "When a text ends in the same place, situation, or with the same image or phrase as it began, creating a full circle.",
    example:
      "An Inspector Calls begins and ends with the announcement of an inspector -- the cycle of accountability restarts.",
    exampleSource: "J.B. Priestley, An Inspector Calls",
    effect:
      "Creates a sense of inevitability, entrapment, or fate. Can suggest that nothing has changed, or ironically highlight how everything has changed despite the return.",
    howToIdentify:
      "Compare the opening and ending. Ask: 'Does the text end where it began? Are the same images, phrases, or situations repeated?'",
    sentenceStarter:
      "The circular structure, returning to [opening image/idea], creates a sense of [inevitability/entrapment], suggesting...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Whole-text analysis",
    ],
  },
  {
    name: "Frame Narrative",
    aka: "Story within a story",
    category: "Narrative Structures",
    definition:
      "A story within a story -- an outer narrative 'frames' an inner narrative. A character in the outer story tells or discovers the inner story.",
    example:
      "In Wuthering Heights, Lockwood visits the Grange and hears Nelly Dean's account of the Earnshaw and Linton families. Her telling is the 'framed' story inside his visit.",
    exampleSource: "Emily Bronte, Wuthering Heights",
    effect:
      "Creates layers of narrative perspective. The reader must consider the reliability and bias of each narrator. It can build mystery by gradually revealing information.",
    howToIdentify:
      "Ask: 'Is there a story being told within another story? Is one character recounting events to another character (and to us)?'",
    sentenceStarter:
      "The frame narrative structure creates a layer of distance between the reader and events, which [enhances mystery / raises questions about reliability / controls revelation]...",
    relevantQuestions: [
      "Structure questions",
      "Literature essay analysis",
      "Narrative voice and form",
    ],
  },
  {
    name: "In Medias Res",
    category: "Narrative Structures",
    definition:
      "Beginning a narrative 'in the middle of things' -- the story opens mid-action without exposition, plunging the reader straight into a key moment.",
    example:
      "The Iliad begins in the final year of the Trojan War, not at its start.",
    exampleSource: "Homer, The Iliad",
    effect:
      "Creates immediate drama and intrigue. The reader is disorientated and must catch up, which builds engagement and urgency.",
    howToIdentify:
      "Ask: 'Does this story start in the middle of action? Is the reader dropped into a scene without context or background?'",
    sentenceStarter:
      "The use of in medias res plunges the reader directly into [scene], creating an immediate sense of...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Opening technique analysis",
    ],
  },
  {
    name: "Epistolary Structure",
    category: "Narrative Structures",
    definition:
      "A narrative told through a series of documents -- letters, diary entries, emails, texts, or newspaper articles -- rather than conventional narration.",
    example:
      "Frankenstein is structured as a series of letters from Captain Walton, containing Victor's story, which in turn contains the Creature's story.",
    exampleSource: "Mary Shelley, Frankenstein",
    effect:
      "Creates intimacy and immediacy -- the reader feels they are reading private documents. Multiple documents can provide different perspectives on the same events.",
    howToIdentify:
      "Ask: 'Is this story told through letters, diary entries, or other documents? Does the narrative take the form of written communication between characters?'",
    sentenceStarter:
      "The epistolary structure creates a sense of [intimacy/immediacy/authenticity], as the reader accesses [character]'s private thoughts through...",
    relevantQuestions: [
      "Structure questions",
      "Literature essay analysis",
      "Narrative voice and form",
    ],
  },
  {
    name: "Dual Narrative",
    aka: "Parallel narrative",
    category: "Narrative Structures",
    definition:
      "A text that follows two separate storylines or perspectives that may converge, contrast, or remain separate throughout.",
    example:
      "Jekyll and Hyde presents two parallel identities inhabiting the same body, with the narrative shifting between the perspectives of Utterson and other characters.",
    exampleSource: "R.L. Stevenson, Jekyll and Hyde",
    effect:
      "Allows comparison and contrast between two viewpoints, characters, or timelines. Creates dramatic irony when the reader knows more than individual characters.",
    howToIdentify:
      "Ask: 'Are there two distinct storylines or viewpoints alternating throughout the text? Do they eventually connect or remain separate?'",
    sentenceStarter:
      "The dual narrative structure invites the reader to compare [storyline A] with [storyline B], which highlights [contrast/connection/irony]...",
    relevantQuestions: [
      "Structure questions",
      "Literature essay analysis",
      "Narrative voice and form",
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     TEXT STRUCTURES
     ══════════════════════════════════════════════════════════════ */
  {
    name: "Zoom In / Zoom Out",
    aka: "Shift in focus",
    category: "Text Structures",
    definition:
      "A shift in perspective from a wide, panoramic view to a close-up detail (zoom in), or from a close-up to a wider view (zoom out) -- like a camera.",
    example:
      "A description that begins with a battlefield landscape (wide), then focuses on a single soldier's trembling hand (close).",
    exampleSource: "Crafted example",
    effect:
      "Zooming in creates intimacy and emotional connection with a detail. Zooming out provides scale and context. The shift itself can be powerful.",
    howToIdentify:
      "Look for changes in the 'camera angle' of the description. Ask: 'Has the focus moved from wide to close or close to wide?'",
    sentenceStarter:
      "The writer [zooms in / zooms out] from [wide view] to [close detail], which shifts the reader's focus to...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Descriptive writing analysis",
      "Language analysis",
    ],
  },
  {
    name: "Shift in Focus",
    category: "Text Structures",
    definition:
      "A deliberate change in what the text focuses on -- this could be a shift from one character to another, from exterior to interior, from action to reflection, or from present to past.",
    example:
      "A text that begins describing a bustling market, then shifts focus to a lone child standing apart from the crowd.",
    exampleSource: "Crafted example",
    effect:
      "Redirects the reader's attention and can reveal new layers of meaning. A shift from external action to internal thought, for example, deepens characterisation.",
    howToIdentify:
      "Ask: 'What was the text focused on before this point, and what has it shifted to? Has the subject, setting, or perspective changed?'",
    sentenceStarter:
      "The shift in focus from [A] to [B] draws the reader's attention to [new element], which reveals...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Prose analysis",
      "Literature essay analysis",
    ],
  },
  {
    name: "Shift in Perspective",
    category: "Text Structures",
    definition:
      "A change in who is telling the story or whose viewpoint the reader is given access to within a text.",
    example:
      "In An Inspector Calls, the perspective shifts from Birling's confidence to Sheila's guilt as the Inspector questions each character in turn.",
    exampleSource: "J.B. Priestley, An Inspector Calls",
    effect:
      "Offers multiple viewpoints on the same events. Can create empathy, reveal bias, build dramatic irony, or show a fuller picture of the truth.",
    howToIdentify:
      "Ask: 'Whose thoughts and feelings am I experiencing? Has this changed from earlier in the text?'",
    sentenceStarter:
      "The shift in perspective from [character A] to [character B] reveals [contrast/new information], which...",
    relevantQuestions: [
      "Structure questions",
      "Literature essay analysis",
      "Narrative voice questions",
    ],
  },
  {
    name: "Flashback",
    aka: "Analepsis",
    category: "Text Structures",
    definition:
      "An interruption in the chronological narrative to depict events that happened earlier. The story jumps back in time before returning to the present.",
    example:
      "In A Christmas Carol, the Ghost of Christmas Past takes Scrooge back to his childhood, showing the reader formative moments that explain his present character.",
    exampleSource: "Charles Dickens, A Christmas Carol",
    effect:
      "Provides backstory and context. Helps the reader understand a character's motivations, reveals hidden history, and can create sympathy or dramatic irony.",
    howToIdentify:
      "Look for a sudden shift to the past, often signalled by past perfect tense ('had been'), time markers ('years ago'), or a character remembering.",
    sentenceStarter:
      "The flashback to [event/time] reveals [hidden information], which helps the reader understand why [character] now...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Narrative technique questions",
    ],
  },
  {
    name: "Flashforward",
    aka: "Prolepsis",
    category: "Text Structures",
    definition:
      "An interruption in the chronological narrative to depict events that will happen in the future. The story jumps forward in time before returning.",
    example:
      "A narrator revealing 'Years later, she would look back on this moment and realise it changed everything' before returning to the present scene.",
    exampleSource: "Crafted example",
    effect:
      "Creates anticipation, foreshadowing, and dramatic irony. The reader knows what is coming, which adds tension and poignancy to present events.",
    howToIdentify:
      "Look for a sudden jump to the future, often signalled by 'would later', 'years from now', or future tense markers within a past-tense narrative.",
    sentenceStarter:
      "The flashforward to [future event] creates a sense of [inevitability/dramatic irony], as the reader now knows that...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Narrative technique questions",
    ],
  },
  {
    name: "Stream of Consciousness",
    category: "Text Structures",
    definition:
      "A narrative mode that attempts to replicate the continuous, unstructured flow of a character's thoughts and feelings.",
    example:
      "Long, flowing sentences without conventional punctuation, leaping between ideas and memories as a mind would.",
    exampleSource: "James Joyce, Ulysses (and modern GCSE extract writers)",
    effect:
      "Creates deep psychological immersion. The reader experiences the character's inner world directly, with all its chaos, associations, and emotional intensity.",
    howToIdentify:
      "Look for long, flowing sentences with minimal punctuation; sudden jumps between ideas; and an absence of structured narration. It reads like 'thinking aloud'.",
    sentenceStarter:
      "The stream of consciousness style immerses the reader in the character's [fragmented/racing/confused] thoughts, revealing...",
    relevantQuestions: [
      "Language and structure analysis",
      "Prose fiction analysis",
      "Narrative voice questions",
    ],
  },
  {
    name: "Shift in Tone",
    category: "Text Structures",
    definition:
      "A deliberate change in the emotional quality or attitude of the writing -- for example, from humorous to serious, optimistic to despairing, or calm to frantic.",
    example:
      "In An Inspector Calls, the tone shifts from celebratory confidence at the start to guilt and moral reckoning as the Inspector's questioning progresses.",
    exampleSource: "J.B. Priestley, An Inspector Calls",
    effect:
      "Signals a turning point, creates contrast, and deepens emotional impact. The change in tone can shock, unsettle, or redirect the reader's emotional response.",
    howToIdentify:
      "Read the passage aloud. Ask: 'Has the mood or attitude changed? Does the writing feel different in tone from what came before?'",
    sentenceStarter:
      "The shift in tone from [tone A] to [tone B] marks a turning point, creating a sense of [contrast/shock/progression]...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Prose analysis",
    ],
  },
  {
    name: "Foreshadowing",
    category: "Text Structures",
    definition:
      "A technique where the writer plants clues, hints, or suggestions early in the text about events that will happen later.",
    example:
      "In Romeo and Juliet, Romeo says 'my mind misgives / Some consequence yet hanging in the stars' before attending the Capulet ball -- hinting at the tragedy to come.",
    exampleSource: "Shakespeare, Romeo and Juliet",
    effect:
      "Creates tension, anticipation, and a sense of inevitability. On a second reading, foreshadowing adds layers of dramatic irony.",
    howToIdentify:
      "Look for ominous language, warnings, predictions, or symbolic details early in a text that seem to hint at later events.",
    sentenceStarter:
      'The foreshadowing in "[quote]" hints at [later event], creating a sense of [unease/inevitability/dramatic irony]...',
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Tension and suspense questions",
    ],
  },
  {
    name: "Withholding Information",
    aka: "Delayed revelation",
    category: "Text Structures",
    definition:
      "When the writer deliberately keeps key information from the reader, revealing it only at a strategic moment for maximum impact.",
    example:
      "In Jekyll and Hyde, the connection between Jekyll and Hyde is withheld until the final chapters, building mystery throughout.",
    exampleSource: "R.L. Stevenson, Jekyll and Hyde",
    effect:
      "Creates suspense, mystery, and engagement. The reader is compelled to keep reading to discover the truth. The eventual revelation carries greater emotional weight.",
    howToIdentify:
      "Ask: 'Is there something the writer seems to be holding back? Am I being given partial information? Is there a mystery that is only resolved later?'",
    sentenceStarter:
      "The writer withholds [information] until [point in text], which builds [suspense/mystery] and makes the eventual revelation of [truth] more...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Mystery/suspense analysis",
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     POETRY FORM
     ══════════════════════════════════════════════════════════════ */
  {
    name: "Enjambment",
    category: "Poetry Form",
    definition:
      "When a line of poetry runs on into the next line without punctuation, so the sentence or clause continues without a pause.",
    example:
      '"I wandered lonely as a cloud / That floats on high o\'er vales and hills"',
    exampleSource: "William Wordsworth, Daffodils",
    effect:
      "Creates flow and momentum, mirroring continuous movement or thought. Can build urgency, reflect chaos, or show an idea too large to be contained in one line.",
    howToIdentify:
      "Look for the end of a line with no punctuation (no full stop, comma, or dash). The sentence flows straight into the next line.",
    sentenceStarter:
      'The enjambment across "[line 1] / [line 2]" creates a sense of momentum, suggesting...',
    relevantQuestions: [
      "Poetry analysis (all boards)",
      "Structure questions",
      "Writer's use of form",
    ],
  },
  {
    name: "Caesura",
    category: "Poetry Form",
    definition:
      "A pause in the middle of a line of poetry, usually created by punctuation (a full stop, comma, dash, or semicolon).",
    example: '"I am -- yet what I am none cares or knows."',
    exampleSource: "John Clare, I Am",
    effect:
      "Creates a moment of pause, interruption, or reflection. Can emphasise a word, break the rhythm for dramatic effect, or mirror hesitation and conflict.",
    howToIdentify:
      "Look for punctuation in the middle of a line (not at the end). The line has a distinct pause when read aloud.",
    sentenceStarter:
      'The caesura in "[line]" forces the reader to pause, creating a moment of [reflection/tension/disruption], which...',
    relevantQuestions: [
      "Poetry analysis (all boards)",
      "Structure questions",
      "Writer's use of form",
    ],
  },
  {
    name: "Volta",
    aka: "Turn",
    category: "Poetry Form",
    definition:
      "A 'turn' or shift in a poem -- a change in argument, mood, tone, or perspective, most famously at the start of the final sestet (line 9) in a Petrarchan sonnet.",
    example:
      "In Shakespeare's Sonnet 18, the volta occurs at line 9: 'But thy eternal summer shall not fade' -- shifting from the comparison to a promise of immortality.",
    exampleSource: "Shakespeare, Sonnet 18",
    effect:
      "Creates surprise, resolution, or revelation. Marks a pivotal moment where the poem's argument or mood changes direction, often providing its central insight.",
    howToIdentify:
      "Look for a shift in tone, mood, or argument -- often signalled by 'but', 'yet', 'however', or a change from question to answer, problem to solution.",
    sentenceStarter:
      "The volta at [line/stanza] marks a shift from [X] to [Y], signalling...",
    relevantQuestions: [
      "Poetry analysis (all boards)",
      "Structure questions",
      "Sonnet analysis",
    ],
  },
  {
    name: "Stanza Break",
    category: "Poetry Form",
    definition:
      "The blank space between stanzas in a poem. The break separates groups of lines and can signal a shift in idea, time, mood, or speaker.",
    example:
      "In Ozymandias, the shift between the octave and sestet marks a move from description of the statue to reflection on the irony of power.",
    exampleSource: "Percy Bysshe Shelley, Ozymandias",
    effect:
      "Creates a visual and conceptual pause. The reader pauses between stanzas, and the break often marks a shift in focus, time, or tone. Irregular breaks can mirror disruption.",
    howToIdentify:
      "Look for the white space between groups of lines. Ask: 'What changes between this stanza and the next? Is there a shift in time, mood, or idea?'",
    sentenceStarter:
      "The stanza break between [stanza A] and [stanza B] marks a shift from [X] to [Y], creating a pause that...",
    relevantQuestions: [
      "Poetry analysis (all boards)",
      "Structure questions",
      "Form and meaning questions",
    ],
  },
  {
    name: "End-Stopping",
    category: "Poetry Form",
    definition:
      "When a line of poetry ends with punctuation (a full stop, comma, semicolon, or colon), creating a natural pause at the end of the line.",
    example: '"Tyger Tyger, burning bright,\nIn the forests of the night,"',
    exampleSource: "William Blake, The Tyger",
    effect:
      "Creates a measured, controlled rhythm. Each line feels complete and self-contained. Can create a sense of order, certainty, or finality.",
    howToIdentify:
      "Look for punctuation at the end of each line. If most lines end with a pause (comma, full stop, etc.), the poem uses end-stopping.",
    sentenceStarter:
      "The end-stopped lines create a [measured/controlled/deliberate] rhythm, which gives the poem a sense of...",
    relevantQuestions: [
      "Poetry analysis (all boards)",
      "Structure questions",
      "Writer's use of form",
    ],
  },
  {
    name: "Metre",
    aka: "Meter / rhythm pattern",
    category: "Poetry Form",
    definition:
      "The pattern of stressed and unstressed syllables in a line of poetry. Common metres include iambic pentameter (five pairs of unstressed-stressed syllables) and trochaic tetrameter.",
    example:
      '"Shall I / com-PARE / thee TO / a SUM / mer\'s DAY?" -- iambic pentameter with five stressed beats.',
    exampleSource: "Shakespeare, Sonnet 18",
    effect:
      "Creates rhythm and musicality. Regular metre can create a sense of order or formality; disrupted metre creates tension. Iambic pentameter mirrors natural speech.",
    howToIdentify:
      "Read the line aloud and tap the stressed syllables. Count the beats per line. If there is a regular pattern (e.g., da-DUM da-DUM), identify the metre.",
    sentenceStarter:
      "The [type] metre creates a [regular/disrupted] rhythm, which gives the poem a sense of [formality/musicality/tension]...",
    relevantQuestions: [
      "Poetry analysis (all boards)",
      "Writer's use of form",
      "Sonnet and form analysis",
    ],
  },
  {
    name: "Rhyme Scheme",
    category: "Poetry Form",
    definition:
      "The pattern of rhyming words at the ends of lines, described using letters (ABAB, AABB, ABBA, etc.). Different schemes create different effects.",
    example:
      "Shakespeare's sonnets use ABAB CDCD EFEF GG -- three quatrains and a final couplet.",
    exampleSource: "Shakespeare, Sonnets",
    effect:
      "Creates musicality, cohesion, and expectation. Regular rhyme can feel ordered or musical; broken rhyme creates unease. A final couplet can deliver a punchline or resolution.",
    howToIdentify:
      "Mark the end sound of each line with a letter (A, B, C...). Lines that share an end sound get the same letter. The resulting pattern is the rhyme scheme.",
    sentenceStarter:
      "The [ABAB/AABB/etc.] rhyme scheme creates a sense of [order/musicality/expectation], which...",
    relevantQuestions: [
      "Poetry analysis (all boards)",
      "Writer's use of form",
      "Sonnet and form analysis",
    ],
  },
  {
    name: "Free Verse",
    category: "Poetry Form",
    definition:
      "Poetry that does not follow a regular metre, rhyme scheme, or line length. The poet has freedom to shape the poem as the content demands.",
    example:
      "Many modern poems, including those in the AQA Power and Conflict anthology (e.g., 'Tissue' by Imtiaz Dharker), use free verse.",
    exampleSource: "Imtiaz Dharker, Tissue",
    effect:
      "Creates a natural, conversational, or unpredictable feel. The absence of regular form can mirror freedom, chaos, or modernity. It draws attention to individual word choices.",
    howToIdentify:
      "Check for regular rhyme, metre, or stanza length. If there is no consistent pattern, it is likely free verse. Note: free verse is not the same as 'no structure'.",
    sentenceStarter:
      "The use of free verse gives the poem a [natural/unrestrained/unpredictable] quality, which mirrors...",
    relevantQuestions: [
      "Poetry analysis (all boards)",
      "Writer's use of form",
      "Form and meaning questions",
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     DRAMATIC STRUCTURE
     ══════════════════════════════════════════════════════════════ */
  {
    name: "Exposition",
    category: "Dramatic Structure",
    definition:
      "The opening section of a narrative or play that establishes the setting, characters, situation, and background information the audience needs.",
    example:
      "Act 1 of An Inspector Calls opens with the Birling family celebrating Sheila's engagement -- establishing their wealth, complacency, and social status.",
    exampleSource: "J.B. Priestley, An Inspector Calls",
    effect:
      "Grounds the reader in the world of the text. Establishes the 'normal' situation before disruption, which makes later conflict more impactful by contrast.",
    howToIdentify:
      "Look at the opening of the text. Ask: 'What is being established here? Am I learning about setting, characters, or the situation before the main conflict begins?'",
    sentenceStarter:
      "The exposition establishes [setting/characters/situation], which creates a sense of [normality/stability] that will later be disrupted by...",
    relevantQuestions: [
      "Literature essay analysis",
      "Drama analysis",
      "Whole-text structure",
    ],
  },
  {
    name: "Rising Action",
    category: "Dramatic Structure",
    definition:
      "The series of events and complications that build tension and develop the central conflict, leading towards the climax.",
    example:
      "In An Inspector Calls, each family member's involvement with Eva Smith is revealed in turn, building guilt and tension with each revelation.",
    exampleSource: "J.B. Priestley, An Inspector Calls",
    effect:
      "Builds suspense and engagement. Each complication raises the stakes, deepens the conflict, and makes the reader more invested in the outcome.",
    howToIdentify:
      "Look for events that complicate the situation and increase tension. Ask: 'Are things getting more complicated, more tense, or more serious?'",
    sentenceStarter:
      "The rising action intensifies through [event], which raises the stakes by...",
    relevantQuestions: [
      "Literature essay analysis",
      "Drama analysis",
      "Tension and conflict questions",
    ],
  },
  {
    name: "Climax",
    category: "Dramatic Structure",
    definition:
      "The point of highest tension, drama, or emotional intensity in a narrative -- the turning point where the central conflict reaches its peak.",
    example:
      "In Macbeth, the murder of King Duncan is the climax of Act 2 -- the point of no return for Macbeth.",
    exampleSource: "Shakespeare, Macbeth",
    effect:
      "Delivers maximum emotional impact. Everything has been building to this moment. It often forces a decisive change and determines the direction of the rest of the narrative.",
    howToIdentify:
      "Ask: 'Where is the moment of greatest tension or drama? Where does the conflict reach its peak? What is the turning point?'",
    sentenceStarter:
      "The climax occurs when [event], which represents the point of highest [tension/drama/conflict] and forces...",
    relevantQuestions: [
      "Literature essay analysis",
      "Drama analysis",
      "Tension and conflict questions",
    ],
  },
  {
    name: "Falling Action",
    category: "Dramatic Structure",
    definition:
      "The events that follow the climax, where tension begins to decrease and the consequences of the climax unfold.",
    example:
      "After Duncan's murder in Macbeth, the falling action shows Macbeth's increasing paranoia, tyranny, and isolation as his power crumbles.",
    exampleSource: "Shakespeare, Macbeth",
    effect:
      "Shows the consequences and aftermath of the climax. Tension may decrease, but new complications can arise. It moves the narrative towards resolution.",
    howToIdentify:
      "Look for events after the climax that show consequences unfolding. Ask: 'Are we past the peak of tension? Are consequences being revealed?'",
    sentenceStarter:
      "The falling action reveals the consequences of [climax event], as [character/situation] begins to...",
    relevantQuestions: [
      "Literature essay analysis",
      "Drama analysis",
      "Whole-text structure",
    ],
  },
  {
    name: "Denouement",
    aka: "Resolution",
    category: "Dramatic Structure",
    definition:
      "The final part of a narrative where loose ends are tied up, the conflict is resolved (or deliberately left unresolved), and the story reaches its conclusion.",
    example:
      "At the end of A Christmas Carol, Scrooge is transformed -- he raises Bob's salary, sends a turkey to the Cratchits, and becomes a generous, joyful man.",
    exampleSource: "Charles Dickens, A Christmas Carol",
    effect:
      "Provides closure (or deliberately withholds it). A neat resolution creates satisfaction; an ambiguous one provokes thought. It shapes the reader's final impression.",
    howToIdentify:
      "Look at the very end of the text. Ask: 'Are the main conflicts resolved? Are loose ends tied up? Or is the ending deliberately ambiguous?'",
    sentenceStarter:
      "The denouement provides [resolution/ambiguity] as [outcome], leaving the reader with a sense of...",
    relevantQuestions: [
      "Literature essay analysis",
      "Drama analysis",
      "Whole-text structure",
    ],
  },
  {
    name: "Soliloquy",
    category: "Dramatic Structure",
    definition:
      "A speech in a play where a character speaks their thoughts aloud while alone on stage, revealing their inner feelings directly to the audience.",
    example:
      '"Is this a dagger which I see before me, / The handle toward my hand?" -- Macbeth reveals his tortured conscience before murdering Duncan.',
    exampleSource: "Shakespeare, Macbeth",
    effect:
      "Provides direct access to a character's private thoughts and moral struggles. Creates intimacy between the character and audience, and can build sympathy or reveal villainy.",
    howToIdentify:
      "Look for a long speech where the character is alone on stage (or believes they are). They speak their inner thoughts aloud, often debating with themselves.",
    sentenceStarter:
      "The soliloquy reveals [character]'s inner [conflict/thoughts/feelings], as they confide in the audience that...",
    relevantQuestions: [
      "Literature essay analysis",
      "Drama analysis (Shakespeare)",
      "Character analysis",
    ],
  },
  {
    name: "Aside",
    category: "Dramatic Structure",
    definition:
      "A short remark made by a character to the audience that other characters on stage cannot hear. It reveals the character's true thoughts or intentions.",
    example:
      "In pantomime, the villain often turns to the audience to reveal their wicked plan. In Shakespeare, asides reveal hidden motives or dramatic irony.",
    exampleSource: "General dramatic convention",
    effect:
      "Creates dramatic irony -- the audience knows something that other characters do not. Reveals a character's true nature, duplicity, or hidden agenda.",
    howToIdentify:
      "Look for stage directions indicating '[aside]' or a character briefly addressing the audience while other characters are present but supposedly cannot hear.",
    sentenceStarter:
      "The aside reveals [character]'s true [feelings/intentions] to the audience, creating dramatic irony because the other characters do not know that...",
    relevantQuestions: [
      "Literature essay analysis",
      "Drama analysis (Shakespeare)",
      "Dramatic irony questions",
    ],
  },
  {
    name: "Dramatic Irony",
    category: "Dramatic Structure",
    definition:
      "When the audience knows something that one or more characters do not. The gap between what the character believes and what the audience knows creates tension.",
    example:
      "In An Inspector Calls, Birling confidently predicts 'the Titanic... unsinkable, absolutely unsinkable' -- the audience knows the Titanic sank.",
    exampleSource: "J.B. Priestley, An Inspector Calls",
    effect:
      "Creates tension, suspense, humour, or pathos. The audience watches characters act in ignorance, knowing the truth that will eventually be revealed.",
    howToIdentify:
      "Ask: 'Do I (the reader/audience) know something that a character does not? Is a character acting on false information that I know to be false?'",
    sentenceStarter:
      "The dramatic irony is created when [character] [says/does X], while the audience knows that [truth], which creates a sense of...",
    relevantQuestions: [
      "Literature essay analysis",
      "Drama analysis",
      "Character and theme questions",
    ],
  },
  {
    name: "Stage Directions",
    category: "Dramatic Structure",
    definition:
      "Instructions in a play script (usually in italics or brackets) that describe how characters should move, speak, or behave, or what the set should look like.",
    example:
      "In An Inspector Calls: '(The lighting should be pink and intimate until the Inspector arrives, and then it should be brighter and harder.)'",
    exampleSource: "J.B. Priestley, An Inspector Calls",
    effect:
      "Controls how the play is performed and experienced. Stage directions can reveal character, create atmosphere, and carry symbolic meaning beyond the dialogue.",
    howToIdentify:
      "Look for text in italics or brackets that is not spoken dialogue. It describes actions, movement, tone of voice, lighting, or set design.",
    sentenceStarter:
      "The stage direction '[quote]' reveals [character trait/atmosphere/symbolism], suggesting that Priestley intended...",
    relevantQuestions: [
      "Literature essay analysis",
      "Drama analysis",
      "Writer's methods questions",
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     OPENING TECHNIQUES
     ══════════════════════════════════════════════════════════════ */
  {
    name: "Opening with Dialogue",
    category: "Opening Techniques",
    definition:
      "Beginning a text with direct speech, immediately placing the reader in the middle of a conversation or moment.",
    example:
      '"\"Call me Ishmael.\"" -- the novel opens with the narrator speaking directly to the reader.',
    exampleSource: "Herman Melville, Moby-Dick",
    effect:
      "Creates immediacy and draws the reader straight into a character's voice. It can establish character, conflict, or tone from the very first line.",
    howToIdentify:
      "Look for speech marks in the opening sentence. The text begins with a character speaking rather than with description or narration.",
    sentenceStarter:
      "The writer opens with dialogue, immediately establishing [character voice/conflict/tone] and drawing the reader into...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Creative writing assessment",
      "Opening technique analysis",
    ],
  },
  {
    name: "Opening with a Question",
    category: "Opening Techniques",
    definition:
      "Beginning a text with a question (rhetorical or genuine) to immediately engage the reader's curiosity and provoke thought.",
    example:
      '"What is it that makes a house a home?"',
    exampleSource: "Crafted non-fiction example",
    effect:
      "Directly engages the reader by prompting them to think. Creates a sense of shared enquiry and establishes the central theme or argument from the outset.",
    howToIdentify:
      "Look for a question mark in the opening sentence. The text begins by posing a question rather than making a statement.",
    sentenceStarter:
      "The writer opens with a question to immediately engage the reader, provoking them to consider [theme/issue] before...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Non-fiction analysis",
      "Persuasive writing analysis",
    ],
  },
  {
    name: "Opening with a Bold Statement",
    category: "Opening Techniques",
    definition:
      "Beginning a text with a striking, provocative, or controversial declaration that demands the reader's attention.",
    example:
      '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
    exampleSource: "Jane Austen, Pride and Prejudice",
    effect:
      "Grabs attention immediately and establishes the writer's voice, confidence, and central idea. Can provoke agreement, disagreement, or curiosity.",
    howToIdentify:
      "Look for an assertive, confident, or provocative statement in the opening line. It makes a claim or observation that demands a response.",
    sentenceStarter:
      "The bold opening statement immediately establishes [idea/tone], compelling the reader to engage with the writer's perspective on...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Non-fiction analysis",
      "Writer's viewpoint questions",
    ],
  },
  {
    name: "Opening with Description / Setting",
    category: "Opening Techniques",
    definition:
      "Beginning a text by describing the setting, atmosphere, or environment -- establishing the world of the text before introducing characters or action.",
    example:
      '"It was a bright cold day in April, and the clocks were striking thirteen."',
    exampleSource: "George Orwell, Nineteen Eighty-Four",
    effect:
      "Establishes atmosphere, mood, and world. The reader is immersed in the setting before anything happens, which can create anticipation or unease.",
    howToIdentify:
      "Look for descriptive language about place, weather, time, or environment in the opening sentences, before any dialogue or action.",
    sentenceStarter:
      "The writer opens with description of [setting], establishing a [mood/atmosphere] that immediately suggests...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Prose analysis",
      "Creative writing assessment",
    ],
  },
  {
    name: "Opening with Action",
    aka: "In medias res opening",
    category: "Opening Techniques",
    definition:
      "Beginning a text in the middle of action or a dramatic event, without prior context or build-up, plunging the reader directly into the narrative.",
    example:
      '"The bomb went off at exactly 3:47pm."',
    exampleSource: "Crafted example",
    effect:
      "Creates immediate urgency, excitement, and engagement. The reader must catch up with events, which builds tension and a desire to understand what is happening.",
    howToIdentify:
      "Look for an opening that drops the reader into a scene mid-event. There is no introduction, background, or set-up -- the action has already begun.",
    sentenceStarter:
      "The writer opens with action, plunging the reader directly into [event], which creates an immediate sense of...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Creative writing assessment",
      "Opening technique analysis",
    ],
  },
  {
    name: "Opening with Mystery / Intrigue",
    category: "Opening Techniques",
    definition:
      "Beginning a text with something unexplained, strange, or puzzling that raises questions in the reader's mind and compels them to read on.",
    example:
      '"Last night I dreamt I went to Manderley again."',
    exampleSource: "Daphne du Maurier, Rebecca",
    effect:
      "Creates curiosity and suspense from the first line. The reader wants to know what happened, who is involved, and why -- compelling them to continue reading.",
    howToIdentify:
      "Look for an opening that raises more questions than it answers. Something feels unexplained, strange, or deliberately withheld.",
    sentenceStarter:
      "The mysterious opening immediately creates intrigue, as the reader is left wondering [question], which compels them to...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Prose analysis",
      "Creative writing assessment",
    ],
  },
  {
    name: "Opening with a Contrast / Juxtaposition",
    category: "Opening Techniques",
    definition:
      "Beginning a text by placing two opposing ideas, images, or situations side by side to highlight the difference between them.",
    example:
      '"It was the best of times, it was the worst of times."',
    exampleSource: "Charles Dickens, A Tale of Two Cities",
    effect:
      "Immediately establishes tension, conflict, or complexity. The reader is presented with two opposing perspectives and must consider how they connect.",
    howToIdentify:
      "Look for opposing words, ideas, or images placed close together in the opening. Is the writer setting up a contrast from the start?",
    sentenceStarter:
      "The contrasting opening juxtaposes [A] with [B], immediately establishing a sense of [conflict/complexity/tension]...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Prose analysis",
      "Non-fiction analysis",
    ],
  },
  {
    name: "Opening with Direct Address",
    category: "Opening Techniques",
    definition:
      "Beginning a text by speaking directly to the reader using 'you', 'we', or the reader's implied presence, breaking the fourth wall.",
    example:
      '"You are about to begin reading Italo Calvino\'s new novel."',
    exampleSource: "Italo Calvino, If on a winter's night a traveller",
    effect:
      "Creates an immediate personal connection between writer and reader. The reader feels addressed, involved, and drawn into the text on a personal level.",
    howToIdentify:
      "Look for second person pronouns ('you', 'your') or first person plural ('we', 'our') in the opening. The reader feels directly spoken to.",
    sentenceStarter:
      "The direct address to the reader in the opening creates an immediate sense of [connection/involvement/challenge], as the writer draws them into...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Non-fiction analysis",
      "Persuasive writing analysis",
    ],
  },
  {
    name: "Opening with an Anecdote",
    category: "Opening Techniques",
    definition:
      "Beginning a text with a short personal story or specific incident that illustrates a larger point the writer intends to make.",
    example:
      '"When I was seven years old, I watched my grandmother\'s house burn to the ground. That night changed everything I understood about loss."',
    exampleSource: "Crafted non-fiction example",
    effect:
      "Creates an emotional and personal hook. The reader connects with a specific human experience before the broader argument or theme is introduced.",
    howToIdentify:
      "Look for a brief personal story or specific incident in the opening that sets up the broader topic of the text.",
    sentenceStarter:
      "The anecdotal opening draws the reader in through a specific personal experience, which humanises the topic of [theme] and creates...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Non-fiction analysis",
      "Persuasive writing analysis",
    ],
  },
  {
    name: "Opening with a Fact or Statistic",
    category: "Opening Techniques",
    definition:
      "Beginning a text with a surprising or shocking piece of factual information or data to establish credibility and capture attention.",
    example:
      '"Every two minutes, a child in the UK goes hungry."',
    exampleSource: "Crafted non-fiction example",
    effect:
      "Establishes authority and credibility while shocking or informing the reader. The factual opening grounds the text in reality and can provoke an emotional response.",
    howToIdentify:
      "Look for numbers, percentages, dates, or factual claims in the opening sentence. The text begins with evidence rather than opinion or description.",
    sentenceStarter:
      "The factual opening immediately establishes the scale of [issue], shocking the reader with the reality that...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Non-fiction analysis",
      "Persuasive writing analysis",
    ],
  },
  {
    name: "Opening with a Short Sentence",
    category: "Opening Techniques",
    definition:
      "Beginning a text with a deliberately brief, punchy sentence to create immediate impact before developing the idea further.",
    example: '"He was dead."',
    exampleSource: "Crafted example",
    effect:
      "Creates a stark, dramatic opening that stops the reader in their tracks. The brevity demands attention and often raises an immediate question: what happened?",
    howToIdentify:
      "Look for an unusually short first sentence -- often just three to five words. It creates a sharp contrast with the longer sentences that follow.",
    sentenceStarter:
      'The short opening sentence "[quote]" creates an immediate, stark impact, which hooks the reader by...',
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Creative writing assessment",
      "Opening technique analysis",
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     ENDING TECHNIQUES
     ══════════════════════════════════════════════════════════════ */
  {
    name: "Circular Ending",
    aka: "Return to the opening",
    category: "Ending Techniques",
    definition:
      "An ending that returns to the same image, phrase, setting, or situation as the opening, creating a full circle.",
    example:
      "An Inspector Calls ends with a phone call announcing a real inspector is coming -- mirroring the opening arrival of the Inspector and restarting the cycle.",
    exampleSource: "J.B. Priestley, An Inspector Calls",
    effect:
      "Creates a sense of completion, inevitability, or entrapment. The return can highlight how much (or how little) has changed, and often carries ironic or symbolic weight.",
    howToIdentify:
      "Compare the ending with the opening. Ask: 'Does the text return to where it started? Are the same images, words, or situations repeated?'",
    sentenceStarter:
      "The circular ending, returning to [opening image/idea], creates a sense of [inevitability/completion/irony], suggesting that...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Whole-text structure",
    ],
  },
  {
    name: "Ambiguous Ending",
    aka: "Open ending",
    category: "Ending Techniques",
    definition:
      "An ending that does not provide a clear resolution -- it leaves questions unanswered, inviting the reader to interpret the outcome for themselves.",
    example:
      "The ending of The Lady or the Tiger? (Frank Stockton) leaves it entirely to the reader to decide what was behind the door.",
    exampleSource: "Frank Stockton, The Lady or the Tiger?",
    effect:
      "Provokes thought and discussion. The reader is left unsettled, unable to close the book and forget it. It reflects the complexity of life where not everything is resolved neatly.",
    howToIdentify:
      "Ask: 'Does the ending answer the central question? Is the conflict fully resolved? Am I left wondering what happens next?'",
    sentenceStarter:
      "The ambiguous ending refuses to provide a clear resolution, leaving the reader to consider [question], which suggests that...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Whole-text structure",
    ],
  },
  {
    name: "Twist Ending",
    category: "Ending Techniques",
    definition:
      "An unexpected revelation or reversal at the end of a text that changes the reader's understanding of everything that came before.",
    example:
      "In Jekyll and Hyde, the final chapter reveals that Jekyll and Hyde are the same person -- recontextualising the entire narrative.",
    exampleSource: "R.L. Stevenson, Jekyll and Hyde",
    effect:
      "Creates shock and surprise. Forces the reader to reconsider the entire text in light of the new information. Can be thrilling, disturbing, or deeply satisfying.",
    howToIdentify:
      "Ask: 'Was there a surprising revelation at the end? Did my understanding of the story change dramatically in the final pages?'",
    sentenceStarter:
      "The twist ending reveals [truth], which forces the reader to reconsider [earlier events/assumptions], creating a sense of...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Plot and structure questions",
    ],
  },
  {
    name: "Cliffhanger Ending",
    category: "Ending Techniques",
    definition:
      "An ending that leaves the narrative at a moment of unresolved suspense, with the outcome unknown. Often used at the end of chapters or serialised stories.",
    example:
      "A chapter ending with: 'She opened the door -- and froze.'",
    exampleSource: "Crafted example",
    effect:
      "Creates suspense and compels the reader to continue (or leaves them haunted if it is the final ending). The lack of resolution is itself the effect.",
    howToIdentify:
      "Look at the final lines. Ask: 'Am I left in suspense? Is a question dramatically unanswered? Do I urgently want to know what happens next?'",
    sentenceStarter:
      "The cliffhanger ending leaves the reader suspended in [tension/uncertainty], as the unresolved [event/question] creates...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Prose fiction analysis",
      "Creative writing assessment",
    ],
  },
  {
    name: "Resolved Ending",
    aka: "Closed ending",
    category: "Ending Techniques",
    definition:
      "An ending where all conflicts are resolved, questions are answered, and the narrative reaches a clear, definitive conclusion.",
    example:
      "At the end of A Christmas Carol, Scrooge is completely transformed -- he embraces Christmas, helps the Cratchits, and becomes a better man. All threads are neatly tied.",
    exampleSource: "Charles Dickens, A Christmas Carol",
    effect:
      "Provides satisfaction and closure. The reader leaves the text feeling that justice has been done and all loose ends are tied up. Can feel reassuring or moralistic.",
    howToIdentify:
      "Ask: 'Are all the major conflicts resolved? Are loose ends tied up? Does the ending feel complete and final?'",
    sentenceStarter:
      "The resolved ending provides a sense of [closure/satisfaction/justice], as [outcome] confirms that...",
    relevantQuestions: [
      "Literature essay analysis",
      "Whole-text structure",
      "Character arc questions",
    ],
  },
  {
    name: "Ending with an Image",
    category: "Ending Techniques",
    definition:
      "Concluding a text with a vivid, symbolic, or emotionally resonant image rather than a statement or explanation, allowing it to speak for itself.",
    example:
      "In Remains (Simon Armitage), the poem ends with the image of 'his bloody life in my bloody hands' -- a powerful final image that lingers.",
    exampleSource: "Simon Armitage, Remains",
    effect:
      "Creates a lasting emotional impression. The image stays with the reader after the text has ended, conveying meaning through showing rather than telling.",
    howToIdentify:
      "Look at the final sentence or lines. Is the writer ending with a concrete image or visual rather than an abstract statement or explanation?",
    sentenceStarter:
      "The writer ends with the powerful image of [image], which lingers in the reader's mind and conveys a sense of [emotion/theme]...",
    relevantQuestions: [
      "Poetry analysis (all boards)",
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
    ],
  },
  {
    name: "Call to Action Ending",
    category: "Ending Techniques",
    definition:
      "An ending that directly urges the reader to do something -- to act, change, think differently, or take a specific step. Common in persuasive and non-fiction writing.",
    example:
      '"The time for debate is over. Act now. Write to your MP. Demand change."',
    exampleSource: "Crafted non-fiction example",
    effect:
      "Transforms the reader from a passive audience into an active participant. Creates urgency, purpose, and a sense that the text has real-world consequences.",
    howToIdentify:
      "Look for imperative verbs and direct address at the end of the text. The writer is telling the reader what to do, not just what to think.",
    sentenceStarter:
      "The call to action ending transforms the reader from passive observer to active participant, urging them to [action], which creates a sense of...",
    relevantQuestions: [
      "Non-fiction analysis",
      "Persuasive writing analysis",
      "Structure questions (AQA Q3)",
    ],
  },
  {
    name: "Ending with a Question",
    category: "Ending Techniques",
    definition:
      "Concluding a text with a question (rhetorical or genuine) that leaves the reader reflecting, challenged, or uncertain.",
    example:
      "An Inspector Calls arguably ends with the implied question: will the Birlings learn from their mistakes, or will they repeat them?",
    exampleSource: "J.B. Priestley, An Inspector Calls",
    effect:
      "Leaves the reader thinking beyond the text. The question lingers, ensuring the text stays in the reader's mind and provoking personal reflection or discussion.",
    howToIdentify:
      "Look for a question mark at or near the end of the text. The writer ends by asking rather than telling.",
    sentenceStarter:
      "The writer ends with the question '[quote]', which leaves the reader reflecting on [theme/issue] and challenges them to consider...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Non-fiction analysis",
      "Literature essay analysis",
    ],
  },
  {
    name: "Ending with a Short Sentence",
    category: "Ending Techniques",
    definition:
      "Concluding a text with a deliberately brief, punchy final sentence that delivers maximum impact through its brevity.",
    example: '"And then there was silence."',
    exampleSource: "Crafted example",
    effect:
      "Creates a stark, final note that resonates. After longer, more developed prose, a short final sentence lands with the weight of finality, shock, or quiet devastation.",
    howToIdentify:
      "Look at the very last sentence. Is it noticeably shorter than the sentences before it? Does it feel like a deliberate, dramatic conclusion?",
    sentenceStarter:
      'The short final sentence "[quote]" creates a stark, resonant ending that leaves the reader with a sense of [finality/devastation/quiet power]...',
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Creative writing assessment",
      "Prose analysis",
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     ADDITIONAL STRUCTURAL TECHNIQUES
     ══════════════════════════════════════════════════════════════ */
  {
    name: "Dialogue",
    category: "Additional Structural Techniques",
    definition:
      "Speech between characters, presented in quotation marks, used to reveal character, advance plot, or create tension.",
    example:
      '"I don\'t believe it," she whispered. "Then you\'re a fool," he replied.',
    exampleSource: "Crafted example",
    effect:
      "Brings characters to life through their own voices. Reveals relationships, conflict, power dynamics, and individual personality through speech patterns and word choices.",
    howToIdentify:
      "Look for text in speech marks with speech verbs (said, whispered, shouted). Consider what the dialogue reveals beyond its literal content.",
    sentenceStarter:
      "The dialogue between [characters] reveals [relationship/conflict/power dynamic], as [character]'s use of [specific language] suggests...",
    relevantQuestions: [
      "Character analysis",
      "Literature essay analysis",
      "Prose fiction analysis",
    ],
  },
  {
    name: "Interior Monologue",
    category: "Additional Structural Techniques",
    definition:
      "The representation of a character's internal thoughts and feelings, presented as though the reader is inside their mind -- more structured than stream of consciousness.",
    example:
      '"She could not go back. Not now. Not after everything. And yet the thought of moving forward terrified her."',
    exampleSource: "Crafted example",
    effect:
      "Creates intimacy and emotional depth. The reader understands the character's internal conflict, fears, and motivations directly.",
    howToIdentify:
      "Look for extended passages of a character's thoughts, often in the character's own 'voice', sometimes without speech marks.",
    sentenceStarter:
      "The interior monologue reveals [character]'s inner conflict between [X] and [Y], as shown through...",
    relevantQuestions: [
      "Character analysis",
      "Prose fiction analysis",
      "Narrative technique questions",
    ],
  },
  {
    name: "Cliffhanger",
    category: "Additional Structural Techniques",
    definition:
      "Ending a chapter, section, or text at a moment of suspense or unresolved tension, leaving the reader wanting to know what happens next.",
    example:
      "A chapter ending with: 'She reached for the handle. The door was already open.'",
    exampleSource: "Crafted example",
    effect:
      "Builds suspense and compels the reader to continue. Creates a page-turning quality and maintains engagement across sections.",
    howToIdentify:
      "Look at the end of chapters, sections, or paragraphs. Ask: 'Is the reader left in suspense? Is a question unanswered?'",
    sentenceStarter:
      "The cliffhanger at the end of [chapter/section] leaves the reader in suspense, as...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Prose fiction analysis",
      "Tension and suspense questions",
    ],
  },
  {
    name: "Repetition (Structural)",
    category: "Additional Structural Techniques",
    definition:
      "The deliberate reuse of a word, phrase, image, or structural pattern across a text to create emphasis, unity, or development.",
    example:
      "In 'London' by William Blake, the word 'every' is repeated across stanzas, building a sense of universality and inescapable suffering.",
    exampleSource: "William Blake, London",
    effect:
      "Creates emphasis, rhythm, and cohesion. Structural repetition can build to a crescendo, hammer home a point, or create a sense of obsession or inescapability.",
    howToIdentify:
      "Look for words, phrases, images, or patterns that recur across the text. Ask: 'What is repeated and why? Does it develop or change each time?'",
    sentenceStarter:
      'The repetition of "[word/phrase]" across the text creates a sense of [emphasis/obsession/universality], which reinforces...',
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Poetry analysis (all boards)",
      "Literature essay analysis",
    ],
  },
  {
    name: "Juxtaposition (Structural)",
    category: "Additional Structural Techniques",
    definition:
      "Placing contrasting ideas, images, characters, or sections side by side in a text so that the differences between them are highlighted.",
    example:
      "In A Christmas Carol, Dickens juxtaposes Scrooge's cold, lonely life with the Cratchits' warm, loving Christmas, despite their poverty.",
    exampleSource: "Charles Dickens, A Christmas Carol",
    effect:
      "Highlights contrast and invites comparison. The reader is forced to see the difference between two things, which can provoke thought, sympathy, or outrage.",
    howToIdentify:
      "Look for contrasting elements placed close together -- characters, settings, moods, ideas, or images. Ask: 'What is the writer contrasting and why?'",
    sentenceStarter:
      "The juxtaposition of [A] with [B] highlights the contrast between [X] and [Y], which forces the reader to consider...",
    relevantQuestions: [
      "Structure questions (AQA Q3)",
      "Literature essay analysis",
      "Comparison questions",
    ],
  },
];

/* ─── Categories ─────────────────────────────────────────────── */

const CATEGORIES = Array.from(
  new Set(TECHNIQUES.map((t) => t.category))
);

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/* ─── Category colours ───────────────────────────────────────── */

const CATEGORY_COLOURS: Record<string, string> = {
  "Sentence Types": "bg-primary-50 text-primary-700 border-primary-200",
  "Paragraph Techniques": "bg-accent-50 text-accent-700 border-accent-200",
  "Narrative Structures": "bg-success-50 text-success-700 border-success-200",
  "Text Structures": "bg-primary-100 text-primary-800 border-primary-300",
  "Poetry Form": "bg-accent-100 text-accent-800 border-accent-300",
  "Dramatic Structure": "bg-warn-50 text-warn-700 border-warn-200",
  "Opening Techniques": "bg-success-100 text-success-800 border-success-300",
  "Ending Techniques": "bg-primary-50 text-primary-700 border-primary-200",
  "Additional Structural Techniques": "bg-muted text-muted-foreground border-border",
};

/* ─── Icons ──────────────────────────────────────────────────── */

function SearchIcon() {
  return (
    <svg
      className="h-5 w-5 text-muted-foreground"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

/* ─── Technique Card ─────────────────────────────────────────── */

function TechniqueCard({ t }: { t: Technique }) {
  const [open, setOpen] = useState(false);
  const catColour = CATEGORY_COLOURS[t.category] ?? "bg-muted text-muted-foreground border-border";

  return (
    <div className="rounded-xl border border-border bg-card shadow-md transition hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-bold text-foreground sm:text-lg">
              {t.name}
            </h3>
            {t.aka && (
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                aka {t.aka}
              </span>
            )}
            <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${catColour}`}>
              {t.category}
            </span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {t.definition}
          </p>
        </div>
        <ChevronDown open={open} />
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-6 pt-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Example */}
            <div className="rounded-lg bg-accent-50 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-700">
                Example
              </h4>
              <p className="mt-2 text-sm italic leading-relaxed text-foreground">
                {t.example}
              </p>
              {t.exampleSource && (
                <p className="mt-1 text-xs text-muted-foreground">
                  -- {t.exampleSource}
                </p>
              )}
            </div>

            {/* Effect on reader */}
            <div className="rounded-lg bg-primary-50 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary-700">
                Effect on the reader
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {t.effect}
              </p>
            </div>

            {/* How to identify */}
            <div className="rounded-lg bg-muted p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                How to identify it
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.howToIdentify}
              </p>
            </div>

            {/* Sentence starter */}
            <div className="rounded-lg bg-success-50 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-success-700">
                Exam sentence starter
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {t.sentenceStarter}
              </p>
            </div>
          </div>

          {/* Relevant questions */}
          <div className="mt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Most relevant to
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.relevantQuestions.map((q) => (
                <span
                  key={q}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Page component ─────────────────────────────────────────── */

export default function StructuralDevicesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = TECHNIQUES;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          (t.aka && t.aka.toLowerCase().includes(q))
      );
    }

    if (activeCategory) {
      list = list.filter((t) => t.category === activeCategory);
    }

    if (activeLetter) {
      list = list.filter((t) =>
        t.name.toUpperCase().startsWith(activeLetter!)
      );
    }

    return list;
  }, [search, activeCategory, activeLetter]);

  const availableLetters = useMemo(
    () => new Set(TECHNIQUES.map((t) => t.name[0].toUpperCase())),
    []
  );

  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-14 text-white sm:py-18">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="text-sm text-white/70">
            <Link href="/resources/techniques" className="hover:text-white transition-colors">
              Techniques
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Structural Devices</span>
          </nav>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Structural &amp; Form Devices
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {TECHNIQUES.length} essential structural and form techniques across{" "}
            {CATEGORIES.length} categories. Understand how writers organise
            texts, use sentence types, employ poetic form, and craft openings
            and endings for effect.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Search bar */}
        <div className="relative mx-auto max-w-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <SearchIcon />
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveCategory(null);
              setActiveLetter(null);
            }}
            placeholder="Search techniques (e.g. enjambment, cliffhanger, opening)..."
            className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-md placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Alphabet filter */}
        <div className="mt-6 flex flex-wrap justify-center gap-1">
          <button
            onClick={() => setActiveLetter(null)}
            className={`rounded-md px-2.5 py-1 text-xs font-bold transition ${
              activeLetter === null
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>
          {ALPHABET.map((letter) => {
            const available = availableLetters.has(letter);
            return (
              <button
                key={letter}
                onClick={() =>
                  available &&
                  setActiveLetter(activeLetter === letter ? null : letter)
                }
                disabled={!available}
                className={`rounded-md px-2.5 py-1 text-xs font-bold transition ${
                  activeLetter === letter
                    ? "bg-primary text-white"
                    : available
                    ? "bg-muted text-muted-foreground hover:bg-muted/80"
                    : "bg-muted/50 text-muted-foreground/50 cursor-not-allowed"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Category filter */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              activeCategory === null
                ? "bg-accent text-white"
                : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
            }`}
          >
            All categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Showing {filtered.length} of {TECHNIQUES.length} techniques
          {activeCategory && <> in <strong>{activeCategory}</strong></>}
          {activeLetter && <> starting with <strong>{activeLetter}</strong></>}
          {search.trim() && <> matching &ldquo;{search.trim()}&rdquo;</>}
        </p>

        {/* Cards */}
        <div className="mt-8 space-y-4">
          {filtered.length > 0 ? (
            filtered.map((t) => <TechniqueCard key={t.name} t={t} />)
          ) : (
            <div className="rounded-xl border border-dashed border-border py-16 text-center">
              <p className="text-muted-foreground">
                No techniques match your search. Try a different term or clear
                your filters.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory(null);
                  setActiveLetter(null);
                }}
                className="mt-4 text-sm font-semibold text-accent hover:text-primary transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Cross-link */}
        <div className="mt-12 rounded-xl border-2 border-accent/20 bg-accent-50 p-6 text-center sm:p-8">
          <h2 className="text-lg font-bold text-foreground">
            Looking for language devices?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Browse 45+ language and literary techniques including metaphor,
            irony, imagery, sound devices, and more.
          </p>
          <Link
            href="/resources/techniques/language-devices"
            className="btn-accent mt-4 inline-flex rounded-lg px-6 py-2.5 text-sm font-semibold"
          >
            View Language Devices
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  );
}
