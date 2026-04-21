import React, { useState } from "react";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import ChevronDownIcon from "./icons/ChevronDownIcon";

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
    <div className="flex items-center gap-2 max-w-full">
      <button
        aria-label="Decrease tier"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 rounded py-1 px-2"
        disabled={tier <= minTier}
        onClick={() => setTier(tier - 1)}
      >
        <MinusIcon />
      </button>
      <label htmlFor="tier-select" className="mx-2">
        <div className="relative">
          <select
            id="tier-select"
            className="bg-blue-500 hover:bg-blue-400 px-2 py-1 pr-8 appearance-none rounded"
            value={tier}
            onChange={handleTierChange}
          >
            {options}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <ChevronDownIcon />
          </span>
        </div>
      </label>
      <button
        aria-label="Increase tier"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 rounded py-1 px-2"
        disabled={tier >= maxTier}
        onClick={() => setTier(tier + 1)}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
