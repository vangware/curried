import type { FALSE, LOWER, UPPER } from "../constants";

/**
 * Whether upper case or lower case should sort first.
 */
export type CaseFirstFormat = typeof FALSE | typeof LOWER | typeof UPPER;
