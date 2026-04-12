import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Globe, Info, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'To Kill a Mockingbird Context — Edexcel IGCSE 4ET1',
  description:
    '1930s Alabama, Jim Crow, the Scottsboro Boys, Harper Lee\u2019s Monroeville childhood and the Civil Rights Movement context for To Kill a Mockingbird.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel/prose/to-kill-a-mockingbird/context',
  },
}

const contextBlocks = [
  {
    title: '1930s Alabama and the Great Depression',
    body:
      'The novel is set between 1933 and 1935, during the worst years of the Great Depression. Cotton prices had collapsed; tenant farmers like the Cunninghams were paid in kind rather than cash. Lee uses Maycomb\u2019s poverty to show how economic hardship sharpened racial scapegoating — white Southerners clung harder to racial hierarchy as their other forms of status evaporated.',
  },
  {
    title: 'Jim Crow and legal segregation',
    body:
      '"Jim Crow" laws, established after Reconstruction and upheld by Plessy v. Ferguson (1896), legally segregated schools, transport, housing, drinking fountains and even courtrooms. The all-white jury in Tom\u2019s trial was itself a product of Jim Crow rules that excluded Black citizens from jury service. Black witnesses and defendants could be called by first name; white witnesses had to be addressed as "Mr" and "Miss".',
  },
  {
    title: 'The Scottsboro Boys',
    body:
      'In 1931, nine Black teenagers were falsely accused of raping two white women on a freight train passing through Scottsboro, Alabama. Despite medical evidence and one accuser recanting, eight were convicted and sentenced to death by an all-white jury — a verdict that triggered retrials, NAACP involvement and Supreme Court appeals throughout the 1930s. Lee\u2019s trial clearly draws on these cases, particularly the physical impossibility defence and the racial composition of the jury.',
  },
  {
    title: 'Harper Lee\u2019s Monroeville',
    body:
      'Lee grew up in Monroeville, Alabama, where her father Amasa Coleman Lee was a lawyer who once unsuccessfully defended two Black clients accused of murder — both were hanged. Her childhood friend Truman Capote is the model for Dill. The Finches\u2019 Maycomb is closely based on Lee\u2019s home town, and the trial reflects cases her father followed in the local press.',
  },
  {
    title: 'The Civil Rights Movement (the novel\u2019s "now")',
    body:
      'Published in 1960, the novel appeared during the Civil Rights Movement — after Brown v. Board of Education (1954), the Montgomery Bus Boycott (1955–56) and during the lunch-counter sit-ins. Lee\u2019s contemporary readers would have read Maycomb as both a historical reconstruction and a commentary on segregation still in force. The Pulitzer Prize in 1961 helped cement the book\u2019s role in mainstream white liberal engagement with civil rights.',
  },
  {
    title: 'Lynching and extralegal violence',
    body:
      'The scene outside the jail, when a mob arrives to lynch Tom, draws on the recent history of Southern lynchings — the Equal Justice Initiative documents more than 4,400 racial-terror lynchings between 1877 and 1950. Atticus\u2019s lone vigil and Scout\u2019s disarming intervention via Walter Cunningham\u2019s father compress real dynamics of mob violence into a tense domestic scene.',
  },
  {
    title: 'Southern Gothic and the bildungsroman',
    body:
      'Formally, Mockingbird combines the Southern Gothic tradition (Boo Radley as haunted recluse, the crumbling Radley house) with the bildungsroman — the coming-of-age novel — inherited from Twain\u2019s Huckleberry Finn. Scout\u2019s moral education is framed by her dawning understanding of both her town\u2019s ghosts and her father\u2019s principles.',
  },
  {
    title: 'Reception and reassessment',
    body:
      'Mockingbird has been taught globally for decades but, since the 2015 publication of Lee\u2019s earlier draft Go Set a Watchman — in which Atticus holds segregationist views — critics have re-examined the "white saviour" framing. For IGCSE analysis, knowing both the 1960 reception and the post-2015 reassessment strengthens AO4 responses.',
  },
]

export default async function TkamContextPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={
            <Link href="/igcse/edexcel/prose/to-kill-a-mockingbird" />
          }
        >
          <ArrowLeft className="size-3.5" />
          Back to To Kill a Mockingbird
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE 4ET1
            </Badge>
            <Badge variant="secondary">Context</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            To Kill a Mockingbird: Context
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Historical, biographical and literary context for Harper Lee’s
            novel — essential for AO4 responses on social, cultural and
            historical context.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only — read the full text
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              This guide is a study companion, not a replacement for reading
              the novel.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Globe className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Historical and literary context
          </h2>
        </div>
        <div className="space-y-5">
          {contextBlocks.map((c) => (
            <article
              key={c.title}
              className="rounded-xl border border-border/60 bg-card p-6"
            >
              <h3 className="text-heading-sm font-heading text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        To Kill a Mockingbird is in copyright. Short extracts are included under fair dealing for the purposes of study and criticism.
      </p>
    </div>
  )
}
