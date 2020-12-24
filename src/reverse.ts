/**
 * Reverses the elements in an array.
 *
 * @category Array
 * @example
 * ```typescript
 * reverse([0, 1, 2, 3]); // [3, 2, 1, 0]
 * ```
 * @param source Array to be reversed.
 * @returns Copy of source with values in reversed order.
 */
export const reverse = <Item>(source: readonly Item[]) =>
	[...source].reverse() as readonly Item[];
