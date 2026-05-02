"use client";
import Header from "@/components/layout/Header";
import { useState } from "react";
import MainContent from "./MainContent";
import { selectionBlocks } from "@/lib/calculator/selectionBlocks";
import FloatingParticles from "@/components/vfx/FloatingParticles";
import SiteFooter from "./SiteFooter";

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDeepTraumaActive, setIsDeepTraumaActive] = useState(false);
  const [isPostProcessingEnabled, setIsPostProcessingEnabled] = useState(true);
  const [tier, setTier] = useState(1);
  const [faintMemories, setFaintMemories] = useState(() =>
    Array(selectionBlocks.length).fill(0),
  );
  const [cardRemovals, setCardRemovals] = useState(0);

  const handleToggleDeepTrauma = () => {
    const nextIsActive = !isDeepTraumaActive;

    setIsDeepTraumaActive(nextIsActive);
    setTier((previousTier) => {
      if (nextIsActive) {
        if (previousTier < 2) {
          return 2;
        }

        return Math.min(16, previousTier + 1);
      }

      return Math.max(1, previousTier - 1);
    });
  };

  const totalFaintMemory = selectionBlocks.reduce(
    (sum, config, idx) =>
      sum + config.faintMemoryContribution(faintMemories[idx]),
    0,
  );

  const handleReset = () => {
    setTier(1);
    setIsDeepTraumaActive(false);
    setFaintMemories(Array(selectionBlocks.length).fill(0));
    setCardRemovals(0);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* background layer */}
      {isPostProcessingEnabled && <FloatingParticles />}
      <div
        className={`deep-trauma-gradient ${
          isPostProcessingEnabled && isDeepTraumaActive ? "active" : ""
        }`}
      />

      {/* content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          isDeepTraumaActive={isDeepTraumaActive}
          onToggleDeepTrauma={handleToggleDeepTrauma}
          tier={tier}
          totalFaintMemory={totalFaintMemory}
          setTier={setTier}
          onReset={handleReset}
          isPostProcessingEnabled={isPostProcessingEnabled}
          setIsPostProcessingEnabled={setIsPostProcessingEnabled}
        />

        <div aria-hidden="true" className="h-[112px] shrink-0" />

        <main>{children}</main>

        <MainContent
          faintMemories={faintMemories}
          setFaintMemories={setFaintMemories}
          cardRemovals={cardRemovals}
          setCardRemovals={setCardRemovals}
          isPostProcessingEnabled={isPostProcessingEnabled}
        />

        <SiteFooter />
      </div>
    </div>
  );
}
