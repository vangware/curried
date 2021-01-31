import { toString } from "./toString";

/**
 * Parses given source to string (if it's a number, it takes it as octal).
 *
 * @category Common
 * @example
 * ```typescript
 * toStringOctal(100); // "144"
 * ```
 */
export const toStringOctal = toString(8);
