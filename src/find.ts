import type { Filterer } from "./types/Filterer";

/**
 * Returns the value of the first element in the array where predicate is true,
 * and undefined otherwise.
 *
 * @category Array
 * @example
 * ```typescript
 * const find1 = find(item => item.value === 1);
 * find1([{ value: 0 }], [{ value: 1 }]); // { value: 1 }
 * ```
 * @param searcher Searcher function.
 * @returns Curried function with `searcher` in closure.
 */
export const find = <Item, Found extends Item>(
	searcher: Filterer<Item, Found>
) =>
	/**
	 * @param source Array to look into.
	 * @returns Found item or undefined if none matches.
	 */
	(source: readonly Item[]) =>
		source.find((item): item is Found => searcher(item));
