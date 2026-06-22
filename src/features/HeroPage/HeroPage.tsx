"use client";

import { useEffect, useState } from "react";
import CircuitBackground from "./components/CircuitBackground";
import LeftHUD from "./components/LeftHUD";
import RotatingSkills from "./components/RotatingSkills";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import RightHUD from "./components/RightHUD";

export default function HeroPage() {
  const [latency, setLatency] = useState(14);
  const [sessionToken, setSessionToken] = useState("0x82A_99_ALPHA");

  // Client-side random generation to avoid hydration mismatch
  useEffect(() => {
    setLatency(Math.floor(Math.random() * 10) + 1);
    setSessionToken(uuidv4().split("-")[0].toUpperCase());
  }, []);

  // Mouse move background parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.body.style.backgroundPosition = `${x}% ${y}%`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CircuitBackground />
      </div>

      <main className="relative z-10 w-full min-h-screen flex items-center justify-center pt-16 px-8" id="home-content">
        {/* Left HUD Metadata */}
        <LeftHUD />

        {/* Central Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Pulse Node Icon */}
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse" />
            <div
              className="pulse-node relative w-24 h-24 border border-primary/50 flex items-center justify-center rounded-sm bg-surface/40 backdrop-blur-sm"
              style={{ transform: "rotate(45deg)" }}
            >
              <div style={{ transform: "rotate(-45deg)" }} className="flex flex-col items-center">
                {/* <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: 48, fontVariationSettings: "'FILL' 1" }}
                >
                  hive
                </span> */}
                <Image
                  src="/vite.png"
                  alt="My Project Symbol"
                  width={64}
                  height={64}
                  priority
                />
              </div>
            </div>
            {/* Corner Accents */}
            <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-primary" />
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" style={{ boxShadow: "0 0 8px #93ccff" }} />
            <span className="glitch-flicker font-label-sm text-[12px] text-primary tracking-[0.2em] uppercase">
              SYSTEM_STATUS: [CONNECTED]
            </span>
          </div>

          {/* Identity Header */}
          <h1 className="font-headline-lg text-[28px] sm:text-[32px] md:text-[56px] lg:text-[64px] mb-8 leading-snug tracking-tighter flex flex-col items-center justify-center w-full">
            <span className="text-outline-variant block font-label-sm text-[12px] md:text-[14px] mb-4 tracking-normal">
              SYSTEM_AUTH_SUCCESSFUL
            </span>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center w-full md:ml-20 lg:ml-40 text-center">
              <span className="text-lg sm:text-xl md:text-2xl">SPECIALIST_IN:</span>
              <div className="mt-2  md:mt-0 text-primary">
                <RotatingSkills />
              </div>
            </div>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12 w-full">
            <a href="#projects" className="group relative px-8 py-4 bg-primary text-on-primary font-label-sm text-[12px] uppercase tracking-widest overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10 flex items-center gap-2">
                INITIALIZE_PROFILE
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-2 transition-transform">
                  chevron_right
                </span>
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            </a>
            <a href="#skills" className="px-8 py-4 border border-outline-variant text-on-surface font-label-sm text-[12px] uppercase tracking-widest hover:border-primary hover:text-primary transition-all backdrop-blur-sm">
              VIEW_CODEBASE
            </a>
          </div>

          {/* Sub-metadata grid */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-outline-variant/30 pt-8">
            <div className="text-left">
              <p className="font-label-sm text-[10px] text-outline mb-1">LATENCY</p>
              <p className="font-code-snippet text-[14px] text-on-surface">{latency}ms</p>
            </div>
            <div className="text-center">
              <p className="font-label-sm text-[10px] text-outline mb-1">SESSION_TOKEN</p>
              <p className="font-code-snippet text-[14px] text-on-surface">{sessionToken}</p>
            </div>
            <div className="text-right">
              <p className="font-label-sm text-[10px] text-outline mb-1">NODE_HEALTH</p>
              <p className="font-code-snippet text-[14px] text-primary">OPTIMAL</p>
            </div>
          </div>
        </div>

        {/* Right HUD Metadata */}
        <RightHUD />
      </main>
    </section>
  );
}
