import type { PropertyAccessorDescriptor } from "./types/PropertyAccessorDescriptor";
import type { PropertyDescriptor } from "./types/PropertyDescriptor";
import type { PropertyValueDescriptor } from "./types/PropertyValueDescriptor";

/**
 * Adds a property to an object, or modifies attributes of an existing property.
 *
 * @category Object
 * @example
 * ```typescript
 * const defineFooProperty = defineProperty({
 * 	get: () => "foo"
 * });
 * const defineFooPropertyFoo = defineFooProperty("foo")
 * defineFooPropertyFoo({}).foo; // "foo"
 * ```
 * @param descriptor Property descriptor function.
 * @returns Curried function with `descriptor` in closure.
 */
export const defineProperty = <Descriptor extends Partial<PropertyDescriptor>>(
	descriptor: Descriptor
) =>
	/**
	 * @param property Property name.
	 * @returns Curried function with `descriptor` and `property` in closure.
	 */
	<Property extends PropertyKey>(property: Property) =>
		/**
		 * @param source Source object to add the property into.
		 * @returns Copy of given `source` object with new property.
		 */
		<Source>(source: Source) =>
			Object.defineProperty(
				{ ...source },
				property,
				descriptor
			) as Readonly<Source> &
				{
					readonly // eslint-disable-next-line max-len
					[key in Property extends number | string
						? `${Property}`
						: never]: Descriptor extends PropertyValueDescriptor
						? Descriptor["value"]
						: Descriptor extends PropertyAccessorDescriptor
						? ReturnType<Descriptor["get"]>
						: undefined;
				};
