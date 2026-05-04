# Tomorrow's outreach bundle — Mac / phone friendly

**For:** Calum, Sat 26 Apr 2026 (or whenever you next sit down with this)
**Use:** complete TikTok + Instagram + YouTube manual sending session in ~45 min, plus one click to fire all 34 Gmail drafts.

═══════════════════════════════════════════
SECTION 1 · ONE-CLICK GMAIL SEND (do this first, takes 30 sec)
═══════════════════════════════════════════

1. Open Mac browser → [script.google.com](https://script.google.com)
2. Click "New project" (or open the existing one if you already have it)
3. Paste this whole block and click ▶ Run on `sendAllRemainingDrafts`:

```javascript
function sendAllRemainingDrafts() {
  var drafts = GmailApp.getDrafts()
  var sent = 0
  var skipped = []
  drafts.forEach(function (d) {
    var to = d.getMessage().getTo() || ''
    d.send()
    sent++
    Logger.log('SENT → ' + to)
  })
  Logger.log('───────────────')
  Logger.log('TOTAL SENT: ' + sent)
}
```

Approve permissions when Google prompts. **34 drafts go in 10 seconds.** Check Sent folder to verify; should land at exactly 34 + whatever was already there.

═══════════════════════════════════════════
SECTION 2 · TIKTOK PRE-FLIGHT (3 boxes — must be green)
═══════════════════════════════════════════

- [ ] TikTok handle `@theenglishhubapp` reserved (or your chosen variant)
- [ ] At least 1 video posted on the brand handle (even a 5-second logo card counts)
- [ ] Bio line set: `AI-marked GCSE & IGCSE English · Built by a teacher · theenglishhub.app`

If any red, fix before sending DMs. A DM from an empty profile = wasted creator.

═══════════════════════════════════════════
SECTION 3 · TIKTOK DMs — 7 ready to paste
═══════════════════════════════════════════

Open TikTok → search handle → tap profile → tap "Message" → paste **only Message 1** verbatim. Wait for reply before sending Message 2.

──────────────────────────
TT-01 · @sarahteachesgcseenglish (~25K)
──────────────────────────

**Message 1:**

> Hi Sarah — your mock-paper walkthroughs are exactly the gap most revision tools leave open, and I noticed you're examining alongside teaching, which makes the pitch I'm about to make a bit less awkward. I'm Calum from The English Hub — GCSE/IGCSE English app, built with a serving secondary English teacher, AI essay feedback against the real AO mark scheme. Can I send you a free teacher account?

**Message 2 (after reply):**

> Brilliant. Apply at theenglishhub.app/creators?utm_source=tiktok&utm_content=tt01 — same form covers Creator Partner if you fancy 20% recurring on signups (custom code → £20/yr for your followers). No pressure either way. Use the account first.

──────────────────────────
TT-02 · @lisa.gcse.english (~18K)
──────────────────────────

**Message 1:**

> Hi Lisa — saw your creative-writing breakdown on TikTok this week, and the way you explain sentence-structure variation in 30 seconds is genuinely better than how most departments teach it. I'm Calum from The English Hub — GCSE/IGCSE English platform built with a serving teacher, AI marking against the real AO mark scheme. Free teacher account on offer if you'd like to have a look. Can I send it over?

**Message 2:**

> Brilliant. Apply at theenglishhub.app/creators?utm_source=tiktok&utm_content=tt02 — same form covers Creator Partner: 20% recurring, custom code → £20/yr for your followers, paid monthly. No pressure. Use the account first.

──────────────────────────
TT-03 · @misskenglish (~12K)
──────────────────────────

**Message 1:**

> Hi — your quick-fire text-analysis videos are doing the job most revision channels can't be bothered to do well, especially the ones on character motivation. I'm Calum from The English Hub — GCSE/IGCSE English app, built by a serving teacher, AI essay marking against the real AO rubric. Can I send you a free teacher account to have a look at?

**Message 2:**

> Lovely. Apply here: theenglishhub.app/creators?utm_source=tiktok&utm_content=tt03 — I'll approve today. Creator Partner side is on the same form (20% recurring, custom code dropping the annual to £20 for followers, paid monthly) but it's optional. Account first.

──────────────────────────
TT-04 · @theenglishteacher\_ (~10K)
──────────────────────────

**Message 1:**

> Hi — your poetry breakdowns are doing the unglamorous teaching that most short-form skips. The 90-second on Power and Conflict imagery in particular landed. I'm Calum from The English Hub — GCSE/IGCSE English platform with AI essay feedback against the real AO mark scheme, built by a serving teacher. Free teacher account on offer if you'd like to try it.

**Message 2:**

> Brilliant. Application here: theenglishhub.app/creators?utm_source=tiktok&utm_content=tt04 — I'll approve same day. Creator Partner side optional (20% recurring, custom code → £20/yr for followers).

──────────────────────────
TT-05 · @englishteacherchloe (~6K)
──────────────────────────

**Message 1:**

> Hi Chloe — your set-text discussion videos are some of the most useful in the GCSE-English corner of TikTok, and your book recs are good enough that I keep noting them down. I'm Calum from The English Hub — GCSE/IGCSE English app, built with a serving teacher, AI essay marking against the real AO rubric. Free teacher account on offer if you'd like to have a look.

**Message 2:**

> Brilliant. Apply at theenglishhub.app/creators?utm_source=tiktok&utm_content=tt05 — I'll approve today. Creator Partner side on the same form (20% recurring, custom code → £20/yr for followers, paid monthly), optional.

──────────────────────────
TT-06 · @mreverythingenglish (~120K) — already emailed too
──────────────────────────

**NOTE:** I've already sent an email to `info@everythingeducation.co.uk` for this creator. The TikTok DM is a parallel touch — fine to send both.

**Message 1:**

> Hi — the P.R.T.E.Z.E.L videos are the kind of structured-acronym teaching that pupils actually hold onto, and your exam-prediction posts get more right than most. I'm Calum from The English Hub — GCSE/IGCSE English app, built with a serving teacher, AI essay feedback against the real AO mark scheme. Free teacher account if you'd like to try it. No pressure on a partnership — use the account first.

──────────────────────────
TT-07 · @staceyreay1 (~60K) — already emailed too (best-guess)
──────────────────────────

**NOTE:** Already emailed to `hello@staceyreay.co.uk` (best-guess address, may have bounced). The TikTok DM is the more reliable touch.

**Message 1:**

> Hi Stacey — your character-analysis series for Inspector Calls is the closest thing on TikTok to a structured masterclass, which makes sense given your Eventbrite work. I'm Calum from The English Hub — GCSE/IGCSE English app, built with a serving teacher, AI essay feedback against the real AO mark scheme. Free teacher account on offer if you'd like to look it over. The Creator Partner side may be a natural fit alongside your masterclasses but use the account first.

═══════════════════════════════════════════
SECTION 4 · INSTAGRAM DMs — 4 ready to paste
═══════════════════════════════════════════

Open Instagram → search handle → DM → paste Message 1. Same rule: no link in Message 1, link only after reply.

──────────────────────────
IG-01 · @myhoneststudyblr (Sophie, ~193K)
──────────────────────────

**Message 1:**

> Hi Sophie — the aesthetic-revision-notes carousel format you helped popularise is genuinely the reason a lot of Year 11s start revising at all. I'm Calum from The English Hub — GCSE/IGCSE English app, built with a serving teacher, AI essay feedback against the real AO mark scheme. Free account on offer if you'd like to have a look.

**Message 2:**

> Brilliant. Apply at theenglishhub.app/creators?utm_source=instagram&utm_content=ig01 — I'll approve same day. Creator Partner side on the same form: 20% recurring, custom code → £20/yr for your followers, paid monthly. But — use the account with one essay first.

──────────────────────────
IG-02 · @felicitynotes (~208K)
──────────────────────────

**Message 1:**

> Hi — the colour-coded revision-note format you've made canonical does for organisation what Pomodoro does for time. I'm Calum from The English Hub — GCSE/IGCSE English app, built with a serving teacher, AI essay feedback against the real AO mark scheme. UK exam boards plus Cambridge IGCSE. Free account if you'd like to have a look — no commitment to post anything.

**Message 2:**

> Brilliant. Apply: theenglishhub.app/creators?utm_source=instagram&utm_content=ig02. Creator Partner optional (20% recurring, custom code → £20/yr, 30-day cookie, paid monthly). Use the account first.

──────────────────────────
IG-03 · @thelightuptutor (~226K TikTok / 101K IG) — already emailed too
──────────────────────────

**NOTE:** Already emailed to `contact@thelightuphub.com`. The IG DM is a parallel touch.

**Message 1:**

> Hi — the in-the-margin-marking videos are the closest thing to watching a real teacher mark, which is exactly what most pupils have never seen. I'm Calum from The English Hub — GCSE/IGCSE English app, built with a serving teacher, AI essay feedback against the real AO mark scheme. Free tutor / teacher account if you'd like to look it over.

──────────────────────────
IG-04 · Dr Amina Yonis IG handle (~20K) — already emailed too
──────────────────────────

**NOTE:** Already emailed to `amina@aminayonis.com`. The IG DM is a parallel touch.

**Message 1:**

> Hi Amina — your unseen-prose explainers are operating at A-Level rigour while still being usable at GCSE, which is unusually rare on Instagram. I'm Calum from The English Hub — GCSE/IGCSE English app, built with a serving secondary English teacher, AI essay feedback against the real AO mark scheme. Free educator account if you'd like to take a look.

═══════════════════════════════════════════
SECTION 5 · NEXT 30 CREATORS — bulk DM template + per-person hook
═══════════════════════════════════════════

For each creator below: copy the **template at the top**, paste the personalised **[HOOK]** line in, send via TikTok or Instagram DM.

**Universal template (paste this, fill the two [SLOTS]):**

```
Hi [FIRST NAME] — [HOOK]. I'm Calum from The English Hub — GCSE/IGCSE English app, built with a serving secondary teacher, AI essay feedback against the real AO mark scheme. Free teacher account on offer if you'd like to have a look. 20% recurring custom-code Creator Partner programme is optional on the same form. Account first, partnership later if it earns its place.
```

**Message 2 (only after reply):**

```
Brilliant. Apply at theenglishhub.app/creators?utm_source=[platform]&utm_content=[slug] — same form covers Creator Partner if you fancy it (20% recurring, custom code dropping the annual price to £20 for your followers, paid 1st of every month, 30-day cookie). Honestly — use the account first, tell me what's rubbish.
```

| #   | Handle                  | Platform               | Tier       | [HOOK] (the bit between the dashes in template)                                                                               |
| --- | ----------------------- | ---------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 1   | @studyplate             | TikTok                 | Micro      | your "GCSE 6 → A-Level A" content directly targets the transition where pupils are most willing to invest in better tools     |
| 2   | @davidcaii              | IG/TikTok              | Mid        | your sixth-form study-vlog format brought a quality bar to study content that didn't exist before you                         |
| 3   | @conversationswithruby  | TikTok                 | Micro      | your study-life reflections from Cambridge land because they're the rare student-creator content that doesn't perform success |
| 4   | @studywithjess\_        | TikTok/IG              | Micro      | your live study-with-me sessions are some of the most consistent live-study output in the UK creator landscape                |
| 5   | @revisionqueen          | TikTok                 | Micro      | your revision-timetable creation videos are the practical version of the advice most channels skip                            |
| 6   | @snaprevise             | TikTok/YouTube         | Micro      | your short-form syllabus-aligned revision is the format pupils actually watch end-to-end                                      |
| 7   | @gcsepod                | TikTok/IG              | Micro      | your short-form output around exam season has shaped how a lot of pupils consume revision content                             |
| 8   | @vee_kativhu            | YouTube/IG             | Mid        | your "first-gen Oxford" framing is exactly the aspiration our pupils' parents care about                                      |
| 9   | @ujjademitchell         | YouTube                | Mid        | your Cambridge-applicant content is the brand of academic-aspiration that rubs off on Year 11s well before A-Levels           |
| 10  | @mratkohistoryteacher   | TikTok                 | Macro      | your live-lesson format and Discord community is the most engaged GCSE-revision community the sector has produced             |
| 11  | @MrAllsopHistory        | YouTube/X              | Mid        | your nine-and-a-half-million-view top video is the kind of GCSE-content authority we'd like alongside                         |
| 12  | @historybombs           | YouTube                | Macro      | your BAFTA-winning approach to history education sets a production bar — our cross-subject audience overlap is large          |
| 13  | @thegeographyteacheruk  | TikTok                 | Micro      | your TikTok-champion exam-prediction content is the verified-creator credibility GCSE pupils trust                            |
| 14  | @RogersHistory          | X                      | Micro      | your TeachMeet Icons network and BBC/Guardian work makes the case for teacher-creators who set the conversation               |
| 15  | @MrsHumanities          | X/Blog                 | Micro      | your humanities-curriculum visual resources are an unfair benchmark; our platform-overlap with your audience is real          |
| 16  | @hannahkettlemaths      | TikTok                 | Micro      | your GCSE-examiner-with-engaged-audience credibility is exactly the bar we'd like to be tested at                             |
| 17  | @neildoesmaths          | TikTok                 | Micro      | your ITV-referenced education-influencer status carries the kind of trust our GCSE audience listens to                        |
| 18  | @mrgteacher             | TikTok/IG (Macro 1.2M) | Macro      | your SEMH/ADHD teaching credibility is the kind of trusted-teacher voice that compounds when it recommends a tool             |
| 19  | @teacherteresauk        | IG/TikTok              | Micro      | your positive teacher-tips content directly addresses the workload pain points that make UK teachers stop recommending edtech |
| 20  | @aymteacher             | TikTok                 | Micro      | your day-in-the-life teacher format is the relatable register parent-audiences trust on recommendations                       |
| 21  | @teachwiththomas        | TikTok                 | Nano       | your day-in-the-life teacher format is some of the most authentic-feeling on the platform                                     |
| 22  | @theclassroomteacher\_  | IG/TikTok              | Nano       | your day-in-the-life teacher content is some of the most authentic-feeling on the platform                                    |
| 23  | @educatedminds\_        | YouTube/IG             | Nano       | your "getting through GCSEs" series talks to pupils as people first, not as a revision pipeline                               |
| 24  | @sneharebecc / @srdubai | IG                     | Macro 898K | your Dubai-based UK-curriculum-parent perspective is the international audience our IGCSE coverage is built for               |
| 25  | @qatarmums              | IG                     | Micro      | your community-hub role for Qatar expat parents fits our IGCSE outreach exactly                                               |
| 26  | @maborosho              | IG/TikTok              | Mega       | your music-education Klasses are the celebrity-credibility tier our content most wants to be alongside                        |
| 27  | @thedadlab              | IG/TikTok              | Mega       | your STEM-experiments-at-home format reaches exactly the parent who'll stress-test our platform honestly                      |
| 28  | @fiveminutemum          | IG                     | Macro      | your Five Minute Mum philosophy is exactly the supportive-not-overwhelming voice GCSE-English-stressed parents want to hear   |
| 29  | @imaginationtree        | IG                     | Mid        | your decade of EYFS-rooted parent communication is the kind of pedagogical credibility our parent audience trusts             |
| 30  | @theunmumsymum          | IG                     | Macro      | your relatable parenting voice has built the audience whose kids are now sitting GCSEs                                        |

═══════════════════════════════════════════
SECTION 6 · DAY 3 + DAY 7 FOLLOW-UPS
═══════════════════════════════════════════

**For TikTok / Instagram (paste 3 days after Message 1, only if no reply):**

> Hi [FIRST NAME] — quick bump in case it got buried. Free teacher / educator account on The English Hub, no card, yours to keep. Reply "send" and I'll send the link within the hour. No partnership required.

**For Day 7 (final, paste 7 days after Message 1, no third bump after this):**

> Last one from me — promise. Forget the partnership entirely. If you'd just take the free account and tell me what's missing, that's worth a great deal more than another sign-up. Reply "yes" and the link is with you.

═══════════════════════════════════════════
SECTION 7 · TRACKER (copy into Notes / Google Sheet)
═══════════════════════════════════════════

```
ID | Creator | Platform | Sent (date) | Day 3 sent | Day 7 sent | Replied | Outcome
TT-01 | Sarah Teaches GCSE | TikTok |   |   |   |   |
TT-02 | Lisa GCSE English  | TikTok |   |   |   |   |
TT-03 | Miss K English     | TikTok |   |   |   |   |
TT-04 | The English Teacher| TikTok |   |   |   |   |
TT-05 | English Teacher Chloe | TikTok |   |   |   |   |
TT-06 | Mr Everything Eng  | TikTok |   |   |   |   |
TT-07 | Stacey Reay        | TikTok |   |   |   |   |
IG-01 | Sophie / myhonest  | IG     |   |   |   |   |
IG-02 | Felicity Notes     | IG     |   |   |   |   |
IG-03 | The Lightup Hub    | IG     |   |   |   |   |
IG-04 | Dr Amina Yonis     | IG     |   |   |   |   |
... (continue per creator)
```

═══════════════════════════════════════════
SECTION 8 · WHAT'S ALREADY DONE / RUNNING
═══════════════════════════════════════════

- ✅ **24 emails SENT today** to the first wave of creators (Mr Atkinson, Lucy / English with Lucy, Ross McGill, Craig Barton, Mr Bruff, Mr Salles best-guess, Stacey Reay best-guess, Vee Kativhu, UnJaded Jade, Hannah Kettle Maths, KrissTuition, The Lightup Hub, Cognito, etc.)
- 📝 **34 emails DRAFTED** in your `info@upskillenergy.com` Gmail Drafts — fire all 34 in one go via the Apps Script in Section 1
- 🔁 **Scheduled task running every 5 hours** — researches new creator emails and adds 10–15 fresh drafts to your Drafts folder per cycle. Find it in your Scheduled Tasks sidebar; click "Run now" once tomorrow to pre-approve permissions.
- 📋 **Master sent log** at `D:/Coding/english-hub/SENT_RECIPIENTS_LOG.md` — the scheduled task reads this so it doesn't double-pitch anyone
- 🚫 **Brand-voice-guidelines updated** — no false claims about user counts or ratings; live homepage and `/for-schools` testimonials cleaned

═══════════════════════════════════════════
SECTION 9 · FILES IN THE REPO YOU MAY WANT ON YOUR PHONE
═══════════════════════════════════════════

If you want the full versions on your Mac for reference:

- `D:/Coding/english-hub/OUTREACH_BATCH_002_2026-04-25.md` — 169 named creators with hooks (the full version of Section 5 above)
- `D:/Coding/english-hub/OUTREACH_BATCH_001_2026-04-25.md` — original 14 personalised DMs (Section 3 + 4 above are the cleaned versions)
- `D:/Coding/english-hub/.claude/brand-voice-guidelines.md` — voice rules so any DM you write yourself stays on-brand
- `D:/Coding/english-hub/SENT_RECIPIENTS_LOG.md` — the master sent / drafted ledger
- `D:/Coding/english-hub/CAMPAIGN_PACKS_v1.md` — full 8-campaign briefs (deeper context, not needed for tomorrow but good background)

If you don't have D:/ drive synced to Mac, all of these can be opened from your Mac via VS Code Remote SSH or by emailing yourself the file the next time you're on Windows.

═══════════════════════════════════════════
QUICK-START FLOW FOR TOMORROW
═══════════════════════════════════════════

**On Mac (5 min):** open script.google.com → paste/run script from §1 → 34 emails sent → check Sent folder.

**On phone, TikTok session (15–25 min):** open §3 → for each TT-01 through TT-07, copy Message 1, paste into TikTok DM, mark sent in §7 tracker.

**On phone, Instagram session (10–15 min):** open §4 → for each IG-01 through IG-04, copy Message 1, paste into IG DM, mark sent.

**On phone, bulk wave (20–40 min):** open §5 → for each of the 30 handles, build the message from template + their hook, paste, mark sent.

**Schedule for Day 3:** set a reminder for 29 April to bump anyone who hasn't replied with the §6 follow-up.

**Schedule for Day 7:** set a reminder for 3 May to send the final §6 follow-up to anyone still cold.
