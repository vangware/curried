import { createDate } from "./createDate";
import type { Seconds } from "./types/Seconds";

/**
 * Sets the seconds value in the Date object using Universal Coordinated Time
 * (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * const setUTCSeconds13 = setUTCSeconds(13);
 * setUTCSeconds13(date); // 1989-10-13T10:15:13.123Z
 * ```
 * @param seconds Seconds value to set.
 * @returns Curried function with `seconds` in closure.
 */
export const setUTCSeconds = (seconds: Seconds) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with seconds changed.
	 */
	(source: Date) => createDate(createDate(source).setUTCSeconds(seconds));
