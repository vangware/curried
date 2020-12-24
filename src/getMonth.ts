import type { Month } from "./types/Month";

/**
 * Gets the month, using local time.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * getMonth(date); // 9
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 11.
 */
export const getMonth = (source: Date) => source.getMonth() as Month;
