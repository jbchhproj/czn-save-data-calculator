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

  const labelList = config.label.trim().split(/\s+/).slice(0, 3);

  const labelElements = labelList.map((line, idx) => (
    <span className="block text-indigo-950 text-sm" key={idx}>
      {line}
    </span>
  ));

  return (
    <div>
      <div className="h-15 flex items-center gap-3 mt-3 p-1 bg-gray-300 rounded">
        <button
          type="button"
          aria-label="Show details"
          onClick={() => onToggleExpand(config.id)}
          className="w-6 h-6 text-blue-500 rounded-full hover:bg-blue-100"
        >
          {isExpanded ? <ExpandMinusIcon /> : <QuestionCircleIcon />}
        </button>

        <div className="h-15 bg-gray-400 w-20">{labelElements}</div>

        <span className="w-20 bg-gray-200 text-indigo-950 text-sm rounded">
          {config.faintMemoryContribution(stepperCount)}
        </span>

        <div>
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
