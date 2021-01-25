/**
 * Generic object (Record of valid property keys and unknown values).
 */
export type GenericObject<
	Key extends PropertyKey = PropertyKey,
	Value = unknown
> = Record<Key, Value>;
