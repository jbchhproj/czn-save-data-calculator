import SlashIcon from "./icons/SlashIcon";

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
    <div className="flex justify-center items-center text-indigo-950 bg-gray-300 px-2 py-1">
      <span className="inline-flex items-center gap-1">
        <span>FAINT MEMORY:</span>
        <span>{totalFaintMemory}</span>
        <SlashIcon />
        <span>{faintMemoryLimit}</span>
      </span>
    </div>
  );
}
