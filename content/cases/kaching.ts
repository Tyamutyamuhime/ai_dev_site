import type { Case } from "../types";

// 事実の典拠(一次・二次情報で裏取り):
//  - 創業者 Erikas Mališauskas 本人のX(@malisauskasLT)節目ポスト:
//      「Kaching Bundles app has just created its 200,000th user ID」 https://x.com/malisauskasLT/status/1889298003971936423
//    本人プロフィール: X @malisauskasLT / LinkedIn /in/erikasaves。共同創業(CTO)= Donatas Stundys(@DonatasStundys)。
//  - 本人の一次素材: Indie Hackers 投稿「Getting out of the freelancing game by building a $100k+ MRR Shopify app portfolio」、
//    本人 Medium「From Zero to $1000 MRR in 4 Months — How I Created a Shopify App MicroSaaS」。
//  - 公式プロダクト: kachingappz.com / Shopify App Store(Kaching Bundle Quantity Breaks ほか)。
//  - Starter Story「Built A $4.3M Shopify Apps Business With No Marketing」(2024 売上$4.3M・$0マーケ・チーム/マーチャント数)。
//  - Medium(Yuma Ueno, 2026-01)「Earning $1 Million a Month from Shopify Apps! From $100k to $1M in Just One Year」。
//  - Shopify 公式「The developers behind Shopify's $1.3 billion app ecosystem」(マーチャント10万超・累計+$1.7B)。
// 数値メモ: 最新は「月商 約$1M(=MRR $1M / ARR換算≈$12M)」「$100k→$1M MRR を約1年で10倍」「粗利>90%」。
//   2024通年売上は$4.3M(前年比+$3.4M)。会社設立は2021年(本人の最初の成功プロダクト)。それ以前(2018〜)は複数失敗。
//   先行プロダクト: 初の Shopify アプリを $6.5k MRR まで伸ばし $250k で売却 → その経験で Kaching を立ち上げ。
//   マーチャント数10万超は累計値・$1.7Bは累計の上乗せ売上(2024単年のマーチャント上乗せは+$378Mと本人が公表)。
//   periodMonths は「$100k→$1M MRR を約1年で達成」のレッグ(=12)を採用。会社設立2021からの総期間とは別である旨を本文で明示。
// techStack: 本番採用の開発ツールを一次情報で特定できなかったため未設定(辞書外の Shopify が基盤)。

export const kaching = {
  id: "kaching",
  slug: "kaching",

  personName: "Erikas Mališauskas & Donatas Stundys",
  appName: "Kaching Appz",
  appUrl: "https://www.kachingappz.com",
  sources: [
    {
      url: "https://x.com/malisauskasLT/status/1889298003971936423",
      title: {
        ja: "創業者 Erikas 本人の節目ポスト(X)— Kaching Bundles が20万ユーザーID到達",
        en: "Founder Erikas’s own milestone post (X) — Kaching Bundles hits 200,000th user ID",
      },
      kind: "primary",
    },
    {
      url: "https://www.indiehackers.com/post/tech/getting-out-of-the-freelancing-game-by-building-a-100k-mrr-shopify-app-portfolio-qdReVAgLjz6EpW4OrJSI",
      title: {
        ja: "本人の一次手記(Indie Hackers)— フリーランス脱却と$100k+ MRRポートフォリオ",
        en: "Founder’s first-person write-up (Indie Hackers) — leaving freelancing for a $100k+ MRR portfolio",
      },
      kind: "primary",
    },
    {
      url: "https://malisauskas.medium.com/from-zero-to-1000-mrr-in-4-months-how-i-created-a-shopify-app-microsaas-b84cf72e24f5",
      title: {
        ja: "本人ブログ(Medium)— 4ヶ月で$1000 MRRまでの作り方",
        en: "Founder’s blog (Medium) — from zero to $1,000 MRR in 4 months",
      },
      kind: "primary",
    },
    {
      url: "https://www.kachingappz.com",
      title: { ja: "Kaching Appz 公式サイト", en: "Kaching Appz official site" },
      kind: "primary",
    },
    {
      url: "https://apps.shopify.com/bundle-deals",
      title: { ja: "Shopify App Store: Kaching Bundle Quantity Breaks(公式リスティング)", en: "Shopify App Store: Kaching Bundle Quantity Breaks (official listing)" },
      kind: "primary",
    },
    {
      url: "https://www.starterstory.com/kaching-appz-breakdown",
      title: {
        ja: "Starter Story 分解記事(2024売上$4.3M・$0マーケ・マーチャント数・チーム)",
        en: "Starter Story breakdown ($4.3M in 2024, $0 marketing, merchants, team)",
      },
      kind: "secondary",
    },
    {
      url: "https://medium.com/@yumaueno/the-genius-erikas-earning-1-million-a-month-from-shopify-apps-5d703824765d",
      title: {
        ja: "分解記事(月商$1M・$100k→$1M MRRを1年で・粗利90%超)",
        en: "Breakdown ($1M/month, $100k→$1M MRR in a year, 90%+ margin)",
      },
      kind: "secondary",
    },
    {
      url: "https://www.shopify.com/news/billion-dollar-ecosystem",
      title: {
        ja: "Shopify 公式(アプリ経済圏・マーチャント10万超/累計+$1.7B)",
        en: "Shopify official (app ecosystem; 100K+ merchants / +$1.7B cumulative)",
      },
      kind: "secondary",
    },
  ],

  mrrUsd: 1_000_000,
  revenueType: "mrr",
  periodMonths: 12,
  launchYear: 2021,

  category: "tool",
  techStack: [],
  marketingTags: ["seo", "reviewPrompt", "wordOfMouth"],

  title: {
    ja: "広告費ゼロで月商$1M・粗利90%超 — リトアニアのデザイナーErikasが作ったShopifyアプリ群Kachingが、$100k→$1M MRRへ1年で10倍に伸びるまで",
    en: "$1M/month and 90%+ margins on zero ad spend — How Lithuanian designer Erikas’s Shopify app suite Kaching went 10× from $100k to $1M MRR in a year",
  },

  summary: {
    ja: "リトアニアのUI/UXデザイナーErikas Mališauskasが共同創業したShopifyアプリ群Kaching Appz。バンドル販売・アップセルでマーチャントの客単価を上げる。広告費ゼロ・App Storeのオーガニックだけで月商約$1M(粗利90%超)に到達し、10万超のマーチャントに導入され累計+$1.7Bの売上を生んだ。",
    en: "Kaching Appz is a suite of Shopify apps co-founded by Lithuanian UI/UX designer Erikas Mališauskas. Its bundling and upsell tools raise merchants’ average order value. With zero ad spend, on App Store organic alone, it reached ~$1M/month (90%+ margins), is installed by 100K+ merchants, and has driven over $1.7B in additional merchant revenue.",
  },

  revenueRaw: {
    ja: "月商 約$1M(MRR $1M / ARR換算≈$12M)、粗利は90%超。$100k→$1M MRR を約1年で達成(10倍)。2024通年売上は$4.3M(前年比+$3.4M)。広告費ゼロ・完全オーガニック。10万超のマーチャントに導入され、累計で+$1.7Bの上乗せ売上を生んだ。",
    en: "~$1M/month (MRR $1M / ≈$12M ARR) at 90%+ gross margin. Grew $100k→$1M MRR in about a year (10×). Full-year 2024 revenue was $4.3M (+$3.4M YoY). Zero ad spend, fully organic. Installed by 100K+ merchants, driving over $1.7B in additional merchant revenue cumulatively.",
  },

  painPoint: {
    ja: "Shopifyで店を出した数十万のマーチャントは、全員が同じ悩みを持つ——『客単価(AOV)を上げたい』。広告で新規客を増やすのは高くつくが、いま買っている客に『もう1個』『セットで』と買わせる方が遥かに安い。だが多くの店主はコードを書けず、バンドルやアップセルを自力で組めない。Erikasはこの『店主が一番欲しい数字(客単価)を、ノーコードで即上げる』という普遍ニーズを突いた。痛点の在処は明確だった——Shopify App Store内で『bundle』『upsell』と検索される回数そのものが、裏取り済みの需要だった。",
    en: "Hundreds of thousands of Shopify merchants share one obsession: raising average order value (AOV). Acquiring new customers via ads is expensive, but getting an existing buyer to add ‘one more’ or buy ‘as a set’ is far cheaper. Yet most store owners can’t code and can’t build bundles or upsells themselves. Erikas attacked that universal need — ‘lift the number merchants want most (AOV), no code, instantly.’ The pain was easy to locate: the very volume of ‘bundle’ and ‘upsell’ searches inside the Shopify App Store was pre-validated demand.",
  },

  body: {
    free: {
      ja: "Kaching Appzは、Shopifyの店舗向けに『客単価を上げる』アプリを束ねたポートフォリオ。看板はバンドル販売アプリ『Kaching Bundle Quantity Breaks』で、まとめ買い割引・セット販売・数量割引をノーコードで設定できる。ほかにPost Purchase Upsell(購入後アップセル)、POP Discount Upsell、Cart Drawer AI Upsell、Subscriptions など、いずれも『買い物カゴの単価を上げる』一点に特化した姉妹アプリを展開している。\n\n作ったのはリトアニアのErikas Mališauskas。2011年からのUI/UXデザイナーで、2016年からフリーランスでShopifyサイトを作っていた。共同創業者(CTO)はDonatas Stundys。Erikasは2018年から自分のプロダクトに挑戦しては失敗を重ね、2021年にようやく最初の成功にたどり着いた。実は本格的なブレイク前に、別のShopifyアプリを$6.5k MRRまで育てて$250kで売却しており、その『型』を握ったうえでKachingに全張りした。\n\n成長エンジンは、驚くことに広告費ゼロ。Shopify App Store内のオーガニック(アプリのASO=ストア内検索最適化)とレビューの積み上げだけで伸ばした。初期はクライアントや友人に無料で入れてもらってインストールとレビューを作り、ランキングを押し上げ、そこから自然流入が雪だるま式に増える流れを作った。\n\n結果、2024年通年で売上$4.3M(前年比+$3.4M)、その後 $100k→$1M MRR を約1年で10倍にし、月商は約$1M・粗利は90%超に達した。導入マーチャントは10万を超え、彼らが生んだ上乗せ売上は累計+$1.7B。少人数チーム・無資金スタートで、Shopifyという巨大プラットフォームの上に高利益のSaaSを積み上げた好例だ。",
      en: "Kaching Appz is a portfolio of Shopify apps built to raise merchants’ average order value. The flagship is the bundling app ‘Kaching Bundle Quantity Breaks,’ which lets merchants set volume discounts, product sets, and quantity breaks with no code. Around it sits a family of sibling apps — Post Purchase Upsell, POP Discount Upsell, Cart Drawer AI Upsell, Subscriptions — each laser-focused on the single job of lifting the value of the cart.\n\nIt was built by Lithuania’s Erikas Mališauskas, a UI/UX designer since 2011 who freelanced building Shopify sites from 2016. His co-founder (CTO) is Donatas Stundys. Erikas spent from 2018 trying and failing at his own products before reaching his first real success in 2021. Notably, before the big breakout he grew a different Shopify app to $6.5k MRR and sold it for $250k — then went all-in on Kaching with that playbook in hand.\n\nThe growth engine, remarkably, ran on zero ad spend. It scaled purely on Shopify App Store organic (ASO — in-store search optimization) plus a compounding base of reviews. Early on he had clients and friends install the apps for free to manufacture installs and reviews, push up the rankings, and kick off a snowball of organic traffic.\n\nThe result: $4.3M revenue in full-year 2024 (+$3.4M YoY), then a 10× run from $100k to $1M MRR in about a year, reaching ~$1M/month at 90%+ gross margin. More than 100,000 merchants have installed the apps, generating over $1.7B in additional revenue cumulatively. With a small team and no funding, it’s a model case of stacking a high-margin SaaS on top of the giant Shopify platform.",
    },
    premium: {
      ja: "【深掘り】広告費ゼロ・少人数で月商$1M・粗利90%超。Kachingが示すのは『プラットフォーム内SEO × ポートフォリオ × 価値連動の粘着』という、派手さの無い再現可能な型だ。順を追って分解する。\n\n■ まず“見習い期間”で型を買う:失敗の3年→$250kのEXIT→全張り\nErikasは2018年から自分のプロダクトに挑んでは外し続けた。ブレイクの前に、別のShopifyアプリを$6.5k MRRまで育てて$250kで売却している。重要なのは金額より『小さく作って・伸ばして・売る』というSaaSの一周を実地で経験し、“何が効くか”の型を手に入れたこと。多くの個人開発者は最初のヒットを当てようと焦るが、彼は先に一周回して勝ち筋を握ってからKachingに全張りした。失敗の3年は浪費ではなく“型の購入費”だった。\n\n■ 流通は『プラットフォーム内SEO』に一本化(広告費ゼロの正体)\nKachingの集客は外部広告ではなく、Shopify App Store内のオーガニック検索に全振りされている。鍵はASO——アプリ名・説明文に『bundle』『quantity breaks』『upsell』など、マーチャントが実際に打ち込む関連キーワードを最大限に織り込み、ストア内検索で上位を取る設計。新規ドメインのGoogle SEOと違い、App Storeは“購買意欲の高い店主が既に集まっている池”なので、検索意図とプロダクトが直結し、CAC(獲得単価)が限りなくゼロに近づく。広告費ゼロは清貧ではなく、最も費用対効果の高い導線を選んだ合理の結果だ。\n\n■ レビューの雪だるま:コールドスタートを“手で”起こす\nApp Store SEOはレビュー数と評価で順位が決まる。だが新規アプリはレビューがゼロという鶏卵問題を抱える。Erikasはこれを泥臭く割った——初期はクライアントや友人に無料でアプリを入れてもらい、インストールとレビューを人力で積み、ランキングを押し上げた。一度上位に乗れば『上位→自然流入→さらにレビュー→さらに上位』の正のループが回り出す。最初のひと転がしだけを手でやり、あとはプラットフォームのアルゴリズムに増幅させる——これがゼロ予算で雪だるまを起こす要点だ。\n\n■ 1アプリでなく“ポートフォリオ”で面を取る\nKachingは単機能アプリを1本売るのではなく、Bundles・Post Purchase Upsell・POP Discount Upsell・Cart Drawer AI Upsell・Subscriptions と、『客単価を上げる』周辺を複数アプリで面的に押さえている。狙いは二つ。第一に、App Store内で関連キーワードの検索結果を自社アプリで埋め、流入の取りこぼしを減らす(検索面の占有)。第二に、1店舗に複数アプリを併用させてLTVを多重化する(クロスインストール)。同じ顧客基盤・同じ技術基盤を使い回せるため、2本目以降の限界費用が低く、これが90%超の粗利の一因にもなる。\n\n■ 課金の粘着は“価値連動”で作る:解約しない理由を内蔵する\nKachingのアプリは、入れるとマーチャントの客単価=売上が実際に増える。導入10万店が生んだ上乗せ売上は累計+$1.7Bに達する。ここが粘着の核心だ——アプリ利用料より、アプリが生む追加利益の方が大きい限り、店主には解約する理由が無い。コストではなく“利益を生む装置”として課金されるので、価格感度が下がり、チャーンが構造的に低い。SaaSの解約対策をUIの引き止めでやるのではなく、『顧客が儲かる』という結果で内蔵しているのが巧い。\n\n■ なぜ少人数・無資金で90%超の粗利が成り立つのか\n決済・配信・与信・国際課金はすべてShopifyが肩代わりし、開発側はアプリ本体に集中できる。流通もApp Store SEOで内製化され外部広告費がかからない。ポートフォリオで技術・顧客基盤を共有するため運用は薄い人数で回る。結果、売上のほとんどが利益として残る(粗利>90%)。Shopifyという“他人の巨大トラフィック”の上に、CAC≒0・運用薄め・解約しにくいSaaSを積む——これがKachingの設計思想であり、プラットフォーム便乗戦略の最も洗練された形だ。",
      en: "【Deep dive】$1M/month at 90%+ margin with zero ad spend and a small team. Kaching demonstrates an unglamorous, reproducible template: ‘in-platform SEO × portfolio × value-linked stickiness.’ Let’s break it down in order.\n\n■ Buy the playbook through an apprenticeship: 3 years of failure → a $250k exit → all-in. From 2018 Erikas tried and missed at his own products. Before the breakout he grew a different Shopify app to $6.5k MRR and sold it for $250k. What matters isn’t the figure but that he ran a full SaaS loop — build small, grow, sell — and walked away holding the template of ‘what works.’ Most indie devs rush to land a first hit; he first completed a lap, secured the winning pattern, then went all-in on Kaching. Those three years of failure weren’t waste — they were the price of the playbook.\n\n■ Distribution funneled entirely into ‘in-platform SEO’ (what ‘zero ad spend’ really means). Kaching’s acquisition isn’t external ads — it’s all-in on organic search inside the Shopify App Store. The key is ASO: weaving the keywords merchants actually type (‘bundle,’ ‘quantity breaks,’ ‘upsell’) into the app name and description to rank in in-store search. Unlike Google SEO on a new domain, the App Store is a pond already stocked with high-intent store owners, so search intent maps directly to the product and CAC approaches zero. ‘Zero ad spend’ isn’t austerity — it’s the rational result of picking the highest-ROI channel.\n\n■ The review snowball: kick off the cold-start ‘by hand.’ App Store ranking is driven by review count and rating, but a new app faces the chicken-and-egg of zero reviews. Erikas split it the gritty way: early on he had clients and friends install the apps for free, manually stacking installs and reviews to push up the rankings. Once you crest into the top, a virtuous loop spins — top rank → organic installs → more reviews → higher rank. Do only the first push by hand and let the platform’s algorithm amplify the rest — that’s how you start a snowball on a zero budget.\n\n■ Take the surface with a portfolio, not a single app. Kaching doesn’t sell one single-feature app — it blankets the ‘raise AOV’ space with several: Bundles, Post Purchase Upsell, POP Discount Upsell, Cart Drawer AI Upsell, Subscriptions. Two aims. First, fill the App Store’s related-keyword results with your own apps so you lose fewer searchers (owning the search surface). Second, get one store to run multiple apps, multiplying LTV (cross-install). Because the same customer base and tech base are reused, the marginal cost of each additional app is low — itself a driver of the 90%+ margin.\n\n■ Build stickiness through ‘value linkage’: embed the reason not to churn. Installing Kaching’s apps actually raises a merchant’s AOV — their revenue. The 100K+ stores using them have generated over $1.7B in additional revenue cumulatively. That is the heart of stickiness: as long as the extra profit the app generates exceeds its fee, the merchant has no reason to cancel. Billed as a ‘profit-generating machine’ rather than a cost, price sensitivity drops and churn is structurally low. Instead of fighting churn with UI retention tricks, Kaching bakes it in through the outcome — ‘the customer makes money.’\n\n■ Why 90%+ margin works with a small, unfunded team. Payments, delivery, billing, fraud, and international tax are all handled by Shopify, so the team focuses on the app itself. Distribution is internalized via App Store SEO with no external ad cost. Sharing tech and customer base across the portfolio keeps operations thin. The result: most revenue falls to profit (90%+ gross margin). Stack a near-zero-CAC, thin-ops, hard-to-cancel SaaS on top of ‘someone else’s giant traffic’ (Shopify) — that is Kaching’s design philosophy, and the most refined form of a platform-piggyback strategy.",
    },
  },

  playbook: {
    ja: [
      "本命の前に小さなSaaSを一周(作る→伸ばす→売る)させ、“何が効くか”の型を実地で握る",
      "需要が裏取り済みの場所を選ぶ:Shopify App Store内の検索ボリューム=そのまま検証済みニーズ",
      "流通はプラットフォーム内SEO(ASO)に一本化:アプリ名・説明文に実検索キーワードを織り込み上位を取る",
      "レビューの鶏卵問題は手で割る:初期は無料インストールでレビューを積み、ランキングの雪だるまを起こす",
      "1アプリでなくポートフォリオで面を取る:関連キーワードを自社で占有＋1店舗に複数併用でLTV多重化",
      "解約しない理由を内蔵する:利用料より大きい“追加利益”を顧客に生ませ、価値連動でチャーンを下げる",
      "決済・配信・課金はShopifyに任せ、開発と運用を薄くして粗利を90%超に保つ",
    ],
    en: [
      "Run one small SaaS loop (build → grow → sell) before the main bet to secure the ‘what works’ template",
      "Pick a place where demand is pre-validated: Shopify App Store search volume is itself proven need",
      "Funnel distribution into in-platform SEO (ASO): weave real search keywords into app name/description to rank",
      "Crack the review chicken-and-egg by hand: seed reviews via free installs early to start the ranking snowball",
      "Take the surface with a portfolio, not one app: own related keywords and cross-install to multiply LTV",
      "Embed the reason not to churn: make customers earn ‘extra profit’ exceeding the fee — value-linked retention",
      "Let Shopify handle payments/delivery/billing; keep dev and ops thin to hold 90%+ gross margin",
    ],
  },

  failureNote: {
    ja: "華やかな『月商$1M・粗利90%超』の裏で、Erikasは2018年から自分のプロダクトに挑んでは外し続け、最初の成功は2021年。ブレイク前に育てた別アプリの$250k売却も、額より『小さく作って売る一周』を経験して型を得たことに意味があった。失敗の数年は浪費ではなく、勝ち筋を買うための投資だった。",
    en: "Behind the headline ‘$1M/month at 90%+ margin,’ Erikas spent from 2018 trying and missing at his own products, reaching his first success only in 2021. Even the $250k sale of an earlier app mattered less for the money than for the experience of completing a ‘build-small-and-sell’ loop and acquiring the template. Those years of failure weren’t waste — they were the investment that bought the winning pattern.",
  },

  publishedAt: "2026-06-30",
  featured: false,
} satisfies Case;
