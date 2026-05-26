/**
 * Marketing copy templates for The English Hub affiliate programme.
 *
 * Each template uses {CODE} (the affiliate's promo code) and {URL} (their
 * referral link) as placeholders. The resources page UI substitutes those at
 * render time, so write copy that reads naturally with them in place.
 *
 * Voice: warm, peer-to-peer, useful. Affiliates are mostly teachers, content
 * creators, and ex-students - not sales bros. Authenticity beats polish: posts
 * that read like ad copy lose engagement.
 *
 * Hard rules every template must respect (and the audit script enforces):
 *   - British English (revision, GCSE, marks, exam papers, £).
 *   - Both {CODE} and {URL} placeholders present.
 *   - The £20/year Student Annual rate (saves £9.99 vs. £29.99) is mentioned
 *     somewhere - affiliates can soften it but the price point has to be in
 *     the body so readers see the headline before they click.
 *   - "Annual subscriptions only - monthly plans aren't discounted" appears
 *     in the body so readers don't try to apply the code at the £3.99/mo tier
 *     and bounce when it fails.
 *   - The 7-day free trial with card-required + cancel-before-day-7 mechanics
 *     are explained (in long formats) or at least signalled (in short ones).
 *   - #ad disclosure visible: at the START of short formats (so it isn't
 *     hidden under "more"), and in a clear AD: / disclosure block in long
 *     formats (threads, newsletters, blog posts, video scripts).
 *
 * Features mentioned are limited to the actual product surface:
 *   AQA / Edexcel / OCR / WJEC / Cambridge IGCSE coverage,
 *   AI essay marking, mock exams, revision notes, flashcards.
 *   Pricing: £3.99/mo or £29.99/yr (or £20/yr with an affiliate code).
 *   7-day free trial, card required, cancel anytime.
 *
 * If you're tempted to add a feature not in that list - don't. Affiliates who
 * post fabricated benefits get refund spikes and ASA complaints, and we eat
 * the chargeback either way.
 */

export interface PromoTemplate {
  id: string
  platform: 'twitter' | 'instagram' | 'tiktok' | 'email' | 'blog' | 'youtube'
  format: string // "thread starter", "story caption", etc.
  title: string // shown to affiliate
  text: string // the template text - use {CODE} and {URL} as placeholders
  /** Hashtags suggested separately so they're easy to swap out. */
  hashtags?: string[]
  /** What kind of content this works best with. */
  bestFor: string
  /** Short context note shown above the textarea. */
  note?: string
}

export const PROMO_TEMPLATES: PromoTemplate[] = [
  /* ------------------------------------------------------------------ */
  /*  TWITTER / X                                                        */
  /* ------------------------------------------------------------------ */
  {
    id: 'twitter-thread-starter',
    platform: 'twitter',
    format: 'thread starter (5+ tweets)',
    title: 'Long-form thread - revision tip + product mention',
    text: `1/ Most GCSE English revision goes wrong in the same place: students re-read their notes, feel productive, and then freeze the moment a real exam question lands.

A short thread on what actually moves marks, plus the platform I keep recommending. (AD - full disclosure at the end.)

2/ Re-reading is recognition, not recall. You feel like you know it because the words look familiar. The exam is asking something else: can you produce a coherent, evidenced answer under time pressure?

The fix is uncomfortable on purpose - practise retrieval, not review.

3/ What that looks like in practice:
· Close the notes. Write everything you remember about a theme in 5 minutes.
· Then go back and check what you missed.
· Repeat in 48 hours, then a week later.

Boring. Effective. The forgetting is the point.

4/ The other half of the work is feedback. You can write 20 essays and not improve if no one tells you what's drifting.

This is the bit students hate doing alone - and the bit teachers don't have time to mark every week.

5/ The platform I've been pointing students at is The English Hub - AQA, Edexcel, OCR, WJEC and Cambridge IGCSE coverage with AI essay marking, mock papers, revision notes and flashcards in one place.

There's a 7-day free trial (card required, cancel before day 7 if it's not for you).

6/ Pricing is £3.99/month or £29.99/year normally. With my code {CODE} the annual plan drops to £20 - a £9.99 saving. Annual only - the monthly plan isn't discounted.

Link: {URL}

7/ AD / disclosure: I'm an affiliate for The English Hub. If you sign up through my link I earn a small commission, at no extra cost to you. I only recommend it because I'd point my own students at it. Questions - reply and I'll answer.`,
    hashtags: ['#GCSE', '#GCSEEnglish', '#Revision', '#TeacherTwitter'],
    bestFor:
      'Teachers and tutors with an established Twitter audience. Best posted Sunday evening or weekday mornings.',
    note: 'Threads work best when tweet 1 is a clear hook with a contrarian angle. Keep tweet 6 (the offer) short and let tweet 7 carry the disclosure cleanly.',
  },
  {
    id: 'twitter-short-standalone',
    platform: 'twitter',
    format: 'standalone tweet (under 240 chars)',
    title: 'Short tweet - single mention with link',
    text: `#ad - my GCSE English students keep asking what I use for marking practice. The English Hub: AI essay marking, mock papers, revision notes for AQA/Edexcel/OCR/WJEC. £20/year with code {CODE} (saves £9.99, annual only). 7-day free trial. {URL}`,
    hashtags: ['#GCSE', '#GCSEEnglish'],
    bestFor: 'Quick replies to revision-thread queries, scheduled posts, week-of-exam reminders.',
    note: 'Twitter truncates after ~250 chars on mobile preview. The #ad needs to be visible without "more" being tapped.',
  },
  {
    id: 'twitter-reply-hook',
    platform: 'twitter',
    format: 'reply to a struggling-student post',
    title: 'Reply hook - for "I am struggling with GCSE English" tweets',
    text: `Sorry you're in the thick of it - that subject is brutal without proper feedback on your essays.

#ad - I use The English Hub with my students. AI marks your essays against AQA/Edexcel/OCR mark schemes so you can see exactly where the marks are leaking. 7-day free trial, no charge if you cancel before day 7.

Code {CODE} drops the annual plan from £29.99 to £20 (annual only - monthly isn't discounted): {URL}

Happy to answer specific questions about your paper if it helps.`,
    bestFor:
      'Genuine replies to students venting about GCSE English. Only post when you can also offer real advice - drive-by promos get ratioed.',
    note: "Lead with empathy, not the link. If the parent thread isn't actually about marking/feedback, skip it - wrong context kills conversion.",
  },
  {
    id: 'twitter-quote-tweet',
    platform: 'twitter',
    format: 'quote-tweet of a study tip',
    title: 'Quote-tweet - adding context to a helpful study tip',
    text: `This is the bit most students skip - actually getting feedback on the essay you just wrote, not just writing more of them.

#ad - for anyone without a teacher to mark practice essays, The English Hub does AI marking against AQA/Edexcel/OCR/WJEC mark schemes. £20/year with {CODE} (annual plan only, normally £29.99). 7-day free trial. {URL}`,
    bestFor:
      'Quote-tweeting an existing piece of revision advice that pairs with the product (essay technique, mark-scheme tips, exam-day prep).',
    note: "The original tweet has to genuinely benefit from the add-on. Don't hijack a tip that has nothing to do with marking or feedback.",
  },

  /* ------------------------------------------------------------------ */
  /*  INSTAGRAM                                                          */
  /* ------------------------------------------------------------------ */
  {
    id: 'instagram-photo-caption',
    platform: 'instagram',
    format: 'photo caption (3 lines)',
    title: 'Photo caption - desk shot, revision setup, etc.',
    text: `Trying to revise GCSE English without feedback on your essays is like training in the dark.
The English Hub marks your essays against AQA/Edexcel/OCR/WJEC mark schemes - annual plan £20 with my code (normally £29.99, saves £9.99, annual only). 7-day free trial, card required.
Link in bio ({URL}) · code {CODE} · #ad`,
    hashtags: ['#GCSE', '#GCSEEnglish', '#Revision', '#StudyGram', '#Year11'],
    bestFor: 'Static posts: revision desk photos, book stacks, study aesthetic shots.',
    note: 'Instagram caption previews cut at line 3 - keep the strongest hook in line 1 and the disclosure visible without expanding.',
  },
  {
    id: 'instagram-reel-caption',
    platform: 'instagram',
    format: 'reel caption (single line + tags)',
    title: 'Reel caption - punchy hook for short video',
    text: `#ad The GCSE English revision platform I wish existed when I was sitting these papers - code {CODE} drops the annual plan to £20 (annual only, normally £29.99). 7-day free trial. {URL}`,
    hashtags: [
      '#GCSE',
      '#GCSEEnglish',
      '#Revision',
      '#StudyTok',
      '#Year11',
      '#TeachersOfInstagram',
    ],
    bestFor:
      'Reels: voice-over revision tips, before/after essay-marking demos, day-in-the-life of a Year 11.',
    note: 'Reels are watched with sound off by default - match the caption to the on-screen text in the video, not the voice-over.',
  },
  {
    id: 'instagram-story-script',
    platform: 'instagram',
    format: 'story sequence (3-4 frames, text only)',
    title: 'Story script - poll/question stickers',
    text: `FRAME 1 (text on screen):
"Year 11s - what's the one thing you keep putting off?" #ad
[Poll sticker: Practice essays / Revision notes / Past papers / Flashcards]

FRAME 2:
"Practice essays won every poll I've run. Same problem every time - no one to mark them."

FRAME 3:
"This is what I've been pointing students at - The English Hub. AI essay marking against AQA/Edexcel/OCR/WJEC mark schemes. Mock papers, revision notes, flashcards in one place."
[Question sticker: "Which exam board are you sitting?"]

FRAME 4:
"Annual plan is £29.99 - code {CODE} drops it to £20 (annual only, monthly isn't discounted). 7-day free trial, card required, cancel before day 7 if it's not for you."
[Link sticker → {URL}]
[Sticker text: "Tap for the link"]`,
    bestFor:
      'Affiliates who run interactive stories - lots of replies, polls, Q&A sessions with students.',
    note: 'Place #ad on the FIRST frame. Stories with the disclosure buried in frame 4 fall foul of ASA guidance.',
  },

  /* ------------------------------------------------------------------ */
  /*  TIKTOK                                                             */
  /* ------------------------------------------------------------------ */
  {
    id: 'tiktok-talking-head',
    platform: 'tiktok',
    format: 'talking-head video script (30-60s)',
    title: 'Talking-head script - "the GCSE platform I wish I had"',
    text: `[ON SCREEN: "#ad - affiliate link in bio"]

(0-5s, hook)
"Here's the GCSE English platform I genuinely wish I'd had when I was sitting my exams - and I'll explain in 30 seconds why."

(5-15s, problem)
"The bit that ruins most GCSE English revision isn't the reading - it's that no one ever tells you whether your practice essays are actually any good. You write them, your teacher gets to two of them per term, and you're flying blind for the rest."

(15-30s, product)
"The English Hub is the one I keep recommending. AI essay marking against the actual AQA, Edexcel, OCR and WJEC mark schemes - you paste your essay, it gives you a band, comments and what to fix. Plus mock papers, revision notes, flashcards, all in one place."

(30-45s, offer)
"Pricing - £29.99 a year normally, or £3.99 a month. My code {CODE} drops the annual plan to £20, so a £9.99 saving. The discount is annual only, monthly isn't discounted. There's a 7-day free trial - card required, but cancel before day 7 and you won't be charged."

(45-55s, CTA + disclosure)
"Link's in my bio with the code attached. AD - I'm an affiliate, I get a small commission if you sign up through my link, costs you nothing extra. Comment your exam board if you want me to make a board-specific breakdown."

[ON SCREEN throughout: "#ad" / code {CODE} / link in bio]

[Caption below the video]:
#ad - code {CODE} · {URL} · annual plan £20 (annual only · normally £29.99) · 7-day free trial (card required, cancel before day 7)`,
    hashtags: ['#GCSE', '#GCSEEnglish', '#Revision', '#StudyTok', '#Year11', '#fyp'],
    bestFor:
      'Creators with a student or teacher audience. Works for both "as a teacher" and "as a recent ex-student" angles.',
    note: "TikTok's ad disclosure tool exists - use it as well as the on-screen #ad. Don't rely on caption alone.",
  },
  {
    id: 'tiktok-pov-skit',
    platform: 'tiktok',
    format: 'POV/skit script (15-30s)',
    title: 'POV skit - "finally found a revision platform that doesn\'t suck"',
    text: `[ON SCREEN throughout: "#ad"]

(0-3s)
TEXT: "POV: you finally found a revision platform that doesn't suck"
[Wide-eyed reaction shot, raise eyebrows]

(3-8s)
[Quick cuts of the platform - essay marking screen, mock paper, revision note]
TEXT OVER: "AI marks your essays · AQA/Edexcel/OCR/WJEC · mock papers · revision notes"

(8-13s)
[Look at camera, deadpan]
TEXT: "And it's £20 a year with my code"
TEXT (smaller): "annual only - monthly isn't discounted"

(13-18s)
[Pretend to wipe a tear]
TEXT: "Where were you in 2019"

(18-25s, CTA)
TEXT ON SCREEN: "Code {CODE} · link in bio · 7-day free trial"
VOICEOVER: "AD - affiliate link, code {CODE}, link in my bio. Annual plan £20 instead of £29.99. Seven-day free trial, card required, cancel before day 7."

[Caption below the video]:
#ad - code {CODE} · {URL} · annual plan only · 7-day free trial (card required, cancel before day 7)`,
    hashtags: ['#GCSE', '#GCSEEnglish', '#StudyTok', '#Revision', '#Year11', '#fyp'],
    bestFor: 'Creators with a comedic / Gen Z student audience. Works best at <25s.',
    note: "Comedy POVs date fast - the format is replaceable but the disclosure rules aren't. Keep #ad on screen for the full duration, not just at the end.",
  },

  /* ------------------------------------------------------------------ */
  /*  EMAIL / NEWSLETTER                                                 */
  /* ------------------------------------------------------------------ */
  {
    id: 'email-teacher-to-parents',
    platform: 'email',
    format: 'subject line + 100-word body',
    title: 'Teacher → class parent group',
    text: `SUBJECT: A revision platform I'm recommending for GCSE English at home

Hi all,

A few of you have asked what I use to set extra GCSE English practice. I've been pointing students at The English Hub - it covers AQA, Edexcel, OCR, WJEC and Cambridge IGCSE, with AI essay marking against the real mark schemes, mock papers, revision notes and flashcards.

There's a 7-day free trial (card required, cancel before day 7 with no charge). The annual plan is £29.99, but my affiliate code {CODE} drops it to £20 - annual subscriptions only, the monthly plan isn't discounted.

Link: {URL}

AD: I'm an affiliate; if you sign up via the link I earn a small commission. No extra cost to you, and I'd recommend it either way.

Best,
[Your name]`,
    bestFor:
      'Form tutors, English department leads, or private tutors emailing the parent group of a Year 10/11 cohort.',
    note: 'Schools have varying rules on staff promoting paid services - check your AUP. The disclosure block is non-negotiable under ASA guidance.',
  },
  {
    id: 'email-creator-newsletter',
    platform: 'email',
    format: 'subject line + 200-word body',
    title: 'Creator → student-focused newsletter list',
    text: `SUBJECT: The one revision tool I'd actually pay for (and a code for £9.99 off)

Hey,

Quick one - a lot of you ask what I'd use if I were sitting GCSE English right now, so I'm finally putting it in writing.

The bit that breaks most people's revision isn't time. It's that you write practice essays into the void. Your teacher can mark two a term if you're lucky. The rest sit in a notebook with no idea whether you're a 5, a 6 or a 7.

I've been recommending The English Hub. It marks your essays with AI against the actual AQA, Edexcel, OCR and WJEC mark schemes - band, comments, and what to fix next. You also get mock papers, revision notes and flashcards alongside. Cambridge IGCSE is in there too if you're sitting those.

Pricing: £3.99/month or £29.99/year. Use my code {CODE} and the annual plan drops to £20 - a £9.99 saving. Annual subscriptions only - the monthly plan isn't discounted. There's a 7-day free trial, card required, cancel before day 7 and you won't be charged a penny.

Link with the code applied: {URL}

- [Your name]

AD / disclosure: I'm an affiliate for The English Hub. If you sign up through this link I earn a small commission at no extra cost to you. I'd recommend it either way; if you try it and don't rate it, hit reply and I'll happily eat the criticism.`,
    bestFor:
      'Newsletter creators with a student/parent audience - Substack, Beehiiv, ConvertKit lists.',
    note: 'Subject lines with a specific number ("£9.99 off") outperform generic ones. The reply-back invitation in the disclosure block softens the ad and lifts engagement.',
  },

  /* ------------------------------------------------------------------ */
  /*  BLOG / REVIEW ARTICLE                                              */
  /* ------------------------------------------------------------------ */
  {
    id: 'blog-200-word-blurb',
    platform: 'blog',
    format: '200-word product blurb',
    title: 'Short blurb - slot into an existing revision post',
    text: `## A platform worth a look: The English Hub

If you're revising GCSE English at home and your school can't mark essays as often as you'd like, The English Hub is worth a serious look. It covers all the major boards - AQA, Edexcel, OCR, WJEC and Cambridge IGCSE - and the AI essay marker scores your work against the actual mark schemes, with band, comments and what to fix next. Alongside that you get mock papers, revision notes and flashcards in one place, so you're not stitching three subscriptions together.

Pricing is straightforward: £3.99 a month or £29.99 a year. Using my affiliate code {CODE}, the annual plan drops to £20 - a £9.99 saving. Worth flagging: the discount applies to annual subscriptions only, the monthly plan isn't discounted. There's a 7-day free trial with card required, and you can cancel any time before day 7 without being charged.

Link with the code applied: {URL}

*Disclosure (AD): I'm an affiliate for The English Hub and earn a small commission if you sign up through the link above, at no additional cost to you.*`,
    bestFor:
      'Pasting into an existing GCSE-revision blog post or guide. Works as a sidebar recommendation or end-of-post resource.',
    note: "The italics on the disclosure aren't cosmetic - the ASA wants the disclosure to be conspicuous, not buried in body copy.",
  },
  {
    id: 'blog-500-word-review',
    platform: 'blog',
    format: '500-word review article (skeleton with H2s)',
    title: 'Standalone review - H2 skeleton for the affiliate to fill in',
    text: `# The English Hub Review: Is the AI Essay Marking Actually Worth It?

*AD / Disclosure: This article contains affiliate links. If you subscribe via the links below I earn a small commission at no additional cost to you. The opinions and the testing are my own.*

## What is The English Hub?

[Two or three sentences in your own words: a UK GCSE English revision platform covering AQA, Edexcel, OCR, WJEC and Cambridge IGCSE, with AI essay marking, mock papers, revision notes and flashcards.]

## What you actually get for the money

[List what's on the platform, in your own words. Stick to: exam-board aligned courses, AI essay marking, mock exams, revision notes, flashcards. Don't add anything else.]

## How the AI essay marking compares to a teacher

[Your honest take after testing it. Useful angles: turnaround speed vs. a teacher (instant vs. weeks), how the band/comments map to the real mark scheme, where it's strongest, where a human teacher still wins.]

## Who it's actually for

[Your view on fit. Likely candidates: Year 10/11 students whose schools can't mark essays often enough, home-schoolers, private tutors, parents supporting revision at home.]

## Pricing and the discount code

The English Hub is £3.99 a month or £29.99 a year on standard pricing. With my code {CODE} the annual plan drops to £20 - a £9.99 saving against the standard annual rate. The discount applies to annual subscriptions only; the monthly plan isn't discounted.

There's a 7-day free trial. A valid payment method is required to start the trial; cancel any time before day 7 and you won't be charged. Cancellations are straightforward in the account settings.

[Link with the code applied: {URL}]

## The verdict

[Your one-paragraph conclusion. Honest pros/cons. Affiliates who write balanced reviews convert better than ones that read like ad copy - the reader is already sceptical, the balance is what earns trust.]

## FAQ

**Is the £20 price for monthly or annual?**
Annual only. The monthly plan stays at £3.99 regardless of code.

**Does the trial really cancel cleanly?**
Yes - cancel before day 7 in the account settings and you won't be charged. The card is held but not billed during the trial.

**Which exam boards are covered?**
AQA, Edexcel, OCR, WJEC and Cambridge IGCSE.`,
    bestFor:
      'A standalone review post on a personal blog or revision-resources site. Works best for affiliates with existing organic traffic for "GCSE English revision" terms.',
    note: "Each [bracketed] section is a placeholder for the affiliate to fill in their own honest opinion. The pricing/disclosure paragraphs are pre-written because they're the bits that have to be exact.",
  },

  /* ------------------------------------------------------------------ */
  /*  YOUTUBE                                                            */
  /* ------------------------------------------------------------------ */
  {
    id: 'youtube-end-screen-pitch',
    platform: 'youtube',
    format: 'end-screen pitch (30s spoken script)',
    title: 'End-screen pitch - 30-second sponsor read at the end of a video',
    text: `[ON SCREEN: "AD - affiliate link in description, code {CODE}"]

"Quick one before you go - if you're revising GCSE English and your school can't mark every practice essay you write, the platform I keep recommending is The English Hub. AI essay marking against the real AQA, Edexcel, OCR and WJEC mark schemes, plus mock papers, revision notes and flashcards in one place.

There's a 7-day free trial - card required, cancel before day 7 and you won't be charged. Annual plan is £29.99 normally, or £20 with my code {CODE}. Worth flagging: the discount is annual only, the monthly plan isn't discounted.

Link's in the description with the code attached. AD - I'm an affiliate, I earn a small commission if you sign up through it. Costs you nothing extra. Cheers for watching."

[ON SCREEN: "#ad · code {CODE} · link in description"]

[The link to paste into the video description, with the code pre-applied]:
{URL}`,
    bestFor:
      'Drop into the last 30 seconds of an existing revision/study video. Works for both long-form and Shorts ending cards.',
    note: 'YouTube also requires the "Includes paid promotion" toggle in upload settings - the on-screen graphic isn\'t a substitute, it\'s in addition to.',
  },
  {
    id: 'youtube-description-and-pinned',
    platform: 'youtube',
    format: 'description + pinned comment',
    title: 'Video description + pinned comment template',
    text: `=== VIDEO DESCRIPTION ===

[Your existing video description / timestamps here.]

-

AD / Affiliate disclosure: this video includes a paid promotion for The English Hub.

The English Hub - GCSE English revision platform covering AQA, Edexcel, OCR, WJEC and Cambridge IGCSE. AI essay marking, mock papers, revision notes and flashcards.

· 7-day free trial (card required, cancel before day 7 to avoid charge)
· £3.99/month or £29.99/year standard pricing
· Use code {CODE} for the annual plan at £20 - saves £9.99
· Discount applies to annual subscriptions only; monthly plan isn't discounted

Sign up: {URL}
Code: {CODE}

I'm an affiliate for The English Hub and earn a small commission if you sign up through the link above, at no extra cost to you.

=== PINNED COMMENT ===

For anyone asking about the platform I mentioned - it's The English Hub, link and code in the description. AD: affiliate link, I earn a small commission at no extra cost to you.

Quick recap on the offer:
· Annual plan £20 with code {CODE} (normally £29.99 - saves £9.99)
· Annual only - the monthly plan isn't discounted
· 7-day free trial, card required, cancel before day 7 if it isn't for you

{URL}

Drop your exam board below if you want me to do a board-specific revision breakdown next.`,
    bestFor:
      'Any sponsored video - works as the standard format for descriptions and pinned comments going forward.',
    note: "Pin the comment immediately on upload - YouTube's top comment is what most viewers actually read, and an unpinned one gets buried.",
  },
]
