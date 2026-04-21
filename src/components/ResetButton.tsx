import RefreshIcon from "./icons/RefreshIcon";

interface ResetButtonProps {
  onReset: () => void;
}

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 rounded py-1 px-2"
      onClick={() => onReset()}
      type="button"
    >
      <RefreshIcon />
    </button>
  );
}
