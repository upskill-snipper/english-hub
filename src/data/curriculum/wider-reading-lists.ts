export interface WiderReadingEntry {
  id: string;
  title: string;
  author: string;
  yearGroup: string | string[];
  genre: 'fiction' | 'non-fiction' | 'poetry' | 'play' | 'short-story' | 'essay' | 'biography' | 'graphic-novel';
  difficulty: 'accessible' | 'on-level' | 'challenging';
  synopsis: string;
  whyRecommended: string;
  curriculumLink: string;
  themes: string[];
  discussionQuestions: string[];
}

export const widerReadingList: WiderReadingEntry[] = [
  // ─── Year 7 (10 entries) ────────────────────────────────────────────────────
  {
    id: 'wr-y7-001',
    title: 'Wonder',
    author: 'R. J. Palacio',
    yearGroup: 'Y7',
    genre: 'fiction',
    difficulty: 'accessible',
    synopsis:
      'August Pullman was born with a facial difference. Starting middle school for the first time, he must navigate friendship, cruelty, and belonging in a world that cannot stop staring.',
    whyRecommended:
      'An ideal entry-point text for Y7: first-person voice is clear and immediate, and the multiple-perspective structure models how different characters experience the same events differently.',
    curriculumLink:
      'Supports Y7 Identity and Voice unit; links to narrative perspective and characterisation.',
    themes: ['identity', 'belonging', 'kindness', 'disability', 'bullying', 'family'],
    discussionQuestions: [
      'How does Palacio use multiple narrators to change your sympathy for different characters?',
      'What does the novel suggest about the difference between looking "normal" and being treated normally?',
      'Choose a scene from a minor character\'s point of view and consider what it adds to the main story.',
    ],
  },
  {
    id: 'wr-y7-002',
    title: "Kensuke's Kingdom",
    author: 'Michael Morpurgo',
    yearGroup: 'Y7',
    genre: 'fiction',
    difficulty: 'accessible',
    synopsis:
      'After falling overboard during a family sailing trip, twelve-year-old Michael is washed up on a remote island and discovers he is not alone. Kensuke, an elderly Japanese soldier, has lived there since the Second World War.',
    whyRecommended:
      'A concise survival narrative with a powerful historical subplot. Accessible vocabulary and short chapters make it ideal for building reading stamina.',
    curriculumLink:
      'Links to Y7 reading for meaning work on setting and atmosphere; connects to history curriculum on the Pacific War.',
    themes: ['survival', 'friendship', 'war', 'isolation', 'loyalty', 'forgiveness'],
    discussionQuestions: [
      'How does Morpurgo create a sense of danger and wonder through his descriptions of the island?',
      'Why does Kensuke refuse to leave the island, and what does this reveal about his character?',
      'How does the relationship between Michael and Kensuke change over the course of the novel?',
    ],
  },
  {
    id: 'wr-y7-003',
    title: 'Holes',
    author: 'Louis Sachar',
    yearGroup: 'Y7',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      'Stanley Yelnats is sent to a juvenile detention camp where boys are forced to dig holes in the desert. Three interwoven timelines gradually reveal a family curse and a buried secret.',
    whyRecommended:
      'The multi-strand narrative is a superb model for structural analysis. The novel rewards re-reading and teaches students to track motifs and foreshadowing.',
    curriculumLink:
      'Supports structural and language analysis; links to social justice themes in the Y7 non-fiction writing unit.',
    themes: ['justice', 'fate', 'racism', 'friendship', 'family legacy', 'redemption'],
    discussionQuestions: [
      'How does Sachar use the three timelines to create suspense and reveal theme?',
      'In what ways is the camp a symbol for wider injustice in society?',
      'How does the concept of "holes" function as both a literal and metaphorical device?',
    ],
  },
  {
    id: 'wr-y7-004',
    title: 'Skellig',
    author: 'David Almond',
    yearGroup: 'Y7',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      'Michael discovers a strange, fragile creature in the crumbling garage of his new house. As his baby sister fights for her life in hospital, Michael and his new friend Mina care for the mysterious being called Skellig.',
    whyRecommended:
      "Almond's sparse, lyrical prose is ideal for exploring figurative language. The novel blurs realism and the supernatural, prompting rich debates about interpretation.",
    curriculumLink:
      'Closely linked to Y7 writing for atmosphere; supports work on ambiguity and symbolic language.',
    themes: ['life and death', 'hope', 'the supernatural', 'nature', 'education', 'family'],
    discussionQuestions: [
      'What might Skellig symbolise? Is it important that readers agree on one interpretation?',
      "How does Almond use Michael's house and garage to reflect his emotional state?",
      "Compare Mina's home-schooling philosophy with formal education. Which does the novel seem to favour?",
    ],
  },
  {
    id: 'wr-y7-005',
    title: 'A Monster Calls',
    author: 'Patrick Ness',
    yearGroup: 'Y7',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "Conor is visited at 12:07 every night by a monstrous, ancient yew tree. The monster tells stories and demands one thing in return: the truth. Meanwhile, Conor's mother is dying and his real nightmare is the one he will not admit.",
    whyRecommended:
      'Explores grief with remarkable honesty. The fairy-tale structure within a realistic frame is an excellent model for analysing how form creates meaning.',
    curriculumLink:
      'Supports Y7 and Y8 work on form and structure; links to emotional literacy and the purpose of storytelling.',
    themes: ['grief', 'truth', 'guilt', 'stories', 'loss', 'courage'],
    discussionQuestions: [
      "Why does the monster insist on 'the truth' and why is it so hard for Conor to speak it?",
      'How do the three stories the monster tells relate to Conor\'s situation?',
      'What does the novel suggest about the function of stories in helping us cope with pain?',
    ],
  },
  {
    id: 'wr-y7-006',
    title: 'Coram Boy',
    author: 'Jamila Gavin',
    yearGroup: 'Y7',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      'Set in eighteenth-century England, the novel follows the intertwined fates of two boys -- one the illegitimate son of a nobleman, the other a slave -- as they navigate the brutal world of child abandonment and the Coram Hospital for Foundlings.',
    whyRecommended:
      'Provides historical depth and diverse representation rarely found in period fiction. The complex dual narrative builds skills in tracking parallel plots.',
    curriculumLink:
      'Links to Y7 history curriculum on the slave trade; supports work on narrative perspective and historical context.',
    themes: ['slavery', 'class', 'childhood', 'music', 'cruelty', 'rescue'],
    discussionQuestions: [
      'How does Gavin use the contrast between the two boys to explore class and race in Georgian England?',
      'What role does music play in the novel and what does it represent?',
      'How does the historical setting affect your response to the moral dilemmas characters face?',
    ],
  },
  {
    id: 'wr-y7-007',
    title: 'The Curious Incident of the Dog in the Night-Time',
    author: 'Mark Haddon',
    yearGroup: 'Y7',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      'Fifteen-year-old Christopher, who has a form of autism, investigates the murder of his neighbour\'s dog. His literal, logical narration gradually uncovers secrets about his own family.',
    whyRecommended:
      "An outstanding example of unreliable first-person narration. The novel challenges students to read 'between the lines' and consider what Christopher cannot understand about his own story.",
    curriculumLink:
      'Supports Y7 and Y8 work on narrative voice and unreliable narrators; links to PSHE on neurodiversity.',
    themes: ['neurodiversity', 'truth', 'family', 'trust', 'logic vs emotion', 'independence'],
    discussionQuestions: [
      'In what ways is Christopher an unreliable narrator, and how does Haddon signal this to us?',
      'How does the novel ask us to question what "normal" means?',
      'What is the effect of the mathematical diagrams and lists on the reading experience?',
    ],
  },
  {
    id: 'wr-y7-008',
    title: 'Persepolis',
    author: 'Marjane Satrapi',
    yearGroup: 'Y7',
    genre: 'graphic-novel',
    difficulty: 'on-level',
    synopsis:
      'A graphic memoir depicting Satrapi\'s childhood in Iran during and after the Islamic Revolution. She traces her family\'s resistance, her own rebellious spirit, and her eventual exile to Europe.',
    whyRecommended:
      'Introduces students to memoir and graphic narrative simultaneously. The interplay of image and text is an excellent model for exploring how visual and verbal choices create meaning.',
    curriculumLink:
      'Supports multimodal reading; links to world history curriculum and Y7 non-fiction writing.',
    themes: ['revolution', 'identity', 'religion', 'exile', 'freedom', 'growing up'],
    discussionQuestions: [
      'How does Satrapi use black-and-white images rather than colour to convey mood?',
      "How does a child's perspective change the way we understand political events?",
      'What does Persepolis suggest about the relationship between personal identity and national identity?',
    ],
  },
  {
    id: 'wr-y7-009',
    title: 'The Boy in the Striped Pyjamas',
    author: 'John Boyne',
    yearGroup: 'Y7',
    genre: 'fiction',
    difficulty: 'accessible',
    synopsis:
      "Nine-year-old Bruno, the son of a Nazi commandant, befriends Shmuel, a Jewish boy on the other side of the fence at 'Out-With' (Auschwitz). Neither boy fully understands what separates them.",
    whyRecommended:
      "The naive narrator device creates powerful dramatic irony. The novel is an accessible introduction to the Holocaust and provokes debate about the limits of a child's perspective.",
    curriculumLink:
      'Links to Y7 and Y8 history curriculum on the Holocaust; supports work on dramatic irony and perspective.',
    themes: ['innocence', 'prejudice', 'friendship', 'the Holocaust', 'complicity', 'family'],
    discussionQuestions: [
      'Why does Boyne choose a naive German child as his narrator? What does this gain and what does it risk?',
      'How does dramatic irony work in this novel? Choose a scene where you knew more than Bruno.',
      'Some critics argue the novel trivialises the Holocaust. Do you agree or disagree, and why?',
    ],
  },
  {
    id: 'wr-y7-010',
    title: 'Noughts and Crosses',
    author: 'Malorie Blackman',
    yearGroup: 'Y7',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "In an alternate Britain, dark-skinned Crosses hold all political power while pale-skinned Noughts are second-class citizens. Sephy (Cross) and Callum (Nought) fall in love across society's deepest divide.",
    whyRecommended:
      'The inverted racial hierarchy is a masterclass in using speculative fiction to explore real-world racism. The Romeo and Juliet structure makes cross-curricular comparison fruitful.',
    curriculumLink:
      'Supports Y7 identity unit; links to Shakespeare at Y8/Y9 and discussions of structural racism.',
    themes: ['racism', 'power', 'forbidden love', 'inequality', 'resistance', 'privilege'],
    discussionQuestions: [
      'How does reversing the racial hierarchy make readers reconsider their own assumptions about race?',
      'Compare Callum and Sephy\'s relationship to other "star-crossed lovers" you have encountered.',
      'What does the novel suggest about the personal costs of systemic inequality?',
    ],
  },

  // ─── Year 8 (10 entries) ────────────────────────────────────────────────────
  {
    id: 'wr-y8-001',
    title: 'Lord of the Flies',
    author: 'William Golding',
    yearGroup: 'Y8',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      'A group of British schoolboys stranded on a desert island attempt to govern themselves, but civilisation rapidly collapses into savagery and violence as power struggles overtake cooperation.',
    whyRecommended:
      'A foundational text for studying allegory and symbolism. The novel raises questions about human nature that students will revisit at GCSE and A-level.',
    curriculumLink:
      'Bridges to Y9 and GCSE social/political themes; supports extended analytical writing on allegorical texts.',
    themes: ['civilisation vs savagery', 'power', 'fear', 'leadership', 'human nature', 'loss of innocence'],
    discussionQuestions: [
      'What does Golding suggest about whether evil is innate or socially constructed?',
      'How do the symbolic objects (the conch, Piggy\'s glasses, the beast) develop the allegory?',
      'Is Ralph\'s leadership ever truly democratic? Support your answer with evidence from the text.',
    ],
  },
  {
    id: 'wr-y8-002',
    title: 'The Outsiders',
    author: 'S. E. Hinton',
    yearGroup: 'Y8',
    genre: 'fiction',
    difficulty: 'accessible',
    synopsis:
      'Fourteen-year-old Ponyboy Curtis belongs to the Greasers, a gang of working-class boys in 1960s Oklahoma. When a violent confrontation with the rival Socs leads to tragedy, Ponyboy must question loyalty, class, and what it means to be good.',
    whyRecommended:
      'Written by a teenager, the novel\'s authentic voice resonates strongly with Y8 readers. It is ideal for exploring class, masculinity, and the pressure to conform.',
    curriculumLink:
      'Links to Y8 social justice writing unit and work on voice; bridges to GCSE themes of conflict and community.',
    themes: ['class', 'loyalty', 'masculinity', 'violence', 'belonging', 'growing up'],
    discussionQuestions: [
      "How does Hinton use Ponyboy's love of literature and sunsets to complicate the 'tough gang member' stereotype?",
      'What does the novel suggest about whether social class determines a person\'s character?',
      "Compare the Greasers' code of loyalty to the values promoted by the Socs.",
    ],
  },
  {
    id: 'wr-y8-003',
    title: "Ender's Game",
    author: 'Orson Scott Card',
    yearGroup: 'Y8',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      'Child prodigy Ender Wiggin is recruited into a military academy to be trained as the commander who will save humanity from an alien invasion -- but the real battle may not be the one he is prepared for.',
    whyRecommended:
      'A gripping science-fiction novel that raises profound ethical questions about ends and means, the manipulation of children, and what it costs to be exceptional.',
    curriculumLink:
      'Supports Y8 persuasive writing unit on ethics; links to debates about childhood, consent, and authority.',
    themes: ['manipulation', 'genius', 'ethics of war', 'childhood', 'isolation', 'empathy'],
    discussionQuestions: [
      'Are the adults in the novel justified in deceiving Ender for the greater good?',
      'How does Ender\'s ability to understand his enemies relate to the novel\'s ending?',
      'What does the novel suggest about the relationship between violence and intelligence?',
    ],
  },
  {
    id: 'wr-y8-004',
    title: 'I Am Malala',
    author: 'Malala Yousafzai with Christina Lamb',
    yearGroup: 'Y8',
    genre: 'biography',
    difficulty: 'on-level',
    synopsis:
      "Malala Yousafzai's memoir recounts her childhood in the Swat Valley, her family's fight for girls' education, the Taliban's growing control, and the day she was shot on her school bus -- and how she survived to become a global advocate for education.",
    whyRecommended:
      "A powerful non-fiction counterpart to fictional dystopias studied at Y8. Malala's voice is direct and compelling; the memoir develops students' skills in reading for purpose and bias.",
    curriculumLink:
      "Links to Y8 non-fiction reading and writing; supports work on rhetoric and the memoir form; connects to PSHE on girls' rights.",
    themes: ["girls' education", 'courage', 'Taliban', 'family', 'global justice', 'voice'],
    discussionQuestions: [
      'How does Malala use personal anecdote to engage the reader with a political argument?',
      'What rhetorical techniques does she use in her speeches and how are they reflected in the memoir?',
      "Compare her father's role as a mentor with the obstacles placed by the Taliban. What does this suggest about who controls women's education?",
    ],
  },
  {
    id: 'wr-y8-005',
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank',
    yearGroup: 'Y8',
    genre: 'non-fiction',
    difficulty: 'on-level',
    synopsis:
      "Anne Frank's diary, kept while hiding with her family in a concealed apartment in Nazi-occupied Amsterdam, documents two years of claustrophobic life, adolescent development, and hope in the face of genocide.",
    whyRecommended:
      'An essential historical primary source that demonstrates the power of private writing as testimony. The diary form provides a model for genuine, unmediated voice.',
    curriculumLink:
      'Complements Y8 history curriculum on the Holocaust; supports non-fiction reading and diary/personal writing.',
    themes: ['the Holocaust', 'adolescence', 'hope', 'confinement', 'identity', 'persecution'],
    discussionQuestions: [
      'What is the effect of reading history through a personal diary rather than a history textbook?',
      "How does Anne's tone shift throughout the diary and what does this reveal about her development?",
      'Why do you think this diary has become one of the most widely read accounts of the Second World War?',
    ],
  },
  {
    id: 'wr-y8-006',
    title: 'To Kill a Mockingbird (abridged)',
    author: 'Harper Lee',
    yearGroup: 'Y8',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "Scout Finch narrates life in 1930s Alabama as her father Atticus, a lawyer, defends Tom Robinson, a Black man wrongly accused of raping a white woman. Seen through a child's eyes, the novel exposes the deep injustice of racial segregation.",
    whyRecommended:
      "Using an abridged edition, Y8 students can engage with one of the central texts in the Western literary tradition. Scout's child perspective makes complex injustice accessible without simplifying it.",
    curriculumLink:
      'Bridges to IGCSE and GCSE thematic study of justice, race, and moral courage; supports work on narrative perspective.',
    themes: ['racial injustice', 'moral courage', 'innocence', 'class', 'empathy', 'the American South'],
    discussionQuestions: [
      "How does Scout's perspective as a child shape what she understands and misunderstands about the trial?",
      'What does Atticus mean when he tells Scout to climb into someone else\'s skin and walk around in it?',
      'Why does Boo Radley matter to the novel\'s themes despite appearing so rarely?',
    ],
  },
  {
    id: 'wr-y8-007',
    title: 'Kindred (extract)',
    author: 'Octavia E. Butler',
    yearGroup: 'Y8',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "Dana, a Black woman living in 1970s California, is repeatedly pulled back in time to a pre-Civil War Maryland plantation where she must protect the white ancestor whose survival ensures her own existence. The opening chapters are used as an extract.",
    whyRecommended:
      "Butler's time-slip structure makes the brutality of slavery viscerally present for contemporary readers. The extract is an outstanding model of gripping narrative opening and genre subversion.",
    curriculumLink:
      'Supports Y8 science fiction and speculative writing; links to history on slavery and to IGCSE reading for meaning.',
    themes: ['slavery', 'race', 'power', 'survival', 'time', 'complicity'],
    discussionQuestions: [
      "How does Butler use the science-fiction device of time travel to comment on America's relationship with its history of slavery?",
      "What is the significance of Dana's 20th-century perspective when she arrives in the antebellum South?",
      'How does the extract create tension in its opening pages? Identify specific language techniques.',
    ],
  },
  {
    id: 'wr-y8-008',
    title: 'Brave New World (introductory chapters)',
    author: 'Aldous Huxley',
    yearGroup: 'Y8',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "In a future World State, humans are engineered and conditioned from birth. Happiness is enforced through pleasure and the drug soma. The opening chapters introducing the Hatchery and the conditioning process are studied as an extract.",
    whyRecommended:
      "Huxley's chilling vision of a 'perfect' society introduces students to satirical dystopia and prepares them for 1984 and GCSE/A-level study of dystopian fiction.",
    curriculumLink:
      'Bridges to Y9 and GCSE dystopia; supports work on satirical intent and the techniques of speculative world-building.',
    themes: ['freedom', 'happiness', 'conditioning', 'individuality', 'consumerism', 'science'],
    discussionQuestions: [
      "What is disturbing about the World State's claim to have created the perfect society?",
      'How does Huxley use scientific language and jargon to create a sense of dehumanisation?',
      "Compare the World State's methods of control to the tactics used by the Party in 1984.",
    ],
  },
  {
    id: 'wr-y8-009',
    title: 'Nineteen Eighty-Four (introductory chapters)',
    author: 'George Orwell',
    yearGroup: 'Y8',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "Winston Smith lives in Airstrip One under the totalitarian surveillance of Big Brother. The opening chapters establishing the world of Oceania, Newspeak, and the Ministry of Truth are studied as an extract.",
    whyRecommended:
      "Orwell's political vocabulary -- doublethink, Newspeak, the memory hole -- has become essential cultural literacy. The opening chapters are accessible enough for Y8 while the ideas are richly complex.",
    curriculumLink:
      'Core preparation for GCSE and A-level dystopian study; supports language analysis of political rhetoric.',
    themes: ['totalitarianism', 'surveillance', 'truth', 'language and power', 'memory', 'freedom'],
    discussionQuestions: [
      "How does Orwell use the physical description of Winston's world to convey oppression?",
      "What is 'doublethink' and can you find examples of it in contemporary political language?",
      "Why does the Party want to control language? What is the relationship between language and thought?",
    ],
  },
  {
    id: 'wr-y8-010',
    title: 'Animal Farm',
    author: 'George Orwell',
    yearGroup: 'Y8',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "The animals of Manor Farm overthrow their human farmer and establish a republic based on equality. But as the pigs consolidate power, the founding commandments are quietly rewritten and the revolution betrays its own ideals.",
    whyRecommended:
      "A compact, accessible political allegory ideal for Y8. It teaches students to read on two levels simultaneously and prepares them for more complex allegorical texts at GCSE.",
    curriculumLink:
      'Directly supports Y8 rhetoric and propaganda unit; links to history curriculum on the Russian Revolution.',
    themes: ['power and corruption', 'propaganda', 'revolution', 'equality', 'language', 'betrayal'],
    discussionQuestions: [
      "How does Orwell use the animals' different abilities and characteristics to represent different social groups?",
      "Track how the commandment 'All animals are equal' is gradually corrupted. What does this suggest about political language?",
      'Is Boxer a sympathetic or a cautionary figure? What does he represent?',
    ],
  },

  // ─── Year 9 (10 entries) ────────────────────────────────────────────────────
  {
    id: 'wr-y9-001',
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
    yearGroup: 'Y9',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "Kathy, Ruth, and Tommy grow up at Hailsham, an idyllic English boarding school. Only gradually does Ishiguro reveal that these children have been created as organ donors and their lives are carefully predetermined.",
    whyRecommended:
      "Ishiguro's understated, elliptical prose is a masterclass in what is left unsaid. The novel is an ideal GCSE bridge text for practising inference, tone, and thematic analysis.",
    curriculumLink:
      'Bridges to GCSE and A-level; supports Y9 work on inference, narrative voice, and ethical debates in science.',
    themes: ['mortality', 'ethics of science', 'memory', 'acceptance', 'humanity', 'loss'],
    discussionQuestions: [
      'Why do Kathy and her friends never rebel? What does their passivity suggest about conditioning and free will?',
      "How does Ishiguro's use of an adult narrator looking back affect the novel's emotional tone?",
      'What does the novel ask us to consider about what makes a life meaningful?',
    ],
  },
  {
    id: 'wr-y9-002',
    title: 'The Road',
    author: 'Cormac McCarthy',
    yearGroup: 'Y9',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "A father and son travel through a post-apocalyptic American wasteland, carrying 'the fire' of humanity in a world stripped of all colour and civilisation. They must decide each day whether goodness is possible or even meaningful.",
    whyRecommended:
      "McCarthy's radical prose style -- no speech marks, minimal punctuation, stripped sentences -- is a powerful model for Y9 students studying how form enacts meaning.",
    curriculumLink:
      'Supports Y9 writing craft module; links to GCSE and IAL dystopian and existential themes.',
    themes: ['survival', 'fatherhood', 'morality', 'hope', 'violence', 'the end of the world'],
    discussionQuestions: [
      "What is the effect of McCarthy's stripped-back prose style on the reading experience?",
      "What does 'carrying the fire' mean, and how does it function as a symbol throughout the novel?",
      'Is the father a moral hero or does the novel complicate this reading?',
    ],
  },
  {
    id: 'wr-y9-003',
    title: 'Purple Hibiscus',
    author: 'Chimamanda Ngozi Adichie',
    yearGroup: 'Y9',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "Fifteen-year-old Kambili lives under her devout, authoritarian father's strict rule in post-colonial Nigeria. A visit to her aunt's joyful, liberated household opens her eyes to what life could be.",
    whyRecommended:
      "Adichie's lyrical prose and structurally confident debut explores religion, domestic violence, and post-colonial identity with great nuance. An essential text for diversifying the Y9 canon.",
    curriculumLink:
      'Supports Y9 global voices reading strand; links to IGCSE and A-level postcolonial literature study.',
    themes: ['religion', 'domestic abuse', 'freedom', 'post-colonial Nigeria', 'silence', 'coming of age'],
    discussionQuestions: [
      'How does Adichie use silence and voice as recurring motifs to track Kambili\'s development?',
      'What is the significance of the purple hibiscus flowers in the novel?',
      "How does Eugene's Catholicism coexist with his abuse, and what does this reveal about religious hypocrisy?",
    ],
  },
  {
    id: 'wr-y9-004',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    yearGroup: 'Y9',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "Okonkwo is a proud warrior and leader in the Igbo community of Umuofia. When British missionaries and colonial administrators arrive, his world and his identity are systematically dismantled.",
    whyRecommended:
      "Achebe wrote this novel explicitly to challenge the Eurocentric representation of Africa in texts like Conrad's Heart of Darkness. It is essential reading for understanding postcolonial counter-narrative.",
    curriculumLink:
      'Core postcolonial text bridging to IGCSE and A-level; supports Y9 work on narrative perspective and cultural context.',
    themes: ['colonialism', 'masculinity', 'tradition vs change', 'fate', 'pride', 'community'],
    discussionQuestions: [
      'How does Achebe present Igbo culture with complexity and dignity to counter colonial stereotypes?',
      "Is Okonkwo a tragic hero in the classical sense? Compare his 'fatal flaw' to characters from other texts.",
      'What does the title, taken from a Yeats poem, suggest about the novel\'s themes?',
    ],
  },
  {
    id: 'wr-y9-005',
    title: 'Great Expectations',
    author: 'Charles Dickens',
    yearGroup: 'Y9',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "Pip, a poor orphan, is lifted into the middle classes by a mysterious benefactor. His obsession with becoming a gentleman and winning the love of Estella leads him to neglect his true friends and values.",
    whyRecommended:
      "One of the great novels of social mobility and self-deception. Y9 study of this text builds the extended reading stamina and contextual knowledge essential for GCSE.",
    curriculumLink:
      'Direct bridge to GCSE Victorian literature study; supports work on social context, irony, and character development across a long narrative.',
    themes: ['social class', 'ambition', 'guilt', 'love and obsession', 'Victorian England', 'identity'],
    discussionQuestions: [
      "How does Dickens use the marshes and Satis House as symbolic settings that reflect Pip's psychology?",
      "Is Miss Havisham a villain, a victim, or both? Consider how Dickens invites us to judge her.",
      'What does the novel suggest about the true meaning of being a gentleman?',
    ],
  },
  {
    id: 'wr-y9-006',
    title: 'The Color Purple',
    author: 'Alice Walker',
    yearGroup: 'Y9',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "Celie, a young Black woman in the American Deep South, writes letters to God and her sister Nettie as she endures poverty, abuse, and oppression. Through the love of women around her, she finds her voice and her freedom.",
    whyRecommended:
      "Walker's use of vernacular dialect as a literary device is an important model. The epistolary form and the question of who controls narrative are central A-level concerns introduced here.",
    curriculumLink:
      'Supports Y9 extended writing; bridges to IGCSE and A-level feminist and African-American literary study.',
    themes: ['abuse', 'female solidarity', 'race', 'spirituality', 'voice', 'liberation'],
    discussionQuestions: [
      "What is the effect of Walker's choice to write in Celie's own dialect rather than 'correcting' her speech?",
      'How does the relationship between Celie and Shug Avery change Celie\'s understanding of herself and God?',
      "Compare the conditions of Celie's life in America with what Nettie describes in Africa. What parallels does Walker draw?",
    ],
  },
  {
    id: 'wr-y9-007',
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    yearGroup: 'Y9',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "Billy Pilgrim, an American soldier who survived the firebombing of Dresden in 1945, becomes 'unstuck in time', moving randomly between his past, present, and an alien planet. Vonnegut's anti-war novel is also a meditation on trauma.",
    whyRecommended:
      "The novel's non-linear structure and dark humour are ideal for Y9 students ready to explore experimental form. It bridges directly to IAL Unit 1 work on war writing and literary techniques.",
    curriculumLink:
      'Bridges to A-level war literature; supports Y9 work on non-linear narrative and the representation of trauma.',
    themes: ['war', 'trauma', 'free will', 'death', 'dark humour', 'time'],
    discussionQuestions: [
      "What is the effect of Vonnegut's non-linear structure on your experience of the war narrative?",
      "What does 'So it goes' mean, and what is the cumulative effect of its repetition?",
      'How does the novel use dark comedy to approach the unspeakable? Is this an effective strategy?',
    ],
  },
  {
    id: 'wr-y9-008',
    title: "The Handmaid's Tale (introductory section)",
    author: 'Margaret Atwood',
    yearGroup: 'Y9',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "In the theocratic Republic of Gilead, women are stripped of all rights and reduced to reproductive function. Offred, a Handmaid, recounts her daily life and her suppressed resistance in a near-future America. The opening section is studied as an extract.",
    whyRecommended:
      "Atwood's dystopia is the defining feminist speculative text of the twentieth century. The opening section introduces students to Atwood's meticulous world-building before full study at IGCSE or A-level.",
    curriculumLink:
      "Bridges to IGCSE and A-level feminist dystopia; supports Y9 work on context and women's rights.",
    themes: ['gender', 'totalitarianism', 'fertility', 'resistance', 'language', 'memory'],
    discussionQuestions: [
      "How does Atwood create a sense of menace through description of ordinary, domestic space?",
      'What is the significance of names and naming in Gilead?',
      "How does Offred's narration make her both a reliable and an unreliable witness?",
    ],
  },
  {
    id: 'wr-y9-009',
    title: 'Beloved (extract)',
    author: 'Toni Morrison',
    yearGroup: 'Y9',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "Sethe, a formerly enslaved woman living in post-Civil War Ohio, is haunted -- literally and psychologically -- by the ghost of the baby daughter she killed to save from slavery. The opening chapter and the scene of Beloved's return are studied as extracts.",
    whyRecommended:
      "Morrison's novel is widely regarded as one of the greatest American novels. Studying extracts at Y9 builds the analytical vocabulary needed for the full text at IGCSE or A-level.",
    curriculumLink:
      'Bridges to A-level American literature; supports Y9 work on Gothic conventions and the representation of trauma.',
    themes: ['slavery', 'motherhood', 'trauma', 'memory', 'haunting', 'freedom'],
    discussionQuestions: [
      "How does Morrison use the Gothic convention of the ghost to explore the psychological legacy of slavery?",
      "What does the novel suggest about the relationship between memory and identity?",
      "Why might Morrison describe the novel as 'not a story to pass on'? What does this paradox mean?",
    ],
  },
  {
    id: 'wr-y9-010',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    yearGroup: 'Y9',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "Two displaced ranch workers, the intellectually limited Lennie and his pragmatic companion George, cling to their dream of owning land during the Great Depression -- until a tragic accident makes that dream impossible.",
    whyRecommended:
      "A structurally precise, thematically rich novella that is ideal for close study at the GCSE bridge stage. Every detail is purposeful; students learn to read economical prose with analytical precision.",
    curriculumLink:
      'Core preparation for GCSE English Literature; the novella appears on several specifications and bridges directly to exam technique.',
    themes: ['the American Dream', 'friendship', 'loneliness', 'disability', 'power', 'the Great Depression'],
    discussionQuestions: [
      "How does Steinbeck use Crooks, Candy, and Curley's wife to explore the different faces of loneliness?",
      "Is George's final act one of love, mercy, or betrayal? Can it be all three simultaneously?",
      'How does the circular structure of the novel -- opening and closing at the pool -- affect its meaning?',
    ],
  },

  // ─── IGCSE (10 entries) ─────────────────────────────────────────────────────
  {
    id: 'wr-igcse-001',
    title: 'Mrs Dalloway',
    author: 'Virginia Woolf',
    yearGroup: 'IGCSE',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "Clarissa Dalloway prepares for a party she is hosting that evening in 1920s London. The novel's stream-of-consciousness narration moves between Clarissa's social world and Septimus Warren Smith, a shell-shocked war veteran, whose stories converge.",
    whyRecommended:
      "Woolf's formal experimentation with interior monologue and the compression of an entire life into a single day is central to the modernist canon. Essential for any student studying 20th-century prose.",
    curriculumLink:
      'IGCSE and A-level modernist prose; supports analysis of stream-of-consciousness technique and dual narrative structure.',
    themes: ['time', 'memory', 'mental health', 'gender', 'class', 'post-war society'],
    discussionQuestions: [
      "How does Woolf use the stream-of-consciousness technique to explore the relationship between external events and inner life?",
      'What is the significance of the structural parallel between Clarissa and Septimus?',
      "How does Woolf use London's cityscape as a reflection of the social hierarchies of 1920s Britain?",
    ],
  },
  {
    id: 'wr-igcse-002',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearGroup: 'IGCSE',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "Nick Carraway narrates the story of his mysterious neighbour Jay Gatsby, whose lavish parties and obsessive pursuit of the dream of wealth and Daisy Buchanan embody and ultimately expose the corruption of the American Dream.",
    whyRecommended:
      "A concise, formally crafted novel that rewards close reading at every level -- symbol, narrative perspective, social satire. It is one of the most analysed texts in English literature.",
    curriculumLink:
      'IGCSE and A-level American literature; supports sustained close reading of symbolic language and narrative technique.',
    themes: ['the American Dream', 'class', 'obsession', 'the 1920s', 'illusion vs reality', 'moral corruption'],
    discussionQuestions: [
      'What does the green light at the end of the Buchanans\' dock symbolise, and how does its meaning shift?',
      'Nick claims to be one of the few honest people he has ever known. Is this claim supported by the text?',
      'What does the Valley of Ashes represent, and why does Fitzgerald place it between West Egg and New York?',
    ],
  },
  {
    id: 'wr-igcse-003',
    title: 'Beloved',
    author: 'Toni Morrison',
    yearGroup: 'IGCSE',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "Sethe, a formerly enslaved woman, is haunted by the ghost of her dead daughter. When the ghost takes physical form as a young woman called Beloved, the unresolved trauma of slavery threatens to consume the living.",
    whyRecommended:
      "Widely considered Morrison's masterpiece and one of the greatest American novels. Its fusion of Gothic, historical, and African oral traditions demands and rewards the highest levels of literary analysis.",
    curriculumLink:
      'IGCSE and A-level; core text for African-American literature, Gothic mode, and trauma writing.',
    themes: ['slavery', 'motherhood', 'trauma', 'memory', 'community', 'haunting'],
    discussionQuestions: [
      "How does Morrison blend realistic and supernatural elements to create the novel's unique atmosphere?",
      "Analyse Morrison's stream-of-consciousness prose in the chapter beginning 'I am Beloved.' What does this passage reveal?",
      'How does the community of ex-enslaved people function both as a source of support and a source of judgment for Sethe?',
    ],
  },
  {
    id: 'wr-igcse-004',
    title: 'Their Eyes Were Watching God',
    author: 'Zora Neale Hurston',
    yearGroup: 'IGCSE',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "Janie Crawford recounts three marriages and her journey toward self-discovery in the Black communities of early 20th-century Florida. Her story is framed as a tale told to a friend on the evening she returns to her hometown.",
    whyRecommended:
      "Hurston's use of African-American vernacular dialect as a literary form equal to Standard English is groundbreaking. The novel is essential for studying voice, gender, and the Harlem Renaissance.",
    curriculumLink:
      'IGCSE and A-level; supports work on dialect as literary style, female identity, and Harlem Renaissance context.',
    themes: ['female independence', 'race', 'love', 'voice', 'community', 'self-discovery'],
    discussionQuestions: [
      "What is the significance of Hurston's choice to write in African-American vernacular dialect?",
      "How does each of Janie's three marriages represent a different stage of her self-realisation?",
      "The novel opens with Janie returning. How does the framing narrative shape our interpretation of her story?",
    ],
  },
  {
    id: 'wr-igcse-005',
    title: 'The Bell Jar',
    author: 'Sylvia Plath',
    yearGroup: 'IGCSE',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "Esther Greenwood, a talented young woman from Boston, wins a prestigious internship at a New York magazine but spirals into a severe mental breakdown. The novel draws closely on Plath's own experiences with depression and hospitalisation.",
    whyRecommended:
      "Plath's precise, mordantly witty prose is a masterclass in first-person narration and the representation of mental illness. The novel speaks powerfully to students about the pressures placed on women and high-achievers.",
    curriculumLink:
      "IGCSE and A-level; supports work on confessional writing, gender and 1950s America, and the relationship between author and narrator.",
    themes: ['mental illness', 'gender', 'ambition', "women's roles in the 1950s", 'identity', 'confinement'],
    discussionQuestions: [
      'How does Plath use the metaphor of the bell jar to represent depression?',
      "What does the novel reveal about the contradictions in society's expectations of women in the 1950s?",
      'How does the tone of the novel shift between dark comedy and despair, and what is the effect of this?',
    ],
  },
  {
    id: 'wr-igcse-006',
    title: 'Native Son',
    author: 'Richard Wright',
    yearGroup: 'IGCSE',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "Bigger Thomas, a young Black man living in poverty in 1930s Chicago, accidentally kills a white woman and faces an almost entirely corrupt justice system. Wright presents Bigger as a product of a racist society that has denied him any other identity.",
    whyRecommended:
      "Wright's novel is a furious, unflinching examination of structural racism and the psychology of oppression. It is essential for understanding the tradition of African-American protest literature.",
    curriculumLink:
      'IGCSE and A-level American literature; supports study of naturalism, protest fiction, and social determinism.',
    themes: ['racism', 'poverty', 'fear', 'justice', 'determinism', 'American society'],
    discussionQuestions: [
      "Wright presents Bigger as simultaneously a victim and an agent. How does the novel balance these two readings?",
      "How does the portrayal of the American justice system challenge the concept of 'equal justice under law'?",
      "Compare Wright's naturalistic style to the approach of other writers addressing racial injustice. What does his method gain?",
    ],
  },
  {
    id: 'wr-igcse-007',
    title: 'A Raisin in the Sun',
    author: 'Lorraine Hansberry',
    yearGroup: 'IGCSE',
    genre: 'play',
    difficulty: 'on-level',
    synopsis:
      "The Younger family, three generations living in a cramped Chicago apartment, must decide how to spend a $10,000 life insurance payment. Their conflicting dreams -- of a home, a business, an identity -- reflect the tensions of Black American life in the 1950s.",
    whyRecommended:
      "A landmark American play that brings together class, race, gender, and the American Dream in a compact dramatic form. Ideal for students studying drama and for comparison with other IGCSE literary texts.",
    curriculumLink:
      'IGCSE and A-level; supports dramatic analysis, the American Dream theme, and study of mid-20th-century African-American literature.',
    themes: ['the American Dream', 'race', 'family', 'gender', 'dignity', '1950s America'],
    discussionQuestions: [
      "What does Langston Hughes's poem 'A Dream Deferred' mean in the context of this play?",
      'How does Hansberry present generational conflict within the Younger family?',
      "Compare Walter Lee's concept of manhood with Beneatha's vision of her own future. What does the play suggest about gender?",
    ],
  },
  {
    id: 'wr-igcse-008',
    title: "Angela's Ashes",
    author: 'Frank McCourt',
    yearGroup: 'IGCSE',
    genre: 'biography',
    difficulty: 'on-level',
    synopsis:
      "Frank McCourt's Pulitzer Prize-winning memoir recounts his impoverished childhood in Limerick, Ireland, in a family burdened by his father's alcoholism, grinding poverty, and the rigid authority of the Catholic Church.",
    whyRecommended:
      "McCourt's memoir is a model of how dark material can be narrated with warmth and dark humour. It is an outstanding example of the memoir form and the construction of retrospective narrative voice.",
    curriculumLink:
      'IGCSE and A-level non-fiction; supports work on memoir, voice, and the construction of childhood in literary autobiography.',
    themes: ['poverty', 'Catholicism', 'Ireland', 'alcoholism', 'family', 'resilience'],
    discussionQuestions: [
      "How does McCourt use the perspective of a child narrator to balance tragedy with black comedy?",
      'What role does the Catholic Church play in the family\'s suffering and in the community\'s culture?',
      "What techniques does McCourt use to make the reader both laugh and grieve within the same passage?",
    ],
  },
  {
    id: 'wr-igcse-009',
    title: 'The God of Small Things',
    author: 'Arundhati Roy',
    yearGroup: 'IGCSE',
    genre: 'fiction',
    difficulty: 'challenging',
    synopsis:
      "In Kerala, India, in 1969, twins Rahel and Estha witness a tragedy shaped by the caste system, colonial legacy, and family secrets. The novel's non-linear structure gradually reveals what the family calls 'what happened.'",
    whyRecommended:
      "Roy's dazzling prose style, her structural innovations, and her handling of caste and colonialism make this one of the most important postcolonial novels of the 20th century.",
    curriculumLink:
      'IGCSE and A-level; supports postcolonial study, structural analysis, and close reading of figurative prose.',
    themes: ['caste', 'postcolonialism', 'forbidden love', 'family', 'political violence', 'childhood'],
    discussionQuestions: [
      "How does Roy's non-linear structure create both suspense and a sense of tragic inevitability?",
      'What are the "Love Laws" and how do they govern -- and destroy -- the lives of the novel\'s characters?',
      "How does Roy use the Malayalam language and Kerala's landscape to assert a distinctly Indian narrative voice?",
    ],
  },
  {
    id: 'wr-igcse-010',
    title: 'Oranges Are Not the Only Fruit',
    author: 'Jeanette Winterson',
    yearGroup: 'IGCSE',
    genre: 'fiction',
    difficulty: 'on-level',
    synopsis:
      "Jeanette grows up in a strict Pentecostal community in the north of England, raised by her domineering mother to be a missionary. When she falls in love with another woman, she must choose between her faith and her identity.",
    whyRecommended:
      "Winterson's semi-autobiographical novel is a powerful exploration of identity, religious indoctrination, and the uses of storytelling. The interpolated fairy tales within the main narrative are an excellent model of embedded narrative.",
    curriculumLink:
      'IGCSE and A-level; supports work on embedded narrative, LGBTQ+ representation, and the coming-of-age genre.',
    themes: ['religion', 'sexuality', 'identity', 'mother-daughter relationships', 'storytelling', 'community'],
    discussionQuestions: [
      "How do the fairy-tale interpolations in the novel comment on or subvert Jeanette's 'real' story?",
      "What does the novel suggest about the relationship between religion and love?",
      "How does Winterson use first-person narration to create both intimacy and ironic distance?",
    ],
  },

  // ─── IAL (10 entries) ────────────────────────────────────────────────────────
  {
    id: 'wr-ial-001',
    title: 'The Language Instinct',
    author: 'Steven Pinker',
    yearGroup: 'IAL',
    genre: 'non-fiction',
    difficulty: 'challenging',
    synopsis:
      "Pinker argues that human language is not a cultural invention but a biological adaptation -- a distinct faculty shaped by natural selection. He draws on linguistics, cognitive science, and evolutionary biology to make the case.",
    whyRecommended:
      "Essential reading for IAL Unit 1 Language and Context. Pinker's accessible explanation of universal grammar, the poverty-of-stimulus argument, and language acquisition directly underpins key specification topics.",
    curriculumLink:
      'IAL Unit 1: Language and Context -- language acquisition, universal grammar, and the nature-nurture debate.',
    themes: ['language acquisition', 'universal grammar', 'evolution', 'cognition', 'Chomsky', 'nativism'],
    discussionQuestions: [
      "What evidence does Pinker offer for the claim that language is an instinct rather than a learned skill?",
      'What is the poverty-of-stimulus argument and why is it important for debates about acquisition?',
      "How does Pinker respond to the view that thought is impossible without language? Do you find his argument convincing?",
    ],
  },
  {
    id: 'wr-ial-002',
    title: 'Metaphors We Live By',
    author: 'George Lakoff and Mark Johnson',
    yearGroup: 'IAL',
    genre: 'non-fiction',
    difficulty: 'challenging',
    synopsis:
      "Lakoff and Johnson argue that metaphor is not a poetic ornament but the fundamental mechanism by which human beings understand abstract concepts. They show how everyday language is structured by conceptual metaphors like ARGUMENT IS WAR.",
    whyRecommended:
      "Directly relevant to IAL Unit 1 language study and Unit 4 critical theory. The concept of conceptual metaphor is a powerful analytical tool for both language and literary analysis at A-level.",
    curriculumLink:
      'IAL Unit 1: Language and Representation; Unit 4: Critical Approaches -- semantics and cognitive linguistics.',
    themes: ['conceptual metaphor', 'language and thought', 'framing', 'cognitive linguistics', 'embodied meaning'],
    discussionQuestions: [
      "Identify three 'conceptual metaphors' Lakoff and Johnson analyse. Find your own examples from contemporary texts.",
      "What are the political implications of the claim that all our thinking is structured by metaphor?",
      'How might the theory of conceptual metaphor be applied to the literary analysis of a poem or novel?',
    ],
  },
  {
    id: 'wr-ial-003',
    title: 'An Introduction to Language',
    author: 'Victoria Fromkin, Robert Rodman, and Nina Hyams',
    yearGroup: 'IAL',
    genre: 'non-fiction',
    difficulty: 'on-level',
    synopsis:
      "A comprehensive undergraduate-level introduction to the key branches of linguistics: phonology, morphology, syntax, semantics, pragmatics, language acquisition, and sociolinguistics. Widely used as a first-year university textbook.",
    whyRecommended:
      "The clearest and most comprehensive single-volume introduction to linguistics for IAL students. Provides precise technical vocabulary for all areas of the specification and excellent practice exercises.",
    curriculumLink:
      'Supports all IAL language units; essential reference for Units 1, 2, and 3 terminology and concepts.',
    themes: ['phonology', 'syntax', 'semantics', 'pragmatics', 'sociolinguistics', 'language acquisition'],
    discussionQuestions: [
      'Choose one branch of linguistics (e.g. pragmatics) and explain how the concepts covered apply to a real text you have analysed.',
      'What does the study of morphology reveal about the structure of English that we rarely notice as native speakers?',
      "How does the chapter on language change challenge the idea that 'proper' grammar is fixed?",
    ],
  },
  {
    id: 'wr-ial-004',
    title: 'The Literary Theory Handbook',
    author: 'Gregory Castle',
    yearGroup: 'IAL',
    genre: 'non-fiction',
    difficulty: 'challenging',
    synopsis:
      "A systematic guide to the major schools of literary theory -- formalism, Marxism, psychoanalysis, feminism, postcolonialism, poststructuralism, and more. Each chapter explains key thinkers, terms, and how to apply the theory in practice.",
    whyRecommended:
      "The IAL Unit 4 Critical Approaches paper requires confident use of multiple theoretical frameworks. Castle's handbook is the clearest guide available for applying theory to literary texts.",
    curriculumLink:
      'IAL Unit 4: Critical Approaches and Independent Study; supports theoretical framing for all literary texts.',
    themes: ['formalism', 'Marxist criticism', 'feminist theory', 'postcolonialism', 'psychoanalysis', 'poststructuralism'],
    discussionQuestions: [
      'Choose a passage from any novel you have studied and apply two contrasting theoretical frameworks. What does each reveal?',
      "Why does Castle argue that 'theory' is not something imposed on texts from outside but something texts themselves generate?",
      "Which theoretical framework do you find most useful for the texts you are studying, and why?",
    ],
  },
  {
    id: 'wr-ial-005',
    title: 'How Fiction Works',
    author: 'James Wood',
    yearGroup: 'IAL',
    genre: 'non-fiction',
    difficulty: 'on-level',
    synopsis:
      "Literary critic James Wood examines the elements of prose fiction -- narrative, character, point of view, detail, language -- through close readings of texts from Cervantes to Flaubert to contemporary novelists.",
    whyRecommended:
      "Wood's essays model the kind of precise, evaluative close reading expected at A-level. His concept of 'free indirect style' is particularly useful for IAL literary analysis.",
    curriculumLink:
      'IAL Units 1 and 3: Literary text analysis; supports Unit 4 independent critical study and essay writing.',
    themes: ['narrative technique', 'free indirect style', 'character', 'realism', 'detail', 'prose style'],
    discussionQuestions: [
      "What does Wood mean by 'free indirect style' and how does he demonstrate its power through literary examples?",
      'Wood argues that the novel\'s greatest achievement is the representation of consciousness. Do you agree?',
      'Choose a technique Wood discusses and apply it to a close reading of a passage from one of your set texts.',
    ],
  },
  {
    id: 'wr-ial-006',
    title: 'Language and Power',
    author: 'Norman Fairclough',
    yearGroup: 'IAL',
    genre: 'non-fiction',
    difficulty: 'challenging',
    synopsis:
      "Fairclough introduces Critical Discourse Analysis (CDA), arguing that language does not merely reflect social reality but constructs and maintains power relations. He analyses media, political, and institutional discourse.",
    whyRecommended:
      "Fairclough's CDA framework is directly applicable to IAL language analysis tasks involving media and political texts. His approach links linguistic choices to ideological effects.",
    curriculumLink:
      'IAL Unit 1: Language and Representation; Unit 2: Language in Context -- media and political discourse.',
    themes: ['power', 'discourse analysis', 'ideology', 'media language', 'institutions', 'language change'],
    discussionQuestions: [
      "What is 'Critical Discourse Analysis' and how does it differ from conventional linguistic description?",
      'Apply Fairclough\'s analytical framework to a newspaper front page. What ideological assumptions does the language encode?',
      "How does Fairclough's concept of 'orders of discourse' explain why certain ways of speaking feel 'natural'?",
    ],
  },
  {
    id: 'wr-ial-007',
    title: 'The Cambridge Introduction to Narrative',
    author: 'H. Porter Abbott',
    yearGroup: 'IAL',
    genre: 'non-fiction',
    difficulty: 'on-level',
    synopsis:
      "A lucid introduction to narratology covering story and discourse, character, unreliable narration, narrative gaps, and the relationship between narrative and time. Draws on examples from literature, film, and everyday life.",
    whyRecommended:
      "Narratology provides a rigorous vocabulary for literary analysis that students often lack. Abbott's terms -- fabula vs sjuzet, focalization, narrative gaps -- are immediately applicable to IAL literary essay writing.",
    curriculumLink:
      'IAL Unit 3: Prose and Drama; Unit 4: Independent Study -- narrative structure and technique.',
    themes: ['narratology', 'focalization', 'story vs discourse', 'time in narrative', 'unreliable narration', 'gaps'],
    discussionQuestions: [
      "Explain the distinction between 'story' (fabula) and 'discourse' (sjuzet). Illustrate using a text you have studied.",
      "What is 'focalization' and how does it differ from the concept of narrative point of view?",
      'How do narrative gaps generate meaning and reader engagement? Give examples from literary texts.',
    ],
  },
  {
    id: 'wr-ial-008',
    title: "The Reader, the Text, the Poem: The Transactional Theory of the Literary Work",
    author: 'Louise Rosenblatt',
    yearGroup: 'IAL',
    genre: 'non-fiction',
    difficulty: 'challenging',
    synopsis:
      "Rosenblatt argues that a literary work exists only in the 'transaction' between a specific reader and a specific text. She distinguishes between 'efferent' reading (for information) and 'aesthetic' reading (for experience).",
    whyRecommended:
      "Reader-response theory is a key framework for IAL Unit 4. Rosenblatt's transactional model gives students a principled basis for discussing how their own reading experience contributes to literary meaning.",
    curriculumLink:
      'IAL Unit 4: Critical Approaches -- reader-response theory and the construction of literary meaning.',
    themes: ['reader-response', 'aesthetic reading', 'interpretation', 'subjectivity', 'literary experience', 'meaning-making'],
    discussionQuestions: [
      "What is the difference between 'efferent' and 'aesthetic' stances toward a text?",
      "How does Rosenblatt's transactional theory challenge the New Critical view that meaning resides solely in the text?",
      'Can a text mean different things to different readers while still having a stable meaning? How does Rosenblatt address this?',
    ],
  },
  {
    id: 'wr-ial-009',
    title: 'A Rhetoric of Motives',
    author: 'Kenneth Burke',
    yearGroup: 'IAL',
    genre: 'non-fiction',
    difficulty: 'challenging',
    synopsis:
      "Burke extends the study of rhetoric beyond persuasion to 'identification' -- the process by which language creates solidarity and shared identity. He argues that all language use is fundamentally rhetorical.",
    whyRecommended:
      "Burke's concept of identification is essential for analysing political and literary rhetoric at A-level. His dramatistic pentad provides a rigorous framework for analysing any communicative act.",
    curriculumLink:
      'IAL Unit 1: Language and Representation; Unit 2: Language and Power -- rhetoric and persuasion.',
    themes: ['rhetoric', 'identification', 'persuasion', 'language and society', 'motive', 'symbolic action'],
    discussionQuestions: [
      'What does Burke mean by identification and how does it differ from persuasion?',
      "Apply Burke's dramatistic pentad (act, scene, agent, agency, purpose) to a political speech of your choice.",
      'How does Burke\'s claim that all language use is rhetoric challenge the idea of purely neutral or objective communication?',
    ],
  },
  {
    id: 'wr-ial-010',
    title: 'The Empire Writes Back: Theory and Practice in Post-Colonial Literatures',
    author: 'Bill Ashcroft, Gareth Griffiths, and Helen Tiffin',
    yearGroup: 'IAL',
    genre: 'non-fiction',
    difficulty: 'challenging',
    synopsis:
      "The foundational text of postcolonial literary theory. The authors examine how writers from formerly colonised nations use, subvert, and transform the English language and literary forms to assert their own cultural identities.",
    whyRecommended:
      "Directly required for IAL Unit 4 postcolonial approaches. The concepts of abrogation, appropriation, and hybridity are essential for analysing texts by Achebe, Adichie, Roy, Morrison, and others studied across the course.",
    curriculumLink:
      'IAL Unit 4: Critical Approaches -- postcolonial theory; underpins reading of all postcolonial literary texts across Units 1-3.',
    themes: ['postcolonialism', 'language and empire', 'hybridity', 'identity', 'resistance', 'abrogation'],
    discussionQuestions: [
      "What do Ashcroft et al. mean by 'abrogation' and 'appropriation' as strategies of postcolonial writing?",
      "How does the concept of 'hybridity' challenge binary thinking about colonial and postcolonial cultures?",
      "Apply the book's framework to a postcolonial text you have studied. How does the author 'write back' to empire?",
    ],
  },
];
