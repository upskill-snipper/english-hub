#!/usr/bin/env node
/**
 * Markdown-to-DOCX converter for DD reports.
 * Usage: node md-to-docx.js <input.md> <output.docx>
 */

const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageNumber, PageBreak,
  TabStopType, TabStopPosition,
} = require("docx");

const [,, inputPath, outputPath] = process.argv;
if (!inputPath || !outputPath) {
  console.error("Usage: node md-to-docx.js <input.md> <output.docx>");
  process.exit(1);
}

const md = fs.readFileSync(inputPath, "utf-8");
const lines = md.split("\n");

// ── Inline formatting parser ──────────────────────────────────────────────
function parseInline(text) {
  const runs = [];
  // Pattern matches: **bold**, *italic*, `code`, or plain text
  const regex = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|([^*`]+))/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    if (m[2]) {
      // bold+italic
      runs.push(new TextRun({ text: m[2], bold: true, italics: true, font: "Arial" }));
    } else if (m[3]) {
      // bold
      runs.push(new TextRun({ text: m[3], bold: true, font: "Arial" }));
    } else if (m[4]) {
      // italic
      runs.push(new TextRun({ text: m[4], italics: true, font: "Arial" }));
    } else if (m[5]) {
      // code
      runs.push(new TextRun({ text: m[5], font: "Courier New", size: 20, shading: { fill: "F0F0F0", type: ShadingType.CLEAR } }));
    } else if (m[6]) {
      runs.push(new TextRun({ text: m[6], font: "Arial" }));
    }
  }
  if (runs.length === 0) runs.push(new TextRun({ text: text || "", font: "Arial" }));
  return runs;
}

// ── Table parser ──────────────────────────────────────────────────────────
function parseTable(tableLines) {
  // tableLines: array of "|...|" lines (header, separator, data rows)
  const parseRow = (line) =>
    line.split("|").slice(1, -1).map((c) => c.trim());

  const headerCells = parseRow(tableLines[0]);
  const colCount = headerCells.length;
  // Skip separator line (index 1)
  const dataRows = tableLines.slice(2).map(parseRow);

  // Calculate column widths proportionally
  const contentWidth = 9360; // US Letter with 1" margins
  const colWidth = Math.floor(contentWidth / colCount);
  const columnWidths = Array(colCount).fill(colWidth);
  // Adjust last column to absorb rounding
  columnWidths[colCount - 1] = contentWidth - colWidth * (colCount - 1);

  const border = { style: BorderStyle.SINGLE, size: 1, color: "999999" };
  const borders = { top: border, bottom: border, left: border, right: border };

  // Parse inline but return raw segments instead of TextRun objects
  function parseInlineRaw(text) {
    const segments = [];
    const regex = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|([^*`]+))/g;
    let m;
    while ((m = regex.exec(text)) !== null) {
      if (m[2]) segments.push({ text: m[2], bold: true, italics: true });
      else if (m[3]) segments.push({ text: m[3], bold: true });
      else if (m[4]) segments.push({ text: m[4], italics: true });
      else if (m[5]) segments.push({ text: m[5], code: true });
      else if (m[6]) segments.push({ text: m[6] });
    }
    if (segments.length === 0) segments.push({ text: text || "" });
    return segments;
  }

  const makeCell = (text, isHeader) => {
    const segments = parseInlineRaw(text);
    const runs = segments.map((seg) => {
      const props = { text: seg.text, font: seg.code ? "Courier New" : "Arial", size: 20 };
      if (isHeader) { props.bold = true; props.color = "FFFFFF"; }
      else { if (seg.bold) props.bold = true; if (seg.italics) props.italics = true; }
      return new TextRun(props);
    });
    return new TableCell({
      borders,
      width: { size: colWidth, type: WidthType.DXA },
      shading: isHeader
        ? { fill: "2B4C7E", type: ShadingType.CLEAR }
        : { fill: "FFFFFF", type: ShadingType.CLEAR },
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: runs })],
    });
  };

  const headerRow = new TableRow({
    children: headerCells.map((c) => makeCell(c, true)),
    tableHeader: true,
  });

  const rows = [headerRow];
  dataRows.forEach((cells, idx) => {
    // Pad or trim to match header column count
    while (cells.length < colCount) cells.push("");
    const rowCells = cells.slice(0, colCount);
    const rowFill = idx % 2 === 0 ? "F5F7FA" : "FFFFFF";
    rows.push(
      new TableRow({
        children: rowCells.map((c, ci) => {
          const segments = parseInlineRaw(c);
          const runs = segments.map((seg) => {
            const props = { text: seg.text, font: seg.code ? "Courier New" : "Arial", size: 20 };
            if (seg.bold) props.bold = true;
            if (seg.italics) props.italics = true;
            return new TextRun(props);
          });
          return new TableCell({
            borders,
            width: { size: columnWidths[ci], type: WidthType.DXA },
            shading: { fill: rowFill, type: ShadingType.CLEAR },
            margins: { top: 60, bottom: 60, left: 100, right: 100 },
            children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: runs })],
          });
        }),
      })
    );
  });

  return new Table({
    width: { size: contentWidth, type: WidthType.DXA },
    columnWidths,
    rows,
  });
}

// ── Main conversion ───────────────────────────────────────────────────────
function convert() {
  const children = [];
  let i = 0;

  // Extract title from first H1
  let docTitle = "Report";
  for (const line of lines) {
    const h1 = line.match(/^# (.+)/);
    if (h1) { docTitle = h1[1]; break; }
  }

  while (i < lines.length) {
    const line = lines[i];

    // ── Blank line ─────────────────────────────────────────────────────
    if (line.trim() === "") {
      i++;
      continue;
    }

    // ── Horizontal rule ────────────────────────────────────────────────
    if (/^---+$/.test(line.trim())) {
      children.push(
        new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "CCCCCC", space: 1 } },
          spacing: { before: 120, after: 120 },
          children: [],
        })
      );
      i++;
      continue;
    }

    // ── Headings ───────────────────────────────────────────────────────
    const headingMatch = line.match(/^(#{1,4})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const headingMap = {
        1: HeadingLevel.HEADING_1,
        2: HeadingLevel.HEADING_2,
        3: HeadingLevel.HEADING_3,
        4: HeadingLevel.HEADING_4,
      };
      children.push(
        new Paragraph({
          heading: headingMap[level] || HeadingLevel.HEADING_4,
          spacing: { before: level === 1 ? 360 : 240, after: 120 },
          children: parseInline(text),
        })
      );
      i++;
      continue;
    }

    // ── Table ──────────────────────────────────────────────────────────
    if (line.trim().startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      if (tableLines.length >= 2) {
        children.push(parseTable(tableLines));
        children.push(new Paragraph({ spacing: { before: 120, after: 120 }, children: [] }));
      }
      continue;
    }

    // ── Blockquote ─────────────────────────────────────────────────────
    if (line.trim().startsWith(">")) {
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].replace(/^>\s*/, ""));
        i++;
      }
      children.push(
        new Paragraph({
          indent: { left: 720 },
          border: { left: { style: BorderStyle.SINGLE, size: 12, color: "2B4C7E", space: 8 } },
          spacing: { before: 120, after: 120 },
          children: parseInline(quoteLines.join(" ")),
        })
      );
      continue;
    }

    // ── Unordered list ─────────────────────────────────────────────────
    if (/^[-*]\s/.test(line.trim())) {
      while (i < lines.length && /^[-*]\s/.test(lines[i].trim())) {
        const itemText = lines[i].trim().replace(/^[-*]\s+/, "");
        children.push(
          new Paragraph({
            numbering: { reference: "bullets", level: 0 },
            spacing: { before: 40, after: 40 },
            children: parseInline(itemText),
          })
        );
        i++;
      }
      continue;
    }

    // ── Numbered list ──────────────────────────────────────────────────
    if (/^\d+\.\s/.test(line.trim())) {
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        const itemText = lines[i].trim().replace(/^\d+\.\s+/, "");
        children.push(
          new Paragraph({
            numbering: { reference: "numbers", level: 0 },
            spacing: { before: 40, after: 40 },
            children: parseInline(itemText),
          })
        );
        i++;
      }
      continue;
    }

    // ── Italic-only line (often used for disclaimers) ──────────────────
    if (/^\*[^*]+\*$/.test(line.trim())) {
      children.push(
        new Paragraph({
          spacing: { before: 120, after: 120 },
          children: [
            new TextRun({
              text: line.trim().replace(/^\*|\*$/g, ""),
              italics: true,
              font: "Arial",
              size: 20,
              color: "666666",
            }),
          ],
        })
      );
      i++;
      continue;
    }

    // ── Regular paragraph ──────────────────────────────────────────────
    children.push(
      new Paragraph({
        spacing: { before: 60, after: 60 },
        children: parseInline(line),
      })
    );
    i++;
  }

  // ── Build document ─────────────────────────────────────────────────────
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: "Arial", size: 24 }, // 12pt
        },
      },
      paragraphStyles: [
        {
          id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 36, bold: true, font: "Arial", color: "1A365D" },
          paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 0 },
        },
        {
          id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 30, bold: true, font: "Arial", color: "2B4C7E" },
          paragraph: { spacing: { before: 280, after: 140 }, outlineLevel: 1 },
        },
        {
          id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 26, bold: true, font: "Arial", color: "3D6098" },
          paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 },
        },
        {
          id: "Heading4", name: "Heading 4", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 24, bold: true, font: "Arial", color: "4A7AB5" },
          paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 3 },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: "\u2022",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 720, hanging: 360 } } },
            },
          ],
        },
        {
          reference: "numbers",
          levels: [
            {
              level: 0,
              format: LevelFormat.DECIMAL,
              text: "%1.",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 720, hanging: 360 } } },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 },
            margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "2B4C7E", space: 4 } },
                spacing: { after: 120 },
                children: [
                  new TextRun({ text: docTitle, font: "Arial", size: 18, color: "2B4C7E", italics: true }),
                  new TextRun({ text: "\tConfidential", font: "Arial", size: 18, color: "999999", italics: true }),
                ],
                tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                border: { top: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC", space: 4 } },
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "Page ", font: "Arial", size: 18, color: "999999" }),
                  new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: "999999" }),
                ],
              }),
            ],
          }),
        },
        children,
      },
    ],
  });

  return Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync(outputPath, buffer);
    console.log(`Created: ${outputPath}`);
  });
}

convert().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
