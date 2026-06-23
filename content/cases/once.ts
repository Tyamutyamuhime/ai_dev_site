import type { Case } from "../types";

// 典拠: ウマたんニュースレター記事 #7(参考)。文章は自分の言葉で再構成。
// 数値メモ: 月500万円 ≈ $33K を MRR とみなす。WAU 1万人以上。

export const once = {
  id: "once",
  slug: "once",

  personName: "Brian Shin",
  appName: "Once",

  mrrUsd: 33_000,
  revenueType: "mrr",
  periodMonths: 5,
  users: 10_000,
  launchYear: 2025,

  category: "photo",
  techStack: ["figma", "claudeCode", "supabase", "vercel"],
  marketingTags: ["wordOfMouth", "instagram"],

  title: {
    ja: "『使い捨てカメラ』の制限を再現したアプリOnceが、5ヶ月で月500万円に",
    en: "Once Recreated the Disposable Camera’s Constraints — and Hit $33K/mo in 5 Months",
  },
  summary: {
    ja: "結婚式やパーティで『みんなで撮る楽しい瞬間』に刺さる使い捨てカメラ風アプリ。元VCバックのBtoB創業者がブートストラップに転向し、UIUXを磨き抜いて週間アクティブ1万人・月500万円まで成長させた。",
    en: "A disposable-camera-style app for group moments at weddings and parties. A former VC-backed B2B founder pivoted to bootstrapping, obsessed over UX, and grew it to 10K WAU and $33K/mo.",
  },
  revenueRaw: {
    ja: "ローンチから5ヶ月で月500万円超、週間アクティブユーザー1万人以上。",
    en: "$33K+/month and 10K+ weekly active users, five months after launch.",
  },
  painPoint: {
    ja: "彼女との海外旅行で使い捨てカメラを持ち歩いた体験から、『制限こそが体験を魔法のようにする』と気づいた。何枚撮ったか分からない、その場で見られない——その不便さが特別さを生む。『あの体験をアプリでネイティブに再現できないか?』がOnceの原点。",
    en: "On a trip with his girlfriend carrying a disposable camera, he realized the constraint is what made it magical — you don’t know how many shots are left, you can’t see them instantly. That friction creates specialness. ‘Can we recreate that natively in an app?’ became Once’s origin.",
  },
  body: {
    free: {
      ja: "Brian Shinは元々、社員50人規模のVCバックのBtoBスタートアップを共同創業・経営していた。しかし個人開発の世界に惹かれて転向。Tony Dinhの『Xnapper』を15万ドルで買収して個人開発に足を踏み入れた後、自らOnceを開発した。\n\n検証は超シンプルなウェブ版を1〜2週間で作り、ハロウィンパーティで実際に使ってもらうことから始めた。参加者がコンセプトを気に入ったのを確認してから本格開発へ。\n\n技術スタックは明確で、デザインだけはAIに任せずFigmaで作り込み、コーディングはClaude Code、バックエンドはSupabase、ホスティングはVercel。完成度の高いUIUXが、このアプリの心臓部だ。",
      en: "Brian Shin previously co-founded and ran a 50-person VC-backed B2B startup, then got pulled into indie hacking. He bought Tony Dinh’s ‘Xnapper’ for $150K to enter the indie world, then built Once himself.\n\nHe validated with a bare-bones web version in 1–2 weeks, getting people to actually use it at a Halloween party. Only after seeing they loved the concept did he build the real thing.\n\nHis stack is deliberate: design stays human in Figma (no AI), coding via Claude Code, backend on Supabase, hosting on Vercel. The polished UX is the heart of the product.",
    },
    premium: {
      ja: "【深掘り(有料)】『制限』をどう機能に落とし込んだか、初期ユーザーをイベント起点でどう広げたか、ベトナム・ダナンのハッカー合宿でどうプロダクトを仕上げたか——。",
      en: "【Deep dive (Premium)】How the ‘constraint’ became concrete features, how early users spread from events, and how the product was finished at a hacker residency in Da Nang, Vietnam.",
    },
  },
  playbook: {
    ja: [
      "自分の実体験の『不便さ=特別さ』をプロダクトの核に据える",
      "超シンプルなWeb版を1〜2週間で作り、リアルな場(パーティ)で検証",
      "コンセプトが刺さると確認してから本開発に入る",
      "差別化の要であるデザインは、あえてAIに任せず人が作り込む",
      "イベント単位の体験設計で、自然な口コミ拡散を作る",
    ],
    en: [
      "Put your own ‘friction = specialness’ insight at the product’s core",
      "Build a bare-bones web version in 1–2 weeks and validate at a real venue (a party)",
      "Only start real development after confirming the concept lands",
      "Keep design — your key differentiator — human-made, not AI-generated",
      "Design the experience around events to drive natural word-of-mouth",
    ],
  },
  publishedAt: "2026-06-22",
} satisfies Case;
