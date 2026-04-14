const fs = require('fs');
const content = fs.readFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', 'utf8');

let result = '';
let j = 0;

function processInsideSingleQuotedString(src, start) {
  // Process content inside a single-quoted string starting at `start`
  // Returns { text, end } where text is the escaped content and end is index after closing quote
  let out = '';
  let i = start;
  while (i < src.length) {
    const ch = src[i];
    const code = src.charCodeAt(i);

    if (ch === '\\') {
      // Already escaped
      out += ch;
      i++;
      if (i < src.length) {
        out += src[i];
        i++;
      }
    } else if (ch === "'") {
      // Could be closing quote or possessive apostrophe
      const prev = i > start ? src[i - 1] : '';
      const next = i + 1 < src.length ? src[i + 1] : '';
      // If surrounded by word chars on either side, it's an apostrophe - escape it
      if (/[a-zA-Z]/.test(prev) && /[a-zA-Z]/.test(next)) {
        out += "\\'";
        i++;
      } else if (/[a-zA-Z]/.test(prev) && (next === ' ' || next === ',' || next === '.' || next === ';' || next === ':' || next === ')' || next === ']' || next === '"' || next === '!')) {
        // Possessive like Birlings' -- escape it
        out += "\\'";
        i++;
      } else {
        // Closing quote
        return { text: out, end: i + 1 };
      }
    } else if (ch === '\n' || ch === '\r') {
      // Unterminated string
      return { text: out, end: i };
    } else if (code > 127) {
      // Non-ASCII character - replace with ASCII equivalent
      const replacements = {
        8212: '--',  // em dash
        8211: '-',   // en dash
        8220: '"',   // left double quotation mark
        8221: '"',   // right double quotation mark
        8216: "'",   // left single quotation mark -> use escaped apostrophe if needed
        8217: "\\'", // right single quotation mark -> escaped apostrophe
        8230: '...',  // ellipsis
        160: ' ',    // non-breaking space
        8226: '-',   // bullet
        0x2013: '-', // en dash
        0x2014: '--', // em dash
        0x2018: "'", // left single quote -> straight
        0x2019: "\\'", // right single quote -> escaped
        0x201C: '"',  // left double quote
        0x201D: '"',  // right double quote
        0x2026: '...', // ellipsis
        0x00A0: ' ',  // nbsp
        0x2014: '--', // em dash
      };
      const replacement = replacements[code];
      if (replacement !== undefined) {
        out += replacement;
      } else {
        // Just drop it or replace with '?'
        out += '?';
      }
      i++;
    } else {
      out += ch;
      i++;
    }
  }
  return { text: out, end: i };
}

while (j < content.length) {
  const ch = content[j];
  const code = content.charCodeAt(j);

  if (ch === "'") {
    // Single-quoted string
    result += ch;
    j++;
    const { text, end } = processInsideSingleQuotedString(content, j);
    result += text;
    // Add closing quote if we found one
    if (end <= content.length && content[end - 1] === "'") {
      result += "'";
    }
    j = end;
  } else if (ch === '"') {
    // Double-quoted string - also fix non-ASCII inside
    result += ch;
    j++;
    while (j < content.length) {
      const sch = content[j];
      const scode = content.charCodeAt(j);
      if (sch === '\\') {
        result += sch;
        j++;
        if (j < content.length) { result += content[j]; j++; }
      } else if (sch === '"') {
        result += sch;
        j++;
        break;
      } else if (sch === '\n') {
        result += sch;
        j++;
        break;
      } else if (scode > 127) {
        const replacements = {
          8212: '--', 8211: '-', 8220: '"', 8221: '"',
          8216: "'", 8217: "'", 8230: '...', 160: ' ',
          0x2013: '-', 0x2014: '--', 0x2018: "'", 0x2019: "'",
          0x201C: '"', 0x201D: '"', 0x2026: '...', 0x00A0: ' ',
        };
        result += replacements[scode] || '?';
        j++;
      } else {
        result += sch;
        j++;
      }
    }
  } else if (ch === '`') {
    // Template literal
    result += ch;
    j++;
    while (j < content.length) {
      const sch = content[j];
      result += sch;
      j++;
      if (sch === '`') break;
      if (sch === '\\' && j < content.length) { result += content[j]; j++; }
    }
  } else if (ch === '/' && j + 1 < content.length && content[j + 1] === '/') {
    // Line comment - pass through
    while (j < content.length && content[j] !== '\n') {
      result += content[j];
      j++;
    }
  } else if (ch === '/' && j + 1 < content.length && content[j + 1] === '*') {
    // Block comment
    result += ch;
    j++;
    while (j < content.length) {
      if (content[j] === '*' && j + 1 < content.length && content[j + 1] === '/') {
        result += content[j]; result += content[j + 1];
        j += 2;
        break;
      }
      result += content[j];
      j++;
    }
  } else if (code > 127) {
    // Non-ASCII outside strings (comments, etc.) - replace
    const replacements = {
      8212: '--', 8211: '-', 8220: '"', 8221: '"',
      8216: "'", 8217: "'", 8230: '...', 160: ' ',
      0x2013: '-', 0x2014: '--', 0x2018: "'", 0x2019: "'",
      0x201C: '"', 0x201D: '"', 0x2026: '...', 0x00A0: ' ',
      // Box drawing chars used in comments
      0x2500: '-', 0x2501: '-', 0x2502: '|', 0x2503: '|',
      0x250C: '+', 0x250D: '+', 0x250E: '+', 0x250F: '+',
      0x2510: '+', 0x2511: '+', 0x2512: '+', 0x2513: '+',
      0x2514: '+', 0x2515: '+', 0x2516: '+', 0x2517: '+',
      0x2518: '+', 0x2519: '+', 0x251A: '+', 0x251B: '+',
      0x251C: '+', 0x251D: '+', 0x251E: '+', 0x251F: '+',
      0x2520: '+', 0x2521: '+', 0x2522: '+', 0x2523: '+',
      0x2524: '+', 0x2525: '+', 0x2526: '+', 0x2527: '+',
      0x2528: '+', 0x2529: '+', 0x252A: '+', 0x252B: '+',
      0x252C: '+', 0x252D: '+', 0x252E: '+', 0x252F: '+',
      0x2530: '+', 0x2531: '+', 0x2532: '+', 0x2533: '+',
      0x2534: '+', 0x2535: '+', 0x2536: '+', 0x2537: '+',
      0x2538: '+', 0x2539: '+', 0x253A: '+', 0x253B: '+',
      0x253C: '+',
      0x2550: '=', 0x2551: '|',
      0x2580: '#', 0x2584: '#', 0x2588: '#', 0x258C: '#', 0x2590: '#',
      0x25A0: '#', 0x25AA: '#', 0x25B6: '>',
      0x2013: '-', // en dash
      0x2014: '--', // em dash
    };
    result += replacements[code] !== undefined ? replacements[code] : ' ';
    j++;
  } else {
    result += ch;
    j++;
  }
}

fs.writeFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', result, 'utf8');
console.log('Done. Original:', content.length, 'New:', result.length);
