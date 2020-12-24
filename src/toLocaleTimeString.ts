import type { DateTimeFormatOptions } from "./types/DateTimeFormatOptions";
import type { Locale } from "./types/Locale";

/**
 * Converts a time to a string by using the current or specified locale.
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * const toLocaleTimeStringGMT = toLocaleTimeString({ timeZone: "GMT" });
 * const toLocaleTimeStringEnUS = toLocaleTimeStringGMT("en-US");
 * const toLocaleTimeStringEsAR = toLocaleTimeStringGMT("es-AR");
 * toLocaleTimeStringEnUS(date); // 3:15:31 AM
 * toLocaleTimeStringEsAR(date); // 03:15:31
 * ```
 * @param options Internationalization date format options.
 * @returns Curried function with `options` in closure.
 */
export const toLocaleTimeString = (options: DateTimeFormatOptions) =>
	/**
	 * @param locales Array of locales or a single locale to be used.
	 * @returns Localized time string.
	 */
	(locales: readonly Locale[] | Locale) => (source: Date) =>
		source.toLocaleTimeString(
			Array.isArray(locales) ? [...locales] : (locales as string),
			options
		);
