import type { Case } from "../types";

// 典拠: ウマたんニュースレター記事 #8(参考)。文章は自分の言葉で再構成。
// 数値メモ: 月10万ドル前後を MRR とみなす。21時間は「開発時間」で成長期間ではない。

export const jungle = {
  id: "jungle",
  slug: "jungle",

  personName: "Julian Alvarez",
  appName: "Jungle",

  mrrUsd: 100_000,
  revenueType: "mrr",
  launchYear: 2024,

  category: "learning",
  techStack: [],
  marketingTags: ["x", "trendJacking", "shorts"],

  title: {
    ja: "バズったツイートを見て21時間で作ったAIフラッシュカードアプリJungleが、月1500万円の怪物に",
    en: "Built in 21 Hours After a Viral Tweet, AI Flashcard App Jungle Became a $100K/mo Monster",
  },
  summary: {
    ja: "13歳でアプリを公開していた開発者Julianが、バズったツイートに需要を見出し21時間でAIフラッシュカードアプリを構築。体験設計と集客導線を磨き、月10万ドル(約1500万円)まで成長させた。",
    en: "Julian, who shipped apps at 13, spotted demand in a viral tweet and built an AI flashcard app in 21 hours. Sharp experience design and acquisition funnels grew it to $100K/month.",
  },
  revenueRaw: {
    ja: "月収益10万ドル(約1500万円)規模。最初のバージョンは21時間で構築。",
    en: "~$100K/month. The first version was built in 21 hours.",
  },
  painPoint: {
    ja: "フラッシュカードの需要を訴えるツイートがバズっているのを目撃したのが起点。『世界のニーズを見つけ、コーディングという最強の武器でほぼゼロコストで何万人にも届ける』——13歳で味わったこの魔法を、今度はAIフラッシュカードで再現しにいった。",
    en: "It started with seeing a tweet about flashcard demand go viral. ‘Find a need in the world, and use coding — the ultimate weapon — to reach tens of thousands at near-zero cost.’ He set out to recreate that magic, first felt at 13, with AI flashcards.",
  },
  body: {
    free: {
      ja: "Julian Alvarezはメキシコとテキサスの国境沿いの小さな町で育った。13歳のとき父親の友人に『iPad向けの電卓アプリを作ってみない?』と言われて作ったアプリが、有料版400ダウンロード・無料版3万ダウンロード超を記録。『世界のニーズを発見し、コーディングという武器でほぼゼロコストで届ける』という原体験を得た。\n\nその後、フラッシュカードの需要を示すツイートのバズを見て、わずか21時間で最初のJungleを構築。スピードと嗅覚が武器だ。重要なのはここからで、彼はプロダクトの体験設計と集客導線を徹底的に磨き込み、フラッシュカードアプリを月10万ドル規模まで伸ばした。",
      en: "Julian Alvarez grew up in a small town on the Mexico–Texas border. At 13, a family friend asked him to build an iPad calculator app; it hit 400 paid and 30K+ free downloads. That gave him his founding insight: find a need and reach people at near-zero cost through code.\n\nLater, seeing a viral tweet about flashcard demand, he built the first Jungle in just 21 hours — speed and instinct are his edge. What mattered next: he relentlessly refined the product experience and acquisition funnels, growing the flashcard app to around $100K/month.",
    },
    premium: {
      ja: "【深掘り(有料)】なぜ彼のフラッシュカードアプリはここまで伸びたのか。体験設計の勝ち筋、集客導線の作り込み、そして同ジャンルの他アプリとの決定的な差——。",
      en: "【Deep dive (Premium)】Why his flashcard app grew so far: the winning experience-design choices, the acquisition funnels, and the decisive difference from others in the category.",
    },
  },
  playbook: {
    ja: [
      "SNSのバズから『今ある需要』を読み取る(フラッシュカード)",
      "嗅覚が働いたら超高速で最初のバージョンを出す(21時間)",
      "勝負は公開後。体験設計を徹底的に磨き込む",
      "集客導線(流入から定着まで)を設計して伸ばし続ける",
    ],
    en: [
      "Read existing demand off social virality (flashcards)",
      "When instinct fires, ship the first version fast (21 hours)",
      "The real game is post-launch — relentlessly polish the experience",
      "Design the acquisition funnel (from inflow to retention) and keep growing",
    ],
  },
  publishedAt: "2026-06-22",
} satisfies Case;
