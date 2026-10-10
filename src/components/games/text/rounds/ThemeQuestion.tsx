'use client'

import type { ThemeItem } from '@/lib/games/text-games/types'

import { En, PanelArt } from '../parts'
import { ChoiceQuestion, type QuestionProps } from './shared'

/**
 * Theme match: a moment from the text, with its comic panel where there is
 * one, and a theme the guide says it carries. The feedback lists every theme
 * the guide gives the moment, since most carry more than one.
 */
export function ThemeQuestion(props: QuestionProps) {
  const { dealt, art, t } = props
  const item = dealt.item as ThemeItem
  const panel = item.moment.panel ? art.panels[item.moment.panel] : undefined
  return (
    <ChoiceQuestion
      props={props}
      question={t('text_games.q.theme')}
      prompt={
        <div className="space-y-3">
          {panel && <PanelArt panel={panel} />}
          <div className="rounded-2xl border border-border/60 bg-card p-4 sm:p-5">
            <En as="p" className="text-sm font-medium uppercase tracking-wide text-primary">
              {item.moment.where}
            </En>
            <En as="p" className="mt-1 font-heading text-xl font-semibold text-foreground">
              {item.moment.title}
            </En>
          </div>
        </div>
      }
      after={
        <div>
          <p className="text-sm font-medium text-foreground">{t('text_games.fb.also')}:</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {item.carries.map((theme) => (
              <li
                key={theme}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25 dark:text-foreground"
              >
                <En>{theme}</En>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  )
}
