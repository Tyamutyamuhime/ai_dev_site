import Link from "next/link";
import type { Case } from "@content/types";
import type { Locale } from "@/i18n/config";
import { categoryLabel, marketingLabel } from "@/lib/catalog";

export function CaseCard({ c, locale }: { c: Case; locale: Locale }) {
  return (
    <Link
      href={`/${locale}/cases/${c.slug}`}
      className="group flex flex-col rounded-xl border border-black/[.08] p-5 transition-colors hover:border-black/25 dark:border-white/[.12] dark:hover:border-white/35"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-zinc-500">{c.appName}</span>
        <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {categoryLabel(c.category, locale)}
        </span>
      </div>

      <h2 className="mt-2 font-semibold leading-snug group-hover:underline">
        {c.title[locale]}
      </h2>

      <p className="mt-2 line-clamp-3 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
        {c.summary[locale]}
      </p>

      <div className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
        {c.revenueRaw[locale]}
      </div>

      {c.marketingTags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {c.marketingTags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded border border-black/[.08] px-1.5 py-0.5 text-[11px] text-zinc-500 dark:border-white/[.12]"
            >
              {marketingLabel(tag, locale)}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
