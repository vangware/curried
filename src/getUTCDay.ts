import type { DayOfWeek } from "./types/DayOfWeek";

/**
 * Gets the day of the week using Universal Coordinated Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * getUTCDay(date); // 5
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 6.
 */
export const getUTCDay = (source: Date) => source.getUTCDay() as DayOfWeek;
