import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";
import SelectionBlockStepper from "./SelectionBlockStepper";

interface SelectionBlockProps {
  config: SelectionBlockConfig;
  displayCount: number;
  setDisplayCount: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function SelectionBlock({
  config,
  displayCount,
  setDisplayCount,
  cardRemovals,
  setCardRemovals,
}: SelectionBlockProps) {
  return (
    <div>
      {config.label}: {config.faintMemoryContribution(displayCount)}
      <SelectionBlockStepper
        displayCount={displayCount}
        setDisplayCount={setDisplayCount}
        cardRemovals={cardRemovals}
        setCardRemovals={setCardRemovals}
      />
    </div>
  );
}