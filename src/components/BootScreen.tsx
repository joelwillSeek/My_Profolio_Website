"use client";

import { useState, useEffect } from "react";
import ScrambleText from "./ScrambleText";

export default function BootScreen() {
  const [isBooting, setIsBooting] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootSequence = [
    "INITIALIZING SYSTEM CORE...",
    "LOADING MEMORY BANKS [OK]",
    "ESTABLISHING SECURE CONNECTION...",
    "MOUNTING VIRTUAL DOM...",
    "FETCHING USER PROFILE DATA [OK]",
    "DECRYPTING ASSETS...",
    "RENDERING NEON OVERLAYS [OK]",
    "SYSTEM READY."
  ];

  useEffect(() => {
    // Prevent scrolling while booting
    if (isBooting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isBooting]);

  useEffect(() => {
    let currentLogIndex = 0;

    // Add logs one by one quickly
    const logInterval = setInterval(() => {
      if (currentLogIndex < bootSequence.length) {
        setLogs((prev) => [...prev, bootSequence[currentLogIndex]]);
        setProgress(Math.floor(((currentLogIndex + 1) / bootSequence.length) * 100));
        currentLogIndex++;
      } else {
        clearInterval(logInterval);
        // Wait a tiny bit after logs finish, then unmount
        setTimeout(() => setIsBooting(false), 500);
      }
    }, 200);

    return () => {
      clearInterval(logInterval);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isBooting) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-surface flex flex-col items-center justify-center font-code-snippet text-primary p-8 overflow-hidden">
      {/* Background Grid & Scanline */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(147,204,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(147,204,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 scanline opacity-30" />

      <div className="relative z-10 w-full max-w-2xl flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-primary/30 pb-4">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined animate-spin text-3xl">autorenew</span>
            <h1 className="font-headline-lg text-2xl tracking-widest uppercase">
              <ScrambleText text="SYSTEM_BOOT_SEQUENCE" trigger="mount" speed={30} />
            </h1>
          </div>
          <span className="text-on-surface-variant">v2.0.4</span>
        </div>

        {/* Logs Console */}
        <div className="h-64 flex flex-col justify-end overflow-hidden">
          {logs.map((log, index) => (
            <div key={index} className="flex gap-4 opacity-80 animate-pulse">
              <span className="text-outline-variant">[{`0.0.${index}`}]</span>
              <span>{log}</span>
            </div>
          ))}
        </div>

        {/* Loading Bar */}
        <div className="w-full">
          <div className="flex justify-between text-xs mb-2">
            <span>LOADING_MODULES</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-1 bg-surface-variant overflow-hidden border border-primary/20">
            <div
              className="h-full bg-primary transition-all duration-150 ease-linear shadow-[0_0_10px_#93ccff]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
