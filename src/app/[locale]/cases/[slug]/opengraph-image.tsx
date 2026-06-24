import { ImageResponse } from "next/og";
import { getCaseBySlug } from "@content/cases";
import { caseCard, OG_SIZE } from "@/lib/og-card";

// OGP/Twitter 画像をコード生成(next/og)。記事内ヒーローと兼用。
export const alt = "AI Dev Cases";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);

  if (!c) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0b0f0e",
            color: "#fff",
            fontSize: 64,
          }}
        >
          AI Dev Cases
        </div>
      ),
      { ...OG_SIZE }
    );
  }

  return new ImageResponse(caseCard(c, "hero"), { ...OG_SIZE });
}
