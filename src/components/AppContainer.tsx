"use client";
import Header from "@/components/Header";
import { useState } from "react";
import MainContent from "./MainContent";
import { SelectionBlockConfigs } from "@/data/SelectionBlockConfigs";
import FloatingParticles from "@/components/vfx/FloatingParticles";

function SiteFooter() {
  return (
    <div className="p-2 text-center text-xs text-gray-500">
      <p>
        This is an unofficial community tool for Chaos Zero Nightmare. Chaos
        Zero Nightmare and all related assets are trademarks of Smilegate &amp;
        Super Creative. This project is not endorsed by or affiliated with
        Smilegate or Super Creative.
      </p>
      <hr className="my-1 border-gray-200" />
      <p>
        Support me on{" "}
        <a
          href="https://ko-fi.com/wanpoenjoyer"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Ko-fi
        </a>
      </p>
    </div>
  );
}

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDeepTraumaActive, setIsDeepTraumaActive] = useState(false);
  const [isPostProcessingEnabled, setIsPostProcessingEnabled] = useState(true);
  const [tier, setTier] = useState(1);
  const [faintMemories, setFaintMemories] = useState(() =>
    Array(SelectionBlockConfigs.length).fill(0),
  );
  const [cardRemovals, setCardRemovals] = useState(0);

  const handleDeepTraumaChange = (isActive: boolean) => {
    if (isActive === isDeepTraumaActive) {
      return;
    }

    setIsDeepTraumaActive(isActive);
    setTier((previousTier) => {
      if (isActive) {
        if (previousTier < 2) {
          return 2;
        }

        return Math.min(16, previousTier + 1);
      }

      return Math.max(1, previousTier - 1);
    });
  };

  const totalFaintMemory = SelectionBlockConfigs.reduce(
    (sum, config, idx) =>
      sum + config.faintMemoryContribution(faintMemories[idx]),
    0,
  );

  const handleReset = () => {
    setTier(1);
    setIsDeepTraumaActive(false);
    setFaintMemories(Array(SelectionBlockConfigs.length).fill(0));
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
          setIsDeepTraumaActive={handleDeepTraumaChange}
          tier={tier}
          totalFaintMemory={totalFaintMemory}
          setTier={setTier}
          onReset={handleReset}
          isPostProcessingEnabled={isPostProcessingEnabled}
          setIsPostProcessingEnabled={setIsPostProcessingEnabled}
        />

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
