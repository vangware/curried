import type { LONG, NARROW, NUMERIC, SHORT, TWO_DIGIT } from "../constants";

/**
 * The representation of the month.
 */
export type MonthFormat =
	| typeof LONG
	| typeof NARROW
	| typeof NUMERIC
	| typeof SHORT
	| typeof TWO_DIGIT;
