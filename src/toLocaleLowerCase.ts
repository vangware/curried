import type { Locale } from "./types/Locale";

/**
 * Returns a string where all alphabetic characters have been converted to
 * lower case, taking into account the host environment's current locale.
 *
 * @category String
 * @example
 * ```typescript
 * const toLocaleLowerCaseEnUS = toLocaleLowerCase("en-US");
 * toLocaleLowerCaseEnUS("FOOBAR"); // "foobar"
 * ```
 * @param locales Array of locales or a single locale to be used.
 * @returns String with alphabetic characters in lower case.
 */
export const toLocaleLowerCase = (locales: readonly Locale[] | Locale) => (
	source: string
) =>
	source.toLocaleLowerCase(
		Array.isArray(locales) ? [...locales] : (locales as string)
	);
