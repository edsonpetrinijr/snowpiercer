"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/data/quiz";

type Props = {
  question: Question;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
};

export default function QuizCard({ question, index, total, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const revealed = selected !== null;

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
  };

  const handleNext = () => {
    if (selected === null) return;
    onAnswer(selected === question.correct);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.35 }}
      >
        {/* Counter */}
        <p className="text-xs text-zinc-500 mb-3 tracking-widest uppercase">
          Question {index + 1} of {total}
        </p>

        {/* Question */}
        <h2 className="text-lg font-medium text-white mb-6 leading-snug">
          {question.text}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => {
            let style =
              "border border-zinc-700 bg-zinc-800/60 text-zinc-300 hover:border-amber-500/60 hover:text-white";
            if (revealed) {
              if (i === question.correct) {
                style = "border border-emerald-500 bg-emerald-500/10 text-emerald-300";
              } else if (i === selected) {
                style = "border border-red-500 bg-red-500/10 text-red-300";
              } else {
                style = "border border-zinc-800 bg-zinc-900/40 text-zinc-600";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={revealed}
                className={`text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 ${style}`}
              >
                <span className="font-mono text-zinc-500 mr-2">
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {revealed && (
          <motion.div
            className="mt-4 p-4 rounded-xl bg-zinc-800 border border-zinc-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-zinc-300 leading-relaxed">
              <span className="text-amber-400 font-semibold">Insight: </span>
              {question.explanation}
            </p>
          </motion.div>
        )}

        {/* Next button */}
        {revealed && (
          <motion.button
            onClick={handleNext}
            className="mt-5 w-full py-2.5 rounded-xl text-sm font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {index + 1 < total ? "Next Question →" : "See Results"}
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
