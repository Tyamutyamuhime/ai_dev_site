import type { Case } from "../types";

// 事実の典拠(一次情報を優先・複数ソースで照合):
//  - 創業者 Louis-David Paul-Hus 本人の X 投稿(24歳・カナダのソロ起業家であることを本人が明言):
//    https://x.com/LouisDavidPH/status/1966492652829905119（"Today is my 24th Birthday! ... Canadian solopreneur community ..."）
//    → この status URL により FounderPortrait(本人アバター)と SourceTweets(公式埋め込み)が自動表示される。
//  - 本人 X プロフィール: https://x.com/LouisDavidPH（@LouisDavidPH / ポートフォリオ louisdavidpaulhus.com）
//  - App Store 公式リスティング(アプリ概要・開発者 "Viral Tech Inc."・500,000+ ユーザーの自社表記):
//    https://apps.apple.com/us/app/glowup-makeup-beauty/id6736916284
//  - Adapty 公式ケーススタディ(本人 Louis-David Paul-Hus の直接引用つき。MRR/ARR・FlutterFlow・ペイウォールA/Bの一次的記録):
//    https://adapty.io/case-studies/glowup/
//  - 本人出演の事例動画 "My mobile app made $800K in 365 days"(Starter Story / YouTube。$0広告・TikTok起点を本人が説明):
//    https://www.starterstory.com/Louisv2 ・ https://www.youtube.com/watch?v=LYdJ3dfNCVs
//  - 元ニュースレター(二次・発見リスト): Yuma Ueno(ウマたん)Medium 記事(クリエイターへの株式付与・約10本の失敗・"AI×メイク")。
//
// 数値メモ(換算と相互チェック):
//  - 主ソートキー mrrUsd:Adapty 公式ケーススタディで「MRR $30K → 約$100K / ARR $400K → $1.2M」。
//    ARR $1.2M ÷ 12 = MRR $100K と一致するため mrrUsd = 100_000, revenueType "mrr"。
//  - 累計売上「$800K を 365日(=約1年)」は本人出演の Starter Story 動画タイトル/本人発言。periodMonths = 12、revenueRaw に併記。
//  - users:App Store 自社表記と Adapty が「500,000+ ユーザー」で一致 → 500_000(下限として採用)。
//    ※ Medium(二次)は「2,000,000 ユーザー / 70,000 課金」と記すが、一次側(App Store/Adapty)の 500,000+ と食い違うため、
//      食い違う 2M/70K は本文・数値に採用しない(一次優先・捏造禁止)。
//  - launchYear:App Store のアプリID(6736916284)から 2024 年後半の公開と判断し 2024。正確な公開日は一次で確定できないため日付は記載しない。
//  - 「rounds.com へ $150,000 で売却」等の“イグジット”情報は検索上で日付矛盾(2018年表記)があり一次で裏取りできなかったため、採用しない。
//
// 同名の別アプリに注意(本事例から除外):"Glow AI"(スキンケア系)/ "Glam Up" / "Glow Up: Makeup & Beauty"(別ID/別開発者)
//  等が多数存在する。本件は Viral Tech Inc. 提供・Louis-David Paul-Hus 開発の "GlowUp - Makeup & Beauty"(id6736916284)に限定。
//
// 文章はすべて自分の言葉で再構成。元ニュースレターは参考のみ(焼き直し禁止)。

export const glowup = {
  id: "glowup",
  slug: "glowup",

  personName: "Louis-David Paul-Hus",
  appName: "GlowUp",
  appUrl: "https://apps.apple.com/us/app/glowup-makeup-beauty/id6736916284",
  sources: [
    {
      url: "https://x.com/LouisDavidPH/status/1966492652829905119",
      title: {
        ja: "創業者 Louis-David Paul-Hus 本人のX投稿(24歳・カナダのソロ起業家と明言)",
        en: "Founder Louis-David Paul-Hus’s own X post (states he is a 24-year-old Canadian solopreneur)",
      },
      kind: "primary",
    },
    {
      url: "https://x.com/LouisDavidPH",
      title: {
        ja: "創業者 Louis-David Paul-Hus 本人のX(@LouisDavidPH)",
        en: "Founder Louis-David Paul-Hus on X (@LouisDavidPH)",
      },
      kind: "primary",
    },
    {
      url: "https://apps.apple.com/us/app/glowup-makeup-beauty/id6736916284",
      title: {
        ja: "GlowUp 公式App Storeリスティング(開発元 Viral Tech Inc.・機能・500,000+ユーザー)",
        en: "GlowUp official App Store listing (developer Viral Tech Inc., features, 500,000+ users)",
      },
      kind: "primary",
    },
    {
      url: "https://adapty.io/case-studies/glowup/",
      title: {
        ja: "Adapty 公式ケーススタディ(本人引用つき。MRR/ARR・FlutterFlow・ペイウォールA/B)",
        en: "Adapty official case study (with founder quotes: MRR/ARR, FlutterFlow, paywall A/B)",
      },
      kind: "primary",
    },
    {
      url: "https://www.starterstory.com/Louisv2",
      title: {
        ja: "本人出演の事例動画「$800Kを365日で」(Starter Story)",
        en: "Founder’s case-study video “$800K in 365 days” (Starter Story)",
      },
      kind: "secondary",
    },
    {
      url: "https://medium.com/@yumaueno/the-man-who-built-an-ai-makeup-app-that-earned-over-800k-million-in-just-one-year-from-launch-7b3b2269c179",
      title: {
        ja: "二次まとめ(発見リスト): Yuma Ueno による解説記事",
        en: "Secondary writeup (discovery source): explainer by Yuma Ueno",
      },
      kind: "secondary",
    },
  ],

  mrrUsd: 100_000,
  revenueType: "mrr",
  periodMonths: 12,
  users: 500_000,
  launchYear: 2024,

  category: "beauty",
  techStack: [],
  marketingTags: ["tiktok", "shorts", "influencer", "instagram", "revShare", "paywallOpt"],

  title: {
    ja: "約10本のアプリ全滅から「撮った理想メイクをAIが自分の顔に再現」するGlowUpへ — TikTok広告費ゼロで1年$800K・ARR$1.2Mに乗せたカナダの24歳ソロ開発者",
    en: "From ~10 Failed Apps to GlowUp — How a 24-Year-Old Solo Canadian Builder Used $0 in TikTok Ad Spend to Reach $800K in a Year and $1.2M ARR",
  },

  summary: {
    ja: "好きなメイクの写真を上げるとAIが自分の顔に再現し、再現用コスメまで提案するメイクアプリGlowUp。約10本の失敗を経たLouis-David Paul-Husが、広告費ゼロのTikTok起点で立ち上げ、1年で売上$800K・ARR$1.2Mに到達した。",
    en: "GlowUp is a makeup app: upload a look you love, AI applies it to your own face and suggests the products to recreate it. After ~10 flops, Louis-David Paul-Hus launched it with $0 ad spend via TikTok and reached $800K in a year and $1.2M ARR.",
  },

  revenueRaw: {
    ja: "本人出演の事例動画では「365日で売上$800K」。Adapty公式ケーススタディではペイウォール最適化でMRRが$30K→約$100K、ARRが$400K→$1.2Mに拡大。広告費はほぼゼロ(TikTokオーガニック中心)。",
    en: "In his own case-study video: “$800K in 365 days.” Per Adapty’s official case study, paywall optimization grew MRR from $30K to ~$100K and ARR from $400K to $1.2M. Almost no ad spend (mostly organic TikTok).",
  },

  painPoint: {
    ja: "「このメイク可愛い、でも自分の顔だとどうなる?」——SNSで理想のメイクを見ても、自分に似合うか、何を買えば再現できるかが分からず止まる。これがコスメ購買の最大の摩擦だ。GlowUpはこの一点を突いた:好きなメイクの写真を1枚上げれば、AIがそれを“自分の顔”に乗せてプレビューし、再現に必要なコスメまで提案する。痛点(似合うか分からない/何を買えばいいか分からない)が、そのままプロダクトの入口になっている。",
    en: "“That makeup is cute — but how would it look on me?” Scrolling social, people see a look they love but stall: will it suit my face, and what do I buy to recreate it? That uncertainty is the core friction in cosmetics buying. GlowUp targets exactly that: upload one photo of a look you like, and AI previews it on *your* face and suggests the products to recreate it. The pain (will it suit me / what do I buy) is itself the product’s entry point.",
  },

  body: {
    free: {
      ja: "GlowUpは、好きなメイクの写真をアップロードすると、AIがそのメイクを自分の顔に再現してプレビューし、現実で再現するためのコスメまで提案してくれるアプリ。バーチャル試着・自分の顔立ちに合わせたメイク手順・肌トーンに基づく商品レコメンドが中心で、運営は Viral Tech Inc.、App Store上では「#1 AIメイクアシスタント」を掲げ、累計50万人以上のユーザーが使っているとされる。\n\n作ったのはカナダのソロ開発者 Louis-David Paul-Hus(@LouisDavidPH)。本人がXで明かしている通り24歳のソロ起業家で、GlowUp以前に約10本のアプリを出して“全部失敗”していた。その彼が、作り方の発想を180度変えて当てたのがGlowUpだ。変えたのは技術ではなく『最初に集客の勝ち筋(TikTok)を決めてからプロダクトを作る』という順番——アプリストアに置けば見つけてもらえる時代ではない、という前提に立った。\n\n技術的にはノーコード/ローコードのFlutterFlowでアプリを構築し、課金まわりは当初RevenueCatを試したがFlutterFlowとの相性で詰まり、Adaptyへ移行している。派手な自社モデルを学習させるのではなく、既存のAIをメイク体験へ“翻訳”し、ノーコードで素早く形にして検証する——個人開発者がそのまま真似できる構成だ。\n\n伸ばし方は徹底して『広告費ゼロのTikTok』。本人出演の事例動画のタイトルがそのまま要約になっている——「My mobile app made $800K in 365 days(モバイルアプリが365日で$800Kを稼いだ)」。ここに、課金の取りこぼしを潰すペイウォール最適化(後述)が掛け算され、ARRは$1.2Mまで伸びた。",
      en: "GlowUp lets you upload a photo of a makeup look you love; AI then previews that look on your own face and suggests the cosmetics you’d need to recreate it for real. The core is virtual try-on, makeup steps tailored to your features, and product recommendations based on skin tone. It’s operated by Viral Tech Inc., bills itself on the App Store as the “#1 AI makeup assistant,” and reports 500,000+ users.\n\nIt was built by solo Canadian developer Louis-David Paul-Hus (@LouisDavidPH). As he states on X, he’s a 24-year-old solopreneur, and before GlowUp he had shipped roughly ten apps that all failed. What changed wasn’t his tech but his *order of operations*: decide the distribution wedge (TikTok) first, then build the product — on the premise that ‘ship it to the store and they’ll find you’ no longer works.\n\nTechnically he built the app in the no-code/low-code tool FlutterFlow. He first tried RevenueCat for subscriptions but hit friction with FlutterFlow and migrated to Adapty. Rather than training a flashy in-house model, he ‘translated’ existing AI into a makeup experience and shipped fast with no-code to validate — a stack an indie builder can copy directly.\n\nGrowth was relentlessly ‘TikTok at $0 ad spend.’ The title of his own case-study video is the summary: “My mobile app made $800K in 365 days.” Multiply that by paywall optimization that plugged the leaks in monetization (below), and ARR climbed to $1.2M.",
    },
    premium: {
      ja: "【深掘り】GlowUpの本質は『順番の設計』にある。約10本失敗した開発者が、技術ではなく“どの順で何をやるか”を変えて当てた。再現可能な形に分解する。\n\n■ 失敗の共通点を反転させた:作ってから配る、をやめる\n以前の約10本は『良いものを作れば見つかる』という、作ってから配る順番だった。アプリストアに置くだけでは誰にも見つからない——この当たり前を直視し、Louisは順番を反転させた。すなわち『先に配れる場所(TikTok)と刺さる見せ方を決め、それに最適化したプロダクトを作る』。GlowUpの“好きなメイクを撮る→AIが自分の顔に再現”という体験そのものが、TikTokで一目で伝わる/真似したくなるように設計されている。順番を変えるだけで、同じ実装力でも結果が一変する好例だ。\n\n■ 集客は広告費ゼロのTikTokオーガニックに全振り\n初動は有料広告ではなく、TikTokのオーガニック投稿に振り切った。「撮るだけで自分の顔に理想メイクが乗る」という体験はビフォー/アフターが一瞬で伝わり、短尺動画と相性が極めて良い。CACゼロで需要シグナルを取りながら“どの見せ方がバズるか”を自分の手で学習でき、その勝ち筋を次の拡散(クリエイター)へそのまま渡せる。本人出演動画のタイトル「365日で$800K」は、この$0集客が土台にあることを示している。\n\n■ クリエイターには現金でなく“持分(エクイティ)”を渡した\n拡散をスケールさせる段で、Louisは現金報酬ではなく株式(持分)でTikTok/Instagramのクリエイターと組んだ、と二次まとめで伝えられている。現金が乏しいソロ開発者にとって、これは(1)先払いの広告費を出さずに大量の発信者を巻き込める (2)クリエイター側に“伸ばすほど自分も得をする”インセンティブが生まれ、単発の広告投稿より本気の発信になりやすい、という二重の効き目がある。資金力ではなく『アップサイドの分配』で初期グロースのエンジンを作った発想だ。\n\n■ 取りこぼしを潰す:ペイウォール最適化でMRRを3倍超に\nグロースの裏でLouisが詰めたのが課金導線だ。Adapty公式ケーススタディによれば、当初はユーザーの“わずか20%しかペイウォールに到達していなかった”。表示位置(プレースメント)をA/Bで検証して最適点を選んだ結果、MRRは$30Kから約$100Kへ跳ね上がった。集客をいくら頑張っても、見せていない課金画面は売上にならない——同じ流入でも“見せ方”で3倍超の差が出るという、極めて実利的な学びだ。\n\n■ 価格は『選択肢を増やしすぎない』が正解だった\nさらにLouisは、最初に複数の価格プランを並べると逆に転換率が下がることを発見した(本人の仮説では、選択肢が多すぎてユーザーが迷うため)。複数回の実験を経て、高すぎず安すぎない“中庸の一点”に価格を寄せたところで最良の結果が出た。価格は『高くするほど儲かる』でも『安くするほど売れる』でもなく、迷いを減らす設計問題だ、という示唆。これらの最適化が積み上がってARRは$400Kから$1.2Mへ拡大した。\n\n■ 技術は“作る”より“翻訳する”/ノーコードで速く回す\nGlowUpはFlutterFlowで構築され、課金はRevenueCatで詰まった後Adaptyへ移行した。巨大モデルを自前で学習させるのではなく、既存のAIをメイク体験へ翻訳し、ノーコードで素早く出して検証する——この“速く小さく回す”運用が、約10本の失敗を糧にできた理由でもある。個人開発の堀は最先端技術そのものではなく、(順番設計 × $0集客 × 課金最適化)の掛け算にある。",
      en: "【Deep dive】The essence of GlowUp is *sequencing*. A builder with ~10 failures behind him won not by changing his tech but by changing the order in which he did things. Here is the reproducible breakdown.\n\n■ He inverted the common thread of his failures: stop building-then-distributing. His prior ~10 apps followed the ‘build something good and they’ll find it’ order. But shipping to the store finds no one. Facing that plainly, Louis inverted the sequence: *first* pick the place you can distribute (TikTok) and the angle that lands, *then* build a product optimized for it. GlowUp’s core experience — snap a look you love, AI applies it to your own face — is itself designed to be instantly legible and imitable on TikTok. Same engineering ability, opposite outcome, just from reordering.\n\n■ Distribution went all-in on $0 organic TikTok. He started not with paid ads but with organic TikTok posts. ‘Your ideal makeup, applied to your own face, just by taking a photo’ reads as an instant before/after — perfect for short-form video. At zero CAC he could read demand and personally learn *which angle goes viral*, then hand that winning formula to the next stage (creators). The title of his own video, “$800K in 365 days,” rests on this $0 acquisition base.\n\n■ He paid creators in equity, not cash. To scale distribution, Louis is reported to have partnered with TikTok/Instagram creators using equity rather than cash payments. For a cash-poor solo founder this works on two levels: (1) he could enlist many creators without fronting ad spend, and (2) creators gained ‘the more it grows, the more I gain’ incentives, making their posts more committed than one-off paid ads. He built the early growth engine on *sharing the upside*, not on a marketing budget.\n\n■ Plug the leaks: paywall optimization more than tripled MRR. Behind the growth, Louis tightened monetization. Per Adapty’s official case study, only ~20% of users were even *reaching* the paywall at first. After A/B testing placement and picking the optimum, MRR jumped from $30K to nearly $100K. No matter how hard you drive traffic, a paywall users never see earns nothing — the same inflow can yield a 3×+ difference purely from how it’s shown.\n\n■ Pricing: ‘don’t offer too many choices’ was the answer. He also found that presenting multiple price plans up front actually *lowered* conversion (his hypothesis: too many options overwhelm users). After several experiments, converging on a single not-too-high, not-too-low middle price produced the best results. Pricing isn’t ‘charge more to earn more’ or ‘charge less to sell more’ — it’s a design problem of reducing hesitation. Stacked together, these optimizations grew ARR from $400K to $1.2M.\n\n■ Tech: ‘translate,’ don’t ‘build’ — and iterate fast with no-code. GlowUp was built in FlutterFlow; subscriptions moved to Adapty after RevenueCat proved a poor fit. Instead of training a giant model, he translated existing AI into a makeup experience and shipped fast with no-code to validate. That ‘small, fast loops’ operating mode is also why ~10 failures became fuel. The indie moat isn’t frontier tech itself — it’s the product of (sequencing × $0 distribution × monetization tuning).",
    },
  },

  playbook: {
    ja: [
      "順番を反転する:作ってから配るのをやめ、先に配れる場所(TikTok)と刺さる見せ方を決めてからプロダクトを作る",
      "ビフォー/アフターが一瞬で伝わる体験にする(好きなメイクを撮る→AIが自分の顔に再現)——短尺動画と相性の良いコアを設計",
      "初動は広告費ゼロのTikTokオーガニックに全振りし、CACゼロで“バズる見せ方”を自分の手で学習する",
      "拡散段ではクリエイターに現金でなく持分(エクイティ)を渡し、先払い広告費なしで大量の発信者を巻き込む",
      "ペイウォール到達率をまず測る(GlowUpは当初20%)→表示位置をA/Bして最適化(MRR $30K→約$100K)",
      "価格は選択肢を増やしすぎない。中庸の一点に寄せて迷いを減らし転換率を上げる",
      "技術は自作より“翻訳”:既存AIをノーコード(FlutterFlow)で素早く形にして小さく速く検証する",
    ],
    en: [
      "Invert the order: stop building-then-distributing; pick the channel (TikTok) and the angle first, then build for it",
      "Make the core an instant before/after (snap a look → AI applies it to your face) — designed for short-form video",
      "Go all-in on $0 organic TikTok at first, learning which angle goes viral yourself at zero CAC",
      "To scale, pay creators in equity, not cash — enlist many promoters with no upfront ad spend",
      "Measure paywall reach first (GlowUp started at ~20%), then A/B the placement (MRR $30K → ~$100K)",
      "Don’t offer too many price options; converge on a single middle price to cut hesitation and lift conversion",
      "Translate, don’t build: ship existing AI fast with no-code (FlutterFlow) and validate in small, fast loops",
    ],
  },

  failureNote: {
    ja: "GlowUpは“いきなり当てた一発”ではない。本人いわく、これ以前に約10本のアプリを出して全て失敗している。違いを生んだのは才能ではなく『作ってから配る』順番を捨てたこと——失敗の山が、先に集客を設計するという学びの土台になった。",
    en: "GlowUp wasn’t a first-try hit. By his own account, Louis shipped roughly ten apps before it and all failed. What made the difference wasn’t talent but abandoning the ‘build-then-distribute’ order — the pile of failures became the foundation for learning to design distribution first.",
  },

  publishedAt: "2026-06-27",
  featured: false,
} satisfies Case;
