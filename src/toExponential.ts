import type { FractionDigits } from "./types/FractionDigits";

/**
 * Returns a string containing a number represented in exponential notation.
 *
 * @category Number
 * @example
 * ```typescript
 * const defaultToExponential = toExponential(0);
 * const toExponential1 = toExponential(1);
 * defaultToExponential(100); // 1e+2
 * toExponential1(100); // 1.0e+2
 * ```
 * @param fractionDigits Number of digits after the decimal point. Must be in
 * the range 0 - 20, inclusive.
 * @returns Curried function with `fractionDigits` in closure.
 */
export const toExponential = (fractionDigits: FractionDigits) =>
	/**
	 * @param source Number to be turned into it's exponential form.
	 * @returns Exponential representation of given number.
	 */
	(source: number) => source.toExponential(fractionDigits);
