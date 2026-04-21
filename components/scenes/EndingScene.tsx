"use client";

import { motion } from "framer-motion";
import { QUESTIONS } from "@/data/quiz";

type Props = {
  score: number;
  onRestart: () => void;
};

type Tier = {
  label: string;
  message: string;
  color: string;
};

function getTier(score: number, total: number): Tier {
  const pct = score / total;
  if (pct === 1)
    return {
      label: "Fully Awake",
      message:
        "You see the train clearly. The suffering is not accidental — it is structural. The first step is seeing it.",
      color: "#22c55e",
    };
  if (pct >= 0.6)
    return {
      label: "Eyes Opening",
      message:
        "You understand parts of the system. Keep looking. Comfort can make it easier to look away.",
      color: "#f59e0b",
    };
  return {
    label: "Still Learning",
    message:
      "The system is designed to be invisible. The fact that you're here, asking questions, is where it starts.",
    color: "#ef4444",
  };
}

const REAL_WORLD_FACTS = [
  "The wealthiest 1% own more than the bottom 50% of humanity combined.",
  "In many countries, your life expectancy is strongly predicted by your zip code.",
  "Generational poverty is often structural, not a matter of individual choice.",
  "Physical separation between classes reduces empathy and visibility of inequality.",
  "Systems of inequality often justify themselves as 'natural order' or 'necessary.'",
];

export default function EndingScene({ score, onRestart }: Props) {
  const total = QUESTIONS.length;
  const tier = getTier(score, total);

  return (
    <motion.div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background */}
      <div
        className="fixed inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, #0a0a0a 0%, #000000 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-xl px-6 py-12 flex flex-col items-center gap-8">
        {/* Score */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div
            className="text-6xl font-bold"
            style={{ color: tier.color }}
          >
            {score}/{total}
          </div>
          <p
            className="text-sm tracking-widest uppercase font-mono"
            style={{ color: tier.color }}
          >
            {tier.label}
          </p>
        </motion.div>

        {/* Personal message */}
        <motion.p
          className="text-zinc-300 text-center text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {tier.message}
        </motion.p>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800" />

        {/* Real world section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs text-zinc-500 tracking-widest uppercase font-mono mb-4">
            The Train Is a Mirror
          </p>
          <div className="flex flex-col gap-2">
            {REAL_WORLD_FACTS.map((fact, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <span className="text-amber-500 mt-0.5 shrink-0">—</span>
                <span>{fact}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing quote */}
        <motion.blockquote
          className="text-center text-zinc-500 italic text-sm border-l-2 border-zinc-700 pl-4 self-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          "We draw a sacred line. Know your place. Keep your place."
          <br />
          <span className="text-zinc-600 not-italic">— Minister Mason, Snowpiercer</span>
        </motion.blockquote>

        {/* Restart */}
        <motion.button
          onClick={onRestart}
          className="mt-2 px-8 py-3 rounded-xl text-sm font-medium border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileTap={{ scale: 0.97 }}
        >
          ↺ Start Again
        </motion.button>
      </div>
    </motion.div>
  );
}
