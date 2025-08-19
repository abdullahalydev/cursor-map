"use client";

import { useStore } from "@/lib/zustand";
import NumberFlow from "@number-flow/react";
import { Loader, PlugZap } from "lucide-react";

import { motion } from "motion/react";

export function PlayersCount() {
  const { status, cursors } = useStore();

  return (
    <div className="w-content bg-blue-200 text-blue-800 py-3 px-7 h-14 w-28 flex items-center justify-center rounded-full">
      {(status === "IDLE" || status === "CONNECTING") && (
        <motion.div
          className="relative"
          initial={{ opacity: 0, top: -10 }}
          animate={{ opacity: 100, top: 0 }}
          transition={{ duration: 0.5, ease: "backInOut" }}
        >
          <Loader className="animate-spin" size={20} />
        </motion.div>
      )}

      {status === "CONNECTED" && (
        <motion.div
          className="relative"
          initial={{ opacity: 0, top: -10 }}
          animate={{ opacity: 100, top: 0 }}
          transition={{ duration: 0.5, ease: "backInOut" }}
        >
          <NumberFlow value={cursors.length + 1} suffix=" Cursor" />
        </motion.div>
      )}

      {status === "DISCONNECTED" && (
        <motion.div
          className="relative"
          initial={{ opacity: 0, top: -10 }}
          animate={{ opacity: 100, top: 0 }}
          transition={{ duration: 0.5, ease: "backInOut" }}
        >
          <PlugZap size={20} />
        </motion.div>
      )}
    </div>
  );
}
