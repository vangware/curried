import type { GenericFunction } from "./types/GenericFunction";

/**
 * Bounds the given context to the given method.
 *
 * @category Function
 * @example
 * ```typescript
 * const bindConsole = bind(console);
 * const log = bindConsole(console.log);
 * log("Hello world!"); // Logs "Hello world!" without context errors.
 * ```
 * @param context Context value.
 * @returns Curried function with `context` in closure.
 */
export const bind = <Context>(context: Context) =>
	/**
	 * @param method Method to be bound.
	 * @returns Copy of `method` bound to `context`.
	 */
	<Method extends GenericFunction>(method: Method) =>
		// eslint-disable-next-line ban/ban
		method.bind(context) as Method;
