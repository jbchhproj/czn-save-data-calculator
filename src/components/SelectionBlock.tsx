import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";
import SelectionBlockStepper from "./SelectionBlockStepper";

interface SelectionBlockProps {
  config: SelectionBlockConfig;
  faintMemory: number;
  setFaintMemory: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function SelectionBlock({
  config,
  faintMemory,
  setFaintMemory,
  cardRemovals,
  setCardRemovals,
}: SelectionBlockProps) {
  return (
    <div>
      TOOLTIP {config.label}: {faintMemory}
      <SelectionBlockStepper
        cardRemovals={cardRemovals}
        setCardRemovals={setCardRemovals}
      />
    </div>
  );
}
