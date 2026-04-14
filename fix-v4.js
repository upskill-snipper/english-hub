// Fix the inspector lessons file by converting single-quoted strings to double-quoted
// Handle possessive apostrophes correctly

const fs = require('fs');
const content = fs.readFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', 'utf8');

const ASCII_MAP = new Map([
  ['\u2014', '--'], ['\u2013', '-'], ['\u2012', '-'], ['\u2010', '-'], ['\u2011', '-'],
  ['\u2018', "'"], ['\u2019', "'"], ['\u201C', '"'], ['\u201D', '"'],
  ['\u2026', '...'], ['\u00A0', ' '],
]);
for (let code = 0x2500; code <= 0x257F; code++) {
  ASCII_MAP.set(String.fromCharCode(code), '-');
}

function replaceNonASCII(str) {
  let r = '';
  for (const ch of str) {
    const code = ch.charCodeAt(0);
    if (code <= 127) r += ch;
    else r += ASCII_MAP.get(ch) || '?';
  }
  return r;
}

function isWordChar(c) { return c && /[a-zA-Z0-9_]/.test(c); }
function isLineEnd(c) { return !c || c === '\n' || c === '\r'; }

// Is the char a JS structural character that would follow a closing quote?
function isJsStructural(s) {
  // Skip whitespace then check
  const trimmed = s.trimStart();
  return /^[,\)\]\};+?:]/.test(trimmed) || trimmed.startsWith('//') || trimmed === '' || /^\/\*/.test(trimmed);
}

let result = '';
let i = 0;

while (i < content.length) {
  const ch = content[i];
  const prev = i > 0 ? content[i-1] : '';

  if (ch === "'" && prev !== '\\') {
    // Opening single-quoted string
    i++;
    let stringContent = '';
    let finished = false;

    while (i < content.length && !finished) {
      const sc = content[i];

      if (sc === '\\' && i + 1 < content.length) {
        const next = content[i+1];
        if (next === "'") {
          // \' -> ' (unescape for double-quoted context)
          stringContent += "'";
          i += 2;
        } else if (next === '"') {
          stringContent += '\\"';
          i += 2;
        } else {
          stringContent += sc + next;
          i += 2;
        }
      } else if (sc === "'") {
        const prevChar = i > 0 ? content[i-1] : '';
        const nextChar = i + 1 < content.length ? content[i+1] : '';
        const restOfLine = content.substring(i + 1);

        // Decision: is this closing the string or a possessive apostrophe?
        if (!isWordChar(prevChar)) {
          // Not preceded by a word char - must be closing delimiter
          finished = true;
          i++;
        } else if (isWordChar(nextChar)) {
          // Preceded by word char, followed by word char: contraction/possessive like play's
          // -> include as literal '
          stringContent += "'";
          i++;
        } else {
          // Preceded by word char, followed by non-word: possessive plural (students')
          // OR closing delimiter of string like 'An Inspector Calls'
          // Heuristic: look at what comes after the quote
          // If what follows is JS structural (comma, newline, bracket, etc.) -> closing
          // If what follows seems like continuation of string content -> possessive

          const afterQuote = content.substring(i + 1);
          const firstNonSpace = afterQuote.trimStart()[0] || '';

          // Check if it looks like the closing delimiter
          const looksLikeClosing = (
            // Next line is indented less or same (structural)
            /^\s*[,\)\]\};]/.test(afterQuote) ||
            /^\s*\n/.test(afterQuote) ||
            afterQuote.trimStart().startsWith('//') ||
            afterQuote.trimStart().startsWith('/*') ||
            // Or: the next char is ' ' and then we have more string... hard to tell
            false
          );

          if (looksLikeClosing) {
            // Treat as closing delimiter
            finished = true;
            i++;
          } else {
            // Treat as possessive apostrophe
            stringContent += "'";
            i++;
          }
        }
      } else if (sc === '"') {
        // Double quote inside -> escape for double-quoted context
        stringContent += '\\"';
        i++;
      } else if (sc === '\n' || sc === '\r') {
        stringContent += sc;
        i++;
        finished = true;
      } else {
        stringContent += sc;
        i++;
      }
    }

    const cleanContent = replaceNonASCII(stringContent);
    result += '"' + cleanContent + '"';

  } else if (ch === '"') {
    // Double-quoted string - pass through with non-ASCII fix
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
        result += code > 127 ? (ASCII_MAP.get(sc) || '?') : sc;
        i++;
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
    while (i < content.length && content[i] !== '\n') {
      const sc = content[i];
      const code = sc.charCodeAt(0);
      result += code > 127 ? (ASCII_MAP.get(sc) || ' ') : sc;
      i++;
    }
  } else if (ch === '/' && i + 1 < content.length && content[i+1] === '*') {
    result += ch; i++;
    while (i < content.length) {
      const sc = content[i];
      if (sc === '*' && i+1 < content.length && content[i+1] === '/') {
        result += sc + content[i+1]; i += 2; break;
      }
      const code = sc.charCodeAt(0);
      result += code > 127 ? (ASCII_MAP.get(sc) || ' ') : sc;
      i++;
    }
  } else {
    const code = ch.charCodeAt(0);
    result += code > 127 ? (ASCII_MAP.get(ch) || ' ') : ch;
    i++;
  }
}

fs.writeFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', result, 'utf8');
console.log('Done. Original:', content.length, 'New:', result.length);
