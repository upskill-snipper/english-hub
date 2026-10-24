/** One key quotation as the quests read it, whatever shape its page groups it in. */
export interface FlatKeyQuote {
  /** The quotation exactly as the page prints it. */
  quote: string
  /** Who says it, where the page says. */
  speaker?: string
  /** Where in the text: the page's act and scene, chapter or stave field. */
  where: string
  analysis: string
}
