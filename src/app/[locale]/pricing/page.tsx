import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : "ja";
  const dict = await getDictionary(loc);
  return {
    title: dict.nav.pricing,
    description: dict.pricing.lead,
    alternates: {
      languages: {
        ja: "/ja/pricing",
        en: "/en/pricing",
        "x-default": "/ja/pricing",
      },
    },
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const p = dict.pricing;

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">{dict.nav.pricing}</h1>
      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{p.lead}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {/* 無料 */}
        <div className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.12]">
          <div className="text-sm font-medium text-zinc-500">{p.freeName}</div>
          <div className="mt-1 text-3xl font-semibold">{p.freePrice}</div>
          <ul className="mt-6 space-y-2 text-sm">
            {p.freeFeatures.map((f, i) => (
              <li key={i} className="flex gap-2 text-zinc-700 dark:text-zinc-300">
                <span aria-hidden className="text-emerald-600">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* 有料 */}
        <div className="rounded-2xl border-2 border-foreground p-6">
          <div className="text-sm font-medium text-zinc-500">
            {p.premiumName}
          </div>
          <div className="mt-1 text-3xl font-semibold">{p.premiumPrice}</div>
          <ul className="mt-6 space-y-2 text-sm">
            {p.premiumFeatures.map((f, i) => (
              <li key={i} className="flex gap-2 text-zinc-700 dark:text-zinc-300">
                <span aria-hidden className="text-emerald-600">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
          <button
            disabled
            className="mt-6 inline-flex h-11 w-full cursor-not-allowed items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background opacity-60"
          >
            {p.premiumCta}
          </button>
          <p className="mt-3 text-center text-xs text-zinc-500">{p.note}</p>
        </div>
      </div>
    </div>
  );
}
