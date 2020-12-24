/**
 * Returns the index of the first occurrence of a value in an array or string.
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const indexOfBar = indexOf("bar");
 * indexOfBar(["foo", "bar", "baz"]); // 1
 * indexOfBar("foobar"); // 3
 * ```
 * @param item Item to search (turned to string when searching in string).
 * @returns Curried function with `item` in closure.
 */
export const indexOf = <Item>(item: Item) =>
	/**
	 * @param source Source array or string to search in.
	 * @returns Index of the first occurrence of `item` in `source`, -1 when
	 * missing.
	 */
	(
		source: Item extends string
			? readonly string[] | string
			: readonly Item[]
	) =>
		source.indexOf(
			(Array.isArray(source) ? item : `${item}`) as string & Item
		);
