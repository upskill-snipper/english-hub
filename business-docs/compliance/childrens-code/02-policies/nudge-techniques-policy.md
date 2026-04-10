# Nudge Techniques Policy

**Service:** The English Hub
**Version:** 0.9 (draft)
**Owner:** Head of Product / Data Protection Lead
**Last updated:** 2026-04-10

---

## 1. Purpose

This policy implements **Standard 13** of the ICO Age Appropriate Design Code:

> *"Do not use nudge techniques to lead or encourage children to provide unnecessary personal data or weaken or turn off their privacy protections."*

It is binding on all product, design, content, and engineering work on The English Hub.

## 2. What counts as a "nudge" for this policy

The code uses "nudge" broadly. Behavioural design techniques that we classify as nudges for the purposes of this policy include:

- **Design asymmetry** — making the privacy-preserving choice harder (more clicks, smaller button, darker colour, hidden behind a menu) than the privacy-weakening choice
- **False urgency** — countdown timers, "limited time", "don't lose your streak" that pressure a child into an action
- **Confirm-shaming** — language designed to make the user feel bad for the privacy-preserving choice ("No thanks, I hate learning")
- **Forced action** — requiring the user to take an action before they can proceed (e.g., "sign up with Google to continue reading")
- **Hidden opt-outs** — opt-outs buried behind multiple menus, greyed out, or disabled on mobile
- **Pre-ticked consent boxes** — unlawful under Article 7 UK GDPR and specifically called out in the code
- **Dark patterns around retention / deletion** — scary warnings designed to stop a child from leaving
- **Social pressure** — "your friends are all doing it"; fake social proof
- **Gamified retention pressure** — streaks where the loss is shown in punishing language, "you're about to lose your progress" popups
- **Permission prompts that lie about consequences** — "Turn on notifications to save your work" when notifications have nothing to do with saving

## 3. Absolute rules

The following are banned outright in all surfaces a child can see, without exception:

1. **No pre-ticked consent.** Every consent checkbox starts unticked, every time.
2. **No asymmetric consent.** "Accept all" and "Reject all" have identical visual weight, identical click count, and sit next to each other. If one is primary, the other is also primary.
3. **No confirm-shaming copy.** Any rejection button uses neutral words: "No thanks", "Not now", "Skip".
4. **No countdown-based pressure.** We never show a countdown on any privacy-related choice.
5. **No false dependency.** We never claim that a privacy-weakening action is required to use a feature if it isn't.
6. **No social-pressure framing.** We do not say "X students accepted this" on any privacy prompt.
7. **No "you've lost!" framing for streaks.** Streak messaging uses neutral or celebratory language. Losing a streak does not produce a punishing animation.
8. **No forced disclosure of non-essential fields.** Non-essential fields are clearly labelled "optional" and can be left blank.
9. **No auto-enrolment into marketing or research.** Always explicit opt-in.
10. **No "dark account deletion".** Deleting an account must be achievable in no more than 3 clicks from the settings screen, with no friction-adding prompts beyond a single confirmation.

## 4. Design-review checklist

Every feature spec, copy change, or UI change that touches a privacy-relevant surface must be reviewed against this checklist before merge. Reviewers should mentally simulate a 13-year-old hitting the screen in a rush, on mobile, and ask:

1. **Is the privacy-preserving option the default?**
2. **Is the privacy-preserving option as easy to choose as the weakening option?**
3. **Are both options described neutrally?**
4. **Do I understand in one read what data is being collected or changed?**
5. **Can I back out without losing my work so far?**
6. **Is there anything here that would feel like a trick if I noticed it later?**
7. **Is any language guilt-inducing, fear-inducing, or urgent?**
8. **If a parent or the ICO saw this, would they be comfortable?**

A "no" to any of the above fails the review. The spec must be revised and re-reviewed.

## 5. Positive design patterns we *do* use

To make clear this isn't a no-fun policy, we actively prefer:

- **Equal-weight binary choices** with both options styled the same
- **Plain-English labels** ("Share my score with my class?" rather than "Enable social features")
- **Inline explanations** of what will happen, what data is used, and how to undo
- **Celebration of effort** rather than punishment of lapses
- **Low-stakes defaults** where the student can try, then decide later with more information
- **"Quiet" success states** — small green check, not confetti-and-share-this-to-Instagram

## 6. Specific known issues under remediation

- **GAP-13A:** cookie banner on marketing site currently has an asymmetric Accept/Reject layout. In active remediation with target 2026-04-24.
- **GAP-13B:** "Share your score!" animation currently shown after practice sets is a classic nudge. To be disabled on child accounts, target Q2 2026.

## 7. Auditing

- **Pre-release:** any feature merging into `main` that touches a privacy surface must be design-reviewed against this checklist; review recorded in the PR.
- **Quarterly:** a sample of live screens is walked through by the Data Protection Lead against this checklist. Failures are logged as incidents.
- **Annually:** the checklist itself is reviewed against the latest ICO guidance and any new academic research on dark patterns.

## 8. Training

All product, design, content, and engineering staff working on The English Hub complete a 30-minute "no dark patterns" briefing on joining and revisit annually. Briefing content is version-controlled.

## 9. Reporting suspected nudges

If any user, staff member, parent, teacher, or external observer believes a surface in The English Hub contains a nudge technique, they can:

- Use the in-app "Report a problem" flow (staffed by the Data Protection Lead)
- Email privacy@englishhub.example

Reports are triaged within 72 hours and, where justified, result in an immediate fix.

## 10. References

- ICO Age Appropriate Design Code, Standard 13
- Article 7 UK GDPR — conditions for consent
- ICO, *Consent — detailed guidance*
- UK Competition and Markets Authority, *Evidence review of online choice architecture and consumer and competition harm* (2022)
- OECD, *Dark commercial patterns* (2022)

## 11. Change log

| Date | Change |
|---|---|
| 2026-04-10 | Initial draft |
