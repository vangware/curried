import { isTypeNumber } from "./isTypeNumber";
import type { Radix } from "./types/Radix";
import type { ValidKey } from "./types/ValidKey";

/**
 * Parses given value to string, if number is given, then that's used as a radix
 * and a function is returned expecting an actual value.
 *
 * @category Common
 * @example
 * ```typescript
 * const toStringDecimal = toString(10);
 * toStringDecimal(10); // "10"
 * toString(16)(16); // "10"
 * toString(2)(2); // "10"
 * toString({}); // "[object Object]"
 * toString({ toString: _ => "test" }); // "test"
 * ```
 * @param sourceOrRadix A value or a radix (for numbers).
 * @returns String value or curried function with `sourceOrRadix` in closure.
 */
export const toString = <SourceOrRadix>(sourceOrRadix: SourceOrRadix | Radix) =>
	(isTypeNumber(sourceOrRadix)
		? /**
		   * @param source Value to be turned into string.
		   * @returns String value.
		   */
		  source =>
				isTypeNumber(source)
					? source.toString(sourceOrRadix)
					: `${source}`
		: `${sourceOrRadix}`) as SourceOrRadix extends Radix
		? <Source>(
				source: Source
		  ) => Source extends number
				? SourceOrRadix extends 10
					? `${Source}`
					: string
				: Source extends string
				? `${Source}`
				: Source extends { readonly toString: () => string }
				? ReturnType<Source["toString"]>
				: string
		: SourceOrRadix extends ValidKey
		? `${SourceOrRadix}`
		: SourceOrRadix extends { readonly toString: () => string }
		? ReturnType<SourceOrRadix["toString"]>
		: string;
