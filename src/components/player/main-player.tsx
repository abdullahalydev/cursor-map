"use client";

import { supabase } from "@/lib/supabase";
import { useStore } from "@/lib/zustand";
import { RealtimeChannel } from "@supabase/supabase-js";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { Cursor } from "../cursor";

export function MainPlayer() {
  const { position, color, setPosition } = useStore();
  const channel = useRef<RealtimeChannel | null>(null);

  useEffect(() => {
    const mouseMoveEvent = (event: MouseEvent) => {
      const newPosition: [number, number] = [event.clientX, event.clientY];

      setPosition(newPosition);
    };

    document.addEventListener("mousemove", mouseMoveEvent);

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);

      if (channel.current) {
        supabase.removeChannel(channel.current);
        channel.current.unsubscribe();
        channel.current.untrack();
      }
    };
  }, []);

  return (
    <motion.div
      className="absolute z-0"
      animate={{ x: position[0], y: position[1] }}
      transition={{ type: "spring" }}
    >
      <Cursor fill={`rgb(${color.join(",")})`} />
    </motion.div>
  );
}
