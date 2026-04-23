import { Switch } from "@headlessui/react";
import MindIcon from "./icons/MindIcon";

interface DeepTraumaProps {
  isDeepTraumaActive: boolean;
  setIsDeepTraumaActive: (isActive: boolean) => void;
}

export default function DeepTrauma({
  isDeepTraumaActive,
  setIsDeepTraumaActive,
}: DeepTraumaProps) {
  return (
    <Switch
      checked={isDeepTraumaActive}
      onChange={setIsDeepTraumaActive}
      className="group inline-flex items-center rounded-full bg-indigo-500 border border-indigo-500/40 shadow-[0_3px_0_rgb(0_0_0/0.1)]"
    >
      <span className="pl-2 pr-1 text-indigo-100">
        <MindIcon />
      </span>
      <span className="relative w-10 h-6 rounded-full bg-gray-300 transition group-data-checked:bg-indigo-950">
        <span className="absolute top-1 left-1 size-4 rounded-full bg-indigo-950 transition-transform group-data-checked:translate-x-4 group-data-checked:bg-gray-300" />
      </span>
    </Switch>
  );
}
