import TierStepper from "./TierStepper";

interface TierSelectorProps {
  tier: number;
  setTier: (tier: number) => void;
  isDeepTraumaActive: boolean;
}

export default function TierSelector({
  tier,
  setTier,
  isDeepTraumaActive,
}: TierSelectorProps) {
  return (
    <div>
      <TierStepper
        tier={tier}
        setTier={setTier}
        isDeepTraumaActive={isDeepTraumaActive}
      />
    </div>
  );
}
