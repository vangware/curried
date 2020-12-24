/**
 * Returns a copy with leading whitespace removed.
 *
 * @category String
 * @example
 * ```typescript
 * trimStart("    foobar    "); // "foobar    "
 * ```
 * @param source String to remove the whitespace from.
 * @returns String with leading whitespace removed.
 */
export const trimStart = (source: string) => source.trimStart();
