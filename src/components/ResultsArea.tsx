import SlashIcon from "./icons/SlashIcon";

interface ResultsSectionProps {
  tier: number;
  totalFaintMemory: number;
}

export default function ResultsSection({
  tier,
  totalFaintMemory,
}: ResultsSectionProps) {
  const faintMemoryLimit = 20 + tier * 10;

  return (
    <div className="-ml-8 flex h-full w-[calc(100%+2rem)] flex-col justify-center rounded-r bg-amber-200 py-1 pl-10 pr-2 text-sm text-indigo-950">
      <span className="leading-tight">FAINT</span>

      <div className="grid grid-cols-[auto_3ch_auto_2ch] items-center gap-1 whitespace-nowrap tabular-nums">
        <span>MEMORY:</span>
        <span className="text-right">{totalFaintMemory}</span>
        <span className="flex justify-center">
          <SlashIcon className="h-4 w-4" />
        </span>
        <span>{faintMemoryLimit}</span>
      </div>
    </div>
  );
}
