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

const PARTICLE_COUNT = 20;

function createParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const size = 4 + Math.random() * 8;
    const speedBias = Math.random();

    return {
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${size}px`,
      duration: `${8 + speedBias * speedBias * 18}s`,
      delay: `${Math.random() * -24}s`,
      opacity: 0.45 + Math.random() * 0.45,
      driftX: `${(Math.random() - 0.5) * 70}px`,
    };
  });
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(createParticles());
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