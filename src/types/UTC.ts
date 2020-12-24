import type { DayOfMonth } from "./DayOfMonth";
import type { Hours } from "./Hours";
import type { Milliseconds } from "./Milliseconds";
import type { Minutes } from "./Minutes";
import type { Month } from "./Month";
import type { Seconds } from "./Seconds";

/**
 * Object with values for a UTC date.
 */
export type UTC = {
	/**
	 * UTC day value (1-31).
	 */
	readonly day?: DayOfMonth;

	/**
	 * UTC hours value (0-23).
	 */
	readonly hours?: Hours;

	/**
	 * UTC milliseconds value (0-999).
	 */
	readonly milliseconds?: Milliseconds;

	/**
	 * UTC minute value (0-59).
	 */
	readonly minutes?: Minutes;

	/**
	 * UTC month value (1-12).
	 */
	readonly month: Month;

	/**
	 * UTC seconds value (0-59).
	 */
	readonly seconds?: Seconds;

	/**
	 * UTC year value.
	 */
	readonly year: number;
};
