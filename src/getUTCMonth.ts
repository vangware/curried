import type { Month } from "./types/Month";

/**
 * Gets the month of a Date object using Universal Coordinated Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * getUTCMonth(date); // 9
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 11.
 */
export const getUTCMonth = (source: Date) => source.getUTCMonth() as Month;
