"use client";

import { Ping } from "./room-ping";
import { PlayersCount } from "./room-players-count";
import { SocialLinks } from "./room-social-links";

export function SessionDetails() {
  return (
    <div className="absolute h-full w-full flex flex-col items-center justify-end">
      <div className="relative p-6">
        <div className="flex gap-2 ">
          <Ping />

          <SocialLinks />

          <PlayersCount />
        </div>
      </div>
    </div>
  );
}
