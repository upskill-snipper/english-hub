/**
 * VOCABULARY BUILDER — iLowerSecondary English (LEH11).
 *
 * Theme-organised word banks for the recurring Section A / Section B
 * topics on the Pearson Edexcel International Award in Lower Secondary
 * English. Precise vocabulary is rewarded under WAO1 (form, communication
 * and purpose) and WAO2 (ambitious spelling) — see `@/lib/ilowersecondary/spec`.
 *
 * Every definition is original, written in UK English and checked for
 * accuracy. Every example sentence is an original work by The English Hub
 * and is NOT reproduced from any past paper or source booklet.
 */

export type PartOfSpeech = 'noun' | 'verb' | 'adjective' | 'adverb' | 'conjunction' | 'preposition'

export interface VocabularyWord {
  word: string
  partOfSpeech: PartOfSpeech
  /** Accurate UK-English definition. */
  definition: string
  /** 100% original sentence written for this resource. */
  exampleSentence: string
  /** Two or three precise, register-appropriate synonyms. */
  synonyms: string[]
}

export interface VocabularyTheme {
  /** URL-safe anchor id. */
  id: string
  title: string
  /** Why this theme recurs and how it helps in the exam. */
  blurb: string
  words: VocabularyWord[]
}

// ─── Thematic word banks ──────────────────────────────────────────────

export const VOCABULARY_THEMES: VocabularyTheme[] = [
  {
    id: 'survival',
    title: 'Survival',
    blurb:
      'Non-fiction recounts of explorers, castaways and disaster survivors, and fiction in which a character must endure extreme conditions, recur across Section A. This bank sharpens writing about danger, scarcity and endurance.',
    words: [
      {
        word: 'perilous',
        partOfSpeech: 'adjective',
        definition: 'Full of serious and immediate danger.',
        exampleSentence:
          'The climbers inched along the perilous ledge as loose stones clattered into the gorge below.',
        synonyms: ['hazardous', 'treacherous', 'precarious'],
      },
      {
        word: 'endure',
        partOfSpeech: 'verb',
        definition: 'To suffer something painful or difficult patiently over a long period.',
        exampleSentence:
          'For three nights she had to endure the gnawing cold without a single blanket.',
        synonyms: ['withstand', 'tolerate', 'weather'],
      },
      {
        word: 'scarce',
        partOfSpeech: 'adjective',
        definition: 'Available only in very small quantities; insufficient for what is needed.',
        exampleSentence:
          'Fresh water grew scarce, and the crew rationed each warm mouthful with care.',
        synonyms: ['sparse', 'meagre', 'depleted'],
      },
      {
        word: 'shelter',
        partOfSpeech: 'noun',
        definition: 'A structure or place that protects from danger or bad weather.',
        exampleSentence:
          'They lashed driftwood into a crude shelter before the storm finally broke over the island.',
        synonyms: ['refuge', 'sanctuary', 'haven'],
      },
      {
        word: 'desolate',
        partOfSpeech: 'adjective',
        definition: 'Empty, bleak and lacking any sign of life or comfort.',
        exampleSentence:
          'The desolate plateau stretched to the horizon, broken only by the wind and a single bent tree.',
        synonyms: ['barren', 'bleak', 'forsaken'],
      },
      {
        word: 'ration',
        partOfSpeech: 'verb',
        definition: 'To limit how much of something is used so that a small supply lasts longer.',
        exampleSentence:
          'He decided to ration the last of the biscuits to one square each at dawn.',
        synonyms: ['conserve', 'allocate', 'apportion'],
      },
      {
        word: 'exhausted',
        partOfSpeech: 'adjective',
        definition: 'Completely drained of energy or strength.',
        exampleSentence:
          'Exhausted and shivering, she dragged herself the final metres towards the firelight.',
        synonyms: ['drained', 'spent', 'depleted'],
      },
      {
        word: 'resilient',
        partOfSpeech: 'adjective',
        definition: 'Able to recover quickly from hardship and keep going.',
        exampleSentence:
          'Only the most resilient of the group still believed that rescue would come.',
        synonyms: ['hardy', 'tough', 'tenacious'],
      },
      {
        word: 'famished',
        partOfSpeech: 'adjective',
        definition: 'Suffering from extreme and painful hunger.',
        exampleSentence:
          'Famished after the long march, the soldiers stared longingly at the empty supply crates.',
        synonyms: ['starving', 'ravenous', 'voracious'],
      },
      {
        word: 'treacherous',
        partOfSpeech: 'adjective',
        definition: 'Dangerous because hidden hazards make it hard to predict or trust.',
        exampleSentence:
          'Beneath the fresh snow lay a treacherous crust of ice that gave way without warning.',
        synonyms: ['deceptive', 'perilous', 'unstable'],
      },
      {
        word: 'forage',
        partOfSpeech: 'verb',
        definition: 'To search widely for food and other supplies, especially in the wild.',
        exampleSentence:
          'Each morning they would forage along the shoreline for shellfish and edible weed.',
        synonyms: ['scavenge', 'hunt', 'gather'],
      },
      {
        word: 'isolation',
        partOfSpeech: 'noun',
        definition: 'The state of being completely cut off from other people or help.',
        exampleSentence:
          'The crushing isolation of the valley weighed on him more heavily than the cold ever did.',
        synonyms: ['solitude', 'seclusion', 'remoteness'],
      },
      {
        word: 'plight',
        partOfSpeech: 'noun',
        definition: 'A difficult, dangerous or distressing situation.',
        exampleSentence:
          'No passing ship could possibly guess the plight of the survivors on that hidden reef.',
        synonyms: ['predicament', 'crisis', 'hardship'],
      },
      {
        word: 'persevere',
        partOfSpeech: 'verb',
        definition: 'To keep trying despite difficulty, failure or discouragement.',
        exampleSentence:
          'She vowed to persevere up the ridge even though every muscle screamed at her to stop.',
        synonyms: ['persist', 'soldier on', 'press on'],
      },
      {
        word: 'meagre',
        partOfSpeech: 'adjective',
        definition: 'Very small in amount and clearly not enough.',
        exampleSentence:
          'A meagre handful of rice was all that stood between the family and starvation.',
        synonyms: ['scant', 'paltry', 'sparse'],
      },
    ],
  },
  {
    id: 'journeys',
    title: 'Journeys',
    blurb:
      'Travel writing, migration recounts and quest narratives appear repeatedly across the linked Section A texts. This bank supports vivid writing about movement, distance and arrival.',
    words: [
      {
        word: 'expedition',
        partOfSpeech: 'noun',
        definition: 'An organised journey undertaken for a particular purpose, often exploration.',
        exampleSentence:
          'The expedition set out before sunrise, its mules laden with rope, lamps and tinned food.',
        synonyms: ['voyage', 'trek', 'excursion'],
      },
      {
        word: 'embark',
        partOfSpeech: 'verb',
        definition: 'To begin a journey, or to board a ship or aircraft for one.',
        exampleSentence: 'They embarked at dawn, the harbour lights still glowing behind them.',
        synonyms: ['set off', 'depart', 'commence'],
      },
      {
        word: 'arduous',
        partOfSpeech: 'adjective',
        definition: 'Requiring great and tiring effort to complete.',
        exampleSentence:
          'The arduous climb left them gasping long before the summit came into view.',
        synonyms: ['gruelling', 'strenuous', 'taxing'],
      },
      {
        word: 'meander',
        partOfSpeech: 'verb',
        definition: 'To follow a winding course without hurrying or going directly.',
        exampleSentence:
          'The path seemed to meander through the orchard, doubling back on itself again and again.',
        synonyms: ['wind', 'wander', 'snake'],
      },
      {
        word: 'destination',
        partOfSpeech: 'noun',
        definition: 'The place to which someone or something is travelling.',
        exampleSentence:
          'After eleven days of rain, the distant glow of their destination felt almost unreal.',
        synonyms: ['terminus', 'goal', 'endpoint'],
      },
      {
        word: 'traverse',
        partOfSpeech: 'verb',
        definition: 'To travel or move across an area, especially a difficult one.',
        exampleSentence:
          'To traverse the salt flats they walked only at night, when the heat finally relented.',
        synonyms: ['cross', 'navigate', 'span'],
      },
      {
        word: 'migrate',
        partOfSpeech: 'verb',
        definition: 'To move from one region or country to another, usually to settle.',
        exampleSentence:
          'Whole families chose to migrate north, carrying everything they owned in two cases.',
        synonyms: ['relocate', 'resettle', 'emigrate'],
      },
      {
        word: 'wanderlust',
        partOfSpeech: 'noun',
        definition: 'A strong, restless desire to travel and explore the world.',
        exampleSentence:
          'A familiar wanderlust stirred in her the moment the train pulled out of the station.',
        synonyms: ['itchy feet', 'restlessness', 'yearning to roam'],
      },
      {
        word: 'pilgrimage',
        partOfSpeech: 'noun',
        definition: 'A long journey made to a place of special, often spiritual, significance.',
        exampleSentence:
          'Each spring he made the same quiet pilgrimage to the lighthouse where his father had worked.',
        synonyms: ['journey', 'quest', 'odyssey'],
      },
      {
        word: 'detour',
        partOfSpeech: 'noun',
        definition: 'A longer, indirect route taken instead of the most direct one.',
        exampleSentence:
          'The flooded bridge forced a wide detour through villages none of them had heard of.',
        synonyms: ['diversion', 'bypass', 'roundabout route'],
      },
      {
        word: 'voyage',
        partOfSpeech: 'noun',
        definition: 'A long journey, especially by sea or in space.',
        exampleSentence:
          'The voyage had begun in calm waters, but the third week brought towering grey waves.',
        synonyms: ['passage', 'crossing', 'expedition'],
      },
      {
        word: 'navigate',
        partOfSpeech: 'verb',
        definition: 'To plan and direct the route of a journey, especially using instruments.',
        exampleSentence:
          'Without the stars to navigate by, the captain trusted only the worn compass in his palm.',
        synonyms: ['steer', 'chart a course', 'pilot'],
      },
      {
        word: 'threshold',
        partOfSpeech: 'noun',
        definition: 'A point of entry or the beginning of a new stage or experience.',
        exampleSentence:
          'Standing on the threshold of the unknown valley, she felt both terror and delight.',
        synonyms: ['brink', 'doorway', 'verge'],
      },
      {
        word: 'sojourn',
        partOfSpeech: 'noun',
        definition: 'A temporary stay in a place during a longer journey.',
        exampleSentence:
          'Their brief sojourn in the mountain village stretched, happily, into a fortnight.',
        synonyms: ['stopover', 'stay', 'visit'],
      },
      {
        word: 'depart',
        partOfSpeech: 'verb',
        definition: 'To leave a place, especially to start a journey.',
        exampleSentence:
          'They chose to depart while the streets were still empty and the air still cool.',
        synonyms: ['leave', 'set out', 'withdraw'],
      },
    ],
  },
  {
    id: 'the-natural-world',
    title: 'The Natural World',
    blurb:
      'Descriptions of landscape, weather and wildlife dominate both the non-fiction and fiction texts. Precise nature vocabulary lifts descriptive writing out of the ordinary.',
    words: [
      {
        word: 'verdant',
        partOfSpeech: 'adjective',
        definition: 'Bright green with rich, lush vegetation.',
        exampleSentence:
          'Beyond the dunes lay a verdant valley where ferns brushed against their knees.',
        synonyms: ['lush', 'leafy', 'flourishing'],
      },
      {
        word: 'cascade',
        partOfSpeech: 'verb',
        definition: 'To fall or flow downwards rapidly in large quantities, like a waterfall.',
        exampleSentence:
          'Meltwater began to cascade over the granite, flashing silver in the early light.',
        synonyms: ['tumble', 'pour', 'plunge'],
      },
      {
        word: 'tranquil',
        partOfSpeech: 'adjective',
        definition: 'Calm, peaceful and free from disturbance.',
        exampleSentence:
          'The lake was so tranquil that the reflected mountains seemed painted onto the water.',
        synonyms: ['serene', 'placid', 'undisturbed'],
      },
      {
        word: 'rugged',
        partOfSpeech: 'adjective',
        definition: 'Having a rough, uneven and often harsh natural surface.',
        exampleSentence: 'The rugged coastline tore at every wave that dared to approach it.',
        synonyms: ['craggy', 'jagged', 'rough'],
      },
      {
        word: 'foliage',
        partOfSpeech: 'noun',
        definition: 'The leaves of plants or trees considered together.',
        exampleSentence:
          'Sunlight filtered through the dense foliage and dappled the forest floor with gold.',
        synonyms: ['greenery', 'leaves', 'vegetation'],
      },
      {
        word: 'arid',
        partOfSpeech: 'adjective',
        definition: 'Extremely dry because it has little or no rainfall.',
        exampleSentence: 'Nothing moved across the arid plain except a thin spiral of dust.',
        synonyms: ['parched', 'barren', 'desiccated'],
      },
      {
        word: 'undulate',
        partOfSpeech: 'verb',
        definition: 'To move or be shaped in smooth, wave-like rises and falls.',
        exampleSentence: 'The wheat began to undulate as the breeze rolled across the open field.',
        synonyms: ['ripple', 'roll', 'billow'],
      },
      {
        word: 'pristine',
        partOfSpeech: 'adjective',
        definition: 'In its original, unspoilt and perfectly clean condition.',
        exampleSentence: 'Their boots were the first to mark the pristine snow on the high pass.',
        synonyms: ['untouched', 'immaculate', 'unspoilt'],
      },
      {
        word: 'torrent',
        partOfSpeech: 'noun',
        definition: 'A strong, fast and overwhelming stream of water.',
        exampleSentence: 'Within minutes the gentle stream had swollen into a brown torrent.',
        synonyms: ['deluge', 'flood', 'cataract'],
      },
      {
        word: 'wilderness',
        partOfSpeech: 'noun',
        definition: 'A wild, uncultivated region untouched by human development.',
        exampleSentence: 'For two hundred miles the wilderness offered neither road nor roof.',
        synonyms: ['wilds', 'backcountry', 'wasteland'],
      },
      {
        word: 'gnarled',
        partOfSpeech: 'adjective',
        definition: 'Twisted, rough and knotted, usually through age or weather.',
        exampleSentence:
          'A single gnarled oak clung to the cliff, bent almost flat by the constant wind.',
        synonyms: ['knotted', 'twisted', 'weathered'],
      },
      {
        word: 'shimmer',
        partOfSpeech: 'verb',
        definition: 'To shine with a soft, wavering, trembling light.',
        exampleSentence: 'Heat made the distant road shimmer until it dissolved into the horizon.',
        synonyms: ['glisten', 'glint', 'gleam'],
      },
      {
        word: 'expanse',
        partOfSpeech: 'noun',
        definition: 'A wide, continuous and open area of land, water or sky.',
        exampleSentence:
          'Above the camp stretched an expanse of stars so dense it looked like spilt salt.',
        synonyms: ['stretch', 'sweep', 'breadth'],
      },
      {
        word: 'fertile',
        partOfSpeech: 'adjective',
        definition: 'Able to produce abundant crops or vegetation.',
        exampleSentence:
          'The fertile floodplain rewarded every seed the villagers pressed into its dark soil.',
        synonyms: ['productive', 'rich', 'bountiful'],
      },
      {
        word: 'desolation',
        partOfSpeech: 'noun',
        definition: 'A state of bleak, empty and lifeless ruin.',
        exampleSentence: 'After the wildfire, only blackened stumps interrupted the desolation.',
        synonyms: ['barrenness', 'bleakness', 'devastation'],
      },
    ],
  },
  {
    id: 'courage',
    title: 'Courage',
    blurb:
      'Biographies of pioneers, rescuers and campaigners, and fiction about characters facing fear, are common Section A material. This bank powers persuasive and narrative writing about bravery.',
    words: [
      {
        word: 'valiant',
        partOfSpeech: 'adjective',
        definition: 'Showing great courage and determination, especially in danger.',
        exampleSentence:
          'Her valiant attempt to reach the trapped miners earned the whole town’s respect.',
        synonyms: ['brave', 'heroic', 'gallant'],
      },
      {
        word: 'undaunted',
        partOfSpeech: 'adjective',
        definition: 'Not discouraged or frightened by difficulty or danger.',
        exampleSentence:
          'Undaunted by the jeering crowd, she finished her speech without a tremor in her voice.',
        synonyms: ['fearless', 'unflinching', 'resolute'],
      },
      {
        word: 'defiant',
        partOfSpeech: 'adjective',
        definition: 'Boldly refusing to obey or to give in to a powerful force.',
        exampleSentence:
          'He stood defiant before the magistrate, refusing to name a single friend.',
        synonyms: ['rebellious', 'unyielding', 'bold'],
      },
      {
        word: 'fortitude',
        partOfSpeech: 'noun',
        definition: 'Courage and strength of mind in enduring pain or adversity.',
        exampleSentence:
          'It took quiet fortitude to nurse the village through that endless winter.',
        synonyms: ['resilience', 'grit', 'endurance'],
      },
      {
        word: 'audacious',
        partOfSpeech: 'adjective',
        definition: 'Willing to take surprisingly bold and daring risks.',
        exampleSentence:
          'Their audacious plan to cross the gorge by rope seemed reckless until it worked.',
        synonyms: ['daring', 'bold', 'intrepid'],
      },
      {
        word: 'intrepid',
        partOfSpeech: 'adjective',
        definition: 'Fearless and adventurous, especially in facing the unknown.',
        exampleSentence: 'The intrepid surveyor mapped the cave system entirely alone.',
        synonyms: ['daring', 'bold', 'undaunted'],
      },
      {
        word: 'persevere',
        partOfSpeech: 'verb',
        definition: 'To continue with effort despite difficulty or opposition.',
        exampleSentence:
          'She chose to persevere with the campaign even after the funding collapsed.',
        synonyms: ['persist', 'press on', 'endure'],
      },
      {
        word: 'gallant',
        partOfSpeech: 'adjective',
        definition: 'Brave, noble and willing to act for the good of others.',
        exampleSentence:
          'A gallant stranger waded into the current without hesitating for a second.',
        synonyms: ['heroic', 'chivalrous', 'valiant'],
      },
      {
        word: 'resolve',
        partOfSpeech: 'noun',
        definition: 'Firm determination to do something difficult.',
        exampleSentence:
          'Nothing the storm threw at them could shake their resolve to reach the shore.',
        synonyms: ['determination', 'resolution', 'tenacity'],
      },
      {
        word: 'steadfast',
        partOfSpeech: 'adjective',
        definition: 'Firmly loyal or committed and not changing under pressure.',
        exampleSentence:
          'Through every setback he remained steadfast in his belief that they would be found.',
        synonyms: ['unwavering', 'staunch', 'constant'],
      },
      {
        word: 'dauntless',
        partOfSpeech: 'adjective',
        definition: 'Showing fearless and persistent determination.',
        exampleSentence:
          'The dauntless lifeboat crew launched a fourth time into the same black waves.',
        synonyms: ['fearless', 'undaunted', 'indomitable'],
      },
      {
        word: 'embolden',
        partOfSpeech: 'verb',
        definition: 'To give someone the courage or confidence to act.',
        exampleSentence: 'Her calm voice seemed to embolden the younger climbers behind her.',
        synonyms: ['encourage', 'hearten', 'galvanise'],
      },
      {
        word: 'tenacity',
        partOfSpeech: 'noun',
        definition: 'The quality of holding firmly to a purpose and refusing to give up.',
        exampleSentence: 'It was sheer tenacity, not luck, that carried her over the final ridge.',
        synonyms: ['persistence', 'doggedness', 'determination'],
      },
      {
        word: 'heroic',
        partOfSpeech: 'adjective',
        definition: 'Showing the great bravery associated with a hero.',
        exampleSentence:
          'The heroic act went unreported for years, known only to the family it saved.',
        synonyms: ['courageous', 'valiant', 'gallant'],
      },
      {
        word: 'brave',
        partOfSpeech: 'verb',
        definition: 'To face or endure something dangerous or unpleasant with courage.',
        exampleSentence:
          'They would have to brave the blizzard if anyone on the ridge was to live.',
        synonyms: ['confront', 'face', 'withstand'],
      },
    ],
  },
  {
    id: 'change',
    title: 'Change',
    blurb:
      'Texts about growing up, social progress, technology and loss explore transformation. Precise vocabulary about change strengthens both analytical answers and reflective writing.',
    words: [
      {
        word: 'transform',
        partOfSpeech: 'verb',
        definition: 'To change something completely, usually for the better.',
        exampleSentence:
          'A single conversation seemed to transform the way she saw her own future.',
        synonyms: ['transmute', 'revolutionise', 'reshape'],
      },
      {
        word: 'gradual',
        partOfSpeech: 'adjective',
        definition: 'Happening slowly over a period of time rather than suddenly.',
        exampleSentence:
          'The gradual greening of the wasteland surprised even the people who had planted it.',
        synonyms: ['steady', 'progressive', 'incremental'],
      },
      {
        word: 'profound',
        partOfSpeech: 'adjective',
        definition: 'Very great, deep or far-reaching in effect.',
        exampleSentence:
          'The journey had a profound effect on how he treated everyone he met afterwards.',
        synonyms: ['deep', 'far-reaching', 'momentous'],
      },
      {
        word: 'evolve',
        partOfSpeech: 'verb',
        definition: 'To develop gradually into a different and often more advanced form.',
        exampleSentence: 'The quiet hobby would slowly evolve into the work of her whole life.',
        synonyms: ['develop', 'progress', 'mature'],
      },
      {
        word: 'transition',
        partOfSpeech: 'noun',
        definition: 'The process of changing from one state or stage to another.',
        exampleSentence:
          'The transition from village school to city college unsettled him for months.',
        synonyms: ['shift', 'changeover', 'passage'],
      },
      {
        word: 'irreversible',
        partOfSpeech: 'adjective',
        definition: 'Impossible to change back to a previous state.',
        exampleSentence:
          'They warned that the loss of the wetland would be irreversible within a decade.',
        synonyms: ['permanent', 'unalterable', 'final'],
      },
      {
        word: 'upheaval',
        partOfSpeech: 'noun',
        definition: 'A sudden, dramatic and often disruptive change.',
        exampleSentence: 'The factory’s closure brought an upheaval that reshaped the entire town.',
        synonyms: ['turmoil', 'disruption', 'disturbance'],
      },
      {
        word: 'adapt',
        partOfSpeech: 'verb',
        definition: 'To adjust to new conditions in order to cope or succeed.',
        exampleSentence: 'Those who could adapt to the harsher winters were the ones who stayed.',
        synonyms: ['adjust', 'acclimatise', 'modify'],
      },
      {
        word: 'fleeting',
        partOfSpeech: 'adjective',
        definition: 'Lasting only for a very short time.',
        exampleSentence: 'Childhood summers, she realised too late, had been fleeting all along.',
        synonyms: ['brief', 'transient', 'momentary'],
      },
      {
        word: 'renew',
        partOfSpeech: 'verb',
        definition: 'To make something fresh, valid or strong again.',
        exampleSentence: 'The first rain in months seemed to renew the cracked and tired fields.',
        synonyms: ['revive', 'restore', 'regenerate'],
      },
      {
        word: 'erode',
        partOfSpeech: 'verb',
        definition: 'To gradually wear away or weaken something over time.',
        exampleSentence:
          'Each broken promise began to erode the trust the villagers had once felt.',
        synonyms: ['wear away', 'undermine', 'corrode'],
      },
      {
        word: 'metamorphosis',
        partOfSpeech: 'noun',
        definition: 'A complete and striking change in form, nature or character.',
        exampleSentence:
          'His metamorphosis from a shy boy to a confident leader astonished his old teachers.',
        synonyms: ['transformation', 'conversion', 'transfiguration'],
      },
      {
        word: 'inevitable',
        partOfSpeech: 'adjective',
        definition: 'Certain to happen and impossible to avoid.',
        exampleSentence: 'The closure felt inevitable once the river finally changed its course.',
        synonyms: ['unavoidable', 'certain', 'inescapable'],
      },
      {
        word: 'flourish',
        partOfSpeech: 'verb',
        definition: 'To grow or develop strongly and successfully.',
        exampleSentence:
          'Given a little space and light, the seedlings began to flourish overnight.',
        synonyms: ['thrive', 'prosper', 'bloom'],
      },
      {
        word: 'wither',
        partOfSpeech: 'verb',
        definition: 'To become dry, shrunken and lifeless, or to gradually decline.',
        exampleSentence: 'Without rain the orchard would surely wither before the harvest came.',
        synonyms: ['shrivel', 'fade', 'decay'],
      },
    ],
  },
  {
    id: 'discovery',
    title: 'Discovery',
    blurb:
      'Science writing, exploration accounts and mystery fiction about uncovering the unknown recur in linked Section A texts. This bank supports writing about insight, revelation and the new.',
    words: [
      {
        word: 'unearth',
        partOfSpeech: 'verb',
        definition: 'To find something hidden by digging or by careful searching.',
        exampleSentence:
          'The students hoped to unearth the foundations of the village beneath the meadow.',
        synonyms: ['uncover', 'excavate', 'dig up'],
      },
      {
        word: 'revelation',
        partOfSpeech: 'noun',
        definition: 'A surprising and previously unknown fact made suddenly clear.',
        exampleSentence:
          'The letter contained a revelation that changed everything she believed about her family.',
        synonyms: ['disclosure', 'eye-opener', 'epiphany'],
      },
      {
        word: 'pioneering',
        partOfSpeech: 'adjective',
        definition: 'Involving new and original methods or ideas before anyone else.',
        exampleSentence:
          'Her pioneering research mapped a corner of the ocean no instrument had reached.',
        synonyms: ['groundbreaking', 'innovative', 'trailblazing'],
      },
      {
        word: 'inquisitive',
        partOfSpeech: 'adjective',
        definition: 'Eager to learn by asking questions and investigating.',
        exampleSentence:
          'The inquisitive child took the old radio apart just to see what made it speak.',
        synonyms: ['curious', 'probing', 'questioning'],
      },
      {
        word: 'profound',
        partOfSpeech: 'adjective',
        definition: 'Showing deep insight or understanding.',
        exampleSentence:
          'A profound silence followed the announcement, as everyone grasped its meaning.',
        synonyms: ['deep', 'penetrating', 'insightful'],
      },
      {
        word: 'illuminate',
        partOfSpeech: 'verb',
        definition: 'To make something clearer or easier to understand.',
        exampleSentence:
          'One small experiment seemed to illuminate a problem scientists had puzzled over for years.',
        synonyms: ['clarify', 'elucidate', 'shed light on'],
      },
      {
        word: 'enlighten',
        partOfSpeech: 'verb',
        definition: 'To give someone greater knowledge or understanding of something.',
        exampleSentence:
          'The guide patiently set out to enlighten the visitors about the ruined city.',
        synonyms: ['inform', 'educate', 'instruct'],
      },
      {
        word: 'discern',
        partOfSpeech: 'verb',
        definition: 'To recognise or work something out by careful observation.',
        exampleSentence:
          'Only at dawn could they discern the faint outline of a path through the mist.',
        synonyms: ['detect', 'perceive', 'distinguish'],
      },
      {
        word: 'breakthrough',
        partOfSpeech: 'noun',
        definition: 'A sudden, important advance or success after difficulty.',
        exampleSentence: 'The breakthrough came not in the laboratory but on a long walk home.',
        synonyms: ['advance', 'leap forward', 'discovery'],
      },
      {
        word: 'investigate',
        partOfSpeech: 'verb',
        definition: 'To examine something carefully in order to discover the truth.',
        exampleSentence:
          'She decided to investigate the strange readings before reporting them to anyone.',
        synonyms: ['examine', 'probe', 'scrutinise'],
      },
      {
        word: 'novel',
        partOfSpeech: 'adjective',
        definition: 'New, original and not resembling anything known before.',
        exampleSentence:
          'His novel approach to the problem made every expert in the room sit forward.',
        synonyms: ['innovative', 'original', 'fresh'],
      },
      {
        word: 'curiosity',
        partOfSpeech: 'noun',
        definition: 'A strong desire to know or learn something.',
        exampleSentence: 'Pure curiosity, and nothing else, drew her down the unmarked tunnel.',
        synonyms: ['inquisitiveness', 'interest', 'fascination'],
      },
      {
        word: 'uncharted',
        partOfSpeech: 'adjective',
        definition: 'Not yet mapped, explored or fully understood.',
        exampleSentence:
          'Beyond the last marker lay uncharted forest that no survey had ever crossed.',
        synonyms: ['unexplored', 'unknown', 'unmapped'],
      },
      {
        word: 'perceive',
        partOfSpeech: 'verb',
        definition: 'To become aware of or understand something through the senses or mind.',
        exampleSentence:
          'Slowly she began to perceive a pattern in the marks scratched on the cave wall.',
        synonyms: ['notice', 'detect', 'apprehend'],
      },
      {
        word: 'insight',
        partOfSpeech: 'noun',
        definition: 'A clear, deep and accurate understanding of something.',
        exampleSentence:
          'The diary offered a rare insight into how the explorers truly felt that winter.',
        synonyms: ['understanding', 'perception', 'comprehension'],
      },
    ],
  },
]

// ─── Cross-cutting banks ──────────────────────────────────────────────

export const CROSS_CUTTING_THEMES: VocabularyTheme[] = [
  {
    id: 'ambitious-descriptive',
    title: 'Ambitious descriptive vocabulary',
    blurb:
      'A general bank of precise, sensory words that raise descriptive writing in Section B and demonstrate the "ambitious choices used appropriately" rewarded under WAO2.',
    words: [
      {
        word: 'luminous',
        partOfSpeech: 'adjective',
        definition: 'Giving off or reflecting a soft, glowing light.',
        exampleSentence: 'The luminous moon turned the snowfield into a sheet of pale glass.',
        synonyms: ['radiant', 'glowing', 'incandescent'],
      },
      {
        word: 'cacophony',
        partOfSpeech: 'noun',
        definition: 'A harsh, jarring mixture of loud and unpleasant sounds.',
        exampleSentence:
          'A cacophony of horns and shouting swallowed her words before she could finish.',
        synonyms: ['din', 'racket', 'discord'],
      },
      {
        word: 'acrid',
        partOfSpeech: 'adjective',
        definition: 'Having an unpleasantly sharp, bitter smell or taste.',
        exampleSentence: 'An acrid smell of scorched wiring drifted from behind the cupboard.',
        synonyms: ['pungent', 'caustic', 'biting'],
      },
      {
        word: 'serene',
        partOfSpeech: 'adjective',
        definition: 'Calm, peaceful and completely untroubled.',
        exampleSentence: 'Her serene expression never changed, even as the questions grew sharper.',
        synonyms: ['tranquil', 'placid', 'composed'],
      },
      {
        word: 'jagged',
        partOfSpeech: 'adjective',
        definition: 'Having a rough, sharp and uneven edge or outline.',
        exampleSentence: 'Jagged peaks bit into the orange sky like a row of broken teeth.',
        synonyms: ['serrated', 'ragged', 'craggy'],
      },
      {
        word: 'fragrant',
        partOfSpeech: 'adjective',
        definition: 'Having a pleasant, sweet smell.',
        exampleSentence: 'Fragrant pine drifted down the slope and settled over the silent camp.',
        synonyms: ['scented', 'aromatic', 'perfumed'],
      },
      {
        word: 'sodden',
        partOfSpeech: 'adjective',
        definition: 'Soaked completely through with liquid.',
        exampleSentence: 'Her sodden coat hung heavily from her shoulders as she trudged inside.',
        synonyms: ['drenched', 'saturated', 'waterlogged'],
      },
      {
        word: 'brittle',
        partOfSpeech: 'adjective',
        definition: 'Hard but easily broken or snapped.',
        exampleSentence: 'The brittle leaves crackled into dust beneath every careful step.',
        synonyms: ['fragile', 'crisp', 'frail'],
      },
      {
        word: 'murmur',
        partOfSpeech: 'verb',
        definition: 'To make or speak in a low, soft, continuous sound.',
        exampleSentence: 'The stream continued to murmur somewhere beyond the dark hedgerow.',
        synonyms: ['mutter', 'whisper', 'burble'],
      },
      {
        word: 'gloom',
        partOfSpeech: 'noun',
        definition: 'Partial or total darkness, often with a heavy, depressing quality.',
        exampleSentence: 'A single lamp barely dented the gloom of the long stone corridor.',
        synonyms: ['murk', 'shadow', 'dimness'],
      },
      {
        word: 'radiant',
        partOfSpeech: 'adjective',
        definition: 'Sending out bright light, warmth or evident happiness.',
        exampleSentence: 'Her radiant smile told them the news long before she spoke it aloud.',
        synonyms: ['beaming', 'glowing', 'luminous'],
      },
      {
        word: 'frigid',
        partOfSpeech: 'adjective',
        definition: 'Extremely cold, or coldly unfriendly in manner.',
        exampleSentence:
          'A frigid wind sliced through the gap in the boards and snuffed the candle.',
        synonyms: ['freezing', 'icy', 'glacial'],
      },
      {
        word: 'glisten',
        partOfSpeech: 'verb',
        definition: 'To shine with a sparkling, wet or oily light.',
        exampleSentence: 'Dew began to glisten on every blade as the first sun reached the meadow.',
        synonyms: ['glint', 'sparkle', 'shimmer'],
      },
      {
        word: 'oppressive',
        partOfSpeech: 'adjective',
        definition: 'Uncomfortably heavy, intense or weighing on the mind.',
        exampleSentence:
          'The oppressive heat pressed down until even speaking felt like an effort.',
        synonyms: ['stifling', 'suffocating', 'overpowering'],
      },
      {
        word: 'velvety',
        partOfSpeech: 'adjective',
        definition: 'Pleasantly soft and smooth to the touch or in appearance.',
        exampleSentence: 'A velvety darkness folded over the valley as the last light withdrew.',
        synonyms: ['smooth', 'silken', 'soft'],
      },
    ],
  },
  {
    id: 'emotion-and-atmosphere',
    title: 'Emotion & atmosphere words',
    blurb:
      'Words for naming feeling and mood precisely. Useful for RAO5 answers about effect on the reader, and for controlling tone in Section B narrative and descriptive writing.',
    words: [
      {
        word: 'apprehensive',
        partOfSpeech: 'adjective',
        definition: 'Anxious or fearful that something bad may happen.',
        exampleSentence:
          'She felt apprehensive the moment the lights flickered and the music stopped.',
        synonyms: ['uneasy', 'nervous', 'wary'],
      },
      {
        word: 'elated',
        partOfSpeech: 'adjective',
        definition: 'Extremely happy and full of joyful excitement.',
        exampleSentence: 'Elated, the climbers hugged on the summit as the cloud finally cleared.',
        synonyms: ['jubilant', 'overjoyed', 'euphoric'],
      },
      {
        word: 'foreboding',
        partOfSpeech: 'noun',
        definition: 'A strong feeling that something bad is about to happen.',
        exampleSentence: 'A heavy foreboding settled over the crew as the gulls suddenly vanished.',
        synonyms: ['dread', 'premonition', 'misgiving'],
      },
      {
        word: 'melancholy',
        partOfSpeech: 'noun',
        definition: 'A deep, thoughtful and lingering sadness.',
        exampleSentence:
          'A quiet melancholy filled the empty house where the family had once laughed.',
        synonyms: ['sorrow', 'wistfulness', 'gloom'],
      },
      {
        word: 'eerie',
        partOfSpeech: 'adjective',
        definition: 'Strange and frightening in a mysterious way.',
        exampleSentence: 'An eerie stillness hung over the village, with no birds and no voices.',
        synonyms: ['uncanny', 'unsettling', 'spooky'],
      },
      {
        word: 'anguish',
        partOfSpeech: 'noun',
        definition: 'Severe mental or physical pain and suffering.',
        exampleSentence: 'The anguish in his letter was impossible to read aloud without pausing.',
        synonyms: ['torment', 'agony', 'distress'],
      },
      {
        word: 'serenity',
        partOfSpeech: 'noun',
        definition: 'A state of calm, peaceful and untroubled feeling.',
        exampleSentence: 'A sudden serenity replaced her panic as the boat drifted into the bay.',
        synonyms: ['tranquillity', 'calm', 'peace'],
      },
      {
        word: 'tense',
        partOfSpeech: 'adjective',
        definition: 'Causing or feeling nervous strain and unable to relax.',
        exampleSentence:
          'The tense silence in the room broke only when the telephone finally rang.',
        synonyms: ['strained', 'fraught', 'edgy'],
      },
      {
        word: 'jubilant',
        partOfSpeech: 'adjective',
        definition: 'Feeling or expressing great triumphant happiness.',
        exampleSentence: 'A jubilant crowd lined the harbour as the lost trawler came home.',
        synonyms: ['triumphant', 'elated', 'exultant'],
      },
      {
        word: 'desolate',
        partOfSpeech: 'adjective',
        definition: 'Feeling utterly lonely, miserable and without comfort.',
        exampleSentence: 'He felt desolate watching the train carry the last of his friends away.',
        synonyms: ['forlorn', 'wretched', 'bereft'],
      },
      {
        word: 'ominous',
        partOfSpeech: 'adjective',
        definition: 'Suggesting that something bad or threatening is going to happen.',
        exampleSentence: 'An ominous bank of cloud rolled in just as the boats reached open water.',
        synonyms: ['threatening', 'menacing', 'foreboding'],
      },
      {
        word: 'wistful',
        partOfSpeech: 'adjective',
        definition: 'Showing gentle, thoughtful longing or regret.',
        exampleSentence: 'A wistful look crossed her face whenever the old song came on the radio.',
        synonyms: ['yearning', 'nostalgic', 'pensive'],
      },
      {
        word: 'dread',
        partOfSpeech: 'noun',
        definition: 'A powerful feeling of fear about something that may happen.',
        exampleSentence: 'A cold dread crept over them as the footsteps on the stairs grew slower.',
        synonyms: ['terror', 'apprehension', 'fright'],
      },
      {
        word: 'exhilarated',
        partOfSpeech: 'adjective',
        definition: 'Feeling very excited, lively and full of energy.',
        exampleSentence:
          'Exhilarated by the freezing spray, she laughed for the first time in days.',
        synonyms: ['thrilled', 'invigorated', 'elated'],
      },
      {
        word: 'sombre',
        partOfSpeech: 'adjective',
        definition: 'Dark, serious and gloomy in mood or appearance.',
        exampleSentence: 'A sombre crowd gathered at the gate, speaking only in low murmurs.',
        synonyms: ['solemn', 'grave', 'mournful'],
      },
    ],
  },
  {
    id: 'connectives-and-cohesion',
    title: 'Connective & cohesion words',
    blurb:
      'WAO1 and WAO2 reward writing that links paragraphs "using a range of methods" and uses complex connectives. These connectives signal the relationship between ideas precisely.',
    words: [
      {
        word: 'consequently',
        partOfSpeech: 'adverb',
        definition: 'As a direct result of what has just been stated.',
        exampleSentence:
          'The bridge had collapsed; consequently, the village was cut off for a week.',
        synonyms: ['therefore', 'as a result', 'hence'],
      },
      {
        word: 'nevertheless',
        partOfSpeech: 'adverb',
        definition: 'In spite of what has just been said; even so.',
        exampleSentence: 'The path was flooded; nevertheless, they pressed on towards the ridge.',
        synonyms: ['nonetheless', 'even so', 'still'],
      },
      {
        word: 'furthermore',
        partOfSpeech: 'adverb',
        definition: 'In addition to what has been said, adding a further point.',
        exampleSentence:
          'The plan was costly; furthermore, it ignored the wishes of the villagers.',
        synonyms: ['moreover', 'in addition', 'besides'],
      },
      {
        word: 'whereas',
        partOfSpeech: 'conjunction',
        definition: 'Used to contrast two different facts or situations.',
        exampleSentence:
          'The first text celebrates the storm, whereas the second clearly fears it.',
        synonyms: ['while', 'by contrast', 'although'],
      },
      {
        word: 'subsequently',
        partOfSpeech: 'adverb',
        definition: 'Happening or coming after something else in time.',
        exampleSentence:
          'They reached the cabin at dusk and subsequently lit the only remaining lamp.',
        synonyms: ['afterwards', 'later', 'thereafter'],
      },
      {
        word: 'although',
        partOfSpeech: 'conjunction',
        definition: 'Used to introduce a fact that contrasts with the main statement.',
        exampleSentence: 'Although the rescue seemed impossible, the crew refused to turn back.',
        synonyms: ['though', 'even though', 'whilst'],
      },
      {
        word: 'meanwhile',
        partOfSpeech: 'adverb',
        definition: 'During the same period of time as something else.',
        exampleSentence:
          'The leaders argued by the fire; meanwhile, the children quietly packed the boat.',
        synonyms: ['simultaneously', 'in the meantime', 'concurrently'],
      },
      {
        word: 'however',
        partOfSpeech: 'adverb',
        definition: 'Used to introduce a statement that contrasts with what came before.',
        exampleSentence: 'The map promised a shortcut; the marsh, however, told a different story.',
        synonyms: ['yet', 'nonetheless', 'even so'],
      },
      {
        word: 'similarly',
        partOfSpeech: 'adverb',
        definition: 'In a way that is alike or comparable to what was just stated.',
        exampleSentence:
          'The first explorer kept a diary; similarly, the second recorded every day.',
        synonyms: ['likewise', 'in the same way', 'correspondingly'],
      },
      {
        word: 'therefore',
        partOfSpeech: 'adverb',
        definition: 'For that reason; as a logical consequence.',
        exampleSentence:
          'No supplies had arrived; therefore, the search would have to wait until morning.',
        synonyms: ['thus', 'hence', 'consequently'],
      },
      {
        word: 'conversely',
        partOfSpeech: 'adverb',
        definition: 'Introducing a statement that is the opposite of the previous one.',
        exampleSentence:
          'One survivor remembered the cold; conversely, the other recalled only the silence.',
        synonyms: ['on the other hand', 'in contrast', 'oppositely'],
      },
      {
        word: 'initially',
        partOfSpeech: 'adverb',
        definition: 'At the very beginning, before later developments.',
        exampleSentence:
          'Initially the climb felt simple, but the weather changed within the hour.',
        synonyms: ['at first', 'originally', 'to begin with'],
      },
      {
        word: 'ultimately',
        partOfSpeech: 'adverb',
        definition: 'In the end, after everything else has been considered.',
        exampleSentence:
          'Ultimately, it was a stranger’s small kindness that saved the expedition.',
        synonyms: ['finally', 'in the end', 'eventually'],
      },
      {
        word: 'notwithstanding',
        partOfSpeech: 'preposition',
        definition: 'In spite of; without being prevented by something.',
        exampleSentence:
          'Notwithstanding the warnings, the captain ordered the ship out of the harbour.',
        synonyms: ['despite', 'in spite of', 'regardless of'],
      },
      {
        word: 'likewise',
        partOfSpeech: 'adverb',
        definition: 'In the same way; also.',
        exampleSentence:
          'The villagers shared their bread; the travellers, likewise, shared their maps.',
        synonyms: ['similarly', 'equally', 'correspondingly'],
      },
    ],
  },
]

// ─── Analytical verbs bank (for Section A reading answers) ────────────

export interface AnalyticalVerb {
  verb: string
  meaning: string
  /** Practical guidance on when and how to deploy it in an answer. */
  howToUse: string
}

export const ANALYTICAL_VERBS: AnalyticalVerb[] = [
  {
    verb: 'analyse',
    meaning: 'To examine something in detail, breaking it into parts to explain how it works.',
    howToUse:
      'Use as the backbone of a developed RAO4 point: name the technique, then analyse its parts before stating the effect.',
  },
  {
    verb: 'suggest',
    meaning: 'To put forward an idea or possibility without stating it directly.',
    howToUse:
      'Ideal for inference (RAO2): "The phrase suggests that…" lets you offer a reading the writer only implies.',
  },
  {
    verb: 'imply',
    meaning: 'To express or hint at a meaning indirectly rather than openly.',
    howToUse:
      'Use when the meaning is hidden beneath the literal words: "The writer implies that the journey was hopeless."',
  },
  {
    verb: 'convey',
    meaning: 'To communicate or get across an idea, feeling or message.',
    howToUse:
      'Strong for RAO5: explain what mood or viewpoint the language is chosen to convey to the reader.',
  },
  {
    verb: 'emphasise',
    meaning: 'To give special importance or prominence to something.',
    howToUse:
      'Use for repetition, listing or short sentences: explain what the writer emphasises and why it matters.',
  },
  {
    verb: 'evoke',
    meaning: 'To bring a feeling, memory or image strongly into the reader’s mind.',
    howToUse:
      'Pair with sensory or figurative language: "The simile evokes the loneliness of the shore."',
  },
  {
    verb: 'highlight',
    meaning: 'To draw attention to a particular detail or idea.',
    howToUse:
      'Useful for structure (RAO3): explain how an opening, contrast or final line highlights a key idea.',
  },
  {
    verb: 'reveal',
    meaning: 'To make something previously hidden known or clear.',
    howToUse:
      'Use for characterisation and viewpoint: "The detail reveals the narrator’s growing fear."',
  },
  {
    verb: 'reinforce',
    meaning: 'To strengthen an idea by repeating or supporting it.',
    howToUse:
      'Use when a second technique supports the first: explain how it reinforces an effect already created.',
  },
  {
    verb: 'illustrate',
    meaning: 'To make an idea clearer by giving an example of it.',
    howToUse:
      'Use to introduce evidence: "This is illustrated by the phrase…", then explain the effect.',
  },
  {
    verb: 'contrast',
    meaning: 'To set two things side by side to show how they differ.',
    howToUse:
      'Essential for the 6-mark comparison: explain how the writer contrasts ideas or how the two texts contrast.',
  },
  {
    verb: 'undermine',
    meaning: 'To weaken or cast doubt on an idea, often subtly.',
    howToUse:
      'Use for tone and viewpoint: explain how irony or word choice undermines an apparently positive statement.',
  },
]

// ─── Upgrade table (weak word → precise alternatives) ─────────────────

export interface UpgradeEntry {
  weak: string
  upgrades: { word: string; nuance: string }[]
}

export const UPGRADE_TABLE: UpgradeEntry[] = [
  {
    weak: 'said',
    upgrades: [
      { word: 'murmured', nuance: 'said quietly and softly, often gently' },
      { word: 'protested', nuance: 'said in objection or complaint' },
      { word: 'declared', nuance: 'said firmly and openly, with confidence' },
    ],
  },
  {
    weak: 'big',
    upgrades: [
      { word: 'vast', nuance: 'enormous in extent, suggesting open space' },
      { word: 'towering', nuance: 'tall and imposing, looming over you' },
      { word: 'immense', nuance: 'overwhelmingly large in scale or degree' },
    ],
  },
  {
    weak: 'small',
    upgrades: [
      { word: 'minuscule', nuance: 'extremely tiny, almost invisible' },
      { word: 'cramped', nuance: 'small in an uncomfortable, confined way' },
      { word: 'slight', nuance: 'small and delicate, easily overlooked' },
    ],
  },
  {
    weak: 'good',
    upgrades: [
      { word: 'admirable', nuance: 'deserving of respect and approval' },
      { word: 'exemplary', nuance: 'so good it serves as a model for others' },
      { word: 'commendable', nuance: 'good in a way that earns formal praise' },
    ],
  },
  {
    weak: 'bad',
    upgrades: [
      { word: 'dreadful', nuance: 'extremely bad and causing distress' },
      { word: 'deplorable', nuance: 'bad in a way that deserves strong disapproval' },
      { word: 'detrimental', nuance: 'bad because it causes harm or damage' },
    ],
  },
  {
    weak: 'happy',
    upgrades: [
      { word: 'content', nuance: 'quietly satisfied and at peace' },
      { word: 'elated', nuance: 'intensely and joyfully happy' },
      { word: 'gratified', nuance: 'happy because a wish has been fulfilled' },
    ],
  },
  {
    weak: 'sad',
    upgrades: [
      { word: 'sorrowful', nuance: 'deeply and openly grieved' },
      { word: 'melancholy', nuance: 'thoughtfully and lingeringly sad' },
      { word: 'despondent', nuance: 'sad through loss of hope or courage' },
    ],
  },
  {
    weak: 'scared',
    upgrades: [
      { word: 'apprehensive', nuance: 'mildly anxious about what might happen' },
      { word: 'terrified', nuance: 'overwhelmed by intense fear' },
      { word: 'petrified', nuance: 'so frightened as to be unable to move' },
    ],
  },
  {
    weak: 'walked',
    upgrades: [
      { word: 'trudged', nuance: 'walked slowly and wearily with effort' },
      { word: 'strode', nuance: 'walked with long, confident, purposeful steps' },
      { word: 'crept', nuance: 'walked slowly and quietly to avoid notice' },
    ],
  },
  {
    weak: 'nice',
    upgrades: [
      { word: 'pleasant', nuance: 'agreeable and giving mild enjoyment' },
      { word: 'gracious', nuance: 'kind and courteous in manner' },
      { word: 'delightful', nuance: 'highly pleasing and charming' },
    ],
  },
]

// ─── Source attribution helper re-export note ─────────────────────────
// The page imports SPEC_ATTRIBUTION directly from '@/lib/ilowersecondary/spec'
// for its footer; nothing is restated here.
