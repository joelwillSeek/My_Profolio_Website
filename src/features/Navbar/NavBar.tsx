"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import ScrambleText from "../../components/ScrambleText";

export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "WORKS", href: "#projects" },
  { label: "ABOUT ME", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export default function NormalNavBar() {
  const [sideHudOpen, setSideHudOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.querySelector(NAV_LINKS[i].href) as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          if (activeHash !== NAV_LINKS[i].href) {
            setActiveHash(NAV_LINKS[i].href);
          }
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeHash]);

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
      <TopHeader
        activeHash={activeHash}
        setActiveHash={setActiveHash}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <MobileNavPanel
        activeHash={activeHash}
        setActiveHash={setActiveHash}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <SideHUDPanel sideHudOpen={sideHudOpen} />
    </>
  );
}

function TopHeader({
  activeHash,
  setActiveHash,
  mobileNavOpen,
  setMobileNavOpen
}: {
  activeHash: string,
  setActiveHash: Dispatch<SetStateAction<string>>,
  mobileNavOpen: boolean,
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant transition-all">
      <div className="flex justify-between items-center w-full px-4 md:px-8 lg:px-12 py-3 lg:py-5 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-2 md:gap-4">
          <span className="font-headline-md flex items-center text-[16px] md:text-[24px] font-bold text-primary tracking-tighter uppercase">
            <ScrambleText text="EyoelSeleshi" trigger="hover" speed={30} />
          </span>
          <span className="hidden sm:flex font-headline-md items-center font-label-sm text-[10px] md:text-[12px] px-2 py-0.5 bg-primary-container text-on-primary">
            <ScrambleText text="LIVE_SESSION" trigger="hover" speed={40} />
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-end gap-6 w-full lg:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`font-label-sm text-[12px] uppercase tracking-widest transition-all duration-200 border-b-2 pb-1 ${isActive
                  ? "text-primary border-primary"
                  : "text-on-surface-variant border-transparent hover:text-primary-container hover:border-primary/50"
                  }`}
              >
                <ScrambleText text={link.label} trigger="hover" />
              </a>
            );
          })}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-primary p-2 flex items-center justify-center border border-primary/30 rounded-sm bg-primary/10 transition-colors hover:bg-primary/20"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <span className="material-symbols-outlined">{mobileNavOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileNavPanel({
  activeHash,
  setActiveHash,
  mobileNavOpen,
  setMobileNavOpen
}: {
  activeHash: string,
  setActiveHash: Dispatch<SetStateAction<string>>,
  mobileNavOpen: boolean,
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl pt-28 px-6 transition-transform duration-300 md:hidden ${mobileNavOpen ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex flex-col gap-6 items-center text-center">
        {NAV_LINKS.map((link) => {
          const isActive = activeHash === link.href;
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveHash(link.href);
                setMobileNavOpen(false); // Close menu on click
              }}
              className={`font-headline-md text-3xl uppercase tracking-widest transition-all w-full py-6 border-b border-outline-variant/30 ${isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

function SideHUDPanel({ sideHudOpen }: { sideHudOpen: boolean }) {
  return (
    <div
      className={`fixed right-0 top-0 h-full w-64 bg-surface-container-lowest border-l border-outline-variant z-50 transition-transform duration-300 hidden md:block ${sideHudOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex flex-col h-full py-8 space-y-8 px-6">
        <div className="mb-8">
          <span className="font-headline-md text-[20px] text-primary">CREATIVE_DEV</span>
          <p className="font-label-sm text-[12px] text-outline-variant uppercase">ID: 0x82A_99</p>
        </div>
      </div>
    </div>
  );
}
