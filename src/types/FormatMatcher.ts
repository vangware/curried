import type { BASIC, BEST_FIT } from "../constants";

/**
 * Format matching algorithm.
 */
export type FormatMatcher = typeof BASIC | typeof BEST_FIT;
