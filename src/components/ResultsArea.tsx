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
    <span className="text-indigo-950 bg-gray-300 rounded px-2 py-1">
      FAINT MEMORY: {totalFaintMemory} / {faintMemoryLimit}
    </span>
  );
}
