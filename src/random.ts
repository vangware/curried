/**
 * Calls random method of given object.
 *
 * @category Math
 * @example
 * ```typescript
 * random({ random: () => "foo" }); // "foo"
 * random(Math); // Random value between 0 and 1.
 * ```
 * @param source Object containing a `random` method on it.
 * @returns Output of calling `random` method of given object.
 */
export const random = (source: Pick<Math, "random">) => source.random();
