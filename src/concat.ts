import type { GenericArray } from "./types/GenericArray";

/**
 * Concatenates two arrays or two strings.
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const concatNumbers = concat([0, 1, 2, 3, 4]);
 * concatNumbers(["foo", "bar"]); // ["foo", "bar", 0, 1, 2, 3, 4]
 *
 * const concatFoo = concat("foo");
 * concatFoo("bar"); // "barfoo"
 * ```
 * @param appendage Array or string that will be concatenated.
 * @returns Curried function with `appendage` in closure.
 */
export const concat = <Appendage extends GenericArray | string>(
	appendage: Appendage
) =>
	/**
	 * @param source Array or string.
	 * @returns Array or string with appendage concatenated to it.
	 */
	<Item, Source extends string>(
		source: Appendage extends string ? Source : readonly Item[]
	) =>
		(Array.isArray(appendage)
			? ([...source, ...appendage] as readonly (
					| Item
					| Appendage[number]
			  )[])
			: `${source}${appendage}`) as Appendage extends string
			? `${Source}${Appendage}`
			: readonly (Item | Appendage[number])[];
