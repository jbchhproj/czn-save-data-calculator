import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";
import SelectionBlockStepper from "./SelectionBlockStepper";

interface SelectionBlockProps {
  config: SelectionBlockConfig;
  stepperCount: number;
  setStepperCount: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function SelectionBlock({
  config,
  stepperCount,
  setStepperCount,
  cardRemovals,
  setCardRemovals,
}: SelectionBlockProps) {
  return (
    <div>
      {config.label}: {config.faintMemoryContribution(stepperCount)}
      <SelectionBlockStepper
        config={config}
        stepperCount={stepperCount}
        setStepperCount={setStepperCount}
        cardRemovals={cardRemovals}
        setCardRemovals={setCardRemovals}
      />
    </div>
  );
}
