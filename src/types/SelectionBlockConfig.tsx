type SelectionBlockType =
  | "acquisition"
  | "divine epiphany"
  | "duplication"
  | "removal"
  | "transformation"
  | "seasonal";

export interface SelectionBlockConfig {
  id: string; // Unique identifier for the block (used as React key)
  type: SelectionBlockType;
  label: string; // Short description or name for the block
  description: string[]; // Inline explanation text to explain the block
  min: number; // Minimum allowed value for the block's counter
  max: number; // Maximum allowed value for the block's counter
  stepRule: (
    current: number,
    action: "increment" | "decrement",
    config: SelectionBlockConfig,
  ) => number; // Function that determines how the value changes when incrementing or decrementing
  faintMemoryContribution: (current: number) => number; // Function that determines how this block's value contributes to the overall calculation
  /* Block specific properties can be added here */
  /* Season specific properties can be added here */
}
