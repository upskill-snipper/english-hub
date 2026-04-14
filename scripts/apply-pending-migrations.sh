#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────────────
# apply-pending-migrations.sh
#
# Applies the 7 pending database migrations from supabase/migrations-pending/
# in the correct order. Designed to be safe, idempotent, and auditable.
#
# Usage:
#   ./scripts/apply-pending-migrations.sh                    # dry-run (default)
#   ./scripts/apply-pending-migrations.sh --apply            # apply all pending
#   ./scripts/apply-pending-migrations.sh --apply --one 003  # apply only 003
#   ./scripts/apply-pending-migrations.sh --show 004         # show SQL for 004
#
# Prerequisites:
#   - psql CLI installed and on PATH
#   - DATABASE_URL env var set (or SUPABASE_DB_URL)
#   - For Supabase hosted: use the connection string from Dashboard > Settings > Database
#
# Each migration uses IF NOT EXISTS / IF NOT EXISTS checks so re-running is safe.
# ──────────────────────────────────────────────────────────────────────────────
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PENDING_DIR="$SCRIPT_DIR/../supabase/migrations-pending"

# ── Migration manifest (ordered) ─────────────────────────────────────────────
MIGRATIONS=(
  "001_parent_accounts.sql|Parent tier: accounts, link codes, parent-child links + RLS"
  "002_affiliates.sql|New percentage-tier affiliate programme (accounts, links, clicks, conversions, payouts)"
  "003_exam_board_enum_update.sql|Rename/add ExamBoard enum values (Cambridge split, Eduqas, Edexcel IGCSE)"
  "004_progress_tables.sql|Student progress tracking table with RLS"
  "005_analytics_tables.sql|Daily analytics aggregates + email preferences tables"
  "006_recommendation_cache.sql|Personalised recommendation cache table"
  "007_cycle_improvements.sql|Child privacy columns, CookieConsent table, PrivacySettings.aiOptOut"
)

# ── Colours ──────────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Colour

# ── Resolve database URL ─────────────────────────────────────────────────────
DB_URL="${DATABASE_URL:-${SUPABASE_DB_URL:-}}"

# ── Helpers ──────────────────────────────────────────────────────────────────
usage() {
  cat <<EOF
Usage: $(basename "$0") [OPTIONS]

Options:
  --apply           Actually run the migrations (default is dry-run)
  --one <prefix>    Only apply the migration whose filename starts with <prefix>
                    e.g. --one 003
  --show <prefix>   Print the SQL for a single migration and exit
  --list            List all pending migrations and exit
  -h, --help        Show this help

Environment:
  DATABASE_URL or SUPABASE_DB_URL must be set for --apply mode.

Examples:
  $(basename "$0")                         # dry-run: list what would be applied
  $(basename "$0") --apply                 # apply all 7 migrations in order
  $(basename "$0") --apply --one 004       # apply only 004_progress_tables.sql
  $(basename "$0") --show 002              # print SQL for 002_affiliates.sql
EOF
  exit 0
}

list_migrations() {
  echo -e "\n${BOLD}Pending migrations (${#MIGRATIONS[@]} total):${NC}\n"
  local i=1
  for entry in "${MIGRATIONS[@]}"; do
    IFS='|' read -r file desc <<< "$entry"
    if [[ -f "$PENDING_DIR/$file" ]]; then
      local size
      size=$(wc -c < "$PENDING_DIR/$file" | tr -d ' ')
      echo -e "  ${CYAN}${i}.${NC} ${BOLD}${file}${NC}"
      echo -e "     ${desc}"
      echo -e "     ${YELLOW}${size} bytes${NC}"
    else
      echo -e "  ${RED}${i}. ${file} — FILE MISSING${NC}"
    fi
    echo ""
    i=$((i + 1))
  done
}

show_migration() {
  local prefix="$1"
  local found=0
  for entry in "${MIGRATIONS[@]}"; do
    IFS='|' read -r file desc <<< "$entry"
    if [[ "$file" == "${prefix}"* ]]; then
      echo -e "\n${BOLD}── ${file} ──${NC}"
      echo -e "${CYAN}${desc}${NC}\n"
      if [[ -f "$PENDING_DIR/$file" ]]; then
        cat "$PENDING_DIR/$file"
      else
        echo -e "${RED}ERROR: File not found: $PENDING_DIR/$file${NC}"
        exit 1
      fi
      found=1
      break
    fi
  done
  if [[ $found -eq 0 ]]; then
    echo -e "${RED}ERROR: No migration matching prefix '${prefix}'${NC}"
    exit 1
  fi
}

apply_migration() {
  local file="$1"
  local desc="$2"
  local path="$PENDING_DIR/$file"

  if [[ ! -f "$path" ]]; then
    echo -e "  ${RED}SKIP${NC} $file — file not found"
    return 1
  fi

  echo -e "  ${CYAN}APPLYING${NC} $file"
  echo -e "  ${desc}"

  if psql "$DB_URL" -v ON_ERROR_STOP=1 -f "$path" 2>&1; then
    echo -e "  ${GREEN}OK${NC} $file applied successfully\n"
  else
    echo -e "  ${RED}FAILED${NC} $file — aborting. Check output above.\n"
    exit 1
  fi
}

# ── Parse arguments ──────────────────────────────────────────────────────────
MODE="dry-run"
ONLY_PREFIX=""
SHOW_PREFIX=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --apply) MODE="apply"; shift ;;
    --one)   ONLY_PREFIX="$2"; shift 2 ;;
    --show)  SHOW_PREFIX="$2"; shift 2 ;;
    --list)  list_migrations; exit 0 ;;
    -h|--help) usage ;;
    *) echo "Unknown option: $1"; usage ;;
  esac
done

# ── Show mode ────────────────────────────────────────────────────────────────
if [[ -n "$SHOW_PREFIX" ]]; then
  show_migration "$SHOW_PREFIX"
  exit 0
fi

# ── Header ───────────────────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}═══════════════════════════════════════════════════════════════${NC}"
echo -e "${BOLD}  The English Hub — Pending Migration Applicator${NC}"
echo -e "${BOLD}═══════════════════════════════════════════════════════════════${NC}"

if [[ "$MODE" == "dry-run" ]]; then
  echo -e "\n  ${YELLOW}DRY-RUN MODE${NC} — no changes will be made."
  echo -e "  Re-run with ${BOLD}--apply${NC} to execute.\n"
  list_migrations
  echo -e "${YELLOW}To apply:${NC} $(basename "$0") --apply"
  echo -e "${YELLOW}To apply one:${NC} $(basename "$0") --apply --one 003\n"
  exit 0
fi

# ── Apply mode — validate prerequisites ──────────────────────────────────────
if [[ -z "$DB_URL" ]]; then
  echo -e "\n${RED}ERROR: DATABASE_URL or SUPABASE_DB_URL must be set.${NC}"
  echo "  export DATABASE_URL='postgresql://postgres:password@host:port/postgres'"
  exit 1
fi

if ! command -v psql &> /dev/null; then
  echo -e "\n${RED}ERROR: psql is not installed or not on PATH.${NC}"
  echo "  Install with: brew install libpq  (macOS) or apt install postgresql-client (Linux)"
  exit 1
fi

# ── Apply migrations ─────────────────────────────────────────────────────────
echo -e "\n${BOLD}Applying migrations...${NC}\n"

applied=0
skipped=0

for entry in "${MIGRATIONS[@]}"; do
  IFS='|' read -r file desc <<< "$entry"

  # If --one is set, skip non-matching
  if [[ -n "$ONLY_PREFIX" && "$file" != "${ONLY_PREFIX}"* ]]; then
    skipped=$((skipped + 1))
    continue
  fi

  apply_migration "$file" "$desc"
  applied=$((applied + 1))
done

# ── Summary ──────────────────────────────────────────────────────────────────
echo -e "${BOLD}═══════════════════════════════════════════════════════════════${NC}"
echo -e "  ${GREEN}Done.${NC} Applied: ${applied}  Skipped: ${skipped}"
echo -e "${BOLD}═══════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "  1. Verify tables exist:  psql \$DATABASE_URL -c '\\dt public.*'"
echo "  2. Move applied files to supabase/migrations/ for version control"
echo "  3. Run 'npx prisma db pull' if using Prisma to sync schema"
echo ""
