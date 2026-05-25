// ─── IELTS Academic Reading - practice item bank (Set 5) ───────────────────
// ORIGINAL content written for The English Hub. These passages and questions
// are invented purely to practise the Academic Reading question formats (MCQ,
// True/False/Not Given, and sentence/summary completion). They are NOT
// reproductions of any official IELTS past paper, and no official affiliation
// is implied. Academic track.
//
// Domain focus for this set: MARINE BIOLOGY (deep-ocean bioluminescence),
// AGRICULTURE & CONSERVATION (global seed banks and crop diversity), and
// URBAN PLANNING & CLIMATE (cities adapting to extreme summer heat) - chosen to
// stay distinct from the transport, memory, maritime, biology, technology,
// psychology and economics topics used elsewhere in the bank so learners meet
// fresh subject matter. This is a full Academic test: 3 passages, 40 questions.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_5: ReadingTest[] = [
  {
    id: 'rd-academic-005',
    title: 'Academic Reading - Practice Test 5',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      {
        id: 'rd-academic-005-p1',
        title: 'The Living Light of the Deep Ocean',
        body: `Below a depth of about a thousand metres the ocean is, to human eyes, completely dark. Sunlight cannot reach so far, and the water is cold, still and seemingly empty. Yet this is not a world without light. The majority of animals living in the open deep sea produce their own glow, a phenomenon known as bioluminescence, and for them the darkness is punctuated by flashes, sparks and steady lamps of living light. Far from being a curiosity, this ability is one of the most common forms of communication on the planet, simply because the dark ocean is by far the largest habitat on Earth.

The light itself is the product of a chemical reaction rather than any kind of heat. In most species a molecule called luciferin reacts with oxygen, assisted by an enzyme, and the energy released emerges almost entirely as light rather than warmth. Because so little is lost as heat, biologists describe the glow as "cold light", and it is remarkably efficient: a deep-sea animal can illuminate itself for a long period without the heavy energy cost that a warm lamp would impose. Most of this light is blue or blue-green, a colour that happens to travel furthest through seawater, although a handful of unusual fishes have evolved to produce and detect red light, which their neighbours cannot see at all. Not every glowing animal makes its own chemistry, either: some fishes cannot produce light unaided and instead house colonies of luminous bacteria in special organs, feeding the microbes in exchange for a reliable supply of light. The partnership is so complete that the fish can dim or hide the glow with a flap of skin whenever darkness suits it better.

The uses to which animals put their light are surprisingly varied. Some species flash to attract a mate, signalling their identity in a pattern that members of the same species can recognise. Others use light as a lure: the anglerfish, for example, dangles a glowing tip in front of its mouth, drawing curious prey close enough to be seized. A third group exploits light for defence. When startled, certain squid and shrimp eject a bright cloud into the water, the marine equivalent of a smokescreen, and dart away while a predator is briefly dazzled and confused. Stranger still are the animals that turn a predator's hunger against it. A few small crustaceans, when seized, glow so fiercely that they advertise the attacker to larger hunters above, so that the creature attempting to eat them risks being eaten in turn; the safest course for the attacker is to release its meal at once. In each case the light is not decoration but a tool, shaped by the same pressures of survival that have produced teeth, fins and camouflage elsewhere in the animal kingdom.

Perhaps the most elegant trick is one of concealment rather than display. An animal swimming in the dim twilight zone is visible from below as a dark shape against the faintly lit surface far above. To erase this telltale silhouette, many fishes and squid carry rows of light organs along their undersides and adjust their brightness to match the glow filtering down from the surface. Seen from beneath, the animal seems to vanish into the background. This strategy, known as counter-illumination, demands fine control, since light that is too bright or too dim would betray the very outline it is meant to hide.

Studying these behaviours is extraordinarily difficult. Bringing deep-sea creatures to the surface usually kills them, and bright research lights drive them away or overwhelm their delicate eyes long before they can be observed behaving naturally. Much of what is now known has come from remotely operated vehicles fitted with dim red lamps, which allow cameras to watch animals that believe themselves to be in total darkness. Newer instruments take a quieter approach still, drifting on the current and recording flashes in the surrounding water without any artificial light at all, so that nothing in the scene is disturbed by the act of watching it. Even so, researchers suspect that a great deal remains hidden. Each expedition into the deep tends to record signals that have never been catalogued, a reminder that the most widespread language on Earth is one that science has only begun to read.`,
        questions: [
          {
            id: 'rd-005-p1-q1',
            type: 'tfng',
            prompt:
              'According to the passage, most animals in the open deep sea are able to produce their own light.',
            answer: 'true',
            explanation:
              'The first paragraph states that "the majority of animals living in the open deep sea produce their own glow." This directly supports the statement, so it is True.',
          },
          {
            id: 'rd-005-p1-q2',
            type: 'tfng',
            prompt: 'Bioluminescence produces a large amount of heat as well as light.',
            answer: 'false',
            explanation:
              'The second paragraph says the energy released "emerges almost entirely as light rather than warmth" and that the glow is called "cold light". The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-005-p1-q3',
            type: 'tfng',
            prompt:
              'Blue light was the first colour of bioluminescence to be discovered by scientists.',
            answer: 'not-given',
            explanation:
              'The passage explains that most bioluminescent light is blue because that colour "travels furthest through seawater," but it never discusses which colour was discovered first. There is no information on the history of discovery, so the answer is Not Given.',
          },
          {
            id: 'rd-005-p1-q4',
            type: 'tfng',
            prompt:
              'A few deep-sea fishes can produce a colour of light that other animals around them are unable to see.',
            answer: 'true',
            explanation:
              'The second paragraph notes that "a handful of unusual fishes have evolved to produce and detect red light, which their neighbours cannot see at all." This matches the statement, so it is True.',
          },
          {
            id: 'rd-005-p1-q5',
            type: 'mcq',
            prompt:
              'Why does the passage describe the dark ocean as containing one of the most common forms of communication on the planet?',
            options: [
              'Because deep-sea animals communicate more often than animals on land',
              'Because the dark ocean is by far the largest habitat on Earth',
              'Because light signals travel faster in water than in air',
              'Because every deep-sea species uses an identical pattern of flashes',
            ],
            correctIndex: 1,
            explanation:
              'The first paragraph states that bioluminescence is "one of the most common forms of communication on the planet, simply because the dark ocean is by far the largest habitat on Earth." Option B gives exactly this reason.',
          },
          {
            id: 'rd-005-p1-q6',
            type: 'mcq',
            prompt: 'How does an anglerfish use its light, according to the passage?',
            options: [
              'It signals its identity to attract a mate.',
              'It releases a glowing cloud to escape predators.',
              'It dangles a glowing tip to lure prey towards its mouth.',
              'It matches the light from the surface to hide its outline.',
            ],
            correctIndex: 2,
            explanation:
              'The third paragraph says the anglerfish "dangles a glowing tip in front of its mouth, drawing curious prey close enough to be seized." Option C describes this; the other options refer to different animals or strategies.',
          },
          {
            id: 'rd-005-p1-q7',
            type: 'mcq',
            prompt:
              'What problem does counter-illumination solve for an animal in the twilight zone?',
            options: [
              'Its body is visible as a dark silhouette to predators looking up from below.',
              'Its eyes are too weak to detect approaching predators.',
              'Its own light attracts prey that would otherwise stay away.',
              'Its skin reflects too much of the light coming from the surface.',
            ],
            correctIndex: 0,
            explanation:
              'The fourth paragraph explains that an animal "is visible from below as a dark shape against the faintly lit surface," and counter-illumination erases "this telltale silhouette." Option A matches the problem being solved.',
          },
          {
            id: 'rd-005-p1-q8',
            type: 'mcq',
            prompt:
              'According to the passage, why is it so hard to study deep-sea bioluminescence?',
            options: [
              'The animals are too small to be filmed by any camera.',
              'Bringing the animals up usually kills them and bright lights disturb them.',
              'Remotely operated vehicles cannot descend deep enough to reach them.',
              'The signals they produce are too faint for instruments to detect.',
            ],
            correctIndex: 1,
            explanation:
              'The final paragraph states that "bringing deep-sea creatures to the surface usually kills them, and bright research lights drive them away or overwhelm their delicate eyes." Option B captures both difficulties.',
          },
          {
            id: 'rd-005-p1-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE WORD from the passage: In most species a molecule called luciferin reacts with _______ to release energy as light.',
            acceptableAnswers: ['oxygen'],
            explanation:
              'The second paragraph states that "luciferin reacts with oxygen, assisted by an enzyme." The missing word is "oxygen".',
          },
          {
            id: 'rd-005-p1-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE WORD from the passage: Because so little energy is lost as heat, biologists describe the glow as cold _______.',
            acceptableAnswers: ['light'],
            explanation:
              'The second paragraph says "biologists describe the glow as \'cold light\'." The required word is "light".',
          },
          {
            id: 'rd-005-p1-q11',
            type: 'gap',
            prompt:
              'Complete the summary with ONE WORD from the passage: When startled, some squid and shrimp eject a bright _______ into the water and escape while the predator is dazzled.',
            acceptableAnswers: ['cloud'],
            explanation:
              'The third paragraph describes how certain squid and shrimp "eject a bright cloud into the water" as a defence. The missing word is "cloud".',
          },
          {
            id: 'rd-005-p1-q12',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE WORD from the passage: The strategy of matching the light from above to hide an animal’s outline is known as _______.',
            acceptableAnswers: ['counter-illumination', 'counterillumination'],
            explanation:
              'The fourth paragraph names this strategy "counter-illumination." The hyphenated form is expected; the unhyphenated spelling is also accepted.',
          },
          {
            id: 'rd-005-p1-q13',
            type: 'gap',
            prompt:
              'Complete the sentence with TWO WORDS from the passage: Much modern knowledge has come from remotely operated vehicles fitted with dim _______ that let cameras film undisturbed animals.',
            acceptableAnswers: ['red lamps', 'red lights'],
            explanation:
              'The final paragraph states this knowledge came "from remotely operated vehicles fitted with dim red lamps." The two-word answer is "red lamps"; the passage also refers to "research lights," so "red lights" is accepted as equivalent.',
          },
        ],
      },
      {
        id: 'rd-academic-005-p2',
        title: 'Banking the Harvest: The Global Effort to Save Crop Diversity',
        body: `For most of human history, farmers were also custodians of diversity. Each community saved seed from its own fields, selecting the plants that survived local pests, droughts and soils, and over thousands of years this produced an immense variety of crops. A single staple such as rice or wheat existed not as one plant but as tens of thousands of distinct local varieties, each subtly adapted to the conditions of one valley or hillside. This vast living library was rarely valued for its own sake, because it seemed inexhaustible.

During the twentieth century, however, much of it disappeared with startling speed. As high-yielding modern varieties spread across the world, farmers abandoned their traditional seeds in favour of a handful of commercial types that promised larger harvests. The gain in productivity was real, but it came at a hidden cost: the genetic diversity that had taken millennia to accumulate was being lost within a few decades. By some estimates, the great majority of the crop varieties grown a century ago are no longer cultivated anywhere.

The danger in this narrowing is not obvious in a good year. A field of uniform, high-yielding plants is highly productive precisely because every plant is so similar. But that very uniformity is also a weakness. If a new disease or a shift in climate strikes such a crop, there may be no resistant individuals among millions to survive and carry the harvest, because the variation that once provided a natural defence has been bred away. The traditional varieties that have been discarded often contain exactly the resistance genes that breeders would need to confront a future threat - genes that cannot be invented and, once lost, cannot be recovered. History supplies a warning. More than one famine has followed when a population leaned too heavily on a single, genetically narrow crop and a disease arrived against which that crop had no defence. The lesson drawn by agricultural scientists is blunt: diversity is not a luxury but a form of insurance, and the premium is paid by keeping varieties alive even when no one happens to need them.

The response has been the creation of seed banks: secure facilities in which seeds from thousands of varieties are dried, sealed and stored at low temperatures, where they can remain alive for decades or even centuries. There are now well over a thousand such collections around the world, ranging from small national stores to vast international institutions. Their purpose is not to lock seeds away permanently but to keep them available, so that a breeder facing a new pest, or a farmer recovering from a disaster, can draw on genetic material that would otherwise have vanished. Because no single store is entirely safe from accident, war or simple equipment failure, duplicates of the most important collections are deliberately kept in more than one location.

The most famous of these is the global seed vault built deep inside a mountain on a remote Arctic island, where the surrounding permafrost keeps the chambers naturally cold even if the power should fail. The vault does not run its own breeding programme and holds no seeds of its own; instead it stores backup copies sent by other seed banks, which retain ownership of their deposits and may withdraw them whenever they wish. It functions, in effect, as a safety net for the world's other collections. The principle was tested when the seed bank serving Syria was damaged during conflict: researchers were able to request the duplicate samples they had earlier deposited in the Arctic, regrow them elsewhere, and replace the destroyed originals - the first withdrawal the vault had ever been asked to make.

Seed banks are not, however, a complete solution, and their keepers are the first to say so. Seeds do not live forever even when frozen, and every variety must eventually be grown out, allowed to set fresh seed and returned to storage, a slow and costly task that few collections can afford to do as often as they should. A seed in a freezer is also a plant frozen in time: it no longer evolves alongside the pests and climate it will one day face. For these reasons many specialists argue that storage must be paired with conservation in farmers' fields, where varieties continue to adapt. The safest future for the world's crops, they suggest, lies not in choosing between the freezer and the field, but in keeping both.`,
        questions: [
          {
            id: 'rd-005-p2-q1',
            type: 'tfng',
            prompt:
              'In the past, farmers selected and saved seeds from plants that did well in their local conditions.',
            answer: 'true',
            explanation:
              'The first paragraph states that each community "saved seed from its own fields, selecting the plants that survived local pests, droughts and soils." This supports the statement, so it is True.',
          },
          {
            id: 'rd-005-p2-q2',
            type: 'tfng',
            prompt:
              'The spread of modern high-yielding varieties failed to increase harvest sizes.',
            answer: 'false',
            explanation:
              'The second paragraph says the modern varieties "promised larger harvests" and that "the gain in productivity was real." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-005-p2-q3',
            type: 'tfng',
            prompt:
              'A field in which every plant is genetically very similar is vulnerable if a new disease appears.',
            answer: 'true',
            explanation:
              'The third paragraph explains that if a new disease strikes a uniform crop "there may be no resistant individuals among millions to survive." This matches the statement, so it is True.',
          },
          {
            id: 'rd-005-p2-q4',
            type: 'tfng',
            prompt:
              'The global seed vault on the Arctic island runs its own plant-breeding programme.',
            answer: 'false',
            explanation:
              'The fifth paragraph states that the vault "does not run its own breeding programme and holds no seeds of its own." The statement contradicts the text, so it is False.',
          },
          {
            id: 'rd-005-p2-q5',
            type: 'tfng',
            prompt:
              'The Arctic seed vault is the largest seed bank in the world by number of stored varieties.',
            answer: 'not-given',
            explanation:
              'The passage describes the vault as the "most famous" collection and as a backup store, but it never compares its size with that of other seed banks. No information is given about which is largest, so the answer is Not Given.',
          },
          {
            id: 'rd-005-p2-q6',
            type: 'mcq',
            prompt:
              'Why does the passage say the loss of genetic diversity is "not obvious in a good year"?',
            options: [
              'Because seed banks quickly replace any varieties that are lost',
              'Because uniform, high-yielding crops perform very well when no threat strikes',
              'Because farmers continue to save their traditional seeds in secret',
              'Because modern varieties evolve new resistance genes each season',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph notes that "a field of uniform, high-yielding plants is highly productive precisely because every plant is so similar," so the weakness only shows when a threat appears. Option B captures this.',
          },
          {
            id: 'rd-005-p2-q7',
            type: 'mcq',
            prompt: 'According to the passage, what is the main purpose of a seed bank?',
            options: [
              'To lock valuable seeds away so that no one can use them',
              'To replace farmers’ fields as the only source of new crops',
              'To keep seeds available for breeders and farmers who need them in future',
              'To sell rare seeds to commercial seed companies',
            ],
            correctIndex: 2,
            explanation:
              'The fourth paragraph states that the purpose "is not to lock seeds away permanently but to keep them available, so that a breeder... or a farmer... can draw on genetic material." Option C matches this purpose.',
          },
          {
            id: 'rd-005-p2-q8',
            type: 'mcq',
            prompt: 'What does the example of the Syrian seed bank illustrate?',
            options: [
              'That the Arctic vault can replace seeds destroyed in a depositor’s own collection',
              'That seeds stored in the Arctic vault are owned permanently by the vault',
              'That conflict has no effect on the work of seed banks',
              'That the vault frequently lends out seeds for ordinary breeding work',
            ],
            correctIndex: 0,
            explanation:
              'The fifth paragraph describes how Syrian researchers requested their duplicate samples from the Arctic, regrew them, and "replace[d] the destroyed originals," showing the vault works as a backup. Option A is correct.',
          },
          {
            id: 'rd-005-p2-q9',
            type: 'mcq',
            prompt:
              'Why do many specialists argue that seed banks alone are not a complete solution?',
            options: [
              'Because seeds in storage cost nothing to maintain',
              'Because frozen seeds continue to evolve too quickly',
              'Because a stored seed stops adapting to the pests and climate it will later meet',
              'Because there are far too few seed banks in existence',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph states that "a seed in a freezer is also a plant frozen in time: it no longer evolves alongside the pests and climate it will one day face." Option C reflects this argument.',
          },
          {
            id: 'rd-005-p2-q10',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE WORD from the passage: In seed banks the seeds are dried, sealed and stored at low _______ so that they can remain alive for decades.',
            acceptableAnswers: ['temperatures', 'temperature'],
            explanation:
              'The fourth paragraph says seeds are "stored at low temperatures, where they can remain alive for decades." The required word is "temperatures" (singular "temperature" accepted).',
          },
          {
            id: 'rd-005-p2-q11',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE WORD from the passage: Because no single store is completely safe, _______ of the most important collections are kept in more than one location.',
            acceptableAnswers: ['duplicates', 'copies'],
            explanation:
              'The fourth paragraph states that "duplicates of the most important collections are deliberately kept in more than one location." The expected answer is "duplicates"; the passage also uses "backup copies," so "copies" is accepted.',
          },
          {
            id: 'rd-005-p2-q12',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE WORD from the passage: The Arctic vault stays cold even without power because the surrounding _______ keeps the chambers naturally cool.',
            acceptableAnswers: ['permafrost'],
            explanation:
              'The fifth paragraph states that "the surrounding permafrost keeps the chambers naturally cold even if the power should fail." The missing word is "permafrost".',
          },
          {
            id: 'rd-005-p2-q13',
            type: 'gap',
            prompt:
              'Complete the summary with ONE WORD from the passage: Many specialists believe storage should be paired with conservation in farmers’ _______, where crop varieties continue to adapt.',
            acceptableAnswers: ['fields'],
            explanation:
              'The final paragraph argues that "storage must be paired with conservation in farmers\' fields, where varieties continue to adapt." The required word is "fields".',
          },
        ],
      },
      {
        id: 'rd-academic-005-p3',
        title: 'Designing the Cooler City',
        body: `As summers grow hotter, the world's cities are discovering that they suffer the heat more sharply than the countryside around them. The cause is well understood. Dense materials such as brick, concrete and asphalt absorb the sun's energy through the day and release it slowly after dark, so that a city can remain stubbornly warm long after rural land has cooled. Tall buildings trap this heat in narrow streets, while waste heat from traffic, factories and air conditioners adds still more. The result, recorded in cities across the globe, is that an urban centre may be several degrees warmer than its surroundings - a difference known as the urban heat island, and one that turns an uncomfortable summer into a dangerous one for the elderly, the ill and the poor.

Among the simplest responses is to change the colour of the city. Dark surfaces absorb far more sunlight than pale ones, so painting roofs and paving in light, reflective shades can lower their temperature considerably. Some cities have begun coating flat roofs in reflective white, and experiments with pale road coatings have shown measurable drops in street-level heat. The appeal of such measures is that they are cheap and can be applied to buildings that already exist, without the expense and disruption of rebuilding. Their limitation is that a reflective surface helps mainly the space directly beneath or beside it, and bright pavements can throw uncomfortable glare back at pedestrians.

A second and older strategy is to bring back vegetation. Trees cool a street in two distinct ways: their canopies cast shade that keeps the ground beneath from heating up, and the water they release through their leaves cools the surrounding air as it evaporates, much as sweat cools the skin. A mature street tree can make a genuine difference to the temperature of the pavement below it, and a well-shaded park can form an island of cool within a hot city. Planting on a large scale is slow, however, for trees take years to grow, and in a drought the very greenery intended to provide relief may struggle to survive without irrigation the city can ill afford.

Water itself offers a third approach. Fountains, ponds and canals cool the air as their water evaporates, and some cities are reopening rivers that earlier generations had buried beneath roads. A few have gone further, installing fine mist sprays in public squares that lower the temperature of a crowd waiting in the sun, though these devices are useful only over small areas and are wasteful where water is scarce. Architects, meanwhile, are returning to ideas that long predate air conditioning. Buildings in many hot regions were traditionally designed with thick walls, small windows and shaded courtyards that stayed cool without any machinery at all, and modern designers are studying these older forms in search of methods that do not depend on a constant supply of electricity. Wind towers that funnel a breeze down into a building, and walls thick enough to delay the day's heat until the cool of night, are being adapted for contemporary use. The attraction is obvious: conventional air conditioning cools the inside of a building only by pumping its heat into the street outside, worsening the very heat island it is meant to escape, and consuming great quantities of power as it does so.

None of these measures works in isolation, and planners increasingly speak of combining them. A single street might be paved in a lighter colour, lined with trees, and fitted with a fountain, each element compensating for the weaknesses of the others. Yet a difficulty common to all of them is that the benefits are unevenly shared. Wealthier districts tend to have more parks, more trees and more space for water than poorer ones, which are often the hottest parts of a city and the least able to adapt. The pattern is rarely accidental; decades of decisions about where to plant, where to build and where to spend have left some neighbourhoods green and shaded while others bake under bare concrete. For this reason a growing number of experts argue that cooling the city is not only a question of engineering but also one of fairness, and that the districts most exposed to the heat deserve the first, not the last, of whatever relief a city can provide.`,
        questions: [
          {
            id: 'rd-005-p3-q1',
            type: 'tfng',
            prompt:
              'According to the passage, cities tend to stay warm after dark for longer than the surrounding countryside.',
            answer: 'true',
            explanation:
              'The first paragraph states that dense materials "release [heat] slowly after dark, so that a city can remain stubbornly warm long after rural land has cooled." This supports the statement, so it is True.',
          },
          {
            id: 'rd-005-p3-q2',
            type: 'tfng',
            prompt: 'Pale, reflective surfaces absorb more sunlight than dark surfaces.',
            answer: 'false',
            explanation:
              'The second paragraph says "dark surfaces absorb far more sunlight than pale ones." The statement reverses this, so it is False.',
          },
          {
            id: 'rd-005-p3-q3',
            type: 'tfng',
            prompt:
              'Coating roofs in reflective white is more expensive than rebuilding them entirely.',
            answer: 'false',
            explanation:
              'The second paragraph describes reflective coatings as "cheap" and notes they avoid "the expense and disruption of rebuilding." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-005-p3-q4',
            type: 'tfng',
            prompt:
              'Most cities now require all new buildings to use traditional cooling designs instead of air conditioning.',
            answer: 'not-given',
            explanation:
              'The passage says modern designers are "studying" older building forms, but it makes no claim about cities requiring such designs in new buildings. There is no information about any such requirement, so the answer is Not Given.',
          },
          {
            id: 'rd-005-p3-q5',
            type: 'tfng',
            prompt: 'Trees can have difficulty surviving during a drought without watering.',
            answer: 'true',
            explanation:
              'The third paragraph states that "in a drought the very greenery intended to provide relief may struggle to survive without irrigation." This matches the statement, so it is True.',
          },
          {
            id: 'rd-005-p3-q6',
            type: 'mcq',
            prompt: 'What is the "urban heat island"?',
            options: [
              'A park kept deliberately cool in the centre of a city',
              'A district where air conditioning has been banned',
              'The tendency of a city to be several degrees warmer than its surroundings',
              'A region of the countryside that warms faster than nearby cities',
            ],
            correctIndex: 2,
            explanation:
              'The first paragraph defines the urban heat island as the situation where "an urban centre may be several degrees warmer than its surroundings." Option C matches this definition.',
          },
          {
            id: 'rd-005-p3-q7',
            type: 'mcq',
            prompt: 'According to the passage, what is one limitation of reflective surfaces?',
            options: [
              'They only help the space directly beneath or beside them.',
              'They are too costly to apply to existing buildings.',
              'They make the air more humid for pedestrians.',
              'They lose their colour within a single summer.',
            ],
            correctIndex: 0,
            explanation:
              'The second paragraph states that "a reflective surface helps mainly the space directly beneath or beside it," and can also cause glare. Option A names the limitation described.',
          },
          {
            id: 'rd-005-p3-q8',
            type: 'mcq',
            prompt: 'In what two ways does the passage say trees cool a street?',
            options: [
              'By absorbing waste heat from traffic and by blocking the wind',
              'By casting shade and by releasing water that cools the air as it evaporates',
              'By reflecting sunlight and by storing rainwater in their roots',
              'By lowering humidity and by providing shelter from rain',
            ],
            correctIndex: 1,
            explanation:
              'The third paragraph explains that trees cool a street because "their canopies cast shade" and "the water they release through their leaves cools the surrounding air as it evaporates." Option B states both ways.',
          },
          {
            id: 'rd-005-p3-q9',
            type: 'mcq',
            prompt:
              'Why does the passage say conventional air conditioning can make the heat island worse?',
            options: [
              'Because it requires buildings to have larger windows',
              'Because it cools buildings by pumping their heat out into the street',
              'Because it prevents trees from being planted nearby',
              'Because it relies on water that the city cannot spare',
            ],
            correctIndex: 1,
            explanation:
              'The fourth paragraph states that air conditioning "cools the inside of a building only by pumping its heat into the street outside, worsening the very heat island it is meant to escape." Option B captures this.',
          },
          {
            id: 'rd-005-p3-q10',
            type: 'mcq',
            prompt:
              'What broader argument do a growing number of experts make about cooling cities?',
            options: [
              'That engineering alone can solve the problem without further cost',
              'That wealthy districts should be cooled before poorer ones',
              'That cooling is a matter of fairness, and the hottest districts deserve relief first',
              'That cities should abandon attempts to cool their streets',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph argues that cooling "is not only a question of engineering but also one of fairness, and that the districts most exposed to the heat deserve the first, not the last," of any relief. Option C matches this argument.',
          },
          {
            id: 'rd-005-p3-q11',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE WORD from the passage: Materials such as brick, concrete and _______ absorb the sun’s energy by day and release it slowly after dark.',
            acceptableAnswers: ['asphalt'],
            explanation:
              'The first paragraph lists "brick, concrete and asphalt" as the dense materials that absorb and release heat. The missing word is "asphalt".',
          },
          {
            id: 'rd-005-p3-q12',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE WORD from the passage: A well-shaded park can form an island of _______ within a hot city.',
            acceptableAnswers: ['cool'],
            explanation:
              'The third paragraph states that "a well-shaded park can form an island of cool within a hot city." The required word is "cool".',
          },
          {
            id: 'rd-005-p3-q13',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE WORD from the passage: Some cities are reopening _______ that earlier generations had buried beneath roads, because evaporating water cools the air.',
            acceptableAnswers: ['rivers'],
            explanation:
              'The fourth paragraph says some cities "are reopening rivers that earlier generations had buried beneath roads." The missing word is "rivers".',
          },
          {
            id: 'rd-005-p3-q14',
            type: 'gap',
            prompt:
              'Complete the summary with TWO WORDS from the passage: Traditional buildings in hot regions kept cool using thick walls, small windows and shaded _______.',
            acceptableAnswers: ['courtyards', 'shaded courtyards'],
            explanation:
              'The fourth paragraph describes traditional buildings "with thick walls, small windows and shaded courtyards that stayed cool without any machinery." The key word is "courtyards"; "shaded courtyards" is accepted as the fuller phrase.',
          },
        ],
      },
    ],
  },
]
