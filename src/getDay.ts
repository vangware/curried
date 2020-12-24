import type { DayOfWeek } from "./types/DayOfWeek";

/**
 * Gets the day of the week, using local time.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * getDay(date); // 5
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 6.
 */
export const getDay = (source: Date) => source.getDay() as DayOfWeek;
