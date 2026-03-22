import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-md w-full text-center space-y-4 p-8">
        <div className="text-6xl font-bold text-primary">404</div>
        <h2 className="text-xl font-bold text-foreground">Page not found</h2>
        <p className="text-muted-foreground">The page you are looking for does not exist or has been moved.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center px-5 py-2.5 border border-border text-foreground font-medium rounded-lg hover:bg-accent transition-colors">Home</Link>
          <Link href="/courses" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors">Browse Courses</Link>
        </div>
      </div>
    </div>
  )
}
