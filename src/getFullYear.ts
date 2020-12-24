/**
 * Gets the year, using local time.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13 10:15:31.123");
 * getFullYear(date); // 1989
 * ```
 * @param source Date instance.
 * @returns A 4 digit number representing the year.
 */
export const getFullYear = (source: Date) => source.getFullYear();
