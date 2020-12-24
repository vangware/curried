/**
 * Promise handlers object (has reject and resolve).
 */
export type PromiseHandlers<Value> = {
	/**
	 * Call this to reject current promise.
	 *
	 * @param reason Reason to reject.
	 */
	readonly reject: (reason?: unknown) => unknown;

	/**
	 * Call this to resolve current promise.
	 *
	 * @param value Resolved value.
	 */
	readonly resolve: (value: Value) => unknown;
};
