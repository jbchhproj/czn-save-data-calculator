import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";
import { CARD_REMOVAL_LIMIT } from "@/data/SelectionBlockConfigs";

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
  cardRemovalLimit = CARD_REMOVAL_LIMIT
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
    <div className="flex items-center gap-2">
      <button
        aria-label="Decrease card removals"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded"
        disabled={!canDecrement}
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{stepperCount}</span>
      <button
        aria-label="Increase card removals"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded"
        disabled={!canIncrement}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
