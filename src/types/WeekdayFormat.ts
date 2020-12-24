import type { LONG, NARROW, SHORT } from "../constants";

/**
 * The representation of the week day.
 */
export type WeekdayFormat = typeof LONG | typeof NARROW | typeof SHORT;
