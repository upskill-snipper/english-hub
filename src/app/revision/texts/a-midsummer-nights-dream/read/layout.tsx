import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Double quotes, because the play's name carries an apostrophe. Written as
  // single quotes these two literals closed early and the file did not parse:
  // that was deliberate on the agent that produced the rewrite, which left the
  // quoting wrong rather than pre-escaping it, so tsc would say so loudly
  // instead of a stray backslash reaching production the way it already has on
  // /revision/texts/of-mice-and-men/context.
  title: "Read A Midsummer Night's Dream Online, Free",
  description:
    "Read A Midsummer Night's Dream by William Shakespeare in full, free. The complete public-domain play, all nine scenes, in a clean reader.",
  alternates: { canonical: '/revision/texts/a-midsummer-nights-dream/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
