import SelectionSection from "./SelectionSection";
import ResultsSection from "./ResultsSection";

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
      <ResultsSection tier={tier} totalFaintMemory={totalFaintMemory} />
      <SelectionSection
        faintMemories={faintMemories}
        setFaintMemories={setFaintMemories}
        cardRemovals={cardRemovals}
        setCardRemovals={setCardRemovals}
      />
    </main>
  );
}
