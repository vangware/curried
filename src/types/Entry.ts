/**
 * Entity tuple `[key, value]`.
 */
export type Entry<Key = string, Value = unknown> = readonly [
	key: Key,
	value: Value
];
