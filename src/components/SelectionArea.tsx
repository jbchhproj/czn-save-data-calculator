import { SelectionBlockConfigs } from "@/data/SelectionBlockConfigs";
import SelectionBlock from "./SelectionBlock";

interface SelectionSectionProps {
  faintMemories: number[];
  setFaintMemories: (value: number[]) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function SelectionSection({
  faintMemories,
  setFaintMemories,
  cardRemovals,
  setCardRemovals,
}: SelectionSectionProps) {
  // Helper to update a single block's value in the array
  const handleSetStepperCount = (idx: number, val: number) => {
    const newMemories = [...faintMemories];
    newMemories[idx] = val;
    setFaintMemories(newMemories);
  };

  return (
    <>
      {SelectionBlockConfigs.map((config, idx) => (
        <SelectionBlock
          key={config.id}
          config={config}
          stepperCount={faintMemories[idx]}
          setStepperCount={(val) => handleSetStepperCount(idx, val)}
          cardRemovals={cardRemovals}
          setCardRemovals={setCardRemovals}
        />
      ))}
    </>
  );
}
