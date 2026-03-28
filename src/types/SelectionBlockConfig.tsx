export interface SelectionBlockConfig {
  id: string; // Unique identifier for the block (used as React key)
  label: string; // Short description or name for the block
  tooltip: string; // Tooltip text to explain the block
  min: number; // Minimum allowed value for the block's counter
  max: number; // Maximum allowed value for the block's counter
  rule: (current: number, action: "increment" | "decrement") => number;   // Function that determines how the value changes when incrementing or decrementing
  contribution: (current: number) => number;   // Function that determines how this block's value contributes to the overall calculation
}