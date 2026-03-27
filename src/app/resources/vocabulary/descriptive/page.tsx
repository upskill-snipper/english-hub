"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─── Types ──────────────────────────────────────────────────── */

interface DescWord {
  word: string;
  definition: string;
  example: string;
}

interface DescCategory {
  id: string;
  title: string;
  colour: string;
  tagColour: string;
  subcategories: { name: string; words: DescWord[] }[];
}

/* ─── Data ───────────────────────────────────────────────────── */

const CATEGORIES: DescCategory[] = [
  {
    id: "sensory",
    title: "Sensory Vocabulary",
    colour: "border-accent",
    tagColour: "bg-accent/10 text-accent",
    subcategories: [
      {
        name: "Sight",
        words: [
          { word: "Luminous", definition: "Emitting or reflecting light; glowing", example: "The luminous moon hung low over the marshland." },
          { word: "Opaque", definition: "Not transparent; difficult to see through", example: "An opaque mist settled across the valley floor." },
          { word: "Iridescent", definition: "Showing luminous colours that seem to change", example: "Iridescent droplets clung to the spider's web." },
          { word: "Silhouetted", definition: "Shown as a dark shape against a lighter background", example: "The trees stood silhouetted against the burning sky." },
          { word: "Dappled", definition: "Marked with spots or patches of colour or light", example: "Dappled sunlight filtered through the canopy." },
          { word: "Glinting", definition: "Giving out small, bright flashes of light", example: "The river lay glinting in the afternoon sun." },
          { word: "Pallid", definition: "Pale, especially in a way suggesting ill health", example: "His pallid complexion betrayed weeks of confinement." },
          { word: "Garish", definition: "Obtrusively bright and showy", example: "Garish neon signs bled colour into the wet pavement." },
          { word: "Mottled", definition: "Marked with patches of different colour", example: "The mottled bark of the ancient oak told its own story." },
          { word: "Bleached", definition: "Whitened by exposure to light or chemicals", example: "Bleached bones lay scattered across the desert." },
          { word: "Shadowy", definition: "Dark or indistinct; full of shadows", example: "A shadowy figure emerged from the doorway." },
          { word: "Translucent", definition: "Allowing light to pass through partially", example: "Her translucent skin revealed the delicate veins beneath." },
        ],
      },
      {
        name: "Sound",
        words: [
          { word: "Cacophonous", definition: "Involving a harsh, discordant mixture of sounds", example: "The cacophonous alarm shattered the morning silence." },
          { word: "Melodious", definition: "Pleasant-sounding; musical", example: "A melodious birdsong drifted through the open window." },
          { word: "Resonant", definition: "Deep, clear, and continuing to sound", example: "His resonant voice filled every corner of the hall." },
          { word: "Shrill", definition: "High-pitched and piercing", example: "A shrill whistle cut through the din of the playground." },
          { word: "Guttural", definition: "Harsh-sounding, produced in the throat", example: "A guttural growl emerged from the undergrowth." },
          { word: "Hushed", definition: "Very quiet; barely audible", example: "Hushed whispers rippled through the congregation." },
          { word: "Reverberating", definition: "Echoing; resounding", example: "Thunder went reverberating across the darkened hills." },
          { word: "Staccato", definition: "Short, sharp, and detached", example: "The staccato tap of her heels echoed down the corridor." },
          { word: "Discordant", definition: "Disagreeable in sound; harsh and jarring", example: "A discordant scraping sound set their teeth on edge." },
          { word: "Muffled", definition: "Not loud or clear; deadened", example: "Muffled sobs came from behind the locked door." },
        ],
      },
      {
        name: "Touch",
        words: [
          { word: "Coarse", definition: "Rough or harsh in texture", example: "The coarse fabric chafed against his skin." },
          { word: "Velvety", definition: "Having a soft, smooth texture", example: "She ran her fingers over the velvety petals." },
          { word: "Clammy", definition: "Unpleasantly damp and sticky", example: "His clammy palms betrayed his nervous anticipation." },
          { word: "Abrasive", definition: "Rough enough to wear away a surface", example: "The abrasive wind stripped the paint from the shutters." },
          { word: "Supple", definition: "Flexible and easily bent", example: "The supple leather moulded to the shape of her hand." },
          { word: "Scalding", definition: "Very hot; burning", example: "Scalding steam erupted from the fractured pipe." },
          { word: "Gnarled", definition: "Knobbly, rough, and twisted", example: "She gripped the gnarled branch with trembling hands." },
          { word: "Frigid", definition: "Very cold in temperature", example: "The frigid water sent a jolt through his body." },
          { word: "Bristling", definition: "Having a texture of short, stiff hairs", example: "The bristling surface of the cactus warned her away." },
          { word: "Silken", definition: "Having the texture of silk; smooth and glossy", example: "Silken threads of dawn light crept across the floor." },
        ],
      },
      {
        name: "Smell",
        words: [
          { word: "Pungent", definition: "Having a sharply strong taste or smell", example: "The pungent smell of smoke clung to his clothes." },
          { word: "Acrid", definition: "Having an unpleasantly harsh smell or taste", example: "An acrid tang of burning rubber hung in the air." },
          { word: "Fragrant", definition: "Having a pleasant, sweet smell", example: "The garden was fragrant with jasmine and honeysuckle." },
          { word: "Musty", definition: "Having a stale, mouldy, or damp smell", example: "A musty odour rose from the leather-bound books." },
          { word: "Aromatic", definition: "Having a pleasant and distinctive smell", example: "Aromatic spices filled the bustling market square." },
          { word: "Fetid", definition: "Smelling extremely unpleasant", example: "The fetid stench of the marshland was inescapable." },
          { word: "Earthy", definition: "Resembling the smell of soil", example: "An earthy scent rose from the rain-soaked ground." },
          { word: "Cloying", definition: "Excessively sweet, rich, or sentimental", example: "A cloying perfume hung like a cloud around her." },
          { word: "Briny", definition: "Strongly salty, like the sea", example: "The briny air stung their lips as they neared the harbour." },
          { word: "Rancid", definition: "Smelling or tasting unpleasant as a result of being stale", example: "Rancid grease coated the abandoned kitchen surfaces." },
        ],
      },
      {
        name: "Taste",
        words: [
          { word: "Saccharine", definition: "Excessively sweet or sentimental", example: "The saccharine sweetness of the drink made her wince." },
          { word: "Bitter", definition: "Having a sharp, pungent taste", example: "The bitter coffee matched the bleakness of the morning." },
          { word: "Metallic", definition: "Having the taste of metal", example: "A metallic tang filled his mouth as fear took hold." },
          { word: "Sour", definition: "Having an acid taste like lemon", example: "The sour taste of regret lingered long after the argument." },
          { word: "Palatable", definition: "Pleasant to taste; acceptable", example: "The truth, though unpalatable, could no longer be ignored." },
          { word: "Astringent", definition: "Sharp or severe in manner or effect", example: "The astringent bite of the winter air caught his throat." },
          { word: "Tangy", definition: "Having a sharp, piquant flavour", example: "The tangy scent of citrus drifted from the market stall." },
          { word: "Savoury", definition: "Belonging to the category of salty or spicy rather than sweet", example: "Savoury smoke curled from the chimney." },
        ],
      },
    ],
  },
  {
    id: "emotion",
    title: "Emotion Vocabulary",
    colour: "border-primary",
    tagColour: "bg-primary/10 text-primary",
    subcategories: [
      {
        name: "Fear & Anxiety",
        words: [
          { word: "Trepidation", definition: "A feeling of fear about something that may happen", example: "She approached the darkened house with mounting trepidation." },
          { word: "Apprehension", definition: "Anxiety about the future", example: "A wave of apprehension washed over him as the door creaked open." },
          { word: "Dread", definition: "Great fear or apprehension", example: "A cold dread settled in the pit of her stomach." },
          { word: "Unease", definition: "An anxious or uncomfortable feeling", example: "An unease crept over him like a slow tide." },
          { word: "Foreboding", definition: "A feeling that something bad will happen", example: "A sense of foreboding hung heavy in the still air." },
          { word: "Consternation", definition: "Anxiety and dismay, typically at something unexpected", example: "She stared at the letter in consternation." },
        ],
      },
      {
        name: "Anger & Frustration",
        words: [
          { word: "Indignation", definition: "Anger provoked by something perceived as unfair", example: "His indignation was palpable as he confronted the injustice." },
          { word: "Exasperation", definition: "Irritation and frustration", example: "Her exasperation was evident in the sharpness of her reply." },
          { word: "Resentment", definition: "Bitter indignation at having been treated unfairly", example: "Years of resentment simmered beneath his composed exterior." },
          { word: "Fury", definition: "Wild or violent anger", example: "A white-hot fury blazed behind her calm expression." },
          { word: "Vexation", definition: "The state of being annoyed or worried", example: "He threw down the paper in vexation." },
          { word: "Contempt", definition: "The feeling that someone is beneath consideration", example: "She regarded him with barely concealed contempt." },
        ],
      },
      {
        name: "Sadness & Loss",
        words: [
          { word: "Melancholy", definition: "A deep, persistent sadness", example: "A quiet melancholy pervaded the abandoned schoolroom." },
          { word: "Desolation", definition: "A state of complete emptiness or loneliness", example: "The desolation in her voice was unmistakable." },
          { word: "Anguish", definition: "Severe mental or physical suffering", example: "His anguish was written in every line of his face." },
          { word: "Wistful", definition: "Having a feeling of vague longing", example: "She gazed with wistful eyes at the photograph." },
          { word: "Bereft", definition: "Deprived of; feeling a great loss", example: "He stood bereft in the empty room, unable to move." },
          { word: "Despondent", definition: "In low spirits from loss of hope", example: "The despondent figure slumped against the cold wall." },
        ],
      },
      {
        name: "Joy & Relief",
        words: [
          { word: "Elation", definition: "Great happiness and excitement", example: "A rush of elation surged through her as the results appeared." },
          { word: "Euphoria", definition: "An intense feeling of well-being and excitement", example: "The euphoria of freedom lasted only a moment." },
          { word: "Exhilaration", definition: "A feeling of exciting stimulation", example: "The exhilaration of the open road stretched before them." },
          { word: "Serenity", definition: "The state of being calm and peaceful", example: "A rare serenity settled over her troubled features." },
          { word: "Jubilant", definition: "Feeling or expressing great happiness and triumph", example: "The jubilant crowd erupted into cheers." },
          { word: "Gratitude", definition: "The quality of being thankful", example: "Overwhelmed by gratitude, she found herself unable to speak." },
        ],
      },
      {
        name: "Complex Emotions",
        words: [
          { word: "Ambivalence", definition: "Having mixed feelings about something", example: "His ambivalence towards the offer was clear in his hesitation." },
          { word: "Resignation", definition: "Acceptance of something unpleasant but inevitable", example: "With quiet resignation, she closed the door for the last time." },
          { word: "Nostalgia", definition: "A sentimental longing for the past", example: "A bittersweet nostalgia coloured her memories of childhood." },
          { word: "Remorse", definition: "Deep regret for a wrong committed", example: "Remorse gnawed at him through every sleepless night." },
          { word: "Defiance", definition: "Open resistance; bold disobedience", example: "Defiance flared in her eyes as she refused to yield." },
          { word: "Yearning", definition: "An intense longing for something", example: "A deep yearning for home consumed his every thought." },
        ],
      },
    ],
  },
  {
    id: "weather",
    title: "Weather & Atmosphere Vocabulary",
    colour: "border-primary",
    tagColour: "bg-primary/10 text-primary",
    subcategories: [
      {
        name: "Storms & Turbulence",
        words: [
          { word: "Tempestuous", definition: "Characterised by strong turbulent movement", example: "The tempestuous sea mirrored the character's inner turmoil." },
          { word: "Torrential", definition: "Falling in great quantities; fast and plentiful", example: "Torrential rain hammered against the fragile windowpane." },
          { word: "Relentless", definition: "Oppressively constant; incessant", example: "The relentless wind battered the exposed clifftop." },
          { word: "Ferocious", definition: "Savagely fierce or violent", example: "A ferocious gale tore through the sleeping village." },
          { word: "Tumultuous", definition: "Making a loud, confused noise; uproarious", example: "The tumultuous sky churned with blackened clouds." },
        ],
      },
      {
        name: "Calm & Stillness",
        words: [
          { word: "Tranquil", definition: "Free from disturbance; calm", example: "The tranquil surface of the lake reflected the mountains perfectly." },
          { word: "Languid", definition: "Displaying a lack of physical or mental energy", example: "A languid warmth settled over the afternoon." },
          { word: "Ethereal", definition: "Extremely delicate and light; heavenly", example: "An ethereal mist drifted between the ancient gravestones." },
          { word: "Balmy", definition: "Pleasantly warm", example: "The balmy evening air carried the scent of cut grass." },
          { word: "Serene", definition: "Calm, peaceful, and untroubled", example: "The serene landscape belied the horror that lay ahead." },
        ],
      },
      {
        name: "Cold & Darkness",
        words: [
          { word: "Bleak", definition: "Lacking vegetation and exposed to the elements", example: "The bleak moorland stretched endlessly in every direction." },
          { word: "Desolate", definition: "Deserted and giving an impression of bleakness", example: "A desolate wind howled through the abandoned streets." },
          { word: "Oppressive", definition: "Weighing heavily on the mind or spirits", example: "An oppressive heat pressed down on the crowded city." },
          { word: "Glacial", definition: "Extremely cold; icy", example: "The glacial air bit into their exposed skin." },
          { word: "Ominous", definition: "Giving the impression that something bad is going to happen", example: "Ominous clouds gathered on the horizon." },
          { word: "Impenetrable", definition: "Impossible to see or pass through", example: "An impenetrable darkness swallowed the forest path." },
        ],
      },
    ],
  },
  {
    id: "character",
    title: "Character Description Vocabulary",
    colour: "border-warn",
    tagColour: "bg-warn/10 text-warn",
    subcategories: [
      {
        name: "Physical Appearance",
        words: [
          { word: "Gaunt", definition: "Lean and haggard, especially through suffering", example: "His gaunt features told a story of prolonged hardship." },
          { word: "Weathered", definition: "Worn by long exposure to the elements", example: "Her weathered hands spoke of decades of manual labour." },
          { word: "Imposing", definition: "Grand and impressive in appearance", example: "An imposing figure blocked the narrow doorway." },
          { word: "Diminutive", definition: "Extremely or unusually small", example: "Despite her diminutive stature, her presence filled the room." },
          { word: "Angular", definition: "Having sharp corners or angles; lean and bony", example: "His angular jaw was set in stubborn determination." },
          { word: "Dishevelled", definition: "Untidy in appearance", example: "She arrived dishevelled and breathless at the station." },
        ],
      },
      {
        name: "Personality & Manner",
        words: [
          { word: "Austere", definition: "Stern and forbidding in appearance or manner", example: "The austere headmistress rarely smiled." },
          { word: "Enigmatic", definition: "Difficult to interpret or understand; mysterious", example: "An enigmatic smile played at the corners of his mouth." },
          { word: "Gregarious", definition: "Fond of company; sociable", example: "Her gregarious nature made her the centre of every gathering." },
          { word: "Taciturn", definition: "Reserved or uncommunicative; saying little", example: "The taciturn stranger sat alone at the bar." },
          { word: "Benevolent", definition: "Well-meaning and kindly", example: "His benevolent gaze put the nervous child at ease." },
          { word: "Imperious", definition: "Arrogant and domineering", example: "She issued her instructions in an imperious tone." },
          { word: "Stoic", definition: "Enduring hardship without showing feelings", example: "He maintained a stoic expression despite the devastating news." },
          { word: "Mercurial", definition: "Subject to sudden changes of mood", example: "Her mercurial temperament made her both captivating and exhausting." },
        ],
      },
      {
        name: "Movement & Gesture",
        words: [
          { word: "Lumbering", definition: "Moving in a slow, heavy, awkward way", example: "The lumbering figure emerged from the shadows." },
          { word: "Furtive", definition: "Attempting to avoid notice or attention", example: "She cast a furtive glance over her shoulder." },
          { word: "Deliberate", definition: "Done consciously and intentionally; unhurried", example: "Each deliberate step brought him closer to the truth." },
          { word: "Languid", definition: "Slow and relaxed", example: "With a languid wave, she dismissed the suggestion." },
          { word: "Faltering", definition: "Losing strength or momentum; hesitant", example: "His faltering steps betrayed a confidence he no longer felt." },
          { word: "Recoiling", definition: "Drawing back instinctively in fear or disgust", example: "She stood recoiling at the sight before her." },
        ],
      },
    ],
  },
  {
    id: "setting",
    title: "Setting Description Vocabulary",
    colour: "border-accent",
    tagColour: "bg-accent/10 text-accent",
    subcategories: [
      {
        name: "Urban Settings",
        words: [
          { word: "Labyrinthine", definition: "Resembling a maze; complex and confusing", example: "The labyrinthine alleyways of the old town swallowed the light." },
          { word: "Dilapidated", definition: "In a state of disrepair through age or neglect", example: "Dilapidated buildings leaned drunkenly against one another." },
          { word: "Teeming", definition: "Full of people or animals", example: "The teeming marketplace buzzed with voices and colour." },
          { word: "Monolithic", definition: "Large, powerful, and difficult to change", example: "Monolithic tower blocks dominated the grey skyline." },
          { word: "Decrepit", definition: "Worn out or ruined because of age or neglect", example: "The decrepit staircase groaned under their weight." },
          { word: "Claustrophobic", definition: "Uncomfortably small or crowded", example: "The claustrophobic corridor seemed to narrow with every step." },
        ],
      },
      {
        name: "Rural & Natural Settings",
        words: [
          { word: "Verdant", definition: "Lush with green vegetation", example: "Verdant fields rolled towards the distant mountains." },
          { word: "Barren", definition: "Too poor to produce much vegetation", example: "The barren landscape offered no shelter from the wind." },
          { word: "Sprawling", definition: "Spreading out over a large area", example: "The sprawling woodland seemed to stretch without end." },
          { word: "Undulating", definition: "Having a smoothly rising and falling form", example: "Undulating hills glowed amber in the evening light." },
          { word: "Primordial", definition: "Existing at or from the beginning of time", example: "The primordial forest felt untouched by human hands." },
          { word: "Secluded", definition: "Hidden or sheltered from view", example: "They discovered a secluded clearing bathed in golden light." },
        ],
      },
      {
        name: "Interior Settings",
        words: [
          { word: "Austere", definition: "Plain and without decoration or comforts", example: "The austere room contained nothing but a bed and a chair." },
          { word: "Opulent", definition: "Ostentatiously costly and luxurious", example: "The opulent drawing room gleamed with gilt and crystal." },
          { word: "Cavernous", definition: "Resembling a cavern; vast and empty", example: "Their footsteps echoed through the cavernous hall." },
          { word: "Intimate", definition: "Cosy and private", example: "The intimate candlelit space felt worlds away from the storm outside." },
          { word: "Ramshackle", definition: "In a state of severe disrepair", example: "The ramshackle cottage tilted at an alarming angle." },
          { word: "Stifling", definition: "Oppressively hot and airless", example: "The stifling attic room offered no relief from the summer heat." },
        ],
      },
    ],
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function DescriptiveVocabularyPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories = useMemo(() => {
    const s = search.toLowerCase();
    return CATEGORIES.filter((c) => activeCategory === "all" || c.id === activeCategory)
      .map((c) => ({
        ...c,
        subcategories: c.subcategories
          .map((sc) => ({
            ...sc,
            words: sc.words.filter(
              (w) =>
                !s ||
                w.word.toLowerCase().includes(s) ||
                w.definition.toLowerCase().includes(s)
            ),
          }))
          .filter((sc) => sc.words.length > 0),
      }))
      .filter((c) => c.subcategories.length > 0);
  }, [search, activeCategory]);

  const totalWords = CATEGORIES.reduce(
    (sum, c) => sum + c.subcategories.reduce((s2, sc) => s2 + sc.words.length, 0),
    0
  );

  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/20">
            Vocabulary Builder
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Descriptive Vocabulary
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {totalWords}+ carefully chosen words for creative writing. Sensory
            language, emotions, weather, character, and setting -- everything you
            need to bring your writing to life.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-6xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
          <li>/</li>
          <li><Link href="/resources/vocabulary" className="hover:text-primary transition-colors">Vocabulary</Link></li>
          <li>/</li>
          <li className="font-medium text-primary">Descriptive</li>
        </ol>
      </nav>

      {/* Search & filter */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search descriptive words..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm shadow-md transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All" },
              { id: "sensory", label: "Sensory" },
              { id: "emotion", label: "Emotions" },
              { id: "weather", label: "Weather" },
              { id: "character", label: "Character" },
              { id: "setting", label: "Setting" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveCategory(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === f.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vocabulary sections */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {filteredCategories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <h2 className={`mb-8 text-2xl font-bold text-primary border-b-2 ${cat.colour} pb-3`}>
                {cat.title}
              </h2>

              {cat.subcategories.map((sc) => (
                <div key={sc.name} className="mb-8">
                  <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
                    <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${cat.tagColour}`}>
                      {sc.name}
                    </span>
                    <span className="text-sm font-normal text-muted-foreground">
                      ({sc.words.length} words)
                    </span>
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {sc.words.map((w) => (
                      <div key={w.word} className="rounded-xl border border-border bg-card p-4 shadow-md hover:shadow-md transition">
                        <h4 className="font-bold text-foreground">{w.word}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{w.definition}</p>
                        <div className="mt-2 rounded-lg bg-muted px-3 py-2">
                          <p className="text-sm italic text-muted-foreground">
                            &ldquo;{w.example}&rdquo;
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <p className="text-center text-sm text-muted-foreground">
              No words match your search. Try a different term.
            </p>
          )}
        </div>
      </section>

      {/* Continue exploring */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">Continue exploring</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Academic Vocabulary", href: "/resources/vocabulary/academic", desc: "50+ words for essay writing." },
              { label: "Analytical Vocabulary", href: "/resources/vocabulary/analytical", desc: "Master the language of analysis." },
              { label: "All Vocabulary", href: "/resources/vocabulary", desc: "Browse all vocabulary categories." },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-accent/40">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{link.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
