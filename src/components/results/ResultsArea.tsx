import { clsx } from "clsx";
import FaceFrownIcon from "@/components/icons/FaceFrownIcon";
import FaceSmileIcon from "@/components/icons/FaceSmileIcon";

interface ResultsSectionProps {
  tier: number;
  totalFaintMemory: number;
  isDeepTraumaActive: boolean;
}

export default function ResultsSection({
  tier,
  totalFaintMemory,
  isDeepTraumaActive,
}: ResultsSectionProps) {
  const faintMemoryLimit = 20 + tier * 10;

  return (
    <div className="-ml-8 flex flex-col w-[calc(100%+2rem)] rounded-r border-b-2 border-amber-400 bg-amber-200 py-1 pl-8 pr-2 text-xl text-slate-950 [font-family:var(--font-allerta-stencil)]">
      <div className="inline-flex items-center gap-1">
        {isDeepTraumaActive ? (
          <FaceFrownIcon className="size-5" />
        ) : (
          <FaceSmileIcon className="size-5" />
        )}
        <span>FAINT</span>
      </div>
      <div>
        <span>MEMORY</span>
      </div>
      <div
        className={clsx(
          "inline-flex max-w-full gap-1 whitespace-nowrap pr-1 tabular-nums",
          totalFaintMemory > faintMemoryLimit && "text-red-500",
        )}
      >
        <span className="w-[5ch] text-right">{totalFaintMemory}</span>
        <span className="w-[1ch] text-center">/</span>
        <span className="w-[3ch] text-left">{faintMemoryLimit}</span>
      </div>
    </div>
  );
}
