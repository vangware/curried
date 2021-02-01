import type { GenericObject } from "./types/GenericObject";
import type { PropertyDescriptor } from "./types/PropertyDescriptor";

/**
 * Returns an object containing all own property descriptors of an object.
 *
 * @category Object
 * @example
 * ```typescript
 * getOwnPropertyDescriptors({ foo: "bar" });
 * // {
 * // 	foo: {
 * // 		value: "bar",
 * // 		writable: true,
 * // 		enumerable: true,
 * // 		configurable: true
 * // 	}
 * // }
 * ```
 * @param property Property to get descriptor from.
 * @returns Curried function with `property` in closure.
 */
export const getOwnPropertyDescriptors = <Source extends GenericObject>(
	source: Source
) =>
	Object.getOwnPropertyDescriptors(source) as {
		readonly [Key in keyof Source extends string | number
			? keyof Source
			: never]: PropertyDescriptor<Source[Key]>;
	};
