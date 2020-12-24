/**
 * Returns a `Date` instance converted to a string using Universal Coordinated
 * Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * toUTCString(date); // Fri, 13 Oct 1989 10:15:31 GMT
 * ```
 * @param source Date instance.
 * @returns String with the UTC representation of given `Date` instance.
 */
export const toUTCString = (source: Date) => source.toUTCString();
