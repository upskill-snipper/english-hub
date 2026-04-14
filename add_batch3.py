"""Add batch 3 agent results - family vloggers, parent communities, parenting TikTok"""
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
    # === UK Family Vloggers & YouTube Parents ===
    ["The Ingham Family", "YouTube", "UK Family Vloggers & YouTube Parents", "Tier 1", "1.37M subscribers", "Family daily vlogs with relatable parenting content", "Direct contact via YouTube", "YouTube messaging", "Not Started", "Children aged 1-19"],
    ["Family Fizz", "YouTube", "UK Family Vloggers & YouTube Parents", "Tier 1", "1.2M+ subscribers", "Fun family challenges and lifestyle content", "YouTube community posts", "YouTube messaging", "Not Started", "Positive parenting approach"],
    ["SacconeJolys", "YouTube", "UK Family Vloggers & YouTube Parents", "Tier 1", "1.6M subscribers", "Family vlogs showing parenting journey", "YouTube channel contact", "YouTube messaging", "Not Started", "Irish-American family based in Surrey"],
    ["The Radford Family", "YouTube/Instagram", "UK Family Vloggers & YouTube Parents", "Tier 1", "400K+ YouTube", "UK largest family (22 children) - parenting logistics", "Instagram/YouTube", "YouTube messaging", "Not Started", "School routines, meal prep content"],
    ["The Kabs Family", "YouTube/Instagram", "UK Family Vloggers & YouTube Parents", "Tier 1", "1.3M YouTube", "Energetic parenting content with family challenges", "YouTube/Instagram messaging", "Social media DM", "Not Started", "Multi-platform family content"],
    ["Louise Pentland", "YouTube/Podcast", "UK Family Vloggers & YouTube Parents", "Tier 1", "2.17M YouTube", "Motherhood and lifestyle content, parenting podcast", "Podcast/YouTube contact", "YouTube messaging", "Not Started", "Pioneer of UK parenting content"],
    ["Mrs Hinch (Sophie Hinchliffe)", "Instagram/YouTube", "UK Family Vloggers & YouTube Parents", "Tier 1", "3M+ followers", "Cleaning, home organization, family lifestyle", "Instagram messaging", "Instagram DM", "Not Started", "Bestselling author, mother of two"],
    ["Channel Mum", "YouTube", "UK Family Vloggers & YouTube Parents", "Tier 2", "500K+ subscribers", "Collaborative platform of multiple mummy vloggers", "YouTube channel", "YouTube messaging", "Not Started", "Network of UK mum vloggers"],
    ["Norris Nuts", "YouTube", "UK Family Vloggers & YouTube Parents", "Tier 1", "7.7M+ subscribers", "Australian family, ultra-popular with UK teens", "YouTube/Instagram", "Instagram messaging", "Not Started", "High-energy challenges"],
    ["LDN Family", "YouTube", "UK Family Vloggers & YouTube Parents", "Tier 2", "500K+ subscribers", "London-based parenting duo, heartfelt moments", "YouTube channel contact", "YouTube messaging", "Not Started", "Young family in London"],

    # === UK Parent Communities & School Networks ===
    ["Mumsnet", "Online Forum", "UK Parent Communities & School Networks", "Tier 1", "1.5M+ monthly", "Largest UK parenting community with education sections", "Forum participation, sponsored content", "advertise@mumsnet.com", "Not Started", "Established 1999, highly influential"],
    ["Netmums", "Online Community", "UK Parent Communities & School Networks", "Tier 1", "2M+ members", "Major parent support with school choice guides", "Local event sponsorship, advertorials", "partnerships@netmums.com", "Not Started", "Strong local community focus"],
    ["Peanut App", "Mobile App", "UK Parent Communities & School Networks", "Tier 1", "500K+ users", "App-based parent networking with education groups", "In-app partnerships, branded communities", "partnership@peanutapp.com", "Not Started", "Growing platform for younger parents"],
    ["ClassList App", "Mobile App", "UK Parent Communities & School Networks", "Tier 1", "250K+ users", "Parent-to-parent communication for class organization", "School adoption, sponsored features", "contact@classlist.com", "Not Started", "Direct school integration"],
    ["PTA UK", "Organisation/Network", "UK Parent Communities & School Networks", "Tier 1", "9M+ parents", "Official parent association network across UK", "National program partnerships", "partnerships@pta.org.uk", "Not Started", "20,000+ schools"],
    ["Parentkind", "Charity/Network", "UK Parent Communities & School Networks", "Tier 1", "15M+ family connections", "National parent-teacher association membership", "Branded research, educational webinars", "partnerships@parentkind.org.uk", "Not Started", "Strong advocacy focus"],
    ["MadeForMums", "Online Magazine", "UK Parent Communities & School Networks", "Tier 2", "500K+ monthly readers", "Digital magazine with education content", "Sponsored articles, newsletters", "hello@madefomums.com", "Not Started", "Strong editorial voice"],
    ["Parent Zone", "Charity/Platform", "UK Parent Communities & School Networks", "Tier 2", "500K+ reach", "Digital safety and education charity for teen parents", "Co-branded resources, webinars", "hello@parentzone.org.uk", "Not Started", "Teen digital wellbeing specialist"],
    ["Family Lives", "Charity/Helpline", "UK Parent Communities & School Networks", "Tier 3", "200K+ annual reach", "National family support charity with parent forums", "Charity partnerships", "info@familylives.org.uk", "Not Started", "Family crisis expertise"],
    ["BabyCenter UK", "Online Community", "UK Parent Communities & School Networks", "Tier 2", "400K+ monthly users", "Parenting info hub with school transition guides", "Sponsored content, newsletters", "partnerships@babycenter.co.uk", "Not Started", "Lifecycle coverage"],

    # === UK Parenting TikTok Creators ===
    ["Stacey Solomon (@staceysolomon)", "TikTok/Instagram", "UK Parenting TikTok Creators", "Mega", "2.1M TikTok", "Celebrity mum, family life, home organization", "Brand partnership", "Instagram/Management", "Not Started", "Loose Women panellist, 5 children"],
    ["Victoria Emes (@victoriaemes)", "TikTok", "UK Parenting TikTok Creators", "Macro", "1.1M TikTok", "Parenting comedy, school run content, relatable mum", "Sponsored content", "TikTok DM/Email", "Not Started", "High teen parent engagement"],
    ["Daisy/Muddle Through Mummy", "TikTok", "UK Parenting TikTok Creators", "Macro", "641K TikTok", "Real parenting content, school life, teen mum life", "Brand collaboration", "TikTok DM", "Not Started", "Authentic parenting voice"],
    ["LadBaby (Mark Hoyle)", "TikTok/YouTube", "UK Parenting TikTok Creators", "Mega", "13M+ total", "Family comedy, charity campaigns, parenting humor", "Charity partnership angle", "Management/Email", "Not Started", "Christmas No.1 record holder"],
    ["Caroline Parker (@mummysflippinhouse)", "TikTok", "UK Parenting TikTok Creators", "Macro", "899K TikTok", "Home renovation with kids, family projects", "Home/family brand partnerships", "TikTok DM/Email", "Not Started", "DIY family content"],
    ["Anna Williamson (@annawilliamsonofficial)", "TikTok/Instagram", "UK Parenting TikTok Creators", "Mid", "128K TikTok", "TV presenter, parenting advice, anxiety awareness", "Mental health partnerships", "Instagram/Management", "Not Started", "Anxiety expert and parent"],
    ["Myleene Klass (@maborymyleeneklass)", "TikTok/Instagram", "UK Parenting TikTok Creators", "Mid", "115K TikTok", "Celebrity mum, music education, family life", "Music/education brand deals", "Instagram/Management", "Not Started", "Music education advocate"],
    ["The Dad Lab (@thedadlab)", "TikTok/YouTube", "UK Parenting TikTok Creators", "Macro", "1M+ TikTok", "Science experiments with kids, educational content", "STEM education partnerships", "Website/Email", "Not Started", "Educational experiments for kids"],
    ["Sarah Turner (@theunmumsymum)", "TikTok/Instagram", "UK Parenting TikTok Creators", "Mid", "401K Instagram", "Honest parenting, school life, teen challenges", "Book/brand partnerships", "Instagram/Management", "Not Started", "Bestselling parenting author"],
    ["Georgia Coady (@georgiacoady)", "TikTok", "UK Parenting TikTok Creators", "Mid", "100K+ TikTok", "ADHD parenting, neurodivergent families, education", "SEND/education partnerships", "TikTok DM", "Not Started", "Neurodivergent family advocate"],
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
    skipped = 0
    lines_by_cat = {}

    for e in NEW_ENTRIES:
        name_key = e[0].lower().strip()
        if name_key not in names and len(name_key) > 2:
            names.add(name_key)
            cat = e[2]
            if cat not in lines_by_cat:
                lines_by_cat[cat] = []
            line = '    [{}, "{}", "{}", "{}", "{}", "{}", "{}", "{}", "{}", "{}", "{}"],\n'.format(
                next_num, e[0].replace('"', '\\"'), e[1], cat, e[3], e[4],
                e[5][:100].replace('"', '\\"'), e[6][:80].replace('"', '\\"'),
                e[7][:30].replace('"', '\\"'), e[8], e[9][:100].replace('"', '\\"'))
            lines_by_cat[cat].append(line)
            next_num += 1
            added += 1
        else:
            skipped += 1

    with open(DATAFILE, 'w', encoding='utf-8') as f:
        f.write(content)
        f.write('\n')
        for cat in sorted(lines_by_cat.keys()):
            f.write(f'    # === {cat} (Batch 3) ===\n')
            for line in lines_by_cat[cat]:
                f.write(line)
            f.write('\n')
        f.write(']\n')

    print(f"Added: {added}")
    print(f"Skipped: {skipped}")
    print(f"Total entries now: {next_num - 1}")

if __name__ == '__main__':
    main()
