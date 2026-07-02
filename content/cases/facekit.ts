import type { Case } from "../types";

// 事実の典拠(一次・二次情報で裏取り):
//  - 創業者 Rafael Kramer(19歳)本人サイト: https://rafaelkramer.com/ (primary)
//  - 本人 TikTok @raf_kramer(FaceKit を自ら解説する投稿): https://www.tiktok.com/@raf_kramer/video/7599098998800043286 (primary=本人の発信)
//  - FaceKit 公式サイト: https://facekitapp.com/ (primary)
//  - App Store「FaceKit - 3D Face Analysis」(開発元 Mindmush / id6756392359): https://apps.apple.com/us/app/facekit-3d-face-analysis/id6756392359 (primary=公式プロダクト・提供元)
//  - BigGo Finance「Rafael Kramer: 40 AI Influencers, 100 Million Views, $100,000 in Two Months」(手法・数字の詳細): https://finance.biggo.com/news/765104cb14b1c458 (secondary)
//  - TrustMRR(FaceKit の直近売上トラッキング ≈ $17,252 / 直近30日): https://trustmrr.com/startup/facekit (secondary)
//
// 固有名詞メモ(別人・別アプリ混同の排除):
//  - 本人=Rafael "Raf" Kramer(TikTok @raf_kramer / rafaelkramer.com)。運営元は本人のアプリスタジオ Mindmush(mwm.ai / support@mindmush.com、10M+DL・50+アプリ)。
//  - 対象アプリは「FaceKit - 3D Face Analysis」(id6756392359)。同名の別アプリ「FaceKit AI」(id1491764607, 週$8)や X の @calcwk(TikTok Shop系の別人物と思われる)は本件と無関係のため一切採用しない。
//  - 料金は「週/月/年のサブスク階層」があると報じられるが、この特定アプリの正確な価格を一次で確証できないため金額は明記しない(捏造しない)。
//
// 数値メモ:
//  - 主数値は「2ヶ月で累計 $100,000(粗利)」を採用 → revenueType:"total", periodMonths:2。
//  - mrrUsd(ソート用の正規化MRR)は 2ヶ月の総額を月割り: $100,000 ÷ 2 ≈ $50,000/月 → mrrUsd: 50_000。
//    別途、Apple手数料後の純利益は「月約$35,000」、制作コストは「月約$2,000」、直近は TrustMRR で ≈$17k/月まで落ち着いた点も revenueRaw / body に出典つきで併記(食い違い・季節性を明示)。
//  - users: 約100,000(≈100k ダウンロード、BigGo)。launchYear は一次で確証できず未設定(捏造しない)。
//  - techStack: アバター生成=Nano Banana(辞書キー nanoBanana)を採用。動画生成の Sora は固定辞書に無いため body で言及に留める。

export const facekit = {
  id: "facekit",
  slug: "facekit",

  personName: "Rafael Kramer",
  appName: "FaceKit",
  appUrl: "https://facekitapp.com",
  sources: [
    {
      url: "https://rafaelkramer.com/",
      title: {
        ja: "創業者 Rafael Kramer 本人サイト",
        en: "Founder Rafael Kramer’s own site",
      },
      kind: "primary",
    },
    {
      url: "https://www.tiktok.com/@raf_kramer/video/7599098998800043286",
      title: {
        ja: "本人 TikTok(@raf_kramer)による FaceKit 解説投稿",
        en: "Founder’s own TikTok (@raf_kramer) explaining FaceKit",
      },
      kind: "primary",
    },
    {
      url: "https://apps.apple.com/us/app/facekit-3d-face-analysis/id6756392359",
      title: {
        ja: "App Store「FaceKit - 3D Face Analysis」(提供元 Mindmush)",
        en: "App Store: FaceKit – 3D Face Analysis (by Mindmush)",
      },
      kind: "primary",
    },
    {
      url: "https://facekitapp.com/",
      title: { ja: "FaceKit 公式サイト", en: "FaceKit official site" },
      kind: "primary",
    },
    {
      url: "https://finance.biggo.com/news/765104cb14b1c458",
      title: {
        ja: "BigGo Finance(40のAIインフルエンサー・1億再生・2ヶ月$10万の分解)",
        en: "BigGo Finance (breakdown: 40 AI influencers, 100M views, $100k in 2 months)",
      },
      kind: "secondary",
    },
    {
      url: "https://trustmrr.com/startup/facekit",
      title: {
        ja: "TrustMRR(FaceKit の直近売上トラッキング)",
        en: "TrustMRR (FaceKit recent revenue tracking)",
      },
      kind: "secondary",
    },
  ],

  mrrUsd: 50_000,
  revenueType: "total",
  periodMonths: 2,
  users: 100_000,

  category: "beauty",
  techStack: ["nanoBanana"],
  marketingTags: ["tiktok", "shorts", "influencer", "trendJacking"],

  title: {
    ja: "19歳が作った顔採点アプリFaceKit —「AIで作った40人のインフルエンサー」に月1億回踊らせ、広告費ゼロで2ヶ月$10万を稼ぐまで",
    en: "FaceKit, the face-rating app built by a 19-year-old — how ‘40 AI-generated influencers’ drove 100M views a month and $100k in 2 months with zero ad spend",
  },

  summary: {
    ja: "19歳のRafael Kramerが作った“顔をスキャンして採点する”looksmaxingアプリ。iPhoneのTrueDepthカメラで顔を3Dスキャンし、対称性や黄金比を数値化する。集客の要は人間ではなく『Nano Bananaで生成したAIインフルエンサー40アカウント』——クリッパー数人がTikTokに量産投稿し、月1億回超の再生で広告費ゼロのまま2ヶ月で累計$10万を売り上げた。",
    en: "A ‘scan your face and score it’ looksmaxing app built by 19-year-old Rafael Kramer: an iPhone TrueDepth 3D face scan quantifies symmetry and golden ratios. The growth engine isn’t human — it’s ‘40 AI-influencer accounts generated with Nano Banana.’ A few clippers mass-post them on TikTok, and 100M+ monthly views drove $100k in cumulative sales in two months with zero ad spend.",
  },

  revenueRaw: {
    ja: "ローンチ後およそ2ヶ月で累計 約$100,000(粗利ベース)を売り上げ。動画制作コストは月約$2,000、Appleの手数料を引いた純利益は月約$35,000と報じられる。ピーク後は落ち着き、TrustMRRの追跡では直近30日で約$17,000/月。すべてTikTokのオーガニック(AIインフルエンサー)由来で、有料広告・人間インフルエンサー案件はゼロ。",
    en: "Roughly $100,000 in cumulative sales (gross) in about two months after launch. Video production reportedly cost ~$2,000/month, and net profit after Apple’s commission ran ~$35,000/month. After the peak it cooled — TrustMRR tracks ~$17,000/month over the recent 30 days. All of it came from organic TikTok (AI influencers): zero paid ads and zero human-influencer deals.",
  },

  painPoint: {
    ja: "『自分の見た目は客観的に何点なのか』——“looksmaxing(ルックス改善)”に沈むZ世代の若者にとって、これは切実で反復的な関心事だ。従来は鏡や他人の主観、あるいは怪しい採点サイトしかなく、『何をどう直せば良くなるのか』が数字で返ってこない。FaceKitはこの空白を突いた:iPhoneのTrueDepthカメラで顔を3Dスキャンし、目の間隔・対称性・各種比率を計測して“スコア”と改善提案(スキンケア・水分・筋トレ等)に翻訳する。若者が毎日気にする『自分の顔の点数』という不安そのものが、そのまま市場の入口だった。",
    en: "‘Objectively, how many points is my face?’ — for the Gen Z youth sinking into ‘looksmaxing,’ this is an urgent, repeating obsession. Until now there were only mirrors, other people’s subjective takes, or sketchy rating sites — nothing that returned, in numbers, ‘what exactly to fix to improve.’ FaceKit hit that gap: an iPhone TrueDepth 3D face scan measures interocular distance, symmetry, and various ratios, then translates them into a ‘score’ plus improvement tips (skincare, hydration, gym). The very anxiety young people feel daily — ‘what’s my face’s score?’ — was itself the market entry point.",
  },

  body: {
    free: {
      ja: "FaceKit(正式名「FaceKit - 3D Face Analysis」)は、顔を3Dスキャンして分析する“looksmaxing”アプリ。iPhoneのTrueDepthカメラ(Face IDと同じセンサー)で顔を立体的に読み取り、目の間隔・左右対称性・各種の比率を計測して、総合的な“顔の分析”とスコア、そしてスキンケアや生活習慣の改善提案を返す。運営元は本人のアプリスタジオMindmushで、iOSのユーティリティ/自己改善カテゴリに属する。\n\n作ったのはRafael(Raf)Kramer、19歳。個人でアプリを量産するスタジオMindmushを回し、報道では合計1,000万DL超・50本超のアプリを手がけてきたとされる。FaceKitはその1本だが、注目されたのはプロダクトそのものより“集客のやり方”だ。\n\nKramerは、人間のインフルエンサーにも有料広告にも一切頼らなかった。代わりに、画像生成ツール『Nano Banana』でリアルな人物アバターを作り、OpenAIの動画生成『Sora』で喋らせ・動かして、“実在しないインフルエンサー”を約40アカウント分TikTokに立ち上げた。数人の「クリッパー(切り抜き投稿者)」がこれらのアカウントを回してビフォーアフター系・バイラル系の短尺動画を量産し、合計で月1億回を超える再生を生んだ。結果、ローンチからおよそ2ヶ月で累計$100,000(粗利)、動画制作コストは月約$2,000、Appleの手数料を引いた純利益は月約$35,000に達したと報じられている。ピーク後は落ち着き、直近は月$17,000前後(TrustMRR)で推移する。\n\nつまりFaceKitは、『AIで作った顔(プロダクト)』を『AIで作った顔(インフルエンサー)』で売った——生成AIをプロダクトと集客の両側に使い切った、2026年らしい個人開発の縮図だ。",
      en: "FaceKit (full name ‘FaceKit – 3D Face Analysis’) is a ‘looksmaxing’ app that 3D-scans and analyzes your face. Using the iPhone’s TrueDepth camera (the same sensor behind Face ID), it reads your face in three dimensions, measures interocular distance, symmetry, and various ratios, and returns an overall ‘face analysis’ with a score plus skincare and lifestyle improvement tips. It’s published by the founder’s own app studio, Mindmush, in iOS utilities/self-improvement.\n\nIt was built by Rafael (Raf) Kramer, 19. He runs Mindmush, a studio that ships apps solo and, per reporting, has produced 10M+ downloads across 50+ apps. FaceKit is one of them — but what drew attention was less the product than *how it was marketed*.\n\nKramer leaned on no human influencers and no paid ads. Instead, he generated realistic human avatars with the image tool ‘Nano Banana,’ made them talk and move with OpenAI’s video model ‘Sora,’ and stood up ‘influencers who don’t exist’ across ~40 TikTok accounts. A few ‘clippers’ ran those accounts, mass-producing before/after and viral short videos that together generated 100M+ views a month. The result, as reported: ~$100,000 in cumulative gross sales about two months after launch, with video production costing ~$2,000/month and net profit after Apple’s cut around $35,000/month. After the peak it cooled to roughly $17,000/month recently (TrustMRR).\n\nIn other words, FaceKit sold ‘an AI-made face (the product)’ using ‘AI-made faces (the influencers)’ — a very 2026 snapshot of indie development that runs generative AI on both the product and the distribution side.",
    },
    premium: {
      ja: "【深掘り】FaceKitの核心は顔採点アプリであること以上に、“人間のインフルエンサーを、生成AIで丸ごと置き換えた広告工場”を19歳が一人で組んだ点にある。Rafael Kramerの手口を、順を追って分解する。\n\n■ 中核思想:集客チャネルそのものを合成する\n従来のUGC/インフルエンサー集客は「実在の人間クリエイターに配ってもらう」。Kramerはこの前提を外し、“配り手”そのものをAIで生成した。画像生成『Nano Banana』でリアルなアバター(架空の人物)を作り、OpenAIの動画生成『Sora』で喋らせ動かす。こうして“実在しないインフルエンサー”を約40アカウント、TikTokに常設した。人間なら交渉・ギャラ・スケジュールが要るところを、生成コストだけに畳んだ——月の制作費は約$2,000という桁だ。\n\n■ 分散×模倣:1つの当たりを40アカウントへ即コピー\n40アカウントは、数人の「クリッパー」がグループチャットで連携して運用する。肝は“当たりの即時横展開”だ。あるフォーマット(ビフォーアフター、リアクション、煽り系フック等)が突出して伸びたら、全員がすぐ自分のアカウントで同じ型を複製する。これにより(1)特定アカウントのBAN・失速リスクを分散し、(2)勝ち筋を人力の何十倍の速さで面展開し、(3)アルゴリズムのどのフックが刺さるかを多点で同時に学習できる。結果、合計で月1億回超という再生量を、広告費ゼロで叩き出した。\n\n■ 題材選び:looksmaxingという“燃えやすい”鉱脈\nテーマ選定も戦略の一部だ。looksmaxing(ルックス改善)は、若年層の強い不安・自己言及・論争性を併せ持つ“燃えやすい”題材で、ショート動画のコメント欄が荒れるほど再生が伸びる。『顔をスキャンして点数が出る』というフックは、視聴者の「自分は何点?」を即座に喚起し、動画→アプリDLの動機づけが短い。プロダクトのコアバリュー(採点)が、そのまま最強のサムネ/フックになっている。\n\n■ プロダクトの“もっともらしさ”:TrueDepthで数字を出す\nバズだけでは課金は続かない。FaceKitはiPhoneのTrueDepthカメラで実際に3Dスキャンし、対称性や比率を“計測値”として提示する。この「科学っぽさ(measured, not guessed)」が、単なる占い/ネタアプリとの差別化になり、スコアを上げたいユーザーを継続課金へ橋渡しする。マネタイズは週/月/年のサブスク階層で、無料で入口(スキャン+概略スコア)を見せ、詳細分析・改善提案を有料に置く設計だと報じられる(この特定アプリの正確な価格は本稿では断定しない)。\n\n■ 数字の作られ方と“季節性”\nローンチ後およそ2ヶ月で累計$100,000(粗利)、純利益は月約$35,000。ただしこの手のバイラル起点の売上は水物で、ピークが過ぎると落ちる——TrustMRRの追跡では直近は月$17,000前後だ。ここに正直な学びがある:AIインフルエンサー工場は“立ち上げの爆発力”は凄いが、放置すれば減衰する。継続には、当たりフォーマットの更新・新規アバターの投入・題材の乗り換えといった“工場の再稼働”が要る。\n\n■ スタジオという母体:Mindmushの連射力\nFaceKitは単発の幸運ではなく、Mindmushという“数を撃つ母体”から出た1本だ。50本超・累計1,000万DVというポートフォリオがあるからこそ、当たりの型(スキャン系フック×AIインフルエンサー配布)を次のアプリにも即転用できる。堀は「FaceKitというアプリ」ではなく、「合成インフルエンサーで安く大量露出を作る配布システム」に溜まっている。\n\n■ 影(あえて書く):合成集客の倫理と持続性\nこの手法には陰もある。“実在しない人物”が本物のように商品を薦めることの是非、AIスロップ(粗製濫造コンテンツ)へのプラットフォーム規制、そしてバズ依存ゆえの売上の不安定さだ。個人開発者にとっての持ち帰りは明快で、(1)生成AIは今や“作る側”だけでなく“配る側”のコストも桁で崩せる、(2)ただし合成バズは減衰する前提で、工場を回し続ける運用体力と、題材・フォーマットの更新こそが本当の競争優位になる、という2点だ。",
      en: "【Deep dive】FaceKit matters less as a face-rating app than as an ad factory a 19-year-old built solo — one that replaced human influencers wholesale with generative AI. Here is Rafael Kramer’s method, taken apart step by step.\n\n■ Core idea: synthesize the distribution channel itself. Classic UGC/influencer growth means ‘real human creators distribute for you.’ Kramer dropped that premise and generated the *distributors* themselves with AI. He made realistic avatars (fictional people) with the image tool ‘Nano Banana,’ then made them talk and move with OpenAI’s ‘Sora,’ standing up ‘influencers who don’t exist’ across ~40 permanent TikTok accounts. Where humans would need negotiation, fees, and scheduling, he collapsed it to generation cost alone — on the order of ~$2,000/month in production.\n\n■ Decentralize × imitate: instantly copy one hit across 40 accounts. The 40 accounts are run by a few ‘clippers’ coordinating in a group chat. The crux is *instant lateral replication*: when a format (before/after, reaction, provocative hook, etc.) breaks out, everyone immediately clones that pattern on their own accounts. This (1) spreads the risk of any one account being banned or stalling, (2) fans a winning angle out across the surface dozens of times faster than a human could, and (3) learns which algorithmic hooks land, at many points simultaneously. The result: 100M+ views a month, at zero ad spend.\n\n■ Topic selection: looksmaxing, a ‘flammable’ vein. The theme is part of the strategy. Looksmaxing carries young people’s acute anxiety, self-reference, and controversy — a ‘flammable’ subject where a heated comment section actually lifts reach. The hook ‘scan your face and get a score’ instantly triggers the viewer’s ‘what’s *my* score?’, shortening the path from video to install. The product’s core value (scoring) doubles as its strongest thumbnail/hook.\n\n■ Product ‘plausibility’: put numbers on it with TrueDepth. Virality alone won’t keep people paying. FaceKit actually 3D-scans with the iPhone TrueDepth camera and presents symmetry and ratios as *measured values*. That ‘science-y’ feel (measured, not guessed) differentiates it from a mere novelty/horoscope app and bridges score-chasers into recurring subscriptions. Monetization is reported to use weekly/monthly/annual tiers — free at the door (scan + rough score), detailed analysis and improvement tips behind the paywall (we don’t assert this specific app’s exact prices here).\n\n■ How the numbers were built — and their ‘seasonality.’ ~$100,000 cumulative gross in about two months, ~$35,000/month net profit. But virality-sourced revenue is fickle and drops once the peak passes — TrustMRR tracks ~$17,000/month recently. There’s an honest lesson here: an AI-influencer factory has spectacular *launch* force but decays if left alone. Sustaining it requires ‘restarting the factory’ — refreshing winning formats, injecting new avatars, rotating topics.\n\n■ The studio behind it: Mindmush’s rate of fire. FaceKit isn’t a one-off stroke of luck; it came out of Mindmush, a ‘shoot-a-lot’ parent studio. Precisely because there’s a portfolio of 50+ apps and 10M+ downloads, a winning template (scan-style hooks × AI-influencer distribution) can be redeployed to the next app immediately. The moat accrues not in ‘the app called FaceKit’ but in ‘a distribution system that manufactures cheap mass exposure with synthetic influencers.’\n\n■ The shadow side (worth stating): ethics and durability of synthetic growth. This method has a dark side: the propriety of ‘people who don’t exist’ recommending products as if real, platform crackdowns on AI ‘slop,’ and revenue instability from depending on virality. The takeaway for indie builders is clear: (1) generative AI can now collapse the cost not only of *building* but of *distributing* by an order of magnitude; (2) but assume synthetic virality decays — the real edge is the operational stamina to keep the factory running and to keep refreshing topics and formats.",
    },
  },

  playbook: {
    ja: [
      "“配り手”そのものをAIで作る:Nano Bananaでリアルなアバター(架空の人物)を生成し、Sora等で喋らせて動画化する",
      "実在しないインフルエンサーを数十アカウント(FaceKitは約40)常設し、TikTokに量産投稿する",
      "数人のクリッパーをグループチャットで連携させ、当たったフォーマットを全アカウントへ即コピーする",
      "BAN・失速に備えてアカウントを分散し、勝ち筋は人力の何十倍速で面展開する(月1億回再生を広告費ゼロで作る)",
      "“燃えやすい”題材(looksmaxing=強い不安×論争性)を選び、プロダクトのコア価値(顔採点)をそのまま動画のフックにする",
      "プロダクト側はTrueDepthの実測値で“科学っぽさ”を出し、無料スキャン→有料の詳細分析でサブスクへ橋渡しする",
      "合成バズは減衰する前提で、フォーマット更新・新アバター投入・題材の乗り換えで“工場”を回し続ける",
    ],
    en: [
      "Generate the distributor itself with AI: make realistic avatars (fictional people) with Nano Banana and animate them into video with Sora, etc.",
      "Stand up dozens of ‘influencers who don’t exist’ (FaceKit ran ~40) and mass-post them on TikTok",
      "Coordinate a few clippers in a group chat and instantly copy any winning format across all accounts",
      "Spread accounts against bans/stalls and fan winning angles out dozens of times faster than humans (100M+ views/month at zero ad spend)",
      "Pick a ‘flammable’ topic (looksmaxing = acute anxiety × controversy) and use the product’s core value (face scoring) directly as the video hook",
      "On the product, add ‘science-y’ credibility with real TrueDepth measurements; bridge free scan → paid detailed analysis into a subscription",
      "Assume synthetic virality decays — keep the ‘factory’ running by refreshing formats, injecting new avatars, and rotating topics",
    ],
  },

  failureNote: {
    ja: "この事例には陰もある。第一に持続性——バイラル起点の売上は水物で、ピーク後は落ちる。純利益が月約$35,000だった時期を経て、TrustMRRの追跡では直近は月$17,000前後まで落ち着いた。第二に倫理・規制——“実在しない人物”が本物のように商品を薦める手法は、AIスロップ(粗製濫造)へのプラットフォーム規制や信頼性の問題と隣り合わせだ。派手な立ち上げ数字の裏で、合成インフルエンサー工場は放置すれば減衰する。継続には、当たりフォーマットの更新・新アバターの投入・題材の乗り換えという地道な“再稼働”が要る——爆発力と持続性は別物だという教訓でもある。",
    en: "This case has a shadow side. First, durability — virality-sourced revenue is fickle and drops after the peak. After a stretch of ~$35,000/month in net profit, TrustMRR tracks it settling to roughly $17,000/month recently. Second, ethics and regulation — having ‘people who don’t exist’ recommend products as if real sits next to platform crackdowns on AI ‘slop’ and questions of trust. Behind the flashy launch numbers, a synthetic-influencer factory decays if left alone. Sustaining it takes the unglamorous work of ‘restarting’ — refreshing winning formats, injecting new avatars, rotating topics. It’s a lesson that launch force and staying power are different things.",
  },

  publishedAt: "2026-07-02",
  featured: true,
} satisfies Case;
