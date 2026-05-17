# LLM marker fixtures (offline replay cache)

This directory makes the `llm` adapter **reproducible offline in CI with no
network**. Each `*.json` file is a recorded/authored RAW model response, keyed
by:

```
sha256( model · systemPrompt · userMessage · markSchemeId · questionId · caseId )
```

(`evals/adapters/llm-marker.ts → fixtureKey`). The key folds in the full prompt
(which embeds the entire mark scheme), the pinned model literal and the case id,
so **any** change to the prompt, model or case invalidates the fixture — a stale
cache can never silently masquerade as a fresh result; the run fails loudly
instead.

## How `llm-marker` uses these

| Mode             | Env                                     | Behaviour                                                                                                                               |
| ---------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Default / CI** | _(none)_                                | Replay from the fixture for each case's key. Missing fixture → **loud failure** (never hits the network). Pure, offline, deterministic. |
| **Live**         | `EVAL_LLM_LIVE=1` + `ANTHROPIC_API_KEY` | Real Anthropic call (`claude-sonnet-4-20250514`). SDK is dynamically imported only here.                                                |
| **Record**       | `EVAL_LLM_RECORD=1` (implies live)      | Persist each live raw response here for future offline replay.                                                                          |

## The shipped fixtures are SYNTHETIC

The `*.json` files committed here have `"source": "synthetic-authored"` and
correspond to the **synthetic** dataset cases only. They exist to prove the LLM
adapter + parsing + grade-derivation pipeline works end-to-end offline. They are
hand-authored, well-formed responses to the production JSON contract — **they do
NOT represent real `claude-sonnet-4-20250514` output and cannot certify
accuracy** (see `../datasets/REAL-DATA-PROTOCOL.md`).

## Regenerating the synthetic fixtures

If the prompt builder or a referenced mark scheme changes, the keys change and
the shipped fixtures must be re-emitted (their _content_ is stable; only the
filename/key tracks the prompt):

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
