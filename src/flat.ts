/**
 * Returns a new array with all sub-array elements concatenated into it
 * recursively up to the specified depth.
 *
 * @category Array
 * @example
 * ```typescript
 * const flat1 = flat(1);
 * flat1([[0,1], [2, 3]]); // [0, 1, 2, 3]
 * ```
 * @param depth Flatting depth.
 * @returns Curried function with `depth` in closure.
 */
export const flat = <Depth extends number>(depth: Depth) =>
	/**
	 * @param source Array to be flatten.
	 * @returns Flattened array.
	 */
	<Item>(source: readonly Item[]) =>
		source.flat<readonly Item[], Depth>(depth);
