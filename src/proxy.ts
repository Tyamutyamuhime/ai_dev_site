import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, pickLocale } from "@/i18n/config";

// Next.js 16: middleware は proxy に改名。機能は同じ。
// ロケール接頭辞(/ja /en)が無いパスを Accept-Language で振り分けてリダイレクトする。
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const locale = pickLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // _next 内部・静的ファイル(拡張子付き)・api を除く全パスで実行
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
