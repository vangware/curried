import { createDate } from "./createDate";
import type { Seconds } from "./types/Seconds";

/**
 * Sets the seconds value in the Date object.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * const setSeconds13 = setSeconds(13);
 * setSeconds13(date); // 1989-10-13 10:15:13.123
 * ```
 * @param seconds Seconds value to set.
 * @returns Curried function with `seconds` in closure.
 */
export const setSeconds = (seconds: Seconds) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with seconds changed.
	 */
	(source: Date) => createDate(createDate(source).setSeconds(seconds));
