import type { Entries } from "./types/Entries";
import type { ValidKey } from "./types/ValidKey";

/**
 * Takes a `source` entries array and returns an object.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * fromEntries([["key", "value"]]); // { key: "value" }
 * fromEntries([
 * 	["foo", "bar"],
 * 	["number", 1]
 * ]); // { foo: "bar", number: 1 }
 * ```
 * @param entries Entries array.
 * @returns Object resulting of given entries.
 */
export const fromEntries = <Source extends Entries>(entries: Source) =>
	Object.fromEntries(entries) as Record<
		Source[number][0] extends ValidKey ? `${Source[number][0]}` : never,
		Source[number][1]
	>;
