import { NULL } from "./constants";
import { is } from "./is";
import type { TypeOf } from "./types/TypeOf";
import type { TypeOfMap } from "./types/TypeOfMap";

/**
 * Takes a `type` string and checks if given `entity` is of that `typeof`. This
 * "patches" typeof so `null` is not `"object"` but `"null"` instead (rejected
 * proposal for lack of backwards compatibility, more details
 * [here](http://lshi.ru/null-typeof)).
 *
 * @category Common
 * @example
 * ```typescript
 * const isString = isType("string");
 *
 * isString("value"); // true
 * isString(1); // false
 * ```
 * @param type Type to check (from `typeof`).
 * @returns Curried function with `type` in context.
 */
export const isType = <Type extends TypeOf>(type: Type) =>
	/**
	 * @template Actual Actual type of the entity.
	 * @param entity Entity to check.
	 * @returns `true` if `entity`'s `typeof` is equal to `type`.
	 */
	<Actual = unknown>(
		entity: Actual | TypeOfMap[Type]
	): entity is TypeOfMap[Type] => {
		const typeIs = is(type);

		// eslint-disable-next-line no-null/no-null
		return is(null)(entity) ? typeIs(NULL) : typeIs(typeof entity);
	};
