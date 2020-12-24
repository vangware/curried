import { createDate } from "./createDate";
import type { DayOfMonth } from "./types/DayOfMonth";

/**
 * Sets the numeric day of the month in the Date object using Universal
 * Coordinated Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * const setUTCDate31 = setUTCDate(31);
 * setUTCDate31(date); // 1989-10-31T10:15:31.123Z
 * ```
 * @param dayOfMonth Day of month value to set.
 * @returns Curried function with `dayOfMonth` in closure.
 */
export const setUTCDate = (dayOfMonth: DayOfMonth) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with day of month changed.
	 */
	(source: Date) => createDate(createDate(source).setUTCDate(dayOfMonth));
