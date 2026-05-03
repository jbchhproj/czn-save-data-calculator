import SelectionArea from "@/components/selection/SelectionArea";
import type { Dispatch, SetStateAction } from "react";

interface MainContentProps {
  faintMemories: number[];
  setFaintMemories: (value: number[]) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
  isPostProcessingEnabled: boolean;
  expandedBlockId: string | null;
  setExpandedBlockId: Dispatch<SetStateAction<string | null>>;
}

export default function MainContent({
  faintMemories,
  setFaintMemories,
  cardRemovals,
  setCardRemovals,
  isPostProcessingEnabled,
  expandedBlockId,
  setExpandedBlockId,
}: MainContentProps) {
  return (
    <main>
      <div className="p-2">
        <SelectionArea
          faintMemories={faintMemories}
          setFaintMemories={setFaintMemories}
          cardRemovals={cardRemovals}
          setCardRemovals={setCardRemovals}
          isPostProcessingEnabled={isPostProcessingEnabled}
          expandedBlockId={expandedBlockId}
          setExpandedBlockId={setExpandedBlockId}
        />
      </div>
    </main>
  );
}
