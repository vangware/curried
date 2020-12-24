/**
 * Joins all the elements of an array separated by the specified separator.
 *
 * @category Array
 * @example
 * ```typescript
 * const joinWithSpaces = join(" ");
 * joinWithSpaces(["foo", "bar"]); // "foo bar"
 * ```
 * @param separator Value separator.
 * @returns Curried function with `separator` in closure.
 */
export const join = (separator: string) =>
	/**
	 * @param source Array to be joined with `separator`.
	 * @returns String made of array items joined with `separator`.
	 */
	<Item>(source: readonly Item[]) => source.join(separator);
