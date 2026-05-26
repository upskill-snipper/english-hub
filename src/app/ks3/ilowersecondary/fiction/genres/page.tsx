import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  FICTION_GENRES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/fiction/genres'

// Order the page exactly as the specification lists the genres, so the
// canonical list is the single source of truth.
const GENRE_ORDER = FICTION_GENRES

type Genre = {
  key: (typeof FICTION_GENRES)[number]
  title: string
  oneLine: string
  conventions: string[]
  settingsCharacters: string
  languageAtmosphere: string
  criticalLens: string[]
  extract: {
    title: string
    lines: string[]
    annotations: { feature: string; note: string }[]
  }
  question: { prompt: string; marks: number; model: string }
}

const GENRES: Genre[] = [
  {
    key: 'adventure',
    title: 'Adventure',
    oneLine:
      'A capable protagonist is pushed into a journey or quest where physical danger, time pressure and the natural world test their nerve and resourcefulness.',
    conventions: [
      'A clear goal or quest, often with a deadline or a point of no return.',
      'Rising physical jeopardy - the stakes get worse before they get better.',
      'An ordinary or under-prepared hero who must improvise and act.',
      'A hostile environment (sea, mountain, jungle, storm) that behaves almost like an antagonist.',
    ],
    settingsCharacters:
      'Settings are remote, exposed and difficult to escape: open water, high passes, dense forest, a sinking vehicle. Characters are defined by what they do under pressure rather than long backstory - the doer, the cautious companion, and an environment or rival that blocks the goal.',
    languageAtmosphere:
      'Writers favour short, kinetic sentences and strong physical verbs to drive pace, varied with a longer sentence to slow a moment of decision or relief. The atmosphere is taut and forward-leaning; sensory detail focuses on cold, effort, breath and balance so the reader feels the body of the character.',
    criticalLens: [
      'Track where the writer accelerates with short sentences and where they brake with a longer one - pace is a deliberate structural choice.',
      'Notice how the setting is personified or made threatening, and ask what that adds to the danger.',
      'Watch the verb choices: are they precise and physical, and what do they imply about effort or fear?',
    ],
    extract: {
      title: 'Extract - "The ledge"',
      lines: [
        'The rope went slack in Priya’s hands and for one cold second she did not breathe. Below her the gully fell away into white nothing, and the wind shoved at her shoulders as if it had decided she should not be there. She pressed her cheek to the wet rock and made herself count: one ledge, one handhold, one move. Above her, Sam’s voice came down thin and torn by the gale - “Three metres. You have three metres and then it is dark.” She found the crack with her fingertips, jammed her hand into it until it hurt, and pulled.',
      ],
      annotations: [
        {
          feature: 'Time pressure / deadline',
          note: '"three metres and then it is dark" sets a hard limit, a classic adventure device that forces action and raises stakes.',
        },
        {
          feature: 'Hostile setting personified',
          note: 'the wind "shoved … as if it had decided she should not be there" turns the environment into an opposing force.',
        },
        {
          feature: 'Short, kinetic clauses + physical verbs',
          note: '"jammed her hand into it until it hurt, and pulled" uses blunt, bodily verbs and a clipped rhythm to drive pace and make effort felt.',
        },
      ],
    },
    question: {
      prompt:
        'How does the writer create a sense of danger and pressure in this extract? Refer to language and structure. (4)',
      marks: 4,
      model:
        'The writer makes the danger feel physical and immediate. The setting is turned into an active threat - the wind "shoved at her shoulders as if it had decided she should not be there" - so the environment itself opposes Priya. Structurally, the writer imposes a deadline through Sam’s words "three metres and then it is dark," which compresses time and forces the reader to feel the urgency. The short, clipped final clause "jammed her hand into it until it hurt, and pulled" uses harsh physical verbs and an abrupt rhythm to mirror the strain of the action and end the extract on effort rather than safety, leaving the outcome uncertain.',
    },
  },
  {
    key: 'fantasy',
    title: 'Fantasy',
    oneLine:
      'A secondary world (or a magical layer hidden inside the real one) runs on its own consistent rules, and the story turns on power, prophecy, or a threat to that world’s order.',
    conventions: [
      'A coherent invented world with its own rules of magic, geography and history.',
      'A "chosen" or unlikely hero, often crossing a threshold from the ordinary into the magical.',
      'A clearly drawn moral conflict, frequently order against a corrupting power.',
      'Symbolic objects, prophecies or rules that the plot must obey.',
    ],
    settingsCharacters:
      'Settings are richly named and textured - distinct realms, ancient places, magic with limits. Characters include the reluctant hero who grows into power, a guide or mentor, and an antagonist whose strength is also a kind of corruption. World detail is delivered through the protagonist’s eyes rather than info-dumped.',
    languageAtmosphere:
      'Language is often slightly elevated or formal, with invented proper nouns and a controlled use of archaism to signal otherness. Atmosphere is built through wonder mixed with unease; long, layered sentences create grandeur while a sudden short sentence delivers a rule or a warning.',
    criticalLens: [
      'Check whether the magic has consistent limits - strong fantasy keeps its own rules and the writer signals them deliberately.',
      'Read named places and objects as symbols, not just decoration; ask what idea each one carries.',
      'Notice the register: where the writer raises formality to create awe and where they drop it to make a moment feel human.',
    ],
    extract: {
      title: 'Extract - "The lantern that would not be lit"',
      lines: [
        'In the high hall of Vesselholt the iron lantern had hung dark for a hundred winters, and the keepers said it would burn only for one who carried no lie in the heart. Aren had not believed them. He climbed the worn stair anyway, past the carved kings whose faces the years had softened to blanks, and stood beneath the cold iron with his hands open and empty. He thought of every small untruth he had ever told and felt them gather like a weight under his ribs. The lantern did not move. Then, very slowly, as if the dark itself were deciding, a thread of pale light unwound inside the glass.',
      ],
      annotations: [
        {
          feature: 'Invented world + proper noun',
          note: '"the high hall of Vesselholt" names a distinct realm and roots the reader in a secondary world.',
        },
        {
          feature: 'Rule / prophecy that the plot must obey',
          note: 'the lantern "would burn only for one who carried no lie in the heart" sets a magical rule that the scene then tests.',
        },
        {
          feature: 'Elevated register and personified magic',
          note: '"as if the dark itself were deciding" lifts the language and gives the magic agency, creating wonder edged with unease.',
        },
      ],
    },
    question: {
      prompt:
        'How does the writer use the lantern to create tension and a sense of the magical? (4)',
      marks: 4,
      model:
        'The writer builds a magical rule and then makes the reader wait on it. The lantern "would burn only for one who carried no lie in the heart," which establishes a test with a clear, almost moral condition, so the reader watches to see whether Aren will pass it. Tension is created structurally by delay: the long sentence describing his climb and his gathered untruths is followed by the abrupt "The lantern did not move," which lands like a verdict. The writer then personifies the magic - the light unwinds "as if the dark itself were deciding" - which keeps the outcome uncertain until the last moment and makes the world feel governed by forces beyond Aren’s control.',
    },
  },
  {
    key: 'historical',
    title: 'Historical',
    oneLine:
      'A story set convincingly in a real past period, where the manners, constraints and pressures of that time shape what characters can think, say and do.',
    conventions: [
      'A specific, recognisable period rendered through accurate, lived-in detail.',
      'Conflict that arises from the limits of the time - class, law, custom, or events.',
      'Characters whose choices are constrained by their world, not by modern attitudes.',
      'Period-appropriate objects, work and language woven in without lecturing.',
    ],
    settingsCharacters:
      'Settings are anchored by concrete period detail - tools, clothing, work, money, the texture of a street or a household. Characters are ordinary people caught up in the pressures of the period, often someone with little power navigating a system that constrains them.',
    languageAtmosphere:
      'Writers calibrate diction to suggest the period without becoming unreadable, using a measured rhythm and concrete nouns drawn from the time. Atmosphere comes from restraint and detail: the reader feels the era through specifics rather than through a character explaining it.',
    criticalLens: [
      'Test the detail - does it do work (showing constraint or status) or is it just scenery?',
      'Ask what the period stops the character from doing; the constraint is usually the real engine of the conflict.',
      'Notice how the writer suggests the past through diction and object choice without modern intrusions.',
    ],
    extract: {
      title: 'Extract - "The half-day"',
      lines: [
        'Martha had been at the mill since the bell at six, and her ears still rang with it long after the looms were stilled for the dinner hour. She kept the threepence in her closed fist all the way down Cardwell Street, because a coin shown was a coin gone, her mother always said. The doctor’s door had a brass plate she did not dare touch and a step she had scrubbed once, for a penny, two summers back. She stood on the cobbles in the thin rain and rehearsed the words she had practised in the carding room: please, sir, it is for my brother, and we can pay a little each week. The plate gleamed. She did not knock yet.',
      ],
      annotations: [
        {
          feature: 'Concrete period detail',
          note: '"the bell at six," "the looms," "the carding room" and "threepence" build a specific working past without explaining it.',
        },
        {
          feature: 'Constraint of the period drives conflict',
          note: 'the brass plate she "did not dare touch" and paying "a little each week" show class and poverty limiting what Martha can do.',
        },
        {
          feature: 'Restrained, measured atmosphere',
          note: 'the held coin and the unspoken, rehearsed plea convey tension through detail and restraint rather than stated emotion.',
        },
      ],
    },
    question: {
      prompt:
        'How does the writer use detail to show the pressures on Martha’s life in this period? (4)',
      marks: 4,
      model:
        'The writer uses precise period detail to make Martha’s poverty and lack of power felt rather than stated. The reference to "the bell at six" and ears that "still rang with it" implies long, harsh mill hours, while keeping "the threepence in her closed fist" and her mother’s saying that "a coin shown was a coin gone" show money as something fragile and guarded. Class constraint is conveyed structurally through hesitation: the brass plate she "did not dare touch" and the closing line "She did not knock yet" hold the reader on the threshold and dramatise how far above her the doctor’s world feels. The rehearsed, deferential plea - "please, sir … we can pay a little each week" - captures the period’s social distance without the writer explaining it.',
    },
  },
  {
    key: 'mystery',
    title: 'Mystery',
    oneLine:
      'A question is opened - a disappearance, a crime, an inexplicable event - and the narrative is driven by the controlled release of clues toward an answer.',
    conventions: [
      'A central unanswered question planted early and held open.',
      'Clues and red herrings released in a deliberate order.',
      'An investigator figure (formal or accidental) whose curiosity drives the plot.',
      'A reveal that recontextualises earlier detail, often with foreshadowing the reader missed.',
    ],
    settingsCharacters:
      'Settings are often contained and slightly off - a quiet house, a closed community, an ordinary place where one thing is wrong. Characters include the questioner, witnesses who may withhold, and a suspect or absence at the centre. Detail is selected so that some of it will matter later.',
    languageAtmosphere:
      'Language withholds: precise nouns, careful gaps, and questions left hanging. Sentences often pause on a small wrong detail. The atmosphere is one of controlled unease - the writer makes the ordinary feel charged so the reader starts reading suspiciously.',
    criticalLens: [
      'Track what the writer chooses to tell you and, more importantly, what they withhold - gaps are deliberate.',
      'Re-read early detail asking which clue is being planted and which is a red herring.',
      'Notice how single "wrong" details (a sound, an open door) are used to tilt an ordinary scene into unease.',
    ],
    extract: {
      title: 'Extract - "The third coat"',
      lines: [
        'There were always two coats on the hooks by the back door, my father’s and the spare. This morning there were three. I stood in the hallway with the kettle ticking behind me and looked at the unfamiliar one for longer than made sense - dark, wet at the shoulders, a single bus ticket folded into the breast pocket. My father was at work and had been since seven; I had heard the gate. Nobody had knocked, and the chain had been on the front door all night, because I had put it there myself. I did not call out. I went very quietly to look at the window catch in the back room, and found it open the width of two fingers.',
      ],
      annotations: [
        {
          feature: 'Central question planted early',
          note: '"This morning there were three" opens an unexplained anomaly that drives the whole extract.',
        },
        {
          feature: 'Planted clues + withheld information',
          note: 'the wet coat, the bus ticket and the chain "on … all night" are selected details the reader is invited to weigh; the writer withholds the explanation.',
        },
        {
          feature: 'Controlled unease in an ordinary scene',
          note: '"the kettle ticking behind me" and the careful, quiet movement make a domestic setting feel charged and suspicious.',
        },
      ],
    },
    question: {
      prompt: 'How does the writer create a sense of mystery and unease in this extract? (4)',
      marks: 4,
      model:
        'The writer opens an unanswered question and then controls what the reader is allowed to know. The flat statement "This morning there were three" disturbs an established norm and immediately makes the reader ask how the third coat arrived. The writer plants selective clues - it is "wet at the shoulders" with "a single bus ticket folded into the breast pocket" - inviting the reader to interpret while withholding the answer, which sustains the mystery. Unease is built structurally by setting the strange detail against insistent normality: the kettle "ticking," the chain that had been "on … all night," and the narrator moving "very quietly." Ending on the window "open the width of two fingers" leaves the question unresolved and tilts the ordinary house into threat.',
    },
  },
  {
    key: 'science fiction',
    title: 'Science fiction',
    oneLine:
      'A change to technology, science or society is taken seriously and followed through, so the story explores the human consequences of one altered premise.',
    conventions: [
      'A clear "what if" premise - one rule about the world is changed and held to.',
      'Consequences followed logically, especially the human and ethical cost.',
      'A speculative setting (future, off-world, altered society) presented as normal to its characters.',
      'Ideas dramatised through a character’s experience rather than explained as theory.',
    ],
    settingsCharacters:
      'Settings are estranged but internally consistent - a habitat, a changed Earth, a system run by a new technology, treated as ordinary by those inside it. Characters are people living the consequences of the premise, often someone who notices or questions a rule others accept.',
    languageAtmosphere:
      'Writers naturalise the unfamiliar: invented terms used casually, technical detail kept functional, and the strange described in plain English so it feels lived-in. Atmosphere ranges from cool control to quiet wrongness; the effect comes from the gap between calm tone and unsettling premise.',
    criticalLens: [
      'Identify the single "what if" and check the writer follows its consequences honestly rather than for spectacle.',
      'Notice how invented terms are introduced casually - the lack of explanation is what makes the world feel real.',
      'Read for the human or ethical question underneath the technology; that is usually the writer’s real subject.',
    ],
    extract: {
      title: 'Extract - "Allocation"',
      lines: [
        'On her sixteenth birthday Tomi was issued, like everyone, with her hours. The slate woke her at the same grey time and showed the number in the same plain font: four thousand, two hundred and ten. It did not say of what. Her mother had spent hers carefully and smiled about it, the way people smiled at the weather. Tomi pressed her thumb to the slate to confirm receipt, because confirmation was not optional, and watched the number settle a single digit lower while she watched. She did not ask anyone what the hours were for. Nobody, she had noticed, ever did.',
      ],
      annotations: [
        {
          feature: 'Single "what if" premise',
          note: 'people are "issued … with her hours" - one altered rule about society that the extract takes seriously.',
        },
        {
          feature: 'Invented system naturalised in plain English',
          note: '"the slate," "confirm receipt," "confirmation was not optional" are delivered flatly, as ordinary to Tomi, so the world feels lived-in.',
        },
        {
          feature: 'Quiet wrongness through tone',
          note: 'the calm voice against "It did not say of what" and "Nobody … ever did" creates unease and points to the ethical question under the technology.',
        },
      ],
    },
    question: {
      prompt:
        'How does the writer make the world of the extract feel both ordinary and unsettling? (4)',
      marks: 4,
      model:
        'The writer makes the strange premise feel normal and then lets its wrongness show through the calm. The system is introduced flatly - Tomi is "issued, like everyone, with her hours" and confirms it because "confirmation was not optional" - and this matter-of-fact language naturalises a disturbing rule so the reader accepts the world as the characters do. Unease is generated by the gap between that calm tone and the controlled withholding of meaning: the slate "did not say of what," and the number drops "a single digit lower while she watched," implying time is being spent or taken without consent. The closing structural beat - "Nobody, she had noticed, ever did" - turns the silence into the real subject, raising an ethical question the writer never states outright.',
    },
  },
]

const TOOLKIT = GUIDED_READING_PROMPTS.fiction

export default async function FictionGenresPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <>
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          {
            name: 'Fiction',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/fiction',
          },
          { name: 'Fiction genres', url: PAGE_URL },
        ]}
      />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          iLowerSecondary English
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary/fiction" className="hover:text-foreground">
          Fiction
        </Link>
        <span> · </span>
        <span>Fiction genres</span>
      </p>

      <h1>The five fiction genres</h1>
      <p className="lead">
        The unseen fiction text on the reading paper can come from any of five genres:{' '}
        {GENRE_ORDER.map((g, i) => (
          <span key={g}>
            {i === GENRE_ORDER.length - 1 ? 'and ' : ''}
            <strong>{g}</strong>
            {i < GENRE_ORDER.length - 1 ? ', ' : '.'}
          </span>
        ))}{' '}
        You will not be told the genre, so part of reading well is recognising the conventions a
        writer is using and asking why. This guide takes each genre in turn: what defines it, the
        settings and characters it tends to use, the language and atmosphere a writer builds with
        it, and what to look for when you read it critically. Every extract below is an original
        passage written for this guide.
      </p>

      {GENRES.map((g) => (
        <section key={g.key} className="my-12">
          <h2 className="capitalize">{g.title}</h2>
          <p>{g.oneLine}</p>

          <h3 className="text-base font-semibold mt-6 mb-2">Defining conventions</h3>
          <ul className="not-prose my-3 space-y-2">
            {g.conventions.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-mono">›</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="not-prose my-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                Settings &amp; characters
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {g.settingsCharacters}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                Language &amp; atmosphere
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {g.languageAtmosphere}
              </p>
            </div>
          </div>

          <h3 className="text-base font-semibold mt-6 mb-2">
            What to look for when reading critically
          </h3>
          <ul className="not-prose my-3 space-y-2">
            {g.criticalLens.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-mono">→</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="not-prose my-6 rounded-xl border border-border/60 bg-card p-5 sm:p-6">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
              Original extract
            </p>
            <h3 className="text-base font-semibold mb-3">{g.extract.title}</h3>
            <div className="space-y-3 border-l-2 border-primary/30 pl-4 mb-5">
              {g.extract.lines.map((line, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Genre features annotated
            </p>
            <div className="space-y-3 mb-5">
              {g.extract.annotations.map((a) => (
                <div
                  key={a.feature}
                  className="rounded-lg border border-primary/30 bg-primary/5 p-4"
                >
                  <p className="text-xs font-medium text-foreground mb-1">{a.feature}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{a.note}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-border/50 bg-background p-4">
              <p className="text-sm font-medium mb-2">
                <span className="font-mono text-primary mr-2">Q.</span>
                {g.question.prompt}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">
                  Model answer ({g.question.marks} marks):{' '}
                </span>
                {g.question.model}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="my-12">
        <h2>A cross-genre reading toolkit</h2>
        <p>
          Whatever genre the unseen fiction text turns out to be, the same questions help you read
          it closely. These prompts come from the iLowerSecondary guided-reading framework for
          fiction, grouped under characters, plot and structure, and style and language. Run them
          over any extract before you start answering.
        </p>
        <div className="not-prose my-6 space-y-4">
          {(Object.keys(TOOLKIT) as (keyof typeof TOOLKIT)[]).map((group) => (
            <div key={group} className="rounded-xl border border-border/60 bg-card p-5 sm:p-6">
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-primary mb-3">
                {group}
              </p>
              <ul className="space-y-2">
                {TOOLKIT[group].map((prompt) => (
                  <li
                    key={prompt}
                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary font-mono">☐</span>
                    <span>{prompt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          A practical routine: first decide which genre the conventions point to, then use the
          toolkit to gather evidence, and only then plan your answer. Naming the genre is not the
          goal in itself - it sharpens what you expect, so you read the writer&apos;s choices more
          critically.
        </p>
      </section>

      <footer className="mt-16 border-t border-border/60 pt-6">
        <p className="text-[11px] leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}

export const metadata: Metadata = {
  openGraph: {
    title: 'The five fiction genres - adventure, fantasy, historical, mystery, sci-fi',
    description:
      'A reading guide to the five iLowerSecondary English fiction genres: defining conventions, settings and characters, language and atmosphere, and how to read each critically - with an original annotated extract, analysis question and model answer per genre, plus a cross-genre reading toolkit.',
  },
  title: 'The five fiction genres - a critical reading guide',
  description:
    'A reading guide to the five iLowerSecondary English fiction genres: defining conventions, settings and characters, language and atmosphere, and how to read each critically - with an original annotated extract, analysis question and model answer per genre, plus a cross-genre reading toolkit.',
  alternates: { canonical: PAGE_URL },
}
