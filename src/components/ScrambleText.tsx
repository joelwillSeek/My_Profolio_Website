"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%_&-+=[]{}";

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** "hover" = animate on hover, "mount" = animate once on load */
  trigger?: "hover" | "mount";
  /** How fast each character resolves in ms */
  speed?: number;
}

export default function ScrambleText({
  text,
  className,
  trigger = "hover",
  speed = 69,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [lockedWidth, setLockedWidth] = useState<number | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const iterationRef = useRef(0);

  // Measure and lock width after first render with real text
  useEffect(() => {
    if (spanRef.current) {
      setLockedWidth(spanRef.current.offsetWidth);
    }
    // if (trigger === "mount") {
    animate();
    // }
    return () => {
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, []);

  function animate() {
    if (frameRef.current) clearInterval(frameRef.current);
    iterationRef.current = 0;

    frameRef.current = setInterval(() => {
      const iteration = iterationRef.current;

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iterationRef.current += 0.5;

      if (iterationRef.current >= text.length) {
        clearInterval(frameRef.current!);
        setDisplay(text);
      }
    }, speed);
  }

  return (
    <span
      ref={spanRef}
      className={className}
      onMouseEnter={trigger === "hover" ? animate : undefined}
      style={{
        display: "inline-block",
        // Only lock width once measured — prevents any layout shift during scramble
        width: lockedWidth !== null ? `${lockedWidth}px` : undefined,
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontFamily: "inherit",
        letterSpacing: "inherit",
      }}
    >
      {display}
    </span>
  );
}
