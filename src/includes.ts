/**
 * Determines whether an array or an string includes a certain item.
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const includesFoo = includes("foo");
 * includesFoo(["foo", "bar"]); // true
 * includesFoo(["baz", "bar"]); // false
 * includesFoo("foobar"); // true
 * ```
 * @param item Item to search (turned to string when searching in string).
 * @returns Curried function with `item` in closure.
 */
export const includes = <Item>(item: Item) =>
	/**
	 * @param source Source array or string to search in.
	 * @returns True when `source` has `item`, false when not.
	 */
	(
		source: Item extends string
			? readonly string[] | string
			: readonly Item[]
	) =>
		source.includes(
			(Array.isArray(source) ? item : `${item}`) as string & Item
		);
