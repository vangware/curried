import type { DateTimeFormatOptions } from "./types/DateTimeFormatOptions";
import type { Locale } from "./types/Locale";

/**
 * Converts a date to a string by using the current or specified locale.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * const toLocaleDateStringEnUS = toLocaleDateString({})("en-US");
 * const toLocaleDateStringEsAR = toLocaleDateString({})("es-AR");
 * toLocaleDateStringEnUS(date); // 10/13/1989
 * toLocaleDateStringEsAR(date); // 13/10/1989
 * ```
 * @param options Internationalization date format options.
 * @returns Return description
 */
export const toLocaleDateString = (options: DateTimeFormatOptions) =>
	/**
	 * @param locales Array of locales or a single locale to be used.
	 * @returns Localized date string.
	 */
	(locales: readonly Locale[] | Locale) => (source: Date) =>
		source.toLocaleDateString(
			Array.isArray(locales) ? [...locales] : (locales as string),
			options
		);
