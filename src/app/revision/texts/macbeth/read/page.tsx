'use client'

import { InteractiveTextViewer, type TextData } from '@/components/study/InteractiveTextViewer'

// ─── Full Macbeth text data ─────────────────────────────────────────────────
// Public domain text from Shakespeare's Macbeth (c. 1606)
// Includes all 5 acts with key scenes, annotations, characters, and themes

const macbethData: TextData = {
  title: 'Macbeth',
  author: 'William Shakespeare',
  type: 'play',

  sections: [
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ACT 1
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      id: 'act1-scene1',
      title: 'Act 1, Scene 1 — The Witches',
      content: `<p class="italic text-muted-foreground mb-4">A desolate place. Thunder and lightning. Enter three Witches.</p>

<p><strong>FIRST WITCH</strong>
When shall we three meet again?
In thunder, lightning, or in rain?</p>

<p><strong>SECOND WITCH</strong>
When the hurly-burly's done,
When the battle's lost and won.</p>

<p><strong>THIRD WITCH</strong>
That will be ere the set of sun.</p>

<p><strong>FIRST WITCH</strong>
Where the place?</p>

<p><strong>SECOND WITCH</strong>
Upon the heath.</p>

<p><strong>THIRD WITCH</strong>
There to meet with Macbeth.</p>

<p><strong>FIRST WITCH</strong>
I come, Graymalkin!</p>

<p><strong>SECOND WITCH</strong>
Paddock calls.</p>

<p><strong>THIRD WITCH</strong>
Anon.</p>

<p><strong>ALL</strong>
Fair is foul, and foul is fair,
Hover through the fog and filthy air.</p>

<p class="italic text-muted-foreground mt-4">Exeunt.</p>

<p class="italic text-muted-foreground mt-6">Scene 2: A camp near Forres. Alarum within. Enter Duncan, Malcolm, Donalbain, Lennox, with Attendants, meeting a bleeding Sergeant.</p>

<p><strong>DUNCAN</strong>
What bloody man is that? He can report,
As seemeth by his plight, of the revolt
The newest state.</p>

<p><strong>MALCOLM</strong>
This is the sergeant
Who like a good and hardy soldier fought
'Gainst my captivity. Hail, brave friend!
Say to the king the knowledge of the broil
As thou didst leave it.</p>

<p><strong>SERGEANT</strong>
Doubtful it stood,
As two spent swimmers that do cling together
And choke their art. The merciless Macdonwald,
Worthy to be a rebel, for to that
The multiplying villainies of nature
Do swarm upon him, from the Western Isles
Of kerns and gallowglasses is supplied;
And fortune, on his damned quarrel smiling,
Showed like a rebel's whore. But all's too weak,
For brave Macbeth, well he deserves that name,
Disdaining fortune, with his brandished steel,
Which smoked with bloody execution,
Like valour's minion carved out his passage
Till he faced the slave,
Which ne'er shook hands, nor bade farewell to him,
Till he unseamed him from the nave to th' chops,
And fixed his head upon our battlements.</p>

<p><strong>DUNCAN</strong>
O valiant cousin, worthy gentleman!</p>

<p><strong>SERGEANT</strong>
As whence the sun 'gins his reflection
Shipwrecking storms and direful thunders break,
So from that spring whence comfort seemed to come
Discomfort swells. Mark, King of Scotland, mark.
No sooner justice had, with valour armed,
Compelled these skipping kerns to trust their heels,
But the Norweyan lord, surveying vantage,
With furbished arms and new supplies of men,
Began a fresh assault.</p>

<p><strong>DUNCAN</strong>
Dismayed not this our captains, Macbeth and Banquo?</p>

<p><strong>SERGEANT</strong>
Yes, as sparrows eagles, or the hare the lion.
If I say sooth, I must report they were
As cannons overcharged with double cracks,
So they doubly redoubled strokes upon the foe.
Except they meant to bathe in reeking wounds,
Or memorize another Golgotha,
I cannot tell.
But I am faint, my gashes cry for help.</p>

<p><strong>DUNCAN</strong>
So well thy words become thee as thy wounds;
They smack of honour both. Go get him surgeons.</p>`,
      annotations: [
        {
          type: 'language',
          text: 'Fair is foul, and foul is fair',
          note: 'Chiasmus (reversed grammatical structure) and paradox. This establishes the play\'s central motif of moral inversion -- nothing is what it seems. The antithesis of "fair" and "foul" creates an unsettling world where moral boundaries are collapsed.',
        },
        {
          type: 'theme',
          text: 'Fair is foul, and foul is fair',
          note: 'Theme: Appearance vs Reality. The witches\' motto announces that the entire play will deal with deception, equivocation, and the gap between seeming and being. This line is echoed by Macbeth\'s first words: "So foul and fair a day I have not seen."',
        },
        {
          type: 'context',
          text: 'When the hurly-burly\'s done',
          note: 'The witches speak in trochaic tetrameter (stressed-unstressed rhythm), which contrasts with the iambic pentameter used by the court characters. This rhythmic difference marks them as supernatural beings outside the natural order. Shakespeare used this distinction to unsettle the audience.',
        },
        {
          type: 'character',
          text: 'There to meet with Macbeth',
          note: 'The witches already know Macbeth by name before meeting him, implying they have been watching and waiting. This raises the key question of the play: do the witches cause Macbeth\'s downfall, or do they merely predict what he would have done anyway? The ambiguity is deliberate.',
        },
        {
          type: 'quote',
          text: 'Fair is foul, and foul is fair',
          note: 'KEY ESSAY QUOTE -- Use for: appearance vs reality, the supernatural, moral disorder. This chiasmus is the play\'s thematic thesis statement and can open or anchor almost any essay about Macbeth.',
        },
        {
          type: 'language',
          text: 'brave Macbeth, well he deserves that name',
          note: 'The Sergeant\'s report introduces Macbeth as a noble hero before we ever meet him. The epithet "brave Macbeth" creates dramatic irony -- this valiant warrior will soon become a treacherous murderer. Shakespeare builds him up so the fall is greater.',
        },
        {
          type: 'language',
          text: 'unseamed him from the nave to th\' chops',
          note: 'Visceral, violent imagery -- Macbeth literally split Macdonwald open from navel to jaw. The verb "unseamed" treats the body like fabric being torn apart. This establishes Macbeth\'s capacity for extreme violence, foreshadowing the murders to come.',
        },
        {
          type: 'context',
          text: 'Hover through the fog and filthy air',
          note: 'The pathetic fallacy of thunder, lightning, fog, and "filthy air" creates an atmosphere of moral corruption. For Jacobean audiences, storms were believed to be caused by witchcraft. King James I described witches raising storms in his treatise Daemonologie (1597).',
        },
      ],
    },
    {
      id: 'act1-scene3',
      title: 'Act 1, Scene 3 — The Prophecy',
      content: `<p class="italic text-muted-foreground mb-4">A heath near Forres. Thunder. Enter the three Witches.</p>

<p><strong>FIRST WITCH</strong>
Where hast thou been, sister?</p>

<p><strong>SECOND WITCH</strong>
Killing swine.</p>

<p><strong>THIRD WITCH</strong>
Sister, where thou?</p>

<p><strong>FIRST WITCH</strong>
A sailor's wife had chestnuts in her lap,
And munched, and munched, and munched. "Give me,"
quoth I.
"Aroint thee, witch!" the rump-fed runnion cries.
Her husband's to Aleppo gone, master o' th' Tiger.
But in a sieve I'll thither sail,
And like a rat without a tail,
I'll do, I'll do, and I'll do.</p>

<p><strong>THIRD WITCH</strong>
I'll give thee a wind.</p>

<p><strong>FIRST WITCH</strong>
Thou'rt kind.</p>

<p><strong>SECOND WITCH</strong>
I'll give thee another.</p>

<p><strong>FIRST WITCH</strong>
I myself have all the other,
And the very ports they blow,
All the quarters that they know
I' th' shipman's card.
I'll drain him dry as hay.
Sleep shall neither night nor day
Hang upon his penthouse lid.
He shall live a man forbid.
Weary sev'n-nights nine times nine
Shall he dwindle, peak, and pine.
Though his bark cannot be lost,
Yet it shall be tempest-tossed.
Look what I have.</p>

<p><strong>SECOND WITCH</strong>
Show me, show me.</p>

<p><strong>FIRST WITCH</strong>
Here I have a pilot's thumb,
Wracked as homeward he did come.</p>

<p><strong>THIRD WITCH</strong>
A drum, a drum!
Macbeth doth come.</p>

<p><strong>ALL</strong>
The weird sisters, hand in hand,
Posters of the sea and land,
Thus do go about, about,
Thrice to thine and thrice to mine
And thrice again, to make up nine.
Peace! The charm's wound up.</p>

<p class="italic text-muted-foreground mt-4">Enter Macbeth and Banquo.</p>

<p><strong>MACBETH</strong>
So foul and fair a day I have not seen.</p>

<p><strong>BANQUO</strong>
How far is 't called to Forres? -- What are these
So withered and so wild in their attire,
That look not like th' inhabitants o' th' earth,
And yet are on 't? -- Live you? Or are you aught
That man may question? You seem to understand me,
By each at once her choppy finger laying
Upon her skinny lips. You should be women,
And yet your beards forbid me to interpret
That you are so.</p>

<p><strong>MACBETH</strong>
Speak, if you can. What are you?</p>

<p><strong>FIRST WITCH</strong>
All hail, Macbeth! Hail to thee, Thane of Glamis!</p>

<p><strong>SECOND WITCH</strong>
All hail, Macbeth! Hail to thee, Thane of Cawdor!</p>

<p><strong>THIRD WITCH</strong>
All hail, Macbeth, that shalt be king hereafter!</p>

<p><strong>BANQUO</strong>
Good sir, why do you start and seem to fear
Things that do sound so fair? -- I' th' name of truth,
Are ye fantastical, or that indeed
Which outwardly ye show? My noble partner
You greet with present grace and great prediction
Of noble having and of royal hope,
That he seems rapt withal. To me you speak not.
If you can look into the seeds of time
And say which grain will grow and which will not,
Speak then to me, who neither beg nor fear
Your favours nor your hate.</p>

<p><strong>FIRST WITCH</strong>
Hail!</p>

<p><strong>SECOND WITCH</strong>
Hail!</p>

<p><strong>THIRD WITCH</strong>
Hail!</p>

<p><strong>FIRST WITCH</strong>
Lesser than Macbeth, and greater.</p>

<p><strong>SECOND WITCH</strong>
Not so happy, yet much happier.</p>

<p><strong>THIRD WITCH</strong>
Thou shalt get kings, though thou be none.
So all hail, Macbeth and Banquo!</p>

<p><strong>FIRST WITCH</strong>
Banquo and Macbeth, all hail!</p>

<p><strong>MACBETH</strong>
Stay, you imperfect speakers, tell me more.
By Sinel's death I know I am Thane of Glamis,
But how of Cawdor? The Thane of Cawdor lives,
A prosperous gentleman, and to be king
Stands not within the prospect of belief,
No more than to be Cawdor. Say from whence
You owe this strange intelligence, or why
Upon this blasted heath you stop our way
With such prophetic greeting. Speak, I charge you.</p>

<p class="italic text-muted-foreground">Witches vanish.</p>

<p><strong>BANQUO</strong>
The earth hath bubbles, as the water has,
And these are of them. Whither are they vanished?</p>

<p><strong>MACBETH</strong>
Into the air, and what seemed corporal melted
As breath into the wind. Would they had stayed!</p>

<p><strong>BANQUO</strong>
Were such things here as we do speak about?
Or have we eaten on the insane root
That takes the reason prisoner?</p>

<p><strong>MACBETH</strong>
Your children shall be kings.</p>

<p><strong>BANQUO</strong>
You shall be king.</p>

<p><strong>MACBETH</strong>
And Thane of Cawdor too. Went it not so?</p>

<p><strong>BANQUO</strong>
To th' selfsame tune and words.</p>

<p class="italic text-muted-foreground mt-4">Enter Ross and Angus.</p>

<p><strong>ROSS</strong>
The King hath happily received, Macbeth,
The news of thy success, and when he reads
Thy personal venture in the rebels' fight,
His wonders and his praises do contend
Which should be thine or his. Silenced with that,
In viewing o'er the rest o' th' selfsame day,
He finds thee in the stout Norweyan ranks,
Nothing afeard of what thyself didst make,
Strange images of death. As thick as hail
Came post with post, and every one did bear
Thy praises in his kingdom's great defence,
And poured them down before him.</p>

<p><strong>ANGUS</strong>
We are sent
To give thee from our royal master thanks,
Only to herald thee into his sight,
Not pay thee.</p>

<p><strong>ROSS</strong>
And, for an earnest of a greater honour,
He bade me, from him, call thee Thane of Cawdor,
In which addition, hail, most worthy thane,
For it is thine.</p>

<p><strong>BANQUO</strong>
What, can the devil speak true?</p>

<p><strong>MACBETH</strong>
The Thane of Cawdor lives. Why do you dress me
In borrowed robes?</p>

<p><strong>ANGUS</strong>
Who was the thane lives yet,
But under heavy judgement bears that life
Which he deserves to lose. Whether he was combined
With those of Norway, or did line the rebel
With hidden help and vantage, or that with both
He laboured in his country's wreck, I know not.
But treasons capital, confessed and proved,
Have overthrown him.</p>

<p><strong>MACBETH</strong> <em>[aside]</em>
Glamis, and Thane of Cawdor!
The greatest is behind. -- Thanks for your pains. --
Do you not hope your children shall be kings,
When those that gave the Thane of Cawdor to me
Promised no less to them?</p>

<p><strong>BANQUO</strong>
That, trusted home,
Might yet enkindle you unto the crown,
Besides the Thane of Cawdor. But 'tis strange.
And oftentimes, to win us to our harm,
The instruments of darkness tell us truths,
Win us with honest trifles, to betray 's
In deepest consequence. --
Cousins, a word, I pray you.</p>

<p><strong>MACBETH</strong> <em>[aside]</em>
Two truths are told,
As happy prologues to the swelling act
Of the imperial theme. -- I thank you, gentlemen. --
This supernatural soliciting
Cannot be ill, cannot be good. If ill,
Why hath it given me earnest of success,
Commencing in a truth? I am Thane of Cawdor.
If good, why do I yield to that suggestion
Whose horrid image doth unfix my hair
And make my seated heart knock at my ribs,
Against the use of nature? Present fears
Are less than horrible imaginings.
My thought, whose murder yet is but fantastical,
Shakes so my single state of man
That function is smothered in surmise,
And nothing is but what is not.</p>

<p><strong>BANQUO</strong>
Look how our partner's rapt.</p>

<p><strong>MACBETH</strong> <em>[aside]</em>
If chance will have me king, why, chance may crown me
Without my stir.</p>`,
      annotations: [
        {
          type: 'language',
          text: 'So foul and fair a day I have not seen',
          note: 'Macbeth\'s very first line echoes the witches\' "Fair is foul, and foul is fair" from Scene 1. This verbal link connects Macbeth to the supernatural world before he even meets the witches, suggesting a pre-existing affinity with moral disorder.',
        },
        {
          type: 'quote',
          text: 'All hail, Macbeth, that shalt be king hereafter!',
          note: 'KEY ESSAY QUOTE -- The triple greeting (Glamis, Cawdor, King) creates a rising sequence of power. The prophecy acts as the inciting incident of the tragedy. Use for essays on ambition, the supernatural, or fate vs free will.',
        },
        {
          type: 'character',
          text: 'The instruments of darkness tell us truths, Win us with honest trifles, to betray \'s In deepest consequence',
          note: 'Banquo acts as Macbeth\'s moral foil. He hears the same prophecy but responds with caution and moral clarity, recognising the witches\' strategy of using small truths to deliver larger deceptions. Macbeth ignores this wise warning.',
        },
        {
          type: 'quote',
          text: 'The instruments of darkness tell us truths, Win us with honest trifles, to betray \'s In deepest consequence',
          note: 'KEY ESSAY QUOTE -- Banquo\'s warning articulates how evil operates through deception. Use for: the supernatural, Banquo as foil, appearance vs reality, equivocation.',
        },
        {
          type: 'theme',
          text: 'This supernatural soliciting Cannot be ill, cannot be good',
          note: 'Theme: The Supernatural / Fate vs Free Will. Macbeth\'s soliloquy reveals his internal conflict. The prophecy has not commanded him to murder -- he draws that conclusion himself. This supports the reading that the witches exploit existing desires rather than creating new ones.',
        },
        {
          type: 'language',
          text: 'whose horrid image doth unfix my hair And make my seated heart knock at my ribs',
          note: 'Physical manifestations of psychological horror -- hair standing on end, heart pounding. Shakespeare dramatises the internal conflict through the body itself. The word "unfix" suggests Macbeth\'s sense of self is already being destabilised by the thought of murder.',
        },
        {
          type: 'character',
          text: 'If chance will have me king, why, chance may crown me Without my stir',
          note: 'Macbeth momentarily considers letting fate take its course without action. This brief moral hesitation makes his eventual choice to murder Duncan all the more tragic -- he knows the right path but chooses the wrong one.',
        },
        {
          type: 'context',
          text: 'Lesser than Macbeth, and greater',
          note: 'The witches\' paradoxical prophecies about Banquo use equivocation -- deliberately ambiguous language. This had topical resonance after the Gunpowder Plot (1605), when the Jesuit Henry Garnet defended the doctrine of equivocation at his trial. Shakespeare\'s audience would have recognised this as devilish deception.',
        },
      ],
    },
    {
      id: 'act1-scene5',
      title: 'Act 1, Scene 5 — Lady Macbeth\'s Letter',
      content: `<p class="italic text-muted-foreground mb-4">Inverness. Macbeth's castle. Enter Lady Macbeth, reading a letter.</p>

<p><strong>LADY MACBETH</strong>
<em>[reading]</em> "They met me in the day of success, and I have
learned by the perfectest report they have more in
them than mortal knowledge. When I burned in desire
to question them further, they made themselves air,
into which they vanished. Whiles I stood rapt in
the wonder of it, came missives from the King, who
all-hailed me 'Thane of Cawdor,' by which title,
before, these weird sisters saluted me, and referred
me to the coming on of time with 'Hail, king that
shalt be!' This have I thought good to deliver
thee, my dearest partner of greatness, that thou
mightst not lose the dues of rejoicing, by being
ignorant of what greatness is promised thee. Lay it
to thy heart, and farewell."
Glamis thou art, and Cawdor, and shalt be
What thou art promised. Yet do I fear thy nature;
It is too full o' th' milk of human kindness
To catch the nearest way. Thou wouldst be great,
Art not without ambition, but without
The illness should attend it. What thou wouldst highly,
That wouldst thou holily; wouldst not play false,
And yet wouldst wrongly win. Thou'dst have, great Glamis,
That which cries "Thus thou must do," if thou have it,
And that which rather thou dost fear to do
Than wishest should be undone. Hie thee hither,
That I may pour my spirits in thine ear
And chastise with the valour of my tongue
All that impedes thee from the golden round,
Which fate and metaphysical aid doth seem
To have thee crowned withal.</p>

<p class="italic text-muted-foreground mt-4">Enter a Messenger.</p>

<p><strong>MESSENGER</strong>
The King comes here tonight.</p>

<p><strong>LADY MACBETH</strong>
Thou'rt mad to say it!
Is not thy master with him, who, were 't so,
Would have informed for preparation?</p>

<p><strong>MESSENGER</strong>
So please you, it is true. Our thane is coming.
One of my fellows had the speed of him,
Who, almost dead for breath, had scarcely more
Than would make up his message.</p>

<p><strong>LADY MACBETH</strong>
Give him tending.
He brings great news.</p>

<p class="italic text-muted-foreground">Exit Messenger.</p>

<p><strong>LADY MACBETH</strong>
The raven himself is hoarse
That croaks the fatal entrance of Duncan
Under my battlements. Come, you spirits
That tend on mortal thoughts, unsex me here,
And fill me from the crown to the toe top-full
Of direst cruelty. Make thick my blood.
Stop up th' access and passage to remorse,
That no compunctious visitings of nature
Shake my fell purpose, nor keep peace between
Th' effect and it. Come to my woman's breasts,
And take my milk for gall, you murd'ring ministers,
Wherever in your sightless substances
You wait on nature's mischief. Come, thick night,
And pall thee in the dunnest smoke of hell,
That my keen knife see not the wound it makes,
Nor heaven peep through the blanket of the dark
To cry "Hold, hold!"</p>

<p class="italic text-muted-foreground mt-4">Enter Macbeth.</p>

<p><strong>LADY MACBETH</strong>
Great Glamis, worthy Cawdor,
Greater than both, by the all-hail hereafter!
Thy letters have transported me beyond
This ignorant present, and I feel now
The future in the instant.</p>

<p><strong>MACBETH</strong>
My dearest love,
Duncan comes here tonight.</p>

<p><strong>LADY MACBETH</strong>
And when goes hence?</p>

<p><strong>MACBETH</strong>
Tomorrow, as he purposes.</p>

<p><strong>LADY MACBETH</strong>
O, never
Shall sun that morrow see!
Your face, my thane, is as a book where men
May read strange matters. To beguile the time,
Look like the time. Bear welcome in your eye,
Your hand, your tongue. Look like th' innocent flower,
But be the serpent under 't. He that's coming
Must be provided for; and you shall put
This night's great business into my dispatch,
Which shall to all our nights and days to come
Give solely sovereign sway and masterdom.</p>

<p><strong>MACBETH</strong>
We will speak further.</p>

<p><strong>LADY MACBETH</strong>
Only look up clear.
To alter favour ever is to fear.
Leave all the rest to me.</p>`,
      annotations: [
        {
          type: 'quote',
          text: 'Yet do I fear thy nature; It is too full o\' th\' milk of human kindness',
          note: 'KEY ESSAY QUOTE -- Lady Macbeth\'s assessment reveals Macbeth still has a moral conscience she must overcome. The metaphor of "milk" associates kindness with femininity and nurturing. She sees his humanity as a weakness to be purged.',
        },
        {
          type: 'language',
          text: 'unsex me here, And fill me from the crown to the toe top-full Of direst cruelty',
          note: 'The verb "unsex" is a violent demand to strip away femininity. "Crown to toe" suggests total bodily transformation. The invocation parallels a demonic possession -- she is calling on dark spirits to inhabit her entirely. The language of "filling" implies she needs to replace her natural self with something unnatural.',
        },
        {
          type: 'theme',
          text: 'unsex me here',
          note: 'Theme: Gender and Masculinity. Lady Macbeth explicitly rejects her femininity to participate in murder. She equates womanliness with compassion and weakness, and masculinity with ruthless violence. This gendered language runs throughout the play.',
        },
        {
          type: 'quote',
          text: 'Look like th\' innocent flower, But be the serpent under \'t',
          note: 'KEY ESSAY QUOTE -- Biblical allusion to the serpent in Eden. Lady Macbeth instructs Macbeth in the art of deception. Use for: appearance vs reality, Lady Macbeth\'s manipulation, the corruption of innocence.',
        },
        {
          type: 'character',
          text: 'Come to my woman\'s breasts, And take my milk for gall',
          note: 'Lady Macbeth asks spirits to replace her breast milk (symbol of maternal nurturing) with "gall" (bitterness/poison). This is a deliberate rejection of motherhood and femininity. The imagery is shocking and transgressive, marking her as deeply unnatural in Jacobean terms.',
        },
        {
          type: 'context',
          text: 'Come, you spirits That tend on mortal thoughts',
          note: 'Lady Macbeth\'s invocation of evil spirits would have been deeply disturbing to a Jacobean audience who believed in demonic possession. She is essentially inviting the devil in. This aligns her with the witches and the supernatural evil they represent. King James I would have seen this as evidence of witchcraft.',
        },
        {
          type: 'language',
          text: 'Come, thick night, And pall thee in the dunnest smoke of hell',
          note: 'The imperative verbs ("come," "pall") show Lady Macbeth commanding darkness itself. "Dunnest" means darkest -- she wants the blackest possible concealment. "Pall" means both to cover (like a funeral cloth) and to become insipid, foreshadowing her later disillusionment.',
        },
        {
          type: 'theme',
          text: 'Your face, my thane, is as a book where men May read strange matters',
          note: 'Theme: Appearance vs Reality. Lady Macbeth recognises that Macbeth\'s face betrays his thoughts -- he cannot yet deceive. She must teach him to separate his appearance from his reality, a skill that will consume them both.',
        },
      ],
    },
    {
      id: 'act1-scene7',
      title: 'Act 1, Scene 7 — The Persuasion',
      content: `<p class="italic text-muted-foreground mb-4">Macbeth's castle. Hautboys and torches. Enter a Sewer, and divers Servants with dishes and service, and pass over the stage. Then enter Macbeth.</p>

<p><strong>MACBETH</strong>
If it were done when 'tis done, then 'twere well
It were done quickly. If th' assassination
Could trammel up the consequence, and catch
With his surcease success; that but this blow
Might be the be-all and the end-all here,
But here, upon this bank and shoal of time,
We'd jump the life to come. But in these cases
We still have judgement here, that we but teach
Bloody instructions, which, being taught, return
To plague th' inventor. This even-handed justice
Commends th' ingredients of our poisoned chalice
To our own lips. He's here in double trust:
First, as I am his kinsman and his subject,
Strong both against the deed; then, as his host,
Who should against his murderer shut the door,
Not bear the knife myself. Besides, this Duncan
Hath borne his faculties so meek, hath been
So clear in his great office, that his virtues
Will plead like angels, trumpet-tongued, against
The deep damnation of his taking-off;
And pity, like a naked newborn babe
Striding the blast, or heaven's cherubin horsed
Upon the sightless couriers of the air,
Shall blow the horrid deed in every eye,
That tears shall drown the wind. I have no spur
To prick the sides of my intent, but only
Vaulting ambition, which o'erleaps itself
And falls on the other.</p>

<p class="italic text-muted-foreground mt-4">Enter Lady Macbeth.</p>

<p><strong>MACBETH</strong>
How now, what news?</p>

<p><strong>LADY MACBETH</strong>
He has almost supped. Why have you left the chamber?</p>

<p><strong>MACBETH</strong>
Hath he asked for me?</p>

<p><strong>LADY MACBETH</strong>
Know you not he has?</p>

<p><strong>MACBETH</strong>
We will proceed no further in this business.
He hath honoured me of late, and I have bought
Golden opinions from all sorts of people,
Which would be worn now in their newest gloss,
Not cast aside so soon.</p>

<p><strong>LADY MACBETH</strong>
Was the hope drunk
Wherein you dressed yourself? Hath it slept since?
And wakes it now, to look so green and pale
At what it did so freely? From this time
Such I account thy love. Art thou afeard
To be the same in thine own act and valour
As thou art in desire? Wouldst thou have that
Which thou esteem'st the ornament of life,
And live a coward in thine own esteem,
Letting "I dare not" wait upon "I would,"
Like the poor cat i' th' adage?</p>

<p><strong>MACBETH</strong>
Prithee, peace!
I dare do all that may become a man.
Who dares do more is none.</p>

<p><strong>LADY MACBETH</strong>
What beast was 't, then,
That made you break this enterprise to me?
When you durst do it, then you were a man;
And to be more than what you were, you would
Be so much more the man. Nor time nor place
Did then adhere, and yet you would make both.
They have made themselves, and that their fitness now
Does unmake you. I have given suck, and know
How tender 'tis to love the babe that milks me.
I would, while it was smiling in my face,
Have plucked my nipple from his boneless gums
And dashed the brains out, had I so sworn as you
Have done to this.</p>

<p><strong>MACBETH</strong>
If we should fail?</p>

<p><strong>LADY MACBETH</strong>
We fail?
But screw your courage to the sticking place,
And we'll not fail. When Duncan is asleep,
Whereto the rather shall his day's hard journey
Soundly invite him, his two chamberlains
Will I with wine and wassail so convince
That memory, the warder of the brain,
Shall be a fume, and the receipt of reason
A limbeck only. When in swinish sleep
Their drenched natures lies as in a death,
What cannot you and I perform upon
Th' unguarded Duncan? What not put upon
His spongy officers, who shall bear the guilt
Of our great quell?</p>

<p><strong>MACBETH</strong>
Bring forth men-children only,
For thy undaunted mettle should compose
Nothing but males. Will it not be received,
When we have marked with blood those sleepy two
Of his own chamber and used their very daggers,
That they have done 't?</p>

<p><strong>LADY MACBETH</strong>
Who dares receive it other,
As we shall make our griefs and clamour roar
Upon his death?</p>

<p><strong>MACBETH</strong>
I am settled, and bend up
Each corporal agent to this terrible feat.
Away, and mock the time with fairest show.
False face must hide what the false heart doth know.</p>`,
      annotations: [
        {
          type: 'language',
          text: 'If it were done when \'tis done, then \'twere well It were done quickly',
          note: 'The tortured syntax mirrors Macbeth\'s tortured thinking. The repetition of "done" three times in the first line shows his mind circling around the act, trying to reduce murder to a simple task. The conditional "if" reveals he knows it will NOT be "done" -- consequences will follow.',
        },
        {
          type: 'quote',
          text: 'I have no spur To prick the sides of my intent, but only Vaulting ambition, which o\'erleaps itself And falls on the other',
          note: 'KEY ESSAY QUOTE -- Macbeth admits his ONLY motive is ambition. The horse-riding metaphor of "vaulting ambition" that "o\'erleaps itself" perfectly predicts his trajectory: he will overreach and fall. This is the tragic flaw identified by the hero himself.',
        },
        {
          type: 'theme',
          text: 'Vaulting ambition, which o\'erleaps itself And falls on the other',
          note: 'Theme: Ambition. Macbeth identifies ambition as a force that destroys itself through excess. The image of a rider vaulting too high and falling off the other side of the horse captures the entire arc of the play in a single metaphor.',
        },
        {
          type: 'character',
          text: 'When you durst do it, then you were a man; And to be more than what you were, you would Be so much more the man',
          note: 'Lady Macbeth\'s most devastating manipulation: she redefines masculinity as the willingness to murder. She attacks Macbeth\'s identity, his sense of self as a man, knowing this is more powerful than any logical argument. She weaponises gender expectations.',
        },
        {
          type: 'quote',
          text: 'I dare do all that may become a man. Who dares do more is none',
          note: 'KEY ESSAY QUOTE -- Macbeth\'s response offers a more nuanced definition of manhood: true manliness has moral limits. To exceed those limits is to become less than human. Tragically, he will immediately abandon this principled position. Use for: gender/masculinity theme.',
        },
        {
          type: 'language',
          text: 'I have given suck, and know How tender \'tis to love the babe that milks me. I would, while it was smiling in my face, Have plucked my nipple from his boneless gums And dashed the brains out',
          note: 'The most shocking image in the play. Lady Macbeth uses the ultimate act of maternal destruction -- killing her own nursing baby -- as a measure of her commitment. The contrast between tenderness ("smiling in my face") and violence ("dashed the brains out") is deliberately horrifying. It proves she will stop at nothing.',
        },
        {
          type: 'theme',
          text: 'When you durst do it, then you were a man',
          note: 'Theme: Gender and Masculinity. Lady Macbeth equates manhood with the capacity for violence and murder. This toxic definition of masculinity drives the tragedy -- Macbeth kills partly to prove he is a "man." Compare with Macduff\'s later redefinition: "I must also feel it as a man."',
        },
        {
          type: 'language',
          text: 'False face must hide what the false heart doth know',
          note: 'The rhyming couplet that closes the scene signals Macbeth\'s decision is made. The repetition of "false" emphasises the total corruption -- both his face (appearance) and heart (reality) are now "false." The couplet form gives it the quality of a dark proverb.',
        },
      ],
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ACT 2
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      id: 'act2-scene1',
      title: 'Act 2, Scene 1 — The Dagger',
      content: `<p class="italic text-muted-foreground mb-4">Inverness. Court of Macbeth's castle. Enter Banquo and Fleance, bearing a torch before him.</p>

<p><strong>BANQUO</strong>
How goes the night, boy?</p>

<p><strong>FLEANCE</strong>
The moon is down. I have not heard the clock.</p>

<p><strong>BANQUO</strong>
And she goes down at twelve.</p>

<p><strong>FLEANCE</strong>
I take 't 'tis later, sir.</p>

<p><strong>BANQUO</strong>
Hold, take my sword. There's husbandry in heaven;
Their candles are all out. Take thee that too.
A heavy summons lies like lead upon me,
And yet I would not sleep. Merciful powers,
Restrain in me the cursed thoughts that nature
Gives way to in repose.</p>

<p class="italic text-muted-foreground mt-4">Enter Macbeth, and a Servant with a torch.</p>

<p><strong>BANQUO</strong>
Give me my sword. Who's there?</p>

<p><strong>MACBETH</strong>
A friend.</p>

<p><strong>BANQUO</strong>
What, sir, not yet at rest? The King's abed.
He hath been in unusual pleasure, and
Sent forth great largess to your offices.
This diamond he greets your wife withal,
By the name of most kind hostess, and shut up
In measureless content.</p>

<p><strong>MACBETH</strong>
Being unprepared,
Our will became the servant to defect,
Which else should free have wrought.</p>

<p><strong>BANQUO</strong>
All's well.
I dreamt last night of the three weird sisters.
To you they have showed some truth.</p>

<p><strong>MACBETH</strong>
I think not of them.
Yet, when we can entreat an hour to serve,
We would spend it in some words upon that business,
If you would grant the time.</p>

<p><strong>BANQUO</strong>
At your kind'st leisure.</p>

<p><strong>MACBETH</strong>
If you shall cleave to my consent, when 'tis,
It shall make honour for you.</p>

<p><strong>BANQUO</strong>
So I lose none
In seeking to augment it, but still keep
My bosom franchised and allegiance clear,
I shall be counselled.</p>

<p><strong>MACBETH</strong>
Good repose the while.</p>

<p><strong>BANQUO</strong>
Thanks, sir. The like to you.</p>

<p class="italic text-muted-foreground">Exeunt Banquo and Fleance.</p>

<p><strong>MACBETH</strong>
Go bid thy mistress, when my drink is ready,
She strike upon the bell. Get thee to bed.</p>

<p class="italic text-muted-foreground">Exit Servant.</p>

<p><strong>MACBETH</strong>
Is this a dagger which I see before me,
The handle toward my hand? Come, let me clutch thee.
I have thee not, and yet I see thee still.
Art thou not, fatal vision, sensible
To feeling as to sight? Or art thou but
A dagger of the mind, a false creation,
Proceeding from the heat-oppressed brain?
I see thee yet, in form as palpable
As this which now I draw.
Thou marshall'st me the way that I was going,
And such an instrument I was to use.
Mine eyes are made the fools o' th' other senses,
Or else worth all the rest. I see thee still,
And on thy blade and dudgeon gouts of blood,
Which was not so before. There's no such thing.
It is the bloody business which informs
Thus to mine eyes. Now o'er the one half-world
Nature seems dead, and wicked dreams abuse
The curtained sleep. Witchcraft celebrates
Pale Hecate's offerings, and withered murder,
Alarumed by his sentinel, the wolf,
Whose howl's his watch, thus with his stealthy pace,
With Tarquin's ravishing strides, towards his design
Moves like a ghost. Thou sure and firm-set earth,
Hear not my steps, which way they walk, for fear
Thy very stones prate of my whereabout,
And take the present horror from the time,
Which now suits with it. Whiles I threat, he lives.
Words to the heat of deeds too cold breath gives.</p>

<p class="italic text-muted-foreground mt-2">A bell rings.</p>

<p><strong>MACBETH</strong>
I go, and it is done. The bell invites me.
Hear it not, Duncan, for it is a knell
That summons thee to heaven or to hell.</p>`,
      annotations: [
        {
          type: 'quote',
          text: 'Is this a dagger which I see before me, The handle toward my hand?',
          note: 'KEY ESSAY QUOTE -- The most famous soliloquy opening in the play. The dagger hallucination dramatises Macbeth\'s psychological conflict. Is it supernatural temptation or a projection of his guilty mind? The fact the handle points towards him suggests temptation offering itself willingly.',
        },
        {
          type: 'language',
          text: 'A dagger of the mind, a false creation, Proceeding from the heat-oppressed brain',
          note: 'Macbeth himself questions whether the dagger is real or imaginary -- "a false creation" from a feverish mind. This ambiguity is central to the play\'s treatment of the supernatural: Shakespeare never confirms whether the vision is genuine or psychological.',
        },
        {
          type: 'theme',
          text: 'Is this a dagger which I see before me',
          note: 'Theme: The Supernatural. The dagger vision exists in the liminal space between reality and hallucination. It embodies the play\'s refusal to clearly separate natural from supernatural, real from imagined. This ambiguity makes the supernatural elements more unsettling.',
        },
        {
          type: 'character',
          text: 'So I lose none In seeking to augment it, but still keep My bosom franchised and allegiance clear',
          note: 'Banquo\'s conditional response reveals his moral integrity: he will seek honour only if it does not compromise his conscience or loyalty. This directly contrasts with Macbeth, who is about to sacrifice both conscience and loyalty for the crown.',
        },
        {
          type: 'language',
          text: 'With Tarquin\'s ravishing strides, towards his design Moves like a ghost',
          note: 'The classical allusion to Tarquin (the Roman king who committed a famous rape) associates Macbeth\'s crime with sexual violence and tyranny. "Moves like a ghost" foreshadows Macbeth\'s spiritual death -- he is already becoming a hollow figure.',
        },
        {
          type: 'context',
          text: 'Witchcraft celebrates Pale Hecate\'s offerings',
          note: 'Hecate was the Greek goddess of witchcraft, crossroads, and the underworld. Macbeth imagines the entire supernatural world activated and celebrating as he moves towards murder. For Jacobean audiences, this would confirm that regicide aligns with demonic forces.',
        },
        {
          type: 'quote',
          text: 'Hear it not, Duncan, for it is a knell That summons thee to heaven or to hell',
          note: 'KEY ESSAY QUOTE -- The rhyming couplet seals Duncan\'s fate. A "knell" is a funeral bell, transforming Lady Macbeth\'s signal into a death toll. The final words "heaven or to hell" remind us of the spiritual stakes of what Macbeth is about to do.',
        },
        {
          type: 'language',
          text: 'on thy blade and dudgeon gouts of blood, Which was not so before',
          note: 'The dagger transforms before Macbeth\'s eyes, becoming bloodied. "Gouts" means large drops. The hallucination intensifies, moving from vision to prophecy -- it shows the aftermath of a deed not yet committed. The escalation mirrors Macbeth\'s own resolve hardening.',
        },
      ],
    },
    {
      id: 'act2-scene2',
      title: 'Act 2, Scene 2 — The Murder',
      content: `<p class="italic text-muted-foreground mb-4">The same. Enter Lady Macbeth.</p>

<p><strong>LADY MACBETH</strong>
That which hath made them drunk hath made me bold;
What hath quenched them hath given me fire.
Hark! Peace!
It was the owl that shrieked, the fatal bellman,
Which gives the stern'st good-night. He is about it.
The doors are open, and the surfeited grooms
Do mock their charge with snores. I have drugged
their possets,
That death and nature do contend about them,
Whether they live or die.</p>

<p><strong>MACBETH</strong> <em>[within]</em>
Who's there? What, ho!</p>

<p><strong>LADY MACBETH</strong>
Alack, I am afraid they have awaked,
And 'tis not done. Th' attempt and not the deed
Confounds us. Hark! I laid their daggers ready;
He could not miss 'em. Had he not resembled
My father as he slept, I had done 't.</p>

<p class="italic text-muted-foreground mt-4">Enter Macbeth.</p>

<p><strong>MACBETH</strong>
I have done the deed. Didst thou not hear a noise?</p>

<p><strong>LADY MACBETH</strong>
I heard the owl scream and the crickets cry.
Did not you speak?</p>

<p><strong>MACBETH</strong>
When?</p>

<p><strong>LADY MACBETH</strong>
Now.</p>

<p><strong>MACBETH</strong>
As I descended?</p>

<p><strong>LADY MACBETH</strong>
Ay.</p>

<p><strong>MACBETH</strong>
Hark! Who lies i' th' second chamber?</p>

<p><strong>LADY MACBETH</strong>
Donalbain.</p>

<p><strong>MACBETH</strong>
This is a sorry sight.</p>

<p><strong>LADY MACBETH</strong>
A foolish thought, to say a sorry sight.</p>

<p><strong>MACBETH</strong>
There's one did laugh in 's sleep, and one cried
"Murder!"
That they did wake each other. I stood and heard them.
But they did say their prayers and addressed them
Again to sleep.</p>

<p><strong>LADY MACBETH</strong>
There are two lodged together.</p>

<p><strong>MACBETH</strong>
One cried "God bless us!" and "Amen" the other,
As they had seen me with these hangman's hands.
List'ning their fear, I could not say "Amen,"
When they did say "God bless us!"</p>

<p><strong>LADY MACBETH</strong>
Consider it not so deeply.</p>

<p><strong>MACBETH</strong>
But wherefore could not I pronounce "Amen"?
I had most need of blessing, and "Amen"
Stuck in my throat.</p>

<p><strong>LADY MACBETH</strong>
These deeds must not be thought
After these ways; so, it will make us mad.</p>

<p><strong>MACBETH</strong>
Methought I heard a voice cry "Sleep no more!
Macbeth does murder sleep," the innocent sleep,
Sleep that knits up the ravelled sleave of care,
The death of each day's life, sore labour's bath,
Balm of hurt minds, great nature's second course,
Chief nourisher in life's feast.</p>

<p><strong>LADY MACBETH</strong>
What do you mean?</p>

<p><strong>MACBETH</strong>
Still it cried "Sleep no more!" to all the house.
"Glamis hath murdered sleep, and therefore Cawdor
Shall sleep no more. Macbeth shall sleep no more."</p>

<p><strong>LADY MACBETH</strong>
Who was it that thus cried? Why, worthy thane,
You do unbend your noble strength to think
So brainsickly of things. Go get some water,
And wash this filthy witness from your hand.
Why did you bring these daggers from the place?
They must lie there. Go carry them and smear
The sleepy grooms with blood.</p>

<p><strong>MACBETH</strong>
I'll go no more.
I am afraid to think what I have done.
Look on 't again I dare not.</p>

<p><strong>LADY MACBETH</strong>
Infirm of purpose!
Give me the daggers. The sleeping and the dead
Are but as pictures. 'Tis the eye of childhood
That fears a painted devil. If he do bleed,
I'll gild the faces of the grooms withal,
For it must seem their guilt.</p>

<p class="italic text-muted-foreground">Exit.</p>

<p class="italic text-muted-foreground mt-4">Knocking within.</p>

<p><strong>MACBETH</strong>
Whence is that knocking?
How is 't with me, when every noise appals me?
What hands are these? Ha! They pluck out mine eyes.
Will all great Neptune's ocean wash this blood
Clean from my hand? No, this my hand will rather
The multitudinous seas incarnadine,
Making the green one red.</p>

<p class="italic text-muted-foreground mt-4">Re-enter Lady Macbeth.</p>

<p><strong>LADY MACBETH</strong>
My hands are of your colour, but I shame
To wear a heart so white.</p>

<p class="italic text-muted-foreground">Knocking within.</p>

<p><strong>LADY MACBETH</strong>
I hear a knocking
At the south entry. Retire we to our chamber.
A little water clears us of this deed.
How easy is it, then! Your constancy
Hath left you unattended.</p>

<p class="italic text-muted-foreground">Knocking within.</p>

<p><strong>LADY MACBETH</strong>
Hark! More knocking.
Get on your nightgown, lest occasion call us
And show us to be watchers. Be not lost
So poorly in your thoughts.</p>

<p><strong>MACBETH</strong>
To know my deed, 'twere best not know myself.</p>

<p class="italic text-muted-foreground">Knocking within.</p>

<p><strong>MACBETH</strong>
Wake Duncan with thy knocking. I would thou couldst!</p>`,
      annotations: [
        {
          type: 'quote',
          text: 'Will all great Neptune\'s ocean wash this blood Clean from my hand?',
          note: 'KEY ESSAY QUOTE -- The hyperbole of an entire ocean being insufficient to cleanse his hands conveys the permanence of guilt. This directly contrasts with Lady Macbeth\'s dismissive "A little water clears us of this deed" -- a confidence devastatingly reversed in her sleepwalking scene.',
        },
        {
          type: 'language',
          text: 'The multitudinous seas incarnadine, Making the green one red',
          note: 'Shakespeare follows the Latinate "multitudinous seas incarnadine" with the simple monosyllabic "Making the green one red" -- translating his own poetry into blunt, visceral English. The contrast between ornate and plain language mirrors Macbeth\'s mind oscillating between denial and horrified clarity.',
        },
        {
          type: 'theme',
          text: 'Macbeth does murder sleep',
          note: 'Theme: Guilt and Conscience. Sleep symbolises innocence, peace of mind, and the natural order. By murdering the sleeping Duncan, Macbeth has destroyed his own capacity for rest. The voice that cries this verdict is his own conscience, already passing judgement.',
        },
        {
          type: 'character',
          text: 'Had he not resembled My father as he slept, I had done \'t',
          note: 'This crucial aside reveals Lady Macbeth\'s humanity beneath her iron resolve. Despite calling on spirits to "unsex" her, she cannot commit the murder herself because Duncan reminds her of her father. Her femininity and compassion have not been fully suppressed -- they will resurface devastatingly in Act 5.',
        },
        {
          type: 'language',
          text: 'I could not say "Amen," When they did say "God bless us!"',
          note: 'Macbeth\'s inability to say "Amen" dramatises his spiritual separation from God. The act of regicide has cut him off from divine grace. This would have been profoundly disturbing to a Jacobean audience who believed in the sacred bond between God and king.',
        },
        {
          type: 'quote',
          text: 'A little water clears us of this deed',
          note: 'KEY ESSAY QUOTE -- Lady Macbeth\'s dismissal of guilt as easily washed away creates devastating dramatic irony. In Act 5, she will compulsively wash her hands, unable to remove imaginary blood: "All the perfumes of Arabia will not sweeten this little hand." Use for: guilt, Lady Macbeth\'s arc, dramatic irony.',
        },
        {
          type: 'context',
          text: 'I\'ll gild the faces of the grooms withal, For it must seem their guilt',
          note: 'The pun on "gild" (to cover in gold) and "guilt" reveals Lady Macbeth\'s dark wit under pressure. She is practical and composed where Macbeth is paralysed. The framing of the grooms reflects the play\'s theme of appearance vs reality -- she manufactures false evidence.',
        },
        {
          type: 'theme',
          text: 'Sleep that knits up the ravelled sleave of care, The death of each day\'s life, sore labour\'s bath',
          note: 'Theme: Natural Order. Macbeth\'s beautiful description of sleep as healing and restorative emphasises what he has destroyed. Sleep represents the natural order -- by murdering the sleeping king, he has violated nature itself and condemned himself to perpetual wakefulness and guilt.',
        },
      ],
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ACT 3
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      id: 'act3-scene4',
      title: 'Act 3, Scene 4 — The Banquet / Banquo\'s Ghost',
      content: `<p class="italic text-muted-foreground mb-4">A hall in the palace. A banquet prepared. Enter Macbeth, Lady Macbeth, Ross, Lennox, Lords, and Attendants.</p>

<p><strong>MACBETH</strong>
You know your own degrees; sit down. At first
And last the hearty welcome.</p>

<p><strong>LORDS</strong>
Thanks to your Majesty.</p>

<p><strong>MACBETH</strong>
Ourself will mingle with society
And play the humble host.
Our hostess keeps her state, but in best time
We will require her welcome.</p>

<p><strong>LADY MACBETH</strong>
Pronounce it for me, sir, to all our friends,
For my heart speaks they are welcome.</p>

<p class="italic text-muted-foreground mt-4">First Murderer appears at the door.</p>

<p><strong>MACBETH</strong>
See, they encounter thee with their hearts' thanks.
Both sides are even. Here I'll sit i' th' midst.
Be large in mirth; anon we'll drink a measure
The table round.</p>

<p class="italic text-muted-foreground">[Approaching the Murderer at the door.]</p>

<p><strong>MACBETH</strong>
There's blood upon thy face.</p>

<p><strong>FIRST MURDERER</strong>
'Tis Banquo's then.</p>

<p><strong>MACBETH</strong>
'Tis better thee without than he within.
Is he dispatched?</p>

<p><strong>FIRST MURDERER</strong>
My lord, his throat is cut. That I did for him.</p>

<p><strong>MACBETH</strong>
Thou art the best o' th' cutthroats. Yet he's good
That did the like for Fleance. If thou didst it,
Thou art the nonpareil.</p>

<p><strong>FIRST MURDERER</strong>
Most royal sir, Fleance is 'scaped.</p>

<p><strong>MACBETH</strong>
Then comes my fit again. I had else been perfect,
Whole as the marble, founded as the rock,
As broad and general as the casing air.
But now I am cabined, cribbed, confined, bound in
To saucy doubts and fears. But Banquo's safe?</p>

<p><strong>FIRST MURDERER</strong>
Ay, my good lord. Safe in a ditch he bides,
With twenty trenched gashes on his head,
The least a death to nature.</p>

<p><strong>MACBETH</strong>
Thanks for that.
There the grown serpent lies. The worm that's fled
Hath nature that in time will venom breed;
No teeth for th' present. Get thee gone. Tomorrow
We'll hear ourselves again.</p>

<p class="italic text-muted-foreground">Exit Murderer.</p>

<p><strong>LADY MACBETH</strong>
My royal lord,
You do not give the cheer. The feast is sold
That is not often vouched, while 'tis a-making,
'Tis given with welcome. To feed were best at home;
From thence the sauce to meat is ceremony;
Meeting were bare without it.</p>

<p><strong>MACBETH</strong>
Sweet remembrancer!
Now, good digestion wait on appetite,
And health on both!</p>

<p><strong>LENNOX</strong>
May 't please your Highness sit.</p>

<p class="italic text-muted-foreground mt-4">The Ghost of Banquo enters, and sits in Macbeth's place.</p>

<p><strong>MACBETH</strong>
Here had we now our country's honour roofed,
Were the graced person of our Banquo present,
Who may I rather challenge for unkindness
Than pity for mischance.</p>

<p><strong>ROSS</strong>
His absence, sir,
Lays blame upon his promise. Please 't your Highness
To grace us with your royal company.</p>

<p><strong>MACBETH</strong>
The table's full.</p>

<p><strong>LENNOX</strong>
Here is a place reserved, sir.</p>

<p><strong>MACBETH</strong>
Where?</p>

<p><strong>LENNOX</strong>
Here, my good lord. What is 't that moves your
Highness?</p>

<p><strong>MACBETH</strong>
Which of you have done this?</p>

<p><strong>LORDS</strong>
What, my good lord?</p>

<p><strong>MACBETH</strong>
Thou canst not say I did it. Never shake
Thy gory locks at me.</p>

<p><strong>ROSS</strong>
Gentlemen, rise. His Highness is not well.</p>

<p><strong>LADY MACBETH</strong>
Sit, worthy friends. My lord is often thus,
And hath been from his youth. Pray you, keep seat.
The fit is momentary; upon a thought
He will again be well. If much you note him,
You shall offend him and extend his passion.
Feed, and regard him not.</p>

<p class="italic text-muted-foreground">[She draws Macbeth aside.]</p>

<p><strong>LADY MACBETH</strong>
Are you a man?</p>

<p><strong>MACBETH</strong>
Ay, and a bold one, that dare look on that
Which might appal the devil.</p>

<p><strong>LADY MACBETH</strong>
O proper stuff!
This is the very painting of your fear.
This is the air-drawn dagger which I told you of.
O, these flaws and starts,
Impostors to true fear, would well become
A woman's story at a winter's fire,
Authorized by her grandam. Shame itself!
Why do you make such faces? When all's done,
You look but on a stool.</p>

<p><strong>MACBETH</strong>
Prithee, see there! Behold! Look! Lo! How say you?
Why, what care I? If thou canst nod, speak too.
If charnel houses and our graves must send
Those that we bury back, our monuments
Shall be the maws of kites.</p>

<p class="italic text-muted-foreground">Ghost vanishes.</p>

<p><strong>MACBETH</strong>
Why so, being gone,
I am a man again. Pray you sit still.</p>

<p><strong>LADY MACBETH</strong>
You have displaced the mirth, broke the good meeting,
With most admired disorder.</p>

<p><strong>MACBETH</strong>
Can such things be,
And overcome us like a summer's cloud,
Without our special wonder? You make me strange
Even to the disposition that I owe,
When now I think you can behold such sights
And keep the natural ruby of your cheeks,
When mine is blanched with fear.</p>

<p><strong>ROSS</strong>
What sights, my lord?</p>

<p><strong>LADY MACBETH</strong>
I pray you, speak not. He grows worse and worse;
Question enrages him. At once, good night.
Stand not upon the order of your going,
But go at once.</p>

<p><strong>LENNOX</strong>
Good night, and better health
Attend his Majesty!</p>

<p><strong>LADY MACBETH</strong>
A kind good night to all!</p>

<p class="italic text-muted-foreground">Exeunt all but Macbeth and Lady Macbeth.</p>

<p><strong>MACBETH</strong>
It will have blood, they say; blood will have blood.
Stones have been known to move, and trees to speak;
Augurs and understood relations have
By magot pies and choughs and rooks brought forth
The secret'st man of blood. What is the night?</p>

<p><strong>LADY MACBETH</strong>
Almost at odds with morning, which is which.</p>

<p><strong>MACBETH</strong>
How say'st thou, that Macduff denies his person
At our great bidding?</p>

<p><strong>LADY MACBETH</strong>
Did you send to him, sir?</p>

<p><strong>MACBETH</strong>
I hear it by the way; but I will send.
There's not a one of them but in his house
I keep a servant fee'd. I will tomorrow,
And betimes I will, to the weird sisters.
More shall they speak, for now I am bent to know,
By the worst means, the worst. For mine own good,
All causes shall give way. I am in blood
Stepped in so far that, should I wade no more,
Returning were as tedious as go o'er.
Strange things I have in head, that will to hand,
Which must be acted ere they may be scanned.</p>

<p><strong>LADY MACBETH</strong>
You lack the season of all natures, sleep.</p>

<p><strong>MACBETH</strong>
Come, we'll to sleep. My strange and self-abuse
Is the initiate fear that wants hard use.
We are yet but young in deed.</p>`,
      annotations: [
        {
          type: 'quote',
          text: 'I am in blood Stepped in so far that, should I wade no more, Returning were as tedious as go o\'er',
          note: 'KEY ESSAY QUOTE -- Extended metaphor of guilt as a river of blood. The word "tedious" is chillingly understated -- returning to virtue has become merely inconvenient. Once a threshold of evil is crossed, the moral cost of repentance feels equal to continuing. This traps Macbeth in a cycle of violence.',
        },
        {
          type: 'theme',
          text: 'blood will have blood',
          note: 'Theme: Guilt and Conscience. This proverbial statement acknowledges that violence breeds more violence. Macbeth recognises the cycle he is trapped in but sees no escape. The repetition of "blood" hammers home the idea that murder can never be contained.',
        },
        {
          type: 'character',
          text: 'Thou canst not say I did it. Never shake Thy gory locks at me',
          note: 'Macbeth\'s terrified outburst to the ghost reveals his guilt publicly. The denial "I did it" is an inadvertent confession. The Ghost of Banquo represents the physical manifestation of Macbeth\'s guilt -- or is it genuinely supernatural? Shakespeare maintains the ambiguity.',
        },
        {
          type: 'language',
          text: 'Are you a man?',
          note: 'Lady Macbeth again weaponises gender to control Macbeth, echoing her Act 1 manipulation. But here her power is waning -- she can no longer control his psychological disintegration. The question becomes increasingly desperate as the scene progresses.',
        },
        {
          type: 'theme',
          text: 'cabined, cribbed, confined, bound in To saucy doubts and fears',
          note: 'Theme: Kingship and Power. The alliteration of "cabined, cribbed, confined" creates a sense of claustrophobic imprisonment. Despite being king, Macbeth feels trapped. Power has not brought freedom but paranoid confinement -- the opposite of what he expected.',
        },
        {
          type: 'context',
          text: 'The Ghost of Banquo enters, and sits in Macbeth\'s place',
          note: 'The ghost sitting in Macbeth\'s chair symbolically suggests that Banquo\'s line (leading to James I) is the rightful occupant of the throne. For Shakespeare\'s audience, this would have reinforced the Stuart claim to the crown. The ghost displaces the usurper.',
        },
        {
          type: 'language',
          text: 'This is the very painting of your fear',
          note: 'Lady Macbeth dismisses the ghost as a hallucination ("painting of your fear"), linking it to the earlier dagger vision. The word "painting" continues the play\'s theme of false appearances. Crucially, she cannot see the ghost -- is it real or imagined?',
        },
        {
          type: 'quote',
          text: 'We are yet but young in deed',
          note: 'KEY ESSAY QUOTE -- Macbeth\'s chilling final line suggests more murders will follow. "Young in deed" implies they are only beginners in evil, with worse to come. This marks the point where Macbeth transitions from reluctant murderer to active tyrant.',
        },
      ],
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ACT 4
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      id: 'act4-scene1',
      title: 'Act 4, Scene 1 — The Apparitions',
      content: `<p class="italic text-muted-foreground mb-4">A cavern. In the middle, a boiling cauldron. Thunder. Enter the three Witches.</p>

<p><strong>FIRST WITCH</strong>
Thrice the brinded cat hath mewed.</p>

<p><strong>SECOND WITCH</strong>
Thrice and once the hedge-pig whined.</p>

<p><strong>THIRD WITCH</strong>
Harpier cries "'Tis time, 'tis time."</p>

<p><strong>FIRST WITCH</strong>
Round about the cauldron go;
In the poisoned entrails throw.
Toad, that under cold stone
Days and nights has thirty-one
Sweltered venom sleeping got,
Boil thou first i' th' charmed pot.</p>

<p><strong>ALL</strong>
Double, double toil and trouble;
Fire burn and cauldron bubble.</p>

<p><strong>SECOND WITCH</strong>
Fillet of a fenny snake,
In the cauldron boil and bake.
Eye of newt and toe of frog,
Wool of bat and tongue of dog,
Adder's fork and blindworm's sting,
Lizard's leg and howlet's wing,
For a charm of powerful trouble,
Like a hell-broth boil and bubble.</p>

<p><strong>ALL</strong>
Double, double toil and trouble;
Fire burn and cauldron bubble.</p>

<p><strong>THIRD WITCH</strong>
Scale of dragon, tooth of wolf,
Witches' mummy, maw and gulf
Of the ravined salt-sea shark,
Root of hemlock digged i' th' dark,
Liver of blaspheming Jew,
Gall of goat, and slips of yew
Slivered in the moon's eclipse,
Nose of Turk and Tartar's lips,
Finger of birth-strangled babe
Ditch-delivered by a drab,
Make the gruel thick and slab.
Add thereto a tiger's chaudron,
For the ingredients of our cauldron.</p>

<p><strong>ALL</strong>
Double, double toil and trouble;
Fire burn and cauldron bubble.</p>

<p><strong>SECOND WITCH</strong>
Cool it with a baboon's blood,
Then the charm is firm and good.</p>

<p class="italic text-muted-foreground mt-4">Enter Hecate to the other three Witches.</p>

<p><strong>HECATE</strong>
O well done! I commend your pains,
And every one shall share i' th' gains.
And now about the cauldron sing,
Like elves and fairies in a ring,
Enchanting all that you put in.</p>

<p class="italic text-muted-foreground mt-4">Music and a song: "Black spirits," etc. Hecate retires.</p>

<p><strong>SECOND WITCH</strong>
By the pricking of my thumbs,
Something wicked this way comes.
Open, locks,
Whoever knocks.</p>

<p class="italic text-muted-foreground mt-4">Enter Macbeth.</p>

<p><strong>MACBETH</strong>
How now, you secret, black, and midnight hags!
What is 't you do?</p>

<p><strong>ALL</strong>
A deed without a name.</p>

<p><strong>MACBETH</strong>
I conjure you, by that which you profess,
Howe'er you come to know it, answer me.
Though you untie the winds and let them fight
Against the churches, though the yeasty waves
Confound and swallow navigation up,
Though bladed corn be lodged and trees blown down,
Though castles topple on their warders' heads,
Though palaces and pyramids do slope
Their heads to their foundations, though the treasure
Of nature's germens tumble all together,
Even till destruction sicken, answer me
To what I ask you.</p>

<p><strong>FIRST WITCH</strong>
Speak.</p>

<p><strong>SECOND WITCH</strong>
Demand.</p>

<p><strong>THIRD WITCH</strong>
We'll answer.</p>

<p><strong>FIRST WITCH</strong>
Say if thou'dst rather hear it from our mouths,
Or from our masters?</p>

<p><strong>MACBETH</strong>
Call 'em. Let me see 'em.</p>

<p class="italic text-muted-foreground mt-4">Thunder. First Apparition: an armed Head.</p>

<p><strong>FIRST APPARITION</strong>
Macbeth! Macbeth! Macbeth! Beware Macduff.
Beware the Thane of Fife. Dismiss me. Enough.</p>

<p class="italic text-muted-foreground">He descends.</p>

<p><strong>MACBETH</strong>
Whate'er thou art, for thy good caution, thanks.
Thou hast harped my fear aright. But one word more --</p>

<p><strong>FIRST WITCH</strong>
He will not be commanded. Here's another,
More potent than the first.</p>

<p class="italic text-muted-foreground mt-4">Thunder. Second Apparition: a bloody Child.</p>

<p><strong>SECOND APPARITION</strong>
Macbeth! Macbeth! Macbeth!</p>

<p><strong>MACBETH</strong>
Had I three ears, I'd hear thee.</p>

<p><strong>SECOND APPARITION</strong>
Be bloody, bold, and resolute. Laugh to scorn
The power of man, for none of woman born
Shall harm Macbeth.</p>

<p class="italic text-muted-foreground">Descends.</p>

<p><strong>MACBETH</strong>
Then live, Macduff. What need I fear of thee?
But yet I'll make assurance double sure,
And take a bond of fate. Thou shalt not live,
That I may tell pale-hearted fear it lies,
And sleep in spite of thunder.</p>

<p class="italic text-muted-foreground mt-4">Thunder. Third Apparition: a Child crowned, with a tree in his hand.</p>

<p><strong>THIRD APPARITION</strong>
Be lion-mettled, proud, and take no care
Who chafes, who frets, or where conspirers are.
Macbeth shall never vanquished be until
Great Birnam Wood to high Dunsinane Hill
Shall come against him.</p>

<p class="italic text-muted-foreground">Descends.</p>

<p><strong>MACBETH</strong>
That will never be.
Who can impress the forest, bid the tree
Unfix his earthbound root? Sweet bodements! Good!
Rebellious dead, rise never till the wood
Of Birnam rise, and our high-placed Macbeth
Shall live the lease of nature, pay his breath
To time and mortal custom. Yet my heart
Throbs to know one thing. Tell me, if your art
Can tell so much: shall Banquo's issue ever
Reign in this kingdom?</p>

<p><strong>ALL</strong>
Seek to know no more.</p>

<p><strong>MACBETH</strong>
I will be satisfied. Deny me this,
And an eternal curse fall on you! Let me know.
Why sinks that cauldron? And what noise is this?</p>

<p class="italic text-muted-foreground mt-4">Hautboys. A show of eight Kings, the last with a glass in his hand; Ghost of Banquo following.</p>

<p><strong>MACBETH</strong>
Thou art too like the spirit of Banquo. Down!
Thy crown does sear mine eyeballs. And thy hair,
Thou other gold-bound brow, is like the first.
A third is like the former. Filthy hags!
Why do you show me this? A fourth? Start, eyes!
What, will the line stretch out to th' crack of doom?
Another yet? A seventh? I'll see no more.
And yet the eighth appears, who bears a glass
Which shows me many more; and some I see
That twofold balls and treble sceptres carry.
Horrible sight! Now I see 'tis true,
For the blood-boltered Banquo smiles upon me
And points at them for his.</p>

<p class="italic text-muted-foreground">The show vanishes.</p>

<p><strong>MACBETH</strong>
What, is this so?</p>

<p><strong>FIRST WITCH</strong>
Ay, sir, all this is so. But why
Stands Macbeth so amazedly?
Come, sisters, cheer we up his sprites,
And show the best of our delights.
I'll charm the air to give a sound,
While you perform your antic round,
That this great king may kindly say,
Our duties did his welcome pay.</p>

<p class="italic text-muted-foreground mt-2">Music. The witches dance and then vanish with Hecate.</p>

<p><strong>MACBETH</strong>
Where are they? Gone? Let this pernicious hour
Stand aye accursed in the calendar!
Come in, without there.</p>

<p class="italic text-muted-foreground mt-4">Enter Lennox.</p>

<p><strong>LENNOX</strong>
What's your Grace's will?</p>

<p><strong>MACBETH</strong>
Saw you the weird sisters?</p>

<p><strong>LENNOX</strong>
No, my lord.</p>

<p><strong>MACBETH</strong>
Came they not by you?</p>

<p><strong>LENNOX</strong>
No, indeed, my lord.</p>

<p><strong>MACBETH</strong>
Infected be the air whereon they ride,
And damned all those that trust them! I did hear
The galloping of horse. Who was 't came by?</p>

<p><strong>LENNOX</strong>
'Tis two or three, my lord, that bring you word
Macduff is fled to England.</p>

<p><strong>MACBETH</strong>
Fled to England?</p>

<p><strong>LENNOX</strong>
Ay, my good lord.</p>

<p><strong>MACBETH</strong>
Time, thou anticipat'st my dread exploits.
The flighty purpose never is o'ertook
Unless the deed go with it. From this moment
The very firstlings of my heart shall be
The firstlings of my hand. And even now,
To crown my thoughts with acts, be it thought and done:
The castle of Macduff I will surprise,
Seize upon Fife, give to th' edge o' th' sword
His wife, his babes, and all unfortunate souls
That trace him in his line. No boasting like a fool;
This deed I'll do before this purpose cool.
But no more sights! -- Where are these gentlemen?
Come, bring me where they are.</p>`,
      annotations: [
        {
          type: 'quote',
          text: 'Double, double toil and trouble; Fire burn and cauldron bubble',
          note: 'KEY ESSAY QUOTE -- The witches\' famous incantation uses trochaic tetrameter, contrasting with the play\'s standard iambic pentameter. "Double" reinforces the motif of duplicity and equivocation. The grotesque cauldron ingredients symbolise moral corruption. Use for: the supernatural, atmosphere, equivocation.',
        },
        {
          type: 'language',
          text: 'By the pricking of my thumbs, Something wicked this way comes',
          note: 'The witch senses Macbeth through a physical sensation, showing supernatural attunement to evil. Crucially, she calls him "something wicked" rather than "someone" -- stripping him of humanity. Even the witches, agents of evil themselves, now recognise Macbeth as wicked.',
        },
        {
          type: 'theme',
          text: 'none of woman born Shall harm Macbeth',
          note: 'Theme: Appearance vs Reality / Equivocation. The prophecy appears to guarantee Macbeth\'s invincibility but is deliberately misleading. Macduff was born by caesarean section -- "untimely ripped" from his mother\'s womb -- and therefore not technically "born" of woman. The witches use literal truth to deceive.',
        },
        {
          type: 'character',
          text: 'The very firstlings of my heart shall be The firstlings of my hand',
          note: 'Macbeth resolves to act on impulse without reflection -- the opposite of his agonised deliberation before Duncan\'s murder. He has evolved from a man paralysed by conscience to one who murders spontaneously. The slaughter of Macduff\'s family follows immediately.',
        },
        {
          type: 'context',
          text: 'twofold balls and treble sceptres',
          note: 'The "show of eight kings" represents the Stuart dynasty descending from Banquo. The "twofold balls" refer to the double coronation orb used when James VI of Scotland became James I of England. The "glass" (mirror) held by the eighth king would have symbolically reflected James I in the audience -- a direct royal compliment.',
        },
        {
          type: 'language',
          text: 'Eye of newt and toe of frog, Wool of bat and tongue of dog',
          note: 'The catalogue of grotesque ingredients creates a darkly comic litany. Many of these were folk names for herbs (e.g., "eye of newt" = mustard seed), but Shakespeare presents them literally for maximum horror. The rhythmic listing mimics a genuine spell, creating an incantatory atmosphere.',
        },
        {
          type: 'theme',
          text: 'Macbeth shall never vanquished be until Great Birnam Wood to high Dunsinane Hill Shall come against him',
          note: 'Theme: The Supernatural / Fate. Like the "none of woman born" prophecy, this seems impossible but will be fulfilled literally. Malcolm\'s soldiers carry branches from Birnam Wood as camouflage. The witches exploit equivocation -- technically true but designed to create false confidence.',
        },
        {
          type: 'quote',
          text: 'Something wicked this way comes',
          note: 'KEY ESSAY QUOTE -- Use for: Macbeth\'s moral deterioration, the supernatural, character transformation. The fact that the witches themselves call Macbeth "wicked" shows how far he has fallen from the "brave Macbeth" of Act 1.',
        },
      ],
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ACT 5
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      id: 'act5-scene1',
      title: 'Act 5, Scene 1 — The Sleepwalking',
      content: `<p class="italic text-muted-foreground mb-4">Dunsinane. Ante-room in the castle. Enter a Doctor of Physic and a Waiting-Gentlewoman.</p>

<p><strong>DOCTOR</strong>
I have two nights watched with you, but can perceive
no truth in your report. When was it she last walked?</p>

<p><strong>GENTLEWOMAN</strong>
Since his Majesty went into the field, I have seen
her rise from her bed, throw her nightgown upon
her, unlock her closet, take forth paper, fold it,
write upon 't, read it, afterwards seal it, and again
return to bed; yet all this while in a most fast sleep.</p>

<p><strong>DOCTOR</strong>
A great perturbation in nature, to receive at once
the benefit of sleep and do the effects of
watching! In this slumbery agitation, besides her
walking and other actual performances, what, at any
time, have you heard her say?</p>

<p><strong>GENTLEWOMAN</strong>
That, sir, which I will not report after her.</p>

<p><strong>DOCTOR</strong>
You may to me, and 'tis most meet you should.</p>

<p><strong>GENTLEWOMAN</strong>
Neither to you nor anyone, having no witness to
confirm my speech.</p>

<p class="italic text-muted-foreground mt-4">Enter Lady Macbeth, with a taper.</p>

<p><strong>DOCTOR</strong>
How came she by that light?</p>

<p><strong>GENTLEWOMAN</strong>
Why, it stood by her. She has light by her
continually. 'Tis her command.</p>

<p><strong>DOCTOR</strong>
You see, her eyes are open.</p>

<p><strong>GENTLEWOMAN</strong>
Ay, but their sense are shut.</p>

<p><strong>DOCTOR</strong>
What is it she does now? Look, how she rubs her
hands.</p>

<p><strong>GENTLEWOMAN</strong>
It is an accustomed action with her, to seem thus
washing her hands. I have known her continue in
this a quarter of an hour.</p>

<p><strong>LADY MACBETH</strong>
Yet here's a spot.</p>

<p><strong>DOCTOR</strong>
Hark! She speaks. I will set down what comes from
her, to satisfy my remembrance the more strongly.</p>

<p><strong>LADY MACBETH</strong>
Out, damned spot! Out, I say! -- One, two. Why,
then, 'tis time to do 't. -- Hell is murky! -- Fie, my
lord, fie! A soldier, and afeard? What need we
fear who knows it, when none can call our power to
account? -- Yet who would have thought the old man
to have had so much blood in him?</p>

<p><strong>DOCTOR</strong>
Do you mark that?</p>

<p><strong>LADY MACBETH</strong>
The Thane of Fife had a wife. Where is she now? --
What, will these hands ne'er be clean? -- No more o'
that, my lord, no more o' that. You mar all with
this starting.</p>

<p><strong>DOCTOR</strong>
Go to, go to. You have known what you should not.</p>

<p><strong>GENTLEWOMAN</strong>
She has spoke what she should not, I am sure of
that. Heaven knows what she has known.</p>

<p><strong>LADY MACBETH</strong>
Here's the smell of the blood still. All the
perfumes of Arabia will not sweeten this little
hand. Oh, oh, oh!</p>

<p><strong>DOCTOR</strong>
What a sigh is there! The heart is sorely charged.</p>

<p><strong>GENTLEWOMAN</strong>
I would not have such a heart in my bosom for the
dignity of the whole body.</p>

<p><strong>DOCTOR</strong>
Well, well, well.</p>

<p><strong>GENTLEWOMAN</strong>
Pray God it be, sir.</p>

<p><strong>DOCTOR</strong>
This disease is beyond my practice. Yet I have known
those which have walked in their sleep who have died
holily in their beds.</p>

<p><strong>LADY MACBETH</strong>
Wash your hands. Put on your nightgown. Look not
so pale. -- I tell you yet again, Banquo's buried; he
cannot come out on 's grave.</p>

<p><strong>DOCTOR</strong>
Even so?</p>

<p><strong>LADY MACBETH</strong>
To bed, to bed. There's knocking at the gate.
Come, come, come, come, give me your hand. What's
done cannot be undone. -- To bed, to bed, to bed!</p>

<p class="italic text-muted-foreground">Exit.</p>

<p><strong>DOCTOR</strong>
Will she go now to bed?</p>

<p><strong>GENTLEWOMAN</strong>
Directly.</p>

<p><strong>DOCTOR</strong>
Foul whisperings are abroad. Unnatural deeds
Do breed unnatural troubles. Infected minds
To their deaf pillows will discharge their secrets.
More needs she the divine than the physician.
God, God forgive us all! Look after her.
Remove from her the means of all annoyance,
And still keep eyes upon her. So, good night.
My mind she has mated, and amazed my sight.
I think, but dare not speak.</p>

<p><strong>GENTLEWOMAN</strong>
Good night, good doctor.</p>`,
      annotations: [
        {
          type: 'quote',
          text: 'Out, damned spot! Out, I say!',
          note: 'KEY ESSAY QUOTE -- Lady Macbeth\'s most famous line. She compulsively washes imaginary blood from her hands, reversing her earlier "A little water clears us of this deed." The word "damned" carries religious weight -- she recognises her soul is condemned. Use for: guilt, Lady Macbeth\'s arc, dramatic irony.',
        },
        {
          type: 'language',
          text: 'Here\'s the smell of the blood still. All the perfumes of Arabia will not sweeten this little hand',
          note: 'The sensory shift from sight (spot) to smell shows guilt becoming more pervasive and inescapable. This directly inverts Macbeth\'s "Neptune\'s ocean" image -- she has arrived at the same recognition of permanent guilt. "Little" is poignant: she is suddenly diminished, no longer the towering figure of Act 1.',
        },
        {
          type: 'theme',
          text: 'Out, damned spot!',
          note: 'Theme: Guilt and Conscience. Lady Macbeth\'s sleepwalking proves that guilt cannot be suppressed indefinitely. Her unconscious mind forces her to relive the crimes she helped orchestrate. The blood she once dismissed as trivial has become a permanent psychological stain.',
        },
        {
          type: 'character',
          text: 'Yet who would have thought the old man to have had so much blood in him?',
          note: 'Lady Macbeth\'s fragmented prose contrasts with her earlier commanding verse. The shift from verse to prose signals her mental disintegration. She relives multiple murders simultaneously -- Duncan, Lady Macduff, Banquo -- all merging into a single nightmare of guilt.',
        },
        {
          type: 'context',
          text: 'More needs she the divine than the physician',
          note: 'The Doctor recognises that Lady Macbeth\'s illness is spiritual, not physical. In Jacobean terms, she needs a priest, not a doctor. The line suggests that her guilt is a form of divine punishment that no earthly remedy can address. "Remove from her the means of all annoyance" implies he fears she will harm herself.',
        },
        {
          type: 'language',
          text: 'What\'s done cannot be undone',
          note: 'This echoes and inverts Macbeth\'s "If it were done when \'tis done." Where Macbeth tried to imagine murder as finite and contained, Lady Macbeth now recognises its irreversibility. The simple, child-like diction ("done... undone") reflects her mental regression.',
        },
        {
          type: 'theme',
          text: 'Unnatural deeds Do breed unnatural troubles',
          note: 'Theme: Natural Order. The Doctor\'s verdict connects Lady Macbeth\'s madness to the wider pattern of nature disrupted by crime. Her "unnatural" rejection of femininity ("unsex me here") has bred "unnatural" psychological consequences. The play insists that violating nature has inescapable costs.',
        },
        {
          type: 'quote',
          text: 'All the perfumes of Arabia will not sweeten this little hand',
          note: 'KEY ESSAY QUOTE -- A devastating inversion of Macbeth\'s "Neptune\'s ocean" line. Where his image was cosmic and hyperbolic, hers is sensory and intimate. The "little hand" makes her vulnerability heartbreaking. Use for: guilt, gender, Lady Macbeth\'s transformation, imagery.',
        },
      ],
    },
    {
      id: 'act5-scene5',
      title: 'Act 5, Scene 5 — "Tomorrow, and tomorrow, and tomorrow"',
      content: `<p class="italic text-muted-foreground mb-4">Dunsinane. Within the castle. Enter Macbeth, Seyton, and Soldiers, with drum and colours.</p>

<p><strong>MACBETH</strong>
Hang out our banners on the outward walls.
The cry is still "They come!" Our castle's strength
Will laugh a siege to scorn. Here let them lie
Till famine and the ague eat them up.
Were they not forced with those that should be ours,
We might have met them dareful, beard to beard,
And beat them backward home.</p>

<p class="italic text-muted-foreground mt-4">A cry of women within.</p>

<p><strong>MACBETH</strong>
What is that noise?</p>

<p><strong>SEYTON</strong>
It is the cry of women, my good lord.</p>

<p class="italic text-muted-foreground">Exit.</p>

<p><strong>MACBETH</strong>
I have almost forgot the taste of fears.
The time has been, my senses would have cooled
To hear a night-shriek, and my fell of hair
Would at a dismal treatise rouse and stir
As life were in 't. I have supped full with horrors;
Direness, familiar to my slaughterous thoughts,
Cannot once start me.</p>

<p class="italic text-muted-foreground mt-4">Re-enter Seyton.</p>

<p><strong>MACBETH</strong>
Wherefore was that cry?</p>

<p><strong>SEYTON</strong>
The Queen, my lord, is dead.</p>

<p><strong>MACBETH</strong>
She should have died hereafter.
There would have been a time for such a word.
Tomorrow, and tomorrow, and tomorrow,
Creeps in this petty pace from day to day
To the last syllable of recorded time,
And all our yesterdays have lighted fools
The way to dusty death. Out, out, brief candle!
Life's but a walking shadow, a poor player
That struts and frets his hour upon the stage
And then is heard no more. It is a tale
Told by an idiot, full of sound and fury,
Signifying nothing.</p>

<p class="italic text-muted-foreground mt-4">Enter a Messenger.</p>

<p><strong>MESSENGER</strong>
Gracious my lord,
I should report that which I say I saw,
But know not how to do 't.</p>

<p><strong>MACBETH</strong>
Well, say, sir.</p>

<p><strong>MESSENGER</strong>
As I did stand my watch upon the hill,
I looked toward Birnam, and anon, methought,
The wood began to move.</p>

<p><strong>MACBETH</strong>
Liar and slave!</p>

<p><strong>MESSENGER</strong>
Let me endure your wrath, if 't be not so.
Within this three mile may you see it coming;
I say, a moving grove.</p>

<p><strong>MACBETH</strong>
If thou speak'st false,
Upon the next tree shalt thou hang alive,
Till famine cling thee. If thy speech be sooth,
I care not if thou dost for me as much.
I pull in resolution, and begin
To doubt th' equivocation of the fiend
That lies like truth. "Fear not, till Birnam Wood
Do come to Dunsinane." And now a wood
Comes toward Dunsinane. Arm, arm, and out!
If this which he avouches does appear,
There is nor flying hence nor tarrying here.
I 'gin to be aweary of the sun,
And wish the estate o' the world were now undone.
Ring the alarum-bell! Blow, wind! Come, wrack!
At least we'll die with harness on our back.</p>`,
      annotations: [
        {
          type: 'quote',
          text: 'Tomorrow, and tomorrow, and tomorrow, Creeps in this petty pace from day to day To the last syllable of recorded time',
          note: 'KEY ESSAY QUOTE -- Shakespeare\'s most famous soliloquy. The triple repetition and monosyllabic diction create unbearable monotony and weariness. "Creeps" and "petty pace" diminish time itself. Having murdered his way to the throne, Macbeth finds the future holds nothing worth living for. This is ambition\'s ultimate consequence.',
        },
        {
          type: 'language',
          text: 'Life\'s but a walking shadow, a poor player That struts and frets his hour upon the stage And then is heard no more',
          note: 'The theatrical metaphor is deeply self-aware -- Macbeth IS a character on a stage. "Walking shadow" suggests something without substance. "Struts and frets" reduces all human action to pointless performance. "His hour" emphasises life\'s brevity. The metaphor layers: life is a shadow of a bad actor in a meaningless play.',
        },
        {
          type: 'quote',
          text: 'It is a tale Told by an idiot, full of sound and fury, Signifying nothing',
          note: 'KEY ESSAY QUOTE -- The conclusion dismisses life as a meaningless story. "Sound and fury" suggests all of Macbeth\'s violence and ambition amount to nothing. "Signifying nothing" is devastating in its finality. Use for: consequences of ambition, Macbeth\'s character arc, nihilism as tragic endpoint.',
        },
        {
          type: 'theme',
          text: 'Tomorrow, and tomorrow, and tomorrow',
          note: 'Theme: Ambition. This soliloquy is the tragic endpoint of ambition. Macbeth has achieved everything he desired (the crown) but finds it meaningless. His nihilistic despair represents the ultimate consequence of pursuing power at the cost of conscience, love, and human connection.',
        },
        {
          type: 'character',
          text: 'She should have died hereafter. There would have been a time for such a word',
          note: 'Macbeth\'s response to his wife\'s death is chillingly muted -- not grief but weary resignation. "She should have died hereafter" can mean either "she would have died eventually anyway" or "there should have been a better time for this." Either reading reveals a man drained of the capacity to feel.',
        },
        {
          type: 'language',
          text: 'I have supped full with horrors; Direness, familiar to my slaughterous thoughts, Cannot once start me',
          note: 'The metaphor of "supping full" with horrors suggests Macbeth has consumed so much evil that he can take no more -- he is satiated with horror. The word "familiar" is devastating: atrocity has become routine. He has been numbed by his own violence.',
        },
        {
          type: 'theme',
          text: 'To doubt th\' equivocation of the fiend That lies like truth',
          note: 'Theme: Appearance vs Reality. Macbeth finally recognises the witches\' strategy -- equivocation, the use of literally true statements to deceive. "Lies like truth" perfectly describes their prophecies. This moment of clarity comes too late to save him.',
        },
        {
          type: 'context',
          text: 'Out, out, brief candle!',
          note: 'The candle metaphor connects to the play\'s sustained light/darkness imagery. Candles and torches have appeared throughout as fragile sources of light in an overwhelming darkness. Now Macbeth extinguishes even this hope, accepting total darkness. The exclamation mimics someone literally snuffing a candle.',
        },
      ],
    },
    {
      id: 'act5-scene8',
      title: 'Act 5, Scene 8 — The Final Battle',
      content: `<p class="italic text-muted-foreground mb-4">Another part of the field. Enter Macbeth.</p>

<p><strong>MACBETH</strong>
Why should I play the Roman fool and die
On mine own sword? Whiles I see lives, the gashes
Do better upon them.</p>

<p class="italic text-muted-foreground mt-4">Enter Macduff.</p>

<p><strong>MACDUFF</strong>
Turn, hell-hound, turn!</p>

<p><strong>MACBETH</strong>
Of all men else I have avoided thee.
But get thee back. My soul is too much charged
With blood of thine already.</p>

<p><strong>MACDUFF</strong>
I have no words.
My voice is in my sword, thou bloodier villain
Than terms can give thee out!</p>

<p class="italic text-muted-foreground">They fight.</p>

<p><strong>MACBETH</strong>
Thou losest labour.
As easy mayst thou the intrenchant air
With thy keen sword impress as make me bleed.
Let fall thy blade on vulnerable crests;
I bear a charmed life, which must not yield
To one of woman born.</p>

<p><strong>MACDUFF</strong>
Despair thy charm,
And let the angel whom thou still hast served
Tell thee, Macduff was from his mother's womb
Untimely ripped.</p>

<p><strong>MACBETH</strong>
Accursed be that tongue that tells me so,
For it hath cowed my better part of man!
And be these juggling fiends no more believed,
That palter with us in a double sense,
That keep the word of promise to our ear,
And break it to our hope. I'll not fight with thee.</p>

<p><strong>MACDUFF</strong>
Then yield thee, coward,
And live to be the show and gaze o' th' time.
We'll have thee, as our rarer monsters are,
Painted upon a pole, and underwrit
"Here may you see the tyrant."</p>

<p><strong>MACBETH</strong>
I will not yield,
To kiss the ground before young Malcolm's feet,
And to be baited with the rabble's curse.
Though Birnam Wood be come to Dunsinane,
And thou opposed, being of no woman born,
Yet I will try the last. Before my body
I throw my warlike shield. Lay on, Macduff,
And damned be him that first cries, "Hold, enough!"</p>

<p class="italic text-muted-foreground">Exeunt, fighting. Alarums. Re-enter fighting, and Macbeth is slain.</p>

<p class="italic text-muted-foreground mt-6">Retreat. Flourish. Enter, with drum and colours, Malcolm, Old Siward, Ross, the other Thanes, and Soldiers.</p>

<p><strong>MALCOLM</strong>
I would the friends we miss were safe arrived.</p>

<p><strong>SIWARD</strong>
Some must go off. And yet, by these I see,
So great a day as this is cheaply bought.</p>

<p><strong>MALCOLM</strong>
Macduff is missing, and your noble son.</p>

<p><strong>ROSS</strong>
Your son, my lord, has paid a soldier's debt.
He only lived but till he was a man,
The which no sooner had his prowess confirmed
In the unshrinking station where he fought,
But like a man he died.</p>

<p><strong>SIWARD</strong>
Then he is dead?</p>

<p><strong>ROSS</strong>
Ay, and brought off the field. Your cause of sorrow
Must not be measured by his worth, for then
It hath no end.</p>

<p><strong>SIWARD</strong>
Had he his hurts before?</p>

<p><strong>ROSS</strong>
Ay, on the front.</p>

<p><strong>SIWARD</strong>
Why then, God's soldier be he!
Had I as many sons as I have hairs,
I would not wish them to a fairer death.
And so, his knell is knolled.</p>

<p><strong>MALCOLM</strong>
He's worth more sorrow, and that I'll spend for him.</p>

<p><strong>SIWARD</strong>
He's worth no more.
They say he parted well and paid his score,
And so, God be with him!</p>

<p class="italic text-muted-foreground mt-4">Enter Macduff, with Macbeth's head.</p>

<p><strong>MACDUFF</strong>
Hail, King! For so thou art. Behold, where stands
Th' usurper's cursed head. The time is free.
I see thee compassed with thy kingdom's pearl,
That speak my salutation in their minds,
Whose voices I desire aloud with mine:
Hail, King of Scotland!</p>

<p><strong>ALL</strong>
Hail, King of Scotland!</p>

<p class="italic text-muted-foreground">Flourish.</p>

<p><strong>MALCOLM</strong>
We shall not spend a large expense of time
Before we reckon with your several loves
And make us even with you. My thanes and kinsmen,
Henceforth be earls, the first that ever Scotland
In such an honour named. What's more to do,
Which would be planted newly with the time,
As calling home our exiled friends abroad
That fled the snares of watchful tyranny,
Producing forth the cruel ministers
Of this dead butcher and his fiend-like queen,
Who, as 'tis thought, by self and violent hands
Took off her life -- this, and what needful else
That calls upon us, by the grace of Grace,
We will perform in measure, time, and place.
So, thanks to all at once and to each one,
Whom we invite to see us crowned at Scone.</p>

<p class="italic text-muted-foreground mt-4">Flourish. Exeunt.</p>`,
      annotations: [
        {
          type: 'language',
          text: 'That palter with us in a double sense, That keep the word of promise to our ear, And break it to our hope',
          note: 'Macbeth\'s final recognition of the witches\' equivocation. "Palter" means to deal deceptively. They kept the literal "word of promise" while violating its spirit. This articulates the play\'s central insight about equivocation: truth itself can be used as a weapon of deception.',
        },
        {
          type: 'quote',
          text: 'Lay on, Macduff, And damned be him that first cries, "Hold, enough!"',
          note: 'KEY ESSAY QUOTE -- Macbeth\'s final words restore a measure of the warrior\'s courage he displayed in Act 1. Despite knowing the prophecies guarantee his defeat, he chooses to fight rather than surrender. This defiant last stand gives him a shred of tragic dignity.',
        },
        {
          type: 'character',
          text: 'Macduff was from his mother\'s womb Untimely ripped',
          note: 'Macduff\'s caesarean birth fulfils the witches\' prophecy -- he was not "born" of woman in the conventional sense. His role as the agent of justice connects to the play\'s theme of rightful order: it takes someone outside the normal order of nature to defeat one who has violated it.',
        },
        {
          type: 'theme',
          text: 'this dead butcher and his fiend-like queen',
          note: 'Theme: Kingship and Power. Malcolm\'s reductive summary reduces Macbeth and Lady Macbeth to villain archetypes. But the audience has seen their full psychological complexity -- this gap between Malcolm\'s simple verdict and the play\'s rich characterisation is itself significant. History simplifies; drama humanises.',
        },
        {
          type: 'context',
          text: 'Henceforth be earls, the first that ever Scotland In such an honour named',
          note: 'Malcolm\'s modernisation of Scottish titles to English-style "earls" reflects the historical union of Scotland and England under James I. This would have pleased the king, suggesting that the restoration of order includes the Anglicisation of Scottish nobility.',
        },
        {
          type: 'language',
          text: 'Turn, hell-hound, turn!',
          note: 'Macduff\'s address reduces Macbeth to a demonic animal -- "hell-hound." The imperative "turn" demands Macbeth face his nemesis. The compound word "hell-hound" combines the supernatural (hell) with the bestial (hound), suggesting Macbeth has become both inhuman and damned.',
        },
        {
          type: 'theme',
          text: 'by the grace of Grace, We will perform in measure, time, and place',
          note: 'Theme: Natural Order restored. Malcolm\'s final speech uses the language of harmony and proportion ("measure, time, and place"). The capitalised "Grace" refers to divine favour. The legitimate king restores the order that Macbeth shattered, completing the play\'s circular structure.',
        },
        {
          type: 'quote',
          text: 'The time is free',
          note: 'KEY ESSAY QUOTE -- Macduff\'s declaration that "the time is free" signals the end of tyranny and the restoration of natural order. Use for: kingship and power, the play\'s resolution, the defeat of unchecked ambition.',
        },
      ],
    },
  ],

  // ─── Characters ─────────────────────────────────────────────────────────────
  characters: [
    {
      name: 'Macbeth',
      description:
        'The play\'s tragic hero. A brave Scottish general whose ambition, ignited by the witches\' prophecy and his wife\'s goading, leads him to murder King Duncan and seize the throne. He descends from honoured warrior to paranoid tyrant, ultimately destroyed by the very forces he sought to control. His soliloquies reveal a man acutely aware of his own moral corruption yet unable to stop himself.',
      keyQuotes: [
        '"I have no spur to prick the sides of my intent, but only vaulting ambition, which o\'erleaps itself and falls on the other."',
        '"Is this a dagger which I see before me, the handle toward my hand?"',
        '"I am in blood stepp\'d in so far that, should I wade no more, returning were as tedious as go o\'er."',
        '"Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day."',
      ],
    },
    {
      name: 'Lady Macbeth',
      description:
        'Macbeth\'s wife and co-conspirator. She is the driving force behind Duncan\'s murder, manipulating her husband by questioning his manhood. She calls on dark spirits to "unsex" her and fill her with cruelty. However, her iron resolve crumbles as guilt takes hold, leading to sleepwalking, madness, and implied suicide. Her arc from fierce ambition to psychological destruction is one of Shakespeare\'s greatest character studies.',
      keyQuotes: [
        '"Yet do I fear thy nature; it is too full o\' th\' milk of human kindness."',
        '"Unsex me here, and fill me from the crown to the toe top-full of direst cruelty."',
        '"Look like th\' innocent flower, but be the serpent under\'t."',
        '"Out, damned spot! Out, I say!"',
        '"All the perfumes of Arabia will not sweeten this little hand."',
      ],
    },
    {
      name: 'Banquo',
      description:
        'Macbeth\'s fellow general and moral foil. He hears the same prophecy but responds with caution rather than ambition. He warns that "the instruments of darkness tell us truths, to betray\'s in deepest consequence." After Duncan\'s murder, he suspects Macbeth but does not act. His murder by Macbeth\'s hired assassins and his ghost\'s appearance at the banquet serve as physical manifestations of Macbeth\'s guilt.',
      keyQuotes: [
        '"The instruments of darkness tell us truths, win us with honest trifles, to betray\'s in deepest consequence."',
        '"Thou hast it now: King, Cawdor, Glamis, all, as the weird women promised, and I fear thou play\'dst most foully for\'t."',
      ],
    },
    {
      name: 'Macduff',
      description:
        'The Thane of Fife and the play\'s agent of justice. He is the first to discover Duncan\'s body and refuses to attend Macbeth\'s coronation. After his family is slaughtered on Macbeth\'s orders, he joins Malcolm in England and leads the army that defeats Macbeth. His caesarean birth fulfils the witches\' prophecy, and his grief for his family offers an alternative model of masculinity.',
      keyQuotes: [
        '"O horror, horror, horror! Tongue nor heart cannot conceive nor name thee!"',
        '"I shall do so; but I must also feel it as a man."',
        '"Turn, hell-hound, turn!"',
        '"Macduff was from his mother\'s womb untimely ripp\'d."',
      ],
    },
    {
      name: 'King Duncan',
      description:
        'The gracious and trusting King of Scotland whose murder sets the tragedy in motion. He represents the divinely ordained order and is presented as generous and virtuous. His fatal flaw is excessive trust -- he cannot read treachery in faces. His murder disrupts nature itself, with storms, earthquakes, and unnatural darkness following his death.',
      keyQuotes: [
        '"There\'s no art to find the mind\'s construction in the face."',
        '"O worthiest cousin!"',
      ],
    },
    {
      name: 'The Witches (Weird Sisters)',
      description:
        'Three supernatural beings who prophesy Macbeth\'s rise and fall. They open the play with "Fair is foul, and foul is fair," establishing the theme of moral inversion. They speak in trochaic tetrameter, marking them as outside the natural order. Their prophecies are technically true but deliberately misleading, using equivocation to give Macbeth false confidence. Shakespeare never resolves whether they cause Macbeth\'s downfall or merely predict it.',
      keyQuotes: [
        '"Fair is foul, and foul is fair."',
        '"All hail, Macbeth, that shalt be king hereafter!"',
        '"Double, double toil and trouble; fire burn and cauldron bubble."',
        '"By the pricking of my thumbs, something wicked this way comes."',
      ],
    },
    {
      name: 'Malcolm',
      description:
        'Duncan\'s eldest son and rightful heir to the Scottish throne. He initially flees after his father\'s murder but matures into a shrewd and cautious leader. He tests Macduff\'s loyalty by pretending to be riddled with vices, demonstrating political wisdom his father lacked. His restoration as king at the play\'s end represents the triumph of legitimate order over tyranny.',
      keyQuotes: [
        '"This dead butcher and his fiend-like queen."',
        '"What\'s more to do, which would be planted newly with the time."',
      ],
    },
    {
      name: 'Lady Macduff',
      description:
        'Macduff\'s wife, who appears briefly before being murdered with her children on Macbeth\'s orders. Her scene with her son provides the play\'s most emotionally devastating moment and illustrates the innocent victims of Macbeth\'s tyranny. Her murder marks Macbeth\'s complete moral degeneration -- he has moved from killing a king to slaughtering women and children.',
      keyQuotes: [
        '"Whither should I fly? I have done no harm."',
        '"He loves us not; he wants the natural touch."',
      ],
    },
  ],

  // ─── Themes ─────────────────────────────────────────────────────────────────
  themes: [
    {
      name: 'Ambition',
      description:
        'Ambition is the engine of the entire tragedy. Macbeth identifies it as his only motive: "vaulting ambition, which o\'erleaps itself and falls on the other." Shakespeare does not present ambition as inherently evil -- Macbeth\'s military ambition is praised. It is unchecked, morally unmoored ambition that proves destructive. Each murder becomes easier, suggesting ambition, once it overrides conscience, becomes self-perpetuating. Lady Macbeth\'s ambition is channelled through her husband, making her manipulation more calculated and psychologically costly.',
      evidence: [
        '"I have no spur to prick the sides of my intent, but only vaulting ambition" -- Macbeth identifies ambition as his sole, insufficient motive',
        '"Yet do I fear thy nature; it is too full o\' th\' milk of human kindness to catch the nearest way" -- Lady Macbeth sees Macbeth\'s conscience as an obstacle',
        '"Stars, hide your fires; let not light see my black and deep desires" -- Macbeth\'s first conscious embrace of dark ambition',
        'Banquo hears the same prophecy but does not act, proving ambition requires a willing agent',
        '"Tomorrow, and tomorrow, and tomorrow" -- the nihilistic endpoint of ambition that has consumed all meaning',
      ],
    },
    {
      name: 'Guilt and Conscience',
      description:
        'Guilt pervades the play from the moment Macbeth kills Duncan. His hallucination of a floating dagger, his inability to say "Amen," and the voice crying "Sleep no more!" reveal a conscience that resists what ambition demands. Lady Macbeth appears invulnerable at first, dismissing guilt with "A little water clears us of this deed," but her sleepwalking scene reveals guilt erupting from the unconscious. Shakespeare uses guilt as evidence of a moral order that exists regardless of whether characters acknowledge it.',
      evidence: [
        '"Will all great Neptune\'s ocean wash this blood clean from my hand?" -- Macbeth recognises guilt\'s permanence immediately',
        '"A little water clears us of this deed" -- Lady Macbeth\'s false confidence, devastatingly reversed later',
        '"Out, damned spot!" -- unconscious guilt forces Lady Macbeth to relive the murders',
        '"Macbeth does murder sleep" -- by killing sleeping Duncan, Macbeth destroys his own capacity for rest',
        '"All the perfumes of Arabia will not sweeten this little hand" -- guilt has become inescapable',
      ],
    },
    {
      name: 'The Supernatural',
      description:
        'The supernatural suffuses every level of the play. Shakespeare uses it to create atmosphere, drive the plot, and raise questions about fate and free will. The witches\' prophecies, the floating dagger, Banquo\'s ghost, and Lady Macbeth\'s invocation of spirits all blur the boundary between natural and supernatural. Crucially, Shakespeare refuses to resolve the ambiguity: do the witches cause events or merely predict them? This deliberate uncertainty is central to the play\'s power.',
      evidence: [
        '"Fair is foul, and foul is fair" -- the witches establish a world of moral inversion',
        '"Is this a dagger which I see before me?" -- hallucination or supernatural vision?',
        'Banquo\'s ghost at the banquet -- real or psychological projection?',
        '"By the pricking of my thumbs, something wicked this way comes" -- the witches sense Macbeth\'s evil supernaturally',
        '"None of woman born shall harm Macbeth" -- equivocal prophecy that deceives through literal truth',
      ],
    },
    {
      name: 'Kingship and Power',
      description:
        'The play contrasts three models of kingship. Duncan embodies the gracious, divinely appointed monarch but is fatally trusting. Macbeth rules through fear and violence, with no legitimate claim. Malcolm represents a synthesis: virtue combined with political shrewdness. The play endorses the doctrine of the Divine Right of Kings -- nature itself rebels when the legitimate king is murdered, and order is only restored when the rightful heir takes the throne.',
      evidence: [
        'Duncan is praised as a generous king but admits "there\'s no art to find the mind\'s construction in the face"',
        'Macbeth\'s Scotland is a land of "sighs and groans and shrieks" -- tyranny destroys the nation',
        '"Honour, love, obedience, troops of friends, I must not look to have" -- Macbeth acknowledges the emptiness of illegitimate power',
        'Malcolm tests Macduff by pretending to have vices, showing political wisdom Duncan lacked',
        'Natural disturbances follow Duncan\'s murder -- the cosmos rebels against regicide',
      ],
    },
    {
      name: 'Appearance vs Reality',
      description:
        'The gap between appearance and reality is the play\'s foundational theme. "Fair is foul, and foul is fair." Nothing is what it seems: the witches\' prophecies appear promising but deliver destruction; Macbeth appears loyal while plotting regicide; Lady Macbeth instructs deception ("look like the innocent flower, but be the serpent under\'t"). The motif of equivocation had particular resonance after the Gunpowder Plot, when the doctrine of equivocation was exposed at trial.',
      evidence: [
        '"Fair is foul, and foul is fair" -- the witches\' motto announces universal deception',
        '"Look like th\' innocent flower, but be the serpent under\'t" -- Lady Macbeth teaches deception',
        '"There\'s no art to find the mind\'s construction in the face" -- Duncan\'s tragic inability to see through appearances',
        'The witches\' prophecies are literally true but deliberately misleading (equivocation)',
        '"False face must hide what the false heart doth know" -- Macbeth accepts total duplicity',
      ],
    },
    {
      name: 'Gender and Masculinity',
      description:
        'Shakespeare interrogates ideas of masculinity throughout the play. Lady Macbeth equates manhood with violence, taunting: "When you durst do it, then you were a man." She asks to be "unsexed," rejecting femininity. However, Macduff offers an alternative model: "I must also feel it as a man," insisting that genuine masculinity includes emotional depth. Macbeth himself is trapped by toxic masculinity, murdering partly to prove his manhood. Lady Macbeth\'s eventual breakdown suggests that rejecting feminine qualities comes at devastating psychological cost.',
      evidence: [
        '"Unsex me here" -- Lady Macbeth rejects femininity to participate in violence',
        '"When you durst do it, then you were a man" -- masculinity weaponised to drive murder',
        '"I dare do all that may become a man; who dares do more is none" -- Macbeth\'s nuanced but abandoned view',
        '"I must also feel it as a man" -- Macduff\'s alternative definition of true manhood',
        'Lady Macbeth\'s mental collapse shows the cost of suppressing feminine compassion',
      ],
    },
  ],

  // ─── Context Notes ──────────────────────────────────────────────────────────
  contextNotes: `JACOBEAN ENGLAND AND THE WORLD OF MACBETH

King James I and the Scottish Connection
Macbeth was written around 1606, shortly after James VI of Scotland became James I of England in 1603, uniting the two crowns. Shakespeare crafted the play as a deliberate compliment to his new royal patron. James traced his ancestry to the historical Banquo, which explains why Shakespeare transformed Banquo from a co-conspirator in the source material (Holinshed's Chronicles) into a noble, innocent victim. The "show of eight kings" in Act 4 represents the Stuart dynasty, with the eighth king's mirror symbolically reflecting James himself.

The Gunpowder Plot (1605)
The play was written in the immediate aftermath of the Gunpowder Plot, when Catholic conspirators attempted to blow up Parliament and assassinate James I. The themes of treason, regicide, equivocation, and the violation of the sacred bond between subject and sovereign carried intense topical resonance. The Porter's reference to "an equivocator" directly alludes to the trial of the Jesuit Henry Garnet, who defended the doctrine of equivocation during his prosecution. The play's condemnation of regicide served as both political commentary and reassurance to a king who had narrowly escaped assassination.

Witchcraft and Demonology
James I had a well-documented fascination with witchcraft. In 1597 he published Daemonologie, a treatise arguing for the reality of witchcraft. He had personally interrogated accused witches during the North Berwick witch trials in 1590, where suspects confessed to raising storms to sink his ship. Shakespeare's portrayal of the witches as genuinely malevolent supernatural beings reflected and validated the king's beliefs, making the play both topical entertainment and royal flattery.

The Divine Right of Kings
Jacobean audiences widely believed that monarchs were God's appointed representatives on earth. Murdering a king was not merely a political crime but a sin against the divine order. This explains the cosmic disturbances following Duncan's murder: darkness covers the land, horses eat each other, and an owl kills a falcon. Nature rebels against the violation of God's order. The play affirms that legitimate succession and divinely sanctioned kingship will always triumph over usurped power.

The Great Chain of Being
Elizabethan and Jacobean society believed in a divinely ordered hierarchy extending from God through kings, nobles, and commoners down to animals and plants. Macbeth's regicide disrupts this entire chain, causing disorder at every level of existence. The play's resolution, with Malcolm's coronation, restores this cosmic order.

Shakespeare's Sources
Shakespeare drew primarily from Raphael Holinshed's Chronicles of England, Scotland, and Ireland (1587). He compressed events spanning decades into a tightly structured drama, changed historical details to suit his dramatic and political purposes, and invented major elements including the sleepwalking scene, the banquet ghost, and the character of Lady Macbeth as we know her.`,
}

// ─── Page component ─────────────────────────────────────────────────────────

export default function MacbethReadPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <InteractiveTextViewer data={macbethData} storageKey="macbeth" />
    </div>
  )
}
