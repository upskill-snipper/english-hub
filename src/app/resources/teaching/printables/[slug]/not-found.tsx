import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function PrintableNotFound() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        Printable not found
      </h1>
      <p className="mt-4 text-base text-muted-foreground leading-relaxed">
        The printable you are looking for is not available, or hasn&apos;t been published yet.
        Browse the full library to find another resource.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/resources/teaching/printables"
          className={buttonVariants({ variant: 'default' })}
        >
          Back to printables
        </Link>
        <Link href="/resources/teaching" className={buttonVariants({ variant: 'outline' })}>
          Teaching resources
        </Link>
      </div>
    </main>
  )
}
