/**
 * Creates a new array instance of given length.
 *
 * @category Array
 * @example
 * ```typescript
 * const newArray = createArray(3); // [undefined, undefined, undefined]
 * ```
 * @param length Length of the new array.
 * @returns New `Array` instance with given length.
 */
export const createArray = (length: number) =>
	Array.from({ length }) as readonly undefined[];
