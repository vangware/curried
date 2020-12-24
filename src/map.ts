import type { Mapper } from "./types/Mapper";

/**
 * Calls a defined callback function on each element of an array, and returns an
 * array that contains the results.
 *
 * @category Array
 * @example
 * ```typescript
 * const mapDouble = map((item: number) => item * 2);
 * mapDouble([0, 1, 2, 3]); // [0, 2, 4, 6]
 * ```
 * @param mapper Mapper function function.
 * @returns Curried function with `mapper` in closure.
 */
export const map = <Item, Output = Item>(mapper: Mapper<Item, Output>) =>
	/**
	 * @param source Array to be mapped.
	 * @returns Copy of source with mapped values using `mapper`.
	 */
	(source: readonly Item[]) =>
		source.map(item => mapper(item)) as readonly Output[];
