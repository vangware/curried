import type { Entry } from "./Entry";

/**
 * Array of Entries (`Entry` type).
 */
export type Entries<Key = unknown, Value = unknown> = ReadonlyArray<
	Entry<Key, Value>
>;
