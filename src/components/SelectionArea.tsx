import { useState } from "react";
import { SelectionBlockConfigs } from "@/data/SelectionBlockConfigs";
import SelectionBlock from "./SelectionBlock";

interface SelectionAreaProps {
  faintMemories: number[];
  setFaintMemories: (value: number[]) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function SelectionArea({
  faintMemories,
  setFaintMemories,
  cardRemovals,
  setCardRemovals,
}: SelectionAreaProps) {
  const [expandedBlockId, setExpandedBlockId] = useState<string | null>(null);
  const handleToggleExpand = (id: string) => {
    setExpandedBlockId((prev) => (prev === id ? null : id));
  };

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
          isExpanded={expandedBlockId === config.id}
          onToggleExpand={handleToggleExpand}
        />
      ))}
    </>
  );
}
