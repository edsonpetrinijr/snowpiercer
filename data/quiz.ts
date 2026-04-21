export type Question = {
  id: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
};

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    text: "Why do tail passengers suffer while front passengers live comfortably?",
    options: [
      "Tail passengers chose not to work hard enough",
      "Resources are deliberately kept unequal to maintain power and order",
      "The train simply doesn't have enough space",
      "Tail passengers prefer a simpler life",
    ],
    correct: 1,
    explanation:
      "Scarcity is manufactured and enforced. The suffering at the back is not accidental — it keeps the system running by maintaining dependence and control.",
  },
  {
    id: "q2",
    text: "Leo's family didn't buy a ticket but was allowed aboard. How does the train use this against them?",
    options: [
      "They are asked to repay their debt through fair labor",
      "It is used as permanent justification for their lower status",
      "They are given extra resources as charity",
      "It has no effect on their treatment",
    ],
    correct: 1,
    explanation:
      'The "debt" framing turns survival into obligation — a tool to make inequality feel earned and just, even generations later.',
  },
  {
    id: "q3",
    text: "Sara knows about the suffering in the tail but tries not to think about it. What does her silence represent?",
    options: [
      "She is too young to understand",
      "She has no power to change anything",
      "Passive complicity — benefiting from a system without challenging it",
      "She is simply being realistic about how things work",
    ],
    correct: 2,
    explanation:
      "Comfort often depends on not asking uncomfortable questions. Middle-ground silence protects privilege by treating injustice as background noise.",
  },
];
