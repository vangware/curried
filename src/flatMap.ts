import type { Mapper } from "./types/Mapper";

/**
 * Calls a defined callback function on each element of an array. Then, flattens
 * the result into a new array. This is identical to a map followed by flat with
 * depth 1.
 *
 * @category Array
 * @example
 * ```typescript
 * const mapDouble = flatMap((item: number) => item * 2);
 *
 * mapDouble([0, 1, 2, 3]); // [0, 2, 4, 6]
 * ```
 * @param mapper Mapper function function.
 * @returns Curried function with `mapper` in closure.
 */
export const flatMap = <Item, Output = Item>(
	mapper: Mapper<Item, Output | readonly Output[]>
) =>
	/**
	 * @param source Array to be mapped.
	 * @returns Flattened copy of `source` with mapped values using `mapper`.
	 */
	(source: readonly Item[]) =>
		source.flatMap(item => mapper(item)) as readonly Output[];
