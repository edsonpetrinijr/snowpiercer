"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onComplete: () => void;
};

const TEACHER_LINES = [
  {
    text: "Welcome, class. I am Miss Gillies. I teach here so that you understand the world — this world.",
    pause: false,
  },
  {
    text: "Snowpiercer has 1,001 cars. Each car has a place in the order. That order keeps us alive.",
    pause: false,
  },
  {
    text: "The tail exists so the front can function. The front exists so the engine can run. The engine runs so everyone survives.",
    pause: false,
  },
  {
    text: "Some of you just spoke to children across the train. You heard different stories. Different lives.",
    pause: false,
  },
  {
    text: "Now I want to know — what did you actually learn? Not facts. Something deeper.",
    pause: true,
  },
];

export default function TeacherScene({ onComplete }: Props) {
  const [lineIdx, setLineIdx] = useState(0);

  const advance = () => {
    if (lineIdx < TEACHER_LINES.length - 1) {
      setLineIdx((i) => i + 1);
    } else {
      onComplete();
    }
  };

  const current = TEACHER_LINES[lineIdx];

  return (
    <motion.div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Dark atmospheric bg */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, #1a1008 0%, #050505 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #ffffff08 40px, #ffffff08 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #ffffff08 40px, #ffffff08 41px)"
          }}
        />
      </div>

      {/* Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fde68a 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-xl w-full px-6">
        {/* Teacher avatar */}
        <motion.div
          className="w-28 h-28 rounded-full border-2 border-zinc-600 flex items-center justify-center text-6xl mb-6 bg-zinc-900"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          👩‍🏫
        </motion.div>

        <p className="text-xs text-zinc-500 mb-4 tracking-widest uppercase font-mono">
          Miss Gillies · Train Educator
        </p>

        {/* Speech bubble */}
        <AnimatePresence mode="wait">
          <motion.div
            key={lineIdx}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-xl"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            {/* Dots */}
            <div className="flex gap-1 mb-4">
              {TEACHER_LINES.map((_, i) => (
                <div
                  key={i}
                  className="h-0.5 flex-1 rounded-full transition-colors duration-300"
                  style={{ backgroundColor: i <= lineIdx ? "#f59e0b" : "#3f3f46" }}
                />
              ))}
            </div>

            <p className="text-zinc-200 text-base leading-relaxed">
              "{current.text}"
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.button
          onClick={advance}
          className="mt-6 px-8 py-3 rounded-xl text-sm font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
          whileTap={{ scale: 0.97 }}
        >
          {lineIdx < TEACHER_LINES.length - 1
            ? "Continue →"
            : "Take the Quiz →"}
        </motion.button>
      </div>
    </motion.div>
  );
}
