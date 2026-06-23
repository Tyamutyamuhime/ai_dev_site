# データモデル仕様 — 確定版

> `PROJECT_GOAL.md` 6章「データモデル」の確定版。実装はこの仕様に従う。
> 最終更新: 2026-06-22

## 確定した3つの設計判断

### A. 収益(revenue)の正規化 — 「USD建てMRR」を主指標にする
事例ごとに数字の種類がバラバラ(MRR / 総収益 / ARR / 日次)なので、**全件を1軸で比較・ソート**できるよう正規化する。
- `mrrUsd`(number): **ソート・フィルタの主キー**。USD建ての月次経常収益(MRR)に概算換算した値。
  - 総額しか無い場合 → 期間で割ってMRR概算。ARRしか無い場合 → ÷12。日次 → ×30。
  - 換算は概算でよい(目的は厳密会計でなく横断比較)。
- `revenueRaw` { ja, en }(string): 元記事の生の表記(例: 「ローンチから18ヶ月で年商10億円」)。表示用。正規化で失われるニュアンスを保持。
- `revenueType`(enum): `mrr` | `total` | `arr` | `daily` — 元データが何だったかの記録。

### B. タグは固定辞書(enum)で管理 — 表記ゆれを防ぐ
自由入力禁止。下記の固定キーから選ぶ。表示ラベルは言語別に辞書で持つ(`taxonomy`)。
新タグが必要になったら辞書に追加してから使う。

### C. 無料/有料の境界 — 1記事内で混在、深掘りだけロック
記事単位の出し分けではなく、**詳細ページ内の「深掘り分析」セクションだけ有料ロック**。
一覧・基本数字・要約・事例の概要は常に無料(SEO流入を最大化)。
→ `body` を `free` と `premium` に分割して持つ。

### D. 読者ニーズ由来のフィールド(`COMPETITIVE_ANALYSIS.md` の調査反映)
読者は「インスピレーションよりコピーできる手順」を求める、という調査結果から3項目を追加:
- `painPoint`(言語別): 「どんな痛点をどう見つけたか」。最も響く要素なので**無料**で見せる。
- `playbook`(言語別の配列): 再現できる手順を3〜7ステップ。これも**無料**側に置き集客の主役にする。
- `failureNote`(任意): ローンチ前の失敗・苦労。透明性=信頼の担保。
深掘りの「なぜ効いたか/数字の裏側」は引き続き `body.premium` に置いて有料化。

---

## スキーマ(TypeScript)

```ts
// 言語キー
type Locale = "ja" | "en";
type Localized = { ja: string; en: string };

interface Case {
  // --- 識別子(言語共通) ---
  id: string;                    // 安定ID(例: "coconote")
  slug: string;                  // URL用スラッグ(言語共通)

  // --- 事実データ(言語共通 / 翻訳不要) ---
  personName: string;            // 開発者名(例: "Zack Hargett")
  appName: string;               // アプリ名(例: "Coconote")
  appUrl?: string;               // 公式URL
  sourceUrls?: string[];         // 本人のX/LinkedIn等

  // --- 数値(言語共通 / ソート・フィルタ対象) ---
  mrrUsd: number;                // 正規化したMRR(USD) ← 主ソートキー
  revenueType: "mrr" | "total" | "arr" | "daily";
  periodMonths?: number;         // 収益化までの期間(月)
  users?: number;                // ユーザー数
  launchYear?: number;           // ローンチ年

  // --- 分類(固定辞書キー / フィルタ対象) ---
  category: CategoryKey;         // 1つ
  techStack: TechKey[];          // 複数(アフィリと紐付け)
  marketingTags: MarketingKey[]; // 複数

  // --- 表示テキスト(翻訳対象) ---
  title: Localized;              // 事例タイトル
  summary: Localized;            // カード・OGP用の短い要約(〜120字)
  revenueRaw: Localized;         // 収益の生表記(表示用)
  painPoint: Localized;          // 「どんな痛点をどう見つけたか」← 読者に最も響く(無料で見せる)
  body: {
    free: Localized;             // 無料: 概要・人物背景・プロダクト説明・痛点
    premium: Localized;          // 有料ロック: 深掘り分析・マーケ手法の分解
  };
  playbook: { ja: string[]; en: string[] }; // 再現できる手順を3〜7ステップで。free側に表示
  failureNote?: Localized;       // 任意: ローンチ前の失敗・苦労(透明性=信頼)

  // --- メタ ---
  heroImage?: string;
  publishedAt: string;           // ISO日付
  featured?: boolean;
}
```

## 固定タグ辞書(taxonomy) — 実データ(38件)から抽出

```ts
// カテゴリ(事例のプロダクト領域)
const CATEGORIES = {
  learning:   { ja: "学習・教育",     en: "Learning" },
  health:     { ja: "健康・フィットネス", en: "Health & Fitness" },
  photo:      { ja: "写真・カメラ",    en: "Photo & Camera" },
  beauty:     { ja: "美容・自己改善",  en: "Beauty & Self-improvement" },
  productivity:{ ja: "生産性",         en: "Productivity" },
  social:     { ja: "ソーシャル",      en: "Social" },
  game:       { ja: "ゲーム",          en: "Game" },
  career:     { ja: "キャリア・求職",  en: "Career & Jobs" },
  tool:       { ja: "開発者向けツール", en: "Developer Tool" },
  other:      { ja: "その他",          en: "Other" },
} as const;

// テックスタック(アフィリエイト連携キー)
const TECH = {
  cursor:     { ja: "Cursor",       en: "Cursor" },
  claudeCode: { ja: "Claude Code",  en: "Claude Code" },
  replit:     { ja: "Replit",       en: "Replit" },
  chatgpt:    { ja: "ChatGPT",      en: "ChatGPT" },
  supabase:   { ja: "Supabase",     en: "Supabase" },
  vercel:     { ja: "Vercel",       en: "Vercel" },
  resend:     { ja: "Resend",       en: "Resend" },
  figma:      { ja: "Figma",        en: "Figma" },
  stripe:     { ja: "Stripe",       en: "Stripe" },
  revenuecat: { ja: "RevenueCat",   en: "RevenueCat" },
  superwall:  { ja: "Superwall",    en: "Superwall" },
  reactNative:{ ja: "React Native", en: "React Native" },
  expo:       { ja: "Expo",         en: "Expo" },
  nextjs:     { ja: "Next.js",      en: "Next.js" },
  nanoBanana: { ja: "Nano Banana",  en: "Nano Banana (画像生成)" },
} as const;

// マーケティング手法(差別化の核 / フィルタ主役)
const MARKETING = {
  tiktok:          { ja: "TikTok",              en: "TikTok" },
  instagram:       { ja: "Instagram",           en: "Instagram" },
  youtube:         { ja: "YouTube",             en: "YouTube" },
  shorts:          { ja: "ショート動画",         en: "Short-form video" },
  influencer:      { ja: "インフルエンサー活用",  en: "Influencer marketing" },
  revShare:        { ja: "レベニューシェア",      en: "Revenue share" },
  seo:             { ja: "SEO",                 en: "SEO" },
  meme:            { ja: "ミーム起点",           en: "Meme-driven" },
  trendJacking:    { ja: "トレンド便乗",         en: "Trend-jacking" },
  onboardingOpt:   { ja: "オンボーディング最適化", en: "Onboarding optimization" },
  paywallOpt:      { ja: "ペイウォール最適化",    en: "Paywall optimization" },
  reviewPrompt:    { ja: "レビュー依頼設計",      en: "In-app review prompts" },
  dmOutreach:      { ja: "DMアウトリーチ",        en: "DM outreach" },
  productHunt:     { ja: "Product Hunt",        en: "Product Hunt" },
  reddit:          { ja: "Reddit",              en: "Reddit" },
  x:               { ja: "X (Twitter)",         en: "X (Twitter)" },
  wordOfMouth:     { ja: "口コミ・キャンパス",    en: "Word of mouth" },
} as const;

type CategoryKey  = keyof typeof CATEGORIES;
type TechKey      = keyof typeof TECH;
type MarketingKey = keyof typeof MARKETING;
```

## 一覧で使うソート・フィルタ(UI仕様)

- **ソート**: `mrrUsd` 降順(既定) / 新着(`publishedAt`) / 成長スピード(`mrrUsd ÷ periodMonths`)
- **フィルタ**: `category`(単一) / `marketingTags`(複数AND・OR) / `techStack`(複数) / 収益レンジ(mrrUsdのバケット)
- **検索**: `personName` / `appName` / `title` のテキスト一致

## 運用ルール
- 数字・固有名詞・タグキーは言語共通。1回入力で日英両方に反映。
- 翻訳が必要なのは `title` / `summary` / `revenueRaw` / `painPoint` / `playbook` / `body` / `failureNote` のみ。
- 新しいタグは必ず辞書(taxonomy)に追加してから事例で使う(表記ゆれ防止)。
- `painPoint` と `playbook` は無料で見せ集客の主役にする。有料化するのは `body.premium`(深掘り)のみ。
