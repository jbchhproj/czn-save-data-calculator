import type { ChangeEvent } from "react";
import PlusIcon from "@/components/icons/PlusIcon";
import MinusIcon from "@/components/icons/MinusIcon";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import clsx from "clsx";

interface TierStepperProps {
  tier: number;
  setTier: (tier: number) => void;
  isDeepTraumaActive: boolean;
  isPostProcessingEnabled: boolean;
}

export default function TierStepper({
  tier,
  setTier,
  isDeepTraumaActive,
  isPostProcessingEnabled,
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

  const isDecreaseDisabled = tier <= minTier;
  const isIncreaseDisabled = tier >= maxTier;
  const hasDeepTraumaEffects = isPostProcessingEnabled && isDeepTraumaActive;
  const buttonClasses = clsx(
    "relative z-10 rounded border border-slate-500/40 bg-slate-300 py-[6px] px-[10px] text-slate-950 transition-transform duration-50 ease-out active:duration-0 active:scale-99 active:translate-y-[2px] active:bg-slate-500/50",
    hasDeepTraumaEffects
      ? "shadow-[0_3px_0_rgb(148_163_184/0.55),0_0_5px_rgb(148_163_184/0.3)] active:shadow-[0_1px_0_rgb(148_163_184/0.55),0_0_3px_rgb(148_163_184/0.25)] disabled:active:shadow-[0_3px_0_rgb(148_163_184/0.55),0_0_5px_rgb(148_163_184/0.3)]"
      : "shadow-[0_3px_0_rgb(0_0_0/0.2)] active:shadow-[0_1px_0_rgb(0_0_0/0.2)] disabled:active:shadow-[0_3px_0_rgb(0_0_0/0.2)]",
    "disabled:cursor-not-allowed disabled:active:translate-y-0 disabled:active:scale-100",
    "disabled:bg-[#b6c2d1] disabled:text-slate-500",
  );
  const selectClasses = clsx(
    "appearance-none rounded-none bg-slate-600 px-2 pr-8 text-md text-indigo-100",
    hasDeepTraumaEffects
      ? "shadow-[0_3px_0_rgb(148_163_184/0.55),0_0_5px_rgb(148_163_184/0.3)]"
      : "shadow-[0_3px_0_rgb(0_0_0/0.2)]",
  );

  return (
    <div className="flex items-center justify-end gap-3">
      <span
        className={clsx(
          "text-md",
          isPostProcessingEnabled && isDeepTraumaActive
            ? "text-amber-200"
            : "text-slate-950",
        )}
      >
        TIER
      </span>

      <div className="flex items-center">
        <button
          aria-label="Decrease tier"
          type="button"
          className={buttonClasses}
          disabled={isDecreaseDisabled}
          onClick={() => setTier(tier - 1)}
        >
          <span>
            <MinusIcon />
          </span>
        </button>

        <label htmlFor="tier-select">
          <div className="relative -mx-px z-0">
            <select
              id="tier-select"
              className={selectClasses}
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
          disabled={isIncreaseDisabled}
          onClick={() => setTier(tier + 1)}
        >
          <span>
            <PlusIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
