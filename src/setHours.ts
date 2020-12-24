import { createDate } from "./createDate";
import type { Hours } from "./types/Hours";

/**
 * Sets the hours value in the Date object.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * const setHours13 = setHours(13);
 * setHours13(date); // 1989-10-13 13:15:31.123
 * ```
 * @param hours Hours value to set.
 * @returns Curried function with `hours` in closure.
 */
export const setHours = (hours: Hours) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with hours changed.
	 */
	(source: Date) => createDate(createDate(source).setHours(hours));
