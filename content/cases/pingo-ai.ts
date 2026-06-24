import type { Case } from "../types";

// 事実の典拠(一次・準一次):
// - Y Combinator 会社ページ(S25): https://www.ycombinator.com/companies/pingo-ai
// - 創業者 Michael Xing (Co-founder & CEO) LinkedIn: https://www.linkedin.com/in/michael-xing-04216821a/
// - 創業者 Morrie Schonfeld (Co-founder & COO) LinkedIn: https://www.linkedin.com/in/morrie-schonfeld-1628002b1/
// - 公式サイト: https://pingo.ai/
// - 数字の裏取り: Crunchbase / Dealroom(2025年9月シード$500K)、複数の独立した分析記事で
//   「2025年1月ローンチ → 14ヶ月で月商$500K(≈$6M ARR)、75万ユーザー超、ピーク約70% MoM」を確認。
// - グロース手法: Pingo の TikTok 戦略分析(200M+再生・27M+いいね・624本のクリエイター動画)を複数ソースで確認。
// 文章は自分の言葉で再構成。元ニュースレターは参考のみ。
//
// 数値メモ: 収益は「月商$500K」=MRRそのものなので revenueType: "mrr"、mrrUsd = 500_000。
//   periodMonths = 14(2025年1月ローンチ→月商$500K到達まで)。users = 750_000(75万人超)。launchYear = 2025。
//   techStack は一次情報での確認が取れないため空(確認でき次第追加・TODO)。

export const pingoAi = {
  id: "pingo-ai",
  slug: "pingo-ai",

  personName: "Michael Xing & Morrie Schonfeld",
  appName: "Pingo AI",
  appUrl: "https://pingo.ai",
  sources: [
    {
      url: "https://www.ycombinator.com/companies/pingo-ai",
      title: { ja: "Y Combinator 公式会社ページ(S25)", en: "Y Combinator official company page (S25)" },
      kind: "primary",
    },
    {
      url: "https://www.linkedin.com/in/michael-xing-04216821a/",
      title: { ja: "共同創業者 Michael Xing(CEO)LinkedIn", en: "Co-founder Michael Xing (CEO) LinkedIn" },
      kind: "primary",
    },
    {
      url: "https://www.linkedin.com/in/morrie-schonfeld-1628002b1/",
      title: { ja: "共同創業者 Morrie Schonfeld(COO)LinkedIn", en: "Co-founder Morrie Schonfeld (COO) LinkedIn" },
      kind: "primary",
    },
    {
      url: "https://pingo.ai/",
      title: { ja: "Pingo AI 公式サイト(料金・機能)", en: "Pingo AI official site (pricing & features)" },
      kind: "primary",
    },
  ],

  mrrUsd: 500_000,
  revenueType: "mrr",
  periodMonths: 14,
  users: 750_000,
  launchYear: 2025,

  category: "learning",
  techStack: [], // TODO: 一次情報でビルドスタックが確認でき次第追加
  marketingTags: ["tiktok", "shorts", "influencer", "meme"],

  title: {
    ja: "「AIに発音を笑われる」がバズった — Pingo AIがTikTok2億再生で14ヶ月・月商$500Kに到達した方法",
    en: "“Getting Roasted by an AI” Went Viral — How Pingo AI Hit $500K MRR in 14 Months on 200M TikTok Views",
  },

  summary: {
    ja: "大学のルームメイト2人が作ったAI言語学習アプリ。AIに発音を直され赤面する動画がTikTokで2億再生超を生み、ローンチ14ヶ月で月商$500K(年商換算約$6M)・75万ユーザーに到達した。",
    en: "Two college roommates built an AI language tutor. Clips of the AI correcting users’ pronunciation racked up 200M+ TikTok views, taking it to $500K MRR (~$6M ARR) and 750K+ users just 14 months after launch.",
  },

  revenueRaw: {
    ja: "2025年1月ローンチから14ヶ月で月次経常収益(MRR)$500K=年商換算約$6M、ユーザー75万人超。ピーク時の月間成長率は約70%でYC史上最速級の消費者向けスタートアップ。2025年9月にシード$500Kを調達。",
    en: "$500K MRR (~$6M ARR run-rate) and 750K+ users within 14 months of its January 2025 launch, with peak ~70% MoM growth — cited as one of YC’s fastest-growing consumer startups. Raised a $500K seed in Sept 2025.",
  },

  painPoint: {
    ja: "起点は創業者2人自身の体験。Michaelは中国語が流暢、Morrieは8年学んでも実際の会話になると詰まる——大学のルームメイト時代、2人は毎週いっしょに中国語を会話練習していた。教科書やDuolingoで単語と文法は積み上がるのに、いざ口に出すと固まる『スピーキングの壁』。この『知っているのに話せない』フラストレーションは、語学学習者なら誰もが知っている痛点であり、2人はその当事者だった。だからこそ『話す練習だけ』に振り切った設計ができた。",
    en: "It started from the founders’ own experience. Michael is fluent in Chinese; Morrie had studied it for 8 years and still froze in real conversation. As freshman-year roommates they practiced Chinese together every week. Vocabulary and grammar pile up from textbooks and Duolingo, yet the moment you have to actually speak, you lock up — the ‘speaking wall.’ That ‘I know it but can’t say it’ frustration is one every language learner recognizes, and the two founders lived it. That’s why they could commit so fully to a product about *speaking practice alone*.",
  },

  body: {
    free: {
      ja: "Pingo AIは、AIの会話相手と『実際の場面』でしゃべることでスピーキング力を鍛える語学学習アプリ。レストランで注文する、ホテルを予約する、雑談する——こうしたロールプレイの中でユーザーが声に出して話し、AIがその場でレベルに合わせて発音や言い回しを直してくれる。文法ドリルや単語暗記ではなく『話す勇気と場数』にフォーカスしているのが特徴で、ゲーミフィケーションで語彙を積むDuolingoとは正面から差別化している。\n\n作ったのはMichael Xing(共同創業者・CEO)とMorrie Schonfeld(共同創業者・COO)。2人は大学の新入生時代のルームメイトで、毎週いっしょに中国語を会話練習する仲だった。Michaelは中国語が流暢、Morrieは長年の学習者。まだ20代前半という若さで、2025年にY Combinator(S25バッチ)に採択されている。\n\nローンチは2025年1月。そこからの伸びは尋常ではなく、ピーク時で月間約70%成長、ローンチ14ヶ月で月商$500K(年商換算で約$6M)、ユーザーは75万人を突破した。YCが『最速級の消費者向けスタートアップ』と呼ぶこの数字を、彼らは広告費を大量投下する王道ではなく、TikTokでの『笑える』コンテンツ一本で作り上げた。その仕掛けを次のセクションで分解する。",
      en: "Pingo AI is a language-learning app that builds speaking fluency by letting you talk to an AI partner in *real-life scenarios* — ordering at a restaurant, booking a hotel, making small talk. You speak out loud inside these roleplays, and the AI corrects your pronunciation and phrasing on the fly, adapted to your level. Instead of grammar drills and flashcards, it focuses on ‘the nerve to speak and the reps to get comfortable,’ which sets it squarely apart from Duolingo’s gamified vocabulary loop.\n\nIt was built by Michael Xing (co-founder & CEO) and Morrie Schonfeld (co-founder & COO). The two were freshman-year college roommates who practiced Chinese together every week — Michael fluent, Morrie a long-time learner. Both barely in their early twenties, they were accepted into Y Combinator’s S25 batch.\n\nThey launched in January 2025. The growth that followed was absurd: peak ~70% month-over-month, $500K MRR (~$6M ARR run-rate) within 14 months, and past 750K users. YC has called it one of its fastest-growing consumer startups — and they got there not by pouring money into ads, but on the back of one thing: ‘funny’ content on TikTok. The next section breaks down exactly how.",
    },
    premium: {
      ja: "【深掘り】広告費を主役にせず、TikTokのクリエイター動画だけで月商$500Kまで駆け上がった『再現可能なグロースの型』を分解する。Pingoの公開された数字では、関連動画は累計200M(2億)再生超・27M(2700万)いいね超・624本に達している。単発のバズではなく『量産された型』であることが最大の学びだ。\n\n■ なぜ『AIに発音を直される』動画が刺さったのか — 普遍的な笑い\nPingoの定番フォーマットは、機能紹介ではなく『ユーザー(クリエイター)が外国語を話す → AIが発音のおかしさをツッコむ → 本人が赤面する』という一瞬を見せるもの。ここで効いているのが、選ぶ単語が『母語話者にも英語話者にも面白い』ように設計されている点だ。発音を外すネタは、その言語を知らない人でも笑え、知っている人はもっと笑える。結果、コンテンツが刺さる視聴者の母数が一気に広がる。語学アプリなのに『語学を知らない人』まで観てしまう——これが2億再生の土台になった。\n\n■ 機能を売らない=好奇心ドリブン\n多くのアプリ系UGCは『この機能が便利』と説明してしまい、広告臭で離脱される。Pingoは逆で、AIの“キャラ”の反応(他の語学アプリと明らかに違う、容赦なく直してくる感じ)そのものを見せ、『この反応なに?』という好奇心を喚起する。機能の説明ゼロでブランドの差別化(Duolingoとの違い)が伝わる。広告ではなくミーム/エンタメとして消費されるから拡散コストが劇的に低い。\n\n■ コメント欄が燃料になる3層構造\nPingo動画のコメント欄は3種類の人間が同時に湧くよう設計されている。①翻訳が欲しい人(『今なんて言った?』)、②母語話者(クリエイターの発音ミスを笑う)、③それを翻訳・解説してあげる人。この3層が会話を始めると、コメント数・滞在時間・再訪が伸び、TikTokのアルゴリズムがさらに配信を伸ばす。多言語のミスを“あえて”使うことで、1本の動画が複数の言語コミュニティに同時にリーチする。\n\n■ 単発バズ依存からの脱却 — 624本の量産体制\n最大の差別化は『1本のホームラン』に頼っていないこと。624本という本数は、フォーマット(発音ツッコミ×普遍的な笑い×多言語コメント誘発)を確立し、クリエイターに横展開して量産していることを意味する。1本がコケても全体の配信量は落ちない。これは個人開発者が再現する際の核心:『当たった型を見つけ、それを動画の本数でスケールさせる』。\n\n■ TikTok → 無料トライアル → サブスクの導線\n流入の出口はシンプルな2択の課金:月$14.99、または年$99.99(実質約45%オフ)。無料トライアルで『AIと話す』体験を一度させ、ロールプレイ会話という“毎日やる習慣”に変える。発音矯正は1回では終わらない=継続利用の必然性が高く、サブスクと相性がよい。バイラルで集めた巨大な無料流入を、習慣性の高いコア体験で有料に転換する——この上下の噛み合わせが、ピーク約70% MoMという成長率の正体だ。\n\n■ 数字の分解(概算)\n月商$500K ÷ 75万ユーザーで、登録ユーザーあたり月$0.67。これは『無料ユーザーが大多数・一部が有料転換』というフリーミアムの典型像と整合する。年$99.99換算なら、有料ユーザーは数万人規模と推定できる。重要なのは、CAC(顧客獲得コスト)をオーガニックTikTokでほぼゼロに抑えている点で、広告依存の競合より利益率の出る構造になっている可能性が高い。",
      en: "【Deep dive】Here we break down the *repeatable* growth playbook behind climbing to $500K MRR without ads as the main driver — on TikTok creator videos alone. By Pingo’s own public figures, related videos total 200M+ views, 27M+ likes, across 624 videos. The biggest lesson: this was not one viral hit but a *manufactured format*.\n\n■ Why ‘the AI roasts your pronunciation’ works — universal humor\nPingo’s signature format isn’t a feature demo. It’s a single moment: a creator speaks a foreign phrase → the AI calls out how off the pronunciation is → the creator cringes. The lever is that the chosen words are picked to be funny *to natives and to English-only viewers alike*. A botched pronunciation makes people who don’t know the language laugh, and people who do laugh harder. That instantly expands the addressable audience — a language app whose content is watched even by people not learning a language. That’s the foundation of 200M views.\n\n■ Don’t sell the feature — drive curiosity\nMost app UGC explains ‘this feature is useful,’ which reads as an ad and gets skipped. Pingo does the opposite: it shows the AI’s *personality* (its blunt, unlike-Duolingo way of correcting you) and provokes ‘wait, what is this thing?’ curiosity. Zero feature explanation, yet the brand differentiation lands. Because it’s consumed as a meme/entertainment rather than an ad, distribution cost collapses.\n\n■ The comment section as fuel — a three-layer design\nPingo’s comment sections are engineered so three kinds of people show up at once: (1) people who want a translation (‘what did it just say?’), (2) native speakers laughing at the creator’s mistakes, and (3) people who jump in to translate and explain. When these three layers start talking, comment count, watch time, and revisits climb — and TikTok’s algorithm pushes the video further. Deliberately using mistakes across many languages means one video reaches several language communities at once.\n\n■ Escaping single-hit dependence — the 624-video machine\nThe key differentiator is *not* relying on one home run. 624 videos means the format (pronunciation roast × universal humor × multilingual comment bait) was nailed down and then scaled across creators in volume. If one video flops, total distribution barely dips. For an indie developer, this is the crux: find the format that hits, then scale it with *the number of videos*, not luck.\n\n■ The TikTok → free trial → subscription funnel\nThe exit is a simple two-option paywall: $14.99/mo or $99.99/yr (~45% off). The free trial gets users to ‘talk to the AI’ once, then converts that into a daily habit via roleplay conversations. Pronunciation correction is never ‘done’ in one session — high inherent repeat usage, which pairs well with subscriptions. Funneling enormous viral free traffic into a habit-forming core experience is the real engine behind ~70% MoM.\n\n■ Unit math (approximate)\n$500K MRR ÷ 750K users = ~$0.67 per registered user per month — consistent with a classic freemium shape where most users are free and a slice convert. At $99.99/yr, that implies paying users in the tens of thousands. Crucially, CAC is held near zero via organic TikTok, which likely gives Pingo a far healthier margin structure than ad-dependent competitors.",
    },
  },

  playbook: {
    ja: [
      "自分と相棒の実体験(毎週の中国語会話練習)を、そのまま製品コンセプトにする",
      "競合(Duolingo)が埋めていない『話す恐怖・スピーキングの壁』に一点特化する",
      "機能を宣伝せず、『AIに発音を直されて赤面する』一瞬を見せて好奇心を引く",
      "母語話者にも非話者にも面白い『発音ネタ』を選び、刺さる視聴者の母数を最大化する",
      "翻訳希望者・母語話者・解説者の3層がコメントしたくなる多言語ネタでアルゴリズムを回す",
      "単発バズを狙わず、当たったフォーマットをクリエイターに横展開し動画本数でスケールさせる(624本)",
      "無料トライアル→月$14.99/年$99.99のシンプルな2択で、習慣性の高いコア体験を有料転換する",
    ],
    en: [
      "Turn your own (and your co-founder’s) lived experience — weekly Chinese practice — directly into the product concept",
      "Commit to the gap competitors (Duolingo) leave open: the fear of speaking, the ‘speaking wall’",
      "Don’t advertise features — show the single moment of ‘the AI roasts my pronunciation’ to spark curiosity",
      "Pick pronunciation gags funny to natives and non-speakers alike to maximize the addressable audience",
      "Use multilingual mistakes so translation-seekers, natives, and explainers all comment — feeding the algorithm",
      "Don’t chase one viral hit; scale the winning format across creators by sheer video count (624 videos)",
      "Convert with a simple two-option paywall ($14.99/mo or $99.99/yr) on a habit-forming core experience",
    ],
  },

  failureNote: {
    ja: "製品の核心は創業者2人の“失敗体験”そのものだった。Morrieは中国語を8年学んでも、いざ会話になると言葉が出てこなかった——教科書中心の学習がスピーキングでは機能しないという当事者の挫折が、『話す練習だけに振り切る』という設計判断を生んだ。",
    en: "The product’s core is the founders’ own failure. Morrie studied Chinese for 8 years and still couldn’t get the words out in real conversation — that firsthand frustration with textbook-first learning falling apart at the speaking stage is exactly what produced the decision to go all-in on speaking practice alone.",
  },

  publishedAt: "2026-06-24",
  featured: true,
} satisfies Case;
