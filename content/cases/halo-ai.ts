import type { Case } from "../types";

// 事実の典拠(一次情報を優先・複数ソースで照合):
//  - 創業者 Dillion Verma 本人の X 投稿(0→$300k MRR の主張についてのAMA):
//    https://x.com/dillionverma/status/2026507475747484063
//  - 本人 X プロフィール: https://x.com/dillionverma(過去に Magic UI = アニメUIコンポーネント集 を開発・販売)
//  - 本人ポートフォリオ: https://dillion.io / https://dillion.io/projects
//  - 本人出演インタビュー(一次素材): The Superwall Podcast「0 to $300k/mo in 45 days with my ai app (just copy me)」
//    https://podcasts.apple.com/ke/podcast/dillion-verma-0-to-%24300k-mo-in-45-days-with-my-ai-app/id1831299632?i=1000759282506
//    （YouTube版: https://www.youtube.com/watch?v=PFfo4JySptw）
//  - 公式サイト: https://halo.camera/ (AI写真エディタ「写真をアップ→プロンプト→出力」)
//  - App Store 公式リスティング(料金・開発者 "Product Studio Inc."):
//    https://apps.apple.com/us/app/halo-ai-photo-video-editor/id6740445587
//  - グロース手法の分解(二次・分析): Stormy AI ブログ(UGCプレイブック / Superwallペイウォール / Gemini API活用)
//
// 数値メモ:
//  - 「0 → $300k MRR を 45日」=本人のXとポッドキャストで一致 → mrrUsd = 300_000, revenueType "mrr"。
//    periodMonths は 45日 ≈ 1.5〜2ヶ月。PROJECT_GOAL の表記(「2ヶ月で月$300k」)に合わせ 2 とし、生表記に45日を明記。
//  - 「120日で12億再生・85クリエイター」「6x ROIの1本のTikTokが起点」「$100k個人ローン」「事前に18ヶ月の失敗」
//    は本人インタビュー＋複数の分析記事で一致。
//  - 利益率約50% / ペイウォール転換16.5% / Superwall活用 / 週$8.99 などはStormy(二次)＋App Store(価格)で確認。
//  - users(DL/ユーザー数)は確たる一次の数字が取れないため未設定(捏造しない)。launchYear も正確な公開日を一次で
//    確定できないため未設定。
//
// 同名の別企業に注意(本事例から除外):「Halo AI」を名乗る別法人(haloai.app / Crunchbase / 1Billion Followers
//  Summit 登壇のドバイ系インフルエンサーマーケティングSaaS)が存在するが、本件の Dillion Verma の消費者向け
//  AI写真エディタ(halo.camera)とは無関係。混同しないよう一次ソースを halo.camera / 本人X / 本人出演回に限定した。
//
// 文章はすべて自分の言葉で再構成。元ニュースレターは参考のみ(焼き直し禁止)。

export const haloAi = {
  id: "halo-ai",
  slug: "halo-ai",

  personName: "Dillion Verma",
  appName: "Halo AI",
  appUrl: "https://halo.camera",
  sources: [
    {
      url: "https://x.com/dillionverma/status/2026507475747484063",
      title: {
        ja: "創業者 Dillion Verma 本人のX投稿(0→$300k MRRの主張についてのAMA)",
        en: "Founder Dillion Verma’s own X post (AMA about the 0→$300k MRR claim)",
      },
      kind: "primary",
    },
    {
      url: "https://x.com/dillionverma",
      title: { ja: "創業者 Dillion Verma 本人X(旧Magic UI開発者)", en: "Founder Dillion Verma on X (ex-Magic UI creator)" },
      kind: "primary",
    },
    {
      url: "https://podcasts.apple.com/ke/podcast/dillion-verma-0-to-%24300k-mo-in-45-days-with-my-ai-app/id1831299632?i=1000759282506",
      title: {
        ja: "本人出演インタビュー The Superwall Podcast(45日で月$300kの一次証言)",
        en: "Founder interview on The Superwall Podcast (first-hand account of $300k/mo in 45 days)",
      },
      kind: "primary",
    },
    {
      url: "https://halo.camera/",
      title: { ja: "Halo AI 公式サイト(プロダクト・機能)", en: "Halo AI official site (product & features)" },
      kind: "primary",
    },
    {
      url: "https://apps.apple.com/us/app/halo-ai-photo-video-editor/id6740445587",
      title: { ja: "App Store 公式リスティング(料金・開発者)", en: "Official App Store listing (pricing & developer)" },
      kind: "primary",
    },
    {
      url: "https://stormy.ai/blog/halo-ai-ugc-playbook-scale-300k-mrr",
      title: { ja: "Stormy AI 分解記事(UGCクリエイター運用の手法)", en: "Stormy AI breakdown (UGC creator-ops playbook)" },
      kind: "secondary",
    },
    {
      url: "https://stormy.ai/blog/halo-ai-paywall-experiments-superwall-2026",
      title: { ja: "Stormy AI 分解記事(Superwallペイウォール実験・転換率)", en: "Stormy AI breakdown (Superwall paywall experiments, conversion)" },
      kind: "secondary",
    },
  ],

  mrrUsd: 300_000,
  revenueType: "mrr",
  periodMonths: 2,

  category: "photo",
  techStack: ["nanoBanana", "superwall"],
  marketingTags: ["tiktok", "shorts", "influencer", "paywallOpt"],

  title: {
    ja: "18ヶ月の失敗のあと$10万を借金して全張り —「写真を撮ってプロンプトを書くだけ」のAI写真エディタHalo AIが45日で月商$300kに達するまで",
    en: "After 18 Months of Failure He Borrowed $100K and Bet It All — How the “Snap a Photo, Type a Prompt” AI Editor Halo AI Hit $300K/mo in 45 Days",
  },

  summary: {
    ja: "Magic UIを作っていたDillion Vermaが、18ヶ月の失敗のあと$10万を個人ローンで借りて全張りしたAI写真エディタ。写真をアップしてプロンプトを書くだけで画像を編集できる。1つのUGC動画フォーマットと85人のクリエイター網で120日に12億再生を集め、VCなしで45日で月商$300kに到達した。",
    en: "An AI photo editor by Dillion Verma (previously of Magic UI): upload a photo, type a prompt, and it edits the image. After 18 months of failed products he took a $100K personal loan and went all-in, then used one UGC video format and 85 creators to reach 1.2B views in 120 days — hitting $300K/mo with no VC in 45 days.",
  },

  revenueRaw: {
    ja: "ローンチから45日で月商(MRR)約$300k。VC・運用型広告に頼らず、$10万の個人ローンを元手にクリエイター主導のUGCで伸ばした。利益率は一時約50%と本人周辺が説明。週$8.99などの自動課金サブスクで収益化。",
    en: "~$300K monthly recurring revenue within 45 days of launch. No VC and no traditional performance ads — bootstrapped with a $100K personal loan and creator-led UGC. ~50% profit margin at one point, monetized via auto-renewing subscriptions (e.g. $8.99/week).",
  },

  painPoint: {
    ja: "「この写真、ここだけ変えたい」は誰もが抱く欲求なのに、従来は背景の合成やレタッチに専用ソフトとスキルが要った。Photoshopは難しく、無料アプリは仕上がりが安っぽい。Halo AIは“撮るだけ／書くだけ”でこの摩擦を消した——画像をアップし、変えたい所を日本語のような自然文で指示すれば、AIが自然な光と質感で合成して返す。『編集はプロの作業』という前提そのものが、市場の入口だった。",
    en: "“I just want to change this one part of the photo” is a near-universal urge, yet editing has long required pro software and skill — Photoshop is hard, and free apps look cheap. Halo AI erased that friction with ‘just snap it / just type it’: upload an image, describe the change in plain language, and the AI blends it back with natural lighting and texture. The very assumption that ‘editing is a professional’s job’ was itself the market entry point.",
  },

  body: {
    free: {
      ja: "Halo AIは、写真をアップロードして「ここをこう変えたい」とプロンプトを書くだけで、AIが画像を編集して返すアプリ。背景の差し替え、不要物の除去、見た目の調整などを、専用ソフトやレタッチ技術なしで実行できるのがコアの体験だ。\n\n作ったのはDillion Verma。彼はもともと、アニメーション付きのUIコンポーネント集「Magic UI」を開発・販売していた開発者で、個人サイト(dillion.io)にはGPTストア向けのメール収集SaaSやAIカスタマーサポートなど複数のプロダクトが並ぶ。つまりHalo AIは“いきなり当てた一発屋”ではなく、作り続けてきた人間の現在地だ。\n\nただしその道のりは平坦ではなかった。本人いわく、Halo AIの前に約18ヶ月ぶん、失敗したプロダクトが積み重なっていた。口座残高はほぼ尽きかけ、手元にあった確かな手がかりは『1本のTikTok動画が広告費の6倍のリターン(6x ROI)を出した』というたった一つのデータ点だけ。そこで彼は$10万(約1,500万円)の個人ローンを組み、その“当たりの型”に全張りした。\n\n結果として、彼は1つのUGC(ユーザー生成コンテンツ)動画フォーマットと約85人のクリエイターを使い、120日で累計12億再生を積み上げる。VCの調達も、いわゆる運用型広告も使わず、ローンチから45日で月商(MRR)約$300kに到達した。技術的には画像編集にGoogleのGemini系画像モデル(通称Nano Banana)を活用し、ペイウォールはSuperwallで最適化したと周辺情報で説明されている——個人開発者が再現を狙える構成だ。",
      en: "Halo AI lets you upload a photo, type a prompt describing the change you want, and get an AI-edited image back. Swapping backgrounds, removing unwanted objects, adjusting how things look — all without pro software or retouching skill — is the core experience.\n\nIt was built by Dillion Verma, a developer previously known for Magic UI, a library of animated UI components he designed, built and sold. His personal site (dillion.io) lists several products, from an email-capture SaaS for GPT Store builders to an AI customer-support bot. In other words, Halo AI isn’t a lucky one-off — it’s the current waypoint of someone who keeps shipping.\n\nThe road wasn’t smooth, though. By his own account, roughly 18 months of failed products preceded Halo AI. His bank balance was nearly gone, and the one solid signal he had was a single data point: one TikTok video that returned 6x its ad spend. So he took out a $100K personal loan and bet everything on that winning format.\n\nThe payoff: using one UGC (user-generated content) video format and about 85 creators, he stacked 1.2 billion views in 120 days. With no VC and no traditional performance ads, he reached ~$300K monthly recurring revenue 45 days after launch. Technically, the image editing is reported to lean on Google’s Gemini image model (a.k.a. Nano Banana), with the paywall optimized via Superwall — a stack an indie builder can realistically reproduce.",
    },
    premium: {
      ja: "【深掘り】Halo AIが45日で月商$300kに届いた本質は、派手な技術ではなく『1つの当たりの型を、借金してでも信じて、再現可能な仕組みに変えた』ことにある。順を追って分解する。\n\n■ 前提:18ヶ月の失敗と$10万の賭け\n華やかな数字の前に、約18ヶ月の失敗の堆積があった。普通ならここで撤退する局面で、彼が動けたのは“感覚”ではなく“1つのデータ点”があったからだ——あるTikTokが広告費の6倍を回収した。多くの人はこの1本を「まぐれ」と片づけて次のアイデアに移るが、彼は逆に『この型が本物なら、量を張れば伸びる』と読み、$10万の個人ローンで全張りした。重要なのは、賭けの前に“勝ち筋の証拠”を1つ握っていたこと。無根拠な先行投資ではない。\n\n■ 勝ち筋を“1つのUGCフォーマット”に絞り、ブレずに量産する\n伸びた要因は、多彩な施策ではなく『当たったフォーマットを1つに固定し、ひたすら量産した』ことだ。動画の構成・フック・見せ方を毎回作り変えると学習が分散するが、型を固定すれば「どの素材が当たるか」だけに変数を絞れる。彼はこの1フォーマットで120日12億再生という分母を作った。個人開発者の教訓は明確で、当たりが出たら“横に広げる前に、まず同じ型を縦に深掘る”。\n\n■ 85人のクリエイターを“ビュー連動マイルストーン報酬”で動かす\n拡散は自分一人ではなく、約85人のクリエイター網で起こした。肝は報酬設計だ。固定CPM(再生1000回いくら)ではなく、20k/100k/500k/1M再生といった到達マイルストーンにボーナスを置く方式を提示したところ、30人中29人がこのマイルストーン型を選んだという。クリエイター側は『伸ばせば伸ばすほど報われる』ので本気で当てにいき、運営側は“当たらなければ大きく払わない”ので下振れリスクを抑えられる。成果連動はクリエイターと利害を一致させる装置だった。\n\n■ “当たり動画”をGeminiとDiscordエージェントで再現可能にする\n属人的なセンスに頼らず、当たった動画を仕組みで再生産した点が効いている。周辺情報によれば、バズったヒット動画をGemini APIで書き起こし・分解し、その知見をDiscord上のエージェント(クリエイター向けの“マーケコーチ”)に流し込んで、85人が同じ勝ち筋を共有できるようにした。属人スキルを“配れるブリーフ”に変換する——これが「85人を同期した1台のバイラルマシンにする」と表現される所以だ。\n\n■ Superwallでペイウォール転換を詰め、週課金で薄く広く回収する\n集客の上澄みを、Superwallによるペイウォール最適化で収益に変えた。ゲート型の強制オンボーディングをやめ、ユーザーの“今編集したい”という意図に合わせてペイウォールを出す設計に変えたところ、転換率は16.5%に達したと説明される。価格は週$8.99を軸に複数ティア(週$5.99〜$6.99、年$29.99、クレジット課金など)。単価より普及を優先しつつ、$300k規模で利益率約50%を確保した。\n\n■ 「広告なし」の正体と、再現を狙う人への注意\n本人は「VCなし・運用型広告なし・(従来型)インフルエンサーなし」と表現するが、これは“費用をかけなかった”という意味ではない。$10万のローンを、運用型広告ではなく『成果連動のクリエイター投資』に振り向けた、という配分の違いだ。Metaの広告マネージャに溶かす代わりに、当たったらボーナスを払うクリエイター網に賭けた。そして忘れてはいけないのが、その原資が“借金”だった点。当たったから報われたが、外れていれば$10万の負債だけが残った。再現を狙うなら、彼が賭ける前に握っていた『6x ROIという1つの証拠』を自分も先に取ること——順番を飛ばして借金から始めてはいけない。",
      en: "【Deep dive】Halo AI’s real reason for hitting $300K/mo in 45 days isn’t flashy tech — it’s that he believed in one winning format enough to borrow against it, then turned it into a repeatable machine. Step by step:\n\n■ The setup: 18 months of failure and a $100K bet. Behind the headline numbers sat ~18 months of failed products. At the point most people quit, he could act not on a feeling but on one data point: a TikTok that returned 6x its ad spend. Many would dismiss a single hit as luck and move to the next idea; he read it the other way — ‘if this format is real, volume will scale it’ — and bet a $100K personal loan on it. The key is that he held *evidence of a winning angle* before betting. It wasn’t a blind upfront splurge.\n\n■ Lock onto ONE UGC format and mass-produce it without drift. Growth came not from a buffet of tactics but from fixing one winning format and producing it relentlessly. Reinventing the structure, hook and framing every time scatters your learning; freezing the format narrows the only variable to ‘which input lands.’ With that single format he built the 1.2B-views-in-120-days denominator. The indie lesson is clear: when something hits, go *deep on the same format* before going wide.\n\n■ Move 85 creators with view-milestone payouts. Distribution ran through a network of ~85 creators, and the lever was the comp design. Instead of a flat CPM (pay-per-1,000-views), he offered bonuses tied to view milestones (20k/100k/500k/1M) — and 29 of 30 creators reportedly chose the milestone model. Creators push harder because ‘the more it spreads, the more I earn,’ while the operator caps downside because ‘misses don’t cost much.’ Performance-linked pay is a device for aligning incentives between creator and founder.\n\n■ Make hit videos reproducible with Gemini + a Discord agent. Rather than relying on individual taste, he reproduced winners systemically. Reporting indicates he used the Gemini API to transcribe and break down viral hits, then fed that into a Discord agent (a ‘marketing coach’ for creators) so all 85 could share the same winning formula. Converting personal skill into a *distributable brief* is exactly why it’s described as ‘turning 85 creators into one synchronized viral machine.’\n\n■ Tighten paywall conversion with Superwall; monetize thin and wide. He converted the top-of-funnel into revenue via Superwall paywall optimization. Dropping forced gated onboarding in favor of intent-based paywalls — shown when the user actually wants to edit *now* — reportedly drove a 16.5% conversion rate. Pricing centers on $8.99/week across several tiers ($5.99–$6.99/week, $29.99/year, credit packs), prioritizing adoption over ARPU while still holding ~50% margins at $300K scale.\n\n■ What ‘no ads’ really means — and a warning for copycats. He frames it as ‘no VC, no performance ads, no (traditional) influencers,’ but that doesn’t mean he spent nothing. He routed the $100K loan not into ad managers but into *performance-linked creator investment* — betting on a bonus-on-hit creator network instead of burning it in Meta Ads. And don’t forget the capital was *debt*. It paid off because the format worked; had it missed, only the $100K liability would remain. If you want to copy this, first earn the one piece of evidence he held before betting — a 6x-ROI signal of your own. Don’t skip the order and start from the loan.",
    },
  },

  playbook: {
    ja: [
      "撤退ラインでも“1つの確かな証拠(例: 6x ROIの1本)”があるなら、感覚でなくそのデータに賭ける",
      "当たったUGCフォーマットを1つに固定し、横に広げる前に同じ型を縦に量産する",
      "クリエイターを固定CPMでなく“ビュー到達マイルストーン報酬”で動かし、利害を一致させる",
      "当たり動画をGemini等で書き起こし・分解し、誰でも再現できる“ブリーフ(型)”に変換する",
      "強制ゲートをやめ、ユーザーの意図に合わせてSuperwallでペイウォールをA/B最適化する",
      "単価より普及を優先した週課金(週$8.99など)で、薄く広く回収する",
      "先行投資の前に“勝ち筋の証拠”を取る。順番を飛ばして借金から始めない",
    ],
    en: [
      "Even at your quit line, if you hold one solid proof (e.g. a 6x-ROI hit), bet on the data, not a feeling",
      "Lock onto one winning UGC format and go deep (mass-produce it) before going wide",
      "Pay creators on view-milestone bonuses, not flat CPM, to align incentives",
      "Transcribe and dissect hit videos (e.g. with Gemini) into a distributable, repeatable brief",
      "Drop forced gating; A/B intent-based paywalls with Superwall to lift conversion",
      "Monetize thin-and-wide with weekly subscriptions ($8.99/wk etc.), adoption over ARPU",
      "Earn proof of a winning angle BEFORE you invest — don’t skip the order and start from debt",
    ],
  },

  failureNote: {
    ja: "Halo AIの前には約18ヶ月の失敗したプロダクトが積み重なり、口座残高はほぼ尽きかけていた。$10万は自己資金ではなく個人ローン——当たったから報われたが、外れていれば借金だけが残るギリギリの賭けだった。『45日で$300k』の裏には、この長い失敗と借金のリスクがあったことを見落としてはいけない。",
    en: "Roughly 18 months of failed products preceded Halo AI, and his bank balance was nearly gone. The $100K wasn’t savings but a personal loan — it paid off because the format worked, but a miss would have left only the debt. Behind ‘$300K in 45 days’ lies that long stretch of failure and a genuinely risky bet.",
  },

  publishedAt: "2026-06-25",
  featured: false,
} satisfies Case;
