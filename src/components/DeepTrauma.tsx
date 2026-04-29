import clsx from "clsx";
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
    <button
      type="button"
      role="switch"
      aria-checked={isDeepTraumaActive}
      onClick={() => setIsDeepTraumaActive(!isDeepTraumaActive)}
      className="group inline-flex items-center rounded-full bg-indigo-500 border border-indigo-500/40 shadow-[0_3px_0_rgb(0_0_0/0.2)]"
    >
      <span className="pl-2 pr-1 text-indigo-100">
        <MindIcon />
      </span>
      <span
        className={clsx(
          "relative w-10 h-6 rounded-full bg-gray-300 transition",
          isDeepTraumaActive && "bg-indigo-950",
        )}
      >
        <span
          className={clsx(
            "absolute top-1 left-1 size-4 rounded-full bg-indigo-950 transition-transform",
            isDeepTraumaActive && "translate-x-4 bg-gray-300",
          )}
        />
      </span>
    </button>
  );
}
