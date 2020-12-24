/**
 * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the
 * code point value of the UTF-16 encoded code point starting at the string
 * element at position pos in the String resulting from converting this object
 * to a String. If there is no element at that position, the result is
 * undefined. If a valid UTF-16 surrogate pair does not begin at pos, the result
 * is the code unit at pos.
 *
 * @category String
 * @example
 * ```typescript
 * const codePointAt0 = codePointAt(0);
 * codePointAt0("foo"); // 102
 * ```
 * @param index Index of the code point.
 * @returns Curried function with `index` in closure.
 */
export const codePointAt = (index: number) =>
	/**
	 * @param source String to get the index value from.
	 * @returns Nonnegative integer number code point of the given `index` in
	 * the given `text` string.
	 */
	(source: string) => source.codePointAt(index);
