/**
 * Property descriptor properties using accessors.
 */
// eslint-disable-next-line functional/no-mixed-type
export type PropertyAccessorDescriptor<Value = unknown> = {
	readonly get: () => Value;
	readonly set?: (value: Value) => undefined;
};
