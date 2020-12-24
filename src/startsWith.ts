/**
 * Checks if the given source string starts with the given search string.
 *
 * @category String
 * @example
 * ```typescript
 * const startsWithFoo = startsWith("foo");
 * startsWithFoo("foobar"); // true
 * startsWithFoo("barfoo"); // false
 * ```
 * @param search String to search in the source string.
 * @returns Curried function with `search` in closure.
 */
export const startsWith = <Search extends string>(search: Search) =>
	/**
	 * @param source Source string to search in.
	 * @returns True if `source` string starts with `search`, false if not.
	 */
	<Source extends string>(source: Source) =>
		source.startsWith(search) as Source extends `${Search}${string}`
			? true
			: false;
