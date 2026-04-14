// Convert single-quoted string literals to double-quoted strings
// This eliminates all apostrophe-in-string issues
// We need to:
// 1. Find single-quoted strings (including ones that span the full value)
// 2. Convert the delimiters to double quotes
// 3. Escape any " that appear inside (unlikely in this educational text)
// 4. Unescape any \' -> '
// 5. Replace non-ASCII characters

const fs = require('fs');
const content = fs.readFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', 'utf8');

// Non-ASCII replacement map
const ASCII_MAP = new Map([
  ['\u2014', '--'],   // em dash
  ['\u2013', '-'],    // en dash
  ['\u2012', '-'],    // figure dash
  ['\u2010', '-'],    // hyphen
  ['\u2011', '-'],    // non-breaking hyphen
  ['\u2018', "'"],    // left single quotation mark
  ['\u2019', "'"],    // right single quotation mark
  ['\u201C', '"'],    // left double quotation mark -> escaped in double-quoted strings
  ['\u201D', '"'],    // right double quotation mark
  ['\u2026', '...'],  // ellipsis
  ['\u00A0', ' '],    // non-breaking space
]);

// Box drawing chars (used in comments)
for (let code = 0x2500; code <= 0x257F; code++) {
  ASCII_MAP.set(String.fromCharCode(code), '-');
}

function replaceNonASCII(str) {
  let result = '';
  for (const ch of str) {
    const code = ch.charCodeAt(0);
    if (code <= 127) {
      result += ch;
    } else if (ASCII_MAP.has(ch)) {
      result += ASCII_MAP.get(ch);
    } else {
      result += '?';
    }
  }
  return result;
}

// Process the file token by token
// Strategy: find single-quoted strings and convert them to double-quoted
let result = '';
let i = 0;

while (i < content.length) {
  const ch = content[i];
  const prev = i > 0 ? content[i-1] : '';

  // Check for a single-quoted string that is a FULL string literal
  // (not inside a double-quoted string or template literal)
  // We detect it by: ' that is not preceded by \
  if (ch === "'" && prev !== '\\') {
    // Collect the FULL line to determine if this is a string start
    // Actually, let's just process it as a single-quoted string and convert
    i++; // skip opening quote
    let stringContent = '';
    let finished = false;

    while (i < content.length && !finished) {
      const sc = content[i];

      if (sc === '\\' && i + 1 < content.length) {
        const next = content[i+1];
        if (next === "'") {
          // \' -> just ' (unescape, since we're switching to double quotes)
          stringContent += "'";
          i += 2;
        } else if (next === '"') {
          // \" -> \" (keep escaped for double-quoted)
          stringContent += '\\"';
          i += 2;
        } else {
          stringContent += sc;
          stringContent += next;
          i += 2;
        }
      } else if (sc === "'") {
        // End of string
        finished = true;
        i++;
      } else if (sc === '\n' || sc === '\r') {
        // Unterminated - include the newline and stop
        stringContent += sc;
        i++;
        finished = true;
      } else if (sc === '"') {
        // Need to escape double quotes inside double-quoted strings
        stringContent += '\\"';
        i++;
      } else {
        stringContent += sc;
        i++;
      }
    }

    // Replace non-ASCII in string content
    const cleanContent = replaceNonASCII(stringContent);
    result += '"' + cleanContent + '"';

  } else if (ch === '"') {
    // Already double-quoted string - pass through but fix non-ASCII
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
        const code = sc.charCodeAt(0);
        if (code > 127) {
          result += ASCII_MAP.get(sc) || '?';
        } else {
          result += sc;
        }
        i++;
      }
    }
  } else if (ch === '`') {
    // Template literal - pass through
    result += ch; i++;
    while (i < content.length) {
      const sc = content[i];
      result += sc; i++;
      if (sc === '`') break;
      if (sc === '\\' && i < content.length) { result += content[i]; i++; }
    }
  } else if (ch === '/' && i + 1 < content.length && content[i+1] === '/') {
    // Line comment
    while (i < content.length && content[i] !== '\n') {
      const sc = content[i];
      const code = sc.charCodeAt(0);
      result += code > 127 ? (ASCII_MAP.get(sc) || ' ') : sc;
      i++;
    }
  } else if (ch === '/' && i + 1 < content.length && content[i+1] === '*') {
    // Block comment
    result += ch; i++;
    while (i < content.length) {
      const sc = content[i];
      if (sc === '*' && i+1 < content.length && content[i+1] === '/') {
        result += sc; result += content[i+1]; i += 2; break;
      }
      const code = sc.charCodeAt(0);
      result += code > 127 ? (ASCII_MAP.get(sc) || ' ') : sc;
      i++;
    }
  } else {
    // Outside any string - replace non-ASCII
    const code = ch.charCodeAt(0);
    result += code > 127 ? (ASCII_MAP.get(ch) || ' ') : ch;
    i++;
  }
}

fs.writeFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', result, 'utf8');
console.log('Done. Original:', content.length, 'New:', result.length);
