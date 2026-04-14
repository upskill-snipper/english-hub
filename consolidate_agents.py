"""
Consolidate agent research outputs into the GTM workbook.
Reads all agent output files, extracts named entries, deduplicates,
and generates additional_aspirational_data.py for import.
"""
import os
import re
import glob

TASKS_DIR = r"C:\Users\calum\AppData\Local\Temp\claude\D--Coding\632820e5-9f51-4c37-af19-e314f4c32c3b\tasks"
OUTPUT_FILE = r"D:\Coding\english-hub\additional_aspirational_data.py"

def extract_entries_from_text(text):
    """Extract list entries from agent output text."""
    entries = []

    # Try to find Python list entries: [NUM, "Name", ...]
    # Match lines like [1, "Something", "Platform", ...]
    pattern = r'\[\d+,\s*"([^"]+)"'

    lines = text.split('\n')
    for line in lines:
        line = line.strip()
        # Skip empty, comment, or non-data lines
        if not line or line.startswith('#') or line.startswith('```'):
            continue

        # Check if line looks like a Python list entry
        match = re.match(r'\s*\[\s*\d+\s*,\s*"(.+?)"', line)
        if match:
            name = match.group(1)
            # Try to extract category (field 4, index 3)
            fields = re.findall(r'"([^"]*)"', line)
            if len(fields) >= 3:
                platform = fields[1] if len(fields) > 1 else "Unknown"
                category = fields[2] if len(fields) > 2 else "Unknown"
                tier = fields[3] if len(fields) > 3 else "Mid"
                followers = fields[4] if len(fields) > 4 else "Unknown"
                why = fields[5] if len(fields) > 5 else ""
                approach = fields[6] if len(fields) > 6 else ""
                contact = fields[7] if len(fields) > 7 else "Email"
                notes = fields[9] if len(fields) > 9 else ""

                entries.append({
                    'name': name,
                    'platform': platform,
                    'category': category,
                    'tier': tier,
                    'followers': followers,
                    'why': why,
                    'approach': approach,
                    'contact': contact,
                    'notes': notes,
                })
        else:
            # Try markdown table format: | NUM | **Name** | ...
            table_match = re.match(r'\|\s*\d+\s*\|\s*\*?\*?(.+?)\*?\*?\s*\|', line)
            if table_match:
                name = table_match.group(1).strip().strip('*')
                if name and name != '---' and name != 'Name' and not name.startswith('--'):
                    # Extract remaining fields from table
                    cells = [c.strip() for c in line.split('|')[1:] if c.strip()]
                    if len(cells) >= 3:
                        entries.append({
                            'name': name,
                            'platform': cells[2] if len(cells) > 2 else "Unknown",
                            'category': "Agent Research",
                            'tier': "Mid",
                            'followers': cells[3] if len(cells) > 3 else "Unknown",
                            'why': cells[4] if len(cells) > 4 else "",
                            'approach': "Direct outreach",
                            'contact': "Email",
                            'notes': cells[5] if len(cells) > 5 else "",
                        })
            else:
                # Try numbered list format: **1. Name** or 1. **Name**
                numbered_match = re.match(r'\*?\*?\d+\.?\s*\*?\*?\s*(.+?)(?:\*\*|\s*[-—])', line)
                if numbered_match and '|' not in line:
                    name = numbered_match.group(1).strip().strip('*').strip()
                    if name and len(name) > 2 and len(name) < 100:
                        # Check it's not a generic word
                        skip_words = ['the', 'and', 'or', 'for', 'with', 'this', 'that', 'what', 'why', 'how']
                        if name.lower() not in skip_words:
                            entries.append({
                                'name': name,
                                'platform': "Social",
                                'category': "Agent Research",
                                'tier': "Mid",
                                'followers': "Unknown",
                                'why': "",
                                'approach': "Direct outreach",
                                'contact': "Email",
                                'notes': "",
                            })

    return entries


def load_existing_names(build_file):
    """Load existing entry names from build_gtm_workbook.py to deduplicate."""
    names = set()
    with open(build_file, 'r', encoding='utf-8') as f:
        for line in f:
            match = re.search(r'\[\d+,\s*"(.+?)"', line)
            if match:
                names.add(match.group(1).lower().strip())
    return names


def main():
    print("Loading existing names from workbook...")
    existing = load_existing_names(r"D:\Coding\english-hub\build_gtm_workbook.py")
    print(f"Found {len(existing)} existing entries")

    # Also check the separate .py files created by agents
    py_files = glob.glob(r"D:\Coding\uk_*.py") + glob.glob(r"D:\Coding\gcc_*.py") + \
               glob.glob(r"D:\Coding\african_*.py") + glob.glob(r"D:\Coding\mena_*.py") + \
               glob.glob(r"D:\Coding\sea_*.py")

    all_entries = []
    seen_names = set(existing)

    # Process agent output files
    output_files = glob.glob(os.path.join(TASKS_DIR, "*.output"))
    print(f"Processing {len(output_files)} agent output files...")

    for filepath in output_files:
        try:
            with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
                text = f.read()

            if len(text) < 100:  # Skip empty/failed results
                continue
            if "out of extra usage" in text.lower():
                continue
            if "cannot reliably complete" in text.lower() and len(text) < 2000:
                continue

            entries = extract_entries_from_text(text)
            for e in entries:
                name_key = e['name'].lower().strip()
                if name_key not in seen_names and len(name_key) > 2:
                    seen_names.add(name_key)
                    all_entries.append(e)
        except Exception as ex:
            pass  # Skip problematic files

    # Process separate .py data files
    print(f"Processing {len(py_files)} separate Python data files...")
    for filepath in py_files:
        try:
            with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
                text = f.read()
            entries = extract_entries_from_text(text)
            for e in entries:
                name_key = e['name'].lower().strip()
                if name_key not in seen_names and len(name_key) > 2:
                    seen_names.add(name_key)
                    all_entries.append(e)
        except Exception as ex:
            pass

    print(f"\nTotal new unique entries extracted: {len(all_entries)}")

    # Write output file
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("# Auto-generated from agent research outputs\n")
        f.write("# Total entries: {}\n\n".format(len(all_entries)))
        f.write("additional_entries = [\n")

        # Group by category
        categories = {}
        for e in all_entries:
            cat = e['category']
            if cat not in categories:
                categories[cat] = []
            categories[cat].append(e)

        num = 1
        for cat in sorted(categories.keys()):
            f.write(f"    # === {cat} ===\n")
            for e in categories[cat]:
                # Escape quotes in strings
                name = e['name'].replace('"', '\\"')
                platform = e['platform'].replace('"', '\\"')[:50]
                tier = e['tier'].replace('"', '\\"') if e['tier'] else 'Mid'
                followers = e['followers'].replace('"', '\\"')[:30] if e['followers'] else 'Unknown'
                why = e['why'].replace('"', '\\"')[:100] if e['why'] else ''
                approach = e['approach'].replace('"', '\\"')[:80] if e['approach'] else 'Direct outreach'
                contact = e['contact'].replace('"', '\\"')[:30] if e['contact'] else 'Email'
                notes = e['notes'].replace('"', '\\"')[:100] if e['notes'] else ''

                f.write(f'    [{num}, "{name}", "{platform}", "{cat}", "{tier}", "{followers}", "{why}", "{approach}", "{contact}", "Not Started", "{notes}"],\n')
                num += 1
            f.write('\n')

        f.write("]\n")

    print(f"Written {num-1} entries to {OUTPUT_FILE}")
    print(f"Categories: {len(categories)}")
    for cat in sorted(categories.keys()):
        print(f"  {cat}: {len(categories[cat])} entries")


if __name__ == '__main__':
    main()
