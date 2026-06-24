import { Suspense } from "react";
import { Tweet } from "react-tweet";
import { getTweet } from "react-tweet/api";
import type { Source } from "@content/types";

// 一次情報(primary)のうち X の status URL を公式埋め込みで表示する。
// 自サーバに再ホストしない(react-tweet がサーバー側で取得し静的HTMLに埋め込む)
// = 著作権セーフ + 一次情報の明示。プロフィールURL等(status以外)は対象外。
function tweetIdFromUrl(url: string): string | null {
  const m = url.match(/(?:x|twitter)\.com\/[^/]+\/status\/(\d+)/);
  return m ? m[1] : null;
}

// 本人の写真(アバター)を「埋め込み」で表示する。
// react-tweet の getTweet で投稿者データを取得し、X の CDN 画像をそのまま参照(再ホストしない)。
// primary な status URL が無い / 取得できない場合は何も表示しない(= 無ければ無し)。
export async function FounderPortrait({ sources }: { sources?: Source[] }) {
  if (!sources) return null;
  const src = sources.find(
    (s) => s.kind === "primary" && tweetIdFromUrl(s.url)
  );
  const id = src ? tweetIdFromUrl(src.url) : null;
  if (!id) return null;

  let tweet: Awaited<ReturnType<typeof getTweet>>;
  try {
    tweet = await getTweet(id);
  } catch {
    return null;
  }
  const u = tweet?.user;
  if (!u?.profile_image_url_https) return null;

  const avatar = u.profile_image_url_https.replace("_normal", "_400x400");

  return (
    <a
      href={`https://x.com/${u.screen_name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 flex w-fit items-center gap-3 rounded-full border border-black/[.08] py-1.5 pl-1.5 pr-4 hover:bg-black/[.04] dark:border-white/[.12] dark:hover:bg-white/[.06]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatar}
        alt={u.name}
        width={44}
        height={44}
        className="h-11 w-11 rounded-full object-cover"
      />
      <span className="leading-tight">
        <span className="block text-sm font-semibold">{u.name}</span>
        <span className="block text-xs text-zinc-500">@{u.screen_name}</span>
      </span>
    </a>
  );
}

export function SourceTweets({
  sources,
  heading,
}: {
  sources?: Source[];
  heading: string;
}) {
  if (!sources) return null;
  const ids = sources
    .filter((s) => s.kind === "primary")
    .map((s) => tweetIdFromUrl(s.url))
    .filter((id): id is string => Boolean(id));

  if (ids.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <div className="mt-4 flex flex-col items-center gap-4">
        {ids.map((id) => (
          <Suspense
            key={id}
            fallback={
              <div className="h-40 w-full max-w-[550px] animate-pulse rounded-xl border border-black/[.08] dark:border-white/[.12]" />
            }
          >
            <Tweet id={id} />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
