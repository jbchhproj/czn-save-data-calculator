"use client";

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

function getParticleValue(index: number, salt: number): number {
  const value = Math.sin(index * 999 + salt) * 10000;
  return value - Math.floor(value);
}

function createParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const size = 4 + getParticleValue(i, 1) * 8;
    const speedBias = getParticleValue(i, 2);

    return {
      id: i,
      left: `${getParticleValue(i, 3) * 100}%`,
      size: `${size}px`,
      duration: `${8 + speedBias * speedBias * 18}s`,
      delay: `${getParticleValue(i, 4) * -24}s`,
      opacity: 0.45 + getParticleValue(i, 5) * 0.45,
      driftX: `${(getParticleValue(i, 6) - 0.5) * 70}px`,
    };
  });
}

const particles = createParticles();

export default function FloatingParticles() {
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
