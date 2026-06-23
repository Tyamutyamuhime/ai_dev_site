import {
  CATEGORIES,
  TECH,
  MARKETING,
  type CategoryKey,
  type TechKey,
  type MarketingKey,
} from "@content/types";
import type { Locale } from "@/i18n/config";

// ---- タグのロケール別ラベル ----
export function categoryLabel(key: CategoryKey, locale: Locale): string {
  return CATEGORIES[key][locale];
}
export function techLabel(key: TechKey, locale: Locale): string {
  return TECH[key][locale];
}
export function marketingLabel(key: MarketingKey, locale: Locale): string {
  return MARKETING[key][locale];
}

// ---- アフィリエイトURL(技術スタック) ----
// ⚠ 暫定: 公式サイトのプレースホルダ。提携IDが取れ次第こちらを差し替える。
export const AFFILIATE_URLS: Partial<Record<TechKey, string>> = {
  cursor: "https://cursor.com",
  claudeCode: "https://www.anthropic.com/claude-code",
  replit: "https://replit.com",
  chatgpt: "https://chatgpt.com",
  supabase: "https://supabase.com",
  vercel: "https://vercel.com",
  resend: "https://resend.com",
  figma: "https://figma.com",
  stripe: "https://stripe.com",
  revenuecat: "https://www.revenuecat.com",
  superwall: "https://superwall.com",
  reactNative: "https://reactnative.dev",
  expo: "https://expo.dev",
  nextjs: "https://nextjs.org",
};

export function affiliateUrl(key: TechKey): string | undefined {
  return AFFILIATE_URLS[key];
}

// ---- フィルタUI用: 全タグの選択肢 ----
export function categoryOptions(locale: Locale) {
  return (Object.keys(CATEGORIES) as CategoryKey[]).map((key) => ({
    key,
    label: CATEGORIES[key][locale],
  }));
}
export function marketingOptions(locale: Locale) {
  return (Object.keys(MARKETING) as MarketingKey[]).map((key) => ({
    key,
    label: MARKETING[key][locale],
  }));
}

// ---- 期間表示 ----
export function formatPeriod(
  months: number | undefined,
  unit: string
): string | null {
  if (!months) return null;
  return `${months}${unit}`;
}

// ---- ユーザー数表示(1.2M / 30万 など簡易) ----
export function formatUsers(users: number | undefined, locale: Locale): string | null {
  if (!users) return null;
  if (locale === "ja") {
    if (users >= 10_000) return `${(users / 10_000).toLocaleString()}万`;
    return users.toLocaleString();
  }
  if (users >= 1_000_000) return `${(users / 1_000_000).toFixed(1)}M`;
  if (users >= 1_000) return `${Math.round(users / 1_000)}K`;
  return users.toLocaleString();
}
