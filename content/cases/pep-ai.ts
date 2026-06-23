import type { Case } from "../types";

// 典拠: ウマたんニュースレター記事 #5(参考)。文章は自分の言葉で再構成。
// 数値メモ: 直近1ヶ月の収益 $60K を MRR とみなす。総収益は80日で約$125K。

export const pepAi = {
  id: "pep-ai",
  slug: "pep-ai",

  personName: "Cedric Roberge",
  appName: "Pep AI",
  appUrl: "https://pepai.app",

  mrrUsd: 60_000,
  revenueType: "mrr",
  periodMonths: 3,
  launchYear: 2026,

  category: "health",
  techStack: ["replit", "cursor", "claudeCode", "chatgpt"],
  marketingTags: ["tiktok", "influencer", "dmOutreach", "trendJacking", "onboardingOpt"],

  title: {
    ja: "コーディング経験ゼロの大学生が、2週間で作ったペプチド管理アプリを80日で2000万円に",
    en: "A No-Code Student Built a Peptide Tracker in 2 Weeks and Hit $125K in 80 Days",
  },
  summary: {
    ja: "オレゴン大学のビジネス専攻22歳が、TikTokで爆発していた『ペプチド』ニッチを見つけ、バイブコーディングで2週間でアプリ化。インフルエンサーマーケで一気に火を付け、80日で総収益12.5万ドル。",
    en: "A 22-year-old business major spotted the exploding ‘peptides’ niche on TikTok, vibe-coded an app in two weeks, lit it up with influencer marketing, and hit $125K total in 80 days.",
  },
  revenueRaw: {
    ja: "80日で総収益12.5万ドル(約2000万円)。直近1ヶ月は6万ドル(約950万円)超。",
    en: "$125K total in 80 days; $60K+ in the most recent month.",
  },
  painPoint: {
    ja: "ルームメイトの『ペプチド摂ろうぜ』の一言と、その後TikTokのおすすめに流れてきたペプチド動画が起点。調べると爆発的に流行っているのに、ユーザーは投与量や副作用をExcelや散らかったメモで管理していた。『これだけ流行ってるのに、ちゃんとした管理アプリが無い』——そこに勝機を見出した。",
    en: "It started with a roommate saying ‘let’s take peptides,’ then peptide videos flooding his TikTok feed. He found a booming trend where users tracked doses and side effects in spreadsheets and messy notes. ‘This is huge, yet there’s no proper tracker’ — that gap was the opening.",
  },
  body: {
    free: {
      ja: "Cedric Robergeはプログラミング未経験のビジネス専攻生。最初に作った大学生向けマーケットプレイス『UniYard』は800ユーザーを集めたが収益はゼロ。何度も失敗し、諦めかけていた。\n\n転機はニッチの発見。ペプチドという急成長領域に気づいた彼は、App Storeの競合アプリを全て試し、レビューを片っ端から読み込んだ。そして集めたレビューを全てClaudeに食わせ『これらから理想的なペプチドアプリを設計してくれ』と指示。まさにAI時代の作り方だ。\n\nMVPは『ペプチド追加・リマインダー・投与記録』の3機能だけ。『恥ずかしいくらいシンプルじゃないとダメ』という彼の言葉通り、2週間で形にした。最大の壁はApple審査(医療系トピック)で、既存のGLP-1トラッカーの免責表現を研究して突破した。",
      en: "Cedric Roberge was a non-coding business major. His first app, a student marketplace called UniYard, got 800 users but zero revenue. After repeated failures, he nearly gave up.\n\nThe turning point was niche discovery. Spotting the fast-growing peptide space, he tried every competitor on the App Store and read all their reviews. He fed the collected reviews to Claude and asked it to ‘design the ideal peptide app from these.’ That’s the AI-era way to build.\n\nThe MVP had just three features: add a peptide, set a reminder, log a dose. True to his line — ‘your MVP should be a little embarrassingly simple’ — he shipped in two weeks. The biggest wall was Apple review (a medical topic), which he cleared by studying how existing GLP-1 trackers worded their disclaimers.",
    },
    premium: {
      ja: "【深掘り(有料)】たった1つの投稿から最初の100ユーザーを得た方法、1枚の写真で8万インプを取った投稿、1日100件のDMで押し切るインフルエンサーマーケ、なけなしの3万ドルを賭けた投資判断、そして2026年に彼がゼロからやり直すなら踏む6ステップ——。",
      en: "【Deep dive (Premium)】How one post drove the first 100 users, the single photo that pulled 80K impressions, the 100-DMs-a-day influencer push, the all-in $30K ad bet, and the 6 steps he’d take to start over from zero in 2026.",
    },
  },
  playbook: {
    ja: [
      "急成長中のニッチを SNS のトレンドから嗅ぎ取る(ペプチド)",
      "App Store の競合アプリを全て試し、レビューを全部読む(顧客リサーチ)",
      "集めたレビューを AI に渡し『理想のアプリ』を設計させる",
      "MVPは3機能だけ。『恥ずかしいほどシンプル』に2週間で出す",
      "審査が厳しい領域は、通過している類似アプリの表現を研究して真似る",
      "インフルエンサーに物量(1日100DM)で当たって初速を作る",
    ],
    en: [
      "Sniff out a fast-growing niche from social trends (peptides)",
      "Try every competitor on the App Store and read all their reviews",
      "Feed the reviews to AI and have it design the ‘ideal app’",
      "Ship an MVP with just 3 features — ‘embarrassingly simple’ — in two weeks",
      "In strict-review categories, study and mimic how approved peers word things",
      "Hit influencers with sheer volume (100 DMs/day) to create initial momentum",
    ],
  },
  failureNote: {
    ja: "最初のアプリ『UniYard』は800ユーザーを集めても1ドルも稼げず、その後も鳴かず飛ばずが続いた。本気で諦めかけた時期を経ての成功。",
    en: "His first app UniYard earned $1 despite 800 users, and several others flopped. This win came after a stretch where he nearly quit.",
  },
  publishedAt: "2026-06-22",
} satisfies Case;
