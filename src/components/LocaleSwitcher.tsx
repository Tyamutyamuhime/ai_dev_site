"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, isLocale, type Locale } from "@/i18n/config";

// 現在のパスのロケール接頭辞を差し替えて言語を切り替える。
export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    const segments = pathname.split("/");
    // segments[0] === "" (先頭スラッシュ), segments[1] が現在のロケール
    if (isLocale(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchTo(locale)}
          aria-current={locale === current ? "true" : undefined}
          className={
            locale === current
              ? "rounded px-2 py-1 font-semibold text-foreground whitespace-nowrap"
              : "rounded px-2 py-1 text-zinc-500 hover:text-foreground whitespace-nowrap"
          }
        >
          {localeNames[locale]}
        </button>
      ))}
    </div>
  );
}
