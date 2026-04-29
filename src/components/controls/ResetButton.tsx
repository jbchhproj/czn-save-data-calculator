import RefreshIcon from "@/components/icons/RefreshIcon";

interface ResetButtonProps {
  onReset: () => void;
}

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button
      className="bg-slate-800 rounded py-[3px] px-[7px] text-slate-950 border border-slate-800/40 shadow-[0_3px_0_rgb(0_0_0/0.2)] transition-transform duration-50 ease-out active:duration-0 active:scale-[0.99] active:translate-y-[2px] active:shadow-[0_1px_0_rgb(0_0_0/0.2)] active:bg-slate-700"
      onClick={onReset}
      type="button"
    >
      <span className="text-indigo-100">
        <RefreshIcon />
      </span>
    </button>
  );
}
