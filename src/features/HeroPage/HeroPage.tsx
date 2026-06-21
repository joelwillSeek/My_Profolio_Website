"use client";

import { useEffect } from "react";

export default function HeroPage() {
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
    <>
      {/* Scanline overlay */}
      <div className="scanline" />

      {/* Background Circuit Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="circuit-line w-full h-[1px] top-[20%] left-0" style={{ top: "20%" }} />
        <div className="circuit-line w-[1px] h-full top-0" style={{ left: "15%" }} />
        <div className="circuit-line w-[1px] h-full top-0" style={{ right: "15%" }} />
        <div className="circuit-line w-full h-[1px] left-0" style={{ bottom: "20%" }} />
        <div className="node-dot" style={{ top: "20%", left: "15%", boxShadow: "0 0 8px #93ccff" }} />
        <div className="node-dot" style={{ top: "20%", right: "15%" }} />
        <div className="node-dot" style={{ bottom: "20%", left: "15%" }} />
        <div className="node-dot" style={{ bottom: "20%", right: "15%", boxShadow: "0 0 8px #93ccff" }} />
      </div>

      <main className="relative min-h-screen flex items-center justify-center pt-16 px-8 overflow-hidden">
        {/* Left HUD Metadata */}
        <div className="hidden lg:flex flex-col absolute left-8 top-1/2 -translate-y-1/2 space-y-8 border-l border-outline-variant pl-4">
          <div className="space-y-1">
            <p className="font-label-sm text-[12px] text-outline uppercase">Connection_Type</p>
            <p className="font-code-snippet text-[14px] text-primary">ENCRYPTED_TUNNEL_0X</p>
          </div>
          <div className="space-y-1">
            <p className="font-label-sm text-[12px] text-outline uppercase">Local_IP</p>
            <p className="font-code-snippet text-[14px] text-on-surface">192.168.1.104</p>
          </div>
          <div className="space-y-1">
            <p className="font-label-sm text-[12px] text-outline uppercase">Server_Node</p>
            <p className="font-code-snippet text-[14px] text-on-surface">LDN_SQR_BUNKER</p>
          </div>
          <div className="pt-4">
            <div className="w-32 h-1 bg-surface-container-highest">
              <div className="w-2/3 h-full bg-primary" style={{ boxShadow: "0 0 10px rgba(147,204,255,0.5)" }} />
            </div>
            <p className="font-label-sm text-[10px] mt-2 text-outline">UPSTREAM: 42.8 KB/S</p>
          </div>
        </div>

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
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: 48, fontVariationSettings: "'FILL' 1" }}
                >
                  hive
                </span>
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
          <h1 className="font-headline-lg text-[32px] md:text-[64px] mb-8 leading-tight tracking-tighter">
            <span className="text-outline-variant block font-label-sm text-[14px] mb-4">
              IDENTITY_AUTH_SUCCESSFUL
            </span>
            USER_LOGIN:{" "}
            <span className="text-primary italic">CREATIVE_DEV</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <button className="group relative px-8 py-4 bg-primary text-on-primary font-label-sm text-[12px] uppercase tracking-widest overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10 flex items-center gap-2">
                INITIALIZE_PROFILE
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-2 transition-transform">
                  chevron_right
                </span>
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-outline-variant text-on-surface font-label-sm text-[12px] uppercase tracking-widest hover:border-primary hover:text-primary transition-all backdrop-blur-sm">
              VIEW_CODEBASE
            </button>
          </div>

          {/* Sub-metadata grid */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-outline-variant/30 pt-8">
            <div className="text-left">
              <p className="font-label-sm text-[10px] text-outline mb-1">LATENCY</p>
              <p className="font-code-snippet text-[14px] text-on-surface">14.02ms</p>
            </div>
            <div className="text-center">
              <p className="font-label-sm text-[10px] text-outline mb-1">SESSION_TOKEN</p>
              <p className="font-code-snippet text-[14px] text-on-surface">0x82A_99_ALPHA</p>
            </div>
            <div className="text-right">
              <p className="font-label-sm text-[10px] text-outline mb-1">NODE_HEALTH</p>
              <p className="font-code-snippet text-[14px] text-primary">OPTIMAL</p>
            </div>
          </div>
        </div>

        {/* Right HUD Metadata */}
        <div className="hidden lg:flex flex-col absolute right-8 top-1/2 -translate-y-1/2 space-y-8 border-r border-outline-variant pr-4 text-right">
          <div className="space-y-1">
            <p className="font-label-sm text-[12px] text-outline uppercase">Active_Directives</p>
            <p className="font-code-snippet text-[14px] text-on-surface">08_PROJECT_NEURAL</p>
          </div>
          <div className="space-y-1">
            <p className="font-label-sm text-[12px] text-outline uppercase">Archive_State</p>
            <p className="font-code-snippet text-[14px] text-on-surface">INDEXED_74%</p>
          </div>
          <div className="space-y-1">
            <p className="font-label-sm text-[12px] text-outline uppercase">Auth_Level</p>
            <p className="font-code-snippet text-[14px] text-primary">ADMIN_ROOT</p>
          </div>
          <div className="flex justify-end pt-4">
            <div className="grid grid-cols-4 gap-1">
              <div className="w-2 h-2 bg-primary" />
              <div className="w-2 h-2 bg-primary" />
              <div className="w-2 h-2 bg-primary/20" />
              <div className="w-2 h-2 bg-primary/20" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
