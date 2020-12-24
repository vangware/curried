/**
 * Generic function (takes any parameter and returns unknown).
 */
export type GenericFunction = (...parameters: readonly never[]) => unknown;
