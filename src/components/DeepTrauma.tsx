import clsx from "clsx";
import { useRef } from "react";
import MindIcon from "./icons/MindIcon";

interface DeepTraumaProps {
  isDeepTraumaActive: boolean;
  onToggleDeepTrauma: () => void;
}

export default function DeepTrauma({
  isDeepTraumaActive,
  onToggleDeepTrauma,
}: DeepTraumaProps) {
  const lastToggleAt = useRef(0);

  const handleClick = () => {
    const now = performance.now();

    if (now - lastToggleAt.current < 250) {
      return;
    }

    lastToggleAt.current = now;
    onToggleDeepTrauma();
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDeepTraumaActive}
      onClick={handleClick}
      className="group inline-flex items-center rounded-full bg-indigo-500 border border-indigo-500/40 shadow-[0_3px_0_rgb(0_0_0/0.2)]"
    >
      <span className="pl-2 pr-1 text-indigo-100">
        <MindIcon />
      </span>
      <span
        className={clsx(
          "relative w-10 h-6 rounded-full transition",
          isDeepTraumaActive ? "bg-indigo-950" : "bg-gray-300",
        )}
      >
        <span
          className={clsx(
            "absolute top-1 left-1 size-4 rounded-full transition-transform",
            isDeepTraumaActive ? "translate-x-4 bg-gray-300" : "bg-indigo-950",
          )}
        />
      </span>
    </button>
  );
}
