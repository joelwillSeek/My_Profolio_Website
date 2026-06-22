"use client";

import { useEffect, useState } from "react";

export default function BackgroundVideo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed inset-0 w-full h-full object-cover brightness-30 z-[-1] pointer-events-none mix-blend-screen"
    >
      <source src="/video/bg.webm" type="video/webm" />
    </video>
  );
}
