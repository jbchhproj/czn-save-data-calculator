import React, { useState } from "react";

interface TierStepperProps {
  tier: number;
  setTier: (tier: number) => void;
  isDeepTraumaActive: boolean;
}

export default function TierStepper({
  tier,
  setTier,
  isDeepTraumaActive,
}: TierStepperProps) {
  const minTier = isDeepTraumaActive ? 2 : 1;
  const maxTier = isDeepTraumaActive ? 16 : 15;

  const options = Array.from({ length: maxTier - minTier + 1 }, (_, i) => (
    <option key={i + minTier} value={i + minTier}>
      {i + minTier}
    </option>
  ));

  const handleTierChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTier(Number(event.target.value));
  };

  return (
    <div className="flex items-center gap-2 max-w-full flex-shrink">
      <button
        aria-label="Decrease tier"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 rounded text-sm sm:text-base py-1 sm:py-2 px-2 sm:px-4"
        disabled={tier <= minTier}
        onClick={() => setTier(tier - 1)}
      >
        -
      </button>
      <label htmlFor="tier-select" className="mx-2">
        <select
          id="tier-select"
          className="bg-blue-500 hover:bg-blue-400 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base"
          value={tier}
          onChange={handleTierChange}
        >
          {options}
        </select>
      </label>
      <button
        aria-label="Increase tier"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 rounded text-sm sm:text-base py-1 sm:py-2 px-2 sm:px-4"
        disabled={tier >= maxTier}
        onClick={() => setTier(tier + 1)}
      >
        +
      </button>
    </div>
  );
}
