import type { Case } from "../types";

// 事実の典拠(一次情報を優先・複数ソースで照合):
//  - 創業者 Ben Cera 本人の調達告知(LinkedIn, @benbroca):
//      https://www.linkedin.com/posts/benbroca_today-im-announcing-that-polsia-raised-30m-activity-7463621327774588928-Yqgn
//      本人の文言(X/@bencera_ でも同文): 「Polsia just raised $30M at a $250M valuation. Approaching $10M annual run rate.
//      One Founder + AI. Zero employees. ... It also ran its own fundraising.」
//  - 本人のX: https://x.com/bencera_ (特定tweetのstatus URLは未確認→FounderPortraitは非表示でよい)
//  - 本人出演インタビュー(一次証言): YouTube「$0 to $100M ARR in 3 months ... Ben Cera [CloudKitchens & Polsia]」
//      https://www.youtube.com/watch?v=BeMykxnLtco / Mixergy(懐疑的に本人へ直撃)/ GTMnow(GTM #192)。
//  - 公式ローンチ: Product Hunt https://www.producthunt.com/products/polsia
//  - 調達の独立報道(二次): pulse2 / aiweekly / ain.ua / The SaaS News / Founderland 等(いずれも $30M @ $250M, 従業員0)。
//  - 懐疑の検証記事(二次): preuve.ai「Is It Legit?」, Mixergy「$250M scam?」。
// 経歴メモ: Ben Cera = CloudKitchens(Travis Kalanick)で約4.5年・社員2人目/複数市場のP&L・GMを統括。Columbiaで工学。パリ拠点。
//   公開名は "Ben Cera"(本人X @bencera_)。LinkedInのハンドルは benbroca。
// 数値メモ:
//   - 収益は本人申告の年換算ラン・レート。告知文「approaching $10M ARR」+「5ヶ月で約$10M ARR / 有料7,600社 / M2継続85%」(複数報道)で照合。
//     → revenueType: "arr"、mrrUsd = $10M/12 ≈ 833,000。periodMonths = 5(「five months post-launch ~$10M ARR」に合わせる)。
//   - 速度の別主張(本人):「$1M ARRを30日」「$6.27M ARRを90日未満」。これらは本文で trajectory として明記。
//   - 料金: $49/月 + 売上の20%(Stripe経由でカット)。複数ソースで一致。
//   - ARRは“実現値”ではなく run-rate(かつ顧客売上×20%の集計を含む)で、外部から懐疑あり → failureNote / premium で正直に扱う。
//   - 注意: 別社「Halo AI」のような同名混同はないが、"Ben Sera" 等の表記揺れに注意(同一人物)。

export const polsia = {
  id: "polsia",
  slug: "polsia",

  personName: "Ben Cera",
  appName: "Polsia",
  appUrl: "https://www.producthunt.com/products/polsia",
  sources: [
    {
      url: "https://www.linkedin.com/posts/benbroca_today-im-announcing-that-polsia-raised-30m-activity-7463621327774588928-Yqgn",
      title: {
        ja: "創業者 Ben Cera 本人の$30M調達告知(LinkedIn / 主要数字の一次)",
        en: "Founder Ben Cera’s own $30M raise announcement (LinkedIn / primary for key numbers)",
      },
      kind: "primary",
    },
    {
      url: "https://x.com/bencera_",
      title: { ja: "創業者 Ben Cera 本人のX", en: "Founder Ben Cera’s own X account" },
      kind: "primary",
    },
    {
      url: "https://www.youtube.com/watch?v=BeMykxnLtco",
      title: {
        ja: "本人出演インタビュー(経歴・仕組み・数字の一次証言)",
        en: "Founder interview (background, mechanics, primary testimony on numbers)",
      },
      kind: "primary",
    },
    {
      url: "https://mixergy.com/interviews/is-polsia-a-250m-scam-i-asked-the-founder-to-his-face/",
      title: {
        ja: "Mixergy 本人直撃(「$250Mは詐欺か?」懐疑への本人回答)",
        en: "Mixergy grills the founder (‘a $250M scam?’ — his answers to skepticism)",
      },
      kind: "primary",
    },
    {
      url: "https://www.producthunt.com/products/polsia",
      title: { ja: "Polsia 公式ローンチ(Product Hunt)", en: "Polsia’s official launch (Product Hunt)" },
      kind: "primary",
    },
    {
      url: "https://pulse2.com/polsia-30-million-at-250-million-valuation-raised-for-ai-operations-platform/",
      title: { ja: "調達の独立報道($30M @ $250M・従業員0)", en: "Independent funding coverage ($30M @ $250M, zero employees)" },
      kind: "secondary",
    },
    {
      url: "https://gtmnow.com/gtm-192-inside-the-company-that-raised-30m-at-a-250m-valuation-with-0-employees-ben-cera-polsia/",
      title: { ja: "GTMnow(GTM #192)による解説(仕組み・指標)", en: "GTMnow (GTM #192) breakdown (mechanics, metrics)" },
      kind: "secondary",
    },
    {
      url: "https://preuve.ai/blog/polsia-review",
      title: { ja: "Polsia は本物か?の検証レビュー(懐疑側)", en: "‘Is Polsia legit?’ scrutiny review (skeptic side)" },
      kind: "secondary",
    },
  ],

  mrrUsd: 833_000,
  revenueType: "arr",
  periodMonths: 5,
  users: 7_600,
  launchYear: 2025,

  category: "tool",
  techStack: ["stripe"],
  marketingTags: ["x", "productHunt"],

  title: {
    ja: "従業員ゼロ・たった1人で時価総額$250M — Ben Ceraの『会社を丸ごと動かすAI』Polsiaが資金調達まで自動化し$30Mを集めるまで",
    en: "Zero Employees, One Human, a $250M Valuation — How Ben Cera’s ‘AI That Runs Whole Companies,’ Polsia, Even Automated Its Own $30M Raise",
  },

  summary: {
    ja: "元CloudKitchens幹部のBen Ceraが、たった1人＋AIで立ち上げたAI企業運営プラットフォーム。9体のAIエージェントが事業を24時間自走させ、launchから数ヶ月でARR約$10M(本人公表のラン・レート)・有料7,600社に到達。従業員ゼロのまま$30Mを$250Mの評価で調達した。",
    en: "An AI company-operations platform built by ex-CloudKitchens operator Ben Cera with one human + AI. Nine agents run businesses 24/7; within months it reached ~$10M ARR (founder-reported run-rate) and 7,600 paying companies — and raised $30M at a $250M valuation with zero employees.",
  },

  revenueRaw: {
    ja: "従業員ゼロ・創業者1人でARR約$10M(本人公表の年換算ラン・レート)、有料7,600社、2ヶ月目継続率85%。課金は$49/月＋売上の20%。2026年5月にSound Ventures主導で$30Mを$250Mの評価額で調達(調達作業の大部分もAIが実行)。※ARRは本人申告のラン・レートで外部から懐疑もある。",
    en: "Zero employees, one founder: ~$10M ARR (founder-reported annual run-rate), 7,600 paying companies, 85% month-two retention. Pricing is $49/mo + 20% of revenue. Raised $30M at a $250M valuation in May 2026, led by Sound Ventures — with the AI running most of the raise itself. (ARR is a founder-reported run-rate and has drawn skepticism.)",
  },

  painPoint: {
    ja: "個人開発者やソロ起業家が事業を伸ばせない最大の理由は『1人では会社の全機能(開発・マーケ・営業・サポート・経理)を同時に回せない』ことだ。人を雇えば速いが、採用は遅く高くつく。CloudKitchensで複数市場のP&L・GMを統括したBen Ceraは、会社運営の大半が“反復可能なワークフロー”だと体で知っていた——ならエージェントに丸投げできる。痛点は『良いアイデア』ではなく『それを実行し続ける人手』そのものだった。",
    en: "The biggest reason indie builders and solo founders stall is simple: one person can’t run every function of a company at once — engineering, marketing, sales, support, finance. Hiring is faster but slow and expensive to do. Having run P&Ls and GMs across multiple markets at CloudKitchens, Ben Cera knew in his bones that most company operations are repeatable workflows — so they can be handed to agents. The pain wasn’t ‘a good idea,’ it was the labor to execute one, every day.",
  },

  body: {
    free: {
      ja: "Polsiaは、事業のアイデアを入力すると、AIエージェントの“チーム”がそのまま会社を運営してくれるプラットフォームだ。市場調査・ランディングページ・コード実装・Meta/Google広告・コールドメール・カスタマーサポートまで、9体の専門エージェントが役割分担し、記憶(メモリ)を共有しながら24時間自走する。中心にいるのは“オーケストレーター(CEO役)”で、朝に当日の計画を立て、夜に要約を返す。料金は$49/月に加えて、生み出した売上の20%をStripe経由で受け取る成果連動型だ。\n\n作ったのはBen Cera。Travis Kalanick率いるCloudKitchensで約4.5年・社員2人目として複数市場のP&LとGMを統括した“オペレーションの人”で、Columbiaで工学を学び、いまはパリを拠点にする。Polsiaは約$1M(ほぼ使っていない)のプレシード資金で、たった1人＋AIで立ち上げられた。\n\n数字は派手だ。本人公表で、launchから数ヶ月のうちにARRは約$10Mのラン・レートに達し、有料の事業オーナーは7,600社、2ヶ月目の継続率は85%。速度面では「30日で$1M ARR」「90日未満で$6.27M ARR」という本人主張もある。そして2026年5月、Sound Venturesを筆頭に$30Mを$250Mの評価額で調達した——従業員ゼロのまま。最大の見せ場は、その資金調達そのものをAIが回したこと。データルームの整備・投資家向け説明・デューデリ対応をPolsiaが実行し、Ben自身は最終面談に出ただけだという。プロダクトのデモが、会社の調達という“本番”で行われた格好だ。\n\nただし、この数字には懐疑もある。ARRは“実現済みの売上”ではなく本人申告のラン・レート(しかも顧客の売上×20%の集計を含む)で、初期顧客がスケールしても定着するかは未証明だ。次のセクションでは、9体のエージェント設計・成果連動課金・“調達をデモにする”という戦略を分解しつつ、どこまでが再現可能でどこからが物語(ナラティブ)なのかを切り分ける。",
      en: "Polsia is a platform where you type in a business idea and a ‘team’ of AI agents runs the company for you. Nine specialized agents split the work — market research, landing pages, code, Meta/Google ads, cold email, customer support — sharing memory and running 24/7. At the center is an ‘Orchestrator’ (the CEO role) that drafts the day’s plan each morning and a summary each night. Pricing is outcome-aligned: $49/month plus 20% of the revenue your business earns, taken via Stripe.\n\nThe builder is Ben Cera. An operations person to the core — roughly 4.5 years as employee #2 at Travis Kalanick’s CloudKitchens, running P&Ls and GMs across multiple markets — he studied engineering at Columbia and now works out of Paris. He built Polsia solo, one human + AI, on about $1M of pre-seed he barely spent.\n\nThe numbers are loud. By his own account, within months of launch ARR reached a ~$10M run-rate, with 7,600 paying business owners and 85% month-two retention. On speed, he also claims ‘$1M ARR in 30 days’ and ‘$6.27M ARR in under 90 days.’ Then, in May 2026, Polsia raised $30M at a $250M valuation led by Sound Ventures — still with zero employees. The set piece: the AI ran the fundraise itself. Polsia assembled the data room, handled investor briefings and diligence, and Ben says he only showed up for the final calls. The product demo was the company’s own financing round.\n\nBut the figures invite skepticism. ARR here isn’t realized revenue — it’s a founder-reported run-rate (and it folds in an aggregate of customers’ revenue × 20%), and whether early customers retain at scale is unproven. The next section breaks down the nine-agent design, the outcome-based pricing, and the ‘make the raise the demo’ strategy — separating what’s reproducible from what’s narrative.",
    },
    premium: {
      ja: "【深掘り】Polsiaの面白さは『会社運営という曖昧な仕事を、エージェントの分業＋成果連動課金＋ナラティブの3点で“製品化”した』ことにある。順に解剖し、再現可能な部分と懐疑すべき部分を分ける。\n\n■ なぜ“会社運営”がエージェント化できるのか(9体の分業)\nPolsiaの核は、会社の仕事を機能ごとに分解し、専門エージェントに割り当てた設計だ。報道・本人説明によれば構成は概ね——オーケストレーター(CEO役/朝の計画・夜の要約)、ソーシャル(投稿の起案・配信)、メールアウトリーチ(見込み客探索・コールドメール)、サポート(受信箱を読み返信草案)、広告運用(Google/Metaの最適化)、ファイナンス(Stripe売上の同期・支出管理)、事業計画(戦略・KPI更新)、競合リサーチ(Web検索)、コード生成(機能実装・PR作成)。鍵は“メモリの共有”で、各エージェントが同じ文脈を見るため取りこぼしが減る。Ben CeraのCloudKitchens由来の洞察——会社運営の大半は反復可能なワークフロー——が、そのままアーキテクチャになっている。個人開発者の持ち帰りは『自分の事業の定常業務を機能単位に割り、エージェント＋共有メモリで回す』という発想だ。\n\n■ 成果連動課金($49 + 売上20%)の妙と“諸刃”\n料金は月$49の薄い固定費に、生み出した売上の20%を上乗せする成果連動。これは二重の意味で効く。(1)顧客の成功に賭ける構造なので信頼を得やすく、単価の上限が顧客の成長に連動して伸びる。(2)“顧客が稼ぐほどPolsiaも稼ぐ”ため、エージェントを売上最大化に最適化する動機がそろう。一方で諸刃でもある——表向きのARRが「顧客売上×20%」の集計を含むため、顧客側の売上が一過性だと、Polsiaの“ARR”もラン・レート上は膨らむが実現・継続は別問題になる。だからこの数字は“実現済みMRR”ではなく“ラン・レート”として読むのが正しい。\n\n■ 資金調達そのものを“最大のデモ”にした\nPolsia最大の広告は、$30Mの調達をAIが回したという事実そのものだ。データルーム整備・投資家ブリーフィング・デューデリ対応をPolsiaが実行し、Benは最終面談のみ。これは2つの効果を生む。第一に、プロダクトの能力を“本番(自社の資金調達)”で証明する究極のケーススタディになる。第二に、Xでのビルド・イン・パブリック＋公開ダッシュボードと組み合わせ、調達ニュース自体が巨大なPRエンジンになった。Sound Venturesを筆頭に True Ventures 等が参加。集客の核は広告費ではなく『従業員ゼロで$250M』という反証しにくい物語だった。\n\n■ ソロ創業者の経済学(80% AI, 20% taste)\n従業員ゼロは、固定費(人件費)をほぼ消すことを意味する。SaaS部分の粗利は理論上ほぼ100%に近づき、実コストはLLM推論費と広告費に寄る。Ben自身はこの働き方を「80%はAI、20%は“taste(センス)”」と表現する——実装や運用はAIに任せ、人間は方向づけ・判断・最終責任に集中する。これは“1人で会社を持つ”ことの経済的な意味を変える主張で、再現を狙うなら『何を自動化し、どの20%を自分が握るか』の線引きが要になる。\n\n■ 懐疑と論点(ここを外さない)\nPolsiaには根強い懐疑がある。Mixergyは「$250Mは詐欺か?」と本人へ直撃し、複数のレビューが“ラン・レートの膨らみ”“初期顧客の定着不明”“評価額の過熱”を指摘する。フェアに見れば——強い実体シグナルは確かにある(有料7,600社、2ヶ月目継続85%、著名VCの参加)。一方で弱い点も明確だ(ARRは実現値でなくラン・レートで顧客売上の集計を含む/解約耐性は時間が必要/“AIが調達を回した”は一部ナラティブ)。読者(個人開発者)への実務的な結論は、数字を“到達したラン・レート”として割り引いて読み、模倣すべきは見出しの評価額ではなく、(a)定常業務のエージェント化 (b)成果連動の課金設計 (c)ローンチ/調達そのものを集客装置にする発想、の3点に絞ることだ。\n\n■ 個人開発者への持ち帰り(まとめ)\n第一に、もう“人を雇えないから回らない”は言い訳にならない——反復業務はエージェント＋共有メモリで動く。第二に、課金は成果に寄せると信頼と単価が同時に取れる(ただしARRの読み方に注意)。第三に、最大のマーケティングは派手な広告ではなく、自分の運営・調達という“本番のデモ”をXで透明に見せること。Polsiaは「AIの賢さ」ではなく「会社運営の製品化＋ナラティブ設計」で勝ち(を主張し)に行った事例だ。",
      en: "【Deep dive】What makes Polsia interesting is that it ‘productized’ the fuzzy job of running a company through three levers: agent division-of-labor, outcome-based pricing, and narrative. We dissect each — separating what’s reproducible from what deserves skepticism.\n\n■ Why ‘running a company’ can be agent-ified (the nine-agent split). Polsia’s core is decomposing company work by function and assigning each to a specialist agent. Per reporting and the founder, the lineup is roughly: an Orchestrator (CEO — morning plan, evening summary), social (drafts and posts), email outreach (finds prospects, sends cold email), support (reads the inbox, drafts replies), ads (optimizes Google/Meta), finance (syncs Stripe revenue, tracks spend), business planning (updates strategy and KPIs), competitor research (web searches), and code generation (ships features, opens PRs). The key is shared memory: every agent sees the same context, so fewer things slip. Ben Cera’s CloudKitchens insight — most company operations are repeatable workflows — is the architecture itself. The takeaway for indie builders: split your own recurring operations by function and run them on agents plus shared memory.\n\n■ Outcome-based pricing ($49 + 20% of revenue) — clever and double-edged. Pricing is a thin $49/month fixed fee plus 20% of the revenue the business generates. It works two ways: (1) betting on the customer’s success earns trust, and the price ceiling rises with the customer’s growth; (2) because Polsia earns more when customers earn more, the agents are motivated to maximize revenue. But it’s double-edged: the headline ARR folds in an aggregate of ‘customer revenue × 20%,’ so if customers’ revenue is transient, Polsia’s ‘ARR’ inflates on a run-rate basis while realized, retained revenue is a separate question. Read the number as a run-rate, not realized MRR.\n\n■ Turning the fundraise itself into the ultimate demo. Polsia’s biggest ad is the fact that the AI ran the $30M raise. Polsia assembled the data room, ran investor briefings and diligence; Ben only joined the final calls. Two effects: first, it’s the ultimate case study — proving the product on a live, high-stakes job (your own financing). Second, combined with build-in-public on X and a public dashboard, the funding news became a giant PR engine. Sound Ventures led, with True Ventures and others participating. The growth core wasn’t ad spend — it was a hard-to-rebut story: ‘$250M with zero employees.’\n\n■ The economics of the solo founder (80% AI, 20% taste). Zero employees means erasing payroll, the dominant fixed cost. Gross margin on the SaaS portion approaches ~100% in theory, and real costs shift to LLM inference and ads. Ben describes the work as ‘80% AI, 20% taste’: hand implementation and operations to AI; the human concentrates on direction, judgment, and final accountability. It’s a claim that rewrites what ‘owning a company alone’ costs — and if you want to copy it, the crux is deciding what to automate and which 20% you keep.\n\n■ Skepticism and the real debate (don’t skip this). Polsia draws persistent doubt. Mixergy grilled him with ‘is this a $250M scam?’, and multiple reviews flag run-rate inflation, unproven retention of early customers, and a frothy valuation. Fairly read: the strong signals are real (7,600 paying companies, 85% month-two retention, brand-name VCs). The weak points are equally clear (ARR is a run-rate, not realized, and includes an aggregate of customer revenue; churn resistance needs time; ‘AI ran the raise’ is partly narrative). The practical conclusion for indie builders: discount the figures as a ‘reached run-rate,’ and copy not the headline valuation but three things — (a) agent-ifying recurring operations, (b) outcome-aligned pricing, and (c) making the launch/raise itself the acquisition engine.\n\n■ Takeaways for indie builders (summary). First, ‘I can’t scale because I can’t hire’ is no longer an excuse — recurring work runs on agents plus shared memory. Second, aligning price with outcomes wins trust and price ceiling at once (just read ARR carefully). Third, the biggest marketing isn’t flashy ads; it’s showing your own operations or fundraise as a live demo, transparently, on X. Polsia went after the win not with ‘smarter AI’ but with productized company-operations plus deliberate narrative design.",
    },
  },

  playbook: {
    ja: [
      "会社運営を“反復可能なワークフロー”に分解し、機能ごとにAIエージェントを割り当てる(CEO/開発/マーケ/営業/サポート/経理…)",
      "エージェント同士でメモリ(文脈)を共有させ、毎晩1サイクル自走させる(夜間タスク＋オンデマンド枠)",
      "課金を成果連動にする($49/月＋売上の20%/Stripe経由)——顧客の成功に賭け、信頼と単価上限を同時に取る",
      "プロダクトのデモを“自分自身の運営/調達”で見せる(データルーム整備・投資家対応までAIに実行させ、公開ダッシュボードで透明化)",
      "Xで徹底的にビルド・イン・パブリック＋Product Huntで初速をつくる(派手な物語＝最大の集客装置)",
      "ARRは“実現値”と“ラン・レート”を区別して語り、懐疑に正面から答える(信頼を担保する)",
    ],
    en: [
      "Decompose company operations into repeatable workflows and assign an agent per function (CEO/eng/marketing/sales/support/finance…)",
      "Give agents shared memory (context) and run one autonomous cycle each night (nightly task + on-demand credits)",
      "Make pricing outcome-based ($49/mo + 20% of revenue via Stripe) — bet on customer success to win trust and price ceiling at once",
      "Demo the product on your own operations/raise (let AI run the data room and investor process; keep a public dashboard for transparency)",
      "Build in public relentlessly on X + launch on Product Hunt for initial momentum (a bold story is the biggest acquisition engine)",
      "Talk about ARR by distinguishing realized revenue from run-rate, and answer skepticism head-on (to earn trust)",
    ],
  },

  failureNote: {
    ja: "Polsiaの数字には正当な懐疑がある。ARRは“実現済みの売上”ではなく本人申告のラン・レートで、しかも顧客の売上×20%の集計を含むため、初期顧客が定着しなければ見かけのARRは膨らんでも実態は伴わない。$250Mの評価額は過熱との指摘があり、Mixergyは「詐欺か?」と本人へ直撃した。一方で有料7,600社・2ヶ月目継続85%・著名VCの参加という実体シグナルも確かにある。結論は二者択一ではなく、『数字を到達ラン・レートとして割り引きつつ、再現すべき仕組み(エージェント分業・成果連動課金・調達をデモ化する発想)だけを抜き出す』ことだ。",
    en: "Polsia’s numbers invite legitimate skepticism. ARR isn’t realized revenue — it’s a founder-reported run-rate that folds in an aggregate of customers’ revenue × 20%, so if early customers don’t retain, the headline ARR inflates without substance behind it. The $250M valuation has been called frothy, and Mixergy confronted him with ‘is this a scam?’ Yet real signals also exist: 7,600 paying companies, 85% month-two retention, brand-name VCs. The conclusion isn’t binary — discount the figures as a reached run-rate, and extract only the reproducible mechanics: agent division-of-labor, outcome-aligned pricing, and making the raise itself a demo.",
  },

  publishedAt: "2026-06-26",
} satisfies Case;
