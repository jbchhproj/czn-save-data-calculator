import RefreshIcon from "./icons/RefreshIcon";

interface ResetButtonProps {
  onReset: () => void;
}

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button
      className="bg-slate-800 rounded py-1 px-2"
      onClick={() => onReset()}
      type="button"
    >
      <span className="text-indigo-100">
        <RefreshIcon />
      </span>
    </button>
  );
}
