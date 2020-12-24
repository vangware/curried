import { createDate } from "./createDate";
import type { Minutes } from "./types/Minutes";

/**
 * Sets the minutes value in the Date object.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * const setMinutes13 = setMinutes(13);
 * setMinutes13(date); // 1989-10-13 10:13:31.123
 * ```
 * @param minutes Minutes value to set.
 * @returns Curried function with `minutes` in closure.
 */
export const setMinutes = (minutes: Minutes) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with minutes changed.
	 */
	(source: Date) => createDate(createDate(source).setMinutes(minutes));
