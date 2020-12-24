/**
 * Returns the square root of the sum of squares of given legs.
 *
 * @category Math
 * @example
 * ```typescript
 * hypot([1, 2]); // 2.23606797749979
 * ```
 * @param legs List of values to calculate the hypotenuse.
 * @returns Square root of the sum of squares of given legs
 */
export const hypot = (legs: readonly number[]) => Math.hypot(...legs);
