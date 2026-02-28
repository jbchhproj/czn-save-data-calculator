import TierSelector from "./TierSelector"

export default function Header() {
  return (
    <header className="items-center justify-between py-2 px-4 shadow-sm">
      <TierSelector />
      <div>{/* Logo/Title */}</div>
      <div>{/* Reset Button */}</div>
    </header>
  );
}