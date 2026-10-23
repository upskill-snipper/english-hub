import { Chapter, ChapterLinks, ChapterText } from './Chapter'
import type { ChapterContext } from './ChapterRead'
import { Shot } from './Shot'
import { TextLink } from './TextLink'
import { resolveCopy } from './copy'

/**
 * Chapter V: the mock papers. One laptop crop of the Exam Papers list, which
 * begins below the live page's "in your board's format, with mark schemes"
 * subline and the list's own subline, and takes in both paper cards to their
 * titles and board tags. The capture is 1440 by 900 and ends the cards at their
 * titles, so their lower halves are not in the asset: a taller capture of the
 * mock page would be needed to show each card whole. On a phone, the phone
 * capture in a phone frame, cropped from the How It Works button down to the
 * Exam Papers heading, which keeps the greyed "coming soon" button out of frame.
 * The phone capture ends at 844 pixels, so the cards are not in it at all.
 */
export async function ChapterSit({ ctx }: { ctx: ChapterContext }) {
  const c = await resolveCopy({
    h2: 'home.story.sit.h2',
    p1: 'home.story.sit.p1',
    link: 'home.story.sit.link',
    shotAlt: 'home.story.sit.shot_alt',
    caption: 'home.story.sit.caption',
    phoneAlt: 'home.story.sit.phone_alt',
    phoneCaption: 'home.story.sit.phone_caption',
  })

  return (
    <Chapter
      id="sit"
      numeral={ctx.numeral}
      eyebrow={ctx.eyebrow}
      heading={c.h2}
      ink
      media={
        <>
          <Shot
            className="hidden md:grid"
            src="/home/mock-exams-desktop.png"
            iw={1440}
            ih={900}
            x={150}
            y={690}
            w={1140}
            h={210}
            alt={c.shotAlt}
            caption={c.caption}
            onInk
          />
          <Shot
            phone
            className="justify-self-center md:hidden"
            src="/home/mock-exams-phone.png"
            iw={390}
            ih={844}
            x={0}
            y={628}
            w={390}
            h={216}
            alt={c.phoneAlt}
            caption={c.phoneCaption}
            onInk
          />
        </>
      }
    >
      <ChapterText ink>{c.p1}</ChapterText>
      <ChapterLinks>
        <TextLink href="/mock-exams" onInk>
          {c.link}
        </TextLink>
        <TextLink href={ctx.library.href} onInk muted>
          {ctx.library.label}
        </TextLink>
      </ChapterLinks>
    </Chapter>
  )
}
