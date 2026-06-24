// データモデル(確定版)。仕様は docs/DATA_MODEL.md を参照。
// 数字・固有名詞・タグキーは言語共通。翻訳対象は Localized のフィールドのみ。

export type Locale = "ja" | "en";
export type Localized = { ja: string; en: string };

// ---- 固定タグ辞書(taxonomy) — 実データ38件から抽出 ----

export const CATEGORIES = {
  learning:     { ja: "学習・教育",        en: "Learning" },
  health:       { ja: "健康・フィットネス", en: "Health & Fitness" },
  photo:        { ja: "写真・カメラ",       en: "Photo & Camera" },
  beauty:       { ja: "美容・自己改善",     en: "Beauty & Self-improvement" },
  productivity: { ja: "生産性",            en: "Productivity" },
  social:       { ja: "ソーシャル",         en: "Social" },
  game:         { ja: "ゲーム",            en: "Game" },
  career:       { ja: "キャリア・求職",     en: "Career & Jobs" },
  tool:         { ja: "開発者向けツール",   en: "Developer Tool" },
  other:        { ja: "その他",            en: "Other" },
} as const;

export const TECH = {
  cursor:      { ja: "Cursor",       en: "Cursor" },
  claudeCode:  { ja: "Claude Code",  en: "Claude Code" },
  replit:      { ja: "Replit",       en: "Replit" },
  chatgpt:     { ja: "ChatGPT",      en: "ChatGPT" },
  supabase:    { ja: "Supabase",     en: "Supabase" },
  vercel:      { ja: "Vercel",       en: "Vercel" },
  resend:      { ja: "Resend",       en: "Resend" },
  figma:       { ja: "Figma",        en: "Figma" },
  stripe:      { ja: "Stripe",       en: "Stripe" },
  revenuecat:  { ja: "RevenueCat",   en: "RevenueCat" },
  superwall:   { ja: "Superwall",    en: "Superwall" },
  reactNative: { ja: "React Native", en: "React Native" },
  expo:        { ja: "Expo",         en: "Expo" },
  nextjs:      { ja: "Next.js",      en: "Next.js" },
  nanoBanana:  { ja: "Nano Banana",  en: "Nano Banana (画像生成)" },
} as const;

export const MARKETING = {
  tiktok:        { ja: "TikTok",               en: "TikTok" },
  instagram:     { ja: "Instagram",            en: "Instagram" },
  youtube:       { ja: "YouTube",              en: "YouTube" },
  shorts:        { ja: "ショート動画",          en: "Short-form video" },
  influencer:    { ja: "インフルエンサー活用",   en: "Influencer marketing" },
  revShare:      { ja: "レベニューシェア",       en: "Revenue share" },
  seo:           { ja: "SEO",                  en: "SEO" },
  meme:          { ja: "ミーム起点",            en: "Meme-driven" },
  trendJacking:  { ja: "トレンド便乗",          en: "Trend-jacking" },
  onboardingOpt: { ja: "オンボーディング最適化", en: "Onboarding optimization" },
  paywallOpt:    { ja: "ペイウォール最適化",     en: "Paywall optimization" },
  reviewPrompt:  { ja: "レビュー依頼設計",       en: "In-app review prompts" },
  dmOutreach:    { ja: "DMアウトリーチ",         en: "DM outreach" },
  productHunt:   { ja: "Product Hunt",         en: "Product Hunt" },
  reddit:        { ja: "Reddit",               en: "Reddit" },
  x:             { ja: "X (Twitter)",          en: "X (Twitter)" },
  wordOfMouth:   { ja: "口コミ・キャンパス",     en: "Word of mouth" },
} as const;

export type CategoryKey  = keyof typeof CATEGORIES;
export type TechKey      = keyof typeof TECH;
export type MarketingKey = keyof typeof MARKETING;

// ---- 出典(Source) ----
// 「出典を明記」+「一次情報を優先」を仕組みで担保するための構造化フィールド。
//  - primary  = 一次情報(創業者本人のX/LinkedIn/インタビュー、公式アプリ/料金ページ、
//               本人によるProduct Huntローンチ、公式の発表・買収告知 等)
//  - secondary= 二次情報(報道・ブログ・まとめ。CNBC/TechCrunch/Starter Story/集計サイト 等)
export interface Source {
  url: string;
  title: Localized;             // 出典が何か(例: 「創業者本人の買収告知ポスト(X)」)
  kind: "primary" | "secondary";
}

// ---- 事例(Case) ----

export interface Case {
  // 識別子(言語共通)
  id: string;
  slug: string;

  // 事実データ(言語共通 / 翻訳不要)
  personName: string;
  appName: string;
  appUrl?: string;
  sources?: Source[];           // 出典(一次/二次を明記)。一次情報を最低1つ含めるのが運用ルール

  // 数値(言語共通 / ソート・フィルタ対象)
  mrrUsd: number;                 // 正規化したMRR(USD) ← 主ソートキー
  revenueType: "mrr" | "total" | "arr" | "daily";
  periodMonths?: number;
  users?: number;
  launchYear?: number;

  // 分類(固定辞書キー / フィルタ対象)
  category: CategoryKey;
  techStack: TechKey[];
  marketingTags: MarketingKey[];

  // 表示テキスト(翻訳対象)
  title: Localized;
  summary: Localized;             // カード・OGP用(〜120字)
  revenueRaw: Localized;          // 収益の生表記
  painPoint: Localized;           // 痛点の見つけ方(無料で見せる)
  body: {
    free: Localized;              // 無料: 概要・背景・プロダクト・痛点
    premium: Localized;           // 有料ロック: 深掘り分析
  };
  playbook: { ja: string[]; en: string[] }; // 再現手順3〜7ステップ(無料)
  failureNote?: Localized;        // 任意: 失敗・苦労(透明性)

  // メタ
  heroImage?: string;
  publishedAt: string;            // ISO日付
  featured?: boolean;
}
