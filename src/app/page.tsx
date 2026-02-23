import { Hero } from "@/components/home/hero";
import { CurrentlyBlock } from "@/components/home/currently-block";
import { RoomGrid } from "@/components/home/room-grid";
import { getSiteMeta, getCurrentlyItems } from "@/lib/content";

export default function HomePage() {
  const site = getSiteMeta();
  const currentlyItems = getCurrentlyItems();

  return (
    <>
      <Hero name={site.name} bio={site.bio} motto={site.motto} />
      <CurrentlyBlock items={currentlyItems} />
      <RoomGrid />
    </>
  );
}
