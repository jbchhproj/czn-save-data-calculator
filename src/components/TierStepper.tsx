import React, { useState } from "react";

export default function TierStepper() {
  const [tier, setTier] = useState(1);
  const minTier = 1;
  const maxTier = 15;

  const options = Array.from({ length: maxTier }, (_, i) => (
    <option key={i + minTier} value={i + minTier}>
      {i + minTier}
    </option>
  ));

  const handleTierChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTier(Number(event.target.value));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Decrease tier"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 py-2 px-4"
        disabled={tier <= minTier}
        onClick={() => setTier(tier - 1)}
      >
        -
      </button>
      <label htmlFor="tier-select" className="mx-2">
        <select
          id="tier-select"
          className="bg-blue-500 hover:bg-blue-400 px-2 py-1 rounded"
          value={tier}
          onChange={handleTierChange}
        >
          {options}
        </select>
      </label>
      <button
        aria-label="Increase tier"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 py-2 px-4"
        disabled={tier >= maxTier}
        onClick={() => setTier(tier + 1)}
      >
        +
      </button>
    </div>
  );
}