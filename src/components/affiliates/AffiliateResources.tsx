'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Copy,
  Check,
  Sparkles,
  Video,
  Palette,
  LinkIcon,
  Lightbulb,
  TrendingUp,
  Clock,
  Hash,
  MessageSquare,
  Twitter,
  Instagram,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AffiliateResourcesProps {
  affiliateUrl: string
  viaToken: string
  affiliateName: string
}

type CopiedId = string | null

export default function AffiliateResources({
  affiliateUrl,
  viaToken,
  affiliateName,
}: AffiliateResourcesProps) {
  const [copiedId, setCopiedId] = useState<CopiedId>(null)

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <Link
          href="/affiliates/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">
            Affiliate Resources
          </h1>
        </div>
        <p className="text-muted-foreground mb-10">
          Ready-to-use content, brand guidelines, and tips to help you earn more.
          Everything here is ready to copy and paste.
        </p>

        {/* ─── Section 1: Your Link & Promo Code ─── */}
        <section className="mb-12">
          <SectionHeading icon={LinkIcon} title="Your Link & Promo Code" />
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Your affiliate link
              </label>
              <CopyRow
                text={affiliateUrl}
                id="affiliate-url"
                copiedId={copiedId}
                onCopy={handleCopy}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Your referral code
              </label>
              <CopyRow
                text={viaToken}
                id="via-token"
                copiedId={copiedId}
                onCopy={handleCopy}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Your followers get access through your unique link. Share it
              anywhere &mdash; bio links, captions, stories, DMs.
            </p>
          </div>
        </section>

        {/* ─── Section 2: Ready-Made Social Media Content ─── */}
        <section className="mb-12">
          <SectionHeading
            icon={MessageSquare}
            title="Ready-Made Social Media Content"
          />
          <p className="text-muted-foreground mb-6">
            Grab a caption, swap in your link, and post. Each one is written to
            perform &mdash; just pick the platform.
          </p>

          {/* TikTok / Reels */}
          <SubHeading icon={Video} title="TikTok / Reels Captions" />
          <div className="space-y-3 mb-8">
            {tiktokCaptions.map((caption, i) => (
              <CopyableCaption
                key={`tt-${i}`}
                id={`tt-${i}`}
                text={caption}
                copiedId={copiedId}
                onCopy={handleCopy}
              />
            ))}
          </div>

          {/* Instagram */}
          <SubHeading icon={Instagram} title="Instagram Captions" />
          <div className="space-y-3 mb-8">
            {instagramCaptions.map((caption, i) => (
              <CopyableCaption
                key={`ig-${i}`}
                id={`ig-${i}`}
                text={caption}
                copiedId={copiedId}
                onCopy={handleCopy}
              />
            ))}
          </div>

          {/* Twitter / X */}
          <SubHeading icon={Twitter} title="Twitter / X Posts" />
          <div className="space-y-3 mb-8">
            {twitterPosts.map((post, i) => (
              <CopyableCaption
                key={`tw-${i}`}
                id={`tw-${i}`}
                text={post}
                copiedId={copiedId}
                onCopy={handleCopy}
              />
            ))}
          </div>
        </section>

        {/* ─── Section 3: Content Ideas ─── */}
        <section className="mb-12">
          <SectionHeading icon={Lightbulb} title="Content Ideas" />
          <p className="text-muted-foreground mb-4">
            Not sure what to post? These formats consistently drive sign-ups.
          </p>
          <div className="bg-card border border-border rounded-xl divide-y divide-border">
            {contentIdeas.map((idea, i) => (
              <div key={i} className="flex items-start gap-3 px-5 py-4">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground leading-relaxed">
                  {idea}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Section 4: Brand Guidelines ─── */}
        <section className="mb-12">
          <SectionHeading icon={Palette} title="Brand Guidelines" />
          <div className="bg-card border border-border rounded-xl p-6 space-y-5">
            <div className="space-y-3">
              {brandGuidelines.map((guideline, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">
                    {guideline}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-5">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Brand Colours
              </p>
              <div className="flex flex-wrap gap-3">
                <ColourSwatch colour="#6C5CE7" label="Primary Purple" />
                <ColourSwatch colour="#A29BFE" label="Light Purple" />
                <ColourSwatch colour="#0F0A1A" label="Dark BG" />
                <ColourSwatch colour="#FFFFFF" label="White" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 5: Performance Tips ─── */}
        <section className="mb-12">
          <SectionHeading icon={TrendingUp} title="Performance Tips" />
          <div className="grid gap-4 sm:grid-cols-2">
            {performanceTips.map((tip, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <tip.icon className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-sm text-foreground">
                    {tip.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Bottom CTA ─── */}
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <p className="text-foreground font-semibold mb-1">
            Ready to start sharing?
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Copy your link and start creating content today.
          </p>
          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => handleCopy(affiliateUrl, 'bottom-link')}
            >
              {copiedId === 'bottom-link' ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copiedId === 'bottom-link' ? 'Copied!' : 'Copy Link'}
            </Button>
            <Button render={<Link href="/affiliates/dashboard" />}>
              View Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Sub-components ─── */

function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: React.ElementType
  title: string
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-primary" />
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
    </div>
  )
}

function SubHeading({
  icon: Icon,
  title,
}: {
  icon: React.ElementType
  title: string
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-4 h-4 text-muted-foreground" />
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
        {title}
      </h3>
    </div>
  )
}

function CopyRow({
  text,
  id,
  copiedId,
  onCopy,
}: {
  text: string
  id: string
  copiedId: CopiedId
  onCopy: (text: string, id: string) => void
}) {
  const isCopied = copiedId === id
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-background rounded-lg border border-border px-4 py-2.5 font-mono text-sm text-muted-foreground truncate">
        {text}
      </div>
      <Button variant="outline" size="sm" onClick={() => onCopy(text, id)}>
        {isCopied ? (
          <Check className="w-3.5 h-3.5" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
        {isCopied ? 'Copied' : 'Copy'}
      </Button>
    </div>
  )
}

function CopyableCaption({
  text,
  id,
  copiedId,
  onCopy,
}: {
  text: string
  id: string
  copiedId: CopiedId
  onCopy: (text: string, id: string) => void
}) {
  const isCopied = copiedId === id
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
      <p className="flex-1 text-sm text-foreground leading-relaxed whitespace-pre-line">
        {text}
      </p>
      <button
        onClick={() => onCopy(text, id)}
        className="flex-shrink-0 mt-0.5 p-2 rounded-lg border border-border hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
        title="Copy to clipboard"
      >
        {isCopied ? (
          <Check className="w-4 h-4 text-primary" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  )
}

function ColourSwatch({ colour, label }: { colour: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-8 h-8 rounded-lg border border-border"
        style={{ backgroundColor: colour }}
      />
      <div>
        <p className="text-xs font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground font-mono">{colour}</p>
      </div>
    </div>
  )
}

/* ─── Content data ─── */

const tiktokCaptions = [
  `POV: You find an AI that marks your essays like a real teacher and tells you EXACTLY how to improve \u{1F4DD}\u{2728} Link in bio #GCSE #StudyTok #revision #ad`,
  `This app just wrote my entire lesson plan in 30 seconds... teachers, you NEED this \u{1F92F} #TeacherTok #TeachersOfTikTok #ad`,
  `How I went from a Grade 4 to a Grade 7 in English without a tutor \u{1F4C8} #GCSErevision #StudyWithMe #ad`,
  `The English revision app my teacher wishes existed when they were in school \u{1F62D} #GCSE2026 #revision #ad`,
  `Me trying to revise English vs. me after finding The English Hub \u{1F4AA} The AI feedback is actually insane #StudyTok #GCSEEnglish #ad`,
  `English teachers when they see an app that gives better feedback than a red pen \u{1F605}\u{270F}\u{FE0F} Link in bio #TeacherTok #EnglishTeacher #ad`,
]

const instagramCaptions = [
  `Revision doesn\u2019t have to be painful \u{1F4DA}\n\nI\u2019ve been using The English Hub to prep for my GCSEs and honestly\u2026 the AI essay marker is a game changer. It reads your work, gives you a grade, and tells you exactly what to fix \u2014 paragraph by paragraph.\n\nNo tutor. No waiting for your teacher to mark it. Just instant, detailed feedback.\n\nLink in bio \u{1F517}\n\n#GCSErevision #EnglishGCSE #StudyTok #revision2026 #studygram #theenglishhub #ad`,
  `Teachers: imagine getting your lesson planning done in 30 seconds \u{23F0}\n\nThe English Hub has an AI lesson planner that builds full lessons with objectives, activities, and resources \u2014 aligned to the curriculum.\n\nI used to spend my Sundays planning. Now I spend them actually resting.\n\nLink in bio to try it \u{1F449}\n\n#TeachersOfInstagram #TeacherLife #NQT #ECT #EnglishTeacher #theenglishhub #ad`,
  `Grade 4 \u2192 Grade 7. No tutor. No stress. Just consistent practice with the right tool \u{1F4AA}\n\nThe English Hub breaks everything down \u2014 courses, AI essay marking, instant feedback. It\u2019s like having a teacher available 24/7.\n\nIf you\u2019re revising for English, this is it. Link in bio.\n\n#GCSEresults #StudyMotivation #GCSE2026 #revision #studygram #ad`,
  `What I wish I\u2019d had during my GCSEs \u{1F62D}\u{1F447}\n\nThe English Hub combines structured courses with AI-powered essay marking. You write, it grades, it tells you how to improve. Every single time.\n\nWhether you\u2019re a student revising or a teacher looking for tools that actually work \u2014 check it out.\n\nLink in bio \u2728\n\n#EnglishRevision #GCSEprep #edtech #studytips #theenglishhub #ad`,
]

const twitterPosts = [
  `The English Hub just marked my essay in 10 seconds and gave me better feedback than I got all term. AI revision tools are getting scary good. [YOUR LINK] #GCSE #ad`,
  `Teachers: there\u2019s an AI lesson planner that builds full English lessons in under a minute. I didn\u2019t believe it until I tried it. [YOUR LINK] #TeacherTwitter #ad`,
  `If you\u2019re revising for English GCSE and you\u2019re not using AI essay marking yet, you\u2019re making it harder than it needs to be. [YOUR LINK] #revision #ad`,
  `The English Hub = structured courses + AI essay marker + instant feedback. Basically a 24/7 English tutor for the price of a coffee. [YOUR LINK] #edtech #GCSE #ad`,
]

const contentIdeas = [
  'Film yourself using the AI essay marker \u2014 show the before and after feedback. The reaction content writes itself.',
  'Do a \u201Cstudy with me\u201D session using The English Hub courses. Screen-record your progress through a module.',
  'React to the AI feedback on a deliberately bad essay. Humour + education = high engagement.',
  'Show the lesson planner generating a full lesson in real-time. Teachers in your audience will share it.',
  'Interview a friend who used it for revision \u2014 show their grade improvement. Social proof converts.',
  'Create a \u201C3 things I wish I\u2019d known before my GCSEs\u201D video and feature The English Hub as one of them.',
  'Do a side-by-side comparison: revising with just a textbook vs. revising with The English Hub.',
]

const brandGuidelines = [
  'Always use our full name: \u201CThe English Hub\u201D \u2014 not \u201CEnglish Hub\u201D or \u201CTEH\u201D.',
  'Include #ad or #affiliate in all sponsored content. This is a legal requirement under ASA guidelines.',
  'Don\u2019t make false grade guarantees (e.g. \u201Cguaranteed Grade 9\u201D). You can share real results and improvements.',
  'Link directly to theenglishhub.app using your affiliate link. Don\u2019t use link shorteners that hide the destination.',
  'You\u2019re welcome to use screenshots and screen recordings of the app in your content.',
  'Keep it honest and authentic \u2014 your audience trusts you because you\u2019re real. Don\u2019t oversell.',
]

const performanceTips = [
  {
    icon: TrendingUp,
    title: 'Show Real Results',
    description:
      'Content that shows REAL results performs best. Screen-record actual AI feedback, share genuine grade improvements, show the product in action.',
  },
  {
    icon: Hash,
    title: 'Be Authentic',
    description:
      'Students trust other students. Teachers trust other teachers. Speak from your genuine experience \u2014 forced sales pitches always underperform.',
  },
  {
    icon: Video,
    title: 'Demonstrate, Don\u2019t Describe',
    description:
      'Teachers respond to time-saving demonstrations. Students respond to \u201Cbefore and after\u201D content. Show the app working, don\u2019t just talk about it.',
  },
  {
    icon: Clock,
    title: 'Post at Peak Times',
    description:
      'Post during peak study hours: 4\u20138pm on weekdays and weekend mornings. That\u2019s when students are actively thinking about revision.',
  },
]
