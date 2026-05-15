import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Sparkles, ChevronLeft, FileText, Feather, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Paper 2 Model Answers — IGCSE Language A 0500',
    description:
      'Grade A*/9 model answers for Cambridge IGCSE 0500 Paper 2: directed writing (letter, article, speech) and composition (descriptive and narrative). With examiner annotations.',
  },
  title: 'Paper 2 Model Answers — IGCSE Language A 0500',
  description:
    'Grade A*/9 model answers for Cambridge IGCSE 0500 Paper 2: directed writing (letter, article, speech) and composition (descriptive and narrative). With examiner annotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/paper-2/model-answers',
  },
}

/* ────────────────────────────────────────────────────────────────────────────
   DIRECTED WRITING MODELS (3 forms)
   ──────────────────────────────────────────────────────────────────────────── */

const directedModels = [
  {
    title: 'Directed writing: Formal letter',
    form: 'Letter',
    grade: 'A*/9',
    mark: '40/40',
    scenario:
      'Your local council plans to close the only public library in your area. Using ideas from the passage about the value of libraries, write a letter to the council arguing against the closure.',
    paragraphs: [
      {
        text: 'Dear Councillor Reeves,\n\nI am writing to express my deep concern regarding the proposed closure of Elm Road Library, which has served this community for over forty years. While I understand the council faces significant budgetary pressures, I believe that closing the library would cause far greater harm than the savings it would generate.',
        note: 'Correct formal letter conventions: salutation, clear purpose stated immediately, concession to the opposing view ("I understand the council faces..."). The tone is measured and respectful -- not aggressive. This is the register examiners reward.',
      },
      {
        text: "As the passage makes clear, libraries are not simply repositories of books -- they are essential community spaces. For many elderly residents in this area, the library is the only place they visit regularly outside their own homes. Removing it would deepen the isolation that already affects a significant proportion of our ageing population. Furthermore, the library's free internet access is relied upon by families who cannot afford home broadband, and by job seekers who depend on it to search and apply for employment.",
        note: 'Two passage ideas (community space, internet access) are adapted to the local context -- the student does not simply repeat the passage but applies it. This is the key to top-band directed writing: use the source material as a springboard, not a script.',
      },
      {
        text: 'The passage also highlights the educational role of libraries, and this is particularly relevant here. Elm Road Library runs a weekly reading group for under-fives and a homework club for secondary students. These are not luxuries; they directly support the attainment of children in an area where educational outcomes already fall below the national average. To remove them would be to widen an inequality that the council claims, in its own strategic plan, to be committed to narrowing.',
        note: 'Strong paragraph: passage idea (educational role) + local detail (reading group, homework club) + persuasive turn (using the council\'s own language against it). The final sentence is rhetorically powerful without being rude. Examiners note this as "sophisticated engagement with audience."',
      },
      {
        text: 'I would urge the council to explore alternatives before making this decision irreversible: reduced opening hours, shared premises with the community centre, or a volunteer staffing model. Other councils have successfully implemented such measures, and I would welcome the opportunity to discuss them further.\n\nYours sincerely,\nAlex Harrington',
        note: 'Constructive close: offers solutions rather than just complaining. Correct sign-off ("Yours sincerely" after a named salutation). The tone throughout has been formal, persuasive, and audience-aware -- all three are rewarded in the mark scheme.',
      },
    ],
  },
  {
    title: 'Directed writing: Magazine article',
    form: 'Article',
    grade: 'A*/9',
    mark: '40/40',
    scenario:
      'A school magazine is running a feature on whether technology helps or hinders learning. Using ideas from the passage, write an article giving your views.',
    paragraphs: [
      {
        text: 'THE SCREEN GENERATION: SMARTER OR JUST FASTER?\n\nWalk into any classroom in 2025 and the first thing you will notice is the glow. Thirty screens, thirty bent heads, thirty pairs of thumbs moving in patterns that would have baffled a typist twenty years ago. Technology has not just arrived in education -- it has taken up permanent residence, rearranged the furniture, and changed the locks.',
        note: 'Article conventions: headline in capitals, engaging opening image, direct address ("you will notice"). The extended metaphor ("taken up permanent residence, rearranged the furniture") is witty and original. This signals to the examiner that the student understands the form.',
      },
      {
        text: 'The passage argues, persuasively, that digital tools have democratised access to knowledge. A student in rural Kenya can now watch the same lecture as a student at Cambridge, and this is genuinely revolutionary. Online platforms allow learners to pause, rewind and revisit material at their own pace, and for students with additional needs this flexibility can be transformative.',
        note: 'Passage ideas used with attribution ("The passage argues"). The student adds their own evaluation ("genuinely revolutionary") and extends the point with an original example (students with additional needs). This balance of source material and personal voice is what the examiner means by "effective use of the reading material."',
      },
      {
        text: 'But here is the difficulty that the passage does not quite address: access to information is not the same as understanding. I can look up the causes of the First World War in four seconds, but that does not mean I have thought about them. The speed of digital learning can create an illusion of mastery -- students believe they know something because they have read it, when in fact they have only seen it. And the constant notifications, the social media tabs, the reflex to check a phone every ninety seconds -- these are not minor distractions. They are an architecture designed to prevent exactly the kind of sustained, difficult thinking that real learning requires.',
        note: 'This paragraph moves beyond the passage to offer an original counter-argument. The phrase "architecture designed to prevent... sustained, difficult thinking" is sophisticated and specific. The examiner rewards candidates who engage critically with the source material rather than passively summarising it.',
      },
      {
        text: 'Technology, then, is neither saviour nor villain. It is a tool, and like any tool, its value depends entirely on the hand that holds it. Perhaps the real question is not whether we should use screens in classrooms, but whether we are teaching students to use them wisely -- or simply teaching them to use them.',
        note: 'Strong article ending: balanced conclusion, memorable final line with a rhetorical turn. The student has maintained an article register throughout -- engaging, opinionated, direct -- without losing formality. Full marks for both content and language.',
      },
    ],
  },
  {
    title: 'Directed writing: Speech',
    form: 'Speech',
    grade: 'A*/9',
    mark: '40/40',
    scenario:
      'You have been asked to give a speech to your year group about the importance of reading for pleasure. Using ideas from the passage, write the words of your speech.',
    paragraphs: [
      {
        text: 'Good morning everyone. I want to start with a confession: I did not read a single book for pleasure between the ages of thirteen and sixteen. Not one. I read what I was told to read for English, I read the backs of cereal boxes, and I read approximately four thousand Instagram captions a day. But a book? No.',
        note: 'Speech conventions: greeting, direct address, personal anecdote, humour. The confession creates an immediate connection with the audience (teenagers who also do not read). The examiner rewards this as "strong awareness of audience and purpose."',
      },
      {
        text: "And then, in the middle of a particularly boring half-term, I picked up a book my mother had left on the kitchen table. I cannot even remember the title. But I remember the feeling -- the strange, almost physical sensation of being somewhere else entirely, of hearing a voice that was not my own but somehow understood exactly what I was thinking. That is what reading does. It does not just give you information. It gives you someone else's mind to live in for a while.",
        note: "The student transitions from anecdote to the passage's central argument (reading as empathy) but phrases it in their own voice. \"Someone else's mind to live in\" is more powerful than any passage quotation because it is clearly the student's own thought. This is the highest level of directed writing.",
      },
      {
        text: 'The passage we read this morning tells us that reading improves vocabulary, develops concentration, and reduces stress. All true. But I think those are the boring reasons, and if I stand up here and list health benefits at you, I will lose you in about fifteen seconds. So let me give you the real reason: reading is the only legal way to be someone else. It is the only way to know what it feels like to be a soldier in 1917, or a girl growing up in Lagos, or an astronaut watching the Earth shrink behind you. No film does this. No game does this. Only a book puts you so far inside another person that you forget, for a moment, that you are you.',
        note: 'Masterful speech technique: acknowledges the audience directly ("I will lose you"), dismisses the dry arguments in favour of an emotional one, uses the rule of three ("a soldier... a girl... an astronaut"). The final sentence is simple, direct, and memorable -- exactly what a speech needs.',
      },
      {
        text: 'So here is my challenge. One book. Any book. Before the end of this term. Not because your teacher told you to, not because it will help your grades -- though it will -- but because you deserve to know what it feels like to disappear into a story and come back slightly different. Thank you.',
        note: 'Call to action -- essential for a speech. The challenge is specific ("one book, before end of term") and the motivation is emotional, not academic. "Thank you" closes correctly. Throughout, the register has been conversational, warm, and persuasive -- perfect for a peer audience. Full marks.',
      },
    ],
  },
]

/* ────────────────────────────────────────────────────────────────────────────
   DESCRIPTIVE WRITING MODEL
   ──────────────────────────────────────────────────────────────────────────── */

const descriptiveModel = {
  title: 'Descriptive composition: A railway station at dawn',
  grade: 'A*/9',
  mark: '40/40',
  paragraphs: [
    {
      text: "The station existed in the hour before it was needed. The departures board was a grid of amber letters that no one was reading, and the coffee kiosk was still shuttered, its corrugated door holding the ghost of yesterday's espresso in a faint, bitter sweetness that hung in the cold air like a promise.",
      note: 'Opening establishes time and atmosphere without stating "it was dawn." Personification of the station ("existed in the hour before it was needed") gives it character. Smell introduced early -- "ghost of yesterday\'s espresso" is unexpected and precise. The simile "like a promise" carries emotional weight without being sentimental.',
    },
    {
      text: 'A pigeon walked the length of Platform 3 with the careful, self-important stride of a building inspector. It paused at each bench, examined the underside with one tilted eye, and moved on, apparently satisfied. The only other movement was the clock, its second hand dragging itself around the face as if the effort of keeping time at this hour were almost too much.',
      note: 'Extended personification of both the pigeon (building inspector) and the clock (exhausted timekeeper). Humour is rare in descriptive writing -- the examiner notes it as evidence of voice and control. The pigeon detail is the kind of observed, specific image that reads as genuine rather than rehearsed.',
    },
    {
      text: 'Then light. It came from the east end of the platform, where the tracks curved out of sight, a thin gold line drawn across the rails and the gravel and the base of the signal post. It found the puddles first and turned them into coins. It found the edges of the benches and made them sharp. It crept along the platform floor like a tide coming in, slow and certain, and as it reached the place where I was standing, I felt the cold begin to loosen, as if the station were taking its first deep breath of the day.',
      note: 'The shift: dawn light arriving. Anaphora ("It found... It found... It crept") creates rhythm and momentum. Puddles as coins -- fresh metaphor. The final personification (station breathing) ties back to the opening, giving the piece circular structure. Examiners note this as "crafted and deliberate."',
    },
    {
      text: 'A man appeared at the far end of the platform, coat buttoned to the collar, briefcase held close to his body like a shield. He did not look at the departures board. He knew where he was going -- you could tell from the way he stood, weight on one foot, eyes fixed on the empty track, waiting for a shape to appear around the curve. Behind him, the coffee kiosk rattled open, and the station, at last, began to fill with the small, ordinary sounds of a day deciding to begin.',
      note: 'Human figure introduced late -- a deliberate choice that keeps the description centred on the place. The man is characterised entirely through physical detail (coat, briefcase, posture) with no backstory. The final image echoes the opening ("the hour before it was needed" / "a day deciding to begin"), giving the piece a satisfying frame. The examiner reads this as controlled, evocative, and structurally complete.',
    },
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
   NARRATIVE WRITING MODEL
   ──────────────────────────────────────────────────────────────────────────── */

const narrativeModel = {
  title: 'Narrative composition: The Envelope',
  grade: 'A*/9',
  mark: '40/40',
  paragraphs: [
    {
      text: 'The envelope had been sitting on the hall table for three days before I opened it. It was not that I did not know what was inside -- I knew exactly what was inside. It was a thin, cream-coloured envelope with a typed address and no return label, and the postmark said Cambridge, and Cambridge only ever sent one kind of letter to people like me.',
      note: 'In medias res opening centred on a single object. Tension built through delay ("three days before I opened it") and the narrator\'s certainty about the contents. "People like me" invites the reader to fill in the gap -- inference rather than exposition. The examiner rewards this restraint.',
    },
    {
      text: 'My mother had noticed it first. She had come into the hallway with a basket of washing and stopped so suddenly that a pillowcase slid off the top and landed on the floor, and neither of us picked it up. She looked at me. I looked at the envelope. The pillowcase lay between us like a small white surrender.',
      note: 'Character revealed through action, not description. The dropped pillowcase is a tiny, specific physical detail that carries enormous emotional weight. "Small white surrender" is a controlled metaphor -- not overwritten. The scene is built from three images: the washing, the eye contact, the pillowcase.',
    },
    {
      text: '"You should open it," she said, on the first evening.\n"I know," I said.\n"You should open it," she said, on the second evening.\n"I know," I said.\nOn the third evening, she did not say anything. She put a cup of tea next to the envelope and went upstairs, and I sat at the hall table in the half-light and thought about all the versions of my life that were folded up inside that cream-coloured paper.',
      note: 'Repetition used structurally -- the two-line exchange on days one and two, then silence on day three. This is show-don\'t-tell: the mother\'s silence speaks louder than her words. "All the versions of my life" is the thematic heart of the piece. The examiner notes the sentence variety: short dialogue, then a long reflective sentence.',
    },
    {
      text: 'I opened it standing up, which I had not planned. I had imagined sitting down, taking a breath, sliding a finger under the seal carefully, the way people do in films. Instead I just picked it up and tore it open, quickly, the way you pull off a plaster, and the sound of the paper tearing was the loudest thing in the house.',
      note: 'The climax is handled through pace and physical detail. The contrast between the imagined version (slow, cinematic) and the real version (fast, messy) is psychologically true. "The loudest thing in the house" is a strong sensory detail -- it tells us how silent the house has been, how much has been held back.',
    },
    {
      text: 'It said yes.\n\nI read it twice, because the first time I read it I did not believe it, and the second time I read it I believed it but did not know what to do with the believing. I put the letter back on the table and went to the bottom of the stairs and called up to my mother, and my voice, when it came, was steadier than I had expected.\n\n"Mum," I said. "It said yes."',
      note: 'Two-word paragraph for the revelation -- maximum impact through minimum language. The emotional processing is described honestly: "did not know what to do with the believing" is a phrase that feels earned rather than manufactured. The final line mirrors the mother\'s earlier dialogue, bringing the relationship full circle. The examiner reads this as a piece with "a controlled, resonant ending that avoids sentimentality."',
    },
  ],
}

export default async function Paper2ModelAnswersPage() {
  await requireIgcseBoard(['cambridge-0500'])

  return (
    <div className="space-y-10 pb-16">
      <Button
        variant="ghost"
        size="sm"
        render={<Link href="/igcse/cambridge/0500/paper-2" />}
        className="gap-1"
      >
        <ChevronLeft className="size-4" />
        Paper 2 hub
      </Button>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE 0500
            </Badge>
            <Badge variant="secondary">Paper 2 models</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Paper 2 model answers
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Five model compositions for Paper 2: three directed writing responses (letter, article,
            speech) and two Section B compositions (descriptive and narrative). Every paragraph
            includes examiner annotations explaining what earns top marks.
          </p>
        </div>
      </section>

      {/* ── Section A: Directed Writing ───────────────────────────────── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Section A — Directed writing
          </h2>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Directed writing asks you to respond to a reading passage in a specific form (letter,
            article, speech, report). You are marked on how well you use ideas from the passage, how
            effectively you write in the required form, and the quality of your language. The best
            answers adapt and extend the source material rather than simply copying it.
          </p>
        </div>

        {directedModels.map((model) => (
          <div key={model.title} className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="size-5 text-primary" />
                <h3 className="text-heading-md font-heading text-foreground">{model.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{model.form}</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">{model.mark}</Badge>
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <p className="text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Task
              </p>
              <p className="mt-1 text-body-sm italic text-foreground">{model.scenario}</p>
            </div>

            {model.paragraphs.map((p, i) => (
              <Card key={i}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
                    {i === 0
                      ? 'Opening'
                      : i === model.paragraphs.length - 1
                        ? 'Closing'
                        : `Paragraph ${i + 1}`}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="whitespace-pre-line text-body-md leading-relaxed text-foreground">
                    {p.text}
                  </p>
                  <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                    <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                      Examiner note
                    </p>
                    <p className="mt-2 text-body-sm text-foreground">{p.note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </section>

      {/* ── Section B: Descriptive ────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Feather className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Section B — Descriptive writing
          </h2>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Section B offers a choice between descriptive and narrative writing. Descriptive
            compositions are marked on the quality of your imagery, vocabulary, sentence variety,
            and structural control. The best descriptive writing creates atmosphere through precise,
            original sensory detail -- not through plot.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="size-5 text-primary" />
            <h3 className="text-heading-md font-heading text-foreground">
              {descriptiveModel.title}
            </h3>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            {descriptiveModel.mark}
          </Badge>
        </div>

        {descriptiveModel.paragraphs.map((p, i) => (
          <Card key={i}>
            <CardHeader className="pb-3">
              <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
                Paragraph {i + 1}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="whitespace-pre-line text-body-md leading-relaxed text-foreground">
                {p.text}
              </p>
              <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                  Examiner note
                </p>
                <p className="mt-2 text-body-sm text-foreground">{p.note}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* ── Section B: Narrative ──────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Section B — Narrative writing
          </h2>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Narrative compositions are marked on plot structure, characterisation, dialogue,
            tension, and language quality. The best narratives are small in scale (one scene, one
            turning point) with precise physical detail and restrained emotion. Avoid car chases,
            dream endings, and plots that try to cover years in 500 words.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="size-5 text-primary" />
            <h3 className="text-heading-md font-heading text-foreground">{narrativeModel.title}</h3>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            {narrativeModel.mark}
          </Badge>
        </div>

        {narrativeModel.paragraphs.map((p, i) => (
          <Card key={i}>
            <CardHeader className="pb-3">
              <CardTitle className="text-body-xs uppercase tracking-wide text-muted-foreground">
                Paragraph {i + 1}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="whitespace-pre-line text-body-md leading-relaxed text-foreground">
                {p.text}
              </p>
              <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                  Examiner note
                </p>
                <p className="mt-2 text-body-sm text-foreground">{p.note}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">
        Aligns with Cambridge syllabus 0500 &mdash; Paper 2 Writing
      </p>
    </div>
  )
}
