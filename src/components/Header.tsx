import TierSelector from "./TierSelector"

export default function Header() {
  return (
    <header className="text-black flex items-center justify-between py-2 px-4 shadow-sm flex justify-between">
      <TierSelector />
      <div> logo </div>
      <div> reset </div>
    </header>
  );
}