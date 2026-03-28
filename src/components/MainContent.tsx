import SelectionSection from "./SelectionSection";
import ResultsSection from "./ResultsSection";

interface MainContentProps {
  tier: number;
  currentFaintMemory: number;
}

export default function MainContent({
  tier,
  currentFaintMemory,
}: MainContentProps) {
  return (
    <main className="">
      <ResultsSection tier={tier} />
      <SelectionSection currentFaintMemory={currentFaintMemory} />
    </main>
  );
}
