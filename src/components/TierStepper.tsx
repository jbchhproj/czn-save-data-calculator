import React, { useState } from "react";

interface TierStepperProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (tier: number) => void;
}

const TierStepper: React.FC<TierStepperProps> = ({ min = 1, max = 16, value, onChange }) => {
  const [tier, setTier] = useState(value ?? min);

  const handleChange = (newTier: number) => {
    if (newTier < min || newTier > max) return;
    setTier(newTier);
    onChange?.(newTier);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="px-2 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
        onClick={() => handleChange(tier - 1)}
        disabled={tier <= min}
        aria-label="Decrease tier"
      >
        -
      </button>
      <select
        className="px-3 py-1 bg-gray-800 text-white rounded appearance-none text-center"
        value={tier}
        onChange={e => handleChange(Number(e.target.value))}
        aria-label="Select tier"
      >
        {Array.from({ length: max - min + 1 }, (_, i) => (
          <option key={i + min} value={i + min}>{i + min}</option>
        ))}
      </select>
      <button
        type="button"
        className="px-2 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
        onClick={() => handleChange(tier + 1)}
        disabled={tier >= max}
        aria-label="Increase tier"
      >
        +
      </button>
    </div>
  );
};

export default TierStepper;
