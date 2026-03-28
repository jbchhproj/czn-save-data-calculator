import SelectionSection from "./SelectionSection";
import ResultsSection from "./ResultsSection";

interface MainContentProps {
  tier: number;
  faintMemory: number;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function MainContent({
  tier,
  faintMemory,
  cardRemovals,
  setCardRemovals,
}: MainContentProps) {
  return (
    <main className="">
      <ResultsSection tier={tier} />
      <SelectionSection
        faintMemory={faintMemory}
        cardRemovals={cardRemovals}
        setCardRemovals={setCardRemovals}
      />
    </main>
  );
}
