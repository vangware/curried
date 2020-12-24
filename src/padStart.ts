/**
 * Pads the current string with a given string (possibly repeated) so that the
 * resulting string reaches a given length. The padding is applied from the
 * start (left) of the current string.
 *
 * @category String
 * @example
 * ```typescript
 * const padStartZeroes = padStart("0");
 * const padStartZeroes3 = padStartZeroes(3);
 * padStartZeroes3("7"); // "007"
 * ```
 * @param filler String to be used as a filler.
 * @returns Curried function with `filler` in closure.
 */
export const padStart = (filler: string) =>
	/**
	 * @param maxLength Maximum length of the output string.
	 * @returns Curried function with `filler` and `maxLength` in closure.
	 */
	(maxLength: number) =>
		/**
		 * @param source String to be extended with given filler.
		 * @returns Extended string with given `filler` and `maxLength`.
		 */
		(source: string) => source.padStart(maxLength, filler);
