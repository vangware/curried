/**
 * Returns the smaller of a set of supplied numeric expressions.
 *
 * @category Math
 * @example
 * ```typescript
 * min([10, 15, 5]); // 5
 * ```
 * @param numbers Values to check.
 * @returns Smallest number in the given array of numbers.
 */
export const min = (numbers: readonly number[]) => Math.min(...numbers);
