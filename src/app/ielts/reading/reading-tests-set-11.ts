// ─── IELTS Academic Reading — practice item bank (Set 11) ──────────────────
// ORIGINAL content written for The English Hub. These passages and questions are
// invented purely to practise the Academic Reading question formats. They are
// NOT reproductions of any official IELTS past paper, and no official
// affiliation is implied. Academic track. Topic domains: the science of glass /
// the comeback of the wolf in European ecosystems / why companies use colour in
// branding (colour psychology).
//
// This test SHOWCASES the new Matching question type. It contains three matching
// questions: Matching Headings (Passage 1), Matching Information / which-paragraph
// (Passage 2), and Matching Features — statements to researchers (Passage 3),
// alongside the usual mix of True/False/Not Given, multiple choice and
// sentence/summary completion.
//
// One complete, carefully-checked test: 3 passages, 40 marks (each matching item
// counts as one mark). Every answer is verifiable from the passage text and is
// justified in the explanation.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingTest } from '@/lib/ielts/types'

export const READING_SET_11: ReadingTest[] = [
  {
    id: 'rd-academic-011',
    title: 'Academic Reading — Practice Test 11',
    track: 'academic',
    estimatedMinutes: 60,
    passages: [
      // ───────────────────────────── PASSAGE 1 ─────────────────────────────
      {
        id: 'rd-academic-011-p1',
        title: 'The Science of Glass',
        body: `Glass is so ordinary a material that we rarely pause to consider how strange it is. We pour drinks from it, look through it and read these words on screens protected by it, yet glass belongs to none of the familiar states of matter in the way we might expect. It is not a liquid, despite a persistent myth that the thick bases of old cathedral windows prove the panes have slowly flowed downward over centuries. That story is false; the panes were simply made unevenly and installed thick edge down. Nor is glass an ordinary solid, for unlike a crystal of salt or quartz its atoms are not arranged in a neat, repeating lattice. Instead they are frozen in the disordered jumble of a liquid that has been cooled too quickly to organise itself. Scientists describe glass as an amorphous solid, a substance caught, in effect, between two worlds.

The raw material of most everyday glass is among the cheapest on Earth: ordinary sand, which is rich in silica. Silica alone, however, melts only at around 1,700 degrees Celsius, a temperature that was impractical for early furnaces and remains costly today. The solution, discovered thousands of years ago and still used, is to add a second ingredient known as a flux, usually soda derived from plant ash or mined minerals. The flux lowers the melting point dramatically, to a far more manageable figure, allowing the mixture to be worked with the fuels available to ancient craftspeople. A third component, lime, is then added to solve a new problem the flux creates, for soda-rich glass alone would slowly dissolve in water. The lime stabilises the finished material so that a drinking glass does not gradually disappear when it is washed.

For most of its history glass was a luxury, shaped slowly by hand. The decisive change came at the end of the first century BC, when craftspeople along the eastern Mediterranean discovered that a blob of molten glass gathered on the end of a hollow iron tube could be inflated with a puff of breath. Glassblowing made it possible to produce hollow vessels quickly and in quantity, and within a few generations glass cups and bottles, once reserved for the wealthy, were appearing on ordinary tables across the Roman world. The technique spread along trade routes and remained the principal method of making vessels for nearly two thousand years.

Producing a flat, clear sheet for a window proved far harder than blowing a bottle. For centuries window glass was made by spinning a disc or blowing a cylinder that was then split and flattened, methods that left the surface faintly rippled and the view distorted. The problem was finally solved in the middle of the twentieth century by an English engineer who poured molten glass onto a bath of liquid tin. Because the two liquids do not mix and the molten glass spreads out and floats, it forms a sheet of even thickness with surfaces so smooth that no grinding or polishing is required. This float process, as it is known, now produces the overwhelming majority of the world's flat glass and is the reason a modern window offers an undistorted view at low cost.

Glass also possesses a quality that has reshaped modern life in a way its early makers could never have foreseen: under the right conditions it is astonishingly transparent to light, far more so than the window pane suggests. A thick window appears slightly green when viewed edge on because tiny impurities, chiefly iron, absorb a little of the light passing through. By purifying the silica until such impurities almost vanish, manufacturers can draw glass into hair-thin fibres along which a pulse of light will travel for kilometres while losing only a small fraction of its strength. These optical fibres are the threads from which the modern internet is woven, carrying vast quantities of data beneath the oceans as flashes of light.

The very feature that makes glass useful, however, also makes it dangerous. Its rigid, disordered structure cannot bend to absorb a sudden force, so when it fails it does not dent but shatters, often into sharp fragments. Engineers have devised ingenious answers. Toughened glass is cooled rapidly during manufacture so that its outer skin is squeezed into compression, locking the interior under tension; the result is several times stronger than ordinary glass and, when it does break, crumbles into small blunt cubes rather than jagged shards. Laminated glass, by contrast, sandwiches a thin layer of flexible plastic between two panes, so that a cracked windscreen holds together instead of collapsing into the driver's lap. Such refinements show how thoroughly a material thousands of years old continues to be reinvented.`,
        questions: [
          // ── Matching Headings (6 items, 8 options → 2 distractors) = 6 marks ──
          {
            id: 'rd-011-p1-q1',
            type: 'matching',
            variant: 'headings',
            prompt:
              'The passage has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Write the correct number (i–viii) for each paragraph.',
            options: [
              { key: 'i', label: 'Two liquids that refuse to mix' },
              { key: 'ii', label: 'A breath that made glass affordable' },
              { key: 'iii', label: 'Neither liquid nor ordinary solid' },
              { key: 'iv', label: 'The long search for a flawless flat sheet' },
              { key: 'v', label: 'Why coloured glass is preferred for windows' },
              { key: 'vi', label: 'A recipe of sand and two helpers' },
              { key: 'vii', label: 'Carrying light, and the internet, through threads' },
              { key: 'viii', label: 'Strengthening a material that shatters' },
            ],
            items: [
              { id: 'p1-h-a', text: 'Paragraph A', answer: 'iii' },
              { id: 'p1-h-b', text: 'Paragraph B', answer: 'vi' },
              { id: 'p1-h-c', text: 'Paragraph C', answer: 'ii' },
              { id: 'p1-h-d', text: 'Paragraph D', answer: 'iv' },
              { id: 'p1-h-e', text: 'Paragraph E', answer: 'vii' },
              { id: 'p1-h-f', text: 'Paragraph F', answer: 'viii' },
            ],
            explanation:
              'A explains glass is "an amorphous solid... caught between two worlds", neither liquid nor crystal (iii). B gives the recipe — silica plus a flux and lime, two added ingredients (vi). C describes how glassblowing let cups and bottles "once reserved for the wealthy" reach ordinary tables (ii — affordability via breath). D recounts the centuries-long difficulty of making a flat, undistorted sheet, solved by the float process (iv). E covers purified glass drawn into optical fibres that carry the internet as light (vii). F explains toughened and laminated glass as answers to its tendency to shatter (viii). Heading i ("Two liquids that refuse to mix") is a distractor — the tin/glass detail belongs inside D, not as its theme; heading v ("Why coloured glass is preferred for windows") is a distractor that the passage never claims.',
          },
          {
            id: 'rd-011-p1-q2',
            type: 'tfng',
            prompt:
              'The thick bases of old cathedral windows prove that glass slowly flows downward over centuries.',
            answer: 'false',
            explanation:
              'Paragraph A calls this a "persistent myth" and states plainly: "That story is false; the panes were simply made unevenly and installed thick edge down." The statement therefore contradicts the passage and is False.',
          },
          {
            id: 'rd-011-p1-q3',
            type: 'tfng',
            prompt:
              'In glass, the atoms are arranged in a neat, repeating pattern like those in a crystal.',
            answer: 'false',
            explanation:
              'Paragraph A says that "unlike a crystal of salt or quartz its atoms are not arranged in a neat, repeating lattice" but are instead "frozen in the disordered jumble of a liquid." This is the opposite of the statement, so it is False.',
          },
          {
            id: 'rd-011-p1-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A second ingredient called a _______ is added to sand to lower its melting point.',
            acceptableAnswers: ['flux'],
            explanation:
              'Paragraph B states: "the solution... is to add a second ingredient known as a flux... The flux lowers the melting point dramatically." The required word is "flux".',
          },
          {
            id: 'rd-011-p1-q5',
            type: 'mcq',
            prompt: 'Why is lime added when making everyday glass?',
            options: [
              'It lowers the melting point of the silica still further.',
              'It stops the soda-rich glass from dissolving in water.',
              'It gives the finished glass a faint green colour.',
              'It makes the molten glass easier to blow into shapes.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph B explains that "soda-rich glass alone would slowly dissolve in water. The lime stabilises the finished material so that a drinking glass does not gradually disappear when it is washed." Option B captures this.',
          },
          {
            id: 'rd-011-p1-q6',
            type: 'mcq',
            prompt: 'According to the passage, what was the main advantage of glassblowing?',
            options: [
              'It produced glass that was completely free of impurities.',
              'It allowed flat window panes to be made without distortion.',
              'It made it possible to produce hollow vessels quickly and in quantity.',
              'It removed the need to heat the raw materials to a high temperature.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph C states that "Glassblowing made it possible to produce hollow vessels quickly and in quantity," after which cups and bottles reached ordinary tables. Option C is correct; the float process (B/D) and purity (E) are separate points.',
          },
          {
            id: 'rd-011-p1-q7',
            type: 'gap',
            prompt:
              'Complete the summary with ONE word from the passage: In the float process, molten glass is poured onto a bath of liquid _______, on which it spreads and floats to form a smooth, even sheet.',
            acceptableAnswers: ['tin'],
            explanation:
              'Paragraph D describes how the engineer "poured molten glass onto a bath of liquid tin" so that it "spreads out and floats" into an even sheet. The missing word is "tin".',
          },
          {
            id: 'rd-011-p1-q8',
            type: 'tfng',
            prompt: 'Toughened glass breaks into small blunt cubes rather than sharp shards.',
            answer: 'true',
            explanation:
              'Paragraph F says toughened glass, "when it does break, crumbles into small blunt cubes rather than jagged shards." This matches the statement, so it is True.',
          },
          {
            id: 'rd-011-p1-q9',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: A window appears slightly green when viewed edge on because of tiny impurities, chiefly _______, that absorb some of the light.',
            acceptableAnswers: ['iron'],
            explanation:
              'Paragraph E states a thick window "appears slightly green when viewed edge on because tiny impurities, chiefly iron, absorb a little of the light passing through." The required word is "iron".',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 2 ─────────────────────────────
      {
        id: 'rd-academic-011-p2',
        title: 'The Return of the Wolf',
        body: `A century ago the grey wolf had been driven to the margins of Europe. Centuries of hunting, poisoning and the steady clearing of forests for farmland had wiped the animal from most of the continent, and by the 1960s only scattered remnants survived in the remote mountains of the south and east. To most Europeans the wolf existed chiefly in folklore, a creature of fairy tales rather than of the living countryside, lurking in children's stories as a figure of menace to be feared and outwitted. Bounties had once been paid for its corpse, and in some districts the killing of the last local wolf was remembered with pride as a civic achievement. Few naturalists of the period imagined that within two generations it would be padding through landscapes from Spain to the outskirts of large cities.

The recovery was driven less by deliberate reintroduction than by a quiet transformation of the countryside itself. Across much of Europe, marginal farms in hills and uplands were abandoned during the second half of the twentieth century as people moved to towns and cities in search of steadier work. Fields that had been grazed for generations reverted to scrub and then to forest, and with the trees came deer, wild boar and other prey in growing numbers. The wolf, a highly mobile animal capable of travelling enormous distances in search of territory, simply followed this expanding larder; a single young animal seeking a mate may cross several countries in a matter of months, which helps explain how quickly empty ground was reclaimed. Legal protection mattered too: once the species was shielded by national laws and a Europe-wide directive, the relentless killing that had kept its numbers down was sharply reduced.

The clearest evidence of what wolves can do to a landscape comes not from Europe but from North America, where wolves were returned to Yellowstone National Park in the mid-1990s after an absence of seventy years. In their absence, elk had multiplied and grazed heavily along rivers and streams, stripping away the young willow and aspen on which other species depended. With wolves once more in the valleys, the elk could no longer linger safely in these exposed places. Browsing pressure eased, trees regrew, and the returning vegetation drew back beavers and songbirds. Scientists call such a chain of effects, spreading downward from a top predator through an entire web of life, a trophic cascade, and Yellowstone became its most celebrated illustration.

The Yellowstone story has been told so often that it is sometimes oversimplified, and several researchers have urged caution. They point out that the recovery of the willows was patchy rather than universal, and that other changes — wetter years, a falling elk population caused partly by human hunting outside the park, and the return of bears — were unfolding at the same time, making it difficult to credit the wolf alone. The lesson, these scientists argue, is not that wolves have no effect but that ecosystems are tangled webs in which no single cause acts in isolation. A predator can shift the balance without being the only force at work.

For the people who share the landscape with a returning predator, such academic debates can seem remote. To a shepherd who finds sheep killed in a mountain pasture, the wolf is not a symbol of ecological renewal but a direct threat to a livelihood, and resentment can run deep in regions where, within living memory, the animal was regarded as vermin to be destroyed. Conservation bodies have responded with schemes that compensate farmers for confirmed losses and that fund older, low-technology defences: high electric fences, and above all the large guardian dogs that for centuries protected flocks before the wolf was eliminated and the practice was forgotten. Raised among the sheep from birth, such dogs come to treat the flock as their own and place themselves between it and any approaching predator, a method so old that it had almost vanished from memory in the decades when there was nothing left to guard against. Where such measures are used consistently, losses fall, though they rarely disappear entirely.

The deepest obstacle to coexistence may therefore be social rather than biological. The wolf has shown that, given prey and a measure of legal protection, it can recolonise crowded, modern countries with remarkable speed; the harder question is whether the people living alongside it are willing to make room. The history of the wolf in Europe is, in this sense, less a story about an animal than a story about ourselves, and about the kind of wildness we are prepared to tolerate close to home.`,
        questions: [
          // ── Matching Information / which-paragraph (5 items) = 5 marks ──
          {
            id: 'rd-011-p2-q1',
            type: 'matching',
            variant: 'information',
            prompt:
              'The passage has six paragraphs, A–F. Which paragraph contains the following information? Write the correct letter, A–F. (You may use any letter more than once, but each statement here is found in only one paragraph.)',
            options: [
              { key: 'A', label: 'Paragraph A' },
              { key: 'B', label: 'Paragraph B' },
              { key: 'C', label: 'Paragraph C' },
              { key: 'D', label: 'Paragraph D' },
              { key: 'E', label: 'Paragraph E' },
              { key: 'F', label: 'Paragraph F' },
            ],
            items: [
              {
                id: 'p2-i-1',
                text: 'a definition of the term used for a chain of effects spreading from a top predator',
                answer: 'C',
              },
              {
                id: 'p2-i-2',
                text: 'a reference to traditional animals once used to protect flocks from wolves',
                answer: 'E',
              },
              {
                id: 'p2-i-3',
                text: 'the suggestion that the main barrier to living with wolves is human rather than ecological',
                answer: 'F',
              },
              {
                id: 'p2-i-4',
                text: 'an explanation of how the abandonment of upland farms helped the wolf',
                answer: 'B',
              },
              {
                id: 'p2-i-5',
                text: 'the claim that a hundred years ago most Europeans associated the wolf with fairy tales',
                answer: 'A',
              },
            ],
            explanation:
              'Item 1 → C, which names and defines a "trophic cascade... spreading downward from a top predator through an entire web of life." Item 2 → E, which mentions "the large guardian dogs that for centuries protected flocks." Item 3 → F: "The deepest obstacle to coexistence may therefore be social rather than biological." Item 4 → B, which explains that abandoned marginal farms reverted to forest and prey, which the wolf followed. Item 5 → A: "To most Europeans the wolf existed chiefly in folklore, a creature of fairy tales."',
          },
          {
            id: 'rd-011-p2-q2',
            type: 'tfng',
            prompt: 'By the 1960s wolves had completely disappeared from every part of Europe.',
            answer: 'false',
            explanation:
              'Paragraph A says that by the 1960s "only scattered remnants survived in the remote mountains of the south and east." Because some wolves remained, the claim that they had completely disappeared is False.',
          },
          {
            id: 'rd-011-p2-q3',
            type: 'tfng',
            prompt:
              'The wolf’s return to Europe was mainly the result of animals being deliberately released into the wild.',
            answer: 'false',
            explanation:
              'Paragraph B states the recovery "was driven less by deliberate reintroduction than by a quiet transformation of the countryside itself." The statement reverses this, so it is False.',
          },
          {
            id: 'rd-011-p2-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: As abandoned fields reverted to forest, numbers of deer, wild _______ and other prey increased, and the wolf followed them.',
            acceptableAnswers: ['boar'],
            explanation:
              'Paragraph B states that "with the trees came deer, wild boar and other prey in growing numbers." The missing word is "boar".',
          },
          {
            id: 'rd-011-p2-q5',
            type: 'mcq',
            prompt:
              'According to the passage, what happened in Yellowstone after wolves were returned in the mid-1990s?',
            options: [
              'The elk population grew larger than it had been before.',
              'Elk avoided exposed riverbanks, letting willow and aspen regrow.',
              'Beavers and songbirds disappeared from the valleys.',
              'The willows recovered evenly across the entire park.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph C says that with wolves present, "the elk could no longer linger safely in these exposed places. Browsing pressure eased, trees regrew, and the returning vegetation drew back beavers and songbirds." Option B matches; the patchiness of recovery is raised separately in D, which makes option D wrong.',
          },
          {
            id: 'rd-011-p2-q6',
            type: 'gap',
            prompt:
              'Complete the summary with TWO words from the passage: Scientists call a chain of effects spreading downward from a top predator through a web of life a _______.',
            acceptableAnswers: ['trophic cascade'],
            explanation:
              'Paragraph C states that scientists "call such a chain of effects, spreading downward from a top predator through an entire web of life, a trophic cascade." The required answer is "trophic cascade".',
          },
          {
            id: 'rd-011-p2-q7',
            type: 'mcq',
            prompt: 'Why do some researchers urge caution about the Yellowstone story?',
            options: [
              'They believe wolves had no measurable effect on the park at all.',
              'They think the elk were never a problem for the vegetation.',
              'They note that other changes were happening at the same time as the wolves’ return.',
              'They argue that the wolves were reintroduced too late to matter.',
            ],
            correctIndex: 2,
            explanation:
              'Paragraph D says the willow recovery "was patchy" and that "other changes — wetter years, a falling elk population... and the return of bears — were unfolding at the same time, making it difficult to credit the wolf alone." Option C captures this. The same paragraph stresses the lesson "is not that wolves have no effect," which rules out option A.',
          },
          {
            id: 'rd-011-p2-q8',
            type: 'tfng',
            prompt:
              'The passage states that, in regions where wolves have returned, schemes exist to compensate farmers for confirmed livestock losses.',
            answer: 'true',
            explanation:
              'Paragraph E states that "Conservation bodies have responded with schemes that compensate farmers for confirmed losses." This supports the statement, so it is True.',
          },
          {
            id: 'rd-011-p2-q9',
            type: 'tfng',
            prompt:
              'Where protective measures are used consistently, livestock losses are eliminated entirely.',
            answer: 'false',
            explanation:
              'Paragraph E says that where such measures are used consistently, "losses fall, though they rarely disappear entirely." Because losses are not eliminated, the statement is False.',
          },
          {
            id: 'rd-011-p2-q10',
            type: 'mcq',
            prompt: 'What does the writer suggest in the final paragraph?',
            options: [
              'Wolves are unlikely ever to survive in densely populated countries.',
              'The chief challenge now is whether people will tolerate wolves nearby.',
              'Legal protection has proved useless in helping wolves recover.',
              'Wolves should be removed from areas close to towns and cities.',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph F argues the wolf "can recolonise crowded, modern countries with remarkable speed; the harder question is whether the people living alongside it are willing to make room." Option B reflects this central point.',
          },
        ],
      },
      // ───────────────────────────── PASSAGE 3 ─────────────────────────────
      {
        id: 'rd-academic-011-p3',
        title: 'The Colour of Persuasion',
        body: `Walk down any shopping street and you are surrounded by deliberate choices about colour. The red of a sale sign, the green of an organic label, the particular blue chosen by a bank for its logo: none of these is an accident. Companies spend large sums settling on the exact shades that represent them, in the belief that colour shapes how customers feel about a product long before they have read a single word. The study of how this works, often called colour psychology, sits at the busy and sometimes uneasy meeting point of marketing, design and experimental science.

The intuitive idea behind the field is that particular colours carry fixed meanings. Red, on this view, is energetic and urgent and therefore good for clearance sales; blue is calm and trustworthy and so favoured by banks and technology firms; green signals nature and health. There is something to this, but the simple version is misleading, and researchers who study consumer behaviour have repeatedly warned against it. The marketing scholar Lauren Hwang argues that the effect of a colour depends overwhelmingly on its context and on what the product is. A bright yellow that feels cheerful and good value on a packet of sweets, she observes, would inspire little confidence on a luxury watch, where the same colour might suggest something cheap. Meaning, in her account, is not carried by the colour itself but assembled by the viewer from the situation around it.

If individual colours are slippery, the relationship between them is more reliable. The designer Tomas Rele, who advises companies on their visual identity, maintains that what customers actually respond to is contrast and appropriateness rather than any single hue. A logo succeeds, in his view, when its colour stands out clearly from those of its rivals on a crowded shelf and matches the personality of the brand, whatever that personality happens to be. He is fond of pointing out that there is no objectively correct colour for a product; a soft drink, a sports car and a children's toy could each be sold successfully in almost any colour, provided the choice is distinctive and consistent. Consistency, he insists, matters more than the particular shade, because a colour repeated across every advertisement, package and shopfront gradually becomes a shortcut that lets a customer recognise the brand in an instant.

A quite different line of research looks beyond culture to biology. The vision scientist Petra Calloway studies the eye itself, and notes that human beings are not equally sensitive to all colours. The eye is drawn most readily to long-wavelength colours such as red and orange, which is one practical reason warning signs and clearance labels so often use them; they are simply harder to ignore. Yet Calloway is careful about the conclusions she draws. Such tendencies, she stresses, are weak and easily overridden by learning and habit, and they say nothing about whether a colour will be liked. Biology may help explain why a red sticker catches the eye across a supermarket, she suggests, but it cannot explain why one shade of red is chosen for a sports brand and quite another for a brand of jam.

The role of culture complicates the picture further. The associations a colour carries are learned, and they vary from one society to another, a point on which Hwang and Rele agree even as they differ on much else. White, taken in much of Europe to signify purity and used by brands to suggest simplicity and cleanliness, is in several Asian cultures the colour of mourning, so that a product packaged to look pure in one market may strike consumers in another as funereal. Companies that sell across borders have learned, sometimes expensively, that a palette which works at home may carry quite the wrong message abroad, and that there is no universal language of colour waiting to be discovered.

What, then, should a company conclude? The researchers converge, despite their different starting points, on a sober and rather practical message. There are no magic colours that will reliably make people buy, and the confident charts that assign a single emotion to each hue promise more than the evidence can support. What matters instead is the fit between a colour and everything around it: the product, the competition, the culture and the story the brand wishes to tell. Colour is a genuine and powerful tool of persuasion, but it is a grammar to be used with care, not a set of magic words.`,
        questions: [
          // ── Matching Features — statements to researchers (5 items) = 5 marks ──
          {
            id: 'rd-011-p3-q1',
            type: 'matching',
            variant: 'features',
            prompt:
              'Look at the following statements and the list of researchers below. Match each statement to the person who expresses that view in the passage. Write the correct letter, A, B or C. NB You may use any letter more than once.',
            options: [
              { key: 'A', label: 'Lauren Hwang' },
              { key: 'B', label: 'Tomas Rele' },
              { key: 'C', label: 'Petra Calloway' },
            ],
            items: [
              {
                id: 'p3-f-1',
                text: 'Using a colour consistently is more important than which particular shade is chosen.',
                answer: 'B',
              },
              {
                id: 'p3-f-2',
                text: 'The eye is naturally drawn to long-wavelength colours such as red and orange.',
                answer: 'C',
              },
              {
                id: 'p3-f-3',
                text: 'The same colour can suit one product yet seem wrong on another.',
                answer: 'A',
              },
              {
                id: 'p3-f-4',
                text: 'Built-in visual tendencies are weak and easily overridden by habit and learning.',
                answer: 'C',
              },
              {
                id: 'p3-f-5',
                text: 'There is no objectively correct colour for any given product.',
                answer: 'B',
              },
            ],
            explanation:
              'Item 1 → B (Rele): "Consistency, he insists, matters more than the particular shade." Item 2 → C (Calloway): "The eye is drawn most readily to long-wavelength colours such as red and orange." Item 3 → A (Hwang): her yellow example shows a colour that suits sweets "would inspire little confidence on a luxury watch." Item 4 → C (Calloway): "Such tendencies, she stresses, are weak and easily overridden by learning and habit." Item 5 → B (Rele): "there is no objectively correct colour for a product."',
          },
          {
            id: 'rd-011-p3-q2',
            type: 'tfng',
            prompt:
              'The passage states that the colours companies choose for their logos are usually accidental.',
            answer: 'false',
            explanation:
              'Paragraph 1 states that of the colours described "none of these is an accident" and that companies "spend large sums settling on the exact shades." The statement contradicts this, so it is False.',
          },
          {
            id: 'rd-011-p3-q3',
            type: 'mcq',
            prompt: 'What is the "intuitive idea" that the passage says is misleading?',
            options: [
              'That contrast between colours matters more than any single colour',
              'That each colour carries a single fixed meaning',
              'That colour has no influence on consumers at all',
              'That cultural background changes the meaning of a colour',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph 2 describes "the intuitive idea... that particular colours carry fixed meanings" (red urgent, blue calm, green natural) and then warns "the simple version is misleading." Option B states this idea.',
          },
          {
            id: 'rd-011-p3-q4',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: Hwang argues that the effect of a colour depends overwhelmingly on its _______ and on what the product is.',
            acceptableAnswers: ['context'],
            explanation:
              'Paragraph 2 reports that Hwang "argues that the effect of a colour depends overwhelmingly on its context and on what the product is." The required word is "context".',
          },
          {
            id: 'rd-011-p3-q5',
            type: 'mcq',
            prompt: 'According to Rele, when does a logo succeed?',
            options: [
              'When it uses one of a few scientifically proven colours',
              'When its colour stands out from rivals and matches the brand’s personality',
              'When it copies the colours used by the most successful competitor',
              'When it avoids long-wavelength colours such as red',
            ],
            correctIndex: 1,
            explanation:
              'Paragraph 3 states that, for Rele, "A logo succeeds... when its colour stands out clearly from those of its rivals on a crowded shelf and matches the personality of the brand." Option B captures both conditions.',
          },
          {
            id: 'rd-011-p3-q6',
            type: 'tfng',
            prompt:
              'Calloway believes that biology can explain why one particular shade of red is chosen for a sports brand.',
            answer: 'false',
            explanation:
              'Paragraph 4 says biology "cannot explain why one shade of red is chosen for a sports brand and quite another for a brand of jam." The statement reverses her view, so it is False.',
          },
          {
            id: 'rd-011-p3-q7',
            type: 'gap',
            prompt:
              'Complete the sentence with ONE word from the passage: White, taken in much of Europe to signify purity, is in several Asian cultures the colour of _______.',
            acceptableAnswers: ['mourning'],
            explanation:
              'Paragraph 5 states that white "is in several Asian cultures the colour of mourning." The required word is "mourning".',
          },
          {
            id: 'rd-011-p3-q8',
            type: 'tfng',
            prompt:
              'Hwang and Rele agree that the associations a colour carries are learned and vary between societies.',
            answer: 'true',
            explanation:
              'Paragraph 5 says the associations "are learned, and they vary from one society to another, a point on which Hwang and Rele agree even as they differ on much else." This matches the statement, so it is True.',
          },
          {
            id: 'rd-011-p3-q9',
            type: 'tfng',
            prompt:
              'There is a universal language of colour that means the same thing in every market.',
            answer: 'false',
            explanation:
              'Paragraph 5 concludes that "there is no universal language of colour waiting to be discovered," and paragraph 1 of the conclusion echoes this. The statement contradicts the passage, so it is False.',
          },
          {
            id: 'rd-011-p3-q10',
            type: 'mcq',
            prompt:
              'What is the main conclusion the researchers reach, despite their different starting points?',
            options: [
              'Certain colours reliably make people buy more.',
              'Colour has almost no effect on consumer behaviour.',
              'What matters is the fit between a colour and its whole context.',
              'Companies should use the same colours in every country.',
            ],
            correctIndex: 2,
            explanation:
              'The final paragraph states there are "no magic colours" and that "What matters instead is the fit between a colour and everything around it: the product, the competition, the culture and the story the brand wishes to tell." Option C matches this convergent conclusion.',
          },
        ],
      },
    ],
  },
]
