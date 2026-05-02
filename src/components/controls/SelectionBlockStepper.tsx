import { SelectionBlockConfig } from "@/lib/calculator/types";
import { cardRemovalLimit } from "@/lib/calculator/selectionBlocks";
import PlusIcon from "@/components/icons/PlusIcon";
import MinusIcon from "@/components/icons/MinusIcon";
import clsx from "clsx";
import { trackTelemetryEvent } from "@/lib/telemetry/trackTelemetryEvent";

interface SelectionBlockStepperProps {
  config: SelectionBlockConfig;
  stepperCount: number;
  setStepperCount: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
  isPostProcessingEnabled: boolean;
}

export default function SelectionBlockStepper({
  config,
  stepperCount,
  setStepperCount,
  cardRemovals,
  setCardRemovals,
  isPostProcessingEnabled,
}: SelectionBlockStepperProps) {
  const isRemoval = config.type === "removal";
  const canIncrement =
    stepperCount < config.max &&
    (!isRemoval || cardRemovals < cardRemovalLimit);
  const canDecrement = stepperCount > config.min;

  const handleIncrement = () => {
    const isDisabled = !canIncrement;
    const nextCount = isDisabled
      ? stepperCount
      : config.stepRule(stepperCount, "increment", config);

    void trackTelemetryEvent("selection_increment_click", isDisabled, {
      source: "selection_block",
      blockId: config.id,
      label: config.label,
      countBefore: stepperCount,
      countAfter: nextCount,
    });

    if (isDisabled || nextCount === stepperCount) {
      return;
    }

    setStepperCount(nextCount);
    if (isRemoval) {
      setCardRemovals(cardRemovals + (nextCount - stepperCount));
    }
  };

  const handleDecrement = () => {
    const isDisabled = !canDecrement;
    const nextCount = isDisabled
      ? stepperCount
      : config.stepRule(stepperCount, "decrement", config);

    void trackTelemetryEvent("selection_decrement_click", isDisabled, {
      source: "selection_block",
      blockId: config.id,
      label: config.label,
      countBefore: stepperCount,
      countAfter: nextCount,
    });

    if (isDisabled || nextCount === stepperCount) {
      return;
    }

    setStepperCount(nextCount);
    if (isRemoval) {
      setCardRemovals(cardRemovals - (stepperCount - nextCount));
    }
  };

  const buttonClasses = clsx(
    "bg-slate-300 rounded py-[6px] px-[10px] text-slate-950 border border-slate-500/40 shadow-[0_3px_0_rgb(0_0_0/0.2)] transition-transform duration-50 ease-out active:duration-0 active:scale-[0.99] active:translate-y-[2px] active:shadow-[0_1px_0_rgb(0_0_0/0.2)]",
    "aria-disabled:cursor-not-allowed aria-disabled:bg-[#b6c2d1] aria-disabled:text-slate-500 aria-disabled:active:translate-y-0 aria-disabled:active:scale-100 aria-disabled:active:bg-[#b6c2d1] aria-disabled:active:shadow-[0_3px_0_rgb(0_0_0/0.2)]",
    isPostProcessingEnabled && "active:bg-slate-500/50",
  );

  return (
    <div className="flex items-center gap-3 pr-2">
      <button
        aria-label="Decrement"
        aria-disabled={!canDecrement}
        type="button"
        className={buttonClasses}
        onClick={handleDecrement}
      >
        <MinusIcon />
      </button>

      <span className="inline-flex w-[3ch] justify-center text-md tabular-nums text-slate-950">
        {stepperCount}
      </span>

      <button
        aria-label="Increment"
        aria-disabled={!canIncrement}
        type="button"
        className={buttonClasses}
        onClick={handleIncrement}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
