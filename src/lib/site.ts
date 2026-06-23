// サイトの絶対URL。sitemap / robots / OGP(metadataBase) で共通利用する。
// 優先順位:
//   1. NEXT_PUBLIC_SITE_URL  — 独自ドメインを付けたら明示設定で上書き
//   2. VERCEL_PROJECT_PRODUCTION_URL — Vercelが本番URLを自動注入(例: ai-dev-site.vercel.app)
//   3. localhost — ローカル開発時のフォールバック
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
