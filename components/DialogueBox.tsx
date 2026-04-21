"use client";

import { motion } from "framer-motion";
import { Kid } from "@/data/kids";

type Props = {
  kid: Kid;
  onClose: () => void;
};

const SECTION_LABELS: Record<Kid["section"], string> = {
  tail: "Tail Section",
  middle: "Middle Cars",
  front: "Front Section",
};

const SECTION_COLORS: Record<Kid["section"], string> = {
  tail: "text-red-400",
  middle: "text-yellow-400",
  front: "text-emerald-400",
};

export default function DialogueBox({ kid, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center pb-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Box */}
      <motion.div
        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-2xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div>
            <p className="font-semibold text-white">{kid.name}</p>
            <p className={`text-xs ${SECTION_COLORS[kid.section]}`}>
              {SECTION_LABELS[kid.section]}
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto text-zinc-500 hover:text-white text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* Dialogue text */}
        <p className="text-zinc-200 text-base leading-relaxed">
          "{kid.dialogue}"
        </p>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-5 w-full py-2.5 rounded-xl text-sm font-medium transition-colors"
          style={{
            backgroundColor: kid.color + "22",
            color: kid.color,
            border: `1px solid ${kid.color}44`,
          }}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
