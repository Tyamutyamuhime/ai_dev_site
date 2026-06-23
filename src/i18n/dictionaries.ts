import "server-only";
import type { Locale } from "./config";

// UI文言の辞書(サーバー専用)。事例の本文は各 Case が ja/en を内包するため、
// ここではサイトの「ガワ」の文言だけを管理する。
const dictionaries = {
  ja: () => import("./dictionaries/ja.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["ja"]>>;

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
