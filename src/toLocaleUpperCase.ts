import type { Locale } from "./types/Locale";

/**
 * Returns a string where all alphabetic characters have been converted to
 * upper case, taking into account the host environment's current locale.
 *
 * @category String
 * @example
 * ```typescript
 * const toLocaleUpperCaseEnUS = toLocaleUpperCase("en-US");
 * toLocaleUpperCaseEnUS("foobar"); // "FOOBAR"
 * ```
 * @param locales Array of locales or a single locale to be used.
 * @returns String with alphabetic characters in upper case.
 */
export const toLocaleUpperCase = (locales: readonly Locale[] | Locale) => (
	source: string
) =>
	source.toLocaleUpperCase(
		Array.isArray(locales) ? [...locales] : (locales as string)
	);
