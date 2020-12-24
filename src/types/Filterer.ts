import type { GuardedFilterer } from "./GuardedFilterer";
import type { UnguardedFilterer } from "./UnguardedFilterer";

/**
 * Filterer function.
 */
export type Filterer<Item, Filtered extends Item = Item> =
	| GuardedFilterer<Item, Filtered>
	| UnguardedFilterer<Item>;
