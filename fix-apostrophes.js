const fs = require('fs');
const content = fs.readFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', 'utf8');

// State machine to process JS/TS source and escape unescaped apostrophes inside single-quoted strings
let result = '';
let i = 0;

while (i < content.length) {
  const c = content[i];

  if (c === "'") {
    // Possible start of a single-quoted string
    // Check if we're at the start of a string (not in the middle of something else)
    result += c;
    i++;
    // Read until we find the closing single quote
    while (i < content.length) {
      const sc = content[i];
      if (sc === '\\') {
        // Already escaped - keep escape + next char
        result += sc;
        i++;
        if (i < content.length) {
          result += content[i];
          i++;
        }
      } else if (sc === "'") {
        // Closing quote
        result += sc;
        i++;
        break;
      } else if (sc === '\n' || sc === '\r') {
        // Newline - unterminated string, just continue
        result += sc;
        i++;
        break;
      } else {
        result += sc;
        i++;
      }
    }
  } else if (c === '"') {
    // Double-quoted string - pass through unchanged
    result += c;
    i++;
    while (i < content.length) {
      const sc = content[i];
      if (sc === '\\') {
        result += sc;
        i++;
        if (i < content.length) {
          result += content[i];
          i++;
        }
      } else if (sc === '"') {
        result += sc;
        i++;
        break;
      } else if (sc === '\n') {
        result += sc;
        i++;
        break;
      } else {
        result += sc;
        i++;
      }
    }
  } else if (c === '`') {
    // Template literal - pass through unchanged
    result += c;
    i++;
    while (i < content.length) {
      const sc = content[i];
      result += sc;
      i++;
      if (sc === '`') break;
      if (sc === '\\' && i < content.length) {
        result += content[i];
        i++;
      }
    }
  } else if (c === '/' && i + 1 < content.length && content[i + 1] === '/') {
    // Line comment - pass through to end of line
    while (i < content.length && content[i] !== '\n') {
      result += content[i];
      i++;
    }
  } else if (c === '/' && i + 1 < content.length && content[i + 1] === '*') {
    // Block comment
    result += c;
    i++;
    while (i < content.length) {
      if (content[i] === '*' && i + 1 < content.length && content[i + 1] === '/') {
        result += content[i];
        result += content[i + 1];
        i += 2;
        break;
      }
      result += content[i];
      i++;
    }
  } else {
    result += c;
    i++;
  }
}

// Now find unescaped apostrophes within the single-quoted strings we processed
// Actually the above just passes through. We need a different approach.
// The problem is apostrophes INSIDE single-quoted strings terminate them prematurely.
// Let's instead do a targeted replacement:
// Replace patterns like 's  or  n't  or  er's  etc. that appear mid-string

// Better approach: process the original content and whenever we're inside a single-quoted string,
// escape any bare apostrophes that aren't the string delimiter.

// Let's rewrite with explicit tracking:
let result2 = '';
let j = 0;

while (j < content.length) {
  const ch = content[j];

  if (ch === "'") {
    // Start of single-quoted string
    result2 += ch;
    j++;
    let stringClosed = false;
    while (j < content.length && !stringClosed) {
      const sch = content[j];
      if (sch === '\\') {
        // Escaped char
        result2 += sch;
        j++;
        if (j < content.length) {
          result2 += content[j];
          j++;
        }
      } else if (sch === "'") {
        // Check if this is an apostrophe mid-word (followed by lowercase letter)
        // or the closing delimiter
        const next = j + 1 < content.length ? content[j + 1] : '';
        const prev = j > 0 ? content[j - 1] : '';
        // If preceded by a letter and followed by a letter, it's a possessive/contraction
        if (/[a-zA-Z]/.test(prev) && /[a-zA-Z]/.test(next)) {
          // Escape it
          result2 += "\\'";
          j++;
        } else {
          // Closing quote
          result2 += sch;
          j++;
          stringClosed = true;
        }
      } else if (sch === '\n' || sch === '\r') {
        result2 += sch;
        j++;
        stringClosed = true;
      } else {
        result2 += sch;
        j++;
      }
    }
  } else if (ch === '"') {
    // Double-quoted string
    result2 += ch;
    j++;
    while (j < content.length) {
      const sch = content[j];
      if (sch === '\\') {
        result2 += sch;
        j++;
        if (j < content.length) { result2 += content[j]; j++; }
      } else if (sch === '"') {
        result2 += sch;
        j++;
        break;
      } else if (sch === '\n') {
        result2 += sch;
        j++;
        break;
      } else {
        result2 += sch;
        j++;
      }
    }
  } else if (ch === '`') {
    // Template literal
    result2 += ch;
    j++;
    while (j < content.length) {
      const sch = content[j];
      result2 += sch;
      j++;
      if (sch === '`') break;
      if (sch === '\\' && j < content.length) {
        result2 += content[j];
        j++;
      }
    }
  } else if (ch === '/' && j + 1 < content.length && content[j + 1] === '/') {
    while (j < content.length && content[j] !== '\n') {
      result2 += content[j];
      j++;
    }
  } else {
    result2 += ch;
    j++;
  }
}

fs.writeFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', result2, 'utf8');
console.log('Done. Original length:', content.length, 'New length:', result2.length);
