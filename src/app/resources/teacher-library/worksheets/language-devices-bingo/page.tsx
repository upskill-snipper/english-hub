import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Language Devices Bingo — Worksheet",
  description:
    "A printable language devices bingo activity. 24 devices with definitions for a 5-minute starter or recap.",
  alternates: {
    canonical:
      "https://theenglishhub.app/resources/teacher-library/worksheets/language-devices-bingo",
  },
};

const DEVICES: { term: string; definition: string }[] = [
  { term: "Simile", definition: "A comparison using 'like' or 'as'." },
  { term: "Metaphor", definition: "A direct comparison saying one thing is another." },
  { term: "Personification", definition: "Giving human qualities to non-human things." },
  { term: "Alliteration", definition: "Repetition of the same consonant sound at the start of words." },
  { term: "Onomatopoeia", definition: "A word that imitates the sound it represents." },
  { term: "Hyperbole", definition: "A deliberate, dramatic exaggeration." },
  { term: "Oxymoron", definition: "Two contradictory words placed together." },
  { term: "Sibilance", definition: "Repeated 's' or 'sh' sounds for a hissing effect." },
  { term: "Assonance", definition: "Repetition of vowel sounds within words." },
  { term: "Pathetic fallacy", definition: "Weather or nature reflecting human emotion." },
  { term: "Juxtaposition", definition: "Placing two opposing ideas side by side." },
  { term: "Symbolism", definition: "Using an object to represent a bigger idea." },
  { term: "Imagery", definition: "Language that creates a picture in the mind." },
  { term: "Irony", definition: "A gap between what is said and what is meant." },
  { term: "Euphemism", definition: "A softer word for something unpleasant." },
  { term: "Rhetorical question", definition: "A question asked for effect, not an answer." },
  { term: "Repetition", definition: "Deliberate repeating of a word or phrase." },
  { term: "Enjambment", definition: "A line of poetry that runs on without a pause." },
  { term: "Caesura", definition: "A deliberate pause in the middle of a line." },
  { term: "Foreshadowing", definition: "A hint of something that will happen later." },
  { term: "Motif", definition: "A recurring image or idea in a text." },
  { term: "Anaphora", definition: "Repetition at the start of successive lines." },
  { term: "Zoomorphism", definition: "Giving animal qualities to humans or objects." },
  { term: "Tricolon", definition: "A list of three for emphasis." },
];

export default function LanguageDevicesBingoWorksheet() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/resources/teacher-library"
              className="hover:text-primary"
            >
              Teacher Library
            </Link>
            <span>/</span>
            <Link
              href="/resources/teacher-library/worksheets"
              className="hover:text-primary"
            >
              Worksheets
            </Link>
            <span>/</span>
            <span className="text-foreground">Language Devices Bingo</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
              For Teachers
            </span>
            <span className="inline-flex items-center rounded-full bg-success-50 px-3 py-1 text-xs font-semibold text-success-700 ring-1 ring-inset ring-success-200">
              Worksheet
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
            Language Devices Bingo
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            A fast, print-and-play bingo activity with 24 essential language
            devices. Use as a 5-minute starter, a recap at the end of a
            unit, or a homework quiz.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Year Group
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                KS3–KS4
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Duration
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                5–10 minutes
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Format
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                1 side A4
              </div>
            </div>
          </div>

          {/* PDF export pending: needs server-side PDF generation route */}
          <div className="mt-6">
            <Button variant="default" size="lg">
              Download as PDF
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">
              PDF export coming soon
            </p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            How to Play
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-foreground">
            <li>
              Give each student (or pair) a bingo card with nine of the 24
              devices (printable template on the PDF).
            </li>
            <li>
              Read out the definitions in random order. Students tick off
              the device if they have it.
            </li>
            <li>
              First to get three in a row shouts BINGO! First to tick off
              all nine wins the full house.
            </li>
            <li>
              Quick-fire recap at the end: ask three students to give an
              example from the set text for one of the devices on their
              card.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            The 24 Devices
          </h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Device</th>
                  <th className="px-4 py-3">Definition</th>
                </tr>
              </thead>
              <tbody>
                {DEVICES.map((d) => (
                  <tr
                    key={d.term}
                    className="border-t border-border text-foreground"
                  >
                    <td className="px-4 py-3 font-semibold">{d.term}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {d.definition}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Differentiation Ideas
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Use only 12 simpler devices for KS3</li>
                <li>• Provide the full definitions glossary on the desk</li>
                <li>• Pair students so they can discuss before ticking</li>
                <li>• Use visuals on the card instead of just words</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Stretch</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>
                  • Ask winners to give an original example of the device
                </li>
                <li>
                  • Add rarer devices (polysyndeton, asyndeton, litotes)
                </li>
                <li>
                  • Run a second round where students write the
                  definitions themselves
                </li>
                <li>
                  • Link each device to a quotation from the current text
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Use in Classroom — Tips
          </h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>
              <strong>Pre-cut cards:</strong> Cut the bingo cards in advance.
              It saves valuable lesson time.
            </li>
            <li>
              <strong>Reuse cards:</strong> Laminate for reuse across
              classes.
            </li>
            <li>
              <strong>Prize, not trinket:</strong> The fastest way to get
              engagement is a tiny token prize — a stamp or a house point.
            </li>
            <li>
              <strong>Follow-up task:</strong> Winners write a
              four-sentence paragraph using three of the devices from
              their card. Keeps stretch going.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
