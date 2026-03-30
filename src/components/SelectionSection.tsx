import { selectionBlockConfigs } from "../data/selectionBlockConfigs";
import SelectionBlock from "./SelectionBlock";

interface SelectionSectionProps {
  faintMemory: number;
  setFaintMemory: (value: number) => void;
  cardRemovals: number;
  setCardRemovals: (value: number) => void;
}

export default function SelectionSection({
  faintMemory,
  setFaintMemory,
  cardRemovals,
  setCardRemovals,
}: SelectionSectionProps) {
  return (
    <>
      {selectionBlockConfigs.map((config) => (
        <SelectionBlock   
          key={config.id}
          config={config}
          faintMemory={faintMemory}
          setFaintMemory={setFaintMemory}
          cardRemovals={cardRemovals}
          setCardRemovals={setCardRemovals}
        />
      ))}
    </>
  );
}
