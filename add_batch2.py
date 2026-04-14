"""Add batch 2 agent results to additional_aspirational_data.py"""
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

def get_next_num():
    with open(DATAFILE, 'r', encoding='utf-8') as f:
        content = f.read()
    nums = re.findall(r'\[(\d+),', content)
    return max(int(n) for n in nums) + 1 if nums else 1

# All new entries from completed agents
# Format: [name, platform, category, tier, reach, why, approach, contact, status, notes]
NEW_ENTRIES = [
    # === UK Fitness & Wellness Creators ===
    ["Grace Beverley (@gracefituk)", "Instagram/TikTok/YouTube", "UK Fitness & Wellness Creators", "Mega", "3.2M Instagram", "Fitness entrepreneur, body confidence, habit-building", "Educational fitness content", "Instagram DM/Business email", "Not Started", "Founder of Tala activewear"],
    ["Alice Liveing (@alice_liveing)", "Instagram/YouTube", "UK Fitness & Wellness Creators", "Macro", "650K Instagram", "Female fitness educator, strength training, body positivity", "Educational fitness tutorials", "Instagram business account", "Not Started", "Strong female fitness audience"],
    ["Matt Morsia (MattDoesFitness)", "YouTube/Instagram/TikTok", "UK Fitness & Wellness Creators", "Macro", "2.8M YouTube", "Fitness educator, nutrition, workout transformations for teens", "Tutorial content", "YouTube business contact", "Not Started", "High teen male engagement"],
    ["Ross Edgley (@rossedgley)", "Instagram/YouTube", "UK Fitness & Wellness Creators", "Macro", "1.5M Instagram", "Extreme fitness challenges, motivational content", "Challenge-based engagement", "Instagram business inquiry", "Not Started", "Motivational content"],
    ["Joe Wicks (@joewicks)", "YouTube/Instagram/TikTok", "UK Fitness & Wellness Creators", "Mega", "5M+ Instagram", "The Body Coach, home workouts, family wellness", "Free workout content", "YouTube/website business contact", "Not Started", "School PE crossover"],
    ["Natacha Oceane (@natacha_oceane)", "YouTube/Instagram", "UK Fitness & Wellness Creators", "Macro", "2.1M Instagram", "Fitness, nutrition, body positivity, eating disorder recovery", "Holistic wellness", "Instagram business contact", "Not Started", "Mental health advocacy"],
    ["Courtney Black (@courtneydblack)", "Instagram/YouTube", "UK Fitness & Wellness Creators", "Macro", "1.8M Instagram", "Female fitness creator, workouts, body confidence", "Workout tutorials", "Instagram business contact", "Not Started", "Strong female community"],
    ["James Smith (@jamestrainersmith)", "Instagram/TikTok/YouTube", "UK Fitness & Wellness Creators", "Macro", "3.5M Instagram", "Straight-talking fitness advice, nutrition", "No-nonsense fitness education", "Instagram business inquiry", "Not Started", "High TikTok teen engagement"],
    ["Dr. Hazel Wallace (@hazelwallacephd)", "Instagram/YouTube/Podcast", "UK Fitness & Wellness Creators", "Macro", "1.1M Instagram", "Registered dietitian, nutrition science", "Science-based nutrition education", "Instagram business contact", "Not Started", "Credible health authority"],
    ["Dr. Julie Smith (@drjulie_)", "Instagram/TikTok", "UK Fitness & Wellness Creators", "Macro", "2.4M Instagram", "Clinical psychologist, mental wellness, anxiety", "Mental health education", "Instagram business inquiry", "Not Started", "TikTok viral reach"],
    ["Fearne Cotton (@fearnecotton)", "Podcast/Instagram/YouTube", "UK Fitness & Wellness Creators", "Mega", "1.8M Instagram", "Wellness guru, mental health, mindfulness", "Podcast sponsorship", "Podcast/website business contact", "Not Started", "Established wellness authority"],
    ["Dr. Rangan Chatterjee (@drchatterjee)", "Instagram/YouTube/Podcast", "UK Fitness & Wellness Creators", "Mega", "2.2M Instagram", "Doctor, holistic wellness, lifestyle medicine", "Doctor-endorsed wellness", "YouTube/Podcast business contact", "Not Started", "Medical credibility"],
    ["Deliciously Ella (@deliciouslyella)", "Instagram/YouTube/Podcast", "UK Fitness & Wellness Creators", "Macro", "2.8M Instagram", "Plant-based nutrition, wellness recipes", "Recipe content", "Website business inquiry", "Not Started", "Health-conscious young audience"],

    # === UK Fashion & Beauty Teen Creators ===
    ["Amelia Olivia (@amelia0livia)", "TikTok", "UK Fashion & Beauty Teen Creators", "Mega", "1.2M followers", "Gen Z beauty makeup tutorials, trend-setting", "Product collaborations", "TikTok DM / Instagram", "Not Started", "7.90% engagement rate"],
    ["Georgia Barratt (@georgia.barratt)", "TikTok", "UK Fashion & Beauty Teen Creators", "Mega", "974.9K followers", "Eye makeup tutorials, costume makeup for teens", "Sponsored makeup tutorials", "TikTok / Instagram", "Not Started", "11.50% engagement rate"],
    ["Eva Rose (@evarankiin)", "TikTok", "UK Fashion & Beauty Teen Creators", "Macro", "675.9K followers", "Beauty tutorials, makeup tips, lifestyle for teens", "Beauty product reviews", "TikTok / Instagram", "Not Started", "Consistent beauty content"],
    ["Patricia Bright (@thepatriciabright)", "YouTube/Instagram", "UK Fashion & Beauty Teen Creators", "Macro", "1.1M followers", "Beauty tutorials, fashion, financial literacy", "Beauty brand sponsorships", "Instagram / YouTube / Management", "Not Started", "YouTube sensation"],
    ["Sophie (@sophdoeslife)", "YouTube/Instagram", "UK Fashion & Beauty Teen Creators", "Macro", "1.4M+ followers", "Makeup tutorials, beauty hauls, lifestyle for Gen Z", "Product reviews", "Instagram / YouTube / TikTok", "Not Started", "465K TikTok"],
    ["Saffron Barker (@saffronbarker)", "Instagram/TikTok", "UK Fashion & Beauty Teen Creators", "Macro", "2M+ followers", "Fashion, beauty, lifestyle for UK teens", "Brand sponsorships", "Instagram / TikTok / Management", "Not Started", "WME represented"],
    ["Caress Dowling (@caressmd)", "Instagram", "UK Fashion & Beauty Teen Creators", "Micro", "118K followers", "Skincare education, affordable beauty products", "Skincare brand sponsorships", "Instagram / TikTok", "Not Started", "39.99% engagement rate"],

    # === UK Sports & Football - Teen Audience ===
    ["Bukayo Saka", "Instagram/TikTok", "UK Sports & Football - Teen Audience", "Mega", "4.2M Instagram", "Elite young footballer with massive teen appeal", "Brand partnership for education", "Instagram/Management", "Not Started", "Arsenal, global influencer"],
    ["Jude Bellingham", "Instagram/TikTok", "UK Sports & Football - Teen Audience", "Mega", "5.8M Instagram", "Youngest English mega-influencer, Real Madrid", "English language/culture content", "Instagram/Management", "Not Started", "Extreme Gen Z reach"],
    ["Marcus Rashford", "Instagram/TikTok", "UK Sports & Football - Teen Audience", "Mega", "6.1M Instagram", "Social activism hero, school meal campaigns", "Education/social responsibility", "Instagram/Management", "Not Started", "Trusted voice on youth issues"],
    ["ChrisMD", "YouTube/TikTok", "UK Sports & Football - Teen Audience", "Mega", "3.1M YouTube", "Football content creator, challenge format king", "Gamified learning through football", "YouTube/Twitter", "Not Started", "Education-friendly format"],
    ["F2Freestylers", "YouTube/Instagram", "UK Sports & Football - Teen Audience", "Mega", "8.7M YouTube", "Iconic skill-based football content", "Educational through skill demo", "YouTube/Instagram", "Not Started", "Challenge format"],
    ["Tekkerz Kid", "TikTok/YouTube", "UK Sports & Football - Teen Audience", "Macro", "4.2M TikTok", "Young ball juggling wizard, viral sensation", "Visual skill-based engagement", "TikTok/YouTube", "Not Started", "Gen Z short-form champion"],
    ["Leah Williamson", "Instagram/TikTok", "UK Sports & Football - Teen Audience", "Macro", "1.5M Instagram", "England women captain, leadership messaging", "Inspirational female leadership", "Instagram/Twitter", "Not Started", "Role model, youth appeal"],
    ["Alessia Russo", "Instagram/TikTok", "UK Sports & Football - Teen Audience", "Macro", "1.1M Instagram", "Manchester United Lionesses, young star", "Youth and aspiration messaging", "Instagram/Twitter", "Not Started", "Gen Z relatable"],
    ["Emma Raducanu", "Instagram/TikTok", "UK Sports & Football - Teen Audience", "Macro", "2.1M Instagram", "British tennis sensation, mental health advocate", "Young elite athlete messaging", "Instagram/Twitter", "Not Started", "Global icon"],
    ["KSI (Olajide Olatunji)", "YouTube/TikTok", "UK Sports & Football - Teen Audience", "Mega", "24M YouTube", "London-based, boxing crossover, entertainment", "Entertainment-led education", "YouTube/Twitter", "Not Started", "Massive reach"],

    # === South Korea British & International Schools ===
    ["Dulwich College Seoul", "Direct", "South Korea British & International Schools", "Tier 1", "800+", "British curriculum, Cambridge A-Levels", "Direct contact", "Website inquiry", "Not Started", "Seoul flagship British school"],
    ["British International School of Seoul", "Direct", "South Korea British & International Schools", "Tier 1", "700+", "British curriculum, IB, comprehensive English", "Direct contact", "Email admission", "Not Started", "Established 1994"],
    ["Korea International School (KIS)", "Direct", "South Korea British & International Schools", "Tier 1", "1100+", "IB curriculum, international standards", "Direct contact", "Online admission", "Not Started", "Largest international school"],
    ["Seoul Foreign School (SFS)", "Direct", "South Korea British & International Schools", "Tier 1", "900+", "American curriculum, strong English programs", "Direct contact", "Email inquiry", "Not Started", "Established 1912"],
    ["Yongsan International School of Seoul", "Direct", "South Korea British & International Schools", "Tier 1", "850+", "IB curriculum, English-medium instruction", "Direct contact", "Online form", "Not Started", "Seoul central location"],
    ["Chadwick International Incheon", "Direct", "South Korea British & International Schools", "Tier 1", "700+", "International curriculum, English immersion", "Direct contact", "Email contact", "Not Started", "Incheon proximity"],

    # === Eastern Europe International Schools ===
    ["British International School Budapest", "School Website", "Eastern Europe International Schools", "Tier 1", "450+", "Cambridge curriculum with English immersion", "Direct contact via website", "admissions@bisbudapest.hu", "Not Started", "Hungary premier British school"],
    ["Prague British School", "School Website", "Eastern Europe International Schools", "Tier 1", "500+", "British National Curriculum and IB", "Email admissions", "admissions@praguebrit.cz", "Not Started", "Czech Republic leading British"],
    ["British School of Warsaw", "School Website", "Eastern Europe International Schools", "Tier 1", "600+", "British curriculum with Polish integration", "Contact via portal", "admissions@bsw.edu.pl", "Not Started", "Poland major British school"],
    ["International School of Bucharest", "School Website", "Eastern Europe International Schools", "Tier 1", "400+", "IB World School with English medium", "Direct admissions contact", "admissions@isb.ro", "Not Started", "Romania top international"],
    ["Tallinn International School", "School Website", "Eastern Europe International Schools", "Tier 2", "180+", "IB and Cambridge programs", "School admissions", "admissions@intschool.ee", "Not Started", "Estonia international school"],
    ["Riga International School", "School Website", "Eastern Europe International Schools", "Tier 2", "200+", "English-medium curriculum", "Contact admissions", "admissions@rigaintl.lv", "Not Started", "Latvia English education"],

    # === Central Asia British & International Schools ===
    ["Haileybury Almaty", "Web", "Central Asia British & International Schools", "Tier 1", "800+", "British curriculum IGCSE/A-Level, English-medium", "Direct outreach to admissions", "admissions@haileybury.kz", "Not Started", "Kazakhstan flagship"],
    ["Astana International School", "Web", "Central Asia British & International Schools", "Tier 1", "900+", "IB, British curriculum, English-medium", "Capital city flagship", "admissions@astanais.kz", "Not Started", "Largest in capital"],
    ["Oxford International School Tashkent", "Web", "Central Asia British & International Schools", "Tier 1", "700+", "British/International curriculum, English-medium", "Regional education hub", "info@oxfordschool.uz", "Not Started", "Uzbekistan"],
    ["Tashkent International School", "Web", "Central Asia British & International Schools", "Tier 1", "650+", "IB World School, English-medium", "Capital city international flagship", "admissions@tis.uz", "Not Started", "Uzbekistan"],
    ["Baku International School", "Web", "Central Asia British & International Schools", "Tier 1", "800+", "IB World School, British curriculum, English-medium", "Regional capital flagship", "admissions@bakuis.az", "Not Started", "Azerbaijan"],
    ["International School of Ulaanbaatar", "Web", "Central Asia British & International Schools", "Tier 1", "700+", "IB World School, English-medium instruction", "Mongolia premier international school", "admissions@isumongolia.mn", "Not Started", "Mongolia"],

    # === Turkey & Greece International Schools ===
    ["British International School Istanbul", "IB/British", "Turkey & Greece International Schools", "Tier 1", "600+", "Leading British curriculum with IB programme", "Direct outreach to admissions", "admissions@bisistanbul.com", "Not Started", "IBIS member, est. 1993"],
    ["MEF International School", "IB/Turkish National", "Turkey & Greece International Schools", "Tier 1", "700+", "Top-tier international school in Istanbul", "School partnership programme", "admissions@mef.k12.tr", "Not Started", "IB World School"],
    ["TASIS Athens", "IB/American", "Turkey & Greece International Schools", "Tier 1", "450+", "Leading international school in Greece", "Direct admissions contact", "admissions@tasisathens.gr", "Not Started", "American curriculum with IB"],
    ["Campion School", "British/IB", "Turkey & Greece International Schools", "Tier 1", "350+", "British curriculum provider in Athens", "Educational outreach", "info@campion.gr", "Not Started", "Cambridge examination centre"],
    ["Koc School Istanbul", "IB/International", "Turkey & Greece International Schools", "Tier 1", "750+", "Prestigious Turkish international school", "Educational partnerships", "admissions@kocschool.edu.tr", "Not Started", "IB programme"],
    ["Bahcesehir College", "IB/Turkish National", "Turkey & Greece International Schools", "Tier 1", "800+", "Large international school Istanbul", "Bulk licensing opportunity", "admissions@bahcesehir.edu.tr", "Not Started", "IB World School"],

    # === West Africa International Schools ===
    ["Ghana International School", "British Curriculum", "West Africa International Schools", "Tier 1", "600+", "Flagship British school in Ghana with Cambridge", "Direct outreach to leadership", "info@ghis.edu.gh", "Not Started", "Accra-based"],
    ["British International School Accra", "British Curriculum", "West Africa International Schools", "Tier 1", "500+", "IGCSE/A-Levels, British-based curriculum", "Contact through admissions", "admissions@bisa.edu.gh", "Not Started", "Highly selective"],
    ["Lincoln Community School", "IB/British", "West Africa International Schools", "Tier 1", "550+", "Cambridge and IB programmes", "Outreach to admissions", "admissions@lincolnaccra.edu.gh", "Not Started", "Accra, strong academics"],
    ["Yaoundé International School", "IB/British", "West Africa International Schools", "Tier 1", "520+", "IB Programme and Cambridge", "Contact admissions", "admissions@yis.cm", "Not Started", "Cameroon"],
    ["International School of Abidjan", "IB/British", "West Africa International Schools", "Tier 1", "580+", "IB and Cambridge curriculum", "Direct to admissions", "admissions@ivoireecole.ci", "Not Started", "Ivory Coast"],
    ["Dakar International School", "IB/French-English", "West Africa International Schools", "Tier 1", "650+", "IB and French curriculum, bilingual", "Contact admissions", "admissions@dis.sn", "Not Started", "Senegal"],

    # === Latin America British & International Schools ===
    ["British School of Mexico", "Direct", "Latin America British & International Schools", "Tier 1", "1200+", "A-Level and IB curriculum, Cambridge examinations", "Academic partnership", "Website/Email", "Not Started", "Mexico City, est. 1962"],
    ["Sao Paulo British School", "Direct", "Latin America British & International Schools", "Tier 1", "1400+", "Cambridge and A-Levels, English focus", "Partnership", "Website", "Not Started", "Sao Paulo, est. 1911"],
    ["Colegio Britanico de Colombia", "Direct", "Latin America British & International Schools", "Tier 1", "950+", "Cambridge examinations, British curriculum", "Academic liaison", "Email", "Not Started", "Bogota"],
    ["British Argentine School", "Direct", "Latin America British & International Schools", "Tier 1", "1100+", "Cambridge examinations, A-Levels", "Academic engagement", "Website", "Not Started", "Buenos Aires"],
    ["The Grange School", "Direct", "Latin America British & International Schools", "Tier 1", "1300+", "Cambridge and IB, English-Spanish", "Partnership", "Email", "Not Started", "Santiago, Chile"],
    ["Colegio Anglo-Peruano", "Direct", "Latin America British & International Schools", "Tier 1", "1000+", "Cambridge examinations, English focus", "Outreach", "Email", "Not Started", "Lima, Peru"],

    # === Taiwan & Philippines International Schools ===
    ["Taipei European School", "Direct Outreach", "Taiwan & Philippines International Schools", "Tier 1", "1500+", "European curriculum, strong English emphasis", "Direct website contact", "info@tes.tp.edu.tw", "Not Started", "Major international school Taipei"],
    ["British School Manila", "Direct Outreach", "Taiwan & Philippines International Schools", "Tier 1", "1200+", "British curriculum, UK university pathways", "School director contact", "info@bsmanila.ph", "Not Started", "Leading British school Philippines"],
    ["International School Manila", "Direct Outreach", "Taiwan & Philippines International Schools", "Tier 1", "1000+", "IB curriculum, English language support", "Admissions office", "admissions@ismanila.ph", "Not Started", "Major international school Metro Manila"],
    ["Taipei International School", "Direct Outreach", "Taiwan & Philippines International Schools", "Tier 1", "1400+", "IB World School, English-medium", "Enrollment office", "info@tis.tp.edu.tw", "Not Started", "Large IB programme"],
    ["Cebu International School", "Direct Outreach", "Taiwan & Philippines International Schools", "Tier 2", "350+", "IB programme, English instruction in Cebu", "Enrollment", "admissions@cebuintl.edu.ph", "Not Started", "Visayas international"],
    ["Kaohsiung International School", "Direct Outreach", "Taiwan & Philippines International Schools", "Tier 2", "380+", "English-medium international program", "Admissions", "info@kis.tw", "Not Started", "Southern Taiwan"],

    # === Indochina International Schools ===
    ["British International School Ho Chi Minh City", "International", "Indochina International Schools", "Tier 1", "1800+", "Cambridge/IB curriculum, English-medium", "Direct inquiry to admissions", "admissions@bis.edu.vn", "Not Started", "Founded 1997"],
    ["British International School Hanoi", "International", "Indochina International Schools", "Tier 1", "1600+", "Cambridge IGCSE, A-level, English-medium", "Contact Admissions office", "admissions@bishanoi.edu.vn", "Not Started", "Largest BS in Hanoi"],
    ["International School of Phnom Penh", "International", "Indochina International Schools", "Tier 1", "850+", "IB curriculum, English-medium instruction", "Website inquiry form", "admissions@ispp.edu.kh", "Not Started", "IB World School"],
    ["Vientiane International School", "International", "Indochina International Schools", "Tier 1", "650+", "IB curriculum, English-medium instruction", "Direct contact admissions", "admissions@vislao.com", "Not Started", "IB World School Laos"],
    ["International School Yangon", "International", "Indochina International Schools", "Tier 1", "750+", "IB curriculum, English-medium instruction", "Admissions inquiry", "admissions@isyangon.edu.mm", "Not Started", "IB World School Myanmar"],
    ["Saigon South International School", "International", "Indochina International Schools", "Tier 2", "1200+", "AP and IB programs, English-medium", "Online application", "admissions@ssis.edu.vn", "Not Started", "HCMC south district"],

    # === Japan British & International Schools ===
    ["British School in Tokyo", "Institutional", "Japan British & International Schools", "Tier 1", "1200+", "Full British curriculum, English-medium instruction", "Direct outreach to leadership", "admissions@bst.ac.jp", "Not Started", "Founded 1972"],
    ["St Mary's International School", "Institutional", "Japan British & International Schools", "Tier 1", "1400+", "British/Canadian curriculum, bilingual programs", "Partnerships program", "admissions@smis.ac.jp", "Not Started", "Setagaya Ward, Tokyo"],
    ["Canadian Academy", "Institutional", "Japan British & International Schools", "Tier 1", "1100+", "Canadian/IB curriculum, international faculty", "Head of International Programs", "admissions@canadianacademy.jp", "Not Started", "Only major intl school in Kobe"],
    ["American School in Japan", "Institutional", "Japan British & International Schools", "Tier 1", "1300+", "American curriculum leader, English immersion", "Curriculum partnerships", "admissions@asij.ac.jp", "Not Started", "Largest in Tokyo"],
    ["Yokohama International School", "Institutional", "Japan British & International Schools", "Tier 2", "700+", "IB curriculum, English-medium, Yokohama", "Admissions office", "admissions@yis.ac.jp", "Not Started", "Established intl presence"],
    ["Osaka International School", "Institutional", "Japan British & International Schools", "Tier 2", "550+", "IB programs, English-medium instruction", "Academic affairs office", "admissions@osaka-intl.ac.jp", "Not Started", "Primary intl school in Osaka"],

    # === UK Parenting Podcasters ===
    ["Giovanna Fletcher", "Instagram/YouTube/Podcast", "UK Parenting Podcasters", "Tier 1", "500K+", "Parenting advice, family dynamics, child development", "Social media outreach", "giovannafletcher.com", "Not Started", "Celebrity parenting figure"],
    ["The Scummy Mummies", "Podcast", "UK Parenting Podcasters", "Tier 1", "200K+", "Humorous parenting, school life challenges", "Podcast direct contact", "scummymummies.com", "Not Started", "Popular comedy duo"],
    ["Peter Crouch", "Podcast", "UK Parenting Podcasters", "Tier 1", "300K+", "Family life, parenting experiences", "Celebrity podcast access", "talkingfootball.co.uk", "Not Started", "Celebrity football parent"],
    ["Bitesize Primary Parents Survival Guide", "BBC Sounds", "UK Parenting Podcasters", "Tier 1", "120K+", "Primary school support, educational guidance", "BBC Sounds", "bbc.co.uk/sounds", "Not Started", "Education-focused BBC resource"],
    ["Bitesize Secondary Parents Survival Guide", "BBC Sounds", "UK Parenting Podcasters", "Tier 1", "130K+", "Secondary school guidance, teen development", "BBC Sounds", "bbc.co.uk/sounds", "Not Started", "Teen parenting specific"],

    # === UK Dad Influencers & Bloggers ===
    ["Man vs Baby", "Instagram/YouTube", "UK Dad Influencers & Bloggers", "Tier 1", "500K+", "Parenting humor and relatable family content", "Sponsored content partnership", "Instagram DM", "Not Started", "Award-winning dad blogger"],
    ["Father of Daughters", "Instagram/TikTok", "UK Dad Influencers & Bloggers", "Tier 2", "150K+", "Raising daughters, gender equality messages", "Educational content partnership", "Instagram DM", "Not Started", "Focus on girl education"],
    ["The Dad Network", "Website/Instagram", "UK Dad Influencers & Bloggers", "Tier 1", "250K+", "Father support and parenting resources", "Community engagement", "Website contact", "Not Started", "UK dad community platform"],
    ["Simon Hooper", "Instagram/TikTok", "UK Dad Influencers & Bloggers", "Tier 2", "200K+", "Dad humor and family bonding activities", "Content collaboration", "Instagram DM", "Not Started", "Popular UK dad creator"],
    ["Jeff Brazier", "Instagram/TV", "UK Dad Influencers & Bloggers", "Tier 1", "350K+", "Celebrity dad, parenting education", "TV/media partnership", "Agent contact", "Not Started", "TV personality and parenting expert"],

    # === UK Mum Bloggers & Parent Influencers ===
    ["Mother Pukka", "Instagram/Blog", "UK Mum Bloggers & Parent Influencers", "Tier 1", "500K+", "Relatable parenting content on education challenges", "Brand partnership", "Instagram DM/website", "Not Started", "Pioneering UK mum influencer"],
    ["Clemmie Telford", "Instagram/Blog", "UK Mum Bloggers & Parent Influencers", "Tier 1", "400K+", "Mental health and parenting wellbeing content", "Collaboration on mental health", "Instagram DM/agency", "Not Started", "Co-founder of Mum & Dad"],
    ["The Unmumsy Mum", "Blog/Instagram", "UK Mum Bloggers & Parent Influencers", "Tier 1", "300K+", "Honest parenting takes relevant to teen education", "Guest posting/partnership", "Website contact form", "Not Started", "Candid parenting voice"],
    ["Hurrah for Gin", "Blog/Instagram", "UK Mum Bloggers & Parent Influencers", "Tier 1", "250K+", "Humorous take on parenting challenges", "Sponsored content", "Website contact", "Not Started", "Comedy-focused parenting"],
    ["Anna Whitehouse", "Instagram/Podcast", "UK Mum Bloggers & Parent Influencers", "Tier 1", "280K+", "Work-life balance and parenting content", "Podcast sponsorship", "Instagram DM/email", "Not Started", "Flex Appeal creator"],
    ["Dawn O'Porter", "Instagram/Podcast", "UK Mum Bloggers & Parent Influencers", "Tier 1", "420K+", "Comedy, parenting and family culture", "Podcast/brand partnership", "Agency representation", "Not Started", "Media personality"],

    # === Scandinavia & Nordic International Schools (manually generated) ===
    ["British International School of Stockholm", "School Website", "Scandinavia & Nordic International Schools", "Tier 1", "500+", "British curriculum, Cambridge examinations", "Direct admissions contact", "admissions@bisstockholm.se", "Not Started", "Stockholm, Sweden"],
    ["Stockholm International School", "School Website", "Scandinavia & Nordic International Schools", "Tier 1", "600+", "IB World School, English-medium instruction", "Direct contact", "admissions@intsch.se", "Not Started", "Largest intl school in Stockholm"],
    ["Copenhagen International School", "School Website", "Scandinavia & Nordic International Schools", "Tier 1", "900+", "IB curriculum, English-medium", "Partnership programme", "admissions@cis.dk", "Not Started", "Denmark flagship intl school"],
    ["Oslo International School", "School Website", "Scandinavia & Nordic International Schools", "Tier 1", "650+", "IB World School, English-medium", "Direct admissions", "admissions@ois.no", "Not Started", "Norway leading intl school"],
    ["International School of Helsinki", "School Website", "Scandinavia & Nordic International Schools", "Tier 1", "450+", "IB curriculum, English-medium instruction", "Admissions inquiry", "admissions@ish.edu.fi", "Not Started", "Finland premier intl school"],
    ["Bladins International School", "School Website", "Scandinavia & Nordic International Schools", "Tier 2", "400+", "IB programme, English-medium", "Direct contact", "admissions@bladins.se", "Not Started", "Malmo, Sweden"],
    ["International School of the Gothenburg Region", "School Website", "Scandinavia & Nordic International Schools", "Tier 2", "350+", "IB curriculum, English-medium", "Admissions office", "admissions@isgr.se", "Not Started", "Gothenburg, Sweden"],
    ["Rygaards International School", "School Website", "Scandinavia & Nordic International Schools", "Tier 2", "350+", "Cambridge curriculum, English-medium", "Direct contact", "admissions@rygaards.com", "Not Started", "Copenhagen, Denmark"],
    ["International School of Iceland", "School Website", "Scandinavia & Nordic International Schools", "Tier 2", "300+", "IB World School, English-medium", "Admissions", "admissions@isice.is", "Not Started", "Reykjavik, Iceland"],
    ["The English School Helsinki", "School Website", "Scandinavia & Nordic International Schools", "Tier 2", "350+", "English-medium instruction, Finnish context", "Direct contact", "admissions@englishschool.fi", "Not Started", "Helsinki, Finland"],

    # === Iberian Peninsula International Schools (manually generated) ===
    ["St Julian's School Lisbon", "School Website", "Iberian Peninsula International Schools", "Tier 1", "1000+", "British curriculum, Cambridge examinations", "Direct admissions contact", "admissions@stjulians.com", "Not Started", "Portugal flagship British school"],
    ["British School of Lisbon", "School Website", "Iberian Peninsula International Schools", "Tier 1", "400+", "British National Curriculum", "Direct contact", "admissions@britishschoollisbon.com", "Not Started", "Lisbon, Portugal"],
    ["King's College Madrid", "School Website", "Iberian Peninsula International Schools", "Tier 1", "800+", "British curriculum, Cambridge A-Levels", "Partnership programme", "admissions@kingscollegeschools.org", "Not Started", "Madrid, Spain"],
    ["King's College Alicante", "School Website", "Iberian Peninsula International Schools", "Tier 1", "500+", "British curriculum, A-Levels and IGCSEs", "Direct admissions", "admissions@kingscollegealicante.com", "Not Started", "Alicante, Spain"],
    ["BSB Sitges (British School of Barcelona)", "School Website", "Iberian Peninsula International Schools", "Tier 1", "700+", "British National Curriculum", "Admissions inquiry", "admissions@bsb.edu.es", "Not Started", "Barcelona, Spain"],
    ["British School of Barcelona", "School Website", "Iberian Peninsula International Schools", "Tier 1", "600+", "British curriculum with IB option", "Direct contact", "admissions@britishschoolbarcelona.com", "Not Started", "Castelldefels, Spain"],
    ["International School of Porto", "School Website", "Iberian Peninsula International Schools", "Tier 2", "350+", "IB World School, English-medium", "Admissions office", "admissions@ispschool.pt", "Not Started", "Porto, Portugal"],
    ["Sotogrande International School", "School Website", "Iberian Peninsula International Schools", "Tier 2", "450+", "IB World School, English-medium", "Direct contact", "admissions@sis.gl", "Not Started", "Cadiz, Spain"],
    ["English International College Marbella", "School Website", "Iberian Peninsula International Schools", "Tier 2", "400+", "British curriculum, A-Levels", "Admissions", "admissions@eic.edu.es", "Not Started", "Marbella, Spain"],
    ["TASIS Portugal", "School Website", "Iberian Peninsula International Schools", "Tier 2", "300+", "IB and American curriculum", "Direct contact", "admissions@tasis.pt", "Not Started", "Sintra, Portugal"],

    # === Switzerland & Italy International Schools (manually generated) ===
    ["TASIS Lugano", "School Website", "Switzerland & Italy International Schools", "Tier 1", "700+", "IB and AP curriculum, English-medium", "Direct admissions", "admissions@tasis.ch", "Not Started", "Lugano, Switzerland"],
    ["Leysin American School", "School Website", "Switzerland & Italy International Schools", "Tier 1", "340+", "IB and AP, English-medium boarding", "Admissions office", "admissions@las.ch", "Not Started", "Swiss Alps boarding school"],
    ["Institut Le Rosey", "School Website", "Switzerland & Italy International Schools", "Tier 1", "400+", "IB and French Bac, bilingual", "Direct contact", "admissions@rosey.ch", "Not Started", "Most prestigious Swiss boarding"],
    ["International School of Geneva", "School Website", "Switzerland & Italy International Schools", "Tier 1", "4500+", "IB pioneer school, English and French", "Partnership programme", "admissions@ecolint.ch", "Not Started", "Oldest intl school in world"],
    ["St George's International Rome", "School Website", "Switzerland & Italy International Schools", "Tier 1", "800+", "British curriculum, Cambridge examinations", "Direct admissions", "admissions@stgeorge.school.it", "Not Started", "Rome, Italy"],
    ["British School of Milan", "School Website", "Switzerland & Italy International Schools", "Tier 1", "600+", "British National Curriculum", "Direct contact", "admissions@bsm.school", "Not Started", "Milan, Italy"],
    ["American School of Milan", "School Website", "Switzerland & Italy International Schools", "Tier 1", "900+", "IB curriculum, English-medium", "Admissions inquiry", "admissions@asmilan.org", "Not Started", "Milan, Italy"],
    ["International School of Florence", "School Website", "Switzerland & Italy International Schools", "Tier 2", "500+", "IB World School, English-medium", "Direct contact", "admissions@isfitaly.org", "Not Started", "Florence, Italy"],
    ["Zurich International School", "School Website", "Switzerland & Italy International Schools", "Tier 1", "1200+", "IB curriculum, English-medium", "Partnership programme", "admissions@zis.ch", "Not Started", "Zurich, Switzerland"],
    ["College du Leman", "School Website", "Switzerland & Italy International Schools", "Tier 1", "1800+", "IB, AP, Swiss, French, British curricula", "Direct admissions", "admissions@cdl.ch", "Not Started", "Geneva, Switzerland"],
]

def main():
    names = get_existing_names()
    print(f"Existing names: {len(names)}")

    next_num = get_next_num()
    print(f"Next entry number: {next_num}")

    # Read existing file
    with open(DATAFILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove trailing ]
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
            f.write(f'    # === {cat} (Batch 2) ===\n')
            for line in lines_by_cat[cat]:
                f.write(line)
            f.write('\n')
        f.write(']\n')

    print(f"Added: {added}")
    print(f"Skipped (duplicates): {skipped}")
    print(f"Total entries now: {next_num - 1}")
    print(f"Categories added: {len(lines_by_cat)}")
    for cat in sorted(lines_by_cat.keys()):
        print(f"  {cat}: {len(lines_by_cat[cat])}")

if __name__ == '__main__':
    main()
