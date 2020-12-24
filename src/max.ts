/**
 * Returns the larger of a set of supplied numeric expressions.
 *
 * @category Math
 * @example
 * ```typescript
 * min([10, 15, 5]); // 15
 * ```
 * @param numbers Values to check.
 * @returns Largest number in the given array of numbers.
 */
export const max = (numbers: readonly number[]) => Math.max(...numbers);
