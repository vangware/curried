import { instanceOfRegExp } from "./instanceOfRegExp";
import type { RegExpFlags } from "./types/RegExpFlags";

/**
 * Create a new instance of `RegExp`.
 *
 * @category RegExp
 * @example
 * ```typescript
 * createRegExp(/.+/gu); // /.+/gu
 *
 * const createGlobalUnicodeRegExp("gu");
 * createGlobalUnicodeRegExp(".+"); // /.+/gu
 * ```
 * @param regExpOrFlags A Regular expression or a flags string.
 * @returns Curried function with `regExpOrFlags` in closure or new instance of
 * `RegExp`.
 */
export const createRegExp = <RegExpOrFlags extends RegExp | RegExpFlags>(
	regExpOrFlags: RegExpOrFlags
) =>
	(instanceOfRegExp(regExpOrFlags)
		? new RegExp(regExpOrFlags.source, regExpOrFlags.flags)
		: /**
		   * @param source Source string or RegExp.
		   * @returns New instance of `RegExp`.
		   */
		  source =>
				new RegExp(
					source,
					regExpOrFlags as RegExpFlags
				)) as RegExpOrFlags extends RegExp
		? RegExp & { readonly flags: RegExpFlags }
		: <Source extends RegExp | string>(
				source: Source
		  ) => (Source extends RegExp ? Source : RegExp) & {
				readonly flags: RegExpOrFlags;
		  };
