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
    <div className="flex flex-col items-end gap-2">
      <DeepTrauma
        isDeepTraumaActive={isDeepTraumaActive}
        setIsDeepTraumaActive={setIsDeepTraumaActive}
      />

      <TierStepper
        tier={tier}
        setTier={setTier}
        isDeepTraumaActive={isDeepTraumaActive}
      />
    </div>
  );
}
