# Screenshots take-list — for `04-feature-showcase.md`

Take these screenshots from the live site, drop them in this folder named exactly as in column 1, then re-export `04-feature-showcase.md` to PDF.

## Capture settings (all screenshots)

- **Browser:** Chrome (any modern browser works; consistent rendering matters)
- **Window:** 1200px wide minimum so layouts render at desktop breakpoint
- **Theme:** Light theme (better print/PDF contrast than dark theme — toggle in the bottom-right of the app)
- **Tool:** macOS Cmd+Shift+5 → "Capture Selected Area" / Windows Win+Shift+S → "Rectangular Snip" / browser dev-tools (F12 → Cmd+Shift+P → "Capture full size screenshot") for full-page captures
- **Format:** PNG for crisp text; compress through https://tinypng.com before placing in this folder to keep PDF file size <5MB
- **Resolution:** 1200×900 minimum for the dashboard screens; 1200×600 for narrower views
- **Privacy:** if any screenshot includes a real user name, email, or other PII, **blur or replace it** before sharing. Use the seeded demo accounts where possible.

## The list

| # | Filename | Source URL | Notes |
|---|---|---|---|
| 1 | `01-student-dashboard.png` | https://theenglishhub.app/demo/student | Logged-in student view; "Year 11 IGCSE Edexcel" cohort if presets allow |
| 2 | `02-ai-marking-output.png` | https://theenglishhub.app/demo/student/practice | Submit a 600-word sample essay, wait ~60s, screenshot the feedback page |
| 3 | `03-teacher-class-view.png` | https://theenglishhub.app/demo/teacher | Top of teacher dashboard |
| 4 | `04-teacher-essay-marking.png` | https://theenglishhub.app/demo/teacher/essays | Open any sample essay → side-by-side view |
| 5 | `05-school-analytics.png` | https://theenglishhub.app/demo/school/analytics | Top of page |
| 6 | `06-parent-weekly-email.png` | Trigger from `/dashboard/parent` in demo mode | The email render preview, not the dashboard itself |
| 7 | `07-school-engagement.png` | https://theenglishhub.app/demo/school/engagement | Full page |
| 8 | `08-mock-exam-library.png` | https://theenglishhub.app/mock-exams | Top of page |
| 9 | `09-ks3-hub.png` | https://theenglishhub.app/ks3 | Top of page |
| 10 | `10-eal-hub.png` | https://theenglishhub.app/eal | Top of page |
| 11 | `11-pdppl-consent-banner.png` | https://theenglishhub.app/auth/register | Set country dropdown to "Qatar" → screenshot the amber-bordered consent panel that appears |
| 12 | `12-privacy-dashboard.png` | https://theenglishhub.app/dashboard/consent | Full page |

## After taking screenshots

1. Drop each PNG in this folder with the **exact filename** in column 2
2. Open `04-feature-showcase.md` in any markdown editor
3. Each `[SCREENSHOT: 01-student-dashboard.png]` line becomes an actual image — markdown image syntax is `![alt text](./screenshots/01-student-dashboard.png)` but the Markdown PDF extension in VS Code will auto-detect the file by name if you keep the placeholder format
4. **For the best PDF output:** replace each placeholder line with `![](./screenshots/01-student-dashboard.png)` before exporting
5. Export to PDF (see main `README.md` for export options)

## Test the file size before sending

After export, check the PDF size. Target <5MB for fast WhatsApp share. If it's over:
- Re-compress each PNG through https://tinypng.com (typically 70%+ reduction)
- Or save screenshots as JPEG at quality 80 instead of PNG
- Or split the feature showcase into two PDFs (parts 1 & 2 across slides 1–6 and 7–12)
