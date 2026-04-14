// Fix the specific pattern: word" space_or_continuation
// where " should actually be ' (possessive apostrophe that got converted to ")
// This appears as e.g. students" first or Birlings" domestic or parents" and

const fs = require('fs');
let content = fs.readFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', 'utf8');

// Pattern 1: letter" followed by space+lowercase_word (mid-string possessive/contraction)
// e.g. students" first -> students' first
// e.g. Birlings" domestic -> Birlings' domestic
// e.g. parents" and -> parents' and
// e.g. teacher"s -> teacher's

// But we must not change legitimate " that are real string delimiters followed by ,  \n  +  etc.

// The key patterns:
// 1. [a-z]" [a-z] -> [a-z]' [a-z]  (possessive before a word)
// 2. [a-z]"s -> [a-z]'s  (possessive s, like Sheila"s -> Sheila's)
// 3. Lines starting with `"      ` where the string was orphaned

// Fix pattern: letter"s (like Sheila"s) -> letter's
content = content.replace(/([a-zA-Z])"s\b/g, "$1's");

// Fix pattern: letter" [lowercase] -> letter' [lowercase]  (possessive before continuation)
content = content.replace(/([a-zA-Z])" ([a-z])/g, "$1' $2");

// Fix pattern: letter" and -> letter' and (conjunction after possessive)
content = content.replace(/([a-zA-Z])" (and |or |that |what |which |who |whom |whose |when |where |while |but |so |yet |nor )/gi, "$1' $2");

// Now fix orphaned lines that start with `"      "` (double quote, spaces, double quote)
// These are lines where the previous string was truncated and the rest ended up on the next line
// Pattern: a line that starts with `"      ` where the `"` is actually not a string delimiter
// but leaked content from a broken string in the previous line

// Fix: orphaned lines like `"      "Some students` -> should be just `"Some students`
// These appear when a string like 'students\' first...' was split as:
// "students" [string ends]
// "      "Some students... [orphaned rest becomes new string]

// The orphaned lines start with `"\n` and then spaces and then `"` - let's find them
// Pattern: line starting with `"` followed by spaces then `"` (i.e. `"      "text`)
// This represents `"` closing the previous string, spaces, then `"` starting a new string
// The fix: remove the orphaned `"      "` prefix from these lines

// Look for: end of previous (broken) line + newline + `"` + spaces + `"`
// The `"` at start of a line (after the newline) should be removed if the next content
// after spaces+`"` is the continuation string

const lines = content.split('\n');
const fixedLines = [];
let i = 0;
while (i < lines.length) {
  const line = lines[i];
  // Check if line starts with `"` followed by spaces and then `"` (orphaned string prefix)
  const orphanMatch = line.match(/^"(\s+)"(.*)$/);
  if (orphanMatch) {
    // This line was an orphaned continuation. Reconstruct it.
    const spaces = orphanMatch[1];
    const content_part = orphanMatch[2];
    // The previous line ended a string prematurely.
    // Fix: the previous line's string needs the apostrophe, this line needs to be the continuation.
    // Since we've already fixed the previous line above, we just need to clean up this line.
    // Remove the orphaned `"      "` prefix and keep just the spaces + the real string start `"`
    fixedLines.push(spaces + '"' + content_part);
  } else {
    fixedLines.push(line);
  }
  i++;
}
content = fixedLines.join('\n');

// Also fix: lines where a broken string created `\"` at the end (from previous script runs)
// e.g. `"I can analyse...attitude\"` -> `"I can analyse...attitude"`
// These appear as `"string content\"` where the \" at the end is wrong
content = content.replace(/"([^"\n]+)\\"/g, (match, inner) => {
  return '"' + inner + '"';
});

// Fix remaining \' that appear inside double-quoted strings (should just be ')
// Pattern: \' inside a "..." string -> replace with just '
// But we can't easily detect "inside string" so let's do it globally:
// \' -> ' (since we've converted to double-quoted strings, \' is unnecessary)
content = content.replace(/\\'/g, "'");

fs.writeFileSync('D:/Coding/english-hub/src/data/lesson-plans/y11-igcse-lit-inspector-lessons.ts', content, 'utf8');
console.log('Done. Length:', content.length);
