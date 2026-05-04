// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import EmailCaptureCard from '@/components/marketing/EmailCaptureCard'
export const metadata: Metadata = {
  title: 'The Tempest revision guide — themes, characters, key quotes — The English Hub',
  description:
    "The Tempest GCSE revision — Shakespeare's late romance with plot, characters, themes, context and key quotes. Aligned to AQA and OCR English Literature.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/the-tempest',
  },
}

const data: TextGuideData = {
  title: 'The Tempest',
  author: 'William Shakespeare',
  year: 'c. 1610\u201311',
  category: 'Play',
  badge: 'AQA / OCR',
  intro:
    'Widely regarded as Shakespeare\u2019s last solo-authored play, The Tempest was first performed at court in 1611 and printed in the First Folio of 1623. It blends the storm-and-reconciliation pattern of his late \u201Cromances\u201D with magic, music and spectacle, unfolding on a remote island where the exiled duke Prospero controls events through his art. Its story of a shipwreck, a lost daughter and a forgiven enemy has invited readings as a farewell to the stage, a meditation on forgiveness and, since the twentieth century, a key text for thinking about colonialism, slavery and power. Caliban, Prospero\u2019s \u201Cservant-monster\u201D, and the spirit Ariel have become focal points for post-colonial writers such as Aim\u00E9 C\u00E9saire, whose 1969 rewriting Une Temp\u00EAte reframed the play as a study of racial oppression. For GCSE and A-Level candidates on AQA and OCR specifications, the play rewards attention to language, stagecraft and the tension between justice and mercy.',
  quickInfo: {
    genre: 'Romance / late play',
    setting: 'A remote island (Mediterranean), one afternoon',
    length: 'Five-act play (~2,100 lines, Shakespeare\u2019s 2nd-shortest)',
    published: 'First folio 1623',
  },
  plotSummary: [
    'The play opens in the middle of a violent storm at sea. A ship carrying Alonso, King of Naples, his son Ferdinand, his brother Sebastian, the counsellor Gonzalo and Antonio, Duke of Milan, is tossed towards a rocky island and appears to be wrecked. The scene then shifts to the island itself, where Miranda watches the storm in distress and begs her father Prospero to calm the waters. Prospero reveals to her for the first time that he was once Duke of Milan, and that twelve years earlier his brother Antonio, helped by Alonso, usurped his throne and set him and the three-year-old Miranda adrift in a rotten boat. They survived only because of the kindness of Gonzalo, who secretly stocked the vessel with food, clothes and, crucially, Prospero\u2019s books of magic. Since reaching the island, Prospero has become its ruler, served by the airy spirit Ariel \u2014 whom he freed from a tree in which the witch Sycorax had imprisoned him \u2014 and by Caliban, Sycorax\u2019s son, whom Prospero first tried to educate and now treats as a slave. The storm, Prospero explains, was raised by his art to bring his enemies within reach.',
    'Ariel has scattered the survivors in groups across the island. Ferdinand, believing his father drowned, is drawn by Ariel\u2019s music to Prospero\u2019s cell, where he and Miranda fall in love at first sight. Prospero, though secretly delighted, pretends to suspect Ferdinand of being a spy and sets him to hard labour carrying logs to test his devotion. Elsewhere, Alonso wanders the island in grief for his lost son, accompanied by Gonzalo (who imagines a utopian commonwealth he would found on the island), the cynical Sebastian and the treacherous Antonio. Ariel casts a sleep on most of the party, and Antonio tempts Sebastian to murder Alonso and seize the crown of Naples, just as Antonio once seized Milan from Prospero. Their attempt is interrupted at the last moment by Ariel.',
    'In a parallel comic plot, the drunken butler Stephano and the jester Trinculo, washed up separately, meet Caliban. Intoxicated by the wine Stephano carries, Caliban takes him for a god and swears allegiance, promising to help the pair murder Prospero in his sleep, seize Miranda and take over the island. Meanwhile Prospero, satisfied with Ferdinand\u2019s constancy, blesses the young couple\u2019s betrothal and stages a masque of classical goddesses \u2014 Iris, Ceres and Juno \u2014 performed by his spirits to celebrate the match. In the middle of the masque Prospero suddenly remembers Caliban\u2019s conspiracy, breaks off the revels and delivers his meditation on the dreamlike transience of all things. Ariel leads Caliban, Stephano and Trinculo through briars and into a stinking pool, then distracts them with rich garments left out as bait, and they are driven off by spirit-hounds.',
    'In the final act Prospero confronts his enemies. Ariel has held Alonso, Antonio and Sebastian in a charmed circle, and when Prospero hears that even his airy spirit pities them, he chooses mercy over vengeance: \u201Cthe rarer action is / In virtue than in vengeance.\u201D He reveals himself to Alonso, who repents and restores Milan, and forgives Antonio and Sebastian while reclaiming his dukedom. Ferdinand and Miranda are discovered playing chess, to Alonso\u2019s joy and Miranda\u2019s wonder at the \u201Cbrave new world\u201D before her. The Boatswain reports that the ship is miraculously whole, and the conspirators Stephano, Trinculo and Caliban are brought in to be shamed and pardoned. Prospero renounces his magic, promising to drown his book, and gives Ariel his long-promised freedom. In the Epilogue, Prospero addresses the audience directly, asking their applause to release him from the island.',
  ],
  characters: [
    {
      name: 'Prospero',
      role: 'Exiled Duke of Milan; magician and ruler of the island',
      body: 'Prospero is the play\u2019s controlling intelligence, directing almost every scene through his magical art and his servant Ariel. Twelve years of exile have made him scholarly, authoritative and, at times, harsh \u2014 he bullies Caliban, tests Ferdinand cruelly and lectures Miranda at length. Yet Shakespeare also gives him the play\u2019s deepest reflections on mortality, forgiveness and the limits of power. His decision in Act 5 to choose \u201Cvirtue\u201D over \u201Cvengeance,\u201D to forgive Antonio, to free Ariel and to drown his book reframes the whole play as a study of the ethics of authority. Many critics hear Shakespeare\u2019s own voice in Prospero\u2019s renunciation of his art.',
    },
    {
      name: 'Miranda',
      role: 'Prospero\u2019s daughter; raised on the island since she was three',
      body: 'Miranda has grown up seeing no human being other than her father and Caliban, and Shakespeare uses her innocence to defamiliarise the adult world the shipwreck brings ashore. She is compassionate \u2014 her first act is to beg her father to calm the storm \u2014 and quick to fall in love with Ferdinand, proposing marriage with startling directness. Her famous cry \u201CO brave new world, / That has such people in\u2019t!\u201D is often played ironically against her father\u2019s weary \u201C\u2019Tis new to thee.\u201D Feminist readings note that Miranda is both a token of exchange between men and a character of real moral courage, defying her father to name Ferdinand and to speak on Caliban\u2019s behalf earlier in Act 1.',
    },
    {
      name: 'Ariel',
      role: 'An \u201Cairy spirit\u201D bound to serve Prospero',
      body: 'Ariel was imprisoned by the witch Sycorax in a cloven pine for refusing her commands, and was released by Prospero on condition of further service. A creature of air, fire and music, he carries out Prospero\u2019s plans with relish \u2014 raising the storm, leading Ferdinand with song, tormenting the conspirators \u2014 while repeatedly reminding Prospero of his promised freedom. His pity for the suffering nobles in Act 5 (\u201Cmine would, sir, were I human\u201D) is the moment that tips Prospero towards mercy, so Ariel effectively teaches his master how to feel. His final release, with the line \u201Cto the elements / Be free,\u201D closes the play\u2019s pattern of servitude and liberation.',
    },
    {
      name: 'Caliban',
      role: 'Son of the witch Sycorax; Prospero\u2019s enslaved servant',
      body: 'Caliban is the island\u2019s original inhabitant after his mother\u2019s death, and claims the land by maternal inheritance: \u201CThis island\u2019s mine by Sycorax my mother.\u201D Prospero first tried to educate him and was, he says, kindly treated until Caliban attempted to rape Miranda, after which he was enslaved. Caliban\u2019s speeches mix bitter complaint (\u201CYou taught me language, and my profit on\u2019t / Is, I know how to curse\u201D) with unexpected lyricism, most famously the \u201Cisle is full of noises\u201D speech. Since the twentieth century he has been read as a figure for the colonised subject, and productions from the Caribbean and Africa have reclaimed him as a victim of occupation rather than a villain.',
    },
    {
      name: 'Ferdinand',
      role: 'Prince of Naples; son of Alonso; Miranda\u2019s future husband',
      body: 'Ferdinand is washed ashore believing his father has drowned and is led by Ariel\u2019s music to Prospero\u2019s cell, where he and Miranda fall in love almost instantly. Shakespeare characterises him as courteous, patient and governed by honour: he accepts Prospero\u2019s log-carrying as a trial gladly, because he has \u201Csome mistress sweet\u201D to think of. His language of chaste love, shared with Miranda in Act 3, contrasts pointedly with Caliban\u2019s earlier attempt on her. Ferdinand\u2019s marriage to Miranda symbolically reconciles Milan and Naples and secures Prospero\u2019s restoration, making him the mechanism by which the political wrongs of the past generation are healed.',
    },
    {
      name: 'Alonso',
      role: 'King of Naples; complicit in Prospero\u2019s overthrow',
      body: 'Alonso helped Antonio to usurp Prospero twelve years before the action, and the play punishes him through the apparent loss of his son Ferdinand. Grief rather than magic is what transforms him: he wanders the island in despair, hears Ariel\u2019s accusatory voice naming him as one who has offended \u201Cagainst peace,\u201D and by Act 5 is ready to kneel before Prospero and beg pardon. His reconciliation with Prospero and joyful discovery of Ferdinand with Miranda show Shakespeare\u2019s romance pattern at its clearest: lost children are restored, fathers are reunited, and the cost of political crime is paid in suffering rather than blood.',
    },
    {
      name: 'Antonio and Sebastian',
      role: 'Prospero\u2019s usurping brother and Alonso\u2019s ambitious brother',
      body: 'Antonio and Sebastian form the play\u2019s dark political centre. Antonio once seized the dukedom of Milan while Prospero was absorbed in his books; on the island he tempts Sebastian to repeat the crime by murdering the sleeping Alonso, offering an almost casual philosophy of conscience as a \u201Ccandy\u201D that need not trouble ambition. Their whispered plotting is interrupted by Ariel, but they remain unpunished by law and, strikingly, almost silent at the end. Antonio does not reply to Prospero\u2019s forgiveness, and many modern productions stage this silence as the play\u2019s most unsettling moment, questioning whether reconciliation is really possible or simply imposed.',
    },
    {
      name: 'Stephano and Trinculo',
      role: 'A drunken butler and a jester from Alonso\u2019s ship',
      body: 'Stephano and Trinculo provide the play\u2019s comic low plot and also its sharpest satire on the lust for power. Washed up with a cask of wine, Stephano stumbles upon Caliban, who takes him for a descended god and promises to serve him if he will kill Prospero and give him Miranda. The three form a grotesque parody of the high plot: Stephano is an ignorant Antonio, Trinculo a frightened Sebastian, Caliban their abused subject. Their conspiracy is easily thwarted when Ariel dangles rich clothes to distract them, and they are driven off by spirit-hounds \u2014 a broad comic echo of the way courtly ambition, too, is shown to be driven by shiny surfaces.',
    },
    {
      name: 'Gonzalo',
      role: 'Honest old counsellor; once saved Prospero\u2019s and Miranda\u2019s lives',
      body: 'Gonzalo is the moral ballast of the play. Twelve years earlier he defied orders by quietly stocking the boat of the banished Prospero with food, clothes and books. On the island he tries to comfort Alonso, offers his famous \u201Ccommonwealth\u201D speech imagining an ideal society without work, wealth or hierarchy (echoing Montaigne\u2019s essay \u201COf Cannibals\u201D), and is mocked by Antonio and Sebastian for his optimism. At the end he names the play\u2019s romance pattern: \u201CIn one voyage / Did Claribel her husband find at Tunis, / And Ferdinand, her brother, found a wife / Where he himself was lost; Prospero his dukedom / In a poor isle; and all of us ourselves, / When no man was his own.\u201D',
    },
  ],
  themes: [
    {
      title: 'Power and authority',
      body: 'Every relationship in the play is shaped by the question of who rules whom. Prospero rules the island through magic, controlling Ariel, Caliban, the shipwrecked nobles and even Miranda\u2019s marriage choice. The political back-story turns on Antonio\u2019s usurpation of Milan and the threatened repetition of that crime against Alonso. The comic subplot mirrors the main one: Stephano crowns himself king of the island with Caliban as his subject. Shakespeare is interested not only in how power is seized but in how it is exercised. Prospero\u2019s choice in Act 5 to abjure his \u201Crough magic,\u201D free Ariel and forgive his enemies suggests that legitimate authority is finally measured by the willingness to relinquish it, not just by the ability to hold it.',
    },
    {
      title: 'Forgiveness and reconciliation',
      body: 'As one of Shakespeare\u2019s late \u201Cromances,\u201D The Tempest moves through loss and suffering towards restoration rather than death. Prospero has twelve years of grievance against his brother, yet Ariel\u2019s observation that his own heart would soften \u201Cwere I human\u201D shames Prospero into declaring that \u201Cthe rarer action is / In virtue than in vengeance.\u201D The marriage of Ferdinand and Miranda symbolically heals the split between Milan and Naples; Alonso\u2019s grief leads to repentance; even Caliban promises to \u201Cseek for grace.\u201D Yet Shakespeare complicates the pattern. Antonio speaks no word of apology, and Prospero\u2019s forgiveness of him is phrased through clenched teeth. The play asks whether reconciliation can ever be complete, or whether some injuries can only be pardoned in principle.',
    },
    {
      title: 'Colonialism and otherness',
      body: 'Read in the shadow of the 1609 Sea Venture wreck on Bermuda and the early English colonial voyages, The Tempest dramatises the encounter between a European ruler and the non-European inhabitant of a land he takes over. Caliban was the island\u2019s only human occupant when Prospero arrived; he is taught European language and religion, then enslaved after his attempt on Miranda. His protest \u201CThis island\u2019s mine by Sycorax my mother, / Which thou tak\u2019st from me\u201D has become a touchstone of post-colonial criticism since Aim\u00E9 C\u00E9saire\u2019s 1969 Une Temp\u00EAte. Gonzalo\u2019s utopian \u201Ccommonwealth\u201D speech echoes Montaigne\u2019s \u201COf Cannibals,\u201D and Miranda\u2019s \u201Cbrave new world\u201D exclamation is repeatedly read ironically. The play is neither a straightforward celebration nor a straightforward critique of empire: it gives colonisation memorable imaginative life and also puts it on trial.',
    },
    {
      title: 'Illusion and reality',
      body: 'Much of the play\u2019s action is staged inside Prospero\u2019s illusions: the storm that never really drowns anyone, the banquet that vanishes, the masque of goddesses, the hounds that chase Caliban. Shakespeare constantly draws attention to the theatricality of this \u201Creality,\u201D most famously in Prospero\u2019s speech after the masque: \u201CWe are such stuff / As dreams are made on, and our little life / Is rounded with a sleep.\u201D The metatheatrical suggestion that life itself is a dissolving pageant connects the play\u2019s magic to Shakespeare\u2019s own craft. By the Epilogue Prospero has given up his \u201Ccharms\u201D and is reduced to the actor\u2019s ordinary power of asking an audience for their applause to release him.',
    },
    {
      title: 'Nature vs nurture',
      body: 'Prospero calls Caliban \u201CA devil, a born devil, on whose nature / Nurture can never stick,\u201D diagnosing him as irredeemably savage despite a European education. The play tests this claim. Caliban has been taught language only to use it for curses; he plots murder; yet he also speaks some of the play\u2019s most beautiful lines about the island\u2019s music, and by the end promises to \u201Cbe wise hereafter, / And seek for grace.\u201D Against his alleged untameability Shakespeare sets Miranda, raised in almost total isolation but naturally compassionate, and Ferdinand, whose noble bearing is visible even after shipwreck. The play leaves open whether character is inborn or shaped by upbringing, and invites audiences to notice how often \u201Cnature\u201D is used as a word to justify power over others.',
    },
    {
      title: 'Freedom and servitude',
      body: 'The island is full of servants, slaves and would-be masters. Ariel serves Prospero under contract and dreams of elemental freedom; Caliban serves him under force and dreams of a new master in Stephano; Ferdinand chooses loving servitude, carrying logs for Miranda\u2019s sake. Even the shipwrecked nobles are held in a \u201Ccharmed\u201D bondage by Prospero\u2019s art, and Prospero himself turns out to be bound \u2014 to his books, to his revenge, and finally, in the Epilogue, to the audience (\u201CLet your indulgence set me free\u201D). The repeated motion of the play is from constraint to release: Ariel is freed, Caliban is left to seek grace, the nobles are restored to their ship, and the magician is delivered by the spectators\u2019 applause.',
    },
  ],
  historicalContext: [
    'The Tempest was written around 1610\u201311, near the end of Shakespeare\u2019s working life. It was first performed at court before King James I on 1 November 1611, and again in 1612\u201313 as part of the celebrations for the wedding of the King\u2019s daughter Princess Elizabeth. By this point Shakespeare had moved from the public Globe to the indoor Blackfriars theatre, whose smaller, candle-lit auditorium suited the play\u2019s music, masque and atmospheric effects. The Tempest is often grouped with Pericles, Cymbeline and The Winter\u2019s Tale as one of Shakespeare\u2019s late \u201Cromances\u201D \u2014 tragicomedies in which lost children, long separations and near-tragedies are resolved through forgiveness and near-miraculous restoration.',
    'The play draws vividly on England\u2019s early colonial encounters with the New World. In 1609 a ship called the Sea Venture, bound for the fledgling English colony at Jamestown, Virginia, was driven onto the reefs of Bermuda by a hurricane; its passengers were presumed dead but survived for nine months on the island before rebuilding smaller boats and sailing on. Pamphlets by William Strachey and Sylvester Jourdain describing the wreck reached London in 1610, and Shakespeare clearly read them: details of \u201Cstill-vex\u2019d Bermoothes,\u201D St Elmo\u2019s fire on the rigging and the seemingly enchanted island come directly from these accounts. Montaigne\u2019s essay \u201COf Cannibals\u201D, translated into English by John Florio in 1603, supplies the language of Gonzalo\u2019s utopian \u201Ccommonwealth\u201D speech and frames the play\u2019s interest in what \u201Csavage\u201D and \u201Ccivilised\u201D mean.',
    'The masque staged for Ferdinand and Miranda in Act 4 reflects the fashionable Jacobean court entertainment developed by Ben Jonson and Inigo Jones: allegorical spectacles combining music, dance, scenic machinery and classical deities. That the play incorporates a full masque suggests it was designed partly for court performance and for the technical resources of Blackfriars. Finally, The Tempest has long been read as Shakespeare\u2019s self-conscious farewell to the stage. Prospero\u2019s speech drowning his book, breaking his staff and releasing his spirits has been heard since the early nineteenth century as the dramatist\u2019s own retirement, though modern scholarship is more cautious; Shakespeare went on to collaborate with John Fletcher on Henry VIII, The Two Noble Kinsmen and the lost Cardenio before his death in 1616.',
  ],
  quotations: [
    {
      quote: '"Hell is empty, / And all the devils are here."',
      who: 'Ariel (reporting Ferdinand) \u2014 Act 1, Scene 2',
      analysis:
        'Ariel reports Ferdinand\u2019s terrified cry as he leapt from the burning ship. The line frames the play from the outset as a moral descent: hell is no longer an underworld but the very company of men newly arrived on the island. Shakespeare pointedly inverts the familiar \u201Csavage island\u201D trope found in contemporary colonial pamphlets, suggesting that the human ship-load carries its own evil ashore rather than discovering it in Caliban or the place itself.',
    },
    {
      quote: '"My library / Was dukedom large enough."',
      who: 'Prospero \u2014 Act 1, Scene 2',
      analysis:
        'Prospero explains to Miranda why he lost Milan: he preferred his books to the daily business of government, leaving a vacuum his brother filled. The quiet pun on \u201Cdukedom\u201D captures both his intellectual vocation and his political failure, and Shakespeare uses the line to raise the play\u2019s larger question of whether the magician-scholar, who once neglected rule for study, has now earned the right to reclaim his throne at the end of the play.',
    },
    {
      quote: '"This island\'s mine by Sycorax my mother, / Which thou tak\'st from me."',
      who: 'Caliban \u2014 Act 1, Scene 2',
      analysis:
        'Caliban grounds his claim to the island on maternal inheritance, the only form of property available to him against Prospero\u2019s superior magic. Since the second half of the twentieth century this couplet has been treated as the play\u2019s central colonial text, framing Prospero as an occupier rather than a rescuer and Caliban as a dispossessed native rather than a monster. It is the line most often cited in productions that want to foreground the politics of land and sovereignty.',
    },
    {
      quote: '"You taught me language, and my profit on\'t / Is, I know how to curse."',
      who: 'Caliban \u2014 Act 1, Scene 2',
      analysis:
        'Caliban turns the gift of European education violently against the giver. Shakespeare captures in two lines the paradox of colonial pedagogy: the subject acquires the master\u2019s tongue and finds that the only use he can make of it is rage at his own oppression. Post-colonial writers from Aim\u00E9 C\u00E9saire to Ng\u0169g\u0129 wa Thiong\u2019o have treated this couplet as a founding statement of the problem of writing back against power in a language that is not one\u2019s own.',
    },
    {
      quote:
        '"Full fathom five thy father lies; / Of his bones are coral made; / Those are pearls that were his eyes."',
      who: 'Ariel (song) \u2014 Act 1, Scene 2',
      analysis:
        'Ariel\u2019s song lures Ferdinand towards Miranda\u2019s cell while falsely telling him that his father has drowned. The rich \u201Csea-change\u201D imagery \u2014 bones turned to coral, eyes into pearls \u2014 introduces the play\u2019s defining motif of transformation: drowning becomes decoration, loss becomes beauty, grief is reshaped into art. The song is also the audience\u2019s first sign that music on this island is a moral and magical instrument for reordering feeling, not simply atmospheric ornament.',
    },
    {
      quote: '"I might call him / A thing divine, for nothing natural / I ever saw so noble."',
      who: 'Miranda (of Ferdinand) \u2014 Act 1, Scene 2',
      analysis:
        'Miranda\u2019s first sight of a young man who is neither her father nor Caliban leads her to misread Ferdinand as supernatural. The line quietly prepares the ironic force of her later \u201Cbrave new world\u201D exclamation in Act 5 and shows how her sheltered upbringing has made ordinary humanity look miraculous to her. Shakespeare uses her wonder to let the audience see the familiar anew, while also gently warning how easily a first love can mistake a young man for a god.',
    },
    {
      quote: '"I\'th\' commonwealth I would by contraries / Execute all things."',
      who: 'Gonzalo \u2014 Act 2, Scene 1',
      analysis:
        'Gonzalo\u2019s utopian speech, drawn almost verbatim from John Florio\u2019s 1603 translation of Montaigne\u2019s essay \u201COf Cannibals,\u201D imagines a society without trade, labour or hierarchy. Antonio and Sebastian mock him as a fool, but Shakespeare sets the speech deliberately against their simultaneous plot to murder Alonso, implying that even a na\u00EFve utopian fantasy is morally preferable to the cynical, self-interested calculation of realpolitik. The passage also quietly roots the play in the New World debates of 1610\u201311.',
    },
    {
      quote: '"My strong imagination sees a crown / Dropping upon thy head."',
      who: 'Antonio (to Sebastian) \u2014 Act 2, Scene 1',
      analysis:
        'Antonio tempts Sebastian to murder his sleeping brother Alonso, casually reproducing on the island the crime he committed against Prospero twelve years earlier in Milan. The phrase \u201Cstrong imagination\u201D makes naked ambition sound almost visionary, dressing up political crime as a kind of destiny. Shakespeare\u2019s deliberate repetition of the original usurpation signals how easily history will repeat itself without intervention, and quietly sets up the moral test of whether Prospero can break the cycle through forgiveness.',
    },
    {
      quote:
        '"Be not afeard; the isle is full of noises, / Sounds and sweet airs, that give delight and hurt not."',
      who: 'Caliban \u2014 Act 3, Scene 2',
      analysis:
        'Caliban calms the drunken Stephano and Trinculo with an unexpected description of the island\u2019s music. The lyricism of the speech \u2014 its gentle \u201Csweet airs,\u201D its sleeping \u201Criches ready to drop\u201D \u2014 complicates Prospero\u2019s claim that Caliban is irredeemably savage. The figure most abused by the play\u2019s hierarchy turns out to have the deepest imaginative response to the place itself, and Shakespeare invites audiences to hear in his voice the sound of the island itself.',
    },
    {
      quote: '"You are three men of sin, whom Destiny... / Hath caused to belch up you."',
      who: 'Ariel (disguised as a harpy) \u2014 Act 3, Scene 3',
      analysis:
        'Ariel materialises as a terrifying harpy at the vanishing banquet and names Alonso, Antonio and Sebastian as the \u201Cthree men of sin\u201D who drove Prospero into exile. The staged supernatural judgement begins Alonso\u2019s repentance and shows Prospero using theatre as a moral instrument, not simply a punitive one: the spectacle is designed not to kill but to make the guilty confront what they have done. It also demonstrates Shakespeare\u2019s confidence in the new scenic machinery of the Blackfriars stage.',
    },
    {
      quote:
        '"Our revels now are ended. These our actors, / As I foretold you, were all spirits and / Are melted into air, into thin air."',
      who: 'Prospero \u2014 Act 4, Scene 1',
      analysis:
        'Prospero breaks off the masque suddenly, remembering Caliban\u2019s plot, and uses theatrical vocabulary \u2014 \u201Crevels,\u201D \u201Cactors,\u201D \u201Cmelted into air\u201D \u2014 to describe the dissolution of all apparently solid things. The speech brings the play\u2019s magic and Shakespeare\u2019s own craft into the same extended metaphor, so that the boundary between the stage spectacle, the island setting and ordinary life becomes suddenly porous. It is the clearest moment in which the play reflects on its own illusionism.',
    },
    {
      quote:
        '"We are such stuff / As dreams are made on, and our little life / Is rounded with a sleep."',
      who: 'Prospero \u2014 Act 4, Scene 1',
      analysis:
        'One of the most famous meditations on mortality in English, extending the \u201Crevels\u201D image of the previous lines to human life itself. The play\u2019s romance optimism is quietly qualified here: even the restoration of Milan and the marriage of Ferdinand and Miranda take place inside a dream bordered by sleep and death. Shakespeare gives Prospero a vocabulary of breathtaking tenderness for the very impermanence his magic appears to deny, deepening the play beyond its comic surface.',
    },
    {
      quote: '"A devil, a born devil, on whose nature / Nurture can never stick."',
      who: 'Prospero (of Caliban) \u2014 Act 4, Scene 1',
      analysis:
        'Prospero asserts in his most extreme language that Caliban is incurably evil by nature, a claim the play both voices and tests. The rhyming \u201Cnature / nurture\u201D coinage is the clearest statement of one of the play\u2019s central questions and has entered the wider English tradition. Crucially, Shakespeare does not endorse the judgement: the audience is invited to weigh it against Caliban\u2019s lyrical \u201Cnoises\u201D speech and his final promise to \u201Cseek for grace,\u201D so the line reveals as much about Prospero\u2019s rage as about Caliban.',
    },
    {
      quote:
        '"Though with their high wrongs I am struck to th\' quick, / Yet with my nobler reason \u2019gainst my fury / Do I take part: the rarer action is / In virtue than in vengeance."',
      who: 'Prospero \u2014 Act 5, Scene 1',
      analysis:
        'The moral pivot of the play. Prompted by Ariel\u2019s pity (\u201Cmine would, sir, were I human\u201D), Prospero deliberately chooses mercy over revenge and formulates the ethical principle \u2014 that forgiveness is a rarer and greater act than punishment \u2014 that governs Shakespeare\u2019s late romances as a group. Note the verb \u201Ctake part\u201D: Prospero presents reason as joining a faction against fury rather than simply overruling it, so the choice feels like a hard-won political decision rather than a spontaneous feeling.',
    },
    {
      quote: '"Ye elves of hills, brooks, standing lakes, and groves..."',
      who: 'Prospero \u2014 Act 5, Scene 1',
      analysis:
        'Prospero\u2019s grand invocation of the spirits he has commanded, adapted closely from Ovid\u2019s Medea as translated by Arthur Golding, introduces his abjuration of magic. Shakespeare pointedly lets the sorcerer catalogue his powers one last time \u2014 raising the dead, bedimming the sun, rifting the oak \u2014 before he formally lays them down, so that the renunciation carries real weight rather than feeling like the giving up of something trivial. The classical allusion also tells audiences to measure his magic on an epic scale.',
    },
    {
      quote:
        '"This rough magic / I here abjure... / I\'ll break my staff, / Bury it certain fathoms in the earth, / And deeper than did ever plummet sound / I\'ll drown my book."',
      who: 'Prospero \u2014 Act 5, Scene 1',
      analysis:
        'Prospero renounces his art in precise physical terms: staff broken, book drowned \u201Cdeeper than did ever plummet sound.\u201D The specificity is important, because it ties the play\u2019s magic back to the material book and theatrical props on which it depends. The drowned book has long been read, perhaps over-read, as Shakespeare\u2019s own farewell to the stage, though modern scholarship notes he continued to collaborate afterwards. Either way the action gives his renunciation unusual dramatic weight.',
    },
    {
      quote:
        '"O, wonder! / How many goodly creatures are there here! / How beauteous mankind is! O brave new world, / That has such people in\'t!"',
      who: 'Miranda \u2014 Act 5, Scene 1',
      analysis:
        'Miranda greets the shipwrecked nobles with unguarded delight, seeing for the first time in her life people who are neither her father nor Caliban. Prospero\u2019s dry reply \u2014 \u201C\u2019Tis new to thee\u201D \u2014 lets the audience hear the irony: the \u201Cgoodly creatures\u201D before her include the usurpers Antonio and Sebastian. The line gave Aldous Huxley the title Brave New World in 1932 and has since become shorthand for innocent optimism that is about to meet the real world.',
    },
    {
      quote: '"I\'ll be wise hereafter, / And seek for grace."',
      who: 'Caliban \u2014 Act 5, Scene 1',
      analysis:
        'Caliban\u2019s final line registers a moral development rarely granted to Shakespearean villains, and it is delivered after he has recognised Stephano and Trinculo as the fools they are. Whether the couplet shows genuine repentance, forced submission under Prospero\u2019s power, or Shakespeare\u2019s reluctance to leave Caliban simply as a monster is a central question for any production. The word \u201Cgrace\u201D pulls the colonial plot into the play\u2019s larger religious vocabulary of forgiveness and mercy.',
    },
    {
      quote: '"To the elements / Be free, and fare thou well."',
      who: 'Prospero (to Ariel) \u2014 Act 5, Scene 1',
      analysis:
        'Prospero finally fulfils his twelve-year-old promise and dissolves the bond that has structured almost every scene of the play. Ariel has been promised freedom repeatedly \u2014 the audience has heard him ask for it in Act 1 \u2014 and the release placed here at the climax rather than at the beginning of the action gives freedom the weight of a reward. The short, unadorned line also makes a striking contrast with Prospero\u2019s previous grand invocations of spiritual power.',
    },
    {
      quote: '"As you from crimes would pardon\'d be, / Let your indulgence set me free."',
      who: 'Prospero \u2014 Epilogue',
      analysis:
        'In the Epilogue the actor playing Prospero steps out of the magician\u2019s role and asks the audience\u2019s applause to release him from the stage, framing the theatrical contract itself in the same language of \u201Cpardon\u201D that has governed the whole play. The final couplet makes the audience complicit in the drama\u2019s economy of forgiveness: we are asked to grant to Prospero the mercy he has just extended to his enemies. It is one of Shakespeare\u2019s most metatheatrical endings.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'tt-1',
    question: 'Who raises the storm at the start of the play?',
    type: 'multiple-choice',
    options: ["Ariel, on Prospero's orders", 'Caliban', 'Sycorax', 'The gods'],
    correctIndex: 0,
    explanation:
      "Prospero commands the storm through his art; Ariel carries it out. No one on board actually dies — the tempest is an illusion designed to bring Prospero's enemies within his reach.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tt-2',
    question: 'Who was Duke of Milan before the play begins?',
    type: 'multiple-choice',
    options: ['Antonio', 'Alonso', 'Prospero', 'Gonzalo'],
    correctIndex: 2,
    explanation:
      'Prospero was Duke of Milan until his brother Antonio, backed by Alonso of Naples, usurped him twelve years earlier and set him adrift with Miranda.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tt-3',
    question: "Who is Caliban's mother?",
    type: 'multiple-choice',
    options: ['Miranda', 'Sycorax', 'Juno', 'Ceres'],
    correctIndex: 1,
    explanation:
      'Sycorax, a witch from Algiers, inhabited the island before Prospero arrived. She imprisoned Ariel in a pine tree and died before the play begins, leaving Caliban as her only surviving child.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'tt-4',
    question: 'What does Prospero promise Ariel?',
    type: 'multiple-choice',
    options: ['Gold', 'Marriage to Miranda', 'Freedom', 'A ship'],
    correctIndex: 2,
    explanation:
      'Ariel was freed from Sycorax\'s pine tree by Prospero and serves him in return for an eventual release. The play ends with Prospero honouring that promise: "to the elements / Be free."',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'tt-5',
    question: 'Who falls in love with Miranda?',
    type: 'multiple-choice',
    options: ['Caliban', 'Stephano', 'Ferdinand', 'Trinculo'],
    correctIndex: 2,
    explanation:
      "Ferdinand, Prince of Naples, is led by Ariel's music to Prospero's cell. He and Miranda fall in love at first sight, and their betrothal will unite Milan and Naples.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tt-6',
    question: 'What task does Prospero set Ferdinand to prove his love?',
    type: 'multiple-choice',
    options: ['Kill Caliban', 'Carry logs', 'Recite poetry', 'Win a sword fight'],
    correctIndex: 1,
    explanation:
      "Prospero pretends to distrust Ferdinand and orders him to carry heavy logs. Ferdinand endures the drudgery gladly for Miranda's sake, proving his devotion.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tt-7',
    question: 'Who tries to persuade Sebastian to murder Alonso?',
    type: 'multiple-choice',
    options: ['Gonzalo', 'Antonio', 'Prospero', 'Stephano'],
    correctIndex: 1,
    explanation:
      'Antonio, who once usurped Prospero, tempts Sebastian to kill his sleeping brother Alonso and seize the crown of Naples. Ariel intervenes before they strike.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'tt-8',
    question: 'Why does Prospero forgive his enemies in Act 5?',
    type: 'multiple-choice',
    options: [
      'They beg him directly',
      'Miranda asks him to',
      "Ariel's pity shames him into choosing virtue over vengeance",
      'He forgets his anger',
    ],
    correctIndex: 2,
    explanation:
      'When Ariel says his own heart would soften "were I human," Prospero decides that "the rarer action is / In virtue than in vengeance." Forgiveness becomes the climax of the play.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'tt-9',
    question: 'What does "We are such stuff / As dreams are made on" mean in context?',
    type: 'multiple-choice',
    options: [
      'Life is a literal dream',
      'Human life, like the masque that has just ended, is brief and insubstantial',
      'The actors are tired',
      'Prospero is drunk',
    ],
    correctIndex: 1,
    explanation:
      "Prospero dismisses the masque and extends the image to human life itself: everything solid melts into nothing. The metatheatrical metaphor links the play's magic to the transience of existence.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'tt-10',
    question:
      'What does Caliban mean by "You taught me language, and my profit on\'t / Is, I know how to curse"?',
    type: 'multiple-choice',
    options: [
      'He regrets learning to read',
      'European education has given him only the tools to express anger at his enslavement',
      'He is a bad student',
      'He prefers his own language',
    ],
    correctIndex: 1,
    explanation:
      "Caliban turns the coloniser's gift against him. Since the twentieth century this line has been central to post-colonial readings: the subject acquires the master's tongue and uses it to resist.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'tt-11',
    question: 'Whose death does Ferdinand wrongly believe he is mourning?',
    type: 'multiple-choice',
    options: ["His mother's", "His father Alonso's", "Miranda's", "Gonzalo's"],
    correctIndex: 1,
    explanation:
      'Ariel\'s song "Full fathom five thy father lies" convinces Ferdinand that Alonso has drowned. The reunion of father and son in Act 5 is one of the great romance recognitions of the play.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'tt-12',
    question: 'Which pamphlets about a 1609 shipwreck are thought to have influenced the play?',
    type: 'multiple-choice',
    options: [
      'Accounts of the Armada',
      'The Bermuda pamphlets about the Sea Venture',
      "Marco Polo's travels",
      "Raleigh's Guiana",
    ],
    correctIndex: 1,
    explanation:
      "The Sea Venture was wrecked on Bermuda in 1609; survivors' accounts by William Strachey and Sylvester Jourdain reached London in 1610. Shakespeare borrowed details such as the \"still-vex'd Bermoothes\" and St Elmo's fire.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'tt-13',
    question: 'Which speech of Gonzalo\'s borrows from Montaigne\'s essay "Of Cannibals"?',
    type: 'multiple-choice',
    options: [
      'His lament for Alonso',
      'His "commonwealth" speech imagining an ideal society',
      'His warning to Prospero',
      'His final blessing',
    ],
    correctIndex: 1,
    explanation:
      "Gonzalo's utopian vision of a society without labour, trade or hierarchy closely echoes Florio's 1603 translation of Montaigne. Shakespeare places it against Antonio's murder plot to highlight two visions of human nature.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'tt-14',
    question: 'How does Miranda\'s "O brave new world" speech often function in performance?',
    type: 'multiple-choice',
    options: [
      'As a triumphant closing line',
      "As an ironic moment — she is greeting men including Antonio and Sebastian, the play's villains",
      'As a prophecy of the future',
      'As a rebuke to Prospero',
    ],
    correctIndex: 1,
    explanation:
      'Miranda is sheltered from the political crimes of Milan and Naples and sees only "goodly creatures." Prospero\'s reply "\'Tis new to thee" lets the audience feel the gap between her innocence and what the audience knows.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'tt-15',
    question: 'What action does Prospero promise to take at the end of Act 5?',
    type: 'multiple-choice',
    options: [
      'Sail home as a tyrant',
      'Break his staff and drown his book, giving up magic',
      'Stay on the island forever',
      'Kill Antonio',
    ],
    correctIndex: 1,
    explanation:
      'Prospero vows to "break my staff" and "drown my book" after abjuring his "rough magic." The physical renunciation has long been read, perhaps over-read, as Shakespeare\'s own farewell to the stage.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'tt-16',
    question: "What is unusual about Antonio's response to Prospero's forgiveness?",
    type: 'multiple-choice',
    options: [
      'He weeps with gratitude',
      'He says almost nothing in reply',
      'He refuses the pardon',
      'He attacks Prospero',
    ],
    correctIndex: 1,
    explanation:
      'The play gives Antonio no words of apology or acceptance. Modern productions often exploit this textual silence to question whether reconciliation is really complete, making Antonio the uneasy counterweight to the romance ending.',
    topic: 'Characters',
    difficulty: 'grade-9',
  },
  {
    id: 'tt-17',
    question: 'Why is The Tempest described as a "romance" rather than a tragedy or comedy?',
    type: 'multiple-choice',
    options: [
      'Because it is about love',
      "Because, like Shakespeare's other late plays, it moves through loss and near-tragedy to forgiveness, reunion and restoration",
      'Because it is set in Italy',
      'Because Prospero is a magician',
    ],
    correctIndex: 1,
    explanation:
      "Grouped with Pericles, Cymbeline and The Winter's Tale, the romances share patterns of lost children restored, generational healing and near-miraculous resolution. The form allows Shakespeare to stage forgiveness as a public, political act.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'tt-18',
    question: 'What function does the Epilogue serve?',
    type: 'multiple-choice',
    options: [
      'It sets up a sequel',
      "Prospero asks the audience's applause to release him, extending the play's theme of pardon to the theatrical contract itself",
      'It explains the plot',
      'It names the actors',
    ],
    correctIndex: 1,
    explanation:
      "Prospero's final couplet — \"As you from crimes would pardon'd be, / Let your indulgence set me free\" — makes the audience participants in the play's economy of forgiveness, a strikingly metatheatrical close.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'tt-19',
    question: "How has Caliban been reread since Aime Cesaire's 1969 Une Tempete?",
    type: 'multiple-choice',
    options: [
      'As a purely comic character',
      'As a figure for the colonised subject whose land has been taken and whose language has been imposed',
      'As a spirit',
      "As Prospero's son",
    ],
    correctIndex: 1,
    explanation:
      'Cesaire\'s rewriting placed Caliban at the centre as a Black colonised subject, and since then post-colonial critics have treated him as a focal point for thinking about slavery, race and occupation, rather than as the "savage" Prospero claims.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'tt-20',
    question: 'Who conspires with Stephano and Trinculo against Prospero?',
    type: 'multiple-choice',
    options: ['Ariel', 'Caliban', 'Sebastian', 'Antonio'],
    correctIndex: 1,
    explanation:
      "Caliban, intoxicated by Stephano's wine, takes him for a god and promises to help kill Prospero and hand over Miranda. The comic subplot deliberately mirrors Antonio and Sebastian's plot against Alonso.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Power and Authority',
    summary:
      "Every relationship in the play is shaped by the question of who rules whom, from Prospero's magic to Stephano's drunken kingship.",
    keyPoints: [
      'Prospero controls the island, Ariel, Caliban and the castaways through his art',
      "Antonio's usurpation of Milan is the original crime that drives the plot",
      'Antonio tempts Sebastian to repeat the same crime on the island',
      'The comic subplot parodies political ambition through Stephano\'s "kingship"',
      'Prospero measures true authority by his willingness to give it up in Act 5',
    ],
  },
  {
    topic: 'Forgiveness and Reconciliation',
    summary:
      "The play moves through loss and suffering towards the choice of mercy over revenge, the moral climax of Shakespeare's late romances.",
    keyPoints: [
      '"The rarer action is / In virtue than in vengeance" — Act 5 pivot',
      "Ariel's pity shames Prospero into forgiveness",
      "Ferdinand and Miranda's marriage heals the rift between Milan and Naples",
      'Alonso repents; Caliban promises to "seek for grace"',
      "Antonio's silence leaves the reconciliation deliberately incomplete",
    ],
  },
  {
    topic: 'Colonialism and Otherness',
    summary:
      "The play stages the encounter between a European ruler and the island's only inhabitant, and has become a central text for post-colonial thought.",
    keyPoints: [
      'Caliban\'s "This island\'s mine by Sycorax my mother" is the core colonial claim',
      'Prospero teaches then enslaves Caliban after the attempt on Miranda',
      'Gonzalo\'s commonwealth echoes Montaigne\'s "Of Cannibals"',
      'Bermuda pamphlets (1609 Sea Venture) feed the island setting',
      "Cesaire's Une Tempete (1969) reframes the play around race and empire",
    ],
  },
  {
    topic: 'Illusion and Reality',
    summary:
      "Most of the action takes place inside Prospero's illusions, and Shakespeare constantly links the magic to his own theatrical art.",
    keyPoints: [
      'The storm drowns no one — it is a moral instrument, not a disaster',
      'The vanishing banquet, the masque and the spirit-hounds all stage judgement',
      '"Our revels now are ended" equates masque, life and play',
      '"We are such stuff / As dreams are made on" meditates on mortality',
      "The Epilogue hands magical power over to the audience's applause",
    ],
  },
  {
    topic: 'Nature vs Nurture',
    summary:
      "The play tests Prospero's claim that Caliban is irredeemably savage by nature against Caliban's own lyrical voice and final repentance.",
    keyPoints: [
      '"A devil, a born devil, on whose nature / Nurture can never stick" (Prospero)',
      '"You taught me language..." — education turned against its giver',
      'Caliban\'s "isle is full of noises" speech complicates the "savage" label',
      "Miranda's isolated but compassionate upbringing is a counter-case",
      'Caliban\'s closing promise to "seek for grace" leaves the question open',
    ],
  },
  {
    topic: 'Freedom and Servitude',
    summary:
      "The island is full of servants, slaves and would-be masters, and the play's repeated movement is from constraint to release.",
    keyPoints: [
      'Ariel serves under contract and dreams of elemental freedom',
      'Caliban is enslaved; he seeks a new master in Stephano',
      'Ferdinand chooses loving servitude (log-carrying for Miranda)',
      'The nobles are held in a "charmed" bondage by Prospero\'s art',
      "Prospero frees Ariel and is himself freed by the audience's applause",
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Shakespeare present power and authority in The Tempest?',
  'How does Shakespeare use the character of Caliban to explore ideas of nature, nurture and colonialism?',
  'How does Shakespeare present forgiveness and reconciliation in The Tempest?',
  "How does Shakespeare use magic and illusion to shape the audience's experience of the play?",
  "How does Shakespeare explore freedom and servitude across the play's characters?",
]

export default async function TheTempestPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'ocr']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <LearningResourceJsonLd
        name="The Tempest — Study Guide"
        description="In-depth study guide for The Tempest by William Shakespeare covering plot, characters, themes, key quotations and historical context for GCSE and A-Level English Literature."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        about="The Tempest"
        url="https://theenglishhub.app/revision/texts/the-tempest"
      />
      <CourseJsonLd
        name="The Tempest — Study Guide"
        description="In-depth study guide for The Tempest by William Shakespeare covering plot, characters, themes, key quotations and historical context for GCSE and A-Level English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'The Tempest', url: 'https://theenglishhub.app/revision/texts/the-tempest' },
        ]}
      />
      <TextStudyHub
        textName="The Tempest"
        textType="play"
        examBoard="AQA"
        basePath="/revision/texts/the-tempest"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/the-tempest/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'acts',
            href: '/revision/texts/the-tempest/acts',
            icon: 'acts' as const,
            title: 'Act-by-Act Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/the-tempest/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/the-tempest/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/the-tempest/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/the-tempest/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/the-tempest/essay-plans',
            icon: 'essays' as const,
            title: 'Essay Plans',
            description: 'GCSE/A-Level essay plans',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Shakespeare present power and authority in The Tempest?',
          'How does Shakespeare use the character of Caliban to explore ideas of nature, nurture and colonialism?',
          'How does Shakespeare present forgiveness and reconciliation in The Tempest?',
          "How does Shakespeare use magic and illusion to shape the audience's experience of the play?",
          "How does Shakespeare explore freedom and servitude across the play's characters?",
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="The Tempest"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <div className="mx-auto my-4 max-w-5xl rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-700 dark:text-amber-200">
        <strong className="font-semibold">Draft — awaiting English-teacher review.</strong> This
        study guide for The Tempest has been auto-drafted and has not yet been checked by a subject
        specialist. Plot details, character descriptions and quotations should be verified against a
        trusted edition before exam use.
      </div>

      <TextGuide data={data} />
      <EmailCaptureCard
        magnetTitle="Free The Tempest revision pack"
        magnetDescription="A focused PDF with key quotes, themes, and essay-plan templates. Coming soon — get notified when it lands."
        magnetSlug="the-tempest-revision-pack"
        className="mt-12"
      />
    </>
  )
}
