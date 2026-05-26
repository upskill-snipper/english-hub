'use client'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
import { useState } from 'react'

/* ─── Expandable Section Component ─────────────────────────── */

function Section({
  title,
  icon,
  defaultOpen = false,
  children,
}: {
  title: string
  icon: string
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="mb-4 rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-muted transition-colors"
      >
        <span className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="text-lg font-bold text-foreground">{title}</span>
        </span>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 py-5">{children}</div>}
    </div>
  )
}

function QuoteCard({
  quote,
  speaker,
  analysis,
}: {
  quote: string
  speaker?: string
  analysis: string
}) {
  return (
    <div className="rounded-lg border-l-4 border-violet-400 bg-violet-500/5 p-4 mb-3">
      <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 italic">
        &ldquo;{quote}&rdquo;
      </p>
      {speaker && <p className="mt-1 text-xs font-medium text-violet-600">&mdash; {speaker}</p>}
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  )
}

function CharacterCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted p-4 mb-3">
      <h4 className="font-bold text-primary">{name}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function ThemeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-violet-500/30 bg-violet-500/10/30 p-4 mb-3">
      <h4 className="font-bold text-violet-700 dark:text-violet-300">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function ToKillAMockingbirdPage() {
  const locale = useLocale()
  const tr = (en: string): string => {
    if (locale !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            20th-Century Prose
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel IGCSE 4ET1
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            GCSE
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          To Kill a Mockingbird &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">{tr(`Harper Lee, 1960`)}</p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          A complete IGCSE and GCSE study guide to Harper Lee&apos;s Pulitzer Prize-winning novel.
          Includes plot breakdown of Parts One and Two, in-depth character profiles, key themes with
          evidence, 15+ quotations with analysis, symbolism, historical context (Jim Crow, the
          Scottsboro Boys, civil rights publication), and exam-style questions with planning notes.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">{tr(`Jump to section:`)}</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Plot Summary',
            'Characters',
            'Themes',
            'Context',
            'Key Quotations',
            'Symbols',
            'Practice Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* ────────────────────────────────── PLOT SUMMARY */}
        <div id="plot-summary">
          <Section title={tr(`Plot Summary`)} icon="📖" defaultOpen>
            <div className="space-y-5">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Part One: Childhood in Maycomb (Chapters 1&ndash;11)
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The novel opens in the &ldquo;tired old town&rdquo; of Maycomb, Alabama, during
                  the Great Depression. The narrator is Scout Finch, looking back on events that
                  began when she was six. Scout lives with her older brother Jem and their widowed
                  father Atticus, a principled lawyer. Their cook Calpurnia, a Black woman, helps
                  raise them. In the summer of 1933 they meet Dill Harris, a small visitor from
                  Meridian who comes to stay with his aunt Miss Rachel. The three children become
                  obsessed with the Radley house next door and its mysterious occupant Boo Radley,
                  whom they have never seen and who is the subject of every local rumour. Their
                  games &mdash; daring each other to touch the house, dramatising Boo&apos;s life
                  &mdash; reveal a blend of curiosity and prejudice they have absorbed from the
                  community. Over two summers, unseen gifts begin appearing in the knothole of an
                  oak tree on the Radley property: chewing gum, pennies, soap figures of Scout and
                  Jem, a watch. Eventually Nathan Radley, Boo&apos;s brother, fills the knothole
                  with cement.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Scout&apos;s schooling begins disastrously with Miss Caroline. At home, Atticus
                  accepts the case of Tom Robinson, a Black man falsely accused of raping a white
                  woman, Mayella Ewell. The case attracts hostility. Scout fights classmates who
                  insult her father. Atticus shoots a rabid dog, Tim Johnson, in the street &mdash;
                  an episode revealing his hidden marksmanship, a skill he had quietly given up. Mrs
                  Dubose, a dying neighbour who taunts the children, becomes Jem&apos;s test of
                  self-control after he destroys her camellias; Atticus reveals after her death that
                  she was conquering a morphine addiction, exemplifying real courage.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Part Two: The Trial and Its Aftermath (Chapters 12&ndash;31)
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Calpurnia takes Jem and Scout to her Black church, First Purchase, where they are
                  largely welcomed but encounter the hostility of Lula. Aunt Alexandra arrives to
                  provide a &ldquo;feminine influence.&rdquo; The trial of Tom Robinson approaches.
                  Atticus prevents a lynch mob at the jailhouse when Scout, recognising Mr
                  Cunningham, innocently disarms the crowd by talking about his son Walter. At the
                  trial, Atticus methodically dismantles the Ewells&apos; story: Bob Ewell is
                  left-handed (the bruises on Mayella&apos;s right side suggest a left-handed
                  assailant), and Tom&apos;s left arm is crippled from a cotton-gin accident, making
                  him incapable of inflicting those injuries. Mayella is shown to be a desperately
                  lonely young woman who tried to kiss Tom and was beaten by her father when he saw.
                  Despite overwhelming evidence of innocence, the all-white jury convicts Tom.
                  Atticus has won morally but lost legally. Tom is later shot dead trying to escape
                  from prison.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Bob Ewell, humiliated by Atticus, vows revenge. He spits in Atticus&apos;s face,
                  attempts to break into Judge Taylor&apos;s house, and harasses Tom&apos;s widow
                  Helen. On Halloween night, Scout and Jem walk home from a school pageant. In the
                  dark, Ewell attacks them with a knife. Jem&apos;s arm is broken. A stranger
                  intervenes, kills Ewell in the struggle, and carries Jem home. The stranger is Boo
                  Radley. Sheriff Heck Tate refuses to expose Boo to public attention, insisting Bob
                  Ewell &ldquo;fell on his knife.&rdquo; Atticus reluctantly accepts. Scout walks
                  Boo home, stands on his porch, and finally sees Maycomb &ldquo;from his point of
                  view.&rdquo; The novel ends with Atticus reading to Jem as he sleeps, and Scout
                  reflecting that &ldquo;most people are nice, when you finally see them.&rdquo;
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title={tr(`Character Profiles`)} icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="Scout (Jean Louise) Finch"
                description="The first-person narrator and protagonist, almost six at the novel's opening and eight by its close. The dual narrative voice - child Scout living the events, adult Jean Louise reflecting on them - gives the novel its rich texture: childlike incomprehension allows Lee to expose adult prejudice through a clear lens, while the adult voice provides moral retrospection. Scout is fiercely intelligent, tomboyish, quick to violence, and resists Aunt Alexandra's attempts to make her 'a lady.' Her education in empathy - to 'walk around in someone's skin' - is the novel's central Bildungsroman arc."
              />
              <CharacterCard
                name="Jem (Jeremy) Finch"
                description="Scout's older brother, nearly ten when the novel begins and twelve going on thirteen by its end. Jem ages from a boy obsessed with Radley games into an adolescent forced to confront the cruelty of his community. The trial verdict 'breaks' him; he weeps and cannot accept the injustice. While Scout's understanding deepens through Atticus's guidance, Jem must grapple with disillusionment, marking the painful end of childhood innocence. His broken arm at the novel's opening - referenced in the very first line - frames the entire narrative."
              />
              <CharacterCard
                name="Atticus Finch"
                description="The widowed father of Jem and Scout, an attorney serving in the Alabama state legislature, and the moral centre of the novel. Atticus is fifty when the story begins, gentle, principled, and deeply unfashionable in his refusal to accept Maycomb's racial codes. He defends Tom Robinson knowing he cannot win because, as he tells Scout, he 'couldn't go to church and worship God' otherwise. Lee presents him as embodying real courage: 'when you know you're licked before you begin but you begin anyway and you see it through.' He is not a saint but a flawed, tired man who chooses integrity at personal cost."
              />
              <CharacterCard
                name="Calpurnia"
                description="The Finch family's Black cook and a maternal figure to Scout and Jem after their mother's death. Calpurnia is strict, literate (she taught Jem to read and Scout her letters), and lives 'in two worlds' - speaking standard English at the Finch home and the dialect of her community at First Purchase Church. Her code-switching reveals to Scout that language and identity adapt to context. Aunt Alexandra wants her dismissed; Atticus refuses, insisting she 'is a faithful member of this family.' Calpurnia bridges the racial divide that the novel anatomises."
              />
              <CharacterCard
                name="Aunt Alexandra"
                description="Atticus's sister, who moves into the Finch home before the trial to provide Scout with a 'feminine influence.' She is conservative, class-conscious, obsessed with the Finch family lineage, and represents the stratified social order Scout resists. She organises missionary teas and looks down on the Cunninghams as 'trash.' Yet Lee complicates her: at the novel's lowest moment, when news of Tom's death arrives, Alexandra shows genuine compassion for Atticus and steels herself for Scout's sake - revealing that even rigid characters have depths."
              />
              <CharacterCard
                name="Tom Robinson"
                description="The Black field-hand falsely accused of raping Mayella Ewell. Tom is a kind, hard-working young man with a wife (Helen) and three children, his left arm crippled by a cotton-gin accident - a physical impossibility that should acquit him. His fatal mistake at trial is admitting he 'felt sorry for' Mayella, an inversion of racial hierarchy unforgivable in 1930s Alabama. Convicted despite the evidence, he is shot seventeen times trying to climb a prison fence. His death is the novel's tragic centre and exposes the lethal reality of Jim Crow justice."
              />
              <CharacterCard
                name="Bob Ewell"
                description="The drunken, illiterate, racist patriarch of the Ewells, Maycomb's poorest white family who live behind the dump. He abuses his daughter Mayella (the novel strongly implies sexually) and beats her after catching her trying to kiss Tom Robinson. Out of cowardice and fear, he accuses Tom. Even after winning at trial, Ewell pursues vengeance against Atticus, ultimately attacking Scout and Jem in the dark - and being killed by Boo Radley. Lee uses Ewell to show how white supremacy enables even the lowest white person to destroy a Black family."
              />
              <CharacterCard
                name="Mayella Ewell"
                description="Bob Ewell's nineteen-year-old daughter, the alleged victim. Mayella is presented sympathetically as a desperately lonely young woman: she tends red geraniums in the dirt yard, cleans herself for court, and has no friends or education. Lee's most subversive choice is showing she is also a victim - of poverty, of her father's abuse, and of the social codes that make her false accusation the only way to escape the shame of having kissed a Black man. She is both pitiable and complicit, a complex figure whose lies destroy an innocent man."
              />
              <CharacterCard
                name="Boo Radley (Arthur Radley)"
                description="The Finches' reclusive neighbour, the focus of Scout, Jem and Dill's imagination. Locked in his house for years after a youthful misdemeanour, Boo is the ghost-figure of childhood myth - pale, knife-wielding, eating raw squirrels in the local rumour. The novel patiently inverts every assumption: Boo leaves the children gifts, mends Jem's torn trousers, drapes a blanket round Scout during a fire, and finally kills Bob Ewell to save them. He is the second 'mockingbird' of the title: harmless, gentle, destroyed by gossip. Scout's act of seeing Maycomb 'from the Radley porch' completes her moral education."
              />
              <CharacterCard
                name="Dill (Charles Baker) Harris"
                description="The children's summer friend, modelled on Lee's real childhood neighbour Truman Capote. Dill is small, imaginative, and unsettled: he tells fantastical stories to disguise the loneliness of being unwanted by his stepfather. He fuels the Boo Radley fascination and reacts viscerally to the trial - running out crying when prosecutor Mr Gilmer is contemptuous of Tom. Dill represents pure childhood empathy unhardened by Maycomb's codes."
              />
              <CharacterCard
                name="Miss Maudie Atkinson"
                description="The Finches' neighbour and one of the novel's moral voices. A keen gardener who loses her house to fire (and reacts cheerfully), Miss Maudie articulates much of the novel's wisdom for Scout: that mockingbirds 'don't do one thing but make music for us to enjoy,' that Atticus is 'the same in his house as he is on the public streets,' and that even after the verdict 'we're making a step - it's just a baby-step, but it's a step.' She is independent, witty, and unfazed by hypocrisy."
              />
              <CharacterCard
                name="Heck Tate"
                description="The Sheriff of Maycomb County, an honest lawman caught between duty and decency. He gives Atticus the rifle to shoot the rabid dog, recognising Atticus's superior aim. Crucially, at the novel's close, Tate refuses to expose Boo Radley to public scrutiny, insisting (against Atticus's instinct to obey the law strictly) that 'Bob Ewell fell on his knife.' His decision is a moral compromise that protects an innocent reclusive man, embodying the novel's distinction between law and justice."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`Racial Injustice`)}
                description="The novel's most prominent theme. Lee depicts a justice system structurally rigged against Black defendants in the Jim Crow South. Tom Robinson's case is hopeless not because of evidence but because of his race: an all-white jury cannot acquit a Black man accused by a white woman, regardless of facts. Atticus tells Jem that 'in our courts, when it's a white man's word against a black man's, the white man always wins.' Tom's death - shot trying to escape - and the community's relative indifference reveal the lethal violence of legalised racism. Lee shows segregation operating at every level: the segregated courthouse balcony, the Black church, even Aunt Alexandra's missionary tea."
              />
              <ThemeCard
                title={tr(`Childhood Innocence vs Adult Prejudice`)}
                description="The novel is a Bildungsroman tracking Scout and Jem's loss of innocence. Children begin with absorbed prejudices (the Boo Radley myths) but possess fundamental moral clarity Maycomb's adults have abandoned. Dill weeps at Mr Gilmer's contempt for Tom because he has not yet learned to disregard it. Jem, after the verdict, asks 'How could they do it?' - a question adults have stopped asking. Scout's development is gentler: she retains compassion (recognising Mr Cunningham at the jail) while gradually understanding the codes of her world. Adult prejudice is presented as a learned corruption of natural empathy."
              />
              <ThemeCard
                title={tr(`Moral Courage`)}
                description="Lee redefines courage through Atticus and Mrs Dubose. Real courage, Atticus says, is 'when you know you're licked before you begin but you begin anyway and you see it through no matter what.' Mrs Dubose conquering morphine addiction before death exemplifies it; so does Atticus defending Tom in full knowledge he cannot win. The novel distinguishes physical bravery (the rabid dog) from moral courage (standing against community opinion). Scout learns that her father is 'the bravest man who ever lived' because he refuses to compromise integrity, even when his children are insulted in the street."
              />
              <ThemeCard
                title="Empathy ('walk around in his skin')"
                description="The ethical core of the novel, articulated in Atticus's first lesson to Scout: 'You never really understand a person until you consider things from his point of view - until you climb into his skin and walk around in it.' Empathy is the corrective to prejudice. Scout learns to apply it to Walter Cunningham, to Mrs Dubose, to Mayella, and finally to Boo Radley, whose porch she literally stands on at the novel's climactic moment. Lee suggests empathy is not an emotion but a discipline - a chosen act of imagination."
              />
              <ThemeCard
                title={tr(`Class Hierarchies in Maycomb`)}
                description="Beyond race, Maycomb is rigidly stratified by class. Jem theorises: 'There's four kinds of folks in the world. There's the ordinary kind like us and the neighbours, there's the kind like the Cunninghams out in the woods, the kind like the Ewells down at the dump, and the Negroes.' The Cunninghams are poor but proud (Walter will not accept charity); the Ewells are 'trash' who exploit social codes for power; the Black community sits beneath all white classes regardless of dignity. Aunt Alexandra polices class boundaries (Walter cannot visit because he is 'trash'); Scout questions them. Lee uses class to show that the Southern hierarchy is not natural but artificially maintained through education, privilege, and exclusion."
              />
              <ThemeCard
                title="Education"
                description="Lee contrasts formal schooling with genuine learning. Scout's first day with Miss Caroline is a disaster: she is punished for being literate, and Miss Caroline cannot understand the Cunninghams' refusal of charity. The Maycomb school system, with its rigid 'Dewey Decimal' methods, fails to teach what matters. Atticus educates his children at home through reading, conversation, and example. Calpurnia teaches Scout calligraphy; Miss Maudie teaches moral discernment. The novel argues that real education is the cultivation of empathy and moral imagination - not curriculum content. Lee's irony cuts deepest when Scout's teacher Miss Gates condemns Hitler's persecution of Jews while accepting the persecution of Black Americans at home."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title={tr(`Historical and Social Context`)} icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  The 1930s Deep South and the Great Depression
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel is set between 1933 and 1935, the depths of the Great Depression.
                  Atticus tells Scout the Cunninghams are &ldquo;hit hardest&rdquo; because they are
                  country people whose cash crops have collapsed. Maycomb&apos;s shabbiness &mdash;
                  the unpaved streets, the &ldquo;tired old town&rdquo; &mdash; reflects the rural
                  Southern economy in collapse. Black Alabamans were doubly disadvantaged: poor and
                  excluded from political and legal power.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Jim Crow Laws and Segregation`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  From the 1870s until the Civil Rights Act of 1964, Southern states enforced
                  &ldquo;Jim Crow&rdquo; laws mandating racial segregation in schools, transport,
                  courts, churches, restaurants, and public spaces. Black Americans were effectively
                  disenfranchised. Lee depicts the operating reality of Jim Crow: the segregated
                  courthouse balcony, the Black church on the edge of town, the impossibility of an
                  interracial jury, and the social code that punishes any inversion of racial
                  hierarchy. The legal apparatus of segregation was upheld by social violence
                  including lynching &mdash; the threat that hangs over the jailhouse scene.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Scottsboro Boys Trial`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In 1931, nine Black teenagers in Scottsboro, Alabama, were falsely accused of
                  raping two white women on a freight train. They were tried in a series of rushed
                  proceedings, several sentenced to death by all-white juries, despite medical
                  evidence of their innocence and one accuser later recanting. The case generated
                  national outrage and produced two landmark Supreme Court decisions on the right to
                  counsel and jury composition. Harper Lee, growing up in nearby Monroeville, would
                  have been five during the first trial; her father was a lawyer. Tom
                  Robinson&apos;s case is widely understood to draw on Scottsboro, especially the
                  structure of false accusation, all-white jury, and inevitable conviction despite
                  physical impossibility.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Civil Rights Era Publication (1960)`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Although set in the 1930s, the novel was published in July 1960, at the height of
                  the Civil Rights Movement. Brown v. Board of Education had outlawed segregated
                  schools in 1954; the Montgomery Bus Boycott (1955&ndash;6) and the Greensboro
                  sit-ins (1960) were transforming the South. The novel can be read as a historical
                  fiction that comments on its own moment, asking white American readers to confront
                  the legacy of Jim Crow as the legal framework was being dismantled. The novel won
                  the Pulitzer Prize in 1961 and became an immediate bestseller.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Harper Lee&apos;s Biography`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Nelle Harper Lee (1926&ndash;2016) grew up in Monroeville, Alabama. Her father
                  A.C. Lee was a lawyer who once defended two Black men accused of murder; both were
                  convicted and hanged. Her childhood neighbour was the writer Truman Capote, the
                  model for Dill. Lee studied law but did not finish, moving to New York to write.{' '}
                  <em>{tr(`To Kill a Mockingbird`)}</em>, her first published novel, drew heavily on
                  her childhood. She published essentially nothing else during her lifetime;{' '}
                  <em>{tr(`Go Set a Watchman`)}</em> (2015), an earlier draft, was published
                  controversially in her old age. Lee was a famously private figure, and the
                  autobiographical intimacy of the novel partly explains its emotional force.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Bildungsroman Tradition`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  A <em>Bildungsroman</em> (German: &ldquo;novel of formation&rdquo;) traces a young
                  protagonist&apos;s moral and psychological development. The genre originated with
                  Goethe&apos;s <em>{tr(`Wilhelm Meister`)}</em> (1795&ndash;6) and includes
                  Dickens&apos;s
                  <em> Great Expectations</em>, Bront&euml;&apos;s <em>Jane Eyre</em>, and
                  Salinger&apos;s
                  <em> The Catcher in the Rye</em>. Lee&apos;s novel adapts the form by using a
                  child narrator looking back as an adult, creating a layered perspective: child
                  Scout experiences the events; adult Jean Louise interprets them. The novel charts
                  both Scout&apos;s and Jem&apos;s development, and its conclusion (Scout on the
                  Radley porch) marks the moment of fully realised moral imagination that the
                  Bildungsroman traditionally seeks.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              15+ quotations organised by theme and character for exam revision. All directly from
              Harper Lee&apos;s text.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="You never really understand a person until you consider things from his point of view - until you climb into his skin and walk around in it."
                speaker="Atticus to Scout, Chapter 3"
                analysis="The novel's thesis statement on empathy. The metaphor of climbing inside another's skin is bodily and visceral, suggesting empathy is a physical act of imagination, not abstract sympathy. The phrase echoes throughout the novel: Scout applies it to Walter Cunningham, Mayella, and finally Boo, whose porch she literally stands on. Atticus offers this as the antidote to prejudice - and the entire moral arc of Scout's development depends on this single sentence."
              />
              <QuoteCard
                quote="Mockingbirds don't do one thing but make music for us to enjoy. They don't eat up people's gardens, don't nest in corncribs, they don't do one thing but sing their hearts out for us. That's why it's a sin to kill a mockingbird."
                speaker="Miss Maudie to Scout, Chapter 10"
                analysis="The novel's title metaphor and moral key. Miss Maudie defines the mockingbird as harmless, generous, and innocent - a creature that exists only to give. The repeated negative ('don't... don't... don't') emphasises its incapacity for harm. The quotation illuminates the title and unlocks the symbolic meanings of Tom Robinson and Boo Radley as the novel's two 'mockingbirds.' To destroy such a being is described as a 'sin' - not a crime but a moral wrong."
              />
              <QuoteCard
                quote="Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird."
                speaker="Atticus to Jem and Scout, Chapter 10"
                analysis="The novel's only explicit moral injunction from Atticus on this subject. The contrast between bluejays (aggressive, predatory) and mockingbirds (harmless songbirds) draws an ethical distinction familiar from Christian and natural-law traditions. Significantly, this is one of the few times Atticus prohibits something outright - the moral weight is total. The line connects later to both Tom (innocent and destroyed) and Boo (revealing him would be 'sort of like shootin' a mockingbird,' Scout says)."
              />
              <QuoteCard
                quote="Atticus, he was real nice."
                speaker="Scout, final chapter"
                analysis="Scout's closing line about Boo Radley. The simplicity of the diction - childish and direct - captures the moral arrival of the novel: after years of dramatising Boo as a monster, Scout sees him as a person, and the verdict is utterly plain. The deflationary modesty ('real nice') refuses melodrama; the truth Scout has spent the whole novel learning is, in the end, almost banal. Atticus's reply - 'Most people are, Scout, when you finally see them' - completes the lesson."
              />
              <QuoteCard
                quote="Maycomb was an old town, but it was a tired old town when I first knew it."
                speaker="Scout (narrator), Chapter 1"
                analysis="The novel's opening characterisation of setting. The repetition of 'old' and the personification ('tired') establish Maycomb as a place worn out by tradition. The clauses lengthen as the description goes on, mimicking the slow pace of Southern small-town life. The atmosphere of stagnation prefigures the resistance to change that the trial will expose. The retrospective tense ('when I first knew it') marks the dual narrative voice: adult Jean Louise looking back."
              />
              <QuoteCard
                quote="I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin but you begin anyway and you see it through no matter what."
                speaker="Atticus to Jem about Mrs Dubose, Chapter 11"
                analysis="The novel's redefinition of courage. Atticus rejects the conventional masculine image (gun, violence) and offers a moral one: persistence in the face of certain defeat. The phrase 'licked before you begin' will apply most precisely to Atticus himself defending Tom Robinson. The line teaches readers how to reread the rabid-dog scene (physical courage) against the trial (moral courage), and primes us to see Mrs Dubose's morphine struggle as heroic."
              />
              <QuoteCard
                quote="The one thing that doesn't abide by majority rule is a person's conscience."
                speaker="Atticus to Scout, Chapter 11"
                analysis="A statement of moral individualism. Atticus distinguishes democratic process (which respects majority opinion) from ethics (which cannot). In a community where 'everybody' regards Tom as guilty, this principle justifies his stand. The line participates in the long American tradition of conscience-against-the-crowd from Thoreau and Emerson. Lee uses it to validate moral nonconformity at a moment when the Civil Rights Movement was demanding precisely that of white Americans."
              />
              <QuoteCard
                quote="Simply because we were licked a hundred years before we started is no reason for us not to try to win."
                speaker="Atticus to Scout, Chapter 9"
                analysis="The historical depth of Atticus's stance. 'A hundred years' before 1935 places the origin of injustice at the antebellum slave system; Atticus acknowledges that the racial structure of the South is centuries old. Yet the syntax - the double negative leading to 'try to win' - refuses fatalism. The line is Atticus's case for moral effort even within a corrupt system. It also operates as Lee's own implicit argument to her 1960 readership."
              />
              <QuoteCard
                quote="There's something in our world that makes men lose their heads - they couldn't be fair if they tried. In our courts, when it's a white man's word against a black man's, the white man always wins. They're ugly, but those are the facts of life."
                speaker="Atticus to Jem after the trial, Chapter 23"
                analysis="Atticus's most direct statement of structural racism. 'Lose their heads' suggests racial prejudice is a kind of madness; 'couldn't be fair if they tried' acknowledges that even individual goodwill cannot overcome systemic bias. The flat phrase 'facts of life' refuses euphemism. This is Atticus speaking to his son not in idealism but in painful realism - a turning point where Jem must integrate the moral truth of the world he has inherited."
              />
              <QuoteCard
                quote="As you grow older, you'll see white men cheat black men every day of your life, but let me tell you something and don't you forget it - whenever a white man does that to a black man, no matter who he is, how rich he is, or how fine a family he comes from, that white man is trash."
                speaker="Atticus to Jem, Chapter 23"
                analysis="A redefinition of the word 'trash.' Maycomb uses 'trash' to mean the poorest whites (the Ewells); Atticus reverses the term to apply to any white person who exploits a Black person, regardless of class. The line demolishes Aunt Alexandra's class snobbery in a single sentence. 'No matter who he is, how rich he is, or how fine a family he comes from' attacks every status marker the Finches' world relies on."
              />
              <QuoteCard
                quote="People generally see what they look for, and hear what they listen for."
                speaker="Judge Taylor at the trial, Chapter 17"
                analysis="A statement of perceptual prejudice. Judge Taylor articulates what the trial verdict will demonstrate: the all-white jury will see and hear what they have already decided to see and hear. The line is also an instruction to the reader about reading itself: it asks us to confront our own preconceptions about the characters (especially Boo Radley) and what we expect to find."
              />
              <QuoteCard
                quote="The thing about it is, our kind of folks don't like the Cunninghams, the Cunninghams don't like the Ewells, and the Ewells hate and despise the colored folks."
                speaker="Jem to Scout, Chapter 23"
                analysis="Jem's class theory of Maycomb, articulated after the trial. The descending scale of contempt - don't like... don't like... hate and despise - reveals how each tier of society defines itself by looking down on the next. The Black community sits beneath all white classes regardless of moral worth. Lee uses Jem's emerging adult perception to anatomise the social structure that produces the verdict."
              />
              <QuoteCard
                quote="Until I feared I would lose it, I never loved to read. One does not love breathing."
                speaker="Scout (narrator), Chapter 2"
                analysis="Scout's reflection after Miss Caroline forbids Atticus to teach her. The simile equating reading with breathing makes literacy elemental - not an achievement but an automatic life-function. The chiastic structure of the second sentence ('does not love breathing' inverting 'never loved to read') gives the line aphoristic weight. Lee implicitly criticises the Maycomb school for trying to deny something so fundamental, and signals literacy as the foundation of Scout's eventual moral autonomy."
              />
              <QuoteCard
                quote="Atticus had used every tool available to free men to save Tom Robinson, but in the secret courts of men's hearts Atticus had no case."
                speaker="Scout (narrator), Chapter 22"
                analysis="The retrospective adult voice's verdict on the trial. The phrase 'secret courts of men's hearts' moves the action from the courthouse to the interior, identifying the real site of injustice as the prejudiced consciousness of jurors. 'Every tool available to free men' acknowledges that Atticus exhausted the legal possibilities; 'no case' means none of those tools could reach where it mattered. A precise, devastating sentence."
              />
              <QuoteCard
                quote="I think I'm beginning to understand why Boo Radley's stayed shut up in the house all this time. It's because he wants to stay inside."
                speaker="Jem to Scout, Chapter 23"
                analysis="Jem's matured judgement after the trial. Earlier in the novel the children invent reasons why Boo cannot leave (chained to a bed, monstrous); here Jem inverts the assumption. Boo chooses isolation as a refuge from a world that has just convicted Tom Robinson. The line marks Jem's transition into disillusioned adulthood and reframes Boo as a figure of moral retreat from a corrupted community."
              />
              <QuoteCard
                quote="Atticus was right. One time he said you never really know a man until you stand in his shoes and walk around in them. Just standing on the Radley porch was enough."
                speaker="Scout (narrator), Chapter 31"
                analysis="The novel's culminating realisation. Scout literalises Atticus's empathy lesson by physically standing on Boo's porch and seeing the street from his perspective. The simplicity of 'just standing... was enough' shows that empathy is sufficient - not a complex theory but a simple act of seeing. Lee returns to Atticus's earlier metaphor (skin/shoes) and resolves the entire Bildungsroman in a single image of perspective achieved."
              />
              <QuoteCard
                quote="Most people are, Scout, when you finally see them."
                speaker="Atticus, final chapter"
                analysis="Atticus's response to Scout's verdict on Boo ('he was real nice'). The line generalises Scout's specific insight: most people are good when truly perceived. The qualifier 'finally' admits that the seeing is the hard part. Coming as the novel's penultimate exchange, the line offers a guarded optimism after the verdict's horror - empathy is possible even after Maycomb has shown its worst."
              />
              <QuoteCard
                quote="Well, it'd be sort of like shootin' a mockingbird, wouldn't it?"
                speaker="Scout, Chapter 30"
                analysis="Scout's response to Atticus asking whether she understands why Heck Tate insists Bob Ewell fell on his knife. In a single line she applies the title metaphor to Boo Radley. The hesitant 'sort of' shows childhood diction; the moral reasoning beneath is fully adult. This is the moment Scout demonstrates she has learned the novel's key ethical lesson - and it is enough to make Atticus accept Heck Tate's version."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title={tr(`Key Symbols and Motifs`)} icon="🕊️">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Mockingbird`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The novel&apos;s central symbol, given its name in the title. The mockingbird
                  represents innocence and harmlessness destroyed by cruelty. Miss Maudie defines
                  the mockingbird as a creature that &ldquo;don&apos;t do one thing but make music
                  for us to enjoy.&rdquo; In the novel, two characters embody this symbol:{' '}
                  <strong>{tr(`Tom Robinson`)}</strong>, a kind man destroyed by a false accusation
                  he could not have made true, and <strong>{tr(`Boo Radley`)}</strong>, a gentle
                  recluse who is &ldquo;mocked&rdquo; by gossip and whom Scout recognises must not
                  be exposed to public view (&ldquo;sort of like shootin&apos; a
                  mockingbird&rdquo;). The symbol unites the two halves of the novel &mdash; the Boo
                  plot of Part One and the Tom plot of Part Two &mdash; into a single moral
                  statement: it is a sin to destroy the harmless.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Mad Dog (Tim Johnson)`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In Chapter 10, a rabid dog named Tim Johnson stumbles down the Maycomb street.
                  Heck Tate hands his rifle to Atticus, who shoots the dog cleanly with a single
                  bullet. The rabid dog is widely read as a symbol of the disease of racism: a
                  normally harmless creature (Maycomb&apos;s civility) infected with a madness that
                  must be confronted. Atticus &mdash; the only person willing and capable &mdash;
                  takes the shot. The scene also reveals Atticus&apos;s hidden physical courage
                  &mdash; he was once a noted marksman &mdash; and prepares us for his moral courage
                  at the trial: he is the man who must face what others cannot.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`Boo&apos;s Gifts in the Tree-Knothole`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Throughout Part One, the children find small gifts in the knothole of an oak tree
                  on the Radley property: gum, pennies, soap figures of Scout and Jem, a watch, a
                  spelling-bee medal, twine. The gifts symbolise{' '}
                  <strong>secret communication and unrecognised kindness</strong>. Boo, unable or
                  unwilling to speak directly to the children, reaches them through objects. The
                  reader recognises the gifts as expressions of love before the children do. When
                  Nathan Radley fills the knothole with cement, claiming the tree is dying (Jem
                  realises it is not), the act symbolises the suppression of human contact and the
                  cruelty of cutting off connection.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Atticus&apos;s Glasses`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Atticus is repeatedly described as bookish and bespectacled; the children consider
                  him &ldquo;feeble&rdquo; because he wears glasses, does not hunt, and does not
                  play football. In the rabid dog scene, Atticus pushes his glasses up onto his
                  forehead, takes aim, and fires. His glasses fall and a lens shatters. The broken
                  glasses are a symbolic moment: his spectacled, gentle persona is set aside to
                  reveal the marksman beneath. They symbolise the contrast between Atticus&apos;s
                  outward mildness and inner steel &mdash; appearance versus essence, a theme echoed
                  in Boo Radley&apos;s arc.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`The Rabid Dog Scene as Allegory`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Tim Johnson scene operates on multiple symbolic levels. The dog is sick
                  through no fault of its own &mdash; rabies infects the innocent. The community
                  must trust Atticus, the most peaceable man in Maycomb, to handle the threat
                  because no one else will or can. The scene foreshadows the trial structurally: a
                  sick situation, a community in retreat, and Atticus alone willing to act. Some
                  critics also read the rabid dog as a warning that prejudice infects communities
                  like a disease, and that those who refuse to engage with it ultimately let others
                  bear the danger.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Radley House`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The closed-up Radley house is itself a symbol: of secrets, of social ostracism, of
                  the Gothic interior of Maycomb&apos;s respectable surface. Its &ldquo;malevolent
                  phantom&rdquo; inhabits the children&apos;s imaginations because Maycomb&apos;s
                  gossip has constructed Boo into a monster. The novel patiently dismantles the
                  symbolic horror of the house, until Scout walks calmly to its porch in the final
                  chapter and stands there as Boo&apos;s guest. The house reverses meaning: from
                  terror to refuge.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Mayella&apos;s Geraniums`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Among the squalor of the Ewell yard &mdash; described as a dump &mdash; Mayella
                  tends red geraniums in chipped pots. The geraniums are a symbol of her stunted
                  humanity: a desperate attempt at beauty in a place that should produce none. They
                  humanise her without exonerating her, contributing to Lee&apos;s complex portrait
                  of a victim who becomes a perpetrator. Scout&apos;s recognition of the geraniums
                  marks the start of her empathetic engagement with Mayella as a person rather than
                  an enemy.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── PRACTICE QUESTIONS */}
        <div id="practice-questions">
          <Section title={tr(`Exam-Style Questions with Planning Notes`)} icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five Edexcel IGCSE 4ET1-style questions and three GCSE-style questions, each with
              thesis suggestions and paragraph planning. Each plan includes a thesis, paragraph
              structure, and suggested quotations.
            </p>

            <h3 className="text-base font-bold text-foreground mb-3">
              Edexcel IGCSE 4ET1-Style Questions
            </h3>

            <div className="space-y-6 mb-8">
              {/* IGCSE 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. Explore how Lee presents the theme of prejudice in{' '}
                  <em>{tr(`To Kill a Mockingbird`)}</em>. (40 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lee shows that prejudice is multi-layered - racial, class-based, and social -
                      and is sustained not only by overt cruelty but by the everyday silences and
                      assumptions of ostensibly &ldquo;respectable&rdquo; townspeople.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Racial prejudice
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;In our courts, when it&apos;s a white man&apos;s word against a black
                      man&apos;s, the white man always wins.&rdquo; Trace the trial as systemic
                      racism in action. Atticus admits the structural truth.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Class prejudice
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Aunt Alexandra forbids Walter Cunningham. Jem&apos;s &ldquo;four kinds of
                      folks&rdquo; theory shows the descending scale of contempt. Lee links class
                      hierarchy to racial hierarchy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Prejudice against Boo Radley
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Maycomb&apos;s gossip constructs Boo as a monster. The children inherit and
                      amplify the prejudice. Scout&apos;s realisation on the porch reverses it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Hypocrisy of &ldquo;polite&rdquo; prejudice
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Miss Gates condemning Hitler while accepting segregation. The missionary tea
                      ladies pity &ldquo;Mrunas&rdquo; abroad while ignoring injustice at home. Lee
                      exposes liberal complicity.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lee&apos;s antidote is empathy &mdash; &ldquo;climb into his skin and walk
                      around in it&rdquo; &mdash; but the novel ends ambiguously: Tom is dead, Boo
                      is safe, the system unchanged. Reform is conscience-by-conscience.
                    </p>
                  </div>
                </div>
              </div>

              {/* IGCSE 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. How does Lee use the character of Atticus Finch to explore moral courage? (40
                  marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lee redefines courage through Atticus, distancing it from violence and
                      locating it in principled action against social pressure &mdash; a form of
                      moral integrity that demands more than physical bravery.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Atticus&apos;s definition
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;It&apos;s when you know you&apos;re licked before you begin but you
                      begin anyway and you see it through.&rdquo; This is offered after Mrs
                      Dubose&apos;s death &mdash; a deliberately unromantic example.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Defending Tom
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Atticus accepts knowing he will lose. &ldquo;Simply because we were licked a
                      hundred years before we started is no reason for us not to try to win.&rdquo;
                      The community ostracises him.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Standing alone at the jail
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Atticus reads under a single bulb, ready to face a lynch mob. His courage is
                      not bombastic but quiet; he uses his presence rather than force.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Restraint after Bob Ewell&apos;s spit
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Atticus refuses to retaliate when Ewell spits on him: courage is patience and
                      self-control. He absorbs humiliation rather than escalate.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lee uses Atticus to argue that moral courage is rarer and more demanding than
                      physical courage. The 1960 publication date framed this as a model for white
                      Americans facing the Civil Rights Movement.
                    </p>
                  </div>
                </div>
              </div>

              {/* IGCSE 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. Explore how Lee presents childhood and the loss of innocence in the novel. (40
                  marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lee uses the children to expose adult prejudice while tracking the painful,
                      gradual education of Scout and Jem &mdash; childhood is both a moral vantage
                      point and a state that must be lost.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Dual narrative voice
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Adult Jean Louise narrates events lived by child Scout. The retrospective
                      voice frames every observation. Lee uses this layering to expose adult
                      absurdity through childlike clarity.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Jem&apos;s breaking
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      After the verdict Jem weeps; the trial &ldquo;crystallised&rdquo; his
                      disillusionment. He stops playing Boo Radley games, reads more, and begins
                      forming adult theories of class.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Scout&apos;s moral education
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Scout learns empathy in stages: Walter at lunch, recognising Mr Cunningham at
                      the jail, finally Boo Radley on the porch. Her growth is gentler than
                      Jem&apos;s but no less significant.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Dill&apos;s moral instinct
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Dill cries during the trial because he has not learned to tolerate cruelty.
                      Lee uses him to remind us that adult acceptance of injustice is not natural
                      but trained.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The novel suggests that growing up means becoming aware of injustice without
                      becoming complicit in it &mdash; a balance Atticus models and Scout begins to
                      inherit.
                    </p>
                  </div>
                </div>
              </div>

              {/* IGCSE 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. How does Lee use the figure of Boo Radley in the novel? (40 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Boo Radley functions as the novel&apos;s second mockingbird and the test-case
                      for empathy: a figure constructed by gossip and slowly humanised through
                      gifts, intervention, and finally Scout&apos;s direct gaze.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Constructed monster
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Malevolent phantom&rdquo; in the children&apos;s imaginations. Maycomb
                      gossip creates Boo. Lee exposes how communities manufacture outsiders.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Gifts in the knothole
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Boo communicates through soap dolls, pennies, the watch. Reader recognises
                      kindness before children do. Cement-filled knothole symbolises severed
                      connection.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Saviour at Halloween
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Boo emerges to kill Bob Ewell defending Jem and Scout. The recluse becomes the
                      children&apos;s rescuer. Lee inverts the Gothic frame.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Mockingbird
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Sort of like shootin&apos; a mockingbird, wouldn&apos;t it?&rdquo; Heck
                      Tate and Atticus protect Boo from public attention. Boo&apos;s storyline ends
                      with Scout walking him home, standing on his porch, and seeing Maycomb from
                      his perspective.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Boo&apos;s arc parallels Tom&apos;s in inverse: both are innocents made
                      symbolic; one is killed by community, the other saved by the conscience of a
                      few. Together they make the title metaphor.
                    </p>
                  </div>
                </div>
              </div>

              {/* IGCSE 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. Discuss how Lee uses the setting of Maycomb to develop the novel&apos;s themes.
                  (40 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Maycomb is not a backdrop but a character: a &ldquo;tired old town&rdquo;
                      whose stratified geography, slow time, and ingrown gossip make it a microcosm
                      of Southern racial and class hierarchy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The opening characterisation
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Maycomb was an old town, but it was a tired old town when I first knew
                      it.&rdquo; Personification creates atmosphere of stagnation. Repetition of
                      &ldquo;old&rdquo; signals tradition&apos;s weight.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Stratified geography
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Black community on the edge of town, Ewells behind the dump, Cunninghams in
                      the country, &ldquo;respectable&rdquo; whites in the centre. Geography enacts
                      hierarchy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The courthouse
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Segregated balcony where Black observers must sit. Symbolic centre of
                      Maycomb&apos;s legal performance and its racial codes. Atticus shoots the
                      rabid dog on the same street that hosts the courthouse.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The Radley house
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A Gothic interior within ordinary suburbia. Maycomb projects its fears onto
                      its closed doors. The novel&apos;s final reversal &mdash; Scout standing on
                      Boo&apos;s porch &mdash; recasts the house from threat to refuge.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Maycomb is a settled, slow place that resists change &mdash; its physical
                      layout mirrors its social structure. Lee uses setting to argue that prejudice
                      is built into the very streets and buildings of the South.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-base font-bold text-foreground mb-3">
              {tr(`GCSE-Style Questions`)}
            </h3>

            <div className="space-y-6">
              {/* GCSE 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  6. How does Lee present the theme of family in{' '}
                  <em>{tr(`To Kill a Mockingbird`)}</em>? Refer to the whole text. (30 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lee presents family as both a foundation of moral education (the Finches) and
                      a weapon of social oppression (the Ewells, the Radleys), revealing that family
                      can either nurture conscience or destroy it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The Finches
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Atticus parents through reading, conversation, and example. Calpurnia provides
                      maternal discipline. The household is biracial in practice, integrated by
                      labour and affection.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The Ewells
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Bob Ewell&apos;s violence and abuse trap Mayella. Family becomes coercion. The
                      lie at the trial protects Bob, not Mayella. Lee shows how family can be a
                      structure of oppression.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The Radleys
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Boo is locked away by his father and brother. Family suppresses individuality.
                      The Radley silence is a prison. Yet Boo retains the capacity for affection
                      (the gifts; the rescue).
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Aunt Alexandra represents inherited family as social position; Atticus
                      represents chosen family as moral commitment. The novel privileges the second.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  7. How does Lee use the trial of Tom Robinson to expose injustice? (30 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The trial is structured to make Tom&apos;s innocence visible to the reader and
                      the verdict&apos;s injustice unmistakable &mdash; Lee dramatises how a system
                      can deliver a wrong outcome despite overwhelming evidence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The physical evidence
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Mayella&apos;s bruises on the right side suggest a left-handed assailant. Bob
                      Ewell is left-handed. Tom&apos;s left arm is crippled. Atticus demonstrates
                      impossibility methodically.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Tom&apos;s testimony
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I felt right sorry for her.&rdquo; The fatal phrase: a Black man
                      pitying a white woman inverts the racial hierarchy. Tom is condemned for
                      compassion.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The verdict
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      An all-white jury convicts despite the evidence. &ldquo;In the secret courts
                      of men&apos;s hearts Atticus had no case.&rdquo; The system has failed but it
                      has done so according to its own logic.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tom&apos;s death &mdash; shot trying to escape &mdash; is the brutal coda. Lee
                      uses the trial to indict not individual prejudice but the apparatus of Jim
                      Crow itself.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  8. How does Lee present women in <em>{tr(`To Kill a Mockingbird`)}</em>? (30
                  marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lee presents women across the social spectrum &mdash; from Aunt Alexandra to
                      Mayella to Calpurnia &mdash; to interrogate the constraints of gender within
                      Southern society and to suggest that Scout&apos;s task is to forge her own
                      path.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Scout vs &ldquo;ladyhood&rdquo;
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Aunt Alexandra and the missionary ladies pressure Scout into dresses and
                      decorum. Scout resists. Lee uses Scout to question whether
                      &ldquo;ladyhood&rdquo; is virtue or restriction.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Mayella
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A poor white woman with no friends, abused by her father, cleaning herself for
                      court. Lee makes her both pitiable and complicit. Her geraniums symbolise her
                      stunted humanity.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Calpurnia and Miss Maudie
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Two women of moral authority. Calpurnia bridges racial worlds; Miss Maudie
                      articulates much of the novel&apos;s wisdom. Both stand outside the
                      &ldquo;ladyhood&rdquo; ideal &mdash; one through race, one through unmarried
                      independence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lee&apos;s women are constrained by the Southern ideal but most strongly
                      admired when they exceed it. Scout&apos;s tomboyish narration is the
                      novel&apos;s implicit answer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── PRACTICE LIST */}
        <div id="practice-list">
          <Section title={tr(`Further Practice Questions`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4">
              Additional exam-style questions covering commonly tested areas. Consider how you would
              structure responses using PEEL paragraphs, embedded quotations, and contextual links.
            </p>
            <div className="space-y-3">
              {[
                {
                  q: 'How does Lee present the theme of moral courage in To Kill a Mockingbird? Refer to the whole text in your answer.',
                  marks: 40,
                },
                {
                  q: "Explore how Lee uses the character of Scout to develop the novel's central ideas.",
                  marks: 40,
                },
                {
                  q: 'How does Lee present the relationship between fathers and children in the novel?',
                  marks: 40,
                },
                {
                  q: 'Discuss how Lee uses symbolism - particularly the mockingbird - to convey her central themes.',
                  marks: 40,
                },
                { q: 'How does Lee present the conflict between law and justice?', marks: 40 },
                {
                  q: 'Explore how Lee presents the experience of growing up in the American South.',
                  marks: 30,
                },
                {
                  q: 'How does Lee use the character of Calpurnia to explore ideas about race, class, and identity?',
                  marks: 30,
                },
                {
                  q: 'How does Lee present the figure of the outsider in To Kill a Mockingbird?',
                  marks: 30,
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-sm font-semibold text-foreground">Question {i + 1}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.q} <span className="font-semibold">[{item.marks} marks]</span>
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">
          {tr(`Exam Tips for To Kill a Mockingbird`)}
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Always link to context.`)}</strong> Connect the trial to Jim Crow, the
              Scottsboro Boys, and the Civil Rights Movement of the 1960s when Lee was writing.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use Lee&apos;s methods.`)}</strong> Discuss the dual narrative voice
              (child Scout / adult Jean Louise), symbolism (the mockingbird, the rabid dog), and
              structural choices (Part One Boo plot / Part Two Tom plot).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Refer to authorial intention.`)}</strong> &ldquo;Lee perhaps
              suggests...&rdquo; or &ldquo;Lee uses Atticus to argue...&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Connect themes.`)}</strong> Every quote should link to at least two
              themes &mdash; the trial connects to racial injustice, class, moral courage, and the
              loss of innocence simultaneously.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use precise terminology.`)}</strong> &ldquo;Bildungsroman,&rdquo;
              &ldquo;dual narrative voice,&rdquo; &ldquo;retrospective narration,&rdquo; &ldquo;Jim
              Crow,&rdquo; &ldquo;allegory,&rdquo; &ldquo;motif.&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Address the whole novel.`)}</strong> Don&apos;t focus only on the trial
              &mdash; reference the Boo Radley plot, the rabid dog scene, Mrs Dubose, and the final
              chapter to demonstrate full knowledge.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Quote precisely.`)}</strong> Embed short, exact quotations into your
              sentences. Always attribute (&ldquo;Atticus tells Scout...&rdquo;) and analyse
              (&ldquo;The phrase suggests...&rdquo;).
            </span>
          </li>
        </ul>
      </div>

      {/* Copyright notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{tr(`To Kill a Mockingbird`)}</em> by Harper Lee was first published in 1960 and won
          the Pulitzer Prize for Fiction in 1961. The novel remains <strong>under copyright</strong>
          ; all quotations on this page are reproduced for the purposes of educational study and
          critical analysis under fair dealing/fair use provisions for review and quotation.
        </p>
      </footer>
    </>
  )
}
