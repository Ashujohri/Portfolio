"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantEffect && typeof window !== "undefined") {
      import("vanta/dist/vanta.globe.min").then((NET) => {
        setVantaEffect(
          NET.default({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
          })
        );
      });
    }
    return () => {
      if (vantEffect) vantEffect.destroy();
    };
  }, [vantEffect]);

  return (
    <div
      className="fixed inset-0 -z-10"
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
      }}
    />
  );
}
