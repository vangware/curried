import type { Milliseconds } from "./types/Milliseconds";

/**
 * Gets the milliseconds of a Date object using Universal Coordinated Time
 * (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * getUTCMilliseconds(date); // 123
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 999.
 */
export const getUTCMilliseconds = (source: Date) =>
	source.getUTCMilliseconds() as Milliseconds;
