import type { SEARCH, SORT } from "../constants";

/**
 * Comparison usage (for sorting or for searching for matching).
 */
export type UsageFormat = typeof SORT | typeof SEARCH;
