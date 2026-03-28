import { selectionBlockConfigs } from "@/data/selectionBlockConfigs";
import SelectionBlock from "./SelectionBlock";

interface SelectionSectionProps {
  faintMemory: number;
}

export default function SelectionSection({
  faintMemory,
}: SelectionSectionProps) {
  return (
    <div>
      {selectionBlockConfigs.map((config) => (
        <SelectionBlock key={config.id} config={config} />
      ))}
    </div>
  );
}
