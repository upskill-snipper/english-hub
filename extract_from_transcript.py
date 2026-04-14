"""Extract structured entries from the conversation transcript JSONL."""
import json
import re

TRANSCRIPT = r"C:\Users\calum\.claude\projects\D--Coding\632820e5-9f51-4c37-af19-e314f4c32c3b.jsonl"
EXISTING_DATA = r"D:\Coding\english-hub\additional_aspirational_data.py"
OUTPUT = r"D:\Coding\english-hub\additional_aspirational_data.py"

# Categories already in the existing file
def get_existing_names():
    names = set()
    try:
        with open(EXISTING_DATA, 'r', encoding='utf-8') as f:
            for line in f:
                m = re.search(r'\[\d+,\s*"(.+?)"', line)
                if m:
                    names.add(m.group(1).lower().strip())
    except:
        pass

    # Also get names from build_gtm_workbook.py
    try:
        with open(r"D:\Coding\english-hub\build_gtm_workbook.py", 'r', encoding='utf-8') as f:
            for line in f:
                m = re.search(r'\[\d+,\s*"(.+?)"', line)
                if m:
                    names.add(m.group(1).lower().strip())
    except:
        pass

    return names

def extract_entries_from_text(text):
    """Extract [num, "Name", ...] entries from text."""
    entries = []
    # Match full list entries: [num, "field1", "field2", ...]
    pattern = r'\[(\d+),\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]*)"\]'

    for m in re.finditer(pattern, text):
        entries.append({
            'name': m.group(2),
            'platform': m.group(3),
            'category': m.group(4),
            'tier': m.group(5),
            'followers': m.group(6),
            'why': m.group(7),
            'approach': m.group(8),
            'contact': m.group(9),
            'status': m.group(10),
            'notes': m.group(11),
        })
    return entries

def main():
    existing_names = get_existing_names()
    print(f"Existing names to deduplicate against: {len(existing_names)}")

    all_entries = []
    seen_names = set(existing_names)

    # Read JSONL transcript
    with open(TRANSCRIPT, 'r', encoding='utf-8', errors='replace') as f:
        for line_num, line in enumerate(f, 1):
            try:
                record = json.loads(line.strip())
            except:
                continue

            # Extract text content from various message formats
            text_parts = []

            # Handle different JSON structures
            if isinstance(record, dict):
                # Check for 'message' field
                msg = record.get('message', record)
                content = msg.get('content', '')

                if isinstance(content, str):
                    text_parts.append(content)
                elif isinstance(content, list):
                    for block in content:
                        if isinstance(block, dict):
                            if block.get('type') == 'text':
                                text_parts.append(block.get('text', ''))
                            elif block.get('type') == 'tool_result':
                                sub = block.get('content', '')
                                if isinstance(sub, str):
                                    text_parts.append(sub)
                                elif isinstance(sub, list):
                                    for s in sub:
                                        if isinstance(s, dict) and s.get('type') == 'text':
                                            text_parts.append(s.get('text', ''))

            for text in text_parts:
                # Unescape JSON string escapes
                text = text.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')

                entries = extract_entries_from_text(text)
                for e in entries:
                    name_key = e['name'].lower().strip()
                    if name_key not in seen_names and len(name_key) > 2:
                        seen_names.add(name_key)
                        all_entries.append(e)

    print(f"New unique entries found in transcript: {len(all_entries)}")

    # Show categories found
    categories = {}
    for e in all_entries:
        cat = e['category']
        if cat not in categories:
            categories[cat] = 0
        categories[cat] += 1

    for cat in sorted(categories.keys()):
        print(f"  {cat}: {categories[cat]}")

    if not all_entries:
        print("No new entries found. Nothing to add.")
        return

    # Read existing file content
    existing_content = ""
    try:
        with open(EXISTING_DATA, 'r', encoding='utf-8') as f:
            existing_content = f.read()
    except:
        pass

    # Find the last entry number in existing file
    last_nums = re.findall(r'\[(\d+),', existing_content)
    next_num = max(int(n) for n in last_nums) + 1 if last_nums else 1

    # Remove the closing bracket
    existing_content = existing_content.rstrip()
    if existing_content.endswith(']'):
        existing_content = existing_content[:-1].rstrip()

    # Append new entries
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write(existing_content)
        f.write('\n')

        # Group by category
        cat_entries = {}
        for e in all_entries:
            cat = e['category']
            if cat not in cat_entries:
                cat_entries[cat] = []
            cat_entries[cat].append(e)

        for cat in sorted(cat_entries.keys()):
            f.write(f'    # === {cat} (New) ===\n')
            for e in cat_entries[cat]:
                name = e['name'].replace('"', '\\"')
                platform = e['platform'].replace('"', '\\"')[:50]
                category = e['category'].replace('"', '\\"')
                tier = e['tier'].replace('"', '\\"') if e['tier'] else 'Mid'
                followers = e['followers'].replace('"', '\\"')[:30] if e['followers'] else 'Unknown'
                why = e['why'].replace('"', '\\"')[:100] if e['why'] else ''
                approach = e['approach'].replace('"', '\\"')[:80] if e['approach'] else 'Direct outreach'
                contact = e['contact'].replace('"', '\\"')[:30] if e['contact'] else 'Email'
                notes = e['notes'].replace('"', '\\"')[:100] if e['notes'] else ''

                f.write(f'    [{next_num}, "{name}", "{platform}", "{category}", "{tier}", "{followers}", "{why}", "{approach}", "{contact}", "Not Started", "{notes}"],\n')
                next_num += 1
            f.write('\n')

        f.write(']\n')

    print(f"\nTotal entries now in file: {next_num - 1}")
    print(f"New entries added: {len(all_entries)}")

if __name__ == '__main__':
    main()
