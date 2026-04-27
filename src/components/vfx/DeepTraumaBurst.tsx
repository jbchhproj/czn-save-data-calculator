import blobEffects1 from "./BlobEffects1.svg";
import blobEffects2 from "./BlobEffects2.svg";
import blobEffects3 from "./BlobEffects3.svg";
import blobEffects4 from "./BlobEffects4.svg";
import blobEffects5 from "./BlobEffects5.svg";

export default function DeepTraumaBurst({ active }: { active: boolean }) {
  return (
    <div className={`deep-trauma-burst ${active ? "active" : ""}`}>
      <svg viewBox="0 0 1920 1080" aria-hidden="true">
        <image
          className="trauma-blob trauma-blob-1"
          href={blobEffects1.src}
          x="0"
          y="0"
          width="1920"
          height="1080"
          preserveAspectRatio="none"
        />
        <image
          className="trauma-blob trauma-blob-2"
          href={blobEffects2.src}
          x="0"
          y="0"
          width="1920"
          height="1080"
          preserveAspectRatio="none"
        />
        <image
          className="trauma-blob trauma-blob-3"
          href={blobEffects3.src}
          x="0"
          y="0"
          width="1920"
          height="1080"
          preserveAspectRatio="none"
        />
        <image
          className="trauma-blob trauma-blob-4"
          href={blobEffects4.src}
          x="0"
          y="0"
          width="1920"
          height="1080"
          preserveAspectRatio="none"
        />
        <image
          className="trauma-blob trauma-blob-5"
          href={blobEffects5.src}
          x="0"
          y="0"
          width="1920"
          height="1080"
          preserveAspectRatio="none"
        />
      </svg>
    </div>
  );
}
