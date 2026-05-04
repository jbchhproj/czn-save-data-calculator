import { SelectionBlockConfig } from "@/lib/calculator/types";
import SelectionBlockStepper from "@/components/controls/SelectionBlockStepper";
import QuestionCircleIcon from "@/components/icons/QuestionCircleIcon";
import ExpandMinusIcon from "@/components/icons/ExpandMinusIcon";
import { trackTelemetryEvent } from "@/lib/telemetry/trackTelemetryEvent";

interface SelectionBlockProps {
  config: SelectionBlockConfig;
  stepperCount: number;
  setStepperCount: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
  isPostProcessingEnabled: boolean;
}

export default function SelectionBlock({
  config,
  stepperCount,
  setStepperCount,
  cardRemovals,
  setCardRemovals,
  isExpanded,
  onToggleExpand,
  isPostProcessingEnabled,
}: SelectionBlockProps) {
  const rulesList = (
    <ul className="list-outside list-disc pl-4">
      {config.description.map((line, idx) => (
        <li key={idx}>{line}</li>
      ))}
    </ul>
  );

  const labelWords = config.label.trim().split(/\s+/);
  const labelWordElements = labelWords.map((word, idx) => (
    <span key={idx} className="text-md leading-tight">
      {word}
    </span>
  ));

  const handleToggleRules = () => {
    void trackTelemetryEvent("selection_rules_toggle", false, {
      source: "selection_block",
      blockId: config.id,
      label: config.label,
      expandedAfter: !isExpanded,
    });

    onToggleExpand(config.id);
  };

  return (
    <div className="mt-3 select-none [-webkit-touch-callout:none]">
      <div className="relative">
        {/* bottom outline (the "3D" effect) */}
        <div className="pointer-events-none absolute bottom-[-6px] left-[-0.5rem] right-0 h-3 rounded-br-lg border-b-2 border-gray-300 shadow-[0_2px_2px_rgba(0,0,0,0.20)]" />

        {/* main block */}
        <div className="-ml-2 flex h-17 w-[calc(100%+0.5rem)] items-center gap-2 overflow-hidden rounded-r bg-gray-400/30 px-1">
          <div className="-ml-4 flex h-full w-30 shrink-0 flex-col justify-center bg-gray-500/30 pl-5 text-slate-950">
            {labelWordElements}
          </div>

          <span className="inline-flex min-w-[7ch] flex-1 justify-center rounded bg-gray-100 text-md text-slate-950 border border-slate-300 tabular-nums">
            {config.faintMemoryContribution(stepperCount)}
          </span>

          <div className="flex shrink-0 self-stretch items-center gap-1 pl-1">
            <div className="flex self-stretch items-center border-l border-gray-400/50 pl-1">
              <button
                type="button"
                aria-label="Show details"
                onClick={handleToggleRules}
                className="rounded-full text-blue-500 hover:bg-blue-100"
              >
                {isExpanded ? <ExpandMinusIcon /> : <QuestionCircleIcon />}
              </button>
            </div>

            <SelectionBlockStepper
              config={config}
              stepperCount={stepperCount}
              setStepperCount={setStepperCount}
              cardRemovals={cardRemovals}
              setCardRemovals={setCardRemovals}
              isPostProcessingEnabled={isPostProcessingEnabled}
            />
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="mr-2 mt-[7px] -ml-2 bg-gray-300/40 px-4 pt-3 pb-4 text-sm text-gray-600 shadow-[inset_0_0_6px_1px_rgb(0_0_0/0.18)]">
          {rulesList}
        </div>
      )}
    </div>
  );
}
