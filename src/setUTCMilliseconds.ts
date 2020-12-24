import { createDate } from "./createDate";
import type { Milliseconds } from "./types/Milliseconds";

/**
 * Sets the milliseconds value in the Date object using Universal Coordinated
 * Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * const setUTCMilliseconds420 = setUTCMilliseconds(420);
 * setUTCMilliseconds420(date); // 1989-10-13T10:15:31.420Z
 * ```
 * @param milliseconds Milliseconds value to set.
 * @returns Curried function with `milliseconds` in closure.
 */
export const setUTCMilliseconds = (milliseconds: Milliseconds) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with milliseconds changed.
	 */
	(source: Date) =>
		createDate(createDate(source).setUTCMilliseconds(milliseconds));
