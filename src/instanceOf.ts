import type { GenericConstructor } from "./types/GenericConstructor";

/**
 * Takes a `constructor` and checks if given `entity` is an instance of it.
 *
 * @category Common
 * @example
 * ```typescript
 * const instanceOfArray = instanceOf(Array)
 *
 * instanceOfArray([]); // true
 * instanceOfArray({}); // false
 * ```
 * @param constructor Constructor used to check.
 * @returns Curried function with `constructor` in context.
 */
export const instanceOf = <Expected extends GenericConstructor>(
	constructor: Expected
) =>
	/**
	 * @param entity Entity to check.
	 * @returns `true` if `entity` is `instanceof` given `constructor`.
	 */
	<Actual = unknown>(
		entity: Actual | InstanceType<Expected>
	): entity is InstanceType<Expected> => entity instanceof constructor;
