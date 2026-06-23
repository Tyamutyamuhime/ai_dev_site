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
    title: dict.nav.about,
    description: dict.about.lead,
    alternates: {
      languages: { ja: "/ja/about", en: "/en/about", "x-default": "/ja/about" },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">{dict.nav.about}</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {dict.about.lead}
      </p>
      <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">
        {dict.about.p1}
      </p>
      <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
        {dict.about.p2}
      </p>
      <ul className="mt-8 space-y-2">
        {dict.about.points.map((pt, i) => (
          <li key={i} className="flex gap-2 text-zinc-700 dark:text-zinc-300">
            <span aria-hidden className="text-emerald-600">
              ✓
            </span>
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}
