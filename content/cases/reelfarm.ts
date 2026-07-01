import type { Case } from "../types";

// 事実の典拠(一次・二次情報で裏取り):
//  - 創業者本人 X(@_mattwelter): https://x.com/_mattwelter
//    節目ポスト①「reelfarm hit $100k revenue in 100 days」(3つの学び / $90k職を辞めた経緯 / 元は分散型ソーシャル分析の副業からピボット):
//      https://x.com/_mattwelter/status/1907543143526052193  ← FounderPortrait/SourceTweets 用の実在 status URL(primary)
//    節目ポスト②「reelfarm made $200k revenue in 163 days」(X/Twitterでのマーケの学び=“bookmark meta”):
//      https://x.com/_mattwelter/status/1930982261010153694 (primary)
//    手法ポスト「how this $10k MRR app gets users w/ 7 tiktok accounts」(1.反復可能なスライドショー型 2.1アカ2投稿/日=14投稿/日 3.動画をアプリに直結 4.最終スライドでアプリ+link in bio):
//      https://x.com/_mattwelter/status/1915408902763799020 (primary)
//  - 公式サイト/料金: https://reel.farm/ ($19/月〜。AIがTikTok用UGC動画・リスト型スライドショーを毎日自動生成→予約投稿→公開し、サイト/アプリへ送客) (primary)
//  - 本人 LinkedIn(ReelFarm 創業者): https://www.linkedin.com/in/mattwelter/ (primary)
//  - Medium 分解記事(Yuma Ueno, 2026-04)「25歳が$90k職を辞め100日で$100k」: https://medium.com/@yumaueno/matt-the-25-year-old-who-quit-a-90k-job-to-make-100k-in-100-days-through-solo-development-f1743927b5d8 (secondary)
//  - Starter Story「How One Developer Launched ReelFarm」: https://www.starterstory.com/reel-farm-breakdown (secondary)
// 数値メモ:
//  - 公表数字は「累計売上」型: $100k/100日(ポスト①)→ $200k/163日(ポスト②)→ 2026年 約$450k見込み(本人)。2024年末時点では$4,000のみ。→ revenueType="total"。
//  - mrrUsd(ソート用)は run-rate に正規化: 公表2点の増分 $100k を 63日(100→163日)で割ると ≈$1,587/日 → ×30 ≈ $47,600/月。よって mrrUsd=47000。
//  - periodMonths=5(163日 ≈ 5.4ヶ月で累計$200k到達)。launchYear=2024(元はPythonスクリプトとして着手、年末$4k)。
//  - users=1,000(公式・本人「1,000+ creators/customers」を保守採用)。
//  - techStack: ReelFarm の“開発に使ったツール”を一次で特定できず、固定辞書に該当キーも無いため空配列(捏造しない)。決済/基盤は推測のため未記載。

export const reelfarm = {
  id: "reelfarm",
  slug: "reelfarm",

  personName: "Matt Welter",
  appName: "ReelFarm",
  appUrl: "https://reel.farm",
  sources: [
    {
      url: "https://x.com/_mattwelter/status/1907543143526052193",
      title: {
        ja: "創業者 Matt Welter 本人の節目ポスト「100日で$100k」(X)",
        en: "Founder Matt Welter’s milestone post: “$100k in 100 days” (X)",
      },
      kind: "primary",
    },
    {
      url: "https://x.com/_mattwelter/status/1930982261010153694",
      title: {
        ja: "本人ポスト「163日で$200k」+ X運用の学び(X)",
        en: "Founder’s post: “$200k in 163 days” + X marketing lessons",
      },
      kind: "primary",
    },
    {
      url: "https://x.com/_mattwelter/status/1915408902763799020",
      title: {
        ja: "本人ポスト:TikTok 7アカウントでユーザーを取る具体手順",
        en: "Founder’s post: the exact 7-TikTok-account user-acquisition method",
      },
      kind: "primary",
    },
    {
      url: "https://reel.farm/",
      title: { ja: "ReelFarm 公式サイト(機能・料金 $19/月〜)", en: "ReelFarm official site (features & pricing from $19/mo)" },
      kind: "primary",
    },
    {
      url: "https://www.linkedin.com/in/mattwelter/",
      title: { ja: "本人 LinkedIn(ReelFarm 創業者)", en: "Founder’s LinkedIn (founder of ReelFarm)" },
      kind: "primary",
    },
    {
      url: "https://medium.com/@yumaueno/matt-the-25-year-old-who-quit-a-90k-job-to-make-100k-in-100-days-through-solo-development-f1743927b5d8",
      title: { ja: "Medium 分解記事(25歳・$90k職を辞め100日で$100k)", en: "Medium breakdown (25, quit a $90k job, $100k in 100 days)" },
      kind: "secondary",
    },
    {
      url: "https://www.starterstory.com/reel-farm-breakdown",
      title: { ja: "Starter Story(ReelFarm 立ち上げの分解)", en: "Starter Story (how ReelFarm was launched)" },
      kind: "secondary",
    },
  ],

  mrrUsd: 47_000,
  revenueType: "total",
  periodMonths: 5,
  users: 1_000,
  launchYear: 2024,

  category: "tool",
  techStack: [],
  marketingTags: ["x", "tiktok", "shorts"],

  title: {
    ja: "$90kの仕事を捨てた25歳が1人で作ったReelFarm — TikTok自動投稿SaaSが100日で$100k・163日で$200kに到達するまで",
    en: "A 25-year-old quit a $90k job and built ReelFarm solo — how a TikTok auto-posting SaaS hit $100k in 100 days and $200k in 163 days",
  },

  summary: {
    ja: "Matt Welter が単独で作った、TikTok用のUGC動画・スライドショーをAIで毎日自動生成し予約投稿するSaaS。サイトやアプリへ安く送客できる。$90kの職を辞め、100日で$100k・163日で$200kの累計売上に到達。自分の道具で自分を売る“ドッグフーディング”とXの発信が成長エンジン。",
    en: "A solo-built SaaS by Matt Welter that uses AI to auto-generate and schedule daily TikTok UGC videos and slideshows, driving cheap traffic to a site or app. He quit a $90k job and reached $100k in cumulative revenue in 100 days and $200k in 163 days — powered by dogfooding his own tool and building in public on X.",
  },

  revenueRaw: {
    ja: "累計売上 $100k を100日、$200k を163日で達成(いずれも本人公表)。2026年は約$450kを見込むと本人。2024年末時点では$4,000のみだった。ソロ・完全ブートストラップで、利用者は1,000人超のクリエイター/事業者。料金は$19/月から。",
    en: "$100k in cumulative revenue in 100 days and $200k in 163 days (both stated by the founder), with ~$450k projected for 2026. It had made only $4,000 by the end of 2024. Solo and fully bootstrapped, with 1,000+ creators/businesses using it. Pricing starts at $19/month.",
  },

  painPoint: {
    ja: "個人開発者もEC事業者も『短尺動画(TikTok)が今いちばん安い集客チャネル』だと分かっている。だが本当の壁は“毎日・複数アカウントで投稿し続ける”運用そのもの——ネタ出し、台本、編集、投稿を人手で回すと数日で燃え尽きる。Matt 自身、自分のYouTube/TikTokを回すためにPythonスクリプトで投稿を自動化していた。その『毎日投稿の地獄を消す』という自分の痛みが、そのままプロダクトになった。",
    en: "Indie developers and e-commerce sellers alike know short-form video (TikTok) is the cheapest acquisition channel right now. The real wall isn’t knowing that — it’s the operation of posting every day across multiple accounts: ideation, scripts, editing, publishing. Do it by hand and you burn out within days. Matt himself had automated his own YouTube/TikTok posting with a Python script. That personal pain — ‘kill the daily-posting grind’ — became the product itself.",
  },

  body: {
    free: {
      ja: "ReelFarm は、TikTok向けのUGC動画やリスト型スライドショーをAIが毎日自動で生成し、予約投稿・公開までを回すSaaSだ。使い方はシンプルで、フック(冒頭の一言)を入れ、AIアバターやプロダクトのデモ素材を選ぶと、AIが台本・スライド・キャプションまで作り、複数のTikTokアカウントへ自動で投稿していく。目的は一貫して『サイトやアプリへ安く送客し続けること』。料金は$19/月から、上位プランでは接続できるTikTokアカウント数が増える。\n\n作ったのは Matt Welter ただ1人。25歳で年収$90kの安定した職を辞め、フルタイムで開発に飛び込んだ。もともとは『分散型ソーシャル分析プラットフォーム』という別の副業を本命にするつもりだったが、うまくいかず、自分が自分のYouTube/TikTokを回すために書いていた“投稿自動化のPythonスクリプト”のほうに需要があると気づいてピボットした。ReelFarm は2024年に着手したが、その年に稼げたのはわずか$4,000。ここからが本番だった。\n\nピボット後の伸びは速い。本人公表で、累計売上は100日で$100k、163日で$200kに到達。2026年は約$450kを見込むという。すべてソロ・完全ブートストラップで、利用者は1,000人を超えるクリエイターや事業者に広がっている。\n\nただし本当に効いたのは“作ったもの”より“配り方”だ。Matt は ReelFarm を自分自身に使い倒し(ドッグフーディング)、TikTokのスライドショーで需要とバイラルの型を掴みながら、その過程をX(旧Twitter)で赤裸々に発信した。次章では、この『自分の道具で自分を売る』成長エンジンと、彼がXで語った具体的な集客手順を分解する。",
      en: "ReelFarm is a SaaS that uses AI to auto-generate TikTok UGC videos and listicle-style slideshows every day, then schedules and publishes them for you. The flow is simple: add a hook (an opening line), pick an AI avatar or your own product demo footage, and the AI writes the script, builds the slides and captions, and posts to multiple TikTok accounts automatically. The goal is always the same — keep driving cheap traffic to a site or app. Pricing starts at $19/month, with higher tiers unlocking more connected TikTok accounts.\n\nIt was built by one person: Matt Welter. At 25 he quit a stable $90k-a-year job to go full-time. He’d originally expected to turn a different side project — a ‘decentralized social analytics platform’ — into the business, but when that stalled, he realized the demand was in the little Python script he’d written to automate posting for his own YouTube/TikTok, and pivoted. He started ReelFarm in 2024 but made only $4,000 that year. That’s where the real story begins.\n\nAfter the pivot the growth was fast. By his own public numbers, cumulative revenue hit $100k in 100 days and $200k in 163 days, with ~$450k projected for 2026 — all solo and fully bootstrapped, now used by 1,000+ creators and businesses.\n\nBut what really worked was distribution, not the feature set. Matt used ReelFarm on himself (dogfooding), learning demand and the viral template through TikTok slideshows, and narrated the whole journey openly on X (formerly Twitter). The next section breaks down this ‘sell yourself with your own tool’ growth engine and the exact acquisition steps he shared on X.",
    },
    premium: {
      ja: "【深掘り】ReelFarm の伸びは、①自分のプロダクトを自分で使い倒す“ドッグフーディング”と、②Xでの徹底した発信、という2つのループが噛み合った結果だ。ソロ・従業員ゼロという制約下で、Matt がどう回したかを分解する。\n\n■ 正直になる:本命ではなく“効いている副産物”に賭け替える\nMatt が最初に挙げる学びは『自分に正直になれ』だ。$90k職を辞めたとき、彼は別の副業(分散型ソーシャル分析)を本命にするつもりだった。だが数字が伸びたのは、自分の投稿を自動化するために書いていたスクリプトのほう。プライドではなく需要のあるほうへ賭け替える——この“ピボットの正直さ”が全ての起点になった。個人開発者が陥りがちな『当てたい企画』への固執を、彼は早々に手放した。\n\n■ ドッグフーディング:自分の道具で自分を売る\nReelFarm は“TikTokで集客する道具”であり、Matt はそれを自社の集客にそのまま使った。プロダクトが生む動画・スライドショーで需要と『刺さる型』を掴み、その型を製品のテンプレートに還流させる。道具の性能改善が自社マーケの改善に直結し、自社マーケの学びが道具の改善に返る——このループが、広告に頼らない安価な成長を生んだ。\n\n■ 公開した具体手順:7アカウント運用の“型”\nMatt はXで、あるアプリがReelFarmでユーザーを取る手順をそのまま公開している:(1)反復可能なスライドショー形式を1つ確立する (2)1アカウントあたり1日2投稿(=7アカウントで14投稿/日)で母数を稼ぐ (3)動画の中身をアプリの機能に直結させる(例:カップル向けアプリなら“カップルの質問”)(4)投稿の最終スライドでアプリを訴求し、プロフィールのlink in bioへ誘導する。派手なバズ狙いではなく、当たる型を“量×一貫性”で回すのが肝だ。\n\n■ Xマーケ:数字を出し、“ブックマークの型”で書く\nもう一方のループがX上の発信だ。Matt は『reelfarm hit $100k in 100 days』『$200k in 163 days』のように、検証可能な収益の節目を具体的な数字で出す。彼が繰り返し説くのが“bookmark meta”——Xで伸ばすなら、いいねよりも『保存(ブックマーク)』されるように書け、という主張だ。手順・チェックリスト・分解といった“後で見返したくなる”実用フォーマットが、アルゴリズム上も強い。ビルド・イン・パブリックで信頼と流入を同時に積む、教科書的な動きだ。\n\n■ 価格と収益の質:$19/月から、累計は右肩上がり\n料金は$19/月からと、個人でも試せる水準に置いた。公表数字は累計売上型で、$100k(100日)→$200k(163日)→2026年 約$450k見込みと加速している。増分で見ると、100→163日の63日間で+$100k=1日あたり約$1,600のペースで、月次のラン率はおよそ$47kに相当する。安い単価でも、TikTok集客というニーズの普遍性と、上位プラン(接続アカウント数)への自然なアップグレードで積み上がる構造だ。\n\n■ 個人開発者への示唆\n再現の勘所は3つ。①“当てたい企画”より“もう効いている副産物”に正直に賭け替える ②売り物と集客手段を一致させ(ドッグフーディング)、道具の改善とマーケの学びを相互に還流させる ③Xでは検証可能な数字を、保存されるフォーマット(手順・分解)で出す。ReelFarm の堀は特定の技術ではなく、この『正直なピボット × 自分の道具で自分を売る × 保存される発信』という運用の総体にある。",
      en: "【Deep dive】ReelFarm grew from two loops locking together: (1) dogfooding — using his own product on himself — and (2) relentless building in public on X. Here’s how Matt ran it under the constraints of a solo, zero-employee operation.\n\n■ Be honest: bet on the working by-product, not the pet project. Matt’s first lesson is ‘be honest with yourself.’ When he quit the $90k job, he expected a different side project (decentralized social analytics) to be the business. But the numbers moved on the little script he’d written to automate his own posting. Betting on demand instead of pride — that ‘honesty of the pivot’ was the starting point. He let go early of the fixation on the idea he *wanted* to work, a classic indie trap.\n\n■ Dogfooding: sell yourself with your own tool. ReelFarm is ‘a tool to get traffic from TikTok,’ and Matt used it directly for his own acquisition. The videos and slideshows the product generates taught him demand and the ‘template that lands,’ and he fed that template back into the product. Improving the tool improved his own marketing, and lessons from his marketing improved the tool — a loop that produced cheap, ad-free growth.\n\n■ The exact method he published: the 7-account ‘template.’ On X, Matt spelled out how one app gets users with ReelFarm: (1) establish one repeatable slideshow format, (2) post 2× per account per day (7 accounts = 14 posts/day) to build volume, (3) tie the video content directly to the app’s function (e.g., ‘couples questions’ for a couples app), and (4) use the final slide to pitch the app and send viewers to the link in bio. It’s not chasing a lucky viral hit — it’s running a proven template with volume and consistency.\n\n■ X marketing: post the numbers, write for the ‘bookmark meta.’ The other loop is posting on X. Matt shares verifiable revenue milestones with concrete numbers — ‘reelfarm hit $100k in 100 days,’ ‘$200k in 163 days.’ What he preaches repeatedly is the ‘bookmark meta’: to grow on X, write so people *save* (bookmark) the post, not just like it. Practical formats — steps, checklists, breakdowns you want to revisit — are algorithmically strong. Building in public, he compounds trust and inbound traffic at once.\n\n■ Price and revenue quality: from $19/mo, cumulative climbing. Pricing starts at $19/month — low enough for individuals to try. The public figures are cumulative: $100k (100 days) → $200k (163 days) → ~$450k projected for 2026, and accelerating. In incremental terms, the 63 days from day 100 to 163 added +$100k, about $1,600/day, which corresponds to a monthly run rate of roughly $47k. Even at a low price, it compounds thanks to the universality of ‘get traffic from TikTok’ and natural upgrades into higher tiers (more connected accounts).\n\n■ Lessons for indie builders. Three cruxes: (1) be honest and bet on the by-product that already works over the idea you wish worked; (2) align what you sell with how you acquire (dogfooding), and cycle tool improvements and marketing lessons into each other; (3) on X, post verifiable numbers in saveable formats (steps, breakdowns). ReelFarm’s moat isn’t a specific technology — it’s the whole operating system of ‘honest pivot × sell yourself with your own tool × write things people bookmark.’",
    },
  },

  playbook: {
    ja: [
      "“当てたい企画”に固執せず、既に効いている副産物(投稿自動化)へ正直に賭け替える",
      "売り物と集客手段を一致させる(自分の道具=ReelFarmで自社集客するドッグフーディング)",
      "反復可能なスライドショーの“型”を1つ確立する(派手なバズより量×一貫性)",
      "複数TikTokアカウントで1アカ2投稿/日(7アカ=14投稿/日)を回して母数を稼ぐ",
      "動画の中身をプロダクト機能に直結させ、最終スライド+link in bioで送客する",
      "Xでは検証可能な収益の節目を、保存(ブックマーク)される手順フォーマットで発信する",
    ],
    en: [
      "Don’t cling to the pet idea — honestly bet on the by-product that already works (post automation)",
      "Align what you sell with how you acquire (dogfood your own tool — ReelFarm markets ReelFarm)",
      "Establish one repeatable slideshow ‘template’ (volume × consistency over chasing a viral hit)",
      "Run multiple TikTok accounts at 2 posts/account/day (7 accounts = 14 posts/day) to build volume",
      "Tie video content to a product feature and drive traffic via the final slide + link in bio",
      "On X, post verifiable revenue milestones in saveable (bookmark-worthy) step-by-step formats",
    ],
  },

  failureNote: {
    ja: "順風満帆ではない。Matt が最初に賭けた本命は別の副業(分散型ソーシャル分析)で、そちらは伸びずにピボットを迫られた。ReelFarm 自体も着手した2024年の売上はわずか$4,000。安定した$90kの職を捨てての船出であり、“正直に賭け替える”決断と、当たるまで型を回し続ける我慢がなければ、100日で$100kの数字には届いていない。",
    en: "It wasn’t a straight line. The project Matt first bet on was a different side venture (decentralized social analytics), which stalled and forced a pivot. ReelFarm itself made just $4,000 in 2024, the year he started it. He set out by giving up a stable $90k job — and without the decision to ‘honestly bet elsewhere’ and the patience to keep running the template until it landed, the $100k-in-100-days number would never have arrived.",
  },

  publishedAt: "2026-07-01",
  featured: false,
} satisfies Case;
