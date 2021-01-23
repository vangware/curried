import { createRegExp } from "./createRegExp";

/**
 * Returns a Boolean value that indicates whether or not a pattern exists in a
 * searched string.
 *
 * @category RegExp
 * @category String
 * @example
 * ```typescript
 * const testFoo = test(/foo/gu);
 * testFoo("foo"); // true
 * testFoo("bar"); // false
 * ```
 * @param search Regular expression to search.
 * @returns Curried function with `search` in closure.
 */
export const test = (search: RegExp) =>
	/**
	 * @param source String to search on.
	 * @returns True if matches, false if it doesn't.
	 */
	(source: string) => createRegExp(search).test(source);
