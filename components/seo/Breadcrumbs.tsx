import JsonLdScript from "@/components/seo/JsonLdScript";
import {
  buildBreadcrumbList,
  type BreadcrumbItem,
} from "@/lib/seo/jsonld";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length < 2) {
    return null;
  }

  return (
    <>
      <JsonLdScript data={buildBreadcrumbList(items)} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-mute">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.path}-${item.name}`} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-ink-line">
                    /
                  </span>
                ) : null}
                {isLast ? (
                  <span className="text-ink" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.path}
                    className="transition hover:text-coral"
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
