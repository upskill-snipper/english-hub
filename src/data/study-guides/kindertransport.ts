import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Kindertransport, Diane Samuels (first performed 1993; first published 1995).
 * A complete guide: the text had only course modules before this file, and
 * those were not used as a source.
 *
 * EDITION. Pearson prescribes the Nick Hern Books edition, ISBN 9781854595270
 * (specification Issue 3, August 2025, prescribed-editions appendix), and
 * Component 2 is open book, so page numbers matter. Every quotation here, with
 * its speaker and page, was checked against the Internet Archive scan of that
 * edition (kindertransport0000samu_p1m2) with the reader's search-inside, which
 * prints each matching speech with its speaker label and scan leaf. Page = leaf
 * minus 24, fixed by the running heads (leaf 62 carries "38 KINDERTRANSPORT",
 * leaf 108 "84 KINDERTRANSPORT"); the scene headings fall on pages 3, 22, 47
 * and 78, and "The End." on page 87. The check was done on 25 September 2026
 * and repeated independently on 26 September 2026. On the second date the
 * search endpoint answered "Item not available" to a direct request and worked
 * only when called from the item's own reader page. The 1995 Plume (US) edition
 * (kindertransport0000samu) differs in places, so quote the prescribed one.
 *
 * WHAT EARLIER DRAFTS GOT WRONG, found in those checks and fixed here, so that
 * nobody puts it back:
 * - "More or less." is not the last line: Faith says it, Evelyn says "All done
 *   in here then.", and Faith's "Yes we are." (p. 87) is the last line.
 * - Evelyn does not resist Faith leaving; she presses her to go ("Stick by it",
 *   "Give it a try at least", p. 9). But "I expect you to keep to your word"
 *   (p. 10) is NOT an order to go: by then Faith has said "I'm definitely
 *   staying", and Evelyn, coldly, holds her to THAT. An earlier version of this
 *   file read it the other way in eight places (fact-check, 26 September 2026).
 *   Faith is taking glasses and crockery for the flat by Act Two, Scene Two, and
 *   only at the end does Evelyn ask her to "Stay my little girl forever" (p. 86).
 * - Evelyn does first say both parents died in Auschwitz ("They died." / "Yes. In
 *   Auschwitz.", p. 74), then that her father was gassed in 1943 and her mother
 *   was not. Lil is in the room and asks when she found that out. Faith's later
 *   "Gran didn't know that your mother survived did she?" (p. 79) is about the
 *   time, so do not say Lil "never learns" it.
 * - Lil does not call Evelyn a terrible mother. Evelyn asks whether she is one
 *   and Lil answers "Not usually." (p. 54).
 * - EVA'S AGE AT THE REUNION. The first draft said seventeen; a later draft
 *   "corrected" it to sixteen because Helga says "You are sixteen now." That
 *   correction was itself wrong: Eva's next line is "Seventeen." (p. 75). She is
 *   seventeen, and Helga no longer knows her daughter's age, which is the point.
 * - The second draft also claimed "Yes we are." is the first time mother and
 *   daughter say "we", which nobody checked; it said Lil insists she "chose" to
 *   take Evelyn in, which she does not say; and it said Eva hides the mouth organ
 *   "against her mother's orders", when the rule is that only clothes may be
 *   taken (p. 11). All three are gone.
 * - The postman reacting to a postmark and Faith believing her mother came to Lil
 *   as a baby could not be found in the text, and are gone. Eva knocking on
 *   doors to find servants' jobs for her parents IS in the text ("Streets.
 *   Knocking on doors.", p. 39); an earlier note here wrongly said it was not.
 *   She does not read the advertisements: Lil does (pp. 35 to 36).
 * - Helga's "did not lose myself" (p. 84) comes BEFORE Evelyn's "I had to let go
 *   to float" (p. 85), so it is not a reply to it.
 * - The second draft quoted 412 words of the play on one page, over the 400-word
 *   ceiling in fair-dealing.ts, and so failed the guide test. Several longer
 *   quotations are now shorter verbatim phrases.
 *
 * The /courses/igcse-lit-drama-kindertransport modules were read for
 * orientation only; nothing was copied from them. They contain at least one
 * quotation ("I am not Eva") that is not in the prescribed edition.
 *
 * COPYRIGHT. The play is in copyright. Quotations are held under 15 words and
 * the page total under the 400-word ceiling; longer passages are pointed to by
 * page and summarised.
 */
export const guide: StudyGuide = {
  slug: 'kindertransport',
  title: 'Kindertransport',
  author: 'Diane Samuels',
  form: 'play',
  scope:
    'The whole play, in two acts: Act One, Scenes One and Two, and Act Two, Scenes One and Two. For Pearson Edexcel International GCSE English Literature (4ET1) it is a modern drama text on Paper 2 (Component 2), Section A, where you answer one essay question from a choice of two on the whole play. That paper is open book: you may take a clean, completely unmarked copy of the prescribed edition into the exam. Section A questions test your knowledge of the play and your analysis of its language, form and structure; historical context is not a separate requirement there. Your centre may instead enter you for the coursework component (Component 3), which is an alternative to Paper 2. Page numbers in this guide are those of the prescribed edition, Nick Hern Books, ISBN 9781854595270: Act One, Scene One runs from page 3, Scene Two from page 22, Act Two, Scene One from page 47 and Scene Two from page 78 to the end on page 87.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Diane Samuels 1995. Published by Nick Hern Books. Quotations and page numbers follow the revised Nick Hern Books edition of 2008 (ISBN 9781854595270), the edition prescribed by Pearson Edexcel. Quoted for criticism and review.',
  },
  workLength: {
    words: 17000,
    basis:
      'Estimated, not counted: the play runs from page 3 to page 87 of the prescribed Nick Hern Books edition (the final stage direction and "The End." fall on page 87), and a page of this mostly short dialogue carries roughly 200 words. Any length over 3,000 words sets the same 400-word page total, so the estimate cannot loosen the limit.',
  },

  overview: {
    summary: [
      'In Hamburg, in the winter before the Second World War, nine-year-old Eva Schlesinger is made by her mother, Helga, to sew the buttons on her own coat, because she is about to travel alone to England on the Kindertransport, the rescue that brought nearly 10,000 children, most of them Jewish, to Britain before the war. In Manchester she is taken in by Lil Miller. Her parents never follow. By the time she is seventeen Eva has renamed herself Evelyn, changed her birthday, been adopted by the Millers and naturalised, so when Helga, who has survived the camps, finds her after the war and asks her to start a new life with her in New York, Eva refuses.',
      "Samuels sets that story beside another, decades later, in the spare storage room of Evelyn's house in an outer London suburb. Evelyn, now an English middle-class woman in her fifties, is sorting out glasses and crockery for her daughter Faith, who is in her early twenties, about to move into a flat of her own and having second thoughts about going. Evelyn presses her to go, and when Faith announces that she is staying after all, coolly holds her to that decision. Searching the boxes, Faith finds a German picture book, Der Rattenfänger, and a box of letters and photographs, and Lil, now in her eighties, confirms what they mean: Evelyn is Eva.",
      'Past and present share one stage throughout. The child and the woman she became are played by two actors, and the adult Evelyn, who has built her life on keeping the past in boxes, is made to watch it being unpacked. The play is less about the rescue than about its price. Eva is saved, but the saving costs her a mother, a language, a religion and a name, and Evelyn protects herself by polishing glasses, keeping secrets and, in Act Two, tearing up her childhood letters and photographs.',
      'The strongest answers treat the play as a study of three mothers who each send a daughter away while wanting to keep her, of what survival does to love, and of the Ratcatcher, the storybook figure who takes children away. His shadow “hovers” over the first scene, “looms” at the end of Act One and, in the final stage direction, covers the whole stage.',
    ],
  },

  context: [
    {
      heading: 'Diane Samuels and how the play began',
      body: "Diane Samuels was born in 1960 into a Jewish family in Liverpool. She studied history at Sidney Sussex College, Cambridge, took a teaching qualification in drama at Goldsmiths, University of London, and taught drama in inner London secondary schools for five years. In her introduction to the prescribed edition she names three incidents that led to the play. A close friend, whose father had come on the Kindertransport, described struggling with the guilt of having survived, and Samuels was struck by how a parent's feelings could pass down to a child. Another friend learned only at his father's funeral that his mother had been in Auschwitz. And a fifty-five-year-old woman on a television documentary admitted that what she felt most strongly towards her dead parents was rage that they had abandoned her, although the abandonment had saved her life. That third story is worth remembering when you write about Evelyn and Helga. In 1991 Samuels wrote a scene in which a mother gives her nine-year-old daughter a coat that is too big and coolly shows her how to sew on a button, the situation that now opens the play. She interviewed former Kindertransport children, among them Bertha Leverton, and explains that although Eva/Evelyn is invented, nearly everything that happens to her really happened to one of the children.",
    },
    {
      heading: 'The Kindertransport, 1938 to 1939',
      body: 'On 9 and 10 November 1938, in the pogrom known as Kristallnacht, the Night of Broken Glass, Nazi paramilitaries, joined by some civilians, attacked Jewish homes, businesses and synagogues across Germany, which then included Austria. On 15 November a delegation appealed to the Prime Minister, Neville Chamberlain, and Britain agreed to take in unaccompanied children from infancy up to the age of seventeen. Their parents had to stay behind. The first party arrived at Harwich on 2 December 1938, and by the time the last group left Germany on 1 September 1939 nearly 10,000 children had come from Germany, Austria, occupied Czechoslovakia and the Free City of Danzig. Each child needed a guarantee of £50 towards eventual re-emigration. They were placed in foster homes, hostels, schools and farms, and the organisers did not insist that a Jewish child go to a Jewish home, which is how a girl from a Jewish family in Hamburg could end up with the Millers. For many, the parents who put them on the train were the family members who did not survive. In the play, Lil remembers that Eva arrived on 7 January 1939.',
    },
    {
      heading: 'Refugees in wartime Britain',
      body: 'On 1 September 1939 Britain began evacuating its cities in case of bombing; almost a million and a half people left danger areas in England in the first four days, among them 826,950 unaccompanied children. The scheme was called Operation Pied Piper, a grim coincidence for a play built on the Pied Piper story, though nothing suggests Samuels intended it. The play shows Eva, newly settled, being sent away a second time with a gas mask box round her neck. Once war began, German-speaking refugees could be treated as enemies, and in 1940 Churchill ordered the internment of male refugees aged 16 to 70 from enemy countries; around 1,000 former Kindertransport children were interned. Samuels puts that climate on stage in the Station Guard, who questions Eva on 11 September 1939 as she waits for parents who are not coming, asks her nationality, warns that they must look out for spies, and says her parents would be interned if they arrived.',
    },
    {
      heading: 'The Holocaust: Belsen and Auschwitz',
      body: "Bergen-Belsen was liberated by the British 11th Armoured Division on 15 April 1945. The troops found more than 13,000 unburied bodies and around 60,000 prisoners, most of them sick and starving, and army film units recorded what they saw. In the play Eva, now fifteen, watches a newsreel of the liberation until Lil covers her eyes and hurries her away. At Auschwitz about 1.1 million people were murdered, some 960,000 of them Jews; the gas chambers were fitted with nozzles made to look like showerheads, to deceive the victims. That is the meaning of Helga's account of her sick husband being put in line for the showers, and of Evelyn telling Faith that her father was gassed soon after arriving, in 1943. Samuels never stages the camps. She shows them through what reaches Eva and Evelyn: a newsreel, a silence, a mother who comes back thin and changed.",
    },
    {
      heading: 'The Pied Piper and Der Rattenfänger',
      body: "The legend of the Pied Piper of Hamelin, in German der Rattenfänger von Hameln (the ratcatcher of Hamelin), is dated to 1284: a piper rids the town of rats, is refused his payment, and leads the town's children away. The Brothers Grimm included it in their Deutsche Sagen (1816), and Robert Browning retold it in English in 1842. Samuels writes her own version for Eva's picture book. In hers, the town, spelt Hamlyn, is punished because one ungrateful soul did not count their blessings, and the children follow the piper's music up the mountain until the rock opens and they disappear into the abyss. A story that teaches children that the punishment was deserved is a telling choice for a child whom the play shows fearing that she has been bad, so that at the end of Act One the adult Evelyn has to assure her younger self that she has done nothing wrong.",
    },
    {
      heading: 'Passover and the Haggadah',
      body: 'The Haggadah is the Jewish text that sets out the order of the Passover Seder, the meal on the first night of Passover. Reading it fulfils the duty, placed on every Jewish parent, to tell their children the story of the Exodus, the escape of the Israelites from slavery in Egypt, and it is the youngest child who asks the questions. Helga posts Eva a Haggadah in a parcel from Germany, with the Rattenfänger book and a letter asking her to celebrate Seder night with other Jews in Manchester, and wondering what a Seder can be without its youngest child. The detail matters: the book exists so that one generation can pass its story to the next, which is exactly what Evelyn has refused to do, and what Faith demands of her.',
    },
    {
      heading: 'The play on stage',
      body: 'Kindertransport won the Verity Bargate Award for new writing in 1992, and was first performed by the Soho Theatre Company at the Cockpit Theatre, London, on 13 April 1993. It also won the Meyer-Whitworth Award. The Manhattan Theatre Club staged it in New York in 1994, and a Watford Palace Theatre production transferred to the Vaudeville Theatre in the West End in 1996. Shared Experience revived it on a UK tour in 2007. Nick Hern Books first published it in 1995. The revised 2008 edition prescribed for the exam has a new introduction by Samuels and includes personal accounts by people who came to Britain on the Kindertransport. The play arrived as survivors were beginning to speak publicly: in June 1989 a fiftieth-anniversary Reunion of Kindertransport, organised by Bertha Leverton, brought many of them together in London.',
    },
  ],

  themes: [
    {
      title: 'Identity and belonging',
      body: "Eva's Englishness is built piece by piece, and Samuels makes each piece a loss. On the train the Nazi official tells her to learn her number, because without it “you might forget who you are”; in England Lil takes the numbered label off within minutes. At sixteen Eva changes her birthday to the day Lil collected her from the station, and she tells Helga that Evelyn is the name on her naturalisation papers. The adult Evelyn insists the change was her own choice and a good one: “Germany spat me out. England took me in.” One reading takes her at her word and sees a survivor refusing to let the Nazis define her, which is the force of “You can’t let people who hate you tell you what you are.” The more convincing reading notices what the rebuilding required her to bury, including the mother who came back for her, and that Faith has to ask “Am I Jewish?” at all shows how completely the past has been hidden. Evelyn's first answer is that Faith has been baptised.",
    },
    {
      title: 'Mothers and daughters',
      body: "The play has three mothers, and each sends a daughter away while wanting to keep her. Helga puts Eva on the train because “any good parent would want to protect their child”, and makes her sew her own buttons because she must “manage on your own”. Lil sends Eva away as an evacuee, then admits “I didn’t want you to go” and later tells her “I want to keep you”. Evelyn, in the present, loads Faith with glasses and crockery for her new flat and presses her to stick by her decision to go, yet at the end the one thing she asks of her is “Stay my little girl forever.” Samuels sets the three side by side so that each comments on the others. One reading sees Evelyn repeating Helga's lesson without realising it: the daughter who was taught to manage alone now teaches her own daughter the same thing, briskly, as if feeling were a nuisance. The play does not rank the three mothers. Its point is that love and letting go are knotted together in all of them, and that a child cannot easily tell being protected from being rejected.",
    },
    {
      title: 'Memory and the buried past',
      body: "The whole play takes place in a storeroom, and Samuels turns it into a picture of a mind that has packed its history into boxes. Evelyn's first instinct is order: she polishes glasses and declares that “A chipped glass is ruined forever”, an image of damage that cannot be mended which describes her better than it describes the glass. The staging refuses to let the past stay packed away. When Evelyn first enters the room where Helga and Eva are, the stage direction says she ignores them if she sees them at all. When Evelyn and Lil tear up the letters and photographs in Act Two, Faith's question lands hard: “Did they die for you to forget?” Yet Evelyn cannot finish the job. She stops Lil tearing the Rattenfänger book, keeps the Haggadah and the mouth organ with it, and in the last scene hands all three to Faith. The ending suggests that the past can be passed on but not destroyed, and the Ratcatcher's shadow still falls across the stage.",
    },
    {
      title: 'Survival and its cost',
      body: "Everyone in the play survives by giving something up, and Samuels asks whether survival can ever be separated from guilt. Helga says it bluntly in the hotel after the war, when she tells Eva that everyone has done bad things in the last years that they regret: “That is how we survive.” Evelyn gives the price its sharpest form when she turns on Lil: “Part of me is dead because of you.” At the quayside she explains her choice in an image of drowning, “I had to let go to float”: the child could only stay alive by dropping the weight her mother gave her. Helga has already made the opposite case, that she lost her husband but “did not lose myself”. One reading takes Evelyn's side and blames Lil, whom she calls a “Child-stealer”, or Helga, whom she calls the Ratcatcher. A fairer reading, and the one the play supports, is that the damage was done by the history that forced every choice, which is why Lil's question “Am I Hitler?” sounds both absurd and painfully reasonable.",
    },
    {
      title: 'Fear and the Ratcatcher',
      body: "The Ratcatcher begins as a picture-book villain who threatens “I will search you out whoever wherever you are”. Samuels then lets him out of the book. The same actor plays the Nazi Border Official, the English Organiser, the Postman and the Station Guard, so every official who frightens Eva wears the Ratcatcher's face, whether he is a Nazi or an Englishman. His shadow grows through the play: it “hovers” as Eva puts on her label, “looms” at the end of Act One and covers the stage at the end. By Act Two he has moved inside Evelyn, and at the quayside she tells her own mother “You were the Ratcatcher.” The figure shows how a child's fear works. Eva cannot understand the politics that uproot her, but she understands a story about a man who takes children away, and that story becomes the shape she gives her whole life. The strongest answers treat him as a way of seeing, not simply as a symbol of the Nazis.",
    },
    {
      title: 'Journeys and separation',
      body: "The play is built on departures. Eva's train out of Hamburg, with her parents on the platform beyond a window that is “sealed tight”, is followed by the evacuation train she leaps from, and the play's last scene in the past is a quayside where Helga begs her daughter to “get on the boat”. Each journey is a separation, and each time the child wants to stay. The Kindertransport journey never really ended for Evelyn: Faith says her mother cannot travel on a train without hyperventilating and crosses the road to avoid a policeman. The present-day plot is a journey too. Faith is due to move into a flat and keeps changing her mind, and Evelyn urges her to go. Faith's departure differs from the others in one important way: when she finally leaves the storeroom, it is by choice, and she carries the family's past with her.",
    },
    {
      title: 'Jewish heritage and faith',
      body: "Samuels shows Jewish identity being given, taken away and handed on through objects and rituals. Helga hides a gold chain with a Star of David in the heel of Eva's shoe and later posts her a Haggadah, urging her to keep Passover. Lil, kind but unaware of what the food laws mean to Eva, gives her sandwiches with ham in them and tells her that, according to Jesus, she need not “keep to the old laws”. Evelyn is baptised at eighteen and remembers feeling “cleansed” and “Purified”, words suggesting she felt her Jewishness as a stain rather than a faith. When she finally hands the Haggadah to Faith she calls it the book for “some Jewish festival”, as if it belonged to strangers. Since the Haggadah exists so that parents can tell their children a story of escape, that handing-over means more than Evelyn admits.",
    },
  ],

  characters: [
    {
      name: 'Eva',
      role: "Evelyn's younger self: a German Jewish girl from Hamburg, nine when the play begins and seventeen by its end",
      body: "Eva is bright, stubborn and funny. When Helga takes her mouth organ out of the case, because only clothes are allowed, she sneaks it back in, and when the train crosses the border she throws down the official's toffee and shouts “Stuff your stupid Hitler.” In England her courage turns practical. With little English she writes a letter asking for permits for her parents, and its phrasing (“I am much sad”) shows her learning the language as she goes. When Lil explains that servants' jobs are the only ones that will let them in, Eva secretly goes knocking on the doors of big houses to find them work, and lies about it until Lil forces out the truth. The losses accumulate. Her parents do not arrive in September 1939, she watches a newsreel of Belsen at fifteen, and she takes off the jewellery her mother hid for her and wants to sell it. When Helga finds her, guesses she is sixteen and has to be corrected, the lost years are in a single word. The cast list describes her as Jewish German becoming increasingly English. Samuels never makes her only a victim: each step towards England is also a decision, which is what makes her refusal of Helga so painful.",
    },
    {
      name: 'Evelyn',
      role: "Eva as an adult: an English middle-class woman in her fifties, and Faith's mother",
      body: "Evelyn has made herself thoroughly English. She is controlled and house-proud, polishing glasses in her first scene and briskly telling Faith, who is wavering about her new flat, to stick by her commitment. When her past is uncovered she tries to walk out rather than talk, then locks herself in the storeroom with an ashtray full of cigarette stubs. Faith says she panics on trains and avoids policemen, and the audience can see why: the fears of the nine-year-old never left. Yet Evelyn is not simply in denial. She has kept the box for decades, will not let Lil tear up the Rattenfänger book, tells Faith her parents' names, and hands her the books at the end. Her tragedy is that the defences which let her survive now stand between her and her own child, and her most honest line, “Stay my little girl forever”, contradicts everything she has said about Faith leaving.",
    },
    {
      name: 'Helga',
      role: "Eva's mother: a German Jewish woman of the late 1930s, in her early thirties, married to Werner",
      body: "Helga is loving but unsentimental. She makes Eva sew on her own buttons, has a cobbler hide her gold watch and jewellery in the heels of Eva's shoes, and explains that sending children away is what good parents do. Her parcel from Germany asks Eva to keep Passover. She survives the camps, though her husband Werner does not, and after the war she comes to England for the daughter she saved, only to find her renamed Evelyn, adopted, naturalised and unwilling to go with her to New York. She no longer even knows her daughter's age. Her last speeches are among the harshest in the play, but Samuels gives her a case: she lost her husband, she says, but not herself. Whether she is a heroine or, as Evelyn comes to see her, the Ratcatcher, is the question the play leaves with its audience.",
    },
    {
      name: 'Lil',
      role: "Lil Miller, Eva's English foster mother in Manchester; in her eighties in the present, and Faith's gran",
      body: "Lil is late to collect Eva from the station, lets a nine-year-old try her cigarette and feeds her ham, but she is also the one who stays. She is brisk, funny and practical, with children of her own, Nora and Margaret, and a husband Eva calls Uncle Jack. Her kindness has an edge of possession: she removes Eva's label with a cheerful “Over. Finished. Done. Goodbye.”, tells her not to hide behind German, and later says plainly that she wants to keep her. In the present she is the keeper of the secret, and her question to Faith, “Aren’t I real now?”, shows how much her own place in the family depends on the past staying buried. She did not know at the time that Helga had survived, and Evelyn believes that if she had known she would have made her go. Samuels is fair to her: without Lil, Eva would have had nobody, and Lil's protest against Evelyn's anger shows how unjust that anger can be.",
    },
    {
      name: 'Faith',
      role: "Evelyn's only child, in her early twenties, about to move into a flat of her own",
      body: "Faith is the audience's way in. She is curious, impatient and sometimes unfair, digging through the boxes and piecing the story together from letters before anyone will tell her. Her anger is real: she has always believed her mother's unhappiness was her own fault, and in their first quarrel she blocks the door to stop Evelyn walking out. But she wants more than facts. “I have a background, a context,” she says in Act Two, turning a family secret into an inheritance. Faith asks the questions a modern audience would ask, including whether she herself is Jewish, and by accepting the books and the mouth organ and taking her own old toys at the end, she becomes the one member of the family who leaves carrying its past rather than hiding it.",
    },
    {
      name: 'The Ratcatcher',
      role: "The villain of Eva's storybook: a mythical figure whose actor also plays four real officials",
      body: "The Ratcatcher is the villain of Der Rattenfänger, Samuels's version of the Pied Piper legend: a piper who leads the children of Hamlyn away to punish the town. The cast list describes him as a mythical character who also plays the Nazi Border Official, the English Organiser, the Postman and the Station Guard. He is heard in pipe music, which is the first sound of the play, and seen as a shadow that grows until, in the final stage direction, it covers the stage. His power lies in what he stands for: the people and forces that take children from their parents, and the fear that stays with Eva long after the real danger has passed.",
    },
    {
      name: 'The Nazi Border Official',
      role: 'Played by the Ratcatcher actor, and labelled OFFICER in the script; searches Eva on the train out of Germany',
      body: 'He throws the contents of her case onto the floor, finds the mouth organ, orders her to know her number, draws a huge Star of David on her label and then gives her a toffee, which she throws down as soon as the train crosses the border. His mixture of menace and petty kindness makes him more frightening than open cruelty would.',
    },
    {
      name: 'The English Organiser',
      role: 'Played by the Ratcatcher actor; meets Eva at the station in England',
      body: 'He stumbles over the pronunciation of her name and talks to her in English she cannot follow, impatient with her tears as she begs in German not to be sent back to Germany. That the first Englishman she meets is played by the same actor as the Nazi official shows how the world looks to a frightened child: every official is the Ratcatcher.',
    },
    {
      name: 'The Postman',
      role: "Played by the Ratcatcher actor; delivers Helga's parcel in Manchester",
      body: 'He enters doing a mock Nazi salute, guesses that Eva has been taught to give it, and makes her do it back. The joke is not funny to her, and Samuels uses him to show how lightly the English around her treat what she has escaped.',
    },
    {
      name: 'The Station Guard',
      role: 'Played by the Ratcatcher actor; questions Eva as she waits for her parents in September 1939',
      body: 'He asks about her nationality, talks of spies and says her parents would be interned if they arrived, until Lil takes her away. He shows that in England, too, a German voice could make a Jewish refugee child a suspect.',
    },
  ],

  keyQuotes: [
    {
      text: 'An abyss is a deep and terrible chasm.',
      where: 'Helga, Act One, Scene One (p. 3)',
      analysis:
        "The play's first exchange is a child asking what a word in her storybook means, and Helga's calm answer plants the image that runs through the whole play. The abyss is where the Ratcatcher leads the children of Hamlyn; Eva later asks whether she is in it, and the adult Evelyn uses the word for the past itself.",
    },
    {
      text: 'There’s no ‘later’ left, Eva.',
      where: 'Helga, Act One, Scene One (p. 4)',
      analysis:
        "Eva asks whether she can sew her buttons on later. Helga's reply treats time as a supply that has run out, turning a household chore into training for survival. The audience senses the danger before Eva does, and the firmness that looks like coldness to the child is really fear. The word returns at the quayside, when Helga is the one kept waiting.",
    },
    {
      text: 'Because any good parent would want to protect their child.',
      where: 'Helga, Act One, Scene One (p. 8)',
      analysis:
        "Helga explains why parents who can are sending their children away. The logic is simple and loving, but it contains the play's central paradox: protecting Eva means losing her. The line sets up every later parent in the play, Lil and Evelyn included, who must decide when to hold on and when to let go.",
    },
    {
      text: 'A chipped glass is ruined forever.',
      where: 'Evelyn, Act One, Scene One (p. 10)',
      analysis:
        "Evelyn's first appearance is spent polishing glasses for Faith's new flat, and this blunt verdict, with its absolute “forever”, reveals her way of thinking: damage cannot be repaired, only put out of sight. Read against what the audience learns later, the glass becomes an image of Evelyn herself, damaged in childhood and convinced the damage is permanent.",
    },
    {
      text: 'You are my children. You are my jewels.',
      where: 'Helga, quoting her grandfather, Act One, Scene One (p. 13)',
      analysis:
        "Helga repeats her grandfather's words just after revealing the real jewels hidden in Eva's shoes, so the metaphor and the object arrive together. Children are the family's treasure and its future. Later Eva takes the jewellery off and wants to sell it, and her rejection of the jewels becomes a rejection of the inheritance they stand for.",
    },
    {
      text: 'I will search you out whoever wherever you are.',
      where: 'The Ratcatcher, Act One, Scene One (p. 16)',
      analysis:
        'The storybook villain speaks for himself as the story is read aloud in past and present at once. The breathless run of “whoever wherever”, with no comma to slow it, makes the threat total and inescapable, and in a sense it is kept: the Ratcatcher finds Eva at the border, in England and in her own memory.',
    },
    {
      text: 'If you don’t know it you might forget who you are.',
      where: 'The Nazi Border Official (labelled OFFICER), Act One, Scene One (p. 19)',
      analysis:
        'The official means that without her label number Eva is lost, but Samuels makes the line a prophecy about identity. The regime has reduced a child to a number, and yet the play will show Eva forgetting who she is in quite another way, by becoming Evelyn. One of the most frightening men in the play speaks one of its truest lines.',
    },
    {
      text: 'Over. Finished. Done. Goodbye.',
      where: 'Lil, Act One, Scene Two (p. 27)',
      analysis:
        'Lil says this as she takes the numbered label off Eva, and the four minor sentences, simplified for a child with no English, sound like kindness: the persecution is over. But the words are also a farewell to everything the label connected her to. The line captures Lil exactly, warm and well meant but careless of what she is erasing.',
    },
    {
      text: 'Aren’t I real now?',
      where: 'Lil, Act One, Scene Two (p. 33)',
      analysis:
        "Faith has been asking about Evelyn's real family, and Lil's rhetorical question shows how the word “real” wounds her. It is a moment of sympathy for Lil: her whole claim to be Evelyn's mother rests on the past staying buried, so Faith's discovery threatens her place as well as Evelyn's peace.",
    },
    {
      text: 'Don’t hide behind the German. It won’t protect you',
      where: 'Lil, Act One, Scene Two (p. 37)',
      analysis:
        'Lil rebukes Eva for answering her in German. To Lil, German is a shield Eva uses to avoid blame; to Eva it is the last thing she has of home. The irony is sharp: Lil is right that German will not protect her in England, and the lesson is one of many that turn Eva into Evelyn.',
    },
    {
      text: 'He won’t take you anywhere ever again.',
      where: 'Evelyn, Act One, Scene Two (p. 46)',
      analysis:
        "As the Ratcatcher's pipe music plays and his shadow looms, the adult Evelyn soothes her frightened younger self, and the two figures speak to each other across time. In the same speech the prescribed edition has her say “You’re with me now. He can’t touch me.”, slipping from you to me, which suggests that the child and the woman are one person. Act One ends on a promise nobody can keep.",
    },
    {
      text: 'Through our children we live. That’s how we cheat death.',
      where: 'Helga, Act Two, Scene One (p. 47)',
      analysis:
        "Helga returns to the jewels metaphor at the start of Act Two, while the adult Evelyn sits beside an ashtray of stubs in the locked storeroom. The line hands Eva an enormous responsibility: she is how her family survives. It explains why Helga will later treat her daughter's refusal as a second death.",
    },
    {
      text: 'The whitewash has been stripped away and underneath is pure filth.',
      where: 'Evelyn, Act Two, Scene One (p. 55)',
      analysis:
        'Evelyn describes her uncovered past in the language of dirt. Whitewash is a cheap coat of paint that hides what is beneath, which is exactly what her English life has been. That she calls the truth “pure filth” shows shame rather than grief, the same instinct that makes her polish, scrub and later feel “cleansed” by baptism.',
    },
    {
      text: 'Did I start the war? Am I Hitler?',
      where: 'Lil, Act Two, Scene One (p. 61)',
      analysis:
        "Lil's two rhetorical questions are meant to show how unfair Evelyn is being, and they do. But Evelyn answers that Lil might as well have been, and the exchange exposes how grief looks for someone within reach to blame. Samuels lets both women be right: Lil did not cause the war, and she did help to erase Eva.",
    },
    {
      text: 'Part of me is dead because of you.',
      where: 'Evelyn, to Lil, Act Two, Scene One (p. 61)',
      analysis:
        "Evelyn's accusation turns the language of the Holocaust inward: the part of her that died is the German Jewish girl. The short, plain sentence carries great weight, and it is soon followed by “Child-stealer”, which casts Lil, the woman who saved her, as a version of the Ratcatcher.",
    },
    {
      text: 'All our children leave us. And one day they never come back.',
      where: 'Evelyn, to Lil, Act Two, Scene One (p. 68)',
      analysis:
        'Evelyn is talking about Faith, but the sentence describes her own childhood exactly: she left and never came back. The generalising “All our children” makes loss sound like a law of nature, which is how Evelyn copes with it, and it may explain why she has pressed Faith to go rather than wait to be left.',
    },
    {
      text: 'Did they die for you to forget?',
      where: 'Faith, Act Two, Scene One (p. 73)',
      analysis:
        'Faith finds the letters and photographs torn up and asks the question the play has been building towards. The rhetorical question makes forgetting a moral failure, a betrayal of the dead. It is harsh, and Faith has not lived what Evelyn lived, but it shows the second generation claiming a right to the past its parents buried.',
    },
    {
      text: 'That is how we survive.',
      where: 'Helga, Act Two, Scene One (p. 76)',
      analysis:
        "In the hotel after the war, soon after learning that Eva has been adopted, Helga says that everyone has done bad things in these years that they regret. It sounds generous, yet it frames Eva's new life as a regrettable necessity to be put right, when Eva regards it as her life. The line sets up their final quarrel.",
    },
    {
      text: 'She would have handed me back like a borrowed package.',
      where: 'Evelyn, about Lil, Act Two, Scene Two (p. 80)',
      analysis:
        'Faith has asked whether Lil knew that Helga survived, and Evelyn explains why she was never told. The simile reduces a child to a parcel on loan, and it reveals how Evelyn sees herself: not loved for herself but held until claimed. The Kindertransport label, which treated her as luggage with a number, is still shaping how she understands love.',
    },
    {
      text: 'I have a background, a context.',
      where: 'Faith, Act Two, Scene Two (p. 80)',
      analysis:
        'Evelyn has just told her not to hanker after the past, and called it an abyss. Faith answers with calm, almost academic nouns, and the contrast is the difference between the generations: what is a bottomless drop for the survivor is, for her daughter, solid ground to stand on. Before, Faith says, all she knew was a blank space.',
    },
    {
      text: 'Germany spat me out. England took me in.',
      where: 'Evelyn, Act Two, Scene Two (p. 81)',
      analysis:
        "Two short, balanced sentences with opposite verbs sum up Evelyn's version of her life. “Spat” makes Germany a mouth rejecting something disgusting, the same imagery of dirt she uses for her past. The neatness is the point: it is a story told so often that it has stopped hurting, and the play is about what it leaves out.",
    },
    {
      text: 'I was cleansed that day. Purified.',
      where: 'Evelyn, on her baptism at eighteen, Act Two, Scene Two (p. 81)',
      analysis:
        'Evelyn remembers her baptism in religious language of washing, and the one-word sentence “Purified” lands like relief. The imagery links to her polishing and to “pure filth”: she experienced her Jewish origins as something dirty to be scrubbed away, a painful sign of how deeply the persecution got into her.',
    },
    {
      text: 'Home is inside you. Inside me and you. It is not a place.',
      where: 'Helga, at the quayside, Act Two, Scene Two (p. 84)',
      analysis:
        'Eva says she cannot leave home yet, and Helga redefines the word. For a woman who has lost her house, her husband and her country, home can only be a bond between people. It is a moving idea, but it asks Eva to give up the home she has made in England, which is why it fails to persuade her.',
    },
    {
      text: 'Hitler started the job and you finished it.',
      where: 'Helga, Act Two, Scene Two (p. 85)',
      analysis:
        "This is the cruellest line in the play. By setting her daughter's rejection beside genocide, Helga shows how completely she had staked her survival on her child. It is unfair, and Samuels means us to feel that, but it comes from a woman who has lost her husband and her world and now her daughter.",
    },
    {
      text: 'You were the Ratcatcher.',
      where: 'Evelyn, to Helga, Act Two, Scene Two (p. 85)',
      analysis:
        "At the climax the storybook villain and the mother merge. For Evelyn, the woman who put her on the train is the figure who takes children away, however loving her reasons. The short declarative sentence shows how the child's fear has hardened into the adult's story about her life, and why the reconciliation Helga hopes for cannot happen.",
    },
    {
      text: 'I had to let go to float.',
      where: 'Evelyn, to Helga, Act Two, Scene Two (p. 85)',
      analysis:
        "Evelyn pictures herself thrown into the sea with her mother's baggage on her shoulders. Letting go is both the crime Helga accuses her of and the only way she could stay alive, so the metaphor turns Helga's charge of betrayal into a story of survival. It is the play's clearest defence of Evelyn.",
    },
    {
      text: 'Stay my little girl forever.',
      where: 'Evelyn, to Faith, Act Two, Scene Two (p. 86)',
      analysis:
        "Faith asks what she can do to help, and this is Evelyn's answer. After pressing Faith to stick by her plan to leave home, the imperative reveals the wish underneath: Evelyn, like Helga and Lil, wants to keep the daughter she is sending away. “Forever” echoes her verdict on the chipped glass.",
    },
    {
      text: 'Yes we are.',
      where: 'Faith, the last line of the play, Act Two, Scene Two (p. 87)',
      analysis:
        "Evelyn has asked whether Faith has everything, and says “All done in here then”; Faith agrees, holding her box of toys. Her plural takes her mother in, so the last spoken word of the play is shared. Yet it is followed by the final stage direction, the Ratcatcher's shadow covering the stage, so the play ends on qualified hope under a lasting fear.",
    },
  ],

  extracts: [
    {
      title: 'Sewing on the buttons: the opening',
      where: 'Act One, Scene One, pages 3 to 13',
      pointer:
        'From the opening stage direction, with Eva on the storeroom floor reading Der Rattenfänger, to Helga telling Eva what is hidden in the heels of her shoes and quoting her grandfather (page 13). The present-day scene between Evelyn and Faith is interleaved from page 4; follow Helga and Eva.',
      summary:
        "In Hamburg Helga, holding a coat, a button, a needle and thread, insists that nine-year-old Eva sew the buttons on herself. Eva protests, asks why two other children she knows, Karla and Heinrich, are not going, and tries to take her mouth organ. Helga explains that good parents send their children away if they can, promises that she and Eva's father will follow, and reveals that a cobbler has hidden her gold watch in one heel of Eva's shoes and two rings, a chain with a Star of David and a charm bracelet in the other.",
      annotations: [
        {
          phrase: 'An abyss is a deep and terrible chasm.',
          note: "The first image of the play, given as a mother's calm answer to a child's question. The audience hears the danger in it long before Eva does.",
        },
        {
          phrase: 'It’s to last next winter too.',
          note: 'Helga explains why the coat is too big. It is a hopeful plan for the future and also a sign that she knows Eva may be away for a very long time.',
        },
        {
          phrase: 'There’s no ‘later’ left, Eva.',
          note: 'Time is treated as something that has run out. The button lesson is really a lesson in managing alone, and Helga cannot soften it without frightening Eva.',
        },
        {
          phrase: 'any good parent would want to protect their child',
          note: 'The paradox of the play in a single clause: protecting Eva means sending her away, so love and separation become the same act.',
        },
        {
          phrase: 'You are my jewels.',
          note: "Spoken just after the real jewels are revealed in Eva's shoes. The metaphor makes Eva the family's treasure and its future, a weight she will later refuse to carry.",
        },
      ],
      question:
        'How does Samuels present Helga as a mother in the opening scene? Refer closely to her language and to the stage directions.',
    },
    {
      title: 'Arrival: Lil meets Eva',
      where: 'Act One, Scene Two, pages 22 to 28',
      pointer:
        'From Eva alone at a station in England at the start of Act One, Scene Two (page 22), through the English Organiser (pages 23 to 25), to Lil sharing her cigarette and leaving Eva for a moment (page 28).',
      summary:
        "Faith reads aloud from one of the letters she has found while, in the past, Eva waits at a station in England, trying to sound grateful for her tea and bread. The English Organiser, played by the Ratcatcher actor, stumbles over her name and loses patience when she cries for her parents in German. Lil Miller arrives late, introduces herself slowly, takes off Eva's numbered label, lights a cigarette and lets the curious child try it, then goes off for a moment.",
      annotations: [
        {
          phrase: 'eating the bread of freedom',
          note: 'Eva uses the grand phrase she has been taught, then admits the bread tastes like sponge. Her attempt to sound grateful keeps slipping into homesickness.',
        },
        {
          phrase: 'Ich will meine Mutti.',
          note: "Eva's grief comes out in German, translated in brackets in the script. The audience understands what the English Organiser cannot, which makes his impatience harder to watch.",
        },
        {
          phrase: 'Over. Finished. Done. Goodbye.',
          note: "Lil's minor sentences as she removes the label sound like comfort, but the word goodbye is aimed at Eva's whole past, and Eva has no English to answer.",
        },
        {
          phrase: 'What if I forget my number?',
          note: "Eva's worried question in German, given in English in brackets, echoes the border official's warning. She has been taught that the number is who she is, so losing it feels dangerous rather than freeing.",
        },
        {
          phrase: 'A quickie then.',
          note: 'Lil lets a nine-year-old try her cigarette. It is comic, generous and irresponsible at once, and it shows her winning Eva over by breaking the rules Helga would have kept.',
        },
      ],
      question:
        "How does Samuels present Eva's first experiences of England in this part of the play?",
    },
    {
      title: 'Evelyn and Lil destroy the papers',
      where: 'Act Two, Scene One, pages 59 to 62',
      pointer:
        'From Evelyn asking Lil what to do with the papers (page 59) to the stage direction in which she tears up a letter and the two women destroy each item in the box (page 62).',
      summary:
        'In the locked storeroom Evelyn explains why she has never thrown the papers away: some of them prove her right to stay in Britain. Lil hands her a letter, and Evelyn, who says she will rip it up, asks why Lil is so keen for her to destroy everything. She turns on Lil, accusing her of taking too much of her and of making her betray her parents. Lil insists that she got her through it and kept her alive. The quarrel escalates through accusation and denial until Evelyn tears the letter into small pieces and the two women destroy the contents of the box together.',
      annotations: [
        {
          phrase: 'prove I have a right to be here',
          note: 'Decades on, Evelyn still fears being sent away. The papers are both a threat and a protection, which is why she has kept them for decades without wanting to touch them.',
        },
        {
          phrase: 'You made me betray her.',
          note: "Evelyn blames Lil for her own assimilation. The accusation is unfair, but it shows how much of Eva's change felt to her like disloyalty to Helga.",
        },
        {
          phrase: 'Did I start the war? Am I Hitler?',
          note: "Lil's rhetorical questions are meant to end the argument by showing how absurd Evelyn is being, but Evelyn refuses to let them.",
        },
        {
          phrase: 'Part of me is dead because of you.',
          note: 'The plain monosyllables make this the emotional centre of the quarrel. The dead part is Eva, the German Jewish girl Lil helped to turn into Evelyn.',
        },
        {
          phrase: 'Child-stealer.',
          note: 'A one-word accusation that casts Lil as the Ratcatcher, the figure who takes children from their parents, though Lil is the woman who kept her safe.',
        },
      ],
      question:
        'Explore how Samuels presents the relationship between Evelyn and Lil in this part of the play.',
    },
    {
      title: 'The quayside',
      where: 'Act Two, Scene Two, pages 82 to 86',
      pointer:
        'From the stage direction bringing in the sounds of a quayside and a boat about to leave (page 82) to Evelyn asking Helga why she sent her away, and Faith entering to find her mother crying (page 86).',
      summary:
        "After the war Helga meets her daughter at the waterfront and begs her to board the boat to New York now rather than later. Eva, who insists on the name Evelyn, is accused of coldness, and will only promise to come in a month or two. Helga tells her that she saw Werner sent to his death and that she held on to herself. The adult Evelyn then takes over her younger self's side of the quarrel, and mother and daughter accuse each other of a kind of killing before Evelyn asks why Helga ever let her go.",
      annotations: [
        {
          phrase: 'When is ‘later’ when you are coming?',
          note: 'An echo of the opening scene, reversed. The mother who once had no time for later is now the one kept waiting by her daughter.',
        },
        {
          phrase: 'Home is inside you.',
          note: 'Helga redefines home as a bond between people, because she has no place left. For Eva, home is now a place, and it is England.',
        },
        {
          phrase: 'But I did not lose myself.',
          note: "Helga's pride in holding on to her identity through the camps becomes an accusation: Eva, who was saved from them, is the one who lost herself.",
        },
        {
          phrase: 'Hitler started the job and you finished it.',
          note: "The most brutal line in the play equates a daughter's rejection with genocide. It is unfair, and its unfairness measures how much Helga has lost.",
        },
        {
          phrase: 'You were the Ratcatcher.',
          note: "Evelyn fuses the storybook villain with her mother. Whether this is memory or imagination, it shows the child's fear shaping the adult's whole account of her life.",
        },
        {
          phrase: 'I might have wanted to die with you.',
          note: "Evelyn's most shocking admission reverses the logic of the rescue. Survival, which Helga fought for, is what the child never asked for.",
        },
      ],
      question:
        'Explore how Samuels presents the final meeting between Helga and her daughter. You must consider language, form and structure in your answer.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'German dialogue with bracketed translations',
      example:
        'At the station in England Eva cries “Ich will meine Mutti”, and the script gives the English in brackets (Act One, Scene Two, p. 24). Years later, in the hotel, Helga greets her in German and Eva answers in English that she does not quite understand (p. 75).',
      effect:
        "Eva's German is heard as the English characters hear it, as noise, while the audience is given the meaning. This puts the audience on Eva's side and makes the English Organiser's impatience harder to forgive. By the hotel scene the position has reversed: the language that once isolated Eva in England now separates her from her own mother, so the script's use of German dramatises her assimilation.",
    },
    {
      technique: 'Non-standard English that shows a language being learned',
      example:
        "Eva's letter asking for help for her parents, “I am much sad” (p. 34), and her question to Lil, “If not do servant, they not come?” (p. 35).",
      effect:
        "German word order and missing verbs show a nine-year-old thinking in one language and speaking in another. The errors are touching rather than comic, because what she is struggling to say is so serious: she is trying to save her parents' lives in a language she barely knows.",
    },
    {
      technique: 'Recurring motif: the abyss',
      example:
        '“An abyss is a deep and terrible chasm” (Helga, p. 3); “Am I in the abyss?” (Eva, after leaping from the evacuation train, p. 58); “It is an abyss” (Evelyn, on the past, p. 80).',
      effect:
        "The word travels from a storybook definition to a frightened child's question to an adult's refusal to look back. Each use deepens it, so that by the end the abyss stands for the Holocaust, for the loss of her parents and for the part of Evelyn's own life she will not enter.",
    },
    {
      technique: 'Extended metaphor: children as jewels',
      example:
        'Helga quotes her grandfather, “You are my jewels” (p. 13), then says “Through our children we live” (p. 47); Eva later lists the hidden gold and resolves to sell it (pp. 70 to 71).',
      effect:
        "Samuels makes the metaphor literal: real jewels travel in Eva's shoes. When Eva takes them off and wants to sell them, rejecting the objects becomes rejecting the inheritance they represent, and the watch she hides under her socks to stop hearing it tick becomes a heartbeat of the past she cannot silence.",
    },
    {
      technique: 'Repetition across time: the word later',
      example:
        'Helga refuses Eva in Hamburg, “There’s no ‘later’ left” (p. 4); at the quayside she pleads, “When is ‘later’ when you are coming?” (p. 83).',
      effect:
        "The echo reverses the two women's positions. The mother who had no time to wait is now the one kept waiting, and the daughter has learned the lesson of the button scene, to manage on her own, so well that she no longer needs her mother. A single word carries the whole relationship.",
    },
    {
      technique: 'Minor sentences and one-word lines',
      example:
        'Lil removing the label: “Over. Finished. Done. Goodbye.” (p. 27); Evelyn to Lil: “Child-stealer.” (p. 62).',
      effect:
        "Short, verbless sentences carry the most weight in the play. Lil's are simplified for a child and sound kind; Evelyn's is a verdict with no room for reply. In both cases the form cuts something off, which is exactly what the words are doing.",
    },
    {
      technique: 'Rhetorical questions',
      example:
        'Lil: “Aren’t I real now?” (p. 33) and “Am I Hitler?” (p. 61); Evelyn asks Faith whether it is so wrong to want “a decent, ordinary life” (p. 81).',
      effect:
        "Characters use questions to defend themselves, and each one invites the audience to answer. Evelyn's plea for an ordinary life is hard to argue with, which is Samuels's point: the play refuses to make the survivor's choices simply wrong.",
    },
    {
      technique: 'The language of dirt and cleansing',
      example:
        '“The whitewash has been stripped away and underneath is pure filth” (p. 55); her baptism: “I was cleansed that day. Purified.” (p. 81); stage directions show her “polishing madly” (p. 7).',
      effect:
        'Evelyn talks about her past as dirt and about becoming English and Christian as washing. Her compulsive polishing puts the same idea into action. The pattern suggests that persecution taught her to feel her origins as shameful, which is why she cannot simply grieve for them.',
    },
    {
      technique: 'Imagery of the body and of drowning',
      example:
        'Evelyn to Faith, of her blood: the “freezing stuff stuck in my veins” (p. 73); to Helga: “I had to let go to float.” (p. 85).',
      effect:
        "The image of frozen blood shows Evelyn's emotional numbness as something physical, held in by force, and she fears that one wound opened would never stop bleeding. The drowning image explains where the numbness came from: to stay afloat as a child she had to let go of everything her mother gave her.",
    },
    {
      technique: 'Sound and visual effects in the stage directions',
      example:
        "Ratcatcher music is the first sound of the play (p. 3); the Ratcatcher's shadow “hovers” (p. 16) and “looms” (p. 45); in the final direction it “covers the stage” (p. 87).",
      effect:
        "Much of the play's fear is carried by sound and light rather than speech. The shadow grows at each appearance, and the last image is visual, not verbal, so the audience leaves with a threat that no line of dialogue resolves.",
    },
    {
      technique: 'Shifting pronouns',
      example:
        'Evelyn soothing Eva at the end of Act One: “You’re with me now. He can’t touch me.” (p. 46).',
      effect:
        "The slide from you to me in consecutive sentences suggests that when Evelyn comforts the child she is comforting herself. Read as a slip, it confirms the play's central staging idea, that Eva and Evelyn are one person split in two. The line is worded differently in the American edition, so quote the prescribed one.",
    },
  ],

  structureForm: [
    {
      heading: 'Two acts, four scenes, one room',
      body: "The play has two acts of two scenes each (in the prescribed edition, starting on pages 3, 22, 47 and 78, and ending on page 87), all set in one place: a spare storage room in Evelyn's house in an outer London suburb in recent times. Keeping every scene, past and present, in this one room is Samuels's key choice. Hamburg, the train, the stations, a cinema's newsreel, a hotel and a quayside all have to be played there, which suggests we are inside Evelyn's head, among the things she has stored and cannot throw away.",
    },
    {
      heading: 'Past and present on one stage',
      body: 'Scenes from 1939 onwards and scenes from the present run side by side, often overlapping. When Evelyn first enters, the stage direction says she ignores Helga and Eva if she sees them at all, and that sets the rule: the two times share a room but rarely acknowledge each other. This non-naturalistic staging denies that the past is over. Samuels uses it for pointed parallels: Helga reads the Rattenfänger story to Eva while Faith, decades later, finds an identical copy and reads from it too, so a mother reading to her child and a daughter discovering the book speak one text together.',
    },
    {
      heading: 'One character, two actors',
      body: "Eva and Evelyn are the same person, played by two actors. The cast list presents Eva as Evelyn's younger self, aged nine at the start and seventeen at the end, and Evelyn as an English woman in her fifties. For most of the play they occupy different times. At the end of Act One Evelyn speaks to her frightened younger self, and at the quayside in the final scene she takes over Eva's side of the quarrel with Helga. The splitting shows how completely Evelyn has cut herself off from her childhood; the moments when the two meet show that the cut never healed.",
    },
    {
      heading: "Doubling: the Ratcatcher's many faces",
      body: "The cast list asks one actor to play the Ratcatcher and also the Nazi Border Official, the English Organiser, the Postman and the Station Guard. A practical saving becomes an argument: every figure of authority who frightens Eva, German or English, cruel or merely careless, is the same man. The doubling lets the audience share a child's view of the world, in which officials all look alike, and it prepares for the climax, when Evelyn gives the Ratcatcher's face to her own mother.",
    },
    {
      heading: 'A story inside the play',
      body: 'Der Rattenfänger works as a frame and a prophecy. Its tale of children led away into an abyss is read in the first scene, just before Eva boards her train, and its words keep returning. The inset story tells the audience how to read the main plot, and it shows how Eva makes sense of what happens to her: through a story of punishment, in which one ungrateful soul brings disaster on everyone. That shape of guilt stays with her into adult life.',
    },
    {
      heading: 'Three departures and a leaving home',
      body: "The past plot moves through three journeys: the train out of Hamburg in Act One, the evacuation train Eva leaps from in Act Two, Scene One, and the quayside where she refuses to leave with Helga in Act Two, Scene Two. Each is a parting, and in each the child's wish is to stay. They are set against the present-day plot, which is about Faith leaving home for a flat. The structure invites comparison: Evelyn pushes Faith to go much as Helga pushed Eva, but the earlier departures are forced by history and the last one, Faith's, is chosen.",
    },
    {
      heading: 'Objects that carry the plot',
      body: "The action is driven by things in boxes: letters and photographs, the Rattenfänger book, the Haggadah, the mouth organ, the label, the jewellery, the glasses and Faith's own toys. Each object crosses time, used by Eva in the past and found by Faith in the present, and the plot turns on what is done with them: hidden, found, torn up, saved, handed on. When Evelyn gives Faith the two books and the mouth organ, and lets her take her toys, the exchange of objects stands for the handing on of a story.",
    },
    {
      heading: 'Echoes and an open ending',
      body: "Samuels builds the play from echoes. Evelyn is polishing glasses in her first scene and is rubbing one with a tea towel when the last scene begins, as if the tearing up of the papers has changed nothing. The quarrel at the quayside returns to the button lesson of the opening scene, which Evelyn now remembers as a rejection. The ending is open. Faith answers her mother's question about whether she has everything with “More or less.”, speaks the last line, “Yes we are.”, and leaves; then the Ratcatcher's shadow covers the stage. The audience is left with a partial reconciliation and a fear that has not gone away.",
    },
  ],

  vocabulary: [
    {
      term: 'Kindertransport',
      definition:
        "German for children's transport: the rescue that brought nearly 10,000 mainly Jewish children from Nazi-controlled Europe to Britain between December 1938 and September 1939.",
    },
    {
      term: 'Kinder',
      definition: 'German for children; the name used for the Kindertransport children themselves.',
    },
    {
      term: 'Mutti and Vati',
      definition:
        "German for Mummy and Daddy. Eva's names for Helga and Werner; Evelyn uses Mutti again in the final confrontation.",
    },
    {
      term: 'Der Rattenfänger',
      definition:
        "The Ratcatcher: the German name for the Pied Piper, and the title of Eva's picture book. Samuels's version of the story is her own.",
    },
    {
      term: 'Abyss',
      definition:
        "A deep, seemingly bottomless chasm. A recurring motif, from the storybook to Evelyn's description of the past.",
    },
    {
      term: 'Kristallnacht',
      definition:
        'The Night of Broken Glass, 9 to 10 November 1938: a Nazi pogrom against Jews across Germany and Austria, after which Britain agreed to admit refugee children.',
    },
    {
      term: 'Pogrom',
      definition:
        'An organised, violent attack on a persecuted group, especially on Jewish communities.',
    },
    {
      term: 'Haggadah',
      definition:
        'The Jewish text read at the Passover Seder, which tells the story of the Exodus so that parents pass it to their children.',
    },
    {
      term: 'Passover and the Seder',
      definition:
        'The Jewish festival remembering the escape from slavery in Egypt, and the ritual meal on its first night. Helga asks Eva to keep it in England.',
    },
    {
      term: 'Star of David',
      definition:
        "The six-pointed star that is a symbol of Jewish identity. Helga hides one on a gold chain in Eva's shoe; the Nazi official draws one on her label.",
    },
    {
      term: 'Evacuation',
      definition:
        'The moving of British children out of cities at the start of the Second World War, which sends Eva away a second time.',
    },
    {
      term: 'Internment',
      definition:
        "Holding people in camps without trial because of their nationality. From 1940 Britain interned many German-speaking refugees; the Station Guard threatens Eva's parents with it.",
    },
    {
      term: 'Naturalised',
      definition:
        'Granted citizenship of a country one was not born in. By the time Helga finds her, Eva has been naturalised and has put the name Evelyn on her papers.',
    },
    {
      term: 'Assimilation',
      definition:
        'The process by which a person or group takes on the culture of another and loses parts of their own. Eva becoming Evelyn is assimilation at its most complete.',
    },
    {
      term: 'Survivor guilt',
      definition:
        "The guilt felt by people who survive a disaster in which others died. Samuels says a friend's struggle with it helped to inspire the play.",
    },
    {
      term: 'Non-naturalistic staging',
      definition:
        'Staging that does not pretend to show real life exactly, such as two time periods sharing one set.',
    },
    {
      term: 'Doubling',
      definition:
        'One actor playing more than one part. In Kindertransport the Ratcatcher actor also plays four officials, which links them.',
    },
    {
      term: 'Motif',
      definition:
        'An image, object or idea that recurs through a work and gathers meaning, such as the abyss, the jewels or the trains.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something a character does not, as when we realise Evelyn is Eva before Faith has it confirmed.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Eva/Evelyn (to Helga): “I never wanted to live without you and you made me ...” (Act Two, Scene Two). How is the relationship between Helga and Eva/Evelyn presented in Kindertransport? You must consider language, form and structure in your answer.',
        skill:
          'Whole-play essay on a relationship, with language, form and structure (Pearson set this question in May 2024)',
        guidance: [
          "Open with an argument, not a summary: for example, that Helga's love takes the form of letting go, and that Eva learns the lesson too well.",
          "Start with the button scene (Act One, Scene One): Helga's firmness, “There’s no ‘later’ left, Eva.”, and the jewels hidden in the shoes. Analyse how a loving act looks like rejection to a child.",
          "Track the relationship through absence in the middle of the play: Helga's parcel with the Haggadah, her voice in letters, and Eva taking off and wanting to sell the jewellery.",
          "Analyse the hotel reunion, where Helga greets her in German and misjudges her age, and the quayside (Act Two): the echo of later, Helga's “Hitler started the job and you finished it.”, and Evelyn's reply, “You were the Ratcatcher.”",
          "Write about form: the adult Evelyn takes over Eva's side of the final quarrel, so the child and the woman speak with one voice, and the line in the question reverses the logic of the rescue.",
          'End by weighing the two women: Samuels gives both a case, and the final shadow suggests the wound is not healed.',
        ],
      },
      {
        question:
          'Explore the significance of the journey on the Kindertransport in the play. You must consider language, form and structure in your answer.',
        skill: 'Whole-play essay on a structural idea (Pearson set this question in May 2024)',
        guidance: [
          "Treat the journey as more than the train: it is also Eva's journey from German Jewish girl to English woman, and it never really ends for Evelyn.",
          "Analyse the train itself (Act One, Scene One): the label and number, the window that is “sealed tight”, the Nazi official's warning that without the number she might forget who she is, and the toffee thrown down at the border.",
          'Analyse the arrival (Act One, Scene Two): the English Organiser, played by the same actor, and Lil removing the label.',
          "Show the journey's long reach: the evacuation train Eva leaps from, Faith's account of her mother's panic on trains, and Evelyn's fear of being sent away.",
          "Connect it to the quayside, where Helga's plea to get on the boat asks for a journey back, and to Faith's chosen departure at the end.",
          'Conclude on structure: the play is built from departures, and the one that ends it is the first that is freely made.',
        ],
      },
      {
        question:
          "Helga believes that she is acting in Eva's best interests when she sends her away on the Kindertransport. Explore the significance of trying to do the right thing in the play. You must consider language, form and structure in your answer.",
        skill: 'Whole-play essay on an idea (Pearson set this question in November 2024)',
        guidance: [
          'Define the problem: in this play doing the right thing and causing harm are often the same act.',
          'Helga: “any good parent would want to protect their child”, the button lesson, and, in the hotel after the war, her need for Eva to agree that she was right to send her (p. 76).',
          "Lil: taking Eva in when she did not have to, sending her away as an evacuee and admitting she did not want to, and keeping the secret for Evelyn's sake.",
          'Evelyn: urging Faith to leave home, destroying the papers, and finally handing on the books. Ask whether each is right.',
          "Show how form supports this: the parallel scenes let the audience compare three mothers' choices side by side.",
          'Conclude that Samuels judges intentions kindly but outcomes honestly, which is why the ending is unresolved.',
        ],
      },
      {
        question:
          'What kind of daughter is Faith presented as in Kindertransport? You must consider language, form and structure in your answer.',
        skill: 'Whole-play essay on a character (Pearson set this question in November 2024)',
        guidance: [
          'Give a balanced thesis: Faith is loving, curious and demanding, and her discovery drives the present-day plot.',
          'The opening: she wavers about moving into her flat while Evelyn urges her to go, then announces that she is staying after all. What does the indecision show about her?',
          "Her search of the boxes and her first confrontation with Evelyn: blocking the door, believing her mother's unhappiness was her fault.",
          'Act Two: “Did they die for you to forget?” and “I have a background, a context.” Is she cruel, or claiming what is hers?',
          'The last scene: “Am I Jewish?”, the books, the toys and the last line, “Yes we are.” Show how she becomes the one who carries the past forward.',
        ],
      },
      {
        question:
          'Explore how Samuels uses the Ratcatcher in the play. You must consider language, form and structure in your answer.',
        skill: 'Whole-play essay on a dramatic device',
        guidance: [
          "Explain what the Ratcatcher is: the villain of Eva's picture book, Samuels's version of the Pied Piper, heard as pipe music and seen as a shadow.",
          "Analyse his threat, “I will search you out whoever wherever you are.”, and the story's ending in the abyss.",
          'Write about doubling: the same actor plays the Nazi Border Official, the English Organiser, the Postman and the Station Guard. Explain what that suggests about how Eva sees authority.',
          'Track the shadow through the stage directions: it hovers, then looms at the end of Act One, then covers the stage.',
          "Show the figure moving inward: Evelyn's fear, and her accusation that Helga was the Ratcatcher. Finish on whether Evelyn, or Faith, is free of him.",
        ],
      },
      {
        question:
          'How does Samuels present the character of Lil? You must consider language, form and structure in your answer.',
        skill: 'Whole-play essay on a character',
        guidance: [
          'Give a balanced thesis: Lil is the woman who saves Eva and one of the people who erase her.',
          'Analyse her first meeting with Eva (Act One, Scene Two): lateness, the cigarette, taking off the label with “Over. Finished. Done. Goodbye.”',
          "Consider how she handles Eva's Jewishness and her German: the ham, the old laws, “Don’t hide behind the German.”",
          'Analyse the present-day Lil: keeper of the secret, hurt by the word real, and her quarrel with Evelyn in Act Two, Scene One.',
          'Evaluate: Samuels lets Evelyn call her a child-stealer, but also lets the audience see what Eva would have been without her.',
        ],
      },
    ],
    tips: [
      'Eva and Evelyn are one character played by two actors. Write about them as one person split in two, and say which one you mean each time. Pearson writes Eva/Evelyn in its questions.',
      "Treat stage directions as evidence. The polishing, the pipe music, the growing shadow and the torn papers are Samuels's choices as much as the dialogue is, and they are how you show you understand form.",
      'Section A questions ask for language, form and structure, not history. Use the Kindertransport, the evacuation or Belsen only where they explain something Samuels does on stage.',
      'The exam is open book, so use it, but do not waste time searching. Know where the key scenes are: Act One opens on page 3, the arrival is on pages 22 to 28, Act Two opens on page 47 and the quayside is on pages 82 to 86.',
      'Short quotations embedded in your sentences are better than long ones copied out. A single word, such as abyss, later, cleansed or real, can carry a whole paragraph of analysis.',
      'Get the ending right. “More or less.” is not the last line: Faith answers her mother with it, then speaks the last line, “Yes we are.” Then argue about it rather than retelling it.',
      'Get the present-day plot right too. Evelyn does not try to stop Faith leaving: she urges her to stick by her plan to move out, and only at the end asks her to stay her little girl. Her “I expect you to keep to your word” in the first scene comes after Faith has said she is staying, so it does not mean go.',
      'Get the ages right. Eva is nine when she leaves Hamburg, fifteen at the Belsen newsreel and seventeen when Helga finds her; Helga guesses sixteen and is corrected, which is worth a sentence in any answer on the two of them.',
      'Avoid judging characters as simply good or bad. The best answers show that Samuels gives Helga, Lil and Evelyn each a case, and explain why the play will not choose between them.',
      'Some revision material online attributes lines to this play that do not appear in the prescribed edition, and the American edition differs in places. Check every quotation you learn against your own copy.',
      'Track objects across time: the Rattenfänger book, the Haggadah, the jewellery and the mouth organ. Following one object through the play is a quick way to show whole-text knowledge.',
    ],
  },

  modelAnswer: {
    question: 'How is the relationship between Helga and Eva/Evelyn presented in Kindertransport?',
    paragraph:
      "Samuels presents Helga's love as a love that has to take the form of letting go, and the tragedy of the play is that Eva learns the lesson too well. In the opening scene Eva asks whether she can sew her buttons on later, and Helga refuses: “There’s no ‘later’ left, Eva.” Treating time as a supply that has run out turns a household chore into training for survival, and to a nine-year-old who cannot yet see the danger the firmness looks like coldness. Samuels makes the audience hear that word again at the quayside, where it is Helga who must plead, “When is ‘later’ when you are coming?” The echo reverses their positions: the mother who once had no time to wait is now the one kept waiting, and the daughter has learned to manage on her own. The structure then makes the child's misreading permanent, because the adult Evelyn takes over Eva's side of the quarrel, so that the girl's grievance and the grown woman's defence speak with one voice. Helga's accusation, “Hitler started the job and you finished it”, is deliberately monstrous, yet it shows how completely she had staked her survival on her child, the belief she voiced in “Through our children we live.” Evelyn's reply, “You were the Ratcatcher”, fuses the mother who sent her away with the storybook figure who steals children. Samuels refuses to judge between them: each woman is right about her own pain and wrong about the other's, which is why the play ends not with reconciliation but with the Ratcatcher's shadow across the whole stage.",
    commentary: [
      'It opens with an argument that answers the question directly, rather than a summary of what happens between the two women.',
      'It finds a structural echo, the word later in the first scene and the last, and uses it to show how the relationship has reversed. Spotting a pattern like this is what separates a strong answer from a competent one.',
      'Quotations are short and embedded, and each is analysed: the idea of time running out, the comparison with genocide, the fusion of mother and villain.',
      "It writes about form as well as language, explaining why Samuels has Evelyn, not Eva, speak in the final quarrel, which is what the question's demand for form and structure is looking for.",
      "It weighs both women fairly and ends on the final stage image, turning a character study into a judgement about the play's meaning.",
    ],
  },

  timeline: [
    {
      where: 'Act One, Scene One (pp. 3 to 13)',
      title: 'The button lesson',
      summary:
        "In Hamburg Helga makes nine-year-old Eva sew on her own coat buttons before she leaves for England. She explains that good parents send their children away if they can, promises to follow, and reveals the watch and jewellery hidden in Eva's shoe heels.",
      setting: "Helga and Eva's home in Hamburg, played in the storeroom",
      who: ['Eva', 'Helga'],
      quote: 'There’s no ‘later’ left, Eva.',
      themes: ['Mothers and daughters', 'Journeys and separation', 'Jewish heritage and faith'],
      tension: 2,
      significance:
        'Grown from the scene Samuels wrote first: a loving act that looks like rejection, and the root of every later separation.',
    },
    {
      where: 'Act One, Scene One (pp. 4 to 10)',
      title: 'Glasses for the new flat',
      summary:
        'In the present Evelyn polishes glasses and offers crockery for the flat Faith is about to move into. Faith wavers; Evelyn urges her to go, and when Faith declares she is staying after all, coolly holds her to it, then leaves the room.',
      setting: "The storage room of Evelyn's house in an outer London suburb, in recent times",
      who: ['Evelyn', 'Faith'],
      quote: 'A chipped glass is ruined forever.',
      themes: ['Memory and the buried past', 'Mothers and daughters'],
      tension: 2,
      significance:
        "Establishes the storeroom as Evelyn's mind, and a mother pushing her daughter to leave as briskly as Helga did.",
    },
    {
      where: 'Act One, Scene One (pp. 14 to 21)',
      title: 'The Ratcatcher and the train',
      summary:
        'Helga in the past and Faith in the present read the Ratcatcher story. Eva, wearing label number 3362, boards the train; the Nazi Border Official searches her case, and at the border she throws away his toffee in triumph.',
      setting: 'A railway station in Hamburg, then a train crossing the German border',
      who: ['Helga', 'Faith', 'Eva', 'The Ratcatcher', 'The Nazi Border Official'],
      quote: 'If you don’t know it you might forget who you are.',
      themes: ['Fear and the Ratcatcher', 'Journeys and separation', 'Identity and belonging'],
      tension: 4,
      significance:
        'The storybook threat and the real one arrive together, and one actor plays both.',
    },
    {
      where: 'Act One, Scene Two (pp. 22 to 28)',
      title: 'Arrival in England',
      summary:
        "Eva waits alone at a station in England and cries for her parents in German. The English Organiser loses patience; Lil Miller arrives late, takes off Eva's label and lets her try a cigarette.",
      setting: 'A railway station in England',
      who: ['Eva', 'The English Organiser', 'Lil'],
      quote: 'Over. Finished. Done. Goodbye.',
      themes: ['Identity and belonging', 'Mothers and daughters', 'Journeys and separation'],
      tension: 3,
      significance: "The first step of Eva's Englishness: warm, comic and an erasure all at once.",
    },
    {
      where: 'Act One, Scene Two (pp. 29 to 39)',
      title: 'Faith finds Eva',
      summary:
        "Faith shows Lil the Rattenfänger book and the letters and forces out the truth that Evelyn is Eva. In the past Eva writes asking for permits for her parents, then secretly knocks on doors looking for servants' jobs for them, and Lil catches her lying and rebukes her for hiding behind German.",
      setting: "The storeroom in the present, and Lil's home in Manchester in the past",
      who: ['Faith', 'Lil', 'Eva'],
      quote: 'Aren’t I real now?',
      themes: ['Memory and the buried past', 'Identity and belonging', 'Mothers and daughters'],
      tension: 3,
      significance:
        'The secret breaks, and the audience learns what Lil has been guarding for decades.',
    },
    {
      where: 'Act One, Scene Two (pp. 40 to 46)',
      title: 'The first confrontation',
      summary:
        "Evelyn finds Faith and Lil among the papers and tries to shut the subject down. Faith bars the door and accuses her of lying. As the Ratcatcher's music plays and his shadow looms, Evelyn comforts her frightened younger self.",
      setting: 'The storeroom, with the past breaking into the present',
      who: ['Evelyn', 'Faith', 'Lil', 'Eva', 'The Ratcatcher'],
      quote: 'He won’t take you anywhere ever again.',
      themes: ['Memory and the buried past', 'Fear and the Ratcatcher', 'Mothers and daughters'],
      tension: 4,
      significance:
        'Act One ends with the two selves speaking across time, and a promise nobody can keep.',
    },
    {
      where: 'Act Two, Scene One (pp. 47 to 58)',
      title: 'The parcel and the evacuation',
      summary:
        "Evelyn has locked herself in the storeroom with an ashtray full of stubs. In the past a postman delivers Helga's parcel with the Haggadah, and Lil sends Eva away as an evacuee until Eva leaps from the train.",
      setting: 'The locked storeroom; Manchester and its railway station on the eve of war',
      who: ['Evelyn', 'Helga', 'Eva', 'The Postman', 'Lil'],
      quote: 'Through our children we live. That’s how we cheat death.',
      themes: ['Jewish heritage and faith', 'Journeys and separation', 'Mothers and daughters'],
      tension: 4,
      significance:
        'A second forced departure, and the first time Lil too sends Eva away and takes her back.',
    },
    {
      where: 'Act Two, Scene One (pp. 59 to 68)',
      title: 'Tearing up the past',
      summary:
        'Evelyn and Lil quarrel bitterly and destroy the letters and photographs. In the past a Station Guard questions Eva as she waits in vain for her parents, she takes off her jewellery, and at fifteen she watches a newsreel of Belsen.',
      setting: 'The storeroom; a railway station in September 1939 and a cinema in 1945',
      who: ['Evelyn', 'Lil', 'Eva', 'The Station Guard'],
      quote: 'Part of me is dead because of you.',
      themes: ['Survival and its cost', 'Memory and the buried past', 'Identity and belonging'],
      tension: 5,
      significance:
        'The emotional crisis of the present plot, set against Eva giving up hope for her parents.',
    },
    {
      where: 'Act Two, Scene One (pp. 71 to 77)',
      title: 'Helga returns',
      summary:
        'Faith finds the destroyed papers and challenges her mother. Evelyn names her parents and says they died in Auschwitz, then that her father was gassed in 1943 but her mother was not. Helga enters, thin and changed, and in a hotel meets Eva, who has to tell her she is seventeen.',
      setting: 'The storeroom, then a hotel in England after the war',
      who: ['Faith', 'Evelyn', 'Lil', 'Helga', 'Eva'],
      quote: 'That is how we survive.',
      themes: ['Survival and its cost', 'Mothers and daughters', 'Identity and belonging'],
      tension: 4,
      significance: "Reveals Evelyn's deepest secret: her mother survived, and she was refused.",
    },
    {
      where: 'Act Two, Scene Two (pp. 78 to 82)',
      title: 'Books handed on',
      summary:
        'After Lil goes out, Evelyn confirms that Lil did not know Helga had survived. Faith asks whether she is Jewish; Evelyn describes her baptism at eighteen, then hands Faith the Rattenfänger book, the Haggadah and the mouth organ.',
      setting: 'The storeroom in the present',
      who: ['Evelyn', 'Faith', 'Lil'],
      quote: 'Germany spat me out. England took me in.',
      themes: ['Jewish heritage and faith', 'Identity and belonging', 'Memory and the buried past'],
      tension: 3,
      significance:
        'The past is passed on, reluctantly, through the objects Evelyn could not destroy.',
    },
    {
      where: 'Act Two, Scene Two (pp. 82 to 86)',
      title: 'The quayside',
      summary:
        'At the waterfront Helga begs her daughter to board the boat to New York. Eva keeps saying not yet; Evelyn takes over the quarrel, and mother and daughter accuse each other of a kind of killing until Evelyn is left sobbing.',
      setting: 'A quayside in England, with a boat about to leave',
      who: ['Helga', 'Eva', 'Evelyn'],
      quote: 'Hitler started the job and you finished it.',
      themes: ['Mothers and daughters', 'Fear and the Ratcatcher', 'Journeys and separation'],
      tension: 5,
      significance:
        "The climax: the child's fear and the adult's defence merge, and the Ratcatcher is given Helga's face.",
    },
    {
      where: 'Act Two, Scene Two (pp. 86 to 87)',
      title: 'Yes we are',
      summary:
        "Faith finds her mother crying and asks how she can help. Evelyn lets her take her box of childhood toys and asks if she has everything; Faith speaks the last line, leaves, and the Ratcatcher's shadow covers the stage.",
      setting: 'The storeroom in the present',
      who: ['Faith', 'Evelyn', 'The Ratcatcher'],
      quote: 'Yes we are.',
      themes: ['Mothers and daughters', 'Memory and the buried past', 'Fear and the Ratcatcher'],
      tension: 3,
      significance:
        'A qualified hope under a lasting shadow: the story is handed on, but the fear remains.',
    },
  ],

  relationships: [
    {
      from: 'Helga',
      to: 'Eva',
      kind: 'mother and daughter',
      note: "Helga's love takes the form of letting go: the button lesson, the hidden jewels, the train. To Eva the same acts feel like being sent away, and the gap between intention and experience never closes. By the reunion Helga does not know how old her daughter is.",
    },
    {
      from: 'Lil',
      to: 'Eva',
      kind: 'foster mother and foster daughter',
      note: "Begins with a late arrival and a shared cigarette and grows into the play's most lasting bond, but Lil's love helps to erase the German Jewish girl, and in Act Two Evelyn blames her for it.",
    },
    {
      from: 'Lil',
      to: 'Evelyn',
      kind: 'mother and adult daughter',
      note: 'Evelyn still calls her Mum, and Lil has kept her secret for decades. In the locked storeroom that loyalty turns into their fiercest quarrel, and they destroy the papers together.',
    },
    {
      from: 'Evelyn',
      to: 'Faith',
      kind: 'mother and daughter',
      note: 'Evelyn pushes Faith to leave home as Helga once pushed her, while secretly wishing to keep her. The box breaks the silence between them, and the play ends with a fragile, partial understanding.',
    },
    {
      from: 'Eva',
      to: 'Evelyn',
      kind: 'the same person, child and adult',
      note: "Played by two actors who share the stage. At the end of Act One Evelyn speaks to her frightened younger self, and at the quayside she takes over Eva's side of the quarrel with Helga.",
    },
    {
      from: 'Lil',
      to: 'Faith',
      kind: 'grandmother and granddaughter',
      note: "Lil keeps the secret and, under pressure, is the one who confirms it. Faith's discovery also threatens Lil's own place in the family, which is why the word real hurts her.",
    },
    {
      from: 'Helga',
      to: 'Evelyn',
      kind: 'mother and the daughter who refused her',
      note: "At the quayside the adult Evelyn faces the mother she refused as a girl. Each accuses the other of a kind of killing, and Evelyn gives Helga the Ratcatcher's face.",
    },
    {
      from: 'Helga',
      to: 'Lil',
      kind: "Eva's two mothers, who never meet",
      note: 'Lil did not know at the time that Helga had survived: Evelyn believes that if she had known, she would have made her go with Helga. In their quarrel Evelyn accuses Lil of making her betray her first mother.',
    },
    {
      from: 'The Ratcatcher',
      to: 'Eva',
      kind: 'the fear and the child',
      note: "Eva's fear given a body. Through the doubled roles he follows her from the storybook to the border, the stations and, in the end, her memory of her mother.",
    },
  ],

  compareWith: [
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        "Another 4ET1 modern drama text in which a family's hidden past is dragged into the open in a single room, and which ends on an unsettling final moment rather than a resolution.",
    },
    {
      title: 'A View from the Bridge',
      href: '/revision/texts/a-view-from-the-bridge',
      reason:
        'Also on the 4ET1 modern drama list: a play about arriving in a new country and what belonging costs, with a parent figure, Eddie, who cannot let the young woman he raised leave him.',
    },
    {
      title: 'The Curious Incident of the Dog in the Night-Time',
      href: '/revision/texts/curious-incident',
      reason:
        'A third 4ET1 modern drama text with non-naturalistic staging, a child who finds hidden letters from a mother he was told had died, and a journey alone by train.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'mental_health',
    'discrimination',
    'political_ideology',
    'mythological_religious',
  ],

  sources: [
    {
      label:
        "Kindertransport, Nick Hern Books revised edition of 2008 (ISBN 9781854595270, the prescribed edition), Internet Archive scan, searched with the reader's search-inside function only, on 25 and 26 September 2026: exact wording, speaker label and page of every quotation, the cast list and setting, the introduction, and act and scene page numbers from the running heads (page = scan leaf minus 24)",
      url: 'https://archive.org/details/kindertransport0000samu_p1m2',
    },
    {
      label:
        'Kindertransport, Plume (New York) edition of 1995, Internet Archive scan: a second edition, consulted on 25 September 2026, which confirms most quotations but differs from the Nick Hern text in places',
      url: 'https://archive.org/details/kindertransport0000samu',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature (4ET1) specification, Issue 3 (August 2025): Kindertransport as a modern drama text, Component 2 open book with a clean copy of the prescribed edition, the prescribed-editions appendix, Component 3 as an alternative to Component 2',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature 4ET1/02 question paper, May 2024: Questions 7 and 8 on Kindertransport, and their wording',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02-que-20240521.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature 4ET1/02 Principal Examiner Feedback, November 2024: the two Kindertransport questions of that series, and that Section A assesses knowledge of the text and analysis of language, form and structure',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-02-pef-20250123.pdf',
    },
    {
      label:
        "Nick Hern Books product page: ISBN, 8 May 2008 edition, Verity Bargate Award 1992, Soho Theatre Company at the Cockpit Theatre 1993, Watford Palace Theatre 1996 transfer, Shared Experience 2007 tour (the 1992 award and the Manhattan Theatre Club production are also on the edition's back cover)",
      url: 'https://www.nickhernbooks.co.uk/kindertransport',
    },
    {
      label:
        'Wikipedia, Kindertransport (play): first performance 13 April 1993 at the Cockpit Theatre, Manhattan Theatre Club 1994, Vaudeville Theatre 1996, publisher',
      url: 'https://en.wikipedia.org/wiki/Kindertransport_(play)',
    },
    {
      label:
        'Wikipedia, Diane Samuels: born 1960 into a Jewish family in Liverpool, history at Sidney Sussex College, Cambridge, PGCE in drama at Goldsmiths, five years teaching drama in inner London secondary schools',
      url: 'https://en.wikipedia.org/wiki/Diane_Samuels',
    },
    {
      label:
        'Wikipedia, Kindertransport: nearly 10,000 children, the appeal to Chamberlain on 15 November 1938, the first arrival at Harwich on 2 December 1938, the last departure from Germany on 1 September 1939, ages up to 17, the £50 guarantee, placements, internment in 1940, the 1989 Reunion',
      url: 'https://en.wikipedia.org/wiki/Kindertransport',
    },
    {
      label:
        'Wikipedia, Kristallnacht: 9 to 10 November 1938, the perpetrators and what was attacked',
      url: 'https://en.wikipedia.org/wiki/Kristallnacht',
    },
    {
      label:
        'Wikipedia, Operation Pied Piper: the evacuation from 1 September 1939 and its numbers',
      url: 'https://en.wikipedia.org/wiki/Operation_Pied_Piper',
    },
    {
      label:
        'Wikipedia, Bergen-Belsen concentration camp: liberation on 15 April 1945 by the British 11th Armoured Division, the bodies and prisoners found, and the army film record',
      url: 'https://en.wikipedia.org/wiki/Bergen-Belsen_concentration_camp',
    },
    {
      label:
        'Wikipedia, Auschwitz concentration camp: 1.1 million murdered, 960,000 of them Jews, and gas chambers with nozzles made to resemble showerheads',
      url: 'https://en.wikipedia.org/wiki/Auschwitz_concentration_camp',
    },
    {
      label:
        'Wikipedia, Pied Piper of Hamelin: the 1284 date, the Grimm (1816) and Browning (1842) versions',
      url: 'https://en.wikipedia.org/wiki/Pied_Piper_of_Hamelin',
    },
    {
      label:
        "Wikipedia, Haggadah: its place in the Passover Seder, the duty to tell the Exodus story to one's children, and the youngest child asking the questions",
      url: 'https://en.wikipedia.org/wiki/Haggadah',
    },
  ],
}
