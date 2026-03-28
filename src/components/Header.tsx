"use client";
import ResetButton from "./ResetButton";
import TierSelector from "./TierSelector"
import { useState, useEffect } from "react";

export default function Header() {

  const [tier, setTier] = useState(1);
  const [isDeepTraumaActive, setIsDeepTraumaActive] = useState(false);

  useEffect(() => {
    if (isDeepTraumaActive) {
      if (tier < 2) {
        setTier(2);
      } else if (tier < 16) {
        setTier(tier + 1);
      }
    } else {
      setTier(prev => Math.max(1, prev - 1));
    }
  }, [isDeepTraumaActive]);

  return (
    <header className="flex justify-between py-2 px-4 shadow-sm">
      <ResetButton onReset={() => {
        setTier(1);
        setIsDeepTraumaActive(false);
      }} />
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