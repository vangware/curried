import type { GenericObject } from "./types/GenericObject";

/**
 * Returns an array of all symbol properties found directly on given source.
 *
 * @category Object
 * @example
 * ```typescript
 * const fooSymbol = Symbol("foo")
 * getOwnPropertySymbols({ [fooSymbol]: "foo" }); // [Symbol(foo)]
 * ```
 * @param source Object to get the symbols from.
 * @returns Array of symbols.
 */
export const getOwnPropertySymbols = <Source extends GenericObject>(
	source: Source
) => Object.getOwnPropertySymbols(source);
