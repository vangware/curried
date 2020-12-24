import type { NUMERIC, TWO_DIGIT } from "../constants";

/**
 * The representation of the hour.
 */
export type HourFormat = typeof NUMERIC | typeof TWO_DIGIT;
