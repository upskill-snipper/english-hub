# Marking Engine

LLM-powered marking of GCSE English essays against real AQA mark schemes.
This is a key differentiator for The English Hub: feedback is grounded in the
exact AOs and band descriptors from the AQA 8700 (Language) and 8702
(Literature) specifications, not in generic AI opinions.

## Files

| File | Purpose |
| --- | --- |
| `mark-schemes/types.ts` | TypeScript interfaces (`MarkScheme`, `AssessmentObjective`, `BandDescriptor`, `MarkingResult` …) |
| `mark-schemes/aqa-lit-paper1.ts` | AQA 8702 Paper 1 — Shakespeare + 19th-century novel |
| `mark-schemes/aqa-lang-paper1.ts` | AQA 8700 Paper 1 — Creative reading and writing |
| `mark-schemes/aqa-lang-paper2.ts` | AQA 8700 Paper 2 — Writers' viewpoints and perspectives |
| `mark-schemes/index.ts` | Central registry + `getMarkScheme(id)` / `listMarkSchemeIds()` |
| `mark-scheme-parser.ts` | Parse raw mark scheme text (e.g. copy-paste from a PDF) into `MarkScheme` |
| `prompt-builder.ts` | Build Claude/OpenAI system + user prompts from a scheme + essay |
| `grade-predictor.ts` | Map AO scores → indicative GCSE grade 1-9 using AQA boundary averages |
| `feedback-generator.ts` | Parse the model's JSON into a structured `MarkingResult` |

HTTP surface:

| Route | Purpose |
| --- | --- |
| `POST /api/mark` | Synchronous marking. Returns `{ result, remaining }`. |
| `POST /api/mark/stream` | SSE streaming version. Emits `token`, `done`, `error` events. |

## Integration Checklist

Before wiring the engine into the UI (`src/app/marking/*`), confirm:

- [ ] `ANTHROPIC_API_KEY` is set in the deployment environment (Vercel, local `.env.local`).
- [x] `@anthropic-ai/sdk` is installed (`^0.80.0` in `package.json`).
- [ ] Supabase auth is configured — the routes depend on `createServerSupabaseClient()`.
- [ ] The calling user has an active Pro subscription (checked via `hasActiveSubscription`).
- [ ] Minor users have parental AI consent (checked via `checkMinorAIConsent`).
- [ ] Upstash Redis (`UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`) is configured for rate limiting. In local dev the in-memory fallback will kick in automatically.
- [ ] The client UI submits `markSchemeId` matching one of the ids in `MARK_SCHEMES` (`aqa-lit-paper1`, `aqa-lang-paper1`, `aqa-lang-paper2`).

## Request Shape

```json
POST /api/mark
Content-Type: application/json

{
  "markSchemeId": "aqa-lang-paper1",
  "questionId": "Q2",
  "questionText": "Look in detail at lines 12-22. How does the writer use language here to describe the setting?",
  "essay": "The writer begins by ... [student's full response]",
  "studiedText": "A Christmas Carol"
}
```

Response (200):

```json
{
  "result": {
    "markSchemeId": "aqa-lang-paper1",
    "questionId": "Q2",
    "totalMarks": 6,
    "maxMarks": 8,
    "predictedGrade": "6",
    "gradeBand": "Grade 6-7",
    "aoScores": [
      {
        "id": "AO2",
        "label": "AO2 — Analyse language",
        "marks": 6,
        "maxMarks": 8,
        "band": "Level 3",
        "justification": "Clear explanation of effects with accurate terminology.",
        "evidence": ["...some quote from the essay..."]
      }
    ],
    "strengths": [ { "point": "...", "quote": "..." } ],
    "improvements": [ { "point": "...", "suggestion": "..." } ],
    "nextStepsToNextGrade": [ "..." ],
    "summary": "This response sits at a predicted Grade 6 ..."
  },
  "remaining": 9
}
```

## Streaming (`/api/mark/stream`)

The streaming route emits Server-Sent Events (`Content-Type: text/event-stream`):

```
data: {"type":"token","text":"{\n"}
data: {"type":"token","text":"  \"aoScores\": ["}
...
data: {"type":"done","result":{ ... },"remaining":9}
```

On error the stream emits a final `{"type":"error","message":"..."}` event and
closes the connection. The `done` event is authoritative — clients should not
attempt to parse the incremental tokens themselves.

## Rate Limits

- **10 essays per user per day** (shared between `/api/mark` and `/api/mark/stream`).
- Key: `mark:<userId>`.
- Backed by Upstash Redis via `src/lib/rate-limit.ts`.
- On rate-limit exhaustion the routes respond `429` with a `Retry-After` header.

## Safety Rails

The prompt builder hard-codes several safety rules the model must obey:

1. **No rewrites.** The model must only give guidance; it is forbidden from
   producing replacement paragraphs or model answers. `feedback-generator.ts`
   additionally truncates any improvement suggestion longer than 250 characters
   as a defence-in-depth measure.
2. **Submission gate.** If the "essay" is not a genuine student response, the
   model returns `{"error":"INVALID_SUBMISSION"}` and the route responds `400`.
3. **Off-topic gate.** If the submission is not GCSE English, the model
   returns `{"error":"OFF_TOPIC"}` and the route responds `400`.
4. **Prompt injection.** The system prompt instructs the model to ignore any
   instructions embedded in the student's essay.
5. **Input truncation.** Essays are truncated to 30,000 characters and question
   text to 2,000 characters before being passed to the model.

## Extending the Engine

### Add a new mark scheme
1. Create `mark-schemes/<id>.ts` exporting a `MarkScheme` constant.
2. Register it in `mark-schemes/index.ts` inside `MARK_SCHEMES`.
3. Add any new question types to the UI picker.

### Parse a scheme from raw text
```ts
import { parseMarkScheme } from "@/lib/marking/mark-scheme-parser"

const { scheme, errors } = parseMarkScheme({
  id: "edexcel-lit-paper1",
  board: "Edexcel",
  subject: "English Literature",
  paper: "Paper 1",
  title: "Shakespeare and Post-1914 Literature",
  totalMarks: 80,
  durationMinutes: 105,
  rawText: "...pasted mark scheme text...",
})
```

The parser looks for `AO<n>` headings and `Level <n>` / `Band <n>` rows with
min-max ranges. It is forgiving of whitespace and inconsistent punctuation but
you should always inspect `errors` before trusting the output.

### Change the predicted grade thresholds
Edit `grade-predictor.ts` → `AQA_ENGLISH_THRESHOLDS`. The values are a 5-year
rolling average of the published AQA boundaries. If you add an Edexcel or OCR
scheme, consider adding a board-specific threshold table.

## Known TODOs

- [x] ~~Confirm `@anthropic-ai/sdk` is listed in `package.json`.~~ Done (`^0.80.0`).
- [ ] [PHASE:content] Add Edexcel and OCR mark scheme packs.
- [ ] [PHASE:db-integration] Persist marking results to Supabase so students can revisit past
      feedback (new table, out of scope for this engine).
- [ ] [PHASE:ui] Wire `/api/mark/stream` to the UI in `src/app/marking/*` once that page
      is available.
