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
    <div className="-ml-8 flex h-full w-[calc(100%+2rem)] items-center rounded-r bg-amber-200 py-1 pl-8 pr-2 text-sm text-slate-950">
      <div className="flex w-full flex-col justify-center leading-tight">
        <span>FAINT MEMORY</span>

        <div className="inline-flex items-center gap-1 whitespace-nowrap tabular-nums">
          <span className="w-[5ch] text-right">{totalFaintMemory}</span>
          <span className="w-[1ch] text-center">/</span>
          <span className="w-[1ch] text-right">{faintMemoryLimit}</span>
        </div>
      </div>
    </div>
  );
}
