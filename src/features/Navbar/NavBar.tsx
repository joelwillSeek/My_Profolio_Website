"use client";

import { useState, useEffect, useRef } from "react";

export default function NormalNavBar() {
  const [sideHudOpen, setSideHudOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        setSideHudOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Navigation Shell */}
      <header className="fixed top-0 left-0 w-full z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
        <div className="flex justify-between items-center w-full px-8 py-1 max-w-[1440px] mx-auto">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <span className="font-headline-md text-[20px] font-bold text-primary tracking-tighter uppercase">
              EYOEL
            </span>
            <span className="font-label-sm text-[12px] px-2 py-0.5 bg-primary-container text-on-primary">
              LIVE_SESSION
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-primary border-b border-primary font-bold font-label-sm text-[12px] uppercase tracking-widest transition-transform duration-75"
            >
              WORKS
            </a>
            <a
              href="#"
              className="text-on-surface-variant font-label-sm text-[12px] uppercase tracking-widest hover:text-primary-container transition-colors duration-100"
            >
              ARCHIVE
            </a>
            <a
              href="#"
              className="text-on-surface-variant font-label-sm text-[12px] uppercase tracking-widest hover:text-primary-container transition-colors duration-100"
            >
              SIGNAL
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px] hover:text-primary cursor-pointer">terminal</span>
              <span className="material-symbols-outlined text-[20px] hover:text-primary cursor-pointer">sensors</span>
              <span className="material-symbols-outlined text-[20px] hover:text-primary cursor-pointer">wifi_tethering</span>
            </div>
            <button className="bg-primary text-on-primary px-4 py-1 font-label-sm text-[12px] uppercase tracking-widest hover:bg-primary-container transition-all">
              LOGIN_SECURE
            </button>
          </div>
        </div>
      </header>

      {/* Side HUD Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-surface-container-lowest border-l border-outline-variant z-50 transition-transform duration-300 ${sideHudOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full py-8 space-y-8 px-6">
          <div className="mb-8">
            <span className="font-headline-md text-[20px] text-primary">CREATIVE_DEV</span>
            <p className="font-label-sm text-[12px] text-outline-variant uppercase">ID: 0x82A_99</p>
          </div>
          <nav className="flex-grow space-y-2">
            <a href="#" className="text-on-primary bg-primary-container font-bold p-2 flex items-center gap-2 font-label-sm text-[12px] uppercase">
              <span className="material-symbols-outlined text-[18px]">code</span> TERMINAL
            </a>
            <a href="#" className="text-on-surface-variant p-2 flex items-center gap-2 font-label-sm text-[12px] uppercase hover:bg-surface-variant hover:text-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">link</span> LIVE_LINK
            </a>
            <a href="#" className="text-on-surface-variant p-2 flex items-center gap-2 font-label-sm text-[12px] uppercase hover:bg-surface-variant hover:text-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">radar</span> SENSORS
            </a>
            <a href="#" className="text-on-surface-variant p-2 flex items-center gap-2 font-label-sm text-[12px] uppercase hover:bg-surface-variant hover:text-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">language</span> SYSTEM_MAP
            </a>
          </nav>
          <div className="border-t border-outline-variant pt-6 space-y-4">
            <a href="#" className="text-on-surface-variant flex items-center gap-2 font-label-sm text-[12px] uppercase hover:text-primary">
              <span className="material-symbols-outlined text-[18px]">settings</span> SETTINGS
            </a>
            <a href="#" className="text-on-surface-variant flex items-center gap-2 font-label-sm text-[12px] uppercase hover:text-primary">
              <span className="material-symbols-outlined text-[18px]">logout</span> LOGOUT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
