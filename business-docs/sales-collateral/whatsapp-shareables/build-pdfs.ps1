# build-pdfs.ps1 — thin wrapper that runs the cross-platform Node builder.
#
# The actual build logic lives in build-pdfs.mjs (Node + system Chrome +
# the `marked` package). This wrapper exists so Windows users can
# double-click or run from PowerShell without typing `node build-pdfs.mjs`.
#
# Usage (from PowerShell, from this folder or anywhere):
#   powershell -ExecutionPolicy Bypass -File "<path>\build-pdfs.ps1"
#
# Or from a CMD prompt:
#   node "<path>\build-pdfs.mjs"

$ErrorActionPreference = 'Stop'
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

# Sanity: Node must be installed.
try {
    node --version | Out-Null
} catch {
    Write-Host "[ERROR] Node is not installed or not on PATH." -ForegroundColor Red
    Write-Host "        Install from https://nodejs.org/ (LTS) and re-run." -ForegroundColor Red
    exit 1
}

# Run the cross-platform builder.
node "$ScriptDir\build-pdfs.mjs"
exit $LASTEXITCODE
