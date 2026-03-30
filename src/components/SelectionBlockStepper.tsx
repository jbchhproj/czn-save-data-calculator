interface SelectionBlockStepperProps {
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function SelectionBlockStepper({
  cardRemovals,
  setCardRemovals,
}: SelectionBlockStepperProps) {
  return (
    <div>
      <button
        onClick={() => setCardRemovals(cardRemovals - 1)}
        disabled={cardRemovals <= 0}
      >
        -
      </button>
      <span>{cardRemovals}</span>
      <button
        onClick={() => setCardRemovals(cardRemovals + 1)}
        disabled={cardRemovals >= 5}
      >
        +
      </button>
    </div>
  );
}
