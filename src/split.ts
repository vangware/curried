/**
 * Split a string into substrings using the specified separator and return them
 * as an array.
 *
 * @category String
 * @example
 * ```typescript
 * const commaSplit = split(",");
 * commaSplit("foo,bar"); // ["foo", "bar"]
 * ```
 * @param separator String to search and split with.
 * @returns Curried function with `separator` in closure.
 */
export const split = (separator: string) =>
	/**
	 * @param source String to be split.
	 * @returns Array of string split by `separator`.
	 */
	(source: string) => source.split(separator);
