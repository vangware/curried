import type { DayOfMonth } from "./types/DayOfMonth";

/**
 * Gets the day-of-the-month, using Universal Coordinated Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * getUTCDate(date); // 13
 * ```
 * @param source Date instance.
 * @returns A number value between 1 and 31.
 */
export const getUTCDate = (source: Date) => source.getUTCDate() as DayOfMonth;
