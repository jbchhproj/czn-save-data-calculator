import ResetButton from "./ResetButton";
import TierSelector from "./TierSelector";

interface TierSelectorProps {
  tier: number;
  setTier: (tier: number) => void;
  isDeepTraumaActive: boolean;
  setIsDeepTraumaActive: (isActive: boolean) => void;
}

export default function Header({
  tier,
  setTier,
  isDeepTraumaActive,
  setIsDeepTraumaActive,
}: TierSelectorProps) {
  return (
    <header className="flex justify-between py-2 px-4 shadow-sm">
      <ResetButton
        onReset={() => {
          setTier(1);
          setIsDeepTraumaActive(false);
        }}
      />
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
