/**
 * Takes a `start` and `end` and applies a `substring` to `source` string
 * from given `start` with given `end`.
 *
 * @category String
 * @example
 * ```typescript
 * const substringFrom1 = substring(1);
 * const substringFrom1WithTo3 = substringFrom1(3);
 *
 * substringFrom1WithTo3("foobar"); // "oo"
 * ```
 * @param start Substring start.
 * @returns Curried function with `end` in closure.
 */
export const substring = (end: number) =>
	/**
	 * @param end Substring start.
	 * @returns Curried function with `start` and `end` in closure.
	 */
	(start: number) =>
		/**
		 * @param source Source string to get the substring.
		 * @returns Substring copy of `source` string using `start`
		 * and `end`.
		 */
		(source: string) => source.substring(start, end);
