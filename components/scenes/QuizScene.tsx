"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { QUESTIONS } from "@/data/quiz";
import QuizCard from "@/components/QuizCard";
import ProgressBar from "@/components/ProgressBar";

type Props = {
  onComplete: (score: number) => void;
};

export default function QuizScene({ onComplete }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (correct: boolean) => {
    const newScore = correct ? score + 1 : score;
    if (currentIdx + 1 >= QUESTIONS.length) {
      onComplete(newScore);
    } else {
      setScore(newScore);
      setCurrentIdx((i) => i + 1);
    }
  };

  return (
    <motion.div
      className="relative w-full h-full flex flex-col items-center justify-start overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background */}
      <div
        className="fixed inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #0f172a 0%, #020617 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl px-6 pt-10 pb-16">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs text-zinc-500 tracking-widest uppercase font-mono mb-3">
            Ms. Gilliam's Evaluation
          </p>
          <ProgressBar
            total={QUESTIONS.length}
            completed={currentIdx}
            label="Progress"
          />
        </div>

        <QuizCard
          key={currentIdx}
          question={QUESTIONS[currentIdx]}
          index={currentIdx}
          total={QUESTIONS.length}
          onAnswer={handleAnswer}
        />
      </div>
    </motion.div>
  );
}
