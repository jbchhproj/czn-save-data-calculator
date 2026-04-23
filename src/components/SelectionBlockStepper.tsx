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

  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Decrease card removals"
        type="button"
        className="bg-slate-400 rounded py-1 px-2 text-slate-950"
        disabled={!canDecrement}
        onClick={handleDecrement}
      >
        <MinusIcon />
      </button>

      <span className="inline-flex w-4 justify-center text-sm text-slate-950">
        {stepperCount}
      </span>

      <button
        aria-label="Increase card removals"
        type="button"
        className="bg-slate-400 rounded py-1 px-2 text-slate-950"
        disabled={!canIncrement}
        onClick={handleIncrement}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
