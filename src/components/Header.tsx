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
    <header className="sticky top-0 flex items-stretch gap-2 overflow-hidden bg-gray-400 p-2">
      <div className="flex-1 min-w-0">
        <ResultsArea tier={tier} totalFaintMemory={totalFaintMemory} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-9 bg-gray-200 rounded px-2 flex items-center justify-end gap-3">
          <PhoneIcon />
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
