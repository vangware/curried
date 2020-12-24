import type { BEST_FIT, LOOKUP } from "../constants";

/**
 * Locale matching algorithm.
 */
export type LocaleMatcher = typeof BEST_FIT | typeof LOOKUP;
