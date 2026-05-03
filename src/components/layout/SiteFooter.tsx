import { trackTelemetryEvent } from "@/lib/telemetry/trackTelemetryEvent";

export default function SiteFooter() {
  const handleClick = () => {
    void trackTelemetryEvent("kofi_link_click", false, {
      source: "footer",
    });
  };

  return (
    <div className="mt-2 p-2 text-center text-xs text-gray-500">
      <hr className="my-1 border-gray-200" />
      <p>
        This is an unofficial community tool for Chaos Zero Nightmare. Chaos
        Zero Nightmare and all related assets are trademarks of Smilegate &amp;
        Super Creative. This project is not endorsed by or affiliated with
        Smilegate or Super Creative.
      </p>
      <hr className="my-1 border-gray-200" />
      <p>
        To help improve this community tool, basic anonymous usage data may be
        collected, such as which features are used. No names, emails, precise
        location, or account information are collected.
      </p>
      <hr className="my-1 border-gray-200" />
      <p>
        If this tool helped, you can support future updates on{" "}
        <a
          href="https://ko-fi.com/wanpoenjoyer"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          onClick={handleClick}
        >
          Ko-fi
        </a>
      </p>
    </div>
  );
}
