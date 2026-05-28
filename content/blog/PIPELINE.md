# Automated blog pipeline

A SAFE, gated pipeline that drafts one GCSE/IGCSE English post every 12 hours to
grow organic consumer traffic, **without** publishing thin or duplicate content
(which Google's scaled-content-abuse systems penalise).

Nothing goes live automatically. Generated posts land as **GitHub Pull Requests**
for a human to review and merge.

## How it works

1. Vercel Cron calls `GET /api/cron/blog-generate` every 12 hours
   (`vercel.json` -> `crons`, schedule `0 */12 * * *`).
2. The route authenticates with `CRON_SECRET` (same Bearer scheme as the other
   `/api/cron/*` routes).
3. It loads `content/blog/_queue.json` and picks the first topic with
   `status: "pending"`. If there are none, it returns `200` and does nothing.
4. It calls Claude (`@anthropic-ai/sdk`, shared `getAnthropicClient()`) with a
   strict house-style prompt: British English, no em dashes, 1500-2200 words,
   `##` section headings, exam-board accuracy, the topic's required internal
   links, and complete frontmatter (every field `getBlogPost` validates, plus a
   `cover` `/api/og` URL).
5. It runs the **same quality checks** as the prebuild gate
   (`scripts/check-blog-quality.mjs`) in-process. If the draft fails (too short,
   too few internal links, a duplicate/near-duplicate, a missing required link,
   an em dash, or missing frontmatter) it does **not** publish and marks the
   topic `needs-review`.
6. On pass, it opens a PR: branch `blog/auto/<slug>`, commits the `.mdx` and the
   queue update (topic -> `in-review`), and opens the PR for human approval.

## The quality gate (`scripts/check-blog-quality.mjs`)

Runs in `prebuild` (after the placeholder gate), so CI/deploy fails if any
published post in `content/blog/*.mdx` is under 1200 words, shares an exact
title/description with another post, is a title+description near-duplicate
(Jaccard > 0.8), has fewer than two in-body internal links matching
`/(revision|resources|practice|igcse|courses)/`, or is missing a required
frontmatter field. Run it manually with `npm run blog:quality-check`.

## The topic queue (`content/blog/_queue.json`)

An array of vetted consumer topics. Each entry:

```json
{
  "targetQuery": "A Christmas Carol themes GCSE revision",
  "intent": "informational",
  "audience": "student",
  "educationalLevel": "GCSE",
  "examBoard": "AQA",
  "internalLinks": ["/revision/texts/a-christmas-carol/themes", "..."],
  "status": "pending"
}
```

Add new rows with `status: "pending"`. Choose consumer (student/parent) queries
that are not already covered by an existing post, and list 2-4 real internal-link
target URLs. `status` values: `pending` (eligible), `in-review` (PR opened),
`needs-review` (generation/quality failure, needs a human).

## Required environment variables

All are read **inside the route handler**, so a missing variable yields a clear
`500` and never crashes the build/import.

| Variable                             | Purpose                                                   |
| ------------------------------------ | --------------------------------------------------------- |
| `CRON_SECRET`                        | Bearer secret Vercel Cron sends; authenticates the route. |
| `ANTHROPIC_API_KEY`                  | Claude API key (via `getAnthropicClient()`).              |
| `GITHUB_TOKEN` (or `BLOG_BOT_TOKEN`) | Token with `repo` scope to push a branch and open a PR.   |
| `BLOG_REPO_OWNER`                    | GitHub owner/org of this repo.                            |
| `BLOG_REPO_NAME`                     | GitHub repo name.                                         |
| `BLOG_REPO_BASE_BRANCH`              | Optional PR base branch (default `main`).                 |

## Enable / disable

- **Enable:** set the env vars above in the Vercel project. The cron entry in
  `vercel.json` is already present.
- **Disable:** remove the `/api/cron/blog-generate` entry from `vercel.json`
  (or unset `CRON_SECRET` / the GitHub token, which makes the route a graceful
  no-op rather than publishing anything).

**Posts always land as PRs for human approval; the pipeline never commits to the
production branch directly.**
