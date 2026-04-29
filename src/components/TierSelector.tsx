import TierStepper from "./TierStepper";

interface TierSelectorProps {
  tier: number;
  setTier: (tier: number) => void;
  isDeepTraumaActive: boolean;
  isPostProcessingEnabled: boolean;
}

export default function TierSelector({
  tier,
  setTier,
  isDeepTraumaActive,
  isPostProcessingEnabled,
}: TierSelectorProps) {
  return (
    <div>
      <TierStepper
        tier={tier}
        setTier={setTier}
        isDeepTraumaActive={isDeepTraumaActive}
        isPostProcessingEnabled={isPostProcessingEnabled}
      />
    </div>
  );
}
