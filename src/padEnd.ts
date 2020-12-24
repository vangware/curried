/**
 * Pads the current string with a given string (possibly repeated) so that the
 * resulting string reaches a given length. The padding is applied from the end
 * (right) of the current string.
 *
 * @category String
 * @example
 * ```typescript
 * const padEndZeroes = padEnd("0");
 * const padEndZeroes3 = padEndZeroes(3);
 * padEndZeroes3("7"); // "700"
 * ```
 * @param filler String to be used as a filler.
 * @returns Curried function with `filler` in closure.
 */
export const padEnd = (filler: string) =>
	/**
	 * @param maxLength Maximum length of the output string.
	 * @returns Curried function with `filler` and `maxLength` in closure.
	 */
	(maxLength: number) =>
		/**
		 * @param source String to be extended with given filler.
		 * @returns Extended string with given `filler` and `maxLength`.
		 */
		(source: string) => source.padEnd(maxLength, filler);
