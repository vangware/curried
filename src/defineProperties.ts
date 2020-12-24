import type { PropertyAccessorDescriptor } from "./types/PropertyAccessorDescriptor";
import type { PropertyDescriptor } from "./types/PropertyDescriptor";
import type { PropertyValueDescriptor } from "./types/PropertyValueDescriptor";

/**
 * Adds one or more properties to an object, and/or modifies attributes of
 * existing properties.
 *
 * @category Object
 * @example
 * ```typescript
 * const defineFooBarProperties = defineProperties({
 * 	foo: {
 * 		get: () => "foo"
 * 	},
 * 	bar: {
 * 		get: () => "bar"
 * 	}
 * });
 * defineFooBarProperties({}).bar; // "bar"
 * ```
 * @param descriptors Object that contains one or more descriptor objects. Each
 * descriptor object describes a data property or an accessor property.
 * @returns Curried function with `descriptors` in closure.
 */
export const defineProperties = <
	Descriptors extends Record<string, PropertyDescriptor>
>(
	descriptors: Descriptors
) =>
	/**
	 * @param source Source object to set properties on.
	 * @returns Copy of object with new properties on it.
	 */
	<Source>(source: Source) =>
		Object.defineProperties(
			{ ...source },
			descriptors
		) as Readonly<Source> &
			{
				readonly // eslint-disable-next-line max-len
				[Key in keyof Descriptors]: Descriptors[Key] extends PropertyValueDescriptor
					? Descriptors[Key]["value"]
					: Descriptors[Key] extends PropertyAccessorDescriptor
					? ReturnType<Descriptors[Key]["get"]>
					: undefined;
			};
