interface DeepTraumaProps {
  isDeepTraumaActive: boolean;
  setIsDeepTraumaActive: (isActive: boolean) => void;
}

export default function DeepTrauma({
  isDeepTraumaActive,
  setIsDeepTraumaActive,
}: DeepTraumaProps) {
  return (
    <input
      type="checkbox"
      className="accent-blue-600"
      checked={isDeepTraumaActive}
      onChange={(event) => setIsDeepTraumaActive(event.target.checked)}
    />
  );
}
