export type TelemetryEventName =
  | "post_processing_toggle"
  | "reset_click"
  | "deep_trauma_toggle"
  | "tier_decrement_click"
  | "tier_select_change"
  | "tier_increment_click"
  | "selection_rules_toggle"
  | "selection_decrement_click"
  | "selection_increment_click"
  | "kofi_link_click";

export const allowedTelemetryEventNames: TelemetryEventName[] = [
  "post_processing_toggle",
  "reset_click",
  "deep_trauma_toggle",
  "tier_decrement_click",
  "tier_select_change",
  "tier_increment_click",
  "selection_rules_toggle",
  "selection_decrement_click",
  "selection_increment_click",
  "kofi_link_click",
];
