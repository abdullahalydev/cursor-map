import { Room } from "@/components/room/room-controller";
import { SessionDetails } from "@/components/room/room-details";

export type RoomPage = {
  params: Promise<{ handle: string }>;
};

export default async function Home({ params }: RoomPage) {
  const { handle } = await params;

  return (
    <div className="cursor-none h-screen w-screen">
      <Room room={handle} />

      <SessionDetails />
    </div>
  );
}
