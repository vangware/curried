import type { GenericArray } from "./types/GenericArray";

/**
 * Returns a section of the given array or string.
 *
 * @category Array
 * @example
 * ```typescript
 * const sliceFrom1 = slice(1);
 * const sliceFrom1To3 = sliceFrom1(3);
 * sliceFrom1To3([0, 1, 2, 3]); // [1, 2]
 * sliceFrom1To3("foobar"); // "oo"
 * ```
 * @param start Slice start.
 * @returns Curried function with `start` in closure.
 */
export const slice = (start: number) =>
	/**
	 * @param end Slice end.
	 * @returns Curried function with `start` and `end` in closure.
	 */
	(end: number) =>
		/**
		 * @param source Array or string to slice.
		 * @returns Sliced copy of `source` array or string using `start` and
		 * `end`.
		 */
		<Source extends GenericArray | string>(source: Source) =>
			source.slice(start, end) as Source extends string
				? string
				: readonly Source[number][];
