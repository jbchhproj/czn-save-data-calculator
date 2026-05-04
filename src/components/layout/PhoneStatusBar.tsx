"use client";

import { useEffect, useState } from "react";
import SignalIcon from "@/components/icons/SignalIcon";
import WifiIcon from "@/components/icons/WifiIcon";
import BatteryIcon from "@/components/icons/BatteryIcon";

function getCurrentTime(): string {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());
}

export default function PhoneStatusBar() {
  const [time, setTime] = useState("12:00");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setTime(getCurrentTime());
    }, 0);
    const intervalId = window.setInterval(() => {
      setTime(getCurrentTime());
    }, 60000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="relative hidden h-9 items-center justify-between bg-slate-600 px-6 text-sm font-semibold text-white sm:flex sm:rounded-t-[1.35rem]"
    >
      <span className="absolute left-6 right-[calc(50%+3rem)] text-center">
        {time}
      </span>
      <div className="absolute left-1/2 h-6 w-20 -translate-x-1/2 rounded-full bg-black" />
      <div className="ml-auto flex items-center gap-1.5">
        <SignalIcon className="size-5" />
        <WifiIcon className="size-5" />
        <BatteryIcon className="size-6" />
      </div>
    </div>
  );
}
