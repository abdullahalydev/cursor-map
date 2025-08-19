import { create } from "zustand";

type Cursor = {
  id: string;
  color: [number, number, number];
  position: [number, number];
};

type Status = "IDLE" | "CONNECTING" | "CONNECTED" | "DISCONNECTED";

type StoreState = {
  id: string;

  status: Status;
  ping: number;
  setPing(ping: number): void;
  setStatus(status: Status): void;

  cursors: Cursor[];
  setCursors(cursors: Cursor[]): void;

  position: [number, number];
  color: [number, number, number];
  setPosition(position: [number, number]): void;
  setColor(color: [number, number, number]): void;
};

export const useStore = create<StoreState>()((set) => ({
  id: Math.random().toString().slice(2),

  status: "IDLE",
  ping: 0,
  setPing: (ping) => set(() => ({ ping: ping })),
  setStatus: (status) => set(() => ({ status: status })),

  cursors: [],
  setCursors: (cursors) => set(() => ({ cursors: cursors })),

  position: [0, 0],
  color: [0, 0, 0],
  setPosition: (position) => set(() => ({ position: position })),
  setColor: (color) => set(() => ({ color: color })),
}));
