// Strategy: Do TWO passes on the file
// Pass 1: Replace all non-ASCII characters with ASCII equivalents (everywhere)
// Pass 2: Escape apostrophes that appear between two word characters inside strings
//         (only the "both neighbors are letters" case - handles contractions/possessives)
//         Closing delimiters and possessive plurals need a different approach.

// The possessive plural problem (Birlings') is harder. In that case, ' is preceded by a letter
// and followed by space/comma/etc. We cannot distinguish "Calls'" (end of string) from "Birlings'"
// (possessive plural) without a full parser.

// SOLUTION for possessive plurals: look at what FOLLOWS the apostrophe+space/comma:
// - If followed by a lowercase continuation of the string, it's possessive plural
// - If the character after the closing quote is a JS structural char (,  \n  ]  )  ; ), it's the delimiter

// Actually, let's use a different approach entirely:
// Change all problematic single-quoted strings to use backtick template literals.
// This avoids apostrophe escaping issues entirely.

// Actually the simplest correct approach: after pass 1 (non-ASCII fix), do targeted replacements
// for known patterns:
// - word's -> word\'s (possessive singular with s)
// - word't -> word\'t (contractions like don't, can't, it's)
// - word're -> etc.
// These are ALL cases where apostrophe has a letter on BOTH sides.

// For possessive plurals (students', Birlings', etc.) - apostrophe before non-letter:
// These appear as 'Birlings' comfortable' -- the ' before comfortable ends the string.
// We need to escape 'Birlings\'' by detecting letter+'+space/comma inside a string.

// FULL PARSER approach: track whether we're inside a single-quoted string and escape ALL
// internal apostrophes. The key insight: the OPENING ' starts the string, and from that point,
// any ' that is preceded by a letter (regardless of what follows) is an apostrophe that needs
// escaping. The ONLY unambiguous closing delimiter is ' that is NOT preceded by a letter
// (e.g., end of word followed by ',) OR is the first character after the opening delimiter.

// Actually: let's look at it differently.
// In TypeScript, single-quoted string content cannot contain unescaped '.
// The closing ' is always the FIRST unescaped ' after the opening '.
// So if we have: 'play's dramatic irony'
// TypeScript sees: 'play' followed by s dramatic irony' (syntax error)
// The fix: escape ALL ' that appear between the opening and closing delimiters.
// But we can only do this if we know where the string ENDS.
//
// For simple single-line strings like 'An Inspector Calls' we can find the last ' on the line
// and work backwards. But for strings like 'play\'s dramatic irony' after our fix, the \' is
// already escaped.
//
// DEFINITIVE APPROACH: Since the file is well-structured TypeScript and the only issues are:
// 1. Non-ASCII characters
// 2. Unescaped apostrophes in string literals
//
// The cleanest fix is to switch ALL single-quoted string literals that contain apostrophes
// to double-quoted strings. This avoids the apostrophe escaping problem entirely.
// Non-ASCII characters in double-quoted strings still need to be replaced.

const fs = require('fs');

// First read the ORIGINAL (pre-script) version from git if possible, or work with current
// Since we've already modified the file, let's work with what we have and do a clean rebuild.

// Actually, since both scripts have run and the file is mangled, we need to reconstruct.
// The file currently has '\' at many string ends which is wrong.
// Let's fix the current file by:
// 1. Replace all occurrences of \', that are NOT preceded by the actual escape intent
//    i.e., remove the backslash before ' where it shouldn't be.

let content = fs.readFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', 'utf8');

// The current file has patterns like 'An Inspector Calls\', where \' is the closing quote
// that was wrongly escaped. We need to:
// 1. Remove backslash before ' that is followed by comma, newline, colon, semicolon, bracket
// 2. Keep backslash before ' that is followed by a letter (true apostrophes we correctly escaped)

// Pattern: \' followed by non-letter (these are wrongly escaped closing delimiters)
content = content.replace(/\\'/g, (match, offset) => {
  const nextChar = content[offset + 2]; // char after \'
  if (!nextChar || !/[a-zA-Z]/.test(nextChar)) {
    // This is a wrongly escaped closing delimiter - remove the backslash
    return "'";
  }
  return match; // Keep as is (true mid-word apostrophe)
});

// Now replace all non-ASCII characters
const ASCII_MAP = {
  '\u2014': '--',   // em dash
  '\u2013': '-',    // en dash
  '\u2012': '-',    // figure dash
  '\u2010': '-',    // hyphen
  '\u2011': '-',    // non-breaking hyphen
  '\u2018': "'",    // left single quotation mark (inside strings: needs care)
  '\u2019': "\\'",  // right single quotation mark (apostrophe - needs escape in single-quoted strings)
  '\u201C': '"',    // left double quotation mark
  '\u201D': '"',    // right double quotation mark
  '\u2026': '...',  // ellipsis
  '\u00A0': ' ',    // non-breaking space
  '\u2500': '-',    // box drawing
  '\u2501': '-',
  '\u2502': '|',
  '\u2503': '|',
  '\u250C': '+', '\u250F': '+', '\u2510': '+', '\u2513': '+',
  '\u2514': '+', '\u2517': '+', '\u2518': '+', '\u251B': '+',
  '\u251C': '+', '\u251D': '+', '\u251E': '+', '\u251F': '+',
  '\u2520': '+', '\u2521': '+', '\u2522': '+', '\u2523': '+',
  '\u2524': '+', '\u252B': '+', '\u252C': '+', '\u2533': '+',
  '\u2534': '+', '\u253B': '+', '\u253C': '+',
  '\u2550': '=', '\u2551': '|', '\u2552': '+', '\u2553': '+',
  '\u2554': '+', '\u2555': '+', '\u2556': '+', '\u2557': '+',
  '\u2558': '+', '\u2559': '+', '\u255A': '+', '\u255B': '+',
  '\u255C': '+', '\u255D': '+', '\u255E': '+', '\u255F': '+',
  '\u2560': '+', '\u2561': '+', '\u2562': '+', '\u2563': '+',
  '\u2564': '+', '\u2565': '+', '\u2566': '+', '\u2567': '+',
  '\u2568': '+', '\u2569': '+', '\u256A': '+', '\u256B': '+',
  '\u256C': '+',
  '\u2580': '#', '\u2584': '#', '\u2588': '#', '\u258C': '#', '\u2590': '#',
  '\u25A0': '#', '\u25AA': '#', '\u25B6': '>',
  '\u00E9': 'e', '\u00E8': 'e', '\u00EA': 'e', '\u00EB': 'e',
  '\u00E0': 'a', '\u00E1': 'a', '\u00E2': 'a', '\u00E3': 'a', '\u00E4': 'a',
  '\u00FC': 'u', '\u00FB': 'u', '\u00FA': 'u', '\u00F9': 'u',
  '\u00F3': 'o', '\u00F2': 'o', '\u00F4': 'o', '\u00F6': 'o',
  '\u00ED': 'i', '\u00EC': 'i', '\u00EE': 'i', '\u00EF': 'i',
  '\u00F1': 'n', '\u00E7': 'c',
  '\u00C9': 'E', '\u00C8': 'E', '\u00C0': 'A', '\u00C1': 'A',
  '\u00D3': 'O', '\u00DA': 'U', '\u00CD': 'I',
  '\u2032': "'", // prime
  '\u2033': '"', // double prime
};

// Replace non-ASCII outside and inside strings
// But we need to be careful with U+2019 inside SINGLE-quoted strings vs outside
// U+2019 inside double-quoted strings should just become '
// U+2019 inside single-quoted strings should become \'

// Simple approach: replace all U+2019 with \' -- this works inside single-quoted strings
// and also inside double-quoted strings (where \' is just an apostrophe)
// and outside strings it would be wrong but those are in comments which TypeScript allows

// Similarly for U+2018 (left single quote) - just replace with '

let result = content;

// First handle U+2019 specially: inside single-quoted strings it needs to be \'
// But we can't easily detect "inside string". So just use ' everywhere
// (not \') and rely on the fact that these are at word boundaries where the
// surrounding context makes them safe (e.g., they appear in contexts like
// "the author's style" where they'd be mid-word possessives anyway)

for (const [uni, ascii] of Object.entries(ASCII_MAP)) {
  // For U+2019 right single quote, we want \' inside strings but ' in comments
  // Since we can't distinguish easily, use \' everywhere (safe in both contexts)
  result = result.split(uni).join(ascii);
}

// Now the remaining issue: unescaped apostrophes inside single-quoted strings.
// After the ASCII_MAP replacements, U+2019 -> \' which is correct.
// But regular ASCII apostrophes that were already in the original still need handling.
// The current file state has those escaped from our first script run.
// Let's verify by checking for remaining errors.

fs.writeFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', result, 'utf8');
console.log('Done. Length:', result.length);
