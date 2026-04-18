import { Star, Quote } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  quote: string
  badge: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Head of English, Oakfield Academy",
    quote:
      "We piloted English Hub with Year 10 and the improvement in essay writing was remarkable within just 6 weeks. The analytics dashboard means I can identify struggling students before they fall behind, not after.",
    badge: "Secondary Academy",
    stars: 5,
  },
  {
    name: "Mr. James Patterson",
    role: "Deputy Principal, Al Rayyan International School",
    quote:
      "Setting up the whole school took under an hour. We uploaded our student list, shared the login spreadsheet, and by the next morning 340 students were active. The teacher lesson plan library alone saves my department 3 hours per week.",
    badge: "International School",
    stars: 5,
  },
  {
    name: "Ms. Priya Nair",
    role: "Head of Sixth Form, Greenfield College",
    quote:
      "The IAL content is exceptional. Our A-level students finally have structured, exam-board-specific preparation. The AI feedback on essays is as good as teacher marking for first drafts.",
    badge: "Sixth Form College",
    stars: 5,
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-clay-600"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-700/60 bg-slate-800/50 p-7 shadow-lg shadow-black/20 transition-colors duration-200 hover:border-slate-600/80 hover:bg-slate-800/70">
      {/* Top row: badge + stars */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
          {testimonial.badge}
        </span>
        <StarRow count={testimonial.stars} />
      </div>

      {/* Quote */}
      <div className="relative mb-6 flex-1">
        <Quote
          className="absolute -left-1 -top-1 h-8 w-8 text-emerald-500/25"
          aria-hidden="true"
        />
        <blockquote className="relative pl-6 text-slate-300 text-sm leading-relaxed">
          <span className="text-2xl font-serif leading-none text-emerald-400/60 select-none mr-0.5">&ldquo;</span>
          {testimonial.quote}
          <span className="text-2xl font-serif leading-none text-emerald-400/60 select-none ml-0.5">&rdquo;</span>
        </blockquote>
      </div>

      {/* Author */}
      <div className="border-t border-slate-700/50 pt-5">
        <p className="text-sm font-semibold text-white">{testimonial.name}</p>
        <p className="mt-0.5 text-xs text-slate-400">{testimonial.role}</p>
      </div>
    </div>
  )
}

export function SchoolTestimonials() {
  return (
    <section className="w-full py-12 px-4">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Star className="h-5 w-5 fill-amber-400 text-clay-600" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Trusted by Schools
          </span>
        </div>
        <h2 className="mb-3 text-3xl font-bold text-white">
          What School Leaders Say
        </h2>
        <p className="text-slate-400 text-base">
          Hear from the heads and deputies who have seen English Hub in action.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </section>
  )
}
