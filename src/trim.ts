/**
 * Removes the leading and trailing white space and line terminator characters
 * from a string.
 *
 * @category String
 * @example
 * ```typescript
 * trim("    foobar    "); // "foobar"
 * ```
 * @param source String to get whitespace removed from.
 * @returns String without whitespace and termination characters.
 */
export const trim = (source: string) => source.trim();
