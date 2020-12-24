import { createDate } from "./createDate";
import type { DayOfMonth } from "./types/DayOfMonth";

/**
 * Sets the numeric day of the month in the Date object.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * const setDate31 = setDate(31);
 * setDate31(date); // 1989-10-31 10:15:31.123
 * ```
 * @param dayOfMonth Day of month value to set.
 * @returns Curried function with `dayOfMonth` in closure.
 */
export const setDate = (dayOfMonth: DayOfMonth) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with day of month changed.
	 */
	(source: Date) => createDate(createDate(source).setDate(dayOfMonth));
