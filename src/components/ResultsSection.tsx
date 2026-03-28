interface ResultsSectionProps {
  tier: number;
}

export default function ResultsSection({ tier }: ResultsSectionProps) {
  let maxFaintMemory = tier * 10;
  let currentFaintMemory = 0;

  return (
    <div className="text-white">
      FAINT MEMORY: {currentFaintMemory} / {maxFaintMemory}
    </div>
  );
}
