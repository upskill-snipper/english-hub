"""
Second-pass extraction: capture entries from agent outputs that use
markdown tables, numbered bold entries, and other non-Python-list formats.
"""
import os
import re
import glob

TASKS_DIR = r"C:\Users\calum\AppData\Local\Temp\claude\D--Coding\f25b6e54-8689-4e22-b0b0-0703d212885f\tasks"
EXISTING_FILE = r"D:\Coding\english-hub\additional_aspirational_data.py"
BUILD_FILE = r"D:\Coding\english-hub\build_gtm_workbook.py"
OUTPUT_FILE = r"D:\Coding\english-hub\additional_aspirational_data_v2.py"

def load_all_existing_names():
    """Load all names already in workbook + additional data."""
    names = set()
    for filepath in [BUILD_FILE, EXISTING_FILE]:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                for line in f:
                    match = re.search(r'"(.+?)"', line)
                    if match:
                        name = match.group(1).lower().strip()
                        if len(name) > 3 and name not in ('not started', 'email', 'dm', 'unknown', 'website', 'n/a'):
                            names.add(name)
        except:
            pass
    return names

def extract_bold_numbered_entries(text):
    """Extract entries in **1. Name** or **Name** format from markdown."""
    entries = []
    lines = text.split('\n')

    for i, line in enumerate(lines):
        line = line.strip()

        # Pattern: **N. Name** or **Name** at start of line, or ### N. Name
        patterns = [
            r'^\*\*\d+[\.\)]\s*(.+?)\*\*',  # **1. Name**
            r'^#{1,4}\s*\d+[\.\)]\s*(.+?)$',  # ### 1. Name
            r'^\d+[\.\)]\s*\*\*(.+?)\*\*',    # 1. **Name**
        ]

        for pat in patterns:
            m = re.match(pat, line)
            if m:
                name = m.group(1).strip().strip('*').strip()
                # Clean up name
                name = re.sub(r'\s*[-—]\s*$', '', name)
                name = re.sub(r'\s*\(.+?\)\s*$', '', name).strip()

                if name and len(name) > 3 and len(name) < 80:
                    # Try to find category context from nearby lines
                    category = "Agent Research"
                    for j in range(max(0, i-20), i):
                        prev = lines[j].strip()
                        if prev.startswith('##') or prev.startswith('###'):
                            cat_text = prev.lstrip('#').strip()
                            if len(cat_text) > 5 and len(cat_text) < 60:
                                category = cat_text

                    # Look for platform/followers in next few lines
                    platform = "Social"
                    followers = "Unknown"
                    why = ""
                    for j in range(i, min(len(lines), i+5)):
                        next_line = lines[j]
                        if 'platform' in next_line.lower() or 'youtube' in next_line.lower():
                            platform_match = re.search(r'(YouTube|TikTok|Instagram|Twitter|X|LinkedIn|Website|Facebook)', next_line, re.I)
                            if platform_match:
                                platform = platform_match.group(1)
                        if 'follower' in next_line.lower() or 'subscriber' in next_line.lower():
                            foll_match = re.search(r'([\d,.]+[KMB]?\+?)\s*(?:followers|subscribers|subs)', next_line, re.I)
                            if foll_match:
                                followers = foll_match.group(1)

                    entries.append({
                        'name': name,
                        'platform': platform,
                        'category': category,
                        'tier': 'Mid',
                        'followers': followers,
                        'why': why[:100],
                        'approach': 'Direct outreach',
                        'contact': 'Email',
                        'notes': '',
                    })
                break

    return entries

def extract_table_entries(text):
    """Extract entries from markdown tables."""
    entries = []
    lines = text.split('\n')

    for line in lines:
        line = line.strip()
        if not line.startswith('|'):
            continue

        cells = [c.strip() for c in line.split('|')]
        cells = [c for c in cells if c]  # Remove empty cells

        if len(cells) < 3:
            continue

        # Skip header/separator rows
        if cells[0].startswith('-') or cells[0].lower() in ('#', 'num', 'no', 'no.', 'name', 'school'):
            continue

        # First cell should be a number
        try:
            num = int(cells[0].strip())
        except (ValueError, IndexError):
            continue

        # Second cell is the name
        name = cells[1].strip().strip('*').strip()
        if not name or len(name) < 3 or name.startswith('-'):
            continue

        platform = cells[2].strip() if len(cells) > 2 else "Unknown"
        category = "Agent Research"
        followers = cells[3].strip() if len(cells) > 3 else "Unknown"

        entries.append({
            'name': name,
            'platform': platform[:50],
            'category': category,
            'tier': 'Mid',
            'followers': followers[:30],
            'why': '',
            'approach': 'Direct outreach',
            'contact': 'Email',
            'notes': cells[4].strip()[:80] if len(cells) > 4 else '',
        })

    return entries


def main():
    existing = load_all_existing_names()
    print(f"Existing names to skip: {len(existing)}")

    all_new = []
    seen = set(existing)

    output_files = glob.glob(os.path.join(TASKS_DIR, "*.output"))

    for filepath in output_files:
        try:
            with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
                text = f.read()

            if len(text) < 200 or "out of extra usage" in text.lower():
                continue

            # Try bold-numbered extraction
            entries = extract_bold_numbered_entries(text)
            for e in entries:
                key = e['name'].lower().strip()
                if key not in seen and len(key) > 3:
                    seen.add(key)
                    all_new.append(e)

            # Try table extraction
            entries = extract_table_entries(text)
            for e in entries:
                key = e['name'].lower().strip()
                if key not in seen and len(key) > 3:
                    seen.add(key)
                    all_new.append(e)

        except Exception as ex:
            pass

    print(f"Additional entries found: {len(all_new)}")

    if not all_new:
        print("No additional entries to add.")
        return

    # Append to existing file
    with open(EXISTING_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the closing bracket
    content = content.rstrip()
    if content.endswith(']'):
        content = content[:-1]  # Remove closing bracket

    with open(EXISTING_FILE, 'w', encoding='utf-8') as f:
        f.write(content)

        # Get current max number
        nums = re.findall(r'\[(\d+),', content)
        max_num = max(int(n) for n in nums) if nums else 0

        f.write(f"\n    # === Additional Pass 2 Entries ===\n")
        for i, e in enumerate(all_new):
            num = max_num + i + 1
            name = e['name'].replace('"', '\\"')
            platform = e['platform'].replace('"', '\\"')[:50]
            cat = e['category'].replace('"', '\\"')[:60]
            tier = e.get('tier', 'Mid')
            followers = e.get('followers', 'Unknown').replace('"', '\\"')[:30]
            why = e.get('why', '').replace('"', '\\"')[:100]
            approach = e.get('approach', 'Direct outreach').replace('"', '\\"')[:80]
            contact = e.get('contact', 'Email').replace('"', '\\"')[:30]
            notes = e.get('notes', '').replace('"', '\\"')[:100]

            f.write(f'    [{num}, "{name}", "{platform}", "{cat}", "{tier}", "{followers}", "{why}", "{approach}", "{contact}", "Not Started", "{notes}"],\n')

        f.write("]\n")

    print(f"Appended {len(all_new)} entries to {EXISTING_FILE}")
    print(f"New total in additional data: {max_num + len(all_new)}")


if __name__ == '__main__':
    main()
