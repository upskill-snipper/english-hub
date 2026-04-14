"""
Consolidate all outreach messages from agent results and scattered files,
then integrate into the workbook builder as a new 'Outreach Messages' sheet.
"""
import re
import os
import ast

OUTPUT_FILE = r"D:\Coding\english-hub\outreach_messages.py"

def extract_dict_from_text(text):
    """Extract Python dict from text that may contain markdown code blocks."""
    messages = {}

    # Try to find dict assignments like: outreach_messages = { ... }
    # or just bare dicts { ... }

    # Remove markdown code blocks
    text = re.sub(r'```python\s*', '', text)
    text = re.sub(r'```\s*', '', text)

    # Find all key-value pairs where key is a quoted string and value is a triple-quoted string
    # Pattern: "Category Name": """..."""
    pattern = r'"([^"]+)":\s*"""(.*?)"""'
    for m in re.finditer(pattern, text, re.DOTALL):
        cat = m.group(1)
        msg = m.group(2).strip()
        if len(msg) > 50:  # Minimum viable message
            messages[cat] = msg

    return messages

def main():
    all_messages = {}

    # 1. Read from task output files (agent results in conversation)
    tasks_dir = r"C:\Users\calum\AppData\Local\Temp\claude\D--Coding\632820e5-9f51-4c37-af19-e314f4c32c3b\tasks"
    if os.path.exists(tasks_dir):
        for fname in os.listdir(tasks_dir):
            fpath = os.path.join(tasks_dir, fname)
            if fname.endswith('.output') and os.path.getsize(fpath) > 100:
                try:
                    with open(fpath, 'r', encoding='utf-8', errors='replace') as f:
                        content = f.read()
                    if 'outreach' in content.lower() or 'Subject:' in content or 'Dear {' in content or 'Hey {' in content:
                        msgs = extract_dict_from_text(content)
                        if msgs:
                            all_messages.update(msgs)
                except:
                    pass

    # 2. Read from known file locations where agents wrote
    for fpath in [
        r"D:\Coding\outreach_messages.py",
        r"D:\Coding\english_hub_outreach.py",
        r"C:\Users\calum\outreach_messages.py",
        r"D:\Coding\english-hub\outreach_messages.py",
    ]:
        if os.path.exists(fpath) and os.path.getsize(fpath) > 100:
            try:
                with open(fpath, 'r', encoding='utf-8', errors='replace') as f:
                    content = f.read()
                msgs = extract_dict_from_text(content)
                if msgs:
                    all_messages.update(msgs)
            except:
                pass

    # 3. Read from transcript for any messages in task notifications
    transcript = r"C:\Users\calum\.claude\projects\D--Coding\632820e5-9f51-4c37-af19-e314f4c32c3b.jsonl"
    if os.path.exists(transcript):
        try:
            with open(transcript, 'r', encoding='utf-8', errors='replace') as f:
                for line in f:
                    if 'Subject:' in line and ('Dear {' in line or 'Hey {' in line):
                        # Unescape
                        text = line.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                        msgs = extract_dict_from_text(text)
                        if msgs:
                            all_messages.update(msgs)
        except:
            pass

    print(f"Total outreach message templates found: {len(all_messages)}")
    for cat in sorted(all_messages.keys()):
        preview = all_messages[cat][:60].replace('\n', ' ')
        print(f"  {cat}: {preview}...")

    # Write consolidated file
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write('# Outreach Messages for The English Hub GTM Campaign\n')
        f.write('# Auto-consolidated from agent research\n')
        f.write(f'# Total templates: {len(all_messages)}\n\n')
        f.write('ENGLISH_VALUE_PROP = """English is not just another subject - it is the foundation of all learning. ')
        f.write('It is the language of international business, the gateway to higher education worldwide, ')
        f.write('and now, critically, the key to unlocking AI. Students who master English don\'t just pass exams - ')
        f.write('they gain the ability to communicate, think critically, and compete globally. ')
        f.write('Without strong English skills, students are limiting not just their grades, ')
        f.write('but their entire future prospects."""\n\n')
        f.write('outreach_messages = {\n')

        for cat in sorted(all_messages.keys()):
            msg = all_messages[cat].replace('\\', '\\\\').replace('"""', '\\"\\"\\"')
            f.write(f'    "{cat}": """{msg}""",\n\n')

        f.write('}\n')

    print(f"\nConsolidated file written to: {OUTPUT_FILE}")
    return len(all_messages)

if __name__ == '__main__':
    main()
