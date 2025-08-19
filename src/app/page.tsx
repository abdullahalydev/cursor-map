import { Room } from "@/components/room/room-controller";
import { SessionDetails } from "@/components/room/room-details";

export default function Page() {
  return (
    <div className="overflow-hidden cursor-none h-screen w-screen">
      <Room room="GLOBAL" />

      <SessionDetails />
    </div>
  );
}
