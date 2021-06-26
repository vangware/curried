import type { GenericArray } from "./GenericArray";
import type { GenericObject } from "./GenericObject";
import type { KeyOf } from "./KeyOf";

/**
 * Generic key for either object or array.
 */
export type ValueOf<Source extends GenericArray | GenericObject> =
	Source[KeyOf<Source>];
