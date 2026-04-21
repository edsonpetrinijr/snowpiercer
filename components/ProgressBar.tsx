"use client";

import { motion } from "framer-motion";

type Props = {
  total: number;
  completed: number;
  label?: string;
};

export default function ProgressBar({ total, completed, label }: Props) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="w-full">
      {label && (
        <p className="text-xs text-zinc-400 mb-1 tracking-widest uppercase">
          {label} — {completed}/{total}
        </p>
      )}
      <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-amber-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
