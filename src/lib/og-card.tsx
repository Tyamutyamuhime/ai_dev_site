import type { Case } from "@content/types";
import { CATEGORIES, TECH, MARKETING } from "@content/types";

// next/og で描画する事例カードの共有レンダラ。
// opengraph-image(SNS/メタ) と /api/card(本文中の追加画像) の両方から使う。
// テキストは英数字主体にして satori 既定フォントで日英共通に描画する(CJKフォント不要)。

export const OG_SIZE = { width: 1200, height: 630 };

export type CardVariant = "hero" | "stack";

function usdCompact(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${n}`;
}

export function headlineRevenue(mrrUsd: number, type: string): string {
  switch (type) {
    case "arr":
      return `${usdCompact(mrrUsd * 12)} ARR`;
    case "daily":
      return `${usdCompact(mrrUsd / 30)}/day`;
    // "total" 型は mrrUsd が「正規化済みの月次MRR」なので、累計(total)として見せると誤り。
    // 暫定で MRR 表記に統一する。累計を見出しに出す正式対応は TASKS.md 参照。
    case "mrr":
    case "total":
    default:
      return `${usdCompact(mrrUsd)} MRR`;
  }
}

// カードに載せるチップ数の上限。超過分は「+N」に畳んで縦あふれ(クリップ)を防ぐ。
function capChips(items: string[], max: number): string[] {
  if (items.length <= max) return items;
  return [...items.slice(0, max), `+${items.length - max}`];
}

const BG = "#0b0f0e";
const ACCENT = "#34d399";

function Brand() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ width: 14, height: 14, borderRadius: 9999, background: ACCENT }} />
      <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 4, color: ACCENT }}>
        AI DEV CASES
      </div>
    </div>
  );
}

function heroCard(c: Case) {
  const metrics = [
    c.periodMonths ? `${c.periodMonths} mo` : null,
    c.users
      ? `${(c.users / 1_000_000).toFixed(c.users >= 10_000_000 ? 0 : 1)}M users`
      : null,
  ].filter(Boolean) as string[];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BG,
        color: "#f4f4f5",
        padding: "64px 72px",
        fontFamily: "sans-serif",
      }}
    >
      <Brand />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 40, fontWeight: 600, color: "#a1a1aa" }}>{c.appName}</div>
        <div
          style={{
            display: "flex",
            fontSize: 132,
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 4,
            color: "#ffffff",
          }}
        >
          {headlineRevenue(c.mrrUsd, c.revenueType)}
        </div>
        {metrics.length > 0 && (
          <div style={{ display: "flex", gap: 18, marginTop: 18, fontSize: 34, color: "#d4d4d8" }}>
            {metrics.join("   ·   ")}
          </div>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 30, color: "#a1a1aa" }}>{c.personName}</div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            color: BG,
            background: ACCENT,
            padding: "10px 22px",
            borderRadius: 9999,
          }}
        >
          {CATEGORIES[c.category].en}
        </div>
      </div>
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      {items.map((t) => (
        <div
          key={t}
          style={{
            display: "flex",
            fontSize: 30,
            color: "#e4e4e7",
            background: "#1c2522",
            border: "1px solid #2f3b37",
            padding: "10px 22px",
            borderRadius: 12,
          }}
        >
          {t}
        </div>
      ))}
    </div>
  );
}

// 本文中の追加画像: 集客チャネル & 技術スタック(英ラベル)
function stackCard(c: Case) {
  const channels = capChips(c.marketingTags.map((m) => MARKETING[m].en), 6);
  const stack = capChips(c.techStack.map((t) => TECH[t].en), 4);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BG,
        color: "#f4f4f5",
        padding: "64px 72px",
        fontFamily: "sans-serif",
      }}
    >
      <Brand />
      <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 800, color: "#ffffff" }}>
          How {c.appName} grew
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 3, color: ACCENT }}>
            CHANNELS
          </div>
          {channels.length > 0 ? (
            <Chips items={channels} />
          ) : (
            <div style={{ display: "flex", fontSize: 30, color: "#71717a" }}>—</div>
          )}
        </div>
        {stack.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 3, color: ACCENT }}>
              STACK
            </div>
            <Chips items={stack} />
          </div>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 30, color: "#a1a1aa" }}>{c.appName}</div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#ffffff" }}>
          {headlineRevenue(c.mrrUsd, c.revenueType)}
        </div>
      </div>
    </div>
  );
}

export function caseCard(c: Case, variant: CardVariant) {
  return variant === "stack" ? stackCard(c) : heroCard(c);
}
