import TierSelector from "./TierSelector"

export default function Header() {
  return (
    <header className="flex justify-between py-2 px-4 shadow-sm">
      <div className="mr-2">RESET</div>
      <div className="mr-2">LOGO</div>
      <TierSelector />
    </header>
  );
}