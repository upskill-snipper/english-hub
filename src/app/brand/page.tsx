import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PressHero, PressSection } from '@/components/press/PressLayout'
import { ColourSwatch } from '@/components/brand/ColourSwatch'
import { TypographySpecimen } from '@/components/brand/TypographySpecimen'
import { LogoAsset } from '@/components/brand/LogoAsset'
import { Download, Mail, ExternalLink, AlertTriangle } from 'lucide-react'

// NOTE: British English throughout. Colour values taken from the existing
// design system tokens. Any asset link marked TODO points at a file the
// founder still needs to upload to /public/brand.

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-background">
      <PressHero
        eyebrow="Brand guidelines"
        title="Brand guidelines — The English Hub"
        lede="Everything you need to write about, link to, or reference The English Hub in a way that feels like us. Short, opinionated, and kept in one place."
      />

      {/* Name usage */}
      <PressSection eyebrow="Name" title="Using the name">
        <p>
          The product is always written as <strong>The English Hub</strong>, with a capital T, E,
          and H. It is never abbreviated to &ldquo;TEH&rdquo;, never written in lower case except
          inside URLs or email addresses (&ldquo;theenglishhub.app&rdquo;,
          &ldquo;press@theenglishhub.app&rdquo;), and never rendered in all caps in running prose.
          The definite article &ldquo;The&rdquo; is part of the name; please keep it.
        </p>
        <p>
          On second reference in a long article you may use &ldquo;the Hub&rdquo; in full sentences
          where the meaning is unambiguous, but never as a standalone product name in headlines or
          links.
        </p>
      </PressSection>

      {/* Logo */}
      <PressSection eyebrow="Logo" title="Marks and usage">
        <p>
          Three variants are available: the primary lock-up, a horizontal wordmark, and a square
          icon for app tiles and favicons. Use the primary lock-up wherever space allows; fall back
          to the wordmark in narrow horizontal bars and the icon only when the rendering is 32
          pixels or smaller.
        </p>
        <div className="not-prose mt-6 grid sm:grid-cols-3 gap-4">
          <LogoAsset variant="primary" />
          <LogoAsset variant="wordmark" />
          <LogoAsset variant="icon" />
        </div>
        <div className="not-prose mt-6">
          {/* TODO(founder): upload the real SVGs to /public/brand/ and update the hrefs below. */}
          <Card className="p-5 border-dashed border-border/60 bg-card/40">
            <p className="font-semibold text-foreground mb-2">Downloads</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="/brand/logo-primary.svg"
                  className="text-primary underline underline-offset-4"
                  aria-disabled="true"
                >
                  logo-primary.svg
                </a>{' '}
                <span className="text-xs">(TODO — awaiting upload)</span>
              </li>
              <li>
                <a
                  href="/brand/logo-wordmark.svg"
                  className="text-primary underline underline-offset-4"
                  aria-disabled="true"
                >
                  logo-wordmark.svg
                </a>{' '}
                <span className="text-xs">(TODO — awaiting upload)</span>
              </li>
              <li>
                <a
                  href="/brand/logo-icon.svg"
                  className="text-primary underline underline-offset-4"
                  aria-disabled="true"
                >
                  logo-icon.svg
                </a>{' '}
                <span className="text-xs">(TODO — awaiting upload)</span>
              </li>
            </ul>
          </Card>
        </div>
      </PressSection>

      {/* Colour palette */}
      <PressSection eyebrow="Colour" title="Colour palette">
        <p>
          Eight tokens cover the whole product. The primary is a calm sea-slate teal; the accent is
          a warm terracotta clay. Semantic colours (success, warning, danger) sit alongside a
          neutral ink scale for type and chrome.
        </p>
        <div className="not-prose mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ColourSwatch
            hex="#2DD4A8"
            name="Sea-slate teal"
            token="--primary"
            usage="Primary actions, brand marks, focus rings."
          />
          <ColourSwatch
            hex="#E8A382"
            name="Formby clay"
            token="--accent"
            usage="Accent highlights, editorial flourishes, italic wordmark."
          />
          <ColourSwatch
            hex="#0F1411"
            name="Pit-ink black"
            token="--ink-900"
            usage="Footer, dark surfaces, highest-contrast type."
          />
          <ColourSwatch
            hex="#FBF7F0"
            name="Manuscript cream"
            token="--ink-50"
            usage="Page background in dark contexts, quiet cards."
            lightChip
          />
          <ColourSwatch
            hex="#B5B8B3"
            name="Slate mist"
            token="--ink-400"
            usage="Secondary text, dividers, muted labels."
          />
          <ColourSwatch
            hex="#16A34A"
            name="Hedge green"
            token="--success"
            usage="Completion, pass, positive progress."
          />
          <ColourSwatch
            hex="#D97706"
            name="Amber warning"
            token="--warning"
            usage="Caution states, Early Access flags."
          />
          <ColourSwatch
            hex="#DC2626"
            name="Signal red"
            token="--danger"
            usage="Destructive actions, errors, at-risk markers."
          />
        </div>
      </PressSection>

      {/* Typography */}
      <PressSection eyebrow="Typography" title="Type pairing">
        <p>
          Two families. <strong>Inter</strong> carries body copy, interface labels, and navigation.{' '}
          <strong>Source Serif Pro</strong> handles display headlines, editorial callouts, and the
          logo wordmark. Both are open-source and available from Google Fonts.
        </p>
        <div className="not-prose mt-6 grid md:grid-cols-2 gap-4">
          <TypographySpecimen
            role="Display — serif"
            family="Source Serif Pro"
            stack='"Source Serif Pro", Georgia, "Times New Roman", serif'
            sample="Every essay, against the real mark scheme."
            className="font-serif italic"
          />
          <TypographySpecimen
            role="Body — sans"
            family="Inter"
            stack='"Inter", system-ui, -apple-system, sans-serif'
            sample="Calm, honest, pedagogical."
            className="font-sans"
          />
        </div>
        <div className="not-prose mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            size="sm"
            render={
              <a
                href="https://fonts.google.com/specimen/Inter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inter on Google Fonts
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            }
          />
          <Button
            variant="outline"
            size="sm"
            render={
              <a
                href="https://fonts.google.com/specimen/Source+Serif+Pro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Serif Pro on Google Fonts
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            }
          />
        </div>
      </PressSection>

      {/* Spacing & radius */}
      <PressSection eyebrow="Layout" title="Spacing and radius">
        <p>
          The grid uses an 8-point base: 4, 8, 12, 16, 24, 32, 48, 64, and 96 pixels. Everything on
          the page snaps to those stops, which keeps vertical rhythm honest across breakpoints.
          Radius follows a similar ladder: 6 pixels for chips and inputs, 12 pixels for cards, 16
          pixels for sheets, and full-round for avatars and pill badges. Focus rings sit at 2
          pixels, offset by 2 pixels, in the sea-slate teal primary.
        </p>
      </PressSection>

      {/* Voice and tone */}
      <PressSection eyebrow="Voice" title="Voice and tone">
        <p>
          We sound like a serving English teacher who has marked too many essays to be fooled by
          jargon. Plain British English, short sentences, active verbs. No exclamation marks in
          product copy unless a pupil has genuinely achieved something worth celebrating.
        </p>
        <p>
          We are pedagogical before we are persuasive. Every feature is explained in terms of the
          learning it supports — the assessment objective, the mark scheme, the next step the
          pupil can take. Marketing claims are sized to the evidence: we say &ldquo;save hours each
          week&rdquo; when we can point to the teacher workflow that saves them; we do not round
          up.
        </p>
        <p>
          We are calm and honest about limits. We label AI-assisted output clearly. We do not
          promise grade uplift, because we cannot guarantee it. We tell parents and pupils what
          data we collect and why, in the same voice we would use in a parents’ evening.
        </p>
      </PressSection>

      {/* Don'ts */}
      <PressSection eyebrow="Guardrails" title="Please don’t">
        <div className="not-prose">
          <ul className="space-y-3">
            {[
              'Alter the logo — no recolouring, rotating, stretching, or adding effects.',
              'Place the logo on low-contrast backgrounds; keep a 4.5:1 contrast ratio minimum.',
              'Shorten the name to &ldquo;TEH&rdquo; or &ldquo;English Hub&rdquo; without the definite article.',
              'Pair the wordmark with a second typeface not listed above.',
              'Use the clay accent as a primary call-to-action colour — it is a highlight, not a button.',
              'Fabricate stats, quotes, or press mentions. If we do not have them, we leave the slot empty.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span
                  className="text-sm text-foreground"
                  // Allow the &ldquo; / &rdquo; entities in the source above to render.
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
        </div>
      </PressSection>

      {/* Download kit */}
      <PressSection eyebrow="Download" title="Brand kit">
        <p>
          A single archive with the logo pack (SVG + PNG), colour swatches (ASE + JSON), and this
          page as a PDF.
        </p>
        <div className="not-prose mt-6">
          {/* TODO(founder): produce /public/brand/brand-kit.zip and replace the inert link below. */}
          <Button
            variant="secondary"
            size="lg"
            className="h-12"
            render={
              <a href="/brand/brand-kit.zip" download aria-disabled="true">
                <Download className="w-4 h-4 mr-2" />
                Download brand kit (pending)
              </a>
            }
          />
        </div>
      </PressSection>

      {/* Contact */}
      <PressSection eyebrow="Questions" title="Brand and partnership enquiries">
        <p>
          For anything brand-related — co-marketing lock-ups, permission to use the logo in a
          case study, trademark questions — email{' '}
          <a
            href="mailto:press@theenglishhub.app"
            className="text-primary underline underline-offset-4"
          >
            press@theenglishhub.app
          </a>
          .
        </p>
        <div className="not-prose mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            size="lg"
            className="h-12"
            render={<a href="mailto:press@theenglishhub.app" />}
          >
            <Mail className="w-4 h-4 mr-2" />
            Email the brand desk
          </Button>
          <Button variant="outline" size="lg" className="h-12" render={<Link href="/press" />}>
            View press page
          </Button>
        </div>
      </PressSection>
    </main>
  )
}
