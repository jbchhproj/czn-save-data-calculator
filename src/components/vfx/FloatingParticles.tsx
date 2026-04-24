"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  opacity: number;
  driftX: string;
};

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => {
      const size = 5 + Math.random() * 7;
      const speedBias = Math.random();

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${size}px`,
        duration: `${6 + speedBias * speedBias * 18}s`, // slower bias
        delay: `${Math.random() * -20}s`,
        opacity: 0.3 + Math.random() * 0.6,
        driftX: `${(Math.random() - 0.5) * 80}px`, // horizontal drift
      };
    });

    setParticles(generated);
  }, []);

  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-particle"
          style={
            {
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              "--particle-opacity": p.opacity,
              "--drift-x": p.driftX,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
