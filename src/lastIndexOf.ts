/**
 * Returns the index of the last occurrence of a specified value in an array or
 * string.
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const lastIndexOfBar = lastIndexOf("bar");
 * lastIndexOfBar(["foo", "bar", "baz", "bar"]); // 3
 * lastIndexOfBar("foobar"); // 3
 * ```
 * @param item Item to search (turned to string when searching in string).
 * @returns Curried function with `item` in closure.
 */
export const lastIndexOf = <Item>(item: Item) =>
	/**
	 * @param source Source array or string to search in.
	 * @returns Index of the first occurrence of `item` in `source`, -1 when
	 * missing.
	 */
	(source: readonly Item[] | string) =>
		source.lastIndexOf(
			(Array.isArray(source) ? item : `${item}`) as string & Item
		);
