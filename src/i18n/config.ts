// ロケール設定(言語ルーティングの土台)。仕様は PROJECT_GOAL.md / docs を参照。
// 主市場は日本語(有料会員)、英語は広いリーチ用。デフォルトは ja。

export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// 表示名(言語切替UI用)
export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
};

// Accept-Language ヘッダから最適なロケールを選ぶ(軽量・依存なし)
export function pickLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  // "ja,en-US;q=0.9,en;q=0.8" のような文字列を優先度順に走査
  const ordered = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ordered) {
    if (tag.startsWith("ja")) return "ja";
    if (tag.startsWith("en")) return "en";
  }
  return defaultLocale;
}
