import { Chapter, ChapterLinks, ChapterText } from './Chapter'
import type { ChapterContext } from './ChapterRead'
import { Shot } from './Shot'
import { TextLink } from './TextLink'
import { resolveCopy } from './copy'

/**
 * Chapter II: the quest. The laptop frame is the quest map, cropped so the
 * progress card and "Start: Part 1" stay whole, and the phone frame is the
 * first level beside it, never over it; one caption serves the pair. Below
 * 768px only the phone frame shows, with its own caption.
 *
 * `questHref` is textGamesHref('macbeth'), asked of the games themselves, so
 * this chapter cannot link to a quest that does not exist. Its second link is
 * the library, as every chapter's is: the quest index is one step from the
 * games band above the story.
 */
export async function ChapterPlay({ ctx, questHref }: { ctx: ChapterContext; questHref: string }) {
  const c = await resolveCopy({
    h2: 'home.story.play.h2',
    p1: 'home.story.play.p1',
    p2: 'home.story.play.p2',
    link: 'home.story.play.link',
    shotAlt: 'home.story.play.shot_alt',
    phoneAlt: 'home.story.play.phone_alt',
    caption: 'home.story.play.caption',
    phoneCaption: 'home.story.play.phone_caption',
  })

  return (
    <Chapter
      id="play"
      numeral={ctx.numeral}
      eyebrow={ctx.eyebrow}
      heading={c.h2}
      flip
      media={
        <figure className="m-0 grid gap-2.5">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,220px)] md:items-end">
            <Shot
              className="hidden md:grid"
              src="/home/quest-macbeth-desktop.png"
              iw={1440}
              ih={900}
              x={344}
              y={120}
              w={752}
              h={660}
              alt={c.shotAlt}
            />
            <Shot
              phone
              className="justify-self-center md:justify-self-end"
              src="/home/quest-macbeth-level-phone.png"
              iw={390}
              ih={844}
              x={0}
              y={0}
              w={390}
              h={680}
              alt={c.phoneAlt}
            />
          </div>
          <figcaption className="font-mono text-xs tracking-[0.02em] text-muted-foreground">
            <span className="hidden md:inline">{c.caption}</span>
            <span className="md:hidden">{c.phoneCaption}</span>
          </figcaption>
        </figure>
      }
    >
      <ChapterText>{c.p1}</ChapterText>
      <ChapterText>{c.p2}</ChapterText>
      <ChapterLinks>
        <TextLink href={questHref}>{c.link}</TextLink>
        <TextLink href={ctx.library.href} muted>
          {ctx.library.label}
        </TextLink>
      </ChapterLinks>
    </Chapter>
  )
}
