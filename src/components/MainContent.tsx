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
      <SelectionArea
        faintMemories={faintMemories}
        setFaintMemories={setFaintMemories}
        cardRemovals={cardRemovals}
        setCardRemovals={setCardRemovals}
      />
    </main>
  );
}
