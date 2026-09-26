"use client";

import { useEffect } from "react";

export default function AmbientField() {
  useEffect(() => {
    let frame = 0;

    const updatePointer = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
        frame = 0;
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="ambient-field" aria-hidden="true">
      <span className="ambient-orbit ambient-orbit-one" />
      <span className="ambient-orbit ambient-orbit-two" />
      <span className="ambient-node ambient-node-one" />
      <span className="ambient-node ambient-node-two" />
      <span className="ambient-node ambient-node-three" />
    </div>
  );
}
