"""Add batch 4 - family/education magazines"""
import re

DATAFILE = r"D:\Coding\english-hub\additional_aspirational_data.py"
BUILD_FILE = r"D:\Coding\english-hub\build_gtm_workbook.py"

def get_existing_names():
    names = set()
    for f in [DATAFILE, BUILD_FILE]:
        try:
            with open(f, 'r', encoding='utf-8') as fh:
                for line in fh:
                    m = re.search(r'\[\d+,\s*"(.+?)"', line)
                    if m:
                        names.add(m.group(1).lower().strip())
        except:
            pass
    return names

NEW_ENTRIES = [
    ["Good Schools Guide", "Website & Print", "UK Family & Education Publications", "Tier 1", "500K+ parents annually", "Comprehensive school comparison and selection guide", "Advisory content partnerships", "Editorial team contact", "Not Started", "Leading impartial school advice"],
    ["TES", "Magazine & Digital", "UK Family & Education Publications", "Tier 1", "500K+ monthly visitors", "Resources, news and analysis for teachers and parents", "Educational partnership content", "Media enquiries", "Not Started", "Largest teacher/education platform"],
    ["Primary Times", "Magazine & Website", "UK Family & Education Publications", "Tier 2", "200K+ families quarterly", "Primary school focused parenting magazine", "Advertorial and local features", "Local editions contact", "Not Started", "Primary education specialist"],
    ["Families Magazine", "Magazine & Digital", "UK Family & Education Publications", "Tier 2", "250K+ readers", "General family lifestyle and parenting content", "Family lifestyle partnerships", "Editor contact", "Not Started", "Mainstream family magazine"],
    ["Junior Magazine", "Magazine & Website", "UK Family & Education Publications", "Tier 2", "180K+ readers quarterly", "Children fashion, travel and lifestyle for affluent families", "Brand partnerships", "Advertising contact", "Not Started", "Premium family lifestyle"],
    ["Mother & Baby", "Magazine & Digital", "UK Family & Education Publications", "Tier 1", "450K+ readers/month", "UK no.1 pregnancy, baby and early parenting resource", "Parenting advice partnerships", "Editorial submissions", "Not Started", "Largest early years platform"],
    ["The Green Parent", "Magazine & Digital", "UK Family & Education Publications", "Tier 2", "120K+ readers quarterly", "Natural, eco-conscious parenting and education", "Sustainability content partnerships", "Editor contact", "Not Started", "Eco-conscious parenting"],
    ["JUNO Magazine", "Magazine & Digital", "UK Family & Education Publications", "Tier 2", "100K+ reach", "Natural parenting, home education, nutrition", "Home education partnerships", "Editorial team", "Not Started", "Alternative approaches specialist"],
    ["FQ Magazine", "Digital Publication", "UK Family & Education Publications", "Tier 2", "85K+ readers", "Essential online lifestyle magazine for fathers", "Father-focused content partnerships", "Editor contact", "Not Started", "Leading publication for fathers"],
    ["SEN Magazine", "Magazine & Digital", "UK Family & Education Publications", "Tier 2", "110K+ SEND parents", "Leading magazine for special educational needs", "SEND parenting partnerships", "Editorial contact", "Not Started", "Specialist SEND resource"],
    ["Special Needs Jungle", "Digital Blog", "UK Family & Education Publications", "Tier 2", "200K+ SEND parents annually", "Parent-led SEND news, resources and campaigns", "SEND advocacy partnerships", "Editor contact", "Not Started", "Grassroots SEND platform"],
    ["Independent School Parent Magazine", "Magazine & Digital", "UK Family & Education Publications", "Tier 1", "180K+ affluent parents", "Guide to Britain independent schools", "Independent school partnerships", "Editor contact", "Not Started", "Leading independent sector publication"],
    ["Nursery World", "Magazine & Digital", "UK Family & Education Publications", "Tier 2", "100K+ professionals", "Fortnightly early years education magazine", "Early years partnerships", "Editor contact", "Not Started", "Leading early years publication"],
    ["Sunday Times Parent Power Guide", "Annual Print & Digital", "UK Family & Education Publications", "Tier 1", "400K+ parents annually", "Authoritative school rankings across UK", "School partnership placements", "Editorial contact", "Not Started", "Most influential school selection guide"],
    ["The Education Hub", "Government Website", "UK Family & Education Publications", "Tier 1", "300K+ monthly visitors", "UK government education resource for parents", "Government education partnerships", "Enquiries contact", "Not Started", "Official UK govt education resource"],
    ["BROOD Magazine", "Magazine & Digital", "UK Family & Education Publications", "Tier 2", "130K+ working parents", "Parenting and business for entrepreneurial parents", "Working parent partnerships", "Advertising contact", "Not Started", "Ambitious working parents focus"],
    ["Twins Trust", "Website & Magazine", "UK Family & Education Publications", "Tier 2", "120K+ families", "Support and education guidance for multiple birth families", "Multiple birth content partnerships", "Communications contact", "Not Started", "Twins/multiples specialist"],
    ["Happy Families", "Digital Magazine", "UK Family & Education Publications", "Tier 2", "1M+ visitors", "Weekly updated family magazine covering parenting topics", "Advertorial and family content", "Editor contact", "Not Started", "25 years active online"],
]

def main():
    names = get_existing_names()
    print(f"Existing names: {len(names)}")

    with open(DATAFILE, 'r', encoding='utf-8') as f:
        content = f.read()

    nums = re.findall(r'\[(\d+),', content)
    next_num = max(int(n) for n in nums) + 1

    content = content.rstrip()
    if content.endswith(']'):
        content = content[:-1].rstrip()

    added = 0
    lines = []

    for e in NEW_ENTRIES:
        name_key = e[0].lower().strip()
        if name_key not in names and len(name_key) > 2:
            names.add(name_key)
            line = '    [{}, "{}", "{}", "{}", "{}", "{}", "{}", "{}", "{}", "{}", "{}"],\n'.format(
                next_num, e[0].replace('"', '\\"'), e[1], e[2], e[3], e[4],
                e[5][:100].replace('"', '\\"'), e[6][:80].replace('"', '\\"'),
                e[7][:30].replace('"', '\\"'), e[8], e[9][:100].replace('"', '\\"'))
            lines.append(line)
            next_num += 1
            added += 1

    with open(DATAFILE, 'w', encoding='utf-8') as f:
        f.write(content)
        f.write('\n    # === UK Family & Education Publications (Batch 4) ===\n')
        for line in lines:
            f.write(line)
        f.write('\n]\n')

    print(f"Added: {added}")
    print(f"Total entries now: {next_num - 1}")

if __name__ == '__main__':
    main()
