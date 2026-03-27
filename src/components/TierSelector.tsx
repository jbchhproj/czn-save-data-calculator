"use client";
import TierStepper from "./TierStepper";

interface TierSelectorProps {
  tier : number;
  setTier : (tier: number) => void;
}

export default function TierSelector({ tier, setTier }: TierSelectorProps) {
    return (
        <div className="flex flex-col items-start gap-y-2 p-2 rounded">
            <label htmlFor="extra-difficulty" className="flex gap-2 text-white">
                DEEP TRAUMA
                <input id="extra-difficulty" type="checkbox" className="accent-blue-600" />
            </label>
            <div className="flex items-center gap-2 text-white">
                TIER
                <TierStepper tier={tier} setTier={setTier}/>
            </div>
        </div>
    );
}