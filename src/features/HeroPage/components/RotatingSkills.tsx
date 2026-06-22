"use client";

import { useState, useEffect } from "react";
import ScrambleText from "../../../components/ScrambleText";

const SKILLS = [
  "WEB_DEV",
  "MOBILE_DEV",
  "BACKEND_DEV",
  "CI/CD_PIPELINES",
  "DEVOPS",
  "AI_INFRASTRUCTURE",
];

export default function RotatingSkills() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SKILLS.length);
    }, 3000); // Change skill every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-primary italic min-w-[300px] justify-center md:justify-start flex items-center text-left">
      <ScrambleText
        key={SKILLS[index]} // Forces a remount to recalculate width and re-trigger mount animation
        text={SKILLS[index]}
        trigger="mount"
        speed={40}
        className="text-2xl pr-3.5"
      />
    </span>
  );
}
