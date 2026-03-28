import { selectionBlockConfigs } from "@/data/selectionBlockConfigs";
import SelectionBlock from "./SelectionBlock";

interface SelectionSectionProps {
  faintMemory: number;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function SelectionSection({
  faintMemory,
  cardRemovals,
  setCardRemovals,
}: SelectionSectionProps) {
  return (
    <div>
      {selectionBlockConfigs.map((config) => (
        <SelectionBlock key={config.id} config={config} />
      ))}
    </div>
  );
}
