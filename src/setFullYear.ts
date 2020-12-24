import { createDate } from "./createDate";

/**
 * Sets the year value in the Date object.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * const setFullYear2021 = setFullYear(2021);
 * setFullYear2021(date); // 2021-10-13 10:15:31.123
 * ```
 * @param year Year value to set.
 * @returns Curried function with `year` in closure.
 */
export const setFullYear = (year: number) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with year changed.
	 */
	(source: Date) => createDate(createDate(source).setFullYear(year));
