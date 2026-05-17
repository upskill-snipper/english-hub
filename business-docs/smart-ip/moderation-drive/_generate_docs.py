"""
Smart IP — Teacher Moderation Drive document generator.

Produces editable Word (.docx) worksheets people can complete:
  - 00-Smart-IP-Moderation-Drive-Pack.docx   (brief + every board, one file)
  - <Board>-Moderation-Worksheet.docx        (one fillable sheet per board)

Run:  py business-docs/smart-ip/moderation-drive/_generate_docs.py
Regenerate / extend freely — this is the single source of truth for the pack.
"""
from pathlib import Path
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.section import WD_ORIENT
from docx.enum.text import WD_ALIGN_PARAGRAPH

OUT = Path(__file__).parent
ROWS_PER_SHEET = 25
TARGET_PER_BOARD = 150

BOARDS = [
    {
        "file": "AQA",
        "name": "AQA",
        "quals": "GCSE English Language (8700)  ·  GCSE English Literature (8702)",
        "scale": "GCSE 9–1 (plus U)",
        "papers": [
            "Eng Language Paper 1 (Explorations in creative reading & writing)",
            "Eng Language Paper 2 (Writers' viewpoints & perspectives)",
            "Eng Literature Paper 1 (Shakespeare & the 19th-century novel)",
            "Eng Literature Paper 2 (Modern texts & poetry)",
        ],
    },
    {
        "file": "Pearson-Edexcel",
        "name": "Pearson Edexcel",
        "quals": "GCSE English Language (1EN0) · English Literature (1ET0)  ·  "
        "IGCSE English Language A (4EA1) · Literature (4ET1)",
        "scale": "GCSE/IGCSE 9–1 (plus U)",
        "papers": [
            "Eng Language Paper 1 (Fiction & imaginative writing)",
            "Eng Language Paper 2 (Non-fiction & transactional writing)",
            "Eng Literature Paper 1 (Shakespeare & post-1914 literature)",
            "Eng Literature Paper 2 (19th-century novel & poetry)",
        ],
    },
    {
        "file": "OCR",
        "name": "OCR",
        "quals": "GCSE English Language (J351)  ·  GCSE English Literature (J352)",
        "scale": "GCSE 9–1 (plus U)",
        "papers": [
            "Eng Language Component 1 (Communicating information & ideas)",
            "Eng Language Component 2 (Exploring effects & impact)",
            "Eng Literature Component 1 (Exploring modern & literary heritage texts)",
            "Eng Literature Component 2 (Exploring poetry & Shakespeare)",
        ],
    },
    {
        "file": "Eduqas-WJEC",
        "name": "Eduqas / WJEC",
        "quals": "GCSE English Language (C700) · English Literature (C720) "
        "(Eduqas; WJEC route equivalents)",
        "scale": "GCSE 9–1 (plus U)",
        "papers": [
            "Eng Language Component 1 (20th-century narrative & creative)",
            "Eng Language Component 2 (19th/21st-century non-fiction & transactional)",
            "Eng Literature Component 1 (Shakespeare & poetry)",
            "Eng Literature Component 2 (Post-1914 prose/drama, 19th-c novel, unseen poetry)",
        ],
    },
    {
        "file": "Cambridge-IGCSE-0500",
        "name": "Cambridge IGCSE 0500 (First Language English)",
        "quals": "Cambridge IGCSE First Language English (0500)",
        "scale": "IGCSE 9–1 / A*–G (record as the centre reports)",
        "papers": [
            "Paper 1 — Reading",
            "Paper 2 — Directed Writing & Composition",
            "Component 3/4 — Coursework / Speaking (where applicable)",
        ],
    },
    {
        "file": "Cambridge-IGCSE-0990",
        "name": "Cambridge IGCSE 0990 (English Language 9–1)",
        "quals": "Cambridge IGCSE English Language – 9–1 (0990)",
        "scale": "IGCSE 9–1 (plus U)",
        "papers": [
            "Paper 1 — Reading",
            "Paper 2 — Directed Writing & Composition",
            "Component 3/4 — Coursework / Speaking (where applicable)",
        ],
    },
]

QTYPES = [
    "Reading – language analysis",
    "Reading – structure analysis",
    "Reading – evaluation / critical response",
    "Reading – summary / synthesis",
    "Reading – comparison",
    "Writing – creative / descriptive / narrative",
    "Writing – transactional / persuasive / discursive",
    "Literature – extract-based essay",
    "Literature – whole-text essay",
    "Literature – poetry (anthology / comparison)",
    "Literature – unseen poetry",
]
BANDS = ["U", "1–3", "4–5", "6–7", "8–9"]

TRACKER_COLS = [
    ("#", 0.4),
    ("Paper / Component", 1.7),
    ("Question type", 1.7),
    ("Target band", 0.7),
    ("Anon. script ref", 1.1),
    ("AI mark", 0.6),
    ("Teacher mark", 0.7),
    ("Δ (T−AI)", 0.6),
    ("Adjustment reason — WHY the AI mark was changed (the training signal)", 2.6),
    ("Approved + 'suitable for training' set? (Y/N)", 1.1),
    ("Moderator / date", 1.0),
]


def _landscape_narrow(doc):
    s = doc.sections[-1]
    s.orientation = WD_ORIENT.LANDSCAPE
    w, h = s.page_height, s.page_width
    s.page_width, s.page_height = w, h
    for m in ("top_margin", "bottom_margin", "left_margin", "right_margin"):
        setattr(s, m, Inches(0.5))


def _hr_box(doc, text, fill="F2F2F2"):
    p = doc.add_paragraph()
    r = p.add_run(text)
    r.bold = True
    r.font.size = Pt(11)
    from docx.oxml.ns import qn
    from docx.oxml import OxmlElement

    pPr = p._p.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:fill"), fill)
    pPr.append(shd)
    return p


def _set_widths(table, widths):
    table.autofit = False
    table.allow_autofit = False
    for row in table.rows:
        for i, c in enumerate(row.cells):
            c.width = Inches(widths[i])


def add_board_section(doc, b, first=False):
    if not first:
        doc.add_page_break()

    h = doc.add_heading(f"{b['name']} — Teacher Moderation Worksheet", level=1)
    sub = doc.add_paragraph()
    sub.add_run(b["quals"]).italic = True
    doc.add_paragraph(f"Grade scale: {b['scale']}    |    "
                      f"Target: ≥ {TARGET_PER_BOARD} dual-marked, teacher-approved "
                      f"scripts for this board, spread across papers/components.")

    _hr_box(doc, "STEP 0 — CONSENT (THE GATE). No consent → DO NOT approve for "
                 "training. This is the single biggest lever.")
    doc.add_paragraph(
        "For every script you include below, confirm BEFORE approving it for "
        "training:", style="Intense Quote")
    for t in [
        "☐  The student has given AI-processing consent (Settings ▸ Privacy ▸ AI).",
        "☐  Training-use consent is on (B2C: 'AI training opt-in'; B2B: school "
        "data-sharing enabled).",
        "☐  If the student is under 18 — verifiable parental/guardian consent is "
        "on record.",
        "☐  If ANY box is unticked: review for feedback if you wish, but DO NOT "
        "tick 'suitable for training' / do not approve into the corpus.",
    ]:
        doc.add_paragraph(t, style="List Bullet")

    doc.add_paragraph(
        "The mechanic:  corpus growth = (teacher-approved submissions) × "
        "(training toggle ON) × (consent satisfied). Each time you Approve a "
        "submission in /school/marking with 'suitable for training' set, it "
        "becomes eligible and is anonymised into the training corpus.")

    doc.add_heading("How to complete this worksheet", level=2)
    for t in [
        "Genuinely review every script — adjust the mark and feedback where the "
        "AI is wrong. Rubber-stamping produces worthless labels.",
        "ALWAYS fill the 'Adjustment reason' — that correction signal is the "
        "actual training value (it is stored in teacher_moderations).",
        "Spread your scripts across paper/component × question-type × grade band "
        "(use the coverage grid below). Don't let one cohort dominate.",
        f"Aim for ≥ {TARGET_PER_BOARD} dual-marked scripts for {b['name']} "
        "(threshold in evals/datasets/REAL-DATA-PROTOCOL.md for a defensible "
        "accuracy figure). Below that you have a pipeline, not a certifiable "
        "model signal.",
        f"This sheet holds {ROWS_PER_SHEET} rows — run as many copies as needed "
        "to reach the target.",
    ]:
        doc.add_paragraph(t, style="List Bullet")

    doc.add_heading("Collection tracker", level=2)
    headers = [c[0] for c in TRACKER_COLS]
    widths = [c[1] for c in TRACKER_COLS]
    tbl = doc.add_table(rows=1 + ROWS_PER_SHEET, cols=len(headers))
    tbl.style = "Table Grid"
    for i, txt in enumerate(headers):
        cell = tbl.rows[0].cells[i]
        cell.text = ""
        run = cell.paragraphs[0].add_run(txt)
        run.bold = True
        run.font.size = Pt(8)
    for r in range(1, 1 + ROWS_PER_SHEET):
        tbl.rows[r].cells[0].text = str(r)
        for i in range(len(headers)):
            for para in tbl.rows[r].cells[i].paragraphs:
                for run in para.runs:
                    run.font.size = Pt(8)
    _set_widths(tbl, widths)

    doc.add_paragraph()
    doc.add_heading("Coverage grid (tally each script — keep the spread balanced)",
                    level=2)
    cov = doc.add_table(rows=1 + len(QTYPES), cols=1 + len(BANDS))
    cov.style = "Table Grid"
    cov.rows[0].cells[0].text = "Question type \\ Grade band"
    cov.rows[0].cells[0].paragraphs[0].runs[0].bold = True
    for j, band in enumerate(BANDS):
        c = cov.rows[0].cells[1 + j]
        c.text = ""
        rr = c.paragraphs[0].add_run(band)
        rr.bold = True
    for i, qt in enumerate(QTYPES):
        cov.rows[1 + i].cells[0].text = qt
        for para in cov.rows[1 + i].cells[0].paragraphs:
            for run in para.runs:
                run.font.size = Pt(8)
    _set_widths(cov, [2.6] + [1.3] * len(BANDS))

    doc.add_paragraph()
    doc.add_heading("Moderator sign-off", level=2)
    for line in [
        "Moderator name: ______________________________________________",
        "Role / examining qualification: ________________________________",
        "Papers/components covered on this sheet: _______________________",
        "Scripts completed on this sheet: ______   Running total for "
        f"{b['name']}: ______ / {TARGET_PER_BOARD}",
        "I confirm consent (Step 0) was verified for EVERY script approved "
        "into training on this sheet.",
        "Signature: ____________________________     Date: ______________",
    ]:
        doc.add_paragraph(line)


def build_brief(doc):
    t = doc.add_heading("Smart IP — Teacher Moderation Drive", level=0)
    p = doc.add_paragraph()
    p.add_run(
        "Collecting clean, teacher-approved, anonymised marking data to train "
        "and validate The English Hub's AI marker. Controlled and human-"
        "reviewed — there is no autonomous retraining."
    ).italic = True

    doc.add_heading("Step 0 — Consent (the gate)", level=1)
    doc.add_paragraph(
        "Make AI-processing + training-use consent an explicit checkbox in "
        "student/school onboarding (and verifiable parental consent for "
        "under-18s). Without it, nothing is collectible. This is your single "
        "biggest lever — a record only enters the corpus when the student has "
        "BOTH the privacy flag (B2C 'AI training opt-in' / B2B school data-"
        "sharing) AND an explicit AI-processing consent, plus parental consent "
        "if a minor. The live pipeline enforces this and refuses to write a "
        "training row otherwise.")

    doc.add_heading("The mechanic", level=1)
    doc.add_paragraph(
        "Corpus growth = (teacher-approved submissions) × (training toggle on) "
        "× (consent satisfied). Every time a teacher hits Approve with "
        "'suitable for training' in /school/marking, that submission becomes "
        "eligible; prepareTrainingRecord anonymises it into the corpus.")

    doc.add_heading("Fastest, highest-quality path — a structured moderation "
                    "drive (recommended)", level=1)
    for t in [
        "Recruit 3–6 qualified English teachers/examiners (your own staff or "
        "contractors) with consent in place.",
        "Feed a targeted set through /marking (or /school/marking): spread "
        "across board × paper × question-type × grade band — don't let it skew "
        "to one cohort.",
        "Teachers genuinely review (edit the mark/feedback, fill the adjustment "
        "reason) — rubber-stamping produces worthless labels. The "
        "teacher_moderations table captures the correction signal that is the "
        "actual training value.",
        f"Target ≥ {TARGET_PER_BOARD} dual-marked scripts per board/paper (the "
        "threshold in evals/datasets/REAL-DATA-PROTOCOL.md for a defensible "
        "accuracy figure). Below that you have a pipeline but not a certifiable "
        "model signal.",
    ]:
        doc.add_paragraph(t, style="List Number")

    doc.add_heading("How to run it", level=1)
    for t in [
        "Give each moderator the worksheet for their board (separate .docx "
        "files accompany this pack — one per exam board).",
        "Verify Step 0 consent per script BEFORE ticking 'suitable for "
        "training'.",
        "Track progress in /admin/ai-marking and /admin/model-performance; "
        "export from /admin/training-data when a board hits its target; the "
        "evals/ harness then produces the real accuracy figure.",
        "Boards in this pack: AQA · Pearson Edexcel · OCR · Eduqas/WJEC · "
        "Cambridge IGCSE 0500 · Cambridge IGCSE 0990.",
    ]:
        doc.add_paragraph(t, style="List Bullet")

    # one-page board target summary
    doc.add_heading("Board targets at a glance", level=1)
    s = doc.add_table(rows=1 + len(BOARDS), cols=4)
    s.style = "Table Grid"
    for i, htxt in enumerate(["Exam board", "Qualifications", "Grade scale",
                              "Target (dual-marked, approved)"]):
        c = s.rows[0].cells[i]
        c.text = ""
        c.paragraphs[0].add_run(htxt).bold = True
    for i, b in enumerate(BOARDS):
        s.rows[1 + i].cells[0].text = b["name"]
        s.rows[1 + i].cells[1].text = b["quals"]
        s.rows[1 + i].cells[2].text = b["scale"]
        s.rows[1 + i].cells[3].text = f"≥ {TARGET_PER_BOARD}"


def main():
    # 1) Master pack: brief + every board section.
    master = Document()
    _landscape_narrow(master)
    build_brief(master)
    for i, b in enumerate(BOARDS):
        master.add_page_break()
        add_board_section(master, b, first=True)
    master_path = OUT / "00-Smart-IP-Moderation-Drive-Pack.docx"
    master.save(str(master_path))
    written = [master_path.name]

    # 2) One fillable worksheet per board (for hand-out).
    for b in BOARDS:
        d = Document()
        _landscape_narrow(d)
        add_board_section(d, b, first=True)
        path = OUT / f"{b['file']}-Moderation-Worksheet.docx"
        d.save(str(path))
        written.append(path.name)

    print("WROTE:")
    for w in written:
        print("  business-docs/smart-ip/moderation-drive/" + w)


if __name__ == "__main__":
    main()
