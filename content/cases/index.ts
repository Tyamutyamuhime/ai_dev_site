import type { Case } from "../types";
import { coconote } from "./coconote";
import { pepAi } from "./pep-ai";
import { once } from "./once";
import { jungle } from "./jungle";

// 全事例の集約。事例を追加したらここに足す。
export const cases: Case[] = [coconote, pepAi, once, jungle];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}
