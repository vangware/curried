import type { CollatorOptions } from "./types/CollatorOptions";
import type { Locale } from "./types/Locale";

/**
 * Determines whether two strings are equivalent in the current or specified
 * locale.
 *
 * @category String
 * @example
 * ```typescript
 * const localeCompareEnUS = localeCompare({})("en-US");
 * const localeCompareFoo = localeCompareEnUS("foo");
 * localeCompareFoo("foo"); // 0
 * localeCompareFoo("bar"); // -1
 * ```
 * @param options Internationalization collator options.
 * @returns Curried function with `options` in closure.
 */
export const localeCompare = (options: CollatorOptions) =>
	/**
	 * @param locales Locale or locales to be used to compare.
	 * @returns Curried function with `options` and `locales` in closure.
	 */
	(locales: readonly Locale[] | Locale) =>
		/**
		 * @param compareString String to compare with.
		 * @returns Curried function with `options`, `locales` and
		 * `compareString` in closure.
		 */
		(compareString: string) =>
			/**
			 * @param source String to compare.
			 * @returns A negative number if `source` occurs before
			 * `compareString`; positive if the `source` occurs after
			 * `compareString`; 0 if they are equivalent.
			 */
			(source: string) =>
				source.localeCompare(
					compareString,
					Array.isArray(locales) ? [...locales] : (locales as string),
					options
				);
