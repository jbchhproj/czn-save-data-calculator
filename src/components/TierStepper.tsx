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

  const buttonClasses =
    "relative z-10 rounded border border-slate-500/40 bg-slate-400 px-[8px] py-[4px] text-slate-950 shadow-[0_3px_0_rgb(0_0_0/0.2)] transition-transform duration-50 ease-out active:duration-0 active:scale-99 active:translate-y-[2px] active:shadow-[0_1px_0_rgb(0_0_0/0.2)] active:bg-slate-500/50";

  return (
    <div className="flex h-10 max-w-full items-center gap-1 rounded-sm bg-gray-200 px-1">
      <span className="text-md text-slate-950">TIER</span>

      <div className="flex items-center">
        <button
          aria-label="Decrease tier"
          type="button"
          className={buttonClasses}
          disabled={tier <= minTier}
          onClick={() => setTier(tier - 1)}
        >
          <span className="text-slate-950">
            <MinusIcon />
          </span>
        </button>

        <label htmlFor="tier-select">
          <div className="relative -mx-px z-0">
            <select
              id="tier-select"
              className="appearance-none rounded-none bg-slate-600 px-2 pr-8 text-md text-indigo-100 shadow-[0_3px_0_rgb(0_0_0/0.2)]"
              value={tier}
              onChange={handleTierChange}
            >
              {options}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-indigo-100">
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          </div>
        </label>

        <button
          aria-label="Increase tier"
          type="button"
          className={buttonClasses}
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
