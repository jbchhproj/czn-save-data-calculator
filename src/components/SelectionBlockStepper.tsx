interface SelectionBlockStepperProps {
  stepperCount: number;
  setStepperCount: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
  maxRemovals?: number;
}

export default function SelectionBlockStepper({
  stepperCount,
  setStepperCount,
  cardRemovals,
  setCardRemovals,
  maxRemovals = 5,
}: SelectionBlockStepperProps) {
  const handleIncrement = () => {
    if (cardRemovals < maxRemovals) {
      setStepperCount(stepperCount + 1);
      setCardRemovals(cardRemovals + 1);
    }
  };

  const handleDecrement = () => {
    if (stepperCount > 0) {
      setStepperCount(stepperCount - 1);
      setCardRemovals(cardRemovals - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Decrease card removals"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 py-2 px-4"
        disabled={stepperCount <= 0}
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{stepperCount}</span>
      <button
        aria-label="Increase card removals"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 py-2 px-4"
        disabled={cardRemovals >= maxRemovals}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
