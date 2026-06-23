import type { Case } from "../types";

// 事実の典拠: ウマたんニュースレター記事 #2(参考)。文章は自分の言葉で再構成。
// 数値メモ: ARR $6.7M → MRR ≈ $558K に正規化(revenueType: "arr")。
// techStack は元記事に明記がないため空。確認でき次第追加する(TODO)。

export const coconote = {
  id: "coconote",
  slug: "coconote",

  personName: "Zack Hargett & Brett Bauman",
  appName: "Coconote",
  appUrl: "https://coconote.app",
  sourceUrls: ["https://x.com/zackhargett", "https://x.com/brttbmn"],

  mrrUsd: 558_000,
  revenueType: "arr",
  periodMonths: 18,
  // users: 数百万人規模(正確な数字は不明のため未設定)
  launchYear: 2023,

  category: "learning",
  techStack: [], // TODO: 出典確認後に追加
  marketingTags: ["youtube", "seo", "shorts", "onboardingOpt", "paywallOpt"],

  title: {
    ja: "「二度とノートを取るな」— Coconoteが広告費ゼロで18ヶ月、年商10億円に到達した方法",
    en: "“Never Take Notes Again” — How Coconote Hit $6.7M ARR in 18 Months With Almost No Ad Spend",
  },

  summary: {
    ja: "元Loomの2人が作った学生向けAIノートアプリ。資金調達ゼロ・広告費ほぼゼロで、ローンチから18ヶ月でARR約10億円・利益率50%、Quizletに買収された。",
    en: "Two ex-Loom builders made an AI note app for students. With zero funding and almost no ads, it reached ~$6.7M ARR at ~50% margin in 18 months and was acquired by Quizlet.",
  },

  revenueRaw: {
    ja: "18ヶ月でARR 6.7Mドル(約10億円)、利益率約50%、SNS累計再生10億回超。外部資金ゼロ・有料広告ほぼゼロでQuizletに買収。",
    en: "$6.7M ARR in 18 months at ~50% margin, 1B+ cumulative social views. Zero external funding, almost no paid ads, acquired by Quizlet.",
  },

  painPoint: {
    ja: "創業者Zack自身の『大量の情報を圧縮して頭に入れるのが面倒くさい』というフラストレーションが起点。YouTubeのリンク、長文記事、講義資料、会議メモ——これらを要約して覚えるのが苦痛だった。自分が一番のユーザーだったからこそ、刺さる体験を設計できた。",
    en: "It started from co-founder Zack’s own frustration: compressing large amounts of information — YouTube links, long articles, lecture slides, meeting notes — into his head was painful. Being his own ideal user let him design an experience that actually resonated.",
  },

  body: {
    free: {
      ja: "Coconoteは、講義やYouTube動画を録音・取り込みするだけで、文字起こし・要約・フラッシュカード・小テスト・マインドマップ・ポッドキャストまで自動生成してくれる学生向けAIツール。掲げるコピーは強烈で「Never take notes again(二度とノートを取るな)」。\n\n作ったのはZack HargettとBrett Baumanの2人。Zackは位置情報SNS『YikYak』のPMを経て動画ツール『Loom』の9人目の社員。Brettも元Loomのプリンシパルエンジニアで、TeeTimerやPlaylistAIなどを個人開発する生粋のメイカー。2人はLoomで意気投合し、自分たちの課題からCoconoteを生み出した。\n\nポイントは思想の線引き。世にあふれる『宿題を解く』『エッセイを書く』AIは、彼らに言わせれば単なるカンニングツール。Coconoteは答えを出すのではなく、学習体験そのものを良くする側に立つ——この立ち位置が、数あるAIチートツールとの差になっている。",
      en: "Coconote is an AI tool for students: record or import a lecture or YouTube video and it auto-generates a transcript, summary, flashcards, quizzes, mind maps, and even a podcast. Its tagline is blunt — “Never take notes again.”\n\nIt was built by Zack Hargett and Brett Bauman. Zack was a PM at location-based social app YikYak and the 9th employee at video tool Loom. Brett was a principal engineer at Loom and a prolific indie maker (TeeTimer, PlaylistAI, and more). They met at Loom and built Coconote out of their own pain.\n\nThe key is a philosophical line: the flood of AI tools that ‘do your homework’ or ‘write your essay’ are, in their words, just cheating tools. Coconote doesn’t hand you the answer — it makes the act of learning better. That stance is what separates it from the crowd of AI cheating apps.",
    },
    premium: {
      ja: "【深掘り】ここからは、VCマネーゼロ・広告費ほぼゼロで18ヶ月・年商10億円を実現した『再現可能なグロースの型』を分解する。\n\n■ 広告費ゼロで月40万流入を生んだ『YouTube×SEO』自動量産マシン\n彼らは検索意図に沿ったYouTube動画とSEO記事を仕組み化して量産し、広告費ゼロで月40万の流入を作った。その具体的な量産フローと、検索とYouTubeをどう連結させたか——。\n\n■ 1000万再生のショート動画に仕込まれた2つのテクニック\n単発で1000万再生を叩き出したショート動画には、再現できる2つの仕掛けがあった。その正体は——。\n\n■ 『バズるためだけ』に作った狂気のツールと4000万再生\nプロダクト本体とは別に、わざわざ拡散だけを目的にしたツールを作り4000万再生を生んだ。なぜそれが本体の成長につながったのか——。\n\n■ ユーザーも売上も両方増えた魔法のプライシング\n値上げは普通ユーザーを減らすが、彼らは両方を増やした。その価格設計の中身——。\n\n(※有料部分のため要点のみ。実装時はここに完全版を入れる)",
      en: "【Deep dive】Here we break down the repeatable growth playbook behind reaching $6.7M ARR in 18 months with zero VC money and almost no ad spend.\n\n■ The ‘YouTube × SEO’ content machine that drove 400K visits/month with zero ad spend — the exact production flow and how search and YouTube were wired together.\n\n■ Two techniques baked into a 10M-view short — the reproducible mechanics behind a single viral short.\n\n■ The ‘built only to go viral’ tool that hit 40M views — why a side tool with no direct utility fed the core product’s growth.\n\n■ The pricing change that grew users AND revenue at once — what the price design actually was.\n\n(Premium section — outline only here; the full version goes here at implementation.)",
    },
  },

  playbook: {
    ja: [
      "自分自身の強いフラストレーションを起点にする(自分が一番のユーザーになる)",
      "強烈なワンライナーを掲げる(『Never take notes again』)",
      "YouTube×SEOを仕組み化し、広告費ゼロの自動集客マシンを作る(月40万流入)",
      "オンボーディングの質問をあえて増やしパーソナライズ(トライアル開始+16%)",
      "アカウント作成の『前』にペイウォールを出す(離脱の約10%を回収)",
      "解約時は割引でなく無料トライアル延長を提示(約27%を引き止め)",
      "ハードペイウォールに見せて実は少し無料で使える設計にする(本気度の高いユーザーを選別)",
    ],
    en: [
      "Start from your own strong frustration (be your own ideal user)",
      "Lead with a blunt one-liner (‘Never take notes again’)",
      "Systematize YouTube × SEO into a zero-ad-spend acquisition machine (400K visits/mo)",
      "Deliberately add onboarding questions to personalize (trial starts +16%)",
      "Show the paywall BEFORE account creation (recovers ~10% who would bounce)",
      "On cancel, offer a free trial extension instead of a discount (retains ~27%)",
      "Make a hard paywall that secretly lets users try a little for free (self-selects committed users)",
    ],
  },

  failureNote: {
    ja: "Brettは本作の前にTeeTimer・PlaylistAI・Notepadなど多数を個人開発しており、Coconoteは積み重ねの上に生まれた。一発で当てたわけではない。",
    en: "Before this, Brett shipped many indie products (TeeTimer, PlaylistAI, Notepad). Coconote stood on that accumulation — not an overnight hit.",
  },

  publishedAt: "2026-06-22",
  featured: true,
} satisfies Case;
