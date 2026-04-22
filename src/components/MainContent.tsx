import SelectionArea from "./SelectionArea";

interface MainContentProps {
  faintMemories: number[];
  setFaintMemories: (value: number[]) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function MainContent({
  faintMemories,
  setFaintMemories,
  cardRemovals,
  setCardRemovals,
}: MainContentProps) {
  return (
    <main>
      <div className="p-2">
        <SelectionArea
          faintMemories={faintMemories}
          setFaintMemories={setFaintMemories}
          cardRemovals={cardRemovals}
          setCardRemovals={setCardRemovals}
        />
      </div>
    </main>
  );
}
