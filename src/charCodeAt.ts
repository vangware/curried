/**
 * Returns the Unicode value of the character at the specified location.
 *
 * @category String
 * @example
 * ```typescript
 * const charCodeAt0 = charCodeAt(0);
 * charCodeAt0("foobar"); // 102
 * ```
 * @param index The zero-based index of the desired character.
 * If there is no character at the specified index, NaN is returned.
 * @returns Curried function with `index` in closure.
 */
export const charCodeAt = (index: number) =>
	/**
	 * @param source String to get the unicode value from.
	 * @returns Unicode value of the given `index` in the given `text` string.
	 */
	(source: string) => source.charCodeAt(index);
