import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";

export const selectionBlockConfigs: SelectionBlockConfig[] = [
  {
    /* unique identifier for this selection block used internally by react */
    id: "block1",
    type: "removal",
    /* user-facing title */
    label: "Remove Starting Card",
    /* user-facing explanatory text */
    tooltip: "Cards that combatants begin with upon entering chaos.",
    min: 0,
    max: 5,
    rule: (current, action) => {
      if (action === "increment" && current < 5) return current + 1;
      if (action === "decrement" && current > 0) return current - 1;
      return current;
    },
    contribution: (current) => current * 2,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block2",
    type: "removal",
    /* user-facing title */
    label: "Remove Epiphany Card",
    /* user-facing explanatory text */
    tooltip:
      "Cards that can be acquired during chaos progression by sparking epiphanies or through certain events in unidentified areas.",
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

/*
Business Logic:

Card Removal:
REMOVAL of cards other than starting cards are not tallied into points, but will count towards the total number of cards removed.
REMOVAL of Starting cards count for 20 points, and will also count towards the total number of cards removed.
In instances such as CARD TRANSFORMATION, cards that have been changed into other cards will be treated as a REMOVAL, and will be counted towards the total number of cards removed.
REMOVAL of duplicated cards will not be counted towards points, but will count towards the total number of cards removed.
Removal can be performed up to 5 times.

*/
