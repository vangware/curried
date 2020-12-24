/**
 * Calculates radians angle from the X axis to the given point.
 *
 * @category Math
 * @example
 * ```typescript
 * const atan2X10 = atan2(10);
 * atan2X10(10); // 0.7853981633974483
 * atan2X10(5); // 1.1071487177940904
 * ```
 * @param pointX Point's X coordinate.
 * @returns Curried function with `pointX` in closure.
 */
export const atan2 = (pointX: number) =>
	/**
	 * @param pointY Point's Y coordinate.
	 * @returns Radians angle from the X axis to the given point.
	 */
	(pointY: number) => Math.atan2(pointX, pointY);
