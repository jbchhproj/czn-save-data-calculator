import ResetButton from "./ResetButton";
import TierSelector from "./TierSelector";

interface TierSelectorProps {
  tier: number;
  setTier: (tier: number) => void;
  isDeepTraumaActive: boolean;
  setIsDeepTraumaActive: (isActive: boolean) => void;
  onReset: () => void;
}

export default function Header({
  tier,
  setTier,
  isDeepTraumaActive,
  setIsDeepTraumaActive,
  onReset,
}: TierSelectorProps) {
  return (
    <header className="flex justify-between items-center w-full py-2 px-2 shadow-sm overflow-x-hidden">
      <ResetButton onReset={onReset} />
      <div className="mr-2">LOGO</div>
      <TierSelector
        tier={tier}
        setTier={setTier}
        isDeepTraumaActive={isDeepTraumaActive}
        setIsDeepTraumaActive={setIsDeepTraumaActive}
      />
    </header>
  );
}
