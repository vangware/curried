import type { Seconds } from "./types/Seconds";

/**
 * Gets the seconds of a Date object using Universal Coordinated Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * getUTCSeconds(date); // 31
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 59.
 */
export const getUTCSeconds = (source: Date) =>
	source.getUTCSeconds() as Seconds;
