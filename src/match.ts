import { createRegExp } from "./createRegExp";

/**
 * Matches a string or an object that supports being matched against, and
 * returns an array containing the results of that search, or null if no matches
 * are found.
 *
 * @category String
 * @example
 * ```typescript
 * const matchChars = match(/./gu);
 * matchChars("foo"); // ["f", "o", "o"]
 * ```
 * @param search Regular expression to search.
 * @returns Curried function with `search` in closure.
 */
export const match = (search: RegExp) =>
	/**
	 * @param source String to search on.
	 * @returns Instance of `RegExpMatchArray`.
	 */
	(source: string) => source.match(createRegExp(search)) ?? [];
