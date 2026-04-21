import PhoneIcon from "./icons/PhoneIcon";
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
    <header className="flex items-center">
      <ResetButton onReset={onReset} />
      <span className="text-indigo-950">
        <PhoneIcon />
      </span>
      <TierSelector
        tier={tier}
        setTier={setTier}
        isDeepTraumaActive={isDeepTraumaActive}
        setIsDeepTraumaActive={setIsDeepTraumaActive}
      />
    </header>
  );
}
