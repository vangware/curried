import { toString } from "./toString";

/**
 * Parses given source to string (if it's a number, it takes it as binary).
 *
 * @category Common
 * @example
 * ```typescript
 * toStringBinary(100); // "1100100"
 * ```
 */
export const toStringBinary = toString(2);
