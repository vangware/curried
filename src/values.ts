import type { GenericArray } from "./types/GenericArray";
import type { GenericObject } from "./types/GenericObject";
import type { ValueOf } from "./types/ValueOf";

/**
 * Returns an array of values of the enumerable properties of an object
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * values({ foo: "foo", bar: "bar" }); // ["foo", "bar"]
 * ```
 * @param source Array or object to get the values from.
 * @returns Array of values.
 */
export const values = <Source extends GenericObject | GenericArray>(
	source: Source
) =>
	// eslint-disable-next-line ban/ban
	(Object.values(source) as unknown) as Source extends GenericArray
		? Readonly<Source>
		: readonly ValueOf<Source>[];
