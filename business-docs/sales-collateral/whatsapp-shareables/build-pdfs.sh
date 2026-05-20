#!/usr/bin/env bash
# build-pdfs.sh — thin wrapper that runs the cross-platform Node builder.
#
# The actual build logic lives in build-pdfs.mjs (Node + system Chrome
# + the `marked` package). This wrapper exists so macOS/Linux users can
# run `./build-pdfs.sh` without typing `node build-pdfs.mjs`.

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if ! command -v node >/dev/null 2>&1; then
    echo "[ERROR] Node is not installed or not on PATH."
    echo "        Install from https://nodejs.org/ (LTS) and re-run."
    exit 1
fi

exec node "$SCRIPT_DIR/build-pdfs.mjs"
