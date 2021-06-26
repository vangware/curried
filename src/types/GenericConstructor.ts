/**
 * Generic constructor function (takes any parameter and returns unknown).
 */
export type GenericConstructor<Parameter = never, Instance = unknown> = new (
	...parameters: ReadonlyArray<Parameter>
) => Instance;
