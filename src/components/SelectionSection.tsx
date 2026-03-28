import { selectionBlockConfigs } from "@/data/selectionBlockConfigs";

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
