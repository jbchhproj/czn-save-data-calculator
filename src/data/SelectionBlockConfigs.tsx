export const CARD_REMOVAL_LIMIT = 5;
import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";

export const SelectionBlockConfigs: SelectionBlockConfig[] = [
  {
    /* unique identifier for this selection block used internally by react */
    id: "block1",
    type: "acquisition",
    /* user-facing title */
    label: "Neutral Card",
    /* user-facing explanatory text */
    description: [
      "Acquired in shops or chaos events.",
      "Always worth 20 points, even with epiphany.",
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
    label: "Common Monster Card",
    /* user-facing explanatory text */
    description: [
      "Acquired by defeating enemies.",
      "Always 20 points, even with epiphany.",
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
    label: "Rare Monster Card",
    /* user-facing explanatory text */
    description: [
      "Acquired by defeating enemies.",
      "Always 50 points, even with epiphany.",
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
    label: "Legendary Monster Card",
    /* user-facing explanatory text */
    description: [
      "Acquired by defeating enemies.",
      "Always 80 points, even with epiphany.",
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
      "Applied to starting or epiphany cards.",
      "Each is worth 20 points.",
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
      "First 2 duplicates: no points.",
      "Each extra duplicate: 40 points.",
      "Max 4 copies of a card per save data.",
      "Transformed/removed duplicates are not counted.",
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
      "The 4 cards at the top of your character’s card tab.",
      "Removing non-starting cards: no points.",
      "Removing starting cards: 20 points.",
      "Card transformations count as removals.",
      "Removing duplicates: no points.",
      "All count toward the 5-removal limit.",
    ],
    min: 0,
    max: 4,
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
    faintMemoryContribution: (current) => current * 0,
  },
  {
    /* unique identifier for this selection block used internally by react */
    id: "block9",
    type: "seasonal",
    /* user-facing title */
    label: "Forbidden Card",
    /* user-facing explanatory text */
    description: ["Obtained during Season 1: Forbidden Catalyst."],
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
    description: ["Obtained during Season 2: Seed of Karmic Fire."],
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
    label: "Persona Card",
    /* user-facing explanatory text */
    description: [
      "Obtained during Season 3: A Song Rippling Through the Stars.",
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
];
