import type { Seconds } from "./types/Seconds";

/**
 * Gets the seconds of a Date object, using local time.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * getSeconds(date); // 31
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 59.
 */
export const getSeconds = (source: Date) => source.getSeconds() as Seconds;
