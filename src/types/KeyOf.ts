import type { GenericArray } from "./GenericArray";
import type { GenericObject } from "./GenericObject";

/**
 * Generic key for either object or array.
 */
export type KeyOf<Source extends GenericArray | GenericObject> =
	Source extends GenericArray ? number : keyof Source;
