/**
 * Creates a new Date instance (from other Date instance, number or string).
 *
 * @category Date
 * @example
 * ```typescript
 * createDate("1989-10-13T10:15:31.123Z"); // Fri Oct 13 1989 10:15:31
 * ```
 * @param value A `string` representing a date, a `Date` or a timestamp.
 * @returns New instance of `Date`.
 */
export const createDate = (value: Date | number | string) => new Date(value);
