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

  return (
    <div>
      <div className="items-center gap-2">
        <span>
          {config.label}: {config.faintMemoryContribution(stepperCount)}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Show details"
            onClick={() => onToggleExpand(config.id)}
            className="w-6 h-6 flex items-center justify-center text-blue-500 text-lg rounded-full hover:bg-blue-100 focus:outline-none"
          >
            {isExpanded ? (
              <ExpandMinusIcon />
            ) : (
              <QuestionCircleIcon />
            )}
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
        <div className="text-sm text-gray-600 mb-1 mt-2">{descriptionList}</div>
      )}
    </div>
  );
}
