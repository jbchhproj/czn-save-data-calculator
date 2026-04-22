import PhoneIcon from "./icons/PhoneIcon";
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
    <header className="sticky top-0 h-29 flex flex-col gap-2 bg-gray-400 p-2">
      <div className="flex items-center gap-2 justify-between">
        <ResetButton onReset={onReset} />
        <span className="text-indigo-950">
          <PhoneIcon className="w-9 h-9" />
        </span>
        <DeepTrauma
          isDeepTraumaActive={isDeepTraumaActive}
          setIsDeepTraumaActive={setIsDeepTraumaActive}
        />
        <TierSelector
          tier={tier}
          setTier={setTier}
          isDeepTraumaActive={isDeepTraumaActive}
        />
      </div>
      <div>
        <ResultsArea tier={tier} totalFaintMemory={totalFaintMemory} />
      </div>
    </header>
  );
}
