"use client";

import { Cursor } from "../cursor";
import { motion } from "motion/react";

export type PlayerProps = {
  position: [number, number];
  color: [number, number, number];
};

export function Player({ position, color }: PlayerProps) {
  return (
    <motion.div
      className="absolute z-50"
      animate={{ x: position[0], y: position[1] }}
      transition={{ type: "spring" }}
    >
      <Cursor fill={`rgb(${color.join(",")})`} />
    </motion.div>
  );
}
