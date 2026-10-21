import { Chapter, ChapterLinks, ChapterText } from './Chapter'
import type { ChapterContext } from './ChapterRead'
import { Shot } from './Shot'
import { TextLink } from './TextLink'
import { resolveCopy } from './copy'

/**
 * Chapter III: the study guide hub. The laptop crop starts to the right of the
 * guide's sidebar, and the phone capture is cropped to the eight-tile grid.
 */
export async function ChapterRevise({ ctx }: { ctx: ChapterContext }) {
  const c = await resolveCopy({
    h2: 'home.story.revise.h2',
    p1: 'home.story.revise.p1',
    p2: 'home.story.revise.p2',
    link: 'home.story.revise.link',
    shotAlt: 'home.story.revise.shot_alt',
    caption: 'home.story.revise.caption',
    phoneAlt: 'home.story.revise.phone_alt',
  })

  return (
    <Chapter
      id="revise"
      numeral={ctx.numeral}
      eyebrow={ctx.eyebrow}
      heading={c.h2}
      ink
      media={
        <>
          <Shot
            className="hidden md:grid"
            src="/home/macbeth-guide-desktop.png"
            iw={1440}
            ih={900}
            x={388}
            y={72}
            w={952}
            h={612}
            alt={c.shotAlt}
            caption={c.caption}
            onInk
          />
          <Shot
            phone
            className="justify-self-center md:hidden"
            src="/home/macbeth-guide-phone.png"
            iw={390}
            ih={844}
            x={0}
            y={76}
            w={390}
            h={640}
            alt={c.phoneAlt}
            caption={c.caption}
            onInk
          />
        </>
      }
    >
      <ChapterText ink>{c.p1}</ChapterText>
      <ChapterText ink>{c.p2}</ChapterText>
      <ChapterLinks>
        <TextLink href="/revision/texts/macbeth" onInk>
          {c.link}
        </TextLink>
        <TextLink href={ctx.library.href} onInk muted>
          {ctx.library.label}
        </TextLink>
      </ChapterLinks>
    </Chapter>
  )
}
