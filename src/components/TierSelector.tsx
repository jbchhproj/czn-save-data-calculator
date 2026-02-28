export default function TierSelector() {
    return (
        <div className="flex items-center gap-4 p-2 rounded">
            <label htmlFor="tier-select" className="flex flex-col text-gray-800">
                Tier
                <select id="tier-select" name="tier" className="mt-1 p-1 rounded border border-gray-300">
                    {Array.from({ length: 16 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
            </label>
            <label htmlFor="extra-difficulty" className="flex items-center gap-2 text-gray-800">
                <input id="extra-difficulty" type="checkbox" className="accent-blue-600" />
                Deep Trauma
            </label>
        </div>
    );
}