/**
 * Return a date as a string value in ISO format.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("October 13, 1989 10:15:31");
 * toISOString(date); // "1989-10-13T10:15:31.000Z"
 * ```
 * @param source Date instance to be turned into string.
 * @returns ISO string.
 */
export const toISOString = (source: Date) =>
	// eslint-disable-next-line max-len
	source.toISOString() as `${number}-${number}-${number}T${number}:${number}:${number}.${number}z`;
