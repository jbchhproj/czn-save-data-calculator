import clsx from "clsx";
import DeepTrauma from "@/components/controls/DeepTrauma";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ResetButton from "@/components/controls/ResetButton";
import ResultsArea from "@/components/results/ResultsArea";
import TierSelector from "@/components/controls/TierSelector";
import { trackTelemetryEvent } from "@/lib/telemetry/trackTelemetryEvent";

interface TierSelectorProps {
  tier: number;
  totalFaintMemory: number;
  setTier: (tier: number) => void;
  isDeepTraumaActive: boolean;
  onToggleDeepTrauma: () => void;
  onReset: () => void;
  isPostProcessingEnabled: boolean;
  setIsPostProcessingEnabled: (isEnabled: boolean) => void;
}

export default function Header({
  tier,
  totalFaintMemory,
  setTier,
  isDeepTraumaActive,
  onToggleDeepTrauma,
  onReset,
  isPostProcessingEnabled,
  setIsPostProcessingEnabled,
}: TierSelectorProps) {
  const handleToggle = () => {
    void trackTelemetryEvent("post_processing_toggle", false, {
      source: "header",
      effectsEnabled: !isPostProcessingEnabled,
    });

    setIsPostProcessingEnabled(!isPostProcessingEnabled);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex min-h-[114px] items-stretch gap-2 bg-slate-600 p-2 shadow-md/30 sm:sticky sm:inset-x-auto sm:h-[122px] sm:w-full sm:shrink-0">
      <div className="min-w-0 flex flex-1">
        <ResultsArea
          tier={tier}
          totalFaintMemory={totalFaintMemory}
          isDeepTraumaActive={isDeepTraumaActive}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-1 items-center justify-end gap-5 p-2 rounded bg-slate-200 px-3 border-b-2 border-r-2 border-slate-400">
          <button
            aria-label="Toggle post processing effects"
            aria-pressed={isPostProcessingEnabled}
            className={clsx(
              "relative rounded py-[3px] px-[7px] border shadow-[0_3px_0_rgb(0_0_0/0.2)] transition-transform duration-50 ease-out active:duration-0 active:scale-[0.99] active:translate-y-[2px] active:shadow-[0_1px_0_rgb(0_0_0/0.2)]",
              isPostProcessingEnabled
                ? "bg-slate-800 border-slate-800/40 text-indigo-100 active:bg-slate-700"
                : "bg-slate-300 border-slate-500/40 text-slate-700 active:bg-slate-400",
            )}
            onClick={handleToggle}
            type="button"
          >
            {isPostProcessingEnabled && (
              <span
                aria-hidden="true"
                className="floating-particle phone-particle-indicator"
              />
            )}
            <PhoneIcon />
          </button>
          <ResetButton onReset={onReset} />
          <DeepTrauma
            isDeepTraumaActive={isDeepTraumaActive}
            onToggleDeepTrauma={onToggleDeepTrauma}
          />
        </div>

        <div
          className={clsx(
            "flex flex-1 items-center p-2 rounded border-b-2 border-r-2 border-slate-400",
            isPostProcessingEnabled && isDeepTraumaActive
              ? "bg-slate-800"
              : "bg-slate-200",
          )}
        >
          <TierSelector
            tier={tier}
            setTier={setTier}
            isDeepTraumaActive={isDeepTraumaActive}
            isPostProcessingEnabled={isPostProcessingEnabled}
          />
        </div>
      </div>
    </header>
  );
}
