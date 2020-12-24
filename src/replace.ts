import { createRegExp } from "./createRegExp";
import { instanceOfRegExp } from "./instanceOfRegExp";

/**
 * Replaces text in a string, using an object that supports replacement within
 * a string.
 *
 * @category String
 * @example
 * ```typescript
 * const replaceWithFoo = replace("foo");
 * const replaceBarWithFoo = replaceWithFoo("bar");
 * replaceBarWithFoo("barbar"); // "foobar"
 * ```
 * @param replacerOrReplacement Function to run in every match, or string to be
 * used as replacement.
 * @returns Curried function with `replacerOrReplacement` in closure.
 */
export const replace = (
	replacerOrReplacement: ((match: string) => string) | string
) =>
	/**
	 * @param search Sub string or RegExp to search.
	 * @returns Curried function with `replacerOrReplacement` and `search` in
	 * closure.
	 */
	(search: RegExp | string) =>
		/**
		 * @param source String to apply replacements in.
		 * @returns String with replacements applied to it once.
		 */
		(source: string) =>
			source.replace(
				instanceOfRegExp(search) ? createRegExp(search) : search,
				// TS was being stupid here (or maybe it was me):
				replacerOrReplacement as string
			);
