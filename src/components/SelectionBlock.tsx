import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";
import SelectionBlockStepper from "./SelectionBlockStepper";
import QuestionCircleIcon from "./icons/QuestionCircleIcon";
import ExpandMinusIcon from "./icons/ExpandMinusIcon";

interface SelectionBlockProps {
  config: SelectionBlockConfig;
  stepperCount: number;
  setStepperCount: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
}

export default function SelectionBlock({
  config,
  stepperCount,
  setStepperCount,
  cardRemovals,
  setCardRemovals,
  isExpanded,
  onToggleExpand,
}: SelectionBlockProps) {
  const descriptionList = (
    <ul className="list-disc pl-8">
      {config.description.map((line, idx) => (
        <li key={idx}>{line}</li>
      ))}
    </ul>
  );

  const [leadingLabel, ...trailingLabelParts] = config.label
    .trim()
    .split(/\s+/);
  const trailingLabel = trailingLabelParts.join(" ");

  return (
    <div>
      <div className="-ml-2 mt-3 flex h-15 w-[calc(100%+0.5rem)] items-center gap-3 overflow-hidden rounded-r bg-gray-200 px-1">
        <div className="-ml-4 flex h-full w-28 shrink-0 flex-col justify-center bg-gray-300 py-1 pl-5 pr-3 text-slate-950">
          <span className="leading-tight text-sm">{leadingLabel}</span>
          {trailingLabel && <span className="text-sm">{trailingLabel}</span>}
        </div>

        <span className="w-15 bg-gray-100 text-slate-950 text-sm rounded">
          {config.faintMemoryContribution(stepperCount)}
        </span>

        <div className="ml-auto flex self-stretch items-center gap-3 border-l border-gray-400 pl-3">
          <button
            type="button"
            aria-label="Show details"
            onClick={() => onToggleExpand(config.id)}
            className="w-4 h-4 text-blue-500 rounded-full hover:bg-blue-100"
          >
            {isExpanded ? <ExpandMinusIcon /> : <QuestionCircleIcon />}
          </button>
          <SelectionBlockStepper
            config={config}
            stepperCount={stepperCount}
            setStepperCount={setStepperCount}
            cardRemovals={cardRemovals}
            setCardRemovals={setCardRemovals}
          />
        </div>
      </div>

      {isExpanded && (
        <div className="text-sm text-gray-600">{descriptionList}</div>
      )}
    </div>
  );
}