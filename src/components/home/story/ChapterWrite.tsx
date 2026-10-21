import { Chapter, ChapterLinks, ChapterText } from './Chapter'
import type { ChapterContext } from './ChapterRead'
import { PrimaryCta } from './PrimaryCta'
import { Shot } from './Shot'
import { TextLink } from './TextLink'
import { resolveCopy } from './copy'

/**
 * Chapter IV: AI marking, the paid part of the product, introduced in the
 * permitted words and nothing else. This is where the primary button returns,
 * because it is where a visitor learns what the trial is for; "Send an essay
 * for marking" is a quiet text link beside it.
 *
 * Both crops begin below the live form's subline, which promises a "predicted
 * grade" the fact pack does not allow on this page.
 */
export async function ChapterWrite({ ctx }: { ctx: ChapterContext }) {
  const c = await resolveCopy({
    h2: 'home.story.write.h2',
    p1: 'home.story.write.p1',
    p2: 'home.story.write.p2',
    link: 'home.story.write.link',
    searchAgain: 'home.story.search_again',
    shotAlt: 'home.story.write.shot_alt',
    caption: 'home.story.write.caption',
    phoneAlt: 'home.story.write.phone_alt',
  })

  return (
    <Chapter
      id="write"
      numeral={ctx.numeral}
      eyebrow={ctx.eyebrow}
      heading={c.h2}
      flip
      media={
        <>
          <Shot
            className="hidden md:grid"
            src="/home/marking-submit-desktop.png"
            iw={1440}
            ih={900}
            x={352}
            y={245}
            w={736}
            h={655}
            alt={c.shotAlt}
            caption={c.caption}
          />
          <Shot
            phone
            className="justify-self-center md:hidden"
            src="/home/marking-submit-phone.png"
            iw={390}
            ih={844}
            x={0}
            y={300}
            w={390}
            h={544}
            alt={c.phoneAlt}
            caption={c.caption}
          />
        </>
      }
    >
      <ChapterText>{c.p1}</ChapterText>
      <ChapterText>{c.p2}</ChapterText>
      <PrimaryCta className="mt-1" />
      <ChapterLinks>
        <TextLink href="/marking/submit" muted>
          {c.link}
        </TextLink>
        <TextLink href="#find-your-text" muted>
          {c.searchAgain}
        </TextLink>
      </ChapterLinks>
    </Chapter>
  )
}
