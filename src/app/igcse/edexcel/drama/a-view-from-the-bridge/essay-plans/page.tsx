import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'A View from the Bridge Essay Plans — Edexcel IGCSE Literature',
  description:
    'Five ready-to-use essay plans for A View from the Bridge covering Eddie\u2019s downfall, masculinity, honour, Alfieri\u2019s role and dramatic techniques.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/drama/a-view-from-the-bridge/essay-plans',
  },
}

const essays = [
  {
    question:
      'How does Miller present Eddie Carbone as a tragic figure in A View from the Bridge?',
    thesis:
      'Miller adapts the Greek tragic model \u2014 hamartia, peripeteia, anagnorisis \u2014 to a 1950s Brooklyn longshoreman, arguing that tragedy can belong to ordinary people.',
    paragraphs: [
      {
        point: 'Alfieri\u2019s prologue frames Eddie as tragic from the start',
        detail:
          'Alfieri\u2019s use of the past tense ("This one\u2019s name was Eddie Carbone") announces the ending before the beginning. Miller borrows the Greek chorus convention to signal inevitability and position the audience as witnesses to a known catastrophe.',
        quote: '"This one\u2019s name was Eddie Carbone"',
      },
      {
        point: 'Eddie\u2019s hamartia: unacknowledged desire',
        detail:
          'Eddie\u2019s tragic flaw is not his love for Catherine but his inability to recognise it. He displaces his jealousy onto Rodolpho ("the guy ain\u2019t right"), turning a psychological problem into a social accusation. Miller shows that self-deception is the engine of tragedy.',
        quote: '"The guy ain\u2019t right"',
      },
      {
        point: 'The betrayal as peripeteia',
        detail:
          'Eddie\u2019s phone call to Immigration is the play\u2019s turning point. It reverses his status: from respected community member to despised informer. Miller makes the betrayal feel both shocking and inevitable \u2014 the logic of Eddie\u2019s unspoken feelings leads him here.',
        quote: '"You want somethin\u2019 else, Eddie, and you can never have her!"',
      },
      {
        point: 'The final fight and death',
        detail:
          'Eddie pulls a knife on Marco and is killed with his own blade. The image of self-destruction is literal: Eddie is destroyed by the weapon he brought. His dying words \u2014 "Oh, B., my B.!" \u2014 suggest a last moment of recognition that Beatrice, not Catherine, was his real loss.',
        quote: '"Oh, B., my B.!"',
      },
      {
        point: 'Alfieri\u2019s ambiguous epitaph',
        detail:
          'Alfieri\u2019s closing speech refuses simple judgement. "He allowed himself to be wholly known" is both tribute and diagnosis. Miller uses the chorus to hold pity and terror in balance, the classical emotional response to tragedy.',
        quote: '"He allowed himself to be wholly known"',
      },
    ],
  },
  {
    question:
      'How does Miller explore ideas about masculinity in A View from the Bridge?',
    thesis:
      'Miller presents 1950s working-class masculinity as a rigid code that destroys those who police it most aggressively, while offering Rodolpho as an alternative model Eddie cannot accept.',
    paragraphs: [
      {
        point: 'Eddie\u2019s definition of manhood',
        detail:
          'Eddie\u2019s masculinity is rooted in physical labour, provider status and control of his household. He cannot articulate his feelings and resorts to action \u2014 the boxing lesson, the forced kiss \u2014 when language fails him. Miller shows masculinity as a vocabulary problem.',
        quote: '"I was just tellin\u2019 him the basics"',
      },
      {
        point: 'Rodolpho as threat to gender norms',
        detail:
          'Rodolpho\u2019s singing, cooking and blond hair violate Eddie\u2019s definition of manliness. Eddie\u2019s accusation ("the guy ain\u2019t right") is homophobic shorthand. Miller shows that the anxiety is Eddie\u2019s, not Rodolpho\u2019s \u2014 the "wrong" masculinity is the one that exposes his.',
        quote: '"He\u2019s like a weird\u2026 he comes out, he\u2019s a blond guy"',
      },
      {
        point: 'The boxing scene and the chair',
        detail:
          'Eddie teaches Rodolpho to box and punches him. Marco responds by silently lifting a chair one-handed over Eddie\u2019s head. The chair scene replaces verbal challenge with physical display \u2014 a wordless contest of male authority that Eddie loses.',
        quote: 'Stage direction: Marco lifts the chair',
      },
      {
        point: 'The forced kiss',
        detail:
          'Eddie kisses first Catherine and then Rodolpho. The second kiss is intended to humiliate Rodolpho and "prove" his sexuality, but it exposes Eddie\u2019s own confusion. Miller stages the moment as a crisis of masculinity, not a resolution.',
        quote: '"I\u2019ll kill him!"',
      },
      {
        point: '"I want my name!"',
        detail:
          'Eddie\u2019s final cry fuses masculine honour with personal identity. His "name" is his reputation, his manhood and his standing in the community \u2014 all of which he has destroyed. Miller shows that the code of masculinity is ultimately self-consuming.',
        quote: '"I want my name!"',
      },
    ],
  },
  {
    question:
      'How does Miller present the conflict between law and justice in A View from the Bridge?',
    thesis:
      'Miller stages a collision between American law and Sicilian honour, and uses Alfieri\u2019s inability to bridge the two systems to argue that justice is always culturally constructed.',
    paragraphs: [
      {
        point: 'Alfieri\u2019s "settle for half"',
        detail:
          'Alfieri\u2019s central phrase describes the compromise Italian-Americans make between old-world codes and American statute. "Settling for half" means accepting legal imperfection instead of pursuing absolute justice. Eddie cannot make this compromise.',
        quote: '"Most of the time now we settle for half"',
      },
      {
        point: 'The law cannot help Eddie',
        detail:
          'When Eddie visits Alfieri, the lawyer tells him plainly that no law covers his situation. Catherine is free to marry, and Rodolpho has broken no statute. Miller uses this legal void to show that Eddie\u2019s grievance exists outside any recognisable framework.',
        quote: '"The law is very specific"',
      },
      {
        point: 'Eddie uses the law as a weapon',
        detail:
          'Eddie\u2019s phone call to Immigration is an act of legal compliance that is morally criminal in the community\u2019s eyes. Miller inverts the normal relationship: using the law becomes the betrayal, and protecting illegals becomes the moral duty.',
        quote: '"He\u2019s an illegal immigrant!"',
      },
      {
        point: 'Marco\u2019s honour code',
        detail:
          'Marco operates within a justice system older than American law. His spitting in Eddie\u2019s face, his accusation ("That one! He killed my children!"), and his refusal to promise not to harm Eddie all reflect a code that demands physical retribution.',
        quote: '"He degraded my brother. My blood."',
      },
      {
        point: 'Alfieri\u2019s failure to reconcile the two systems',
        detail:
          'Alfieri tries to persuade Marco to promise not to kill Eddie. Marco agrees in words but not in spirit. The failure shows that the two justice systems are incommensurable \u2014 there is no "half" that satisfies both.',
        quote: '"To promise not to kill is not dishonourable"',
      },
    ],
  },
  {
    question:
      'How does Miller use Alfieri to shape the audience\u2019s response in A View from the Bridge?',
    thesis:
      'Alfieri functions as chorus, narrator and moral compass, and Miller uses his dual perspective \u2014 Italian heritage, American profession \u2014 to hold judgement and compassion in tension.',
    paragraphs: [
      {
        point: 'The prologue: framing the story as tragedy',
        detail:
          'Alfieri\u2019s opening speech establishes the past tense, names Eddie, and invokes the Italian-American experience of law and justice. The audience is positioned as witnesses to an inevitable disaster, borrowing the Greek dramatic convention of the chorus prologue.',
        quote: '"This one\u2019s name was Eddie Carbone"',
      },
      {
        point: 'Commentary between scenes',
        detail:
          'Alfieri appears between scenes to provide context, accelerate time and interpret the action. His language shifts between the legal and the poetic: "sat there as powerless as I." Miller uses him to create distance between the audience and the raw emotion of the Carbone household.',
        quote: '"I sat there as powerless as I"',
      },
      {
        point: 'Warning Eddie',
        detail:
          'In his office scenes with Eddie, Alfieri warns him repeatedly to let Catherine go. His advice \u2014 "settle for half" \u2014 is the play\u2019s moral thesis. Eddie\u2019s refusal to take it confirms his tragic trajectory and makes the audience complicit: we see the crash coming too.',
        quote: '"You won\u2019t have a friend in the world, Eddie!"',
      },
      {
        point: 'Bridge between cultures',
        detail:
          'Alfieri is Italian by heritage and American by profession. He understands both the honour code and the law but belongs fully to neither. Miller uses this liminality to prevent the audience from siding wholly with either system.',
        quote: '"In Sicily the law has not been a friendly idea"',
      },
      {
        point: 'The epilogue: tragic recognition',
        detail:
          'Alfieri\u2019s closing lines \u2014 "He allowed himself to be wholly known\u2026 and so I mourn him" \u2014 refuse easy judgement. Miller asks the audience to feel both pity and horror, the classical response to tragedy, and Alfieri is the vehicle for that instruction.',
        quote: '"I will love him more than all my sensible clients"',
      },
    ],
  },
  {
    question:
      'How does Miller use dramatic techniques to build tension in A View from the Bridge?',
    thesis:
      'Miller builds tension through stage directions, physical action, dramatic irony and the chorus structure, creating a play where the audience sees the catastrophe approaching while the characters cannot.',
    paragraphs: [
      {
        point: 'Alfieri\u2019s framing and dramatic irony',
        detail:
          'The prologue tells us Eddie\u2019s story has ended. Every subsequent scene is charged with the audience\u2019s foreknowledge. Miller converts suspense ("what will happen?") into dread ("when will it happen?"), a technique borrowed from Greek tragedy.',
        quote: '"As powerless as I, and watched it run its bloody course"',
      },
      {
        point: 'Stage directions and physical action',
        detail:
          'Miller uses physicality to externalise emotional states. The boxing lesson, the chair-lift and the forced kiss are all moments where dialogue fails and bodies take over. Each physical confrontation raises the stakes without words.',
        quote: 'Stage direction: Marco lifts the chair',
      },
      {
        point: 'The Vinny Bolzano story as foreshadowing',
        detail:
          'Eddie tells Catherine about Vinny Bolzano, a boy who informed on his uncle and was thrown down the stairs by his family. The story functions as a warning the audience recognises but Eddie does not: he will become exactly what he describes with disgust.',
        quote: '"You can quicker get back a million dollars than a word"',
      },
      {
        point: 'Beatrice\u2019s naming of the truth',
        detail:
          'Beatrice\u2019s private scenes with Catherine and her climactic accusation ("You want somethin\u2019 else, Eddie") build tension by bringing the unspoken closer and closer to the surface. The audience waits for the moment the truth is spoken aloud.',
        quote: '"You want somethin\u2019 else, Eddie, and you can never have her!"',
      },
      {
        point: 'The final confrontation and Eddie\u2019s death',
        detail:
          'The street fight condenses all the play\u2019s tensions into a single, brief, violent scene. Eddie pulls a knife and is killed with his own blade. Miller makes the death both shocking and structurally inevitable \u2014 it has been promised since the prologue.',
        quote: '"Oh, B., my B.!"',
      },
    ],
  },
]

export default async function AViewEssayPlansPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={
            <Link href="/igcse/edexcel/drama/a-view-from-the-bridge" />
          }
        >
          <ArrowLeft className="size-3.5" />
          Back to A View from the Bridge
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Essay Plans</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            A View from the Bridge: Essay Plans
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Five exam-ready essay plans with thesis statements, paragraph
            points and supporting quotations for top-band responses.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only &mdash; read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing for study and
              criticism. These plans are starting frameworks &mdash; always
              develop your own argument.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Essay plans
          </h2>
        </div>
        <div className="space-y-8">
          {essays.map((essay, i) => (
            <article
              key={i}
              className="rounded-xl border border-border/60 bg-card p-6"
            >
              <h3 className="text-heading-md font-heading text-foreground">
                {essay.question}
              </h3>
              <p className="mt-2 text-body-sm font-medium text-primary">
                Thesis: {essay.thesis}
              </p>
              <div className="mt-4 space-y-4">
                {essay.paragraphs.map((p, j) => (
                  <div
                    key={j}
                    className="rounded-lg border border-border/40 bg-muted/30 p-4"
                  >
                    <p className="text-body-sm font-semibold text-foreground">
                      {j + 1}. {p.point}
                    </p>
                    <p className="mt-1 text-body-sm leading-relaxed text-muted-foreground">
                      {p.detail}
                    </p>
                    <blockquote className="mt-2 border-l-2 border-primary/40 pl-3 text-body-xs italic text-foreground">
                      {p.quote}
                    </blockquote>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        A View from the Bridge &copy; The Arthur Miller Estate. Short
        quotations reproduced under the fair dealing provision of the
        Copyright, Designs and Patents Act 1988 for the purpose of criticism
        and review.
      </p>
    </div>
  )
}
