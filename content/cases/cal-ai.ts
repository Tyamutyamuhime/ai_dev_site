import type { Case } from "../types";

// 事実の典拠(一次・二次情報で裏取り):
//  - 創業者 Zach Yadegari (CEO) の買収告知ポスト(X): https://x.com/zach_yadegari/status/2028473704359874652
//  - CNBC Make It (2025-09-06): 月間粗利 ≈ $1.4M、ダウンロード 8.3M(2025-07時点)
//  - TechCrunch (2025-03-16): 共同創業者 Henry Langmack / Blake Anderson / Jake Castillo、100万DL超
//  - Starter Story (cal-ai-breakdown): 価格 $10/月 or $30/年、Superwall、tech stack、初期 TikTok×インフルエンサー
//  - getlatka / MyFitnessPal 買収報道: $50M ARR、2025-12 買収成立 / 2026-03 公表
// 数値メモ: $50M ARR → MRR ≈ $4.17M に正規化(revenueType: "arr")。

export const calAi = {
  id: "cal-ai",
  slug: "cal-ai",

  personName: "Zach Yadegari & Henry Langmack",
  appName: "Cal AI",
  appUrl: "https://www.calai.app",
  sources: [
    {
      url: "https://x.com/zach_yadegari/status/2028473704359874652",
      title: {
        ja: "創業者 Zach Yadegari 本人による買収告知ポスト(X)",
        en: "Founder Zach Yadegari’s own acquisition announcement (X)",
      },
      kind: "primary",
    },
    {
      url: "https://www.calai.app",
      title: { ja: "Cal AI 公式サイト(料金・機能)", en: "Cal AI official site (pricing & features)" },
      kind: "primary",
    },
    {
      url: "https://www.cnbc.com/2025/09/06/cal-ai-how-a-teenage-ceo-built-a-fast-growing-calorie-tracking-app.html",
      title: { ja: "CNBC Make It による取材(月間粗利・DL数)", en: "CNBC Make It report (gross profit, downloads)" },
      kind: "secondary",
    },
    {
      url: "https://techcrunch.com/2025/03/16/photo-calorie-app-cal-ai-downloaded-over-a-million-times-was-built-by-two-teenagers/",
      title: { ja: "TechCrunch(共同創業者・100万DL超)", en: "TechCrunch (co-founders, 1M+ downloads)" },
      kind: "secondary",
    },
    {
      url: "https://www.starterstory.com/cal-ai-breakdown",
      title: { ja: "Starter Story 分解記事(価格・技術・初期集客)", en: "Starter Story breakdown (pricing, stack, early growth)" },
      kind: "secondary",
    },
  ],

  mrrUsd: 4_167_000,
  revenueType: "arr",
  periodMonths: 18,
  users: 15_000_000,
  launchYear: 2024,

  category: "health",
  techStack: ["chatgpt", "superwall"],
  marketingTags: ["tiktok", "shorts", "influencer", "instagram", "onboardingOpt", "paywallOpt"],

  title: {
    ja: "17歳が高校の教室で作ったCal AI —「料理を撮るだけ」のカロリー記録アプリが18ヶ月でARR約75億円に到達しMyFitnessPalに売却されるまで",
    en: "Built in High School at 17 — How Cal AI’s “Just Snap Your Food” Calorie Tracker Hit ~$50M ARR in 18 Months and Sold to MyFitnessPal",
  },

  summary: {
    ja: "Zach Yadegariら10代の創業チームが作った写真カロリー記録アプリ。料理を撮るだけでAIがカロリーを推定する。外部資金ゼロで18ヶ月・ARR約$50M、累計1,500万DLに達し、2025年にMyFitnessPalへ売却された。",
    en: "A photo calorie tracker built by Zach Yadegari and a teenage founding team: snap your meal and AI estimates the calories. Bootstrapped to ~$50M ARR and 15M downloads in 18 months, it was acquired by MyFitnessPal in 2025.",
  },

  revenueRaw: {
    ja: "18ヶ月でARR約$50M(約75億円)。累計1,500万DL超、月間粗利は一時$1.4M規模。外部資金ほぼゼロでブートストラップし、2025年12月にMyFitnessPalが買収。",
    en: "~$50M ARR in 18 months. 15M+ cumulative downloads, ~$1.4M monthly gross profit at one point. Bootstrapped with almost no outside funding; acquired by MyFitnessPal in December 2025.",
  },

  painPoint: {
    ja: "カロリー記録は『痩せたい人なら誰もが一度は挫折する』定番の苦痛。食べたものを毎回検索して量を入力する手間が大きく、3日で続かなくなる。Cal AIはこの『記録の摩擦』そのものを消しにいった——食事を1枚撮るだけ。既存のMyFitnessPal等が抱える“入力がだるい”という万人共通の不満が、そのまま市場の入口だった。",
    en: "Calorie logging is a near-universal point of failure for anyone trying to lose weight: searching every food and entering portions is tedious, so people quit within days. Cal AI attacked that logging friction head-on — just take one photo of your meal. The ‘entry is a chore’ complaint baked into incumbents like MyFitnessPal was itself the market entry point.",
  },

  body: {
    free: {
      ja: "Cal AIは、食事の写真を撮るだけでAIがカロリーとマクロ栄養素(タンパク質・脂質・炭水化物)を推定してくれるアプリ。バーコードや手入力にも対応するが、コアは『撮るだけ』の体験で、面倒な検索・計量を不要にした点にある。\n\n作ったのはZach Yadegariを中心とする10代〜20代前半のチーム。Zach(CEO)は7歳でコードを独学し、高校在学中の17歳でCal AIを立ち上げた。コーディングキャンプで知り合ったHenry Langmack(CTO)、X(旧Twitter)上で出会いRizzGPTやUmaxといった消費者向けAIアプリで実績のあったBlake Anderson、Jake Castilloが加わり、2024年5月にローンチした。\n\n技術的には、画像からカロリーを推定する部分にOpenAIのGPT系モデルを活用し、自分たちでゼロから巨大なモデルを学習させるのではなく『既存の強力なAIをプロダクト体験に翻訳する』戦略を取った。フロントはSwift、バックエンドはNode.js/Python、インフラはFirebase、ペイウォール最適化にSuperwallという、個人開発で再現可能な構成。価格は月$10または年$30で、単価より普及を優先した設計だった。\n\nそしてローンチから18ヶ月、累計1,500万DL・ARR約$50Mに到達したところで、カロリー記録アプリの代名詞だったMyFitnessPalがCal AIを買収した。“入力がだるい老舗”が、その不満を消した10代のアプリを取り込んだ構図だ。",
      en: "Cal AI estimates calories and macros (protein, fat, carbs) from a photo of your meal. It also supports barcodes and manual entry, but the core is the ‘just snap it’ experience that removes tedious searching and weighing.\n\nIt was built by a team of teens and early-twenties founders led by Zach Yadegari. Zach (CEO) taught himself to code at 7 and started Cal AI at 17 while still in high school. He was joined by Henry Langmack (CTO), whom he’d met at coding camp, plus Blake Anderson — who he met on X and who had a track record of consumer AI apps like RizzGPT and Umax — and Jake Castillo. They launched in May 2024.\n\nTechnically, they used OpenAI’s GPT models for the photo-to-calorie estimation rather than training a giant model from scratch — a strategy of ‘translating existing powerful AI into a product experience.’ Frontend in Swift, backend in Node.js/Python, Firebase for infra, and Superwall for paywall optimization: a stack an indie team can reproduce. Pricing was $10/month or $30/year, prioritizing adoption over per-user revenue.\n\nEighteen months after launch, having reached 15M downloads and ~$50M ARR, Cal AI was acquired by MyFitnessPal — the longtime synonym for calorie tracking. The incumbent known for tedious entry absorbed the teenage app that erased exactly that pain.",
    },
    premium: {
      ja: "【深掘り】外部資金ほぼゼロの10代チームが18ヶ月でARR約$50Mに到達するまでに踏んだ『集客の3段ロケット』を、順番ごと分解する。重要なのは“何をやったか”より“どの順でやったか”だ。\n\n■ 第1段:創業者自身がTikTokの“中の人”になる(→ 10万DL)\nZachは外注インフルエンサーに頼る前に、まず自分のTikTokアカウントを育てた。やり方は地味で、健康・フィットネス系のコンテンツ“だけ”に反応してフィードをその層に寄せ、アルゴリズムに『この層に配れ』と学習させる。そのうえで自分でアプリの使用動画を投稿し、最初のバイラルを“自分の手”で起こした。これが効いたのは、(1)CACゼロで需要シグナルが取れる (2)どんな見せ方がウケるかの“勝ち筋”を自分で掴める (3)その勝ち筋を次段のインフルエンサーにそのまま渡せる、の3点。外注から始めると、この学習を他人に丸投げすることになり再現性が落ちる。初期はこのオーガニックだけで10万DLに到達した。\n\n■ 第2段:マイクロインフルエンサーに“広告に見えない”動画を量産させる(→ 月商$2M)\n次に、大物ではなくエンゲージメントの高いマイクロ層へ横展開する。依頼するのは『これは広告です』と分かる動画ではなく、本人が普段の投稿と同じトーンで使ってみせるネイティブ形式。第1段で掴んだ“ウケる見せ方”をブリーフに落とし込むので、当たり率が高い。広告っぽさを消すことが効くのは、TikTokのユーザーが広告を瞬時にスキップする一方、クリエイターの『自分が良いと思ったもの』には強い信頼を置くから。この型でローンチから数ヶ月で月商$2Mまで伸ばした。\n\n■ 第3段:オーガニックで需要を確認してからパフォーマンス広告に振り切る(→ 月商$5.7M)\nオーガニックとインフルエンサーで“需要がある・刺さる見せ方が分かっている”を確認してから、初めてFacebook/TikTok/Instagramの運用型広告に本腰を入れた。広告クリエイティブの素材は、すでに第1〜2段で当たりが取れている動画。だからゼロから当てにいくより圧倒的に有利だった。2026年1月時点では月$1M超を広告に投下しつつ、月商$5.7Mを叩き出している。順番が逆——需要を確認する前に広告から始めると、刺さらないクリエイティブに資金を溶かして終わる。\n\n■ 価格とペイウォール:単価より普及を取る\n価格は月$10/年$30と攻めた設定。単価を上げれば1人あたりの売上は増えるが、彼らは“普及”を優先した。理由は、写真カロリー記録という体験が口コミ・SNS拡散と相性が良く、ユーザー数そのものが次の集客(UGC・レビュー・紹介)を生むから。さらにSuperwallでオンボーディングとペイウォールを継続的にA/Bテストし、『どの順でどの画面を見せれば課金に至るか』を数字で詰めた。安い価格でも、転換率と継続率を運用で上げれば十分に回る。\n\n■ 技術は“作る”より“翻訳する”\nカロリー推定は自前で巨大モデルを学習させず、OpenAIのGPT系モデルを使った。個人開発者にとっての学びは明確で、勝負どころは『最先端AIを自分で作ること』ではなく『既存の強力AIを、摩擦の無いプロダクト体験に翻訳すること』にある。Cal AIの堀は技術そのものではなく、撮るだけのUXと前述の集客の型にあった。\n\n■ 見落とされがちな土台:泥臭い資金繰り\n華やかな数字の裏で、初期6ヶ月はアプリストアの入金遅延を創業メンバーが自己資金で立て替え、運営費と広告費を回していた。10代でも『キャッシュが尽きる前に回す』という、地に足のついた資金管理が全ての前提だった。",
      en: "【Deep dive】We break down the ‘three-stage acquisition rocket’ that took a near-bootstrapped teenage team to ~$50M ARR in 18 months — stage by stage. What matters is less *what* they did than the *order* they did it in.\n\n■ Stage 1: The founder becomes the TikTok ‘creator’ first (→ 100K downloads). Before paying any influencer, Zach grew his own TikTok account. The method was unglamorous: engage *only* with health/fitness content so the feed (and the algorithm) learns ‘distribute to this audience,’ then post app-in-use videos himself and spark the first virality by hand. This worked because (1) it reads demand at zero CAC, (2) he personally learned which angles land, and (3) he could hand that winning formula straight to the next stage’s creators. Starting with outsourcing means outsourcing that learning too — and losing repeatability. Organic alone got them to 100K downloads.\n\n■ Stage 2: Micro-influencers making ‘doesn’t-look-like-an-ad’ videos (→ $2M/month). Next, fan out — not to mega-influencers but to high-engagement micro creators, commissioned to post in native style (their normal tone, not an obvious ad). Because the brief encodes the winning angles found in Stage 1, the hit rate is high. Killing the ad-feel works because TikTok users skip ads instantly but trust a creator’s genuine pick. This format scaled them to $2M/month within months of launch.\n\n■ Stage 3: Validate demand, *then* go all-in on performance ads (→ $5.7M/month). Only after organic and influencer proved ‘there is demand, and we know what lands’ did they pour into FB/TikTok/Instagram performance campaigns — using the already-validated videos as ad creative, a massive head start over testing from scratch. By January 2026 they spent $1M+/month against $5.7M monthly revenue. Reverse the order — ads before validation — and you just burn cash on creative that doesn’t land.\n\n■ Pricing & paywall: take adoption over ARPU. Pricing was an aggressive $10/mo, $30/yr. Raising it lifts per-user revenue, but they chose adoption: a photo calorie tracker spreads well via word of mouth and social, so user count itself fuels the next wave of acquisition (UGC, reviews, referrals). They also A/B-tested onboarding and the paywall continuously with Superwall, dialing in *which screens in which order* convert. A low price still works if you raise conversion and retention operationally.\n\n■ Tech: ‘translate,’ don’t ‘build.’ They didn’t train a giant model for calorie estimation — they used OpenAI’s GPT models. The lesson for indie builders is clear: the edge isn’t building frontier AI yourself, it’s translating existing powerful AI into a frictionless product experience. Cal AI’s moat was the snap-only UX and the acquisition playbook, not the model.\n\n■ The overlooked foundation: unglamorous cash flow. Behind the headline numbers, for the first six months the founders fronted operating and marketing costs out of pocket to bridge the app stores’ delayed payouts. Even as teenagers, grounded cash management — keep it running before the cash runs out — underpinned everything.",
    },
  },

  playbook: {
    ja: [
      "万人共通の『面倒』を1アクションで消す(食事を検索・計量せず“撮るだけ”にする)",
      "巨大モデルを自作せず、既存の強力AI(GPT系)をプロダクト体験へ翻訳する",
      "外注前にまず創業者自身がTikTokの中の人になり、アルゴリズムにターゲット層を学習させる",
      "マイクロインフルエンサーに“広告に見えない”ネイティブ動画を量産依頼する(→月商$2Mまで)",
      "オーガニックで需要を確認してからパフォーマンス広告に振り切る(回収構造を作ってから投下)",
      "単価より普及を優先した価格設計(月$10/年$30)+ Superwallでペイウォールを継続A/B",
    ],
    en: [
      "Erase a universal chore in one action (no searching or weighing — ‘just snap it’)",
      "Don’t train a giant model; translate existing powerful AI (GPT) into the product experience",
      "Before outsourcing, become the TikTok creator yourself to teach the algorithm your audience",
      "Commission micro-influencers to mass-produce native, ‘doesn’t-look-like-an-ad’ videos (→ $2M/mo)",
      "Validate demand organically, then go all-in on performance ads (build payback first, then spend)",
      "Price for adoption over ARPU ($10/mo, $30/yr) and continuously A/B the paywall with Superwall",
    ],
  },

  failureNote: {
    ja: "華々しい数字の裏で、Cal AIは初期6ヶ月、アプリストアの入金遅延を創業メンバーが自己資金で立て替えて運営費・広告費を回していた。10代でも『キャッシュが尽きる前に回す』泥臭い資金繰りが土台にあった。",
    en: "Behind the headline numbers, for the first six months the founders fronted operating and marketing costs out of pocket to bridge the app stores’ delayed payouts. Even as teenagers, the foundation was unglamorous cash-flow management — keeping it running before the cash ran out.",
  },

  publishedAt: "2026-06-24",
  featured: true,
} satisfies Case;
