import { Hero } from "@/components/home/hero";
import { CurrentlyBlock } from "@/components/home/currently-block";
import { RoomGrid } from "@/components/home/room-grid";

// Hardcoded for now — will pull from Velite once build pipeline is stable
const siteData = {
  name: "Nneoma",
  bio: "Engineer, builder, and collector of interesting things. This is my digital living room \u2014 a space where projects, writing, playlists, and experiments all live together.",
  motto: "Building in public, learning in the open.",
};

const currentlyItems = [
  { label: "Building", value: "This website", emoji: "\uD83C\uDFD7\uFE0F" },
  { label: "Reading", value: "The Creative Act by Rick Rubin", emoji: "\uD83D\uDCD6" },
  { label: "Listening to", value: "Khruangbin", emoji: "\uD83C\uDFB5" },
  { label: "Learning", value: "Design systems", emoji: "\uD83E\uDDE0" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        name={siteData.name}
        bio={siteData.bio}
        motto={siteData.motto}
      />
      <CurrentlyBlock items={currentlyItems} />
      <RoomGrid />
    </>
  );
}
