import type { Filterer } from "./types/Filterer";

/**
 * Returns the elements of an array that returned true after going trough the
 * filterer.
 *
 * @category Array
 * @example
 * ```typescript
 * const filterInEven = filter((item: number) => item % 2 === 0);
 * const filterOutEmpty = filter((item: string) => item !== "");
 *
 * filterInEven([0, 1, 2, 3]); // [0, 2]
 * filterOutEmpty(["hello", "", "", "world"]); // ["hello", "world"]
 * ```
 * @param filterer Filterer function.
 * @returns Curried function with `filter` in closure.
 */
export const filter = <Item, Filtered extends Item>(
	filterer: Filterer<Item, Filtered>
) =>
	/**
	 * @param source Array to filtered.
	 * @returns Array with items that passed the filterer.
	 */
	(source: readonly Item[]) =>
		source.filter((item): item is Filtered =>
			filterer(item)
		) as readonly Filtered[];
