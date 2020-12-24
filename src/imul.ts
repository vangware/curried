/**
 * Returns the result of 32-bit multiplication of two numbers.
 *
 * @category Math
 * @example
 * ```typescript
 * const times2 = imul(2);
 * times2(3); // 6
 * ```
 * @param multiplier Multiplier value.
 * @returns Curried function with `multiplier` in closure.
 */
export const imul = (multiplier: number) =>
	/**
	 * @param multiplicand Multiplicand value.
	 * @returns 32-bit multiplication of `multiplier` and `multiplicand`.
	 */
	(multiplicand: number) => Math.imul(multiplicand, multiplier);
