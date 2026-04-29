import SelectionArea from "./SelectionArea";

interface MainContentProps {
  faintMemories: number[];
  setFaintMemories: (value: number[]) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
  isPostProcessingEnabled: boolean;
}

export default function MainContent({
  faintMemories,
  setFaintMemories,
  cardRemovals,
  setCardRemovals,
  isPostProcessingEnabled,
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
        />
      </div>
    </main>
  );
}
