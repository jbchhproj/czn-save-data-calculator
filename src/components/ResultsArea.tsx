interface ResultsSectionProps {
  tier: number;
  totalFaintMemory: number;
}

export default function ResultsSection({
  tier,
  totalFaintMemory,
}: ResultsSectionProps) {
  let faintMemoryLimit = 20 + tier * 10;

  return (
    <div>
      FAINT MEMORY: {totalFaintMemory} / {faintMemoryLimit}
    </div>
  );
}
