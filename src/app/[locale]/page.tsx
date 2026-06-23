import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cases } from "@content/cases";
import { CaseExplorer } from "@/components/CaseExplorer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : "ja";
  const dict = await getDictionary(loc);
  return {
    title: dict.nav.cases,
    description: dict.tagline,
    alternates: { languages: { ja: "/ja", en: "/en", "x-default": "/ja" } },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">{dict.siteName}</h1>
      <p className="mt-2 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        {dict.tagline}
      </p>

      <div className="mt-10">
        <CaseExplorer
          cases={cases}
          locale={locale}
          labels={{
            category: dict.filter.category,
            marketing: dict.filter.marketing,
            sort: dict.filter.sort,
            all: dict.filter.all,
            sortByRevenue: dict.filter.sortByRevenue,
            sortBySpeed: dict.filter.sortBySpeed,
          }}
        />
      </div>
    </div>
  );
}
