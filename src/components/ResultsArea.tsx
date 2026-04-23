import { clsx } from "clsx";

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
    <div className="-ml-8 flex h-full w-[calc(100%+2rem)] items-center rounded-r border-b-2 border-amber-400 bg-amber-200 py-1 pl-8 pr-2 text-lg text-slate-950 [font-family:var(--font-allerta-stencil)]">
      <div className="flex w-full flex-col justify-center leading-tight">
        <span>FAINT MEMORY</span>

        <div
          className={clsx(
            "inline-flex items-center gap-1 whitespace-nowrap tabular-nums",
            totalFaintMemory > faintMemoryLimit && "text-red-500",
          )}
        >
          <span className="w-[5ch] text-right">{totalFaintMemory}</span>
          <span className="w-[1ch] text-center">/</span>
          <span className="w-[1ch] text-right">{faintMemoryLimit}</span>
        </div>
      </div>
    </div>
  );
}
