import type { PromiseHandlers } from "./PromiseHandlers";

/**
 * Promise handler for `createPromise`.
 */
export type PromiseHandler<Value> = (
	handlers: PromiseHandlers<Value>
) => unknown;
