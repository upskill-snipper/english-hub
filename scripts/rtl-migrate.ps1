<#
.SYNOPSIS
  Convert physical Tailwind direction utilities to logical equivalents
  so the site renders correctly in RTL (Arabic) mode.

.DESCRIPTION
  Walks src/ and rewrites className strings:
    mr- → me-, ml- → ms-, pr- → pe-, pl- → ps-
    text-left → text-start, text-right → text-end
    border-l → border-s, border-r → border-e
    rounded-l/r/tl/tr/bl/br → rounded-s/e/ss/se/es/ee
    left- → start-, right- → end-

  Only modifies the contents of className="..." attributes and the
  string arguments of cn() / clsx() / cva() / tv() / twMerge() calls.
  Comments and unrelated string literals are untouched.

.NOTES
  - Default is DRY-RUN. Re-run with -Apply to write changes.
  - Audited on 2026-05-12: 5,636 occurrences across 840 files. The
    bulk are pr- / ml- / text-left in grade-boundary tables (which
    contain English-only data and may not need to render RTL anyway —
    review after running).
  - After running, two manual passes are still required:
      1. SVG icon mirroring — directional arrows (ArrowRight,
         ChevronLeft etc.) need a CSS rule like:
           [dir="rtl"] [data-icon="inline-start"] {
             transform: scaleX(-1);
           }
         Some files already use the data-icon marker; consume it.
      2. `absolute` positioning — 542 occurrences. Most should flip,
         but verify modal close-X buttons + dropdown carets
         individually.

.EXAMPLE
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\rtl-migrate.ps1
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\rtl-migrate.ps1 -Apply
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\rtl-migrate.ps1 -Apply -Path src\app\auth
#>

param(
    [switch]$Apply,
    [string]$Path = 'src'
)

$ErrorActionPreference = 'Stop'

$skipDirs = '(?:node_modules|\.next|data-room|business-docs)'
$root = Resolve-Path -Path $Path
$files = Get-ChildItem -Path $root -Recurse -File -Include '*.tsx','*.jsx','*.ts','*.js' |
    Where-Object { $_.FullName -notmatch "[\\/]$skipDirs[\\/]" }

# Token-level replacements — each requires a Tailwind-valid trailing
# context so we never catch `pr-imary`, `ml-something`, etc.
$tokenRegexes = [ordered]@{
    '(?<![\w-])mr-(?=[\d\[]|auto|px)'             = 'me-'
    '(?<![\w-])ml-(?=[\d\[]|auto|px)'             = 'ms-'
    '(?<![\w-])pr-(?=[\d\[]|px)'                  = 'pe-'
    '(?<![\w-])pl-(?=[\d\[]|px)'                  = 'ps-'
    '(?<![\w-])text-left(?![\w-])'                = 'text-start'
    '(?<![\w-])text-right(?![\w-])'               = 'text-end'
    '(?<![\w-])border-l(?=-|[\s"''`}]|$)'         = 'border-s'
    '(?<![\w-])border-r(?=-|[\s"''`}]|$)'         = 'border-e'
    '(?<![\w-])rounded-tl(?=-|[\s"''`}]|$)'       = 'rounded-ss'
    '(?<![\w-])rounded-tr(?=-|[\s"''`}]|$)'       = 'rounded-se'
    '(?<![\w-])rounded-bl(?=-|[\s"''`}]|$)'       = 'rounded-es'
    '(?<![\w-])rounded-br(?=-|[\s"''`}]|$)'       = 'rounded-ee'
    '(?<![\w-])rounded-l(?=-|[\s"''`}]|$)'        = 'rounded-s'
    '(?<![\w-])rounded-r(?=-|[\s"''`}]|$)'        = 'rounded-e'
    '(?<![\w-])left-(?=[\d\[]|auto|full|1/|2/|3/)'  = 'start-'
    '(?<![\w-])right-(?=[\d\[]|auto|full|1/|2/|3/)' = 'end-'
}

function Convert-Body {
    param([string]$body)
    foreach ($pair in $tokenRegexes.GetEnumerator()) {
        $body = [regex]::Replace($body, $pair.Key, $pair.Value)
    }
    return $body
}

# Match string literals (double, single, backtick).
$stringLitRx = '(?ms)("(?:[^"\\]|\\.)*"|''(?:[^''\\]|\\.)*''|`(?:[^`\\$]|\\.|\$\{(?:[^{}]|\{[^{}]*\})*\})*`)'

$totalFiles = 0
foreach ($f in $files) {
    $orig = Get-Content -Raw -LiteralPath $f.FullName
    if (-not $orig) { continue }

    # Operate only inside className=... or cn-like() call chunks.
    $new = [regex]::Replace(
        $orig,
        '(className\s*=\s*\{?[^;]{0,400}?\}|className\s*=\s*"[^"]*"|className\s*=\s*''[^'']*''|className\s*=\s*`[^`]*`|(?<![\w$])(?:cn|clsx|cva|tv|twMerge)\s*\([^)]{0,1200}\))',
        {
            param($m)
            $chunk = $m.Value
            $chunk = [regex]::Replace($chunk, $stringLitRx, {
                param($s)
                $lit = $s.Value
                $q = $lit[0]
                $inner = $lit.Substring(1, $lit.Length - 2)
                $inner = Convert-Body -body $inner
                return "$q$inner$q"
            })
            return $chunk
        }
    )

    if ($new -ne $orig) {
        $totalFiles++
        $rel = $f.FullName.Substring($root.Path.Length).TrimStart('\','/')
        if ($Apply) {
            $bytes = [System.Text.UTF8Encoding]::new($false).GetBytes($new)
            [System.IO.File]::WriteAllBytes($f.FullName, $bytes)
            Write-Host "WROTE  $rel" -ForegroundColor Green
        } else {
            Write-Host "WOULD  $rel" -ForegroundColor Yellow
        }
    }
}

Write-Host ""
Write-Host "Files changed: $totalFiles"
if (-not $Apply) {
    Write-Host "Dry-run only. Re-run with -Apply to write changes." -ForegroundColor Cyan
}
