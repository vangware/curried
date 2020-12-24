/**
 * Gets the year using Universal Coordinated Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * getUTCFullYear(date); // 1989
 * ```
 * @param source Date instance.
 * @returns A 4 digit number representing the year.
 */
export const getUTCFullYear = (source: Date) => source.getUTCFullYear();
