import { buildTextSearchIndex } from '@/lib/search/text-search-index'
import { t } from '@/lib/i18n/t'
import { TextSearch, type TextSearchCopy } from './text-search'

/**
 * The text search, ready to place: resolves its copy in the reader's language
 * and builds the index on the server, so the browser receives plain data and
 * none of the set-text machinery.
 */
export async function TextSearchBox({
  size,
  className,
}: {
  size?: 'hero' | 'default'
  className?: string
}) {
  const copy: TextSearchCopy = {
    label: await t('search.texts.label'),
    placeholder: await t('search.texts.placeholder'),
    none: await t('search.texts.none'),
    noneHint: await t('search.texts.none_hint'),
    browseAll: await t('search.texts.browse_all'),
    countOne: await t('search.texts.count_one'),
    countOther: await t('search.texts.count_other'),
    more: await t('search.texts.more'),
    go: await t('search.texts.go'),
    statusFull: await t('shelf.status.full'),
    statusNone: await t('shelf.status.none'),
  }

  return <TextSearch index={buildTextSearchIndex()} copy={copy} size={size} className={className} />
}
