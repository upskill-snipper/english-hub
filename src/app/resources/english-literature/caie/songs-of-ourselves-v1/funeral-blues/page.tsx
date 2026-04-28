import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Construction, Scale, AlertTriangle } from 'lucide-react'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Funeral Blues — W.H. Auden | Cambridge IGCSE 0475',
  description:
    "Study guide for 'Funeral Blues' by W.H. Auden (1940 revised version). Themes, form and structure for Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Part 4.",
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/funeral-blues',
  },
}

export default function FuneralBluesPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:py-14">
      <CourseJsonLd
        name="Funeral Blues — W.H. Auden (Cambridge IGCSE 0475)"
        description="Study guide stub for 'Funeral Blues' by W.H. Auden (1940 revised version). Cambridge IGCSE Literature in English (0475), Songs of Ourselves Vol 1 Part 4."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Resources', url: 'https://theenglishhub.app/resources' },
          {
            name: 'English Literature',
            url: 'https://theenglishhub.app/resources/english-literature',
          },
          {
            name: 'Cambridge IGCSE',
            url: 'https://theenglishhub.app/resources/english-literature/caie',
          },
          {
            name: 'Songs of Ourselves Vol 1',
            url: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1',
          },
          {
            name: 'Funeral Blues',
            url: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1/funeral-blues',
          },
        ]}
      />

      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/resources/english-literature/caie/songs-of-ourselves-v1" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Songs of Ourselves Vol 1
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-slate-500/10">
            <BookOpen className="size-5 text-slate-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Funeral Blues</h1>
            <p className="text-sm text-muted-foreground">
              W.H. Auden (1907&ndash;1973) &middot; 1940 revised version
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                Cambridge IGCSE 0475
              </Badge>
              <Badge variant="outline" className="text-[0.65rem]">
                Songs of Ourselves Vol 1 Part 4
              </Badge>
              <Badge variant="outline" className="text-[0.65rem]">
                In copyright (Faber)
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600" />
        <p className="text-xs text-muted-foreground">
          <strong className="text-foreground">Version note:</strong> Cambridge 0475 anthologises the{' '}
          <strong>1940 revised four-stanza version</strong> of <em>Funeral Blues</em> &mdash; the
          canonical poem published in <em>Another Time</em>. This is <strong>not</strong> the longer
          1936 cabaret version <em>Twelve Songs IX</em> from <em>The Ascent of F6</em>, which has
          different verses. Make sure you are studying the 1940 version reproduced in the Cambridge
          anthology.
        </p>
      </div>

      <Card className="border-blue-500/40 bg-blue-500/[0.04]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
              <Scale className="size-5 text-blue-700" />
            </div>
            <CardTitle className="text-base">UK rights notice</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            The 1940 revised text of <em>Funeral Blues</em> is in copyright (W.H. Auden / Faber
            &amp; Faber; Auden died 1973, so the poem enters UK public domain in{' '}
            <strong>2044</strong>). The full poem cannot be reproduced on this site. Pupils should
            consult the school-issued Cambridge anthology for the verified text.
          </p>
          <p>
            Short quotations on this page are fair-dealing extracts used for criticism and review
            under UK CDPA s.30.
          </p>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">At a glance</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Poet:</strong> W.H. (Wystan Hugh) Auden &mdash;
              English-American (b. York 1907; d. Vienna 1973).
            </p>
            <p>
              <strong className="text-foreground">Year:</strong> 1940 (revised version)
            </p>
            <p>
              <strong className="text-foreground">First publication:</strong> <em>Another Time</em>{' '}
              (Faber &amp; Faber / Random House, 1940). The earlier 1936 form appeared as
              &lsquo;Song IX&rsquo; in the Auden / Isherwood play <em>The Ascent of F6</em>.
            </p>
            <p>
              <strong className="text-foreground">Themes:</strong> grief and bereavement; love and
              loss; the disorienting silence after a death; the gap between private mourning and
              public indifference; the apparent uselessness of consolation.
            </p>
            <p>
              <strong className="text-foreground">Form & structure:</strong> four quatrains in
              rhymed couplets (AABB &times; 4); largely iambic pentameter / loose long line; the
              imperative voice dominates throughout, building from the household (telephone, clock,
              dog) outwards to the cosmic (sun, moon, stars, ocean).
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Verified opening line</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <blockquote className="border-l-4 border-foreground/30 pl-4 italic">
              &ldquo;Stop all the clocks, cut off the telephone&rdquo;
            </blockquote>
            <p>
              The opening imperative is the most quoted line in the poem and the title of countless
              adaptations. The four short verbs (&lsquo;stop&rsquo;, &lsquo;cut&rsquo;,
              &lsquo;prevent&rsquo;, &lsquo;silence&rsquo; in the quatrain that follows) demand the
              suspension of ordinary domestic life. Auden makes the speaker arrest time itself:
              clocks must stop, communication must end. Grief refuses to share the same minute as
              ordinariness.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Notes for study</h2>
        <Card>
          <CardContent className="space-y-3 pt-6 text-sm text-muted-foreground">
            <p>
              The poem moves from the practical and domestic in stanzas 1&ndash;2 (clocks,
              telephones, mourners, drums) to public and ceremonial imagery in stanza 3 (aeroplanes,
              doves, traffic policemen with crepe gloves), then to a final stanza in which the
              bereaved speaker imagines the cosmos itself dismantled. The familiar hyperbole &mdash;
              pack up the moon, dismantle the sun &mdash; is not a believable demand but an
              emotional logic: nothing should be allowed to continue.
            </p>
            <p>
              Auden originally wrote the poem as a satirical mock-elegy for a public figure in{' '}
              <em>The Ascent of F6</em>. By 1940 he had re-cast it as a private love elegy. Read in
              that biographical frame, the poem expresses queer mourning at a moment when same- sex
              love could not be openly named.
            </p>
            <p>
              Pairs well in Paper 1 with: <em>Remember</em> (Rossetti) on memory after death;{' '}
              <em>The City Planners</em> on order vs. disorder; or any war poem (e.g.{' '}
              <em>Anthem for Doomed Youth</em>) on the public/private gap of bereavement.
            </p>
          </CardContent>
        </Card>
      </section>

      <Card className="border-amber-500/40 bg-amber-500/[0.04]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
              <Construction className="size-5 text-amber-700" />
            </div>
            <CardTitle className="text-base">Full study guide in production</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            A full annotated reading with line-by-line analysis, stanza-by-stanza commentary and
            exam-style essay plans is in production. Because the poem is in copyright, the on-site
            reading will be structured around short fair-dealing quotation rather than full
            reproduction. The verified text lives in your Cambridge anthology.
          </p>
          <p>
            Current Cambridge syllabus is <strong className="text-foreground">0475</strong>. Always
            confirm the active set list at{' '}
            <a
              href="https://www.cambridgeinternational.org/syllabus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              cambridgeinternational.org
            </a>
            .
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Source attribution</CardTitle>
          <CardDescription>Cambridge IGCSE 0475 Songs of Ourselves Vol 1 Part 4</CardDescription>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">
          <p>
            Anthology publisher: Cambridge University Press. The poem is in copyright to the Estate
            of W.H. Auden / Faber &amp; Faber. UK public-domain entry: 2044. Permissions queries:
            cambridge.org/permissions.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
