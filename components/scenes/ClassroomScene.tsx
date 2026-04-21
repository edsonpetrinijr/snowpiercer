"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { KIDS } from "@/data/kids";
import ProgressBar from "@/components/ProgressBar";
import Hotspot from "@/components/Hotspot";
import DialogueBox from "@/components/DialogueBox";

type Props = {
  onComplete: () => void;
};

export default function ClassroomScene({ onComplete }: Props) {
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [activeKid, setActiveKid] = useState<string | null>(null);

  const handleClose = (id: string) => {
    const next = new Set(visited).add(id);
    setVisited(next);
    setActiveKid(null);
    if (next.size === KIDS.length) {
      setTimeout(onComplete, 600);
    }
  };

  const kid = activeKid ? KIDS.find((k) => k.id === activeKid) : null;

  return (
    <motion.div
      className="relative w-full h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Classroom photo background */}
      <div className="absolute inset-0">
        <img
          src="/classroom.png"
          alt="classroom"
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* Dark overlay so UI stays readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* UI overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top bar */}
        <div className="px-6 pt-5 pb-4 flex items-center gap-6">
          <div className="flex-1">
            <ProgressBar
              total={KIDS.length}
              completed={visited.size}
              label="Children spoken to"
            />
          </div>
        </div>

        {/* Instruction */}
        <div className="px-6">
          <motion.p
            className="text-sm text-zinc-500 italic"
            animate={{ opacity: visited.size === KIDS.length ? 0 : 1 }}
          >
            {visited.size === 0
              ? "Click on the children to hear their stories."
              : visited.size < KIDS.length
              ? `${KIDS.length - visited.size} more ${
                  KIDS.length - visited.size === 1 ? "child" : "children"
                } to speak with.`
              : ""}
          </motion.p>
        </div>

        {/* Hotspot layer */}
        <div className="relative flex-1">
          {KIDS.map((k) => (
            <Hotspot
              key={k.id}
              kid={k}
              visited={visited.has(k.id)}
              onClick={() => setActiveKid(k.id)}
            />
          ))}
        </div>

        {/* Title */}
        <div className="px-6 pb-6">
          <p className="text-xs text-zinc-600 tracking-widest uppercase font-mono">
            Snowpiercer · Car 974 · Classroom
          </p>
        </div>
      </div>

      {/* Dialogue */}
      <AnimatePresence>
        {kid && (
          <DialogueBox kid={kid} onClose={() => handleClose(kid.id)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
