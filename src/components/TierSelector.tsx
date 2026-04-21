import TierStepper from "./TierStepper";
import DeepTrauma from "./DeepTrauma";

interface TierSelectorProps {
  tier: number;
  setTier: (tier: number) => void;
  isDeepTraumaActive: boolean;
  setIsDeepTraumaActive: (isActive: boolean) => void;
}

export default function TierSelector({
  tier,
  setTier,
  isDeepTraumaActive,
  setIsDeepTraumaActive,
}: TierSelectorProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        DEEP TRAUMA
        <DeepTrauma
          isDeepTraumaActive={isDeepTraumaActive}
          setIsDeepTraumaActive={setIsDeepTraumaActive}
        />
      </div>
      <div className="flex items-center gap-2">
        TIER
        <TierStepper
          tier={tier}
          setTier={setTier}
          isDeepTraumaActive={isDeepTraumaActive}
        />
      </div>
    </div>
  );
}
