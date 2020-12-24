/**
 * Takes a `start` and `length` and applies a `substr` to `source` string from
 * given `start` with given `length`.
 *
 * @category String
 * @example
 * ```typescript
 * const substrFrom1 = substr(1);
 * const substrFrom1WithLength3 = substrFrom1(3);
 *
 * substrFrom1WithLength3("foobar"); // "oob"
 * ```
 * @param start Substr start.
 * @returns Curried function with `length` in closure.
 */
export const substr = (length: number) =>
	/**
	 * @param end Substr start.
	 * @returns Curried function with `start` and `length` in closure.
	 */
	(start: number) =>
		/**
		 * @param source Source string to get the substr.
		 * @returns Substr copy of `source` string using `start` and `length`.
		 */
		(source: string) => source.substr(start, length);
