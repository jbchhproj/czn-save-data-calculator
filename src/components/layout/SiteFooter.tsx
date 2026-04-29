export default function SiteFooter() {
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
