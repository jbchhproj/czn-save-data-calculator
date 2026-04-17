import ResultsArea from "./ResultsArea";
import SelectionArea from "./SelectionArea";

interface MainContentProps {
  tier: number;
  faintMemories: number[];
  setFaintMemories: (value: number[]) => void;
  totalFaintMemory: number;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function MainContent({
  tier,
  faintMemories,
  setFaintMemories,
  totalFaintMemory,
  cardRemovals,
  setCardRemovals,
}: MainContentProps) {
  return (
    <main className="">
      <ResultsArea tier={tier} totalFaintMemory={totalFaintMemory} />
      <SelectionArea
        faintMemories={faintMemories}
        setFaintMemories={setFaintMemories}
        cardRemovals={cardRemovals}
        setCardRemovals={setCardRemovals}
      />
    </main>
  );
}
