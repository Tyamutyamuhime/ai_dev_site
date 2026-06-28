import type { Case } from "../types";

// 事実の典拠(一次・二次情報で裏取り):
//  - 創業者 Nicole Cheung 本人の LinkedIn(肩書 "4x Founder | I build viral apps"): https://www.linkedin.com/in/nicole-s-cheung/ (primary)
//  - Sprout 公式サイト(プロダクト・料金。"AI Job Search"/swipe-to-apply): https://www.usesprout.com/ (primary)
//  - App Store リスティング("Sprout (previously Prep AI)"= 旧称 Prep AI を裏取り): https://apps.apple.com/us/app/sprout-ai-job-search/id6740011494 (primary)
//  - 本人出演ポッドキャスト The Superwall Podcast「she makes $400k/mo from ai apps (while in college)」: https://podcasts.apple.com/us/podcast/...id1831299632 (primary=本人の語り)
//  - 本人の卒論 "From 0 to 1 Million Users in 6 Months: How I Built My Viral App"(Claremont McKenna): https://scholarship.claremont.edu/cmc_theses/3882/ (primary=本人の著作)
//  - Claremont McKenna College ニュース(Glam Up: 6ヶ月で100万ユーザー・App Store 3位・$150K MRR、共同創業 Aaron Paul): https://www.cmc.edu/news/nicole-cheung-25-co-founds-ai-beauty-app-achieves-milestone (secondary)
//  - Tech in Asia(X, 2025-11): "Glam Up → $150K MRR in 6 months / Sprout → $250K MRR in 8 months / No ads. No VC.": https://x.com/techinasia/status/1990218587835859202 (secondary)
//  - BigGo Finance(UGCクリエイター制度の分解。200+人の育成・オンボ修了者の50%超が2週間以内にバズ・ピーク週4億回再生): https://finance.biggo.com/news/c3da3cfd909a60f2 (secondary)
//
// 数値メモ:
//  - Sprout は「8ヶ月で $250K MRR」を主数値に採用(revenueType:"mrr", periodMonths:8)。直近は ~$200K MRR に落ち着き、月間4〜5億回の再生を継続(複数二次で一致)。
//  - Glam Up($150K MRR / 6ヶ月 / 100万ユーザー / App Store 3位)は「同じ型を回した先行プロダクト」として本文で扱う(別アプリのため users 等には入れない)。
//  - 共同創業者: Glam Up は Nicole Cheung & Aaron Paul(YC系エンジニア)。Sprout 側の共同創業者は一次で確証できないため personName は Nicole Cheung 単独表記。
//  - launchYear / Sprout のユーザー数は一次で確証できず未設定(捏造しない)。techStack は本人が非エンジニアの no-code/AI 構築で具体ツールを一次特定できないため空配列。
//  - 本人 X(@nicolecheungx)はフォロワー限定で公開 status URL を取れないため、本人ポートレート用の status URL は未設定(= 自動で非表示。捏造URLは入れない)。

export const sprout = {
  id: "sprout",
  slug: "sprout",

  personName: "Nicole Cheung",
  appName: "Sprout",
  appUrl: "https://www.usesprout.com",
  sources: [
    {
      url: "https://www.linkedin.com/in/nicole-s-cheung/",
      title: {
        ja: "創業者 Nicole Cheung 本人の LinkedIn(プロフィール・肩書)",
        en: "Founder Nicole Cheung’s own LinkedIn profile",
      },
      kind: "primary",
    },
    {
      url: "https://www.usesprout.com",
      title: { ja: "Sprout 公式サイト(プロダクト・料金)", en: "Sprout official site (product & pricing)" },
      kind: "primary",
    },
    {
      url: "https://apps.apple.com/us/app/sprout-ai-job-search/id6740011494",
      title: { ja: "App Store リスティング(旧称 Prep AI を確認)", en: "App Store listing (confirms former name ‘Prep AI’)" },
      kind: "primary",
    },
    {
      url: "https://podcasts.apple.com/us/podcast/nicole-cheung-she-makes-%24400k-mo-from-ai-apps-while/id1831299632?i=1000767651758",
      title: { ja: "本人出演ポッドキャスト(The Superwall Podcast)", en: "Founder interview on The Superwall Podcast" },
      kind: "primary",
    },
    {
      url: "https://scholarship.claremont.edu/cmc_theses/3882/",
      title: {
        ja: "本人の卒業論文「6ヶ月で100万ユーザー」(Claremont McKenna)",
        en: "Cheung’s own senior thesis “0 to 1M Users in 6 Months” (Claremont McKenna)",
      },
      kind: "primary",
    },
    {
      url: "https://www.cmc.edu/news/nicole-cheung-25-co-founds-ai-beauty-app-achieves-milestone",
      title: { ja: "CMC ニュース(Glam Up の数字・共同創業者)", en: "CMC news (Glam Up metrics & co-founder)" },
      kind: "secondary",
    },
    {
      url: "https://x.com/techinasia/status/1990218587835859202",
      title: { ja: "Tech in Asia(2アプリの MRR・無資金を要約)", en: "Tech in Asia (summary of both apps’ MRR, no VC)" },
      kind: "secondary",
    },
    {
      url: "https://finance.biggo.com/news/c3da3cfd909a60f2",
      title: { ja: "BigGo Finance(UGCクリエイター制度の分解)", en: "BigGo Finance (breakdown of the UGC creator system)" },
      kind: "secondary",
    },
  ],

  mrrUsd: 250_000,
  revenueType: "mrr",
  periodMonths: 8,

  category: "career",
  techStack: [],
  marketingTags: ["tiktok", "instagram", "youtube", "shorts", "influencer", "paywallOpt", "wordOfMouth"],

  title: {
    ja: "非エンジニアの大学生が作った「求人版Tinder」Sprout —「作る」より「配る」に賭け、8ヶ月で月$250kに到達するまで",
    en: "Sprout, the “Tinder for jobs” built by a non-engineer in college — betting on distribution over building to reach $250K MRR in 8 months",
  },

  summary: {
    ja: "Claremont McKenna在学中のNicole Cheungが作った求人アプリ。スワイプで応募し、AIが職務ごとに履歴書・カバーレターを書き、エージェントが企業サイトへ自動応募する。広告ゼロ・VCゼロで8ヶ月・月$250kに到達。前作の美容アプリGlam Up(6ヶ月で100万ユーザー)と同じ『クリエイター量産』の型を再利用した。",
    en: "A job-search app built by Nicole Cheung while at Claremont McKenna: swipe to apply, AI tailors a resume and cover letter per role, and an agent auto-submits on the employer’s site. With no ads and no VC it hit $250K MRR in 8 months — reusing the same creator-army playbook behind her earlier beauty app Glam Up (1M users in 6 months).",
  },

  revenueRaw: {
    ja: "ローンチから約8ヶ月で月$250k(MRR)に到達。直近は月$200k前後で推移し、TikTok・Instagram・YouTube横断で月4〜5億回の再生を回し続けている。広告費ゼロ・VC調達ゼロのブートストラップ。旧称はPrep AI。",
    en: "~$250K MRR about 8 months after launch; recently settling around $200K MRR while sustaining 400–500M monthly views across TikTok, Instagram, and YouTube. Fully bootstrapped — no ad spend, no VC. Formerly named Prep AI.",
  },

  painPoint: {
    ja: "新卒・第二新卒の就活は『同じ情報を何十回も打ち込む』作業の地獄だ。求人ごとにWorkdayの長大なフォームを埋め、職務に合わせて履歴書とカバーレターを毎回書き直す——応募1社で消耗し、量が出せない。Sproutはこの『応募の摩擦』を狙い撃ちした:気になる求人をスワイプするだけで、AIが職務に合わせた書類を生成し、エージェントが企業サイトに代理入力して送信する。学生本人が一番よく知っている『就活のだるさ』が、そのまま市場の入口だった。",
    en: "For new grads and early-career seekers, job hunting is the hell of re-typing the same facts dozens of times: filling out endless Workday forms per posting and rewriting a resume and cover letter for every role — one application drains you, so volume never happens. Sprout targets that application friction directly: swipe on a job you like, AI generates role-tailored documents, and an agent fills and submits the application on the employer’s site for you. The ‘job-hunt grind’ students know best was itself the market entry point.",
  },

  body: {
    free: {
      ja: "Sproutは『求人版Tinder』を名乗る就活アプリ。何百万件の求人をスワイプして気になるものを選ぶと、SproutのAIがあなたのプロフィールと求人を突き合わせ、不足情報を埋める短い質問をしたうえで、その職務専用の履歴書とカバーレターを生成する。確認(またはスキップ)すると、AIエージェントが企業の応募ページに代理で入力して送信まで行う。バラバラになりがちな応募状況も1つのダッシュボードに集約される。\n\n作ったのはNicole Cheung。Claremont McKenna College(2025年卒、心理学×経済の二重専攻)在学中に、エンジニアリングの専門教育を受けないまま複数の消費者向けAIアプリを立ち上げた『4x Founder(4度の創業者)』だ。最初の代表作は美容アプリGlam Up——顔写真をアップするとAIが顔・パーソナルカラーを解析し、メイクのアドバイスと商品提案を返す。共同創業者はY Combinator系のエンジニアAaron Paul。2024年4月のローンチから半年で、広告費ゼロ・外部資金ゼロのまま100万ユーザー超、App Storeで3位、月$150k(MRR)に到達した。\n\nSprout(旧称Prep AI)は、その『勝ち筋』を別ジャンルへ移植した2本目だ。Nicoleの主張はシンプルで、いまの時代は『誰でも週末でアプリを作れる』からこそ、本当の制約は機能開発ではなく『どうやって人を集めるか』に移った、というもの。だからSproutでも、プロダクトの磨き込みと同じかそれ以上に、配布(ディストリビューション)そのものを設計対象にした。料金はBasic/Pro/Ultraの3段で、月あたりの応募数で区切る従量設計。週課金より月課金が約25%安く、本格利用にはサブスクが必要になる。\n\nそしてローンチから約8ヶ月、Sproutは月$250k(MRR)に到達。前作Glam Upと合わせ、2本のアプリで合計月$400k規模を、広告もVCも使わずに作り出した。",
      en: "Sprout calls itself the ‘Tinder for jobs.’ You swipe through millions of roles; for the ones you like, Sprout matches your profile against the posting, asks a few focused questions to fill in gaps, and generates a resume and cover letter tailored to that specific job. Once you approve (or skip review), an AI agent fills out and submits the application on the employer’s own site. Everything that usually scatters across tabs is collected into one dashboard.\n\nIt was built by Nicole Cheung — a self-described ‘4x founder’ who launched several consumer AI apps with no formal engineering training while a student at Claremont McKenna College (Class of 2025, a double major in psychology and economics). Her first hit was the beauty app Glam Up: upload a selfie and AI analyzes your face and color season, then returns makeup advice and product picks. Her co-founder there was Aaron Paul, a Y Combinator–affiliated engineer. Within six months of its April 2024 launch — with zero ad spend and no outside funding — Glam Up passed one million users, hit #3 on the App Store, and reached $150K MRR.\n\nSprout (formerly Prep AI) ports that winning formula into a new category. Cheung’s thesis is blunt: now that ‘anyone can build an app in a weekend,’ the real constraint has shifted from shipping features to acquiring an audience. So with Sprout she treated distribution itself as the thing to engineer, as much as the product. Pricing comes in three tiers — Basic, Pro, Ultra — capped by applications per month, with monthly billing roughly 25% cheaper than weekly, and a subscription required to use it for real.\n\nAbout eight months after launch, Sprout reached $250K MRR. Together with Glam Up, two apps were generating on the order of $400K a month combined — built without ads or venture capital.",
    },
    premium: {
      ja: "【深掘り】Sproutの本質は求人アプリであること以上に、『バイラルを“運”ではなく“工程”に変えた配布マシン』である点にある。Nicoleが2本のアプリで再利用した仕組みを分解する。\n\n■ 中核思想:制約は『作る』から『配る』へ移った\nNicoleの一貫した主張は「誰でも週末でアプリを作れる時代、勝負を決めるのは機能ではなく観客(オーディエンス)だ」。だから彼女はプロダクトと同じ熱量で“配布”を設計する。Glam Upでもらった結論——広告ゼロ・無資金でも、配布を仕組み化すれば100万ユーザーに届く——を、Sproutでそのまま再演した。これは『良いものを作れば広まる』の真逆で、『広め方を先に決めてから作る』に近い。\n\n■ 4ステップのクリエイター制度(バイラルの工場)\nSproutの集客の心臓は、200人超のUGCクリエイターを“育成”して回す仕組みだ。報じられている型は4段:(1)ソーシング=作り手を集める、(2)オンボーディング=構造化したコース(社内“学校”)で勝ち筋を教え込む、(3)マネジメント=フィードバックループで一人ひとりの投稿を改善する、(4)最適化=紹介(リファラル)インセンティブと分析基盤で量と質を両輪化する。効果は数字に出ている——オンボーディングのコースを修了したクリエイターの50%超が、最初の2週間以内に“バズ”動画を出す。散発的なバズを、再現性のある供給ラインに変えたわけだ。\n\n■ 結果としての到達量\nこの工場が回ると、ピーク時には1週間で4億回再生という規模に達した。直近もTikTok・Instagram・YouTube横断で月4〜5億回の再生を維持している。重要なのは、これが“1本のバズ頼み”ではなく“多数の小さな当たりの合算”である点。中の人(クリエイター)が増えるほど供給が増え、紹介で次のクリエイターが入る——人数そのものが次の集客を生む正のループになっている。\n\n■ プロダクト側の摩擦削減:応募を1スワイプに畳む\n配布だけでは課金は続かない。Sproutはプロダクト側でも“応募の摩擦”を徹底的に削った。求人ごとのWorkday長文フォーム、職務に合わせた履歴書・カバーレターの書き直し——この一連を、スワイプ→AI生成→エージェント自動入力の3手に圧縮する。就活で最も消耗する『同じ情報の再入力』を消すことが、毎月課金を払い続ける理由になる。\n\n■ 価格とマネタイズの設計\n料金はBasic/Pro/Ultraの3段で、月あたり応募数で上限を区切る。週課金より月課金が約25%安く、長く使うほど月課金へ誘導される設計。さらに“本格利用にはサブスクが必要”(オンボーディングは通せるが、実用にはまず課金)という、体験価値を見せてから払わせる導線になっている。Nicoleが行動心理学と『感情的に最適なタイミングでの収益化』を重視してきた——という前作Glam Upの設計思想が、ここにも通底している。\n\n■ なぜ就活カテゴリだったか(ジャンル選択の妙)\n美容(Glam Up)から就活(Sprout)へ——一見遠いが、狙いは一貫している。どちらも(a)“万人共通の自己改善ニーズ”があり、(b)ショート動画で『使ってみた』が映え、(c)結果に金を払う動機が強い。クリエイター工場で配るには、UGCが量産しやすく、視聴者の自分ごと化が速いテーマが向く。就活はまさにその条件を満たし、学生クリエイターとの相性も良かった。\n\n■ 個人開発者への持ち帰り\nSproutの教訓は『技術の堀より配布の堀』。最先端モデルを自作するのではなく、既存AIを摩擦ゼロの体験に翻訳し(=作る側の差別化を最小化し)、代わりに“クリエイターを育てて回す”という再現可能な配布資産に投資する。1本目で作った配布の型は、2本目のジャンルでもそのまま効いた——つまり堀は『アプリ』ではなく『配布の仕組み』に溜まっていた。",
      en: "【Deep dive】Sprout matters less as a job app than as a distribution machine that turns virality from luck into process. Here is the system Nicole reused across two apps, taken apart.\n\n■ Core idea: the constraint moved from ‘building’ to ‘distributing.’ Cheung’s consistent claim: in an era when anyone can build an app in a weekend, what decides the winner is not features but audience. So she engineers distribution with the same intensity as the product. The conclusion she earned with Glam Up — that with zero ads and no funding you can still reach a million users if you systematize distribution — she simply re-ran with Sprout. It’s the inverse of ‘build it well and they’ll come’: decide how you’ll spread it first, then build.\n\n■ The four-step creator system (a factory for virality). The heart of Sprout’s growth is a machine that *trains* and runs 200+ UGC creators. The reported shape has four stages: (1) source the creators, (2) onboard them through a structured course — effectively an in-house school that teaches the winning angles, (3) manage each creator with feedback loops to improve their posts, and (4) optimize with referral incentives and analytics so volume and quality compound. The effect shows up in the numbers: more than 50% of creators who complete the onboarding course put out a viral video within their first two weeks. Sporadic virality became a repeatable supply line.\n\n■ The resulting reach. When the factory runs, it hit a peak of 400 million views in a single week, and it still sustains 400–500 million monthly views across TikTok, Instagram, and YouTube. The key is that this is not one mega-hit but the sum of many small wins: more creators means more supply, and referrals pull in the next creators — so headcount itself becomes the next wave of acquisition, a positive loop.\n\n■ Product-side friction removal: collapsing an application into one swipe. Distribution alone doesn’t keep people paying. On the product side, Sprout ruthlessly stripped out application friction. The per-posting Workday gauntlet, the per-role resume and cover-letter rewrites — that whole chain is compressed into three moves: swipe, AI generation, agent auto-fill. Erasing the most draining part of job hunting — re-entering the same information — is what justifies a recurring subscription.\n\n■ Pricing and monetization design. Three tiers — Basic, Pro, Ultra — capped by applications per month. Monthly billing is ~25% cheaper than weekly, nudging committed users toward monthly. And because real use requires a subscription (you can finish onboarding, but you must pay to actually apply at volume), the funnel shows value first, then charges. The behavioral-psychology and ‘emotionally well-timed monetization’ that shaped Glam Up runs underneath this too.\n\n■ Why the jobs category (the cleverness of genre choice). Beauty (Glam Up) to jobs (Sprout) looks like a leap, but the aim is consistent. Both have (a) a near-universal self-improvement need, (b) short-form ‘I tried it’ content that pops, and (c) strong willingness to pay for the outcome. To distribute via a creator factory you want a theme that’s easy for UGC to mass-produce and fast for viewers to see themselves in. Job hunting fits exactly — and pairs naturally with student creators.\n\n■ The takeaway for indie builders. Sprout’s lesson is ‘a distribution moat over a technology moat.’ Rather than training a frontier model yourself, translate existing AI into a frictionless experience (minimizing the build-side differentiation) and instead invest in a repeatable distribution asset: a trained, self-replenishing creator engine. The distribution playbook built for app one worked unchanged in app two’s category — meaning the moat had accrued not in ‘the app’ but in ‘the system for distribution.’",
    },
  },

  playbook: {
    ja: [
      "「作る」より「配る」を先に設計する——機能ではなく観客を制約として扱う",
      "万人共通の自己改善ニーズ × ショート動画映え × 結果に払う動機、の3条件が揃うジャンルを選ぶ",
      "UGCクリエイターを“採用→社内コースで育成→フィードバックで改善→紹介と分析で量産”の4工程で回す",
      "オンボーディング修了者がすぐ当てられるよう勝ち筋を型化する(修了者の過半が2週間以内にバズる水準を狙う)",
      "プロダクト側は最も消耗する作業を1スワイプに畳む(就活なら応募の再入力をAI生成+エージェント自動化で消す)",
      "従量×月/週課金で価格を刻み、体験価値を見せてから課金へ誘導(行動心理に沿った収益化タイミング)",
      "1本目で作った配布の型を、別ジャンルの2本目にそのまま移植して堀を“仕組み”に溜める",
    ],
    en: [
      "Design distribution before building — treat audience, not features, as the binding constraint",
      "Pick a category that combines a universal self-improvement need, short-form ‘watchability,’ and willingness to pay for the outcome",
      "Run UGC creators through a four-step loop: source → train via an in-house course → improve via feedback → mass-produce via referrals and analytics",
      "Codify the winning angles so graduates hit fast (aim for the bar: a majority go viral within two weeks of onboarding)",
      "On the product, collapse the most draining task into one swipe (for jobs: kill re-entry with AI generation + agent auto-apply)",
      "Tier pricing by usage with monthly/weekly options; show value first, then convert (psychologically well-timed monetization)",
      "Port the distribution playbook from app one into a different app-two category so the moat accrues in the *system*, not the app",
    ],
  },

  failureNote: {
    ja: "Nicoleはエンジニアリングの専門教育を受けておらず、就活アプリに辿り着くまでに複数のアプリを作っている(本人いわく“4度の創業者”)。元は不動産の仕事に物足りなさを感じて欧州を放浪し、その後サンフランシスコでアプリ作りに行き着いた経緯がある。最初から就活アプリで当てたのではなく、Glam Upで掴んだ『配布の型』を別ジャンルで再現した2本目がSproutだ——“一発のひらめき”ではなく型の使い回しが本質。",
    en: "Cheung has no formal engineering training and built several apps before landing on the jobs space (she calls herself a ‘4x founder’). She originally felt something was missing in a real-estate job, went traveling across Europe, then ended up in San Francisco building apps. Sprout wasn’t a first-try jackpot in jobs — it was the *second* app to re-run the distribution playbook she’d learned on Glam Up. The essence is reusing a system, not a single flash of inspiration.",
  },

  publishedAt: "2026-06-28",
} satisfies Case;
