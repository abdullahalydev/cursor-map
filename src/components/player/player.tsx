"use client";

import { Cursor } from "../cursor";

export type PlayerProps = {
  position: [number, number];
  color: [number, number, number];
};

export function Player({ position, color }: PlayerProps) {
  return (
    <div
      className="absolute z-50"
      style={{
        top: `${position[1]}px`,
        left: `${position[0]}px`,
      }}
    >
      <Cursor fill={`rgb(${color.join(",")})`} />
    </div>
  );
}
