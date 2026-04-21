"use client";

import { motion } from "framer-motion";
import { Kid } from "@/data/kids";

type Props = {
  kid: Kid;
  visited: boolean;
  onClick: () => void;
};

export default function Hotspot({ kid, visited, onClick }: Props) {
  return (
    <motion.button
      onClick={onClick}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 cursor-pointer group"
      style={{ left: `${kid.position.x}%`, top: `${kid.position.y}%` }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing glow ring — fixed 40×40 so it stays circular */}
      {!visited && (
        <motion.span
          className="absolute rounded-full"
          style={{
            width: 40,
            height: 40,
            top: 0,
            left: "50%",
            x: "-50%",
            backgroundColor: kid.color,
            boxShadow: `0 0 12px 4px ${kid.color}`,
          }}
          animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* Circle button */}
      <div
        className="relative w-10 h-10 rounded-full border-2 shadow-lg transition-all duration-200 flex items-center justify-center"
        style={{
          borderColor: visited ? "#52525b" : kid.color,
          backgroundColor: visited ? "rgba(39,39,42,0.7)" : "rgba(0,0,0,0.5)",
        }}
      >
        {visited ? (
          <span className="text-emerald-400 text-base">✓</span>
        ) : (
          <span
            className="text-xs font-bold"
            style={{ color: kid.color }}
          >
            ?
          </span>
        )}
      </div>

      {/* Name label on hover */}
      <span className="text-xs font-medium px-2 py-0.5 rounded bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {kid.name}
      </span>
    </motion.button>
  );
}
