import type { Reducer } from "./types/Reducer";

/**
 * Calls the specified callback function for all the elements in an array, in
 * descending order. The return value of the callback function is the
 * accumulated result, and is provided as an argument in the next call to the
 * callback function.
 *
 * @category Array
 * @example
 * ```typescript
 * const sum = reduceRight((item: number) => (total: number) => total + item);
 * const sumStartingInZero = sum(0);
 * const sumStartingInTwo = sum(2);
 *
 * sumStartingInZero([1, 2, 3]); // 6
 * sumStartingInTwo([1, 2, 3]); // 8
 * ```
 * @returns Curried function with `reducer` in closure.
 */
export const reduceRight = <Item, Output = readonly Item[]>(
	reducer: Reducer<Item, Output>
) =>
	/**
	 * @param initialValue Initial value for reducer.
	 * @returns Curried function with `reducer` and `initialValue` in closure.
	 */
	(initialValue: Output) =>
		/**
		 * @param source Array to be reduced.
		 * @returns Reduced value using `reducer` and `initialValue`.
		 */
		(source: readonly Item[]): Output =>
			source.reduceRight(
				// eslint-disable-next-line max-params
				(accumulator, item) => reducer(item)(accumulator),
				initialValue
			);
