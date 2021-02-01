import type { GenericObject } from "./types/GenericObject";
import type { Nullish } from "./types/Nullish";
import type { PropertyDescriptor } from "./types/PropertyDescriptor";

/**
 * Gets the own property descriptor of the specified object. An own property
 * descriptor is one that is defined directly on the object and is not inherited
 * from the object's prototype.
 *
 * @category Object
 * @example
 * ```typescript
 * const getOwnPropertyDescriptorFoo = getOwnPropertyDescriptor("foo");
 * getOwnPropertyDescriptorFoo({ foo: "bar" });
 * // {
 * // 	value: "bar",
 * // 	writable: true,
 * // 	enumerable: true,
 * // 	configurable: true
 * // }
 * ```
 * @param property Property to get descriptor from.
 * @returns Curried function with `property` in closure.
 */
export const getOwnPropertyDescriptor = <Property extends PropertyKey>(
	property: Property
) =>
	/**
	 * @param source Source object to get the property descriptor from.
	 */
	<Source extends GenericObject>(source: Source) =>
		Object.getOwnPropertyDescriptor(
			source,
			property
		) as Source[Property] extends Nullish
			? undefined
			: PropertyDescriptor<Source[Property]>;
