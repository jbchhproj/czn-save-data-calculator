"use client";
import ResetButton from "./ResetButton";
import TierSelector from "./TierSelector"
import { useState } from "react";

export default function Header() {
  const [tier, setTier] = useState(1);

  return (
    <header className="flex justify-between py-2 px-4 shadow-sm">
      <ResetButton onReset={() => setTier(1)}/>
      <div className="mr-2">LOGO</div>
      <TierSelector tier={tier} setTier={setTier} />
    </header>
  );
}