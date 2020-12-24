import type { Hours } from "./types/Hours";

/**
 * Gets the hours in a date, using local time.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * getHours(date); // 10
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 23.
 */
export const getHours = (source: Date) => source.getHours() as Hours;
