/**
 * Mapper function.
 *
 * @param item Item of the source array.
 * @returns Mapped value.
 */
export type Mapper<Item, Output> = (item: Item) => Output;
