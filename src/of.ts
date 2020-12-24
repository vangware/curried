/**
 * Takes a value and wraps it in an array.
 *
 * @category Array
 * @example
 * ```typescript
 * of(1); // [1]
 * ```
 * @param item Value to be wrapped in an array.
 */
export const of = <Item>(item: Item) => [item] as const;
