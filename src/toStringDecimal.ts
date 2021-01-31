import { toString } from "./toString";

/**
 * Parses given source to string (if it's a number, it takes it as decimal).
 *
 * @category Common
 * @example
 * ```typescript
 * toStringDecimal(100); // "100"
 * ```
 */
export const toStringDecimal = toString(10);
