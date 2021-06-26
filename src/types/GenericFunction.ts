/**
 * Generic function (takes any parameter and returns unknown).
 */
export type GenericFunction<Parameter = never, ReturnValue = unknown> = (
	...parameters: ReadonlyArray<Parameter>
) => ReturnValue;
