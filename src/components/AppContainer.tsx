"use client";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import SelectionBlock from "./SelectionBlock";
import { SelectionBlockConfigs } from "@/data/SelectionBlockConfigs";

function SiteFooter() {
  return (
    <div className="w-full p-2 text-center text-xs text-gray-500">
      Support me on{" "}
      <a
        href="https://ko-fi.com/yourkofi"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Ko-fi
      </a>
    </div>
  );
}

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tier, setTier] = useState(1);
  const [isDeepTraumaActive, setIsDeepTraumaActive] = useState(false);
  const [faintMemories, setFaintMemories] = useState(() =>
    Array(SelectionBlockConfigs.length).fill(0),
  );
  const [cardRemovals, setCardRemovals] = useState(0);

  useEffect(() => {
    if (isDeepTraumaActive) {
      if (tier < 2) {
        setTier(2);
      } else if (tier < 16) {
        setTier(tier + 1);
      }
    } else {
      setTier((prev) => Math.max(1, prev - 1));
    }
  }, [isDeepTraumaActive]);

  const totalFaintMemory = SelectionBlockConfigs.reduce(
    (sum, config, idx) =>
      sum + config.faintMemoryContribution(faintMemories[idx]),
    0,
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        tier={tier}
        setTier={setTier}
        isDeepTraumaActive={isDeepTraumaActive}
        setIsDeepTraumaActive={setIsDeepTraumaActive}
      />
      <main>{children}</main>
      <MainContent
        tier={tier}
        faintMemories={faintMemories}
        setFaintMemories={setFaintMemories}
        totalFaintMemory={totalFaintMemory}
        cardRemovals={cardRemovals}
        setCardRemovals={setCardRemovals}
      />
      <SiteFooter />
    </div>
  );
}
