"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type Edition = "morning" | "evening" | "night";

function getEdition(): Edition {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 20) return "evening";
  return "night";
}

const WARM_SKY: Record<Edition, string> = {
  morning: "#c8dce8",
  evening: "#c8bfae",
  night: "#8a9ab0",
};

const NIGHT_SKY: Record<Edition, string> = {
  morning: "#2a3548",
  evening: "#2a2540",
  night: "#1a1530",
};

const WARM_WASH = [
  "#f7f3ecff",
  "#f7f3ecf2",
  "#f7f3ec88",
  "#f7f3ec55",
  "#f7f3ec88",
  "#f7f3ecf2",
  "#f7f3ecff",
];

const NIGHT_WASH = [
  "#18152aff",
  "#18152af2",
  "#18152aa0",
  "#18152a70",
  "#18152aa0",
  "#18152af2",
  "#18152aff",
];

export function PageWash() {
  const [edition, setEdition] = useState<Edition | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setEdition(getEdition());
    setMounted(true);
  }, []);

  if (!edition || !mounted) return null;

  const isNight = resolvedTheme === "night";
  const skyColor = isNight ? NIGHT_SKY[edition] : WARM_SKY[edition];
  const stops = isNight ? NIGHT_WASH : WARM_WASH;

  return (
    <>
      {/* Sky — color visible through the wash */}
      <div
        className="fixed inset-0 z-0 transition-colors duration-700"
        aria-hidden="true"
        style={{ backgroundColor: skyColor }}
      />

      {/* Wash — fades to reveal the sky in the middle */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition-all duration-700"
        aria-hidden="true"
        style={{
          background: `linear-gradient(180deg,
            ${stops[0]} 0%,
            ${stops[1]} 25%,
            ${stops[2]} 42%,
            ${stops[3]} 55%,
            ${stops[4]} 68%,
            ${stops[5]} 82%,
            ${stops[6]} 100%)`,
        }}
      />
    </>
  );
}
