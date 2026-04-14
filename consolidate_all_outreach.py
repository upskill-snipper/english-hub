"""
Final consolidation of ALL outreach messages from all sources into outreach_messages.py
"""
import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

OUTPUT_FILE = r"D:\Coding\english-hub\outreach_messages.py"

all_messages = {}

# 1. Read existing consolidated file
try:
    with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    pattern = r'"([^"]+)":\s*"""(.*?)"""'
    for m in re.finditer(pattern, content, re.DOTALL):
        cat = m.group(1)
        msg = m.group(2).strip()
        if len(msg) > 50 and cat not in ('content', 'message'):
            all_messages[cat] = msg
    print(f"From existing outreach_messages.py: {len(all_messages)} templates")
except:
    pass

# 2. Read from batch files
for batch_file, var_name in [
    (r"D:\Coding\english-hub\outreach_all_missing.py", "all_missing_messages"),
    (r"D:\Coding\english-hub\outreach_batch_a.py", "batch_a_messages"),
    (r"D:\Coding\english-hub\outreach_batch_b.py", "batch_b_messages"),
    (r"D:\Coding\english-hub\outreach_batch_c.py", "batch_c_messages"),
    (r"D:\Coding\outreach_messages.py", "outreach_messages"),
    (r"D:\Coding\english_hub_outreach.py", "outreach_messages"),
    (r"C:\Users\calum\outreach_messages.py", "outreach_messages"),
]:
    try:
        with open(batch_file, 'r', encoding='utf-8') as f:
            content = f.read()
        pattern = r'"([^"]+)":\s*"""(.*?)"""'
        count = 0
        for m in re.finditer(pattern, content, re.DOTALL):
            cat = m.group(1)
            msg = m.group(2).strip()
            if len(msg) > 50 and cat not in ('content', 'message'):
                if cat not in all_messages:
                    all_messages[cat] = msg
                    count += 1
        print(f"From {batch_file}: {count} new templates")
    except FileNotFoundError:
        print(f"Not found: {batch_file}")
    except Exception as e:
        print(f"Error reading {batch_file}: {e}")

print(f"\nTotal unique outreach templates: {len(all_messages)}")
for cat in sorted(all_messages.keys()):
    preview = all_messages[cat][:50].replace('\n', ' ')
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
