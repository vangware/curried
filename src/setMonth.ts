import { createDate } from "./createDate";
import type { Month } from "./types/Month";

/**
 * Sets the month value in the Date object.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * const setMonth5 = setMonth(5);
 * setMonth5(date); // 1989-06-13 10:15:31.123
 * ```
 * @param month Month value to set.
 * @returns Curried function with `month` in closure.
 */
export const setMonth = (month: Month) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with month changed.
	 */
	(source: Date) => createDate(createDate(source).setMonth(month));
