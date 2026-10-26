import JsonLdScript from "@/components/seo/JsonLdScript";
import {
  buildBreadcrumbList,
  type BreadcrumbItem,
} from "@/lib/seo/jsonld";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
};

export default function Breadcrumbs({
  items,
  tone = "light",
}: BreadcrumbsProps) {
  if (items.length < 2) {
    return null;
  }

  const onDark = tone === "dark";

  return (
    <>
      <JsonLdScript data={buildBreadcrumbList(items)} />
      <nav
        aria-label="Breadcrumb"
        className={`mb-8 text-sm ${onDark ? "text-bone/55" : "text-mute"}`}
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={`${item.path}-${item.name}`}
                className="flex items-center gap-2"
              >
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className={onDark ? "text-bone/25" : "text-ink-line"}
                  >
                    /
                  </span>
                ) : null}
                {isLast ? (
                  <span
                    className={onDark ? "text-bone/80" : "text-ink"}
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.path}
                    className={`transition hover:text-coral ${
                      onDark ? "text-bone/70" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
