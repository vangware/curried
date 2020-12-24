/**
 * Returns the character at the specified index.
 *
 * @category String
 * @example
 * ```typescript
 * const charAt0 = charAt(0);
 * charAt0("foo"); // "f"
 * ```
 * @param index Index of the character to get.
 * @returns Curried function with `index` in closure.
 */
export const charAt = <Index extends number>(index: Index) =>
	/**
	 * @param source String to get the character from.
	 * @returns Character from `text` in given `index`.
	 */
	<Source extends string>(source: Source) =>
		source.charAt(index) as `${Source[Index]}`;
