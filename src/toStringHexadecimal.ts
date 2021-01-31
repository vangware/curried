import { toString } from "./toString";

/**
 * Parses given source to string (if it's a number, it takes it as hexadecimal).
 *
 * @category Common
 * @example
 * ```typescript
 * toStringHexadecimal(100); // "64"
 * ```
 */
export const toStringHexadecimal = toString(16);
