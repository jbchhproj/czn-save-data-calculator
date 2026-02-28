"use client";
import TierStepper from "./TierStepper";

export default function TierSelector() {
    return (
        <div className="flex flex-col items-start gap-y-2 p-2 rounded">
            <label htmlFor="extra-difficulty" className="flex gap-2 text-white">
                DEEP TRAUMA
                <input id="extra-difficulty" type="checkbox" className="accent-blue-600" />
            </label>
            <div className="flex items-center gap-2 text-white">
                TIER
                <TierStepper />
            </div>
        </div>
    );
}