import type { UnicodeNormalization } from "./types/UnicodeNormalization";

/**
 * Returns the String value result of normalizing the string into the
 * normalization form named by form as specified in Unicode Standard Annex #15,
 * Unicode Normalization Forms.
 *
 * @category String
 * @example
 * ```typescript
 * const normalizeNFC = normalize("NFC");
 * normalizeNFC("foobar"); // "foobar"
 * ```
 * @param normalization Type of normalization to be applied.
 * @returns Curried function with `normalization` in closure.
 */
export const normalize = (normalization: UnicodeNormalization) =>
	/**
	 * @param source String to apply the normalization in.
	 * @returns Normalized string.
	 */
	(source: string) => source.normalize(normalization);
