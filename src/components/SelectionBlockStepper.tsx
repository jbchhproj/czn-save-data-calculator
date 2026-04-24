import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";
import { CARD_REMOVAL_LIMIT } from "@/data/SelectionBlockConfigs";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";

interface SelectionBlockStepperProps {
  config: SelectionBlockConfig;
  stepperCount: number;
  setStepperCount: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function SelectionBlockStepper({
  config,
  stepperCount,
  setStepperCount,
  cardRemovals,
  setCardRemovals,
}: SelectionBlockStepperProps) {
  const isRemoval = config.type === "removal";
  const canIncrement =
    stepperCount < config.max &&
    (!isRemoval || cardRemovals < CARD_REMOVAL_LIMIT);
  const canDecrement = stepperCount > config.min;

  const handleIncrement = () => {
    if (canIncrement) {
      const nextCount = config.stepRule(stepperCount, "increment", config);
      if (nextCount === stepperCount) return;

      setStepperCount(nextCount);
      if (isRemoval) {
        setCardRemovals(cardRemovals + (nextCount - stepperCount));
      }
    }
  };

  const handleDecrement = () => {
    if (canDecrement) {
      const nextCount = config.stepRule(stepperCount, "decrement", config);
      if (nextCount === stepperCount) return;

      setStepperCount(nextCount);
      if (isRemoval) {
        setCardRemovals(cardRemovals - (stepperCount - nextCount));
      }
    }
  };

  const buttonClasses =
    "bg-slate-400 rounded py-[4px] px-[8px] text-slate-950 border border-slate-500/40 shadow-[0_3px_0_rgb(0_0_0/0.2)] transition-transform duration-50 ease-out active:duration-0 active:scale-[0.99] active:translate-y-[2px] active:shadow-[0_1px_0_rgb(0_0_0/0.2)] active:bg-slate-500/50";

  return (
    <div className="flex items-center gap-3 pr-2">
      <button
        aria-label="Decrement"
        type="button"
        className={buttonClasses}
        disabled={!canDecrement}
        onClick={handleDecrement}
      >
        <MinusIcon />
      </button>

      <span className="justify-center text-md text-slate-950">
        {stepperCount}
      </span>

      <button
        aria-label="Increment"
        type="button"
        className={buttonClasses}
        disabled={!canIncrement}
        onClick={handleIncrement}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
