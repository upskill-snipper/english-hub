/**
 * SEND_AFFILIATE_DRAFTS.gs
 *
 * Apps Script for info@upskillenergy.com — sends only the 24 affiliate-creator
 * drafts I've created in this session. Press / journalist drafts (with the
 * fabricated "2,400 pupils / 4.9/5" claims) are NOT in this recipient list and
 * will be left untouched in your Drafts folder for you to delete manually.
 *
 * HOW TO USE
 * 1. Open https://script.google.com (signed in as info@upskillenergy.com).
 * 2. Click "New project".
 * 3. Delete the boilerplate code, paste the entire contents of this file in.
 * 4. Click ▶ Run on the function `sendAllAffiliateDrafts`.
 * 5. Approve permissions when Google prompts (it asks because the script reads
 *    drafts and sends mail — both via the Gmail API on your behalf).
 * 6. Open View → Logs (Ctrl+Enter) to see exactly what was sent and what was
 *    skipped.
 *
 * SAFETY
 * - Filters by recipient EMAIL ADDRESS (not subject) — only sends drafts whose
 *   `To:` matches the AFFILIATE_RECIPIENTS list below.
 * - Skips press / journalist / institutional drafts even if they're still in
 *   your Drafts folder.
 * - Also skips the 3 "best-guess email" drafts (`hello@mrsallesteachesenglish.com`,
 *   `hello@mrbruff.com`, `hello@staceyreay.co.uk`) — those will likely bounce
 *   and the verified `info@mrbruff.com` draft is in the send list instead.
 *   You can manually delete the best-guess drafts from your Drafts folder.
 *
 * OUTPUT
 * The Logger output tells you (a) which were sent, (b) which addresses in the
 * recipient list had NO matching draft (so nothing was sent), and (c) which
 * drafts in your folder did NOT match (left in Drafts).
 */

function sendAllAffiliateDrafts() {
  // ────────────────────────────────────────────────────────────
  // RECIPIENT LIST — only drafts whose To: matches one of these
  // will be sent. 21 confirmed creator emails. The 3 best-guess
  // addresses (hello@mrsallesteachesenglish.com, hello@mrbruff.com,
  // hello@staceyreay.co.uk) are deliberately EXCLUDED — they'd
  // bounce. The verified info@mrbruff.com IS included.
  // ────────────────────────────────────────────────────────────
  var AFFILIATE_RECIPIENTS = [
    // Batch 1 — confirmed emails from repo lists
    'mratkohistoryteacher@gmail.com',         // Mr Atkinson (history TikTok 359K)
    'hello@douglaswise.co.uk',                 // Douglas Wise (KS3/KS4 English)
    'lucy@englishwithlucy.co.uk',              // Lucy / English with Lucy (12M YouTube)
    'ross@teachertoolkit.co.uk',               // Ross McGill / Teacher Toolkit
    'craig@mrbartonmaths.com',                 // Craig Barton (cross-subject podcast)

    // Batch 2 — confirmed emails from repo lists
    'mark@educationonfire.com',                // Mark Taylor (Education on Fire)
    'sophie@theedtechpodcast.com',             // Sophie Bailey (EdTech Podcast)

    // Batch 3 — confirmed creator emails
    'jamie@drfrostmaths.com',                  // Jamie Frost (cross-subject)
    'john@dadbloguk.com',                      // John Adams (Dad Blog UK)
    'al@thedadnetwork.co.uk',                  // Al Ferguson (The Dad Network)
    'team@aliabdaal.com',                      // Ali Abdaal (mega study creator)

    // Batch 4 — agent-verified emails
    'info@mrbruff.com',                        // Mr Bruff (verified replacement for best-guess)
    'ddidau@gmail.com',                        // David Didau / Learning Spy
    'admin@internetgeography.net',             // Anthony Bennett / Internet Geography
    'support@coolgeography.co.uk',             // Rob Gamesby / Cool Geography
    'hello@cognitoedu.org',                    // Cognito Edu (1.1M YouTube)

    // Batch 5 — agent-verified emails
    'unjadedjade@sixteenth.co',                // UnJaded Jade (Jade Bowler)
    'bookings.drvee@gmail.com',                // Vee Kativhu
    'hello@hannahkettlemaths.co.uk',           // Hannah Kettle Maths
    'info@krisstuition.co.uk',                 // KrissTuition
    'contact@thelightuphub.com'                // The Lightup Hub
  ];

  var drafts = GmailApp.getDrafts();
  var sent = 0;
  var sentAddresses = [];
  var skippedAddresses = [];
  var matchedAddresses = {};

  drafts.forEach(function(d) {
    var msg = d.getMessage();
    var to = (msg.getTo() || '').toLowerCase();
    var matched = false;

    AFFILIATE_RECIPIENTS.forEach(function(r) {
      if (to.indexOf(r.toLowerCase()) >= 0) {
        matched = true;
        matchedAddresses[r] = true;
      }
    });

    if (matched) {
      d.send();
      sent++;
      sentAddresses.push(to);
      Logger.log('SENT → ' + to);
    } else {
      skippedAddresses.push(to);
    }
  });

  // Recipients in the list that had NO matching draft (nothing sent for them)
  var unmatchedRecipients = AFFILIATE_RECIPIENTS.filter(function(r) {
    return !matchedAddresses[r];
  });

  Logger.log('───────────────────────────────────────');
  Logger.log('TOTAL SENT: ' + sent + ' / ' + AFFILIATE_RECIPIENTS.length + ' expected');
  Logger.log('───────────────────────────────────────');
  if (skippedAddresses.length > 0) {
    Logger.log('LEFT IN DRAFTS (not on affiliate list):');
    skippedAddresses.forEach(function(a) { Logger.log('  • ' + a); });
  }
  if (unmatchedRecipients.length > 0) {
    Logger.log('NO MATCHING DRAFT FOUND for these affiliate addresses:');
    unmatchedRecipients.forEach(function(a) { Logger.log('  • ' + a); });
  }
}
