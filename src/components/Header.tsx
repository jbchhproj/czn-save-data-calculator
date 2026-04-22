import DeepTrauma from "./DeepTrauma";
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
    <header className="sticky top-0 flex items-stretch gap-2 overflow-hidden bg-gray-400 p-2">
      <div className="flex-1 min-w-0">
        <ResultsArea tier={tier} totalFaintMemory={totalFaintMemory} />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-end gap-2">
          <ResetButton onReset={onReset} />
          <DeepTrauma
            isDeepTraumaActive={isDeepTraumaActive}
            setIsDeepTraumaActive={setIsDeepTraumaActive}
          />
        </div>

        <TierSelector
          tier={tier}
          setTier={setTier}
          isDeepTraumaActive={isDeepTraumaActive}
        />
      </div>
    </header>
  );
}
