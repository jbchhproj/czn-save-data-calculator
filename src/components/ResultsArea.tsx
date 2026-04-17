interface ResultsSectionProps {
  tier: number;
  totalFaintMemory: number;
}

export default function ResultsSection({
  tier,
  totalFaintMemory,
}: ResultsSectionProps) {
  let faintMemoryLimit = tier * 10;

  return (
    <div className="text-white">
      FAINT MEMORY: {totalFaintMemory} / {faintMemoryLimit}
    </div>
  );
}
