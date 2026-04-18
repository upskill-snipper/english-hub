'use client'

import Link from 'next/link'
import { ArrowLeft, Users, Sparkles, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

const characters = [
  {
    name: 'George Milton',
    role: 'Lennie\u2019s companion and protector',
    analysis:
      'George is "small and quick, dark of face, with restless eyes and sharp, strong features". He carries the burden of thinking for two men and suppresses his own desires to protect Lennie. His ritual recitation of the dream is both a lullaby for Lennie and a prayer for himself. Steinbeck gives George the novella\u2019s most morally agonising decision: the killing of Lennie is simultaneously a mercy, a failure, and a self-destruction \u2014 because without Lennie, George becomes exactly the lonely drifter he feared becoming.',
    quote:
      '\u201cGuys like us, that work on ranches, are the loneliest guys in the world.\u201d',
  },
  {
    name: 'Lennie Small',
    role: 'George\u2019s companion',
    analysis:
      'Lennie is "a huge man, shapeless of face, with large, pale eyes". His name is ironic \u2014 he is physically enormous but mentally childlike. Steinbeck consistently describes him with animal imagery: he drinks "like a horse", moves "the way a bear drags his paws". His love of soft things \u2014 mice, puppies, Curley\u2019s wife\u2019s hair \u2014 is genuine but lethal because he cannot calibrate his own strength. Lennie\u2019s disability means he is always the most vulnerable person on the ranch and simultaneously the most dangerous.',
    quote:
      '\u201cI got you to look after me, and you got me to look after you.\u201d',
  },
  {
    name: 'Candy',
    role: 'Ageing ranch handyman',
    analysis:
      'Candy is old, one-handed, and increasingly aware that the ranch will discard him when he can no longer work. His attachment to his ancient dog parallels George\u2019s attachment to Lennie, and the dog\u2019s death at Carlson\u2019s hands foreshadows the ending. Candy\u2019s offer to invest his savings in the dream farm makes the dream briefly financially real \u2014 and its collapse all the more devastating. His final line, "I ought to of shot that dog myself", is the novella\u2019s clearest statement about the cost of letting others act on your behalf.',
    quote:
      '\u201cI ought to of shot that dog myself, George.\u201d',
  },
  {
    name: 'Curley',
    role: 'The boss\u2019s son',
    analysis:
      'Curley is small, aggressive, and recently married. Steinbeck gives him a Vaseline glove, a combative posture, and an insecure masculinity that expresses itself through violence toward anyone bigger than himself. He picks fights to prove dominance and treats his wife as property. When Lennie crushes his hand, the injury to Curley\u2019s pride is worse than the physical damage. He represents the petty tyranny that institutional power enables.',
    quote:
      '\u201cCome on, ya big son-of-a-bitch.\u201d',
  },
  {
    name: 'Curley\u2019s wife',
    role: 'The only woman on the ranch',
    analysis:
      'Steinbeck never names her. She is defined entirely by her relation to Curley, and the ranch men treat her as a threat. But her monologue in the barn reveals a young woman with her own failed dream \u2014 a man in Salinas who promised her a Hollywood career. Steinbeck presents her loneliness as genuine and her need for conversation as human, not predatory. Her death in the barn restores the humanity the narrative withheld in life: "She was very pretty and simple, and her face was sweet and young."',
    quote:
      '\u201cI never get to talk to nobody. I get awful lonely.\u201d',
  },
  {
    name: 'Crooks',
    role: 'Black stable buck',
    analysis:
      'Crooks is the only Black man on the ranch. He lives alone in the harness room because racial segregation excludes him from the bunkhouse. His crooked spine \u2014 kicked by a horse \u2014 is a physical emblem of the damage done by marginalisation. In his one extended scene, he diagnoses loneliness as a pathology, briefly allows himself to believe in the dream, and then retreats when Curley\u2019s wife threatens to have him lynched. Steinbeck uses Crooks to show how racial oppression systematically destroys hope.',
    quote:
      '\u201cA guy needs somebody \u2014 to be near him.\u201d',
  },
  {
    name: 'Slim',
    role: 'Jerkline skinner',
    analysis:
      'Slim is the ranch\u2019s moral authority. Steinbeck describes him with near-reverent language: "moved with a majesty only achieved by royalty". He is the only character who understands the George\u2013Lennie relationship without explanation, and his quiet approval functions as the text\u2019s ethical compass. After the final shooting, Slim leads George away with "Come on, George. I\u2019ll buy you a drink." His compassion is the novella\u2019s only surviving warmth.',
    quote:
      '\u201cYou hadda, George. I swear you hadda.\u201d',
  },
  {
    name: 'Carlson',
    role: 'Ranch worker',
    analysis:
      'Carlson is pragmatic, unsentimental and emotionally blank. He insists on shooting Candy\u2019s dog because it smells, and his efficiency is meant to chill. The novella\u2019s final line belongs to him: "Now what the hell ya suppose is eatin\u2019 them two guys?" His incomprehension seals Steinbeck\u2019s verdict: in a world built on labour and isolation, grief is literally unintelligible.',
    quote:
      '\u201cNow what the hell ya suppose is eatin\u2019 them two guys?\u201d',
  },
  {
    name: 'The Boss',
    role: 'Ranch owner',
    analysis:
      'The boss appears only briefly but establishes the power structure. He is suspicious of George speaking for Lennie and assumes exploitation. His small kindness \u2014 giving the men whiskey at Christmas \u2014 does not redeem the economic system he runs. Steinbeck positions him as the invisible hand behind the ranch\u2019s hierarchies.',
    quote:
      '\u201cI said what stake you got in this guy?\u201d',
  },
]

export default function OmamCharactersPage() {
  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/prose/of-mice-and-men" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Of Mice and Men
        </Button>
      </div>

      <StudyTools
        textName="Of Mice and Men"
        textType="novel"
        examBoard="IGCSE Edexcel"
      />

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE Literature
            </Badge>
            <Badge variant="secondary">Characters</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Of Mice and Men: Characters
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Analytical profiles of George, Lennie, Candy, Curley, Curley&rsquo;s
            wife, Crooks, Slim and the ranch workers &mdash; with key
            quotations.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only &mdash; read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing for study and
              criticism.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Users className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Character profiles
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {characters.map((c) => (
            <article
              key={c.name}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <h3 className="text-heading-sm font-heading text-foreground">
                {c.name}
              </h3>
              <p className="mt-0.5 text-body-xs font-medium uppercase tracking-wide text-primary">
                {c.role}
              </p>
              <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                {c.analysis}
              </p>
              <blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-body-sm italic text-foreground">
                {c.quote}
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Of Mice and Men &copy; The Estate of John Steinbeck. Short quotations
        reproduced under the fair dealing provision of the CDPA 1988 for
        criticism and review.
      </p>
    </div>
  )
}
