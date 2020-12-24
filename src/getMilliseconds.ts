import type { Milliseconds } from "./types/Milliseconds";

/**
 * Gets the milliseconds of a Date, using local time.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * getMilliseconds(date); // 123
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 999.
 */
export const getMilliseconds = (source: Date) =>
	source.getMilliseconds() as Milliseconds;
