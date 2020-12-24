import { createDate } from "./createDate";

/**
 * Sets the date and time value in the Date object.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * const setTime0 = setTime(0);
 * setTime0(date); // 1970-01-01T00:00:00.000Z
 * ```
 * @param time Timestamp value to set.
 * @returns Curried function with `time` in closure.
 */
export const setTime = (time: number) =>
	/**
	 * @param source Date instance to set the value to.
	 * @returns New instance of Date with timestamp changed.
	 */
	(source: Date) => createDate(createDate(source).setTime(time));
