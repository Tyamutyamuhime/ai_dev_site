import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cases, getCaseBySlug } from "@content/cases";
import {
  categoryLabel,
  techLabel,
  marketingLabel,
  affiliateUrl,
  formatPeriod,
  formatUsers,
} from "@/lib/catalog";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    cases.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = isLocale(locale) ? locale : "ja";
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: c.title[loc],
    description: c.summary[loc],
    alternates: {
      languages: {
        ja: `/ja/cases/${slug}`,
        en: `/en/cases/${slug}`,
        "x-default": `/ja/cases/${slug}`,
      },
    },
    openGraph: {
      title: c.title[loc],
      description: c.summary[loc],
      type: "article",
    },
  };
}

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i} className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
          {p}
        </p>
      ))}
    </>
  );
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const c = getCaseBySlug(slug);
  if (!c) notFound();
  const dict = await getDictionary(locale);
  const loc: Locale = locale;

  const period = formatPeriod(c.periodMonths, dict.case.monthsUnit);
  const users = formatUsers(c.users, loc);

  return (
    <article className="mx-auto w-full max-w-5xl px-6 py-10">
      <Link
        href={`/${loc}`}
        className="text-sm text-zinc-500 hover:text-foreground"
      >
        ← {dict.common.backToList}
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_280px]">
        {/* 本文 */}
        <div className="min-w-0">
          <div className="text-sm font-medium text-zinc-500">{c.appName}</div>
          <h1 className="mt-1 text-3xl font-semibold leading-tight tracking-tight">
            {c.title[loc]}
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            {c.summary[loc]}
          </p>

          {/* 痛点(無料・強調) */}
          <section className="mt-8 rounded-xl border border-amber-300/60 bg-amber-50 p-5 dark:border-amber-400/20 dark:bg-amber-950/20">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
              {dict.case.painPoint}
            </h2>
            <Paragraphs text={c.painPoint[loc]} />
          </section>

          {/* 概要 */}
          <section className="mt-8">
            <Paragraphs text={c.body.free[loc]} />
          </section>

          {/* 再現手順(無料) */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold">{dict.case.playbook}</h2>
            <ol className="mt-4 space-y-3">
              {c.playbook[loc].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
                    {i + 1}
                  </span>
                  <span className="leading-7 text-zinc-700 dark:text-zinc-300">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {c.failureNote && (
            <section className="mt-8 rounded-xl border border-black/[.08] bg-zinc-50 p-5 dark:border-white/[.12] dark:bg-zinc-900">
              <Paragraphs text={c.failureNote[loc]} />
            </section>
          )}

          {/* 深掘り分析(現段階は全記事開放) */}
          <section className="mt-10">
            <h2 className="text-xl font-semibold">{dict.case.premiumTitle}</h2>
            <Paragraphs text={c.body.premium[loc]} />
          </section>
        </div>

        {/* サマリーボックス(Starter Story見本) */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-xl border border-black/[.08] p-5 dark:border-white/[.12]">
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-zinc-500">{dict.case.revenue}</dt>
                <dd className="mt-0.5 font-semibold text-emerald-700 dark:text-emerald-400">
                  {c.revenueRaw[loc]}
                </dd>
              </div>
              {period && (
                <div>
                  <dt className="text-zinc-500">{dict.case.period}</dt>
                  <dd className="mt-0.5 font-medium">{period}</dd>
                </div>
              )}
              {users && (
                <div>
                  <dt className="text-zinc-500">{dict.case.users}</dt>
                  <dd className="mt-0.5 font-medium">{users}</dd>
                </div>
              )}
              <div>
                <dt className="text-zinc-500">{dict.filter.category}</dt>
                <dd className="mt-0.5 font-medium">
                  {categoryLabel(c.category, loc)}
                </dd>
              </div>
            </dl>

            {/* 技術スタック(アフィリエイト) */}
            {c.techStack.length > 0 && (
              <div className="mt-5 border-t border-black/[.08] pt-4 dark:border-white/[.12]">
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {dict.case.techStack}
                </div>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {c.techStack.map((t) => {
                    const url = affiliateUrl(t);
                    const label = techLabel(t, loc);
                    return (
                      <li key={t}>
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="rounded border border-black/[.12] px-2 py-1 text-xs hover:bg-black/[.04] dark:border-white/[.18] dark:hover:bg-white/[.06]"
                          >
                            {label} ↗
                          </a>
                        ) : (
                          <span className="rounded border border-black/[.12] px-2 py-1 text-xs dark:border-white/[.18]">
                            {label}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* マーケ手法 */}
            {c.marketingTags.length > 0 && (
              <div className="mt-5 border-t border-black/[.08] pt-4 dark:border-white/[.12]">
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {dict.case.marketing}
                </div>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {c.marketingTags.map((m) => (
                    <li
                      key={m}
                      className="rounded border border-black/[.12] px-2 py-1 text-xs text-zinc-600 dark:border-white/[.18] dark:text-zinc-300"
                    >
                      {marketingLabel(m, loc)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 出典 */}
            {c.sourceUrls && c.sourceUrls.length > 0 && (
              <div className="mt-5 border-t border-black/[.08] pt-4 text-xs dark:border-white/[.12]">
                <div className="font-semibold uppercase tracking-wide text-zinc-500">
                  Source
                </div>
                <ul className="mt-2 space-y-1">
                  {c.sourceUrls.map((u) => (
                    <li key={u}>
                      <a
                        href={u}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-zinc-500 underline hover:text-foreground"
                      >
                        {u.replace(/^https?:\/\//, "")}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}
