/**
 * Gets the difference in minutes between the time on the local computer and
 * Universal Coordinated Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * getTimezoneOffset(date); // 0
 * ```
 * @param source Date instance.
 * @returns Minutes difference between date and UTC.
 */
export const getTimezoneOffset = (source: Date) => source.getTimezoneOffset();
