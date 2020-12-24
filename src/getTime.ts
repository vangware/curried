/**
 * Gets the time value in milliseconds.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * getTime(date); // 624276931123
 * ```
 * @param source Date instance.
 * @returns A timestamp.
 */
export const getTime = (source: Date) => source.getTime();
