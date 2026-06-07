'use client'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'

type Card = {
  kind: 'Notice' | 'Say' | 'Zoom out'
  fragment?: string
  body: string
}

const cards: Card[] = [
  {
    kind: 'Notice',
    fragment: '"shoes upon the table"',
    body: 'The Narrator opens by drawing our attention to a single domestic image - a pair of shoes placed on a table - and treats it as the first move in a tragedy. Notice that we are told about the superstition before we are shown any character: the convention of bad luck has authority over the world of the play before Mrs Johnstone has even spoken. Notice too that the Narrator addresses us directly, like a chorus, breaking any naturalistic frame.',
  },
  {
    kind: 'Say',
    fragment: '"so did you hear the story"',
    body: "Russell makes the Narrator a story-teller in the ballad tradition: he invites us to 'hear the story' as if it has happened already and we are gathering, after the fact, around a song. The verb tense matters - the Narrator speaks of a fate that is sealed, not unfolding. Say aloud how the rhythm flattens into a sing-song line; Russell wants the audience seduced by ballad before they are wounded by ending.",
  },
  {
    kind: 'Notice',
    // VERIFIED: Mrs Johnstone's superstition speech, e.g. "never put new shoes on a table" - Methuen Drama edition. The earlier draft of this card cited an unverifiable line.
    fragment: '"never put new shoes on a table"',
    body: "Notice the abrupt shift from Narrator's framing into a working-class Liverpool register - superstition rendered as folk speech, half-comic, half-genuine. The taboo is domestic, kitchen-sized, and that detail tells us the play will locate its tragedy in working-class space. Russell pairs grand portent with kitchen-sink texture; the Narrator's mythic voice and Mrs Johnstone's vernacular sit side by side from the very first beats.",
  },
  {
    kind: 'Say',
    fragment: '"And do we blame superstition for what came to pass?"',
    body: "Speak this line as a rhetorical question - because it is one. The Narrator is daring the audience to accept the easy mythological answer (twins, shoes, the Devil) and Russell is already setting up the political answer he wants us to reach instead: that Mickey and Edward are killed by class, not by curse. The whole play is built in the gap between the Narrator's question and the audience's better answer.",
  },
  {
    kind: 'Zoom out',
    fragment: 'Narrator as Greek-tragic chorus',
    body: 'Step back: the Narrator functions like the chorus in a Greek tragedy. He stands outside the action, comments on it, knows the ending, and addresses the audience over the heads of the characters. Russell borrows this device to lend a humble Liverpool story the weight of myth - and to insist, repeatedly, that what we are watching is inevitable. The chorus convention is also a moral pressure: by the final scene, we cannot say we were not warned.',
  },
  {
    kind: 'Zoom out',
    fragment: 'Ballad-like tone',
    body: "Zoom out to the play's musical architecture. Blood Brothers is built as a ballad: songs return, refrains repeat, lines from the opening chorus are recycled at the close. This circularity reinforces the sense of a fate already settled, but it also belongs to a specific working-class storytelling tradition - the folk ballad, the protest song, the music-hall lament. Russell uses song to make political grief audible without speech-making; the genre carries the argument.",
  },
  {
    kind: 'Zoom out',
    fragment: 'Liverpool dialect vs middle-class register',
    body: 'Notice the linguistic split that begins in this opening sequence and structures the rest of the play. Mrs Johnstone speaks in Scouse rhythms - elision, contraction, comic exaggeration. Mrs Lyons (and later the adult Edward) speak in clipped, possessive Received Pronunciation. The Narrator stands between them in a kind of heightened, neutral register. Russell uses dialect not as colour but as evidence: the same English language is being spoken in two different countries, and the boundary between them is class.',
  },
  {
    kind: 'Zoom out',
    fragment: 'Fate vs choice',
    body: "Pull back to the play's central philosophical tension. The Narrator hammers superstition - shoes on tables, a Bible sworn upon, the inevitable ending. But every catastrophe in the plot has a human author: Mrs Lyons separates the twins, Mrs Johnstone agrees, the welfare state shrinks under Thatcher, Mickey loses a job, Edward gets a university place. Russell wants the audience to feel the pull of fate so that the political diagnosis lands harder. It is not the Devil in the kitchen; it is the system at the door.",
  },
  {
    kind: 'Zoom out',
    fragment: "Russell's social-class thesis",
    body: "The deepest move in the opening - and the argument the rest of the play exists to prove - is that the twins are biologically identical. Same womb, same minute of birth, same DNA. What separates them is which living room they are placed in. Russell strips away every other variable so that, by the final scene, the audience cannot blame Mickey's collapse on character, intelligence, or temperament. Genetics did not separate the twins; class did. The Narrator's superstition is the alibi society uses to avoid admitting that.",
  },
]

const modelParagraph = `The opening sequence of Blood Brothers is Russell's argument in miniature. Before any naturalistic action begins, the Narrator addresses the audience directly, in the register of a Greek-tragic chorus, telling us a story whose ending is already sealed. The "shoes upon the table" superstition and the question of whether we "blame superstition for what came to pass" are placed in our hands as a deliberate trap: Russell wants us to be tempted by the mythological reading so that, by the final scene in the Council Chamber, we feel the inadequacy of it. The play's ballad-like circularity - refrains, repeated lines, a Narrator who appears and reappears - lends a humble Liverpool tragedy the weight of folk myth, but it is folk myth in service of a political thesis. Mickey and Edward are genetically identical; the only meaningful difference between them is the class of the household each is placed in. By collapsing nature into a single shared starting point, Russell isolates nurture as the operative variable, and nurture in 1980s Britain meant unemployment, prescription Valium and prison for one twin and university and the council chamber for the other. The Narrator's superstition is the alibi a society reaches for when it cannot face that diagnosis. Nature loses to nurture, and Thatcher-era Britain - by gutting the industries, the youth schemes and the welfare safety net Mickey depends on - fails both brothers, not just the poor one.`

export default function BloodBrothersExtractWalkthroughPage() {
  const t = useT()
  const kindLabel: Record<Card['kind'], string> = {
    Notice: t('rev.texts.grp3.common.notice'),
    Say: t('rev.texts.grp3.common.say'),
    'Zoom out': t('rev.texts.grp3.common.zoom_out'),
  }
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Blood Brothers',
            url: 'https://theenglishhub.app/revision/texts/blood-brothers',
          },
          {
            name: 'Extract walkthrough',
            url: 'https://theenglishhub.app/revision/texts/blood-brothers/extract-walkthrough',
          },
        ]}
      />

      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">
          {t('rev.texts.bloodbrothers.extract.eyebrow')}
        </p>
        <h1 className="text-3xl font-bold">{t('rev.texts.bloodbrothers.extract.title')}</h1>
        <p className="text-muted-foreground">{t('rev.texts.bloodbrothers.extract.intro')}</p>
      </header>

      <section aria-labelledby="walkthrough" className="space-y-4">
        <h2 id="walkthrough" className="text-2xl font-semibold">
          {t('rev.texts.bloodbrothers.extract.walkthrough_h')}
        </h2>
        <p className="text-sm text-muted-foreground">
          Three card types: <strong>{t('rev.texts.grp3.common.notice')}</strong> (what is there),{' '}
          <strong>{t('rev.texts.grp3.common.say')}</strong> (what to do with the line out loud), and{' '}
          <strong>{t('rev.texts.grp3.common.zoom_out')}</strong> (how this opening connects to the
          play&rsquo;s big ideas).
        </p>

        <ol className="space-y-4">
          {cards.map((card, idx) => (
            <li key={idx} className="rounded-lg border border-border/60 bg-card/40 p-4 shadow-sm">
              <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  className={
                    'inline-block rounded px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ' +
                    (card.kind === 'Notice'
                      ? 'bg-blue-500/15 text-blue-200'
                      : card.kind === 'Say'
                        ? 'bg-emerald-500/15 text-emerald-200'
                        : 'bg-amber-500/15 text-amber-200')
                  }
                >
                  {kindLabel[card.kind]}
                </span>
                {card.fragment && (
                  <span className="text-sm italic text-foreground/90">{card.fragment}</span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">{card.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="model" className="space-y-3">
        <h2 id="model" className="text-2xl font-semibold">
          {t('rev.texts.bloodbrothers.extract.model_h')}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t('rev.texts.bloodbrothers.extract.model_sub')}
        </p>
        <div className="rounded-lg border border-border/60 bg-card/40 p-5 text-sm leading-relaxed text-foreground/90">
          {modelParagraph}
        </div>
      </section>

      <footer className="border-t border-border/60 pt-4 text-xs text-muted-foreground">
        <strong className="block text-foreground">
          {t('rev.texts.bloodbrothers.extract.fair_dealing_h')}
        </strong>
        <p>
          Blood Brothers by Willy Russell remains in copyright. The short fragments quoted on this
          page (each well under fifteen words) are reproduced for the purpose of criticism and
          review under the fair dealing provisions of the Copyright, Designs and Patents Act 1988
          (UK). All quoted material is the copyright of Willy Russell and his publishers; no
          extended passages, song lyrics or scenes are reproduced. Students should consult a
          licensed printed edition of the play for full text.
        </p>
      </footer>
    </div>
  )
}
