import { ImageResponse } from "next/og";
import { getCaseBySlug } from "@content/cases";
import { caseCard, OG_SIZE, type CardVariant } from "@/lib/og-card";

// 本文中の追加カード画像。/api/card?slug=<slug>&v=<hero|stack>
// /api は proxy のロケールリダイレクト対象外(matcher で除外)なのでロケール非依存。
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? "";
  const v = (searchParams.get("v") ?? "hero") as CardVariant;
  const c = getCaseBySlug(slug);

  if (!c) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(caseCard(c, v === "stack" ? "stack" : "hero"), {
    ...OG_SIZE,
  });
}
