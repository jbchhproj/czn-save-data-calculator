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
  cardRemovalLimit?: number;
}

export default function SelectionBlockStepper({
  config,
  stepperCount,
  setStepperCount,
  cardRemovals,
  setCardRemovals,
  cardRemovalLimit = CARD_REMOVAL_LIMIT,
}: SelectionBlockStepperProps) {
  const isRemoval = config.type === "removal";
  const canIncrement =
    stepperCount < config.max &&
    (!isRemoval || cardRemovals < cardRemovalLimit);
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
    <div className="flex items-center gap-2 max-w-full flex-shrink">
      <button
        aria-label="Decrease card removals"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 rounded text-sm sm:text-base py-1 sm:py-2 px-2 sm:px-4"
        disabled={!canDecrement}
        onClick={handleDecrement}
      >
        <MinusIcon />
      </button>
      <span className="text-sm sm:text-base">{stepperCount}</span>
      <button
        aria-label="Increase card removals"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 rounded text-sm sm:text-base py-1 sm:py-2 px-2 sm:px-4"
        disabled={!canIncrement}
        onClick={handleIncrement}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
