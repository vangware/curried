import type { GenericObject } from "./types/GenericObject";

/**
 * Creates a new instance of Proxy.
 *
 * @category Proxy
 * @example
 * ```typescript
 * const getProxy = createProxy({
 * 	get: _ => "foobar"
 * });
 * getProxy({ nope: "nope" }).nope; // "foobar"
 * ```
 * @param handler Proxy handler.
 * @returns Curried function with `handler` in closure.
 */
export const createProxy = <Source extends GenericObject>(
	handler: ProxyHandler<Source>
) =>
	/**
	 * @param source Source object to be wrapped by the proxy.
	 * @returns New `Proxy` instance wrapping given `source` with given
	 * `handler`.
	 */
	(source: Source) => new Proxy(source, handler);
