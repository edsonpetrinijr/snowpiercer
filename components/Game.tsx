"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ClassroomScene from "@/components/scenes/ClassroomScene";
import TeacherScene from "@/components/scenes/TeacherScene";
import QuizScene from "@/components/scenes/QuizScene";
import EndingScene from "@/components/scenes/EndingScene";
import ResearchScene from "@/components/scenes/ResearchScene";

type Scene = "intro" | "classroom" | "teacher" | "quiz" | "ending" | "research";

export default function Game() {
  const [scene, setScene] = useState<Scene>("intro");
  const [finalScore, setFinalScore] = useState(0);

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setScene("research");
  };

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {scene === "intro" && (
          <motion.div
            key="intro"
            className="w-full h-full flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, #0c0805 0%, #000000 100%)",
            }}
          >
            <div className="absolute inset-x-0 top-1/2 h-px bg-zinc-800 opacity-40" />

            <div className="relative z-10 flex flex-col items-center max-w-md text-center gap-6">
              <motion.div
                className="text-6xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                🚂
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xs text-zinc-500 tracking-widest uppercase font-mono mb-3">
                  An Interactive Experience
                </p>
                <h1 className="text-4xl font-bold tracking-tight mb-2">
                  Snowpiercer
                </h1>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The last train carries all that remains of humanity.
                  <br />
                  Not everyone rides the same way.
                </p>
              </motion.div>

              <motion.div
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-left"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-xs text-zinc-500 mb-2 tracking-widest uppercase font-mono">
                  How to play
                </p>
                <ul className="text-sm text-zinc-400 space-y-1.5">
                  <li>
                    <span className="text-amber-400">1.</span> Visit the
                    classroom and speak to each child
                  </li>
                  <li>
                    <span className="text-amber-400">2.</span> Listen to their
                    stories across the train
                  </li>
                  <li>
                    <span className="text-amber-400">3.</span> Answer the
                    teacher's questions about what you learned
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="flex flex-col gap-3 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  onClick={() => setScene("classroom")}
                  className="w-full px-10 py-3 rounded-xl font-medium bg-amber-500 text-black hover:bg-amber-400 transition-colors text-sm"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                >
                  Board the Train →
                </motion.button>
                <motion.button
                  onClick={() => setScene("research")}
                  className="w-full px-10 py-3 rounded-xl font-medium border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-colors text-sm"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                >
                  View Exhibit
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {scene === "classroom" && (
          <motion.div key="classroom" className="w-full h-full">
            <ClassroomScene onComplete={() => setScene("teacher")} />
          </motion.div>
        )}

        {scene === "teacher" && (
          <motion.div key="teacher" className="w-full h-full">
            <TeacherScene onComplete={() => setScene("quiz")} />
          </motion.div>
        )}

        {scene === "quiz" && (
          <motion.div key="quiz" className="w-full h-full">
            <QuizScene onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {scene === "ending" && (
          <motion.div key="ending" className="w-full h-full">
            <EndingScene
              score={finalScore}
              onRestart={() => setScene("intro")}
            />
          </motion.div>
        )}

        {scene === "research" && (
          <motion.div key="research" className="w-full h-full">
            <ResearchScene onBack={() => setScene("intro")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
