import { selectionBlocks } from "@/lib/calculator/selectionBlocks";
import SelectionBlock from "./SelectionBlock";
import type { Dispatch, SetStateAction } from "react";

interface SelectionAreaProps {
  faintMemories: number[];
  setFaintMemories: (value: number[]) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
  isPostProcessingEnabled: boolean;
  expandedBlockId: string | null;
  setExpandedBlockId: Dispatch<SetStateAction<string | null>>;
}

export default function SelectionArea({
  faintMemories,
  setFaintMemories,
  cardRemovals,
  setCardRemovals,
  isPostProcessingEnabled,
  expandedBlockId,
  setExpandedBlockId,
}: SelectionAreaProps) {
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
      {selectionBlocks.map((config, idx) => (
        <SelectionBlock
          key={config.id}
          config={config}
          stepperCount={faintMemories[idx]}
          setStepperCount={(val) => handleSetStepperCount(idx, val)}
          cardRemovals={cardRemovals}
          setCardRemovals={setCardRemovals}
          isExpanded={expandedBlockId === config.id}
          onToggleExpand={handleToggleExpand}
          isPostProcessingEnabled={isPostProcessingEnabled}
        />
      ))}
    </>
  );
}
