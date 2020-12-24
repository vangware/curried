import type { Minutes } from "./types/Minutes";

/**
 * Gets the minutes of a Date object using Universal Coordinated Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * getUTCMinutes(date); // 15
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 59.
 */
export const getUTCMinutes = (source: Date) =>
	source.getUTCMinutes() as Minutes;
