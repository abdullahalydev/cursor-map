"use client";

import { supabase } from "@/lib/supabase";
import { useStore } from "@/lib/zustand";
import { RealtimeChannel } from "@supabase/supabase-js";
import { useEffect, useRef } from "react";
import { random } from "underscore";
import { MainPlayer } from "../player/main-player";
import { Player } from "../player/player";

type CursorType = {
  id: string;
  down: boolean;
  color: [number, number, number];
  position: [number, number];
};

export type RoomProps = {
  room: string;
};

export function Room({ room }: RoomProps) {
  const {
    id,
    color,
    position,
    ping,
    cursors,
    setCursors,
    setPosition,
    setColor,
    setPing,
    setStatus,
  } = useStore();
  const channelRef = useRef<RealtimeChannel | null>(null);

  useEffect(() => {
    setPosition([random(0, 255), random(0, 255)]);
    setColor([random(0, 255), random(0, 255), random(0, 255)]);
  }, []);

  useEffect(() => {
    if (channelRef.current) {
      return;
    }

    channelRef.current = supabase.channel(room, {
      config: {
        broadcast: {
          ack: true,
        },
      },
    });

    channelRef.current?.on("presence", { event: "sync" }, () => {
      const newState = channelRef.current?.presenceState<CursorType>();
      const newCursors = Object.values(newState!)
        .map((_) => _[0])
        .filter((_) => _.id !== id);

      setCursors(newCursors);
    });

    return () => {
      channelRef.current?.untrack();
      channelRef.current?.unsubscribe();
      channelRef.current = null;
    };
  }, []);

  useEffect(() => {
    const isConnecting = channelRef.current?.state === "joining";
    const isConnected = channelRef.current?.state === "joined";
    const isDisconnected =
      channelRef.current?.state === "errored" ||
      channelRef.current?.state === "closed" ||
      channelRef.current?.state === "leaving";

    if (isConnected) {
      setStatus("CONNECTED");
    }
    if (isConnecting) {
      setStatus("CONNECTING");
    }
    if (isDisconnected) {
      setStatus("DISCONNECTED");
    }
  }, [channelRef.current?.state]);

  useEffect(() => {
    channelRef.current?.on("broadcast", { event: "CURSOR:MOVE" }, (event) => {
      const updatedCursor = cursors.map((cursor) => {
        if (cursor.id === event.payload.id) {
          return {
            id: event.payload.id,
            color: event.payload.color,
            down: event.payload.down,
            position: event.payload.position,
          };
        }

        return cursor;
      });

      setCursors(updatedCursor);
    });
  }, [cursors]);

  useEffect(() => {
    if (!channelRef.current) {
      return;
    }

    const intervalId = setInterval(async () => {
      const start = Date.now();

      const response = await channelRef.current?.send({
        type: "broadcast",
        event: "GAME:PING",
        payload: {},
      });

      const end = Date.now();

      if (response !== "ok") {
        return;
      }

      setPing(end - start);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (channelRef.current?.state == "joined") {
      channelRef.current?.track({
        id: id,
        color: color,
        position: position,
      });

      channelRef.current?.send({
        type: "broadcast",
        event: "CURSOR:MOVE",
        payload: {
          id: id,
          color: color,
          position: position,
        },
      });
    } else {
      channelRef.current?.subscribe();
    }
  }, [id, position, color]);

  return (
    <div className="absolute h-full w-full z-25 pointer-events-none">
      {channelRef.current?.state === "joined" && <MainPlayer />}

      {cursors.map((cursor) => (
        <Player
          key={cursor.id}
          color={cursor.color}
          position={cursor.position}
        />
      ))}
    </div>
  );
}
