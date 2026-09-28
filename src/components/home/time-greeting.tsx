"use client";

import { useState, useEffect } from "react";

export function TimeGreeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Good morning");
    else if (hour >= 12 && hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  if (!greeting) return null;

  return (
    <span className="font-[family-name:var(--font-body)] text-xs tracking-widest text-muted-foreground uppercase">
      {greeting}
    </span>
  );
}
