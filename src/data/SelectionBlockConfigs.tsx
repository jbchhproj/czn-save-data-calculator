import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";

export const selectionBlockConfigs: SelectionBlockConfig[] = [
  {
    id: "block1",
    label: "Block 1",
    tooltip: "This block can go up to 5",
    min: 0,
    max: 5,
    rule: (current, action) => {
      if (action === "increment" && current < 5) return current + 1;
      if (action === "decrement" && current > 0) return current - 1;
      return current;
    },
    contribution: (current) => current * 2,
  },
];
