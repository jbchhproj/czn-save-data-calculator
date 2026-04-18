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
  const canIncrement = !isRemoval || cardRemovals < cardRemovalLimit;
  const canDecrement = stepperCount > 0;

  const handleIncrement = () => {
    if (canIncrement) {
      setStepperCount(config.stepRule(stepperCount, "increment", config));
      if (isRemoval) {
        setCardRemovals(cardRemovals + 1);
      }
    }
  };

  const handleDecrement = () => {
    if (canDecrement) {
      setStepperCount(config.stepRule(stepperCount, "decrement", config));
      if (isRemoval) {
        setCardRemovals(cardRemovals - 1);
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
