export type SelectionBlockType =
  | "acquisition"
  | "divine epiphany"
  | "duplication"
  | "removal"
  | "seasonal";

export type SelectionBlockAction = "increment" | "decrement";

export interface SelectionBlockConfig {
  id: string;
  type: SelectionBlockType;
  label: string;
  description: string[];
  min: number;
  max: number;
  stepRule: (
    current: number,
    action: SelectionBlockAction,
    config: SelectionBlockConfig,
  ) => number;
  faintMemoryContribution: (current: number) => number;
}
