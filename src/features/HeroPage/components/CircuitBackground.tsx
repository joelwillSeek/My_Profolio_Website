export default function CircuitBackground() {
  return (
    <>
      {/* Scanline overlay */}
      <div className="scanline" />

      {/* Circuit line decorations */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="circuit-line w-full h-[1px]" style={{ top: "20%", left: 0 }} />
        <div className="circuit-line w-[1px] h-full" style={{ left: "15%", top: 0 }} />
        <div className="circuit-line w-[1px] h-full" style={{ right: "15%", top: 0 }} />
        <div className="circuit-line w-full h-[1px]" style={{ bottom: "20%", left: 0 }} />
        <div className="node-dot" style={{ top: "20%", left: "15%", boxShadow: "0 0 8px #93ccff" }} />
        <div className="node-dot" style={{ top: "20%", right: "15%" }} />
        <div className="node-dot" style={{ bottom: "20%", left: "15%" }} />
        <div className="node-dot" style={{ bottom: "20%", right: "15%", boxShadow: "0 0 8px #93ccff" }} />
      </div>
    </>
  );
}
