import type { GenericArray } from "./types/GenericArray";
import type { GenericObject } from "./types/GenericObject";
import type { ValidKey } from "./types/ValidKey";

/**
 * Returns the names of the enumerable string properties and methods of an
 * object or the number keys of an array.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * keys({ foo: "foo", bar: "bar" }); // ["foo", "bar"]
 * keys(["foo", "bar"]); // [0, 1]
 * ```
 * @param source Object or array to get the keys from.
 * @returns Array of keys in source.
 */
export const keys = <Source extends GenericObject | GenericArray>(
	source: Source
) =>
	(Array.isArray(source)
		? // eslint-disable-next-line ban/ban
		  ([...source.keys()] as const)
		: // eslint-disable-next-line ban/ban
		  (Object.keys(
				source
		  ) as unknown)) as readonly (Source extends GenericArray
		? number
		: keyof Source extends ValidKey
		? `${keyof Source}`
		: never)[];
