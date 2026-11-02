import type { VisibilityShot } from "@/lib/proof/visibility";

type VisibilityShotsProps = {
  shots: VisibilityShot[];
};

export default function VisibilityShots({ shots }: VisibilityShotsProps) {
  return (
    <div className="mt-6 space-y-6">
      {shots.map((shot) => (
        <figure
          key={shot.src}
          className="overflow-hidden rounded-2xl border border-ink/10 bg-ink"
        >
          <img
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            loading="lazy"
            className="h-auto w-full"
          />
          <figcaption className="px-4 py-3 text-sm text-bone/70">
            {shot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
