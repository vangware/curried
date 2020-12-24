import type { Filterer } from "./types/Filterer";

/**
 * Determines whether all the members of an array satisfy the predicate.
 *
 * @category Array
 * @example
 * ```typescript
 * const everyNumber = every(isNumber);
 * everyNumber([0, 1, 2]); // true
 * everyNumber([0, 1, "foo", 2]); // false
 * ```
 * @param predicate Function to test every item.
 * @returns Curried function with `predicate` in closure.
 */
export const every = <Item, Predicated extends Item>(
	predicate: Filterer<Item, Predicated>
) =>
	/**
	 * @param source Array to be tested.
	 * @returns True if every item matches the predicate, false if not.
	 */
	(source: readonly Item[]): source is readonly Predicated[] =>
		source.every(predicate);
