"use client";

import BlobEffect1 from "./BlobEffect1";
import BlobEffect2 from "./BlobEffect2";
import BlobEffect3 from "./BlobEffect3";
import BlobEffect4 from "./BlobEffect4";
import BlobEffect5 from "./BlobEffect5";

export default function DeepTraumaBurst({ active }: { active: boolean }) {
  return (
    <div className={`deep-trauma-burst ${active ? "active" : ""}`}>
      <svg viewBox="0 0 1920 1080" aria-hidden="true">
        <g className="trauma-blob trauma-blob-1">
          <BlobEffect1 />
        </g>

        <g className="trauma-blob trauma-blob-2">
          <BlobEffect2 />
        </g>

        <g className="trauma-blob trauma-blob-3">
          <BlobEffect3 />
        </g>

        <g className="trauma-blob trauma-blob-4">
          <BlobEffect4 />
        </g>

        <g className="trauma-blob trauma-blob-5">
          <BlobEffect5 />
        </g>
      </svg>
    </div>
  );
}
