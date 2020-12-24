/**
 * Returns a String value that is made from count copies appended together. If
 * count is 0, the empty string is returned.
 *
 * @category String
 * @example
 * ```typescript
 * const repeatTwice = repeat(2);
 * repeatTwice("foo"); // "foofoo"
 * ```
 * @param times Repeat count.
 * @returns Curried function with `count` in closure.
 */
export const repeat = (times: number) =>
	/**
	 * @param source String to be repeated.
	 * @returns String repeated `count` times.
	 */
	(source: string) => source.repeat(times);
