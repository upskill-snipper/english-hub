// Fix all remaining apostrophe issues in the inspector file
// The file currently has:
// - Mid-word apostrophes correctly escaped as \' (from previous scripts)
// - Possessive plurals like Birlings' not yet escaped
// - Other ' inside single-quoted strings

const fs = require('fs');
let content = fs.readFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', 'utf8');

// We need to process the file character by character, tracking state
let result = '';
let i = 0;

function isWordChar(c) {
  return c && /[a-zA-Z0-9_]/.test(c);
}

while (i < content.length) {
  const ch = content[i];

  if (ch === "'" && (i === 0 || content[i-1] !== '\\')) {
    // Possible string delimiter
    // Determine if this is opening a string or something else
    // We'll process it as the start of a single-quoted string
    const stringStart = i;
    result += ch; // opening quote
    i++;
    let closed = false;

    while (i < content.length && !closed) {
      const sc = content[i];

      if (sc === '\\') {
        // Escape sequence - keep as is
        result += sc;
        i++;
        if (i < content.length) {
          result += content[i];
          i++;
        }
      } else if (sc === "'") {
        // This could be:
        // 1. Closing delimiter (if followed by JS structural char)
        // 2. Mid-word possessive (letter before AND after)
        // 3. Possessive plural (letter before, non-letter after)
        const prev = i > 0 ? content[i-1] : '';
        const next = i + 1 < content.length ? content[i+1] : '';

        // Case 1: Not preceded by a letter -> closing delimiter
        if (!isWordChar(prev)) {
          result += sc;
          i++;
          closed = true;
        }
        // Case 2: Preceded by letter, followed by letter -> mid-word apostrophe (already escaped by prev script usually)
        else if (isWordChar(prev) && isWordChar(next)) {
          // This is a genuine contraction/possessive - escape it
          result += "\\'";
          i++;
        }
        // Case 3: Preceded by letter, followed by non-letter (space, comma, etc.)
        // This is EITHER a possessive plural OR the closing delimiter.
        // Heuristic: if next char is a letter or it's a capital letter suggesting
        // continued string content, escape. Otherwise treat as delimiter.
        else if (isWordChar(prev) && !isWordChar(next)) {
          // Check what follows the ' in context:
          // If next is ',  \n  ]  )  ;  : and the string makes grammatical sense ending here,
          // it's a closing delimiter.
          // If next is ' ' (space) and the ' is after 's' (plural possessive), it might be possessive.
          // We need more context: look at the line structure.

          // Conservative approach: check if what follows is consistent with continuing string
          // vs ending it. If the character after is a structural JS char at the top level
          // (immediately followed by \n, or ',' then \n, or ']', or ')'), then it's closing.
          // Otherwise escape it.

          // Simple heuristic: if next is newline or the rest of line looks like: ',\n or ',\r
          // then it's closing. Otherwise escape.
          const afterQuote = content.substring(i + 1, i + 5);
          const isClosing = (
            next === '\n' ||
            next === '\r' ||
            (next === ',' && /^,\s*\n/.test(content.substring(i + 1))) ||
            (next === ',' && /^,\s*$/.test(content.substring(i + 1, i + 10))) ||
            next === ')' ||
            next === ']' ||
            (next === ' ' && !isWordChar(content[i+2])) // space then non-word suggests end of string value... but this is too broad
          );

          if (isClosing && !(
            // Exception: if there are clear continuation patterns after the quote
            // like 's comfortable' or 's dramatic irony' we should escape
            false
          )) {
            result += sc; // closing delimiter
            i++;
            closed = true;
          } else {
            result += "\\'"; // escape as apostrophe
            i++;
          }
        }
        else {
          // Default: treat as closing
          result += sc;
          i++;
          closed = true;
        }
      } else if (sc === '\n' || sc === '\r') {
        result += sc;
        i++;
        closed = true;
      } else {
        result += sc;
        i++;
      }
    }
  } else if (ch === '"') {
    // Double-quoted string - pass through
    result += ch;
    i++;
    while (i < content.length) {
      const sc = content[i];
      if (sc === '\\') {
        result += sc; i++;
        if (i < content.length) { result += content[i]; i++; }
      } else if (sc === '"') {
        result += sc; i++; break;
      } else if (sc === '\n') {
        result += sc; i++; break;
      } else {
        result += sc; i++;
      }
    }
  } else if (ch === '`') {
    result += ch; i++;
    while (i < content.length) {
      const sc = content[i];
      result += sc; i++;
      if (sc === '`') break;
      if (sc === '\\' && i < content.length) { result += content[i]; i++; }
    }
  } else if (ch === '/' && i + 1 < content.length && content[i+1] === '/') {
    while (i < content.length && content[i] !== '\n') { result += content[i]; i++; }
  } else {
    result += ch;
    i++;
  }
}

fs.writeFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', result, 'utf8');
console.log('Done. Length:', result.length);
