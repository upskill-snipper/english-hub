import re

DATAFILE = r"D:\Coding\english-hub\additional_aspirational_data.py"

# Get existing names
names = set()
with open(DATAFILE, 'r', encoding='utf-8') as f:
    content = f.read()
    for m in re.finditer(r'\[\d+,\s*"(.+?)"', content):
        names.add(m.group(1).lower().strip())

with open(r"D:\Coding\english-hub\build_gtm_workbook.py", 'r', encoding='utf-8') as f:
    for line in f:
        m = re.search(r'\[\d+,\s*"(.+?)"', line)
        if m:
            names.add(m.group(1).lower().strip())

last_nums = re.findall(r'\[(\d+),', content)
next_num = max(int(n) for n in last_nums) + 1

new_entries = [
    ["Central Cee (@centralcee)", "TikTok/Instagram", "Trending UK Teen Influencers", "Mega", "19.5M TikTok", "UK rapper with massive Gen Z following", "Music collaboration/sponsored content", "Instagram/TikTok DM", "Not Started", "Highest-followed UK music creator"],
    ["Molly-Mae Hague (@mollymae)", "Instagram/YouTube", "Trending UK Teen Influencers", "Mega", "7.9M Instagram", "Love Island winner; fashion/lifestyle appeals to teen girls", "Brand partnership approach", "Instagram/Management", "Not Started", "Strong engagement with younger audience"],
    ["GK Barry (@gkbarry_)", "TikTok/Instagram", "Trending UK Teen Influencers", "Mega", "4.1M TikTok", "Comedy/entertainment creator; podcast host; British humor", "Podcast sponsorship", "Instagram/TikTok", "Not Started", "High teen engagement"],
    ["Tallulah Metcalfe (@tallulahmetcalfe3)", "TikTok", "Trending UK Teen Influencers", "Macro", "5.2M TikTok", "Fashion/beauty GRWM videos; 18-year-old UK star", "Fashion brand collaboration", "TikTok/Email", "Not Started", "Sold-out UK tour"],
    ["Cal The Dragon (@cal_the_dragon_official)", "TikTok", "Trending UK Teen Influencers", "Macro", "1.9M TikTok", "Goalkeeper content; sports/entertainment blend", "Sports brand sponsorship", "TikTok/Email", "Not Started", "Unique sports angle"],
    ["Abby Roberts (@abbyroberts)", "TikTok", "Trending UK Teen Influencers", "Mega", "15.7M TikTok", "Beauty/makeup artist; bold transformations", "Cosmetic brand partnership", "TikTok DM", "Not Started", "Top beauty creator"],
    ["Chloe Rose (@allchloerose)", "TikTok", "Trending UK Teen Influencers", "Macro", "262.6K TikTok", "Fashion/aesthetic creator; sustainable fashion focus", "Fashion/sustainability brands", "TikTok DM", "Not Started", "Growing fashion influencer"],
    ["Raye (@raye)", "TikTok/Instagram", "Trending UK Teen Influencers", "Macro", "3.5M TikTok", "UK singer-songwriter; viral songs on TikTok; Grammy winner", "Music streaming/concert promotion", "Instagram/Management", "Not Started", "Young music audience"],
    ["Olivia Dean (@oliviadeano_)", "TikTok", "Trending UK Teen Influencers", "Macro", "1.7M TikTok", "UK singer; breakthrough 2025; chart-topping songs", "Music promotion/streaming deals", "TikTok/Management", "Not Started", "SNL appearance"],
    ["Tubbo (@tubbo)", "Twitch/YouTube", "Trending UK Teen Influencers", "Macro", "5.2M Twitch", "Minecraft/gaming streamer; tournament host", "Gaming sponsorship/tournaments", "Twitter/Twitch Chat", "Not Started", "Top UK streamer"],
    ["Foodyfella (@foodyfella_)", "TikTok", "Trending UK Teen Influencers", "Mid", "328.7K TikTok", "Food/restaurant creator; TikTok Food Creator 2025", "Restaurant/food brand partnership", "TikTok DM/Email", "Not Started", "Award-winning food creator"],
    ["Jade Carolan (@jadecarolanfitness)", "TikTok/Instagram", "Trending UK Teen Influencers", "Mid", "318.8K TikTok", "Fitness/nutrition coach; healthy recipe content", "Fitness brand/supplement sponsorship", "TikTok/Instagram DM", "Not Started", "Health-conscious teen audience"],
    ["Lissie Mackintosh (@lissiemackintosh)", "TikTok", "Trending UK Teen Influencers", "Mid", "430.7K TikTok", "F1/motorsport content creator; TikTok Awards 2025 winner", "Sports sponsorship/motor brands", "TikTok DM/Email", "Not Started", "TikTok Sport Creator Award"],
    ["The Sidemen (@sidemen)", "TikTok/YouTube", "Trending UK Teen Influencers", "Mega", "22M YouTube", "Entertainment collective; comedy/challenges", "Entertainment/streaming partnerships", "Management/YouTube", "Not Started", "Massive teen appeal"],
    ["Erin Monaghan", "TikTok", "Trending UK Teen Influencers", "Mid", "240.6K TikTok", "Fashion/travel/lifestyle content", "Fashion brand collaboration", "TikTok DM", "Not Started", "Teen lifestyle appeal"],
    ["Demi Donnelly", "TikTok", "Trending UK Teen Influencers", "Mid", "254.6K TikTok", "Beauty/wellness/lifestyle content", "Beauty/wellness brand sponsorship", "TikTok DM", "Not Started", "Wellness-focused teen audience"],
    ["Stuart Snowden (Grumpy Northern Foodie)", "TikTok", "Trending UK Teen Influencers", "Mid", "325K TikTok", "Food/cooking content; honest reviews", "Food/restaurant sponsorship", "TikTok DM/Email", "Not Started", "Comedy food content"],
    ["Annabel (Sustainable Fashion)", "TikTok", "Trending UK Teen Influencers", "Micro", "143.9K TikTok", "Sustainable fashion/second-hand styling", "Sustainable fashion brands", "TikTok DM", "Not Started", "Eco-conscious teen audience"],
    ["Coco Omer (@cultofbooks)", "TikTok", "Trending UK Teen Influencers", "Micro", "80K TikTok", "BookTok creator; book reviews; comedy/lifestyle", "Publisher partnerships", "TikTok DM", "Not Started", "BookTok community"],
    ["Amy Jordan (@amyjordanj)", "TikTok", "Trending UK Teen Influencers", "Micro", "459.7K TikTok", "BookTok creator; romance reviews", "Publisher/book promotions", "TikTok DM/Email", "Not Started", "UK BookTok influencer"],
    ["BenjyFishy (@benjyfishy)", "Twitch", "Trending UK Teen Influencers", "Macro", "4.1M Twitch", "Fortnite professional streamer; UK gaming personality", "Gaming sponsorship/esports", "Twitch/Twitter", "Not Started", "Competitive gamer"],
    ["Ekin-Su Culculoglu", "Instagram/TikTok", "Trending UK Teen Influencers", "Macro", "7.2M TikTok", "Love Island/reality TV star; beauty/fashion", "Fashion/beauty brand deals", "Instagram/Management", "Not Started", "Young female audience"],
    ["Yung Filly (@yungfilly)", "TikTok", "Trending UK Teen Influencers", "Macro", "7.8M TikTok", "Entertainer; comedy/music/lifestyle blend", "Entertainment sponsorship", "TikTok DM/Email", "Not Started", "Viral content"],
    ["Dylan Page (News Daddy)", "TikTok", "Trending UK Teen Influencers", "Macro", "Variable", "News/comedy content creator; global events with humor", "News platform partnership", "TikTok/Email", "Not Started", "Comedy news format"],
    ["Amelia Dimz (@ameliadimz)", "TikTok", "Trending UK Teen Influencers", "Macro", "3.7M TikTok", "Chicken Shop Date creator; cultural commentary", "Media partnerships/sponsorship", "TikTok/Email", "Not Started", "Teen audience engagement"],
    ["Charlessy", "TikTok", "Trending UK Teen Influencers", "Micro", "Variable", "Comedy content; North vs London commentary", "Comedy brand collaboration", "TikTok DM", "Not Started", "Regional appeal"],
    ["Luca (@Surfaceldn)", "TikTok/Instagram", "Trending UK Teen Influencers", "Mid", "Variable", "Fashion icon; streetwear reviews; Gen Z aesthetic", "Fashion/streetwear brand deals", "Instagram/TikTok", "Not Started", "Streetwear audience"],
    ["Toni Laites (Love Island 2025)", "TikTok/Instagram", "Trending UK Teen Influencers", "Macro", "~1M+ Instagram", "Reality TV winner; lifestyle/relationship content", "Reality TV sponsorship/brand deals", "Instagram/TikTok", "Not Started", "Love Island audience"],
    ["Maddi (Food TikTok Creator)", "TikTok", "Trending UK Teen Influencers", "Micro", "Variable", "Carbs/comfort food creator; B Creator Award winner", "Food/brand sponsorship", "TikTok DM", "Not Started", "Trending 2025"],
    ["Luca Bish (Love Island)", "Instagram/TikTok", "Trending UK Teen Influencers", "Macro", "1.2M+ followers", "Love Island alumni; lifestyle/fitness content", "Brand partnership/sponsorship", "Instagram/Management", "Not Started", "Reality TV fanbase"],
    ["Gordon Ramsay (@gordonramsay)", "TikTok", "Trending UK Teen Influencers", "Mega", "40.8M TikTok", "Celebrity chef; entertainment content; viral reactions", "Food brand/sponsorship", "Management/Email", "Not Started", "Mainstream appeal"],
]

added = 0
lines_to_add = []
for e in new_entries:
    name_key = e[0].lower().strip()
    if name_key not in names:
        names.add(name_key)
        line = '    [{}, "{}", "{}", "{}", "{}", "{}", "{}", "{}", "{}", "{}", "{}"],\n'.format(
            next_num, e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9])
        lines_to_add.append(line)
        next_num += 1
        added += 1

if lines_to_add:
    content = content.rstrip()
    if content.endswith(']'):
        content = content[:-1].rstrip()

    with open(DATAFILE, 'w', encoding='utf-8') as f:
        f.write(content)
        f.write('\n    # === Trending UK Teen Influencers (Late Agent) ===\n')
        for line in lines_to_add:
            f.write(line)
        f.write('\n]\n')

print(f"Added {added} new entries (skipped {len(new_entries) - added} duplicates)")
print(f"Total entries now: {next_num - 1}")
