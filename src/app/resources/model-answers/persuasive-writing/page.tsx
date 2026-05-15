import type { Metadata } from 'next'
import Link from 'next/link'
import { GradeTabs } from '@/components/model-answers/GradeTabs'
import { GradeBadge, GradeSummary } from '@/components/model-answers/GradeComponents'
import { GRADE_LEVELS } from '@/components/model-answers/grade-data'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Model Persuasive & Transactional Writing | The English Hub',
    description:
      'Grade 3, 5, 7, and 9 model articles, speeches, and letters for GCSE English Language with annotations highlighting rhetorical devices, structural choices, and persuasive techniques at every level.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/resources/model-answers/persuasive-writing',
  },
  title: 'Model Persuasive & Transactional Writing | The English Hub',
  description:
    'Grade 3, 5, 7, and 9 model articles, speeches, and letters for GCSE English Language with annotations highlighting rhetorical devices, structural choices, and persuasive techniques at every level.',
}

/* ─── Annotation component ───────────────────────────────────── */

function Annotation({ children, note }: { children: React.ReactNode; note: string }) {
  return (
    <span className="group relative">
      <span className="cursor-help rounded border-b-2 border-dashed border-primary/40 bg-primary/10 px-1 py-0.5 text-foreground">
        {children}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-60 -translate-x-1/2 rounded-lg bg-primary px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
        {note}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-primary" />
      </span>
    </span>
  )
}

/* ─── Examiner comment ───────────────────────────────────────── */

function ExaminerComment({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
        Examiner Commentary
      </p>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

/* ─── Section wrapper ────────────────────────────────────────── */

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 border-b-2 border-primary/20 pb-3 text-2xl font-bold text-foreground">
        {title}
      </h2>
      {children}
    </section>
  )
}

/* ─── Answer card wrapper ────────────────────────────────────── */

function AnswerCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-md">
      <div className="prose prose-sm max-w-none space-y-4 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function PersuasiveWritingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Model Answers
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Persuasive &amp; Transactional Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Model articles, speeches, and letters at grade 3, 5, 7, and 9 with annotations showing
            you how to deploy rhetorical devices, structure an argument, and write with purpose and
            flair.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources" className="transition-colors hover:text-foreground">
              Resources
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources/model-answers"
              className="transition-colors hover:text-foreground"
            >
              Model Answers
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-foreground">Persuasive Writing</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground">
                Contents
              </p>
              {[
                { id: 'article', label: 'Article' },
                { id: 'speech', label: 'Speech' },
                { id: 'techniques', label: 'Key Techniques' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">
            {/* ─── ARTICLE ─────────────────────────────────────── */}
            <Section id="article" title="Model Article">
              <div className="mb-6 rounded-xl border border-border bg-card p-6 shadow-md">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Task</p>
                <p className="font-medium text-foreground">
                  &lsquo;Young people spend too much time on their phones.&rsquo; Write an article
                  for a broadsheet newspaper in which you argue for or against this view.
                </p>
              </div>

              <GradeTabs defaultGrade={9}>
                {{
                  9: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge grade="Grade 9 (Exceptional)" color="bg-primary" />
                        <span className="text-sm text-muted-foreground">40/40</span>
                      </div>
                      <AnswerCard>
                        <h3 className="mt-0 text-lg font-bold text-foreground">
                          <Annotation note="Headline uses a rhetorical question and wordplay ('disconnected' has a double meaning). This immediately engages the reader.">
                            Are We Really the Disconnected Generation?
                          </Annotation>
                        </h3>
                        <p className="text-sm italic text-muted-foreground">
                          <Annotation note="Subheading establishes the article's stance clearly. This is a key convention of broadsheet journalism.">
                            Far from destroying communication, smartphones have transformed it
                            &mdash; and it is time we stopped blaming young people for adapting.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="Direct address ('you') and an imperative ('picture') immediately involve the reader.">
                            Picture this: a family restaurant, Saturday evening.
                          </Annotation>{' '}
                          At the corner table, a teenager scrolls through her phone while her
                          parents exchange weary glances. The scene is familiar, almost cliched
                          &mdash; and it is precisely this familiarity that should make us
                          suspicious of it. Because what the hand-wringing commentators never
                          mention is what she is actually <em>doing</em> on that phone:
                          <Annotation note="Rule of three (tricolon) with increasing significance — moves from personal to political.">
                            organising a fundraiser for her school&apos;s food bank, responding to a
                            friend in crisis, reading an article about climate policy
                          </Annotation>
                          . Not quite the zombie apocalypse we were promised.
                        </p>
                        <p>
                          <Annotation note="Topic sentence that clearly signals the paragraph's argument.">
                            The charge that young people are &ldquo;addicted&rdquo; to their phones
                            collapses under scrutiny.
                          </Annotation>{' '}
                          Research from the Oxford Internet Institute found that the effect of
                          screen time on wellbeing is roughly equivalent to that of eating potatoes.
                          <Annotation note="Humour used strategically to deflate the opposing argument.">
                            Nobody is writing op-eds about the Potato Generation.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="Counter-argument acknowledged and then rebutted. This is essential for a balanced, convincing argument.">
                            Of course, there are legitimate concerns.
                          </Annotation>{' '}
                          Social media can amplify anxiety; cyberbullying is real and devastating.
                          But to blame the phone is to
                          <Annotation note="Analogy strengthens the rebuttal by exposing the logical flaw in the opposing argument.">
                            blame the postbox for the poison pen letter
                          </Annotation>
                          .
                        </p>
                        <p>
                          <Annotation note="Strong concluding paragraph that returns to the opening image (circular structure).">
                            So the next time you see a teenager on their phone in a restaurant,
                            resist the urge to tut. Ask them what they are doing. You might be
                            surprised. You might even learn something.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          An accomplished article that demonstrates all the conventions of
                          broadsheet journalism: a compelling headline, a clear subheading, a
                          concrete opening scenario, and a sustained argument with evidence and
                          counter-argument. The tone is confident and assured. The circular
                          structure is satisfying. Full marks: 40/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[0]}
                        points={[
                          'All article conventions present (headline with wordplay, subheading, scenario opening)',
                          'Sustained, confident argument with evidence, counter-argument, and rebuttal',
                          'Rhetorical devices deployed with precision (tricolon, analogy, direct address, humour)',
                          'Circular structure creates a satisfying sense of completeness',
                          'Tone is assured and appropriate for a broadsheet audience',
                          'Every paragraph advances the argument — nothing is filler',
                        ]}
                      />
                    </>
                  ),

                  7: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge grade="Grade 7 (Strong)" color="bg-green-600" />
                        <span className="text-sm text-muted-foreground">33/40</span>
                      </div>
                      <AnswerCard>
                        <h3 className="mt-0 text-lg font-bold text-foreground">
                          <Annotation note="A clear headline that signals the argument, though it lacks the wordplay or double meaning of the grade 9 headline.">
                            Stop Blaming Teenagers for Using Their Phones
                          </Annotation>
                        </h3>
                        <p>
                          <Annotation note="Effective opening with a statistic. However, it is less engaging than the grade 9 scenario-based opening.">
                            According to a recent survey, the average teenager spends four hours a
                            day on their phone. For many adults, this is alarming. But is it really
                            as bad as it sounds?
                          </Annotation>
                        </p>
                        <p>
                          The truth is, phones are not the enemy. Young people use them to
                          <Annotation note="Good use of a list to counter the opposing view. However, the examples are somewhat generic.">
                            stay in touch with friends, research homework, follow the news, and even
                            run small businesses
                          </Annotation>
                          . The idea that all screen time is wasted time is simply outdated.
                        </p>
                        <p>
                          <Annotation note="Counter-argument is acknowledged, which shows balance. However, the rebuttal is less sharp than at grade 9.">
                            Of course, there are risks. Too much social media can affect mental
                            health, and some apps are designed to be addictive. But rather than
                            banning phones, we should be teaching young people how to use them
                            responsibly.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="A clear call to action, though the ending lacks the punchy, memorable quality of the grade 9 close.">
                            Instead of criticising teenagers, perhaps we should be asking ourselves:
                            when was the last time you put your own phone down?
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A well-structured article with a clear argument, evidence, and
                          counter-argument. The tone is appropriate and the rhetorical question
                          ending is effective. To reach grade 9, the student should use a more
                          engaging opening scenario, add a subheading, deploy more varied rhetorical
                          devices, and craft a more memorable headline. Marks: 33/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[1]}
                        points={[
                          'Clear headline and logical structure throughout',
                          'Evidence used to support the argument (statistics, examples)',
                          'Counter-argument acknowledged and rebutted',
                          'Appropriate tone for the audience',
                          'Some rhetorical devices (rhetorical question, list)',
                          'Ending could be more punchy and memorable',
                        ]}
                      />
                    </>
                  ),

                  5: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge grade="Grade 5 (Solid)" color="bg-amber-500" />
                        <span className="text-sm text-muted-foreground">26/40</span>
                      </div>
                      <AnswerCard>
                        <h3 className="mt-0 text-lg font-bold text-foreground">
                          <Annotation note="A basic headline that states the opinion but lacks rhetorical flair or engagement.">
                            Phones Are Not the Problem
                          </Annotation>
                        </h3>
                        <p>
                          <Annotation note="The opening addresses the question directly but is quite flat. It tells the reader the argument rather than drawing them in.">
                            I think that young people do not spend too much time on their phones.
                            Phones are a useful tool and they help us in many ways.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="A valid point but presented as a list without development. Each point could be expanded with evidence or examples.">
                            Firstly, phones help us with our schoolwork because we can look things
                            up. Secondly, they help us stay in touch with friends. Thirdly, they can
                            be used for reading the news.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="Acknowledges the counter-argument, which is good. However, the response to it is weak — 'they should just be more careful' is vague.">
                            Some people say phones are bad for your mental health. This might be
                            true but I think if people are careful they will be fine. They should
                            just be more careful about what they look at.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="The conclusion restates the opening without adding anything new. There is no memorable closing line or call to action.">
                            In conclusion, I think phones are not the problem and people should stop
                            blaming young people for using them.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A clear response that addresses the question and makes relevant points.
                          However, the argument is underdeveloped, the tone is too informal for a
                          broadsheet article, and rhetorical devices are absent. The &ldquo;firstly,
                          secondly, thirdly&rdquo; structure is mechanical. To improve, the student
                          should develop points with evidence, use rhetorical techniques, and match
                          the register to the audience. Marks: 26/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[2]}
                        points={[
                          'Addresses the question with a clear opinion',
                          'Some attempt at structure (introduction, points, conclusion)',
                          'Points are valid but underdeveloped — no evidence or examples',
                          'Register is too informal for a broadsheet audience',
                          'No rhetorical devices (no tricolon, analogy, or direct address)',
                          "Mechanical structure ('firstly, secondly, thirdly') lacks sophistication",
                        ]}
                      />
                    </>
                  ),

                  3: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge grade="Grade 3 (Developing)" color="bg-red-500" />
                        <span className="text-sm text-muted-foreground">16/40</span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="No headline, no subheading — key article conventions are missing entirely.">
                            I dont think young people spend too much time on there phones.
                          </Annotation>{' '}
                          Phones are good because you can talk to people and play games.
                          <Annotation note="No development of the point. Why does being able to 'talk to people' mean they don't spend too much time on phones?">
                            Everyone uses phones not just young people.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="An assertion without any supporting evidence. The piece reads as a series of opinions rather than a structured argument.">
                            I think its unfair to say young people are on there phones too much
                            because adults are on them too.
                          </Annotation>{' '}
                          My mum is always on her phone.
                          <Annotation note="Anecdotal evidence that is too informal for the task. A broadsheet article requires statistics, research, or expert opinion.">
                            So I dont think its just a young people problem.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="Abrupt ending with no conclusion, call to action, or memorable closing. The piece simply stops.">
                            Phones are part of life now and people should just accept it.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          This response shows a basic awareness of the question but does not
                          demonstrate any article conventions (no headline, no subheading, no formal
                          register). The argument is a series of opinions without evidence. Spelling
                          and grammar errors (&ldquo;there&rdquo; for &ldquo;their,&rdquo;
                          &ldquo;dont&rdquo;) are frequent. To improve, the student should include a
                          headline, use paragraphs with topic sentences, and support points with
                          evidence. Marks: 16/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[3]}
                        points={[
                          'No article conventions (no headline, subheading, or formal register)',
                          'Opinions stated without supporting evidence or examples',
                          'No rhetorical devices or persuasive techniques',
                          'Anecdotal evidence too informal for the task',
                          'Spelling and grammar errors throughout',
                          'No clear structure — paragraphs do not develop individual points',
                        ]}
                      />
                    </>
                  ),
                }}
              </GradeTabs>
            </Section>

            {/* ─── SPEECH ──────────────────────────────────────── */}
            <Section id="speech" title="Model Speech">
              <div className="mb-6 rounded-xl border border-border bg-card p-6 shadow-md">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Task</p>
                <p className="font-medium text-foreground">
                  Write a speech to deliver to your year group persuading them that volunteering
                  should be a compulsory part of the school curriculum.
                </p>
              </div>

              <GradeTabs defaultGrade={9} levels={[9, 7]}>
                {{
                  9: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge grade="Grade 9 (Exceptional)" color="bg-primary" />
                        <span className="text-sm text-muted-foreground">38/40</span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Direct address to the audience. Using 'we' establishes rapport.">
                            We have all sat through assemblies where someone tells us to &ldquo;give
                            back to the community.&rdquo;
                          </Annotation>{' '}
                          We nod. We clap. We forget.
                          <Annotation note="Minor sentences in a tricolon create rhythm and humour.">
                            And nothing changes.
                          </Annotation>
                        </p>
                        <p>
                          I am not here to give you another one of those speeches.
                          <Annotation note="Metacommentary — the speaker acknowledges the genre and subverts it.">
                            I am here to argue that volunteering should not be optional &mdash; not
                            because it looks good on a university application, not because adults
                            say so, but because it is the single most effective way of understanding
                            a world that extends beyond these school gates.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="Anecdote used as evidence. Personal stories are more persuasive than statistics in a speech.">
                            Last summer, I spent two weeks at a care home in town.
                          </Annotation>{' '}
                          I did not want to go. My parents made me. For the first three days, I
                          counted the hours. By the end of the first week, I had stopped counting. A
                          woman called Margaret told me about growing up during the war. In two
                          weeks, I learned more about resilience, loss, and joy than I had in five
                          years of PSHE lessons.
                        </p>
                        <p>
                          <Annotation note="Counter-argument addressed directly with a statistic for maximum impact.">
                            Now, I know what some of you are thinking: &ldquo;I already have enough
                            homework.&rdquo;
                          </Annotation>{' '}
                          And that is a fair point. But consider this: a 2024 study found that
                          students who volunteer regularly report higher confidence and lower
                          anxiety. Volunteering does not add to your burden. It
                          <Annotation note="Metaphor that reframes the argument.">
                            lightens it
                          </Annotation>
                          .
                        </p>
                        <p>
                          <Annotation note="Call to action — essential in any speech. The shift from 'I' to 'we' to 'you' creates shared purpose.">
                            So here is what I am asking. Not that you sign up tomorrow. Just that
                            you consider it.
                          </Annotation>{' '}
                          Because the world outside these walls is messy, complicated, and sometimes
                          heartbreaking &mdash; and it needs people who have looked it in the eye
                          and chosen to help anyway.
                          <Annotation note="Powerful final sentence that elevates the argument from practical to moral.">
                            That is not a burden. That is a privilege.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          An engaging, well-structured speech with clear awareness of audience and
                          purpose. The anecdote is specific and moving. The counter-argument is
                          addressed directly. The call to action is measured rather than aggressive.
                          Rhetorical devices are used throughout but never feel forced. Marks:
                          38/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[0]}
                        points={[
                          "Subverts the genre (metacommentary on 'assembly speeches')",
                          'Personal anecdote used as powerful evidence',
                          'Counter-argument addressed directly and rebutted with statistics',
                          'Call to action is measured and persuasive, not aggressive',
                          'Varied rhetorical devices (tricolon, direct address, rhetorical question)',
                          'Final sentence elevates the argument to a moral level',
                        ]}
                      />
                    </>
                  ),

                  7: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge grade="Grade 7 (Strong)" color="bg-green-600" />
                        <span className="text-sm text-muted-foreground">32/40</span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Good direct address that engages the audience. The rhetorical question is effective.">
                            How many of you have ever volunteered? And I don&apos;t mean being
                            forced to pick up litter on a school trip. I mean genuinely choosing to
                            help someone.
                          </Annotation>
                        </p>
                        <p>
                          I believe volunteering should be part of the curriculum because it teaches
                          us things that lessons cannot. When you volunteer, you
                          <Annotation note="Good use of a list, though the points could be developed more. Each item is stated rather than explored.">
                            meet people from different backgrounds, develop empathy, and learn
                            practical skills that employers value
                          </Annotation>
                          .
                        </p>
                        <p>
                          <Annotation note="Personal experience used well, though the detail could be more specific. 'A soup kitchen' is less vivid than naming a person or place.">
                            Last year I helped at a soup kitchen. It was hard work but it changed
                            how I think about homelessness.
                          </Annotation>{' '}
                          Before, I used to walk past people without thinking. Now I understand that
                          anyone can end up in that situation.
                        </p>
                        <p>
                          <Annotation note="Counter-argument acknowledged but the rebuttal could be stronger. 'Only a few hours a week' is vague.">
                            I know some of you will say you don&apos;t have time. But it would only
                            be a few hours a week, and the benefits far outweigh the cost.
                          </Annotation>{' '}
                          So I urge you to think about it seriously. You might surprise yourself.
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A clear, engaging speech with good awareness of audience. The personal
                          experience adds credibility. However, points could be developed more
                          fully, the counter-argument rebuttal is weak, and the ending lacks the
                          power of the grade 9 close. Marks: 32/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[1]}
                        points={[
                          'Good direct address and rhetorical question opening',
                          'Personal experience adds credibility and emotional weight',
                          'Clear points supporting the argument',
                          'Counter-argument acknowledged (though rebuttal could be stronger)',
                          'Appropriate tone for the audience',
                          'Ending could be more memorable and punchy',
                        ]}
                      />
                    </>
                  ),
                }}
              </GradeTabs>
            </Section>

            {/* ─── KEY TECHNIQUES ──────────────────────────────── */}
            <Section id="techniques" title="Key Persuasive Techniques">
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Master these techniques to elevate your transactional writing from competent to
                compelling.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-full rounded-xl border border-border bg-card p-6 shadow-md">
                  <h4 className="mb-4 text-lg font-bold text-foreground">DAFOREST</h4>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'D', desc: 'Direct address' },
                      { label: 'A', desc: 'Alliteration' },
                      { label: 'F', desc: 'Facts & figures' },
                      { label: 'O', desc: 'Opinions (presented as facts)' },
                      { label: 'R', desc: 'Rhetorical questions' },
                      { label: 'E', desc: 'Emotive language' },
                      { label: 'S', desc: 'Statistics' },
                      { label: 'T', desc: 'Tricolon (rule of three)' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 rounded-lg bg-muted p-3"
                      >
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                          {item.label}
                        </span>
                        <span className="pt-1 text-sm text-muted-foreground">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    name: 'Know Your Form',
                    desc: 'Articles need headlines and subheadings. Speeches need direct address and rhetorical questions. Letters need addresses and formal sign-offs. Missing conventions costs marks.',
                  },
                  {
                    name: 'Counter-Argument',
                    desc: "Always acknowledge the other side before rebutting it. This shows maturity and makes your argument more convincing: 'While some may argue... however...'",
                  },
                  {
                    name: 'Tone Matching',
                    desc: 'A letter to a headteacher requires a different tone from a magazine article for teenagers. Always consider who is reading and adjust your register accordingly.',
                  },
                  {
                    name: 'Strategic Structure',
                    desc: 'Open with impact, build with evidence, close with a call to action. Your strongest point should be either first (for immediate impact) or last (for lasting impression).',
                  },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-xl border border-border bg-card p-5 shadow-md"
                  >
                    <h4 className="font-bold text-foreground">{tech.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </>
  )
}
