import type { Radix } from "./types/Radix";

/**
 * Parses the given string to number, using the given `radix`.
 *
 * @category Number
 * @example
 * ```typescript
 * parseInt(10)("10"); // 10
 * parseInt(16)("10"); // 16 (0x10)
 * parseInt(2)("10"); // 2
 * ```
 * @param radix A value between 2 and 36 that specifies the base of the number.
 * @returns Curried function with `radix` in closure.
 */
export const parseInt = (radix: Radix) =>
	/**
	 * @param source String to be parsed.
	 * @returns Parsed string.
	 */
	(source: string) => Number.parseInt(source, radix);
