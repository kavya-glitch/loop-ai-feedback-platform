"use client";

import type { CSSProperties } from "react";

const PARTICLES = [
  { top: "15%", left: "10%", delay: 0, size: 8 },
  { top: "70%", left: "6%", delay: 1.5, size: 6 },
  { top: "30%", left: "90%", delay: 0.8, size: 7 },
  { top: "85%", left: "82%", delay: 2.2, size: 6 },
  { top: "50%", left: "94%", delay: 1.2, size: 5 },
  { top: "8%", left: "72%", delay: 0.4, size: 6 },
  { top: "45%", left: "4%", delay: 1.8, size: 5 },
  { top: "92%", left: "45%", delay: 2.8, size: 4 },
];

export function AuthBackground() {
  return (
    <div className="auth-bg-root" aria-hidden>
      <div className="auth-bg-base" />
      <div className="auth-bg-blob auth-bg-blob-1" />
      <div className="auth-bg-blob auth-bg-blob-2" />
      <div className="auth-bg-blob auth-bg-blob-3" />
      <div className="auth-bg-mesh" />
      <div className="auth-bg-grid" />

      <div className="auth-bg-orbit-wrap">
        <div className="auth-bg-orbit-spin auth-bg-orbit-spin-1">
          <div className="auth-bg-orbit-ring auth-bg-orbit-ring-1" />
          <span className="auth-bg-orbit-dot" />
        </div>
        <div className="auth-bg-orbit-spin auth-bg-orbit-spin-2">
          <div className="auth-bg-orbit-ring auth-bg-orbit-ring-2" />
          <span className="auth-bg-orbit-dot auth-bg-orbit-dot-dim" />
        </div>
        <div className="auth-bg-orbit-spin auth-bg-orbit-spin-3">
          <div className="auth-bg-orbit-ring auth-bg-orbit-ring-3" />
        </div>
        <div className="auth-bg-orbit-core" />
      </div>

      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="auth-bg-particle"
          style={
            {
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              "--delay": `${particle.delay}s`,
            } as CSSProperties
          }
        />
      ))}

      <div className="auth-bg-beam auth-bg-beam-1" />
      <div className="auth-bg-beam auth-bg-beam-2" />
      <div className="auth-bg-vignette" />
    </div>
  );
}
