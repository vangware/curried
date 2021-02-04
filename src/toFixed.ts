import type { FractionDigits } from "./types/FractionDigits";

/**
 * Returns a string representing a number in fixed-point notation.
 *
 * @category Number
 * @example
 * ```typescript
 * const defaultToFixed = toFixed(0);
 * const toFixed2 = toFixed(2);
 * defaultToFixed(100); // 100
 * toFixed2(100); // 100.00
 * ```
 * @param fractionDigits Number of digits after the decimal point. Must be in
 * the range 0 - 20, inclusive.
 * @returns Curried function with `fractionDigits` in closure.
 */
export const toFixed = (fractionDigits: FractionDigits) =>
	/**
	 * @param source Number to be turned into it's exponential form.
	 * @returns Fixed-point notation representation of given number.
	 */
	(source: number) => source.toFixed(fractionDigits);
