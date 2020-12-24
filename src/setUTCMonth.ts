import { createDate } from "./createDate";
import type { Month } from "./types/Month";

/**
 * Sets the month value in the Date object using Universal Coordinated Time
 * (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * const setUTCMonth5 = setUTCMonth(5);
 * setUTCMonth5(date); // 1989-06-13T10:15:31.123Z
 * ```
 * @param month Month value to set.
 * @returns Curried function with `month` in closure.
 */
export const setUTCMonth = (month: Month) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with month changed.
	 */
	(source: Date) => createDate(createDate(source).setUTCMonth(month));
