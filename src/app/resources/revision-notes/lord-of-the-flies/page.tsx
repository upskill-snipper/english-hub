"use client";

import { useState } from "react";
import { AITextArea } from "@/components/AITextArea";

/* ─── Expandable section component ──────────────────────────── */

function Section({
  id,
  title,
  children,
  defaultOpen = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} className="border border-border rounded-lg bg-card shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <svg
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 pb-5 pt-4">{children}</div>}
    </section>
  );
}

/* ─── Data ───────────────────────────────────────────────────── */

const chapters = [
  {
    chapter: "Chapter 1: The Sound of the Shell",
    summary:
      "After a plane crash during an unnamed war, a group of British schoolboys find themselves stranded on an uninhabited tropical island. Ralph and Piggy discover a conch shell and use it to summon the other survivors. Ralph is elected chief over Jack Merridew, who leads the choir boys. They establish rules: whoever holds the conch may speak. Jack volunteers his choir as hunters. Ralph, Jack, and Simon explore the island and confirm it is uninhabited. They push a boulder off a cliff in a moment of exhilaration. Jack attempts to kill a piglet but hesitates, unable to bring himself to cut into living flesh.",
  },
  {
    chapter: "Chapter 2: Fire on the Mountain",
    summary:
      "Ralph calls an assembly and establishes priorities: they must keep a signal fire burning on the mountain to attract rescue. The boys are enthusiastic and rush to the mountaintop, where they use Piggy's glasses to start a fire. However, they let it burn out of control, setting a large patch of forest ablaze. A littlun with a birthmark on his face, who had earlier spoken of seeing a 'snake-thing' or 'beastie' in the forest, disappears and is never seen again. This first death, barely acknowledged, foreshadows the violence to come.",
  },
  {
    chapter: "Chapter 3: Huts on the Beach",
    summary:
      "While Jack becomes increasingly obsessed with hunting pigs, Ralph and Simon struggle to build shelters on the beach. Most boys are playing rather than helping. Tension grows between Ralph and Jack, who have fundamentally different priorities: Ralph focuses on rescue and civilisation; Jack is consumed by the thrill of the hunt. Simon slips away alone into the jungle to a hidden clearing, establishing his connection with the natural world and his role as a spiritual, contemplative figure.",
  },
  {
    chapter: "Chapter 4: Painted Faces and Long Hair",
    summary:
      "Roger and Maurice destroy the littluns' sandcastles, and Roger throws stones near a littlun, though he still aims to miss (held back by 'the taboo of the old life'). Jack paints his face with clay and charcoal, creating a mask that liberates him from shame and self-consciousness. He leads a successful hunt, but in doing so, the hunters let the signal fire go out. A ship passes on the horizon. Ralph is furious. Jack, exhilarated by his first kill, smashes one lens of Piggy's glasses when Piggy criticises him. The hunters chant 'Kill the pig. Cut her throat. Spill her blood' for the first time.",
  },
  {
    chapter: "Chapter 5: Beast from Water",
    summary:
      "Ralph calls a serious assembly at dusk to address the boys' failures: the fire, the shelters, and sanitation. The discussion turns to the 'beast'. The littluns are terrified. Phil claims to have seen something in the forest at night; Percival suggests the beast comes from the sea. Simon tries to suggest that the beast is not an external creature but something within the boys themselves ('maybe it's only us'), but he is shouted down. Jack defies Ralph's authority and leads the boys away in a disorderly rush, leaving Ralph, Piggy, and Simon alone.",
  },
  {
    chapter: "Chapter 6: Beast from Air",
    summary:
      "During the night, a dead parachutist from the air battle above drifts down onto the mountain. Sam and Eric, tending the fire, see the figure in the darkness and believe it is the beast. They flee in terror and report to Ralph. A search party climbs the mountain but finds only the terrifying shape of the parachutist, which they mistake for the beast. They explore Castle Rock at the other end of the island, where Jack sees potential for a fort. Ralph insists they must return to check the fire, showing his continued focus on rescue.",
  },
  {
    chapter: "Chapter 7: Shadows and Tall Trees",
    summary:
      "During the trek back across the island, Ralph reflects on the dirt and decay of their lives and yearns for civilisation. The boys encounter a boar, and Ralph wounds it with his spear, feeling the thrill of the hunt for the first time. The boys re-enact the hunt with Robert playing the pig, and the game becomes dangerously violent. In the evening, Ralph, Jack, and Roger climb the mountain in the dark and see the dead parachutist, which they believe is the beast. They flee in terror.",
  },
  {
    chapter: "Chapter 8: Gift for the Darkness",
    summary:
      "Jack calls an assembly and tries to turn the boys against Ralph, calling him a coward. When his attempt to be elected chief fails, Jack leaves in tears and invites others to join him. Gradually, most of the older boys slip away to join Jack's tribe. Jack's hunters kill a sow in a frenzied, sexually charged attack. They mount the sow's head on a sharpened stick as an offering to the beast. Simon, alone in his clearing, hallucinates a conversation with the head, which becomes the 'Lord of the Flies'. It tells him: 'I'm part of you... I'm the reason why it's no go.' Simon faints.",
  },
  {
    chapter: "Chapter 9: A View to a Death",
    summary:
      "Simon recovers and climbs the mountain, where he discovers that the 'beast' is merely a dead parachutist. He stumbles down to the beach to tell the others. Jack's tribe is holding a feast on the beach. A violent storm breaks. The boys are dancing and chanting 'Kill the beast! Cut his throat! Spill his blood!' in a frenzy. When Simon crawls out of the forest, the boys, caught in their ritual hysteria, fall upon him and beat him to death with their bare hands and teeth. His body washes out to sea in a passage of haunting beauty.",
  },
  {
    chapter: "Chapter 10: The Shell and the Glasses",
    summary:
      "The morning after Simon's death, Ralph is horrified and guilt-stricken. Piggy tries to rationalise it as an accident. Sam and Eric deny their involvement. Meanwhile, Jack has established himself as an absolute chief at Castle Rock, punishing boys who displease him. His tribe raids Ralph's camp at night, not for the conch (which represents a system of government Jack has rejected), but for Piggy's glasses, which give them the power to make fire.",
  },
  {
    chapter: "Chapter 11: Castle Rock",
    summary:
      "Ralph, Piggy, and the twins go to Castle Rock to demand the return of Piggy's glasses. Piggy carries the conch, believing it still has authority. Jack and Ralph fight. Roger, from above, levers a huge boulder that strikes Piggy, killing him and shattering the conch simultaneously. The destruction of both Piggy and the conch symbolises the final collapse of reason and democratic order. Sam and Eric are captured and forced to join Jack's tribe. Ralph flees alone into the forest.",
  },
  {
    chapter: "Chapter 12: Cry of the Hunters",
    summary:
      "Jack's tribe hunts Ralph across the island. They set the jungle on fire to smoke him out, willing to destroy the entire island to kill him. Ralph runs for his life, stumbling onto the beach, where he collapses at the feet of a British naval officer who has seen the smoke. The officer is shocked that British boys could behave this way. Ralph weeps 'for the end of innocence, the darkness of man's heart, and the fall through the air of the true, wise friend called Piggy'. The other boys begin to cry too. The officer turns away, embarrassed, to look at his warship.",
  },
];

const characters = [
  {
    name: "Ralph",
    analysis:
      "The elected leader who represents democracy, order, and civilisation. Ralph is athletic, attractive, and initially confident, but his authority gradually erodes as the boys descend into savagery. He insists on maintaining the signal fire and building shelters, understanding that rescue depends on organised effort. As the novel progresses, Ralph struggles to think clearly and articulate his ideas, symbolising the fragility of rational thought under pressure. By the end, he is hunted like an animal, and his weeping at the rescue signals his loss of innocence. Golding uses Ralph to show that civilisation is not a permanent state but must be actively maintained.",
  },
  {
    name: "Jack Merridew",
    analysis:
      "The antagonist and leader of the choir-turned-hunters. Jack represents authoritarianism, savagery, and the will to power. Initially frustrated at losing the election to Ralph, Jack channels his energy into hunting, which becomes an obsession. His face paint liberates him from the social norms of civilisation, and he gradually transforms from a choirboy into a violent dictator. Jack appeals to the boys' basic desires: meat, excitement, and the thrill of violence. He rules through fear, intimidation, and reward. Golding uses Jack to illustrate how easily democratic societies can be overthrown by authoritarian leaders who exploit fear and offer simple, primal satisfactions.",
  },
  {
    name: "Piggy",
    analysis:
      "The intellectual voice of reason. Piggy is physically weak (asthmatic, overweight, near-sighted) but mentally the sharpest boy on the island. He represents science, logic, and adult authority. His glasses, which start the fire, symbolise intellectual power and technological innovation. Piggy consistently advocates for rules and democratic process, but he is mocked, ignored, and ultimately killed. His death, alongside the shattering of the conch, represents the final destruction of rational civilisation. Golding uses Piggy to show that intelligence and moral authority are insufficient without physical power or social status to back them up.",
  },
  {
    name: "Simon",
    analysis:
      "The mystic and moral centre of the novel. Simon is quiet, epileptic, and instinctively good. He is the only character who understands the true nature of the beast: that it is not an external creature but the darkness within human nature. His conversation with the Lord of the Flies confirms this: 'You knew, didn't you? I'm part of you.' Simon's murder during the frenzied ritual dance is the novel's moral turning point, a symbolic crucifixion. His body washing out to sea, surrounded by phosphorescent creatures, is described in almost religious terms. Golding uses Simon as a Christ-like figure whose truth is rejected and whose death represents humanity's refusal to confront its own evil.",
  },
  {
    name: "Roger",
    analysis:
      "Jack's lieutenant, who represents pure sadism and cruelty. In Chapter 4, Roger throws stones at a littlun but deliberately aims to miss, restrained by 'the taboo of the old life'. By Chapter 11, he has no such restraint: he levers the boulder that kills Piggy with a 'sense of delirious abandonment'. Roger's arc traces the removal of civilised inhibitions. He becomes Jack's torturer and enforcer. Golding uses Roger to show that some individuals are actively drawn to cruelty and are only held in check by the structures of civilisation.",
  },
  {
    name: "Sam and Eric (Samneric)",
    analysis:
      "Identical twins who function as a single unit, representing the ordinary, decent majority. They are loyal to Ralph and maintain the fire, but they are ultimately captured and forced to join Jack's tribe. Their forced assimilation shows how easily the majority can be coerced by a violent minority. When they reveal Ralph's hiding place under threat of torture, it demonstrates that loyalty and decency can be broken by sufficient fear. Golding uses them to represent the silent majority who are neither heroes nor villains but who enable tyranny through their compliance.",
  },
  {
    name: "The Littluns",
    analysis:
      "The youngest boys on the island, roughly aged six. They play on the beach, eat fruit, and have nightmares about the beast. They represent the vulnerable members of society who are most affected by the failure of leadership and order. Their fears about the beast are dismissed by the older boys but prove to be symbolically correct: there is something to fear, though it comes from within the boys themselves. The disappearance of the boy with the birthmark in Chapter 2, barely noticed or mourned, foreshadows the group's growing indifference to human life.",
  },
];

const themes = [
  {
    name: "Civilisation vs Savagery",
    detail:
      "The central conflict of the novel. Golding explores how thin the veneer of civilisation is and how quickly it can be stripped away when the structures of society (laws, authority, punishment) are removed. The boys begin with assemblies, rules, and democratic elections; they end with tribal war paint, ritual chanting, and murder. The conch shell represents democratic civilisation; its destruction marks civilisation's final collapse. Golding suggests that savagery is not learned but is an innate part of human nature, suppressed only by the external pressures of society.",
  },
  {
    name: "Power and Leadership",
    detail:
      "The novel contrasts two models of leadership. Ralph leads democratically: he seeks consensus, builds shelters, maintains the fire. Jack leads through authoritarian means: fear, violence, and the promise of meat and excitement. Jack's model wins because it appeals to the boys' baser instincts. Golding draws on his experience of World War II to suggest that democratic societies are vulnerable to takeover by charismatic, authoritarian leaders who exploit fear and offer simple solutions. The novel was written during the Cold War, and this theme resonates with contemporary anxieties about totalitarianism.",
  },
  {
    name: "Loss of Innocence",
    detail:
      "The boys arrive as schoolchildren and leave as murderers. Ralph's final weeping 'for the end of innocence, the darkness of man's heart' is the novel's emotional climax. The loss of innocence is not gradual but occurs in specific, irreversible moments: the first kill, the first chant, Simon's murder, Piggy's death. The littluns' nightmares, the face paint, the ritual dances all chart the erosion of childhood innocence. Golding suggests that innocence is not a natural state but a social construct that depends on civilisation for its maintenance.",
  },
  {
    name: "Fear",
    detail:
      "Fear of the beast drives much of the novel's action. The beast begins as a littlun's nightmare, becomes a dead parachutist mistaken for a monster, and is finally revealed by Simon to be the darkness within human nature. Jack exploits the boys' fear to consolidate power, offering protection in exchange for obedience. Golding shows how fear can be manufactured and manipulated by those who seek power. The Lord of the Flies tells Simon: 'You knew, didn't you? I'm part of you.' The true beast is not external but internal.",
  },
  {
    name: "Human Nature",
    detail:
      "Golding wrote the novel as a response to R.M. Ballantyne's The Coral Island (1857), which depicted shipwrecked boys creating a harmonious, civilised society. Golding's view is darker: without the constraints of civilisation, humanity reverts to violence and cruelty. The novel presents a pessimistic view of human nature, suggesting that evil is innate. However, characters like Simon and Ralph show that goodness also exists within individuals; the tragedy is that goodness is fragile and easily overwhelmed by the collective descent into savagery.",
  },
  {
    name: "Order vs Chaos",
    detail:
      "Order is represented by the conch, the assemblies, the signal fire, and the shelters. Chaos is represented by the hunts, the chanting, the face paint, and the violence. The novel traces the steady triumph of chaos over order. Each chapter marks a further step in the breakdown: the fire goes out, the hunters become a tribe, Simon is murdered, the conch is destroyed. The arrival of the naval officer restores order externally but does not address the internal chaos revealed on the island. Golding implies that order is always precarious and must be actively defended.",
  },
];

const keyQuotes = [
  {
    quote: "Ralph wept for the end of innocence, the darkness of man's heart, and the fall through the air of the true, wise friend called Piggy.",
    chapter: "Chapter 12",
    analysis:
      "The novel's final emotional statement. The tricolon structure gives Ralph's grief a ritualistic quality. 'The darkness of man's heart' encapsulates the novel's thesis. 'The fall through the air' echoes both Piggy's literal death and the parachutist's descent, linking individual violence to the wider war.",
  },
  {
    quote: "Maybe there is a beast... maybe it's only us.",
    chapter: "Chapter 5",
    speaker: "Simon",
    analysis:
      "Simon alone grasps the truth: the beast is not an external creature but the capacity for evil within every human being. The tentative 'maybe' reflects his struggle to articulate a profound insight. The other boys shout him down, refusing to confront this uncomfortable truth.",
  },
  {
    quote: "You knew, didn't you? I'm part of you? Close, close, close! I'm the reason why it's no go? Why things are what they are?",
    chapter: "Chapter 8",
    speaker: "The Lord of the Flies",
    analysis:
      "The pig's head 'speaks' to Simon in a hallucination, confirming what Simon already suspected: the beast is internal. 'I'm part of you' makes the beast universal. The rhetorical questions and repetition of 'close' create a claustrophobic, nightmarish atmosphere. The name 'Lord of the Flies' translates as Beelzebub, a name for the Devil.",
  },
  {
    quote: "Kill the beast! Cut his throat! Spill his blood!",
    chapter: "Chapter 9",
    analysis:
      "The ritual chant that accompanies Simon's murder. The imperative verbs and monosyllabic rhythm create a primitive, hypnotic quality. The pronoun shift from 'the pig' to 'the beast' to 'his' dehumanises the victim. The boys are no longer playing at hunting; they have become a mob capable of murder.",
  },
  {
    quote: "The thing is -- fear can't hurt you any more than a dream.",
    chapter: "Chapter 5",
    speaker: "Jack",
    analysis:
      "Ironic, since Jack later exploits fear to gain power. The dash and conversational tone show Jack dismissing the littluns' concerns. Golding shows how those who deny fear publicly are often those who weaponise it politically.",
  },
  {
    quote: "We've got to have rules and obey them. After all, we're not savages. We're English.",
    chapter: "Chapter 2",
    speaker: "Jack",
    analysis:
      "Deeply ironic given Jack's later descent into savagery. The equation of Englishness with civilisation reflects the imperial attitudes Golding is critiquing. The boys' British identity provides no protection against the darkness within. The statement also satirises the British colonial assumption of cultural superiority.",
  },
  {
    quote: "Roger gathered a handful of stones and began to throw them. Yet there was a space round Henry... into which he dare not throw. Here, invisible yet strong, was the taboo of the old life.",
    chapter: "Chapter 4",
    analysis:
      "A crucial passage showing civilisation's influence still holding Roger back. The 'invisible yet strong' taboo is the memory of parental authority, law, and punishment. By Chapter 11, this taboo has completely dissolved, and Roger kills Piggy without hesitation. The passage demonstrates Golding's argument that moral behaviour depends on social enforcement.",
  },
  {
    quote: "He began to dance and his laughter became a bloodthirsty snarling.",
    chapter: "Chapter 4",
    speaker: "Narrator, describing Jack",
    analysis:
      "Jack's transformation from choirboy to hunter is marked by physical change. The verb 'dance' and noun 'snarling' fuse human and animal behaviour. The face paint has freed Jack from his identity, allowing the savage within to emerge.",
  },
  {
    quote: "The mask was a thing on its own, behind which Jack hid, liberated from shame and self-consciousness.",
    chapter: "Chapter 4",
    analysis:
      "The face paint functions as a psychological shield, removing individual identity and moral responsibility. 'Liberated' is a loaded word: Jack is freed, but freed from the constraints that make civilised behaviour possible. The mask enables the violence that follows.",
  },
  {
    quote: "What I mean is... maybe it's only us.",
    chapter: "Chapter 5",
    speaker: "Simon",
    analysis:
      "Simon's ellipsis and tentative phrasing reflect his difficulty in articulating an abstract idea to a hostile audience. His insight is the novel's central truth, but it is rejected. Golding shows that inconvenient truths are often suppressed by societies unwilling to examine themselves.",
  },
  {
    quote: "Bollocks to the rules! We're strong -- we hunt! If there's a beast, we'll hunt it down!",
    chapter: "Chapter 5",
    speaker: "Jack",
    analysis:
      "Jack explicitly rejects democratic rules in favour of brute force. The exclamatory sentences and the verb 'hunt' reveal Jack's worldview: strength and violence are the only legitimate forms of authority. This moment marks the beginning of the political split on the island.",
  },
  {
    quote: "Which is better -- to have rules and agree, or to hunt and kill?",
    chapter: "Chapter 11",
    speaker: "Piggy",
    analysis:
      "Piggy's final rhetorical question distils the novel's central conflict into a single sentence. The parallel structure ('to have rules and agree' versus 'to hunt and kill') presents civilisation and savagery as a clear binary choice. Moments later, Piggy is killed, and the question is answered by force rather than reason.",
  },
  {
    quote: "The rock struck Piggy a glancing blow from chin to knee; the conch exploded into a thousand white fragments and ceased to exist.",
    chapter: "Chapter 11",
    analysis:
      "Piggy's death and the conch's destruction occur simultaneously, linking the death of reason to the death of democracy. 'Ceased to exist' is final and absolute. The conch, which has symbolised order and the right to speak throughout the novel, is obliterated. There is no rebuilding from this point.",
  },
  {
    quote: "The world, that understandable and lawful world, was slipping away.",
    chapter: "Chapter 5",
    analysis:
      "Focalised through Ralph, this sentence captures the gradual dissolution of civilised order. 'Understandable and lawful' suggests a world governed by reason and rules. 'Slipping away' implies the process is passive and almost imperceptible. Ralph senses the danger but cannot stop it.",
  },
  {
    quote: "I ought to be chief... because I'm chapter chorister and head boy. I can sing C sharp.",
    chapter: "Chapter 1",
    speaker: "Jack",
    analysis:
      "Jack's claim to leadership is based on the arbitrary hierarchies of English boarding school life. 'I can sing C sharp' is comically irrelevant to survival on a desert island. Golding satirises how power is often claimed on the basis of existing privilege rather than competence.",
  },
  {
    quote: "Him with the shell. Ralph! Ralph! Let him be chief with the trumpet-thing.",
    chapter: "Chapter 1",
    analysis:
      "Ralph is elected because he holds the conch and looks the part. The boys associate the conch with authority even before rules are established. 'Trumpet-thing' shows the littluns don't understand the conch; they respond to its symbolic power. Golding suggests that leadership often depends on superficial attributes.",
  },
  {
    quote: "Fancy thinking the Beast was something you could hunt and kill!",
    chapter: "Chapter 8",
    speaker: "The Lord of the Flies",
    analysis:
      "The Lord of the Flies mocks the boys' belief that the beast is a physical creature. If the beast is within each person, it cannot be killed without destroying humanity itself. This insight undermines Jack's entire power base, which depends on promising to protect the boys from an external threat.",
  },
  {
    quote: "The desire to squeeze and hurt was over-mastering.",
    chapter: "Chapter 7",
    analysis:
      "This describes Ralph's feelings during the mock hunt with Robert. Even the rational, civilised protagonist is not immune to the thrill of violence. Golding demonstrates that savagery is not confined to 'bad' characters but is a universal human impulse.",
  },
  {
    quote: "There isn't anyone to help you. Only me. And I'm the Beast.",
    chapter: "Chapter 8",
    speaker: "The Lord of the Flies",
    analysis:
      "The Lord of the Flies reveals the beast's true identity. 'There isn't anyone to help you' strips away all external authority: parents, teachers, police, God. 'I'm the Beast' confirms that evil is internal and inescapable. The short sentences are blunt and terrifying in their simplicity.",
  },
  {
    quote: "They looked at each other, baffled, in love and hate.",
    chapter: "Chapter 3",
    analysis:
      "Describes Ralph and Jack's relationship. The oxymoron 'love and hate' captures the complex dynamic between civilisation and savagery: they are attracted to each other's qualities but fundamentally opposed. This tension drives the novel's plot.",
  },
  {
    quote: "Softly, surrounded by a fringe of inquisitive bright creatures, itself a silver shape beneath the steadfast constellations, Simon's dead body moved out towards the open sea.",
    chapter: "Chapter 9",
    analysis:
      "One of the most beautiful passages in the novel. The contrast between the brutal murder and this serene, almost transcendent description elevates Simon to a spiritual figure. The 'steadfast constellations' suggest an unchanging moral order that the boys have violated. The phosphorescent creatures give Simon a halo-like quality, reinforcing his Christ-like symbolism.",
  },
  {
    quote: "The rules! You're breaking the rules! ... Who cares?",
    chapter: "Chapter 5",
    speaker: "Ralph and Jack",
    analysis:
      "This exchange encapsulates the breakdown of order. Ralph appeals to rules; Jack dismisses them. The exclamation marks convey Ralph's desperation and Jack's contempt. 'Who cares?' is devastating in its simplicity: if no one enforces the rules, they have no power.",
  },
  {
    quote: "He found himself understanding the wearisomeness of this life, where every path was an improvisation and a considerable part of one's waking life was spent watching one's feet.",
    chapter: "Chapter 7",
    analysis:
      "Ralph's moment of clarity about their degraded existence. The long, complex sentence structure mimics the weariness it describes. 'Watching one's feet' suggests a loss of the ability to look ahead or plan. Ralph is losing the capacity for abstract thought that distinguishes him from the hunters.",
  },
  {
    quote: "I'm frightened. Of us.",
    chapter: "Chapter 10",
    speaker: "Ralph",
    analysis:
      "After Simon's murder, Ralph finally understands what Simon tried to tell them. The short, fragmented sentences convey shock and horror. 'Of us' is the crucial admission: the threat is not external but internal. This echoes Simon's earlier insight and shows Ralph has grown in understanding, even as he has lost everything else.",
  },
  {
    quote: "What are we? Humans? Or animals? Or savages?",
    chapter: "Chapter 5",
    speaker: "Piggy",
    analysis:
      "Piggy's rhetorical questions articulate the novel's central concern. The descending hierarchy (humans, animals, savages) suggests that savagery is lower than animality. The question is never answered directly; instead, the boys' actions provide the answer. Golding implies that the categories are not fixed but fluid.",
  },
  {
    quote: "The officer... turned away to give them time to pull themselves together; and waited, allowing his eyes to rest on the trim cruiser in the distance.",
    chapter: "Chapter 12",
    analysis:
      "The novel's final image. The naval officer represents adult civilisation and rescue, but his 'trim cruiser' is a warship, engaged in the same violence the boys have enacted in miniature. Golding's irony is devastating: the adults who will 'rescue' the boys are themselves waging a war. Civilisation's savagery is merely better organised.",
  },
];

const symbolism = [
  {
    symbol: "The Conch Shell",
    meaning:
      "Represents democratic authority, order, and the right to speak. Whoever holds the conch has the right to address the assembly. As the conch's colour fades from vibrant pink to bleached white, so democratic authority weakens. Its destruction when Piggy is killed marks the final end of civilised governance on the island. The conch has no inherent power; its authority depends entirely on the boys' willingness to respect it.",
  },
  {
    symbol: "The Beast",
    meaning:
      "The beast evolves from a littlun's nightmare, to a dead parachutist, to the Lord of the Flies, and finally to Simon's insight that the beast is the darkness within humanity. It represents primal fear and the capacity for evil in every person. The beast is most powerful when misunderstood: Jack exploits it as an external threat, consolidating his power by promising protection. Simon's discovery that the beast is 'only us' is the novel's central revelation.",
  },
  {
    symbol: "Piggy's Glasses",
    meaning:
      "Represent intellectual power, science, and the ability to see clearly (both literally and figuratively). They are the only means of starting fire, making them the most practically valuable object on the island. When Jack steals them, he seizes the power of technology without the wisdom to use it responsibly. The cracking of one lens in Chapter 4 foreshadows the eventual breakdown of reason.",
  },
  {
    symbol: "The Lord of the Flies",
    meaning:
      "The severed pig's head mounted on a stick as an offering to the beast. It literally attracts flies and becomes a grotesque, decaying symbol of the evil the boys have unleashed. In Simon's hallucination, it speaks, revealing that the beast is not external but internal: 'I'm part of you.' The name 'Lord of the Flies' is a translation of the Hebrew 'Beelzebub', a name for the Devil, connecting the boys' savagery to a deeper, universal evil.",
  },
  {
    symbol: "The Signal Fire",
    meaning:
      "Represents hope, rescue, and connection to civilisation. When the fire burns, the boys maintain their desire to be rescued and to return to the adult world. When it goes out, they have symbolically abandoned civilisation. Ironically, the fire that finally attracts rescue is not the signal fire but the destructive blaze Jack sets to smoke Ralph out, suggesting that the boys' savagery inadvertently saves them.",
  },
  {
    symbol: "Face Paint",
    meaning:
      "Jack's face paint represents the loss of individual identity and the freedom from civilised inhibition. Behind the mask, Jack is 'liberated from shame and self-consciousness'. The paint transforms the choirboys into anonymous hunters, capable of violence they would never commit as identifiable individuals. It functions as a uniform of savagery, creating tribal identity while erasing personal moral responsibility.",
  },
  {
    symbol: "The Island",
    meaning:
      "The island itself functions as a microcosm of human civilisation and a Garden of Eden that is progressively corrupted. It is initially described as a paradise with fruit, fresh water, and beautiful lagoons, yet it harbours darkness in the dense jungle interior. The boys' gradual destruction of the island -- burning the forest, killing its animals, and finally setting it ablaze entirely in the hunt for Ralph -- mirrors humanity's capacity to destroy even the most abundant environment. The island's isolation removes all external authority, creating a laboratory for Golding's experiment in human nature. By the end, the paradise is a scorched wasteland, reflecting the moral devastation the boys have wrought upon themselves.",
  },
];

const contextSections = [
  {
    title: "William Golding's World War II Experience",
    content:
      "Golding served in the Royal Navy during World War II, commanding a rocket-launching ship during the D-Day landings. He witnessed the full horror of industrial warfare and the capacity of ordinary people to commit terrible acts. After the war, he said: 'I began to see what people were capable of doing. Anyone who moved through those years without understanding that man produces evil as a bee produces honey, must have been blind or wrong in the head.' This direct experience of human brutality profoundly shaped the novel's pessimistic view of human nature.",
  },
  {
    title: "The Cold War Context",
    content:
      "Published in 1954, Lord of the Flies was written during the early Cold War, when the threat of nuclear annihilation was ever-present. The boys are being evacuated from a nuclear war when their plane is shot down. The dead parachutist is a casualty of an air battle in the war above. The naval officer who rescues the boys is himself engaged in warfare. Golding suggests that the boys' island savagery is merely a microcosm of adult civilisation's capacity for destruction.",
  },
  {
    title: "Response to The Coral Island",
    content:
      "Golding wrote Lord of the Flies as a deliberate inversion of R.M. Ballantyne's The Coral Island (1857), a Victorian adventure novel in which three British boys are shipwrecked and create an ideal, harmonious society. Golding even uses the same names (Ralph and Jack) to signal his debt. Where Ballantyne assumed that British boys would naturally behave with courage and decency, Golding shows them descending into violence and murder. The novel is a critique of Victorian and Edwardian optimism about human nature.",
  },
  {
    title: "Allegory of Society",
    content:
      "The island functions as a microcosm of human civilisation. Ralph represents democratic government; Jack represents authoritarianism and fascism; Piggy represents science and intellectualism; Simon represents spiritual and moral insight; Roger represents the sadistic enforcement arm of a tyrannical state. The conch is a constitution; the fire is technology; the beast is the fear exploited by demagogues. The novel suggests that the same forces that shape adult politics -- fear, greed, tribalism, the will to power -- operate in children too.",
  },
  {
    title: "Golding's View of Human Nature",
    content:
      "Golding was profoundly influenced by his wartime experience and by the revelations of the Holocaust. He rejected the Rousseauian idea that humans are naturally good and corrupted by society. Instead, he believed that evil is innate and that society exists to suppress it. As he said in his Nobel Prize lecture: 'I have always understood the Nazis because I am of that nature.' The novel dramatises this belief: remove society's structures, and the darkness emerges.",
  },
];

const essayQuestions = [
  {
    question: "How does Golding present the conflict between civilisation and savagery in Lord of the Flies?",
    points: [
      "Analyse the conch as a symbol of democratic order: its use in assemblies, its fading colour, its destruction",
      "Track Jack's transformation: choirboy to hunter to dictator, noting key moments (face paint, first kill, rejection of rules)",
      "Examine the signal fire as the boys' connection to civilisation; its neglect mirrors their descent",
      "Discuss Simon's murder as the moment civilisation is irrevocably lost",
      "Consider Golding's conclusion: the naval officer represents 'civilised' society, but his warship shows that adult civilisation is equally violent",
    ],
  },
  {
    question: "How does Golding use the character of Simon to explore the theme of human nature?",
    points: [
      "Simon's role as a Christ-like figure: solitary, intuitive, misunderstood, sacrificed",
      "His insight that the beast is 'only us': the only character who grasps the novel's central truth",
      "The conversation with the Lord of the Flies: 'I'm part of you'",
      "His murder during the ritual dance: a symbolic crucifixion, the killing of truth by the mob",
      "The description of his body drifting out to sea: transcendent imagery suggesting Simon's moral insight survives his physical death",
    ],
  },
  {
    question: "'The beast is not an external threat but a reflection of the boys themselves.' How far do you agree?",
    points: [
      "Trace the evolution of the beast: littlun's nightmare, snake-thing, beast from water, beast from air (parachutist), Lord of the Flies",
      "Simon's insight: 'maybe it's only us' and the Lord of the Flies confirming this",
      "Jack's exploitation of the beast as an external threat to gain power",
      "Roger's arc: from throwing stones to miss to killing Piggy, showing the 'beast' is the removal of civilised restraint",
      "Counter-argument: the dead parachutist is an external, physical thing; however, the boys' reaction to it reveals their internal fears",
    ],
  },
  {
    question: "How does Golding present the theme of power in Lord of the Flies?",
    points: [
      "Ralph's democratic power: elected, uses the conch, builds consensus; effective but fragile",
      "Jack's authoritarian power: charisma, fear, violence, meat; appeals to basic desires",
      "Piggy's intellectual power: ideas and logic but no physical strength or social status to enforce them",
      "Roger's coercive power: violence and sadism as tools of the state",
      "The theft of Piggy's glasses: control of technology (fire) as the ultimate source of power",
    ],
  },
];

/* ─── Page Component ─────────────────────────────────────────── */

export default function LordOfTheFliesStudyGuide() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-xl border bg-gradient-to-b from-primary/[0.06] to-transparent px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          GCSE English Literature &mdash; Revision Notes
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Lord of the Flies &mdash; Complete Study Guide
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          William Golding&rsquo;s 1954 novel. Chapter summaries, character analysis, themes,
          25+ key quotations with analysis, symbolism, context, and essay planning.
        </p>
      </div>

      {/* Quick nav */}
      <nav className="flex flex-wrap gap-2 text-sm" aria-label="Page sections">
        {["Chapter Summaries", "Characters", "Themes", "Key Quotes", "Symbolism", "Context", "Essay Planning"].map(
          (s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-primary/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          )
        )}
      </nav>

      {/* Chapter Summaries */}
      <Section id="chapter-summaries" title="Chapter-by-Chapter Summary" defaultOpen>
        <div className="space-y-4">
          {chapters.map((ch) => (
            <div key={ch.chapter} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{ch.chapter}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ch.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Characters */}
      <Section id="characters" title="Character Analysis">
        <div className="space-y-5">
          {characters.map((c) => (
            <div key={c.name} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.analysis}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Themes */}
      <Section id="themes" title="Key Themes">
        <div className="grid gap-4 sm:grid-cols-2">
          {themes.map((t) => (
            <div key={t.name} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Quotes */}
      <Section id="key-quotes" title={`Key Quotations (${keyQuotes.length})`}>
        <p className="mb-4 text-sm text-muted-foreground">
          Each quotation includes context and detailed analysis suitable for GCSE responses.
        </p>
        <div className="space-y-4">
          {keyQuotes.map((q, i) => (
            <div key={i} className="rounded-lg border-l-4 border-primary bg-muted p-4">
              <blockquote className="text-base font-medium italic text-foreground">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <p className="mt-1 text-xs font-semibold text-primary">
                {q.speaker ? `${q.speaker} — ` : ""}{q.chapter}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Symbolism */}
      <Section id="symbolism" title="Symbolism">
        <div className="space-y-4">
          {symbolism.map((s) => (
            <div key={s.symbol} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{s.symbol}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.meaning}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Context */}
      <Section id="context" title="Historical & Literary Context">
        <div className="space-y-4">
          {contextSections.map((c) => (
            <div key={c.title} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.content}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Essay Planning */}
      <Section id="essay-planning" title="Essay Planning for Common Questions">
        <div className="space-y-5">
          {essayQuestions.map((eq, i) => (
            <div key={i} className="rounded-lg border border-border bg-muted p-4">
              <p className="font-medium text-foreground">{eq.question}</p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">Key points to cover:</p>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {eq.points.map((p, j) => (
                    <li key={j}>&bull; {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────────────────────────────────── PRACTICE QUESTIONS */}
      <Section id="practice-questions" title="Practice Questions">
        <p className="text-sm text-muted-foreground mb-6">
          Write your answer below each question and receive AI-powered feedback tailored to GCSE English Literature mark schemes.
          Aim for at least 150 words per response to get meaningful feedback.
        </p>
        <div className="space-y-8">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 1</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Golding present the conflict between civilisation and savagery in <em>Lord of the Flies</em>? Refer to the whole novel in your answer.
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Lord of the Flies - How Golding presents the conflict between civilisation and savagery"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 2</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Golding use the character of Jack to explore the theme of power and tyranny?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Lord of the Flies - How Golding uses Jack to explore the theme of power and tyranny"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 3</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Golding use symbolism in <em>Lord of the Flies</em>? You may wish to consider the conch, the beast, and Piggy&apos;s glasses in your answer.
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Lord of the Flies - How Golding uses symbolism including the conch, the beast, and Piggy's glasses"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 4</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Golding present the character of Ralph and his development throughout the novel?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Lord of the Flies - How Golding presents Ralph's character and development throughout the novel"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>
        </div>
      </Section>

      {/* Back link */}
      <div className="pt-4 text-sm">
        <a
          href="/resources/revision-notes"
          className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
        >
          &larr; Back to Revision Notes
        </a>
      </div>
    </div>
  );
}
