import type { Entries } from "./types/Entries";
import type { GenericArray } from "./types/GenericArray";
import type { GenericObject } from "./types/GenericObject";
import type { ValidKey } from "./types/ValidKey";
import type { ValueOf } from "./types/ValueOf";

/**
 * Takes a `source` object or array and returns an entries array.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * entries({ foo: "bar", number: 1 }); // [["foo", "bar"], ["number", 1]]
 * entries(["foo", "bar"]); // [[0, "foo"], [1, "bar"]]
 * ```
 * @param source Object or array.
 * @returns Array of entries of the given source object or array.
 */
export const entries = <Source extends GenericObject | GenericArray>(
	source: Source
) =>
	(Array.isArray(source)
		? ([...source.entries()] as const)
		: (Object.entries(source) as unknown)) as Entries<
		Source extends GenericArray
			? number
			: keyof Source extends ValidKey
			? `${keyof Source}`
			: never,
		ValueOf<Source>
	>;
