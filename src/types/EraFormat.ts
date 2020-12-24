import type { LONG, NARROW, SHORT } from "../constants";

/**
 * The representation of the era.
 */
export type EraFormat = typeof LONG | typeof NARROW | typeof SHORT;
