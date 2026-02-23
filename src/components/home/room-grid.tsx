import { SECTION_LIST } from "@/lib/moods";
import { RoomCard } from "@/components/home/room-card";

export function RoomGrid() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="mb-8 font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase">
        Rooms
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SECTION_LIST.map((section) => (
          <RoomCard key={section.mood} section={section} />
        ))}
      </div>
    </section>
  );
}
