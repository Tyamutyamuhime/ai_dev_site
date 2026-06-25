import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// 全ロケールを静的生成
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : defaultLocale;
  const dict = await getDictionary(loc);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: dict.siteName, template: `%s | ${dict.siteName}` },
    description: dict.tagline,
    alternates: {
      languages: { ja: "/ja", en: "/en", "x-default": "/ja" },
    },
    verification: {
      google: "uaUu9UzBYZBlswJw6l9_G6wMI7i7kR_jP4O21TeCVkQ",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-black/[.08] dark:border-white/[.12]">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <Link href={`/${locale}`} className="font-semibold tracking-tight">
              {dict.siteName}
            </Link>
            <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <Link href={`/${locale}`} className="hover:text-foreground">
                {dict.nav.cases}
              </Link>
              <Link href={`/${locale}/about`} className="hover:text-foreground">
                {dict.nav.about}
              </Link>
              <LocaleSwitcher current={locale} />
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black/[.08] px-6 py-8 text-center text-sm text-zinc-500 dark:border-white/[.12]">
          © 2026 {dict.siteName}
        </footer>
      </body>
    </html>
  );
}
