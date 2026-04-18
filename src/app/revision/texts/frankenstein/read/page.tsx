'use client'

import { InteractiveTextViewer, type TextData } from '@/components/study/InteractiveTextViewer'
import Link from 'next/link'

// ─── Full Frankenstein reading data ─────────────────────────────────────────
// Mary Shelley's Frankenstein (1818) is in the public domain.
// Text sourced from the 1818 first edition.

const frankensteinData: TextData = {
  title: 'Frankenstein; or, The Modern Prometheus',
  author: 'Mary Shelley',
  type: 'novel',
  sections: [
    // ── Section 1: Letters (Walton's narrative frame) ──────────────────────
    {
      id: 'letters',
      title: 'Letters I-IV: Walton\'s Narrative Frame',
      content: `Letter I. To Mrs. Saville, England. St. Petersburgh, Dec. 11th, 17—.

You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.

I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight. Do you understand this feeling? This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes. Inspirited by this wind of promise, my daydreams become more fervent and vivid. I try in vain to be persuaded that the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight. There, Margaret, the sun is for ever visible, its broad disk just skirting the horizon and diffusing a perpetual splendour. There—for with your leave, my sister, I will put some trust in preceding navigators—there snow and frost are banished; and, sailing over a calm sea, we may be wafted to a land surpassing in wonders and in beauty every region hitherto discovered on the habitable globe.

What may not be expected in a country of eternal light? I may there discover the wondrous power which attracts the needle and may regulate a thousand celestial observations that require only this voyage to render their seeming eccentricities consistent for ever. I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man. These are my enticements, and they are sufficient to conquer all fear of danger or death and to induce me to commence this laborious voyage with the joy a child feels when he embarks in a little boat, with his holiday mates, on an expedition of discovery up his native river.

But supposing all these conjectures to be false, you cannot contest the inestimable benefit which I shall confer on all mankind, to the last generation, by discovering a passage near the pole to those countries, to reach which at present so many months are requisite; or by ascertaining the secret of the magnet, which, if at all possible, can only be effected by an undertaking such as mine.

These reflections have dispelled the agitation with which I began my letter, and I feel my heart glow with an enthusiasm which elevates me to heaven, for nothing contributes so much to tranquillise the mind as a steady purpose—a point on which the soul may fix its intellectual eye.

I have no friend, Margaret: when I am glowing with the enthusiasm of success, there will be none to participate my joy; if I am assailed by disappointment, no one will endeavour to sustain me in dejection. I shall commit my thoughts to paper, it is true; but that is a poor medium for the communication of feeling. I desire the company of a man who could sympathise with me, whose eyes would reply to mine. You may deem me romantic, my dear sister, but I bitterly feel the want of a friend.

Letter IV. August 5th, 17—.

So strange an accident has happened to us that I cannot forbear recording it, although it is very probable that you will see me before these papers can come into your possession.

Last Monday (July 31st) we were nearly surrounded by ice, which closed in the ship on all sides, scarcely leaving her the sea-room in which she floated. Our situation was somewhat dangerous, especially as we were compassed round by a very thick fog. About two o'clock the mist cleared away, and we beheld, stretched out in every direction, vast and irregular plains of ice, which seemed to have no end. Some of my comrades groaned, and my own mind began to grow watchful with anxious thoughts, when a strange sight suddenly attracted our attention and diverted our solicitude from our own situation.

We perceived a low carriage, fixed on a sledge and drawn by dogs, pass on towards the north, at the distance of half a mile; a being which had the shape of a man, but apparently of gigantic stature, sat in the sledge and guided the dogs. We watched the rapid progress of the traveller with our telescopes until he was lost among the distant inequalities of the ice.

In the morning, however, as soon as it was light, I went upon deck and found all the sailors busy on one side of the vessel, apparently talking to some one in the sea. It was, in fact, a sledge, like that we had seen before, which had drifted towards us in the night on a large fragment of ice. Only one dog remained alive; but there was a human being within it whom the sailors were persuading to enter the vessel. He was not, as the other traveller seemed to be, a savage inhabitant of some undiscovered island, but a European. When I appeared on deck the master said, "Here is our captain, and he will not allow you to perish on the open sea."

On perceiving me, the stranger addressed me in English, although with a foreign accent. "Before I come on board your vessel," said he, "will you have the goodness to inform me whither you are bound?"

You may conceive my astonishment on hearing such a question addressed to me from a man on the brink of destruction and to whom I should have supposed that my vessel would have been a resource which he would not have exchanged for the most precious wealth the earth can afford. I replied, however, that we were on a voyage of discovery towards the northern pole.

Upon hearing this he appeared satisfied and consented to come on board. Good God! Margaret, if you had seen the man who thus capitulated for his safety, your surprise would have been boundless. His limbs were nearly frozen, and his body dreadfully emaciated by fatigue and suffering. I never saw a man in so wretched a condition.`,
      annotations: [
        {
          type: 'theme',
          text: 'no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings',
          note: 'Dramatic irony: Walton\'s confidence foreshadows the catastrophe to come. The reader knows this optimism is tragically misplaced.'
        },
        {
          type: 'character',
          text: 'I have no friend, Margaret',
          note: 'Walton\'s loneliness mirrors both Victor\'s self-imposed isolation and the Creature\'s enforced solitude. All three narrators suffer from lack of companionship.'
        },
        {
          type: 'language',
          text: 'the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight',
          note: 'Romantic sublime: Walton reimagines danger as beauty, reflecting the Romantic fascination with extreme landscapes and the power of imagination over reality.'
        },
        {
          type: 'context',
          text: 'discovering a passage near the pole',
          note: 'Alludes to the real quest for the Northwest Passage that obsessed 18th- and 19th-century explorers. Shelley links scientific exploration to dangerous ambition.'
        },
        {
          type: 'quote',
          text: 'nothing contributes so much to tranquillise the mind as a steady purpose',
          note: 'Key quote: Walton echoes Victor\'s obsessive single-mindedness. Shelley suggests that "steady purpose" can be self-destructive when it becomes fixation.'
        },
        {
          type: 'theme',
          text: 'a being which had the shape of a man, but apparently of gigantic stature',
          note: 'The Creature is introduced before Victor, seen at a distance as a mysterious giant. Shelley builds suspense by withholding identity.'
        },
      ],
    },

    // ── Section 2: Chapters 4-5 (Creation) ────────────────────────────────
    {
      id: 'ch4-5',
      title: 'Chapters 4-5: The Creation',
      content: `Chapter 4.

From this day natural philosophy, and particularly chemistry, in the most comprehensive sense of the term, became nearly my sole occupation. I read with ardour those works, so full of genius and discrimination, which modern inquirers have written on these subjects. I attended the lectures and cultivated the acquaintance of the men of science of the university, and I found even in M. Krempe a great deal of sound sense and real information, combined, it is true, with a repulsive physiognomy and manners, but not on that account the less valuable.

Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge and how much happier that man is who believes his native town to be the world, than he who aspires to become greater than his nature will allow.

When I found so astonishing a power placed within my hands, I hesitated a long time concerning the manner in which I should employ it. Although I possessed the capacity of bestowing animation, yet to prepare a frame for the reception of it, with all its intricacies of fibres, muscles, and veins, still remained a work of inconceivable difficulty and labour. I doubted at first whether I should attempt the creation of a being like myself, or one of simpler organisation; but my imagination was too much exalted by my first success to permit me to doubt of my ability to give life to an animal as complex and wonderful as man.

The materials at present within my command hardly appeared adequate to so arduous an undertaking, but I doubted not that I should ultimately succeed. I prepared myself for a multitude of reverses; my operations might be incessantly baffled, and at last my work be imperfect, yet when I considered the improvement which every day takes place in science and mechanics, I was encouraged to hope my present attempts would at least lay the foundations of future success. Nor could I consider the magnitude and complexity of my plan as any argument of its impracticability.

In a solitary chamber, or rather cell, at the top of the house, and separated from all the other apartments by a gallery and staircase, I kept my workshop of filthy creation; my eyeballs were starting from their sockets in attending to the details of my employment. The dissecting room and the slaughter-house furnished many of my materials; and often did my human nature turn with loathing from my occupation, whilst, still urged on by an eagerness which perpetually increased, I brought my work near to a conclusion.

I seemed to have lost all soul or sensation but for this one pursuit. I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body. For this I had deprived myself of rest and health. I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart.

Chapter 5.

It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.

How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful! Great God! His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with his watery eyes, that seemed almost of the same colour as the dun-white sockets in which they were set, his shrivelled complexion and straight black lips.

The different accidents of life are not so changeable as the feelings of human nature. I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body. For this I had deprived myself of rest and health. I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart. Unable to endure the aspect of the being I had created, I rushed out of the room and continued a long time traversing my bedchamber, unable to compose my mind to sleep.

I slept, indeed, but I was disturbed by the wildest dreams. I thought I saw Elizabeth, in the bloom of health, walking in the streets of Ingolstadt. Delighted and surprised, I embraced her, but as I imprinted the first kiss on her lips, they became livid with the hue of death; her features appeared to change, and I thought that I held the corpse of my dead mother in my arms; a shroud enveloped her form, and I saw the grave-worms crawling in the folds of the flannel. I started from my sleep with horror; a cold dew covered my forehead, my teeth chattered, and every limb became convulsed; when, by the dim and yellow light of the moon, as it forced its way through the window shutters, I beheld the wretch—the miserable monster whom I had created. He held up the curtain of the bed; and his eyes, if eyes they may be called, were fixed on me. His jaws opened, and he muttered some inarticulate sounds, while a grin wrinkled his cheeks. He might have spoken, but I did not hear; one hand was stretched out, seemingly to detain me, but I escaped and rushed downstairs.

Oh! No mortal could support the horror of that countenance. A mummy again endued with animation could not be so hideous as that wretch. I had gazed on him while unfinished; he was ugly then, but when those muscles and joints were rendered capable of motion, it became a thing such as even Dante could not have conceived.`,
      annotations: [
        {
          type: 'quote',
          text: 'Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge',
          note: 'Victor directly warns Walton. This makes the entire narrative a cautionary tale — the embedded narrative structure gives Victor\'s story moral weight.'
        },
        {
          type: 'language',
          text: 'my workshop of filthy creation',
          note: '"Filthy" suggests both physical disgust and moral corruption. The phrase inverts the divine act of creation — God\'s work is holy; Victor\'s is unclean.'
        },
        {
          type: 'theme',
          text: 'I seemed to have lost all soul or sensation but for this one pursuit',
          note: 'Victor\'s obsessive isolation from family, friends, and nature mirrors the Creature\'s later enforced isolation. Both are cut off from human connection.'
        },
        {
          type: 'language',
          text: 'It was on a dreary night of November',
          note: 'Gothic atmosphere: darkness, rain, a dying candle. Shelley uses pathetic fallacy to signal that this act of creation is unnatural and doomed.'
        },
        {
          type: 'quote',
          text: 'I beheld the wretch—the miserable monster whom I had created',
          note: 'Victor denies the Creature humanity instantly. "Wretch" and "monster" are labels that justify his abandonment. The Creature\'s outstretched hand suggests he wants connection, not harm.'
        },
        {
          type: 'character',
          text: 'I thought I saw Elizabeth, in the bloom of health, walking in the streets of Ingolstadt',
          note: 'The dream links creation with death: Elizabeth transforms into Victor\'s dead mother. Shelley foreshadows Elizabeth\'s murder and suggests Victor\'s obsession corrupts love itself.'
        },
        {
          type: 'context',
          text: 'I might infuse a spark of being into the lifeless thing',
          note: 'Alludes to galvanism — Luigi Galvani\'s experiments making dead frogs\' legs twitch with electricity. Contemporary readers would have recognised this as cutting-edge science.'
        },
        {
          type: 'theme',
          text: 'the beauty of the dream vanished, and breathless horror and disgust filled my heart',
          note: 'The gap between ambition and reality. Victor\'s horror is not at what the Creature does but at what it looks like — a shallow, appearance-based rejection that Shelley critiques.'
        },
      ],
    },

    // ── Section 3: Chapter 10 (Creature speaks at Mont Blanc) ─────────────
    {
      id: 'ch10',
      title: 'Chapter 10: The Creature Speaks at Mont Blanc',
      content: `I spent the following day roaming through the valley. I stood beside the sources of the Arveiron, which take their rise in a glacier, that with slow pace is advancing down from the summit of the hills to barricade the valley. The abrupt sides of vast mountains were before me; the icy wall of the glacier overhung me; a few shattered pines were scattered around; and the solemn silence of this glorious presence-chamber of imperial nature was broken only by the brawling waves or the fall of some vast fragment, the thunder sound of the avalanche or the cracking, reverberated along the mountains, of the accumulated ice, which, through the silent working of immutable laws, was ever and anon rent and torn, as if it had been but a plaything in their hands. These sublime and magnificent scenes afforded me the greatest consolation that I was capable of receiving.

As I said this I suddenly beheld the figure of a man, at some distance, advancing towards me with superhuman speed. He bounded over the crevices in the ice, among which I had walked with caution; his stature, also, as he approached, seemed to exceed that of man. I was troubled; a mist came over my eyes, and I felt a faintness seize me, but I was quickly restored by the cold gale of the mountains. I perceived, as the shape came nearer (sight tremendous and abhorred!) that it was the wretch whom I had created. I trembled with rage and horror, resolving to wait his approach and then close with him in mortal combat.

"Devil," I exclaimed, "do you dare approach me? And do not you fear the fierce vengeance of my arm wreaked on your miserable head? Begone, vile insect! Or rather, stay, that I may trample you to dust!"

"I expected this reception," said the daemon. "All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things! Yet you, my creator, do you detest me, even you who gave me being? Remember that I am thy creature; I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed. Everywhere I see bliss, from which I alone am irrevocably excluded. I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous."

"Begone! I will not hear you. There can be no community between you and me; we are enemies."

"How can I move thee? Will no entreaties cause thee to turn a favourable eye upon thy creature, who implores thy goodness and compassion? Believe me, Frankenstein, I was benevolent; my soul glowed with love and humanity; but am I not alone, miserably alone? You, my creator, abhor me; what hope can I gather from your fellow creatures, who owe me nothing? They spurn and hate me. The desert mountains and dreary glaciers are my refuge. I have wandered here many days; the caves of ice, which I only do not fear, are a dwelling to me, and the only one which man does not grudge. These bleak skies I hail, for they are kinder to me than your fellow beings."

"The guilty are allowed, by human laws, bloody as they are, to speak in their own defence before they are condemned. Listen to my tale; it is long and strange, and the temperature of this place is not fitting to your fine sensations; come to the hut upon the mountain. The sun is yet high in the heavens; before it descends to hide itself behind your snowy precipices and illuminate another world, you will have heard my story and can decide. On you it rests, whether I quit for ever the neighbourhood of man and lead a harmless life, or become the scourge of your fellow creatures and the author of your own speedy ruin."

I was partly urged by curiosity, and compassion confirmed my resolution. I had hitherto supposed him to be the murderer of my brother, and I eagerly sought a confirmation or denial of this opinion. For the first time, also, I felt what the duties of a creator towards his creature were, and that I ought to render him happy before I complained of his wickedness. These motives urged me to comply with his demand. We crossed the ice, therefore, and ascended the opposite rock.

His tale occupied the whole day, and I heard it, as may well be supposed, without interruption, for the story was so eloquent and touching as to be calculated to move the heart. "I am alone and miserable," he concluded at last; "man will not associate with me; but one as deformed and horrible as myself would not deny herself to me. My companion must be of the same species and have the same defects. This being you must create."`,
      annotations: [
        {
          type: 'quote',
          text: 'I ought to be thy Adam, but I am rather the fallen angel',
          note: 'The Creature references Milton\'s Paradise Lost, comparing himself to both Adam (who deserved love) and Satan (who was cast out). This is one of the most important quotes in the novel.'
        },
        {
          type: 'quote',
          text: 'I was benevolent and good; misery made me a fiend',
          note: 'The novel\'s central nature-vs-nurture argument in one sentence. The Creature was born innocent; society\'s cruelty made him violent.'
        },
        {
          type: 'language',
          text: 'the solemn silence of this glorious presence-chamber of imperial nature',
          note: 'The Romantic sublime: nature as a cathedral ("presence-chamber") that dwarfs humanity. Mont Blanc was a key Romantic landscape — Percy Shelley wrote a poem about it the same year.'
        },
        {
          type: 'theme',
          text: 'I felt what the duties of a creator towards his creature were',
          note: 'Victor briefly acknowledges his parental responsibility — but this insight is fleeting. He will ultimately refuse to honour it, with catastrophic consequences.'
        },
        {
          type: 'character',
          text: 'Devil',
          note: 'Victor calls the Creature "Devil," "vile insect," and "daemon" — all dehumanising labels. The Creature\'s eloquent, rational speech contrasts sharply with Victor\'s emotional abuse.'
        },
        {
          type: 'context',
          text: 'The desert mountains and dreary glaciers are my refuge',
          note: 'The Creature is exiled to extreme landscapes that mirror his exclusion from society. The Arctic frame and Alpine setting both symbolise isolation and the limits of human endurance.'
        },
      ],
    },

    // ── Section 4: Chapters 11-12 (Creature's story, De Lacey family) ────
    {
      id: 'ch11-12',
      title: 'Chapters 11-12: The Creature\'s Story & the De Lacey Family',
      content: `Chapter 11.

"It is with considerable difficulty that I remember the original era of my being; all the events of that period appear confused and indistinct. A strange multiplicity of sensations seized me, and I saw, felt, heard, and smelt at the same time; and it was, indeed, a long time before I learned to distinguish between the operations of my various senses. By degrees, I remember, a stronger light pressed upon my nerves, so that I was obliged to shut my eyes. Darkness then came over me and troubled me, but hardly had I felt this when, by opening my eyes, as I now suppose, the light poured in upon me again.

"I was a poor, helpless, miserable wretch; I knew, and could distinguish, nothing; but feeling pain invade me on all sides, I sat down and wept.

"Soon a gentle light stole over the heavens and gave me a sensation of pleasure. I started up and beheld a radiant form rise from among the trees. I gazed with a kind of wonder. It moved slowly, but it enlightened my path, and I again went out in search of berries.

"No distinct ideas occupied my mind; all was confused. I felt light, and hunger, and thirst, and darkness; innumerable sounds rang in my ears, and on all sides various scents saluted me; the only object that I could distinguish was the bright moon, and I fixed my eyes on that with pleasure.

"Several changes of day and night passed, and the orb of night had greatly lessened, when I began to distinguish my sensations from each other. I gradually saw plainly the clear stream that supplied me with drink and the trees that shaded me with their foliage.

"I found a fire which had been left by some wandering beggars, and was overcome with delight at the warmth I experienced from it. In my joy I thrust my hand into the live embers, but quickly drew it out again with a cry of pain. How strange, I thought, that the same cause should produce such opposite effects!

Chapter 12.

"I lay on my straw, but I could not sleep. I thought of the occurrences of the day. What chiefly struck me was the gentle manners of these people, and I longed to join them, but dared not. I remembered too well the treatment I had suffered the night before from the barbarous villagers, and resolved, whatever course of conduct I might hereafter think it right to pursue, that for the present I would remain quietly in my hovel, watching, and endeavouring to discover the motives which influenced their actions.

"The cottagers rose the next morning before the sun. The young woman arranged the cottage and prepared the food, and the youth departed after the first meal.

"This day was passed in the same routine as that which preceded it. The young man was constantly employed out of doors, and the girl in various laborious occupations within. The old man, whom I soon perceived to be blind, employed his leisure hours on his instrument, and I could perceive that his playing gave pleasure to his children. Nothing could exceed the love and respect which the younger cottagers exhibited towards their venerable companion. They performed towards him every little office of affection and duty with gentleness, and he rewarded them by his benevolent smiles.

"They were not entirely happy. The young man and his companion often went apart and appeared to weep. I saw no cause for their unhappiness, but I was deeply affected by it. If such lovely creatures were miserable, it was less strange that I, an imperfect and solitary being, should be wretched. Yet why were these gentle beings unhappy? They possessed a delightful house (for such it was in my eyes) and every luxury; they had a fire to warm them when chill and delicious viands when hungry; they were dressed in excellent clothes; and, still more, they enjoyed one another's company and speech, interchanging each day looks of affection and kindness. What did their tears imply? Did they really express pain? I was at first unable to solve these questions, but perpetual attention and time explained to me many appearances which were at first enigmatic.

"A considerable period elapsed before I discovered one of the causes of the uneasiness of this amiable family: it was poverty, and they suffered that evil in a very distressing degree. Their nourishment consisted entirely of the vegetables of their garden and the milk of one cow, which gave very little during the winter, when its masters could scarcely procure food to support it. They often, I believe, suffered the pangs of hunger very poignantly, especially the two younger cottagers, for several times they placed food before the old man when they reserved none for themselves.

"This trait of kindness moved me sensibly. I had been accustomed, during the night, to steal a part of their store for my own consumption, but when I found that in doing this I inflicted pain on the cottagers, I abstained and satisfied myself with berries, nuts, and roots which I gathered from a neighbouring wood.

"I discovered also another means through which I was enabled to assist their labours. I found that the youth spent a great part of each day in collecting wood for the family fire, and during the night I often took his tools, the use of which I quickly discovered, and brought home firing sufficient for the consumption of several days.

"I remember the first time that I did this the young woman, when she opened the door in the morning, appeared greatly astonished on seeing a great pile of wood on the outside. She uttered some words in a loud voice, and the youth joined her, who also expressed surprise. I observed, with pleasure, that he did not go to the forest that day, but spent it in repairing the cottage and cultivating the garden.

"By degrees I made a discovery of still greater moment. I found that these people possessed a method of communicating their experience and feelings to one another by articulate sounds. I perceived that the words they spoke sometimes produced pleasure or pain, smiles or sadness, in the minds and countenances of the hearers. This was indeed a godlike science, and I ardently desired to become acquainted with it."`,
      annotations: [
        {
          type: 'theme',
          text: 'I was a poor, helpless, miserable wretch; I knew, and could distinguish, nothing; but feeling pain invade me on all sides, I sat down and wept',
          note: 'The Creature\'s birth parallels a newborn\'s experience — helpless, overwhelmed by sensation. Shelley draws on Locke\'s tabula rasa (blank slate) philosophy: the Creature begins with no knowledge, no language, no morality.'
        },
        {
          type: 'language',
          text: 'I thrust my hand into the live embers, but quickly drew it out again with a cry of pain. How strange, I thought, that the same cause should produce such opposite effects',
          note: 'The fire is symbolic: knowledge (like Prometheus\'s stolen fire) can both warm and burn. This mirrors the novel\'s central argument about science and discovery.'
        },
        {
          type: 'character',
          text: 'the gentle manners of these people',
          note: 'The De Lacey family represents the ideal domestic harmony that both Victor and the Creature lack. Their kindness teaches the Creature virtue, making his later rejection even more devastating.'
        },
        {
          type: 'theme',
          text: 'I had been accustomed, during the night, to steal a part of their store for my own consumption, but when I found that in doing this I inflicted pain on the cottagers, I abstained',
          note: 'The Creature develops empathy and moral reasoning through observation — a powerful demonstration of nature-versus-nurture. He chooses to sacrifice his own comfort for others.'
        },
        {
          type: 'quote',
          text: 'a godlike science',
          note: 'Language as divine power. The Creature\'s desire to learn language reflects his desire for human connection. Ironically, his eloquence later makes his suffering more articulate but does not prevent his rejection.'
        },
        {
          type: 'context',
          text: 'the old man, whom I soon perceived to be blind',
          note: 'De Lacey\'s blindness is symbolically important: he is the only character who judges the Creature without seeing him. Their brief conversation is the closest the Creature comes to acceptance.'
        },
      ],
    },

    // ── Section 5: Chapters 15-16 (Creature reads, murders William) ──────
    {
      id: 'ch15-16',
      title: 'Chapters 15-16: The Creature Reads & Murders William',
      content: `Chapter 15.

"One night during my accustomed visit to the neighbouring wood where I collected my own food and brought home firing for my protectors, I found on the ground a leathern portmanteau containing several articles of dress and some books. I eagerly seized the prize and returned with it to my hovel. Fortunately the books were written in the language the elements of which I had acquired at the cottage; they consisted of Paradise Lost, a volume of Plutarch's Lives, and the Sorrows of Werter.

"The possession of these treasures gave me extreme delight; I now continually studied and exercised my mind upon these histories, whilst my friends were employed in their ordinary occupations.

"I can hardly describe to you the effect of these books. They produced in me an infinity of new images and feelings, that sometimes raised me to ecstasy, but more frequently sunk me into the lowest dejection. In the Sorrows of Werter, I found a never-ending source of speculation and astonishment. The gentle and domestic manners it described, combined with lofty sentiments and feelings which had for their object something out of self, accorded well with my experience among my protectors and with the wants which were for ever alive in my own bosom.

"But Paradise Lost excited different and far deeper emotions. I read it, as I read the other volumes which had fallen into my hands, as a true history. It moved every feeling of wonder and awe that the picture of an omnipotent God warring with his creatures was capable of exciting. I often referred the several situations, as their similarity struck me, to my own. Like Adam, I was apparently united by no link to any other being in existence; but his state was far different from mine in every other respect. He had come forth from the hands of God a perfect creature, happy and prosperous, guarded by the especial care of his Creator; he was allowed to converse with and acquire knowledge from beings of a superior nature, but I was wretched, helpless, and alone. Many times I considered Satan as the fitter emblem of my condition, for often, like him, when I viewed the bliss of my protectors, the bitter gall of envy rose within me.

"Another circumstance strengthened and confirmed these feelings. Soon after my arrival in the hovel I discovered some papers in the pocket of the dress which I had taken from your laboratory. At first I had neglected them, but now that I was able to decipher the characters in which they were written, I began to study them with diligence. It was your journal of the four months that preceded my creation. You minutely described in these papers every step you took in the progress of your work; this history was mingled with accounts of domestic occurrences. Every thing is related in them which bears reference to my accursed origin; the minutest description of my odious and loathsome person is given, in language which painted your own horrors and rendered mine indelible. I sickened as I read. 'Hateful day when I received life!' I exclaimed in agony. 'Accursed creator! Why did you form a monster so hideous that even you turned from me in disgust?'

Chapter 16.

"Cursed, cursed creator! Why did I live? Why, in that instant, did I not extinguish the spark of existence which you had so wantonly bestowed? I know not; despair had not yet taken possession of me; my feelings were those of rage and revenge. I could with pleasure have destroyed the cottage and its inhabitants and have glutted myself with their shrieks and misery.

"I continued for the remainder of the day in my hovel in a state of utter and stupid despair. My protectors had departed and had broken the only link that held me to the world. For the first time the feelings of revenge and hatred filled my bosom, and I did not strive to control them, but allowing myself to be borne away by the stream, I bent my mind towards injury and death.

"My travels were long and the sufferings I endured intense. It was late in autumn when I quitted the district where I had so long resided. I travelled only at night, fearful of encountering the visage of a human being. Nature decayed around me, and the sun became heatless; rain and snow poured around me; mighty rivers were frozen; the surface of the earth was hard and chill, and bare, and I found no shelter.

"It was evening when I arrived, and I retired to a hiding-place among the fields that surround it to meditate in what manner I should apply to you. I was oppressed by fatigue and hunger, and far too unhappy to enjoy the gentle breezes of evening or the prospect of the sun setting behind the stupendous mountains of Jura.

"At this time a slight sleep relieved me from the pain of reflection, which was disturbed by the approach of a beautiful child, who came running into the recess I had chosen, with all the sportiveness of infancy. Suddenly, as I gazed on him, an idea seized me that this little creature was unprejudiced and had lived too short a time to have imbibed a horror of deformity. If, therefore, I could seize him and educate him as my companion and friend, I should not be so desolate in this peopled earth.

"Urged by this impulse, I seized on the boy as he passed and drew him towards me. As soon as he beheld my form, he placed his hands before his eyes and uttered a shrill scream; I drew his hand forcibly from his face and said, 'Child, what is the meaning of this? I do not intend to hurt you; listen to me.'

"He struggled violently. 'Let me go,' he cried; 'monster! ugly wretch! you wish to eat me and tear me to pieces. You are an ogre. Let me go, or I will tell my papa.'

"'Boy, you will never see your father again; you must come with me.'

"'Hideous monster! Let me go. My papa is a syndic—he is M. Frankenstein—he will punish you. You dare not keep me.'

"'Frankenstein! you belong then to my enemy—to him towards whom I have sworn eternal revenge; you shall be my first victim.'

"The child still struggled and loaded me with epithets which carried despair to my heart; I grasped his throat to silence him, and in a moment he lay dead at my feet.

"I gazed on my victim, and my heart swelled with exultation and hellish triumph; clapping my hands, I exclaimed, 'I too can create desolation; my enemy is not invulnerable; this death will carry despair to him, and a thousand other miseries shall torment and destroy him.'

"As I fixed my eyes on the child, I saw something glittering on his breast. I took it; it was a portrait of a most lovely woman. In spite of my malignity, it softened and attracted me. For a few moments I gazed with delight on her dark eyes, fringed by deep lashes, and her lovely lips; but presently my rage returned; I remembered that I was for ever deprived of the delights that such beautiful creatures could bestow and that she whose resemblance I contemplated would, in regarding me, have changed that air of divine benignity to one expressive of disgust and affright.

"Can you wonder that such thoughts transported me with rage? I am malicious because I am miserable. Am I not shunned and hated by all mankind? You, my creator, would tear me to pieces and triumph; remember that, and tell me why I should pity man more than man pities me?"`,
      annotations: [
        {
          type: 'context',
          text: 'Paradise Lost, a volume of Plutarch\'s Lives, and the Sorrows of Werter',
          note: 'These three books represent foundational texts: Milton on creation and rebellion, Plutarch on heroism and civic virtue, Goethe on emotional suffering. They shape the Creature\'s intellectual and moral development.'
        },
        {
          type: 'quote',
          text: 'Many times I considered Satan as the fitter emblem of my condition',
          note: 'The Creature identifies with Milton\'s Satan — not out of evil, but out of exile. Like Satan, he was cast out by his creator and denied belonging. Shelley makes the reader question who the real villain is.'
        },
        {
          type: 'language',
          text: 'Hateful day when I received life!',
          note: 'Echoes Job 3:3 ("Let the day perish wherein I was born") and Satan\'s lament in Paradise Lost. The Creature curses his own existence — the ultimate indictment of his creator\'s irresponsibility.'
        },
        {
          type: 'theme',
          text: 'My protectors had departed and had broken the only link that held me to the world',
          note: 'The De Lacey family\'s rejection is the turning point. The Creature was benevolent while he had hope of acceptance; their flight destroys that hope and triggers his descent into violence.'
        },
        {
          type: 'character',
          text: 'this little creature was unprejudiced and had lived too short a time to have imbibed a horror of deformity',
          note: 'The Creature\'s naive hope that a child might accept him reveals his desperate longing for connection. William\'s immediate revulsion — learned prejudice — destroys this last hope.'
        },
        {
          type: 'quote',
          text: 'I am malicious because I am miserable',
          note: 'One of the novel\'s most important lines. The Creature articulates a clear causal chain: society made him suffer, suffering made him cruel. This is Shelley\'s Rousseauian argument that humanity corrupts the naturally good.'
        },
        {
          type: 'theme',
          text: 'I too can create desolation',
          note: 'A dark parody of Victor\'s act of creation. Victor created life irresponsibly; the Creature creates death deliberately. Both acts stem from the same source: unchecked power without moral guidance.'
        },
      ],
    },

    // ── Section 6: Chapter 20 (Victor destroys female creature) ──────────
    {
      id: 'ch20',
      title: 'Chapter 20: Victor Destroys the Female Creature',
      content: `I sat one evening in my laboratory; the sun had set, and the moon was just rising from the sea; I had not sufficient light for my employment, and I remained idle, in a pause of consideration of whether I should leave my labour for the night or hasten its conclusion by an unremitting attention to it. As I sat, a train of reflection occurred to me which led me to consider the effects of what I was now doing. Three years before, I was engaged in the same manner and had created a fiend whose unparalleled barbarity had desolated my heart and filled it for ever with the bitterest remorse. I was now about to form another being of whose dispositions I was alike ignorant; she might become ten thousand times more malignant than her mate and delight, for its own sake, in murder and wretchedness. He had sworn to quit the neighbourhood of man and hide himself in deserts, but she had not; and she, who in all probability was to become a thinking and reasoning animal, might refuse to comply with a compact made before her creation.

They might even hate each other; the creature who already lived loathed his own deformity, and might he not conceive a greater abhorrence for it when it came before his eyes in the female form? She also might turn with disgust from him to the superior beauty of man; she might quit him, and he be again alone, exasperated by the fresh provocation of being deserted by one of his own species.

Even if they were to leave Europe and inhabit the deserts of the new world, yet one of the first results of those sympathies for which the daemon thirsted would be children, and a race of devils would be propagated upon the earth who might make the very existence of the species of man a condition precarious and full of terror. Had I right, for my own benefit, to inflict this curse upon everlasting generations? I had before been moved by the sophisms of the being I had created; I had been struck senseless by his fiendish threats; but now, for the first time, the wickedness of my promise burst upon me; I shuddered to think that future ages might curse me as their pest, whose selfishness had not hesitated to buy its own peace at the price, perhaps, of the existence of the whole human race.

I trembled and my heart failed within me, when, on looking up, I saw by the light of the moon the daemon at the casement. A ghastly grin wrinkled his lips as he gazed on me, where I sat fulfilling my task. Yes, he had followed me in my travels; he had loitered in forests, hid himself in caves, or taken refuge in wide and desert heaths; and he now came to mark my progress and claim the fulfilment of my promise.

As I looked on him, his countenance expressed the utmost extent of malice and treachery. I thought with a sensation of madness on my promise of creating another like to him, and trembling with passion, tore to pieces the thing on which I was engaged. The wretch saw me destroy the creature on whose future existence he depended for happiness, and with a howl of devilish despair and revenge, withdrew.

I left the room, and locking the door, made a solemn vow in my own heart never to resume my labours; and then, with trembling steps, I sought my own apartment. I was alone; none were near me to dissipate the gloom and relieve me from the sickening oppression of the most terrible reveries.

Several hours passed, and I remained near my window gazing on the sea; it was almost motionless, for the winds were hushed, and all nature reposed under the eye of the quiet moon. A few fishing vessels alone specked the water, and now and then the gentle breeze wafted the sound of voices as the fishermen called to one another. I felt the silence, although I was hardly conscious of its extreme profundity, until my ear was suddenly arrested by the paddling of oars near the shore, and a person landed close to my house.

In a few minutes after, I heard the creaking of my door, as if some one endeavoured to open it softly. I trembled from head to foot; I felt a presentiment of who it was and wished to rouse one of the peasants who dwelt in a cottage not far from mine; but I was overcome by the sensation of helplessness, so often felt in frightful dreams, when you in vain endeavour to fly from an impending danger, and was rooted to the spot.

Presently I heard the sound of footsteps along the passage; the door opened, and the wretch whom I dreaded appeared. Shutting the door, he approached me and said in a smothered voice, "You have destroyed the work which you began; what is it that you intend? Do you dare to break your promise? I have endured toil and misery; I left Switzerland with you; I crept along the shores of the Rhine, among its willow islands and over the summits of its hills. I have dwelt many months in the heaths of England and among the deserts of Scotland. I have endured incalculable fatigue, and cold, and hunger; do you dare destroy my hope?"

"Begone! I do break my promise; never will I create another like yourself, equal in deformity and wickedness."

"Slave, I before reasoned with you, but you have proved yourself unworthy of my condescension. Remember that I have power; you believe yourself miserable, but I can make you so wretched that the light of day will be hateful to you. You are my creator, but I am your master; obey!"

"The hour of my irresolution is past, and the period of your power is arrived. Your threats cannot move me to do an act of wickedness; but they confirm me in a determination of not creating you a companion in vice. Shall I, in cool blood, set loose upon the earth a daemon whose delight is in death and wretchedness? Begone! I am firm, and your words will only exasperate my rage."

The monster saw my determination in my face and gnashed his teeth in the impotence of anger. "Shall each man," cried he, "find a wife for his bosom, and each beast have his mate, and I be alone? I had feelings of affection, and they were requited by detestation and scorn. Man! You may hate, but beware! Your hours will pass in dread and misery, and soon the bolt will fall which must ravish from you your happiness for ever. Are you to be happy while I grovel in the intensity of my wretchedness? You can blast my other passions, but revenge remains—revenge, henceforth dearer than light or food! I may die, but first you, my tyrant and tormentor, shall curse the sun that gazes on your misery. Beware, for I am fearless, and therefore powerful. I will watch with the wiliness of a snake, that I may sting with its venom. Man, you shall repent of the injuries you inflict."

"I shall be with you on your wedding night."`,
      annotations: [
        {
          type: 'theme',
          text: 'a race of devils would be propagated upon the earth',
          note: 'Victor\'s fear of reproduction reveals anxieties about female autonomy and uncontrollable creation. The female creature is destroyed because she might have independent will — a profoundly gendered act of control.'
        },
        {
          type: 'quote',
          text: 'Beware, for I am fearless, and therefore powerful',
          note: 'The Creature\'s most chilling threat. Having nothing left to lose, he is beyond intimidation. Power through desperation — Shelley shows that the truly dangerous being is one stripped of all hope.'
        },
        {
          type: 'quote',
          text: 'I shall be with you on your wedding night',
          note: 'The most important piece of dramatic irony in the novel. Victor interprets this as a threat to himself; the reader suspects it means Elizabeth. Victor\'s self-absorption blinds him to the real danger.'
        },
        {
          type: 'language',
          text: 'trembling with passion, tore to pieces the thing on which I was engaged',
          note: 'Victor "tears to pieces" the female creature — violent, destructive language that mirrors the Creature\'s murders. Victor\'s act of destruction is as visceral as any killing in the novel.'
        },
        {
          type: 'character',
          text: 'you are my creator, but I am your master; obey',
          note: 'A complete inversion of the creator-creation hierarchy. The Creature claims authority over Victor, just as Victor once played God. The power dynamic has reversed entirely.'
        },
        {
          type: 'theme',
          text: 'Shall each man find a wife for his bosom, and each beast have his mate, and I be alone',
          note: 'The Creature\'s plea echoes the loneliness that pervades the novel. He asks only for what every living thing has — companionship — and is denied even this basic need.'
        },
      ],
    },

    // ── Section 7: Chapter 23 (Elizabeth's death) ─────────────────────────
    {
      id: 'ch23',
      title: 'Chapter 23: Elizabeth\'s Death',
      content: `It had been agreed that immediately after our union we should proceed to Villa Lavenza and spend our first days of happiness beside the beautiful lake near which it stood.

In the mean time I took every precaution to defend my person in case the fiend should openly attack me. I carried pistols and a dagger constantly about me and was ever on the watch to prevent artifice, and by these means gained a greater degree of tranquillity. Indeed, as the period approached, the threat appeared more as a delusion, not to be regarded as worthy to disturb my peace, while the happiness I hoped for in my marriage wore a greater appearance of certainty as the day fixed for its solemnisation drew nearer and the congratulations and joy of my father and Elizabeth increased.

Elizabeth seemed happy; my tranquil demeanour contributed greatly to calm her mind. But on the day that was to fulfil my wishes and my destiny, she was melancholy, and a presentiment of evil pervaded her. Perhaps also she thought of the dreadful secret which I had promised to reveal to her on the following day. My father was in the mean time overjoyed and, in the bustle of preparation, only recognised in the melancholy of his niece the diffidence of a bride.

After the ceremony was performed a large party assembled at my father's, but it was agreed that Elizabeth and I should commence our journey by water, sleeping that night at Evian and continuing our voyage on the following day. The wind favoured us, and the weather was uncommonly fine. Those were the last moments of my life during which I enjoyed the feeling of happiness.

We arrived at Evian at about eight in the evening, and we walked for a short time on the shore of the lake, enjoying the transitory light, and then retired to the inn and contemplated the lovely scene of waters, woods, and mountains, obscured in darkness, yet still displaying their black outlines.

The wind, which had hitherto carried us along with amazing rapidity, sank at sunset to a light breeze; the soft air just ruffled the water and caused a pleasant motion among the trees as we approached the shore, from which it wafted the most delightful scent of flowers and hay. The sun sank beneath the horizon as we landed, and as I touched the shore I felt those cares and fears revive which soon were to clasp me and cling to me for ever.

She left me, and I continued some time walking up and down the passages of the house and inspecting every corner that might afford a retreat to my adversary. But I discovered no trace of him and was beginning to conjecture that some fortunate chance had intervened to prevent the execution of his menaces when suddenly I heard a shrill and dreadful scream. It came from the room into which Elizabeth had retired. As I heard it, the whole truth rushed into my mind, my arms dropped, the motion of every muscle and fibre was suspended; I could feel the blood trickling in my veins and tingling in the extremities of my limbs. This state lasted but for an instant; the scream was repeated, and I rushed into the room.

Great God! Why did I not then expire! Why am I here to relate the destruction of the best hope and the purest creature of earth? She was there, lifeless and inanimate, thrown across the bed, her head hanging down and her pale and distorted features half covered by her hair. Everywhere I turn I see the same figure—her bloodless arms and relaxed form flung by the murderer on its bridal bier. Could I behold this and live? Alas! Life is obstinate and clings closest where it is most hated. For a moment only did I lose my senses; I fell senseless on the ground.

When I recovered I found myself surrounded by the people of the inn; their countenances expressed a breathless terror, but the horror of others appeared only as a mockery, a shadow of the feelings that oppressed me. I escaped from them to the room where lay the body of Elizabeth, my love, my wife, so lately living, so dear, so worthy. She had been moved from the posture in which I had first beheld her, and now, as she lay, her head upon her arm and a handkerchief thrown across her face and neck, I might have supposed her asleep. I rushed towards her and embraced her with ardour, but the deadly languor and coldness of the limbs told me that what I now held in my arms had ceased to be the Elizabeth whom I had loved and cherished. The murderous mark of the fiend's grasp was on her neck, and the breath had ceased to issue from her lips.

While I still hung over her in the agony of despair, I happened to look up. The windows of the room had before been darkened, and I felt a kind of panic on seeing the pale yellow light of the moon illuminate the chamber. The shutters had been thrown back, and with a sensation of horror not to be described, I saw at the open window a figure the most hideous and abhorred. A grin was on the face of the monster; he seemed to jeer, as with his fiendish finger he pointed towards the corpse of my wife. I rushed towards the window, and drawing a pistol from my bosom, fired; but he eluded me, leaped from his station, and running with the swiftness of lightning, plunged into the lake.

The report of the pistol brought a crowd into the room. I pointed to the spot where he had disappeared, and we followed the track with boats; nets were cast, but in vain. After passing several hours, we returned hopeless, most of my companions believing it to have been a form conjured up by my fancy.

My father could not live under the horrors that were accumulated around him; the springs of existence suddenly gave way; he was unable to rise from his bed, and in a few days he died in my arms.`,
      annotations: [
        {
          type: 'theme',
          text: 'I carried pistols and a dagger constantly about me',
          note: 'Victor arms himself to protect himself, not Elizabeth. His self-absorption is fatal: he interprets "I shall be with you on your wedding night" as a threat to his own life, never considering Elizabeth as the target.'
        },
        {
          type: 'language',
          text: 'the whole truth rushed into my mind, my arms dropped, the motion of every muscle and fibre was suspended',
          note: 'Shelley renders Victor\'s horror physically: paralysis, blood tingling, sensory suspension. The body understands what the mind refused to anticipate.'
        },
        {
          type: 'quote',
          text: 'She was there, lifeless and inanimate, thrown across the bed, her head hanging down and her pale and distorted features half covered by her hair',
          note: 'Elizabeth\'s death scene echoes Gothic art — the pale female victim, the bridal bed becoming a deathbed. Shelley critiques how women are sacrificed to male ambition and conflict.'
        },
        {
          type: 'character',
          text: 'A grin was on the face of the monster; he seemed to jeer, as with his fiendish finger he pointed towards the corpse of my wife',
          note: 'The Creature\'s grin mirrors the moment of his own creation, when he smiled at Victor and reached out a hand. Victor\'s rejection of that first gesture has come full circle in horrific symmetry.'
        },
        {
          type: 'theme',
          text: 'the pale yellow light of the moon illuminate the chamber',
          note: 'The "pale yellow light" echoes the "dull yellow eye" of the Creature\'s birth in Chapter 5. Moonlight links creation and death, connecting both scenes in a cycle of tragedy.'
        },
        {
          type: 'context',
          text: 'her bloodless arms and relaxed form flung by the murderer on its bridal bier',
          note: 'The wedding night becomes a funeral. Shelley subverts the marriage plot — the expected happy ending of a novel — into Gothic horror, reflecting the impossibility of domestic happiness when moral debts remain unpaid.'
        },
      ],
    },

    // ── Section 8: Chapter 24 + Walton conclusion ─────────────────────────
    {
      id: 'ch24-conclusion',
      title: 'Chapter 24 & Walton\'s Conclusion',
      content: `My present situation was one in which all voluntary thought was swallowed up and lost. I was hurried away by fury; revenge alone endowed me with strength and composure; it moulded my feelings and allowed me to be calculating and calm at periods when otherwise delirium or death would have been my portion.

My first resolution was to quit Geneva for ever; my country, which, when I was happy and beloved, was dear to me, now, in my adversity, became hateful. I provided myself with a sum of money, together with a few jewels which had belonged to my mother, and departed.

And now my wanderings began which are to cease but with life. I have traversed a vast portion of the earth and have endured all the hardships which travellers in deserts and barbarous countries are wont to encounter. How I have lived I hardly know; many times have I stretched my failing limbs upon the sandy plain and prayed for death. But revenge kept me alive; I dared not die and leave my adversary in being.

When I reflected on his crimes and malice, my hatred and revenge burst all bounds of moderation. I would have made a pilgrimage to the highest peak of the Andes, could I when there have precipitated him to their base. I wished to see him again, that I might wreak the utmost extent of abhorrence on his head and avenge the deaths of William, Justine, Clerval, Elizabeth, and my father.

I was answered through the stillness of night by a loud and fiendish laugh. It rung on my ears long and heavily; the mountains re-echoed it, and I felt as if all hell surrounded me with mockery and laughter. Surely in that moment I should have been possessed by frenzy and have destroyed my miserable existence but that my vow was heard and that I was reserved for vengeance. The laughter died away, when a well-known and abhorred voice, apparently close to my ear, addressed me in an audible whisper, "I am satisfied, miserable wretch! You have determined to live, and I am satisfied."

I darted towards the spot from which the sound proceeded, but the devil eluded my grasp. Suddenly the broad disk of the moon arose and shone full upon his ghastly and distorted shape as he fled with more than mortal speed.

I pursued him, and for many months this has been my task. Guided by a slight clue, I followed the windings of the Rhone, but vainly. The blue Mediterranean appeared, and by a strange chance, I saw the fiend enter by night and hide himself in a vessel bound for the Black Sea. I took my passage in the same ship, but he escaped, I know not how.

Amidst the wilds of Tartary and Russia, although he still evaded me, I have ever followed in his track. Sometimes the peasants, scared by this horrid apparition, informed me of his path; sometimes he himself, who feared that if I lost all trace of him I should despair and die, left some mark to guide me. The snows descended on my head, and I saw the print of his huge step on the white plain.

Walton, in continuation.

August 26th, 17—.

You have read this strange and terrific story, Margaret; and do you not feel your blood congeal with horror, like that which even now curdles mine? Sometimes, seized with sudden agony, he could not continue his tale; at others, his voice broken, yet piercing, uttered with difficulty the words so replete with anguish. His fine and lovely eyes were now lighted up with indignation, now subdued to downcast sorrow and quenched in infinite wretchedness. Sometimes he commanded his countenance and tones and related the most horrible incidents with a tranquil voice, suppressing every mark of agitation; then, like a volcano bursting forth, his face would suddenly change to an expression of the wildest rage as he shrieked out imprecations on his persecutor.

September 12th.

It is past; I am returning to England. I have lost my hopes of utility and glory; I have lost my friend. But I will endeavour to detail these bitter circumstances to you, my dear sister, and while I am wafted towards England and towards you, I will not despond.

September 2nd, the leader of the mutiny came to tell me that he and his companions wished to return southward. "Are you, then, so easily turned from your design? Did you not call this a glorious expedition? We are shut in however by mountains of ice and have no hope of escape."

"You must not go," said he; "you must not; your reason and your virtue tell you not to. Oh! be men, or be more than men. Be steady to your purposes and firm as a rock. This ice is not made of such stuff as your hearts may be; it is mutable and cannot withstand you if you say that it shall not."

These words were spoken in so faltering a voice that they seemed to come from a person whose heart was breaking. Frankenstein, who was dozing, awoke and asked the cause of the tumult. "They have refused to continue the voyage," I answered; "and I will not lead them unwilling into danger."

"Do so, if you will; but I will not. You may give up your purpose, but mine is assigned to me by heaven, and I dare not."

He endeavoured to spirit them up—but he sunk into languishment.

His voice became fainter as he spoke, and at length, exhausted by his effort, he sank into silence. About half an hour afterwards he attempted again to speak but was unable; he pressed my hand feebly, and his eyes closed for ever, while the irradiation of a gentle smile passed away from his lips.

Margaret, what comment can I make on the untimely extinction of this glorious spirit? What can I say that will enable you to understand the depth of my sorrow? All that I should express would be inadequate and feeble.

Great God! what a scene has just taken place! I am yet dizzy with the remembrance of it. I hardly know whether I shall have the power to detail it; yet the tale which I have recorded would be incomplete without this final and wonderful catastrophe.

I entered the cabin where lay the remains of my ill-fated and admirable friend. Over him hung a form which I cannot find words to describe—gigantic in stature, yet uncouth and distorted in its proportions. As he hung over the coffin, his face was concealed by long locks of ragged hair; but one vast hand was extended, in colour and apparent texture like that of a mummy. When he heard the sound of my approach, he ceased to utter exclamations of grief and horror and sprung towards the window. Never did I behold a vision so horrible as his face, of such loathsome yet appalling hideousness. I shut my eyes involuntarily and endeavoured to recollect what were my duties with regard to this destroyer.

"That is also my victim!" he exclaimed. "In his murder my crimes are consummated; the miserable series is wound to its close! Oh, Frankenstein! Generous and self-devoted being! What does it avail that I now ask thee to pardon me? I, who irretrievably destroyed thee by destroying all thou lovedst. Alas! He is cold, he cannot answer me."

"Wretch!" I said. "It is well that you come here to whine over the desolation that you have made. You throw a torch into a pile of buildings, and when they are consumed, you sit among the ruins and lament the fall. Hypocritical fiend!"

"Oh, it is not thus—not thus," interrupted the being. "Yet such must be the impression conveyed to you by what appears to be the purport of my actions. Yet I seek not a fellow feeling in my misery. No sympathy may I ever find. When I first sought it, I desired love and fellowship, and I was still spurned. Was there no injustice in this? Am I to be thought the only criminal, when all humankind sinned against me? Even now my blood boils at the recollection of this injustice.

"But it is true that I am a wretch. I have murdered the lovely and the helpless; I have strangled the innocent as they slept and grasped to death his throat who never injured me or any other living thing. I have devoted my creator, the select specimen of all that is worthy of love and admiration among men, to misery; I have pursued him even to that irremediable ruin. There he lies, white and cold in death. You hate me, but your abhorrence cannot equal that with which I regard myself.

"Fear not that I shall be the instrument of future mischief. My work is nearly complete. Neither yours nor any man's death is needed to consummate the series of my being and accomplish that which must be done, but it requires my own. Do not think that I shall be slow to perform this sacrifice. I shall quit your vessel on the ice raft which brought me thither and shall seek the most northern extremity of the globe; I shall collect my funeral pile and consume to ashes this miserable frame, that its remains may afford no light to any curious and unhallowed wretch who would create such another as I have been.

"He is dead who called me into being, and when I shall be no more, the very remembrance of us both will speedily vanish. I shall no longer see the sun or stars or feel the winds play on my cheeks. Light, feeling and sense will pass away; and in this condition must I find my happiness. Some years ago, when the images which this world affords first opened upon me, I should have wept to die; now it is my only consolation. Polluted by crimes and torn by the bitterest remorse, where can I find rest but in death?

"But soon," he cried with sad and solemn enthusiasm, "I shall die, and what I now feel be no longer felt. Soon these burning miseries will be extinct. I shall ascend my funeral pile triumphantly and exult in the agony of the torturing flames. The light of that conflagration will fade away; my ashes will be swept into the sea by the winds. My spirit will sleep in peace, or if it thinks, it will not surely think thus. Farewell."

He sprang from the cabin window as he said this, upon the ice raft which lay close to the vessel. He was soon borne away by the waves and lost in darkness and distance.`,
      annotations: [
        {
          type: 'theme',
          text: 'revenge alone endowed me with strength and composure',
          note: 'Victor and the Creature become mirror images: both driven by revenge, both self-destructive, both isolated. Their pursuer-pursued dynamic has made them indistinguishable in their obsession.'
        },
        {
          type: 'quote',
          text: 'I am satisfied, miserable wretch! You have determined to live, and I am satisfied',
          note: 'The Creature wants Victor alive to suffer. This inverts the creator-creation relationship: the Creature now controls Victor\'s existence, just as Victor once controlled his.'
        },
        {
          type: 'character',
          text: 'one vast hand was extended, in colour and apparent texture like that of a mummy',
          note: 'The Creature\'s outstretched hand over Victor\'s corpse mirrors Chapter 5, where he reached out to his creator at birth. The gesture that began in hope ends in grief.'
        },
        {
          type: 'quote',
          text: 'I was benevolent; my soul glowed with love and humanity; but am I not alone, miserably alone?',
          note: 'The Creature\'s final speech returns to his core argument: isolation destroyed his goodness. This repetition across the novel gives his words cumulative moral force.'
        },
        {
          type: 'language',
          text: 'I shall ascend my funeral pile triumphantly and exult in the agony of the torturing flames',
          note: 'Promethean imagery: fire — the element of creation and knowledge — becomes the instrument of self-destruction. The Creature\'s planned immolation closes the mythic circle opened by the subtitle.'
        },
        {
          type: 'theme',
          text: 'He was soon borne away by the waves and lost in darkness and distance',
          note: 'The novel\'s final image is ambiguous: we never see the Creature die. Shelley refuses closure, leaving the questions of justice, responsibility, and humanity permanently open.'
        },
        {
          type: 'context',
          text: 'I am returning to England. I have lost my hopes of utility and glory; I have lost my friend',
          note: 'Walton heeds Victor\'s warning and turns back — the only character who learns from the story. His retreat represents the novel\'s moral resolution: some ambitions must be abandoned.'
        },
      ],
    },
  ],

  // ─── Characters ───────────────────────────────────────────────────────────
  characters: [
    {
      name: 'Victor Frankenstein',
      description:
        'A brilliant but fatally irresponsible scientist from Geneva. Victor\'s obsessive ambition drives him to create life, but his immediate rejection of his creation sets in motion every tragedy in the novel. He embodies the dangers of knowledge without ethics, ambition without compassion, and power without responsibility. His narrative is self-pitying and unreliable — he positions himself as victim while consistently failing to act.',
      keyQuotes: [
        '"I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body."',
        '"Learn from me... how dangerous is the acquirement of knowledge."',
        '"I beheld the wretch — the miserable monster whom I had created."',
      ],
    },
    {
      name: 'The Creature',
      description:
        'Victor\'s creation, born innocent and driven to violence by universal rejection. The Creature is articulate, emotionally complex, and deeply human in his longing for companionship. His eloquent narrative occupies the centre of the novel, and Shelley ensures the reader sympathises with him. He learns language, morality, and empathy through observation — then learns hatred through experience.',
      keyQuotes: [
        '"I ought to be thy Adam, but I am rather the fallen angel."',
        '"I was benevolent and good; misery made me a fiend."',
        '"If I cannot inspire love, I will cause fear."',
      ],
    },
    {
      name: 'Robert Walton',
      description:
        'An Arctic explorer whose letters frame the entire novel. Walton mirrors Victor in his dangerous ambition and loneliness, but ultimately heeds the warning of Victor\'s story and turns his ship back. He is the only character who learns from the tragedy, making him the novel\'s moral compass and surrogate for the reader.',
      keyQuotes: [
        '"I have no friend, Margaret."',
        '"I am returning to England. I have lost my hopes of utility and glory."',
      ],
    },
    {
      name: 'Elizabeth Lavenza',
      description:
        'Victor\'s adopted sister and later his wife. Elizabeth is gentle, devoted, and ultimately sacrificed to the conflict between Victor and his creation. Her murder on their wedding night is the culmination of Victor\'s failure to confront consequences. Shelley uses her death to critique how women become collateral damage in male ambition and rivalry.',
      keyQuotes: [
        '"I have a pretty present for my Victor."',
        '"She was there, lifeless and inanimate, thrown across the bed."',
      ],
    },
    {
      name: 'Henry Clerval',
      description:
        'Victor\'s closest friend, representing warmth, creativity, and human connection — everything Victor sacrifices in his pursuit of forbidden knowledge. Clerval studies Oriental languages and dreams of adventure, but his ambition is social and cultural, not transgressive. His murder by the Creature strips Victor of his last meaningful friendship.',
      keyQuotes: [
        '"He was a being formed in the very poetry of nature."',
      ],
    },
    {
      name: 'Alphonse Frankenstein',
      description:
        'Victor\'s loving and dutiful father. Alphonse represents the stable, nurturing family structure that Victor abandons in pursuit of his obsession. His death from grief after Elizabeth\'s murder completes the destruction of Victor\'s entire domestic world — the family that should have anchored him is annihilated.',
      keyQuotes: [
        '"The springs of existence suddenly gave way; he was unable to rise from his bed."',
      ],
    },
    {
      name: 'Justine Moritz',
      description:
        'A servant in the Frankenstein household, wrongly convicted and executed for William\'s murder. Justine is the novel\'s clearest example of institutional injustice — she confesses under pressure from her confessor and is executed despite Elizabeth\'s defence. Her death implicates both the legal system and Victor, who knows the truth but stays silent.',
      keyQuotes: [
        '"I am the cousin of the unhappy child who was murdered."',
        '"God knows how entirely I am innocent."',
      ],
    },
  ],

  // ─── Themes ───────────────────────────────────────────────────────────────
  themes: [
    {
      name: 'Dangerous Ambition & Hubris',
      description:
        'Victor\'s relentless pursuit of forbidden knowledge leads to catastrophe. Shelley draws on the Prometheus myth (referenced in the subtitle) to warn against human overreach. The desire to rival God is presented not as heroic but as reckless and destructive. Walton\'s parallel ambition provides a contrast: he alone chooses to turn back.',
      evidence: [
        '"Learn from me... how dangerous is the acquirement of knowledge." (Ch. 4)',
        'Victor compares himself to an "archangel who aspired to omnipotence" (Ch. 24)',
        'Walton abandons his polar voyage after hearing Victor\'s story — the only character who heeds the warning',
      ],
    },
    {
      name: 'Creation & Parental Responsibility',
      description:
        'The novel\'s central moral question: does a creator owe duties to their creation? Victor abandons the Creature at birth, and every subsequent tragedy flows from that act of irresponsibility. Shelley argues that bringing something into existence — whether child, creation, or scientific discovery — carries an absolute obligation of care.',
      evidence: [
        'Victor flees the moment the Creature opens its eyes (Ch. 5)',
        'The Creature\'s plea: "I ought to be thy Adam" acknowledges the creator\'s duty (Ch. 10)',
        'Victor destroys the female creature, denying the Creature even the possibility of companionship (Ch. 20)',
      ],
    },
    {
      name: 'Isolation & Loneliness',
      description:
        'All three narrators suffer from profound isolation. Victor cuts himself off from family to pursue his work. The Creature is denied any human connection. Walton laments having no friend. Shelley shows that loneliness is not merely painful but morally corrosive — it drives both Victor and the Creature toward destruction.',
      evidence: [
        'Walton\'s opening letter: "I have no friend, Margaret" (Letter I)',
        'Victor: "I seemed to have lost all soul or sensation but for this one pursuit" (Ch. 4)',
        'The Creature: "Shall each man find a wife... and I be alone?" (Ch. 20)',
      ],
    },
    {
      name: 'Nature versus Nurture',
      description:
        'The Creature is born innocent and becomes violent only after repeated rejection. His eloquent account of learning language, empathy, and morality from the De Lacey family — then being brutalised by society — is Shelley\'s powerful Rousseauian argument that environment, not innate character, shapes moral development.',
      evidence: [
        'The Creature learns compassion by observing the De Laceys (Ch. 12)',
        '"I was benevolent and good; misery made me a fiend" (Ch. 10)',
        'William\'s rejection triggers the Creature\'s first act of violence (Ch. 16)',
      ],
    },
    {
      name: 'Science Without Ethics',
      description:
        'Written in the age of galvanism and rapid scientific progress, the novel asks what happens when knowledge outstrips moral responsibility. Victor never pauses to consider the ethical implications of creating life. Shelley suggests that science without conscience is monstrous — a warning that resonates with debates about AI, genetic engineering, and biotechnology today.',
      evidence: [
        '"My workshop of filthy creation" — the language of corruption, not progress (Ch. 4)',
        'Victor\'s failure to consider what life would be like for his creation',
        'The subtitle "The Modern Prometheus" frames scientific ambition as divine transgression',
      ],
    },
    {
      name: 'Prejudice & Appearance',
      description:
        'Every character who sees the Creature rejects him based on appearance alone. The De Laceys, William, the villagers — all react with horror before the Creature can speak. Only the blind De Lacey engages with him as a person. Shelley critiques a society that judges worth by surface, arguing that true monstrosity lies in moral failure, not physical form.',
      evidence: [
        'Victor\'s immediate revulsion: "I beheld the wretch" despite having chosen "beautiful" features (Ch. 5)',
        'De Lacey, who is blind, is the only character to show the Creature kindness (Ch. 15)',
        'The Creature\'s self-awareness: "I am malicious because I am miserable" — society\'s rejection created the monster (Ch. 16)',
      ],
    },
  ],

  // ─── Context Notes ────────────────────────────────────────────────────────
  contextNotes: `ROMANTICISM AND THE NOVEL

Frankenstein was written during the height of the Romantic movement (roughly 1780-1850), and its themes, settings, and concerns are deeply Romantic. Understanding this context is essential for GCSE analysis.

THE ROMANTIC SUBLIME
The novel\'s Alpine and Arctic settings reflect the Romantic fascination with sublime landscapes — vast, terrifying natural spaces that dwarf humanity and inspire both awe and terror. Mont Blanc, where the Creature confronts Victor in Chapter 10, was a key Romantic landmark. Percy Bysshe Shelley wrote his poem "Mont Blanc" during the same 1816 summer that Mary began Frankenstein. The sublime landscape serves as a backdrop for the novel\'s most important moral confrontations.

SCIENCE AND GALVANISM
Luigi Galvani\'s experiments in the 1780s and 1790s demonstrated that electrical current could make dead frogs\' legs twitch, suggesting that electricity might be the "spark of life." His nephew Giovanni Aldini publicly applied electrical current to the bodies of executed criminals, causing their limbs to move. These experiments were widely discussed and raised genuine questions about whether science could reanimate the dead. Mary Shelley acknowledged this influence in her 1831 preface, describing how conversations about galvanism at the Villa Diodati inspired her story.

THE VILLA DIODATI AND THE GHOST STORY COMPETITION
In the summer of 1816 (the "Year Without a Summer," caused by the eruption of Mount Tambora), Mary Godwin (not yet married to Percy Shelley), Percy Shelley, Lord Byron, John Polidori, and Claire Clairmont gathered at the Villa Diodati near Lake Geneva. Confined indoors by incessant rain, Byron proposed that each person write a ghost story. Mary\'s contribution became Frankenstein. Polidori\'s became "The Vampyre," the first modern vampire story.

PROMETHEUS AND CLASSICAL MYTH
The novel\'s subtitle, "The Modern Prometheus," connects Victor to the Greek Titan who stole fire from the gods and gave it to humanity, for which he was punished by being chained to a rock while an eagle ate his liver daily. In some versions of the myth, Prometheus also created humans from clay. Shelley uses both aspects: Victor steals the "fire" of creation and is punished by eternal suffering. The Promethean myth frames scientific ambition as simultaneously heroic and transgressive.

MILTON\'S PARADISE LOST
The Creature reads Milton\'s epic poem and identifies with both Adam (the first creation, who deserved his creator\'s love) and Satan (the fallen angel, cast out and denied belonging). The novel\'s epigraph is from Paradise Lost: "Did I request thee, Maker, from my clay / To mould me Man?" This question — whether a creation can hold its creator accountable — drives the entire narrative.

MARY SHELLEY\'S PERSONAL CONTEXT
Mary Shelley\'s mother, Mary Wollstonecraft (author of A Vindication of the Rights of Woman), died eleven days after giving birth to her. This biographical fact infuses the novel\'s exploration of creation, birth, and parental responsibility with personal urgency. Mary herself lost her first child, a premature daughter, in 1815 and recorded dreams of the baby coming back to life. The novel\'s anxieties about creation, death, and the responsibilities of parenthood are deeply personal.

PUBLICATION AND RECEPTION
Frankenstein was published anonymously on 1 January 1818. Most reviewers assumed a male author; when Mary Shelley was identified, many refused to believe a teenage woman could have written it. Percy Shelley wrote the preface and edited the manuscript, leading to ongoing debates about authorship and collaboration. The 1831 revised edition, with Mary\'s new introduction, is the version most widely read today, though the 1818 text is preferred by many scholars for its rawer, more radical vision.`,
}

// ─── Page component ─────────────────────────────────────────────────────────

export default function FrankensteinReadPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          href="/revision/texts/frankenstein"
          className="hover:text-foreground transition-colors"
        >
          Frankenstein
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">Read the Novel</span>
      </nav>

      {/* Public domain notice */}
      <div className="mb-6 rounded-xl border border-teal-500/20 bg-teal-500/5 px-4 py-3">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-teal-400">Public Domain Text</span>{' '}
          &mdash; <em>Frankenstein; or, The Modern Prometheus</em> (1818) by Mary
          Shelley is in the public domain. The text below is from the original 1818
          first edition. Key chapters are presented with interactive annotations for
          GCSE study.
        </p>
      </div>

      {/* Interactive reader */}
      <InteractiveTextViewer
        data={frankensteinData}
        storageKey="frankenstein"
        className="min-h-[600px]"
      />

      {/* Footer */}
      <div className="mt-8 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          <em>Frankenstein; or, The Modern Prometheus</em> (1818) by Mary Shelley is
          in the public domain. Text sourced from the 1818 first edition. Annotations
          are original study material.
        </p>
        <Link
          href="/revision/texts/frankenstein"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-raised transition-colors"
        >
          Back to Study Guide
        </Link>
      </div>
    </div>
  )
}
