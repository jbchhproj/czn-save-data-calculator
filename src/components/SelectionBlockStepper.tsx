import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";

interface SelectionBlockStepperProps {
  config: SelectionBlockConfig;
  stepperCount: number;
  setStepperCount: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
  maxRemovals?: number;
}

export default function SelectionBlockStepper({
  config,
  stepperCount,
  setStepperCount,
  cardRemovals,
  setCardRemovals,
  maxRemovals = 5,
}: SelectionBlockStepperProps) {
  const handleIncrement = () => {
    if (cardRemovals < maxRemovals) {
      setStepperCount(config.stepRule(stepperCount, "increment", config));
      setCardRemovals(cardRemovals + 1);
    }
  };

  const handleDecrement = () => {
    if (stepperCount > 0) {
      setStepperCount(config.stepRule(stepperCount, "decrement", config));
      setCardRemovals(cardRemovals - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Decrease card removals"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded"
        disabled={stepperCount <= 0}
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{stepperCount}</span>
      <button
        aria-label="Increase card removals"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded"
        disabled={cardRemovals >= maxRemovals}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
