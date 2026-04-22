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
  const [leadingLabel, ...trailingLabelParts] = "FAINT MEMORY".split(/\s+/);
  const trailingLabel = trailingLabelParts.join(" ");

  return (
    <div className="-ml-8 flex h-full w-[calc(100%+2rem)] items-center rounded-r bg-amber-200 py-1 pl-8 pr-2 text-sm text-indigo-950">
      <div className="flex w-full items-center gap-3">
        <div className="flex w-24 shrink-0 flex-col justify-center">
          <span className="leading-tight">{leadingLabel}</span>
          {trailingLabel && <span className="leading-tight">{trailingLabel}</span>}
        </div>

        <div className="inline-flex items-center gap-1 whitespace-nowrap tabular-nums">
          <span className="w-3 text-right">{totalFaintMemory}</span>
          <SlashIcon className="h-4 w-4" />
          <span className="w-3">{faintMemoryLimit}</span>
        </div>
      </div>
    </div>
  );
}
