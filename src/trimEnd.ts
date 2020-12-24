/**
 * Returns a copy with trailing whitespace removed.
 *
 * @category String
 * @example
 * ```typescript
 * trimEnd("    foobar    "); // "    foobar"
 * ```
 * @param source String to remove the whitespace from.
 * @returns String with trailing whitespace removed.
 */
export const trimEnd = (source: string) => source.trimEnd();
