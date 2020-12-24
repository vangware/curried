import { createDate } from "./createDate";
import type { Minutes } from "./types/Minutes";

/**
 * Sets the minutes value in the Date object using Universal Coordinated Time
 * (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * const setUTCMinutes13 = setUTCMinutes(13);
 * setUTCMinutes13(date); // 1989-10-13T10:13:31.123Z
 * ```
 * @param minutes Minutes value to set.
 * @returns Curried function with `minutes` in closure.
 */
export const setUTCMinutes = (minutes: Minutes) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with minutes changed.
	 */
	(source: Date) => createDate(createDate(source).setUTCMinutes(minutes));
