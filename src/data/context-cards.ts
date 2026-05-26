// @ts-nocheck
export interface ContextCard {
  id: string
  text: string
  author: string
  period: string
  historicalContext: { event: string; relevance: string }[]
  socialContext: { aspect: string; detail: string }[]
  literaryContext: { movement: string; features: string }[]
  authorBackground: string
  keyDatesTimeline: { date: string; event: string }[]
  examUse: string
}

export const contextCards: ContextCard[] = [
  {
    id: 'macbeth',
    text: 'Macbeth',
    author: 'William Shakespeare',
    period: '1606',
    historicalContext: [
      {
        event: 'Gunpowder Plot (1605)',
        relevance:
          "James I's narrow escape from assassination influenced themes of regicide and political instability. The play's exploration of tyranny and treachery reflects contemporary anxieties about royal security and loyalty.",
      },
      {
        event: "James I's Kingship (1603-1625)",
        relevance:
          "The play engages with James I's theory of the Divine Right of Kings. The supernatural elements and prophecies align with the king's interest in witchcraft, published in his 'Daemonologie' (1597).",
      },
      {
        event: 'Scottish History and English Politics',
        relevance:
          "The union of Scottish and English crowns under James I makes the Scottish setting politically charged. The play validates Stuart claims to legitimacy through Macbeth's illegitimate rule.",
      },
    ],
    socialContext: [
      {
        aspect: 'Witchcraft and Superstition',
        detail:
          'Early 17th-century belief in supernatural forces was widespread. The Scottish witch hunts (1590s-1620s) killed hundreds. Witches were viewed as agents of Satan, and the weird sisters reflect genuine contemporary fears.',
      },
      {
        aspect: 'Masculinity and Power',
        detail:
          "Elizabethan and Jacobean society valued martial prowess and military loyalty. Lady Macbeth's challenge to Macbeth's manhood reflects anxieties about masculinity, ambition, and the performance of power.",
      },
      {
        aspect: 'Gender and Ambition',
        detail:
          "Women in positions of influence were viewed with suspicion. Lady Macbeth's manipulation and supernatural invocation ('unsex me here') challenges gender norms of the period.",
      },
    ],
    literaryContext: [
      {
        movement: 'Jacobean Tragedy',
        features:
          'Dark, introspective exploration of psychological corruption. The play features the descent of a protagonist through moral transgression, influenced by revenge tragedy conventions.',
      },
      {
        movement: 'Revenge Tragedy Elements',
        features:
          'While not purely revenge tragedy, the play employs its vocabulary of guilt, supernatural injunction, and moral collapse. Ghosts and prophecies drive the narrative.',
      },
      {
        movement: 'Tragedy of Ambition',
        features:
          "Explores how unchecked ambition corrupts the soul. The protagonist's tragic flaw-his susceptibility to temptation-drives the tragic action.",
      },
    ],
    authorBackground:
      "Shakespeare (1564-1616) was an established playwright in London by 1606. Writing for the King's Men under royal patronage, he crafted a play that speaks directly to Jacobean anxieties while maintaining dramatic power. His knowledge of Scottish history and contemporary politics is evident throughout.",
    keyDatesTimeline: [
      { date: '1605', event: 'Gunpowder Plot' },
      { date: '1606', event: 'Macbeth likely first performed before James I' },
      { date: '1623', event: 'First published in the First Folio' },
    ],
    examUse:
      'Macbeth exemplifies Shakespearean tragedy and explores themes of ambition, power, corruption, and fate. Its short length makes it ideal for detailed analysis. Political dimensions reward contextual study, while psychological complexity offers rich character analysis opportunities.',
  },

  {
    id: 'romeo-juliet',
    text: 'Romeo and Juliet',
    author: 'William Shakespeare',
    period: '1594-1596',
    historicalContext: [
      {
        event: 'Renaissance Italy',
        relevance:
          'Set in Verona during the Italian Renaissance, a period of cultural flourishing and political conflict. The Montague-Capulet feud reflects real factional violence in Italian city-states.',
      },
      {
        event: 'Patronage and Feuds',
        relevance:
          "Family feuds dominating public life were characteristic of Italian Renaissance politics. The Prince's inability to control violence mirrors actual governance challenges.",
      },
      {
        event: 'Marriage and Family Politics',
        relevance:
          "Strategic marriages arranged by parents for political and economic advantage were common. Romeo and Juliet's secret marriage defies social convention and parental authority.",
      },
    ],
    socialContext: [
      {
        aspect: 'Youth and Rebellion',
        detail:
          'The play presents sympathetic youth challenging parental authority and rigid social structures. This theme resonated in Renaissance Europe where generational conflict was intensifying.',
      },
      {
        aspect: 'Female Agency',
        detail:
          'Juliet demonstrates remarkable independence: she takes the initiative in courtship, questions parental authority, and makes autonomous decisions about her life and death.',
      },
      {
        aspect: 'Class and Status',
        detail:
          'Both families are patrician, yet the Nurse and Mercutio represent lower social standings. Class divisions affect communication and outcomes.',
      },
    ],
    literaryContext: [
      {
        movement: 'Romantic Tragedy',
        features:
          'The play pioneers the romantic tragedy genre, emphasizing intense emotional experience and the destructive power of love. Lyrical language and poetic imagery elevate personal passion.',
      },
      {
        movement: 'Comedy to Tragedy Shift',
        features:
          'The play begins with comic elements, witty wordplay, and lighthearted scenes before shifting to tragedy. This tonal complexity creates emotional impact.',
      },
      {
        movement: 'Shakespearean Dramatic Technique',
        features:
          'The play employs parallel scenes, symbolic imagery, light/dark imagery, and dramatic irony. The chorus frames the action and comments on fate.',
      },
    ],
    authorBackground:
      "Shakespeare wrote Romeo and Juliet early in his career, drawing on Arthur Brooke's 'The Tragical History of Romeus and Juliet' (1562) and other sources. His lyrical language and psychological insight transformed source material into a masterpiece.",
    keyDatesTimeline: [
      { date: '1562', event: "Arthur Brooke's poem published" },
      { date: '1594-1596', event: "Shakespeare's play likely written" },
      { date: '1623', event: 'First published in the First Folio' },
    ],
    examUse:
      'The play offers rich opportunities for exploring love, fate, family conflict, and youth. Its accessibility combined with literary sophistication makes it ideal for analysis of dramatic technique, character development, and thematic exploration.',
  },

  {
    id: 'the-tempest',
    text: 'The Tempest',
    author: 'William Shakespeare',
    period: '1610-1611',
    historicalContext: [
      {
        event: 'Colonial Expansion',
        relevance:
          "Written during England's colonial ambitions in the New World, the play engages with questions of colonization, exploration, and cultural encounter. Prospero's dominion over Caliban reflects colonial power dynamics.",
      },
      {
        event: 'The Bermuda Wreck (1609)',
        relevance:
          "The shipwreck narrative was inspired by contemporary accounts of the Sea Venture's wreck in Bermuda. These accounts influenced the play's island setting and themes of survival.",
      },
      {
        event: 'Paternal Authority and Succession',
        relevance:
          "The play explores legitimate authority, inheritance, and political succession-concerns central to Jacobean court politics and anxieties about James I's reign.",
      },
    ],
    socialContext: [
      {
        aspect: 'Colonialism and Exploitation',
        detail:
          "Caliban's enslavement and dispossession raise questions about colonial injustice. His initial kindness to Prospero contrasts with his subsequent treatment, critiquing colonialism.",
      },
      {
        aspect: 'Magic and Supernatural Power',
        detail:
          "Prospero's magic represents Renaissance learning and knowledge. His renunciation of magic at the play's end suggests ambivalence about power and control.",
      },
      {
        aspect: 'Gender and Marriage',
        detail:
          "Miranda's betrothal to Ferdinand serves political purposes while celebrating romantic love. Her education and relative agency reflect Renaissance ideals of female virtue.",
      },
    ],
    literaryContext: [
      {
        movement: 'Late Jacobean Romance',
        features:
          'The play employs romance conventions: shipwreck, magical intervention, separated families, and restoration. It combines dramatic action with poetic language and spectacle.',
      },
      {
        movement: 'Metatheatre',
        features:
          "The play self-consciously references its own theatrical nature. Prospero's magic parallels the dramatist's craft, and the epilogue breaks the fourth wall.",
      },
      {
        movement: 'Symbolic Imagery',
        features:
          'Islands, storms, magic, and music carry symbolic weight. Water imagery represents transformation; music represents harmony and control.',
      },
    ],
    authorBackground:
      "The Tempest was likely Shakespeare's last solo-authored play, written near the end of his career. It demonstrates his mastery of theatrical technique and his engagement with contemporary intellectual and political concerns.",
    keyDatesTimeline: [
      { date: '1609', event: 'Sea Venture wreck in Bermuda' },
      { date: '1610-1611', event: 'The Tempest likely written' },
      { date: '1623', event: 'First published in the First Folio' },
    ],
    examUse:
      'The Tempest rewards analysis of power dynamics, colonialism, magic, and reconciliation. Its combination of spectacle, supernatural elements, and philosophical depth provides rich material for exploring Shakespearean drama and early modern concerns.',
  },

  {
    id: 'merchant-of-venice',
    text: 'The Merchant of Venice',
    author: 'William Shakespeare',
    period: '1596-1597',
    historicalContext: [
      {
        event: "Venice's Mercantile Power",
        relevance:
          "Venice was Europe's premier trading center. The play depicts the commercial networks and financial instruments that made Venice wealthy, including bills of exchange and maritime insurance.",
      },
      {
        event: 'Jewish Persecution',
        relevance:
          "Jews were expelled from England in 1290 and did not return until the 17th century. Anti-Semitism was embedded in Christian theology and law. Shylock's characterization must be understood against this persecution.",
      },
      {
        event: 'Usury Laws and Finance',
        relevance:
          "Christian Europe prohibited usury (charging interest on loans). Jews, excluded from most professions, became moneylenders. This economic marginalization fuels the play's central conflict.",
      },
    ],
    socialContext: [
      {
        aspect: 'Prejudice and Otherness',
        detail:
          "Shylock is repeatedly denigrated for his religion and profession. The play reflects Christian prejudice while also presenting Shylock's compelling defense of his humanity.",
      },
      {
        aspect: 'Marriage and Courtship',
        detail:
          "Portia's marriage is contested through a lottery of caskets, reflecting anxieties about female choice and paternal control. Her disguise as a lawyer challenges gender norms.",
      },
      {
        aspect: 'Friendship and Love',
        detail:
          'The intense male friendships and devotion (Antonio for Bassanio) reflect Renaissance ideals of male bonding, while heterosexual romance is presented as essential.',
      },
    ],
    literaryContext: [
      {
        movement: 'Comedy with Dark Elements',
        features:
          'Though classified as comedy, the play contains serious elements including the threat of death and the fate of Shylock. The ending is complex rather than purely celebratory.',
      },
      {
        movement: 'Disguise and Deception',
        features:
          "Portia's disguise as a lawyer and Jessica's elopement employ disguise as a vehicle for female agency and challenge to social order.",
      },
      {
        movement: 'Legal Drama',
        features:
          "The trial scene employs legal language and rhetoric. Justice is a central theme, with Portia's mercy speech presenting an ideal of justice tempered with compassion.",
      },
    ],
    authorBackground:
      'Shakespeare wrote this play early in his career, drawing on earlier works and contemporary tales. His nuanced characterization of Shylock-neither purely villainous nor sympathetic-demonstrates his dramatic sophistication.',
    keyDatesTimeline: [
      { date: '1290', event: 'Jews expelled from England' },
      { date: '1596-1597', event: 'The Merchant of Venice likely written' },
      { date: '1623', event: 'First published in the First Folio' },
    ],
    examUse:
      'The play offers complex opportunities for exploring prejudice, justice, mercy, and the treatment of otherness. Its examination of commercial society and financial ethics remains relevant. Character analysis of Shylock and Portia rewards contextual understanding.',
  },

  {
    id: 'much-ado',
    text: 'Much Ado About Nothing',
    author: 'William Shakespeare',
    period: '1598-1599',
    historicalContext: [
      {
        event: 'Elizabethan Court Culture',
        relevance:
          'The play reflects the sophisticated wit and verbal sparring of the Elizabethan court. The banter between Beatrice and Benedick mirrors courtly courtship rituals.',
      },
      {
        event: 'War and Military Service',
        relevance:
          'The play opens with soldiers returning from war. Military service was central to male honor and social status in Elizabethan society.',
      },
      {
        event: 'Social Hierarchy and Class',
        relevance:
          'The play navigates class divisions: Leonato is a gentleman, Claudio a nobleman, and Don John a bastard. These distinctions matter for courtship and social standing.',
      },
    ],
    socialContext: [
      {
        aspect: 'Female Wit and Agency',
        detail:
          'Beatrice demonstrates remarkable independence and verbal prowess. She resists patriarchal pressure to marry, valuing wit and autonomy.',
      },
      {
        aspect: 'Male Honor and Reputation',
        detail:
          "Honor is paramount: Claudio's reputation matters more to him than his beloved. The false accusation of Hero threatens male honor and female chastity.",
      },
      {
        aspect: 'Marriage and Courtship',
        detail:
          "Two distinct courtship models: Beatrice and Benedick's witty progression toward love, and Claudio and Hero's more conventional romantic narrative.",
      },
    ],
    literaryContext: [
      {
        movement: 'Comic Drama',
        features:
          'The play exemplifies Shakespearean comedy with mistaken identities, witty wordplay, and resolution through marriage. Subplot complications drive the plot.',
      },
      {
        movement: 'Wit and Repartee',
        features:
          'The famous wit exchanges between Beatrice and Benedick employ verbal sparring as courtship. Language is playful, complex, and often sexually charged.',
      },
      {
        movement: 'Deception and Revelation',
        features:
          'The overhearing scenes and false accusations drive the plot. Truth emerges through revelation and deception, with characters learning through mistake.',
      },
    ],
    authorBackground:
      "Written in the middle of Shakespeare's career, the play demonstrates his mastery of comic form. The witty dialogue and sophisticated characterization showcase his linguistic brilliance.",
    keyDatesTimeline: [
      { date: '1598-1599', event: 'Much Ado About Nothing likely written' },
      { date: '1623', event: 'First published in the First Folio' },
    ],
    examUse:
      'The play rewards analysis of wit, humor, gender roles, and the nature of love. The interplay between language and action provides opportunities for exploring Shakespearean technique. Character development through dialogue is exemplary.',
  },

  {
    id: 'christmas-carol',
    text: 'A Christmas Carol',
    author: 'Charles Dickens',
    period: '1843',
    historicalContext: [
      {
        event: 'Industrial Revolution',
        relevance:
          "The novella was written during rapid industrialization. Scrooge represents the wealthy industrialist indifferent to workers' suffering. Economic inequality and social mobility are central concerns.",
      },
      {
        event: 'Victorian Charity and Poor Laws',
        relevance:
          "The 1834 Poor Law Amendment Act introduced workhouses, famously referenced when Scrooge asks about 'Union workhouses.' The novella critiques this punitive system.",
      },
      {
        event: 'Christmas Culture Emerging',
        relevance:
          "Christmas was undergoing transformation from religious observance to secular celebration. Dickens's narrative helped establish Christmas as a time of charity, family, and redemption.",
      },
    ],
    socialContext: [
      {
        aspect: 'Class and Social Responsibility',
        detail:
          "The novella explores whether the wealthy have obligations to the poor. Scrooge's transformation represents a call for social conscience among the affluent.",
      },
      {
        aspect: 'Childhood and Sentimentality',
        detail:
          "The ghosts of Christmas Past emphasize childhood innocence and adult corruption. Dickens's sentimentality about children reflects Victorian values.",
      },
      {
        aspect: 'Family and Redemption',
        detail:
          "The Cratchit family embodies virtue despite poverty. Tiny Tim's innocence and potential death critique a system that allows children to suffer.",
      },
    ],
    literaryContext: [
      {
        movement: 'Gothic and Supernatural',
        features:
          'The ghost narrative employs gothic conventions: supernatural visitation, moral instruction, and redemption through terror and wonder.',
      },
      {
        movement: 'Sentimental Fiction',
        features:
          'Emotional appeals and moral instruction characterize the narrative. Dickens employs pathos, particularly through vulnerable characters like Tiny Tim.',
      },
      {
        movement: 'Social Realism',
        features:
          'Alongside supernatural elements, Dickens provides detailed social commentary and realistic depictions of Victorian London.',
      },
    ],
    authorBackground:
      'Dickens (1812-1870) had experienced poverty in his youth. His social conscience and vivid characterization made him the most popular novelist of the Victorian era. The novella was written during a particularly productive period.',
    keyDatesTimeline: [
      { date: '1834', event: 'Poor Law Amendment Act' },
      { date: '1843', event: 'A Christmas Carol published' },
      { date: '1870', event: "Dickens's death" },
    ],
    examUse:
      "The novella exemplifies social realism and Victorian fiction. Themes of redemption, social responsibility, and transformation reward analysis. Its critique of capitalism and poverty remains relevant. Dickens's characterization and narrative technique are exemplary.",
  },

  {
    id: 'jekyll-hyde',
    text: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
    author: 'Robert Louis Stevenson',
    period: '1886',
    historicalContext: [
      {
        event: 'Late Victorian Anxieties',
        relevance:
          'The novella reflects fin-de-siècle anxieties about human nature, evolution, and degeneration. Late Victorian culture feared the beast lurking within civilization.',
      },
      {
        event: 'Scientific Advancement',
        relevance:
          "Rapid scientific progress generated both optimism and anxiety. Jekyll's experiments represent the double-edged nature of scientific knowledge.",
      },
      {
        event: 'Dual Life in Victorian Society',
        relevance:
          'The theme of respectable public personas concealing private vices reflected actual Victorian social tensions. Homosexuality, prostitution, and sexual vice were pursued in secret.',
      },
    ],
    socialContext: [
      {
        aspect: 'Respectability and Hypocrisy',
        detail:
          'Jekyll represents respectable professional society. His secret indulgence in vice through Hyde reveals the gap between public virtue and private desire.',
      },
      {
        aspect: 'Masculinity and Violence',
        detail:
          "Hyde's violence and aggression represent uncontrolled masculine desire. His attacks on women and Lanyon reflect masculine power over feminine vulnerability.",
      },
      {
        aspect: 'Addiction and Compulsion',
        detail:
          "Jekyll's increasing dependence on the potion parallels addiction. His loss of control reflects Victorian anxiety about self-governance and rational will.",
      },
    ],
    literaryContext: [
      {
        movement: 'Psychological Realism',
        features:
          "The novella explores the psyche's divided nature. Jekyll's confession reveals the interior life and moral struggle beneath surface behavior.",
      },
      {
        movement: 'Gothic Horror',
        features:
          'The narrative employs gothic conventions: mysterious settings, supernatural transformation, moral transgression, and terror.',
      },
      {
        movement: 'Science Fiction Elements',
        features:
          'Scientific experimentation and its consequences drive the narrative. The speculative premise grounds the moral exploration.',
      },
    ],
    authorBackground:
      'Stevenson (1850-1894) was a prolific Scottish writer of adventure and psychological fiction. The novella was famously written in a fever dream and represents his mastery of psychological exploration.',
    keyDatesTimeline: [
      { date: '1859', event: "Darwin's Origin of Species published" },
      { date: '1886', event: 'The Strange Case of Dr. Jekyll and Mr. Hyde published' },
    ],
    examUse:
      'The novella rewards analysis of psychological division, moral transgression, and social hypocrisy. Its exploration of civilization and the primitive appeals to examination of human nature. Narrative technique through documents and testimony is sophisticated.',
  },

  {
    id: 'great-expectations',
    text: 'Great Expectations',
    author: 'Charles Dickens',
    period: '1860-1861',
    historicalContext: [
      {
        event: 'Victorian Social Mobility',
        relevance:
          "The novel explores possibilities and limitations of social advancement in Victorian society. Pip's journey from blacksmith's apprentice to gentleman reflects the era's social anxieties.",
      },
      {
        event: 'Industrial Britain',
        relevance:
          "The contrasts between rural Kent and industrial London reflect Victorian England's transformation. Pip's movement mirrors broader patterns of rural-to-urban migration.",
      },
      {
        event: 'Colonial Power',
        relevance:
          "Magwitch's transportation to Australia and subsequent return reflect Britain's use of Australia as a penal colony. Colonial power structures shape the novel's conflicts.",
      },
    ],
    socialContext: [
      {
        aspect: 'Class Aspiration and Shame',
        detail:
          "Pip's shame about his humble origins drives his ambition. The novel questions whether class distinction matters and whether the gentleman is defined by manners or moral character.",
      },
      {
        aspect: 'Belonging and Identity',
        detail:
          "Pip's struggle for identity and place reflects wider Victorian anxieties. His journey involves discovering authentic identity beneath social pretension.",
      },
      {
        aspect: 'Education and Gentility',
        detail:
          "Education is presented as the path to gentility, yet Pip's education alienates him from authentic relationships. The novel questions the value of fashionable accomplishment.",
      },
    ],
    literaryContext: [
      {
        movement: 'Bildungsroman',
        features:
          "The novel traces Pip's education and moral development. His coming-of-age involves disillusionment and reassessment of values.",
      },
      {
        movement: 'Social Realism',
        features:
          'Dickens provides detailed depictions of Victorian society across classes. Vivid characterization and social commentary characterize the narrative.',
      },
      {
        movement: 'Complex Narrative Structure',
        features:
          'The novel employs retrospective narration from adult Pip, allowing reflection on youthful errors. This narrative distance permits complex moral evaluation.',
      },
    ],
    authorBackground:
      "Dickens wrote this novel in serialized form for his magazine 'All the Year Round.' This serial publication shaped the narrative structure and pacing. The novel demonstrates his mature artistry.",
    keyDatesTimeline: [
      { date: '1788', event: 'First British convicts transported to Australia' },
      { date: '1860-1861', event: 'Great Expectations serialized' },
      { date: '1861', event: 'Published in book form' },
    ],
    examUse:
      "The novel offers rich opportunities for exploring class, identity, ambition, and moral growth. Pip's perspective as narrator allows examination of how experience shapes judgment. Dickens's characterization and social commentary reward detailed analysis.",
  },

  {
    id: 'frankenstein',
    text: 'Frankenstein',
    author: 'Mary Shelley',
    period: '1818',
    historicalContext: [
      {
        event: 'Scientific Revolution',
        relevance:
          'The novel emerged from Enlightenment confidence in scientific progress. Contemporary advances in electricity and anatomy informed the narrative.',
      },
      {
        event: 'Napoleonic Wars',
        relevance:
          'Written during the Napoleonic Wars, the novel reflects anxieties about human ambition, destructive power, and moral responsibility in the service of power.',
      },
      {
        event: 'Industrial Revolution',
        relevance:
          'The novel critiques industrial hubris and the pursuit of knowledge without ethical constraint-concerns that would intensify during industrialization.',
      },
    ],
    socialContext: [
      {
        aspect: 'Parental Responsibility',
        detail:
          "Victor's abdication of responsibility for his creature raises questions about parental obligation. The creature's suffering results from Victor's abandonment.",
      },
      {
        aspect: 'Monstrosity and Otherness',
        detail:
          'The creature is monstrous in appearance but capable of eloquence and moral feeling. The novel questions how otherness is constructed and responded to.',
      },
      {
        aspect: 'Female Vulnerability',
        detail:
          'Female characters (Caroline, Elizabeth, Justine) are vulnerable and suffer for male ambition. The denial of a female creature to the creature himself reflects anxieties about female sexuality.',
      },
    ],
    literaryContext: [
      {
        movement: 'Romantic Gothic',
        features:
          'The novel combines Romantic ideals of nature and emotion with gothic conventions of horror, darkness, and moral transgression.',
      },
      {
        movement: 'Science Fiction Origins',
        features:
          'Frankenstein is often considered the first science fiction novel. The speculative premise of scientific creation grounds philosophical exploration.',
      },
      {
        movement: 'Epistolary and Nested Narrative',
        features:
          "The frame narrative of Walton's letters contains Victor's narrative, which contains the creature's narrative. This nested structure allows multiple perspectives.",
      },
    ],
    authorBackground:
      'Shelley (1797-1851) conceived the novel at age eighteen during a famous creative competition with her husband Percy Shelley and Lord Byron. She wrote with extraordinary ambition and philosophical depth.',
    keyDatesTimeline: [
      { date: '1816', event: 'Summer of creative competition at Villa Diodati' },
      { date: '1818', event: 'Frankenstein published anonymously' },
    ],
    examUse:
      'The novel rewards analysis of scientific ambition, parental responsibility, and the nature of humanity. Its exploration of the other and the monstrous remains relevant. Narrative technique through embedded narratives and unreliable narration repays study.',
  },

  {
    id: 'jane-eyre',
    text: 'Jane Eyre',
    author: 'Charlotte Brontë',
    period: '1847',
    historicalContext: [
      {
        event: 'Victorian Gender Ideology',
        relevance:
          "The novel was revolutionary in presenting a heroine who refuses traditional feminine submissiveness. Jane's assertion of equality challenged Victorian patriarchal norms.",
      },
      {
        event: 'Governess Culture',
        relevance:
          "Governesses occupied an uncertain social position: more educated than servants but dependent on employers. Jane's role as governess was familiar to Victorian readers.",
      },
      {
        event: 'Empire and Jamaica',
        relevance:
          "Rochester's first wife, Bertha, is a Jamaican Creole. The novel engages with British colonialism and anxieties about cultural otherness and female sexuality.",
      },
    ],
    socialContext: [
      {
        aspect: 'Female Independence and Self-Assertion',
        detail:
          "Jane refuses to be Rochester's mistress and demands equality in marriage. Her assertion 'I am no bird; and no net ensnares me' challenges female subordination.",
      },
      {
        aspect: 'Class and Social Aspiration',
        detail:
          "Jane's movement from orphan to governess to lady involves navigation of class boundaries. Her humble origins are overcome through virtue and accomplishment.",
      },
      {
        aspect: 'Religion and Morality',
        detail:
          "Jane's Christian faith shapes her moral choices. The novel presents religion as internal conviction rather than external conformity.",
      },
    ],
    literaryContext: [
      {
        movement: 'Gothic Romance',
        features:
          'The novel employs gothic conventions: mysterious mansion, dark secrets, supernatural elements, and psychological terror.',
      },
      {
        movement: 'Psychological Realism',
        features:
          "The narrative is intensely psychological, presenting Jane's interior experience. Her first-person narration creates psychological intimacy.",
      },
      {
        movement: 'Bildungsroman',
        features:
          "Jane's development from neglected child to autonomous woman traces her moral and psychological growth.",
      },
    ],
    authorBackground:
      'Brontë (1818-1848) wrote under the male pseudonym Currer Bell. The novel was recognized as revolutionary in its portrayal of female desire and autonomy. She died young, before her second novel was completed.',
    keyDatesTimeline: [
      { date: '1847', event: "Jane Eyre published as 'by Currer Bell'" },
      { date: '1848', event: "Brontë's death" },
    ],
    examUse:
      "The novel offers rich opportunities for exploring feminism, gothic conventions, and psychological realism. Jane's assertion of self rewards analysis of female agency. The colonial dimension complicates readings of the happy ending.",
  },

  {
    id: 'inspector-calls',
    text: 'An Inspector Calls',
    author: 'J. B. Priestley',
    period: '1945',
    historicalContext: [
      {
        event: 'End of World War II',
        relevance:
          "Written in 1945, the play reflects post-war moral reckoning. The collective responsibility theme speaks to Allied response to Nazi atrocities revealed by war's end.",
      },
      {
        event: '1912 Setting',
        relevance:
          'The play is set in 1912, before World War I and the Russian Revolution. The comfortable pre-war world depicted is retrospectively tragic.',
      },
      {
        event: 'Class and Social Division',
        relevance:
          "Early 20th-century Britain was deeply class-stratified. Industrial prosperity for the wealthy was built on workers' exploitation.",
      },
    ],
    socialContext: [
      {
        aspect: 'Collective Responsibility',
        detail:
          "The play emphasizes that individual actions have social consequences. Each character's apparently minor decision contributes to Eva Smith's suffering.",
      },
      {
        aspect: 'Class Conflict and Exploitation',
        detail:
          "Eva Smith's exploitation by Mr. Birling and Sybil Birling reveals the vulnerability of working-class women. Class attitudes shape availability of sympathy.",
      },
      {
        aspect: 'Gender and Female Vulnerability',
        detail:
          'Eva Smith is victimized by male sexual power (Gerald), female competition (Sybil), and economic vulnerability. The play critiques gendered exploitation.',
      },
    ],
    literaryContext: [
      {
        movement: 'Socialist Realism',
        features:
          'The play employs realistic drama to advance social critique. The domestic setting allows investigation of social responsibility.',
      },
      {
        movement: 'Dramatic Irony and Revelation',
        features:
          "The Inspector's investigation progressively reveals each character's complicity. Structural irony emerges as characters attempt to evade responsibility.",
      },
      {
        movement: 'Modern Drama',
        features:
          'The play employs contemporary dramatic techniques: realistic dialogue, domestic setting, and exploration of social themes.',
      },
    ],
    authorBackground:
      'Priestley (1894-1984) was a prolific playwright and novelist. His social conscience and belief in collective responsibility shaped his dramatic work.',
    keyDatesTimeline: [
      { date: '1912', event: "The play's setting (Titanic sinks)" },
      { date: '1945', event: 'An Inspector Calls written and first performed' },
      { date: '1947', event: 'First performed in London' },
    ],
    examUse:
      "The play rewards analysis of dramatic structure, social responsibility, and class conflict. The Inspector's role as catalyst and moral voice invites examination of drama's ability to advance moral argument. The complex ending resists easy resolution.",
  },

  {
    id: 'lord-of-flies',
    text: 'Lord of the Flies',
    author: 'William Golding',
    period: '1954',
    historicalContext: [
      {
        event: 'Post-World War II Disillusionment',
        relevance:
          "Written in the aftermath of WWII, the novel reflects disillusionment with civilization's veneer. The Holocaust and atomic weapons revealed human capacity for evil.",
      },
      {
        event: 'Cold War Anxieties',
        relevance:
          'Published during the early Cold War, the novel reflects anxieties about nuclear annihilation and ideological conflict.',
      },
      {
        event: 'British Imperialism',
        relevance:
          "The evacuees are products of British education and culture. Their degeneration critiques assumptions about civilization's superiority.",
      },
    ],
    socialContext: [
      {
        aspect: 'Civilization and Savagery',
        detail:
          'The novel explores the thin boundary between civilization and barbarism. Structured systems (democracy, rules) prove fragile without external authority.',
      },
      {
        aspect: 'Masculinity and Power',
        detail:
          'The boys struggle for dominance through physical and psychological power. Toxic masculinity and tribal violence emerge under freedom from authority.',
      },
      {
        aspect: 'Childhood Innocence and Evil',
        detail:
          'The novel presents children as capable of cruelty and evil. This challenges Romantic ideals of childhood innocence.',
      },
    ],
    literaryContext: [
      {
        movement: 'Allegory',
        features:
          'The island society allegorizes larger civilizations. Characters represent types: the intellectual (Piggy), the leader (Ralph), the demagogue (Jack).',
      },
      {
        movement: 'Symbolism',
        features:
          'The conch shell represents democracy, law, and order. The Lord of the Flies represents the evil within, the darkness of human nature.',
      },
      {
        movement: 'Psychological Realism',
        features:
          'Golding presents psychological authenticity in depicting descent into barbarism. Internal conflict and rationalization are explored.',
      },
    ],
    authorBackground:
      "Golding (1911-1993) fought in World War II and experienced violence firsthand. His pessimism about human nature informs the novel's darkness.",
    keyDatesTimeline: [
      { date: '1939-1945', event: 'World War II' },
      { date: '1954', event: 'Lord of the Flies published' },
    ],
    examUse:
      "The novel rewards analysis of symbolism, allegory, and the nature of human civilization. The exploration of power, leadership, and moral degeneration offers rich thematic material. Golding's pessimism about human nature and the possibilities of order merit examination.",
  },

  {
    id: 'animal-farm',
    text: 'Animal Farm',
    author: 'George Orwell',
    period: '1945',
    historicalContext: [
      {
        event: 'Russian Revolution and Soviet Communism',
        relevance:
          'The novel is an allegory of the Russian Revolution (1917) and its betrayal by Stalinism. The pigs represent revolutionary leaders who become tyrants.',
      },
      {
        event: 'World War II Alliance',
        relevance:
          'Written during WWII, when Britain and the Soviet Union were allies, the novel could not be published until 1945. Post-war disillusionment about Soviet intentions became clear.',
      },
      {
        event: 'Totalitarianism',
        relevance:
          "The novel critiques totalitarian regimes of all kinds. The pigs' consolidation of power and rewriting of history reflect techniques of totalitarian control.",
      },
    ],
    socialContext: [
      {
        aspect: 'Revolutionary Idealism and Corruption',
        detail:
          "The animals' idealistic revolution is corrupted by those who claim to lead it. The novel explores how power corrupts and how idealistic projects become perverted.",
      },
      {
        aspect: 'Propaganda and Truth',
        detail:
          "Squealer's propaganda rewrites history and truth. The novel critiques how language can manipulate reality and control thought.",
      },
      {
        aspect: 'Class and Hierarchy',
        detail:
          'Despite the revolution against human oppression, the pigs establish a new hierarchy. The distinction between revolutionary ideals and post-revolutionary reality is stark.',
      },
    ],
    literaryContext: [
      {
        movement: 'Satire and Allegory',
        features:
          'The farm and its animals are an extended allegory of the Soviet Union. Specific historical events and figures are represented through animal characters.',
      },
      {
        movement: 'Political Fable',
        features:
          'The novella employs fable conventions (animal characters, moral lessons) to critique political systems. This accessible form disguises sophisticated political commentary.',
      },
      {
        movement: 'Dystopian Fiction',
        features:
          "The novel presents a dystopian world where initial hopes give way to oppression. The progression from hope to despair mirrors the Russian Revolution's trajectory.",
      },
    ],
    authorBackground:
      'Orwell (1903-1950) was a democratic socialist deeply disillusioned by Stalinism. His political engagement shapes his fiction.',
    keyDatesTimeline: [
      { date: '1917', event: 'Russian Revolution' },
      { date: '1939-1945', event: 'World War II' },
      { date: '1945', event: 'Animal Farm published' },
    ],
    examUse:
      'The novella rewards analysis of allegory, satire, and political commentary. The exploration of power, language, and propaganda remains relevant. The accessible form makes it ideal for examining how literature conveys political argument.',
  },

  {
    id: 'blood-brothers',
    text: 'Blood Brothers',
    author: 'Willy Russell',
    period: '1983',
    historicalContext: [
      {
        event: 'Thatcherism and Economic Division',
        relevance:
          "Written during Margaret Thatcher's premiership, the play reflects widening class divisions and economic inequality in 1980s Britain.",
      },
      {
        event: 'Deindustrialization',
        relevance:
          'The play is set in Liverpool, a city economically devastated by deindustrialization. The contrast between poor and wealthy neighborhoods reflects growing urban inequality.',
      },
      {
        event: 'Social Mobility Myth',
        relevance:
          "The play critiques the myth of social mobility. Mickey's and Sammy's divergent fates are determined by class, not merit.",
      },
    ],
    socialContext: [
      {
        aspect: 'Class and Destiny',
        detail:
          'The separating of twins at birth-one raised poor, one wealthy-is a device to examine how class shapes possibility. Russell argues that class determines fate.',
      },
      {
        aspect: 'Friendship and Betrayal',
        detail:
          "Mickey and Sammy's friendship survives class division until Sammy's loyalty to his new friend, Edward, alienates Mickey. Class loyalties ultimately override personal bonds.",
      },
      {
        aspect: 'Economic Hardship and Mental Health',
        detail:
          "Mickey's depression and drug addiction result from economic desperation. The play presents poverty's psychological and emotional toll.",
      },
    ],
    literaryContext: [
      {
        movement: 'Social Realism',
        features:
          'Russell presents realistic depictions of working-class life. The play critiques social conditions through authentic characterization.',
      },
      {
        movement: 'Narrative Technique',
        features:
          'The play employs narration by the Narrator, who provides commentary and reflects on events. This technique allows Russell to guide interpretation.',
      },
      {
        movement: 'Music and Emotion',
        features:
          'The play employs music and song to heighten emotional effect and provide commentary on action. The musical elements create emotional resonance.',
      },
    ],
    authorBackground:
      'Russell (born 1947) is a playwright and screenwriter focused on social issues. His Liverpudlian background informs his engagement with working-class experience.',
    keyDatesTimeline: [
      { date: '1979', event: 'Margaret Thatcher becomes Prime Minister' },
      { date: '1983', event: 'Blood Brothers written' },
      { date: '1987', event: 'Blood Brothers opens in London' },
    ],
    examUse:
      "The play offers opportunities for analyzing social class, economic inequality, and the limits of social mobility. Russell's critique of Thatcherism and economic division remains relevant. The tragic ending rewards examination of dramatic irony and fate.",
  },

  {
    id: 'sign-four',
    text: 'The Sign of Four',
    author: 'Arthur Conan Doyle',
    period: '1890',
    historicalContext: [
      {
        event: 'British Imperialism',
        relevance:
          'The novel is set amid Indian independence movements and British imperial dominance. The mystery centers on colonial violence and wealth extraction.',
      },
      {
        event: 'Victorian Crime and Detection',
        relevance:
          'The novel emerged from Victorian fascination with crime and detective science. Holmes represents the triumph of scientific reasoning over criminal deception.',
      },
      {
        event: 'The Agra Treasure',
        relevance:
          'The central object-a stolen treasure from India-represents colonial wealth. The original theft represents imperial violence and appropriation.',
      },
    ],
    socialContext: [
      {
        aspect: 'Colonial Violence and Justice',
        detail:
          'The novel implicates multiple parties in colonial violence. The question of who bears responsibility for imperial crimes complicates simple narratives of justice.',
      },
      {
        aspect: 'Racial Attitudes',
        detail:
          "The characterization of Tonga reflects Victorian racial attitudes. The 'savage' foil highlights Holmes's superior rationality and Western civilization.",
      },
      {
        aspect: 'Detective Work and Social Order',
        detail:
          "Holmes's detective work restores social order disrupted by crime. The detective figure serves as guardian of Victorian propriety.",
      },
    ],
    literaryContext: [
      {
        movement: 'Detective Fiction',
        features:
          "Holmes and Watson exemplify the detective fiction model. The mystery unfolds through Holmes's logical deduction and Watson's narration.",
      },
      {
        movement: 'Adventure and Exotic Setting',
        features:
          "The novel combines detective mystery with adventure narrative. India serves as exotic backdrop to Holmes's intellectual prowess.",
      },
      {
        movement: 'Frame Narrative',
        features:
          'Watson narrates the present events while others narrate back-story. This nested narrative technique allows multiple perspectives.',
      },
    ],
    authorBackground:
      'Conan Doyle (1859-1930) was a Scottish physician who created the most famous detective in literature. Holmes represents the Victorian ideal of rational mastery.',
    keyDatesTimeline: [
      { date: '1885-1887', event: 'Indian independence movements intensify' },
      { date: '1890', event: 'The Sign of Four published' },
    ],
    examUse:
      "The novel rewards analysis of detective fiction conventions, imperial attitudes, and the nature of deduction. Holmes's method of rational investigation and Watson's narration create dynamic for examining narrative technique. Colonial dimensions complicate simple readings.",
  },

  {
    id: 'pride-prejudice',
    text: 'Pride and Prejudice',
    author: 'Jane Austen',
    period: '1813',
    historicalContext: [
      {
        event: 'Napoleonic Wars',
        relevance:
          'Written during the Napoleonic Wars, though the novel makes little reference to them. The social stability the novel depicts would be disrupted by war.',
      },
      {
        event: "Women's Limited Options",
        relevance:
          "The novel realistically depicts women's limited life prospects. Marriage is economic necessity and primary source of security and status.",
      },
      {
        event: 'Gentry Society',
        relevance:
          'The novel depicts the English provincial gentry. Social distinctions based on wealth, breeding, and connections are crucial.',
      },
    ],
    socialContext: [
      {
        aspect: 'Marriage and Economics',
        detail:
          "Each female character faces economic pressure to marry well. Mrs. Bennet's anxieties about her daughters' prospects reflect real economic vulnerability.",
      },
      {
        aspect: 'Class and Social Mobility',
        detail:
          "Elizabeth's marriage to Darcy represents upward mobility. Social advancement through marriage is shown both as desirable and morally problematic.",
      },
      {
        aspect: 'Female Education and Accomplishment',
        detail:
          'Women are evaluated through accomplishments: music, drawing, conversation, and domestic skills. Intellectual capability is less valued than appearance.',
      },
    ],
    literaryContext: [
      {
        movement: 'Romantic Comedy',
        features:
          "The novel combines romantic narrative with comic observation. Austen's irony and satire target social pretension and human folly.",
      },
      {
        movement: 'Social Comedy of Manners',
        features:
          'The novel critiques social conventions and human behavior through witty dialogue and social observation.',
      },
      {
        movement: 'Early Realism',
        features:
          "Austen's attention to psychological realism and moral development anticipates modern fiction.",
      },
    ],
    authorBackground:
      'Austen (1775-1817) never married and was financially dependent on her family. Her novels explore the world available to her: drawing rooms, balls, and the marriage market.',
    keyDatesTimeline: [
      { date: '1811', event: "Pride and Prejudice written (as 'First Impressions')" },
      { date: '1813', event: 'Published' },
    ],
    examUse:
      "The novel offers rich opportunities for analyzing Austen's irony, social satire, and psychological insight. Elizabeth's assertion of independence and Darcy's reform reward character analysis. The novel's commentary on marriage, class, and female agency remains relevant.",
  },

  {
    id: 'war-worlds',
    text: 'The War of the Worlds',
    author: 'H. G. Wells',
    period: '1898',
    historicalContext: [
      {
        event: 'British Imperial Dominance',
        relevance:
          'The novel inverts imperial power relations. British technological superiority, which facilitated colonial domination, proves insufficient against Martian technology.',
      },
      {
        event: 'Scientific Advancement',
        relevance:
          "The novel reflects faith in scientific progress and anxiety about technology's destructive potential. Martian technology represents unchecked scientific development.",
      },
      {
        event: 'Fin-de-Siècle Anxiety',
        relevance:
          "The novel captures late 19th-century anxieties about civilization's fragility. Rapid change and social instability generate apocalyptic fears.",
      },
    ],
    socialContext: [
      {
        aspect: 'Class and Survival',
        detail:
          'The novel presents different classes facing invasion. Class distinctions become meaningless in face of existential threat, yet persist through the crisis.',
      },
      {
        aspect: 'Technology and Helplessness',
        detail:
          'Human technology proves useless against Martian machines. The novel explores vulnerability to forces beyond human control.',
      },
      {
        aspect: 'Civilization and Barbarism',
        detail:
          'The Martians are portrayed as purely rational and mechanical-a critique of technological rationalism divorced from human values.',
      },
    ],
    literaryContext: [
      {
        movement: 'Science Fiction',
        features:
          'The novel exemplifies early science fiction. Speculative technology and alien invasion drive the narrative.',
      },
      {
        movement: 'Apocalyptic Fiction',
        features:
          'The novel depicts the near-destruction of civilization. Apocalypse serves as vehicle for social critique.',
      },
      {
        movement: 'Narrative Technique',
        features:
          'The fragmented narrative through multiple viewpoints and documents creates immediacy. The journalist narrator guides interpretation.',
      },
    ],
    authorBackground:
      'Wells (1866-1946) was a prolific author of science fiction, social commentary, and political writing. His works combine speculative imagination with social critique.',
    keyDatesTimeline: [
      { date: '1895', event: 'Lumière brothers invent cinema' },
      { date: '1898', event: 'The War of the Worlds published' },
    ],
    examUse:
      'The novel rewards analysis of science fiction conventions, imperial critique, and social commentary. The exploration of technological power and human vulnerability remains relevant. The narrative technique of fragmented perspectives repays study.',
  },

  {
    id: 'pigeon-english',
    text: 'Pigeon English',
    author: 'Stephen Kelman',
    period: '2011',
    historicalContext: [
      {
        event: 'Contemporary Urban Violence',
        relevance:
          'The novel is set in contemporary London and addresses gang violence and knife crime. The narrative reflects real anxieties about urban safety.',
      },
      {
        event: 'Immigration and Integration',
        relevance:
          "Harri's family has recently arrived from Ghana. The novel explores integration, cultural adjustment, and the experience of migrant families.",
      },
      {
        event: 'Austerity Britain',
        relevance:
          'Written during austerity, the novel reflects economic inequality, reduced social services, and deteriorating public spaces.',
      },
    ],
    socialContext: [
      {
        aspect: 'Childhood and Innocence',
        detail:
          "Harri's youthful perspective and linguistic play contrast with the violent reality surrounding him. The novel captures childhood's vulnerability.",
      },
      {
        aspect: 'Gang Culture and Belonging',
        detail:
          'Gangs provide identity and belonging for marginalized youth. The novel presents gang violence sympathetically while depicting its destructiveness.',
      },
      {
        aspect: 'Race and Otherness',
        detail:
          "Harri's Ghanaian accent and outsider status make him vulnerable. The novel depicts how otherness, even in multicultural London, can mark you as target.",
      },
    ],
    literaryContext: [
      {
        movement: 'Urban Realism',
        features:
          'Kelman presents realistic depiction of contemporary urban life. The novel combines social realism with poetic language.',
      },
      {
        movement: 'Child Narrator',
        features:
          "Harri's youthful voice and linguistic variation (mixing Ghanaian English, London vernacular, and formal English) create distinctive narrative voice.",
      },
      {
        movement: 'Contemporary Fiction',
        features:
          'The novel reflects 21st-century concerns: urban violence, immigration, inequality, and childhood vulnerability.',
      },
    ],
    authorBackground:
      'Kelman (born 1978) is a contemporary British author. Pigeon English received critical acclaim for its distinctive voice and engagement with contemporary social issues.',
    keyDatesTimeline: [
      { date: '2008', event: 'Global financial crisis begins' },
      { date: '2010-2015', event: 'UK austerity begins' },
      { date: '2011', event: 'Pigeon English published' },
    ],
    examUse:
      "The novel rewards analysis of narrative voice, contemporary urban experience, and social inequality. Harri's perspective and language offer opportunities for examining how narrative voice shapes meaning. The exploration of childhood, vulnerability, and belonging is rich.",
  },

  {
    id: 'power-conflict',
    text: 'Power & Conflict Anthology Overview',
    author: 'Various (GCSE Anthology)',
    period: '2014-present',
    historicalContext: [
      {
        event: 'Modern Warfare and Conflict',
        relevance:
          'The anthology includes poems from WWI to contemporary conflicts. It reflects diverse historical moments of human conflict.',
      },
      {
        event: 'Political Violence and Oppression',
        relevance:
          'Poems address colonialism, racism, and political violence. Historical injustices shape poetic responses.',
      },
      {
        event: 'Technological Warfare',
        relevance:
          "Modern warfare's technological nature appears in poems exploring drones, satellites, and mechanized killing.",
      },
    ],
    socialContext: [
      {
        aspect: 'Individual and Collective Trauma',
        detail:
          'Poems explore both personal suffering in war and broader social trauma. Psychological impact of violence is central theme.',
      },
      {
        aspect: 'Power Dynamics',
        detail:
          'Poems examine power imbalances: colonizer/colonized, oppressor/oppressed, aggressor/victim. Power structures shape relationships.',
      },
      {
        aspect: 'Resistance and Agency',
        detail:
          'Some poems present resistance to power. Human agency and choice amid power structures are contested.',
      },
    ],
    literaryContext: [
      {
        movement: 'War Poetry',
        features:
          'The anthology includes poems about war from different historical periods and perspectives. War poetry tradition evolves from romanticism to disillusionment.',
      },
      {
        movement: 'Political Poetry',
        features:
          'Poems engage directly with political questions: justice, oppression, power. Poetry serves as vehicle for political critique.',
      },
      {
        movement: 'Diverse Forms and Voices',
        features:
          "The anthology includes varied forms, voices, and perspectives. No single tradition dominates; diversity reflects power's varied manifestations.",
      },
    ],
    authorBackground:
      'The GCSE anthology collects poems by various authors across time periods and cultures. Representation is diverse, though critiques about whose voices are included persist.',
    keyDatesTimeline: [
      { date: 'Various', event: 'Poems written across 20+ years' },
      { date: '2014', event: 'Anthology adopted for GCSE assessment' },
    ],
    examUse:
      "The anthology offers rich comparative opportunities. Thematic analysis comparing poems' approaches to power, conflict, and warfare allows sophisticated understanding of how literary form conveys meaning. Contextual awareness of historical moments enriches interpretation.",
  },

  {
    id: 'love-relationships',
    text: 'Love & Relationships Anthology Overview',
    author: 'Various (GCSE Anthology)',
    period: '2014-present',
    historicalContext: [
      {
        event: 'Changing Family Forms',
        relevance:
          'The anthology reflects diverse family structures and relationships. Traditional marriage is no longer assumed universal path.',
      },
      {
        event: "Women's Rights and Changing Gender Roles",
        relevance:
          'Poems engage with evolving understandings of gender, desire, and female agency. Historical progression is visible.',
      },
      {
        event: 'Sexuality and Identity',
        relevance:
          'Poems include lesbian, gay, and transgender voices. Contemporary inclusion reflects changed understanding of sexuality.',
      },
    ],
    socialContext: [
      {
        aspect: 'Romantic Love and Its Complications',
        detail:
          "Poems explore love's various forms: romantic passion, domestic comfort, familial love, desire, and unrequited longing.",
      },
      {
        aspect: 'Power in Relationships',
        detail:
          'Relationships involve power dynamics. Poems explore dominance, vulnerability, negotiation, and equality.',
      },
      {
        aspect: 'Loss and Absence',
        detail:
          "Many poems address separation, death, and loss. Love's vulnerability to time and circumstance is recurring theme.",
      },
    ],
    literaryContext: [
      {
        movement: 'Love Poetry Tradition',
        features:
          'The anthology engages with long tradition of love poetry. Romantic conventions are both celebrated and challenged.',
      },
      {
        movement: 'Emotional Authenticity',
        features:
          'Contemporary poems emphasize emotional honesty over romantic idealization. Vulnerability and complexity are valued.',
      },
      {
        movement: 'Diverse Forms and Perspectives',
        features:
          'Varied forms (sonnets, free verse, narrative) and perspectives (male, female, gay, lesbian, young, old) present richness.',
      },
    ],
    authorBackground:
      'The GCSE anthology includes poets from different eras and backgrounds. Contemporary voices are well-represented, reflecting current poetry.',
    keyDatesTimeline: [
      { date: 'Various', event: 'Poems written across 100+ years' },
      { date: '2014', event: 'Anthology adopted for GCSE assessment' },
    ],
    examUse:
      'The anthology offers opportunities for thematic comparison and analysis of how poets across time and culture approach love and relationships. Contextual understanding of changing attitudes toward gender, sexuality, and family enriches interpretation. Formal analysis of varied poetic forms is rewarding.',
  },
]
