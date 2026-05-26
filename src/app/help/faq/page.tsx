import { redirect } from 'next/navigation'

/**
 * /help/faq now redirects to /faqs - the canonical FAQ page.
 * Keeping the route alive so existing bookmarks and links don't 404.
 */
export default function HelpFaqRedirect() {
  redirect('/faqs')
}
