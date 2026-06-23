"use client";

import { useMemo, useState } from "react";
import type { Case } from "@content/types";
import type { Locale } from "@/i18n/config";
import { CaseCard } from "./CaseCard";
import { categoryOptions, marketingOptions } from "@/lib/catalog";

type SortKey = "revenue" | "speed";

type Labels = {
  category: string;
  marketing: string;
  sort: string;
  all: string;
  sortByRevenue: string;
  sortBySpeed: string;
};

export function CaseExplorer({
  cases,
  locale,
  labels,
}: {
  cases: Case[];
  locale: Locale;
  labels: Labels;
}) {
  const [category, setCategory] = useState<string>("");
  const [marketing, setMarketing] = useState<string>("");
  const [sort, setSort] = useState<SortKey>("revenue");

  const cats = categoryOptions(locale).filter((o) =>
    cases.some((c) => c.category === o.key)
  );
  const mkts = marketingOptions(locale).filter((o) =>
    cases.some((c) => c.marketingTags.includes(o.key))
  );

  const filtered = useMemo(() => {
    const list = cases.filter((c) => {
      if (category && c.category !== category) return false;
      if (marketing && !c.marketingTags.includes(marketing as never)) return false;
      return true;
    });
    list.sort((a, b) => {
      if (sort === "revenue") return b.mrrUsd - a.mrrUsd;
      // speed: 収益 ÷ 期間(月) が大きいほど速い。期間不明は末尾
      const sa = a.periodMonths ? a.mrrUsd / a.periodMonths : 0;
      const sb = b.periodMonths ? b.mrrUsd / b.periodMonths : 0;
      return sb - sa;
    });
    return list;
  }, [cases, category, marketing, sort]);

  const selectClass =
    "rounded-lg border border-black/[.12] bg-transparent px-3 py-1.5 text-sm dark:border-white/[.18]";

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-zinc-500">
          {labels.category}
          <select
            className={selectClass}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">{labels.all}</option>
            {cats.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm text-zinc-500">
          {labels.marketing}
          <select
            className={selectClass}
            value={marketing}
            onChange={(e) => setMarketing(e.target.value)}
          >
            <option value="">{labels.all}</option>
            {mkts.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="ml-auto flex items-center gap-2 text-sm text-zinc-500">
          {labels.sort}
          <select
            className={selectClass}
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            <option value="revenue">{labels.sortByRevenue}</option>
            <option value="speed">{labels.sortBySpeed}</option>
          </select>
        </label>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <li key={c.id} className="contents">
            <CaseCard c={c} locale={locale} />
          </li>
        ))}
      </ul>
    </div>
  );
}
