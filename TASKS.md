# マスタータスクリスト

> 現在進行中の作業の単一の作業台帳。完了したら `[x]`。大きな方針は `PROJECT_GOAL.md` を参照。
> 最終更新: 2026-06-23

---

## 🔴 進行中: Google ログイン(Supabase Auth / 目的=メール取得=リード獲得)

計画書: `C:\Users\star5\.claude\plans\abstract-juggling-rabbit.md`(承認済み)

### ブロッカー(先に決める)
- [ ] **Supabase 無料枠が上限(2/2)**。新規 `ai-dev-cases` を作るには既存(`teacher-match` / `InfoNerds's Project`)のどれかを pause するか、既存を流用するか、有料化するかを決める。← **ユーザー判断待ち**

### 私(Claude)が実装する範囲
- [x] `@supabase/supabase-js` + `@supabase/ssr` を導入
- [ ] Supabase プロジェクト作成(org=dgockzkkenpklknzrclw / region=ap-northeast-1)→ URL・publishable key 取得
- [ ] DB: `profiles` テーブル + サインアップトリガー(`handle_new_user`)+ RLS(migration)
- [ ] `src/lib/supabase/client.ts`(ブラウザ用 createBrowserClient)
- [ ] `src/lib/supabase/server.ts`(サーバー用 createServerClient + cookies)
- [ ] `src/proxy.ts` にセッションリフレッシュ統合(既存ロケールリダイレクトを保持・Cookie コピー)
- [ ] `src/app/api/auth/callback/route.ts`(code→session 交換)
- [ ] `src/components/AuthButton.tsx`(未ログイン=Googleログイン / ログイン済=メール+ログアウト)
- [ ] `src/app/[locale]/layout.tsx` ヘッダに AuthButton 配置(初期 user はサーバー getUser)
- [ ] i18n: `auth.signIn` / `auth.signOut` を ja.json / en.json に追加
- [ ] `.env.local` に `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `npm run build` で型・ページ生成を検証
- [ ] `npm run dev` でログイン往復を実機確認 + `profiles` にメールが入るか確認

### あなた(ユーザー)が手動でやる範囲(私のツール外)
- [ ] **Google Cloud Console**: OAuth 2.0 クライアントID(ウェブアプリ)作成。承認済みリダイレクトURI = `https://<project-ref>.supabase.co/auth/v1/callback`。Client ID/Secret を控える。
- [ ] **Supabase ダッシュボード**: Auth → Providers → Google を有効化し ID/Secret 貼付。URL Config の Site URL / Redirect URLs に `https://aidevcases.com/**` と `http://localhost:3000/**` を追加。
- [ ] **Vercel**: Environment Variables に `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` を追加。

---

## 🟡 次の収益導線(PROJECT_GOAL §7 未着手 / 認証の後または並行)
- [ ] note 有料記事の初出(横断レポート1本)→ サイトへ送客
- [ ] サイトの Stripe Payment Link(買い切り)— note の後
- [ ] ペイウォール CTA のフェイクドア化(「深掘りを読む」をメール登録+計測へ)
- [ ] 事例投入(質優先・一次情報裏取り): 最初の10件(PingoAI / Halo AI / Polsia / Glowup / Sprout / nomadtable / Kaching / Matt Welter / Rafael Kramer / Cal AI)

## 🟢 仕上げ(後回し)
- [ ] 日本語フォント最適化・OGP画像生成・ダークモード調整

## 🔵 記事自動生成パイプライン: コードレビュー積み残し(2026-06-24)
> PR #1 で導入。即修正できたもの(/api/card キャッシュ・total誤ラベルの暫定回避・チップ上限・型注釈)は対応済み。以下は設計判断/運用が絡むため保留。
- [ ] **total型の見出し数値の正式対応**: `mrrUsd` は正規化済み月次MRRのため、`revenueType:"total"`(累計)の事例でOGカードに「累計」を出せない。暫定でMRR表記に逃がしている。累計をカードに出すなら構造化フィールド(例: `totalRevenueUsd`)を追加するか、カード文言の方針を決める。`src/lib/og-card.tsx` の `headlineRevenue`。
- [ ] **Xポスト埋め込みのビルド時取得フォールバック**: `react-tweet` はビルド/レンダリング時に syndication API からツイートを取得する。ビルド時にAPIが落ちている/レート制限だと「ツイートが見つかりません」が静的HTMLに焼き込まれる恐れ。重要記事は再ビルドで復旧する運用、もしくは取得失敗時の表示方針を検討。`src/components/SourceTweets.tsx`。
- [ ] (任意) ヒーロー用 `opengraph-image` ルートも動的(ƒ)。生成回数を抑えるなら `revalidate` 等のルートセグメント設定を検討。
