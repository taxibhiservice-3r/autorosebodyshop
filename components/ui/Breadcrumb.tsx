import Link from "next/link";
import { buildBreadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  const schema = buildBreadcrumbSchema(items.map((i) => ({ name: i.label, url: i.href })));
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-[#9CA3AF]">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && <span className="text-[#4B5563]">/</span>}
              {i === allItems.length - 1 ? (
                <span className="text-[#D1D5DB]" aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
