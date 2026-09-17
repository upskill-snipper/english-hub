# LLM marker fixtures (offline replay cache)

This directory makes the `llm` adapter **reproducible offline in CI with no
network**. Each `*.json` file is a recorded/authored RAW model response, keyed
by:

```
sha256( model · systemPrompt · userMessage · markSchemeId · questionId · caseId )
```

(`evals/adapters/llm-marker.ts → fixtureKey`). The key folds in the full prompt
(which embeds the entire mark scheme), the model id and the case id, so any
change to the prompt, the model or the case invalidates the fixture and the run
fails loudly rather than replaying.

**What that does and does not protect you from.** Until 2026-09-17 this file
claimed a stale cache "can never silently masquerade as a fresh result". It
did exactly that. `EVAL_MODEL` was its own literal, `claude-sonnet-4-20250514`,
retired in June 2026; production moved off it twice and the harness did not. The
key detects a change **to** `EVAL_MODEL` - it cannot detect `EVAL_MODEL` itself
drifting away from what production calls, so every key stayed stable and every
fixture replayed while the figure described a model nobody was using.
`EVAL_MODEL` is now `ANTHROPIC_MODEL` itself (`src/lib/anthropic-client.ts`), so
a production model change - including via the `ANTHROPIC_MODEL` env override -
re-keys every fixture and the offline run fails until they are re-recorded. The
fixtures keyed on the retired model were deleted, not migrated.

## How `llm-marker` uses these

| Mode             | Env                                     | Behaviour                                                                                                                               |
| ---------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Default / CI** | _(none)_                                | Replay from the fixture for each case's key. Missing fixture → **loud failure** (never hits the network). Pure, offline, deterministic. |
| **Live**         | `EVAL_LLM_LIVE=1` + `ANTHROPIC_API_KEY` | Real Anthropic call on `ANTHROPIC_MODEL`. The SDK client is constructed only here.                                                      |
| **Record**       | `EVAL_LLM_RECORD=1` (implies live)      | Persist each live raw response here for future offline replay.                                                                          |

## The shipped fixtures are SYNTHETIC

The `*.json` files committed here have `"source": "synthetic-authored"` and
correspond to the **synthetic** dataset cases only. They exist to prove the LLM
adapter + parsing + grade-derivation pipeline works end-to-end offline. They are
hand-authored, well-formed responses to the production JSON contract - **they do
NOT represent real model output and cannot certify accuracy** (see
`../datasets/REAL-DATA-PROTOCOL.md`). They cover 5 of the 28 synthetic cases, so
`EVAL_ADAPTER=llm` over the whole synthetic dataset stops at the first case with
no fixture. That is the intended loud failure, not a regression: the missing
responses have to be authored or recorded, never assumed.

## Regenerating the synthetic fixtures

If the prompt builder, a referenced mark scheme or `ANTHROPIC_MODEL` changes,
the keys change and the shipped fixtures must be re-emitted (their _content_ is
stable; the filename/key and the recorded `model` field track the prompt and the
model). Delete the old `*.json` first - a re-seed writes new keys and leaves the
superseded files behind:

```bash
# from D:\Coding\english-hub
node_modules/.bin/vitest run --config evals/fixtures/seed.config.ts --disableConsoleIntercept
```

`evals/fixtures/seed-synthetic-fixtures.ts` rebuilds the production prompt for a
fixed list of synthetic cases and writes a correctly-keyed, hand-authored
response for each. It performs **no network I/O**.

## Real-data fixtures

Prefer **not** to record fixtures from real child scripts (they would embed
minors' personal data in the repo working tree — forbidden; see
`../datasets/REAL-DATA-PROTOCOL.md` §3). Real evaluations should run live
(`EVAL_LLM_LIVE=1`) against the secure, out-of-repo dataset and report directly.
