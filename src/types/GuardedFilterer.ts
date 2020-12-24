/**
 * Guarded filterer function.
 */
export type GuardedFilterer<Item, Filtered extends Item> = (
	item: Item
) => item is Filtered;
