/**
 * Generic constructor function (takes any parameter and returns unknown).
 */
export type GenericConstructor = new (
	...parameters: readonly never[]
) => unknown;
