import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Jekyll and Hyde revision guide — themes, characters, key quotes — The English Hub',
  description:
    "Jekyll and Hyde GCSE revision — Stevenson's Gothic novella with chapter analysis, characters, themes, context and key quotes. Aligned to AQA, Edexcel, OCR.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde',
  },
}

const data: TextGuideData = {
  title: 'Strange Case of Dr Jekyll and Mr Hyde',
  author: 'Robert Louis Stevenson',
  year: '1886',
  category: 'Novella',
  badge: 'AQA / Edexcel / OCR / Eduqas',
  intro:
    "Robert Louis Stevenson's Gothic novella explores the duality of human nature through the respectable Dr Henry Jekyll and his violent alter ego Mr Edward Hyde. Famously inspired by a vivid dream and drafted at remarkable speed (Stevenson reportedly burned his first version and rewrote it within weeks), the story unfolds as a mystery focalised through the lawyer Gabriel John Utterson, who gradually uncovers the terrifying truth behind Jekyll's relationship with the sinister Hyde.",
  introAr:
    'رواية Robert Louis Stevenson القوطية القصيرة تغوص في ازدواجية النفس البشرية عن طريق Dr Henry Jekyll الموقّر وقرينه العنيف Mr Edward Hyde. يقولون إن الفكرة جت Stevenson في حلم وايد قوي، وكتبها بسرعة عجيبة (يقولون إنه حرق المسودة الأولى وعاد كتبها كلها خلال أسابيع). القصة تنفك بشكل لغز، شايفينها من زاوية المحامي Gabriel John Utterson، اللي يكشف الحين بعد الحين الحقيقة المرعبة وراء علاقة Jekyll بـ Hyde الشرير.',
  yearAr: '١٨٨٦',
  quickInfo: {
    genre: 'Gothic novella / horror',
    setting: 'London, late Victorian era',
    length: '10 chapters (~25,000 words)',
    published: '1886',
  },
  quickInfoAr: {
    genre: 'رواية قصيرة قوطية / رعب',
    setting: 'London، أواخر العصر الفيكتوري',
    length: '١٠ فصول (حوالي ٢٥٬٠٠٠ كلمة)',
    published: '١٨٨٦',
  },

  // ── Plot Summary (all 10 chapters) ─────────────────────────────────────────
  plotSummary: [
    "The novella opens with the lawyer Mr Utterson and his cousin Richard Enfield walking past a mysterious door. Enfield recounts how he once saw a small, deformed man trample a young girl in the street and then disappear through that very door, returning with a cheque signed by the respectable Dr Henry Jekyll. Utterson, troubled, reads Jekyll's will and discovers that everything is left to a man called Edward Hyde. He visits Dr Lanyon, an old friend of Jekyll's, who dismisses Jekyll's recent scientific work as \"unscientific balderdash.\" Utterson stakes out the door and finally meets Hyde, finding him inexplicably repulsive. Jekyll reassures Utterson that Hyde is under control and asks him to honour the will.",

    "Nearly a year later, a maidservant witnesses Hyde brutally murder Sir Danvers Carew, a respected MP, beating him to death with a heavy cane. Utterson leads police to Hyde's Soho lodgings, which are ransacked but abandoned. Jekyll swears he is done with Hyde, produces a letter from Hyde, and seems to return to his old sociable self. However, Utterson's clerk Guest notices that Hyde's handwriting is almost identical to Jekyll's. Months of normality follow until Jekyll suddenly shuts himself away again, refusing all visitors.",

    "Dr Lanyon falls gravely ill and dies, leaving Utterson a sealed letter not to be opened until Jekyll's death or disappearance. Jekyll's butler Poole arrives at Utterson's home in a panic: the voice behind the locked laboratory door no longer sounds like his master. They break down the door together and find Hyde's body on the floor, dead by suicide, dressed in Jekyll's oversized clothes. Jekyll is nowhere to be found.",

    'The final two chapters reveal the full truth. Lanyon\'s letter describes how he witnessed Hyde drink a potion and transform into Jekyll before his eyes \u2014 a shock so profound it killed him. Jekyll\'s own "Full Statement of the Case" explains everything: he created a potion to separate his good and evil natures, relishing the freedom of living as Hyde without moral consequence. Over time the transformations became involuntary, Hyde grew stronger, and Jekyll could no longer control the change. Trapped and running out of the crucial salt needed for the potion, Jekyll writes his confession knowing that by the time it is read, Hyde will have taken over permanently.',
  ],
  plotSummaryAr: [
    '\u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u062a\u0641\u062a\u062d \u0639\u0644\u0649 \u0627\u0644\u0645\u062d\u0627\u0645\u064a Mr Utterson \u0648\u0642\u0631\u064a\u0628\u0647 Richard Enfield \u0648\u0647\u0645\u0627 \u064a\u0645\u0634\u0648\u0646 \u064a\u0648\u0645 \u0627\u0644\u0623\u062d\u062f \u0648\u064a\u0645\u0631\u0651\u0648\u0646 \u0628\u0628\u0627\u0628 \u063a\u0627\u0645\u0636. Enfield \u064a\u062d\u0643\u064a \u0634\u0644\u0648\u0646 \u0634\u0627\u0641 \u0645\u0631\u0629 \u0631\u062c\u0627\u0644 \u0635\u063a\u064a\u0631 \u0645\u0634\u0648\u0651\u0647 \u064a\u062f\u0648\u0633 \u0628\u0646\u062a \u0635\u063a\u064a\u0631\u0629 \u0641\u064a \u0627\u0644\u0634\u0627\u0631\u0639\u060c \u062b\u0645 \u0627\u062e\u062a\u0641\u0649 \u0645\u0646 \u0646\u0641\u0633 \u0627\u0644\u0628\u0627\u0628 \u0648\u0631\u062c\u0639 \u0628\u0634\u064a\u0643 \u0645\u0648\u0642\u0651\u0639 \u0645\u0646 Dr Henry Jekyll \u0627\u0644\u0645\u062d\u062a\u0631\u0645. Utterson \u064a\u0646\u0642\u0628\u0636\u060c \u0641\u064a\u0642\u0631\u0623 \u0648\u0635\u064a\u0629 Jekyll \u0648\u064a\u0644\u0642\u0627\u0647\u0627 \u062a\u062a\u0631\u0643 \u0643\u0644 \u0634\u064a \u0644\u0631\u062c\u0627\u0644 \u0627\u0633\u0645\u0647 Edward Hyde. \u064a\u0631\u0648\u062d Dr Lanyon\u060c \u0635\u062f\u064a\u0642 \u0642\u062f\u064a\u0645 \u0644\u0640 Jekyll\u060c \u0627\u0644\u0644\u064a \u064a\u0633\u062a\u0647\u064a\u0646 \u0628\u062a\u062c\u0627\u0631\u0628 Jekyll \u0627\u0644\u0623\u062e\u064a\u0631\u0629 \u0648\u064a\u0633\u0645\u064a\u0647\u0627 "unscientific balderdash". \u064a\u0631\u0627\u0628\u0637 Utterson \u0639\u0646\u062f \u0627\u0644\u0628\u0627\u0628 \u0648\u0623\u062e\u064a\u0631\u0627\u064b \u064a\u0642\u0627\u0628\u0644 Hyde \u0648\u064a\u0644\u0642\u0649 \u0646\u0641\u0633\u0647 \u064a\u0643\u0631\u0647\u0647 \u0628\u062f\u0648\u0646 \u0645\u0627 \u064a\u062f\u0631\u064a \u0644\u064a\u0634. Jekyll \u064a\u0637\u0645\u0626\u0646\u0647 \u0625\u0646 \u0627\u0644\u0648\u0636\u0639 \u062a\u062d\u062a \u0627\u0644\u0633\u064a\u0637\u0631\u0629\u060c \u0648\u064a\u0637\u0644\u0628 \u0645\u0646\u0647 \u064a\u0646\u0641\u0651\u0630 \u0627\u0644\u0648\u0635\u064a\u0629 \u0644\u0648 \u0635\u0627\u0631 \u0634\u064a.',

    '\u0628\u0639\u062f \u0633\u0646\u0629 \u062a\u0642\u0631\u064a\u0628\u0627\u064b\u060c \u062e\u0627\u062f\u0645\u0629 \u062a\u0634\u0647\u062f \u062c\u0631\u064a\u0645\u0629 \u0641\u0638\u064a\u0639\u0629: Hyde \u064a\u0642\u062a\u0644 Sir Danvers Carew\u060c \u0639\u0636\u0648 \u0628\u0631\u0644\u0645\u0627\u0646 \u0645\u0648\u0642\u0651\u0631\u060c \u064a\u0636\u0631\u0628\u0647 \u0628\u0639\u0635\u0627 \u062b\u0642\u064a\u0644\u0629 \u0644\u064a\u0646 \u0627\u0644\u0645\u0648\u062a. Utterson \u064a\u0642\u0648\u062f \u0627\u0644\u0634\u0631\u0637\u0629 \u0644\u0633\u0643\u0646 Hyde \u0641\u064a Soho\u060c \u0641\u064a\u0644\u0642\u0648\u0646\u0647 \u0645\u0642\u0644\u0648\u0628\u0627\u064b \u0648\u0645\u0647\u062c\u0648\u0631\u0627\u064b. Jekyll \u064a\u062d\u0644\u0641 \u0625\u0646\u0647 \u062e\u0644\u0651\u0635 \u0645\u0646 Hyde\u060c \u0648\u064a\u0648\u0631\u064a Utterson \u0631\u0633\u0627\u0644\u0629 \u0645\u0646 Hyde\u060c \u0648\u064a\u0628\u064a\u0651\u0646 \u0643\u0623\u0646\u0647 \u0631\u062c\u0639 \u0644\u0637\u0628\u064a\u0639\u062a\u0647 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629. \u0644\u0643\u0646 \u0643\u0627\u062a\u0628 Utterson \u0627\u0633\u0645\u0647 Guest \u064a\u0644\u0627\u062d\u0638 \u0625\u0646 \u062e\u0637 Hyde \u0645\u0637\u0627\u0628\u0642 \u062a\u0642\u0631\u064a\u0628\u0627\u064b \u0644\u062e\u0637 Jekyll. \u062a\u0645\u0636\u064a \u0634\u0647\u0648\u0631 \u0647\u0627\u062f\u064a\u0629\u060c \u062b\u0645 \u0641\u062c\u0623\u0629 \u064a\u0633\u0643\u0651\u0631 Jekyll \u0628\u0627\u0628\u0647 \u0639\u0644\u0649 \u0646\u0641\u0633\u0647 \u0645\u0631\u0629 \u062b\u0627\u0646\u064a\u0629 \u0648\u064a\u0631\u0641\u0636 \u064a\u0642\u0627\u0628\u0644 \u0623\u062d\u062f.',

    'Dr Lanyon \u064a\u0645\u0631\u0636 \u0645\u0631\u0636 \u0634\u062f\u064a\u062f \u0648\u064a\u062a\u0648\u0641\u0649\u060c \u0648\u064a\u062a\u0631\u0643 \u0644\u0640 Utterson \u0631\u0633\u0627\u0644\u0629 \u0645\u062e\u062a\u0648\u0645\u0629 \u0645\u0627 \u062a\u0646\u0641\u062a\u062d \u0625\u0644\u0627 \u0628\u0639\u062f \u0645\u0648\u062a Jekyll \u0623\u0648 \u0627\u062e\u062a\u0641\u0627\u0626\u0647. \u064a\u064a\u064a \u062e\u062f\u0651\u0627\u0645 Jekyll \u0627\u0633\u0645\u0647 Poole \u0639\u0644\u0649 \u0628\u064a\u062a Utterson \u0648\u0647\u0648 \u0645\u0630\u0639\u0648\u0631: \u0627\u0644\u0635\u0648\u062a \u0627\u0644\u0644\u064a \u0648\u0631\u0627\u0621 \u0628\u0627\u0628 \u0627\u0644\u0645\u062e\u062a\u0628\u0631 \u0627\u0644\u0645\u0633\u0643\u0651\u0631 \u0645\u0627 \u0639\u0627\u062f \u064a\u0634\u0628\u0647 \u0635\u0648\u062a \u0633\u064a\u062f\u0647. \u064a\u0643\u0633\u0631\u0648\u0646 \u0627\u0644\u0628\u0627\u0628 \u0645\u0639 \u0628\u0639\u0636 \u0648\u064a\u0644\u0642\u0648\u0646 \u062c\u062b\u0629 Hyde \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636\u060c \u0645\u0646\u062a\u062d\u0631 \u0628\u0646\u0641\u0633\u0647\u060c \u0644\u0627\u0628\u0633 \u062b\u064a\u0627\u0628 Jekyll \u0627\u0644\u0644\u064a \u0648\u0627\u064a\u062f \u0623\u0643\u0628\u0631 \u0645\u0646 \u062d\u062c\u0645\u0647. Jekyll \u0645\u0627 \u062d\u062f \u064a\u062d\u0635\u0651\u0644\u0647.',

    '\u0627\u0644\u0641\u0635\u0644\u064a\u0646 \u0627\u0644\u0623\u062e\u064a\u0631\u064a\u0646 \u064a\u0643\u0634\u0641\u0648\u0646 \u0627\u0644\u062d\u0642\u064a\u0642\u0629 \u0643\u0627\u0645\u0644\u0629. \u0631\u0633\u0627\u0644\u0629 Lanyon \u062a\u062d\u0643\u064a \u0634\u0644\u0648\u0646 \u0634\u0647\u062f \u0628\u0639\u064a\u0646\u0647 Hyde \u064a\u0634\u0631\u0628 \u062c\u0631\u0639\u0629 \u0648\u064a\u062a\u062d\u0648\u0651\u0644 \u0642\u062f\u0627\u0645\u0647 \u0625\u0644\u0649 Jekyll \u2014 \u0635\u062f\u0645\u0629 \u0639\u0645\u064a\u0642\u0629 \u0644\u062f\u0631\u062c\u0629 \u0625\u0646\u0647\u0627 \u0642\u062a\u0644\u062a\u0647. \u0623\u0645\u0627 "Full Statement of the Case" \u0645\u0627\u0644 Jekyll \u0646\u0641\u0633\u0647 \u0641\u064a\u0634\u0631\u062d \u0643\u0644 \u0634\u064a: \u0625\u0646\u0647 \u062e\u0644\u0651\u0642 \u062c\u0631\u0639\u0629 \u062a\u0641\u0635\u0644 \u0628\u064a\u0646 \u062c\u0627\u0646\u0628\u0647 \u0627\u0644\u062e\u064a\u0651\u0631 \u0648\u062c\u0627\u0646\u0628\u0647 \u0627\u0644\u0634\u0631\u064a\u0631\u060c \u0648\u0643\u0627\u0646 \u064a\u0633\u062a\u0645\u062a\u0639 \u0628\u062d\u0631\u0651\u064a\u0629 \u064a\u0639\u064a\u0634 \u0643\u0640 Hyde \u0628\u0644\u0627 \u0623\u064a \u0639\u0648\u0627\u0642\u0628 \u0623\u062e\u0644\u0627\u0642\u064a\u0629. \u0645\u0639 \u0645\u0631\u0648\u0631 \u0627\u0644\u0648\u0642\u062a \u0635\u0627\u0631\u062a \u0627\u0644\u062a\u062d\u0648\u0644\u0627\u062a \u062a\u0635\u064a\u0631 \u0645\u0646 \u062f\u0648\u0646 \u0625\u0631\u0627\u062f\u062a\u0647\u060c Hyde \u0642\u0648\u064a \u0648\u0642\u0648\u064a\u060c \u0648Jekyll \u0645\u0627 \u0639\u0627\u062f \u064a\u0642\u062f\u0631 \u064a\u0633\u064a\u0637\u0631. \u062a\u062d\u0627\u0635\u0631 \u062f\u0627\u062e\u0644 \u0627\u0644\u0645\u062e\u062a\u0628\u0631\u060c \u0648\u0627\u0644\u0645\u0644\u062d \u0627\u0644\u062c\u0648\u0647\u0631\u064a \u0627\u0644\u0644\u064a \u064a\u062d\u062a\u0627\u062c\u0647 \u0644\u0644\u062c\u0631\u0639\u0629 \u0628\u062f\u0623 \u064a\u062e\u0644\u0651\u0635\u060c \u0641\u064a\u0643\u062a\u0628 \u0627\u0639\u062a\u0631\u0627\u0641\u0647 \u0648\u0647\u0648 \u0645\u062a\u064a\u0642\u0651\u0646 \u0625\u0646\u0647 \u0644\u0645\u0646 \u062a\u0646\u0642\u0631\u0623 \u0647\u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0628\u064a\u0643\u0648\u0646 Hyde \u0642\u062f \u0627\u0633\u062a\u0648\u0644\u0649 \u0639\u0644\u0649 \u0627\u0644\u0645\u0643\u0627\u0646 \u0644\u0644\u0623\u0628\u062f.',
  ],

  // ── Characters ─────────────────────────────────────────────────────────────
  characters: [
    {
      name: 'Dr Henry Jekyll',
      role: 'Respected physician and scientist',
      roleAr:
        '\u0637\u0628\u064a\u0628 \u0648\u0639\u0627\u0644\u0645 \u0645\u062d\u062a\u0631\u0645',
      body: "Jekyll is a wealthy, well-regarded doctor who has long felt burdened by the need to maintain a respectable public image while suppressing his darker desires. He creates the transformative potion not out of pure evil but from a sincere, if dangerously arrogant, belief that the two sides of human nature can be separated. His tragedy lies in his inability to control the monster he has unleashed. Stevenson uses Jekyll to explore how Victorian society's demand for respectability can itself become a destructive force, driving people towards secret transgression rather than honest self-knowledge.",
      bodyAr:
        'Jekyll \u0637\u0628\u064a\u0628 \u063a\u0646\u064a \u0648\u0645\u062d\u062a\u0631\u0645\u060c \u0639\u0627\u0634 \u0632\u0645\u0627\u0646 \u0637\u0648\u064a\u0644 \u0648\u0647\u0648 \u0645\u062d\u062a\u0645\u0644 \u0639\u0628\u0621 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0627\u0644\u0645\u062d\u062a\u0631\u0645\u0629\u060c \u0648\u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a \u064a\u0643\u0628\u062a \u0631\u063a\u0628\u0627\u062a\u0647 \u0627\u0644\u0645\u0638\u0644\u0645\u0629. \u062e\u0644\u0642 \u0627\u0644\u062c\u0631\u0639\u0629 \u0627\u0644\u0645\u062d\u0648\u0651\u0644\u0629 \u0645\u0648 \u0644\u0623\u0646\u0647 \u0634\u0631\u064a\u0631 \u0635\u0631\u0641\u060c \u0628\u0644 \u0639\u0646 \u0642\u0646\u0627\u0639\u0629 \u0635\u0627\u062f\u0642\u0629 \u0648\u0644\u0643\u0646 \u0645\u062a\u063a\u0637\u0631\u0633\u0629 \u0628\u0634\u0643\u0644 \u062e\u0637\u0631\u060c \u0625\u0646 \u062c\u0627\u0646\u0628\u064e\u064a \u0627\u0644\u0646\u0641\u0633 \u0627\u0644\u0628\u0634\u0631\u064a\u0629 \u064a\u0642\u062f\u0631 \u064a\u062a\u0641\u0635\u0644\u0648\u0646. \u0645\u0623\u0633\u0627\u062a\u0647 \u0625\u0646\u0647 \u0645\u0627 \u0642\u062f\u0631 \u064a\u0633\u064a\u0637\u0631 \u0639\u0644\u0649 \u0627\u0644\u0648\u062d\u0634 \u0627\u0644\u0644\u064a \u0637\u0644\u0651\u0642\u0647. Stevenson \u064a\u0633\u062a\u062e\u062f\u0645 Jekyll \u0639\u0634\u0627\u0646 \u064a\u062f\u0631\u0633 \u0634\u0644\u0648\u0646 \u0645\u0637\u0627\u0644\u0628\u0629 \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a \u0628\u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0645 \u062a\u0646\u0642\u0644\u0628 \u0646\u0641\u0633\u0647\u0627 \u0642\u0648\u0629 \u0647\u062f\u0651\u0627\u0645\u0629\u060c \u062a\u062f\u0641\u0639 \u0627\u0644\u0646\u0627\u0633 \u0644\u0644\u0645\u0639\u0635\u064a\u0629 \u0628\u0627\u0644\u0633\u0631 \u0628\u062f\u0644 \u0645\u0627 \u064a\u0639\u0631\u0641\u0648\u0646 \u0623\u0646\u0641\u0633\u0647\u0645 \u0628\u0635\u062f\u0642.',
    },
    {
      name: 'Mr Edward Hyde',
      role: "Jekyll's dark alter ego",
      roleAr:
        '\u0627\u0644\u0646\u0635\u0641 \u0627\u0644\u0645\u0638\u0644\u0645 \u0627\u0644\u062b\u0627\u0646\u064a \u0644\u0640 Jekyll',
      body: 'Hyde is younger, smaller, and filled with pure malice. Every character who meets him feels an instinctive revulsion they cannot quite explain \u2014 Enfield calls it "something downright detestable," and Utterson describes "Satan\'s signature" on his face. Hyde represents the primal, id-driven self freed from conscience and social restraint. Significantly, he grows larger and stronger as the novella progresses, suggesting that evil, once indulged, becomes increasingly dominant. His violence escalates from trampling a child to the frenzied murder of Sir Danvers Carew.',
      bodyAr:
        'Hyde \u0623\u0635\u063a\u0631\u060c \u0648\u0623\u0642\u0635\u0631\u060c \u0648\u0645\u0644\u064a\u0627\u0646 \u062d\u0642\u062f \u0635\u0631\u0641. \u0643\u0644 \u0634\u062e\u0635\u064a\u0629 \u062a\u0642\u0627\u0628\u0644\u0647 \u062a\u062d\u0633 \u0628\u0646\u0641\u0648\u0631 \u063a\u0631\u064a\u0632\u064a \u0645\u0627 \u062a\u0642\u062f\u0631 \u062a\u0641\u0633\u0651\u0631\u0647 \u2014 Enfield \u064a\u0633\u0645\u064a\u0647 "something downright detestable"\u060c \u0648Utterson \u064a\u0635\u0641 \u0648\u062c\u0647\u0647 \u0628\u0623\u0646\u0647 "Satan\'s signature". Hyde \u064a\u0645\u062b\u0651\u0644 \u0627\u0644\u0646\u0641\u0633 \u0627\u0644\u0628\u062f\u0627\u0626\u064a\u0629 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0629 \u0628\u0627\u0644\u063a\u0631\u0627\u0626\u0632\u060c \u0645\u062a\u062d\u0631\u0651\u0631\u0629 \u0645\u0646 \u0627\u0644\u0636\u0645\u064a\u0631 \u0648\u0627\u0644\u0642\u064a\u0648\u062f \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629. \u0627\u0644\u0645\u0644\u062d\u0648\u0638 \u0625\u0646\u0647 \u064a\u0643\u0628\u0631 \u0648\u064a\u0642\u0648\u0649 \u0643\u0644 \u0645\u0627 \u062a\u0642\u062f\u0651\u0645\u062a \u0627\u0644\u0631\u0648\u0627\u064a\u0629\u060c \u0648\u0647\u0630\u0627 \u064a\u0644\u0645\u0651\u062d \u0625\u0646 \u0627\u0644\u0634\u0631\u060c \u0644\u0648 \u062e\u0644\u0651\u064a\u0646\u0627\u0647 \u064a\u0637\u0644\u0639\u060c \u064a\u0635\u064a\u0631 \u0645\u0633\u064a\u0637\u0631 \u0623\u0643\u062b\u0631 \u0641\u0623\u0643\u062b\u0631. \u0639\u0646\u0641\u0647 \u064a\u062a\u0635\u0627\u0639\u062f \u0645\u0646 \u062f\u0648\u0633 \u0628\u0646\u062a \u0635\u063a\u064a\u0631\u0629 \u0644\u064a\u0646 \u0642\u062a\u0644 Sir Danvers Carew \u0628\u0634\u0643\u0644 \u0647\u0633\u062a\u064a\u0631\u064a.',
    },
    {
      name: 'Mr Gabriel John Utterson',
      role: 'Lawyer and narrator figure',
      roleAr:
        '\u0645\u062d\u0627\u0645\u064d \u0648\u0645\u0635\u062f\u0631 \u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a',
      body: "Utterson is the lens through which the reader experiences the mystery. He is rational, loyal, and deeply committed to propriety, yet he is also genuinely compassionate. His determination to protect Jekyll's reputation \u2014 even when the evidence points towards something terrible \u2014 mirrors the wider Victorian tendency to prioritise outward respectability over uncomfortable truths. Stevenson makes Utterson deliberately ordinary so that the Gothic horror strikes harder against a background of measured, lawyerly calm.",
      bodyAr:
        'Utterson \u0647\u0648 \u0627\u0644\u0639\u062f\u0633\u0629 \u0627\u0644\u0644\u064a \u0645\u0646 \u062e\u0644\u0627\u0644\u0647\u0627 \u064a\u0639\u064a\u0634 \u0627\u0644\u0642\u0627\u0631\u0626 \u0627\u0644\u0644\u063a\u0632. \u0639\u0642\u0644\u0627\u0646\u064a\u060c \u0648\u0641\u064a\u060c \u0648\u0645\u0644\u062a\u0632\u0645 \u0628\u0627\u0644\u0623\u062f\u0628\u060c \u0648\u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a \u0631\u062d\u064a\u0645 \u0628\u0635\u062f\u0642. \u0625\u0635\u0631\u0627\u0631\u0647 \u064a\u062d\u0645\u064a \u0633\u0645\u0639\u0629 Jekyll \u2014 \u062d\u062a\u0649 \u0644\u0645\u0646 \u0627\u0644\u062f\u0644\u0627\u0626\u0644 \u062a\u0634\u064a\u0631 \u0644\u0634\u064a \u0631\u0647\u064a\u0628 \u2014 \u064a\u0639\u0643\u0633 \u0627\u0644\u0646\u0632\u0639\u0629 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0628\u0625\u0646\u0647\u0627 \u062a\u062d\u0637\u0651 \u0645\u0638\u0647\u0631 \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0645 \u0641\u0648\u0642 \u0627\u0644\u062d\u0642\u0627\u0626\u0642 \u0627\u0644\u0645\u0632\u0639\u062c\u0629. Stevenson \u062a\u0639\u0645\u0651\u062f \u064a\u062e\u0644\u0651\u064a Utterson \u0639\u0627\u062f\u064a\u0627\u064b\u060c \u0639\u0634\u0627\u0646 \u0627\u0644\u0631\u0639\u0628 \u0627\u0644\u0642\u0648\u0637\u064a \u064a\u0637\u064a\u062d \u0623\u0642\u0648\u0649 \u0644\u0645\u0646 \u064a\u062c\u064a \u0639\u0644\u0649 \u062e\u0644\u0641\u064a\u0629 \u0647\u062f\u0648\u0621 \u0645\u062d\u0627\u0645\u064d \u0645\u062a\u0651\u0632\u0646.',
    },
    {
      name: 'Dr Hastie Lanyon',
      role: "Jekyll's former friend and fellow physician",
      roleAr:
        '\u0635\u062f\u064a\u0642 Jekyll \u0627\u0644\u0633\u0627\u0628\u0642 \u0648\u0632\u0645\u064a\u0644\u0647 \u0641\u064a \u0627\u0644\u0637\u0628',
      body: 'Lanyon is a conventional man of science who dismissed Jekyll\'s experiments as "too fanciful." When he witnesses Hyde\'s transformation into Jekyll, the shock is so total that it kills him within weeks. Lanyon represents the limits of rational Victorian science: he can accept no framework for what he has seen. His death dramatises the idea that some knowledge is genuinely dangerous and that confronting the truth of human duality can be fatal.',
      bodyAr:
        'Lanyon \u0631\u062c\u0644 \u0639\u0644\u0645 \u062a\u0642\u0644\u064a\u062f\u064a\u060c \u0627\u0633\u062a\u0647\u0632\u0623 \u0628\u062a\u062c\u0627\u0631\u0628 Jekyll \u0648\u0642\u0627\u0644 \u0625\u0646\u0647\u0627 "too fanciful". \u0644\u0645\u0646 \u0634\u0627\u0641 Hyde \u064a\u062a\u062d\u0648\u0651\u0644 \u0625\u0644\u0649 Jekyll\u060c \u0627\u0644\u0635\u062f\u0645\u0629 \u0643\u0627\u0646\u062a \u062a\u0627\u0645\u0651\u0629 \u0644\u062f\u0631\u062c\u0629 \u0642\u062a\u0644\u062a\u0647 \u062e\u0644\u0627\u0644 \u0623\u0633\u0627\u0628\u064a\u0639. Lanyon \u064a\u0645\u062b\u0651\u0644 \u062d\u062f\u0648\u062f \u0627\u0644\u0639\u0644\u0645 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a \u0627\u0644\u0639\u0642\u0644\u0627\u0646\u064a: \u0645\u0627 \u064a\u0642\u062f\u0631 \u064a\u0633\u062a\u0648\u0639\u0628 \u0623\u064a \u0625\u0637\u0627\u0631 \u064a\u0641\u0633\u0651\u0631 \u0627\u0644\u0644\u064a \u0634\u0627\u0641\u0647. \u0645\u0648\u062a\u0647 \u064a\u062c\u0633\u0651\u062f \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0646 \u0628\u0639\u0636 \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u062e\u0637\u0631\u0629 \u0628\u0635\u062f\u0642\u060c \u0648\u0625\u0646 \u0645\u0648\u0627\u062c\u0647\u0629 \u062d\u0642\u064a\u0642\u0629 \u0627\u0644\u0627\u0632\u062f\u0648\u0627\u062c\u064a\u0629 \u0627\u0644\u0628\u0634\u0631\u064a\u0629 \u0645\u0645\u0643\u0646 \u062a\u0643\u0648\u0646 \u0642\u0627\u062a\u0644\u0629.',
    },
    {
      name: 'Richard Enfield',
      role: "Utterson's cousin and walking companion",
      roleAr:
        '\u0642\u0631\u064a\u0628 Utterson \u0648\u0631\u0641\u064a\u0642\u0647 \u0641\u064a \u0627\u0644\u0645\u0634\u064a',
      body: 'Enfield is a man-about-town who witnesses Hyde trampling the young girl in the opening chapter. His role is primarily structural: he introduces the mystery and models the Victorian gentleman\'s instinct to suppress scandalous knowledge. His agreement with Utterson to "never refer to this again" after their first conversation reflects the culture of silence and repression that pervades the novella.',
      bodyAr:
        'Enfield \u0631\u062c\u0644 \u0627\u062c\u062a\u0645\u0627\u0639\u064a \u064a\u0639\u0631\u0641 \u0627\u0644\u0645\u062f\u064a\u0646\u0629\u060c \u064a\u0634\u0647\u062f Hyde \u0648\u0647\u0648 \u064a\u062f\u0648\u0633 \u0627\u0644\u0628\u0646\u062a \u0627\u0644\u0635\u063a\u064a\u0631\u0629 \u0641\u064a \u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u0623\u0648\u0644. \u062f\u0648\u0631\u0647 \u0623\u0633\u0627\u0633\u0627\u064b \u0628\u0646\u064a\u0648\u064a: \u064a\u0642\u062f\u0651\u0645 \u0627\u0644\u0644\u063a\u0632 \u0648\u064a\u062c\u0633\u0651\u062f \u063a\u0631\u064a\u0632\u0629 \u0627\u0644\u062c\u0646\u062a\u0644\u0645\u0627\u0646 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a \u0628\u0643\u0628\u062a \u0623\u064a \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0645\u0641\u0636\u0648\u062d\u0629. \u0627\u062a\u0641\u0627\u0642\u0647 \u0645\u0639 Utterson \u0625\u0646\u0647\u0645 "never refer to this again" \u0628\u0639\u062f \u0623\u0648\u0644 \u0645\u062d\u0627\u062f\u062b\u0629 \u064a\u0639\u0643\u0633 \u062b\u0642\u0627\u0641\u0629 \u0627\u0644\u0635\u0645\u062a \u0648\u0627\u0644\u0643\u0628\u062a \u0627\u0644\u0644\u064a \u062a\u0633\u0648\u062f \u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u0643\u0644\u0647\u0627.',
    },
  ],

  // ── Themes ─────────────────────────────────────────────────────────────────
  themes: [
    {
      title: 'Duality of human nature',
      titleAr:
        '\u0627\u0632\u062f\u0648\u0627\u062c\u064a\u0629 \u0627\u0644\u0646\u0641\u0633 \u0627\u0644\u0628\u0634\u0631\u064a\u0629',
      body: 'The central theme of the novella is that every human being contains both good and evil impulses. Jekyll describes man as "not truly one, but truly two," and his experiment is an attempt to separate these warring elements. Stevenson suggests that duality is not a flaw to be cured but a fundamental condition of being human. The horror arises not from Hyde\'s existence but from Jekyll\'s belief that he can neatly divide the self, when in reality the two sides are inseparable. The novella warns that denying one half of our nature only makes it more dangerous.',
      bodyAr:
        '\u0627\u0644\u0645\u062d\u0648\u0631 \u0627\u0644\u0631\u0626\u064a\u0633\u064a \u0644\u0644\u0631\u0648\u0627\u064a\u0629 \u0625\u0646 \u0643\u0644 \u0625\u0646\u0633\u0627\u0646 \u0641\u064a\u0647 \u0646\u0632\u0639\u062a\u064a\u0646\u060c \u062e\u064a\u0631 \u0648\u0634\u0631. Jekyll \u064a\u0635\u0641 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0628\u0623\u0646\u0647 "not truly one, but truly two"\u060c \u0648\u062a\u062c\u0631\u0628\u062a\u0647 \u0645\u062d\u0627\u0648\u0644\u0629 \u0639\u0634\u0627\u0646 \u064a\u0641\u0635\u0644 \u0628\u064a\u0646 \u0647\u0627\u0644\u0639\u0646\u0635\u0631\u064a\u0646 \u0627\u0644\u0645\u062a\u062d\u0627\u0631\u0628\u064a\u0646. Stevenson \u064a\u0648\u062d\u064a \u0625\u0646 \u0627\u0644\u0627\u0632\u062f\u0648\u0627\u062c\u064a\u0629 \u0645\u0648 \u0639\u064a\u0628 \u064a\u062d\u062a\u0627\u062c \u0639\u0644\u0627\u062c\u060c \u0628\u0644 \u0634\u0631\u0637 \u0623\u0633\u0627\u0633\u064a \u0645\u0646 \u0643\u0648\u0646\u0646\u0627 \u0628\u0634\u0631. \u0627\u0644\u0631\u0639\u0628 \u0645\u0627 \u064a\u0637\u0644\u0639 \u0645\u0646 \u0648\u062c\u0648\u062f Hyde \u0628\u062d\u062f \u0630\u0627\u062a\u0647\u060c \u0628\u0644 \u0645\u0646 \u0642\u0646\u0627\u0639\u0629 Jekyll \u0625\u0646\u0647 \u064a\u0642\u062f\u0631 \u064a\u0642\u0633\u0651\u0645 \u0627\u0644\u0646\u0641\u0633 \u0628\u0646\u0638\u0627\u0641\u0629\u060c \u0648\u0627\u0644\u062d\u0642\u064a\u0642\u0629 \u0625\u0646 \u0627\u0644\u062c\u0627\u0646\u0628\u064a\u0646 \u0645\u0627 \u064a\u062a\u0641\u0635\u0644\u0648\u0646. \u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u062a\u062d\u0630\u0651\u0631 \u0625\u0646 \u0625\u0646\u0643\u0627\u0631 \u0646\u0635 \u0645\u0646 \u0637\u0628\u064a\u0639\u062a\u0646\u0627 \u064a\u062e\u0644\u0651\u064a\u0647 \u0623\u062e\u0637\u0631.',
    },
    {
      title: 'Good versus evil',
      titleAr: '\u0627\u0644\u062e\u064a\u0631 \u0648\u0627\u0644\u0634\u0631',
      body: 'Hyde embodies pure, undiluted evil \u2014 he tramples a child, murders an old man, and feels no remorse. Yet Stevenson complicates a simple moral reading: Jekyll is not purely good. He admits to "a certain impatient gaiety of disposition" and acknowledges that he enjoyed the freedom Hyde gave him. The novella asks whether goodness maintained only by repression is genuine goodness at all, and whether evil is something external or something that lives within every apparently respectable person.',
      bodyAr:
        'Hyde \u064a\u062c\u0633\u0651\u062f \u0627\u0644\u0634\u0631 \u0627\u0644\u0635\u0631\u0641 \u0627\u0644\u0644\u064a \u0645\u0627 \u062a\u062e\u0627\u0644\u0637\u0647 \u0634\u0627\u0626\u0628\u0629 \u2014 \u064a\u062f\u0648\u0633 \u0628\u0646\u062a\u060c \u064a\u0642\u062a\u0644 \u0631\u062c\u0627\u0644 \u0639\u062c\u0648\u0632\u060c \u0648\u0644\u0627 \u064a\u062d\u0633 \u0628\u0623\u064a \u0646\u062f\u0645. \u0644\u0643\u0646 Stevenson \u064a\u0639\u0642\u0651\u062f \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a\u0629 \u0627\u0644\u0628\u0633\u064a\u0637\u0629: Jekyll \u0645\u0648 \u062e\u064a\u0651\u0631 \u0635\u0631\u0641. \u064a\u0639\u062a\u0631\u0641 \u0625\u0646 \u0639\u0646\u062f\u0647 "a certain impatient gaiety of disposition" \u0648\u064a\u0642\u0631\u0651 \u0625\u0646\u0647 \u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u0627\u0644\u062d\u0631\u0651\u064a\u0629 \u0627\u0644\u0644\u064a \u0648\u0641\u0651\u0631\u0647\u0627 \u0644\u0647 Hyde. \u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u062a\u0633\u0623\u0644: \u0647\u0644 \u0627\u0644\u062e\u064a\u0631 \u0627\u0644\u0644\u064a \u064a\u0628\u0642\u0649 \u0645\u062d\u0641\u0648\u0638 \u0628\u0627\u0644\u0643\u0628\u062a \u0628\u0633 \u064a\u0639\u062a\u0628\u0631 \u062e\u064a\u0631\u0627\u064b \u062d\u0642\u064a\u0642\u064a\u0627\u064b \u0623\u0635\u0644\u0627\u064b\u061f \u0648\u0647\u0644 \u0627\u0644\u0634\u0631 \u0634\u064a \u062e\u0627\u0631\u062c\u064a \u0648\u0644\u0651\u0627 \u0634\u064a \u064a\u0633\u0643\u0646 \u062f\u0627\u062e\u0644 \u0643\u0644 \u0625\u0646\u0633\u0627\u0646 \u0645\u062d\u062a\u0631\u0645 \u0628\u0627\u0644\u0638\u0627\u0647\u0631\u061f',
    },
    {
      title: 'Repression and Victorian hypocrisy',
      titleAr:
        '\u0627\u0644\u0643\u0628\u062a \u0648\u0627\u0644\u0646\u0641\u0627\u0642 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a',
      body: "Almost every character in the novella is engaged in suppressing knowledge, desire, or scandal. Utterson refuses to investigate too deeply; Enfield agrees never to speak of what he saw; Jekyll hides his pleasures behind a mask of philanthropy. Stevenson portrays a society in which reputation matters more than truth, and in which the pressure to appear morally spotless actually creates the conditions for secret vice. Jekyll's potion is, in one reading, simply a chemical version of the double life many Victorian gentlemen already led.",
      bodyAr:
        '\u062a\u0642\u0631\u064a\u0628\u0627\u064b \u0643\u0644 \u0634\u062e\u0635\u064a\u0629 \u0641\u064a \u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u0645\u0634\u063a\u0648\u0644\u0629 \u0628\u0643\u0628\u062a \u0645\u0639\u0644\u0648\u0645\u0629 \u0623\u0648 \u0631\u063a\u0628\u0629 \u0623\u0648 \u0641\u0636\u064a\u062d\u0629. Utterson \u064a\u0631\u0641\u0636 \u064a\u062d\u0642\u0651\u0642 \u0628\u0639\u0645\u0642\u061b Enfield \u064a\u062a\u0641\u0642 \u0625\u0646\u0647 \u0645\u0627 \u064a\u062d\u0643\u064a \u0623\u0628\u062f \u0639\u0646 \u0627\u0644\u0644\u064a \u0634\u0627\u0641\u0647\u061b Jekyll \u064a\u062e\u0641\u064a \u0645\u0644\u0630\u0651\u0627\u062a\u0647 \u0648\u0631\u0627\u0621 \u0642\u0646\u0627\u0639 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062e\u064a\u0631\u064a. Stevenson \u064a\u0635\u0648\u0651\u0631 \u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0633\u0645\u0639\u0629 \u0641\u064a\u0647 \u062a\u0628\u0642 \u0639\u0644\u0649 \u0627\u0644\u062d\u0642\u064a\u0642\u0629\u060c \u0648\u0627\u0644\u0636\u063a\u0637 \u0639\u0634\u0627\u0646 \u064a\u0628\u064a\u0651\u0646 \u0627\u0644\u0648\u0627\u062d\u062f \u0646\u0638\u064a\u0641 \u0623\u062e\u0644\u0627\u0642\u064a\u0627\u064b \u064a\u062e\u0644\u0642 \u0647\u0648 \u0646\u0641\u0633\u0647 \u0638\u0631\u0648\u0641 \u0627\u0644\u0631\u0630\u064a\u0644\u0629 \u0628\u0627\u0644\u062e\u0641\u0627\u0621. \u062c\u0631\u0639\u0629 Jekyll\u060c \u0628\u0642\u0631\u0627\u0621\u0629 \u0645\u0639\u064a\u0651\u0646\u0629\u060c \u0645\u0648 \u0625\u0644\u0627 \u0646\u0633\u062e\u0629 \u0643\u064a\u0645\u064a\u0627\u0626\u064a\u0629 \u0645\u0646 \u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u0645\u0632\u062f\u0648\u062c\u0629 \u0627\u0644\u0644\u064a \u0643\u0627\u0646\u062a \u062a\u0639\u064a\u0634\u0647\u0627 \u0648\u0627\u064a\u062f \u0645\u0646 \u0634\u062e\u0635\u064a\u0627\u062a \u0627\u0644\u062c\u0646\u062a\u0644\u0645\u0627\u0646 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a.',
    },
    {
      title: 'Science and religion',
      titleAr: '\u0627\u0644\u0639\u0644\u0645 \u0648\u0627\u0644\u062f\u064a\u0646',
      body: "Jekyll's experiment represents a transgressive form of science that trespasses into territory traditionally belonging to God. Lanyon condemns it as \"unscientific balderdash,\" but the real danger is not bad method \u2014 it is moral overreach. Written in the wake of Darwin's Origin of Species (1859), the novella taps into anxieties about what science might reveal about human nature. Hyde's ape-like appearance and animal ferocity invoke fears of evolutionary regression, suggesting that beneath the civilised surface lurks something primitive and bestial.",
      bodyAr:
        '\u062a\u062c\u0631\u0628\u0629 Jekyll \u062a\u0645\u062b\u0651\u0644 \u0639\u0644\u0645\u0627\u064b \u0645\u062a\u062c\u0627\u0648\u0632\u0627\u064b\u060c \u064a\u0642\u062a\u062d\u0645 \u0645\u0646\u0637\u0642\u0629 \u062a\u0642\u0644\u064a\u062f\u064a\u0627\u064b \u0645\u0627\u0644 \u0627\u0644\u0625\u0644\u0647. Lanyon \u064a\u0646\u062a\u0642\u062f\u0647\u0627 \u0648\u064a\u0635\u0641\u0647\u0627 \u0628\u0623\u0646\u0647\u0627 "unscientific balderdash"\u060c \u0644\u0643\u0646 \u0627\u0644\u062e\u0637\u0631 \u0627\u0644\u062d\u0642\u064a\u0642\u064a \u0645\u0648 \u0645\u0646\u0647\u062c \u0641\u0627\u0633\u062f \u2014 \u0627\u0644\u062e\u0637\u0631 \u062a\u062c\u0627\u0648\u0632 \u0623\u062e\u0644\u0627\u0642\u064a. \u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u0645\u0643\u062a\u0648\u0628\u0629 \u0628\u0639\u062f \u0645\u0627 \u0637\u0644\u0639 Darwin \u0628\u0640 Origin of Species \u0633\u0646\u0629 \u0661\u0668\u0665\u0669\u060c \u0648\u0647\u064a \u062a\u0644\u0627\u0645\u0633 \u0642\u0644\u0642 \u0627\u0644\u0646\u0627\u0633 \u0645\u0646 \u0627\u0644\u0644\u064a \u0645\u0645\u0643\u0646 \u064a\u0643\u0634\u0641\u0647 \u0627\u0644\u0639\u0644\u0645 \u0639\u0646 \u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u0625\u0646\u0633\u0627\u0646. \u0634\u0643\u0644 Hyde \u0627\u0644\u0634\u0628\u064a\u0647 \u0628\u0627\u0644\u0642\u0631\u062f \u0648\u0636\u0631\u0627\u0648\u062a\u0647 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u064a\u0629 \u064a\u0633\u062a\u062f\u0639\u0648\u0646 \u0645\u062e\u0627\u0648\u0641 \u0627\u0644\u0627\u0631\u062a\u062f\u0627\u062f \u0627\u0644\u062a\u0637\u0648\u0631\u064a\u060c \u0648\u064a\u0644\u0645\u0651\u062d\u0648\u0646 \u0625\u0646 \u062a\u062d\u062a \u0627\u0644\u0633\u0637\u062d \u0627\u0644\u0645\u062a\u062d\u0636\u0651\u0631 \u064a\u0643\u0645\u0646 \u0634\u064a \u0628\u062f\u0627\u0626\u064a \u0648\u0648\u062d\u0634\u064a.',
    },
    {
      title: 'Secrecy and reputation',
      titleAr: '\u0627\u0644\u0633\u0631\u064a\u0629 \u0648\u0627\u0644\u0633\u0645\u0639\u0629',
      body: 'The novella is structured around secrets: locked doors, sealed letters, wills that must not be questioned, and confessions read only after death. The fog-shrouded London setting mirrors this culture of concealment. Every gentleman in the story prioritises discretion over truth, and the narrative itself withholds its central revelation until the final pages. Stevenson uses this structure to argue that a society obsessed with reputation inevitably produces monsters, because the things people refuse to acknowledge do not disappear \u2014 they grow stronger in the dark.',
      bodyAr:
        '\u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u0645\u0628\u0646\u064a\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0633\u0631\u0627\u0631: \u0623\u0628\u0648\u0627\u0628 \u0645\u0633\u0643\u0651\u0631\u0629\u060c \u0631\u0633\u0627\u0626\u0644 \u0645\u062e\u062a\u0648\u0645\u0629\u060c \u0648\u0635\u0627\u064a\u0627 \u0645\u0645\u0646\u0648\u0639 \u0627\u0644\u0633\u0624\u0627\u0644 \u0639\u0646\u0647\u0627\u060c \u0648\u0627\u0639\u062a\u0631\u0627\u0641\u0627\u062a \u0645\u0627 \u062a\u0646\u0642\u0631\u0623 \u0625\u0644\u0627 \u0628\u0639\u062f \u0627\u0644\u0645\u0648\u062a. \u0645\u0643\u0627\u0646 \u0627\u0644\u0623\u062d\u062f\u0627\u062b London \u0627\u0644\u0645\u0644\u0641\u0648\u0641 \u0628\u0627\u0644\u0636\u0628\u0627\u0628 \u064a\u0639\u0643\u0633 \u062b\u0642\u0627\u0641\u0629 \u0627\u0644\u0625\u062e\u0641\u0627\u0621 \u0647\u0630\u064a. \u0643\u0644 \u062c\u0646\u062a\u0644\u0645\u0627\u0646 \u0641\u064a \u0627\u0644\u0642\u0635\u0629 \u064a\u0642\u062f\u0651\u0645 \u0627\u0644\u0643\u062a\u0645\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u062d\u0642\u064a\u0642\u0629\u060c \u0648\u0627\u0644\u0633\u0631\u062f \u0646\u0641\u0633\u0647 \u064a\u062d\u062c\u0628 \u0627\u0644\u0643\u0634\u0641 \u0627\u0644\u0645\u0631\u0643\u0632\u064a \u0644\u064a\u0646 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0627\u0644\u0623\u062e\u064a\u0631\u0629. Stevenson \u064a\u0633\u062a\u062e\u062f\u0645 \u0647\u0627\u0644\u0628\u0646\u0627\u0621 \u0639\u0634\u0627\u0646 \u064a\u062c\u0627\u062f\u0644 \u0625\u0646 \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0645\u0647\u0648\u0648\u0633 \u0628\u0627\u0644\u0633\u0645\u0639\u0629 \u064a\u0648\u0644\u0651\u062f \u0648\u062d\u0648\u0634 \u0628\u0627\u0644\u0636\u0631\u0648\u0631\u0629\u060c \u0644\u0623\u0646 \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u0627\u0644\u0644\u064a \u0627\u0644\u0646\u0627\u0633 \u064a\u0631\u0641\u0636\u0648\u0646 \u064a\u0639\u062a\u0631\u0641\u0648\u0646 \u0641\u064a\u0647\u0627 \u0645\u0627 \u062a\u062e\u062a\u0641\u064a \u2014 \u0647\u064a \u062a\u0642\u0648\u0649 \u0623\u0643\u062b\u0631 \u0641\u064a \u0627\u0644\u0638\u0644\u0627\u0645.',
    },
  ],

  // ── Historical Context ─────────────────────────────────────────────────────
  historicalContext: [
    "Stevenson wrote the novella in 1885 during a period of intense anxiety about respectability in Victorian Britain. The upper and middle classes placed enormous value on moral propriety, self-discipline, and outward appearances. Gentlemen were expected to be paragons of virtue, yet the period was also marked by widespread hypocrisy: prostitution, opium dens, and underground vice flourished behind the respectable facades of London. Jekyll's double life directly mirrors this social reality, and Stevenson uses the Gothic genre to dramatise the psychological cost of living under such rigid moral expectations.",

    'The Victorian era was shaped by rapid scientific progress and the profound cultural shock of Charles Darwin\'s theory of evolution by natural selection, published in On the Origin of Species in 1859. Darwin\'s work suggested that humans were not divinely created but had evolved from animals, a notion that terrified many Victorians. Hyde\'s frequent association with animalistic imagery \u2014 he is described as "ape-like," moving with "extraordinary quickness," and snarling like a creature \u2014 reflects fears that the beast within could resurface at any time. Stevenson taps into the anxiety that civilisation is only a thin veneer over humanity\'s primitive nature.',

    "The novella also engages with contemporary debates about the nature of the mind. Sigmund Freud's theories of the id, ego, and superego were not formulated until decades later, but a Freudian critical lens is often applied retrospectively to the text: Jekyll's experiment can be read as an attempt to liberate instinctual desire from social conscience. The idea that the human psyche contains warring elements was gaining traction in the 1880s through earlier thinkers, and Stevenson's novella gave that idea one of its most memorable literary expressions.",

    "As a work of Gothic fiction, the novella draws on a tradition stretching back to Horace Walpole, Mary Shelley, and Edgar Allan Poe. It uses classic Gothic conventions \u2014 transformation, doubling, darkness, fog, locked rooms, and the grotesque \u2014 but relocates them from remote castles to the heart of respectable London. This urban Gothic setting makes the horror more unsettling because it is closer to the reader's own world. The fog-choked streets, the sinister back door, and the potion that alters the body all contribute to a sense that horror is not exotic or distant but domestic and inescapable.",
  ],
  historicalContextAr: [
    'Stevenson \u0643\u062a\u0628 \u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u0633\u0646\u0629 \u0661\u0668\u0668\u0665 \u0641\u064a \u0641\u062a\u0631\u0629 \u0642\u0644\u0642 \u0634\u062f\u064a\u062f \u0639\u0644\u0649 \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0645 \u0641\u064a \u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a\u0629. \u0627\u0644\u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0639\u0644\u064a\u0627 \u0648\u0627\u0644\u0648\u0633\u0637\u0649 \u0643\u0627\u0646\u062a \u062a\u062d\u0637 \u0642\u064a\u0645\u0629 \u0639\u0638\u064a\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a\u0627\u0642\u0629 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a\u0629\u060c \u0648\u0636\u0628\u0637 \u0627\u0644\u0646\u0641\u0633\u060c \u0648\u0627\u0644\u0645\u0638\u0647\u0631 \u0627\u0644\u062e\u0627\u0631\u062c\u064a. \u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u062a\u0631\u0636 \u0645\u0646 \u0627\u0644\u062c\u0646\u062a\u0644\u0645\u0627\u0646 \u064a\u0643\u0648\u0646 \u0642\u062f\u0648\u0629 \u0641\u064a \u0627\u0644\u0641\u0636\u064a\u0644\u0629\u060c \u0648\u0645\u0639 \u0647\u0630\u0627 \u0627\u0644\u0641\u062a\u0631\u0629 \u0643\u0627\u0646\u062a \u0645\u0644\u064a\u0627\u0646\u0629 \u0646\u0641\u0627\u0642 \u0645\u0646\u062a\u0634\u0631: \u0627\u0644\u062f\u0639\u0627\u0631\u0629\u060c \u0648\u0645\u062e\u0627\u062f\u0631 \u0627\u0644\u0623\u0641\u064a\u0648\u0646\u060c \u0648\u0627\u0644\u0631\u0630\u0627\u0626\u0644 \u062a\u062d\u062a \u0627\u0644\u0623\u0631\u0636\u060c \u0643\u0644\u0647\u0627 \u0643\u0627\u0646\u062a \u062a\u0632\u062f\u0647\u0631 \u0648\u0631\u0627\u0621 \u0648\u0627\u062c\u0647\u0627\u062a London \u0627\u0644\u0645\u062d\u062a\u0631\u0645\u0629. \u062d\u064a\u0627\u0629 Jekyll \u0627\u0644\u0645\u0632\u062f\u0648\u062c\u0629 \u062a\u0639\u0643\u0633 \u0647\u0627\u0644\u0648\u0627\u0642\u0639 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a \u0645\u0628\u0627\u0634\u0631\u0629\u060c \u0648Stevenson \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0646\u0648\u0639 \u0627\u0644\u0642\u0648\u0637\u064a \u0639\u0634\u0627\u0646 \u064a\u062c\u0633\u0651\u062f \u0627\u0644\u062a\u0643\u0644\u0641\u0629 \u0627\u0644\u0646\u0641\u0633\u064a\u0629 \u0644\u0644\u0639\u064a\u0634 \u062a\u062d\u062a \u062a\u0648\u0642\u0639\u0627\u062a \u0623\u062e\u0644\u0627\u0642\u064a\u0629 \u0628\u0647\u0630\u064a \u0627\u0644\u0635\u0631\u0627\u0645\u0629.',

    '\u0627\u0644\u0639\u0635\u0631 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a \u062a\u0634\u0643\u0651\u0644 \u0628\u0641\u0636\u0644 \u0627\u0644\u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0639\u0644\u0645\u064a \u0627\u0644\u0633\u0631\u064a\u0639\u060c \u0648\u0627\u0644\u0635\u062f\u0645\u0629 \u0627\u0644\u062b\u0642\u0627\u0641\u064a\u0629 \u0627\u0644\u0639\u0645\u064a\u0642\u0629 \u0627\u0644\u0644\u064a \u0633\u0628\u0651\u0628\u062a\u0647\u0627 \u0646\u0638\u0631\u064a\u0629 Charles Darwin \u0641\u064a \u0627\u0644\u062a\u0637\u0648\u0651\u0631 \u0628\u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0621 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u060c \u0627\u0644\u0644\u064a \u0637\u0644\u0639\u062a \u0641\u064a On the Origin of Species \u0633\u0646\u0629 \u0661\u0668\u0665\u0669. \u0639\u0645\u0644 Darwin \u064a\u0634\u064a\u0631 \u0625\u0646 \u0627\u0644\u0628\u0634\u0631 \u0645\u0627 \u062a\u062e\u0644\u0642\u0648\u0627 \u0628\u0634\u0643\u0644 \u0625\u0644\u0647\u064a\u060c \u0628\u0644 \u062a\u0637\u0648\u0651\u0631\u0648\u0627 \u0645\u0646 \u062d\u064a\u0648\u0627\u0646\u0627\u062a\u060c \u0648\u0647\u0627\u0644\u0641\u0643\u0631\u0629 \u0631\u0639\u0628\u062a \u0648\u0627\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a\u064a\u0646. \u0631\u0628\u0637 Hyde \u0627\u0644\u0645\u062a\u0643\u0631\u0651\u0631 \u0628\u0635\u0648\u0631 \u062d\u064a\u0648\u0627\u0646\u064a\u0629 \u2014 \u0648\u0635\u0641\u0647 \u0628\u0623\u0646\u0647 "ape-like"\u060c \u0648\u064a\u062a\u062d\u0631\u0651\u0643 \u0628\u0640 "extraordinary quickness"\u060c \u0648\u064a\u0632\u0645\u062c\u0631 \u0643\u0623\u0646\u0647 \u062d\u064a\u0648\u0627\u0646 \u2014 \u064a\u0639\u0643\u0633 \u0645\u062e\u0627\u0648\u0641 \u0625\u0646 \u0627\u0644\u0648\u062d\u0634 \u0627\u0644\u0644\u064a \u0628\u062f\u0627\u062e\u0644\u0646\u0627 \u0645\u0645\u0643\u0646 \u064a\u0637\u0644\u0639 \u0639\u0644\u0649 \u0627\u0644\u0633\u0637\u062d \u0641\u064a \u0623\u064a \u0644\u062d\u0638\u0629. Stevenson \u064a\u0644\u0627\u0645\u0633 \u0642\u0644\u0642 \u0625\u0646 \u0627\u0644\u062d\u0636\u0627\u0631\u0629 \u0645\u062c\u0631\u062f \u0642\u0634\u0631\u0629 \u0631\u0642\u064a\u0642\u0629 \u0641\u0648\u0642 \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u0628\u062f\u0627\u0626\u064a\u0629 \u0644\u0644\u0628\u0634\u0631.',

    '\u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u0643\u0630\u0644\u0643 \u062a\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0646\u0642\u0627\u0634\u0627\u062a \u0645\u0639\u0627\u0635\u0631\u0629 \u0639\u0646 \u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u0639\u0642\u0644. \u0646\u0638\u0631\u064a\u0627\u062a Sigmund Freud \u0639\u0646 \u0627\u0644\u0640 id \u0648\u0627\u0644\u0640 ego \u0648\u0627\u0644\u0640 superego \u0645\u0627 \u062a\u0637\u0648\u0651\u0631\u062a \u0625\u0644\u0627 \u0628\u0639\u062f \u0639\u0642\u0648\u062f\u060c \u0644\u0643\u0646 \u0627\u0644\u0639\u062f\u0633\u0629 \u0627\u0644\u0646\u0642\u062f\u064a\u0629 \u0627\u0644\u0641\u0631\u0648\u064a\u062f\u064a\u0629 \u062a\u0646\u0637\u0628\u0642 \u0639\u0644\u0649 \u0627\u0644\u0646\u0635 \u0628\u0623\u062b\u0631 \u0631\u062c\u0639\u064a: \u062a\u062c\u0631\u0628\u0629 Jekyll \u062a\u0646\u0642\u0631\u0623 \u0643\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0631\u063a\u0628\u0629 \u0627\u0644\u063a\u0631\u064a\u0632\u064a\u0629 \u0645\u0646 \u0627\u0644\u0636\u0645\u064a\u0631 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a. \u0641\u0643\u0631\u0629 \u0625\u0646 \u0627\u0644\u0646\u0641\u0633 \u0627\u0644\u0628\u0634\u0631\u064a\u0629 \u0641\u064a\u0647\u0627 \u0639\u0646\u0627\u0635\u0631 \u0645\u062a\u062d\u0627\u0631\u0628\u0629 \u0643\u0627\u0646\u062a \u062a\u0643\u0633\u0628 \u0623\u0631\u0636\u064a\u0629 \u0641\u064a \u0627\u0644\u062b\u0645\u0627\u0646\u064a\u0646\u064a\u0627\u062a \u0645\u0646 \u0627\u0644\u0642\u0631\u0646 \u0627\u0644\u062a\u0627\u0633\u0639 \u0639\u0634\u0631 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0645\u0641\u0643\u0651\u0631\u064a\u0646 \u0623\u0633\u0628\u0642\u060c \u0648\u0631\u0648\u0627\u064a\u0629 Stevenson \u0642\u062f\u0651\u0645\u062a \u0644\u0647\u0627\u0644\u0641\u0643\u0631\u0629 \u0648\u0627\u062d\u062f\u0627\u064b \u0645\u0646 \u0623\u0628\u0631\u0632 \u062a\u0639\u0627\u0628\u064a\u0631\u0647\u0627 \u0627\u0644\u0623\u062f\u0628\u064a\u0629.',

    '\u0628\u0635\u0641\u062a\u0647\u0627 \u0639\u0645\u0644 \u0642\u0648\u0637\u064a\u060c \u0627\u0644\u0631\u0648\u0627\u064a\u0629 \u062a\u0633\u062a\u0646\u062f \u0639\u0644\u0649 \u062a\u0642\u0644\u064a\u062f \u064a\u0645\u062a\u062f \u0644\u0640 Horace Walpole \u0648Mary Shelley \u0648Edgar Allan Poe. \u062a\u0633\u062a\u062e\u062f\u0645 \u0627\u062a\u0641\u0627\u0642\u064a\u0627\u062a \u0642\u0648\u0637\u064a\u0629 \u0643\u0644\u0627\u0633\u064a\u0643\u064a\u0629 \u2014 \u0627\u0644\u062a\u062d\u0648\u0651\u0644\u060c \u0627\u0644\u0627\u0632\u062f\u0648\u0627\u062c\u060c \u0627\u0644\u0638\u0644\u0627\u0645\u060c \u0627\u0644\u0636\u0628\u0627\u0628\u060c \u0627\u0644\u063a\u0631\u0641 \u0627\u0644\u0645\u0633\u0643\u0651\u0631\u0629\u060c \u0648\u0627\u0644\u0645\u0634\u0648\u0651\u0647 \u2014 \u0644\u0643\u0646\u0647\u0627 \u062a\u0646\u0642\u0644\u0647\u0627 \u0645\u0646 \u0627\u0644\u0642\u0644\u0627\u0639 \u0627\u0644\u0628\u0639\u064a\u062f\u0629 \u0625\u0644\u0649 \u0642\u0644\u0628 London \u0627\u0644\u0645\u062d\u062a\u0631\u0645\u0629. \u0647\u0627\u0644\u0625\u0637\u0627\u0631 \u0627\u0644\u0642\u0648\u0637\u064a \u0627\u0644\u062d\u0636\u0631\u064a \u064a\u062e\u0644\u0651\u064a \u0627\u0644\u0631\u0639\u0628 \u0623\u0643\u062b\u0631 \u0625\u0632\u0639\u0627\u062c\u0627\u064b\u060c \u0644\u0623\u0646\u0647 \u0623\u0642\u0631\u0628 \u0644\u0639\u0627\u0644\u0645 \u0627\u0644\u0642\u0627\u0631\u0626. \u0627\u0644\u0634\u0648\u0627\u0631\u0639 \u0627\u0644\u0645\u062e\u0646\u0648\u0642\u0629 \u0628\u0627\u0644\u0636\u0628\u0627\u0628\u060c \u0648\u0627\u0644\u0628\u0627\u0628 \u0627\u0644\u062e\u0644\u0641\u064a \u0627\u0644\u0634\u0631\u064a\u0631\u060c \u0648\u0627\u0644\u062c\u0631\u0639\u0629 \u0627\u0644\u0644\u064a \u062a\u063a\u064a\u0651\u0631 \u0627\u0644\u062c\u0633\u062f\u060c \u0643\u0644 \u0647\u0630\u064a \u062a\u0633\u0627\u0647\u0645 \u0641\u064a \u0625\u062d\u0633\u0627\u0633 \u0625\u0646 \u0627\u0644\u0631\u0639\u0628 \u0645\u0648 \u063a\u0631\u064a\u0628 \u0648\u0644\u0627 \u0628\u0639\u064a\u062f\u060c \u0628\u0644 \u0628\u064a\u062a\u064a \u0648\u0644\u0627 \u0645\u0646\u0647 \u0645\u0647\u0631\u0628.',
  ],

  // ── Key Quotations (20+) ───────────────────────────────────────────────────
  quotations: [
    {
      quote: '"If he be Mr Hyde, I shall be Mr Seek."',
      who: 'Utterson',
      whoAr: 'Utterson',
      analysis:
        'A pun that establishes Utterson as the detective figure driving the narrative. It also foreshadows the idea that seeking hidden truths is dangerous in a society built on concealment.',
      analysisAr:
        'تورية تثبّت Utterson كشخصية المحقّق اللي تحرّك السرد. كذلك تتنبّأ بفكرة إن السعي وراء حقائق مخفية يعتبر خطر في مجتمع مبني على الإخفاء.',
    },
    {
      quote: '"I learned to recognise the thorough and primitive duality of man."',
      who: 'Jekyll (Full Statement)',
      whoAr: 'Jekyll (Full Statement)',
      analysis:
        'Jekyll\'s key philosophical insight and the thesis of the novella. The word "primitive" links duality to something primal and unavoidable, not a modern corruption.',
      analysisAr:
        'الرؤية الفلسفية الجوهرية مال Jekyll، وأطروحة الرواية كاملة. كلمة "primitive" تربط الازدواجية بشي بدائي ولا منه مهرب، مو فساد حديث.',
    },
    {
      quote: '"Man is not truly one, but truly two."',
      who: 'Jekyll (Full Statement)',
      whoAr: 'Jekyll (Full Statement)',
      analysis:
        'The most concise expression of the novella\'s central theme. Jekyll goes further to speculate that man may eventually be known as "a mere polity of multifarious, incongruous and independent denizens," suggesting identity is even more fragmented than a simple binary.',
      analysisAr:
        'أوجز تعبير عن المحور المركزي للرواية. Jekyll يروح أبعد ويفترض إن الإنسان ممكن يطلع في الآخر "a mere polity of multifarious, incongruous and independent denizens"، وهذا يلمّح إن الهوية أكثر تشظّياً من مجرد ثنائية بسيطة.',
    },
    {
      quote:
        '"I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse."',
      who: 'Jekyll (Full Statement)',
      whoAr: 'Jekyll (Full Statement)',
      analysis:
        'Demonstrates the gradual loss of control. The passive construction ("losing hold," "becoming incorporated") suggests Hyde is not something Jekyll does but something that happens to him, reflecting addiction and moral decline.',
      analysisAr:
        'يبيّن فقدان السيطرة بشكل تدريجي. صيغة المبني للمجهول ("losing hold" و"becoming incorporated") تلمّح إن Hyde مو شي يسوّيه Jekyll، بل شي يصير له، ويعكس الإدمان والانحدار الأخلاقي.',
    },
    {
      quote:
        '"He is not easy to describe. There is something wrong with his appearance; something displeasing, something downright detestable."',
      who: 'Enfield',
      whoAr: 'Enfield',
      analysis:
        'The difficulty of describing Hyde is a recurring motif. Evil in the novella resists rational categorisation, reflecting Victorian anxiety about threats that cannot be named or classified.',
      analysisAr:
        'صعوبة وصف Hyde محور يتكرّر. الشر في الرواية يقاوم التصنيف العقلاني، ويعكس قلق فيكتوري من تهديدات ما تنسمّى ولا تنصنّف.',
    },
    {
      quote: '"I never saw a man I so disliked, and yet I scarce know why."',
      who: 'Enfield',
      whoAr: 'Enfield',
      analysis:
        'Hyde provokes instinctive, visceral revulsion that rational language cannot capture. Stevenson suggests that people recognise evil intuitively even when they cannot articulate it.',
      analysisAr:
        'Hyde يستدعي نفوراً غريزياً عميقاً ما تقدر اللغة العقلانية تلمّه. Stevenson يلمّح إن الناس يميّزون الشر بالحدس حتى لو ما قدروا يعبّرون عنه.',
    },
    {
      quote: '"Satan\'s signature upon a face."',
      who: 'Utterson',
      whoAr: 'Utterson',
      analysis:
        'Religious imagery frames Hyde as diabolical. The metaphor of a "signature" implies that evil is inscribed on the body, making the physical a map of the moral \u2014 a common Victorian belief in physiognomy.',
      analysisAr:
        '\u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u062f\u064a\u0646\u064a\u0629 \u062a\u0637\u0651\u0631 Hyde \u0628\u0635\u0641\u062a\u0647 \u0634\u064a\u0637\u0627\u0646\u064a. \u0627\u0633\u062a\u0639\u0627\u0631\u0629 "signature" \u062a\u0644\u0645\u0651\u062d \u0625\u0646 \u0627\u0644\u0634\u0631 \u0645\u0646\u0642\u0648\u0634 \u0639\u0644\u0649 \u0627\u0644\u062c\u0633\u062f\u060c \u062a\u062e\u0644\u0651\u064a \u0627\u0644\u062c\u0633\u0645\u0627\u0646\u064a \u062e\u0631\u064a\u0637\u0629 \u0644\u0644\u0623\u062e\u0644\u0627\u0642\u064a \u2014 \u0627\u0639\u062a\u0642\u0627\u062f \u0641\u064a\u0643\u062a\u0648\u0631\u064a \u0634\u0627\u0626\u0639 \u0645\u062a\u0639\u0644\u0651\u0642 \u0628\u0639\u0644\u0645 \u0627\u0644\u0641\u0631\u0627\u0633\u0629.',
    },
    {
      quote:
        '"The large handsome face of Dr Jekyll grew pale to the very lips, and there came a blackness about his eyes."',
      who: 'Narrator',
      whoAr: '\u0627\u0644\u0631\u0627\u0648\u064a',
      analysis:
        'Physical description signals inner turmoil. The shift from "handsome" to "pale" and "blackness" mirrors the duality theme, suggesting Hyde lurks just beneath Jekyll\'s composed exterior.',
      analysisAr:
        '\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u062c\u0633\u062f\u064a \u064a\u062f\u0644 \u0639\u0644\u0649 \u0627\u0636\u0637\u0631\u0627\u0628 \u062f\u0627\u062e\u0644\u064a. \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0645\u0646 "handsome" \u0625\u0644\u0649 "pale" \u0648"blackness" \u064a\u0639\u0643\u0633 \u0645\u062d\u0648\u0631 \u0627\u0644\u0627\u0632\u062f\u0648\u0627\u062c\u064a\u0629\u060c \u0648\u064a\u0644\u0645\u0651\u062d \u0625\u0646 Hyde \u064a\u062a\u0631\u0628\u0651\u0635 \u062a\u062d\u062a \u0633\u0637\u062d Jekyll \u0627\u0644\u0631\u0632\u064a\u0646 \u0645\u0628\u0627\u0634\u0631\u0629.',
    },
    {
      quote: '"All human beings, as we meet them, are commingled out of good and evil."',
      who: 'Utterson',
      whoAr: 'Utterson',
      analysis:
        'Utterson\'s rational version of the duality theme. The word "commingled" (mixed together) is crucial: unlike Jekyll, Utterson understands that good and evil cannot be neatly separated.',
      analysisAr:
        '\u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u0639\u0642\u0644\u0627\u0646\u064a\u0629 \u0644\u0645\u062d\u0648\u0631 \u0627\u0644\u0627\u0632\u062f\u0648\u0627\u062c\u064a\u0629 \u0645\u0646 Utterson. \u0643\u0644\u0645\u0629 "commingled" (\u0645\u062e\u0644\u0648\u0637 \u0645\u0639 \u0628\u0639\u0636) \u062c\u0648\u0647\u0631\u064a\u0629: \u0639\u0644\u0649 \u0639\u0643\u0633 Jekyll\u060c Utterson \u0641\u0627\u0647\u0645 \u0625\u0646 \u0627\u0644\u062e\u064a\u0631 \u0648\u0627\u0644\u0634\u0631 \u0645\u0627 \u064a\u062a\u0641\u0635\u0644\u0648\u0646 \u0628\u0646\u0638\u0627\u0641\u0629.',
    },
    {
      quote: '"I bring the life of that unhappy Henry Jekyll to an end."',
      who: 'Jekyll (Full Statement)',
      whoAr: 'Jekyll (Full Statement)',
      analysis:
        'Jekyll refers to himself in the third person, showing that by the end he sees himself and Hyde as truly separate beings. The word "unhappy" carries enormous pathos.',
      analysisAr:
        'Jekyll \u064a\u0634\u064a\u0631 \u0644\u0646\u0641\u0633\u0647 \u0628\u0636\u0645\u064a\u0631 \u0627\u0644\u063a\u0627\u0626\u0628\u060c \u064a\u0628\u064a\u0651\u0646 \u0625\u0646\u0647 \u0641\u064a \u0627\u0644\u0646\u0647\u0627\u064a\u0629 \u064a\u0634\u0648\u0641 \u0646\u0641\u0633\u0647 \u0648Hyde \u0643\u0627\u0626\u0646\u064a\u0646 \u0645\u0646\u0641\u0635\u0644\u064a\u0646 \u0641\u0639\u0644\u0627\u064b. \u0643\u0644\u0645\u0629 "unhappy" \u062a\u062d\u0645\u0644 \u062b\u0642\u0644 \u0639\u0627\u0637\u0641\u064a \u0639\u0638\u064a\u0645.',
    },
    {
      quote:
        '"With ape-like fury, he was trampling his victim under foot and hailing down a storm of blows."',
      who: 'Narrator (the Carew murder)',
      whoAr: '\u0627\u0644\u0631\u0627\u0648\u064a (\u062c\u0631\u064a\u0645\u0629 Carew)',
      analysis:
        'The simile "ape-like" connects Hyde to Darwinian fears of evolutionary regression. The extreme violence \u2014 "trampling" and "storm of blows" \u2014 shows Hyde\'s savagery escalating beyond control.',
      analysisAr:
        '\u0627\u0644\u062a\u0634\u0628\u064a\u0647 "ape-like" \u064a\u0631\u0628\u0637 Hyde \u0628\u0645\u062e\u0627\u0648\u0641 \u062f\u0627\u0631\u0648\u064a\u0646\u064a\u0629 \u0645\u0646 \u0627\u0644\u0627\u0631\u062a\u062f\u0627\u062f \u0627\u0644\u062a\u0637\u0648\u0631\u064a. \u0627\u0644\u0639\u0646\u0641 \u0627\u0644\u0645\u0641\u0631\u0637 \u2014 "trampling" \u0648"storm of blows" \u2014 \u064a\u0628\u064a\u0651\u0646 \u0625\u0646 \u0648\u062d\u0634\u064a\u0629 Hyde \u062a\u062a\u0635\u0627\u0639\u062f \u0641\u0648\u0642 \u0623\u064a \u0633\u064a\u0637\u0631\u0629.',
    },
    {
      quote:
        '"The door, which was equipped with neither bell nor knocker, was blistered and distained."',
      who: 'Narrator (opening chapter)',
      whoAr:
        '\u0627\u0644\u0631\u0627\u0648\u064a (\u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u0623\u0648\u0644)',
      analysis:
        "The back door to Jekyll's laboratory symbolises the hidden, disreputable side of a respectable life. Its physical neglect mirrors the moral decay that Hyde represents.",
      analysisAr:
        '\u0627\u0644\u0628\u0627\u0628 \u0627\u0644\u062e\u0644\u0641\u064a \u0645\u0627\u0644 \u0645\u062e\u062a\u0628\u0631 Jekyll \u064a\u0631\u0645\u0632 \u0644\u0644\u062c\u0627\u0646\u0628 \u0627\u0644\u0645\u062e\u0641\u064a \u0648\u0627\u0644\u0645\u0634\u064a\u0646 \u0645\u0646 \u062d\u064a\u0627\u0629 \u0645\u062d\u062a\u0631\u0645\u0629. \u0625\u0647\u0645\u0627\u0644\u0647 \u0627\u0644\u062c\u0633\u062f\u064a \u064a\u0639\u0643\u0633 \u0627\u0644\u0627\u0646\u062d\u0644\u0627\u0644 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a \u0627\u0644\u0644\u064a \u064a\u0645\u062b\u0651\u0644\u0647 Hyde.',
    },
    {
      quote: '"If I am the chief of sinners, I am the chief of sufferers also."',
      who: 'Jekyll',
      whoAr: 'Jekyll',
      analysis:
        'Jekyll casts himself as both villain and victim, seeking sympathy. The biblical echo of "chief of sinners" (from St Paul) elevates the confession to a spiritual crisis while also revealing Jekyll\'s self-pity.',
      analysisAr:
        'Jekyll \u064a\u0635\u0648\u0651\u0631 \u0646\u0641\u0633\u0647 \u0634\u0631\u064a\u0631 \u0648\u0636\u062d\u064a\u0629 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a\u060c \u064a\u062f\u0648\u0651\u0631 \u062a\u0639\u0627\u0637\u0641. \u0627\u0644\u0635\u062f\u0649 \u0627\u0644\u0625\u0646\u062c\u064a\u0644\u064a \u0645\u0627\u0644 "chief of sinners" (\u0645\u0646 \u0627\u0644\u0642\u062f\u064a\u0633 Paul) \u064a\u0631\u0641\u0639 \u0627\u0644\u0627\u0639\u062a\u0631\u0627\u0641 \u0644\u0645\u0633\u062a\u0648\u0649 \u0623\u0632\u0645\u0629 \u0631\u0648\u062d\u064a\u0629\u060c \u0648\u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a \u064a\u0643\u0634\u0641 \u0634\u0641\u0642\u0629 Jekyll \u0639\u0644\u0649 \u0646\u0641\u0633\u0647.',
    },
    {
      quote: '"O God!" I screamed, and "O God!" again and again.',
      who: 'Lanyon (narrative letter)',
      whoAr:
        'Lanyon (\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0633\u0631\u062f\u064a\u0629)',
      analysis:
        "Lanyon's repetition and exclamation marks convey the total collapse of his rational worldview. Witnessing the transformation destroys his faith in the ordered, scientific universe he believed in.",
      analysisAr:
        '\u062a\u0643\u0631\u0627\u0631 Lanyon \u0648\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0639\u062c\u0651\u0628 \u062a\u0648\u0635\u0644 \u0627\u0644\u0627\u0646\u0647\u064a\u0627\u0631 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0645\u0646\u0638\u0648\u0631\u0647 \u0627\u0644\u0639\u0642\u0644\u0627\u0646\u064a \u0644\u0644\u0639\u0627\u0644\u0645. \u0634\u0647\u0627\u062f\u062a\u0647 \u0639\u0644\u0649 \u0627\u0644\u062a\u062d\u0648\u0651\u0644 \u062a\u062f\u0645\u0651\u0631 \u0625\u064a\u0645\u0627\u0646\u0647 \u0628\u0643\u0648\u0646 \u0645\u0646\u0638\u0651\u0645 \u0648\u0639\u0644\u0645\u064a \u0643\u0627\u0646 \u0645\u0624\u0645\u0646 \u0641\u064a\u0647.',
    },
    {
      quote: '"I felt younger, lighter, happier in body."',
      who: 'Jekyll (Full Statement, describing becoming Hyde)',
      whoAr:
        'Jekyll (Full Statement\u060c \u064a\u0635\u0641 \u0643\u064a\u0641 \u0635\u0627\u0631 Hyde)',
      analysis:
        'The initial pleasure of transformation mirrors the seductive appeal of transgression. The positivity of "younger, lighter, happier" makes Hyde\'s liberation feel genuinely attractive, which is precisely why it is so dangerous.',
      analysisAr:
        '\u0644\u0630\u0629 \u0627\u0644\u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0623\u0648\u0644\u0649 \u062a\u0639\u0643\u0633 \u062c\u0627\u0630\u0628\u064a\u0629 \u0627\u0644\u062a\u062c\u0627\u0648\u0632 \u0627\u0644\u0625\u063a\u0631\u0627\u0626\u064a\u0629. \u0625\u064a\u062c\u0627\u0628\u064a\u0629 "younger, lighter, happier" \u062a\u062e\u0644\u0651\u064a \u062a\u062d\u0631\u0651\u0631 Hyde \u062d\u0644\u0648 \u0641\u0639\u0644\u0627\u064b\u060c \u0648\u0647\u0630\u0627 \u0628\u0627\u0644\u0636\u0628\u0637 \u0644\u064a\u0634 \u0647\u0648 \u062e\u0637\u0631.',
    },
    {
      quote:
        '"This was the shocking thing; that the slime of the pit seemed to utter cries and voices."',
      who: 'Jekyll (Full Statement)',
      whoAr: 'Jekyll (Full Statement)',
      analysis:
        'Biblical imagery of Hell ("the slime of the pit") describes Hyde\'s nature. The verb "utter" gives the evil agency and voice, suggesting it is alive and demanding expression.',
      analysisAr:
        '\u0635\u0648\u0631 \u0625\u0646\u062c\u064a\u0644\u064a\u0629 \u0644\u0644\u062c\u062d\u064a\u0645 ("the slime of the pit") \u062a\u0635\u0641 \u0637\u0628\u064a\u0639\u0629 Hyde. \u0641\u0639\u0644 "utter" \u064a\u0639\u0637\u064a \u0627\u0644\u0634\u0631 \u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u0635\u0648\u062a\u060c \u064a\u0644\u0645\u0651\u062d \u0625\u0646\u0647 \u062d\u064a \u0648\u064a\u0637\u0627\u0644\u0628 \u0628\u0627\u0644\u062a\u0639\u0628\u064a\u0631.',
    },
    {
      quote:
        '"He had always been known for charities; he was now no less distinguished for religion."',
      who: 'Narrator',
      whoAr: '\u0627\u0644\u0631\u0627\u0648\u064a',
      analysis:
        "Describes Jekyll's attempts to compensate for Hyde's crimes through exaggerated virtue. The irony highlights Victorian hypocrisy: public goodness is used to conceal private sin.",
      analysisAr:
        '\u064a\u0635\u0641 \u0645\u062d\u0627\u0648\u0644\u0627\u062a Jekyll \u064a\u0639\u0648\u0651\u0636 \u0639\u0646 \u062c\u0631\u0627\u0626\u0645 Hyde \u0628\u0641\u0636\u064a\u0644\u0629 \u0645\u0628\u0627\u0644\u063a \u0641\u064a\u0647\u0627. \u0627\u0644\u0633\u062e\u0631\u064a\u0629 \u062a\u0628\u0631\u0632 \u0627\u0644\u0646\u0641\u0627\u0642 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a: \u0627\u0644\u062e\u064a\u0631 \u0627\u0644\u0639\u0644\u0646\u064a \u064a\u0633\u062a\u062e\u062f\u0645 \u0639\u0634\u0627\u0646 \u064a\u062e\u0641\u064a \u0627\u0644\u0630\u0646\u0628 \u0627\u0644\u062e\u0627\u0635.',
    },
    {
      quote:
        '"I had voluntarily stripped myself of all those balancing instincts by which even the worst of us continues to walk with some degree of steadiness among temptations."',
      who: 'Jekyll (Full Statement)',
      whoAr: 'Jekyll (Full Statement)',
      analysis:
        'Jekyll acknowledges that the potion removed his conscience entirely, not just his inhibitions. The metaphor of "balancing instincts" frames morality as equilibrium rather than simple goodness, reinforcing the duality theme.',
      analysisAr:
        'Jekyll \u064a\u0639\u062a\u0631\u0641 \u0625\u0646 \u0627\u0644\u062c\u0631\u0639\u0629 \u0634\u0627\u0644\u062a \u0636\u0645\u064a\u0631\u0647 \u0643\u0627\u0645\u0644\u060c \u0645\u0648 \u0628\u0633 \u0643\u0648\u0627\u0628\u062d\u0647. \u0627\u0633\u062a\u0639\u0627\u0631\u0629 "balancing instincts" \u062a\u0637\u0651\u0631 \u0627\u0644\u0623\u062e\u0644\u0627\u0642 \u0628\u0635\u0641\u062a\u0647\u0627 \u062a\u0648\u0627\u0632\u0646 \u0645\u0648 \u0645\u062c\u0631\u062f \u062e\u064a\u0631 \u0628\u0633\u064a\u0637\u060c \u0648\u0647\u0630\u0627 \u064a\u0642\u0648\u0651\u064a \u0645\u062d\u0648\u0631 \u0627\u0644\u0627\u0632\u062f\u0648\u0627\u062c\u064a\u0629.',
    },
    {
      quote: '"The fog still slept on the wing above the drowned city."',
      who: 'Narrator',
      whoAr: '\u0627\u0644\u0631\u0627\u0648\u064a',
      analysis:
        'Pathetic fallacy creates a suffocating Gothic atmosphere. The personified fog "sleeping" over a "drowned" city suggests a London submerged in secrecy, unable to see clearly \u2014 mirroring the characters\' moral blindness.',
      analysisAr:
        '\u0627\u0644\u0645\u063a\u0627\u0644\u0637\u0629 \u0627\u0644\u0639\u0627\u0637\u0641\u064a\u0629 (pathetic fallacy) \u062a\u062e\u0644\u0642 \u062c\u0648 \u0642\u0648\u0637\u064a \u062e\u0627\u0646\u0642. \u0627\u0644\u0636\u0628\u0627\u0628 \u0627\u0644\u0645\u0634\u062e\u0651\u0635 \u0648\u0647\u0648 "sleeping" \u0641\u0648\u0642 \u0645\u062f\u064a\u0646\u0629 "drowned" \u064a\u0644\u0645\u0651\u062d \u0628\u0640 London \u0645\u063a\u0631\u0642\u0629 \u0641\u064a \u0627\u0644\u0633\u0631\u064a\u0629\u060c \u0645\u0627 \u062a\u0634\u0648\u0641 \u0628\u0648\u0636\u0648\u062d \u2014 \u064a\u0639\u0643\u0633 \u0639\u0645\u0649 \u0627\u0644\u0634\u062e\u0635\u064a\u0627\u062a \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a.',
    },
    {
      quote: '"It was Hyde, after all, and Hyde alone, that was guilty."',
      who: 'Jekyll (Full Statement)',
      whoAr: 'Jekyll (Full Statement)',
      analysis:
        "Jekyll tries to absolve himself by externalising blame onto Hyde, but Stevenson makes clear this is self-deception. The novella's moral force depends on the reader understanding that Jekyll and Hyde are the same person.",
      analysisAr:
        'Jekyll \u064a\u062d\u0627\u0648\u0644 \u064a\u0639\u0641\u064a \u0646\u0641\u0633\u0647 \u0628\u0625\u0644\u0642\u0627\u0621 \u0627\u0644\u0644\u0648\u0645 \u0639\u0644\u0649 Hyde\u060c \u0644\u0643\u0646 Stevenson \u064a\u0628\u064a\u0651\u0646 \u0625\u0646 \u0647\u0630\u0627 \u062e\u062f\u0627\u0639 \u0644\u0644\u0646\u0641\u0633. \u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0623\u062e\u0644\u0627\u0642\u064a\u0629 \u0644\u0644\u0631\u0648\u0627\u064a\u0629 \u062a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0641\u0647\u0645 \u0627\u0644\u0642\u0627\u0631\u0626 \u0625\u0646 Jekyll \u0648Hyde \u0646\u0641\u0633 \u0627\u0644\u0634\u062e\u0635.',
    },
    {
      quote: '"The moment I choose, I can be rid of Mr Hyde."',
      who: 'Jekyll',
      whoAr: 'Jekyll',
      analysis:
        "Dramatic irony: Jekyll believes he is in control, but the reader eventually learns that Hyde cannot be dismissed at will. This overconfidence is Jekyll's tragic flaw and echoes the hubris of classical tragedy.",
      analysisAr:
        '\u0633\u062e\u0631\u064a\u0629 \u062f\u0631\u0627\u0645\u064a\u0629: Jekyll \u064a\u0635\u062f\u0651\u0642 \u0625\u0646\u0647 \u0645\u0633\u064a\u0637\u0631\u060c \u0644\u0643\u0646 \u0627\u0644\u0642\u0627\u0631\u0626 \u064a\u0639\u0631\u0641 \u0644\u0627\u062d\u0642\u0627\u064b \u0625\u0646 Hyde \u0645\u0627 \u064a\u062a\u0645 \u0627\u0644\u062a\u062e\u0644\u0651\u0635 \u0645\u0646\u0647 \u0628\u0627\u0644\u0625\u0631\u0627\u062f\u0629. \u0647\u0627\u0644\u062b\u0642\u0629 \u0627\u0644\u0632\u0627\u064a\u062f\u0629 \u0639\u064a\u0628 Jekyll \u0627\u0644\u0645\u0623\u0633\u0627\u0648\u064a\u060c \u0648\u062a\u0639\u0643\u0633 \u0627\u0644\u0643\u0628\u0631\u064a\u0627\u0621 (hubris) \u0641\u064a \u0627\u0644\u062a\u0631\u0627\u062c\u064a\u062f\u064a\u0627 \u0627\u0644\u0643\u0644\u0627\u0633\u064a\u0643\u064a\u0629.',
    },
    {
      quote:
        '"He put the glass to his lips and drank at one gulp... and there before my eyes \u2014 pale and shaken, and half fainting \u2014 there stood Henry Jekyll!"',
      who: 'Lanyon (narrative letter)',
      whoAr:
        'Lanyon (\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0633\u0631\u062f\u064a\u0629)',
      analysis:
        "The climactic transformation scene. The dashes and breathless syntax convey Lanyon's horror. The visual shock of watching Hyde become Jekyll destroys Lanyon's entire understanding of reality.",
      analysisAr:
        '\u0645\u0634\u0647\u062f \u0627\u0644\u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0630\u0631\u0648\u064a. \u0627\u0644\u0634\u064f\u0631\u064e\u0637 \u0648\u0627\u0644\u0635\u064a\u0627\u063a\u0629 \u0627\u0644\u0645\u062a\u0642\u0637\u0651\u0639\u0629 \u062a\u0648\u0635\u0644 \u0631\u0639\u0628 Lanyon. \u0627\u0644\u0635\u062f\u0645\u0629 \u0627\u0644\u0628\u0635\u0631\u064a\u0629 \u0645\u0646 \u0645\u0634\u0627\u0647\u062f\u0629 Hyde \u064a\u0635\u064a\u0631 Jekyll \u062a\u062f\u0645\u0651\u0631 \u0641\u0647\u0645 Lanyon \u0644\u0644\u0648\u0627\u0642\u0639 \u0643\u0644\u0647.',
    },
    {
      quote: '"Think of it \u2014 I did not even exist!"',
      who: "Jekyll (Full Statement, on Hyde's legal non-existence)",
      whoAr:
        'Jekyll (Full Statement\u060c \u0639\u0646 \u0639\u062f\u0645 \u0648\u062c\u0648\u062f Hyde \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a)',
      analysis:
        'Hyde has no social identity, birth certificate, or history. He exists outside the legal and social frameworks that govern Victorian life, making him literally unaccountable \u2014 a walking embodiment of the freedom from consequence that Jekyll craves.',
      analysisAr:
        'Hyde \u0645\u0627 \u0644\u0647 \u0647\u0648\u064a\u0629 \u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629\u060c \u0648\u0644\u0627 \u0634\u0647\u0627\u062f\u0629 \u0645\u064a\u0644\u0627\u062f\u060c \u0648\u0644\u0627 \u062a\u0627\u0631\u064a\u062e. \u0647\u0648 \u0645\u0648\u062c\u0648\u062f \u062e\u0627\u0631\u062c \u0627\u0644\u0623\u0637\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629 \u0648\u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629 \u0627\u0644\u0644\u064a \u062a\u062d\u0643\u0645 \u0627\u0644\u062d\u064a\u0627\u0629 \u0627\u0644\u0641\u064a\u0643\u062a\u0648\u0631\u064a\u0629\u060c \u0648\u0647\u0630\u0627 \u064a\u062e\u0644\u0651\u064a\u0647 \u062d\u0631\u0641\u064a\u0627\u064b \u063a\u064a\u0631 \u0645\u0633\u0624\u0648\u0644 \u2014 \u062a\u062c\u0633\u064a\u062f \u0645\u0627\u0634\u064a \u0644\u0644\u062d\u0631\u0651\u064a\u0629 \u0645\u0646 \u0627\u0644\u0639\u0648\u0627\u0642\u0628 \u0627\u0644\u0644\u064a \u064a\u0634\u062a\u0647\u064a\u0647\u0627 Jekyll.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'jh-1',
    question:
      'Who is the main narrator figure through whose perspective we experience the mystery?',
    type: 'multiple-choice',
    options: ['Dr Jekyll', 'Mr Hyde', 'Mr Utterson', 'Dr Lanyon'],
    correctIndex: 2,
    explanation:
      'Mr Utterson, the lawyer, is the lens through which the reader experiences the mystery. His rational, measured perspective makes the Gothic horror more unsettling by contrast.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'jh-2',
    question: 'What does Hyde do to the young girl in the opening chapter?',
    type: 'multiple-choice',
    options: ['He kidnaps her', 'He tramples her', 'He speaks rudely to her', 'He steals from her'],
    correctIndex: 1,
    explanation:
      "Hyde tramples a young girl in the street and shows no remorse. This first act of violence establishes Hyde's cruelty and introduces the mystery of his connection to Jekyll.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'jh-3',
    question: 'Who does Hyde murder in the novella?',
    type: 'multiple-choice',
    options: ['Mr Utterson', 'Dr Lanyon', 'Sir Danvers Carew', 'Richard Enfield'],
    correctIndex: 2,
    explanation:
      "Hyde brutally murders Sir Danvers Carew, a respected MP, beating him to death with a heavy cane. This escalation from trampling a child to frenzied murder shows Hyde's violence growing more extreme.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'jh-4',
    question: 'What is the central theme of the novella?',
    type: 'multiple-choice',
    options: [
      'The importance of friendship',
      'The duality of human nature',
      'The dangers of travel',
      'The value of education',
    ],
    correctIndex: 1,
    explanation:
      'Jekyll states that "man is not truly one, but truly two." The novella\'s central theme is that every human being contains both good and evil impulses, and attempting to separate them is dangerous.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'jh-5',
    question: 'When was Jekyll and Hyde published?',
    type: 'multiple-choice',
    options: ['1818', ' 1847', '1886', '1897'],
    correctIndex: 2,
    explanation:
      'Published in 1886, during the late Victorian era. The novella reflects anxieties about respectability, repression, and the scientific discoveries (especially Darwinism) that were challenging traditional views of human nature.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'jh-6',
    question: 'How do characters describe their reaction to meeting Hyde?',
    type: 'multiple-choice',
    options: [
      'They find him charming',
      'They feel instinctive revulsion they cannot explain',
      'They are indifferent',
      'They find him handsome but rude',
    ],
    correctIndex: 1,
    explanation:
      'Every character who meets Hyde feels inexplicable revulsion. Enfield calls it "something downright detestable" and Utterson describes "Satan\'s signature upon a face." Evil resists rational categorisation.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'jh-7',
    question: "What happens to Dr Lanyon after witnessing Hyde's transformation?",
    type: 'multiple-choice',
    options: [
      "He becomes Hyde's ally",
      'He dies from the shock within weeks',
      'He reports Jekyll to the police',
      'He creates his own potion',
    ],
    correctIndex: 1,
    explanation:
      'The shock of witnessing Hyde transform into Jekyll kills Lanyon within weeks. He represents the limits of Victorian rational science: he cannot accept what he has seen and it destroys him.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'jh-8',
    question: 'What does Jekyll mean when he says "man is not truly one, but truly two"?',
    type: 'multiple-choice',
    options: [
      'People have twin siblings',
      'Every person contains both good and evil impulses that cannot be separated',
      'People should live double lives',
      'Science can create two versions of a person',
    ],
    correctIndex: 1,
    explanation:
      "This is the novella's thesis: human nature contains a fundamental duality of good and evil. Jekyll's experiment attempts to separate these, but Stevenson shows this separation is impossible and dangerous.",
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'jh-9',
    question: "How does Stevenson use the setting of London to reinforce the novella's themes?",
    type: 'multiple-choice',
    options: [
      'London is bright and cheerful throughout',
      'The fog-shrouded streets mirror the culture of concealment and moral blindness',
      'London is used only as a neutral backdrop',
      'The setting is in the countryside',
    ],
    correctIndex: 1,
    explanation:
      '"The fog still slept on the wing above the drowned city." Stevenson uses fog, darkness, and the contrast between respectable front doors and sinister back entrances to create a Gothic atmosphere that mirrors the characters\' hidden lives and moral blindness.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'jh-10',
    question: 'Why is Hyde described with ape-like imagery?',
    type: 'multiple-choice',
    options: [
      'He looks like an ape',
      'It connects to Darwinian fears of evolutionary regression — the beast lurking beneath civilisation',
      'Stevenson liked animal descriptions',
      'It was a common insult',
    ],
    correctIndex: 1,
    explanation:
      'Hyde is described as "ape-like" with "extraordinary quickness," reflecting Victorian anxieties about Darwin\'s theory of evolution. These descriptions suggest that beneath the civilised surface lurks something primitive and bestial that can resurface at any time.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'jh-11',
    question: 'What is the significance of the mysterious back door in the opening chapter?',
    type: 'multiple-choice',
    options: [
      'It is just an entrance',
      'It symbolises the hidden, disreputable side of a respectable life',
      'It belongs to a different house',
      'It represents escape',
    ],
    correctIndex: 1,
    explanation:
      'The "blistered and distained" back door to Jekyll\'s laboratory symbolises the hidden, shameful side of respectability. While Jekyll\'s front door is grand and proper, the back door (which Hyde uses) represents the secret life concealed behind Victorian propriety.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'jh-12',
    question:
      'What does Jekyll mean by "I felt younger, lighter, happier in body" when describing becoming Hyde?',
    type: 'multiple-choice',
    options: [
      'He is exercising more',
      'The initial transformation feels pleasurable, mirroring the seductive appeal of transgression',
      'He has taken medicine',
      'He is dreaming',
    ],
    correctIndex: 1,
    explanation:
      'The positive language ("younger, lighter, happier") makes Hyde\'s liberation genuinely attractive, which is precisely why it is so dangerous. It mirrors the seductive appeal of giving in to impulse without moral consequence — an appeal that becomes addictive.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'jh-13',
    question: 'How does Stevenson use the narrative structure to reinforce the theme of secrecy?',
    type: 'multiple-choice',
    options: [
      'The story is told chronologically',
      'The truth is withheld until the final chapters through sealed letters and multiple narrators',
      'There is only one narrator',
      'The structure is simple and straightforward',
    ],
    correctIndex: 1,
    explanation:
      "The novella is structured around secrets: locked doors, sealed letters, wills, and confessions read only after death. The central revelation is withheld until the final pages, mirroring Victorian society's obsessive concealment.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'jh-14',
    question:
      'What does "It was Hyde, after all, and Hyde alone, that was guilty" reveal about Jekyll?',
    type: 'multiple-choice',
    options: [
      'Jekyll is telling the truth',
      'Jekyll is engaging in self-deception by externalising blame, when they are the same person',
      'Hyde acted independently',
      'Jekyll was not involved',
    ],
    correctIndex: 1,
    explanation:
      "Jekyll tries to absolve himself by blaming Hyde, but this is self-deception. The novella's moral force depends on the reader understanding that Jekyll and Hyde are the same person — separating guilt from the self is impossible.",
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'jh-15',
    question: 'How does the theme of repression connect to Victorian society?',
    type: 'multiple-choice',
    options: [
      'Victorians were not repressed',
      'The demand for respectability drove people towards secret transgression rather than honest self-knowledge',
      'Repression only affected the lower classes',
      'The novella does not discuss repression',
    ],
    correctIndex: 1,
    explanation:
      "Almost every character suppresses knowledge, desire, or scandal. Stevenson portrays a society where reputation matters more than truth, and the pressure to appear morally spotless creates the conditions for secret vice. Jekyll's potion is a chemical version of the double life many Victorians already led.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'jh-16',
    question:
      'What is significant about Hyde having no social identity, birth certificate, or history?',
    type: 'multiple-choice',
    options: [
      'He is a ghost',
      'He exists outside all legal and social frameworks, making him literally unaccountable',
      'It is a plot hole',
      'He destroyed his records',
    ],
    correctIndex: 1,
    explanation:
      'Hyde has no social identity — "Think of it — I did not even exist!" He exists outside the legal and social frameworks that govern Victorian life, making him a walking embodiment of the freedom from consequence that Jekyll craves.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'jh-17',
    question: 'How can a Freudian critical lens be applied to Jekyll and Hyde?',
    type: 'multiple-choice',
    options: [
      "Stevenson had read Freud's work",
      "Jekyll's experiment can be read retrospectively as separating the id (instinct) from the superego (conscience), though Freud's theories came decades later",
      'It cannot be applied',
      'The connection is coincidental',
    ],
    correctIndex: 1,
    explanation:
      "Freud's theories were formulated long after Stevenson wrote (Interpretation of Dreams in 1900; the id/ego/superego model in the 1920s), so the novella does not consciously 'anticipate' him. However, a Freudian lens can be applied retrospectively: Hyde maps onto the id (instinctual desire) and Jekyll's public persona onto the superego (social conscience). Examiners reward this as a critical reading, not as authorial intention.",
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'jh-18',
    question:
      'What does the phrase "Satan\'s signature upon a face" suggest about Victorian attitudes to evil?',
    type: 'multiple-choice',
    options: [
      'It is just a metaphor',
      'It reflects the Victorian belief in physiognomy — that evil is inscribed on the body',
      'It means Hyde wears a mask',
      'It is a reference to a painting',
    ],
    correctIndex: 1,
    explanation:
      'Utterson\'s description reflects physiognomy, the Victorian pseudo-science that believed moral character was readable in facial features. The metaphor of a "signature" implies evil is inscribed on the body — a common Victorian belief that Stevenson both uses and critiques.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'jh-19',
    question: 'Why does Hyde grow physically larger as the novella progresses?',
    type: 'multiple-choice',
    options: [
      'He is eating more',
      'It suggests that evil, once indulged, becomes increasingly dominant and harder to control',
      'It is a mistake by Stevenson',
      'He is taking more potion',
    ],
    correctIndex: 1,
    explanation:
      'Hyde starts smaller than Jekyll but grows larger, suggesting that evil, once unleashed, becomes increasingly dominant. This physical growth mirrors the psychological reality: the more Jekyll indulges his dark side, the harder it becomes to control.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'jh-20',
    question: 'How does the novella function as a critique of Victorian gentlemanly culture?',
    type: 'multiple-choice',
    options: [
      'It celebrates Victorian values',
      'It exposes how a society obsessed with reputation produces monsters by forcing desire underground',
      'It ignores Victorian culture',
      'It suggests all Victorians were criminals',
    ],
    correctIndex: 1,
    explanation:
      "Every gentleman in the story prioritises discretion over truth. Stevenson argues that a society obsessed with reputation inevitably produces monsters, because the things people refuse to acknowledge do not disappear — they grow stronger in the dark. Jekyll's tragedy is caused as much by Victorian repression as by his experiment.",
    topic: 'Themes',
    difficulty: 'foundation',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Duality of Human Nature',
    summary:
      'The central theme: every person contains both good and evil, and they cannot be separated.',
    keyPoints: [
      '"Man is not truly one, but truly two"',
      "Jekyll's experiment attempts to divide good from evil but fails",
      'Hyde grows stronger over time, suggesting evil is not easily controlled',
      'Utterson\'s wisdom: good and evil are "commingled" and cannot be neatly separated',
      "The horror is not Hyde's existence but Jekyll's belief he can divide the self",
    ],
  },
  {
    topic: 'Victorian Repression and Hypocrisy',
    summary:
      'The novella exposes how the pressure to appear respectable drives people towards secret transgression.',
    keyPoints: [
      'Every character suppresses knowledge: Utterson, Enfield, Jekyll',
      "Jekyll's potion is a chemical version of the double life many Victorians led",
      'Reputation matters more than truth in this world',
      'The locked doors, sealed letters, and back entrances symbolise concealment',
      'The demand for respectability creates the conditions for secret vice',
    ],
  },
  {
    topic: 'Science and Transgression',
    summary: "Jekyll's experiment represents science trespassing into territory belonging to God.",
    keyPoints: [
      'Lanyon condemns it as "unscientific balderdash"',
      'The real danger is moral overreach, not bad method',
      "Written in the wake of Darwin's Origin of Species (1859)",
      "Hyde's ape-like appearance invokes fears of evolutionary regression",
      'The novella asks: what happens when knowledge outstrips moral responsibility?',
    ],
  },
  {
    topic: 'Secrecy and the Gothic',
    summary:
      'The novella is structured around secrets and uses Gothic conventions to create horror.',
    keyPoints: [
      'Locked doors, sealed letters, wills, confessions read only after death',
      'The fog-shrouded London setting mirrors concealment',
      'Urban Gothic: horror relocated from remote castles to respectable London',
      'The revelation is withheld until the final chapters',
      'The mysterious back door symbolises the hidden, disreputable side of respectability',
    ],
  },
  {
    topic: 'Good vs Evil',
    summary: 'Hyde embodies pure evil, but Stevenson complicates simple moral readings.',
    keyPoints: [
      'Hyde tramples, murders, and feels no remorse',
      'But Jekyll is not purely good — he enjoyed the freedom Hyde gave him',
      'Goodness maintained only by repression may not be genuine',
      'Evil lives within every apparently respectable person',
      "Jekyll's attempts to blame Hyde alone are self-deception",
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Stevenson present the duality of human nature in Jekyll and Hyde?',
  'How does Stevenson use the character of Hyde to explore the theme of evil?',
  'How does Stevenson explore the theme of secrecy and reputation in Victorian society?',
  'How does Stevenson use setting to create a sense of mystery and fear?',
  'How does Stevenson present the dangers of science without moral responsibility?',
]

export default async function JekyllAndHydePage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }
  const userBoardLabel = board ? (getBoardConfig(board)?.shortName ?? 'AQA') : 'AQA'

  return (
    <>
      <CourseJsonLd
        name="Dr Jekyll and Mr Hyde — Complete GCSE Study Guide"
        description="In-depth study guide for Dr Jekyll and Mr Hyde covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <LearningResourceJsonLd
        name="Dr Jekyll and Mr Hyde revision guide"
        description="GCSE-aligned study guide for Stevenson's Strange Case of Dr Jekyll and Mr Hyde, covering plot, characters, themes, key quotations, historical context and exam essay plans."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/revision/texts/jekyll-and-hyde"
        about="Dr Jekyll and Mr Hyde"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Dr Jekyll and Mr Hyde',
            url: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde',
          },
        ]}
      />
      <TextStudyHub
        textName="Dr Jekyll and Mr Hyde"
        textType="novella"
        examBoard={userBoardLabel}
        basePath="/revision/texts/jekyll-and-hyde"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/jekyll-and-hyde/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'chapters',
            href: '/revision/texts/jekyll-and-hyde/chapters',
            icon: 'acts' as const,
            title: 'Chapter-by-Chapter',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/jekyll-and-hyde/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/jekyll-and-hyde/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/jekyll-and-hyde/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/jekyll-and-hyde/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/jekyll-and-hyde/essay-plans',
            icon: 'essays' as const,
            title: 'Essay Plans',
            description: 'GCSE essay plans',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Stevenson present the duality of human nature in Jekyll and Hyde?',
          'How does Stevenson use the character of Hyde to explore the theme of evil?',
          'How does Stevenson explore the theme of secrecy and reputation?',
          'How does Stevenson use setting to create a sense of mystery and fear?',
          'How does Stevenson present the dangers of science in Jekyll and Hyde?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Dr Jekyll and Mr Hyde"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Strange Case of Dr Jekyll and Mr Hyde</em> (1886) by Robert Louis Stevenson is in the
        public domain. Quotations are reproduced freely.
      </p>
    </>
  )
}
