/**
 * Checks if the given source string ends with the given search string.
 *
 * @category String
 * @example
 * ```typescript
 * const endsWithFoo = endsWith("foo");
 * endsWithFoo("foobar"); // false
 * endsWithFoo("barfoo"); // true
 * ```
 * @param search String to search in the source string.
 * @returns Curried function with `search` in closure.
 */
export const endsWith = <Search extends string>(search: Search) =>
	/**
	 * @param source Source string to search in.
	 * @returns True if `source` string ends with `search`, false if not.
	 */
	<Source extends string>(source: Source) =>
		source.endsWith(search) as Source extends `${string}${Search}`
			? true
			: false;
