import SelectionSection from "./SelectionSection";
import ResultsSection from "./ResultsSection";

interface MainContentProps {
  tier: number;
  faintMemory: number;
}

export default function MainContent({
  tier,
  faintMemory,
}: MainContentProps) {
  return (
    <main className="">
      <ResultsSection tier={tier} />
      <SelectionSection faintMemory={faintMemory} />
    </main>
  );
}
