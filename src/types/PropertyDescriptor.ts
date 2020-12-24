import type { PropertyAccessorDescriptor } from "./PropertyAccessorDescriptor";
import type { PropertyValueDescriptor } from "./PropertyValueDescriptor";

/**
 * PropertyDescriptor on steroids (better types).
 */
export type PropertyDescriptor<Value = unknown> = {
	readonly configurable?: boolean;
	readonly enumerable?: boolean;
	readonly writable?: boolean;
} & (
	| Partial<PropertyValueDescriptor<Value>>
	| Partial<PropertyAccessorDescriptor<Value>>
);
