export const CARD_REMOVAL_LIMIT = 5;
import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";

export const SelectionBlockConfigs: SelectionBlockConfig[] = [
  {
    /* unique identifier for this selection block used internally by react */
    id: "block1",
    type: "acquisition",
    /* user-facing title */
    label: "Acquire Neutral Card",
    /* user-facing explanatory text */
    description: [
      "Cards that can be acquired during chaos progression though shops or through certain events in unidentified areas.",
    ],
    min: 0,
    max: 999,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) => current * 20,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block2",
    type: "acquisition",
    /* user-facing title */
    label: "Acquire Common Monster Card",
    /* user-facing explanatory text */
    description: [
      "Cards that can be acquired during chaos progression though defeating certain enemies.",
    ],
    min: 0,
    max: 999,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) => current * 20,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block3",
    type: "acquisition",
    /* user-facing title */
    label: "Acquire Rare Monster Card",
    /* user-facing explanatory text */
    description: [
      "Cards that can be acquired during chaos progression though defeating certain enemies.",
    ],
    min: 0,
    max: 999,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) => current * 50,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block4",
    type: "acquisition",
    /* user-facing title */
    label: "Acquire Legendary Monster Card",
    /* user-facing explanatory text */
    description: [
      "Cards that can be acquired during chaos progression though defeating certain enemies.",
    ],
    min: 0,
    max: 999,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) => current * 80,
  },

  {
    /* unique identifier for this selection block used internally by react */
    id: "block5",
    type: "divine epiphany",
    /* user-facing title */
    label: "Divine Epiphany",
    /* user-facing explanatory text */
    description: [
      "This includes divine epiphanies applied to both starting and epiphany cards.",
    ],
    min: 0,
    max: 999,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) => current * 20,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block6",
    type: "duplication",
    /* user-facing title */
    label: "Duplicate Card",
    /* user-facing explanatory text */
    description: [
      "Up to 2 duplicate actions will not contribute to faint memory points",
    ],
    min: 0,
    max: 4,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) =>
      current < 3 ? 0 : 60 + (current - 3) * 40,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block7",
    type: "removal",
    /* user-facing title */
    label: "Remove Starting Card",
    /* user-facing explanatory text */
    description: [
      "Starting cards when entering chaos.",
      "Removing non-starting cards: no points.",
      "Removing starting cards: 20 points.",
      "Card transformations count as removals.",
      "Removing duplicates: no points.",
      "All count toward the 5-removal limit.",
    ],
    min: 0,
    max: 5,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) => current * 20,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block8",
    type: "removal",
    /* user-facing title */
    label: "Remove Epiphany Card",
    /* user-facing explanatory text */
    description: [
      "Cards that can be acquired during chaos progression by sparking epiphanies or through certain events in unidentified areas.",
    ],
    min: 0,
    max: 5,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) => current * 0,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block9",
    type: "seasonal",
    /* user-facing title */
    label: "Acquire Forbidden Card",
    /* user-facing explanatory text */
    description: ["Cards that can be acquired during S1."],
    min: 0,
    max: 999,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) => current * 20,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block10",
    type: "seasonal",
    /* user-facing title */
    label: "Equipment Refinement",
    /* user-facing explanatory text */
    description: ["Equipment enhancements obtained during S2."],
    min: 0,
    max: 999,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) => current * 10,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block11",
    type: "seasonal",
    /* user-facing title */
    label: "Acquire Persona Card",
    /* user-facing explanatory text */
    description: ["Cards that can be acquired during S3."],
    min: 0,
    max: 999,
    stepRule: (current, action, config) => {
      if (action === "increment" && current < config.max) return current + 1;
      if (action === "decrement" && current > config.min) return current - 1;
      return current;
    },
    faintMemoryContribution: (current) => current * 20,
  },
];

/*
Business Logic:

Card Removal:
REMOVAL of cards other than starting cards are not tallied into points, but will count towards the total number of cards removed.
REMOVAL of Starting cards count for 20 points, and will also count towards the total number of cards removed.
In instances such as CARD TRANSFORMATION, cards that have been changed into other cards will be treated as a REMOVAL, and will be counted towards the total number of cards removed.
REMOVAL of duplicated cards will not be counted towards points, but will count towards the total number of cards removed.
REMOVAL can be performed up to 5 times.

*/
