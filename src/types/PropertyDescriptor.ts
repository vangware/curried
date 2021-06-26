import type { PropertyAccessorDescriptor } from "./PropertyAccessorDescriptor";
import type { PropertyValueDescriptor } from "./PropertyValueDescriptor";

/**
 * PropertyDescriptor on steroids.
 */
export type PropertyDescriptor<Value = unknown> = Partial<
	PropertyAccessorDescriptor<Value>
> &
	Partial<PropertyValueDescriptor<Value>> & {
		readonly configurable: boolean;
		readonly enumerable: boolean;
		readonly writable: boolean;
	};
