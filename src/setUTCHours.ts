import { createDate } from "./createDate";
import type { Hours } from "./types/Hours";

/**
 * Sets the hours value in the Date object using Universal Coordinated Time
 * (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * const setUTCHours13 = setUTCHours(13);
 * setUTCHours13(date); // 1989-10-13T13:15:31.123Z
 * ```
 * @param hours Hours value to set.
 * @returns Curried function with `hours` in closure.
 */
export const setUTCHours = (hours: Hours) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with hours changed.
	 */
	(source: Date) => createDate(createDate(source).setUTCHours(hours));
