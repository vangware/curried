import { createArray } from "./createArray";
import { is } from "./is";
import type { GenericArray } from "./types/GenericArray";

/**
 * Creates a new array with the same length as the given one, and filled with
 * filler.
 *
 * @category Array
 * @example
 * ```typescript
 * const numbers = [0, 1, 2, 3, 4];
 * const fooFill = fill("foo");
 * fooFill(numbers); // ["foo", "foo", "foo", "foo", "foo"]
 * ```
 *
 * @param filler Filler value.
 * @returns Curried function with `filler` in closure.
 */
export const fill = <Filler>(filler: Filler) =>
	/**
	 * @param param0 Array to be filled with given filler.
	 * @returns New array with same length as `array`, filled with `filler`.
	 */
	({ length }: GenericArray) =>
		(is(0)(length)
			? []
			: // eslint-disable-next-line ban/ban
			  [
					...(createArray(length) as readonly (Filler | undefined)[])
			  ].fill(filler)) as readonly Filler[];
