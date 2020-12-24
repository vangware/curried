/**
 * Attaches callbacks for the resolution and/or rejection of a Promise.
 *
 * @category Promise
 * @example
 * ```typescript
 * const thenJson = then((response: Response) => response.json());
 * thenJson(fetch("/api")); // Parsed response
 * ```
 * @param handler Promise handler.
 * @returns Handled promise.
 */
export const then = <Argument, Output>(
	handler: (argument: Argument) => Output
) => <Source extends Promise<Argument>>(promise: Source) =>
	promise.then(handler);
