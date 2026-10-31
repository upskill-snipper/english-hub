import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * In the Classroom: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/classroom-objects.ts). Written with AI
 * on 16 October 2026 and checked against each question and its options, as
 * the founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for the 178 questions
 * added (school words in a sentence and in a dialogue, "Where is it?" with
 * more places and in set phrases and short scenes, and 11 new pictures), and
 * every older one rewritten so that no why, more or tip names the answer to a
 * question that can be dealt in the same round. Written with AI and checked
 * against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked on 24 October 2026 by a second reader, not the writer: 36
 * explanations rewritten. Fifteen follow prompts the check reworded, four
 * explain options it replaced, fifteen no longer print a preposition with the
 * place another question asks about ("at the top", "in the middle", "on the
 * wall"), and two were wrong: the globe's "next to" argued from nothing, and the
 * exit's note said "to the left" is only for movement. The bank's docblock lists
 * the question fixes.
 */
export const EXPLANATIONS: GameExplanations = {
  pencil: {
    why: 'The picture shows a pencil, a thin wooden tool with a sharp grey point that we write and draw with. You can say: Can I have a pencil, please?',
    not: {
      pen: 'A pen writes with ink, and you cannot rub ink out easily. The picture shows a wooden pencil.',
      crayon: 'A crayon is thick and made of coloured wax. A pencil is thin and has a sharp point.',
      marker:
        'A marker is a thick pen with a soft tip that makes bold lines. The picture shows a thin pencil.',
    },
    more: 'The grey core of a pencil is called the lead, but it is really graphite.',
    tip: "Learn 'sharpen' with it: 'I need to sharpen my pencil.'",
  },
  pen: {
    why: 'The picture shows a pen, a tool that writes with ink. You can say: Please write your name in pen.',
    not: {
      pencil:
        'A pencil has a wooden body and makes grey marks. The picture shows a pen that writes with ink.',
      brush: 'A brush has soft hairs for painting.',
      ruler: 'A ruler is a flat stick with numbers for measuring.',
    },
    more: 'Blue and black ink are the usual colours for school work. A ballpoint pen has a tiny ball in its tip.',
    tip: "Say 'in pen' for how something is written: 'Write it in pen, please.'",
  },
  ruler: {
    why: 'The picture shows a ruler, a long flat stick with numbers and lines. We use it to measure and to draw straight lines. You can say: Measure the line with a ruler.',
    not: {
      pencil: 'A pencil is for writing and drawing. It has no numbers on it.',
      rubber: 'A rubber is a small soft block that takes away pencil marks. It does not measure.',
      stapler: 'A stapler joins sheets of paper with metal staples. It does not measure.',
    },
    more: 'A British ruler usually measures in centimetres and millimetres. Some also show inches.',
    tip: "Practise the question 'How long is it?' and answer it: 'It is ten centimetres long.'",
  },
  sponge: {
    why: 'The picture shows a sponge, a soft block full of small holes that holds water. You can say: Wipe the table with a wet sponge.',
    not: {
      rubber:
        'A rubber is a small firm block for pencil marks. A sponge is soft, full of holes and holds water.',
      cloth: 'A cloth is a flat piece of fabric. The picture shows a thick soft block with holes.',
      glue: 'Glue is a sticky liquid. The picture shows a soft block with holes.',
    },
    more: 'A sponge holds a lot of water because it has so many small holes.',
    tip: "Learn the verb 'squeeze': you squeeze a sponge to get the water out.",
  },
  scissors: {
    why: 'The picture shows a pair of scissors, a tool with two blades that cut paper. You can say: Can I use your scissors, please?',
    not: {
      knife: 'A knife has one blade and a handle. Scissors have two blades that cut together.',
      stapler: 'A stapler joins pages with metal staples. It does not cut.',
      clip: 'A clip holds papers together. It does not cut.',
    },
    more: "'Scissors' is always plural: 'These scissors are sharp.' For one tool we say 'a pair of scissors'.",
    tip: 'Hand scissors to someone with the handles first, so that the blades point away.',
  },
  books: {
    why: 'The picture shows a pile of books. A book has pages with words to read. The word is plural because there is more than one. You can say: Put your books away.',
    not: {
      boxes: 'Boxes are square containers. The picture shows things with covers and pages.',
      bricks: 'Bricks are hard blocks used to build walls. The picture shows books.',
      bags: 'Bags are soft and carry things. The picture shows books.',
    },
    more: "In class the teacher often says 'Open your books' and 'Close your books'.",
    tip: "Learn the two commands as a pair: 'Open your books.' 'Close your books.'",
  },
  textbook: {
    why: "The picture shows an open book. Of the four words, only 'textbook' is a book. A textbook is the book we study a subject from. You can say: Turn to page ten in your textbook.",
    not: {
      envelope:
        'An envelope is a paper cover for a letter. The picture shows an open book with pages.',
      folder: 'A folder holds loose sheets. The picture shows a book with pages.',
      calculator: 'A calculator is a machine for sums. The picture shows a book.',
    },
    more: 'A textbook teaches a subject, and each subject has its own textbook.',
    tip: "Put the subject before the word: 'my English textbook'.",
  },
  notebook: {
    why: 'The picture shows a notebook, a small book with empty pages where we write things down. You can say: I write new words in my notebook.',
    not: {
      poster: 'A poster is a big sheet with a picture, for a wall. The picture shows a small book.',
      folder: 'A folder holds loose papers. The picture shows a book with its own pages.',
      envelope: 'An envelope holds a letter. The picture shows a book.',
    },
    more: "'Notebook' is two words joined: note + book.",
    tip: 'Keep a notebook for new English words, with one example sentence for each.',
  },
  'exercise book': {
    why: "The picture shows a book with a coloured cover. Of the four words, only 'exercise book' is a book. At school, an exercise book is the book we do classwork in. You can say: Write the date in your exercise book.",
    not: {
      calculator: 'A calculator is a machine for sums. The picture shows a book.',
      wallet: 'A wallet holds money and cards. The picture shows a book.',
      poster: 'A poster is a big sheet for a wall. The picture shows a book.',
    },
    more: 'Each subject often has its own exercise book, with your name on the front.',
    tip: 'Write your name and the subject on the cover.',
  },
  'school bag': {
    why: 'The picture shows a school bag, a bag with straps that you carry on your back. You can say: My school bag is heavy today.',
    not: {
      suitcase: 'A suitcase is a big case for a journey. You pull it or carry it by a handle.',
      basket: 'A basket is made of woven wood or plastic, with a handle on top.',
      pocket: 'A pocket is a small bag sewn into clothes.',
    },
    more: 'A bag like this is also called a backpack or a rucksack.',
    tip: 'Pack your bag the night before, and say in English what goes in it.',
  },
  crayon: {
    why: 'The picture shows a crayon, a thick stick of coloured wax for colouring pictures. You can say: Can I have the red crayon?',
    not: {
      chalk:
        'Chalk is a soft white stick for writing on a blackboard. The picture shows a coloured wax crayon.',
      pen: 'A pen writes with ink. The picture shows a wax crayon.',
      pin: 'A pin is a small sharp piece of metal. The picture shows a crayon.',
    },
    more: 'Crayons come in boxes of many colours.',
    tip: 'Put the colour first: a red crayon, a blue crayon. In English the colour comes before the noun.',
  },
  paintbrush: {
    why: 'The picture shows a paintbrush, a thin handle with a tuft of soft hairs for putting paint on paper. You can say: Wash your paintbrush in the water.',
    not: {
      pencil: 'A pencil has a sharp point, not soft hairs.',
      feather: 'A feather comes from a bird. The picture shows a brush for paint.',
      broom: 'A broom is a big brush with a long handle for sweeping the floor.',
    },
    more: "'Paintbrush' is two words joined: paint + brush.",
    tip: 'Learn the verb with the tool: you paint with a paintbrush.',
  },
  paints: {
    why: 'The picture shows a palette with blobs of colour. These are paints, the coloured liquids that we put on paper with a brush. You can say: We mixed the paints.',
    not: {
      inks: 'Inks are coloured liquids for pens and printing. The picture shows paints on a palette.',
      dyes: 'Dyes are used to colour cloth or hair. The picture shows paints on a palette.',
      crayons: 'Crayons are sticks of coloured wax. The picture shows wet paints.',
    },
    more: 'The board an artist mixes colours on is called a palette.',
    tip: "Practise colour mixing in English: 'Blue and yellow make green.'",
  },
  'set square': {
    why: 'The picture shows a set square, a flat triangle with a right angle. We use it to draw straight lines and right angles. You can say: Draw the angle with a set square.',
    not: {
      pencil: 'A pencil is for writing. It is not a triangle.',
      compass: 'A compass has two arms and draws circles. The picture shows a triangle.',
      protractor:
        'A protractor is a half circle for measuring angles. The picture shows a triangle.',
    },
    more: 'A right angle is 90 degrees, like the corner of a page.',
    tip: "Say the shape first: 'This is a triangle. It is a set square.'",
  },
  abacus: {
    why: 'The picture shows an abacus, a frame with rows of beads that you move to count. You can say: The abacus helps us to add.',
    not: {
      calculator: 'A calculator has buttons and a screen. The picture shows beads on a frame.',
      clock: 'A clock has a face and hands. The picture shows beads on a frame.',
      till: 'A till is a machine in a shop for money.',
    },
    more: 'People have counted with an abacus for thousands of years.',
    tip: 'Say it in three parts: AB-a-cus.',
  },
  notepad: {
    why: 'The picture shows a notepad, a small pad of paper held together by a spiral along one edge. You can say: Write the number on the notepad.',
    not: {
      letter: 'A letter is a message that you send in an envelope.',
      card: 'A card is folded stiff paper, for a birthday or a thank you.',
      leaflet: 'A leaflet is a printed sheet that tells you about something.',
    },
    more: 'A pad is many sheets of paper joined at one edge.',
    tip: "'Note' also means a short message. Use 'write a note' in your own sentence.",
  },
  worksheet: {
    why: 'The picture shows a page with lines of writing and something to write with. At school, a page of questions to do is a worksheet. You can say: Finish the worksheet, please.',
    not: {
      poster: 'A poster is a big sheet for a wall.',
      ticket: 'A ticket lets you travel or go into a place.',
      receipt: 'A receipt shows what you paid in a shop.',
    },
    more: 'A worksheet often has questions, gaps to fill or things to match.',
    tip: 'Write your name on every worksheet before you start.',
  },
  'paper clip': {
    why: 'The picture shows a paper clip, a small bent piece of wire that holds sheets of paper together. You can say: Put a paper clip on your work.',
    not: {
      'drawing pin': 'A drawing pin has a round flat head and a point. It pins paper to a board.',
      staple: 'A staple is a tiny piece of metal that goes through the paper.',
      peg: 'A peg holds clothes on a line, or a coat on a wall.',
    },
    more: 'A paper clip comes off easily and leaves no hole.',
    tip: 'Remember the two parts: paper + clip. A clip holds things together.',
  },
  'drawing pin': {
    why: 'The picture shows a drawing pin, a short pin with a round head. We push it into a board to hold up paper. You can say: Put the poster up with drawing pins.',
    not: {
      needle: 'A needle is long and thin, for sewing.',
      nail: 'A nail is hit into wood with a hammer.',
      'paper clip': 'A paper clip is bent wire that holds sheets together.',
    },
    more: 'American English calls a drawing pin a thumbtack.',
    tip: "Say 'pin up' for putting a picture on a board: 'Pin it up here.'",
  },
  folder: {
    why: 'The picture shows a folder with tabs, which keeps loose papers in order. You can say: Keep your loose papers in a folder.',
    not: {
      drawer: 'A drawer slides in and out of a desk or a cupboard.',
      box: 'A box is a hard container with a lid.',
      tray: 'A tray is flat, for carrying things.',
    },
    more: 'A folder stops your papers getting lost or creased.',
    tip: 'Use a different colour for each subject.',
  },
  file: {
    why: 'The picture shows a file, a cover that keeps papers in order. You can say: Put the paper in your file.',
    not: {
      bag: 'A bag carries things. The picture shows a cover for papers.',
      shelf: 'A shelf is a board on a wall for books.',
      cupboard: 'A cupboard has doors and keeps things inside.',
    },
    more: 'A document saved electronically is called a file too.',
    tip: 'Learn both uses: a file of papers, and a file that you save.',
  },
  clipboard: {
    why: 'The picture shows a clipboard, a small board with a strong clip to hold paper, so that you can write while you stand. You can say: The coach holds a clipboard.',
    not: {
      whiteboard: 'A whiteboard is a big white board on the wall for writing on with pens.',
      noticeboard: 'A noticeboard is a board on the wall for pinning up notices.',
      tray: 'A tray is flat, for carrying things.',
    },
    more: "The name is 'clip' plus 'board'.",
    tip: "Learn the '-board' words together, and say what each one is for.",
  },
  'paper clips': {
    why: "The picture shows two paper clips joined together. We say 'paper clips' because there is more than one. You can say: I need some paper clips.",
    not: {
      stapler: 'A stapler joins pages with metal staples.',
      'hole punch': 'A hole punch makes holes in paper.',
      tape: 'Tape is a sticky strip that holds things together.',
    },
    more: "We add 's' to make the plural: one clip, two clips.",
    tip: "Say 'a box of paper clips'.",
  },
  calendar: {
    why: 'The picture shows a calendar, a page with the days of the month. We use it to see the date. You can say: Look at the calendar. Today is the tenth.',
    not: {
      clock: 'A clock shows the time, not the days of the month.',
      envelope: 'An envelope holds a letter.',
      ticket: 'A ticket lets you travel or go into a place.',
    },
    more: 'A calendar shows days, weeks and months.',
    tip: "Practise dates with it: 'My birthday is on the third of June.'",
  },
  bottle: {
    why: 'The picture shows a bottle with a pump on top: you press it, and the liquid comes out. You can say: My water bottle is in my bag.',
    not: {
      pencil: 'A pencil is for writing.',
      ruler: 'A ruler is for measuring.',
      chair: 'A chair is a seat.',
    },
    more: "We say 'a bottle of water' to say what is in it.",
    tip: "Use 'a bottle of' to say what it holds: a bottle of water, a bottle of soap.",
  },
  bucket: {
    why: 'The picture shows a bucket, a round container with a handle for carrying water. You can say: Fill the bucket with water.',
    not: {
      bin: 'A bin is for rubbish.',
      bowl: 'A bowl is for food and has no handle.',
      jug: 'A jug has a spout for pouring drinks.',
    },
    more: 'A cleaner may use a bucket and a mop to wash the floor.',
    tip: "Say 'a bucket of water'. Use 'of' to say what it holds.",
  },
  bin: {
    why: 'The picture shows a bin, a container for rubbish. You can say: Put the wrapper in the bin.',
    not: {
      bucket: 'A bucket is for carrying water.',
      box: 'A box is for keeping things.',
      bag: 'A bag is for carrying things.',
    },
    more: "British people say 'bin'. Americans say 'trash can'.",
    tip: "Learn 'throw away': 'Throw it away in the bin.'",
  },
  chair: {
    why: 'The picture shows a chair, a seat for one person with a back and four legs. You can say: Sit on your chair, please.',
    not: {
      stool: 'A stool has no back.',
      bench: 'A bench is long, for several people.',
      sofa: 'A sofa is soft and long, for two or three people at home.',
    },
    more: 'In a classroom, everyone has a chair.',
    tip: "Learn the commands 'Sit down' and 'Stand up'. They are opposites.",
  },
  lift: {
    why: 'The picture shows a lift, a small room that carries people up and down a building. You can say: Take the lift to the third floor.',
    not: {
      stairs: 'Stairs are steps that you climb on foot. The picture shows a lift.',
      window: 'A window lets light in. The picture shows a lift.',
      ramp: 'A ramp is a slope for wheelchairs and pushchairs.',
    },
    more: 'Americans call it an elevator.',
    tip: "Say 'go up in the lift' and 'go down in the lift'.",
  },
  door: {
    why: 'The picture shows a door. We open a door to go into or out of a room. You can say: Please shut the door.',
    not: {
      window: 'A window is glass in a wall that lets light in.',
      wall: 'A wall is the side of a room.',
      gate: 'A gate is a door in a fence or a wall outdoors.',
    },
    more: 'We knock before we go in.',
    tip: "Learn the polite pair: 'Knock, please' and 'Come in'.",
  },
  window: {
    why: "The picture shows a window, a glass opening in a wall that lets in sunshine and air. You can say: Open the window. It's hot in here.",
    not: {
      door: 'A door is for walking through.',
      mirror: 'A mirror shows your face.',
      screen: 'A screen shows pictures from a computer or a TV.',
    },
    more: 'A window has a frame and panes of glass.',
    tip: "Learn 'look out of the window', with 'out of'.",
  },
  clock: {
    why: 'The picture shows a clock, with a round face, numbers and hands. It tells the time. You can say: What time does the clock say?',
    not: {
      watch: 'A watch is a small clock that you wear on your wrist.',
      timer: 'A timer counts down minutes.',
      bell: 'A bell rings.',
    },
    more: 'The hands of a clock point to the hours and the minutes.',
    tip: "Say the time with 'It is': 'It is ten past nine.'",
  },
  bell: {
    why: "The picture shows a bell, a metal cup shape that rings when it is shaken or hit. You can say: The bell rings at nine o'clock.",
    not: {
      clock: 'A clock tells the time.',
      horn: 'A horn makes a loud sound when you press it, as in a car.',
      whistle: 'You blow a whistle to make a sharp sound.',
    },
    more: "The past of 'ring' is 'rang': 'The bell rang.'",
    tip: "Learn 'ring' with it: the bell rings, the bell rang.",
  },
  light: {
    why: 'The picture shows a light bulb, the glass part that glows and makes a room bright. You can say: Please turn on the light.',
    not: {
      plug: 'A plug connects a machine to electricity.',
      torch: 'A torch is a small light that you carry.',
      candle: 'A candle burns with a flame.',
    },
    more: "We say 'turn on' and 'turn off', or 'switch on' and 'switch off'.",
    tip: "Learn 'turn on' and 'turn off' with machines and lights.",
  },
  computer: {
    why: 'The picture shows a computer, with a screen on a stand. You can say: Save your work on the computer.',
    not: {
      camera: 'A camera takes photos.',
      radio: 'A radio plays music and talk, with no screen.',
      phone: 'A phone is small, and you hold it in your hand.',
    },
    more: 'This kind is a desktop computer: it stays in one place.',
    tip: 'Learn the verbs: switch on, log in, save.',
  },
  keyboard: {
    why: 'The picture shows a keyboard, the set of keys that we press to type words and numbers. You can say: Type your name on the keyboard.',
    not: {
      screen: 'A screen shows pictures and words.',
      mouse: 'A mouse is small, and you move it with your hand.',
      printer: 'A printer puts words onto paper.',
    },
    more: 'Each button on a keyboard is a key.',
    tip: "Use 'type' with it: 'Type the word here.'",
  },
  mouse: {
    why: 'The picture shows a mouse, a small device that you move with your hand to point and click on a screen. You can say: Click with the mouse.',
    not: {
      keyboard: 'A keyboard has many keys for typing.',
      remote: 'A remote changes the channel on a TV.',
      plug: 'A plug connects a machine to electricity.',
    },
    more: 'It is named after the small animal, because of its shape and its long wire.',
    tip: "Use 'click' with it: 'Click on the picture.'",
  },
  printer: {
    why: 'The picture shows a printer, a machine that puts words and pictures onto paper. You can say: Send your work to the printer.',
    not: {
      scanner:
        'A scanner turns a page into a picture on a computer. The picture shows paper coming out of a printer.',
      computer: 'A computer has a screen. The picture shows a printer.',
      speaker: 'A speaker makes sound.',
    },
    more: "The verb is 'print': 'I printed my work.'",
    tip: 'When a printer has no paper, we say it has run out of paper.',
  },
  projector: {
    why: 'The picture shows a projector, a machine that shines a picture onto a wall or a screen. You can say: The teacher switched on the projector.',
    not: {
      speaker: 'A speaker makes sound, not pictures.',
      screen: 'A screen is where the picture appears. The picture shows the machine that makes it.',
      torch: 'A torch is a small light that you carry.',
    },
    more: 'The picture shows an old film projector. Today most classroom projectors are small boxes on the ceiling.',
    tip: 'Learn what it does: it shows a picture on a screen for the whole class.',
  },
  map: {
    why: 'The picture shows a map, a drawing of a place that shows where things are. You can say: Find London on the map.',
    not: {
      poster: 'A poster is a big picture for a wall.',
      painting: 'A painting is a picture made with paint.',
      chart: 'A chart shows numbers or facts, for example as bars.',
    },
    more: 'A world map shows every country.',
    tip: "Say 'on the map': 'Can you find Spain on the map?'",
  },
  globe: {
    why: 'The picture shows the Earth as a ball. A globe is a round model of the Earth with the land and the seas on it. You can say: Spin the globe.',
    not: {
      ball: 'A ball is for games. The picture shows the Earth.',
      map: 'A map is flat. The picture is round.',
      lamp: 'A lamp gives light.',
    },
    more: "'Globe' can also mean the whole world: 'all over the globe'.",
    tip: "Say 'on the globe' to point to a place.",
  },
  microscope: {
    why: 'The picture shows a microscope, a tool that makes very small things look big. You can say: We looked at a hair through the microscope.',
    not: {
      telescope:
        'A telescope makes faraway things look close. A microscope makes tiny things look big.',
      camera: 'A camera takes photos.',
      magnet: 'A magnet pulls iron.',
    },
    more: "'Micro' means very small, and 'scope' means looking.",
    tip: 'Break it into parts: micro + scope.',
  },
  magnet: {
    why: 'The picture shows a magnet, a piece of metal that pulls iron towards it. You can say: The magnet picks up the pins.',
    not: {
      battery: 'A battery stores electricity.',
      bell: 'A bell rings.',
      clip: 'A clip holds papers together.',
    },
    more: 'A magnet pulls iron and steel, but not wood, paper or plastic.',
    tip: "Use 'attract' for what it does: 'A magnet attracts iron.'",
  },
  telescope: {
    why: 'The picture shows a telescope, a long tube that makes faraway things, such as stars, look bigger and closer. You can say: We looked at the moon through the telescope.',
    not: {
      microscope: 'A microscope makes tiny things look big.',
      binoculars: 'Binoculars have two tubes, one for each eye.',
      lamp: 'A lamp gives light.',
    },
    more: "'Tele' means far away.",
    tip: "Say 'look through the telescope'.",
  },
  'test tube': {
    why: 'The picture shows a test tube, a thin glass tube with a round bottom for holding liquids in experiments. You can say: Pour a little water into the test tube.',
    not: {
      bottle: 'A bottle has a neck and a lid.',
      jar: 'A jar is wide and has a lid.',
      cup: 'A cup is for drinks.',
    },
    more: 'Test tubes stand in a rack so that they do not fall over.',
    tip: "Learn 'pour': you pour a liquid from one thing into another.",
  },
  chart: {
    why: 'The picture shows a chart with bars. Each bar shows a number, and a taller bar means a bigger number. You can say: The chart shows our favourite fruits.',
    not: {
      map: 'A map shows places.',
      list: 'A list is words one after another.',
      photo: 'A photo is a picture taken with a camera.',
    },
    more: 'This kind is a bar chart.',
    tip: "Describe a chart with comparing words: 'The red bar is higher than the blue bar.'",
  },
  'graduation cap': {
    why: 'The picture shows a graduation cap, a flat square hat that students wear when they finish their studies. You can say: She threw her graduation cap in the air.',
    not: {
      scarf: 'A scarf goes round your neck.',
      helmet: 'A helmet protects your head in sport or on a bike.',
      crown: 'A crown is for a king or a queen.',
    },
    more: 'To graduate means to finish a course of study.',
    tip: 'Learn the verb and the noun: graduate, graduation.',
  },
  sign: {
    why: 'The picture shows a sign, a flat board on a stick with words or a picture for people to read. You can say: Read the sign.',
    not: {
      shelf: 'A shelf is a board on a wall for things.',
      clipboard: 'A clipboard holds paper with a clip.',
      mirror: 'A mirror shows your face.',
    },
    more: "The 'g' in 'sign' is silent.",
    tip: "Learn the signs you see every day, such as 'Exit' and 'Quiet'.",
  },
  telephone: {
    why: 'The picture shows the handset of a telephone, the part you hold to your ear to talk. You can say: The telephone is ringing.',
    not: {
      radio: 'A radio plays music and talk.',
      speaker: 'A speaker makes sound.',
      remote: 'A remote changes the TV channel.',
    },
    more: "People often just say 'phone'.",
    tip: "Learn 'answer the phone' and 'make a call'.",
  },
  broom: {
    why: 'The picture shows a broom, a long handle with a brush of stiff hairs for sweeping the floor. You can say: Sweep the floor with the broom.',
    not: {
      mop: 'A mop is wet and washes the floor.',
      bucket: 'A bucket carries water.',
      rake: 'A rake has metal teeth for collecting leaves in a garden.',
    },
    more: "The verb is 'sweep': sweep, swept.",
    tip: 'Learn cleaning tools in pairs: a broom and a dustpan.',
  },
  mirror: {
    why: 'The picture shows a mirror, a flat piece of glass that shows your face. You can say: Look in the mirror.',
    not: {
      window: 'A window lets you see outside.',
      screen: 'A screen shows pictures.',
      clock: 'A clock shows the time.',
    },
    more: "We say 'in the mirror': 'I looked at myself in the mirror.'",
    tip: "Learn 'reflection': what you see in a mirror.",
  },
  laptop: {
    why: 'The picture shows a laptop, a folding machine with a screen and keys that you can carry. You can say: I did my work on the laptop.',
    not: {
      tablet: 'A tablet is flat, with a screen you touch and no keys.',
      printer: 'A printer puts words onto paper.',
      projector: 'A projector shines a picture onto a wall.',
    },
    more: 'It is called a laptop because you can use it on your lap.',
    tip: "Learn 'open the lid' and 'shut the lid' for a laptop.",
  },
  battery: {
    why: 'The picture shows a battery, which stores electricity to make a machine work. You can say: The remote needs a new battery.',
    not: {
      charger: 'A charger fills a battery with power from the wall.',
      plug: 'A plug connects a machine to the wall.',
      magnet: 'A magnet pulls iron.',
    },
    more: 'When a battery is empty, we say it is flat or dead.',
    tip: "Spelling: 'battery' has two t's.",
  },
  plug: {
    why: 'The picture shows a plug, the part of a cable that you push into a socket to get electricity. You can say: Pull out the plug.',
    not: {
      socket: 'A socket is the holes in the wall where the plug goes.',
      battery: 'A battery stores electricity.',
      switch: 'A switch turns things on and off.',
    },
    more: 'British plugs have three pins.',
    tip: "Learn 'plug it in' and 'unplug it'.",
  },
  headphones: {
    why: 'The picture shows headphones, which you wear over your ears to listen to sound. You can say: Put on your headphones.',
    not: {
      speakers: 'Speakers play sound out loud for everyone.',
      microphone: 'A microphone picks up your voice.',
      radio: 'A radio plays music.',
    },
    more: 'Small ones that go in your ears are called earphones.',
    tip: "Say 'a pair of headphones', because they have two sides.",
  },
  'magnifying glass': {
    why: 'The picture shows a magnifying glass, a round lens on a handle that makes small things look bigger. You can say: Look at the ant with the magnifying glass.',
    not: {
      microscope: 'A microscope is a bigger machine for very tiny things.',
      telescope: 'A telescope is a long tube for faraway things.',
      binoculars:
        'Binoculars have two tubes, one for each eye, for seeing far away. The picture shows one round lens on a handle.',
    },
    more: "'Magnify' means make something look bigger.",
    tip: "Learn the verb 'magnify' with the noun.",
  },
  thermometer: {
    why: 'The picture shows a thermometer, which measures how hot or cold something is. You can say: The thermometer says twenty degrees.',
    not: {
      ruler: 'A ruler measures length.',
      clock: 'A clock shows the time.',
      pencil: 'A pencil is for writing.',
    },
    more: 'In the UK we measure how hot things are in degrees Celsius.',
    tip: "'Thermo' means heat, and 'meter' means measure.",
  },
  stopwatch: {
    why: 'The picture shows a stopwatch, which measures time exactly. You can say: Time the race with the stopwatch.',
    not: {
      compass: 'A compass draws circles, or shows which way is north.',
      calculator: 'A calculator does sums.',
      magnet: 'A magnet pulls iron.',
    },
    more: 'Press the button once to begin and again to end.',
    tip: "Learn the verb 'time': 'I timed the race.'",
  },
  'mobile phone': {
    why: 'The picture shows a mobile phone, a small phone that you carry with you. You can say: Switch off your mobile phone.',
    not: {
      calculator: 'A calculator does sums.',
      'remote control': 'A remote control changes the TV channel.',
      camera: 'A camera takes photos.',
    },
    more: "In Britain people also just say 'mobile'. Americans say 'cell phone'.",
    tip: "Learn the polite request: 'Could I use your phone, please?'",
  },
  camera: {
    why: 'The picture shows a camera, which takes photos. You can say: Smile for the camera.',
    not: {
      projector: 'A projector shows pictures on a screen.',
      printer: 'A printer prints on paper.',
      telescope: 'A telescope makes faraway things look closer.',
    },
    more: "We say 'take a photo', not 'make a photo'.",
    tip: "Learn the phrase 'take a photo of': 'Take a photo of us.'",
  },
  microphone: {
    why: 'The picture shows a microphone, which picks up your voice so that it can be louder or recorded. You can say: Speak into the microphone.',
    not: {
      speaker: 'A speaker plays sound out loud.',
      headphones: 'Headphones play sound into your ears.',
      torch: 'A torch gives light.',
    },
    more: "People often call it a mic, said 'mike'.",
    tip: 'Speak clearly and slowly into it.',
  },
  'safety pin': {
    why: 'The picture shows a safety pin, a pin with a cover that keeps its point safe. You can say: Fix the badge with a safety pin.',
    not: {
      'drawing pin': 'A drawing pin has a round head and goes into a board.',
      'paper clip': 'A paper clip is bent wire for holding paper.',
      needle: 'A needle is for sewing.',
    },
    more: 'We use safety pins to hold cloth together.',
    tip: "Learn 'pin' as a verb too: to fix something with a pin.",
  },
  'A ___ takes away pencil marks.': {
    why: 'A rubber is a small soft block. You rub it on a pencil mark, and the mark goes.',
    not: {
      ruler: 'A ruler measures and draws straight lines. It does not take marks away.',
      stapler: 'A stapler joins pages with staples.',
      sharpener: 'A sharpener gives a pencil a new point.',
    },
    more: "American English says 'eraser'. In Britain, 'rubber' is the usual word in school.",
    tip: "The verb is 'rub out': 'Rub out the mistake.'",
  },
  'If the point of your pencil breaks, use a ___.': {
    why: 'A sharpener has a small blade. You turn the pencil in it to make a new sharp point.',
    not: {
      rubber: 'A rubber takes away pencil marks. It cannot make a new point.',
      ruler: 'A ruler measures lines.',
      stapler: 'A stapler joins pages.',
    },
    more: "We also say 'pencil sharpener'.",
    tip: "The verb is 'sharpen': 'Sharpen your pencil, please.'",
  },
  'Press the ___ down hard, and a tiny piece of metal joins the pages together.': {
    why: 'A stapler pushes a staple, a tiny piece of metal, through the pages and bends it to hold them together.',
    not: {
      'hole punch': 'A hole punch makes holes. It does not join pages.',
      'glue stick': 'A glue stick joins paper with glue, not with metal.',
      'paper clip': 'A paper clip slides on. You do not press it down hard.',
    },
    more: "The 'staple' is the metal piece, and the 'stapler' is the tool.",
    tip: "Learn the verb too: 'Staple the pages together.'",
  },
  'A ___ cuts two neat circles out of the side of a page, so that it fits in a ring binder.': {
    why: 'A hole punch makes two neat round holes near the edge of a page, so that the page can go on the rings of a binder.',
    not: {
      stapler: 'A stapler joins pages with metal staples. It does not make holes.',
      scissors: 'Scissors cut, but they do not cut two neat holes the same size.',
      sharpener: 'A sharpener is for pencils.',
    },
    more: 'A ring binder holds pages on metal rings.',
    tip: "Learn 'punch a hole' as a phrase.",
  },
  'Use a ___ to draw a perfect circle.': {
    why: 'A compass has two arms: one point stays still, and the other draws round it, making a perfect circle.',
    not: {
      ruler: 'A ruler draws straight lines, not circles.',
      'set square': 'A set square is a triangle for right angles.',
      protractor: 'A protractor measures angles.',
    },
    more: "In Britain, people also say 'a pair of compasses'.",
    tip: "Learn the verb 'draw' with shapes: draw a circle, draw a line.",
  },
  'Use a ___ to measure the size of an angle.': {
    why: 'A protractor is a half circle marked from 0 to 180 degrees. You put it on an angle to measure it.',
    not: {
      ruler: 'A ruler measures length, not angles.',
      compass: 'A compass draws circles.',
      calculator: 'A calculator does sums. It cannot measure an angle on paper.',
    },
    more: 'Angles are measured in degrees. A right angle is 90 degrees.',
    tip: 'Put the middle of the protractor exactly on the point of the angle.',
  },
  'Colour the most important words with a ___ so that they stand out.': {
    why: 'A highlighter has bright see-through ink. It makes words stand out, and you can still read them.',
    not: {
      rubber: 'A rubber takes marks away. It does not colour words.',
      sharpener: 'A sharpener is for pencils.',
      stapler: 'A stapler joins pages.',
    },
    more: 'Highlighters are often yellow, pink or green.',
    tip: "Use 'highlight' as a verb: 'Highlight the key words.'",
  },
  'Put a little ___ on the back of the photo, then press it onto the page.': {
    why: 'Glue is sticky. It holds the photo on the page when you press it down.',
    not: {
      paint: 'Paint adds colour. It is not made to stick things.',
      ink: 'Ink is for pens and printing.',
      chalk: 'Chalk is for writing on a blackboard.',
    },
    more: 'A glue stick is glue in a tube that you twist up.',
    tip: "Learn 'stick' as a verb: 'Stick the photo in your book.'",
  },
  'Write on the whiteboard with a ___.': {
    why: 'A whiteboard marker is a thick writing tool with special ink that you can wipe off the board.',
    not: {
      crayon: 'Crayon wax does not wipe off a whiteboard easily.',
      chalk: 'Chalk is for a blackboard, not a whiteboard.',
      pencil: 'A pencil hardly shows on a whiteboard.',
    },
    more: 'Always put the lid back on a marker, or it dries out.',
    tip: "Learn 'wipe off' and 'rub off' for cleaning a board.",
  },
  'The small zip bag where you keep your rubber and your sharpener is your ___.': {
    why: 'A pencil case is a small bag or box with a zip for your pens, pencils, rubber and sharpener.',
    not: {
      'lunch box': 'A lunch box is for food.',
      wallet: 'A wallet is for money and cards.',
      envelope: 'An envelope is for a letter.',
    },
    more: 'Some pencil cases are tins or boxes, not bags.',
    tip: 'Check your pencil case each morning before you go.',
  },
  'Put your sandwiches in your ___.': {
    why: 'A lunch box is a box for the food you bring from home.',
    not: {
      'pencil case': 'A pencil case is for pens and pencils.',
      wallet: 'A wallet is for money and cards.',
      envelope: 'An envelope is for a letter.',
    },
    more: 'A lunch box keeps your sandwiches clean and fresh.',
    tip: 'Name in English everything that is in your lunch box.',
  },
  'To find a map of Africa, look in the ___.': {
    why: 'An atlas is a book of maps. It has maps of the world, of each continent and of many countries.',
    not: {
      dictionary: 'A dictionary tells you what words mean.',
      diary: 'A diary is for writing about your days or your plans.',
      register: 'A register is a list of names, for checking who is here.',
    },
    more: 'Africa is a continent, and an atlas shows all seven.',
    tip: 'Find places in an atlas with the index at the back.',
  },
  'A ___ tells you what words mean.': {
    why: 'A dictionary lists words in order and tells you what each one means.',
    not: {
      atlas: 'An atlas is a book of maps.',
      calendar: 'A calendar shows the days and months.',
      timetable: 'A timetable shows when things happen.',
    },
    more: 'A dictionary also shows how to spell a word and how to say it.',
    tip: "Learn 'look up': 'Look up the word in a dictionary.'",
  },
  'Ms Khan writes on the ___ at the front of the class.': {
    why: 'A whiteboard is the big white board at the front of a classroom. Teachers write on it with special pens.',
    not: {
      noticeboard: 'A noticeboard is for pinning up notices, not for writing on.',
      clipboard: 'A clipboard is small, and you hold it.',
      keyboard: 'A keyboard is for typing.',
    },
    more: 'Some classrooms have an interactive whiteboard that works like a giant screen.',
    tip: "Learn the instruction 'Look at the board, please.'",
  },
  'Pin your poster on the ___ in the corridor.': {
    why: 'A noticeboard is a soft board on a wall. You pin notices and posters to it.',
    not: {
      whiteboard: 'A whiteboard is for writing on, not for pins.',
      clipboard: 'A clipboard is held in your hand.',
      keyboard: 'A keyboard is for typing.',
    },
    more: "A 'notice' is a piece of written news for everyone to read.",
    tip: 'Read the noticeboard often for news.',
  },
  'The ___ works in the school office and answers the phone.': {
    why: 'A receptionist works in the office, welcomes visitors and answers the phone.',
    not: {
      caretaker: 'A caretaker looks after the building.',
      cook: 'A cook makes food.',
      cleaner: 'A cleaner cleans the rooms.',
    },
    more: 'In some places this person is called the office manager or the secretary.',
    tip: 'Visitors go to the office first, and the receptionist welcomes them.',
  },
  'A child who goes to school is a ___.': {
    why: 'A pupil is a child who learns at a school. You are a pupil.',
    not: {
      teacher: 'A teacher teaches pupils.',
      parent: 'A parent is a mother or a father.',
      caretaker: 'A caretaker looks after the building.',
    },
    more: "'Student' is used too, especially for older learners.",
    tip: 'Learn the pair: a teacher teaches, and a pupil learns.',
  },
  'The ___ is in charge of the whole school.': {
    why: 'The head teacher runs the whole school and is in charge of all the teachers.',
    not: {
      teacher: 'A teacher is in charge of a class, not the whole school.',
      caretaker: 'A caretaker looks after the building.',
      cook: 'A cook makes the food.',
    },
    more: "People also say 'the head', 'headmaster' or 'headmistress'.",
    tip: "Write 'head teacher' as two words.",
  },
  'The ___ makes our lunch in the school kitchen.': {
    why: 'A cook makes the food in a kitchen. At school, the cook makes the hot dinners.',
    not: {
      caretaker: 'A caretaker looks after the building.',
      librarian: 'A librarian works in the library.',
      nurse: 'A nurse looks after people who are ill or hurt.',
    },
    more: "'Cook' is a verb too: 'She cooks the pasta.'",
    tip: 'Say thank you to the cook at dinnertime.',
  },
  'The ___ looks after the school building and mends broken things.': {
    why: 'A caretaker looks after a building: opening it, locking it and mending things.',
    not: {
      'head teacher': 'A head teacher runs the school, but does not mend things.',
      cook: 'A cook makes food.',
      librarian: 'A librarian looks after the books.',
    },
    more: 'Some schools call this person the site manager.',
    tip: 'Tell the caretaker if something is broken.',
  },
  'At lunchtime we queue for hot food in the ___.': {
    why: 'A canteen is a room where people get meals and eat them. You can say: The canteen serves pasta on Fridays.',
    not: {
      library: 'A library is for reading and borrowing books.',
      gym: 'A gym is for sport.',
      office: 'An office is where people work at desks.',
    },
    more: 'Some schools call it the dining hall.',
    tip: "Learn 'queue': we queue for food.",
  },
  'At break we run about and kick a ball in the ___.': {
    why: "The playground is the open space where pupils play at break. You can say: Let's meet in the playground.",
    not: {
      library: 'A library is a quiet room for books.',
      canteen: 'A canteen is for eating.',
      office: 'An office is for work.',
    },
    more: 'Break is the short rest between lessons.',
    tip: "Learn 'at break' and 'at lunchtime'.",
  },
  'When it rains, we do PE indoors, in the ___.': {
    why: 'A gym is a big room for sport, with space to run and jump indoors.',
    not: {
      library: 'A library is for reading.',
      canteen: 'A canteen is for eating.',
      office: 'An office is for work.',
    },
    more: "'Gym' is short for gymnasium.",
    tip: 'Bring your trainers for the gym.',
  },
  'Read quietly in the school ___ at lunchtime.': {
    why: 'A library is a quiet room where you can sit and read.',
    not: {
      playground: 'A playground is for running and playing.',
      canteen: 'A canteen is for eating.',
      gym: 'A gym is for sport.',
    },
    more: 'The person who works there is the librarian.',
    tip: 'The first rule of a library: speak softly.',
  },
  'Look at your ___ to see which lesson is next.': {
    why: 'A timetable shows which lessons you have, on which days and at what times.',
    not: {
      register: 'A register is a list of pupils for checking who is here.',
      report: 'A report tells your parents about your work.',
      menu: 'A menu lists food.',
    },
    more: 'Buses and trains have timetables too.',
    tip: "Ask a friend: 'What have we got next?'",
  },
  'We are going on a school ___ to the museum.': {
    why: 'A school trip is a visit with your class to a place away from school, such as a museum. You can say: We went on a trip to the zoo.',
    not: {
      holiday: 'A holiday is time off school.',
      lesson: 'A lesson happens in class.',
      test: 'A test checks what you know.',
    },
    more: "We say 'go on a trip', with 'on'.",
    tip: 'Take the letter home so that your parents can say yes.',
  },
  'Once a year, your parents get a ___ about your work.': {
    why: 'A school report tells parents how well a child is doing in each subject.',
    not: {
      register: 'A register is a list of names.',
      timetable: 'A timetable shows lessons and times.',
      receipt: 'A receipt shows what you paid.',
    },
    more: "'Report' is also a verb: 'Report it to a teacher.'",
    tip: "Learn 'a good report' and 'a bad report'.",
  },
  'We have a spelling ___ on Friday. Learn your words.': {
    why: 'A spelling test checks how well you can spell a list of words.',
    not: {
      trip: 'A trip is a visit to a place.',
      lesson: 'A lesson teaches you something new.',
      break: 'A break is a rest.',
    },
    more: "We say 'do a test' or 'take a test'.",
    tip: 'Learn your spelling words a few at a time, every day.',
  },
  'Your teacher sets ___ for you to do after school.': {
    why: 'Homework is work your teacher gives you to do at home.',
    not: {
      break: 'A break is a rest at school.',
      assembly: 'An assembly is a meeting of the whole school.',
      register: 'A register is a list of names.',
    },
    more: "'Homework' has no plural: say 'some homework', not 'homeworks'.",
    tip: "Learn 'set homework' and 'do homework'.",
  },
  'The whole school meets in the hall for ___ on Monday morning.': {
    why: 'An assembly is a meeting of the whole school, or of many classes, in the hall.',
    not: {
      homework: 'Homework is done at home.',
      break: 'A break is a short rest.',
      register: 'A register is a list of names.',
    },
    more: 'In assembly, someone talks to everyone, and there may be songs.',
    tip: "We say 'in assembly', with no 'the'.",
  },
  'In the science ___, we do experiments with test tubes.': {
    why: 'A lab, short for laboratory, is a room for science experiments.',
    not: {
      library: 'A library is for books.',
      gym: 'A gym is for sport.',
      hall: 'A hall is a big room for meetings and assemblies.',
    },
    more: 'In a lab you must follow the safety rules.',
    tip: "Say 'laboratory' as la-BOR-a-tree in British English.",
  },
  'In ___, we learn about numbers and shapes.': {
    why: 'Maths is the subject of numbers, shapes and sums.',
    not: {
      science: 'Science is about how the world works.',
      history: 'History is about the past.',
      music: 'Music is about songs and instruments.',
    },
    more: "British English says 'maths'. American English says 'math'.",
    tip: "In Britain, say it with an 's': maths, not math.",
  },
  'In ___, we learn about the past, like the Romans.': {
    why: 'History is the study of the past, such as the Romans and the Vikings.',
    not: {
      geography: 'Geography is about places and countries.',
      maths: 'Maths is about numbers.',
      art: 'Art is about painting and drawing.',
    },
    more: 'A person who studies the past is a historian.',
    tip: "Learn the adjective 'historical'.",
  },
  'In ___, we learn about countries, rivers and mountains.': {
    why: 'Geography is the study of places: countries, rivers, mountains and weather.',
    not: {
      history: 'History is about the past.',
      science: 'Science is about how things work.',
      music: 'Music is about songs.',
    },
    more: 'A geographer studies places.',
    tip: "Spelling: geo-graphy. 'Geo' means the Earth.",
  },
  'In ___, we do experiments and learn how things work.': {
    why: 'Science is the subject where we try out ideas with experiments.',
    not: {
      history: 'History is about the past.',
      art: 'Art is about making pictures.',
      PE: 'PE is sport and exercise.',
    },
    more: 'Biology, chemistry and physics are all parts of it.',
    tip: 'Learn the person: a scientist.',
  },
  'In ___, we paint and draw.': {
    why: 'Art is the subject where we paint, draw and make things.',
    not: {
      music: 'Music is about sound.',
      maths: 'Maths is about numbers.',
      history: 'History is about the past.',
    },
    more: 'A person who makes art is an artist.',
    tip: "Learn 'artist' and 'artwork' with it.",
  },
  'In ___, we sing songs and play instruments.': {
    why: 'Music is the subject of songs, instruments and sound.',
    not: {
      art: 'Art is painting and drawing.',
      maths: 'Maths is numbers.',
      geography: 'Geography is places.',
    },
    more: 'A person who plays music is a musician.',
    tip: "Learn 'play the piano' and 'play the guitar'.",
  },
  'In ___, we run, jump and play team games.': {
    why: 'PE, short for physical education, is the subject of sport and exercise.',
    not: {
      maths: 'Maths is about numbers.',
      art: 'Art is about pictures.',
      music: 'Music is about sound.',
    },
    more: "We say it as 'P, E', one sound for each.",
    tip: 'Wear your trainers for PE.',
  },
  'Sit at your ___ and get out your books.': {
    why: 'A desk is a table where you sit to work. You can say: My desk is near the front.',
    not: {
      shelf: 'A shelf is on a wall. You cannot sit at it.',
      cupboard: 'A cupboard has doors for keeping things.',
      bin: 'A bin is for rubbish.',
    },
    more: "We say 'sit at your desk', with 'at'.",
    tip: 'Keep your desk tidy.',
  },
  'The ___ fixed to the wall holds thirty books in a row.': {
    why: 'A shelf is a flat board fixed to a wall for holding things such as books.',
    not: {
      desk: 'A desk stands on the floor. You work at it.',
      bin: 'A bin is for rubbish.',
      tray: 'A tray is for carrying things.',
    },
    more: "The plural of 'shelf' is 'shelves'.",
    tip: 'Learn the rule: shelf, shelves; half, halves.',
  },
  'We use a ___ to do hard sums quickly.': {
    why: 'A calculator is a small machine with buttons that does sums for you.',
    not: {
      compass: 'A compass draws circles.',
      protractor: 'A protractor measures angles.',
      stapler: 'A stapler joins pages.',
    },
    more: "The verb is 'calculate': 'Calculate the total.'",
    tip: 'Check the result in your head too.',
  },
  'Mr Jones checks our work and gives us a ___ out of ten.': {
    why: 'A mark is a number that shows how well you did, such as seven out of ten.',
    not: {
      prize: 'A prize is something you win.',
      page: 'A page is one side of a sheet of paper.',
      test: 'A test is what you do, not the score you get.',
    },
    more: "'Full marks' means everything is right.",
    tip: "Learn 'out of': 'I got nine out of ten.'",
  },
  'If you work hard all year, you might win a ___ when the term ends.': {
    why: 'A prize is something you win for doing well, such as a book token.',
    not: {
      report: 'You get a report, but you do not win it.',
      test: 'You take a test. You do not win it.',
      mark: 'You get a mark for your work. You do not win it.',
    },
    more: "'Prize-giving' is the day when prizes are given out.",
    tip: "Learn the phrase 'win a prize'.",
  },
  'At my school, everyone wears the same blue ___.': {
    why: 'A uniform is the set of clothes that everyone in a school or a job wears.',
    not: {
      timetable: 'A timetable shows lessons.',
      homework: 'Homework is work you do at home.',
      register: 'A register is a list of names.',
    },
    more: "'Uni' means one: everyone wears the same.",
    tip: "Describe your own: 'I wear a blue jumper and black shoes.'",
  },
  'Do the ___ quietly. You have twenty minutes to finish it.': {
    why: 'A task is a piece of work to do. Here you have twenty minutes to finish it.',
    not: {
      assembly: 'An assembly is a meeting.',
      break: 'A break is a rest.',
      trip: 'A trip is a visit.',
    },
    more: "Teachers often say 'Your task is to ...' at the start of a lesson.",
    tip: "Learn 'start the task' and 'finish the task'.",
  },
  'There are twenty-six ___ in the English alphabet.': {
    why: 'The English alphabet has twenty-six letters, from A to Z.',
    not: {
      words: 'Words are made of letters.',
      numbers: 'Numbers are for counting.',
      pages: 'Pages are in books.',
    },
    more: 'Five of them are vowels: a, e, i, o and u.',
    tip: 'Say the alphabet aloud to remember the order.',
  },
  'Every sentence finishes with a full ___.': {
    why: 'A full stop is the small dot that ends a sentence.',
    not: {
      mark: "A question mark ends a question, but 'full mark' is not a punctuation mark.",
      line: 'A line is not a punctuation mark.',
      space: 'A space goes between words.',
    },
    more: 'American English calls it a period.',
    tip: 'Check that every sentence ends with a full stop.',
  },
  'The teacher reads us a ___ about a dragon.': {
    why: 'A story tells about people, animals or dragons and what happens to them.',
    not: {
      test: 'A test checks what you know.',
      map: 'A map shows places.',
      report: 'A report tells parents about your work.',
    },
    more: 'A story has a beginning, a middle and an end.',
    tip: "Learn 'tell a story' and 'read a story'.",
  },
  'We grow beans in the school ___.': {
    why: 'A garden is a place where plants grow, so the beans grow in the school garden.',
    not: {
      gym: 'A gym is a room for sport.',
      canteen: 'A canteen is for meals.',
      library: 'A library is for books.',
    },
    more: 'Plants need water and sunlight to grow.',
    tip: "Learn 'grow', 'water' and 'pick' with plants.",
  },
  'Our class ___ is a hamster called Bob.': {
    why: 'A pet is an animal that people keep and look after. Bob is the class pet.',
    not: {
      teacher: 'A teacher is a person.',
      pupil: 'A pupil is a child who learns.',
      prize: 'A prize is something you win.',
    },
    more: 'A class pet needs food, water and a clean cage.',
    tip: "Learn 'look after': 'We look after the class pet.'",
  },
  'In the science lab, always wear ___ to protect your eyes.': {
    why: 'Goggles are special glasses that fit tightly and protect your eyes.',
    not: {
      gloves: 'Gloves protect your hands.',
      aprons: 'Aprons protect your clothes.',
      helmets: 'Helmets protect your head.',
    },
    more: 'Swimmers wear goggles too.',
    tip: "Learn the lab rule: 'Goggles on.'",
  },
  'Some pupils come to school by bus, and some come on ___.': {
    why: "'On foot' means walking. We say 'on foot', not 'on feet'.",
    not: {
      feet: "'On feet' is a common mistake. The phrase is 'on foot'.",
      walk: "'On walk' is not English. We say 'on foot'.",
      legs: "'On legs' is not English.",
    },
    more: "Compare 'by bus', 'by car' and 'on foot'.",
    tip: "Learn 'on foot' as one phrase.",
  },
  'Miss Lee calls out our names to check who is here. She is taking the ___.': {
    why: 'The register is the list of pupils in a class. The teacher reads it out to check who is here: she takes the register.',
    not: {
      timetable: 'A timetable shows lessons and times. It is not for checking who is here.',
      report: 'A report tells parents about your work.',
      test: 'A test checks what you know, not who is here.',
    },
    more: "When your name is called, you answer 'Here' or 'Yes, miss'.",
    tip: "Learn the fixed phrase 'take the register'.",
  },
  "A: Why are you staying after school?\nB: I've got a ___. I forgot my homework three times.": {
    why: 'A detention is a punishment: you stay at school after lessons. B forgot homework three times, so B has one.',
    not: {
      lesson: 'A lesson is not a punishment for forgetting homework.',
      trip: 'A trip is a visit, not a punishment.',
      break: 'A break is a rest during the day, not after school.',
    },
    more: "'Detention' comes from 'detain', which means keep someone somewhere.",
    tip: "Learn 'get a detention' and 'have a detention'.",
  },
  "A: Why are you revising so hard?\nB: I've got a maths ___ on Monday.": {
    why: 'An exam is an important check of what you know, often in a big hall. People study hard before an exam.',
    not: {
      trip: 'You do not revise for a trip.',
      assembly: 'You do not revise for an assembly.',
      register: 'You do not revise for the register.',
    },
    more: "'Exam' is short for 'examination'.",
    tip: "Learn 'sit an exam' and 'take an exam'.",
  },
  "A: Did you pass?\nB: I don't know yet. We get our ___ next week.": {
    why: 'Results tell you how you did, and whether you passed. B will find out next week.',
    not: {
      homework: 'Homework does not tell you whether you passed.',
      uniforms: 'Uniforms are clothes.',
      timetables: 'Timetables show lessons.',
    },
    more: "We say 'get your results', and results can be good or bad.",
    tip: "Ask a friend: 'How were your results?'",
  },
  "A: When do we have to hand in the project?\nB: The ___ is Friday at nine o'clock.": {
    why: 'A deadline is the last time by which something must be done. The project must be in by Friday at nine.',
    not: {
      timetable: 'A timetable shows all your lessons.',
      register: 'A register is a list of names.',
      holiday: 'A holiday is time off.',
    },
    more: 'Work given in after the deadline may lose marks.',
    tip: 'Write each deadline in your planner.',
  },
  'Please ___ your homework on Monday morning.': {
    why: 'To hand in work means to give it to your teacher. Pupils hand in homework.',
    not: {
      'hand out': 'To hand out means to give something to everyone. Teachers hand out worksheets.',
      'give up': 'To give up means to stop trying.',
      'look up': 'To look up means to find a word in a book.',
    },
    more: "A phrasal verb is a verb with a small word such as 'in' or 'up'.",
    tip: "Learn 'hand in' with 'work': hand in your work on time.",
  },
  'A: Can you ___ the worksheets, please? Give one to everyone.\nB: OK, miss.': {
    why: 'To hand out means to give one to each person. A wants a worksheet given to everyone.',
    not: {
      'hand in': 'To hand in means to give work to the teacher, not to everyone.',
      'give up': 'To give up means to stop trying.',
      'look up': 'To look up means to find a word in a book.',
    },
    more: "In class, 'Can you hand these out?' is a common request.",
    tip: 'A sheet given to everyone is called a handout.',
  },
  "I need to ___ for my history test. I'll read my notes again tonight.": {
    why: 'To revise means to study again before a test, for example by reading your notes.',
    not: {
      forget: 'To forget is the opposite of learning.',
      borrow: 'To borrow is to take something that you will give back.',
      lend: 'To lend is to give something for a short time.',
    },
    more: "In American English, 'revise' means change, and 'review' means study again.",
    tip: "Learn the noun: 'revision'.",
  },
  'A: Can you ___ me your calculator?\nB: Sure, here it is.': {
    why: 'When you lend something, you give it to someone for a short time. A asks B to give the calculator for a while.',
    not: {
      borrow: "We borrow from someone. 'Can you borrow me' is a common mistake.",
      take: "'Can you take me your calculator?' is not English.",
      keep: "'Can you keep me your calculator?' is not English.",
    },
    more: "The past of 'lend' is 'lent'.",
    tip: 'You lend to someone, and you borrow from someone.',
  },
  'A: Can I ___ your ruler?\nB: Yes, but give it back after the lesson.': {
    why: 'To borrow means to take something that you will give back. A will give the ruler back after the lesson.',
    not: {
      lend: "'Can I lend your ruler?' is a common mistake. You lend something of yours to someone else.",
      give: "'Can I give your ruler?' does not make sense.",
      keep: "B says 'give it back', so A cannot keep it.",
    },
    more: "The past of 'borrow' is 'borrowed'.",
    tip: "Ask politely: 'Can I borrow your ..., please?'",
  },
  'Work with a ___. Turn to the person next to you and talk about the picture.': {
    why: 'A partner is one other person you work with. You turn to the person next to you, so you work in a pair.',
    not: {
      group: 'A group is three or more people.',
      team: 'A team is a group that plays or works together.',
      class: 'Your class is everyone in the room.',
    },
    more: 'Working with a partner is called pair work.',
    tip: "Learn 'work in pairs' and 'work in groups'.",
  },
  "Tomorrow I'm giving a ___ to the class about my favourite animal, with slides for everyone to see.":
    {
      why: 'A presentation is a talk that you give to a group, often with pictures or slides.',
      not: {
        homework: 'You do homework. You do not give it to the class with slides.',
        register: 'A register is a list of names.',
        uniform: 'A uniform is clothes.',
      },
      more: "We say 'give a presentation' or 'do a presentation'.",
      tip: 'Practise it aloud before the day.',
    },
  'Our class is doing a ___ on the Romans. Each group is making a poster.': {
    why: 'A project is a piece of work over several lessons: you find out about a topic and make something, such as a poster.',
    not: {
      test: 'A test checks what you know. Groups do not make posters in it.',
      trip: 'A trip is a visit.',
      register: 'A register is a list of names.',
    },
    more: 'Say it with the stress at the start: PRO-ject.',
    tip: "Learn 'do a project on': 'We did a project on volcanoes.'",
  },
  'Listen to the teacher and write ___ in your exercise book.': {
    why: 'Notes are short words about the main points, written while you listen.',
    not: {
      maps: 'Maps are drawings of places.',
      stamps: 'Stamps go on letters.',
      tickets: 'Tickets are for travel or shows.',
    },
    more: 'Notes are short: they leave out the small words.',
    tip: "Learn 'take notes' and 'make notes'.",
  },
  "A: I can't log in to the computer.\nB: Check your ___. Is Caps Lock on?": {
    why: 'A password is a secret word that you type to log in. With Caps Lock on, it may not work.',
    not: {
      printer: 'A printer does not stop you logging in.',
      mouse: 'A mouse does not stop you logging in.',
      battery: 'A desktop computer does not need its battery checked to log in.',
    },
    more: 'Never tell anyone your password.',
    tip: "Learn 'log in' and 'log out'.",
  },
  "A: My laptop has gone dead.\nB: Here's my ___. Plug it in over there.": {
    why: 'A charger connects a laptop to the wall to give it power again.',
    not: {
      battery: 'A battery is part of the laptop. B gives A something to plug in.',
      headphones: 'Headphones are for listening.',
      mouse: 'A mouse is for pointing and clicking.',
    },
    more: "When a machine has 'gone dead', its power has run out.",
    tip: "Learn 'charge': 'I need to charge my laptop.'",
  },
  'Everyone who finished the swimming course got a ___ with their name on it.': {
    why: 'A certificate is a paper that shows you have done something, such as a course.',
    not: {
      register: 'A register is a list of names for checking who is here.',
      timetable: 'A timetable shows times.',
      receipt: 'A receipt shows what you paid.',
    },
    more: 'People often put certificates in frames.',
    tip: 'Break it into parts: cer-ti-fi-cate.',
  },
  'Our school team won the football final, and the captain held up the shiny ___.': {
    why: 'A trophy is a shiny cup that a winning team holds up.',
    not: {
      certificate: 'A certificate is paper, not shiny.',
      ticket: 'A ticket lets you into a match.',
      register: 'A register is a list of names.',
    },
    more: 'The team that wins the final lifts the trophy.',
    tip: "Learn 'win a trophy' and 'hold up the trophy'.",
  },
  'Jo sits next to me in every lesson. She is my ___.': {
    why: 'A classmate is someone in the same class as you. Jo is in every lesson with you.',
    not: {
      teacher: 'A teacher teaches the class. Jo sits next to you as another pupil.',
      caretaker: 'A caretaker looks after the building.',
      'head teacher': 'A head teacher runs the school.',
    },
    more: "'Classmate' is two words joined: class + mate.",
    tip: "Learn other '-mate' words: teammate, flatmate.",
  },
  "Mia couldn't come to school today because she was ill. She was ___.": {
    why: 'Absent means not here. Mia did not come to school, so she was absent.',
    not: {
      present: 'Present means here, which is the opposite.',
      late: 'Late means coming after the start. Mia did not come at all.',
      early: 'Early means coming before the start.',
    },
    more: 'Teachers write down who is absent each morning.',
    tip: 'Learn the opposite pair: absent and present.',
  },
  'Tom came into the lesson ten minutes after it started. He was ___.': {
    why: 'Late means coming after the time something starts. Tom came ten minutes after the lesson began.',
    not: {
      absent: 'Absent means not there at all. Tom did come.',
      early: 'Early means before the start.',
      ready: 'Ready means prepared, not about time.',
    },
    more: "We say 'Sorry I'm late' when we arrive after the start.",
    tip: 'Learn the opposites: late and early.',
  },
  "A: Which room is maths in?\nB: Room 12. Go up the ___, and it's on the right.": {
    why: 'You go up the stairs, step by step, to reach a higher floor.',
    not: {
      lift: "We say 'go up in the lift', not 'go up the lift'.",
      roof: 'You do not walk up a roof to reach a classroom.',
      wall: 'You cannot walk up a wall.',
    },
    more: "'Upstairs' means on a higher floor.",
    tip: "Learn 'go up the stairs' and 'go down the stairs'.",
  },
  'Our teacher put our best paintings on ___ so that everyone could see them.': {
    why: "'On display' means put where people can see it, often on a wall or in a case.",
    not: {
      holiday: "'On holiday' means away from work or school.",
      time: "'On time' means not late.",
      purpose: "'On purpose' means not by accident. It does not say where the paintings were put.",
    },
    more: "A 'display board' is a board for showing work.",
    tip: "Learn 'on display' as a phrase.",
  },
  'Please write in full ___, not in notes.': {
    why: 'A full sentence has a subject and a verb, and makes complete sense.',
    not: {
      letters: "You write with letters anyway. 'Full letters' is not a phrase.",
      numbers: 'Numbers are for counting.',
      colours: 'Colours are not a way of writing.',
    },
    more: 'Notes leave out small words; full sentences keep them.',
    tip: 'Check that each sentence makes sense on its own.',
  },
  'There are three ___ in the school year: autumn, spring and summer.': {
    why: 'The school year in Britain has three terms: autumn, spring and summer.',
    not: {
      seasons:
        'There are four seasons, and winter is one of them. The school year has three terms.',
      holidays: 'Holidays come between the terms.',
      months: 'There are twelve months.',
    },
    more: 'Half term is a short holiday halfway through each term.',
    tip: "Learn 'term' and 'half term'.",
  },
  'My big sister goes to ___. She is studying medicine.': {
    why: 'People study medicine at university, after they leave school.',
    not: {
      nursery: 'A nursery is for very young children.',
      'primary school': 'Primary school is for children aged about four to eleven.',
      playground: 'A playground is for playing.',
    },
    more: 'Students at university study for a degree.',
    tip: "Say 'go to university', with no 'the'.",
  },
  'Many children aged three go to ___ before they start school.': {
    why: 'A nursery looks after and teaches very young children, before school.',
    not: {
      university: 'University is for adults.',
      college: 'College is for older students.',
      assembly: 'An assembly is a school meeting.',
    },
    more: 'A nursery is also a room for a baby, or a place that grows plants.',
    tip: "Learn 'nursery rhyme', a song for young children.",
  },
  "A: I'm stuck on question 5.\nB: Ask Miss Lee for a ___. She might tell you how to start.": {
    why: 'A hint is a small help that shows you how to begin, without giving the whole answer.',
    not: {
      mark: 'A mark is a score for your work.',
      test: 'A test checks what you know.',
      trip: 'A trip is a visit.',
    },
    more: "'Stuck' means you cannot go on.",
    tip: "Ask: 'Can you give me a hint, please?'",
  },
  'A: What did you get in the spelling test?\nB: Nine out of ten. I only got one word ___.': {
    why: 'Nine out of ten means one word was not right, so B got one word wrong.',
    not: {
      right: 'If only one word were right, the score would be one out of ten.',
      easy: "'Got one word easy' is not a phrase.",
      late: "'Got one word late' is not a phrase.",
    },
    more: "We say 'get something right' and 'get something wrong'.",
    tip: "Learn 'got it wrong' as a phrase.",
  },
  'Our ___ teacher, Mrs Hall, looks after our class and takes the register every morning.': {
    why: 'A form teacher, or form tutor, looks after one class and takes the register every morning.',
    not: {
      head: 'The head teacher runs the whole school.',
      music: 'A music teacher teaches music.',
      art: 'An art teacher teaches art.',
    },
    more: 'In British schools a class is often called a form.',
    tip: "Learn 'form tutor' and 'form room'.",
  },
  'If you know the answer, ___ your hand.': {
    why: 'To raise your hand means to put it up, as in class when you want to speak.',
    not: {
      rise: "'Rise' has no object: the sun rises. You raise your hand.",
      shake: 'You shake hands to greet someone.',
      clap: 'You clap both hands together.',
    },
    more: "'Put up your hand' means the same.",
    tip: "'Raise' takes an object and 'rise' does not: raise your hand, the sun rises.",
  },
  'I need to ___ the date from the board into my exercise book.': {
    why: 'To copy means to write the same words again. You copy the date from the board.',
    not: {
      read: 'You can read the date, but reading does not put it in your book.',
      cut: 'You cannot cut words from a board.',
      rub: 'You rub words out, not into a book.',
    },
    more: "A 'copy' is also one of many, such as a copy of a book.",
    tip: "Learn 'copy down': 'Copy down the title.'",
  },
  'Sports day is in June. Everyone runs, jumps and throws on the school ___.': {
    why: 'A field is a big area of grass. Sports day happens on the school field.',
    not: {
      gym: "Sports day in June is outside, and we say 'in the gym', not 'on the gym'.",
      lab: 'A lab is for science.',
      library: 'A library is for reading.',
    },
    more: 'A field for games is also called a playing field.',
    tip: "Learn 'on the field', with 'on'.",
  },
  'Write your answers in ___ letters so that they are easy to read.': {
    why: 'Capital letters are the big letters, like A and B. They are clear to read.',
    not: {
      tiny: 'Tiny letters are hard to read.',
      secret: "'Secret letters' is not a way to write answers.",
      silent: "Silent letters are not said, like the 'k' in 'knee'.",
    },
    more: 'We use capital letters at the start of names, and at the start of each sentence.',
    tip: "'Block capitals' means every letter written as a capital.",
  },
  "A: I can't find 'tortoise' in the dictionary.\nB: Remember, the words are in ___ order.": {
    why: "Alphabetical order goes from A to Z, so 'tortoise' is near the end, with the T words.",
    not: {
      number: 'Number order is for numbers: 1, 2, 3.',
      size: 'Words are not in order of size in a dictionary.',
      colour: 'Words have no colour order.',
    },
    more: 'Indexes and class lists use it too.',
    tip: 'Practise: put five words in alphabetical order.',
  },
  'Please ___ the worksheets to the back: take one and give the rest to the person behind you.': {
    why: 'To pass something means to hand it on to the next person.',
    not: {
      hold: 'If you hold them, they do not reach the back.',
      throw: 'We do not throw worksheets.',
      keep: 'If you keep them all, the others get none.',
    },
    more: "'Pass' has other meanings too, such as 'pass the ball'.",
    tip: "Learn 'pass on' and 'pass round'.",
  },
  'We must not run in the ___. Walk to your next lesson.': {
    why: 'A corridor is a long passage with classrooms on each side. Running there is not safe.',
    not: {
      playground: 'You may run in the playground.',
      field: 'You may run on the field.',
      gym: 'You may run in the gym in PE.',
    },
    more: "Many schools have a 'walk, don't run' rule in corridors.",
    tip: "Spelling: 'corridor' has a double r: c-o-r-r-i-d-o-r.",
  },
  'A: Have you got a ___ pen? Mine has run out of ink.\nB: Yes, take this one.': {
    why: 'A spare pen is an extra one that you do not need. B has one to give.',
    not: {
      empty: 'An empty pen would not help.',
      broken: 'A broken pen would not help.',
      missing: 'A missing pen cannot be given.',
    },
    more: "We also say 'spare time' for free time.",
    tip: 'Keep a spare pen in your bag.',
  },
  "I left my jumper at school. I'll look in the lost ___ box tomorrow.": {
    why: 'Lost property is things people have lost. Schools keep them in a box or a room.',
    not: {
      paper: "'Lost paper box' is not a phrase.",
      school: "'Lost school box' is not a phrase.",
      office: "'Lost office box' is not a phrase.",
    },
    more: "'Property' means things that belong to someone.",
    tip: 'Put your name in your clothes, so lost things can come back to you.',
  },
  "Don't forget your PE ___. We're playing netball today.": {
    why: 'Your PE kit is the clothes and shoes you wear for sport.',
    not: {
      test: 'You do not bring a test for netball.',
      team: 'You do not forget a team.',
      report: 'A report is about your work.',
    },
    more: "A football kit is a team's shirts, shorts and socks.",
    tip: "Learn 'kit' for sets of clothes or tools: a PE kit, a first aid kit.",
  },
  "I don't eat school dinners. I bring a packed ___ from home.": {
    why: 'A packed lunch is food you bring from home, often sandwiches.',
    not: {
      dinner: "We say 'school dinners', but the food you bring is a packed lunch.",
      breakfast: 'Breakfast is eaten in the morning, at home.',
      supper: 'Supper is an evening meal.',
    },
    more: "Many British children call the midday meal at school 'dinner'.",
    tip: "Learn 'packed lunch' as a phrase.",
  },
  'The fire alarm rang, but there was no fire. It was only a fire ___.': {
    why: 'A fire drill is practice: everyone leaves the building as if there were a fire.',
    not: {
      door: 'A fire door stops a fire spreading.',
      engine: 'A fire engine carries firefighters.',
      exit: 'A fire exit is a way out.',
    },
    more: 'Drills help everyone know what to do in a real fire.',
    tip: "Learn 'drill' as practice: a fire drill.",
  },
  'If the alarm rings, leave the building quickly by the ___.': {
    why: 'A fire exit is a way out for leaving a building quickly and safely in an emergency.',
    not: {
      lift: 'Never use the lift in a fire.',
      window: 'Windows are not safe ways out.',
      roof: 'The roof is not a way out.',
    },
    more: 'Fire exits have green signs with a running person.',
    tip: "Learn 'exit' and 'entrance': the way out and the way in.",
  },
  'During the exam there must be total ___. Nobody may speak.': {
    why: 'Silence means no sound at all. Nobody may speak, so there is silence.',
    not: {
      noise: 'Noise is the opposite of silence.',
      music: 'Music is a sound.',
      light: 'Light is not about sound.',
    },
    more: "The adjective is 'silent'.",
    tip: "Learn 'in silence': 'Work in silence, please.'",
  },
  'We had a ___ in maths today: thirty questions in twenty minutes.': {
    why: 'A quiz is a short set of questions, often quick and fun.',
    not: {
      trip: 'A trip is a visit.',
      register: 'A register is a list of names.',
      uniform: 'A uniform is clothes.',
    },
    more: "The plural is 'quizzes', with two z's.",
    tip: "Learn 'do a quiz' and 'win a quiz'.",
  },
  'The teacher sent us home early, because the heating was broken and the school was ___.': {
    why: 'Freezing means very cold. With no heating, the school was too cold to stay in.',
    not: {
      crowded:
        'A crowded school is full of people. Broken heating makes a school cold, not crowded.',
      noisy: 'Noise has nothing to do with heating.',
      open: 'The school was open, but that is not why everyone went home.',
    },
    more: "'Freezing' can be used for anything very cold.",
    tip: 'Learn a scale of words: warm, cool, cold, freezing.',
  },
  'A: Excuse me, which way is the hall?\nB: Go down this corridor and take the second door on the ___.':
    {
      why: "'On the left' tells you which side. We say 'on the left' and 'on the right' for directions.",
      not: {
        front: "'On the front' is not used for doors along a corridor.",
        top: 'Doors are not on the top.',
        middle: "'On the middle' is not English.",
      },
      more: 'Other direction words: straight on, turn left, turn right.',
      tip: 'Hold up your hands: your left hand makes an L.',
    },
  'A: Have you finished your drawing?\nB: Almost. I just need to ___ my name on it.': {
    why: 'To sign means to write your name. Artists often sign their own pictures.',
    not: {
      cut: 'You cannot cut your name onto a drawing.',
      rub: 'You rub out a name, not rub it in.',
      fold: 'You fold paper, not a name.',
    },
    more: 'Your signature is the special way you write your name.',
    tip: "The 'g' is silent in 'sign', but you can hear it in 'signature'.",
  },
  'Where is the clock? It is ___ the wall. Look up and you can read the time.': {
    why: 'The clock hangs high up, where everyone can read it. It touches the wall, so it is on the wall.',
    not: {
      in: "'In the wall' would mean inside it, behind the paint. A clock hangs on the wall.",
      under: "'Under the wall' makes no sense, and you look up to read the clock.",
      'next to':
        "'Next to the wall' would mean it stands beside the wall. You look up to read it on the wall.",
    },
    more: "We use 'on' for things that touch a surface: on the wall, on the table.",
    tip: "Learn 'on the wall' as a phrase: posters, pictures and clocks are on the wall.",
  },
  'Where is the map? It is ___ the wall. It is pinned up so that the whole class can see it.': {
    why: 'A map is pinned to the wall so that everyone can see it. So it is on the wall.',
    not: {
      in: 'A map cannot be in a wall.',
      under: 'A map that is pinned up is high, not low down.',
      'next to': 'The map is pinned to the wall itself, not standing beside it.',
    },
    more: "'Pin up' means fix to a wall or a board with pins.",
    tip: "Use 'on' for things fixed to a wall, such as maps, posters and clocks.",
  },
  'Where is the globe? It is ___ the shelf. Reach up high to get it down.': {
    why: 'You reach up to get the globe down, so it sits on a high shelf.',
    not: {
      in: 'A globe sits on a shelf. It does not go into it.',
      under: 'The space below a shelf is lower. You reach up to get the globe.',
      'next to':
        'Next to the shelf, the globe would need something else high up to stand on. You get it down from the shelf.',
    },
    more: "We say 'on the shelf' and 'on the top shelf'.",
    tip: "Learn 'get down' and 'put up' with high places.",
  },
  'Where are the books? They are ___ the shelf. They stand up straight, ready for the next lesson.':
    {
      why: 'Books stand up straight on a shelf, so they are on the shelf.',
      not: {
        in: "We say 'on the shelf', not 'in the shelf'.",
        under: 'Books stand up straight on a shelf, not below it.',
        'next to': 'The books are on the shelf itself, not beside it.',
      },
      more: 'A bookcase is a set of shelves for books.',
      tip: "Learn 'put away': 'Put them away on the shelf.'",
    },
  'Where is the chart? It is ___ the noticeboard. It is pinned up with four drawing pins.': {
    why: 'The chart is pinned to the noticeboard, so it is on the noticeboard.',
    not: {
      in: 'A chart cannot go into a noticeboard.',
      under: 'A chart pinned up is on the board, not below it.',
      'next to': 'The drawing pins fix it to the noticeboard itself, not beside it.',
    },
    more: 'A noticeboard is made of soft board so that pins go into it.',
    tip: "Learn 'pin up' and 'take down'.",
  },
  'Where is the computer? It is ___ the desk. Sit at the desk, and its screen is right in front of you.':
    {
      why: 'When you sit at the desk, the screen is right in front of you, so the computer is on the desk.',
      not: {
        in: 'A computer cannot go into a desk.',
        under: 'Under the desk, its screen would be down by your feet, not in front of you.',
        'next to':
          'Beside the desk, its screen would be off to one side, not right in front of you as you sit.',
      },
      more: "We say 'at the desk' for people and 'on the desk' for things.",
      tip: "Practise: 'The computer is on the desk. I sit at the desk.'",
    },
  'Where is the pencil? It is ___ the pencil case. Open the zip to get it out.': {
    why: 'You open the zip to get the pencil out, so it is in the pencil case.',
    not: {
      on: 'If it were on the pencil case, you would not need to open the zip.',
      under: 'If it were under the pencil case, you would lift the case, not open it.',
      'next to': 'If it were next to the pencil case, you would not need to open it.',
    },
    more: "We use 'in' for things in a closed space: in a box, in a bag.",
    tip: "Learn 'get out' and 'put back': 'Get your pencil out.'",
  },
  'Where is the ruler? It is ___ the drawer. Pull the drawer open to find it.': {
    why: 'You pull the drawer open to find the ruler, so it is in the drawer.',
    not: {
      on: 'If it were on the drawer, you would see it without opening the drawer.',
      under: 'If it were under the drawer, opening the drawer would not help you find it.',
      'next to': 'If it were next to the drawer, you would not need to open it.',
    },
    more: 'A drawer slides in and out.',
    tip: "Learn 'pull out' and 'push in' with a drawer.",
  },
  'Where is the chair? It is ___ the classroom. It stands at your desk, where you sit for the lesson.':
    {
      why: 'The chair stands at your desk, where you sit for the lesson, so it is in the classroom.',
      not: {
        on: "We do not say 'on the classroom' for a chair.",
        under: "'Under the classroom' makes no sense.",
        'next to': 'Next to the classroom would mean out in the corridor, not at your desk.',
      },
      more: "We use 'in' with rooms: in the classroom, in the hall.",
      tip: "Learn 'in class' too: 'We are in class.'",
    },
  'Where are the paints? They are ___ the cupboard. Open the cupboard doors to get them.': {
    why: 'You open the cupboard doors to get the paints, so they are in the cupboard.',
    not: {
      on: 'If they were on the cupboard, you would not need to open the doors.',
      under: 'If they were under the cupboard, you would not open its doors.',
      'next to': 'If they were next to the cupboard, you would not open its doors.',
    },
    more: 'A cupboard has doors, and it keeps things tidy.',
    tip: "Learn 'put away': 'Put the paints away in the cupboard.'",
  },
  'Where is the telephone? It is ___ the office. The school secretary answers it.': {
    why: 'The secretary works in the office and answers the telephone there, so it is in the office.',
    not: {
      on: "We do not say 'on the office'.",
      under: "'Under the office' makes no sense.",
      'next to': 'The secretary answers it at work, in the office, not beside the room.',
    },
    more: "We use 'in' with rooms and buildings: in the office, in the hall.",
    tip: "Learn 'in the office' and 'at work'.",
  },
  'Where are the scissors? They are ___ the tall pot, with the pens and pencils.': {
    why: 'The scissors stand with the pens and pencils in a tall pot, so they are in the pot.',
    not: {
      on: 'On the pot would mean on top of it.',
      under: 'Under the pot, they would not be with the pens.',
      'next to': 'Next to the pot, they would not be with the pens.',
    },
    more: 'A pot like this keeps things tidy.',
    tip: 'Keep scissors with the points down.',
  },
  'Where is the school bag? It is ___ the chair. It is lying between the four legs of the chair.': {
    why: 'The space between the four legs of a chair is lower than the seat. So the bag is under the chair.',
    not: {
      on: 'On the chair would mean on the seat. The bag is between the legs.',
      in: 'A bag cannot be in a chair.',
      'next to': 'Next to the chair would mean beside it, not between its legs.',
    },
    more: "'Under' means lower than something, often hidden by it.",
    tip: "Learn 'under the table' and 'under the chair' as phrases.",
  },
  'Where is the exercise book? It is ___ the desk. It slipped off the desk top, and now it lies where your feet go.':
    {
      why: 'Your feet go beneath the desk when you sit. The book fell there, so it is under the desk.',
      not: {
        on: 'It slipped off the top, so it is no longer on the desk.',
        in: 'It fell to the floor, so it is not in the desk.',
        'next to': 'Your feet go below the desk, not beside it.',
      },
      more: "'Slip off' means fall off by accident.",
      tip: "Learn 'pick up': 'Pick it up from the floor, please.'",
    },
  'Where is the bin? It is ___ the door.': {
    why: 'A bin stands on the floor, and it can stand beside the door. It cannot stand on a door or go into one, so it is next to the door.',
    not: {
      on: 'A bin is heavy. It cannot stand on a door.',
      in: 'A bin cannot be inside a door.',
      under: 'There is no space below a door for a bin.',
    },
    more: "'Next to' means very close, at the side.",
    tip: "Learn 'next to' and 'beside' together: they mean the same.",
  },
  'Where is the door? It is ___ the window.': {
    why: 'A door and a window are both in the wall, side by side. So the door is next to the window.',
    not: {
      on: 'A door is not on a window.',
      in: 'A door is not inside a window.',
      under: 'A door is not below a window.',
    },
    more: "We use 'next to' for two things side by side.",
    tip: 'Describe your own classroom: say what is next to the door.',
  },
  'Where is the window? It is ___ the board.': {
    why: 'The window and the board are side by side, so the window is next to the board.',
    not: {
      on: 'A window is not on the board.',
      in: 'A window is not inside a board.',
      under: 'A window is not below the board.',
    },
    more: "'Board' here means the big board at the front of the class.",
    tip: 'Practise with your own room: say what is next to the window.',
  },
  'Where is the mouse? It is ___ the keyboard. Your right hand moves it while your left hand types.':
    {
      why: 'Your right hand moves the mouse while your left hand types on the keyboard, so the mouse is beside the keyboard: next to it.',
      not: {
        on: 'On the keyboard, the mouse would cover the keys.',
        in: 'A mouse cannot go inside a keyboard.',
        under: 'Under the keyboard, you could not move it.',
      },
      more: 'Many left-handed people put the mouse on the left.',
      tip: "Learn 'left' and 'right' with 'hand': my right hand, my left hand.",
    },
  'The teacher stands with her back to the board and talks to the class. Where is the teacher? She is ___ the board.':
    {
      why: 'Her back is to the board and she faces the class, so she stands in front of the board.',
      not: {
        behind:
          'Behind the board, nobody could see her. Her back is to the board, so she is in front of it.',
        above: 'Above the board would mean higher up on the wall.',
        between: "'Between' needs two things: between the board and something else.",
      },
      more: 'If your back is to something, that thing is behind you, and you are in front of it.',
      tip: 'Learn the pair: in front of and behind. They are opposites.',
    },
  'Where is the board? It is ___ the teacher. She stands with her back to it, facing the class.': {
    why: 'The teacher has her back to the board, so the board is behind her.',
    not: {
      'in front of':
        'The teacher faces the class, not the board, so the board is not in front of her.',
      under: 'The board is on the wall, not lower than the teacher.',
      between: "'Between' needs two things, one on each side.",
    },
    more: "We say 'behind you' for whatever is at your back.",
    tip: 'Practise with your own room: what is behind you now?',
  },
  "Sara's desk has Ali's desk on its left and Ben's desk on its right. Where is Sara's desk? It is ___ Ali's desk and Ben's desk.":
    {
      why: "There is one desk on each side of Sara's desk, so her desk is between them.",
      not: {
        behind: 'Behind would mean at the back of them. The desks are side by side.',
        opposite: 'Opposite would mean facing them from the other side of the room.',
        above: 'Above would mean higher up.',
      },
      more: "'Between' always needs two things: between A and B.",
      tip: "Learn the pattern 'between ... and ...'.",
    },
  'The bookcase has the window on one side and the door on the other. Where is the bookcase? It is ___ the window and the door.':
    {
      why: 'The bookcase has the window on one side and the door on the other side, so it is between them.',
      not: {
        opposite: 'Opposite would mean across the room from them.',
        above: 'Above would mean higher up, over them.',
        behind: 'Behind would mean at the back of them.',
      },
      more: "We use 'between' for one thing with another on each side.",
      tip: "Describe your own room with 'between ... and ...'.",
    },
  'Leo sits at one end of the long table, and Mia sits at the other end, looking at him. Where is Mia? She is ___ Leo.':
    {
      why: 'Mia is at the other end of the table, facing Leo, so she is opposite him.',
      not: {
        'next to': 'Next to would mean side by side, at the same end of the table.',
        behind: 'Behind would mean at his back. She is looking at him across the table.',
        above: 'Above would mean higher up.',
      },
      more: "'Opposite' means facing, on the other side of something.",
      tip: "Learn 'sit opposite someone': you can see each other's faces.",
    },
  'The clock hangs high up. The whiteboard hangs lower down, at the same spot. Where is the clock? It is ___ the whiteboard.':
    {
      why: 'The clock is high up and the whiteboard is lower down at the same spot, so the clock is above the whiteboard.',
      not: {
        below: 'Below would mean lower down. The clock is higher.',
        behind: 'Behind would mean hidden at the back of it.',
        between: "'Between' needs two things, one on each side.",
      },
      more: "'Above' means higher than something, often right over it.",
      tip: "Learn 'above' with 'high up': 'The clock is high up, above the board.'",
    },
  'Where is the whiteboard? It is ___ the clock. The clock hangs high up, and the whiteboard hangs lower down.':
    {
      why: 'The whiteboard hangs lower down than the clock, so it is below the clock.',
      not: {
        above: 'Above would mean higher up. The whiteboard is lower.',
        behind: 'Behind would mean hidden at the back.',
        opposite: 'Opposite would mean across the room.',
      },
      more: "'Below' means lower than something.",
      tip: "Use 'below' for a lower place on the same wall.",
    },
  "You cannot see the bin from the door, because the teacher's big desk hides it. Where is the bin? It is ___ the desk.":
    {
      why: 'The desk hides the bin from the door, so the bin is behind the desk.',
      not: {
        'in front of': 'In front of the desk, you would see the bin from the door.',
        above: 'Above the desk, you would see it.',
        opposite: 'Opposite the desk, nothing would hide it.',
      },
      more: 'When one thing hides another, the hidden thing is behind it.',
      tip: "Learn 'hide behind': 'The cat hid behind the sofa.'",
    },
  'The children stand in a line. Tom is first, and Ella is next. Where is Ella? She is ___ Tom.': {
    why: 'Tom is first in the line and Ella comes next, so she stands behind him.',
    not: {
      'in front of': 'Tom is first, so nobody is in front of him.',
      above: 'Above would mean higher up.',
      opposite: 'Opposite would mean facing him.',
    },
    more: 'In a line, the first person is at the front.',
    tip: "Learn 'at the front' and 'at the back' of a line.",
  },
  'Where is Tom? He is ___ Ella. They are standing in a line, and Tom is first.': {
    why: 'Tom is first in the line, and Ella comes after him, so Tom is in front of Ella.',
    not: {
      behind: 'Tom is first, so he is not behind anyone.',
      opposite: 'Opposite would mean facing her.',
      between: 'Tom is first, so he is not between two people.',
    },
    more: "In a line, 'in front of' means nearer the front.",
    tip: 'Practise with three friends: who is in front of whom?',
  },
  'The projector hangs from the ceiling. The table is on the floor, at the same spot. Where is the projector? It is ___ the table.':
    {
      why: 'The projector hangs high from the ceiling over the table, so it is above the table.',
      not: {
        below: 'Below would mean lower. The projector hangs from the ceiling.',
        behind: 'Behind would mean at the back of the table.',
        between: "'Between' needs two things.",
      },
      more: 'Things that hang from a ceiling are above everything in the room.',
      tip: "Learn 'hang from': 'The lamp hangs from the ceiling.'",
    },
  'Where is the mat? It is ___ the door. You wipe your feet on it before you go into the room.': {
    why: 'You wipe your feet before you go in, so the mat lies just in front of the door.',
    not: {
      behind: 'Behind the door would be in the room, after you go in.',
      above: 'A mat lies on the floor, not above the door.',
      between: "'Between' needs two things.",
    },
    more: 'A mat for wiping your feet is called a doormat.',
    tip: "Learn 'wipe your feet' as a phrase.",
  },
  'The school is on one side of the road, and the park is on the other side. You cross the road to go from one to the other. Where is the park? It is ___ the school.':
    {
      why: 'The park is on the other side of the road, facing the school, so it is opposite the school.',
      not: {
        'next to': 'Next to would mean on the same side of the road, beside it.',
        behind: 'Behind would mean at the back of the school.',
        between: 'The road is between them, not the park.',
      },
      more: "We often use 'opposite' for buildings on two sides of a road.",
      tip: "Practise: 'The shop is opposite my house.'",
    },
  'Where is the road? It is ___ the school and the park. The school is on one side of it, and the park is on the other.':
    {
      why: 'The school is on one side of the road and the park is on the other, so the road is between them.',
      not: {
        opposite: 'The road runs between them. It is not facing them.',
        behind: 'Behind would mean at the back of one of them.',
        above: 'A road is on the ground, not above them.',
      },
      more: "'Between' needs two things: here, the school and the park.",
      tip: "Learn 'cross the road' with it.",
    },
  'There are two shelves. The dictionaries are on the top shelf, and the atlases are on the shelf lower down. Where are the dictionaries? They are ___ the atlases.':
    {
      why: 'The dictionaries are on the top shelf and the atlases are lower down, so the dictionaries are above the atlases.',
      not: {
        below: 'Below would mean lower down. The dictionaries are on the top shelf.',
        between: "'Between' needs two things, one on each side.",
        opposite: 'Opposite would mean across the room.',
      },
      more: "On a bookcase, 'above' means on a higher shelf.",
      tip: "Learn 'top shelf' and 'bottom shelf'.",
    },
  'Where are the atlases? They are ___ the dictionaries. The dictionaries are on the top shelf, and the atlases are on the shelf lower down.':
    {
      why: 'The atlases are on the shelf lower down, so they are below the dictionaries.',
      not: {
        above: 'Above would mean higher up. The atlases are lower.',
        behind: 'Behind would mean at the back of them.',
        opposite: 'Opposite would mean across the room.',
      },
      more: "'Below' means lower than something.",
      tip: 'Practise with a bookcase at home: what is below what?',
    },
  'Ana is hiding. The curtain covers her, and you can see only her shoes. Where is Ana? She is ___ the curtain.':
    {
      why: 'The curtain covers Ana and hides her, so she is behind the curtain.',
      not: {
        'in front of': 'In front of the curtain, everyone would see her.',
        above: 'Above the curtain, it would not hide her.',
        between: "'Between' needs two things.",
      },
      more: 'Her shoes show because the curtain does not reach the floor.',
      tip: "Learn 'hide-and-seek', a hiding game.",
    },
  'The children sit on the floor, facing the screen. They can see the film clearly. Where are the children? They are ___ the screen.':
    {
      why: 'The children face the screen and can see the film, so they are in front of it.',
      not: {
        behind: 'Behind the screen they could not see the film.',
        above: 'Above would mean higher than the screen.',
        between: "'Between' needs two things.",
      },
      more: 'To see something, you are usually in front of it.',
      tip: "Learn 'face' as a verb: 'We face the screen.'",
    },
  "When you open the door, the first thing you see, right across the room, is Ms Khan's desk. Where is the desk? It is ___ the door.":
    {
      why: 'The desk is right across the room from the door, facing it, so it is opposite the door.',
      not: {
        'next to': 'Next to the door would be beside it, not across the room.',
        behind: 'Behind the door, it would be hidden when the door opens.',
        under: 'A desk cannot be under a door.',
      },
      more: "'Opposite' means on the far side, facing.",
      tip: "Learn 'across the room' with it.",
    },
  'From the street, you can see the school, but not the playground. To get to it, you walk right round the building. Where is the playground? It is ___ the school.':
    {
      why: 'The building hides the playground from the street, and you walk round to reach it, so the playground is behind the school.',
      not: {
        'in front of': 'In front of the school, you would see it from the street.',
        above: 'A playground is on the ground.',
        between: "'Between' needs two things.",
      },
      more: 'The front of a building faces the street, and the back is behind it.',
      tip: "Learn 'round the back' for the space behind a building.",
    },
  'When you walk up to the school from the street, you come to the gate first, and then the building. Where is the gate? It is ___ the school.':
    {
      why: 'You reach the gate first, before the building, so the gate is in front of the school.',
      not: {
        behind: 'Behind the school, you would reach it after the building.',
        above: 'A gate is on the ground, not above.',
        under: 'A gate cannot be under a building.',
      },
      more: 'Many schools have a gate at the front.',
      tip: "Learn 'at the front' and 'at the back' of a building.",
    },
  "The lamp hangs from the ceiling, high up, at the spot where the teacher's desk stands. Where is the lamp? It is ___ the desk.":
    {
      why: 'The lamp hangs high up at the same spot as the desk, so it is above the desk.',
      not: {
        below: 'Below would mean lower. The lamp is high up.',
        behind: 'Behind would mean at the back of the desk.',
        'next to': 'Next to would mean beside the desk, at the side.',
      },
      more: 'A lamp up there shines on the whole desk.',
      tip: "Learn 'high up' and 'low down'.",
    },
  'Where are the children at break time? They are ___ the classroom. They are playing in the playground.':
    {
      why: 'The children are in the playground, which is not in the classroom, so they are outside it.',
      not: {
        inside: 'Inside the classroom, they could not play in the playground.',
        under: "'Under the classroom' makes no sense.",
        above: 'Above the classroom would be upstairs or on the roof.',
      },
      more: "'Outside' means out of a building or a room.",
      tip: "Learn 'go outside' and 'come in'.",
    },
  'Where is the hamster? It is ___ its cage. The door of the cage is shut, and the hamster is fast asleep.':
    {
      why: 'The cage door is shut and the hamster is fast asleep, so it is inside the cage.',
      not: {
        outside: 'With the door shut, it cannot be out of the cage.',
        above: 'Above the cage would mean on top of it.',
        opposite: 'Opposite would mean across from the cage.',
      },
      more: "'Inside' and 'in' mean almost the same.",
      tip: "Learn 'shut' and 'open' with doors and cages.",
    },
  'When you come out of Room 5, you only have to cross the corridor to go into Room 6. Where is Room 6? It is ___ Room 5.':
    {
      why: 'You only cross the corridor to get from one room to the other, so Room 6 is opposite Room 5.',
      not: {
        'next to': 'Next to would mean along the corridor, beside it, not across.',
        above: 'Above would mean upstairs.',
        between: "'Between' needs two things.",
      },
      more: 'Rooms on the two sides of a corridor face each other.',
      tip: "Learn the phrase 'across the corridor'.",
    },
  'The library is on the first floor, and the canteen is on the ground floor, at the same end of the building. Where is the library? It is ___ the canteen.':
    {
      why: 'The first floor is over the ground floor, so the library is above the canteen.',
      not: {
        below: 'Below would mean on a lower floor. The library is higher.',
        between: "'Between' needs two things.",
        opposite: 'Opposite would mean on the same floor, across from it.',
      },
      more: 'In Britain, the first floor is the one above the ground floor.',
      tip: 'Count floors the British way: ground, first, second.',
    },
  'The art room is on the ground floor, and the music room is on the first floor, at the same end of the building. Where is the art room? It is ___ the music room.':
    {
      why: 'The ground floor is lower than the first floor, so the art room is below the music room.',
      not: {
        above: 'Above would mean on a higher floor.',
        behind: 'Behind would mean at the back of it.',
        opposite: 'Opposite would mean across from it on the same floor.',
      },
      more: "We say 'downstairs' for the ground floor and 'upstairs' for the floors above it.",
      tip: "Learn 'upstairs' and 'downstairs'.",
    },
  'At lunch, Zoe is first in the queue, and Max comes after her. Where is Zoe? She is ___ Max.': {
    why: 'Zoe is first and Max comes after her, so Zoe is in front of Max.',
    not: {
      behind: 'Zoe is first, so she is not behind him.',
      opposite: 'Opposite would mean facing him.',
      between: 'Zoe is first, so she is not between two people.',
    },
    more: 'In a queue, the person in front is served first.',
    tip: "Learn 'queue' as a noun and a verb: 'We queue to pay.'",
  },
  'In the class photo, the short children stand in the first row, and the tall children stand in the row after them, so that every face can be seen. Where are the tall children? They are ___ the short children.':
    {
      why: 'The tall children stand in the row after the short ones, at the back, so they are behind the short children.',
      not: {
        'in front of': 'If the tall children stood in front, the short ones would be hidden.',
        between: "'Between' needs two things.",
        below: 'Below would mean lower down.',
      },
      more: 'Photographers put taller people at the back so that everyone can be seen.',
      tip: "Learn 'the front row' and 'the back row'.",
    },
  "The computer is on Mr Lee's left, and the printer is on his right. Where is Mr Lee? He is ___ the computer and the printer.":
    {
      why: 'The computer is on one side of Mr Lee and the printer is on the other, so he is between them.',
      not: {
        behind: 'Behind would mean at their back.',
        above: 'Above would mean higher than them.',
        opposite: 'Opposite would mean facing them across a space.',
      },
      more: "'Between' needs two things: here, the computer and the printer.",
      tip: "Use 'on my left' and 'on my right' to describe where things are.",
    },
  'Where are the coats? They are ___ the classroom. They hang in the corridor.': {
    why: 'The coats hang in the corridor, which is not part of the classroom, so they are outside the classroom.',
    not: {
      inside: 'They hang in the corridor, not in the classroom.',
      above: 'Above the classroom would be upstairs.',
      between: "'Between' needs two things, one on each side.",
    },
    more: 'Many schools have pegs for coats in the corridor.',
    tip: "Learn 'hang up your coat'.",
  },
  'Where is the date? It is ___ the top of the board.': {
    why: "We say 'at the top of' for a place on a page or a board. The date is written at the top of the board.",
    not: {
      on: "'On the top of the board' would mean sitting on its upper edge, not written on it.",
      in: "'In the top of the board' is not English.",
      to: "'To' shows movement, not a place.",
    },
    more: "We also say 'at the bottom of' and 'at the side of'.",
    tip: "Learn 'at the top of the page' as a set phrase.",
  },
  'Where is the plant? It is ___ the corner of the classroom.': {
    why: "A corner of a room is a space in the room, so we say 'in the corner of the classroom'.",
    not: {
      at: "'At the corner' is for streets, where two roads meet.",
      on: "'On the corner' is also for streets: a shop on the corner.",
      to: "'To' shows movement, not a place.",
    },
    more: 'In a room: in the corner. On a street: on the corner or at the corner.',
    tip: "Learn 'in the corner' for rooms and 'on the corner' for streets.",
  },
  'Where is the answer? It is ___ page 12.': {
    why: "We say 'on page 12' for something printed on a page.",
    not: {
      in: "'In page 12' is a common mistake. We say 'on page 12'.",
      at: "'At page 12' is not how we say where something is printed.",
      to: "'Turn to page 12' shows movement, but the answer is on the page.",
    },
    more: "We also say 'Turn to page 12'.",
    tip: "Learn 'on page 12', with the number after it.",
  },
  'Where is the title? It is ___ the middle of the page.': {
    why: "We say 'in the middle of' for the centre of something: in the middle of the page.",
    not: {
      at: "'At the middle' is not natural English.",
      on: "'On the middle' is not natural English.",
      to: "'To' shows movement.",
    },
    more: 'Compare: at the top, in the middle, at the bottom.',
    tip: 'Draw a page and label the three places in English.',
  },
  'Where is the picture of a castle? It is ___ the screen.': {
    why: "Pictures and words appear on a screen, so we say 'on the screen'.",
    not: {
      in: "'In the screen' is not how we talk about pictures.",
      at: "'Look at the screen' is right, but the picture is on it.",
      to: "'To' shows movement.",
    },
    more: "We say 'on TV' and 'on the screen'.",
    tip: "Learn 'on the screen' as a phrase.",
  },
  "Where is today's homework? It is ___ the board, below the date.": {
    why: "Writing is on the board, so today's homework is on the board.",
    not: {
      in: "'In the board' is not English.",
      at: "'At the board' is where a person stands, not where writing is.",
      to: "'To' shows movement.",
    },
    more: 'A teacher writes on the board, and you may stand at the board.',
    tip: 'Learn the difference: write on the board, stand at the board.',
  },
  'Where is Room 9? It is ___ the end of the corridor.': {
    why: "We say 'at the end of' for the last point of something long: at the end of the corridor.",
    not: {
      in: "'In the end' means finally. It is not a place.",
      on: "'On the end' is not the usual way to say this.",
      to: "'Go to the end' shows movement, but the room is at the end.",
    },
    more: 'Compare: at the end of the road, at the end of the film.',
    tip: "Learn 'at the end of' as a fixed phrase.",
  },
  'Where is the music room? It is ___ the first floor.': {
    why: "We say 'on the first floor' for the level of a building.",
    not: {
      in: "'In the first floor' is a common mistake. We say 'on'.",
      at: "'At the first floor' is not English.",
      to: "'Go to the first floor' shows movement.",
    },
    more: 'In Britain, the first floor is one floor above the ground floor.',
    tip: "Learn 'on the ground floor' and 'on the first floor'.",
  },
  'Where is the exit? It is ___ the left, past the library.': {
    why: "We say 'on the left' and 'on the right' for which side something is.",
    not: {
      in: "'In the left' is not English.",
      at: "'At the left' is not the usual way to give directions.",
      by: "'By the left' is not English.",
    },
    more: "In directions, 'turn left' tells you where to go, and 'on the left' tells you where something is.",
    tip: "Learn 'on the left' and 'on the right' as a pair.",
  },
  'Where is the school? It is ___ the bottom of the hill.': {
    why: "We say 'at the bottom of' for the lowest part of something: at the bottom of the hill.",
    not: {
      in: "'In the bottom' is not used for a hill.",
      on: "'On the bottom' is not used for a hill.",
      to: "'To' shows movement.",
    },
    more: "Compare 'at the top of the hill'.",
    tip: "Learn 'at the top of' and 'at the bottom of' as a pair.",
  },
  'Where is the class photo? It is ___ the newsletter, on page 2.': {
    why: 'Something printed as part of a newsletter, a newspaper or a magazine is in it. So the photo is in the newsletter.',
    not: {
      on: "'On page 2' is right for the page, but the photo is in the newsletter.",
      at: "'At the newsletter' is not English.",
      to: "'To' shows movement.",
    },
    more: "We say 'in the newspaper' but 'on page 2'.",
    tip: 'Learn the pair: in the newsletter, on page 2.',
  },
  "In our classroom, the teacher's desk stands between the board and the pupils. The bin is just to the left of the teacher's desk. Where is the bin? It is ___ the board.":
    {
      why: "The teacher's desk is in front of the board, and the bin is just beside the desk, so the bin is in front of the board too.",
      not: {
        behind:
          'The bin is beside the desk, which is in front of the board, so it is not behind the board.',
        above: 'A bin stands on the floor.',
        between: "'Between' needs two things: 'between the board' is not complete.",
      },
      more: 'To answer, put two facts together: where the desk is, and where the bin is.',
      tip: 'Draw a quick plan of a room to work out where things are.',
    },
  'Three posters hang in a row: the map at one end, the poem at the other end, and the clock poster in the only space left. Where is the clock poster? It is ___ the map and the poem.':
    {
      why: 'The map and the poem are at the two ends, and the clock poster fills the only space left, so it is between them.',
      not: {
        behind: 'The posters hang side by side, so none is behind another.',
        opposite: 'Opposite would mean on another wall, facing them.',
        below: 'Below would mean lower down.',
      },
      more: "'Between' is for one thing with something on each side.",
      tip: "Learn 'at one end' and 'at the other end'.",
    },
  "My desk is next to the window. Jo's desk is next to mine, on the other side. Where is my desk? It is ___ the window and Jo's desk.":
    {
      why: "The window is on one side of my desk and Jo's desk is on the other side, so my desk is between them.",
      not: {
        behind: 'Behind would mean at the back of them.',
        opposite: 'Opposite would mean facing them.',
        above: 'Above would mean higher up.',
      },
      more: "'On the other side' tells you the two things are on different sides.",
      tip: 'Practise with your own desk: what is on each side of it?',
    },
  'At the canteen, Leo is first in the queue, Ana is second and Tom is third. Where is Leo? He is ___ Ana.':
    {
      why: 'Leo is first and Ana is second, so Leo is in front of Ana.',
      not: {
        behind: 'Leo is first, so he is not behind Ana.',
        'next to': 'In a queue, people stand one behind another, not side by side.',
        opposite: 'Opposite would mean facing her.',
      },
      more: "In a queue, 'in front of' means nearer the start.",
      tip: 'Work it out from the order: first, second, third.',
    },
  'At the canteen, Leo is first in the queue, Ana is second and Tom is third. Where is Tom? He is ___ Leo.':
    {
      why: 'Tom is third and Leo is first, so Tom is behind Leo, with Ana between them.',
      not: {
        'in front of': 'Tom is third, so he is not in front of Leo.',
        'next to': 'Ana stands between them, so Tom is not next to Leo.',
        opposite: 'Opposite would mean facing him.',
      },
      more: "'Behind' is right even when someone else stands between them.",
      tip: 'Draw the queue as a line to check.',
    },
  'A: Where shall I put the dictionaries?\nB: Back ___ the shelf, please. We keep them up there.': {
    why: "Dictionaries stand on a shelf, and 'up there' means high up, so they go back on the shelf.",
    not: {
      in: "We say 'on the shelf', not 'in the shelf'.",
      under: "Under the shelf would be low down, not 'up there'.",
      'next to': "Next to the shelf would not be 'up there' on it.",
    },
    more: "'Put back' means put something where it was before.",
    tip: "Learn 'put back' and 'put away'.",
  },
  "A: I can't find my coat.\nB: Look ___ your peg. That's where you hang it every morning.": {
    why: 'You hang a coat on a peg, so B says to look on the peg.',
    not: {
      in: 'A peg has no space for a coat to be in.',
      under: 'B says you hang it there, so it is on the peg, not under it.',
      between: "'Between' needs two things.",
    },
    more: 'A peg is a hook on a wall for coats and bags.',
    tip: "Learn 'hang ... on': 'Hang your coat on your peg.'",
  },
  'The art room is the last room along the corridor. The music room is next to it, and the library is next to the music room. Where is the music room? It is ___ the art room and the library.':
    {
      why: 'The music room has the art room on one side and the library on the other, so it is between them.',
      not: {
        opposite: 'Opposite would mean across the corridor.',
        above: 'Above would mean upstairs.',
        behind: 'Behind would mean at the back of them.',
      },
      more: 'Put the three rooms in a line to see the order.',
      tip: 'Draw the corridor and write the rooms in order.',
    },
  'The canteen is on the ground floor, the science labs are on the first floor, and the library is on the second floor. Where is the library? It is ___ the science labs.':
    {
      why: 'The second floor is higher than the first floor, so the library is above the science labs.',
      not: {
        below: 'Below would mean lower. The library is higher.',
        between: 'The labs are between the canteen and the library, not the library.',
        opposite: 'Opposite would mean on the same floor, facing them.',
      },
      more: 'Floors are counted up from the ground floor.',
      tip: 'Draw the floors as a pile of boxes.',
    },
  'The canteen is on the ground floor, the science labs are on the first floor, and the library is on the second floor. Where is the canteen? It is ___ the science labs.':
    {
      why: 'The ground floor is lower than the first floor, so the canteen is below the science labs.',
      not: {
        above: 'Above would mean higher. The canteen is on the lowest floor.',
        between: 'The labs are in the middle, not the canteen.',
        opposite: 'Opposite would mean across from them on the same floor.',
      },
      more: 'The ground floor is the floor at street level.',
      tip: "Learn 'downstairs' for the ground floor.",
    },
  "A: Where's Mr Shah?\nB: He's ___ the staff room, marking books.": {
    why: "We use 'in' for being in a room, so Mr Shah is in the staff room.",
    not: {
      on: "'On the staff room' is not English.",
      at: "'At the staff room' is not natural. We say 'in' for a room.",
      to: "'To' shows movement: 'He went to the staff room.'",
    },
    more: 'The staff room is a room just for teachers and the other staff.',
    tip: "Learn 'in' with rooms: in the hall, in the staff room.",
  },
  "A: Where's the stapler?\nB: It's ___ the drawer of my desk. Open it and you'll see it.": {
    why: 'You open the drawer to see the stapler, so it is in the drawer.',
    not: {
      on: 'If it were on the drawer, you would see it without opening the drawer.',
      at: "'At the drawer' is not English here.",
      under: 'If it were under the drawer, opening the drawer would not help.',
    },
    more: 'Drawers keep small things tidy and out of sight.',
    tip: "Learn 'open the drawer' and 'shut the drawer'.",
  },
  'Where is the water fountain? It is ___ the corridor, by the door of the hall.': {
    why: 'A corridor is a space you walk along, and the fountain is in that space, so it is in the corridor.',
    not: {
      on: "'On the corridor' is not English.",
      at: "'At the corridor' is not English.",
      to: "'To' shows movement.",
    },
    more: "We use 'in' with passages and rooms: in the corridor, in the hall.",
    tip: "Learn 'in the corridor' as a phrase.",
  },
  'Where are the scissors? They are ___ the top drawer, with the glue.': {
    why: 'Things kept in a drawer are in it, so the scissors are in the top drawer.',
    not: {
      on: "'On the top drawer' would mean on its outside.",
      at: "'At the top drawer' is not English.",
      to: "'To' shows movement.",
    },
    more: "'The top drawer' is the highest one.",
    tip: "Learn 'top', 'middle' and 'bottom' drawer.",
  },
  'Where is the fire exit? It is ___ the bottom of the stairs.': {
    why: "We say 'at the bottom of the stairs' for the lowest point of them.",
    not: {
      in: "'In the bottom of the stairs' is not English.",
      on: "'On the bottom' is not used for stairs.",
      to: "'To' shows movement.",
    },
    more: "Compare 'at the top of the stairs'.",
    tip: "Learn 'at the bottom of' with stairs, hills and pages.",
  },
  'Look at the seating plan. Row 1 is nearest the board. Ali sits in row 2, and Mia sits in row 3, at the same desk number as Ali. Where is Mia? She is ___ Ali.':
    {
      why: 'Row 3 is further from the board than row 2, and Mia is at the same desk number, so she sits behind Ali.',
      not: {
        'in front of': 'Row 2 is nearer the board, so Ali is in front, not Mia.',
        opposite: 'Opposite would mean facing Ali.',
        between: "'Between' needs two things.",
      },
      more: 'A seating plan shows where everyone sits.',
      tip: 'Work out the direction first: which row is nearest the front?',
    },
  'Look at the seating plan. Row 1 is nearest the board. Ali sits in row 2, and Mia sits in row 3, at the same desk number as Ali. Where is Ali? He is ___ Mia.':
    {
      why: 'Row 2 is nearer the board than row 3, so Ali, in row 2, is in front of Mia.',
      not: {
        behind: 'Ali is nearer the board, so he is not behind Mia.',
        opposite: 'Opposite would mean facing her.',
        between: "'Between' needs two things.",
      },
      more: 'Row 1 is at the front, near the board.',
      tip: 'Draw the rows to check.',
    },
  'Where are the coats? They are ___ the pegs in the corridor.': {
    why: 'Coats hang on pegs, so the coats are on the pegs.',
    not: {
      in: 'A peg has no space for a coat to be in.',
      at: "'At the pegs' is not the way to say where coats hang.",
      under: 'Under the pegs would be on the floor.',
    },
    more: "We say 'hang on' for coats and pictures.",
    tip: "Learn 'hang up your coat' and 'on the peg'.",
  },
  "Where is the word 'river'? It is ___ the end of the sentence.": {
    why: "We say 'at the end of the sentence' for the last place in it.",
    not: {
      in: "'In the end' means finally. It is not a place in a sentence.",
      on: "'On the end' is not used for a sentence.",
      to: "'To' shows movement.",
    },
    more: "Compare 'at the start of the sentence'.",
    tip: "Learn 'at the start of' and 'at the end of' as a pair.",
  },
  'The computer is on the left of the printer, and the scanner is on its right. Where is the printer? It is ___ the computer and the scanner.':
    {
      why: 'The computer is on one side of the printer and the scanner is on the other, so the printer is between them.',
      not: {
        behind: 'Behind would mean at the back of them.',
        above: 'Above would mean higher up.',
        opposite: 'Opposite would mean facing them.',
      },
      more: "'On its right' means on the printer's right side.",
      tip: "Learn 'on the left of' and 'on the right of'.",
    },
}
