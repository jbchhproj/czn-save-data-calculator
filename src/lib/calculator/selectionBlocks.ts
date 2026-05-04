import type { SelectionBlockConfig } from "./types";

export const cardRemovalLimit = 5;

const defaultStepRule: SelectionBlockConfig["stepRule"] = (
  current,
  action,
  config,
) => {
  if (action === "increment") {
    return Math.min(current + 1, config.max);
  }

  return Math.max(current - 1, config.min);
};

const multiplyBy = (points: number) => (current: number) => current * points;

const createSelectionBlock = (
  config: Omit<SelectionBlockConfig, "stepRule">,
): SelectionBlockConfig => ({
  ...config,
  stepRule: defaultStepRule,
});

const removalNotes = [
  "Removing non-starting cards: no points.",
  "Removing starting cards: 20 points.",
  "Card transformations count as removals.",
  "Removing duplicates: no points.",
  "All count toward the 5-removal limit.",
];

export const selectionBlocks: SelectionBlockConfig[] = [
  createSelectionBlock({
    id: "block1",
    type: "acquisition",
    label: "Neutral Card",
    description: [
      "Acquired in shops or chaos events.",
      "Always worth 20 points, even with standard epiphany.",
    ],
    min: 0,
    max: 999,
    faintMemoryContribution: multiplyBy(20),
  }),
  createSelectionBlock({
    id: "block2",
    type: "acquisition",
    label: "Common Monster Card",
    description: [
      "Acquired by defeating enemies.",
      "Always 20 points, even with standard epiphany.",
    ],
    min: 0,
    max: 999,
    faintMemoryContribution: multiplyBy(20),
  }),
  createSelectionBlock({
    id: "block3",
    type: "acquisition",
    label: "Rare Monster Card",
    description: [
      "Acquired by defeating enemies.",
      "Always 50 points, even with standard epiphany.",
    ],
    min: 0,
    max: 999,
    faintMemoryContribution: multiplyBy(50),
  }),
  createSelectionBlock({
    id: "block4",
    type: "acquisition",
    label: "Legendary Monster Card",
    description: [
      "Acquired by defeating enemies.",
      "Always 80 points, even with standard epiphany.",
    ],
    min: 0,
    max: 999,
    faintMemoryContribution: multiplyBy(80),
  }),
  createSelectionBlock({
    id: "block5",
    type: "divine epiphany",
    label: "Divine Epiphany",
    description: [
      "Applied to starting or epiphany cards.",
      "Each is worth 20 points.",
    ],
    min: 0,
    max: 999,
    faintMemoryContribution: multiplyBy(20),
  }),
  createSelectionBlock({
    id: "block6",
    type: "duplication",
    label: "Duplicate Card",
    description: [
      "First 2 duplicates: no points.",
      "Each extra duplicate: 40 points.",
      "Max 4 copies of a card per save data.",
      "Transformed or removed duplicates are not counted.",
    ],
    min: 0,
    max: 4,
    faintMemoryContribution: (current) => Math.max(current - 2, 0) * 40,
  }),
  createSelectionBlock({
    id: "block7",
    type: "removal",
    label: "Remove Starting Card",
    description: [
      "The 4 cards at the top of your character's card tab.",
      ...removalNotes,
    ],
    min: 0,
    max: 4,
    faintMemoryContribution: multiplyBy(20),
  }),
  createSelectionBlock({
    id: "block8",
    type: "removal",
    label: "Remove Epiphany Card",
    description: removalNotes,
    min: 0,
    max: 5,
    faintMemoryContribution: () => 0,
  }),
  createSelectionBlock({
    id: "block9",
    type: "seasonal",
    label: "Forbidden Card",
    description: [
      "Obtained during Season 1: Forbidden Catalyst.",
      "Adding forbidden cards: 20 points.",
    ],
    min: 0,
    max: 999,
    faintMemoryContribution: multiplyBy(20),
  }),
  createSelectionBlock({
    id: "block10",
    type: "seasonal",
    label: "Equipment Refinement",
    description: [
      "Obtained during Season 2: Seed of Karmic Fire.",
      "Refining equipment: 10 points.",
    ],
    min: 0,
    max: 999,
    faintMemoryContribution: multiplyBy(10),
  }),
  createSelectionBlock({
    id: "block11",
    type: "seasonal",
    label: "Persona Card",
    description: [
      "Obtained during Season 3: A Song Rippling Through the Stars.",
      "Adding persona cards: 20 points.",
    ],
    min: 0,
    max: 999,
    faintMemoryContribution: multiplyBy(20),
  }),
];
