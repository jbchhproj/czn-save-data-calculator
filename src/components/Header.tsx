import DeepTrauma from "./DeepTrauma";
import PhoneIcon from "./icons/PhoneIcon";
import ResetButton from "./ResetButton";
import ResultsArea from "./ResultsArea";
import TierSelector from "./TierSelector";

interface TierSelectorProps {
  tier: number;
  totalFaintMemory: number;
  setTier: (tier: number) => void;
  isDeepTraumaActive: boolean;
  setIsDeepTraumaActive: (isActive: boolean) => void;
  onReset: () => void;
}

export default function Header({
  tier,
  totalFaintMemory,
  setTier,
  isDeepTraumaActive,
  setIsDeepTraumaActive,
  onReset,
}: TierSelectorProps) {
  return (
    <header className="sticky top-0 z-50 flex items-stretch gap-2 bg-slate-600 p-2 shadow-md/30">
      <div className="min-w-0 flex-1">
        <ResultsArea tier={tier} totalFaintMemory={totalFaintMemory} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex h-9 items-center justify-end gap-3 rounded bg-slate-200 px-2 border-b-2 border-r-2 border-slate-400">
          <PhoneIcon />
          <ResetButton onReset={onReset} />
          <DeepTrauma
            isDeepTraumaActive={isDeepTraumaActive}
            setIsDeepTraumaActive={setIsDeepTraumaActive}
          />
        </div>

        <div className="rounded bg-slate-200 border-b-2 border-r-2 border-slate-400">
          <TierSelector
            tier={tier}
            setTier={setTier}
            isDeepTraumaActive={isDeepTraumaActive}
          />
        </div>
      </div>
    </header>
  );
}
