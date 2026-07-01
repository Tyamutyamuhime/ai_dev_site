import type { Case } from "../types";
import { coconote } from "./coconote";
import { pepAi } from "./pep-ai";
import { once } from "./once";
import { jungle } from "./jungle";
import { calAi } from "./cal-ai";
import { pingoAi } from "./pingo-ai";
import { polsia } from "./polsia";
import { haloAi } from "./halo-ai";
import { glowup } from "./glowup";
import { sprout } from "./sprout";
import { reelfarm } from "./reelfarm";

// 全事例の集約。事例を追加したらここに足す。
export const cases: Case[] = [coconote, pepAi, once, jungle, calAi, pingoAi, polsia, haloAi, glowup, sprout, reelfarm];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}
