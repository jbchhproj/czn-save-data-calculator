import { selectionBlockConfigs } from "@/data/selectionBlockConfigs";
import SelectionBlock from "./SelectionBlock";

interface SelectionSectionProps {
  currentFaintMemory: number;
}

export default function SelectionSection({
  currentFaintMemory,
}: SelectionSectionProps) {
  return (
    <div>
      {selectionBlockConfigs.map((config) => (
        <SelectionBlock key={config.id} config={config} />
      ))}
    </div>
  );
}
