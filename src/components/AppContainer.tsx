"use client";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";

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
  /* PROPS */
  const [tier, setTier] = useState(1);
  const [isDeepTraumaActive, setIsDeepTraumaActive] = useState(false);

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

  return (
    <>
      <Header
        tier={tier}
        setTier={setTier}
        isDeepTraumaActive={isDeepTraumaActive}
        setIsDeepTraumaActive={setIsDeepTraumaActive}
      />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        {children}
      </main>
      <MainContent tier={tier} />
      <SiteFooter />
    </>
  );
}
