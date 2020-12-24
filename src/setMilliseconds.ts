import { createDate } from "./createDate";
import type { Milliseconds } from "./types/Milliseconds";

/**
 * Sets the milliseconds value in the Date object.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * const setMilliseconds420 = setMilliseconds(420);
 * setMilliseconds420(date); // 1989-10-13 10:15:31.420
 * ```
 * @param milliseconds Milliseconds value to set.
 * @returns Curried function with `milliseconds` in closure.
 */
export const setMilliseconds = (milliseconds: Milliseconds) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with milliseconds changed.
	 */
	(source: Date) =>
		createDate(createDate(source).setMilliseconds(milliseconds));
