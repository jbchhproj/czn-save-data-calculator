import type { ChangeEvent } from "react";
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

  const handleTierChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTier(Number(event.target.value));
  };

  return (
    <div className="h-9 flex items-center gap-1 max-w-full bg-gray-200 rounded-sm px-1">
      <span className="text-sm text-slate-950">TIER</span>

      <div className="flex items-center">
        <button
          aria-label="Decrease tier"
          type="button"
          className="bg-slate-400 rounded py-[3px] px-[7px] text-slate-950 border border-slate-500/40 shadow-[0_3px_0_rgb(0_0_0/0.1)]"
          disabled={tier <= minTier}
          onClick={() => setTier(tier - 1)}
        >
          <span className="text-slate-950">
            <MinusIcon />
          </span>
        </button>

        <label htmlFor="tier-select">
          <div className="relative">
            <select
              id="tier-select"
              className="bg-slate-600 text-sm text-indigo-100 px-2 pr-8 appearance-none rounded-none shadow-[0_3px_0_rgb(0_0_0/0.1)]"
              value={tier}
              onChange={handleTierChange}
            >
              {options}
            </select>
            <span className="text-indigo-100 pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <ChevronDownIcon className="w-4 h-4" />
            </span>
          </div>
        </label>

        <button
          aria-label="Increase tier"
          type="button"
          className="bg-slate-400 rounded py-[3px] px-[7px] text-slate-950 border border-slate-500/40 shadow-[0_3px_0_rgb(0_0_0/0.1)]"
          disabled={tier >= maxTier}
          onClick={() => setTier(tier + 1)}
        >
          <span className="text-slate-950">
            <PlusIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
