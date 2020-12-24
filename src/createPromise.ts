import type { PromiseHandler } from "./types/PromiseHandler";

/**
 * Create a new Promise instance.
 *
 * @category Promise
 * @example
 * ```typescript
 * createPromise(({ resolve }) => resolve("foo")); // await "foo"
 * ```
 * @param handler Promise handler function.
 * @returns New `Promise` instance.
 */
export const createPromise = <Resolved>(handler: PromiseHandler<Resolved>) =>
	// eslint-disable-next-line max-params
	new Promise<Resolved>((resolve, reject) => handler({ reject, resolve }));
