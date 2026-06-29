import type { Case } from "../types";

// 事実の典拠(一次・二次情報で裏取り):
//  - 創業者 Jay Raavi (Vijay Raavi) 本人のX投稿(ソロ旅の現場): https://x.com/jayvraavi/status/1920498501173018654
//  - 本人 LinkedIn「nomadtable just hit 1 million users」: https://www.linkedin.com/posts/vijayraavi_nomadtable-just-hit-1-million-users-under-activity-7436811874249179136-naIW
//  - 本人 LinkedIn「500,000 users still feels surreal」: https://www.linkedin.com/posts/vijayraavi_500000-users-still-feels-surreal-activity-7401383669535600640-aYYU
//  - 公式サイト nomadtable.app / App Store(id6736921913, "nomadtable: travel friends")/ Google Play(jayraavi.SoloMatch)
//  - 本人出演 The Superwall Podcast「Copy This UGC Strategy, It'll Make Your App Go Viral」(本人インタビュー)
//  - Medium (Yuma Ueno, 2026-04):「1M Downloads & $65K/Month as a Solo Developer」(数字の二次まとめ)
//  - Stormy AI Blog:「The Nomad Table UGC Strategy — 44 Million View Growth Machine」(60クリエイター・月44M再生の二次まとめ)
//
// 数値メモ:
//  - 収益は $65,000/月(複数ソースで一致)を MRR として採用 → mrrUsd: 65_000, revenueType: "mrr"。
//  - 本人Xバイオは「1M+ users / ~2M downloads / 400M+ organic views / $1M ARR / $2M run rate(約1年)」と表記。
//    $65K/月(≈$780K ARR)と本人の「$1M ARR / $2M run rate」表記は一致しないため、headlineは保守的に $65K/月とし、
//    本人の主張は revenueRaw / body 内で出典つきで併記(食い違いは明示)。run rate はブッキング/ピーク月の可能性。
//  - users: 100万(本人LinkedInの「1 million users」)。ダウンロードは約200万(本人バイオ)。
//  - periodMonths: ローンチ(2025年3月頃, APK公開・"empty map"投稿が2025-03-29)→ 100万DL到達が同年12月下旬 ≈ 9ヶ月。
//  - 早期の数字: 6ヶ月未満で 75K MAU / $18K MRR(本人出演ポッドキャストのエピソード説明)。

export const nomadtable = {
  id: "nomadtable",
  slug: "nomadtable",

  personName: "Jay Raavi",
  appName: "nomadtable",
  appUrl: "https://nomadtable.app",
  sources: [
    {
      url: "https://x.com/jayvraavi/status/1920498501173018654",
      title: {
        ja: "創業者 Jay Raavi 本人のX投稿(ソロ旅の現場から)",
        en: "Founder Jay Raavi’s own post on X (from the road, solo travel)",
      },
      kind: "primary",
    },
    {
      url: "https://www.linkedin.com/posts/vijayraavi_nomadtable-just-hit-1-million-users-under-activity-7436811874249179136-naIW",
      title: {
        ja: "本人 LinkedIn:nomadtable が100万ユーザー突破の告知",
        en: "Founder LinkedIn: nomadtable hits 1 million users",
      },
      kind: "primary",
    },
    {
      url: "https://www.linkedin.com/posts/vijayraavi_500000-users-still-feels-surreal-activity-7401383669535600640-aYYU",
      title: {
        ja: "本人 LinkedIn:50万ユーザー到達の投稿",
        en: "Founder LinkedIn: reaching 500,000 users",
      },
      kind: "primary",
    },
    {
      url: "https://apps.apple.com/us/app/nomadtable-travel-friends/id6736921913",
      title: {
        ja: "App Store 公式リスティング(nomadtable: travel friends)",
        en: "Official App Store listing (nomadtable: travel friends)",
      },
      kind: "primary",
    },
    {
      url: "https://nomadtable.app",
      title: { ja: "nomadtable 公式サイト", en: "nomadtable official site" },
      kind: "primary",
    },
    {
      url: "https://open.spotify.com/episode/5VSmAAlnKCvgmB7rQVtksJ",
      title: {
        ja: "本人出演 The Superwall Podcast(UGC戦略を本人が解説)",
        en: "Founder on The Superwall Podcast (his UGC strategy, first-hand)",
      },
      kind: "primary",
    },
    {
      url: "https://stormy.ai/blog/nomad-table-ugc-strategy-growth-machine",
      title: {
        ja: "Stormy AI:nomadtable のUGC戦略分解(60クリエイター・月44M再生)",
        en: "Stormy AI: nomadtable UGC strategy breakdown (60 creators, 44M views/mo)",
      },
      kind: "secondary",
    },
    {
      url: "https://medium.com/@yumaueno/how-jay-raavi-built-nomadtable-to-1m-downloads-65k-month-as-a-solo-developer-1ad81dc6d411",
      title: {
        ja: "Medium(Yuma Ueno):100万DL・月$65kの分解記事",
        en: "Medium (Yuma Ueno): 1M downloads & $65K/month breakdown",
      },
      kind: "secondary",
    },
  ],

  mrrUsd: 65_000,
  revenueType: "mrr",
  periodMonths: 9,
  users: 1_000_000,
  launchYear: 2025,

  category: "social",
  techStack: ["superwall"],
  marketingTags: ["shorts", "tiktok", "instagram", "influencer", "paywallOpt"],

  title: {
    ja: "Amazonを辞めて1人で作ったnomadtable —「ソロ旅で隣の旅人とつながる」アプリが約9ヶ月で100万ユーザー・月$65kに到達するまで",
    en: "Quit Amazon, Built It Solo — How nomadtable’s “Meet the Traveler Next to You” App Reached 1M Users and $65K/Month in ~9 Months",
  },

  summary: {
    ja: "元AmazonエンジニアのJay Raaviが1人で作ったソロ旅向けソーシャルアプリ。近くの旅人とリアルタイムでマッチして一緒に活動できる。外部資金・社員ゼロで、約9ヶ月で100万ユーザー、月$65kに到達。成長エンジンは本人が設計したUGC(短尺動画)の量産マシン。",
    en: "A solo-travel social app built single-handedly by ex-Amazon engineer Jay Raavi: match with travelers nearby in real time and do activities together. With no funding and no employees, it reached 1M users and $65K/month in ~9 months — powered by a short-form UGC machine he designed himself.",
  },

  revenueRaw: {
    ja: "月商 約$65,000(複数ソースで一致)。100万ユーザー / 累計ダウンロード約200万 / オーガニック再生 累計4億超は本人の公表値。本人はXバイオで『約1年で $1M ARR / $2M run rate』とも記載(月$65k=年$780k規模との差はブッキングやピーク月の可能性があり、ここでは保守的に月$65kを採用)。早期は6ヶ月未満で 75K MAU・$18K MRR。すべてブートストラップ・社員ゼロ。",
    en: "≈$65,000/month (consistent across sources). 1M users / ~2M cumulative downloads / 400M+ organic views are the founder’s own figures. His X bio also states ‘$1M ARR / $2M run rate in ~1 year’ (the gap vs. $65K/mo ≈ $780K ARR likely reflects bookings or a peak month; we use the conservative $65K/mo here). Earlier: 75K MAU and $18K MRR in under six months. All bootstrapped, zero employees.",
  },

  painPoint: {
    ja: "『ソロ旅は自由だけど、夜になると話す相手が誰もいない』——これは旅好きなら一度は刺さる普遍的な孤独だ。Jay自身、ホテルで1人きりの夜に『近くにいる他の旅人と簡単につながれたら』と痛感したのが出発点。既存のSNSやマッチングは“知り合いを探す/恋愛”が前提で、『今この街にいる旅人と、今日この活動を一緒にやる』という即時性の体験が空白だった。nomadtableはその一点——『今・ここ・近く』の旅人マッチ——に絞ってプロダクトを作った。",
    en: "‘Solo travel is freedom — until night falls and there’s no one to talk to.’ That loneliness is near-universal for anyone who travels. Jay’s own starting point was a solo night in a hotel, wishing he could easily connect with other travelers nearby. Existing social apps and matching services assume ‘find people you know’ or dating; the gap was the *immediacy* of ‘meet a traveler who is in this city right now and do this activity today.’ nomadtable built the product around exactly that one thing: here-and-now matching with nearby travelers.",
  },

  body: {
    free: {
      ja: "nomadtableは、近くにいるソロ旅行者どうしをリアルタイムでマッチし、一緒にアクティビティをしたりグループチャットでつながれるソーシャルアプリ。地図上に『今この街にいる旅人』や『これから作られる活動』が並び、気軽に参加できるのがコア体験で、iOS(App Store: nomadtable: travel friends)とAndroid(Google Play)で配信されている。\n\n作ったのはJay Raavi(Vijay Raavi)1人。Amazon(AWS)でコードを書いていたエンジニアで、世界を旅する中で『ホテルで1人きりの夜、近くの旅人と簡単につながれない』という不満を強烈に感じ、本業を辞めてnomadtableを立ち上げた。共同創業者も社員もいないソロ開発で、外部資金(VC)も入れていない。\n\nアプリ本体は無料で、プレミアムの『Nomadtable Plus』(週/月/年のサブスク)が収益源。Plusでは“近くの旅人の全リスト表示”“プロフィールの上位表示(ブースト)”“AIサジェストの無制限”“プロフィール閲覧通知”などのアンロックが用意される。ペイウォールの最適化にはSuperwallを使っている(本人がSuperwallのポッドキャストで戦略を解説)。\n\n2025年3月頃のローンチから数字は急加速した。6ヶ月未満で月間アクティブ75,000人・$18k MRR、50万ユーザー、そして同年12月下旬には『約9ヶ月で100万ユーザー』に到達(本人がLinkedInで節目ごとに公表)。累計ダウンロードは約200万、オーガニック再生は累計4億超、現在は月商 約$65,000——これらをたった1人で、広告代理店も社員も使わずに作り上げた。その成長の心臓部が、次に分解する『本人設計のUGCマシン』だ。",
      en: "nomadtable is a social app that matches nearby solo travelers in real time so they can do activities together and connect in group chats. The core experience is a map of ‘travelers who are in this city right now’ and ‘activities about to happen’ that you can join in a tap. It ships on iOS (App Store: nomadtable: travel friends) and Android (Google Play).\n\nIt was built entirely by one person, Jay Raavi (Vijay Raavi). A former engineer who wrote code at Amazon (AWS), he felt the pain acutely while traveling the world — alone in a hotel at night, unable to easily connect with travelers nearby — and quit his job to build nomadtable. No co-founder, no employees, and no VC money.\n\nThe app is free; the premium ‘Nomadtable Plus’ (weekly/monthly/annual subscription) is the revenue source. Plus unlocks things like the full list of nearby travelers, profile boost (priority placement), unlimited AI suggestions, and profile-view notifications. Paywall optimization runs on Superwall (he detailed his strategy on the Superwall podcast).\n\nFrom the ~March 2025 launch the numbers accelerated fast: 75,000 monthly actives and $18K MRR in under six months, 500K users, and by late December that year ‘1 million users in about 9 months’ (he announced each milestone on LinkedIn). Cumulative downloads are ~2M, organic views 400M+, and revenue is now ≈$65,000/month — all built by one person, with no agency and no staff. The engine behind that growth is the founder-designed UGC machine we break down next.",
    },
    premium: {
      ja: "【深掘り】nomadtableの本当の堀は『近くの旅人マッチ』という機能そのものではなく、Jayが1人で回し続けている“UGC(短尺動画)の量産マシン”にある。社員ゼロのソロ開発者が、月44百万再生・累計4億再生・60人規模のクリエイター網を回す。その仕組みを順番に分解する。\n\n■ まず創業者が『自分でバイラルを取れる』状態を作る(外注はその後)\nJayはいきなりクリエイターに頼んでいない。最初は自分でTikTok/Reelsに投稿し続け、『どんなフックが伸びるか』を体で覚えた。順番が重要で、(1)自分で当て方が分かる→(2)その“勝ち型”をブリーフに落とせる→(3)クリエイターに渡しても再現する、という順で初めて外注がスケールする。当て方を知らないまま外注すると、学習を他人に丸投げして再現性が消える。これはCal AI等の成功例と同じ原則だ。\n\n■ 勝ち型は『Hook-Demo』フォーマット(クリックベイトを捨てる)\nJayはクリックベイト型を捨て、最初の3秒で“具体的な痛点を突くフック”→直後に“プロダクトの実演(デモ)”という型に統一した。例:「Imagine being scared of solo traveling when this exists(これがあるのにソロ旅を怖がるなんて)」と痛点を1文で提示し、すぐにアプリで近くの旅人とつながる画面を見せる。痛点提示→即デモの型は、視聴者が『これは自分の悩みだ』と認識した瞬間に解決策を見せるので、保存・DL動機に直結する。\n\n■ 60人のクリエイター網を“1人で”回す運用設計\n社員を雇わず、WhatsAppの分散コミュニケーションで回しているのが肝。大きなグループチャットで『今週伸びている新フォーマット/フック』を共有しつつ、伸び悩むクリエイターには1対1でフィードバックする。つまり“当たりフォーマットの横展開(全員へ)”と“個別最適化(1対1)”を同じ1人が両輪で回す。クリエイター側は完成度の高いブリーフをもらえるので当たり率が上がり、Jay側は労力あたりの再生を最大化できる——これが『ソロでも月44M再生』の正体。\n\n■ 動画 → ダウンロード → “マップが埋まる” の自己強化ループ\nnomadtableは『近くに旅人がいる』ことが価値なので、ユーザーが増えるほどマップ(供給)が濃くなり、新規の体験価値が上がる。Jayは初期に『何ヶ月も空っぽの地図を見つめていた』と振り返るが(2025年3月の投稿)、UGCで一気にDLが入ると地図上のアクティビティが世界中で生成され始め、それ自体が次の動画ネタ(=リアルな盛り上がり)になる。短尺UGCが供給を増やし、濃くなった供給がさらに刺さるUGCを生む——この自己強化ループが、広告に頼らず成長を続けられる理由だ。\n\n■ 無料配布 × Superwallペイウォールで“普及してから課金”\nアプリ本体は無料にして普及(=マップの濃さ)を最優先し、収益はNomadtable Plus(週/月/年)で取る。ペイウォールはSuperwallで継続的に最適化し、『どの画面をどの順で見せれば課金に至るか』を数字で詰める。プロダクトがネットワーク効果型なので、初期に課金で絞るより“まず人を増やす→濃くなった体験の上で課金導線を最適化する”ほうが理に適っている。早期の 75K MAU/$18K MRR から月$65kへ伸びたのは、ユーザー基盤の拡大と課金最適化を同時に回した結果だ。\n\n■ ソロ開発者への示唆(再現可能な要点)\n1) “今・ここ・近く”のような即時性の空白を、1機能に絞って突く。2) 外注の前に創業者自身がバイラルの当て方を体得する。3) 当たり型(Hook-Demo)をブリーフ化し、安価な分散運用(WhatsApp+グループ共有+1対1)でクリエイター網に横展開する。4) プロダクトがネットワーク効果なら無料で普及を取り、Superwall等でペイウォールを後から最適化する。技術的には“近くの旅人マップ+チャット”という比較的シンプルな構成(本人は短期間でのモバイル開発を公言)で、勝負どころはコードより『痛点の選定とUGC運用』にあった。\n\n注:本人Xバイオの『$1M ARR / $2M run rate』表記は、安定MRRである月$65k(≈$780k ARR)とは一致しない。ブッキング総額やピーク月、年率換算の取り方の違いと見られるため、本稿の主指標は保守的に月$65kを採用した(出典:本人公表値+二次まとめの一致値)。",
      en: "【Deep dive】nomadtable’s real moat isn’t the ‘match travelers nearby’ feature — it’s the short-form UGC machine Jay runs single-handedly. A zero-employee solo dev drives 44M views/month, 400M+ cumulative views, and a ~60-creator network. Here’s the system, in order.\n\n■ First, make the founder able to go viral himself (outsource only after). Jay didn’t start by hiring creators. He posted to TikTok/Reels himself until he *felt* which hooks land. Order matters: (1) you learn what works → (2) you can encode that winning shape into a brief → (3) creators can reproduce it. Only then does outsourcing scale. Outsourcing before you know what lands hands the learning to others and kills repeatability — the same principle behind cases like Cal AI.\n\n■ The winning shape is the ‘Hook-Demo’ format (drop the clickbait). Jay moved away from clickbait toward a fixed shape: a 3-second hook that names a *specific* pain, immediately followed by a product demo. Example: ‘Imagine being scared of solo traveling when this exists,’ stated in one line, then straight to the screen of connecting with travelers nearby. Pain-then-demo works because the moment a viewer thinks ‘that’s my problem,’ you show the solution — driving saves and downloads.\n\n■ Running a 60-creator network *solo* — the ops design. The key is no staff: he coordinates over decentralized comms (WhatsApp). A large group chat broadcasts ‘this week’s winning formats and hooks,’ while underperforming creators get one-on-one feedback. So one person runs both wheels at once — horizontal rollout of winning formats (to everyone) and individual optimization (one-on-one). Creators get high-quality briefs (higher hit rate); Jay maximizes views per unit of effort. That’s how ‘44M views/month, solo’ is even possible.\n\n■ Video → downloads → ‘the map fills in’ self-reinforcing loop. nomadtable’s value is that ‘there are travelers near you,’ so more users means denser supply on the map and more value for newcomers. Jay recalls ‘staring at an empty map for months’ early on (a March 2025 post); once UGC drove a wave of downloads, activities started being created worldwide on the map — which itself becomes the next video material (real, visible momentum). Short-form UGC grows supply; denser supply produces even more compelling UGC. That self-reinforcing loop is why growth continues without paid ads.\n\n■ Free distribution × Superwall paywall = ‘adopt first, monetize after.’ The app is free to maximize adoption (= map density); revenue comes from Nomadtable Plus (weekly/monthly/annual). The paywall is continuously optimized with Superwall, dialing in ‘which screens in which order convert.’ For a network-effect product, growing the base first and then optimizing the paywall on top of a denser experience beats gating hard early. Going from 75K MAU/$18K MRR to $65K/month came from expanding the user base and tuning monetization at the same time.\n\n■ Takeaways for solo builders (the reproducible core). 1) Attack an *immediacy* gap (‘now / here / nearby’) with one focused feature. 2) Learn to go viral yourself before outsourcing. 3) Encode the winning shape (Hook-Demo) into briefs and roll it out across a creator network with cheap decentralized ops (WhatsApp + group broadcast + one-on-one). 4) If the product has network effects, take adoption for free and optimize the paywall later with tools like Superwall. Technically it’s a fairly simple ‘nearby-travelers map + chat’ build (he’s spoken about shipping mobile fast); the edge was in pain-point selection and UGC operations, not the code.\n\nNote: the founder’s X bio figure of ‘$1M ARR / $2M run rate’ doesn’t reconcile with the steady $65K/month (≈$780K ARR). It likely reflects total bookings, a peak month, or a different annualization, so this piece conservatively uses $65K/month as the headline metric (sourced from the founder’s figures plus consistent secondary breakdowns).",
    },
  },

  playbook: {
    ja: [
      "“今・ここ・近く”のような即時性の空白を、1機能(近くの旅人マッチ)に絞って突く",
      "外注の前に、まず創業者自身が短尺動画で“バイラルの当て方”を体得する",
      "勝ち型を『Hook-Demo』(3秒で痛点フック→即デモ)に固定してブリーフ化する",
      "WhatsApp等の分散運用で、当たり型の横展開(全員)と1対1フィードバックを1人で両輪に回す",
      "ネットワーク効果型は無料で普及を最優先(マップ=供給を濃くする)",
      "収益はサブスク(Nomadtable Plus)でSuperwallによりペイウォールをA/B最適化",
    ],
    en: [
      "Attack an immediacy gap (‘now/here/nearby’) with one focused feature (match travelers nearby)",
      "Before outsourcing, learn to go viral yourself with short-form video",
      "Fix the winning shape as ‘Hook-Demo’ (3-sec pain hook → immediate demo) and turn it into briefs",
      "Run rollout solo via decentralized ops (WhatsApp): broadcast winners to all + one-on-one feedback",
      "For network-effect products, take adoption for free first (densify the map = supply)",
      "Monetize via subscription (Nomadtable Plus) and A/B-optimize the paywall with Superwall",
    ],
  },

  failureNote: {
    ja: "華やかな急成長の前に、Jayは『何ヶ月も空っぽの地図を見つめていた』時期があった(2025年3月の本人投稿)。ネットワーク効果型プロダクトの宿命で、供給(=近くの旅人)が薄いうちは体験価値がほぼゼロになる“コールドスタート”を、本人主導のUGCで力技で越えたのが転換点だった。",
    en: "Before the flashy growth, Jay spent months ‘staring at an empty map’ (his own March 2025 post). It’s the curse of network-effect products: while supply (travelers nearby) is thin, the experience is near-worthless. The turning point was brute-forcing past that cold start with founder-led UGC.",
  },

  publishedAt: "2026-06-29",
  featured: false,
} satisfies Case;
