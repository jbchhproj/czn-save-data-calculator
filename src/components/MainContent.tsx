import SelectionSection from "./SelectionSection";
import ResultsSection from "./ResultsSection";

interface MainContentProps {
  tier: number;
  faintMemory: number;
  setFaintMemory: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function MainContent({
  tier,
  faintMemory,
  setFaintMemory,
  cardRemovals,
  setCardRemovals,
}: MainContentProps) {
  return (
    <main className="">
      <ResultsSection tier={tier} />
      <SelectionSection
        faintMemory={faintMemory}
        setFaintMemory={setFaintMemory}
        cardRemovals={cardRemovals}
        setCardRemovals={setCardRemovals}
      />
    </main>
  );
}
