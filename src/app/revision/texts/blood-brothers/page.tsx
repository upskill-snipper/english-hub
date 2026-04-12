import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'

export const metadata: Metadata = {
  title: 'Blood Brothers — Study Guide | The English Hub',
  description:
    'In-depth study guide for Blood Brothers by Willy Russell: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/blood-brothers',
  },
}

const data: TextGuideData = {
  title: 'Blood Brothers',
  author: 'Willy Russell',
  year: 'first staged 1983',
  category: 'Play',
  badge: 'Edexcel / Eduqas',
  intro:
    "Willy Russell's musical play tells the story of twin brothers separated at birth — one raised in poverty by their biological mother Mrs Johnstone, the other in wealth by Mrs Lyons. Framed by a Narrator who speaks of superstition and fate, Blood Brothers is a ballad about class, love and the predictable ending of a society that refuses to care for everyone equally.",
  quickInfo: {
    genre: 'Musical play / Social tragedy',
    setting: 'Liverpool, 1960s to early 1980s',
    length: 'Two-act play with songs',
    published: '1983 (musical version)',
  },
  plotSummary: [
    "Mrs Johnstone, a working-class Liverpool mother already raising seven children, discovers she is pregnant with twins. Her employer Mrs Lyons, childless and desperate, persuades her to give up one of the babies. They swear on a Bible, and Mrs Lyons invents a superstition that twins separated at birth must die the moment they learn the truth. Mrs Lyons keeps Edward; Mrs Johnstone raises Mickey.",
    "Seven years later, Mickey and Edward meet by chance, become instant best friends and, not knowing the truth, declare themselves blood brothers. Their friendship crosses the class line that their mothers have drawn, and Russell uses their innocence to expose how absurd and brutal that line really is. The Lyons family moves to the countryside to keep Edward away from Mickey.",
    "In a middle section built on songs and montages, the boys grow up. Mickey works in a factory and marries his childhood sweetheart Linda; Edward goes to university. When Mickey loses his job, gets drawn into a robbery with his older brother Sammy, and is sent to prison, his world collapses. Released depressed and on medication, he struggles to rebuild his life.",
    "Edward, now a local councillor, tries to help Mickey and Linda. When Mickey learns that Edward and Linda have been spending time together, he takes a gun to the town hall. Mrs Johnstone arrives and tells both sons the truth: they are twins. Mickey, shattered by the revelation that everything could have been different, accidentally shoots Edward, and the police shoot Mickey. The Narrator\u2019s superstition is fulfilled.",
  ],
  characters: [
    {
      name: 'Mrs Johnstone',
      role: 'Biological mother of both boys',
      body: 'Warm, funny, exhausted and trapped, Mrs Johnstone is Russell\u2019s portrait of working-class motherhood under Thatcherism. Her opening and closing songs frame the entire play as her testimony.',
    },
    {
      name: 'Mrs Lyons',
      role: 'Middle-class adoptive mother',
      body: 'Lonely, infertile and increasingly unhinged, Mrs Lyons uses class privilege to claim a child she did not bear. Russell refuses simple villainy: her grief is real, and her descent into paranoia is tragic in its own right.',
    },
    {
      name: 'Mickey Johnstone',
      role: 'The twin raised in poverty',
      body: 'Cheeky and bright as a child, ground down by unemployment and prison as an adult, Mickey embodies the play\u2019s argument that environment, not character, decides outcomes.',
    },
    {
      name: 'Edward Lyons',
      role: 'The twin raised in wealth',
      body: 'Edward is kind and bookish, but his privilege is unmistakable. Russell carefully shows how the same warmth is read as naive in Edward and stupid in Mickey, simply because of accent and address.',
    },
    {
      name: 'Linda',
      role: 'Mickey\u2019s wife',
      body: 'Feisty and loyal, Linda grows up alongside the boys and marries Mickey. Her slow despair as Mickey disappears into depression is one of the play\u2019s most quietly devastating arcs.',
    },
    {
      name: 'The Narrator',
      role: 'Choric commentator',
      body: 'A brooding, almost supernatural figure who threads the play together with songs and warnings about the Devil. He embodies the play\u2019s sense of class-driven fate.',
    },
  ],
  themes: [
    {
      title: 'Class and inequality',
      body: "Russell\u2019s core argument is that the same child will have a radically different life depending on which side of the class line they land on. The play dramatises this as a controlled experiment with two boys who are literally identical.",
    },
    {
      title: 'Fate and superstition',
      body: 'The Narrator and Mrs Lyons both invoke superstition, but Russell uses it to critique a society that prefers to blame fate for problems of its own making. The real curse is unemployment and prejudice.',
    },
    {
      title: 'Friendship and identity',
      body: 'Mickey and Edward\u2019s bond is genuine and unselfconscious. Russell uses their friendship to show that the differences our society treats as essential are almost entirely learned.',
    },
    {
      title: 'Motherhood',
      body: 'Both mothers love both boys in different ways, and Russell refuses to simply condemn either. Mrs Johnstone\u2019s sacrificial love and Mrs Lyons\u2019s possessive love both produce catastrophe.',
    },
    {
      title: 'Thatcher\u2019s Britain',
      body: "The play moves into the 1980s, when unemployment in Liverpool hit devastating levels. Russell names Thatcher in the text and makes the economic collapse of Mickey\u2019s world explicit and political.",
    },
  ],
  historicalContext: [
    'Willy Russell grew up in working-class Liverpool and wrote Blood Brothers first as a school play in 1981, then as a musical in 1983. The play draws directly on his own city: its streets, its speech, its humour and the slow economic disaster that engulfed it in the decade after his own childhood.',
    'Liverpool in the 1970s and 1980s was devastated by industrial decline and mass unemployment. Factories closed, docks shrank, and the Toxteth riots of 1981 marked a flashpoint in national anger. Mickey\u2019s trajectory — young worker to unemployed to depressed and imprisoned — tracks the experience of many real families.',
    'Russell names Margaret Thatcher explicitly in the play. Her government\u2019s monetarist policies were widely blamed for accelerating deindustrialisation in cities like Liverpool, and the tone of Blood Brothers is one of controlled political fury dressed up as a pop musical.',
    'The play belongs to a tradition of British social-realist drama that includes Shelagh Delaney\u2019s A Taste of Honey and Alan Bleasdale\u2019s Boys from the Blackstuff. Russell\u2019s innovation is marrying that tradition to the accessibility of popular musical theatre.',
  ],
  quotations: [
    {
      quote: '"Tell me it\'s not true, say it\'s just a story."',
      who: 'Mrs Johnstone — final song',
      analysis: "The haunting refrain that closes the play, asking the audience to refuse the tragedy's inevitability.",
    },
    {
      quote: '"Did you ever hear the story of the Johnstone twins?"',
      who: 'Narrator — opening',
      analysis: 'Frames the whole play as a ballad foretold, priming the audience for tragedy.',
    },
    {
      quote: '"There\'s a man gone mad in the town tonight, he\'s gonna shoot somebody down."',
      who: 'Narrator — Act 2',
      analysis: 'The Narrator\u2019s warnings drive the rising sense of doom.',
    },
    {
      quote: '"How come you didn\'t grow up like me?"',
      who: 'Mickey — final scene',
      analysis: 'Mickey\u2019s cry of class-rage. The play\u2019s thesis in ordinary speech.',
    },
    {
      quote: '"I wish I was our Sammy."',
      who: 'Mickey — Act 1',
      analysis: 'A childhood song about wanting to be older. Russell uses it to track how innocence is stolen.',
    },
    {
      quote: '"You know the devil\'s got your number."',
      who: 'Narrator — refrain',
      analysis: 'The play\u2019s superstitious language, which Russell repurposes to critique a fatalistic society.',
    },
    {
      quote: '"Bright girl. An\' beautiful."',
      who: 'Mickey on Linda — Act 2',
      analysis: 'The glimpses of love and tenderness that make the final violence unbearable.',
    },
  ],
}

export default async function BloodBrothersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </>
  )
}
