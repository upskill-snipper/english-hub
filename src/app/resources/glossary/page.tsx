"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Types ──────────────────────────────────────────────────── */

type GlossaryCategory =
  | "Literary Devices"
  | "Poetic Terms"
  | "Dramatic Terms"
  | "Narrative Terms"
  | "Language Analysis Terms"
  | "Grammar Terms";

interface GlossaryTerm {
  term: string;
  definition: string;
  example: string;
  category: GlossaryCategory;
}

/* ─── Glossary Data ──────────────────────────────────────────── */

const GLOSSARY_TERMS: GlossaryTerm[] = [
  // ── Literary Devices ────────────────────────────────────────
  { term: "Metaphor", definition: "A figure of speech that describes something as if it literally is something else, creating a direct comparison without using 'like' or 'as'.", example: "\"Life is a journey\" -- life is compared directly to a journey.", category: "Literary Devices" },
  { term: "Extended Metaphor", definition: "A metaphor that is developed and sustained over several lines, sentences, or even an entire text, building a deeper comparison.", example: "Shakespeare's \"All the world's a stage, and all the men and women merely players\" extends the theatre metaphor across multiple lines.", category: "Literary Devices" },
  { term: "Simile", definition: "A comparison between two things using 'like' or 'as' to highlight a shared quality.", example: "\"Her smile was like sunshine\" -- the smile is compared to sunshine using 'like'.", category: "Literary Devices" },
  { term: "Personification", definition: "Giving human qualities, emotions, or actions to non-human things such as objects, animals, or abstract ideas.", example: "\"The wind whispered through the trees\" -- the wind is given the human ability to whisper.", category: "Literary Devices" },
  { term: "Pathetic Fallacy", definition: "A type of personification where weather or the natural environment reflects or mirrors a character's mood or the atmosphere of a scene.", example: "A storm raging during a character's emotional breakdown; grey skies reflecting sadness.", category: "Literary Devices" },
  { term: "Hyperbole", definition: "Deliberate and obvious exaggeration used for emphasis, humour, or dramatic effect. Not intended to be taken literally.", example: "\"I've told you a million times\" -- exaggeration for emphasis.", category: "Literary Devices" },
  { term: "Irony", definition: "A contrast between what is expected and what actually happens (situational), what is said and what is meant (verbal), or what the audience knows and what a character knows (dramatic).", example: "A fire station burning down is an example of situational irony.", category: "Literary Devices" },
  { term: "Juxtaposition", definition: "Placing two contrasting ideas, images, or concepts side by side to highlight their differences or create tension.", example: "\"It was the best of times, it was the worst of times\" -- Dickens places opposites together.", category: "Literary Devices" },
  { term: "Oxymoron", definition: "A figure of speech that combines two contradictory terms in a single phrase for effect.", example: "\"Deafening silence\" -- 'deafening' and 'silence' contradict each other.", category: "Literary Devices" },
  { term: "Symbolism", definition: "The use of an object, person, colour, or situation to represent a deeper meaning or abstract idea beyond its literal sense.", example: "A dove symbolising peace; a red rose symbolising love; light symbolising hope.", category: "Literary Devices" },
  { term: "Allegory", definition: "A story, poem, or image that can be interpreted to reveal a hidden moral, political, or spiritual meaning beneath the surface narrative.", example: "George Orwell's Animal Farm is an allegory for the Russian Revolution.", category: "Literary Devices" },
  { term: "Allusion", definition: "An indirect reference to a well-known person, event, text, or work of art, relying on the reader's knowledge to add layers of meaning.", example: "\"He was a real Romeo\" -- allusion to Shakespeare's character.", category: "Literary Devices" },
  { term: "Euphemism", definition: "A mild or indirect expression used to replace one that is considered too harsh, blunt, or offensive.", example: "\"Passed away\" instead of \"died\"; \"let go\" instead of \"fired\".", category: "Literary Devices" },
  { term: "Foreshadowing", definition: "A literary device in which hints or clues are given about what will happen later in the narrative, building suspense and anticipation.", example: "\"Little did she know, this would be the last time she saw the house\" -- hints at future events.", category: "Literary Devices" },
  { term: "Motif", definition: "A recurring element -- such as an image, symbol, phrase, or idea -- that runs through a text and contributes to its themes.", example: "Blood as a recurring motif in Macbeth, representing guilt.", category: "Literary Devices" },
  { term: "Paradox", definition: "A statement that appears to contradict itself but may reveal a deeper truth upon reflection.", example: "\"I must be cruel to be kind\" -- cruelty and kindness seem opposed but together reveal a truth.", category: "Literary Devices" },

  // ── Poetic Terms ────────────────────────────────────────────
  { term: "Alliteration", definition: "The repetition of the same consonant sound at the beginning of nearby words, used to create rhythm, emphasis, or a particular mood.", example: "\"Peter Piper picked a peck of pickled peppers\" -- the 'p' sound is repeated.", category: "Poetic Terms" },
  { term: "Sibilance", definition: "The repetition of 's', 'sh', 'z', or soft 'c' sounds, often creating a hissing, sinister, soothing, or whispering effect.", example: "\"The snake slithered silently\" -- repeated 's' sounds mimic the snake.", category: "Poetic Terms" },
  { term: "Assonance", definition: "The repetition of vowel sounds within nearby words to create internal rhyming or a musical quality.", example: "\"The rain in Spain stays mainly in the plain\" -- repeated 'ai' vowel sound.", category: "Poetic Terms" },
  { term: "Consonance", definition: "The repetition of consonant sounds within or at the end of nearby words (distinct from alliteration, which occurs at the start).", example: "\"Pitter patter\" -- the 't' and 'r' sounds recur within and at the end of words.", category: "Poetic Terms" },
  { term: "Onomatopoeia", definition: "Words that imitate or suggest the sound they describe, creating a sensory, auditory effect.", example: "\"Buzz\", \"crash\", \"sizzle\", \"whisper\" -- each word sounds like what it describes.", category: "Poetic Terms" },
  { term: "Enjambment", definition: "The continuation of a sentence or phrase from one line of poetry to the next without a pause or punctuation at the end of the line.", example: "\"I think that I shall never see / A poem lovely as a tree\" -- the thought runs across the line break.", category: "Poetic Terms" },
  { term: "Caesura", definition: "A pause near the middle of a line of poetry, usually created by punctuation. It can disrupt rhythm, create emphasis, or signal a shift in thought.", example: "\"To be, or not to be -- that is the question\" -- the comma and dash create pauses.", category: "Poetic Terms" },
  { term: "End-stopped Line", definition: "A line of poetry that ends with a natural pause, usually marked by punctuation such as a full stop, comma, or semicolon.", example: "\"Shall I compare thee to a summer's day?\" -- the question mark ends the line.", category: "Poetic Terms" },
  { term: "Stanza", definition: "A grouped set of lines within a poem, separated from other groups by a space. Stanzas function like paragraphs in prose.", example: "A sonnet has three quatrains (4-line stanzas) and a final couplet.", category: "Poetic Terms" },
  { term: "Couplet", definition: "A pair of successive rhyming lines, usually of the same length. Often used at the end of a sonnet for a concluding statement.", example: "\"So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee.\"", category: "Poetic Terms" },
  { term: "Volta", definition: "A turn or shift in thought, argument, or emotion in a poem. Often found between the octave and sestet of a Petrarchan sonnet, or before the final couplet of a Shakespearean sonnet.", example: "The shift from problem to resolution at line 9 of a Petrarchan sonnet.", category: "Poetic Terms" },
  { term: "Rhyme Scheme", definition: "The ordered pattern of rhymes at the ends of lines of a poem, usually represented by letters (e.g. ABAB, AABB, ABBA).", example: "ABAB CDCD EFEF GG is the rhyme scheme of a Shakespearean sonnet.", category: "Poetic Terms" },
  { term: "Free Verse", definition: "Poetry that does not follow a regular rhyme scheme or metrical pattern, giving the poet freedom in rhythm and structure.", example: "Many modern poems by Carol Ann Duffy and Simon Armitage use free verse.", category: "Poetic Terms" },
  { term: "Iambic Pentameter", definition: "A line of verse with five metrical feet, each consisting of an unstressed syllable followed by a stressed syllable (da-DUM). Common in Shakespeare.", example: "\"Shall I compare thee to a summer's day?\" -- da-DUM da-DUM da-DUM da-DUM da-DUM.", category: "Poetic Terms" },
  { term: "Sonnet", definition: "A 14-line poem, usually written in iambic pentameter. The two main types are Petrarchan (8+6 lines) and Shakespearean (3 quatrains + couplet).", example: "Shakespeare's Sonnet 18 (\"Shall I compare thee to a summer's day?\").", category: "Poetic Terms" },
  { term: "Dramatic Monologue", definition: "A poem in which a single character speaks to a silent listener, revealing their personality, motives, and perspective. The speaker is not the poet.", example: "Robert Browning's \"My Last Duchess\" -- the Duke speaks to an envoy.", category: "Poetic Terms" },
  { term: "Ballad", definition: "A narrative poem or song that tells a story, traditionally using a regular metre and rhyme scheme, often with a refrain.", example: "\"The Rime of the Ancient Mariner\" by Coleridge is a literary ballad.", category: "Poetic Terms" },

  // ── Dramatic Terms ──────────────────────────────────────────
  { term: "Soliloquy", definition: "A speech in a play in which a character speaks their thoughts aloud while alone on stage, allowing the audience direct access to their inner mind.", example: "Macbeth's \"Is this a dagger which I see before me\" soliloquy.", category: "Dramatic Terms" },
  { term: "Aside", definition: "A short remark made by a character to the audience that other characters on stage cannot hear, often revealing hidden thoughts or creating dramatic irony.", example: "In a pantomime, a villain might turn to the audience and reveal their evil plan.", category: "Dramatic Terms" },
  { term: "Dramatic Irony", definition: "When the audience knows something that one or more characters do not, creating tension, suspense, or humour.", example: "In Romeo and Juliet, the audience knows Juliet is alive while Romeo believes she is dead.", category: "Dramatic Terms" },
  { term: "Stage Directions", definition: "Instructions in a play script that indicate movement, positioning, lighting, sound effects, or how lines should be delivered.", example: "\"[Enter LADY MACBETH, sleepwalking, carrying a candle]\".", category: "Dramatic Terms" },
  { term: "Prologue", definition: "An introductory section at the beginning of a play (or novel) that establishes the setting, context, or backstory before the main action begins.", example: "The Chorus's prologue in Romeo and Juliet reveals the lovers will die.", category: "Dramatic Terms" },
  { term: "Epilogue", definition: "A concluding section at the end of a play or novel that comments on or summarises the events, sometimes addressing the audience directly.", example: "Prospero's epilogue in The Tempest asks the audience for their applause.", category: "Dramatic Terms" },
  { term: "Tragedy", definition: "A form of drama in which the protagonist -- usually a noble or admirable figure -- is brought to ruin or suffering through a combination of fate, character flaws, and circumstances.", example: "Shakespeare's Macbeth and Othello are classic tragedies.", category: "Dramatic Terms" },
  { term: "Tragic Flaw (Hamartia)", definition: "A character trait or error in judgement that leads to the downfall of a tragic hero. Often identified as hubris (excessive pride).", example: "Macbeth's 'vaulting ambition' is his tragic flaw.", category: "Dramatic Terms" },
  { term: "Catharsis", definition: "The emotional release or purging experienced by the audience at the end of a tragedy, typically through feelings of pity and fear.", example: "The audience's emotional response to the deaths at the end of Romeo and Juliet.", category: "Dramatic Terms" },
  { term: "Chorus", definition: "In classical drama, a group of performers who comment on the action. In modern usage, a single narrator figure who addresses the audience directly.", example: "The Chorus in An Inspector Calls (the Inspector's final speech functions similarly).", category: "Dramatic Terms" },
  { term: "Monologue", definition: "A long speech by one character, addressed to other characters on stage (as distinct from a soliloquy, which is spoken alone).", example: "The Inspector's final speech in An Inspector Calls is a monologue.", category: "Dramatic Terms" },
  { term: "Hubris", definition: "Excessive pride or arrogance, often leading to the downfall of a character in tragedy. A specific form of hamartia.", example: "Macbeth's belief that he is invincible after hearing the witches' prophecies.", category: "Dramatic Terms" },

  // ── Narrative Terms ─────────────────────────────────────────
  { term: "First-Person Narrator", definition: "A story told from the perspective of a character within the narrative, using 'I' or 'we'. The reader sees events through this character's eyes.", example: "\"I could not sleep that night\" -- the narrator is a character in the story.", category: "Narrative Terms" },
  { term: "Third-Person Narrator", definition: "A story told by an external voice using 'he', 'she', or 'they'. Can be omniscient (all-knowing) or limited (restricted to one character's perspective).", example: "\"She walked into the room and noticed the silence\" -- an external narrator reports.", category: "Narrative Terms" },
  { term: "Omniscient Narrator", definition: "An all-knowing narrator who can access the thoughts, feelings, and experiences of all characters in the story.", example: "Dickens frequently uses omniscient narration in A Christmas Carol.", category: "Narrative Terms" },
  { term: "Unreliable Narrator", definition: "A narrator whose account of events cannot be fully trusted, whether due to bias, limited knowledge, immaturity, or deliberate deception.", example: "The narrator in The Catcher in the Rye, Holden Caulfield, is considered unreliable.", category: "Narrative Terms" },
  { term: "Flashback", definition: "A narrative technique in which the story shifts to an earlier point in time, interrupting the chronological flow to provide backstory or context.", example: "A character remembering their childhood during a present-day scene.", category: "Narrative Terms" },
  { term: "In Medias Res", definition: "A narrative technique that begins the story in the middle of the action, rather than at the beginning, to create immediate engagement.", example: "A novel opening with a character already mid-crisis, then explaining how they got there.", category: "Narrative Terms" },
  { term: "Cyclical Structure", definition: "A narrative structure in which the ending mirrors or returns to the beginning, creating a sense of completeness, inevitability, or entrapment.", example: "A Christmas Carol begins and ends at Scrooge's counting-house.", category: "Narrative Terms" },
  { term: "Linear Narrative", definition: "A story told in chronological order, from beginning to middle to end, following the natural sequence of events.", example: "Most fairy tales follow a linear narrative structure.", category: "Narrative Terms" },
  { term: "Non-linear Narrative", definition: "A story told out of chronological order, using techniques like flashbacks, flash-forwards, or fragmented timelines.", example: "A story that alternates between past and present chapters.", category: "Narrative Terms" },
  { term: "Exposition", definition: "The part of a narrative (usually the beginning) that introduces essential background information -- characters, setting, situation -- before the main action begins.", example: "The opening chapters of a novel that establish who the characters are and where they live.", category: "Narrative Terms" },
  { term: "Climax", definition: "The point of greatest tension or dramatic intensity in a narrative, where the central conflict reaches its peak.", example: "The moment when the Inspector reveals Eva Smith's true identity.", category: "Narrative Terms" },
  { term: "Denouement", definition: "The final part of a narrative in which the strands of the plot are drawn together and matters are resolved or explained.", example: "The final chapter that reveals what happened to each character after the main events.", category: "Narrative Terms" },
  { term: "Bildungsroman", definition: "A novel that follows the moral and psychological growth of a protagonist from youth to adulthood.", example: "Jane Eyre by Charlotte Bronte is a classic bildungsroman.", category: "Narrative Terms" },

  // ── Language Analysis Terms ─────────────────────────────────
  { term: "Semantic Field", definition: "A group of words that relate to the same topic or theme, used together in a text to reinforce a particular idea or atmosphere.", example: "Words like 'battle', 'armour', 'defeat', and 'victory' create a semantic field of war.", category: "Language Analysis Terms" },
  { term: "Connotation", definition: "The associations, feelings, or ideas that a word suggests beyond its literal (denotative) meaning.", example: "\"Snake\" literally means a reptile, but connotes deceit, danger, or evil.", category: "Language Analysis Terms" },
  { term: "Denotation", definition: "The literal, dictionary definition of a word, without any associated feelings or secondary meanings.", example: "The denotation of \"home\" is simply a place where one lives.", category: "Language Analysis Terms" },
  { term: "Tone", definition: "The overall attitude or mood conveyed by a writer's choice of words and style. Tone can be formal, informal, angry, mocking, reflective, etc.", example: "A sarcastic tone: \"Oh, what a wonderful idea that turned out to be.\"", category: "Language Analysis Terms" },
  { term: "Register", definition: "The level of formality in language, determined by the context, audience, and purpose. Ranges from formal to informal.", example: "An academic essay uses a formal register; a text message uses an informal register.", category: "Language Analysis Terms" },
  { term: "Emotive Language", definition: "Words and phrases deliberately chosen to provoke an emotional response in the reader, often used in persuasive or argumentative writing.", example: "\"Innocent children are suffering\" -- 'innocent' and 'suffering' are emotive.", category: "Language Analysis Terms" },
  { term: "Rhetorical Question", definition: "A question asked for persuasive effect rather than to receive an answer. It encourages the reader to agree with the implied point.", example: "\"How can we stand by and do nothing?\" -- the expected answer is 'we can't'.", category: "Language Analysis Terms" },
  { term: "Anaphora", definition: "The deliberate repetition of a word or phrase at the beginning of successive clauses or sentences for emphasis and rhetorical effect.", example: "\"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.\"", category: "Language Analysis Terms" },
  { term: "Tricolon (Rule of Three)", definition: "A rhetorical device using a series of three parallel words, phrases, or clauses for emphasis and completeness.", example: "\"Government of the people, by the people, for the people.\"", category: "Language Analysis Terms" },
  { term: "Antithesis", definition: "The placing of contrasting ideas in balanced phrases or clauses to create emphasis through opposition.", example: "\"It was the best of times, it was the worst of times.\"", category: "Language Analysis Terms" },
  { term: "Imperative", definition: "A command or instruction, using the base form of the verb. Creates a direct, authoritative tone.", example: "\"Stop what you are doing\", \"Consider the consequences\" -- both are imperative sentences.", category: "Language Analysis Terms" },
  { term: "Modal Verb", definition: "A verb that expresses possibility, obligation, or certainty (e.g. could, should, must, might, will). Used to convey degrees of confidence.", example: "\"We must act now\" (obligation) vs. \"We could act now\" (possibility).", category: "Language Analysis Terms" },
  { term: "Declarative Sentence", definition: "A sentence that makes a statement or expresses an opinion. The most common sentence type, used to convey information directly.", example: "\"The experiment was a success\" -- a straightforward statement of fact.", category: "Language Analysis Terms" },
  { term: "Exclamatory Sentence", definition: "A sentence that expresses strong emotion or surprise, ending with an exclamation mark.", example: "\"What a disaster this has been!\" -- conveys shock or frustration.", category: "Language Analysis Terms" },
  { term: "Interrogative Sentence", definition: "A sentence that asks a question. In persuasive writing, interrogatives can engage the reader or challenge assumptions.", example: "\"Do you really believe that is acceptable?\" -- challenges the reader.", category: "Language Analysis Terms" },

  // ── Grammar Terms ───────────────────────────────────────────
  { term: "Noun", definition: "A word that names a person, place, thing, or idea. Types include common, proper, abstract, and collective nouns.", example: "\"The city was beautiful\" -- 'city' is a common noun; 'London' would be a proper noun.", category: "Grammar Terms" },
  { term: "Abstract Noun", definition: "A noun that refers to an idea, quality, or state rather than a physical object. Often used in literature to express themes.", example: "\"Love\", \"freedom\", \"justice\", \"guilt\" -- all are abstract nouns.", category: "Grammar Terms" },
  { term: "Verb", definition: "A word that describes an action, occurrence, or state of being. Verbs can be dynamic (action) or stative (state).", example: "\"She ran quickly\" -- 'ran' is a dynamic verb. \"He seemed tired\" -- 'seemed' is a stative verb.", category: "Grammar Terms" },
  { term: "Adjective", definition: "A word that describes or modifies a noun, giving more detail about its qualities, size, colour, or character.", example: "\"The dark, narrow corridor\" -- 'dark' and 'narrow' are adjectives modifying 'corridor'.", category: "Grammar Terms" },
  { term: "Adverb", definition: "A word that modifies a verb, adjective, or another adverb, often indicating how, when, where, or to what degree something happens.", example: "\"She spoke quietly\" -- 'quietly' modifies how she spoke.", category: "Grammar Terms" },
  { term: "Pronoun", definition: "A word used in place of a noun to avoid repetition. Types include personal (I, he), possessive (my, their), and relative (who, which).", example: "\"Sarah said she would come\" -- 'she' replaces 'Sarah'.", category: "Grammar Terms" },
  { term: "Conjunction", definition: "A word that connects clauses, sentences, or words. Coordinating (and, but, or), subordinating (because, although, when), and correlative (either...or).", example: "\"He was tired but he kept going\" -- 'but' is a coordinating conjunction.", category: "Grammar Terms" },
  { term: "Preposition", definition: "A word that shows the relationship between a noun (or pronoun) and other words in a sentence, often indicating position, direction, or time.", example: "\"The book is on the table\" -- 'on' indicates position.", category: "Grammar Terms" },
  { term: "Determiner", definition: "A word that introduces a noun and identifies it in terms of quantity, possession, or specificity (e.g. the, a, this, my, some).", example: "\"The dog\" (definite), \"a dog\" (indefinite), \"my dog\" (possessive).", category: "Grammar Terms" },
  { term: "Clause", definition: "A group of words containing a subject and a verb. Main (independent) clauses can stand alone; subordinate (dependent) clauses cannot.", example: "\"Although it rained [subordinate], we went outside [main].\"", category: "Grammar Terms" },
  { term: "Simple Sentence", definition: "A sentence containing a single main clause with one subject and one verb. Often used for emphasis, clarity, or impact.", example: "\"She stopped.\" -- a single clause creating a dramatic, abrupt effect.", category: "Grammar Terms" },
  { term: "Compound Sentence", definition: "A sentence made up of two or more main clauses joined by a coordinating conjunction (and, but, or, so) or a semicolon.", example: "\"The sun set and the stars appeared\" -- two main clauses joined by 'and'.", category: "Grammar Terms" },
  { term: "Complex Sentence", definition: "A sentence containing one main clause and one or more subordinate clauses, allowing for more detailed and nuanced expression.", example: "\"Although she was nervous, she delivered the speech confidently.\"", category: "Grammar Terms" },
  { term: "Active Voice", definition: "A sentence construction in which the subject performs the action of the verb. Creates a direct, clear, and dynamic tone.", example: "\"The dog chased the cat\" -- the subject (dog) performs the action.", category: "Grammar Terms" },
  { term: "Passive Voice", definition: "A sentence construction in which the subject receives the action of the verb. Can create a sense of detachment, formality, or evasion of responsibility.", example: "\"Mistakes were made\" -- the subject is receiving the action; who made the mistakes is unclear.", category: "Grammar Terms" },
];

const CATEGORIES: GlossaryCategory[] = [
  "Literary Devices",
  "Poetic Terms",
  "Dramatic Terms",
  "Narrative Terms",
  "Language Analysis Terms",
  "Grammar Terms",
];

const CATEGORY_COLOURS: Record<GlossaryCategory, { border: string; bg: string; text: string; pill: string }> = {
  "Literary Devices": { border: "border-[#1A5276]", bg: "bg-[#1A5276]/5", text: "text-foreground", pill: "bg-[#1A5276]/10 text-foreground" },
  "Poetic Terms": { border: "border-[#2E86C1]", bg: "bg-primary/5", text: "text-primary", pill: "bg-primary/10 text-primary" },
  "Dramatic Terms": { border: "border-[#8E44AD]", bg: "bg-[#8E44AD]/5", text: "text-[#8E44AD]", pill: "bg-[#8E44AD]/10 text-[#8E44AD]" },
  "Narrative Terms": { border: "border-[#27AE60]", bg: "bg-[#27AE60]/5", text: "text-[#27AE60]", pill: "bg-[#27AE60]/10 text-[#27AE60]" },
  "Language Analysis Terms": { border: "border-[#E67E22]", bg: "bg-[#E67E22]/5", text: "text-[#E67E22]", pill: "bg-[#E67E22]/10 text-[#E67E22]" },
  "Grammar Terms": { border: "border-[#E74C3C]", bg: "bg-[#E74C3C]/5", text: "text-[#E74C3C]", pill: "bg-[#E74C3C]/10 text-[#E74C3C]" },
};

const CATEGORY_ICONS: Record<GlossaryCategory, React.ReactNode> = {
  "Literary Devices": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  "Poetic Terms": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
    </svg>
  ),
  "Dramatic Terms": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
  ),
  "Narrative Terms": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
  ),
  "Language Analysis Terms": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
  "Grammar Terms": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
    </svg>
  ),
};

/* ─── Arrow icon ─────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ─── Term Card ──────────────────────────────────────────────── */

function TermCard({
  term,
  isExpanded,
  onToggle,
}: {
  term: GlossaryTerm;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const colours = CATEGORY_COLOURS[term.category];

  return (
    <div
      className={`rounded-xl border bg-card shadow-md transition-all hover:shadow-md ${
        isExpanded ? `border-2 ${colours.border}` : "border-border hover:border-[#2E86C1]/40"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-2 p-4 text-left"
        aria-expanded={isExpanded}
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-foreground">{term.term}</h3>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${colours.pill}`}>
              {term.category.replace(" Terms", "")}
            </span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {term.definition}
          </p>
        </div>
        <svg
          className={`mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isExpanded && (
        <div className="border-t border-border px-4 pb-4 pt-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {term.definition}
          </p>
          <div className="mt-3 rounded-lg bg-muted p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Example
            </p>
            <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">
              {term.example}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | "all">("all");
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((t) => {
      const matchesSearch =
        search.trim() === "" ||
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase()) ||
        t.example.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || t.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const groupedTerms = useMemo(() => {
    const map = new Map<GlossaryCategory, GlossaryTerm[]>();
    for (const term of filteredTerms) {
      if (!map.has(term.category)) map.set(term.category, []);
      map.get(term.category)!.push(term);
    }
    return map;
  }, [filteredTerms]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of CATEGORIES) {
      counts[cat] = GLOSSARY_TERMS.filter((t) => t.category === cat).length;
    }
    return counts;
  }, []);

  return (
    <>

      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] via-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Reference
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Literature &amp; Language Glossary
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {GLOSSARY_TERMS.length}+ essential terms for GCSE English, organised
            by category. Every definition includes a clear example to help you
            remember and apply each term in your exams.
          </p>

          {/* Search bar */}
          <div className="mx-auto mt-8 max-w-lg">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search terms... e.g. metaphor, enjambment, noun"
                className="w-full rounded-xl border-0 bg-card/95 py-3.5 pl-11 pr-4 text-sm text-foreground shadow-lg placeholder:text-muted-foreground focus:bg-card focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span>{GLOSSARY_TERMS.length} terms</span>
            <span className="text-white/30">|</span>
            <span>{CATEGORIES.length} categories</span>
            <span className="text-white/30">|</span>
            <span>Definitions + examples</span>
          </div>
        </div>
      </section>

      {/* ── Category Filter Pills ──────────────────────────────── */}
      <section className="border-b border-border bg-card px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              activeCategory === "all"
                ? "bg-[#1A5276] text-white"
                : "bg-gray-100 text-muted-foreground hover:bg-[#1A5276]/10 hover:text-foreground"
            }`}
          >
            All ({GLOSSARY_TERMS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? "all" : cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-[#1A5276] text-white"
                  : "bg-gray-100 text-muted-foreground hover:bg-[#1A5276]/10 hover:text-foreground"
              }`}
            >
              {cat} ({categoryCounts[cat]})
            </button>
          ))}
        </div>
      </section>

      {/* ── Category Overview Cards ────────────────────────────── */}
      {activeCategory === "all" && search.trim() === "" && (
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Browse by Category
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Click a category to filter the glossary, or scroll down to browse
            all terms alphabetically within each section.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const colours = CATEGORY_COLOURS[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`group flex items-start gap-3 rounded-xl border-2 ${colours.border} ${colours.bg} p-5 text-left transition hover:shadow-md`}
                >
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${colours.pill}`}>
                    {CATEGORY_ICONS[cat]}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{cat}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {categoryCounts[cat]} terms
                    </p>
                  </div>
                  <span className="ml-auto self-center">
                    <ArrowRight />
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Glossary Terms ─────────────────────────────────────── */}
      <section className="bg-muted px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredTerms.length}
              </span>{" "}
              {filteredTerms.length === 1 ? "term" : "terms"}
              {(activeCategory !== "all" || search.trim() !== "") && (
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearch("");
                  }}
                  className="ml-2 text-xs font-medium text-primary hover:underline"
                >
                  Clear filters
                </button>
              )}
            </p>
          </div>

          {/* Grouped terms display */}
          {activeCategory === "all" ? (
            <div className="space-y-10">
              {CATEGORIES.map((cat) => {
                const terms = groupedTerms.get(cat);
                if (!terms || terms.length === 0) return null;
                const colours = CATEGORY_COLOURS[cat];
                return (
                  <div key={cat} id={cat.toLowerCase().replace(/\s+/g, "-")}>
                    <div className="mb-4 flex items-center gap-2">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${colours.pill}`}>
                        {CATEGORY_ICONS[cat]}
                      </div>
                      <h2 className="text-lg font-bold text-foreground">{cat}</h2>
                      <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        {terms.length}
                      </span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {terms.map((t) => (
                        <TermCard
                          key={t.term}
                          term={t}
                          isExpanded={expandedTerm === t.term}
                          onToggle={() =>
                            setExpandedTerm(expandedTerm === t.term ? null : t.term)
                          }
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTerms.map((t) => (
                <TermCard
                  key={t.term}
                  term={t}
                  isExpanded={expandedTerm === t.term}
                  onToggle={() =>
                    setExpandedTerm(expandedTerm === t.term ? null : t.term)
                  }
                />
              ))}
            </div>
          )}

          {/* No results */}
          {filteredTerms.length === 0 && (
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-300 bg-card py-16 text-center">
              <svg className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <p className="mt-4 text-sm font-medium text-foreground">
                No terms match your search
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try a different search term or{" "}
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("all");
                  }}
                  className="font-semibold text-primary underline"
                >
                  clear filters
                </button>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── How to Use This Glossary ───────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-foreground">
          How to Use This Glossary in Your Exams
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Knowing the terms is step one. Here is how to turn that knowledge
          into marks.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              heading: "Use precise terminology",
              body: "Say 'sibilance' not 'a sound technique'. Say 'pathetic fallacy' not 'the weather reflects mood'. Examiners reward specific, accurate terminology.",
            },
            {
              heading: "Define only when necessary",
              body: "In an exam, don't waste time defining a term unless asked. Instead, identify the technique, quote an example, and analyse its effect.",
            },
            {
              heading: "Link to effect and purpose",
              body: "Naming a technique earns limited marks. Explaining what effect it creates and why the writer used it is where top-band marks are awarded.",
            },
            {
              heading: "Use terms across subjects",
              body: "Many terms apply to both Language and Literature. Practise using the same terminology when analysing unseen extracts and set texts.",
            },
            {
              heading: "Build active vocabulary",
              body: "Don't just read the definitions -- practise writing sentences that use each term. The more you use them, the more naturally they will come in the exam.",
            },
            {
              heading: "Cross-reference categories",
              body: "Many texts use techniques from multiple categories simultaneously. Look for how literary devices, structural choices, and language analysis terms overlap.",
            },
          ].map((tip, i) => (
            <div
              key={tip.heading}
              className="rounded-xl border border-border bg-card p-6 shadow-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {tip.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tip.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Continue Exploring ─────────────────────────────────── */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            Continue exploring
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Techniques Reference",
                href: "/resources/techniques",
                desc: "60+ language and structural devices with examples and effects.",
              },
              {
                label: "Vocabulary Builder",
                href: "/resources/vocabulary",
                desc: "Upgrade your academic, descriptive, and analytical vocabulary.",
              },
              {
                label: "All Resources",
                href: "/resources",
                desc: "Browse everything by exam board and subject.",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-[#2E86C1]/40"
              >
                <h3 className="font-bold text-foreground transition-colors group-hover:text-foreground">
                  {link.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
