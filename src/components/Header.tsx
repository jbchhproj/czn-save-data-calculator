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
    <header className="sticky top-0 h-29 flex flex-col gap-2 bg-gray-400 p-2">
      <div className="flex gap-2 justify-between">
        <ResetButton onReset={onReset} />
        <span className="text-indigo-950 bg-gray-300">
          <PhoneIcon className="w-10 h-10" />
        </span>
        <TierSelector
          tier={tier}
          setTier={setTier}
          isDeepTraumaActive={isDeepTraumaActive}
          setIsDeepTraumaActive={setIsDeepTraumaActive}
        />
      </div>
      <div>
        <ResultsArea tier={tier} totalFaintMemory={totalFaintMemory} />
      </div>
    </header>
  );
}
