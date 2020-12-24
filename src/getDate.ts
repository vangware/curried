import type { DayOfMonth } from "./types/DayOfMonth";

/**
 * Gets the day-of-the-month, using local time.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * getDate(date); // 13
 * ```
 * @param source Date instance.
 * @returns A number value between 1 and 31.
 */
export const getDate = (source: Date) => source.getDate() as DayOfMonth;
