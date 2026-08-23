// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'bulk-deck',
  title: 'Comprehensive Exam Preparation',
  description: 'Advanced analysis cards for major GCSE texts',
  category: 'Set Text Analysis',
  board: 'Multi-Exam-Board',
  cards: [
    {
      id: 'bulk-1',
      front: 'Macbeth: Ambition - Definition',
      back: "The theme of Ambition is central to Macbeth. How is Ambition explored through character action, dialogue, and plot? What does the author's treatment of Ambition reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-2',
      front: 'Macbeth: Ambition - Character Analysis',
      back: 'How do characters in Macbeth embody the theme of Ambition? Analyze how different characters relate to Ambition differently. What internal conflicts does Ambition create for characters? How does Ambition drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-3',
      front: 'Macbeth: Ambition - Turning Points',
      back: "Identify scenes in Macbeth where Ambition is most intensely explored. How do these scenes reveal the author's perspective on Ambition? What do characters learn or fail to learn about Ambition? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-4',
      front: 'Macbeth: Ambition - Literary Technique',
      back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Ambition? What specific images or symbols recur? What patterns of language convey Ambition? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-5',
      front: 'Macbeth: Ambition - Critical Perspectives',
      back: 'How might different critical approaches illuminate Ambition in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Ambition. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-6',
      front: 'Macbeth: Guilt - Definition',
      back: "The theme of Guilt is central to Macbeth. How is Guilt explored through character action, dialogue, and plot? What does the author's treatment of Guilt reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-7',
      front: 'Macbeth: Guilt - Character Analysis',
      back: 'How do characters in Macbeth embody the theme of Guilt? Analyze how different characters relate to Guilt differently. What internal conflicts does Guilt create for characters? How does Guilt drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-8',
      front: 'Macbeth: Guilt - Turning Points',
      back: "Identify scenes in Macbeth where Guilt is most intensely explored. How do these scenes reveal the author's perspective on Guilt? What do characters learn or fail to learn about Guilt? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-9',
      front: 'Macbeth: Guilt - Literary Technique',
      back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Guilt? What specific images or symbols recur? What patterns of language convey Guilt? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-10',
      front: 'Macbeth: Guilt - Critical Perspectives',
      back: 'How might different critical approaches illuminate Guilt in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Guilt. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-11',
      front: 'Macbeth: Power - Definition',
      back: "The theme of Power is central to Macbeth. How is Power explored through character action, dialogue, and plot? What does the author's treatment of Power reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-12',
      front: 'Macbeth: Power - Character Analysis',
      back: 'How do characters in Macbeth embody the theme of Power? Analyze how different characters relate to Power differently. What internal conflicts does Power create for characters? How does Power drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-13',
      front: 'Macbeth: Power - Turning Points',
      back: "Identify scenes in Macbeth where Power is most intensely explored. How do these scenes reveal the author's perspective on Power? What do characters learn or fail to learn about Power? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-14',
      front: 'Macbeth: Power - Literary Technique',
      back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Power? What specific images or symbols recur? What patterns of language convey Power? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-15',
      front: 'Macbeth: Power - Critical Perspectives',
      back: 'How might different critical approaches illuminate Power in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Power. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-16',
      front: 'Macbeth: Fate - Definition',
      back: "The theme of Fate is central to Macbeth. How is Fate explored through character action, dialogue, and plot? What does the author's treatment of Fate reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-17',
      front: 'Macbeth: Fate - Character Analysis',
      back: 'How do characters in Macbeth embody the theme of Fate? Analyze how different characters relate to Fate differently. What internal conflicts does Fate create for characters? How does Fate drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-18',
      front: 'Macbeth: Fate - Turning Points',
      back: "Identify scenes in Macbeth where Fate is most intensely explored. How do these scenes reveal the author's perspective on Fate? What do characters learn or fail to learn about Fate? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-19',
      front: 'Macbeth: Fate - Literary Technique',
      back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Fate? What specific images or symbols recur? What patterns of language convey Fate? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-20',
      front: 'Macbeth: Fate - Critical Perspectives',
      back: 'How might different critical approaches illuminate Fate in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Fate. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-21',
      front: 'Macbeth: Manhood - Definition',
      back: "The theme of Manhood is central to Macbeth. How is Manhood explored through character action, dialogue, and plot? What does the author's treatment of Manhood reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-22',
      front: 'Macbeth: Manhood - Character Analysis',
      back: 'How do characters in Macbeth embody the theme of Manhood? Analyze how different characters relate to Manhood differently. What internal conflicts does Manhood create for characters? How does Manhood drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-23',
      front: 'Macbeth: Manhood - Turning Points',
      back: "Identify scenes in Macbeth where Manhood is most intensely explored. How do these scenes reveal the author's perspective on Manhood? What do characters learn or fail to learn about Manhood? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-24',
      front: 'Macbeth: Manhood - Literary Technique',
      back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Manhood? What specific images or symbols recur? What patterns of language convey Manhood? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-25',
      front: 'Macbeth: Manhood - Critical Perspectives',
      back: 'How might different critical approaches illuminate Manhood in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Manhood. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-26',
      front: 'Macbeth: Conscience - Definition',
      back: "The theme of Conscience is central to Macbeth. How is Conscience explored through character action, dialogue, and plot? What does the author's treatment of Conscience reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-27',
      front: 'Macbeth: Conscience - Character Analysis',
      back: 'How do characters in Macbeth embody the theme of Conscience? Analyze how different characters relate to Conscience differently. What internal conflicts does Conscience create for characters? How does Conscience drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-28',
      front: 'Macbeth: Conscience - Turning Points',
      back: "Identify scenes in Macbeth where Conscience is most intensely explored. How do these scenes reveal the author's perspective on Conscience? What do characters learn or fail to learn about Conscience? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-29',
      front: 'Macbeth: Conscience - Literary Technique',
      back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Conscience? What specific images or symbols recur? What patterns of language convey Conscience? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-30',
      front: 'Macbeth: Conscience - Critical Perspectives',
      back: 'How might different critical approaches illuminate Conscience in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Conscience. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-31',
      front: 'Macbeth: Sleep - Definition',
      back: "The theme of Sleep is central to Macbeth. How is Sleep explored through character action, dialogue, and plot? What does the author's treatment of Sleep reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-32',
      front: 'Macbeth: Sleep - Character Analysis',
      back: 'How do characters in Macbeth embody the theme of Sleep? Analyze how different characters relate to Sleep differently. What internal conflicts does Sleep create for characters? How does Sleep drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-33',
      front: 'Macbeth: Sleep - Turning Points',
      back: "Identify scenes in Macbeth where Sleep is most intensely explored. How do these scenes reveal the author's perspective on Sleep? What do characters learn or fail to learn about Sleep? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-34',
      front: 'Macbeth: Sleep - Literary Technique',
      back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Sleep? What specific images or symbols recur? What patterns of language convey Sleep? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-35',
      front: 'Macbeth: Sleep - Critical Perspectives',
      back: 'How might different critical approaches illuminate Sleep in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Sleep. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-36',
      front: 'Macbeth: Nature - Definition',
      back: "The theme of Nature is central to Macbeth. How is Nature explored through character action, dialogue, and plot? What does the author's treatment of Nature reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-37',
      front: 'Macbeth: Nature - Character Analysis',
      back: 'How do characters in Macbeth embody the theme of Nature? Analyze how different characters relate to Nature differently. What internal conflicts does Nature create for characters? How does Nature drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-38',
      front: 'Macbeth: Nature - Turning Points',
      back: "Identify scenes in Macbeth where Nature is most intensely explored. How do these scenes reveal the author's perspective on Nature? What do characters learn or fail to learn about Nature? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-39',
      front: 'Macbeth: Nature - Literary Technique',
      back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Nature? What specific images or symbols recur? What patterns of language convey Nature? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-40',
      front: 'Macbeth: Nature - Critical Perspectives',
      back: 'How might different critical approaches illuminate Nature in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Nature. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-41',
      front: 'Macbeth: Blood - Definition',
      back: "The theme of Blood is central to Macbeth. How is Blood explored through character action, dialogue, and plot? What does the author's treatment of Blood reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-42',
      front: 'Macbeth: Blood - Character Analysis',
      back: 'How do characters in Macbeth embody the theme of Blood? Analyze how different characters relate to Blood differently. What internal conflicts does Blood create for characters? How does Blood drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-43',
      front: 'Macbeth: Blood - Turning Points',
      back: "Identify scenes in Macbeth where Blood is most intensely explored. How do these scenes reveal the author's perspective on Blood? What do characters learn or fail to learn about Blood? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-44',
      front: 'Macbeth: Blood - Literary Technique',
      back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Blood? What specific images or symbols recur? What patterns of language convey Blood? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-45',
      front: 'Macbeth: Blood - Critical Perspectives',
      back: 'How might different critical approaches illuminate Blood in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Blood. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-46',
      front: 'Macbeth: Prophecy - Definition',
      back: "The theme of Prophecy is central to Macbeth. How is Prophecy explored through character action, dialogue, and plot? What does the author's treatment of Prophecy reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-47',
      front: 'Macbeth: Prophecy - Character Analysis',
      back: 'How do characters in Macbeth embody the theme of Prophecy? Analyze how different characters relate to Prophecy differently. What internal conflicts does Prophecy create for characters? How does Prophecy drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-48',
      front: 'Macbeth: Prophecy - Turning Points',
      back: "Identify scenes in Macbeth where Prophecy is most intensely explored. How do these scenes reveal the author's perspective on Prophecy? What do characters learn or fail to learn about Prophecy? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-49',
      front: 'Macbeth: Prophecy - Literary Technique',
      back: 'How does Macbeth use literary techniques (imagery, symbolism, dialogue, structure) to explore Prophecy? What specific images or symbols recur? What patterns of language convey Prophecy? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-50',
      front: 'Macbeth: Prophecy - Critical Perspectives',
      back: 'How might different critical approaches illuminate Prophecy in Macbeth? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Prophecy. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-51',
      front: 'Romeo and Juliet: Love - Definition',
      back: "The theme of Love is central to Romeo and Juliet. How is Love explored through character action, dialogue, and plot? What does the author's treatment of Love reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-52',
      front: 'Romeo and Juliet: Love - Character Analysis',
      back: 'How do characters in Romeo and Juliet embody the theme of Love? Analyze how different characters relate to Love differently. What internal conflicts does Love create for characters? How does Love drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-53',
      front: 'Romeo and Juliet: Love - Turning Points',
      back: "Identify scenes in Romeo and Juliet where Love is most intensely explored. How do these scenes reveal the author's perspective on Love? What do characters learn or fail to learn about Love? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-54',
      front: 'Romeo and Juliet: Love - Literary Technique',
      back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Love? What specific images or symbols recur? What patterns of language convey Love? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-55',
      front: 'Romeo and Juliet: Love - Critical Perspectives',
      back: 'How might different critical approaches illuminate Love in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Love. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-56',
      front: 'Romeo and Juliet: Fate - Definition',
      back: "The theme of Fate is central to Romeo and Juliet. How is Fate explored through character action, dialogue, and plot? What does the author's treatment of Fate reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-57',
      front: 'Romeo and Juliet: Fate - Character Analysis',
      back: 'How do characters in Romeo and Juliet embody the theme of Fate? Analyze how different characters relate to Fate differently. What internal conflicts does Fate create for characters? How does Fate drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-58',
      front: 'Romeo and Juliet: Fate - Turning Points',
      back: "Identify scenes in Romeo and Juliet where Fate is most intensely explored. How do these scenes reveal the author's perspective on Fate? What do characters learn or fail to learn about Fate? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-59',
      front: 'Romeo and Juliet: Fate - Literary Technique',
      back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Fate? What specific images or symbols recur? What patterns of language convey Fate? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-60',
      front: 'Romeo and Juliet: Fate - Critical Perspectives',
      back: 'How might different critical approaches illuminate Fate in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Fate. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-61',
      front: 'Romeo and Juliet: Family - Definition',
      back: "The theme of Family is central to Romeo and Juliet. How is Family explored through character action, dialogue, and plot? What does the author's treatment of Family reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-62',
      front: 'Romeo and Juliet: Family - Character Analysis',
      back: 'How do characters in Romeo and Juliet embody the theme of Family? Analyze how different characters relate to Family differently. What internal conflicts does Family create for characters? How does Family drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-63',
      front: 'Romeo and Juliet: Family - Turning Points',
      back: "Identify scenes in Romeo and Juliet where Family is most intensely explored. How do these scenes reveal the author's perspective on Family? What do characters learn or fail to learn about Family? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-64',
      front: 'Romeo and Juliet: Family - Literary Technique',
      back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Family? What specific images or symbols recur? What patterns of language convey Family? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-65',
      front: 'Romeo and Juliet: Family - Critical Perspectives',
      back: 'How might different critical approaches illuminate Family in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Family. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-66',
      front: 'Romeo and Juliet: Youth - Definition',
      back: "The theme of Youth is central to Romeo and Juliet. How is Youth explored through character action, dialogue, and plot? What does the author's treatment of Youth reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-67',
      front: 'Romeo and Juliet: Youth - Character Analysis',
      back: 'How do characters in Romeo and Juliet embody the theme of Youth? Analyze how different characters relate to Youth differently. What internal conflicts does Youth create for characters? How does Youth drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-68',
      front: 'Romeo and Juliet: Youth - Turning Points',
      back: "Identify scenes in Romeo and Juliet where Youth is most intensely explored. How do these scenes reveal the author's perspective on Youth? What do characters learn or fail to learn about Youth? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-69',
      front: 'Romeo and Juliet: Youth - Literary Technique',
      back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Youth? What specific images or symbols recur? What patterns of language convey Youth? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-70',
      front: 'Romeo and Juliet: Youth - Critical Perspectives',
      back: 'How might different critical approaches illuminate Youth in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Youth. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-71',
      front: 'Romeo and Juliet: Passion - Definition',
      back: "The theme of Passion is central to Romeo and Juliet. How is Passion explored through character action, dialogue, and plot? What does the author's treatment of Passion reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-72',
      front: 'Romeo and Juliet: Passion - Character Analysis',
      back: 'How do characters in Romeo and Juliet embody the theme of Passion? Analyze how different characters relate to Passion differently. What internal conflicts does Passion create for characters? How does Passion drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-73',
      front: 'Romeo and Juliet: Passion - Turning Points',
      back: "Identify scenes in Romeo and Juliet where Passion is most intensely explored. How do these scenes reveal the author's perspective on Passion? What do characters learn or fail to learn about Passion? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-74',
      front: 'Romeo and Juliet: Passion - Literary Technique',
      back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Passion? What specific images or symbols recur? What patterns of language convey Passion? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-75',
      front: 'Romeo and Juliet: Passion - Critical Perspectives',
      back: 'How might different critical approaches illuminate Passion in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Passion. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-76',
      front: 'Romeo and Juliet: Communication - Definition',
      back: "The theme of Communication is central to Romeo and Juliet. How is Communication explored through character action, dialogue, and plot? What does the author's treatment of Communication reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-77',
      front: 'Romeo and Juliet: Communication - Character Analysis',
      back: 'How do characters in Romeo and Juliet embody the theme of Communication? Analyze how different characters relate to Communication differently. What internal conflicts does Communication create for characters? How does Communication drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-78',
      front: 'Romeo and Juliet: Communication - Turning Points',
      back: "Identify scenes in Romeo and Juliet where Communication is most intensely explored. How do these scenes reveal the author's perspective on Communication? What do characters learn or fail to learn about Communication? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-79',
      front: 'Romeo and Juliet: Communication - Literary Technique',
      back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Communication? What specific images or symbols recur? What patterns of language convey Communication? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-80',
      front: 'Romeo and Juliet: Communication - Critical Perspectives',
      back: 'How might different critical approaches illuminate Communication in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Communication. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-81',
      front: 'Romeo and Juliet: Light - Definition',
      back: "The theme of Light is central to Romeo and Juliet. How is Light explored through character action, dialogue, and plot? What does the author's treatment of Light reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-82',
      front: 'Romeo and Juliet: Light - Character Analysis',
      back: 'How do characters in Romeo and Juliet embody the theme of Light? Analyze how different characters relate to Light differently. What internal conflicts does Light create for characters? How does Light drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-83',
      front: 'Romeo and Juliet: Light - Turning Points',
      back: "Identify scenes in Romeo and Juliet where Light is most intensely explored. How do these scenes reveal the author's perspective on Light? What do characters learn or fail to learn about Light? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-84',
      front: 'Romeo and Juliet: Light - Literary Technique',
      back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Light? What specific images or symbols recur? What patterns of language convey Light? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-85',
      front: 'Romeo and Juliet: Light - Critical Perspectives',
      back: 'How might different critical approaches illuminate Light in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Light. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-86',
      front: 'Romeo and Juliet: Haste - Definition',
      back: "The theme of Haste is central to Romeo and Juliet. How is Haste explored through character action, dialogue, and plot? What does the author's treatment of Haste reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-87',
      front: 'Romeo and Juliet: Haste - Character Analysis',
      back: 'How do characters in Romeo and Juliet embody the theme of Haste? Analyze how different characters relate to Haste differently. What internal conflicts does Haste create for characters? How does Haste drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-88',
      front: 'Romeo and Juliet: Haste - Turning Points',
      back: "Identify scenes in Romeo and Juliet where Haste is most intensely explored. How do these scenes reveal the author's perspective on Haste? What do characters learn or fail to learn about Haste? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-89',
      front: 'Romeo and Juliet: Haste - Literary Technique',
      back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Haste? What specific images or symbols recur? What patterns of language convey Haste? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-90',
      front: 'Romeo and Juliet: Haste - Critical Perspectives',
      back: 'How might different critical approaches illuminate Haste in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Haste. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-91',
      front: 'Romeo and Juliet: Feud - Definition',
      back: "The theme of Feud is central to Romeo and Juliet. How is Feud explored through character action, dialogue, and plot? What does the author's treatment of Feud reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-92',
      front: 'Romeo and Juliet: Feud - Character Analysis',
      back: 'How do characters in Romeo and Juliet embody the theme of Feud? Analyze how different characters relate to Feud differently. What internal conflicts does Feud create for characters? How does Feud drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-93',
      front: 'Romeo and Juliet: Feud - Turning Points',
      back: "Identify scenes in Romeo and Juliet where Feud is most intensely explored. How do these scenes reveal the author's perspective on Feud? What do characters learn or fail to learn about Feud? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-94',
      front: 'Romeo and Juliet: Feud - Literary Technique',
      back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Feud? What specific images or symbols recur? What patterns of language convey Feud? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-95',
      front: 'Romeo and Juliet: Feud - Critical Perspectives',
      back: 'How might different critical approaches illuminate Feud in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Feud. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-96',
      front: 'Romeo and Juliet: Death - Definition',
      back: "The theme of Death is central to Romeo and Juliet. How is Death explored through character action, dialogue, and plot? What does the author's treatment of Death reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-97',
      front: 'Romeo and Juliet: Death - Character Analysis',
      back: 'How do characters in Romeo and Juliet embody the theme of Death? Analyze how different characters relate to Death differently. What internal conflicts does Death create for characters? How does Death drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-98',
      front: 'Romeo and Juliet: Death - Turning Points',
      back: "Identify scenes in Romeo and Juliet where Death is most intensely explored. How do these scenes reveal the author's perspective on Death? What do characters learn or fail to learn about Death? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-99',
      front: 'Romeo and Juliet: Death - Literary Technique',
      back: 'How does Romeo and Juliet use literary techniques (imagery, symbolism, dialogue, structure) to explore Death? What specific images or symbols recur? What patterns of language convey Death? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-100',
      front: 'Romeo and Juliet: Death - Critical Perspectives',
      back: 'How might different critical approaches illuminate Death in Romeo and Juliet? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Death. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-101',
      front: 'The Great Gatsby: Dream - Definition',
      back: "The theme of Dream is central to The Great Gatsby. How is Dream explored through character action, dialogue, and plot? What does the author's treatment of Dream reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-102',
      front: 'The Great Gatsby: Dream - Character Analysis',
      back: 'How do characters in The Great Gatsby embody the theme of Dream? Analyze how different characters relate to Dream differently. What internal conflicts does Dream create for characters? How does Dream drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-103',
      front: 'The Great Gatsby: Dream - Turning Points',
      back: "Identify scenes in The Great Gatsby where Dream is most intensely explored. How do these scenes reveal the author's perspective on Dream? What do characters learn or fail to learn about Dream? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-104',
      front: 'The Great Gatsby: Dream - Literary Technique',
      back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Dream? What specific images or symbols recur? What patterns of language convey Dream? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-105',
      front: 'The Great Gatsby: Dream - Critical Perspectives',
      back: 'How might different critical approaches illuminate Dream in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Dream. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-106',
      front: 'The Great Gatsby: Class - Definition',
      back: "The theme of Class is central to The Great Gatsby. How is Class explored through character action, dialogue, and plot? What does the author's treatment of Class reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-107',
      front: 'The Great Gatsby: Class - Character Analysis',
      back: 'How do characters in The Great Gatsby embody the theme of Class? Analyze how different characters relate to Class differently. What internal conflicts does Class create for characters? How does Class drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-108',
      front: 'The Great Gatsby: Class - Turning Points',
      back: "Identify scenes in The Great Gatsby where Class is most intensely explored. How do these scenes reveal the author's perspective on Class? What do characters learn or fail to learn about Class? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-109',
      front: 'The Great Gatsby: Class - Literary Technique',
      back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Class? What specific images or symbols recur? What patterns of language convey Class? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-110',
      front: 'The Great Gatsby: Class - Critical Perspectives',
      back: 'How might different critical approaches illuminate Class in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Class. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-111',
      front: 'The Great Gatsby: Wealth - Definition',
      back: "The theme of Wealth is central to The Great Gatsby. How is Wealth explored through character action, dialogue, and plot? What does the author's treatment of Wealth reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-112',
      front: 'The Great Gatsby: Wealth - Character Analysis',
      back: 'How do characters in The Great Gatsby embody the theme of Wealth? Analyze how different characters relate to Wealth differently. What internal conflicts does Wealth create for characters? How does Wealth drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-113',
      front: 'The Great Gatsby: Wealth - Turning Points',
      back: "Identify scenes in The Great Gatsby where Wealth is most intensely explored. How do these scenes reveal the author's perspective on Wealth? What do characters learn or fail to learn about Wealth? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-114',
      front: 'The Great Gatsby: Wealth - Literary Technique',
      back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Wealth? What specific images or symbols recur? What patterns of language convey Wealth? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-115',
      front: 'The Great Gatsby: Wealth - Critical Perspectives',
      back: 'How might different critical approaches illuminate Wealth in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Wealth. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-116',
      front: 'The Great Gatsby: Desire - Definition',
      back: "The theme of Desire is central to The Great Gatsby. How is Desire explored through character action, dialogue, and plot? What does the author's treatment of Desire reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-117',
      front: 'The Great Gatsby: Desire - Character Analysis',
      back: 'How do characters in The Great Gatsby embody the theme of Desire? Analyze how different characters relate to Desire differently. What internal conflicts does Desire create for characters? How does Desire drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-118',
      front: 'The Great Gatsby: Desire - Turning Points',
      back: "Identify scenes in The Great Gatsby where Desire is most intensely explored. How do these scenes reveal the author's perspective on Desire? What do characters learn or fail to learn about Desire? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-119',
      front: 'The Great Gatsby: Desire - Literary Technique',
      back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Desire? What specific images or symbols recur? What patterns of language convey Desire? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-120',
      front: 'The Great Gatsby: Desire - Critical Perspectives',
      back: 'How might different critical approaches illuminate Desire in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Desire. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-121',
      front: 'The Great Gatsby: Past - Definition',
      back: "The theme of Past is central to The Great Gatsby. How is Past explored through character action, dialogue, and plot? What does the author's treatment of Past reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-122',
      front: 'The Great Gatsby: Past - Character Analysis',
      back: 'How do characters in The Great Gatsby embody the theme of Past? Analyze how different characters relate to Past differently. What internal conflicts does Past create for characters? How does Past drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-123',
      front: 'The Great Gatsby: Past - Turning Points',
      back: "Identify scenes in The Great Gatsby where Past is most intensely explored. How do these scenes reveal the author's perspective on Past? What do characters learn or fail to learn about Past? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-124',
      front: 'The Great Gatsby: Past - Literary Technique',
      back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Past? What specific images or symbols recur? What patterns of language convey Past? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-125',
      front: 'The Great Gatsby: Past - Critical Perspectives',
      back: 'How might different critical approaches illuminate Past in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Past. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-126',
      front: 'The Great Gatsby: Corruption - Definition',
      back: "The theme of Corruption is central to The Great Gatsby. How is Corruption explored through character action, dialogue, and plot? What does the author's treatment of Corruption reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-127',
      front: 'The Great Gatsby: Corruption - Character Analysis',
      back: 'How do characters in The Great Gatsby embody the theme of Corruption? Analyze how different characters relate to Corruption differently. What internal conflicts does Corruption create for characters? How does Corruption drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-128',
      front: 'The Great Gatsby: Corruption - Turning Points',
      back: "Identify scenes in The Great Gatsby where Corruption is most intensely explored. How do these scenes reveal the author's perspective on Corruption? What do characters learn or fail to learn about Corruption? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-129',
      front: 'The Great Gatsby: Corruption - Literary Technique',
      back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Corruption? What specific images or symbols recur? What patterns of language convey Corruption? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-130',
      front: 'The Great Gatsby: Corruption - Critical Perspectives',
      back: 'How might different critical approaches illuminate Corruption in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Corruption. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-131',
      front: 'The Great Gatsby: Symbol - Definition',
      back: "The theme of Symbol is central to The Great Gatsby. How is Symbol explored through character action, dialogue, and plot? What does the author's treatment of Symbol reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-132',
      front: 'The Great Gatsby: Symbol - Character Analysis',
      back: 'How do characters in The Great Gatsby embody the theme of Symbol? Analyze how different characters relate to Symbol differently. What internal conflicts does Symbol create for characters? How does Symbol drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-133',
      front: 'The Great Gatsby: Symbol - Turning Points',
      back: "Identify scenes in The Great Gatsby where Symbol is most intensely explored. How do these scenes reveal the author's perspective on Symbol? What do characters learn or fail to learn about Symbol? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-134',
      front: 'The Great Gatsby: Symbol - Literary Technique',
      back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Symbol? What specific images or symbols recur? What patterns of language convey Symbol? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-135',
      front: 'The Great Gatsby: Symbol - Critical Perspectives',
      back: 'How might different critical approaches illuminate Symbol in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Symbol. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-136',
      front: 'The Great Gatsby: Narrator - Definition',
      back: "The theme of Narrator is central to The Great Gatsby. How is Narrator explored through character action, dialogue, and plot? What does the author's treatment of Narrator reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-137',
      front: 'The Great Gatsby: Narrator - Character Analysis',
      back: 'How do characters in The Great Gatsby embody the theme of Narrator? Analyze how different characters relate to Narrator differently. What internal conflicts does Narrator create for characters? How does Narrator drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-138',
      front: 'The Great Gatsby: Narrator - Turning Points',
      back: "Identify scenes in The Great Gatsby where Narrator is most intensely explored. How do these scenes reveal the author's perspective on Narrator? What do characters learn or fail to learn about Narrator? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-139',
      front: 'The Great Gatsby: Narrator - Literary Technique',
      back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Narrator? What specific images or symbols recur? What patterns of language convey Narrator? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-140',
      front: 'The Great Gatsby: Narrator - Critical Perspectives',
      back: 'How might different critical approaches illuminate Narrator in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Narrator. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-141',
      front: 'The Great Gatsby: Illusion - Definition',
      back: "The theme of Illusion is central to The Great Gatsby. How is Illusion explored through character action, dialogue, and plot? What does the author's treatment of Illusion reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-142',
      front: 'The Great Gatsby: Illusion - Character Analysis',
      back: 'How do characters in The Great Gatsby embody the theme of Illusion? Analyze how different characters relate to Illusion differently. What internal conflicts does Illusion create for characters? How does Illusion drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-143',
      front: 'The Great Gatsby: Illusion - Turning Points',
      back: "Identify scenes in The Great Gatsby where Illusion is most intensely explored. How do these scenes reveal the author's perspective on Illusion? What do characters learn or fail to learn about Illusion? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-144',
      front: 'The Great Gatsby: Illusion - Literary Technique',
      back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Illusion? What specific images or symbols recur? What patterns of language convey Illusion? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-145',
      front: 'The Great Gatsby: Illusion - Critical Perspectives',
      back: 'How might different critical approaches illuminate Illusion in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Illusion. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-146',
      front: 'The Great Gatsby: Jazz Age - Definition',
      back: "The theme of Jazz Age is central to The Great Gatsby. How is Jazz Age explored through character action, dialogue, and plot? What does the author's treatment of Jazz Age reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-147',
      front: 'The Great Gatsby: Jazz Age - Character Analysis',
      back: 'How do characters in The Great Gatsby embody the theme of Jazz Age? Analyze how different characters relate to Jazz Age differently. What internal conflicts does Jazz Age create for characters? How does Jazz Age drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-148',
      front: 'The Great Gatsby: Jazz Age - Turning Points',
      back: "Identify scenes in The Great Gatsby where Jazz Age is most intensely explored. How do these scenes reveal the author's perspective on Jazz Age? What do characters learn or fail to learn about Jazz Age? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-149',
      front: 'The Great Gatsby: Jazz Age - Literary Technique',
      back: 'How does The Great Gatsby use literary techniques (imagery, symbolism, dialogue, structure) to explore Jazz Age? What specific images or symbols recur? What patterns of language convey Jazz Age? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-150',
      front: 'The Great Gatsby: Jazz Age - Critical Perspectives',
      back: 'How might different critical approaches illuminate Jazz Age in The Great Gatsby? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Jazz Age. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-151',
      front: 'Jane Eyre: Independence - Definition',
      back: "The theme of Independence is central to Jane Eyre. How is Independence explored through character action, dialogue, and plot? What does the author's treatment of Independence reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-152',
      front: 'Jane Eyre: Independence - Character Analysis',
      back: 'How do characters in Jane Eyre embody the theme of Independence? Analyze how different characters relate to Independence differently. What internal conflicts does Independence create for characters? How does Independence drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-153',
      front: 'Jane Eyre: Independence - Turning Points',
      back: "Identify scenes in Jane Eyre where Independence is most intensely explored. How do these scenes reveal the author's perspective on Independence? What do characters learn or fail to learn about Independence? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-154',
      front: 'Jane Eyre: Independence - Literary Technique',
      back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Independence? What specific images or symbols recur? What patterns of language convey Independence? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-155',
      front: 'Jane Eyre: Independence - Critical Perspectives',
      back: 'How might different critical approaches illuminate Independence in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Independence. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-156',
      front: 'Jane Eyre: Passion - Definition',
      back: "The theme of Passion is central to Jane Eyre. How is Passion explored through character action, dialogue, and plot? What does the author's treatment of Passion reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-157',
      front: 'Jane Eyre: Passion - Character Analysis',
      back: 'How do characters in Jane Eyre embody the theme of Passion? Analyze how different characters relate to Passion differently. What internal conflicts does Passion create for characters? How does Passion drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-158',
      front: 'Jane Eyre: Passion - Turning Points',
      back: "Identify scenes in Jane Eyre where Passion is most intensely explored. How do these scenes reveal the author's perspective on Passion? What do characters learn or fail to learn about Passion? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-159',
      front: 'Jane Eyre: Passion - Literary Technique',
      back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Passion? What specific images or symbols recur? What patterns of language convey Passion? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-160',
      front: 'Jane Eyre: Passion - Critical Perspectives',
      back: 'How might different critical approaches illuminate Passion in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Passion. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-161',
      front: 'Jane Eyre: Gothic - Definition',
      back: "The theme of Gothic is central to Jane Eyre. How is Gothic explored through character action, dialogue, and plot? What does the author's treatment of Gothic reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-162',
      front: 'Jane Eyre: Gothic - Character Analysis',
      back: 'How do characters in Jane Eyre embody the theme of Gothic? Analyze how different characters relate to Gothic differently. What internal conflicts does Gothic create for characters? How does Gothic drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-163',
      front: 'Jane Eyre: Gothic - Turning Points',
      back: "Identify scenes in Jane Eyre where Gothic is most intensely explored. How do these scenes reveal the author's perspective on Gothic? What do characters learn or fail to learn about Gothic? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-164',
      front: 'Jane Eyre: Gothic - Literary Technique',
      back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Gothic? What specific images or symbols recur? What patterns of language convey Gothic? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-165',
      front: 'Jane Eyre: Gothic - Critical Perspectives',
      back: 'How might different critical approaches illuminate Gothic in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Gothic. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-166',
      front: 'Jane Eyre: Confinement - Definition',
      back: "The theme of Confinement is central to Jane Eyre. How is Confinement explored through character action, dialogue, and plot? What does the author's treatment of Confinement reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-167',
      front: 'Jane Eyre: Confinement - Character Analysis',
      back: 'How do characters in Jane Eyre embody the theme of Confinement? Analyze how different characters relate to Confinement differently. What internal conflicts does Confinement create for characters? How does Confinement drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-168',
      front: 'Jane Eyre: Confinement - Turning Points',
      back: "Identify scenes in Jane Eyre where Confinement is most intensely explored. How do these scenes reveal the author's perspective on Confinement? What do characters learn or fail to learn about Confinement? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-169',
      front: 'Jane Eyre: Confinement - Literary Technique',
      back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Confinement? What specific images or symbols recur? What patterns of language convey Confinement? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-170',
      front: 'Jane Eyre: Confinement - Critical Perspectives',
      back: 'How might different critical approaches illuminate Confinement in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Confinement. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-171',
      front: 'Jane Eyre: Love - Definition',
      back: "The theme of Love is central to Jane Eyre. How is Love explored through character action, dialogue, and plot? What does the author's treatment of Love reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-172',
      front: 'Jane Eyre: Love - Character Analysis',
      back: 'How do characters in Jane Eyre embody the theme of Love? Analyze how different characters relate to Love differently. What internal conflicts does Love create for characters? How does Love drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-173',
      front: 'Jane Eyre: Love - Turning Points',
      back: "Identify scenes in Jane Eyre where Love is most intensely explored. How do these scenes reveal the author's perspective on Love? What do characters learn or fail to learn about Love? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-174',
      front: 'Jane Eyre: Love - Literary Technique',
      back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Love? What specific images or symbols recur? What patterns of language convey Love? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-175',
      front: 'Jane Eyre: Love - Critical Perspectives',
      back: 'How might different critical approaches illuminate Love in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Love. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-176',
      front: 'Jane Eyre: Class - Definition',
      back: "The theme of Class is central to Jane Eyre. How is Class explored through character action, dialogue, and plot? What does the author's treatment of Class reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-177',
      front: 'Jane Eyre: Class - Character Analysis',
      back: 'How do characters in Jane Eyre embody the theme of Class? Analyze how different characters relate to Class differently. What internal conflicts does Class create for characters? How does Class drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-178',
      front: 'Jane Eyre: Class - Turning Points',
      back: "Identify scenes in Jane Eyre where Class is most intensely explored. How do these scenes reveal the author's perspective on Class? What do characters learn or fail to learn about Class? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-179',
      front: 'Jane Eyre: Class - Literary Technique',
      back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Class? What specific images or symbols recur? What patterns of language convey Class? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-180',
      front: 'Jane Eyre: Class - Critical Perspectives',
      back: 'How might different critical approaches illuminate Class in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Class. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-181',
      front: 'Jane Eyre: Fire - Definition',
      back: "The theme of Fire is central to Jane Eyre. How is Fire explored through character action, dialogue, and plot? What does the author's treatment of Fire reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-182',
      front: 'Jane Eyre: Fire - Character Analysis',
      back: 'How do characters in Jane Eyre embody the theme of Fire? Analyze how different characters relate to Fire differently. What internal conflicts does Fire create for characters? How does Fire drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-183',
      front: 'Jane Eyre: Fire - Turning Points',
      back: "Identify scenes in Jane Eyre where Fire is most intensely explored. How do these scenes reveal the author's perspective on Fire? What do characters learn or fail to learn about Fire? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-184',
      front: 'Jane Eyre: Fire - Literary Technique',
      back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Fire? What specific images or symbols recur? What patterns of language convey Fire? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-185',
      front: 'Jane Eyre: Fire - Critical Perspectives',
      back: 'How might different critical approaches illuminate Fire in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Fire. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-186',
      front: 'Jane Eyre: Conscience - Definition',
      back: "The theme of Conscience is central to Jane Eyre. How is Conscience explored through character action, dialogue, and plot? What does the author's treatment of Conscience reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-187',
      front: 'Jane Eyre: Conscience - Character Analysis',
      back: 'How do characters in Jane Eyre embody the theme of Conscience? Analyze how different characters relate to Conscience differently. What internal conflicts does Conscience create for characters? How does Conscience drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-188',
      front: 'Jane Eyre: Conscience - Turning Points',
      back: "Identify scenes in Jane Eyre where Conscience is most intensely explored. How do these scenes reveal the author's perspective on Conscience? What do characters learn or fail to learn about Conscience? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-189',
      front: 'Jane Eyre: Conscience - Literary Technique',
      back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Conscience? What specific images or symbols recur? What patterns of language convey Conscience? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-190',
      front: 'Jane Eyre: Conscience - Critical Perspectives',
      back: 'How might different critical approaches illuminate Conscience in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Conscience. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-191',
      front: 'Jane Eyre: Gender - Definition',
      back: "The theme of Gender is central to Jane Eyre. How is Gender explored through character action, dialogue, and plot? What does the author's treatment of Gender reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-192',
      front: 'Jane Eyre: Gender - Character Analysis',
      back: 'How do characters in Jane Eyre embody the theme of Gender? Analyze how different characters relate to Gender differently. What internal conflicts does Gender create for characters? How does Gender drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-193',
      front: 'Jane Eyre: Gender - Turning Points',
      back: "Identify scenes in Jane Eyre where Gender is most intensely explored. How do these scenes reveal the author's perspective on Gender? What do characters learn or fail to learn about Gender? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-194',
      front: 'Jane Eyre: Gender - Literary Technique',
      back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Gender? What specific images or symbols recur? What patterns of language convey Gender? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-195',
      front: 'Jane Eyre: Gender - Critical Perspectives',
      back: 'How might different critical approaches illuminate Gender in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Gender. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-196',
      front: 'Jane Eyre: Orphanhood - Definition',
      back: "The theme of Orphanhood is central to Jane Eyre. How is Orphanhood explored through character action, dialogue, and plot? What does the author's treatment of Orphanhood reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-197',
      front: 'Jane Eyre: Orphanhood - Character Analysis',
      back: 'How do characters in Jane Eyre embody the theme of Orphanhood? Analyze how different characters relate to Orphanhood differently. What internal conflicts does Orphanhood create for characters? How does Orphanhood drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-198',
      front: 'Jane Eyre: Orphanhood - Turning Points',
      back: "Identify scenes in Jane Eyre where Orphanhood is most intensely explored. How do these scenes reveal the author's perspective on Orphanhood? What do characters learn or fail to learn about Orphanhood? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-199',
      front: 'Jane Eyre: Orphanhood - Literary Technique',
      back: 'How does Jane Eyre use literary techniques (imagery, symbolism, dialogue, structure) to explore Orphanhood? What specific images or symbols recur? What patterns of language convey Orphanhood? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-200',
      front: 'Jane Eyre: Orphanhood - Critical Perspectives',
      back: 'How might different critical approaches illuminate Orphanhood in Jane Eyre? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Orphanhood. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-201',
      front: 'Pride and Prejudice: Prejudice - Definition',
      back: "The theme of Prejudice is central to Pride and Prejudice. How is Prejudice explored through character action, dialogue, and plot? What does the author's treatment of Prejudice reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-202',
      front: 'Pride and Prejudice: Prejudice - Character Analysis',
      back: 'How do characters in Pride and Prejudice embody the theme of Prejudice? Analyze how different characters relate to Prejudice differently. What internal conflicts does Prejudice create for characters? How does Prejudice drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-203',
      front: 'Pride and Prejudice: Prejudice - Turning Points',
      back: "Identify scenes in Pride and Prejudice where Prejudice is most intensely explored. How do these scenes reveal the author's perspective on Prejudice? What do characters learn or fail to learn about Prejudice? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-204',
      front: 'Pride and Prejudice: Prejudice - Literary Technique',
      back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Prejudice? What specific images or symbols recur? What patterns of language convey Prejudice? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-205',
      front: 'Pride and Prejudice: Prejudice - Critical Perspectives',
      back: 'How might different critical approaches illuminate Prejudice in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Prejudice. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-206',
      front: 'Pride and Prejudice: Pride - Definition',
      back: "The theme of Pride is central to Pride and Prejudice. How is Pride explored through character action, dialogue, and plot? What does the author's treatment of Pride reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-207',
      front: 'Pride and Prejudice: Pride - Character Analysis',
      back: 'How do characters in Pride and Prejudice embody the theme of Pride? Analyze how different characters relate to Pride differently. What internal conflicts does Pride create for characters? How does Pride drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-208',
      front: 'Pride and Prejudice: Pride - Turning Points',
      back: "Identify scenes in Pride and Prejudice where Pride is most intensely explored. How do these scenes reveal the author's perspective on Pride? What do characters learn or fail to learn about Pride? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-209',
      front: 'Pride and Prejudice: Pride - Literary Technique',
      back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Pride? What specific images or symbols recur? What patterns of language convey Pride? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-210',
      front: 'Pride and Prejudice: Pride - Critical Perspectives',
      back: 'How might different critical approaches illuminate Pride in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Pride. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-211',
      front: 'Pride and Prejudice: Marriage - Definition',
      back: "The theme of Marriage is central to Pride and Prejudice. How is Marriage explored through character action, dialogue, and plot? What does the author's treatment of Marriage reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-212',
      front: 'Pride and Prejudice: Marriage - Character Analysis',
      back: 'How do characters in Pride and Prejudice embody the theme of Marriage? Analyze how different characters relate to Marriage differently. What internal conflicts does Marriage create for characters? How does Marriage drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-213',
      front: 'Pride and Prejudice: Marriage - Turning Points',
      back: "Identify scenes in Pride and Prejudice where Marriage is most intensely explored. How do these scenes reveal the author's perspective on Marriage? What do characters learn or fail to learn about Marriage? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-214',
      front: 'Pride and Prejudice: Marriage - Literary Technique',
      back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Marriage? What specific images or symbols recur? What patterns of language convey Marriage? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-215',
      front: 'Pride and Prejudice: Marriage - Critical Perspectives',
      back: 'How might different critical approaches illuminate Marriage in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Marriage. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-216',
      front: 'Pride and Prejudice: Class - Definition',
      back: "The theme of Class is central to Pride and Prejudice. How is Class explored through character action, dialogue, and plot? What does the author's treatment of Class reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-217',
      front: 'Pride and Prejudice: Class - Character Analysis',
      back: 'How do characters in Pride and Prejudice embody the theme of Class? Analyze how different characters relate to Class differently. What internal conflicts does Class create for characters? How does Class drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-218',
      front: 'Pride and Prejudice: Class - Turning Points',
      back: "Identify scenes in Pride and Prejudice where Class is most intensely explored. How do these scenes reveal the author's perspective on Class? What do characters learn or fail to learn about Class? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-219',
      front: 'Pride and Prejudice: Class - Literary Technique',
      back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Class? What specific images or symbols recur? What patterns of language convey Class? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-220',
      front: 'Pride and Prejudice: Class - Critical Perspectives',
      back: 'How might different critical approaches illuminate Class in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Class. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-221',
      front: 'Pride and Prejudice: Wit - Definition',
      back: "The theme of Wit is central to Pride and Prejudice. How is Wit explored through character action, dialogue, and plot? What does the author's treatment of Wit reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-222',
      front: 'Pride and Prejudice: Wit - Character Analysis',
      back: 'How do characters in Pride and Prejudice embody the theme of Wit? Analyze how different characters relate to Wit differently. What internal conflicts does Wit create for characters? How does Wit drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-223',
      front: 'Pride and Prejudice: Wit - Turning Points',
      back: "Identify scenes in Pride and Prejudice where Wit is most intensely explored. How do these scenes reveal the author's perspective on Wit? What do characters learn or fail to learn about Wit? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-224',
      front: 'Pride and Prejudice: Wit - Literary Technique',
      back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Wit? What specific images or symbols recur? What patterns of language convey Wit? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-225',
      front: 'Pride and Prejudice: Wit - Critical Perspectives',
      back: 'How might different critical approaches illuminate Wit in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Wit. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-226',
      front: 'Pride and Prejudice: Women - Definition',
      back: "The theme of Women is central to Pride and Prejudice. How is Women explored through character action, dialogue, and plot? What does the author's treatment of Women reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-227',
      front: 'Pride and Prejudice: Women - Character Analysis',
      back: 'How do characters in Pride and Prejudice embody the theme of Women? Analyze how different characters relate to Women differently. What internal conflicts does Women create for characters? How does Women drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-228',
      front: 'Pride and Prejudice: Women - Turning Points',
      back: "Identify scenes in Pride and Prejudice where Women is most intensely explored. How do these scenes reveal the author's perspective on Women? What do characters learn or fail to learn about Women? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-229',
      front: 'Pride and Prejudice: Women - Literary Technique',
      back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Women? What specific images or symbols recur? What patterns of language convey Women? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-230',
      front: 'Pride and Prejudice: Women - Critical Perspectives',
      back: 'How might different critical approaches illuminate Women in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Women. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-231',
      front: 'Pride and Prejudice: Choice - Definition',
      back: "The theme of Choice is central to Pride and Prejudice. How is Choice explored through character action, dialogue, and plot? What does the author's treatment of Choice reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-232',
      front: 'Pride and Prejudice: Choice - Character Analysis',
      back: 'How do characters in Pride and Prejudice embody the theme of Choice? Analyze how different characters relate to Choice differently. What internal conflicts does Choice create for characters? How does Choice drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-233',
      front: 'Pride and Prejudice: Choice - Turning Points',
      back: "Identify scenes in Pride and Prejudice where Choice is most intensely explored. How do these scenes reveal the author's perspective on Choice? What do characters learn or fail to learn about Choice? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-234',
      front: 'Pride and Prejudice: Choice - Literary Technique',
      back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Choice? What specific images or symbols recur? What patterns of language convey Choice? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-235',
      front: 'Pride and Prejudice: Choice - Critical Perspectives',
      back: 'How might different critical approaches illuminate Choice in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Choice. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-236',
      front: 'Pride and Prejudice: Virtue - Definition',
      back: "The theme of Virtue is central to Pride and Prejudice. How is Virtue explored through character action, dialogue, and plot? What does the author's treatment of Virtue reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-237',
      front: 'Pride and Prejudice: Virtue - Character Analysis',
      back: 'How do characters in Pride and Prejudice embody the theme of Virtue? Analyze how different characters relate to Virtue differently. What internal conflicts does Virtue create for characters? How does Virtue drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-238',
      front: 'Pride and Prejudice: Virtue - Turning Points',
      back: "Identify scenes in Pride and Prejudice where Virtue is most intensely explored. How do these scenes reveal the author's perspective on Virtue? What do characters learn or fail to learn about Virtue? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-239',
      front: 'Pride and Prejudice: Virtue - Literary Technique',
      back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Virtue? What specific images or symbols recur? What patterns of language convey Virtue? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-240',
      front: 'Pride and Prejudice: Virtue - Critical Perspectives',
      back: 'How might different critical approaches illuminate Virtue in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Virtue. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-241',
      front: 'Pride and Prejudice: Society - Definition',
      back: "The theme of Society is central to Pride and Prejudice. How is Society explored through character action, dialogue, and plot? What does the author's treatment of Society reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-242',
      front: 'Pride and Prejudice: Society - Character Analysis',
      back: 'How do characters in Pride and Prejudice embody the theme of Society? Analyze how different characters relate to Society differently. What internal conflicts does Society create for characters? How does Society drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-243',
      front: 'Pride and Prejudice: Society - Turning Points',
      back: "Identify scenes in Pride and Prejudice where Society is most intensely explored. How do these scenes reveal the author's perspective on Society? What do characters learn or fail to learn about Society? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-244',
      front: 'Pride and Prejudice: Society - Literary Technique',
      back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Society? What specific images or symbols recur? What patterns of language convey Society? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-245',
      front: 'Pride and Prejudice: Society - Critical Perspectives',
      back: 'How might different critical approaches illuminate Society in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Society. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-246',
      front: 'Pride and Prejudice: Change - Definition',
      back: "The theme of Change is central to Pride and Prejudice. How is Change explored through character action, dialogue, and plot? What does the author's treatment of Change reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-247',
      front: 'Pride and Prejudice: Change - Character Analysis',
      back: 'How do characters in Pride and Prejudice embody the theme of Change? Analyze how different characters relate to Change differently. What internal conflicts does Change create for characters? How does Change drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-248',
      front: 'Pride and Prejudice: Change - Turning Points',
      back: "Identify scenes in Pride and Prejudice where Change is most intensely explored. How do these scenes reveal the author's perspective on Change? What do characters learn or fail to learn about Change? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-249',
      front: 'Pride and Prejudice: Change - Literary Technique',
      back: 'How does Pride and Prejudice use literary techniques (imagery, symbolism, dialogue, structure) to explore Change? What specific images or symbols recur? What patterns of language convey Change? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-250',
      front: 'Pride and Prejudice: Change - Critical Perspectives',
      back: 'How might different critical approaches illuminate Change in Pride and Prejudice? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Change. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-251',
      front: 'Animal Farm: Power - Definition',
      back: "The theme of Power is central to Animal Farm. How is Power explored through character action, dialogue, and plot? What does the author's treatment of Power reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-252',
      front: 'Animal Farm: Power - Character Analysis',
      back: 'How do characters in Animal Farm embody the theme of Power? Analyze how different characters relate to Power differently. What internal conflicts does Power create for characters? How does Power drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-253',
      front: 'Animal Farm: Power - Turning Points',
      back: "Identify scenes in Animal Farm where Power is most intensely explored. How do these scenes reveal the author's perspective on Power? What do characters learn or fail to learn about Power? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-254',
      front: 'Animal Farm: Power - Literary Technique',
      back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Power? What specific images or symbols recur? What patterns of language convey Power? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-255',
      front: 'Animal Farm: Power - Critical Perspectives',
      back: 'How might different critical approaches illuminate Power in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Power. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-256',
      front: 'Animal Farm: Revolution - Definition',
      back: "The theme of Revolution is central to Animal Farm. How is Revolution explored through character action, dialogue, and plot? What does the author's treatment of Revolution reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-257',
      front: 'Animal Farm: Revolution - Character Analysis',
      back: 'How do characters in Animal Farm embody the theme of Revolution? Analyze how different characters relate to Revolution differently. What internal conflicts does Revolution create for characters? How does Revolution drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-258',
      front: 'Animal Farm: Revolution - Turning Points',
      back: "Identify scenes in Animal Farm where Revolution is most intensely explored. How do these scenes reveal the author's perspective on Revolution? What do characters learn or fail to learn about Revolution? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-259',
      front: 'Animal Farm: Revolution - Literary Technique',
      back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Revolution? What specific images or symbols recur? What patterns of language convey Revolution? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-260',
      front: 'Animal Farm: Revolution - Critical Perspectives',
      back: 'How might different critical approaches illuminate Revolution in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Revolution. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-261',
      front: 'Animal Farm: Propaganda - Definition',
      back: "The theme of Propaganda is central to Animal Farm. How is Propaganda explored through character action, dialogue, and plot? What does the author's treatment of Propaganda reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-262',
      front: 'Animal Farm: Propaganda - Character Analysis',
      back: 'How do characters in Animal Farm embody the theme of Propaganda? Analyze how different characters relate to Propaganda differently. What internal conflicts does Propaganda create for characters? How does Propaganda drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-263',
      front: 'Animal Farm: Propaganda - Turning Points',
      back: "Identify scenes in Animal Farm where Propaganda is most intensely explored. How do these scenes reveal the author's perspective on Propaganda? What do characters learn or fail to learn about Propaganda? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-264',
      front: 'Animal Farm: Propaganda - Literary Technique',
      back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Propaganda? What specific images or symbols recur? What patterns of language convey Propaganda? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-265',
      front: 'Animal Farm: Propaganda - Critical Perspectives',
      back: 'How might different critical approaches illuminate Propaganda in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Propaganda. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-266',
      front: 'Animal Farm: Class - Definition',
      back: "The theme of Class is central to Animal Farm. How is Class explored through character action, dialogue, and plot? What does the author's treatment of Class reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-267',
      front: 'Animal Farm: Class - Character Analysis',
      back: 'How do characters in Animal Farm embody the theme of Class? Analyze how different characters relate to Class differently. What internal conflicts does Class create for characters? How does Class drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-268',
      front: 'Animal Farm: Class - Turning Points',
      back: "Identify scenes in Animal Farm where Class is most intensely explored. How do these scenes reveal the author's perspective on Class? What do characters learn or fail to learn about Class? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-269',
      front: 'Animal Farm: Class - Literary Technique',
      back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Class? What specific images or symbols recur? What patterns of language convey Class? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-270',
      front: 'Animal Farm: Class - Critical Perspectives',
      back: 'How might different critical approaches illuminate Class in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Class. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-271',
      front: 'Animal Farm: Corruption - Definition',
      back: "The theme of Corruption is central to Animal Farm. How is Corruption explored through character action, dialogue, and plot? What does the author's treatment of Corruption reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-272',
      front: 'Animal Farm: Corruption - Character Analysis',
      back: 'How do characters in Animal Farm embody the theme of Corruption? Analyze how different characters relate to Corruption differently. What internal conflicts does Corruption create for characters? How does Corruption drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-273',
      front: 'Animal Farm: Corruption - Turning Points',
      back: "Identify scenes in Animal Farm where Corruption is most intensely explored. How do these scenes reveal the author's perspective on Corruption? What do characters learn or fail to learn about Corruption? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-274',
      front: 'Animal Farm: Corruption - Literary Technique',
      back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Corruption? What specific images or symbols recur? What patterns of language convey Corruption? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-275',
      front: 'Animal Farm: Corruption - Critical Perspectives',
      back: 'How might different critical approaches illuminate Corruption in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Corruption. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-276',
      front: 'Animal Farm: Language - Definition',
      back: "The theme of Language is central to Animal Farm. How is Language explored through character action, dialogue, and plot? What does the author's treatment of Language reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-277',
      front: 'Animal Farm: Language - Character Analysis',
      back: 'How do characters in Animal Farm embody the theme of Language? Analyze how different characters relate to Language differently. What internal conflicts does Language create for characters? How does Language drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-278',
      front: 'Animal Farm: Language - Turning Points',
      back: "Identify scenes in Animal Farm where Language is most intensely explored. How do these scenes reveal the author's perspective on Language? What do characters learn or fail to learn about Language? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-279',
      front: 'Animal Farm: Language - Literary Technique',
      back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Language? What specific images or symbols recur? What patterns of language convey Language? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-280',
      front: 'Animal Farm: Language - Critical Perspectives',
      back: 'How might different critical approaches illuminate Language in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Language. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-281',
      front: 'Animal Farm: Fear - Definition',
      back: "The theme of Fear is central to Animal Farm. How is Fear explored through character action, dialogue, and plot? What does the author's treatment of Fear reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-282',
      front: 'Animal Farm: Fear - Character Analysis',
      back: 'How do characters in Animal Farm embody the theme of Fear? Analyze how different characters relate to Fear differently. What internal conflicts does Fear create for characters? How does Fear drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-283',
      front: 'Animal Farm: Fear - Turning Points',
      back: "Identify scenes in Animal Farm where Fear is most intensely explored. How do these scenes reveal the author's perspective on Fear? What do characters learn or fail to learn about Fear? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-284',
      front: 'Animal Farm: Fear - Literary Technique',
      back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Fear? What specific images or symbols recur? What patterns of language convey Fear? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-285',
      front: 'Animal Farm: Fear - Critical Perspectives',
      back: 'How might different critical approaches illuminate Fear in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Fear. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-286',
      front: 'Animal Farm: History - Definition',
      back: "The theme of History is central to Animal Farm. How is History explored through character action, dialogue, and plot? What does the author's treatment of History reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-287',
      front: 'Animal Farm: History - Character Analysis',
      back: 'How do characters in Animal Farm embody the theme of History? Analyze how different characters relate to History differently. What internal conflicts does History create for characters? How does History drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-288',
      front: 'Animal Farm: History - Turning Points',
      back: "Identify scenes in Animal Farm where History is most intensely explored. How do these scenes reveal the author's perspective on History? What do characters learn or fail to learn about History? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-289',
      front: 'Animal Farm: History - Literary Technique',
      back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore History? What specific images or symbols recur? What patterns of language convey History? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-290',
      front: 'Animal Farm: History - Critical Perspectives',
      back: 'How might different critical approaches illuminate History in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to History. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-291',
      front: 'Animal Farm: Loyalty - Definition',
      back: "The theme of Loyalty is central to Animal Farm. How is Loyalty explored through character action, dialogue, and plot? What does the author's treatment of Loyalty reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-292',
      front: 'Animal Farm: Loyalty - Character Analysis',
      back: 'How do characters in Animal Farm embody the theme of Loyalty? Analyze how different characters relate to Loyalty differently. What internal conflicts does Loyalty create for characters? How does Loyalty drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-293',
      front: 'Animal Farm: Loyalty - Turning Points',
      back: "Identify scenes in Animal Farm where Loyalty is most intensely explored. How do these scenes reveal the author's perspective on Loyalty? What do characters learn or fail to learn about Loyalty? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-294',
      front: 'Animal Farm: Loyalty - Literary Technique',
      back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Loyalty? What specific images or symbols recur? What patterns of language convey Loyalty? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-295',
      front: 'Animal Farm: Loyalty - Critical Perspectives',
      back: 'How might different critical approaches illuminate Loyalty in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Loyalty. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-296',
      front: 'Animal Farm: Betrayal - Definition',
      back: "The theme of Betrayal is central to Animal Farm. How is Betrayal explored through character action, dialogue, and plot? What does the author's treatment of Betrayal reveal about their worldview? Provide specific textual evidence and explain its significance to the overall narrative.",
    },
    {
      id: 'bulk-297',
      front: 'Animal Farm: Betrayal - Character Analysis',
      back: 'How do characters in Animal Farm embody the theme of Betrayal? Analyze how different characters relate to Betrayal differently. What internal conflicts does Betrayal create for characters? How does Betrayal drive character decisions and development? Use specific scenes to support your analysis.',
    },
    {
      id: 'bulk-298',
      front: 'Animal Farm: Betrayal - Turning Points',
      back: "Identify scenes in Animal Farm where Betrayal is most intensely explored. How do these scenes reveal the author's perspective on Betrayal? What do characters learn or fail to learn about Betrayal? How do these moments advance the plot or deepen thematic meaning? Connect multiple scenes showing theme development.",
    },
    {
      id: 'bulk-299',
      front: 'Animal Farm: Betrayal - Literary Technique',
      back: 'How does Animal Farm use literary techniques (imagery, symbolism, dialogue, structure) to explore Betrayal? What specific images or symbols recur? What patterns of language convey Betrayal? How do formal choices reinforce thematic meaning? Analyze the relationship between form and content.',
    },
    {
      id: 'bulk-300',
      front: 'Animal Farm: Betrayal - Critical Perspectives',
      back: 'How might different critical approaches illuminate Betrayal in Animal Farm? Apply Marxist, feminist, psychoanalytic, or formalist criticism to Betrayal. What does each perspective reveal? What does each perspective overlook? Develop a sophisticated reading using one critical approach throughout your essay.',
    },
    {
      id: 'bulk-301',
      front: 'Exam Strategy #1',
      back: 'Time management: Spend 10 min planning, 40 min writing, 5 min proofreading  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
    },
    {
      id: 'bulk-302',
      front: 'Exam Strategy #2',
      back: 'Start with strongest evidence to hook the reader  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
    },
    {
      id: 'bulk-303',
      front: 'Exam Strategy #3',
      back: 'Use topic sentences to guide reader through argument  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
    },
    {
      id: 'bulk-304',
      front: 'Exam Strategy #4',
      back: "Explain quotations; don't assume they speak for themselves  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.",
    },
    {
      id: 'bulk-305',
      front: 'Exam Strategy #5',
      back: 'End paragraphs with a sentence connecting to thesis  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
    },
    {
      id: 'bulk-306',
      front: 'Exam Strategy #6',
      back: 'Use subject-specific terminology accurately  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
    },
    {
      id: 'bulk-307',
      front: 'Exam Strategy #7',
      back: 'Vary sentence length to maintain reader interest  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
    },
    {
      id: 'bulk-308',
      front: 'Exam Strategy #8',
      back: 'Show awareness of alternative interpretations  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
    },
    {
      id: 'bulk-309',
      front: 'Exam Strategy #9',
      back: 'Use present tense when discussing literature  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
    },
    {
      id: 'bulk-310',
      front: 'Exam Strategy #10',
      back: 'Proofread for spelling and grammar errors  Why this matters: Strong essays follow consistent strategies that demonstrate planning and care. This single technique can improve your essay by making it clearer, more persuasive, and more sophisticated.',
    },
    {
      id: 'bulk-311',
      front: 'Comparative Essay #1: Macbeth vs Romeo and Juliet',
      back: 'Both feature tragic protagonists whose actions lead to downfall. Compare how Shakespeare shows character agency vs fate in each play.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
    },
    {
      id: 'bulk-312',
      front: 'Comparative Essay #1: Macbeth vs Romeo and Juliet',
      back: 'Both feature tragic protagonists whose actions lead to downfall. Compare how Shakespeare shows character agency vs fate in each play.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
    },
    {
      id: 'bulk-313',
      front: 'Comparative Essay #1: Macbeth vs Romeo and Juliet',
      back: 'Both feature tragic protagonists whose actions lead to downfall. Compare how Shakespeare shows character agency vs fate in each play.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
    },
    {
      id: 'bulk-314',
      front: 'Comparative Essay #2: The Great Gatsby vs Pride and Prejudice',
      back: "Both critique social systems affecting protagonist choices. How does Fitzgerald's critique of capitalism compare to Austen's critique of marriage economics?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
    },
    {
      id: 'bulk-315',
      front: 'Comparative Essay #2: The Great Gatsby vs Pride and Prejudice',
      back: "Both critique social systems affecting protagonist choices. How does Fitzgerald's critique of capitalism compare to Austen's critique of marriage economics?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
    },
    {
      id: 'bulk-316',
      front: 'Comparative Essay #2: The Great Gatsby vs Pride and Prejudice',
      back: "Both critique social systems affecting protagonist choices. How does Fitzgerald's critique of capitalism compare to Austen's critique of marriage economics?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
    },
    {
      id: 'bulk-317',
      front: 'Comparative Essay #3: Jane Eyre vs Pride and Prejudice',
      back: 'Both feature heroines who insist on their right to choose husbands. Compare how Brontë and Austen present female agency and marriage differently.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
    },
    {
      id: 'bulk-318',
      front: 'Comparative Essay #3: Jane Eyre vs Pride and Prejudice',
      back: 'Both feature heroines who insist on their right to choose husbands. Compare how Brontë and Austen present female agency and marriage differently.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
    },
    {
      id: 'bulk-319',
      front: 'Comparative Essay #3: Jane Eyre vs Pride and Prejudice',
      back: 'Both feature heroines who insist on their right to choose husbands. Compare how Brontë and Austen present female agency and marriage differently.  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.',
    },
    {
      id: 'bulk-320',
      front: 'Comparative Essay #4: Animal Farm vs Macbeth',
      back: "Both show how power corrupts. Compare Orwell's allegory to Shakespeare's tragedy. How does each author suggest corruption happens?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
    },
    {
      id: 'bulk-321',
      front: 'Comparative Essay #4: Animal Farm vs Macbeth',
      back: "Both show how power corrupts. Compare Orwell's allegory to Shakespeare's tragedy. How does each author suggest corruption happens?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
    },
    {
      id: 'bulk-322',
      front: 'Comparative Essay #4: Animal Farm vs Macbeth',
      back: "Both show how power corrupts. Compare Orwell's allegory to Shakespeare's tragedy. How does each author suggest corruption happens?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
    },
    {
      id: 'bulk-323',
      front: 'Comparative Essay #5: The Great Gatsby vs Animal Farm',
      back: "Both critique systems of power and ambition. How does Fitzgerald's capitalist critique compare to Orwell's communist critique?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
    },
    {
      id: 'bulk-324',
      front: 'Comparative Essay #5: The Great Gatsby vs Animal Farm',
      back: "Both critique systems of power and ambition. How does Fitzgerald's capitalist critique compare to Orwell's communist critique?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
    },
    {
      id: 'bulk-325',
      front: 'Comparative Essay #5: The Great Gatsby vs Animal Farm',
      back: "Both critique systems of power and ambition. How does Fitzgerald's capitalist critique compare to Orwell's communist critique?  Structure: Introduce both texts and your argument in thesis. In body, make explicit comparisons rather than treating texts separately. Show what the differences reveal. Conclude with significance of comparative insights.",
    },
  ],
}

export default deck
