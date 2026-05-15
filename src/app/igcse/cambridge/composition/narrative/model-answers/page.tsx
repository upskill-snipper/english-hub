import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Grade 9 Narrative Model Answers — Cambridge IGCSE',
    description:
      'Three full Grade 9 Cambridge IGCSE narrative compositions with paragraph-by-paragraph examiner commentary on structure, character, dialogue and tension.',
  },
  title: 'Grade 9 Narrative Model Answers — Cambridge IGCSE',
  description:
    'Three full Grade 9 Cambridge IGCSE narrative compositions with paragraph-by-paragraph examiner commentary on structure, character, dialogue and tension.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/composition/narrative/model-answers',
  },
}

const models = [
  {
    title: 'The Visitor',
    mark: '40/40',
    paragraphs: [
      {
        text: 'The knock at the door came just after eleven, and I knew before I opened it exactly who it was going to be. There is a way my grandmother knocks — three light taps, a pause, and then a fourth, apologetic one, as if she has only just remembered she ought not to bother anyone at this time of night.',
        note: 'In medias res opening on a specific sound. The four-tap knock is a small, precise character detail that doubles as an opening image. Note: the narrator already knows who it is — tension comes from why.',
      },
      {
        text: 'She had come on the bus from Cricklewood, all the way across the city in the rain. Her mustard cardigan was dark along the shoulders. She had not brought her stick, which was the first thing I noticed, and the second thing was that her hands were empty — no shopping, no letter, no plastic bag of the apples she usually brought for my mother.',
        note: 'Mid-shot: three specific, unusual details that all carry meaning (the cardigan, the missing stick, the empty hands). The reader is building the answer without being told it.',
      },
      {
        text: '“Is your mother in,” she said. It was not exactly a question. She stepped past me into the hallway, smelling of rain and of the peppermints she always kept loose in her pocket.',
        note: 'Dialogue punctuation flawless — no question mark, because it is not really being asked. Sensory detail (peppermints) layered under speech. Action beat replaces a tag.',
      },
      {
        text: 'I had been told, half a dozen times by my father, not to let her upstairs if she came alone. But she was already on the second step, and the banister was taking her weight as if it remembered her from forty years ago, and I thought: if I stop her now, I will be the one who stopped her. So I did not stop her.',
        note: 'Turning point. Interior monologue (direct + free indirect). The sentence structure slows deliberately — a long compound sentence for a slow ascent. The decision is made by not deciding, which is character.',
      },
      {
        text: 'At the top of the stairs, she paused outside my mother\u2019s bedroom door. She did not knock this time. She put her palm against the wood, very gently, the way you might test a forehead for fever, and stood there for a long moment in the quiet of the landing. Then she turned around and came back down.',
        note: "The climax is not a scene of confrontation — it is a scene of restraint. The palm-on-the-door gesture is the show-don't-tell moment. The reader understands without being told.",
      },
      {
        text: 'At the front door she looked at me, and I have never seen anyone look so tired and so unsurprised at the same time. “Tell her I was here,” she said, “if you think she would want to know.” And then she was back out into the rain, her mustard cardigan already darker at the shoulders, three light taps and a fourth one echoing softly in my head for the rest of the night.',
        note: 'Closing image. The fourth tap returns from paragraph one — a deliberate echo. "Tired and unsurprised" is the kind of paired, psychologically precise phrase that reads as top-band.',
      },
    ],
  },
  {
    title: 'Too Late',
    mark: '40/40',
    paragraphs: [
      {
        text: 'By the time I reached the station, the 7:42 had already pulled away, and my brother was standing alone on the far platform with his back to me. His suitcase was at his feet. From across the tracks it looked smaller than I remembered, or maybe he did, or maybe both.',
        note: 'Classic in medias res opening — we begin mid-action, in a moment that already signals loss. The shrinking suitcase/brother is a subtle, unexplained image, trusted to the reader.',
      },
      {
        text: 'I shouted his name once. The wind took it easily; he did not turn. Between us, the tracks were a trench of black stones and old grease, and the station announcer was saying something about the next train in a voice designed to be ignored.',
        note: 'Rising tension. Sound imagery (voice "designed to be ignored") and specific visual detail (black stones, old grease). Note the sentence variety — a four-word sentence next to a long one.',
      },
      {
        text: "I ran for the underpass. The tiled walls threw my footsteps back at me, louder each time, and I thought, stupidly, that he might be gone by the time I came up the other side — that the whole station might be gone, that I would come up into an empty sky with nothing left but the announcer's voice.",
        note: 'Turning point candidate — physical movement, interior panic. The repeated structure "gone... gone... nothing left but" builds urgency without melodrama.',
      },
      {
        text: 'He was still there. He had not turned. When I reached him, out of breath, I did not know what I had run up to say, and so for perhaps five seconds I said nothing, and the two of us stood and watched a newspaper page turn itself over on the bench.',
        note: 'Anti-climax — the emotional beat is silence and a newspaper. Restraint is the top-band move here. Many students would fill this moment with speech.',
      },
      {
        text: "“You came.” He did not turn his head. “I wasn't sure you would.”\nI wanted to tell him I nearly didn't. I wanted to tell him that if the 7:42 had been a minute later, I would have stayed at the café for another coffee, and he would have gone without me saying anything, and I would have lived with that for the rest of my life.\nI said, instead, “Of course I came.”",
        note: 'Dialogue showing subtext — the gap between what is said and what is thought is the whole point. "Of course I came" reads as kindness and lie at the same time.',
      },
      {
        text: 'The 8:14 pulled in, exactly on time. He picked up the suitcase — it looked normal-sized in his hand now — and stepped on board without looking back. Through the window he raised one hand, very briefly, and I raised mine back, and the train pulled out, and that, as far as I know, was the last time.',
        note: 'Closing image echoes the opening: the suitcase, the back, the not-turning. The final "as far as I know" is a masterstroke — it admits the uncertainty of the narrator, which is the truest note a short story can end on.',
      },
    ],
  },
  {
    title: 'The Prize',
    mark: '40/40',
    paragraphs: [
      {
        text: 'There was a silence in the hall when they read out my name, and then a small, embarrassed wave of clapping, and then my cousin Leena\u2019s voice from two rows behind me saying, a little too loudly, “Oh.”',
        note: 'Opening: a scene, a sound, a reaction. "Oh" — a one-word line of dialogue — tells us half the story at once. Economy is everything at this length.',
      },
      {
        text: 'I walked up to the front of the hall, and my shoes squeaked in the way I had been trying to make them not squeak for the whole assembly. Mr Parr handed me the certificate in a white cardboard frame, and gave me one of his brief, tight smiles that are not really meant as encouragement.',
        note: 'Physical detail (the squeaking shoes) used for comedy and character. "Tight smiles that are not really meant as encouragement" is precise in a way generic writing is not.',
      },
      {
        text: 'I had been practising my thank-you speech in my head for four days. I had practised it in the bath, in the school bus, once at dinner (which is how my mother found out about the prize before I had meant to tell her). In my head, I had been confident. In my head, I had been funny.',
        note: 'Interior monologue drawing on the narrator\'s history. Parenthetical detail (the dinner reveal) is a small, warm joke. Repetition "In my head" sets up a deliberate contrast coming next.',
      },
      {
        text: 'Instead, what I said was, “Thank you.” And then I said it again, because I was not sure anyone had heard me, and this second “thank you” came out louder than I had planned and slightly squeakier than the shoes, and a boy at the back of the hall laughed, a sharp bright laugh like a stone on tile.',
        note: 'Turning point. The over-practised speech becomes two awkward words. The laugh "like a stone on tile" is a precise, fresh simile. Note how tension comes not from danger but from embarrassment — the examiner rewards this if it is controlled.',
      },
      {
        text: 'Back in my seat, Leena did not say anything. She patted my knee once, which was more than I had expected, and less than I needed. I watched the rest of the assembly through the blur that comes just before crying but does not always get there. The certificate, in its white cardboard frame, was sitting on my knees, and I could not remember for a moment what it was for.',
        note: '"More than I had expected, and less than I needed" is the kind of paired psychological phrase that earns top-band marks. "The blur that comes just before crying but does not always get there" — specific, restrained, honest.',
      },
      {
        text: 'When we got home, my mother put the certificate on the mantelpiece next to the photograph of my grandfather, who had won things and been able to talk about them afterwards. I stood in the doorway watching her. The paper leaned against the glass of the picture frame, and for the first time all day I almost laughed. It looked, from the doorway, as if he were holding it up for me.',
        note: 'Closing image. The certificate echoes from paragraph two. The grandfather "holding it up" is an emotionally precise image — the closest the story comes to a resolution. Note the final line does not spell the meaning out.',
      },
    ],
  },
]

export default async function NarrativeModelAnswersPage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <Button
        variant="ghost"
        size="sm"
        render={<Link href="/igcse/cambridge/composition/narrative" />}
      >
        <ChevronLeft className="size-3.5" />
        Back to narrative
      </Button>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE
            </Badge>
            <Badge variant="secondary">Grade 9 models</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Model narrative compositions
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Three full Grade 9 Cambridge IGCSE short stories with paragraph-by-paragraph examiner
            annotations. Each one demonstrates a different structural approach: slow reveal, in
            medias res, and small-scale emotional turn.
          </p>
        </div>
      </section>

      {models.map((m) => (
        <section key={m.title} className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="size-5 text-primary" />
              <h2 className="text-heading-lg font-heading text-foreground">{m.title}</h2>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20">{m.mark}</Badge>
          </div>

          {m.paragraphs.map((p, i) => (
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
      ))}
    </div>
  )
}
