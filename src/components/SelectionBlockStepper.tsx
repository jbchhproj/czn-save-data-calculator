interface SelectionBlockStepperProps {
  displayCount: number;
  setDisplayCount: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
  maxRemovals?: number;
}

export default function SelectionBlockStepper({
  displayCount,
  setDisplayCount,
  cardRemovals,
  setCardRemovals,
  maxRemovals = 5,
}: SelectionBlockStepperProps) {
  const handleIncrement = () => {
    if (cardRemovals < maxRemovals) {
      setDisplayCount(displayCount + 1);
      setCardRemovals(cardRemovals + 1);
    }
  };

  const handleDecrement = () => {
    if (displayCount > 0) {
      setDisplayCount(displayCount - 1);
      setCardRemovals(cardRemovals - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Decrease card removals"
        type="button"
        className="bg-blue-500 hover:bg-blue-400 py-2 px-4"
        disabled={displayCount <= 0}
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{displayCount}</span>
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