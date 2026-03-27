// @ts-nocheck
export interface WritingFramework {
  id: string;
  title: string;
  type: 'narrative' | 'descriptive' | 'persuasive' | 'analytical' | 'comparative';
  structure: string[];
  modelParagraph: string;
  checklist: Record<string, string[]>;
  commonMistakes: string[];
  gradeBooster: string[];
}

export interface ModelText {
  id: string;
  title: string;
  type: 'narrative' | 'descriptive' | 'persuasive' | 'analytical' | 'comparative';
  grade: 5 | 7 | 9;
  examBoard: string;
  text: string;
  annotations: Array<{
    quote: string;
    technique: string;
    effect: string;
  }>;
  prompt: string;
}

export interface VocabularyBank {
  id: string;
  theme: 'atmosphere' | 'character' | 'conflict' | 'emotion' | 'settings';
  words: Array<{
    word: string;
    definition: string;
    exampleSentence: string;
    synonyms: string[];
  }>;
}

export const writingFrameworks: WritingFramework[] = [
  {
    id: 'narrative-hero-journey',
    title: 'The Hero\'s Journey in Narrative',
    type: 'narrative',
    structure: [
      'Paragraph 1: Ordinary World - introduce protagonist in their normal life',
      'Paragraph 2: Call to Adventure - the inciting incident that disrupts normalcy',
      'Paragraph 3: Trials and Obstacles - escalating challenges and complications',
      'Paragraph 4: The Climax - the turning point where the hero faces their greatest challenge',
      'Paragraph 5: Resolution - consequences and character transformation'
    ],
    modelParagraph: 'Maya had always felt trapped by the grey walls of her apartment, working nights as a hospital cleaner, dreaming of something more. Then came the night when she found the old leather journal wedged behind the radiator—a captain\'s log from 1847, filled with descriptions of unexplored islands and sea creatures unknown to science. Her hands trembled as she traced the sketches, and in that moment, something awakened inside her. She knew, with absolute certainty, that she would find those islands or die trying. By dawn, she had already booked her first sailing lesson.',
    checklist: {
      'Opening': ['Hook the reader with vivid detail', 'Establish character and setting clearly', 'Hint at the conflict to come'],
      'Development': ['Show character reaction to events, not just tell', 'Build tension through dialogue and action', 'Include sensory details to immerse reader'],
      'Climax': ['Make the turning point inevitable but surprising', 'Show emotional and physical stakes', 'Avoid telling the reader how to feel'],
      'Ending': ['Demonstrate character change', 'Resolve major plot threads', 'Leave reader with lasting image or thought']
    },
    commonMistakes: [
      'Starting with "Once upon a time" or heavy exposition',
      'Using dialogue to explain plot instead of moving it forward',
      'Rushing the climax without building sufficient tension',
      'Ending abruptly without showing consequences',
      'Telling emotions instead of showing them through action'
    ],
    gradeBooster: [
      'Use foreshadowing to plant clues about the coming crisis early on',
      'Vary sentence length to control pacing—short, punchy sentences for action; longer for reflection',
      'Employ unreliable narration to surprise readers (narrator misunderstands events)',
      'Include internal monologue to reveal character complexity alongside external events',
      'End with a final image that symbolizes the character\'s transformation'
    ]
  },
  {
    id: 'descriptive-sensory-immersion',
    title: 'Sensory Immersion in Descriptive Writing',
    type: 'descriptive',
    structure: [
      'Paragraph 1: Visual anchor - establish the dominant image or scene',
      'Paragraph 2: Auditory landscape - layer in sounds and their significance',
      'Paragraph 3: Tactile and olfactory details - touch, temperature, smell that evoke emotion',
      'Paragraph 4: Taste and synesthetic connections - taste if appropriate; cross-sensory comparisons',
      'Paragraph 5: Synthesis - connect sensory details to reveal mood, theme, or significance'
    ],
    modelParagraph: 'The abandoned greenhouse exhaled decay. Through broken panes, afternoon light fell in knife-sharp shafts across rows of terracotta pots, now home only to rust and silence. The air tasted of copper and earth—that peculiar, metallic flavour of soil that hasn\'t seen rain in months—while beneath it lurked a sweeter rot, the ghost-smell of a thousand flowers returning to nothing. When I touched the metal bench frame, it sang with cold despite the March heat outside, and the corrosion flaked orange against my palm like evidence of a slow crime. Even the silence had texture here, thick as dust, pressing against my eardrums with an almost audible weight.',
    checklist: {
      'Visual Description': ['Use colour with purpose, not just beauty', 'Include scale and perspective', 'Describe light and shadow, not just objects'],
      'Sensory Variation': ['Include all five senses, but unequally', 'Avoid clichéd sensory descriptions', 'Use unexpected sense combinations'],
      'Emotional Layer': ['Ensure senses serve a bigger meaning', 'Connect details to theme or mood', 'Show why these details matter'],
      'Language Precision': ['Choose vivid verbs over vague adjectives', 'Use precise nouns before descriptive language', 'Employ metaphor and simile strategically']
    },
    commonMistakes: [
      'Listing sensory details like a shopping list without emotional resonance',
      'Using purple prose with too many adjectives stacked together',
      'Describing only what\'s beautiful; missing the ugly or mundane',
      'Forgetting that description should reveal something about the observer',
      'Over-explaining the significance of details instead of trusting the reader'
    ],
    gradeBooster: [
      'Use synaesthesia—describing one sense through another (e.g., "the music tasted bitter")',
      'Include sensory contradictions to create tension (soft yet threatening)',
      'Employ personification to give sensory life to inanimate objects',
      'Use negative space—describe what\'s missing or absent to create unease',
      'Layer multiple sense descriptions in single sentences for rich complexity'
    ]
  }
];

const framework3: WritingFramework = {
  id: 'persuasive-three-pillar',
  title: 'Three-Pillar Persuasive Argument',
  type: 'persuasive',
  structure: [
    'Paragraph 1: Hook and thesis - grab attention with compelling fact or question; state clear position',
    'Paragraph 2: Pillar One - first major argument with evidence and emotional appeal',
    'Paragraph 3: Pillar Two - second argument, counter-balanced or building on first',
    'Paragraph 4: Pillar Three - third compelling argument; strongest point last',
    'Paragraph 5: Counterargument acknowledgment and rebuttal; powerful conclusion'
  ],
  modelParagraph: 'Every year, schools worldwide ban thousands of books, yet the evidence overwhelmingly demonstrates that censorship harms rather than protects young readers. First, banned books often address real issues that adolescents face—poverty, identity, mental health—and denying access forces young people to navigate these experiences without guidance or vocabulary. Second, the act of banning inadvertently amplifies a book\'s cultural influence; restricted texts become forbidden fruit that readers seek out through illegal channels, often without the classroom context that teachers would provide. Finally, censorship assumes young people lack critical thinking skills, yet exposure to diverse viewpoints and challenging ideas is precisely what develops intellectual resilience. Rather than protecting readers, book bans underestimate their intelligence and rob them of literature\'s transformative power.',
  checklist: {
    'Hook': ['State a striking fact or question', 'Avoid clichés; make the reader care immediately', 'Signal your position without being aggressive'],
    'Each Pillar': ['Begin with topic sentence stating the argument clearly', 'Provide concrete evidence—statistics, examples, expert quotes', 'Explain why this evidence matters (the so-what)'],
    'Rebuttal': ['Acknowledge opposing view fairly', 'Explain why that view is insufficient or flawed', 'Show your argument addresses the concern better'],
    'Conclusion': ['Return to the hook with new understanding', 'State what\'s at stake; what should happen next', 'End with memorable, call-to-action statement']
  },
  commonMistakes: [
    'Using emotional manipulation instead of genuine emotional appeal',
    'Stating opinions as facts without supporting evidence',
    'Dismissing opposing views rather than engaging with them seriously',
    'Repeating the same argument in different words across pillars',
    'Making conclusion too lengthy; losing impact through over-explanation'
  ],
  gradeBooster: [
    'Use rhetorical questions to draw readers into your argument',
    'Include a counterargument within each pillar, then refute it',
    'Employ parallelism (repeated grammatical structure) for memorable phrases',
    'Use concrete examples and vivid stories alongside statistics',
    'Acknowledge audience concerns to build trust before making your case'
  ]
};

const framework4: WritingFramework = {
  id: 'analytical-theme-extraction',
  title: 'Theme Extraction and Analysis',
  type: 'analytical',
  structure: [
    'Paragraph 1: Introduce text, author, and the theme you\'re analyzing',
    'Paragraph 2: First textual evidence - quote with analysis of how it reveals the theme',
    'Paragraph 3: Second textual evidence - contrasting or developing the first',
    'Paragraph 4: Pattern analysis - explain how these examples create larger meaning',
    'Paragraph 5: Significance - why this theme matters; what the author is suggesting about human experience'
  ],
  modelParagraph: 'In "The Great Gatsby," Fitzgerald uses the green light as the central symbol of Gatsby\'s impossible dream and the broader American disillusionment of the 1920s. When Gatsby reaches toward the green light across the bay, he doesn\'t simply desire Daisy—he grasps for a past that cannot be recovered and a social position fundamentally unattainable for a man of his origins. The light\'s distance mirrors the gap between Gatsby\'s aspirations and his actual circumstances. As Nick observes that Gatsby "stretched out his arms," the gesture reveals how the American Dream encourages people to pursue fantasies rather than achievable goals. Fitzgerald thus suggests that ambition without self-awareness becomes destructive, and that the pursuit of impossible dreams leaves people isolated, forever reaching toward what perpetually recedes.',
  checklist: {
    'Introduction': ['Name the theme explicitly', 'Briefly identify the text and author', 'Indicate how you\'ll analyze this theme'],
    'Textual Evidence': ['Quote directly and accurately', 'Choose quotes that contain multiple layers of meaning', 'Avoid over-quoting; let your analysis carry the weight'],
    'Analysis': ['Explain what the evidence shows, not just what it says', 'Connect the quote to the larger theme', 'Avoid circular reasoning or restating the quote'],
    'Conclusion': ['Synthesize the evidence into a larger argument', 'Show why the theme matters beyond the text', 'Connect to historical context if relevant']
  },
  commonMistakes: [
    'Summarizing the text instead of analyzing the theme',
    'Quoting extensively without analysis',
    'Stating the obvious ("This shows the character is sad")',
    'Ignoring alternative interpretations',
    'Disconnecting the theme from the author\'s method—analyzing idea instead of technique'
  ],
  gradeBooster: [
    'Analyze what the author does NOT say to understand what they emphasize',
    'Compare how the theme develops across multiple scenes or texts',
    'Use precise terminology: motif, symbolism, foreshadowing, irony',
    'Consider the author\'s historical and cultural context',
    'Acknowledge ambiguity—sometimes texts intentionally resist single meanings'
  ]
};

const framework5: WritingFramework = {
  id: 'comparative-dual-lens',
  title: 'Dual-Lens Comparative Analysis',
  type: 'comparative',
  structure: [
    'Paragraph 1: Introduce both texts/ideas and the basis for comparison',
    'Paragraph 2: Similarity with textual support - what they share; how it functions in each',
    'Paragraph 3: Divergence with textual support - crucial differences; what this reveals',
    'Paragraph 4: Deeper pattern - synthesize the relationship; what the comparison illuminates',
    'Paragraph 5: Significance - what matters about these similarities and differences'
  ],
  modelParagraph: 'Both Dickens\'s "A Christmas Carol" and Scrooge McDuck represent characters transformed by the encounter with poverty, yet the texts imagine redemption differently. In Dickens, Scrooge\'s conversion is spiritual and sudden; the three ghosts shatter his assumptions overnight, and he awakens to his moral obligations to others. His wealth becomes a tool for community care. Conversely, in DuckTales, Scrooge\'s miserliness is portrayed as inevitable to his character, never fully transformed despite his adventurous life. Where Dickens suggests humans are capable of moral revolution, DuckTales presents character as essentially fixed. Yet both texts agree on a crucial point: isolation through materialism damages the soul. Scrooge\'s counting house in Dickens and Scrooge\'s money vault in DuckTales function identically—as prisons of one\'s own making. This shared image reveals how different historical periods imagine wealth differently (as moral debt vs. identity), yet maintain the conviction that greed is ultimately lonely.',
  checklist: {
    'Introduction': ['State what you\'re comparing and why it\'s interesting', 'Avoid vague comparisons ("both have characters")', 'Signal your argument about what the comparison reveals'],
    'Similarities': ['Move beyond surface similarities to structural or thematic depth', 'Explain why the similarity matters; what function does it serve', 'Use evidence from both texts equally'],
    'Differences': ['Avoid listing differences; explain their significance', 'Show how differences reflect different authors\' purposes or historical contexts', 'Avoid implying one text is "better" unless making that argument'],
    'Synthesis': ['Show how similarities and differences create a larger truth', 'Avoid treating texts as equal; focus on what comparison reveals', 'Connect to reader interests or larger themes']
  },
  commonMistakes: [
    'Comparing surface features instead of structural or thematic elements',
    'Spending unequal time on each text',
    'Stating "Text A has X and Text B has Y" without analysis',
    'Implying one text is better without supportive argument',
    'Forgetting that comparison should illuminate rather than just list'
  ],
  gradeBooster: [
    'Identify the unexpected similarity or difference that surprises readers',
    'Use comparative language strategically: "whereas," "conversely," "similarly"',
    'Explore differences in how authors use literary technique to convey ideas',
    'Consider how historical or cultural context shapes each text\'s approach',
    'Argue not just that texts differ, but what their difference reveals about human experience'
  ]
};

const framework6: WritingFramework = {
  id: 'narrative-unreliable-voice',
  title: 'Unreliable Narrator in Narrative',
  type: 'narrative',
  structure: [
    'Paragraph 1: Establish narrator and hint at unreliability through selective detail',
    'Paragraph 2: Early event told from narrator\'s perspective; reader believes it',
    'Paragraph 3: Contradictory information emerges; hint of gaps in narration',
    'Paragraph 4: Revelation of what narrator misunderstood or deliberately concealed',
    'Paragraph 5: Reflection on the narrator\'s unreliability; what reader now understands'
  ],
  modelParagraph: 'I\'ve always been the reliable one in our family, the one Dad trusted completely. That\'s why he gave me the key to his study, why he told me about his investment accounts before telling Mother. I was nineteen when I first borrowed from the accounts—just a small amount, a loan I fully intended to repay. "Reasonable interest will help me remember," I told myself, establishing a meticulous spreadsheet to track my transactions. Three years and seventeen thousand pounds later, I told myself that Father had plenty, that my borrowing was merely accelerating a wealth transfer that would happen eventually anyway. I convinced myself I was owed this—recognition for my trustworthiness, compensation for my loyalty. Today, when Father asked with trembling voice why his quarterly statement showed irregular withdrawals, I realized with sudden clarity that my spreadsheet wasn\'t evidence of careful planning. It was evidence of deliberate, methodical theft. My reliability had been a carefully constructed lie I told myself.',
  checklist: {
    'Character Voice': ['Create distinctive narrative voice through word choice and tone', 'Establish why narrator might misrepresent events', 'Make reader complicit in the narrator\'s self-deception initially'],
    'Early Action': ['Show narrator making problematic choices while justifying them', 'Include internal rationalizations that sound persuasive', 'Plant small inconsistencies reader might initially overlook'],
    'Revelation': ['Make the turning point where unreliability becomes clear undeniable', 'Avoid making narrator suddenly virtuous; let them recognize their own failure', 'Show how unreliability has shaped events throughout the narrative'],
    'Reflection': ['Allow narrator to process their own dishonesty', 'Avoid neat moral lessons; ambiguity makes unreliability feel real', 'Show changed understanding without suggesting easy redemption']
  },
  commonMistakes: [
    'Making narrator obviously untrustworthy from the start',
    'Over-explaining the unreliability through other characters\' commentary',
    'Revealing unreliability too abruptly without gradual hints',
    'Using unreliability as a gimmick without thematic purpose',
    'Letting narrator become completely sympathetic after revelation'
  ],
  gradeBooster: [
    'Use understatement and omission rather than outright lies',
    'Create narrator who believes their own story, making it emotionally convincing',
    'Plant details early that take on new meaning after revelation',
    'Employ first-person perspective exclusively so reader has no outside verification',
    'Make unreliability thematic—what does it suggest about self-deception, memory, or morality?'
  ]
};

const framework7: WritingFramework = {
  id: 'descriptive-place-as-character',
  title: 'Place as Character in Descriptive Writing',
  type: 'descriptive',
  structure: [
    'Paragraph 1: Establish the place with specific, concrete details',
    'Paragraph 2: Describe place\'s history, marks, changes—its temporal dimension',
    'Paragraph 3: Show how humans interact with and are shaped by the place',
    'Paragraph 4: Reveal the place\'s dominant mood or emotional atmosphere',
    'Paragraph 5: Show place\'s transformation or permanence; its significance'
  ],
  modelParagraph: 'The corner shop on Meridian Street had been Patel\'s for thirty-one years, but before that it was Henderson\'s tobacconist, and before that a cobbler\'s workshop where the floorboards still bore indent marks from the press. The current wooden counter, worn smooth by decades of elbows and coins, carried scratches—each one a tiny autobiography. Patel\'s daughter had carved her initials in 1987; a bored child had scored the date of their birthday in 2003; countless pockets had scraped small lines across its surface. The shelves, rearranged hundreds of times, bore their own ghost-marks: darker wood where items once stood permanently. Customers didn\'t simply visit this shop—they negotiated with it. Regular patrons had worn grooves in the floor where they always stood. Teenagers learned to duck past the low doorframe. The place had trained its visitors in how to inhabit it, and in return, it contained their histories. When Patel announced he was closing, the street felt hollowed, as though the building had kept something essential in trust that would now scatter into the world unmeasured.',
  checklist: {
    'Physical Detail': ['Include marks of time and use, not just description', 'Show layers of history in current details', 'Use specific measurements or comparisons for accuracy'],
    'Human Interaction': ['Show how people move through and change the place', 'Describe how place constrains or enables human behaviour', 'Include dialogue or action to show human presence'],
    'Emotional Resonance': ['Connect physical details to emotional significance', 'Show mood through description, not by naming emotion', 'Reveal what the place means to different characters'],
    'Significance': ['Indicate why this place matters beyond its physical existence', 'Connect place to character development or theme', 'Show place\'s role in larger human stories']
  },
  commonMistakes: [
    'Listing architectural features without connecting to meaning',
    'Describing an empty place without human traces',
    'Treating place as mere backdrop instead of active force',
    'Over-romanticizing or sentimentalizing a location',
    'Forgetting that places change—showing place as frozen in time'
  ],
  gradeBooster: [
    'Use architectural or design vocabulary precisely and appropriately',
    'Include sensory details specific to that unique place',
    'Show how place triggers memory in characters',
    'Use pathetic fallacy subtly—weather reflecting internal states',
    'Reveal character through how they describe and interact with place'
  ]
};

const framework8: WritingFramework = {
  id: 'persuasive-emotional-logic',
  title: 'Balancing Emotional and Logical Appeal',
  type: 'persuasive',
  structure: [
    'Paragraph 1: Open with human story or emotional hook; establish stakes for real people',
    'Paragraph 2: Introduce logical argument with evidence; make emotional stakes intellectual',
    'Paragraph 3: Develop logical argument while maintaining emotional resonance through example',
    'Paragraph 4: Address emotional opposition while providing logical counterargument',
    'Paragraph 5: Close with emotional commitment to logical conclusion; make reasoning feel morally necessary'
  ],
  modelParagraph: 'Consider Fatima, aged fourteen, who hasn\'t attended school in two years. Not because she lacks intelligence—she scored highest in her district\'s mathematics assessments—but because her family needs her labour in the textile workshop. Her story isn\'t unique; globally, 260 million children are out of school, yet this statistic obscures the specific faces, ambitions, and lost futures. The logical case is straightforward: each year of delayed schooling reduces lifetime earning potential by 9-12%, perpetuating poverty cycles. Yet logic alone won\'t move governments to act. Understanding Fatima\'s individual sacrifice—the science textbooks she won\'t read, the laboratory experiments she\'ll never conduct, the career she might have built—transforms statistics into moral urgency. Education isn\'t merely an investment with measurable returns; it\'s a right that recognizes a child\'s inherent worth. When we marry the economic argument (schooling produces GDP growth) with the human argument (schooling liberates individual potential), we create a case so compelling that inaction becomes morally indefensible.',
  checklist: {
    'Emotional Hook': ['Introduce a specific person or scenario, not abstract groups', 'Show emotional stakes clearly', 'Avoid melodrama; let genuine human situation be powerful'],
    'Logical Development': ['Provide clear evidence and statistics', 'Explain causation and mechanism, not just correlation', 'Make logical point relevant to the emotional scenario'],
    'Integration': ['Weave emotional and logical elements together, not separately', 'Show how logic serves emotional goals', 'Avoid treating emotion and logic as contradictory'],
    'Ethical Conclusion': ['Connect logical and emotional arguments to moral obligation', 'Make the call to action feel urgent but ethical', 'Acknowledge what\'s at stake if action isn\'t taken']
  },
  commonMistakes: [
    'Separating emotional and logical sections; treating them as different parts',
    'Using emotion to manipulate rather than to illuminate',
    'Making logical argument so abstract that human stakes disappear',
    'Overwhelming readers with statistics without human context',
    'Assuming emotion and logic are opposed rather than complementary'
  ],
  gradeBooster: [
    'Use a character or scenario throughout the piece to anchor abstraction',
    'Choose statistics that directly connect to human consequences',
    'Include sensory details in emotional sections and precise language in logical sections',
    'Acknowledge counterarguments as if they come from reasonable, intelligent people',
    'End by showing how logic and emotion together create moral clarity'
  ]
};

const framework9: WritingFramework = {
  id: 'analytical-technique-effect',
  title: 'Linking Technique to Effect and Purpose',
  type: 'analytical',
  structure: [
    'Paragraph 1: Introduce technique and its appearance in text',
    'Paragraph 2: Explain what the technique does—its mechanical effect',
    'Paragraph 3: Analyze deeper effect—what reader feels or understands because of technique',
    'Paragraph 4: Connect effect to author\'s purpose or theme',
    'Paragraph 5: Evaluate how technique contributes to overall impact'
  ],
  modelParagraph: 'Shakespeare\'s use of iambic pentameter in Hamlet\'s soliloquies isn\'t merely decorative—it shapes how readers understand the prince\'s consciousness. The regular rhythm of ten syllables per line, with alternating unstressed and stressed beats, creates a hypnotic, meditative quality that mirrors deep thinking. When Hamlet says "To be or not to be, that is the question," the rhythm propels us through the syllables almost involuntarily, enacting the forward momentum of philosophical wrestling. Yet when Hamlet breaks this rhythm—when he uses spondees (two stressed syllables in succession) or truncated lines—the disruption creates urgency and emotional distress. This technical variation makes the meter itself an instrument of meaning: smooth iambic pentameter represents controlled thought, while disruption represents psychological fracture. Shakespeare thus uses a technical formal device to accomplish what prose cannot—the reader experiences Hamlet\'s mental state through the texture of language itself, not merely through what he says about it. The technique makes the style inseparable from the content, which is precisely why this soliloquy remains so psychologically compelling.',
  checklist: {
    'Technique Identification': ['Name the technique specifically and accurately', 'Locate it precisely in the text', 'Note whether it appears once or repeatedly'],
    'Mechanical Effect': ['Explain what the technique does technically', 'Avoid assuming reader knows the literary term', 'Use precise grammatical language'],
    'Deeper Effect': ['Move beyond "this sounds nice" to genuine analysis', 'Consider emotional and intellectual impact on reader', 'Show how technique shapes meaning'],
    'Purpose Connection': ['Link technique to larger themes or author\'s apparent intent', 'Avoid over-interpreting; stay grounded in evidence', 'Consider historical context if relevant']
  },
  commonMistakes: [
    'Naming technique without explaining what it does',
    'Assuming readers understand technical terms without definition',
    'Confusing the sound of a technique with its effect',
    'Over-reading significance into every stylistic choice',
    'Separating technique from meaning—analyzing form without content'
  ],
  gradeBooster: [
    'Compare how different techniques create similar or contrasting effects',
    'Use technical vocabulary with precision and confidence',
    'Consider what might happen if the author had chosen differently',
    'Connect technique to historical literary conventions or innovations',
    'Show how technique contributes to deeper thematic meaning'
  ]
};

const framework10: WritingFramework = {
  id: 'comparative-argument-strategy',
  title: 'Comparative Argument and Counter-argument',
  type: 'comparative',
  structure: [
    'Paragraph 1: Establish the comparison; preview your argument about why comparison matters',
    'Paragraph 2: Present the strongest argument for Position A with evidence',
    'Paragraph 3: Present the strongest argument for Position B with evidence',
    'Paragraph 4: Identify where these positions genuinely conflict; concede valid points on both sides',
    'Paragraph 5: Argue for a synthesis or indicate what comparison reveals despite disagreement'
  ],
  modelParagraph: 'The debate between standardized testing and portfolio-based assessment divides educators, yet each approach contains genuine merit. Standardized testing provides comparable metrics across diverse student populations; it ensures equitable measurement and identifies achievement gaps that might otherwise remain hidden within individual classrooms. Critics, however, rightly note that high-stakes testing narrows curriculum, incentivizes teaching-to-test rather than deep learning, and disadvantages students from under-resourced schools lacking test-prep resources. Portfolio assessment, conversely, captures complexity that single tests cannot—it documents growth over time, honors diverse ways of demonstrating learning, and develops student reflection and self-assessment. Yet portfolios introduce subjectivity; a student\'s achievement might be evaluated differently by different teachers. Rather than choosing one approach exclusively, the comparison suggests that complementary assessment strategies serve students better than either alone. Standardized measures ensure transparency and equity, while portfolios ensure that teaching remains focused on complex, authentic learning. The strongest educational systems employ both, using standardized data to identify struggling populations while using portfolios to ensure that instruction remains rich and meaningful.',
  checklist: {
    'Argument Presentation': ['State each position\'s strongest case first', 'Support with specific, relevant evidence', 'Avoid strawmanning—represent opposing view fairly'],
    'Counter-argument': ['Acknowledge genuine strengths of opposing view', 'Concede valid concerns or points', 'Avoid dismissing counterargument; engage with it seriously'],
    'Synthesis': ['Move beyond "both have points" to genuine integration', 'Show what comparison reveals that single-position argument cannot', 'Avoid false balance—some positions may ultimately be stronger'],
    'Conclusion': ['Indicate why this comparison matters beyond academic exercise', 'Connect to real-world consequences or applications', 'Leave reader with new understanding']
  },
  commonMistakes: [
    'Presenting weak version of opposing position to make own position look better',
    'Treating all positions as equally valid without discrimination',
    'Conceding so much ground that own argument disappears',
    'Failing to identify genuine disagreements beneath surface agreement',
    'Ending with vague "both sides have a point" without advancing the discussion'
  ],
  gradeBooster: [
    'Identify the underlying assumptions each position rests upon',
    'Show how historical context or changing circumstances affect which position gains strength',
    'Use the comparison to reveal deeper philosophical or ethical questions',
    'Connect to real-world applications or concrete examples',
    'Argue for a nuanced position that genuinely integrates strongest elements of both sides'
  ]
};

writingFrameworks.push(framework3, framework4, framework5, framework6, framework7, framework8, framework9, framework10);

export const modelTexts: ModelText[] = [
  {
    id: 'model-narrative-gr5-escape',
    title: 'The Forgotten Door',
    type: 'narrative',
    grade: 5,
    examBoard: 'KS2 SATs Practice',
    text: 'The attic smelled like old books and dust. Maya climbed the wooden stairs, each step creaking under her feet. She had been exploring the house all summer, but she had never been up here before. Today felt different. The afternoon light came through a small window and made everything gold.\n\nAs her eyes got used to the darkness, Maya could see boxes and furniture covered in white sheets. It looked like a museum for forgotten things. She walked between them carefully, running her fingers along the dusty surfaces. Then she saw it—a door painted bright blue, hidden behind a pile of old suitcases.\n\nMaya\'s heart started beating faster. She had lived in this house her whole life, and she had never seen this door. It was small, almost like a door for a child, with an old brass handle that felt cold when she touched it. The paint was peeling off in little flakes, revealing different shades of blue underneath. Blue from a long time ago.\n\nShe tried the handle. It was stuck. She pulled harder, and suddenly it swung open. Behind it was not another room, but a small cupboard. Inside was a leather notebook, old and brown, with her grandmother\'s name written on the front in faded writing: "Margaret, Age 14, 1952."\n\nMaya sat down right there on the floor. She opened the notebook carefully. Page after page was filled with her grandmother\'s words—stories about adventures, drawings of strange creatures, dreams written down. On one page, she had written: "One day I will travel the world and write about everything I see."\n\nMaya knew her grandmother had never travelled much. She had worked in the same town her whole life. But now, holding this notebook, Maya understood something new about her. Everyone has stories they keep secret. Everyone has dreams, even if they don\'t share them.\n\nShe climbed back down from the attic as the sun was setting. She held the notebook carefully, like it was made of glass. Tomorrow, she decided, she would start her own notebook. She would write down all her own dreams and adventures. Maybe one day, someone would find it and understand her too.',
    annotations: [
      {
        quote: 'The attic smelled like old books and dust.',
        technique: 'Sensory opening',
        effect: 'Immediately immerses reader in the place and creates nostalgic, mysterious atmosphere'
      },
      {
        quote: 'each step creaking under her feet',
        technique: 'Onomatopoeia and sound imagery',
        effect: 'Makes reader feel the physical reality of the action; creates tension and anticipation'
      },
      {
        quote: 'It looked like a museum for forgotten things',
        technique: 'Simile and metaphor',
        effect: 'Helps reader visualize the attic and suggests themes of memory and loss'
      },
      {
        quote: 'Her heart started beating faster',
        technique: 'Physical action showing emotion',
        effect: 'Shows Maya\'s excitement without telling the reader directly'
      },
      {
        quote: 'Everyone has stories they keep secret. Everyone has dreams, even if they don\'t share them.',
        technique: 'Reflection and thematic statement',
        effect: 'Reveals what Maya learned and gives the story deeper meaning beyond the plot'
      }
    ],
    prompt: 'Write a story about discovering something unexpected. Your story should be between 400-500 words.'
  },
  {
    id: 'model-descriptive-gr5-place',
    title: 'The Library After Hours',
    type: 'descriptive',
    grade: 5,
    examBoard: 'KS2 SATs Practice',
    text: 'The library feels completely different when everyone leaves. The lights are still on, but they feel lonely, like they\'re waiting for people who aren\'t coming back. The wooden tables are empty except for a forgotten pencil and a scrap of paper with someone\'s notes. Everything is very quiet. You can hear the hum of the computers and the ticking of the big clock on the wall.\n\nThe shelves stretch from the floor all the way up to the ceiling. Row after row of books stand together like silent friends. During the day, children pull them out and put them in the wrong places. But now, everything is neat and organized. The books smell papery and old, mixed with something vanilla-like from the cleaning stuff they use on the floors.\n\nIf you look carefully, you can see the history written on the shelves. Some books have bright covers that are new and shiny. Others are old, with faded letters on the spine that are hard to read. The librarian, Mrs. Chen, told me that some books have been here for twenty years. You can tell by looking at them. They have bent corners and marks on the pages from hands that held them long ago.\n\nThe carpet is blue with red flowers in a pattern that repeats across the whole floor. Your footsteps are very quiet on it. In the corner, there\'s a reading corner with big soft chairs and cushions. The cushions are blue and green and yellow, but they\'re faded now, like they\'ve been sat in a thousand times. There\'s a basket of books next to the chairs, waiting to be read.\n\nWhen the sun starts to set, light comes through the windows and makes long golden lines across the floor. It shines on the dust that floats in the air. It looks magical, like the dust is tiny pieces of stars that have fallen down. The books seem to glow in this light. You feel like you\'re in an underwater world, or maybe a dream.\n\nNo one else is here. Just the books and the tables and the chairs. Just the quiet and the golden light. The library after hours is like a secret world that only exists for a little while. It\'s peaceful and safe, like stepping into another time. When the cleaner comes tomorrow morning, the library will wake up again. But for tonight, it\'s asleep, and it\'s beautiful.',
    annotations: [
      {
        quote: 'The library feels completely different when everyone leaves.',
        technique: 'Personification and contrast',
        effect: 'Establishes that place has its own personality; creates atmosphere of emptiness'
      },
      {
        quote: 'The books stand together like silent friends',
        technique: 'Simile',
        effect: 'Makes books relatable and shows reader\'s affection for them'
      },
      {
        quote: 'bent corners and marks on the pages from hands that held them long ago',
        technique: 'Specific sensory detail showing history',
        effect: 'Reveals that place carries human stories; adds emotional depth'
      },
      {
        quote: 'like the dust is tiny pieces of stars that have fallen down',
        technique: 'Imaginative simile',
        effect: 'Transforms ordinary detail into something magical; shows wonder and perspective'
      },
      {
        quote: 'it\'s asleep, and it\'s beautiful',
        technique: 'Final personification and emotional conclusion',
        effect: 'Brings reader full circle; shows that place has meaning beyond its function'
      }
    ],
    prompt: 'Describe a place you know well when no one else is there. Use sensory details to help your reader see, hear, and feel what you experience.'
  },
  {
    id: 'model-narrative-gr7-choice',
    title: 'The Last Chance',
    type: 'narrative',
    grade: 7,
    examBoard: 'GCSE Practice Set A',
    text: 'The letter arrived on a Tuesday, official-looking with the school crest embossed on the envelope. Marcus knew what it contained before he opened it. Exclusion. It was the word that hung in the space between what he\'d done and what would happen next.\n\nHe\'d been on the edge for months—missed homework, forgotten permissions slips, incidents that accumulated like dust on a shelf nobody bothers to clean. But the argument with Mr. Harrison had been different. It hadn\'t started there; it had started at home, where his dad\'s anger filled the kitchen like smoke. Everything Marcus had tried to keep separate—school and home, the version of himself that functioned and the version that fell apart—had collided in a single moment. He\'d said something disrespectful. Mr. Harrison had sent him out. And something inside Marcus had broken.\n\nHis mum read the letter in silence, then looked at him with an expression he couldn\'t identify. Not anger, exactly. Something quieter and more devastating.\n\n"What do you want to do?" she asked.\n\nMarcus hadn\'t expected the question. He\'d expected punishment, disappointment, maybe tears. But this—a genuine question, as if his life was his to decide—was somehow worse. It meant his choices actually mattered.\n\nThe exclusion was for two weeks. There was a reintegration meeting after that, but it would be with the head of year, and his parents, and Mr. Harrison, and everyone would look at him like he was broken.\n\nThat night, Marcus sat in his room and thought about his future—a thing he usually didn\'t do because thinking about it made him anxious. His friend Jacob had dropped out at sixteen. His older sister had gone to uni. His dad had worked at the same factory for thirty years. There were different kinds of lives available, Marcus realized. Different versions of how things could go. He could be the kid who got excluded and spiralled. He could be the kid who came back and tried. Those felt like real choices, not things that happened to him.\n\nWhen his mum knocked on the door, he was writing an apology email to Mr. Harrison.\n\n"I\'m going back," he said, before she could speak. "I\'m going to do the work. I\'m going to make it different."\n\nHis mum sat on the bed. "Okay," she said. "That\'s good. That\'s really good. But Marcus, you don\'t have to fix everything overnight. Just try. That\'s enough."\n\nTwo weeks later, sitting in the reintegration meeting, facing Mr. Harrison and the head of year, Marcus didn\'t feel brave. He felt terrified. But he also felt like something inside him had shifted. The exclusion hadn\'t solved anything. It hadn\'t made home feel less suffocating or school feel less impossible. But it had made something clear: he was the person who decided what came next. Not his circumstances. Not his dad\'s anger. Him.\n\nIt wasn\'t redemption—redemption was too big and too neat. It was just the small, difficult decision to keep trying, which felt like the most honest thing available.',
    annotations: [
      {
        quote: 'Everything Marcus had tried to keep separate—school and home, the version of himself that functioned and the version that fell apart—had collided in a single moment.',
        technique: 'Extended metaphor and parallel structure',
        effect: 'Shows internal conflict through structural language; reader understands Marcus\'s fragmentation'
      },
      {
        quote: '"What do you want to do?"',
        technique: 'Dialogue that surprises both character and reader',
        effect: 'Shifts agency to Marcus; creates emotional complexity beyond simple punishment'
      },
      {
        quote: 'There were different kinds of lives available, Marcus realized.',
        technique: 'Moment of realization; shift in narrative perspective',
        effect: 'Marks internal turning point without melodrama; shows genuine character growth'
      },
      {
        quote: 'He didn\'t feel brave. He felt terrified. But he also felt like something inside him had shifted.',
        technique: 'Honest emotional contradiction',
        effect: 'Avoids false resolution; shows real maturity is proceeding despite fear'
      },
      {
        quote: 'It wasn\'t redemption—redemption was too big and too neat. It was just the small, difficult decision to keep trying.',
        technique: 'Thematic reflection that rejects easy resolution',
        effect: 'Elevates story beyond plot summary; reveals complex understanding of change'
      }
    ],
    prompt: 'Write a story about a moment that changes someone\'s perspective. Your character should face a genuine dilemma with real consequences.'
  },
  {
    id: 'model-persuasive-gr7-issue',
    title: 'Why Schools Should Teach Financial Literacy',
    type: 'persuasive',
    grade: 7,
    examBoard: 'GCSE Practice Set A',
    text: 'Every year, thousands of young people leave school and make their first major financial decisions without any preparation. They sign up for credit cards they don\'t understand, take out loans they can\'t afford, and make investment decisions based on information they\'ve never learned how to evaluate. Meanwhile, they can solve quadratic equations and name the capitals of Europe. Schools teach students everything except how to manage the money that will dominate their adult lives. This is a failure. Financial literacy should be a required subject in every school because it directly impacts quality of life, prevents predatory practices, and develops critical thinking skills that extend far beyond money.\n\nFirst, financial education creates measurable improvements in life outcomes. Research consistently shows that students who receive financial education are more likely to have savings accounts, less likely to use high-cost borrowing, and more likely to plan for retirement. These aren\'t abstract benefits—they\'re the difference between financial stability and crisis. Consider someone earning £25,000 annually. If they don\'t understand compound interest, they might pay £5,000 more on a mortgage over its lifetime. If they don\'t understand pension contributions, they might retire in poverty despite decades of work. Financial literacy isn\'t about becoming wealthy; it\'s about survival in an adult world that assumes knowledge most schools never teach.\n\nSecond, the absence of financial education leaves young people vulnerable to exploitation. Payday lenders, gambling companies, and predatory financial institutions specifically target people without financial literacy because they know these people will make poor decisions. Credit card companies offer students deals they don\'t understand. Buy-now-pay-later companies create debt traps for the unwary. Without financial education, teenagers become easy targets. They know how to identify a sketchy person on the street but not a sketchy financial product, because no one taught them the warning signs. Schools have a responsibility to protect students from industries designed to exploit financial ignorance.\n\nFinally, financial literacy develops critical thinking skills applicable far beyond money. Learning to read a budget requires analysis. Learning to compare financial products requires evaluation. Learning to resist marketing requires skepticism and reasoning. A student who learns to question a financial advertisement has learned to question other persuasive claims. Financial literacy isn\'t just about money—it\'s about developing the mental tools to navigate a complex world designed to exploit people who don\'t think critically.\n\nSome argue that parents should teach financial literacy at home. This is unrealistic. Not all parents have financial literacy themselves. Many families are too stressed managing day-to-day survival to teach abstract financial concepts. Schools are the only institution that reaches all young people regardless of family circumstance. If we care about equality, we cannot rely on families to teach skills that determine financial destiny.\n\nFinancial literacy isn\'t optional anymore. It\'s foundational. Schools teach students to be good citizens, but what good is citizenship without the knowledge to make fundamental life decisions? The solution is simple: make financial education compulsory. Start in secondary school, teach practical skills, and ensure every graduate understands credit, debt, and investment. The cost of teaching these skills is minimal. The cost of not teaching them is measured in ruined lives and preventable financial crisis.',
    annotations: [
      {
        quote: 'Every year, thousands of young people leave school and make their first major financial decisions without any preparation.',
        technique: 'Striking opening statistic presented as problem',
        effect: 'Immediately establishes stakes and urgency; shows problem is widespread'
      },
      {
        quote: 'Meanwhile, they can solve quadratic equations and name the capitals of Europe.',
        technique: 'Contrast and irony',
        effect: 'Highlights absurdity of current system; creates persuasive tension'
      },
      {
        quote: 'If they don\'t understand compound interest, they might pay £5,000 more on a mortgage over its lifetime.',
        technique: 'Concrete example translating abstract concept to real cost',
        effect: 'Makes reader feel the consequence personally; abstract becomes tangible'
      },
      {
        quote: 'They know how to identify a sketchy person on the street but not a sketchy financial product, because no one taught them the warning signs.',
        technique: 'Parallel structure revealing logical gap',
        effect: 'Demonstrates inconsistency in education; persuades through logic'
      },
      {
        quote: 'The cost of teaching these skills is minimal. The cost of not teaching them is measured in ruined lives and preventable financial crisis.',
        technique: 'Final contrast with elevated stakes',
        effect: 'Concludes with moral urgency; moves decision from practical to ethical'
      }
    ],
    prompt: 'Write a persuasive piece arguing for or against a change you think schools should make. Support your argument with evidence and reasoning.'
  }
];

const model5: ModelText = {
  id: 'model-analytical-gr7-theme',
  title: 'Powerlessness and Control in "Of Mice and Men"',
  type: 'analytical',
  grade: 7,
  examBoard: 'GCSE Practice Set A',
  text: 'John Steinbeck\'s "Of Mice and Men" explores the theme of powerlessness—how ordinary people\'s attempts to control their futures are constantly thwarted by forces beyond their reach. Through George, Lennie, and Curley\'s wife, Steinbeck argues that the American Dream itself is a trap that convinces people they can shape their destiny when, in reality, circumstance and society determine their fates.\n\nLennie\'s intellectual disability strips him of the power to control his own actions, making him dependent on George\'s management. Yet George\'s control over Lennie isn\'t benevolent protection—it\'s also a limitation. George dreams of owning a farm and living independently, but those dreams remain forever out of reach. When Lennie kills Curley\'s wife, George loses even the fragile control he had. He cannot prevent the tragedy because Lennie\'s actions, ultimately, don\'t belong to George. No matter how carefully George plans or how tightly he controls Lennie\'s movements, he cannot protect his friend from the consequences of being different in a world that punishes difference. The novel argues that some forms of powerlessness cannot be overcome by willpower or friendship.\n\nCurley\'s wife represents a different kind of powerlessness—the powerlessness of being female and young in a male-dominated world. She is never given a name, which itself suggests her invisibility and lack of identity within the patriarchal ranch society. She is confined to the ranch house because she is married to Curley, the boss\'s son. When she attempts to exert agency—talking to other workers, pursuing connection—she is immediately punished with accusations of flirtation. Her only value is as Curley\'s property. When she accidentally dies after touching Lennie\'s hair, the novel offers bitter irony: the only freedom she achieves comes through death. Steinbeck suggests that certain people—the disabled, the female, the powerless—have no escape from the systems that confine them.\n\nThe broader powerlessness that Steinbeck explores throughout the novel is economic. George and Lennie are migrant workers entirely dependent on employers who exploit them. Their dream of owning a farm is economically impossible during the Depression; the wages they earn will never accumulate to ownership. Other workers on the ranch share this dream—Candy, Crooks, Curley\'s wife—each believing that somehow, they might escape their circumstances. But the novel is unrelenting in its message: the system itself prevents escape. Workers are kept poor and dependent. The American Dream is not a ladder people can climb; it\'s an illusion that keeps people obedient. They work toward a future that will never arrive.\n\nWhen George shoots Lennie at the novel\'s end, the act is presented as mercy but is also the final affirmation of powerlessness. George cannot save Lennie from Curley\'s revenge, but he can control the manner of death. Even this small agency—choosing when and how Lennie dies—becomes the only power available. Steinbeck\'s tragic vision is that in a world structured by social and economic injustice, all people can ultimately control is the moment of their own ending.\n\nThrough these interconnected explorations of powerlessness, Steinbeck argues that the American Dream—the belief that individuals can create better lives through work and determination—is fundamentally flawed. The dream is designed to convince people that failure results from their own inadequacy, not from unjust systems. "Of Mice and Men" strips away this illusion. The novel suggests that most people have far less control over their futures than they are led to believe.',
  annotations: [
    {
      quote: 'Through George, Lennie, and Curley\'s wife, Steinbeck argues that the American Dream itself is a trap',
      technique: 'Thesis statement identifying theme and author\'s argument',
      effect: 'Establishes clear interpretive claim that will be developed'
    },
    {
      quote: 'George\'s control over Lennie isn\'t benevolent protection—it\'s also a limitation.',
      technique: 'Nuanced analysis showing contradiction within character relationship',
      effect: 'Moves beyond simple reading; shows complexity of power dynamics'
    },
    {
      quote: 'She is never given a name, which itself suggests her invisibility',
      technique: 'Technique analysis drawing meaning from absence',
      effect: 'Demonstrates close reading; shows how form conveys theme'
    },
    {
      quote: 'the wages they earn will never accumulate to ownership. Other workers on the ranch share this dream',
      technique: 'Concrete detail supporting larger structural argument',
      effect: 'Grounds abstract theme in economic reality'
    },
    {
      quote: 'the American Dream—the belief that individuals can create better lives through work and determination—is fundamentally flawed',
      technique: 'Thematic synthesis tying all examples together',
      effect: 'Concludes with clear argument showing how theme develops through characters'
    }
  ],
  prompt: 'Choose a major theme in a text you\'ve studied. Write an analysis explaining how the author develops this theme and what message the theme communicates.'
};

const model6: ModelText = {
  id: 'model-comparative-gr9-texts',
  title: 'Power and Corruption in Dictatorial Settings',
  type: 'comparative',
  grade: 9,
  examBoard: 'A-Level Practice',
  text: 'Both George Orwell\'s "Nineteen Eighty-Four" and Yevgeny Zamyatin\'s "We" imagine societies under absolute authoritarian control, yet they arrive at strikingly different conclusions about the nature of human resistance to totalitarian power. Where Orwell sees totalitarianism as ultimately victorious—achieving control through technology, propaganda, and psychological torture—Zamyatin suggests that authentic human consciousness inevitably rebels against enforced conformity, even in the face of overwhelming oppression. This fundamental divergence reveals different philosophical assumptions about human nature and the limits of state power.\n\nBoth novels employ remarkably similar techniques to establish their dystopian worlds. Each features surveillance technology that monitors citizen behaviour constantly: Orwell\'s telescreens, Zamyatin\'s glass buildings. Both governments employ language manipulation—Newspeak in "Nineteen Eighty-Four," the One State\'s propaganda in "We"—to make dissent literally unthinkable. Both protagonists, Winston Smith and D-503, work in ministries devoted to the opposite of their stated purpose (the Ministry of Peace oversees war; the Benefactor\'s regime promises happiness while delivering control). These parallel structures suggest both authors grappled with similar questions about how totalitarian systems maintain power through contradiction and manipulation.\n\nYet the divergence emerges in how resistance operates and what it signifies. Winston\'s rebellion in "Nineteen Eighty-Four" is crushed completely. His relationship with Julia serves the state\'s purposes, his hidden diary is discovered, and ultimately he is tortured into genuine betrayal—he doesn\'t merely pretend to accept the state\'s ideology, he comes to believe it. At the novel\'s end, Winston loves Big Brother sincerely. Orwell suggests that totalitarianism achieves its ultimate victory not through suppressing resistance but through absorbing it, turning rebellion itself into proof of the system\'s total control. No escape exists, not even in authentic feeling or genuine resistance.\n\nZamyatin\'s "We," conversely, shows D-503\'s brief rebellion—his love for the woman I-330 and his contemplation of life outside the One State\'s boundaries—as representing something the state cannot ultimately eliminate: authentic human desire. Though I-330 is captured and D-503 is lobotomized, Zamyatin suggests through their brief connection that something in human consciousness persistently rebels against perfect conformity. The very fact that the One State must continuously suppress this impulse, must perform the Great Operation to lobotomize citizens and eliminate imagination, suggests that authentic consciousness is not naturally compliant. It must be violently created and maintained.\n\nThis difference reflects deeper philosophical disagreements. Orwell seems to suggest that human consciousness is malleable—that enough propaganda, surveillance, and torture can genuinely reshape what people think and feel. Totalitarianism, in this view, succeeds not through brute force alone but through psychological penetration. Zamyatin, writing after experiencing the Russian Revolution\'s violence but before Stalinism\'s full horror, maintains more faith in human nature\'s resilience. He suggests that genuine freedom and authentic desire cannot be entirely manufactured or destroyed; they will persistently re-emerge, forcing the state into permanent, exhausting suppression.\n\nHistorically, both visions contain truth. Real totalitarian regimes have achieved remarkable psychological control, validating Orwell\'s nightmare. Yet history also shows persistent, often self-sacrificial resistance—people willing to die for authenticity and freedom, suggesting Zamyatin\'s faith in human resilience isn\'t entirely misplaced. The comparison between these novels reveals that the question of whether totalitarianism can achieve absolute control remains, perhaps, permanently unresolved. What the novels agree on is crucial: both regimes employ identical tools—surveillance, propaganda, language manipulation—to achieve psychological control. Their disagreement is whether those tools ultimately succeed.\n\nWhere these texts most significantly diverge is in their implicit recommendations. Orwell, through Winston\'s defeat, seems to argue that resistance is futile, that the best one can do is maintain private mental rebellion even while outwardly conforming. Zamyatin, through I-330\'s persistence and D-503\'s initial awakening, suggests that resistance, even when ultimately unsuccessful, affirms human dignity. The act of rebellion matters not because it will succeed but because it proves that authentic consciousness persists. This disagreement about the meaning of resistance—whether it\'s noble but pointless, or noble and essential to humanity—reflects each author\'s different historical moment and temperament. Orwell writes from disillusionment with revolutionary causes; Zamyatin, from idealistic hope that human nature transcends political systems.\n\nUltimately, comparing these novels reveals that their shared dystopian machinery serves opposing philosophical arguments. Both understand totalitarianism\'s techniques; they disagree about its ultimate possibilities and about what human beings fundamentally are. For readers, this disagreement is productive: it suggests that the future isn\'t predetermined, that totalitarianism\'s success isn\'t inevitable, and that the question of human freedom remains genuinely contested. We cannot read Orwell and Zamyatin together without recognizing that the outcome of struggles against authoritarianism depends, in part, on what we believe about human nature\'s capacity for resilience.',
  annotations: [
    {
      quote: 'Where Orwell sees totalitarianism as ultimately victorious...Zamyatin suggests that authentic human consciousness inevitably rebels',
      technique: 'Clear thesis identifying the key disagreement between texts',
      effect: 'Establishes comparison will explore philosophical difference, not just surface similarities'
    },
    {
      quote: 'This fundamental divergence reveals different philosophical assumptions about human nature',
      technique: 'Meta-commentary identifying what comparison reveals',
      effect: 'Shows sophisticated understanding of how texts function as philosophical arguments'
    },
    {
      quote: 'Yet the divergence emerges in how resistance operates and what it signifies.',
      technique: 'Transition moving from similarities to meaningful differences',
      effect: 'Structure itself models comparative thinking: find common ground then explore divergence'
    },
    {
      quote: 'totalitarianism succeeds not through brute force alone but through psychological penetration',
      technique: 'Synthesis of both texts\' approaches to shared theme',
      effect: 'Shows texts can be compared even while disagreeing, revealing shared concerns'
    },
    {
      quote: 'Orwell writes from disillusionment with revolutionary causes; Zamyatin, from idealistic hope that human nature transcends political systems.',
      technique: 'Historical and biographical context informing literary analysis',
      effect: 'Deepens comparison by connecting texts to authors\' lived experiences and worldviews'
    }
  ],
  prompt: 'Compare how two texts you have studied explore the relationship between power and human freedom. Analyze both similarities and significant differences in how the authors present these themes.'
};

const model7: ModelText = {
  id: 'model-descriptive-gr9-landscape',
  title: 'The Fjord at Twilight',
  type: 'descriptive',
  grade: 9,
  examBoard: 'A-Level Practice',
  text: 'The fjord at twilight exists in a liminal space between day and night, between the solid earth and something more ethereal. The granite cliffs that rise from the water have been carved by glaciers over millennia, their surfaces bearing the scars of that ancient violence. They are striated in shades of grey and charcoal, with seams of something that catches the last light—quartz or mica or simply the way weathering has fractured the stone into reflecting surfaces. These cliffs are not beautiful in any conventional sense; they are indifferent to human perception, their scale making human awe feel like an appropriate response to genuine insignificance.\n\nThe water reflects the sky, but not simply. The reflection is a kind of translation, slightly delayed and fragmented. Where the sky is beginning to deepen from blue to purple, the water holds that colour but rendered liquid, unstable. The surface moves with a texture that isn\'t quite waves—more like breathing, a gentle expansion and contraction that suggests something enormous sleeping beneath. Where the cliffs meet the water, there is no clear boundary; instead, a zone of transition where stone becomes shadow becomes liquid dark. The eye cannot quite locate where one element ends and another begins.\n\nThe light at this hour is paradoxical. There is still brightness in the sky, yet the cliffs cast long shadows that pool at their bases like spilled ink. The shadows are not simply dark; they contain gradations—there is a darkness of stone, a darkness of distance, a darkness of depth. The remaining sunlight, filtered through atmosphere and bouncing off water and cliff, becomes something amber and honey-coloured, almost tangible. It feels possible that you could reach out and touch light itself, that it has weight and presence rather than being merely the absence of darkness.\n\nThe air carries scents that seem to come from geological time rather than the present moment. There is the mineral smell of wet stone, the iron-like quality of deep water that never receives direct sunlight, and underneath these, something older—the smell of earth that hasn\'t been disturbed in centuries, ancient and patient. The temperature is specific to this place and hour: cooler than day, warmer than what night will bring, a balance that feels temporary and precarious.\n\nSound here seems to originate from the landscape itself rather than being imposed upon it. Water laps against stone with a sound that is both intimate and indifferent. An echo comes from somewhere across the fjord, though it\'s unclear what initially produced it. Perhaps it\'s the sound of a bird, perhaps the settling of rock, perhaps nothing at all—the landscape itself creating sound to fill its own silence. The human ear strains to make meaning from these ambiguous sources, and in that straining, becomes aware of how small human perception is against the reality of the non-human world.\n\nAs the light continues to fade, the fjord doesn\'t become darker so much as it becomes different. The cliffs lose definition, becoming simply mass, shadow, the suggestion of form. The water becomes indistinguishable from sky except where the remaining light creates a thin line of demarcation. What emerges is not emptiness but fullness—the presence of things that can no longer be clearly seen but whose reality is unquestionable. The viewer is no longer observing the landscape; instead, the viewer has become part of the landscape, absorbed into its twilight existence where distinction between observer and observed dissolves.\n\nThis is not a landscape designed for human pleasure or habitation. It makes no concessions to human preference for clarity or control. Instead, it offers something more profound: the experience of existing in the presence of things vastly larger and older than oneself, of perceiving the world through senses that can register only a fraction of what is actually occurring. The twilight fades not to black but to a darkness that is full of potential, where what cannot be seen feels more real than what could be.',
  annotations: [
    {
      quote: 'The fjord at twilight exists in a liminal space between day and night, between the solid earth and something more ethereal.',
      technique: 'Thematic opening establishing the space between states',
      effect: 'Immediately signals that this description explores ambiguity and transition rather than fixed states'
    },
    {
      quote: 'They are indifferent to human perception, their scale making human awe feel like an appropriate response to genuine insignificance.',
      technique: 'Philosophical commentary integrated into description',
      effect: 'Transforms landscape description into meditation on human perspective and scale'
    },
    {
      quote: 'The reflection is a kind of translation, slightly delayed and fragmented.',
      technique: 'Metaphor treating reflection as language/communication',
      effect: 'Suggests landscape doesn\'t simply reflect but transforms and interprets reality'
    },
    {
      quote: 'There is a darkness of stone, a darkness of distance, a darkness of depth.',
      technique: 'Repetition with variation revealing multiple dimensions of darkness',
      effect: 'Shows sophisticated observation; refuses simple adjectives in favour of precise analysis'
    },
    {
      quote: 'What emerges is not emptiness but fullness—the presence of things that can no longer be clearly seen',
      technique: 'Paradox and contradiction expressing complexity',
      effect: 'Captures the actual experience of twilight perception; challenges binary thinking'
    },
    {
      quote: 'The viewer is no longer observing the landscape; instead, the viewer has become part of the landscape',
      technique: 'Shift from external observation to participant perspective',
      effect: 'Demonstrates how deep attention to place dissolves boundaries between observer and observed'
    }
  ],
  prompt: 'Write a detailed description of a landscape or natural place that reveals something profound about how humans experience the natural world. Use precise sensory language and structural choices to create meaning beyond mere description.'
};

modelTexts.push(model5, model6, model7);

export const vocabularyBanks: VocabularyBank[] = [
  {
    id: 'vocab-atmosphere',
    theme: 'atmosphere',
    words: [
      {
        word: 'Oppressive',
        definition: 'Weighing heavily on the mind or senses; burdensome and suffocating',
        exampleSentence: 'The oppressive heat of the summer made it difficult to concentrate on her studies.',
        synonyms: ['Stifling', 'Suffocating', 'Burdensome', 'Onerous']
      },
      {
        word: 'Ominous',
        definition: 'Suggesting that something bad or harmful is going to happen',
        exampleSentence: 'The ominous clouds gathering on the horizon made the sailors nervous about the journey ahead.',
        synonyms: ['Foreboding', 'Portentous', 'Sinister', 'Threatening']
      },
      {
        word: 'Ethereal',
        definition: 'Extremely delicate and light in a way that seems not to be of this world',
        exampleSentence: 'The ethereal beauty of the moonlight through the clouds seemed almost magical.',
        synonyms: ['Otherworldly', 'Celestial', 'Ghostly', 'Fragile']
      },
      {
        word: 'Desolate',
        definition: 'Empty, barren, and giving a feeling of isolation or loneliness',
        exampleSentence: 'The desolate landscape offered no shelter or signs of civilization.',
        synonyms: ['Barren', 'Bleak', 'Forsaken', 'Abandoned']
      },
      {
        word: 'Serene',
        definition: 'Calm, peaceful, and untroubled',
        exampleSentence: 'The serene pond reflected the surrounding trees like a mirror.',
        synonyms: ['Tranquil', 'Peaceful', 'Placid', 'Undisturbed']
      },
      {
        word: 'Melancholic',
        definition: 'Pensive sadness, often without a specific cause; thoughtfully sad',
        exampleSentence: 'The melancholic tone of the violin piece evoked a sense of longing and loss.',
        synonyms: ['Wistful', 'Pensive', 'Sorrowful', 'Gloomy']
      },
      {
        word: 'Vibrant',
        definition: 'Full of energy, enthusiasm, and brightness',
        exampleSentence: 'The vibrant market was alive with colour and the sounds of vendors calling out.',
        synonyms: ['Lively', 'Energetic', 'Colourful', 'Vivacious']
      },
      {
        word: 'Austere',
        definition: 'Severe, unadorned, and lacking comfort or luxury',
        exampleSentence: 'The austere monastery contained only the barest necessities for the monks.',
        synonyms: ['Sparse', 'Severe', 'Stark', 'Unadorned']
      },
      {
        word: 'Claustrophobic',
        definition: 'Creating a feeling of being trapped or confined',
        exampleSentence: 'The claustrophobic narrow corridors of the old castle made her feel anxious.',
        synonyms: ['Confining', 'Stifling', 'Cramped', 'Suffocating']
      },
      {
        word: 'Luminous',
        definition: 'Full of or shining with light; glowing',
        exampleSentence: 'The luminous glow of the fireflies created a magical scene in the summer evening.',
        synonyms: ['Glowing', 'Radiant', 'Bright', 'Shining']
      }
    ]
  },
  {
    id: 'vocab-character',
    theme: 'character',
    words: [
      {
        word: 'Tenacious',
        definition: 'Holding firmly to something; determined and persistent',
        exampleSentence: 'Her tenacious grip on the rope saved her from falling.',
        synonyms: ['Persistent', 'Determined', 'Steadfast', 'Unwavering']
      },
      {
        word: 'Mercurial',
        definition: 'Characterized by unpredictable changes in mood or behaviour',
        exampleSentence: 'His mercurial temperament meant that nobody knew whether he would be cheerful or angry.',
        synonyms: ['Volatile', 'Unpredictable', 'Changeable', 'Erratic']
      },
      {
        word: 'Benevolent',
        definition: 'Kind, generous, and showing goodwill towards others',
        exampleSentence: 'The benevolent millionaire donated his entire fortune to charity.',
        synonyms: ['Kind', 'Generous', 'Compassionate', 'Charitable']
      },
      {
        word: 'Obsequious',
        definition: 'Too willing to obey and please others; servile',
        exampleSentence: 'The obsequious servant followed his master\'s every command without question.',
        synonyms: ['Servile', 'Submissive', 'Deferential', 'Sycophantic']
      },
      {
        word: 'Magnanimous',
        definition: 'Generous, noble-minded, and unresentful of others\' success',
        exampleSentence: 'The magnanimous winner congratulated his opponent warmly.',
        synonyms: ['Generous', 'Noble', 'Gracious', 'Forgiving']
      },
      {
        word: 'Intrepid',
        definition: 'Fearless and adventurous; willing to face danger',
        exampleSentence: 'The intrepid explorer ventured into uncharted territory.',
        synonyms: ['Fearless', 'Brave', 'Courageous', 'Daring']
      },
      {
        word: 'Sardonic',
        definition: 'Scornfully mocking or cynical in tone or manner',
        exampleSentence: 'His sardonic comments about the situation were cutting and bitter.',
        synonyms: ['Mocking', 'Cynical', 'Bitter', 'Scornful']
      },
      {
        word: 'Impetuous',
        definition: 'Acting or done suddenly without careful consideration; hasty',
        exampleSentence: 'Her impetuous decision to leave without saying goodbye caused regret later.',
        synonyms: ['Hasty', 'Rash', 'Impulsive', 'Careless']
      },
      {
        word: 'Circumspect',
        definition: 'Careful to consider all circumstances; cautious and prudent',
        exampleSentence: 'He took a circumspect approach to the business deal, examining every detail.',
        synonyms: ['Cautious', 'Wary', 'Careful', 'Prudent']
      },
      {
        word: 'Garrulous',
        definition: 'Talkative or inclined to talk excessively',
        exampleSentence: 'The garrulous shopkeeper chatted with every customer at great length.',
        synonyms: ['Talkative', 'Chatty', 'Verbose', 'Loquacious']
      }
    ]
  },
  {
    id: 'vocab-conflict',
    theme: 'conflict',
    words: [
      {
        word: 'Antagonistic',
        definition: 'Showing active opposition or hostility',
        exampleSentence: 'The antagonistic tone of their debate grew increasingly heated.',
        synonyms: ['Hostile', 'Opposing', 'Aggressive', 'Belligerent']
      },
      {
        word: 'Contentious',
        definition: 'Causing or involving heated debate or argument',
        exampleSentence: 'The contentious issue of climate policy divided the political parties.',
        synonyms: ['Disputed', 'Controversial', 'Debatable', 'Arguable']
      },
      {
        word: 'Acerbic',
        definition: 'Harsh, bitter, or sarcastic in tone or manner',
        exampleSentence: 'Her acerbic remarks cut through the tension in the room.',
        synonyms: ['Bitter', 'Harsh', 'Sharp', 'Caustic']
      },
      {
        word: 'Turbulent',
        definition: 'Characterized by conflict, disorder, or confusion',
        exampleSentence: 'The turbulent period after the revolution brought uncertainty to the nation.',
        synonyms: ['Chaotic', 'Unstable', 'Violent', 'Disordered']
      },
      {
        word: 'Feud',
        definition: 'A prolonged and bitter quarrel between two people, families, or groups',
        exampleSentence: 'The family feud had lasted for generations, with no resolution in sight.',
        synonyms: ['Quarrel', 'Dispute', 'Enmity', 'Animosity']
      },
      {
        word: 'Dissent',
        definition: 'The expression of disagreement or difference of opinion',
        exampleSentence: 'The dissent among the committee members prevented a unified decision.',
        synonyms: ['Disagreement', 'Opposition', 'Objection', 'Protest']
      },
      {
        word: 'Strife',
        definition: 'Angry or bitter disagreement; conflict',
        exampleSentence: 'The strife between the neighbours escalated into a serious legal battle.',
        synonyms: ['Conflict', 'Discord', 'Quarrel', 'Struggle']
      },
      {
        word: 'Schism',
        definition: 'A division or split, especially within a group that was previously unified',
        exampleSentence: 'The schism in the church created two separate congregations.',
        synonyms: ['Divide', 'Split', 'Rupture', 'Breach']
      },
      {
        word: 'Vindictive',
        definition: 'Seeking to harm someone in return for perceived injury; vengeful',
        exampleSentence: 'His vindictive response to criticism showed his willingness to hold grudges.',
        synonyms: ['Vengeful', 'Spiteful', 'Revengeful', 'Malicious']
      },
      {
        word: 'Rebuke',
        definition: 'To express disapproval or scold someone sharply',
        exampleSentence: 'The teacher\'s rebuke of the student\'s behaviour was delivered calmly but firmly.',
        synonyms: ['Reprove', 'Criticise', 'Admonish', 'Scold']
      }
    ]
  },
  {
    id: 'vocab-emotion',
    theme: 'emotion',
    words: [
      {
        word: 'Anguish',
        definition: 'Severe physical or mental pain; torture',
        exampleSentence: 'The anguish in her eyes revealed the depth of her grief.',
        synonyms: ['Agony', 'Torment', 'Suffering', 'Distress']
      },
      {
        word: 'Ecstasy',
        definition: 'Intense joy or delight; a state of overwhelming happiness',
        exampleSentence: 'The goal sent the crowd into ecstasy as they cheered wildly.',
        synonyms: ['Bliss', 'Delight', 'Joy', 'Rapture']
      },
      {
        word: 'Melancholy',
        definition: 'A feeling of pensive sadness, often tinged with thoughtfulness',
        exampleSentence: 'A sense of melancholy hung over the farewell gathering.',
        synonyms: ['Sadness', 'Sorrow', 'Gloom', 'Despondency']
      },
      {
        word: 'Exhilaration',
        definition: 'A feeling of lively and cheerful excitement',
        exampleSentence: 'The exhilaration of winning the race made all the training worthwhile.',
        synonyms: ['Excitement', 'Thrill', 'Elation', 'Euphoria']
      },
      {
        word: 'Consternation',
        definition: 'Feelings of anxiety or dismay; surprise and shock',
        exampleSentence: 'The consternation on the losing team\'s faces showed their disappointment.',
        synonyms: ['Dismay', 'Alarm', 'Anxiety', 'Shock']
      },
      {
        word: 'Longing',
        definition: 'A deep desire or yearning for something, often something absent or unattainable',
        exampleSentence: 'Her eyes held a longing for the home she had left behind.',
        synonyms: ['Yearning', 'Craving', 'Desire', 'Ache']
      },
      {
        word: 'Mortification',
        definition: 'A feeling of severe embarrassment or humiliation',
        exampleSentence: 'His mortification at being corrected in front of everyone was evident.',
        synonyms: ['Embarrassment', 'Humiliation', 'Shame', 'Chagrin']
      },
      {
        word: 'Elation',
        definition: 'High spirits, enthusiasm, and joy',
        exampleSentence: 'The elation of receiving the acceptance letter made her forget all her worries.',
        synonyms: ['Joy', 'Excitement', 'Happiness', 'Euphoria']
      },
      {
        word: 'Nostalgia',
        definition: 'Sentimental longing for the past, often for a period or place',
        exampleSentence: 'A wave of nostalgia washed over her as she looked at old photographs.',
        synonyms: ['Wistfulness', 'Longing', 'Sentimentality', 'Homesickness']
      },
      {
        word: 'Trepidation',
        definition: 'A feeling of fear or anxiety about something that might happen',
        exampleSentence: 'She approached the interview with some trepidation, unsure how well she would perform.',
        synonyms: ['Fear', 'Anxiety', 'Apprehension', 'Dread']
      }
    ]
  },
  {
    id: 'vocab-settings',
    theme: 'settings',
    words: [
      {
        word: 'Decrepit',
        definition: 'In a state of disrepair or deterioration due to age',
        exampleSentence: 'The decrepit mansion stood abandoned, its windows broken and walls crumbling.',
        synonyms: ['Dilapidated', 'Deteriorated', 'Crumbling', 'Decaying']
      },
      {
        word: 'Verdant',
        definition: 'Green with vegetation; lush and full of green growth',
        exampleSentence: 'The verdant hillsides rolled away toward distant mountains.',
        synonyms: ['Lush', 'Green', 'Fertile', 'Overgrown']
      },
      {
        word: 'Labyrinthine',
        definition: 'Complicated and difficult to navigate or understand',
        exampleSentence: 'The labyrinthine corridors of the castle made it easy to get lost.',
        synonyms: ['Maze-like', 'Winding', 'Complex', 'Convoluted']
      },
      {
        word: 'Pristine',
        definition: 'In its original condition; untouched and perfectly clean',
        exampleSentence: 'The pristine beach had never been visited by tourists.',
        synonyms: ['Immaculate', 'Perfect', 'Unspoiled', 'Untouched']
      },
      {
        word: 'Cavernous',
        definition: 'Very large, spacious, and cave-like',
        exampleSentence: 'The cavernous hall echoed with footsteps as they walked across it.',
        synonyms: ['Vast', 'Spacious', 'Hollow', 'Echoing']
      },
      {
        word: 'Squalid',
        definition: 'Sordid, unclean, and neglected; wretched conditions',
        exampleSentence: 'The squalid conditions in the slum were shocking and inhumane.',
        synonyms: ['Filthy', 'Dirty', 'Grimy', 'Miserable']
      },
      {
        word: 'Immaculate',
        definition: 'Spotlessly clean; perfectly neat and tidy',
        exampleSentence: 'Her bedroom was immaculate, with everything organized in its proper place.',
        synonyms: ['Clean', 'Spotless', 'Pristine', 'Neat']
      },
      {
        word: 'Cramped',
        definition: 'Uncomfortably small or limited in space',
        exampleSentence: 'The cramped apartment barely had room for a bed and a chair.',
        synonyms: ['Confined', 'Tight', 'Claustrophobic', 'Narrow']
      },
      {
        word: 'Sprawling',
        definition: 'Spreading out over a wide area or large territory',
        exampleSentence: 'The sprawling estate included forests, meadows, and several lakes.',
        synonyms: ['Extensive', 'Vast', 'Expansive', 'Widespread']
      },
      {
        word: 'Derelict',
        definition: 'Abandoned and left to deteriorate; neglected',
        exampleSentence: 'The derelict factory had been empty for decades, its machinery rusting away.',
        synonyms: ['Abandoned', 'Neglected', 'Ruined', 'Forsaken']
      }
    ]
  }
];
