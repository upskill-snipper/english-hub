import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * In the Classroom: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/classroom-objects.ts). Written with AI
 * on 16 October 2026 and checked against each question and its options, as
 * the founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  pencil: {
    why: 'The picture shows a pencil, a thin wooden tool with a sharp tip that we write and draw with. You can say: I write with a pencil.',
    not: {
      pen: 'A pen writes with ink, and you cannot rub the ink out easily. The picture shows a pencil with a wooden body.',
      crayon: 'A crayon is thick and made of coloured wax. A pencil is thin and has a sharp point.',
      marker:
        'A marker is a thick pen with a soft tip that makes bold lines. The picture shows a thin pencil.',
    },
    more: 'Pencil marks can be rubbed out. That makes a pencil good for practice, drawing and maths.',
    tip: "Say 'a pencil' and 'a pencil case' together. Putting the two words together helps you remember them.",
  },
  pen: {
    why: 'The picture shows a pen, a tool that writes with ink. We use a pen for neat writing. You can say: Please write your name with a pen.',
    not: {
      pencil:
        'A pencil has a wooden body and a sharp point that makes grey marks. The picture shows a pen that writes with ink.',
      brush:
        'A brush has soft hairs and is used for painting. The picture shows a pen with a hard tip.',
      ruler: 'A ruler is a flat stick with numbers for measuring. The picture shows a pen.',
    },
    more: 'A pen writes with ink, and blue and black are the usual colours in school.',
    tip: "Learn 'pen' and 'pencil' as a pair. We use a pen for ink and a pencil for marks that we can rub out.",
  },
  ruler: {
    why: 'The picture shows a ruler, a flat stick with numbers and lines. We use it to measure and to draw straight lines. You can say: Measure the line with a ruler.',
    not: {
      pencil:
        'A pencil is for writing and drawing. It has no numbers. The picture shows a flat ruler with lines.',
      rubber: 'A rubber is a small soft block that removes pencil marks. It does not measure.',
      stapler: 'A stapler joins sheets of paper with metal staples. It does not measure.',
    },
    more: 'A ruler in the UK usually measures in centimetres. Some rulers also show inches.',
    tip: "Practise the question 'How long is it?' and answer with a ruler: 'It is ten centimetres.'",
  },
  sponge: {
    why: 'The picture shows a sponge, a soft block full of small holes that holds water. We use a sponge to clean a table or a board. You can say: Wipe the table with the sponge.',
    not: {
      rubber:
        'A rubber is a small firm block that removes pencil marks. A sponge is soft, full of holes and holds water.',
      cloth: 'A cloth is a flat piece of fabric. The picture shows a thick soft block with holes.',
      glue: 'Glue is a sticky liquid that joins things together. The picture shows a soft block with holes.',
    },
    more: 'A sponge holds a lot of water because it has so many small holes.',
    tip: 'Learn cleaning words together: sponge, cloth, bucket, mop, broom.',
  },
  scissors: {
    why: 'The picture shows a pair of scissors, a tool with two blades that cut paper. You can say: Can I borrow your scissors, please?',
    not: {
      knife: 'A knife has one blade and a handle. Scissors have two blades that cut together.',
      stapler: 'A stapler joins pages with metal staples. It does not cut.',
      clip: 'A clip holds papers together. It does not cut.',
    },
    more: "'Scissors' is always plural: 'These scissors are sharp.' We say 'a pair of scissors' for one tool.",
    tip: "Ask for one tool with 'a pair of': 'Have you got a pair of scissors?'",
  },
  books: {
    why: 'The picture shows a pile of books. A book has pages that we read or write in. The word is plural because there is more than one. You can say: Open your books.',
    not: {
      boxes:
        'Boxes are square containers for things. The picture shows things with covers and pages.',
      bricks: 'Bricks are hard blocks used to build walls. The picture shows books with pages.',
      bags: 'Bags are soft containers for carrying things. The picture shows books.',
    },
    more: "In class the teacher often says: 'Open your books' and 'Close your books'.",
    tip: "Learn the two classroom commands together: 'Open your books.' 'Close your books.'",
  },
  textbook: {
    why: 'The picture shows an open book. A textbook is a book that we study from at school, with lessons and exercises. You can say: Turn to page ten in your textbook.',
    not: {
      envelope:
        'An envelope is a paper cover for a letter. The picture shows an open book with pages.',
      folder: 'A folder holds loose papers. It is not a book with pages joined together.',
      calculator:
        'A calculator is an electronic tool with buttons. The picture shows an open book with pages.',
    },
    more: 'A textbook teaches a subject, such as maths or English. A notebook is a book that you write in.',
    tip: "Put the subject before the word: 'my English textbook', 'my maths textbook'.",
  },
  notebook: {
    why: 'The picture shows a notebook, a small book with empty pages where we write notes. You can say: I write new words in my notebook.',
    not: {
      poster:
        'A poster is a big sheet of paper that we hang on a wall. The picture shows a small book.',
      folder: 'A folder holds loose papers. A notebook has pages that are joined together.',
      envelope: 'An envelope is a paper cover for a letter. The picture shows a book with pages.',
    },
    more: 'A notebook is for writing, and a textbook is for reading and studying. In British schools a book for classwork is often called an exercise book.',
    tip: 'Keep a notebook for new English words. Write each word with an example sentence.',
  },
  'exercise book': {
    why: "The picture shows a book with a coloured cover. Of the four words, only 'exercise book' is a book. At school, an exercise book is the book we write classwork in. You can say: Open your exercise book and write the date.",
    not: {
      calculator:
        'A calculator is an electronic tool with buttons. The picture shows a book with pages.',
      wallet: 'A wallet is a small case for money and cards. The picture shows a book with pages.',
      poster:
        'A poster is one big sheet of paper for a wall. The picture shows a book with many pages.',
    },
    more: 'An exercise book is like a notebook, but it is the one you use for lessons at school.',
    tip: "Write your name and the subject on the front of your exercise book. Say: 'This is my English exercise book.'",
  },
  'school bag': {
    why: 'The picture shows a school bag, a bag that students carry on their back with their books and lunch inside. You can say: My school bag is heavy today.',
    not: {
      suitcase:
        'A suitcase is a large case for clothes on a journey. The picture shows a soft bag with straps for school.',
      basket:
        'A basket is made of woven strips and is used for shopping or picnics. The picture shows a bag with straps.',
      pocket:
        'A pocket is a small part of your clothes where you put small things. The picture shows a bag.',
    },
    more: "You can also say 'backpack' or 'rucksack' for a bag that you carry on your back.",
    tip: "Check your school bag the night before: 'Do I have my books, my pencil case and my lunch?'",
  },
  crayon: {
    why: 'The picture shows a crayon, a thick stick of coloured wax. Children use it to colour pictures. You can say: I colour the sun with a yellow crayon.',
    not: {
      chalk:
        'Chalk is a soft stick that leaves dust, and we write with it on a blackboard. A crayon is waxy and is used on paper.',
      pen: 'A pen writes with ink and has a thin tip. The picture shows a thick stick of wax.',
      pin: 'A pin is a thin, sharp piece of metal. It is not for drawing. The picture shows a coloured stick.',
    },
    more: "Crayons come in boxes of many colours. In British English the verb 'colour' has the letters 'ou'.",
    tip: "Name the colour first: 'a red crayon', 'a blue crayon'. In English the colour comes before the noun.",
  },
  paintbrush: {
    why: 'The picture shows a paintbrush, a tool with soft hairs on a thin handle. We use it to put paint on paper. You can say: She washes the paintbrush in water.',
    not: {
      pencil:
        'A pencil is hard and writes in grey. A paintbrush has soft hairs and carries wet paint.',
      feather: "A feather is a light part of a bird's body. It is not the usual tool for painting.",
      broom:
        'A broom is a big brush for sweeping the floor. A paintbrush is small and is used for painting.',
    },
    more: "'Paintbrush' is one word. It comes from 'paint' and 'brush'.",
    tip: 'Learn art words in pairs: paint and paintbrush, pencil and pencil case.',
  },
  paints: {
    why: 'The picture shows a palette with blobs of colour. These are paints, the coloured liquids that we put on paper with a brush. You can say: We use paints in art lessons.',
    not: {
      inks: 'Ink is a liquid for writing or printing, and it usually comes in a pen or a bottle. The picture shows coloured paint on a palette.',
      dyes: 'Dyes are used to change the colour of cloth. The picture shows paints for pictures.',
      crayons: 'Crayons are solid sticks of wax. The picture shows soft, wet colours on a palette.',
    },
    more: "A palette is the board where an artist mixes colours. 'Paints' is plural because there are many colours.",
    tip: "Practise colour words: 'Mix red and yellow to make orange.'",
  },
  'set square': {
    why: 'The picture shows a set square, a flat plastic triangle with a right angle. We use it in maths to draw straight lines and angles. You can say: Draw the line with a set square.',
    not: {
      pencil: 'A pencil is a long writing tool. The picture shows a flat triangle.',
      compass: 'A compass has two legs and draws circles. The picture shows a triangle.',
      protractor:
        'A protractor is a flat half circle with numbers, and it measures angles. The picture shows a triangle.',
    },
    more: 'A set square has a right angle, which is 90 degrees, like the corner of a book.',
    tip: "Say the shape first: 'This is a triangle. It is a set square.'",
  },
  abacus: {
    why: 'The picture shows an abacus, a frame with rows of beads that people use to count. You can say: The abacus helps children learn to add.',
    not: {
      calculator:
        'A calculator is an electronic tool with buttons and a screen. The picture shows a frame with beads.',
      clock:
        'A clock shows the time. It has a round face with hands. The picture shows rows of beads.',
      till: 'A till is the machine in a shop where the shop assistant puts the money. The picture shows beads for counting.',
    },
    more: 'People have used the abacus for a very long time. Each bead stands for a number.',
    tip: "'Abacus' is a rare word, so say it slowly: AB-a-cus.",
  },
  notepad: {
    why: 'The picture shows a notepad, a small pad of paper joined at the top. We use it to write short notes. You can say: I write a list on my notepad.',
    not: {
      letter:
        'A letter is a message that we write and post to someone. A notepad is for writing notes for ourselves.',
      card: 'A card is one stiff piece of paper, such as a birthday card. A notepad has many sheets.',
      leaflet: 'A leaflet is a small printed paper with information. A notepad is for writing on.',
    },
    more: "'Notepad' comes from 'note' and 'pad'. A pad is many sheets of paper joined at one edge.",
    tip: "'Note' also means a short message. Use 'write a note' or 'make a note' in your own sentences.",
  },
  worksheet: {
    why: 'The picture shows a sheet of paper and a pencil. At school, a sheet that you write your answers on is a worksheet. It has questions or tasks to do. You can say: Please finish the worksheet.',
    not: {
      poster:
        'A poster is a large paper picture or notice that we put on a wall. A worksheet is small, and students write on it.',
      ticket:
        'A ticket is a small paper that lets you enter a place or travel. A worksheet has tasks to do.',
      receipt:
        'A receipt is a small paper from a shop that shows what you paid. A worksheet has questions.',
    },
    more: 'A worksheet often has questions, gaps to fill or things to match. The teacher gives it out and then collects it.',
    tip: 'Write your name and the date at the top of every worksheet.',
  },
  'paper clip': {
    why: 'The picture shows a paper clip, a small bent piece of wire that holds sheets of paper together. You can say: I put a paper clip on my homework.',
    not: {
      'drawing pin':
        'A drawing pin has a flat head and a sharp point, and it fixes paper to a board. A paper clip is bent wire.',
      staple:
        'A staple is a small piece of metal that goes through the paper. A paper clip only holds the paper.',
      peg: 'A peg holds clothes on a washing line. It is bigger than a paper clip and made of wood or plastic.',
    },
    more: 'A paper clip is easy to take off, so the paper stays whole. A staple makes small holes.',
    tip: "Remember the two parts: paper + clip. A 'clip' holds things together.",
  },
  'drawing pin': {
    why: 'The picture shows a drawing pin, a pin with a round flat head. We push it into a board to fix paper to it. You can say: Put the poster up with a drawing pin.',
    not: {
      needle:
        'A needle is long and thin, with a small hole for thread. We use it for sewing. The picture shows a pin with a round head.',
      nail: 'A nail is bigger and is hit into wood with a hammer. A drawing pin is small and is pushed in with a finger.',
      'paper clip':
        'A paper clip is a bent piece of wire that holds sheets of paper together. It has no sharp point.',
    },
    more: "In American English a drawing pin is called a 'thumbtack'. We use drawing pins on a noticeboard.",
    tip: "Say 'a drawing pin' for one and 'drawing pins' for more than one.",
  },
  folder: {
    why: 'The picture shows a folder, a cover with tabs that holds loose papers together. You can say: I keep my homework in a folder.',
    not: {
      drawer:
        'A drawer is the part of a desk or cupboard that slides in and out. The picture shows a thin cover for papers.',
      box: 'A box is a container with sides and a lid. The picture shows a flat folder with tabs.',
      tray: 'A tray is a flat dish for carrying things or holding papers on a desk. A folder is a cover that closes around papers.',
    },
    more: 'A folder keeps your papers neat and stops them getting lost.',
    tip: 'Use a different colour of folder for each subject, and write the subject on the front.',
  },
  file: {
    why: 'The picture shows a file, a folder that keeps papers in order. In school a file often holds worksheets and notes. You can say: Put the paper in your file.',
    not: {
      bag: 'A bag is for carrying things. The picture shows a flat folder for papers.',
      shelf:
        'A shelf is a board on a wall that holds things. The picture shows a folder for papers.',
      cupboard:
        'A cupboard is a piece of furniture with doors for storing things. The picture shows a small folder.',
    },
    more: 'A file can be a folder for papers, and it can also be a document on a computer. Both keep information in one place.',
    tip: "Say 'a file of papers' and 'a computer file'. The same word has two uses.",
  },
  clipboard: {
    why: 'The picture shows a clipboard, a small board with a clip at the top. It holds paper so you can write while you stand or walk. You can say: The teacher holds a clipboard.',
    not: {
      whiteboard:
        'A whiteboard is a large board on a wall. Teachers write on it with pens. A clipboard is small and you carry it.',
      noticeboard:
        'A noticeboard is a board on a wall where notices are pinned. The picture shows a small board that you hold.',
      tray: 'A tray is a flat dish for carrying things. A clipboard has a clip to hold paper.',
    },
    more: "The name is 'clip' plus 'board'. Teachers and doctors often use a clipboard.",
    tip: "Learn the 'board' words together: clipboard, whiteboard, blackboard, noticeboard.",
  },
  'paper clips': {
    why: "The picture shows two paper clips joined together. We say 'paper clips' because there is more than one. You can say: I need some paper clips for my papers.",
    not: {
      stapler:
        'A stapler is a machine that pushes a metal staple through paper. The picture shows bent wire clips.',
      'hole punch':
        'A hole punch makes round holes in paper so that it fits in a file. The picture shows clips, not a machine.',
      tape: 'Tape is a thin sticky strip. The picture shows metal clips.',
    },
    more: "The plural is 'paper clips': we add 's'. One is 'a paper clip'. They hold sheets of paper together.",
    tip: "Say 'a box of paper clips'. A box usually holds many of them.",
  },
  calendar: {
    why: 'The picture shows a calendar, a page with the days of the month on it. We use a calendar to see the date. You can say: Look at the calendar. Today is the tenth.',
    not: {
      clock:
        'A clock shows the time of day with hands or numbers. A calendar shows the date, which means the day and the month.',
      envelope:
        'An envelope is a paper cover for a letter. The picture shows a page with dates on it.',
      ticket:
        'A ticket is a small paper that lets you enter a place or travel. It is not a list of dates.',
    },
    more: 'A calendar shows the days of the week and the months of the year. Many classrooms have one on the wall.',
    tip: "Use a calendar to practise dates: 'My birthday is on the third of June.'",
  },
  bottle: {
    why: 'The picture shows a bottle. A bottle holds a liquid, such as water, juice or soap. This one has a pump on top: you press it, and the liquid comes out. You can say: My water bottle is in my bag.',
    not: {
      pencil:
        'A pencil is a long wooden tool for writing. It is not a bottle, and it holds no liquid.',
      ruler: 'A ruler is a flat stick for measuring. It is not a bottle.',
      chair: 'A chair is a seat with four legs. It is not a bottle.',
    },
    more: "We say 'a bottle of water' to say what is inside it. Glue, paint and ink often come in bottles too.",
    tip: "Use 'a bottle of' to say what is inside: a bottle of water, a bottle of milk.",
  },
  bucket: {
    why: 'The picture shows a bucket, a round container with a handle. We carry water or sand in it. You can say: Fill the bucket with water.',
    not: {
      bin: 'A bin is for rubbish. It stays in one place. A bucket has a handle and carries things.',
      bowl: 'A bowl is a wide round dish for food. It is shallower than a bucket and has no handle.',
      jug: 'A jug has a spout for pouring and a handle at the side. The picture shows an open bucket with a handle on top.',
    },
    more: 'In school a cleaner may use a bucket and a mop to wash the floor.',
    tip: "Say 'a bucket of water'. Use 'of' to say what is inside.",
  },
  bin: {
    why: 'The picture shows a bin, a container for rubbish. In school we put paper and wrappers in the bin. You can say: Put the paper in the bin.',
    not: {
      bucket:
        'A bucket has a handle on top and carries water or sand. The picture shows a bin for rubbish.',
      box: 'A box is a container with sides and a lid or flaps, often for storing things. The picture shows an open bin for rubbish.',
      bag: 'A bag is soft and carries things from place to place. A bin stays in one place and holds rubbish.',
    },
    more: "British people say 'bin'. Americans say 'trash can'. We say 'litter bin' for a bin outside.",
    tip: "Say 'Put it in the bin' when you want someone to throw something away.",
  },
  chair: {
    why: 'The picture shows a chair, a seat for one person with four legs and a back. You can say: Sit on your chair, please.',
    not: {
      stool: 'A stool is a seat with no back. The picture shows a seat with a back.',
      bench:
        'A bench is a long seat for two or more people. The picture shows a seat for one person.',
      sofa: 'A sofa is a long, soft seat for two or three people. The picture shows a single seat.',
    },
    more: 'In a classroom every student has a chair and a desk.',
    tip: "Learn the classroom commands 'Sit down' and 'Stand up'. They are opposites.",
  },
  lift: {
    why: 'The picture shows a lift, a small room that carries people up and down a building. Americans call it an elevator. You can say: We take the lift to the third floor.',
    not: {
      stairs: 'Stairs are steps that you walk up or down. A lift carries you, so you do not walk.',
      window:
        'A window is a glass opening in a wall. The picture shows a lift, a small room with doors.',
      ramp: 'A ramp is a slope that people walk or roll up, for example in a wheelchair. It does not carry you.',
    },
    more: 'Many schools have a lift so that people who cannot use stairs can reach every floor.',
    tip: "Say 'go up in the lift' and 'go down in the lift'. We also say 'take the lift'.",
  },
  door: {
    why: 'The picture shows a door. We open a door to go into or out of a room. You can say: Please close the door.',
    not: {
      window:
        'A window is a glass opening in a wall that lets in light. The picture shows a solid door.',
      wall: 'A wall is the side of a room. A door is the part of the wall that opens.',
      gate: 'A gate is a door in a fence, outside. The picture shows a door for a room.',
    },
    more: 'We open and close a door. We also knock on a door before we go in.',
    tip: "Learn the polite phrases 'Knock on the door' and 'Come in'.",
  },
  window: {
    why: 'The picture shows a window, a glass opening in a wall that lets in light and air. You can say: Please open the window. It is hot in here.',
    not: {
      door: 'A door is for walking through. The picture shows a window with pieces of glass that we look through.',
      mirror:
        'A mirror is a piece of glass that shows your own face. A window lets you see outside.',
      screen:
        'A screen shows pictures from a computer or a television. The picture shows a window with pieces of glass.',
    },
    more: 'A window has a frame and pieces of glass. We can open some windows to let in fresh air.',
    tip: "Learn the phrase 'look out of the window'. We use 'out of' with window.",
  },
  clock: {
    why: 'The picture shows a clock, a round face with numbers and hands that tells the time. You can say: The clock says ten past nine.',
    not: {
      watch:
        'A watch is a small clock that you wear on your wrist. The picture shows a bigger clock that stands up.',
      timer:
        'A timer counts down a set time, for example five minutes. A clock shows the time of day.',
      bell: 'A bell makes a ringing sound. A clock shows the time. The picture shows a clock face.',
    },
    more: 'In a classroom the clock helps everyone see when a lesson starts and ends.',
    tip: "Say the time with 'It is': 'It is ten past nine.' Use 'o'clock' for the hour: 'nine o'clock'.",
  },
  bell: {
    why: "The picture shows a bell, a metal shape that rings when it is shaken or hit. A school bell tells students when a lesson starts or ends. You can say: The bell rings at nine o'clock.",
    not: {
      clock:
        'A clock has numbers and hands to show the time. The picture shows a bell shape with no numbers.',
      horn: 'A horn makes a loud sound when you press it, like the horn of a car. The picture shows a bell that rings.',
      whistle:
        'A whistle is a small tube that you blow to make a high sound. The picture shows a bell that rings.',
    },
    more: "The verb is 'ring': 'The bell rings.' The past tense is 'rang': 'The bell rang.'",
    tip: "Say 'the school bell' and 'the doorbell'. Both words end in 'bell'.",
  },
  light: {
    why: 'The picture shows a light bulb. A light is what makes a room bright, and we switch it on and off. You can say: Please turn on the light.',
    not: {
      plug: 'A plug goes into a wall socket to bring electricity to a machine. It does not shine.',
      torch:
        'A torch is a small light that you carry in your hand. The picture shows a bulb that is fixed in a lamp or on a ceiling.',
      candle: 'A candle is a stick of wax with a flame. The picture shows an electric bulb.',
    },
    more: "We say 'turn on the light' and 'turn off the light'. We can also say 'switch on' and 'switch off'.",
    tip: "Learn the pair 'turn on' and 'turn off'. They work with lights, computers and the television.",
  },
  computer: {
    why: 'The picture shows a computer, a machine with a screen that we use to write, learn and find information. You can say: I use the computer to do my homework.',
    not: {
      camera:
        'A camera takes photographs. The picture shows a big screen on a stand, which is a computer.',
      radio:
        'A radio plays sound and music. It does not show words and pictures on a large screen.',
      phone:
        'A phone is small and we hold it in our hand. The picture shows a large screen on a stand.',
    },
    more: 'A computer has a screen, a keyboard and a mouse.',
    tip: 'Learn the parts of the computer: screen, keyboard, mouse and printer.',
  },
  keyboard: {
    why: 'The picture shows a keyboard, the set of keys that we press to type letters and numbers into a computer. You can say: I type my name on the keyboard.',
    not: {
      screen:
        'A screen shows words and pictures. The picture shows rows of keys, so it is a keyboard.',
      mouse:
        'A computer mouse is small, and you move it with one hand to point at things. The picture shows many keys.',
      printer: 'A printer puts words from the computer onto paper. The picture shows rows of keys.',
    },
    more: "Each button on a keyboard is called a key. The verb 'type' means to write with a keyboard.",
    tip: "Use 'type' with a keyboard: 'Type your name here.'",
  },
  mouse: {
    why: 'The picture shows a computer mouse, a small device that you move with your hand to point at things on the screen. You can say: Click the mouse to open the file.',
    not: {
      keyboard:
        'A keyboard has many keys for typing. The picture shows a small device with a button for clicking.',
      remote:
        'A remote control is for a television and works from far away. A computer mouse is used on a table.',
      plug: 'A plug goes into a wall socket to bring electricity. A mouse moves the pointer on the screen.',
    },
    more: 'The word is also an animal. A computer mouse got its name because its shape and its wire looked like a small animal with a tail.',
    tip: "Use 'click' with a mouse: 'Click on the icon.' 'Click' is also the sound it makes.",
  },
  printer: {
    why: 'The picture shows a printer, a machine that puts words and pictures from a computer onto paper. You can say: Send the worksheet to the printer.',
    not: {
      scanner:
        'A scanner is the opposite of a printer: it copies a paper into the computer. The picture shows paper coming out.',
      computer:
        'A computer has a screen and a keyboard. The picture shows a machine that gives out paper.',
      speaker: 'A speaker plays sound. The picture shows a machine that prints on paper.',
    },
    more: "A printer puts ink on paper. The word comes from the verb 'print'.",
    tip: "Learn the verb 'print': 'I print my homework at school.'",
  },
  projector: {
    why: 'The picture shows a projector, a machine that shines a picture onto a wall or a screen. Teachers use one to show slides and videos. You can say: The teacher turns on the projector.',
    not: {
      speaker:
        'A speaker plays sound. It does not show pictures. A projector shows pictures on a wall or a screen.',
      screen:
        'A screen is the flat place where the picture appears. The projector is the machine that sends the picture to it.',
      torch: 'A torch gives light but does not make a picture. A projector shows pictures.',
    },
    more: 'The picture shows an old film projector. In many classrooms today a projector is a small box fixed to the ceiling.',
    tip: "Use 'project' as a verb: 'The teacher projects the slide on the screen.'",
  },
  map: {
    why: 'The picture shows a map, a drawing of a place, such as a country or a town, that shows where things are. You can say: Look at the map to find London.',
    not: {
      poster:
        'A poster is a large printed picture or notice for a wall. A map shows places and roads.',
      painting:
        'A painting is a picture made with paint. A map is a plan that shows where places are.',
      chart: 'A chart shows numbers or facts in a table or a graph. A map shows places.',
    },
    more: "We use a map to find our way. A 'world map' shows all the countries.",
    tip: "Say 'on the map': 'Find Spain on the map.' We use 'on' with a map.",
  },
  globe: {
    why: 'The picture shows the Earth as a ball. A globe is a round model like this, with the land and the seas on it. You can say: Show me Africa on the globe.',
    not: {
      ball: 'A ball is round too, but it has no countries or seas on it. The picture shows the Earth.',
      map: 'A map is flat. A globe is round, like the Earth.',
      lamp: 'A lamp gives light. The picture shows the round Earth with land and seas.',
    },
    more: "'Globe' also means the whole world: 'People travel all around the globe.'",
    tip: "Use 'on the globe' to point to a place. We say 'on' with both a map and a globe.",
  },
  microscope: {
    why: 'The picture shows a microscope, a tool that makes very small things look big. Scientists use it to look at tiny things that we cannot see with our eyes. You can say: We look at a leaf under the microscope.',
    not: {
      telescope:
        'A telescope makes faraway things look closer, such as the moon. A microscope makes tiny things look bigger.',
      camera:
        'A camera takes photographs. The picture shows a tool you look into to see tiny things.',
      magnet:
        'A magnet pulls iron things towards it. The picture shows a tool that makes small things look big.',
    },
    more: "'Micro' means very small, and 'scope' comes from a word meaning 'to look'. So a microscope is for looking at very small things.",
    tip: 'Learn the pair: a microscope is for small things, and a telescope is for faraway things.',
  },
  magnet: {
    why: 'The picture shows a magnet, a piece of metal that pulls things made of iron towards it. You can say: The magnet picks up the pin.',
    not: {
      battery:
        'A battery stores electricity to power things such as a torch. The picture shows a horseshoe shape that pulls iron.',
      bell: 'A bell rings when you shake it. The picture shows a magnet that pulls iron things.',
      clip: 'A paper clip is a small bent wire. A magnet can pick it up, but the picture shows the magnet.',
    },
    more: 'A magnet pulls iron and steel, but not wood, paper or plastic. A magnet has two ends, called poles.',
    tip: "Use the verb 'attract' for what a magnet does: 'A magnet attracts iron and steel.' It means 'pulls towards'.",
  },
  telescope: {
    why: 'The picture shows a telescope, a long tube that makes faraway things, such as stars, look bigger and closer. You can say: We looked at the moon through the telescope.',
    not: {
      microscope:
        'A microscope makes very small things look bigger. A telescope is for faraway things, such as the moon.',
      binoculars:
        'Binoculars have two tubes that you hold up to both eyes. The picture shows one long tube.',
      lamp: 'A lamp gives light. The picture shows a tube for looking at faraway things.',
    },
    more: "'Tele' means far away. So a telescope is for seeing far away, and a television shows pictures from far away too.",
    tip: "Say 'look through the telescope'. For a microscope we say 'look under the microscope'.",
  },
  'test tube': {
    why: 'The picture shows a test tube, a thin glass tube with a round bottom. Scientists use it to hold small amounts of liquid. You can say: Pour the liquid into the test tube.',
    not: {
      bottle:
        'A bottle is wider and has a narrow neck, for drinks. A test tube is a thin tube that is open at the top.',
      jar: 'A jar is wide, with a lid, for food such as jam. A test tube is thin and long.',
      cup: 'A cup is a wide container with a handle for drinks. The picture shows a thin tube.',
    },
    more: "Test tubes are used in science lessons. 'Test' here means an experiment to find something out.",
    tip: 'Learn the science words together: test tube, microscope, magnet, experiment.',
  },
  chart: {
    why: 'The picture shows a chart, a drawing with bars that shows numbers or facts clearly. You can say: The chart shows how many students like football.',
    not: {
      map: 'A map shows places and roads. The picture shows bars that compare numbers.',
      list: 'A list is words or numbers written one under the other. The picture shows coloured bars.',
      photo:
        'A photo is a picture taken with a camera. The picture shows bars drawn to show numbers.',
    },
    more: 'This kind of chart is a bar chart. Each bar shows a number, and a taller bar means a bigger number.',
    tip: "Describe a chart with comparing words: 'The red bar is higher than the blue bar.'",
  },
  school: {
    why: 'The picture shows a school, a large building where children learn with teachers. You can say: I walk to school every day.',
    not: {
      library:
        'A library is a place with many books to borrow and read. The picture shows a school.',
      office:
        'An office is a place where people work at desks. The picture shows a school for students.',
      shop: 'A shop is a place where we buy things. The picture shows a building for learning.',
    },
    more: "We say 'at school' and 'go to school' with no 'the'. We say 'the school' for one particular building.",
  },
  'graduation cap': {
    why: 'The picture shows a graduation cap, a flat square hat that students wear on the day they finish their studies. You can say: She wore a graduation cap on her last day.',
    not: {
      scarf:
        'A scarf is a long piece of cloth that goes around your neck. The picture shows a hat for the head.',
      helmet:
        'A helmet is a hard hat that protects your head, for example on a bike. The picture shows a flat cloth hat.',
      crown:
        'A crown is a gold hat worn by a king or queen. The picture shows a flat black hat for students.',
    },
    more: 'A student graduates when they finish a course. Graduation is the special day, and the cap is part of the clothes.',
    tip: "Learn the verb and the noun together: 'graduate' and 'graduation'.",
  },
  sign: {
    why: "The picture shows a sign: a flat board on a stick. We write words or draw pictures on a sign, such as 'Exit' or 'Quiet, please', so that people can read it. You can say: Read the sign on the door.",
    not: {
      shelf:
        'A shelf is a flat board that holds things such as books. The picture shows an upright board on a post.',
      clipboard:
        'A clipboard is a small board that you hold, with a clip for paper. The picture shows a bigger board on a post.',
      mirror:
        'A mirror is a piece of glass that shows your face. The picture shows a board for words, not glass.',
    },
    more: "'Sign' is also a verb: when you sign a letter, you write your name on it. The 'g' in 'sign' is silent.",
    tip: "Learn the signs you see at school every day, such as 'Exit', 'Toilets' and 'Quiet, please'.",
  },
  telephone: {
    why: 'The picture shows the handset of a telephone, the part that you hold to your ear to speak to someone far away. You can say: The telephone is ringing.',
    not: {
      radio: 'You listen to a radio. You do not usually talk through it.',
      speaker:
        'A speaker makes sound louder. The picture shows a handset that you hold to your ear.',
      remote:
        'A remote control changes the channel on a television. The picture shows a handset for talking.',
    },
    more: "People often say 'phone' for 'telephone'. We say 'answer the phone' and 'make a phone call'.",
    tip: "Learn the short word 'phone' and the phrase 'on the phone': 'She is on the phone.'",
  },
  broom: {
    why: 'The picture shows a broom, a long handle with stiff hairs at the bottom. We use it to sweep dust and dirt from the floor. You can say: The caretaker sweeps the floor with a broom.',
    not: {
      mop: 'A mop has soft wet strings and washes the floor with water. A broom has stiff hairs and sweeps dry dirt.',
      bucket:
        'A bucket is a round container that holds water. The picture shows a tool with a long handle.',
      rake: 'A rake has metal teeth and is used in the garden to move leaves. The picture shows a broom with hairs.',
    },
    more: "'Sweep' is the verb for using a broom: sweep, swept, swept.",
    tip: 'Learn cleaning tools in pairs: broom and dustpan, mop and bucket.',
  },
  mirror: {
    why: 'The picture shows a mirror, a flat piece of glass that shows your own face when you look at it. You can say: I look at myself in the mirror.',
    not: {
      window: 'A window lets you see outside through the glass. A mirror shows you yourself.',
      screen:
        'A screen shows pictures from a computer or a television. A mirror shows what is in front of it.',
      clock:
        'A clock has numbers and hands that show the time. The picture shows shiny glass in a frame, with no numbers or hands.',
    },
    more: 'A hand mirror is small and you hold it in your hand. A wall mirror hangs on the wall.',
    tip: "Say 'in the mirror': 'I look at myself in the mirror.' We use 'in' with 'mirror'.",
  },
  'Where is the pencil? It is ___ the table.': {
    why: "A pencil usually lies on the flat top of a table, so we say 'on'. 'On' means touching the top of something. You can say: The pencil is on the table.",
    not: {
      in: "'In' means inside something, such as a box or a bag. The pencil lies on the top of the table, not inside it.",
      under: "'Under' means below something. The pencil is on the top of the table, not below it.",
      'next to':
        "'Next to' means at the side of something. The pencil is touching the top of the table, not its side.",
    },
    more: "We also say 'on the desk', 'on the floor' and 'on the shelf'. We use 'on' for a thing that rests on top of something.",
    tip: "Learn 'on the table' as one phrase. It is very common in a classroom.",
  },
  'Where is the ruler? It is ___ the pencil case.': {
    why: "A pencil case is a small bag with a space inside. We keep a ruler inside it, so we say 'in'. 'In' means inside something. You can say: The ruler is in the pencil case.",
    not: {
      on: "'On' means touching the top of something, such as a desk. We keep the ruler inside the pencil case, not on top of it.",
      under: "'Under' means below something. The ruler is inside the pencil case, not below it.",
      'next to':
        "'Next to' means at the side of something. The ruler is inside the pencil case, not at its side.",
    },
    more: "We use 'in' for a thing inside a container or a space: in the bag, in the box, in the room.",
    tip: "Picture a box. If something is inside the box, use 'in'.",
  },
  'Where are the books? They are ___ the shelf.': {
    why: "Books stand on the flat part of a shelf, so we say 'on the shelf'. 'On' means resting on the top of something. You can say: The books are on the shelf.",
    not: {
      in: "'In' means inside something. We do not say 'in the shelf' for books. We say 'on the shelf'.",
      under:
        "'Under' means below something. The books rest on the shelf, so they are not below it.",
      'next to':
        "'Next to' means at the side of something. The books are on the shelf, not at its side.",
    },
    more: "Notice the verb: 'The books are...' We use 'are' with a plural noun and 'is' with a singular noun.",
    tip: "Say 'on the shelf', 'on the table' and 'on the wall'. We use 'on' for things that rest on top of something or are fixed to the front of it.",
  },
  'Where is the school bag? It is ___ the chair. The chair is above the bag.': {
    why: "The chair is above the bag, so the bag is below the chair. 'Under' means below something. You can say: The school bag is under the chair.",
    not: {
      on: "'On' means touching the top of something. The chair is above the bag, so the bag cannot be on it.",
      in: "'In' means inside something. The bag is below the chair, not inside it.",
      'next to':
        "'Next to' means at the side of something. The chair is above the bag, not beside it.",
    },
    more: "'Under' is the opposite of 'on' here: the chair is on top, and the bag is below.",
    tip: 'Use your hands to remember: one hand is the chair, and the other hand is the bag under it.',
  },
  'Where is the bin? It is ___ the door.': {
    why: "The bin stands at the side of the door, so we say 'next to'. 'Next to' means beside something. You can say: The bin is next to the door.",
    not: {
      on: "'On' means touching the top or the front of something. The bin stands at the side of the door, not on it.",
      in: "'In' means inside something. The bin is not inside the door.",
      under: "'Under' means below something. The bin is at the side of the door, not below it.",
    },
    more: "'Next to' means the same as 'beside'. You can say: The bin is beside the door.",
    tip: "Write 'next to' as two words. Do not write 'nextto'.",
  },
  'Where is the chair? It is ___ the classroom.': {
    why: "The classroom is a space, and the chair is inside it, so we say 'in'. 'In' means inside a space. You can say: The chair is in the classroom.",
    not: {
      on: "'On' means touching the top of something, such as a desk or a floor. We do not say 'on the classroom'.",
      under: "'Under' means below something. The chair is inside the room, not below it.",
      'next to':
        "'Next to' means at the side of something. The chair is inside the classroom, not beside it.",
    },
    more: "We use 'in' for rooms and buildings: in the classroom, in the kitchen, in the school.",
    tip: "Say 'in the classroom', but say 'at school'. We use 'at' with the word 'school' when we mean learning there.",
  },
  'Where is the door? It is ___ the window.': {
    why: "The door is at the side of the window, so we say 'next to'. 'Next to' means beside something. You can say: The door is next to the window.",
    not: {
      on: "'On' means touching the top or the front of something. The door is beside the window, not on it.",
      in: "'In' means inside something. The door is not inside the window.",
      under: "'Under' means below something. The door is beside the window, not below it.",
    },
    more: "We can say 'next to' about two things that are side by side: the desk is next to the chair.",
    tip: 'Learn these position words together: on, under, in, out, next to, between.',
  },
  'Where is the window? It is ___ the board.': {
    why: "The window is at the side of the board, so we say 'next to'. 'Next to' means beside something. You can say: The window is next to the board.",
    not: {
      on: "'On' means touching the top or the front of something. The window is beside the board, not on it.",
      in: "'In' means inside something. The window is not inside the board.",
      under: "'Under' means below something. The window is beside the board, not below it.",
    },
    more: 'The board is the whiteboard or blackboard at the front of the classroom. Teachers write on it.',
    tip: "Say where things are in your own classroom: 'The window is next to the board.'",
  },
  'Where is the clock? It is ___ the wall.': {
    why: "A clock can be fixed to a wall, so we say 'on the wall'. We use 'on' for things that are fixed to the front of something. You can say: The clock is on the wall.",
    not: {
      in: "'In' means inside something. A clock hangs on the wall. It is not inside the wall.",
      under: "'Under' means below something. The clock hangs on the wall, not below it.",
      'next to':
        "'Next to' means at the side of something. The clock is fixed to the front of the wall, not at its side.",
    },
    more: "We also say 'on the wall' for a map, a picture and a poster. Things on a wall are fixed to it.",
    tip: "Remember the pattern: on the wall, on the desk, on the shelf. All of them use 'on'.",
  },
  'Where is the computer? It is ___ the desk.': {
    why: "A computer sits on the flat top of a desk, so we say 'on'. 'On' means resting on the top of something. You can say: The computer is on the desk.",
    not: {
      in: "'In' means inside something. The computer sits on top of the desk, not inside it.",
      under: "'Under' means below something. The computer sits on the desk, not below it.",
      'next to':
        "'Next to' means at the side of something. The computer sits on the top of the desk, not at its side.",
    },
    more: "We also say 'on the computer' when we use it: 'I work on the computer.'",
    tip: "Use 'on' with desk, table, shelf and floor. You can put things on top of all of them.",
  },
  'Where is the map? It is ___ the wall.': {
    why: "A map hangs on the wall, fixed to the front of it, so we say 'on'. We use 'on' for things that are fixed to the front of a wall. You can say: The map is on the wall.",
    not: {
      in: "'In' means inside something. A map hangs on the wall. It is not inside it.",
      under: "'Under' means below something. The map hangs on the wall, not below it.",
      'next to':
        "'Next to' means at the side of something. The map is fixed to the front of the wall, not at its side.",
    },
    more: "Pictures, posters and clocks are also 'on the wall'.",
    tip: "Look at the wall of your classroom and say what is on it: 'The clock is on the wall.'",
  },
  'Where is the globe? It is ___ the shelf.': {
    why: "A globe stands on the flat top of a shelf, so we say 'on the shelf'. 'On' means resting on the top of something. You can say: The globe is on the shelf.",
    not: {
      in: "'In' means inside something. The globe stands on top of the shelf. It is not inside it.",
      under: "'Under' means below something. The globe stands on the shelf, not below it.",
      'next to':
        "'Next to' means at the side of something. The globe rests on the top of the shelf, not at its side.",
    },
    more: 'A globe is a round model of the Earth. It often stands on a small base.',
    tip: "Learn 'on' with the nouns that often follow it: desk, shelf, wall, table, floor.",
  },
  'Where is the chart? It is ___ the noticeboard.': {
    why: "A chart is pinned to the front of a noticeboard, so we say 'on'. 'On' means touching the top or the front of something. You can say: The chart is on the noticeboard.",
    not: {
      in: "'In' means inside something. The chart is pinned to the front of the board, not inside it.",
      under:
        "'Under' means below something. The chart is on the front of the noticeboard, not below it.",
      'next to':
        "'Next to' means at the side of something. The chart is pinned to the front of the noticeboard, not at its side.",
    },
    more: 'A noticeboard is a board where people pin papers for others to read. Posters, lists and charts go on it.',
    tip: "Use 'on' with 'noticeboard', 'board' and 'screen': 'It is on the board.' 'It is on the screen.'",
  },
  'Where is the sign? It is ___ the wall.': {
    why: "A sign in a classroom is usually fixed to the wall, so we say 'on the wall'. We use 'on' for things that are fixed to the front of something. You can say: The sign is on the wall.",
    not: {
      in: "'In' means inside something. The sign is fixed to the wall. It is not inside it.",
      under: "'Under' means below something. The sign is on the wall, not below it.",
      'next to':
        "'Next to' means at the side of something. The sign is fixed to the front of the wall, not at its side.",
    },
    more: 'We hang many things on a classroom wall: a clock, a map, a poster and a sign.',
    tip: "Say a full sentence about your own classroom: 'The sign is on the wall near the door.'",
  },
}
