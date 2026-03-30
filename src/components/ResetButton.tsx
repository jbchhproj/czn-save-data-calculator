interface ResetButtonProps {
  onReset: () => void;
}

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 py-2 px-4"
      onClick={() => onReset()}
      type="button"
    >
      Reset
    </button>
  );
}
