/**
 * Returns true if the values are the same value, false otherwise.
 *
 * @category Common
 * @example
 * ```typescript
 * const isFoo = is("foo");
 * isFoo("foo"); // true
 * isFoo("bar"); // false
 * ```
 * @param expected Expected value.
 * @returns Curried function with `expected` in closure.
 */
export const is = <Expected>(expected: Expected) =>
	/**
	 * @param actual Value to compare with `expected`.
	 * @returns Boolean of the result of comparing `expected` with `actual`.
	 */
	<Actual>(actual: Actual) =>
		Object.is(expected, actual) as Actual extends Expected
			? Expected extends Actual
				? boolean
				: false
			: false;
