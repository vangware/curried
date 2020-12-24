import type { Filterer } from "./types/Filterer";

/**
 * Returns the index of the first element in the array where the searcher
 * returns true, and -1 otherwise.
 *
 * @category Array
 * @example
 * ```typescript
 * const findBarIndex = findIndex(item => item.value === "bar");
 * findBarIndex([{ value: "foo" }], [{ value: "bar" }]); // 1
 * ```
 * @param searcher Searcher function.
 * @returns Curried function with `searcher` in closure.
 */
export const findIndex = <Item, Found extends Item>(
	searcher: Filterer<Item, Found>
) =>
	/**
	 * @param source Array to look into.
	 * @returns Found item index or `-1` if none matches.
	 */
	(source: readonly Item[]) => source.findIndex(item => searcher(item));
