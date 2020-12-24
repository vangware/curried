import { createDate } from "./createDate";

/**
 * Sets the year value in the Date object using Universal Coordinated Time
 * (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * const setUTCFullYear2021 = setUTCFullYear(2021);
 * setUTCFullYear2021(date); // 2021-10-13T10:15:31.123Z
 * ```
 * @param year Year value to set.
 * @returns Curried function with `year` in closure.
 */
export const setUTCFullYear = (year: number) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with year changed.
	 */
	(source: Date) => createDate(createDate(source).setUTCFullYear(year));
