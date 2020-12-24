import type { Mapper } from "./Mapper";

/**
 * Reducer function.
 *
 * @param accumulator Reducer accumulator.
 * @returns Mapper with accumulator context.
 */
export type Reducer<Item, Output = readonly Item[]> = Mapper<
	Item,
	(accumulator: Output) => Output
>;
