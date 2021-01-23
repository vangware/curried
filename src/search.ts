import { createRegExp } from "./createRegExp";
import { instanceOfRegExp } from "./instanceOfRegExp";

/**
 * Finds the first substring match in a regular expression or string search.
 *
 * @category RegExp
 * @category String
 * @example
 * ```typescript
 * const searchBar = search("bar")
 * searchBar("foobar"); // 3
 * ```
 * @param searchValue Search regular expression or string.
 * @returns Curried function with `searchValue` in closure.
 */
export const search = (searchValue: RegExp | string) =>
	/**
	 * @param source String to search on.
	 * @returns Index of item or -1 if missing.
	 */
	(source: string) =>
		source.search(
			instanceOfRegExp(searchValue)
				? createRegExp(searchValue)
				: searchValue
		);
