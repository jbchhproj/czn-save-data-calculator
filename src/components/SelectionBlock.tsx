import { SelectionBlockConfig } from "@/types/SelectionBlockConfig";

export default function SelectionBlock({ config }: { config: SelectionBlockConfig }) {
  return <div>{config.label}</div>;
}