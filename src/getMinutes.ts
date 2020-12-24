import type { Minutes } from "./types/Minutes";

/**
 * Gets the minutes of a Date object, using local time.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * getMinutes(date); // 15
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 59.
 */
export const getMinutes = (source: Date) => source.getMinutes() as Minutes;
