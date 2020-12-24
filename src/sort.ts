import type { Sorter } from "./types/Sorter";

/**
 * Sorts an array.
 *
 * @category Array
 * @example
 * ```typescript
 * const sortNumbers = sort((next: number) => (item: number) => next - item);
 * sortNumbers([3, 0, 2, 1]); // [0, 1, 2, 3]
 * ```
 * @param sorter Sorter function function.
 * @returns Curried function with `sorter` in closure.
 */
export const sort = <Item>(sorter: Sorter<Item>) =>
	/**
	 * @param source Array to be sorted.
	 * @returns Copy of source with values sorted using `sorter`.
	 */
	(source: readonly Item[]) =>
		// eslint-disable-next-line max-params
		[...source].sort((next, item) => sorter(next)(item)) as readonly Item[];
