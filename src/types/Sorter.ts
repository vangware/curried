import type { Mapper } from "./Mapper";

/**
 * Sorter function.
 *
 * @param next Item following the current one.
 * @returns Mapped value.
 */
export type Sorter<Item> = (next: Item) => Mapper<Item, number>;
