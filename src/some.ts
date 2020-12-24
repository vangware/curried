import type { Filterer } from "./types/Filterer";

/**
 * Determines whether the specified callback function returns true for any
 * element of an array.
 *
 * @category Array
 * @example
 * ```typescript
 * const someNumber = some(isNumber);
 * someNumber([0, 1, 2]); // true
 * someNumber([0, 1, "foo", 2]); // true
 * someNumber(["foo", "bar"]); // false
 * ```
 * @param predicate Function predicate to test until some item of the type.
 * @returns Curried function with `predicate` in closure.
 */
export const some = <Item, Predicated extends Item>(
	predicate: Filterer<Item, Predicated>
) =>
	/**
	 * @param source Array to be tested.
	 * @returns True if some item matches the predicate, false if none does.
	 */
	(source: readonly Item[]): source is readonly (Item | Predicated)[] =>
		source.some(predicate);
